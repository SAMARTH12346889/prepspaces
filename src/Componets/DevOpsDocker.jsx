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
  Boxes,
  Layers,
  HardDrive,
  Network,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Activity,
  Tag,
  BookOpen,
  Check,
  Eye,
  Server,
  Database,
  Cpu,
  RefreshCw,
  Zap,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsDocker() {
  const { data: moduleData, loading, error, reload } = useModuleContent("devops", "docker");
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'dockerfile-lab' | 'compose-lab' | 'security-gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: DOCKERFILE MULTI-STAGE BUILD & LAYER CACHE VISUALIZER
  // =========================================================================
  const [buildStrategy, setBuildStrategy] = useState("multistage"); // 'naive' | 'multistage'
  const [cacheScenario, setCacheScenario] = useState("clean"); // 'clean' | 'code-change' | 'deps-change'

  const layerData = useMemo(() => {
    if (buildStrategy === "naive") {
      const isDepsChanged = cacheScenario === "deps-change";
      const isCodeChanged = cacheScenario === "code-change";

      return {
        strategyName: "Naive Single-Stage Build (Anti-Pattern)",
        totalSize: "842 MB",
        buildTime: cacheScenario === "clean" ? "48.2s" : isDepsChanged ? "42.0s" : "38.5s (Rebuilt pip install due to bad COPY ordering!)",
        attackSurface: "High (gcc, make, python3-dev, pip headers present in runtime)",
        layers: [
          { instruction: "FROM python:3.13", size: "340 MB", cached: cacheScenario !== "clean" },
          { instruction: "WORKDIR /app", size: "0 B", cached: cacheScenario !== "clean" },
          { instruction: "COPY . .  <-- ANTI-PATTERN: Copies app.py before dependencies!", size: "45 KB", cached: false },
          {
            instruction: "RUN apt-get update && apt-get install -y gcc libpq-dev",
            size: "320 MB",
            cached: !isCodeChanged && !isDepsChanged,
          },
          {
            instruction: "RUN pip install -r requirements.txt",
            size: "182 MB",
            cached: false, // Invalidated because COPY . . changed!
          },
          { instruction: "CMD [\"python\", \"app.py\"]", size: "0 B", cached: false },
        ],
      };
    } else {
      const isDepsChanged = cacheScenario === "deps-change";
      const isCodeChanged = cacheScenario === "code-change";

      return {
        strategyName: "Optimized Multi-Stage Build (SRE Production Standard)",
        totalSize: "128 MB",
        buildTime: cacheScenario === "clean" ? "32.4s" : isDepsChanged ? "29.1s" : "0.8s (Instant Cache Hit!)",
        attackSurface: "Minimal (No compilers, non-root user, slim runtime base)",
        layers: [
          {
            stage: "Stage 1: Builder (Discarded)",
            instruction: "FROM python:3.13-slim AS builder",
            size: "120 MB",
            cached: cacheScenario !== "clean",
          },
          {
            stage: "Stage 1: Builder",
            instruction: "COPY requirements.txt .",
            size: "2 KB",
            cached: !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 1: Builder",
            instruction: "RUN pip install --prefix=/install -r requirements.txt",
            size: "180 MB (Not in final image!)",
            cached: !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 2: Runtime (Final Artifact)",
            instruction: "FROM python:3.13-slim AS runtime",
            size: "120 MB",
            cached: true,
          },
          {
            stage: "Stage 2: Runtime",
            instruction: "COPY --from=builder /install /usr/local",
            size: "8 MB (Compiled wheels only)",
            cached: !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 2: Runtime",
            instruction: "COPY --chown=app:app app.py .",
            size: "15 KB",
            cached: !isCodeChanged && !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 2: Runtime",
            instruction: "USER app && CMD [\"/app/start.sh\"]",
            size: "0 B",
            cached: !isCodeChanged && !isDepsChanged && cacheScenario !== "clean",
          },
        ],
      };
    }
  }, [buildStrategy, cacheScenario]);

  // =========================================================================
  // SIMULATOR 2: INTERACTIVE COMPOSE MULTI-SERVICE NETWORK & VOLUME SIMULATOR
  // =========================================================================
  const [composeServicesRunning, setComposeServicesRunning] = useState(true);
  const [databaseVolumeActive, setDatabaseVolumeActive] = useState(true);
  const [notesList, setNotesList] = useState([
    { id: 1, message: "Deploy initial notes-api:1.0.0", created_at: "2026-10-09 20:10:00" },
    { id: 2, message: "Configure non-root user 'app' (UID 1000)", created_at: "2026-10-09 20:25:00" },
  ]);
  const [inputNote, setInputNote] = useState("");
  const [dnsLog, setDnsLog] = useState([
    "API Container connected to 'frontend' and 'backend' networks.",
    "Database Container connected to 'backend' (internal: true).",
    "Embedded DNS 127.0.0.11 resolved 'db' -> 172.28.0.2 (Port 5432).",
    "PostgreSQL 18 volume mounted to /var/lib/postgresql from 'postgres_data'.",
    "API read_only root filesystem active; writable /tmp backed by tmpfs.",
  ]);

  const handleCreateNote = () => {
    if (!composeServicesRunning) {
      setDnsLog((prev) => ["[CRITICAL] 502 Bad Gateway: API container is down!", ...prev.slice(0, 7)]);
      return;
    }
    if (!inputNote.trim()) return;

    const newNote = {
      id: notesList.length + 1,
      message: inputNote.trim(),
      created_at: new Date().toISOString().replace("T", " ").substring(0, 19),
    };

    setNotesList([newNote, ...notesList]);
    setInputNote("");
    setDnsLog((prev) => [
      `POST /notes -> 201 Created (Inserted row ID #${newNote.id} into PostgreSQL table 'notes')`,
      ...prev.slice(0, 7),
    ]);
  };

  const handleComposeDown = () => {
    setComposeServicesRunning(false);
    setDnsLog((prev) => [
      "$ docker compose down",
      "Stopped container notes-app-api-1",
      "Stopped container notes-app-db-1",
      "Removed networks: notes-app_frontend, notes-app_backend",
      "Named volume 'postgres_data' PRESERVED on host storage.",
      ...prev.slice(0, 7),
    ]);
  };

  const handleComposeUp = () => {
    setComposeServicesRunning(true);
    setDnsLog((prev) => [
      "$ docker compose up -d",
      "Created network notes-app_frontend, notes-app_backend",
      "Started notes-app-db-1 (Healthy: pg_isready passed)",
      "Started notes-app-api-1 (Healthy: /readyz passed)",
      databaseVolumeActive
        ? `Mounted existing volume 'postgres_data': Re-attached ${notesList.length} persisted records.`
        : "Created empty volume 'postgres_data'. Zero records present.",
      ...prev.slice(0, 7),
    ]);
  };

  const handleComposeDownVolumeWipe = () => {
    setComposeServicesRunning(false);
    setDatabaseVolumeActive(false);
    setNotesList([]);
    setDnsLog((prev) => [
      "$ docker compose down -v  <-- WARNING: -v destroys volumes!",
      "Removed container notes-app-api-1",
      "Removed container notes-app-db-1",
      "DELETED VOLUME 'postgres_data'! All persisted database rows erased.",
      ...prev.slice(0, 7),
    ]);
  };

  // =========================================================================
  // SIMULATOR 3: CONTAINER SECURITY & SRE INCIDENT GAMEDAY
  // =========================================================================
  const incidentScenarios = moduleData?.scenarios || [];

  const [selectedIncidentIndex, setSelectedIncidentIndex] = useState(0);
  const [incidentAnswers, setIncidentAnswers] = useState({});

  const handleIncidentAnswer = (incId, optId) => {
    setIncidentAnswers((prev) => ({ ...prev, [incId]: optId }));
  };

  // =========================================================================
  // TOPIC CURRICULUM DATA (10 COMPREHENSIVE TOPICS)
  // =========================================================================
  const topics = moduleData?.topics || [];
  const currentTopic = topics[selectedTopic] || topics[0] || {};

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (14 IN-DEPTH QUESTIONS)
  // =========================================================================
  const masteryQuestions = moduleData?.quiz || [];

    if (loading) {
    return <ModuleLoadingSkeleton track="devops" currentModuleId="docker" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="devops" currentModuleId="docker" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="docker"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Docker AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Boxes size={14} />
              <span>University-Informed Container Engineering & Production Systems</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Docker & Container Systems
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Build the application <strong className="text-stone-900 font-semibold">once</strong> as a versioned,
              testable artifact, then promote that artifact through environments without rebuilding. Grounded in
              operating-systems foundations from <span className="font-semibold text-stone-900">MIT</span>,{" "}
              <span className="font-semibold text-stone-900">Stanford (CS111)</span>,{" "}
              <span className="font-semibold text-stone-900">Cambridge</span>,{" "}
              <span className="font-semibold text-stone-900">NUS (CS2106)</span>, and official Docker & OCI specifications.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "dockerfile-lab", label: "Lab 1: Multi-Stage Layer Visualizer", icon: Layers },
              { id: "compose-lab", label: "Lab 2: Multi-Service Compose & Volumes", icon: Database },
              { id: "security-gameday", label: "Lab 3: Security & Failure GameDay", icon: ShieldCheck },
              { id: "mastery", label: "Mastery Assessment (14 Questions)", icon: CheckCircle2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? "bg-orange-500 text-white shadow-orange-500/20 shadow-md"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI TUTOR EMBED */}
        {showAiTutor && (
          <div className="mb-10 rounded-2xl border border-orange-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-600" />
                <h3 className="text-base font-bold text-stone-900">Nova AI: Docker & Container Systems Mentor</h3>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800"
              >
                Close
              </button>
            </div>
            <div className="pt-4">
              <LearningRo
                currentTopic="devops-docker-containers"
                moduleName="Docker & Container Systems"
              />
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: THEORY & CURRICULUM TOPICS (10 TOPICS)                       */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* LEFT TOPIC SELECTOR */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block">
                Syllabus Topics
              </span>
              {topics.map((t, idx) => {
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all border ${
                      isSelected
                        ? "bg-[#18181b] text-white border-[#27272a] shadow-lg shadow-stone-900/10"
                        : "bg-white/80 text-stone-800 border-stone-200/80 hover:bg-white hover:border-orange-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-orange-400" : "text-stone-600"
                        }`}
                      >
                        Topic {t.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/10 text-stone-300"
                            : "bg-stone-100 text-stone-600 border border-stone-200"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <div className="font-bold text-sm leading-snug">{t.title}</div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT DETAIL VIEW */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-100">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-orange-600 tracking-wider">
                      Topic {currentTopic?.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                      {currentTopic?.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">
                    {currentTopic?.badge}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {currentTopic?.summary}
                </p>

                {/* Subsections */}
                <div className="mt-8 space-y-6">
                  {currentTopic?.details?.map((detail, dIdx) => (
                    <div key={dIdx} className="border-l-2 border-orange-500 pl-4 py-1">
                      <h3 className="text-base font-bold text-stone-900">{detail.heading}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed whitespace-pre-line font-sans">
                        {detail.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CODE DEMONSTRATION SNIPPET */}
                <div className="mt-8">
                  <div className="flex items-center justify-between bg-[#18181b] text-stone-300 px-4 py-2 rounded-t-xl text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      Production Dockerfile / CLI Reference
                    </span>
                    <span className="text-[10px] text-stone-400">docker / compose</span>
                  </div>
                  <pre className="p-4 bg-[#18181b] text-stone-100 text-xs font-mono rounded-b-xl overflow-x-auto border-t border-stone-800 leading-relaxed">
                    <code>{currentTopic?.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* NEXT / PREV BUTTONS */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={selectedTopic === 0}
                  onClick={() => setSelectedTopic(selectedTopic - 1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition"
                >
                  <ArrowLeft size={14} /> Previous Topic
                </button>
                <button
                  disabled={selectedTopic === topics.length - 1}
                  onClick={() => setSelectedTopic(selectedTopic + 1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-40 transition"
                >
                  Next Topic <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - MULTI-STAGE BUILD & LAYER CACHE VISUALIZER           */}
        {/* =================================================================== */}
        {activeTab === "dockerfile-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Layers size={14} />
                <span>Lab 1: Layer Cache & Multi-Stage Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Multi-Stage Build & Layer Cache Visualizer
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Experience why instruction ordering and multi-stage separation are fundamental to container
                engineering. Compare build durations, final image sizes, and security attack surfaces.
              </p>
            </div>

            {/* CONTROLS TOOLBAR */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Strategy Selector */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Build Architecture:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setBuildStrategy("multistage")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                        buildStrategy === "multistage"
                          ? "bg-orange-500 text-white shadow-sm"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      ✓ Multi-Stage Build (Production)
                    </button>
                    <button
                      onClick={() => setBuildStrategy("naive")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                        buildStrategy === "naive"
                          ? "bg-rose-600 text-white shadow-sm"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      ⚠ Naive Single-Stage (Anti-Pattern)
                    </button>
                  </div>
                </div>

                {/* Cache Scenario Selector */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Simulate Developer Action:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCacheScenario("clean")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                        cacheScenario === "clean"
                          ? "bg-stone-900 text-white"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      Fresh Clean Build
                    </button>
                    <button
                      onClick={() => setCacheScenario("code-change")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                        cacheScenario === "code-change"
                          ? "bg-stone-900 text-white"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      Edit app.py only
                    </button>
                    <button
                      onClick={() => setCacheScenario("deps-change")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                        cacheScenario === "deps-change"
                          ? "bg-stone-900 text-white"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      Edit requirements.txt
                    </button>
                  </div>
                </div>
              </div>

              {/* TELEMETRY CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-200">
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">Final Image Size:</span>
                  <span className="text-xl font-black text-stone-900 mt-0.5 block">{layerData.totalSize}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">Build Duration:</span>
                  <span className="text-xl font-black text-stone-900 mt-0.5 block">{layerData.buildTime}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">Attack Surface / CVEs:</span>
                  <span className="text-xs font-bold text-stone-800 mt-1 block leading-tight">{layerData.attackSurface}</span>
                </div>
              </div>
            </div>

            {/* LAYER LIST VISUALIZER */}
            <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-6 text-white space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-b border-stone-800 pb-3">
                <span className="flex items-center gap-2">
                  <Layers size={14} className="text-orange-400" />
                  <span>Build Layers Stack ({layerData.layers.length} Instructions)</span>
                </span>
                <span>{layerData.strategyName}</span>
              </div>

              <div className="space-y-2">
                {layerData.layers.map((lay, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border font-mono text-xs flex flex-wrap items-center justify-between gap-3 transition ${
                      lay.cached
                        ? "bg-stone-900/90 border-stone-700 text-stone-300"
                        : "bg-orange-950/40 border-orange-600/70 text-white shadow-sm"
                    }`}
                  >
                    <div className="space-y-1">
                      {lay.stage && (
                        <span className="text-[10px] font-bold text-orange-400 block uppercase tracking-wider">
                          {lay.stage}
                        </span>
                      )}
                      <div className="font-semibold text-stone-100">{lay.instruction}</div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-stone-400 text-[11px]">{lay.size}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          lay.cached
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        }`}
                      >
                        {lay.cached ? "CACHED" : "REBUILT"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - COMPOSE MULTI-SERVICE NETWORK & VOLUMES              */}
        {/* =================================================================== */}
        {activeTab === "compose-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Database size={14} />
                <span>Lab 2: Multi-Service Orchestration & Persistence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Interactive Compose Multi-Service & Volume Simulator
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Observe the complete microservice architecture: Client $\rightarrow$ API container (Port 8000,
                read-only root, non-root user) $\rightarrow$ Backend network $\rightarrow$ PostgreSQL 18 (internal
                only, mounted to <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">postgres_data</code> named volume).
                Test data persistence across container recreation.
              </p>
            </div>

            {/* TOPOLOGY MAP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Host/Client */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-stone-500">HOST & INGRESS</span>
                  <span className="text-[10px] font-mono bg-stone-200 px-2 py-0.5 rounded font-bold">127.0.0.1</span>
                </div>
                <h4 className="font-black text-stone-900 text-sm">Client / Browser</h4>
                <p className="text-xs text-stone-600">
                  Sends HTTP requests to <code className="font-mono text-orange-700">127.0.0.1:8000</code>. Only the API
                  port is exposed to the host loopback.
                </p>
              </div>

              {/* API Container */}
              <div
                className={`p-5 rounded-2xl border transition space-y-2 ${
                  composeServicesRunning
                    ? "border-emerald-300 bg-emerald-50/40 text-emerald-950"
                    : "border-stone-300 bg-stone-100 text-stone-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold">CONTAINER 1: api</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      composeServicesRunning ? "bg-emerald-600 text-white" : "bg-stone-300 text-stone-600"
                    }`}
                  >
                    {composeServicesRunning ? "RUNNING :8000" : "STOPPED"}
                  </span>
                </div>
                <h4 className="font-black text-sm">Python Flask + Gunicorn</h4>
                <div className="text-xs space-y-1">
                  <div>• USER: app (non-root)</div>
                  <div>• read_only: true + tmpfs: /tmp</div>
                  <div>• Networks: frontend, backend</div>
                </div>
              </div>

              {/* Database Container */}
              <div
                className={`p-5 rounded-2xl border transition space-y-2 ${
                  composeServicesRunning
                    ? "border-blue-300 bg-blue-50/40 text-blue-950"
                    : "border-stone-300 bg-stone-100 text-stone-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold">CONTAINER 2: db</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      composeServicesRunning ? "bg-blue-600 text-white" : "bg-stone-300 text-stone-600"
                    }`}
                  >
                    {composeServicesRunning ? "HEALTHY :5432" : "STOPPED"}
                  </span>
                </div>
                <h4 className="font-black text-sm">PostgreSQL 18</h4>
                <div className="text-xs space-y-1">
                  <div>• Volume: <span className="font-bold text-orange-700">postgres_data</span></div>
                  <div>• Target: /var/lib/postgresql</div>
                  <div>• Network: backend (internal: true)</div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE CONTROLS */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-stone-700">Orchestration & Failure Controls:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleComposeDown}
                    disabled={!composeServicesRunning}
                    className="px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition"
                  >
                    docker compose down (Keep Volume)
                  </button>
                  <button
                    onClick={handleComposeUp}
                    disabled={composeServicesRunning}
                    className="px-3.5 py-1.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 disabled:opacity-40 transition"
                  >
                    docker compose up -d
                  </button>
                  <button
                    onClick={handleComposeDownVolumeWipe}
                    className="px-3.5 py-1.5 rounded-xl border border-rose-300 bg-rose-50 text-rose-800 text-xs font-bold hover:bg-rose-100 transition"
                  >
                    docker compose down -v (Wipe Volume)
                  </button>
                </div>
              </div>

              {/* NOTE CREATION INPUT */}
              <div className="flex gap-2 pt-2 border-t border-stone-200">
                <input
                  type="text"
                  value={inputNote}
                  onChange={(e) => setInputNote(e.target.value)}
                  placeholder="Enter message (e.g., 'Verify PostgreSQL 18 volume persistence')..."
                  className="flex-1 rounded-xl border border-stone-300 px-4 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onKeyDown={(e) => e.key === "Enter" && handleCreateNote()}
                />
                <button
                  onClick={handleCreateNote}
                  disabled={!composeServicesRunning}
                  className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 disabled:opacity-40 transition shadow-sm"
                >
                  POST /notes
                </button>
              </div>
            </div>

            {/* PERSISTED DATABASE DATA & DIAGNOSTIC LOG */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Persisted Records */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-2">
                    <Database size={14} className="text-orange-500" />
                    <span>PostgreSQL Table: 'notes' ({notesList.length} rows)</span>
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">Volume: postgres_data</span>
                </div>

                <div className="space-y-2 max-h-52 overflow-y-auto">
                  {notesList.length === 0 ? (
                    <div className="p-6 text-center text-xs text-stone-400 font-mono">
                      Database is empty. (Volume was wiped or no records created).
                    </div>
                  ) : (
                    notesList.map((nt) => (
                      <div key={nt.id} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                        <div className="flex items-center justify-between text-stone-500 text-[10px] mb-1">
                          <span className="font-bold text-orange-600">ID #{nt.id}</span>
                          <span>{nt.created_at}</span>
                        </div>
                        <div className="text-stone-800 font-sans font-medium">{nt.message}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Embedded DNS & HTTP Telemetry Log */}
              <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Activity size={12} className="text-orange-400" />
                    <span>Compose Network & Storage Telemetry</span>
                  </span>
                  <span>127.0.0.11 DNS</span>
                </div>
                <div className="space-y-1 pt-1">
                  {dnsLog.map((line, lIdx) => (
                    <div key={lIdx} className="text-stone-300 flex items-start gap-2 text-[11px]">
                      <span className="text-orange-500 select-none">&gt;</span>
                      <span className={lIdx === 0 ? "text-emerald-400 font-bold" : ""}>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SECURITY & SRE FAILURE GAMEDAY                       */}
        {/* =================================================================== */}
        {activeTab === "security-gameday" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <ShieldCheck size={14} />
                <span>Lab 3: Production Container Security & Failure Triage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Container Security & SRE Incident GameDay
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Containers do not magically create an automatic security boundary. Analyze 5 real-world production
                container failures: secret exposure in image layers, read-only root crashes, loopback listener traps,
                PID 1 signal hangs, and PostgreSQL volume target migrations.
              </p>
            </div>

            {/* INCIDENT SELECTOR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {incidentScenarios.map((sc, sIdx) => {
                const isSelected = selectedIncidentIndex === sIdx;
                const isAnswered = incidentAnswers[sc.id] !== undefined;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedIncidentIndex(sIdx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-[#18181b] text-white border-stone-800 shadow-md"
                        : "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? "text-orange-400 font-bold" : "text-stone-500 font-bold"}>
                        Case #{sIdx + 1}
                      </span>
                      {isAnswered && (
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded font-bold">
                          ✓ Solved
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs truncate">{sc.title.split(":")[1] || sc.title}</div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE INCIDENT CARD */}
            {(() => {
              const currentInc = incidentScenarios[selectedIncidentIndex];
              const answer = incidentAnswers[currentInc.id];

              return (
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-8 space-y-6">
                  {/* Incident Header */}
                  <div className="pb-4 border-b border-stone-200 space-y-1">
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Failure Investigation
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">{currentInc.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 pt-1">
                      <strong className="text-stone-800">Observed Symptom: </strong>
                      {currentInc.symptom}
                    </p>
                  </div>

                  {/* Code Snippet Inspection */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-stone-500 block mb-2">
                      Code / Log Inspection:
                    </span>
                    <pre className="p-4 rounded-xl bg-[#18181b] text-xs font-mono overflow-x-auto text-stone-200 border border-stone-800 leading-relaxed">
                      <code>{currentInc.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Question & Options */}
                  <div className="space-y-4 pt-2">
                    <span className="text-sm font-bold text-stone-900 block">{currentInc.question}</span>

                    <div className="space-y-2.5">
                      {currentInc.options.map((opt) => {
                        const isChosen = answer === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleIncidentAnswer(currentInc.id, opt.id)}
                            className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all ${
                              isChosen
                                ? opt.correct
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm"
                                  : "bg-rose-50 border-rose-300 text-rose-900 shadow-sm"
                                : "bg-white border-stone-200 text-stone-800 hover:bg-stone-100"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono ${
                                  isChosen
                                    ? opt.correct
                                      ? "bg-emerald-600 text-white border-emerald-600"
                                      : "bg-rose-600 text-white border-rose-600"
                                    : "border-stone-300 text-stone-500 bg-stone-50"
                                }`}
                              >
                                {opt.id.slice(-1).toUpperCase()}
                              </span>
                              <div className="space-y-1">
                                <span className="font-semibold block">{opt.label}</span>
                                {isChosen && (
                                  <p
                                    className={`text-xs mt-2 pt-2 border-t leading-relaxed ${
                                      opt.correct
                                        ? "border-emerald-200 text-emerald-800 font-sans"
                                        : "border-rose-200 text-rose-800 font-sans"
                                    }`}
                                  >
                                    <strong className="font-bold">
                                      {opt.correct ? "✓ SRE Remediation: " : "✗ Root Cause Defect: "}
                                    </strong>
                                    {opt.explanation}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: MASTERY ASSESSMENT (14 QUESTIONS)                            */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <CheckCircle2 size={14} />
                <span>Final Mastery Assessment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                14-Question Comprehensive Docker Systems Assessment
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Before advancing to CI/CD pipelines and Kubernetes cluster orchestration, prove complete mastery over
                container isolation, multi-stage optimization, storage persistence, and production security controls.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-stone-50/40 overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600 font-bold">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white space-y-3">
                        <div className="space-y-1.5 pt-2">
                          <span className="font-mono text-[10px] font-bold uppercase text-stone-400 block">
                            Key Options & Evaluation:
                          </span>
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg text-xs font-mono flex items-start gap-2 ${
                                oIdx === mq.correctIndex
                                  ? "bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold"
                                  : "text-stone-500"
                              }`}
                            >
                              <span>{oIdx === mq.correctIndex ? "✓" : "•"}</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-stone-100">
                          <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                            Authoritative Systems Engineering Answer:
                          </span>
                          <p className="text-stone-700 font-sans">{mq.a}</p>
                        </div>
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
              DevOps & SRE Track • Module 3 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Docker & Container Systems Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand Linux namespaces & cgroups, multi-stage layer caching, persistent volumes, bridge network
              segmentation, non-root security hardening, and Compose multi-service synchronization.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/git")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 2: Git
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/k8s")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-1.5"
            >
              <span>Next: Module 4 — Kubernetes</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
