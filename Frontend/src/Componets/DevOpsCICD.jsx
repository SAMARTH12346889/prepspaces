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
  Table,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsCICD() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'pipeline-lab' | 'argocd-lab' | 'devsecops-gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // =========================================================================
  // SIMULATOR 1: END-TO-END NOTES API GITOPS CI/CD PIPELINE SIMULATOR
  // Developer -> Git Push -> CI Runner -> Tests -> Security Scan -> Build Image ->
  // Container Registry -> CD (GitOps) -> Kubernetes -> Production
  // =========================================================================
  const pipelineSteps = [
    {
      id: "developer",
      name: "1. Developer",
      short: "Dev",
      icon: Terminal,
      actor: "Local Workspace",
      desc: "Engineer writes Notes API code, tests locally & commits to Git",
    },
    {
      id: "git_push",
      name: "2. Git Push",
      short: "Push",
      icon: GitCommit,
      actor: "GitHub / GitLab",
      desc: "Branch pushed; PR opened; Webhook dispatches to CI runner",
    },
    {
      id: "ci_runner",
      name: "3. CI Runner",
      short: "CI",
      icon: Cpu,
      actor: "GitHub Actions / Jenkins",
      desc: "Clean ephemeral runner provisioned with minimal read permissions",
    },
    {
      id: "tests",
      name: "4. Tests",
      short: "Tests",
      icon: CheckCircle2,
      actor: "Pytest & Linting",
      desc: "Flake8 style check, unit tests & integration tests with PostgreSQL",
    },
    {
      id: "security_scan",
      name: "5. Security Scan",
      short: "SecOps",
      icon: ShieldCheck,
      actor: "pip-audit & Gitleaks",
      desc: "Dependency CVE audit (pip-audit), secret leak detection & Trivy",
    },
    {
      id: "build_image",
      name: "6. Build Image",
      short: "Build",
      icon: Boxes,
      actor: "Docker Buildx",
      desc: "Multi-stage build of notes-api container, stripping dev tools",
    },
    {
      id: "container_registry",
      name: "7. Container Registry",
      short: "Registry",
      icon: Package,
      actor: "GHCR / ECR / Harbor",
      desc: "Publish immutable SHA-256 digest & Cosign cryptographic signature",
    },
    {
      id: "cd_gitops",
      name: "8. CD (GitOps)",
      short: "CD",
      icon: RefreshCw,
      actor: "Argo CD Controller",
      desc: "Pull-based sync: Git platform-config repository vs live cluster",
    },
    {
      id: "kubernetes",
      name: "9. Kubernetes",
      short: "K8s",
      icon: Layers,
      actor: "K8s API & Kubelet",
      desc: "Rolling update with /healthz & /readyz probes, zero downtime",
    },
    {
      id: "production",
      name: "10. Production",
      short: "Prod",
      icon: Globe,
      actor: "End Users & Ingress",
      desc: "Live Notes API traffic served at 1,000 req/sec, 0 dropped requests",
    },
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [pipelineStatus, setPipelineStatus] = useState("idle"); // 'idle' | 'running' | 'paused' | 'failed' | 'success'
  const [injectedFailure, setInjectedFailure] = useState("none"); // 'none' | 'unit_tests' | 'pip_audit_cve' | 'registry_denied' | 'k8s_crash'
  const [pipelineLogs, setPipelineLogs] = useState([
    "System ready. Pipeline standing by for Git push event on notes-api repository...",
  ]);

  const stepDetails = useMemo(() => {
    const details = {
      developer: {
        title: "Developer Workstation & Code Quality Verification",
        command: "git commit -m 'feat(notes): add tag filtering and postgres query optimization' && git push origin main",
        outputs: [
          "[local] Running pre-commit hook on notes-api/app.py...",
          "[local] Flake8 linting check passed in 120ms (0 errors).",
          "[local] GPG commit signing key 0x489B1A attached.",
          "[local] Pushing to git@github.com:example/notes-api.git (branch: main).",
        ],
        inspect: {
          repository: "example/notes-api",
          commit: "4b91e70c8a129d38f24b01e9124a87c9103982e1",
          author: "Samarth <samarth@prepspaces.io>",
          branch: "main",
          message: "feat(notes): add tag filtering and postgres query optimization",
        },
      },
      git_push: {
        title: "Version Control Webhook & Concurrency Evaluation",
        command: "POST /repos/example/notes-api/dispatches HTTP/2",
        outputs: [
          "[github] Push event received on refs/heads/main (commit 4b91e70).",
          "[github] Evaluating branch protection: 2 required reviews satisfied.",
          "[github] Concurrency group 'ci-notes-api-main' active; canceling any in-progress superseded runs.",
          "[github] Status check 'Notes API CI' created with status 'pending'.",
        ],
        inspect: {
          event: "push",
          ref: "refs/heads/main",
          concurrencyGroup: "ci-notes-api-main",
          permissionsGranted: "contents: read (least privilege)",
        },
      },
      ci_runner: {
        title: "Ephemeral CI Runner Orchestration",
        command: "runs-on: ubuntu-latest (ephemeral container VM)",
        outputs: [
          "[runner] Requesting clean runner VM from GitHub Actions pool...",
          "[runner] Runner ID: gh-runner-ew1-9482 provisioned (Linux 6.8 x86_64, 2 vCPU, 7GB RAM).",
          "[runner] Step 1: actions/checkout@v4 with minimal read-only token.",
          "[runner] Step 2: actions/setup-python@v5 with python-version: '3.13'.",
          "[runner] Clean virtualenv created; zero residual state from previous runs.",
        ],
        inspect: {
          runner: "ubuntu-latest",
          pythonVersion: "3.13.0",
          isolation: "Hermetic, destroyed on completion",
        },
      },
      tests: {
        title: "Automated Testing Hierarchy: Pytest & PostgreSQL Integration",
        command: "pytest -q tests/test_app.py",
        outputs: [
          "[pytest] Running test suite against disposable test database...",
          "[pytest] tests/test_app.py::test_healthz PASSED [ 20%]",
          "[pytest] tests/test_app.py::test_create_note PASSED [ 40%]",
          "[pytest] tests/test_app.py::test_list_notes_empty PASSED [ 60%]",
          "[pytest] tests/test_app.py::test_note_validation_title_length PASSED [ 80%]",
          "[pytest] tests/test_app.py::test_postgres_tag_filter PASSED [100%]",
          "[pytest] 5 passed in 0.84s (100% statement coverage on app.py).",
        ],
        inspect: {
          framework: "pytest 8.3",
          totalTests: 5,
          passed: 5,
          duration: "0.84s",
          testDb: "disposable postgres:16-alpine container",
        },
      },
      security_scan: {
        title: "Shift-Left Security: pip-audit & Secret Detection",
        command: "pip-audit -r requirements.txt && gitleaks detect",
        outputs: [
          "[audit] pip-audit inspecting 14 installed Python packages against PyPI & OSV databases...",
          "[audit] fastapi: 0.115.0 (No known vulnerabilities).",
          "[audit] uvicorn: 0.31.0 (No known vulnerabilities).",
          "[audit] psycopg2-binary: 2.9.9 (No known vulnerabilities).",
          "[audit] Result: 0 vulnerabilities found in project dependencies.",
          "[gitleaks] Scanning commit diff for private keys, AWS tokens, and DB passwords... Clean (0 leaks).",
        ],
        inspect: {
          auditor: "pip-audit v2.7.3",
          vulnerabilitiesFound: 0,
          secretScanner: "Gitleaks v8.18",
          securityGate: "PASSED (Release Eligible)",
        },
      },
      build_image: {
        title: "Multi-Stage Docker Container Build (Buildx)",
        command: "docker buildx build -t ghcr.io/example/notes-api:ci .",
        outputs: [
          "[docker] Using BuildKit engine with Dockerfile build context...",
          "[docker] Stage 1 (builder): Compiling dependencies in python:3.13-slim.",
          "[docker] Stage 2 (runtime): python:3.13-alpine (non-root UID 10001).",
          "[docker] Stripping pip cache, build compilers, and development headers.",
          "[docker] Final image footprint: 48.2 MB (reduced from 920 MB).",
          "[docker] Generated image digest: sha256:4b91e70c8a129d38f24b01e9124a87c9103982e1...",
        ],
        inspect: {
          baseImage: "python:3.13-alpine",
          user: "appuser (UID 10001, non-root)",
          imageSize: "48.2 MB",
          digest: "sha256:4b91e70c8a129d38f24b01e9124a87c9103982e1",
        },
      },
      container_registry: {
        title: "Publish Immutable Digest to Container Registry (GHCR)",
        command: "docker push ghcr.io/example/notes-api:sha-4b91e70 && cosign sign --yes ghcr.io/example/notes-api@sha256:4b91e70c...",
        outputs: [
          "[ghcr] Authenticating to ghcr.io using scoped permissions: packages: write.",
          "[ghcr] Pushing layers to ghcr.io/example/notes-api:sha-4b91e70 (180ms).",
          "[ghcr] Output recorded: digest=sha256:4b91e70c8a129d38f24b01e9124a87c9103982e1.",
          "[cosign] Generating keyless cryptographic attestation via Sigstore Rekor transparency log.",
          "[provenance] SLSA Level 3 Build Attestation published alongside container image.",
        ],
        inspect: {
          registry: "ghcr.io (GitHub Packages)",
          tag: "sha-4b91e70",
          immutableDigest: "sha256:4b91e70c8a129d38f24b01e9124a87c9103982e1",
          cosignAttested: "true (Sigstore Rekor Log #489210)",
        },
      },
      cd_gitops: {
        title: "GitOps Delivery: Argo CD Configuration Reconciler",
        command: "argocd app sync notes-api-staging",
        outputs: [
          "[gitops] Automation opened PR on platform-config: updated image digest to sha256:4b91e70c.",
          "[gitops] Pull request merged to main in platform-config repository.",
          "[gitops] Argo CD Application Controller detected desired state change in apps/notes-api/overlays/staging.",
          "[gitops] Sync Wave 0: Verifying ConfigMaps and DB Secret connections.",
          "[gitops] Sync Wave 1: Applying updated Deployment manifest with immutable digest.",
          "[gitops] SyncStatus changed from OutOfSync to Synced.",
        ],
        inspect: {
          gitRepo: "https://github.com/example/platform-config",
          appPath: "apps/notes-api/overlays/staging",
          syncPolicy: "automated: prune=true, selfHeal=true",
          healthStatus: "Progressing",
        },
      },
      kubernetes: {
        title: "Kubernetes Cluster Scheduling & Zero-Downtime Rollout",
        command: "kubectl rollout status deployment/notes-api -n notes",
        outputs: [
          "[k8s] Kubelet pulling ghcr.io/example/notes-api@sha256:4b91e70c on worker node-2...",
          "[k8s] Pod notes-api-6f9b8c-kz92l created. Evaluating probes...",
          "[k8s] GET /healthz: 200 OK (Process alive).",
          "[k8s] GET /readyz: 200 OK (Database connection pool verified).",
          "[k8s] Pod marked Ready. Ingress endpoints updated.",
          "[k8s] Graceful termination: SIGTERM sent to retiring v1 Pod (draining connections for 30s).",
          "[k8s] Deployment successfully rolled out without dropping any connections.",
        ],
        inspect: {
          replicas: "3 / 3 Ready",
          strategy: "RollingUpdate (maxSurge=1, maxUnavailable=0)",
          readinessProbe: "HTTP GET /readyz:8000 (Passed)",
          gracePeriod: "30 seconds",
        },
      },
      production: {
        title: "Production Telemetry & Verifiable Zero Downtime",
        command: "curl -I https://notes.enterprise.io/healthz",
        outputs: [
          "HTTP/2 200",
          "server: envoy-ingress",
          "content-type: application/json",
          "{\"status\":\"healthy\",\"version\":\"sha-4b91e70\",\"db_latency_ms\":1.4}",
          "[telemetry] Edge Ingress 5xx error rate: 0.00% across 1,000 req/sec.",
          "[telemetry] DORA Lead Time: 3 minutes 42 seconds from commit to live traffic.",
          "[telemetry] Invariant satisfied: Release verified at every gate before live traffic shift.",
        ],
        inspect: {
          service: "notes-api",
          liveDigest: "sha256:4b91e70c8a129d38f24b01e9124a87c9103982e1",
          trafficServed: "100%",
          errorRate: "0.00%",
          doraLeadTime: "3m 42s",
        },
      },
    };
    return details[pipelineSteps[currentStepIndex].id];
  }, [currentStepIndex]);

  const handleRunFullPipeline = () => {
    setPipelineStatus("running");
    setCurrentStepIndex(0);
    setPipelineLogs(["[trigger] Full automated Notes API pipeline initiated from Developer commit..."]);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step >= pipelineSteps.length) {
        clearInterval(interval);
        setPipelineStatus("success");
        setPipelineLogs((prev) => [
          ...prev,
          "🎉 [SUCCESS] Notes API pipeline reached 100% production with zero downtime!",
        ]);
        return;
      }

      // Check injected failures
      if (injectedFailure === "unit_tests" && step === 3) {
        clearInterval(interval);
        setPipelineStatus("failed");
        setPipelineLogs((prev) => [
          ...prev,
          "❌ [QUALITY GATE FAILED] Pytest failed on tests/test_app.py! Invariant violated: pipeline halts before build.",
        ]);
        return;
      }

      if (injectedFailure === "pip_audit_cve" && step === 4) {
        clearInterval(interval);
        setPipelineStatus("failed");
        setPipelineLogs((prev) => [
          ...prev,
          "❌ [SECURITY GATE BLOCKED] pip-audit detected CVE-2026-3819 (CRITICAL) in dependency! Image publication denied.",
        ]);
        return;
      }

      if (injectedFailure === "registry_denied" && step === 6) {
        clearInterval(interval);
        setPipelineStatus("failed");
        setPipelineLogs((prev) => [
          ...prev,
          "❌ [AUTH ERROR] Push to GHCR denied: Missing 'packages: write' permission in workflow token.",
        ]);
        return;
      }

      if (injectedFailure === "k8s_crash" && step === 8) {
        clearInterval(interval);
        setPipelineStatus("failed");
        setPipelineLogs((prev) => [
          ...prev,
          "❌ [READINESS PROBE FAILED] Pod /readyz returned 503 (DB unreachable)! Kubernetes halted rollout; old pods still serving.",
        ]);
        return;
      }

      setCurrentStepIndex(step);
      setPipelineLogs((prev) => [
        ...prev,
        `[step ${step + 1}/${pipelineSteps.length}] Passed ${pipelineSteps[step - 1].name} -> Entering ${pipelineSteps[step].name}...`,
      ]);
    }, 1100);
  };

  const handleNextStep = () => {
    if (currentStepIndex < pipelineSteps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setPipelineLogs((prev) => [
        ...prev,
        `[manual] Advanced to Step ${nextIndex + 1}: ${pipelineSteps[nextIndex].name}`,
      ]);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      setPipelineLogs((prev) => [
        ...prev,
        `[manual] Reverted view to Step ${prevIndex + 1}: ${pipelineSteps[prevIndex].name}`,
      ]);
    }
  };

  const handleResetPipeline = () => {
    setPipelineStatus("idle");
    setCurrentStepIndex(0);
    setPipelineLogs(["System reset. Notes API pipeline standing by for new run..."]);
  };

  // =========================================================================
  // SIMULATOR 2: ARGO CD SYNC & DRIFT TRIAGE SANDBOX (NOTES API)
  // Git Repo (Desired) vs Live Cluster (Observed State)
  // =========================================================================
  const [gitReplicas, setGitReplicas] = useState(3);
  const [gitImageDigest, setGitImageDigest] = useState("sha256:4b91e70c8a129d38f24b");
  const [gitCpuLimit, setGitCpuLimit] = useState("500m");

  const [clusterReplicas, setClusterReplicas] = useState(3);
  const [clusterImageDigest, setClusterImageDigest] = useState("sha256:4b91e70c8a129d38f24b");
  const [clusterCpuLimit, setClusterCpuLimit] = useState("500m");

  const [selfHealEnabled, setSelfHealEnabled] = useState(false);
  const [autoPruneEnabled, setAutoPruneEnabled] = useState(false);
  const [activeSyncWave, setActiveSyncWave] = useState(0);
  const [syncHistory, setSyncHistory] = useState([
    "Argo CD tracking https://github.com/example/platform-config.git at apps/notes-api/overlays/staging.",
  ]);

  const isDrifted =
    gitReplicas !== clusterReplicas ||
    gitImageDigest !== clusterImageDigest ||
    gitCpuLimit !== clusterCpuLimit;

  const handleManualClusterTamper = (field, val) => {
    if (field === "replicas") setClusterReplicas(val);
    if (field === "image") setClusterImageDigest(val);
    if (field === "cpu") setClusterCpuLimit(val);

    setSyncHistory((prev) => [
      `⚠️ [DRIFT DETECTED] Rogue manual cluster mutation via direct kubectl: ${field} changed to '${val}'. Status changed to OutOfSync!`,
      ...prev,
    ]);

    if (selfHealEnabled) {
      setTimeout(() => {
        if (field === "replicas") setClusterReplicas(gitReplicas);
        if (field === "image") setClusterImageDigest(gitImageDigest);
        if (field === "cpu") setClusterCpuLimit(gitCpuLimit);
        setSyncHistory((prev) => [
          `⚡ [SELF-HEAL RECONCILED] Argo CD selfHeal detected drift and re-applied Git declarative state: ${field} restored!`,
          ...prev,
        ]);
      }, 900);
    }
  };

  const handleArgoSync = () => {
    setSyncHistory((prev) => [
      `🔄 [SYNC] Initiating manual Argo CD sync for Application 'notes-api-staging'...`,
      ...prev,
    ]);

    setActiveSyncWave(1);
    setTimeout(() => {
      setActiveSyncWave(2);
      setClusterReplicas(gitReplicas);
      setClusterImageDigest(gitImageDigest);
      setClusterCpuLimit(gitCpuLimit);
      setSyncHistory((prev) => [
        `✅ [SYNC COMPLETE] Cluster reconciled with Git repository. Status: Synced & Healthy. Live state matches commit digest.`,
        ...prev,
      ]);
    }, 800);
  };

  // =========================================================================
  // SIMULATOR 3: DEVSECOPS & PRODUCTION CI/CD FAILURE GAMEDAY
  // 5 Realistic Incidents
  // =========================================================================
  const gamedayScenarios = [
    {
      id: "unpinned_action",
      title: "Incident 1: Compromised Third-Party GitHub Action (Supply-Chain Exploit)",
      severity: "CRITICAL",
      badge: "Supply Chain",
      situation:
        "A popular community GitHub Action `thirdparty/notify-slack@v2` was hijacked when the maintainer's account was compromised. The attacker updated the mutable git tag `v2` to inject code that exfiltrates `ACTIONS_ID_TOKEN_REQUEST_TOKEN` and repository environment secrets to a remote C2 server.",
      impact: "Cloud credentials and repository secrets leaked to unauthorized third party.",
      remediationChoices: [
        {
          text: "Pin all third-party actions to immutable full 40-character commit SHAs (e.g., uses: thirdparty/notify-slack@a1b2c3d...) and run StepSecurity audit.",
          correct: true,
          explanation:
            "Tags like @v2 or @main are mutable Git refs that attackers can overwrite at any moment. Pinning actions to immutable commit SHAs guarantees you run the exact audited code. Additionally, configuring GitHub Actions token permissions to `permissions: contents: read` restricts token blast radius.",
        },
        {
          text: "Change the repository to private so the action cannot be downloaded.",
          correct: false,
          explanation:
            "Private repositories still execute external community actions and are fully vulnerable to supply chain injection.",
        },
        {
          text: "Add a 10-second sleep before executing the notification step.",
          correct: false,
          explanation: "Adding a delay has zero impact on malicious code execution.",
        },
      ],
    },
    {
      id: "critical_cve",
      title: "Incident 2: Dependency Vulnerability Audit Failure (pip-audit Gate)",
      severity: "HIGH",
      badge: "Vulnerability Gate",
      situation:
        "The security team enabled a hard blocking gate in CI using pip-audit (`pip-audit -r requirements.txt`). A critical remote code execution vulnerability (CVSS 9.8) in an outdated urllib3 dependency is flagged, immediately halting the pipeline before container image compilation.",
      impact: "Release is blocked because the pipeline enforces the core invariant: vulnerable code cannot proceed to build.",
      remediationChoices: [
        {
          text: "Upgrade urllib3 to the patched secure version in requirements.txt, verify pytest passes, and re-run the pipeline.",
          correct: true,
          explanation:
            "The invariant worked as designed: security checks must block unsafe releases before deployment. Resolving the vulnerability by pinning the patched library in requirements.txt unblocks the gate cleanly.",
        },
        {
          text: "Remove pip-audit from .github/workflows/ci.yml so the pipeline turns green.",
          correct: false,
          explanation:
            "Removing security scanners allows known remote code execution vulnerabilities to be packaged into container images and deployed to production.",
        },
        {
          text: "Re-run the build repeatedly hoping the scanner passes by chance.",
          correct: false,
          explanation:
            "Deterministic vulnerability scanners evaluate known package manifests; repeating the build without updating requirements.txt will always fail.",
        },
      ],
    },
    {
      id: "webhook_loop",
      title: "Incident 3: Mutating Webhook Drift Flapping Loop in Argo CD",
      severity: "MEDIUM",
      badge: "GitOps Drift",
      situation:
        "After deploying the Notes API with Argo CD, the application perpetually toggles between `Synced` and `OutOfSync` every 30 seconds. An Istio Service Mesh mutating admission webhook in the Kubernetes cluster automatically injects sidecar proxy containers and annotations (`sidecar.istio.io/status`) that do not exist in the Git repository.",
      impact: "Argo CD logs are flooded, continuous reconciliation consumes API server CPU, and selfHeal triggers endless restart loops.",
      remediationChoices: [
        {
          text: "Configure Argo CD 'ignoreDifferences' in the Application CRD to tell Argo CD to ignore the mutated annotations and sidecar containers injected by the cluster webhook.",
          correct: true,
          explanation:
            "Argo CD provides the `spec.ignoreDifferences` field specifically for cluster-mutated fields (e.g. Istio sidecars, HPA replica counts, mutating webhooks). This allows the live cluster to maintain dynamic operational fields without flagging OutOfSync drift against declarative Git.",
        },
        {
          text: "Commit the cluster-generated sidecar JSON strings directly into the Git repository every minute.",
          correct: false,
          explanation:
            "Storing ephemeral cluster-generated tokens and injected sidecar statuses in Git pollutes the repository and creates infinite commit loops.",
        },
        {
          text: "Delete the Istio service mesh from the production cluster.",
          correct: false,
          explanation:
            "Removing the service mesh destroys mutual TLS (mTLS), observability, and ingress routing for the entire company.",
        },
      ],
    },
    {
      id: "untrusted_pr_token",
      title: "Incident 4: Insecure pull_request_target Token Exfiltration",
      severity: "CRITICAL",
      badge: "Pipeline Security",
      situation:
        "A developer configured `.github/workflows/ci.yml` with `on: pull_request_target` and checked out the pull request head commit (`actions/checkout with ref: ${{ github.event.pull_request.head.sha }}`). An external contributor opened a PR containing malicious code that read the default read-write GITHUB_TOKEN.",
      impact: "External untrusted PR code gained write access to the repository and published fake packages.",
      remediationChoices: [
        {
          text: "Use standard 'on: pull_request' for untrusted code execution (which receives read-only tokens and zero secrets), and restrict workflow permissions to 'contents: read'.",
          correct: true,
          explanation:
            "The OWASP CI/CD Cheat Sheet explicitly warns against running untrusted PR code in the context of `pull_request_target`. Standard `pull_request` runs in an isolated fork context with a read-only token and no access to repository secrets.",
        },
        {
          text: "Encrypt the repository with a password.",
          correct: false,
          explanation: "Password encryption does not prevent GitHub Actions execution token theft.",
        },
        {
          text: "Disable all pull requests permanently.",
          correct: false,
          explanation: "Disabling pull requests prevents open-source and team collaboration.",
        },
      ],
    },
    {
      id: "runner_cache_poison",
      title: "Incident 5: CI Cache Poisoning & Untrusted Runner Contamination",
      severity: "HIGH",
      badge: "CI Infrastructure",
      situation:
        "An enterprise configured self-hosted GitHub Actions runners on persistent shared virtual machines to speed up builds. A malicious pull request from a public fork executed a build script that inserted a backdoor into the shared `~/.cache/pip` directory. Subsequent builds on `main` compiled packages from the poisoned local cache.",
      impact: "Untrusted PR code successfully contaminated production build artifacts.",
      remediationChoices: [
        {
          text: "Adopt ephemeral disposable runners (via Actions Runner Controller / ARC in Kubernetes) where every job runs in a pristine throwaway container destroyed after completion, and restrict pull_request permissions.",
          correct: true,
          explanation:
            "Production CI/CD runners must be strictly ephemeral: provisioned dynamically for a single job and immediately destroyed upon termination. This completely prevents persistent cache poisoning and cross-job credential theft.",
        },
        {
          text: "Manually SSH into the runner VM every evening and run rm -rf on the cache folder.",
          correct: false,
          explanation:
            "Manual daily cleanups leave a 24-hour window for attackers to compromise every production build that executes in between.",
        },
        {
          text: "Turn off all tests and builds for pull requests entirely.",
          correct: false,
          explanation:
            "Disabling CI on pull requests destroys code review verification and allows broken code to be merged undetected.",
        },
      ],
    },
  ];

  const [activeGamedayIndex, setActiveGamedayIndex] = useState(0);
  const [selectedGamedayChoice, setSelectedGamedayChoice] = useState(null);
  const currentScenario = gamedayScenarios[activeGamedayIndex];

  // =========================================================================
  // CURRICULUM THEORY: 10 COMPREHENSIVE PRODUCTION TOPICS (UNIVERSITY-INFORMED)
  // Aligned with Cornell CS 5150, Cambridge, OWASP, and official docs
  // =========================================================================
  const curriculumTopics = useMemo(
    () => [
      {
        id: "pipeline_end_to_end",
        title: "1. The End-to-End Delivery Pipeline & The Invariant",
        badge: "Systems & Invariant",
        icon: Activity,
        summary:
          "CI/CD connects a developer's commit to a tested, versioned, deployable release. Master the end-to-end stages, the distinction between CI, Continuous Delivery, and Continuous Deployment, and the fundamental pipeline invariant.",
        academicSource:
          "Cornell CS 5150: Software Engineering (Release Management) & Cambridge Software and Security Engineering",
        details: [
          {
            heading: "The End-to-End Pipeline Stages",
            body: "A robust software delivery system follows a strict progression:\n1. Developer: Changes code, adds tests, commits and pushes to Git.\n2. Source Control: Branching, pull requests, and peer code review.\n3. CI (Verify): Linting, unit tests, integration tests with databases, and security dependency checks.\n4. Build and Publish: Container image compilation, container registry push, immutable SHA-256 digest generation, and build metadata attestations.\n5. CD (Deliver): Update deployment configuration repository, approval gates, and GitOps reconciliation.\n6. Kubernetes: Pod scheduling, readiness probe verification, monitoring, and automated recovery.",
          },
          {
            heading: "CI vs Continuous Delivery vs Continuous Deployment",
            body: "These concepts answer fundamentally different operational questions:\n- Continuous Integration (CI): 'Does the change meet build and test requirements?' Automates rapid feedback on pull requests.\n- Continuous Delivery (CD): 'Is a verified release ready to deploy?' Code is automatically tested, packaged, and staged, but promotion to production requires a human release decision or approval gate.\n- Continuous Deployment: 'Can a qualifying change be released automatically?' Every commit that passes verification gates flows directly to production with zero manual intervention.",
          },
          {
            heading: "The Most Important Pipeline Invariant",
            body: "A release pipeline must NOT proceed merely because a command was executed! It should proceed ONLY when the required previous stage succeeded and produced the expected evidence:\n- Tests must pass before an image is eligible for release.\n- Security policy checks must pass before publication.\n- The image must be published under an immutable content digest (`@sha256:...`).\n- Deployment health must be evaluated independently from whether the deployment command returned exit code 0.",
          },
        ],
        codeSnippet: `# Continuous Delivery vs Deployment Pipeline Governance
# Pipeline Invariant: Every gate must verify cryptographic evidence before promoting!
stages:
  - verify_source       # Linting, unit tests, pip-audit
  - build_artifact      # OCI container image creation
  - publish_digest      # Push to GHCR & capture immutable sha256 digest
  - deploy_staging      # GitOps sync to staging environment
  - manual_approval     # Continuous Delivery gate (omitted in Continuous Deployment)
  - deploy_production   # GitOps sync to production Kubernetes cluster`,
      },
      {
        id: "ci_tools_compared",
        title: "2. CI/CD Tools Compared: GitHub Actions, Jenkins, GitLab & Argo CD",
        badge: "Tool Architecture",
        icon: Terminal,
        summary:
          "Modern engineering uses different tools for different responsibilities. Compare GitHub Actions, Jenkins, GitLab CI/CD, and Argo CD across pipeline definitions, runner infrastructure, secrets, and artifacts.",
        academicSource:
          "Official GitHub Actions, Jenkins, GitLab, and Argo CD Architectural Guides",
        details: [
          {
            heading: "Core Roles in Modern Infrastructure",
            body: "- GitHub Actions: Event-driven workflows defined in `.github/workflows/*.yml`. Ideal when source code is hosted on GitHub, with native OIDC cloud authentication and hosted runners.\n- Jenkins: Highly customizable automation server defined in a `Jenkinsfile`. Ideal for on-premises enterprise infrastructure, requiring team maintenance of controllers, agent pools, and plugins.\n- GitLab CI/CD: Native GitLab integration defined in `.gitlab-ci.yml`. Pipeline stages, Auto DevOps, and DAG execution (`needs:`) managed via GitLab Runners.\n- Argo CD: Kubernetes continuous-delivery controller based on GitOps. Argo CD does not run tests or build images; it continuously reconciles declarative Git manifests with live Kubernetes clusters.",
          },
          {
            heading: "Which Combination Should You Learn First?",
            body: "- GitHub Actions + Argo CD: The industry-standard modern path for cloud-native Kubernetes delivery.\n- Jenkins + Argo CD: Common in traditional enterprises transitioning legacy monoliths to Kubernetes.\n- GitLab CI/CD + Argo CD: Preferred by organizations hosting end-to-end DevOps on self-managed GitLab instances.",
          },
        ],
        codeSnippet: `# Architectural Tool Matrix Comparison
# Tool              | Pipeline File            | Execution Unit   | Runner Infrastructure | Secrets Model
# ------------------|--------------------------|------------------|-----------------------|-----------------------
# GitHub Actions    | .github/workflows/*.yml  | Job & Step       | Hosted/Ephemeral VM   | Repo Secrets & OIDC
# Jenkins           | Jenkinsfile              | Stage & Step     | Controller/Agent Pods | Jenkins Credentials
# GitLab CI/CD      | .gitlab-ci.yml           | Stage & Job      | GitLab Runners (k8s)  | CI/CD Variables
# Argo CD (CD only) | Application CRD (YAML)   | Reconciliation   | In-Cluster Operator   | SealedSecrets/Vault`,
      },
      {
        id: "pipeline_stages",
        title: "3. Pipeline Stages: Source Control & The Testing Hierarchy",
        badge: "Testing Hierarchy",
        icon: CheckCircle2,
        summary:
          "Different tests catch different categories of failure. Understand the testing pyramid for the Notes API: linting, unit tests, integration tests with PostgreSQL, smoke tests, and performance benchmarks.",
        academicSource:
          "Cornell CS 5150: Software Engineering & Martin Fowler Test Pyramid",
        details: [
          {
            heading: "Source Control & Pull Request Policies",
            body: "Never allow direct, unreviewed pushes to production branches! A robust engineering workflow enforces:\n- Pull requests run automated test matrices and security audits.\n- Merging to `main` creates an immutable candidate build.\n- Deployment configuration is updated only after candidate images pass verification.\n- Branch protection rules require at least two approving reviews and green CI checks.",
          },
          {
            heading: "The Testing Pyramid for the Notes API",
            body: "1. Linting & Static Analysis: Flake8 and Black verify Python formatting and detect common syntax blunders.\n2. Unit Tests: Test isolated functions (e.g. note title validation, character limit rules) using Pytest in < 1 second.\n3. Integration Tests: Test API endpoints against a real disposable PostgreSQL database to verify transactions, indexes, and constraints.\n4. API & Smoke Tests: Query `/healthz` and `/notes` against deployed staging instances.\n5. End-to-End (E2E) Tests: Simulate complete user journeys: create note $\\rightarrow$ search by tag $\\rightarrow$ delete note.\n6. Performance Tests: Measure p95/p99 API latency under 1,000 req/sec load.",
          },
        ],
        codeSnippet: `# Notes API Pytest Suite (tests/test_app.py)
import pytest
from app import app, get_db_connection

def test_healthz():
    client = app.test_client()
    response = client.get("/healthz")
    assert response.status_code == 200
    assert response.json == {"status": "ok"}

def test_create_and_retrieve_note():
    client = app.test_client()
    # 1. Create Note
    res = client.post("/notes", json={"title": "DevOps", "body": "Study CI/CD"})
    assert res.status_code == 201
    note_id = res.json["id"]
    
    # 2. Retrieve Note from PostgreSQL
    get_res = client.get(f"/notes/{note_id}")
    assert get_res.status_code == 200
    assert get_res.json["title"] == "DevOps"`,
      },
      {
        id: "security_scanning",
        title: "4. Shift-Left Security: pip-audit, Secrets & OWASP CI/CD Guidance",
        badge: "DevSecOps",
        icon: ShieldCheck,
        summary:
          "Security checks belong inside CI because they can block unsafe releases before deployment. Master dependency vulnerability auditing with pip-audit, secret detection, and OWASP CI/CD protections.",
        academicSource:
          "OWASP CI/CD Security Cheat Sheet & Cambridge Software and Security Engineering",
        details: [
          {
            heading: "Core Automated Security Controls in CI",
            body: "- Dependency Auditing: Tools like `pip-audit` check Python packages against PyPI and Open Source Vulnerabilities (OSV) databases to prevent vulnerable libraries from entering builds.\n- Secret Scanning: High-entropy scanners like Gitleaks and TruffleHog inspect git commit trees to block committed credentials, AWS keys, and database passwords before they reach remote repositories.\n- Container Image Scanning: Trivy scans compiled OCI images for OS package vulnerabilities (dpkg/apk) and misconfigurations.\n- Provenance & Attestations: Cryptographic evidence linking build artifacts to source commits.",
          },
          {
            heading: "OWASP CI/CD Security Principles",
            body: "CI/CD systems are high-value targets for attackers. The OWASP CI/CD Cheat Sheet emphasizes:\n1. Workflows are production assets; protect workflow definitions with branch protection.\n2. Apply least privilege to execution tokens (`permissions: contents: read`).\n3. Never run untrusted pull request code with privileged secrets or triggers.",
          },
        ],
        codeSnippet: `# Automated Security Gate Commands
# 1. Audit Python dependencies against known CVEs
python -m pip install pip-audit
pip-audit -r requirements.txt --desc on

# 2. Scan Git history for committed API tokens and secrets
gitleaks detect --source . --verbose

# 3. Scan compiled container image for OS-level vulnerabilities
trivy image --severity HIGH,CRITICAL --exit-code 1 ghcr.io/example/notes-api:ci`,
      },
      {
        id: "artifacts_and_caches",
        title: "5. Artifacts, Caches, SBOM & Provenance",
        badge: "Supply Chain",
        icon: Package,
        summary:
          "A cache is a performance optimization, not a trusted release artifact. Learn the critical terminology: build artifacts, caches, container images, registries, SBOMs, and cryptographic provenance.",
        academicSource:
          "OpenSSF SLSA Specification & GitHub Artifact Attestations Documentation",
        details: [
          {
            heading: "Taxonomy of Build Outputs",
            body: "- Build Artifact: A file produced by a pipeline (e.g. compiled binary, release tarball).\n- Pipeline Artifact: An output retained or passed between jobs (e.g. JUnit XML test results, coverage HTML).\n- Cache: Reusable data intended to speed up subsequent jobs (e.g. `~/.cache/pip`, `node_modules/`). Caches are non-deterministic and can be deleted at any time without affecting build correctness.\n- Container Image: Packaged application code and runtime dependencies.\n- SBOM (Software Bill of Materials): Machine-readable inventory of all packages, dependencies, and licenses.\n- Provenance: Cryptographic attestation linking an artifact to the exact source commit, runner, and workflow.",
          },
          {
            heading: "Tags vs Immutable Content Digests",
            body: "Never rely on `:latest` or mutable tags for production deployments! A tag like `:v1.2` is a moving pointer that can be overwritten or drift across cluster nodes. Production Kubernetes manifests must ALWAYS reference immutable SHA-256 digests (`ghcr.io/org/notes-api@sha256:...`) to guarantee bit-for-bit mathematical reproducibility.",
          },
        ],
        codeSnippet: `# Generate SBOM and Capture Immutable Digest
# 1. Build and capture registry SHA-256 digest
docker buildx build --push \
  -t ghcr.io/example/notes-api:sha-4b91e70 \
  --output type=image,name=ghcr.io/example/notes-api,push-by-digest=true .

# 2. Generate Software Bill of Materials (SBOM) with Syft
syft ghcr.io/example/notes-api:sha-4b91e70 -o spdx-json=notes-sbom.json

# 3. Pin in Kubernetes manifest using exact immutable digest:
# image: ghcr.io/example/notes-api@sha256:4b91e70c8a129d38f24b01e9124a87c9103982e1`,
      },
      {
        id: "github_actions_notes_api",
        title: "6. GitHub Actions Implementation: Verification & Publishing",
        badge: "GitHub Actions",
        icon: Terminal,
        summary:
          "Step-by-step implementation of the Notes API delivery pipeline in GitHub Actions: the 'verify' test job, least privilege token permissions, concurrency cancellation, and the 'publish' job.",
        academicSource:
          "Official GitHub Actions Workflow Syntax & Docker Buildx Integration Guide",
        details: [
          {
            heading: "Workflow Structure (.github/workflows/ci.yml)",
            body: "The workflow runs on pushes to `main` and all pull requests. Key architectural settings:\n- `permissions: contents: read`: Grants minimal read permissions for repository checkout.\n- `concurrency: group: ... cancel-in-progress: true`: Automatically cancels outdated CI runs when new commits are pushed to the same PR, conserving runner resources.\n- `pytest -q`: Fails the build immediately if any unit or integration test fails.\n- `pip-audit -r requirements.txt`: Fails the build if vulnerable dependencies are detected.",
          },
          {
            heading: "The Publish Job & The 'needs: verify' Invariant",
            body: "The `publish` job runs ONLY on merges to `main` and depends on `needs: verify`. If testing or auditing fails, the publishing job never executes! It configures Docker Buildx, logs into GHCR, builds the production container, and outputs the resulting immutable digest.",
          },
        ],
        codeSnippet: `# .github/workflows/ci.yml (Notes API Complete Pipeline)
name: Notes API CI

on:
  push:
    branches: [main]
  pull_request:

permissions:
  contents: read

concurrency:
  group: ci-\${{ github.workflow }}-\${{ github.ref }}
  cancel-in-progress: true

jobs:
  verify:
    name: Test and scan
    runs-on: ubuntu-latest
    steps:
      - name: Check out source
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.13"

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          python -m pip install -r requirements.txt
          python -m pip install pytest pip-audit

      - name: Run tests
        run: pytest -q

      - name: Audit dependencies
        run: pip-audit -r requirements.txt

      - name: Build container image
        run: docker build -t notes-api:ci .

  publish:
    name: Publish container image
    needs: verify
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    outputs:
      image: \${{ steps.image.outputs.name }}
      digest: \${{ steps.build.outputs.digest }}
    steps:
      - name: Check out source
        uses: actions/checkout@v4

      - name: Normalize image name
        id: image
        shell: bash
        run: |
          image="ghcr.io/\${GITHUB_REPOSITORY,,}"
          echo "name=$image" >> "$GITHUB_OUTPUT"

      - name: Set up Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        id: build
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            \${{ steps.image.outputs.name }}:sha-\${{ github.sha }}`,
      },
      {
        id: "jenkins_notes_api",
        title: "7. Enterprise Jenkins Pipeline: Declarative Jenkinsfile",
        badge: "Jenkins",
        icon: Server,
        summary:
          "How the same delivery concepts look in Jenkins. Master the Declarative Jenkinsfile syntax, stage ordering, post-build actions, credential binding, and distributed agent pools.",
        academicSource:
          "Jenkins Official Pipeline Reference & Carnegie Mellon 17-645",
        details: [
          {
            heading: "Declarative Pipeline Architecture",
            body: "Jenkins stores pipeline logic in a `Jenkinsfile` committed alongside code in Git. Key directives:\n- `agent any`: Instructs the Jenkins Controller to schedule the build on an available agent node.\n- `options { timestamps(); disableConcurrentBuilds() }`: Prevents overlapping builds and formats console output.\n- `stages { ... }`: Groups tasks into discrete reviewable milestones (Checkout, Install dependencies, Test, Dependency audit, Build image).\n- `post { always { ... } }`: Guaranteed notification block for Slack or email reporting.",
          },
          {
            heading: "Production Jenkins Considerations",
            body: "In production, never use `agent any` on the Controller. Configure the Kubernetes plugin to spin up disposable container pods (Maven, Python, Docker-in-Docker) that are terminated after each build.",
          },
        ],
        codeSnippet: `// Jenkinsfile (Notes API Verification Pipeline)
pipeline {
    agent any
    options {
        timestamps()
        disableConcurrentBuilds()
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh '''
                python3 -m pip install --upgrade pip
                python3 -m pip install -r requirements.txt
                python3 -m pip install pytest pip-audit
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'pytest -q'
            }
        }
        stage('Dependency audit') {
            steps {
                sh 'pip-audit -r requirements.txt'
            }
        }
        stage('Build image') {
            steps {
                sh 'docker build -t notes-api:ci .'
            }
        }
    }
    post {
        always {
            echo 'CI run finished. Review stage results.'
        }
        failure {
            echo 'Pipeline failed! Invariant enforced: release aborted.'
        }
    }
}`,
      },
      {
        id: "gitlab_notes_api",
        title: "8. GitLab CI/CD: Stages, Runners & Cache Configuration",
        badge: "GitLab CI",
        icon: GitBranch,
        summary:
          "Implement the Notes API pipeline in `.gitlab-ci.yml`. Understand stage execution, caching dependencies across jobs, runner environments, and passing artifacts.",
        academicSource:
          "Official GitLab CI/CD Documentation & Imperial College London Systems Engineering",
        details: [
          {
            heading: ".gitlab-ci.yml Architecture",
            body: "- `stages: [verify, build]`: Defines sequential execution phases. All jobs in `verify` must complete before `build` begins.\n- `variables: PIP_CACHE_DIR`: Specifies local cache location to avoid re-downloading Python wheels.\n- `image: python:3.13`: Declares the container environment for running Pytest and pip-audit.\n- `image: docker:cli`: Spawns a lightweight Docker client connected to the runner's Docker daemon.",
          },
          {
            heading: "Cache vs Artifacts in GitLab",
            body: "The `PIP_CACHE_DIR` is strictly a performance enhancement. The build will succeed even if the cache is purged. Artifacts, on the other hand, are durable outputs passed downstream to deployment jobs.",
          },
        ],
        codeSnippet: `# .gitlab-ci.yml (Notes API Pipeline)
stages:
  - verify
  - build

variables:
  PIP_CACHE_DIR: "$CI_PROJECT_DIR/.cache/pip"

cache:
  paths:
    - .cache/pip/

test_and_audit:
  stage: verify
  image: python:3.13
  script:
    - python -m pip install --upgrade pip
    - python -m pip install -r requirements.txt
    - python -m pip install pytest pip-audit
    - pytest -q
    - pip-audit -r requirements.txt

build_image:
  stage: build
  image: docker:cli
  services:
    - docker:dind
  script:
    - docker build -t notes-api:ci .`,
      },
      {
        id: "gitops_and_argocd",
        title: "9. GitOps Doctrine: Separating CI from CD & Argo CD",
        badge: "GitOps Doctrine",
        icon: RefreshCw,
        summary:
          "CI and CD have distinct responsibilities. GitOps uses Git as the single source of truth for desired cluster state. Learn the platform-config repository layout and Argo CD Application tracking.",
        academicSource:
          "CNCF OpenGitOps Standard & Argo CD Official Documentation",
        details: [
          {
            heading: "Separating CI from GitOps CD Responsibilities",
            body: "- CI System (GitHub Actions / Jenkins / GitLab): Runs tests and scans, builds container images, publishes immutable digests to GHCR, and proposes deployment updates.\n- Git Configuration Repository (`platform-config`): Stores desired Kubernetes manifests (base and environment overlays for staging and production).\n- Argo CD Controller: Continuously polls the Git configuration repository and reconciles the live Kubernetes cluster to match declared manifests.",
          },
          {
            heading: "Repository Separation for the Notes API",
            body: "A clean enterprise architecture maintains two separate repositories:\n1. Application Repository (`notes-api`): Source code, Dockerfile, tests, `.github/workflows/ci.yml`.\n2. Platform Config Repository (`platform-config`):\n   - `apps/notes-api/base/` (deployment.yaml, service.yaml)\n   - `apps/notes-api/overlays/staging/`\n   - `apps/notes-api/overlays/production/`",
          },
        ],
        codeSnippet: `# Argo CD Application CRD (notes-api-staging)
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: notes-api-staging
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/YOUR_ORG/platform-config.git
    targetRevision: main
    path: apps/notes-api/overlays/staging
  destination:
    server: https://kubernetes.default.svc
    namespace: notes
  syncPolicy:
    automated:
      prune: true      # Automatically delete resources removed from Git
      selfHeal: true   # Automatically revert rogue manual cluster changes
    syncOptions:
      - CreateNamespace=true`,
      },
      {
        id: "secure_release_automation",
        title: "10. Secure Release Automation: Least Privilege & OIDC Federation",
        badge: "Pipeline Security",
        icon: Lock,
        summary:
          "A pipeline that publishes images and deploys applications has significant privileges. Treat it as part of your production security boundary. Master least privilege and OIDC federation.",
        academicSource:
          "OWASP CI/CD Security Cheat Sheet & GitHub Security Hardening for Workflows",
        details: [
          {
            heading: "Least Privilege Token Permissions",
            body: "Always start workflows with minimal permissions:\n`permissions: contents: read`\nGrant `packages: write` only to the specific job that publishes container images, and grant deployment-specific permissions only to the job that coordinates rollouts.",
          },
          {
            heading: "Defending Against Untrusted Pull Requests",
            body: "Be exceptionally careful with workflows triggered by public pull requests:\n- Never expose production secrets to untrusted forks.\n- Avoid `pull_request_target` with unsafe checkout patterns (`ref: ${{ github.event.pull_request.head.sha }}`). That pattern runs untrusted PR code with the repository's privileged write tokens, enabling credential theft.\n- Use standard `on: pull_request` which runs with a strictly read-only token.",
          },
          {
            heading: "Short-Lived Cloud Credentials via OIDC Federation",
            body: "Never store permanent, static AWS Access Keys or GCP JSON service account keys in CI/CD secrets. Use OpenID Connect (OIDC) federation: the CI runner exchanges a short-lived, cryptographically signed JWT token directly with AWS STS or GCP Workload Identity for temporary credentials that expire automatically.",
          },
        ],
        codeSnippet: `# Secretless AWS Deployment via OIDC Federation (No Static Keys!)
name: deploy-notes-api
on:
  push:
    branches: [main]

permissions:
  id-token: write  # Required for requesting OIDC JWT token
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check out configuration
        uses: actions/checkout@v4

      - name: Configure AWS Credentials via OIDC
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/NotesApiDeploymentRole
          aws-region: us-east-1
          audience: https://github.com/YOUR_ORG`,
      },
    ],
    []
  );

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (15 IN-DEPTH PRODUCTION QUESTIONS)
  // Aligned with Cornell CS 5150, Cambridge, and OWASP
  // =========================================================================
  const masteryQuestions = [
    {
      q: "What is the primary difference between Continuous Delivery and Continuous Deployment?",
      options: [
        "Continuous Delivery prepares a tested, deployable release candidate awaiting approval; Continuous Deployment automatically promotes qualifying changes to production without manual intervention.",
        "Continuous Delivery only works for Docker containers while Continuous Deployment works for virtual machines.",
        "Continuous Delivery requires Jenkins while Continuous Deployment requires GitLab.",
        "They are interchangeable synonyms in software engineering."
      ],
      correctIndex: 0,
      a: "Continuous Delivery ensures that software is automatically built, tested, and staged so that a verified release is always available, with production deployment typically gated by an explicit human or release decision. Continuous Deployment goes one step further: every commit that passes all automated quality and compliance gates automatically proceeds directly to production.",
    },
    {
      q: "What is the fundamental pipeline invariant that distinguishes a secure CI/CD pipeline from a simple shell script?",
      options: [
        "A pipeline must proceed only when the required previous stage succeeded and produced verified evidence (tests pass before build, scans pass before publish, deployment references immutable digest).",
        "A pipeline must execute all shell commands in parallel regardless of exit codes.",
        "A pipeline must be written in Bash rather than YAML.",
        "A pipeline must never fail under any circumstances."
      ],
      correctIndex: 0,
      a: "The core invariant states that a release pipeline should not proceed merely because a command was executed. Each stage consumes a verified output from the preceding stage: unit tests must pass before an image is built, dependency audits must pass before publication, and the deployment must reference an immutable digest.",
    },
    {
      q: "Why is a container image tag like 'ghcr.io/org/notes-api:latest' unsafe for production releases compared to an image digest?",
      options: [
        "Tags are mutable references that can be overwritten or drift across cluster nodes; SHA-256 digests mathematically identify bit-for-bit immutable image contents.",
        "Tags cannot be read by Kubernetes Kubelets.",
        "Tags cost extra subscription fees on GitHub Container Registry.",
        "Digests make container images run twice as fast."
      ],
      correctIndex: 0,
      a: "Tags like `:latest` or `:v1.2` are mutable pointers. If a tag is updated in the registry, different worker nodes in a Kubernetes cluster can pull different underlying images at different times. Pinning to an immutable digest (`image@sha256:...`) guarantees that every pod runs bit-for-bit identical code.",
    },
    {
      q: "What is the critical distinction between a CI Cache and a Build Artifact?",
      options: [
        "A cache is an optional performance optimization to speed up subsequent jobs (e.g. downloaded Python wheels); an artifact is a durable, verified output produced by the build (e.g. image or test report).",
        "Artifacts are only for frontend files while caches are only for databases.",
        "Caches are permanently retained forever while artifacts expire after 5 minutes.",
        "They are identical concepts with different names."
      ],
      correctIndex: 0,
      a: "A cache is a performance optimization used to avoid re-downloading dependencies across jobs (e.g. `.cache/pip`). A pipeline must execute correctly even if the cache is purged. In contrast, an artifact is a versioned, durable output (compiled binary, test report, or container image) guaranteed to be available for downstream stages.",
    },
    {
      q: "Why should default GitHub Actions workflow tokens be scoped to 'permissions: contents: read'?",
      options: [
        "To enforce the principle of least privilege, preventing compromised build steps or third-party actions from modifying repository code or publishing unauthorized packages.",
        "Because GitHub Actions does not support writing to repositories.",
        "To make Python unit tests run faster.",
        "Because read-only permissions reduce cloud hosting costs."
      ],
      correctIndex: 0,
      a: "Workflows must operate with the minimum permissions required. Setting `permissions: contents: read` ensures that even if a build script or third-party dependency is compromised, it cannot push malicious commits, modify repository settings, or publish forged packages.",
    },
    {
      q: "What dangerous security vulnerability arises from using 'on: pull_request_target' with an untrusted PR checkout?",
      options: [
        "It executes untrusted PR code in the context of the base repository with access to repository secrets and a read-write GITHUB_TOKEN, enabling credential exfiltration.",
        "It causes Docker containers to run out of memory.",
        "It deletes the Git branch permanently.",
        "It prevents developers from submitting code reviews."
      ],
      correctIndex: 0,
      a: "As warned by the OWASP CI/CD Cheat Sheet, `pull_request_target` triggers in the context of the base repository and grants access to secrets and read-write tokens. Checking out and running code from an untrusted fork (`${{ github.event.pull_request.head.sha }}`) allows attackers to execute arbitrary malicious code and steal production credentials.",
    },
    {
      q: "How does OpenID Connect (OIDC) federation improve security over static cloud credentials in CI/CD pipelines?",
      options: [
        "It eliminates long-lived, static access keys by exchanging short-lived, cryptographically signed JWT tokens with cloud STS for temporary, scoped IAM credentials.",
        "It encrypts git commit messages using RSA 4096-bit keys.",
        "It requires developers to enter an SMS one-time password on every push.",
        "It replaces Kubernetes with cloud virtual machines."
      ],
      correctIndex: 0,
      a: "Static API keys (e.g. AWS Secret Access Keys) stored in repository secrets can leak or be stolen. With OIDC federation, the CI runner requests an ephemeral JWT token signed by GitHub/GitLab and exchanges it with cloud STS endpoints for temporary credentials that expire automatically after the job completes.",
    },
    {
      q: "In an enterprise GitOps deployment model with Argo CD, why should the application source code and deployment manifests be kept in separate repositories?",
      options: [
        "It cleanly decouples CI (testing, building, scanning) from CD (environment manifests, staging/prod overlays), preventing circular build triggers and isolating release access.",
        "Git does not support storing YAML files and Python files in the same repository.",
        "Argo CD requires all repositories to be completely empty.",
        "It allows developers to bypass code review for production changes."
      ],
      correctIndex: 0,
      a: "Separating the application repo (`notes-api`) from the configuration repo (`platform-config`) enforces clean boundaries: CI commits to the app repo do not cause circular reconciliation loops, and access to production deployment manifests can be restricted to release leads and automated bots.",
    },
    {
      q: "What role does 'pip-audit' play in the Notes API CI pipeline?",
      options: [
        "It inspects installed Python dependencies against known CVE databases (PyPI Advisory & OSV) to block releases containing known security flaws.",
        "It measures Python function execution time in milliseconds.",
        "It formats Python code to conform to PEP 8 standards.",
        "It compiles Python into machine-native binary code."
      ],
      correctIndex: 0,
      a: "`pip-audit` scans installed project packages and `requirements.txt` against vulnerability databases. If a package has a known CVE, it halts the CI pipeline before the container image is compiled, preventing vulnerable dependencies from reaching production.",
    },
    {
      q: "In Jenkins, why is running builds on the Jenkins Controller ('agent any' on master) considered a major security and operational hazard?",
      options: [
        "Workloads executing on the Controller can exhaust Controller memory, access Jenkins master credentials on disk, and compromise the entire automation server.",
        "The Controller only runs on macOS operating systems.",
        "Agents cannot communicate with Docker daemons.",
        "The Controller does not support running Python tests."
      ],
      correctIndex: 0,
      a: "Executing build scripts on the Jenkins Controller risks crashing the automation server through memory exhaustion and exposes credentials and configuration files stored on the Controller filesystem. Production Jenkins installations delegate all workloads to isolated, ephemeral agent pods.",
    },
    {
      q: "In GitLab CI, what is the key performance benefit of Directed Acyclic Graph (DAG) execution with 'needs:'?",
      options: [
        "Jobs execute the exact second their specific upstream prerequisites finish, ignoring sequential stage boundaries and preventing slow unrelated tests from blocking builds.",
        "It converts Python code into WebAssembly.",
        "It deletes all automated tests to achieve 10-second builds.",
        "It automatically provisions multi-cloud VPCs."
      ],
      correctIndex: 0,
      a: "Sequential stages require all jobs in stage N to complete before any job in stage N+1 starts. With DAG execution (`needs:`), a job runs as soon as its specific declared dependencies complete, cutting total pipeline execution time by up to 75% in multi-service repositories.",
    },
    {
      q: "What is an SBOM (Software Bill of Materials) and how does it support software supply-chain security?",
      options: [
        "A formal, machine-readable inventory of all third-party libraries, transitive dependencies, and licenses inside an artifact, allowing instant identification of affected images when new CVEs are disclosed.",
        "A receipt showing how much cloud compute was spent on the build.",
        "A diagram showing network routes between Kubernetes pods.",
        "A list of all engineers who approved the pull request."
      ],
      correctIndex: 0,
      a: "An SBOM (e.g. SPDX or CycloneDX format generated by Syft) catalogs every direct and transitive package inside a container image. When zero-day vulnerabilities (like Log4j) emerge, security teams query their SBOM inventory to locate affected containers across the enterprise without rebuilding.",
    },
    {
      q: "In Argo CD, what is the consequence of enabling 'prune: true' in an Application's syncPolicy?",
      options: [
        "Argo CD automatically deletes live Kubernetes resources that have been removed from the tracked Git repository, ensuring the cluster does not retain orphaned workloads.",
        "Argo CD deletes all container images older than 7 days from the registry.",
        "Argo CD shuts down the Kubernetes cluster every weekend.",
        "Argo CD removes all user comments from pull requests."
      ],
      correctIndex: 0,
      a: "Pruning ensures true declarative synchronization: when a manifest is removed from Git, Argo CD deletes the corresponding live resource from the cluster. Without pruning, deleted Git resources would linger indefinitely as orphaned objects in the live cluster.",
    },
    {
      q: "Why must third-party GitHub Actions be pinned to full 40-character commit SHAs rather than mutable tags like '@v3'?",
      options: [
        "Tags are mutable Git refs that a compromised maintainer or attacker can overwrite with malicious code; commit SHAs are mathematically immutable cryptographic hashes.",
        "Tags do not support Linux runners.",
        "GitHub Actions charges an extra subscription fee when using tags.",
        "Commit SHAs run twice as fast in runner caches."
      ],
      correctIndex: 0,
      a: "Git tags are mutable pointers. If an attacker compromises a community action repository, they can move the `@v3` tag to point to a malicious commit that exfiltrates repository secrets and deployment tokens. Pinning to an immutable 40-character commit SHA guarantees you run the exact audited code.",
    },
    {
      q: "How should an SRE team manage database schema migrations within a continuous deployment GitOps pipeline?",
      options: [
        "Use backward-compatible expand/contract database changes with Kubernetes pre-sync hooks or init containers that complete successfully before the new application pods start.",
        "Run raw destructive SQL ALTER statements manually in the production database during business hours.",
        "Recreate the entire database from scratch on every git push.",
        "Never perform database changes in production."
      ],
      correctIndex: 0,
      a: "Database schema migrations in GitOps must follow the expand/contract pattern (non-breaking additive changes first, code rollout second, cleanup third). In Argo CD, schema migrations run as Kubernetes Jobs managed via pre-sync hooks (`argocd.argoproj.io/hook: PreSync`), ensuring the database schema is compatible before new application pods are deployed.",
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
          currentModuleId="cicd"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova CI/CD AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <RefreshCw size={14} />
              <span>Continuous Integration, Delivery, GitOps & Release Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 6 — CI/CD & GitOps
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              CI/CD is the automation system that takes software from a developer's commit to a tested, versioned, deployable release.{" "}
              <strong className="text-stone-900 font-semibold">
                The objective is not merely to automate commands. It is to make every release repeatable, traceable, testable and recoverable.
              </strong>{" "}
              Grounded in software engineering foundations from{" "}
              <span className="font-semibold text-stone-900">Cornell CS 5150</span>,{" "}
              <span className="font-semibold text-stone-900">Cambridge Software & Security Engineering</span>,{" "}
              <span className="font-semibold text-stone-900">OWASP CI/CD Guidance</span>, and official GitHub Actions, Jenkins, GitLab CI, and Argo CD documentation.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "pipeline-lab", label: "Lab 1: Notes API End-to-End Pipeline", icon: Activity },
              { id: "argocd-lab", label: "Lab 2: Argo CD Sync & Drift Triage", icon: RefreshCw },
              { id: "devsecops-gameday", label: "Lab 3: DevSecOps Incident GameDay", icon: ShieldAlert },
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
              currentTopic="devops-cicd-gitops"
              onClose={() => setShowAiTutor(false)}
            />
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: THEORY & CURRICULUM (10 TOPICS)                             */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* TOPICS SIDEBAR */}
            <div className="lg:col-span-4 space-y-2">
              <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-stone-600 font-mono">
                Curriculum Topics (10)
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
                        Academic Source:{" "}
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
                          <span>Production Manifest / Pipeline Code</span>
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
        {/* TAB 2: LAB 1 - NOTES API END-TO-END PIPELINE SIMULATOR             */}
        {/* =================================================================== */}
        {activeTab === "pipeline-lab" && (
          <div className="space-y-8 mb-16">
            {/* INTRO BANNER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Production Simulator • Lab 1
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    Notes API End-to-End GitOps CI/CD Pipeline
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Step through the ten-stage production lifecycle for the Notes API:{" "}
                    <strong>Developer</strong> → <strong>Git Push</strong> → <strong>CI Runner</strong> →{" "}
                    <strong>Pytest</strong> → <strong>pip-audit & Gitleaks</strong> → <strong>Docker Buildx</strong> →{" "}
                    <strong>GHCR Registry</strong> → <strong>Argo CD GitOps</strong> → <strong>Kubernetes</strong> →{" "}
                    <strong>Production</strong>. Test automated rollouts or inject failure gates.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleRunFullPipeline}
                    disabled={pipelineStatus === "running"}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 disabled:opacity-50 transition"
                  >
                    <Play size={14} />
                    <span>Run Full Pipeline</span>
                  </button>
                  <button
                    onClick={handleResetPipeline}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-stone-100 px-3.5 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* FAILURE INJECTION CONTROLS */}
              <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-stone-700 flex items-center gap-1.5 font-mono">
                  <Sliders size={13} className="text-orange-600" />
                  <span>Failure Injection Mode:</span>
                </span>
                {[
                  { id: "none", label: "Normal (Happy Path)" },
                  { id: "unit_tests", label: "Break Pytest" },
                  { id: "pip_audit_cve", label: "pip-audit CVE Block" },
                  { id: "registry_denied", label: "Missing packages:write" },
                  { id: "k8s_crash", label: "DB /readyz Probe Failure" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setInjectedFailure(f.id)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold font-mono transition border ${
                      injectedFailure === f.id
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 10-STAGE HORIZONTAL PIPELINE VISUALIZER */}
            <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl overflow-x-auto">
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Notes API Delivery Pipeline (10 Discrete Stages)</span>
                <span className="text-orange-400 font-bold">
                  Status: {pipelineStatus.toUpperCase()}
                </span>
              </div>

              <div className="min-w-[840px] flex items-center justify-between relative py-4">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-6 right-6 h-1 bg-stone-800 -translate-y-1/2 z-0" />

                {pipelineSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isCurrent = currentStepIndex === idx;
                  const isPast = currentStepIndex > idx;
                  const isFailedAtThis = pipelineStatus === "failed" && isCurrent;

                  let nodeBg = "bg-stone-800 text-stone-400 border-stone-700";
                  if (isPast) nodeBg = "bg-emerald-500 text-white border-emerald-400 shadow-md";
                  if (isCurrent && !isFailedAtThis)
                    nodeBg = "bg-orange-500 text-white border-orange-300 ring-4 ring-orange-500/20";
                  if (isFailedAtThis)
                    nodeBg = "bg-rose-600 text-white border-rose-400 ring-4 ring-rose-500/30";

                  return (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStepIndex(idx)}
                      className="relative z-10 flex flex-col items-center group cursor-pointer"
                    >
                      <div
                        className={`w-11 h-11 rounded-2xl border-2 flex items-center justify-center transition-all ${nodeBg}`}
                      >
                        <StepIcon size={18} />
                      </div>
                      <span className="text-[11px] font-bold mt-2 text-stone-300 group-hover:text-white transition">
                        {step.short}
                      </span>
                      <span className="text-[9px] font-mono text-stone-500">
                        {idx + 1} of 10
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* STEP CONTROLS (PREV / NEXT) */}
              <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                  className="inline-flex items-center gap-1 text-stone-300 hover:text-white disabled:opacity-40 transition"
                >
                  <ArrowLeft size={14} />
                  <span>Previous Step</span>
                </button>
                <span className="text-stone-400">
                  Inspecting Stage:{" "}
                  <strong className="text-orange-400">
                    {pipelineSteps[currentStepIndex].name}
                  </strong>
                </span>
                <button
                  onClick={handleNextStep}
                  disabled={currentStepIndex === pipelineSteps.length - 1}
                  className="inline-flex items-center gap-1 text-stone-300 hover:text-white disabled:opacity-40 transition"
                >
                  <span>Next Step</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* STAGE DETAILS & LIVE TERMINAL LOGS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* STAGE DETAILS & INSPECTION CARD */}
              <div className="lg:col-span-6 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono font-bold uppercase mb-2">
                    {pipelineSteps[currentStepIndex].actor}
                  </div>
                  <h3 className="text-2xl font-black text-stone-900">
                    {stepDetails.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">
                    {pipelineSteps[currentStepIndex].desc}
                  </p>
                </div>

                {/* COMMAND */}
                <div>
                  <div className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                    Command Executed in Stage
                  </div>
                  <div className="rounded-xl border border-stone-800 bg-[#18181b] p-3 text-xs font-mono text-emerald-400 overflow-x-auto">
                    $ {stepDetails.command}
                  </div>
                </div>

                {/* INSPECTABLE ARTIFACTS / ATTRIBUTES */}
                <div>
                  <div className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2">
                    Inspectable Artifacts & Cryptographic Metadata
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2 text-xs font-mono">
                    {Object.entries(stepDetails.inspect).map(([key, val]) => (
                      <div
                        key={key}
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-stone-200/60 last:border-none gap-1"
                      >
                        <span className="text-stone-500 font-bold">{key}:</span>
                        <span className="text-stone-800 font-semibold break-all">
                          {String(val)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TERMINAL LOG STREAM */}
              <div className="lg:col-span-6 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <div className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      <span>Real-Time CI/CD Orchestration Log Stream</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="mt-4 space-y-2 font-mono text-xs max-h-96 overflow-y-auto pr-2">
                    {stepDetails.outputs.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        className="text-stone-300 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-stone-600 select-none">{">"}</span>
                        <span>{line}</span>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-stone-800/80">
                      <div className="text-[10px] uppercase font-bold text-stone-500 mb-2">
                        Global Pipeline Event History:
                      </div>
                      {pipelineLogs.map((log, pIdx) => (
                        <div
                          key={pIdx}
                          className="text-[11px] text-stone-400 leading-relaxed font-mono"
                        >
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Engine: GitHub Actions + Pytest + Argo CD</span>
                  <span>Exit Code: {pipelineStatus === "failed" ? "1 (Error)" : "0 (Success)"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - ARGO CD SYNC & DRIFT TRIAGE SANDBOX                 */}
        {/* =================================================================== */}
        {activeTab === "argocd-lab" && (
          <div className="space-y-8 mb-16">
            {/* BANNER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Production Sandbox • Lab 2
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    Argo CD Declarative Sync & Cluster Drift Sandbox
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Compare Git repository desired state (`platform-config/apps/notes-api`) against live Kubernetes cluster state.
                    Simulate out-of-band mutations (e.g. rogue <code>kubectl edit</code>), test
                    automated <strong>selfHeal</strong> reconciliation, and observe automated pruning.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleArgoSync}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 transition"
                  >
                    <RefreshCw size={14} />
                    <span>Synchronize (Argo CD Sync)</span>
                  </button>
                </div>
              </div>

              {/* AUTOMATION TOGGLES */}
              <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center gap-6 text-xs font-mono">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selfHealEnabled}
                    onChange={(e) => setSelfHealEnabled(e.target.checked)}
                    className="rounded border-stone-300 text-orange-600 focus:ring-orange-500 h-4 w-4"
                  />
                  <span className="font-bold text-stone-800">
                    spec.syncPolicy.automated.selfHeal (Auto-revert cluster drift)
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoPruneEnabled}
                    onChange={(e) => setAutoPruneEnabled(e.target.checked)}
                    className="rounded border-stone-300 text-orange-600 focus:ring-orange-500 h-4 w-4"
                  />
                  <span className="font-bold text-stone-800">
                    spec.syncPolicy.automated.prune (Auto-delete removed resources)
                  </span>
                </label>

                <div className="ml-auto flex items-center gap-2">
                  <span className="font-bold text-stone-600">Application Status:</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      isDrifted
                        ? "bg-amber-100 text-amber-800 border border-amber-300"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    }`}
                  >
                    {isDrifted ? "OutOfSync" : "Synced (Healthy)"}
                  </span>
                </div>
              </div>
            </div>

            {/* SIDE-BY-SIDE: GIT REPO (DESIRED) VS LIVE CLUSTER (OBSERVED) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* GIT REPOSITORY (DESIRED STATE) */}
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <GitBranch size={16} className="text-orange-600" />
                    <h3 className="text-base font-bold text-stone-900">
                      Git Config Repo: Desired State (Source of Truth)
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">
                    platform-config/apps/notes-api/overlays/staging
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono font-bold text-stone-600 block mb-1">
                      Deployment Replicas: {gitReplicas}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={gitReplicas}
                      onChange={(e) => setGitReplicas(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-stone-600 block mb-1">
                      Immutable Image SHA Digest:
                    </label>
                    <div className="flex items-center gap-2">
                      {["sha256:4b91e70c8a129d38f24b", "sha256:9f82d1a3c4b5e6f7a8b9"].map((dig) => (
                        <button
                          key={dig}
                          onClick={() => setGitImageDigest(dig)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition truncate max-w-[200px] ${
                            gitImageDigest === dig
                              ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                              : "bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100"
                          }`}
                        >
                          {dig}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-stone-600 block mb-1">
                      CPU Limit:
                    </label>
                    <div className="flex items-center gap-2">
                      {["250m", "500m", "1000m"].map((cpu) => (
                        <button
                          key={cpu}
                          onClick={() => setGitCpuLimit(cpu)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition ${
                            gitCpuLimit === cpu
                              ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                              : "bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100"
                          }`}
                        >
                          {cpu}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* YAML DESIRED PREVIEW */}
                <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-4 text-xs font-mono text-stone-200">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-2">
                    Git Manifest: deployment.yaml
                  </div>
                  <div>spec:</div>
                  <div className="pl-4">replicas: {gitReplicas}</div>
                  <div className="pl-4">template:</div>
                  <div className="pl-8">spec:</div>
                  <div className="pl-12">containers:</div>
                  <div className="pl-16">
                    - name: api
                  </div>
                  <div className="pl-16">
                    image: ghcr.io/example/notes-api@{gitImageDigest}
                  </div>
                  <div className="pl-16">resources:</div>
                  <div className="pl-20">limits:</div>
                  <div className="pl-24">cpu: "{gitCpuLimit}"</div>
                </div>
              </div>

              {/* LIVE KUBERNETES CLUSTER (OBSERVED STATE) */}
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-orange-600" />
                    <h3 className="text-base font-bold text-stone-900">
                      Live Kubernetes Cluster (Observed State)
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">
                    namespace: notes
                  </span>
                </div>

                {/* TAMPER BUTTONS */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                  <div className="text-xs font-mono font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle size={14} className="text-amber-700" />
                    <span>Simulate Rogue Manual Out-of-Band Modification:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <button
                      onClick={() => handleManualClusterTamper("replicas", 8)}
                      className="px-2.5 py-1.5 rounded-lg border border-amber-300 bg-white hover:bg-amber-100 font-bold text-amber-900 transition"
                    >
                      kubectl scale --replicas=8
                    </button>
                    <button
                      onClick={() => handleManualClusterTamper("image", "sha256:corrupted000000000000")}
                      className="px-2.5 py-1.5 rounded-lg border border-amber-300 bg-white hover:bg-amber-100 font-bold text-amber-900 transition"
                    >
                      kubectl set image notes:corrupt
                    </button>
                    <button
                      onClick={() => handleManualClusterTamper("cpu", "2000m")}
                      className="px-2.5 py-1.5 rounded-lg border border-amber-300 bg-white hover:bg-amber-100 font-bold text-amber-900 transition"
                    >
                      kubectl edit cpu=2000m
                    </button>
                  </div>
                </div>

                {/* YAML OBSERVED PREVIEW WITH DRIFT HIGHLIGHTING */}
                <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-4 text-xs font-mono text-stone-200">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-2 flex items-center justify-between">
                    <span>Live Cluster: pods & deployment</span>
                    {isDrifted && (
                      <span className="text-amber-400 font-bold">
                        DIFF DETECTED (OutOfSync)
                      </span>
                    )}
                  </div>
                  <div>spec:</div>
                  <div
                    className={`pl-4 ${
                      clusterReplicas !== gitReplicas
                        ? "text-amber-300 font-bold bg-amber-500/20 px-1 rounded"
                        : ""
                    }`}
                  >
                    replicas: {clusterReplicas}
                  </div>
                  <div className="pl-4">template:</div>
                  <div className="pl-8">spec:</div>
                  <div className="pl-12">containers:</div>
                  <div className="pl-16">
                    - name: api
                  </div>
                  <div
                    className={`pl-16 ${
                      clusterImageDigest !== gitImageDigest
                        ? "text-amber-300 font-bold bg-amber-500/20 px-1 rounded truncate"
                        : ""
                    }`}
                  >
                    image: ghcr.io/example/notes-api@{clusterImageDigest}
                  </div>
                  <div className="pl-16">resources:</div>
                  <div className="pl-20">limits:</div>
                  <div
                    className={`pl-24 ${
                      clusterCpuLimit !== gitCpuLimit
                        ? "text-amber-300 font-bold bg-amber-500/20 px-1 rounded"
                        : ""
                    }`}
                  >
                    cpu: "{clusterCpuLimit}"
                  </div>
                </div>
              </div>
            </div>

            {/* SYNC HISTORY LOGS */}
            <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <RefreshCw size={14} className="text-orange-400" />
                  <span>Argo CD Application Controller Reconciliation Log</span>
                </div>
                <span>Sync Wave: {activeSyncWave}</span>
              </div>
              <div className="mt-4 space-y-1.5 font-mono text-xs max-h-48 overflow-y-auto">
                {syncHistory.map((item, idx) => (
                  <div key={idx} className="text-stone-300 leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - DEVSECOPS & PRODUCTION CI/CD GAMEDAY                */}
        {/* =================================================================== */}
        {activeTab === "devsecops-gameday" && (
          <div className="space-y-8 mb-16">
            {/* BANNER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Production Incident GameDay • Lab 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                DevSecOps & CI/CD Failure Triage GameDay
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Tackle 5 realistic production incidents: compromised third-party GitHub Actions,
                blocking dependency CVEs (pip-audit), mutating webhook drift loops in Argo CD,
                insecure pull_request_target token exfiltration, and CI runner cache poisoning.
              </p>

              {/* SCENARIO PICKER */}
              <div className="mt-6 flex flex-wrap gap-2">
                {gamedayScenarios.map((sc, sIdx) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setActiveGamedayIndex(sIdx);
                      setSelectedGamedayChoice(null);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition border ${
                      activeGamedayIndex === sIdx
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
                    }`}
                  >
                    {sc.badge}
                  </button>
                ))}
              </div>
            </div>

            {/* SCENARIO CARD */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold">
                  <ShieldAlert size={14} />
                  <span>Severity: {currentScenario.severity}</span>
                </div>
                <span className="text-xs font-mono text-stone-500">
                  Incident {activeGamedayIndex + 1} of {gamedayScenarios.length}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-stone-900">
                  {currentScenario.title}
                </h3>
                <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                    Incident Description:
                  </div>
                  <p className="text-sm text-stone-800 leading-relaxed">
                    {currentScenario.situation}
                  </p>
                  <div className="text-xs text-rose-700 font-bold mt-2">
                    Production Impact: {currentScenario.impact}
                  </div>
                </div>
              </div>

              {/* REMEDIATION CHOICES */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <div className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider">
                  Select the Architecturally Correct SRE Remediation:
                </div>
                {currentScenario.remediationChoices.map((choice, cIdx) => {
                  const isSelected = selectedGamedayChoice === cIdx;
                  return (
                    <button
                      key={cIdx}
                      onClick={() => setSelectedGamedayChoice(cIdx)}
                      className={`w-full text-left p-4 rounded-2xl border text-sm transition-all ${
                        isSelected
                          ? choice.correct
                            ? "bg-emerald-50 border-emerald-300 text-emerald-950 ring-2 ring-emerald-500/20"
                            : "bg-rose-50 border-rose-300 text-rose-950 ring-2 ring-rose-500/20"
                          : "bg-white border-stone-200 hover:bg-stone-50 text-stone-800"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected
                              ? choice.correct
                                ? "bg-emerald-600 text-white"
                                : "bg-rose-600 text-white"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {String.fromCharCode(65 + cIdx)}
                        </span>
                        <div className="space-y-2">
                          <p className="font-semibold leading-relaxed">
                            {choice.text}
                          </p>
                          {isSelected && (
                            <div
                              className={`p-3 rounded-xl text-xs leading-relaxed font-sans ${
                                choice.correct
                                  ? "bg-emerald-100/70 text-emerald-900 border border-emerald-200"
                                  : "bg-rose-100/70 text-rose-900 border border-rose-200"
                              }`}
                            >
                              <strong>
                                {choice.correct ? "✓ Correct SRE Playbook: " : "✗ Architectural Flaw: "}
                              </strong>
                              {choice.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: MASTERY ASSESSMENT (15 IN-DEPTH QUESTIONS)                  */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Comprehensive Assessment • 15 Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                CI/CD, GitOps & SRE Mastery Certification
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Test your conceptual and operational depth across Continuous Delivery vs Deployment,
                pipeline invariants, the testing pyramid, pip-audit, immutable digests, GitHub Actions,
                Jenkins distributed architecture, GitLab DAG execution, and Argo CD GitOps.
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
              DevOps & SRE Track • Module 6 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              CI/CD & GitOps Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand the full pipeline: Developer → Source Control → CI (verify) → Build Image →
              Container Registry → CD → Kubernetes → Production. You have mastered GitHub Actions,
              Jenkins, GitLab CI, Argo CD, pip-audit, and cryptographic provenance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/iac")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 5: IaC
            </button>
            <button
              onClick={() => navigate("/learning/devops/deployment")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 7 — Deployment Strategies →
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
