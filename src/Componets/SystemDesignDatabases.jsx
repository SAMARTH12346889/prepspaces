import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Database,
  Layers,
  Network,
  Cpu,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  GitBranch,
  Server,
  Zap,
  ShieldCheck,
  Activity,
  Sliders,
  HelpCircle,
  FolderTree,
  Scale,
  RefreshCw,
  Clock,
  Send,
  Boxes,
  Table,
  Search,
  Key,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  PolyglotStorageDiagram,
  RelationalErdDiagram,
  BTreeIndexTraversalDiagram,
  DocumentEmbedVsReferenceDiagram,
  PartitioningVsShardingDiagram,
  VisualDiagramComponentModule5,
} from "./SystemDesignDatabasesDiagrams";

export default function SystemDesignDatabases() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("lessons");
  const [activeLesson, setActiveLesson] = useState("5.1");
  const [expandedQa, setExpandedQa] = useState({});

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 1: DATABASE PARADIGM SELECTOR & WORKLOAD MATRIX
  // ---------------------------------------------------------------------------
  const [workloadPrefs, setWorkloadPrefs] = useState({
    complexJoins: "high", // 'high' | 'medium' | 'none'
    acidImportance: "critical", // 'critical' | 'eventual'
    schemaFlexibility: "rigid", // 'rigid' | 'polymorphic'
    readLatencyReq: "standard", // 'standard' (5-20ms) | 'submillisecond' (<1ms)
    relationshipDepth: "low", // 'low' (1-2 hops) | 'deep' (graph traversal)
    writeVolume: "moderate", // 'moderate' | 'massive_distributed'
  });

  const recommendedDb = useMemo(() => {
    if (workloadPrefs.readLatencyReq === "submillisecond") {
      return {
        name: "In-Memory Key-Value (Redis / Dragonfly)",
        rationale: "Sub-millisecond latency is the defining constraint. Redis keeps the entire active working set in RAM with single-threaded event loop execution.",
        badge: "Ultra-Fast Caching",
        color: "border-rose-500 bg-rose-50 text-rose-950",
      };
    }
    if (workloadPrefs.relationshipDepth === "deep") {
      return {
        name: "Graph Database (Neo4j / Amazon Neptune)",
        rationale: "Deep multi-hop relationship traversals (e.g. skill prerequisite trees, social graphs) are executed via index-free adjacency without expensive recursive SQL joins.",
        badge: "Graph Traversal",
        color: "border-stone-600 bg-stone-100 text-stone-900",
      };
    }
    if (workloadPrefs.writeVolume === "massive_distributed" && workloadPrefs.acidImportance === "eventual") {
      return {
        name: "Distributed Wide-Column (Apache Cassandra / ScyllaDB)",
        rationale: "High-throughput linear write scaling partitioned across nodes, designed specifically for known query access patterns.",
        badge: "High-Volume Writes",
        color: "border-amber-600 bg-amber-50 text-amber-950",
      };
    }
    if (workloadPrefs.schemaFlexibility === "polymorphic" && workloadPrefs.complexJoins === "none") {
      return {
        name: "Document Database (MongoDB / DynamoDB)",
        rationale: "Self-contained hierarchical documents with flexible schemas. Ideal for content catalogs and bounded aggregates read in single operations.",
        badge: "Document Store",
        color: "border-emerald-600 bg-emerald-50 text-emerald-950",
      };
    }
    return {
      name: "Relational Database (PostgreSQL 16+)",
      rationale: "Strong ACID guarantees, rich indexing (B-tree, GIN, BRIN), powerful joins, check constraints, foreign keys, and relational integrity. The gold standard starting point.",
      badge: "Relational Core (Default)",
      color: "border-orange-500 bg-orange-50 text-orange-950",
    };
  }, [workloadPrefs]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 2: B-TREE VS SEQUENTIAL SCAN COST ESTIMATOR
  // ---------------------------------------------------------------------------
  const [tableRows, setTableRows] = useState(1000000); // 1M rows
  const [selectivityPct, setSelectivityPct] = useState(0.1); // 0.1% matches
  const [cacheHitRatio, setCacheHitRatio] = useState(85); // 85% cache hit

  const queryCostResults = useMemo(() => {
    const matchingRows = Math.max(1, Math.round((tableRows * selectivityPct) / 100));
    // Assume 80 rows per 8KB Postgres table page
    const totalPages = Math.max(1, Math.round(tableRows / 80));
    // Sequential scan reads all pages
    const seqScanPageReads = totalPages;
    // B-tree lookup: log100(tableRows) depth ~ 3 to 4 pages + 1 page read per matching row (worst-case unclustered)
    const btreeDepth = Math.max(2, Math.ceil(Math.log(tableRows) / Math.log(100)));
    const indexPages = Math.round(matchingRows / 200) + btreeDepth;
    const heapPages = Math.min(totalPages, matchingRows);
    const indexScanTotalPages = indexPages + heapPages;

    // Time estimate: cache hit is ~0.005ms, disk SSD read is ~0.1ms
    const avgPageCost = (cacheHitRatio / 100) * 0.005 + ((100 - cacheHitRatio) / 100) * 0.08;
    const seqScanTimeMs = (seqScanPageReads * avgPageCost).toFixed(1);
    const indexScanTimeMs = (indexScanTotalPages * avgPageCost).toFixed(2);
    const speedupFactor = Math.max(1, Math.round(seqScanTimeMs / Math.max(0.01, indexScanTimeMs)));

    return {
      matchingRows,
      totalPages,
      btreeDepth,
      seqScanTimeMs,
      indexScanTimeMs,
      speedupFactor,
      plannerChoice: indexScanTotalPages < seqScanPageReads * 0.6 ? "Index Scan" : "Sequential Scan",
    };
  }, [tableRows, selectivityPct, cacheHitRatio]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 3: COMPOSITE INDEX MATCHER: (user_id, status, enrolled_at)
  // ---------------------------------------------------------------------------
  const [queryFilters, setQueryFilters] = useState({
    hasUserId: true,
    hasStatus: true,
    hasEnrolledAt: false,
    orderEnrolledAt: true,
  });

  const indexMatchAnalysis = useMemo(() => {
    // Composite index: (user_id, status, enrolled_at DESC)
    if (!queryFilters.hasUserId) {
      return {
        matched: false,
        scanType: "Sequential Scan (Index Ignored)",
        explanation:
          "Crucial Rule: B-trees are hierarchical from left to right. Because the query does NOT filter on the leading column 'user_id', PostgreSQL cannot traverse the root or branch pages directly. It will fall back to a full table sequential scan.",
        color: "text-rose-700 bg-rose-50 border-rose-200",
      };
    }
    if (queryFilters.hasUserId && queryFilters.hasStatus && queryFilters.orderEnrolledAt) {
      return {
        matched: true,
        scanType: "Index Scan (Optimal B-tree Pipeline)",
        explanation:
          "Perfect Match! The query filters on the first two prefix keys ('user_id' and 'status') and relies on the third column ('enrolled_at DESC') for zero-cost ordering without an explicit Sort node in EXPLAIN.",
        color: "text-emerald-800 bg-emerald-50 border-emerald-200",
      };
    }
    if (queryFilters.hasUserId && !queryFilters.hasStatus) {
      return {
        matched: true,
        scanType: "Index Scan (Prefix Match)",
        explanation:
          "Valid Prefix Match. PostgreSQL traverses the index using 'user_id'. However, since 'status' is skipped, any subsequent condition on 'enrolled_at' acts as a secondary filter rather than an index seek.",
        color: "text-amber-800 bg-amber-50 border-amber-200",
      };
    }
    return {
      matched: true,
      scanType: "Bitmap Index Scan",
      explanation:
        "Partial Index Match. The leading column 'user_id' satisfies the root index probe; PostgreSQL constructs an in-memory TID bitmap to fetch the resulting table rows.",
      color: "text-orange-800 bg-orange-50 border-orange-200",
    };
  }, [queryFilters]);

  // ---------------------------------------------------------------------------
  // QUIZ STATE (9 QUESTIONS VERBATIM)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. Why is an enrollment table useful in a relational learning platform?",
      options: [
        "It removes the need for user identifiers",
        "It represents the many-to-many relationship between students and courses",
        "It guarantees every query uses an index",
      ],
      correct: 1,
      explanation:
        "Students can enroll in multiple courses, and courses have multiple students. A junction table (enrollments) models this many-to-many relationship and holds relationship-specific lifecycle attributes (enrolled_at, status, expiration).",
    },
    {
      id: 2,
      question: "2. What is the main purpose of a foreign key?",
      options: [
        "Guarantee the fastest possible query",
        "Enforce a relationship with referenced data",
        "Automatically shard a table",
      ],
      correct: 1,
      explanation:
        "Foreign keys enforce referential integrity at the database layer. They ensure that child records cannot reference nonexistent parent records and prevent accidental deletion of parents with dependent children.",
    },
    {
      id: 3,
      question: "3. Which dependency is primarily addressed by 2NF?",
      options: [
        "An attribute depending on only part of a composite candidate key",
        "A query with no index",
        "A network request that times out",
      ],
      correct: 0,
      explanation:
        "Second Normal Form (2NF) requires 1NF and ensures that no non-prime attribute depends on only part of a composite candidate key (eliminating partial functional dependencies).",
    },
    {
      id: 4,
      question: "4. When is embedding data in a document often useful?",
      options: [
        "When related bounded data is frequently read together",
        "Whenever the data has any relationship at all",
        "When every query must be a relational join",
      ],
      correct: 0,
      explanation:
        "Embedding data within a document is ideal when the child dataset is strictly bounded (does not grow indefinitely) and is consistently read in a single operational access alongside the parent document.",
    },
    {
      id: 5,
      question: "5. What is a significant cost of adding too many indexes?",
      options: [
        "Indexes eliminate unique constraints",
        "Every insert and relevant update must maintain affected indexes",
        "The database can no longer execute joins",
      ],
      correct: 1,
      explanation:
        "Indexes are not free: every INSERT, UPDATE, and DELETE statement must synchronously update the B-tree nodes of all corresponding indexes, consuming CPU, disk I/O, and buffer memory.",
    },
    {
      id: 6,
      question: "6. Which PostgreSQL index type is commonly used for B-tree-supported equality, range, and ordering queries?",
      options: ["B-tree", "GIN only", "BRIN only"],
      correct: 0,
      explanation:
        "B-tree is the default and most widely used index type in PostgreSQL, supporting =, <, <=, >, >=, and ORDER BY queries efficiently in logarithmic time.",
    },
    {
      id: 7,
      question: "7. Why does an index beginning with user_id and then status often poorly support filtering by status alone?",
      options: [
        "A B-tree cannot store text",
        "The leading index column does not match that filter pattern",
        "Composite indexes cannot contain more than two columns",
      ],
      correct: 1,
      explanation:
        "B-trees are sorted by their leading column first. If a query only filters by the second column (status), the database cannot traverse the index tree hierarchy and usually resorts to a full sequential table scan.",
    },
    {
      id: 8,
      question: "8. What does EXPLAIN ANALYZE do in PostgreSQL?",
      options: [
        "Only parses SQL without executing it",
        "Executes the statement and reports actual execution statistics along with the plan",
        "Automatically creates every missing index",
      ],
      correct: 1,
      explanation:
        "While EXPLAIN only displays the optimizer's estimated plan, EXPLAIN ANALYZE actually executes the query, recording actual wall-clock execution times, memory usage, buffer hits, and actual rows processed.",
    },
    {
      id: 9,
      question: "9. What is the difference between replication and sharding?",
      options: [
        "Replication maintains copies; sharding distributes data across partitions or nodes",
        "They are identical techniques",
        "Sharding is the process of creating SQL indexes",
      ],
      correct: 0,
      explanation:
        "Replication copies the same data across multiple nodes for fault tolerance and read scaling. Sharding partitions disjoint subsets of data across different nodes to scale write capacity and memory.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let count = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) count += 1;
    });
    return count;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // ---------------------------------------------------------------------------
  // CAPSTONE PROJECT INTERACTIVE PROGRESS CHECKLIST (0/9)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    erd: false,
    sqlSchema: false,
    sevenQueries: false,
    normalizationExp: false,
    nosqlCompare: false,
    indexFivePatterns: false,
    explainAnalyzeBenchmarks: false,
    integrityTests: false,
    adrReport: false,
  });

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  const toggleChecklistItem = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ---------------------------------------------------------------------------
  // SENIOR SYSTEMS ENGINEERING Q&A DATA
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "How do you detect and fix the infamous N+1 query problem?",
      context: "A course lesson page executes 1 query for the course, then 50 separate SQL queries inside a loop for each lesson's progress.",
      answer:
        "The N+1 problem occurs when an application retrieves parent records in one query and then fires N separate child queries. Fix it using: 1) SQL JOIN or `WHERE id IN (...)` batch queries; 2) In Node.js/GraphQL, use DataLoader which batches and de-duplicates keys within a single event loop tick; 3) In ORMs (Prisma, TypeORM, Hibernate), use eager loading (`include:` or `JOIN FETCH`). This reduces database round-trips from 51 to 1 or 2.",
    },
    {
      id: "qa-2",
      title: "Why does PostgreSQL accumulate index bloat, and how does VACUUM work?",
      context: "A high-write table becomes slow over time despite having appropriate indexes.",
      answer:
        "PostgreSQL uses Multi-Version Concurrency Control (MVCC). When a row is updated or deleted, the old version is not overwritten immediately; it is marked dead. Dead tuple pointers remain in B-tree indexes until reclaimed by AUTOVACUUM. If autovacuum cannot keep up with high write frequency, index bloat occurs (indexes occupy multiple gigabytes of stale disk pages). Fix by tuning autovacuum aggressiveness, running `REINDEX CONCURRENTLY`, or utilizing HOT (Heap-Only Tuples) optimization.",
    },
    {
      id: "qa-3",
      title: "How do you perform zero-downtime schema migrations on a 50M-row production table?",
      context: "Adding a NOT NULL column or new index to a live table without acquiring an exclusive table lock.",
      answer:
        "Never run `CREATE INDEX` or `ALTER TABLE ADD COLUMN NOT NULL` directly on huge production tables. 1) Use `CREATE INDEX CONCURRENTLY` so reads and writes continue unimpeded. 2) To add a column with a default: in modern Postgres (11+), adding a column with a constant default is instantaneous (catalog-only update). 3) For complex column rewrites, use the expand-contract pattern: add new column as nullable, backfill asynchronously in batches, deploy code that dual-writes, validate, then drop old column.",
    },
    {
      id: "qa-4",
      title: "When should you choose a UUID vs BIGINT Auto-Incrementing Primary Key?",
      context: "Deciding the primary key strategy for PrepSpaces users and submissions.",
      answer:
        "BIGINT Identity columns are 8 bytes, sequential, cache-friendly, and maintain optimal B-tree page packing (appends always land on the rightmost leaf page). Random UUIDv4 is 16 bytes, causes severe B-tree page fragmentation (random page splits across disk), and bloats memory buffers. If you need client-generated unguessable IDs, use UUIDv7 (time-ordered sequential UUID) or ULID. They combine 128-bit uniqueness with chronological B-tree insert clustering.",
    },
    {
      id: "qa-5",
      title: "How do you safely cache database queries in Redis without stale read bugs?",
      context: "Caching course catalog responses in Redis with Cache-Aside vs Write-Through.",
      answer:
        "Use Cache-Aside with short TTLs and explicit cache invalidation. When a course is updated: 1) Commit the transaction to PostgreSQL; 2) Delete the corresponding key in Redis (`DEL course:101:summary`). Deleting is superior to updating because it prevents race conditions where an old write overwrites a newer cached value. If network partitions prevent cache invalidation, fallback TTLs (e.g. 5 minutes) guarantee bounded staleness.",
    },
    {
      id: "qa-6",
      title: "What are the real-world trade-offs of PostgreSQL Read Replicas vs Sharding?",
      context: "PrepSpaces reads are 90% of traffic, writes are 10%.",
      answer:
        "Do not shard for read-heavy workloads! Sharding introduces immense operational complexity (distributed queries, two-phase commits, rebalancing). Instead, deploy 2 to 3 PostgreSQL Read Replicas with streaming replication behind PgBouncer. Direct write queries (INSERT/UPDATE) to the primary node, and route read queries (SELECT) to replicas. Address replication lag (typically <50ms) using session sticky routing (read-your-own-writes).",
    },
  ];

  // ---------------------------------------------------------------------------
  // 14 LESSONS COMPREHENSIVE CURRICULUM
  // ---------------------------------------------------------------------------
  const lessons = [
    {
      id: "5.1",
      week: "Week 1",
      title: "Lesson 5.1 · What is a database management system?",
      duration: "3 hours",
      summary:
        "A Database Management System (DBMS) stores, retrieves, and manages data with explicit mechanisms for querying, integrity, concurrency, and recovery. Explore how storage fits into modern system topology.",
      diagram: "polyglot-storage",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            A <strong>Database Management System (DBMS)</strong> is the software responsible for managing structured persistent data,
            enforcing ACID guarantees, executing query optimization, managing concurrency control, and ensuring durability across server crashes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
              <strong className="text-orange-950 block mb-1">PostgreSQL & MySQL</strong>
              <span className="text-xs text-stone-600">Relational DBMS with strong SQL, strict schema enforcement, ACID transactions, and extensible index engines.</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <strong className="text-emerald-950 block mb-1">MongoDB & DynamoDB</strong>
              <span className="text-xs text-stone-600">Document stores utilizing JSON/BSON structures, optimized for hierarchical aggregates and flexible schemas.</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
              <strong className="text-rose-950 block mb-1">Redis & Dragonfly</strong>
              <span className="text-xs text-stone-600">In-memory key-value data structure servers providing sub-millisecond lookups, caching, rate limiting, and pub/sub.</span>
            </div>
          </div>
          <p>
            The first design principle taught in CMU 15-445 is: <strong>Understand the data and queries before choosing the storage technology</strong>.
            Do not introduce multiple database systems without clear workload evidence, as every additional store introduces operational and consistency overhead.
          </p>
        </div>
      ),
    },
    {
      id: "5.2",
      week: "Week 1",
      title: "Lesson 5.2 · Relational databases and the relational model",
      duration: "3.5 hours",
      summary:
        "Relations, rows, columns, and why single-table designs suffer from update, insertion, and deletion anomalies. Primary keys, foreign keys, 1:1, 1:N, and N:M relationships.",
      diagram: "relational-erd",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            A <strong>relational database</strong> organizes data into mathematical relations (tables).
            If an application puts students, courses, lessons, and grades into a single flat table, it immediately creates three classic anomalies:
          </p>
          <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 space-y-2 text-xs">
            <div><strong className="text-rose-900">1. Update Anomaly:</strong> Renaming a course requires updating thousands of student enrollment rows. Missing one causes data corruption.</div>
            <div><strong className="text-rose-900">2. Insertion Anomaly:</strong> A new course cannot be created until at least one student enrolls in it if the table requires student keys.</div>
            <div><strong className="text-rose-900">3. Deletion Anomaly:</strong> Deleting the last enrolled student accidentally deletes the entire course curriculum definition.</div>
          </div>
          <p>
            Relational modeling eliminates these anomalies by dividing entities into distinct tables linked through <strong>Foreign Keys</strong> and <strong>Junction Tables</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "5.3",
      week: "Week 1",
      title: "Lesson 5.3 · SQL fundamentals for system design",
      duration: "3.5 hours",
      summary:
        "Mastering SQL from an architectural perspective: CRUD, filtering, LIMIT & OFFSET pitfalls, JOIN execution mechanisms, GROUP BY aggregation, and parameterized query safety.",
      diagram: "relational-erd",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Architects must understand how SQL statements translate into computational work inside the database query engine.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">Architectural SQL: Active Enrollments with Grouping</h5>
            <div className="rounded-lg bg-stone-900 p-3 text-[11px] font-mono text-emerald-400 overflow-x-auto">
{`-- Active enrollments per published course with LEFT JOIN
SELECT 
  c.id AS course_id, 
  c.title, 
  COUNT(e.user_id) AS active_students
FROM courses c
LEFT JOIN enrollments e 
  ON e.course_id = c.id AND e.status = 'active'
WHERE c.status = 'published'
GROUP BY c.id, c.title
ORDER BY active_students DESC
LIMIT 20;`}
            </div>
            <p className="text-xs text-stone-500 mt-2">
              Note: Always use parameterized queries (e.g. `$1, $2` in Postgres or `?` in MySQL) to completely prevent SQL injection vulnerabilities.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "5.4",
      week: "Week 1",
      title: "Lesson 5.4 · Database normalization and schema design",
      duration: "4 hours",
      summary:
        "First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF), BCNF, and knowing when intentional denormalization is justified by measured workload evidence.",
      diagram: "relational-erd",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Normalization is the formal process of decomposing tables to eliminate functional dependency redundancy:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-white border border-stone-200">
              <strong className="text-stone-900 block mb-1">1NF (Atomic Attributes)</strong>
              <span>No repeating groups or comma-separated arrays stored in columns. Each column holds atomic scalar values.</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-stone-200">
              <strong className="text-stone-900 block mb-1">2NF (No Partial Dependencies)</strong>
              <span>Applies to composite keys. Every non-key column must depend on the whole composite key, not just a subset.</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-stone-200">
              <strong className="text-stone-900 block mb-1">3NF (No Transitive Dependencies)</strong>
              <span>Non-key columns must not depend on other non-key columns (e.g. instructor email belongs with instructor, not course).</span>
            </div>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-3.5 text-xs text-stone-700">
            <strong>Rule of Thumb:</strong> Normalize your transactional core to 3NF first for bulletproof integrity.
            Only denormalize (e.g. maintaining a precomputed `total_completed_lessons` column) when profiling confirms an aggregation bottleneck.
          </div>
        </div>
      ),
    },
    {
      id: "5.5",
      week: "Week 1",
      title: "Lesson 5.5 · Transactions, ACID, and data integrity",
      duration: "4.5 hours",
      summary:
        "ACID guarantees, concurrency phenomena (dirty reads, non-repeatable reads, phantom reads), PostgreSQL isolation levels (Read Committed, Repeatable Read, Serializable), and the Outbox pattern.",
      diagram: "relational-erd",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            A <strong>transaction</strong> groups multiple SQL statements into an atomic execution unit.
            In PostgreSQL, transactions preserve ACID guarantees:
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-stone-900 block">Atomicity:</strong> All modifications succeed or all rollback (`ROLLBACK`).
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-stone-900 block">Consistency:</strong> Database invariants and CHECK constraints are preserved.
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-stone-900 block">Isolation:</strong> Concurrent transactions execute without mutual state corruption.
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-stone-900 block">Durability:</strong> Committed data survives power failure via Write-Ahead Logging (WAL).
            </div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-900 p-3 font-mono text-[11px] text-amber-300">
{`-- Atomic Enrollment Transaction in PostgreSQL
BEGIN;
  INSERT INTO enrollments (user_id, course_id, status) VALUES (42, 101, 'active');
  INSERT INTO lesson_progress (user_id, lesson_id, completed_at) VALUES (42, 1, now());
COMMIT;`}
          </div>
        </div>
      ),
    },
    {
      id: "5.6",
      week: "Week 2",
      title: "Lesson 5.6 · What is NoSQL?",
      duration: "4 hours",
      summary:
        "Deconstructing NoSQL: Key-Value, Document, Wide-Column, Graph, Time-Series, and Vector databases. CMU 15-445 foundations for comparing data abstractions.",
      diagram: "polyglot-storage",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            <strong>NoSQL</strong> encompasses non-relational data abstractions designed around specific workload trade-offs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block mb-1">Key-Value (Redis / DynamoDB)</strong>
              <span>O(1) lookups by known key. Ideal for session tokens, caching, rate limiting, and ephemeral coordination.</span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block mb-1">Document (MongoDB / Couchbase)</strong>
              <span>Hierarchical JSON/BSON structures. Excellent when child items are bounded and read in a single query.</span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block mb-1">Wide-Column (Cassandra / ScyllaDB)</strong>
              <span>Distributed rows organized by partition key and clustering column. Optimized for high-throughput append writes.</span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block mb-1">Graph (Neo4j / Amazon Neptune)</strong>
              <span>Nodes and edges with index-free adjacency. Optimized for deep relationship and path traversal.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "5.7",
      week: "Week 2",
      title: "Lesson 5.7 · Relational versus NoSQL: how to choose",
      duration: "3.5 hours",
      summary:
        "Evidence-based database selection: evaluating data semantics, query requirements, transactional guarantees, and why PostgreSQL is the ideal baseline for PrepSpaces.",
      diagram: "polyglot-storage",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Database selection is never about choosing what is &quot;modern&quot; vs &quot;legacy&quot;.
            It is a technical trade-off matching data invariants to storage engine capabilities:
          </p>
          <div className="rounded-xl border border-stone-200 bg-white p-4 text-xs">
            <h5 className="font-bold text-stone-900 mb-2">Why PostgreSQL is the Right Default for PrepSpaces Core:</h5>
            <ul className="list-disc list-inside space-y-1.5 text-stone-600">
              <li><strong>Relational Invariants:</strong> Courses have lessons, students have enrollments, enrollments track submissions. Foreign keys prevent orphan records.</li>
              <li><strong>ACID Guarantees:</strong> Prevents race conditions during course enrollment and assignment submission.</li>
              <li><strong>Polyglot Capabilities:</strong> PostgreSQL natively supports JSONB (document storage), full-text search (GIN indexes), and vector search via `pgvector`.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "5.8",
      week: "Week 3",
      title: "Lesson 5.8 · Design a production-oriented relational schema",
      duration: "4.5 hours",
      summary:
        "Building the complete PrepSpaces production schema in PostgreSQL: users, courses, lessons, enrollments, lesson_progress, assignments, and submissions with primary, foreign, and CHECK constraints.",
      diagram: "relational-erd",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Here is the production-ready schema for PrepSpaces designed according to CMU 15-445 relational standards:
          </p>
          <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE courses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE enrollments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id BIGINT NOT NULL REFERENCES courses(id) ON DELETE RESTRICT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'revoked')),
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id)
);`}
          </div>
        </div>
      ),
    },
    {
      id: "5.9",
      week: "Week 3",
      title: "Lesson 5.9 · Indexing: how databases find data efficiently",
      duration: "4 hours",
      summary:
        "B-tree index internals, page layout, fanout factor, sequential scan vs index scan, and specialized index types (Hash, GIN, GiST, BRIN).",
      diagram: "btree-traversal",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            An <strong>index</strong> is an auxiliary data structure maintained by the database to accelerate lookups and ordering.
            PostgreSQL supports multiple index access methods:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-orange-700 block">B-Tree (Default):</strong> Supports equality, range (&lt;, &gt;=), and ORDER BY. Self-balancing tree with high fanout factor.
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-orange-700 block">GIN (Generalized Inverted):</strong> Inverted index for arrays, JSONB keys, and full-text search tokens.
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-orange-700 block">BRIN (Block Range Index):</strong> Tiny index for huge append-only tables where data correlates with disk order (e.g. timestamps).
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-stone-200">
              <strong className="text-orange-700 block">Hash:</strong> O(1) equality lookups for scalar values; does not support ranges or sorting.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "5.10",
      week: "Week 3",
      title: "Lesson 5.10 · Composite, partial, expression, and covering indexes",
      duration: "4 hours",
      summary:
        "Advanced indexing patterns: column ordering in multicolumn indexes, partial indexes with WHERE predicates, expression indexes with lower(), and covering indexes with INCLUDE.",
      diagram: "btree-traversal",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Writing high-performance indexes requires aligning the index definition with specific application query patterns:
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 space-y-3 text-xs">
            <div>
              <strong className="text-stone-900 block font-mono">1. Partial Index (WHERE clause):</strong>
              <div className="bg-stone-900 text-emerald-400 p-2 rounded font-mono text-[11px] mt-1">
                CREATE INDEX courses_published_idx ON courses (updated_at DESC) WHERE status = &apos;published&apos;;
              </div>
              <span className="text-stone-500 text-[11px]">Indexes only published courses, saving 70% of disk space and memory compared to indexing all drafts.</span>
            </div>
            <div>
              <strong className="text-stone-900 block font-mono">2. Covering Index (INCLUDE clause):</strong>
              <div className="bg-stone-900 text-emerald-400 p-2 rounded font-mono text-[11px] mt-1">
                CREATE INDEX enrollments_user_cover_idx ON enrollments (user_id, status) INCLUDE (course_id, enrolled_at);
              </div>
              <span className="text-stone-500 text-[11px]">Enables Index-Only Scans: the query retrieves all required columns directly from the index without reading table heap blocks.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "5.11",
      week: "Week 3",
      title: "Lesson 5.11 · Query planning and performance diagnosis",
      duration: "3.5 hours",
      summary:
        "Using EXPLAIN and EXPLAIN ANALYZE (BUFFERS) in PostgreSQL, diagnosing estimated vs actual rows, why sequential scans can be optimal, and 4 common slow-query pitfalls.",
      diagram: "btree-traversal",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Never guess what the database is doing. Use <strong>EXPLAIN ANALYZE</strong> to observe actual execution metrics:
          </p>
          <div className="rounded-xl border border-stone-200 bg-stone-900 p-3 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`EXPLAIN (ANALYZE, BUFFERS) 
SELECT id, title FROM courses WHERE status = 'published';

-- Output plan:
-- Index Scan using courses_status_idx on courses  (cost=0.28..8.29 rows=5 width=40)
--   (actual time=0.015..0.021 rows=5 loops=1)
--   Buffers: shared hit=3
-- Planning Time: 0.082 ms
-- Execution Time: 0.035 ms`}
          </div>
          <p className="text-xs text-stone-600">
            <strong>Key Insight:</strong> If a table has only 20 rows, a Sequential Scan is faster than an Index Scan because the database can read the single table page in one I/O operation instead of reading both index pages and table pages.
          </p>
        </div>
      ),
    },
    {
      id: "5.12",
      week: "Week 3",
      title: "Lesson 5.12 · Design indexes for PrepSpaces queries",
      duration: "4 hours",
      summary:
        "Step-by-step index engineering for 5 core PrepSpaces queries: lessons ordering, student recent submissions, active enrollments, course counting, and text search.",
      diagram: "btree-traversal",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Tailoring indexes to specific PrepSpaces access patterns:
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block font-mono">Query A: Lessons in Course Order</strong>
              <span className="font-mono text-orange-700 block text-[11px]">SELECT * FROM lessons WHERE course_id = 101 ORDER BY position;</span>
              <span className="text-stone-500 mt-1 block">Supported by existing `UNIQUE(course_id, position)` constraint. No new index needed!</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block font-mono">Query B: Student Recent Submissions</strong>
              <span className="font-mono text-orange-700 block text-[11px]">SELECT * FROM submissions WHERE user_id = 42 ORDER BY submitted_at DESC LIMIT 20;</span>
              <span className="text-emerald-700 font-bold mt-1 block">CREATE INDEX submissions_user_recent_idx ON submissions (user_id, submitted_at DESC);</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "5.13",
      week: "Week 3",
      title: "Lesson 5.13 · Data access patterns and denormalized models",
      duration: "3.5 hours",
      summary:
        "Query-first vs domain-first design, MongoDB embedding rules, intentional denormalization strategies, and maintaining read model consistency.",
      diagram: "document-embed-reference",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Distributed NoSQL systems (Cassandra, DynamoDB) require <strong>query-first data modeling</strong>:
            tables are created specifically to satisfy predefined access patterns rather than normalized entities.
          </p>
          <div className="rounded-xl border border-stone-200 bg-white p-4 text-xs">
            <h5 className="font-bold text-stone-900 mb-2">Three Practical Denormalization Strategies:</h5>
            <ol className="list-decimal list-inside space-y-1 text-stone-600">
              <li><strong>Embed Bounded Children:</strong> Embed the 10 modules inside the course document.</li>
              <li><strong>Duplicate Frequently Read Fields:</strong> Copy `course_title` into the `enrollments` read view to eliminate a JOIN on user homepages.</li>
              <li><strong>Precompute Heavy Aggregates:</strong> Maintain a `student_completion_summary` table updated via database triggers or domain events.</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: "5.14",
      week: "Week 3",
      title: "Lesson 5.14 · Partitioning, sharding, and database growth",
      duration: "4 hours",
      summary:
        "Scaling past single-node limits: PostgreSQL declarative table partitioning, horizontal database sharding, shard keys, replication vs sharding, and when to shard.",
      diagram: "partitioning-vs-sharding",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            When datasets grow beyond 100 million rows, table partitioning and sharding become relevant:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-orange-200 bg-orange-50/50">
              <strong className="text-orange-950 block mb-1">Declarative Partitioning (1 Server):</strong>
              <span>Splits a single table into physical partitions by date range or list. Query planner executes partition pruning, reading only relevant months.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
              <strong className="text-stone-900 block mb-1">Horizontal Sharding (N Servers):</strong>
              <span>Distributes rows across distinct physical database clusters using a Shard Key (e.g. `hash(user_id)`). Required for extreme write scaling.</span>
            </div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-3 text-xs text-stone-600">
            <strong>Golden Production Rule:</strong> Never shard prematurely. A single tuned PostgreSQL instance with 64GB RAM and NVMe SSDs handles 25,000+ queries per second with sub-5ms latency.
          </div>
        </div>
      ),
    },
  ];

  const currentLessonData = lessons.find((l) => l.id === activeLesson) || lessons[0];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-8 sm:px-8 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Navigation Bar */}
        <ModuleNav
          track="system-design"
          currentModuleId="databases"
          aiTutorLabel="Ask Database AI"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700">
              <Database size={12} className="text-[#f97316]" />
              System Design Masterclass · Module 5
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-mono text-stone-600">
              Carnegie Mellon University 15-445 Foundations + Production Engineering
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Relational Databases, NoSQL, Data Modeling, and Indexing
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Master relational tables, normal forms (1NF–3NF), ACID transactions, NoSQL models (Document, Key-Value, Wide-Column, Graph),
            B-tree index internals, EXPLAIN ANALYZE query planning, and workload-driven schema optimization.
          </p>

          {/* Metadata Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#e7e3da] pt-5">
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">3 weeks</span>
              <span className="text-[10px] text-stone-500 block">40–50 study hours</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Prerequisites</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modules 1–4</span>
              <span className="text-[10px] text-stone-500 block">Architecture & APIs</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Engines</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">SQL + NoSQL</span>
              <span className="text-[10px] text-stone-500 block">PostgreSQL, Mongo, Redis</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Final Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Database Design</span>
              <span className="text-[10px] text-orange-600 font-bold block">Schema, Indexes & Benchmarks</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 [scrollbar-width:none]">
          {[
            { id: "lessons", label: "Curriculum Lessons (14)", icon: BookOpen },
            { id: "calculators", label: "Database Simulators (3)", icon: Sliders },
            { id: "qa", label: "Senior Staff Q&A (6)", icon: HelpCircle },
            { id: "project", label: `Capstone Project (${completedChecklistCount}/9)`, icon: GitBranch },
            { id: "assessment", label: "Knowledge Assessment (9)", icon: CheckCircle2 },
            { id: "reading", label: "Readings & References", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white/80 text-stone-600 hover:text-stone-900 hover:bg-white border border-[#e7e3da]"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: LESSONS & CURRICULUM                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lessons" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Lesson Navigation Column */}
            <div className="lg:col-span-4 space-y-2">
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-3 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 px-2 py-1 block">
                  Module 5 Roadmap
                </span>
                <div className="space-y-1 mt-1 max-h-[600px] overflow-y-auto pr-1">
                  {lessons.map((lesson) => {
                    const isSelected = activeLesson === lesson.id;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson.id)}
                        className={`w-full text-left p-2.5 rounded-xl transition text-xs font-medium cursor-pointer ${
                          isSelected
                            ? "bg-orange-50 text-orange-950 font-bold border border-orange-200"
                            : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-0.5">
                          <span>{lesson.week}</span>
                          <span>{lesson.duration}</span>
                        </div>
                        <div className="truncate">{lesson.title}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Detailed Lesson Card */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                      {currentLessonData.week} · {currentLessonData.duration}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
                      {currentLessonData.title}
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 text-stone-600 text-xs px-2.5 py-1 font-mono">
                    Lesson {currentLessonData.id} of 14
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 italic mb-6">
                  {currentLessonData.summary}
                </p>

                {/* Lesson Main Content */}
                <div className="mb-6">{currentLessonData.content}</div>

                {/* Interactive Architectural Diagram for this Lesson */}
                <div className="mt-8 pt-6 border-t border-[#e7e3da]">
                  <VisualDiagramComponentModule5 diagramType={currentLessonData.diagram} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE DATABASE SIMULATORS                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            {/* Tool 1: Database Paradigm Decision Matrix */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Database Tool 1
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Workload-Driven Database Paradigm Selector
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Input your application access patterns and consistency requirements to determine the optimal database paradigm.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">Complex SQL Joins</span>
                  <select
                    value={workloadPrefs.complexJoins}
                    onChange={(e) => setWorkloadPrefs({ ...workloadPrefs, complexJoins: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-stone-300 bg-white font-mono text-xs cursor-pointer"
                  >
                    <option value="high">High (Many-to-many relationships)</option>
                    <option value="medium">Medium (Occasional joins)</option>
                    <option value="none">None (Key lookups only)</option>
                  </select>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">ACID & Data Correctness</span>
                  <select
                    value={workloadPrefs.acidImportance}
                    onChange={(e) => setWorkloadPrefs({ ...workloadPrefs, acidImportance: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-stone-300 bg-white font-mono text-xs cursor-pointer"
                  >
                    <option value="critical">Critical (Immediate consistency, ACID)</option>
                    <option value="eventual">Eventual (Tolerate slight replication lag)</option>
                  </select>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">Latency Requirement</span>
                  <select
                    value={workloadPrefs.readLatencyReq}
                    onChange={(e) => setWorkloadPrefs({ ...workloadPrefs, readLatencyReq: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-stone-300 bg-white font-mono text-xs cursor-pointer"
                  >
                    <option value="standard">Standard (5–20 ms via SSD/Index)</option>
                    <option value="submillisecond">Sub-millisecond (&lt; 1 ms in RAM)</option>
                  </select>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">Schema Evolution</span>
                  <select
                    value={workloadPrefs.schemaFlexibility}
                    onChange={(e) => setWorkloadPrefs({ ...workloadPrefs, schemaFlexibility: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-stone-300 bg-white font-mono text-xs cursor-pointer"
                  >
                    <option value="rigid">Rigid Schema (Strict types & constraints)</option>
                    <option value="polymorphic">Polymorphic (Dynamic nested JSON)</option>
                  </select>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">Relationship Traversal</span>
                  <select
                    value={workloadPrefs.relationshipDepth}
                    onChange={(e) => setWorkloadPrefs({ ...workloadPrefs, relationshipDepth: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-stone-300 bg-white font-mono text-xs cursor-pointer"
                  >
                    <option value="low">Standard Relational (1–3 table joins)</option>
                    <option value="deep">Deep Graph (Prerequisite / Social trees)</option>
                  </select>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">Write Scale Profile</span>
                  <select
                    value={workloadPrefs.writeVolume}
                    onChange={(e) => setWorkloadPrefs({ ...workloadPrefs, writeVolume: e.target.value })}
                    className="w-full p-1.5 rounded-lg border border-stone-300 bg-white font-mono text-xs cursor-pointer"
                  >
                    <option value="moderate">Moderate (&lt; 10,000 writes/sec)</option>
                    <option value="massive_distributed">Massive Distributed (&gt; 100k writes/sec)</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className={`p-4 rounded-2xl border ${recommendedDb.color} shadow-xs`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-xs font-mono uppercase tracking-wider">
                    Recommended Primary Storage Engine:
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-stone-200">
                    {recommendedDb.badge}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold mt-0.5">{recommendedDb.name}</h4>
                <p className="text-xs mt-1 leading-relaxed">{recommendedDb.rationale}</p>
              </div>
            </div>

            {/* Tool 2: B-Tree vs Sequential Scan Query Cost Estimator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Database Tool 2
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  B-Tree vs Sequential Scan Query Cost & I/O Estimator
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Simulate the optimizer&apos;s cost-based crossover point where a Sequential Scan becomes cheaper than an Index Scan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Total Table Rows</span>
                    <span className="text-orange-600 font-mono">{tableRows.toLocaleString()} rows</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="10000000"
                    step="50000"
                    value={tableRows}
                    onChange={(e) => setTableRows(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Disk pages: ~{queryCostResults.totalPages.toLocaleString()} blocks</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Filter Selectivity (%)</span>
                    <span className="text-orange-600 font-mono">{selectivityPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.01"
                    max="20"
                    step="0.05"
                    value={selectivityPct}
                    onChange={(e) => setSelectivityPct(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Matching rows: ~{queryCostResults.matchingRows.toLocaleString()}</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Buffer Cache Hit Ratio</span>
                    <span className="text-orange-600 font-mono">{cacheHitRatio}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="99"
                    value={cacheHitRatio}
                    onChange={(e) => setCacheHitRatio(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Pages already cached in shared_buffers RAM</span>
                </div>
              </div>

              {/* Cost Output Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-emerald-900 text-sm">B-Tree Index Scan</span>
                    <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                      Tree Depth: {queryCostResults.btreeDepth}
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-800 my-1">
                    {queryCostResults.indexScanTimeMs} ms
                  </div>
                  <p className="text-stone-600">
                    Traverses {queryCostResults.btreeDepth} B-tree levels, then reads leaf TIDs directly. {queryCostResults.speedupFactor}x faster than full scan.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-stone-800 text-sm">Sequential Table Scan</span>
                    <span className="font-mono text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded">
                      Scans {queryCostResults.totalPages.toLocaleString()} Pages
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-stone-700 my-1">
                    {queryCostResults.seqScanTimeMs} ms
                  </div>
                  <p className="text-stone-500">
                    Reads every 8KB disk page in the relation heap. Optimal only when selectivity &gt; 15% or table is tiny.
                  </p>
                </div>
              </div>
            </div>

            {/* Tool 3: PostgreSQL Composite Index Column Matcher */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Database Tool 3
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  PostgreSQL Composite Index Column Matcher
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Test arbitrary WHERE and ORDER BY clauses against index `(user_id, status, enrolled_at DESC)` to visualize B-tree prefix behavior.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-stone-900 font-mono text-xs text-amber-300">
                  Target Index: CREATE INDEX enrollments_composite_idx ON enrollments (user_id, status, enrolled_at DESC);
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 bg-[#faf8f4] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={queryFilters.hasUserId}
                      onChange={(e) => setQueryFilters({ ...queryFilters, hasUserId: e.target.checked })}
                      className="accent-orange-600"
                    />
                    <span className="font-mono font-bold">WHERE user_id = $1</span>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 bg-[#faf8f4] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={queryFilters.hasStatus}
                      onChange={(e) => setQueryFilters({ ...queryFilters, hasStatus: e.target.checked })}
                      className="accent-orange-600"
                    />
                    <span className="font-mono font-bold">AND status = $2</span>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 bg-[#faf8f4] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={queryFilters.hasEnrolledAt}
                      onChange={(e) => setQueryFilters({ ...queryFilters, hasEnrolledAt: e.target.checked })}
                      className="accent-orange-600"
                    />
                    <span className="font-mono font-bold">AND enrolled_at &gt; $3</span>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 bg-[#faf8f4] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={queryFilters.orderEnrolledAt}
                      onChange={(e) => setQueryFilters({ ...queryFilters, orderEnrolledAt: e.target.checked })}
                      className="accent-orange-600"
                    />
                    <span className="font-mono font-bold">ORDER BY enrolled_at</span>
                  </label>
                </div>

                {/* Matcher Result Banner */}
                <div className={`p-4 rounded-xl border ${indexMatchAnalysis.color}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs uppercase font-mono tracking-wider">
                      Execution Plan Diagnostic:
                    </span>
                    <span className="font-bold text-xs font-mono">{indexMatchAnalysis.scanType}</span>
                  </div>
                  <p className="text-xs leading-relaxed">{indexMatchAnalysis.explanation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SENIOR SYSTEMS ENGINEERING Q&A                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                Senior & Staff Level Systems Engineering
              </span>
              <h2 className="text-xl font-bold text-stone-900">
                Production Database Architecture Scenarios & Defense
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Critical database design dilemmas asked in Staff Systems Engineer interviews and encountered in high-scale production systems.
              </p>
            </div>

            {qaScenarios.map((item) => {
              const isOpen = expandedQa[item.id] || false;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs transition hover:border-orange-200"
                >
                  <button
                    onClick={() => setExpandedQa({ ...expandedQa, [item.id]: !isOpen })}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                        Scenario
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">{item.context}</p>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-stone-100 text-stone-500">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed bg-[#faf8f4] p-4 rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">Architectural Defense & Resolution:</span>
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: CAPSTONE DATABASE DESIGN PROJECT                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                    Module 5 Capstone Assignment
                  </span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Build a Production Database for PrepSpaces
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 text-xs px-3 py-1 font-bold">
                    Project Progress: {completedChecklistCount} / 9 Completed
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                <strong>Project Objective:</strong> Combine relational data modeling, NoSQL evaluation, index engineering,
                and query plan performance analysis on a dataset of 100,000 synthetic students, courses, enrollments, and submissions.
              </p>

              {/* 6 Phases Accordion / Steps */}
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 1</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Requirements & Entity Modeling</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Define the entity model for courses, lessons, enrollments, progress, assignments, and submissions.
                    Specify primary keys, foreign keys, unique constraints, and lifecycle retention policies.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 2</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Implement Relational Schema in PostgreSQL</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Execute the DDL, generate realistic synthetic data, and author 7 production SQL queries:
                    active courses, lesson order, progress saves, recent submissions, enrollment counts, missing submissions, and completion rates.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 3</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Normalize & Explain Design Decisions</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Document 1NF–3NF normalization steps. Identify insertion, update, and deletion anomalies of flat schemas.
                    Design 1 intentional denormalized read model to support high-frequency dashboard queries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 4</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Add & Measure Indexes with EXPLAIN ANALYZE</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Record execution plans for at least 5 queries before adding indexes. Design composite, partial, and covering indexes.
                    Measure actual execution duration, buffer reads, and write overhead.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 5</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Compare a NoSQL Model</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Design a document model in MongoDB for course summaries and recent activity feeds.
                    Evaluate embedding vs referencing trade-offs, and compare with Cassandra wide-column access patterns.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 6</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Write the Architecture Decision Record (ADR)</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Author an ADR documenting why the core uses PostgreSQL, which read models are cached in Redis,
                    and the quantitative workload triggers that would warrant future database sharding.
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist with Interactive Toggles */}
              <div className="mt-6 pt-5 border-t border-stone-200">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    Project Acceptance Criteria Checklist ({completedChecklistCount}/9):
                  </h5>
                  <span className="text-xs text-stone-500">Click items to mark progress</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: "erd", label: "ER diagram with entity relationships and key constraints" },
                    { key: "sqlSchema", label: "Working SQL schema and synthetic test data" },
                    { key: "sevenQueries", label: "At least seven tested SQL queries" },
                    { key: "normalizationExp", label: "Explanation of normalization decisions (1NF–3NF)" },
                    { key: "nosqlCompare", label: "NoSQL document model and access-pattern comparison" },
                    { key: "indexFivePatterns", label: "Index design for at least five query patterns" },
                    { key: "explainAnalyzeBenchmarks", label: "Before-and-after execution plans and benchmark results" },
                    { key: "integrityTests", label: "Data-integrity and transaction rollback tests" },
                    { key: "adrReport", label: "Architecture decision record and future scaling triggers" },
                  ].map((item) => {
                    const isChecked = checklist[item.key];
                    return (
                      <button
                        key={item.key}
                        onClick={() => toggleChecklistItem(item.key)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition cursor-pointer ${
                          isChecked
                            ? "border-emerald-300 bg-emerald-50/70 text-emerald-950 font-bold"
                            : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          className={isChecked ? "text-emerald-600" : "text-stone-300"}
                        />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT QUIZ (9 QUESTIONS VERBATIM)                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Module 5 Assessment
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    Knowledge Check: Relational Modeling, NoSQL & Indexing
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    9 questions evaluating relational normalization, foreign keys, document embedding, B-trees, EXPLAIN ANALYZE, and sharding.
                  </p>
                </div>
                {quizSubmitted && (
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-bold text-stone-900 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-xl">
                      Score: <span className="text-orange-600 font-mono font-bold">{calculateScore()} / 9</span>
                    </div>
                    <button
                      onClick={resetQuiz}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold hover:bg-stone-50 cursor-pointer"
                    >
                      <RotateCcw size={13} />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const selected = selectedAnswers[q.id];
                  const isCorrect = selected === q.correct;
                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 sm:p-5"
                    >
                      <h4 className="font-bold text-stone-900 text-sm mb-3">{q.question}</h4>

                      <div className="space-y-2">
                        {q.options.map((opt, idx) => {
                          const isOptionSelected = selected === idx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";

                          if (quizSubmitted) {
                            if (idx === q.correct) {
                              btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold";
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = "bg-rose-50 border-rose-400 text-rose-950 line-through";
                            } else {
                              btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-xs";
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectAnswer(q.id, idx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="h-5 w-5 rounded-full border flex items-center justify-center text-[10px] font-mono shrink-0">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div
                          className={`mt-3 p-3 rounded-xl text-xs border leading-relaxed ${
                            isCorrect
                              ? "bg-emerald-50/70 border-emerald-200 text-emerald-900"
                              : "bg-rose-50/70 border-rose-200 text-rose-900"
                          }`}
                        >
                          <span className="font-bold block mb-0.5">
                            {isCorrect ? "✓ Correct!" : "✗ Review Explanation:"}
                          </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#f97316] text-white font-bold text-xs shadow-xs hover:bg-[#ea580c] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>Submit Assessment</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <div className="mt-6 flex justify-between items-center flex-wrap gap-4 pt-4 border-t border-stone-200">
                  <div className="text-xs text-stone-600">
                    Completed 9 of 9 questions. Ready to explore university research and primary documentation.
                  </div>
                  <button
                    onClick={() => setActiveTab("reading")}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition cursor-pointer"
                  >
                    <span>Explore Research & Reading List</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: READINGS & REFERENCES (10 CITATIONS)                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                University Rigor & Primary Documentation
              </span>
              <h2 className="text-xl font-bold text-stone-900">
                University and Industry Reading List
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Primary documentation and academic literature from Carnegie Mellon University, PostgreSQL, MongoDB, Cassandra, and Redis.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    code: "CMU 15-445/645",
                    title: "Carnegie Mellon University · Database Systems",
                    focus:
                      "Comprehensive curriculum covering storage architectures, SQL engines, indexing, query processing, concurrency control, and crash recovery.",
                    link: "https://15445.courses.cs.cmu.edu/spring2026/syllabus.html",
                    linkText: "CMU 15-445 Syllabus",
                  },
                  {
                    code: "PG DDL",
                    title: "PostgreSQL · Data Definition and Constraints",
                    focus:
                      "Primary documentation for table design, composite primary keys, foreign keys, unique constraints, and check invariants.",
                    link: "https://www.postgresql.org/docs/current/ddl.html",
                    linkText: "PostgreSQL DDL Documentation",
                  },
                  {
                    code: "PG INDEXES",
                    title: "PostgreSQL · Indexing & Multicolumn Indexes",
                    focus:
                      "B-tree mechanics, covering indexes with INCLUDE, partial indexes, expression indexes, and multicolumn column ordering rules.",
                    link: "https://www.postgresql.org/docs/current/indexes.html",
                    linkText: "PostgreSQL Index Guide",
                  },
                  {
                    code: "PG EXPLAIN",
                    title: "PostgreSQL · Query Plans (EXPLAIN ANALYZE)",
                    focus:
                      "Interpreting execution plans, analyzing shared buffers, comparing estimated vs actual rows, and diagnosing sequential scans.",
                    link: "https://www.postgresql.org/docs/current/using-explain.html",
                    linkText: "EXPLAIN Documentation",
                  },
                  {
                    code: "PG ISOLATION",
                    title: "PostgreSQL · Transaction Isolation",
                    focus:
                      "Deep dive into READ COMMITTED, REPEATABLE READ, SERIALIZABLE, MVCC concurrency, and serialization failure retries.",
                    link: "https://www.postgresql.org/docs/current/transaction-iso.html",
                    linkText: "Transaction Isolation Docs",
                  },
                  {
                    code: "MONGO MODEL",
                    title: "MongoDB · Data Modeling & Document Relationships",
                    focus:
                      "Official guidance on embedding vs referencing, unbounded array hazards, and aligning schemas with query workloads.",
                    link: "https://www.mongodb.com/docs/manual/data-modeling/",
                    linkText: "MongoDB Data Modeling Guide",
                  },
                  {
                    code: "CASSANDRA CQL",
                    title: "Apache Cassandra · Query-Driven Data Modeling",
                    focus:
                      "Designing partition keys, clustering columns, avoiding distributed hot spots, and modeling around application queries.",
                    link: "https://cassandra.apache.org/doc/stable/cassandra/developing/data-modeling/intro.html",
                    linkText: "Cassandra Modeling Guide",
                  },
                  {
                    code: "REDIS TYPES",
                    title: "Redis · Native Data Types & Caching Patterns",
                    focus:
                      "Harnessing in-memory data structures: Strings, Hashes, Lists, Sets, Sorted Sets (ZSET), and TTL expiration policies.",
                    link: "https://redis.io/docs/latest/develop/data-types/",
                    linkText: "Redis Data Types Documentation",
                  },
                  {
                    code: "NEO4J GRAPH",
                    title: "Neo4j · Graph Data Modeling & Traversal",
                    focus:
                      "Modeling nodes, relationships, and properties. Path traversal queries and index-free adjacency vs relational recursive joins.",
                    link: "https://neo4j.com/docs/getting-started/data-modeling/",
                    linkText: "Neo4j Modeling Guide",
                  },
                  {
                    code: "DYNAMODB AWS",
                    title: "AWS · DynamoDB Data Modeling Process",
                    focus:
                      "Single-table design principles, partition keys, sort keys, and global secondary indexes (GSI) for distributed scale.",
                    link: "https://docs.aws.amazon.com/prescriptive-guidance/latest/dynamodb-data-modeling/step5.html",
                    linkText: "AWS DynamoDB Guidance",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-stone-200 bg-[#faf8f4] hover:border-orange-300 hover:bg-orange-50/20 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-orange-600 block mb-1">
                        {item.code}
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-orange-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.focus}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-orange-600">
                      <span>{item.linkText}</span>
                      <ExternalLink size={13} />
                    </div>
                  </a>
                ))}
              </div>

              {/* What Comes Next Banner */}
              <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    What You Mastered Before Module 6
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Module 6: Distributed Caching, Cache Invalidation & High-Throughput Buffers
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    You can now model relational and NoSQL schemas, enforce integrity with database constraints, optimize B-tree indexes, and benchmark query plans.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/architecture")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 4</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/caching")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 6 (Caching)</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
