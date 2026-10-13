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
  Cloud,
  GitBranch,
  GitCommit,
  GitPullRequest,
  ShieldAlert,
  Package,
  CheckCircle,
  XCircle,
  ArrowDown,
  ExternalLink,
  FastForward,
  Pause,
  Info,
  Copy,
  HelpCircle,
  ToggleLeft,
  ToggleRight,
  Split,
  Undo2,
  Calendar,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsDeployment() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'rolling-lab' | 'canary-lab' | 'expand-contract-lab' | 'project' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // =========================================================================
  // SIMULATOR 1: ROLLING UPDATE VS BLUE/GREEN RUNTIME LAB
  // 1,000 req/sec, maxSurge, maxUnavailable, pod readiness, graceful drain
  // =========================================================================
  const [simStrategy, setSimStrategy] = useState("rolling"); // 'rolling' | 'blueGreen'
  const [surgeConfig, setSurgeConfig] = useState(1); // 0 or 1
  const [unavailableConfig, setUnavailableConfig] = useState(0); // 0 or 1
  const [rollingPhase, setRollingPhase] = useState("idle"); // 'idle' | 'in_progress' | 'completed' | 'stalled'
  const [clusterCapacityStall, setClusterCapacityStall] = useState(false);

  // Pods represent the active runtime instances
  const [pods, setPods] = useState([
    { id: "pod-1", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.12" },
    { id: "pod-2", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.13" },
    { id: "pod-3", version: "v1", status: "ready", traffic: "serving", ip: "10.244.2.45" },
  ]);

  const [simLog, setSimLog] = useState([
    "Cluster steady-state: 3 replicas of notes-api:v1.0.0 receiving 1,000 requests/sec across Ingress.",
  ]);

  const handleStartDeployment = () => {
    setRollingPhase("in_progress");
    setSimLog((prev) => [
      `[deployment] Initiating ${simStrategy.toUpperCase()} deployment of notes-api:v1.2.0...`,
      ...prev,
    ]);

    if (simStrategy === "rolling") {
      if (clusterCapacityStall && surgeConfig > 0) {
        setTimeout(() => {
          setPods([
            { id: "pod-1", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.12" },
            { id: "pod-2", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.13" },
            { id: "pod-3", version: "v1", status: "ready", traffic: "serving", ip: "10.244.2.45" },
            { id: "pod-surge-1", version: "v2", status: "pending", traffic: "none", ip: "Pending" },
          ]);
          setRollingPhase("stalled");
          setSimLog((prev) => [
            "❌ [ROLLOUT STALLED] 0/4 nodes available: Insufficient memory. Pod notes-api-v2-surge remained in 'Pending' for >60s! progressDeadlineSeconds exceeded.",
            ...prev,
          ]);
        }, 1200);
        return;
      }

      // Step 1: Surge a new v2 pod
      setTimeout(() => {
        setPods([
          { id: "pod-1", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.12" },
          { id: "pod-2", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.13" },
          { id: "pod-3", version: "v1", status: "ready", traffic: "serving", ip: "10.244.2.45" },
          { id: "pod-4", version: "v2", status: "starting", traffic: "none", ip: "10.244.3.88" },
        ]);
        setSimLog((prev) => [
          "⚡ [SURGE] Created replacement Pod notes-api-v2 (10.244.3.88). Waiting for startup & readiness probes...",
          ...prev,
        ]);

        // Step 2: v2 becomes ready, terminate one v1 pod
        setTimeout(() => {
          setPods([
            { id: "pod-1", version: "v1", status: "terminating", traffic: "draining", ip: "10.244.1.12" },
            { id: "pod-2", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.13" },
            { id: "pod-3", version: "v1", status: "ready", traffic: "serving", ip: "10.244.2.45" },
            { id: "pod-4", version: "v2", status: "ready", traffic: "serving", ip: "10.244.3.88" },
          ]);
          setSimLog((prev) => [
            "✅ [PROBE PASSED] Pod 4 passed /readyz. Service added endpoint. Sending SIGTERM to Pod 1 (draining in-flight connections)...",
            ...prev,
          ]);

          // Step 3: Pod 1 cleanly stops, replace Pod 2
          setTimeout(() => {
            setPods([
              { id: "pod-4", version: "v2", status: "ready", traffic: "serving", ip: "10.244.3.88" },
              { id: "pod-2", version: "v1", status: "terminating", traffic: "draining", ip: "10.244.1.13" },
              { id: "pod-3", version: "v1", status: "ready", traffic: "serving", ip: "10.244.2.45" },
              { id: "pod-5", version: "v2", status: "ready", traffic: "serving", ip: "10.244.3.89" },
            ]);
            setSimLog((prev) => [
              "⚡ [ROLLOUT PROGRESS] Pod 1 terminated gracefully. Pod 5 (v2) ready and serving. Draining Pod 2...",
              ...prev,
            ]);

            // Step 4: Final replacement
            setTimeout(() => {
              setPods([
                { id: "pod-4", version: "v2", status: "ready", traffic: "serving", ip: "10.244.3.88" },
                { id: "pod-5", version: "v2", status: "ready", traffic: "serving", ip: "10.244.3.89" },
                { id: "pod-6", version: "v2", status: "ready", traffic: "serving", ip: "10.244.3.90" },
              ]);
              setRollingPhase("completed");
              setSimLog((prev) => [
                "🎉 [SUCCESS] Zero-downtime rolling update complete! 3/3 replicas running v1.2.0. 0 dropped requests observed.",
                ...prev,
              ]);
            }, 1000);
          }, 1000);
        }, 1100);
      }, 900);
    } else {
      // Blue / Green Strategy
      setSimLog((prev) => [
        "🔵 [BLUE STACK] Serving 100% live traffic via Service 'notes-api-active'.",
        "🟢 [GREEN STACK] Deploying candidate stack (3 replicas) attached to 'notes-api-preview'...",
        ...prev,
      ]);

      setTimeout(() => {
        setPods([
          { id: "blue-1", version: "v1 (Blue)", status: "ready", traffic: "serving", ip: "10.244.1.12" },
          { id: "blue-2", version: "v1 (Blue)", status: "ready", traffic: "serving", ip: "10.244.1.13" },
          { id: "blue-3", version: "v1 (Blue)", status: "ready", traffic: "serving", ip: "10.244.1.14" },
          { id: "green-1", version: "v2 (Green)", status: "ready", traffic: "preview", ip: "10.244.2.80" },
          { id: "green-2", version: "v2 (Green)", status: "ready", traffic: "preview", ip: "10.244.2.81" },
          { id: "green-3", version: "v2 (Green)", status: "ready", traffic: "preview", ip: "10.244.2.82" },
        ]);
        setSimLog((prev) => [
          "🧪 [PREVIEW TESTS] Smoke tests executing on notes-api-preview. All health and functional tests PASSED.",
          "⚡ [TRAFFIC CUTOVER] Switching Service selector app=notes-api from Blue to Green!",
          ...prev,
        ]);

        setTimeout(() => {
          setPods([
            { id: "blue-1", version: "v1 (Blue)", status: "standby", traffic: "retained", ip: "10.244.1.12" },
            { id: "blue-2", version: "v1 (Blue)", status: "standby", traffic: "retained", ip: "10.244.1.13" },
            { id: "blue-3", version: "v1 (Blue)", status: "standby", traffic: "retained", ip: "10.244.1.14" },
            { id: "green-1", version: "v2 (Green)", status: "ready", traffic: "serving", ip: "10.244.2.80" },
            { id: "green-2", version: "v2 (Green)", status: "ready", traffic: "serving", ip: "10.244.2.81" },
            { id: "green-3", version: "v2 (Green)", status: "ready", traffic: "serving", ip: "10.244.2.82" },
          ]);
          setRollingPhase("completed");
          setSimLog((prev) => [
            "🎉 [SWITCH COMPLETE] Live traffic now 100% on Green (v2). Blue retained for 30s scaleDownDelaySeconds for instantaneous rollback if needed.",
            ...prev,
          ]);
        }, 1200);
      }, 1200);
    }
  };

  const handleResetSim = () => {
    setRollingPhase("idle");
    setPods([
      { id: "pod-1", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.12" },
      { id: "pod-2", version: "v1", status: "ready", traffic: "serving", ip: "10.244.1.13" },
      { id: "pod-3", version: "v1", status: "ready", traffic: "serving", ip: "10.244.2.45" },
    ]);
    setSimLog(["Cluster reset to steady-state v1.0.0. Ready for new rollout."]);
  };

  // =========================================================================
  // SIMULATOR 2: PROGRESSIVE CANARY & AUTOMATED METRIC ANALYSIS
  // 5% -> 25% -> 50% -> 100%, PromQL analysis, automatic rollback
  // =========================================================================
  const [canaryWeight, setCanaryWeight] = useState(0); // 0, 5, 25, 50, 100
  const [canaryStatus, setCanaryStatus] = useState("idle"); // 'idle' | 'evaluating' | 'promoted' | 'aborted'
  const [bugInjected, setBugInjected] = useState(false);
  const [errorRate5xx, setErrorRate5xx] = useState(0.02); // %
  const [p99LatencyMs, setP99LatencyMs] = useState(14.2); // ms
  const [canaryLogs, setCanaryLogs] = useState([
    "Argo Rollouts controller initialized. AnalysisTemplate 'prometheus-error-rate' standing by.",
  ]);

  const handleAdvanceCanary = () => {
    if (canaryStatus === "aborted") return;

    let nextWeight = 5;
    if (canaryWeight === 0) nextWeight = 5;
    else if (canaryWeight === 5) nextWeight = 25;
    else if (canaryWeight === 25) nextWeight = 50;
    else if (canaryWeight === 50) nextWeight = 100;

    setCanaryWeight(nextWeight);
    setCanaryStatus("evaluating");

    setCanaryLogs((prev) => [
      `[canary] Traffic weight shifted to ${nextWeight}% Canary (v1.3.0) / ${100 - nextWeight}% Stable (v1.2.0).`,
      ...prev,
    ]);

    setTimeout(() => {
      if (bugInjected && nextWeight >= 25) {
        setErrorRate5xx(14.8);
        setP99LatencyMs(420.5);
        setCanaryStatus("aborted");
        setCanaryWeight(0);
        setCanaryLogs((prev) => [
          "🚨 [ANALYSIS RUN FAILED] Prometheus PromQL query 'sum(rate(http_requests_total{status=~\"5..\"}[2m])) / sum(rate(http_requests_total[2m]))' returned 14.8% (> 1.0% threshold)!",
          "🛑 [ROLLBACK TRIGGERED] Canary rollout aborted! Traffic weight instantly reverted to 0% canary. 100% traffic restored to stable v1.2.0.",
          ...prev,
        ]);
      } else {
        setErrorRate5xx(0.04);
        setP99LatencyMs(15.1);
        if (nextWeight === 100) {
          setCanaryStatus("promoted");
          setCanaryLogs((prev) => [
            "🎉 [PROMOTION COMPLETE] Canary passed all AnalysisRuns! Promoted to 100% stable production.",
            ...prev,
          ]);
        } else {
          setCanaryStatus("evaluating");
          setCanaryLogs((prev) => [
            `✅ [ANALYSIS PASSED] Stage ${nextWeight}% healthy: 5xx rate < 0.1%, p99 latency 15.1ms. Pause window active.`,
            ...prev,
          ]);
        }
      }
    }, 1100);
  };

  const handleResetCanary = () => {
    setCanaryWeight(0);
    setCanaryStatus("idle");
    setBugInjected(false);
    setErrorRate5xx(0.02);
    setP99LatencyMs(14.2);
    setCanaryLogs(["Canary reset to 100% Stable (v1.2.0)."]);
  };

  // =========================================================================
  // SIMULATOR 3: EXPAND-AND-CONTRACT ZERO-DOWNTIME DATABASE MIGRATION
  // notes.published (boolean) -> notes.status (text)
  // =========================================================================
  const [migrationPhase, setMigrationPhase] = useState(0); // 0: baseline, 1: expand, 2: backfill, 3: transition, 4: contract
  const [unsafeMigrationTriggered, setUnsafeMigrationTriggered] = useState(false);
  const [dbRows, setDbRows] = useState([
    { id: 1, message: "Deploy production ingress", published: true, status: null },
    { id: 2, message: "Configure Prometheus scrape", published: false, status: null },
    { id: 3, message: "Update Argo CD root repo", published: true, status: null },
  ]);

  const handleAdvanceMigrationPhase = () => {
    setUnsafeMigrationTriggered(false);
    if (migrationPhase === 0) {
      // Phase 1: Expand
      setMigrationPhase(1);
    } else if (migrationPhase === 1) {
      // Phase 2: Migrate data / Backfill
      setMigrationPhase(2);
      setDbRows((prev) =>
        prev.map((r) => ({
          ...r,
          status: r.published ? "published" : "draft",
        }))
      );
    } else if (migrationPhase === 2) {
      // Phase 3: Transition application
      setMigrationPhase(3);
    } else if (migrationPhase === 3) {
      // Phase 4: Contract
      setMigrationPhase(4);
    }
  };

  const handleSimulateUnsafeRename = () => {
    setUnsafeMigrationTriggered(true);
  };

  const handleResetMigration = () => {
    setMigrationPhase(0);
    setUnsafeMigrationTriggered(false);
    setDbRows([
      { id: 1, message: "Deploy production ingress", published: true, status: null },
      { id: 2, message: "Configure Prometheus scrape", published: false, status: null },
      { id: 3, message: "Update Argo CD root repo", published: true, status: null },
    ]);
  };

  // =========================================================================
  // CURRICULUM THEORY: 8 COMPREHENSIVE PRODUCTION TOPICS
  // =========================================================================
  const curriculumTopics = useMemo(
    () => [
      {
        id: "zero_downtime_meaning",
        title: "1. What Does Zero-Downtime Deployment Actually Mean?",
        badge: "Availability & Systems",
        icon: Activity,
        summary:
          "Zero-downtime is an engineering objective, not an unconditional guarantee. Understand concurrency gaps, the capacity problem, probes vs readiness, and graceful termination.",
        academicSource:
          "Kubernetes Official Documentation & Google SRE Release Engineering Principles",
        details: [
          {
            heading: "The Anatomy of a Service Interruption Gap",
            body: "Imagine your service receives 1,000 requests per second. A naive deployment stops version 1 before starting version 2. If version 2 takes 30 seconds to boot, parse config, connect to the database, and warm up its cache, those 30 seconds represent 30,000 failed user transactions.\n\nA zero-downtime release keeps the existing version serving live requests while preparing and verifying the replacement. Traffic only shifts once the replacement instance proves it is fully healthy.",
          },
          {
            heading: "The Hidden Capacity Problem (maxSurge)",
            body: "Suppose each Pod consumes 500 MiB of RAM. With 3 replicas, your baseline workload requires 1.5 GiB. During a rolling update with `maxSurge: 1`, Kubernetes temporarily schedules a 4th Pod, requiring 2.0 GiB.\n\nIf the Kubernetes cluster worker nodes are at 95% memory utilization, that replacement Pod will sit in `Pending` forever. The rollout stalls, and subsequent updates are blocked. SRE Lesson: Always reserve cluster headroom for deployment surges, not merely steady-state traffic.",
          },
          {
            heading: "Graceful Termination: SIGTERM & Connection Draining",
            body: "A safe deployment cares just as much about the retiring Pod as the incoming one:\n1. Kubelet sends `SIGTERM` to the container process.\n2. Endpoint controller removes the Pod IP from the Service endpoints list.\n3. The application must stop accepting new connections, allow in-flight HTTP requests to complete within `terminationGracePeriodSeconds` (typically 30s), flush buffers, and close DB pools cleanly.",
          },
        ],
        codeSnippet: `# Production Deployment with Graceful Shutdown & Probes
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-api
  namespace: production
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  minReadySeconds: 10
  progressDeadlineSeconds: 600
  template:
    spec:
      terminationGracePeriodSeconds: 30
      containers:
        - name: api
          image: ghcr.io/example/notes-api:v1.2.0
          lifecycle:
            preStop:
              exec:
                command: ["/bin/sleep", "5"] # Allows kube-proxy iptables propagation
          readinessProbe:
            httpGet:
              path: /readyz
              port: 8000
            periodSeconds: 5
            failureThreshold: 3`,
      },
      {
        id: "rolling_deployment",
        title: "2. Strategy 1 — Kubernetes Rolling Deployment",
        badge: "Rolling Updates",
        icon: RefreshCw,
        summary:
          "Rolling deployments incrementally replace old Pods with new ones without stopping service. Master maxSurge, maxUnavailable, minReadySeconds, and probe tuning.",
        academicSource:
          "Kubernetes Workload Controller Architecture & Cambridge Distributed Systems",
        details: [
          {
            heading: "Understanding the Rollout Parameters",
            body: "- `maxSurge: 1`: Allows the controller to create 1 extra Pod above the desired replica count during the rollout (4 Pods total for replicas=3).\n- `maxUnavailable: 0`: Guarantees that the number of available Pods never drops below the desired count (no intentional capacity reduction).\n- `minReadySeconds: 10`: The new Pod must remain ready without crashing for at least 10 seconds before Kubernetes considers it available and begins terminating an old Pod.\n- `progressDeadlineSeconds: 600`: If the rollout does not make forward progress within 10 minutes (e.g. ImagePullBackOff or probe failures), the Deployment controller flags the rollout as failed.",
          },
          {
            heading: "/healthz (Liveness) vs /readyz (Readiness) Probes",
            body: "Never point liveness and readiness to the same endpoint!\n- `/healthz` (Liveness): Asks 'Is the process deadlocked?'. If this fails, kubelet kills and restarts the Pod.\n- `/readyz` (Readiness): Asks 'Can this Pod handle incoming client traffic right now?'. Checks database connectivity and cache availability. If this fails, Kubernetes temporarily pulls the Pod from the Service endpoint without killing it.",
          },
        ],
        codeSnippet: `# Rolling Update Verification & History Commands
# 1. Trigger rolling update to new container image
kubectl set image deployment/notes-api api=ghcr.io/example/notes-api:v1.2.0 -n production

# 2. Watch rollout progress in real-time
kubectl rollout status deployment/notes-api -n production

# 3. View revision history
kubectl rollout history deployment/notes-api -n production

# 4. Immediate rollback if readiness fails
kubectl rollout undo deployment/notes-api -n production`,
      },
      {
        id: "blue_green",
        title: "3. Strategy 2 — Blue/Green Deployment Architecture",
        badge: "Blue/Green",
        icon: Split,
        summary:
          "Blue/Green runs two identical application stacks concurrently. Master preview testing, instantaneous traffic switching, double-capacity costs, and shared database hazards.",
        academicSource:
          "Martin Fowler Release Patterns & Argo Rollouts Blue/Green Controller",
        details: [
          {
            heading: "How Blue/Green Works in Kubernetes",
            body: "Blue represents the current active production environment; Green represents the candidate version. Both environments run simultaneously on the cluster:\n1. Green is deployed and receives zero live user traffic.\n2. Internal QA and automated smoke tests query the `previewService` to validate the Green environment against real backend databases.\n3. Once approved, the `activeService` selector flips immediately from Blue to Green.\n4. Blue is kept on standby for `scaleDownDelaySeconds` (e.g. 30 seconds) to enable instant, zero-penalty rollback if production errors occur.",
          },
          {
            heading: "The Hidden Danger: Shared Database Write Conflicts",
            body: "Blue/Green gives the illusion of complete environment isolation, but unless you replicate the entire database, both Blue and Green share the same database cluster. If Green writes data in a format that Blue cannot parse, simply flipping the service selector back to Blue will NOT fix the corruption!",
          },
        ],
        codeSnippet: `# Argo Rollouts Blue/Green Resource Definition
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: notes-api
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: notes-api
  template:
    metadata:
      labels:
        app: notes-api
    spec:
      containers:
        - name: api
          image: ghcr.io/example/notes-api:v1.2.0
  strategy:
    blueGreen:
      activeService: notes-api-active     # Serves 100% public traffic
      previewService: notes-api-preview   # Serves internal smoke tests
      autoPromotionEnabled: false         # Pauses for manual or automated gate
      scaleDownDelaySeconds: 30           # Retains old Blue pods for fast rollback`,
      },
      {
        id: "canary_rollouts",
        title: "4. Strategy 3 — Canary Deployment & Progressive Delivery",
        badge: "Canary Delivery",
        icon: Zap,
        summary:
          "Canary releases expose a small fraction of live users to the new version. Learn metric-driven progressive delivery with Argo Rollouts and Prometheus PromQL analysis.",
        academicSource:
          "Google SRE Workbook (Canarying Releases) & CNCF Argo Rollouts Specification",
        details: [
          {
            heading: "The Progressive Delivery Staged Sequence",
            body: "Instead of risking 100% of traffic, progressive delivery steps through controlled stages:\n- Stage 1: 5% Canary · 95% Stable. Observe error rates and baseline responsiveness.\n- Stage 2: 25% Canary · 75% Stable. Evaluate performance and database connection pools under moderate load.\n- Stage 3: 50% Canary · 50% Stable. Check cache hit ratios and memory pressure.\n- Stage 4: 100% Promotion. Shift all traffic and retire stable ReplicaSet.",
          },
          {
            heading: "What Metrics Must Control Promotion?",
            body: "Do NOT promote a canary simply because a timer elapsed! Automated metric analysis (`AnalysisRun`) must query:\n1. HTTP 5xx Error Rate: Must not exceed 0.5% or deviate from baseline.\n2. Latency p95/p99: No regression > 10% compared to stable control group.\n3. Business KPIs: Order completions, token generation rates, or cart conversions.\nIf any query fails, the controller automatically halts the rollout and sets canary weight to 0%.",
          },
        ],
        codeSnippet: `# Argo Rollout with Progressive Canary & Prometheus Analysis
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: notes-api
spec:
  replicas: 10
  strategy:
    canary:
      analysis:
        templates:
          - templateName: success-rate-check
        args:
          - name: service-name
            value: notes-api
      steps:
        - setWeight: 5
        - pause: { duration: 5m }
        - setWeight: 25
        - pause: { duration: 10m }
        - setWeight: 50
        - pause: { duration: 10m }`,
      },
      {
        id: "feature_flags",
        title: "5. Strategy 4 — Feature Flags: Decoupling Deploy from Release",
        badge: "Feature Toggles",
        icon: ToggleRight,
        summary:
          "Code deployment and user feature release are distinct operations. Master the four types of feature flags, dynamic configuration, and technical debt prevention.",
        academicSource:
          "Martin Fowler Feature Toggles & Unleash / LaunchDarkly Engineering Patterns",
        details: [
          {
            heading: "Deployment vs Release: The Fundamental Shift",
            body: "- Deployment: Installing and running new compiled code on production servers.\n- Release: Enabling the new functionality so that end users can experience it.\nFeature flags wrap new code paths in runtime conditional statements (`if is_feature_enabled('new_notes'): ...`). This allows developers to push code to production daily while keeping unfinished or high-risk features completely dark.",
          },
          {
            heading: "The Four Types of Feature Flags",
            body: "1. Release Flags: Enable dark launching of unfinished features. (Lifespan: 1-2 weeks; must be cleaned up post-rollout).\n2. Operational Flags: Act as emergency circuit breakers (e.g. disable expensive AI recommendation engine during high traffic spikes).\n3. Experiment Flags: A/B testing user behavior differences between two algorithms.\n4. Permission Flags: Restrict premium enterprise capabilities to authorized tenants.",
          },
          {
            heading: "Security Warning: Flags Are NOT Authorization",
            body: "Hiding a button or UI card using a client-side feature flag does NOT secure an API. An attacker can still send raw HTTP requests to the backend endpoint. True security requires server-side authentication, RBAC, and input validation.",
          },
        ],
        codeSnippet: `# Production Python FastAPI Feature Flag Implementation
import os
from functools import lru_cache

class FeatureToggleManager:
    @staticmethod
    def is_new_notes_api_enabled(user_id: str) -> bool:
        # 1. Check emergency operational kill switch
        if os.getenv("KILL_SWITCH_NEW_NOTES", "false").lower() == "true":
            return False
        # 2. Percentage rollout based on user_id hash (e.g., 20% rollout)
        user_hash = hash(user_id) % 100
        return user_hash < int(os.getenv("ROLLOUT_PERCENTAGE", "20"))

@app.get("/notes")
def list_notes(user_id: str):
    if FeatureToggleManager.is_new_notes_api_enabled(user_id):
        return {"notes": fetch_v2_notes(user_id), "engine": "v2-vector-search"}
    return {"notes": fetch_v1_notes(user_id), "engine": "v1-relational"}`,
      },
      {
        id: "rollback_engineering",
        title: "6. Strategy 5 — Rollback Engineering & GitOps Reconciliation",
        badge: "Recovery Engineering",
        icon: Undo2,
        summary:
          "Rollback means returning a system to a verified known-good state. Differentiate between application, deployment, traffic, configuration, and database recovery.",
        academicSource:
          "Google SRE Book (Emergency Response) & CNCF OpenGitOps Reversibility Principles",
        details: [
          {
            heading: "The Five Rollback Dimensions",
            body: "1. Application Rollback: Deploying an earlier binary image digest.\n2. Deployment Rollback: Restoring an earlier Kubernetes ReplicaSet revision (`kubectl rollout undo`).\n3. Traffic Rollback: Flipping the Service or Ingress selector back to the old version (instantaneous in Blue/Green or Canary).\n4. Configuration Rollback: Reverting an environment variable or feature flag kill-switch.\n5. Database Recovery: Executing a backward-compatible compensatory script or restoring from snapshot.",
          },
          {
            heading: "The GitOps Rollback Rule",
            body: "In a GitOps cluster managed by Argo CD, executing `kubectl rollout undo` on the live cluster will fail! Argo CD's continuous reconciliation loop will detect that the cluster live state does not match the Git repository and will automatically overwrite the cluster back to the faulty version within 3 minutes!\n\nIn GitOps, true rollback requires reverting the commit in Git (`git revert HEAD && git push`).",
          },
        ],
        codeSnippet: `# GitOps Safe Rollback Workflow
# 1. NEVER just run 'kubectl rollout undo' in GitOps!
# Instead, revert the image tag commit in your manifests repo:
git log -n 3 --oneline
# b8f2a1 (HEAD -> main) chore(release): update notes-api to v1.2.0
# 3c91e0 chore(release): update notes-api to v1.1.9 (KNOWN GOOD)

git revert b8f2a1 -m "revert: rollback notes-api to v1.1.9 due to connection pool leak"
git push origin main

# 2. Trigger immediate Argo CD sync
argocd app sync notes-api --prune
argocd app wait notes-api --health`,
      },
      {
        id: "database_migrations",
        title: "7. Strategy 6 — Zero-Downtime Database Migrations (Expand-and-Contract)",
        badge: "Database Engineering",
        icon: Database,
        summary:
          "Code and database schemas evolve together but cannot be switched atomically. Master the 4-phase Expand-and-Contract pattern to avoid table locking and column missing errors.",
        academicSource:
          "Prisma Data Guide & Martin Fowler Evolutionary Database Design",
        details: [
          {
            heading: "Why Direct Column Renaming Causes Immediate Outages",
            body: "Suppose version 1 reads `notes.published: boolean`. You want version 2 to read `notes.status: text`. If you execute `ALTER TABLE notes RENAME COLUMN published TO status;` before v1 stops running, all v1 Pods will instantly crash with `column published does not exist`.\n\nEven with a rolling update, v1 and v2 Pods must run simultaneously during the transition. Therefore, the schema must be compatible with BOTH versions at the same time!",
          },
          {
            heading: "The 4-Phase Expand-and-Contract Pattern",
            body: "- Phase 1 (Expand): Add the new column `status` as nullable (`ALTER TABLE notes ADD COLUMN status TEXT;`). Old v1 app continues reading and writing `published`.\n- Phase 2 (Migrate Data / Backfill): Populate `status` from existing `published` rows in small background batches to avoid table locking.\n- Phase 3 (Transition Application): Deploy v2 application code that dual-writes to both fields or reads from `status` with fallback to `published`.\n- Phase 4 (Contract): Once 100% of v1 Pods are decommissioned and verified, safely drop the old `published` column.",
          },
        ],
        codeSnippet: `-- Phase 1: Expand (Safe, non-blocking addition)
ALTER TABLE notes ADD COLUMN status TEXT;

-- Phase 2: Backfill existing data in batches (PostgreSQL)
UPDATE notes 
SET status = CASE WHEN published THEN 'published' ELSE 'draft' END 
WHERE status IS NULL;

-- Add check constraint without full table lock
ALTER TABLE notes ADD CONSTRAINT chk_status_valid 
  CHECK (status IN ('draft', 'published', 'archived')) NOT VALID;
ALTER TABLE notes VALIDATE CONSTRAINT chk_status_valid;

-- Phase 4: Contract (Executed only days after v2 is 100% stable)
ALTER TABLE notes DROP COLUMN published;`,
      },
      {
        id: "deployment_pipeline",
        title: "8. The Zero-Downtime Release Pipeline & Concurrency Gates",
        badge: "Delivery Pipelines",
        icon: ShieldCheck,
        summary:
          "Combine rolling updates, GitOps, feature flags, and database migrations into one unified pipeline. Prevent overlapping deployments and race conditions.",
        academicSource:
          "GitHub Actions Deployment Controls & DORA Elite Team Release Governance",
        details: [
          {
            heading: "The Six-Stage Production Release Workflow",
            body: "1. Build & Verify: Immutable image creation, Trivy CVE scanning, Cosign signing.\n2. Review DB Expansion: Backward-compatible schema migration executed before code rollout.\n3. Staging Validation: Smoke tests, probe checks, and synthetic user journeys.\n4. Progressive Promotion: Argo Rollout canary steps (5% -> 25% -> 50% -> 100%) with feature flag dark.\n5. Production Telemetry: 5xx error rate, latency p99, and Prometheus AnalysisRun.\n6. Flag Activation & Eventual Cleanup: Enable feature flag; schedule Phase 4 DB contract migration.",
          },
          {
            heading: "Preventing Overlapping Deployments (Concurrency Groups)",
            body: "If two developers merge pull requests within 60 seconds, two pipeline runners can attempt to apply competing manifests concurrently, corrupting release state. Modern pipelines use GitHub Actions `concurrency: group: production-deploy` to cancel or queue overlapping runs.",
          },
        ],
        codeSnippet: `# Concurrency Control & Deployment Environments in GitHub Actions
name: Production-Release
on:
  push:
    branches: [main]

concurrency:
  group: production-deploy-gate
  cancel-in-progress: false # Queue deployments sequentially, never race

jobs:
  deploy:
    environment:
      name: production
      url: https://notes.enterprise.io
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Verify GitOps Reconcile
        run: |
          echo "Deploying to production with verified sequential lock..."`,
      },
    ],
    []
  );

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (15 IN-DEPTH PRODUCTION QUESTIONS)
  // Based directly on Section 11 of user's curriculum
  // =========================================================================
  const masteryQuestions = [
    {
      q: "How does a Kubernetes rolling update maintain serving capacity during a rollout, and under what specific conditions can it still fail?",
      options: [
        "It uses maxSurge to provision replacement Pods and waits for readiness probes before terminating old Pods; it fails if cluster nodes lack memory capacity (stalling in Pending), if readiness probes are misconfigured, or if connections are dropped abruptly.",
        "It stops the entire cluster, upgrades all nodes simultaneously, and restarts the containers.",
        "It creates an exact duplicate virtual machine for every container in AWS.",
        "Rolling updates never fail under any circumstances because Kubernetes guarantees 100% uptime."
      ],
      correctIndex: 0,
      a: "A rolling update maintains capacity by provisioning new Pods while keeping existing Pods active, controlled by `maxSurge` and `maxUnavailable`. It can fail if worker nodes lack CPU/RAM to schedule surge Pods (causing rollouts to stall in Pending), if `/readyz` probes falsely report ready before dependencies initialize, or if Pods terminate without draining in-flight TCP connections.",
    },
    {
      q: "What is the operational distinction between 'maxSurge', 'maxUnavailable', and 'minReadySeconds' in a Kubernetes Deployment strategy?",
      options: [
        "maxSurge sets how many extra Pods can exist above desired replicas; maxUnavailable sets how many Pods can be down below desired replicas; minReadySeconds requires a new Pod to stay ready without crashing for N seconds before it counts as available.",
        "maxSurge controls network bandwidth; maxUnavailable controls CPU clock speed; minReadySeconds controls Docker build time.",
        "They are deprecated settings replaced by Docker Compose.",
        "maxSurge deletes old pods; maxUnavailable scales up databases; minReadySeconds restarts the node."
      ],
      correctIndex: 0,
      a: "`maxSurge` dictates the maximum number of Pods that can be scheduled above the target replica count during an update (e.g. `maxSurge: 1` on 3 replicas permits 4 temporary Pods). `maxUnavailable` limits how many Pods can be unavailable during the update (`maxUnavailable: 0` ensures zero reduction in serving capacity). `minReadySeconds` enforces that a newly ready Pod must remain healthy for a duration before the next Pod is replaced.",
    },
    {
      q: "What sequence of actions must an application process execute during graceful termination when receiving SIGTERM?",
      options: [
        "Stop accepting new client connections, allow ongoing in-flight HTTP requests to complete within the grace period, finish or checkpoint background jobs, close database connection pools cleanly, and exit 0 before SIGKILL.",
        "Immediately kill the process and drop all active TCP connections.",
        "Reboot the physical Linux server rack.",
        "Delete all database tables to clear disk cache."
      ],
      correctIndex: 0,
      a: "When Kubelet sends `SIGTERM`, the application must gracefully shut down: 1) Stop listening for new incoming connections; 2) Allow active in-flight HTTP requests to complete within `terminationGracePeriodSeconds`; 3) Close database pools and queue consumers safely; 4) Exit with code 0 before Kubelet issues `SIGKILL`.",
    },
    {
      q: "How does a Blue/Green deployment differ fundamentally from a Rolling Update?",
      options: [
        "Blue/Green spins up a complete, separate duplicate candidate environment (Green) alongside live production (Blue) and switches traffic instantaneously at the router/service level; Rolling Updates incrementally replace Pods within the existing environment.",
        "Blue/Green is only for databases while Rolling Updates are only for frontend apps.",
        "Rolling updates require twice as many servers as Blue/Green.",
        "Blue/Green deployments do not support rollback."
      ],
      correctIndex: 0,
      a: "A Rolling Update gradually replaces Pods in-place within the same Deployment. Blue/Green provisions two complete, separate environments: Blue serves 100% of live traffic while Green is deployed and smoke-tested in isolation; traffic is then switched instantaneously by flipping the Service selector.",
    },
    {
      q: "Why can a Canary deployment detect critical production regressions that an isolated Staging environment often misses?",
      options: [
        "Staging environments lack authentic production user traffic distributions, real cache hit/miss profiles, diverse client network latencies, and high-concurrency database lock contention.",
        "Canaries use artificial intelligence while staging uses manual testing.",
        "Staging environments cannot run Docker containers.",
        "Canary deployments run on faster hardware than staging."
      ],
      correctIndex: 0,
      a: "Synthetic tests in staging cannot replicate true production reality: unpredictable user behavior, real long-tail network latency, diverse device payloads, authentic database indexing scale, and concurrent transaction locking. A canary exposes real live traffic to a 5% slice, surfacing real-world regressions before they impact the entire user base.",
    },
    {
      q: "Why might a Canary deployment require an Ingress controller or Service Mesh rather than relying solely on Kubernetes replica counts?",
      options: [
        "Replica count traffic splitting is coarse (e.g., 1 out of 3 pods = 33% minimum traffic), whereas an Ingress or Service Mesh (like Envoy/Istio) can split exact HTTP request percentages (e.g., precisely 1% or 5%) regardless of pod count.",
        "Kubernetes cannot run more than 5 pods in a namespace.",
        "Service meshes make Docker containers use less memory.",
        "Ingress controllers are required to compile JavaScript."
      ],
      correctIndex: 0,
      a: "If an application runs 3 replicas, adding 1 canary replica routes ~25% of incoming traffic to the canary—far too high for a safe initial canary. An Ingress controller or Service Mesh (Envoy/Istio/Linkerd) can split traffic at the HTTP request layer with exact percentage weights (e.g. 2% or 5%) across any number of backend replicas.",
    },
    {
      q: "How do Feature Flags separate code deployment from user-facing feature release?",
      options: [
        "Code is deployed to production servers in an inactive state behind a boolean condition; the feature can be toggled on/off dynamically for targeted users without rebuilding images or redeploying workloads.",
        "Feature flags compile Python code into C++ binaries.",
        "Feature flags replace Kubernetes with serverless functions.",
        "Feature flags automatically fix syntax errors in code."
      ],
      correctIndex: 0,
      a: "Feature flags wrap new functionality in conditional evaluation (`if is_feature_enabled(...)`). Code can be deployed continuously to production servers while remaining dark to users. Activation is controlled dynamically via configuration, decoupling deployment (operations) from release (business decision).",
    },
    {
      q: "Why is a client-side Feature Flag not an acceptable substitute for server-side authorization?",
      options: [
        "Hiding or disabling a button in the frontend UI does not protect the underlying API; an attacker can inspect network calls and directly send unauthorized HTTP requests to the backend endpoint.",
        "Feature flags run slower than database queries.",
        "Frontend feature flags consume too much mobile battery.",
        "Authorization only works on Windows operating systems."
      ],
      correctIndex: 0,
      a: "Security through obscurity is not security. Hiding a link or UI element via a frontend toggle does not prevent malicious actors from directly invoking backend REST or GraphQL endpoints. Server-side code must independently validate JWT tokens, session scopes, and RBAC permissions.",
    },
    {
      q: "What is the critical operational difference between an Application Rollback, a Traffic Rollback, and Database Recovery?",
      options: [
        "Traffic rollback flips network routing back to an existing old version in seconds; Application rollback redeploys previous image manifests; Database recovery requires compensating transactions or schema rollbacks to fix data state.",
        "They are identical commands in Linux.",
        "Database recovery can be accomplished by restarting the Kubernetes Pod.",
        "Traffic rollback permanently deletes the container registry."
      ],
      correctIndex: 0,
      a: "Traffic rollback is instantaneous (e.g., switching Blue/Green service selector or setting canary weight to 0%). Application rollback redeploys and re-probes an earlier image version. Database recovery is fundamentally harder because data writes cannot simply be 'undone' without addressing data corruption and concurrent writes.",
    },
    {
      q: "Why can renaming a database column directly (e.g., ALTER TABLE notes RENAME COLUMN published TO status) cause an immediate production outage?",
      options: [
        "Existing running application Pods (v1) still generate SQL queries referencing the old column name; the moment the column is renamed, all v1 Pods crash with 'column does not exist' errors.",
        "PostgreSQL automatically deletes the entire database when a column is renamed.",
        "Renaming columns changes the server IP address.",
        "Columns can only be renamed when all servers are disconnected from the internet."
      ],
      correctIndex: 0,
      a: "During any zero-downtime deployment, v1 and v2 Pods coexist. If a migration immediately renames or drops `published`, every active v1 instance handling user requests will throw 500 errors on subsequent SQL queries because `published` no longer exists in the database schema.",
    },
    {
      q: "How does the Expand-and-Contract database pattern guarantee continuous availability across old and new application versions?",
      options: [
        "Phase 1 Expands the schema by adding the new column as nullable; Phase 2 Backfills data; Phase 3 Transitions the application to the new column; Phase 4 Contracts the schema by removing the old column only after old app versions are gone.",
        "It doubles the number of database servers in AWS RDS.",
        "It compresses all database rows into a zip file.",
        "It requires all users to log out before database queries can run."
      ],
      correctIndex: 0,
      a: "Expand-and-Contract breaks schema changes into non-breaking steps: 1) Expand (add nullable new column, maintaining compatibility with old app); 2) Backfill existing data; 3) Transition (deploy app v2 which reads/writes new structure); 4) Contract (drop old column days/weeks later when no old code paths remain).",
    },
    {
      q: "In a GitOps environment with Argo CD, why does running 'kubectl rollout undo' on the live cluster fail to execute a permanent rollback?",
      options: [
        "Argo CD's reconciliation loop continuously monitors the Git repository as the single source of truth; within minutes, it detects cluster drift and re-applies the faulty version declared in Git.",
        "Kubernetes deletes the deployment when kubectl rollout undo is called.",
        "Argo CD does not support Kubernetes deployments.",
        "kubectl is disabled in production environments."
      ],
      correctIndex: 0,
      a: "In GitOps, Git is the single source of truth. If an operator modifies the live cluster with `kubectl rollout undo`, Argo CD's reconciliation loop flags the cluster as `OutOfSync` and automatically re-applies the faulty commit declared in Git. The rollback must be executed by reverting the commit in Git.",
    },
    {
      q: "What specific telemetry signals and threshold breaches should immediately halt and abort a Canary rollout?",
      options: [
        "A statistically significant spike in HTTP 5xx error rate (>0.5%), unacceptable p95/p99 latency regressions (>15%), or a drop in key business metrics (such as checkout conversion rate).",
        "The server CPU fan noise increasing.",
        "The developer closing their laptop lid.",
        "Reaching 5:00 PM on a Friday."
      ],
      correctIndex: 0,
      a: "Automated canary analysis must monitor both technical and business signals: HTTP 5xx error percentage, p95/p99 response latency, memory leak slopes, database connection pool exhaustion, and domain-specific KPIs (e.g. failed payment attempts). Any threshold breach must trigger an immediate automated abort.",
    },
    {
      q: "How would an SRE prove a release had zero user-visible downtime, rather than merely relying on 'kubectl rollout status' returning success?",
      options: [
        "Audit synthetic canary traffic logs, Prometheus 5xx error metrics, Ingress access logs for dropped HTTP requests, and client-side error telemetry during the rollout window.",
        "Check that the kubectl command exited with code 0.",
        "Ask a coworker if the website looks fast.",
        "Check if the cloud hosting bill was paid."
      ],
      correctIndex: 0,
      a: "`kubectl rollout status` only confirms that Pods passed their readiness probes and old ReplicaSets scaled down; it cannot detect dropped in-flight TCP connections, 502 Bad Gateway proxy errors, or database lock timeouts. SREs verify zero downtime by auditing edge Ingress HTTP status codes, synthetic prober logs, and client telemetry.",
    },
    {
      q: "What evidence must be strictly verified before an SRE team can safely execute the 'Contract' phase to drop an old database column?",
      options: [
        "Verify that 100% of old application instances, asynchronous background queue workers, reporting cron jobs, and database read replicas have migrated and zero queries touch the obsolete column.",
        "Confirm that the deployment completed 5 minutes ago.",
        "Check that the developer who wrote the feature is online.",
        "Verify that the database disk is 100% full."
      ],
      correctIndex: 0,
      a: "The 'Contract' step is permanently destructive. SREs must verify via database query logs (`pg_stat_statements`) and application telemetry that no running version, background worker, async batch job, or analytics tool is querying the old column before executing `DROP COLUMN`.",
    },
  ];

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
          currentModuleId="deployment"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Deployment AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Split size={14} />
              <span>Zero-Downtime Releases · Progressive Delivery · Database Migrations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 7 — Deployment Strategies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              A successful deployment is not just a new version running.{" "}
              <strong className="text-stone-900 font-semibold">
                It is a verified change that preserves service availability, protects existing data, and has a tested recovery path.
              </strong>{" "}
              Master Rolling Updates, Blue/Green cutovers, Canary progressive delivery with Argo Rollouts,
              Feature Flags, and zero-downtime Expand-and-Contract database migrations.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (8 Topics)", icon: BookOpen },
              { id: "rolling-lab", label: "Lab 1: Rolling vs Blue/Green Sandbox", icon: RefreshCw },
              { id: "canary-lab", label: "Lab 2: Canary & Metric Analysis", icon: Zap },
              { id: "expand-contract-lab", label: "Lab 3: Expand-and-Contract DB", icon: Database },
              { id: "project", label: "Capstone Project & 7-Day Plan", icon: Calendar },
              { id: "mastery", label: "Mastery Assessment (15 Questions)", icon: CheckCircle2 },
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
          <div className="mb-10">
            <LearningRo
              currentTopic="devops-deployment-strategies"
              onClose={() => setShowAiTutor(false)}
            />
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: CURRICULUM & THEORY (8 TOPICS)                              */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* TOPICS SIDEBAR */}
            <div className="lg:col-span-4 space-y-2">
              <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-stone-600 font-mono">
                Curriculum Topics (8)
              </div>
              {curriculumTopics.map((topic, idx) => {
                const Icon = topic.icon;
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? "bg-stone-900 text-white border-stone-900 shadow-md"
                        : "bg-white/80 hover:bg-white border-stone-200/80 text-stone-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected
                          ? "bg-orange-500 text-white"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-stone-800 text-orange-400"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {topic.badge}
                        </span>
                      </div>
                      <h4
                        className={`text-sm font-bold mt-1 truncate ${
                          isSelected ? "text-white" : "text-stone-900"
                        }`}
                      >
                        {topic.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* TOPIC CONTENT DISPLAY */}
            <div className="lg:col-span-8">
              {curriculumTopics[selectedTopic] && (
                <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-10 shadow-sm space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold font-mono uppercase mb-3">
                      {curriculumTopics[selectedTopic].badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                      {curriculumTopics[selectedTopic].title}
                    </h2>
                    <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                      {curriculumTopics[selectedTopic].summary}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-stone-600 bg-stone-50 border border-stone-200 p-2.5 rounded-xl">
                      <BookOpen size={14} className="text-orange-600 shrink-0" />
                      <span>
                        Source:{" "}
                        <strong className="text-stone-800">
                          {curriculumTopics[selectedTopic].academicSource}
                        </strong>
                      </span>
                    </div>
                  </div>

                  {/* DEEP DIVE DETAILS */}
                  <div className="space-y-6 pt-4 border-t border-stone-100">
                    {curriculumTopics[selectedTopic].details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="rounded-2xl border border-stone-200/70 bg-stone-50/50 p-5"
                      >
                        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                          <CheckCircle size={16} className="text-orange-600" />
                          <span>{detail.heading}</span>
                        </h3>
                        <p className="mt-2 text-sm text-stone-700 leading-relaxed whitespace-pre-line font-sans">
                          {detail.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CODE SNIPPET BOX */}
                  {curriculumTopics[selectedTopic].codeSnippet && (
                    <div className="rounded-2xl border border-stone-800 bg-[#18181b] overflow-hidden shadow-lg">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900 border-b border-stone-800 text-xs font-mono text-stone-400">
                        <div className="flex items-center gap-2">
                          <FileCode size={14} className="text-orange-400" />
                          <span>Production Manifest / Strategy Code</span>
                        </div>
                        <button
                          onClick={() =>
                            handleCopyCode(
                              selectedTopic,
                              curriculumTopics[selectedTopic].codeSnippet
                            )
                          }
                          className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white transition"
                        >
                          {copiedCodeId === selectedTopic ? (
                            <>
                              <Check size={12} className="text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy code</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-5 text-xs sm:text-sm font-mono text-stone-200 overflow-x-auto leading-relaxed">
                        <code>{curriculumTopics[selectedTopic].codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - ROLLING UPDATE VS BLUE/GREEN RUNTIME LAB            */}
        {/* =================================================================== */}
        {activeTab === "rolling-lab" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Production Sandbox • Lab 1
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    Rolling Update vs Blue/Green Runtime Simulator
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Observe how Kubernetes replaces replicas handling 1,000 req/sec. Test <strong>maxSurge</strong>,
                    readiness probe gates, graceful termination connection draining, or switch to <strong>Blue/Green</strong> cutover.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleStartDeployment}
                    disabled={rollingPhase === "in_progress"}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 disabled:opacity-50 transition"
                  >
                    <Play size={14} />
                    <span>Execute Deployment</span>
                  </button>
                  <button
                    onClick={handleResetSim}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-stone-100 px-3.5 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* CONTROLS BAR */}
              <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center gap-6 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-700">Strategy:</span>
                  <button
                    onClick={() => setSimStrategy("rolling")}
                    className={`px-3 py-1.5 rounded-lg border font-bold transition ${
                      simStrategy === "rolling"
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-700 border-stone-300"
                    }`}
                  >
                    RollingUpdate
                  </button>
                  <button
                    onClick={() => setSimStrategy("blueGreen")}
                    className={`px-3 py-1.5 rounded-lg border font-bold transition ${
                      simStrategy === "blueGreen"
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-700 border-stone-300"
                    }`}
                  >
                    Blue/Green
                  </button>
                </div>

                {simStrategy === "rolling" && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-700">maxSurge:</span>
                      <span className="bg-stone-100 px-2 py-0.5 rounded font-bold">1</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-700">maxUnavailable:</span>
                      <span className="bg-stone-100 px-2 py-0.5 rounded font-bold">0</span>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer ml-auto">
                      <input
                        type="checkbox"
                        checked={clusterCapacityStall}
                        onChange={(e) => setClusterCapacityStall(e.target.checked)}
                        className="rounded border-stone-300 text-orange-600 focus:ring-orange-500 h-4 w-4"
                      />
                      <span className="font-bold text-rose-700">
                        Simulate Worker Node Memory Exhaustion (Stall in Pending)
                      </span>
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* LIVE POD VISUALIZER */}
            <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-orange-400" />
                  <span>Kubernetes Workload Topology • Ingress (1,000 req/sec)</span>
                </div>
                <span className="text-orange-400 font-bold">
                  Phase: {rollingPhase.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {pods.map((pod) => {
                  let statusBg = "bg-stone-900 border-stone-700";
                  let badgeBg = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";

                  if (pod.status === "terminating") {
                    statusBg = "bg-amber-950/40 border-amber-600/50";
                    badgeBg = "bg-amber-500/20 text-amber-400 border-amber-500/30";
                  } else if (pod.status === "starting") {
                    statusBg = "bg-blue-950/40 border-blue-600/50";
                    badgeBg = "bg-blue-500/20 text-blue-400 border-blue-500/30";
                  } else if (pod.status === "pending") {
                    statusBg = "bg-rose-950/40 border-rose-600/50";
                    badgeBg = "bg-rose-500/20 text-rose-400 border-rose-500/30";
                  }

                  return (
                    <div
                      key={pod.id}
                      className={`p-5 rounded-2xl border transition-all ${statusBg}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-stone-400 font-bold">
                          {pod.id}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${badgeBg}`}
                        >
                          {pod.status}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="text-white font-bold text-sm">
                          Version: {pod.version}
                        </div>
                        <div className="text-stone-400">IP: {pod.ip}</div>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                          <span className="text-stone-500">Traffic:</span>
                          <span
                            className={`font-bold ${
                              pod.traffic === "serving"
                                ? "text-emerald-400"
                                : pod.traffic === "draining"
                                ? "text-amber-400 animate-pulse"
                                : "text-stone-500"
                            }`}
                          >
                            {pod.traffic.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* LOG CONSOLE */}
              <div className="mt-6 pt-4 border-t border-stone-800">
                <div className="text-xs font-mono text-stone-400 uppercase font-bold mb-2">
                  Kubelet & Controller Event Stream:
                </div>
                <div className="space-y-1 text-xs font-mono text-stone-300 max-h-40 overflow-y-auto">
                  {simLog.map((log, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - PROGRESSIVE CANARY & METRIC ANALYSIS                */}
        {/* =================================================================== */}
        {activeTab === "canary-lab" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Production Sandbox • Lab 2
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    Argo Rollouts Progressive Canary & PromQL Analysis
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Step traffic through <strong>5%</strong> → <strong>25%</strong> → <strong>50%</strong> →{" "}
                    <strong>100%</strong>. Test automated Prometheus metric analysis for HTTP 5xx errors and p99 latency.
                    Inject a production regression to observe <strong>instant automated rollback</strong>!
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleAdvanceCanary}
                    disabled={canaryStatus === "promoted" || canaryStatus === "aborted"}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 disabled:opacity-50 transition"
                  >
                    <FastForward size={14} />
                    <span>Advance Canary Step</span>
                  </button>
                  <button
                    onClick={handleResetCanary}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-stone-100 px-3.5 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* INJECT BUG BUTTON */}
              <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center gap-4 text-xs font-mono">
                <button
                  onClick={() => setBugInjected(!bugInjected)}
                  className={`px-3 py-1.5 rounded-xl border font-bold transition flex items-center gap-1.5 ${
                    bugInjected
                      ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                      : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                  }`}
                >
                  <AlertTriangle size={13} />
                  <span>
                    {bugInjected
                      ? "Bug Injected: Unindexed DB Query (Will Fail Analysis)"
                      : "Arm Regression Bug: Connection Leak / 5xx Surge"}
                  </span>
                </button>
                <span className="text-stone-500 ml-auto">
                  Rollout Controller: <strong>Argo Rollouts v1.7.0</strong>
                </span>
              </div>
            </div>

            {/* TRAFFIC SPLIT & METRICS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Canary Traffic Split
                </div>
                <div className="text-3xl font-black text-stone-900 mt-2">
                  {canaryWeight}% <span className="text-xs font-normal text-stone-500">v1.3.0</span>
                </div>
                <div className="text-xs text-stone-600 mt-1">
                  Stable: {100 - canaryWeight}% (v1.2.0)
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  HTTP 5xx Error Rate
                </div>
                <div
                  className={`text-3xl font-black mt-2 ${
                    errorRate5xx > 1.0 ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  {errorRate5xx}%
                </div>
                <div className="text-xs text-stone-500 mt-1">Threshold: &lt; 0.5%</div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  p99 Latency
                </div>
                <div
                  className={`text-3xl font-black mt-2 ${
                    p99LatencyMs > 100 ? "text-rose-600" : "text-stone-900"
                  }`}
                >
                  {p99LatencyMs} ms
                </div>
                <div className="text-xs text-stone-500 mt-1">Baseline: 14.5 ms</div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Rollout Status
                </div>
                <div
                  className={`text-2xl font-black mt-2 uppercase ${
                    canaryStatus === "aborted"
                      ? "text-rose-600"
                      : canaryStatus === "promoted"
                      ? "text-emerald-600"
                      : "text-orange-600"
                  }`}
                >
                  {canaryStatus}
                </div>
                <div className="text-xs text-stone-500 mt-1">AnalysisRun Active</div>
              </div>
            </div>

            {/* PROGRESS VISUALIZER & LOGS */}
            <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl space-y-6">
              <div>
                <div className="text-xs font-mono text-stone-400 uppercase font-bold mb-3 flex items-center justify-between">
                  <span>Canary Steps Timeline</span>
                  <span>Target: 100% Promotion</span>
                </div>

                <div className="grid grid-cols-4 gap-3 text-center font-mono text-xs">
                  {[
                    { weight: 5, label: "Stage 1: 5%" },
                    { weight: 25, label: "Stage 2: 25%" },
                    { weight: 50, label: "Stage 3: 50%" },
                    { weight: 100, label: "Stage 4: 100%" },
                  ].map((st) => (
                    <div
                      key={st.weight}
                      className={`p-3 rounded-xl border ${
                        canaryWeight >= st.weight
                          ? canaryStatus === "aborted"
                            ? "bg-rose-950/40 border-rose-500 text-rose-300"
                            : "bg-orange-500/20 border-orange-500 text-orange-300 font-bold"
                          : "bg-stone-900 border-stone-800 text-stone-500"
                      }`}
                    >
                      {st.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800">
                <div className="text-xs font-mono text-stone-400 uppercase font-bold mb-2">
                  Prometheus AnalysisRun & Controller Logs:
                </div>
                <div className="space-y-1.5 font-mono text-xs text-stone-300 max-h-48 overflow-y-auto">
                  {canaryLogs.map((log, lIdx) => (
                    <div key={lIdx}>{log}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - EXPAND-AND-CONTRACT ZERO-DOWNTIME DB MIGRATION      */}
        {/* =================================================================== */}
        {activeTab === "expand-contract-lab" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Production Sandbox • Lab 3
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    Expand-and-Contract Database Migration Sandbox
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Evolving from <code>notes.published: boolean</code> to <code>notes.status: text</code>.
                    Step through the 4 non-breaking phases: <strong>1. Expand</strong> →{" "}
                    <strong>2. Backfill</strong> → <strong>3. Transition App</strong> →{" "}
                    <strong>4. Contract</strong>. Or trigger a dangerous direct column rename to see why it crashes running apps!
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleAdvanceMigrationPhase}
                    disabled={migrationPhase === 4}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 disabled:opacity-50 transition"
                  >
                    <FastForward size={14} />
                    <span>Next Phase ({migrationPhase + 1}/4)</span>
                  </button>
                  <button
                    onClick={handleSimulateUnsafeRename}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-rose-300 bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-700 hover:bg-rose-100 transition"
                  >
                    <AlertTriangle size={14} />
                    <span>Simulate Unsafe Direct Rename</span>
                  </button>
                  <button
                    onClick={handleResetMigration}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-stone-100 px-3 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* 4-PHASE TIMELINE */}
              <div className="mt-6 pt-5 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
                {[
                  { phase: 1, name: "1. Expand Schema", desc: "ADD status column (nullable)" },
                  { phase: 2, name: "2. Backfill Data", desc: "UPDATE status from published" },
                  { phase: 3, name: "3. Transition App", desc: "Deploy v2 (reads/writes status)" },
                  { phase: 4, name: "4. Contract Schema", desc: "DROP COLUMN published" },
                ].map((p) => (
                  <div
                    key={p.phase}
                    className={`p-3 rounded-xl border ${
                      migrationPhase >= p.phase
                        ? "bg-stone-900 text-white border-stone-900 font-bold"
                        : "bg-stone-50 text-stone-600 border-stone-200"
                    }`}
                  >
                    <div>{p.name}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* UNSAFE RENAME CRASH ALERT */}
            {unsafeMigrationTriggered && (
              <div className="p-6 rounded-3xl border border-rose-300 bg-rose-50 text-rose-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-base text-rose-700">
                  <XCircle size={18} />
                  <span>PRODUCTION OUTAGE SIMULATED: Unsafe ALTER TABLE notes RENAME COLUMN!</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  The SQL command executed: <code>ALTER TABLE notes RENAME COLUMN published TO status;</code>.
                  Active v1 Pods serving live traffic immediately failed with:
                </p>
                <pre className="p-3 bg-stone-900 text-rose-400 text-xs font-mono rounded-xl overflow-x-auto">
                  ERROR: column "published" does not exist at character 28 in "SELECT id, message, published FROM notes WHERE user_id = $1"
                  HTTP 500 Internal Server Error (1,000 req/sec affected!)
                </pre>
              </div>
            )}

            {/* DATABASE TABLE LIVE STATE & SQL EXECUTED */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TABLE DATA VIEWER */}
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Database size={16} className="text-orange-600" />
                    <h3 className="text-base font-bold text-stone-900">
                      PostgreSQL: public.notes Table State
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-500">
                    Phase: {migrationPhase}/4
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-500">
                        <th className="pb-2">id</th>
                        <th className="pb-2">message</th>
                        {migrationPhase < 4 && <th className="pb-2 text-orange-600">published</th>}
                        {migrationPhase >= 1 && <th className="pb-2 text-emerald-600">status</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {dbRows.map((row) => (
                        <tr key={row.id} className="text-stone-800">
                          <td className="py-2.5">{row.id}</td>
                          <td className="py-2.5">{row.message}</td>
                          {migrationPhase < 4 && (
                            <td className="py-2.5 text-stone-600 font-bold">
                              {String(row.published)}
                            </td>
                          )}
                          {migrationPhase >= 1 && (
                            <td className="py-2.5 text-emerald-600 font-bold">
                              {row.status ? `'${row.status}'` : "NULL"}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 leading-relaxed font-sans">
                  <strong>Application Compatibility Status: </strong>
                  {migrationPhase === 0 && "Baseline: Only v1 application is compatible."}
                  {migrationPhase === 1 && "v1 and v2 both compatible! v1 writes published; status is NULL."}
                  {migrationPhase === 2 && "v1 and v2 both compatible! status backfilled for all rows."}
                  {migrationPhase === 3 && "v2 fully active and reading status. v1 can be retired safely."}
                  {migrationPhase === 4 && "Contract complete: published dropped. Zero redundant columns."}
                </div>
              </div>

              {/* SQL EXECUTED IN CURRENT PHASE */}
              <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <div className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      <span>Executed Migration Script in Current Phase</span>
                    </div>
                  </div>

                  <pre className="mt-4 font-mono text-xs sm:text-sm text-stone-200 leading-relaxed overflow-x-auto">
                    {migrationPhase === 0 && "-- Baseline: Table definition\nCREATE TABLE notes (\n  id BIGSERIAL PRIMARY KEY,\n  message TEXT NOT NULL,\n  published BOOLEAN NOT NULL DEFAULT FALSE\n);"}
                    {migrationPhase === 1 && "-- Phase 1: Expand (Safe non-blocking addition)\nALTER TABLE notes ADD COLUMN status TEXT;\n-- Old v1 app continues reading & writing 'published' without error."}
                    {migrationPhase === 2 && "-- Phase 2: Backfill existing rows\nUPDATE notes\nSET status = CASE WHEN published THEN 'published' ELSE 'draft' END\nWHERE status IS NULL;\n-- Run in small batches on large production tables."}
                    {migrationPhase === 3 && "-- Phase 3: Transition Application\n-- Deploy notes-api:v2.0.0 (reads from status with fallback)\n-- Dual-write to both published and status if rollback is still allowed."}
                    {migrationPhase === 4 && "-- Phase 4: Contract (Destructive cleanup)\nALTER TABLE notes DROP COLUMN published;\n-- Executed only after 100% of v1 instances and background jobs are decommissioned."}
                  </pre>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500">
                  Engine: PostgreSQL 16 • Zero downtime maintained
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: WEEK 15 MAJOR PROJECT & 7-DAY STUDY PLAN                    */}
        {/* =================================================================== */}
        {activeTab === "project" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Capstone Implementation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Major Project: Build a Zero-Downtime Deployment Pipeline
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Extend the notes API from earlier Docker and Kubernetes modules into a fully automated,
                verifiable zero-downtime release pipeline with Argo Rollouts, feature flags, and database migrations.
              </p>
            </div>

            {/* 7-DAY STUDY PLAN TABLE */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-orange-600" />
                <h3 className="text-lg font-bold text-stone-900">
                  Your 7-Day Hands-On Study & Implementation Roadmap
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
                {[
                  { day: "Day 1", topic: "Rolling Deployments", milestone: "Replace an app version while verifying 100% HTTP availability." },
                  { day: "Day 2", topic: "Probes & Shutdown", milestone: "Diagnose an unavailable Pod during update; configure SIGTERM drain." },
                  { day: "Day 3", topic: "Blue/Green Deploy", milestone: "Deploy preview version; execute automated smoke tests before switch." },
                  { day: "Day 4", topic: "Canary Rollouts", milestone: "Route 5% traffic with Argo Rollouts; monitor PromQL error rate." },
                  { day: "Day 5", topic: "Feature Flags", milestone: "Disable feature via flag without rebuild; execute rollback test." },
                  { day: "Day 6", topic: "DB Expand/Contract", milestone: "Perform 4-phase schema migration without breaking active v1 pods." },
                  { day: "Day 7", topic: "Full Release Pipeline", milestone: "Demonstrate release, fault injection, automatic abort, and recovery." },
                ].map((d) => (
                  <div
                    key={d.day}
                    className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-orange-600 uppercase">
                        {d.day}
                      </span>
                      <h4 className="text-sm font-bold text-stone-900 mt-1">
                        {d.topic}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                      {d.milestone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ARCHITECTURE SUMMARY */}
            <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 sm:p-8 text-white shadow-xl space-y-4">
              <div className="text-xs font-mono text-orange-400 uppercase font-bold">
                Project Architecture Workflow
              </div>
              <pre className="font-mono text-xs sm:text-sm text-stone-300 leading-relaxed overflow-x-auto">
{`Developer
   ↓
Git Pull Request
   ↓
CI: Test + Security Scan (Trivy + Gitleaks)
   ↓
Build & Publish Immutable Image (Cosign Sign)
   ↓
Compatible Database Expansion (Phase 1 & 2)
   ↓
Update GitOps Release Manifest (Argo CD)
   ↓
Argo Rollouts (Progressive 5% → 25% → 50% → 100%)
   ├── Healthy AnalysisRun → Promote to Stable
   └── Unhealthy AnalysisRun → Automated Immediate Rollback
   ↓
Post-Deployment Verification & Database Contract (Phase 4)`}
              </pre>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 6: FINAL MASTERY ASSESSMENT (15 IN-DEPTH QUESTIONS)            */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Comprehensive Assessment • 15 Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Deployment Strategies & Release Engineering Mastery
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Verify your architectural and operational understanding of rolling updates, probes,
                graceful termination, Blue/Green cutover, Canary telemetry gates, Feature Flags,
                GitOps rollbacks, and Expand-and-Contract database migrations.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, mIdx) => {
                const isOpen = openMasteryIndex === mIdx;
                return (
                  <div
                    key={mIdx}
                    className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : mIdx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-stone-50/80 transition"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-orange-100 text-orange-800 text-xs font-mono font-bold shrink-0 mt-0.5">
                          {mIdx + 1}
                        </span>
                        <h4 className="text-base font-bold text-stone-900 leading-snug">
                          {mq.q}
                        </h4>
                      </div>
                      <div className="p-1 rounded-lg text-stone-500 shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-6 pt-0 border-t border-stone-100 space-y-4 mt-2">
                        <div className="space-y-2">
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-3.5 rounded-xl border text-xs sm:text-sm font-sans flex items-start gap-3 ${
                                oIdx === mq.correctIndex
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold"
                                  : "bg-stone-50 border-stone-200 text-stone-700"
                              }`}
                            >
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold shrink-0 mt-0.5 ${
                                  oIdx === mq.correctIndex
                                    ? "bg-emerald-600 text-white"
                                    : "bg-stone-200 text-stone-600"
                                }`}
                              >
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 text-xs text-stone-800 leading-relaxed font-sans">
                          <strong className="text-orange-900 font-bold block mb-1">
                            Architectural Rationale:
                          </strong>
                          {mq.a}
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
              DevOps & SRE Track • Module 7 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Deployment Strategies Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand zero-downtime releases: Rolling Updates with maxSurge/maxUnavailable,
              Blue/Green cutovers, Canary analysis with Argo Rollouts, Feature Flags, GitOps rollbacks,
              and 4-phase Expand-and-Contract database migrations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/cicd")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 6: CI/CD
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Curriculum Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/sre")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 9 — SRE →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
