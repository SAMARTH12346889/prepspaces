import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
  Eye,
  FileText,
  Key,
  Database,
  Search,
  AlertCircle,
  FileSpreadsheet,
  TerminalSquare,
  Binary,
  FolderGit2,
  Filter,
  ShieldAlert,
  Target,
  Crosshair,
  UserCheck,
  UserX,
  FileWarning,
  Flame,
  CheckSquare,
  Square,
  PlusCircle,
  Trash2,
  Download,
  Fingerprint,
  Radio,
  FileCheck2,
  ListFilter,
  CheckCheck,
  TrendingUp,
  GitPullRequest,
  GitBranch,
  GitCommit,
  GitMerge,
  Bug,
  Braces,
  FolderCheck,
  ShieldX,
  ClipboardList,
  EyeOff,
  Code2,
  Wrench,
  Package,
  Layers3,
  FileSearch,
  CheckCircle,
  XCircle,
  BarChart3,
  TestTube2,
  Share2,
  Cloud,
  Container,
  Box,
  Split,
  Laptop,
  RadioTower,
  KeyRound,
  FileLock2,
  FolderLock,
  LockKeyhole,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 18                          */
/* Cloud Security, Containers, IAM Policies & Misconfiguration Assessment     */
/* Standards: AWS Well-Architected, CIS Benchmarks, NIST SP 800-190 & SP 800-207*/
/* -------------------------------------------------------------------------- */

export default function CybersecurityCloudContainerSecurity() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'iam-sim' | 'container-sim' | 'k8s-sim' | 'cspm-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: CLOUD IAM POLICY EVALUATOR & LEAST-PRIVILEGE GENERATOR        */
  /* -------------------------------------------------------------------------- */
  const [iamPolicyMode, setIamPolicyMode] = useState("overly_permissive"); // 'overly_permissive' | 'least_privilege'
  const [testedAction, setTestedAction] = useState("s3_read_report"); // 's3_read_report' | 's3_delete_backup' | 'iam_priv_esc' | 'logs_delete'

  const iamSimulation = useMemo(() => {
    const policies = {
      overly_permissive: {
        title: "Overly Permissive Wildcard Policy (High Risk)",
        json: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAllS3AndIAMWildcards",
      "Effect": "Allow",
      "Action": [
        "s3:*",
        "iam:*"
      ],
      "Resource": "*"
    }
  ]
}`,
        riskLevel: "CRITICAL",
        notes:
          "Dangerous wildcard grant: Allows deleting any production S3 bucket, creating admin access keys, and altering role trust policies across the entire cloud account.",
      },
      least_privilege: {
        title: "Least-Privilege Scoped Policy (Hardened)",
        json: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowReportReadAndWriteOnly",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::prepspaces-candidate-reports/\${aws:PrincipalTag/TenantId}/*"
    },
    {
      "Sid": "ExplicitDenyDestructiveActions",
      "Effect": "Deny",
      "Action": [
        "s3:DeleteBucket",
        "s3:DeleteObject",
        "iam:*"
      ],
      "Resource": "*"
    }
  ]
}`,
        riskLevel: "SECURE BASELINE",
        notes:
          "Strictly scoped to required operational actions (GetObject, PutObject) with ABAC tenant-path variables and explicit denials against destructive operations.",
      },
    };

    const actions = {
      s3_read_report: {
        label: "s3:GetObject on 'prepspaces-candidate-reports/rep-101.pdf'",
        purpose: "Application reads candidate interview report PDF for authorized evaluation.",
        isDangerous: false,
      },
      s3_delete_backup: {
        label: "s3:DeleteObject on 'prepspaces-database-backups/prod-db.dump'",
        purpose: "Adversary attempts ransomware deletion of production backup bucket.",
        isDangerous: true,
      },
      iam_priv_esc: {
        label: "iam:CreateAccessKey on 'admin_breakglass'",
        purpose: "Compromised service account attempts privilege escalation to cloud admin.",
        isDangerous: true,
      },
      logs_delete: {
        label: "logs:DeleteLogGroup on '/aws/cloudtrail/prod-audit'",
        purpose: "Attacker attempts covering tracks by destroying CloudTrail audit trail.",
        isDangerous: true,
      },
    };

    const activePolicy = policies[iamPolicyMode];
    const currentAction = actions[testedAction];

    let evaluationResult = "DENIED";
    let explanation = "";

    if (iamPolicyMode === "overly_permissive") {
      if (testedAction === "s3_read_report") {
        evaluationResult = "ALLOWED (ACCIDENTAL MATCH)";
        explanation = "Allowed by broad action 's3:*' on resource '*'. Operation succeeds.";
      } else if (testedAction === "s3_delete_backup") {
        evaluationResult = "ALLOWED (CRITICAL DATA LOSS)";
        explanation =
          "EXPLOIT SUCCESSFUL: Overly permissive 's3:*' permits deleting production backup archives!";
      } else if (testedAction === "iam_priv_esc") {
        evaluationResult = "ALLOWED (ACCOUNT TAKEOVER)";
        explanation =
          "CRITICAL ESCALATION: Policy permits 'iam:*'; workload identity can mint admin credentials!";
      } else {
        evaluationResult = "IMPLICIT DENY";
        explanation = "Action 'logs:*' is not included in the allow statement; request denied.";
      }
    } else {
      // LEAST PRIVILEGE
      if (testedAction === "s3_read_report") {
        evaluationResult = "ALLOWED (LEGITIMATE WORKFLOW)";
        explanation =
          "Allowed by explicit action 's3:GetObject' matching the scoped tenant bucket resource.";
      } else if (testedAction === "s3_delete_backup") {
        evaluationResult = "EXPLICITLY DENIED";
        explanation =
          "BLOCKED: 's3:DeleteObject' is matched by the explicit Deny statement in the guardrail policy.";
      } else if (testedAction === "iam_priv_esc") {
        evaluationResult = "EXPLICITLY DENIED";
        explanation =
          "BLOCKED: All 'iam:*' administrative actions are prohibited for this workload identity.";
      } else {
        evaluationResult = "IMPLICIT DENY";
        explanation = "Denied by default closed posture.";
      }
    }

    return { activePolicy, currentAction, evaluationResult, explanation };
  }, [iamPolicyMode, testedAction]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: DOCKERFILE & CONTAINER RUNTIME HARDENING SANDBOX              */
  /* -------------------------------------------------------------------------- */
  const [containerBuildMode, setContainerBuildMode] = useState("vulnerable"); // 'vulnerable' | 'hardened'
  const [runningContainerBreakoutTest, setRunningContainerBreakoutTest] = useState(false);
  const [breakoutResult, setBreakoutResult] = useState(null);

  const containerDetails = useMemo(() => {
    if (containerBuildMode === "vulnerable") {
      return {
        title: "Insecure Container Configuration (Root Execution & Privileged Mode)",
        dockerfile: `# VULNERABLE: Insecure Dockerfile anti-patterns
FROM node:latest

# ANTI-PATTERN 1: Running as root (UID 0) inside container
# Default USER is root; processes inherit full kernel capabilities

WORKDIR /app

# ANTI-PATTERN 2: Missing .dockerignore; copies .git, .env, and secrets
COPY . .

RUN npm install

# ANTI-PATTERN 3: Exposes unnecessary debugging and SSH ports
EXPOSE 3000 22 9229

# ANTI-PATTERN 4: Privileged container flag enabled in runtime compose
# docker run --privileged -v /:/host:rw -p 3000:3000 my-app
CMD ["node", "server.js"]`,
        trivyVulns: {
          critical: 4,
          high: 17,
          medium: 42,
          cveExamples: "CVE-2023-44487 (HTTP/2 Rapid Reset), CVE-2024-21508 (Prototype Pollution)",
        },
        cisScore: "2 / 10 Checks Passed",
        securityVerdict: "FAIL (High Blast Radius)",
      };
    } else {
      return {
        title: "Hardened Distroless/Slim Container (Least-Privilege Non-Root)",
        dockerfile: `# HARDENED: Multi-stage build with non-root unprivileged runtime
# STAGE 1: Build & Dependency compilation
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# STAGE 2: Minimal hardened production runtime
FROM gcr.io/distroless/nodejs22-debian12:nonroot
WORKDIR /app

# SECURITY CONTROL 1: Pre-configured unprivileged user (UID 65532:nonroot)
# Container cannot modify system binaries or bind ports < 1024

COPY --from=build --chown=nonroot:nonroot /app/node_modules ./node_modules
COPY --chown=nonroot:nonroot . .

# SECURITY CONTROL 2: Explicitly scoped production port
EXPOSE 3000

# SECURITY CONTROL 3: Immutable read-only root filesystem
# docker run --read-only --cap-drop=ALL --security-opt=no-new-privileges:true
USER nonroot
CMD ["server.js"]`,
        trivyVulns: {
          critical: 0,
          high: 0,
          medium: 2,
          cveExamples: "Zero reachable critical/high vulnerabilities; distroless package surface",
        },
        cisScore: "10 / 10 Checks Passed",
        securityVerdict: "PASS (CIS Benchmark Aligned)",
      };
    }
  }, [containerBuildMode]);

  const testContainerBreakout = () => {
    setRunningContainerBreakoutTest(true);
    setBreakoutResult(null);

    setTimeout(() => {
      if (containerBuildMode === "vulnerable") {
        setBreakoutResult({
          status: "CONTAINER ESCAPE DETECTED",
          severity: "CRITICAL",
          evidence:
            "Attacker executed 'nsenter --mount=/host/proc/1/ns/mnt /bin/bash'. Because the container ran with '--privileged' and as root, the adversary accessed the host filesystem with full host-level administrative capabilities!",
          safe: false,
        });
      } else {
        setBreakoutResult({
          status: "CONTAINER ESCAPE PREVENTED",
          severity: "SECURE",
          evidence:
            "Exploit payload dropped: Container executed as UID 65532 (non-root), capabilities dropped (ALL), read-only rootfs enforced, and 'no-new-privileges' blocked suid privilege escalation.",
          safe: true,
        });
      }
      setRunningContainerBreakoutTest(false);
    }, 800);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: KUBERNETES RBAC & NETWORKPOLICY ISOLATION MATRIX              */
  /* -------------------------------------------------------------------------- */
  const [k8sNetworkPolicyEnforced, setK8sNetworkPolicyEnforced] = useState(true);
  const [k8sRbacScope, setK8sRbacScope] = useState("namespaced_role"); // 'cluster_admin' | 'namespaced_role'
  const [sourcePod, setSourcePod] = useState("frontend"); // 'frontend' | 'guest_attacker'
  const [targetService, setTargetService] = useState("backend_api"); // 'backend_api' | 'kube_api_secrets' | 'public_internet'

  const k8sSimulation = useMemo(() => {
    let trafficAllowed = false;
    let rationale = "";

    if (targetService === "kube_api_secrets") {
      // Testing RBAC against Kubernetes API Server
      if (k8sRbacScope === "cluster_admin") {
        trafficAllowed = true;
        rationale =
          "CRITICAL RBAC EXPLOIT: Pod service account is bound to 'ClusterRole/cluster-admin'. Attacker queried GET /api/v1/namespaces/kube-system/secrets and extracted database keys and TLS certificates!";
      } else {
        trafficAllowed = false;
        rationale =
          "RBAC ENFORCED: Service account is bound to a scoped namespace Role. Attempt to read Kube-system secrets rejected with 'HTTP 403 Forbidden: secrets is forbidden'.";
      }
    } else {
      // Testing NetworkPolicy between pods
      if (!k8sNetworkPolicyEnforced) {
        trafficAllowed = true;
        rationale =
          "DEFAULT OPEN CNI (No NetworkPolicy): Pods in all namespaces can freely route east-west traffic to any IP. Compromised pod can probe internal backend APIs.";
      } else {
        // NetworkPolicy is ACTIVE
        if (sourcePod === "frontend" && targetService === "backend_api") {
          trafficAllowed = true;
          rationale =
            "PERMITTED WORKFLOW: NetworkPolicy ingress rule explicitly allows traffic matching 'app: frontend' on TCP port 8080.";
        } else if (sourcePod === "guest_attacker" && targetService === "backend_api") {
          trafficAllowed = false;
          rationale =
            "NETWORKPOLICY ENFORCED: Ingress dropped! CNI packet filter dropped connection from unapproved pod selector 'app: guest'.";
        } else if (targetService === "public_internet") {
          trafficAllowed = sourcePod === "frontend";
          rationale =
            sourcePod === "frontend"
              ? "ALLOWED: Egress permitted to external internet for client asset delivery."
              : "EGRESS DENIED: Zero-trust egress NetworkPolicy restricts unauthorized outbound tunneling.";
        }
      }
    }

    return { trafficAllowed, rationale };
  }, [k8sNetworkPolicyEnforced, k8sRbacScope, sourcePod, targetService]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: CSPM CLOUD POSTURE & IAC SCANNER (CHECKOV / PROWLER)          */
  /* -------------------------------------------------------------------------- */
  const [scanningCspm, setScanningCspm] = useState(false);
  const [cspmHardened, setCspmHardened] = useState(false);
  const [cspmResults, setCspmResults] = useState(null);

  const runCspmScan = () => {
    setScanningCspm(true);
    setCspmResults(null);

    setTimeout(() => {
      if (!cspmHardened) {
        setCspmResults({
          score: "52% (Failing CIS Benchmark)",
          findings: [
            {
              id: "CKV_AWS_19",
              severity: "CRITICAL",
              resource: "aws_s3_bucket.candidate_resumes",
              title: "S3 Bucket allows unrestricted public READ access",
              fix: "Enable 'block_public_acls = true' & 'block_public_policy = true'.",
            },
            {
              id: "CKV_AWS_24",
              severity: "HIGH",
              resource: "aws_security_group.app_sg",
              title: "Security Group allows ingress 0.0.0.0/0 on port 22 (SSH)",
              fix: "Restrict SSH ingress to corporate VPN CIDR (10.0.0.0/16) or use AWS Systems Manager Session Manager.",
            },
            {
              id: "CKV_AWS_145",
              severity: "HIGH",
              resource: "aws_s3_bucket.candidate_resumes",
              title: "S3 Bucket does not use Customer Managed Key (CMK) KMS encryption",
              fix: "Specify 'server_side_encryption_configuration' with KMS key ARN.",
            },
            {
              id: "CKV_AWS_67",
              severity: "MEDIUM",
              resource: "aws_cloudtrail.main",
              title: "CloudTrail multi-region logging is disabled",
              fix: "Set 'is_multi_region_trail = true' to capture global account events.",
            },
          ],
        });
      } else {
        setCspmResults({
          score: "100% (Passes CIS AWS Foundations v3.0)",
          findings: [
            {
              id: "CIS_COMPLIANT",
              severity: "PASS",
              resource: "Entire Terraform State (34 Managed Resources)",
              title: "All Infrastructure as Code checks passed: 0 public buckets, 0 open SSH rules, KMS encrypted.",
              fix: "Continuous drift monitoring active. PR gate approved.",
            },
          ],
        });
      }
      setScanningCspm(false);
    }, 700);
  };

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (18.13 - 10 Questions)                           */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What does the cloud shared responsibility model describe?",
      options: [
        "The customer and provider have identical responsibilities",
        "The allocation of security responsibilities between provider and customer",
        "The cloud provider is always responsible for application security",
        "The customer has no responsibility for managed services",
      ],
      correct: 1,
      explanation:
        "The shared responsibility model delineates security responsibilities: the cloud provider secures the cloud infrastructure (hardware, hypervisors, facilities), while the customer secures data, IAM policies, operating systems, and application configurations in the cloud.",
    },
    {
      id: 2,
      question: "Why is a public storage bucket policy potentially dangerous?",
      options: [
        "Public access always disables encryption",
        "It may disclose or permit modification of sensitive data",
        "It automatically prevents logging",
        "It always grants administrator access to the entire cloud account",
      ],
      correct: 1,
      explanation:
        "Public object storage configurations expose files to unauthenticated requests over the internet, risking mass data exfiltration, tampering with application assets, or data destruction.",
    },
    {
      id: 3,
      question: "What is the principle of least privilege in cloud IAM?",
      options: [
        "Grant every developer administrator access",
        "Grant identities only the permissions required for their approved tasks",
        "Disable all authentication",
        "Give every workload the same service identity",
      ],
      correct: 1,
      explanation:
        "Least privilege dictates granting identities (users, roles, workloads) only the minimum actions and resource scopes required to complete their legitimate duties, restricting wildcards and privilege escalation paths.",
    },
    {
      id: 4,
      question: "What is a trust policy or role-assumption rule primarily concerned with?",
      options: [
        "Which principals can obtain or assume an identity",
        "Which container image is smallest",
        "How DNS resolves a hostname",
        "How a disk is partitioned",
      ],
      correct: 0,
      explanation:
        "A trust policy defines which principals (users, services, external accounts, or federated identity providers) are authorized to assume a specific IAM role (via sts:AssumeRole).",
    },
    {
      id: 5,
      question: "Why should containerized applications avoid running as root when feasible?",
      options: [
        "Root containers cannot run applications",
        "It reduces privileges available to the application inside the container",
        "It removes all vulnerabilities from the image",
        "It replaces the need to patch the host",
      ],
      correct: 1,
      explanation:
        "Running containers as non-root (e.g., USER node or UID 65532) prevents an attacker who exploits an application defect from immediately possessing root kernel capabilities, mitigating container breakout risks.",
    },
    {
      id: 6,
      question: "What is a major security risk of running privileged containers?",
      options: [
        "They always have lower performance",
        "They can weaken isolation by granting extensive access to host resources",
        "They prevent network communication",
        "They automatically rotate secrets",
      ],
      correct: 1,
      explanation:
        "A privileged container (`--privileged` or `privileged: true`) disables kernel namespace isolation and security profiles, granting the container raw access to host devices and making host escape trivial.",
    },
    {
      id: 7,
      question: "What does Kubernetes RBAC control?",
      options: [
        "Only physical data-center access",
        "Permissions to interact with Kubernetes API resources",
        "Only CPU scheduling",
        "Wi-Fi encryption",
      ],
      correct: 1,
      explanation:
        "Kubernetes Role-Based Access Control (RBAC) controls which subjects (users, groups, service accounts) can perform specific operations (get, list, create, delete) on Kubernetes API resources (pods, secrets, namespaces).",
    },
    {
      id: 8,
      question: "What is a key limitation of Kubernetes NetworkPolicy?",
      options: [
        "It is always enforced regardless of the network plugin",
        "Its effectiveness depends on a network implementation that supports and enforces it",
        "It automatically encrypts every application connection",
        "It replaces identity-based authorization",
      ],
      correct: 1,
      explanation:
        "Creating NetworkPolicy manifests only works if the cluster's Container Network Interface (CNI) plugin (e.g., Calico, Cilium, AWS VPC CNI with policy enabled) actively enforces them. Without an enforcing CNI, NetworkPolicies are ignored.",
    },
    {
      id: 9,
      question: "What should happen immediately after a cloud credential is confirmed exposed?",
      options: [
        "Delete the visible line and take no further action",
        "Revoke or rotate the credential, assess possible use, and remove the exposure",
        "Rename the cloud account",
        "Disable all logging",
      ],
      correct: 1,
      explanation:
        "Merely deleting a leaked key from code does not invalidate it if it was previously exposed. Security teams must immediately revoke or rotate the credential in IAM, analyze CloudTrail/audit logs for unauthorized actions, and investigate potential compromise.",
    },
    {
      id: 10,
      question: "What is the primary purpose of Infrastructure as Code (IaC) security scanning?",
      options: [
        "To guarantee that deployed infrastructure will never be attacked",
        "To identify risky infrastructure definitions before or during deployment",
        "To replace all runtime monitoring",
        "To automatically grant every service the same permissions",
      ],
      correct: 1,
      explanation:
        "IaC security scanning (using tools like Checkov or Trivy) shifts security left, detecting cloud misconfigurations (open security groups, unencrypted buckets) in Terraform/CloudFormation code before resources are provisioned.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* LAB AUDIT REPORT STATE (18.12)                                             */
  /* -------------------------------------------------------------------------- */
  const [labAssetComponent, setLabAssetComponent] = useState("Container Runtime & AWS S3 Infrastructure");
  const [labFindingTitle, setLabFindingTitle] = useState("Unrestricted S3 Bucket Access & Root Container Execution");
  const [labProvisionalRisk, setLabProvisionalRisk] = useState("Critical");
  const [labEvidenceImpact, setLabEvidenceImpact] = useState(
    "1. Terraform file s3.tf defined aws_s3_bucket without public access block. Anonymous GET requests retrieved candidate resume PDFs.\n2. Container Dockerfile omitted USER directive, executing web daemon as root (UID 0) with all Linux capabilities enabled."
  );
  const [labRemediationSummary, setLabRemediationSummary] = useState(
    "1. Applied aws_s3_bucket_public_access_block with all flags set to true; enforced KMS SSE-KMS encryption.\n2. Hardened Dockerfile with node:22-bookworm-slim, created unprivileged user 'node', dropped ALL capabilities in K8s securityContext."
  );
  const [labValidationStatus, setLabValidationStatus] = useState("Fixed and verified");
  const [labReportCopied, setLabReportCopied] = useState(false);

  const copyLabReport = () => {
    const reportText = `=====================================================
PREPSPACES CLOUD & CONTAINER SECURITY ASSESSMENT REPORT
=====================================================
Asset / Component:   ${labAssetComponent}
Finding Title:       ${labFindingTitle}
Provisional Risk:    ${labProvisionalRisk}
Validation Result:   ${labValidationStatus}

EVIDENCE & IMPACT ANALYSIS:
${labEvidenceImpact}

REMEDIATION & HARDENING APPLIED:
${labRemediationSummary}

REGRESSION VERIFICATION:
- Checkov IaC Scan: 0 Critical / 0 High findings (Passes CIS AWS Foundations)
- Trivy Container Scan: 0 Critical CVEs; running as UID 10001 (non-root)
- S3 Bucket Public Access Test: HTTP 403 AccessDenied verified via curl
- K8s NetworkPolicy: Ingress strictly restricted to frontend pod on TCP 3000

Standards: AWS Well-Architected Security Pillar / NIST SP 800-190
Generated: ${new Date().toISOString()}
=====================================================`;
    navigator.clipboard.writeText(reportText);
    setLabReportCopied(true);
    setTimeout(() => setLabReportCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Header */}
      <header className="border-b border-stone-200/80 bg-[#0d1424]/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate("/learning/cybersecurity")}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-700 hover:text-white transition flex items-center text-xs"
              title="Return to Cybersecurity Curriculum"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Cybersecurity Track</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-orange-600 border border-cyan-500/20">
              Module 18
            </span>
            <span className="text-xs text-stone-600 hidden sm:inline">
              Cloud Security, Containers, IAM Policies & Misconfiguration Assessment
            </span>
          </div>

          <div className="flex items-center space-x-3">
          </div>
        </div>
      </header>

      {/* Curriculum Module Navigation Bar */}
      <ModuleNav currentModuleId="cloud-security" track="cybersecurity" />

      {/* Hero Banner */}
      <div className="border-b border-stone-200 bg-gradient-to-b from-slate-900 via-[#0c1322] to-[#0a0f1d] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-cyan-950 text-orange-600 border border-cyan-800/50">
                  Intermediate to Advanced · Cloud Infrastructure & DevSecOps
                </span>
                <span className="text-stone-500 text-xs">•</span>
                <span className="text-stone-600 text-xs flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  AWS Well-Architected, CIS Benchmarks, NIST SP 800-190 & SP 800-207
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Cloud Security, Containers, IAM Policies & Misconfiguration Assessment
              </h1>
              <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
                Master the cloud shared responsibility model, least-privilege IAM policy engineering, container isolation boundaries, Kubernetes RBAC &amp; NetworkPolicies, and automated Infrastructure-as-Code posture scanning to detect and remediate cloud risks before adversaries can exploit them.
              </p>
            </div>

            <div className="flex md:flex-col items-center gap-3">
              <div className="bg-white border border-stone-200/80 shadow-xs p-3.5 rounded-xl text-center min-w-[130px]">
                <div className="text-2xl font-bold text-orange-600 font-mono">18 / 24</div>
                <div className="text-[11px] text-stone-600 uppercase tracking-wider mt-0.5">Course Sequence</div>
              </div>
              <div className="bg-white border border-stone-200/80 shadow-xs p-3.5 rounded-xl text-center min-w-[130px]">
                <div className="text-2xl font-bold text-emerald-400 font-mono">4 Labs</div>
                <div className="text-[11px] text-stone-600 uppercase tracking-wider mt-0.5">Interactive Tools</div>
              </div>
            </div>
          </div>

          {/* Quick Nav Anchor Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-stone-200 pt-4">
            <button
              onClick={() => setActiveTab("theory")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "theory"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Theory & Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab("iam-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "iam-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Simulator 1: IAM Policy Evaluator</span>
            </button>
            <button
              onClick={() => setActiveTab("container-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "container-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Container className="w-3.5 h-3.5" />
              <span>Simulator 2: Container Hardening</span>
            </button>
            <button
              onClick={() => setActiveTab("k8s-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "k8s-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Simulator 3: K8s RBAC & NetworkPolicy</span>
            </button>
            <button
              onClick={() => setActiveTab("cspm-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "cspm-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Simulator 4: CSPM & IaC Scanner</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "quiz"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Quiz ({quizSubmitted ? `${quizScore}/10` : "10 Qs"})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Topics Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-stone-50/70 border border-stone-200 rounded-xl p-4 sticky top-20 space-y-4">
            <h3 className="text-xs font-bold text-stone-600 tracking-wider uppercase flex items-center justify-between">
              <span>Curriculum Navigator</span>
              <span className="text-orange-600 font-mono">18 / 24</span>
            </h3>

            <div className="space-y-1">
              {[
                { id: 1, title: "18.1 Module Overview & Objectives" },
                { id: 2, title: "18.2 Architecture & Shared Responsibility" },
                { id: 3, title: "18.3 Cloud Threats & Common Flaws" },
                { id: 4, title: "18.4 Cloud Identity & IAM Engineering" },
                { id: 5, title: "18.5 IAM Policy Assessment & Effective Permissions" },
                { id: 6, title: "18.6 Container Security Fundamentals" },
                { id: 7, title: "18.7 Image Hardening & Dockerfile Security" },
                { id: 8, title: "18.8 Secrets, Networking & Runtime Defense" },
                { id: 9, title: "18.9 Kubernetes: RBAC & NetworkPolicies" },
                { id: 10, title: "18.10 Infrastructure as Code (IaC) Security" },
                { id: 11, title: "18.11 CSPM & Misconfiguration Scanning" },
                { id: 12, title: "18.12 Practical Lab & Audit Report" },
                { id: 13, title: "18.13 Knowledge Assessment" },
                { id: 14, title: "18.14 Official References & Standards" },
                { id: 15, title: "18.15 Key Engineering Takeaways" },
              ].map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic.id);
                    setActiveTab("theory");
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                    selectedTopic === topic.id
                      ? "bg-cyan-500/15 text-orange-700 font-semibold border-l-2 border-cyan-400"
                      : "text-stone-600 hover:bg-slate-800 hover:text-stone-800"
                  }`}
                >
                  <span className="truncate">{topic.title}</span>
                </button>
              ))}
            </div>

            {/* Quick Practice Jump */}
            <div className="pt-4 border-t border-stone-200">
              <div className="text-[11px] font-semibold text-stone-600 mb-2 uppercase tracking-wider">
                Hands-on Simulators
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => setActiveTab("iam-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-stone-700 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <KeyRound className="w-3 h-3 mr-1 text-orange-600 shrink-0" />
                  <span>IAM Policy</span>
                </button>
                <button
                  onClick={() => setActiveTab("container-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-stone-700 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <Container className="w-3 h-3 mr-1 text-blue-400 shrink-0" />
                  <span>Docker Hardening</span>
                </button>
                <button
                  onClick={() => setActiveTab("k8s-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-stone-700 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <Box className="w-3 h-3 mr-1 text-emerald-400 shrink-0" />
                  <span>K8s RBAC</span>
                </button>
                <button
                  onClick={() => setActiveTab("cspm-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-stone-700 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <Cloud className="w-3 h-3 mr-1 text-amber-400 shrink-0" />
                  <span>CSPM Scanner</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* TAB 1: THEORY & ARCHITECTURE */}
          {activeTab === "theory" && (
            <div className="space-y-10">
              {/* SECTION 18.1 */}
              {selectedTopic === 1 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.1</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Module Overview & Learning Objectives</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    Cloud platforms and container technologies empower organizations to scale distributed microservices through software automation. However, software-defined infrastructure expands the attack surface when IAM permissions are overly permissive, storage buckets are publicly accessible, container runtimes execute as root, or configuration drift escapes baseline governance.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-2">
                      <div className="flex items-center space-x-2 text-orange-600 font-semibold text-sm">
                        <Cloud className="w-4 h-4" />
                        <span>Cloud & IAM Learning Objectives</span>
                      </div>
                      <ul className="text-xs text-stone-700 space-y-2 list-disc list-inside">
                        <li>Delineate cloud shared responsibility across IaaS, PaaS, SaaS, and Serverless.</li>
                        <li>Identify risks involving public S3 buckets, 0.0.0.0/0 security groups, and exposed management interfaces.</li>
                        <li>Audit IAM users, roles, trust policies, and temporary STS credentials for least privilege.</li>
                        <li>Evaluate effective permissions taking into account boundaries, resource policies, and SCPs.</li>
                        <li>Automate Infrastructure-as-Code security with Checkov and policy-as-code guardrails.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                        <Container className="w-4 h-4" />
                        <span>Container & Kubernetes Objectives</span>
                      </div>
                      <ul className="text-xs text-stone-700 space-y-2 list-disc list-inside">
                        <li>Harden container images, enforce non-root users, drop Linux capabilities, and enable read-only rootfs.</li>
                        <li>Scan images for vulnerabilities and supply-chain flaws using Trivy and Grype.</li>
                        <li>Manage container secrets, avoid environment variable leakage, and apply resource cgroups.</li>
                        <li>Architect Kubernetes RBAC to prevent secret harvesting and cluster-takeover attacks.</li>
                        <li>Enforce zero-trust pod network isolation using CNI NetworkPolicies.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-orange-700 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Authorized Assessment Scope: </span>
                      All practical labs and scans must use personal sandbox cloud accounts or local container environments (Docker/kind/Minikube). Never run posture assessment scanners or exploit tests against third-party or production cloud tenancies without explicit authorization.
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.2 */}
              {selectedTopic === 2 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.2</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Cloud Architecture & Shared Responsibility</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    In cloud computing, security responsibilities are divided between the cloud service provider (CSP) and the customer. The CSP is responsible for <em>security OF the cloud</em> (physical facilities, hypervisor virtualization, and managed service infrastructure), while the customer is responsible for <em>security IN the cloud</em> (data classification, IAM policies, network security groups, and workload patching).
                  </p>

                  <h3 className="text-base font-bold text-white">Shared Responsibility Matrix Across Service Models</h3>
                  <div className="overflow-x-auto border border-stone-200 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-stone-50 text-stone-700 font-semibold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Architecture Layer</th>
                          <th className="p-3">IaaS (EC2 / Azure VM)</th>
                          <th className="p-3">PaaS (App Service / Elastic Beanstalk)</th>
                          <th className="p-3">Serverless (AWS Lambda / Cloud Run)</th>
                          <th className="p-3">SaaS (M365 / Salesforce)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-stone-700">
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Data & IAM Access</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Application Logic & Code</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Runtime & OS Patching</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Virtual Network & Firewalls</td>
                          <td className="p-3 text-emerald-400 font-bold">Customer</td>
                          <td className="p-3 text-amber-400 font-bold">Shared / Customer ACLs</td>
                          <td className="p-3 text-amber-400 font-bold">Shared (VPC triggers)</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Physical & Hypervisor</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                          <td className="p-3 text-stone-500">Cloud Provider</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2 text-xs text-stone-700">
                    <span className="font-bold text-orange-600">Core Takeaway: </span>
                    Adopting managed services (like Amazon S3 or RDS) offloads hardware and hypervisor management to the cloud provider, but customer misconfiguration of bucket access policies or IAM credentials remains the leading root cause of enterprise cloud data breaches.
                  </div>
                </section>
              )}

              {/* SECTION 18.3 */}
              {selectedTopic === 3 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.3</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Cloud Threats & Common Misconfigurations</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    Cloud vulnerabilities rarely stem from zero-day hypervisor escapes; the vast majority result from simple, avoidable infrastructure misconfigurations.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-rose-400 text-sm">1. Publicly Exposed Object Storage Buckets</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-950 text-rose-400 border border-rose-800">Critical</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        S3 buckets or Azure Blob containers configured with public read/write ACLs. Enables unauthorized internet callers to harvest customer PII, corporate backups, or tamper with static assets. Mitigated with account-level <strong>S3 Block Public Access</strong> and private endpoint policies.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-400 text-sm">2. Excessively Permissive Network Security Groups</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-400 border border-amber-800">High</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        Security groups with ingress rules allowing `0.0.0.0/0` on port 22 (SSH), port 3389 (RDP), or database ports (3306 MySQL, 5432 Postgres, 6379 Redis). Allows automated botnets to brute-force administrative interfaces.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-rose-400 text-sm">3. Hardcoded Secrets in Images & Repositories</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-950 text-rose-400 border border-rose-800">Critical</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        API tokens, database passwords, and long-lived AWS IAM Access Keys baked into Docker image layers or pushed to git repositories. Deleting a key in a subsequent commit does not purge it from image or git history; the key must be immediately revoked in IAM.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-400 text-sm">4. Missing Audit Logging & Encryption at Rest</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-400 border border-amber-800">Medium</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        CloudTrail disabled or not multi-region; S3 bucket access logging disabled; RDS databases unencrypted with default keys. Leaves security teams blind during incident response.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.4 */}
              {selectedTopic === 4 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.4</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Cloud Identity & Access Management (IAM)</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    In the cloud, identity is the primary perimeter. IAM controls compute instance actions, database access, network routing, and secret retrieval. Misconfigured IAM permissions create immediate pathways for horizontal lateral movement and vertical privilege escalation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2">
                      <span className="font-bold text-orange-600 text-sm">Permission Policies vs. Trust Policies</span>
                      <p className="text-stone-700 leading-relaxed">
                        <strong>Permission Policy:</strong> Defines WHAT actions an identity can execute on which cloud resources (e.g. `s3:GetObject` on a bucket ARN).
                      </p>
                      <p className="text-stone-700 leading-relaxed">
                        <strong>Trust Policy:</strong> Defines WHO or WHAT is authorized to assume the role (e.g. EC2 service principal `ec2.amazonaws.com` or GitHub Actions OIDC federated identity).
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2">
                      <span className="font-bold text-emerald-400 text-sm">Human vs. Workload Identities</span>
                      <p className="text-stone-700 leading-relaxed">
                        <strong>Human Identities:</strong> Must use federated Single Sign-On (SSO / Okta / Entra ID) with hardware MFA, just-in-time access, and zero static access keys.
                      </p>
                      <p className="text-stone-700 leading-relaxed">
                        <strong>Workload Identities:</strong> Applications and CI/CD runners should use short-lived temporary credentials (AWS IAM Roles for Service Accounts / IRSA, GCP Workload Identity Federation) rather than static long-lived API keys.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-xs text-rose-300 space-y-1">
                    <span className="font-bold flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-1.5 text-rose-400" />
                      The Danger of Wildcard Policies (`Action: "*", Resource: "*"`):
                    </span>
                    <p className="leading-relaxed">
                      Wildcard statements grant unrestricted control over all cloud services. A compromised microservice with `Action: "*"` can create admin users, delete production backups, and modify billing. Always scope actions to the exact API verbs required (`s3:GetObject`, `sqs:SendMessage`).
                    </p>
                  </div>
                </section>
              )}

              {/* SECTION 18.5 */}
              {selectedTopic === 5 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.5</span>
                    <h2 className="text-2xl font-bold text-white mt-1">IAM Policy Assessment & Effective Permissions</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    In cloud environments, an identity&apos;s effective permissions are not determined by a single policy document. The final decision is calculated by evaluating identity-based policies, resource-based policies, permission boundaries, Service Control Policies (SCPs), and explicit denials.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-3 font-mono text-xs">
                    <span className="font-bold text-orange-600 block border-b border-stone-200 pb-2">
                      AWS IAM Policy Evaluation Logic
                    </span>
                    <div className="space-y-2 text-stone-700">
                      <div>1. <strong className="text-rose-400">Explicit Deny:</strong> If ANY policy contains a matching Deny statement, the request is immediately denied. Deny always trumps Allow.</div>
                      <div>2. <strong className="text-orange-600">SCP Guardrails:</strong> Organization Service Control Policies must permit the action.</div>
                      <div>3. <strong className="text-orange-600">Permission Boundaries:</strong> The identity&apos;s boundary must permit the action.</div>
                      <div>4. <strong className="text-emerald-400">Identity or Resource Allow:</strong> An explicit Allow must exist in either the identity policy OR the resource-based policy.</div>
                      <div>5. <strong className="text-stone-500">Default Closed:</strong> If no explicit Allow is found, the request is implicitly denied.</div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.6 */}
              {selectedTopic === 6 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.6</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Container Security Fundamentals</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    Containers package application code and dependencies into portable images. Unlike virtual machines, containers share the host operating system kernel using Linux namespaces (PID, NET, MNT, IPC, UTS, USER) and control groups (cgroups). Consequently, a vulnerability in the kernel or a container executing with excessive privileges can allow an attacker to escape into the underlying host.
                  </p>

                  <div className="overflow-x-auto border border-stone-200 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-stone-50 text-stone-700 font-semibold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Characteristic</th>
                          <th className="p-3">Containers (Docker / OCI)</th>
                          <th className="p-3">Virtual Machines (KVM / VMware)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-stone-700">
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Kernel Model</td>
                          <td className="p-3 text-amber-300">Shared host Linux kernel</td>
                          <td className="p-3 text-emerald-400">Separate guest kernel per VM</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Isolation Mechanism</td>
                          <td className="p-3">Linux Namespaces, cgroups, Seccomp, AppArmor</td>
                          <td className="p-3">Hardware hypervisor (Type-1 / Type-2)</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Startup Time & Overhead</td>
                          <td className="p-3 text-emerald-400">Milliseconds; lightweight</td>
                          <td className="p-3 text-stone-600">Seconds to minutes; higher RAM/CPU</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Primary Attack Vector</td>
                          <td className="p-3 text-rose-300">Privileged escape, vulnerable packages, root execution</td>
                          <td className="p-3 text-stone-600">Unpatched guest OS, hypervisor flaws</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* SECTION 18.7 */}
              {selectedTopic === 7 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.7</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Container Image Security & Docker Hardening</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    Securing containerized workloads begins at the Dockerfile. By using minimal base images, executing as an unprivileged user, dropping unnecessary Linux capabilities, and mounting a read-only root filesystem, engineers eliminate the vast majority of container breakout vectors.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2">
                      <span className="font-bold text-rose-400 block border-b border-rose-800/50 pb-1">
                        // UNSAFE: Typical Dockerfile Anti-Patterns
                      </span>
                      <div className="text-rose-200 leading-relaxed space-y-1">
                        <div>FROM node:latest # Bloated full OS base</div>
                        <div>WORKDIR /app</div>
                        <div>COPY . . # Copies .git, secrets, .env</div>
                        <div>RUN npm install</div>
                        <div># Runs as root (UID 0) by default!</div>
                        <div>EXPOSE 3000 22 9229 # Debugger open</div>
                        <div>CMD [&quot;node&quot;, &quot;server.js&quot;]</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                      <span className="font-bold text-emerald-400 block border-b border-emerald-800/50 pb-1">
                        // HARDENED: Multi-Stage Distroless / Non-Root
                      </span>
                      <div className="text-emerald-200 leading-relaxed space-y-1">
                        <div>FROM node:22-bookworm-slim AS build</div>
                        <div>WORKDIR /app</div>
                        <div>COPY package*.json ./ &amp;&amp; npm ci --omit=dev</div>
                        <div>FROM gcr.io/distroless/nodejs22-debian12:nonroot</div>
                        <div>WORKDIR /app</div>
                        <div>COPY --from=build /app/node_modules ./node_modules</div>
                        <div>USER nonroot # UID 65532 (Unprivileged)</div>
                        <div>CMD [&quot;server.js&quot;]</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2 text-xs text-stone-700">
                    <span className="font-bold text-orange-600 uppercase tracking-wider">
                      Essential Runtime Security Flags (Docker CLI / Compose)
                    </span>
                    <ul className="space-y-1 list-disc list-inside">
                      <li><code>--read-only</code>: Mounts root filesystem as read-only. Prevents malware from writing persistence scripts.</li>
                      <li><code>--cap-drop=ALL</code>: Drops all default Linux capabilities (such as `CAP_CHOWN`, `CAP_NET_ADMIN`).</li>
                      <li><code>--security-opt=no-new-privileges:true</code>: Blocks suid binaries from elevating privileges.</li>
                      <li><code>--pids-limit=100</code>: Prevents fork bombs from exhausting host process tables.</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* SECTION 18.8 */}
              {selectedTopic === 8 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.8</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Container Secrets, Networking & Runtime Defense</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    Containers require database credentials, API keys, and certificates to operate. Storing secrets in plain environment variables creates risk, as process dumps, crash logs, and `docker inspect` can leak them.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2">
                      <span className="font-bold text-orange-600 text-sm">Dedicated Secrets Management</span>
                      <p className="text-stone-700 leading-relaxed">
                        Mount secrets as temporary in-memory files (RAM-backed `tmpfs`) using HashiCorp Vault, AWS Secrets Manager, or Kubernetes External Secrets Operator. Rotate secrets automatically.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2">
                      <span className="font-bold text-emerald-400 text-sm">Runtime Anomaly Detection (Falco / eBPF)</span>
                      <p className="text-stone-700 leading-relaxed">
                        Use kernel eBPF monitors (such as Falco or Tetragon) to alert in real time when a container spawns unexpected shells (`/bin/sh`), modifies `/etc/passwd`, or opens unauthorized outbound C2 connections.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.9 */}
              {selectedTopic === 9 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.9</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Kubernetes Security: RBAC & NetworkPolicies</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    In Kubernetes, the API server orchestrates all cluster resources. Securing Kubernetes requires scoping Role-Based Access Control (RBAC), hardening pod security contexts, and enforcing CNI NetworkPolicies.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-3 font-mono text-xs">
                    <span className="font-bold text-orange-600 block border-b border-stone-200 pb-2">
                      Production Kubernetes Pod SecurityContext Manifest
                    </span>
                    <pre className="p-3 rounded bg-stone-50 border border-stone-200/80 text-orange-700 leading-relaxed overflow-x-auto">
                      <code>{`spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 10001
    fsGroup: 10001
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: api-service
    image: prepspaces/api:v1.4.2
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop:
        - ALL`}</code>
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2 text-xs text-stone-700">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider">
                      Kubernetes NetworkPolicy Enforcement Caveat
                    </span>
                    <p className="leading-relaxed">
                      Deploying a `kind: NetworkPolicy` manifest has NO effect unless the Kubernetes cluster uses a CNI plugin that supports and enforces network policies (e.g., Calico, Cilium, or Weave Net). The default kubenet or flannel CNI ignores network policies entirely, leaving all pods open to lateral traffic.
                    </p>
                  </div>
                </section>
              )}

              {/* SECTION 18.10 */}
              {selectedTopic === 10 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.10</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Infrastructure as Code (IaC) & Configuration Security</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    Modern cloud infrastructure is defined in Terraform, OpenTofu, CloudFormation, or Bicep manifests. Shifting security left means scanning IaC templates in pull requests before resources are provisioned.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-1.5">
                      <span className="font-bold text-orange-600 block font-mono">Checkov (Bridgecrew)</span>
                      <p className="text-stone-600">Static code analysis for Terraform, K8s, Docker, and CloudFormation with 1000+ built-in CIS benchmark policies.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-1.5">
                      <span className="font-bold text-blue-400 block font-mono">Trivy Config</span>
                      <p className="text-stone-600">Fast misconfiguration scanner for HCL, YAML, and Dockerfiles integrated cleanly into CI/CD pipelines.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-1.5">
                      <span className="font-bold text-indigo-400 block font-mono">Open Policy Agent (OPA)</span>
                      <p className="text-stone-600">Declarative policy-as-code using Rego to enforce organization guardrails (e.g. mandatory encryption tags).</p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.11 */}
              {selectedTopic === 11 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.11</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Cloud Security Posture Management (CSPM)</h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm">
                    While IaC scanners evaluate pre-deployment code, Cloud Security Posture Management (CSPM) tools continuously assess live, deployed infrastructure against compliance baselines (CIS Benchmarks, NIST CSF, PCI DSS) to detect drift and unmanaged resources.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-3">
                    <h3 className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                      The Continuous CSPM Workflow
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded bg-stone-50 border border-stone-200/80">
                        <span className="font-bold text-orange-600 block">1. Discover</span>
                        <span className="text-[11px] text-stone-600">Inventory accounts & assets</span>
                      </div>
                      <div className="p-2.5 rounded bg-stone-50 border border-stone-200/80">
                        <span className="font-bold text-blue-400 block">2. Evaluate</span>
                        <span className="text-[11px] text-stone-600">Compare to CIS baselines</span>
                      </div>
                      <div className="p-2.5 rounded bg-stone-50 border border-stone-200/80">
                        <span className="font-bold text-indigo-400 block">3. Prioritize</span>
                        <span className="text-[11px] text-stone-600">Filter by exposure & impact</span>
                      </div>
                      <div className="p-2.5 rounded bg-stone-50 border border-stone-200/80">
                        <span className="font-bold text-amber-400 block">4. Remediate</span>
                        <span className="text-[11px] text-stone-600">Apply root-cause IaC fix</span>
                      </div>
                      <div className="p-2.5 rounded bg-stone-50 border border-stone-200/80">
                        <span className="font-bold text-emerald-400 block">5. Verify</span>
                        <span className="text-[11px] text-stone-600">Retest & detect drift</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.12: PRACTICAL LAB */}
              {selectedTopic === 12 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.12</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Practical Lab: Cloud & Container Security Audit</h2>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-orange-700 text-sm">Lab Scenario: Audit and Harden a Cloud-Native App</span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-orange-600 border border-cyan-800/50">
                        2–3 Hours
                      </span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Assess IAM policies, container configurations, and Terraform IaC manifests. Correct identified misconfigurations, apply least-privilege scoping, and compile an exportable audit report.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                      <div className="p-3 rounded bg-stone-50 border border-stone-200/80 space-y-1">
                        <span className="font-bold text-orange-600">Task A: IAM Assessment</span>
                        <p className="text-stone-600">Identify wildcard policies and privilege escalation vectors.</p>
                      </div>
                      <div className="p-3 rounded bg-stone-50 border border-stone-200/80 space-y-1">
                        <span className="font-bold text-orange-600">Task B: Container Hardening</span>
                        <p className="text-stone-600">Scan Dockerfile with Trivy; enforce non-root unprivileged execution.</p>
                      </div>
                      <div className="p-3 rounded bg-stone-50 border border-stone-200/80 space-y-1">
                        <span className="font-bold text-orange-600">Task C & D: IaC & Remediation</span>
                        <p className="text-stone-600">Scan Terraform with Checkov; fix open S3 public access and open SSH rules.</p>
                      </div>
                      <div className="p-3 rounded bg-stone-50 border border-stone-200/80 space-y-1">
                        <span className="font-bold text-orange-600">Task E: Validate & Report</span>
                        <p className="text-stone-600">Confirm zero regressions and generate standardized compliance report.</p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Lab Worksheet Generator */}
                  <div className="p-5 rounded-xl bg-stone-50/90 border border-cyan-500/30 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-orange-700 flex items-center space-x-2">
                        <FileSpreadsheet className="w-4 h-4 text-orange-600" />
                        <span>Interactive Cloud Security Finding Worksheet</span>
                      </h3>
                      <button
                        onClick={copyLabReport}
                        className="px-3 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition"
                      >
                        {labReportCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{labReportCopied ? "Copied Report!" : "Copy Assessment Report"}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="text-stone-600 font-semibold">Asset or Component</label>
                        <input
                          type="text"
                          value={labAssetComponent}
                          onChange={(e) => setLabAssetComponent(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-stone-600 font-semibold">Finding Title</label>
                        <input
                          type="text"
                          value={labFindingTitle}
                          onChange={(e) => setLabFindingTitle(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="text-stone-600 font-semibold">Provisional Risk</label>
                        <select
                          value={labProvisionalRisk}
                          onChange={(e) => setLabProvisionalRisk(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:border-cyan-400 focus:outline-none"
                        >
                          <option value="Critical">Critical</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-stone-600 font-semibold">Validation Result</label>
                        <select
                          value={labValidationStatus}
                          onChange={(e) => setLabValidationStatus(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:border-cyan-400 focus:outline-none"
                        >
                          <option value="Fixed and verified">Fixed and verified</option>
                          <option value="Partially fixed">Partially fixed</option>
                          <option value="Still vulnerable">Still vulnerable</option>
                          <option value="Inconclusive">Inconclusive</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <label className="text-stone-600 font-semibold">Evidence & Impact Analysis</label>
                      <textarea
                        rows={3}
                        value={labEvidenceImpact}
                        onChange={(e) => setLabEvidenceImpact(e.target.value)}
                        className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>

                    <div className="space-y-1 text-xs">
                      <label className="text-stone-600 font-semibold">Remediation & Hardening Applied</label>
                      <textarea
                        rows={2}
                        value={labRemediationSummary}
                        onChange={(e) => setLabRemediationSummary(e.target.value)}
                        className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.13: QUIZ */}
              {selectedTopic === 13 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.13</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Knowledge Assessment Quiz</h2>
                  </div>

                  <p className="text-stone-700 text-sm">
                    Test your understanding of cloud IAM policies, container isolation, Kubernetes RBAC, and Infrastructure as Code security.
                  </p>

                  <div className="space-y-6">
                    {quizQuestions.map((q, idx) => (
                      <div key={q.id} className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-3">
                        <div className="flex items-start justify-between">
                          <span className="font-bold text-white text-xs sm:text-sm">
                            {idx + 1}. {q.question}
                          </span>
                          {quizSubmitted && (
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                                quizAnswers[q.id] === q.correct
                                  ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                                  : "bg-rose-950 text-rose-400 border border-rose-800"
                              }`}
                            >
                              {quizAnswers[q.id] === q.correct ? "Correct" : "Incorrect"}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-2.5 rounded-lg text-xs transition flex items-center justify-between ${
                                quizAnswers[q.id] === optIdx
                                  ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/50"
                                  : "bg-stone-50 text-stone-700 border border-stone-200 hover:bg-slate-800"
                              } ${
                                quizSubmitted && optIdx === q.correct
                                  ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                                  : ""
                              }`}
                            >
                              <span>{opt}</span>
                              {quizAnswers[q.id] === optIdx && (
                                <span className="w-2 h-2 rounded-full bg-cyan-400 ml-2 shrink-0" />
                              )}
                            </button>
                          ))}
                        </div>

                        {quizSubmitted && (
                          <div className="p-2.5 rounded bg-stone-50 border border-stone-200/80 text-[11px] text-stone-600 mt-2">
                            <span className="font-semibold text-orange-600">Explanation: </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                      <div className="text-xs text-stone-600 font-mono">
                        Answered: {Object.keys(quizAnswers).length} / 10
                      </div>
                      <div className="flex items-center space-x-3">
                        {quizSubmitted && (
                          <div className="text-sm font-bold text-orange-600 font-mono">
                            Final Score: {quizScore} / 10 ({Math.round((quizScore / 10) * 100)}%)
                          </div>
                        )}
                        <button
                          onClick={() => setQuizSubmitted(!quizSubmitted)}
                          disabled={Object.keys(quizAnswers).length < 10}
                          className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition"
                        >
                          {quizSubmitted ? "Reset Quiz" : "Submit Answers"}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 18.14 */}
              {selectedTopic === 14 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.14</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Official References & Authoritative Standards</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {[
                      {
                        name: "AWS Well-Architected: Security Pillar",
                        desc: "Best practices for identity management, infrastructure protection, and incident response.",
                        url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html",
                      },
                      {
                        name: "AWS IAM User Guide & Evaluation Logic",
                        desc: "Official documentation on policy evaluation, trust relationships, and permission boundaries.",
                        url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
                      },
                      {
                        name: "Microsoft Cloud Security Benchmark",
                        desc: "Security recommendations covering Azure identity, network security, and workload protection.",
                        url: "https://learn.microsoft.com/en-us/security/benchmark/azure/",
                      },
                      {
                        name: "Google Cloud Security Foundations",
                        desc: "Architecture patterns for identity federation, Workload Identity, and VPC service controls.",
                        url: "https://cloud.google.com/architecture/framework/security",
                      },
                      {
                        name: "NIST SP 800-190: Application Container Security",
                        desc: "Standard recommendations for image creation, registry defense, runtime isolation, and host hardening.",
                        url: "https://csrc.nist.gov/pubs/sp/800/190/final",
                      },
                      {
                        name: "Kubernetes Security Concepts & Pod Standards",
                        desc: "Official guidance on RBAC, Pod Security Standards (Baseline & Restricted), and NetworkPolicies.",
                        url: "https://kubernetes.io/docs/concepts/security/",
                      },
                    ].map((ref, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-2">
                        <div className="font-bold text-orange-600 text-sm">{ref.name}</div>
                        <p className="text-stone-600 leading-relaxed">{ref.desc}</p>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-orange-600 hover:underline flex items-center pt-1"
                        >
                          <span>Explore Official Standard</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SECTION 18.15 */}
              {selectedTopic === 15 && (
                <section className="space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Section 18.15</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Key Engineering Takeaways</h2>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-4">
                    <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span><strong>Shared Responsibility Reality:</strong> The cloud provider secures the cloud infrastructure, but the customer remains 100% accountable for IAM policies, object storage public access, and data encryption.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span><strong>Eliminate Wildcards in IAM:</strong> Never grant `Action: "*", Resource: "*"`. Scope permissions down to specific API verbs, resources, and ABAC tenant conditions.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span><strong>Hardened Non-Root Containers:</strong> Execute containerized workloads as an unprivileged user (`USER node` or UID 65532), drop ALL capabilities, and mount the root filesystem read-only.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span><strong>Kubernetes Least-Privilege & NetworkPolicies:</strong> Restrict service accounts from cluster-admin bindings and enforce CNI NetworkPolicies to prevent lateral east-west movement between microservices.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span><strong>Shift-Left IaC Scanning & CSPM:</strong> Scan Terraform templates with Checkov in pull requests to catch misconfigurations before deployment, while continuously auditing live cloud posture with Prowler/CSPM.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                    <button
                      onClick={() => setSelectedTopic(12)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-700 text-xs flex items-center"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                      <span>Previous: 18.12 Practical Lab</span>
                    </button>
                    <button
                      onClick={() => navigate("/learning/cybersecurity")}
                      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center shadow-lg shadow-cyan-500/20"
                    >
                      <span>Complete Module 18 & Return to Track</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>
                </section>
              )}
            </div>
          )}

          {/* TAB 2: SIMULATOR 1 - IAM POLICY EVALUATOR */}
          {activeTab === "iam-sim" && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Simulator 1</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Cloud IAM Policy Evaluator & Least-Privilege Generator
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Simulate AWS policy evaluation against benign operational requests and malicious privilege escalation attempts.
                </p>
              </div>

              {/* Policy Mode Selector */}
              <div className="flex rounded bg-stone-50 p-1 border border-stone-200 max-w-md">
                <button
                  onClick={() => setIamPolicyMode("overly_permissive")}
                  className={`flex-1 py-1.5 rounded text-xs font-bold transition ${
                    iamPolicyMode === "overly_permissive"
                      ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                      : "text-stone-600 hover:text-white"
                  }`}
                >
                  Overly Permissive Policy
                </button>
                <button
                  onClick={() => setIamPolicyMode("least_privilege")}
                  className={`flex-1 py-1.5 rounded text-xs font-bold transition ${
                    iamPolicyMode === "least_privilege"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "text-stone-600 hover:text-white"
                  }`}
                >
                  Least-Privilege Scoped Policy
                </button>
              </div>

              {/* Code Display & Action Tester */}
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">{iamSimulation.activePolicy.title}</h3>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        iamSimulation.activePolicy.riskLevel === "CRITICAL"
                          ? "bg-rose-950 text-rose-300 border border-rose-800"
                          : "bg-emerald-950 text-emerald-300 border border-emerald-800"
                      }`}
                    >
                      {iamSimulation.activePolicy.riskLevel}
                    </span>
                  </div>
                  <button
                    onClick={() => copyCode(iamSimulation.activePolicy.json, "iam")}
                    className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-stone-700"
                    title="Copy Policy JSON"
                  >
                    {copiedCodeId === "iam" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Policy JSON Window */}
                <pre className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80 text-xs font-mono text-orange-700 overflow-x-auto leading-relaxed">
                  <code>{iamSimulation.activePolicy.json}</code>
                </pre>

                {/* Test Action Trigger */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-stone-700 block">Simulate Incoming Cloud API Request</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      { id: "s3_read_report", label: "1. Read Candidate Report (Benign)", danger: false },
                      { id: "s3_delete_backup", label: "2. Delete Prod DB Backup (Adversary)", danger: true },
                      { id: "iam_priv_esc", label: "3. Mint Admin Access Key (Escalation)", danger: true },
                      { id: "logs_delete", label: "4. Delete CloudTrail Logs (Evasion)", danger: true },
                    ].map((act) => (
                      <button
                        key={act.id}
                        onClick={() => setTestedAction(act.id)}
                        className={`p-2.5 rounded-lg border text-left transition ${
                          testedAction === act.id
                            ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold"
                            : "bg-slate-950 border-stone-200 text-stone-600 hover:bg-slate-800"
                        }`}
                      >
                        {act.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Evaluation Result */}
                <div
                  className={`p-3.5 rounded-lg border text-xs space-y-1.5 ${
                    iamSimulation.evaluationResult.includes("ALLOWED (CRITICAL") ||
                    iamSimulation.evaluationResult.includes("ALLOWED (ACCOUNT")
                      ? "bg-rose-950/40 border-rose-600 text-rose-200"
                      : "bg-emerald-950/40 border-emerald-600 text-emerald-200"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>IAM Decision: {iamSimulation.evaluationResult}</span>
                  </div>
                  <p className="text-[11px] text-stone-700">{iamSimulation.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SIMULATOR 2 - CONTAINER HARDENING */}
          {activeTab === "container-sim" && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Simulator 2</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Dockerfile & Container Runtime Hardening Sandbox
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Inspect vulnerabilities, capabilities, and test simulated container escape payloads.
                </p>
              </div>

              {/* Mode Selector */}
              <div className="flex rounded bg-stone-50 p-1 border border-stone-200 max-w-md">
                <button
                  onClick={() => setContainerBuildMode("vulnerable")}
                  className={`flex-1 py-1.5 rounded text-xs font-bold transition ${
                    containerBuildMode === "vulnerable"
                      ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                      : "text-stone-600 hover:text-white"
                  }`}
                >
                  Insecure Dockerfile
                </button>
                <button
                  onClick={() => setContainerBuildMode("hardened")}
                  className={`flex-1 py-1.5 rounded text-xs font-bold transition ${
                    containerBuildMode === "hardened"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "text-stone-600 hover:text-white"
                  }`}
                >
                  Hardened Distroless
                </button>
              </div>

              {/* Dockerfile Window & Scan Metrics */}
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <h3 className="text-sm font-bold text-white">{containerDetails.title}</h3>
                  <span className="text-xs font-mono text-emerald-400">{containerDetails.cisScore}</span>
                </div>

                <pre className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80 text-xs font-mono text-stone-800 overflow-x-auto leading-relaxed">
                  <code>{containerDetails.dockerfile}</code>
                </pre>

                {/* Trivy Vulnerability Scan Card */}
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-600 font-mono">Trivy Image Scan Metrics:</span>
                    <div className="flex items-center space-x-2 font-mono text-[11px]">
                      <span className="px-1.5 py-0.5 rounded bg-rose-950 text-rose-400">
                        Critical: {containerDetails.trivyVulns.critical}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-950 text-amber-400">
                        High: {containerDetails.trivyVulns.high}
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] text-stone-600">{containerDetails.trivyVulns.cveExamples}</div>
                </div>

                {/* Container Breakout Exploit Test */}
                <div className="flex justify-end pt-2 border-t border-stone-200">
                  <button
                    onClick={testContainerBreakout}
                    disabled={runningContainerBreakoutTest}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition shadow-lg shadow-cyan-500/20"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{runningContainerBreakoutTest ? "Executing Breakout..." : "Test Container Breakout Exploit"}</span>
                  </button>
                </div>

                {breakoutResult && (
                  <div
                    className={`p-3.5 rounded-lg border text-xs space-y-1 ${
                      breakoutResult.safe
                        ? "bg-emerald-950/30 border-emerald-600 text-emerald-200"
                        : "bg-rose-950/30 border-rose-600 text-rose-200"
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span>{breakoutResult.status}</span>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-stone-50">
                        {breakoutResult.severity}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-stone-700">{breakoutResult.evidence}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: SIMULATOR 3 - KUBERNETES RBAC & NETWORKPOLICY */}
          {activeTab === "k8s-sim" && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Simulator 3</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Kubernetes RBAC & NetworkPolicy Isolation Matrix
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Test east-west pod network filtering and RBAC API access controls.
                </p>
              </div>

              {/* Controls */}
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-stone-600 font-semibold block mb-1">Source Pod</label>
                    <select
                      value={sourcePod}
                      onChange={(e) => setSourcePod(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:outline-none"
                    >
                      <option value="frontend">Frontend Web Pod (app: frontend)</option>
                      <option value="guest_attacker">Compromised Pod (app: guest)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-stone-600 font-semibold block mb-1">Target Resource</label>
                    <select
                      value={targetService}
                      onChange={(e) => setTargetService(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:outline-none"
                    >
                      <option value="backend_api">Backend Microservice (Port 8080)</option>
                      <option value="kube_api_secrets">Kubernetes API: kube-system/secrets</option>
                      <option value="public_internet">Public Internet Egress</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-stone-600 font-semibold block mb-1">CNI NetworkPolicy</label>
                    <button
                      onClick={() => setK8sNetworkPolicyEnforced(!k8sNetworkPolicyEnforced)}
                      className={`w-full py-2 rounded text-xs font-bold transition ${
                        k8sNetworkPolicyEnforced ? "bg-emerald-600 text-white" : "bg-rose-950 border border-rose-800 text-rose-300"
                      }`}
                    >
                      {k8sNetworkPolicyEnforced ? "Policy ENFORCED" : "Policy DISABLED"}
                    </button>
                  </div>

                  <div>
                    <label className="text-stone-600 font-semibold block mb-1">ServiceAccount RBAC Binding</label>
                    <select
                      value={k8sRbacScope}
                      onChange={(e) => setK8sRbacScope(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-stone-300 rounded text-stone-800 text-xs focus:outline-none"
                    >
                      <option value="namespaced_role">Scoped Role (Least Privilege)</option>
                      <option value="cluster_admin">ClusterRole: cluster-admin</option>
                    </select>
                  </div>
                </div>

                {/* Simulation Output */}
                <div
                  className={`p-4 rounded-xl border text-xs space-y-2 ${
                    k8sSimulation.trafficAllowed && (targetService === "kube_api_secrets" || sourcePod === "guest_attacker")
                      ? "bg-rose-950/30 border-rose-600 text-rose-200"
                      : "bg-emerald-950/30 border-emerald-600 text-emerald-200"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm">
                    <span>Decision: {k8sSimulation.trafficAllowed ? "TRAFFIC / OPERATION ALLOWED" : "OPERATION BLOCKED (SECURE)"}</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-stone-50 border border-stone-200/80">
                      {sourcePod.toUpperCase()} ➔ {targetService.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-stone-700">{k8sSimulation.rationale}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SIMULATOR 4 - CSPM & IAC SCANNER */}
          {activeTab === "cspm-sim" && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Simulator 4</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  CSPM Cloud Security Posture & IaC Drift Inspector (Checkov)
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Scan Terraform infrastructure for public S3 buckets, open SSH rules, and KMS encryption drift.
                </p>
              </div>

              {/* Controls */}
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-stone-600">Terraform Codebase State:</span>
                    <div className="text-sm font-bold text-white">
                      {cspmHardened ? "Remediated Terraform Baseline (CIS Compliant)" : "Unpatched Terraform Codebase (Contains 4 Misconfigurations)"}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setCspmHardened(!cspmHardened);
                        setCspmResults(null);
                      }}
                      className="px-3 py-1.5 rounded text-xs font-bold bg-slate-800 hover:bg-slate-700 text-stone-800"
                    >
                      {cspmHardened ? "Load Unpatched IaC" : "Apply IaC Auto-Remediation"}
                    </button>
                    <button
                      onClick={runCspmScan}
                      disabled={scanningCspm}
                      className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition shadow-lg shadow-cyan-500/20"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{scanningCspm ? "Scanning IaC..." : "Run Checkov Scan"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Scan Results */}
              {cspmResults && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                    <span className="text-xs font-bold text-orange-600 font-mono">
                      Checkov IaC Compliance Score: {cspmResults.score}
                    </span>
                    <span className="text-[11px] text-stone-600 font-mono">Framework: CIS AWS Foundations Benchmark</span>
                  </div>

                  <div className="space-y-2">
                    {cspmResults.findings.map((f, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border text-xs space-y-1 ${
                          f.severity === "CRITICAL"
                            ? "bg-rose-950/30 border-rose-800/60 text-rose-200"
                            : f.severity === "HIGH"
                            ? "bg-amber-950/30 border-amber-800/60 text-amber-200"
                            : f.severity === "MEDIUM"
                            ? "bg-blue-950/30 border-blue-800/60 text-blue-200"
                            : "bg-emerald-950/30 border-emerald-800/60 text-emerald-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold">{f.title}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-stone-200/80 shadow-xs">
                            {f.id} ({f.severity})
                          </span>
                        </div>
                        <div className="text-[11px] text-stone-600 font-mono">Resource: {f.resource}</div>
                        <div className="text-[11px] text-orange-700 font-mono pt-0.5">Remediation: {f.fix}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: ASSESSMENT QUIZ */}
          {activeTab === "quiz" && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">Assessment</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">Knowledge Assessment</h2>
                <p className="text-xs text-stone-600 mt-1">10 Scenario-based evaluation questions from Section 18.13.</p>
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <div key={q.id} className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-white text-xs sm:text-sm">
                        {idx + 1}. {q.question}
                      </span>
                      {quizSubmitted && (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            quizAnswers[q.id] === q.correct
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                              : "bg-rose-950 text-rose-400 border border-rose-800"
                          }`}
                        >
                          {quizAnswers[q.id] === q.correct ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`w-full text-left p-2.5 rounded-lg text-xs transition flex items-center justify-between ${
                            quizAnswers[q.id] === optIdx
                              ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/50"
                              : "bg-stone-50 text-stone-700 border border-stone-200 hover:bg-slate-800"
                          } ${
                            quizSubmitted && optIdx === q.correct
                              ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                              : ""
                          }`}
                        >
                          <span>{opt}</span>
                          {quizAnswers[q.id] === optIdx && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 ml-2 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>

                    {quizSubmitted && (
                      <div className="p-2.5 rounded bg-stone-50 border border-stone-200/80 text-[11px] text-stone-600 mt-2">
                        <span className="font-semibold text-orange-600">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <div className="text-xs text-stone-600 font-mono">
                    Answered: {Object.keys(quizAnswers).length} / 10
                  </div>
                  <div className="flex items-center space-x-3">
                    {quizSubmitted && (
                      <div className="text-sm font-bold text-orange-600 font-mono">
                        Final Score: {quizScore} / 10 ({Math.round((quizScore / 10) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setQuizSubmitted(!quizSubmitted)}
                      disabled={Object.keys(quizAnswers).length < 10}
                      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition"
                    >
                      {quizSubmitted ? "Reset Quiz" : "Submit Answers"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        initialContext="Cybersecurity Master Course - Module 18: Cloud Security, Containers, IAM Policies, and Misconfiguration Assessment. Ask me about least-privilege IAM policies, Docker non-root hardening, Kubernetes RBAC & NetworkPolicies, or Checkov IaC security scanning."
      />
    </div>
  );
}
