# -*- coding: utf-8 -*-
"""
Assembly script to construct projectx/src/Componets/BlockchainHyperledgerFabric.jsx
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

TEMPLATE = r'''// projectx/src/Componets/BlockchainHyperledgerFabric.jsx
import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Server
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = __DATA_CHECKLIST__;
const QUIZ_QUESTIONS = __DATA_QUIZ__;
const INTERVIEW_QUESTIONS = __DATA_INTERVIEWS__;
const NUMERICAL_PROBLEMS = __DATA_NUMERICAL__;

export default function BlockchainHyperledgerFabric() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Execute-Order-Validate Visualizer
  const [lifecycleStage, setLifecycleStage] = useState(0);
  const [simulateMvccConflict, setSimulateMvccConflict] = useState(false);

  const resetLifecycleSim = useCallback(() => {
    setLifecycleStage(0);
    setSimulateMvccConflict(false);
  }, []);

  // Simulator 2 State: Endorsement Policy & Multi-Org Validator
  const [selectedPolicy, setSelectedPolicy] = useState("and12");
  const [peerEndorsements, setPeerEndorsements] = useState({
    org1: true,
    org2: true,
    org3: false
  });

  const togglePeerEndorsement = useCallback((peerId) => {
    setPeerEndorsements((prev) => ({
      ...prev,
      [peerId]: !prev[peerId]
    }));
  }, []);

  const activeEndorsementCount = useMemo(() => {
    return Object.values(peerEndorsements).filter(Boolean).length;
  }, [peerEndorsements]);

  const isPolicySatisfied = useMemo(() => {
    if (selectedPolicy === "and12") {
      return !!(peerEndorsements.org1 && peerEndorsements.org2);
    }
    if (selectedPolicy === "or12") {
      return !!(peerEndorsements.org1 || peerEndorsements.org2);
    }
    if (selectedPolicy === "outof23") {
      return activeEndorsementCount >= 2;
    }
    return false;
  }, [selectedPolicy, peerEndorsements, activeEndorsementCount]);

  // Simulator 4 State: Custody Transfer & CouchDB Queries
  const [custodyState, setCustodyState] = useState({
    productId: "P-1001",
    productName: "Laptop",
    batchNumber: "BATCH-2026-01",
    status: "CREATED",
    origin: "Pune, India",
    location: "Pune Factory",
    ownerMSP: "Org1MSP",
    pendingOwnerMSP: ""
  });

  const [activeQuery, setActiveQuery] = useState("shipped");

  const handleUpdateStatus = useCallback((newStatus, newLocation) => {
    setCustodyState((prev) => ({
      ...prev,
      status: newStatus,
      location: newLocation
    }));
  }, []);

  const handleInitiateTransfer = useCallback(() => {
    setCustodyState((prev) => ({
      ...prev,
      pendingOwnerMSP: "Org2MSP"
    }));
  }, []);

  const handleAcceptTransfer = useCallback(() => {
    setCustodyState((prev) => ({
      ...prev,
      ownerMSP: "Org2MSP",
      pendingOwnerMSP: ""
    }));
  }, []);

  const resetCustodyState = useCallback(() => {
    setCustodyState({
      productId: "P-1001",
      productName: "Laptop",
      batchNumber: "BATCH-2026-01",
      status: "CREATED",
      origin: "Pune, India",
      location: "Pune Factory",
      ownerMSP: "Org1MSP",
      pendingOwnerMSP: ""
    });
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
  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m22_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = useCallback((id) => {
    setChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m22_progress", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m22_progress");
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

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-amber-500 selection:text-white">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/learning/blockchain"
            className="text-xs font-bold text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors"
          >
            &larr; <span className="hidden sm:inline">Blockchain Engineering</span>
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            Module 22
          </span>
          <span className="text-xs font-semibold text-neutral-600 truncate max-w-[200px] sm:max-w-xs">
            Hyperledger Fabric &amp; Enterprise Blockchain
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("theory")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "theory"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Curriculum &amp; Labs
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("simulators")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "simulators"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Fabric Simulators
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Server className="w-3.5 h-3.5" />
            <span>BLOCKCHAIN DEVELOPMENT • ADVANCED LEVEL • ENTERPRISE DISTRIBUTED LEDGER TECHNOLOGY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 22 — Hyperledger Fabric &amp; Enterprise Blockchain
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of permissioned enterprise distributed ledgers, Hyperledger Fabric 3.1.x, execute–order–validate consensus, Membership Service Providers (MSPs), X.509 PKI identity management, isolated channels, Private Data Collections (PDC), Go chaincode development, CouchDB Mango indexing, and Docker infrastructure. Deploy a multi-organization supply chain tracking platform.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            __SECTION_INTERACTIVE__
          </div>
        ) : (
          <div className="space-y-16">
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

def assemble_component():
    print("Generating Interactive Simulators...")
    interactive_code = generate_interactive_simulators()
    print(f"Interactive Simulators length: {len(interactive_code)}")

    print("Generating Theory Sections...")
    theory_code = generate_theory_sections()
    print(f"Theory Sections length: {len(theory_code)}")

    print("Generating Lab & Practical Challenges...")
    lab_code = generate_lab_and_challenges()
    print(f"Lab & Practical Challenges length: {len(lab_code)}")

    print("Generating Assessment Sections...")
    assessment_code = generate_assessment_sections()
    print(f"Assessment Sections length: {len(assessment_code)}")

    print("Generating Tracker & Footer...")
    tracker_code = generate_tracker_and_footer()
    print(f"Tracker & Footer length: {len(tracker_code)}")

    content = TEMPLATE
    content = content.replace("__DATA_CHECKLIST__", json.dumps(CHECKLIST_ITEMS, indent=2))
    content = content.replace("__DATA_QUIZ__", json.dumps(QUIZ_QUESTIONS, indent=2))
    content = content.replace("__DATA_INTERVIEWS__", json.dumps(INTERVIEW_QUESTIONS, indent=2))
    content = content.replace("__DATA_NUMERICAL__", json.dumps(NUMERICAL_PROBLEMS, indent=2))

    content = content.replace("__SECTION_INTERACTIVE__", interactive_code)
    content = content.replace("__SECTION_THEORY__", theory_code)
    content = content.replace("__SECTION_LAB__", lab_code)
    content = content.replace("__SECTION_ASSESSMENT__", assessment_code)
    content = content.replace("__SECTION_TRACKER__", tracker_code)

    output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src", "Componets", "BlockchainHyperledgerFabric.jsx"))
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully generated: {output_path}")
    print(f"Total file size: {len(content)} characters, {len(content.splitlines())} lines")

if __name__ == "__main__":
    assemble_component()

