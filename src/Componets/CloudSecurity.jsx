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
  const securityGameScenarios = [
    {
      id: "sc-1",
      title: "Scenario A: Stolen Developer OAuth Session Token",
      context:
        "An infostealer malware infection on an engineer's laptop captures an active OAuth session token for the cloud console. The attacker attempts to invoke administrative APIs from an unknown foreign IP address.",
      options: [
        {
          label: "Immediately revoke all active refresh tokens, trigger Session Invalidation API, and enforce Conditional Access requiring compliant device certificates",
          correct: true,
          explanation:
            "Correct! Immediate session token revocation and requiring device health/compliance certificates shuts down the attacker's session immediately.",
        },
        {
          label: "Delete the cloud project and create a new company account from scratch",
          correct: false,
          explanation:
            "Catastrophic overreaction that destroys production workloads without addressing the root endpoint infection.",
        },
        {
          label: "Change the developer's Slack password and monitor logs for 7 days",
          correct: false,
          explanation:
            "Ineffective. Changing Slack has zero impact on active cloud console OAuth sessions.",
        },
      ],
    },
    {
      id: "sc-2",
      title: "Scenario B: Compromised Public Ingress Pod (Remote Code Execution)",
      context:
        "A zero-day exploit in an open-source web framework gives an external attacker a remote shell inside a frontend container pod. The attacker immediately runs 'nmap' to locate internal database endpoints.",
      options: [
        {
          label: "Trust that the container cannot escape because it is running inside Kubernetes",
          correct: false,
          explanation:
            "Fatal error! Containers share the host kernel. Without NetworkPolicies and runtime hardening, attackers move laterally across the cluster.",
        },
        {
          label: "Default-Deny NetworkPolicy drops all east-west probe packets; read-only rootFS prevents saving tools; SIEM triggers alert on anomalous process execution",
          correct: true,
          explanation:
            "Correct! Zero Trust defense-in-depth: Even with shell execution, NetworkPolicy isolates the pod from databases, and read-only rootFS blocks downloading toolkits.",
        },
        {
          label: "Disable the Kubernetes API server globally",
          correct: false,
          explanation:
            "Breaks all control plane operations and automated self-healing across the entire cluster.",
        },
      ],
    },
    {
      id: "sc-3",
      title: "Scenario C: Malicious Container Image Tag Hijack in CI/CD",
      context:
        "An attacker breaches a third-party Docker Hub repository and pushes a backdoored image overwriting the mutable 'v1.2.0' tag with crypto-mining malware.",
      options: [
        {
          label: "Kubernetes Admission Controller (Kyverno/Gatekeeper) verifies Cosign cryptographic signature and immutable SHA256 digest, rejecting untrusted image",
          correct: true,
          explanation:
            "Correct! Deploying by immutable digest (@sha256:...) and verifying Sigstore/Cosign signatures ensures only cryptographically verified artifacts can ever schedule.",
        },
        {
          label: "Rely on the cluster to auto-detect malware based on CPU usage after 24 hours of running",
          correct: false,
          explanation:
            "Unacceptable. By the time high CPU is noticed, customer data has been exfiltrated and infrastructure compromised.",
        },
        {
          label: "Manually inspect every byte of the Docker container before deployment",
          correct: false,
          explanation:
            "Humanly impossible at modern CI/CD deployment velocity.",
        },
      ],
    },
    {
      id: "sc-4",
      title: "Scenario D: Compromised Cloud KMS Key Policy (Unauthorized Decrypt Attempt)",
      context:
        "An unauthorized application service account in the dev environment attempts to call kms:Decrypt using the production customer data master key.",
      options: [
        {
          label: "KMS Key Policy enforces explicit Separation of Duties: Dev principals are denied; CloudTrail triggers immediate High-Severity SOC alarm",
          correct: true,
          explanation:
            "Correct! AWS KMS and Cloud KMS require explicit resource-level key policies. Identity IAM permissions alone cannot decrypt without explicit KMS key policy grants.",
        },
        {
          label: "Allow the decryption because both services belong to the same cloud account",
          correct: false,
          explanation:
            "Violates least privilege. Belongs-to-same-account is not an authorization boundary in Zero Trust.",
        },
        {
          label: "Delete the customer master key so no one can decrypt it",
          correct: false,
          explanation:
            "Permanent data loss disaster. Deleting the KMS key renders all production customer backups permanently unrecoverable.",
        },
      ],
    },
    {
      id: "sc-5",
      title: "Scenario E: Compromised CI/CD Runner with Deployment Privileges",
      context:
        "A malicious pull request executes an arbitrary script inside a GitHub Actions / GitLab CI runner that holds deployment credentials to production.",
      options: [
        {
          label: "Grant the CI runner permanent AdministratorAccess so builds never fail with permission errors",
          correct: false,
          explanation:
            "Critical security flaw! Permanent admin access in CI/CD is the primary vector for modern software supply chain attacks.",
        },
        {
          label: "Workload Identity Federation with branch/environment claims: CI runner only obtains short-lived scoped tokens upon PR approval to protected main branch",
          correct: true,
          explanation:
            "Correct! OIDC Workload Identity Federation validates claims (e.g., ref: refs/heads/main and environment: production) with mandatory senior reviewer sign-off.",
        },
        {
          label: "Stop using automated CI/CD and deploy all code via manual FTP from laptops",
          correct: false,
          explanation:
            "Regressive and introduces even greater security risks.",
        },
      ],
    },
    {
      id: "sc-6",
      title: "Scenario F: Internal Network Firewall Misconfiguration (Accidental 0.0.0.0/0 Allow)",
      context:
        "A junior engineer misconfigures a security group, accidentally opening ingress port 5432 (PostgreSQL) to 0.0.0.0/0 on an internal database subnet.",
      options: [
        {
          label: "Zero Trust Invariant holds: DB requires Mutual TLS (mTLS), database IAM token authentication, and subnet is private with zero public IP routing",
          correct: true,
          explanation:
            "Correct! Defense in depth: The subnet lacks an Internet Gateway route, so packets cannot reach it from the internet, and mTLS + IAM ensures network allowance != authentication.",
        },
        {
          label: "The database is instantly breached and all records leaked because firewalls are the only defense",
          correct: false,
          explanation:
            "False in a Zero Trust architecture. Defense in depth ensures identity, routing, and cryptography prevent single-layer failures from becoming catastrophic breaches.",
        },
        {
          label: "Power down the entire datacenter",
          correct: false,
          explanation:
            "Unnecessary disruption.",
        },
      ],
    },
    {
      id: "sc-7",
      title: "Scenario G: Enterprise Identity Provider (Okta/Entra) Outage / Lockout",
      context:
        "The primary corporate Identity Provider experiences a global authentication service outage during an active production outage. Engineers cannot authenticate to the cloud console via SSO.",
      options: [
        {
          label: "Activate pre-configured Break-Glass Emergency Administrator IAM accounts secured with hardware FIDO2 keys stored in physical safes",
          correct: true,
          explanation:
            "Correct! NIST SP 800-207 mandates independent break-glass emergency administrative access completely decoupled from the primary corporate SSO IdP.",
        },
        {
          label: "Disable all production firewalls until the IdP vendor resolves their issue",
          correct: false,
          explanation:
            "Dangerous and irrelevant.",
        },
        {
          label: "Wait 14 hours for the third-party IdP status page to turn green while production is down",
          correct: false,
          explanation:
            "Violates SLA and destroys business availability.",
        },
      ],
    },
  ];

  // Tool 4: Week 21 Mastery Test Questions & Answers (Section 85)
  const masteryQuestions = [
    {
      q: "Why is authentication not authorization?",
      a: "Authentication verifies identity ('Who are you?' e.g., verifying a password, MFA token, or OIDC JWT). Authorization determines permissions ('What are you allowed to do?' e.g., can this principal execute UPDATE on table orders?). A validly authenticated identity does not imply permission to perform sensitive administrative operations.",
    },
    {
      q: "Why does RBAC not automatically guarantee least privilege?",
      a: "RBAC (Role-Based Access Control) is merely a grouping mechanism. If an organization defines a role like 'Developer' or 'BillingService' and attaches broad wildcards ('*') or broad subscription-wide scopes, it has implemented RBAC with zero least privilege. Least privilege is a security principle requiring minimal actions, minimal resources, minimal time, and minimal conditions.",
    },
    {
      q: "Why can the ability to modify IAM policies be more dangerous than the ability to read a database?",
      a: "Privilege escalation: An identity with iam:PutRolePolicy, iam:CreatePolicyVersion, or iam:AttachRolePolicy can grant itself full Administrator privileges. Once an administrator, it can read all databases, disable audit logging (CloudTrail), destroy backups, and alter KMS key policies. IAM is the master control plane boundary.",
    },
    {
      q: "Why should workloads use short-lived identity rather than long-lived cloud credentials?",
      a: "Static credentials (e.g., AWS IAM access keys or GCP service account JSON keys) stored in code or configuration files inevitably leak into Git repositories, CI/CD logs, Docker image layers, or developer laptops. Short-lived tokens (e.g., 15-minute STS or OIDC tokens) expire automatically, drastically minimizing the exploit window of any leaked token.",
    },
    {
      q: "Why is encryption without key-management architecture incomplete?",
      a: "Encryption simply transforms plaintext into ciphertext using a key. If the encryption key is stored alongside the data, managed by the same application without separation of duties, or accessible to anyone with storage read access, encryption provides zero real security. Key management (KMS) controls who can use the key, rotation cycles, and auditable crypto operations.",
    },
    {
      q: "Why should key administrators and key users be separate identities?",
      a: "Separation of duties: A Key Administrator manages key lifecycles, rotation schedules, and access policies, but should NEVER have permission to call kms:Decrypt to view sensitive production customer records. Conversely, application workloads need kms:Decrypt/Encrypt to process transactions, but must never have permission to delete the key or modify its security policy.",
    },
    {
      q: "Why does TLS not mean a user is authorized to perform an operation?",
      a: "TLS merely protects the transport channel against eavesdropping, tampering, and man-in-the-middle attacks between client and server. It verifies the server's certificate. It does not evaluate whether the authenticated caller has permission to view, edit, or delete the requested resource (an application-layer authorization responsibility).",
    },
    {
      q: "Why is private networking not equivalent to trust?",
      a: "Network location is not identity (the foundational tenet of Zero Trust). Private subnets and VPN pipes merely route IP packets. If an internal service on a private subnet is compromised, an attacker can move laterally across the subnet if systems implicitly trust any incoming packet from the internal CIDR.",
    },
    {
      q: "Why should east-west service traffic be authenticated and authorized?",
      a: "Most modern breaches occur when an attacker compromises a low-privilege edge service (north-south) and moves laterally across unauthenticated internal microservices (east-west). Authenticating east-west traffic via mutual TLS (mTLS) and workload identity ensures a compromised frontend cannot invoke sensitive billing or database APIs.",
    },
    {
      q: "Why are signed container images and SBOMs part of cloud security rather than merely DevOps?",
      a: "Supply chain integrity: Without image signing (Sigstore/Cosign), anyone with registry write access can push a malicious image tag that automatically deploys to production. An SBOM (Software Bill of Materials) provides a machine-readable bill of all included libraries, enabling instant identification of zero-day vulnerabilities (e.g., Log4j) across all production containers.",
    },
    {
      q: "Why does ':latest' create a weaker deployment-integrity model than an immutable digest?",
      a: "Tags are mutable pointers: The same tag 'v1.0' or 'latest' can point to different code today than it did yesterday. If an attacker overwrites a tag in the registry, clusters restarting pods will silently pull the malicious code. Deploying by cryptographic digest (@sha256:...) guarantees bit-for-bit immutable provenance.",
    },
    {
      q: "Why is a secret manager better than storing credentials in an image, Git repository, or config file?",
      a: "A centralized secret manager stores credentials encrypted under KMS, enforces strict IAM access policies, logs every access attempt with caller identity, and enables zero-downtime automated rotation. Embedded secrets leak across Git histories, Docker cache layers, and shell environment variables.",
    },
    {
      q: "Why is Zero Trust more than 'put everything behind MFA'?",
      a: "MFA only addresses human authentication at the perimeter. Zero Trust encompasses the entire architecture: Workload identity federation for non-human services, micro-segmentation, default-deny network policies, continuous telemetry, least-privilege RBAC, and assuming breach across every internal service hop.",
    },
    {
      q: "Why is security monitoring different from infrastructure monitoring?",
      a: "Infrastructure monitoring tracks operational health (CPU utilization, RAM, disk I/O, 500 error rates). Security monitoring tracks anomalous behavioral intent: A service account that normally reads 5 secrets/day suddenly reading 50,000 secrets, impossible travel logins, or unexpected outbound connections to foreign IP ranges, even while CPU is at a healthy 5%.",
    },
    {
      q: "If an attacker gets valid credentials, what stops them from owning the entire environment?",
      a: "A layered defense-in-depth architecture: Least privilege restricts the identity to a narrow scope; JIT privileges require approval; short-lived tokens expire quickly; Conditional Access policies restrict access to managed IP/devices; NetworkPolicies block lateral subnet scanning; and SIEM anomaly alerts trigger automated containment before damage spreads.",
    },
  ];

  // Syllabus Topics (12 Topics covering Week 21)
  const topics = [
    {
      id: 1,
      title: "The Security Mental Model & Zero Trust Architecture (NIST SP 800-207)",
      week: "Foundations",
      focus: "NIST SP 800-207, The 8 Boundary Questions & Assume Breach",
      badge: "Zero Trust Core",
      theory:
        "Cloud security is not 'firewall + password + encryption = secure.' Production security architecture is built on the foundational tenet: Assume something eventually gets compromised. Design so that the compromise is limited, detected, and recoverable. Grounded in NIST SP 800-207 and NIST SP 800-207A, Zero Trust eliminates implicit trust based on network location. At every boundary, the architect must answer: Who? What? To What? From Where? Under What Conditions? For How Long? Can We Prove It? What Happens If This Identity Is Compromised?",
      diagram: `THE ZERO TRUST REQUEST EVALUATION MODEL:
=============================================================================
Request Initiated
       |
       v
+---------------------------------------------------------------------------+
| ZERO TRUST POLICY ENGINE (Continuous Telemetry & Context Verification)    |
| - WHO is calling? (Authenticated Principal: User or Workload Identity)    |
| - WHAT action? (Read, Write, Delete, Administer)                         |
| - TO WHAT resource? (Exact ARN, URI, or Database Table)                   |
| - FROM WHERE? (Device Health, Compliant IP, Private VPC Endpoint)        |
| - UNDER WHAT CONDITIONS? (Time of day, MFA status, Risk Score)           |
| - FOR HOW LONG? (Short-lived token: 15-minute validity window)            |
+---------------------------------------------------------------------------+
       |                                   |
    [ ALLOW ]                           [ DENY ]
       |                                   |
       v                                   v
Short-Lived Ephemeral Token         Logged to SIEM & Security Alert Triggered
       |
       v
Execute Micro-Operation & Emit Security Audit Telemetry
=============================================================================
CORE PRINCIPLE: Never trust, always verify explicitly, enforce least privilege,
and reduce the blast radius assuming breach has already occurred!`,
      keyTakeaways: [
        "Network location is not trust: A request originating inside a private VPC must still authenticate and prove authorization.",
        "Zero Trust 3 Tenets: (1) Verify explicitly, (2) Use least privilege, (3) Assume breach.",
        "Blast Radius Reduction: Security engineering is the art of reducing the impact of compromise, not just the probability.",
        "At every architectural boundary, explicitly evaluate caller identity, permissions, environmental conditions, and auditability.",
      ],
      codeExample: `# AWS IAM Condition Block: Enforcing Zero Trust Constraints
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ZeroTrustDatabaseAccess",
      "Effect": "Allow",
      "Action": "rds-db:connect",
      "Resource": "arn:aws:rds-db:us-east-1:123456789012:dbuser:pr-1234/app_user",
      "Condition": {
        "Bool": { "aws:MultiFactorAuthPresent": "true" },
        "StringEquals": { "aws:sourceVpc": "vpc-0a1b2c3d4e5f" },
        "NumericLessThanEquals": { "aws:TokenIssueTime": "900" } # Max 15-min token age
      }
    }
  ]
}`,
    },
    {
      id: 2,
      title: "Authentication vs Authorization & The IAM Formal Model",
      week: "Identity",
      focus: "AuthN vs AuthZ, Principal + Action + Resource + Conditions, Blast Radius",
      badge: "IAM Principles",
      theory:
        "Authentication (AuthN) proves identity: 'Who are you?' (e.g., passwords, FIDO2 passkeys, X.509 certs, OIDC JWTs). Authorization (AuthZ) governs permissions: 'What are you allowed to do?' The formal authorization evaluation model is: Principal + Action + Resource + Conditions = Decision (Allow or Deny). A successful authentication grants zero implicit access; all operations default to Deny until an explicit Allow statement matches the evaluation context without any conflicting explicit Deny.",
      diagram: `THE FORMAL IAM AUTHORIZATION EVALUATION PIPELINE:
=============================================================================
[ INCOMING REQUEST ]
  Principal:   service-account:order-processor@prod.iam.gserviceaccount.com
  Action:      spanner.databases.select
  Resource:    projects/prod/instances/main/databases/orders/tables/customers
  Conditions:  sourceIP in VPC CIDR & time < 18:00 UTC
       |
       v
+-------------------------------------------------------------+
| 1. EXPLICIT DENY EVALUATION: Any matching Deny rule?        |
|    - If YES -> IMMEDIATE DENY (Hard Stop)                   |
+-------------------------------------------------------------+
       | No explicit deny
       v
+-------------------------------------------------------------+
| 2. EXPLICIT ALLOW EVALUATION: Does an active policy match?  |
|    - Matching Principal, Action, Resource, & Conditions?     |
|    - If YES -> ALLOW                                        |
+-------------------------------------------------------------+
       | No explicit allow
       v
+-------------------------------------------------------------+
| 3. DEFAULT EVALUATION: DEFAULT DENY                         |
+-------------------------------------------------------------+`,
      keyTakeaways: [
        "AuthN is Identity verification; AuthZ is Access Control. Never conflate the two.",
        "Default Deny: In cloud security, access is forbidden unless explicitly permitted by an authorized policy.",
        "Explicit Deny always takes precedence over any Allow across AWS, Azure, and Google Cloud.",
        "Conditions (time, MFA, IP, VPC, tags) turn static roles into context-aware dynamic authorization engines.",
      ],
      codeExample: `# GCP IAM Deny Policy: Immutable Security Guardrail
# Enforcing that no identity (even Project Owner) can delete production customer logs
cat <<EOF > deny-policy.json
{
  "name": "policies/cloud-security-guardrails",
  "rules": [
    {
      "denyRule": {
        "deniedPrincipals": ["principalSet://goog/public:all"],
        "deniedPermissions": ["logging.logBuckets.delete", "logging.logs.delete"],
        "exceptionPrincipals": ["principal://iam.googleapis.com/projects/-/serviceAccounts/sec-admin@corp.iam.gserviceaccount.com"]
      }
    }
  ]
}
EOF`,
    },
    {
      id: 3,
      title: "Human Identities vs Workload Identities (Zero Static Keys)",
      week: "Identity Architecture",
      focus: "Eliminating Static Keys, AWS IRSA, Azure Managed ID & GCP Workload Identity",
      badge: "Zero Static Keys",
      theory:
        "Human and workload identities have fundamentally distinct threat profiles. Humans require centralized Enterprise IdPs (Okta, Entra ID), hardware MFA, and Just-In-Time (JIT) role assumption. Workloads (Kubernetes pods, VMs, Lambda functions) require ephemeral cryptographic tokens without permanent credentials. Storing permanent AWS IAM access keys or GCP service account JSON files inside code or config creates severe breach vulnerabilities. Modern architectures mandate Workload Identity Federation: exchanging local cluster service account tokens for short-lived cloud credentials.",
      diagram: `HUMAN VS WORKLOAD IDENTITY ARCHITECTURE:
=============================================================================
HUMAN IDENTITY FLOW:
  Engineer -> [ Corporate IdP (Okta / Entra) ]
                   |
                   v (FIDO2 Hardware WebAuthn MFA)
              [ Short-Lived Console / CLI Token (1 to 4 hours) ]
                   |
                   v (Just-In-Time PIM Approval)
              [ Assume Developer / Operator Role ]

WORKLOAD IDENTITY FLOW (Kubernetes to Cloud):
  [ EKS Pod / AKS Pod / GKE Pod ]
       |
       | 1. Projected Service Account Token (Signed OIDC JWT, 1-hour expiry)
       v
  [ Cloud Security Token Service (AWS STS / Google STS / Entra ID) ]
       |
       | 2. Cryptographic Validation against Cluster OIDC JWKS Endpoint
       v
  [ Ephemeral Cloud Access Token (Valid for 15-60 minutes) ]
       |
       v
  [ Access Cloud Database / Secret Manager / Storage Bucket ]
=============================================================================
ZERO STATIC SECRETS! No JSON keys in repositories, zero manual key rotations!`,
      keyTakeaways: [
        "Never use static long-lived credentials (IAM secret keys or JSON keyfiles) for workload authentication.",
        "Workload Identity maps native Kubernetes Service Accounts directly to cloud IAM roles using OIDC token exchange.",
        "AWS IRSA (IAM Roles for Service Accounts), Azure Workload ID, and Google GKE Workload Identity all use this exact pattern.",
        "Human access should require hardware MFA and Just-In-Time (JIT) elevated access approvals with automatic expiry.",
      ],
      codeExample: `# Kubernetes ServiceAccount bound to AWS IAM Role via IRSA (Zero Static Keys!)
apiVersion: v1
kind: ServiceAccount
metadata:
  name: payment-processor-sa
  namespace: production
  annotations:
    # Binds Pod directly to AWS IAM Role via OIDC Federation!
    eks.amazonaws.com/role-arn: arn:aws:iam::123456789012:role/PaymentProcessorRole
    eks.amazonaws.com/token-expiration: "3600" # 1-hour token rotation`,
    },
    {
      id: 4,
      title: "Least Privilege, RBAC Fallacies, Scope & Privilege Escalation",
      week: "Authorization",
      focus: "RBAC Limitations, Scope Blast Radius & IAM Privilege Escalation Vectors",
      badge: "Privilege Boundaries",
      theory:
        "RBAC is an authorization mechanism; least privilege is a security principle. Defining a role named 'Developer' and attaching wildcard permissions ('*') creates catastrophic vulnerability under the illusion of RBAC. Scope defines the blast radius: 'Reader on Database' vs 'Contributor on Subscription'. Furthermore, the ability to modify IAM policies (e.g., iam:PutRolePolicy, iam:CreatePolicyVersion) is vastly more dangerous than reading a database because an attacker can escalate privileges to full cloud administrator.",
      diagram: `IAM PRIVILEGE ESCALATION ATTACK GRAPH:
=============================================================================
[ Attacker compromises Developer Account with 'iam:AttachRolePolicy' ]
                           |
                           v (Developer has no direct DB access)
          Attaches 'AdministratorAccess' policy to self
                           |
                           v
          [ Full Cloud Account Compromised (Root Administrator) ]
                           |
       +-------------------+-------------------+
       |                   |                   |
       v                   v                   v
Reads All Databases    Disables CloudTrail   Destroys Backups & Disks

DEFENSIVE REMEDIATION: IAM PERMISSIONS BOUNDARIES & SERVICE CONTROL POLICIES
  - Apply maximum permission boundaries preventing non-admins from modifying IAM
  - Enforce Separation of Duties: Developers can deploy code, not alter IAM roles!`,
      keyTakeaways: [
        "RBAC does not guarantee least privilege: Broad roles with wildcards create dangerous security illusions.",
        "Scope determines blast radius: Grant permissions at the resource level, never at the subscription/organization root.",
        "Protect the IAM control plane: The power to edit roles or policies is equivalent to full administrative control.",
        "Implement IAM Permissions Boundaries to enforce an immutable ceiling on permissions that delegated roles can grant.",
      ],
      codeExample: `# AWS IAM Permissions Boundary: Enforcing an Immutable Security Ceiling
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAppActions",
      "Effect": "Allow",
      "Action": ["s3:*", "dynamodb:*", "sqs:*"],
      "Resource": "*"
    },
    {
      "Sid": "DenyIAMModification",
      "Effect": "Deny",
      "Action": ["iam:*", "organizations:*"],
      "Resource": "*" # Prevents privilege escalation to Administrator!
    }
  ]
}`,
    },
    {
      id: 5,
      title: "Encryption at Rest, in Transit & KMS Architecture",
      week: "Cryptography",
      focus: "Envelope Encryption, KMS Key Policies, KEK vs DEK & Azure RBAC 2026",
      badge: "KMS & Cryptography",
      theory:
        "Encryption transforms plaintext into ciphertext using cryptographic keys. The true security question is: 'Who controls the key, what can they do with it, and how is it audited?' Systems must encrypt data both at rest and in transit end-to-end. Large-scale cloud systems utilize Envelope Encryption: A centralized Key Management Service (AWS KMS, Azure Key Vault, Google Cloud KMS) protects a Key Encryption Key (KEK). The KEK encrypts a localized Data Encryption Key (DEK), which encrypts bulk data using AES-GCM-256 locally.",
      diagram: `ENVELOPE ENCRYPTION ARCHITECTURE:
=============================================================================
1. ENCRYPTION FLOW:
   Application -> [ Cloud KMS ] (Calls GenerateDataKey on KEK)
                       |
                       +---> [ Plaintext DEK ] (Kept in volatile RAM only)
                       |
                       +---> [ Encrypted DEK ] (Ciphertext)
   Application uses Plaintext DEK to encrypt 50 GB file via local AES-256-GCM.
   Plaintext DEK is immediately wiped from memory!
   Storage writes: [ Encrypted Data File ] + [ Encrypted DEK Header ]

2. DECRYPTION FLOW:
   Application reads [ Encrypted DEK Header ]
   Application -> [ Cloud KMS ] (Calls Decrypt with KMS Key Policy authorization)
   KMS returns [ Plaintext DEK ]
   Application decrypts file locally in memory.
=============================================================================
BENEFITS: Bulk data never travels across KMS network; key rotation is instant!`,
      keyTakeaways: [
        "Envelope Encryption separates the master Key Encryption Key (KEK) from the ephemeral Data Encryption Key (DEK).",
        "KMS Key Policies are independent of IAM: In AWS KMS, an IAM allow policy has zero effect without explicit KMS key policy permission.",
        "Separation of Duties: Key Administrators manage policies and rotation; Key Users (applications) only invoke Encrypt/Decrypt.",
        "Azure 2026 Standard: Azure Key Vault now defaults to Azure RBAC data-plane authorization, deprecating legacy access policies.",
      ],
      codeExample: `# AWS KMS Key Policy: Strict Separation of Duties
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "KeyAdminOnly",
      "Effect": "Allow",
      "Principal": { "AWS": "arn:aws:iam::123456789012:role/SecOpsKeyAdmin" },
      "Action": ["kms:Create*", "kms:PutKeyPolicy", "kms:ScheduleKeyDeletion"],
      "Resource": "*"
    },
    {
      "Sid": "ApplicationCryptoOnly",
      "Effect": "Allow",
      "Principal": { "AWS": "arn:aws:iam::123456789012:role/OrderPaymentWorkload" },
      "Action": ["kms:Encrypt", "kms:Decrypt", "kms:GenerateDataKey"],
      "Resource": "*" # Workload CANNOT delete or reconfigure key policies!
    }
  ]
}`,
    },
    {
      id: 6,
      title: "Secrets Management & Zero-Downtime Secret Rotation",
      week: "Secrets",
      focus: "Secrets vs Config, AWS/Azure/GCP Secret Managers & Dual-Version Rotation",
      badge: "Secret Lifecycle",
      theory:
        "A secret is sensitive credential data: database passwords, OAuth tokens, API keys, and connection strings. Secrets must never be stored in configuration files, Git repositories, or container image layers. Dedicated Secret Managers (AWS Secrets Manager, Azure Key Vault, Google Secret Manager) store secrets encrypted under KMS with audit trails. Zero-downtime secret rotation requires a distributed dual-version protocol: creating v2, validating v2 on the database, updating application consumers, verifying traffic, and finally retiring v1.",
      diagram: `DUAL-VERSION ZERO-DOWNTIME SECRET ROTATION PROTOCOL:
=============================================================================
Step 1: CREATE NEW SECRET VERSION (v2)
  Secret Manager Lambda generates high-entropy random password (v2).
  Secret state: Current = v1, Pending = v2.

Step 2: SET CREDENTIAL ON DATABASE
  Lambda connects to DB using v1; executes: ALTER USER app WITH PASSWORD 'v2';
  Database now accepts BOTH v1 and v2 simultaneously!

Step 3: TEST PENDING CREDENTIAL
  Lambda verifies it can establish a valid SQL connection using v2.

Step 4: UPDATE CONSUMER WORKLOADS
  Applications fetch v2 via Secret Store CSI driver / SDK; restart or reload pool.

Step 5: RETIRE OLD VERSION (v1)
  Mark v2 as Current; remove v1 after grace period.
=============================================================================
Zero dropped connections, zero service downtime during routine rotation!`,
      keyTakeaways: [
        "Never commit secrets to Git or pass sensitive passwords in container environment variables.",
        "Inject secrets at runtime using Kubernetes External Secrets Operator or Secret Store CSI Driver.",
        "Dual-version rotation prevents dropped connections during distributed rolling restarts.",
        "Audit secret access frequency: An application that normally reads 1 secret/day suddenly reading 10,000 indicates credential theft.",
      ],
      codeExample: `# Kubernetes ExternalSecret: Syncing Database Password from AWS Secrets Manager
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: aurora-db-secret
  namespace: production
spec:
  refreshInterval: "1h" # Automatic rotation sync every hour
  secretStoreRef:
    name: aws-secrets-manager
    kind: SecretStore
  target:
    name: db-credentials # Mounted directly into Pod memory
  data:
  - secretKey: password
    remoteRef:
      key: production/aurora/master-password
      property: password`,
    },
    {
      id: 7,
      title: "TLS, mTLS & Automated Certificate Lifecycles",
      week: "Cryptography in Transit",
      focus: "mTLS, SPIFFE/SPIRE, Service Mesh East-West Security & Certificate Outages",
      badge: "mTLS & Mesh",
      theory:
        "TLS (Transport Layer Security) guarantees communication encryption, integrity, and server authentication. However, TLS does not solve authorization: An encrypted HTTPS connection does not prove the caller has permission to perform the action. In microservice architectures, Mutual TLS (mTLS) cryptographically verifies both server and client identities for every internal east-west call. Technologies like SPIFFE/SPIRE and service meshes (Istio/Linkerd) automate short-lived X.509 certificate issuance, eliminating manual certificate expiry outages.",
      diagram: `MUTUAL TLS (mTLS) & SERVICE IDENTITY (SPIFFE):
=============================================================================
[ Frontend Pod ]                                      [ Payment Service Pod ]
SPIFFE ID:                                             SPIFFE ID:
spiffe://prod/ns/web/sa/frontend                       spiffe://prod/ns/pay/sa/payment
       |                                                      |
       +================== 1. TCP Handshake ==================+
       |                                                      |
       | 2. ServerHello: Payment Pod sends X.509 Cert        |
       |    Frontend verifies Payment Pod identity!           |
       |                                                      |
       | 3. ClientCertificate: Frontend Pod sends X.509 Cert  |
       |    Payment Pod verifies Frontend identity!           |
       |                                                      |
       +================== 4. Encrypted mTLS Tunnel ==========+
       |                                                      |
       | 5. Payment Pod enforces Layer 7 Authorization Policy: |
       |    "Only caller with spiffe://prod/.../frontend allowed"
       v
=============================================================================
MUTUAL AUTHENTICATION: Both parties cryptographically prove identity!`,
      keyTakeaways: [
        "TLS provides an encrypted pipe; IAM/RBAC provides authorization. Both are required.",
        "mTLS authenticates both client and server: Essential for securing east-west microservice communications.",
        "SPIFFE (Secure Production Identity Framework for Everyone) assigns standard, cryptographically verifiable IDs to workloads.",
        "Automate certificate lifecycles via cert-manager or managed meshes to prevent catastrophic 00:00 certificate expiry outages.",
      ],
      codeExample: `# Istio AuthorizationPolicy: Enforcing mTLS and SPIFFE Workload Identity
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: payment-access-control
  namespace: payment-system
spec:
  selector:
    matchLabels:
      app: payment-api
  action: ALLOW
  rules:
  - from:
    - source:
        # Enforces cryptographically verified SPIFFE Client Certificate!
        principals: ["cluster.local/ns/production/sa/order-checkout-sa"]
    to:
    - operation:
        methods: ["POST"]
        paths: ["/v1/charge"]`,
    },
    {
      id: 8,
      title: "Network Security, Micro-Segmentation & Egress Controls",
      week: "Network Security",
      focus: "Micro-Segmentation, East-West vs North-South, Egress Filtering & Private Endpoints",
      badge: "Micro-Segmentation",
      theory:
        "Traditional perimeter security relies on the illusion of a 'trusted internal network.' Zero Trust mandates micro-segmentation: partitioning subnets and workloads with default-deny firewall policies. North-South traffic crosses the external perimeter (WAF, edge load balancing); East-West traffic flows between internal services. Crucially, egress security (filtering outbound connections to the internet) prevents compromised workloads from downloading malware toolkits, communicating with Command & Control (C2) servers, or exfiltrating sensitive data.",
      diagram: `NETWORK MICRO-SEGMENTATION & EGRESS CONTROL:
=============================================================================
                        [ THE PUBLIC INTERNET ]
                                   |
                                   v (North-South Traffic)
                 [ CLOUD WAF / DDOS SHIELD / ANYCAST EDGE ]
                                   |
                                   v
             [ INGRESS SUBNET: Public Load Balancers Only ]
                                   | (Port 443 Only)
                                   v
+---------------------------------------------------------------------------+
| APP SUBNET (10.10.20.0/24)                                                |
| [ Web Pod ] ---> (Port 8080) ---> [ App Microservice Pod ]                |
|      |                                   | (Port 5432 Only)               |
|      x (BLOCKED)                         v                                |
|      |                  [ DATABASE SUBNET: 10.10.30.0/24 ]                |
|      +----------------> [ Aurora PostgreSQL Master ]                      |
|                         (No Public IP, No Internet Route!)                |
+---------------------------------------------------------------------------+
                                   |
            [ EGRESS CONTROL: Managed Cloud NAT / Firewall ]
                                   |
         - Allowed: api.stripe.com (Port 443 via FQDN allowlist)
         - Blocked: 0.0.0.0/0 on Port 22, 4444, 80 (C2 Exfiltration Denied!)`,
      keyTakeaways: [
        "East-West traffic must be segmented: An attacker breaching the web tier must not automatically reach the database tier.",
        "Layered Defense: DDoS Protection (traffic volume) vs WAF (HTTP exploits) vs Firewalls (ports/IPs) vs IAM (permissions).",
        "Egress Security is vital: Restrict outbound egress to approved FQDN domains to block reverse shells and data exfiltration.",
        "Private Endpoints (AWS PrivateLink, Azure Private Link, GCP PSC) eliminate public IP exposures entirely.",
      ],
      codeExample: `# Kubernetes NetworkPolicy: Micro-Segmentation & Egress Lockdown
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: backend-security-policy
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: backend-api
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend-web # Only Frontend Web Pods can reach backend!
    ports:
    - protocol: TCP
      port: 8080
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: postgres-db # Backend can only reach Database; Internet egress BLOCKED!
    ports:
    - protocol: TCP
      port: 5432`,
    },
    {
      id: 9,
      title: "Container & Software Supply Chain Security (4 Stages)",
      week: "Workload & Supply Chain",
      focus: "4 Stages: Source, Build, Image (Sigstore/SBOM), Runtime (PSS Restricted)",
      badge: "Supply Chain & Runtime",
      theory:
        "Containers share the host operating system kernel, making container security distinct from virtual machine isolation. Comprehensive workload security requires protection across all 4 stages: (1) Source (dependency audits, secret scanning), (2) Build (hardened CI/CD runners, SLSA provenance), (3) Image (immutable sha256 digests, vulnerability scanning, Software Bill of Materials [SBOM], Sigstore/Cosign digital signatures), and (4) Runtime (Kubernetes Pod Security Standards 'Restricted' profile: non-root UID, read-only root filesystem, dropped capabilities, and seccomp syscall filtering).",
      diagram: `THE 4 STAGES OF CONTAINER & SUPPLY CHAIN SECURITY:
=============================================================================
STAGE 1: SOURCE
  Git Commit -> Gitleaks / TruffleHog (Scan for leaked API secrets)
             -> Dependabot / Snyk (Check vulnerable third-party libraries)

STAGE 2: BUILD
  Isolated CI Runner -> Build OCI Image -> Generate SBOM (Syft / CycloneDX)
                     -> Cryptographic Provenance Attestation (SLSA Level 3)

STAGE 3: ARTIFACT & IMAGE
  Vulnerability Scanner (Trivy / Clair) -> Blocks Critical CVEs
  Sigstore / Cosign -> Signs image using ephemeral OIDC identity
  Image Reference: registry.internal/app@sha256:4f83b2... (Immutable Digest!)

STAGE 4: KUBERNETES RUNTIME
  Admission Controller (Kyverno) -> Verifies Cosign Signature & SBOM
  Pod Security Admission -> Enforces RESTRICTED Profile:
    - runAsNonRoot: true (UID 10001)
    - readOnlyRootFilesystem: true
    - capabilities: drop: ["ALL"]
    - seccompProfile: type: "RuntimeDefault"
=============================================================================
Container escapes and persistent malware injection blocked before execution!`,
      keyTakeaways: [
        "A container is not a VM: Containers share the host kernel; runtime hardening is essential to prevent container escapes.",
        "Always deploy by immutable digest (`@sha256:...`), never by mutable tags like `:latest`.",
        "Generate a Software Bill of Materials (SBOM) for rapid forensic auditing when new zero-day CVEs emerge.",
        "Enforce the Kubernetes Pod Security Standards Restricted profile: Non-root execution, read-only rootFS, and seccomp profiles.",
      ],
      codeExample: `# Production-Grade Hardened Kubernetes Pod Security Context (Restricted Profile)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: secure-microservice
spec:
  template:
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        runAsGroup: 10001
        fsGroup: 10001
        seccompProfile:
          type: RuntimeDefault
      containers:
      - name: app
        image: registry.example.com/app@sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true # Prevents malware persistence
          capabilities:
            drop: ["ALL"] # Drops all Linux kernel capabilities!
        volumeMounts:
        - name: tmp-dir
          mountPath: /tmp
      volumes:
      - name: tmp-dir
        emptyDir: {}`,
    },
    {
      id: 10,
      title: "Threat Modeling & Attack Graph Engineering (STRIDE)",
      week: "Threat Modeling",
      focus: "STRIDE Framework, Attack Paths vs Happy Paths & Lateral Movement",
      badge: "Threat Modeling",
      theory:
        "Architects must not design only for the 'happy path' (User -> Web -> Database); they must rigorously map the attack path. The STRIDE framework classifies threats into Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. Modeling systems as directed attack graphs allows engineers to locate lateral movement paths and strategically place compensating controls (MFA, network policies, IAM boundaries, encryption) to break the attack chain at every link.",
      diagram: `THE STRIDE THREAT MODELING MATRIX & ATTACK GRAPH BREAK:
=============================================================================
S — SPOOFING:               Stolen credentials / token replay
    Control: FIDO2 Hardware MFA, short-lived OIDC tokens, mTLS
T — TAMPERING:              Modified in-flight database write or container image
    Control: Signed Git commits, Cosign image verification, TLS 1.3
R — REPUDIATION:            Action performed without auditable proof
    Control: Tamper-proof SIEM logging, CloudTrail with log validation
I — INFORMATION DISCLOSURE: Unencrypted PII leaked across public internet
    Control: KMS envelope encryption, PrivateLink, egress filtering
D — DENIAL OF SERVICE:      Volumetric traffic flood exhausts compute
    Control: Anycast edge rate limiting, Cloud Armor, autoscaling
E — ELEVATION OF PRIVILEGE: Low-privileged pod escalates to Cloud Admin
    Control: IAM Permissions Boundaries, Non-Root pods, drop capabilities
=============================================================================
BREAK THE ATTACK CHAIN: Every link in the attack path must encounter a control!`,
      keyTakeaways: [
        "Think in attack graphs, not just architecture diagrams: Trace attacker capabilities from initial access to objective.",
        "Apply STRIDE across all data stores, processes, data flows, and trust boundaries.",
        "Assume initial access is inevitable; design controls to prevent lateral movement and privilege escalation.",
        "Break the attack chain: If one link fails (e.g., leaked password), subsequent controls (MFA, IP guardrail, read-only DB) prevent compromise.",
      ],
      codeExample: `# Threat Model Verification Script: Auditing Open S3 Buckets and IAM Wildcards
import boto3

iam = boto3.client('iam')
s3 = boto3.client('s3')

# Check for dangerous wildcard admin policies
policies = iam.list_policies(Scope='Local')['Policies']
for p in policies:
    version = iam.get_policy_version(PolicyArn=p['Arn'], VersionId=p['DefaultVersionId'])
    statements = version['PolicyVersion']['Document']['Statement']
    for stmt in statements:
        if stmt.get('Action') == '*' and stmt.get('Resource') == '*' and stmt.get('Effect') == 'Allow':
            print(f"[CRITICAL THREAT] Wildcard Admin Policy detected: {p['PolicyName']}")`,
    },
    {
      id: 11,
      title: "Security Logging, Auditing, SIEM & Anomaly Detection",
      week: "Observability & Detection",
      focus: "Audit vs App Logs, CloudTrail / Cloud Audit Logs, Behavioral Anomaly Detection",
      badge: "Security Analytics",
      theory:
        "Security telemetry is fundamentally distinct from application error logging. Application logs capture business exceptions; Security audit logs capture: WHO did WHAT to WHICH RESOURCE WHEN FROM WHERE WITH WHICH IDENTITY. AWS CloudTrail, Azure Activity Logs, and Google Cloud Audit Logs form the immutable forensic backbone. Modern Security Information and Event Management (SIEM) systems apply behavioral anomaly detection: Flagging an account that normally reads 5 secrets/hour when it suddenly downloads 50,000 secrets, even if infrastructure CPU remains at 5%.",
      diagram: `SECURITY LOGGING & ANOMALY DETECTION PIPELINE:
=============================================================================
All Cloud Events (Console, API, CLI, Pods)
       |
       v
[ IMMUTABLE CLOUD AUDIT LOGS ]
  - AWS CloudTrail (Multi-region, Log File Validation enabled)
  - Azure Activity Logs / Entra Audit
  - Google Cloud Audit Logs
       |
       v (Encrypted S3 / Cloud Storage with Object Lock WORM storage)
[ SIEM & DETECTION ENGINE (Splunk / Datadog / Google Chronicle / Sentinel) ]
       |
       +---> Real-Time Correlation Rules:
       |     * Call to kms:Decrypt from unrecognized ASN -> ALARM!
       |     * 500 Failed Auth attempts in 60 seconds -> AUTO-BLOCK IP!
       |     * New IAM Role created with AdministratorAccess -> PAGERDUTY!
       v
[ AUTOMATED SOAR RUNBOOK RESPONSE ]
  - Revokes compromised STS token in < 3 seconds
  - Isolates compromised EC2 / Pod via quarantine Security Group`,
      keyTakeaways: [
        "Audit logs must record Who, What, Where, When, and Identity context for every administrative API call.",
        "Store audit logs in tamper-proof WORM (Write-Once-Read-Many) storage with Object Lock to prevent attacker tampering.",
        "Distinguish security anomalies from operational errors: A spike in secret access is a security incident, not a server bug.",
        "Automate incident response (SOAR): Isolate compromised workloads and revoke active tokens programmatically in seconds.",
      ],
      codeExample: `# AWS CloudTrail Log File Integrity Verification
# Ensures an attacker who gained access has not tampered with audit history
aws cloudtrail validate-logs \\
  --trail-arn arn:aws:cloudtrail:us-east-1:123456789012:trail/prod-audit-trail \\
  --start-time 2026-10-01T00:00:00Z \\
  --end-time 2026-10-08T23:59:59Z \\
  --verbose
# Output: Results: 100% of logs cryptographically verified; zero tampering detected!`,
    },
    {
      id: 12,
      title: "Capstone Integration: Multi-Layer Zero Trust for Global Multi-Cloud",
      week: "Capstone Blueprint",
      focus: "3-Cloud Security Translation Matrix, The Prevent-Detect-Recover Triad & Capstone Spec",
      badge: "Capstone Architecture",
      theory:
        "The culmination of this module is securing the Global Multi-Cloud Platform (50M users across AWS, Azure, and Google Cloud). Security is synthesized across the Prevent-Detect-Recover triad: (1) Prevent via Workload Identity Federation, non-overlapping CIDRs, mTLS, and container hardening; (2) Detect via unified OpenTelemetry security spans, multi-cloud CloudTrail/Audit ingestion, and SIEM correlation; and (3) Recover via Point-In-Time immutable backups, automated secret rotation, and tested GameDay runbooks.",
      diagram: `GLOBAL MULTI-CLOUD SECURE ARCHITECTURE BLUEPRINT:
=============================================================================
                      [ 50 MILLION GLOBAL USERS ]
                                   |
                                   v (TLS 1.3 / mTLS / Anycast Edge)
         [ CLOUD ARMOR / AWS SHIELD / AZURE WAF (DDoS + OWASP Top 10) ]
                                   |
          +------------------------+------------------------+
          |                                                 |
          v (VPC 10.10.0.0/16)                             v (VNet 10.20.0.0/16)
+-------------------------------+         +-------------------------------+
| AWS EKS (Production Cluster)  |         | AZURE AKS (Standby Cluster)   |
| - Pod Security: Restricted    |         | - Pod Security: Restricted    |
| - NetworkPolicy: Default-Deny |         | - NetworkPolicy: Default-Deny |
| - Workload Identity (IRSA)    |         | - Entra Workload ID           |
| - Aurora PG (KMS Encrypted)   |         | - Flexible PG (Key Vault Enc) |
+-------------------------------+         +-------------------------------+
          |                                                 |
          +------------------------+------------------------+
                                   | (Encrypted BGP IPSec Tunnel: 10.30.0.0/16)
                                   v
                      +-------------------------------+
                      | GOOGLE CLOUD (us-central1)    |
                      | - BigQuery CMEK Encryption    |
                      | - Cloud Pub/Sub Event Backbone|
                      | - Workload Identity Fed       |
                      +-------------------------------+
=============================================================================
THE PREVENT - DETECT - RECOVER SECURITY TRIAD:
  PREVENT: Least Privilege IAM + mTLS + NetworkPolicy + Hardened Images
  DETECT:  CloudTrail + Cloud Audit Logs + SIEM Anomaly Detection
  RECOVER: Immutable Object Lock Backups + Tested Disaster Recovery Runbooks`,
      keyTakeaways: [
        "The Prevent-Detect-Recover Triad: A mature security posture requires equal investment across prevention, detection, and rapid recovery.",
        "Security is an emergent property of the entire system, not an individual firewall or password.",
        "The 3-Cloud Security Translation Matrix allows architects to map equivalent controls across AWS, Azure, and Google Cloud seamlessly.",
        "True architectural security: When any single control fails, defense-in-depth ensures the system remains resilient and contained.",
      ],
      codeExample: `# 3-Cloud Security Translation Matrix Reference
# Domain          AWS                       Azure                        Google Cloud
# --------------  ------------------------  ---------------------------  -------------------------
# Identity        IAM / IAM Identity Center Entra ID                     Cloud IAM
# Workload ID     IAM Roles (IRSA) / STS    Managed Identities           Workload Identity Fed
# KMS             AWS KMS                   Azure Key Vault (RBAC 2026)  Cloud KMS
# Secrets         Secrets Manager           Key Vault Secrets            Secret Manager
# Firewalls       Security Groups / NACLs   NSGs / Azure Firewall        VPC Firewall / Cloud NGFW
# Private Access  AWS PrivateLink           Azure Private Link           Private Service Connect
# Audit Logs      CloudTrail                Azure Activity / Entra Audit Cloud Audit Logs`,
    },
  ];

  const currentTopic = topics[selectedTopic] || topics[0];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-500/20 selection:text-orange-900">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-orange-300/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
