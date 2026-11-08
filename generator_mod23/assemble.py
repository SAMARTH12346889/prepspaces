# -*- coding: utf-8 -*-
"""
Assembly script to construct projectx/src/Componets/BlockchainSolanaRust.jsx
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

TEMPLATE = r'''// projectx/src/Componets/BlockchainSolanaRust.jsx
import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ExternalLink,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = __DATA_CHECKLIST__;
const QUIZ_QUESTIONS = __DATA_QUIZ__;
const INTERVIEW_QUESTIONS = __DATA_INTERVIEWS__;
const NUMERICAL_PROBLEMS = __DATA_NUMERICAL__;

export default function BlockchainSolanaRust() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Sealevel Concurrency
  const [sealevelRunning, setSealevelRunning] = useState(false);
  const [activeTxIds, setActiveTxIds] = useState([]);
  const [queuedTxIds, setQueuedTxIds] = useState([]);
  const [completedTxIds, setCompletedTxIds] = useState([]);
  const [sealevelCoreAssignments, setSealevelCoreAssignments] = useState({ 1: null, 2: null, 3: null });
  const [sealevelConflictNote, setSealevelConflictNote] = useState("");
  const [sealevelTotalCus, setSealevelTotalCus] = useState(0);

  const sealevelTxs = useMemo(() => [
    { id: "Tx1", label: "SOL Transfer (Alice -> Bob)", reads: ["SysvarRent"], writes: ["AliceWallet", "BobWallet"], cus: 15000 },
    { id: "Tx2", label: "Create ATA (Charlie)", reads: ["CharlieWallet", "PrepMint"], writes: ["CharlieATA"], cus: 32000 },
    { id: "Tx3", label: "Swap SOL for PREP (Pool X)", reads: ["UserWallet"], writes: ["RaydiumPoolX", "UserTokenATA"], cus: 85000 },
    { id: "Tx4", label: "Arbitrage Swap (Pool X)", reads: ["BotWallet"], writes: ["RaydiumPoolX", "BotTokenATA"], cus: 92000 }
  ], []);

  const runSealevelBatch = useCallback(() => {
    setSealevelRunning(true);
    setCompletedTxIds([]);
    setSealevelTotalCus(0);

    // Stage 1: Tx1, Tx2, Tx3 execute concurrently on Cores 1, 2, 3
    // Tx4 has write conflict on RaydiumPoolX with Tx3, queued!
    setActiveTxIds(["Tx1", "Tx2", "Tx3"]);
    setQueuedTxIds(["Tx4"]);
    setSealevelCoreAssignments({ 1: "Tx1", 2: "Tx2", 3: "Tx3" });
    setSealevelConflictNote("Tx4 write-locked on 'RaydiumPoolX' (Held exclusively by Core 3 for Tx3)");
    setSealevelTotalCus(15000 + 32000 + 85000);

    setTimeout(() => {
      // Stage 2: Tx1, Tx2, Tx3 complete. Core 3 finishes; now Core 1 takes Tx4
      setCompletedTxIds(["Tx1", "Tx2", "Tx3"]);
      setActiveTxIds(["Tx4"]);
      setQueuedTxIds([]);
      setSealevelCoreAssignments({ 1: "Tx4", 2: null, 3: null });
      setSealevelConflictNote("Lock released! Core 1 is now executing Tx4");
      setSealevelTotalCus((prev) => prev + 92000);

      setTimeout(() => {
        setCompletedTxIds(["Tx1", "Tx2", "Tx3", "Tx4"]);
        setActiveTxIds([]);
        setSealevelCoreAssignments({ 1: null, 2: null, 3: null });
        setSealevelConflictNote("All 4 transactions finalized across 2 parallel phases!");
        setSealevelRunning(false);
      }, 1200);
    }, 1400);
  }, []);

  const resetSealevel = useCallback(() => {
    setSealevelRunning(false);
    setActiveTxIds([]);
    setQueuedTxIds([]);
    setCompletedTxIds([]);
    setSealevelCoreAssignments({ 1: null, 2: null, 3: null });
    setSealevelConflictNote("");
    setSealevelTotalCus(0);
  }, []);

  // Simulator 2 State: PDA Derivation
  const [pdaSeed1, setPdaSeed1] = useState("preptoken_config");
  const [pdaSeed2, setPdaSeed2] = useState("9vMhNDg8y5v2gJ3n4m8K3L1p9q5r");
  const [pdaProgramId, setPdaProgramId] = useState("PrepTok11111111111111111111111111111111111");
  const [pdaBump, setPdaBump] = useState(254);
  const [derivedPdaAddress, setDerivedPdaAddress] = useState("6gHk9qY1v3z4w5e6r7t8y9u0i1o2p3a4s5d6f7g8h9j");

  const computePda = useCallback(() => {
    // Generate deterministic mock PDA hash representation
    const fakeChars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    let hashStr = "";
    const seed = pdaSeed1.length + pdaSeed2.length + pdaProgramId.length;
    for (let i = 0; i < 44; i++) {
      hashStr += fakeChars[(seed * 7 + i * 13) % fakeChars.length];
    }
    const computedBump = 255 - ((seed % 4) + 1);
    setPdaBump(computedBump);
    setDerivedPdaAddress(hashStr);
  }, [pdaSeed1, pdaSeed2, pdaProgramId]);

  // Simulator 3 State: CPI Signer Elevation
  const [cpiStep, setCpiStep] = useState(0);

  const cpiStepDescriptions = useMemo(() => [
    {
      title: "1. User Signs Outer Transaction",
      desc: "User submits instruction `mint_tokens(50_000)` with `authority` as a verified transaction Signer.",
      code: "let tx = await program.methods.mintTokens(new BN(50000)).accounts({...}).rpc();"
    },
    {
      title: "2. Anchor Constraint Checks",
      desc: "Anchor deserializes accounts, verifies `authority.is_signer == true` and validates `seeds = [b\"config\"]` with stored bump.",
      code: "#[account(seeds = [b\"config\"], bump = config.bump, has_one = authority)]"
    },
    {
      title: "3. Signer Seeds Preparation",
      desc: "Program builds seed byte slices with the stored canonical bump `&[&[b\"config\", &[config.bump]]]`. No private key is used.",
      code: "let seeds = &[b\"config\".as_ref(), &[config.bump]];\nlet signer_seeds = &[&seeds[..]];"
    },
    {
      title: "4. Runtime Signer Elevation",
      desc: "Program executes `invoke_signed`. Solana runtime re-hashes seeds with caller program ID, verifies match with `config.key()`, and temporarily marks `config.is_signer = true`.",
      code: "CpiContext::new_with_signer(token_program, mint_to_accounts, signer_seeds)"
    },
    {
      title: "5. SPL Token State Mutation",
      desc: "SPL Token Program verifies that `config` is the valid `mint_authority` on the Mint account, increments total circulating supply, and credits the user's ATA.",
      code: "token::mint_to(cpi_ctx, amount)? // Mint.supply += 50,000; ATA.amount += 50,000"
    }
  ], []);

  const stepCpiFlow = useCallback(() => {
    setCpiStep((prev) => (prev + 1) % 5);
  }, []);

  // Simulator 4 State: PrepToken Protocol State Machine
  const [preptokenMaxSupply] = useState(1000000);
  const [preptokenTotalMinted, setPreptokenTotalMinted] = useState(150000);
  const [preptokenAliceBalance, setPreptokenAliceBalance] = useState(150000);
  const [preptokenBobBalance, setPreptokenBobBalance] = useState(0);
  const [preptokenPaused, setPreptokenPaused] = useState(false);
  const [mintAmount, setMintAmount] = useState(50000);
  const [transferAmount, setTransferAmount] = useState(10000);
  const [burnAmount, setBurnAmount] = useState(5000);
  const [preptokenLogs, setPreptokenLogs] = useState([
    { time: "00:00:01", type: "info", msg: "Initialize: Config PDA initialized (Max Supply: 1,000,000 PREP, Authority: Admin)" },
    { time: "00:00:02", type: "info", msg: "TokensMinted: Minted 150,000 PREP to Alice ATA" }
  ]);

  const addLog = useCallback((msg, type = "info") => {
    const timeStr = new Date().toTimeString().split(" ")[0];
    setPreptokenLogs((prev) => [{ time: timeStr, msg, type }, ...prev].slice(0, 8));
  }, []);

  const executeMint = useCallback(() => {
    if (preptokenPaused) {
      addLog("Transaction reverted: TokenError::ProtocolPaused", "error");
      return;
    }
    if (mintAmount <= 0) return;
    if (preptokenTotalMinted + mintAmount > preptokenMaxSupply) {
      addLog(`Transaction reverted: TokenError::MaximumSupplyExceeded (${preptokenTotalMinted + mintAmount} > ${preptokenMaxSupply})`, "error");
      return;
    }
    setPreptokenTotalMinted((prev) => prev + mintAmount);
    setPreptokenAliceBalance((prev) => prev + mintAmount);
    addLog(`TokensMinted: Minted ${mintAmount.toLocaleString()} PREP to Alice ATA via CPI`, "success");
  }, [preptokenPaused, mintAmount, preptokenTotalMinted, preptokenMaxSupply, addLog]);

  const executeTransfer = useCallback(() => {
    if (preptokenPaused) {
      addLog("Transaction reverted: TokenError::ProtocolPaused", "error");
      return;
    }
    if (transferAmount <= 0) return;
    if (preptokenAliceBalance < transferAmount) {
      addLog(`Transaction reverted: TokenError::InsufficientFunds (${preptokenAliceBalance} < ${transferAmount})`, "error");
      return;
    }
    setPreptokenAliceBalance((prev) => prev - transferAmount);
    setPreptokenBobBalance((prev) => prev + transferAmount);
    addLog(`TokensTransferred: Alice transferred ${transferAmount.toLocaleString()} PREP to Bob ATA`, "success");
  }, [preptokenPaused, transferAmount, preptokenAliceBalance, addLog]);

  const executeBurn = useCallback(() => {
    if (preptokenPaused) {
      addLog("Transaction reverted: TokenError::ProtocolPaused", "error");
      return;
    }
    if (burnAmount <= 0) return;
    if (preptokenAliceBalance < burnAmount) {
      addLog(`Transaction reverted: TokenError::InsufficientFunds (${preptokenAliceBalance} < ${burnAmount})`, "error");
      return;
    }
    setPreptokenAliceBalance((prev) => prev - burnAmount);
    addLog(`TokensBurned: Alice burned ${burnAmount.toLocaleString()} PREP (Supply decreased)`, "warn");
  }, [preptokenPaused, burnAmount, preptokenAliceBalance, addLog]);

  const togglePause = useCallback(() => {
    setPreptokenPaused((prev) => {
      const next = !prev;
      addLog(`PauseToggled: Protocol pause set to ${next ? "TRUE" : "FALSE"}`, next ? "warn" : "info");
      return next;
    });
  }, [addLog]);

  const resetPrepToken = useCallback(() => {
    setPreptokenTotalMinted(150000);
    setPreptokenAliceBalance(150000);
    setPreptokenBobBalance(0);
    setPreptokenPaused(false);
    setPreptokenLogs([
      { time: "00:00:01", type: "info", msg: "Protocol state reset to initial parameters" }
    ]);
  }, []);

  // Interview Scenarios State
  const [interviewSearch, setInterviewSearch] = useState("");
  const [expandedInterviews, setExpandedInterviews] = useState({});

  const toggleInterview = useCallback((id) => {
    setExpandedInterviews((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const filteredInterviews = useMemo(() => {
    if (!interviewSearch.trim()) return INTERVIEW_QUESTIONS;
    const q = interviewSearch.toLowerCase();
    return INTERVIEW_QUESTIONS.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [interviewSearch]);

  // Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectOption = useCallback((qId, optIdx) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  }, [quizSubmitted]);

  const handleSubmitQuiz = useCallback(() => {
    setQuizSubmitted(true);
  }, []);

  const resetQuiz = useCallback(() => {
    setUserAnswers({});
    setQuizSubmitted(false);
  }, []);

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.answer) score++;
    });
    return score;
  }, [userAnswers]);

  // Checklist State with LocalStorage Persistence
  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m23_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [selectedChecklistCategory, setSelectedChecklistCategory] = useState("all");

  const toggleChecklistItem = useCallback((id) => {
    setChecklist((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m23_progress", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m23_progress");
    } catch {
      // ignore
    }
  }, []);

  const completedChecklistCount = useMemo(() => {
    return Object.values(checklist).filter(Boolean).length;
  }, [checklist]);

  const checklistProgress = useMemo(() => {
    if (CHECKLIST_ITEMS.length === 0) return 0;
    return Math.round((completedChecklistCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedChecklistCount]);

  const checklistCategories = useMemo(() => {
    return Array.from(new Set(CHECKLIST_ITEMS.map((item) => item.category)));
  }, []);

  const filteredChecklistItems = useMemo(() => {
    if (selectedChecklistCategory === "all") return CHECKLIST_ITEMS;
    return CHECKLIST_ITEMS.filter((item) => item.category === selectedChecklistCategory);
  }, [selectedChecklistCategory]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-orange-500 selection:text-white">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/learning/blockchain"
            className="text-xs font-bold text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Curriculum</span>
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-bold text-orange-600 font-mono">Module 23</span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "theory"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Curriculum & Lab
          </button>
          <button
            onClick={() => setActiveTab("simulators")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "simulators"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Interactive Simulators (4)
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 space-y-12">
        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Advanced Blockchain Engineering · University-Level Course
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Module 23 — Solana Development with Rust
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Master the high-throughput architecture of Solana: decoupled accounts, Sealevel multi-core parallel execution, the Proof of History cryptographic clock, Anchor smart contract development in Rust, Program Derived Addresses (PDAs), Cross-Program Invocations (CPI), and build a complete decentralized token-management protocol.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            __SECTION_INTERACTIVE__
          </div>
        ) : (
          <div className="space-y-12">
            __SECTION_THEORY__
            __SECTION_LAB__
            __SECTION_ASSESSMENT__
            __SECTION_TRACKER__
          </div>
        )}
      </main>
    </div>
  );
}
'''

def main():
    print("Generating Interactive Simulators...")
    interactive_jsx = generate_interactive_simulators()

    print("Generating Theory Sections (Parts 1, 2, 3)...")
    theory_jsx = generate_theory_sections()

    print("Generating Lab & Challenges...")
    lab_jsx = generate_lab_and_challenges()

    print("Generating Assessment Sections...")
    assessment_jsx = generate_assessment_sections()

    print("Generating Tracker & Footer...")
    tracker_jsx = generate_tracker_and_footer()

    print("Substituting data and sections into template...")
    content = TEMPLATE
    content = content.replace("__DATA_CHECKLIST__", json.dumps(CHECKLIST_ITEMS, indent=2))
    content = content.replace("__DATA_QUIZ__", json.dumps(QUIZ_QUESTIONS, indent=2))
    content = content.replace("__DATA_INTERVIEWS__", json.dumps(INTERVIEW_QUESTIONS, indent=2))
    content = content.replace("__DATA_NUMERICAL__", json.dumps(NUMERICAL_PROBLEMS, indent=2))

    content = content.replace("__SECTION_INTERACTIVE__", interactive_jsx)
    content = content.replace("__SECTION_THEORY__", theory_jsx)
    content = content.replace("__SECTION_LAB__", lab_jsx)
    content = content.replace("__SECTION_ASSESSMENT__", assessment_jsx)
    content = content.replace("__SECTION_TRACKER__", tracker_jsx)

    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "Componets", "BlockchainSolanaRust.jsx")
    output_path = os.path.abspath(output_path)

    print(f"Writing to {output_path}...")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully generated {output_path}! File size: {os.path.getsize(output_path)} bytes.")

if __name__ == "__main__":
    main()
