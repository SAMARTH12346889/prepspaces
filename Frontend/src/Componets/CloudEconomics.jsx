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
  Calculator,
  PieChart,
  FileText,
  Percent,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 12: CLOUD ECONOMICS & FINOPS                        */
/* Week 22: Designing for Value, Not Merely Minimizing the Bill               */
/* FinOps Framework (Inform -> Optimize -> Operate), Unit Economics,          */
/* Commitments (Savings Plans, CUDs), Spot Economics, Storage Lifecycle,      */
/* Network Egress Traps, FOCUS Open Standard, 5 Production Failure Games       */
/* -------------------------------------------------------------------------- */

export default function CloudEconomics() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: FinOps Unit Economics & Hybrid Fleet Portfolio Simulator State
  const [workloadShape, setWorkloadShape] = useState("steady"); // "steady", "bursty", "seasonal", "unpredictable"
  const [baselineVcpu, setBaselineVcpu] = useState(500); // 500 vCPUs
  const [peakVcpu, setPeakVcpu] = useState(1500); // 1500 vCPUs
  const [committedPercent, setCommittedPercent] = useState(60); // 60% of baseline committed
  const [spotPercent, setSpotPercent] = useState(20); // 20% on Spot
  const [monthlyOrders, setMonthlyOrders] = useState(2500000); // 2.5 Million Orders

  // Tool 2: Storage Lifecycle & Retrieval TCO Calculator State
  const [datasetSizeTb, setDatasetSizeTb] = useState(250); // 250 TB
  const [monthlyIngestionGb, setMonthlyIngestionGb] = useState(15000); // 15 TB/month
  const [retrievalPercent, setRetrievalPercent] = useState(5); // 5% accessed per month
  const [storageStrategy, setStorageStrategy] = useState("lifecycle-automated"); // "hot-only", "lifecycle-automated"

  // Tool 3: Cloud Economics GameDay Simulator State (5 Failure Games from Section 101)
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

  // Tool 1: Hybrid Fleet Portfolio & Unit Economics Calculations
  const fleetCalculations = useMemo(() => {
    // Pricing baseline benchmarks:
    // On-Demand vCPU: ~$0.045 / hour
    // 3-Year Commitment vCPU (Savings Plan / CUD): ~$0.021 / hour (approx 53% discount)
    // Spot vCPU: ~$0.009 / hour (approx 80% discount)
    const onDemandRate = 0.045;
    const committedRate = 0.021;
    const spotRate = 0.009;

    const onDemandPercent = Math.max(0, 100 - committedPercent - spotPercent);

    // Active average vCPU demand based on workload shape
    let averageActiveVcpu = baselineVcpu;
    if (workloadShape === "bursty") {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.35;
    } else if (workloadShape === "seasonal") {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.6;
    } else if (workloadShape === "unpredictable") {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.45;
    } else {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.15;
    }

    // Capacity provisioned by tier
    const committedVcpuCount = (baselineVcpu * committedPercent) / 100;
    const spotVcpuCount = (averageActiveVcpu * spotPercent) / 100;
    const onDemandVcpuCount = Math.max(0, averageActiveVcpu - committedVcpuCount - spotVcpuCount);

    // Costs
    const hourlyCommittedCost = committedVcpuCount * committedRate;
    const hourlySpotCost = spotVcpuCount * spotRate;
    const hourlyOnDemandCost = onDemandVcpuCount * onDemandRate;
    const totalHourlyCost = hourlyCommittedCost + hourlySpotCost + hourlyOnDemandCost;
    const totalMonthlyCost = totalHourlyCost * 730;

    // Unit Economics: Cost per business order
    const costPerOrder = monthlyOrders > 0 ? totalMonthlyCost / monthlyOrders : 0;

    // Commitment Utilization Rate
    const commitmentUtilization = Math.min(100, Math.round((averageActiveVcpu / (committedVcpuCount || 1)) * 100));

    // Underutilization Risk / Waste Penalty
    const unutilizedCommitmentVcpu = Math.max(0, committedVcpuCount - averageActiveVcpu);
    const monthlyWastedCommitment = unutilizedCommitmentVcpu * committedRate * 730;

    // Resilience rating
    let resilienceRating = "High";
    if (spotPercent > 40) resilienceRating = "At Risk (Excessive Spot Preemption Exposure)";
    else if (spotPercent > 25) resilienceRating = "Moderate (Requires Checkpointing)";

    return {
      onDemandPercent,
      averageActiveVcpu: Math.round(averageActiveVcpu),
      totalMonthlyCost: Math.round(totalMonthlyCost),
      costPerOrder: costPerOrder.toFixed(4),
      commitmentUtilization,
      monthlyWastedCommitment: Math.round(monthlyWastedCommitment),
      resilienceRating,
    };
  }, [workloadShape, baselineVcpu, peakVcpu, committedPercent, spotPercent, monthlyOrders]);

  // Tool 2: Storage Lifecycle & Retrieval TCO Calculations
  const storageCalculations = useMemo(() => {
    // Benchmark Rates:
    // Hot / Standard: $0.023 / GB / month ($23 / TB) | Retrieval: $0.00
    // Cool / Nearline: $0.0125 / GB / month ($12.50 / TB) | Retrieval: $0.01 / GB
    // Cold / Archive: $0.004 / GB / month ($4.00 / TB) | Retrieval: $0.02 / GB + request fee
    const hotRatePerTb = 23.0;

    let monthlyAtRestCost = 0;
    let monthlyRetrievalCost = 0;
    let strategyNote = "";
    let retrievalWarning = false;

    if (storageStrategy === "hot-only") {
      monthlyAtRestCost = datasetSizeTb * hotRatePerTb;
      monthlyRetrievalCost = 0; // Zero retrieval fees on standard tier
      strategyNote = "Hot / Standard Tier: Highest storage cost, but zero retrieval penalties. Ideal for high-frequency access datasets.";
    } else {
      // Automated Lifecycle: 20% in Hot ($23/TB), 30% in Cool ($12.50/TB), 50% in Archive ($4/TB)
      const hotCost = datasetSizeTb * 0.2 * 23.0;
      const coolCost = datasetSizeTb * 0.3 * 12.5;
      const archiveCost = datasetSizeTb * 0.5 * 4.0;
      monthlyAtRestCost = hotCost + coolCost + archiveCost;

      // Retrieval fees if accessing data stored in cool/archive
      const dataRetrievedTb = (datasetSizeTb * (retrievalPercent / 100));
      // Assume 70% of retrieved data is from cool/archive
      const coolArchiveRetrievedGb = dataRetrievedTb * 0.7 * 1000;
      monthlyRetrievalCost = coolArchiveRetrievedGb * 0.015; // Average $0.015/GB retrieval fee

      if (retrievalPercent > 15) {
        retrievalWarning = true;
        strategyNote = "WARNING: High retrieval rate (>15%) on archived data! Retrieval fees and minimum storage durations exceed cold-tier storage savings.";
      } else {
        strategyNote = "Optimized Lifecycle: Tiered across Hot, Cool, and Archive based on age. Massive at-rest savings with predictable low retrieval access.";
      }
    }

    const totalMonthlyStorageCost = monthlyAtRestCost + monthlyRetrievalCost;
    const annualStorageCost = totalMonthlyStorageCost * 12;
    const hotOnlyAnnualCost = datasetSizeTb * hotRatePerTb * 12;
    const netAnnualSavings = Math.max(0, hotOnlyAnnualCost - annualStorageCost);
    const savingsPercent = hotOnlyAnnualCost > 0 ? Math.round((netAnnualSavings / hotOnlyAnnualCost) * 100) : 0;

    return {
      monthlyAtRestCost: Math.round(monthlyAtRestCost),
      monthlyRetrievalCost: Math.round(monthlyRetrievalCost),
      totalMonthlyStorageCost: Math.round(totalMonthlyStorageCost),
      annualStorageCost: Math.round(annualStorageCost),
      netAnnualSavings: Math.round(netAnnualSavings),
      savingsPercent,
      strategyNote,
      retrievalWarning,
    };
  }, [datasetSizeTb, monthlyIngestionGb, retrievalPercent, storageStrategy]);

  // Tool 3: Cloud Economics GameDay Scenarios (5 Failure Games from Section 101)
  const economicsGameScenarios = [
    {
      id: "game-a",
      title: "Failure Game A: 'We Saved 30%' (Cutting Redundancy Before Black Friday)",
      context:
        "To hit a quarterly cost reduction target of $10,000/month, an engineering manager deletes the Multi-AZ standby replica of the primary production database. On Black Friday, a physical rack hardware fault occurs in Availability Zone A.",
      options: [
        {
          label: "Celebrate the $10,000 monthly savings as an engineering victory",
          correct: false,
          explanation:
            "Disaster! The single AZ database crashes during peak holiday traffic. System suffers 3 hours of total downtime, losing $350,000 in lost revenue. The $10k savings destroyed $350k in business value.",
        },
        {
          label: "Restore Multi-AZ redundancy: Calculate Expected Loss = Probability × Outage Impact; recognize that $10k/mo redundancy insurance protects $350k/hr in revenue",
          correct: true,
          explanation:
            "Correct! FinOps Principle: Availability is an economic decision. Redundancy is not waste; it is business value protection against catastrophic downtime revenue loss.",
        },
        {
          label: "Blame the cloud provider and ask for a full refund of all Black Friday lost sales",
          correct: false,
          explanation:
            "Invalid. The cloud SLA explicitly warns that single-instance deployments carry no multi-AZ availability guarantee.",
        },
      ],
    },
    {
      id: "game-b",
      title: "Failure Game B: 'We Bought the Biggest Discount' (Overcommitting Before Refactoring)",
      context:
        "The finance team sees an irresistible 54% discount and purchases a 3-year all-upfront Reserved Instance / CUD commitment for 1,000 vCPUs. Six months later, engineering completes a planned modernization to container serverless, reducing VM demand to 300 vCPUs.",
      options: [
        {
          label: "Commitment Risk Trap: Company continues paying for 700 unutilized vCPUs for 2.5 years, completely erasing the discount benefit",
          correct: false,
          explanation:
            "Classic FinOps failure! Commitments are financial architecture decisions that must align with engineering roadmaps. True cost = discount benefit - underutilization penalty.",
        },
        {
          label: "FinOps Golden Rule: Commit only 60-70% of stable baseline compute; keep variable traffic elastic; review commitments quarterly against engineering roadmap",
          correct: true,
          explanation:
            "Correct! Never commit 100% of current spend before a planned architecture migration. Commit only against long-term stable baseline usage.",
        },
        {
          label: "Force developers to run infinite empty loops on the idle VMs to reach 100% utilization",
          correct: false,
          explanation:
            "Absurd and wasteful. Generating fake load burns electricity and carbon with zero business value.",
        },
      ],
    },
    {
      id: "game-c",
      title: "Failure Game C: 'Spot is 80% Cheaper' (Putting Critical Payments on Spot)",
      context:
        "An architect migrates the core customer checkout and credit card processing microservice to Spot VMs to slash compute costs by 80%. During an afternoon traffic surge, cloud provider capacity becomes scarce and Spot VMs are reclaimed with 30-second notice.",
      options: [
        {
          label: "Payment transactions terminate mid-flight; customer credit cards are charged but orders fail; customers leave in frustration",
          correct: false,
          explanation:
            "Severe operational failure. Spot is not a cheaper version of the same architecture. It requires fault-tolerant, interruption-friendly batch workloads, not stateful payment transactions.",
        },
        {
          label: "Hybrid Compute Portfolio: Core checkout on On-Demand/Committed fleets; restrict Spot strictly to stateless, idempotent, retryable batch workloads (e.g., image resizing, reporting)",
          correct: true,
          explanation:
            "Correct! Spot compute demands interruption-tolerant architecture (queues, checkpointing, idempotency). Transactional workloads belong on committed and on-demand capacity.",
        },
        {
          label: "Increase HTTP client timeout to 3 hours so users wait for new Spot VMs to appear",
          correct: false,
          explanation:
            "Unacceptable user experience; violates API SLOs.",
        },
      ],
    },
    {
      id: "game-d",
      title: "Failure Game D: 'Storage is Cheap' (The Glacier / Archive Retrieval Shock)",
      context:
        "A platform team moves 200 TB of customer transaction logs to Glacier Deep Archive / Archive storage class ($1/TB/month) to save money. Two months later, financial regulators demand an urgent audit requiring immediate scan of 50 TB within 24 hours.",
      options: [
        {
          label: "Retrieval Shock: Emergency expedited retrieval fees cost $6,500 and takes 12 hours, wiping out 2 years of predicted storage savings",
          correct: false,
          explanation:
            "The archive trap! Cold/Archive tiers carry severe retrieval fees, minimum 90-180 day retention penalties, and hours of restore latency.",
        },
        {
          label: "Data Access Modeling: Keep 90-day active logs in Hot/Standard tier; use Cool tier for compliance; apply lifecycle transitions only to truly archival cold data",
          correct: true,
          explanation:
            "Correct! Storage-class optimization must model access frequency and retrieval fees, not merely the at-rest sticker price per gigabyte.",
        },
        {
          label: "Delete the 200 TB of logs to avoid paying retrieval fees",
          correct: false,
          explanation:
            "Illegal regulatory non-compliance leading to massive regulatory fines and license revocation.",
        },
      ],
    },
    {
      id: "game-e",
      title: "Failure Game E: 'Multi-Cloud is Cheaper' (The Cross-Cloud Egress Multiplier)",
      context:
        "An enterprise splits its architecture: Web API in AWS, Relational DB in Azure, and Analytics in Google Cloud. Every customer page load executes 4 synchronous SQL queries across the internet and streams 100 TB of raw logs across clouds daily.",
      options: [
        {
          label: "Network bill explodes: Cross-cloud data egress fees reach $45,000/month, latency jumps by 280ms, and failure of any single cloud collapses the entire application",
          correct: false,
          explanation:
            "The uncompressed multi-cloud trap! Moving data across clouds is heavily metered ($0.08-$0.09/GB) and introduces latency compounding.",
        },
        {
          label: "Respect Data Gravity: Keep transactional applications co-located with their primary databases; use compressed Parquet batches and asynchronous event logs for cross-cloud analytics",
          correct: true,
          explanation:
            "Correct! Data creates gravity. Never make synchronous cross-cloud joins in user request loops. Move compute to data, and compress cross-cloud streams.",
        },
        {
          label: "Ask the cloud providers to waive all egress fees because it's a multi-cloud architecture",
          correct: false,
          explanation:
            "Cloud providers will not waive contractual data transfer charges.",
        },
      ],
    },
  ];

  // Tool 4: Week 22 Mastery Test Questions & Answers (Section 102)
  const masteryQuestions = [
    {
      q: "Why is cloud cost optimization not the same as minimizing the monthly bill?",
      a: "Minimizing the bill simply cuts resources: dropping replicas, turning off monitoring, shrinking instance sizes, or using cheap unreliable components. This inevitably degrades availability, increases latency, increases engineering toil, and loses business revenue. True cost optimization maximizes business value generated per dollar of technology cost, risk, and operational burden.",
    },
    {
      q: "Why might a $10,000/month architecture be economically worse than a $20,000/month architecture?",
      a: "If the $10k architecture is single-AZ and suffers 4 hours of downtime per month causing $100,000 in lost customer sales, its total economic cost is $110,000. The $20k architecture with Multi-AZ autoscaling and 99.99% availability avoids downtime, delivering far superior net business profit.",
    },
    {
      q: "Why should commitments (Savings Plans, CUDs) be purchased against a stable baseline rather than peak demand?",
      a: "Commitments are financial obligations paid every hour regardless of whether the capacity is used. If you commit to 1,000 vCPUs based on peak traffic, but average demand is only 400 vCPUs, you pay a severe underutilization penalty for 600 idle vCPUs. Commit to the stable 60–70% baseline; handle peaks with elastic On-Demand or Spot.",
    },
    {
      q: "Why do Spot instances require a fundamentally different workload architecture?",
      a: "Spot instances can be reclaimed by the cloud provider with a 30-second to 2-minute notice when capacity is needed. Running stateful transactional databases or synchronous payment APIs on Spot causes catastrophic dropped transactions. Spot requires stateless, idempotent, retryable batch workloads backed by queues and checkpointing.",
    },
    {
      q: "Why can autoscaling lower cost while also causing a database outage?",
      a: "Downstream bottlenecking: When application tiers (Cloud Run, Lambda, Kubernetes pods) autoscale rapidly from 10 to 500 instances during a traffic surge, they open thousands of concurrent database connections. If the relational database cannot scale at the same speed, connection exhaustion and CPU saturation cause a catastrophic database crash.",
    },
    {
      q: "Why can lowering average utilization be dangerous when right-sizing instances?",
      a: "Averages deceive. An instance with 12% average CPU utilization might experience 95% P99 spikes during hourly batch jobs or traffic surges. Downsizing based solely on average utilization causes CPU throttling, request timeouts, and failure during peak traffic windows.",
    },
    {
      q: "Why can storage lifecycle policies save more money than changing VM instance types?",
      a: "Compute savings are linear (saving 20% on a VM saves a few hundred dollars). Storage accumulates indefinitely over years: Storing 500 TB of uncompressed logs indefinitely on Standard Hot storage ($23/TB/mo) costs $138,000/year. An automated policy moving logs to Cool after 30 days and Archive after 90 days cuts costs by 70–80%, saving over $100,000 annually.",
    },
    {
      q: "Why is network egress often overlooked in architecture reviews?",
      a: "Data ingress is free, so developers assume data movement is negligible. However, cross-AZ, cross-region, and internet egress are heavily metered ($0.08–$0.09/GB). A chatty microservice architecture or uncompressed cross-region replication can easily generate network egress bills that exceed compute and database costs combined.",
    },
    {
      q: "Why can moving analytics to another cloud destroy your cost model?",
      a: "The cross-cloud egress trap: Transferring 100 TB of data out of AWS or Azure into Google BigQuery daily incurs massive outbound data transfer fees (~$8,500/day = $250k/month) plus cross-cloud WAN latency, serialization overhead, and replication failure risks. Data gravity dictates that compute should move to data, not vice versa.",
    },
    {
      q: "Why is cost per customer more useful than total cloud spend for SaaS businesses?",
      a: "Total cloud spend can grow by 30% while the business doubles its customer base. Looking only at total spend suggests inefficiency, whereas Unit Economics reveals that cost-per-customer actually decreased by 35%, proving that the cloud architecture is scaling with increasing operational leverage.",
    },
    {
      q: "Why is marginal cost often more useful than average cost when evaluating growth?",
      a: "Average cost includes fixed platform overhead (shared Kubernetes control planes, security tools, logging). Marginal cost measures the exact incremental cost incurred to serve one additional customer order. If marginal revenue is $0.05/order and marginal cloud cost is $0.015/order, expansion is profitable regardless of historical average cost.",
    },
    {
      q: "Why must shared costs have an explicit allocation model?",
      a: "Without explicit allocation, shared infrastructure (central Kubernetes clusters, shared Kafka event backbones, security scanners) becomes an unaccountable 'black hole' on the central IT budget. Teams treat shared resources as 'free' and overconsume them. Allocation creates financial accountability.",
    },
    {
      q: "Why should FinOps involve engineering and product teams rather than only finance?",
      a: "Finance cannot change code, refactor database queries, or adjust autoscaling triggers. Engineers make the daily architecture decisions that directly create cloud costs. FinOps succeeds only when engineers understand unit costs and product managers evaluate feature value against infrastructure expense.",
    },
    {
      q: "Why can a cloud discount increase rather than decrease your total cost?",
      a: "If a company buys a 3-year commitment with a 50% discount but only achieves 40% commitment utilization due to an unplanned architecture migration or over-optimistic traffic forecast, the effective cost paid per utilized vCPU is significantly higher than paying On-Demand rates with zero commitment.",
    },
    {
      q: "Why should reliability requirements be included in the economic model?",
      a: "Every extra 'nine' of availability (99.9% vs 99.99% vs 99.999%) exponentially increases infrastructure redundancy, multi-region replication, and engineering complexity. The cost of achieving that reliability must be balanced against the expected business revenue loss of downtime.",
    },
    {
      q: "What is the cheapest architecture that still satisfies the business requirements?",
      a: "The mature architectural answer is never 'the cheapest AWS service' or 'the largest discount.' It is the system derived from: Business Requirements -> Required Quality Attributes (SLA/SLO) -> Architecture Topology -> Workload Shape -> Capacity Planning -> Optimal Pricing Model (Hybrid Portfolio) -> Measured Unit Cost -> Continuous FinOps Optimization.",
    },
  ];

  // Syllabus Topics (12 Topics covering Week 22)
  const topics = [
    {
      id: 1,
      title: "The FinOps Operating Model & The Core Philosophy",
      week: "Foundations",
      focus: "Cloud Cost as a System Property, Business Value Formula, Inform-Optimize-Operate",
      badge: "FinOps Core",
      theory:
        "Cloud economics is not about 'minimizing the monthly bill'—it is about maximizing business value per dollar of technology expenditure, risk, and operational burden. Cloud cost is a direct emergent property of architecture decisions. Grounded in the FinOps Foundation Framework, FinOps is an operating model and cultural practice enabling engineering, finance, and product teams to make data-driven trade-offs through an ongoing lifecycle of Inform (visibility and allocation), Optimize (usage and rate optimization), and Operate (continuous governance).",
      diagram: `THE FINOPS VALUE CONTROL CYCLE (INFORM -> OPTIMIZE -> OPERATE):
=============================================================================
                       [ BUSINESS VALUE REQUIREMENT ]
                                     |
                                     v
                       [ ARCHITECTURAL SPECIFICATION ]
                                     |
                +--------------------+--------------------+
                |                                         |
                v                                         v
        [ COMPUTE & STORAGE ]                     [ NETWORK & DATA ]
                |                                         |
                +--------------------+--------------------+
                                     |
                                     v
                           [ THE CLOUD INVOICE ]
                                     |
    +--------------------------------+--------------------------------+
    |                                                                 |
    v                                                                 v
1. INFORM:                           2. OPTIMIZE:                    3. OPERATE:
- Cost Allocation Hierarchy          - Delete Idle Waste             - Continuous Review
- Tagging & Normalized Schemas       - Right-Size Fleets             - Automated Budgets
- Unit Economics ($/Order)           - Storage Lifecycle Policies    - FinOps Culture
- Anomaly Detection Signals          - Commitments (60% Baseline)    - Engineering KPIs
    |                                        |                                |
    +----------------------------------------+--------------------------------+
                                     |
                                     v
             [ MEASURE MARGINAL BUSINESS VALUE & REDESIGN ]
=============================================================================
CORE PRINCIPLE: Cheapest System != Best System! Maximize Business Value / TCO!`,
      keyTakeaways: [
        "Cloud cost optimization is not bill minimization: Slashing redundancy destroys availability and customer revenue.",
        "FinOps Core Formula: Maximize Business Value / (Technology Cost + Risk + Operational Burden).",
        "The FinOps Lifecycle: Inform (visibility & attribution), Optimize (usage & rate reduction), Operate (continuous governance).",
        "The cloud bill is a telemetry measurement system: Cost anomalies indicate operational bottlenecks or security breaches.",
      ],
      codeExample: `# AWS Cost Anomaly Detection: CLI Configuration for Real-Time Alerting
aws ce create-anomaly-monitor \\
  --anomaly-monitor '{
    "MonitorName": "Production-Cross-Service-Spike-Monitor",
    "MonitorType": "DIMENSIONAL",
    "MonitorDimension": "SERVICE"
  }'

aws ce create-anomaly-subscription \\
  --anomaly-subscription '{
    "SubscriptionName": "FinOps-Team-Critical-Alerts",
    "Threshold": 500, # Triggers alert on any anomalous spend > $500/day
    "Frequency": "IMMEDIATE",
    "MonitorArnList": ["arn:aws:ce::123456789012:anomalymonitor/7f83b2..."],
    "Subscribers": [{ "Type": "SNS", "Address": "arn:aws:sns:us-east-1:123456789012:finops-alarms" }]
  }'`,
    },
    {
      id: 2,
      title: "The Cloud Cost Equation & Multidimensional Billing Models",
      week: "Billing Mechanics",
      focus: "Cost Equations, Multidimensional Dimensions & CapEx to Elastic OpEx",
      badge: "Cost Equations",
      theory:
        "Traditional datacenter economics revolved around fixed capital expenditures (CapEx): purchasing physical servers with 20% average utilization. Cloud computing shifts infrastructure to variable operating expense (OpEx) governed by multidimensional pricing equations. Understanding cloud billing requires dissecting usage across compute (vCPU, RAM, GPU, OS, architecture), storage (capacity, requests, retrieval, replication), databases (IOPS, storage, throughput, replicas), network (inter-AZ, inter-region, internet egress), and serverless execution.",
      diagram: `THE ARCHITECTURAL CLOUD COST EQUATION:
=============================================================================
MONTHLY TECHNOLOGY SPEND =
  + COMPUTE:     sum(vCPU_hours * rate) + sum(RAM_GB_hours * rate) + GPU_charges
  + STORAGE:     sum(GB_month * tier_rate) + PUT/GET_requests + retrieval_fees
  + DATABASE:    instance_capacity + provisioned_IOPS + storage_GB + replicas
  + NETWORKING:  intra-AZ_data + inter-region_egress + internet_egress_GB
  + SERVERLESS:  invocations * rate + duration_GB_seconds
  + OBSERVABILITY: log_ingestion_GB + metric_samples + trace_spans
  + SHARED OPS:  K8s control planes + WAF rules + SIEM tools + Support tiers
-----------------------------------------------------------------------------
UNIT COST FORMULA (THE BUSINESS TRANSLATION):
  Unit Cost = Total Relevant Monthly Spend / Total Monthly Business Output
  Example:    $72,000 Spend / 1,800,000 Orders = $0.0400 Cloud Cost / Order!`,
      keyTakeaways: [
        "Cloud pricing is multidimensional: Compute, storage, IOPS, data transfer, and managed API calls all meter independently.",
        "Elasticity is a double-edged sword: Capacity scales up instantly, but costs scale up just as rapidly without automated limits.",
        "Always calculate unit costs ($/order, $/customer, $/inference) to translate technical spend into business value.",
        "Fixed shared platform charges (Kubernetes control planes, support contracts) must be accounted for in total cost modeling.",
      ],
      codeExample: `# Python FinOps: Calculating Blended Unit Economics from AWS Cost Explorer
import boto3

ce = boto3.client('ce')

# Retrieve total unblended cost for the previous month
response = ce.get_cost_and_usage(
    TimePeriod={'Start': '2026-09-01', 'End': '2026-10-01'},
    Granularity='MONTHLY',
    Metrics=['UnblendedCost']
)

total_spend = float(response['ResultsByTime'][0]['Total']['UnblendedCost']['Amount'])
total_orders = 2500000 # Retrieved from business transactional database

unit_cost_per_order = total_spend / total_orders
print(f"Total Cloud Spend: \${total_spend:,.2f}")
print(f"Business Unit Cost: \${unit_cost_per_order:.4f} per order")`,
    },
    {
      id: 3,
      title: "Cost Allocation, Hierarchy, Tagging & Shared Costs",
      week: "Cost Allocation",
      focus: "Allocation Hierarchies, Cost Allocation Tags, Direct vs Shared Costs",
      badge: "Allocation & Tags",
      theory:
        "A consolidated monthly cloud bill of $500,000 is useless for engineering decision-making unless attributed to responsible teams. Cost allocation establishes an unbroken hierarchy: Organization -> Business Unit -> Product -> Team -> Service -> Environment. Using AWS Cost Allocation Tags, Azure Resource Tags, and Google Cloud Labels, organizations divide spend into direct costs (dedicated service VMs) and shared costs (central Kubernetes control planes, shared Kafka brokers, transit hubs, observability). Explicit allocation rules eliminate the 'unaccountable central IT black hole.'",
      diagram: `COST ALLOCATION TAXONOMY & SHARED COST DISTRIBUTION:
=============================================================================
ORGANIZATION BILLING ACCOUNT ($500,000 / month)
  |
  +---> DIRECT COSTS ($380,000):
  |     - Payments Service (Team A, Tag: env=prod, service=payments): $140,000
  |     - Checkout Service (Team B, Tag: env=prod, service=checkout): $160,000
  |     - Analytics Store  (Team C, Tag: env=prod, service=analytics): $80,000
  |
  +---> SHARED INFRASTRUCTURE COSTS ($120,000):
        - Central Kubernetes Control Planes: $35,000
        - Shared Kafka / EventStream Hub:   $25,000
        - Centralized OpenTelemetry / SIEM: $45,000
        - Transit Gateway / Cross-Connects: $15,000
        |
        v ALLOCATION STRATEGY:
        Distribute shared $120k proportionally:
        - 50% based on relative request volume
        - 30% based on CPU/RAM reservation
        - 20% equal baseline charge across teams!`,
      keyTakeaways: [
        "Tagging is non-negotiable: Every resource must have owner, environment, service, and cost-center metadata tags.",
        "Direct costs attribute directly to microservices; shared platform costs require an explicit, stable distribution model.",
        "Showback provides visibility without financial transfer; Chargeback debits department budgets to drive strong accountability.",
        "Automate tag governance: Use AWS SCPs, Azure Policies, or GCP Org Constraints to reject provisioning of untagged resources.",
      ],
      codeExample: `# OpenTofu / Terraform: Enforcing Mandatory FinOps Cost Allocation Tags
locals {
  required_finops_tags = {
    CostCenter  = "CC-4081-COMMERCE"
    Environment = "production"
    OwnerTeam   = "checkout-engineering"
    Service     = "order-processing-api"
    ManagedBy   = "opentofu"
  }
}

resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "c7g.xlarge"
  tags          = local.required_finops_tags # Tagging enforced across all cloud resources!
}`,
    },
    {
      id: 4,
      title: "Budgets, Forecasting & Anomaly Detection",
      week: "Visibility & Telemetry",
      focus: "Decision Signals, Trend Analysis, Seasonality & AI Cost Anomaly Detection",
      badge: "Budgets & Signals",
      theory:
        "Budgets in FinOps are not passive accounting caps; they are proactive operational decision signals. Tiered notifications alert teams at 50% (informational), 75% (review), 90% (escalation), and 100% (automated scaling throttle). Forecasting models must incorporate seasonality and business volume: A 15% increase in monthly cloud spend while customer transactions grow by 40% actually reflects improving efficiency. Modern AI-powered anomaly detection correlates unexpected cost surges directly with IAM principals and CloudTrail deployment events.",
      diagram: `FINOPS TIERED BUDGET SIGNALING & ANOMALY RESPONSE:
=============================================================================
Monthly Cloud Budget: $100,000
       |
       +---> 50% Consumed (Day 12): [ INFO ] -> Slack #finops-updates
       |
       +---> 75% Consumed (Day 18): [ WARNING ] -> Email to Team Leads (Review Forecast)
       |
       +---> 90% Consumed (Day 22): [ ESCALATION ] -> Engineering VP Review
       |
       +---> 100% Consumed (Day 26): [ HARD GUARD ] -> Automated Policy Action:
             * Non-production environments auto-shutdown after 19:00
             * Non-essential batch jobs deferred to Spot off-peak hours

ANOMALY DETECTION ENGINE:
  Baseline: Spend = $3,200 / day
  Today:    Spend = $14,800 / day (+362% Anomaly Detected!)
  AI Root Cause Correlation:
  - Service: AWS S3 Inter-Region Data Transfer
  - IAM Principal: arn:aws:iam::...:role/analytics-job-runner
  - Cause: Misconfigured backup script replicating 80 TB uncompressed across regions!`,
      keyTakeaways: [
        "Budgets are decision signals: Connect notifications to actionable engineering runbooks, not passive spreadsheets.",
        "Forecasting must incorporate business drivers: Higher cloud spend is healthy if unit costs are falling and revenue is growing.",
        "Cost Anomaly Detection is operational telemetry: Cost spikes often reveal infinite retry loops, runaway autoscaling, or security breaches.",
        "AWS 2026 update: Cost Anomaly Detection uses AI to correlate spend spikes with exact CloudTrail events and IAM principals.",
      ],
      codeExample: `# AWS CloudFormation: Automated Budget with Tiered Notifications & Action Targets
Type: AWS::Budgets::Budget
Properties:
  Budget:
    BudgetName: Production-Compute-Monthly
    BudgetLimit:
      Amount: 100000
      Unit: USD
    TimeUnit: MONTHLY
    BudgetType: COST
  NotificationsWithSubscribers:
    - Notification:
        NotificationType: ACTUAL
        ComparisonOperator: GREATER_THAN
        Threshold: 85
      Subscribers:
        - SubscriptionType: SNS
          Address: arn:aws:sns:us-east-1:123456789012:finops-high-alert`,
    },
    {
      id: 5,
      title: "Usage Optimization vs Rate Optimization & The Optimization Ladder",
      week: "Optimization",
      focus: "The Optimization Ladder, Eliminating Waste, Rightsizing vs Purchasing Discounts",
      badge: "The Optimization Ladder",
      theory:
        "FinOps categorizes optimization into Usage Optimization (using fewer resources or using them more efficiently) and Rate Optimization (paying less per unit of required resource through commitments or pricing models). The foundational rule is: Never buy commitments to mask wasteful architecture. If an architecture runs 50 oversized idle VMs at 10% CPU, purchasing a 3-year commitment locks in financial waste for 36 months. Engineers must execute the structured Cost Optimization Ladder.",
      diagram: `THE COST OPTIMIZATION LADDER (EXECUTE IN STRICT ORDER):
=============================================================================
Step 1: DELETE IDLE WASTE (Unattached EBS volumes, zombie VMs, abandoned snapshots)
          |
          v
Step 2: RIGHT-SIZE RESOURCES (Downsize c7g.2xlarge to c7g.large based on P99 telemetry)
          |
          v
Step 3: AUTOSCALE AGGRESSIVELY (Scale to zero off-peak; tune min/max instance bounds)
          |
          v
Step 4: ARCHITECTURAL EFFICIENCY (Introduce caching, improve database indexing)
          |
          v
Step 5: STORAGE & EGRESS LIFECYCLE (Compress Parquet, transition old logs to Archive)
          |
          v
Step 6: RATE OPTIMIZATION (Commitments: Savings Plans / CUDs for stable 60% baseline)
          |
          v
Step 7: SPOT FLEETS (Shift retryable, interruptible batch workloads to Spot)
=============================================================================
RULE: Always eliminate usage waste (Steps 1-5) BEFORE buying commitments (Step 6)!`,
      keyTakeaways: [
        "Usage Optimization always precedes Rate Optimization: Eliminate waste before purchasing long-term discount commitments.",
        "Zombie Infrastructure: Orphaned block storage disks, unattached elastic IPs, and forgotten test databases quietly bleed budgets.",
        "Rightsizing must evaluate P99 peak load and failure headroom, never naive averages.",
        "The Optimization Flywheel: Observe usage data -> Identify waste -> Rank ROI -> Implement change -> Measure business outcome.",
      ],
      codeExample: `# Bash: Identify and Cleanup Unattached AWS EBS Volumes (Zombie Storage Waste)
aws ec2 describe-volumes \\
  --filters Name=status,Values=available \\
  --query "Volumes[*].{ID:VolumeId,Size:Size,Created:CreateTime}" \\
  --output table

# Automatic snapshot and deletion of orphaned volumes older than 14 days
for vol in $(aws ec2 describe-volumes --filters Name=status,Values=available --query "Volumes[*].VolumeId" --output text); do
  echo "Snapshotting and cleaning up zombie volume: $vol"
  aws ec2 create-snapshot --volume-id $vol --description "Pre-delete backup of zombie volume"
  aws ec2 delete-volume --volume-id $vol
done`,
    },
    {
      id: 6,
      title: "Commitment Models: AWS Savings Plans, Azure Reservations & GCP CUDs",
      week: "Rate Optimization",
      focus: "AWS Compute vs EC2 Savings Plans, Azure Reservations, GCP CUDs & Commitment Risk",
      badge: "Commitment Strategy",
      theory:
        "Commitment pricing provides discounts (up to 54–72%) in exchange for committing to a fixed hourly usage amount ($/hr or resource quantity) over a 1- or 3-year term. AWS offers Compute Savings Plans (flexible across EC2, Fargate, Lambda) and EC2 Instance Savings Plans. Azure provides VM Reservations and Azure Savings Plans for Compute. Google Cloud provides Committed Use Discounts (CUDs)—both resource-based and spend-based. The critical danger is Commitment Risk: True benefit equals discount savings minus the financial penalty of underutilization if architectures change.",
      diagram: `COMMITMENT PORTFOLIO SIZING (BASELINE VS ELASTIC PEAKS):
=============================================================================
vCPU Demand
1,500 |                                                 .-. (Peak: 1,500 vCPU)
      |                                                /   \\
1,000 |                              .-----------------     '-----
      |                             /   ELASTIC ON-DEMAND / SPOT
  500 |                            /    (Autoscaled Capacity)
      | +-------------------------+-----------------------------------------+
      | | STABLE BASELINE USAGE: 500 vCPUs (24x7x365)                       |
      | | ---> 1-Year or 3-Year Compute Savings Plan / CUD (52% Discount!) |
    0 +-+-------------------------------------------------------------------+- Time
        00:00                    12:00                    24:00

FINANCIAL DISASTER AVOIDED:
  - If you commit 1,500 vCPUs: You pay for 1,500 vCPUs all night when demand is 500!
  - If you commit 500 vCPUs: 100% of commitment is utilized, achieving maximum ROI!`,
      keyTakeaways: [
        "Never commit to peak capacity: Purchase commitments only for the stable 60–70% baseline workload floor.",
        "Compute Savings Plans provide maximum architectural flexibility, applying across instances, regions, OS, and serverless.",
        "Underutilization Penalty: If committed usage drops below the threshold, you pay for unused capacity, wiping out discount margins.",
        "Align commitments with technology roadmaps: If a major migration to serverless or multi-cloud is scheduled within 12 months, avoid 3-year locks.",
      ],
      codeExample: `# AWS CLI: Checking Savings Plans Coverage and Utilization Telemetry
aws ce get-savings-plans-utilization \\
  --time-period Start=2026-09-01,End=2026-10-01

# Output verification:
# UtilizationPercentage: 99.4% (Healthy: Almost all committed dollars used)
# TotalCommitment: $45.00/hr | UsedCommitment: $44.73/hr | UnusedCommitment: $0.27/hr`,
    },
    {
      id: 7,
      title: "Spot & Preemptible Compute Architecture",
      week: "Elastic Capacity",
      focus: "Preemption Models, Interruption Handling, Checkpointing & Spot TCO",
      badge: "Spot Architecture",
      theory:
        "Spot Instances (AWS Spot, Azure Spot VMs, GCP Spot VMs) offer discounts up to 80–91% compared to On-Demand rates by utilizing spare cloud datacenter capacity. However, Spot can be reclaimed at any time with short advance notice (30s on Azure/GCP, 2 minutes on AWS). Spot is not a cheaper version of the same architecture; it demands an interruption-tolerant distributed architecture: Decoupled message queues, state checkpointing to durable object storage, idempotent job workers, and automated on-demand fallbacks.",
      diagram: `FAULT-TOLERANT SPOT FLEET ARCHITECTURE WITH QUEUE & CHECKPOINTING:
=============================================================================
[ Job Producer ] ---> [ SQS / Pub/Sub Task Queue (Visibility Timeout: 300s) ]
                                   |
         +-------------------------+-------------------------+
         |                                                   |
         v                                                   v
[ Spot Worker 1 (80% Off) ]                         [ Spot Worker 2 (80% Off) ]
- Processes Chunk 1 to 5                            - Processes Chunk 6 to 10
- Checkpoints state to S3 every 60s                 - Checkpoints state to S3
         |                                                   |
  *SPOT PREEMPTION NOTICE!*                          [ Finishes & Deletes Task ]
  Worker flushes final checkpoint to S3                      v
  Instance terminates gracefully!                   [ Results Stored in S3 ]
         |
         v
Task returns to Queue -> Picked up by On-Demand Fallback Worker
Worker reads S3 checkpoint -> Resumes from Chunk 5 with ZERO work lost!
=============================================================================
RESULT: 80% Cost Reduction + 100% Workload Durability & Fault Tolerance!`,
      keyTakeaways: [
        "Spot is for interruption-tolerant workloads: Batch processing, media transcoding, ML training checkpoints, CI/CD runners.",
        "Never run stateful single-master databases or user checkout payment microservices on Spot instances.",
        "Implement graceful termination handlers: Intercept the cloud metadata termination notice to save progress before shutdown.",
        "Spot Total Cost of Ownership (TCO): Factor in the engineering complexity of queues, checkpointing, and retries.",
      ],
      codeExample: `# Python: Intercepting AWS EC2 Spot Interruption Notice via IMDSv2
import requests
import time
import sys

def check_spot_interruption():
    # Fetch IMDSv2 Token
    token_res = requests.put(
        "http://169.254.169.254/latest/api/token",
        headers={"X-aws-ec2-metadata-token-ttl-seconds": "60"},
        timeout=1
    )
    token = token_res.text

    # Probe Spot Action Notice
    notice = requests.get(
        "http://169.254.169.254/latest/meta-data/spot/instance-action",
        headers={"X-aws-ec2-metadata-token": token},
        timeout=1
    )
    
    if notice.status_code == 200:
        print("[CRITICAL] Spot termination notice received! Flushing checkpoint to S3...")
        # Execute emergency state flush and exit gracefully
        sys.exit(0)`,
    },
    {
      id: 8,
      title: "Autoscaling Economics & Control Loop Failure Modes",
      week: "Capacity Planning",
      focus: "The 4 Autoscaling Failures, Cooldown Timers, Percentile Headroom & N+1",
      badge: "Elastic Capacity",
      theory:
        "Autoscaling aligns infrastructure capacity with dynamic user demand to minimize idle waste. However, flawed autoscaling configurations cause extreme cost explosions or severe outages. Common failures include: (1) Scaling too late (arriving after traffic collapses), (2) Scaling too aggressively (lagging control loops provision duplicate fleets), (3) Downstream saturation (scaling web pods crushes unscaled databases), and (4) Scaling on the wrong metric (scaling on CPU when queue backlog is exploding).",
      diagram: `AUTOSCALING DYNAMICS: OVERPROVISIONING VS STARVATION:
=============================================================================
FAILURE: LAGGING CONTROL LOOP & DOWNSTREAM CRUSH
  Traffic Spikes -> CPU hits 80% -> Autoscaler adds 20 instances
         |
         v (Instances take 3 minutes to warm up and pull container images)
  CPU still shows 80%! -> Autoscaler adds another 20 instances!
         |
         v (40 instances launch simultaneously)
  Instances flood downstream PostgreSQL DB with 4,000 connections!
  Database CPU hits 100% -> DB Crashes -> Cascade Outage!

SOLUTION: TARGET TRACKING & COOLDOWN TUNING
  - Use Predictive Scaling / Target Tracking on Workload-Relevant Metrics (e.g. RPS / Concurrency)
  - Configure Step Scaling with appropriate Warm-up Timers and Cooldown Periods
  - Implement Connection Pooling (PgBouncer) to protect databases during scale-outs
  - Reserve N+1 headroom to survive sudden Availability Zone infrastructure loss!`,
      keyTakeaways: [
        "Scale on workload-relevant metrics: Concurrency, active requests, and queue depth are far more predictive than raw CPU.",
        "Autoscaling delays: Instances take minutes to provision, warm caches, and join load balancers; tune cooldown timers accordingly.",
        "Downstream protection: Always enforce connection poolers (PgBouncer, RDS Proxy) to prevent auto-scaled pods from crushing databases.",
        "Rightsizing must evaluate P95/P99 peaks and maintain N+1 capacity headroom across availability zones.",
      ],
      codeExample: `# AWS Application Auto Scaling: Target Tracking Policy on ALB Request Count Per Target
resource "aws_autoscaling_policy" "alb_target_tracking" {
  name                   = "target-tracking-alb-requests"
  autoscaling_group_name = aws_autoscaling_group.web_fleet.name
  policy_type            = "TargetTrackingScaling"

  target_tracking_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ALBRequestCountPerTarget"
      resource_label         = "app/prod-alb/7f83b2.../targetgroup/web-tg/9a8b7c..."
    }
    target_value     = 1000.0 # Scales out when an instance averages > 1,000 requests/minute
    disable_scale_in = false
  }
}`,
    },
    {
      id: 9,
      title: "Storage Economics, Lifecycle Policies & Retrieval Traps",
      week: "Storage FinOps",
      focus: "Storage TCO, Automated Tiering (Hot/Cool/Cold/Archive) & The Retrieval Trap",
      badge: "Storage Lifecycle",
      theory:
        "Object storage is marketed as pennies per gigabyte, but total storage cost includes: at-rest capacity, PUT/GET request fees, data retrieval fees, replication data transfer, and minimum storage durations. Transitioning data to cold or archive tiers (e.g., S3 Glacier, Azure Archive, GCP Coldline) slashes at-rest costs by up to 80–90%, but introduces steep retrieval charges and restore delays. Unplanned bulk queries against archived logs create massive billing shocks.",
      diagram: `AUTOMATED STORAGE LIFECYCLE & RETRIEVAL COST TRAP:
=============================================================================
Day 0: INGESTION (Standard / Hot Tier)
  Cost: $23.00 / TB / month | Retrieval: $0.00 | Immediate Access (2ms)
       |
       v (Lifecycle Rule: Age > 30 Days)
Day 30: INFREQUENT ACCESS / COOL TIER
  Cost: $12.50 / TB / month | Retrieval: $10.00 / TB | Immediate Access (5ms)
       |
       v (Lifecycle Rule: Age > 90 Days)
Day 90: ARCHIVE / GLACIER DEEP ARCHIVE
  Cost: $1.00 / TB / month | Retrieval: $20.00 / TB + Restore Delay (3-5 Hours)
       |
       v (Lifecycle Rule: Age > 365 Days)
Day 365: PERMANENT PURGE / EXPIRATION ($0.00)
-----------------------------------------------------------------------------
THE RETRIEVAL TRAP:
  If an engineer accidentally runs an unindexed query across 100 TB of Archive data:
  Storage cost was: $100 / month.
  Retrieval fee bill: 100 TB * $20/TB = $2,000 INSTANT CHARGE!`,
      keyTakeaways: [
        "Storage accumulation is continuous: Without automated expiration lifecycle rules, data size and bills grow infinitely.",
        "The Retrieval Trap: Archive tiers are cheap to store, but expensive to read. Match storage class strictly to access frequency.",
        "Minimum Retention Durations: Deleting data before minimum tier thresholds (e.g., 90 days for Cool, 180 days for Archive) incurs early deletion fees.",
        "Physical Replication Multipliers: A 100 TB dataset with 3 AZ replicas and cross-region DR backups occupies 600 TB of billed storage.",
      ],
      codeExample: `# AWS S3 Lifecycle Configuration: Production Automated Tiering Rule
resource "aws_s3_bucket_lifecycle_configuration" "log_bucket_lifecycle" {
  bucket = aws_s3_bucket.logs.id

  rule {
    id     = "auto-archive-and-expire-logs"
    status = "Enabled"

    transition {
      days          = 30
      storage_class = "STANDARD_IA" # 45% At-Rest Savings
    }

    transition {
      days          = 90
      storage_class = "GLACIER"     # 80% At-Rest Savings
    }

    expiration {
      days = 365 # Automatic deletion of compliance logs after 1 year
    }
  }
}`,
    },
    {
      id: 10,
      title: "Network Egress Economics, Data Gravity & Caching ROI",
      week: "Network Economics",
      focus: "The Egress Trap, Inter-AZ vs Inter-Region, Data Gravity & CDN/Cache ROI",
      badge: "Network Economics",
      theory:
        "Public cloud network billing is highly asymmetric: Ingress is free; egress (outbound data transfer) is metered at $0.08–$0.09/GB. Cross-AZ traffic costs $0.01/GB in each direction, while inter-region and cross-cloud traffic multipliers rapidly become the largest line item on the invoice. Data Gravity dictates that large datasets attract applications; repeatedly moving petabytes between clouds is economically irrational. Effective architectures leverage CDNs and in-memory caches to terminate requests at the edge.",
      diagram: `NETWORK EGRESS FLOW & THE DATA GRAVITY BOUNDARY:
=============================================================================
[ Global Client Request ]
       |
       v
[ CloudFront / Cloud Armor CDN Edge ] (90% Cache Hit Rate!)
       |
       +---> [ 90% Static Requests Served at Edge: Cheap CDN Egress Rate ]
       |
       v (Only 10% Dynamic Misses Reach Origin)
[ AWS Origin Subnet ]
       |
       v
[ App Tier ] ---> (Cross-AZ Traffic: $0.01/GB each way!) ---> [ DB Tier ]
       |
       x (DANGEROUS ANTI-PATTERN: Synchronous Cross-Cloud Egress)
       |
       +--- (100 TB/month raw queries: $9,000 Egress Fee!) ---> [ GCP BigQuery ]

FINANCIAL RULE OF DATA GRAVITY:
  Keep compute close to the data. Use compressed Parquet deltas for cross-cloud analytics!`,
      keyTakeaways: [
        "Network Egress is an economic trap: Uncompressed cross-region or cross-cloud pipelines can easily surpass compute bills.",
        "Cross-AZ traffic is not free: Inter-subnet traffic crossing Availability Zone boundaries incurs data transfer charges in both directions.",
        "Data Gravity: It is orders of magnitude cheaper to move lightweight container code to data than to move petabytes of data to compute.",
        "CDN & Caching ROI: A 90% CDN cache hit rate protects backend origin compute and slashes outbound bandwidth costs substantially.",
      ],
      codeExample: `# Nginx / CDN Cache-Control Header: Slashing Origin Egress and Compute Load
# Informs CDN edge and browsers to cache static assets for 7 days
location /static/ {
    expires 7d;
    add_header Cache-Control "public, max-age=604800, immutable";
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    # 70% Compression + 90% CDN Hit Rate = 97% Origin Egress Reduction!
}`,
    },
    {
      id: 11,
      title: "Unit Economics, Marginal Cost & The FOCUS Standard",
      week: "Unit Economics",
      focus: "Cost/Order, Marginal Cost vs Average Cost, FOCUS Normalization Standard",
      badge: "Unit Economics",
      theory:
        "Total cloud spend is an incomplete metric; high-maturity FinOps connects cloud infrastructure spend directly to business output (Unit Economics). For e-commerce, it is cost per order; for SaaS, cost per active customer; for AI, cost per 1k inference tokens. Average cost includes fixed platform overhead; Marginal cost measures the incremental expense of serving one additional unit of business volume. The FinOps Open Cost and Usage Specification (FOCUS) normalizes billing data across AWS, Azure, and Google Cloud into a unified open taxonomy.",
      diagram: `UNIT ECONOMICS & MARGINAL COST PROFITABILITY:
=============================================================================
MONTH 1:
  Cloud Spend: $100,000 | Business Orders: 1,000,000
  Average Unit Cost = $100,000 / 1,000,000 = $0.1000 / order

MONTH 2 (Scale & Optimization):
  Cloud Spend: $120,000 (+20% Spend Growth)
  Business Orders: 2,000,000 (+100% Business Growth!)
  Average Unit Cost = $120,000 / 2,000,000 = $0.0600 / order (-40% Unit Cost!)
  Incremental Spend: $20,000 | Incremental Orders: 1,000,000
  MARGINAL COST = $20,000 / 1,000,000 = $0.0200 / incremental order!
-----------------------------------------------------------------------------
THE FOCUS SPECIFICATION (FinOps Open Cost & Usage Specification):
  AWS CUR Billing       Azure Cost Management    GCP Cloud Billing
       \\                       |                       /
        +----------------------+----------------------+
                               |
                               v
               [ NORMALIZED FOCUS DATA SCHEMA ]
  - ProviderName, BilledCost, EffectiveCost, ResourceType,
  - ServiceCategory, CommitmentDiscountCategory, UnitPrice, UsageQuantity`,
      keyTakeaways: [
        "Unit Economics connects technology cost to business value: $/order, $/customer, $/streamed hour, $/inference token.",
        "Total spend growth does not equal inefficiency: If cloud spend rises 20% while business output doubles, unit efficiency improved.",
        "Marginal Cost: Evaluates whether incremental customer traffic generates profitable contribution margins.",
        "FOCUS Standard: Eliminates multi-cloud billing taxonomy confusion by normalizing AWS, Azure, and GCP billing exports into a single open schema.",
      ],
      codeExample: `# SQL: Querying FOCUS-Normalized Multi-Cloud Billing Table in BigQuery / Athena
SELECT 
  ProviderName,
  ServiceCategory,
  DATE_TRUNC(ChargePeriodStart, MONTH) as BillingMonth,
  SUM(BilledCost) as TotalBilledSpend,
  SUM(EffectiveCost) as TotalEffectiveSpend,
  ROUND(SUM(EffectiveCost) / 2500000.0, 4) as UnitCostPerOrder
FROM \`finops_lake.focus_normalized_costs\`
WHERE ChargePeriodStart >= '2026-01-01'
GROUP BY 1, 2, 3
ORDER BY TotalEffectiveSpend DESC;`,
    },
    {
      id: 12,
      title: "Capstone Integration: Economic Architecture for Global Platforms",
      week: "Capstone Blueprint",
      focus: "500M Users, 1M Peak RPS, The Hybrid Compute Portfolio & Architecture Decision Records",
      badge: "Capstone Architecture",
      theory:
        "The culmination of this module is engineering the Economic Architecture for the Global Multi-Cloud Platform (500M registered users, 1M peak requests/second across AWS, Azure, and GCP). Rather than building an over-engineered active-active multi-cloud system or a fragile single-cloud deployment, architects formulate an Economic Architecture Decision Record (ADR): Composing a Hybrid Compute Portfolio (60% Commitments, 25% Elastic On-Demand, 15% Spot Fleets), automated storage lifecycles, and localized data stores to achieve 99.99% availability with minimum TCO.",
      diagram: `GLOBAL ECONOMIC PLATFORM BLUEPRINT (500M USERS, 1M PEAK RPS):
=============================================================================
                      [ 500 MILLION GLOBAL USERS ]
                                   |
                                   v (90% CDN Edge Hit Rate)
             [ GLOBAL ANYCAST CDN & CLOUD WAF (AWS / AZURE / CLOUDFLARE) ]
                                   |
          +------------------------+------------------------+
          | (100% Primary Traffic)                          | (Standby Minimal Warm Fleet)
          v                                                 v
+-------------------------------+         +-------------------------------+
| AWS REGION (us-east-1)        |         | AZURE REGION (eastus)         |
| HYBRID COMPUTE FLEET:         |         | HYBRID COMPUTE FLEET:         |
| - 60% Savings Plan Commitments|         | - 10% Warm Baseline           |
| - 25% On-Demand Autoscaling   |         | - Scaled out only on DR       |
| - 15% Spot Workers (Batch)    |         | - Flexible PG Standby Replica |
| - Aurora PostgreSQL Primary   |         | - Blob Archive Storage        |
+-------------------------------+         +-------------------------------+
          | (Compressed Parquet Batches via Private Interconnect)
          v
+-------------------------------+
| GOOGLE CLOUD (us-central1)    |
| - BigQuery (Slot Reservations)|
| - Cloud Storage Autoclass     |
| - Specialized Analytics Store |
+-------------------------------+
=============================================================================
TOTAL COST OF OWNERSHIP (TCO) AUDIT:
- 52% Compute Savings via Savings Plans + 80% Spot Batch Savings
- 74% Storage Savings via Automated Lifecycle Tiering
- 92% Egress Savings via Edge CDN Caching & Co-Located Databases!`,
      keyTakeaways: [
        "The Hybrid Compute Portfolio: Never rely on a single purchase model. Combine Commitments (baseline), On-Demand (elastic), and Spot (batch).",
        "Economic Architecture Decision Records (ADRs): Explicitly document cost impact, reliability impact, and alternative options for every architectural choice.",
        "Over-engineering is financial waste: The goal is the lowest-cost architecture that satisfies technical SLAs with acceptable risk.",
        "Cloud architecture maturity: Designing systems that scale, survive failures, enforce security, and remain economically sustainable.",
      ],
      codeExample: `# Economic Architecture Decision Record (ADR-042)
# Status: Approved
# Context: Serving 500M users with 1M peak RPS across AWS, Azure, and Google Cloud
# Decision: Implement a 3-tier Hybrid Compute Fleet Portfolio:
#   1. Commit to 60% of baseline compute via 3-Year Compute Savings Plans (52% discount).
#   2. Handle dynamic peak traffic (25%) using Target Tracking Auto Scaling on ALB RPS.
#   3. Execute all image processing, video transcoding, and batch ML on Spot Fleet (15%).
# Financial Impact: Reduces monthly compute spend from $480,000 to $248,000 (-48.3% TCO).
# Reliability Impact: Checkpointing and SQS queues insulate batch workloads from Spot preemption.
# Review Cadence: Monthly FinOps review of commitment utilization and unit cost per order.`,
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
          currentModuleId="economics"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova FinOps AI"
        />

        {/* HERO HEADER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <DollarSign size={13} />
              <span>Cloud Economics & FinOps</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Cloud Economics & FinOps
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              Cloud architecture becomes a business system. Stop asking <span className="text-stone-400 line-through">"How do I minimize the monthly bill?"</span> and start asking:{" "}
              <span className="text-orange-400 font-semibold">
                "What does each unit of capability cost, and is the business getting enough value from it?"
              </span>{" "}
              Grounded in the FinOps Foundation Framework, Hybrid Compute Portfolios, Commitment Management, Spot Economics, Storage Lifecycles, and Unit Economics.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FinOps Inform-Optimize-Operate
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Savings Plans & CUDs
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Unit Economics ($/Order)
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FOCUS Open Billing Schema
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
                  <h3 className="text-sm font-bold text-[#18181b]">Nova Cloud Economics & FinOps Architect</h3>
                  <p className="text-xs text-stone-500">Trained on FinOps Foundation Framework, FOCUS Specification & Cloud Pricing APIs</p>
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
              <LearningRo module="economics" />
            </div>
          </div>
        )}

        {/* MAIN LAYOUT: SYLLABUS TOPICS (LEFT) + DEEP CONTENT (RIGHT) */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          {/* TOPIC SELECTOR (COL-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                FinOps Syllabus • 12 Topics
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
                Module 12 connects technical design to business unit economics, completing the architectural triad of scalability, security, and profitability.
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
                  Theoretical Foundations & Financial Engineering Rationale
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60">
                  {currentTopic.theory}
                </p>
              </div>

              {/* ARCHITECTURE DIAGRAM */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Financial Topologies & Optimization Systems
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">ASCII Economics Blueprint</span>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-stone-200 shadow-inner">
                  {currentTopic.diagram}
                </pre>
              </div>

              {/* KEY TAKEAWAYS */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Production Invariants & Core FinOps Takeaways
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
                    Production Implementation Blueprint & FinOps Telemetry
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
        {/* INTERACTIVE LAB 1: FINOPS UNIT ECONOMICS & HYBRID FLEET PORTFOLIO SIMULATOR */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 1
            </span>
            <span className="font-mono text-xs text-stone-400">Hybrid Fleet & Unit Economics Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            FinOps Unit Economics & Hybrid Fleet Portfolio Simulator
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Model your compute purchasing strategy across Savings Plans (Commitments), Elastic On-Demand, and Spot Fleets. Analyze your real-world blended cost per order, commitment utilization, and financial waste risk.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONTROLS (COL-5) */}
            <div className="lg:col-span-5 space-y-5 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  1. Workload Traffic Profile
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "steady", label: "Steady 24x7" },
                    { id: "bursty", label: "Bursty Traffic" },
                    { id: "seasonal", label: "Seasonal Peaks" },
                    { id: "unpredictable", label: "Unpredictable" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setWorkloadShape(item.id)}
                      className={`rounded-xl py-2 text-xs font-bold border transition text-center ${
                        workloadShape === item.id
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
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>BASELINE VCPU:</span>
                  <span className="text-orange-600">{baselineVcpu} vCPUs</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={50}
                  value={baselineVcpu}
                  onChange={(e) => setBaselineVcpu(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>PEAK TRAFFIC VCPU:</span>
                  <span className="text-orange-600">{peakVcpu} vCPUs</span>
                </div>
                <input
                  type="range"
                  min={baselineVcpu}
                  max={5000}
                  step={100}
                  value={peakVcpu}
                  onChange={(e) => setPeakVcpu(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>SAVINGS PLAN COMMITMENT:</span>
                  <span className="text-emerald-700">{committedPercent}% of Baseline</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={committedPercent}
                  onChange={(e) => setCommittedPercent(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <span className="text-[10px] text-stone-400 font-mono">53% Discount rate ($0.021/hr vs $0.045/hr)</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>SPOT FLEET ALLOCATION:</span>
                  <span className="text-amber-700">{spotPercent}% of Workload</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={5}
                  value={spotPercent}
                  onChange={(e) => setSpotPercent(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
                <span className="text-[10px] text-stone-400 font-mono">80% Discount rate ($0.009/hr) with preemption risk</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>MONTHLY BUSINESS VOLUME:</span>
                  <span className="text-orange-600">{(monthlyOrders / 1000000).toFixed(1)}M Orders</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={10000000}
                  step={250000}
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>
            </div>

            {/* RESULTS & UNIT METRICS (COL-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Unit Cost Per Order</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-orange-400">
                      ${fleetCalculations.costPerOrder}
                    </span>
                    <span className="text-xs text-stone-400">/ order</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    Primary Business Unit Metric
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Total Monthly Spend</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">
                      ${fleetCalculations.totalMonthlyCost.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ mo</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 block mt-1">
                    Avg Active: ~{fleetCalculations.averageActiveVcpu} vCPUs
                  </span>
                </div>
              </div>

              {/* FLEET ALLOCATION VISUAL BAR */}
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-3">
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700">
                  <span>HYBRID FLEET PORTFOLIO MIX:</span>
                  <span className="text-stone-500">
                    Commitment {committedPercent}% • Spot {spotPercent}% • On-Demand {fleetCalculations.onDemandPercent}%
                  </span>
                </div>
                <div className="h-4 w-full rounded-full overflow-hidden flex bg-stone-200">
                  <div style={{ width: `${committedPercent}%` }} className="bg-emerald-600 h-full" title="Savings Plans" />
                  <div style={{ width: `${spotPercent}%` }} className="bg-amber-500 h-full" title="Spot Instances" />
                  <div style={{ width: `${fleetCalculations.onDemandPercent}%` }} className="bg-stone-700 h-full" title="On-Demand Elastic" />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-stone-500 pt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600" /> Committed (53% off)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Spot (80% off)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-stone-700" /> On-Demand (Elastic)</span>
                </div>
              </div>

              {/* RISK & EFFICIENCY AUDIT */}
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Commitment Utilization</span>
                  <span className={`font-mono text-xs font-bold ${
                    fleetCalculations.commitmentUtilization >= 95
                      ? "text-emerald-700"
                      : fleetCalculations.commitmentUtilization >= 80
                      ? "text-amber-700"
                      : "text-rose-700"
                  }`}>
                    {fleetCalculations.commitmentUtilization}%
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Wasted / Idle Commitment</span>
                  <span className="font-mono text-xs font-bold text-stone-800">
                    ${fleetCalculations.monthlyWastedCommitment.toLocaleString()} / mo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Fleet Resilience Rating</span>
                  <span className="font-mono text-xs font-bold text-orange-600">{fleetCalculations.resilienceRating}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <h4 className="font-mono text-xs font-bold text-orange-900 uppercase flex items-center gap-1.5 mb-1">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span>FinOps Golden Rule for Commitments</span>
                </h4>
                <p className="text-xs text-orange-950 leading-relaxed">
                  Notice how sizing commitments to 60% of baseline keeps commitment utilization near 100% with zero wasted spend. The volatile peak demand is safely absorbed by elastic On-Demand autoscaling and interruptible Spot batches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 2: STORAGE LIFECYCLE & RETRIEVAL TCO CALCULATOR             */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 2
            </span>
            <span className="font-mono text-xs text-stone-400">Storage TCO & Retrieval Penalty Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Storage Lifecycle & Retrieval TCO Calculator
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Compare flat Standard/Hot storage against automated lifecycle tiering (Hot $\to$ Cool $\to$ Archive $\to$ Delete). Discover how high retrieval frequencies on cold data can inadvertently wipe out predicted storage savings.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONTROLS (COL-5) */}
            <div className="lg:col-span-5 space-y-5 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Storage Management Strategy
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setStorageStrategy("hot-only")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      storageStrategy === "hot-only"
                        ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Hot / Standard Only
                  </button>
                  <button
                    onClick={() => setStorageStrategy("lifecycle-automated")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      storageStrategy === "lifecycle-automated"
                        ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Automated Lifecycle
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>TOTAL DATASET SIZE:</span>
                  <span className="text-orange-600">{datasetSizeTb} TB</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={1000}
                  step={10}
                  value={datasetSizeTb}
                  onChange={(e) => setDatasetSizeTb(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <span className="text-[10px] text-stone-400 font-mono">10 TB to 1,000 TB (1 Petabyte)</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>MONTHLY RETRIEVAL FREQUENCY:</span>
                  <span className={retrievalPercent > 15 ? "text-rose-600 font-black" : "text-orange-600"}>
                    {retrievalPercent}% of Data
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={40}
                  step={1}
                  value={retrievalPercent}
                  onChange={(e) => setRetrievalPercent(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <span className="text-[10px] text-stone-400 font-mono">Simulates active queries against historical data</span>
              </div>
            </div>

            {/* FINANCIAL TELEMETRY (COL-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Monthly Storage Spend</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-orange-400">
                      ${storageCalculations.totalMonthlyStorageCost.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ mo</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    At-Rest: ${storageCalculations.monthlyAtRestCost.toLocaleString()} | Retrieval: ${storageCalculations.monthlyRetrievalCost.toLocaleString()}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Annual Net Savings</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-emerald-400">
                      ${storageCalculations.netAnnualSavings.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ year</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 block mt-1">
                    {storageCalculations.savingsPercent}% Net TCO Reduction
                  </span>
                </div>
              </div>

              {/* STRATEGY NOTE & RETRIEVAL TRAP ALERT */}
              <div className={`rounded-2xl border p-5 ${
                storageCalculations.retrievalWarning
                  ? "border-rose-300 bg-rose-50/80 text-rose-950"
                  : "border-[#e7e3da] bg-[#faf8f5] text-stone-800"
              }`}>
                <h4 className="font-mono text-xs font-bold uppercase flex items-center gap-1.5 mb-2">
                  {storageCalculations.retrievalWarning ? (
                    <AlertTriangle size={16} className="text-rose-600" />
                  ) : (
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  )}
                  <span>Storage Class Economic Analysis</span>
                </h4>
                <p className="text-xs leading-relaxed">{storageCalculations.strategyNote}</p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <h4 className="font-mono text-xs font-bold text-orange-900 uppercase flex items-center gap-1.5 mb-1">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span>The Retrieval Fee Invariant</span>
                </h4>
                <p className="text-xs text-orange-950 leading-relaxed">
                  Notice that as retrieval frequency climbs above 15%, cold retrieval fees ($0.01–$0.02/GB) rapidly eat away at at-rest savings. Archive tiers belong exclusively to true compliance data that is almost never read.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 3: CLOUD ECONOMICS GAMEDAY SIMULATOR (5 FAILURE GAMES)     */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#27272a] bg-[#18181b] p-6 md:p-10 text-white shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-orange-500/20 border border-orange-500/30 px-2.5 py-1 font-mono text-xs font-bold text-orange-400 uppercase">
                  Interactive Lab 3
                </span>
                <span className="font-mono text-xs text-stone-400">FinOps Crisis Drills</span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                Cloud Economics GameDay Simulator
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                5 Classic Cost Optimization Failure Games testing overcommitting, Spot failures, and retrieval shocks (Section 101).
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-stone-400">Current Score</span>
              <div className="text-2xl font-black text-orange-400">{gameScore} / 5</div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* SCENARIO SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                Failure Games (A to E)
              </span>
              <div className="space-y-1.5">
                {economicsGameScenarios.map((sc, idx) => (
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
                        {economicsGameScenarios[idx].options[gameHistory[idx]].correct ? "PASS" : "FAIL"}
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
                  Scenario {gameScenarioIndex + 1} of 5
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  {economicsGameScenarios[gameScenarioIndex].title}
                </h4>
                <p className="mt-3 text-sm text-stone-300 leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800">
                  {economicsGameScenarios[gameScenarioIndex].context}
                </p>

                <div className="mt-6 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase text-stone-400 block">
                    Choose FinOps Action:
                  </span>
                  {economicsGameScenarios[gameScenarioIndex].options.map((opt, optIdx) => (
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
                            {opt.correct ? "OPTIMAL ACTION" : "FINOPS FAILURE"}
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
        {/* SECTION 4: WEEK 22 MASTERY TEST & ARCHITECTURAL SELF-ASSESSMENT             */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Mastery Verification
            </span>
            <span className="font-mono text-xs text-stone-400">Section 102 Questions</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Cloud Economics & FinOps Mastery Test: Cloud Economics & FinOps Interview Questions
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            16 rigorous questions evaluating your ability to balance unit economics, commitments, spot preemption, storage lifecycles, and architectural value.
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
              Modules 1 through 12 Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From Cloud Foundations, VPCs, Compute, Storage, Databases, Large-Scale Architecture, Deep AWS, Deep Azure, Deep Google Cloud, Multi-Cloud Engineering, and Cloud Security to Cloud Economics & FinOps.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/cloud/security")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-700 transition"
            >
              ← Module 11: Security
            </button>
            <button
              onClick={() => navigate("/learning/cloud/advanced")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 13 — Advanced Cloud Systems →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
