import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  Layers,
  Lightbulb,
  MessageSquare,
  Network,
  Play,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Boxes,
  Copy,
  Activity,
  Award,
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  Lock,
  Key,
  Radio,
  Split,
  Eye,
  GitBranch,
  Cloud,
  Check,
  DollarSign,
  TrendingUp,
  Share2,
  FileCode,
  Compass,
  FileCheck,
  Fingerprint,
  UserCheck,
  KeyRound,
  FileLock2,
  Binary,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 11: CLOUD SECURITY ARCHITECTURE                     */
/* Week 21: Identity -> Encryption -> Zero Trust -> Workload Security        */
/* NIST SP 800-207 & 800-207A Zero Trust, Workload Identity, KMS Architecture,*/
/* Container Hardening, Supply Chain Security (Sigstore/SBOM), Threat Models   */
/* -------------------------------------------------------------------------- */

export default function CloudSecurity() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "security");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: Multi-Layer Zero Trust Architecture & Attack Graph Simulator State
  const [selectedAttackVector, setSelectedAttackVector] = useState("phished-dev");
  const [layerIdentity, setLayerIdentity] = useState(true);
  const [layerNetwork, setLayerNetwork] = useState(true);
  const [layerWorkload, setLayerWorkload] = useState(true);
  const [layerCrypto, setLayerCrypto] = useState(true);
  const [layerObservability, setLayerObservability] = useState(true);

  // Tool 2: Container Supply Chain & Runtime Hardening Inspector State
  const [imageTagType, setImageTagType] = useState("digest"); // "latest", "semver", "digest"
  const [containerUser, setContainerUser] = useState("non-root"); // "root", "non-root"
  const [rootFsMode, setRootFsMode] = useState("read-only"); // "writable", "read-only"
  const [capabilitiesMode, setCapabilitiesMode] = useState("drop-all"); // "all", "drop-all"
  const [seccompProfile, setSeccompProfile] = useState("runtime-default"); // "unconfined", "runtime-default"
  const [imageSignature, setImageSignature] = useState("cosign-signed"); // "unsigned", "cosign-signed"
  const [secretsDelivery, setSecretsDelivery] = useState("csi-driver"); // "embedded-env", "csi-driver"

  // Tool 3: Cloud Security GameDay Simulator State (7 Scenarios from Section 82)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  // Tool 4: Mastery Test State
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Tool 1: Attack Path & Defense-in-Depth Analysis
  const attackAnalysis = useMemo(() => {
    let breached = false;
    let contained = false;
    let blockedAtPerimeter = false;
    let blastRadiusPercent = 100;
    let attackNarrative = [];
    let activeStopLayer = "None";

    if (selectedAttackVector === "phished-dev") {
      attackNarrative.push("Attacker captures developer credentials via targeted phishing.");
      if (layerIdentity) {
        attackNarrative.push("Layer 1 (Identity): FIDO2 Hardware MFA and Conditional Access policy block unmanaged device login.");
        blockedAtPerimeter = true;
        blastRadiusPercent = 0;
        activeStopLayer = "Layer 1: Identity & MFA";
      } else {
        attackNarrative.push("Identity bypass: Attacker enters cloud console with developer session.");
        if (layerObservability) {
          attackNarrative.push("Layer 5 (SIEM): CloudTrail / Cloud Audit Logs trigger anomaly alert on impossible travel.");
        }
        if (layerNetwork && layerWorkload) {
          attackNarrative.push("Production boundary: Developer role lacks direct DB access; JIT approval required.");
          contained = true;
          blastRadiusPercent = 15;
          activeStopLayer = "Layer 2/3: Role Scope & Segmentation";
        } else {
          breached = true;
          blastRadiusPercent = 85;
        }
      }
    } else if (selectedAttackVector === "compromised-frontend") {
      attackNarrative.push("Attacker exploits Remote Code Execution (RCE) vulnerability in public web frontend pod.");
      if (layerWorkload) {
        attackNarrative.push("Layer 3 (Workload): Read-only root filesystem and non-root execution prevent persistence and malware download.");
      }
      if (layerNetwork) {
        attackNarrative.push("Layer 2 (Network): Kubernetes NetworkPolicy blocks east-west traffic to internal database and cloud metadata API.");
        contained = true;
        blastRadiusPercent = 10;
        activeStopLayer = "Layer 2: NetworkPolicy Micro-Segmentation";
      } else {
        attackNarrative.push("Flat Network: Compromised pod scans internal VPC subnet 10.10.0.0/16.");
        if (layerCrypto) {
          attackNarrative.push("Layer 4 (Crypto): Database requires mTLS and KMS-backed token; raw connection rejected.");
          contained = true;
          blastRadiusPercent = 40;
          activeStopLayer = "Layer 4: Data Encryption & mTLS";
        } else {
          breached = true;
          blastRadiusPercent = 95;
        }
      }
    } else if (selectedAttackVector === "supply-chain-ci") {
      attackNarrative.push("Attacker compromises upstream NPM/PyPI dependency incorporated during CI/CD build.");
      if (layerWorkload) {
        attackNarrative.push("Layer 3 (Workload): Sigstore/Cosign signature verification in admission controller blocks unsigned image from cluster.");
        blockedAtPerimeter = true;
        blastRadiusPercent = 0;
        activeStopLayer = "Layer 3: Cosign Admission Controller";
      } else {
        attackNarrative.push("Untrusted image runs in production cluster.");
        if (layerNetwork) {
          attackNarrative.push("Layer 2 (Network): Egress filtering blocks pod from connecting to external Command & Control (C2) server.");
          contained = true;
          blastRadiusPercent = 20;
          activeStopLayer = "Layer 2: Egress Traffic Filtering";
        } else {
          breached = true;
          blastRadiusPercent = 90;
        }
      }
    } else if (selectedAttackVector === "leaked-db-creds") {
      attackNarrative.push("Attacker discovers hardcoded database connection string leaked in public GitHub commit.");
      if (layerNetwork) {
        attackNarrative.push("Layer 2 (Network): Database resides in private isolated subnet without public IP; internet connection timed out.");
        blockedAtPerimeter = true;
        blastRadiusPercent = 5;
        activeStopLayer = "Layer 2: Private Endpoints & Subnet Isolation";
      } else {
        attackNarrative.push("Public DB exposed: Attacker authenticates directly to database endpoint.");
        if (layerCrypto) {
          attackNarrative.push("Layer 4 (Secrets): Secrets Manager auto-rotation already expired the leaked credential.");
          contained = true;
          blastRadiusPercent = 15;
          activeStopLayer = "Layer 4: Secret Manager Auto-Rotation";
        } else {
          breached = true;
          blastRadiusPercent = 100;
        }
      }
    } else {
      attackNarrative.push("Attacker discovers AWS IAM Access Key pair in public pastebin.");
      if (layerIdentity) {
        attackNarrative.push("Layer 1 (Identity): IAM zero-static-key guardrail and SCP restrict API calls to specific VPC endpoints only.");
        blockedAtPerimeter = true;
        blastRadiusPercent = 0;
        activeStopLayer = "Layer 1: IAM Condition IP/VPC Guardrail";
      } else {
        breached = true;
        blastRadiusPercent = 90;
      }
    }

    return {
      breached,
      contained,
      blockedAtPerimeter,
      blastRadiusPercent,
      attackNarrative,
      activeStopLayer,
    };
  }, [selectedAttackVector, layerIdentity, layerNetwork, layerWorkload, layerCrypto, layerObservability]);

  // Tool 2: Container Supply Chain & Hardening Inspector Calculations
  const containerHardeningScore = useMemo(() => {
    let score = 0;
    let issues = [];
    let cisRating = "F (Non-Compliant)";

    if (imageTagType === "digest") {
      score += 20;
    } else if (imageTagType === "semver") {
      score += 10;
      issues.push("SemVer tag (e.g., :v2.4.0) is mutable in registry. Prefer immutable sha256 digests for cryptographic reproducibility.");
    } else {
      issues.push("CRITICAL: ':latest' tag is mutable and unpredictable. Violates supply chain integrity and breaks deployment reproducibility.");
    }

    if (containerUser === "non-root") {
      score += 20;
    } else {
      issues.push("CRITICAL: Container runs as Root (UID 0). Compromised processes can escalate privileges and attack host Linux kernel.");
    }

    if (rootFsMode === "read-only") {
      score += 15;
    } else {
      issues.push("Writable root filesystem allows attackers to download malware binaries, alter application files, and achieve persistence.");
    }

    if (capabilitiesMode === "drop-all") {
      score += 15;
    } else {
      issues.push("All Linux kernel capabilities enabled. Violates least privilege; grants excessive OS syscall access.");
    }

    if (seccompProfile === "runtime-default") {
      score += 10;
    } else {
      issues.push("Unconfined seccomp profile allows arbitrary kernel system calls, increasing container escape attack surface.");
    }

    if (imageSignature === "cosign-signed") {
      score += 10;
    } else {
      issues.push("Image lacks Sigstore/Cosign digital signature. Cluster cannot verify artifact provenance or tamper resistance.");
    }

    if (secretsDelivery === "csi-driver") {
      score += 10;
    } else {
      issues.push("Secrets passed as plaintext environment variables leak into process inspect, crash dumps, and child fork trees.");
    }

    if (score >= 90) cisRating = "A+ (Restricted Profile Compliant)";
    else if (score >= 70) cisRating = "B (Baseline Compliant)";
    else if (score >= 50) cisRating = "C (Marginal)";
    else cisRating = "F (High Vulnerability Surface)";

    return { score, issues, cisRating };
  }, [imageTagType, containerUser, rootFsMode, capabilitiesMode, seccompProfile, imageSignature, secretsDelivery]);

  // Tool 3: Cloud Security GameDay Scenarios (7 Scenarios from Section 82)
  const securityGameScenarios = moduleData?.scenarios || [];

  // Tool 4: Week 21 Mastery Test Questions & Answers (Section 85)
  const masteryQuestions = moduleData?.quiz || [];

  // Syllabus Topics (12 Topics covering Week 21)
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic] || topics[0] || {};

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="security" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="security" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-500/20 selection:text-orange-900">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-orange-300/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="security"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Security AI"
        />

        {/* HERO HEADER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <ShieldCheck size={13} />
              <span>Cloud Security Architecture</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Cloud Security Architecture
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              Security is not <span className="text-stone-400 line-through">"firewall + password + encryption = secure."</span>{" "}
              Production cloud security is built on one invariant:{" "}
              <span className="text-orange-400 font-semibold">
                "Assume something eventually gets compromised. Design so the compromise is limited, detected, and recoverable."
              </span>{" "}
              Grounded in NIST SP 800-207 Zero Trust, Workload Identity Federation, Envelope Encryption, Container Hardening, and Threat Modeling.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> NIST SP 800-207 Zero Trust
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Zero Static Keys
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Envelope KMS Cryptography
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Supply Chain & Cosign
              </span>
            </div>
          </div>
        </div>

        {/* EMBEDDED AI TUTOR */}
        {SHOW_NOVA_AI && showAiTutor && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-orange-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e3da]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">Nova Cloud Security Architect</h3>
                  <p className="text-xs text-stone-500">Trained on NIST SP 800-207, CIS Benchmarks, AWS/Azure/GCP Security Guides</p>
                </div>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-mono text-stone-400 hover:text-stone-700"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo module="security" />
            </div>
          </div>
        )}

        {/* MAIN LAYOUT: SYLLABUS TOPICS (LEFT) + DEEP CONTENT (RIGHT) */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          {/* TOPIC SELECTOR (COL-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                Security Syllabus • 12 Topics
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
                      <span className={`font-mono text-[10px] uppercase tracking-wider ${selectedTopic === idx ? "text-orange-400" : "text-stone-400"}`}>
                        Topic {t.id} • {t.week}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${selectedTopic === idx ? "bg-stone-800 text-orange-300" : "bg-stone-100 text-stone-600"}`}>
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
                Module 11 transforms your mindset from happy-path architecture to defensive Zero Trust systems resilient against sophisticated adversaries.
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
                  Threat Model, Architecture & Theoretical Foundations
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60">
                  {currentTopic.theory}
                </p>
              </div>

              {/* ARCHITECTURE DIAGRAM */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Architectural Attack Paths & Defensive Boundaries
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">ASCII Security Blueprint</span>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-stone-200 shadow-inner">
                  {currentTopic.diagram}
                </pre>
              </div>

              {/* KEY TAKEAWAYS */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Production Invariants & Core Defensive Takeaways
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentTopic.keyTakeaways.map((takeaway, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-3.5 text-xs text-stone-700 font-medium leading-snug"
                    >
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CODE / CONFIGURATION EXAMPLE */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Production Hardening & Policy Implementation
                  </h4>
                  <button
                    onClick={() => copyCode(currentTopic.codeExample, currentTopic.id)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-600 hover:text-orange-700"
                  >
                    <Copy size={13} />
                    <span>{copiedCodeId === currentTopic.id ? "Copied!" : "Copy Snippet"}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#1c1c1f] p-4 font-mono text-xs text-orange-300/90 shadow-inner border border-stone-800">
                  {currentTopic.codeExample}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 1: MULTI-LAYER ZERO TRUST & ATTACK GRAPH SIMULATOR         */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 1
            </span>
            <span className="font-mono text-xs text-stone-400">Attack Graph & Blast Radius Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Multi-Layer Zero Trust Architecture & Attack Graph Simulator
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Simulate real-world adversary attack vectors against your cloud architecture. Toggle individual defense-in-depth layers to observe how defense failures at one layer are neutralized by downstream controls to prevent catastrophic breaches.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONTROLS (COL-5) */}
            <div className="lg:col-span-5 space-y-5 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  1. Select Adversary Attack Vector
                </label>
                <div className="space-y-2">
                  {[
                    { id: "phished-dev", label: "Phished Developer Credentials" },
                    { id: "compromised-frontend", label: "Compromised Ingress Pod (Remote Code Execution)" },
                    { id: "supply-chain-ci", label: "Malicious NPM Dependency in CI/CD Pipeline" },
                    { id: "leaked-db-creds", label: "Leaked Database Connection String on GitHub" },
                    { id: "stolen-aws-key", label: "Stolen Long-Lived AWS IAM Access Key" },
                  ].map((atk) => (
                    <button
                      key={atk.id}
                      onClick={() => setSelectedAttackVector(atk.id)}
                      className={`w-full text-left rounded-xl p-3 text-xs font-bold transition flex items-center justify-between ${
                        selectedAttackVector === atk.id
                          ? "bg-stone-900 text-white shadow-sm"
                          : "bg-white text-stone-700 border border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      <span>{atk.label}</span>
                      {selectedAttackVector === atk.id && <Check size={14} className="text-orange-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  2. Defense-in-Depth Toggleable Layers
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <div>
                      <span className="block font-bold">Layer 1: Identity & IAM</span>
                      <span className="text-[10px] text-stone-500 font-normal">FIDO2 Hardware MFA, JIT Roles & Short-Lived Tokens</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={layerIdentity}
                      onChange={(e) => setLayerIdentity(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <div>
                      <span className="block font-bold">Layer 2: Network Segmentation</span>
                      <span className="text-[10px] text-stone-500 font-normal">Default-Deny NetworkPolicy & Egress Filtering</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={layerNetwork}
                      onChange={(e) => setLayerNetwork(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <div>
                      <span className="block font-bold">Layer 3: Workload Hardening</span>
                      <span className="text-[10px] text-stone-500 font-normal">Non-Root, Read-Only RootFS, Cosign Verification</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={layerWorkload}
                      onChange={(e) => setLayerWorkload(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <div>
                      <span className="block font-bold">Layer 4: Data & Cryptography</span>
                      <span className="text-[10px] text-stone-500 font-normal">KMS Envelope Encryption & Secret Auto-Rotation</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={layerCrypto}
                      onChange={(e) => setLayerCrypto(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <div>
                      <span className="block font-bold">Layer 5: SIEM & Observability</span>
                      <span className="text-[10px] text-stone-500 font-normal">CloudTrail Anomaly Alarms & Auto-Quarantine SOAR</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={layerObservability}
                      onChange={(e) => setLayerObservability(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* RESULTS & ATTACK GRAPH (COL-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Breach Outcome Status</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-2xl font-black ${
                      attackAnalysis.blockedAtPerimeter
                        ? "text-emerald-400"
                        : attackAnalysis.contained
                        ? "text-amber-400"
                        : "text-rose-400"
                    }`}>
                      {attackAnalysis.blockedAtPerimeter
                        ? "Blocked at Perimeter"
                        : attackAnalysis.contained
                        ? "Contained (Blast Limited)"
                        : "CRITICAL BREACH"}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    Neutralizing Layer: {attackAnalysis.activeStopLayer}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Calculated Blast Radius</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-3xl font-black ${
                      attackAnalysis.blastRadiusPercent <= 15
                        ? "text-emerald-400"
                        : attackAnalysis.blastRadiusPercent <= 40
                        ? "text-amber-400"
                        : "text-rose-400"
                    }`}>
                      {attackAnalysis.blastRadiusPercent}%
                    </span>
                    <span className="text-xs text-stone-400">Environment Impact</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    {attackAnalysis.blastRadiusPercent === 0 ? "Zero lateral movement" : "Scope limited to isolated zone"}
                  </span>
                </div>
              </div>

              {/* ATTACK PATH LOG & NARRATIVE */}
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold text-stone-700 uppercase flex items-center gap-1.5">
                  <Activity size={15} className="text-orange-600" />
                  <span>Adversary Attack Path Execution Telemetry</span>
                </h4>
                <div className="space-y-2 mt-2">
                  {attackAnalysis.attackNarrative.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-800 leading-snug flex items-start gap-2.5"
                    >
                      <span className="font-mono text-[10px] font-bold text-orange-600 mt-0.5">
                        [T+{idx * 3}s]
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <h4 className="font-mono text-xs font-bold text-orange-900 uppercase flex items-center gap-1.5 mb-1">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span>Zero Trust Principle in Action</span>
                </h4>
                <p className="text-xs text-orange-950 leading-relaxed">
                  Notice that when Layer 1 (Identity) is bypassed by a stolen credential, Layer 2 (Network Segmentation) and Layer 4 (KMS & Secret Rotation) still prevent the attacker from reaching or decrypting production data. Security is an emergent property of multiple independent boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 2: CONTAINER SUPPLY CHAIN & RUNTIME HARDENING INSPECTOR     */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 2
            </span>
            <span className="font-mono text-xs text-stone-400">CIS Benchmark & Supply Chain Auditor</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Container Supply Chain & Runtime Hardening Inspector
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Audit your Kubernetes container deployment parameters against the CIS Kubernetes Benchmark and the Pod Security Standards Restricted profile. View your real-time compliance score and generate production-grade hardened manifests.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONFIG CONTROLS (COL-6) */}
            <div className="lg:col-span-6 space-y-4 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Image Provenance Tagging
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "latest", label: ":latest (Mutable)" },
                    { id: "semver", label: ":v2.4.0 (SemVer)" },
                    { id: "digest", label: "@sha256:... (Digest)" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setImageTagType(item.id)}
                      className={`rounded-xl py-2 px-1 text-[11px] font-bold border transition text-center ${
                        imageTagType === item.id
                          ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                          : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  User Execution Privilege
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setContainerUser("root")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      containerUser === "root"
                        ? "bg-rose-900 text-white border-rose-900"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Root User (UID 0 - Unsafe)
                  </button>
                  <button
                    onClick={() => setContainerUser("non-root")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      containerUser === "non-root"
                        ? "bg-emerald-700 text-white border-emerald-700"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Non-Root (UID 10001 - Safe)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Root Filesystem Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRootFsMode("writable")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      rootFsMode === "writable"
                        ? "bg-amber-800 text-white border-amber-800"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Writable Filesystem
                  </button>
                  <button
                    onClick={() => setRootFsMode("read-only")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      rootFsMode === "read-only"
                        ? "bg-emerald-700 text-white border-emerald-700"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Read-Only Root Filesystem
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Linux Kernel Capabilities
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCapabilitiesMode("all")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      capabilitiesMode === "all"
                        ? "bg-rose-900 text-white border-rose-900"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Default Linux Capabilities
                  </button>
                  <button
                    onClick={() => setCapabilitiesMode("drop-all")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      capabilitiesMode === "drop-all"
                        ? "bg-emerald-700 text-white border-emerald-700"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Drop ALL Capabilities
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Sigstore / Cosign Signature
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setImageSignature("unsigned")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      imageSignature === "unsigned"
                        ? "bg-amber-800 text-white border-amber-800"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Unsigned Artifact
                  </button>
                  <button
                    onClick={() => setImageSignature("cosign-signed")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      imageSignature === "cosign-signed"
                        ? "bg-emerald-700 text-white border-emerald-700"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Cosign Keyless Verified
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Secrets Ingestion Architecture
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSecretsDelivery("embedded-env")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      secretsDelivery === "embedded-env"
                        ? "bg-rose-900 text-white border-rose-900"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Plaintext Env Vars
                  </button>
                  <button
                    onClick={() => setSecretsDelivery("csi-driver")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      secretsDelivery === "csi-driver"
                        ? "bg-emerald-700 text-white border-emerald-700"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Secret Store CSI / External
                  </button>
                </div>
              </div>
            </div>

            {/* AUDIT OUTPUT & GENERATOR (COL-6) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">CIS Hardening Score</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${
                      containerHardeningScore.score >= 90
                        ? "text-emerald-400"
                        : containerHardeningScore.score >= 60
                        ? "text-amber-400"
                        : "text-rose-400"
                    }`}>
                      {containerHardeningScore.score}%
                    </span>
                    <span className="text-xs text-stone-400">/ 100</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-300 block mt-1">
                    Benchmark: {containerHardeningScore.cisRating}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Supply Chain Grade</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${
                      imageTagType === "digest" && imageSignature === "cosign-signed"
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}>
                      {imageTagType === "digest" && imageSignature === "cosign-signed" ? "A+" : "C-"}
                    </span>
                    <span className="text-xs text-stone-400">SLSA Level 3</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    {imageSignature === "cosign-signed" ? "Cryptographically Signed" : "Unverified Origin"}
                  </span>
                </div>
              </div>

              {/* AUDIT FINDINGS */}
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5">
                <h4 className="font-mono text-xs font-bold text-stone-700 uppercase mb-2 flex items-center gap-1.5">
                  <AlertTriangle size={15} className="text-amber-500" />
                  <span>Vulnerability & Compliance Findings ({containerHardeningScore.issues.length})</span>
                </h4>
                {containerHardeningScore.issues.length === 0 ? (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Flawless Configuration! Meets Pod Security Standards Restricted profile.</span>
                  </div>
                ) : (
                  <div className="space-y-2 mt-2">
                    {containerHardeningScore.issues.map((iss, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-snug"
                      >
                        {iss}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 3: CLOUD SECURITY GAMEDAY SIMULATOR (7 SCENARIOS)          */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#27272a] bg-[#18181b] p-6 md:p-10 text-white shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-orange-500/20 border border-orange-500/30 px-2.5 py-1 font-mono text-xs font-bold text-orange-400 uppercase">
                  Interactive Lab 3
                </span>
                <span className="font-mono text-xs text-stone-400">SOC Incident Response</span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                Cloud Security GameDay Simulator
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                7 Real-world Incident Response Scenarios testing credential leaks, RCE containment, and break-glass recovery (Section 82).
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-stone-400">Current Score</span>
              <div className="text-2xl font-black text-orange-400">{gameScore} / 7</div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* SCENARIO SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                Incident Scenarios (A to G)
              </span>
              <div className="space-y-1.5">
                {securityGameScenarios.map((sc, idx) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setGameScenarioIndex(idx);
                      setGameSelection(gameHistory[idx] ?? null);
                    }}
                    className={`w-full text-left rounded-xl px-3.5 py-2.5 text-xs font-bold transition flex items-center justify-between ${
                      gameScenarioIndex === idx
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-stone-900/80 text-stone-300 hover:bg-stone-800"
                    }`}
                  >
                    <span className="truncate">{sc.title.split(":")[0]}</span>
                    {gameHistory[idx] !== undefined && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-stone-200">
                        {securityGameScenarios[idx].options[gameHistory[idx]].correct ? "PASS" : "FAIL"}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SCENARIO DETAILS & CHOICES (COL-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6">
                <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Incident {gameScenarioIndex + 1} of 7
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  {securityGameScenarios[gameScenarioIndex].title}
                </h4>
                <p className="mt-3 text-sm text-stone-300 leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800">
                  {securityGameScenarios[gameScenarioIndex].context}
                </p>

                <div className="mt-6 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase text-stone-400 block">
                    Choose Incident Response Action:
                  </span>
                  {securityGameScenarios[gameScenarioIndex].options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => {
                        setGameSelection(optIdx);
                        if (gameHistory[gameScenarioIndex] === undefined) {
                          setGameHistory((prev) => ({ ...prev, [gameScenarioIndex]: optIdx }));
                          if (opt.correct) setGameScore((prev) => prev + 1);
                        }
                      }}
                      className={`w-full text-left rounded-xl p-4 text-xs font-bold border transition ${
                        gameSelection === optIdx
                          ? opt.correct
                            ? "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                            : "bg-rose-950/80 border-rose-500 text-rose-200"
                          : "bg-stone-950 border-stone-800 text-stone-300 hover:border-orange-500/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt.label}</span>
                        {gameSelection === optIdx && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60">
                            {opt.correct ? "CORRECT ACTION" : "INCORRECT ACTION"}
                          </span>
                        )}
                      </div>
                      {gameSelection === optIdx && (
                        <p className="mt-2 text-xs font-normal text-stone-300 pt-2 border-t border-stone-800">
                          {opt.explanation}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* SECTION 4: WEEK 21 MASTERY TEST & ARCHITECTURAL SELF-ASSESSMENT             */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Mastery Verification
            </span>
            <span className="font-mono text-xs text-stone-400">Section 85 Questions</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Cloud Security Mastery Test: Cloud Security Architect Interview Questions
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            15 rigorous architectural questions evaluating your mastery of authentication vs authorization, privilege escalation, envelope encryption, mTLS, supply chain integrity, and Zero Trust resilience.
          </p>

          <div className="mt-8 space-y-3">
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

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              Cloud Architecture Track
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Modules 1 through 11 Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From Cloud Foundations, VPCs, and Compute to Distributed Storage, Databases, Large-Scale Architecture, Deep AWS, Deep Azure, Deep Google Cloud, Multi-Cloud Engineering, and Cloud Security.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/cloud/multicloud")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-700 transition"
            >
              ← Module 10: Multi-Cloud
            </button>
            <button
              onClick={() => navigate("/learning/cloud/economics")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 12 — Cloud Economics →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
