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
/* CLOUD COMPUTING MODULE 7: DEEP AWS ENGINEERING                             */
/* Weeks 11–13: The AWS Operating Environment & Well-Architected Framework    */
/* AWS 6 Pillars, IAM, VPC, EC2, S3, Aurora, DynamoDB, Lambda, ECS/EKS,       */
/* SQS/SNS/EventBridge, CloudWatch, KMS & Production 10M-User E-Commerce Plan */
/* -------------------------------------------------------------------------- */

export default function CloudAWS() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: AWS Service Selector & Decision Tree State
  const [selectedWorkloadCategory, setSelectedWorkloadCategory] = useState("compute");
  const [selectedRequirement, setSelectedRequirement] = useState("serverless-api");

  // Tool 2: Lambda Concurrency & RDS Connection Pool Calculator State
  const [incomingRps, setIncomingRps] = useState(15000);
  const [functionDurationMs, setFunctionDurationMs] = useState(120);
  const [rdsMaxConnections, setRdsMaxConnections] = useState(2000);
  const [reservedConcurrencyCap, setReservedConcurrencyCap] = useState(1500);

  // Tool 3: AWS GameDay Failure Simulator State (9 Scenarios from brief)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Lambda Concurrency & DB Capacity Math
  const lambdaDbCalculations = useMemo(() => {
    // Concurrent Executions = (RPS * DurationMs) / 1000
    const rawConcurrency = Math.ceil((incomingRps * functionDurationMs) / 1000);
    const activeInstances =
      reservedConcurrencyCap > 0
        ? Math.min(rawConcurrency, reservedConcurrencyCap)
        : rawConcurrency;
    const isThrottled = reservedConcurrencyCap > 0 && rawConcurrency > reservedConcurrencyCap;
    const throttledRps = isThrottled
      ? Math.round(incomingRps * (1 - reservedConcurrencyCap / rawConcurrency))
      : 0;

    // Direct DB connections demand (assuming 1 direct connection per Lambda container without RDS Proxy)
    const directDbConnections = activeInstances;
    const directSaturationPct = Math.round((directDbConnections / rdsMaxConnections) * 100);

    // With RDS Proxy connection pooling (typical 10:1 multiplexing efficiency)
    const proxyDbConnections = Math.ceil(activeInstances * 0.1);
    const proxySaturationPct = Math.round((proxyDbConnections / rdsMaxConnections) * 100);

    let status = "safe";
    let message = "Database connections are within healthy operating thresholds.";
    if (directSaturationPct > 100) {
      status = "critical";
      message =
        "CRITICAL: Lambda concurrent instances exceed RDS max connections! Direct DB connections will be rejected, resulting in HTTP 500 crashes and database thrashing.";
    } else if (directSaturationPct > 75) {
      status = "warning";
      message =
        "WARNING: Database connection pool is near exhaustion (>75% capacity). Traffic spikes will cause connection timeouts.";
    }

    return {
      rawConcurrency,
      activeInstances,
      isThrottled,
      throttledRps,
      directDbConnections,
      directSaturationPct,
      proxyDbConnections,
      proxySaturationPct,
      status,
      message,
    };
  }, [incomingRps, functionDurationMs, rdsMaxConnections, reservedConcurrencyCap]);

  // Decision Tree Matcher Data
  const decisionTreeOptions = {
    compute: [
      {
        id: "serverless-api",
        title: "Short-lived HTTP API or Event-Driven Function (<15 min)",
        service: "AWS Lambda",
        why: "Zero idle server costs, sub-second auto-scaling, tight integration with EventBridge, SQS, and API Gateway.",
        tradeoff: "Cold start latencies, 15-minute execution hard cap, potential downstream database connection starvation.",
        antiPattern: "Running persistent long-running background websocket listeners on Lambda.",
      },
      {
        id: "aws-native-containers",
        title: "Microservices & Docker Containers with AWS-Native Simplicity",
        service: "Amazon ECS with AWS Fargate",
        why: "Serverless container execution without managing underlying EC2 hosts or complex Kubernetes control planes.",
        tradeoff: "Less portable than raw Kubernetes; slightly higher compute cost per vCPU than reserved EC2 instances.",
        antiPattern: "Provisioning a full EKS cluster for simple 2-container CRUD applications.",
      },
      {
        id: "kubernetes-ecosystem",
        title: "Multi-Cloud Kubernetes Workloads & Cloud-Native Ecosystem (Helm, Istio)",
        service: "Amazon EKS with EKS Auto Mode",
        why: "Industry-standard Kubernetes API, automated node provisioning, deep Karpenter scaling, and EKS access entries.",
        tradeoff: "$0.10/hour cluster control plane charge; operational complexity of K8s ingress, CRDs, and service meshes.",
        antiPattern: "Managing raw EC2 worker node AMIs manually without Karpenter or EKS Auto Mode.",
      },
      {
        id: "legacy-os-specialized",
        title: "Specialized Kernels, Monolithic Windows Apps, or High-Perf NVMe IOPS",
        service: "Amazon EC2 with Nitro Enclaves",
        why: "Full bare-metal/hypervisor OS control, custom kernel modules, local ephemeral NVMe Instance Stores.",
        tradeoff: "Undifferentiated heavy lifting: OS patching, security hardening, manual AMI updates, Auto Scaling setup.",
        antiPattern: "Placing unmonitored standalone EC2 instances in public subnets with SSH port 22 open to 0.0.0.0/0.",
      },
    ],
    storage: [
      {
        id: "unstructured-media",
        title: "Images, Videos, Data Lake Parquet Files & Long-Term Backups",
        service: "Amazon S3 (Simple Storage Service)",
        why: "11 9s (99.999999999%) durability, strong read-after-write consistency, S3 Object Lock, and Intelligent-Tiering.",
        tradeoff: "Object storage is not a POSIX filesystem (no partial file byte writes or fast atomic renames).",
        antiPattern: "Using S3 like a block storage disk for relational database transaction logs.",
      },
      {
        id: "ec2-root-disk",
        title: "Low-Latency OS Boot Disk & Persistent Database Volumes",
        service: "Amazon EBS (Elastic Block Store gp3 / io2 Block Express)",
        why: "Sub-millisecond persistent block-level storage, independent volume snapshotting to S3, provisioned IOPS.",
        tradeoff: "Single AZ bound (cannot be natively mounted simultaneously across multiple Availability Zones).",
        antiPattern: "Storing shared multi-server web uploads on an EBS volume mounted to a single EC2 instance.",
      },
      {
        id: "shared-posix-file",
        title: "Shared Network Filesystem for Multi-AZ Containers & Linux Fleets",
        service: "Amazon EFS (Elastic File System)",
        why: "POSIX-compliant distributed NFS filesystem automatically replicated across 3 Availability Zones.",
        tradeoff: "Higher latency (1-3ms) compared to direct local NVMe or provisioned EBS gp3.",
        antiPattern: "Running high-transaction relational databases (like PostgreSQL) on top of standard EFS.",
      },
    ],
    database: [
      {
        id: "transactional-acid",
        title: "High-Throughput Relational SQL (ACID, Complex Joins, Foreign Keys)",
        service: "Amazon Aurora (PostgreSQL / MySQL)",
        why: "Decoupled compute and 6-way distributed 3-AZ log-structured storage; fast reader endpoints; 30s automated failover.",
        tradeoff: "Higher base cost than standard RDS; vendor-differentiated storage engine architecture.",
        antiPattern: "Hardcoding the IP address of an individual Aurora writer node in application config.",
      },
      {
        id: "massive-kv-nosql",
        title: "Ultra-High Scale Key-Value / Document Store (Single-Digit Millisecond)",
        service: "Amazon DynamoDB (Single-Table Design)",
        why: "Predictable single-digit millisecond latency at any scale; automatic horizontal sharding; DynamoDB Streams.",
        tradeoff: "Requires designing schema around access patterns upfront; expensive full table scans; 400KB item size limit.",
        antiPattern: "Using a low-cardinality status field like 'PENDING' as the partition key, causing hot partition throttling.",
      },
      {
        id: "in-memory-caching",
        title: "Sub-Millisecond Read Accelerator & Session State Store",
        service: "Amazon ElastiCache (Valkey / Redis OSS)",
        why: "Microsecond read/write latencies, in-memory data structures (hashes, sorted sets), automated cluster sharding.",
        tradeoff: "Volatile in-memory storage; cache stampede vulnerability when node restarts or keys expire simultaneously.",
        antiPattern: "Treating ElastiCache as the sole persistent system-of-record without backing up to Aurora or DynamoDB.",
      },
    ],
    messaging: [
      {
        id: "async-worker-queue",
        title: "Decoupled Point-to-Point Task Queue with Retry DLQ",
        service: "Amazon SQS (Simple Queue Service)",
        why: "Pull-based elasticity, automatic buffering of spikes, Visibility Timeout protection, and Dead-Letter Queues.",
        tradeoff: "Consumers must poll or use long-polling; Standard SQS delivers at-least-once (consumers must be idempotent).",
        antiPattern: "Using SNS pub/sub when you need worker backpressure and message persistence.",
      },
      {
        id: "fanout-pubsub",
        title: "1-to-Many Event Broadcast to Multiple Disparate Subscribers",
        service: "Amazon SNS (Simple Notification Service)",
        why: "Push-based fanout to multiple SQS queues, webhooks, SMS, and Lambda functions with subscription message filtering.",
        tradeoff: "No message persistence or queuing buffer on its own (messages are dropped if subscriber is unreachable without SQS).",
        antiPattern: "Subscribing HTTP endpoints directly to high-volume SNS topics without SQS buffer queues in front of them.",
      },
      {
        id: "enterprise-event-bus",
        title: "SaaS Integrations & Content-Based Event Routing Across AWS Accounts",
        service: "Amazon EventBridge (Event Buses & Pipes)",
        why: "Declarative JSON schema pattern matching, integration with 40+ SaaS partners, and EventBridge Pipes for point-to-point flows.",
        tradeoff: "Slightly higher latency (10-30ms) than raw SNS; subject to regional event payload limits (256KB).",
        antiPattern: "Writing custom polling scripts in EC2 cron jobs to detect AWS resource state changes.",
      },
    ],
  };

  // 9 GameDay Failure Scenarios from Section 114 of brief
  const gameDayScenarios = [
    {
      id: 1,
      title: "Scenario 1: EC2 Application Task Crashes in Production",
      context:
        "At 14:02 UTC, an unhandled NullPointerException causes container PID 1 to crash inside an ECS task in Availability Zone A. User requests to that container immediately fail with connection reset errors.",
      question: "What is the architecturally sound AWS mechanism that automatically detects and resolves this?",
      options: [
        {
          id: "A",
          text: "ECS Service Desired Count manager detects task exit via container agent, invokes task replacement, while ALB health checks immediately deregister the crashed target.",
          verdict: "Correct! Self-Healing Microservice",
          explanation:
            "The ALB stops routing traffic to the dead task within seconds of failed health checks. Concurrently, the ECS service maintains desired count and launches a fresh container in a healthy AZ.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "SSH into the underlying EC2 instance and run `systemctl restart docker` to revive the crashed process.",
          verdict: "Anti-Pattern! Manual Toil",
          explanation:
            "Manual SSH into production violates AWS Well-Architected Operational Excellence. Workloads should be immutable and self-healing.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Scenario 2: Catastrophic Datacenter Outage Knocks Out AZ-1a",
      context:
        "A power grid failure severs connectivity to AWS Availability Zone us-east-1a. 50% of your ECS container fleet and the primary NAT Gateway located in AZ-1a become completely unreachable.",
      question: "How should a production AWS architecture survive this with zero downtime?",
      options: [
        {
          id: "A",
          text: "The Application Load Balancer cross-zone load balancing distributes ingress strictly to healthy targets in AZ-1b and AZ-1c; each AZ has its own independent NAT Gateway.",
          verdict: "Correct! Multi-AZ Fault Isolation",
          explanation:
            "By deploying subnets, workloads, and NAT Gateways independently across at least 2 (ideally 3) AZs, the loss of an entire physical datacenter zone is absorbed seamlessly.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Route 53 DNS records must be manually updated to point away from the AWS region to a local on-premises server.",
          verdict: "Incorrect Architecture",
          explanation:
            "AZ failures are designed to be handled intra-region via multi-AZ redundancy without requiring emergency cross-cloud DNS migrations.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Scenario 3: Aurora Primary Writer Node Suffers Hardware Failure",
      context:
        "The EC2 host running the Aurora PostgreSQL primary writer instance experiences a hardware hypervisor panic. The database is in the middle of processing 12,000 checkout transactions per second.",
      question: "Which database endpoint must your application connect to, and how does Aurora recover?",
      options: [
        {
          id: "A",
          text: "The application uses the Aurora Cluster Writer Endpoint. Aurora automatically promotes a reader replica to writer in <30s and shifts the CNAME DNS record to the new writer.",
          verdict: "Correct! Aurora Storage Quorum & Failover",
          explanation:
            "Because Aurora storage is shared across 6 copies in 3 AZs independent of compute, no storage replication replay is needed. The Cluster Writer Endpoint automatically points to the newly promoted replica.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "The application hardcodes the private IP of the instance and waits for the engineer on call to attach a new EBS volume.",
          verdict: "Catastrophic Anti-Pattern",
          explanation:
            "Hardcoding database IP addresses or relying on single-instance disk attachments destroys Aurora's high-availability design.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Scenario 4: DynamoDB Massive Flash Sale Causes Hot Partition Throttling",
      context:
        "During a Diwali flash sale, 200,000 users attempt to purchase an iPhone at the exact same second. Your table uses `PK = 'SALE_STATUS'` and `SK = timestamp`. CloudWatch alarms fire on `ProvisionedThroughputExceededException`.",
      question: "What is the architectural root cause and permanent remediation?",
      options: [
        {
          id: "A",
          text: "Low-cardinality partition key caused all write traffic to hit a single physical DynamoDB storage partition (1,000 WCU limit). Remediate by sharding/salting the partition key (`SALE#<random_0-99>`).",
          verdict: "Correct! Partition Key Distribution",
          explanation:
            "DynamoDB scales horizontally by hashing the Partition Key. A low-cardinality key bottles all traffic into one storage node regardless of total provisioned or on-demand table capacity.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Switch DynamoDB from On-Demand mode to Provisioned mode with 500 WCU.",
          verdict: "Incorrect",
          explanation:
            "Provisioning fewer capacity units on a hot partition will exacerbate throttling, not solve key skew.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Scenario 5: Serverless Lambda Surge Exhausts Aurora DB Connections",
      context:
        "A marketing push sends 40,000 concurrent requests to an API Gateway backed by AWS Lambda. Lambda scales up to 4,000 concurrent execution environments, each opening 1-2 Postgres connections. Aurora maximum connections is 1,500.",
      question: "Why is the database failing, and what are the two essential AWS architectural remedies?",
      options: [
        {
          id: "A",
          text: "Deploy AWS RDS Proxy between Lambda and Aurora to pool/multiplex connections, and configure Reserved Concurrency on the Lambda function to cap concurrency bursts.",
          verdict: "Correct! Concurrency & Connection Pooling",
          explanation:
            "Serverless compute scales faster than relational database connection pools. RDS Proxy multiplexes thousands of ephemeral Lambda connections into a compact pool of persistent Aurora connections.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Increase Lambda timeout from 3 seconds to 15 minutes so functions can wait indefinitely for connections to free up.",
          verdict: "Disastrous Failure",
          explanation:
            "Increasing timeouts during a connection starvation event causes incoming Lambda instances to queue and pile up, magnifying thread exhaustion and leading to cascading cluster death.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      title: "Scenario 6: SQS Worker Worker Crashes Halfway Through Payment Processing",
      context:
        "A background billing worker pulls an `OrderPayment` message from SQS, debits the user's credit card via Stripe, but crashes before issuing `DeleteMessage` back to SQS.",
      question: "What happens to the message in SQS, and how must the consumer be architected?",
      options: [
        {
          id: "A",
          text: "When the SQS Visibility Timeout expires, the message reappears in the queue and another worker consumes it. The worker MUST be idempotent using a transaction/idempotency key.",
          verdict: "Correct! SQS Visibility Timeout & Idempotency",
          explanation:
            "SQS guarantees at-least-once delivery. If `DeleteMessage` is never called, SQS re-exposes the message. Without an idempotency check, the customer would be charged a second time!",
          isCorrect: true,
        },
        {
          id: "B",
          text: "SQS immediately deletes the message the millisecond it is received by the worker.",
          verdict: "Incorrect",
          explanation:
            "SQS never auto-deletes received messages; it hides them for the duration of the Visibility Timeout.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      title: "Scenario 7: An OrderCreated Event Matches Three EventBridge Rules",
      context:
        "An e-commerce order service publishes an `OrderCreated` event to the default EventBridge bus. Rule 1 targets Payment Lambda, Rule 2 targets Inventory SQS, and Rule 3 targets Analytics Kinesis Firehose.",
      question: "Can multiple rules trigger simultaneously for a single event in EventBridge?",
      options: [
        {
          id: "A",
          text: "Yes. EventBridge evaluates all active rules independently against the event envelope; each matching rule routes the event payload to its configured downstream targets.",
          verdict: "Correct! True Event-Driven Decoupling",
          explanation:
            "EventBridge rules allow seamless 1-to-N decoupled event distribution without modifying the publisher's code or requiring multiple separate API calls.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "No. EventBridge uses first-match routing; only the first rule defined in alphabetical order executes.",
          verdict: "Incorrect",
          explanation: "EventBridge is an event bus, not an if-else chain. All matching rules fire concurrently.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      title: "Scenario 8: CloudFront Serves Old Product Prices After S3 Catalog Update",
      context:
        "Your deployment pipeline updates `products.json` in an S3 origin bucket with new discounted pricing. However, global customers in Tokyo and London still view the old higher price for the next 24 hours.",
      question: "Is S3 data inconsistent, and how do you resolve the price lag?",
      options: [
        {
          id: "A",
          text: "S3 has strong read-after-write consistency, but CloudFront Edge caches respect `Cache-Control: max-age=86400`. Submit a CloudFront Invalidation for `/products.json` or use versioned object URLs (`products-v2.json`).",
          verdict: "Correct! CDN Edge Caching vs Origin Consistency",
          explanation:
            "The edge cache POP is deliberately shielding S3 from origin requests. Immediate propagation requires either an invalidation request or modern immutable cache-busting filenames.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "S3 replication is slow and takes 24 hours to replicate data across global regions.",
          verdict: "Incorrect",
          explanation:
            "S3 offers immediate strong read-after-write consistency. The staleness is occurring at the CDN edge cache layer.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      title: "Scenario 9: S3 GetObject Fails with HTTP 403 Access Denied (KMS Enigma)",
      context:
        "An EC2 instance has an IAM Role with `s3:GetObject` permission explicitly granted for `arn:aws:s3:::confidential-finance/*`. Yet every download request receives `403 Access Denied`.",
      question: "What is the missing authorization layer in an encrypted AWS infrastructure?",
      options: [
        {
          id: "A",
          text: "The S3 bucket is encrypted with a Customer Managed KMS Key (SSE-KMS). The IAM role lacks `kms:Decrypt` permission on the KMS key, or the KMS Key Policy does not grant access to the role.",
          verdict: "Correct! Layered KMS Authorization",
          explanation:
            "SSE-KMS requires dual authorization: authorization on the S3 resource AND cryptographic authorization on the KMS key policy. Both must evaluate to ALLOW.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "The EC2 instance forgot to configure an SSL certificate in its local `/etc/hosts` file.",
          verdict: "Irrelevant",
          explanation:
            "AWS API authentication uses SigV4 and IAM credentials, completely independent of local OS hosts files.",
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

  // 12 Rigorous Topics
  const topics = [
    {
      id: 0,
      title: "The AWS Mental Model & Well-Architected Framework",
      week: "Foundations",
      focus: "Planes, Accounts, Regions, AZs & The 6 Architecture Pillars",
      badge: "Architecture Foundation",
      theory:
        "AWS is not a random catalog of 200 disconnected services. It is a unified cloud operating environment structured around management planes, data planes, accounts, regions, and availability zones. Architecture in AWS is the deliberate evaluation of trade-offs among the 6 Well-Architected Pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
      diagram: `AWS GLOBAL INFRASTRUCTURE & CONTROL PLANES
+--------------------------------------------------------------------------+
|                            AWS ACCOUNT                                   |
| +----------------------------------------------------------------------+ |
| | MANAGEMENT PLANE: IAM Identity Center | Organizations | Billing      | |
| +----------------------------------------------------------------------+ |
|                                                                          |
| REGION: us-east-1 (N. Virginia)                                          |
| +----------------------------------------------------------------------+ |
| | DATA PLANE: Multi-AZ Virtual Private Cloud (10.0.0.0/16)            | |
| |                                                                      | |
| |  AZ-1a (Zone 1)              AZ-1b (Zone 2)           AZ-1c (Zone 3)  | |
| |  [Datacenter Cluster]        [Datacenter Cluster]     [Datacenter]   | |
| |  - Public Subnet (IGW)       - Public Subnet (IGW)    - Public       | |
| |  - Private App Subnet        - Private App Subnet     - Private App  | |
| |  - Private DB Subnet         - Private DB Subnet      - Private DB   | |
| +----------------------------------------------------------------------+ |
+--------------------------------------------------------------------------+

THE 6 WELL-ARCHITECTED PILLARS (AWS 2026 BENCHMARK):
1. Operational Excellence: Run workloads as code, make frequent reversible changes, evolve from telemetry.
2. Security: Apply least-privilege, encrypt in transit and at rest, automate incident response.
3. Reliability: Automatically recover from failure, scale horizontally to limit blast radius, test recovery.
4. Performance Efficiency: Match instance families to workloads, democratize advanced technologies.
5. Cost Optimization: Measure efficiency, eliminate unattached EBS volumes, match capacity with demand.
6. Sustainability: Maximize resource utilization, choose modern Graviton (ARM) silicon, minimize idle runtime.`,
      keyTakeaways: [
        "Regions are physically isolated geographic areas containing 3 or more independent Availability Zones (AZs).",
        "Availability Zones are one or more discrete data centers with redundant power, networking, and connectivity.",
        "Management Plane handles configuration requests (e.g. CreateBucket, RunInstances); Data Plane handles actual live throughput (e.g. S3 GetObject, EC2 network packet forwarding).",
        "No single architectural design is universally optimal; every design is a calculated trade-off between the 6 pillars.",
      ],
      codeExample: `# AWS CLI v2: Verify identity and list multi-AZ subnets
aws sts get-caller-identity

# Query VPC subnets with Availability Zone mappings using JMESPath
aws ec2 describe-subnets \\
  --filters "Name=vpc-id,Values=vpc-0a1b2c3d4e5f6g7h8" \\
  --query "Subnets[*].{ID:SubnetId,CIDR:CidrBlock,AZ:AvailabilityZone,Public:MapPublicIpOnLaunch}" \\
  --output table`,
    },
    {
      id: 1,
      title: "IAM Deep Dive: Identities, Roles, Policies & Least Privilege",
      week: "Foundations",
      focus: "Authentication vs Authorization, Identity Center, Trust Policies & STS",
      badge: "Identity & Access",
      theory:
        "Every single AWS architectural question ultimately resolves to identity: 'Who or what is allowed to do this under what conditions?' AWS IAM controls access through authentication (who are you?) and authorization (what are you allowed to do?). Modern 2026 AWS best practices mandate AWS IAM Identity Center and temporary STS credentials for human users, strictly forbidding long-lived IAM user secret keys in application code.",
      diagram: `AWS IAM IDENTITY & EVALUATION ENGINE
HUMAN WORKER (Single Sign-On)           WORKLOAD (EC2 / ECS / Lambda)
           |                                          |
           v                                          v
+-----------------------+                  +-----------------------+
|  IAM Identity Center  |                  |    Workload Instance  |
|  (SAML 2.0 / OIDC)    |                  |    Metadata Service   |
+-----------------------+                  +-----------------------+
           |                                          |
           +--------------------+---------------------+
                                |
                                v
               [ AWS STS: AssumeRole Request ]
                                |
                                v
        +-----------------------------------------------+
        |                   IAM ROLE                    |
        |  1. TRUST POLICY: Who can assume this role?   |
        |     (e.g., Principal: { Service: "ec2" })     |
        |  2. PERMISSIONS POLICY: What can it perform?  |
        |     (e.g., Allow s3:GetObject on bucket/*)    |
        +-----------------------------------------------+
                                |
                                v
              TEMPORARY CREDENTIALS (15m - 12h)
        [ AccessKeyId, SecretAccessKey, SessionToken ]
                                |
                                v
         EVALUATION: Explicit Deny > Explicit Allow > Default Deny`,
      keyTakeaways: [
        "Never bake permanent IAM User Access Keys into application source code, Docker images, or Git repositories.",
        "A Role consists of two distinct policies: Trust Policy (who can assume it) and Permission Policy (what it can do).",
        "Permission Boundaries and Service Control Policies (SCPs) define the maximum allowable boundary of permissions.",
        "IAM Evaluation Logic: Any Explicit Deny immediately overrides any and all Allow statements.",
      ],
      codeExample: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAppBucketReadWrite",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::prod-order-receipts-2026",
        "arn:aws:s3:::prod-order-receipts-2026/*"
      ],
      "Condition": {
        "Bool": { "aws:SecureTransport": "true" }
      }
    }
  ]
}`,
    },
    {
      id: 2,
      title: "VPC Networking: Subnets, Route Tables, NAT & Endpoints",
      week: "Foundations",
      focus: "Multi-AZ Subnet Partitioning, Security Groups, NACLs & PrivateLink",
      badge: "VPC Networking",
      theory:
        "Amazon Virtual Private Cloud (VPC) provides the isolated software-defined network for your cloud infrastructure. A subnet is made 'public' strictly by virtue of having a route to an Internet Gateway (`0.0.0.0/0 → igw-xxx`) in its associated route table. Private subnets utilize NAT Gateways for outbound internet connectivity (e.g. package updates) or VPC Endpoints for private, high-speed access to AWS services without traversing the public internet.",
      diagram: `PRODUCTION MULTI-AZ VPC TOPOLOGY (10.20.0.0/16)
+---------------------------------------------------------------------------+
| INTERNET GATEWAY (igw-0123)                                              |
|   ^                                                                       |
|   | 0.0.0.0/0                                                             |
| +---------------------------+   +---------------------------+             |
| | PUBLIC SUBNET (AZ-A)      |   | PUBLIC SUBNET (AZ-B)      |             |
| | 10.20.1.0/24              |   | 10.20.2.0/24              |             |
| | [ALB Public] [NAT-GW A]   |   | [ALB Public] [NAT-GW B]   |             |
| +-------------+-------------+   +-------------+-------------+             |
|               |                               |                           |
|               v 0.0.0.0/0                     v 0.0.0.0/0                 |
| +-------------+-------------+   +-------------+-------------+             |
| | PRIVATE APP SUBNET (AZ-A) |   | PRIVATE APP SUBNET (AZ-B) |             |
| | 10.20.11.0/24             |   | 10.20.12.0/24             |             |
| | [ECS / EC2 Workloads]     |   | [ECS / EC2 Workloads]     |             |
| +-------------+-------------+   +-------------+-------------+             |
|               |                               |                           |
|               v Internal TCP 5432             v Internal TCP 5432         |
| +-------------+-------------+   +-------------+-------------+             |
| | PRIVATE DB SUBNET (AZ-A)  |   | PRIVATE DB SUBNET (AZ-B)  |             |
| | 10.20.21.0/24             |   | 10.20.22.0/24             |             |
| | [Aurora Primary Writer]   |---| [Aurora Reader Standby]   |             |
| +---------------------------+   +---------------------------+             |
|                                                                           |
| VPC ENDPOINTS (PrivateLink): Gateway (S3/DynamoDB) | Interface (SQS/KMS)  |
+---------------------------------------------------------------------------+`,
      keyTakeaways: [
        "A subnet is public ONLY if its route table points 0.0.0.0/0 to an Internet Gateway (IGW).",
        "Deploy redundant NAT Gateways per Availability Zone so an AZ outage doesn't sever outbound traffic for surviving zones.",
        "Security Groups are stateful virtual firewalls evaluated at the elastic network interface (ENI) level.",
        "VPC Gateway Endpoints for S3 and DynamoDB route traffic over private AWS backbones with zero data processing fees.",
      ],
      codeExample: `# Terraform: Secure 3-Tier Security Group Chaining
resource "aws_security_group" "alb_sg" {
  name        = "alb-public-sg"
  vpc_id      = aws_vpc.main.id
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "app_sg" {
  name   = "app-private-sg"
  vpc_id = aws_vpc.main.id
  ingress {
    description     = "Allow HTTPS from ALB only"
    from_port       = 8080
    to_port         = 8080
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id] # Chained SG reference!
  }
}`,
    },
    {
      id: 3,
      title: "EC2 & Compute: AMIs, Instance Types, EBS & Auto Scaling",
      week: "Foundations",
      focus: "Nitro Hypervisor, EBS vs Instance Store, Launch Templates & ASGs",
      badge: "Elastic Compute",
      theory:
        "Amazon EC2 provides scalable compute capacity powered by the AWS Nitro System. Instances are selected based on resource requirements (General Purpose M-series, Compute Optimized C-series, Memory Optimized R-series, and GPU P-series). Storage is split between network-attached persistent Elastic Block Store (EBS) and ephemeral local NVMe Instance Store. Auto Scaling Groups (ASGs) ensure fleet availability across multiple AZs and dynamically resize based on target metrics.",
      diagram: `ANATOMY OF AN EC2 INSTANCE (NITRO ARCHITECTURE)
+-----------------------------------------------------------------------+
| EC2 VIRTUAL MACHINE                                                   |
| +-------------------------------------------------------------------+ |
| | AMI: Amazon Linux 2026 (Kernel 6.x + Hardened Base Image)         | |
| | Instance Family: c7g.2xlarge (8 vCPU Graviton3 ARM, 16 GiB RAM)   | |
| | ENI: Elastic Network Interface (Private IP: 10.20.11.45)          | |
| | IAM Role: AppWorkloadRole (Attached via Instance Profile)         | |
| +-------------------------------------------------------------------+ |
|         |                                              |              |
|         v Network Bus (Nitro NVMe Controller)           v PCIe Bus     |
| +-----------------------------------+     +-------------------------+ |
| | EBS VOLUME (gp3)                  |     | INSTANCE STORE (NVMe)   | |
| | - Network-attached persistent     |     | - Physically on host    | |
| | - IOPS: 3,000 baseline            |     | - Ephemeral, high IOPS  | |
| | - Survives instance reboot & stop |     | - Wiped on Stop/Term!   | |
| +-----------------------------------+     +-------------------------+ |
+-----------------------------------------------------------------------+

AUTO SCALING GROUP (ASG) DYNAMICS:
Target Tracking Policy: Keep ALB Target Response Time <= 80ms OR Avg CPU <= 65%
Launch Template -> Health Checks (EC2 + ALB Target) -> Replacement on Failure`,
      keyTakeaways: [
        "EBS volumes are network-attached block devices bound to a single AZ; take automated snapshots to S3 for durability.",
        "Instance Store provides raw microsecond NVMe IOPS, but is ephemeral—data is permanently lost if the instance stops.",
        "Auto Scaling Groups automatically replace unhealthy instances and maintain fleet distribution evenly across AZs.",
        "Always attach IAM Roles via Instance Profiles rather than hardcoding AWS credentials in config files.",
      ],
      codeExample: `# AWS CLI: Create an Auto Scaling Group with Multi-AZ distribution
aws autoscaling create-auto-scaling-group \\
  --auto-scaling-group-name prod-api-asg \\
  --launch-template "LaunchTemplateName=prod-api-lt,Version=$Latest" \\
  --min-size 3 \\
  --max-size 15 \\
  --desired-capacity 6 \\
  --vpc-zone-identifier "subnet-01aaa,subnet-02bbb,subnet-03ccc" \\
  --health-check-type "ELB" \\
  --health-check-grace-period 300 \\
  --target-group-arns "arn:aws:elasticloadbalancing:us-east-1:123456789012:targetgroup/prod-api-tg/1a2b3c"`,
    },
    {
      id: 4,
      title: "S3 Object Storage: Consistency, Lifecycle & Object Lock",
      week: "Foundations",
      focus: "11 9s Durability, Storage Classes, Versioning & Immutability",
      badge: "Object Storage",
      theory:
        "Amazon S3 is a globally distributed object store offering 99.999999999% (11 9s) of durability and strong read-after-write consistency for PUT and DELETE requests. Objects consist of data, metadata, and a key. S3 provides tiered storage economics from S3 Standard down to Glacier Deep Archive, automated lifecycle transitions, Cross-Region Replication (CRR), and WORM (Write Once, Read Many) compliance via S3 Object Lock.",
      diagram: `S3 OBJECT LIFECYCLE & STORAGE TIER HIERARCHY
[ PUT Object: data.parquet ] 
        |
        v
+-------------------------------+  Day 0: High-frequency reads
| S3 Standard / Intelligent-Tier|  Millisecond latency, active analytical queries
+---------------+---------------+
                |
                v 30 Days (Lifecycle Rule)
+-------------------------------+  Day 30: Infrequently accessed
| S3 Standard-IA (Infrequent)   |  Lower storage cost, per-GB retrieval fee
+---------------+---------------+
                |
                v 90 Days (Lifecycle Rule)
+-------------------------------+  Day 90: Archive tier
| S3 Glacier Instant Retrieval  |  Sub-second retrieval, long-term retention
+---------------+---------------+
                |
                v 180 Days (Lifecycle Rule)
+-------------------------------+  Day 180+: Cold compliance archive
| S3 Glacier Deep Archive       |  Lowest cost ($0.00099/GB/mo), 12-48h retrieval
+-------------------------------+

S3 SECURITY & IMMUTABILITY:
- S3 Block Public Access (BPA): Account-wide circuit breaker against accidental public leaks
- S3 Object Lock: Compliance Mode prevents deletion even by AWS Account Root until retention expires
- S3 Versioning: Protects against accidental deletes via soft-delete markers`,
      keyTakeaways: [
        "S3 offers strong read-after-write consistency: immediate GET after PUT/DELETE returns the newest state.",
        "S3 Intelligent-Tiering automatically moves objects between access tiers with zero operational overhead or retrieval fees.",
        "Replication is NOT a backup: without Versioning and Object Lock, an accidental batch DELETE replicates to the replica!",
        "Enable S3 Block Public Access (BPA) at the account level as an inviolable security baseline.",
      ],
      codeExample: `# AWS S3 Bucket Lifecycle Configuration (JSON)
{
  "Rules": [
    {
      "ID": "MoveLogsToColdArchive",
      "Status": "Enabled",
      "Filter": { "Prefix": "logs/" },
      "Transitions": [
        { "Days": 30, "StorageClass": "STANDARD_IA" },
        { "Days": 90, "StorageClass": "GLACIER_IR" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "NoncurrentVersionExpiration": { "NoncurrentDays": 30 }
    }
  ]
}`,
    },
    {
      id: 5,
      title: "Relational Databases: RDS Multi-AZ vs Aurora Distributed Storage",
      week: "Foundations",
      focus: "Storage Quorum, Automated Failover, Cluster Endpoints & PITR",
      badge: "Relational DB",
      theory:
        "Amazon RDS automates relational database operations (PostgreSQL, MySQL). Standard RDS Multi-AZ uses synchronous block-level storage replication to a passive standby in another AZ with a 60-120 second failover window. Amazon Aurora redesigns relational architecture by decoupling compute from storage: Aurora replicates log records 6 ways across 3 AZs using a 4/6 write quorum and 3/6 read quorum, enabling sub-30-second automated failover without storage replay.",
      diagram: `RDS MULTI-AZ vs AURORA DISTRIBUTED LOG-STRUCTURED STORAGE

1. STANDARD RDS MULTI-AZ (Block-Level Physical Replication):
[ Primary Writer (AZ-A) ] ==== Synchronous Block Sync ====> [ Passive Standby (AZ-B) ]
         |                                                            |
    [ EBS Volume ]                                               [ EBS Volume ]
    (Standby CANNOT serve read queries! Automated failover takes 60-120s via DNS shift)

2. AMAZON AURORA (Decoupled Compute & 6-Way Distributed Storage Quorum):
[ Writer Instance (AZ-A) ]            [ Reader Replica 1 (AZ-B) ]   [ Reader Replica 2 (AZ-C) ]
          \\                                      |                              /
           ======================================================================
                                          | Shared Cluster Storage Bus
                                          v
   +--------------------------------------------------------------------------+
   | AURORA SHARED STORAGE FLEET: 6 Storage Copies Across 3 AZs (10GB Segments)|
   | AZ-A: [ Copy 1 ] [ Copy 2 ] | AZ-B: [ Copy 3 ] [ Copy 4 ] | AZ-C: [ 5 ] [6] |
   | Write Quorum: 4 of 6 nodes must acknowledge log record write             |
   | Read Quorum: 3 of 6 nodes reconstruct state                              |
   +--------------------------------------------------------------------------+
Failover: Any Reader promoted to Writer in <30s. Zero storage sync delay!`,
      keyTakeaways: [
        "In standard RDS Multi-AZ, the standby instance is passive and cannot serve read traffic.",
        "Aurora Read Replicas share the exact same underlying storage as the writer; replication lag is typically under 10ms.",
        "Always configure applications with the Aurora Cluster Writer Endpoint and Reader Endpoint, never individual instance IPs.",
        "Point-in-Time Recovery (PITR) continuously uploads write logs to S3, enabling restoration to any second within retention.",
      ],
      codeExample: `# Node.js: Connecting to Aurora with Cluster Writer & Reader Endpoints
const { Pool } = require('pg');

// Writer Pool for INSERT / UPDATE / DELETE transactions
const writerPool = new Pool({
  host: 'prod-aurora-cluster.cluster-c1a2b3c4d5.us-east-1.rds.amazonaws.com',
  database: 'commerce',
  user: 'app_user',
  max: 20, // Keep connection pool bounded!
});

// Reader Pool for SELECT queries (auto-load balanced across replicas)
const readerPool = new Pool({
  host: 'prod-aurora-cluster.cluster-ro-c1a2b3c4d5.us-east-1.rds.amazonaws.com',
  database: 'commerce',
  user: 'app_user',
  max: 50,
});`,
    },
    {
      id: 6,
      title: "DynamoDB & ElastiCache: Single-Table Design & In-Memory Speed",
      week: "App & Data Services",
      focus: "Query-First Modeling, GSIs, Hot Partitions, Streams & Cache-Aside",
      badge: "NoSQL & Caching",
      theory:
        "Amazon DynamoDB is a fully managed NoSQL database delivering consistent single-digit millisecond latency at any scale. Unlike SQL, DynamoDB schema design begins with query access patterns, frequently employing Single-Table Design with composite Partition Keys (PK) and Sort Keys (SK). Amazon ElastiCache (Valkey, Redis OSS) provides sub-millisecond in-memory caching utilizing the Cache-Aside pattern to prevent database saturation.",
      diagram: `DYNAMODB SINGLE-TABLE DESIGN & ELASTICACHE CACHE-ASIDE PATTERN

1. DYNAMODB SINGLE-TABLE SCHEMA:
+----------------------+--------------------+------------------------------------+
| PARTITION KEY (PK)   | SORT KEY (SK)      | ATTRIBUTES (Payload Data)          |
+----------------------+--------------------+------------------------------------+
| USER#usr_101         | PROFILE            | { name: "Aditi", email: "..." }    |
| USER#usr_101         | ORDER#2026-10-01   | { total: 1499, status: "SHIPPED" } |
| USER#usr_101         | ORDER#2026-10-08   | { total: 4999, status: "PENDING" } |
| PRODUCT#sku_99       | METADATA           | { title: "MacBook Pro", stock: 12} |
+----------------------+--------------------+------------------------------------+
Query: PK = "USER#usr_101" AND SK begins_with("ORDER#") fetches all user orders!

2. CACHE-ASIDE PATTERN FLOW:
Application ---> (1) GET user:101 ---> [ ElastiCache Valkey ]
    |                                            |
    | (Cache Hit) <--- Return Cached JSON <------+
    |
    +-----> (Cache Miss) ---> [ DynamoDB / Aurora ]
                                     |
    <------- Return DB Record <------+
    |
    +-----> (2) SET user:101 (TTL: 300s) ---> [ ElastiCache ]`,
      keyTakeaways: [
        "In DynamoDB, design your tables around queries, not around entities or relational normal forms.",
        "A bad Partition Key (e.g. static status 'PENDING') concentrates all traffic onto one storage partition, triggering throttles.",
        "DynamoDB Streams records every INSERT/MODIFY/DELETE in real-time with a 24-hour retention window for event triggers.",
        "Cache-Aside pattern shields databases; always apply sensible TTLs and jitter to prevent cache stampedes.",
      ],
      codeExample: `# DynamoDB Boto3 Python: Single-Table Query with Composite Key
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('ProductionCommerceTable')

# Query user profile and orders in a single high-speed roundtrip
response = table.query(
    KeyConditionExpression=Key('PK').eq('USER#usr_101') & Key('SK').begins_with('ORDER#')
)
orders = response['Items']`,
    },
    {
      id: 7,
      title: "Edge & Traffic: Route 53, CloudFront & Application Load Balancers",
      week: "App & Data Services",
      focus: "Routing Policies, Health Checks, Cache Behaviors & Layer-7 Rules",
      badge: "Traffic Routing",
      theory:
        "Global internet ingress in AWS is orchestrated across three layers: Amazon Route 53 provides highly available DNS with latency-based, geo-proximity, and health-checked failover routing. Amazon CloudFront caches static and dynamic content at edge Points of Presence (PoPs) worldwide. Application Load Balancers (ALBs) provide Layer-7 HTTP/HTTPS traffic inspection, path routing, and target health evaluation across Multi-AZ container fleets.",
      diagram: `GLOBAL INGRESS TRAFFIC PIPELINE
                     [ GLOBAL USER BROWSER ]
                                |
                                v
               [ ROUTE 53: Latency & Health DNS ]
              Resolves to lowest latency CloudFront Edge
                                |
                                v
               [ CLOUDFRONT EDGE DISTRIBUTION ]
          /                                          \\
 (Cache Hit / Static)                       (Cache Miss / Dynamic API)
         |                                           |
         v                                           v
[ S3 Origin: Assets ]                    [ APPLICATION LOAD BALANCER ]
                                         (Layer-7 Path-Based Routing)
                                        /                             \\
                            Path: /api/checkout/*             Path: /api/catalog/*
                                     |                                 |
                                     v                                 v
                         [ Target Group: Checkout ]        [ Target Group: Catalog ]
                         (ECS Fargate Tasks AZ-A/B)        (ECS Fargate Tasks AZ-A/B)`,
      keyTakeaways: [
        "Route 53 Alias records map domain names directly to AWS resources (CloudFront, ALB, S3) with zero DNS query fees.",
        "Route 53 Health Checks automatically divert global DNS traffic away from impaired regions.",
        "CloudFront Cache Behaviors map URL paths (e.g. `/static/*` to S3, `/api/*` to ALB) with custom headers and TTL policies.",
        "ALB operates at Layer 7: routes based on HTTP methods, host headers, URL paths, and query string parameters.",
      ],
      codeExample: `# CloudFront Custom Cache Policy (Terraform)
resource "aws_cloudfront_cache_policy" "api_optimized" {
  name        = "ApiDynamicNoCachePolicy"
  default_ttl = 0
  max_ttl     = 0
  min_ttl     = 0
  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config { cookie_behavior = "all" }
    headers_config { header_behavior = "whitelist", headers { items = ["Authorization", "Host"] } }
    query_strings_config { query_string_behavior = "all" }
  }
}`,
    },
    {
      id: 8,
      title: "Containers & Serverless: ECS Fargate, EKS Auto Mode & Lambda",
      week: "App & Data Services",
      focus: "ECS vs EKS, Serverless Compute, EKS Access Entries & Concurrency",
      badge: "Modern Compute",
      theory:
        "AWS compute spans serverless functions (AWS Lambda), AWS-native container management (Amazon ECS with Fargate), and enterprise Kubernetes (Amazon EKS). Modern 2026 EKS leverages EKS Auto Mode for automated node lifecycle and EKS Access Entries for fine-grained IAM authentication. AWS Lambda offers automated scaling, but requires reserved concurrency caps and RDS Proxy connection multiplexing to avoid exhausting backend databases.",
      diagram: `CONTAINER & SERVERLESS DECISION MATRIX
+-------------------+-----------------------------------+-----------------------------------+
| DIMENSION         | AWS LAMBDA                        | AMAZON ECS (FARGATE)              | AMAZON EKS (AUTO MODE)            |
+-------------------+-----------------------------------+-----------------------------------+
| Execution Model   | Event-driven ephemeral function   | Long-running microservice tasks   | Standardized Kubernetes Pods      |
| Max Duration      | 15 minutes hard timeout           | Indefinite                        | Indefinite                        |
| Cold Start Impact | 50ms - 800ms (mitigate w/ Prov)  | Minutes on initial container pull | Seconds with pre-warmed nodes     |
| Operations        | Zero infrastructure management    | Serverless task definitions       | Managed K8s control plane + Helm  |
| Ideal Workload    | Webhooks, queues, batch ETL, S3   | Web APIs, background consumers    | Multi-cloud K8s, complex meshes   |
+-------------------+-----------------------------------+-----------------------------------+

THE LAMBDA DATABASE STARVATION TRAP:
40,000 RPS Surge ---> [ Lambda Autoscales to 4,000 Pods ] 
                               | (4,000 Direct TCP Connections)
                               v
                     [ RDS / Aurora DB (Max Conns = 1,500) ]
                     STATUS: THREAD EXHAUSTION & CRASH!
REMEDY: Lambda -> [ AWS RDS Proxy (Multiplexed Pool) ] -> Aurora DB`,
      keyTakeaways: [
        "Use ECS when you want containers with AWS-native simplicity; use EKS when Kubernetes portability is a hard requirement.",
        "Fargate Spot offers up to 70% cost savings for fault-tolerant background workers with a 2-minute interruption notice.",
        "Reserved Concurrency guarantees execution capacity for critical functions while acting as a blast-radius limiter.",
        "Provisioned Concurrency initializes execution environments in advance, eliminating cold start latency for interactive APIs.",
      ],
      codeExample: `# AWS SAM / Serverless Template: Lambda with Reserved Concurrency & RDS Proxy
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Resources:
  PaymentProcessingFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs20.x
      ReservedConcurrentExecutions: 500 # Caps concurrency to protect RDS!
      VpcConfig:
        SecurityGroupIds: [sg-01a2b3c4d5e6]
        SubnetIds: [subnet-app-a, subnet-app-b]
      Environment:
        Variables:
          DB_PROXY_ENDPOINT: prod-rds-proxy.proxy-c1a2b3.us-east-1.rds.amazonaws.com`,
    },
    {
      id: 9,
      title: "Distributed Messaging: SQS, SNS & EventBridge Architectures",
      week: "App & Data Services",
      focus: "Standard vs FIFO, Visibility Timeout, DLQs, Fanout & Event Buses",
      badge: "Event Messaging",
      theory:
        "Asynchronous decoupling prevents cascading failures across distributed microservices. Amazon SQS provides pull-based message queuing with Visibility Timeout and Dead-Letter Queues (DLQs). Amazon SNS provides push-based 1-to-N pub/sub fanout with subscription attribute filtering. Amazon EventBridge serves as an enterprise serverless event bus with declarative schema pattern matching and point-to-point EventBridge Pipes.",
      diagram: `MESSAGING ARCHITECTURE: SNS PUB/SUB FANOUT TO SQS QUEUES
                     [ Order Checkout Service ]
                                 |
                                 v
                   [ SNS TOPIC: OrderPlaced.fifo ]
                 /               |               \\
 (Filter: region=IN)             |                (Filter: VIP=true)
        |                        v                       |
        v               [ SQS Queue: Billing ]           v
[ SQS Queue: Inventory ]         |               [ SQS Queue: Priority ]
        |                        v                       |
        v               [ Billing Workers ]              v
[ Inventory Workers ]     (Idempotent!)          [ Priority Dispatch ]
        |
   (If 3 Retries Fail)
        |
        v
[ SQS Dead-Letter Queue (DLQ) ] ---> CloudWatch Alarm ---> PagerDuty Alert

SQS VISIBILITY TIMEOUT:
Worker Receives Message -> Message becomes invisible for 30s.
- Worker succeeds -> Calls DeleteMessage -> Message removed.
- Worker crashes -> 30s expires -> Message becomes visible again!`,
      keyTakeaways: [
        "Standard SQS guarantees at-least-once delivery; consumer workers MUST be designed to be idempotent.",
        "FIFO SQS guarantees exact ordering and exactly-once processing (up to 3,000 msg/sec with high-throughput batching).",
        "Visibility Timeout hides a message while being processed; set it to 6x your maximum function processing duration.",
        "Use Dead-Letter Queues (DLQs) with maxReceiveCount=3 to prevent poison-pill messages from blocking processing forever.",
      ],
      codeExample: `# Python SQS Consumer with Idempotency & Explicit Message Deletion
import boto3
import json

sqs = boto3.client('sqs', region_name='us-east-1')
queue_url = 'https://sqs.us-east-1.amazonaws.com/123456789012/order-queue'

def poll_and_process():
    response = sqs.receive_message(
        QueueUrl=queue_url,
        MaxNumberOfMessages=10,
        WaitTimeSeconds=20, # Long polling reduces empty-response API costs!
        VisibilityTimeout=45
    )
    for msg in response.get('Messages', []):
        body = json.loads(msg['Body'])
        order_id = body['order_id']
        
        # Idempotency check in DynamoDB
        if process_order_idempotent(order_id, body):
            sqs.delete_message(QueueUrl=queue_url, ReceiptHandle=msg['ReceiptHandle'])`,
    },
    {
      id: 10,
      title: "Observability & Cryptography: CloudWatch & AWS KMS",
      week: "Distributed Systems",
      focus: "SLOs, Metrics, Logs Insights, Envelope Encryption & Key Policies",
      badge: "Security & Ops",
      theory:
        "Production systems require deep observability and zero-trust cryptography. Amazon CloudWatch provides telemetry across metrics, centralized logs, composite alarms, and Service Level Objectives (SLOs) with error budget tracking. AWS Key Management Service (KMS) protects sensitive data using Hardware Security Modules (HSMs) and envelope encryption: a Customer Managed Key (CMK) protects a local Data Key that encrypts massive data sets locally.",
      diagram: `AWS KMS ENVELOPE ENCRYPTION & CLOUDWATCH SRE OBSERVABILITY

1. ENVELOPE ENCRYPTION WORKFLOW:
Application ---> (1) kms:GenerateDataKey ---> [ AWS KMS (CMK in HSM) ]
    |                                                |
    | <--- Plaintext Data Key + Encrypted Data Key <-+
    |
    v (2) Encrypt 10 GB file in RAM using Plaintext Data Key
[ Ciphertext Data ] + [ Encrypted Data Key (Metadata) ]
    |
    v (3) Erase Plaintext Data Key from RAM! Store Ciphertext to S3.

2. CLOUDWATCH SRE TELEMETRY STACK:
[ ECS / Lambda Workloads ] ---> OpenTelemetry / CloudWatch Agent
                                        |
      +---------------------------------+-------------------------------+
      |                                 |                               |
      v                                 v                               v
[ CLOUDWATCH METRICS ]         [ CLOUDWATCH LOGS ]            [ CLOUDWATCH TRACES ]
- ALB TargetResponseTime       - CloudWatch Logs Insights     - X-Ray / OTel Spans
- SQS ApproximateAgeOfOldest   - Log Metric Filters           - End-to-End Latency
      |                                 |                               |
      +---------------------------------+-------------------------------+
                                        v
                    [ COMPOSITE ALARM & SRE SLO ]
              SLO: 99.95% successful requests over 30 days
             Alert on Error Budget Burn Rate > 2% per hour!`,
      keyTakeaways: [
        "In CloudWatch, do not alert on raw CPU; alert on user-impacting symptoms (p95 latency, error rates, queue age).",
        "SLOs track reliability targets and error budgets, separating critical pages from minor transient spikes.",
        "KMS Key Policies are the primary access control mechanism; an IAM policy alone cannot grant KMS access if the Key Policy denies it.",
        "Envelope encryption allows encrypting multi-gigabyte files locally without sending raw datasets over the network to KMS.",
      ],
      codeExample: `# AWS KMS Key Policy Snippet granting least privilege to an App Role
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAppRoleDecryptOnly",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:role/ProductionPaymentRole"
      },
      "Action": [
        "kms:Decrypt",
        "kms:DescribeKey"
      ],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "kms:ViaService": "s3.us-east-1.amazonaws.com"
        }
      }
    }
  ]
}`,
    },
    {
      id: 11,
      title: "Capstone Architecture Blueprint: 10M-User E-Commerce System",
      week: "Distributed Systems",
      focus: "End-to-End Multi-AZ System, Request Lifecycle & 14 Lab Progression",
      badge: "Capstone Blueprint",
      theory:
        "The Module 7 Capstone integrates every architectural concept into a production blueprint engineered for 10 million users, 100,000 peak RPS, 99.99% availability, Multi-AZ resilience, and sub-second checkout latencies. The design utilizes Route 53, CloudFront edge caching, ALB Layer-7 routing, ECS Fargate containers, ElastiCache Valkey, polyglot persistence (Aurora PostgreSQL + DynamoDB), asynchronous SQS/SNS fanout, and KMS encryption.",
      diagram: `PRODUCTION AWS COMMERCE PLATFORM (10M USERS / 100K PEAK RPS)
[ GLOBAL USERS ]
       |
       v
[ ROUTE 53 DNS ] -> (Geo-Proximity / Latency Routing)
       |
       v
[ CLOUDFRONT CDN + AWS WAF ]
   /                      \\
 (Static S3 Assets)       (Dynamic API / HTTPS 443)
                          |
                          v
         [ APPLICATION LOAD BALANCER (Multi-AZ) ]
                 /                   \\
         (AZ-A / Subnet)             (AZ-B / Subnet)
                |                           |
                v                           v
     [ ECS FARGATE API ]         [ ECS FARGATE API ]
             \\                            /
              +-------------+------------+
                            |
         +------------------+------------------+
         |                                     |
         v                                     v
[ ELASTICACHE VALKEY ]               [ POLYGLOT PERSISTENCE ]
- Product Catalog Cache             - Aurora PostgreSQL (Cluster Writer + Readers)
- User Sessions (TTL: 1h)           - DynamoDB (Orders, Shopping Cart, Single-Table)
                                               |
                                     (DynamoDB Streams / CDC)
                                               |
                                               v
                                  [ EVENTBRIDGE / SNS FANOUT ]
                                  /            |             \\
                                 v             v              v
                           [ SQS: Pay ]  [ SQS: Ship ]  [ SQS: Email ]
                                 |             |              |
                                 v             v              v
                           [ Lambda ]    [ Lambda ]     [ Lambda ]
                                 |             |              |
                                 +-------------+--------------+
                                               |
                                               v
                                  [ S3 DATA LAKE + KMS + CLOUDWATCH ]`,
      keyTakeaways: [
        "Polyglot persistence allocates workloads to optimal engines: Aurora for ACID financial ledgers; DynamoDB for high-velocity carts.",
        "Event-driven decoupling ensures checkout succeeds in <100ms: payment, shipping, and email notifications execute asynchronously via SQS.",
        "CloudWatch Application Signals and OpenTelemetry traces pinpoint microsecond latency regressions across distributed microservices.",
        "RPO <= 1 minute and RTO <= 15 minutes are guaranteed through Aurora continuous PITR and multi-AZ self-healing ECS tasks.",
      ],
      codeExample: `# Complete 14-Step Progressive AWS Mastery Sequence:
# Lab 1: IAM Identity Center & Custom STS Role Delegation
# Lab 2: Multi-AZ VPC with Public/Private Subnets & Dual NAT Gateways
# Lab 3: Hardened EC2 Launch Templates with Auto Scaling Groups
# Lab 4: Secure S3 Bucket with Object Lock, Versioning & Lifecycle Rules
# Lab 5: Amazon Aurora Multi-AZ Cluster with Read Replica Offloading
# Lab 6: DynamoDB Single-Table Design with Composite Keys & GSIs
# Lab 7: ElastiCache Valkey Cluster with Cache-Aside Acceleration
# Lab 8: Route 53 DNS Failover + CloudFront CDN + ALB L7 Routing
# Lab 9: Serverless AWS Lambda with Reserved Concurrency & RDS Proxy
# Lab 10: Amazon ECS Fargate Container Deployment with Health Checks
# Lab 11: Amazon EKS Cluster with EKS Auto Mode & Access Entries
# Lab 12: Asynchronous SQS Standard/FIFO Queues with DLQ Redrive & SNS Fanout
# Lab 13: Amazon CloudWatch Composite Alarms, SLOs & KMS Envelope Encryption
# Lab 14: Final Capstone: 10M-User Production E-Commerce Platform Stress Test`,
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
          currentModuleId="aws"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova AWS AI"
        />

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#18181b] p-8 md:p-12 text-white shadow-2xl mb-10">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1 text-xs font-mono font-bold text-orange-400 mb-4">
              <Cloud size={14} />
              <span>Deep AWS Engineering</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
              The AWS Operating Environment: Well-Architected Systems
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300">
              No longer memorizing isolated product names. We master AWS as a unified cloud operating environment:
              IAM identity boundaries, Multi-AZ VPC networking, EC2 Nitro compute, S3 consistency, Aurora log-structured
              storage quorum, DynamoDB single-table design, ECS/EKS Auto Mode containers, Lambda concurrency traps, SQS/SNS
              asynchronous fanout, CloudWatch SRE observability, and KMS envelope encryption.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Foundations: IAM • VPC • EC2 • S3 • RDS • Aurora
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Services: DynamoDB • ElastiCache • Route 53 • CloudFront • ALB • Lambda • ECS • EKS
              </span>
              <span className="rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5">
                Capstone: 10M-User E-Commerce & 9-Event GameDay Defense
              </span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 1 & 2: TWO-COLUMN LAB DECK */}
        <div className="grid gap-8 lg:grid-cols-12 mb-12">
          {/* TOOL 1: AWS SERVICE SELECTOR & DECISION TREE (COL-7) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive AWS Service Selector & Decision Tree
                    </h3>
                    <p className="text-xs text-stone-500">
                      Map workload constraints to exact architectural recommendations (Section 121)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Architecture Matcher
                </span>
              </div>

              {/* Workload Category Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[
                  { id: "compute", label: "Compute" },
                  { id: "storage", label: "Storage" },
                  { id: "database", label: "Databases" },
                  { id: "messaging", label: "Messaging" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedWorkloadCategory(cat.id);
                      setSelectedRequirement(decisionTreeOptions[cat.id][0].id);
                    }}
                    className={`rounded-xl py-2 px-2 text-center font-mono text-xs font-bold transition ${
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
                  Select Workload Requirement:
                </label>
                {decisionTreeOptions[selectedWorkloadCategory].map((opt) => (
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
                const match = decisionTreeOptions[selectedWorkloadCategory].find(
                  (o) => o.id === selectedRequirement
                );
                if (!match) return null;
                return (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50/30 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-orange-200/60">
                      <span className="font-mono text-[11px] font-bold text-stone-500 uppercase">
                        Recommended AWS Service
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
                        <strong>Avoid Mistake: </strong>
                        {match.antiPattern}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* TOOL 2: LAMBDA CONCURRENCY & RDS CONNECTION POOL CALCULATOR (COL-5) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Lambda Concurrency & RDS Pool Simulator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate the Serverless DB Connection Starvation Trap (Section 70)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Capacity Sizer
                </span>
              </div>

              {/* Sliders */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Peak Ingress Traffic:</span>
                    <span className="font-mono text-orange-600">{incomingRps.toLocaleString()} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="60000"
                    step="1000"
                    value={incomingRps}
                    onChange={(e) => setIncomingRps(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Lambda Execution Duration:</span>
                    <span className="font-mono text-orange-600">{functionDurationMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="20"
                    value={functionDurationMs}
                    onChange={(e) => setFunctionDurationMs(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Aurora Max Connections (Instance RAM limit):</span>
                    <span className="font-mono text-stone-700">{rdsMaxConnections.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={rdsMaxConnections}
                    onChange={(e) => setRdsMaxConnections(Number(e.target.value))}
                    className="w-full accent-stone-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Reserved Concurrency Cap (0 = Unlimited):</span>
                    <span className="font-mono text-stone-700">
                      {reservedConcurrencyCap === 0 ? "Unlimited" : reservedConcurrencyCap.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="250"
                    value={reservedConcurrencyCap}
                    onChange={(e) => setReservedConcurrencyCap(Number(e.target.value))}
                    className="w-full accent-stone-700"
                  />
                </div>
              </div>

              {/* Real-time Math Output */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Calculated Active Concurrent Lambdas:</span>
                  <span className="font-mono font-bold text-[#18181b]">
                    {lambdaDbCalculations.activeInstances.toLocaleString()} containers
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Direct DB Connections Demand:</span>
                  <span
                    className={`font-mono font-bold ${
                      lambdaDbCalculations.directSaturationPct > 100
                        ? "text-rose-600"
                        : lambdaDbCalculations.directSaturationPct > 75
                        ? "text-amber-600"
                        : "text-emerald-700"
                    }`}
                  >
                    {lambdaDbCalculations.directDbConnections.toLocaleString()} ({lambdaDbCalculations.directSaturationPct}% pool)
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-600">With AWS RDS Proxy (Multiplexed):</span>
                  <span className="font-mono font-bold text-emerald-700">
                    {lambdaDbCalculations.proxyDbConnections.toLocaleString()} conns ({lambdaDbCalculations.proxySaturationPct}% pool)
                  </span>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div
                className={`mt-4 rounded-xl p-3 text-xs leading-relaxed ${
                  lambdaDbCalculations.status === "critical"
                    ? "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                    : lambdaDbCalculations.status === "warning"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                }`}
              >
                {lambdaDbCalculations.message}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 3: AWS GAMEDAY FAILURE SIMULATOR (9 SCENARIOS FROM SECTION 114) */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e7e3da]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-mono text-[10px] font-bold text-rose-700 uppercase mb-2">
                <AlertTriangle size={12} />
                <span>Section 114 Benchmark</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                AWS GameDay: 9 Real-World Failure Scenarios
              </h2>
              <p className="text-xs md:text-sm text-stone-500 mt-1">
                Test your architectural defense across task crashes, AZ severance, Aurora failovers, hot partitions, and KMS locks.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2 text-right">
                <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">GameDay Score</div>
                <div className="text-lg font-mono font-bold text-orange-600">{gameScore} / 90 Pts</div>
              </div>
            </div>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {gameDayScenarios.map((sc, idx) => {
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
                  <span>Scenario {sc.id}</span>
                  {status === "correct" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                  {status === "incorrect" && <span className="h-2 w-2 rounded-full bg-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const currentScenario = gameDayScenarios[gameScenarioIndex];
            const answerHistory = gameHistory[gameScenarioIndex];

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
                  Module 7 Topic Index
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
                Module 8: Azure Architecture (Entra ID, Cosmos DB, Managed Redis, Front Door, AKS Automatic, Service Bus & AzureShop Blueprint).
              </p>
              <button
                onClick={() => navigate("/learning/cloud/azure")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Launch Module 8: Azure
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

              {/* ASCII / MERMAID ARCHITECTURAL DIAGRAM */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Architectural Blueprint & Data Plane Flow
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">Technical Topology</span>
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
                <span>Nova AI AWS Architect Tutor</span>
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
                module="aws"
                currentTopic={`aws-${currentTopic.id}`}
                subtopic={currentTopic.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
