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
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Building2,
  Boxes,
  Copy,
  Activity,
  Award,
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  TrendingUp,
  FolderTree,
  Box,
  Archive,
  ShieldCheck,
  Lock,
  FileText,
  DollarSign,
  FileCode,
  Table,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 5: CLOUD DATABASES                                  */
/* Weeks 7–8: From SQL Tables to Globally Distributed Databases               */
/* Systems Theory: CMU 15-445 (Database Systems), MIT 6.5830, Berkeley CS186 */
/* -------------------------------------------------------------------------- */

export default function CloudDatabases() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Buffer Pool & Cache Hit Ratio Simulator State
  const [dbDataSizeGb, setDbDataSizeGb] = useState(200); // 200 GB database
  const [bufferPoolRamGb, setBufferPoolRamGb] = useState(32); // 32 GB RAM buffer pool
  const [workingSetPct, setWorkingSetPct] = useState(25); // 25% of DB is active working set

  // Database Matcher Decision Engine State
  const [matcherModel, setMatcherModel] = useState("relational"); // "relational", "key-value", "document", "wide-column"
  const [matcherTxScope, setMatcherTxScope] = useState("acid-multi"); // "acid-multi", "single-row", "eventual"
  const [matcherQueryPattern, setMatcherQueryPattern] = useState("complex-sql"); // "complex-sql", "key-lookup", "range-scan"
  const [matcherScale, setMatcherScale] = useState("vertical-ha"); // "vertical-ha", "horizontal-sharded", "global-multi-region"

  // Database Failure Incident Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Buffer Pool Simulator Calculations (CMU 15-445 Memory Hierarchy)
  const bufferPoolMetrics = useMemo(() => {
    const totalGb = parseFloat(dbDataSizeGb) || 1;
    const ramGb = parseFloat(bufferPoolRamGb) || 1;
    const activeWorkingSetGb = (totalGb * (parseFloat(workingSetPct) || 10)) / 100;

    // Cache hit ratio: how much of the working set fits into the buffer pool
    let hitRatio = 0;
    if (activeWorkingSetGb <= ramGb) {
      hitRatio = 98.5; // Working set entirely fits in RAM with minor cold misses
    } else {
      hitRatio = Math.max(15, ((ramGb / activeWorkingSetGb) * 95)).toFixed(1);
    }
    hitRatio = Math.min(99.9, parseFloat(hitRatio));

    // Disk read latency ~1ms (EBS gp3), RAM latency ~100ns (0.0001ms)
    // Average Latency = (HitRatio * 0.0001ms) + ((1 - HitRatio) * 1.2ms)
    const missFraction = (100 - hitRatio) / 100;
    const avgLatencyMs = (0.95 * 0.0001 + missFraction * 1.2).toFixed(3);
    const estimatedIopsNeeded = Math.ceil(missFraction * 5000);

    return {
      activeWorkingSetGb: activeWorkingSetGb.toFixed(1),
      hitRatio,
      avgLatencyMs,
      estimatedIopsNeeded,
      isMemoryConstrained: activeWorkingSetGb > ramGb,
    };
  }, [dbDataSizeGb, bufferPoolRamGb, workingSetPct]);

  // Database Matcher Decision Engine
  const recommendedDatabase = useMemo(() => {
    if (matcherModel === "relational" && matcherQueryPattern === "complex-sql") {
      if (matcherScale === "global-multi-region") {
        return {
          title: "Amazon Aurora Global Database / Azure SQL Geo-Replication",
          category: "Cloud-Native Relational",
          bestFor: "Complex relational queries, foreign keys, multi-table transactions, global read replicas",
          architecture:
            "Decoupled compute and storage. Storage replicates 6 copies across 3 AZs. Secondary regions maintain warm read replicas with <1s replication lag.",
          invariants: "Strict ACID transactions, declarative SQL optimizer, MVCC with row-level locking.",
        };
      }
      return {
        title: "PostgreSQL on AWS RDS / Azure Database for PostgreSQL / GCP Cloud SQL",
        category: "Enterprise Relational Database",
        bestFor: "Financial ledgers, transactional e-commerce, complex JOINs, rich extensions (PostGIS, pgvector)",
        architecture:
          "Multi-AZ synchronous primary/standby for zero-RPO failover, plus read replicas for read scaling.",
        invariants: "MVCC tuple versioning, WAL crash recovery, comprehensive B-tree and GiST indexing.",
      };
    }

    if (matcherModel === "key-value" || (matcherQueryPattern === "key-lookup" && matcherTxScope !== "acid-multi")) {
      return {
        title: "Amazon DynamoDB",
        category: "Serverless Managed Key-Value & Document",
        bestFor: "User sessions, shopping carts, game leaderboards, predictable single-digit millisecond scale",
        architecture:
          "Partition Key (PK) + Sort Key (SK) routing over distributed SSD nodes. Global Tables for multi-region active-active.",
        invariants: "Design schema around queries first! Single-table design, tunable eventual vs strong consistency.",
      };
    }

    if (matcherModel === "wide-column" || matcherQueryPattern === "range-scan") {
      return {
        title: "Google Cloud Bigtable",
        category: "Distributed Wide-Column Storage",
        bestFor: "IoT sensor telemetry, financial time-series, clickstreams, petabyte scale with millions of QPS",
        architecture:
          "SSTable storage on Colossus, indexed by lexicographically sorted row keys. Column families for schema agility.",
        invariants: "Atomic single-row mutations only; no multi-row joins; row-key design determines throughput.",
      };
    }

    if (matcherModel === "document" || matcherScale === "horizontal-sharded") {
      return {
        title: "MongoDB Atlas / Azure Cosmos DB",
        category: "Distributed Document Database",
        bestFor: "Flexible product catalogs, semi-structured mobile payloads, multi-document ACID transactions",
        architecture:
          "MongoDB Sharded Cluster (mongos routers + config servers + replica set shards) or Cosmos DB multi-model engine.",
        invariants: "Embedding vs referencing trade-offs, shard key cardinality determines cluster balance.",
      };
    }

    return {
      title: "Amazon Aurora / Azure SQL Database",
      category: "Managed Relational System",
      bestFor: "General enterprise transactional workloads",
      architecture: "Multi-AZ synchronous replication with automated failover and PITR.",
      invariants: "ACID transactions with MVCC.",
    };
  }, [matcherModel, matcherTxScope, matcherQueryPattern, matcherScale]);

  const databaseTopics = useMemo(
    () => [
      {
        id: "database-mental-model",
        title: "The Database Mental Model: Logical View vs Physical View",
        shortTitle: "1. Database Mental Model",
        category: "Foundations",
        icon: Database,
        summary:
          "Databases are the stateful heart of cloud applications. Understand why databases are vastly deeper than raw storage, and how the DBMS translates declarative SQL into physical disk pages, buffer caches, and WAL records.",
        theory: [
          "In modern cloud systems, stateless web servers and containers can crash and reboot instantly. But if your database says an account balance is ₹100, you cannot casually lose that state. The database is the single source of truth for the entire enterprise.",
          "Storage vs Database: Storage (Module 4) gives you raw unorganized bytes at a location (block device, filesystem, object bucket). A Database (DBMS) adds semantics: relations, transactions, concurrency control, query optimization, ACID guarantees, crash recovery, and index navigation.",
          "Every database operates across two worlds:",
          "1. LOGICAL WORLD (What you think): Declarative relations, tables, columns, rows, constraints, transactions, and SQL queries (`SELECT name FROM users WHERE id = 123;`).",
          "2. PHYSICAL WORLD (What the DBMS executes): Buffer pool pages in RAM, B-tree leaf blocks, dirty write queues, Write-Ahead Log (WAL) flushes, row-level locks, MVCC visibility snapshots, and query execution plans.",
          "CMU 15-445 (Database Systems) teaches that a relational DBMS is a translation machine: it abstracts the physical storage hardware so developers describe WHAT data they need, while the database engine determines HOW to retrieve it efficiently.",
        ],
        keyPoints: [
          "A DBMS adds semantic integrity, indexing, ACID transactions, and recovery on top of raw storage.",
          "Logical Abstraction: Tables, rows, declarative SQL queries, and constraints.",
          "Physical Reality: 8KB/16KB memory pages, buffer pool caches, WAL logs, and B-tree pointers.",
          "Data Independence: Application code remains decoupled from physical disk layout and storage devices.",
        ],
        diagramType: "db-logical-physical-stack",
        architectDecision:
          "Never treat a database as a generic black-box key-value store. Understanding the physical translation layer (buffer pools, index access paths, and lock semantics) is what separates senior architects who write high-performance systems from engineers who cause production outages.",
        interviewQuestions: [
          {
            q: "Explain the concept of 'Data Independence' in relational database systems.",
            a: "Data Independence means that the logical representation of data (tables, columns, SQL queries, and relationships) is completely decoupled from the physical implementation (file organization, disk block sizes, B-tree indexes, and storage media). A DBA can reorganize indexes, migrate from HDD to NVMe SSD, or partition tables without breaking a single line of application SQL code.",
          },
        ],
      },
      {
        id: "relational-core-optimization",
        title: "Relational Core & Query Optimization: SQL, Plans & EXPLAIN ANALYZE",
        shortTitle: "2. SQL & Query Optimization",
        category: "Relational Core",
        icon: Workflow,
        summary:
          "Master declarative SQL, the Relational Model, Primary/Foreign keys, Normalization vs Denormalization, and how the Cost-Based Query Optimizer chooses between Seq Scans, Index Scans, and Hash Joins.",
        theory: [
          "SQL is a declarative language: you specify the desired output set (`SELECT * FROM orders WHERE customer_id = 123;`), not the mechanical algorithm to retrieve it. The DBMS Query Optimizer evaluates multiple potential execution paths and chooses the lowest-cost plan.",
          "The Anatomy of Query Execution:",
          "• Parser & Rewriter: Validates syntax, verifies table/column permissions, and expands views.",
          "• Cost-Based Optimizer (CBO): Analyzes table statistics (histograms, row counts, null fractions) to estimate CPU and I/O costs for different join orders and scan methods.",
          "• Execution Engine: Executes the chosen plan via volcano iterator tree (`Next()` pipeline).",
          "Common Execution Operators:",
          "1. Sequential Scan (Seq Scan): Reads every page of the table from start to finish. Fast for small tables; catastrophic for 100-million row tables.",
          "2. Index Scan: Traverses a B-tree to find matching row pointers (TIDs/ctids), then reads the corresponding table heap pages.",
          "3. Bitmap Index Scan / Bitmap Heap Scan: Builds a bitmap of matching pages in RAM first, then reads table pages sequentially to optimize disk I/O.",
          "4. Join Algorithms: Nested Loop Join (efficient with index lookups for small sets), Hash Join (builds in-memory hash table for large unindexed joins), and Merge Join (requires sorted inputs; efficient for large sorted streams).",
          "Normalization (1NF through 3NF) eliminates data redundancy and update anomalies in transactional OLTP systems. However, in distributed cloud architectures, deliberate denormalization is frequently used to eliminate costly multi-node network joins.",
        ],
        keyPoints: [
          "Declarative SQL lets the database optimizer choose the best physical execution path.",
          "EXPLAIN ANALYZE executes the query and prints the actual elapsed time, memory used, and disk rows scanned.",
          "Nested Loop is ideal for index-driven lookups; Hash Join is ideal for large batch analytical joins.",
          "Normalization eliminates update anomalies; Denormalization optimizes read throughput in distributed systems.",
        ],
        diagramType: "query-optimizer-pipeline",
        architectDecision:
          "Make `EXPLAIN (ANALYZE, BUFFERS)` a mandatory step in your engineering workflow before deploying any new query to production. If an execution plan shows a `Seq Scan` on a table with more than 50,000 rows, a missing index or suboptimal query predicate is waiting to cause CPU starvation.",
        interviewQuestions: [
          {
            q: "What is the difference between a Sequential Scan, an Index Scan, and a Bitmap Index Scan in PostgreSQL?",
            a: "A Sequential Scan reads every single page of a table sequentially from disk/cache. An Index Scan traverses a B-tree to find matching row pointers and immediately fetches each heap page individually (which causes random I/O if rows are scattered). A Bitmap Index Scan first scans the index to construct a bitmap of page addresses in memory, sorts them physically, and then performs a sequential-like sweep across only the required table heap pages, minimizing random I/O.",
          },
        ],
      },
      {
        id: "physical-internals-wal",
        title: "Physical Storage Internals: Pages, Buffer Pool & WAL (Write-Ahead Logging)",
        shortTitle: "3. Pages, Buffer Pool & WAL",
        category: "Storage Internals",
        icon: HardDrive,
        summary:
          "Dive underneath the SQL layer into CMU 15-445 systems internals: 8KB/16KB disk pages, buffer pool LRU eviction, dirty page flushing, and the ARIES Write-Ahead Logging (WAL) protocol for crash recovery.",
        theory: [
          "Databases do not read or write individual bytes to disk. They read and write fixed-size blocks called PAGES (8 KB in PostgreSQL, 16 KB in MySQL InnoDB).",
          "The Buffer Pool (Buffer Cache):",
          "• When a query requests a row, the storage manager checks if the containing page is in the RAM Buffer Pool.",
          "• Cache Hit: Data is returned in ~100 nanoseconds directly from memory.",
          "• Cache Miss: The DBMS stalls while issuing a synchronous disk read (taking ~1 millisecond on NVMe/EBS). A 10,000x latency penalty!",
          "• Eviction Algorithms: LRU (Least Recently Used) or 2Q/CLOCK algorithms determine which clean or dirty page is evicted when RAM is full.",
          "Why WAL (Write-Ahead Logging) is the Foundational Invariant:",
          "• If a database had to synchronously write every modified 8 KB data page to its permanent disk file on every `COMMIT`, write throughput would collapse under random disk I/O.",
          "• Instead, databases follow the Write-Ahead Logging (WAL) rule: A compact, sequential append-only record describing the change (e.g. 'Page 402, offset 12, change balance from 100 to 50') must be flushed and fsynced to persistent storage BEFORE the transaction returns `COMMIT` success to the client.",
          "• The actual dirty data pages in RAM can be written to disk lazily in the background by checkpoint background daemons.",
          "• Crash Recovery: If power fails mid-operation, the database boots up, replays the WAL from the last checkpoint (Redo phase) to restore all committed transactions, and reverses uncommitted changes (Undo phase). This is the famous ARIES recovery protocol.",
        ],
        keyPoints: [
          "Database pages are fixed size: 8 KB (PostgreSQL) and 16 KB (MySQL InnoDB).",
          "Buffer Pool Cache Hit Ratio should ideally remain >99% in production OLTP systems.",
          "WAL Invariant: Log records must reach durable disk before dirty data pages are flushed and before commit succeeds.",
          "Sequential WAL writes enable sub-millisecond commit latency while deferring expensive random page writes.",
        ],
        diagramType: "buffer-pool-wal-flow",
        architectDecision:
          "When sizing database virtual machines, RAM is almost always more critical than CPU. Ensure your Buffer Pool is large enough to hold your active working set (indexes + hot table data) to prevent constant disk I/O churn and query starvation.",
        interviewQuestions: [
          {
            q: "Why does Write-Ahead Logging (WAL) allow databases to achieve high write throughput while guaranteeing ACID durability?",
            a: "WAL converts expensive, random I/O writes across thousands of scattered 8KB table data pages into a single, compact, sequential append-only stream of log records. Writing sequentially to disk is orders of magnitude faster. Because the log is fsynced to disk before the transaction commits, the DBMS can safely keep the actual data pages dirty in RAM and flush them lazily in batches in the background, knowing that any crash can be reconstructed by replaying the WAL.",
          },
        ],
      },
      {
        id: "indexes-btree-specialized",
        title: "Indexes Deep Dive: B-Trees, Composite, Covering & Specialized Access Methods",
        shortTitle: "4. Indexes & Access Methods",
        category: "Indexing",
        icon: Table,
        summary:
          "Explore B-Trees, the workhorse of relational databases. Understand multi-column composite index ordering, covering index-only scans, GIN, GiST, BRIN, and the write amplification penalty.",
        theory: [
          "Without an index, finding a single row requires scanning every page of the table ($O(N)$ full table scan). An index is an auxiliary data structure that maps column values to physical row locations ($O(\\log N)$ lookup).",
          "1. B-Tree (Balanced Tree):",
          "• Self-balancing multi-way search tree where all leaf nodes reside at the exact same depth.",
          "• Leaf nodes are doubly linked, allowing lightning-fast range queries (`BETWEEN '2026-01-01' AND '2026-01-31'`) as well as equality searches.",
          "• Supports operations: `=`, `<`, `>`, `<=`, `>=`, `BETWEEN`, `IN`, and `ORDER BY`.",
          "2. Composite (Multi-Column) Indexes:",
          "• An index on `(customer_id, created_at)` is sorted first by `customer_id`, then by `created_at`.",
          "• Leftmost Prefix Rule: It accelerates `WHERE customer_id = 123` and `WHERE customer_id = 123 AND created_at > '2026-01-01'`. BUT it CANNOT efficiently accelerate `WHERE created_at > '2026-01-01'` alone!",
          "3. Covering Indexes & Index-Only Scans:",
          "• By including all queried columns in the index (`CREATE INDEX ... INCLUDE (total_amount)`), the database answers the query directly from the B-tree leaf pages without fetching the underlying table heap pages.",
          "4. Specialized PostgreSQL Index Types:",
          "• Hash Index: $O(1)$ equality lookups; cannot do range queries.",
          "• GIN (Generalized Inverted Index): Essential for multi-valued fields, arrays, JSONB documents, and full-text search.",
          "• GiST (Generalized Search Tree): Geometry (PostGIS), polygon containment, range types.",
          "• BRIN (Block Range Index): Stores min/max summaries for physical 1MB-range blocks. Tiny memory footprint (kilobytes instead of gigabytes), ideal for naturally ordered append-only time-series data.",
          "The Index Penalty: Every index added speeds up specific reads, but consumes additional RAM/disk and forces the database to update every index structure on every `INSERT`, `UPDATE`, and `DELETE` (write amplification).",
        ],
        keyPoints: [
          "B-Trees provide $O(\\log N)$ equality and range scans via balanced leaf nodes.",
          "Column order in composite indexes matters: index on (A, B) cannot accelerate queries filtering only on B.",
          "Covering indexes enable Index-Only Scans by storing payload columns directly in index leaf nodes.",
          "BRIN indexes allow indexing billions of append-only time-series rows with minimal RAM overhead.",
        ],
        diagramType: "btree-and-composite-structure",
        architectDecision:
          "Audit database indexes quarterly using `pg_stat_user_indexes`. Delete unused or duplicate indexes. An index that is never scanned costs hundreds of megabytes of buffer pool RAM and degrades write throughput with zero business benefit.",
        interviewQuestions: [
          {
            q: "Why is a composite index on (status, created_at) structurally different from an index on (created_at, status)?",
            a: "A B-tree sorts entries strictly by the leading column first. An index on `(status, created_at)` clusters all rows by `status` (e.g., all 'PENDING' rows grouped together), then sorts by `created_at` within each status. An index on `(created_at, status)` sorts all rows chronologically first. If a query filters `WHERE created_at > '2026-01-01'`, the first index cannot be used efficiently because entries are scattered across different status buckets, violating the leftmost prefix rule.",
          },
        ],
      },
      {
        id: "acid-isolation-concurrency",
        title: "ACID Transactions, Concurrency Anomalies & Isolation Levels",
        shortTitle: "5. ACID & Isolation Levels",
        category: "Transactions",
        icon: Lock,
        summary:
          "Demystify ACID guarantees and concurrency control. Deep dive into Dirty Reads, Non-Repeatable Reads, Phantom Reads, and the 4 SQL isolation levels (Read Committed to Serializable).",
        theory: [
          "A transaction is a logical unit of work that bundles multiple operations into a single atomic execution.",
          "ACID Breakdown:",
          "• Atomicity: All operations commit together, or all roll back together (all-or-nothing).",
          "• Consistency: The transaction transitions the database from one valid state to another valid state, preserving all defined schemas, check constraints, foreign keys, and unique invariants.",
          "• Isolation: Concurrent transactions cannot observe each other's intermediate, incomplete states.",
          "• Durability: Once a transaction commits, its modifications survive any subsequent power failure, crash, or reboot.",
          "The Three Classical Concurrency Anomalies:",
          "1. Dirty Read: Transaction A reads data modified by uncommitted Transaction B. If B rolls back, A acted on phantom data that never existed.",
          "2. Non-Repeatable Read (Fuzzy Read): Transaction A reads row X. Transaction B modifies row X and commits. Transaction A re-reads row X and observes a different value within the same transaction.",
          "3. Phantom Read: Transaction A queries `WHERE age > 25` (getting 10 rows). Transaction B inserts a new 26-year-old user and commits. Transaction A re-runs the exact same range query and finds 11 rows (a 'phantom' row appeared).",
          "Standard Isolation Levels:",
          "• Read Uncommitted: Allows dirty reads (almost never used in production).",
          "• Read Committed: Default in PostgreSQL, Oracle, and SQL Server. Guarantees queries only see committed data. Each SQL statement takes a fresh snapshot.",
          "• Repeatable Read: Transaction takes a single snapshot at start; reads are deterministic across the entire transaction. Prevents dirty and non-repeatable reads.",
          "• Serializable: Gold standard. Guarantees concurrent execution produces the exact same outcome as if transactions ran one after another serially. Catches serialization write-skew anomalies and aborts conflicting transactions.",
        ],
        keyPoints: [
          "ACID guarantees transactional correctness under simultaneous multi-user execution.",
          "Dirty Reads read uncommitted data; Non-Repeatable reads read changed rows; Phantoms see new rows.",
          "PostgreSQL default is Read Committed; each statement sees data committed before the statement began.",
          "Serializable isolation detects dependency cycles (write-skew) and throws serialization_failure (40001) to force client retry.",
        ],
        diagramType: "isolation-anomalies-matrix",
        architectDecision:
          "When using Serializable isolation or optimistic locking, always equip your application data access layer with automated exponential backoff retry loops to gracefully handle transient serialization conflicts without bubbling errors to end users.",
        interviewQuestions: [
          {
            q: "What is Write Skew, and why does Repeatable Read isolation fail to prevent it while Serializable prevents it?",
            a: "Write Skew occurs when two concurrent transactions read overlapping data sets, satisfy an invariant based on what they read, and make disjoint writes that together violate the business invariant. For example, two doctors on call simultaneously request leave under the rule 'at least one doctor must remain on call'. Under Repeatable Read, both read that 2 doctors are on call, both approve their own leave, and commit, leaving 0 doctors on call. Serializable isolation tracks read/write predicates (SIREAD locks) and automatically aborts one transaction with a serialization error.",
          },
        ],
      },
      {
        id: "mvcc-row-locking",
        title: "MVCC (Multi-Version Concurrency Control) & Row-Level Locking",
        shortTitle: "6. MVCC & Row-Level Locks",
        category: "Concurrency Internals",
        icon: Layers,
        summary:
          "Uncover how PostgreSQL and MySQL InnoDB achieve high concurrency without read-blocking. Explore MVCC snapshots, tuple visibility, dead tuples, VACUUMing, and deadlock detection.",
        theory: [
          "In naive database engines, reading a table required acquiring shared read locks, which blocked all writes. Writing required exclusive locks, which blocked all reads. Throughput collapsed under high concurrency.",
          "The Modern Breakthrough: MVCC (Multi-Version Concurrency Control):",
          "• Core Invariant: Readers never block writers, and writers never block readers!",
          "• Instead of overwriting row bytes in place, updating a row marks the old tuple version as expired and inserts a brand-new tuple version.",
          "PostgreSQL MVCC Implementation:",
          "• Every heap tuple contains hidden header fields: `xmin` (the transaction ID that created it) and `xmax` (the transaction ID that deleted or replaced it).",
          "• When a transaction runs, the engine gives it a Visibility Snapshot containing the list of active, uncommitted transaction IDs.",
          "• A row version is visible if its `xmin` has committed AND its `xmax` is either unset or belongs to an uncommitted/future transaction.",
          "The Cost of MVCC: Bloat and VACUUMing:",
          "• When rows are updated or deleted, dead tuples remain on disk because active transactions might still need to read them.",
          "• PostgreSQL runs `autovacuum` daemons in the background to scan pages, freeze transaction IDs to prevent wrap-around, and reclaim space occupied by dead tuples for future inserts.",
          "MySQL InnoDB Concurrency:",
          "• InnoDB implements MVCC differently: it modifies pages in place in the buffer pool and writes previous row states to Undo Logs in the rollback segment. Readers construct historical snapshots on the fly by traversing the undo chain.",
          "Deadlocks: Occur when Transaction 1 holds Lock A and waits for Lock B, while Transaction 2 holds Lock B and waits for Lock A. Database engines run background cycle-detection algorithms (wait-for graphs) and kill one transaction to break the cycle.",
        ],
        keyPoints: [
          "MVCC ensures readers never block writers and writers never block readers.",
          "PostgreSQL appends new tuple versions (`xmin`, `xmax`); Autovacuum reclaims dead tuple storage.",
          "MySQL InnoDB updates in place and stores historical versions in Undo Logs.",
          "Deadlock detection algorithms automatically abort one transaction when a cyclic lock dependency forms.",
        ],
        diagramType: "mvcc-snapshot-tuples",
        architectDecision:
          "Tune PostgreSQL autovacuum settings aggressively (`autovacuum_vacuum_scale_factor = 0.05`) on high-write production tables. Default vacuum settings can allow table bloat to swell a 10 GB table into 100 GB of dead tuples, drastically slowing down sequential scans and degrading buffer pool efficiency.",
        interviewQuestions: [
          {
            q: "How does PostgreSQL's MVCC determine whether a row version is visible to a running query?",
            a: "PostgreSQL assigns every tuple an `xmin` (creation transaction ID) and `xmax` (deletion/replacement transaction ID). When a query executes under Read Committed, the DBMS takes a snapshot recording which transactions have committed, which are in progress, and the highest committed XID. A tuple is visible if its `xmin` has committed prior to the snapshot and its `xmax` is either blank or belongs to a transaction that has not committed or started after the snapshot began.",
          },
        ],
      },
      {
        id: "replication-lag-ha-standby",
        title: "Database Replication: HA Standbys, Read Replicas & Replication Lag",
        shortTitle: "7. Replication & Read Scaling",
        category: "High Availability",
        icon: RefreshCw,
        summary:
          "Compare Synchronous vs Asynchronous replication. Distinguish High Availability Standbys from Read Replicas, and tackle the critical challenge of replication lag.",
        theory: [
          "Replication means copying committed database state across multiple independent servers over the network.",
          "Why Replicate?",
          "1. High Availability (HA): Immediate failover if the primary node suffers hardware failure.",
          "2. Read Scaling: Offload read queries (`SELECT`) to replicas when the primary is saturated with writes.",
          "3. Geographic Locality: Bring data closer to users in different continents.",
          "Synchronous vs Asynchronous Replication:",
          "• Synchronous Replication: The primary node sends the WAL record to the standby and WAITS for network acknowledgment before returning `COMMIT` success to the client.",
          "  - Guarantee: Zero data loss (RPO = 0) on failover.",
          "  - Cost: Higher write latency (adds network round-trip time); if the standby stalls, the primary stalls.",
          "• Asynchronous Replication: The primary commits locally and immediately replies to the client. The WAL record streams to replicas in the background.",
          "  - Guarantee: Lowest write latency; primary never stalls if replicas slow down.",
          "  - Cost: Replication Lag. If the primary crashes, un-replicated transactions are lost (RPO > 0).",
          "HA Standby vs Read Replica:",
          "• HA Standby: Sits in an alternate Availability Zone (Multi-AZ). Configured with synchronous or near-synchronous replication. Typically does not serve user read queries; dedicated 100% to automated failover.",
          "• Read Replica: Scaled out horizontally to serve read-only workloads. Replicates asynchronously.",
          "The Replication Lag Anomaly (Read-After-Write Consistency):",
          "• Scenario: User posts a comment (`INSERT INTO comments`), redirects to profile, and reads from a replica that is 500ms behind. The comment is missing! User thinks the action failed and posts duplicate comments.",
          "• Solution: Route reads to the primary for 5-10 seconds immediately following a user write, or use session tokens.",
        ],
        keyPoints: [
          "Synchronous replication gives RPO = 0 at the expense of higher write latency.",
          "Asynchronous replication provides high write throughput but introduces replication lag.",
          "Multi-AZ Standby is for High Availability failover; Read Replicas are for read workload scaling.",
          "Read-After-Write consistency requires routing recent user reads to the primary or waiting for sync.",
        ],
        diagramType: "primary-replica-sync-async",
        architectDecision:
          "Never assume read replicas solve write-heavy database bottlenecks. Because every read replica must replay every write transaction that occurs on the primary, adding read replicas actually increases write overhead across your network fabric.",
        interviewQuestions: [
          {
            q: "An application writes to the primary database and immediately executes a SELECT from a read replica, but the newly written row is missing. How do you resolve this architectural issue?",
            a: "This is caused by asynchronous replication lag. Solutions include: (1) Read-Your-Own-Writes routing: Pin the user's reads to the primary database for a brief window (e.g. 5 seconds) after any mutating write; (2) Session consistency tokens: Client sends the LSN (Log Sequence Number) of its last write, and the replica waits until it has replayed that LSN before executing the read; or (3) Synchronous replication for critical state transitions.",
          },
        ],
      },
      {
        id: "cloud-managed-relational",
        title: "Cloud-Managed Relational: Amazon RDS vs Aurora Architecture",
        shortTitle: "8. RDS vs Aurora & Cloud SQL",
        category: "Cloud Relational",
        icon: Server,
        summary:
          "Examine hyperscaler relational offerings. Contrast traditional managed RDS (EBS-backed) with cloud-native Amazon Aurora's decoupled 6-copy 3-AZ storage engine.",
        theory: [
          "Operating self-managed PostgreSQL or MySQL on raw EC2 VMs requires manually configuring OS patches, automated EBS snapshots, replica promotion scripts, and monitoring. Cloud-managed relational services automate these operational burdens.",
          "Amazon RDS (Traditional Managed Architecture):",
          "• Provisions a dedicated virtual machine running a standard database engine (Postgres, MySQL, MariaDB, SQL Server).",
          "• Attaches network block storage (AWS EBS).",
          "• Multi-AZ Deployment: Synchronously replicates block storage to a warm standby VM in a second Availability Zone. If AZ-1 fails, AWS updates the DNS record to point to AZ-2 in ~60-120 seconds.",
          "Amazon Aurora (Cloud-Native Disaggregated Architecture):",
          "• Revolutionized cloud databases by separating compute from storage: 'The Log IS the Database!'",
          "• Instead of writing full 8KB/16KB data pages over the network, the Aurora compute node only streams lightweight redo log records to the distributed storage fleet.",
          "• 6 Copies Across 3 AZs: Every 10 GB storage segment is replicated 6 ways across 3 independent Availability Zones.",
          "• Quorum-Based Consensus: Aurora requires 4 of 6 nodes to acknowledge a write (tolerates loss of an entire AZ plus one additional node without write downtime) and 3 of 6 for a read.",
          "• Replica Scalability: Up to 15 Aurora read replicas share the EXACT same underlying distributed storage layer! No duplicate storage fees and sub-10ms replica lag.",
          "Azure SQL Database & GCP Cloud SQL:",
          "• Azure SQL Database provides Zone-Redundant deployments and active Geo-Replication failover groups.",
          "• Google Cloud SQL provides regional high-availability with shared virtual IPs that recover from zonal outages automatically.",
        ],
        keyPoints: [
          "RDS manages traditional database instances backed by EBS block volumes.",
          "Aurora decouples compute from storage: 6 copies of data replicated across 3 AZs using quorum consensus.",
          "Aurora read replicas share the same distributed storage volume with sub-10ms replication lag.",
          "Aurora Serverless v2 dynamically scales ACUs (Aurora Capacity Units) in fractions of a second based on load.",
        ],
        diagramType: "aurora-storage-quorum",
        architectDecision:
          "Choose Amazon Aurora over standard RDS when your workload requires rapid auto-scaling, high read replica concurrency (up to 15 replicas sharing 1 storage tier), cross-AZ resilience with quorum durability, or sub-minute crash recovery.",
        interviewQuestions: [
          {
            q: "How does Amazon Aurora's 'The Log is the Database' architecture reduce network I/O compared to standard RDS Multi-AZ?",
            a: "In standard RDS Multi-AZ, the database engine writes dirty 8KB/16KB pages, doublewrite buffers, and WAL logs to local EBS, which must replicate full 8KB block changes across the network to the secondary AZ. In Aurora, the compute node never sends full dirty data pages over the network; it streams only compact, sequential redo log records to the 6 distributed storage nodes. The storage nodes themselves apply the log records to generate pages on demand, reducing network traffic by up to 80%.",
          },
        ],
      },
      {
        id: "nosql-landscape-four-models",
        title: "The NoSQL Landscape: 4 Core Models & Access-Pattern-First Design",
        shortTitle: "9. NoSQL Models & Design",
        category: "NoSQL Core",
        icon: Boxes,
        summary:
          "Break free from relational dogmatism. Explore the 4 NoSQL models (Key-Value, Document, Wide-Column, Graph) and master the paradigm shift: design around query access patterns first.",
        theory: [
          "The term 'NoSQL' does not mean 'No SQL' or 'No Data Model'. It means 'Not Only SQL'. NoSQL systems were born from internet-scale workloads where relational single-machine limits, complex join overhead, and rigid schemas became operational bottlenecks.",
          "The Four Classical NoSQL Models:",
          "1. KEY-VALUE (AWS DynamoDB, Redis, Memcached):",
          "   - Opaque value stored against a unique key string (`user#104` $\\rightarrow$ `{...}`). Sub-millisecond lookup, virtually infinite horizontal partitioning.",
          "2. DOCUMENT (MongoDB, Azure Cosmos DB, Couchbase):",
          "   - Stores hierarchical, semi-structured documents (JSON/BSON). Rich secondary indexing on nested attributes.",
          "3. WIDE-COLUMN / EXTENSIBLE RECORD (Google Cloud Bigtable, Apache Cassandra, ScyllaDB):",
          "   - Two-dimensional sparse matrix sorted by row keys. Column families store sparse dynamic attributes. Massive append throughput for time-series.",
          "4. GRAPH (Neo4j, Amazon Neptune, Azure Cosmos DB Gremlin API):",
          "   - Nodes, edges, and properties. Optimized for traversing deep many-to-many relationships (social networks, fraud detection, recommendation engines).",
          "The Foundational Paradigm Shift: Access-Pattern-First Design:",
          "• In Relational design, you normalize entities first (Users, Orders, Items) and write arbitrary queries later.",
          "• In NoSQL design, you MUST list every query the application will ever execute FIRST:",
          "  Q1: Fetch user profile by ID.",
          "  Q2: Fetch all orders for user sorted by date.",
          "  Q3: Fetch order details with line items in a single round-trip.",
          "• You then deliberately structure partition keys, sort keys, and embedded records to satisfy those exact access patterns with zero cross-node joins!",
        ],
        keyPoints: [
          "NoSQL provides horizontal scale, schema agility, and predictable single-digit millisecond latency.",
          "The 4 models: Key-Value (lookup speed), Document (nested agility), Wide-Column (time-series scale), Graph (relationships).",
          "Access-Pattern-First: Design keys and document shapes directly around your application's read queries.",
          "Never attempt multi-table relational normalization patterns in NoSQL databases.",
        ],
        diagramType: "nosql-four-models-quadrant",
        architectDecision:
          "Do not adopt NoSQL simply because 'our startup hopes to have millions of users'. If your application requirements are fluid, reporting needs are ad-hoc, and transactional integrity across multiple entities is paramount, PostgreSQL will outshine NoSQL while saving hundreds of engineering hours.",
        interviewQuestions: [
          {
            q: "Why does NoSQL schema design require knowing application access patterns upfront, whereas relational schema design does not?",
            a: "Relational databases use declarative SQL with a cost-based optimizer, allowing developers to query normalized tables with arbitrary JOINs, filters, and aggregations after the fact. NoSQL databases scale horizontally by distributing data across thousands of independent nodes based on partition keys. Because cross-node joins and scatter-gather scans are prohibitively expensive at scale, data must be pre-structured and co-located specifically to satisfy targeted queries in a single direct partition lookup.",
          },
        ],
      },
      {
        id: "nosql-cloud-titans",
        title: "Cloud NoSQL Titans: DynamoDB, Azure Cosmos DB & Google Bigtable",
        shortTitle: "10. DynamoDB, Cosmos & Bigtable",
        category: "Cloud NoSQL",
        icon: Globe,
        summary:
          "Deep dive into the premier hyperscaler NoSQL engines: DynamoDB single-table design, Cosmos DB 5 consistency tiers, and Bigtable sorted row-key design.",
        theory: [
          "1. AWS DynamoDB:",
          "• Primary Key Architecture: Simple Partition Key (PK) or Composite Primary Key (PK + Sort Key SK).",
          "• Hash Partitioning: Hashes the PK to route items to specific storage partitions. Hot Partitions occur when a low-cardinality key (e.g. `PK = 'INDIA'`) receives 80% of traffic, throttling the partition.",
          "• Single-Table Design: Storing multiple entity types (Users, Orders, Products) in a single DynamoDB table using generic keys (`PK = USER#123`, `SK = ORDER#904`) to fetch a user and all their recent orders in a single `Query` call.",
          "• Consistency: Eventually Consistent (default, 50% cheaper) vs Strongly Consistent reads. ACID transactions supported via `TransactWriteItems` across up to 100 items.",
          "• Global Tables: Multi-region active-active replication with last-writer-wins conflict resolution.",
          "2. Azure Cosmos DB:",
          "• Globally distributed multi-model database (NoSQL, MongoDB, Cassandra, Gremlin, Table APIs).",
          "• 5 Tunable Consistency Levels (The Consistency Spectrum):",
          "  1. Strong: Linearizable reads. Zero stale data; higher latency and reduced availability during network partitions.",
          "  2. Bounded Staleness: Reads lag writes by at most 'K' versions or 'T' time (e.g., 5 seconds / 100 updates).",
          "  3. Session: Default and most popular. Provides Read-Your-Own-Writes and Monotonic Reads within a user session using session tokens.",
          "  4. Consistent Prefix: Readers never see out-of-order writes (no dirty reads or time-travel), but data may be stale.",
          "  5. Eventual: Lowest latency and highest throughput. Replicas converge eventually.",
          "3. Google Cloud Bigtable:",
          "• Massively scalable wide-column engine powering Google Search, Maps, and YouTube.",
          "• Lexicographically Sorted Row Keys: Data is stored physically ordered by row key. Enables lightning-fast range scans (`RowKey BETWEEN 'sensor#10#2026-01' AND 'sensor#10#2026-02'`).",
          "• Beware Hotspotting: Never use sequential timestamps as the row key prefix (`2026-10-08-12:00:01`)! All new writes will hammer a single tablet server. Salt or reverse the key (`sensor_id#timestamp`).",
        ],
        keyPoints: [
          "DynamoDB: High-cardinality partition keys prevent hot partitions; Single-Table design eliminates joins.",
          "Cosmos DB: 5 distinct consistency levels balancing latency, throughput, and correctness.",
          "Bigtable: Lexicographically sorted row keys enable massive sequential range scans for time-series.",
          "Avoid sequential timestamp row keys in Bigtable to prevent tablet server hotspotting.",
        ],
        diagramType: "cosmos-consistency-spectrum",
        architectDecision:
          "Use Azure Cosmos DB's Session consistency for standard interactive web applications. It provides users with a seamless experience (they always see their own updates immediately) without incurring the latency and availability penalties of global Strong consistency.",
        interviewQuestions: [
          {
            q: "What causes a 'Hot Partition' in DynamoDB or Bigtable, and how do you design keys to prevent it?",
            a: "A hot partition occurs when a large percentage of read or write requests target the same partition key or contiguous row-key range, exhausting that specific storage node's allocated I/O capacity while other nodes remain idle. To prevent hot partitions: (1) Use high-cardinality partition keys (e.g. UUIDs or customer IDs rather than country or date); (2) Add random or calculated salts (e.g. `sensor_id#hash(timestamp) % 10`) to distribute writes evenly across multiple physical partitions.",
          },
        ],
      },
      {
        id: "horizontal-scaling-sharding",
        title: "Horizontal Scaling: Partitioning, Sharding, Consistent Hashing & CAP",
        shortTitle: "11. Sharding & CAP Theorem",
        category: "Distributed Scaling",
        icon: Network,
        summary:
          "Scale beyond a single machine. Contrast Horizontal vs Vertical partitioning, Sharding topologies, Consistent Hashing rings, Scatter-Gather penalties, and real-world CAP theorem trade-offs.",
        theory: [
          "When a database outgrows the largest available cloud server (e.g., 128 vCPUs and 1 TB RAM), horizontal scaling becomes mandatory.",
          "Partitioning vs Sharding:",
          "• Partitioning: Dividing a single logical table into smaller sub-tables (e.g., partitioning an `orders` table by year `orders_2025`, `orders_2026`). Can occur on a single machine.",
          "• Sharding: Distributing those horizontal partitions across multiple independent database servers (shards), each with its own CPU, RAM, and disk (Shared-Nothing Architecture).",
          "Sharding Strategies:",
          "1. Range-Based Sharding: Shard 1 holds IDs 1-1M; Shard 2 holds IDs 1M-2M. Easy range queries, but write hotspots occur as new sequential IDs always hit the highest shard.",
          "2. Hash-Based Sharding: `Shard = hash(key) % N`. Uniform write distribution, but range scans require querying all shards.",
          "3. Consistent Hashing: Nodes and keys are mapped onto a virtual hash ring ($0$ to $2^{32}-1$). Adding or removing a node only migrates $K/N$ keys rather than re-shuffling the entire database. Foundational to Dynamo and Cassandra.",
          "The Scatter-Gather Penalty:",
          "• If a query filters on the Shard Key (`user_id = 101`), the router directs the query directly to Shard 3 (single-hop lookup).",
          "• If a query filters on a non-shard key (`WHERE email = 'alex@example.com'`), the router must broadcast the query to EVERY shard in the cluster (Scatter) and merge the results (Gather). Latency is dictated by the slowest shard.",
          "The Real CAP Theorem & PACELC:",
          "• In any distributed system across a network, network partitions (P) are inevitable.",
          "• Under a network partition, you must choose between Consistency (C: reject writes or block to prevent split-brain) or Availability (A: accept writes locally and reconcile later).",
          "• PACELC Extension: Even when no partition occurs (Else), there is an unavoidable trade-off between Latency (L) and Consistency (C).",
        ],
        keyPoints: [
          "Partitioning divides data; Sharding distributes partitions across multiple physical servers.",
          "Consistent Hashing minimizes data movement when adding or removing nodes from a distributed cluster.",
          "Scatter-Gather occurs when queries omit the shard key, causing massive cross-node network overhead.",
          "PACELC Theorem: If Partitioned, choose Availability vs Consistency; Else, choose Latency vs Consistency.",
        ],
        diagramType: "sharding-scatter-gather",
        architectDecision:
          "Carefully select your Shard Key. A great shard key has high cardinality, evenly distributes write volume, and aligns with 90%+ of your application's query access patterns to prevent scatter-gather broadcasts.",
        interviewQuestions: [
          {
            q: "What is the 'Scatter-Gather' problem in a sharded database, and how does shard key selection mitigate it?",
            a: "Scatter-Gather occurs when a query does not include the shard key in its WHERE clause. The query coordinator cannot determine which shard holds the data, so it must broadcast ('scatter') the query to all shards across the cluster, wait for every node to respond, and merge ('gather') the results in memory. This wastes cluster CPU and causes query latency to equal that of the slowest node. Selecting a shard key that matches the most frequent query predicate ensures queries are routed directly to a single shard.",
          },
        ],
      },
      {
        id: "dr-backups-polyglot",
        title: "Disaster Recovery, PITR, Connection Pooling & Polyglot Persistence",
        shortTitle: "12. DR, PITR & Polyglot",
        category: "Enterprise Architecture",
        icon: ShieldCheck,
        summary:
          "Bring everything together: Point-in-Time Recovery (PITR), connection pool exhaustion (PgBouncer/RDS Proxy), High Availability vs Disaster Recovery, and building a 100M-user Polyglot Persistence architecture.",
        theory: [
          "Replication Is NOT a Backup (The Golden Rule):",
          "• If an engineer runs `DELETE FROM accounts;` without a `WHERE` clause, or malware encrypts the primary database, that catastrophic write is replicated to your secondary AZ and DR region in milliseconds!",
          "• Replication protects against hardware and datacenter failure. Backups protect against human mistakes, application bugs, and corruption.",
          "Point-in-Time Recovery (PITR):",
          "• Modern cloud databases combine full nightly base backups with continuous transaction log (WAL) archiving to durable object storage (S3/Blob).",
          "• If a disastrous DROP TABLE occurs at 10:32:15 AM, you can restore the base backup and replay transaction logs up to 10:32:14 AM with zero loss of prior transactions!",
          "Connection Pooling (Preventing Resource Starvation):",
          "• Each direct PostgreSQL connection spawns a separate OS process consuming 5-10 MB of RAM. If 5,000 serverless Lambda functions hit the DB simultaneously, the database crashes from connection starvation.",
          "• Connection Poolers (PgBouncer, AWS RDS Proxy) maintain a pool of warm database connections and multiplex thousands of client requests over a few dozen physical connections.",
          "Polyglot Persistence Blueprint (100 Million Users):",
          "• No single database engine solves all problems. Modern cloud architectures combine specialized engines:",
          "  - PostgreSQL / Aurora: Core financial ledger, orders, payment transactions (ACID, relationships).",
          "  - Amazon DynamoDB: User session state, shopping carts, rate-limiting tokens (sub-10ms key-value scale).",
          "  - Google Bigtable / Cassandra: Clickstream events, IoT telemetry, time-series metrics.",
          "  - MongoDB / Document: Product catalog with dynamic variant attributes.",
          "  - Amazon S3: PDF invoices, images, cold backup archives.",
        ],
        keyPoints: [
          "Replication synchronizes state; Backups + WAL archiving enable Point-in-Time Recovery (PITR).",
          "RPO (Recovery Point Objective) measures allowable data loss; RTO (Recovery Time Objective) measures allowable downtime.",
          "Connection Poolers (PgBouncer, RDS Proxy) protect databases from connection exhaustion during traffic surges.",
          "Polyglot Persistence uses the right database tool for the right job across the application ecosystem.",
        ],
        diagramType: "polyglot-persistence-stack",
        architectDecision:
          "Adopt Polyglot Persistence only when workload requirements genuinely diverge. Operating multiple database technologies introduces substantial operational complexity, separate backup strategies, and multi-system data synchronization challenges.",
        interviewQuestions: [
          {
            q: "A developer accidentally deletes a production customer table at 11:45 AM. How does Point-in-Time Recovery (PITR) restore the data without losing morning transactions?",
            a: "PITR uses a full snapshot (base backup) combined with continuous transaction log (WAL) archiving. The recovery process boots a fresh database instance from the most recent base backup (e.g. taken at midnight) and sequentially replays the archived WAL transaction logs, stopping at the exact timestamp 11:44:59 AM—one second before the accidental deletion occurred. All legitimate morning transactions up to that second are completely recovered.",
          },
        ],
      },
    ],
    []
  );

  const currentTopic = databaseTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < databaseTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : databaseTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 8 Real-World Database Failure Scenarios (Section 127 of Syllabus)
  const databaseGameScenarios = [
    {
      id: 1,
      title: "Event 1: Primary Database Host Experiences Motherboard Failure",
      context:
        "Your PostgreSQL database on AWS RDS Multi-AZ experiences an unrecoverable hardware crash on its primary node in Availability Zone A.",
      question: "What sequence of events restores service, and what is your data loss (RPO)?",
      options: [
        {
          id: "A",
          text: "RDS automatically detects the failed health check, flips the database DNS record to the synchronous standby in AZ-B, and resumes writes within 60-120 seconds with ZERO data loss (RPO = 0).",
          verdict: "Correct! Synchronous Multi-AZ Failover",
          explanation:
            "Because Multi-AZ uses synchronous physical block-level replication, the standby in AZ-B possesses all committed transactions. Failover is automatic via DNS flipping with zero data loss.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Restore the latest daily backup snapshot to a new instance, resulting in 12 hours of lost data.",
          verdict: "Incorrect & Severe Downtime",
          explanation:
            "Restoring from a backup snapshot is for disaster recovery, not high availability. Multi-AZ standby handles this automatically.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Event 2: Primary Crashes While Asynchronous Replica Lags by 10 Minutes",
      context:
        "A primary database crashes. You have an asynchronous read replica in a secondary region that is lagging by 10 minutes due to a heavy batch job.",
      question: "If you force an emergency failover to this replica right now, what is your RPO?",
      options: [
        {
          id: "A",
          text: "Up to 10 minutes of committed transactions are permanently lost (RPO = 10 minutes).",
          verdict: "Correct! Asynchronous Lag Reality",
          explanation:
            "In asynchronous replication, transactions committed on the primary during the lag window have not yet reached the replica. Promoting the replica means those 10 minutes of transactions are lost.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Zero data loss because cloud databases use magic consensus algorithms to recover missing logs.",
          verdict: "Incorrect",
          explanation:
            "If the primary hardware is dead and the log was not transmitted across the network, the data cannot be recovered on the replica.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Event 3: Junior Engineer Executes `DELETE FROM orders;` Without WHERE Clause",
      context:
        "At 14:15, a script accidentally deletes 2 million rows from the production orders table. Multi-AZ replication is enabled.",
      question: "Why does Multi-AZ replication fail to protect you, and how do you recover?",
      options: [
        {
          id: "A",
          text: "Multi-AZ replicated the destructive DELETE statement to the standby in 5 milliseconds. You must perform Point-in-Time Recovery (PITR) to restore state to 14:14:59.",
          verdict: "Correct! Replication ≠ Backup",
          explanation:
            "Replication faithfully duplicates all commands, including logical corruption and accidental drops! PITR replays base backup + WAL logs to the second prior to the incident.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Immediately failover to the Multi-AZ standby, which automatically filters out destructive DELETE queries.",
          verdict: "Incorrect & Dangerous",
          explanation:
            "Standbys do not inspect or filter SQL queries; they replicate physical block changes. The standby is also wiped.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Event 4: Database Server Hits 98% CPU Saturation During Traffic Surge",
      context:
        "Your database VM is pinned at 98% CPU. Profiling shows 85% of queries are read-only `SELECT` statements, and 15% are writes.",
      question: "What is the best immediate architectural horizontal scaling remedy?",
      options: [
        {
          id: "A",
          text: "Provision 2 Read Replicas and update application read queries to use the Read Replica endpoints.",
          verdict: "Correct! Read-Workload Offloading",
          explanation:
            "Since 85% of queries are reads, offloading them to read replicas immediately relieves CPU pressure on the primary writer node.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Migrate the entire relational database to MongoDB without changing application code.",
          verdict: "Incorrect",
          explanation: "Database migration takes months of architectural refactoring and does not resolve immediate production saturation.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Event 5: Database Query Latency Spikes From 2ms to 850ms (I/O Bottleneck)",
      context:
        "The CPU is only at 20%, but query latency has surged to 850ms. CloudWatch shows Disk Queue Depth is 64 and Buffer Pool Cache Hit Ratio has dropped to 65%.",
      question: "What is the root cause and optimal remediation?",
      options: [
        {
          id: "A",
          text: "The working set exceeds Buffer Pool RAM, forcing constant synchronous disk reads. Increase VM RAM (or tune indexes) to restore >99% cache hit ratio.",
          verdict: "Correct! Buffer Pool Starvation",
          explanation:
            "A 65% hit ratio means 35% of page requests trigger disk I/O. Because RAM is 10,000x faster than disk, cache misses saturate disk queues. Sizing RAM to fit the working set eliminates disk reads.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Upgrade to a 64-core CPU.",
          verdict: "Incorrect",
          explanation: "CPU utilization is only 20%. The bottleneck is disk I/O latency, not computational processing power.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      title: "Event 6: Orders Table Reaches 12 Terabytes, Exceeding Single Disk Performance",
      context:
        "Your single PostgreSQL orders table has reached 12 TB. Sequential queries are slow and index maintenance is causing prolonged lock contention.",
      question: "Which database architectural technique should you apply first?",
      options: [
        {
          id: "A",
          text: "Implement Table Partitioning (e.g. partition by month/year `orders_2026_q1`), enabling Partition Pruning and isolated index trees.",
          verdict: "Correct! Horizontal Table Partitioning",
          explanation:
            "Partitioning divides the giant table into smaller sub-tables. Queries filtering on date only scan the relevant partition (partition pruning), and maintenance tasks run independently per partition.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Delete 50% of customer orders randomly to free up disk space.",
          verdict: "Incorrect",
          explanation: "Deleting production order records violates financial compliance and business integrity.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      title: "Event 7: AWS US-East-1 Suffers a Catastrophic Regional Outage",
      context:
        "A hurricane causes total power and network loss across all 3 Availability Zones in us-east-1. Your business requires resuming service in us-west-2.",
      question: "Does an in-region Multi-AZ deployment keep you online?",
      options: [
        {
          id: "A",
          text: "No. Multi-AZ only protects against single-zone failure. You need Cross-Region Disaster Recovery (Aurora Global Database / Azure Failover Groups) in us-west-2.",
          verdict: "Correct! HA vs Regional DR",
          explanation:
            "Multi-AZ synchronous replication is confined to a single geographic region. When the entire region goes dark, only cross-region replicas or geo-backups can restore service.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Yes, because Multi-AZ automatically routes traffic to Europe when America fails.",
          verdict: "Incorrect",
          explanation: "Multi-AZ is strictly zonal within a single cloud region; it does not replicate across continents automatically.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      title: "Event 8: 10,000 Serverless Lambda Functions Connect to PostgreSQL Simultaneously",
      context:
        "A sudden viral marketing campaign triggers 10,000 concurrent AWS Lambda invocations. Each Lambda opens a direct PostgreSQL connection, causing database crash with 'FATAL: sorry, too many clients already'.",
      question: "What intermediate architectural layer resolves this connection exhaustion?",
      options: [
        {
          id: "A",
          text: "Deploy a Connection Pooler (AWS RDS Proxy or PgBouncer) to multiplex thousands of client requests over a fixed pool of warm database connections.",
          verdict: "Correct! Connection Pooling Architecture",
          explanation:
            "PostgreSQL allocates a dedicated OS process (~10 MB RAM) per connection. 10,000 connections exhaust memory and CPU scheduling. RDS Proxy pools and reuses connections efficiently.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Configure PostgreSQL `max_connections = 100,000` in `postgresql.conf`.",
          verdict: "Incorrect & Causes Out-Of-Memory Crash",
          explanation:
            "Setting max_connections to 100,000 causes the OS kernel to run out of RAM and collapse under process context-switching overhead.",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleGameAnswer = (scenarioId, optionId) => {
    const scenario = databaseGameScenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedOption = scenario.options.find((o) => o.id === optionId);
    const isCorrect = selectedOption?.isCorrect || false;

    setGameSelection(optionId);
    setGameHistory((prev) => {
      const alreadyAnswered = prev[scenarioId] !== undefined;
      if (!alreadyAnswered && isCorrect) {
        setGameScore((s) => s + 100);
      }
      return { ...prev, [scenarioId]: optionId };
    });
  };

  const nextGameScenario = () => {
    if (gameScenarioIndex < databaseGameScenarios.length - 1) {
      setGameScenarioIndex((prev) => prev + 1);
      setGameSelection(gameHistory[databaseGameScenarios[gameScenarioIndex + 1]?.id] || null);
    }
  };

  const prevGameScenario = () => {
    if (gameScenarioIndex > 0) {
      setGameScenarioIndex((prev) => prev - 1);
      setGameSelection(gameHistory[databaseGameScenarios[gameScenarioIndex - 1]?.id] || null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="databases"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Database AI"
        />

        {/* AI TUTOR ACCORDION DRAWER */}
        {showAiTutor && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Nova AI Cloud Database Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about CMU 15-445 Buffer Pools, Write-Ahead Logging (WAL), PostgreSQL MVCC, DynamoDB Single-Table Design, or Aurora 6-copy storage quorums.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`databases-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Database size={13} />
                <span>From SQL Tables to Globally Distributed Databases</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Relational, NoSQL & Distributed Databases
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                The stateful heart of cloud architecture. Master the Logical vs Physical view, B-trees, Buffer Pools, Write-Ahead Logging (WAL), MVCC, ACID isolation levels, Amazon Aurora, DynamoDB Single-Table design, Cosmos DB 5 consistency tiers, Sharding, and Point-in-Time Recovery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-[#f97316]">CMU 15-445</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Systems Theory Core
                </div>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-amber-400">12 Topics</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Databases Track
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOPIC SELECTION PILLS */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {databaseTopics.map((topic, index) => {
            const Icon = topic.icon;
            const isSelected = selectedTopic === index;

            return (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(index);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className={`flex shrink-0 items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-bold transition shadow-xs ${
                  isSelected
                    ? "border-[#f97316] bg-[#f97316] text-white shadow-md shadow-orange-500/20"
                    : "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:bg-orange-50/50"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-white" : "text-stone-500"} />
                <span>{topic.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN TOPIC CONTENT SECTION */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT 8 COLS: DEEP DIVE CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* TOPIC HEADER CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
                    <currentTopic.icon size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-orange-600">
                      Topic {topicNumber} • {currentTopic.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                      {currentTopic.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={previousTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Previous Topic"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <span className="font-mono text-xs font-bold text-stone-400 px-1">
                    {selectedTopic + 1} / {databaseTopics.length}
                  </span>
                  <button
                    onClick={nextTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Next Topic"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* SUMMARY BOX */}
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 mb-6 text-xs md:text-sm leading-relaxed text-stone-800 font-medium">
                <span className="font-bold text-orange-900 block mb-1">Architecture Summary:</span>
                {currentTopic.summary}
              </div>

              {/* CORE THEORY PARAGRAPHS */}
              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-stone-700">
                {currentTopic.theory.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* ARCHITECTURE DIAGRAM / VISUALIZATION CONTAINER */}
              <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-900 p-5 text-white shadow-inner">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow size={15} className="text-[#f97316]" />
                    <span className="font-mono text-xs font-bold text-stone-300">
                      System Diagram: {currentTopic.shortTitle}
                    </span>
                  </div>
                  <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 font-mono text-[10px] text-orange-300">
                    CMU 15-445 Architecture
                  </span>
                </div>

                {/* DIAGRAM RENDERER BASED ON TOPIC */}
                {currentTopic.diagramType === "db-logical-physical-stack" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3">
                      <div className="text-emerald-400 font-bold mb-1">LOGICAL VIEW (Application Developer)</div>
                      <div className="text-stone-300 text-[11px]">
                        SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id WHERE u.country = 'IN';
                      </div>
                      <div className="text-[10px] text-emerald-300/80 mt-1">
                        Declarative: Entities, Relations, Columns, Foreign Keys, Transactions
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓↓ Query Optimizer & Storage Manager Translation ↓↓</div>
                    <div className="rounded-xl border border-orange-500/40 bg-orange-950/30 p-3">
                      <div className="text-orange-400 font-bold mb-1">PHYSICAL VIEW (DBMS Engine Underneath)</div>
                      <div className="text-stone-300 text-[11px]">
                        Hash Join (Cost 142.1) → Bitmap Index Scan (users_country_idx) → Buffer Pool (Hit Ratio 99.4%) → WAL fsync
                      </div>
                      <div className="text-[10px] text-orange-300/80 mt-1">
                        Physical: 8KB Pages, Dirty Eviction, ARIES Log Sequence Numbers, Row-Level Locks
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "query-optimizer-pipeline" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center text-[11px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">1. SQL Parser</span>
                        <div className="text-[10px] text-stone-400">AST Tree & Syntax</div>
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-amber-400 font-bold">2. Rewriter</span>
                        <div className="text-[10px] text-stone-400">Views & Rules</div>
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-orange-500/40">
                        <span className="text-emerald-400 font-bold">3. Cost Optimizer</span>
                        <div className="text-[10px] text-stone-400">Stats & Join Orders</div>
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-blue-400 font-bold">4. Executor</span>
                        <div className="text-[10px] text-stone-400">Volcano Next() Engine</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-[10px] text-stone-300">
                      <span className="text-orange-400 font-bold">EXPLAIN Output Sample:</span><br/>
                      Hash Join (cost=21.50..78.90 rows=45 width=32)<br/>
                      &nbsp;&nbsp;Hash Cond: (orders.user_id = users.id)<br/>
                      &nbsp;&nbsp;→ Index Scan using orders_created_idx on orders (cost=0.29..45.10)<br/>
                      &nbsp;&nbsp;→ Hash (cost=14.20..14.20 rows=560)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Bitmap Heap Scan on users (cost=4.20..14.20)
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "buffer-pool-wal-flow" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="text-emerald-400 font-bold mb-1">Buffer Pool (RAM):</div>
                        <div className="text-stone-300">Contains 8 KB Page Frames</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Dirty pages kept in memory. LRU / CLOCK eviction frees clean or flushes dirty pages.
                        </div>
                      </div>
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="text-orange-400 font-bold mb-1">WAL (Write-Ahead Log):</div>
                        <div className="text-stone-300">Sequential Append Stream</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Log record fsynced to disk BEFORE transaction commit succeeds. Enables instant crash recovery.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-black/60 p-2 text-center text-[10px] text-stone-400">
                      Commit Invariant: [Transaction Update] → [Append to WAL Buffer] → [fsync WAL to Disk] → [Return Commit OK] → [Lazy Flush Pages to DB Disk]
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "btree-and-composite-structure" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-center">
                      <div className="text-amber-400 font-bold mb-1">B-Tree Node Search Traversal (O(log N)):</div>
                      <div className="text-stone-300 text-xs">
                        [ Root: 50 ]<br/>
                        &nbsp;&nbsp;↙&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘<br/>
                        [ 20 | 35 ]&nbsp;&nbsp;&nbsp;&nbsp;[ 65 | 80 ]<br/>
                        &nbsp;&nbsp;↙&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;↘&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↙&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;↘<br/>
                        Leaves: [10..19] ↔ [20..34] ↔ [35..49] ↔ [50..64] ↔ [65..79] ↔ [80..99]
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">Composite (customer_id, created_at):</span><br/>
                        Accelerates: WHERE customer_id = 123 AND created_at {'>'} '2026-01-01'
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-red-400 font-bold">Leftmost Prefix Failure:</span><br/>
                        CANNOT accelerate: WHERE created_at {'>'} '2026-01-01' alone!
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "isolation-anomalies-matrix" && (
                  <div className="overflow-x-auto text-[10px] font-mono">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-700 text-stone-400">
                          <th className="py-1.5">Isolation Level</th>
                          <th className="py-1.5">Dirty Read</th>
                          <th className="py-1.5">Non-Repeatable Read</th>
                          <th className="py-1.5">Phantom Read</th>
                          <th className="py-1.5">Serialization Anomaly</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800 text-stone-300">
                        <tr>
                          <td className="py-1.5 text-stone-400">Read Uncommitted</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-orange-400 font-bold">Read Committed (Default)</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-amber-400 font-bold">Repeatable Read</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented*</td>
                          <td className="text-red-400 font-bold">Allowed (Write-Skew)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-emerald-400 font-bold">Serializable</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400 font-bold">Prevented (Abort on Conflict)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {currentTopic.diagramType === "mvcc-snapshot-tuples" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-stone-800 p-3 border border-stone-700">
                      <div className="text-orange-400 font-bold mb-1">PostgreSQL Tuple Versioning:</div>
                      <div className="text-stone-300 text-[11px]">
                        Tuple 1: [xmin: 100, xmax: 105, balance: ₹100] → (expired/superseded)<br/>
                        Tuple 2: [xmin: 105, xmax: 0,   balance: ₹50]  → (currently visible)
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-emerald-400 font-bold">Readers Never Block Writers:</span> Readers view the snapshot matching their start timestamp.
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-amber-400 font-bold">Autovacuum Daemons:</span> Reclaim expired dead tuples and update free-space maps.
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "primary-replica-sync-async" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-emerald-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-emerald-400 font-bold">Synchronous Standby (Multi-AZ HA)</span>
                        <div className="text-stone-400 text-[10px]">Write waits for standby ACK before Commit OK</div>
                      </div>
                      <span className="text-xs text-emerald-300 font-bold">RPO = 0 (Zero Data Loss)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-amber-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">Asynchronous Read Replica (Read Scaling)</span>
                        <div className="text-stone-400 text-[10px]">WAL streams in background; primary commits instantly</div>
                      </div>
                      <span className="text-xs text-amber-300 font-bold">RPO = Replication Lag</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "aurora-storage-quorum" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-orange-500/40 text-center">
                      <div className="text-orange-400 font-bold mb-1">Amazon Aurora 6-Way Quorum Consensus:</div>
                      <div className="text-stone-300 text-[11px]">
                        AZ-A: [Copy 1] [Copy 2] &nbsp;|&nbsp; AZ-B: [Copy 3] [Copy 4] &nbsp;|&nbsp; AZ-C: [Copy 5] [Copy 6]
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        Write Quorum: 4 of 6 ACKs &nbsp;|&nbsp; Read Quorum: 3 of 6 ACKs
                      </div>
                    </div>
                    <div className="text-stone-400 text-[10px] text-center">
                      Survives loss of an entire AZ (2 copies down) plus an additional node crash (3 copies down) without any read interruption!
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "nosql-four-models-quadrant" && (
                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-orange-500/30">
                      <span className="text-orange-400 font-bold">KEY-VALUE:</span> DynamoDB / Redis<br/>
                      <span className="text-stone-400">Access: Key → Blob | O(1) Lookup</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-blue-500/30">
                      <span className="text-blue-400 font-bold">DOCUMENT:</span> MongoDB / Cosmos DB<br/>
                      <span className="text-stone-400">Access: Nested JSON/BSON Trees</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-emerald-500/30">
                      <span className="text-emerald-400 font-bold">WIDE-COLUMN:</span> Bigtable / Cassandra<br/>
                      <span className="text-stone-400">Access: Sorted Row Key + Column Families</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-purple-500/30">
                      <span className="text-purple-400 font-bold">GRAPH:</span> Neptune / Neo4j<br/>
                      <span className="text-stone-400">Access: Vertices, Edges, Traversal</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "cosmos-consistency-spectrum" && (
                  <div className="space-y-1.5 font-mono text-[10px]">
                    <div className="rounded-lg bg-emerald-950/40 border border-emerald-500/40 p-2 flex justify-between">
                      <span className="font-bold text-emerald-300">1. Strong:</span>
                      <span>Linearizable, zero stale reads, highest latency</span>
                    </div>
                    <div className="rounded-lg bg-blue-950/40 border border-blue-500/40 p-2 flex justify-between">
                      <span className="font-bold text-blue-300">2. Bounded Staleness:</span>
                      <span>Lags by at most K versions or T seconds</span>
                    </div>
                    <div className="rounded-lg bg-orange-950/40 border border-orange-500/40 p-2 flex justify-between">
                      <span className="font-bold text-orange-300">3. Session (Default):</span>
                      <span>Read-your-own-writes per user session token</span>
                    </div>
                    <div className="rounded-lg bg-amber-950/40 border border-amber-500/40 p-2 flex justify-between">
                      <span className="font-bold text-amber-300">4. Consistent Prefix:</span>
                      <span>Never see out-of-order updates, may lag</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 flex justify-between">
                      <span className="font-bold text-stone-300">5. Eventual:</span>
                      <span>Lowest latency, highest throughput, eventual convergence</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "sharding-scatter-gather" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-2.5">
                        <div className="text-emerald-400 font-bold mb-1">Targeted Shard Routing:</div>
                        <div className="text-stone-300">WHERE user_id = 101</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Hash(101) → routes directly to Shard 3. Fast single-hop lookup.
                        </div>
                      </div>
                      <div className="rounded-xl border border-red-500/40 bg-red-950/20 p-2.5">
                        <div className="text-red-400 font-bold mb-1">Scatter-Gather Broadcast:</div>
                        <div className="text-stone-300">WHERE email = 'sam@...'</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Coordinator broadcasts to ALL shards and merges results in RAM. Slow!
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "polyglot-persistence-stack" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-orange-400 font-bold">PostgreSQL / Aurora:</span>
                      <span className="text-stone-300">Orders, Payments, Ledgers (ACID & Constraints)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-blue-400 font-bold">AWS DynamoDB:</span>
                      <span className="text-stone-300">Sessions, Shopping Carts, Tokens (Sub-10ms Scale)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-emerald-400 font-bold">Google Cloud Bigtable:</span>
                      <span className="text-stone-300">Clickstream, IoT Telemetry, Time-Series Logs</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-purple-400 font-bold">Amazon S3 / Azure Blob:</span>
                      <span className="text-stone-300">Product Images, PDF Invoices, WAL PITR Backups</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ARCHITECTURAL DECISION CALLOUT */}
              <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                    Lead Database Architect Invariant:
                  </span>
                </div>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {currentTopic.architectDecision}
                </p>
              </div>

              {/* INTERVIEW QUESTIONS ACCORDION */}
              <div className="mt-6 border-t border-[#e7e3da] pt-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                  <HelpCircle size={14} className="text-orange-600" />
                  <span>Senior Database Systems Interview Challenge:</span>
                </h3>

                {currentTopic.interviewQuestions.map((qa, idx) => (
                  <div key={idx} className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4">
                    <div className="font-bold text-xs md:text-sm text-[#18181b] mb-2 flex items-start gap-2">
                      <span className="text-orange-600 font-mono font-black">Q:</span>
                      <span>{qa.q}</span>
                    </div>
                    <div className="text-xs md:text-sm leading-relaxed text-stone-700 pl-6 border-l-2 border-orange-400">
                      <span className="font-bold text-stone-900 block mb-1">Architectural Answer:</span>
                      {qa.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE DATABASE WORKLOAD MATCHER LAB */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sliders size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Database Workload Matcher
                  </h3>
                  <p className="text-xs text-stone-500">
                    Specify data model, transaction scope, query patterns, and scale to identify the optimal database engine.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    1. Data Model:
                  </label>
                  <select
                    value={matcherModel}
                    onChange={(e) => setMatcherModel(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="relational">Relational (Tables, SQL, Foreign Keys)</option>
                    <option value="key-value">Key-Value (Opaque items, ultra-fast lookup)</option>
                    <option value="document">Document (Nested JSON/BSON structures)</option>
                    <option value="wide-column">Wide-Column (Time-series, sparse matrix)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    2. Transaction Scope:
                  </label>
                  <select
                    value={matcherTxScope}
                    onChange={(e) => setMatcherTxScope(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="acid-multi">ACID across multiple tables/entities</option>
                    <option value="single-row">Atomic single-row mutations only</option>
                    <option value="eventual">Eventual consistency tolerated</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    3. Primary Access Pattern:
                  </label>
                  <select
                    value={matcherQueryPattern}
                    onChange={(e) => setMatcherQueryPattern(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="complex-sql">Complex JOINs, Aggregations, Ad-hoc SQL</option>
                    <option value="key-lookup">Exact Key / Partition Lookups</option>
                    <option value="range-scan">Sequential Time-Series Range Scans</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    4. Scale Horizon:
                  </label>
                  <select
                    value={matcherScale}
                    onChange={(e) => setMatcherScale(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="vertical-ha">Single-node primary with Multi-AZ Standby</option>
                    <option value="horizontal-sharded">Horizontally sharded petabyte cluster</option>
                    <option value="global-multi-region">Global Multi-Region Active-Active</option>
                  </select>
                </div>
              </div>

              {/* RECOMMENDED OUTCOME CARD */}
              <div className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/80 p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-orange-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-800">
                      Recommended Database Engine:
                    </span>
                    <span className="rounded-full bg-orange-600 px-3 py-0.5 text-xs font-bold text-white">
                      {recommendedDatabase.title}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-500">
                    {recommendedDatabase.category}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-2 mb-3 text-xs font-mono">
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">BEST FOR:</span>
                    <span className="font-bold text-stone-800">{recommendedDatabase.bestFor}</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">SYSTEM INVARIANTS:</span>
                    <span className="font-bold text-stone-800">{recommendedDatabase.invariants}</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {recommendedDatabase.architecture}
                </p>
              </div>
            </div>

            {/* INTERACTIVE BUFFER POOL & CACHE HIT SIMULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Gauge size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Buffer Pool & Cache Hit Ratio Simulator (CMU 15-445)
                  </h3>
                  <p className="text-xs text-stone-500">
                    Simulate how RAM buffer pool sizing impacts disk I/O, cache hit ratios, and average query latency.
                  </p>
                </div>
              </div>

              {/* SLIDERS */}
              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Total Database Size:</span>
                    <span className="font-bold text-orange-600">{dbDataSizeGb} GB</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={dbDataSizeGb}
                    onChange={(e) => setDbDataSizeGb(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Active Working Set:</span>
                    <span className="font-bold text-blue-600">{workingSetPct}% ({bufferPoolMetrics.activeWorkingSetGb} GB)</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={workingSetPct}
                    onChange={(e) => setWorkingSetPct(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Buffer Pool RAM:</span>
                    <span className="font-bold text-emerald-600">{bufferPoolRamGb} GB</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="256"
                    step="8"
                    value={bufferPoolRamGb}
                    onChange={(e) => setBufferPoolRamGb(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>
              </div>

              {/* SIMULATION RESULTS */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Cache Hit Ratio:
                  </span>
                  <div className={`text-2xl font-black font-mono ${bufferPoolMetrics.hitRatio > 95 ? "text-emerald-700" : "text-red-600"}`}>
                    {bufferPoolMetrics.hitRatio}%
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {bufferPoolMetrics.hitRatio > 95 ? "Healthy memory-resident set" : "High disk thrashing warning!"}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Average Query Latency:
                  </span>
                  <div className="text-2xl font-black text-stone-800 font-mono">
                    {bufferPoolMetrics.avgLatencyMs} ms
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">RAM (100ns) vs Disk (1.2ms)</span>
                </div>

                <div className="rounded-2xl border border-orange-300 bg-orange-500 text-white p-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 text-orange-100">
                    Disk IOPS Required:
                  </span>
                  <div className="text-2xl font-black font-mono">
                    ~{bufferPoolMetrics.estimatedIopsNeeded} IOPS
                  </div>
                  <span className="text-[10px] font-mono text-orange-200">
                    {bufferPoolMetrics.isMemoryConstrained ? "Requires high provisioned EBS IOPS" : "Baseline disk I/O sufficient"}
                  </span>
                </div>
              </div>
            </div>

            {/* DATABASE CRISIS INCIDENT SIMULATOR GAME */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Database Crisis Simulator: Production GameDay
                    </h3>
                    <p className="text-xs text-stone-500">
                      Triage 8 production database disasters. Test your understanding of failover, RPO, and PITR.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1 text-center font-mono text-xs">
                    <span className="text-stone-400 block text-[9px]">TOTAL SCORE</span>
                    <span className="font-bold text-[#f97316]">{gameScore} pts</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevGameScenario}
                      disabled={gameScenarioIndex === 0}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <span className="font-mono text-xs font-bold text-stone-500 px-2">
                      {gameScenarioIndex + 1} / {databaseGameScenarios.length}
                    </span>
                    <button
                      onClick={nextGameScenario}
                      disabled={gameScenarioIndex === databaseGameScenarios.length - 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* CURRENT SCENARIO CARD */}
              {(() => {
                const scenario = databaseGameScenarios[gameScenarioIndex];
                const answered = gameHistory[scenario.id];

                return (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-800 uppercase tracking-wider mb-1">
                        <AlertTriangle size={15} />
                        <span>{scenario.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
                        {scenario.context}
                      </p>
                    </div>

                    <div className="font-bold text-sm text-[#18181b]">
                      {scenario.question}
                    </div>

                    {/* OPTIONS */}
                    <div className="space-y-3">
                      {scenario.options.map((option) => {
                        const isSelected = answered === option.id;
                        let btnStyle = "border-stone-200 bg-white hover:border-orange-300 hover:bg-orange-50/30 text-stone-800";

                        if (answered) {
                          if (option.isCorrect) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400";
                          } else if (isSelected && !option.isCorrect) {
                            btnStyle = "border-red-500 bg-red-50 text-red-950 font-bold ring-2 ring-red-400";
                          } else {
                            btnStyle = "border-stone-200 bg-stone-50 text-stone-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={option.id}
                            onClick={() => handleGameAnswer(scenario.id, option.id)}
                            className={`w-full text-left rounded-2xl border p-4 text-xs md:text-sm transition-all ${btnStyle}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">
                                {option.id}
                              </span>
                              <div className="flex-1">
                                <div>{option.text}</div>
                                {answered && (
                                  <div className="mt-2 text-xs font-medium border-t border-stone-200/60 pt-2">
                                    <span className={option.isCorrect ? "text-emerald-700 font-bold" : "text-red-700 font-bold"}>
                                      {option.verdict} —{" "}
                                    </span>
                                    <span className="text-stone-600">{option.explanation}</span>
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
          </div>

          {/* RIGHT 4 COLS: SYLLABUS OUTLINE, KEY INVARIANTS, QUICK JUMP */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* SYLLABUS DIRECTORY CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <BookOpen size={16} className="text-orange-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                  Module 5 Topic Index
                </h3>
              </div>

              <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {databaseTopics.map((topic, index) => {
                  const isSelected = selectedTopic === index;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setSelectedTopic(index);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`w-full text-left rounded-xl px-3 py-2 text-xs font-medium transition flex items-center justify-between ${
                        isSelected
                          ? "bg-orange-500 text-white font-bold shadow-xs"
                          : "text-stone-600 hover:bg-orange-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{topic.shortTitle}</span>
                      <span className="font-mono text-[10px] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SYSTEMS ARCHITECTURE INVARIANTS CHEAT SHEET */}
            <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-3 mb-4">
                <ShieldCheck size={18} className="text-[#f97316]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-orange-400">
                  Core Database Invariants
                </h3>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-stone-300">
                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">WAL Before Commit</span>
                  Log records must be fsynced to disk before transaction commit succeeds. Enables crash recovery.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">MVCC Invariant</span>
                  Readers never block writers, and writers never block readers. Snapshots prevent read lock contention.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Replication ≠ Backup</span>
                  Replication duplicates drops and ransomware in 5ms. Always enable WAL Point-in-Time Recovery (PITR).
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">NoSQL Access Patterns</span>
                  Never design NoSQL around entities; design strictly around target read/write query patterns.
                </div>
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">
                Next in the Program:
              </h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 6: Cloud Security, Identity & Zero-Trust Architecture (IAM, KMS, OAuth2 & Network Isolation).
              </p>
              <button
                disabled
                className="w-full rounded-xl bg-stone-100 py-2.5 text-xs font-bold text-stone-400 cursor-not-allowed"
              >
                Module 6 Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
