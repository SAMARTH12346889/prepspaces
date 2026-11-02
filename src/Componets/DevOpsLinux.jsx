import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  Server,
  Cpu,
  Layers,
  Check,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Network,
  Activity,
  HardDrive,
  FolderTree,
  ShieldCheck,
  Zap,
  Globe,
  Radio,
  BookOpen,
  Boxes,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsLinux() {
  const { data: moduleData, loading, error, reload } = useModuleContent("devops", "linux");
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'terminal-lab' | 'permissions-lab' | 'gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: INTERACTIVE BASH TERMINAL COMMAND SIMULATOR
  // =========================================================================
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "uname -a",
      output:
        "Linux ubuntu-devops-node-01 5.15.0-1049-aws #54-Ubuntu SMP x86_64 x86_64 x86_64 GNU/Linux",
    },
    {
      cmd: "whoami && id",
      output:
        "devops\nuid=1000(devops) gid=1000(devops) groups=1000(devops),4(adm),27(sudo),110(lxd)",
    },
  ]);

  const commandDatabase = moduleData?.commands || {};

  const handleExecuteCommand = (cmdText = terminalInput) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    let output = commandDatabase[trimmed];
    if (!output) {
      if (trimmed.startsWith("cat ")) {
        output = `cat: ${trimmed.split(" ")[1]}: No such file or directory`;
      } else if (trimmed.startsWith("curl ")) {
        output = "* Connected to target port...\n< HTTP/1.1 200 OK\n< Content-Type: application/json\n< Content-Length: 26\n\n{\"status\":\"healthy\",\"v\":\"1.0\"}";
      } else if (trimmed === "clear") {
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      } else {
        output = `bash: ${trimmed.split(" ")[0]}: command not found (try: df -h, free -h, ss -lntp, systemctl status nginx, ps aux | head -n 5)`;
      }
    }

    setTerminalHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setTerminalInput("");
  };

  // =========================================================================
  // SIMULATOR 2: PERMISSIONS & OCTAL MODE SANDBOX
  // =========================================================================
  const [permOwner, setPermOwner] = useState({ r: true, w: true, x: true }); // 7
  const [permGroup, setPermGroup] = useState({ r: true, w: false, x: true }); // 5
  const [permOther, setPermOther] = useState({ r: false, w: false, x: false }); // 0
  const [specialBits, setSpecialBits] = useState({ suid: false, sgid: false, sticky: false });

  const octalOwner = (permOwner.r ? 4 : 0) + (permOwner.w ? 2 : 0) + (permOwner.x ? 1 : 0);
  const octalGroup = (permGroup.r ? 4 : 0) + (permGroup.w ? 2 : 0) + (permGroup.x ? 1 : 0);
  const octalOther = (permOther.r ? 4 : 0) + (permOther.w ? 2 : 0) + (permOther.x ? 1 : 0);
  const octalSpecial = (specialBits.suid ? 4 : 0) + (specialBits.sgid ? 2 : 0) + (specialBits.sticky ? 1 : 0);

  const numericCode = `${octalSpecial > 0 ? octalSpecial : ""}${octalOwner}${octalGroup}${octalOther}`;
  const symbolicString = `-${permOwner.r ? "r" : "-"}${permOwner.w ? "w" : "-"}${
    specialBits.suid ? (permOwner.x ? "s" : "S") : permOwner.x ? "x" : "-"
  }${permGroup.r ? "r" : "-"}${permGroup.w ? "w" : "-"}${
    specialBits.sgid ? (permGroup.x ? "s" : "S") : permGroup.x ? "x" : "-"
  }${permOther.r ? "r" : "-"}${permOther.w ? "w" : "-"}${
    specialBits.sticky ? (permOther.x ? "t" : "T") : permOther.x ? "x" : "-"
  }`;

  const permissionDevOpsUsage = useMemo(() => {
    const code = `${octalOwner}${octalGroup}${octalOther}`;
    switch (code) {
      case "600":
        return "Strict Private Key Mode: Used for SSH private keys (~/.ssh/id_ed25519) and secret credentials. Group/other have zero access.";
      case "640":
        return "Protected App Config: Owner (service user) has read/write, service group has read-only, others have zero access.";
      case "644":
        return "Standard Public Config / Asset: Owner has read/write, everyone else has read-only (e.g., /etc/hosts, static assets).";
      case "700":
        return "Private Directory: Used for ~/.ssh or root-only directories. Only the owner can enter and inspect files.";
      case "750":
        return "Deployment / App Home Directory: Deployer/owner has full access, application group can traverse & read, world has no access.";
      case "755":
        return "Standard Executable Script / Binary: Owner can modify, all users can execute & read (e.g., /usr/local/bin scripts).";
      case "777":
        return "CRITICAL ANTI-PATTERN: Full public read/write/execute. Allows any process or local attacker to overwrite or tamper with files!";
      default:
        return `Custom Unix mode: Owner can ${octalOwner >= 4 ? "read" : ""}${octalOwner % 4 >= 2 ? "+write" : ""}${
          octalOwner % 2 === 1 ? "+exec" : ""
        }. Group has value ${octalGroup}, Others have value ${octalOther}.`;
    }
  }, [octalOwner, octalGroup, octalOther]);

  // =========================================================================
  // SIMULATOR 3: PRODUCTION LINUX INCIDENT TROUBLESHOOTING GAMEDAY
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
  // 10 SYLLABUS TOPICS
  // =========================================================================
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic] || topics[0];

  // =========================================================================
  // 12 MASTERY TEST QUESTIONS
  // =========================================================================
  const masteryQuestions = moduleData?.quiz || [];

    if (loading) {
    return <ModuleLoadingSkeleton track="devops" currentModuleId="linux" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="devops" currentModuleId="linux" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[130px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[150px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="linux"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Linux AI"
        />

        {/* HERO BANNER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <Terminal size={13} />
              <span>Linux System Administration</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Linux for DevOps
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              Grounded in the academic operating systems foundations of{" "}
              <span className="text-orange-400 font-semibold">
                MIT 6.033/6.828, Stanford CS111, Harvard CS1610, Cambridge OS, and Imperial College
              </span>
              . Master server administration from first principles: Filesystem Hierarchy Standard, Inode vs Block
              capacity, Kernel Process Scheduling, Octal Permissions, Sockets & the 6-Layer Network Debugging Sequence,
              systemd Service Architecture, journalctl Root-Cause Timelines, and Defensive Bash Automation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FHS & Inode Exhaustion
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Process States (R, S, D, Z)
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> 6-Layer Network Sequence
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> systemd & Defensive Bash
              </span>
            </div>
          </div>
        </div>

        {/* EMBEDDED AI TUTOR */}
        {showAiTutor && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-orange-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-600">
                  Nova AI • Principal Linux & DevOps SRE Mentor
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
              <LearningRo currentTopic="devops-linux-foundations" />
            </div>
          </div>
        )}

        {/* WORKSPACE NAVIGATION TABS */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <BookOpen size={15} />
            <span>10 Core Curriculum Topics</span>
          </button>
          <button
            onClick={() => setActiveTab("terminal-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "terminal-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Terminal size={15} />
            <span>Lab 1: Interactive Command Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab("permissions-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "permissions-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Lock size={15} />
            <span>Lab 2: Octal Permissions Sandbox</span>
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
            <span>Lab 3: Incident Troubleshooting GameDay</span>
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
            <span>Linux Mastery Test (12 Questions)</span>
          </button>
        </div>

        {/* =================================================================== */}
        {/* VIEW 1: THEORY & 10 SYLLABUS TOPICS */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            {/* TOPIC SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                  DevOps Module 1 Syllabus • 10 Topics
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

              {/* QS TOP 10 ACADEMIC FOUNDATIONS CARD */}
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
                <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                  Top 10 QS Universities 2027
                </span>
                <h4 className="text-sm font-bold text-[#18181b]">Academic OS Foundations</h4>
                <p className="text-xs text-stone-500 mt-1 mb-4 leading-relaxed">
                  Synthesizing OS Engineering curricula from MIT, Stanford CS111, Harvard CS1610, Cambridge, Oxford,
                  Caltech, Imperial, ETH Zurich, UCL, and NUS.
                </p>
                <div className="space-y-1.5 text-[11px] font-mono text-stone-600">
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>MIT 6.828</span>
                    <span className="font-bold text-stone-800">Kernels & Virtual Memory</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Stanford CS111</span>
                    <span className="font-bold text-stone-800">Crash Recovery & Sockets</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Cambridge 2026</span>
                    <span className="font-bold text-stone-800">Scheduling & Protection</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Harvard CS1610</span>
                    <span className="font-bold text-stone-800">Process Trees & Inodes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN TOPIC CONTENT (COL-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
                {/* TOPIC HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                  <div>
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {currentTopic.badge}
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
                    Operating Systems Principles & Administration Rationale
                  </h4>
                  <p className="text-sm leading-relaxed text-stone-700">{currentTopic.theory}</p>
                </div>

                {/* DIAGRAM CONTAINER */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Linux Architecture & Kernel Flow Diagram
                  </h4>
                  <pre className="rounded-2xl bg-[#18181b] p-4 text-[11px] font-mono leading-relaxed text-stone-200 overflow-x-auto shadow-inner border border-stone-800">
                    {currentTopic.diagram}
                  </pre>
                </div>

                {/* KEY TAKEAWAYS */}
                <div className="mt-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 p-5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-orange-600" />
                    Essential DevOps Administration Takeaways
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
                    Verified Terminal Commands & Production Snippets
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
        {/* VIEW 2: LAB 1 - INTERACTIVE BASH TERMINAL COMMAND SIMULATOR */}
        {/* =================================================================== */}
        {activeTab === "terminal-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 1 • Linux CLI Simulation
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Interactive Ubuntu Server Terminal
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Execute live diagnostic commands in an interactive Ubuntu 24.04 LTS shell environment. Test disk space,
                inode quotas, process states, listening sockets, memory utilization, and systemd units.
              </p>
            </div>

            {/* QUICK COMMAND PRESETS */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-stone-500 mr-2">Quick Commands:</span>
              {[
                "df -h",
                "df -i",
                "free -h",
                "ss -lntp",
                "systemctl status nginx",
                "uptime",
                "ps aux | head -n 5",
                "ip route",
                "cat /etc/os-release",
              ].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleExecuteCommand(cmd)}
                  className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 font-mono text-[11px] font-bold text-stone-700 hover:border-orange-400 hover:bg-orange-50/50 transition shadow-2xs"
                >
                  {cmd}
                </button>
              ))}
              <button
                onClick={() => handleExecuteCommand("clear")}
                className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-mono text-[11px] font-bold text-rose-700 hover:bg-rose-100 transition ml-auto"
              >
                clear
              </button>
            </div>

            {/* TERMINAL SURFACE */}
            <div className="rounded-3xl border border-stone-800 bg-[#141416] p-5 md:p-7 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4 text-stone-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-bold text-stone-300">devops@ubuntu-devops-node-01: ~</span>
                </div>
                <span>Ubuntu 24.04 LTS (Bash 5.2.21)</span>
              </div>

              {/* TERMINAL OUTPUT STREAM */}
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <span className="text-orange-400">devops@ubuntu-server:~$</span>
                      <span>{item.cmd}</span>
                    </div>
                    <pre className="text-stone-300 whitespace-pre-wrap leading-relaxed pl-4 border-l-2 border-stone-800 font-mono text-[11px]">
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* TERMINAL INPUT BAR */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleExecuteCommand();
                }}
                className="mt-5 flex items-center gap-2 border-t border-stone-800 pt-3"
              >
                <span className="text-orange-400 font-bold">devops@ubuntu-server:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command (e.g. df -h, free -h, ss -lntp, clear)..."
                  className="flex-1 bg-transparent text-emerald-400 focus:outline-hidden font-mono text-xs placeholder:text-stone-600"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#ea580c] transition"
                >
                  Run
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 3: LAB 2 - PERMISSIONS & OCTAL MODE SANDBOX */}
        {/* =================================================================== */}
        {activeTab === "permissions-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 2 • Unix DAC & Permissions
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Linux Octal Permissions & Mode Sandbox
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Toggle Read (4), Write (2), and Execute (1) bits across Owner, Group, and Others. Observe real-time
                symbolic string calculation, numeric octal modes, SUID/SGID/Sticky bits, and real-world DevOps usage.
              </p>
            </div>

            {/* INTERACTIVE BIT TOGGLE MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* OWNER */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold uppercase text-stone-700">Owner (User / u)</span>
                  <span className="font-mono text-base font-black text-orange-600">Value: {octalOwner}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { key: "r", label: "Read (r = 4)", val: permOwner.r },
                    { key: "w", label: "Write (w = 2)", val: permOwner.w },
                    { key: "x", label: "Execute / Traverse (x = 1)", val: permOwner.x },
                  ].map((bit) => (
                    <label key={bit.key} className="flex items-center justify-between text-xs cursor-pointer">
                      <span className="font-medium text-stone-700">{bit.label}</span>
                      <input
                        type="checkbox"
                        checked={bit.val}
                        onChange={(e) => setPermOwner((prev) => ({ ...prev, [bit.key]: e.target.checked }))}
                        className="h-4 w-4 rounded accent-orange-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* GROUP */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold uppercase text-stone-700">Group (g)</span>
                  <span className="font-mono text-base font-black text-orange-600">Value: {octalGroup}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { key: "r", label: "Read (r = 4)", val: permGroup.r },
                    { key: "w", label: "Write (w = 2)", val: permGroup.w },
                    { key: "x", label: "Execute / Traverse (x = 1)", val: permGroup.x },
                  ].map((bit) => (
                    <label key={bit.key} className="flex items-center justify-between text-xs cursor-pointer">
                      <span className="font-medium text-stone-700">{bit.label}</span>
                      <input
                        type="checkbox"
                        checked={bit.val}
                        onChange={(e) => setPermGroup((prev) => ({ ...prev, [bit.key]: e.target.checked }))}
                        className="h-4 w-4 rounded accent-orange-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* OTHERS */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold uppercase text-stone-700">Others / World (o)</span>
                  <span className="font-mono text-base font-black text-orange-600">Value: {octalOther}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { key: "r", label: "Read (r = 4)", val: permOther.r },
                    { key: "w", label: "Write (w = 2)", val: permOther.w },
                    { key: "x", label: "Execute / Traverse (x = 1)", val: permOther.x },
                  ].map((bit) => (
                    <label key={bit.key} className="flex items-center justify-between text-xs cursor-pointer">
                      <span className="font-medium text-stone-700">{bit.label}</span>
                      <input
                        type="checkbox"
                        checked={bit.val}
                        onChange={(e) => setPermOther((prev) => ({ ...prev, [bit.key]: e.target.checked }))}
                        className="h-4 w-4 rounded accent-orange-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* SPECIAL PERMISSIONS TOGGLES */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4 mb-8">
              <span className="font-mono text-xs font-bold uppercase text-stone-600 block mb-3">
                Special Permission Bits (Advanced):
              </span>
              <div className="flex flex-wrap items-center gap-6 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specialBits.suid}
                    onChange={(e) => setSpecialBits((prev) => ({ ...prev, suid: e.target.checked }))}
                    className="h-4 w-4 rounded accent-orange-500"
                  />
                  <span className="font-medium">SUID (4xxx: Exec as Owner, e.g. /usr/bin/passwd)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specialBits.sgid}
                    onChange={(e) => setSpecialBits((prev) => ({ ...prev, sgid: e.target.checked }))}
                    className="h-4 w-4 rounded accent-orange-500"
                  />
                  <span className="font-medium">SGID (2xxx: Inherit group in directories)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specialBits.sticky}
                    onChange={(e) => setSpecialBits((prev) => ({ ...prev, sticky: e.target.checked }))}
                    className="h-4 w-4 rounded accent-orange-500"
                  />
                  <span className="font-medium">Sticky Bit (1xxx: Only owner can delete, e.g. /tmp)</span>
                </label>
              </div>
            </div>

            {/* REAL-TIME CALCULATION & CONTEXT CARD */}
            <div className="rounded-3xl border border-orange-200 bg-orange-50/40 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-orange-200/60">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-stone-500">Numeric Mode (chmod)</span>
                  <div className="text-3xl md:text-4xl font-black font-mono text-[#18181b] mt-1">
                    chmod {numericCode} target_file
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-stone-500">Symbolic String (ls -l)</span>
                  <div className="text-3xl md:text-4xl font-black font-mono text-orange-600 mt-1">
                    {symbolicString}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <span className="font-mono text-xs font-bold uppercase text-orange-800 block mb-1">
                  Production DevOps Analysis & Guidance:
                </span>
                <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
                  {permissionDevOpsUsage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 4: LAB 3 - INCIDENT TROUBLESHOOTING GAMEDAY */}
        {/* =================================================================== */}
        {activeTab === "gameday" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                  Interactive Engineering Lab 3 • Production Troubleshooting
                </span>
                <h2 className="text-2xl font-black text-[#18181b] mt-1">
                  Linux SRE Incident Troubleshooting GameDay
                </h2>
                <p className="text-xs md:text-sm text-stone-600 mt-1">
                  Diagnose real-world server failures before executing administrative changes.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 font-mono text-xs font-bold text-orange-700">
                Score: {gameScore} XP • Incident {gameScenarioIndex + 1} / {gameScenarios.length}
              </div>
            </div>

            {/* INCIDENT CARD */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8 mb-8">
              <span className="inline-block rounded-full bg-rose-100 text-rose-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                {gameScenarios[gameScenarioIndex].title}
              </span>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                Production Incident Description & Telemetry:
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                {gameScenarios[gameScenarioIndex].symptom}
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
                      <span>Architectural Verdict: Correct Diagnostic Investigation (+100 XP)</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle size={18} className="text-rose-600" />
                      <span>Architectural Verdict: Incorrect Diagnostic Hypothesis</span>
                    </>
                  )}
                </div>
                <p className="text-xs md:text-sm leading-relaxed mt-2">{gameFeedback.rationale}</p>
                <button
                  onClick={handleNextGameScenario}
                  className="mt-4 rounded-xl bg-[#18181b] px-4 py-2 text-xs font-bold text-white hover:bg-stone-800 transition"
                >
                  Proceed to Next Incident Case →
                </button>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 5: MASTERY TEST ACCORDION (12 QUESTIONS) */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Final Assessment • SRE Interview Prep
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Linux for DevOps Mastery Test
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                12 foundational questions derived from MIT, Stanford CS111, Cambridge OS, and production Linux manual
                pages. Click any question to reveal the rigorous architectural explanation.
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
                          Authoritative Operating Systems Answer:
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
              DevOps & SRE Track • Module 1 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Linux System Administration Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From the Filesystem Hierarchy Standard, Inode vs Block Storage, and Kernel Process Scheduling to Octal
              Permissions, 6-Layer Network Diagnostics, systemd Units, journalctl Timelines, and Defensive Bash
              Automation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/git")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-1.5"
            >
              <span>Next: Module 2 — Git & Workflow</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
