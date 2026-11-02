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
  Globe,
  Radio,
  Flame,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsK8s() {
  const { data: moduleData, loading, error, reload } = useModuleContent("devops", "k8s");
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'control-plane-lab' | 'service-lab' | 'sre-gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: KUBERNETES CONTROL LOOP & POD LIFECYCLE SIMULATOR
  // =========================================================================
  const [desiredReplicas, setDesiredReplicas] = useState(3);
  const [node2Status, setNode2Status] = useState("Ready"); // 'Ready' | 'NotReady'
  const [appVersion, setAppVersion] = useState("v1.0.0");
  const [isRollingUpdate, setIsRollingUpdate] = useState(false);
  const [controllerEvents, setControllerEvents] = useState([
    "Deployment controller observed desired replicas: 3",
    "ReplicaSet 'notes-api-7b8f9' synchronized (3/3 ready)",
    "Scheduler placed pod-1 on node-1, pod-2 on node-2, pod-3 on node-1",
    "Kubelet started container 'notes-api:1.0.0' on all assigned nodes",
    "Readiness probes passed: Service endpoints registered",
  ]);

  // Compute active pods based on desired replicas, node status, and rolling update
  const activePods = useMemo(() => {
    const list = [];
    for (let i = 1; i <= desiredReplicas; i++) {
      // If node 2 is down, pods on node 2 are rescheduled to node 1
      const preferredNode = i % 2 === 0 ? "node-2" : "node-1";
      const actualNode = node2Status === "NotReady" && preferredNode === "node-2" ? "node-1 (rescheduled)" : preferredNode;
      const status = node2Status === "NotReady" && preferredNode === "node-2" ? "Terminating -> Recreating" : "Running";
      const ready = node2Status === "NotReady" && preferredNode === "node-2" ? "0/1" : "1/1";

      list.push({
        name: `notes-api-${appVersion.replace(".", "")}-${i}`,
        node: actualNode,
        status: status,
        ready: ready,
        version: appVersion,
        restarts: 0,
        age: "4m22s",
      });
    }
    return list;
  }, [desiredReplicas, node2Status, appVersion]);

  const handleScaleReplicas = (num) => {
    setDesiredReplicas(num);
    setControllerEvents((prev) => [
      `$ kubectl scale deployment notes-api --replicas=${num}`,
      `Deployment controller reconciling: desired=${num}, current=${activePods.length}`,
      ...prev.slice(0, 7),
    ]);
  };

  const handleToggleNode2 = () => {
    if (node2Status === "Ready") {
      setNode2Status("NotReady");
      setControllerEvents((prev) => [
        `[CRITICAL] node-2 missed heartbeat (NodeCondition: Ready=False)`,
        `Node controller started pod eviction after pod-eviction-timeout (300s / lab: instant)`,
        `Scheduler assigned orphaned pods to healthy node-1`,
        ...prev.slice(0, 7),
      ]);
    } else {
      setNode2Status("Ready");
      setControllerEvents((prev) => [
        `[HEALTHY] node-2 registered heartbeat (NodeCondition: Ready=True)`,
        `Kubelet on node-2 ready to accept new pod scheduling assignments`,
        ...prev.slice(0, 7),
      ]);
    }
  };

  const handleTriggerRollingUpdate = () => {
    setIsRollingUpdate(true);
    const nextVer = appVersion === "v1.0.0" ? "v2.0.0" : "v1.0.0";
    setAppVersion(nextVer);
    setControllerEvents((prev) => [
      `$ kubectl set image deployment/notes-api notes-api=notes-api:${nextVer}`,
      `Deployment creating new ReplicaSet for image 'notes-api:${nextVer}'`,
      `Rolling update strategy: maxSurge=25%, maxUnavailable=25%`,
      `New pods starting -> Readiness probes probing /readyz -> Old pods terminating`,
      `Rollout successful: 100% traffic shifted to ${nextVer} with ZERO downtime`,
      ...prev.slice(0, 7),
    ]);
    setTimeout(() => setIsRollingUpdate(false), 2000);
  };

  const handleRolloutUndo = () => {
    setAppVersion("v1.0.0");
    setControllerEvents((prev) => [
      `$ kubectl rollout undo deployment/notes-api`,
      `Deployment rolled back to previous revision (template restored to v1.0.0)`,
      `Rollout undo completed cleanly`,
      ...prev.slice(0, 7),
    ]);
  };

  // =========================================================================
  // SIMULATOR 2: SERVICE DISCOVERY & ENDPOINTSLICE ROUTING SANDBOX
  // =========================================================================
  const [podHealthState, setPodHealthState] = useState({
    podA: true,
    podB: true,
    podC: true,
  });
  const [routedPodHistory, setRoutedPodHistory] = useState([]);
  const [trafficLog, setTrafficLog] = useState([
    "ClusterIP Service 'notes-api' active on virtual IP 10.96.0.100:80",
    "EndpointSlice 'notes-api-7b4f' populated with 3 ready pod IP addresses",
    "CoreDNS resolving 'notes-api.default.svc.cluster.local' -> 10.96.0.100",
  ]);

  const healthyPodCount = Object.values(podHealthState).filter(Boolean).length;

  const handleSendRequest = () => {
    const available = [];
    if (podHealthState.podA) available.push("pod-A (10.244.1.14)");
    if (podHealthState.podB) available.push("pod-B (10.244.2.22)");
    if (podHealthState.podC) available.push("pod-C (10.244.1.19)");

    if (available.length === 0) {
      setTrafficLog((prev) => [
        "HTTP 503 Service Unavailable: No endpoints available in EndpointSlice!",
        ...prev.slice(0, 7),
      ]);
      return;
    }

    const selected = available[Math.floor(Math.random() * available.length)];
    setRoutedPodHistory((prev) => [selected, ...prev.slice(0, 5)]);
    setTrafficLog((prev) => [
      `Request routed: Client -> Service (10.96.0.100:80) -> kube-proxy / EndpointSlice -> ${selected} [200 OK]`,
      ...prev.slice(0, 7),
    ]);
  };

  const handleTogglePodReadiness = (podKey) => {
    const nextState = !podHealthState[podKey];
    setPodHealthState((prev) => ({ ...prev, [podKey]: nextState }));

    if (!nextState) {
      setTrafficLog((prev) => [
        `[READINESS FAILURE] ${podKey} failed /readyz check!`,
        `EndpointSlice controller IMMEDIATELY removed ${podKey} from Service backends`,
        `Zero client requests will be forwarded to ${podKey} while unready`,
        ...prev.slice(0, 7),
      ]);
    } else {
      setTrafficLog((prev) => [
        `[READINESS RESTORED] ${podKey} passed /readyz probe!`,
        `EndpointSlice controller re-added ${podKey} IP to Service backend targets`,
        ...prev.slice(0, 7),
      ]);
    }
  };

  // =========================================================================
  // SIMULATOR 3: SRE INCIDENT TROUBLESHOOTING GAMEDAY (5 SCENARIOS)
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
    return <ModuleLoadingSkeleton track="devops" currentModuleId="k8s" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="devops" currentModuleId="k8s" error={error} onRetry={reload} />;
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
          currentModuleId="k8s"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova K8s AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Boxes size={14} />
              <span>University-Informed Systems Foundations & Workload Orchestration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 4 — Kubernetes & Distributed Systems
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Build, deploy, troubleshoot, secure, scale and operate a Kubernetes cluster across distributed machines.
              Grounded in distributed systems principles from <span className="font-semibold text-stone-900">MIT (6.824)</span>,{" "}
              <span className="font-semibold text-stone-900">Stanford (CS111/CS244)</span>,{" "}
              <span className="font-semibold text-stone-900">Cambridge</span>,{" "}
              <span className="font-semibold text-stone-900">NUS (CS2106)</span>, and the official Kubernetes documentation.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "control-plane-lab", label: "Lab 1: Control Loop & Pod Lifecycle", icon: Activity },
              { id: "service-lab", label: "Lab 2: Service & EndpointSlice Routing", icon: Network },
              { id: "sre-gameday", label: "Lab 3: SRE Incident Troubleshooting", icon: ShieldCheck },
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
                <h3 className="text-base font-bold text-stone-900">Nova AI: Kubernetes & Orchestration Mentor</h3>
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
                currentTopic="devops-kubernetes-orchestration"
                moduleName="Module 4 — Kubernetes & Distributed Systems"
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
                      Production Kubernetes Manifest / CLI Reference
                    </span>
                    <span className="text-[10px] text-stone-400">kubectl / yaml</span>
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
        {/* TAB 2: LAB 1 - CONTROL LOOP & POD LIFECYCLE SIMULATOR               */}
        {/* =================================================================== */}
        {activeTab === "control-plane-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Activity size={14} />
                <span>Lab 1: Control Loop & Self-Healing Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Control Loop & Pod Lifecycle State Machine Simulator
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                As taught in <strong className="text-stone-900 font-semibold">MIT 6.824</strong> and{" "}
                <strong className="text-stone-900 font-semibold">Cambridge Concurrent Systems</strong>, Kubernetes is an
                asynchronous state-reconciliation engine. Test scale adjustments, trigger node outages, and simulate
                zero-downtime rolling updates.
              </p>
            </div>

            {/* CONTROLS TOOLBAR */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Replicas Control */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">
                    Desired Replicas (spec.replicas): <span className="text-orange-600 font-black">{desiredReplicas}</span>
                  </span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleScaleReplicas(num)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                          desiredReplicas === num
                            ? "bg-orange-500 text-white shadow-sm"
                            : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        {num} Replicas
                      </button>
                    ))}
                  </div>
                </div>

                {/* Node Fault Injection */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Node Fault Injection:</span>
                  <button
                    onClick={handleToggleNode2}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      node2Status === "Ready"
                        ? "bg-rose-50 text-rose-800 border border-rose-300 hover:bg-rose-100"
                        : "bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100"
                    }`}
                  >
                    <AlertTriangle size={14} />
                    <span>{node2Status === "Ready" ? "Simulate node-2 Failure" : "Restore node-2 to Ready"}</span>
                  </button>
                </div>

                {/* Rolling Update Trigger */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Release Rollout:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={handleTriggerRollingUpdate}
                      disabled={isRollingUpdate}
                      className="px-3.5 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 disabled:opacity-40 transition shadow-sm flex items-center gap-1.5"
                    >
                      <RefreshCw size={12} className={isRollingUpdate ? "animate-spin text-orange-400" : "text-orange-400"} />
                      <span>Rollout {appVersion === "v1.0.0" ? "v2.0.0" : "v1.0.0"}</span>
                    </button>
                    <button
                      onClick={handleRolloutUndo}
                      className="px-3 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-100 transition"
                    >
                      Rollback
                    </button>
                  </div>
                </div>
              </div>

              {/* NODE STATUS BAR */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-200 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server size={14} className="text-emerald-600" />
                    <span className="font-bold text-stone-900">node-1 (Control + Worker)</span>
                  </div>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">
                    Status: Ready
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server size={14} className={node2Status === "Ready" ? "text-emerald-600" : "text-rose-600"} />
                    <span className="font-bold text-stone-900">node-2 (Worker)</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      node2Status === "Ready"
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-rose-700 bg-rose-50 border border-rose-200 animate-pulse"
                    }`}
                  >
                    Status: {node2Status}
                  </span>
                </div>
              </div>
            </div>

            {/* POD POD-TABLE & EVENT STREAM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Pod List */}
              <div className="lg:col-span-7 rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2 text-xs font-mono">
                  <span className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Boxes size={14} className="text-orange-500" />
                    <span>Active Pods ({activePods.length} Replicas)</span>
                  </span>
                  <span className="text-stone-500 text-[11px]">Namespace: default</span>
                </div>

                <div className="space-y-2">
                  {activePods.map((pod, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs flex flex-wrap items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-bold text-stone-900 flex items-center gap-1.5">
                          <span>{pod.name}</span>
                          <span className="text-[10px] bg-orange-100 text-orange-800 px-1.5 py-0.2 rounded font-mono">
                            {pod.version}
                          </span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          Assigned: <span className="font-semibold text-stone-700">{pod.node}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-stone-500">Ready: {pod.ready}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            pod.status === "Running"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800 animate-pulse"
                          }`}
                        >
                          {pod.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Stream */}
              <div className="lg:col-span-5 rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Activity size={12} className="text-orange-400" />
                    <span>Control Plane Event Stream</span>
                  </span>
                  <span>kube-apiserver</span>
                </div>
                <div className="space-y-1.5 pt-1 max-h-60 overflow-y-auto">
                  {controllerEvents.map((ev, eIdx) => (
                    <div key={eIdx} className="text-stone-300 flex items-start gap-2 text-[11px] leading-relaxed">
                      <span className="text-orange-500 select-none">&gt;</span>
                      <span className={eIdx === 0 ? "text-emerald-400 font-bold" : ""}>{ev}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - SERVICE & ENDPOINTSLICE ROUTING SANDBOX              */}
        {/* =================================================================== */}
        {activeTab === "service-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Network size={14} />
                <span>Lab 2: Virtual IPs & Dynamic Endpoint Registration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Service Discovery & EndpointSlice Routing Sandbox
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Observe how Kubernetes Services route traffic across Pods using virtual ClusterIPs and EndpointSlices.
                Experience how failing a Pod's <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">readinessProbe</code>{" "}
                immediately removes it from the routing table without restarting the container.
              </p>
            </div>

            {/* ROUTING DIAGRAM / TOPOLOGY */}
            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <Network size={16} className="text-orange-600" />
                  <span className="font-bold text-xs sm:text-sm text-stone-900">
                    ClusterIP Service: notes-api (Virtual IP: 10.96.0.100:80)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSendRequest}
                    className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition shadow-sm flex items-center gap-1.5"
                  >
                    <SendRequestIcon />
                    <span>Send HTTP Request (curl)</span>
                  </button>
                </div>
              </div>

              {/* Pod Target Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { key: "podA", name: "notes-api-pod-A", ip: "10.244.1.14" },
                  { key: "podB", name: "notes-api-pod-B", ip: "10.244.2.22" },
                  { key: "podC", name: "notes-api-pod-C", ip: "10.244.1.19" },
                ].map((pod) => {
                  const isHealthy = podHealthState[pod.key];
                  return (
                    <div
                      key={pod.key}
                      className={`p-4 rounded-xl border transition space-y-2 ${
                        isHealthy
                          ? "bg-white border-emerald-300 text-stone-800 shadow-sm"
                          : "bg-rose-50 border-rose-300 text-rose-950"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold">{pod.name}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            isHealthy ? "bg-emerald-100 text-emerald-800" : "bg-rose-200 text-rose-900"
                          }`}
                        >
                          {isHealthy ? "READY (In Slice)" : "UNREADY (Excluded)"}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-stone-500">IP: {pod.ip} :8000</div>
                      <button
                        onClick={() => handleTogglePodReadiness(pod.key)}
                        className={`w-full mt-2 py-1.5 px-3 rounded-lg text-xs font-bold transition border ${
                          isHealthy
                            ? "border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100"
                            : "border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        }`}
                      >
                        {isHealthy ? "Fail /readyz Probe" : "Pass /readyz Probe"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TRAFFIC DISPATCH LOG */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-2">
                <span className="font-bold text-xs text-stone-900 block border-b border-stone-100 pb-2">
                  Recent Request Dispatches:
                </span>
                {routedPodHistory.length === 0 ? (
                  <div className="text-xs text-stone-400 font-mono py-4 text-center">
                    Click 'Send HTTP Request' to test load-balanced routing.
                  </div>
                ) : (
                  <div className="space-y-1.5 font-mono text-xs">
                    {routedPodHistory.map((item, idx) => (
                      <div key={idx} className="p-2 bg-stone-50 rounded-lg text-stone-700 flex items-center gap-2">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>Routed to: {item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span>CoreDNS & EndpointSlice Telemetry</span>
                  <span>10.96.0.100 ClusterIP</span>
                </div>
                <div className="space-y-1 pt-1 max-h-48 overflow-y-auto">
                  {trafficLog.map((log, lIdx) => (
                    <div key={lIdx} className="text-stone-300 flex items-start gap-2 text-[11px]">
                      <span className="text-orange-500 select-none">&gt;</span>
                      <span className={lIdx === 0 ? "text-emerald-400 font-bold" : ""}>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SRE INCIDENT TROUBLESHOOTING GAMEDAY                 */}
        {/* =================================================================== */}
        {activeTab === "sre-gameday" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <ShieldCheck size={14} />
                <span>Lab 3: SRE Production Incident Diagnostics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                SRE Incident Troubleshooting & Triage GameDay
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Troubleshoot Kubernetes like a Site Reliability Engineer. Analyze real-world cluster failure states:
                CrashLoopBackOff, Unsatisfiable CPU Requests, OOMKilled containers, Private Registry ImagePullBackOff,
                and Service label selector mismatches.
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
                      kubectl describe / Event Log Output:
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
                                      {opt.correct ? "✓ SRE Remediation Action: " : "✗ Root Cause Defect: "}
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
                14-Question Comprehensive Kubernetes Assessment
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Demonstrate complete systems-level mastery over the Kubernetes control plane, distributed consensus
                with etcd, workload controllers, virtual networking, security contexts, and SRE incident triage.
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
              DevOps & SRE Track • Module 4 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Kubernetes & Distributed Systems Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand the Kubernetes reconciliation control loop, etcd Raft consensus, zero-downtime rolling
              updates, EndpointSlice routing, StatefulSets with PVC storage, and SRE incident triage.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/docker")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 3: Docker
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/iac")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-1.5"
            >
              <span>Next: Module 5 — Infrastructure as Code</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendRequestIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
