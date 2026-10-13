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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsPlatform() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'scaffold-lab' | 'catalog-lab' | 'api-lab' | 'devex-lab' | 'failure-drills' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // =========================================================================
  // SIMULATOR 1: GOLDEN PATH SERVICE SCAFFOLDER ENGINE
  // Scaffolds a complete production-ready repository from standard templates
  // =========================================================================
  const [serviceName, setServiceName] = useState("notes-api");
  const [owningTeam, setOwningTeam] = useState("team-notes");
  const [runtimeLanguage, setRuntimeLanguage] = useState("python"); // 'python' | 'go' | 'node'
  const [includeDatabase, setIncludeDatabase] = useState(true);
  const [targetEnv, setTargetEnv] = useState("staging");
  const [scaffoldingStatus, setScaffoldingStatus] = useState("idle"); // 'idle' | 'generating' | 'completed'

  const handleScaffoldRepository = () => {
    setScaffoldingStatus("generating");
    setTimeout(() => {
      setScaffoldingStatus("completed");
    }, 1200);
  };

  const generatedFiles = useMemo(() => {
    return [
      { name: "catalog-info.yaml", type: "metadata", desc: "Backstage Software Catalog registration" },
      { name: "app/main.py", type: "code", desc: "Standard Flask/FastAPI service boilerplate" },
      { name: "Dockerfile", type: "container", desc: "Multi-stage non-root hardened build" },
      { name: ".github/workflows/ci.yml", type: "cicd", desc: "Inherited SAST, Trivy & Cosign pipeline" },
      { name: "deploy/base/kustomization.yaml", type: "k8s", desc: "Kustomize Kubernetes base deployment" },
      { name: `deploy/overlays/${targetEnv}/kustomization.yaml`, type: "k8s", desc: "Argo CD GitOps deployment overlay" },
      { name: "docs/runbook.md", type: "docs", desc: "On-call troubleshooting & escalation runbook" },
      ...(includeDatabase ? [{ name: "terraform/db.tf", type: "iac", desc: "PostgreSQL Crossplane/IaC definition" }] : []),
    ];
  }, [targetEnv, includeDatabase]);

  // =========================================================================
  // SIMULATOR 2: BACKSTAGE SOFTWARE CATALOG EXPLORER
  // =========================================================================
  const [catalogFilter, setCatalogFilter] = useState("all");
  const [selectedCatalogItem, setSelectedCatalogItem] = useState(0);

  const catalogItems = [
    {
      name: "notes-api",
      kind: "Component",
      type: "service",
      owner: "team-notes",
      lifecycle: "production",
      system: "notes-platform",
      description: "Core RESTful notes management API with PostgreSQL storage",
      repo: "github.com/my-org/notes-api",
      apis: ["notes-api-v2"],
      dependsOn: ["postgres-cluster", "redis-cache"],
    },
    {
      name: "notes-worker",
      kind: "Component",
      type: "service",
      owner: "team-notes",
      lifecycle: "production",
      system: "notes-platform",
      description: "Asynchronous background PDF report and thumbnail exporter",
      repo: "github.com/my-org/notes-worker",
      apis: [],
      dependsOn: ["rabbitmq-cluster", "s3-storage"],
    },
    {
      name: "auth-gateway",
      kind: "Component",
      type: "service",
      owner: "team-core",
      lifecycle: "production",
      system: "identity-platform",
      description: "OAuth2/OIDC token verification and user authentication gateway",
      repo: "github.com/my-org/auth-gateway",
      apis: ["auth-v1"],
      dependsOn: ["vault-cluster"],
    },
    {
      name: "notes-preview-svc",
      kind: "Component",
      type: "service",
      owner: "team-media",
      lifecycle: "staging",
      system: "notes-platform",
      description: "Optional rich link preview and markdown rendering microservice",
      repo: "github.com/my-org/notes-preview-svc",
      apis: ["preview-v1"],
      dependsOn: [],
    },
  ];

  const filteredCatalog = useMemo(() => {
    if (catalogFilter === "all") return catalogItems;
    return catalogItems.filter((item) => item.owner === catalogFilter);
  }, [catalogFilter]);

  // =========================================================================
  // SIMULATOR 3: PLATFORM API ABSTRACTION VS RAW TERRAFORM COMPARATOR
  // =========================================================================
  const [enableCache, setEnableCache] = useState(false);
  const [enableHighAvailability, setEnableHighAvailability] = useState(false);

  // =========================================================================
  // SIMULATOR 4: DEVEX & ROI IMPACT CALCULATOR
  // =========================================================================
  const [developerCount, setDeveloperCount] = useState(80);
  const [newServicesPerYear, setNewServicesPerYear] = useState(36);
  const [hourlyDevCost, setHourlyDevCost] = useState(90);

  const devexMetrics = useMemo(() => {
    const hoursSavedPerService = 79;
    const totalHoursSaved = newServicesPerYear * hoursSavedPerService;
    const annualDollarSavings = totalHoursSaved * hourlyDevCost;
    const timeToFirstDeployDays = { ticketOps: "14 Days", goldenPath: "15 Minutes" };

    return {
      hoursSavedPerService,
      totalHoursSaved,
      annualDollarSavings,
      timeToFirstDeployDays,
      velocityMultiplier: "4.8x Faster Onboarding",
    };
  }, [developerCount, newServicesPerYear, hourlyDevCost]);

  // =========================================================================
  // 7 FAILURE AND DESIGN VALIDATION DRILLS (SECTION 16)
  // =========================================================================
  const [drillChecks, setDrillChecks] = useState({
    unauthRequest: false,
    invalidMetadata: false,
    ciTemplateFail: false,
    gitopsError: false,
    unsafeOption: false,
    componentOutage: false,
    usabilityAudit: false,
  });

  const drillChecksCompleted = Object.values(drillChecks).filter(Boolean).length;

  const toggleDrillCheck = (key) => {
    setDrillChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // =========================================================================
  // THEORY CURRICULUM TOPICS (8 DEEP-DIVE SECTIONS)
  // =========================================================================
  const theoryTopics = [
    {
      id: "emergence",
      title: "1. From DevOps to Platform Engineering",
      subtitle: "Why ticket ops broke and how Platform Engineering scales shared practices",
      icon: Compass,
      tag: "Evolution",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            <strong>Platform Engineering</strong> is not a replacement for DevOps. It is the discipline of scaling
            DevOps practices across growing engineering organizations. As cloud native architectures expanded to include
            Kubernetes, Terraform, Service Meshes, OIDC, Trivy, Cosign, and Argo CD, expecting every application developer
            to become a full-time infrastructure specialist created crippling <strong>cognitive overload</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-rose-700 uppercase">The Old Way</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Ticket Ops & Cognitive Saturation</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Developers file Jira tickets to specialist teams: cloud team for VPCs, DBA team for databases,
                security team for secrets, platform team for Kubernetes namespaces. Weeks are spent waiting in queues
                for predictable, repetitive infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-700 uppercase">The Platform Way</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Self-Service Golden Paths</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                A dedicated platform team packages operational expertise into supported, automated self-service APIs
                and templates. Developers provision approved infrastructure independently in minutes while organizational
                guardrails remain strictly enforced.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-3">
              Team Topologies Interaction Models
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <strong className="text-emerald-400 block mb-1">Stream-Aligned Teams</strong>
                Feature developers delivering user value directly. Consumers of the platform.
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <strong className="text-orange-400 block mb-1">Platform Team</strong>
                Treats infrastructure as an internal product. Builds golden paths and self-service APIs.
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <strong className="text-blue-400 block mb-1">Enabling Teams</strong>
                Specialists (SRE, Security) upskilling stream-aligned teams on emerging standards.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "idp-vs-portal",
      title: "2. Understanding the Internal Developer Platform (IDP)",
      subtitle: "Why a developer portal like Backstage is the front door, not the entire building",
      icon: LayoutGrid,
      tag: "Architecture",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A critical misconception is equating a <strong>developer portal</strong> (such as Spotify's Backstage)
            with the entire <strong>Internal Developer Platform (IDP)</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Developer Portal (The Front Door)</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Discovery, UI & Catalog</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                The user-facing pane of glass where developers discover existing services, view documentation (TechDocs),
                inspect ownership, and kick off software templates. <em>Example: Backstage UI.</em>
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase">Internal Developer Platform (The Building)</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Engines, APIs & Reconciliation</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                The comprehensive underlying machinery: Crossplane control planes, Terraform modules, GitHub Actions workflows,
                Argo CD GitOps controllers, Vault secrets, and Kubernetes clusters.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm">
            <h4 className="font-bold text-amber-950 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-700" />
              The Empty Portal Trap
            </h4>
            <p className="text-xs text-stone-800 leading-relaxed">
              Deploying Backstage and having its buttons open Jira tickets to the DevOps team is not platform engineering.
              A portal without underlying self-service automation is merely a catalog of manual bottlenecks. Real IDPs
              execute end-to-end reconciliation autonomously.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "golden-paths",
      title: "3. Golden Paths: Making the Right Way the Easiest Way",
      subtitle: "Supported, opinionated templates that remove cognitive friction without trapping teams",
      icon: Workflow,
      tag: "Developer Experience",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A <strong>Golden Path</strong> is a supported, documented, and automated workflow for completing a recurring
            engineering task. It embodies the organization's best practices by default.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-3">
              Standard Anatomy of a Golden Path Repository
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">catalog-info.yaml</span>
                Registers service name, owning team, runbook URL, and API contracts into Backstage.
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">.github/workflows/ci.yml</span>
                Inherits hardened organization workflows: SAST (Bandit), Trivy, Syft SBOM, and Cosign.
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">deploy/overlays/</span>
                Kustomize manifests ready for Argo CD GitOps synchronization across staging and production.
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">docs/runbook.md</span>
                Living troubleshooting guide with Prometheus alert queries and escalation paths.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-stone-900 text-sm mb-2">Golden Paths as Maintained Products</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              A template is not "fire-and-forget". If an unpatched CVE emerges or Kubernetes deprecates an API version,
              the platform team must provide automated migration PRs or maintained base images. Golden paths must be treated
              with the same lifecycle rigor as customer-facing SaaS products.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "software-catalog",
      title: "4. Backstage Software Catalog & Service Ownership",
      subtitle: "Eliminating orphaned services and establishing clear operational accountability",
      icon: Boxes,
      tag: "Service Registry",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            During an incident at 2:00 AM, the first question is rarely "What code changed?" but rather:
            <strong> Who owns this service, where is the runbook, and what are its upstream dependencies?</strong>
            The Backstage Software Catalog answers this definitively through version-controlled <code className="font-mono text-orange-600">catalog-info.yaml</code> files.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <FileCode size={14} className="text-orange-400" />
                <span>catalog-info.yaml • Declarative Service Ownership</span>
              </div>
              <button
                onClick={() =>
                  handleCopyCode(
                    "catalog-info-code",
                    `apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: notes-api\n  description: RESTful notes management microservice\n  annotations:\n    github.com/project-slug: my-org/notes-api\n    backstage.io/techdocs-ref: dir:.\nspec:\n  type: service\n  lifecycle: production\n  owner: team-notes\n  system: notes-platform\n  providesApis:\n    - notes-api-v2\n  dependsOn:\n    - resource:postgres-cluster\n    - component:auth-gateway`
                  )
                }
                className="flex items-center gap-1 text-stone-400 hover:text-white transition"
              >
                <Copy size={12} />
                <span>{copiedCodeId === "catalog-info-code" ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <pre className="mt-4 font-mono text-xs sm:text-sm text-stone-200 leading-relaxed overflow-x-auto">
{`apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: notes-api
  description: RESTful notes management microservice
  annotations:
    github.com/project-slug: my-org/notes-api
    backstage.io/techdocs-ref: dir:.
spec:
  type: service
  lifecycle: production
  owner: team-notes
  system: notes-platform
  providesApis:
    - notes-api-v2
  dependsOn:
    - resource:postgres-cluster
    - component:auth-gateway`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "platform-apis",
      title: "5. Platform APIs & Control Planes (Crossplane)",
      subtitle: "Exposing business capabilities rather than raw infrastructure complexity",
      icon: Terminal,
      tag: "Platform APIs",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Kubernetes is the orchestrator, not the developer interface. Asking application developers to write
            raw Kubernetes Ingress objects, NetworkPolicies, and Terraform VPC configurations exposes unnecessary complexity.
            A <strong>Platform API</strong> (built via Kubernetes CRDs or Crossplane Compositions) exposes high-level capabilities.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-3">
              Developer Intent vs. Underlying Platform Implementation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-emerald-400 font-bold block mb-1">Developer Writes: WebServiceRequest</span>
                <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`apiVersion: platform.myorg.io/v1
kind: WebServiceRequest
metadata:
  name: notes-api
spec:
  runtime: python
  tier: standard
  database:
    engine: postgres
    version: "16"
  scaling:
    minReplicas: 2
    maxReplicas: 8`}
                </pre>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">Platform Reconciles Automatically:</span>
                <ul className="text-stone-400 space-y-1 mt-2">
                  <li>✔ AWS RDS PostgreSQL + Private Subnet Group</li>
                  <li>✔ AWS IAM Role for ServiceAccount (IRSA)</li>
                  <li>✔ Kubernetes Deployment + HPA autoscaling/v2</li>
                  <li>✔ Pod Disruption Budget (minAvailable: 1)</li>
                  <li>✔ NetworkPolicy (restricts egress to DB port)</li>
                  <li>✔ Prometheus ServiceMonitor & AlertRules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "gitops-delivery",
      title: "6. GitOps as the Platform Delivery Engine",
      subtitle: "Connecting developer requests to automated cluster state via Argo CD",
      icon: GitPullRequest,
      tag: "Continuous Delivery",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            GitOps serves as the backbone of the platform delivery pipeline. When a developer scaffolds a new service
            or CI publishes an image digest, the platform does not execute raw <code className="font-mono">kubectl apply</code> commands.
            Instead, it submits a pull request to a central GitOps configuration repository.
          </p>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-stone-900 text-sm mb-3">The Platform GitOps Loop</h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-orange-600 font-bold text-white shrink-0">1. Build</span>
                <span>GitHub Actions builds image, signs digest with Cosign, and opens PR to config repo.</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-orange-600 font-bold text-white shrink-0">2. Review</span>
                <span>Automated policy checks verify image signature and test coverage before auto-merging.</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-emerald-600 font-bold text-white shrink-0">3. Sync</span>
                <span>Argo CD detects Git revision change, synchronizes manifest, and verifies cluster health.</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "devex-metrics",
      title: "7. Developer Experience (DevEx) & Platform Metrics",
      subtitle: "Measuring platform adoption, lead time, and developer satisfaction like a product",
      icon: BarChart3,
      tag: "Product Metrics",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A platform team must treat infrastructure as a product and measure outcomes, not tool installations.
            The goal is reducing <strong>Time to Value</strong> while maintaining organizational governance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="block text-2xl font-black text-stone-900">15m</span>
              <span className="text-[11px] font-mono text-stone-500 uppercase">Time to 1st Deploy</span>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="block text-2xl font-black text-emerald-600">94%</span>
              <span className="text-[11px] font-mono text-stone-500 uppercase">Self-Service Rate</span>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="block text-2xl font-black text-orange-600">85%</span>
              <span className="text-[11px] font-mono text-stone-500 uppercase">Golden Path Adoption</span>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="block text-2xl font-black text-stone-900">-70%</span>
              <span className="text-[11px] font-mono text-stone-500 uppercase">Support Tickets</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "mini-idp-notes",
      title: "8. Practical Project: The Notes API Mini-IDP",
      subtitle: "Connecting Backstage, GitHub Actions, Terraform, Kubernetes, and Argo CD",
      icon: Package,
      tag: "Capstone Project",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            For the platform capstone project, you assemble a working mini-platform for the Notes API.
            The developer fills out one form in Backstage and receives an end-to-end working ecosystem:
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-3">
              End-to-End Self-Service Fulfillment
            </h4>
            <div className="space-y-2 text-xs font-mono text-stone-300">
              <p>✔ <strong>Scaffold:</strong> Creates GitHub repo with Python code, tests, and catalog-info.yaml.</p>
              <p>✔ <strong>CI/CD:</strong> Configures GitHub Actions with SAST (Bandit), Trivy, Syft, and Cosign.</p>
              <p>✔ <strong>GitOps:</strong> Generates Argo CD Application pointing to staging cluster overlay.</p>
              <p>✔ <strong>Observability:</strong> Pre-wires Prometheus metrics endpoint (<code className="text-orange-400">/metrics</code>) and Grafana dashboard.</p>
              <p>✔ <strong>Runbook:</strong> Links on-call escalation rotation and troubleshooting procedures.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // =========================================================================
  // 15 MASTERY ASSESSMENT QUESTIONS (SECTION 18)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "Why is Platform Engineering described as a discipline that complements DevOps rather than replaces it?",
      options: [
        "Platform Engineering is designed only for legacy mainframe applications.",
        "It provides standardized, self-service infrastructure workflows that scale DevOps practices across large teams without cognitive overload.",
        "DevOps was formally deprecated by the CNCF in 2024.",
        "Platform Engineering replaces all automated testing with manual reviews.",
      ],
      c: 1,
      a: "DevOps establishes the cultural values of collaboration and shared ownership; Platform Engineering provides the internal product, tooling, and self-service interfaces that make those practices manageable across hundreds of developers.",
    },
    {
      q: "What is the primary architectural difference between an Internal Developer Platform (IDP) and a Developer Portal (e.g. Backstage)?",
      options: [
        "An IDP is written in React, while Backstage is written in Python.",
        "The developer portal is the frontend discovery UI and catalog; the IDP is the full underlying system of automation, platform APIs, infrastructure, and delivery pipelines.",
        "There is no difference; they are synonymous vendor buzzwords.",
        "Developer portals only work on bare-metal servers.",
      ],
      c: 1,
      a: "Backstage is the 'front door' providing the service catalog, templates UI, and documentation. The IDP encompasses the underlying control planes (Crossplane, Terraform, Argo CD, Kubernetes) that execute the actual automation.",
    },
    {
      q: "What is the primary purpose of a 'Golden Path' in an engineering organization?",
      options: [
        "To force all developers to write code exclusively in JavaScript.",
        "To provide a supported, documented, and automated self-service path for common tasks that makes the secure and reliable way the easiest way.",
        "To prevent developers from pushing code on weekends.",
        "To replace cloud infrastructure with local SQLite databases.",
      ],
      c: 1,
      a: "Golden paths remove friction by providing well-architected, maintained defaults for common tasks (e.g. building a standard microservice), reducing cognitive load while allowing documented escape hatches for special requirements.",
    },
    {
      q: "Why must golden paths be treated and maintained like internal products?",
      options: [
        "Because templates become outdated as base images, dependencies, and cloud APIs evolve, requiring active maintenance and upgrades.",
        "So that the platform team can sell subscriptions to internal developers.",
        "To satisfy quarterly financial accounting audits.",
        "Because Kubernetes requires templates to be refreshed every 24 hours.",
      ],
      c: 0,
      a: "Unmaintained templates become liabilities harboring outdated dependencies and insecure settings. Platform teams must version templates, test them continuously, and support team migrations.",
    },
    {
      q: "What critical service information is captured in a Backstage catalog-info.yaml file?",
      options: [
        "Only the developer's home Wi-Fi password.",
        "Service metadata including component name, owning team, lifecycle status, API contracts, upstream dependencies, and runbook links.",
        "The complete binary machine code of the application.",
        "The monthly credit card billing statements of the cloud provider.",
      ],
      c: 1,
      a: "Catalog-info.yaml records vital operational metadata: ownership, system boundaries, lifecycle tier, API specifications, and documentation links, eliminating orphaned services during outages.",
    },
    {
      q: "How does a Platform API (e.g. via Crossplane or Kubernetes CRDs) differ from exposing raw Terraform variables to developers?",
      options: [
        "Platform APIs hide low-level provider variables behind high-level business capabilities (e.g. WebServiceRequest) with built-in guardrails.",
        "Terraform variables are encrypted; Platform APIs are unencrypted.",
        "Platform APIs require zero cloud resources to run.",
        "Raw Terraform variables are strictly prohibited by the Linux kernel.",
      ],
      c: 0,
      a: "Exposing raw Terraform exposes hundreds of low-level parameters (CIDR blocks, IAM policies) that burden developers. Platform APIs offer higher-level abstractions that enforce organizational security and cost policies.",
    },
    {
      q: "Why does deploying raw Kubernetes clusters alone NOT constitute a complete developer platform?",
      options: [
        "Kubernetes cannot run Python or Node.js applications.",
        "Without platform abstraction, developers must still master ingress, network policies, service accounts, resource limits, and secrets management.",
        "Kubernetes requires Windows Server to function.",
        "Kubernetes is only an operating system kernel.",
      ],
      c: 1,
      a: "Kubernetes is an orchestration engine. Expecting every product developer to configure complex YAML manifests, RBAC, and networking leaves the cognitive burden unresolved.",
    },
    {
      q: "What role does GitOps (e.g. Argo CD) play within an Internal Developer Platform architecture?",
      options: [
        "It compiles Python source code into native binary executables.",
        "It acts as the declarative delivery engine, reconciling desired infrastructure and application state from Git without direct cluster access.",
        "It replaces the need for a container registry.",
        "It monitors developer keystrokes for productivity tracking.",
      ],
      c: 1,
      a: "GitOps provides an auditable, declarative delivery mechanism where platform automation and CI push verified changes to Git, and Argo CD automatically reconciles them into the cluster.",
    },
    {
      q: "How can a platform team balance developer self-service with organizational security and least privilege?",
      options: [
        "By granting all developers cloud AdministratorAccess.",
        "By using scoped platform APIs and service templates with pre-approved instance sizes, regions, and guardrails, requiring approvals only for high-risk actions.",
        "By requiring every pull request to be signed by the CEO.",
        "By disabling all cloud networking firewalls.",
      ],
      c: 1,
      a: "Self-service does not mean unrestricted access. The platform exposes a safe perimeter of approved configurations and automated policies, allowing instant provisioning for standard tasks while routing deviations through approvals.",
    },
    {
      q: "What is the primary danger of building an elaborate developer portal before interviewing developers and understanding their bottlenecks?",
      options: [
        "Building sophisticated tools that fail to solve actual developer pain points, leading to low platform adoption and wasted investment.",
        "Overheating the data center servers.",
        "Violating open-source licensing agreements.",
        "Causing git merge conflicts on feature branches.",
      ],
      c: 0,
      a: "A platform is a product. Building features without user research often results in complex portals that developers bypass because the underlying friction (e.g. slow approvals, unclear runbooks) remains unaddressed.",
    },
    {
      q: "Which metric best reflects whether an Internal Developer Platform is genuinely delivering effective self-service?",
      options: [
        "The number of YAML files in the repository.",
        "Self-service completion rate and provisioning lead time (completing workflows without filing manual support tickets).",
        "The total lines of code written by the platform engineers.",
        "The number of Slack channels created by the team.",
      ],
      c: 1,
      a: "Genuine self-service is proven when developers independently complete their tasks (e.g. spinning up a new service) in minutes with high completion rates and without human ticket intervention.",
    },
    {
      q: "In Team Topologies, what is the primary objective of a Platform Team?",
      options: [
        "To complete all bug fixes for stream-aligned feature teams.",
        "To enable stream-aligned teams to deliver work autonomously by providing a compelling, easy-to-use internal product.",
        "To manage the company's human resources payroll software.",
        "To act as a gatekeeper approving all production deployments manually.",
      ],
      c: 1,
      a: "Under Team Topologies, the platform team exists to reduce cognitive load on stream-aligned teams, enabling them to ship autonomous, secure value faster.",
    },
    {
      q: "Why might platform adoption remain low even after all required CI/CD and Kubernetes tools are installed?",
      options: [
        "Developers are fundamentally opposed to software automation.",
        "Poor developer experience, lack of documentation, complex configuration interfaces, or existing templates that don't match team workflows.",
        "Cloud providers block connections from developer portals.",
        "Kubernetes pods cannot communicate across subnets.",
      ],
      c: 1,
      a: "Adoption fails when the platform creates more friction than it removes. Unclear documentation, brittle templates, or workflows that don't address real use cases cause developers to bypass the platform.",
    },
    {
      q: "How should operational ownership be shared between application teams and platform teams?",
      options: [
        "Application teams throw code over the wall, and platform teams run all 24/7 on-call operations.",
        "Platform teams own the platform reliability and templates; application teams own their application logic, data behavior, and service SLOs.",
        "Neither team is responsible for production incidents.",
        "Only the cloud provider is responsible for operations.",
      ],
      c: 1,
      a: "The platform provides the rails, but application teams remain responsible for their service outcomes, code correctness, and incident triage using platform-supplied runbooks and telemetry.",
    },
    {
      q: "How does the 'Platform as a Product' mindset guide feature prioritization?",
      options: [
        "By prioritizing whatever tool is currently trending on Hacker News.",
        "By gathering developer feedback, measuring workflow friction points, and prioritizing capabilities that unlock the highest productivity gains.",
        "By allowing the most senior manager to decide all features arbitrarily.",
        "By refusing to add any new features once Backstage is deployed.",
      ],
      c: 1,
      a: "Treating the platform as a product means continuously collecting telemetry on developer friction, surveying users, and prioritizing roadmap items that eliminate the most painful operational bottlenecks.",
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
          currentModuleId="platform"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Platform AI"
        />

        {/* HERO SECTION */}
        <div className="mt-8 rounded-3xl border border-stone-200/80 bg-white/90 p-6 sm:p-10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200/60 px-3 py-1 text-xs font-mono font-bold text-orange-700 mb-4">
                <Workflow size={14} />
                <span>Internal Developer Platforms & Golden Paths</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
                Module 12 — Platform Engineering
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                Connect Kubernetes, Terraform, GitOps, CI/CD, and DevSecOps into a unified Internal Developer Platform (IDP).
                Build golden path service templates, maintain Backstage software catalogs, abstract infrastructure with Platform APIs,
                and treat developer experience (DevEx) as an internal product.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 text-center shrink-0">
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">CNCF</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Platform Standard</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-orange-600">IDP</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Self-Service</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">4</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Interactive Labs</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-emerald-600">15</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Mastery Qs</span>
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
                <h3 className="font-bold text-sm">Nova AI — Platform Engineering Architect</h3>
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
                defaultSubject="Platform Engineering, IDPs & Golden Paths"
                conceptName="Internal Developer Platforms, Backstage, Crossplane, DevEx & Team Topologies"
              />
            </div>
          </div>
        )}

        {/* PRIMARY MODULE NAVIGATION TABS */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Curriculum Deep-Dive", icon: BookOpen },
            { id: "scaffold-lab", label: "Lab 1: Golden Path Scaffolder", icon: Workflow },
            { id: "catalog-lab", label: "Lab 2: Software Catalog", icon: Boxes },
            { id: "api-lab", label: "Lab 3: Platform API Abstraction", icon: Terminal },
            { id: "devex-lab", label: "Lab 4: DevEx ROI Calculator", icon: BarChart3 },
            { id: "failure-drills", label: "7 Design & Validation Drills", icon: Flame },
            { id: "mastery", label: "15 Mastery Questions", icon: HelpCircle },
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
        {/* TAB 1: CURRICULUM THEORY & ARCHITECTURE                            */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* LEFT SIDEBAR: TOPIC LIST */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-400 px-2 block mb-3">
                Curriculum Syllabus
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
        {/* TAB 2: LAB 1 - GOLDEN PATH SERVICE SCAFFOLDER                      */}
        {/* =================================================================== */}
        {activeTab === "scaffold-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Platform Lab 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Golden Path Service Scaffolding Engine
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Experience how a developer scaffolds a new microservice in 60 seconds using an approved Golden Path.
                Configure service attributes and watch the platform generate production-grade code, CI/CD, and GitOps assets.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* FORM CONTROLS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Workflow size={16} className="text-orange-600" />
                  <span>Service Template Inputs</span>
                </h3>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1">Service Name:</span>
                  <input
                    type="text"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className="w-full text-xs font-mono p-3 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1">Owning Team:</span>
                  <input
                    type="text"
                    value={owningTeam}
                    onChange={(e) => setOwningTeam(e.target.value)}
                    className="w-full text-xs font-mono p-3 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1">Runtime Architecture:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "python", label: "Python 3.12" },
                      { id: "go", label: "Go 1.22" },
                      { id: "node", label: "Node.js 20" },
                    ].map((rt) => (
                      <button
                        key={rt.id}
                        onClick={() => setRuntimeLanguage(rt.id)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-bold transition ${
                          runtimeLanguage === rt.id
                            ? "border-orange-500 bg-orange-50/80 text-orange-950"
                            : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        {rt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  onClick={() => setIncludeDatabase(!includeDatabase)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                    includeDatabase ? "border-emerald-500 bg-emerald-50/60" : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Dedicated Database</span>
                    <span className="text-[11px] text-stone-500">Auto-provisions PostgreSQL standard cluster</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${includeDatabase ? "bg-emerald-600 text-white" : "border border-stone-300"}`}>
                    {includeDatabase && <Check size={14} />}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1">Target Environment:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {["staging", "production"].map((env) => (
                      <button
                        key={env}
                        onClick={() => setTargetEnv(env)}
                        className={`p-2 rounded-xl border text-center text-xs font-mono font-bold uppercase transition ${
                          targetEnv === env
                            ? "border-orange-500 bg-orange-50/80 text-orange-950"
                            : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        {env}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  disabled={scaffoldingStatus === "generating"}
                  onClick={handleScaffoldRepository}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 p-3 text-xs font-bold text-white shadow-sm hover:bg-orange-700 disabled:opacity-50 transition"
                >
                  <Play size={14} />
                  <span>{scaffoldingStatus === "generating" ? "Scaffolding Repository..." : "Generate Golden Path Service"}</span>
                </button>
              </div>

              {/* GENERATED REPOSITORY VIEW */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <div className="flex items-center gap-2">
                      <FolderTree size={14} className="text-orange-400" />
                      <span>{serviceName}/ • Generated Repository Manifest</span>
                    </div>
                    <span>{generatedFiles.length} files scaffolded</span>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {generatedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between text-xs font-mono"
                      >
                        <div className="flex items-center gap-2.5">
                          <FileCode size={14} className="text-orange-400" />
                          <span className="text-stone-200 font-bold">{file.name}</span>
                        </div>
                        <span className="text-stone-500 text-[11px] hidden sm:inline">{file.desc}</span>
                      </div>
                    ))}
                  </div>

                  {scaffoldingStatus === "completed" && (
                    <div className="mt-5 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <CheckCircle2 size={14} />
                        <span>Golden Path Successfully Initialized!</span>
                      </div>
                      <p className="text-[11px] text-stone-300">
                        Repository created at github.com/my-org/{serviceName}. Registered in Backstage catalog. Argo CD staging sync initiated.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Engine: Backstage Software Templates v1</span>
                  <span>Owner: {owningTeam}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - BACKSTAGE SOFTWARE CATALOG                          */}
        {/* =================================================================== */}
        {activeTab === "catalog-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Platform Lab 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Backstage Software Catalog Explorer
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Discover registered services, ownership hierarchies, API relationships, and operational links.
                Never wonder who is on call for a failing upstream dependency during an outage.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CATALOG LIST */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <h3 className="font-bold text-stone-900 text-sm">Registered Components</h3>
                  <select
                    value={catalogFilter}
                    onChange={(e) => setCatalogFilter(e.target.value)}
                    className="text-xs font-mono p-1.5 rounded-lg border border-stone-300 bg-stone-50"
                  >
                    <option value="all">All Teams</option>
                    <option value="team-notes">team-notes</option>
                    <option value="team-core">team-core</option>
                    <option value="team-media">team-media</option>
                  </select>
                </div>

                <div className="space-y-2">
                  {filteredCatalog.map((item, idx) => {
                    const isSelected = selectedCatalogItem === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedCatalogItem(idx)}
                        className={`cursor-pointer p-3.5 rounded-2xl border transition ${
                          isSelected
                            ? "border-orange-500 bg-orange-50/70 shadow-sm ring-1 ring-orange-500"
                            : "border-stone-200 bg-white hover:bg-stone-50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono font-bold text-xs text-stone-900">{item.name}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              item.lifecycle === "production"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {item.lifecycle}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 line-clamp-1">{item.description}</p>
                        <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-stone-400">
                          <span>Owner: {item.owner}</span>
                          <span>System: {item.system}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* COMPONENT DETAIL DRAWER */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Component Detail • {filteredCatalog[selectedCatalogItem]?.name}</span>
                    <span className="text-orange-400">catalog-info.yaml metadata</span>
                  </div>

                  <div className="mt-4 space-y-4 text-xs font-mono">
                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-stone-400">Component Name:</span>
                        <strong className="text-white">{filteredCatalog[selectedCatalogItem]?.name}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Owning Team:</span>
                        <strong className="text-orange-400">{filteredCatalog[selectedCatalogItem]?.owner}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Repository:</span>
                        <span className="text-stone-300 underline">{filteredCatalog[selectedCatalogItem]?.repo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Lifecycle Tier:</span>
                        <span className="text-emerald-400">{filteredCatalog[selectedCatalogItem]?.lifecycle}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                      <span className="text-stone-400 block mb-2 font-bold">API Contracts & Dependencies:</span>
                      <div className="space-y-1 text-stone-300">
                        <p>Provides: {filteredCatalog[selectedCatalogItem]?.apis.join(", ") || "None"}</p>
                        <p>Depends On: {filteredCatalog[selectedCatalogItem]?.dependsOn.join(", ") || "None"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Backstage Software Catalog v1alpha1</span>
                  <span>TechDocs: Available</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - PLATFORM API ABSTRACTION VS RAW TERRAFORM           */}
        {/* =================================================================== */}
        {activeTab === "api-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Platform Lab 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Platform API Abstraction vs. Raw Infrastructure Sprawl
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Compare the developer experience of expressing business intent via a high-level Platform API
                versus forcing developers to manually write 380+ lines of raw Terraform and Kubernetes manifests.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CONTROLS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Platform Feature Toggles</span>
                </h3>

                <div
                  onClick={() => setEnableCache(!enableCache)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                    enableCache ? "border-emerald-500 bg-emerald-50/60" : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Enable Distributed Redis Cache</span>
                    <span className="text-[11px] text-stone-500">Adds cache.enabled: true to platform spec</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${enableCache ? "bg-emerald-600 text-white" : "border border-stone-300"}`}>
                    {enableCache && <Check size={14} />}
                  </div>
                </div>

                <div
                  onClick={() => setEnableHighAvailability(!enableHighAvailability)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                    enableHighAvailability ? "border-emerald-500 bg-emerald-50/60" : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Multi-AZ High Availability</span>
                    <span className="text-[11px] text-stone-500">Adds multiAz: true + PDB minAvailable: 2</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${enableHighAvailability ? "bg-emerald-600 text-white" : "border border-stone-300"}`}>
                    {enableHighAvailability && <Check size={14} />}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <span className="font-bold text-stone-900 block">Why Platform APIs Win:</span>
                  <p className="text-stone-600 leading-relaxed">
                    The developer modifies <strong>2 lines of YAML</strong>. The platform control plane translates this into
                    AWS ElastiCache subnets, Security Groups, IAM IRSA roles, Pod Disruption Budgets, and topology spread constraints automatically.
                  </p>
                </div>
              </div>

              {/* CODE COMPARISON */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Developer Platform API Spec</span>
                    <span className="text-emerald-400">Clean Developer Intent</span>
                  </div>
                  <pre className="mt-4 font-mono text-xs text-stone-200 leading-relaxed overflow-x-auto">
{`apiVersion: platform.myorg.io/v1alpha1
kind: WebServiceRequest
metadata:
  name: notes-api
spec:
  owner: team-notes
  runtime: python
  tier: standard
  database:
    engine: postgres
    version: "16"
  cache:
    enabled: ${enableCache}
    engine: redis
  resilience:
    multiAz: ${enableHighAvailability}
    minReplicas: ${enableHighAvailability ? "4" : "2"}
    maxReplicas: 8`}
                  </pre>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Reconciled by Crossplane Composition Controller</span>
                  <span>Eliminated: ~380 lines of raw HCL & K8s YAML</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: LAB 4 - DEVEX ROI & IMPACT CALCULATOR                        */}
        {/* =================================================================== */}
        {activeTab === "devex-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Platform Lab 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Developer Experience (DevEx) & Platform ROI Calculator
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Quantify the business value of platform engineering. Calculate engineering hours reclaimed,
                annual cost savings, and onboarding acceleration when migrating from Ticket Ops to self-service.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* SLIDERS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Organization Parameters</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Engineering Team Size:</span>
                    <span className="text-orange-600">{developerCount} Engineers</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={developerCount}
                    onChange={(e) => setDeveloperCount(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">New Services / Environments per Year:</span>
                    <span className="text-orange-600">{newServicesPerYear} Services</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={newServicesPerYear}
                    onChange={(e) => setNewServicesPerYear(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Average Blended Hourly Dev Rate:</span>
                    <span className="text-emerald-600">${hourlyDevCost} / hour</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="200"
                    step="5"
                    value={hourlyDevCost}
                    onChange={(e) => setHourlyDevCost(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>
              </div>

              {/* IMPACT METRICS */}
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-3xl border border-emerald-300 bg-emerald-50/60 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider text-emerald-950">
                      Annual Economic & Efficiency ROI
                    </span>
                    <span className="px-3 py-1 rounded-full font-bold text-xs bg-emerald-600 text-white">
                      {devexMetrics.velocityMultiplier}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-stone-900 mt-4">
                    ${devexMetrics.annualDollarSavings.toLocaleString()} Saved / Year
                  </h3>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-white border border-emerald-200">
                      <span className="text-stone-500 block text-[10px]">Hours Saved / Year</span>
                      <strong className="text-stone-900 text-base">{devexMetrics.totalHoursSaved.toLocaleString()} hrs</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-emerald-200">
                      <span className="text-stone-500 block text-[10px]">Ticket Ops Lead Time</span>
                      <strong className="text-rose-700 text-base">{devexMetrics.timeToFirstDeployDays.ticketOps}</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-emerald-200">
                      <span className="text-stone-500 block text-[10px]">Golden Path Lead Time</span>
                      <strong className="text-emerald-700 text-base">{devexMetrics.timeToFirstDeployDays.goldenPath}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 6: 7 DESIGN & VALIDATION DRILLS                                */}
        {/* =================================================================== */}
        {activeTab === "failure-drills" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Section 16 Audit Standard
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    7 Platform Design & Validation Drills
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
                    Verify that your Internal Developer Platform validates requests, enforces safety guardrails,
                    and handles failures gracefully with transparent diagnostics.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3 bg-stone-50 border border-stone-200 px-4 py-3 rounded-2xl">
                  <Flame size={20} className="text-orange-600" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-stone-900">
                      Drills Completed: {drillChecksCompleted} / 7
                    </span>
                    <div className="w-32 bg-stone-200 h-1.5 rounded-full overflow-hidden mt-1">
                      <div
                        className="bg-orange-600 h-full transition-all duration-300"
                        style={{ width: `${(drillChecksCompleted / 7) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "unauthRequest",
                  title: "1. Unauthorized Production Provisioning",
                  scenario: "Attempt to scaffold a production database using an unauthorized junior identity.",
                  verification: "Verify request is rejected or redirected to an approved peer-review workflow.",
                },
                {
                  id: "invalidMetadata",
                  title: "2. Missing / Unknown Service Owner",
                  scenario: "Submit a template without an owner or with an unrecognized team string.",
                  verification: "Verify Backstage template validates input instead of creating an orphaned catalog entity.",
                },
                {
                  id: "ciTemplateFail",
                  title: "3. Inherited CI Template Failure",
                  scenario: "Introduce a deliberate unit test or SAST failure into the scaffolded repository.",
                  verification: "Verify the platform CI workflow blocks promotion and reports actionable error logs.",
                },
                {
                  id: "gitopsError",
                  title: "4. Invalid GitOps Deployment Manifest",
                  scenario: "Submit an invalid Kubernetes spec into the staging overlay.",
                  verification: "Verify Argo CD detects the sync failure and surfaces human-readable YAML lint diagnostics.",
                },
                {
                  id: "unsafeOption",
                  title: "5. Unsupported Resource Size / Tier",
                  scenario: "Request an unapproved 128-core database instance via the Platform API.",
                  verification: "Verify the platform admission controller rejects the request against budget policy.",
                },
                {
                  id: "componentOutage",
                  title: "6. Platform Component Outage Simulation",
                  scenario: "Simulate Backstage or Crossplane controller temporarily offline.",
                  verification: "Verify running workloads remain unaffected and developers receive clear outage status.",
                },
                {
                  id: "usabilityAudit",
                  title: "7. Independent Developer Usability Audit",
                  scenario: "Have an engineer unfamiliar with the template scaffold and deploy a microservice.",
                  verification: "Measure time to first deployment and ensure zero manual platform team intervention was required.",
                },
              ].map((drill) => {
                const isDone = drillChecks[drill.id];
                return (
                  <div
                    key={drill.id}
                    onClick={() => toggleDrillCheck(drill.id)}
                    className={`cursor-pointer rounded-2xl border p-5 transition flex flex-col justify-between ${
                      isDone
                        ? "border-emerald-500 bg-emerald-50/50 shadow-sm"
                        : "border-stone-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                        <span className="font-bold text-stone-900 text-sm">{drill.title}</span>
                        <div
                          className={`w-5 h-5 rounded-lg flex items-center justify-center transition ${
                            isDone ? "bg-emerald-600 text-white" : "border border-stone-300 bg-stone-50"
                          }`}
                        >
                          {isDone && <Check size={14} />}
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 mt-2">
                        <strong>Scenario:</strong> {drill.scenario}
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Verification:</strong> {drill.verification}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 7: 15 MASTERY ASSESSMENT QUESTIONS                              */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="mt-8 space-y-6 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Production Certification
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Platform Engineering Mastery Assessment
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Test your expertise across Internal Developer Platforms, Golden Paths, Backstage Catalogs,
                Crossplane Platform APIs, DevEx measurement, and Team Topologies.
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
              DevOps & SRE Track • Module 12 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Platform Engineering Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand how to scale DevOps across enterprise organizations: building Internal Developer Platforms,
              scaffolding Golden Paths, maintaining Backstage Software Catalogs, abstracting infrastructure with Platform APIs,
              and measuring Developer Experience (DevEx) as an internal product.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/devsecops")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 11: DevSecOps
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Curriculum Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/capstone")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-2"
            >
              Next: Module 13 — Capstone Project →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
