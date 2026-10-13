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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 9: GOOGLE CLOUD ARCHITECTURE                        */
/* Weeks 17–19: Primitives to Distributed Data Architecture                   */
/* GCP 6 Pillars, Global VPC, Regional Subnets, Workload Identity Fed,       */
/* Compute Engine MIGs, Cloud Storage, Cloud SQL, BigQuery Slots & Cost,      */
/* Pub/Sub Decoupling & Replay, Cloud Run Concurrency, GKE Autopilot,         */
/* Global External Load Balancing, Cloud Monitoring SLOs, Secret Manager,     */
/* 3-Cloud Translation Matrix & Production GlobalCommerce GCP Blueprint       */
/* -------------------------------------------------------------------------- */

export default function CloudGCP() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: GCP Service Matcher State
  const [selectedWorkloadCategory, setSelectedWorkloadCategory] = useState("compute");
  const [selectedRequirement, setSelectedRequirement] = useState("container-serverless");

  // Tool 2: BigQuery Slot & Partition Scan Cost Simulator State
  const [tableSizeTb, setTableSizeTb] = useState(50); // 50 TB Table
  const [queryStrategy, setQueryStrategy] = useState("partitioned-clustered"); // "unpartitioned-full", "partitioned-only", "partitioned-clustered"
  const [queriesPerDay, setQueriesPerDay] = useState(120);
  const [pricingModel, setPricingModel] = useState("on-demand"); // "on-demand", "edition-reservation"

  // Tool 3: GCP GameDay Failure Simulator State (8 Scenarios from Sections 59–66)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Tool 2: BigQuery Math & Cost Calculations
  const bigqueryCalculations = useMemo(() => {
    let scanFraction = 1.0;
    let strategyNote = "";
    let riskLevel = "safe";

    if (queryStrategy === "unpartitioned-full") {
      scanFraction = 1.0; // Scans 100% of bytes
      strategyNote =
        "DANGER: Full table scan! Every single query reads every byte on disk. Classic BigQuery Cost Explosion failure mode (Section 63).";
      riskLevel = "critical";
    } else if (queryStrategy === "partitioned-only") {
      scanFraction = 0.033; // Scans roughly 1 day out of 30 days = ~3.3%
      strategyNote =
        "Good: Date partitioning prunes 96.7% of table bytes. Query engine reads only the targeted daily partition.";
      riskLevel = "moderate";
    } else if (queryStrategy === "partitioned-clustered") {
      scanFraction = 0.005; // Scans 0.5% due to clustering on customer_id/product_id
      strategyNote =
        "Optimal: Partition pruning + Clustering skips 99.5% of columnar blocks. Sub-second response time and minimal billing footprint.";
      riskLevel = "safe";
    }

    const bytesScannedPerQueryTb = Number((tableSizeTb * scanFraction).toFixed(3));
    const totalDailyScannedTb = Number((bytesScannedPerQueryTb * queriesPerDay).toFixed(2));
    const totalMonthlyScannedTb = Number((totalDailyScannedTb * 30).toFixed(2));

    // Pricing models: On-demand is $6.25 per TB scanned
    let monthlyCostEstimate = 0;
    let costSummary = "";

    if (pricingModel === "on-demand") {
      monthlyCostEstimate = Math.round(totalMonthlyScannedTb * 6.25);
      costSummary = `$6.25 / TB scanned × ${totalMonthlyScannedTb.toLocaleString()} TB = $${monthlyCostEstimate.toLocaleString()}/mo`;
    } else {
      // Standard / Enterprise Slot Reservation (e.g. 100 Baseline Slots ~$2,000/mo flat)
      monthlyCostEstimate = 2000;
      costSummary = "Flat Edition Slot Reservation: Predictable $2,000/mo regardless of query scan volume.";
    }

    return {
      scanFraction,
      strategyNote,
      riskLevel,
      bytesScannedPerQueryTb,
      totalDailyScannedTb,
      totalMonthlyScannedTb,
      monthlyCostEstimate,
      costSummary,
    };
  }, [tableSizeTb, queryStrategy, queriesPerDay, pricingModel]);

  // Decision Tree Matcher Data
  const gcpDecisionOptions = {
    compute: [
      {
        id: "container-serverless",
        title: "Containerized Microservices & Web APIs with Direct VPC Egress",
        service: "Cloud Run (Fully Managed)",
        why: "Runs any Docker container, scales down to zero, supports per-instance concurrency up to 1,000, and uses Direct VPC egress.",
        tradeoff: "Cold start latencies on scale-out; rapid scaling can saturate backend Cloud SQL database connection pools.",
        antiPattern: "Using Serverless VPC Access connectors when Direct VPC egress provides better throughput and lower cost.",
      },
      {
        id: "k8s-managed-enterprise",
        title: "Production Kubernetes Clusters with Automated Node Operations",
        service: "Google Kubernetes Engine (GKE Autopilot)",
        why: "Google-managed node provisioning, security hardening, automated OS upgrades, and Workload Identity Federation.",
        tradeoff: "Opinionated defaults; cannot modify underlying worker node OS kernels or install custom host daemons.",
        antiPattern: "Creating GKE Standard clusters solely to run stateless web APIs without custom host requirements.",
      },
      {
        id: "resilient-vm-fleet",
        title: "Stateful Virtual Machine Fleets, Custom Kernels & Legacy Linux Apps",
        service: "Compute Engine Regional Managed Instance Groups (MIG)",
        why: "Distributes VMs across 3 zones with autohealing, predictive autoscaling, and rolling instance template upgrades.",
        tradeoff: "Requires 50% capacity overprovisioning to maintain full serving throughput after losing an entire zone.",
        antiPattern: "Deploying standalone single-zone Compute Engine VMs for mission-critical production workloads.",
      },
    ],
    storage: [
      {
        id: "object-storage-media",
        title: "Unstructured Media, Data Lake Files & Strong Read-After-Write Consistency",
        service: "Cloud Storage (GCS - Standard / Nearline / Coldline / Archive)",
        why: "Global bucket namespace, immediate strong consistency for object mutations and listings, lifecycle management.",
        tradeoff: "Object storage does not support POSIX file byte append locking.",
        antiPattern: "Treating Cloud Storage replication as a replacement for Object Versioning and Soft Delete against overwrites.",
      },
      {
        id: "transactional-oltp",
        title: "Enterprise Relational Database (PostgreSQL / MySQL ACID Transactions)",
        service: "Cloud SQL (Regional HA with Cross-Region Read Replica)",
        why: "Managed relational database engine with automated synchronous zonal failover and continuous point-in-time recovery (PITR).",
        tradeoff: "Cloud SQL is fundamentally regional; it is NOT an active-active globally distributed multi-master database.",
        antiPattern: "Assuming global VPC networking automatically provides active-active multi-region transactional writes.",
      },
    ],
    analytics: [
      {
        id: "serverless-data-warehouse",
        title: "Massive Petabyte-Scale SQL Analytics, BI & Ad-Hoc Data Exploration",
        service: "BigQuery (Columnar Storage + Slot Query Engine)",
        why: "Decoupled storage and compute, distributed slot allocation, date partitioning, clustering, and BI Engine acceleration.",
        tradeoff: "Not an OLTP database (unsuitable for high-concurrency single-record updates or row-by-row transactions).",
        antiPattern: "Executing 'SELECT * FROM giant_table' without partition filters, triggering massive on-demand scan bills.",
      },
      {
        id: "async-pubsub-decoupling",
        title: "High-Throughput Global Asynchronous Messaging & Stream Decoupling",
        service: "Cloud Pub/Sub (Topics & Subscriptions)",
        why: "Decouples producer/consumer rate and time, built-in message retention up to 31 days with historical replay, DLQ redrive.",
        tradeoff: "At-least-once delivery by default; consumers must implement deduplication and idempotent business logic.",
        antiPattern: "Assuming exactly-once messaging delivery automatically guarantees distributed business transactions.",
      },
    ],
    network: [
      {
        id: "global-http-ingress",
        title: "Global HTTP/HTTPS Anycast Edge Ingress, SSL Termination & Cloud Armor WAF",
        service: "Global External Application Load Balancer",
        why: "Single global Anycast IP address, intelligent backend health selection across regions, and Cloud Armor DDoS mitigation.",
        tradeoff: "Directs HTTP traffic globally; does not resolve backend database replication or transactional failover state.",
        antiPattern: "Relying on client-side DNS round-robin routing instead of Google's global Anycast load balancing frontend.",
      },
      {
        id: "private-outbound-egress",
        title: "Secure Outbound Internet Access for Private Compute Engine / GKE Nodes",
        service: "Cloud NAT (Software-Defined)",
        why: "Software-defined outbound address translation with zero single-point-of-failure VM appliances; denies unsolicited inbound.",
        tradeoff: "Regional resource; requires configuring independent NAT gateways per region.",
        antiPattern: "Assigning public IP addresses directly to private GKE worker nodes or database VMs.",
      },
    ],
    security: [
      {
        id: "workload-identity-fed",
        title: "Zero-Trust Pod & Workload Authentication without Static Secret Keys",
        service: "GKE Workload Identity Federation",
        why: "Binds Kubernetes ServiceAccounts to Google Service Accounts via OIDC; eliminates long-lived JSON private key files.",
        tradeoff: "Requires configuring GKE metadata server on all node pools.",
        antiPattern: "Downloading service account JSON private keys and mounting them into Kubernetes secrets.",
      },
      {
        id: "secret-versioning-rotation",
        title: "Centralized Secret Management with Staged Version Rollouts",
        service: "Secret Manager + Pub/Sub Rotation Notifications",
        why: "Encrypted, auditable versioning (v1, v2) with Pub/Sub event hooks to coordinate gradual consumer migration.",
        tradeoff: "Application code must handle dual-version validation during rotation to prevent downtime.",
        antiPattern: "Blindly using the 'latest' alias in production, causing instant outages if a new version is not backwards-compatible.",
      },
    ],
  };

  // 8 GameDay Failure Scenarios from Sections 59–66 of brief
  const gcpGameDayScenarios = [
    {
      id: 1,
      title: "Scenario 1: Compute Engine VM Crashes in Managed Instance Group (Section 59)",
      context:
        "At 08:30 UTC, a kernel panic causes instance `vm-worker-prod-a1` inside a Regional MIG to terminate abruptly. Application background processing loses 25% of its node capacity.",
      question: "How does Google Cloud automatically detect and heal this failure without human intervention?",
      options: [
        {
          id: "A",
          text: "The Managed Instance Group (MIG) health check detects the failed VM, automatically deletes the broken instance, and launches a fresh VM from the Instance Template in an available zone.",
          verdict: "Correct! Self-Healing Infrastructure",
          explanation:
            "MIG auto-healing decouples node failure from service failure. The health check triggers automated replacement while the regional load balancer reroutes traffic to healthy instances.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "An engineer must SSH into the Google Cloud Console and run `gcloud compute instances reset`.",
          verdict: "Anti-Pattern! Manual Toil",
          explanation:
            "Manual VM resets violate Google Cloud Well-Architected Operational Excellence. Workload fleets should be declarative and self-healing.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Scenario 2: Total Datacenter Zone Outage Knocks Out us-central1-a (Section 60)",
      context:
        "A severe power failure takes down the entire `us-central1-a` zone. 33% of your serving VMs disappear immediately. Traffic volume remains at peak 45,000 requests per second.",
      question: "What capacity planning invariant ensures surviving zones us-central1-b and us-central1-c do not collapse?",
      options: [
        {
          id: "A",
          text: "Deploy a Regional MIG with 50% capacity overprovisioning across 3 zones so the 2 surviving zones can absorb 100% of peak load without CPU starvation while autoscaling spins up new nodes.",
          verdict: "Correct! Zonal Failure Resilience",
          explanation:
            "Google's Well-Architected guidance explicitly recommends 50% overprovisioning for 3-zone regional MIGs. Having 3 zones is useless if surviving zones operate at 100% CPU and drop connections during failover.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Configure the autoscaler to scale from 2 instances to 500 instances in 100 milliseconds.",
          verdict: "Physically Impossible",
          explanation:
            "VM boot times and health check warmup take 1-3 minutes. Without baseline overprovisioning, the sudden traffic surge overloads and crashes the surviving instances.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Scenario 3: Cloud Run Traffic Surge Overwhelms Cloud SQL (Section 61)",
      context:
        "A flash sale triggers 60,000 concurrent HTTP requests to Cloud Run. Cloud Run scales horizontally to 600 container instances. Each container opens direct connections to PostgreSQL. Cloud SQL max connections is 1,000.",
      question: "Why is the database failing, and what architectural pattern prevents this serverless catastrophe?",
      options: [
        {
          id: "A",
          text: "Compute elasticity outpaces relational data elasticity! Remediate by configuring Cloud SQL Auth Proxy connection pooling, setting Cloud Run max instance limits, and buffering writes via Pub/Sub.",
          verdict: "Correct! Serverless DB Starvation Defense",
          explanation:
            "Serverless containers scale faster than relational database connection pools. Rate limiting, connection multiplexing, and asynchronous queue buffering protect the stateful database layer from thrashing.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Increase Cloud Run execution timeout from 5 minutes to 60 minutes.",
          verdict: "Catastrophic Failure",
          explanation:
            "Increasing timeouts causes thousands of blocked container instances to accumulate and hold open socket connections, compounding database lock exhaustion.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Scenario 4: Pub/Sub Worker Dies Mid-Processing with Unacknowledged Message (Section 62)",
      context:
        "An order processing worker pulls a batch of messages from Pub/Sub, charges the customer credit card via Stripe, but suffers a process crash before executing `acknowledge()`.",
      question: "What happens to the message, and how must the consumer be architected?",
      options: [
        {
          id: "A",
          text: "The ack deadline expires, Pub/Sub redelivers the message to another consumer. The consumer MUST be idempotent (using a unique order ID / idempotency token) to avoid double-charging.",
          verdict: "Correct! At-Least-Once Delivery & Idempotency",
          explanation:
            "Pub/Sub guarantees at-least-once delivery. If an ack is not received within the deadline, the message is redelivered. Consumers must check state before executing irreversible business operations.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Pub/Sub automatically rolls back the Stripe credit card charge through distributed two-phase commit.",
          verdict: "Impossible Distributed Fallacy",
          explanation:
            "Pub/Sub is a messaging system, not a distributed transaction manager across external third-party payment APIs.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Scenario 5: Careless BigQuery Query Triggers Runaway Cost Explosion (Section 63)",
      context:
        "A data scientist schedules a cron job running `SELECT * FROM sales_events WHERE event_type = 'purchase'` every 2 minutes against a 150 TB unpartitioned table on the On-Demand pricing tier.",
      question: "What is the financial impact, and how do you architecturally eliminate this failure mode?",
      options: [
        {
          id: "A",
          text: "Every run scans the entire 150 TB ($937 per query = $674,000/month!). Remediate by partitioning the table by date (`_PARTITIONDATE`), clustering by `event_type`, and enforcing maximum bytes billed limits.",
          verdict: "Correct! BigQuery Cost Governance",
          explanation:
            "In BigQuery on-demand, cost is proportional to bytes scanned, not rows returned. Date partitioning prunes 99% of data, and `maximum_bytes_billed` acts as an automated query circuit breaker.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Switch to a smaller Compute Engine VM so BigQuery queries run slower.",
          verdict: "Irrelevant",
          explanation:
            "BigQuery compute is serverless and completely decoupled from Compute Engine VMs. The VM size has zero effect on BigQuery query scan billing.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      title: "Scenario 6: Application Bug Overwrites Production Contract in Cloud Storage (Section 64)",
      context:
        "A deployment defect causes an automated pipeline to overwrite `master-contract.pdf` in a Cloud Storage bucket with an empty 0-byte file. The bucket has multi-region replication enabled.",
      question: "Did multi-region replication protect the document, and what is the true defense against logical corruption?",
      options: [
        {
          id: "A",
          text: "Replication does NOT protect against logical corruption: the empty file replicated immediately across all regions! The true defense is Cloud Storage Object Versioning and Object Retention Lock (WORM).",
          verdict: "Correct! Replication vs Backup Invariant",
          explanation:
            "Replication protects against physical storage datacenter failure, not valid application write mistakes. With Object Versioning, the overwritten contract is preserved as a prior generation and can be restored in seconds.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Multi-region replication will automatically detect the file is empty and refuse to replicate it.",
          verdict: "Incorrect",
          explanation:
            "Storage replication faithfully synchronizes every valid API write command without inspecting file semantics.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      title: "Scenario 7: Developer Commits Service Account JSON Key to Public GitHub (Section 65)",
      context:
        "A contractor downloads a service account key `sa-commerce-admin.json` to test locally and accidentally pushes it to a public GitHub repository. The service account has 'Editor' role at the project level.",
      question: "What is the 2026 Google Cloud best practice that prevents this vulnerability completely?",
      options: [
        {
          id: "A",
          text: "Never create service account keys! Use Workload Identity Federation for external/local developers and GKE Workload Identity for pods; apply Organization Policy `iam.disableServiceAccountKeyCreation`.",
          verdict: "Correct! Zero-Trust Identity Without Keys",
          explanation:
            "Service account JSON keys are static credentials that leak easily. Workload Identity Federation exchanges short-lived tokens via OIDC, eliminating static credential files entirely.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Store the JSON key in a password-protected zip file inside the Git repository.",
          verdict: "Dangerous Anti-Pattern",
          explanation:
            "Storing credentials in Git repositories violates security baselines and exposes the account to brute-force compromise.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      title: "Scenario 8: Catastrophic Outage Destroys Region us-central1 (Section 66)",
      context:
        "A regional fiber backplane severance takes down `us-central1`. The Global External Application Load Balancer immediately redirects all incoming client HTTP requests to `us-east4`.",
      question: "Why does the application still fail if Cloud SQL was only deployed in us-central1, and what is required?",
      options: [
        {
          id: "A",
          text: "Global traffic routing ≠ global data state! The application in `us-east4` cannot write because Cloud SQL primary is down. A disaster recovery plan must promote the `us-east4` cross-region read replica to primary.",
          verdict: "Correct! The Global Traffic vs Regional State Reality",
          explanation:
            "The Global Load Balancer routes traffic to healthy compute, but Cloud SQL is fundamentally regional. Cross-region disaster recovery requires a state machine: detect regional failure, promote the replica to standalone writer, and redirect connections.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "The Global Load Balancer will automatically write transactional orders into BigQuery until Cloud SQL recovers.",
          verdict: "Architectural Fantasy",
          explanation:
            "Load balancers route network packets; they do not reconstruct database schemas or simulate ACID transactional engines.",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleGameAnswer = (option) => {
    setGameSelection(option.id);
    if (!gameHistory[gameScenarioIndex]) {
      if (option.isCorrect) {
        setGameScore((prev) => prev + 10);
      }
      setGameHistory((prev) => ({
        ...prev,
        [gameScenarioIndex]: option.isCorrect ? "correct" : "incorrect",
      }));
    }
  };

  // 12 Rigorous GCP Topics
  const topics = [
    {
      id: 0,
      title: "The Google Cloud Mental Model & 6 Well-Architected Pillars",
      week: "Foundations",
      focus: "Resource Hierarchy, Control Planes, Global VPCs & The 6 Pillars",
      badge: "Architecture Foundation",
      theory:
        "Google Cloud organizes resources through a strict administrative and IAM inheritance hierarchy: Organization → Folders → Projects → Resources. Unlike other clouds, Google Cloud VPCs are global resources containing regional subnets connected across Google's private fiber backbone. Architecture in GCP is evaluated through the 6 Well-Architected Framework Pillars: Operational Excellence, Security, Reliability, Cost Optimization, Performance Optimization, and Sustainability (added as a 6th pillar in January 2026).",
      diagram: `GOOGLE CLOUD RESOURCE HIERARCHY & PLANES
+-------------------------------------------------------------------------+
| ORGANIZATION (e.g. acme-corp.com - Root Identity & Policy Domain)       |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | FOLDERS (Organizational Boundaries: Compliance, Departments)        | |
| | ├── Production Folder (Strict IAM, Hierarchical Firewall Policies) | |
| | └── Development Folder (Sandbox Quotas, Developer Roles)           | |
| +---------------------------------------------------------------------+ |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | PROJECTS (Billing, Quotas, API Enablement & IAM Boundary)           | |
| | ├── prj-commerce-prod-core                                          | |
| | │   ├── Global VPC: 10.20.0.0/16                                    | |
| | │   │   ├── Regional Subnet: us-central1 (10.20.10.0/24)            | |
| | │   │   └── Regional Subnet: europe-west1 (10.20.20.0/24)          | |
| | │   ├── Compute: Cloud Run, GKE Autopilot, Regional MIGs           | |
| | │   └── Data: Cloud Storage, Cloud SQL, BigQuery, Pub/Sub          | |
| +---------------------------------------------------------------------+ |
+-------------------------------------------------------------------------+

THE 3 OPERATIONAL PLANES:
1. Control / Identity Plane: IAM, Resource Hierarchy, Service Accounts, Workload Identity.
2. Network Plane: Global VPC, Regional Subnets, Routes, Hierarchical Firewalls, Cloud NAT.
3. Workload / Data Plane: Cloud Run, GKE, Compute Engine, Cloud SQL, GCS, BigQuery, Pub/Sub.`,
      keyTakeaways: [
        "A Project is the primary unit of resource creation, billing tracking, and API activation in Google Cloud.",
        "IAM permissions inherit downwards: granting a role at the Organization or Folder level grants access to all descendant projects.",
        "A Google Cloud VPC is global by default; subnets are regional. Regional subnets in Europe and the US communicate privately without VPNs.",
        "Global networking does NOT equal global data: a global VPC does not magically make a regional Cloud SQL instance active-active.",
      ],
      codeExample: `# Google Cloud CLI: Create a Project and attach it to an Organization Folder
gcloud projects create prj-commerce-prod-2026 \\
  --folder="739182947192" \\
  --labels=environment=production,tier=backend

# Link project to central Cloud Billing Account
gcloud billing projects link prj-commerce-prod-2026 \\
  --billing-account="01A2B3-C4D5E6-F7G8H9"`,
    },
    {
      id: 1,
      title: "Google Cloud IAM & Workload Identity Federation",
      week: "Foundations",
      focus: "Service Accounts, Zero Keys Best Practice & Cross-Cloud STS",
      badge: "Identity & Security",
      theory:
        "Google Cloud IAM binds Principals (Users, Groups, Service Accounts) to Roles (collections of permissions) on Resources. Service Accounts represent non-human workload identities. Google Cloud explicitly mandates avoiding long-lived service account JSON keys. Instead, workloads inside GKE use GKE Workload Identity Federation, and external workloads (in AWS, Azure, or on-premises) use Workload Identity Federation to exchange trusted OIDC tokens for short-lived Google Cloud credentials.",
      diagram: `WORKLOAD IDENTITY FEDERATION (ZERO JSON KEYS)
EXTERNAL WORKLOAD (AWS Lambda / EC2)        KUBERNETES WORKLOAD (GKE Pod)
           |                                              |
           | (1) AWS STS / OIDC Token                     | (1) K8s Projected Token
           v                                              v
+-------------------------------------------------------------------------+
| GOOGLE SECURITY TOKEN SERVICE (STS) & WORKLOAD IDENTITY FEDERATION      |
| Validates OIDC JWT signature against external Identity Provider (JWKS)  |
+-------------------------------------------------------------------------+
                                 |
                                 | (2) Exchanges for Short-Lived GCP Access Token
                                 v
+-------------------------------------------------------------------------+
| GOOGLE SERVICE ACCOUNT (sa-order-processor@prj.iam.gserviceaccount.com) |
| IAM Role: roles/pubsub.publisher + roles/storage.objectViewer           |
+-------------------------------------------------------------------------+
                                 |
                                 v
          [ GOOGLE CLOUD APIS: Pub/Sub & Cloud Storage ]
          Result: Zero static JSON credential files stored or leaked!`,
      keyTakeaways: [
        "Never create or download service account JSON private keys; enforce `iam.disableServiceAccountKeyCreation` via Organization Policy.",
        "Workload Identity Federation enables AWS, Azure, and GitHub Actions to authenticate to GCP APIs via short-lived OIDC exchange.",
        "In GKE, Workload Identity Federation binds a Kubernetes ServiceAccount directly to a Google Service Account via annotations.",
        "Apply least-privilege dedicated service accounts per microservice rather than sharing the Default Compute Engine Service Account.",
      ],
      codeExample: `# Bicep/Terraform: Bind Kubernetes ServiceAccount to Google Service Account
resource "google_service_account_iam_member" "workload_identity_user" {
  service_account_id = google_service_account.order_sa.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "serviceAccount:prj-commerce-prod-2026.svc.id.goog[production/order-service-sa]"
}

# Kubernetes ServiceAccount manifest in GKE:
# apiVersion: v1
# kind: ServiceAccount
# metadata:
#   name: order-service-sa
#   namespace: production
#   annotations:
#     iam.gke.io/gcp-service-account: sa-order-processor@prj-commerce-prod-2026.iam.gserviceaccount.com`,
    },
    {
      id: 2,
      title: "Global VPC Networking: Subnets, Firewalls & Cloud NAT",
      week: "Foundations",
      focus: "Global CIDR Topology, Hierarchical Firewall Policies & Distributed NAT",
      badge: "Global VPC",
      theory:
        "In Google Cloud, the VPC is a global construct spanning all regions worldwide, while subnets are strictly regional. Resources in different regions communicate across Google's private software-defined Andromeda network using internal RFC 1918 IPs without traversing the public internet. Firewall rules are stateful packet filters applied via network tags or service accounts, supplemented by Organization-level Hierarchical Firewall Policies. Cloud NAT provides software-defined outbound egress for private nodes.",
      diagram: `GLOBAL VPC NETWORK TOPOLOGY WITH MULTI-REGION SUBNETS
+-------------------------------------------------------------------------+
| GLOBAL VPC: vpc-commerce-prod (Custom Mode)                             |
|                                                                         |
| REGION: us-central1 (Iowa)              REGION: europe-west1 (Belgium)   |
| +-----------------------------------+   +-----------------------------+ |
| | Subnet: snet-app-us (10.20.10.0/24)|   | Subnet: snet-app-eu (10.21.10.0)|
| | [ Cloud Run / GKE / MIG Nodes ]   |   | [ Cloud Run / GKE / MIG Nodes]  |
| | Private IP: 10.20.10.15           |   | Private IP: 10.21.10.15     |
| +-----------------+-----------------+   +--------------+--------------+ |
|                   |                                    |                |
|                   +=============== Google Private =====+                |
|                                    Fiber Backbone                       |
|                                                                         |
| HIERARCHICAL FIREWALL POLICY: Deny Inbound Port 22/3389 from 0.0.0.0/0  |
| CLOUD NAT (us-central1): Outbound package updates without public IPs    |
+-------------------------------------------------------------------------+

ROUTES vs FIREWALL RULES IN GCP:
- Routes determine packet path: "Where should traffic destined for 10.21.10.0/24 go?"
- Firewalls determine packet permission: "Is TCP port 8080 allowed between these tags?"`,
      keyTakeaways: [
        "A Google Cloud VPC is global; subnets are regional. No complex inter-region peering or transit gateways are required.",
        "Hierarchical Firewall Policies enforce immutable security baselines across all projects from the Organization level.",
        "Cloud NAT is fully managed and software-defined: it does not use choke-point proxy VMs or have bandwidth bottleneck appliances.",
        "Never assign external public IP addresses to database instances or Kubernetes nodes; use Cloud NAT for outbound internet needs.",
      ],
      codeExample: `# gcloud CLI: Create a Global Custom-Mode VPC and Regional Subnets
gcloud compute networks create vpc-commerce-prod --subnet-mode=custom

# Create Regional Subnet in Iowa (us-central1)
gcloud compute networks subnets create snet-commerce-us \\
  --network=vpc-commerce-prod \\
  --region=us-central1 \\
  --range=10.20.10.0/24 \\
  --enable-private-ip-google-access

# Create Cloud NAT Gateway for private egress
gcloud compute routers create router-nat-us --network=vpc-commerce-prod --region=us-central1
gcloud compute routers nats create nat-gateway-us \\
  --router=router-nat-us \\
  --region=us-central1 \\
  --auto-allocate-nat-external-ips \\
  --nat-all-subnet-ip-ranges`,
    },
    {
      id: 3,
      title: "Compute Engine & Regional Managed Instance Groups (MIG)",
      week: "Foundations",
      focus: "Instance Templates, Zonal vs Regional MIGs & 50% Overprovisioning",
      badge: "Elastic Compute",
      theory:
        "Compute Engine provides IaaS virtual machines. For resilient workloads, Google Cloud mandates Regional Managed Instance Groups (MIGs). A Regional MIG creates VMs from a declarative Instance Template and distributes them evenly across 3 Availability Zones. Regional MIGs provide autohealing via application health checks and metric-driven autoscaling. Google Cloud specifically recommends 50% capacity overprovisioning in 3-zone configurations to guarantee full serving capacity upon losing an entire zone.",
      diagram: `REGIONAL MANAGED INSTANCE GROUP (3-ZONE RESILIENCE)
                        [ REGIONAL MIG CONTROLLER ]
               Instance Template: e2-standard-4 + Startup Script
                                    |
          +-------------------------+-------------------------+
          |                         |                         |
          v                         v                         v
+-------------------+     +-------------------+     +-------------------+
| ZONE us-central1-a|     | ZONE us-central1-b|     | ZONE us-central1-c|
| [ VM-1 ] [ VM-2 ] |     | [ VM-3 ] [ VM-4 ] |     | [ VM-5 ] [ VM-6 ] |
+-------------------+     +-------------------+     +-------------------+
          |                         |                         |
          +-------------------------+-------------------------+
                                    |
            *ZONE us-central1-a SUFFERS TOTAL POWER OUTAGE!*
                                    |
                                    v
Surviving Zones (b & c) have 4 instances. With 50% overprovisioning,
the surviving instances absorb 100% of serving traffic without CPU collapse!`,
      keyTakeaways: [
        "Regional MIGs spread instances across multiple zones, protecting workloads against local datacenter failures.",
        "Overprovisioning invariant: For 3 zones, provision 50% extra capacity so losing 1 zone leaves sufficient serving headroom.",
        "MIG Autohealing continuously queries an application HTTP health check, automatically replacing unresponsive instances.",
        "Autoscaling functions as a closed feedback-control loop: Telemetry → Desired Capacity → VM Provisioning → System Telemetry.",
      ],
      codeExample: `# gcloud CLI: Create an Instance Template and Regional MIG with Autohealing
gcloud compute instance-templates create template-commerce-worker \\
  --machine-type=e2-standard-4 \\
  --network=vpc-commerce-prod \\
  --subnet=snet-commerce-us \\
  --service-account=sa-worker@prj-commerce-prod-2026.iam.gserviceaccount.com \\
  --tags=worker-node

gcloud compute instance-groups managed create mig-commerce-regional \\
  --template=template-commerce-worker \\
  --size=6 \\
  --region=us-central1 \\
  --health-check=hc-worker-http \\
  --initial-delay=180`,
    },
    {
      id: 4,
      title: "Cloud Storage: Consistency, Storage Classes & Durability",
      week: "Foundations",
      focus: "Strong Read-After-Write Consistency, Storage Classes & Versioning",
      badge: "Object Storage",
      theory:
        "Google Cloud Storage (GCS) provides massively scalable object storage with strong read-after-write consistency for all upload, metadata, and listing operations globally. Storage classes trade storage cost against access frequency: Standard, Nearline (30-day min), Coldline (90-day min), and Archive (365-day min). Replication across dual/multi-regions protects against datacenter disasters, but protecting against human or application logical corruption requires Object Versioning, Retention Policies, and Soft Delete.",
      diagram: `CLOUD STORAGE ACCESS CLASSES & OBJECT VERSIONING
[ UPLOAD: contract-2026.pdf ] -> (Strong Read-After-Write Consistency!)
       |
       v
+-------------------------------+  Day 0: Active serving
| STANDARD STORAGE CLASS        |  Lowest access cost, millisecond latency
+---------------+---------------+
                |
                v 30 Days (Lifecycle Rule)
+-------------------------------+  Day 30: Accessed < once / month
| NEARLINE STORAGE CLASS        |  Lower storage cost, per-GB access fee
+---------------+---------------+
                |
                v 90 Days (Lifecycle Rule)
+-------------------------------+  Day 90: Accessed < once / quarter
| COLDLINE STORAGE CLASS        |  Very low storage cost, compliance data
+---------------+---------------+
                |
                v 365 Days (Lifecycle Rule)
+-------------------------------+  Day 365+: Archival compliance
| ARCHIVE STORAGE CLASS         |  Lowest storage cost ($0.0012/GB/mo)
+-------------------------------+

OBJECT VERSIONING & LOGICAL RECOVERY:
Bug overwrites contract-2026.pdf with 0 bytes!
- Live Version: Generation #171829102 (0 Bytes)
- Prior Version: Generation #171829001 (Original 14 MB document safely preserved!)`,
      keyTakeaways: [
        "Cloud Storage guarantees strong consistency: an upload or delete is immediately visible to all subsequent read and list requests.",
        "Replication is NOT backup: an accidental file overwrite or delete replicates immediately to all secondary locations.",
        "Enable Object Versioning and Soft Delete to ensure recovery from accidental file deletions or ransomware encryption.",
        "Store media assets in Cloud Storage rather than local VM disks to maintain completely stateless, auto-scalable compute.",
      ],
      codeExample: `# Cloud Storage Bucket Lifecycle Configuration (JSON)
{
  "rule": [
    {
      "action": { "type": "SetStorageClass", "storageClass": "NEARLINE" },
      "condition": { "age": 30, "matchesPrefix": ["exports/"] }
    },
    {
      "action": { "type": "SetStorageClass", "storageClass": "ARCHIVE" },
      "condition": { "age": 90, "matchesPrefix": ["exports/"] }
    },
    {
      "action": { "type": "Delete" },
      "condition": { "numNewerVersions": 3 }
    }
  ]
}`,
    },
    {
      id: 5,
      title: "Cloud SQL: Regional High Availability vs Cross-Region DR",
      week: "Foundations",
      focus: "Zonal Failover, Cross-Region Read Replicas & The Authoritative Write Reality",
      badge: "Relational DB",
      theory:
        "Cloud SQL provides managed PostgreSQL, MySQL, and SQL Server instances. In Cloud SQL, High Availability (HA) handles intra-region zonal hardware faults via automated synchronous replication and shared persistent storage failover with zero data loss. Disaster Recovery (DR), however, handles catastrophic regional outages: Cloud SQL is fundamentally regional and requires asynchronous cross-region read replicas with a deliberate failover state machine to promote replicas and manage RTO/RPO trade-offs.",
      diagram: `CLOUD SQL REGIONAL HIGH AVAILABILITY (HA) vs CROSS-REGION DR

1. INTRA-REGION HIGH AVAILABILITY (Zonal Failover in us-central1):
   [ Primary Node (Zone us-central1-a) ]
                   | Synchronous Block Replication
                   v
   [ Standby Node (Zone us-central1-b) ]
   (Zonal crash triggers automated DNS failover in <60s with 0 data loss!)

2. CROSS-REGION DISASTER RECOVERY (Regional Severance):
   REGION: us-central1 (Primary Region)          REGION: us-east4 (DR Region)
   +------------------------------------+        +-----------------------------+
   | Cloud SQL Primary Writer Instance  | =====> | Cross-Region Read Replica   |
   +------------------------------------+ Async  +-----------------------------+
                     |                    Log                   |
        *REGION us-central1 DIES!*        Stream     [ PROMOTE REPLICA TO WRITER ]
                                                                |
                                                                v
                                                     [ Standalone Production DB ]
                                                     (RPO: Replication Lag ~1-5s)
                                                     (RTO: Promotion time ~3-8 mins)`,
      keyTakeaways: [
        "Cloud SQL Regional HA protects against zonal outages; it does NOT protect against a full regional datacenter disaster.",
        "A cross-region read replica is read-only: it does NOT provide multi-master active-active writes across regions.",
        "In a regional disaster, failover requires a state machine: stop writes, promote the read replica, update application connection strings.",
        "Continuous Point-in-Time Recovery (PITR) writes transaction write-ahead logs (WAL) to Cloud Storage, enabling restore to any second.",
      ],
      codeExample: `# gcloud CLI: Deploy a Regional HA Cloud SQL PostgreSQL Instance with Cross-Region Replica
gcloud sql instances create db-commerce-primary \\
  --database-version=POSTGRES_15 \\
  --tier=db-custom-8-32768 \\
  --region=us-central1 \\
  --availability-type=REGIONAL \\
  --enable-bin-log \\
  --backup-start-time=02:00

# Create Cross-Region Read Replica in us-east4 for Disaster Recovery
gcloud sql instances create db-commerce-replica-east4 \\
  --master-instance-name=db-commerce-primary \\
  --region=us-east4 \\
  --tier=db-custom-8-32768`,
    },
    {
      id: 6,
      title: "BigQuery: Serverless Analytical Architecture & Slot Mechanics",
      week: "Distributed Systems",
      focus: "OLTP vs OLAP, Columnar Storage, Slot Compute & Partition Pruning",
      badge: "Analytics Engine",
      theory:
        "BigQuery is a fully managed, serverless enterprise data warehouse designed for massive analytical queries (OLAP), cleanly separating columnar storage from distributed SQL compute. Compute is measured in 'slots' (virtual CPUs). While Cloud SQL handles transactional row updates, BigQuery ingests billions of analytical events. In BigQuery on-demand pricing ($6.25/TB), queries scan columnar blocks: date partitioning and clustering are critical architectural controls to prune scans and avoid the *BigQuery Cost Explosion*.",
      diagram: `BIGQUERY COLUMNAR DECOUPLED ARCHITECTURE & SLOTS
OLTP (Cloud SQL): Single-record row transactions  |  OLAP (BigQuery): Billion-row aggregations
"Write Order #9901"                                |  "Calculate total revenue by region in 2026"

BIGQUERY DISTRIBUTED COMPUTATION:
[ User SQL Query ]
       |
       v
[ BIGQUERY QUERY PLANNER ]
       |
       v Distributes execution across hundreds of dynamic Slots
+-------------------------------------------------------------------------+
| BIGQUERY COMPUTE SLOTS (Dremel Execution Engine)                        |
| [ Slot 1 ] [ Slot 2 ] [ Slot 3 ] [ Slot 4 ] ... [ Slot 500 ]           |
+-------------------------------------------------------------------------+
       |                                          |
       | Jupiter High-Speed Network               | (Columnar Read)
       v                                          v
+-------------------------------------------------------------------------+
| COLOSSUS DISTRIBUTED COLUMNAR STORAGE (Capacitor File Format)           |
| Partition: 2026-10-08 | Cluster: customer_id = "cust_901"               |
| *Partition Pruning skips 99% of unneeded historical data blocks!*       |
+-------------------------------------------------------------------------+`,
      keyTakeaways: [
        "BigQuery is an analytical engine (OLAP), not a transactional operational database (OLTP); never use it for low-latency point writes.",
        "In BigQuery on-demand pricing, cost is determined by the volume of bytes scanned; always apply partition pruning filters in WHERE clauses.",
        "Clustering sorts data within partitions by specified columns (e.g. `customer_id`), further reducing byte scanning costs.",
        "Set `maximum_bytes_billed` on queries as an automated circuit breaker to prevent accidental multi-thousand-dollar runaway queries.",
      ],
      codeExample: `# BigQuery SQL: Table Creation with Date Partitioning and Clustering
CREATE TABLE \`prj-commerce-prod-2026.analytics.sales_events\`
(
  order_id STRING,
  customer_id STRING,
  amount NUMERIC,
  event_timestamp TIMESTAMP
)
PARTITION BY DATE(event_timestamp)
CLUSTER BY customer_id
OPTIONS(
  partition_expiration_days = 730,
  description = "Partitioned sales events with customer clustering"
);

-- Cost-optimized query: scans only 1 day of data instead of full 50 TB!
SELECT customer_id, SUM(amount) AS total_spent
FROM \`prj-commerce-prod-2026.analytics.sales_events\`
WHERE DATE(event_timestamp) = '2026-10-08'
GROUP BY customer_id;`,
    },
    {
      id: 7,
      title: "Cloud Pub/Sub: Global Asynchronous Decoupling & Replay",
      week: "Distributed Systems",
      focus: "Decoupling Time & Scale, At-Least-Once Semantics, DLQs & Replay",
      badge: "Event Messaging",
      theory:
        "Google Cloud Pub/Sub provides horizontally scalable asynchronous messaging. Pub/Sub decouples systems in both time (producers finish immediately without waiting for consumers) and scale (buffers 100k msg/s bursts for consumers processing at 10k msg/s). Pub/Sub guarantees at-least-once delivery; consumers must be idempotent. Subscriptions feature configurable message retention (up to 31 days) allowing historical replay after software bug fixes, alongside Dead-Letter Queues (DLQ).",
      diagram: `PUB/SUB ASYNCHRONOUS FANOUT, DLQ & HISTORICAL REPLAY
                    [ Order Checkout Service ]
                                |
                                v
                [ TOPIC: order-placed-events ]
              /                 |               \\
             v                  v                v
[ Sub: Inventory ]      [ Sub: Billing ]    [ Sub: Analytics Export ]
(Cloud Run Worker)      (GKE Worker)        (BigQuery Subscription)
        |                       |
        v                       v Repeated Failure (5x)
[ Process Inventory ]           |
                                v
               [ DEAD-LETTER TOPIC: billing-poison-dlq ]

HISTORICAL REPLAY MECHANISM:
Bug found in billing worker at 14:00 UTC -> Bug patched at 16:00 UTC.
Execute: gcloud pubsub subscriptions seek Sub:Billing --time=14:00
Pub/Sub replays all messages from the last 2 hours to the repaired workers!`,
      keyTakeaways: [
        "Pub/Sub decouples time and scale: producers and consumers operate independently at their own optimal throughput rates.",
        "Pub/Sub guarantees at-least-once delivery; downstream consumer applications must be idempotent.",
        "Configure Dead-Letter Topics with `maxDeliveryAttempts=5` to isolate poison-pill messages from blocking processing queues.",
        "Pub/Sub message retention allows seeking subscriptions backward in time (up to 31 days) to replay messages after outage recovery.",
      ],
      codeExample: `# Python: Pub/Sub Pull Consumer with Dead-Letter Handling and Idempotency
from google.cloud import pubsub_v1
import json

subscriber = pubsub_v1.SubscriberClient()
subscription_path = subscriber.subscription_path("prj-commerce-prod-2026", "sub-orders")

def callback(message):
    try:
        data = json.loads(message.data.decode("utf-8"))
        order_id = data.get("order_id")
        
        # Idempotency check in Redis or Cloud SQL
        if process_order_idempotent(order_id, data):
            message.ack()
    except Exception as ex:
        print(f"Error processing order: {ex}")
        message.nack() # Re-expose message for retry

streaming_pull_future = subscriber.subscribe(subscription_path, callback=callback)
streaming_pull_future.result()`,
    },
    {
      id: 8,
      title: "Cloud Run: Serverless Containers, Concurrency & VPC Egress",
      week: "Distributed Systems",
      focus: "Container Serverless, Per-Instance Concurrency & Direct VPC Egress",
      badge: "Modern Serverless",
      theory:
        "Cloud Run executes stateless container images on Google's fully managed serverless infrastructure. Unlike function platforms, Cloud Run supports per-instance request concurrency (up to 1,000 concurrent requests per instance), significantly lowering cold starts and resource overhead. It scales to zero when idle and scales up dynamically during traffic surges. Modern Cloud Run utilizes Direct VPC egress to connect securely to internal VPC resources (Cloud SQL, Memorystore) without public internet transit.",
      diagram: `CLOUD RUN CONCURRENCY & DIRECT VPC EGRESS
[ INCOMING TRAFFIC: 50,000 RPS ]
               |
               v
[ CLOUD RUN MANAGED PLATFORM ]
Scales to N Instances based on Concurrency Target (e.g. 80 requests/container)
+-------------------------------------------------------------------------+
| CLOUD RUN INSTANCE 1                                                    |
| ├── Request 1 ──┐                                                       |
| ├── Request 2 ──┼── Concurrent Event Loop (e.g. Node.js / Go)           |
| └── Request 80 ─┘                                                       |
+-------------------------------------------------------------------------+
       |
       v (DIRECT VPC EGRESS: No Connector Bottlenecks!)
+-------------------------------------------------------------------------+
| INTERNAL GLOBAL VPC NETWORK (10.20.0.0/16)                             |
| Private IP Path: 10.20.10.25 (Private Cloud SQL PostgreSQL)            |
+-------------------------------------------------------------------------+

THE SERVERLESS DATABASE TRAP:
If Cloud Run scales to 1,000 instances, each opening 5 DB connections,
Cloud SQL receives 5,000 connections! Use Cloud SQL Auth Proxy connection pooling.`,
      keyTakeaways: [
        "Cloud Run handles multiple requests concurrently within a single container, drastically reducing instance count compared to single-concurrency functions.",
        "Direct VPC egress is the recommended standard: faster throughput, lower latency, and zero Serverless VPC connector infrastructure.",
        "Configure `max-instances` on Cloud Run services to act as an intentional circuit breaker against overloading downstream databases.",
        "Configure `min-instances >= 1` for latency-sensitive production APIs to eliminate cold-start penalties.",
      ],
      codeExample: `# gcloud CLI: Deploy a Cloud Run Service with Direct VPC Egress and Concurrency Tuning
gcloud run deploy svc-commerce-checkout \\
  --image=gcr.io/prj-commerce-prod-2026/checkout:v2 \\
  --region=us-central1 \\
  --concurrency=80 \\
  --min-instances=2 \\
  --max-instances=150 \\
  --network=vpc-commerce-prod \\
  --subnet=snet-commerce-us \\
  --vpc-egress=private-ranges-only \\
  --service-account=sa-checkout@prj-commerce-prod-2026.iam.gserviceaccount.com`,
    },
    {
      id: 9,
      title: "GKE Autopilot: Managed Kubernetes & Workload Identity",
      week: "Distributed Systems",
      focus: "GKE Autopilot vs Standard, Automated Node Ops & Workload Identity",
      badge: "Managed Kubernetes",
      theory:
        "Google Kubernetes Engine (GKE) is Google's managed Kubernetes platform. GKE Autopilot represents the modern production-ready default: Google manages the underlying nodes, security baselines, OS patching, and Karpenter-style autoscaling according to pod resource requests. Workload Identity Federation for GKE is mandatory: it links Kubernetes ServiceAccounts directly to Google Cloud Service Accounts, eliminating static private key files inside pods.",
      diagram: `GKE AUTOPILOT vs GKE STANDARD ARCHITECTURE
+-----------------------------+------------------------------------+------------------------------------+
| ARCHITECTURAL ATTRIBUTE     | GKE AUTOPILOT (2026 Default)       | GKE STANDARD                       |
+-----------------------------+------------------------------------+------------------------------------+
| Node Fleet Management       | Google-managed, automated provision| Customer manages Node Pools & OS   |
| Billing Model               | Per pod vCPU, Memory & GPU request | Per underlying Compute Engine VM   |
| Security Hardening          | Built-in CIS benchmarks enforced   | User-configured Pod Security / OPA |
| Cluster Version Upgrades    | Automated rolling maintenance      | User-scheduled upgrade channels    |
| Operational Overhead        | Minimal: Focus entirely on Pods    | Moderate to High                   |
+-----------------------------+------------------------------------+------------------------------------+

GKE WORKLOAD IDENTITY FEDERATION:
[ Pod in GKE Autopilot ]
       |
       | Token projected to /var/run/secrets/tokens/gcp-ksa/token
       v
[ GKE Metadata Server: 169.254.169.254 ]
       |
       v Exchanges token with Google Security Token Service (STS)
[ Google IAM Service Account: sa-gke-worker@prj.iam.gserviceaccount.com ]
       |
       v Access allowed to Cloud Storage, BigQuery, and Pub/Sub without static keys!`,
      keyTakeaways: [
        "GKE Autopilot eliminates node pool management; you pay strictly for the CPU and RAM requested by your pods.",
        "Workload Identity Federation for GKE is the only architecturally compliant authentication pattern for production pods.",
        "GKE Autopilot enforces security baselines: privileged containers and host path volume mounts are restricted by default.",
        "Use Horizontal Pod Autoscaler (HPA) to scale pods based on metrics; Autopilot automatically provisions physical node capacity.",
      ],
      codeExample: `# gcloud CLI: Provision a Production GKE Autopilot Cluster
gcloud container clusters create-auto cluster-commerce-prod \\
  --region=us-central1 \\
  --network=vpc-commerce-prod \\
  --subnetwork=snet-commerce-us \\
  --release-channel=regular

# Verify Workload Identity Federation is enabled by default on GKE Autopilot
gcloud container clusters describe cluster-commerce-prod \\
  --region=us-central1 \\
  --format="value(workloadIdentityConfig.workloadPool)"`,
    },
    {
      id: 10,
      title: "Global External Application Load Balancer & Cloud Armor",
      week: "Production Systems",
      focus: "Anycast Frontend IP, Intelligent Backend Routing & DDoS/WAF Defense",
      badge: "Global Edge Ingress",
      theory:
        "Google Cloud's Global External Application Load Balancer provides Layer-7 HTTP/HTTPS traffic routing across multi-region backends (Cloud Run, GKE, MIGs) through a single Anycast public IP address. User requests enter Google's global fiber edge network at the Point of Presence (PoP) closest to the user. Cloud Armor provides enterprise WAF inspection, IP rate limiting, and Layer-7 DDoS defense directly at the edge before traffic ever touches application compute.",
      diagram: `GLOBAL ANYCAST LOAD BALANCER & MULTI-REGION ROUTING
                    [ GLOBAL CLIENTS WORLDWIDE ]
           (India)             (Europe)              (USA)
              \\                   |                   /
               v                  v                  v
+-------------------------------------------------------------------------+
| GOOGLE ANYCAST EDGE POP NETWORK (Single Global IP: 34.120.50.10)        |
| - Edge TLS Termination & HTTP/3 Support                                 |
| - Cloud Armor: WAF Rules, Geo-Fencing, Rate Limiting, DDoS Shield       |
+-------------------------------------------------------------------------+
                                   |
           Intelligent Health-Based & Latency-Optimized Routing
                                   |
         +-------------------------+-------------------------+
         |                                                   |
         v                                                   v
[ REGION: us-central1 ]                             [ REGION: europe-west1 ]
Backend Service: neg-run-us                         Backend Service: neg-run-eu
├── Cloud Run Checkout API                          ├── Cloud Run Checkout API
└── GKE Pod Microservices                           └── GKE Pod Microservices

CRITICAL INVARIANT: Global routing ≠ Global data consistency!
If Cloud SQL primary in us-central1 fails, the global load balancer can route to europe-west1,
but europe-west1 must have an operational, promoted database writer!`,
      keyTakeaways: [
        "A single global Anycast IP address serves users worldwide, eliminating complex multi-region DNS failover latency.",
        "Cloud Armor mitigates OWASP Top 10 web vulnerabilities and executes rate limiting directly at the global edge network.",
        "Serverless Network Endpoint Groups (NEGs) allow the Global Load Balancer to route directly to Cloud Run services.",
        "Backend services continuously monitor region health; if a region experiences an outage, traffic shifts automatically to healthy regions.",
      ],
      codeExample: `# gcloud CLI: Create Cloud Armor Security Policy with Rate Limiting
gcloud compute security-policies create sec-policy-commerce-edge \\
  --description="Protect commerce edge against Layer 7 volumetric attacks"

# Add Rate Limiting Rule: Block clients exceeding 500 requests per minute
gcloud compute security-policies rules create 1000 \\
  --security-policy=sec-policy-commerce-edge \\
  --expression="true" \\
  --action=rate-based-ban \\
  --rate-limit-threshold-count=500 \\
  --rate-limit-threshold-interval-sec=60 \\
  --ban-duration-sec=600`,
    },
    {
      id: 11,
      title: "Production Capstone: GlobalCommerce GCP Blueprint & 3-Cloud Translation",
      week: "Production Systems",
      focus: "10M-User Platform, AWS/Azure/GCP Translation & 12 Lab Sequence",
      badge: "Capstone Blueprint",
      theory:
        "The Module 9 Capstone synthesizes all principles into GlobalCommerce GCP: an enterprise-grade multi-region platform engineered for 10 million users, 100,000 peak RPS, 99.99% availability, RPO ≤ 1 min, and RTO ≤ 15 min. The system integrates Global Load Balancing, Cloud Armor, Multi-Region Cloud Run, GKE Autopilot, Cloud SQL Regional HA + Cross-Region Replica, Cloud Storage, Pub/Sub, BigQuery, Secret Manager, and Cloud Monitoring SLOs. Includes the complete AWS vs Azure vs GCP architecture equivalence matrix.",
      diagram: `GLOBALCOMMERCE GCP END-TO-END PRODUCTION BLUEPRINT
[ GLOBAL USERS ]
       |
       v
[ GLOBAL APPLICATION LOAD BALANCER + CLOUD ARMOR ] -> (Single Anycast Global IP)
       |
       +-----------------------+-----------------------+
       | Private Path          | Private Path          |
       v                       v                       v
[ REGION A: us-central1 ] [ REGION B: europe-west1 ][ REGION C: asia-south1 ]
├── Cloud Run API         ├── Cloud Run API         ├── Cloud Run API
└── GKE Autopilot Pods    └── GKE Autopilot Pods    └── GKE Autopilot Pods
       |                       |                       |
       +-----------------------+-----------------------+
                               |
             +-----------------+-----------------+
             |                                   |
             v                                   v
[ CLOUD SQL POSTGRESQL ]               [ CLOUD STORAGE (GCS) ]
- Primary Regional HA (us-central1)    - Product Media, Invoices
- Cross-Region DR Replica (us-east4)   - Object Versioning & Soft Delete
             |
   (Transactional Events)
             |
             v
   [ CLOUD PUB/SUB TOPIC ]
             |
     +-------+-------+
     |               |
     v               v
[ Cloud Run Workers ] [ BigQuery Subscription Pipeline ]
(Idempotent Consumers)       |
                             v
                     [ BIGQUERY ANALYTICS WAREHOUSE ]
                     - Date Partitioned & Clustered
                     - BI Dashboards & ML Forecasting
CROSS-CUTTING: IAM Service Accounts • Workload Identity Fed • Cloud Monitoring SLOs • Secret Manager`,
      keyTakeaways: [
        "Architecture is about distributed-system invariants: identity, networking boundaries, compute scaling, and data durability.",
        "The 3-Cloud equivalence: AWS VPC = Azure VNet = GCP Global VPC; EC2 = Azure VM = Compute Engine; S3 = Blob = GCS.",
        "Cloud Monitoring alerts must be anchored to user-impacting SLOs (error budgets, latency p95), not raw host CPU graphs.",
        "Always design failover procedures as tested state machines: database promotion, connection redirection, and capacity verification.",
      ],
      codeExample: `# AWS -> Azure -> GCP Complete Architectural Equivalence Reference Matrix:
# Identity:         AWS IAM / Identity Center  ---> Azure Entra ID + RBAC       ---> GCP Cloud IAM
# Workload Auth:    AWS IAM Roles (STS)        ---> Azure Managed Identities     ---> GCP Workload Identity Fed
# Private Network:  AWS Regional VPC           ---> Azure Regional VNet         ---> GCP Global VPC (Regional Subnets)
# Compute Fleet:    AWS Auto Scaling Groups    ---> Azure VM Scale Sets (VMSS)  ---> GCP Managed Instance Groups (MIG)
# Serverless Apps:  AWS Lambda                 ---> Azure Functions Flex Plan   ---> GCP Cloud Run (Containers)
# Managed K8s:      AWS EKS (Auto Mode)        ---> Azure AKS (Automatic)       ---> GCP GKE (Autopilot)
# Object Storage:   AWS Amazon S3              ---> Azure Blob Storage          ---> GCP Cloud Storage (GCS)
# Relational DB:    AWS RDS / Aurora           ---> Azure SQL Database          ---> GCP Cloud SQL
# Analytical OLAP:  AWS Amazon Redshift        ---> Azure Synapse / Fabric      ---> GCP BigQuery (Decoupled Slots)
# Async Messaging:  AWS SQS & SNS / EventBridge---> Azure Service Bus & Evt Grid---> GCP Cloud Pub/Sub
# Global Ingress:   AWS CloudFront + ALB       ---> Azure Front Door            ---> GCP Global External App LB
# Secrets Vault:    AWS Secrets Manager / KMS  ---> Azure Key Vault             ---> GCP Secret Manager
# Observability:    AWS CloudWatch             ---> Azure Monitor               ---> GCP Cloud Monitoring (SRE SLOs)`,
    },
  ];

  const currentTopic = topics[selectedTopic];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="gcp"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Google Cloud AI"
        />

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#18181b] p-8 md:p-12 text-white shadow-2xl mb-10">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1 text-xs font-mono font-bold text-orange-400 mb-4">
              <Cloud size={14} />
              <span>Google Cloud Architecture</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
              From GCP Primitives to Distributed Data Architecture
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300">
              Google Cloud exposes distributed systems in a distinctive, powerful way: Global VPC networks with regional subnets,
              Compute Engine Regional MIGs with 50% overprovisioning, Cloud Run container serverless with concurrency tuning,
              GKE Autopilot managed operations, Pub/Sub large-scale decoupling and historical replay, BigQuery decoupled analytical slots,
              and Global External Application Load Balancing with Anycast IPs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Foundations: Global VPC • Regional Subnets • MIGs • GCS • Cloud SQL HA
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Analytics & Scale: BigQuery Slots • Pub/Sub Replay • Cloud Run • GKE Autopilot
              </span>
              <span className="rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5">
                Capstone: GlobalCommerce GCP & 3-Cloud Translation Matrix
              </span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 1 & 2: TWO-COLUMN LAB DECK */}
        <div className="grid gap-8 lg:grid-cols-12 mb-12">
          {/* TOOL 1: GCP SERVICE SELECTOR & ARCHITECTURAL MATCHER (COL-7) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive GCP Service Selector & Matcher
                    </h3>
                    <p className="text-xs text-stone-500">
                      Map workload constraints to exact architectural recommendations (Section 68)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Decision Matrix
                </span>
              </div>

              {/* Workload Category Tabs */}
              <div className="grid grid-cols-5 gap-1.5 mb-6">
                {[
                  { id: "compute", label: "Compute" },
                  { id: "storage", label: "Storage/DB" },
                  { id: "analytics", label: "Data/Msg" },
                  { id: "network", label: "Network" },
                  { id: "security", label: "Security" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedWorkloadCategory(cat.id);
                      setSelectedRequirement(gcpDecisionOptions[cat.id][0].id);
                    }}
                    className={`rounded-xl py-2 px-1 text-center font-mono text-xs font-bold transition ${
                      selectedWorkloadCategory === cat.id
                        ? "bg-[#18181b] text-white shadow-xs"
                        : "bg-stone-50 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Requirement Selection Radios */}
              <div className="space-y-2.5 mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400">
                  Select Architectural Requirement:
                </label>
                {gcpDecisionOptions[selectedWorkloadCategory].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedRequirement(opt.id)}
                    className={`w-full text-left rounded-2xl border p-3.5 text-xs transition flex items-center justify-between ${
                      selectedRequirement === opt.id
                        ? "border-orange-500 bg-orange-50/60 font-bold text-orange-950 shadow-xs"
                        : "border-[#e7e3da] bg-stone-50/50 text-stone-700 hover:border-stone-300"
                    }`}
                  >
                    <span>{opt.title}</span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        selectedRequirement === opt.id ? "bg-orange-500" : "bg-stone-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Active Recommendation Card */}
              {(() => {
                const match = gcpDecisionOptions[selectedWorkloadCategory].find(
                  (o) => o.id === selectedRequirement
                );
                if (!match) return null;
                return (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50/30 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-orange-200/60">
                      <span className="font-mono text-[11px] font-bold text-stone-500 uppercase">
                        Recommended GCP Primitive
                      </span>
                      <span className="rounded-lg bg-orange-600 text-white px-3 py-1 font-mono text-xs font-bold shadow-xs">
                        {match.service}
                      </span>
                    </div>

                    <div className="mt-3.5 space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-stone-900">Why this service: </span>
                        <span className="text-stone-700">{match.why}</span>
                      </div>
                      <div>
                        <span className="font-bold text-amber-800">Architectural Trade-Off: </span>
                        <span className="text-stone-600">{match.tradeoff}</span>
                      </div>
                      <div className="pt-2 border-t border-orange-200/40 text-rose-800 font-mono text-[11px]">
                        <strong>Avoid Anti-Pattern: </strong>
                        {match.antiPattern}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* TOOL 2: BIGQUERY SLOT & PARTITION SCAN COST SIMULATOR (COL-5) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      BigQuery Slot & Partition Scan Simulator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate Bytes Scanned & The BigQuery Cost Explosion (Sections 26–29)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Data Sizer
                </span>
              </div>

              {/* Sliders & Controls */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Total Analytics Table Size:</span>
                    <span className="font-mono text-orange-600">{tableSizeTb} TB</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={tableSizeTb}
                    onChange={(e) => setTableSizeTb(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Query Optimization Strategy:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: "unpartitioned-full", label: "Full Scan (0%)" },
                      { id: "partitioned-only", label: "Date Part (96%)" },
                      { id: "partitioned-clustered", label: "Part+Cluster (99.5%)" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setQueryStrategy(s.id)}
                        className={`rounded-xl py-2 px-1 text-center text-[11px] font-bold transition ${
                          queryStrategy === s.id
                            ? "border border-orange-500 bg-orange-50 text-orange-950 font-mono shadow-xs"
                            : "border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Queries Per Day:</span>
                    <span className="font-mono text-stone-700">{queriesPerDay.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={queriesPerDay}
                    onChange={(e) => setQueriesPerDay(Number(e.target.value))}
                    className="w-full accent-stone-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Pricing Model:</span>
                    <span className="font-mono text-stone-700">{pricingModel}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "on-demand", label: "On-Demand ($6.25/TB)" },
                      { id: "edition-reservation", label: "Edition Slot Reservation" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setPricingModel(m.id)}
                        className={`rounded-xl py-1.5 px-2 text-center text-xs font-bold transition ${
                          pricingModel === m.id
                            ? "bg-[#18181b] text-white shadow-xs"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real-time Math Output */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Bytes Scanned per Query:</span>
                  <span className="font-mono font-bold text-[#18181b]">
                    {bigqueryCalculations.bytesScannedPerQueryTb} TB ({(bigqueryCalculations.scanFraction * 100).toFixed(1)}% of table)
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Total Monthly Scanned:</span>
                  <span className="font-mono font-bold text-stone-800">
                    {bigqueryCalculations.totalMonthlyScannedTb.toLocaleString()} TB / mo
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Estimated Monthly Billing:</span>
                  <span
                    className={`font-mono font-bold text-sm ${
                      bigqueryCalculations.monthlyCostEstimate > 10000
                        ? "text-rose-600"
                        : "text-emerald-700"
                    }`}
                  >
                    ${bigqueryCalculations.monthlyCostEstimate.toLocaleString()} / mo
                  </span>
                </div>

                <div className="pt-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase">Billing Summary:</div>
                  <p className="text-xs text-stone-700 mt-0.5 leading-snug font-mono">
                    {bigqueryCalculations.costSummary}
                  </p>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div
                className={`mt-4 rounded-xl p-3 text-xs leading-relaxed ${
                  bigqueryCalculations.riskLevel === "critical"
                    ? "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                    : bigqueryCalculations.riskLevel === "moderate"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                }`}
              >
                {bigqueryCalculations.strategyNote}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 3: GCP GAMEDAY FAILURE SIMULATOR (8 SCENARIOS FROM SECTIONS 59–66) */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e7e3da]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-mono text-[10px] font-bold text-rose-700 uppercase mb-2">
                <AlertTriangle size={12} />
                <span>Sections 59–66 Failure Game</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                Google Cloud GameDay: 8 Production Incident Simulations
              </h2>
              <p className="text-xs md:text-sm text-stone-500 mt-1">
                Test your architectural recovery across VM crashes, zonal outages, Cloud Run DB storms, Pub/Sub redeliveries, BigQuery cost leaks, object overwrites, leaked keys, and regional DR.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2 text-right">
                <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">GameDay Score</div>
                <div className="text-lg font-mono font-bold text-orange-600">{gameScore} / 80 Pts</div>
              </div>
            </div>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {gcpGameDayScenarios.map((sc, idx) => {
              const status = gameHistory[idx];
              return (
                <button
                  key={sc.id}
                  onClick={() => {
                    setGameScenarioIndex(idx);
                    setGameSelection(null);
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-bold transition ${
                    gameScenarioIndex === idx
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  <span>Failure {sc.id}</span>
                  {status === "correct" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                  {status === "incorrect" && <span className="h-2 w-2 rounded-full bg-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const currentScenario = gcpGameDayScenarios[gameScenarioIndex];

            return (
              <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50/70 p-6">
                <h3 className="text-base font-bold text-[#18181b] mb-2">{currentScenario.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">{currentScenario.context}</p>

                <div className="rounded-xl bg-orange-50/80 border border-orange-200 p-3.5 mb-6 text-xs font-bold text-orange-950">
                  Question: {currentScenario.question}
                </div>

                <div className="space-y-3">
                  {currentScenario.options.map((opt) => {
                    const isSelected = gameSelection === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleGameAnswer(opt)}
                        className={`w-full text-left rounded-2xl border p-4 text-xs transition ${
                          isSelected
                            ? opt.isCorrect
                              ? "border-emerald-500 bg-emerald-50/80 text-emerald-950"
                              : "border-rose-500 bg-rose-50/80 text-rose-950"
                            : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                              isSelected
                                ? opt.isCorrect
                                  ? "bg-emerald-600 text-white"
                                  : "bg-rose-600 text-white"
                                : "bg-stone-100 text-stone-700"
                            }`}
                          >
                            {opt.id}
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold">{opt.text}</p>
                            {isSelected && (
                              <div className="mt-3 pt-3 border-t border-stone-200/60">
                                <span
                                  className={`inline-block font-bold text-[11px] uppercase tracking-wider mb-1 ${
                                    opt.isCorrect ? "text-emerald-700" : "text-rose-700"
                                  }`}
                                >
                                  {opt.verdict}
                                </span>
                                <p className="text-xs text-stone-600 leading-relaxed">
                                  {opt.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

        {/* CURRICULUM TOPIC EXPLORER (12 TOPICS) */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* SIDEBAR NAVIGATION (COL-4) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#e7e3da] mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500">
                  Module 9 Topic Index
                </span>
                <span className="rounded-full bg-orange-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-orange-700">
                  12 Topics
                </span>
              </div>

              <div className="space-y-1.5 max-h-[720px] overflow-y-auto pr-1">
                {topics.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left rounded-2xl p-3.5 text-xs transition flex flex-col gap-1 ${
                      selectedTopic === idx
                        ? "bg-[#18181b] text-white shadow-md"
                        : "bg-stone-50/80 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] font-bold ${
                          selectedTopic === idx ? "text-orange-400" : "text-orange-600"
                        }`}
                      >
                        {t.week}
                      </span>
                      <span
                        className={`rounded-md px-2 py-0.5 font-mono text-[9px] font-bold ${
                          selectedTopic === idx ? "bg-white/10 text-stone-300" : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <span className="font-bold leading-snug">{t.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">Curriculum Milestone</h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Modules 1 through 9 master foundational cloud systems across AWS, Azure, and Google Cloud. Next: Design systems spanning all three clouds.
              </p>
              <button
                onClick={() => navigate("/learning/cloud/multicloud")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Next: Module 10 Multi-Cloud →
              </button>
            </div>
          </div>

          {/* MAIN TOPIC CONTENT (COL-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm">
              {/* TOPIC HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {currentTopic.week} • {currentTopic.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#18181b] mt-1">
                    {currentTopic.title}
                  </h2>
                  <p className="text-xs md:text-sm text-stone-500 mt-1 font-mono">
                    Focus: {currentTopic.focus}
                  </p>
                </div>
              </div>

              {/* THEORY BODY */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Systems Theory & Architectural Analysis
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 font-normal">
                  {currentTopic.theory}
                </p>
              </div>

              {/* ASCII / TECHNICAL TOPOLOGY DIAGRAM */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Architectural Blueprint & Data Plane Flow
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">GCP Topology</span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-emerald-400 shadow-inner">
                  <pre>{currentTopic.diagram}</pre>
                </div>
              </div>

              {/* KEY TAKEAWAYS */}
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Core Invariants & Well-Architected Takeaways
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentTopic.keyTakeaways.map((point, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs leading-relaxed text-stone-700 flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CODE / CONFIGURATION EXAMPLE */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Production Implementation Artifact
                  </h4>
                  <button
                    onClick={() => copyCode(currentTopic.codeExample, currentTopic.id)}
                    className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 py-1 text-[11px] font-mono text-stone-600 hover:bg-stone-50 transition"
                  >
                    {copiedCodeId === currentTopic.id ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Artifact</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-stone-200 shadow-inner">
                  <pre>{currentTopic.codeExample}</pre>
                </div>
              </div>

              {/* TOPIC NAVIGATION FOOTER */}
              <div className="mt-10 flex items-center justify-between pt-6 border-t border-[#e7e3da]">
                <button
                  disabled={selectedTopic === 0}
                  onClick={() => setSelectedTopic((prev) => Math.max(0, prev - 1))}
                  className="flex items-center gap-2 rounded-xl border border-stone-200 px-4 py-2 text-xs font-bold text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 transition"
                >
                  <ArrowLeft size={14} />
                  <span>Previous Topic</span>
                </button>
                <span className="font-mono text-xs text-stone-400 font-bold">
                  {selectedTopic + 1} of {topics.length}
                </span>
                <button
                  disabled={selectedTopic === topics.length - 1}
                  onClick={() => setSelectedTopic((prev) => Math.min(topics.length - 1, prev + 1))}
                  className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2 text-xs font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-800 transition shadow-xs"
                >
                  <span>Next Topic</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* EMBEDDED NOVA AI TUTOR DRAWER */}
        {SHOW_NOVA_AI && showAiTutor && (
          <div className="fixed bottom-6 right-6 z-50 w-full max-w-md shadow-2xl rounded-3xl overflow-hidden border border-orange-500/40 bg-white">
            <div className="bg-[#18181b] px-4 py-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-xs">
                <Sparkles size={16} className="text-orange-400" />
                <span>Nova AI GCP Architect Tutor</span>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-stone-400 hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            </div>
            <div className="h-[480px]">
              <LearningRo
                module="gcp"
                currentTopic={`gcp-${currentTopic.id}`}
                subtopic={currentTopic.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
