import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Server,
  Database,
  Cpu,
  Layers,
  Workflow,
  Check,
  CheckCircle2,
  AlertTriangle,
  Clock,
  RefreshCw,
  Play,
  Terminal,
  Sliders,
  ChevronDown,
  ChevronUp,
  Zap,
  Boxes,
  FileCode,
  Share2,
  Compass,
  Lock,
  Scale,
  Activity,
  Network,
  RotateCcw,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

export default function CloudAdvanced() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "advanced");
  const navigate = useNavigate();

  // Tab State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'raft-lab' | 'quorum-lab' | 'gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: RAFT CONSENSUS CLUSTER SIMULATOR (5 NODES)
  // =========================================================================
  const [raftTerm, setRaftTerm] = useState(1);
  const [raftNodes, setRaftNodes] = useState([
    { id: 1, role: "Leader", votes: 3, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 2, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 3, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 4, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 5, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
  ]);
  const [raftHistory, setRaftHistory] = useState([
    "Cluster initialized: Node 1 elected Leader for Term 1 (Quorum: 5/5 alive).",
  ]);
  const [isPartitioned, setIsPartitioned] = useState(false);

  const aliveNodes = raftNodes.filter((n) => n.alive);
  const majorityNeeded = 3; // Majority of 5 is 3

  const handleKillLeader = () => {
    const leader = raftNodes.find((n) => n.role === "Leader" && n.alive);
    if (!leader) {
      setRaftHistory((prev) => ["No active leader to kill. Elect a new leader first.", ...prev]);
      return;
    }

    const updated = raftNodes.map((n) =>
      n.id === leader.id ? { ...n, alive: false, role: "Follower" } : n
    );
    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[FAILOVER] Node ${leader.id} (Leader) crashed! Heartbeat lost. Followers initiate election timeout.`,
      ...prev,
    ]);
  };

  const handleTriggerElection = () => {
    // Find highest alive, unpartitioned node that can become candidate
    const eligible = raftNodes.filter((n) => n.alive && !n.partitioned);
    if (eligible.length < majorityNeeded) {
      setRaftHistory((prev) => [
        `[ELECTION REJECTED] Only ${eligible.length} eligible nodes. Quorum of ${majorityNeeded} required. Safety preserved: Split-brain prevented.`,
        ...prev,
      ]);
      return;
    }

    const newTerm = raftTerm + 1;
    setRaftTerm(newTerm);

    const newLeader = eligible[0];
    const updated = raftNodes.map((n) => {
      if (!n.alive) return n;
      if (n.id === newLeader.id) {
        return {
          ...n,
          role: "Leader",
          votes: eligible.length,
          log: [...n.log, `elected: term ${newTerm}`],
        };
      }
      return {
        ...n,
        role: "Follower",
        votes: 0,
        log: n.partitioned ? n.log : [...n.log, `voted -> Node ${newLeader.id} (Term ${newTerm})`],
      };
    });

    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[ELECTION] Term ${newTerm}: Node ${newLeader.id} received ${eligible.length} votes and became Leader!`,
      ...prev,
    ]);
  };

  const handleProposeLog = () => {
    const leader = raftNodes.find((n) => n.role === "Leader" && n.alive);
    if (!leader) {
      setRaftHistory((prev) => [
        "[WRITE REJECTED] No active leader exists. Client receives LEADER_NOT_AVAILABLE.",
        ...prev,
      ]);
      return;
    }

    const activeQuorumMembers = raftNodes.filter(
      (n) => n.alive && (!isPartitioned || n.partitioned === leader.partitioned)
    );

    if (activeQuorumMembers.length < majorityNeeded) {
      setRaftHistory((prev) => [
        `[SAFETY ABORT] Leader Node ${leader.id} in minority partition (${activeQuorumMembers.length}/${majorityNeeded}). Write rejected to prevent stale state!`,
        ...prev,
      ]);
      return;
    }

    const entryId = `SET x=${Math.floor(Math.random() * 900 + 100)}`;
    const updated = raftNodes.map((n) => {
      if (!n.alive) return n;
      if (activeQuorumMembers.some((m) => m.id === n.id)) {
        return { ...n, log: [...n.log, `${entryId} (T${raftTerm})`] };
      }
      return n;
    });

    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[COMMITTED] Entry "${entryId}" replicated to ${activeQuorumMembers.length}/5 nodes (Quorum satisfied). State machine applied entry.`,
      ...prev,
    ]);
  };

  const handleNetworkPartition = () => {
    setIsPartitioned(true);
    // Partition: {Node 1, Node 2} vs {Node 3, Node 4, Node 5}
    const updated = raftNodes.map((n) => {
      if (n.id <= 2) {
        return { ...n, partitioned: true };
      }
      return { ...n, partitioned: false };
    });
    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[NETWORK SPLIT] Network Partition injected! Group Alpha: {N1, N2} (Minority: 2/5). Group Beta: {N3, N4, N5} (Majority: 3/5).`,
      ...prev,
    ]);
  };

  const handleHealPartition = () => {
    setIsPartitioned(false);
    const updated = raftNodes.map((n) => ({ ...n, partitioned: false }));
    setRaftNodes(updated);
    setRaftHistory((prev) => [
      "[HEALED] Network partition resolved! Full bi-directional connectivity restored across all nodes.",
      ...prev,
    ]);
  };

  const handleResetRaft = () => {
    setRaftTerm(1);
    setIsPartitioned(false);
    setRaftNodes([
      { id: 1, role: "Leader", votes: 3, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 2, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 3, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 4, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 5, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    ]);
    setRaftHistory(["Cluster reset to Term 1 initial state."]);
  };

  // =========================================================================
  // SIMULATOR 2: QUORUM & CONSISTENCY ANALYZER (DYNAMO N, R, W)
  // =========================================================================
  const [quorumN, setQuorumN] = useState(5);
  const [quorumR, setQuorumR] = useState(3);
  const [quorumW, setQuorumW] = useState(3);

  const isQuorumOverlapping = quorumR + quorumW > quorumN;
  const writeFaultTolerance = quorumN - quorumW;
  const readFaultTolerance = quorumN - quorumR;

  // =========================================================================
  // SIMULATOR 3: MINICLOUD FAILURE GAMEDAY (SECTION 125)
  // =========================================================================
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [selectedGameChoice, setSelectedGameChoice] = useState(null);
  const [gameFeedback, setGameFeedback] = useState(null);

  const gameScenarios = moduleData?.scenarios || [];

  const handleSelectGameOption = (option) => {
    setSelectedGameChoice(option.id);
    setGameFeedback(option);
    if (option.isCorrect) {
      setGameScore((prev) => prev + 100);
    }
  };

  const handleNextGameScenario = () => {
    setSelectedGameChoice(null);
    setGameFeedback(null);
    setGameScenarioIndex((prev) => (prev + 1) % gameScenarios.length);
  };

  // =========================================================================
  // 12 SYLLABUS TOPICS
  // =========================================================================
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic] || topics[0];

  // =========================================================================
  // 21 MASTERY TEST QUESTIONS (SECTION 129)
  // =========================================================================
  const masteryQuestions = moduleData?.quiz || [];

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="advanced" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="advanced" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[130px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[150px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="advanced"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Systems AI"
        />

        {/* HERO BANNER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <Boxes size={13} />
              <span>Advanced Cloud & Distributed Systems</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Advanced Cloud Systems
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              The shift from cloud consumer to systems architect. Grounded in the academic backbone of{" "}
              <span className="text-orange-400 font-semibold">MIT 6.5840 / 6.5830</span>,{" "}
              <span className="text-orange-400 font-semibold">Harvard CS 2620</span>,{" "}
              <span className="text-orange-400 font-semibold">CMU 15-440</span>, and{" "}
              <span className="text-orange-400 font-semibold">Cambridge Concurrent & Distributed Systems</span>. Master
              the machinery beneath cloud services: Partial Failure, Lamport Clocks, Raft Consensus, State-Machine
              Replication, 2PC vs Sagas, Consistent Hashing, TrueTime, GFS & Erasure Coding, and Borg Schedulers.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FLP Impossibility & Consensus
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Raft Replicated Logs
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Spanner TrueTime API
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Borg Multi-Dimensional Bin Packing
              </span>
            </div>
          </div>
        </div>

        {/* EMBEDDED AI TUTOR */}
        {SHOW_NOVA_AI && showAiTutor && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-orange-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-600">
                  Nova AI • Principal Distributed Systems Architect Tutor
                </span>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-mono text-stone-400 hover:text-stone-700"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo module="distributedsystems" />
            </div>
          </div>
        )}

        {/* WORKSPACE NAVIGATION TABS: THEORY, SIMULATORS & TESTS */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Compass size={15} />
            <span>12 Core Syllabus Topics</span>
          </button>
          <button
            onClick={() => setActiveTab("raft-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "raft-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Zap size={15} />
            <span>Lab 1: Raft Consensus Cluster Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab("quorum-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "quorum-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Scale size={15} />
            <span>Lab 2: Quorum & Consistency Analyzer (N, R, W)</span>
          </button>
          <button
            onClick={() => setActiveTab("gameday")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "gameday"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <AlertTriangle size={15} />
            <span>Lab 3: MiniCloud Failure GameDay (6 Scenarios)</span>
          </button>
          <button
            onClick={() => setActiveTab("mastery")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "mastery"
                ? "bg-[#18181b] text-white"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <CheckCircle2 size={15} />
            <span>Advanced Systems Mastery Test (21 Questions)</span>
          </button>
        </div>

        {/* =================================================================== */}
        {/* VIEW 1: THEORY & 12 SYLLABUS TOPICS */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            {/* TOPIC SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                  Advanced Systems Syllabus • 12 Topics
                </h3>
                <div className="space-y-1.5">
                  {topics.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(idx)}
                      className={`w-full text-left rounded-2xl px-4 py-3 text-xs transition flex flex-col gap-1 ${
                        selectedTopic === idx
                          ? "bg-[#18181b] text-white font-bold shadow-md shadow-black/10"
                          : "text-stone-700 hover:bg-[#f2efe9] font-medium"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider ${
                            selectedTopic === idx ? "text-orange-400" : "text-stone-400"
                          }`}
                        >
                          Topic {t.id} • {t.week}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                            selectedTopic === idx
                              ? "bg-stone-800 text-orange-300"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {t.badge}
                        </span>
                      </div>
                      <span className="font-bold leading-snug">{t.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CURRICULUM ROADMAP BADGE */}
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs text-center">
                <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                  Cloud Architecture Track
                </span>
                <h4 className="text-sm font-bold text-[#18181b]">Curriculum Milestone</h4>
                <p className="text-xs text-stone-500 mt-1 mb-4">
                  Module 13 takes you behind the cloud console into the algorithms, protocols, and hardware
                  realities powering global hyperscale infrastructure.
                </p>
                <button
                  onClick={() => navigate("/learning")}
                  className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
                >
                  Curriculum Overview
                </button>
              </div>
            </div>

            {/* MAIN TOPIC CONTENT (COL-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
                {/* TOPIC HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                  <div>
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {currentTopic.week} • {currentTopic.badge}
                    </span>
                    <h2 className="text-2xl font-black text-[#18181b] mt-1">{currentTopic.title}</h2>
                    <p className="text-xs font-medium text-stone-500 mt-1">{currentTopic.focus}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={selectedTopic === 0}
                      onClick={() => setSelectedTopic((prev) => Math.max(0, prev - 1))}
                      className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <span className="font-mono text-xs font-bold text-stone-400">
                      {selectedTopic + 1} / {topics.length}
                    </span>
                    <button
                      disabled={selectedTopic === topics.length - 1}
                      onClick={() => setSelectedTopic((prev) => Math.min(topics.length - 1, prev + 1))}
                      className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* THEORY DESCRIPTION */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Theoretical Foundations & Academic Rationale
                  </h4>
                  <p className="text-sm leading-relaxed text-stone-700">{currentTopic.theory}</p>
                </div>

                {/* DIAGRAM CONTAINER */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Distributed Protocol / Architectural Architecture Diagram
                  </h4>
                  <pre className="rounded-2xl bg-[#18181b] p-4 text-[11px] font-mono leading-relaxed text-stone-200 overflow-x-auto shadow-inner border border-stone-800">
                    {currentTopic.diagram}
                  </pre>
                </div>

                {/* KEY TAKEAWAYS */}
                <div className="mt-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 p-5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-orange-600" />
                    Key Architectural Invariants & Takeaways
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {currentTopic.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold shrink-0">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CODE / IMPLEMENTATION EXAMPLE */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-2">
                    <FileCode size={14} />
                    Distributed Systems Code Implementation Pattern
                  </h4>
                  <pre className="rounded-2xl bg-stone-900 p-4 text-[11px] font-mono leading-relaxed text-emerald-400 overflow-x-auto shadow-inner border border-stone-800">
                    {currentTopic.codeExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 2: LAB 1 - RAFT CONSENSUS CLUSTER SIMULATOR */}
        {/* =================================================================== */}
        {activeTab === "raft-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 1 • MIT 6.5840 / Stanford Raft
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                5-Node Raft Consensus Cluster Simulator
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Experience distributed state-machine replication live. Inject node crashes, force network
                partitions, test election timeouts, and observe why a 2-node minority partition cannot commit writes
                while a 3-node majority partition safely advances term and log history.
              </p>
            </div>

            {/* CLUSTER CONTROL TOOLBAR */}
            <div className="mb-8 flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-stone-100 border border-stone-200">
              <button
                onClick={handleProposeLog}
                className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition shadow-xs"
              >
                <Play size={14} className="text-orange-400" />
                <span>Propose Client Write (SET x=val)</span>
              </button>
              <button
                onClick={handleKillLeader}
                className="flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-rose-700 transition shadow-xs"
              >
                <AlertTriangle size={14} />
                <span>Kill Current Leader</span>
              </button>
              <button
                onClick={handleTriggerElection}
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs"
              >
                <RefreshCw size={14} />
                <span>Trigger Election Timeout</span>
              </button>
              {!isPartitioned ? (
                <button
                  onClick={handleNetworkPartition}
                  className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition shadow-xs"
                >
                  <Share2 size={14} className="text-rose-600" />
                  <span>Split Partition (2 vs 3)</span>
                </button>
              ) : (
                <button
                  onClick={handleHealPartition}
                  className="flex items-center gap-2 rounded-xl border border-emerald-400 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition shadow-xs"
                >
                  <Check size={14} className="text-emerald-600" />
                  <span>Heal Network Partition</span>
                </button>
              )}
              <button
                onClick={handleResetRaft}
                className="flex items-center gap-1.5 rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-xs font-bold text-stone-600 hover:bg-stone-50 transition ml-auto"
                title="Reset Cluster"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>

            {/* CLUSTER TELEMETRY METRICS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Current Epoch Term</span>
                <div className="text-2xl font-black text-[#18181b] mt-1 font-mono">Term {raftTerm}</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Cluster Quorum State</span>
                <div className="text-2xl font-black text-emerald-700 mt-1 font-mono">
                  {aliveNodes.length} / 5 Nodes Alive
                </div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Majority Threshold</span>
                <div className="text-2xl font-black text-orange-600 mt-1 font-mono">
                  {majorityNeeded} Votes Needed
                </div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Network Partition Status</span>
                <div className="text-sm font-bold mt-2 font-mono">
                  {isPartitioned ? (
                    <span className="text-rose-600 bg-rose-50 px-2 py-1 rounded-md">SPLIT: {`{N1,N2}`} vs {`{N3,N4,N5}`}</span>
                  ) : (
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">HEALTHY: Fully Meshed</span>
                  )}
                </div>
              </div>
            </div>

            {/* 5 NODES VISUAL GRID */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {raftNodes.map((node) => {
                const isLeader = node.role === "Leader" && node.alive;
                return (
                  <div
                    key={node.id}
                    className={`rounded-2xl border p-4 transition-all flex flex-col justify-between ${
                      !node.alive
                        ? "border-stone-200 bg-stone-100 opacity-60 text-stone-400"
                        : isLeader
                        ? "border-orange-500 bg-orange-50/50 shadow-md ring-2 ring-orange-400/30"
                        : "border-stone-200 bg-white"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                        <span className="font-mono font-bold text-xs">Node {node.id}</span>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            !node.alive
                              ? "bg-rose-100 text-rose-800"
                              : isLeader
                              ? "bg-orange-500 text-white shadow-xs"
                              : "bg-stone-100 text-stone-700"
                          }`}
                        >
                          {!node.alive ? "CRASHED" : node.role}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1.5 text-xs font-mono">
                        <div className="flex justify-between text-stone-600">
                          <span>Status:</span>
                          <span className={node.alive ? "text-emerald-700 font-bold" : "text-rose-600 font-bold"}>
                            {node.alive ? "Online" : "Halted"}
                          </span>
                        </div>
                        {isPartitioned && (
                          <div className="flex justify-between text-stone-600">
                            <span>Partition:</span>
                            <span className="text-orange-700 font-bold">
                              {node.id <= 2 ? "Group Alpha (2)" : "Group Beta (3)"}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between text-stone-600">
                          <span>Log Size:</span>
                          <span className="font-bold text-stone-900">{node.log.length} entries</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-200/60">
                      <span className="font-mono text-[9px] uppercase font-bold text-stone-400 block mb-1">
                        Latest Log Entry:
                      </span>
                      <div className="text-[10px] font-mono text-stone-700 bg-stone-100/80 p-1.5 rounded truncate">
                        {node.log[node.log.length - 1] || "empty"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CLUSTER EVENT LOG / AUDIT STREAM */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-2">
                <Terminal size={14} />
                Live Consensus Event Stream & State Machine Telemetry
              </h4>
              <div className="rounded-2xl bg-[#18181b] p-4 font-mono text-xs text-stone-300 space-y-1.5 max-h-48 overflow-y-auto border border-stone-800 shadow-inner">
                {raftHistory.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-orange-400 select-none">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 3: LAB 2 - QUORUM & CONSISTENCY ANALYZER (N, R, W) */}
        {/* =================================================================== */}
        {activeTab === "quorum-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 2 • Amazon Dynamo & Apache Cassandra
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Quorum & Consistency Analyzer (N, R, W)
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Explore the mathematical relationship between Cluster Size (N), Read Quorum (R), and Write Quorum
                (W). Test how adjusting R and W shifts your architecture between Strong Consistency, Read-Optimized,
                Write-Optimized, and Eventual Consistency configurations.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 mb-8">
              {/* SLIDERS CONTROLS (COL-6) */}
              <div className="lg:col-span-6 space-y-6 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-stone-800 font-mono uppercase">
                      Total Cluster Replicas (N): {quorumN}
                    </label>
                    <span className="font-mono text-xs text-stone-500">Nodes in Replica Set</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="9"
                    step="2"
                    value={quorumN}
                    onChange={(e) => {
                      const n = parseInt(e.target.value);
                      setQuorumN(n);
                      setQuorumR(Math.min(quorumR, n));
                      setQuorumW(Math.min(quorumW, n));
                    }}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>3 Nodes</span>
                    <span>5 Nodes (Default)</span>
                    <span>7 Nodes</span>
                    <span>9 Nodes</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-stone-800 font-mono uppercase">
                      Write Quorum (W): {quorumW} Acks
                    </label>
                    <span className="font-mono text-xs text-stone-500">Required Write Responses</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={quorumN}
                    step="1"
                    value={quorumW}
                    onChange={(e) => setQuorumW(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>W = 1 (Fast Async)</span>
                    <span>W = {Math.floor(quorumN / 2) + 1} (Majority)</span>
                    <span>W = {quorumN} (Full Sync)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-stone-800 font-mono uppercase">
                      Read Quorum (R): {quorumR} Nodes
                    </label>
                    <span className="font-mono text-xs text-stone-500">Required Read Responses</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={quorumN}
                    step="1"
                    value={quorumR}
                    onChange={(e) => setQuorumR(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>R = 1 (Fast Read)</span>
                    <span>R = {Math.floor(quorumN / 2) + 1} (Majority)</span>
                    <span>R = {quorumN} (All Nodes)</span>
                  </div>
                </div>
              </div>

              {/* MATHEMATICAL EVALUATION CARD (COL-6) */}
              <div className="lg:col-span-6 space-y-4">
                <div
                  className={`rounded-2xl border p-6 ${
                    isQuorumOverlapping
                      ? "border-emerald-300 bg-emerald-50/40"
                      : "border-amber-300 bg-amber-50/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-stone-600">
                      Pigeonhole Overlap Check
                    </span>
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-full font-bold ${
                        isQuorumOverlapping
                          ? "bg-emerald-600 text-white"
                          : "bg-amber-600 text-white"
                      }`}
                    >
                      {isQuorumOverlapping ? "R + W > N SATISFIED" : "WEAK OVERLAP (R + W <= N)"}
                    </span>
                  </div>

                  <div className="mt-3 font-mono text-xl font-black text-stone-900">
                    R ({quorumR}) + W ({quorumW}) = {quorumR + quorumW}{" "}
                    {isQuorumOverlapping ? ">" : "<="} N ({quorumN})
                  </div>

                  <p className="mt-2 text-xs text-stone-700 leading-relaxed">
                    {isQuorumOverlapping
                      ? "Strict Quorum Overlap: The read quorum and write quorum are mathematically guaranteed to intersect at least 1 node. With versioned read-repair, clients will not observe stale writes."
                      : "Relaxed / Eventual Consistency: The read quorum and write quorum might NOT intersect. Clients can experience dirty reads or stale historical data until background anti-entropy syncs."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-stone-400">
                      Write Fault Tolerance
                    </span>
                    <div className="text-2xl font-black text-stone-900 mt-1 font-mono">
                      {writeFaultTolerance} Nodes
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Cluster survives {writeFaultTolerance} crashed node(s) during writes.
                    </span>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-stone-400">
                      Read Fault Tolerance
                    </span>
                    <div className="text-2xl font-black text-stone-900 mt-1 font-mono">
                      {readFaultTolerance} Nodes
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Cluster survives {readFaultTolerance} crashed node(s) during reads.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 4: LAB 3 - MINICLOUD FAILURE GAMEDAY (SECTION 125) */}
        {/* =================================================================== */}
        {activeTab === "gameday" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                  Interactive Engineering Lab 3 • Harvard CS 2620 Failure Testing
                </span>
                <h2 className="text-2xl font-black text-[#18181b] mt-1">
                  MiniCloud Distributed System Failure GameDay
                </h2>
                <p className="text-xs md:text-sm text-stone-600 mt-1">
                  Test your real-time architectural decision making across the 6 canonical distributed-systems failure cases.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 font-mono text-xs font-bold text-orange-700">
                Score: {gameScore} XP • Case {gameScenarioIndex + 1} / {gameScenarios.length}
              </div>
            </div>

            {/* SCENARIO CARD */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8 mb-8">
              <span className="inline-block rounded-full bg-stone-200 text-stone-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                {gameScenarios[gameScenarioIndex].title}
              </span>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Incident Context & Failure Event:
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                {gameScenarios[gameScenarioIndex].description}
              </p>
              <h4 className="text-sm font-bold text-orange-950 font-mono uppercase tracking-wide">
                Question: {gameScenarios[gameScenarioIndex].question}
              </h4>
            </div>

            {/* MULTI-CHOICE OPTIONS */}
            <div className="space-y-3 mb-8">
              {gameScenarios[gameScenarioIndex].options.map((option) => (
                <button
                  key={option.id}
                  disabled={selectedGameChoice !== null}
                  onClick={() => handleSelectGameOption(option)}
                  className={`w-full text-left rounded-2xl border p-4 text-xs md:text-sm transition flex items-start gap-3 ${
                    selectedGameChoice === null
                      ? "border-stone-200 bg-white hover:border-orange-400 hover:bg-orange-50/30"
                      : option.isCorrect
                      ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
                      : selectedGameChoice === option.id
                      ? "border-rose-500 bg-rose-50 text-rose-950"
                      : "border-stone-200 bg-stone-50 opacity-50"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border font-mono font-bold text-xs bg-white">
                    {option.id}
                  </span>
                  <span className="mt-0.5">{option.text}</span>
                </button>
              ))}
            </div>

            {/* FEEDBACK & NEXT BUTTON */}
            {gameFeedback && (
              <div
                className={`rounded-2xl border p-5 mb-8 ${
                  gameFeedback.isCorrect
                    ? "border-emerald-300 bg-emerald-50/60 text-emerald-900"
                    : "border-rose-300 bg-rose-50/60 text-rose-900"
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1 font-mono text-sm">
                  {gameFeedback.isCorrect ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      <span>Architectural Verdict: Correct Protocol Decision (+100 XP)</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle size={18} className="text-rose-600" />
                      <span>Architectural Verdict: Invariant Violation Detected</span>
                    </>
                  )}
                </div>
                <p className="text-xs md:text-sm leading-relaxed mt-2">{gameFeedback.rationale}</p>
                <button
                  onClick={handleNextGameScenario}
                  className="mt-4 rounded-xl bg-[#18181b] px-4 py-2 text-xs font-bold text-white hover:bg-stone-800 transition"
                >
                  Proceed to Next Failure Case →
                </button>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 5: MASTERY TEST ACCORDION (21 QUESTIONS - SECTION 129) */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Advanced Systems Final Assessment • Section 129
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Advanced Distributed Systems Mastery Test
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                21 foundational questions derived from MIT 6.5840, MIT 6.5830, Harvard CS 2620, CMU 15-440, and
                Cambridge Concurrent & Distributed Systems. Click any question to reveal its authoritative architectural
                explanation.
              </p>
            </div>

            <div className="space-y-3">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-[#faf8f5] overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                        <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                          Architectural Answer & Deep Explanation:
                        </span>
                        {mq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              Cloud Architecture Track
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Modules 1 through 13 Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From Cloud Foundations, VPCs, Compute, Storage, Databases, Large-Scale Architecture, Deep AWS, Deep Azure,
              Deep Google Cloud, Multi-Cloud Engineering, Cloud Security, and Cloud Economics to the Advanced Machinery
              Underneath (Raft, Spanner, Borg, and TrueTime).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/cloud/economics")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-700 transition"
            >
              ← Module 12: Economics
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Curriculum Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
