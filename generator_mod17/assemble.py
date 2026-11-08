# -*- coding: utf-8 -*-
"""
Assembly script to construct projectx/src/Componets/BlockchainDEXLending.jsx
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
from gen_lab import generate_lab_and_problems
from gen_assessment import generate_assessment_sections
from gen_tracker import generate_tracker_and_footer

TEMPLATE = r'''// projectx/src/Componets/BlockchainDEXLending.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRightLeft,
  TrendingDown,
  AlertTriangle,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Cpu
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = __DATA_CHECKLIST__;
const QUIZ_QUESTIONS = __DATA_QUIZ__;
const INTERVIEW_QUESTIONS = __DATA_INTERVIEWS__;
const NUMERICAL_PROBLEMS = __DATA_PROBLEMS__;

export default function BlockchainDEXLending() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: DEX Models (AMM vs Order Book)
  const [dexModel, setDexModel] = useState("amm");
  const [ammReserveETH, setAmmReserveETH] = useState(50);
  const [ammReserveUSDC, setAmmReserveUSDC] = useState(100000);
  const [ammSwapIn, setAmmSwapIn] = useState(5.0);
  const [ammFeeTier, setAmmFeeTier] = useState(0.003);
  const [ammSlippage, setAmmSlippage] = useState(0.005);
  const obSpread = 4.0; // 2002 - 1998

  const calculatedAmmOut = useMemo(() => {
    const feeFactor = 1 - ammFeeTier;
    const amountInWithFee = ammSwapIn * feeFactor;
    const outputUSDC = (ammReserveUSDC * amountInWithFee) / (ammReserveETH + amountInWithFee);
    const spotPrice = ammReserveUSDC / ammReserveETH;
    const effectivePrice = outputUSDC / ammSwapIn;
    const priceImpact = Math.max(0, ((spotPrice - effectivePrice) / spotPrice) * 100);
    const feePaid = ammSwapIn * ammFeeTier * spotPrice;
    const minReceived = outputUSDC * (1 - ammSlippage);
    return {
      outputUSDC,
      spotPrice,
      effectivePrice,
      priceImpact,
      feePaid,
      minReceived
    };
  }, [ammReserveETH, ammReserveUSDC, ammSwapIn, ammFeeTier, ammSlippage]);

  const handleExecuteAmmSwap = useCallback(() => {
    const out = calculatedAmmOut.outputUSDC;
    setAmmReserveETH((prev) => prev + ammSwapIn);
    setAmmReserveUSDC((prev) => Math.max(1, prev - out));
  }, [ammSwapIn, calculatedAmmOut.outputUSDC]);

  // Simulator 2 State: Uniswap V3 Concentrated Liquidity
  const [v3CurrentPrice, setV3CurrentPrice] = useState(2000);
  const [v3LowerPrice, setV3LowerPrice] = useState(1800);
  const [v3UpperPrice, setV3UpperPrice] = useState(2400);

  const calculatedV3 = useMemo(() => {
    // Capital efficiency approx vs full range [0, infinity]
    // CE = 1 / (1 - sqrt(Pa / Pb))
    const ratio = Math.sqrt(v3LowerPrice / v3UpperPrice);
    const capitalEfficiency = 1 / (1 - ratio);
    
    let ethRatio = 50;
    let usdcRatio = 50;

    if (v3CurrentPrice < v3LowerPrice) {
      ethRatio = 100;
      usdcRatio = 0;
    } else if (v3CurrentPrice > v3UpperPrice) {
      ethRatio = 0;
      usdcRatio = 100;
    } else {
      // Linear interpolation of composition within range
      const progress = (v3CurrentPrice - v3LowerPrice) / (v3UpperPrice - v3LowerPrice);
      ethRatio = Math.max(0, Math.min(100, (1 - progress) * 100));
      usdcRatio = 100 - ethRatio;
    }

    return {
      capitalEfficiency: Math.min(50, Math.max(2, capitalEfficiency)),
      ethRatio,
      usdcRatio
    };
  }, [v3CurrentPrice, v3LowerPrice, v3UpperPrice]);

  // Simulator 3 State: Multi-Hop Routing
  const [routeAmountIn, setRouteAmountIn] = useState(1.0); // WBTC

  const calculatedRoute = useMemo(() => {
    // Route 1: Direct WBTC -> DAI (Thin liquidity: 10 WBTC, 600,000 DAI)
    const directResWBTC = 10;
    const directResDAI = 600000;
    const directInFee = routeAmountIn * 0.997;
    const directOut = (directResDAI * directInFee) / (directResWBTC + directInFee);
    const directSpot = directResDAI / directResWBTC;
    const directEffective = directOut / routeAmountIn;
    const directPriceImpact = Math.max(0, ((directSpot - directEffective) / directSpot) * 100);

    // Route 2: 2-Hop WBTC -> ETH -> DAI (Deep pools)
    // Hop 1: WBTC/ETH (Pool has 200 WBTC, 6,000 ETH)
    const h1ResWBTC = 200;
    const h1ResETH = 6000;
    const h1InFee = routeAmountIn * 0.997;
    const h1OutETH = (h1ResETH * h1InFee) / (h1ResWBTC + h1InFee);

    // Hop 2: ETH/DAI (Pool has 10,000 ETH, 20,000,000 DAI)
    const h2ResETH = 10000;
    const h2ResDAI = 20000000;
    const h2InFee = h1OutETH * 0.997;
    const multiHopOut = (h2ResDAI * h2InFee) / (h2ResETH + h2InFee);
    const multiHopEffective = multiHopOut / routeAmountIn;
    const multiHopPriceImpact = Math.max(0, ((directSpot - multiHopEffective) / directSpot) * 100);

    return {
      directOut,
      directPriceImpact,
      multiHopOut,
      multiHopPriceImpact,
      bestRoute: multiHopOut >= directOut ? "multihop" : "direct"
    };
  }, [routeAmountIn]);

  // Simulator 4 State: Lending & Liquidation Engine
  const [lendingEthCollateral, setLendingEthCollateral] = useState(10); // ETH
  const [lendingUsdcDebt, setLendingUsdcDebt] = useState(10000); // USDC
  const [lendingMarketCrash, setLendingMarketCrash] = useState(0); // % drop

  const calculatedLending = useMemo(() => {
    const baseEthPrice = 2000;
    const crashedEthPrice = baseEthPrice * (1 - lendingMarketCrash / 100);
    const totalCollateralValue = lendingEthCollateral * crashedEthPrice;
    const liquidationThresholdBps = 8000; // 80%
    const adjustedCollateralThreshold = (totalCollateralValue * liquidationThresholdBps) / 10000;

    let healthFactor = 999;
    if (lendingUsdcDebt > 0) {
      healthFactor = adjustedCollateralThreshold / lendingUsdcDebt;
    }

    // Liquidation price boundary: debt = (collateral * price * 0.8) => price = debt / (collateral * 0.8)
    const liquidationPriceBoundary = lendingUsdcDebt / (lendingEthCollateral * 0.8);

    return {
      crashedEthPrice,
      totalCollateralValue,
      adjustedCollateralThreshold,
      healthFactor,
      liquidationPriceBoundary
    };
  }, [lendingEthCollateral, lendingUsdcDebt, lendingMarketCrash]);

  const handleExecuteLiquidation = useCallback(() => {
    // 50% close factor
    const debtToRepay = lendingUsdcDebt * 0.5;
    // Seize collateral worth debtToRepay * 1.05
    const collateralValueSeized = debtToRepay * 1.05;
    const ethSeized = collateralValueSeized / calculatedLending.crashedEthPrice;

    setLendingUsdcDebt((prev) => Math.max(0, prev - debtToRepay));
    setLendingEthCollateral((prev) => Math.max(0.1, prev - ethSeized));
  }, [lendingUsdcDebt, calculatedLending.crashedEthPrice]);

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

  // Numerical Problems State
  const numericalProblems = NUMERICAL_PROBLEMS;
  const [revealedProblems, setRevealedProblems] = useState({});
  const toggleProblemReveal = useCallback((id) => {
    setRevealedProblems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  // Checklist State
  const checklistItems = CHECKLIST_ITEMS;
  const [completedObjectives, setCompletedObjectives] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m17_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m17_progress",
        JSON.stringify(completedObjectives)
      );
    } catch {
      // Ignore localStorage write failures
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
            Module 17
          </span>
          <span className="text-xs font-semibold text-neutral-600 truncate max-w-[200px] sm:max-w-xs">
            Decentralized Exchanges & Lending Protocols
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
            Simulators
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>BLOCKCHAIN & WEB3 ENGINEERING • ADVANCED PROTOCOL TRACK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 17 — Decentralized Exchanges & Lending Protocols
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-level study of decentralized financial infrastructure: constant product AMM mechanics, Uniswap V2 and V3 concentrated liquidity, multi-hop routing, Compound cToken and Aave aToken accounting, collateral factors, Health Factors, liquidation engines, Chainlink oracles, and flash loan execution.
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
            __LAB_AND_PROBLEMS__
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
    problems_json = json.dumps(NUMERICAL_PROBLEMS, indent=2)

    print("Generating code sections...")
    interactive_sims = generate_interactive_simulators()
    theory_sec = generate_theory_sections()
    lab_sec = generate_lab_and_problems()
    assessment_sec = generate_assessment_sections()
    tracker_sec = generate_tracker_and_footer()

    print("Assembling BlockchainDEXLending.jsx...")
    content = TEMPLATE
    content = content.replace("__DATA_CHECKLIST__", checklist_json)
    content = content.replace("__DATA_QUIZ__", quiz_json)
    content = content.replace("__DATA_INTERVIEWS__", interview_json)
    content = content.replace("__DATA_PROBLEMS__", problems_json)

    content = content.replace("__INTERACTIVE_SIMULATORS__", interactive_sims)
    content = content.replace("__THEORY_SECTIONS__", theory_sec)
    content = content.replace("__LAB_AND_PROBLEMS__", lab_sec)
    content = content.replace("__ASSESSMENT_SECTIONS__", assessment_sec)
    content = content.replace("__TRACKER_AND_FOOTER__", tracker_sec)

    out_path = os.path.join(
        os.path.dirname(__file__), "..", "src", "Componets", "BlockchainDEXLending.jsx"
    )
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully generated {out_path} ({len(content)} characters).")

if __name__ == "__main__":
    main()
