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
  CpuIcon,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsSecOps() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'pipeline-lab' | 'hardening-lab' | 'sbom-lab' | 'signing-lab' | 'iam-lab' | 'failure-drills' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // =========================================================================
  // SIMULATOR 1: DEVSECOPS 6-STAGE GATED PIPELINE SIMULATOR
  // Enforces SAST, SCA, BuildKit, Trivy, Syft SBOM, and Cosign Verification
  // =========================================================================
  const [injectVulnerableDep, setInjectVulnerableDep] = useState(false);
  const [injectLeakedSecret, setInjectLeakedSecret] = useState(false);
  const [injectPrivilegedPod, setInjectPrivilegedPod] = useState(false);
  const [injectUntrustedSigner, setInjectUntrustedSigner] = useState(false);
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [pipelineStage, setPipelineStage] = useState(0); // 0: Idle, 1: SAST/SCA, 2: BuildKit, 3: Container Scan, 4: SBOM/Provenance, 5: Cosign Sign, 6: K8s Admission
  const [pipelineLogs, setPipelineLogs] = useState([]);

  const handleRunPipeline = () => {
    setPipelineRunning(true);
    setPipelineStage(1);
    const logs = [];

    setTimeout(() => {
      // Stage 1: Source & SAST/SCA
      if (injectLeakedSecret) {
        logs.push({ stage: "1. SAST & Secrets", status: "FAILED", text: "Gitleaks / push-protection detected committed AWS_SECRET_KEY in config.py! Aborting pipeline.", type: "error" });
        setPipelineLogs([...logs]);
        setPipelineRunning(false);
        return;
      }
      if (injectVulnerableDep) {
        logs.push({ stage: "1. SAST & Secrets", status: "FAILED", text: "pip-audit flagged CVE-2023-46136 in werkzeug==2.2.2 (Severity: HIGH). Release policy rejects high CVEs.", type: "error" });
        setPipelineLogs([...logs]);
        setPipelineRunning(false);
        return;
      }
      logs.push({ stage: "1. SAST & Secrets", status: "PASSED", text: "Bandit scanned 42 files (0 issues). pip-audit verified 18 dependencies (0 vulnerabilities).", type: "success" });
      setPipelineLogs([...logs]);
      setPipelineStage(2);

      setTimeout(() => {
        // Stage 2: BuildKit Hardened Build
        logs.push({ stage: "2. BuildKit Build", status: "PASSED", text: "Docker BuildKit secret mount utilized (--mount=type=secret). 0 credentials persisted in layers.", type: "success" });
        setPipelineLogs([...logs]);
        setPipelineStage(3);

        setTimeout(() => {
          // Stage 3: Trivy Container & IaC Scan
          if (injectPrivilegedPod) {
            logs.push({ stage: "3. Container & IaC", status: "FAILED", text: "Trivy config detected privileged: true and missing seccompProfile in kubernetes/deployment.yaml!", type: "error" });
            setPipelineLogs([...logs]);
            setPipelineRunning(false);
            return;
          }
          logs.push({ stage: "3. Container & IaC", status: "PASSED", text: "Trivy image scan: 0 CRITICAL, 0 HIGH. Trivy config: Pod Security Standard Restricted compliant.", type: "success" });
          setPipelineLogs([...logs]);
          setPipelineStage(4);

          setTimeout(() => {
            // Stage 4: SBOM & SLSA Provenance
            logs.push({ stage: "4. SBOM & Provenance", status: "PASSED", text: "Anchore Syft generated SPDX JSON SBOM (114 components). SLSA Level 3 provenance predicate recorded.", type: "success" });
            setPipelineLogs([...logs]);
            setPipelineStage(5);

            setTimeout(() => {
              // Stage 5: Cosign Keyless Signing
              if (injectUntrustedSigner) {
                logs.push({ stage: "5. Cosign Signing", status: "PASSED", text: "Signed with rogue personal certificate: cert-identity=attacker@bad-actor.org.", type: "warn" });
              } else {
                logs.push({ stage: "5. Cosign Signing", status: "PASSED", text: "Cosign keyless signature generated via GitHub Actions OIDC (https://token.actions.githubusercontent.com).", type: "success" });
              }
              setPipelineLogs([...logs]);
              setPipelineStage(6);

              setTimeout(() => {
                // Stage 6: Kubernetes Admission Controller
                if (injectUntrustedSigner) {
                  logs.push({ stage: "6. K8s Admission", status: "BLOCKED", text: "Kyverno / Sigstore policy rejected deployment! Certificate identity does not match trusted GitHub repo.", type: "error" });
                } else {
                  logs.push({ stage: "6. K8s Admission", status: "DEPLOYED", text: "Admission controller verified image digest and signature! notes-api:v2.2.0 successfully deployed.", type: "success" });
                }
                setPipelineLogs([...logs]);
                setPipelineRunning(false);
              }, 600);
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    }, 600);
  };

  const handleResetPipeline = () => {
    setPipelineRunning(false);
    setPipelineStage(0);
    setPipelineLogs([]);
  };

  // =========================================================================
  // SIMULATOR 2: DOCKERFILE & K8S HARDENING AUDIT SANDBOX
  // =========================================================================
  const [runAsNonRoot, setRunAsNonRoot] = useState(true);
  const [readOnlyRoot, setReadOnlyRoot] = useState(true);
  const [dropAllCaps, setDropAllCaps] = useState(true);
  const [seccompDefault, setSeccompDefault] = useState(true);
  const [useSecretMount, setUseSecretMount] = useState(true);

  const securityScore = useMemo(() => {
    let score = 100;
    if (!runAsNonRoot) score -= 25;
    if (!readOnlyRoot) score -= 20;
    if (!dropAllCaps) score -= 20;
    if (!seccompDefault) score -= 15;
    if (!useSecretMount) score -= 20;
    return Math.max(0, score);
  }, [runAsNonRoot, readOnlyRoot, dropAllCaps, seccompDefault, useSecretMount]);

  const pssCompliance = useMemo(() => {
    if (securityScore >= 90) return { label: "Restricted (Hardened)", color: "text-emerald-700 bg-emerald-50 border-emerald-300" };
    if (securityScore >= 60) return { label: "Baseline (Standard)", color: "text-amber-700 bg-amber-50 border-amber-300" };
    return { label: "Privileged (Insecure)", color: "text-rose-700 bg-rose-50 border-rose-300" };
  }, [securityScore]);

  // =========================================================================
  // SIMULATOR 3: SOFTWARE BILL OF MATERIALS (SBOM) EXPLORER
  // =========================================================================
  const [sbomFilter, setSbomFilter] = useState("all"); // 'all' | 'os' | 'python'
  const sbomItems = [
    { name: "flask", version: "3.0.2", type: "python", license: "BSD-3-Clause", hash: "sha256:7b4a...", direct: true },
    { name: "werkzeug", version: "3.0.1", type: "python", license: "BSD-3-Clause", hash: "sha256:1a8c...", direct: false },
    { name: "sqlalchemy", version: "2.0.27", type: "python", license: "MIT", hash: "sha256:9f2d...", direct: true },
    { name: "psycopg2-binary", version: "2.9.9", type: "python", license: "LGPL-3.0", hash: "sha256:5e1f...", direct: true },
    { name: "libssl3", version: "3.0.11-1~deb12u2", type: "os", license: "Apache-2.0", hash: "sha256:3c8d...", direct: false },
    { name: "libc6", version: "2.36-9+deb12u4", type: "os", license: "LGPL-2.1", hash: "sha256:8b4e...", direct: false },
    { name: "ca-certificates", version: "20230311", type: "os", license: "MPL-2.0", hash: "sha256:4d2a...", direct: false },
  ];

  const filteredSbom = useMemo(() => {
    if (sbomFilter === "all") return sbomItems;
    return sbomItems.filter((item) => item.type === sbomFilter);
  }, [sbomFilter]);

  // =========================================================================
  // SIMULATOR 4: SIGSTORE COSIGN SIGNING & VERIFICATION ENGINE
  // =========================================================================
  const [signerIdentity, setSignerIdentity] = useState("https://github.com/my-org/notes-api/.github/workflows/release.yml@refs/heads/main");
  const [expectedIdentity, setExpectedIdentity] = useState("https://github.com/my-org/notes-api/.github/workflows/release.yml@refs/heads/main");
  const [issuerUrl, setIssuerUrl] = useState("https://token.actions.githubusercontent.com");

  const cosignVerifyResult = useMemo(() => {
    const isIdentityMatch = signerIdentity.trim() === expectedIdentity.trim();
    const isIssuerMatch = issuerUrl.trim() === "https://token.actions.githubusercontent.com";

    if (isIdentityMatch && isIssuerMatch) {
      return {
        status: "VERIFIED_SUCCESS",
        badge: "Cryptographically Verified",
        color: "text-emerald-700 bg-emerald-50 border-emerald-300",
        desc: "Image digest matches signature. Certificate issued by GitHub Actions OIDC Fulcio CA with Rekor transparency proof. Image admitted to cluster.",
      };
    }
    return {
      status: "ADMISSION_REJECTED",
      badge: "Signature Policy Mismatch",
      color: "text-rose-700 bg-rose-50 border-rose-300",
      desc: "Untrusted signing identity or rogue OIDC issuer. Kubernetes admission controller rejected deployment Pod creation!",
    };
  }, [signerIdentity, expectedIdentity, issuerUrl]);

  // =========================================================================
  // SIMULATOR 5: ZERO TRUST IAM & BLAST RADIUS CALCULATOR
  // =========================================================================
  const [iamModel, setIamModel] = useState("least_privilege"); // 'least_privilege' | 'shared_admin'

  const blastRadiusMetrics = useMemo(() => {
    if (iamModel === "least_privilege") {
      return {
        score: "8%",
        label: "Minimal Blast Radius (Zero Trust)",
        ciCreds: "Short-lived OIDC federated token (15 mins duration, id-token: write only)",
        k8sPerms: "ServiceAccount with non-root UID 10001, restricted namespace role",
        dbPerms: "Role notes_app: SELECT, INSERT, UPDATE on notes table only (NO DDL)",
        compromiseScenario: "If CI runner is breached, attacker can only push to staging repository. Database and production cluster remain completely unreachable.",
        color: "border-emerald-300 bg-emerald-50/60 text-emerald-950",
      };
    }
    return {
      score: "96%",
      label: "Catastrophic Blast Radius (Shared Admin)",
      ciCreds: "Long-lived AWS_ACCESS_KEY_ID stored in repo secrets with AdministratorAccess",
      k8sPerms: "cluster-admin ClusterRoleBinding assigned to default ServiceAccount",
      dbPerms: "Role postgres (superuser) with unrestricted DROP TABLE / ALTER permissions",
      compromiseScenario: "If any pull-request executes malicious code, attacker acquires permanent AWS root access, exfiltrates entire production database, and destroys the EKS cluster.",
      color: "border-rose-300 bg-rose-50/60 text-rose-950",
    };
  }, [iamModel]);

  // =========================================================================
  // 8 FAILURE-INJECTION SECURITY DRILLS (SECTION 14)
  // =========================================================================
  const [securityChecks, setSecurityChecks] = useState({
    secretLeakage: false,
    vulnDep: false,
    containerFinding: false,
    misconfigK8s: false,
    sbomAccuracy: false,
    wrongDigest: false,
    untrustedSig: false,
    runtimePolicy: false,
  });

  const securityChecksCompleted = Object.values(securityChecks).filter(Boolean).length;

  const toggleSecurityCheck = (key) => {
    setSecurityChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // =========================================================================
  // THEORY CURRICULUM TOPICS (8 DEEP-DIVE SECTIONS)
  // =========================================================================
  const theoryTopics = [
    {
      id: "operating-model",
      title: "1. The DevSecOps Operating Model & NIST SSDF",
      subtitle: "Moving from security as an afterthought to enforceable trust decisions",
      icon: ShieldCheck,
      tag: "Operating Model",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            <strong>DevSecOps</strong> means integrating security into every phase of the software development and
            operations lifecycle instead of conducting a manual security audit right before production.
            This module aligns with the <strong>NIST Secure Software Development Framework (SP 800-218)</strong> and
            the <strong>OWASP CI/CD Security Cheat Sheet</strong>.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-4">
              The 6-Stage DevSecOps Pipeline Architecture
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">1. Source & Dependencies</span>
                Code review, SAST (Bandit / CodeQL), secret scanning (push protection), SCA (pip-audit).
              </div>
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">2. Build & Configuration</span>
                Docker BuildKit secret mounts, IaC scanning (Trivy config), non-root build environments.
              </div>
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">3. Container Artifact</span>
                Trivy image scan (OS + packages), Syft SBOM generation, SLSA provenance record.
              </div>
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-emerald-400 font-bold block mb-1">4. Release Gating</span>
                Sigstore Cosign keyless signing with OIDC identity, immutable digest verification.
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800">
                <span className="text-emerald-400 font-bold block mb-1">5. Production Runtime</span>
                Kubernetes Pod Security Standards (Restricted), NetworkPolicies, Falco runtime audit.
              </div>
              <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-800">
                <span className="text-blue-400 font-bold block mb-1">6. Continuous Feedback</span>
                CVE monitoring on deployed digests, vulnerability triage, policy adjustment.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5 shadow-sm">
            <h4 className="font-bold text-orange-950 text-sm mb-2 flex items-center gap-2">
              <AlertOctagon size={16} className="text-orange-600" />
              The Core Principle: Security as Enforceable Policy
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              Running more scanners produces zero value if developers ignore warnings, credentials possess administrative
              wildcards, or production admits untrusted container images. DevSecOps succeeds only when security checks
              generate actionable evidence tied to immutable artifact digests and enforceable release gates.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "sast-sca",
      title: "2. SAST & Software Composition Analysis (SCA)",
      subtitle: "Detecting code-level vulnerabilities and untangling transitive dependency trees",
      icon: FileSearch,
      tag: "Code & Dependencies",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            <strong>Static Application Security Testing (SAST)</strong> inspects source code without executing it, searching for
            injection flaws, hardcoded credentials, and unsafe serialization. <strong>Software Composition Analysis (SCA)</strong>
            inspects third-party libraries for publicly disclosed CVEs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">SAST (Source Code)</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Analyzing What You Wrote</h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Tools like <strong>Bandit</strong> (Python), <strong>Semgrep</strong>, and <strong>GitHub CodeQL</strong> trace
                untrusted user input from request parameters down to database queries and system calls.
              </p>
              <div className="p-2.5 rounded-lg bg-stone-900 text-stone-200 font-mono text-[11px]">
                <code>python -m pip install bandit<br />bandit -r . -x ./tests</code>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">SCA (Dependencies)</span>
              <h4 className="font-bold text-stone-900 text-sm mt-1 mb-2">Analyzing What You Imported</h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Tools like <strong>pip-audit</strong> and GitHub Dependency Review parse lockfiles to identify vulnerable packages
                in both direct and transitive dependency trees.
              </p>
              <div className="p-2.5 rounded-lg bg-stone-900 text-stone-200 font-mono text-[11px]">
                <code>python -m pip install pip-audit<br />pip-audit -r requirements.txt</code>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">Direct vs. Transitive Vulnerabilities</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Your application imports <code className="font-mono text-stone-800">Flask</code> directly. But Flask imports
              <code className="font-mono text-stone-800">Werkzeug</code>, which imports other low-level parsers. Even if you never
              write a line of code touching Werkzeug, a buffer overflow or denial-of-service CVE in that transitive package
              exposes your production environment. Always pin exact versions with lockfiles!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "secrets-buildkit",
      title: "3. Secrets Management & Docker BuildKit Mounts",
      subtitle: "Never committing credentials and eliminating leaked build layers",
      icon: Key,
      tag: "Secrets Security",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Credentials (API keys, database passwords, private certificates) must never reside in Git or container images.
            An attacker does not need to find zero-day vulnerabilities in your application if your public repository or
            Docker image layer contains an exposed database password.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5 shadow-sm">
              <h4 className="font-bold text-rose-950 text-sm mb-2 flex items-center gap-2">
                <XCircle size={16} className="text-rose-600" />
                The Dangerous Anti-Pattern: ARG & ENV
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-mono">
                ARG GITHUB_TOKEN<br />
                ENV DB_PASSWORD=secret123
              </p>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                <strong>Why this is fatal:</strong> Any value passed via <code className="font-mono font-bold">ARG</code> or
                <code className="font-mono font-bold">ENV</code> is baked permanently into image metadata and layer history.
                Running <code className="font-mono text-rose-700">docker history --no-trunc notes-api</code> immediately exposes it!
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm">
              <h4 className="font-bold text-emerald-950 text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                The Secure Pattern: BuildKit Secret Mounts
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-mono">
                RUN --mount=type=secret,id=pip_config,target=/etc/pip.conf \
                pip install -r requirements.txt
              </p>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                <strong>Why this is secure:</strong> The secret file is mounted in memory during the execution of that specific
                command only. It is <strong>never</strong> committed to intermediate or final image filesystem layers.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-3">
              What to Do When a Secret Is Accidentally Committed
            </h4>
            <div className="space-y-2 text-xs font-mono text-stone-300">
              <p>1. <strong>Assume Compromise:</strong> Treat the secret as completely exposed even if the repo was private.</p>
              <p>2. <strong>Immediate Revocation:</strong> Revoke and rotate the credential at the provider immediately.</p>
              <p>3. <strong>Audit Blast Radius:</strong> Inspect CloudTrail / access logs to verify if the token was used maliciously.</p>
              <p>4. <strong>Clean Git History:</strong> Merely deleting the line in a new commit leaves the secret in history. Use <code className="text-orange-400">git-filter-repo</code> or BFG Repo-Cleaner.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "iam-oidc-k8s",
      title: "4. Zero-Trust IAM, OIDC & Kubernetes Pod Hardening",
      subtitle: "Eliminating static cloud keys with OIDC and restricting container privileges",
      icon: Fingerprint,
      tag: "Least Privilege",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Static credentials stored in CI/CD secrets (e.g. AWS access keys that never expire) present severe attack vectors.
            Modern DevSecOps uses <strong>OpenID Connect (OIDC) federation</strong> to grant GitHub Actions ephemeral,
            short-lived credentials scoped strictly to specific branches and repositories.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <FileCode size={14} className="text-orange-400" />
                <span>kubernetes-security-context.yaml • Pod Security Standard: Restricted</span>
              </div>
              <button
                onClick={() =>
                  handleCopyCode(
                    "k8s-sec-context",
                    `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: notes-api\nspec:\n  template:\n    spec:\n      securityContext:\n        runAsNonRoot: true\n        runAsUser: 10001\n        runAsGroup: 10001\n        seccompProfile:\n          type: RuntimeDefault\n      containers:\n      - name: api\n        image: ghcr.io/org/notes-api@sha256:7b4a6829f0e14a1e941190bc1f302b11e2f3d4e5f6\n        securityContext:\n          allowPrivilegeEscalation: false\n          readOnlyRootFilesystem: true\n          capabilities:\n            drop:\n            - ALL\n        volumeMounts:\n        - name: tmp-volume\n          mountPath: /tmp\n      volumes:\n      - name: tmp-volume\n        emptyDir: {}`
                  )
                }
                className="flex items-center gap-1 text-stone-400 hover:text-white transition"
              >
                <Copy size={12} />
                <span>{copiedCodeId === "k8s-sec-context" ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <pre className="mt-4 font-mono text-xs sm:text-sm text-stone-200 leading-relaxed overflow-x-auto">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-api
spec:
  template:
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        runAsGroup: 10001
        seccompProfile:
          type: RuntimeDefault
      containers:
      - name: api
        image: ghcr.io/org/notes-api@sha256:7b4a6829f0e14a1e941190bc1f302b11e2f3d4e5f6
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          capabilities:
            drop:
            - ALL
        volumeMounts:
        - name: tmp-volume
          mountPath: /tmp
      volumes:
      - name: tmp-volume
        emptyDir: {}`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "container-trivy",
      title: "5. Container Image & IaC Scanning with Trivy",
      subtitle: "Catching operating-system vulnerabilities and misconfigured Kubernetes manifests",
      icon: Scan,
      tag: "Vulnerability Scanning",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Scanning Python requirements alone is insufficient. A container image also packages an entire Linux userspace
            (Debian, Alpine, Ubuntu) with system binaries, SSL libraries, and glibc. A clean Python dependency scan can easily
            ship on an image harboring a critical OpenSSL remote code execution flaw.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <Package size={16} className="text-orange-600" />
                Image Scanning Gate
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Scan the built image and fail the CI pipeline if any unaccepted High or Critical CVEs are detected:
              </p>
              <div className="p-2.5 rounded-lg bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto">
                <code>trivy image \<br />  --severity HIGH,CRITICAL \<br />  --exit-code 1 \<br />  notes-api:local</code>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <FileCode size={16} className="text-blue-600" />
                IaC Misconfiguration Gate
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Detect privileged containers, missing resource limits, and open network rules in Terraform & Kubernetes manifests:
              </p>
              <div className="p-2.5 rounded-lg bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto">
                <code>trivy config ./kubernetes<br />trivy config ./terraform</code>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm">
            <h4 className="font-bold text-amber-950 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-700" />
              The Immutable Digest Deployment Rule
            </h4>
            <p className="text-xs text-stone-800 leading-relaxed">
              <strong>Never deploy using mutable tags like <code>:latest</code> or <code>:v1.0</code>!</strong>
              If you build, scan, and approve an image tag, but another developer or automated process pushes a new image
              to the same tag, Kubernetes will deploy unverified, unscanned code. Always reference the immutable digest:
              <code className="block mt-1 font-mono text-stone-800 bg-white/80 p-1.5 rounded border border-amber-200">
                image: ghcr.io/org/notes-api@sha256:4f8e6c7d2b1a9...
              </code>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "sbom-slsa",
      title: "6. Software Bill of Materials (SBOM) & SLSA Provenance",
      subtitle: "Creating comprehensive component inventories and verifying build authenticity",
      icon: Binary,
      tag: "Supply-Chain Integrity",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A <strong>Software Bill of Materials (SBOM)</strong> is a structured ingredient list of every software component,
            library, OS package, version, and license embedded inside an artifact. Popular formats include <strong>SPDX</strong> and
            <strong> CycloneDX</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">SBOM</span>
              <h5 className="font-bold text-stone-900 text-sm mt-1 mb-2">What is in the artifact?</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Generated with Anchore Syft. Catalogs 100% of embedded libraries so that when a zero-day (like Log4Shell) breaks,
                you can query instantly if you are vulnerable.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase">SLSA Provenance</span>
              <h5 className="font-bold text-stone-900 text-sm mt-1 mb-2">How was it built?</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Verifiable cryptographic metadata proving which source commit, CI runner, workflow file, and build parameters
                manufactured the artifact (SLSA Level 3).
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase">Digital Signature</span>
              <h5 className="font-bold text-stone-900 text-sm mt-1 mb-2">Who stands behind it?</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Cryptographic signature (via Sigstore Cosign) tying the image digest to a trusted signing identity and proving
                the artifact was not tampered with in transit.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cosign-signing",
      title: "7. Container Signing & Admission Verification with Cosign",
      subtitle: "Keyless signing via Sigstore and cryptographic enforcement at cluster ingress",
      icon: FileCheck,
      tag: "Cryptographic Attestation",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            <strong>Sigstore Cosign</strong> enables keyless image signing. Instead of managing sensitive private PGP keys in CI
            secrets, Cosign uses OpenID Connect (OIDC) to issue short-lived certificates via the <strong>Fulcio</strong> CA,
            recording the signature into the <strong>Rekor</strong> public transparency log.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-3">
              Cosign Keyless Signing & Verification Commands
            </h4>
            <div className="space-y-3 font-mono text-xs text-stone-200">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 block mb-1"># 1. Sign container image digest in GitHub Actions</span>
                <code>cosign sign --yes "$IMAGE_DIGEST"</code>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-emerald-400 block mb-1"># 2. Verify image against trusted GitHub repository identity</span>
                <code>cosign verify \<br />
  --certificate-identity "https://github.com/my-org/notes-api/.github/workflows/release.yml@refs/heads/main" \<br />
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \<br />
  "$IMAGE_DIGEST"</code>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "runtime-security-falco",
      title: "8. Runtime Security, Falco & NetworkPolicies",
      subtitle: "Detecting malicious syscalls and containing post-deployment breaches",
      icon: Activity,
      tag: "Runtime Defense",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Security does not end once the image is admitted into Kubernetes. A vulnerability in application logic or an
            authenticated credential compromise can still allow an adversary to execute remote commands at runtime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <Network size={16} className="text-orange-600" />
                Kubernetes NetworkPolicies
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                By default, all pods in a Kubernetes cluster can communicate with all other pods. A strict NetworkPolicy
                ensures that <code className="font-mono text-stone-800">notes-api</code> can only initiate egress to
                <code className="font-mono text-stone-800">postgresql:5432</code> and drops unauthorized lateral movement.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <ShieldAlert size={16} className="text-rose-600" />
                Falco Kernel Syscall Auditing
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Using eBPF, Falco monitors Linux kernel system calls in real-time. It triggers high-priority alerts whenever
                a shell (<code className="font-mono text-stone-800">/bin/bash</code>) is spawned inside a container or an unauthorized
                binary is written to disk.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // =========================================================================
  // 16 MASTERY ASSESSMENT QUESTIONS (SECTION 16)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "What does Static Application Security Testing (SAST) examine, and how does it differ from dependency scanning (SCA)?",
      options: [
        "SAST executes the application in staging; SCA checks network latency.",
        "SAST analyzes source code for insecure constructs and injection risks; SCA inspects third-party dependencies and libraries for known CVEs.",
        "SAST scans container operating systems; SCA tests Kubernetes ingress controllers.",
        "There is no difference; SAST and SCA are interchangeable terms.",
      ],
      c: 1,
      a: "SAST inspects your first-party code without execution (e.g. Bandit, CodeQL). SCA inspects third-party packages, libraries, and direct/transitive dependencies for reported CVEs (e.g. pip-audit).",
    },
    {
      q: "Why is scanning the final container image critical even if Python dependency checks (pip-audit) report zero vulnerabilities?",
      options: [
        "Python packages cannot be trusted unless converted into Debian packages.",
        "The final image contains operating-system packages (glibc, OpenSSL, curl, bash) and system libraries that do not exist in the Python requirements file.",
        "Container registries reject images that haven't been scanned twice.",
        "Pip-audit only inspects Go dependencies.",
      ],
      c: 1,
      a: "A container image combines your application code with a Linux base image. Critical vulnerabilities (such as OpenSSL or glibc flaws) exist in OS packages and are only visible when scanning the built container image.",
    },
    {
      q: "Why does deleting a committed credential from a file in Git fail to make it safe to use again?",
      options: [
        "Git retains historical commits in its object database, and the credential remains visible in commit history, clones, logs, and forks.",
        "The Linux kernel permanently caches committed text files in physical memory.",
        "Cloud providers automatically lock credentials when they are edited.",
        "Git branches are immutable and cannot be modified.",
      ],
      c: 0,
      a: "Git is an append-only directed acyclic graph. Deleting the line in a new commit simply creates a new commit; anyone can view the old commit containing the plain-text secret. It must be revoked immediately.",
    },
    {
      q: "Why are Dockerfile ARG and ENV instructions unsuitable for build-time secrets?",
      options: [
        "Docker daemon refuses to build images that contain ARG commands.",
        "Values passed to ARG or ENV are recorded in image layer metadata and can be easily extracted using 'docker history'.",
        "ARG and ENV values are converted to uppercase automatically.",
        "They slow down container build times by 500%.",
      ],
      c: 1,
      a: "ARG and ENV directives are persisted in image metadata layers. To pass build secrets safely without persisting them into layers, use Docker BuildKit secret mounts (--mount=type=secret).",
    },
    {
      q: "How does OpenID Connect (OIDC) federation reduce the need for permanent cloud credentials in CI/CD?",
      options: [
        "It eliminates the need for passwords on developer laptops.",
        "It allows CI jobs to exchange a short-lived, digitally signed JWT token for temporary cloud credentials, eliminating static stored secrets.",
        "It stores root AWS passwords in public GitHub repositories.",
        "It converts HTTP requests into SSH tunnels.",
      ],
      c: 1,
      a: "OIDC allows GitHub Actions to prove its identity directly to AWS/GCP/Azure via cryptographic tokens (JWTs), receiving temporary (e.g. 15-minute) credentials rather than storing permanent static API keys.",
    },
    {
      q: "What is the key difference between a Software Bill of Materials (SBOM), build provenance, and a digital signature?",
      options: [
        "SBOM inventories what components are inside; Provenance records how and where it was built; Signature verifies identity and integrity.",
        "SBOM signs images; Provenance scans code; Signature generates SBOMs.",
        "All three are identical terms created by NIST.",
        "SBOM is for hardware; Provenance is for operating systems; Signature is for web pages.",
      ],
      c: 0,
      a: "An SBOM lists all embedded components and versions. Build provenance (SLSA) documents the build environment and source commit. A digital signature (Cosign) proves the artifact's integrity and signing identity.",
    },
    {
      q: "What does a digital signature (e.g. via Cosign) actually prove, and what does it NOT prove?",
      options: [
        "It proves the code is completely bug-free and secure.",
        "It proves the artifact's cryptographic integrity and the identity of the signer; it does NOT prove the code is free of vulnerabilities or logic flaws.",
        "It proves the container will run with zero memory usage.",
        "It proves the application conforms to GDPR regulations.",
      ],
      c: 1,
      a: "A signature guarantees that the image digest has not been tampered with since being signed by an approved identity. It does not certify that the code is free from vulnerabilities—a malicious actor can sign vulnerable code.",
    },
    {
      q: "Why must a Kubernetes deployment reference the exact immutable image digest (@sha256:...) rather than a mutable tag like :latest?",
      options: [
        "Kubernetes cannot pull images that have alphanumeric tags.",
        "Mutable tags can be overwritten in the registry, meaning the deployed image might not be the artifact that passed scanning and signing.",
        "Digest pulls consume less network bandwidth.",
        "Docker tags are deprecated by the OCI standard.",
      ],
      c: 1,
      a: "Tags like :latest or :v1.0 can be overwritten. Deploying by immutable digest ensures the exact bit-for-bit container that passed SAST, Trivy, and Cosign verification is the one admitted into the cluster.",
    },
    {
      q: "What supply-chain risk does full commit-SHA pinning of GitHub Actions protect against?",
      options: [
        "It prevents network timeouts during git checkout.",
        "It protects against a compromised action maintainer or tag mutation injecting malicious code into your CI/CD runner.",
        "It eliminates the need for unit testing.",
        "It encrypts the GitHub Actions workflow file.",
      ],
      c: 1,
      a: "Floating tags (like actions/checkout@v4) can be pointed to malicious commits if the maintainer's account is breached. Pinning the full 40-character commit SHA guarantees immutable action code.",
    },
    {
      q: "How can an unvetted third-party GitHub Action compromise the entire software supply chain?",
      options: [
        "It can run arbitrary code on the CI runner, steal secrets (API tokens, OIDC tokens), and back-door built artifacts before they are signed.",
        "It can increase repository size beyond GitHub limits.",
        "It causes markdown files to render incorrectly.",
        "It disables git rebase commands.",
      ],
      c: 0,
      a: "GitHub Actions execute with the runner's full environment privileges. A compromised action can exfiltrate repository secrets, tamper with compiled binaries, or inject malicious dependencies before release.",
    },
    {
      q: "Why is running a container as a non-root user (e.g. UID 10001) a critical defense-in-depth measure?",
      options: [
        "It speeds up container startup time by bypassing PAM authentication.",
        "If an attacker escapes the container through a kernel vulnerability, they do not automatically obtain root privileges on the underlying host node.",
        "Non-root containers use less CPU cache.",
        "Kubernetes cannot assign IP addresses to root containers.",
      ],
      c: 1,
      a: "UID 0 inside a container maps directly to UID 0 on the Linux host (unless user namespaces are configured). Running as non-root mitigates the severity of container breakout vulnerabilities.",
    },
    {
      q: "What is the foundational principle of Zero Trust Architecture (NIST SP 800-207)?",
      options: [
        "Trust all traffic originating from within the internal corporate VPN.",
        "Never trust, always verify: make access decisions based on identity, permissions, and context rather than network perimeter location.",
        "Disable all firewall rules to allow transparent proxying.",
        "Never allow developers to access production logs.",
      ],
      c: 1,
      a: "Zero Trust rejects implicit trust based solely on network location. Every request, workload, and human identity must be authenticated, authorized, and continuously validated.",
    },
    {
      q: "How should an engineering team handle a High-severity vulnerability in a dependency when the upstream maintainer has not yet released a patch?",
      options: [
        "Delete the scanner configuration to silence the alert.",
        "Document an auditable security exception detailing the business justification, mitigating controls, assigned owner, and an explicit review expiration date.",
        "Immediately rewrite the entire dependency from scratch in assembly language.",
        "Ignore it because unpatched vulnerabilities cannot be exploited.",
      ],
      c: 1,
      a: "Unfixed vulnerabilities must be handled through a formal exception process with compensatory controls (e.g. WAF rules, disabling the vulnerable feature path) and an expiration date for reassessment.",
    },
    {
      q: "How can a platform engineer demonstrate that an unapproved container artifact cannot reach production?",
      options: [
        "By asking developers to promise they will only push approved images.",
        "By attempting to deploy an unsigned image or an image signed by an untrusted identity, verifying that the Kubernetes admission controller (Kyverno/Gatekeeper) blocks pod creation.",
        "By deleting the container registry completely.",
        "By running Trivy once a month on production servers.",
      ],
      c: 1,
      a: "Demonstrating security requires negative testing: attempt to deploy an image with an invalid signature or high CVEs and prove that the admission controller blocks the pod with an admission error.",
    },
    {
      q: "What runtime telemetry should be collected when investigating a suspected container compromise?",
      options: [
        "Only the container CPU utilization graph in Grafana.",
        "Kernel syscall events (Falco), container process execution logs, Kubernetes audit logs, authentication records, and network egress connection logs.",
        "The git commit history of the repository.",
        "The physical serial number of the server rack.",
      ],
      c: 1,
      a: "Forensic investigation requires kernel syscall auditing (process spawns, file modifications in /etc), network flow logs, and Kubernetes audit logs to reconstruct the attacker's timeline and lateral movement.",
    },
    {
      q: "In the DevSecOps operating model, what is meant by 'shifting left'?",
      options: [
        "Moving all servers to the Western cloud region.",
        "Introducing automated security scans, dependency audits, and policy checks as early as possible in the development lifecycle (IDE & PR) rather than delaying until production.",
        "Assigning security tasks exclusively to junior developers.",
        "Running CI pipelines in reverse chronological order.",
      ],
      c: 1,
      a: "Shifting left means integrating security testing and validation into the earliest phases of development (developer workstation, pull requests, automated CI) where vulnerabilities are fastest and cheapest to fix.",
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
          currentModuleId="secops"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask DevSecOps AI"
        />

        {/* HERO SECTION */}
        <div className="mt-8 rounded-3xl border border-stone-200/80 bg-white/90 p-6 sm:p-10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200/60 px-3 py-1 text-xs font-mono font-bold text-orange-700 mb-4">
                <Lock size={14} />
                <span>NIST SSDF & SLSA Supply-Chain Security</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
                Module 11 — DevSecOps
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                Integrate security throughout the delivery pipeline: SAST with Bandit/CodeQL, dependency auditing with pip-audit,
                BuildKit secret mounts, Trivy container & IaC scanning, Anchore Syft SBOM generation, Sigstore Cosign
                keyless signing, Zero Trust IAM, and Kubernetes Pod Security Standards.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 text-center shrink-0">
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">NIST</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">SSDF SP 800-218</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-orange-600">SLSA</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Supply-Chain L3</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">5</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Security Labs</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-emerald-600">16</span>
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
                <h3 className="font-bold text-sm">Nova AI — DevSecOps & Supply-Chain Architect</h3>
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
                defaultSubject="DevSecOps, NIST SSDF & Software Supply-Chain Security"
                conceptName="SAST, pip-audit, BuildKit, Trivy, Syft SBOM, Cosign Keyless Signing & Zero Trust"
              />
            </div>
          </div>
        )}

        {/* PRIMARY MODULE NAVIGATION TABS */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Curriculum Deep-Dive", icon: BookOpen },
            { id: "pipeline-lab", label: "Lab 1: 6-Stage Gate Simulator", icon: ShieldCheck },
            { id: "hardening-lab", label: "Lab 2: Pod & Docker Hardening", icon: Lock },
            { id: "sbom-lab", label: "Lab 3: Syft SBOM Explorer", icon: Binary },
            { id: "signing-lab", label: "Lab 4: Cosign Keyless Signing", icon: Fingerprint },
            { id: "iam-lab", label: "Lab 5: Zero Trust Blast Radius", icon: Key },
            { id: "failure-drills", label: "8 Failure-Injection Drills", icon: Flame },
            { id: "mastery", label: "16 Mastery Questions", icon: HelpCircle },
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
        {/* TAB 2: LAB 1 - DEVSECOPS 6-STAGE GATED PIPELINE SIMULATOR          */}
        {/* =================================================================== */}
        {activeTab === "pipeline-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive DevSecOps Lab 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                6-Stage Security-Gated Release Pipeline Simulator
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Test the automated security controls defending <code>notes-api</code>. Inject security faults
                (leaked secrets, CVEs, misconfigurations, or rogue signers) and watch how automated gates enforce release policy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* FAULT INJECTION TOGGLES */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Fault Injection Scenarios</span>
                </h3>

                <div className="space-y-3">
                  <div
                    onClick={() => setInjectLeakedSecret(!injectLeakedSecret)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                      injectLeakedSecret ? "border-rose-500 bg-rose-50/70" : "border-stone-200 bg-stone-50"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">Commit Leaked API Secret</span>
                      <span className="text-[11px] text-stone-500">Injects AWS_SECRET_KEY in config.py</span>
                    </div>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center ${injectLeakedSecret ? "bg-rose-600 text-white" : "border border-stone-300"}`}>
                      {injectLeakedSecret && <Check size={14} />}
                    </div>
                  </div>

                  <div
                    onClick={() => setInjectVulnerableDep(!injectVulnerableDep)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                      injectVulnerableDep ? "border-rose-500 bg-rose-50/70" : "border-stone-200 bg-stone-50"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">Introduce Vulnerable Dependency</span>
                      <span className="text-[11px] text-stone-500">Adds werkzeug==2.2.2 with High CVE</span>
                    </div>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center ${injectVulnerableDep ? "bg-rose-600 text-white" : "border border-stone-300"}`}>
                      {injectVulnerableDep && <Check size={14} />}
                    </div>
                  </div>

                  <div
                    onClick={() => setInjectPrivilegedPod(!injectPrivilegedPod)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                      injectPrivilegedPod ? "border-rose-500 bg-rose-50/70" : "border-stone-200 bg-stone-50"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">Insecure Kubernetes Manifest</span>
                      <span className="text-[11px] text-stone-500">Runs container as root with privileged: true</span>
                    </div>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center ${injectPrivilegedPod ? "bg-rose-600 text-white" : "border border-stone-300"}`}>
                      {injectPrivilegedPod && <Check size={14} />}
                    </div>
                  </div>

                  <div
                    onClick={() => setInjectUntrustedSigner(!injectUntrustedSigner)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                      injectUntrustedSigner ? "border-rose-500 bg-rose-50/70" : "border-stone-200 bg-stone-50"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">Sign with Untrusted Identity</span>
                      <span className="text-[11px] text-stone-500">Cosign certificate from rogue OIDC identity</span>
                    </div>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center ${injectUntrustedSigner ? "bg-rose-600 text-white" : "border border-stone-300"}`}>
                      {injectUntrustedSigner && <Check size={14} />}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex gap-2">
                  <button
                    disabled={pipelineRunning}
                    onClick={handleRunPipeline}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 p-3 text-xs font-bold text-white shadow-sm hover:bg-orange-700 disabled:opacity-50 transition"
                  >
                    <Play size={14} />
                    <span>{pipelineRunning ? "Executing Pipeline..." : "Trigger CI/CD Pipeline"}</span>
                  </button>
                  <button
                    onClick={handleResetPipeline}
                    className="p-3 rounded-xl border border-stone-300 bg-stone-100 text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              {/* LIVE STAGE TRACKER & LOGS */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Automated Security Gates</span>
                    <span>Stage {pipelineStage} / 6</span>
                  </div>

                  {/* STAGE STATUS INDICATOR */}
                  <div className="mt-4 grid grid-cols-6 gap-1.5 text-center text-[10px] font-mono">
                    {[
                      "1. SAST",
                      "2. BuildKit",
                      "3. Trivy",
                      "4. Syft SBOM",
                      "5. Cosign",
                      "6. Admission",
                    ].map((name, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded-lg border transition ${
                          pipelineStage > i + 1
                            ? "bg-emerald-950/60 border-emerald-700 text-emerald-300"
                            : pipelineStage === i + 1
                            ? pipelineRunning
                              ? "bg-orange-950/80 border-orange-600 text-orange-300 animate-pulse"
                              : "bg-rose-950/80 border-rose-600 text-rose-300"
                            : "bg-stone-900 border-stone-800 text-stone-500"
                        }`}
                      >
                        {name}
                      </div>
                    ))}
                  </div>

                  {/* REAL-TIME LOG STREAM */}
                  <div className="mt-6 space-y-2 max-h-72 overflow-y-auto font-mono text-xs pr-1">
                    {pipelineLogs.length === 0 ? (
                      <div className="text-stone-500 text-center py-10">
                        Pipeline idle. Configure scenarios and click "Trigger CI/CD Pipeline" to begin.
                      </div>
                    ) : (
                      pipelineLogs.map((log, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border ${
                            log.type === "error"
                              ? "bg-rose-950/60 border-rose-800 text-rose-300"
                              : log.type === "warn"
                              ? "bg-amber-950/60 border-amber-800 text-amber-300"
                              : "bg-emerald-950/60 border-emerald-800 text-emerald-300"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1 font-bold text-[11px]">
                            <span>{log.stage}</span>
                            <span>[{log.status}]</span>
                          </div>
                          <p className="text-[11px] text-stone-300">{log.text}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Enforcement Engine: Kyverno + Cosign OIDC</span>
                  <span>Exit Code: {pipelineLogs.some((l) => l.type === "error") ? "1 (BLOCKED)" : "0 (PROMOTED)"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - POD & DOCKERFILE HARDENING AUDIT                     */}
        {/* =================================================================== */}
        {activeTab === "hardening-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive DevSecOps Lab 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Kubernetes Pod Security Standard (PSS) Hardening Audit
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Toggle Linux kernel and container security controls. Watch the real-time Trivy misconfiguration score
                and see the generated production-hardened Pod manifest update dynamically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* TOGGLES */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <h3 className="font-bold text-stone-900 text-sm">Security Controls</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${pssCompliance.color}`}>
                    PSS: {pssCompliance.label}
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { state: runAsNonRoot, set: setRunAsNonRoot, label: "runAsNonRoot: true (UID 10001)", desc: "Blocks container execution as root (UID 0)" },
                    { state: readOnlyRoot, set: setReadOnlyRoot, label: "readOnlyRootFilesystem: true", desc: "Prevents attackers from dropping malware into image" },
                    { state: dropAllCaps, set: setDropAllCaps, label: "capabilities.drop: [ALL]", desc: "Strips all 38 dangerous Linux kernel capabilities" },
                    { state: seccompDefault, set: setSeccompDefault, label: "seccompProfile: RuntimeDefault", desc: "Filters dangerous Linux syscalls via seccomp" },
                    { state: useSecretMount, set: setUseSecretMount, label: "BuildKit secret mount (No ARG/ENV)", desc: "Mounts build tokens in memory, zero layer persistence" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => item.set(!item.state)}
                      className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                        item.state ? "border-emerald-500 bg-emerald-50/50" : "border-stone-200 bg-stone-50"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold text-stone-900 block font-mono">{item.label}</span>
                        <span className="text-[11px] text-stone-500">{item.desc}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${item.state ? "bg-emerald-600 text-white" : "border border-stone-300"}`}>
                        {item.state && <Check size={14} />}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Hardening Compliance Score:</span>
                    <span className="text-orange-600">{securityScore} / 100</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
                    <div
                      className={`h-full transition-all duration-300 ${
                        securityScore >= 90 ? "bg-emerald-600" : securityScore >= 60 ? "bg-amber-500" : "bg-rose-600"
                      }`}
                      style={{ width: `${securityScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* GENERATED MANIFEST */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Generated Hardened Manifest</span>
                    <span>Trivy Misconfig Findings: {100 - securityScore === 0 ? "0 Clean" : `${Math.round((100 - securityScore) / 15)} Detected`}</span>
                  </div>
                  <pre className="mt-4 font-mono text-xs text-stone-200 leading-relaxed overflow-x-auto">
{`apiVersion: v1
kind: Pod
metadata:
  name: notes-api-pod
spec:
  securityContext:
    runAsNonRoot: ${runAsNonRoot}
    runAsUser: ${runAsNonRoot ? "10001" : "0 (ROOT - INSECURE)"}
    seccompProfile:
      type: ${seccompDefault ? "RuntimeDefault" : "Unconfined (INSECURE)"}
  containers:
  - name: api
    image: ghcr.io/org/notes-api@sha256:4f8e6c7d2...
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: ${readOnlyRoot}
      capabilities:
        drop:
        ${dropAllCaps ? "- ALL" : "# WARNING: Kernel capabilities retained!"}`}
                  </pre>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500">
                  Target: Kubernetes Pod Security Standards (PSS) Restricted Profile
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SYFT SBOM EXPLORER                                  */}
        {/* =================================================================== */}
        {activeTab === "sbom-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive DevSecOps Lab 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Software Bill of Materials (SBOM) Inspector
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Explore the SPDX JSON component inventory generated by <strong>Anchore Syft</strong> for
                <code>notes-api:v2.2.0</code>. Filter by OS libraries and Python wheels to understand your attack surface.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-stone-500 uppercase">Filter Components:</span>
                  <div className="flex gap-1.5">
                    {[
                      { id: "all", label: "All Packages (7)" },
                      { id: "python", label: "Python Wheels (4)" },
                      { id: "os", label: "Debian OS (3)" },
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setSbomFilter(f.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition ${
                          sbomFilter === f.id
                            ? "bg-orange-500 text-white shadow-sm"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleCopyCode(
                      "sbom-cli",
                      "syft notes-api:local -o spdx-json=sbom.spdx.json"
                    )
                  }
                  className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-mono text-stone-700 hover:bg-stone-100"
                >
                  <Copy size={13} />
                  <span>{copiedCodeId === "sbom-cli" ? "Copied Command!" : "syft notes-api:local -o spdx-json"}</span>
                </button>
              </div>

              {/* SBOM TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400">
                      <th className="pb-2.5">Package Name</th>
                      <th className="pb-2.5">Version</th>
                      <th className="pb-2.5">Type</th>
                      <th className="pb-2.5">Relationship</th>
                      <th className="pb-2.5">License</th>
                      <th className="pb-2.5">Integrity Hash</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-800">
                    {filteredSbom.map((pkg, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/80 transition">
                        <td className="py-3 font-bold text-stone-900">{pkg.name}</td>
                        <td className="py-3 text-orange-600">{pkg.version}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              pkg.type === "python"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-purple-100 text-purple-800 border border-purple-200"
                            }`}
                          >
                            {pkg.type.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={pkg.direct ? "font-bold text-emerald-700" : "text-stone-500"}>
                            {pkg.direct ? "Direct Dependency" : "Transitive"}
                          </span>
                        </td>
                        <td className="py-3 text-stone-600">{pkg.license}</td>
                        <td className="py-3 text-stone-400 text-[11px]">{pkg.hash}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: LAB 4 - COSIGN KEYLESS SIGNING & ADMISSION                   */}
        {/* =================================================================== */}
        {activeTab === "signing-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive DevSecOps Lab 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Sigstore Cosign Keyless Signing & Admission Verification
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Sigstore replaces static private keys with short-lived OIDC signing certificates. Test verification
                against an expected identity and see why unauthorized signers are blocked at cluster admission.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* INPUTS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Fingerprint size={16} className="text-orange-600" />
                  <span>Signing Certificate Parameters</span>
                </h3>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1.5">
                    Signing Certificate Identity (Claims Subject):
                  </span>
                  <input
                    type="text"
                    value={signerIdentity}
                    onChange={(e) => setSignerIdentity(e.target.value)}
                    className="w-full text-xs font-mono p-3 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => setSignerIdentity("https://github.com/my-org/notes-api/.github/workflows/release.yml@refs/heads/main")}
                      className="text-[10px] font-mono text-emerald-700 hover:underline"
                    >
                      [Set Trusted CI Identity]
                    </button>
                    <button
                      onClick={() => setSignerIdentity("https://github.com/attacker-org/rogue-repo/.github/workflows/malicious.yml@refs/heads/main")}
                      className="text-[10px] font-mono text-rose-700 hover:underline"
                    >
                      [Set Attacker Identity]
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1.5">
                    Cluster Policy Expected Identity:
                  </span>
                  <input
                    type="text"
                    value={expectedIdentity}
                    onChange={(e) => setExpectedIdentity(e.target.value)}
                    className="w-full text-xs font-mono p-3 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-1.5">
                    OIDC Issuer URL:
                  </span>
                  <input
                    type="text"
                    value={issuerUrl}
                    onChange={(e) => setIssuerUrl(e.target.value)}
                    className="w-full text-xs font-mono p-3 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* VERIFICATION VERDICT */}
              <div className="lg:col-span-7 space-y-6">
                <div className={`rounded-3xl border p-6 sm:p-8 shadow-sm ${cosignVerifyResult.color}`}>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider">Admission Controller Verdict</span>
                    <span className="px-3 py-1 rounded-full font-bold text-xs bg-white/80">
                      {cosignVerifyResult.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-stone-900 mt-4">
                    {cosignVerifyResult.status === "VERIFIED_SUCCESS" ? "Image Admitted into Production" : "Deployment Rejected by Kyverno Policy"}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
                    {cosignVerifyResult.desc}
                  </p>
                </div>

                {/* VERIFICATION COMMAND */}
                <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Equivalent Cosign CLI Verification Command</span>
                    <button
                      onClick={() =>
                        handleCopyCode(
                          "cosign-verify-cmd",
                          `cosign verify \\\n  --certificate-identity "${expectedIdentity}" \\\n  --certificate-oidc-issuer "${issuerUrl}" \\\n  ghcr.io/my-org/notes-api@sha256:4f8e...`
                        )
                      }
                      className="flex items-center gap-1 text-stone-400 hover:text-white"
                    >
                      <Copy size={12} />
                      <span>{copiedCodeId === "cosign-verify-cmd" ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="mt-4 font-mono text-xs text-stone-200 leading-relaxed overflow-x-auto">
{`cosign verify \\
  --certificate-identity "${expectedIdentity}" \\
  --certificate-oidc-issuer "${issuerUrl}" \\
  ghcr.io/my-org/notes-api@sha256:4f8e6c7d...`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 6: LAB 5 - ZERO TRUST IAM & BLAST RADIUS                        */}
        {/* =================================================================== */}
        {activeTab === "iam-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive DevSecOps Lab 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Zero Trust IAM & Attack Blast Radius Sandbox
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Compare the blast radius of a compromised CI/CD workflow under a traditional Shared Admin model
                versus a Least-Privilege Zero Trust architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* MODEL SELECTOR */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Key size={16} className="text-orange-600" />
                  <span>IAM Architecture Model</span>
                </h3>

                <div className="space-y-3">
                  <button
                    onClick={() => setIamModel("least_privilege")}
                    className={`w-full p-4 rounded-2xl border text-left transition ${
                      iamModel === "least_privilege"
                        ? "border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <span className="text-xs font-bold text-emerald-950 block">Least-Privilege Zero Trust</span>
                    <span className="text-[11px] text-stone-500">Short-lived OIDC, granular DB roles, non-root K8s</span>
                  </button>

                  <button
                    onClick={() => setIamModel("shared_admin")}
                    className={`w-full p-4 rounded-2xl border text-left transition ${
                      iamModel === "shared_admin"
                        ? "border-rose-500 bg-rose-50/80 ring-2 ring-rose-500"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <span className="text-xs font-bold text-rose-950 block">Shared Administrator Model (Anti-Pattern)</span>
                    <span className="text-[11px] text-stone-500">Static AWS keys in GitHub secrets, superuser DB role</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <span className="font-mono font-bold text-stone-700 block">Compromise Scenario Analysis:</span>
                  <p className="text-stone-600 leading-relaxed">
                    {blastRadiusMetrics.compromiseScenario}
                  </p>
                </div>
              </div>

              {/* BLAST RADIUS CARD */}
              <div className="lg:col-span-7 space-y-6">
                <div className={`rounded-3xl border p-6 sm:p-8 shadow-sm ${blastRadiusMetrics.color}`}>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider">Attack Blast Radius</span>
                    <span className="text-2xl font-black">{blastRadiusMetrics.score}</span>
                  </div>

                  <h3 className="text-xl font-black text-stone-900 mt-4">
                    {blastRadiusMetrics.label}
                  </h3>

                  <div className="mt-6 space-y-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80">
                      <span className="text-stone-500 block text-[10px]">CI/CD Workflow Credentials</span>
                      <strong className="text-stone-900">{blastRadiusMetrics.ciCreds}</strong>
                    </div>

                    <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80">
                      <span className="text-stone-500 block text-[10px]">Kubernetes Workload Permissions</span>
                      <strong className="text-stone-900">{blastRadiusMetrics.k8sPerms}</strong>
                    </div>

                    <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80">
                      <span className="text-stone-500 block text-[10px]">Database Role & Privilege Scope</span>
                      <strong className="text-stone-900">{blastRadiusMetrics.dbPerms}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 7: 8 FAILURE-INJECTION EXERCISES                               */}
        {/* =================================================================== */}
        {activeTab === "failure-drills" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Section 14 Audit Standard
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    8 Failure-Injection Security Exercises
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
                    Security controls are verified only when negative tests demonstrate that policy violations
                    are actively blocked before reaching production.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3 bg-stone-50 border border-stone-200 px-4 py-3 rounded-2xl">
                  <Flame size={20} className="text-orange-600" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-stone-900">
                      Drills Completed: {securityChecksCompleted} / 8
                    </span>
                    <div className="w-32 bg-stone-200 h-1.5 rounded-full overflow-hidden mt-1">
                      <div
                        className="bg-orange-600 h-full transition-all duration-300"
                        style={{ width: `${(securityChecksCompleted / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "secretLeakage",
                  title: "1. Secret Leakage Push Prevention",
                  scenario: "Introduce a dummy test secret (e.g. fake GitHub personal access token).",
                  verification: "Confirm git push protection or local pre-commit hook blocks the commit.",
                  cmd: "git add . && git commit -m 'test secret' && git push origin main",
                },
                {
                  id: "vulnDep",
                  title: "2. Vulnerable Dependency Gate",
                  scenario: "Add werkzeug==2.2.2 (affected by CVE-2023-46136) to requirements.txt.",
                  verification: "Verify pip-audit fails with exit code 1 and blocks PR merge.",
                  cmd: "pip-audit -r requirements.txt",
                },
                {
                  id: "containerFinding",
                  title: "3. Container Image CVE Rejection",
                  scenario: "Build an image from an unpatched Debian base image.",
                  verification: "Verify Trivy image scan detects High/Critical CVEs and fails the build.",
                  cmd: "trivy image --severity HIGH,CRITICAL --exit-code 1 notes-api:local",
                },
                {
                  id: "misconfigK8s",
                  title: "4. Misconfigured Kubernetes Manifest",
                  scenario: "Add privileged: true and hostNetwork: true to deployment YAML.",
                  verification: "Verify Trivy config scanning flags violations against PSS Restricted profile.",
                  cmd: "trivy config ./kubernetes",
                },
                {
                  id: "sbomAccuracy",
                  title: "5. SBOM Accuracy Verification",
                  scenario: "Generate an SBOM and audit against installed packages.",
                  verification: "Verify Syft catalogs exact package versions and license metadata in SPDX JSON.",
                  cmd: "syft notes-api:local -o spdx-json=sbom.spdx.json",
                },
                {
                  id: "wrongDigest",
                  title: "6. Mismatched Image Digest",
                  scenario: "Change the referenced SHA256 digest in deployment YAML to an unscanned image.",
                  verification: "Confirm verification gate rejects deployment because digest does not match scan record.",
                  cmd: "kubectl set image deployment/notes-api api=ghcr.io/org/notes-api@sha256:bad...",
                },
                {
                  id: "untrustedSig",
                  title: "7. Untrusted Cosign Signature",
                  scenario: "Sign the image using a rogue GitHub repository OIDC workflow.",
                  verification: "Confirm Kyverno admission controller rejects the Pod deployment.",
                  cmd: "cosign verify --certificate-identity https://github.com/rogue/... $DIGEST",
                },
                {
                  id: "runtimePolicy",
                  title: "8. Runtime Pod Security Admission",
                  scenario: "Attempt to run a container as root (UID 0) in the production namespace.",
                  verification: "Verify Kubernetes Pod Security admission rejects pod with 403 Forbidden.",
                  cmd: "kubectl apply -f root-pod.yaml -n production",
                },
              ].map((drill) => {
                const isDone = securityChecks[drill.id];
                return (
                  <div
                    key={drill.id}
                    onClick={() => toggleSecurityCheck(drill.id)}
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
                        <strong>Expected Evidence:</strong> {drill.verification}
                      </p>
                    </div>

                    <div className="mt-3 p-2 rounded-lg bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto flex items-center justify-between">
                      <code>{drill.cmd}</code>
                      <Copy
                        size={12}
                        className="text-stone-400 hover:text-white shrink-0 ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyCode(drill.id, drill.cmd);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 8: 16 MASTERY ASSESSMENT QUESTIONS                              */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="mt-8 space-y-6 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Production Certification
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                DevSecOps Mastery Assessment
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Test your expertise across SAST, SCA, BuildKit secret mounts, Trivy container scanning,
                Anchore Syft SBOMs, Sigstore Cosign keyless signing, Zero Trust, and Kubernetes admission gates.
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
              DevOps & SRE Track • Module 11 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              DevSecOps & Supply-Chain Security Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand how to build an enforceable chain of cryptographic trust: SAST and SCA gates,
              BuildKit secret mounts, Trivy container and IaC scanning, Anchore Syft SBOM generation,
              Sigstore Cosign keyless signing, Zero Trust IAM, and Kubernetes Pod Security Standards.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/reliability")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 10: Reliability
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/platform")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 12 — Platform Engineering →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
