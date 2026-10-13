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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 8: AZURE ARCHITECTURE                               */
/* Weeks 14–16: From Azure Primitives to Production Architecture               */
/* Azure 5 Pillars, Entra ID, Managed Identities, VNet, NSG, Private Link,    */
/* VMSS, Blob Storage, Azure SQL, Cosmos DB, Managed Redis, Front Door,       */
/* App Gateway v2, Functions Flex, AKS Automatic, Service Bus, Event Grid,     */
/* Azure Monitor, Key Vault & Production AzureShop 10M-User Blueprint         */
/* -------------------------------------------------------------------------- */

export default function CloudAzure() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: Azure Service Matcher State
  const [selectedWorkloadCategory, setSelectedWorkloadCategory] = useState("identity");
  const [selectedRequirement, setSelectedRequirement] = useState("workload-identity");

  // Tool 2: Cosmos DB Partitioning & Consistency Simulator State
  const [consistencyLevel, setConsistencyLevel] = useState("Session"); // "Strong", "BoundedStaleness", "Session", "ConsistentPrefix", "Eventual"
  const [partitionKeyStrategy, setPartitionKeyStrategy] = useState("userId"); // "userId", "country", "status"
  const [trafficVolumeRps, setTrafficVolumeRps] = useState(25000);

  // Tool 3: Azure GameDay Failure Simulator State (7 Scenarios from Sections 48–54)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Tool 2: Cosmos DB Calculations
  const cosmosCalculations = useMemo(() => {
    let ruCostMultiplier = 1.0;
    let readLatencyMs = 2;
    let consistencyDescription = "";
    let dataAgreement = "Monotonically reads own writes within single client session.";

    if (consistencyLevel === "Strong") {
      ruCostMultiplier = 2.0; // Strong reads cost 2x RUs because replicas must be read synchronously
      readLatencyMs = 12;
      consistencyDescription =
        "Linearizable consistency. Reads are guaranteed to return the most recent committed version across all global replicas. High read latency & bounded to single-region write quorum.";
      dataAgreement = "100% synchronous quorum across all replicas before commit.";
    } else if (consistencyLevel === "BoundedStaleness") {
      ruCostMultiplier = 2.0;
      readLatencyMs = 6;
      consistencyDescription =
        "Reads lag behind writes by at most K versions or T time intervals (e.g., 5 seconds / 100,000 updates). Predictable lag boundary.";
      dataAgreement = "Replicas guaranteed within max lag window K or T.";
    } else if (consistencyLevel === "Session") {
      ruCostMultiplier = 1.0; // Baseline 1 RU
      readLatencyMs = 2;
      consistencyDescription =
        "Default Azure setting. Guarantees monotonic reads, monotonic writes, and Read-Your-Own-Writes within the writer's session token. Optimal balance of latency, cost, and availability.";
      dataAgreement = "Read-Your-Own-Writes for writer; eventual for other sessions.";
    } else if (consistencyLevel === "ConsistentPrefix") {
      ruCostMultiplier = 1.0;
      readLatencyMs = 2;
      consistencyDescription =
        "Updates are guaranteed to be seen in the exact order they were committed. Readers never observe out-of-order writes, but may read slightly stale state.";
      dataAgreement = "Order preserved without gaps; lag is unconstrained.";
    } else if (consistencyLevel === "Eventual") {
      ruCostMultiplier = 1.0;
      readLatencyMs = 1.5;
      consistencyDescription =
        "Weakest consistency. Lowest read latency and highest throughput. In the absence of new writes, replicas eventually converge to identical state.";
      dataAgreement = "No ordering or freshness guarantee immediately post-write.";
    }

    // Partition Key Analysis
    let partitionDistribution = "balanced";
    let hotPartitionRisk = "Low";
    let maxPartitionTrafficPct = 5;
    let partitionAnalysis = "";

    if (partitionKeyStrategy === "userId") {
      partitionDistribution = "balanced";
      hotPartitionRisk = "Very Low (Healthy Horizontal Sharding)";
      maxPartitionTrafficPct = 3;
      partitionAnalysis =
        "High cardinality key with millions of distinct values. Traffic distributes evenly across all physical partitions (10,000 RU/s limit per partition is respected).";
    } else if (partitionKeyStrategy === "country") {
      partitionDistribution = "skewed";
      hotPartitionRisk = "CRITICAL HOT PARTITION";
      maxPartitionTrafficPct = 72; // India/US taking 72%
      partitionAnalysis =
        "Severe key skew! 72% of all traffic hits the single partition for 'India'. That physical partition throttles with HTTP 429 (RequestRateTooLarge), while remaining partitions sit idle.";
    } else if (partitionKeyStrategy === "status") {
      partitionDistribution = "bottleneck";
      hotPartitionRisk = "CRITICAL BOTTLENECK";
      maxPartitionTrafficPct = 90;
      partitionAnalysis =
        "Extremely low cardinality ('PENDING', 'COMPLETED'). Over 90% of write traffic targets 'PENDING', causing devastating storage and throughput throttling.";
    }

    const estimatedRUs = Math.round(trafficVolumeRps * ruCostMultiplier);

    return {
      ruCostMultiplier,
      readLatencyMs,
      consistencyDescription,
      dataAgreement,
      partitionDistribution,
      hotPartitionRisk,
      maxPartitionTrafficPct,
      partitionAnalysis,
      estimatedRUs,
    };
  }, [consistencyLevel, partitionKeyStrategy, trafficVolumeRps]);

  // Decision Tree Matcher Data
  const azureDecisionOptions = {
    identity: [
      {
        id: "workload-identity",
        title: "Workload to Azure Service Authentication (VM, AKS, Function to Key Vault / Blob)",
        service: "Microsoft Entra Managed Identity (User-Assigned)",
        why: "Eliminates credentials in code; automated token generation via IMDS; decoupled lifecycle for multi-resource sharing.",
        tradeoff: "Scoped to Azure ecosystem; cross-cloud workloads require Entra Workload ID Federation via OIDC.",
        antiPattern: "Storing client secret strings in appsettings.json or Kubernetes ConfigMaps.",
      },
      {
        id: "human-sso-governance",
        title: "Enterprise Workforce Identity, MFA & Conditional Access",
        service: "Microsoft Entra ID (P1/P2) + Azure RBAC",
        why: "Centralized identity provider with adaptive risk policies, Privileged Identity Management (PIM), and granular scope RBAC.",
        tradeoff: "Requires proper tenant architecture (Management Groups) to prevent permission inheritance sprawl.",
        antiPattern: "Assigning 'Contributor' role at the Subscription root to developer accounts.",
      },
    ],
    compute: [
      {
        id: "k8s-managed-containers",
        title: "Microservices & Kubernetes Workloads with Zero Node Ops",
        service: "Azure Kubernetes Service (AKS Automatic)",
        why: "Automated workload-driven node provisioning, self-healing, automated K8s version upgrades, and built-in security baselines.",
        tradeoff: "Less low-level OS tuning than AKS Standard; opinionated networking and ingress defaults.",
        antiPattern: "Manually configuring unmanaged VM fleets with kubeadm when AKS Automatic eliminates control-plane maintenance.",
      },
      {
        id: "serverless-event-compute",
        title: "Event-Driven Compute & HTTP APIs with Independent Per-Function Scaling",
        service: "Azure Functions (Flex Consumption Plan)",
        why: "Pay-as-you-go serverless with fast cold-start mitigation, VNet integration, and individual function concurrency controls.",
        tradeoff: "Requires connection pooling / backpressure to prevent saturating downstream relational databases.",
        antiPattern: "Running persistent 24/7 TCP socket listeners on consumption serverless functions.",
      },
      {
        id: "vm-fleet-autoscale",
        title: "Stateful Virtual Server Fleets, Custom OS Kernels, or Windows Monoliths",
        service: "Azure Virtual Machine Scale Sets (VMSS)",
        why: "Horizontal fleet autoscaling across Availability Zones, automated OS rolling upgrades, and fault domain isolation.",
        tradeoff: "Undifferentiated heavy lifting: OS patching, antivirus agent management, and slower scale-out compared to containers.",
        antiPattern: "Running standalone single-instance VMs without zone redundancy for mission-critical APIs.",
      },
    ],
    storage: [
      {
        id: "object-datalake",
        title: "Images, Videos, Data Lake Parquet Files & Long-Term Cold Backups",
        service: "Azure Blob Storage (Data Lake Gen2)",
        why: "Hierarchical namespace for analytics, Hot/Cool/Cold/Archive access tiers, soft delete, and immutable WORM policies.",
        tradeoff: "Object storage does not provide POSIX random file byte locking.",
        antiPattern: "Relying solely on geo-replication as a backup while leaving Soft Delete disabled.",
      },
      {
        id: "relational-acid-sql",
        title: "Enterprise Relational OLTP (ACID, Complex Joins, Foreign Keys)",
        service: "Azure SQL Database (Business Critical / Hyperscale)",
        why: "Fully managed SQL engine with automated backups, zone-redundant HA, and Auto-Failover Groups with read-scale out.",
        tradeoff: "Vertical scaling boundaries on standard tiers; Hyperscale required for multi-terabyte datasets.",
        antiPattern: "Exposing the SQL Server public endpoint to the internet instead of using a Private Endpoint.",
      },
      {
        id: "distributed-nosql-global",
        title: "Globally Distributed Document Store with Single-Digit Millisecond Latency",
        service: "Azure Cosmos DB (NoSQL API)",
        why: "Turnkey multi-region replication, horizontal scaling through partition keys, and 5 tunable consistency levels.",
        tradeoff: "Schema design must follow query access patterns; cross-partition queries incur heavy RU penalties.",
        antiPattern: "Selecting a low-cardinality partition key (e.g., country code), creating hot partition bottlenecks.",
      },
      {
        id: "in-memory-caching",
        title: "Sub-Millisecond In-Memory Caching & Session Acceleration",
        service: "Azure Managed Redis (Enterprise)",
        why: "Microsecond read/write operations, multi-region active-active clustering, and automated persistence.",
        tradeoff: "In-memory storage is volatile and expensive per GB; requires cache stampede safeguards.",
        antiPattern: "Starting new architectures on deprecated Azure Cache for Redis Basic/Standard tiers.",
      },
    ],
    messaging: [
      {
        id: "durable-enterprise-queue",
        title: "Transactional Command Queuing, Work Decoupling & Dead-Letter Processing",
        service: "Azure Service Bus (Queues & Topics)",
        why: "Strict at-least-once or FIFO ordering, sessions, duplicate detection window, and built-in Dead-Letter Queue (DLQ).",
        tradeoff: "Pull-based consumer architecture; slightly lower raw throughput than event ingestion streams like Event Hubs.",
        antiPattern: "Using Event Grid when you need a reliable work queue with message locks and backpressure.",
      },
      {
        id: "reactive-event-routing",
        title: "High-Throughput Reactive Event Distribution ('Something Happened')",
        service: "Azure Event Grid (Event Subscriptions & Namespaces)",
        why: "Push-based serverless event routing, native Azure service integrations (Blob created, VM state change), sub-10ms delivery.",
        tradeoff: "No strict ordering guarantee; consumers must be idempotent and handle out-of-order deliveries.",
        antiPattern: "Using Event Grid as a heavy payload message bus (event payloads should ideally remain under 64KB).",
      },
    ],
    edge: [
      {
        id: "global-edge-cdn-waf",
        title: "Global HTTP Ingress, Anycast Edge Acceleration & Multi-Region Failover",
        service: "Azure Front Door (Standard / Premium)",
        why: "Microsoft global Anycast edge network, dynamic route optimization, integrated edge WAF, and Private Link origin security.",
        tradeoff: "Global Layer 7 traffic router; does not perform internal intra-VNet microservice load balancing.",
        antiPattern: "Deploying Front Door Classic (retiring March 2027) or bypassing Front Door to hit origins directly.",
      },
      {
        id: "regional-microservice-gateway",
        title: "Regional Layer-7 Path-Based Reverse Proxy & Internal Kubernetes Ingress",
        service: "Azure Application Gateway v2 (with WAF)",
        why: "Regional URL path routing (/api/orders vs /images), TLS termination, cookie affinity, and zone-redundant auto-scaling.",
        tradeoff: "Regional boundary only; cannot distribute global ingress across multiple geographic regions.",
        antiPattern: "Using deprecated Application Gateway v1 SKUs (retired April 2026).",
      },
    ],
  };

  // 7 GameDay Failure Scenarios from Sections 48–54 of brief
  const azureGameDayScenarios = [
    {
      id: 1,
      title: "Scenario 1: Regional Application Gateway Node Dies (Section 48)",
      context:
        "At 11:15 UTC, a hardware rack fault in East US takes down the active compute node for your regional Application Gateway. Incoming checkout traffic to `/api/orders` experiences immediate TCP resets.",
      question: "What is the architectural design that eliminates this single point of failure?",
      options: [
        {
          id: "A",
          text: "Deploy Application Gateway v2 with Zone Redundancy (minimum 2 instances spread across Availability Zones), backed globally by Azure Front Door with automated health probes.",
          verdict: "Correct! Resilient Multi-Layer Ingress",
          explanation:
            "Zone-redundant Application Gateway v2 automatically absorbs intra-region datacenter faults. Concurrently, Azure Front Door detects regional gateway impairment within seconds and diverts global traffic to Region B.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Manually reconfigure public DNS A records to route users directly to the private IP address of an AKS worker node.",
          verdict: "Anti-Pattern! Dangerous Exposure",
          explanation:
            "Exposing private AKS node IPs breaks TLS termination, circumvents WAF security, and causes DNS caching delays that prolong downtime.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Scenario 2: AKS Pod Crashes Under Memory Pressure (Section 49)",
      context:
        "A memory leak in the product search service causes Kubernetes to send a SIGKILL (OOMKilled) to Pod-3 in the `search-api` deployment. 15% of active user search queries terminate abruptly.",
      question: "How should a production AKS architecture handle pod crashes invisibly?",
      options: [
        {
          id: "A",
          text: "Configure Kubernetes liveness and readiness probes with a ReplicaSet count >= 3. The service endpoint immediately stops routing traffic to the dying pod while AKS launches a replacement.",
          verdict: "Correct! Self-Healing Microservices",
          explanation:
            "Readiness probes inform the internal kube-proxy and Ingress controller to drain traffic from unhealthy pods before replacement, preventing end-user dropped connections.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Log into the Azure Portal and click 'Restart AKS Cluster'.",
          verdict: "Catastrophic Anti-Pattern",
          explanation:
            "Restarting the entire Kubernetes cluster terminates all healthy workloads and causes an immediate total outage.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Scenario 3: Azure Managed Redis Instance Disappears (Section 50)",
      context:
        "The primary Azure Managed Redis cache cluster restarts due to an unexpected hypervisor crash. 80,000 requests per second that previously hit Redis cache miss simultaneously and hammer the backend database.",
      question: "What distributed failure mode is occurring, and how do you protect the database?",
      options: [
        {
          id: "A",
          text: "Cache Stampede (Thundering Herd). Mitigate by implementing request coalescing (single-flight), jittered TTLs, and a circuit breaker with stale-while-revalidate fallback.",
          verdict: "Correct! Cache-Aside Resilience",
          explanation:
            "When cache vanishes, thousands of concurrent requests must not all query the database simultaneously. Request coalescing collapses duplicate queries into a single DB lookup, while circuit breakers shed excess load.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Increase Azure SQL max compute size to 128 vCPUs so it can indefinitely absorb 80,000 un-cached queries per second.",
          verdict: "Financially Wasteful & Fragile",
          explanation:
            "Over-provisioning relational database scale to handle ephemeral cache outages is cost-prohibitive and fails when traffic doubles during flash sales.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Scenario 4: Complete Regional Outage Knocks Out Azure SQL in Region A (Section 51)",
      context:
        "A severe regional fiber cut severs Region A (Central India). The primary Azure SQL database is totally offline. The business SLA specifies RPO <= 1 minute and RTO <= 15 minutes.",
      question: "Which Azure SQL business continuity architecture achieves this SLA?",
      options: [
        {
          id: "A",
          text: "Azure SQL Auto-Failover Groups with Active Geo-Replication to Region B (South India). The read-write listener endpoint automatically reroutes client connections to the secondary.",
          verdict: "Correct! Automated Disaster Recovery",
          explanation:
            "Failover Groups provide a stable DNS connection string (`*.database.windows.net`) that automatically redirects client traffic to the promoted secondary in Region B without updating application configuration strings.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Rely on Geo-Restore from weekly automated backup blobs in Geo-Redundant Storage (GRS).",
          verdict: "SLA Violation!",
          explanation:
            "Geo-Restore from backup blobs takes several hours (RTO > 4 hours) and can lose up to 1 hour of data (RPO > 1h), violating strict business commitments.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Scenario 5: Cosmos DB Severe Hot Partition Bottleneck (Section 52)",
      context:
        "An e-commerce order table partitions by `/country`. During an Indian holiday sale, 70% of total traffic targets `country = 'India'`. CloudWatch/Azure Monitor reports high HTTP 429 throttling even though overall database CPU is only 35%.",
      question: "Why is the database failing despite low overall utilization, and what is the fix?",
      options: [
        {
          id: "A",
          text: "Distributed systems fail on localized bottlenecks! The physical partition holding 'India' exceeds its 10,000 RU/s limit. Fix by choosing a high-cardinality key like `/userId` or a composite key (`/country_orderId`).",
          verdict: "Correct! Horizontal Partition Key Design",
          explanation:
            "Aggregate metrics hide partition skew. A low-cardinality key bottles the entire workload into one physical replica set. High-cardinality keys distribute reads/writes evenly across all cluster nodes.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Change Cosmos DB consistency level from Session to Strong consistency.",
          verdict: "Incorrect",
          explanation:
            "Changing consistency to Strong increases read latency and doubles RU consumption, worsening the partition bottleneck.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      title: "Scenario 6: Azure Service Bus Consumer Crashes Repeatedly (Section 53)",
      context:
        "A payment processing worker reads a message from a Service Bus queue, attempts to parse a malformed JSON payload, crashes with an unhandled exception, and never calls `CompleteAsync()`.",
      question: "What happens to the message, and how do you prevent an infinite crash loop?",
      options: [
        {
          id: "A",
          text: "When the message lock duration expires, Service Bus re-exposes the message. After reaching `MaxDeliveryCount` (e.g. 5 retries), Service Bus moves the poison message to the Dead-Letter Queue (DLQ).",
          verdict: "Correct! Poison Pill Isolation",
          explanation:
            "Dead-Letter Queues prevent poison messages from consuming CPU cycles in an infinite retry storm. The DLQ holds the offending message for diagnostic investigation without halting the worker pipeline.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Service Bus permanently deletes the message immediately when the worker crashes.",
          verdict: "Incorrect",
          explanation:
            "Service Bus Peek-Lock mode guarantees that unacknowledged messages are safely preserved and redelivered.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      title: "Scenario 7: Serverless Azure Function Surge Overwhelms Azure SQL (Section 54)",
      context:
        "An Event Grid burst triggers 15,000 concurrent Azure Function instances. Each function immediately opens a direct connection to an Azure SQL Database. The database connection pool hits 100% capacity, queries time out, and functions retry aggressively.",
      question: "What architectural component must be inserted between serverless functions and relational databases?",
      options: [
        {
          id: "A",
          text: "Insert an Azure Service Bus queue as an asynchronous backpressure buffer, or use per-function concurrency caps on the Flex Consumption plan to regulate database connection demand.",
          verdict: "Correct! Backpressure & Rate Regulation",
          explanation:
            "Serverless compute scales faster than relational database connection pools. Queues decouple rapid burst intake from steady relational persistence, preventing cascading system death.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Increase Azure Function execution timeout from 5 minutes to 60 minutes.",
          verdict: "Disastrous Failure",
          explanation:
            "Extending timeouts causes blocked functions to linger and accumulate, exhausting socket resources and compounding the database lock contention.",
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

  // 12 In-Depth Azure Architecture Topics
  const topics = [
    {
      id: 0,
      title: "The Azure Mental Model & 5 Well-Architected Pillars",
      week: "Foundations",
      focus: "Tenants, Management Groups, Subscriptions, Resource Groups & 5 Pillars",
      badge: "Architecture Foundation",
      theory:
        "Azure organizes resources across strict administrative, billing, and technical boundaries: Microsoft Entra Tenant (Identity) → Management Groups (Governance) → Subscriptions (Quota & Billing) → Resource Groups (Lifecycle Management) → Resources. Placing resources within the same Resource Group does NOT grant automatic technical trust. Architecture in Azure is evaluated through the 5 Well-Architected Framework Pillars: Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency.",
      diagram: `AZURE RESOURCE HIERARCHY & CONTROL PLANE
+-------------------------------------------------------------------------+
| MICROSOFT ENTRA TENANT (Identity Boundary: SAML / OIDC / MFA)           |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | MANAGEMENT GROUPS (Governance & Policy Inheritance)                 | |
| | - Root Management Group                                             | |
| |   ├── Landing Zones (Corp / Online)                                 | |
| |   └── Sandboxes / Decommissioned                                    | |
| +---------------------------------------------------------------------+ |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | SUBSCRIPTIONS (Billing, Quotas & IAM Scope Boundary)                | |
| | ├── Production Subscription (Enterprise Agreement / MCA)            | |
| | └── Development Subscription                                        | |
| +---------------------------------------------------------------------+ |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | RESOURCE GROUPS (Lifecycle & Deployment Grouping)                   | |
| | ├── rg-commerce-prod-eastus                                         | |
| | │   ├── VNet (Private Network Boundary)                             | |
| | │   ├── AKS Cluster (Compute Fleet)                                 | |
| | │   ├── Key Vault (Cryptographic Boundary)                         | |
| | │   └── Azure SQL (Database Engine)                                 | |
| |     *NOTE: Resources in same RG do NOT automatically trust each other!*|
| +---------------------------------------------------------------------+ |
+-------------------------------------------------------------------------+

AZURE WELL-ARCHITECTED FRAMEWORK (5 PILLARS):
1. Reliability: Multi-region failover, zone redundancy, self-healing circuits.
2. Security: Defense in depth, zero-trust, Entra managed identities, Private Link.
3. Cost Optimization: Right-sizing, reservation discounts, cold blob archiving.
4. Operational Excellence: Infrastructure as Code (Bicep/Terraform), automated telemetry.
5. Performance Efficiency: Horizontal scaling (VMSS/AKS), Redis caching, CDN edge.`,
      keyTakeaways: [
        "A Tenant is an identity boundary; a Subscription is a quota and billing boundary; a Resource Group is a lifecycle boundary.",
        "Administrative grouping (Resource Group) does NOT equal technical network or authorization trust.",
        "Azure RBAC permissions inherit downwards: Root Management Group → Subscription → Resource Group → Individual Resource.",
        "Always evaluate trade-offs across all 5 Azure Well-Architected Pillars rather than optimizing purely for raw compute power.",
      ],
      codeExample: `# Azure CLI: Create Resource Group and apply Azure Policy tag enforcement
az group create \\
  --name "rg-commerce-prod-eastus" \\
  --location "eastus2" \\
  --tags Environment=Production Department=Engineering Workload=Commerce

# Query resource group resources with Microsoft Graph & Azure Resource Graph
az graph query -q "Resources | where resourceGroup =~ 'rg-commerce-prod-eastus' | project name, type, location" -o table`,
    },
    {
      id: 1,
      title: "Microsoft Entra ID & Managed Identities",
      week: "Foundations",
      focus: "AuthN vs AuthZ, Azure RBAC Scopes & Entra Workload Identity",
      badge: "Identity & Security",
      theory:
        "Microsoft Entra ID (formerly Azure Active Directory) is the cloud identity and access management plane. Authentication (AuthN - 'Are you really Sam?') proves identity, while Authorization (AuthZ - 'What can Sam do?') evaluates permissions via Azure RBAC. Managed Identities eliminate credentials in source code: Azure automatically handles token acquisition and rotation via the Instance Metadata Service (IMDS). Modern AKS workloads utilize Microsoft Entra Workload Identity via OIDC federation.",
      diagram: `MANAGED IDENTITY AUTHENTICATION FLOW (ZERO HARDCODED SECRETS)
+------------------------+
|   AZURE VM / AKS POD   |
+------------------------+
            |
            | (1) GET http://169.254.169.254/metadata/identity/oauth2/token
            |     (Instance Metadata Service - IMDS)
            v
+------------------------+
|  MICROSOFT ENTRA ID    |
+------------------------+
            |
            | (2) Returns OAuth 2.0 JWT Access Token (Valid for 24h, auto-rotated)
            v
+------------------------+
|   AZURE VM / AKS POD   |
+------------------------+
            |
            | (3) HTTPS Request with Header: "Authorization: Bearer <JWT>"
            v
+------------------------+
| AZURE KEY VAULT / BLOB |
+------------------------+
            |
            v
EVALUATION: Entra ID validates Token Signature -> Azure RBAC checks Role Assignment
Scope: /subscriptions/.../resourceGroups/rg-prod/providers/Microsoft.KeyVault/...
Result: ALLOW sops-decrypt OR DENY`,
      keyTakeaways: [
        "Never store client secrets, passwords, or connection strings in configuration files or container environment variables.",
        "System-Assigned Managed Identity is tied to the lifecycle of a single resource; User-Assigned Identity is an independent reusable asset.",
        "Azure RBAC defines: Principal (Who) + Role (What) + Scope (Where: Subscription, RG, or Resource).",
        "Entra Workload Identity allows Kubernetes Service Accounts to project Entra tokens directly into pods via OIDC.",
      ],
      codeExample: `# Bicep: Assign 'Key Vault Secrets User' role to a User-Assigned Managed Identity
resource appIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'id-commerce-api-prod'
  location: resourceGroup().location
}

// Built-in 'Key Vault Secrets User' Role Definition ID
var kvSecretsUserRoleId = '4633458b-17de-408a-b874-0445c86b69e6'

resource rbacAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(appIdentity.id, kvSecretsUserRoleId, keyVault.id)
  scope: keyVault
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', kvSecretsUserRoleId)
    principalId: appIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}`,
    },
    {
      id: 2,
      title: "Azure Virtual Networks: Subnets, NSGs & Private Endpoints",
      week: "Foundations",
      focus: "VNet Architecture, Stateful NSG Rules, Service Endpoints vs Private Link",
      badge: "VNet Networking",
      theory:
        "Azure Virtual Network (VNet) provides isolated private networking. Subnets segment the address space (e.g. Ingress, App, Data). Network Security Groups (NSGs) act as stateful packet filters evaluated at the subnet or NIC level. While Service Endpoints route traffic across the Azure backbone, Private Endpoints (Azure Private Link) project a private IP address into your VNet for PaaS services (SQL, Storage, Key Vault), ensuring zero internet exposure.",
      diagram: `SECURE 3-TIER VNET ARCHITECTURE WITH PRIVATE ENDPOINTS (10.20.0.0/16)
+--------------------------------------------------------------------------+
| AZURE VNET: vnet-commerce-prod (10.20.0.0/16)                            |
|                                                                          |
| +----------------------------------------------------------------------+ |
| | SUBNET 1: Ingress Subnet (10.20.1.0/24)                              | |
| | [ Application Gateway v2 (WAF) ] - Public IP (HTTPS 443)             | |
| | NSG: Allow 443 from Internet; Deny all other inbound                 | |
| +-----------------------------------+----------------------------------+ |
|                                     | Private TCP 8080                   |
|                                     v                                    |
| +----------------------------------------------------------------------+ |
| | SUBNET 2: Application Subnet (10.20.2.0/24)                          | |
| | [ AKS Nodes / VMSS Microservices ]                                   | |
| | NSG: Allow TCP 8080 from Ingress Subnet; Deny Internet Inbound       | |
| +-----------------------------------+----------------------------------+ |
|                                     | Private TCP 1433 / 443             |
|                                     v                                    |
| +----------------------------------------------------------------------+ |
| | SUBNET 3: Data & Private Endpoints Subnet (10.20.3.0/24)             | |
| | [ Private Endpoint: 10.20.3.15 ] ---> Azure SQL Database             | |
| | [ Private Endpoint: 10.20.3.20 ] ---> Azure Blob Storage             | |
| | [ Private Endpoint: 10.20.3.25 ] ---> Azure Key Vault                | |
| | NSG: Allow inbound strictly from Application Subnet                  | |
| +----------------------------------------------------------------------+ |
+--------------------------------------------------------------------------+

SERVICE ENDPOINTS vs PRIVATE ENDPOINTS:
- Service Endpoint: Uses public IP space over Azure backbone; not assigned a private VNet IP.
- Private Endpoint: Allocates private VNet IP (NIC); true private isolation via Private Link!`,
      keyTakeaways: [
        "Network Security Groups (NSGs) are stateful: return traffic for an allowed outbound request is automatically permitted.",
        "Never connect application workloads directly to public database endpoints; always use Private Endpoints.",
        "Private DNS Zones (`privatelink.database.windows.net`) resolve the public FQDN to the local private VNet IP seamlessly.",
        "Chain NSG rules by specifying source and destination subnet CIDR blocks or application security groups.",
      ],
      codeExample: `# Azure CLI: Create Private Endpoint for Azure SQL Database
az network private-endpoint create \\
  --name "pe-commerce-sql-prod" \\
  --resource-group "rg-commerce-prod-eastus" \\
  --vnet-name "vnet-commerce-prod" \\
  --subnet "snet-data-private" \\
  --private-connection-resource-id "/subscriptions/.../servers/sql-commerce-prod" \\
  --group-id "sqlServer" \\
  --connection-name "conn-sql-pe"

# Link Private DNS Zone to automatically resolve SQL FQDN to Private IP
az network private-dns link vnet create \\
  --resource-group "rg-commerce-prod-eastus" \\
  --zone-name "privatelink.database.windows.net" \\
  --name "link-sql-vnet" \\
  --virtual-network "vnet-commerce-prod" \\
  --registration-enabled false`,
    },
    {
      id: 3,
      title: "Azure Compute: VMs, VM Scale Sets & Autoscaling Loops",
      week: "Foundations",
      focus: "Fault Domains, Availability Zones, Metric-Based & Predictive Scaling",
      badge: "Elastic Compute",
      theory:
        "Azure compute ranges from standalone IaaS Virtual Machines to Virtual Machine Scale Sets (VMSS). Two VMs in the same region do not provide high availability unless they reside in distinct Availability Zones (physically separated datacenters) and Fault Domains (distinct power and cooling). Autoscaling in VMSS operates as a closed feedback-control loop: Telemetry → Scaling Policy Evaluation → Capacity Adjustment → System Feedback.",
      diagram: `VM SCALE SETS (VMSS) MULTI-ZONE AUTOSCALING CONTROL LOOP
                    [ INCOMING USER LOAD ]
                              |
                              v
                  [ Application Gateway v2 ]
                /             |             \\
               v              v              v
     +--------------+  +--------------+  +--------------+
     | AZ-1 (Zone 1)|  | AZ-2 (Zone 2)|  | AZ-3 (Zone 3)|
     | [ VMSS VM-1 ]|  | [ VMSS VM-2 ]|  | [ VMSS VM-3 ]|
     +--------------+  +--------------+  +--------------+
            |                 |                 |
            +-----------------+-----------------+
                              |
                              v Telemetry Metrics
                     [ AZURE MONITOR ]
                     - Avg CPU > 70% for 5 min
                     - Request Count Per Target > 500
                              |
                              v Feedback Control Loop
                     [ AUTOSCALE ENGINE ]
                     Scale Out: +3 Instances (1 per Zone)
                     Cooldown: 300 seconds`,
      keyTakeaways: [
        "Never deploy standalone VMs for production workloads without distributing across at least 2 Availability Zones.",
        "VMSS automatically balances instance provisioning evenly across Availability Zones and fault domains.",
        "Autoscaling control loops require cooldown periods (e.g. 5 minutes) to avoid thrashing (rapid scale-out followed by immediate scale-in).",
        "Enable Automatic OS Image Upgrades on VMSS to patch host vulnerabilities with zero application downtime.",
      ],
      codeExample: `# Terraform: VMSS with Zone-Redundant Autoscale Configuration
resource "azurerm_orchestrated_virtual_machine_scale_set" "api_vmss" {
  name                = "vmss-commerce-api"
  resource_group_name = "rg-commerce-prod-eastus"
  location            = "eastus2"
  zones               = ["1", "2", "3"]
  sku_name            = "Standard_D4ds_v5"
  instances           = 6

  automatic_instance_repair {
    enabled = true
    grace_period = "PT10M"
  }
}`,
    },
    {
      id: 4,
      title: "Azure Blob Storage: Consistency, Access Tiers & Durability",
      week: "Foundations",
      focus: "Hot/Cool/Cold/Archive Tiers, Soft Delete, Versioning & Immutability",
      badge: "Object Storage",
      theory:
        "Azure Blob Storage provides massive object storage for unstructured data and data lakes (ADLS Gen2). Storage accounts offer 4 access tiers: Hot (frequently accessed), Cool (infrequent, lower storage cost, retrieval fee), Cold (rare, lowest cost online tier), and Archive (offline, hours retrieval time). Replication protects infrastructure availability, but accidental overwrites or malicious deletions require Soft Delete, Versioning, and Immutable Blob Storage (WORM).",
      diagram: `BLOB ACCESS TIERS & DATA PROTECTION LIFECYCLE
[ PUT Blob: catalog.parquet ]
        |
        v
+-------------------------------+  Day 0: High-frequency access
| HOT ACCESS TIER               |  Lowest transaction cost, highest storage fee
+---------------+---------------+
                |
                v 30 Days (Lifecycle Policy)
+-------------------------------+  Day 30: Infrequently accessed
| COOL ACCESS TIER              |  Lower storage cost, per-GB access fee
+---------------+---------------+
                |
                v 90 Days (Lifecycle Policy)
+-------------------------------+  Day 90: Rarely accessed
| COLD ACCESS TIER              |  Sub-second access, lowest online storage cost
+---------------+---------------+
                |
                v 180 Days (Lifecycle Policy)
+-------------------------------+  Day 180+: Cold compliance archive
| ARCHIVE ACCESS TIER           |  Lowest cost, offline status (rehydrate takes 1-15h)
+-------------------------------+

BLOB DURABILITY INVARIANT:
Replication (LRS/ZRS/GRS) protects against hardware disaster.
Soft Delete + Versioning + Immutable WORM protects against logical corruption & ransomware!`,
      keyTakeaways: [
        "Replication is NOT a backup: an accidental deletion replicates immediately across all geographical secondary regions!",
        "Enable Soft Delete (retains deleted blobs for N days) and Blob Versioning on all production storage accounts.",
        "Archive tier blobs are offline; reading an archive blob requires a rehydration process taking 1 to 15 hours.",
        "Use Azure Data Lake Storage (ADLS) Gen2 hierarchical namespace for big data analytics (Spark, Synapse, Databricks).",
      ],
      codeExample: `# Azure Storage Lifecycle Management Policy (JSON)
{
  "rules": [
    {
      "enabled": true,
      "name": "ArchiveAndPurgeOrderDocuments",
      "type": "Lifecycle",
      "definition": {
        "filters": { "blobTypes": [ "blockBlob" ], "prefixMatch": [ "invoices/" ] },
        "actions": {
          "baseBlob": {
            "tierToCool": { "daysAfterModificationGreaterThan": 30 },
            "tierToCold": { "daysAfterModificationGreaterThan": 90 },
            "tierToArchive": { "daysAfterModificationGreaterThan": 180 },
            "delete": { "daysAfterModificationGreaterThan": 2555 }
          }
        }
      }
    }
  ]
}`,
    },
    {
      id: 5,
      title: "Azure SQL Database: High Availability vs Disaster Recovery",
      week: "Foundations",
      focus: "Zone Redundancy, Active Geo-Replication, Auto-Failover Groups & PITR",
      badge: "Relational DB",
      theory:
        "Azure SQL Database is a managed relational PaaS database. Architecture requires distinguishing High Availability (HA - surviving local datacenter hardware faults) from Disaster Recovery (DR - surviving catastrophic regional outages). Zone-redundant HA automatically replicates transactions across Availability Zones. For regional disaster recovery, Auto-Failover Groups provide continuous asynchronous geo-replication and a unified read/write DNS listener endpoint.",
      diagram: `AZURE SQL HIGH AVAILABILITY (HA) vs DISASTER RECOVERY (DR)

1. INTRA-REGION HIGH AVAILABILITY (Zone-Redundant Premium/Business Critical):
   [ Primary Writer Node (AZ-1) ]
         \\             // Synchronous Quorum Commit
          v           v
   [ Secondary (AZ-2) ] [ Secondary (AZ-3) ] (Automatic failover in <15s with zero data loss!)

2. CROSS-REGION DISASTER RECOVERY (Auto-Failover Groups):
   REGION A (Primary - East US)               REGION B (Secondary - West US)
   +---------------------------------+        +---------------------------------+
   | Primary Database                |        | Read-Only Geo-Replica           |
   | [ Read/Write Listener Endpoint] | =====> | [ Read-Scale Out Endpoint ]     |
   +---------------------------------+ Async  +---------------------------------+
                    |                  Log
                    v                 Stream
   Connection String: "tcp:commerce-failover.database.windows.net,1433"
   (Stable DNS listener automatically redirects to Region B during disaster failover!)`,
      keyTakeaways: [
        "HA protects against local component failures; DR protects against complete geographic region severance.",
        "Auto-Failover Groups maintain stable DNS endpoints (`*.database.windows.net`), preventing application connection string updates during DR.",
        "Point-in-Time Recovery (PITR) continuously streams database transaction logs to paired storage, enabling second-granularity restore.",
        "Configure Read-Scale Out to offload heavy analytical reporting queries to the geo-secondary without impacting primary writer CPU.",
      ],
      codeExample: `# Azure CLI: Create an Auto-Failover Group across two Azure Regions
az sql failover-group create \\
  --name "fg-commerce-prod" \\
  --resource-group "rg-commerce-prod-eastus" \\
  --server "sql-commerce-primary-eastus" \\
  --partner-server "sql-commerce-secondary-westus" \\
  --failover-policy "Automatic" \\
  --grace-period 60 \\
  --add-db "db-commerce-core"`,
    },
    {
      id: 6,
      title: "Azure Cosmos DB: Horizontal Partitioning & 5 Consistency Levels",
      week: "Distributed Applications",
      focus: "Logical vs Physical Partitions, Hot Partitions & The 5 Consistency Models",
      badge: "NoSQL & Distributed Systems",
      theory:
        "Azure Cosmos DB is a globally distributed NoSQL database delivering single-digit millisecond latency at the 99th percentile. Horizontal scaling is driven by Partition Keys: logical partitions map onto physical partition sets (each capped at 50 GB storage and 10,000 RU/s). Cosmos DB offers 5 well-defined consistency levels trading consistency against latency, availability, and throughput: Strong, Bounded Staleness, Session (default), Consistent Prefix, and Eventual.",
      diagram: `COSMOS DB PARTITIONING & 5 CONSISTENCY LEVELS SPECTRUM
PARTITION KEY HORIZONTAL SCALING:
Logical Partitions (PK = /userId)           Physical Storage Partition (Max 10k RU/s)
[ usr_101 ] [ usr_102 ] [ usr_103 ] =====> [ Physical Partition 1: Replica Set A-B-C-D ]
[ usr_201 ] [ usr_202 ] [ usr_203 ] =====> [ Physical Partition 2: Replica Set E-F-G-H ]
*Even distribution ensures each partition stays within 10,000 RU/s throughput limit!*

THE 5 CONSISTENCY LEVELS SPECTRUM:
+---------------------------------------------------------------------------------+
| STRONG               BOUNDED STALENESS    SESSION           CONSISTENT PREFIX    EVENTUAL   |
+---------------------------------------------------------------------------------+
| Synchronous Quorum   Max K or T lag window Monotonic Read   Ordered Commits      Unordered  |
| Highest Latency      Bound on Staleness   Read-Own-Writes   No Out-of-Order      Lowest Lat |
| 2x RU Cost Reads     2x RU Cost Reads     1x RU Cost        1x RU Cost           1x RU Cost |
+---------------------------------------------------------------------------------+
Trade-off: Strong consistency guarantees linearizability but increases read latency and restricts writes to a single region.`,
      keyTakeaways: [
        "In Cosmos DB, partition keys must have high cardinality; low-cardinality keys (e.g. `/country`) cause fatal hot partition throttling.",
        "A physical partition throttles with HTTP 429 (RequestRateTooLarge) when traffic exceeds 10,000 RU/s, regardless of total cluster scale.",
        "Session consistency is the optimal default for web apps: users read their own writes immediately without paying a 2x RU penalty.",
        "Different domain entities warrant different consistency: financial ledgers require Strong; social likes use Eventual.",
      ],
      codeExample: `// C# .NET: Query Cosmos DB with Session Consistency Token
CosmosClient client = new CosmosClient(endpoint, tokenCredential, new CosmosClientOptions() {
    ConsistencyLevel = ConsistencyLevel.Session
});

Container container = client.GetContainer("CommerceDB", "Orders");

// High-speed point read targeting specific physical partition
ItemResponse<Order> response = await container.ReadItemAsync<Order>(
    id: "ord_9901",
    partitionKey: new PartitionKey("usr_101")
);
Console.WriteLine($"Request Charge: {response.RequestCharge} RUs, Latency: {response.Diagnostics.GetClientElapsedTime().TotalMilliseconds}ms");`,
    },
    {
      id: 7,
      title: "In-Memory Caching: Azure Managed Redis & Cache-Aside Resilience",
      week: "Distributed Applications",
      focus: "2026 Managed Redis Enterprise, Cache Stampede & Thundering Herd Defense",
      badge: "In-Memory Acceleration",
      theory:
        "Azure Managed Redis (powered by Redis Enterprise) is the modern 2026 standard for sub-millisecond in-memory caching (older Azure Cache for Redis tiers are retiring). The Cache-Aside pattern accelerates reads by checking cache before querying the database. However, cache failure creates extreme vulnerability: if Redis fails or keys expire simultaneously, hundreds of thousands of requests stampede the database, causing cascading backend failure.",
      diagram: `CACHE-ASIDE PATTERN & CACHE STAMPEDE MITIGATION
1. NORMAL CACHE-ASIDE FLOW:
Application ---> (1) GET product:101 ---> [ Azure Managed Redis ]
    |                                              |
    | (Cache Hit) <--- Return Cached JSON <--------+
    |
    +-----> (Cache Miss) ---> [ Azure SQL / Cosmos DB ]
                                       |
    <------- Return DB Record <--------+
    |
    +-----> (2) SET product:101 (TTL: 300s + Jitter) ---> [ Azure Managed Redis ]

2. THE CACHE STAMPEDE (THUNDERING HERD) PROBLEM:
Key 'flash_sale_deals' expires ---> 100,000 Concurrent Requests Discover Miss!
                                            |
           +--------------------------------+-------------------------------+
           v                                v                               v
     [ DB Query 1 ]                   [ DB Query 2 ]                 [ DB Query 100,000 ]
     STATUS: DATABASE CPU AT 100%, THREAD POOL EXHAUSTION & CRASH!

DEFENSE ARCHITECTURE:
- Request Coalescing (Single-Flight): Only 1 thread queries the DB; others await that single promise.
- Jittered TTLs: Add random offset (e.g. 300s + rand(0, 30s)) so keys don't expire simultaneously.
- Circuit Breaker: Shed excess read load and return cached stale data during database saturation.`,
      keyTakeaways: [
        "New architectures must use Azure Managed Redis; older Azure Cache for Redis Basic/Standard tiers are scheduled for retirement.",
        "Always apply TTL jitter (random variations in expiration timestamps) to prevent bulk simultaneous cache key invalidation.",
        "Implement request coalescing (single-flight) to ensure a cache miss triggers only a single backend database query.",
        "Cache is an accelerator, never the authoritative system-of-record; databases must remain consistent.",
      ],
      codeExample: `# Node.js: Cache-Aside with Single-Flight Promise Coalescing
const inflightQueries = new Map();

async function getProductWithCoalescing(productId) {
  // 1. Try Azure Managed Redis
  const cached = await redisClient.get(\`product:\${productId}\`);
  if (cached) return JSON.parse(cached);

  // 2. Coalesce concurrent duplicate requests
  if (inflightQueries.has(productId)) {
    return await inflightQueries.get(productId);
  }

  const queryPromise = (async () => {
    try {
      const dbRecord = await queryDatabaseForProduct(productId);
      const jitterTtl = 300 + Math.floor(Math.random() * 30); // 300-330s jitter
      await redisClient.set(\`product:\${productId}\`, JSON.stringify(dbRecord), 'EX', jitterTtl);
      return dbRecord;
    } finally {
      inflightQueries.delete(productId);
    }
  })();

  inflightQueries.set(productId, queryPromise);
  return await queryPromise;
}`,
    },
    {
      id: 8,
      title: "Global Ingress: Azure Front Door vs Application Gateway",
      week: "Distributed Applications",
      focus: "Global Layer-7 Anycast Edge vs Regional Layer-7 Ingress & WAF",
      badge: "Ingress Traffic",
      theory:
        "Azure splits traffic distribution into two distinct tiers: Azure Front Door (Global Layer-7 Anycast edge router, CDN, and global WAF) and Application Gateway v2 (Regional Layer-7 reverse proxy and URL path router). Front Door terminates TLS at the global edge closest to the user, inspects WAF rules, and uses Private Link to forward clean traffic directly to regional Application Gateways or AKS clusters, preventing direct internet origin exposure.",
      diagram: `GLOBAL FRONT DOOR + REGIONAL APPLICATION GATEWAY TOPOLOGY
                       [ GLOBAL INTERNET USERS ]
                                   |
                                   v
             [ AZURE FRONT DOOR (Standard / Premium) ]
             - Anycast Edge POPs Worldwide
             - Global WAF & DDoS Protection
             - Edge Dynamic Caching & SSL Termination
            /                                         \\
  (Lowest Latency Edge)                      (Failover / Overflow)
           |                                           |
           v                                           v
[ REGION A: Central US ]                    [ REGION B: East US ]
+------------------------------+            +------------------------------+
| Application Gateway v2 (WAF) |            | Application Gateway v2 (WAF) |
| Path: /api/checkout/*        |            | Path: /api/checkout/*        |
| Private Link Origin Target   |            | Private Link Origin Target   |
+--------------+---------------+            +--------------+---------------+
               |                                           |
               v                                           v
     [ AKS Microservice Fleet ]                  [ AKS Microservice Fleet ]

FRONT DOOR vs APPLICATION GATEWAY DECISION MATRIX:
- Front Door: Global scope, edge caching, cross-region health failover, Anycast IP.
- Application Gateway v2: Regional scope, internal VNet routing, cookie-based affinity, URL path rewrite.`,
      keyTakeaways: [
        "Do not confuse Front Door (global Anycast edge) with Application Gateway (regional intra-VNet Layer 7 proxy).",
        "Protect backend origins: use Front Door Premium with Private Link so origins accept traffic exclusively through Front Door.",
        "Application Gateway v1 SKUs retired on April 28, 2026; all production workloads must deploy v2 SKUs.",
        "Front Door health probes evaluate backend regional response codes, automatically routing traffic away from degraded regions.",
      ],
      codeExample: `# Bicep: Azure Front Door Premium Route targeting Regional App Gateway via Private Link
resource frontDoorRoute 'Microsoft.Cdn/profiles/afdEndpoints/routes@2023-05-01' = {
  parent: frontDoorEndpoint
  name: 'route-api-traffic'
  properties: {
    originGroup: { id: frontDoorOriginGroup.id }
    supportedProtocols: ['Https']
    patternsToMatch: ['/*']
    forwardingProtocol: 'HttpsOnly'
    linkToDefaultDomain: 'Enabled'
    httpsRedirect: 'Enabled'
  }
}`,
    },
    {
      id: 9,
      title: "Modern Compute: AKS Automatic & Azure Functions Flex Consumption",
      week: "Distributed Applications",
      focus: "AKS Automatic Production Defaults, Flex Consumption & Concurrency Limits",
      badge: "Modern Compute",
      theory:
        "Modern 2026 Azure compute embraces managed operations. AKS Automatic is Microsoft's production-ready Kubernetes default, automating node provisioning, Karpenter-style workload scaling, security guardrails, and cluster repair without cluster management overhead. Azure Functions Flex Consumption delivers pay-as-you-go serverless with fast cold-starts, VNet integration, and per-function concurrency limits to prevent the *Serverless Database Starvation Trap*.",
      diagram: `AKS AUTOMATIC vs AKS STANDARD ARCHITECTURE
+-----------------------------+------------------------------------+------------------------------------+
| DIMENSION                   | AKS AUTOMATIC (2026 Default)       | AKS STANDARD                       |
+-----------------------------+------------------------------------+------------------------------------+
| Node Management             | Workload-driven automated provision| Manual Node Pools & OS image mgmt  |
| Security & Best Practices   | Turnkey baseline security policies | Manually configured Pod Security   |
| Autoscaling Engine          | Built-in cluster autoscaling       | Manual Karpenter / Cluster Autoscal|
| Upgrades & Self-Healing     | Automated safe rolling upgrades    | User-scheduled maintenance windows |
| Ideal Workload              | Production microservices & APIs    | Specialized kernel/GPU custom mods |
+-----------------------------+------------------------------------+------------------------------------+

AZURE FUNCTIONS PER-FUNCTION CONCURRENCY (FLEX CONSUMPTION):
Incoming Burst: 20,000 HTTP Requests
Function A (Checkout) ---> Capped at 200 concurrent instances ---> Safe: Max 200 DB Connections!
Function B (Thumbnail) ---> Scales to 1,500 concurrent instances (Stateless Blob operations)
*Per-function concurrency caps protect downstream relational databases from saturation!*`,
      keyTakeaways: [
        "AKS Automatic is the recommended default for container workloads, removing complex node lifecycle maintenance.",
        "Azure Functions Flex Consumption provides true per-function scaling rather than binding all functions to one instance scale.",
        "Uncontrolled serverless scaling destroys relational databases: always configure function concurrency caps or message queue buffers.",
        "Integrate Entra Workload Identity in AKS so pods authenticate to Azure services using temporary short-lived tokens.",
      ],
      codeExample: `# Azure Functions host.json: Concurrency Throttling Configuration
{
  "version": "2.0",
  "concurrency": {
    "dynamicConcurrencyEnabled": true,
    "snapshotPersistenceEnabled": true
  },
  "extensions": {
    "http": {
      "maxConcurrentRequests": 100,
      "maxOutstandingRequests": 200
    }
  }
}`,
    },
    {
      id: 10,
      title: "Enterprise Messaging: Azure Service Bus vs Event Grid",
      week: "Messaging & Observability",
      focus: "Commands vs Events, Dead-Letter Queues, Duplicate Detection & Push Delivery",
      badge: "Event Messaging",
      theory:
        "Distributed applications decouple components via messaging and events. The foundational rule is: COMMANDS ('Please process this order') go to Azure Service Bus; EVENTS ('A blob was created') go to Azure Event Grid. Service Bus provides enterprise queuing, topics/subscriptions, transactions, duplicate detection windows, and Dead-Letter Queues (DLQ). Event Grid provides high-throughput push-based serverless event routing with retry policies and dead-letter blob storage.",
      diagram: `SERVICE BUS (COMMANDS) vs EVENT GRID (EVENTS) ARCHITECTURE

1. AZURE SERVICE BUS (Enterprise Command Queue with DLQ):
[ Order Service ] ===> (1) Send 'ProcessPayment' ===> [ Service Bus Topic ]
                                                              /              \\
                                                             v                v
                                                   [ Sub: Billing ]   [ Sub: Fulfillment ]
                                                           |
                                                (Worker Fails 5x)
                                                           |
                                                           v
                                            [ Dead-Letter Queue (DLQ) ] ---> Alert DevOps

2. AZURE EVENT GRID (Reactive Event Broadcast):
[ Blob Storage ] ---> "BlobCreated: invoice.pdf" ---> [ Event Grid Topic ]
                                                              /        |        \\
                                                             v         v         v
                                                        [Function]  [LogicApp] [Webhook]
                                                     (Push-based, sub-10ms delivery!)`,
      keyTakeaways: [
        "Rule of Thumb: COMMANDS belong in Service Bus; EVENTS belong in Event Grid.",
        "A Dead-Letter Queue (DLQ) is an operational recovery mechanism, not a trash can: inspect, debug, and safely replay.",
        "Enable Duplicate Detection on Service Bus (Standard/Premium) to discard duplicate sends within a configured time window.",
        "Event Grid does not guarantee strict sequential message ordering; downstream consumers must be idempotent.",
      ],
      codeExample: `# Python: Azure Service Bus Consumer with DLQ Dead-Letter Handling
from azure.servicebus import ServiceBusClient, ServiceBusReceivedMessage

connection_str = "Endpoint=sb://sb-commerce-prod.servicebus.windows.net/;..."
client = ServiceBusClient.from_connection_string(connection_str)

with client.get_queue_receiver("order-processing-queue") as receiver:
    messages = receiver.receive_messages(max_message_count=10, max_wait_time=5)
    for msg in messages:
        try:
            process_order_idempotent(msg.body)
            receiver.complete_message(msg)
        except PoisonMessageException as ex:
            # Move unrecoverable poison message directly to Dead-Letter Queue
            receiver.dead_letter_message(msg, reason="InvalidOrderSchema", error_description=str(ex))
        except Exception:
            receiver.abandon_message(msg) # Re-expose message for retry`,
    },
    {
      id: 11,
      title: "Production Capstone: AzureShop 10M-User Platform & AWS Translation",
      week: "Messaging & Observability",
      focus: "End-to-End Multi-Region Blueprint, AWS Translation & 12 Lab Sequence",
      badge: "Capstone Blueprint",
      theory:
        "The Module 8 Capstone brings all primitives together into AzureShop: a production-grade global commerce platform engineered for 10 million users, 100,000 peak RPS, 99.99% availability, sub-second latency, and multi-region resilience. The architecture features Azure Front Door, Application Gateway v2, AKS Automatic, Azure Managed Redis, polyglot persistence (Azure SQL + Cosmos DB), Service Bus queuing, Event Grid eventing, Key Vault cryptography, and Azure Monitor full-stack observability.",
      diagram: `PRODUCTION AZURESHOP ARCHITECTURE (10M USERS / 100K PEAK RPS)
[ GLOBAL CLIENTS ]
       |
       v
[ AZURE FRONT DOOR + WAF ] -> (Global Anycast Edge / Failover Routing)
       |
       +-----------------------+-----------------------+
       | Private Link          | Private Link          |
       v                       v                       v
[ REGION A: East US ]    [ REGION B: West US ]   [ REGION C: Europe ]
+----------------------+ +---------------------+ +--------------------+
| App Gateway v2 (WAF) | |App Gateway v2 (WAF) | |App Gateway v2 (WAF)|
+----------+-----------+ +----------+----------+ +---------+----------+
           |                        |                      |
           v                        v                      v
    [ AKS Automatic ]        [ AKS Automatic ]      [ AKS Automatic ]
    (Pods / Microservices)   (Pods / Microservices) (Pods / Microservices)
           |                        |                      |
           +------------------------+----------------------+
                                    |
          +-------------------------+-------------------------+
          |                                                   |
          v                                                   v
[ AZURE MANAGED REDIS ]                             [ POLYGLOT PERSISTENCE ]
- Product Catalog Cache (300s TTL)                  - Azure SQL Database (Auto-Failover Group)
- Session Acceleration (Active-Active)              - Cosmos DB (Shopping Carts, Orders NoSQL)
                                                              |
                                                    (Change Feed CDC)
                                                              |
                                                              v
                                              [ EVENT GRID / SERVICE BUS ]
                                              /             |            \\
                                             v              v             v
                                       [ SvcBus: Pay ] [ SvcBus: Ship ] [ Grid: Notify ]
                                             |              |             |
                                             v              v             v
                                       [ Functions ]  [ Functions ]  [ Functions ]
                                             +--------------+-------------+
                                                            |
                                                            v
                                            [ BLOB STORAGE + KEY VAULT + MONITOR ]`,
      keyTakeaways: [
        "Multi-region architecture is incomplete unless the surviving region has provisioned capacity to absorb 100% of the failed region's load.",
        "Polyglot data tiering: Azure SQL handles strict ACID financial ledgers; Cosmos DB handles horizontally sharded shopping carts.",
        "Azure Monitor SLO dashboards track error budget burn rates rather than reacting to transient single-server CPU alarms.",
        "AWS to Azure translation: VPC → VNet, IAM Role → Managed Identity, S3 → Blob, RDS → Azure SQL, DynamoDB → Cosmos DB, SQS → Service Bus.",
      ],
      codeExample: `# AWS to Azure Architectural Translation Reference Matrix:
# AWS IAM / Identity Center  ---> Microsoft Entra ID + Azure RBAC
# AWS IAM Role / STS        ---> User-Assigned Managed Identity / Entra Workload ID
# AWS VPC / Security Group  ---> Azure Virtual Network (VNet) + Network Security Group (NSG)
# AWS EC2 / Auto Scaling    ---> Azure Virtual Machines + VM Scale Sets (VMSS)
# AWS S3 (Simple Storage)   ---> Azure Blob Storage (ADLS Gen2)
# AWS RDS / Aurora          ---> Azure SQL Database (Business Critical / Hyperscale)
# AWS DynamoDB              ---> Azure Cosmos DB (NoSQL API)
# AWS ElastiCache           ---> Azure Managed Redis (Enterprise)
# AWS CloudFront CDN        ---> Azure Front Door (Standard / Premium)
# AWS Application Load Bal  ---> Azure Application Gateway v2
# AWS Lambda                ---> Azure Functions (Flex Consumption Plan)
# AWS ECS / EKS             ---> Azure Kubernetes Service (AKS Automatic)
# AWS SQS (Simple Queue)    ---> Azure Service Bus (Queues)
# AWS SNS (Pub/Sub)         ---> Azure Service Bus (Topics & Subscriptions)
# AWS EventBridge           ---> Azure Event Grid (Namespaces & System Topics)
# AWS KMS / Secrets Manager ---> Azure Key Vault
# AWS CloudWatch            ---> Azure Monitor (Metrics, Logs, Application Insights)`,
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
          currentModuleId="azure"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Azure AI"
        />

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#18181b] p-8 md:p-12 text-white shadow-2xl mb-10">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1 text-xs font-mono font-bold text-orange-400 mb-4">
              <Cloud size={14} />
              <span>Azure Native Architecture</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
              From Azure Primitives to Production Architecture
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300">
              Do not memorize Azure service names. Master the architectural problem first, then learn how Azure solves it.
              Explore Microsoft Entra ID boundaries, Managed Identities, VNet Private Endpoints, VMSS autoscaling feedback loops,
              Azure SQL Failover Groups, Cosmos DB consistency spectrums, Azure Managed Redis Enterprise, Front Door Anycast edge,
              AKS Automatic, Service Bus command queues, Event Grid reactive distribution, and Key Vault zero-trust secrets.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Foundations: Entra ID • RBAC • VNet • Private Link • VMSS • Blob • Azure SQL
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Services: Cosmos DB • Managed Redis • Front Door • App Gateway v2 • Functions • AKS Automatic
              </span>
              <span className="rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5">
                Capstone: AzureShop 10M-User Global System & AWS Translation
              </span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 1 & 2: TWO-COLUMN LAB DECK */}
        <div className="grid gap-8 lg:grid-cols-12 mb-12">
          {/* TOOL 1: AZURE SERVICE SELECTOR & ARCHITECTURAL MATCHER (COL-7) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive Azure Service Selector & Matcher
                    </h3>
                    <p className="text-xs text-stone-500">
                      Map workload constraints to exact architectural recommendations (Section 55)
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
                  { id: "identity", label: "Identity" },
                  { id: "compute", label: "Compute" },
                  { id: "storage", label: "Data" },
                  { id: "messaging", label: "Messaging" },
                  { id: "edge", label: "Edge" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedWorkloadCategory(cat.id);
                      setSelectedRequirement(azureDecisionOptions[cat.id][0].id);
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
                {azureDecisionOptions[selectedWorkloadCategory].map((opt) => (
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
                const match = azureDecisionOptions[selectedWorkloadCategory].find(
                  (o) => o.id === selectedRequirement
                );
                if (!match) return null;
                return (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50/30 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-orange-200/60">
                      <span className="font-mono text-[11px] font-bold text-stone-500 uppercase">
                        Recommended Azure Primitive
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

          {/* TOOL 2: COSMOS DB PARTITIONING & CONSISTENCY SIMULATOR (COL-5) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Cosmos DB Consistency & Partitioning Lab
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate RU Costs, Latency & Hot Partition Bottlenecks (Sections 18–22)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  NoSQL Sizer
                </span>
              </div>

              {/* Sliders & Controls */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Consistency Level:</span>
                    <span className="font-mono text-orange-600 font-bold">{consistencyLevel}</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1">
                    {["Strong", "BoundedStaleness", "Session", "ConsistentPrefix", "Eventual"].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setConsistencyLevel(lvl)}
                        className={`rounded-lg py-1.5 text-[10px] font-mono font-bold transition ${
                          consistencyLevel === lvl
                            ? "bg-[#18181b] text-white shadow-xs"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {lvl.slice(0, 7)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Partition Key Strategy:</span>
                    <span className="font-mono text-orange-600">/{partitionKeyStrategy}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "userId", label: "/userId (High-Card)" },
                      { id: "country", label: "/country (Skewed)" },
                      { id: "status", label: "/status (Hot Bottleneck)" },
                    ].map((k) => (
                      <button
                        key={k.id}
                        onClick={() => setPartitionKeyStrategy(k.id)}
                        className={`rounded-xl py-2 px-2 text-center text-xs font-bold transition ${
                          partitionKeyStrategy === k.id
                            ? "border border-orange-500 bg-orange-50 text-orange-950 font-mono shadow-xs"
                            : "border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                        }`}
                      >
                        {k.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Target Ingress Traffic:</span>
                    <span className="font-mono text-stone-700">{trafficVolumeRps.toLocaleString()} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={trafficVolumeRps}
                    onChange={(e) => setTrafficVolumeRps(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>
              </div>

              {/* Real-time Math Output */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">RU Consumption (Est. Reads):</span>
                  <span className="font-mono font-bold text-[#18181b]">
                    {cosmosCalculations.estimatedRUs.toLocaleString()} RU/s ({cosmosCalculations.ruCostMultiplier}x factor)
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">p99 Read Latency:</span>
                  <span className="font-mono font-bold text-stone-800">
                    ~{cosmosCalculations.readLatencyMs} ms
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Max Single Partition Load:</span>
                  <span
                    className={`font-mono font-bold ${
                      cosmosCalculations.maxPartitionTrafficPct > 50
                        ? "text-rose-600"
                        : "text-emerald-700"
                    }`}
                  >
                    {cosmosCalculations.maxPartitionTrafficPct}% of total RPS
                  </span>
                </div>

                <div className="pt-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase">Consistency Trade-Off:</div>
                  <p className="text-xs text-stone-700 mt-0.5 leading-snug">
                    {cosmosCalculations.consistencyDescription}
                  </p>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div
                className={`mt-4 rounded-xl p-3 text-xs leading-relaxed ${
                  cosmosCalculations.partitionDistribution !== "balanced"
                    ? "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                }`}
              >
                {cosmosCalculations.partitionAnalysis}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 3: AZURE GAMEDAY FAILURE SIMULATOR (7 SCENARIOS FROM SECTIONS 48–54) */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e7e3da]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-mono text-[10px] font-bold text-rose-700 uppercase mb-2">
                <AlertTriangle size={12} />
                <span>Sections 48–54 Failure Game</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                Azure GameDay: 7 Production Incident Simulations
              </h2>
              <p className="text-xs md:text-sm text-stone-500 mt-1">
                Test your architectural recovery against gateway failures, pod crashes, Redis stampedes, regional SQL severance, hot partitions, and serverless DB starvation.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2 text-right">
                <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">GameDay Score</div>
                <div className="text-lg font-mono font-bold text-orange-600">{gameScore} / 70 Pts</div>
              </div>
            </div>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {azureGameDayScenarios.map((sc, idx) => {
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
                  <span>Incident {sc.id}</span>
                  {status === "correct" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                  {status === "incorrect" && <span className="h-2 w-2 rounded-full bg-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const currentScenario = azureGameDayScenarios[gameScenarioIndex];

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
                  Module 8 Topic Index
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
              <h4 className="text-sm font-bold text-[#18181b]">Next in the Program:</h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 9: Google Cloud Architecture (Global VPC, BigQuery Slots, Pub/Sub, Cloud Run, GKE Autopilot & GlobalCommerce GCP).
              </p>
              <button
                onClick={() => navigate("/learning/cloud/gcp")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Launch Module 9: Google Cloud
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
                  <span className="font-mono text-[10px] text-stone-400">Azure Topology</span>
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
                <span>Nova AI Azure Architect Tutor</span>
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
                module="azure"
                currentTopic={`azure-${currentTopic.id}`}
                subtopic={currentTopic.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
