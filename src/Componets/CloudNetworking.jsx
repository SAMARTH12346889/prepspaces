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
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Building2,
  Boxes,
  Copy,
  Activity,
  Award,
  Radio,
  FileCode,
  Share2,
  Lock,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 2: CLOUD NETWORKING                                 */
/* Weeks 3–4: From Packets to a Production-Grade VPC/VNet                      */
/* Theory: Stanford CS144, Kurose & Ross, IETF RFCs (9293, 1034, 9110, 8446) */
/* -------------------------------------------------------------------------- */

export default function CloudNetworking() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "networking");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // CIDR Calculator State
  const [cidrInput, setCidrInput] = useState("10.20.0.0/20");

  // Packet Simulator State
  const [packetScenarioIndex, setPacketScenarioIndex] = useState(0);
  const [packetSelection, setPacketSelection] = useState(null);
  const [packetScore, setPacketScore] = useState(0);
  const [packetHistory, setPacketHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const networkingTopics = moduleData?.topics || [];

  const currentTopic = networkingTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < networkingTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : networkingTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 7 Packet Game Scenarios
  const packetGameScenarios = moduleData?.scenarios || [];

  const handlePacketGameAnswer = (scenario, option) => {
    const isFirstTry = packetHistory[scenario.id] === undefined;
    setPacketSelection(option.id);
    setPacketHistory((prev) => ({
      ...prev,
      [scenario.id]: { optionId: option.id, isCorrect: option.isCorrect },
    }));

    if (isFirstTry && option.isCorrect) {
      setPacketScore((prev) => prev + 15);
    }
  };

  // CIDR Math Helper
  const parseCidr = (cidrStr) => {
    try {
      const parts = cidrStr.trim().split("/");
      if (parts.length !== 2) return null;
      const ip = parts[0];
      const prefix = parseInt(parts[1], 10);
      if (isNaN(prefix) || prefix < 0 || prefix > 32) return null;

      const octets = ip.split(".").map((o) => parseInt(o, 10));
      if (octets.length !== 4 || octets.some((o) => isNaN(o) || o < 0 || o > 255)) return null;

      const totalIps = Math.pow(2, 32 - prefix);
      const usableIps = Math.max(0, totalIps - 5); // Cloud reserved 5

      // Calculate Subnet Mask
      let maskBits = (0xffffffff << (32 - prefix)) >>> 0;
      const maskOctets = [
        (maskBits >>> 24) & 255,
        (maskBits >>> 16) & 255,
        (maskBits >>> 8) & 255,
        maskBits & 255,
      ];
      const subnetMask = maskOctets.join(".");

      return {
        ip,
        prefix,
        totalIps: totalIps.toLocaleString(),
        usableIps: usableIps.toLocaleString(),
        subnetMask,
        hostBits: 32 - prefix,
      };
    } catch (e) {
      return null;
    }
  };

  const cidrData = parseCidr(cidrInput);

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="networking" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="networking" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-amber-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="networking"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Networking AI"
        />

        {/* AI TUTOR ACCORDION DRAWER */}
        {showAiTutor && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Nova AI Cloud Networking Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about CIDR math, longest prefix matching, NAT vs firewalls, TCP handshakes, or Direct Connect.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`networking-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Network size={13} />
                <span>Cloud Networking & VPC/VNet Engineering</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                From Packets to a Production-Grade VPC
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                A cloud engineer who understands compute but does not understand networking cannot diagnose production incidents. Master packet encapsulation, TCP handshakes, DNS hierarchy, CIDR arithmetic, routing tables, NAT gateways, and multi-tier VPC security.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-[#f97316]">12</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Deep Sections</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-emerald-400">10.20/16</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">VPC Blueprint</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-amber-400">7</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Packet Scenarios</div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN INTERACTIVE COURSE CONTAINER */}
        <div className="overflow-hidden rounded-3xl border border-[#e7e3da] bg-white/80 shadow-sm backdrop-blur-xl">
          {/* TOP CONTROLS & MODULE TITLE */}
          <div className="border-b border-[#e7e3da] bg-[#faf8f4]/70 px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ea580c]">
                  Cloud Networking Curriculum
                </p>
                <h2 className="text-xl md:text-2xl font-black text-[#18181b]">
                  {currentTopic.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-xl border border-[#e7e3da] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-stone-700 shadow-sm">
                  Topic {topicNumber} / {networkingTopics.length}
                </span>

                <span className="rounded-xl border border-orange-200 bg-orange-50 px-3.5 py-1.5 font-mono text-xs font-bold text-[#ea580c] shadow-sm">
                  {currentTopic.category}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
            {/* SIDEBAR NAVIGATION */}
            <aside className="border-b border-[#e7e3da] bg-[#faf8f4]/50 p-4 md:border-b-0 md:border-r">
              <div className="mb-3 px-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Networking Topics
                </h3>
              </div>

              <div className="space-y-1.5">
                {networkingTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  const active = selectedTopic === index;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(index)}
                      className={`group flex w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition-all ${
                        active
                          ? "bg-[#f97316] text-white font-bold shadow-[0_4px_16px_rgba(249,115,22,0.25)]"
                          : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-white text-stone-600 border border-[#e7e3da] group-hover:border-orange-300 group-hover:text-[#ea580c]"
                        }`}
                      >
                        <Icon size={15} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-mono text-[10px] ${
                              active ? "text-white/80" : "text-stone-400"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs font-bold truncate">
                            {topic.shortTitle.replace(/^\d+\.\s*/, "")}
                          </span>
                        </div>
                        <span
                          className={`mt-0.5 block text-[10px] truncate ${
                            active ? "text-orange-100" : "text-stone-400"
                          }`}
                        >
                          {topic.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick links */}
              <div className="mt-6 border-t border-[#e7e3da] pt-4 px-2 space-y-2">
                <button
                  onClick={() => setSelectedTopic(11)} // Packet Simulator Game
                  className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50/70 p-2.5 text-xs font-bold text-red-800 hover:bg-red-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-red-600" />
                    Play Packet Game
                  </span>
                  <span className="rounded-full bg-red-200 px-2 py-0.5 text-[10px]">Interactive</span>
                </button>

                <button
                  onClick={() => setSelectedTopic(5)} // CIDR Math
                  className="flex w-full items-center justify-between rounded-xl border border-amber-200 bg-amber-50/70 p-2.5 text-xs font-bold text-amber-800 hover:bg-amber-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className="text-amber-600" />
                    CIDR Calculator
                  </span>
                  <span className="rounded-full bg-amber-200 px-2 py-0.5 text-[10px]">Math Tool</span>
                </button>
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="min-w-0 p-5 md:p-8">
              {/* SUMMARY CARD */}
              <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316] text-white">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800">
                      Core Networking Invariant
                    </h4>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-800 font-medium">
                      {currentTopic.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* VISUAL DIAGRAM OR INTERACTIVE ENGINE */}
              <div className="mt-6">
                <VisualNetworkingDiagram
                  type={currentTopic.diagramType}
                  topic={currentTopic}
                  cidrInput={cidrInput}
                  setCidrInput={setCidrInput}
                  cidrData={cidrData}
                  packetGameScenarios={packetGameScenarios}
                  packetScenarioIndex={packetScenarioIndex}
                  setPacketScenarioIndex={setPacketScenarioIndex}
                  packetSelection={packetSelection}
                  handlePacketGameAnswer={handlePacketGameAnswer}
                  packetScore={packetScore}
                  packetHistory={packetHistory}
                  copyCode={copyCode}
                  copiedCodeId={copiedCodeId}
                />
              </div>

              {/* IN-DEPTH THEORY SECTION */}
              <section className="mt-8 rounded-2xl border border-[#e7e3da] bg-white shadow-sm">
                <div className="border-b border-[#e7e3da] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      In-Depth Systems & Protocol Theory
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-stone-400">Stanford CS144 & IETF RFC Standards</span>
                </div>

                <div className="space-y-4 px-6 py-6 text-sm md:text-[15px] leading-relaxed text-stone-700">
                  {currentTopic.theory.map((para, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                      <p>{para}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ARCHITECTURAL PRINCIPLES */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm overflow-hidden">
                <div
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="flex items-center justify-between border-b border-[#e7e3da] px-6 py-4 cursor-pointer hover:bg-stone-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Core Networking Invariants & Key Rules
                    </h3>
                  </div>
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {showDetails && (
                  <div className="p-6 space-y-3 border-b border-[#e7e3da]">
                    {currentTopic.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 1}`}</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* SENIOR ARCHITECT DECISION */}
              {currentTopic.architectDecision && (
                <section className="mt-6 rounded-2xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
                  <div className="flex items-center gap-2 text-[#f97316] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Shield size={16} />
                    <span>Senior Architect Decision Rationale</span>
                  </div>
                  <p className="text-sm md:text-[15px] text-stone-300 leading-relaxed">
                    {currentTopic.architectDecision}
                  </p>
                </section>
              )}

              {/* INTERVIEW QUESTIONS */}
              {currentTopic.interviewQuestions && currentTopic.interviewQuestions.length > 0 && (
                <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Technical Interview & Systems Defense Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {currentTopic.interviewQuestions.map((qa, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-[#e7e3da] bg-[#faf8f4]/60 p-4"
                      >
                        <div className="flex items-start gap-2 text-sm font-bold text-stone-900">
                          <span className="text-[#ea580c] font-mono">Q:</span>
                          <span>{qa.q}</span>
                        </div>
                        <div className="mt-2.5 flex items-start gap-2 text-xs md:text-sm leading-relaxed text-stone-600 pl-4 border-l-2 border-orange-300">
                          <span className="text-stone-400 font-mono">A:</span>
                          <span>{qa.a}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* BOTTOM NAVIGATION */}
              <div className="module-footer-nav mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
                <button
                  type="button"
                  onClick={previousTopic}
                  className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-5 py-2.5 text-xs md:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: {selectedTopic === 0 ? "Last Topic" : networkingTopics[selectedTopic - 1].shortTitle}</span>
                </button>

                <button
                  type="button"
                  onClick={nextTopic}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95"
                >
                  <span>Next: {selectedTopic === networkingTopics.length - 1 ? "Overview" : networkingTopics[selectedTopic + 1].shortTitle}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL NETWORKING DIAGRAM DISPATCHER                                       */
/* -------------------------------------------------------------------------- */

function VisualNetworkingDiagram({
  type,
  topic,
  cidrInput,
  setCidrInput,
  cidrData,
  packetGameScenarios,
  packetScenarioIndex,
  setPacketScenarioIndex,
  packetSelection,
  handlePacketGameAnswer,
  packetScore,
  packetHistory,
  copyCode,
  copiedCodeId,
}) {
  switch (type) {
    case "full-networking-flow":
      return <FullNetworkingFlowDiagram />;

    case "packet-encapsulation":
      return <PacketEncapsulationDiagram />;

    case "tcp-handshake":
      return <TcpHandshakeDiagram />;

    case "dns-resolution-tree":
      return <DnsResolutionDiagram />;

    case "tls-handshake":
      return <TlsHandshakeDiagram />;

    case "cidr-calculator":
      return (
        <CidrCalculatorDiagram
          cidrInput={cidrInput}
          setCidrInput={setCidrInput}
          cidrData={cidrData}
        />
      );

    case "route-table-simulator":
      return <RouteTableSimulatorDiagram />;

    case "security-group-chain":
      return <SecurityGroupChainDiagram />;

    case "load-balancer-routing":
      return <LoadBalancerRoutingDiagram />;

    case "hybrid-connectivity-diagram":
      return <HybridConnectivityDiagram />;

    case "production-vpc-blueprint":
      return <ProductionVpcBlueprintDiagram copyCode={copyCode} copiedCodeId={copiedCodeId} />;

    case "packet-game-simulator":
    default:
      return (
        <PacketTroubleshootingGame
          packetGameScenarios={packetGameScenarios}
          packetScenarioIndex={packetScenarioIndex}
          setPacketScenarioIndex={setPacketScenarioIndex}
          packetSelection={packetSelection}
          handlePacketGameAnswer={handlePacketGameAnswer}
          packetScore={packetScore}
          packetHistory={packetHistory}
        />
      );
  }
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL VISUAL NETWORKING DIAGRAMS                                      */
/* -------------------------------------------------------------------------- */

function FullNetworkingFlowDiagram() {
  const [activeHop, setActiveHop] = useState(0);

  const hops = [
    { title: "1. User Browser", desc: "Initiates HTTPS GET to https://shop.example.com", proto: "HTTPS / TLS" },
    { title: "2. DNS Resolver", desc: "Route 53 resolves shop.example.com to Edge Anycast IP", proto: "DNS UDP:53" },
    { title: "3. Edge CDN", desc: "CloudFront edge point of presence terminates TLS, checks cache", proto: "TCP:443" },
    { title: "4. Internet Gateway (IGW)", desc: "Software-defined gateway translating VPC public IPs", proto: "IP Packet" },
    { title: "5. Application Load Balancer", desc: "Inspects HTTP Host/Path, health checks, forwards to target group", proto: "Layer 7 HTTP" },
    { title: "6. Private App VMs (Multi-AZ)", desc: "Executes business logic in private subnets with no public IP", proto: "TCP:8080" },
    { title: "7. Private PostgreSQL DB", desc: "Isolated data tier accepting connections strictly from App Security Group", proto: "TCP:5432" },
    { title: "8. Outbound NAT Gateway", desc: "Translates outbound calls to external Stripe API; blocks inbound", proto: "SNAT / PAT" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            End-To-End Systems Flow
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The Complete Packet Journey Through a Cloud Network
          </h4>
        </div>
        <span className="text-xs text-stone-500">Click any hop to inspect</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-4">
        {hops.map((hop, idx) => (
          <div
            key={idx}
            onClick={() => setActiveHop(idx)}
            className={`cursor-pointer rounded-xl border p-3 transition ${
              activeHop === idx
                ? "border-orange-500 bg-orange-50 shadow-xs"
                : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] font-bold text-stone-400">0{idx + 1}</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white border border-stone-200 text-[#ea580c]">
                {hop.proto}
              </span>
            </div>
            <div className="text-xs font-bold text-stone-900 truncate">{hop.title}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-xs font-bold text-[#ea580c]">{hops[activeHop].title}</span>
          <span className="font-mono text-[11px] text-stone-500">Protocol: {hops[activeHop].proto}</span>
        </div>
        <p className="text-xs md:text-sm text-stone-700 leading-relaxed">{hops[activeHop].desc}</p>
      </div>
    </div>
  );
}

function PacketEncapsulationDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Layered Encapsulation
          </span>
          <h4 className="text-base font-bold text-stone-900">
            How Protocols Wrap Data Like Russian Matryoshka Dolls
          </h4>
        </div>
      </div>

      {/* Nested Visual Boxes */}
      <div className="rounded-2xl border-2 border-stone-800 bg-stone-900 p-4 text-white">
        <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
          <span>Ethernet Frame (Link Layer)</span>
          <span>Source MAC: 00:1A:2B:3C:4D:5E → Next-Hop Router MAC</span>
        </div>

        <div className="rounded-xl border-2 border-blue-500 bg-blue-950/80 p-4">
          <div className="flex items-center justify-between text-xs font-mono text-blue-300 mb-2">
            <span>IP Header (Network Layer)</span>
            <span>Src IP: 10.20.10.15 → Dst IP: 203.0.113.25 • TTL: 64</span>
          </div>

          <div className="rounded-lg border-2 border-amber-500 bg-amber-950/80 p-4">
            <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-2">
              <span>TCP Header (Transport Layer)</span>
              <span>Src Port: 52148 → Dst Port: 443 • Seq: 1042 • ACK</span>
            </div>

            <div className="rounded-md border-2 border-emerald-400 bg-emerald-900/90 p-4 text-center">
              <span className="font-mono text-xs font-bold text-emerald-200 block">
                Application Payload (HTTP / TLS Layer)
              </span>
              <span className="font-mono text-[11px] text-emerald-300 mt-1 block">
                GET /api/checkout HTTP/1.1 (Encrypted Ciphertext)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-3 gap-3 text-xs text-stone-600">
        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Switches (Layer 2):</strong>
          Inspect only the outer Ethernet Frame Header (MAC address) to forward frames to local physical switch ports.
        </div>
        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Routers (Layer 3):</strong>
          Strip Ethernet frame, inspect the IP Header destination, determine the next hop via route tables, and re-encapsulate with a new MAC.
        </div>
        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Host OS (Layer 4):</strong>
          Inspects the TCP Port number (e.g. 443) and dispatches the payload to the specific socket listening process.
        </div>
      </div>
    </div>
  );
}

function TcpHandshakeDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            RFC 9293 Transport State
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The TCP 3-Way Handshake (SYN → SYN-ACK → ACK)
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 relative py-4">
        {/* Client Column */}
        <div className="text-center">
          <div className="rounded-xl border border-stone-300 bg-stone-100 py-2 px-3 font-mono text-xs font-bold text-stone-800 inline-block mb-6">
            Client Browser (10.20.1.5)
          </div>
          <div className="space-y-12 text-xs font-mono">
            <div className="text-stone-500">CLOSED</div>
            <div className="text-amber-600 font-bold">SYN_SENT</div>
            <div className="text-emerald-600 font-bold">ESTABLISHED (Can send data)</div>
          </div>
        </div>

        {/* Server Column */}
        <div className="text-center">
          <div className="rounded-xl border border-stone-300 bg-stone-100 py-2 px-3 font-mono text-xs font-bold text-stone-800 inline-block mb-6">
            Cloud Server (10.20.50.10:443)
          </div>
          <div className="space-y-12 text-xs font-mono">
            <div className="text-stone-500">LISTEN (Port 443)</div>
            <div className="text-amber-600 font-bold">SYN_RCVD</div>
            <div className="text-emerald-600 font-bold">ESTABLISHED (Connection Ready)</div>
          </div>
        </div>

        {/* Arrows overlay */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none pt-16 pb-4">
          <div className="flex items-center justify-between px-16 text-[#ea580c] font-mono text-[11px] font-bold">
            <span>1. SYN (seq=100) ──────────────────────────▶</span>
          </div>
          <div className="flex items-center justify-between px-16 text-blue-600 font-mono text-[11px] font-bold">
            <span>◀────────────────────────── 2. SYN-ACK (seq=300, ack=101)</span>
          </div>
          <div className="flex items-center justify-between px-16 text-emerald-600 font-mono text-[11px] font-bold">
            <span>3. ACK (ack=301) ──────────────────────────▶</span>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-orange-950">
        <strong>Flow Control vs Congestion Control:</strong> Flow control protects the receiver from buffer overflow using the Receive Window (`rwnd`). Congestion control protects the physical internet pipes from bottleneck drops using the Congestion Window (`cwnd`).
      </div>
    </div>
  );
}

function DnsResolutionDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            RFC 1034 Namespace Resolution
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Hierarchical Recursive DNS Resolution Flow
          </h4>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50">
          <div className="font-mono text-xs font-bold text-stone-800">
            Step 1: Laptop → Recursive Resolver
          </div>
          <span className="text-xs text-stone-500">"Where is api.example.com?"</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50">
          <div className="font-mono text-xs font-bold text-stone-800">
            Step 2: Resolver → Root Nameserver (.)
          </div>
          <span className="text-xs text-stone-500">"I don't know api.example.com, ask the .com TLD server."</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50">
          <div className="font-mono text-xs font-bold text-stone-800">
            Step 3: Resolver → .com TLD Nameserver
          </div>
          <span className="text-xs text-stone-500">"Ask example.com's authoritative nameserver (ns-1.awsdns.com)."</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-emerald-300 bg-emerald-50">
          <div className="font-mono text-xs font-bold text-emerald-900">
            Step 4: Resolver → Route 53 Authoritative Nameserver
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700">"api.example.com is 203.0.113.25 (TTL: 300s)"</span>
        </div>
      </div>
    </div>
  );
}

function TlsHandshakeDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            RFC 8446 Cryptography
          </span>
          <h4 className="text-base font-bold text-stone-900">
            TLS 1.3 Fast 1-RTT Handshake Architecture
          </h4>
        </div>
      </div>

      <div className="space-y-3 text-xs font-mono">
        <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3">
          <span className="font-bold text-[#ea580c] block">1. ClientHello (1-RTT begins):</span>
          <span>Supported Cipher Suites + Diffie-Hellman Key Share + SNI (shop.example.com)</span>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3">
          <span className="font-bold text-blue-800 block">2. ServerHello (1-RTT completes):</span>
          <span>Chosen Cipher (AES-256-GCM) + Server Key Share + Digital Certificate + Finished</span>
        </div>

        <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50 p-3">
          <span className="font-bold text-emerald-800 block">3. Symmetric Encryption Established:</span>
          <span>Both client & server derive identical symmetric session keys. All HTTP GET/POST data is encrypted with Perfect Forward Secrecy.</span>
        </div>
      </div>
    </div>
  );
}

function CidrCalculatorDiagram({ cidrInput, setCidrInput, cidrData }) {
  const commonCidrs = ["10.20.0.0/16", "10.20.0.0/20", "10.20.1.0/24", "10.20.10.0/28"];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Classless Inter-Domain Routing Math Engine
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Interactive Subnet Calculator & Cloud Address Allocator
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-600">Enter CIDR:</span>
          <input
            type="text"
            value={cidrInput}
            onChange={(e) => setCidrInput(e.target.value)}
            className="w-36 rounded-lg border border-orange-300 bg-orange-50 px-2.5 py-1 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            placeholder="10.20.0.0/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs text-stone-500 self-center">Presets:</span>
        {commonCidrs.map((c) => (
          <button
            key={c}
            onClick={() => setCidrInput(c)}
            className="rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 px-2.5 py-1 font-mono text-xs font-semibold text-stone-800"
          >
            {c}
          </button>
        ))}
      </div>

      {cidrData ? (
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="font-mono text-[10px] text-stone-500 uppercase block">Total Addresses</span>
            <div className="text-lg font-black text-stone-900 font-mono mt-0.5">{cidrData.totalIps}</div>
            <span className="text-[10px] text-stone-400">2^{cidrData.hostBits} total blocks</span>
          </div>

          <div className="rounded-xl border border-orange-300 bg-orange-50/70 p-3 text-center">
            <span className="font-mono text-[10px] text-orange-700 uppercase block font-bold">Usable Host IPs</span>
            <div className="text-lg font-black text-[#ea580c] font-mono mt-0.5">{cidrData.usableIps}</div>
            <span className="text-[10px] text-orange-600">Minus 5 Cloud Reserved</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="font-mono text-[10px] text-stone-500 uppercase block">Subnet Mask</span>
            <div className="text-sm font-bold text-stone-800 font-mono mt-1">{cidrData.subnetMask}</div>
            <span className="text-[10px] text-stone-400">Dotted Decimal Mask</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="font-mono text-[10px] text-stone-500 uppercase block">Recommended Tier</span>
            <div className="text-sm font-bold text-emerald-800 mt-1">
              {cidrData.prefix <= 16 ? "VPC Supernet" : cidrData.prefix <= 20 ? "Major Subnet" : cidrData.prefix <= 24 ? "App/DB Subnet" : "Micro Cluster"}
            </div>
            <span className="text-[10px] text-stone-400">Architecture sizing</span>
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700">
          Invalid CIDR notation. Enter a valid IPv4 address and prefix length between /0 and /32 (e.g. 10.20.0.0/20).
        </div>
      )}

      <div className="mt-4 rounded-xl bg-stone-100 p-3 text-xs text-stone-700 border border-stone-200">
        <strong>AWS / Azure 5 Reserved Addresses:</strong> .0 (Network address), .1 (VPC Virtual Router), .2 (DNS Server mapping), .3 (Future expansion), and .255 (Network Broadcast).
      </div>
    </div>
  );
}

function RouteTableSimulatorDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Software-Defined Routing
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Route Table Resolution & Longest Prefix Match (LPM)
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
              <th className="py-2.5 px-3">Destination CIDR</th>
              <th className="py-2.5 px-3">Next Hop Target</th>
              <th className="py-2.5 px-3">Priority / Specificity</th>
              <th className="py-2.5 px-3">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-800">
            <tr className="hover:bg-orange-50/40">
              <td className="py-2.5 px-3 font-bold text-amber-700">10.20.10.0/24</td>
              <td className="py-2.5 px-3">vpc-peering-0812</td>
              <td className="py-2.5 px-3 font-bold text-emerald-600">Longest Match (/24)</td>
              <td className="py-2.5 px-3 font-sans text-stone-600">Direct partner VPC microservice</td>
            </tr>
            <tr className="hover:bg-orange-50/40">
              <td className="py-2.5 px-3 font-bold text-blue-700">10.20.0.0/16</td>
              <td className="py-2.5 px-3">local</td>
              <td className="py-2.5 px-3">Medium (/16)</td>
              <td className="py-2.5 px-3 font-sans text-stone-600">All internal VPC communication</td>
            </tr>
            <tr className="hover:bg-orange-50/40">
              <td className="py-2.5 px-3 font-bold text-stone-600">0.0.0.0/0</td>
              <td className="py-2.5 px-3">nat-gateway-01ab</td>
              <td className="py-2.5 px-3">Default (/0)</td>
              <td className="py-2.5 px-3 font-sans text-stone-600">Catch-all for outbound public Internet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SecurityGroupChainDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Defense-In-Depth Firewall Chaining
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Security Group Chaining Architecture (Zero Hardcoded IPs)
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Tier 1: ALB */}
        <div className="rounded-xl border border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-stone-900">sg-alb (Public Ingress)</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 block">Inbound: Port 443</span>
              <span className="text-stone-500 text-[10px]">Source: 0.0.0.0/0 (Internet)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-[#ea580c] block">Outbound: Port 8080</span>
              <span className="text-stone-500 text-[10px]">Target: sg-app-servers</span>
            </div>
          </div>
        </div>

        {/* Tier 2: App */}
        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-[#ea580c]">sg-app (Private Compute)</span>
            <span className="h-2 w-2 rounded-full bg-[#f97316]" />
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-orange-200">
              <span className="text-emerald-700 block">Inbound: Port 8080</span>
              <span className="text-stone-500 text-[10px]">Source: sg-alb ONLY</span>
            </div>
            <div className="p-2 rounded bg-white border border-orange-200">
              <span className="text-[#ea580c] block">Outbound: Port 5432</span>
              <span className="text-stone-500 text-[10px]">Target: sg-database</span>
            </div>
          </div>
        </div>

        {/* Tier 3: DB */}
        <div className="rounded-xl border border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-stone-900">sg-db (Isolated Data)</span>
            <span className="h-2 w-2 rounded-full bg-blue-500" />
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 block">Inbound: Port 5432</span>
              <span className="text-stone-500 text-[10px]">Source: sg-app ONLY</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-red-700 block">Inbound from Internet:</span>
              <span className="text-stone-500 text-[10px]">DENIED (Implicit)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadBalancerRoutingDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Layer 7 vs Layer 4
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Application Load Balancer (ALB) Path-Based Routing
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 px-6 py-2.5 text-center">
          <span className="font-mono text-xs font-bold text-[#ea580c] block">
            ALB Ingress Listener (shop.example.com:443)
          </span>
          <span className="text-[10px] text-stone-500">Evaluates URL Path Rules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full text-xs font-mono">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="text-stone-800 font-bold block">Path: /api/orders*</span>
            <span className="text-stone-500 text-[10px]">→ Target Group: Checkout Microservice</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="text-stone-800 font-bold block">Path: /search*</span>
            <span className="text-stone-500 text-[10px]">→ Target Group: Search Cluster</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="text-stone-800 font-bold block">Default Rule: /*</span>
            <span className="text-stone-500 text-[10px]">→ Target Group: Web App Frontends</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HybridConnectivityDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Enterprise Hybrid Cloud
          </span>
          <h4 className="text-base font-bold text-stone-900">
            IPsec Site-to-Site VPN vs. Dedicated Direct Connect / ExpressRoute
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-stone-800">IPsec Site-to-Site VPN</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Encrypted</span>
          </div>
          <p className="text-xs text-stone-600 mb-3">
            Encrypted IPsec tunnel routed across the public Internet. Fast setup, capped at 1.25 Gbps per tunnel, variable internet latency.
          </p>
          <div className="text-[11px] font-mono text-stone-700 bg-white p-2 rounded border border-stone-200">
            On-Prem (10.10.0.0/16) ──[Encrypted Tunnel over Web]──▶ Virtual Private Gateway
          </div>
        </div>

        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-[#ea580c]">Dedicated Direct Connect / ExpressRoute</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Dedicated Circuit</span>
          </div>
          <p className="text-xs text-stone-600 mb-3">
            Dedicated 1Gbps – 100Gbps physical cross-connect fiber. Ultra-low latency, zero internet jitter. NOT encrypted by default.
          </p>
          <div className="text-[11px] font-mono text-stone-700 bg-white p-2 rounded border border-orange-200">
            On-Prem Router ──[Private Telecom Fiber Cross-Connect]──▶ Direct Connect Location
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductionVpcBlueprintDiagram({ copyCode, copiedCodeId }) {
  const terraformCode = `# Production Multi-AZ VPC Blueprint (10.20.0.0/16)
resource "aws_vpc" "main" {
  cidr_block           = "10.20.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "production-vpc" }
}

# AZ-A & AZ-B Subnet Allocation
# Public Tier (ALBs & NAT Gateways)
resource "aws_subnet" "public_az_a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.20.0.0/20"
  availability_zone = "us-east-1a"
}

# Private App Tier (Compute Instances)
resource "aws_subnet" "app_az_a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.20.16.0/20"
  availability_zone = "us-east-1a"
}

# Private Database Tier (Isolated)
resource "aws_subnet" "db_az_a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.20.32.0/20"
  availability_zone = "us-east-1a"
}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Capstone Infrastructure Blueprint
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Production-Grade Multi-AZ VPC (10.20.0.0/16)
          </h4>
        </div>

        <button
          onClick={() => copyCode(terraformCode, "vpc-tf")}
          className="flex items-center gap-1.5 rounded-lg border border-orange-300 bg-orange-50 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]"
        >
          <Copy size={13} />
          {copiedCodeId === "vpc-tf" ? "Copied Terraform!" : "Copy Terraform"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* AZ-A */}
        <div className="rounded-xl border border-orange-300 bg-orange-50/40 p-4">
          <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
            Availability Zone A (us-east-1a)
          </span>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 font-bold block">Public Subnet: 10.20.0.0/20</span>
              <span className="text-stone-500 text-[10px]">ALB Listener + NAT Gateway A (0.0.0.0/0 → IGW)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-blue-700 font-bold block">Private App Subnet: 10.20.16.0/20</span>
              <span className="text-stone-500 text-[10px]">App VM 1 & 2 (0.0.0.0/0 → NAT Gateway A)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-stone-800 font-bold block">Private DB Subnet: 10.20.32.0/20</span>
              <span className="text-stone-500 text-[10px]">Primary PostgreSQL (Local Route Only)</span>
            </div>
          </div>
        </div>

        {/* AZ-B */}
        <div className="rounded-xl border border-stone-300 bg-stone-50/60 p-4">
          <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
            Availability Zone B (us-east-1b)
          </span>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 font-bold block">Public Subnet: 10.20.48.0/20</span>
              <span className="text-stone-500 text-[10px]">ALB Listener + NAT Gateway B (0.0.0.0/0 → IGW)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-blue-700 font-bold block">Private App Subnet: 10.20.64.0/20</span>
              <span className="text-stone-500 text-[10px]">App VM 3 & 4 (0.0.0.0/0 → NAT Gateway B)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-stone-800 font-bold block">Private DB Subnet: 10.20.80.0/20</span>
              <span className="text-stone-500 text-[10px]">Standby DB Replica (Local Route Only)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PacketTroubleshootingGame({
  packetGameScenarios,
  packetScenarioIndex,
  setPacketScenarioIndex,
  packetSelection,
  handlePacketGameAnswer,
  packetScore,
  packetHistory,
}) {
  const currentScenario = packetGameScenarios[packetScenarioIndex];
  const historyForCurrent = packetHistory[currentScenario.id];

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-orange-300 bg-white p-5 md:p-6 shadow-md">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-red-500" />
            Live Packet Failure Game
          </span>
          <h4 className="text-base font-bold text-stone-900">
            "You are the Network Architect" Production Crisis Game
          </h4>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]">
            Score: {packetScore} / 90
          </div>

          <div className="flex gap-1">
            {packetGameScenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setPacketScenarioIndex(idx)}
                className={`h-7 w-7 rounded-lg font-mono text-xs font-bold transition ${
                  packetScenarioIndex === idx
                    ? "bg-[#f97316] text-white"
                    : packetHistory[s.id]
                    ? packetHistory[s.id].isCorrect
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <h5 className="font-bold text-stone-900 text-sm mb-1">{currentScenario.title}</h5>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{currentScenario.context}</p>
      </div>

      <div className="mb-4">
        <h6 className="font-bold text-stone-900 text-xs md:text-sm">{currentScenario.question}</h6>
      </div>

      <div className="space-y-2.5">
        {currentScenario.options.map((opt) => {
          const isSelected = historyForCurrent?.optionId === opt.id;
          let btnStyle = "border-stone-200 hover:border-orange-300 bg-white";

          if (isSelected) {
            btnStyle = opt.isCorrect
              ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
              : "border-red-500 bg-red-50 text-red-950 font-bold";
          }

          return (
            <div key={opt.id}>
              <button
                type="button"
                onClick={() => handlePacketGameAnswer(currentScenario, opt)}
                className={`w-full text-left rounded-xl border-2 p-3.5 text-xs md:text-sm transition flex items-start gap-3 ${btnStyle}`}
              >
                <span className="font-mono font-bold text-stone-400">{opt.id}.</span>
                <span className="flex-1">{opt.text}</span>
              </button>

              {isSelected && (
                <div
                  className={`mt-2 rounded-lg p-3 text-xs leading-relaxed border ${
                    opt.isCorrect
                      ? "bg-emerald-100/70 border-emerald-300 text-emerald-900"
                      : "bg-red-100/70 border-red-300 text-red-900"
                  }`}
                >
                  <strong className="block mb-1 font-bold">{opt.verdict}</strong>
                  <span>{opt.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-between items-center border-t border-stone-200 pt-4">
        <button
          disabled={packetScenarioIndex === 0}
          onClick={() => setPacketScenarioIndex((prev) => prev - 1)}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-bold text-stone-600 disabled:opacity-40"
        >
          Previous Scenario
        </button>

        <span className="font-mono text-xs text-stone-400">
          Scenario {packetScenarioIndex + 1} of {packetGameScenarios.length}
        </span>

        <button
          disabled={packetScenarioIndex === packetGameScenarios.length - 1}
          onClick={() => setPacketScenarioIndex((prev) => prev + 1)}
          className="rounded-lg bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white shadow-xs disabled:opacity-40"
        >
          Next Scenario
        </button>
      </div>
    </div>
  );
}
