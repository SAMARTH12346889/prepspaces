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
  Gauge,
  Clock,
  TrendingDown,
  TrendingUp,
  FileText,
  UserCheck,
  LifeBuoy,
  ListChecks,
  Filter,
  BarChart3,
  Timer,
  Shield,
  Shuffle,
  AlertOctagon,
  Anchor,
  Minimize2,
  Share2,
  Key,
  Fingerprint,
  FileCheck,
  FileSearch,
  Scan,
  Bug,
  Binary,
  Compass,
  LayoutGrid,
  Workflow,
  FolderTree,
  DollarSign,
  Users,
  Trophy,
  Award,
  Milestone,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsCapstone() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'architecture-lab' | 'gitops-lab' | 'incident-lab' | 'dr-drill' | 'rubric-audit' | 'synthesis' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // =========================================================================
  // SIMULATOR 1: LIVE CAPSTONE TOPOLOGY & TELEMETRY SIMULATOR
  // Shows real-time flow: Ingress -> API -> Worker -> DB -> Observability
  // =========================================================================
  const [systemLoadRps, setSystemLoadRps] = useState(450);
  const [dbHealth, setDbHealth] = useState("healthy"); // 'healthy' | 'lagging' | 'exhausted'
  const [activeReplicas, setActiveReplicas] = useState(4);
  const [workerQueueDepth, setWorkerQueueDepth] = useState(12);

  const topologyTelemetry = useMemo(() => {
    const errorRate = dbHealth === "exhausted" ? 14.8 : dbHealth === "lagging" ? 2.1 : 0.04;
    const p95Latency = dbHealth === "exhausted" ? 1850 : dbHealth === "lagging" ? 420 : 48;
    const cpuUtil = Math.min(95, Math.round((systemLoadRps / (activeReplicas * 120)) * 100));

    return {
      errorRate,
      p95Latency,
      cpuUtil,
      sloStatus: errorRate < 0.1 && p95Latency < 500 ? "COMPLIANT (99.9% SLO)" : "AT RISK (BURN RATE ALERT)",
      sloColor: errorRate < 0.1 && p95Latency < 500 ? "text-emerald-700 bg-emerald-50 border-emerald-300" : "text-rose-700 bg-rose-50 border-rose-300 animate-pulse",
    };
  }, [systemLoadRps, dbHealth, activeReplicas]);

  // =========================================================================
  // SIMULATOR 2: ARGO ROLLOUTS CANARY RELEASE & AUTOMATED ROLLBACK
  // =========================================================================
  const [canaryStep, setCanaryStep] = useState(0); // 0: Idle/v1, 1: 10% Canary, 2: 25%, 3: 50%, 4: 100% Promoted, -1: Rolled Back
  const [injectFaultyCanary, setInjectFaultyCanary] = useState(false);
  const [canaryLogs, setCanaryLogs] = useState([]);

  const handleStartCanary = () => {
    setCanaryStep(1);
    setCanaryLogs([
      { step: "Canary 10%", text: "Routing 10% traffic to notes-api:v2.1.0 (sha256:4f8e...). 90% on v2.0.0.", type: "info" },
    ]);

    setTimeout(() => {
      if (injectFaultyCanary) {
        setCanaryStep(-1);
        setCanaryLogs((prev) => [
          { step: "Analysis Failed", text: "Prometheus metric 'http_errors_5xx_total' spiked to 8.4% (Threshold: <1%). Aborting rollout!", type: "error" },
          { step: "Automated Rollback", text: "Argo Rollouts reverted traffic 100% to stable revision v2.0.0 in 2.4s. 0 user downtime.", type: "success" },
          ...prev,
        ]);
        return;
      }

      setCanaryStep(2);
      setCanaryLogs((prev) => [
        { step: "Canary 25%", text: "Analysis passed (p95: 42ms, 5xx: 0.01%). Expanding traffic to 25%.", type: "info" },
        ...prev,
      ]);

      setTimeout(() => {
        setCanaryStep(3);
        setCanaryLogs((prev) => [
          { step: "Canary 50%", text: "Analysis passed. Expanding traffic to 50%. Soaking for 30s.", type: "info" },
          ...prev,
        ]);

        setTimeout(() => {
          setCanaryStep(4);
          setCanaryLogs((prev) => [
            { step: "Promoted 100%", text: "Promotion complete! notes-api:v2.1.0 is now 100% active. Old ReplicaSet scaled to 0.", type: "success" },
            ...prev,
          ]);
        }, 800);
      }, 800);
    }, 800);
  };

  const handleResetCanary = () => {
    setCanaryStep(0);
    setCanaryLogs([]);
  };

  // =========================================================================
  // SIMULATOR 3: 5-STAGE CRITICAL INCIDENT & POSTMORTEM GENERATOR
  // =========================================================================
  const [incidentStage, setIncidentStage] = useState(0); // 0: Normal, 1: Detection, 2: Triage, 3: Mitigation, 4: Resolution, 5: Postmortem
  const [incidentAction, setIncidentAction] = useState("");

  const handleAdvanceIncident = (nextStage, actionTaken) => {
    setIncidentStage(nextStage);
    setIncidentAction(actionTaken);
  };

  // =========================================================================
  // 20-POINT CAPSTONE READINESS CHECKLIST (SECTION 12)
  // =========================================================================
  const [readinessChecks, setReadinessChecks] = useState({
    tfReviewedPlan: false,
    threeWorkloads: false,
    probesAndLimits: false,
    hpaTested: false,
    ciGatesEnforced: false,
    imageDigestRefs: false,
    argoCdSync: false,
    rollbackTested: false,
    metricsLogsTraces: false,
    slosDefined: false,
    alertsRunbooks: false,
    postmortemDrill: false,
    leastPrivilegeIam: false,
    supplyChainVerified: false,
    drRestoreTested: false,
    rtoRpoDocumented: false,
    architectureDocs: false,
    versionControlled: false,
    costAwareness: false,
    reproduciblePath: false,
  });

  const readinessScore = Object.values(readinessChecks).filter(Boolean).length;

  const toggleReadinessCheck = (key) => {
    setReadinessChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // =========================================================================
  // THEORY CURRICULUM TOPICS (8 DEEP-DIVE SECTIONS)
  // =========================================================================
  const theoryTopics = [
    {
      id: "capstone-architecture",
      title: "1. The Capstone End-to-End Architecture",
      subtitle: "Connecting code, infrastructure, delivery, observability, and operations",
      icon: Layers,
      tag: "Enterprise Blueprint",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            The Capstone Project synthesizes all skills from Courses 1 & 2 into an enterprise-grade application platform.
            The objective is not merely deploying a container, but operating a complete distributed system with
            production security, high availability, GitOps automation, and disaster recovery.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-4">
              Unified Production Architecture Flow
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">1. Developer Ingress</span>
                Feature branches $\to$ Pull Requests $\to$ CI Security Gates (Bandit, pip-audit, Trivy, Cosign).
              </div>
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">2. GitOps Delivery</span>
                Argo CD tracking Git configuration repo $\to$ Kustomize overlays $\to$ Argo Rollouts canary.
              </div>
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-emerald-400 font-bold block mb-1">3. Kubernetes Engine</span>
                Notes API Deployment, Notes Worker (asynchronous jobs), and Scheduled CronJob with HPA v2.
              </div>
              <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-800">
                <span className="text-blue-400 font-bold block mb-1">4. SRE & Observability</span>
                Prometheus metrics, OpenTelemetry traces, Grafana dashboards, and Alertmanager SLO alerts.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Stateful Core</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Managed PostgreSQL Storage</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Persistent source of truth. Provisioned via Terraform with automated snapshots, private subnet groups,
                least-privilege database roles, and connection pool bounds.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase">Operational Hygiene</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">SRE Operating Model</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Explicit SLIs/SLOs (99.9% availability, p95 &lt; 500ms), multi-window burn-rate alerts,
                actionable on-call runbooks, and tested disaster recovery (RTO: 1h, RPO: 15m).
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "repo-structure",
      title: "2. Monorepo Structure & Terraform Modularization",
      subtitle: "Organizing code, infrastructure as code, GitOps overlays, and runbooks",
      icon: FolderTree,
      tag: "Codebase Design",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A production platform requires a clean, navigable directory hierarchy separating application code,
            infrastructure as code modules, GitOps deployment overlays, and operational runbooks.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <FolderTree size={14} className="text-orange-400" />
                <span>sre-devops-capstone/ • Production Directory Layout</span>
              </div>
            </div>
            <pre className="mt-4 font-mono text-xs text-stone-200 leading-relaxed overflow-x-auto">
{`sre-devops-capstone/
├── apps/
│   ├── notes-api/            # Stateless REST API (Flask/FastAPI)
│   │   ├── Dockerfile
│   │   └── requirements.txt
│   └── notes-worker/         # Asynchronous background job consumer
├── infra/terraform/
│   ├── modules/
│   │   ├── network/          # VPC, subnets, NAT gateways, security groups
│   │   ├── kubernetes/       # EKS cluster, node groups, OIDC provider
│   │   └── database/         # RDS PostgreSQL, subnet group, backup policy
│   └── environments/
│       ├── staging/
│       └── production/
├── deploy/
│   └── apps/
│       ├── notes-api/
│       │   ├── base/         # Shared deployment, service, PDB, HPA
│       │   └── overlays/     # Staging & production Kustomize overlays
│       ├── notes-worker/
│       └── scheduled-jobs/   # Database maintenance CronJob
├── observability/
│   ├── prometheus-rules/     # Multi-window burn-rate alert rules
│   └── grafana-dashboards/   # Service RED metrics & Pod utilization
└── docs/
    ├── architecture.md
    ├── runbook.md
    └── disaster-recovery.md`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "three-workloads",
      title: "3. The Three Workload Patterns: API, Worker & CronJob",
      subtitle: "Designing stateless request handlers, asynchronous queues, and scheduled tasks",
      icon: Boxes,
      tag: "Workload Orchestration",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A complete platform does not consist solely of web servers. The capstone implements three distinctly
            configured workload patterns, each with tailored scaling, shutdown, and fault tolerance policies:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Workload 1: Web API</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Stateless HTTP Service</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Kubernetes Deployment + Service. HorizontalPodAutoscaler scaling on CPU/request rate.
                Readiness/liveness probes, <code className="font-mono text-stone-800">preStop</code> sleep 5s hook,
                and connection draining.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase">Workload 2: Worker</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Asynchronous Queue Processor</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Independent deployment processing expensive tasks (exports, previews).
                Bounded concurrency, idempotent task execution, and graceful SIGTERM handling to prevent dropped in-flight jobs.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-purple-600 uppercase">Workload 3: CronJob</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Scheduled Maintenance</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Kubernetes CronJob executing nightly reconciliation, stale token pruning, and partition cleanup.
                Configured with <code className="font-mono text-stone-800">concurrencyPolicy: Forbid</code>.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "gitops-canary",
      title: "4. GitOps Delivery & Argo Rollouts Canary Releases",
      subtitle: "Automated zero-downtime progressive delivery with real-time metric analysis",
      icon: GitPullRequest,
      tag: "Progressive Delivery",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Moving beyond simple rolling updates, the capstone demonstrates <strong>Canary Releases with Argo Rollouts</strong>.
            New container revisions are routed to a fraction of users while Prometheus metrics are continuously analyzed.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <FileCode size={14} className="text-orange-400" />
                <span>rollout.yaml • Argo Rollouts Canary Definition with Prometheus Analysis</span>
              </div>
            </div>
            <pre className="mt-4 font-mono text-xs text-stone-200 leading-relaxed overflow-x-auto">
{`apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: notes-api
spec:
  replicas: 8
  strategy:
    canary:
      analysis:
        templates:
        - templateName: success-rate-check
        args:
        - name: service-name
          value: notes-api
      steps:
      - setWeight: 10
      - pause: { duration: 5m }
      - setWeight: 25
      - pause: { duration: 10m }
      - setWeight: 50
      - pause: { duration: 15m }`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "observability-sre",
      title: "5. Observability Pipeline: Metrics, Logs & Distributed Tracing",
      subtitle: "Correlating symptoms to exact database transactions with OpenTelemetry",
      icon: Activity,
      tag: "Unified Telemetry",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Observability is the nervous system of the platform. The capstone instruments both the API and worker
            with the <strong>Three Pillars of Observability</strong> connected via the <strong>OpenTelemetry Collector</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Metrics (Prometheus)</span>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                RED metrics (Rate, Errors, Duration). Informs HPA autoscaling and multi-window burn-rate alerting.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase">Logs (Structured JSON)</span>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Stdout JSON streams with trace-id correlation. Shipped to Loki/CloudWatch for contextual error diagnosis.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-purple-600 uppercase">Traces (OpenTelemetry)</span>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Distributed trace spans following requests across Ingress $\to$ Notes API $\to$ PostgreSQL query spans.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "devsecops-supply-chain",
      title: "6. DevSecOps & Cryptographic Supply-Chain Verification",
      subtitle: "Enforcing zero unverified artifacts from Git commit to Kubernetes admission",
      icon: ShieldCheck,
      tag: "Supply-Chain Defense",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Security controls protect the delivery chain from end to end:
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl space-y-3 text-xs font-mono">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800">
              <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-bold shrink-0">Gate 1</span>
              <span><strong>Pre-Commit & PR:</strong> Gitleaks secret push-protection + Bandit SAST + pip-audit SCA.</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800">
              <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-bold shrink-0">Gate 2</span>
              <span><strong>BuildKit Hardening:</strong> Secret mounts in RAM + non-root UID 10001 container base.</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800">
              <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-bold shrink-0">Gate 3</span>
              <span><strong>Artifact Attestation:</strong> Trivy image scan (0 Critical/High CVEs) + Syft SPDX SBOM generation.</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300">
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold shrink-0">Gate 4</span>
              <span><strong>Admission Control:</strong> Cosign keyless OIDC signature verification via Kyverno admission controller.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "incident-dr",
      title: "7. Incident Management & Disaster Recovery (RTO/RPO)",
      subtitle: "Responding to production outages, executing rollbacks, and proving restore SLAs",
      icon: Flame,
      tag: "Disaster Recovery",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A platform is only as resilient as its tested recovery procedures. The capstone requires:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Incident Lifecycle</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Blameless Postmortem Practice</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Triage driven by Incident Commander, Operations Lead, and Communications Lead. Documented postmortem
                with 5-Whys root-cause analysis, contributing factors, and prioritized P0/P1 remediation tickets.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase">Disaster Recovery (DR)</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Tested Restore Drill</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Target RTO: <strong>1 Hour</strong> • Target RPO: <strong>15 Minutes</strong>.
                Periodic automated restoration drill restoring encrypted PostgreSQL WAL snapshots into an isolated environment.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "rubric-standards",
      title: "8. Capstone Evaluation Rubric & University Standards",
      subtitle: "The 100% assessment criteria across all 7 operational domains",
      icon: Award,
      tag: "Academic Standards",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Evaluation is based on verified operational evidence rather than static configuration files:
          </p>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-stone-200 text-stone-400">
                  <th className="pb-2">Evaluation Domain</th>
                  <th className="pb-2">Weight</th>
                  <th className="pb-2">Required Proof of Competence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-800">
                <tr>
                  <td className="py-2.5 font-bold">1. Terraform & Infrastructure Lifecycle</td>
                  <td className="py-2.5 text-orange-600 font-bold">15%</td>
                  <td className="py-2.5">Modularized IaC, remote state locking, reviewed plan/apply.</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">2. Kubernetes Workloads & Autoscaling</td>
                  <td className="py-2.5 text-orange-600 font-bold">15%</td>
                  <td className="py-2.5">API, worker, and CronJob; HPA v2 tested under load.</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">3. CI/CD, GitOps & Delivery Strategy</td>
                  <td className="py-2.5 text-orange-600 font-bold">15%</td>
                  <td className="py-2.5">Argo CD sync loop, immutable digest references, canary/rollback.</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">4. Observability & SLOs</td>
                  <td className="py-2.5 text-orange-600 font-bold">15%</td>
                  <td className="py-2.5">Prometheus RED metrics, OpenTelemetry traces, burn-rate alerts.</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">5. Security & Supply-Chain Integrity</td>
                  <td className="py-2.5 text-orange-600 font-bold">15%</td>
                  <td className="py-2.5">SAST, SCA, BuildKit, Trivy CVE gate, Syft SBOM, Cosign signature.</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">6. Reliability & Disaster Recovery</td>
                  <td className="py-2.5 text-orange-600 font-bold">15%</td>
                  <td className="py-2.5">Tested DB restore against RTO/RPO, simulated incident & postmortem.</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">7. Documentation & Reproducibility</td>
                  <td className="py-2.5 text-orange-600 font-bold">10%</td>
                  <td className="py-2.5">Living runbooks, architecture diagrams, cost teardown scripts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  // =========================================================================
  // 16 CAPSTONE DEFENSE MASTERY QUESTIONS
  // =========================================================================
  const masteryQuestions = [
    {
      q: "In the final capstone architecture, why is the application split into an API deployment, an asynchronous worker, and a scheduled CronJob?",
      options: [
        "Because Kubernetes does not allow running more than one container per cluster.",
        "To separate interactive user-facing requests from long-running background tasks and maintenance, isolating resource pools and preventing worker spikes from blocking HTTP latency.",
        "To satisfy Docker licensing restrictions.",
        "Because Python cannot execute background threads.",
      ],
      c: 1,
      a: "Separating workloads applies bulkhead resource isolation. Interactive note reads/writes remain snappy on the API pods while expensive exports run on dedicated worker pods, and scheduled cleanup runs as isolated CronJobs.",
    },
    {
      q: "Why must the CI/CD pipeline update the GitOps deployment repository using the container's immutable SHA256 digest rather than a tag like ':latest'?",
      options: [
        "Digest pulls are 50% faster than tag pulls.",
        "Mutable tags can be overwritten or drift, whereas immutable digests guarantee the exact bit-for-bit container that passed SAST, Trivy, and Cosign verification is deployed.",
        "Git repositories reject commits that contain alphanumeric tags.",
        "Kubernetes removes images with tags every 12 hours.",
      ],
      c: 1,
      a: "Deploying by immutable digest ensures cryptographic traceability and reproducibility. If a tag is pointed to a different build, GitOps would silently deploy unverified code.",
    },
    {
      q: "What is the primary role of Argo Rollouts in the capstone deployment strategy?",
      options: [
        "To compile TypeScript code into WebAssembly.",
        "To provide automated progressive canary delivery with metric-based analysis, shifting traffic in stages and automatically aborting if error rates breach thresholds.",
        "To replace the PostgreSQL database during releases.",
        "To compress container images before deployment.",
      ],
      c: 1,
      a: "Argo Rollouts implements progressive delivery. It routes a small percentage (e.g. 10%) of traffic to the new revision, evaluates Prometheus metrics, and rolls back instantly if error rates spike.",
    },
    {
      q: "Why is a scheduled container that copies database files to an S3 bucket NOT considered an enterprise disaster recovery plan for PostgreSQL?",
      options: [
        "S3 does not support storing SQL files.",
        "File copy backups taken while PostgreSQL is running produce corrupted, inconsistent snapshots. Enterprise DR requires managed WAL archiving, point-in-time recovery (PITR), and periodic restore verification.",
        "CronJobs cannot run more than once per week.",
        "PostgreSQL requires tape drives for valid backups.",
      ],
      c: 1,
      a: "Raw file copies of live database directories cause corruption due to in-flight writes. Proper DR requires engine-level WAL archiving and automated restoration drills that prove RTO and RPO targets.",
    },
    {
      q: "In the capstone SRE operating model, how are Multi-Window Multi-Burn-Rate alerts used to prevent alert fatigue?",
      options: [
        "They mute all alerts permanently during business hours.",
        "They require both a long window (e.g. 1 hour) and a short confirmation window (e.g. 5 minutes) to consume error budget rapidly before paging the on-call engineer.",
        "They convert all alerts into SMS messages sent to all employees.",
        "They only trigger when the CPU reaches 100%.",
      ],
      c: 1,
      a: "Multi-window alerting eliminates single-spike noise and slow-burn delays by verifying that both a short-term burst and a sustained burn are consuming the SLO budget before waking an engineer.",
    },
    {
      q: "What is the purpose of the OpenTelemetry Collector in the capstone observability pipeline?",
      options: [
        "To act as a reverse proxy load balancer for incoming HTTP requests.",
        "To provide a vendor-neutral telemetry proxy that receives, filters, batches, and exports metrics, logs, and distributed traces to storage backends.",
        "To format Python code before git commit.",
        "To automatically restart failing Kubernetes nodes.",
      ],
      c: 1,
      a: "The OTel Collector decouples applications from specific observability vendors. Microservices push OTLP data to the collector, which routes traces to Jaeger/Tempo, metrics to Prometheus, and logs to Loki.",
    },
    {
      q: "How does the Transactional Outbox pattern maintain consistency between PostgreSQL writes and asynchronous worker events?",
      options: [
        "It stores all application data in memory instead of disk.",
        "It writes the business record and the outbound event message within the exact same database transaction, ensuring events are never published if the database rollback occurs.",
        "It disables database transactions entirely.",
        "It uses WebSockets to bypass the database.",
      ],
      c: 1,
      a: "The Transactional Outbox pattern guarantees that if a note is saved, its background processing event is committed in the same atomic SQL transaction, preventing phantom jobs or lost events.",
    },
    {
      q: "Why does the capstone enforce the Kubernetes Pod Security Standard 'Restricted' profile?",
      options: [
        "To restrict container network bandwidth to 10 Mbps.",
        "To enforce non-root execution (UID 10001), drop all Linux kernel capabilities, make the root filesystem read-only, and filter syscalls with seccomp to mitigate container breakouts.",
        "To prevent developers from logging into Kubernetes via SSH.",
        "Because Kubernetes will not start without it.",
      ],
      c: 1,
      a: "The Restricted PSS profile is the highest security hardening tier in Kubernetes. It strips privileges, prevents root execution, and blocks unauthorized filesystem modifications.",
    },
    {
      q: "What role does Sigstore Cosign play in the software supply-chain defense of the capstone?",
      options: [
        "It compiles Python bytecode into machine code.",
        "It cryptographically signs the built container image digest using GitHub Actions OIDC identity, enabling admission controllers to reject unsigned or tampered images.",
        "It scans source code for syntax errors.",
        "It generates SSL certificates for web browsers.",
      ],
      c: 1,
      a: "Cosign provides keyless signing. It binds the image digest to the specific GitHub Actions workflow identity and records it in Rekor, allowing Kubernetes to reject untrusted artifacts.",
    },
    {
      q: "What is the primary difference between Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?",
      options: [
        "RTO measures cloud cost; RPO measures network latency.",
        "RTO is the maximum tolerable duration of system downtime; RPO is the maximum tolerable amount of data loss measured in time.",
        "RTO applies to CI/CD pipelines; RPO applies to Terraform.",
        "There is no difference; they are interchangeable terms.",
      ],
      c: 1,
      a: "RTO defines how long the service can be down before restoration (e.g. 1 hour). RPO defines the maximum acceptable age of data that can be lost from persistent storage (e.g. 15 minutes).",
    },
    {
      q: "Why must Terraform state files never be committed to Git repositories?",
      options: [
        "Because Git cannot handle JSON files larger than 100 KB.",
        "State files frequently contain plain-text sensitive values (database passwords, private keys) and concurrent edits without remote state locking cause state corruption.",
        "Because HashiCorp enforces a copyright restriction on state files.",
        "Git commits invalidate cloud provider credentials.",
      ],
      c: 1,
      a: "Terraform state contains sensitive resource attributes in plain text. Storing state in Git risks credential leakage and lacks the distributed locking mechanisms (e.g. DynamoDB/S3) needed for team collaboration.",
    },
    {
      q: "In an incident response lifecycle, what is the role of the Incident Commander (IC)?",
      options: [
        "To write all the code fixes while on the call.",
        "To lead the response, coordinate roles, delegate investigation tasks, maintain command hygiene, and ensure clear internal and external communication.",
        "To manage customer billing accounts.",
        "To assign blame to the developer who introduced the bug.",
      ],
      c: 1,
      a: "The Incident Commander maintains high-level situational awareness. They do not write code or tweak infrastructure directly; they coordinate operations, manage communications, and facilitate resolution.",
    },
    {
      q: "What is the core principle of a Blameless Postmortem?",
      options: [
        "To find out which engineer made the mistake and publicly reprimand them.",
        "To assume that engineers acted in good faith with the information available, focusing on system vulnerabilities, missing safeguards, and process improvements rather than personal fault.",
        "To delete all incident logs to avoid liability.",
        "To claim that the cloud provider was entirely responsible for the failure.",
      ],
      c: 1,
      a: "Blameless postmortems recognize that human error is a symptom of systemic flaws. The goal is discovering why the system permitted the failure and engineering automated safeguards to prevent recurrence.",
    },
    {
      q: "How does Course 1 (Cloud Computing) and Course 2 (DevOps + SRE) complement each other in this capstone?",
      options: [
        "Course 1 is for managers; Course 2 is for programmers.",
        "Course 1 provides foundational cloud architecture and infrastructure design; Course 2 provides the delivery automation, SRE reliability, and platform engineering needed to operate it reliably.",
        "Course 1 was theoretical; Course 2 completely replaces it.",
        "Course 1 focuses on hardware; Course 2 focuses on marketing.",
      ],
      c: 1,
      a: "Course 1 builds architectural understanding of distributed cloud systems (VPCs, compute, databases, IAM); Course 2 provides the engineering methodologies (IaC, GitOps, SRE, DevSecOps) to operate them in production.",
    },
    {
      q: "What is the final definition of success for the SRE/DevOps Capstone Project?",
      options: [
        "Deploying 50 different microservices using every available CNCF tool.",
        "Demonstrating an end-to-end deployable, observable, secured, and recoverable platform that can take a code change safely to production and recover gracefully when components fail.",
        "Passing a multiple-choice exam without writing any code.",
        "Running the entire system on a single laptop without cloud infrastructure.",
      ],
      c: 1,
      a: "Capstone success is demonstrating engineering judgment: taking source changes through testing and GitOps reconciliation, observing operational behavior, enforcing security gates, and proving resilience during failures.",
    },
    {
      q: "Why is an automated rollback mechanism essential when deploying canary releases?",
      options: [
        "Because Kubernetes deletes old container images after 5 minutes.",
        "To limit the blast radius of a faulty deployment by automatically reverting traffic to the stable version before users experience widespread service degradation.",
        "To avoid paying cloud data transfer costs.",
        "Because canary releases cannot be stopped manually.",
      ],
      c: 1,
      a: "Automated metric analysis in canary releases detects anomalies (increased error rates, latency spikes) and rolls back without waiting for human intervention, preserving the service error budget.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-16 left-1/3 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="capstone"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Capstone AI"
        />

        {/* HERO SECTION */}
        <div className="mt-8 rounded-3xl border border-stone-200/80 bg-white/90 p-6 sm:p-10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200/60 px-3 py-1 text-xs font-mono font-bold text-orange-700 mb-4">
                <Award size={14} />
                <span>Capstone Project • Production Engineering Defense</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
                Module 13 — Final SRE & DevOps Project
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                The comprehensive capstone integrating Linux, Git, Docker, Kubernetes, Terraform, CI/CD, GitOps,
                Observability, SRE, DevSecOps, Production Resilience, and Platform Engineering into a unified,
                production-grade application platform with live chaos testing and disaster recovery.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 text-center shrink-0">
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">7-Day</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Roadmap</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-orange-600">20-Pt</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Readiness Audit</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">100%</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Rubric Score</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-emerald-600">16</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Defense Qs</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI TUTOR DRAWER */}
        {showAiTutor && (
          <div className="mt-6 rounded-3xl border border-stone-800 bg-[#18181b] p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-400" />
                <h3 className="font-bold text-sm">Nova AI — Principal SRE & Capstone Architect</h3>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-stone-400 hover:text-white text-xs font-mono"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo
                defaultSubject="SRE & DevOps Capstone Defense"
                conceptName="End-to-End Platform Architecture, GitOps, Canary Analysis, Chaos Drills & Disaster Recovery"
              />
            </div>
          </div>
        )}

        {/* PRIMARY MODULE NAVIGATION TABS */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Capstone Blueprint", icon: BookOpen },
            { id: "architecture-lab", label: "Lab 1: Live Topology Simulator", icon: Network },
            { id: "gitops-lab", label: "Lab 2: Canary & Rollback", icon: GitPullRequest },
            { id: "incident-lab", label: "Lab 3: Incident & Postmortem", icon: Flame },
            { id: "rubric-audit", label: "20-Point Readiness Audit", icon: CheckCircle2 },
            { id: "synthesis", label: "Course 1 & 2 Synthesis Matrix", icon: Milestone },
            { id: "mastery", label: "16 Capstone Defense Qs", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-md"
                    : "bg-white/80 text-stone-600 hover:bg-stone-100 border border-stone-200/60"
                }`}
              >
                <Icon size={14} className={isActive ? "text-orange-400" : "text-stone-400"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* =================================================================== */}
        {/* TAB 1: CURRICULUM THEORY & BLUEPRINT                                */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* LEFT SIDEBAR: TOPIC LIST */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-400 px-2 block mb-3">
                Capstone Syllabus
              </span>
              {theoryTopics.map((topic, idx) => {
                const Icon = topic.icon;
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition flex items-start gap-3.5 ${
                      isSelected
                        ? "border-orange-500 bg-white shadow-sm ring-1 ring-orange-500"
                        : "border-stone-200/70 bg-white/70 hover:bg-white hover:border-stone-300"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        isSelected ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block">
                        {topic.tag}
                      </span>
                      <h3 className="font-bold text-stone-900 text-xs sm:text-sm mt-0.5 leading-snug">
                        {topic.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                        {topic.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT MAIN PANEL: SELECTED TOPIC CONTENT */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {theoryTopics[selectedTopic].tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      {theoryTopics[selectedTopic].title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      {theoryTopics[selectedTopic].subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      disabled={selectedTopic === 0}
                      onClick={() => setSelectedTopic(selectedTopic - 1)}
                      className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      disabled={selectedTopic === theoryTopics.length - 1}
                      onClick={() => setSelectedTopic(selectedTopic + 1)}
                      className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {theoryTopics[selectedTopic].content}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - LIVE TOPOLOGY & TELEMETRY SIMULATOR                 */}
        {/* =================================================================== */}
        {activeTab === "architecture-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Capstone Lab 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Live Microservices Topology & Telemetry Engine
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Inspect real-time telemetry across the deployed capstone platform. Simulate traffic surges and
                database latency to observe how the autoscaler, circuit breaker, and SLO alerting interact dynamically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CONTROLS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Platform Operating Conditions</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Incoming Traffic Load:</span>
                    <span className="text-orange-600">{systemLoadRps} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={systemLoadRps}
                    onChange={(e) => setSystemLoadRps(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Active API Pod Replicas:</span>
                    <span className="text-emerald-600">{activeReplicas} Pods (HPA 2-10)</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    value={activeReplicas}
                    onChange={(e) => setActiveReplicas(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1.5">
                    PostgreSQL Health State:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "healthy", label: "Healthy (5ms)" },
                      { id: "lagging", label: "Lagging (420ms)" },
                      { id: "exhausted", label: "Pool Max (Crash)" },
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setDbHealth(st.id)}
                        className={`p-2 rounded-xl border text-center text-xs font-bold transition ${
                          dbHealth === st.id
                            ? "border-orange-500 bg-orange-50/80 text-orange-950 font-bold"
                            : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${topologyTelemetry.sloColor}`}>
                  <strong className="block font-bold text-sm mb-1">
                    SLO Target: {topologyTelemetry.sloStatus}
                  </strong>
                  Availability SLI: <strong>{(100 - topologyTelemetry.errorRate).toFixed(2)}%</strong> • Latency p95: <strong>{topologyTelemetry.p95Latency} ms</strong>.
                </div>
              </div>

              {/* TOPOLOGY VISUALIZER */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Active Kubernetes Cluster Map</span>
                    <span className="text-emerald-400">Namespace: notes-prod</span>
                  </div>

                  <div className="mt-6 space-y-3 font-mono text-xs">
                    {/* INGRESS */}
                    <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe size={16} className="text-blue-400" />
                        <span>Ingress / ALB Gateway</span>
                      </div>
                      <span className="text-stone-400">{systemLoadRps} req/s</span>
                    </div>

                    {/* API PODS */}
                    <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server size={16} className="text-emerald-400" />
                        <span>Notes API Deployment ({activeReplicas} Replicas)</span>
                      </div>
                      <span className="text-emerald-400">CPU: {topologyTelemetry.cpuUtil}%</span>
                    </div>

                    {/* WORKER */}
                    <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Boxes size={16} className="text-purple-400" />
                        <span>Notes Worker (2 Replicas)</span>
                      </div>
                      <span className="text-purple-400">Queue Depth: {workerQueueDepth} jobs</span>
                    </div>

                    {/* POSTGRESQL */}
                    <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                      dbHealth === "exhausted"
                        ? "bg-rose-950/60 border-rose-800 text-rose-300"
                        : "bg-stone-900 border-stone-800 text-stone-200"
                    }`}>
                      <div className="flex items-center gap-2">
                        <Database size={16} className={dbHealth === "exhausted" ? "text-rose-400" : "text-orange-400"} />
                        <span>RDS PostgreSQL Standard (Multi-AZ)</span>
                      </div>
                      <span className="font-bold">{dbHealth.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Collector: OpenTelemetry agent-v0.98</span>
                  <span>Prometheus: Scraping every 15s</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - ARGO ROLLOUTS CANARY RELEASE & ROLLBACK              */}
        {/* =================================================================== */}
        {activeTab === "gitops-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Capstone Lab 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Argo Rollouts Progressive Delivery & Automated Rollback
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Release a new version of <code>notes-api</code> using canary routing. Test automated metric analysis
                and witness how Argo Rollouts aborts and reverts a faulty release in under 3 seconds without human intervention.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CONTROLS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Canary Deployment Controls</span>
                </h3>

                <div
                  onClick={() => setInjectFaultyCanary(!injectFaultyCanary)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                    injectFaultyCanary ? "border-rose-500 bg-rose-50/70" : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Deploy Faulty Release (HTTP 500 Spike)</span>
                    <span className="text-[11px] text-stone-500">Triggers automated rollback analysis</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${injectFaultyCanary ? "bg-rose-600 text-white" : "border border-stone-300"}`}>
                    {injectFaultyCanary && <Check size={14} />}
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    disabled={canaryStep > 0 && canaryStep < 4}
                    onClick={handleStartCanary}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 p-3 text-xs font-bold text-white shadow-sm hover:bg-orange-700 disabled:opacity-50 transition"
                  >
                    <Play size={14} />
                    <span>{canaryStep > 0 && canaryStep < 4 ? "Canary in Progress..." : "Deploy notes-api:v2.1.0"}</span>
                  </button>
                  <button
                    onClick={handleResetCanary}
                    className="p-3 rounded-xl border border-stone-300 bg-stone-100 text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>

                {/* VISUAL STEPS */}
                <div className="pt-4 border-t border-stone-200 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span>Progressive Canary Traffic:</span>
                    <strong className="text-orange-600">
                      {canaryStep === 0 && "0% (Stable v2.0.0)"}
                      {canaryStep === 1 && "10% Canary Weight"}
                      {canaryStep === 2 && "25% Canary Weight"}
                      {canaryStep === 3 && "50% Canary Weight"}
                      {canaryStep === 4 && "100% Promoted"}
                      {canaryStep === -1 && "ROLLED BACK TO v2.0.0"}
                    </strong>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        canaryStep === -1 ? "bg-rose-600 w-full" : "bg-emerald-600"
                      }`}
                      style={{
                        width: canaryStep === -1 ? "100%" : canaryStep === 4 ? "100%" : canaryStep === 3 ? "50%" : canaryStep === 2 ? "25%" : canaryStep === 1 ? "10%" : "0%",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* LOGS & STATUS */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Argo Rollouts Controller Stream</span>
                    <span className="text-orange-400">Rollout/notes-api</span>
                  </div>

                  <div className="mt-4 space-y-2 max-h-72 overflow-y-auto font-mono text-xs pr-1">
                    {canaryLogs.length === 0 ? (
                      <div className="text-stone-500 text-center py-10">
                        Rollout idle. Click "Deploy notes-api:v2.1.0" to initiate progressive canary.
                      </div>
                    ) : (
                      canaryLogs.map((log, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border ${
                            log.type === "error"
                              ? "bg-rose-950/60 border-rose-800 text-rose-300"
                              : log.type === "success"
                              ? "bg-emerald-950/60 border-emerald-800 text-emerald-300"
                              : "bg-stone-900 border-stone-800 text-stone-300"
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold mb-1 text-[11px]">
                            <span>{log.step}</span>
                          </div>
                          <p className="text-[11px] text-stone-300">{log.text}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Strategy: Canary with Prometheus Metric Analysis</span>
                  <span>Health: {canaryStep === -1 ? "ABORTED & REVERTED" : "HEALTHY"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - INCIDENT DRILL & POSTMORTEM GENERATOR                */}
        {/* =================================================================== */}
        {activeTab === "incident-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Capstone Lab 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Full-Scale Incident Response & Blameless Postmortem Drill
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Walk through a realistic high-severity production outage: database connection pool saturation
                causing API latency spikes and error budget burn. Triage, mitigate, and generate an auditable postmortem.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* STAGES */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
                <h3 className="font-bold text-stone-900 text-sm">Incident Command Timeline</h3>

                <div className="space-y-2 text-xs font-mono">
                  {[
                    { s: 0, title: "1. Baseline (Normal Traffic)", desc: "p95: 45ms, 0 errors, full budget" },
                    { s: 1, title: "2. Detection (Burn Alert)", desc: "Multi-window burn rate = 14.4x! PagerDuty fires." },
                    { s: 2, title: "3. Triage (Roles Assigned)", desc: "IC appointed; Ops Lead inspects DB pool." },
                    { s: 3, title: "4. Mitigation (Rollback & Pool Drain)", desc: "Canary aborted, connection pool expanded." },
                    { s: 4, title: "5. Resolution & Recovery", desc: "p95 recovers to 46ms, errors drop to 0." },
                    { s: 5, title: "6. Blameless Postmortem", desc: "5-Whys analyzed, action items assigned." },
                  ].map((st) => (
                    <button
                      key={st.s}
                      onClick={() => setIncidentStage(st.s)}
                      className={`w-full text-left p-3 rounded-xl border transition ${
                        incidentStage === st.s
                          ? "border-orange-500 bg-orange-50/80 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50/60 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      <span className="block font-bold">{st.title}</span>
                      <span className="text-[10px] text-stone-500">{st.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* INCIDENT DETAILS & POSTMORTEM */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Incident Stage: {incidentStage + 1} / 6</span>
                    <span className="text-orange-400">Severity: SEV-1 (Production Outage)</span>
                  </div>

                  {incidentStage === 0 && (
                    <div className="py-8 text-center text-xs font-mono text-stone-400 space-y-2">
                      <p>System operating normally under 99.9% availability SLO.</p>
                      <button
                        onClick={() => setIncidentStage(1)}
                        className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs"
                      >
                        Trigger Production Outage Scenario
                      </button>
                    </div>
                  )}

                  {incidentStage === 1 && (
                    <div className="py-4 space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300">
                        <strong className="block mb-1">🚨 PagerDuty High-Priority Incident #48291</strong>
                        Alert: MultiWindowMultiBurnRateAlert firing on notes-api. 2% error budget consumed in 1 hour.
                      </div>
                      <p className="text-stone-300">
                        Symptoms: API latency p95 surged from 45ms to 1,950ms. HTTP 504 Gateway Timeouts at Ingress.
                      </p>
                      <button
                        onClick={() => setIncidentStage(2)}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white font-bold"
                      >
                        Appoint Incident Commander & Start Triage →
                      </button>
                    </div>
                  )}

                  {incidentStage === 2 && (
                    <div className="py-4 space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                        <strong className="text-orange-400 block mb-1">Triage Findings (Incident Commander):</strong>
                        OpenTelemetry traces show 98% of duration spent inside <code className="text-stone-200">pg_connect()</code> waiting for available connection pool slots.
                      </div>
                      <button
                        onClick={() => setIncidentStage(3)}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white font-bold"
                      >
                        Execute Immediate Mitigation →
                      </button>
                    </div>
                  )}

                  {incidentStage === 3 && (
                    <div className="py-4 space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                        <strong className="block mb-1">Mitigation Executed:</strong>
                        1. Halted faulty canary rollout v2.1.0.<br />
                        2. Enabled PgBouncer connection pooler.<br />
                        3. Scaled backend API pods down to 4 to release leaked connections.
                      </div>
                      <button
                        onClick={() => setIncidentStage(4)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold"
                      >
                        Verify System Recovery →
                      </button>
                    </div>
                  )}

                  {incidentStage === 4 && (
                    <div className="py-4 space-y-3 text-xs font-mono">
                      <p className="text-emerald-400 font-bold">System Fully Recovered (0 Errors, p95: 46ms).</p>
                      <button
                        onClick={() => setIncidentStage(5)}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white font-bold"
                      >
                        Generate Blameless Postmortem Report →
                      </button>
                    </div>
                  )}

                  {incidentStage === 5 && (
                    <div className="py-2 space-y-3 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 space-y-2 text-stone-300">
                        <strong className="text-white block font-bold">Blameless Postmortem • Incident #48291</strong>
                        <p><strong>Root Cause:</strong> Unclosed SQLAlchemy cursor in new note export feature exhausted PostgreSQL connections.</p>
                        <p><strong>Contributing Factor:</strong> Missing statement_timeout and lack of connection pool limits per pod.</p>
                        <p><strong>Action Items:</strong></p>
                        <ul className="list-disc pl-4 space-y-0.5 text-stone-400">
                          <li>[P0] Add connection pool sizing formula to HPA admission webhook (Owner: SRE).</li>
                          <li>[P1] Deploy PgBouncer in front of RDS PostgreSQL (Owner: Platform).</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Google SRE Incident Lifecycle Standard</span>
                  <span>Status: {incidentStage === 5 ? "RESOLVED & POSTMORTEM FILED" : "ACTIVE EXERCISE"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: 20-POINT CAPSTONE READINESS AUDIT CHECKLIST                 */}
        {/* =================================================================== */}
        {activeTab === "rubric-audit" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Section 12 Readiness Standard
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    20-Point Final Capstone Readiness Checklist
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
                    Verify all 20 non-negotiable operational requirements before defending your capstone project.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3 bg-stone-50 border border-stone-200 px-4 py-3 rounded-2xl">
                  <Trophy size={20} className="text-orange-600" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-stone-900">
                      Readiness Score: {readinessScore} / 20
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">
                      {readinessScore === 20 ? "100% Certified Defense-Ready" : "Pending Verifications"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: "tfReviewedPlan", label: "1. Terraform Modularized with Reviewed Plan/Apply", desc: "No state files in Git; remote state locking enabled." },
                { id: "threeWorkloads", label: "2. Three Separate Workloads: API, Worker & CronJob", desc: "Distinct scaling, lifecycle, and concurrency policies." },
                { id: "probesAndLimits", label: "3. Probes, Resources & Graceful Draining", desc: "Readiness/liveness probes and preStop sleep 5s." },
                { id: "hpaTested", label: "4. HPA v2 Autoscaling Tested Under Load", desc: "Demonstrated horizontal pod autoscaling within safe limits." },
                { id: "ciGatesEnforced", label: "5. Automated Pull Request Security Gates", desc: "SAST Bandit, pip-audit SCA, and unit tests block invalid PRs." },
                { id: "imageDigestRefs", label: "6. Immutable Digest References (@sha256:...)", desc: "Zero deployments using mutable tags like :latest." },
                { id: "argoCdSync", label: "7. Argo CD Declarative GitOps Sync Loop", desc: "Cluster reconciled directly from Git configuration repo." },
                { id: "rollbackTested", label: "8. Tested Canary & Automated Rollback", desc: "Rollouts automated abort verified during failure drill." },
                { id: "metricsLogsTraces", label: "9. Unified Prometheus, Logs & OpenTelemetry", desc: "Distributed trace spans linking API down to database." },
                { id: "slosDefined", label: "10. Documented SLIs/SLOs (99.9% Availability)", desc: "Measurable latency p95 and error budget burn calculation." },
                { id: "alertsRunbooks", label: "11. Actionable Multi-Window Alerts with Runbooks", desc: "Every PagerDuty alert links directly to a living runbook." },
                { id: "postmortemDrill", label: "12. Incident Management & Blameless Postmortem", desc: "Documented triage exercise with root-cause analysis." },
                { id: "leastPrivilegeIam", label: "13. Least-Privilege IAM & OIDC Federation", desc: "Zero permanent cloud root keys; short-lived OIDC." },
                { id: "supplyChainVerified", label: "14. Syft SBOM & Sigstore Cosign Signature", desc: "Admission controllers reject unsigned container images." },
                { id: "drRestoreTested", label: "15. Tested Database Restore Drill", desc: "Snapshot restoration verified in isolated environment." },
                { id: "rtoRpoDocumented", label: "16. Explicit Documented RTO & RPO", desc: "RTO: 1 hour, RPO: 15 minutes proven by drill records." },
                { id: "architectureDocs", label: "17. Architecture & System Flow Diagrams", desc: "Documented component relationships and dependencies." },
                { id: "versionControlled", label: "18. 100% Version-Controlled Configuration", desc: "Zero manual kubectl or cloud console modifications." },
                { id: "costAwareness", label: "19. Documented Cloud Cost & Teardown Scripts", desc: "Automated scripts to tear down resources cleanly." },
                { id: "reproduciblePath", label: "20. Reproducible by an Independent Reviewer", desc: "Step-by-step instructions allow a peer to deploy." },
              ].map((item) => {
                const isChecked = readinessChecks[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleReadinessCheck(item.id)}
                    className={`cursor-pointer rounded-2xl border p-4 transition flex items-start gap-3.5 ${
                      isChecked
                        ? "border-emerald-500 bg-emerald-50/60 shadow-sm"
                        : "border-stone-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md shrink-0 flex items-center justify-center transition mt-0.5 ${
                        isChecked ? "bg-emerald-600 text-white" : "border border-stone-300 bg-stone-50"
                      }`}
                    >
                      {isChecked && <Check size={14} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs sm:text-sm leading-snug">
                        {item.label}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 6: COURSE 1 & 2 SYNTHESIS MATRIX                                */}
        {/* =================================================================== */}
        {activeTab === "synthesis" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Curriculum Integration Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                How Course 1 (Cloud) & Course 2 (DevOps) Fit Together
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Course 1 establishes the distributed architectural foundation; Course 2 provides the automation,
                security, reliability, and platform engineering needed to operate it as a resilient system.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400">
                    <th className="pb-3">Domain</th>
                    <th className="pb-3 text-orange-600">Course 1: Cloud Computing (Architecture)</th>
                    <th className="pb-3 text-blue-600">Course 2: DevOps + SRE (Operation)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  <tr>
                    <td className="py-3 font-bold">Compute & Containers</td>
                    <td className="py-3">EC2, VMs, ECS, Serverless Lambda architectures.</td>
                    <td className="py-3">Docker multi-stage, Kubernetes Pod Security, HPA v2.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">Networking</td>
                    <td className="py-3">VPCs, Subnets, Route Tables, Transit Gateways.</td>
                    <td className="py-3">Kubernetes NetworkPolicies, Ingress, DNS, Envoy mesh.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">Databases & Storage</td>
                    <td className="py-3">RDS, DynamoDB, Spanner, S3 bucket storage.</td>
                    <td className="py-3">Expand/Contract migrations, WAL backups, RTO/RPO drills.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">Infrastructure as Code</td>
                    <td className="py-3">CloudFormation & Terraform core concepts.</td>
                    <td className="py-3">Modularized Terraform, remote locking, CI plan/apply.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">Delivery & Releases</td>
                    <td className="py-3">Basic deployment models (Rolling vs Recreate).</td>
                    <td className="py-3">GitHub Actions CI, Argo CD GitOps, Argo Rollouts canary.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">Observability & SRE</td>
                    <td className="py-3">CloudWatch metrics and alarm concepts.</td>
                    <td className="py-3">Prometheus RED, OTel distributed traces, SLI/SLO burn.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">Security & Identity</td>
                    <td className="py-3">IAM policies, KMS encryption, Zero Trust concepts.</td>
                    <td className="py-3">OIDC federated CI, Trivy, Syft SBOM, Cosign signing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 7: 16 CAPSTONE DEFENSE MASTERY QUESTIONS                        */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="mt-8 space-y-6 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Production Certification
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Capstone Defense Mastery Assessment
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Defend your architectural and operational choices across Terraform, Kubernetes, GitOps,
                Observability, SRE, DevSecOps, and Disaster Recovery.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, qIdx) => {
                const isOpen = openMasteryIndex === qIdx;
                return (
                  <div
                    key={qIdx}
                    className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition"
                  >
                    <div
                      onClick={() => setOpenMasteryIndex(isOpen ? null : qIdx)}
                      className="cursor-pointer flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200 shrink-0">
                          Q{qIdx + 1}
                        </span>
                        <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                          {mq.q}
                        </h4>
                      </div>
                      <div className="text-stone-400 hover:text-stone-700 shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    {isOpen && (
                      <div className="mt-5 pt-4 border-t border-stone-100 space-y-4">
                        <div className="space-y-2">
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-3 rounded-xl border text-xs sm:text-sm font-mono flex items-start gap-3 ${
                                oIdx === mq.c
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                                  : "bg-stone-50/70 border-stone-200 text-stone-700"
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs ${
                                  oIdx === mq.c
                                    ? "bg-emerald-600 text-white font-bold"
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
              Course 2 Complete • All 13 Modules Finished
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              DevOps, SRE & Platform Engineering Track Complete!
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              Congratulations! You have mastered the complete DevOps & SRE discipline from Linux administration
              to Git, Docker, Kubernetes, Terraform, GitOps, Observability, SRE, Production Reliability, DevSecOps,
              Platform Engineering, and the Final Production Capstone.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/platform")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 12: Platform Engineering
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Back to Main Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
