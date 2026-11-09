// projectx/src/Componets/DataEngineeringDataProducts.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Zap,
  ShieldAlert,
  ShieldCheck,
  CheckCircle,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Terminal,
  BookOpen,
  Cpu,
  Layers,
  Database,
  Sliders,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Server,
  Cloud,
  FileSpreadsheet,
  AlertOctagon,
  Eye,
  SlidersHorizontal,
  Code2,
  HardDrive,
  Gauge,
  Clock,
  ArrowRight,
  ArrowLeft,
  Filter,
  Search,
  CheckSquare,
  Square,
  Share2,
  Network,
  Binary,
  Bot,
  Lock,
  Unlock,
  GitBranch,
  Split
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import { DataProductsSection, dataProductsSectionsMeta } from "./DataEngineeringDataProductsSections";

export default function DataEngineeringDataProducts() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("data_contract_validator");
  // 'data_contract_validator' | 'data_mesh_simulator' | 'cache_aside_latency_lab' | 'feature_store_skew_analyzer' | 'point_in_time_asof_lab' | 'rag_vector_search_workbench'

  // Curriculum section state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // WORKBENCH 1: Data Contract & Schema Validator State
  const [contractScenario, setContractScenario] = useState("valid"); // 'valid' | 'null_pk' | 'type_mismatch' | 'stale_sla' | 'negative_val'
  const [contractBatchSize, setContractBatchSize] = useState(1000);

  const contractValidationResult = useMemo(() => {
    switch (contractScenario) {
      case "null_pk":
        return {
          status: "REJECTED",
          passed: false,
          errorCount: 42,
          rule: "customer_id_not_null",
          message: "Critical violation: Column 'customer_id' contains NULL values in 42 records.",
          dlqRoute: "dlq.customer_360.schema_violations",
          processedRecords: contractBatchSize - 42,
          freshnessLagMinutes: 4
        };
      case "type_mismatch":
        return {
          status: "REJECTED",
          passed: false,
          errorCount: 120,
          rule: "lifetime_value_type_check",
          message: "Type error: Column 'lifetime_value' expected DECIMAL(12,2) but received STRING with currency symbols.",
          dlqRoute: "dlq.customer_360.type_errors",
          processedRecords: contractBatchSize - 120,
          freshnessLagMinutes: 7
        };
      case "stale_sla":
        return {
          status: "SLA_BREACH",
          passed: false,
          errorCount: 1,
          rule: "freshness_sla_15_minutes",
          message: "SLA Breach: Batch watermark lag is 74 minutes (Contract Max: 15 minutes). Alert dispatched to PagerDuty.",
          dlqRoute: "staging.customer_360.quarantine",
          processedRecords: contractBatchSize,
          freshnessLagMinutes: 74
        };
      case "negative_val":
        return {
          status: "REJECTED",
          passed: false,
          errorCount: 18,
          rule: "lifetime_value_positive",
          message: "Semantic error: 'lifetime_value' must be non-negative. 18 rows contained negative numbers.",
          dlqRoute: "dlq.customer_360.semantic_rules",
          processedRecords: contractBatchSize - 18,
          freshnessLagMinutes: 8
        };
      case "valid":
      default:
        return {
          status: "PASSED",
          passed: true,
          errorCount: 0,
          rule: "all_checks_passed",
          message: "Data contract fully validated: Schemas, nullability, freshness SLA (<15m), and semantic bounds verified.",
          dlqRoute: "N/A (Published to Production Mesh)",
          processedRecords: contractBatchSize,
          freshnessLagMinutes: 6
        };
    }
  }, [contractScenario, contractBatchSize]);

  // WORKBENCH 2: Data Mesh Domain Topology Simulator
  const [meshArchitectureMode, setMeshArchitectureMode] = useState("mesh"); // 'centralized' | 'mesh'
  const [monthlyChangeRequests, setMonthlyChangeRequests] = useState(60);
  const [platformAutomationLevel, setPlatformAutomationLevel] = useState("high"); // 'low' | 'medium' | 'high'

  const meshMetrics = useMemo(() => {
    if (meshArchitectureMode === "centralized") {
      const queueDays = (monthlyChangeRequests * 0.35).toFixed(1);
      const autonomyScore = 22;
      const bottleneckTeam = "Central Data Engineering (Overloaded)";
      const governanceType = "Manual PR reviews & Spreadsheet Audits";
      return { queueDays, autonomyScore, bottleneckTeam, governanceType, scalingCost: "$420,000 / yr" };
    } else {
      const autoFactor = platformAutomationLevel === "high" ? 0.05 : platformAutomationLevel === "medium" ? 0.12 : 0.25;
      const queueDays = (monthlyChangeRequests * autoFactor).toFixed(1);
      const autonomyScore = 94;
      const bottleneckTeam = "None (Domain Self-Serve Publishing)";
      const governanceType = "Federated Computational Policies (Automated)";
      return { queueDays, autonomyScore, bottleneckTeam, governanceType, scalingCost: "$165,000 / yr" };
    }
  }, [meshArchitectureMode, monthlyChangeRequests, platformAutomationLevel]);

  // WORKBENCH 3: Data Serving & Redis Cache-Aside Latency Lab
  const [cacheHitRatePct, setCacheHitRatePct] = useState(92);
  const [apiConcurrencyRpm, setApiConcurrencyRpm] = useState(25000);
  const [cacheTTLSeconds, setCacheTTLSeconds] = useState(300);
  const [isCacheInvalidated, setIsCacheInvalidated] = useState(false);

  const effectiveHitRate = isCacheInvalidated ? 0 : cacheHitRatePct;
  const cacheMetrics = useMemo(() => {
    const warehouseLatencyMs = 820;
    const redisLatencyMs = 4.2;
    const avgLatency = ((effectiveHitRate / 100) * redisLatencyMs + ((100 - effectiveHitRate) / 100) * warehouseLatencyMs).toFixed(1);
    const warehouseQueriesPerMin = Math.round(apiConcurrencyRpm * ((100 - effectiveHitRate) / 100));
    const monthlyWarehouseCost = Math.round((warehouseQueriesPerMin * 60 * 24 * 30 * 0.00008) + 850);
    const monthlyRedisCost = 140;
    const loadOffloadPct = effectiveHitRate;

    return { avgLatency, warehouseQueriesPerMin, monthlyWarehouseCost, monthlyRedisCost, loadOffloadPct };
  }, [effectiveHitRate, apiConcurrencyRpm]);

  // WORKBENCH 4: Feature Store & Training-Serving Skew Analyzer
  const [skewScenario, setSkewScenario] = useState("none"); // 'none' | 'formula_mismatch' | 'imputation_mismatch' | 'timestamp_lag'
  const skewAnalysis = useMemo(() => {
    switch (skewScenario) {
      case "formula_mismatch":
        return {
          title: "Formula / Transformation Logic Divergence",
          offlineFormula: "average_order_value = total_spend / order_count",
          onlineFormula: "average_order_value = total_spend  (Raw unnormalized)",
          psiScore: 0.48,
          modelAccuracy: "41.2% (Severe Degradation)",
          alertLevel: "CRITICAL",
          recommendation: "Standardize feature logic via Feast FeatureView python definition deployed to both environments."
        };
      case "imputation_mismatch":
        return {
          title: "Missing Value Imputation Divergence",
          offlineFormula: "customer_tenure = fillna(median_days = 245)",
          onlineFormula: "customer_tenure = fillna(0)  (Defaults to Zero)",
          psiScore: 0.31,
          modelAccuracy: "62.5% (Moderate Degradation)",
          alertLevel: "HIGH",
          recommendation: "Store transformation pipeline artifacts and preprocessing stats in the Feature Store schema metadata."
        };
      case "timestamp_lag":
        return {
          title: "Feature Staleness & Synchronization Lag",
          offlineFormula: "Historical snapshot synced at T_event (Fresh)",
          onlineFormula: "Redis key-value TTL expired; replication delayed by 36 hours",
          psiScore: 0.22,
          modelAccuracy: "74.0% (Minor Degradation)",
          alertLevel: "MEDIUM",
          recommendation: "Implement real-time feature streaming via Kafka into the online store with freshness alerts."
        };
      case "none":
      default:
        return {
          title: "Identical Transformations (Zero Skew)",
          offlineFormula: "Feast FeatureView: customer_features v1.2",
          onlineFormula: "Feast Online Client: customer_features v1.2",
          psiScore: 0.03,
          modelAccuracy: "94.8% (Target Performance)",
          alertLevel: "HEALTHY",
          recommendation: "Shared feature definition verified between batch training and real-time inference microservice."
        };
    }
  }, [skewScenario]);

  // WORKBENCH 5: Point-in-Time Correctness & AS-OF Join Simulator
  const [asOfJoinMode, setAsOfJoinMode] = useState("point_in_time"); // 'leaky' | 'point_in_time'

  const asOfCustomerData = useMemo(() => {
    const predictionDate = "2026-11-01";
    if (asOfJoinMode === "leaky") {
      return {
        customer_id: 101,
        prediction_date: predictionDate,
        total_spend: 3200,
        support_tickets: 3,
        cancellation_requested: "TRUE (Event date: 2026-11-05)",
        refund_processed: "TRUE (Event date: 2026-11-12)",
        churn_risk_prediction: "100.0% (Artificially perfect)",
        training_accuracy: "99.8% (Fraudulent / Leaky)",
        production_accuracy: "48.2% (Severe Failure in Production)",
        leakageStatus: "CRITICAL LEAKAGE: Model used future events that occurred AFTER prediction date!"
      };
    } else {
      return {
        customer_id: 101,
        prediction_date: predictionDate,
        total_spend: 1200,
        support_tickets: 1,
        cancellation_requested: "FALSE (Unknown on 2026-11-01)",
        refund_processed: "FALSE (Unknown on 2026-11-01)",
        churn_risk_prediction: "78.4% (Genuine Churn Signal)",
        training_accuracy: "86.5% (Realistic Benchmark)",
        production_accuracy: "85.8% (Stable Generalization)",
        leakageStatus: "POINT-IN-TIME VERIFIED: Only records with timestamp <= 2026-11-01 joined."
      };
    }
  }, [asOfJoinMode]);

  // WORKBENCH 6: RAG Vector Search & Cosine Similarity Calculator + 15Q Quiz
  const [selectedRAGQuery, setSelectedRAGQuery] = useState("How do I optimize Spark shuffle partitions?");
  const [ragUserRole, setRagUserRole] = useState("engineer"); // 'guest' | 'engineer' | 'executive'
  const [ragTopK, setRagTopK] = useState(3);
  const [ragSimilarityThreshold, setRagSimilarityThreshold] = useState(0.65);

  const ragCorpus = useMemo(() => [
    {
      id: "chunk_spark_opt",
      title: "Apache Spark Shuffle & Partition Tuning",
      text: "Spark performance bottleneck can be resolved by adjusting spark.sql.shuffle.partitions to 2-3x available CPU cores and using AQE skew join handling.",
      category: "Big Data",
      requiredRole: "guest",
      embeddingVector: [0.88, 0.42, 0.15, -0.22]
    },
    {
      id: "chunk_mesh_arch",
      title: "Data Mesh Decentralized Domains",
      text: "Data Mesh establishes domain-oriented ownership where business teams publish data products governed by federated computational policies.",
      category: "Architecture",
      requiredRole: "guest",
      embeddingVector: [0.12, 0.91, 0.38, 0.05]
    },
    {
      id: "chunk_feature_store",
      title: "Feature Store & Point-in-Time Joins",
      text: "Offline feature stores use point-in-time correct AS-OF joins to prevent data leakage from future events during ML model training.",
      category: "Machine Learning",
      requiredRole: "engineer",
      embeddingVector: [0.35, 0.22, 0.89, -0.18]
    },
    {
      id: "chunk_redis_cache",
      title: "Redis Cache-Aside Data API Architecture",
      text: "The Cache-Aside pattern loads operational data into Redis with TTL to protect analytical data warehouses from high API read concurrency.",
      category: "Serving",
      requiredRole: "guest",
      embeddingVector: [0.24, 0.45, 0.12, 0.85]
    },
    {
      id: "chunk_reverse_etl",
      title: "Reverse ETL & Operational Activation",
      text: "Reverse ETL synchronizes curated churn risk scores and customer lifetime value from Snowflake directly into Salesforce CRM.",
      category: "Integration",
      requiredRole: "engineer",
      embeddingVector: [0.42, 0.76, 0.49, 0.08]
    },
    {
      id: "chunk_fin_confidential",
      title: "Enterprise Executive Financial Projections",
      text: "Confidential EBITDA growth models and Q4 budget allocation figures for board review and executive planning.",
      category: "Finance",
      requiredRole: "executive",
      embeddingVector: [-0.15, 0.32, -0.45, 0.82]
    }
  ], []);

  // Compute cosine similarity against selected query
  const queryEmbeddings = {
    "How do I optimize Spark shuffle partitions?": [0.89, 0.40, 0.12, -0.25],
    "What is Data Mesh and domain ownership?": [0.10, 0.94, 0.35, 0.02],
    "How to prevent ML data leakage with AS-OF joins?": [0.32, 0.20, 0.92, -0.15],
    "How does Redis caching protect data warehouses?": [0.21, 0.42, 0.15, 0.88],
    "Show me confidential executive quarterly budgets": [-0.12, 0.30, -0.42, 0.85]
  };

  const ragSearchResults = useMemo(() => {
    const qVec = queryEmbeddings[selectedRAGQuery] || [0.5, 0.5, 0.5, 0.5];
    
    return ragCorpus.map((chunk) => {
      // Calculate dot product and norms
      let dot = 0, normA = 0, normB = 0;
      for (let i = 0; i < 4; i++) {
        dot += qVec[i] * chunk.embeddingVector[i];
        normA += qVec[i] * qVec[i];
        normB += chunk.embeddingVector[i] * chunk.embeddingVector[i];
      }
      const similarity = dot / (Math.sqrt(normA) * Math.sqrt(normB));

      // RBAC check
      let hasAccess = false;
      if (ragUserRole === "executive") hasAccess = true;
      else if (ragUserRole === "engineer" && (chunk.requiredRole === "guest" || chunk.requiredRole === "engineer")) hasAccess = true;
      else if (ragUserRole === "guest" && chunk.requiredRole === "guest") hasAccess = true;

      return {
        ...chunk,
        similarity: parseFloat(similarity.toFixed(3)),
        hasAccess,
        matchesThreshold: similarity >= ragSimilarityThreshold
      };
    })
    .sort((a, b) => b.similarity - a.similarity);
  }, [selectedRAGQuery, ragUserRole, ragSimilarityThreshold, ragCorpus]);

  // 15-Question Curriculum Quiz State
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary difference between a raw database table and a Data Product?",
      options: [
        "A data product is a managed, curated data asset designed with explicit ownership, documented contracts, guaranteed SLAs, quality rules, and consumer usability in mind",
        "A raw database table is stored on NVMe drives, while a data product is only stored in memory",
        "A data product can only be queried through Microsoft Excel, whereas a raw database table requires SQL",
        "There is no difference; the terms are completely interchangeable in modern cloud data warehouses"
      ],
      answer: 0,
      explanation: "A raw table is simply stored data that often lacks documentation, ownership, or SLA guarantees. A data product is treated as an end-user product with a designated owner, data contracts, automated quality checks, defined freshness SLAs, discoverability in catalogs, and seamless consumer interfaces."
    },
    {
      id: 2,
      question: "Which of the following correctly enumerates the four fundamental principles of Data Mesh formulated by Zhamak Dehghani?",
      options: [
        "Domain-Oriented Ownership, Data as a Product, Self-Service Data Platform, and Federated Computational Governance",
        "Centralized Monolith, Batch Extraction, SQL-Only Modeling, and Manual Quality Auditing",
        "Hadoop Storage, MapReduce Compute, Hive Metastore, and Kerberos Authentication",
        "Microservices, Docker Containers, Kubernetes Pods, and Service Mesh Sidecars"
      ],
      answer: 0,
      explanation: "Data Mesh decentralizes analytical data management across four pillars: 1) Domain-oriented decentralized data ownership, 2) Data as a product, 3) Self-serve data infrastructure as a platform, and 4) Federated computational governance."
    },
    {
      id: 3,
      question: "What is the primary operational purpose of a Data Contract in an enterprise data architecture?",
      options: [
        "To establish an explicit, versioned agreement between data producers and consumers defining schema types, semantics, quality rules, and freshness SLAs",
        "To legally copyright datasets so external cloud providers cannot train public models on them",
        "To encrypt all relational database tables using proprietary hardware security modules",
        "To bill internal department teams hourly for running ad-hoc SQL queries"
      ],
      answer: 0,
      explanation: "Data contracts prevent upstream schema changes or semantic drift from silently breaking downstream analytics and machine learning pipelines by enforcing schema constraints, nullability, uniqueness tests, and service level agreements at ingestion."
    },
    {
      id: 4,
      question: "How does an Analytical Data Mart differ from an Enterprise Data Warehouse (EDW)?",
      options: [
        "A data mart is a subject-oriented, curated subset of data tailored for a specific department (e.g. Sales, Finance) to simplify querying and improve performance",
        "A data mart is completely uncompressed text, whereas an EDW always uses columnar compression",
        "A data mart can only hold real-time sensor streams, whereas an EDW only holds financial records",
        "A data mart must be hosted on-premise, while an EDW must run in public cloud object storage"
      ],
      answer: 0,
      explanation: "While an enterprise data warehouse contains cross-functional data across the entire organization, a data mart focuses on a single department or business line (like Sales or Marketing), often structured as a star or snowflake schema with curated dimensions and facts."
    },
    {
      id: 5,
      question: "Why do modern data platforms implement a Semantic Layer (such as dbt Semantic Layer or Cube)?",
      options: [
        "To centralize business metric definitions, dimensions, and join logic so all downstream BI tools and AI applications report consistent, verified numbers",
        "To translate English text directly into binary assembly code for faster GPU execution",
        "To replace all relational databases with NoSQL document stores",
        "To automatically generate HTML user interfaces without writing CSS or React code"
      ],
      answer: 0,
      explanation: "Without a semantic layer, different departments frequently define the same metric (e.g., 'Gross Revenue' or 'Active Customer') using conflicting SQL formulas across disparate BI tools. A semantic layer creates a single source of truth for business logic."
    },
    {
      id: 6,
      question: "Which of the following scenarios is an example of an OLAP workload rather than an OLTP workload?",
      options: [
        "Aggregating 500 million transaction records to calculate regional quarterly revenue and year-over-year growth",
        "Inserting a single row into an e-commerce order table when a customer clicks 'Purchase'",
        "Updating the available inventory count for a specific SKU from 42 to 41 during checkout",
        "Looking up a customer's hashed password and session token during user login"
      ],
      answer: 0,
      explanation: "OLTP systems handle high-frequency, low-latency point lookups, inserts, and updates for individual transactions. OLAP systems scan millions or billions of rows to perform complex aggregations, groupings, and historical trend analysis."
    },
    {
      id: 7,
      question: "When serving warehouse data to high-concurrency client applications via a REST Data API, why is direct warehouse querying avoided?",
      options: [
        "Analytical warehouses are optimized for large batch scans and incur high query costs and concurrency limits, whereas APIs require sub-50ms latency under thousands of requests/sec",
        "REST APIs cannot parse SQL query results under any circumstances",
        "Analytical warehouses do not support TCP/IP network connections",
        "Direct warehouse queries automatically corrupt database transaction logs during concurrent reads"
      ],
      answer: 0,
      explanation: "Data warehouses (e.g. Snowflake, BigQuery, Redshift) are built for heavy OLAP throughput, not thousands of concurrent sub-50ms API hits. Serving layers typically use in-memory caches (Redis) or low-latency operational databases (Postgres, DynamoDB) in front of the warehouse."
    },
    {
      id: 8,
      question: "In the Cache-Aside pattern with Redis, what happens during a cache miss?",
      options: [
        "The application queries the underlying database, sets the retrieved data into the cache with an expiration (TTL), and returns the data to the client",
        "The application returns an HTTP 500 server error and prompts the user to refresh the page",
        "The database immediately drops all indexes and triggers a full cluster failover",
        "The Redis instance automatically deletes all keys across all tenant databases"
      ],
      answer: 0,
      explanation: "In cache-aside, the application first checks the cache. On a hit, it returns cached data immediately. On a miss, it fetches data from the database, writes the result to the cache for future requests (often with a TTL), and returns it to the consumer."
    },
    {
      id: 9,
      question: "What is Reverse ETL, and why is it increasingly critical in modern data platforms?",
      options: [
        "It synchronizes curated, transformed analytical data and model scores from the warehouse back into operational business tools (e.g. Salesforce, HubSpot, Zendesk)",
        "It decompiles compiled Spark binaries back into original Python source code",
        "It restores raw source databases from deleted S3 glacier cold backup archives",
        "It permanently reverses table schemas from third normal form back into flat CSV files"
      ],
      answer: 0,
      explanation: "Traditional ETL moves operational data into the analytical warehouse. Reverse ETL activates that data by pushing analytical insights (such as customer churn scores, lifetime value, or product recommendation tags) directly into operational SaaS tools where sales and support teams work."
    },
    {
      id: 10,
      question: "For which of the following analytical workloads is a Graph Database (like Neo4j) significantly superior to a standard relational database?",
      options: [
        "Multi-hop relationship traversals (e.g., detecting fraud rings across 6 degrees of shared bank accounts, phone numbers, and IP addresses)",
        "Generating monthly payroll summary reports sorted alphabetically by employee ID",
        "Storing cold raw log archives in compressed Parquet files for compliance audits",
        "High-throughput sequential append-only time-series logging from weather sensors"
      ],
      answer: 0,
      explanation: "Relational databases require expensive recursive multi-table JOIN operations that degrade exponentially as graph depth increases. Graph databases store relationships as direct index-free adjacency pointers, enabling rapid multi-hop path traversals."
    },
    {
      id: 11,
      question: "According to the CAP Theorem, what fundamental trade-off must a distributed database make during an active network partition (P)?",
      options: [
        "The system must choose between Consistency (returning an error rather than stale data) and Availability (returning available responses that may be slightly stale)",
        "The system must choose between ACID compliance and SQL query syntax",
        "The system must choose between using CPU cores and using RAM modules",
        "The system must permanently shut down all storage nodes until the network is replaced"
      ],
      answer: 0,
      explanation: "When network communication between nodes breaks (partition), a distributed system cannot guarantee both CAP Consistency (all nodes see the exact same data simultaneously) and CAP Availability (every request receives a non-error response)."
    },
    {
      id: 12,
      question: "What is the primary role of an Online Feature Store (such as Redis or DynamoDB in Feast) in machine learning infrastructure?",
      options: [
        "To provide ultra-low latency (single-digit millisecond) key-value feature retrieval for real-time model inference services",
        "To store petabytes of historical features across multiple years for training deep neural networks",
        "To automatically generate clean training labels without human supervision",
        "To compile PyTorch models into mobile iOS binaries"
      ],
      answer: 0,
      explanation: "Machine learning systems use offline stores (BigQuery, Snowflake, Parquet) for historical feature generation during batch model training, but require an online store (Redis, DynamoDB) to fetch current feature vectors in under 10ms during live inference."
    },
    {
      id: 13,
      question: "What is Training-Serving Skew in machine learning data engineering, and how is it prevented?",
      options: [
        "A discrepancy between features calculated for offline training vs online inference; prevented by sharing feature definitions and transformation logic in a unified feature store",
        "A physical hardware temperature difference between training GPUs and inference CPUs",
        "A mismatch in the font size used between the Jupyter Notebook and the production dashboard",
        "An error caused when a training pipeline finishes earlier than the nightly Airflow DAG"
      ],
      answer: 0,
      explanation: "Training-serving skew occurs when offline training features are computed differently from real-time inference features (e.g., using different imputations, transformations, or time windows). A feature store ensures identical transformation logic is reused in both environments."
    },
    {
      id: 14,
      question: "Why is 'Point-in-Time Correctness' (AS-OF joins) mandatory when building historical training datasets for machine learning models?",
      options: [
        "To prevent data leakage by ensuring feature values reflect only information that was actually known at the exact timestamp of the prediction event",
        "To ensure all datetime columns are converted into Greenwich Mean Time (GMT)",
        "To speed up SQL queries by only querying records created on the first day of each month",
        "To prevent duplicate primary keys in MongoDB collections"
      ],
      answer: 0,
      explanation: "If a churn prediction model predicts whether a user will cancel on Nov 1st, including a support ticket filed on Nov 3rd or a cancellation event on Nov 5th causes severe data leakage. The model appears to have 99% accuracy in tests but completely fails in production."
    },
    {
      id: 15,
      question: "In a Retrieval-Augmented Generation (RAG) ingestion pipeline, why is incremental index refreshing preferred over full re-indexing for large enterprise document sets?",
      options: [
        "Incremental refreshing only parses, chunks, and embeds newly created or modified documents, dramatically reducing API embedding costs and pipeline processing time",
        "Full re-indexing is cryptographically prohibited by vector database specifications",
        "Incremental indexing eliminates the need for vector embeddings and uses BM25 keyword matching instead",
        "Vector databases can only accept documents once in their lifetime without being deleted and recreated"
      ],
      answer: 0,
      explanation: "Re-embedding millions of documents every day is prohibitively expensive and slow. Incremental refresh tracks document hashes and version metadata, regenerating embeddings and updating vector indexes only for modified or newly published files while purging obsolete chunks."
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

  // Filtered curriculum sections
  const filteredSections = useMemo(() => {
    return dataProductsSectionsMeta.filter((sec) => {
      const matchesSearch = sec.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === "All" || sec.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const set = new Set(dataProductsSectionsMeta.map((s) => s.category));
    return ["All", ...Array.from(set)];
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans">
      {/* Universal Module Navigation Header */}
      <ModuleNav currentCourseId="data-engineering" currentModuleId="data-products-ai-serving" />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Module Header Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                  Data Engineering · Module 22
                </span>
                <span className="text-xs font-mono text-stone-500">
                  Part 1–9 · 30 Blueprint Sections · 6 Interactive Workbenches
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Data Products, Serving Architectures and AI Data Engineering
              </h1>
              <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
                Transform processed lakehouse data into high-value data products. Master Data Mesh decentralized domain ownership, analytical data marts, semantic layers, REST Data APIs, Redis caching, Reverse ETL, ML feature stores, point-in-time correct joins, and RAG vector ingestion pipelines.
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-xl border border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-100 hover:border-stone-400 transition-colors shadow-sm"
            >
              <ArrowLeft size={14} /> Back to Catalog
            </button>
          </div>

          {/* Primary View Switcher: Curriculum vs Workbenches */}
          <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200/60"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className="text-orange-600" />
                <span>Specification & Blueprints (30 Sections)</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200/60"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sparkles size={14} className="text-orange-600" />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>

            <div className="text-xs text-stone-500 font-mono">
              Status: <span className="text-emerald-700 font-semibold">100% Textbook Depth Verbatim</span>
            </div>
          </div>
        </div>

        {/* VIEW 1: SPECIFICATION & BLUEPRINTS (CURRICULUM) */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sidebar Syllabus Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-4 sticky top-6 max-h-[85vh] flex flex-col">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-semibold text-stone-700">
                  <span className="flex items-center gap-1.5">
                    <Layers size={13} className="text-orange-600" />
                    <span>Curriculum Syllabus</span>
                  </span>
                  <span className="text-[11px] text-stone-600">30 Sections</span>
                </div>

                {/* Search in Syllabus */}
                <div className="relative">
                  <Search size={13} className="absolute left-2.5 top-2.5 text-stone-600" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search sections..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-orange-500 font-mono bg-stone-50"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 [scrollbar-width:none]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md whitespace-nowrap transition-colors ${
                        selectedCategory === cat
                          ? "bg-orange-600 text-white font-semibold"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Section Items */}
              <div className="flex-1 overflow-y-auto space-y-1 pr-1 [scrollbar-width:thin]">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                      activeSectionId === sec.id
                        ? "bg-orange-50 border border-orange-200 text-orange-950 font-semibold shadow-xs"
                        : "hover:bg-stone-50 border border-transparent text-stone-700"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono mt-0.5 px-1.5 py-0.5 rounded ${
                        activeSectionId === sec.id
                          ? "bg-orange-200 text-orange-900 font-bold"
                          : "bg-stone-100 text-stone-500 font-medium"
                      }`}
                    >
                      {sec.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-stone-900 leading-tight">{sec.title}</p>
                      <span className="text-[10px] text-stone-500 block truncate font-mono mt-0.5">
                        {sec.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <DataProductsSection sectionId={activeSectionId} />

              {/* Bottom Pagination Controls */}
              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-mono">
                <button
                  disabled={activeSectionId === 0}
                  onClick={() => setActiveSectionId((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft size={13} /> Previous Section
                </button>
                <span className="text-stone-500">
                  Section {activeSectionId + 1} of {dataProductsSectionsMeta.length}
                </span>
                <button
                  disabled={activeSectionId === dataProductsSectionsMeta.length - 1}
                  onClick={() => setActiveSectionId((prev) => Math.min(dataProductsSectionsMeta.length - 1, prev + 1))}
                  className="px-3.5 py-2 rounded-xl border border-stone-200 bg-orange-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors flex items-center gap-1.5"
                >
                  Next Section <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: INTERACTIVE WORKBENCHES (6 APPS) */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Selector Tab Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
              <button
                onClick={() => setActiveWorkbench("data_contract_validator")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "data_contract_validator"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <FileSpreadsheet size={14} />
                <span>1. Data Contract & Schema Validator</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("data_mesh_simulator")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "data_mesh_simulator"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Network size={14} />
                <span>2. Data Mesh Domain Simulator</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("cache_aside_latency_lab")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "cache_aside_latency_lab"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Gauge size={14} />
                <span>3. Data API & Redis Caching Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("feature_store_skew_analyzer")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "feature_store_skew_analyzer"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Split size={14} />
                <span>4. Feature Store & Skew Analyzer</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("point_in_time_asof_lab")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "point_in_time_asof_lab"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Clock size={14} />
                <span>5. Point-in-Time AS-OF Join Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("rag_vector_search_workbench")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "rag_vector_search_workbench"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Bot size={14} />
                <span>6. RAG Vector Search & 15Q Quiz</span>
              </button>
            </div>

            {/* ================================================================ */}
            {/* WORKBENCH 1: Data Contract & Schema Validator                    */}
            {/* ================================================================ */}
            {activeWorkbench === "data_contract_validator" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <FileSpreadsheet className="text-orange-600" size={18} />
                    Data Product Contract & Automated Schema Gatekeeper
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate upstream ingestion payloads against a published Data Contract. Observe automated gatekeeper decisions: Validating schemas, nullability constraints, and freshness SLAs before publishing to the enterprise data mesh.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Contract Definition Card */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-stone-700 font-semibold border-b border-stone-200 pb-2">
                      <span>DATA CONTRACT: customer_360 (v1.4)</span>
                      <span className="text-emerald-700 font-bold">STATUS: ACTIVE</span>
                    </div>

                    <div className="space-y-1 text-stone-600 text-[11px]">
                      <p><span className="text-orange-600 font-bold">Owner:</span> domain_customer_team@corp.io</p>
                      <p><span className="text-orange-600 font-bold">Freshness SLA:</span> &lt;= 15 minutes</p>
                      <p><span className="text-orange-600 font-bold">Availability Target:</span> 99.9% uptime</p>
                    </div>

                    <div className="mt-3 p-3 rounded-lg bg-neutral-900 text-neutral-200 font-mono text-[11px] leading-relaxed overflow-x-auto border border-neutral-800">
                      <pre>{`schema:
  customer_id:      { type: integer, nullable: false, unique: true }
  customer_name:    { type: string,  nullable: false }
  lifetime_value:   { type: decimal, nullable: false, min: 0.00 }
  purchase_count:   { type: integer, nullable: false, min: 0 }
  updated_at:       { type: timestamp, nullable: false }
quality_checks:
  - assert: "customer_id IS NOT NULL"
  - assert: "lifetime_value >= 0"
  - assert: "MAX(updated_at) >= NOW() - INTERVAL '15 minutes'"`}</pre>
                    </div>
                  </div>

                  {/* Test Ingestion Batch Controls */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider">
                      Simulate Ingestion Batch
                    </h4>

                    <div className="space-y-2">
                      <label className="text-xs text-stone-600 font-medium block">
                        Select Ingestion Payload Scenario:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        {[
                          { id: "valid", label: "Clean Valid Batch" },
                          { id: "null_pk", label: "Null Customer IDs" },
                          { id: "type_mismatch", label: "LTV Type Mismatch" },
                          { id: "stale_sla", label: "74m Stale SLA Breach" },
                          { id: "negative_val", label: "Negative LTV Values" }
                        ].map((sc) => (
                          <button
                            key={sc.id}
                            onClick={() => setContractScenario(sc.id)}
                            className={`p-2 rounded-lg text-left border transition-all ${
                              contractScenario === sc.id
                                ? "bg-orange-600 text-white border-orange-600 font-semibold"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            {sc.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-stone-600 font-medium block mb-1">
                        Batch Size: {contractBatchSize.toLocaleString()} records
                      </label>
                      <input
                        type="range"
                        min="500"
                        max="50000"
                        step="500"
                        value={contractBatchSize}
                        onChange={(e) => setContractBatchSize(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    {/* Live Validation Output Box */}
                    <div
                      className={`p-4 rounded-xl border transition-all ${
                        contractValidationResult.passed
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-rose-50 border-rose-300 text-rose-950"
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs font-bold mb-2">
                        <span className="flex items-center gap-1.5">
                          {contractValidationResult.passed ? (
                            <CheckCircle2 size={16} className="text-emerald-600" />
                          ) : (
                            <AlertOctagon size={16} className="text-rose-600" />
                          )}
                          <span>GATEKEEPER: {contractValidationResult.status}</span>
                        </span>
                        <span>{contractValidationResult.processedRecords.toLocaleString()} Accepted</span>
                      </div>

                      <p className="text-xs leading-relaxed font-sans">{contractValidationResult.message}</p>

                      <div className="mt-3 pt-2 border-t border-stone-200/40 text-[11px] font-mono space-y-1">
                        <div>
                          <span className="font-semibold">Routing: </span>
                          <span className="font-mono text-stone-800">{contractValidationResult.dlqRoute}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Freshness Lag: </span>
                          <span>{contractValidationResult.freshnessLagMinutes} mins (Target: &lt;= 15 mins)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 2: Data Mesh Domain Topology Simulator                 */}
            {/* ================================================================ */}
            {activeWorkbench === "data_mesh_simulator" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Network className="text-orange-600" size={18} />
                    Data Mesh Domain Topology & Autonomy Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare centralized monolithic data teams against a decentralized Data Mesh architecture across 4 enterprise domains (Sales, Marketing, Finance, Logistics).
                  </p>
                </div>

                {/* Architecture Switcher */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-100 border border-stone-200 w-fit font-mono text-xs">
                  <button
                    onClick={() => setMeshArchitectureMode("centralized")}
                    className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                      meshArchitectureMode === "centralized"
                        ? "bg-white text-stone-900 shadow-sm"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Centralized Monolith
                  </button>
                  <button
                    onClick={() => setMeshArchitectureMode("mesh")}
                    className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                      meshArchitectureMode === "mesh"
                        ? "bg-white text-stone-900 shadow-sm"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Decentralized Data Mesh
                  </button>
                </div>

                {/* Controls & Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs">
                    <span className="text-stone-500 block text-[11px]">Avg Change Queue Time</span>
                    <span className="text-xl font-bold text-stone-900 mt-1 block">
                      {meshMetrics.queueDays} {meshArchitectureMode === "centralized" ? "Days" : "Hours"}
                    </span>
                    <span className="text-[10px] text-stone-500 mt-1 block">
                      {meshArchitectureMode === "centralized" ? "Central team bottleneck" : "Self-serve automated publishing"}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs">
                    <span className="text-stone-500 block text-[11px]">Domain Autonomy Score</span>
                    <span className="text-xl font-bold text-orange-600 mt-1 block">
                      {meshMetrics.autonomyScore} / 100
                    </span>
                    <span className="text-[10px] text-stone-500 mt-1 block">
                      {meshArchitectureMode === "centralized" ? "High central dependency" : "Decentralized product ownership"}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs">
                    <span className="text-stone-500 block text-[11px]">Bottleneck Vulnerability</span>
                    <span className="text-xs font-bold text-stone-800 mt-1 block truncate">
                      {meshMetrics.bottleneckTeam}
                    </span>
                    <span className="text-[10px] text-stone-500 mt-1 block">Platform self-service scaling</span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs">
                    <span className="text-stone-500 block text-[11px]">Governance Enforcement</span>
                    <span className="text-xs font-bold text-emerald-700 mt-1 block truncate">
                      {meshMetrics.governanceType}
                    </span>
                    <span className="text-[10px] text-stone-500 mt-1 block">Automated policy checks</span>
                  </div>
                </div>

                {/* 4 Domain Data Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {[
                    {
                      domain: "Sales Domain",
                      product: "Sales Analytics Mart",
                      owner: "Sales Engineering",
                      consumers: "Finance, Execs, BI",
                      status: "Published (v2.1)"
                    },
                    {
                      domain: "Marketing Domain",
                      product: "Customer 360",
                      owner: "Growth Data Team",
                      consumers: "CRM, Campaigns, ML",
                      status: "Published (v1.4)"
                    },
                    {
                      domain: "Data Science Domain",
                      product: "Churn Prediction Features",
                      owner: "ML Platform",
                      consumers: "Reverse ETL, Support",
                      status: "Published (v3.0)"
                    },
                    {
                      domain: "Operations Domain",
                      product: "Inventory Availability API",
                      owner: "Supply Chain",
                      consumers: "Checkout Service, Web App",
                      status: "Published (v2.0)"
                    }
                  ].map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-white shadow-xs space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-orange-600 font-bold uppercase">{p.domain}</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">
                          {p.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-stone-900">{p.product}</h4>
                      <p className="text-[11px] text-stone-500 font-mono">
                        <span className="text-stone-700 font-medium">Owner: </span>{p.owner}
                      </p>
                      <p className="text-[11px] text-stone-500 font-mono">
                        <span className="text-stone-700 font-medium">Consumers: </span>{p.consumers}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 3: Data Serving & Redis Caching Lab                    */}
            {/* ================================================================ */}
            {activeWorkbench === "cache_aside_latency_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Gauge className="text-orange-600" size={18} />
                    Data API & Redis Cache-Aside Latency Lab
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate high-concurrency client requests against a product catalog REST API (<code>GET /api/v1/products/101</code>). Observe how the Cache-Aside pattern absorbs read traffic to protect analytical data warehouses from overload.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  {/* Controls */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider">
                      API & Cache Parameters
                    </h4>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>Cache Hit Ratio</span>
                        <span className="font-mono font-bold">{effectiveHitRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={cacheHitRatePct}
                        disabled={isCacheInvalidated}
                        onChange={(e) => setCacheHitRatePct(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>API Request Concurrency</span>
                        <span className="font-mono font-bold">{apiConcurrencyRpm.toLocaleString()} req/min</span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={apiConcurrencyRpm}
                        onChange={(e) => setApiConcurrencyRpm(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>Cache TTL (Time To Live)</span>
                        <span className="font-mono font-bold">{cacheTTLSeconds} seconds</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="1800"
                        step="30"
                        value={cacheTTLSeconds}
                        onChange={(e) => setCacheTTLSeconds(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <button
                      onClick={() => {
                        setIsCacheInvalidated(true);
                        setTimeout(() => setIsCacheInvalidated(false), 3000);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-orange-100 text-orange-900 border border-orange-300 font-mono text-xs font-semibold hover:bg-orange-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw size={13} />
                      <span>{isCacheInvalidated ? "Cache Flushed (Cache Miss Storm!)" : "Simulate DB Write & Cache Invalidate"}</span>
                    </button>
                  </div>

                  {/* Metrics & Results */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Avg Response Latency</span>
                        <span className="text-xl font-bold text-stone-900 mt-1 block">
                          {cacheMetrics.avgLatency} ms
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {effectiveHitRate > 80 ? "Sub-10ms Redis speed" : "Slow warehouse scan"}
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Warehouse Query Load</span>
                        <span className="text-xl font-bold text-orange-600 mt-1 block">
                          {cacheMetrics.warehouseQueriesPerMin.toLocaleString()} / min
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {cacheMetrics.loadOffloadPct}% Offloaded by Cache
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Warehouse Cost / Mo</span>
                        <span className="text-xl font-bold text-stone-900 mt-1 block">
                          ${cacheMetrics.monthlyWarehouseCost.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-bold">
                          Redis Cost: $140/mo flat
                        </span>
                      </div>
                    </div>

                    {/* Architecture Latency Diagram */}
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2 border border-stone-800">
                      <div className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                        <ArrowRight size={13} /> Data Access Path Comparison
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-lg bg-stone-800/80 border border-stone-700">
                          <span className="text-emerald-400 font-bold">CACHE HIT (In-Memory Redis):</span>
                          <p className="text-[11px] text-stone-300 mt-1">Client → REST API → Redis RAM Key Lookup → Response</p>
                          <p className="text-emerald-300 font-bold mt-2">Latency: ~4.2 ms (Single-digit ms)</p>
                        </div>
                        <div className="p-3 rounded-lg bg-stone-800/80 border border-stone-700">
                          <span className="text-rose-400 font-bold">CACHE MISS (Cold Warehouse):</span>
                          <p className="text-[11px] text-stone-300 mt-1">Client → REST API → SQL Join on Snowflake → Update Cache → Response</p>
                          <p className="text-rose-300 font-bold mt-2">Latency: ~820 ms (Over 200x slower!)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 4: Feature Store & Skew Analyzer                       */}
            {/* ================================================================ */}
            {activeWorkbench === "feature_store_skew_analyzer" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Split className="text-orange-600" size={18} />
                    Feature Store & Training-Serving Skew Analyzer
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Examine how differences in transformation formulas, missing value imputations, or temporal freshness between the Offline Store (historical Parquet) and Online Store (Redis key-value) cause silent model degradation in production.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Skew Scenarios */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4 font-mono text-xs">
                    <h4 className="font-bold text-stone-800 uppercase tracking-wider text-[11px]">
                      Inject Skew Scenario
                    </h4>

                    <div className="space-y-2">
                      {[
                        { id: "none", label: "Zero Skew: Shared Feast FeatureView (Healthy)" },
                        { id: "formula_mismatch", label: "Formula Mismatch: total_spend vs avg_order_value" },
                        { id: "imputation_mismatch", label: "Imputation Mismatch: Median vs Zero default" },
                        { id: "timestamp_lag", label: "Staleness Lag: 36h delayed Redis replication" }
                      ].map((sc) => (
                        <button
                          key={sc.id}
                          onClick={() => setSkewScenario(sc.id)}
                          className={`w-full p-2.5 rounded-lg text-left border transition-all ${
                            skewScenario === sc.id
                              ? "bg-orange-600 text-white border-orange-600 font-bold"
                              : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          {sc.label}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 font-mono">
                        <span className="text-orange-400 font-bold block mb-1">OFFLINE STORE FORMULA:</span>
                        <code>{skewAnalysis.offlineFormula}</code>
                      </div>
                      <div className="p-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 font-mono">
                        <span className="text-orange-400 font-bold block mb-1">ONLINE STORE FORMULA:</span>
                        <code>{skewAnalysis.onlineFormula}</code>
                      </div>
                    </div>
                  </div>

                  {/* Drift Diagnostics & Impact */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider">
                      Skew Diagnostics & Model Impact
                    </h4>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Population Stability Index (PSI)</span>
                        <span className={`text-lg font-bold mt-1 block ${
                          skewAnalysis.psiScore > 0.25 ? "text-rose-600" : "text-emerald-700"
                        }`}>
                          {skewAnalysis.psiScore} {skewAnalysis.psiScore > 0.25 ? "(High Skew)" : "(Stable)"}
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-white border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Live Model Accuracy</span>
                        <span className={`text-lg font-bold mt-1 block ${
                          skewAnalysis.alertLevel === "HEALTHY" ? "text-emerald-700" : "text-rose-600"
                        }`}>
                          {skewAnalysis.modelAccuracy}
                        </span>
                      </div>
                    </div>

                    <div className={`p-4 rounded-xl border ${
                      skewAnalysis.alertLevel === "HEALTHY"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : "bg-rose-50 border-rose-300 text-rose-950"
                    }`}>
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold mb-1">
                        {skewAnalysis.alertLevel === "HEALTHY" ? (
                          <CheckCircle2 size={16} className="text-emerald-600" />
                        ) : (
                          <AlertTriangle size={16} className="text-rose-600" />
                        )}
                        <span>STATUS: {skewAnalysis.alertLevel} — {skewAnalysis.title}</span>
                      </div>
                      <p className="text-xs mt-2 leading-relaxed">{skewAnalysis.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 5: Point-in-Time AS-OF Join Lab                        */}
            {/* ================================================================ */}
            {activeWorkbench === "point_in_time_asof_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Clock className="text-orange-600" size={18} />
                    Point-in-Time Correctness & AS-OF Join Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Demonstrate how non-temporal JOIN operations introduce devastating data leakage by joining future events (e.g., cancellation notices received days AFTER prediction time) into model training datasets.
                  </p>
                </div>

                {/* Join Mode Switcher */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-100 border border-stone-200 w-fit font-mono text-xs">
                  <button
                    onClick={() => setAsOfJoinMode("point_in_time")}
                    className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                      asOfJoinMode === "point_in_time"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Point-in-Time AS-OF Join (T &lt;= T_pred)
                  </button>
                  <button
                    onClick={() => setAsOfJoinMode("leaky")}
                    className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                      asOfJoinMode === "leaky"
                        ? "bg-rose-600 text-white shadow-sm"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Standard Non-Temporal JOIN (Leaky Future Data)
                  </button>
                </div>

                {/* Timeline Visualization */}
                <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs border border-stone-800 space-y-3">
                  <div className="text-[11px] text-orange-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Clock size={13} /> Historical Event Timeline vs Prediction Cutoff (2026-11-01)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1 text-[11px]">
                    <div className="p-2 rounded bg-stone-800 border border-stone-700">
                      <span className="text-stone-400 block text-[10px]">2026-10-01</span>
                      <span className="font-bold text-stone-200">Account Created</span>
                      <span className="text-[10px] text-emerald-400 block mt-1">Valid (Past)</span>
                    </div>
                    <div className="p-2 rounded bg-stone-800 border border-stone-700">
                      <span className="text-stone-400 block text-[10px]">2026-10-15</span>
                      <span className="font-bold text-stone-200">Upgrade to Pro</span>
                      <span className="text-[10px] text-emerald-400 block mt-1">Valid (Past)</span>
                    </div>
                    <div className="p-2 rounded bg-stone-800 border border-stone-700">
                      <span className="text-stone-400 block text-[10px]">2026-10-28</span>
                      <span className="font-bold text-stone-200">Support Ticket Filed</span>
                      <span className="text-[10px] text-emerald-400 block mt-1">Valid (Past)</span>
                    </div>
                    <div className={`p-2 rounded border ${
                      asOfJoinMode === "leaky" ? "bg-rose-950/80 border-rose-500" : "bg-stone-800/50 border-stone-700 opacity-40"
                    }`}>
                      <span className="text-stone-400 block text-[10px]">2026-11-05</span>
                      <span className="font-bold text-stone-200">Cancellation Sent</span>
                      <span className="text-[10px] text-rose-400 block mt-1">
                        {asOfJoinMode === "leaky" ? "LEAKED INTO TRAIN" : "Excluded by AS-OF"}
                      </span>
                    </div>
                    <div className={`p-2 rounded border ${
                      asOfJoinMode === "leaky" ? "bg-rose-950/80 border-rose-500" : "bg-stone-800/50 border-stone-700 opacity-40"
                    }`}>
                      <span className="text-stone-400 block text-[10px]">2026-11-12</span>
                      <span className="font-bold text-stone-200">Refund Processed</span>
                      <span className="text-[10px] text-rose-400 block mt-1">
                        {asOfJoinMode === "leaky" ? "LEAKED INTO TRAIN" : "Excluded by AS-OF"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature Vector Comparison Result */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between font-bold text-stone-800 border-b border-stone-200 pb-2">
                    <span>GENERATED FEATURE ROW FOR CUSTOMER 101:</span>
                    <span className={asOfJoinMode === "point_in_time" ? "text-emerald-700" : "text-rose-600"}>
                      {asOfJoinMode === "point_in_time" ? "SAFE (LEAK-FREE)" : "CORRUPTED (FUTURE LEAKAGE)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                      <span className="text-stone-500 block">Total Spend:</span>
                      <span className="font-bold text-stone-900">${asOfCustomerData.total_spend}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                      <span className="text-stone-500 block">Support Tickets:</span>
                      <span className="font-bold text-stone-900">{asOfCustomerData.support_tickets}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                      <span className="text-stone-500 block">Cancellation Flag:</span>
                      <span className="font-bold text-stone-900">{asOfCustomerData.cancellation_requested}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                      <span className="text-stone-500 block">Offline Test Accuracy:</span>
                      <span className="font-bold text-orange-600">{asOfCustomerData.training_accuracy}</span>
                    </div>
                  </div>

                  <div className={`p-3 rounded-lg border text-xs font-sans ${
                    asOfJoinMode === "point_in_time"
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                      : "bg-rose-50 border-rose-300 text-rose-950"
                  }`}>
                    <p className="font-semibold font-mono">{asOfCustomerData.leakageStatus}</p>
                    <p className="mt-1 text-[11px]">
                      Live Production Generalization: <strong>{asOfCustomerData.production_accuracy}</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 6: RAG Vector Search & Cosine Similarity + 15Q Quiz     */}
            {/* ================================================================ */}
            {activeWorkbench === "rag_vector_search_workbench" && (
              <div className="space-y-6">
                {/* RAG Vector Search Card */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                      <Bot className="text-orange-600" size={18} />
                      RAG Vector Search & Cosine Similarity Calculator
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Explore how semantic embeddings and dense vector cosine similarity (<code>cos(θ) = A · B / (||A|| ||B||)</code>) retrieve relevant context for LLMs while enforcing strict Role-Based Access Control (RBAC).
                    </p>
                  </div>

                  {/* Query & RBAC Selector */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Select User Query:</label>
                      <select
                        value={selectedRAGQuery}
                        onChange={(e) => setSelectedRAGQuery(e.target.value)}
                        className="w-full p-2 rounded-lg border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:outline-none focus:border-orange-500"
                      >
                        <option value="How do I optimize Spark shuffle partitions?">How do I optimize Spark shuffle partitions?</option>
                        <option value="What is Data Mesh and domain ownership?">What is Data Mesh and domain ownership?</option>
                        <option value="How to prevent ML data leakage with AS-OF joins?">How to prevent ML data leakage with AS-OF joins?</option>
                        <option value="How does Redis caching protect data warehouses?">How does Redis caching protect data warehouses?</option>
                        <option value="Show me confidential executive quarterly budgets">Show me confidential executive quarterly budgets</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Simulated User Role (RBAC):</label>
                      <select
                        value={ragUserRole}
                        onChange={(e) => setRagUserRole(e.target.value)}
                        className="w-full p-2 rounded-lg border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:outline-none focus:border-orange-500"
                      >
                        <option value="guest">Guest (Public Documents Only)</option>
                        <option value="engineer">Engineer (Public + Internal Engineering)</option>
                        <option value="executive">Executive (Public + Internal + Restricted Finance)</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between text-stone-600 mb-1 font-semibold">
                        <span>Similarity Threshold</span>
                        <span>{ragSimilarityThreshold}</span>
                      </div>
                      <input
                        type="range"
                        min="0.50"
                        max="0.90"
                        step="0.05"
                        value={ragSimilarityThreshold}
                        onChange={(e) => setRagSimilarityThreshold(Number(e.target.value))}
                        className="w-full accent-orange-600 mt-2"
                      />
                    </div>
                  </div>

                  {/* Retrieved Chunks Display */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider">
                      Vector Database Retrieval Ranking (Top Matches)
                    </h4>

                    <div className="space-y-2">
                      {ragSearchResults.slice(0, 4).map((chunk, idx) => (
                        <div
                          key={chunk.id}
                          className={`p-3.5 rounded-xl border transition-all text-xs ${
                            !chunk.hasAccess
                              ? "bg-stone-100 border-stone-300 opacity-60"
                              : chunk.matchesThreshold
                              ? "bg-emerald-50/70 border-emerald-300 shadow-xs"
                              : "bg-stone-50 border-stone-200"
                          }`}
                        >
                          <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                            <span className="font-bold text-stone-900 flex items-center gap-1.5">
                              <span className="px-1.5 py-0.5 rounded bg-stone-200 text-stone-800">#{idx + 1}</span>
                              <span>{chunk.title}</span>
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-orange-600">
                                Cosine Sim: {chunk.similarity}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                chunk.hasAccess
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-rose-100 text-rose-800"
                              }`}>
                                {chunk.hasAccess ? "RBAC: AUTHORIZED" : "RBAC: ACCESS DENIED"}
                              </span>
                            </div>
                          </div>
                          <p className="text-stone-700 leading-relaxed font-sans">{chunk.text}</p>
                          <div className="mt-2 text-[10px] font-mono text-stone-500 flex items-center gap-3">
                            <span>Category: {chunk.category}</span>
                            <span>Required Permission: {chunk.requiredRole}</span>
                            <span>Chunk ID: {chunk.id}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 15-Question Quiz Card */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                        <CheckSquare className="text-orange-600" size={18} />
                        Module 22 Mastery Quiz (15 Questions)
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Test your understanding of data products, Data Mesh domain ownership, semantic layers, Redis cache-aside serving, feature store skew, point-in-time correctness, and RAG vector indexing.
                      </p>
                    </div>

                    {showQuizResults ? (
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono font-bold text-orange-600">
                          Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </span>
                        <button
                          onClick={() => {
                            setShowQuizResults(false);
                            setQuizAnswers({});
                          }}
                          className="px-3.5 py-1.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-700 font-mono text-xs hover:bg-stone-100 transition-colors"
                        >
                          Retake Quiz
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowQuizResults(true)}
                        disabled={Object.keys(quizAnswers).length === 0}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white font-mono text-xs font-bold hover:bg-orange-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                      >
                        Submit Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                      </button>
                    )}
                  </div>

                  {/* Question List */}
                  <div className="space-y-6">
                    {quizQuestions.map((q, qIdx) => {
                      const selectedOpt = quizAnswers[qIdx];
                      const isSubmitted = showQuizResults;
                      const isCorrect = isSubmitted && selectedOpt === q.answer;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 sm:p-5 rounded-xl border transition-all text-xs space-y-3 ${
                            isSubmitted
                              ? isCorrect
                                ? "bg-emerald-50/50 border-emerald-300"
                                : "bg-rose-50/50 border-rose-300"
                              : "bg-stone-50/60 border-stone-200"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="font-mono font-bold text-orange-600 text-sm mt-0.5">
                              {q.id}.
                            </span>
                            <div className="flex-1 font-semibold text-stone-900 leading-relaxed text-sm">
                              {q.question}
                            </div>
                          </div>

                          {/* Options */}
                          <div className="grid grid-cols-1 gap-2 pl-6">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selectedOpt === optIdx;
                              let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";

                              if (isSubmitted) {
                                if (optIdx === q.answer) {
                                  btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                                } else if (isThisSelected && !isCorrect) {
                                  btnStyle = "bg-rose-100 border-rose-400 text-rose-950";
                                } else {
                                  btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                                }
                              } else if (isThisSelected) {
                                btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-semibold shadow-xs";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  disabled={isSubmitted}
                                  onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                                  className={`p-3 rounded-lg border text-left text-xs transition-all flex items-start gap-2.5 ${btnStyle}`}
                                >
                                  <span className="font-mono text-[11px] font-bold mt-0.5 text-stone-500">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span className="flex-1 leading-relaxed">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Answer Explanation */}
                          {isSubmitted && (
                            <div className="pl-6 pt-2 border-t border-stone-200/50 text-[11px] font-sans text-stone-600 leading-relaxed">
                              <span className="font-bold text-stone-800">Explanation: </span>
                              {q.explanation}
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
      </div>
    </div>
  );
}
