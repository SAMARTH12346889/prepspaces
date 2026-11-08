# -*- coding: utf-8 -*-
"""
Assembly script to construct projectx/src/Componets/BlockchainFinalCapstone.jsx
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

TEMPLATE = r'''// projectx/src/Componets/BlockchainFinalCapstone.jsx
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

export default function BlockchainFinalCapstone() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Workbench 1 State: VoteChain Lifecycle
  const [voteElectionState, setVoteElectionState] = useState("DRAFT");
  const [voteCandidates, setVoteCandidates] = useState([
    { id: 1, name: "Sarah Connor (Candidate A)", cid: "bafybeig...sarah", votes: 0 },
    { id: 2, name: "John Doe (Candidate B)", cid: "bafybeic...john", votes: 0 },
    { id: 3, name: "Elena Rostova (Candidate C)", cid: "bafybeih...elena", votes: 0 }
  ]);
  const [voteRegisteredVoters] = useState([
    "0x71C...aB41",
    "0x98E...cD22",
    "0x3F2...eF99",
    "0x1A4...bC88",
    "0x5D6...aA12"
  ]);
  const [activeVoterAddress, setActiveVoterAddress] = useState("0x71C...aB41");
  const [votedAddresses, setVotedAddresses] = useState({});
  const [voteLogs, setVoteLogs] = useState([
    { time: "10:00:01", type: "info", msg: "ElectionCreated: VoteChain Student Council 2026 (State: DRAFT)" }
  ]);

  const addVoteLog = useCallback((msg, type = "info") => {
    const timeStr = new Date().toTimeString().split(" ")[0];
    setVoteLogs((prev) => [{ time: timeStr, msg, type }, ...prev].slice(0, 8));
  }, []);

  const hasActiveVoted = useMemo(() => !!votedAddresses[activeVoterAddress], [votedAddresses, activeVoterAddress]);

  const voteTotalBallots = useMemo(() => {
    return voteCandidates.reduce((acc, c) => acc + c.votes, 0);
  }, [voteCandidates]);

  const voteInvariantVerified = useMemo(() => {
    const sumCandidateVotes = voteCandidates.reduce((acc, c) => acc + c.votes, 0);
    return sumCandidateVotes === voteTotalBallots;
  }, [voteCandidates, voteTotalBallots]);

  const startElection = useCallback(() => {
    setVoteElectionState("ACTIVE");
    addVoteLog("StateTransition: Election opened (DRAFT -> ACTIVE). Candidate registration frozen.", "success");
  }, [addVoteLog]);

  const closeElection = useCallback(() => {
    setVoteElectionState("CLOSED");
    addVoteLog("StateTransition: Election deadline reached (ACTIVE -> CLOSED). Ballot submission stopped.", "warn");
  }, [addVoteLog]);

  const finalizeElection = useCallback(() => {
    setVoteElectionState("FINALIZED");
    addVoteLog("StateTransition: Results officially audited and verified on-chain (FINALIZED).", "info");
  }, [addVoteLog]);

  const castBallot = useCallback((candidateId) => {
    if (voteElectionState !== "ACTIVE") {
      addVoteLog("Transaction reverted: ElectionNotActive()", "error");
      return;
    }
    if (votedAddresses[activeVoterAddress]) {
      addVoteLog(`Transaction reverted: AlreadyVoted(${activeVoterAddress})`, "error");
      return;
    }

    setVotedAddresses((prev) => ({ ...prev, [activeVoterAddress]: true }));
    setVoteCandidates((prev) =>
      prev.map((c) => (c.id === candidateId ? { ...c, votes: c.votes + 1 } : c))
    );
    addVoteLog(`VoteCast: Voter ${activeVoterAddress} cast ballot for Candidate #${candidateId}`, "success");
  }, [voteElectionState, votedAddresses, activeVoterAddress, addVoteLog]);

  const resetVoteChainSim = useCallback(() => {
    setVoteElectionState("DRAFT");
    setVoteCandidates([
      { id: 1, name: "Sarah Connor (Candidate A)", cid: "bafybeig...sarah", votes: 0 },
      { id: 2, name: "John Doe (Candidate B)", cid: "bafybeic...john", votes: 0 },
      { id: 3, name: "Elena Rostova (Candidate C)", cid: "bafybeih...elena", votes: 0 }
    ]);
    setVotedAddresses({});
    setActiveVoterAddress("0x71C...aB41");
    setVoteLogs([
      { time: "10:00:01", type: "info", msg: "Election state reset to initial DRAFT parameters" }
    ]);
  }, []);

  // Workbench 2 State: DeFi Lending
  const [defiEthPrice, setDefiEthPrice] = useState(3200);
  const [defiCollateralEth, setDefiCollateralEth] = useState(5.0);
  const [defiBorrowedUsdc, setDefiBorrowedUsdc] = useState(10000);

  const defiHealthFactor = useMemo(() => {
    const collateralUsd = defiCollateralEth * defiEthPrice;
    if (defiBorrowedUsdc <= 0) return 999.0;
    return (collateralUsd * 0.80) / defiBorrowedUsdc;
  }, [defiEthPrice, defiCollateralEth, defiBorrowedUsdc]);

  // Workbench 3 State: NFT Escrow
  const [nftPriceEth, setNftPriceEth] = useState(4.0);
  const [nftRoyaltyBps, setNftRoyaltyBps] = useState(750);
  const [nftMarketFeeBps, setNftMarketFeeBps] = useState(250);
  const [nftSold, setNftSold] = useState(false);

  // Workbench 4 State: Supply Chain
  const [supplyStage, setSupplyStage] = useState(0);

  const supplySteps = useMemo(() => [
    { state: "Created", role: "Origin Farm (Farmer)", cid: "bafybeig...soil-cert", desc: "Harvest logged with GPS coordinates and organic soil purity testing report." },
    { state: "Manufactured", role: "Processing Plant (Manufacturer)", cid: "bafybeic...batch-qc", desc: "Batch processed into sealed containers with ISO-9001 compliance verification." },
    { state: "InTransit", role: "Logistics Carrier (Distributor)", cid: "bafybeie...telemetry", desc: "Cold-chain GPS temperature sensors continuously log readings below 4°C." },
    { state: "Stored", role: "Distribution Hub (Warehouse)", cid: "bafybeih...inventory", desc: "Warehouse inventory reception verified via automated RFID gate barcode scanner." },
    { state: "Delivered", role: "Supermarket (Retailer)", cid: "bafybeik...shelf-log", desc: "Product displayed on retail shelf and registered for consumer point-of-sale checkout." },
    { state: "Verified", role: "End Consumer (Customer)", cid: "bafybeip...qr-scan", desc: "Customer scans QR code on packaging; verifies complete immutable cryptographic history." }
  ], []);

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
      const saved = localStorage.getItem("prepspaces_blockchain_m24_progress");
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
        localStorage.setItem("prepspaces_blockchain_m24_progress", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m24_progress");
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
          <span className="text-xs font-bold text-orange-600 font-mono">Module 24 · Capstone</span>
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
            Specification & Blueprints
          </button>
          <button
            onClick={() => setActiveTab("simulators")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "simulators"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Interactive Workbenches (4)
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 space-y-12">
        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider font-mono">
            Final Year Project · Production-Style DApp Development · Capstone
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Module 24 — Final Blockchain Capstone Project
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Synthesize all 23 previous modules into a production-grade decentralized application. Master requirements engineering, 3-tier Web3 architecture, smart contract state machines, off-chain PostgreSQL indexing, IPFS pinning, automated invariant testing, security auditing, gas optimization, CI/CD pipelines, and oral viva defense.
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
    print("Generating Interactive Workbenches...")
    interactive_jsx = generate_interactive_simulators()

    print("Generating Theory Sections (Parts 1, 2, 3)...")
    theory_jsx = generate_theory_sections()

    print("Generating Lab, Rubric & Numerical Challenges...")
    lab_jsx = generate_lab_and_challenges()

    print("Generating Assessment Sections (25 Viva + 20 Quiz)...")
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

    output_path = os.path.join(os.path.dirname(__file__), "..", "src", "Componets", "BlockchainFinalCapstone.jsx")
    output_path = os.path.abspath(output_path)

    print(f"Writing to {output_path}...")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully generated {output_path}! File size: {os.path.getsize(output_path)} bytes.")

if __name__ == "__main__":
    main()
