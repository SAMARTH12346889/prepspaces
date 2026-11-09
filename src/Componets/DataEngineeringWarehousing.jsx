// projectx/src/Componets/DataEngineeringWarehousing.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Database,
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
  Workflow,
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
  Code2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringWarehousingSections from "./DataEngineeringWarehousingSections";

export default function DataEngineeringWarehousing() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("olap_cube"); // 'olap_cube' | 'mpp_shuffle' | 'partition_pruner' | 'materialized_views' | 'platform_comparator' | 'sizing_quiz'

  // =========================================================================
  // WORKBENCH 1: OLAP Cube Explorer & Multidimensional Slicing
  // =========================================================================
  const [olapTimeDim, setOlapTimeDim] = useState("all"); // 'all' | '2024' | '2025' | '2026'
  const [olapProdDim, setOlapProdDim] = useState("all"); // 'all' | 'Laptops' | 'Phones' | 'Accessories'
  const [olapGeoDim, setOlapGeoDim] = useState("all"); // 'all' | 'US' | 'Europe' | 'India' | 'APAC'
  const [olapOperation, setOlapOperation] = useState("slice"); // 'slice' | 'dice' | 'rollup' | 'drilldown' | 'pivot'
  const [cubePivotAxis, setCubePivotAxis] = useState("prod_geo"); // 'prod_geo' | 'time_prod' | 'geo_time'

  // Base raw sales data
  const rawSalesCube = [
    { year: "2024", prod: "Laptops", geo: "US", rev: 120000, units: 120 },
    { year: "2024", prod: "Laptops", geo: "Europe", rev: 95000, units: 95 },
    { year: "2024", prod: "Laptops", geo: "India", rev: 80000, units: 100 },
    { year: "2024", prod: "Phones", geo: "US", rev: 150000, units: 250 },
    { year: "2024", prod: "Phones", geo: "Europe", rev: 110000, units: 190 },
    { year: "2024", prod: "Phones", geo: "India", rev: 140000, units: 310 },
    { year: "2024", prod: "Accessories", geo: "US", rev: 35000, units: 700 },
    { year: "2024", prod: "Accessories", geo: "India", rev: 45000, units: 1200 },

    { year: "2025", prod: "Laptops", geo: "US", rev: 160000, units: 150 },
    { year: "2025", prod: "Laptops", geo: "Europe", rev: 130000, units: 120 },
    { year: "2025", prod: "Laptops", geo: "India", rev: 125000, units: 160 },
    { year: "2025", prod: "Phones", geo: "US", rev: 190000, units: 300 },
    { year: "2025", prod: "Phones", geo: "Europe", rev: 145000, units: 230 },
    { year: "2025", prod: "Phones", geo: "India", rev: 210000, units: 450 },
    { year: "2025", prod: "Accessories", geo: "US", rev: 55000, units: 950 },
    { year: "2025", prod: "Accessories", geo: "India", rev: 70000, units: 1600 },

    { year: "2026", prod: "Laptops", geo: "US", rev: 210000, units: 190 },
    { year: "2026", prod: "Laptops", geo: "Europe", rev: 175000, units: 155 },
    { year: "2026", prod: "Laptops", geo: "India", rev: 190000, units: 240 },
    { year: "2026", prod: "Phones", geo: "US", rev: 260000, units: 380 },
    { year: "2026", prod: "Phones", geo: "Europe", rev: 195000, units: 290 },
    { year: "2026", prod: "Phones", geo: "India", rev: 320000, units: 620 },
    { year: "2026", prod: "Accessories", geo: "US", rev: 85000, units: 1400 },
    { year: "2026", prod: "Accessories", geo: "India", rev: 110000, units: 2300 },
  ];

  const filteredCube = useMemo(() => {
    return rawSalesCube.filter(item => {
      if (olapTimeDim !== "all" && item.year !== olapTimeDim) return false;
      if (olapProdDim !== "all" && item.prod !== olapProdDim) return false;
      if (olapGeoDim !== "all" && item.geo !== olapGeoDim) return false;
      return true;
    });
  }, [olapTimeDim, olapProdDim, olapGeoDim]);

  const cubeTotals = useMemo(() => {
    const totalRev = filteredCube.reduce((acc, curr) => acc + curr.rev, 0);
    const totalUnits = filteredCube.reduce((acc, curr) => acc + curr.units, 0);
    const avgPrice = totalUnits > 0 ? (totalRev / totalUnits).toFixed(1) : 0;
    return { totalRev, totalUnits, avgPrice, cellCount: filteredCube.length };
  }, [filteredCube]);

  // =========================================================================
  // WORKBENCH 2: Columnar Pruning & MPP Compute Shuffle Visualizer
  // =========================================================================
  const [storageFormat, setStorageFormat] = useState("columnar"); // 'row' | 'columnar'
  const [selectedColumns, setSelectedColumns] = useState(["revenue"]); // ['revenue', 'order_id', 'customer_id', 'order_date', 'shipping_address', 'notes']
  const [workerCount, setWorkerCount] = useState(4); // 2 | 4 | 8
  const [distStyle, setDistStyle] = useState("hash_key"); // 'hash_key' | 'hash_optimal' | 'even' | 'all'
  const [hasDataSkew, setHasDataSkew] = useState(false);

  const mppMetrics = useMemo(() => {
    const totalTableRows = 10000000; // 10 million rows
    const totalColumns = 20;
    const avgColWidthBytes = 8;
    const rowSizeBytes = totalColumns * avgColWidthBytes; // 160 bytes
    const totalTableSizeMb = (totalTableRows * rowSizeBytes) / (1024 * 1024); // ~1,525 MB

    let scannedBytes = 0;
    if (storageFormat === "row") {
      // Must read every column for every row
      scannedBytes = totalTableSizeMb;
    } else {
      // Columnar reads only selected columns
      const readCols = selectedColumns.length;
      scannedBytes = (totalTableRows * (readCols * avgColWidthBytes)) / (1024 * 1024);
    }

    // Network shuffle calculations
    let shuffleMb = 0;
    if (distStyle === "hash_key") {
      // Key is customer_id, query groups by region -> Requires full shuffle!
      shuffleMb = scannedBytes * 0.75;
    } else if (distStyle === "hash_optimal") {
      // Key is region -> Colocated aggregation, 0 shuffle!
      shuffleMb = 0;
    } else if (distStyle === "even") {
      // Round-robin distribution -> Full shuffle across all workers
      shuffleMb = scannedBytes * 0.95;
    } else if (distStyle === "all") {
      // Replicated table -> Zero shuffle for join/group
      shuffleMb = 0;
    }

    // Worker balance
    const basePerWorker = scannedBytes / workerCount;
    const workerLoads = [];
    for (let w = 0; w < workerCount; w++) {
      let load = basePerWorker;
      if (hasDataSkew) {
        if (w === 0) load = scannedBytes * 0.65; // Hotspot worker!
        else load = (scannedBytes * 0.35) / (workerCount - 1);
      }
      workerLoads.push(load.toFixed(1));
    }

    const maxWorkerLoad = Math.max(...workerLoads.map(Number));
    const estimatedLatencyMs = Math.round(maxWorkerLoad * 2.8 + (shuffleMb * 1.5));

    return {
      totalTableSizeMb: totalTableSizeMb.toFixed(1),
      scannedMb: scannedBytes.toFixed(1),
      ioReduction: (((totalTableSizeMb - scannedBytes) / totalTableSizeMb) * 100).toFixed(1),
      shuffleMb: shuffleMb.toFixed(1),
      workerLoads,
      estimatedLatencyMs,
    };
  }, [storageFormat, selectedColumns, workerCount, distStyle, hasDataSkew]);

  // =========================================================================
  // WORKBENCH 3: Partitioning & Micro-Partition Clustering Pruner
  // =========================================================================
  const [pruningStrategy, setPruningStrategy] = useState("partitioned_clustered"); // 'unpartitioned' | 'partitioned_date' | 'partitioned_clustered'
  const [queryDateRange, setQueryDateRange] = useState("q4_2026"); // 'q4_2026' | 'full_year' | 'single_day'
  const [queryRegionFilter, setQueryRegionFilter] = useState("India"); // 'all' | 'India' | 'US'

  const partitionGrid = useMemo(() => {
    // 64 simulated micro-partitions
    const totalPartitions = 64;
    const parts = [];

    for (let i = 0; i < totalPartitions; i++) {
      const quarter = i < 16 ? "Q1" : i < 32 ? "Q2" : i < 48 ? "Q3" : "Q4";
      const region = i % 4 === 0 ? "US" : i % 4 === 1 ? "Europe" : i % 4 === 2 ? "India" : "APAC";

      let isScanned = true;

      if (pruningStrategy === "unpartitioned") {
        isScanned = true; // Full table scan
      } else if (pruningStrategy === "partitioned_date") {
        if (queryDateRange === "q4_2026") {
          isScanned = quarter === "Q4";
        } else if (queryDateRange === "single_day") {
          isScanned = quarter === "Q4" && (i % 8 === 0);
        } else {
          isScanned = true;
        }
      } else if (pruningStrategy === "partitioned_clustered") {
        let dateMatch = true;
        if (queryDateRange === "q4_2026") dateMatch = (quarter === "Q4");
        else if (queryDateRange === "single_day") dateMatch = (quarter === "Q4" && (i % 8 === 0));

        let regionMatch = true;
        if (queryRegionFilter !== "all") regionMatch = (region === queryRegionFilter);

        isScanned = dateMatch && regionMatch;
      }

      parts.push({ id: i, quarter, region, isScanned });
    }

    const scannedCount = parts.filter(p => p.isScanned).length;
    const totalGb = 256; // 4 GB per micro-partition
    const scannedGb = (scannedCount * 4);
    const prunedPercent = (((totalPartitions - scannedCount) / totalPartitions) * 100).toFixed(1);
    const bigQueryCostDollars = (scannedGb / 1000) * 6.25; // $6.25 per TB on-demand

    return {
      parts,
      scannedCount,
      totalCount: totalPartitions,
      scannedGb,
      totalGb,
      prunedPercent,
      estimatedCost: bigQueryCostDollars.toFixed(4)
    };
  }, [pruningStrategy, queryDateRange, queryRegionFilter]);

  // =========================================================================
  // WORKBENCH 4: Materialized Views & Analytical Query Optimizer
  // =========================================================================
  const [useMaterializedView, setUseMaterializedView] = useState(true);
  const [mvRefreshMode, setMvRefreshMode] = useState("incremental"); // 'incremental' | 'full'

  const mvMetrics = useMemo(() => {
    if (!useMaterializedView) {
      return {
        queryPlan: "Seq Scan on fact_sales (cost=0.00..1845020.40 rows=50000000 width=16)",
        rowsScanned: "50,000,000 rows",
        dataScanned: "1.42 GB",
        executionTime: "4,280 ms",
        cpuLoad: "100% (8 cores saturated)",
        costUnit: "High (0.85 Snowflake Credits / 50M rows scan)",
        modeDesc: "Direct fact table scan: reads all transaction micro-partitions and recalculates aggregations from scratch."
      };
    } else {
      return {
        queryPlan: "Materialized View Scan on mv_daily_sales_summary (cost=0.00..12.40 rows=1095 width=24)",
        rowsScanned: "1,095 rows",
        dataScanned: "84 KB",
        executionTime: "12 ms",
        cpuLoad: "2% (instant precomputed lookup)",
        costUnit: "Negligible (0.0002 Snowflake Credits)",
        modeDesc: `Materialized View rewrite: Optimizer transparently redirects query to precomputed daily summary. Maintenance: ${mvRefreshMode === "incremental" ? "Incremental delta updates on commit" : "Nightly full batch recomputation"}.`
      };
    }
  }, [useMaterializedView, mvRefreshMode]);

  // =========================================================================
  // WORKBENCH 5: 4-Platform Cloud Architecture Comparison Sandbox
  // =========================================================================
  const [selectedPlatform, setSelectedPlatform] = useState("snowflake"); // 'snowflake' | 'bigquery' | 'redshift' | 'clickhouse'

  const PLATFORM_DETAILS = {
    snowflake: {
      name: "Snowflake",
      tagline: "Multi-Cluster Shared Data Cloud Warehouse",
      architecture: "Storage-Compute Decoupled (Cloud Storage + Independent Virtual Warehouses)",
      storageFormat: "Proprietary Columnar Micro-Partitions (50–500 MB compressed, immutable)",
      computeModel: "T-shirt Sized Virtual Warehouses (XS to 4XL), auto-suspend, multi-cluster auto-scaling",
      scaling: "Vertical per warehouse size; horizontal via multi-cluster auto-scaling in seconds",
      pricing: "Credits per compute hour (billed per second) + $23/TB monthly cloud storage",
      strengths: "Zero-copy cloning, Time Travel (1-90 days), data sharing, instant compute isolation per team",
      keyCommand: "CREATE WAREHOUSE analytics_wh WITH WAREHOUSE_SIZE = 'MEDIUM' AUTO_SUSPEND = 60 AUTO_RESUME = TRUE;"
    },
    bigquery: {
      name: "Google BigQuery",
      tagline: "Serverless Petabyte-Scale Cloud Data Warehouse",
      architecture: "Completely Serverless (Colossus File System + Borg Compute + Jupiter Network)",
      storageFormat: "Capacitor Columnar Storage with automatic tree-structured nesting",
      computeModel: "Dynamic 'Slots' (virtual CPUs executing SQL fragments in parallel)",
      scaling: "Instant automatic serverless scaling up to thousands of slots without cluster provisioning",
      pricing: "On-demand ($6.25 per TB scanned) OR Slot Edition Reservations (Standard, Enterprise, Enterprise Plus)",
      strengths: "Zero infrastructure management, BigLake multi-cloud object federation, native Gemini ML integration",
      keyCommand: "CREATE TABLE analytics.sales (order_id INT64, revenue NUMERIC) PARTITION BY order_date CLUSTER BY customer_id;"
    },
    redshift: {
      name: "Amazon Redshift (RA3)",
      tagline: "Massively Parallel Processing (MPP) Warehouse for AWS",
      architecture: "Leader Node + Compute Nodes with RA3 Decoupled Managed Storage (RMS)",
      storageFormat: "Columnar 1MB blocks with zone maps, dictionary/LZO/Zstandard compression",
      computeModel: "RA3 Nodes with SSD local caching + automatic S3 tiering; Concurrency Scaling",
      scaling: "Elastic Resize in minutes; automatic concurrency scaling clusters during query spikes",
      pricing: "Hourly instance rate per node (includes compute & local cache) + $0.024/GB RMS storage",
      strengths: "Deep AWS integration (IAM, S3, Glue), Redshift Spectrum lake queries, materialized view auto-rewrite",
      keyCommand: "CREATE TABLE fact_sales (order_id BIGINT, revenue NUMERIC(12,2)) DISTSTYLE KEY DISTKEY(customer_id) SORTKEY(order_date);"
    },
    clickhouse: {
      name: "ClickHouse",
      tagline: "Ultra-Fast Open-Source Columnar Analytical DBMS",
      architecture: "Share-Nothing Distributed MergeTree Architecture (Bare-Metal, Cloud, or Kubernetes)",
      storageFormat: "MergeTree Immutable Sorted Parts with Primary Sparse Index Marks (every 8,192 rows)",
      computeModel: "Vectorized SIMD Query Execution Engine utilizing maximum CPU memory bandwidth",
      scaling: "Horizontal scaling via Distributed table engine with Zookeeper / ClickHouse Keeper",
      pricing: "100% Open-Source free software on own hardware, or ClickHouse Cloud managed service",
      strengths: "World-record raw aggregation latency, 10-100x faster than traditional warehouses for real-time telemetry",
      keyCommand: "CREATE TABLE events (event_date Date, user_id UInt64, revenue Float64) ENGINE = MergeTree() ORDER BY (event_date, user_id);"
    }
  };

  // =========================================================================
  // WORKBENCH 6: Warehouse Sizing Tuner & 15-Question Mastery Assessment
  // =========================================================================
  const [dataVolumeTb, setDataVolumeTb] = useState(10); // 1 to 100 TB
  const [concurrencyQpm, setConcurrencyQpm] = useState(50); // 10 to 500 queries/min
  const [dailyActiveHours, setDailyActiveHours] = useState(10); // 1 to 24 hours

  const sizingCostEst = useMemo(() => {
    // Snowflake estimate: Medium warehouse ($8/hr) * hours * 30 days + storage
    const sfComputeCost = dailyActiveHours * 8 * 30;
    const sfStorageCost = dataVolumeTb * 23;
    const sfTotal = sfComputeCost + sfStorageCost;

    // BigQuery estimate: 50 TB scanned per month * $6.25 + storage
    const bqScanTb = (concurrencyQpm * 60 * dailyActiveHours * 30 * 0.002); // ~estimated scans
    const bqScanCost = bqScanTb * 6.25;
    const bqStorageCost = dataVolumeTb * 20;
    const bqTotal = Math.min(bqScanCost, 4000) + bqStorageCost;

    // Redshift RA3: 2 nodes of ra3.4xlarge ($6.52/hr total)
    const rsCompute = 24 * 6.52 * 30; // typically run 24/7 or paused
    const rsStorage = dataVolumeTb * 24;
    const rsTotal = rsCompute + rsStorage;

    return {
      snowflakeMonthly: sfTotal.toFixed(0),
      bigQueryMonthly: bqTotal.toFixed(0),
      redshiftMonthly: rsTotal.toFixed(0),
    };
  }, [dataVolumeTb, concurrencyQpm, dailyActiveHours]);

  // Quiz state
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "Which four core characteristics define Bill Inmon's classic definition of a Data Warehouse?",
      options: [
        "Relational, Normalized, Distributed, In-memory",
        "Subject-oriented, Integrated, Time-variant, Non-volatile",
        "Columnar, Stream-based, Unstructured, Transient",
        "Event-driven, Microservice-oriented, High-throughput, Document-based"
      ],
      correct: 1,
      explanation: "Bill Inmon defined a Data Warehouse as a subject-oriented, integrated, time-variant, and non-volatile collection of data in support of management's decision-making process."
    },
    {
      id: 2,
      q: "What is the primary difference in workload characteristics between OLTP and OLAP systems?",
      options: [
        "OLTP processes high-volume historical aggregations, while OLAP processes single-row updates",
        "OLTP processes high-concurrency, short write/read transactions targeting specific records, while OLAP executes complex read-heavy aggregations over millions of rows",
        "OLTP only runs on NoSQL databases, while OLAP only runs on CSV files",
        "OLTP systems never use indexing, while OLAP systems rely exclusively on primary key lookups"
      ],
      correct: 1,
      explanation: "OLTP is optimized for fast, transactional, single-record operations (insert/update/delete) with ACID guarantees, whereas OLAP is optimized for scanning large historical datasets to aggregate metrics across dimensions."
    },
    {
      id: 3,
      q: "In multidimensional modeling, what does defining the 'grain' of a fact table mean?",
      options: [
        "The number of hard disk drives used in the MPP cluster",
        "The exact level of detail represented by a single row in the fact table",
        "The compression ratio of the Parquet files",
        "The number of foreign keys connected to dimension tables"
      ],
      correct: 1,
      explanation: "The grain establishes exactly what a single fact table row represents (e.g. one line item on an invoice, one daily account balance snapshot, or one website click event). Determining the grain is the most critical first step in dimensional modeling."
    },
    {
      id: 4,
      q: "What distinguishes a Star Schema from a Snowflake Schema?",
      options: [
        "In a Star Schema, dimensions are denormalized and connect directly to the fact table; in a Snowflake Schema, dimensions are normalized into hierarchies requiring multi-table joins",
        "Star Schema only supports numbers, while Snowflake Schema only supports strings",
        "Star Schema requires Snowflake Cloud Data Warehouse, while Snowflake Schema runs on any database",
        "Star Schema has multiple fact tables, while Snowflake Schema has zero fact tables"
      ],
      correct: 0,
      explanation: "In a Star Schema, each dimension is fully denormalized in a single table, resulting in simpler queries and fewer joins. In a Snowflake Schema, dimension hierarchies are normalized into sub-tables (e.g., product -> subcategory -> category), reducing redundancy but adding join overhead."
    },
    {
      id: 5,
      q: "Which type of fact table records events that have a well-defined beginning and end with unpredictable milestones (e.g., an order fulfillment lifecycle)?",
      options: [
        "Transaction Fact Table",
        "Periodic Snapshot Fact Table",
        "Accumulating Snapshot Fact Table",
        "Factless Fact Table"
      ],
      correct: 2,
      explanation: "Accumulating snapshot fact tables model evolving multi-step business processes with date foreign keys representing each milestone (order placed, payment authorized, package shipped, delivered) and are updated as milestones occur."
    },
    {
      id: 6,
      q: "Why does Columnar Storage dramatically outperform Row-Oriented Storage for analytical queries (e.g., SELECT AVG(revenue) FROM sales)?",
      options: [
        "Columnar storage disables all compression algorithms",
        "Columnar storage enables projection pushdown (reading only the revenue column from disk) and SIMD vectorized CPU execution, avoiding reading irrelevant columns",
        "Row storage cannot store decimal numbers",
        "Columnar storage eliminates the need for SQL queries"
      ],
      correct: 1,
      explanation: "Columnar storage arranges data of the same type contiguously on disk. Analytical queries only load the specific columns requested in the query (projection pushdown), achieving high compression ratios and vectorized SIMD processing."
    },
    {
      id: 7,
      q: "In a Massively Parallel Processing (MPP) analytical database, what is a 'data shuffle'?",
      options: [
        "Deleting random records during nightly maintenance",
        "The network transfer of intermediate query data between compute worker nodes to re-partition rows for a JOIN or GROUP BY operation",
        "Encrypting table columns with rotating keys",
        "Switching active database leaders upon hardware failure"
      ],
      correct: 1,
      explanation: "When workers process a join or aggregation on keys distributed across different nodes, the engine must redistribute (shuffle) intermediate rows over the internal network to colocate matching keys on the same worker."
    },
    {
      id: 8,
      q: "In Amazon Redshift, which distribution style is optimal for small, frequently joined dimension tables (e.g., dim_store with 50 rows)?",
      options: [
        "DISTSTYLE KEY",
        "DISTSTYLE EVEN",
        "DISTSTYLE ALL",
        "DISTSTYLE AUTO"
      ],
      correct: 2,
      explanation: "DISTSTYLE ALL replicates the entire table to the first slice of every compute node. This ensures joins between the large fact table and the dimension table are performed locally with zero network shuffle."
    },
    {
      id: 9,
      q: "How does Partition Pruning improve query performance in modern data warehouses like BigQuery or Snowflake?",
      options: [
        "It deletes old records from the table to reduce storage usage",
        "The query optimizer reads partition metadata to skip reading storage files/blocks whose partition key does not match the WHERE clause",
        "It truncates all index files before running the query",
        "It forces the query to run on a single CPU core"
      ],
      correct: 1,
      explanation: "Partition pruning uses partition boundaries (e.g. order_date BETWEEN '2026-01-01' AND '2026-01-31') to exclude non-matching storage blocks entirely from disk I/O, dramatically reducing scan bytes and query latency."
    },
    {
      id: 10,
      q: "What is Snowflake's foundational architectural model?",
      options: [
        "Shared-Disk Monolith",
        "Shared-Nothing with tightly coupled disks",
        "Multi-cluster Shared Data architecture with decoupled cloud storage, independent virtual compute warehouses, and cloud services",
        "Client-Server In-Memory Cache"
      ],
      correct: 2,
      explanation: "Snowflake separates storage (centralized cloud object store), compute (independent virtual warehouses that can be spun up, paused, and scaled without contention), and cloud services (metadata, security, optimization)."
    },
    {
      id: 11,
      q: "How does Snowflake's Zero-Copy Cloning create an instant clone of a multi-terabyte table without duplicating storage cost?",
      options: [
        "It writes a compressed ZIP file to an S3 bucket",
        "It duplicates only the metadata pointers referencing existing immutable micro-partitions, writing new micro-partitions only when modifications occur (Copy-on-Write)",
        "It moves the table to RAM temporarily",
        "It generates dummy synthetic records"
      ],
      correct: 1,
      explanation: "Snowflake micro-partitions are immutable. Zero-copy cloning creates a new set of metadata pointers referencing the existing micro-partitions without copying underlying storage bytes until changes are written."
    },
    {
      id: 12,
      q: "In Google BigQuery, how is compute capacity allocated and managed?",
      options: [
        "Users must provision and maintain physical EC2 virtual machines",
        "Compute is serverless and measured in 'slots' (virtual CPUs executing SQL fragments), billed either on-demand per bytes scanned or via capacity reservations",
        "BigQuery only executes queries on client web browsers",
        "Queries are executed sequentially on a single central server"
      ],
      correct: 1,
      explanation: "BigQuery is completely serverless. It allocates pools of 'slots' (processing units that parse and execute SQL fragments in parallel across Google's Borg infrastructure)."
    },
    {
      id: 13,
      q: "What is the primary architectural mechanism of ClickHouse's MergeTree storage engine?",
      options: [
        "B-Tree indexes updated synchronously in place",
        "Data is written into immutable sorted parts, and background merge threads continuously merge small parts into larger sorted parts while updating primary sparse index marks",
        "All data is held in Redis RAM and lost on restart",
        "Data is stored in uncompressed CSV files"
      ],
      correct: 1,
      explanation: "ClickHouse MergeTree writes data into immutable sorted parts. In the background, ClickHouse merges parts together (LSM-style), maintaining sparse primary index marks (every 8,192 rows) for lightning-fast vectorized scans."
    },
    {
      id: 14,
      q: "What is the primary advantage of Materialized Views over standard logical SQL Views in data warehousing?",
      options: [
        "Materialized views consume zero disk storage",
        "Materialized views persist the precomputed result set physically on disk, allowing analytical queries to return instantly without recalculating expensive aggregations",
        "Materialized views allow updating third-party REST APIs",
        "Materialized views prevent users from running SELECT queries"
      ],
      correct: 1,
      explanation: "A regular view is just a saved SQL query executed at runtime. A materialized view pre-aggregates and writes query results to physical storage, drastically reducing query latency and warehouse compute spend."
    },
    {
      id: 15,
      q: "Which strategy is most effective for controlling compute costs in cloud data warehouses like Snowflake?",
      options: [
        "Setting AUTO_SUSPEND = 60 seconds on virtual warehouses so compute halts immediately when idle, and sizing warehouses to match query complexity rather than leaving large clusters permanently active",
        "Running all analytical queries on transactional production databases",
        "Disabling all clustering keys and indexes",
        "Executing full table scans on every dashboard refresh"
      ],
      correct: 0,
      explanation: "Configuring auto-suspend (e.g. 1-2 minutes) and auto-resume, selecting appropriate warehouse sizes per workload, and using clustered partitioning to prune data scans are the standard best practices for cloud warehouse cost optimization."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const quizScore = useMemo(() => {
    return Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
      const q = QUIZ_QUESTIONS.find(item => item.id === parseInt(qId, 10));
      return q && q.correct === ansIdx ? acc + 1 : acc;
    }, 0);
  }, [selectedAnswers]);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Sticky Universal Course Navigation */}
      <ModuleNav track="data-engineering" currentModuleId="data-warehousing" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/50 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                <Database size={13} className="text-[#f97316]" />
                <span>Data Engineering Master Course · Module 7</span>
              </div>
              <div className="text-xs font-mono text-stone-500">
                Architectural Level · Advanced Analytical Systems
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Data Warehousing & Analytical Systems
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-4xl leading-relaxed">
              Master enterprise analytical architectures from foundational principles to modern cloud platforms: OLAP cubes, dimensional modeling, star & snowflake schemas, columnar storage engines, MPP compute distribution, table partitioning & clustering, materialized views, query optimization, and the deep internal mechanics of Snowflake, BigQuery, Redshift, and ClickHouse.
            </p>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-2 pt-4 border-t border-stone-100">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "curriculum"
                    ? "bg-[#f97316] text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                <BookOpen size={16} />
                <span>Specification & Blueprints</span>
              </button>

              <button
                onClick={() => setActiveTab("workbench")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-[#f97316] text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                <Sparkles size={16} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MODE 1: CURRICULUM SPECIFICATION & BLUEPRINTS (100% Depth)       */}
        {/* ================================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            <DataEngineeringWarehousingSections />
          </div>
        )}

        {/* ================================================================= */}
        {/* MODE 2: INTERACTIVE WORKBENCHES (6 Deep Simulation Tools)          */}
        {/* ================================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Sub-Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/60 rounded-2xl border border-stone-200">
              <button
                onClick={() => setActiveWorkbench("olap_cube")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "olap_cube"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Boxes size={15} className="text-[#f97316]" />
                <span>1. OLAP Cube & Slicing</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("mpp_shuffle")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "mpp_shuffle"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Cpu size={15} className="text-[#f97316]" />
                <span>2. Columnar & MPP Shuffle</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("partition_pruner")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "partition_pruner"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Filter size={15} className="text-[#f97316]" />
                <span>3. Partitioning & Clustering</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("materialized_views")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "materialized_views"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Zap size={15} className="text-[#f97316]" />
                <span>4. Materialized Views</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("platform_comparator")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "platform_comparator"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Server size={15} className="text-[#f97316]" />
                <span>5. 4-Platform Architecture</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("sizing_quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "sizing_quiz"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <CheckCircle2 size={15} className="text-[#f97316]" />
                <span>6. Sizing & Assessment</span>
              </button>
            </div>

            {/* WORKBENCH 1: OLAP CUBE EXPLORER */}
            {activeWorkbench === "olap_cube" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 1 · Multidimensional OLAP
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      OLAP Cube Explorer & Multidimensional Slicing
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Interact with a 3-dimensional analytical cube (Time × Product × Geography). Execute Roll-up, Drill-down, Slice, Dice, and Pivot operations.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-stone-500">Operation:</span>
                    <select
                      value={olapOperation}
                      onChange={(e) => setOlapOperation(e.target.value)}
                      className="px-3 py-1.5 text-xs font-bold rounded-xl border border-stone-300 bg-stone-50"
                    >
                      <option value="slice">Slice (Fix 1 Dimension)</option>
                      <option value="dice">Dice (Sub-Cube Filter)</option>
                      <option value="rollup">Roll-up (Aggregate Higher)</option>
                      <option value="drilldown">Drill-down (Break Down)</option>
                      <option value="pivot">Pivot (Rotate Axes)</option>
                    </select>
                  </div>
                </div>

                {/* Dimension Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Time Dimension (Year)
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {["all", "2024", "2025", "2026"].map((y) => (
                        <button
                          key={y}
                          onClick={() => setOlapTimeDim(y)}
                          className={`px-3 py-1 text-xs font-bold rounded-lg border transition cursor-pointer ${
                            olapTimeDim === y
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-300 hover:border-orange-400"
                          }`}
                        >
                          {y === "all" ? "All Years" : y}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Product Dimension
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {["all", "Laptops", "Phones", "Accessories"].map((p) => (
                        <button
                          key={p}
                          onClick={() => setOlapProdDim(p)}
                          className={`px-3 py-1 text-xs font-bold rounded-lg border transition cursor-pointer ${
                            olapProdDim === p
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-300 hover:border-orange-400"
                          }`}
                        >
                          {p === "all" ? "All Products" : p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Geography Dimension
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {["all", "US", "Europe", "India"].map((g) => (
                        <button
                          key={g}
                          onClick={() => setOlapGeoDim(g)}
                          className={`px-3 py-1 text-xs font-bold rounded-lg border transition cursor-pointer ${
                            olapGeoDim === g
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-300 hover:border-orange-400"
                          }`}
                        >
                          {g === "all" ? "All Regions" : g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Summary Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">Aggregated Revenue</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      ${cubeTotals.totalRev.toLocaleString()}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Units Sold</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {cubeTotals.totalUnits.toLocaleString()} units
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Avg Unit Price</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      ${cubeTotals.avgPrice}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Active Cube Cells</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {cubeTotals.cellCount} / 24
                    </span>
                  </div>
                </div>

                {/* Sliced Cube Grid */}
                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="p-3 bg-stone-100 border-b border-stone-200 font-bold text-xs uppercase text-stone-700 flex justify-between items-center font-mono">
                    <span>Multidimensional Slice View</span>
                    <span>Active Filters: Time={olapTimeDim}, Prod={olapProdDim}, Geo={olapGeoDim}</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-mono">
                        <tr>
                          <th className="p-3">Year (Time)</th>
                          <th className="p-3">Product Category</th>
                          <th className="p-3">Region (Geography)</th>
                          <th className="p-3 text-right">Units Sold</th>
                          <th className="p-3 text-right">Revenue (USD)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-mono">
                        {filteredCube.map((row, idx) => (
                          <tr key={idx} className="hover:bg-orange-50/50 transition">
                            <td className="p-3 font-semibold text-stone-800">{row.year}</td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-800 font-sans">
                                {row.prod}
                              </span>
                            </td>
                            <td className="p-3 text-stone-700 font-sans">{row.geo}</td>
                            <td className="p-3 text-right text-stone-600">{row.units.toLocaleString()}</td>
                            <td className="p-3 text-right font-bold text-orange-950">${row.rev.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Generated SQL Equivalent */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-2">
                    <span className="font-bold flex items-center gap-1.5">
                      <Terminal size={14} className="text-orange-400" />
                      Equivalent OLAP SQL Query (GROUPING SETS / CUBE)
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-orange-400">PostgreSQL / Snowflake / BigQuery</span>
                  </div>
                  <pre className="overflow-x-auto text-amber-200">
{`SELECT 
    d_time.year,
    d_product.category,
    d_geo.country,
    SUM(f.revenue) AS total_revenue,
    SUM(f.units) AS total_units
FROM fact_sales f
JOIN dim_time d_time ON f.time_key = d_time.time_key
JOIN dim_product d_product ON f.product_key = d_product.product_key
JOIN dim_geography d_geo ON f.geo_key = d_geo.geo_key
WHERE 1=1
  ${olapTimeDim !== "all" ? `AND d_time.year = '${olapTimeDim}'` : ""}
  ${olapProdDim !== "all" ? `AND d_product.category = '${olapProdDim}'` : ""}
  ${olapGeoDim !== "all" ? `AND d_geo.country = '${olapGeoDim}'` : ""}
GROUP BY GROUPING SETS (
    (d_time.year, d_product.category, d_geo.country),
    (d_time.year, d_product.category),
    (d_time.year),
    ()
);`}
                  </pre>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: COLUMNAR STORAGE & MPP WORKER SHUFFLE */}
            {activeWorkbench === "mpp_shuffle" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 2 · Execution Engine
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Columnar Pruning & MPP Compute Shuffle Visualizer
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Compare Row vs Columnar I/O scanning and observe how MPP distribution keys (KEY, EVEN, ALL) impact network data shuffling across compute workers.
                    </p>
                  </div>
                </div>

                {/* Configuration Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Storage Format
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStorageFormat("columnar")}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition cursor-pointer ${
                          storageFormat === "columnar"
                            ? "bg-orange-600 text-white border-orange-600"
                            : "bg-white text-stone-700 border-stone-300"
                        }`}
                      >
                        Columnar (Parquet/Redshift)
                      </button>
                      <button
                        onClick={() => setStorageFormat("row")}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition cursor-pointer ${
                          storageFormat === "row"
                            ? "bg-orange-600 text-white border-orange-600"
                            : "bg-white text-stone-700 border-stone-300"
                        }`}
                      >
                        Row-Oriented (Postgres OLTP)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      MPP Distribution Style
                    </label>
                    <select
                      value={distStyle}
                      onChange={(e) => setDistStyle(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="hash_optimal">DISTSTYLE KEY (on Grouping Key - Zero Shuffle)</option>
                      <option value="hash_key">DISTSTYLE KEY (on Other Key - 75% Shuffle)</option>
                      <option value="even">DISTSTYLE EVEN (Round Robin - 95% Shuffle)</option>
                      <option value="all">DISTSTYLE ALL (Replicated - Zero Shuffle)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Cluster Workers & Skew
                    </label>
                    <div className="flex items-center gap-2">
                      <select
                        value={workerCount}
                        onChange={(e) => setWorkerCount(Number(e.target.value))}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                      >
                        <option value={2}>2 Workers</option>
                        <option value={4}>4 Workers</option>
                        <option value={8}>8 Workers</option>
                      </select>
                      <button
                        onClick={() => setHasDataSkew(!hasDataSkew)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition cursor-pointer ${
                          hasDataSkew
                            ? "bg-rose-100 text-rose-800 border-rose-300"
                            : "bg-white text-stone-600 border-stone-300"
                        }`}
                      >
                        {hasDataSkew ? "Data Skew: ACTIVE" : "Data Skew: None"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">Disk I/O Scanned</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      {mppMetrics.scannedMb} MB
                    </span>
                    <span className="text-[10px] text-orange-700 block mt-0.5">
                      {mppMetrics.ioReduction}% I/O saved vs Row Scan
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Network Data Shuffle</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {mppMetrics.shuffleMb} MB
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      {mppMetrics.shuffleMb === "0.0" ? "Colocated: Zero Network Overhead" : "Inter-node network bottleneck"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Est. Query Latency</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {mppMetrics.estimatedLatencyMs} ms
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      Bottleneck: {hasDataSkew ? "Straggler Node" : "Balanced Nodes"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Total Table Size</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {mppMetrics.totalTableSizeMb} MB
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      10,000,000 raw rows
                    </span>
                  </div>
                </div>

                {/* Worker Node Load Visualization */}
                <div className="border border-stone-200 rounded-xl p-5 bg-stone-50 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
                      <Cpu size={14} className="text-[#f97316]" />
                      <span>MPP Worker Cluster Load Balance ({workerCount} Compute Nodes)</span>
                    </h4>
                    {hasDataSkew && (
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-bold font-mono">
                        Warning: Worker 1 Straggler (Data Skew detected)
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {mppMetrics.workerLoads.map((load, idx) => {
                      const isHotspot = hasDataSkew && idx === 0;
                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border transition ${
                            isHotspot
                              ? "bg-rose-50 border-rose-300 text-rose-950"
                              : "bg-white border-stone-200 text-stone-800"
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-mono font-bold">
                            <span>Worker #{idx + 1}</span>
                            <span>{load} MB</span>
                          </div>
                          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
                            <div
                              className={`h-full ${isHotspot ? "bg-rose-600" : "bg-[#f97316]"}`}
                              style={{ width: `${Math.min(100, (Number(load) / Math.max(...mppMetrics.workerLoads.map(Number))) * 100)}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-stone-500 font-mono mt-1 block">
                            {isHotspot ? "Hotspot Straggler" : "Balanced Compute"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: PARTITIONING & MICRO-PARTITION PRUNING */}
            {activeWorkbench === "partition_pruner" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 3 · Physical Optimization
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Data Warehouse Partitioning & Clustering Pruner
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Observe how partition pruning and micro-partition clustering eliminate up to 98% of physical disk scans in Snowflake, BigQuery, and ClickHouse.
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Table Design Strategy
                    </label>
                    <select
                      value={pruningStrategy}
                      onChange={(e) => setPruningStrategy(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="unpartitioned">Unpartitioned (Full Table Scan)</option>
                      <option value="partitioned_date">Partitioned by Month (order_date)</option>
                      <option value="partitioned_clustered">Partitioned + Clustered by Region</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Query Date Range Filter
                    </label>
                    <select
                      value={queryDateRange}
                      onChange={(e) => setQueryDateRange(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="q4_2026">Q4 2026 (Oct - Dec)</option>
                      <option value="single_day">Single Day ('2026-11-09')</option>
                      <option value="full_year">Full Year (No Date Filter)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 font-mono">
                      Region Filter
                    </label>
                    <select
                      value={queryRegionFilter}
                      onChange={(e) => setQueryRegionFilter(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="India">WHERE region = 'India'</option>
                      <option value="US">WHERE region = 'US'</option>
                      <option value="all">No Region Filter (All Regions)</option>
                    </select>
                  </div>
                </div>

                {/* Scan Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">Micro-Partitions Scanned</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      {partitionGrid.scannedCount} / {partitionGrid.totalCount}
                    </span>
                    <span className="text-[10px] text-orange-700 block mt-0.5">
                      {partitionGrid.prunedPercent}% partitions skipped
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Bytes Scanned</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {partitionGrid.scannedGb} GB
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      out of {partitionGrid.totalGb} GB table
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">BigQuery Scan Cost</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      ${partitionGrid.estimatedCost}
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      billed at $6.25 per TB scanned
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Pruning Mechanism</span>
                    <span className="text-sm font-bold text-stone-900 font-mono block mt-1">
                      {pruningStrategy === "unpartitioned" ? "None (Full Scan)" : pruningStrategy === "partitioned_date" ? "Date Metadata Pruning" : "Multi-Dimensional Pruning"}
                    </span>
                  </div>
                </div>

                {/* 64 Micro-Partition Map */}
                <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
                      Physical Micro-Partition Grid (64 Storage Chunks)
                    </span>
                    <div className="flex items-center gap-3 text-[11px] font-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded bg-orange-600 inline-block" /> Scanned
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded bg-stone-300 inline-block" /> Pruned (Skipped)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
                    {partitionGrid.parts.map((p) => (
                      <div
                        key={p.id}
                        title={`Part #${p.id} [${p.quarter} - ${p.region}] -> ${p.isScanned ? 'SCANNED' : 'PRUNED'}`}
                        className={`h-7 rounded text-[9px] font-mono font-bold flex items-center justify-center transition ${
                          p.isScanned
                            ? "bg-orange-600 text-white shadow-xs"
                            : "bg-stone-200 text-stone-400 opacity-40"
                        }`}
                      >
                        {p.quarter}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: MATERIALIZED VIEWS & ANALYTICAL OPTIMIZER */}
            {activeWorkbench === "materialized_views" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 4 · Precomputation Engine
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Materialized Views & Analytical Query Optimizer
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Compare query latency, I/O scan volume, and compute credit consumption when querying raw fact tables vs transparently rewritten materialized views.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setUseMaterializedView(!useMaterializedView)}
                      className={`px-4 py-2 text-xs font-bold rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
                        useMaterializedView
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-stone-100 text-stone-700 border-stone-300 hover:border-orange-400"
                      }`}
                    >
                      <Zap size={14} />
                      <span>{useMaterializedView ? "Materialized View: ACTIVE" : "Direct Fact Table Scan"}</span>
                    </button>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">Execution Latency</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      {mvMetrics.executionTime}
                    </span>
                    <span className="text-[10px] text-orange-700 block mt-0.5">
                      {useMaterializedView ? "350x Faster Query Response" : "Slow raw table aggregation"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Rows Evaluated</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {mvMetrics.rowsScanned}
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      {useMaterializedView ? "99.998% rows eliminated" : "Scanned all historical rows"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Data Scanned</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {mvMetrics.dataScanned}
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      {useMaterializedView ? "Minimal I/O footprint" : "High bandwidth consumption"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Compute Credit Cost</span>
                    <span className="text-sm font-bold text-stone-900 font-mono block mt-1">
                      {mvMetrics.costUnit}
                    </span>
                  </div>
                </div>

                {/* Execution Plan Box */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-2">
                    <span className="font-bold flex items-center gap-1.5">
                      <Terminal size={14} className="text-orange-400" />
                      EXPLAIN Execution Plan
                    </span>
                    <span className="text-[10px] text-stone-400">Query Optimizer Rewrite Engine</span>
                  </div>
                  <pre className="text-emerald-300 overflow-x-auto">
                    {mvMetrics.queryPlan}
                  </pre>
                  <p className="text-[11px] text-neutral-400 italic pt-1 border-t border-neutral-800">
                    {mvMetrics.modeDesc}
                  </p>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: 4-PLATFORM ARCHITECTURE COMPARATOR */}
            {activeWorkbench === "platform_comparator" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                    Workbench 5 · Platform Matrix
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-1">
                    Modern Cloud Data Warehouse Architecture Sandbox
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Examine the internal storage, compute scaling, and operational characteristics of the top 4 analytical engines.
                  </p>
                </div>

                {/* Platform Switcher Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(PLATFORM_DETAILS).map(([key, p]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPlatform(key)}
                      className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                        selectedPlatform === key
                          ? "bg-orange-50 border-orange-500 shadow-xs"
                          : "bg-stone-50 border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">{p.name}</h4>
                      <p className="text-stone-500 text-[11px] truncate mt-0.5">{p.tagline}</p>
                    </button>
                  ))}
                </div>

                {/* Selected Platform Detailed Breakdown */}
                {(() => {
                  const current = PLATFORM_DETAILS[selectedPlatform];
                  return (
                    <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                        <h3 className="text-xl font-bold text-stone-900">{current.name} Architecture Specifications</h3>
                        <span className="text-xs font-mono text-orange-700 font-bold bg-orange-100 px-2.5 py-1 rounded-full">
                          {current.architecture}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Storage Organization</strong>
                          <p className="text-stone-700 leading-relaxed">{current.storageFormat}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Compute Model & Isolation</strong>
                          <p className="text-stone-700 leading-relaxed">{current.computeModel}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Scaling Mechanism</strong>
                          <p className="text-stone-700 leading-relaxed">{current.scaling}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Cost & Pricing Structure</strong>
                          <p className="text-stone-700 leading-relaxed">{current.pricing}</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-orange-100/60 border border-orange-200 text-xs sm:text-sm">
                        <strong className="text-orange-950 font-bold block mb-1">Architectural Strengths:</strong>
                        <p className="text-orange-900 leading-relaxed">{current.strengths}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                        <span className="text-stone-400 text-[10px] block mb-1 uppercase tracking-wider">Example Production DDL / Configuration</span>
                        <code>{current.keyCommand}</code>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* WORKBENCH 6: SIZING TUNER & 15-QUESTION ASSESSMENT */}
            {activeWorkbench === "sizing_quiz" && (
              <div className="space-y-8">
                {/* Part A: Warehouse Sizing & Cost Calculator */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                      Part A · Sizing Calculator
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900">Cloud Warehouse Sizing & Cost Estimator</h2>
                    <p className="text-stone-600 text-sm mt-1">
                      Configure your analytical workload to estimate monthly compute and storage spend across Snowflake, BigQuery, and Amazon Redshift.
                    </p>
                  </div>

                  {/* Sizing Sliders */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                        <span>Data Volume (Compressed)</span>
                        <span className="text-orange-600">{dataVolumeTb} TB</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={100}
                        value={dataVolumeTb}
                        onChange={(e) => setDataVolumeTb(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                        <span>Query Concurrency</span>
                        <span className="text-orange-600">{concurrencyQpm} queries/min</span>
                      </div>
                      <input
                        type="range"
                        min={5}
                        max={200}
                        step={5}
                        value={concurrencyQpm}
                        onChange={(e) => setConcurrencyQpm(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                        <span>Active Warehouse Hours / Day</span>
                        <span className="text-orange-600">{dailyActiveHours} hrs/day</span>
                      </div>
                      <input
                        type="range"
                        min={2}
                        max={24}
                        value={dailyActiveHours}
                        onChange={(e) => setDailyActiveHours(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Estimated Costs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-xs font-mono text-stone-500 uppercase font-bold block">Snowflake Monthly Est.</span>
                      <div className="text-2xl font-black text-stone-900 font-mono mt-1">
                        ${Number(sizingCostEst.snowflakeMonthly).toLocaleString()}
                      </div>
                      <span className="text-[11px] text-stone-500 block mt-1">
                        Auto-suspend active, Medium WH + ${dataVolumeTb * 23} storage
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-xs font-mono text-stone-500 uppercase font-bold block">BigQuery Monthly Est.</span>
                      <div className="text-2xl font-black text-stone-900 font-mono mt-1">
                        ${Number(sizingCostEst.bigQueryMonthly).toLocaleString()}
                      </div>
                      <span className="text-[11px] text-stone-500 block mt-1">
                        Serverless on-demand queries + ${dataVolumeTb * 20} storage
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                      <span className="text-xs font-mono text-stone-500 uppercase font-bold block">Redshift RA3 Monthly Est.</span>
                      <div className="text-2xl font-black text-stone-900 font-mono mt-1">
                        ${Number(sizingCostEst.redshiftMonthly).toLocaleString()}
                      </div>
                      <span className="text-[11px] text-stone-500 block mt-1">
                        2x ra3.4xlarge nodes + RMS storage
                      </span>
                    </div>
                  </div>
                </div>

                {/* Part B: 15-Question Comprehensive Assessment */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Part B · Mastery Assessment
                      </div>
                      <h2 className="text-2xl font-bold text-stone-900">Module 7: Data Warehousing Assessment (15 Questions)</h2>
                      <p className="text-stone-600 text-sm mt-1">
                        Validate your deep understanding of enterprise warehouses, OLAP cubes, dimensional modeling, MPP execution, columnar pruning, and modern cloud platforms.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-400 uppercase">Score Progress</span>
                      <div className="text-2xl font-black text-stone-900 font-mono">
                        {quizScore} / {QUIZ_QUESTIONS.length}
                      </div>
                    </div>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {QUIZ_QUESTIONS.map((q, idx) => {
                      const userChoice = selectedAnswers[q.id];
                      const isAnswered = userChoice !== undefined;
                      const isCorrect = userChoice === q.correct;

                      return (
                        <div key={q.id} className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-xs font-bold shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                              {q.q}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userChoice === optIdx;
                              let btnClass = "border-stone-200 bg-white text-stone-800 hover:border-orange-300";

                              if (isAnswered) {
                                if (optIdx === q.correct) {
                                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                                } else if (isSelected) {
                                  btnClass = "border-rose-500 bg-rose-50 text-rose-950";
                                } else {
                                  btnClass = "border-stone-200 bg-stone-100 text-stone-400";
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)}
                                  className={`p-3 rounded-xl border text-left text-xs transition flex items-center gap-2 cursor-pointer ${btnClass}`}
                                >
                                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {isAnswered && (
                            <div className={`p-3 rounded-lg text-xs ${
                              isCorrect ? "bg-emerald-100/70 text-emerald-900" : "bg-rose-100/70 text-rose-900"
                            }`}>
                              <strong>{isCorrect ? "Correct! " : "Incorrect. "}</strong>
                              <span>{q.explanation}</span>
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
