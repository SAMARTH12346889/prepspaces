// projectx/src/Componets/DataEngineeringCloud.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Workflow,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Server,
  Activity,
  BarChart3,
  HardDrive,
  GitBranch,
  Filter,
  CheckCircle,
  Play,
  Copy,
  Check,
  Table,
  Sliders,
  Boxes,
  Clock,
  Zap,
  ShieldCheck,
  RotateCcw,
  Globe,
  Key,
  Binary,
  FileSpreadsheet,
  Code2,
  Radio,
  Send,
  SlidersHorizontal,
  RotateCw,
  Split,
  Merge,
  Calendar,
  Database,
  Search,
  AlertOctagon,
  FileText,
  HelpCircle,
  ChevronRight,
  Eye,
  SlidersVertical,
  Hash,
  ShieldAlert,
  Share2,
  Lock,
  Flame,
  ArrowDownRight,
  Gauge,
  Cloud,
  DollarSign,
  CloudRain,
  Network
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import { CloudSection, cloudSectionsMeta } from "./DataEngineeringCloudSections";

export default function DataEngineeringCloud() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("s3_lifecycle");
  // 's3_lifecycle' | 'athena_pruner' | 'glue_etl' | 'redshift_mpp' | 'cross_cloud' | 'iam_linter_quiz'

  // Curriculum section state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtered sections for curriculum
  const categories = useMemo(() => {
    const set = new Set(cloudSectionsMeta.map((s) => s.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredSections = useMemo(() => {
    return cloudSectionsMeta.filter((s) => {
      const matchCat =
        selectedCategory === "all" || s.category === selectedCategory;
      const matchQuery =
        !searchQuery ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // --------------------------------------------------------------------------
  // WORKBENCH 1: AWS S3 Multi-Tier Data Lake & Lifecycle Policy Simulator
  // --------------------------------------------------------------------------
  const [s3DataVolumeTB, setS3DataVolumeTB] = useState(25);
  const [s3DaysOld, setS3DaysOld] = useState(120);
  const [enableVersioning, setEnableVersioning] = useState(true);
  const [activeZone, setActiveZone] = useState("raw");
  // Zones: 'landing', 'raw', 'trusted', 'curated'

  const s3Tiers = [
    { name: "S3 Standard", threshold: 0, costPerGB: 0.023, color: "bg-blue-500", desc: "Frequently accessed data lake incoming zone" },
    { name: "S3 Standard-IA", threshold: 30, costPerGB: 0.0125, color: "bg-emerald-500", desc: "Infrequently accessed data (>30 days old)" },
    { name: "S3 Glacier Flexible", threshold: 90, costPerGB: 0.0036, color: "bg-amber-500", desc: "Archived datasets with 1-5 minute retrieval" },
    { name: "S3 Glacier Deep Archive", threshold: 180, costPerGB: 0.00099, color: "bg-purple-600", desc: "Long-term compliance & regulatory archive" },
    { name: "Permanent Expiration", threshold: 365, costPerGB: 0.0, color: "bg-red-500", desc: "Expired object keys deleted automatically" }
  ];

  const currentTier = useMemo(() => {
    if (s3DaysOld >= 365) return s3Tiers[4];
    if (s3DaysOld >= 180) return s3Tiers[3];
    if (s3DaysOld >= 90) return s3Tiers[2];
    if (s3DaysOld >= 30) return s3Tiers[1];
    return s3Tiers[0];
  }, [s3DaysOld]);

  const s3StandardMonthlyCost = useMemo(() => {
    return (s3DataVolumeTB * 1024 * 0.023).toFixed(2);
  }, [s3DataVolumeTB]);

  const s3OptimizedMonthlyCost = useMemo(() => {
    if (currentTier.threshold === 365) return "0.00";
    return (s3DataVolumeTB * 1024 * currentTier.costPerGB).toFixed(2);
  }, [s3DataVolumeTB, currentTier]);

  const s3MonthlySavings = useMemo(() => {
    const diff = parseFloat(s3StandardMonthlyCost) - parseFloat(s3OptimizedMonthlyCost);
    return Math.max(0, diff).toFixed(2);
  }, [s3StandardMonthlyCost, s3OptimizedMonthlyCost]);

  // --------------------------------------------------------------------------
  // WORKBENCH 2: Serverless Lake Analytics: Athena Partition Pruner & Query Cost
  // --------------------------------------------------------------------------
  const [athenaTableFormat, setAthenaTableFormat] = useState("parquet_partitioned");
  // 'csv_unpartitioned' vs 'parquet_partitioned'
  const [athenaQueryMonths, setAthenaQueryMonths] = useState(1); // 1 to 12 months filter
  const [isQueryRunning, setIsQueryRunning] = useState(false);
  const [lastQueryStats, setLastQueryStats] = useState(null);

  const runAthenaQuery = () => {
    setIsQueryRunning(true);
    setTimeout(() => {
      let scannedMB = 0;
      let latencyMs = 0;
      if (athenaTableFormat === "csv_unpartitioned") {
        // Full table scan of 100 GB CSV regardless of WHERE filter
        scannedMB = 102400; // 100 GB
        latencyMs = 12450;
      } else {
        // Parquet columnar projection (only 2 columns: customer_id, order_amount)
        // plus partition pruning (only scanning selected months instead of all 12)
        scannedMB = Math.round((athenaQueryMonths / 12) * 1850); // only ~154 MB per month
        latencyMs = Math.round(280 + athenaQueryMonths * 85);
      }
      // Athena pricing: $5.00 per TB scanned (min 10MB per query)
      const scannedTB = Math.max(10, scannedMB) / (1024 * 1024);
      const queryCostUSD = scannedTB * 5.0;

      setLastQueryStats({
        scannedMB,
        latencyMs,
        costUSD: queryCostUSD < 0.0001 ? "< $0.0001" : `$${queryCostUSD.toFixed(4)}`,
        rawCost: queryCostUSD,
        rowsProcessed: 15400000 * (athenaQueryMonths / 12)
      });
      setIsQueryRunning(false);
    }, 600);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 3: AWS Glue Data Catalog & Serverless PySpark ETL Simulator
  // --------------------------------------------------------------------------
  const [crawlerStatus, setCrawlerStatus] = useState("ready"); // 'ready' | 'crawling' | 'completed'
  const [discoveredSchema, setDiscoveredSchema] = useState(null);
  const [glueWorkerType, setGlueWorkerType] = useState("G.1X"); // 'G.1X' (4 vCPU, 16GB) | 'G.2X' (8 vCPU, 32GB)
  const [glueWorkerCount, setGlueWorkerCount] = useState(4); // 2 to 10 DPUs
  const [glueJobStep, setGlueJobStep] = useState(0); // 0: idle, 1: read, 2: filter, 3: dedupe, 4: write parquet, 5: finished
  const [isGlueRunning, setIsGlueRunning] = useState(false);

  const runGlueCrawler = () => {
    setCrawlerStatus("crawling");
    setTimeout(() => {
      setDiscoveredSchema([
        { col: "order_id", type: "string", partitionKey: false },
        { col: "customer_id", type: "string", partitionKey: false },
        { col: "order_amount", type: "double", partitionKey: false },
        { col: "order_status", type: "string", partitionKey: false },
        { col: "order_date", type: "timestamp", partitionKey: false },
        { col: "year", type: "string", partitionKey: true },
        { col: "month", type: "string", partitionKey: true }
      ]);
      setCrawlerStatus("completed");
    }, 1200);
  };

  const runGlueJob = () => {
    setIsGlueRunning(true);
    setGlueJobStep(1);
    setTimeout(() => setGlueJobStep(2), 700);
    setTimeout(() => setGlueJobStep(3), 1400);
    setTimeout(() => setGlueJobStep(4), 2100);
    setTimeout(() => {
      setGlueJobStep(5);
      setIsGlueRunning(false);
    }, 2800);
  };

  const glueCostCalc = useMemo(() => {
    // AWS Glue is $0.44 per DPU-Hour billed per second with 1-min minimum
    // Estimated job runtime: 3.5 minutes = 0.0583 hours
    const dpuCostPerHour = 0.44;
    const estimatedHours = 0.0583;
    const cost = glueWorkerCount * dpuCostPerHour * estimatedHours;
    return cost.toFixed(3);
  }, [glueWorkerCount]);

  // --------------------------------------------------------------------------
  // WORKBENCH 4: Amazon Redshift MPP Architecture, Distribution & Sort Key Laboratory
  // --------------------------------------------------------------------------
  const [redshiftDistStyle, setRedshiftDistStyle] = useState("KEY"); // 'KEY' | 'EVEN' | 'ALL'
  const [redshiftSortKey, setRedshiftSortKey] = useState("COMPOUND"); // 'COMPOUND' | 'INTERLEAVED' | 'NONE'
  const [clusterNodeCount, setClusterNodeCount] = useState(3); // 2 to 4 nodes (2 slices per node)
  const [redshiftSimRunning, setRedshiftSimRunning] = useState(false);
  const [redshiftQueryResult, setRedshiftQueryResult] = useState(null);

  const executeRedshiftQuery = () => {
    setRedshiftSimRunning(true);
    setTimeout(() => {
      let shuffleOverhead = "None (Co-located on slices)";
      let executionSec = 0.38;
      let bottleneck = "None - fully parallel MPP";

      if (redshiftDistStyle === "EVEN") {
        shuffleOverhead = "High (Interconnect data broadcast across all compute nodes)";
        executionSec = 3.65;
        bottleneck = "Cluster interconnect network network saturation (BCAST/REDIST)";
      } else if (redshiftDistStyle === "ALL") {
        shuffleOverhead = "Low for dimension join, but 3x storage footprint";
        executionSec = 0.72;
        bottleneck = "Write amplification on updates to full cluster";
      }

      if (redshiftSortKey === "NONE") {
        executionSec += 1.8;
      } else if (redshiftSortKey === "COMPOUND") {
        executionSec = Math.max(0.25, executionSec * 0.75);
      }

      setRedshiftQueryResult({
        distStyle: redshiftDistStyle,
        sortKey: redshiftSortKey,
        nodes: clusterNodeCount,
        slices: clusterNodeCount * 2,
        executionSec: executionSec.toFixed(2),
        shuffleOverhead,
        bottleneck,
        networkBytesMB: redshiftDistStyle === "KEY" ? "0 MB" : redshiftDistStyle === "ALL" ? "12 MB" : "485 MB"
      });
      setRedshiftSimRunning(false);
    }, 700);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 5: Cross-Cloud Rosetta Stone (AWS vs Azure vs GCP)
  // --------------------------------------------------------------------------
  const [activeCloudWorkload, setActiveCloudWorkload] = useState("lakehouse");
  // 'lakehouse' | 'streaming' | 'serverless'

  const rosettaMatrix = [
    { cap: "Object Storage", aws: "Amazon S3", azure: "Azure Data Lake Storage Gen2 (ADLS)", gcp: "Google Cloud Storage (GCS)" },
    { cap: "Data Integration / ETL", aws: "AWS Glue (Serverless Spark)", azure: "Azure Data Factory (ADF) / Fabric Data Factory", gcp: "Cloud Dataflow / Cloud Data Fusion" },
    { cap: "Cloud Data Warehouse", aws: "Amazon Redshift (Provisioned / Serverless)", azure: "Microsoft Fabric Warehouse / Azure Synapse", gcp: "Google BigQuery" },
    { cap: "Managed Big Data (Spark/Hadoop)", aws: "Amazon EMR (EC2 / Serverless / EKS)", azure: "Azure Databricks / HDInsight", gcp: "Google Cloud Dataproc" },
    { cap: "Serverless SQL on Lake", aws: "Amazon Athena (Trino-based)", azure: "Synapse Serverless SQL / Fabric OneLake", gcp: "BigQuery External Tables / BigLake" },
    { cap: "Real-Time Streaming Ingestion", aws: "Amazon Kinesis Data Streams", azure: "Azure Event Hubs", gcp: "Google Cloud Pub/Sub" },
    { cap: "Managed Stream Processing", aws: "Amazon Managed Service for Apache Flink", azure: "Azure Stream Analytics", gcp: "Google Cloud Dataflow (Apache Beam)" },
    { cap: "Serverless Compute Functions", aws: "AWS Lambda", azure: "Azure Functions", gcp: "Google Cloud Run Functions" },
    { cap: "Managed Relational Database (OLTP)", aws: "Amazon RDS / Amazon Aurora", azure: "Azure SQL Database", gcp: "Google Cloud SQL / AlloyDB" },
    { cap: "Managed NoSQL Key-Value / Doc", aws: "Amazon DynamoDB", azure: "Azure Cosmos DB", gcp: "Google Firestore / Bigtable" },
    { cap: "Identity & Access Management", aws: "AWS IAM (Roles, Policies)", azure: "Microsoft Entra ID & Azure RBAC", gcp: "Google Cloud IAM" },
    { cap: "Key Management & Encryption", aws: "AWS KMS", azure: "Azure Key Vault", gcp: "Google Cloud KMS" },
    { cap: "Data Governance & Catalog", aws: "AWS Glue Data Catalog / Lake Formation", azure: "Microsoft Purview / OneLake Catalog", gcp: "Dataplex / Data Catalog" }
  ];

  // --------------------------------------------------------------------------
  // WORKBENCH 6: IAM Least-Privilege Policy Linter & 15-Question Curriculum Quiz
  // --------------------------------------------------------------------------
  const samplePolicies = {
    wildcard_danger: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}`,
    broad_s3: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::company-lake/*"
    }
  ]
}`,
    least_privilege: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAthenaCuratedRead",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::company-lake",
        "arn:aws:s3:::company-lake/curated/*"
      ]
    }
  ]
}`
  };

  const [policyInput, setPolicyInput] = useState(samplePolicies.wildcard_danger);
  const [policyLintReport, setPolicyLintReport] = useState(null);

  const lintPolicy = (policyText) => {
    try {
      const parsed = JSON.parse(policyText);
      const statements = parsed.Statement || [];
      const issues = [];
      let score = 100;

      statements.forEach((stmt, idx) => {
        // Check wildcard actions
        const actions = Array.isArray(stmt.Action) ? stmt.Action : [stmt.Action];
        if (actions.includes("*")) {
          issues.push({ level: "critical", msg: `Statement[${idx}]: Full wildcard action "*" grants unrestricted administrator capability across all AWS APIs.` });
          score -= 50;
        } else if (actions.some((a) => a && a.endsWith(":*"))) {
          issues.push({ level: "warning", msg: `Statement[${idx}]: Service-level wildcard "${actions.find(a => a.endsWith(':*'))}" violates principle of least privilege.` });
          score -= 25;
        }

        // Check wildcard resources
        const resources = Array.isArray(stmt.Resource) ? stmt.Resource : [stmt.Resource];
        if (resources.includes("*") && stmt.Effect === "Allow") {
          issues.push({ level: "critical", msg: `Statement[${idx}]: Resource "*" grants access to every bucket or AWS resource in the account.` });
          score -= 40;
        }

        // Check bucket vs object ARN
        if (actions.includes("s3:ListBucket") && resources.every(r => r && r.endsWith("/*"))) {
          issues.push({ level: "info", msg: `Statement[${idx}]: "s3:ListBucket" requires the root bucket ARN (arn:aws:s3:::bucket), not the object path (/*).` });
          score -= 5;
        }
      });

      setPolicyLintReport({
        validJson: true,
        score: Math.max(0, score),
        issues
      });
    } catch (e) {
      setPolicyLintReport({
        validJson: false,
        score: 0,
        issues: [{ level: "critical", msg: `JSON Syntax Error: ${e.message}` }]
      });
    }
  };

  // 15-Question Quiz State
  const quizQuestions = [
    {
      q: "What is the primary difference between horizontal scaling and vertical scaling in cloud computing?",
      options: [
        "Horizontal scaling adds more instances or nodes; vertical scaling increases CPU/RAM of a single instance",
        "Horizontal scaling increases CPU of one server; vertical scaling adds distributed network zones",
        "Vertical scaling requires serverless architecture; horizontal scaling only works on EC2",
        "Horizontal scaling is strictly manual; vertical scaling is always automatic"
      ],
      answer: 0,
      exp: "Horizontal scaling (scaling out) adds more machines or nodes to a cluster (e.g. adding Spark workers). Vertical scaling (scaling up) upgrades the hardware capacity (CPU, RAM, disk) of a single server."
    },
    {
      q: "In the AWS Shared Responsibility Model, which security task is the sole responsibility of the customer?",
      options: [
        "Securing physical data center facilities and server hardware",
        "Maintaining host hypervisor patching for virtual machines",
        "Customer data classification, client/server encryption, and IAM access controls",
        "Decommissioning defective physical hard drives"
      ],
      answer: 2,
      exp: "AWS is responsible for 'Security OF the Cloud' (physical hardware, facilities, hypervisors, global network). The customer is responsible for 'Security IN the Cloud' (data encryption, IAM policies, firewall rules, OS updates on EC2)."
    },
    {
      q: "Why is an IAM Role preferred over hardcoded IAM User access keys for EC2 instances and AWS Glue jobs?",
      options: [
        "IAM Roles are completely free of charge while IAM Users incur monthly fees",
        "IAM Roles provide automatic, temporary short-lived credentials via STS with no stored secrets",
        "IAM Roles bypass AWS KMS encryption checks for higher processing speed",
        "IAM Roles only work with S3 and cannot access Redshift"
      ],
      answer: 1,
      exp: "IAM Roles eliminate hardcoded credentials in source code. AWS Security Token Service (STS) automatically provisions short-lived temporary security tokens that rotate transparently."
    },
    {
      q: "An e-commerce company has historical transaction logs that are accessed only once every two years for tax compliance. Which S3 storage class offers the lowest monthly storage cost?",
      options: [
        "S3 Standard",
        "S3 Intelligent-Tiering",
        "S3 Standard-IA",
        "S3 Glacier Deep Archive"
      ],
      answer: 3,
      exp: "S3 Glacier Deep Archive offers the lowest cost storage in AWS (~$0.00099 per GB/month), designed for long-term data retention with retrieval times of 9-12 hours."
    },
    {
      q: "How does object storage in Amazon S3 differ architecturally from a traditional hierarchical filesystem?",
      options: [
        "S3 stores files in nested directory inodes on a local ext4 mount",
        "S3 is a flat key-value store where slashes ('/') in object keys are purely string conventions for prefix filtering",
        "S3 limits each bucket to at most 10,000 files total",
        "S3 requires an operating system reboot to expand bucket volume size"
      ],
      answer: 1,
      exp: "Amazon S3 does not possess true folders or directory inodes. It is a massive distributed key-value store. The 'directories' seen in console or tools are visual prefix filters delimited by '/' characters."
    },
    {
      q: "What is the primary role of an AWS Glue Crawler in a data lakehouse architecture?",
      options: [
        "To compile PySpark code into machine binaries",
        "To inspect raw S3 files, infer schemas, detect partitions, and register table metadata in the Glue Data Catalog",
        "To convert CSV files directly into PostgreSQL tables",
        "To terminate idle EC2 worker nodes"
      ],
      answer: 1,
      exp: "AWS Glue Crawlers connect to source data stores (like S3 buckets), parse data formats, infer schema structures and partition hierarchies, and write table metadata to the AWS Glue Data Catalog."
    },
    {
      q: "How does Amazon Athena calculate query costs for ad-hoc analytical queries?",
      options: [
        "Fixed hourly billing per active database connection",
        "Billed by the number of CPU cores utilized during the query",
        "Billed at $5.00 per Terabyte (TB) of data scanned by the query execution engine",
        "Free for all queries running under 30 seconds"
      ],
      answer: 2,
      exp: "Amazon Athena is serverless and bills $5.00 per TB of data scanned from S3 (with a 10MB minimum per query). Partition pruning and columnar formats (Parquet/ORC) dramatically reduce scanned bytes."
    },
    {
      q: "Why does converting raw CSV files to Apache Parquet format reduce Amazon Athena query costs by up to 90%?",
      options: [
        "Parquet is uncompressed and faster to download over HTTP",
        "Parquet is columnar and compressed: Athena reads only the specific columns requested in the SELECT statement rather than entire rows",
        "Athena gives a 50% promotional discount for using Apache open-source projects",
        "Parquet removes the requirement for AWS IAM authentication"
      ],
      answer: 1,
      exp: "Parquet stores data column-by-column with dictionary encoding and Snappy/Gzip compression. When a query requests 2 columns out of a 50-column dataset, Athena skips the other 48 columns completely, slashing scanned bytes."
    },
    {
      q: "In Amazon Redshift MPP architecture, what role does the Leader Node perform?",
      options: [
        "It stores all row partitions in its local NVMe drive",
        "It coordinates client SQL connections, parses SQL, develops optimized execution plans, and dispatches compiled C++ code to compute nodes",
        "It runs AWS Glue crawlers in the background",
        "It acts as a cold standby replica in case compute nodes fail"
      ],
      answer: 1,
      exp: "The Redshift Leader Node coordinates client communication, parses and compiles query plans, optimizes execution trees, and coordinates the parallel execution of code slices on compute nodes."
    },
    {
      q: "When joining a 100-million row fact table with a 50-million row dimension table in Redshift, which distribution style eliminates network shuffle (redistribution)?",
      options: [
        "DISTSTYLE EVEN on both tables",
        "DISTSTYLE KEY on both tables using the join key column (e.g. customer_id)",
        "DISTSTYLE ALL on the 100-million row fact table",
        "DISTSTYLE AUTO with no indexes"
      ],
      answer: 1,
      exp: "When both tables use DISTSTYLE KEY on the exact matching join column, records with identical hash keys reside on the identical slice of the identical compute node, enabling 100% local joins with zero network transfer."
    },
    {
      q: "When should an enterprise choose Amazon EMR over AWS Glue for a distributed data engineering workload?",
      options: [
        "When they want a 100% serverless service with zero cluster configuration",
        "When they require fine-grained cluster tuning, custom Spark/Flink/HBase configurations, long-running 24/7 clusters, or custom libraries",
        "When they only need to run a 2-minute daily CSV cleanup",
        "EMR has been deprecated in favor of AWS Athena"
      ],
      answer: 1,
      exp: "Amazon EMR provides full root access to EC2 nodes, custom cluster configuration, support for arbitrary big data frameworks (Spark, Flink, Trino, HBase), and spot instance fleet cost optimizations for massive, complex workloads."
    },
    {
      q: "In Amazon Kinesis Data Streams, what is the role of a Shard?",
      options: [
        "A physical tape backup drive in an AWS availability zone",
        "A base unit of throughput providing 1 MB/sec (1,000 records/sec) write capacity and 2 MB/sec read capacity",
        "A serverless Python function executed on each message",
        "A compressed zip file stored in S3"
      ],
      answer: 1,
      exp: "A Kinesis shard provides a fixed unit of throughput: 1 MB/s input and 2 MB/s output. Streams scale capacity horizontally by adding or splitting shards."
    },
    {
      q: "Which workload is best suited for Amazon DynamoDB rather than Amazon Redshift?",
      options: [
        "Calculating aggregate revenue across 10 years of sales grouped by country",
        "High-throughput, single-digit millisecond key-value lookups for active user session shopping carts",
        "Multi-table analytical star schema queries with complex window functions",
        "Generating quarterly financial compliance reports"
      ],
      answer: 1,
      exp: "DynamoDB is an ultra-fast NoSQL key-value and document store designed for high-concurrency transactional OLTP operations with single-digit millisecond latency. Redshift is an analytical OLAP warehouse."
    },
    {
      q: "What is an important operational limitation of AWS Lambda in big data ETL pipelines?",
      options: [
        "It cannot write files to Amazon S3",
        "Maximum 15-minute execution timeout per invocation and limited local ephemeral storage",
        "It only supports JavaScript and cannot run Python",
        "It cannot be triggered by cloud events"
      ],
      answer: 1,
      exp: "AWS Lambda has a hard 15-minute execution limit and cold start latency, making it unsuitable for multi-hour heavy distributed transformations (which belong in AWS Glue or EMR)."
    },
    {
      q: "Which Azure and Google Cloud services correspond directly to AWS Glue and Amazon Redshift?",
      options: [
        "Azure: Virtual Machines & Cosmos DB | GCP: Cloud Run & Cloud SQL",
        "Azure: Azure Data Factory & Azure Synapse / Fabric | GCP: Cloud Dataflow / Dataproc & BigQuery",
        "Azure: Blob Storage & Key Vault | GCP: GCS & Cloud IAM",
        "Azure: Power BI & Event Grid | GCP: Looker & Pub/Sub"
      ],
      answer: 1,
      exp: "AWS Glue corresponds to Azure Data Factory (and Fabric Data Factory) / GCP Dataflow for data integration and ETL; Amazon Redshift corresponds to Azure Synapse / Fabric Warehouse and Google BigQuery for cloud analytical data warehousing."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuizAnswer = (qIdx, optIdx) => {
    if (showQuizResults) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) correct++;
    });
    return correct;
  }, [quizAnswers, quizQuestions]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans">
      {/* Universal Module Navigation */}
      <ModuleNav currentModuleId="cloud-data-engineering" />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Course Breadcrumbs & Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <button
              onClick={goBack}
              className="hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              <ArrowLeft size={12} />
              <span>Courses</span>
            </button>
            <span>/</span>
            <span className="hover:text-stone-900">Data Engineering Master Course</span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 18: Cloud Data Engineering</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-orange-100 text-orange-700 border border-orange-200">
                  MODULE 18 · ADVANCED CLOUD PLATFORMS
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                  AWS PRIMARY · AZURE & GCP MAPPED
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Cloud Data Engineering and Cloud Platforms
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                Master production cloud data infrastructure on Amazon Web Services (AWS) with direct multi-cloud equivalence across Microsoft Azure and Google Cloud. Architect modern S3 data lakes, Glue serverless ETL, Athena SQL, Redshift MPP warehousing, Kinesis streaming, and least-privilege cloud security.
              </p>
            </div>

            {/* Mode Switcher Pill Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-xl border border-stone-300 shadow-inner self-start md:self-auto">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className={activeTab === "curriculum" ? "text-orange-600" : ""} />
                <span>Specification & Blueprints (25)</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Cpu size={14} className={activeTab === "workbench" ? "text-orange-600" : ""} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TAB 1: SPECIFICATION & BLUEPRINTS (FULL VERBATIM CURRICULUM)      */}
        {/* ================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Sidebar: Syllabus Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-4 sticky top-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-orange-600" />
                  <span className="font-bold text-sm text-stone-800">Module 18 Syllabus</span>
                </div>
                <span className="text-[11px] font-mono text-stone-500">
                  {cloudSectionsMeta.length} Sections
                </span>
              </div>

              {/* Search & Category Filter */}
              <div className="space-y-2">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search sections or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-stone-200 text-xs bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="flex flex-wrap gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-colors ${
                        selectedCategory === cat
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {cat === "all" ? "All Categories" : cat.split("·")[0].trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section List */}
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 [scrollbar-width:thin]">
                {filteredSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSectionId(sec.id)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                        isActive
                          ? "bg-orange-50 text-orange-950 font-semibold border border-orange-200 shadow-sm"
                          : "hover:bg-stone-50 text-stone-700 border border-transparent"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 ${
                          isActive
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {sec.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="truncate leading-tight">{sec.title}</div>
                        <div className="text-[10px] text-stone-400 truncate mt-0.5">
                          {sec.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Workbench Shortcut Card */}
              <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-xs">
                <div className="font-semibold text-orange-900 flex items-center gap-1.5 mb-1">
                  <Sparkles size={13} className="text-orange-600" />
                  <span>Hands-on Simulation Labs</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed mb-2">
                  Test S3 lifecycle policies, run Athena partition pruners, simulate Glue PySpark jobs, and inspect Redshift slices.
                </p>
                <button
                  onClick={() => setActiveTab("workbench")}
                  className="w-full py-1.5 px-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <span>Launch Workbenches</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Right Main Content: Verbatim Section Viewer */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <CloudSection sectionId={activeSectionId} />

              {/* Prev / Next Section Controls */}
              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  disabled={activeSectionId <= 0}
                  onClick={() => setActiveSectionId((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <ArrowLeft size={13} />
                  <span>Previous Section</span>
                </button>

                <span className="text-xs font-mono text-stone-500">
                  Section {activeSectionId} of {cloudSectionsMeta.length - 1}
                </span>

                <button
                  disabled={activeSectionId >= cloudSectionsMeta.length - 1}
                  onClick={() => setActiveSectionId((prev) => Math.min(cloudSectionsMeta.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <span>Next Section</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: INTERACTIVE WORKBENCHES (6 SPECIALIZED LABS)               */}
        {/* ================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
              {[
                { id: "s3_lifecycle", label: "1. S3 Lake & Lifecycle", icon: HardDrive },
                { id: "athena_pruner", label: "2. Athena Partition Pruner", icon: Zap },
                { id: "glue_etl", label: "3. Glue Catalog & PySpark", icon: Layers },
                { id: "redshift_mpp", label: "4. Redshift MPP Cluster", icon: Database },
                { id: "cross_cloud", label: "5. Cross-Cloud Rosetta", icon: Globe },
                { id: "iam_linter_quiz", label: "6. IAM Linter & Exam Quiz", icon: ShieldCheck }
              ].map((wb) => {
                const Icon = wb.icon;
                const isCur = activeWorkbench === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isCur
                        ? "bg-stone-900 text-white shadow-sm border border-stone-900"
                        : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                    }`}
                  >
                    <Icon size={14} className={isCur ? "text-orange-400" : "text-stone-500"} />
                    <span>{wb.label}</span>
                  </button>
                );
              })}
            </div>

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 1: S3 Multi-Tier Data Lake & Lifecycle Simulator     */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "s3_lifecycle" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 1
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Amazon S3 Multi-Tier Data Lake & Lifecycle Policy Simulator
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Visualize the four core zones of a production data lake, configure automated S3 Lifecycle transition rules across storage classes, and compute real-world cloud cost reductions.
                  </p>
                </div>

                {/* S3 Data Lake 4-Zone Explorer */}
                <div className="border border-stone-200 rounded-xl p-4 bg-stone-50">
                  <div className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Layers size={14} className="text-orange-600" />
                    <span>Data Lake S3 Zone Architecture</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      {
                        id: "landing",
                        title: "1. Landing Zone",
                        bucket: "s3://company-lake/landing/",
                        desc: "Temporary staging for raw API payloads, partner SFTP drops, and CDC Kafka flushes.",
                        format: "Raw CSV / JSON",
                        retention: "7-14 Days"
                      },
                      {
                        id: "raw",
                        title: "2. Raw Zone",
                        bucket: "s3://company-lake/raw/",
                        desc: "Immutable source of truth. Data stored permanently in original format for replayability.",
                        format: "Original Formats",
                        retention: "Infinite (Glacier)"
                      },
                      {
                        id: "trusted",
                        title: "3. Trusted / Clean",
                        bucket: "s3://company-lake/trusted/",
                        desc: "Schema-enforced, deduplicated, cleaned, partitioned data ready for Spark/SQL queries.",
                        format: "Snappy Parquet",
                        retention: "Standard-IA"
                      },
                      {
                        id: "curated",
                        title: "4. Curated / Mart",
                        bucket: "s3://company-lake/curated/",
                        desc: "Business-level aggregations, dimensional star models, and high-performance reporting views.",
                        format: "Optimized Parquet",
                        retention: "S3 Standard"
                      }
                    ].map((zone) => (
                      <div
                        key={zone.id}
                        onClick={() => setActiveZone(zone.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          activeZone === zone.id
                            ? "bg-white border-orange-500 shadow-md ring-2 ring-orange-500/20"
                            : "bg-stone-100/60 border-stone-200 hover:bg-white"
                        }`}
                      >
                        <div className="font-bold text-xs text-stone-900 mb-1">{zone.title}</div>
                        <div className="text-[11px] font-mono text-orange-600 bg-orange-50/80 px-2 py-0.5 rounded border border-orange-100 truncate mb-2">
                          {zone.bucket}
                        </div>
                        <p className="text-[11px] text-stone-600 leading-relaxed mb-2">{zone.desc}</p>
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 pt-2 border-t border-stone-200">
                          <span>{zone.format}</span>
                          <span className="font-semibold text-stone-700">{zone.retention}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* S3 Lifecycle Transition Rule Simulator */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="border border-stone-200 rounded-xl p-4 bg-white shadow-sm space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-800">Simulate Object Age (Days)</span>
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-stone-100 text-stone-900">
                          {s3DaysOld} Days Old
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="400"
                        step="5"
                        value={s3DaysOld}
                        onChange={(e) => setS3DaysOld(parseInt(e.target.value))}
                        className="w-full accent-orange-600"
                      />

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-bold text-stone-800">Total Lake Storage Size (TB)</span>
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-stone-100 text-stone-900">
                          {s3DataVolumeTB} Terabytes
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="200"
                        step="5"
                        value={s3DataVolumeTB}
                        onChange={(e) => setS3DataVolumeTB(parseInt(e.target.value))}
                        className="w-full accent-orange-600"
                      />

                      <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="versioning"
                            checked={enableVersioning}
                            onChange={(e) => setEnableVersioning(e.target.checked)}
                            className="accent-orange-600 rounded"
                          />
                          <label htmlFor="versioning" className="text-xs font-medium text-stone-700 cursor-pointer">
                            Enable S3 Bucket Versioning
                          </label>
                        </div>
                        <span className="text-[10px] font-mono text-stone-500">
                          {enableVersioning ? "Prevents accidental deletes" : "Overwrites replace objects"}
                        </span>
                      </div>
                    </div>

                    {/* Active Storage Tier Badge */}
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                        Current Applied Storage Tier at Day {s3DaysOld}:
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded-full ${currentTier.color}`}></div>
                        <span className="text-base font-extrabold text-stone-900">{currentTier.name}</span>
                        <span className="font-mono text-xs text-stone-500">
                          (${currentTier.costPerGB} / GB-month)
                        </span>
                      </div>
                      <p className="text-xs text-stone-600">{currentTier.desc}</p>
                    </div>
                  </div>

                  {/* Cost Comparison Dashboard */}
                  <div className="lg:col-span-6 border border-stone-200 rounded-xl p-5 bg-stone-900 text-stone-100 space-y-4 shadow-md">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <span className="text-xs font-mono uppercase text-orange-400 font-bold flex items-center gap-1.5">
                        <DollarSign size={14} /> Monthly Cost Estimation ({s3DataVolumeTB} TB)
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">AWS US-East-1 Pricing</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-stone-800 border border-stone-700">
                        <div className="text-[10px] font-mono text-stone-400 uppercase">Unoptimized Standard</div>
                        <div className="text-xl font-bold font-mono text-red-400 mt-1">
                          ${s3StandardMonthlyCost}
                        </div>
                        <div className="text-[10px] text-stone-400 mt-0.5">Fixed $0.023 / GB</div>
                      </div>

                      <div className="p-3 rounded-lg bg-stone-800 border border-stone-700">
                        <div className="text-[10px] font-mono text-stone-400 uppercase">Tiered at Day {s3DaysOld}</div>
                        <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                          ${s3OptimizedMonthlyCost}
                        </div>
                        <div className="text-[10px] text-stone-400 mt-0.5">${currentTier.costPerGB} / GB</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-orange-950/40 border border-orange-800/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-orange-300">Projected Monthly Savings</div>
                        <div className="text-[11px] text-orange-200/80 mt-0.5">
                          {s3DaysOld >= 365
                            ? "100% savings after complete expiration"
                            : `${(((parseFloat(s3StandardMonthlyCost) - parseFloat(s3OptimizedMonthlyCost)) / parseFloat(s3StandardMonthlyCost)) * 100).toFixed(1)}% cost reduction`}
                        </div>
                      </div>
                      <div className="text-2xl font-extrabold font-mono text-orange-400">
                        +${s3MonthlySavings}/mo
                      </div>
                    </div>

                    {/* Sample S3 Lifecycle JSON */}
                    <div className="text-[11px] font-mono text-stone-400 border-t border-stone-800 pt-3">
                      <div className="text-[10px] text-stone-500 uppercase mb-1">Generated AWS CLI Lifecycle Rule:</div>
                      <div className="p-2 rounded bg-black/50 text-[10px] overflow-x-auto text-emerald-300">
                        {`aws s3api put-bucket-lifecycle-configuration --bucket company-lake --lifecycle-configuration '{
  "Rules": [{
    "ID": "MoveOlderDataToGlacier",
    "Status": "Enabled",
    "Filter": { "Prefix": "${activeZone}/" },
    "Transitions": [
      { "Days": 30, "StorageClass": "STANDARD_IA" },
      { "Days": 90, "StorageClass": "GLACIER" },
      { "Days": 180, "StorageClass": "DEEP_ARCHIVE" }
    ],
    "Expiration": { "Days": 365 }
  }]
}'`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 2: Athena Partition Pruner & Query Cost Calculator   */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "athena_pruner" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 2
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Serverless Lake Analytics: Athena Partition Pruner & Query Cost
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Compare unpartitioned CSV table scans against partitioned Parquet columnar formats. Witness how partition pruning and column projection slash scanned bytes by over 99%.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 space-y-4">
                    {/* Format Toggle */}
                    <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                      <div className="text-xs font-bold text-stone-800">Select S3 Storage Format:</div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setAthenaTableFormat("csv_unpartitioned")}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            athenaTableFormat === "csv_unpartitioned"
                              ? "bg-white border-orange-500 shadow-sm ring-2 ring-orange-500/20"
                              : "bg-stone-100 border-stone-200 hover:bg-white"
                          }`}
                        >
                          <div className="font-bold text-xs text-stone-900">Unpartitioned CSV</div>
                          <div className="text-[11px] text-stone-500 mt-1">Single folder, all rows scanned</div>
                          <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-red-100 text-red-700">
                            100 GB Full Table Scan
                          </span>
                        </button>

                        <button
                          onClick={() => setAthenaTableFormat("parquet_partitioned")}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            athenaTableFormat === "parquet_partitioned"
                              ? "bg-white border-orange-500 shadow-sm ring-2 ring-orange-500/20"
                              : "bg-stone-100 border-stone-200 hover:bg-white"
                          }`}
                        >
                          <div className="font-bold text-xs text-stone-900">Partitioned Parquet</div>
                          <div className="text-[11px] text-stone-500 mt-1">year=/month= hierarchy</div>
                          <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-700">
                            Columnar + Pruned
                          </span>
                        </button>
                      </div>

                      {/* Filter Month Range */}
                      <div className="pt-2">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-medium text-stone-700">Query Filter Scope (Months):</span>
                          <span className="font-mono font-bold text-stone-900">{athenaQueryMonths} Month(s)</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="12"
                          value={athenaQueryMonths}
                          onChange={(e) => setAthenaQueryMonths(parseInt(e.target.value))}
                          className="w-full accent-orange-600"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-0.5">
                          <span>1 Month (WHERE month='11')</span>
                          <span>12 Months (Full Year)</span>
                        </div>
                      </div>
                    </div>

                    {/* SQL Query Preview */}
                    <div className="border border-stone-800 rounded-xl p-4 bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                      <div className="text-[10px] uppercase text-orange-400 font-bold flex items-center justify-between">
                        <span>Amazon Athena SQL Editor</span>
                        <span className="text-stone-400">Database: ecommerce</span>
                      </div>
                      <pre className="text-emerald-300 leading-relaxed text-[11px] overflow-x-auto [scrollbar-width:thin]">
                        {athenaTableFormat === "csv_unpartitioned"
                          ? `SELECT customer_id, SUM(order_amount) AS revenue
FROM ecommerce.orders_csv
WHERE year = '2026' AND month = '11'
GROUP BY customer_id
ORDER BY revenue DESC
LIMIT 10;
-- WARNING: orders_csv has NO partition keys.
-- Athena must scan every single CSV byte on S3!`
                          : `SELECT customer_id, SUM(order_amount) AS revenue
FROM ecommerce.orders_parquet
WHERE year = '2026' AND month <= '${athenaQueryMonths.toString().padStart(2, "0")}'
GROUP BY customer_id
ORDER BY revenue DESC
LIMIT 10;
-- SUCCESS: Partition pruning skips all unselected month folders.
-- Parquet columnar layout skips other 35 non-selected columns!`}
                      </pre>
                      <button
                        onClick={runAthenaQuery}
                        disabled={isQueryRunning}
                        className="w-full py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-sans font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                      >
                        {isQueryRunning ? (
                          <>
                            <RefreshCw size={13} className="animate-spin" />
                            <span>Scanning S3 Bucket via Presto Engine...</span>
                          </>
                        ) : (
                          <>
                            <Play size={13} />
                            <span>Execute Athena Query</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Execution Results & Cost Analysis */}
                  <div className="lg:col-span-6 border border-stone-200 rounded-xl p-5 bg-stone-50 space-y-4">
                    <div className="text-xs font-mono uppercase text-stone-500 font-bold">
                      Query Execution Telemetry
                    </div>

                    {lastQueryStats ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          <div className="p-3 rounded-lg bg-white border border-stone-200">
                            <div className="text-[10px] font-mono text-stone-400 uppercase">Data Scanned</div>
                            <div className="text-lg font-bold font-mono text-stone-900 mt-0.5">
                              {lastQueryStats.scannedMB >= 1024
                                ? `${(lastQueryStats.scannedMB / 1024).toFixed(1)} GB`
                                : `${lastQueryStats.scannedMB} MB`}
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-white border border-stone-200">
                            <div className="text-[10px] font-mono text-stone-400 uppercase">Run Time</div>
                            <div className="text-lg font-bold font-mono text-stone-900 mt-0.5">
                              {(lastQueryStats.latencyMs / 1000).toFixed(2)}s
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-white border border-stone-200">
                            <div className="text-[10px] font-mono text-stone-400 uppercase">Athena Bill</div>
                            <div className="text-lg font-bold font-mono text-orange-600 mt-0.5">
                              {lastQueryStats.costUSD}
                            </div>
                          </div>
                        </div>

                        {/* Visual Partition Skipped Tree */}
                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                          <div className="text-xs font-bold text-stone-800">Partition Pruning Behavior:</div>
                          {athenaTableFormat === "csv_unpartitioned" ? (
                            <div className="p-2.5 rounded bg-red-50 text-red-800 text-xs flex items-start gap-2 border border-red-200">
                              <AlertTriangle size={15} className="shrink-0 text-red-600 mt-0.5" />
                              <div>
                                <strong>Full Scan Penalty:</strong> Athena opened 100% of files in{" "}
                                <code className="font-mono text-[11px] bg-red-100 px-1 rounded">
                                  s3://company-lake/orders_csv/
                                </code>
                                . Zero partition folders existed to skip.
                              </div>
                            </div>
                          ) : (
                            <div className="p-2.5 rounded bg-emerald-50 text-emerald-800 text-xs flex items-start gap-2 border border-emerald-200">
                              <CheckCircle2 size={15} className="shrink-0 text-emerald-600 mt-0.5" />
                              <div>
                                <strong>Pruning Success:</strong> Athena scanned only{" "}
                                <code className="font-mono text-[11px] bg-emerald-100 px-1 rounded">
                                  year=2026/month=01/
                                </code>{" "}
                                to{" "}
                                <code className="font-mono text-[11px] bg-emerald-100 px-1 rounded">
                                  month={athenaQueryMonths.toString().padStart(2, "0")}/
                                </code>
                                , completely skipping {12 - athenaQueryMonths} month partitions (
                                {(((12 - athenaQueryMonths) / 12) * 100).toFixed(0)}% directory skip).
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Comparison Card */}
                        <div className="p-3 rounded-lg bg-stone-900 text-stone-100 text-xs font-mono space-y-1">
                          <div className="text-orange-400 font-bold text-[11px]">Athena Optimization Rule:</div>
                          <p className="text-stone-300 text-[11px] font-sans">
                            Athena charges $5.00 per TB scanned. By partitioning by date and saving as Parquet, a company running 500 daily queries reduces monthly query spend from <strong>$7,500/mo</strong> down to <strong>$32/mo</strong>.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-stone-400 font-mono text-xs border border-dashed border-stone-200 rounded-xl bg-white">
                        Click "Execute Athena Query" to simulate scanning the S3 bucket.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 3: AWS Glue Data Catalog & PySpark ETL Simulator     */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "glue_etl" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 3
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      AWS Glue Data Catalog & Serverless PySpark ETL Simulator
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Experience the complete AWS Glue workflow: Crawl raw S3 objects to build schema metadata in the Glue Catalog, configure PySpark DPUs, and execute a serverless transformation pipeline into the curated Parquet zone.
                  </p>
                </div>

                {/* Step 1: Glue Crawler */}
                <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center font-mono">
                        1
                      </span>
                      <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                        AWS Glue Crawler: Discover Schema
                      </span>
                    </div>
                    <button
                      onClick={runGlueCrawler}
                      disabled={crawlerStatus === "crawling"}
                      className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      {crawlerStatus === "crawling" ? (
                        <>
                          <RefreshCw size={12} className="animate-spin" />
                          <span>Crawling s3://company-lake/raw/orders/...</span>
                        </>
                      ) : (
                        <>
                          <Play size={12} />
                          <span>Run Glue Crawler</span>
                        </>
                      )}
                    </button>
                  </div>

                  {discoveredSchema ? (
                    <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-stone-100 text-stone-700 font-semibold border-b border-stone-200">
                            <th className="py-2 px-3">Column Name</th>
                            <th className="py-2 px-3">Inferred Data Type</th>
                            <th className="py-2 px-3">Partition Key</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          {discoveredSchema.map((col) => (
                            <tr key={col.col} className="hover:bg-orange-50/30">
                              <td className="py-1.5 px-3 font-mono font-medium text-stone-900">{col.col}</td>
                              <td className="py-1.5 px-3 font-mono text-orange-600">{col.type}</td>
                              <td className="py-1.5 px-3 font-mono text-stone-600">
                                {col.partitionKey ? (
                                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                                    YES (Virtual)
                                  </span>
                                ) : (
                                  "No"
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="p-3 text-center text-xs text-stone-500 font-mono bg-white rounded-lg border border-dashed border-stone-200">
                      Glue Catalog Table <code className="text-orange-600 font-bold">ecommerce.orders</code> not yet created. Run crawler to discover schema.
                    </div>
                  )}
                </div>

                {/* Step 2 & 3: Configure & Run Glue PySpark Job */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="border border-stone-200 rounded-xl p-4 bg-white space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center font-mono">
                          2
                        </span>
                        <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                          Configure Glue Spark Job Workers
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] font-semibold text-stone-700 block mb-1">Worker Type</label>
                          <select
                            value={glueWorkerType}
                            onChange={(e) => setGlueWorkerType(e.target.value)}
                            className="w-full text-xs p-2 rounded-lg border border-stone-200 bg-stone-50 font-mono"
                          >
                            <option value="G.1X">G.1X (1 DPU = 4 vCPU, 16 GB)</option>
                            <option value="G.2X">G.2X (2 DPU = 8 vCPU, 32 GB)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                            Worker Count: {glueWorkerCount} DPUs
                          </label>
                          <input
                            type="range"
                            min="2"
                            max="10"
                            value={glueWorkerCount}
                            onChange={(e) => setGlueWorkerCount(parseInt(e.target.value))}
                            className="w-full accent-orange-600 mt-1"
                          />
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between text-xs font-mono">
                        <span className="text-stone-600">AWS Glue DPU-Hour Rate:</span>
                        <span className="font-bold text-stone-900">$0.44 / DPU-hr</span>
                      </div>
                      <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-between text-xs font-mono">
                        <span className="text-orange-900 font-semibold">Job Run Cost (est. ~3.5 min):</span>
                        <span className="font-bold text-orange-700">${glueCostCalc}</span>
                      </div>
                    </div>

                    <button
                      onClick={runGlueJob}
                      disabled={isGlueRunning || !discoveredSchema}
                      className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      {isGlueRunning ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Running Distributed Spark Transformation...</span>
                        </>
                      ) : (
                        <>
                          <Play size={14} />
                          <span>Run Serverless AWS Glue Job</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* PySpark Code & Pipeline Execution Stepper */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                      <div className="text-[10px] uppercase text-orange-400 font-bold flex items-center justify-between">
                        <span>Glue PySpark ETL Pipeline Script</span>
                        <span>Job: OrdersETLJob</span>
                      </div>
                      <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto [scrollbar-width:thin]">
                        {`# 1. Read from Glue Catalog
orders = spark.read.table("ecommerce.orders")

# 2. Filter completed orders only
clean_orders = orders.filter(col("order_status") == "completed")

# 3. Drop null records & deduplicate
clean_orders = clean_orders.filter(col("order_amount").isNotNull()).dropDuplicates(["order_id"])

# 4. Write partitioned Parquet to Curated Lake
clean_orders.write.mode("overwrite") \\
    .partitionBy("year", "month") \\
    .parquet("s3://company-lake/curated/orders/")`}
                      </pre>
                    </div>

                    {/* Step progress indicators */}
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <div className="text-xs font-bold text-stone-800">Job Execution Steps:</div>
                      {[
                        { step: 1, label: "Extract raw CSV via Glue Catalog metadata" },
                        { step: 2, label: "Transform: Filter status == 'completed'" },
                        { step: 3, label: "Transform: Drop null amounts & deduplicate keys" },
                        { step: 4, label: "Load: Write Snappy Parquet to s3://company-lake/curated/" }
                      ].map((st) => (
                        <div
                          key={st.step}
                          className={`flex items-center gap-2 text-xs p-2 rounded-lg font-mono transition-all ${
                            glueJobStep > st.step
                              ? "bg-emerald-50 text-emerald-800 font-semibold"
                              : glueJobStep === st.step
                              ? "bg-orange-100 text-orange-900 font-bold animate-pulse"
                              : "text-stone-400 bg-white"
                          }`}
                        >
                          {glueJobStep > st.step ? (
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-stone-300 flex items-center justify-center text-[10px] shrink-0">
                              {st.step}
                            </span>
                          )}
                          <span>{st.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 4: Amazon Redshift MPP Architecture Laboratory       */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "redshift_mpp" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 4
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Amazon Redshift MPP Cluster, Distribution & Sort Key Laboratory
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Inspect the internal Massively Parallel Processing (MPP) mechanics of Redshift. Test how KEY vs EVEN vs ALL distribution styles and Sort Keys eliminate network shuffle and disk scanning across compute node slices.
                  </p>
                </div>

                {/* Configuration Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="text-xs font-bold text-stone-800 block mb-1.5">Distribution Style (DISTSTYLE)</label>
                    <select
                      value={redshiftDistStyle}
                      onChange={(e) => setRedshiftDistStyle(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-stone-200 bg-white font-mono font-medium"
                    >
                      <option value="KEY">DISTSTYLE KEY (customer_id)</option>
                      <option value="EVEN">DISTSTYLE EVEN (Round Robin)</option>
                      <option value="ALL">DISTSTYLE ALL (Replicated to All Nodes)</option>
                    </select>
                    <span className="text-[10px] text-stone-500 mt-1 block">
                      {redshiftDistStyle === "KEY"
                        ? "Hashes join key to identical slice. Zero network broadcast!"
                        : redshiftDistStyle === "EVEN"
                        ? "Distributes rows evenly, requires heavy network shuffle during joins."
                        : "Copies entire table to every node. Best for small dimension lookups."}
                    </span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-800 block mb-1.5">Sort Key Strategy</label>
                    <select
                      value={redshiftSortKey}
                      onChange={(e) => setRedshiftSortKey(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-stone-200 bg-white font-mono font-medium"
                    >
                      <option value="COMPOUND">COMPOUND SORTKEY (order_date, customer_id)</option>
                      <option value="INTERLEAVED">INTERLEAVED SORTKEY (Multi-column balance)</option>
                      <option value="NONE">NO SORTKEY (Full 1MB Block Scan)</option>
                    </select>
                    <span className="text-[10px] text-stone-500 mt-1 block">
                      {redshiftSortKey === "COMPOUND"
                        ? "Hierarchical sorting, best for date-range range scans."
                        : redshiftSortKey === "INTERLEAVED"
                        ? "Equal weight across all columns, good for arbitrary ad-hoc filters."
                        : "Forces Redshift to scan all 1MB columnar disk blocks."}
                    </span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-800 block mb-1.5">
                      Cluster Compute Nodes: {clusterNodeCount} Nodes ({clusterNodeCount * 2} Slices)
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="4"
                      value={clusterNodeCount}
                      onChange={(e) => setClusterNodeCount(parseInt(e.target.value))}
                      className="w-full accent-orange-600 mt-2"
                    />
                    <button
                      onClick={executeRedshiftQuery}
                      disabled={redshiftSimRunning}
                      className="w-full mt-2 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {redshiftSimRunning ? (
                        <RefreshCw size={12} className="animate-spin" />
                      ) : (
                        <Play size={12} />
                      )}
                      <span>Run Distributed Join Query</span>
                    </button>
                  </div>
                </div>

                {/* Cluster Visualizer */}
                <div className="border border-stone-200 rounded-xl p-5 bg-white space-y-4">
                  <div className="text-xs font-mono font-bold text-stone-800 uppercase flex items-center justify-between">
                    <span>Redshift MPP Cluster Physical Topology</span>
                    <span className="text-orange-600">1 Leader Node + {clusterNodeCount} Compute Nodes</span>
                  </div>

                  {/* Leader Node */}
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-orange-600" />
                      <div>
                        <div className="text-xs font-bold text-orange-950 font-mono">Leader Node (Query Coordinator)</div>
                        <div className="text-[11px] text-orange-800">
                          Receives SQL query, compiles C++ execution plan, coordinates parallel dispatch
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-orange-700 border border-orange-200">
                      Client Endpoint :5439
                    </span>
                  </div>

                  {/* Compute Nodes & Slices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Array.from({ length: clusterNodeCount }).map((_, nIdx) => (
                      <div key={nIdx} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-stone-900 font-mono">
                          <span>Compute Node #{nIdx + 1}</span>
                          <span className="text-[10px] font-normal text-stone-500">ra3.xlplus</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 rounded bg-white border border-stone-200 text-center">
                            <div className="text-[10px] font-mono text-stone-400">Slice {nIdx * 2}</div>
                            <div className="text-xs font-bold font-mono text-orange-600 mt-0.5">
                              {redshiftDistStyle === "KEY" ? `Hash(cust) % ${clusterNodeCount*2} == ${nIdx*2}` : "Round-Robin"}
                            </div>
                          </div>
                          <div className="p-2 rounded bg-white border border-stone-200 text-center">
                            <div className="text-[10px] font-mono text-stone-400">Slice {nIdx * 2 + 1}</div>
                            <div className="text-xs font-bold font-mono text-orange-600 mt-0.5">
                              {redshiftDistStyle === "KEY" ? `Hash(cust) % ${clusterNodeCount*2} == ${nIdx*2+1}` : "Round-Robin"}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Query Telemetry Simulation Result */}
                {redshiftQueryResult && (
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                    <div className="text-orange-400 font-bold text-xs uppercase flex items-center justify-between">
                      <span>Query Execution Plan: 50M Orders ⋈ 2M Customers</span>
                      <span>Total Time: {redshiftQueryResult.executionSec}s</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-stone-300">
                      <div className="p-2.5 rounded bg-stone-800 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block uppercase">Interconnect Network</span>
                        <strong className="text-sm text-white">{redshiftQueryResult.networkBytesMB}</strong>
                      </div>
                      <div className="p-2.5 rounded bg-stone-800 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block uppercase">Shuffle Overhead</span>
                        <strong className="text-sm text-white">{redshiftQueryResult.shuffleOverhead}</strong>
                      </div>
                      <div className="p-2.5 rounded bg-stone-800 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block uppercase">Performance Bottleneck</span>
                        <strong className="text-sm text-white">{redshiftQueryResult.bottleneck}</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 5: Cross-Cloud Rosetta Stone (AWS vs Azure vs GCP)   */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "cross_cloud" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 5
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Cross-Cloud Rosetta Stone: AWS vs Microsoft Azure vs Google Cloud
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Master multi-cloud data engineering architectures. Compare equivalent services across AWS, Azure, and GCP, and toggle real-world end-to-end workload implementations.
                  </p>
                </div>

                {/* Workload Pattern Switcher */}
                <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
                  <span className="text-xs font-bold text-stone-800 mr-2">Workload Scenario:</span>
                  {[
                    { id: "lakehouse", label: "1. Modern Batch Lakehouse", desc: "S3 / ADLS / GCS + Spark + Cloud Warehouse" },
                    { id: "streaming", label: "2. Real-Time Streaming Ingestion", desc: "Kinesis / Event Hubs / PubSub + Flink / Dataflow" },
                    { id: "serverless", label: "3. Event-Driven Serverless ETL", desc: "Lambda / Azure Functions / Cloud Run" }
                  ].map((wl) => (
                    <button
                      key={wl.id}
                      onClick={() => setActiveCloudWorkload(wl.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeCloudWorkload === wl.id
                          ? "bg-orange-600 text-white shadow-sm"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {wl.label}
                    </button>
                  ))}
                </div>

                {/* Architecture Pipeline Comparison Across 3 Clouds */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* AWS */}
                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                    <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="font-bold text-xs text-stone-900 font-mono">Amazon Web Services (AWS)</span>
                    </div>
                    {activeCloudWorkload === "lakehouse" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Lake Storage:</span>
                          <strong>Amazon S3 (Curated Parquet)</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">ETL Processing:</span>
                          <strong>AWS Glue / Amazon EMR</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Analytics & Warehousing:</span>
                          <strong>Amazon Athena & Redshift</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Governance:</span>
                          <strong>AWS Glue Catalog & Lake Formation</strong>
                        </div>
                      </div>
                    )}
                    {activeCloudWorkload === "streaming" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Ingestion:</span>
                          <strong>Amazon Kinesis Data Streams</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Stream Processing:</span>
                          <strong>Managed Service for Apache Flink</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Serving & Storage:</span>
                          <strong>Amazon DynamoDB & OpenSearch</strong>
                        </div>
                      </div>
                    )}
                    {activeCloudWorkload === "serverless" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Event Trigger:</span>
                          <strong>S3 ObjectCreated Event</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Compute:</span>
                          <strong>AWS Lambda</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Orchestrator:</span>
                          <strong>AWS Step Functions</strong>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Azure */}
                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                    <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                      <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                      <span className="font-bold text-xs text-stone-900 font-mono">Microsoft Azure</span>
                    </div>
                    {activeCloudWorkload === "lakehouse" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Lake Storage:</span>
                          <strong>ADLS Gen2 / OneLake</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">ETL Processing:</span>
                          <strong>Azure Data Factory & Databricks</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Analytics & Warehousing:</span>
                          <strong>Fabric Warehouse / Synapse</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Governance:</span>
                          <strong>Microsoft Purview</strong>
                        </div>
                      </div>
                    )}
                    {activeCloudWorkload === "streaming" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Ingestion:</span>
                          <strong>Azure Event Hubs</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Stream Processing:</span>
                          <strong>Azure Stream Analytics / Databricks</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Serving & Storage:</span>
                          <strong>Azure Cosmos DB</strong>
                        </div>
                      </div>
                    )}
                    {activeCloudWorkload === "serverless" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Event Trigger:</span>
                          <strong>Azure Event Grid</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Compute:</span>
                          <strong>Azure Functions</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Orchestrator:</span>
                          <strong>Azure Logic Apps</strong>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* GCP */}
                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                    <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span className="font-bold text-xs text-stone-900 font-mono">Google Cloud (GCP)</span>
                    </div>
                    {activeCloudWorkload === "lakehouse" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Lake Storage:</span>
                          <strong>Google Cloud Storage (GCS)</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">ETL Processing:</span>
                          <strong>Cloud Dataflow / Dataproc</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Analytics & Warehousing:</span>
                          <strong>Google BigQuery & BigLake</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Governance:</span>
                          <strong>Dataplex Catalog</strong>
                        </div>
                      </div>
                    )}
                    {activeCloudWorkload === "streaming" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Ingestion:</span>
                          <strong>Google Cloud Pub/Sub</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Stream Processing:</span>
                          <strong>Cloud Dataflow (Apache Beam)</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Serving & Storage:</span>
                          <strong>Google Cloud Bigtable / Firestore</strong>
                        </div>
                      </div>
                    )}
                    {activeCloudWorkload === "serverless" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Event Trigger:</span>
                          <strong>Eventarc / GCS Trigger</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Compute:</span>
                          <strong>Cloud Run functions</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-stone-200">
                          <span className="text-[10px] text-stone-400 block">Orchestrator:</span>
                          <strong>Cloud Workflows</strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 13-Capability Rosetta Matrix */}
                <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-stone-100 text-stone-800 font-semibold border-b border-stone-200">
                        <th className="py-2.5 px-3 font-mono uppercase text-[11px]">Core Capability</th>
                        <th className="py-2.5 px-3 font-mono text-[11px] text-amber-700">AWS</th>
                        <th className="py-2.5 px-3 font-mono text-[11px] text-blue-700">Microsoft Azure</th>
                        <th className="py-2.5 px-3 font-mono text-[11px] text-emerald-700">Google Cloud</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono">
                      {rosettaMatrix.map((r, i) => (
                        <tr key={i} className="hover:bg-orange-50/20">
                          <td className="py-2 px-3 font-medium text-stone-900 font-sans">{r.cap}</td>
                          <td className="py-2 px-3 text-stone-700">{r.aws}</td>
                          <td className="py-2 px-3 text-stone-700">{r.azure}</td>
                          <td className="py-2 px-3 text-stone-700">{r.gcp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 6: IAM Least-Privilege Policy Linter & Quiz         */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "iam_linter_quiz" && (
              <div className="space-y-6">
                {/* Part A: IAM Least-Privilege Linter */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      SECURITY LAB
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      IAM Least-Privilege JSON Policy Linter
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Security in the cloud starts with Identity and Access Management. Test IAM JSON policies for principle of least-privilege violations, wildcard risks, and broad resource permissions.
                  </p>

                  {/* Preset Policies */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-bold text-stone-700">Load Test Policy:</span>
                    <button
                      onClick={() => {
                        setPolicyInput(samplePolicies.wildcard_danger);
                        lintPolicy(samplePolicies.wildcard_danger);
                      }}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
                    >
                      Wildcard Danger ("*")
                    </button>
                    <button
                      onClick={() => {
                        setPolicyInput(samplePolicies.broad_s3);
                        lintPolicy(samplePolicies.broad_s3);
                      }}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                    >
                      Broad S3 ("s3:*")
                    </button>
                    <button
                      onClick={() => {
                        setPolicyInput(samplePolicies.least_privilege);
                        lintPolicy(samplePolicies.least_privilege);
                      }}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                    >
                      Strict Least Privilege
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7 space-y-2">
                      <label className="text-xs font-mono font-bold text-stone-700 block">
                        IAM Policy JSON Document:
                      </label>
                      <textarea
                        rows={10}
                        value={policyInput}
                        onChange={(e) => setPolicyInput(e.target.value)}
                        className="w-full p-3 rounded-xl border border-stone-800 bg-stone-900 text-emerald-300 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 [scrollbar-width:thin]"
                      />
                      <button
                        onClick={() => lintPolicy(policyInput)}
                        className="py-2 px-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
                      >
                        <ShieldCheck size={14} />
                        <span>Run Least-Privilege Security Scan</span>
                      </button>
                    </div>

                    <div className="lg:col-span-5 border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                      <div className="text-xs font-mono font-bold text-stone-800 uppercase flex items-center justify-between">
                        <span>Security Audit Verdict</span>
                        {policyLintReport && (
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                              policyLintReport.score >= 80
                                ? "bg-emerald-100 text-emerald-800"
                                : policyLintReport.score >= 50
                                ? "bg-amber-100 text-amber-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            Score: {policyLintReport.score}/100
                          </span>
                        )}
                      </div>

                      {policyLintReport ? (
                        <div className="space-y-2">
                          {policyLintReport.issues.length === 0 ? (
                            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                              <span>Zero least-privilege violations detected. Policy adheres to AWS Well-Architected Security best practices!</span>
                            </div>
                          ) : (
                            policyLintReport.issues.map((iss, iIdx) => (
                              <div
                                key={iIdx}
                                className={`p-2.5 rounded-lg border text-xs flex items-start gap-2 ${
                                  iss.level === "critical"
                                    ? "bg-red-50 text-red-900 border-red-200"
                                    : iss.level === "warning"
                                    ? "bg-amber-50 text-amber-900 border-amber-200"
                                    : "bg-blue-50 text-blue-900 border-blue-200"
                                }`}
                              >
                                <AlertTriangle
                                  size={14}
                                  className={`shrink-0 mt-0.5 ${
                                    iss.level === "critical"
                                      ? "text-red-600"
                                      : iss.level === "warning"
                                      ? "text-amber-600"
                                      : "text-blue-600"
                                  }`}
                                />
                                <span className="leading-relaxed">{iss.msg}</span>
                              </div>
                            ))
                          )}
                        </div>
                      ) : (
                        <div className="p-6 text-center text-xs text-stone-500 font-mono bg-white rounded-lg border border-dashed border-stone-200">
                          Click "Run Least-Privilege Security Scan" to evaluate the policy.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Part B: 15-Question Curriculum Quiz */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                          EXAM READINESS
                        </span>
                        <h2 className="text-xl font-bold text-stone-900">
                          Module 18 Mastery Assessment (15 Questions)
                        </h2>
                      </div>
                      <p className="text-xs text-stone-600">
                        Test your real-world cloud engineering mastery across AWS, Azure, and GCP architectures.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {showQuizResults ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-stone-700">
                            Score: {quizScore} / {quizQuestions.length} ({((quizScore / quizQuestions.length) * 100).toFixed(0)}%)
                          </span>
                          <button
                            onClick={() => {
                              setShowQuizResults(false);
                              setQuizAnswers({});
                            }}
                            className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold hover:bg-stone-50"
                          >
                            Retake Quiz
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowQuizResults(true)}
                          disabled={Object.keys(quizAnswers).length === 0}
                          className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white font-bold text-xs transition-colors shadow"
                        >
                          Submit & View Explanations
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Question Cards */}
                  <div className="space-y-4">
                    {quizQuestions.map((q, qIdx) => {
                      const userChoice = quizAnswers[qIdx];
                      const isAnswered = userChoice !== undefined;
                      const isCorrect = isAnswered && userChoice === q.answer;

                      return (
                        <div
                          key={qIdx}
                          className={`p-4 rounded-xl border transition-all ${
                            showQuizResults
                              ? isCorrect
                                ? "bg-emerald-50/50 border-emerald-200"
                                : "bg-red-50/50 border-red-200"
                              : "bg-stone-50 border-stone-200"
                          }`}
                        >
                          <div className="flex items-start gap-2.5 mb-3">
                            <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <div className="font-semibold text-xs sm:text-sm text-stone-900 leading-snug">
                              {q.q}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-7">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userChoice === optIdx;
                              let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                              if (showQuizResults) {
                                if (optIdx === q.answer) {
                                  btnClass = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                                } else if (isSelected) {
                                  btnClass = "bg-red-100 border-red-300 text-red-900";
                                } else {
                                  btnClass = "bg-white border-stone-200 opacity-60";
                                }
                              } else if (isSelected) {
                                btnClass = "bg-orange-50 border-orange-500 text-orange-950 font-bold ring-1 ring-orange-500";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                                  className={`p-2.5 rounded-lg border text-left text-xs leading-relaxed transition-all flex items-start gap-2 ${btnClass}`}
                                >
                                  <span className="font-mono text-[10px] text-stone-400 shrink-0 mt-0.5">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {showQuizResults && (
                            <div className="mt-3 ml-7 p-3 rounded-lg bg-white border border-stone-200 text-xs text-stone-700 space-y-1">
                              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                                {isCorrect ? (
                                  <CheckCircle2 size={14} className="text-emerald-600" />
                                ) : (
                                  <AlertTriangle size={14} className="text-red-600" />
                                )}
                                <span>Explanation</span>
                              </div>
                              <p className="leading-relaxed text-stone-600 text-[11px]">{q.exp}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
