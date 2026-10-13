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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 10: MULTI-CLOUD ARCHITECTURE                        */
/* Week 20: Designing Systems that Span AWS, Azure, and Google Cloud          */
/* -------------------------------------------------------------------------- */

export default function CloudMultiCloud() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: Multi-Cloud Dependency & Common-Mode Failure Analyzer State
  const [selectedArchPattern, setSelectedArchPattern] = useState("active-passive");
  const [sharedIdp, setSharedIdp] = useState(true);
  const [sharedDns, setSharedDns] = useState(true);
  const [sharedRegistry, setSharedRegistry] = useState(false);
  const [dataSyncStrategy, setDataSyncStrategy] = useState("event-driven");
  const [observabilityStack, setObservabilityStack] = useState("opentelemetry");

  // Tool 2: Cross-Cloud Egress Cost & Failover RPO/RTO Calculator State
  const [crossCloudTransferGb, setCrossCloudTransferGb] = useState(15000); // 15,000 GB = 15 TB
  const [trafficCallPattern, setTrafficCallPattern] = useState("event-driven"); // "sync-api", "event-driven", "batch-nightly"
  const [trafficSteeringMethod, setTrafficSteeringMethod] = useState("dns-steered"); // "dns-steered", "anycast-proxy"
  const [dnsTtlSeconds, setDnsTtlSeconds] = useState(60);
  const [replicationLagSeconds, setReplicationLagSeconds] = useState(15);

  // Tool 3: Multi-Cloud GameDay Simulator State (10 Scenarios from Section 74)
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

  // Tool 1: Calculations for Common-Mode Failure & Dependency Analysis
  const dependencyAnalysis = useMemo(() => {
    let commonModeRisk = 20; // baseline
    let portabilityScore = 75;
    let complexityRating = "Moderate";
    let capClassification = "AP (Available / Partition Tolerant with Eventual Consistency)";
    let criticalWarnings = [];

    if (selectedArchPattern === "active-active") {
      commonModeRisk += 25;
      portabilityScore += 15;
      complexityRating = "Extremely High (Distributed Systems Research)";
      if (dataSyncStrategy === "sync-multimaster") {
        capClassification = "CP attempt (Split-brain hazard during cross-cloud network partitions)";
        criticalWarnings.push(
          "Synchronous multi-master across clouds violates the CAP theorem under network partitions. Latency spikes and split-brain conflicts will occur."
        );
      }
    } else if (selectedArchPattern === "active-passive") {
      complexityRating = "Manageable (Production-Grade)";
      portabilityScore = 80;
    } else if (selectedArchPattern === "best-of-breed") {
      complexityRating = "Moderate (Specialized services)";
      portabilityScore = 45;
      criticalWarnings.push(
        "Best-of-breed introduces deep proprietary service lock-in (e.g., BigQuery, Cosmos DB, DynamoDB), lowering workload portability."
      );
    } else if (selectedArchPattern === "naive-shared") {
      commonModeRisk += 50;
      complexityRating = "High Risk";
      criticalWarnings.push(
        "Single points of failure exist at the management plane. If the shared component dies, all 3 clouds fail simultaneously."
      );
    }

    if (sharedIdp) {
      commonModeRisk += 20;
      criticalWarnings.push(
        "Single IdP dependency: If Okta/Entra suffers a global outage, operators cannot access consoles and workloads cannot refresh cross-cloud tokens."
      );
    }

    if (sharedDns) {
      commonModeRisk += 15;
      criticalWarnings.push(
        "Single DNS provider: If the primary DNS control plane or Anycast edge fails, users cannot reach any of the three cloud endpoints."
      );
    }

    if (sharedRegistry) {
      commonModeRisk += 20;
      criticalWarnings.push(
        "Single container registry: If AWS ECR goes down, Azure AKS and GCP GKE auto-scalers cannot pull container images to handle failover."
      );
    }

    if (observabilityStack === "vendor-siloed") {
      portabilityScore -= 20;
    } else {
      portabilityScore += 10;
    }

    commonModeRisk = Math.min(100, commonModeRisk);
    portabilityScore = Math.min(100, Math.max(10, portabilityScore));

    return {
      commonModeRisk,
      portabilityScore,
      complexityRating,
      capClassification,
      criticalWarnings,
    };
  }, [selectedArchPattern, sharedIdp, sharedDns, sharedRegistry, dataSyncStrategy, observabilityStack]);

  // Tool 2: Cross-Cloud Egress & Failover RPO/RTO Calculations
  const egressCalculations = useMemo(() => {
    // Average internet / inter-cloud egress cost is ~$0.08 to $0.09 per GB
    const ratePerGb = 0.085;
    let monthlyEgressCost = crossCloudTransferGb * ratePerGb;

    if (trafficCallPattern === "sync-api") {
      // Synchronous API calls amplify payload by request/response chatty overhead (approx 2.5x)
      monthlyEgressCost *= 2.5;
    } else if (trafficCallPattern === "batch-nightly") {
      // Compressed columnar formats save ~60% bandwidth
      monthlyEgressCost *= 0.4;
    }

    let calculatedRtoSeconds = 0;
    let rtoDescription = "";

    if (trafficSteeringMethod === "dns-steered") {
      // DNS failover RTO = Health Check detect (30s) + TTL cache duration + resolver cache skew (~30s)
      calculatedRtoSeconds = 30 + dnsTtlSeconds + 30;
      rtoDescription = `DNS convergence (~${calculatedRtoSeconds}s): Subject to recursive resolver TTL caching, client browser DNS cache, and TCP connection persistence.`;
    } else {
      // Anycast Proxy / L7 Edge = sub-second to 5s failover
      calculatedRtoSeconds = 4;
      rtoDescription = "Global Anycast L7 Proxy failover (~4s): Immediate health check reroute. However, the proxy layer itself is a shared cross-cloud dependency.";
    }

    let calculatedRpoSeconds = 0;
    let rpoDescription = "";

    if (trafficCallPattern === "batch-nightly") {
      calculatedRpoSeconds = 86400; // 24 hours
      rpoDescription = "Daily snapshot export: RPO is up to 24 hours of lost transactions in the event of an unrecoverable disaster.";
    } else if (trafficCallPattern === "event-driven") {
      calculatedRpoSeconds = replicationLagSeconds;
      rpoDescription = `Event log stream: RPO bounded by average replication consumer lag (~${replicationLagSeconds} seconds).`;
    } else {
      calculatedRpoSeconds = Math.max(1, Math.round(replicationLagSeconds * 0.4));
      rpoDescription = `Synchronous / semi-sync replication: RPO is ~${calculatedRpoSeconds} seconds, but susceptible to cross-cloud WAN jitter.`;
    }

    return {
      monthlyEgressCost: Math.round(monthlyEgressCost),
      calculatedRtoSeconds,
      rtoDescription,
      calculatedRpoSeconds,
      rpoDescription,
    };
  }, [crossCloudTransferGb, trafficCallPattern, trafficSteeringMethod, dnsTtlSeconds, replicationLagSeconds]);

  // Tool 3: Multi-Cloud GameDay Simulator Scenarios (10 Scenarios from Section 74)
  const gameScenarios = [
    {
      id: "scenario-a",
      title: "Scenario A: AWS Regional Outage (us-east-1 Power Grid Failure)",
      context:
        "At 14:02 UTC, AWS us-east-1 suffers a major power outage affecting multiple AZs. EKS workloads, Aurora write masters, and ELBs in that region stop accepting incoming traffic.",
      options: [
        {
          label: "Trigger automated global traffic steering to Azure AKS; promote Azure read replica to write master",
          correct: true,
          explanation:
            "Correct! Pre-tested active-passive failover: DNS/Edge redirects user traffic to Azure AKS, the local replicated database is promoted, and warm pods scale up. Meets target RTO ≤ 15 min.",
        },
        {
          label: "Wait for AWS us-east-1 to recover while provisioning new VMs in AWS us-west-2 on the fly",
          correct: false,
          explanation:
            "Incorrect. During a major AWS outage, AWS control plane APIs and instance stock in adjacent regions frequently suffer capacity exhaustion, leading to prolonged hours of downtime.",
        },
        {
          label: "Immediately point all database writes across the public internet to GCP Cloud SQL without checking replication lag",
          correct: false,
          explanation:
            "Incorrect. Diverting writes to an unpromoted, laggy replica across the public internet causes massive data inconsistency and data corruption.",
        },
      ],
    },
    {
      id: "scenario-b",
      title: "Scenario B: AWS Cloud Control Plane Lockout (STS & IAM Outage)",
      context:
        "AWS STS and IAM global endpoints experience intermittent 500 errors. Existing running pods are healthy, but deployments, new pod scheduling, and IAM role assumptions fail.",
      options: [
        {
          label: "Execute a cold cluster rebuild in Azure using terraform apply targeting AWS credentials",
          correct: false,
          explanation:
            "Incorrect. If the deployment script requires AWS STS to authenticate or read AWS secrets, it will immediately fail due to the common-mode control plane outage.",
        },
        {
          label: "Freeze AWS deployments; route new traffic to Azure/GCP where independent control planes are operational",
          correct: true,
          explanation:
            "Correct! Provider control planes are independent failure domains. Azure and GCP control planes remain completely unaffected by AWS IAM/STS degradation.",
        },
        {
          label: "Reboot all AWS EC2 worker nodes simultaneously to force token renewal",
          correct: false,
          explanation:
            "Catastrophic failure. Rebooting nodes will destroy existing running pods, and the nodes will fail to rejoin the cluster because STS is down.",
        },
      ],
    },
    {
      id: "scenario-c",
      title: "Scenario C: Shared Global DNS Provider Catastrophic Outage",
      context:
        "The single third-party DNS provider hosting your apex domain (example.com) suffers a global BGP hijacking / DDoS outage. All DNS lookups timeout globally.",
      options: [
        {
          label: "Spin up 100 additional Kubernetes pods in both AWS EKS and Azure AKS",
          correct: false,
          explanation:
            "Pointless. The compute workloads in AWS, Azure, and GCP are 100% healthy, but users cannot resolve the domain name to reach them.",
        },
        {
          label: "Activate Dual-Provider Anycast DNS (Dual-Delegated NS between AWS Route 53 and Cloudflare / Azure DNS)",
          correct: true,
          explanation:
            "Correct! A single DNS provider is a classic common-mode failure. A resilient multi-cloud architecture delegates parent NS records across two independent Anycast DNS networks.",
        },
        {
          label: "Ask all 50 million users to edit their local /etc/hosts file to point to Azure IP",
          correct: false,
          explanation:
            "Unrealistic in any consumer or enterprise production system.",
        },
      ],
    },
    {
      id: "scenario-d",
      title: "Scenario D: Central Identity Provider (IdP) Token Exchange Outage",
      context:
        "Your centralized corporate identity provider (Okta/Entra ID) is down. SSO fails globally, and Workload Identity OIDC token minting fails for cross-cloud calls.",
      options: [
        {
          label: "Hardcode administrator access keys directly into the public GitHub repository",
          correct: false,
          explanation:
            "Critical security breach. Never commit static administrator credentials to solve an operational identity outage.",
        },
        {
          label: "Fall back to pre-configured Break-Glass Emergency IAM accounts with hardware MFA keys in each cloud",
          correct: true,
          explanation:
            "Correct! NIST SP 800-63C mandates an emergency break-glass identity path isolated from the primary corporate IdP for disaster operations.",
        },
        {
          label: "Disable authentication firewalls on all database and Kubernetes endpoints to allow anonymous access",
          correct: false,
          explanation:
            "Severe disaster. Exposing raw database ports anonymously invites instant ransomware exploitation.",
        },
      ],
    },
    {
      id: "scenario-e",
      title: "Scenario E: Primary Container Registry (AWS ECR) Outage",
      context:
        "AWS ECR experiences an API degradation. Azure AKS and GCP GKE attempt to scale out pods in response to traffic, but fail with ImagePullBackOff.",
      options: [
        {
          label: "Multi-cloud registry mirroring (Harbor or automated cross-cloud push to AWS ECR, Azure ACR, and GCP Artifact Registry)",
          correct: true,
          explanation:
            "Correct! Container images must be locally present in each provider's registry. Relying on a single cloud's registry creates a hidden cross-cloud single point of failure.",
        },
        {
          label: "Email the Docker image tarball to the on-call engineer's laptop",
          correct: false,
          explanation:
            "Ineffective and impossible to execute at scale across multi-region autoscaling clusters.",
        },
        {
          label: "Configure pods to run without container images using raw bash scripts",
          correct: false,
          explanation:
            "Invalid Kubernetes architecture.",
        },
      ],
    },
    {
      id: "scenario-f",
      title: "Scenario F: Cross-Cloud Network Partition (AWS ↔ Azure Interconnect Down)",
      context:
        "The direct cloud interconnect between AWS VPC and Azure VNet drops due to a fiber cut. AWS and Azure can both reach the public internet, but cannot ping each other.",
      options: [
        {
          label: "Maintain local database availability in both clouds and accept concurrent conflicting writes without mediation",
          correct: false,
          explanation:
            "Split-Brain disaster. Accepting concurrent uncoordinated writes on both sides of a partition violates data consistency and leads to permanent data corruption.",
        },
        {
          label: "Follow CAP Theorem policy: Designate AWS as the authoritative write master; switch Azure to read-only mode or queue local writes",
          correct: true,
          explanation:
            "Correct! In a network partition, you must choose Consistency or Availability. Designating an unambiguous single source of truth prevents split-brain conflicts.",
        },
        {
          label: "Shut down all servers in all clouds until the physical fiber is repaired",
          correct: false,
          explanation:
            "Unnecessary total blackout when read traffic and primary writes could safely continue.",
        },
      ],
    },
    {
      id: "scenario-g",
      title: "Scenario G: Database Asynchronous Replication Lag Spike",
      context:
        "During a Black Friday spike, cross-cloud database replication lag jumps from 2 seconds to 9 minutes due to WAN bandwidth throttling. A primary cloud failover is requested.",
      options: [
        {
          label: "Blindly trigger automated failover immediately, ignoring the 9-minute lag",
          correct: false,
          explanation:
            "Violates RPO. Immediate failover with 9 minutes of unapplied replication logs results in losing 9 minutes of customer transactions and payments (RPO violated).",
        },
        {
          label: "Drain traffic gracefully, pause new writes on primary, allow the replica to catch up to LSN/checkpoint, then execute clean promotion",
          correct: true,
          explanation:
            "Correct! If the primary is still capable of graceful shutdown, coordinated write freeze and log replay ensures zero transaction loss before promoting the standby.",
        },
        {
          label: "Delete the database replica and re-initialize from an empty schema",
          correct: false,
          explanation:
            "Destroys all standby data and guarantees 100% data loss.",
        },
      ],
    },
    {
      id: "scenario-h",
      title: "Scenario H: Bad Software Release Deployed Simultaneously to All 3 Clouds",
      context:
        "A critical bug in a new microservice release (v2.4.0) causes infinite loops and crashes memory across EKS, AKS, and GKE simultaneously.",
      options: [
        {
          label: "Claim multi-cloud prevented the outage because the code ran on 3 different Linux kernels",
          correct: false,
          explanation:
            "Fatal fallacy! Application code bugs are common-mode failures. Multi-cloud cannot protect against bad software deployed across all providers at once.",
        },
        {
          label: "Canary rollout policy: Deploy sequentially to Cloud A (10%), validate metrics via OpenTelemetry SLOs, before promoting to Cloud B and C",
          correct: true,
          explanation:
            "Correct! Multi-cloud requires independent progressive deployment pipelines (canaries). A regression in AWS is caught before Azure or GCP are ever touched.",
        },
        {
          label: "Blame the cloud provider and open support tickets with AWS, Azure, and Google simultaneously",
          correct: false,
          explanation:
            "Misdiagnosis. The bug is in the application code, not the cloud hypervisors.",
        },
      ],
    },
    {
      id: "scenario-i",
      title: "Scenario I: Silent Cloud Latency Degradation (Brownout)",
      context:
        "GCP GKE pods in Iowa experience 800ms tail latency due to a transient cloud-internal network queue, while AWS and Azure run normally at 25ms.",
      options: [
        {
          label: "Dynamic latency-based weighted traffic steering: Global traffic layer dynamically sheds load away from degraded GCP endpoints",
          correct: true,
          explanation:
            "Correct! Latency-based global routing and OpenTelemetry anomaly detection detect brownouts before total failure and route users to the lowest-latency cloud.",
        },
        {
          label: "Ignore latency as long as HTTP status returns 200 OK",
          correct: false,
          explanation:
            "User churn disaster. 800ms tail latency causes frontend request timeouts and cascading client retries.",
        },
        {
          label: "Restart all GCP databases immediately",
          correct: false,
          explanation:
            "Dangerous and irrelevant; the bottleneck is network queueing, not database storage.",
        },
      ],
    },
    {
      id: "scenario-j",
      title: "Scenario J: Accidental Table Truncation / Data Corruption",
      context:
        "A rogue developer script accidentally executes DROP TABLE orders; on the AWS primary database. The drop statement immediately replicates to Azure and GCP.",
      options: [
        {
          label: "Switch traffic to Azure because it is in a different cloud",
          correct: false,
          explanation:
            "Useless. Asynchronous replication faithfully replicates corruptions and DROP commands across clouds in seconds.",
        },
        {
          label: "Point-In-Time Recovery (PITR): Restore database state from write-ahead logs to T-minus-2 minutes before the DROP statement executed",
          correct: true,
          explanation:
            "Correct! Logical corruption requires Point-In-Time Recovery (PITR) and immutable backups, not live replicas. Replicas protect against hardware loss, not human error.",
        },
        {
          label: "Manually re-enter 50 million orders from memory",
          correct: false,
          explanation:
            "Impossible.",
        },
      ],
    },
  ];

  // Tool 4: Mastery Test Questions & Answers (Section 78)
  const masteryQuestions = [
    {
      q: "Why is a multi-cloud architecture not automatically more reliable than a multi-region architecture?",
      a: "Because multi-cloud introduces common-mode failures (shared DNS, single IdP, single CI/CD, single container registry) and exponential operational complexity. Multi-region within a single mature provider benefits from unified IAM, low-latency private backbones, and consistent APIs without cross-cloud network translation overhead.",
    },
    {
      q: "Why is Kubernetes portable across clouds, but not perfectly cloud-independent?",
      a: "Kubernetes standardizes the orchestration interface (Deployment, Service, Pod spec), but delegates actual infrastructure to cloud-specific controllers: Ingress (ALB vs App Gateway vs GCP GCE Ingress), CSI storage drivers (EBS vs Azure Disk vs GPD), and IAM integration (IRSA vs Entra Workload ID vs GCP Workload Identity Federation).",
    },
    {
      q: "Why is compute portability generally much easier than database portability?",
      a: "Compute is stateless: containers can be torn down and rescheduled anywhere in seconds without state loss. Databases carry persistent state, ACID transactional guarantees, proprietary indexing/partitioning formats, and cross-cloud replication lag governed by the speed of light and the CAP theorem.",
    },
    {
      q: "Why should cross-cloud workload identities use token federation rather than static API keys?",
      a: "Static keys (e.g., AWS IAM Secret Keys or GCP Service Account JSON files) stored across clouds create long-lived attack vectors with no automated expiry, frequent leakages, and manual rotation burdens. Workload Identity Federation exchanges cryptographically signed, short-lived OIDC tokens without storing any persistent secrets.",
    },
    {
      q: "Why does a private VPN or Direct Interconnect between clouds not automatically establish application trust?",
      a: "Network connectivity is not trust (Zero Trust principle). A private pipe merely transports IP packets. Without application-layer mutual TLS (mTLS), cryptographically signed workload tokens, and least-privilege authorization, an attacker breaching one cloud can freely pivot across the VPN to compromise other clouds.",
    },
    {
      q: "Why can DNS failover take significantly longer than an application-layer proxy failover?",
      a: "DNS records are cached across millions of intermediate recursive resolvers, operating systems, and client browsers based on TTL (Time-To-Live). Even with a 30s TTL, stale caches, negative caching, and existing TCP keepalive connections mean DNS failover takes 60–180 seconds, whereas an L7 Anycast proxy reroutes within milliseconds.",
    },
    {
      q: "Why might an active-passive multi-cloud architecture be architecturally superior to active-active?",
      a: "Active-passive has an unambiguous single source of truth for database writes, eliminating distributed multi-master conflicts, CRDT complexity, split-brain hazards, and catastrophic cross-cloud sync bugs. It costs less and delivers a predictable, auditable disaster recovery model.",
    },
    {
      q: "Why can a shared global DNS provider undermine provider independence?",
      a: "If all user traffic reaches AWS, Azure, and GCP through a single DNS provider (e.g., only Route 53 or only Cloudflare), an outage in that single DNS control plane leaves all 3 clouds completely unreachable. Independence requires dual-delegated Anycast DNS across independent providers.",
    },
    {
      q: "Why is having the same container image running in EKS, AKS, and GKE not enough to prove portability?",
      a: "A container image is only the runtime code. It still depends on external runtime environment variables, cloud-specific DNS resolution, storage volumes (CSI), network firewalls, egress bandwidth quotas, cloud IAM role assumptions, and external message broker contracts.",
    },
    {
      q: "Why can an event-driven replication architecture be easier to scale across clouds than synchronous database replication?",
      a: "Synchronous replication forces the write transaction to wait for cross-cloud WAN round-trips (50–120ms latency) and fails if the network partitions. Event-driven replication (via Kafka or Pub/Sub) processes writes locally at low latency and asynchronously propagates events to build independent local projections.",
    },
    {
      q: "Why is 'zero vendor lock-in' usually an unrealistic objective?",
      a: "Zero lock-in forces you to program to the lowest common denominator, stripping away high-value cloud services (like BigQuery, DynamoDB, or Cosmos DB). The engineering cost of building and maintaining custom cross-cloud abstractions often far exceeds the hypothetical exit cost. Smart architects budget for intentional lock-in.",
    },
    {
      q: "Why is a Disaster Recovery (DR) environment that hasn't been tested not really a DR capability?",
      a: "Untested DR is pure theory. Over months of production evolution, TLS certificates expire, IAM permissions drift, database replicas silently lag or break, container image registries fall out of sync, and autoscaling quotas become insufficient. DR is a validated operational muscle, not an architecture diagram.",
    },
  ];

  // Syllabus Topics (12 Topics covering Week 20)
  const topics = [
    {
      id: 1,
      title: "The Multi-Cloud Mental Model & The 4 Levels of Multi-Cloud",
      week: "Foundations",
      focus: "Failure Domains, Common-Mode Failures & The 4 Maturity Levels",
      badge: "Core Architecture",
      theory:
        "Multi-cloud means an organization intentionally deploys workloads across more than one cloud provider (AWS, Azure, Google Cloud). Multi-cloud is fundamentally distinct from multi-AZ (protects against datacenter/rack failure) and multi-region (protects against single-cloud regional failure). Multi-cloud aims to protect against provider-wide control plane blackouts, commercial lock-in, and catastrophic provider failure. However, more clouds does NOT automatically mean more reliability. If all clouds share a single DNS provider, single identity provider, or single container registry, you have created a multi-cloud common-mode single point of failure.",
      diagram: `THE 4 LEVELS OF MULTI-CLOUD ARCHITECTURES:
=============================================================================
LEVEL 1: CONSUMPTION (Siloed Best-of-Breed)
  AWS (Transactional E-Commerce) | Azure (Entra ID + Office 365) | GCP (BigQuery Analytics)
  * Clouds operate independently with zero deep runtime coupling. Easiest to maintain.

LEVEL 2: PORTABLE WORKLOADS (OCI Containers & Kubernetes)
  Container Image -> [ AWS EKS ] | [ Azure AKS ] | [ GCP GKE ]
  * Same app container runs across clouds using standardized OCI & Kubernetes specs.

LEVEL 3: FEDERATED MULTI-CLOUD (Shared Trust & Interconnect)
  Corporate IdP (Okta) === OIDC Trust ===> AWS IAM / Entra / GCP STS
  AWS VPC 10.10.0.0/16 <=== IPsec VPN / Interconnect ===> Azure VNet 10.20.0.0/16
  * Clouds collaborate via workload identity federation and private cross-cloud networking.

LEVEL 4: ACTIVE-ACTIVE MULTI-CLOUD (Global Simultaneous Traffic)
  Global Users -> [ Anycast Edge / Dual DNS ] -> AWS (33%) + Azure (33%) + GCP (34%)
  * Continuous multi-master state synchronization, distributed conflict resolution.
=============================================================================
CRITICAL PRINCIPLE: Failure-domain diversity only helps when dependencies
inside those domains are also sufficiently independent!`,
      keyTakeaways: [
        "Multi-AZ protects against machine/rack failure; Multi-region protects against regional fiber/power failure; Multi-cloud protects against provider control-plane and commercial collapse.",
        "Beware common-mode failures: A shared DNS provider, single CI/CD pipeline, or central IdP can bring down all 3 clouds simultaneously.",
        "Level 1 (Consumption) and Level 2 (Portable workloads) are standard; Level 4 (Active-active) introduces extreme distributed-systems complexity.",
        "Stop asking 'Which cloud service should I use?' and start asking 'What must remain true when any underlying cloud provider disappears?'",
      ],
      codeExample: `# Architecture Invariant Verification: Dependency Audit
# Step 1: Ensure no single shared credentials across clouds
aws iam get-account-summary
az account show --query "{tenantId:tenantId, name:name}" -o tsv
gcloud auth list

# Step 2: Validate independent container registries (No single ECR dependency!)
docker tag myapp:v2.0 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:v2.0
docker tag myapp:v2.0 mycr.azurecr.io/myapp:v2.0
docker tag myapp:v2.0 gcr.io/my-gcp-project/myapp:v2.0`,
    },
    {
      id: 2,
      title: "Cloud Portability & Abstraction Architecture",
      week: "Engineering",
      focus: "Adapter Pattern, OCI Spec, Lowest Common Denominator vs Best-of-Breed",
      badge: "Portability Layers",
      theory:
        "Portability is the ability to move applications and data between cloud environments at acceptable cost, operational friction, and behavioral disruption. Portability exists on a spectrum across source code, container runtimes, orchestration engines, and persistent data. Beginners often make the mistake of attempting to abstract every single cloud service, resulting in the 'lowest common denominator' trap where high-value native capabilities are discarded. Resilient architects use the Adapter Pattern to decouple domain logic from vendor SDKs while establishing an intentional 'Portability Budget'.",
      diagram: `THE ADAPTER PATTERN FOR CLOUD PORTABILITY:
=============================================================================
                  +--------------------------------+
                  |   CORE APPLICATION DOMAIN     |
                  | (OrderService, PaymentService) |
                  +--------------------------------+
                                  |
                                  v
                  +--------------------------------+
                  |  INTERFACE: ObjectStoragePort  |
                  |  - putObject(key, bytes)       |
                  |  - getObject(key) -> bytes     |
                  |  - deleteObject(key)           |
                  +--------------------------------+
                                  |
          +-----------------------+-----------------------+
          |                       |                       |
          v                       v                       v
+-------------------+   +-------------------+   +-------------------+
|    AWS ADAPTER    |   |   AZURE ADAPTER   |   |    GCP ADAPTER    |
| Translates to     |   | Translates to     |   | Translates to     |
| AWS S3 SDK Client |   | Azure Blob SDK    |   | Google Cloud      |
| (aws-sdk-s3)      |   | (@azure/storage)  |   | Storage (@google) |
+-------------------+   +-------------------+   +-------------------+
          |                       |                       |
          v                       v                       v
      Amazon S3              Azure Blob               Google GCS`,
      keyTakeaways: [
        "Container portability ≠ platform portability. A Docker image runs anywhere, but cloud-specific CSI drivers, Ingress controllers, and IAM roles remain vendor-bound.",
        "The Adapter Pattern insulates core business logic: Domain code talks to provider-neutral interfaces; infrastructure adapters translate calls to specific cloud SDKs.",
        "The Lowest-Common-Denominator dilemma: Abstracting every feature reduces your cloud to a generic 2012 VM datacenter.",
        "Define an intentional Portability Budget: Keep 90% of business logic and container runtimes neutral; deliberately leverage 10% high-value native cloud services.",
      ],
      codeExample: `// Clean Architecture: Provider-Neutral Object Storage Port & S3 Adapter
export interface ObjectStoragePort {
  putObject(bucket: string, key: string, data: Buffer): Promise<void>;
  getObject(bucket: string, key: string): Promise<Buffer>;
}

// AWS S3 Implementation Adapter
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export class AwsS3StorageAdapter implements ObjectStoragePort {
  constructor(private s3: S3Client) {}
  async putObject(bucket: string, key: string, data: Buffer): Promise<void> {
    await this.s3.send(new PutObjectCommand({ Bucket: bucket, Key: key, Body: data }));
  }
  // Application switches from AWS S3 to Azure Blob or GCS without changing business logic!
}`,
    },
    {
      id: 3,
      title: "Multi-Cloud Identity & Workload Federation (Zero Static Keys)",
      week: "Security",
      focus: "OIDC Token Exchange, Workload Identity Federation & AWS Roles Anywhere",
      badge: "Zero-Trust Identity",
      theory:
        "Storing static access keys (e.g., AWS IAM access keys or GCP service account JSON files) across external cloud environments is a critical security vulnerability. Multi-cloud identity must be built on Workload Identity Federation using cryptographically signed, short-lived OpenID Connect (OIDC) or X.509 tokens. Human authentication is centralized in an enterprise IdP (e.g., Okta or Entra ID), while authorization remains granular and cloud-local. A workload running in AWS EKS authenticates to Google Cloud via STS token exchange without any static secret.",
      diagram: `CROSS-CLOUD WORKLOAD IDENTITY FEDERATION TOKEN EXCHANGE:
=============================================================================
[ AWS EKS Pod ]
      |
      | 1. Request signed OIDC JSON Web Token (JWT) from AWS EKS OIDC Provider
      v
[ AWS IAM OIDC Issuer ]  <-- Signs JWT with AWS private key
      |
      | 2. Returns signed JWT to Pod
      v
[ AWS EKS Pod ]
      |
      | 3. Send AWS JWT to Google Cloud Security Token Service (STS)
      v
[ Google Cloud STS ]
      |
      | 4. Validates AWS JWT against AWS OIDC discovery endpoint (.well-known)
      | 5. Verifies Audience & Subject claim (e.g., repo or EKS service account)
      v
[ Google Cloud IAM ]
      |
      | 6. Mints short-lived (1-hour) Google Cloud OAuth Access Token
      v
[ AWS EKS Pod ]
      |
      | 7. Reads/Writes Google Cloud Storage or BigQuery directly!
      v
[ GCP Storage / BigQuery ]
=============================================================================
ZERO STATIC KEYS STORED! No JSON keys in AWS secrets, zero secret rotation leaks!`,
      keyTakeaways: [
        "Zero Static Keys: Never store permanent cloud credentials inside an external cloud's secret manager.",
        "Centralized Authentication vs Cloud-Local Authorization: Alice logs in once via Okta; AWS grants Developer role, Azure grants Contributor, GCP grants BigQuery Viewer.",
        "Google Cloud Workload Identity Federation natively exchanges AWS and Azure OIDC tokens for temporary GCP IAM tokens.",
        "AWS IAM Roles Anywhere uses X.509 certificates to issue temporary AWS STS credentials to workloads running in Azure or GCP.",
      ],
      codeExample: `# Google Cloud: Configure Workload Identity Pool for AWS EKS Workload
gcloud iam workload-identity-pools create "aws-pool" \\
  --location="global" \\
  --display-name="AWS EKS Production Pool"

# Add AWS OIDC Provider to the Pool
gcloud iam workload-identity-pools providers create-aws "aws-provider" \\
  --workload-identity-pool="aws-pool" \\
  --location="global" \\
  --account-id="123456789012"

# Bind Service Account to AWS EKS ARN (No static JSON keys!)
gcloud iam service-accounts add-iam-policy-binding analytics-loader@my-project.iam.gserviceaccount.com \\
  --role="roles/iam.workloadIdentityUser" \\
  --member="principalSet://iam.googleapis.com/projects/11223344/locations/global/workloadIdentityPools/aws-pool/attribute.aws_role/arn:aws:iam::123456789012:role/eks-analytics-worker"`,
    },
    {
      id: 4,
      title: "Cross-Cloud Networking & Interconnect Topologies",
      week: "Networking",
      focus: "Non-Overlapping CIDRs, Full Mesh vs Hub-and-Spoke, BGP & Hybrid NEGs",
      badge: "Hybrid SDN",
      theory:
        "Cross-cloud networking requires explicit packet routing across distinct cloud software-defined networks. The foundational invariant is Non-Overlapping CIDR IP Spaces: If AWS and Azure both use 10.0.0.0/16, packets cannot be routed between them without complex, fragile NAT hacks. For 3 clouds, a full mesh topology requires n(n-1)/2 = 3 links, but scales poorly to 10 clouds (45 links). Enterprise architectures utilize a centralized Hub-and-Spoke transport model or cloud exchange providers (e.g., Equinix Fabric, Megaport) with dynamic BGP routing.",
      diagram: `CROSS-CLOUD NON-OVERLAPPING CIDR & HUB TOPOLOGY:
=============================================================================
               +--------------------------------------+
               |     CENTRAL TRANSPORT HUB / BGP      |
               | (Megaport / Equinix Cloud Exchange)  |
               +--------------------------------------+
                     /           |           \\
       IPSec VPN /  /            |            \\  IPSec VPN /
       DirectConn  /             | Interconnect\\ ExpressRoute
                  /              |              \\
                 v               v               v
     +-----------------+ +-----------------+ +-----------------+
     |     AWS VPC     | |     GCP VPC     | |   AZURE VNET    |
     |  10.10.0.0/16   | |  10.30.0.0/16   | |  10.20.0.0/16   |
     | (us-east-1)     | | (us-central1)   | | (eastus)        |
     +-----------------+ +-----------------+ +-----------------+

GOLDEN NETWORKING RULES:
1. NON-OVERLAPPING CIDRs: AWS=10.10, Azure=10.20, GCP=10.30, OnPrem=10.40
2. NEVER trust private connectivity: Always enforce mutual TLS & workload IAM
3. Google Cloud Global External App Load Balancer can route to AWS/Azure backends
   via Hybrid Connectivity Network Endpoint Groups (NEGs)!`,
      keyTakeaways: [
        "Never use overlapping CIDRs. Plan enterprise IP allocations early; resolving conflicting subnets post-merger is agonizing.",
        "Full mesh networks scale at O(n²); hub-and-spoke transport architectures provide centralized routing policy, inspection, and route isolation.",
        "Dynamic routing with BGP (Border Gateway Protocol) allows automatic path failover if a primary cloud direct interconnect drops.",
        "Network connectivity does NOT equal trust: Zero-trust demands TLS encryption and application authentication across private cross-cloud links.",
      ],
      codeExample: `# Dynamic BGP Route Advertisement across AWS and Azure via Terraform/OpenTofu
resource "aws_vpn_connection" "cross_cloud_azure" {
  vpn_gateway_id      = aws_vpn_gateway.hub.id
  customer_gateway_id = aws_customer_gateway.azure_gw.id
  type                = "ipsec.1"
  static_routes_only  = false # Enable BGP Dynamic Routing

  # Non-overlapping BGP Autonomous System Numbers (ASN)
  # AWS ASN: 64512, Azure ASN: 65515, GCP ASN: 16550
}

# Subnet CIDR Architecture Map:
# AWS Production:   10.10.0.0/16
# Azure Production: 10.20.0.0/16
# GCP Production:   10.30.0.0/16
# Corporate DC:     10.40.0.0/16`,
    },
    {
      id: 5,
      title: "Global Traffic Steering: DNS vs Global Anycast Proxy",
      week: "Edge Routing",
      focus: "DNS TTL Caching Dilemma, Anycast L7 Proxies & Two-Layer Routing",
      badge: "Traffic Layer",
      theory:
        "Directing user traffic across multiple clouds can be executed via DNS-based steering (AWS Route 53, Azure Traffic Manager) or Layer-7 Global Anycast Proxies (Google Cloud External App LB, Cloudflare). DNS steering is inexpensive and cloud-agnostic, but DNS failover is never instantaneous: Recursive resolvers and client browsers cache DNS records according to TTL, meaning failover takes 60–180 seconds. A global proxy enables sub-second routing decisions, instant health failovers, and WAF inspection, but introduces a critical centralized dependency.",
      diagram: `DNS STEERING vs GLOBAL ANYCAST PROXY:
=============================================================================
OPTION 1: DNS-BASED STEERING (Route 53 / Azure Traffic Manager)
  User Browser -> Local DNS Resolver (Caches answer for 60s TTL)
                      |
                      v Resolves IP of healthy cloud
       +--------------+--------------+
       |                             |
       v                             v
  AWS Endpoint (100% active)     Azure Endpoint (Standby)
  * AWS dies! DNS health check flips record to Azure...
  * BUT users remain stuck for 60-180s due to cached DNS resolvers! (Slow RTO)

OPTION 2: GLOBAL ANYCAST PROXY / L7 EDGE (Cloudflare / GCP Hybrid LB)
  User Browser -> Single Global Anycast IP -> Edge PoP (Sub-second health check)
                                                   |
                             +---------------------+---------------------+
                             |                                           |
                             v                                           v
                       AWS EKS Ingress                             Azure AKS Ingress
  * AWS dies! Edge PoP instantly redirects HTTP packets to Azure in < 2 seconds!
  * TRADE-OFF: The Anycast Proxy itself is a multi-cloud single point of failure.`,
      keyTakeaways: [
        "DNS failover is NOT instantaneous. DNS TTL caching, negative caching, and existing TCP keepalive connections dictate your real-world RTO.",
        "For aggressive RTOs (< 30 seconds), an L7 Anycast Edge Proxy is required for sub-second traffic diversion.",
        "Two-Layer Global Architecture: Use Global Anycast Edge for granular, latency-aware L7 routing; back it with Dual-Delegated DNS for coarse provider survival.",
        "Dual-Delegated DNS: Distribute NS parent records across two independent DNS providers to survive a catastrophic DNS provider blackout.",
      ],
      codeExample: `# Route 53 Health Check with Failover Policy to External Cloud
resource "aws_route53_health_check" "primary_aws" {
  fqdn              = "aws-ingress.example.com"
  port              = 443
  type              = "HTTPS"
  resource_path     = "/healthz"
  failure_threshold = 3
  request_interval  = 10 # 10-second fast probing
}

resource "aws_route53_record" "primary" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "api.example.com"
  type    = "A"
  set_identifier = "aws-primary"
  failover_routing_policy {
    type = "PRIMARY"
  }
  health_check_id = aws_route53_health_check.primary_aws.id
  ttl             = 30 # Aggressive 30-second TTL
  records         = ["52.1.2.3"] # AWS Ingress Public IP
}`,
    },
    {
      id: 6,
      title: "Active-Passive vs Active-Active Architectures",
      week: "High Availability",
      focus: "CAP Theorem, Stateless Tokens, Split-Brain Hazards & Expand-Contract Deployments",
      badge: "Resilience Strategy",
      theory:
        "Choosing between Active-Passive and Active-Active is the most consequential architecture decision in multi-cloud engineering. In Active-Passive, primary traffic serves from AWS while Azure operates as a warm or hot standby with asynchronous data replication. In Active-Active, AWS, Azure, and GCP simultaneously process user transactions. While Active-Active maximizes capacity utilization, it encounters the fundamental limits of the CAP theorem during cross-cloud network partitions: Concurrent writes on partitioned clouds inevitably cause split-brain conflicts and distributed transaction deadlocks.",
      diagram: `ACTIVE-PASSIVE vs ACTIVE-ACTIVE COMPARISON:
=============================================================================
ACTIVE-PASSIVE (Recommended Production Architecture):
  Users -> [ Global DNS / Health Steering ]
                  | (100% Traffic)
                  v
       PRIMARY CLOUD (AWS)              STANDBY CLOUD (Azure)
       [ EKS Microservices ]             [ AKS Warm Min-Scale ]
                |                                   |
                v                                   v
       [ Primary SQL Master ] --- Async Rep ---> [ Standby SQL Replica ]
  * Clear single source of truth. Zero split-brain risk. Predictable RPO/RTO.

ACTIVE-ACTIVE TRI-CLOUD (Extreme Distributed Systems Complexity):
  Users -> [ Global Anycast Traffic Splitter: 33% / 33% / 34% ]
              /              |              \\
             v               v               v
        [ AWS EKS ]     [ Azure AKS ]    [ GCP GKE ]
             |               |               |
             v               v               v
        [ AWS DB ] <=== Bi-Directional ===> [ Azure DB ] <=== Sync ===> [ GCP DB ]
  * NETWORK PARTITION OCCURS! AWS cannot reach Azure!
  * CAP Theorem: If both accept writes, data conflicts explode (AP).
  * If writes are refused to preserve consistency (CP), availability drops to 0%!`,
      keyTakeaways: [
        "Active-Passive is almost always superior in real-world ROI: Clear consistency, simpler failure modes, and lower data egress costs.",
        "Active-Active sounds ideal in slide decks, but turns every database write into a complex distributed consensus problem.",
        "Stateless User Sessions: Never store HTTP sessions in VM or pod local memory. Use stateless signed JWTs or distributed Redis clustering.",
        "Expand-and-Contract Deployment: Deploy database schema additions first (expand), verify backward compatibility across all clouds, deploy code, then deprecate old fields (contract).",
      ],
      codeExample: `# Kubernetes: Expand-and-Contract Multi-Cloud Release Manifest
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
  labels:
    app: order-service
    release-ring: canary
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: order-api
        image: mycr.azurecr.io/order-api:v2.4.1 # Standardized OCI Container
        env:
        - name: DATABASE_SCHEMA_VERSION
          value: "v2-backward-compatible" # Runs safely against AWS & Azure DB schemas`,
    },
    {
      id: 7,
      title: "Multi-Cloud Data Architectures & Consistency Patterns",
      week: "Data Engineering",
      focus: "Single Source of Truth, Async Replication, Event-Driven Log Projections & Data Portability",
      badge: "Distributed Data",
      theory:
        "Compute portability is an engineering problem solved by containers and Kubernetes; multi-cloud data consistency is a computer science problem bounded by the speed of light. Moving data between clouds incurs significant latency (50–120ms round trip) and metered egress costs. Architects utilize 4 strategies: Single Source of Truth (Primary write DB in AWS, read replicas in Azure), Asynchronous Block/Log Replication, Multi-Master (CRDTs), or Event-Driven Log Replication (Kafka / Pub/Sub) where transactions commit locally and asynchronously update read projections across clouds.",
      diagram: `4 DATA ARCHITECTURE STRATEGIES ACROSS CLOUDS:
=============================================================================
STRATEGY A: SINGLE SOURCE OF TRUTH (Primary + Read/DR Replicas)
  AWS (Write Master) --- Async Replication ---> Azure (Read/DR Replica)
  * Simple, strong consistency for writes. Cross-cloud latency for DR sync only.

STRATEGY B: EVENT-DRIVEN DATA REPLICATION (Decoupled Projections)
  AWS App -> [ Local AWS DB ]
                 |
                 v (Local Outbox Table / CDC)
          [ Apache Kafka / Pub/Sub Event Backbone ]
                 |
          +------+------+
          |             |
          v             v
     [ Azure App ] [ GCP App ]
          |             |
          v             v
     [ Azure DB ]  [ BigQuery Analytics ]
  * Highly resilient: AWS commits transactions in 2ms.
  * Azure and GCP consume events asynchronously to build local read views.

DATA PORTABILITY HIERARCHY:
  EASIEST:  Parquet, CSV, JSON, Object Storage files
  MEDIUM:   PostgreSQL / MySQL open relational schemas
  HARD:     Cassandra / MongoDB distributed NoSQL
  VERY HARD: Proprietary DB engines (DynamoDB, Cosmos DB, Bigtable)`,
      keyTakeaways: [
        "Compute is ephemeral; data is state. Losing account balances across a cloud failover is fatal to the business.",
        "Event-Driven Replication (CDC / Outbox pattern) is far more scalable than attempting distributed two-phase commit (2PC) transactions across clouds.",
        "Data Portability is more than file formats: Schema migrations, query semantics, locking models, and identity permissions dictate real portability.",
        "Avoid synchronous cross-cloud queries in user request lifecycles: A single SQL query with 4 joins across clouds will take 400ms and bankrupt you on egress.",
      ],
      codeExample: `# Debezium / Kafka Connect: Change Data Capture (CDC) from AWS PostgreSQL
# Asynchronously streaming table changes to GCP Pub/Sub for analytics
{
  "name": "aws-orders-cdc-connector",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "tasks.max": "1",
    "database.hostname": "aurora-pg.aws.internal",
    "database.port": "5432",
    "database.user": "cdc_user",
    "database.dbname": "orders_prod",
    "plugin.name": "pgoutput",
    "table.include.list": "public.orders,public.payments",
    "topic.prefix": "aws_events"
    // Events replicated cleanly to Azure & GCP without blocking AWS write transactions!
  }
}`,
    },
    {
      id: 8,
      title: "Egress Economics & The Bandwidth Triangle",
      week: "FinOps",
      focus: "Metered Egress Fees, The Bandwidth Triangle & Batch Compression",
      badge: "Cloud Economics",
      theory:
        "Public cloud pricing models share an asymmetric economic reality: Ingress (uploading data into the cloud) is free, while Egress (transferring data out of the cloud to the internet or another cloud) is metered at approximately $0.08 to $0.09 per GB. The Bandwidth Triangle demonstrates that uncoordinated synchronous cross-cloud API calls compound network latency, egress billing, and failure coupling. Designing efficient multi-cloud systems demands batch compression (Snappy / Parquet), local transactional loops, and event-based delta transfers.",
      diagram: `THE MULTI-CLOUD BANDWIDTH TRIANGLE:
=============================================================================
POOR ARCHITECTURE: SYNCHRONOUS CROSS-CLOUD CHATTER
  User Request
       |
       v
  [ AWS Web API ] --- (1) Synchronous HTTP (80ms + Egress $) ---> [ Azure Auth Service ]
       |                                                                   |
       | <----------------- (2) Response (Egress $) -----------------------+
       |
       +------------------ (3) Cross-Cloud Query (90ms + Egress $) ----> [ GCP BigQuery ]
  TOTAL: 340ms Latency + 3x Egress Fees + Cascading Failure Vulnerability!

OPTIMAL ARCHITECTURE: LOCAL TRANSACTION + ASYNC DELTA SYNC
  User Request
       |
       v
  [ AWS Web API ] ---> [ AWS Local DB ] (Fast 2ms commit)
       |
       v (Compressed Delta Stream / Parquet Export)
  [ Batch Transfer: 1x Egress Cost, 60% Compressed Bandwidth ]
       |
       v
  [ GCP Analytics Store / BigQuery ]
  TOTAL: 20ms Latency + Minimal Egress Billing + Zero Service Coupling!`,
      keyTakeaways: [
        "Data Ingress is free; Data Egress is expensive (~$80 to $90 per TB). Moving petabytes between clouds daily will destroy your cloud budget.",
        "Never make synchronous cross-cloud API calls inside user transaction loops.",
        "Use columnar compressed formats (Apache Parquet with Snappy or ZSTD) for cross-cloud transfers to slash bandwidth volume by 60–80%.",
        "Take advantage of specialized egress discount programs (e.g., Azure Routing Preference, Cloudflare Bandwidth Alliance, or direct private interconnects).",
      ],
      codeExample: `# Python: Export AWS RDS data to Parquet with Snappy compression for GCP transfer
import pandas as pd
import pyarrow.parquet as pq

# Reading local database records
df = pd.read_sql("SELECT * FROM transactions WHERE created_at >= NOW() - INTERVAL '1 HOUR'", db_conn)

# Converting to compressed Parquet: 80% bandwidth and egress cost reduction!
df.to_parquet(
    "s3://my-export-bucket/trans_batch.parquet",
    compression="snappy",
    engine="pyarrow"
)

# Automated Google Cloud Storage Transfer Service transfers the compressed file efficiently!`,
    },
    {
      id: 9,
      title: "The Vendor Lock-In Spectrum & Portability Budget",
      week: "Strategy",
      focus: "6 Types of Lock-In, The Lock-In Paradox & Managing Switching Costs",
      badge: "Strategic FinOps",
      theory:
        "Vendor lock-in is not merely 'using a proprietary managed service.' The true architectural question is: 'What is the real exit cost of leaving?' Lock-in exists on a spectrum across API, Data, Architecture, Operational, Economic, and Identity dimensions. The Lock-in Paradox reveals that modern cloud systems have become far less hardware-dependent, but significantly more cloud-service dependent. Rather than pursuing zero lock-in (which paralyzes innovation), architects allocate a Portability Budget: Deliberately accepting lock-in where service velocity and differentiation outweigh future exit costs.",
      diagram: `THE 6 TYPES OF VENDOR LOCK-IN:
=============================================================================
1. API LOCK-IN:
   Your code imports 50 provider-specific SDK clients (e.g., Amazon SQS, Step Functions).

2. DATA LOCK-IN:
   Your data resides in proprietary formats (e.g., DynamoDB custom JSON, Spanner TrueTime).

3. ARCHITECTURE LOCK-IN:
   Your entire topology relies on proprietary events (e.g., EventBridge partner buses).

4. OPERATIONAL LOCK-IN:
   Your SRE team only understands AWS CloudWatch & CloudFormation; blind in Azure/GCP.

5. ECONOMIC LOCK-IN:
   3-Year Savings Plans or Committed Use Discounts (CUDs) penalize early workload migration.

6. IDENTITY & SECURITY LOCK-IN:
   All RBAC, IAM policies, and secrets are tightly coupled to a single vendor's security plane.
=============================================================================
THE ARCHITECTURAL RULE:
Never pursue 'Zero Lock-in'. Pursue 'Intentional Lock-in' where the productivity
and performance advantage dramatically exceeds the quantified exit cost.`,
      keyTakeaways: [
        "Lock-in is a financial and strategic calculation: Switching cost vs ongoing competitive advantage.",
        "Using managed PostgreSQL on AWS RDS carries very low lock-in (standard SQL tooling); using DynamoDB with proprietary indexes carries high lock-in.",
        "The Portability Budget: Intentionally restrict proprietary cloud services to isolated, high-leverage domains (e.g., analytics or machine learning).",
        "Maintain an active Lock-in Register documenting every external dependency, estimated exit duration, and migration path.",
      ],
      codeExample: `# Lock-in Register: Production Multi-Cloud Architecture Review
# Component          Cloud Provider    Lock-in Level    Exit Strategy
# -----------------  ----------------  ---------------  ------------------------------------
# Container Runtime  All (EKS/AKS/GKE) Low              Standard OCI Images + Helm Charts
# Relational DB      AWS RDS Aurora    Medium           Logical pg_dump / CDC Replication
# Analytics Engine   Google BigQuery   High             Standard SQL queries / Parquet export
# IAM Security       Central Okta      Medium           OIDC Workload Identity Federation
# Edge CDN / WAF     Cloudflare        Low/Medium       Anycast DNS switch to AWS CloudFront`,
    },
    {
      id: 10,
      title: "Cloud-Neutral Observability & Infrastructure as Code",
      week: "Observability",
      focus: "OpenTelemetry Standard, Distributed Trace ID Propagation & OpenTofu",
      badge: "Unified Telemetry",
      theory:
        "Operating multi-cloud workloads without unified observability turns incident response into an operational nightmare. Operators cannot waste critical minutes toggling between AWS CloudWatch, Azure Monitor, and Google Cloud Monitoring. OpenTelemetry (CNCF graduated) provides a vendor-neutral standard for collecting metrics, logs, and distributed traces. An OpenTelemetry Collector deployed in each cluster ingests telemetry and forwards it with a consistent trace_id that correlates user transactions as they cross from AWS to Azure and Google Cloud.",
      diagram: `OPENTELEMETRY CROSS-CLOUD DISTRIBUTED TRACE PROPAGATION:
=============================================================================
Global User Request -> [ Global Edge ] (Generates trace_id: 4bf92f3577b34da6a3ce929d0e0e4736)
                              |
                              v
     +--------------------------------------------------+
     | AWS EKS CLUSTER                                  |
     | [ Checkout Service ]                             |
     | Spans: trace_id=4bf92f..., span_id=001           |
     | Local OTel Agent -> Local OTel Collector         |
     +--------------------------------------------------+
                              |
                              v (Cross-cloud HTTP / gRPC header: traceparent)
     +--------------------------------------------------+
     | AZURE AKS CLUSTER                                |
     | [ Payment Validation Service ]                   |
     | Spans: trace_id=4bf92f..., span_id=002           |
     | Local OTel Agent -> Local OTel Collector         |
     +--------------------------------------------------+
                              |
                              v (Asynchronous event with trace_id metadata)
     +--------------------------------------------------+
     | GCP GKE / BIGQUERY                               |
     | [ Fraud Detection Engine ]                       |
     | Spans: trace_id=4bf92f..., span_id=003           |
     +--------------------------------------------------+
                              |
                              v
     [ UNIFIED SRE DASHBOARD / GRAFANA / HONEYCOMB / DATADOG ]
     * Engineers view ONE end-to-end flamegraph spanning AWS, Azure, and GCP!`,
      keyTakeaways: [
        "OpenTelemetry is the CNCF industry standard: Standardize instrumentation inside application code, not vendor-proprietary monitoring agents.",
        "Trace ID Propagation: The W3C TraceContext standard propagates traceparent headers across HTTP and message queues between clouds.",
        "Deploy OpenTelemetry Collectors locally in each cloud to buffer, filter, and scrub telemetry before forwarding to the central observability backend.",
        "Infrastructure as Code: Use OpenTofu / Terraform with modular provider abstractions rather than a single fragile, monolithic file.",
      ],
      codeExample: `// Node.js: OpenTelemetry W3C Trace Context Propagation across Clouds
import { trace, context, propagation } from "@opentelemetry/api";
import axios from "axios";

export async function callAzurePaymentService(paymentPayload: any) {
  const currentSpan = trace.getActiveSpan();
  const carrier: Record<string, string> = {};

  // Inject current distributed trace context into outbound HTTP headers
  propagation.inject(context.active(), carrier);

  // Request sent from AWS EKS to Azure AKS carrying 'traceparent' header
  const response = await axios.post("https://payment.azure.example.com/charge", paymentPayload, {
    headers: carrier, // trace_id preserved across clouds!
  });

  return response.data;
}`,
    },
    {
      id: 11,
      title: "Multi-Cloud Disaster Recovery (DR) Engineering",
      week: "Disaster Recovery",
      focus: "The 16 Untested DR Traps, Multi-Cloud ECR Mirroring & Failover Runbooks",
      badge: "GameDay Resiliency",
      theory:
        "A second cloud is not a disaster recovery environment until you have proven you can run the actual business there. The most dangerous DR mistake is maintaining a theoretical architecture diagram that goes untested for two years: In real outages, systems fail because of expired TLS certificates, stale IAM roles, out-of-sync container registries, broken database replicas, or exhausted autoscaling quotas. Multi-cloud DR requires automated failover runbooks and continuous chaos GameDay drills testing all 16 critical dependencies.",
      diagram: `THE 16 DEPENDENCIES YOU MUST AUDIT & TEST IN MULTI-CLOUD DR:
=============================================================================
1.  DNS Control Plane (Can you flip records if the DNS console is down?)
2.  TLS Certificates (Are wildcard certs valid and mirrored in the standby cloud?)
3.  Human Identity (Can SREs log in via emergency break-glass if Okta is dead?)
4.  Workload Identity (Are OIDC trust relationships active in the standby cloud?)
5.  Network Routes & Firewalls (Are security groups and route tables in sync?)
6.  Container Registries (Are Docker images mirrored in Azure ACR and GCP Artifact Reg?)
7.  Secrets & Keys (Are KMS keys and API tokens synchronized to the standby?)
8.  Database Replication (Is replication lag continuously monitored; RPO verified?)
9.  Object Storage Sync (Are critical PDF invoices, photos, assets replicated?)
10. Message Queues & DLQs (Are consumer offsets and dead-letter queues configured?)
11. App Configuration & Env Vars (Are Feature Flags and config maps identical?)
12. Compute Capacity Quotas (Does Azure/GCP have quota to spin up 500 instances?)
13. Auto-Scaling Group Triggers (Do CPU and request thresholds match primary?)
14. Observability Ingestion (Do logs and alerts fire correctly in the standby cloud?)
15. CI/CD Deployment Pipelines (Can you deploy a zero-day patch to the standby cloud?)
16. Third-Party Webhooks (Are Stripe/PayPal payment callbacks multi-cloud aware?)`,
      keyTakeaways: [
        "Untested DR is pure fantasy: Systems fail on the subtle dependencies (expired certs, stale IAM, missing container images, quota blocks).",
        "The Container Registry trap: If AWS ECR goes down, Azure AKS cannot pull images to scale. Mirror production images to multiple registries.",
        "Break-Glass Access: Maintain emergency, hardware-MFA-protected administrator accounts in each cloud completely isolated from the corporate IdP.",
        "Automate failover drills: Conduct unannounced quarterly GameDay chaos drills cutting off primary cloud connectivity.",
      ],
      codeExample: `# Multi-Cloud Disaster Recovery Failover Runbook (Executed during AWS Outage)
#!/usr/bin/env bash
set -euo pipefail

echo "==> STEP 1: VERIFYING AWS OUTAGE TELEMETRY..."
curl -s --connect-timeout 3 https://aws-ingress.example.com/healthz || echo "AWS Unhealthy!"

echo "==> STEP 2: CHECKING AZURE DATABASE REPLICATION LAG..."
# Ensure LSN replication lag is within RPO threshold (< 60 seconds)
az postgres flexible-server replica list --name pg-azure-standby --resource-group rg-dr

echo "==> STEP 3: PROMOTING AZURE STANDBY DATABASE TO WRITE MASTER..."
az postgres flexible-server replica stop-replication --name pg-azure-standby --resource-group rg-dr

echo "==> STEP 4: SCALING AZURE AKS NODE POOL & WORKLOAD FLEET..."
az aks scale --name aks-prod-dr --resource-group rg-dr --node-count 40

echo "==> STEP 5: FLIPPING GLOBAL TRAFFIC LAYER (DNS / ANYCAST EDGE)..."
# Route 53 / Cloudflare API update to divert 100% of global traffic to Azure AKS
echo "Failover executed successfully! System operating on Azure DR."`,
    },
    {
      id: 12,
      title: "Capstone Project: Global Multi-Cloud Platform & Tradeoff Triangle",
      week: "Capstone Blueprint",
      focus: "50M Users, 500k Peak RPS, The Tradeoff Triangle & Production Spec",
      badge: "Capstone Architecture",
      theory:
        "The culmination of this module is the Global Multi-Cloud Platform Blueprint. Designed for 50 million registered users, 500k peak requests/second, and a 99.99% availability SLA (RPO ≤ 1 min, RTO ≤ 15 min). It synthesizes every lesson from Modules 1 through 9 into a defensible architecture: Primary transactional compute on AWS EKS with Aurora PostgreSQL, Warm standby compute on Azure AKS with flexible replication, and specialized analytical data warehousing on Google Cloud BigQuery.",
      diagram: `GLOBAL MULTI-CLOUD PLATFORM CAPSTONE ARCHITECTURE (50M USERS, 500K RPS):
=============================================================================
                      [ 50 MILLION GLOBAL USERS ]
                                   |
                                   v
             [ DUAL ANYCAST DNS (Route 53 + Cloudflare) ]
                                   |
             [ GLOBAL TRAFFIC LAYER / CLOUD ARMOR / WAF ]
                                   |
          +------------------------+------------------------+
          | (100% Primary Traffic)                          | (Standby / Health Probes)
          v                                                 v
+-------------------------------+         +-------------------------------+
| AWS REGION (us-east-1)        |         | AZURE REGION (eastus)         |
| CIDR: 10.10.0.0/16            |         | CIDR: 10.20.0.0/16            |
| - AWS EKS (400 Pods)          |         | - Azure AKS (Warm 50 Pods)    |
| - Aurora PostgreSQL (Primary) |         | - PostgreSQL Flexible (Replica)|
| - Local AWS ECR Registry      |         | - Local Azure ACR Registry    |
+-------------------------------+         +-------------------------------+
          | (Async CDC Events)                      | (Failover Standby)
          +------------------------+----------------+
                                   | (Encrypted BGP Interconnect: 10.30.0.0/16)
                                   v
                      +-------------------------------+
                      | GOOGLE CLOUD (us-central1)    |
                      | - Google BigQuery (Analytics) |
                      | - Cloud Pub/Sub Event Ingest  |
                      | - Workload Identity Fed       |
                      +-------------------------------+
=============================================================================
THE TRADEOFF TRIANGLE: Portability <---> Resilience <---> Optimization
1. Portability: Standardized OCI containers + OpenTelemetry + OpenTofu
2. Resilience: Independent DNS, mirrored registries, break-glass auth, warm DR
3. Optimization: AWS Aurora for transactions + BigQuery for analytics`,
      keyTakeaways: [
        "The Tradeoff Triangle: You cannot maximize Portability, Resilience, and Optimization simultaneously. Choose your point in trade-space deliberately.",
        "5 Invariant Questions: Can I recreate it elsewhere? Can another cloud authenticate it? Can data move? Can traffic move? Can human operators run it?",
        "Production Capstone SLA: 99.99% availability (~52 minutes downtime/year), RPO ≤ 1 minute, RTO ≤ 15 minutes.",
        "True multi-cloud mastery: Moving beyond cloud brand names to the foundational realities of state, networking, failure domains, and economics.",
      ],
      codeExample: `# OpenTofu Multi-Cloud Module Structure: Production Clean Layout
# root/
# ├── modules/
# │   ├── networking/
# │   │   ├── aws/       # VPC 10.10.0.0/16, Subnets, NAT Gateways
# │   │   ├── azure/     # VNet 10.20.0.0/16, Network Security Groups
# │   │   └── gcp/       # Global VPC 10.30.0.0/16, Cloud NAT
# │   ├── compute/
# │   │   ├── eks/       # AWS EKS cluster + IRSA bindings
# │   │   └── aks/       # Azure AKS cluster + Entra Workload ID
# │   ├── identity/      # Workload Identity Federation OIDC bindings
# │   └── observability/ # OpenTelemetry Collector daemonsets
# └── environments/
#     └── production/    # Composes AWS Primary + Azure Warm DR + GCP Analytics`,
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
          currentModuleId="multicloud"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Multi-Cloud AI"
        />

        {/* HERO HEADER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <Globe size={13} />
              <span>Multi-Cloud Engineering</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Multi-Cloud Architecture
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              Stop thinking in terms of <span className="text-orange-400 font-semibold">"Which cloud service should I use?"</span> and start thinking in terms of{" "}
              <span className="text-white font-semibold">"What must remain true even when the underlying cloud provider changes or disappears?"</span> Designing systems that span AWS, Azure, and Google Cloud with Workload Identity Federation, Non-Overlapping CIDRs, Global Traffic Steering, and Disaster Recovery.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Level 1 to 4 Multi-Cloud
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> OIDC Workload Federation
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> OpenTelemetry Unified SRE
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Tested Disaster Recovery
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
                  <h3 className="text-sm font-bold text-[#18181b]">Nova Multi-Cloud Enterprise Architect</h3>
                  <p className="text-xs text-stone-500">Trained on NIST SP 500-332, CNCF OpenTelemetry, AWS, Azure & Google Cloud docs</p>
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
              <LearningRo module="multicloud" />
            </div>
          </div>
        )}

        {/* MAIN LAYOUT: SYLLABUS TOPICS (LEFT) + DEEP CONTENT (RIGHT) */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          {/* TOPIC SELECTOR (COL-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                Multi-Cloud Syllabus • 12 Topics
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
                Module 10 synthesizes Foundations, VPCs, Compute, Storage, Databases, Architecture, AWS, Azure, and GCP into high-resilience multi-cloud systems.
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
                  Theoretical Foundations & Architectural Rationale
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60">
                  {currentTopic.theory}
                </p>
              </div>

              {/* ARCHITECTURE DIAGRAM */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Architectural Topologies & System Invariants
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">ASCII Architecture Blueprint</span>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-stone-200 shadow-inner">
                  {currentTopic.diagram}
                </pre>
              </div>

              {/* KEY TAKEAWAYS */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Production Invariants & Core Takeaways
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
                    Production Implementation Blueprint
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
        {/* INTERACTIVE LAB 1: MULTI-CLOUD DEPENDENCY & COMMON-MODE FAILURE ANALYZER    */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 1
            </span>
            <span className="font-mono text-xs text-stone-400">Architecture Tradeoff Engine</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Multi-Cloud Dependency & Common-Mode Failure Analyzer
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Configure your multi-cloud architecture topology and dependency graph. Analyze how shared components (central IdPs, single DNS providers, and container registries) introduce common-mode single points of failure that undermine multi-cloud resilience.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONTROLS (COL-5) */}
            <div className="lg:col-span-5 space-y-5 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  1. Multi-Cloud Topology Pattern
                </label>
                <div className="space-y-2">
                  {[
                    { id: "active-passive", label: "Active-Passive (Primary AWS, Warm Azure DR, GCP Analytics)" },
                    { id: "active-active", label: "Active-Active Tri-Cloud (AWS + Azure + GCP all serving)" },
                    { id: "best-of-breed", label: "Best-of-Breed / Functional Multi-Cloud" },
                    { id: "naive-shared", label: "Naive Multi-Cloud (Shared single DNS, single IdP, single ECR)" },
                  ].map((pat) => (
                    <button
                      key={pat.id}
                      onClick={() => setSelectedArchPattern(pat.id)}
                      className={`w-full text-left rounded-xl p-3 text-xs font-bold transition flex items-center justify-between ${
                        selectedArchPattern === pat.id
                          ? "bg-stone-900 text-white shadow-sm"
                          : "bg-white text-stone-700 border border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      <span>{pat.label}</span>
                      {selectedArchPattern === pat.id && <Check size={14} className="text-orange-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  2. Dependency Graph Configuration
                </label>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <span>Centralized Corporate IdP (Single Okta/Entra)</span>
                    <input
                      type="checkbox"
                      checked={sharedIdp}
                      onChange={(e) => setSharedIdp(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <span>Single Global DNS Provider (Only Route 53 or Cloudflare)</span>
                    <input
                      type="checkbox"
                      checked={sharedDns}
                      onChange={(e) => setSharedDns(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <span>Single Container Registry (Only AWS ECR)</span>
                    <input
                      type="checkbox"
                      checked={sharedRegistry}
                      onChange={(e) => setSharedRegistry(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  3. State Synchronization Method
                </label>
                <select
                  value={dataSyncStrategy}
                  onChange={(e) => setDataSyncStrategy(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-white p-2.5 text-xs font-semibold text-stone-800"
                >
                  <option value="event-driven">Event-Driven Asynchronous (Kafka / Pub/Sub CDC Log)</option>
                  <option value="single-master-rep">Single Master Primary with Asynchronous Read Replicas</option>
                  <option value="sync-multimaster">Synchronous Multi-Master across WAN (Split-Brain Hazard)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  4. Observability Integration
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setObservabilityStack("opentelemetry")}
                    className={`flex-1 rounded-xl py-2 text-xs font-bold border transition ${
                      observabilityStack === "opentelemetry"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    OpenTelemetry (CNCF)
                  </button>
                  <button
                    onClick={() => setObservabilityStack("vendor-siloed")}
                    className={`flex-1 rounded-xl py-2 text-xs font-bold border transition ${
                      observabilityStack === "vendor-siloed"
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    Vendor Siloed
                  </button>
                </div>
              </div>
            </div>

            {/* RESULTS & AUDIT (COL-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Common-Mode Risk Score</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${
                      dependencyAnalysis.commonModeRisk > 60
                        ? "text-rose-400"
                        : dependencyAnalysis.commonModeRisk > 35
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}>
                      {dependencyAnalysis.commonModeRisk}%
                    </span>
                    <span className="text-xs text-stone-400">
                      {dependencyAnalysis.commonModeRisk > 60 ? "Critical Hazard" : dependencyAnalysis.commonModeRisk > 35 ? "Elevated" : "Resilient"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-stone-300">
                    Probability that a single external provider or control-plane outage collapses all clouds.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Portability Rating</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-orange-400">
                      {dependencyAnalysis.portabilityScore}%
                    </span>
                    <span className="text-xs text-stone-400">OCI & Kubernetes</span>
                  </div>
                  <p className="mt-2 text-xs text-stone-300">
                    Workload exit mobility without architectural re-engineering.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Operational Complexity</span>
                  <span className="font-mono text-xs font-bold text-orange-600">{dependencyAnalysis.complexityRating}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">CAP Theorem Status</span>
                  <span className="font-mono text-xs font-bold text-stone-800">{dependencyAnalysis.capClassification}</span>
                </div>
              </div>

              {/* CRITICAL WARNINGS */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                  <AlertTriangle size={15} className="text-amber-500" />
                  <span>Dependency Architecture Audit & Critical Findings</span>
                </h4>
                {dependencyAnalysis.criticalWarnings.length === 0 ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs font-bold text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Clean Architecture: All critical dependencies have independent multi-cloud mirrors and fallback paths.</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {dependencyAnalysis.criticalWarnings.map((warn, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-900 leading-snug flex items-start gap-2.5"
                      >
                        <ShieldAlert size={16} className="text-amber-600 shrink-0 mt-0.5" />
                        <span>{warn}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 2: CROSS-CLOUD EGRESS & FAILOVER RPO/RTO CALCULATOR         */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 2
            </span>
            <span className="font-mono text-xs text-stone-400">FinOps & Resilience Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Cross-Cloud Egress Cost & Failover RPO/RTO Calculator
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Simulate the financial and operational impact of moving data between AWS, Azure, and Google Cloud. Compare how DNS TTL caching vs Global Anycast Proxies alters your real-world Recovery Time Objective (RTO) and Recovery Point Objective (RPO).
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* SLIDERS & CONTROLS (COL-6) */}
            <div className="lg:col-span-6 space-y-6 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                  <span>MONTHLY CROSS-CLOUD DATA TRANSFER:</span>
                  <span className="text-orange-600">{(crossCloudTransferGb / 1000).toFixed(1)} TB ({crossCloudTransferGb.toLocaleString()} GB)</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={crossCloudTransferGb}
                  onChange={(e) => setCrossCloudTransferGb(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                  <span>1 TB / mo</span>
                  <span>50 TB / mo</span>
                  <span>100 TB / mo</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  Traffic Communication Pattern
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "sync-api", label: "Sync REST API (Chatty 2.5x)" },
                    { id: "event-driven", label: "Event Stream (Kafka / Pub/Sub)" },
                    { id: "batch-nightly", label: "Batch Parquet (Compressed 60%)" },
                  ].map((pat) => (
                    <button
                      key={pat.id}
                      onClick={() => setTrafficCallPattern(pat.id)}
                      className={`rounded-xl p-2.5 text-[11px] font-bold border transition text-center ${
                        trafficCallPattern === pat.id
                          ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                          : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      {pat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  Global Traffic Steering Layer
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTrafficSteeringMethod("dns-steered")}
                    className={`rounded-xl p-3 text-xs font-bold border transition ${
                      trafficSteeringMethod === "dns-steered"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    DNS-Based (Route 53 / Traffic Mgr)
                  </button>
                  <button
                    onClick={() => setTrafficSteeringMethod("anycast-proxy")}
                    className={`rounded-xl p-3 text-xs font-bold border transition ${
                      trafficSteeringMethod === "anycast-proxy"
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    Global Anycast Proxy (L7 Edge)
                  </button>
                </div>
              </div>

              {trafficSteeringMethod === "dns-steered" && (
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                    <span>DNS TIME-TO-LIVE (TTL):</span>
                    <span className="text-orange-600">{dnsTtlSeconds} SECONDS</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={300}
                    step={10}
                    value={dnsTtlSeconds}
                    onChange={(e) => setDnsTtlSeconds(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>10s (High DNS QPS Cost)</span>
                    <span>60s (Standard)</span>
                    <span>300s (5 Mins)</span>
                  </div>
                </div>
              )}

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                  <span>AVERAGE REPLICATION LAG:</span>
                  <span className="text-orange-600">{replicationLagSeconds} SECONDS</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={120}
                  step={1}
                  value={replicationLagSeconds}
                  onChange={(e) => setReplicationLagSeconds(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>
            </div>

            {/* LIVE TELEMETRY OUTPUT (COL-6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Estimated Egress Cost</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-orange-400">
                      ${egressCalculations.monthlyEgressCost.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ month</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    ~${(egressCalculations.monthlyEgressCost * 12).toLocaleString()} / year network transfer fee
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Calculated Failover RTO</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">
                      {egressCalculations.calculatedRtoSeconds}s
                    </span>
                    <span className="text-xs text-stone-400">to reroute</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 block mt-1">
                    Recovery Time Objective
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-bold text-stone-700 uppercase mb-1">
                    RTO Analysis (Traffic Convergence)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {egressCalculations.rtoDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200">
                  <h4 className="font-mono text-xs font-bold text-stone-700 uppercase mb-1">
                    RPO Analysis (Data Loss Window: ~{egressCalculations.calculatedRpoSeconds}s)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {egressCalculations.rpoDescription}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <h4 className="font-mono text-xs font-bold text-orange-900 uppercase flex items-center gap-1.5 mb-2">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span>FinOps & Latency Optimization Rule</span>
                </h4>
                <p className="text-xs text-orange-950 leading-relaxed">
                  Moving data across clouds is 10x more expensive than moving compute. To prevent egress cost explosion, always compress cross-cloud payloads with Snappy/Parquet, maintain localized read replicas, and never perform synchronous cross-cloud joins in critical transactional paths.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 3: MULTI-CLOUD GAMEDAY SIMULATOR (10 SCENARIOS)            */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#27272a] bg-[#18181b] p-6 md:p-10 text-white shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-orange-500/20 border border-orange-500/30 px-2.5 py-1 font-mono text-xs font-bold text-orange-400 uppercase">
                  Interactive Lab 3
                </span>
                <span className="font-mono text-xs text-stone-400">SRE Chaos Drills</span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                Multi-Cloud GameDay Simulator
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                10 Production Failure Scenarios testing common-mode outages, network partitions, and failover runbooks (Section 74).
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-stone-400">Current Score</span>
              <div className="text-2xl font-black text-orange-400">{gameScore} / 10</div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* SCENARIO SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                GameDay Scenarios (A to J)
              </span>
              <div className="space-y-1.5">
                {gameScenarios.map((sc, idx) => (
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
                        {gameScenarios[idx].options[gameHistory[idx]].correct ? "PASS" : "FAIL"}
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
                  Incident {gameScenarioIndex + 1} of 10
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  {gameScenarios[gameScenarioIndex].title}
                </h4>
                <p className="mt-3 text-sm text-stone-300 leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800">
                  {gameScenarios[gameScenarioIndex].context}
                </p>

                <div className="mt-6 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase text-stone-400 block">
                    Choose Architectural Response:
                  </span>
                  {gameScenarios[gameScenarioIndex].options.map((opt, optIdx) => (
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
                            {opt.correct ? "CORRECT" : "INCORRECT"}
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
        {/* SECTION 4: WEEK 20 MASTERY TEST & ARCHITECTURAL SELF-ASSESSMENT             */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Mastery Verification
            </span>
            <span className="font-mono text-xs text-stone-400">Section 78 Questions</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Multi-Cloud Mastery Test: Multi-Cloud Architect Interview Questions
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            12 deep architectural questions designed to verify your understanding of multi-cloud tradeoffs, failure domains, workload identity, CAP theorem constraints, and disaster recovery.
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
              Modules 1 through 10 Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From Cloud Foundations, VPCs, and Compute to Distributed Storage, Databases, Large-Scale Architecture, Deep AWS, Deep Azure, Deep Google Cloud, and Multi-Cloud Engineering. Next: Zero Trust Cloud Security.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/cloud/security")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 11 Security →
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-700 transition"
            >
              Curriculum Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
