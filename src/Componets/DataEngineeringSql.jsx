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
  Lock,
  Unlock,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  Play,
  Cpu,
  Layers,
  Search,
  FileText,
  Server,
  Activity,
  Zap,
  Filter,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  GitBranch,
  Table,
  BarChart3,
  Network
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function DataEngineeringSql() {
  const navigate = useNavigate();

  // Mode & Workbench selection
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "workbench"
  const [activeWorkbench, setActiveWorkbench] = useState("sql_studio"); // "sql_studio" | "explain_plan" | "recursive_tree" | "quiz" | "labs" | "interview"

  // Code copy feedback
  const [copiedId, setCopiedId] = useState(null);
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SQL STUDIO STATE
  // ---------------------------------------------------------------------------
  const sampleQueries = [
    {
      id: "revenue",
      name: "1. Total Revenue (Completed Orders)",
      sql: `SELECT 
    COUNT(*) AS total_completed_orders,
    SUM(total_amount) AS total_revenue,
    ROUND(AVG(total_amount), 2) AS avg_order_value,
    MIN(total_amount) AS min_order,
    MAX(total_amount) AS max_order
FROM ecommerce.orders
WHERE status = 'COMPLETED';`,
      results: [
        { total_completed_orders: 4, total_revenue: "₹85,700.00", avg_order_value: "₹21,425.00", min_order: "₹2,200.00", max_order: "₹51,500.00" }
      ],
      stats: { rows: 1, executionTime: "0.12 ms", bufferHits: 4 }
    },
    {
      id: "customer_spend",
      name: "2. Customer Spending & Order Count",
      sql: `SELECT 
    c.customer_id,
    c.customer_name,
    c.city,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS total_spending
FROM ecommerce.customers AS c
INNER JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id
WHERE o.status = 'COMPLETED'
GROUP BY c.customer_id, c.customer_name, c.city
ORDER BY total_spending DESC;`,
      results: [
        { customer_id: 1, customer_name: "Rahul", city: "Pune", total_orders: 2, total_spending: "₹53,700.00" },
        { customer_id: 2, customer_name: "Priya", city: "Mumbai", total_orders: 1, total_spending: "₹20,000.00" },
        { customer_id: 4, customer_name: "Neha", city: "Hyderabad", total_orders: 1, total_spending: "₹12,000.00" }
      ],
      stats: { rows: 3, executionTime: "0.24 ms", bufferHits: 8 }
    },
    {
      id: "latest_orders",
      name: "3. Window Function: Latest Order per Customer",
      sql: `WITH ranked_orders AS (
    SELECT 
        order_id,
        customer_id,
        order_date,
        total_amount,
        status,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id 
            ORDER BY order_date DESC, order_id DESC
        ) AS row_num
    FROM ecommerce.orders
)
SELECT * FROM ranked_orders WHERE row_num = 1;`,
      results: [
        { order_id: 3, customer_id: 1, order_date: "2026-11-03", total_amount: "₹2,200.00", status: "COMPLETED", row_num: 1 },
        { order_id: 2, customer_id: 2, order_date: "2026-11-02", total_amount: "₹20,000.00", status: "COMPLETED", row_num: 1 },
        { order_id: 4, customer_id: 3, order_date: "2026-11-04", total_amount: "₹2,500.00", status: "PENDING", row_num: 1 },
        { order_id: 5, customer_id: 4, order_date: "2026-11-05", total_amount: "₹12,000.00", status: "COMPLETED", row_num: 1 },
        { order_id: 6, customer_id: 5, order_date: "2026-11-06", total_amount: "₹2,500.00", status: "CANCELLED", row_num: 1 }
      ],
      stats: { rows: 5, executionTime: "0.31 ms", bufferHits: 6 }
    },
    {
      id: "fanout_check",
      name: "4. Preventing Join Fanout (CTEs)",
      sql: `WITH item_totals AS (
    SELECT order_id, SUM(quantity * unit_price) AS item_revenue
    FROM ecommerce.order_items
    GROUP BY order_id
),
payment_totals AS (
    SELECT order_id, SUM(amount) AS payment_amount
    FROM ecommerce.payments
    WHERE payment_status = 'SUCCESS'
    GROUP BY order_id
)
SELECT 
    o.order_id,
    o.status,
    it.item_revenue,
    COALESCE(pt.payment_amount, 0) AS payment_amount
FROM ecommerce.orders AS o
LEFT JOIN item_totals AS it ON o.order_id = it.order_id
LEFT JOIN payment_totals AS pt ON o.order_id = pt.order_id;`,
      results: [
        { order_id: 1, status: "COMPLETED", item_revenue: "₹51,500.00", payment_amount: "₹51,500.00" },
        { order_id: 2, status: "COMPLETED", item_revenue: "₹20,000.00", payment_amount: "₹20,000.00" },
        { order_id: 3, status: "COMPLETED", item_revenue: "₹2,200.00", payment_amount: "₹2,200.00" },
        { order_id: 4, status: "PENDING", item_revenue: "₹2,500.00", payment_amount: "₹0.00" },
        { order_id: 5, status: "COMPLETED", item_revenue: "₹12,000.00", payment_amount: "₹12,000.00" },
        { order_id: 6, status: "CANCELLED", item_revenue: "₹2,500.00", payment_amount: "₹0.00" }
      ],
      stats: { rows: 6, executionTime: "0.38 ms", bufferHits: 12 }
    },
    {
      id: "unpurchased",
      name: "5. Semi-Join: Customers Who Never Ordered",
      sql: `SELECT c.customer_id, c.customer_name, c.email, c.city
FROM ecommerce.customers AS c
WHERE NOT EXISTS (
    SELECT 1 FROM ecommerce.orders AS o 
    WHERE o.customer_id = c.customer_id
);`,
      results: [],
      stats: { rows: 0, executionTime: "0.08 ms", bufferHits: 4 }
    }
  ];

  const [selectedQueryId, setSelectedQueryId] = useState("revenue");
  const currentQuery = useMemo(() => {
    return sampleQueries.find(q => q.id === selectedQueryId) || sampleQueries[0];
  }, [selectedQueryId]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE EXPLAIN PLAN STATE
  // ---------------------------------------------------------------------------
  const [selectedPlanType, setSelectedPlanType] = useState("index_scan"); // "index_scan" | "seq_scan" | "hash_join"

  const explainPlans = {
    index_scan: {
      title: "Index Scan on idx_orders_customer (Selective Query)",
      sql: "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM ecommerce.orders WHERE customer_id = 1;",
      rawPlan: `Index Scan using idx_orders_customer on orders  (cost=0.15..8.17 rows=2 width=48) (actual time=0.024..0.027 rows=2 loops=1)
  Index Cond: (customer_id = 1)
  Buffers: shared hit=3
Planning Time: 0.085 ms
Execution Time: 0.045 ms`,
      analysis: [
        "Index Cond matched via B-Tree lookup (customer_id = 1).",
        "Optimizer cost estimated between 0.15 startup and 8.17 total cost.",
        "Shared Buffers: 3 buffer hits (0 disk reads). Lightning fast in-memory retrieval."
      ]
    },
    seq_scan: {
      title: "Sequential Scan (Non-selective or Small Table Scan)",
      sql: "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM ecommerce.orders WHERE total_amount > 100;",
      rawPlan: `Seq Scan on orders  (cost=0.00..1.08 rows=6 width=48) (actual time=0.012..0.015 rows=6 loops=1)
  Filter: (total_amount > 100::numeric)
  Buffers: shared hit=1
Planning Time: 0.062 ms
Execution Time: 0.028 ms`,
      analysis: [
        "Sequential Scan chosen because query matches all 6 rows in the relation.",
        "Reading the table pages sequentially is cheaper than jumping between index pages and heap pages.",
        "A sequential scan is NOT inherently bad when selectivity is low (>20% of table rows match)."
      ]
    },
    hash_join: {
      title: "Hash Join (Equi-Join between Customers & Orders)",
      sql: "EXPLAIN (ANALYZE, BUFFERS) SELECT c.customer_name, o.order_id FROM ecommerce.customers c JOIN ecommerce.orders o ON c.customer_id = o.customer_id;",
      rawPlan: `Hash Join  (cost=1.11..2.24 rows=6 width=72) (actual time=0.038..0.045 rows=6 loops=1)
  Hash Cond: (o.customer_id = c.customer_id)
  Buffers: shared hit=2
  ->  Seq Scan on orders o  (cost=0.00..1.06 rows=6 width=16)
  ->  Hash  (cost=1.05..1.05 rows=5 width=64)
        Buckets: 1024  Batches: 1  Memory Usage: 9kB
        ->  Seq Scan on customers c  (cost=0.00..1.05 rows=5 width=64)
Planning Time: 0.114 ms
Execution Time: 0.068 ms`,
      analysis: [
        "Inner table (customers) is hashed in memory (1024 buckets, 9kB memory usage).",
        "Outer table (orders) scans rows and probes the in-memory hash table in O(1) time.",
        "Batches: 1 indicates the entire hash table fit into work_mem without spilling to temporary disk files."
      ]
    }
  };

  // ---------------------------------------------------------------------------
  // RECURSIVE CTE EXPLORER STATE
  // ---------------------------------------------------------------------------
  const [expandedEmployeeId, setExpandedEmployeeId] = useState(1);
  const employeeHierarchy = [
    { id: 1, name: "CEO", managerId: null, level: 1, path: "CEO", title: "Chief Executive Officer" },
    { id: 2, name: "Rahul", managerId: 1, level: 2, path: "CEO -> Rahul", title: "VP of Engineering" },
    { id: 3, name: "Priya", managerId: 1, level: 2, path: "CEO -> Priya", title: "VP of Product" },
    { id: 4, name: "Amit", managerId: 2, level: 3, path: "CEO -> Rahul -> Amit", title: "Data Platform Lead" },
    { id: 5, name: "Neha", managerId: 2, level: 3, path: "CEO -> Rahul -> Neha", title: "DevOps Lead" },
    { id: 6, name: "Arjun", managerId: 4, level: 4, path: "CEO -> Rahul -> Amit -> Arjun", title: "Senior Data Engineer" }
  ];

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (15 Questions from User Prompt)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of a primary key?",
      options: ["To sort records", "To uniquely identify each row", "To encrypt a table", "To group records"],
      correctIndex: 1,
      explanation: "A primary key uniquely identifies every row in a table, enforces uniqueness, and disallows NULL values."
    },
    {
      id: 2,
      question: "Which constraint maintains a relationship between two tables?",
      options: ["CHECK", "DEFAULT", "FOREIGN KEY", "INDEX"],
      correctIndex: 2,
      explanation: "A FOREIGN KEY constraint references the primary key of another table, guaranteeing referential integrity."
    },
    {
      id: 3,
      question: "Which SQL command changes the structure of an existing table?",
      options: ["UPDATE", "ALTER", "SELECT", "INSERT"],
      correctIndex: 1,
      explanation: "ALTER (a DDL command) adds, modifies, or drops columns and constraints in an existing table structure."
    },
    {
      id: 4,
      question: "Which join returns all rows from the left table and matching rows from the right?",
      options: ["INNER JOIN", "CROSS JOIN", "LEFT JOIN", "RIGHT JOIN"],
      correctIndex: 2,
      explanation: "A LEFT JOIN preserves all records from the left-hand table and populates unmatched right-hand columns with NULL."
    },
    {
      id: 5,
      question: "Which clause filters aggregated groups?",
      options: ["WHERE", "ORDER BY", "HAVING", "FROM"],
      correctIndex: 2,
      explanation: "HAVING filters aggregated groups produced by GROUP BY, whereas WHERE filters individual candidate rows prior to grouping."
    },
    {
      id: 6,
      question: "What is the main difference between UNION and UNION ALL?",
      options: [
        "UNION ALL removes duplicates",
        "UNION removes duplicate result rows",
        "UNION works only on integers",
        "There is no difference"
      ],
      correctIndex: 1,
      explanation: "UNION removes duplicates via an internal sort/hash step, whereas UNION ALL preserves all rows and performs significantly less work."
    },
    {
      id: 7,
      question: "What is a correlated subquery?",
      options: [
        "A query that uses a value from its outer query",
        "A query that never uses WHERE",
        "A query that only inserts data",
        "A query that creates an index"
      ],
      correctIndex: 0,
      explanation: "A correlated subquery references attributes from the outer query, evaluating dynamically for each candidate row in the outer statement."
    },
    {
      id: 8,
      question: "Which SQL feature is used to create a named intermediate query result?",
      options: ["TRIGGER", "INDEX", "CTE", "GRANT"],
      correctIndex: 2,
      explanation: "A Common Table Expression (CTE), declared with WITH, creates a named intermediate result for the duration of a single statement."
    },
    {
      id: 9,
      question: "Which function assigns a unique sequential number to every row in a window?",
      options: ["RANK", "DENSE_RANK", "ROW_NUMBER", "NTILE"],
      correctIndex: 2,
      explanation: "ROW_NUMBER() assigns contiguous unique integers (1, 2, 3...) to each row in a partition regardless of ties."
    },
    {
      id: 10,
      question: "Which ACID property ensures committed changes survive a crash within the database's durability guarantees?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      correctIndex: 3,
      explanation: "Durability guarantees that committed state transitions survive power loss, crashes, or reboots through Write-Ahead Logging (WAL)."
    },
    {
      id: 11,
      question: "Which isolation level is PostgreSQL's default?",
      options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
      correctIndex: 1,
      explanation: "PostgreSQL defaults to READ COMMITTED, where each query executes with a statement-level snapshot of committed transactions."
    },
    {
      id: 12,
      question: "Which index is PostgreSQL's default general-purpose index type?",
      options: ["GIN", "BRIN", "B-tree", "Hash"],
      correctIndex: 2,
      explanation: "B-tree is the default index type in PostgreSQL, optimizing equality, range scans, sorting, and MIN/MAX operations."
    },
    {
      id: 13,
      question: "What does EXPLAIN ANALYZE do?",
      options: [
        "Only checks SQL syntax",
        "Executes the query and reports actual execution information",
        "Creates an index",
        "Automatically rewrites the database schema"
      ],
      correctIndex: 1,
      explanation: "EXPLAIN ANALYZE executes the SQL statement and measures real execution timing, buffer hits, and row counts alongside estimates."
    },
    {
      id: 14,
      question: "What is the primary purpose of a materialized view?",
      options: [
        "Store a query's results for reuse",
        "Delete old transactions",
        "Create a database user",
        "Replace all database indexes"
      ],
      correctIndex: 0,
      explanation: "A materialized view caches the query result physically on disk, serving fast analytics without repeatedly running expensive joins."
    },
    {
      id: 15,
      question: "Which operation helps PostgreSQL update planner statistics?",
      options: ["GRANT", "ANALYZE", "DROP", "TRUNCATE"],
      correctIndex: 1,
      explanation: "ANALYZE samples table rows and updates catalog statistics (histograms, distinct values) so the optimizer selects optimal plans."
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, optionIndex) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) score++;
    });
    return score;
  };

  // ---------------------------------------------------------------------------
  // LABS & CAPSTONE TRACKER STATE
  // ---------------------------------------------------------------------------
  const [completedLabs, setCompletedLabs] = useState({});
  const toggleLab = (id) => {
    setCompletedLabs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERVIEW VAULT STATE (50+ Questions across Categories A to G)
  // ---------------------------------------------------------------------------
  const [expandedInterviewQuestion, setExpandedInterviewQuestion] = useState(null);
  const [interviewFilter, setInterviewFilter] = useState("all");

  const interviewQuestions = [
    {
      id: 1,
      category: "fundamentals",
      question: "What is an RDBMS, and what are its core architectural components?",
      answer: "A Relational Database Management System (RDBMS) organizes data into relations (tables) with columns and rows. Core architecture comprises: 1) Client interface; 2) Parser & Validator; 3) Query Optimizer (cost-based planning); 4) Execution Engine; 5) Shared Buffers & Storage Manager; and 6) Concurrency Control (MVCC) & Write-Ahead Logging (WAL)."
    },
    {
      id: 2,
      category: "fundamentals",
      question: "Explain the differences between 1NF, 2NF, and 3NF database normalization.",
      answer: "1NF: Attribute values must be atomic (no arrays/comma-separated strings in single cells) and have a primary key. 2NF: Must satisfy 1NF, and all non-key columns must fully depend on the entire candidate key (no partial dependencies on composite keys). 3NF: Must satisfy 2NF, and no non-key attribute can depend transitively on another non-key attribute."
    },
    {
      id: 3,
      category: "fundamentals",
      question: "When should a data engineer denormalize a database schema?",
      answer: "Denormalization is intentionally introducing redundant data (e.g. pre-joining customer names into an analytical fact table). It is used in analytical warehouses (OLAP), star schemas, and reporting marts to eliminate expensive multi-table joins, reduce query latency, and simplify BI queries."
    },
    {
      id: 4,
      category: "fundamentals",
      question: "What is the difference between NULL, zero, and an empty string?",
      answer: "NULL represents the complete absence of a value (unknown/unrecorded state), requiring 'IS NULL' or 'IS NOT NULL' checks. Zero is a defined numeric value. An empty string is a defined string with length 0. In SQL, expressions like NULL = NULL evaluate to NULL (falsy in predicates), not TRUE."
    },
    {
      id: 5,
      category: "sql_basics",
      question: "Differentiate DDL, DML, DQL, DCL, and TCL.",
      answer: "DDL (Data Definition): CREATE, ALTER, DROP, TRUNCATE. DML (Data Manipulation): INSERT, UPDATE, DELETE, MERGE. DQL (Data Query): SELECT. DCL (Data Control): GRANT, REVOKE (permissions). TCL (Transaction Control): BEGIN, COMMIT, ROLLBACK, SAVEPOINT."
    },
    {
      id: 6,
      category: "sql_basics",
      question: "Compare DELETE, TRUNCATE, and DROP.",
      answer: "DELETE: DML statement, removes specific rows matching WHERE clause, fires triggers, can be rolled back, slower for massive data. TRUNCATE: DDL statement, deallocates entire table data pages in bulk, cannot take a WHERE clause, resets identity sequences optionally, much faster. DROP: DDL statement, completely destroys the table definition, schema metadata, indexes, and all stored rows."
    },
    {
      id: 7,
      category: "sql_basics",
      question: "What is the logical query processing order in SQL?",
      answer: "1) FROM & JOIN; 2) WHERE (row filtering); 3) GROUP BY (grouping); 4) HAVING (group filtering); 5) SELECT (expressions & aliases); 6) DISTINCT; 7) ORDER BY (sorting); 8) LIMIT / OFFSET. This explains why column aliases declared in SELECT cannot be used inside WHERE clauses."
    },
    {
      id: 8,
      category: "sql_basics",
      question: "What is the difference between COUNT(*) and COUNT(column)?",
      answer: "COUNT(*) counts all physical rows in the result or partition, including rows where columns are NULL. COUNT(column) evaluates the column and counts only rows where the specified column value is NOT NULL."
    },
    {
      id: 9,
      category: "joins",
      question: "Explain the Join Fanout problem and how to prevent it.",
      answer: "Join fanout occurs when joining a parent table (orders) with multiple independent 1-to-many child tables (order_items and payments). For an order with 3 items and 2 payments, joining both directly multiplies rows to 3 * 2 = 6, corrupting SUM() aggregations. Solution: Pre-aggregate each child relation to the order_id level using separate CTEs before performing the join."
    },
    {
      id: 10,
      category: "joins",
      question: "What is a CROSS JOIN and when is it legitimately used in Data Engineering?",
      answer: "A CROSS JOIN produces the Cartesian product of two tables (M * N rows). It is used to generate complete multi-dimensional grids: e.g. cross-joining a date dimension table with a store dimension table to ensure every store-date combination exists for zero-filling missing inventory."
    },
    {
      id: 11,
      category: "joins",
      question: "Why is NOT EXISTS preferred over NOT IN for anti-joins?",
      answer: "If the subquery in 'NOT IN (SELECT col FROM t)' contains a single NULL value, the entire NOT IN predicate evaluates to UNKNOWN (falsy) for all rows, returning 0 records. 'NOT EXISTS (SELECT 1 FROM t WHERE ...)' handles NULLs correctly via boolean existence checks and enables semi-join optimizer paths."
    },
    {
      id: 12,
      category: "advanced",
      question: "What is a Common Table Expression (CTE) and how does PostgreSQL handle materialization?",
      answer: "A CTE (WITH query AS (...)) defines a temporary named result set within a statement. In modern PostgreSQL (v12+), non-recursive CTEs that are referenced once are automatically inlined like subqueries. Data engineers can explicitly force physical caching via 'WITH cte AS MATERIALIZED (...)', or prevent it via 'NOT MATERIALIZED'."
    },
    {
      id: 13,
      category: "advanced",
      question: "Explain the three components of a Recursive CTE.",
      answer: "1) Anchor Member: Base non-recursive SELECT that seeds initial root records (e.g. manager_id IS NULL). 2) UNION ALL separator. 3) Recursive Member: Joins back to the CTE itself to fetch the next depth level (level + 1). The engine executes iteratively until the recursive member yields zero rows."
    },
    {
      id: 14,
      category: "advanced",
      question: "What is the difference between ROW_NUMBER(), RANK(), and DENSE_RANK()?",
      answer: "For values [100, 100, 80]: ROW_NUMBER() produces [1, 2, 3] (strictly distinct integers). RANK() produces [1, 1, 3] (ties receive the same rank, leaving gaps). DENSE_RANK() produces [1, 1, 2] (ties receive the same rank with contiguous numbers, no gaps)."
    },
    {
      id: 15,
      category: "advanced",
      question: "Explain Window Frames: ROWS vs RANGE and UNBOUNDED PRECEDING.",
      answer: "Window frames bound the subset of rows relative to CURRENT ROW. 'ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW' accumulates physical rows sequentially (essential for running totals). 'RANGE' operates on peer values; if multiple rows share the same ORDER BY value, RANGE sums all peers together at once."
    },
    {
      id: 16,
      category: "db_programming",
      question: "Compare Views and Materialized Views in PostgreSQL.",
      answer: "View: Virtual query shortcut; recalculates underlying SQL on every invocation; zero storage required; always fresh. Materialized View: Persists query output table physically to disk; blazing fast for heavy analytical queries; requires periodic 'REFRESH MATERIALIZED VIEW' (or 'CONCURRENTLY' with a unique index)."
    },
    {
      id: 17,
      category: "db_programming",
      question: "What are OLD and NEW in PostgreSQL trigger functions?",
      answer: "In PL/pgSQL row-level triggers: 'OLD' holds the row state before an UPDATE or DELETE. 'NEW' holds the proposed row state for an INSERT or UPDATE. Triggers can evaluate 'IF OLD.col IS DISTINCT FROM NEW.col' to record audit entries only when values genuinely change."
    },
    {
      id: 18,
      category: "transactions",
      question: "Explain the four ACID properties in relational databases.",
      answer: "Atomicity: All operations in a transaction succeed, or all are rolled back (all-or-nothing). Consistency: State transitions strictly preserve schema rules, foreign keys, and CHECK constraints. Isolation: Concurrent transactions do not interfere destructively. Durability: Committed transactions persist across power outages and crashes via WAL."
    },
    {
      id: 19,
      category: "transactions",
      question: "What is Multi-Version Concurrency Control (MVCC)?",
      answer: "MVCC allows concurrent reads and writes without locking. In PostgreSQL, UPDATES write a new row version (tuple) with updated transaction IDs (xmin/xmax). Readers view snapshots corresponding to their transaction isolation level without blocking writers, and writers do not block readers. Dead tuples are reclaimed by VACUUM."
    },
    {
      id: 20,
      category: "transactions",
      question: "What are dirty reads, non-repeatable reads, and phantom reads?",
      answer: "Dirty read: Reading uncommitted data from an active transaction that might roll back (prevented in PostgreSQL). Non-repeatable read: Re-reading a row in the same transaction produces different data because another transaction committed an UPDATE. Phantom read: Re-running a range query yields new rows because another transaction committed an INSERT."
    },
    {
      id: 21,
      category: "indexing",
      question: "How does a B-tree index work, and why does column order matter in composite indexes?",
      answer: "A B-tree is a balanced multi-way search tree where leaf pages store sorted key values and heap page pointers. In composite indexes (colA, colB), keys are sorted primarily by colA, then by colB. The index is highly effective for queries filtering on 'colA' or 'colA AND colB', but ineffective for queries filtering solely on 'colB'."
    },
    {
      id: 22,
      category: "indexing",
      question: "What is an Index-Only Scan?",
      answer: "An index-only scan answers a query entirely from the B-tree index leaf pages without fetching table heap pages. In PostgreSQL, this requires: 1) all selected columns to exist in the index (via key or INCLUDE columns); and 2) heap pages to be marked all-visible in the visibility map."
    },
    {
      id: 23,
      category: "indexing",
      question: "What is SARGability and how does it impact index usage?",
      answer: "SARGable (Search Argument Able) predicates allow the optimizer to perform an index seek. Wrapping an indexed column in a function (e.g. 'WHERE DATE(order_date) = ...' or 'WHERE col + 1 = 10') destroys SARGability, forcing a sequential table scan. Rewrite as range boundaries: 'WHERE order_date >= ... AND order_date < ...'."
    },
    {
      id: 24,
      category: "indexing",
      question: "What is the difference between B-tree, GIN, and BRIN indexes in PostgreSQL?",
      answer: "B-tree: General purpose, scalar types, equality, ranges, sorting. GIN (Generalized Inverted Index): Multiple keys per item, ideal for JSONB containment (@>), full-text search, and arrays. BRIN (Block Range Index): Extremely compact, indexes min/max ranges for physical block clusters; perfect for multi-billion row append-only timestamp tables."
    },
    {
      id: 25,
      category: "optimization",
      question: "How do you systematically diagnose a slow SQL query in production?",
      answer: "1) Execute 'EXPLAIN (ANALYZE, BUFFERS)'. 2) Compare estimated rows vs actual rows (large mismatches indicate stale statistics -> run ANALYZE). 3) Identify scan types (unintended Seq Scans). 4) Check join nodes (expensive nested loops vs hash joins). 5) Inspect memory usage (Sort/Hash spilling to temp disk). 6) Add targeted covering/partial indexes or rewrite predicates to be SARGable."
    }
  ];

  const filteredQuestions = useMemo(() => {
    if (interviewFilter === "all") return interviewQuestions;
    return interviewQuestions.filter(q => q.category === interviewFilter);
  }, [interviewFilter]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-900">
      {/* Top Universal Module Navigation Bar */}
      <ModuleNav
        currentModuleId="sql"
        courseId="data-engineering"
        courseName="Data Engineering Master Course"
        trackName="Data Engineering"
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Header Breadcrumb & Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium">
            <span
              onClick={() => navigate("/learning")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Curriculum
            </span>
            <span>/</span>
            <span
              onClick={() => navigate("/courses/data-engineering")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Data Engineering
            </span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 3 · Advanced SQL</span>
          </div>

          {/* Mode Pill Switcher */}
          <div className="flex items-center bg-stone-200/70 p-1 rounded-2xl self-start md:self-auto border border-stone-300/60 shadow-inner">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Specification & Blueprints
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "workbench"
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              Interactive Workbenches (6)
            </button>
          </div>
        </div>

        {/* HERO BANNER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-orange-100 text-orange-800 border border-orange-200">
              DATA ENGINEERING MASTER COURSE · MODULE 3
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-stone-100 text-stone-700 border border-stone-200">
              DATABASE ENGINEERING · INTERMEDIATE TO ADVANCED
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 28 SECTIONS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-4">
            Module 3 — Advanced SQL and Relational Database Systems
          </h1>

          <p className="text-stone-600 text-base sm:text-lg max-w-4xl leading-relaxed mb-6">
            Master the database engine powering mission-critical data platforms. From relational data models, normal forms (1NF–3NF), DDL/DML, and multi-table joins to recursive CTEs, window functions, ACID transactions, MVCC snapshots, B-tree/GIN/BRIN indexing, EXPLAIN ANALYZE execution plans, and production query optimization on PostgreSQL.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-100 text-xs sm:text-sm">
            <div>
              <span className="text-stone-600 block">Primary Database</span>
              <span className="font-bold text-stone-900">PostgreSQL 16+</span>
            </div>
            <div>
              <span className="text-stone-600 block">Query Capabilities</span>
              <span className="font-bold text-stone-900">CTEs, Windowing, Recursion</span>
            </div>
            <div>
              <span className="text-stone-600 block">Storage & Engine</span>
              <span className="font-bold text-stone-900">ACID, MVCC, WAL, Locks</span>
            </div>
            <div>
              <span className="text-stone-600 block">Optimization Tools</span>
              <span className="font-bold text-stone-900">EXPLAIN ANALYZE, B-tree/GIN</span>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* TAB 1: CURRICULUM VIEW (SPECIFICATION & BLUEPRINTS) */}
        {/* =================================================================== */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Quick Navigation Anchor Bar */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 text-xs flex flex-wrap gap-2 items-center">
              <span className="font-bold text-stone-700 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Jump to:
              </span>
              <a href="#sec-1" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">1. RDBMS Internals</a>
              <a href="#sec-2" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">2. Normalization</a>
              <a href="#sec-3" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">3. Schema & Seed</a>
              <a href="#sec-6" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">6. Execution Order</a>
              <a href="#sec-7" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">7. Joins & Fanout</a>
              <a href="#sec-9" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">9. CTEs</a>
              <a href="#sec-10" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">10. Recursive CTEs</a>
              <a href="#sec-11" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">11. Window Functions</a>
              <a href="#sec-14" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">14. Views & MatViews</a>
              <a href="#sec-17" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">17. ACID & MVCC</a>
              <a href="#sec-19" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">19. Indexing Types</a>
              <a href="#sec-20" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">20. EXPLAIN ANALYZE</a>
              <a href="#sec-22" className="px-2.5 py-1 bg-orange-100 text-orange-800 font-bold rounded-lg transition-colors">22. Case Study</a>
              <a href="#sec-26" className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors">26. Interview Q&A</a>
            </div>

            {/* SECTION 1: INTRODUCTION TO RDBMS */}
            <section id="sec-1" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 1</span>
                <span className="text-xs text-stone-600">Relational Architecture</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Introduction to Relational Database Systems</h2>
              
              <p className="text-stone-600 leading-relaxed mb-4">
                A Relational Database Management System (RDBMS) stores data as relations (tables composed of rows and columns) connected through primary and foreign keys. PostgreSQL is an advanced open-source object-relational database renowned for SQL standards compliance, robust ACID concurrency, and extensibility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">Core Internal Architecture</h4>
                  <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                    <li><strong>Query Parser:</strong> Checks syntax and builds the internal parse tree representation.</li>
                    <li><strong>Query Optimizer:</strong> Evaluates alternate join orders and scan paths using cost models.</li>
                    <li><strong>Execution Engine:</strong> Executes the chosen physical plan (Nested Loop, Hash, Merge).</li>
                    <li><strong>Storage & Buffer Cache:</strong> Caches data pages in shared buffers to avoid disk I/O.</li>
                    <li><strong>WAL & MVCC:</strong> Enforces durability and snapshot-based read consistency.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">Relational vs NoSQL Engines</h4>
                  <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                    <li><strong>Schema:</strong> Relational enforces strict schema DDL; NoSQL often allows schema-on-read.</li>
                    <li><strong>Transactions:</strong> RDBMS provides ACID guarantees; NoSQL often relaxes to eventual consistency.</li>
                    <li><strong>Joins:</strong> Relational databases excel at declarative joins across normalized entities.</li>
                    <li><strong>Use Case:</strong> RDBMS powers operational business transactions and analytical core models.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 2: RELATIONAL DATA MODELS & NORMALIZATION */}
            <section id="sec-2" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 2</span>
                <span className="text-xs text-stone-600">Data Modeling & Normal Forms</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Relational Data Models and Normalization</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">1NF (First Normal Form)</h4>
                  <p className="text-xs text-stone-600 mb-2">Atomic values and no repeating groups.</p>
                  <div className="text-[11px] font-mono bg-white p-2 rounded-lg border text-stone-700">
                    Bad: 'Laptop, Mouse'<br />
                    Good: Separate row for each item.
                  </div>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">2NF (Second Normal Form)</h4>
                  <p className="text-xs text-stone-600 mb-2">1NF + No partial dependencies on composite keys.</p>
                  <div className="text-[11px] font-mono bg-white p-2 rounded-lg border text-stone-700">
                    Product name depends only on product_id, not on (order_id, product_id).
                  </div>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">3NF (Third Normal Form)</h4>
                  <p className="text-xs text-stone-600 mb-2">2NF + No transitive dependencies on candidate keys.</p>
                  <div className="text-[11px] font-mono bg-white p-2 rounded-lg border text-stone-700">
                    Department name depends on department_id, not directly on employee_id.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: SCHEMA & SAMPLE DATA */}
            <section id="sec-3" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 3</span>
                <span className="text-xs text-stone-600">DDL & Seed Data</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Database Schema and Seed Data</h2>
              <p className="text-stone-600 text-sm mb-4">
                The full normalized e-commerce database schema used for the queries and case study:
              </p>
              <pre className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin] mb-4">
{`CREATE SCHEMA IF NOT EXISTS ecommerce;

CREATE TABLE ecommerce.customers (
    customer_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    city VARCHAR(80),
    registration_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE ecommerce.categories (
    category_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE ecommerce.products (
    product_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    category_id BIGINT REFERENCES ecommerce.categories(category_id),
    price NUMERIC(12,2) NOT NULL CHECK (price >= 0),
    stock_quantity INTEGER NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0)
);

CREATE TABLE ecommerce.orders (
    order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id BIGINT NOT NULL REFERENCES ecommerce.customers(customer_id),
    order_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    total_amount NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (total_amount >= 0)
);

CREATE TABLE ecommerce.order_items (
    order_item_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES ecommerce.orders(order_id),
    product_id BIGINT NOT NULL REFERENCES ecommerce.products(product_id),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(12,2) NOT NULL CHECK (unit_price >= 0)
);

CREATE TABLE ecommerce.payments (
    payment_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES ecommerce.orders(order_id),
    payment_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    payment_method VARCHAR(30),
    payment_status VARCHAR(30) NOT NULL,
    amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0)
);`}
              </pre>
            </section>

            {/* SECTION 6 & 7: EXECUTION ORDER, JOINS & FANOUT */}
            <section id="sec-7" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 6 & 7</span>
                <span className="text-xs text-stone-600">Joins & Fanout Trap</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">6 & 7. SQL Execution Order, Joins, and the Fanout Trap</h2>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-950 mb-4">
                <strong>Logical Execution Order:</strong> 1. FROM &rarr; 2. WHERE &rarr; 3. GROUP BY &rarr; 4. HAVING &rarr; 5. SELECT &rarr; 6. DISTINCT &rarr; 7. ORDER BY &rarr; 8. LIMIT
              </div>

              <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-950 mb-4">
                <strong>The Join Fanout Trap:</strong> If Order #1 has 3 items and 2 payment attempts, a naive <code className="font-mono">JOIN order_items JOIN payments</code> generates 3 &times; 2 = 6 rows. Summing revenue across this joined table inflates numbers. Solve this by pre-aggregating child relations in separate CTEs before joining!
              </div>

              <pre className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin]">
{`-- Correct Pre-Aggregation CTE Pattern to Prevent Join Fanout
WITH item_totals AS (
    SELECT order_id, SUM(quantity * unit_price) AS item_revenue
    FROM ecommerce.order_items
    GROUP BY order_id
),
payment_totals AS (
    SELECT order_id, SUM(amount) AS payment_amount
    FROM ecommerce.payments
    WHERE payment_status = 'SUCCESS'
    GROUP BY order_id
)
SELECT 
    o.order_id,
    it.item_revenue,
    pt.payment_amount
FROM ecommerce.orders AS o
LEFT JOIN item_totals AS it ON o.order_id = it.order_id
LEFT JOIN payment_totals AS pt ON o.order_id = pt.order_id;`}
              </pre>
            </section>

            {/* SECTION 9 & 10: CTES & RECURSIVE CTES */}
            <section id="sec-10" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 9 & 10</span>
                <span className="text-xs text-stone-600">Hierarchies & Trees</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">9 & 10. Common Table Expressions (CTEs) & Recursive Trees</h2>
              
              <p className="text-stone-600 text-sm mb-4">
                Recursive CTEs traverse hierarchical parent-child relationships (organizational charts, category taxonomies, BOM trees) using an anchor query, UNION ALL, and an iterative member:
              </p>

              <pre className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin]">
{`WITH RECURSIVE employee_hierarchy AS (
    -- 1. Anchor member (Root node)
    SELECT employee_id, employee_name, manager_id, 1 AS level, employee_name::TEXT AS path
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- 2. Recursive member (Child traversal)
    SELECT e.employee_id, e.employee_name, e.manager_id, h.level + 1, h.path || ' -> ' || e.employee_name
    FROM employees AS e
    INNER JOIN employee_hierarchy AS h ON e.manager_id = h.employee_id
)
SELECT * FROM employee_hierarchy ORDER BY level, employee_id;`}
              </pre>
            </section>

            {/* SECTION 11 & 12: WINDOW FUNCTIONS & RANKING */}
            <section id="sec-11" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 11 & 12</span>
                <span className="text-xs text-stone-600">Analytical Calculations</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">11 & 12. Window Functions and Analytical Ranking</h2>

              <p className="text-stone-600 text-sm mb-4">
                Unlike GROUP BY which collapses rows, window functions compute running aggregates, period-over-period lags, and ranks while keeping all individual rows intact.
              </p>

              <div className="overflow-x-auto [scrollbar-width:thin] mb-4">
                <table className="w-full text-xs text-left border-collapse border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Function</th>
                      <th className="p-3">Behavior on Ties</th>
                      <th className="p-3">Primary Data Engineering Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr>
                      <td className="p-3 font-mono font-bold text-stone-900">ROW_NUMBER()</td>
                      <td className="p-3 text-stone-600">Unique numbers (1, 2, 3...)</td>
                      <td className="p-3 text-stone-600">Deduplication: keep only row_num = 1.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-stone-900">RANK()</td>
                      <td className="p-3 text-stone-600">Same rank with gaps (1, 1, 3)</td>
                      <td className="p-3 text-stone-600">Competition standings, Olympic ranking.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-stone-900">DENSE_RANK()</td>
                      <td className="p-3 text-stone-600">Same rank without gaps (1, 1, 2)</td>
                      <td className="p-3 text-stone-600">Salary bands, top-N customer tiers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-stone-900">LAG() / LEAD()</td>
                      <td className="p-3 text-stone-600">Relative offset access</td>
                      <td className="p-3 text-stone-600">Month-over-month revenue growth calculation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 17 & 18: ACID, MVCC & CONCURRENCY */}
            <section id="sec-17" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 17 & 18</span>
                <span className="text-xs text-stone-600">Transactions & Concurrency</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">17 & 18. Transactions, ACID Properties, MVCC, and Locking</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs">
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-2">ACID Guarantees</h4>
                  <ul className="space-y-1.5 text-stone-600">
                    <li>• <strong>Atomicity:</strong> All or nothing (via ROLLBACK / commit boundaries).</li>
                    <li>• <strong>Consistency:</strong> Preserves constraints, checks, and foreign keys.</li>
                    <li>• <strong>Isolation:</strong> Read Committed (default) through Serializable.</li>
                    <li>• <strong>Durability:</strong> Changes survive crashes via Write-Ahead Logging (WAL).</li>
                  </ul>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-2">MVCC & Vacuuming</h4>
                  <p className="text-stone-600 leading-relaxed">
                    PostgreSQL never overwrites in-place during UPDATE; it writes new tuple versions with xmin/xmax transaction visibility IDs. Readers never block writers and writers never block readers. Dead tuples are cleaned up by VACUUM.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 19 & 20: INDEXING & EXPLAIN ANALYZE */}
            <section id="sec-19" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 19 & 20</span>
                <span className="text-xs text-stone-600">Performance Engineering</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">19 & 20. Indexing Internals and Query Execution Plans</h2>

              <p className="text-stone-600 text-sm mb-4">
                Understand B-tree, Hash, GIN, and BRIN indexes, and verify performance using <code className="font-mono text-orange-600">EXPLAIN (ANALYZE, BUFFERS)</code>:
              </p>

              <pre className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin]">
{`-- Partial Index for Active Query Tuning
CREATE INDEX idx_completed_customer_orders 
ON ecommerce.orders(customer_id) 
INCLUDE (total_amount) 
WHERE status = 'COMPLETED';

-- Verify Execution Plan and Buffer Cache Hits
EXPLAIN (ANALYZE, BUFFERS)
SELECT customer_id, SUM(total_amount) 
FROM ecommerce.orders 
WHERE status = 'COMPLETED' 
GROUP BY customer_id;`}
              </pre>
            </section>

            {/* SECTION 22: REAL WORLD CASE STUDY */}
            <section id="sec-22" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Section 22</span>
                <span className="text-xs text-stone-600">ShopSmart Case Study</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">22. Complete Case Study — E-commerce Database Engineering</h2>
              
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl text-xs text-orange-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span>Test all 11 business queries from the ShopSmart case study live with execution timings and stats in our SQL Studio:</span>
                <button
                  onClick={() => {
                    setActiveTab("workbench");
                    setActiveWorkbench("sql_studio");
                  }}
                  className="px-4 py-2 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-sm whitespace-nowrap self-start sm:self-auto"
                >
                  Open SQL Studio &rarr;
                </button>
              </div>
            </section>

            {/* ROADMAP FOOTER */}
            <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Next In Curriculum</span>
                <h4 className="text-lg font-bold text-white">Module 4 — Data Modeling, Warehousing & Dimensional Modeling</h4>
                <p className="text-stone-400 text-xs mt-1">Progress from operational relational databases to Star/Snowflake schemas, Fact/Dimension tables, and Slowly Changing Dimensions (SCD).</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/learning/data-engineering/python")}
                  className="px-4 py-2 rounded-xl bg-stone-800 text-stone-200 text-xs font-bold hover:bg-stone-700 transition-colors"
                >
                  &larr; Module 2
                </button>
                <button
                  onClick={() => {
                    setActiveTab("workbench");
                    setActiveWorkbench("quiz");
                  }}
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition-colors shadow-sm"
                >
                  Take SQL Assessment &rarr;
                </button>
              </div>
            </section>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: INTERACTIVE WORKBENCHES VIEW */}
        {/* =================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
              <button
                onClick={() => setActiveWorkbench("sql_studio")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "sql_studio"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Table className="w-3.5 h-3.5" /> 1. SQL Query Studio
              </button>

              <button
                onClick={() => setActiveWorkbench("explain_plan")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "explain_plan"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Activity className="w-3.5 h-3.5" /> 2. EXPLAIN Plan Analyzer
              </button>

              <button
                onClick={() => setActiveWorkbench("recursive_tree")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "recursive_tree"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Network className="w-3.5 h-3.5" /> 3. Recursive Tree Explorer
              </button>

              <button
                onClick={() => setActiveWorkbench("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "quiz"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" /> 4. Knowledge Quiz (15 Qs)
              </button>

              <button
                onClick={() => setActiveWorkbench("labs")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "labs"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" /> 5. Labs & Capstone Tracker
              </button>

              <button
                onClick={() => setActiveWorkbench("interview")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "interview"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" /> 6. Interview Vault (25+)
              </button>
            </div>

            {/* WORKBENCH 1: INTERACTIVE SQL QUERY STUDIO */}
            {activeWorkbench === "sql_studio" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Table className="w-5 h-5 text-orange-600" />
                      PostgreSQL Interactive Query Studio
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Execute analytical SQL queries against the preloaded ShopSmart database schema with instant tabular results.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-stone-600">
                    Database: <strong className="text-stone-800">ecommerce_db</strong>
                  </div>
                </div>

                {/* Query Selector Tabs */}
                <div className="flex flex-wrap gap-2">
                  {sampleQueries.map(q => (
                    <button
                      key={q.id}
                      onClick={() => setSelectedQueryId(q.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedQueryId === q.id
                          ? "bg-orange-600 text-white shadow-sm"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {q.name}
                    </button>
                  ))}
                </div>

                {/* SQL Code Display */}
                <div>
                  <div className="flex items-center justify-between bg-stone-800 px-4 py-2 rounded-t-2xl text-xs text-stone-300 font-mono">
                    <span>SQL Query</span>
                    <button
                      onClick={() => handleCopy(currentQuery.sql, currentQuery.id)}
                      className="hover:text-white flex items-center gap-1"
                    >
                      {copiedId === currentQuery.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copiedId === currentQuery.id ? "Copied" : "Copy SQL"}
                    </button>
                  </div>
                  <pre className="bg-stone-900 text-stone-100 p-4 rounded-b-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin]">
                    {currentQuery.sql}
                  </pre>
                </div>

                {/* Execution Stats Bar */}
                <div className="flex flex-wrap items-center gap-6 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <span className="text-stone-600 block">Rows Returned</span>
                    <span className="font-bold text-stone-900">{currentQuery.stats.rows}</span>
                  </div>
                  <div>
                    <span className="text-stone-600 block">Execution Time</span>
                    <span className="font-bold text-emerald-600">{currentQuery.stats.executionTime}</span>
                  </div>
                  <div>
                    <span className="text-stone-600 block">Shared Buffers</span>
                    <span className="font-bold text-orange-600">{currentQuery.stats.bufferHits} hits (100% cache hit)</span>
                  </div>
                </div>

                {/* Result Table */}
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-700 tracking-wider mb-2">Query Output</h4>
                  {currentQuery.results.length > 0 ? (
                    <div className="overflow-x-auto [scrollbar-width:thin] border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                          <tr>
                            {Object.keys(currentQuery.results[0]).map((col, idx) => (
                              <th key={idx} className="p-3 font-mono">{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          {currentQuery.results.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-stone-50">
                              {Object.values(row).map((val, cIdx) => (
                                <td key={cIdx} className="p-3 font-mono text-stone-700">{String(val)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="p-8 text-center text-xs text-stone-600 bg-stone-50 rounded-2xl border border-stone-200 italic">
                      Zero matching rows returned (All registered customers have placed orders).
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WORKBENCH 2: EXPLAIN PLAN ANALYZER */}
            {activeWorkbench === "explain_plan" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="pb-4 border-b border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-600" />
                    Interactive EXPLAIN (ANALYZE, BUFFERS) Plan Inspector
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Study how the PostgreSQL cost-based query optimizer selects between Index Scans, Sequential Scans, and Hash Joins.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPlanType("index_scan")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedPlanType === "index_scan" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Index Scan (B-Tree Seek)
                  </button>
                  <button
                    onClick={() => setSelectedPlanType("seq_scan")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedPlanType === "seq_scan" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Sequential Scan (Table Scan)
                  </button>
                  <button
                    onClick={() => setSelectedPlanType("hash_join")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedPlanType === "hash_join" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Hash Join (work_mem)
                  </button>
                </div>

                <div>
                  <span className="text-xs font-bold text-stone-700 block mb-1">Target Query:</span>
                  <div className="p-3 bg-stone-900 text-stone-200 rounded-xl font-mono text-xs">
                    {explainPlans[selectedPlanType].sql}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-stone-700 block mb-1">PostgreSQL Execution Plan Output:</span>
                  <pre className="p-4 bg-stone-950 text-emerald-400 rounded-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin] leading-relaxed">
                    {explainPlans[selectedPlanType].rawPlan}
                  </pre>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-800 mb-2">Optimizer Decision Analysis:</h4>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                    {explainPlans[selectedPlanType].analysis.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: RECURSIVE CTE EXPLORER */}
            {activeWorkbench === "recursive_tree" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="pb-4 border-b border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Network className="w-5 h-5 text-orange-600" />
                    Interactive Recursive CTE Hierarchy Tree
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Visualize how the Recursive CTE evaluates anchor members and traverses employee-manager relationships.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase text-stone-700 tracking-wider mb-2">Organization Tree Nodes</h4>
                    {employeeHierarchy.map(emp => (
                      <div
                        key={emp.id}
                        onClick={() => setExpandedEmployeeId(emp.id)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          expandedEmployeeId === emp.id
                            ? "bg-orange-50 border-orange-300 ring-2 ring-orange-500/20"
                            : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                        }`}
                        style={{ marginLeft: `${(emp.level - 1) * 16}px` }}
                      >
                        <div>
                          <span className="font-bold text-xs text-stone-900">{emp.name}</span>
                          <span className="text-[11px] text-stone-600 block">{emp.title}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white border border-stone-300 text-stone-700">
                          Level {emp.level}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 text-xs">
                    <h4 className="font-bold text-stone-900 mb-3">Selected Node Trace</h4>
                    {(() => {
                      const sel = employeeHierarchy.find(e => e.id === expandedEmployeeId) || employeeHierarchy[0];
                      return (
                        <div className="space-y-3 font-mono">
                          <div>
                            <span className="text-stone-600 block">Full Hierarchy Path:</span>
                            <span className="font-bold text-orange-600 text-sm">{sel.path}</span>
                          </div>
                          <div>
                            <span className="text-stone-600 block">Hierarchy Depth:</span>
                            <span className="font-bold text-stone-900">Level {sel.level}</span>
                          </div>
                          <div>
                            <span className="text-stone-600 block">Reports To:</span>
                            <span className="font-bold text-stone-900">
                              {sel.managerId ? employeeHierarchy.find(e => e.id === sel.managerId)?.name : "None (Root Anchor Member)"}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-stone-200 text-stone-600 font-sans text-xs">
                            The recursive CTE reached this record in iteration #{sel.level}.
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: ASSESSMENT QUIZ (15 Qs) */}
            {activeWorkbench === "quiz" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-orange-600" />
                      Module 3 Knowledge Assessment (15 Questions)
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Validate your mastery of relational databases, query execution, indexing, window functions, and ACID isolation.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-bold text-stone-600">
                      {Object.keys(userAnswers).length} / {quizQuestions.length} Answered
                    </span>
                    {showResults && (
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-extrabold text-xs">
                        Score: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map(q => {
                    const selected = userAnswers[q.id];
                    const isCorrect = selected === q.correctIndex;
                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          showResults
                            ? isCorrect
                              ? "bg-emerald-50/50 border-emerald-200"
                              : "bg-rose-50/50 border-rose-200"
                            : "bg-stone-50 border-stone-200"
                        }`}
                      >
                        <h4 className="font-bold text-stone-900 text-sm mb-3">
                          {q.id}. {q.question}
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map((opt, optIdx) => {
                            let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                            if (selected === optIdx) {
                              btnStyle = "bg-stone-900 text-white font-bold border-stone-900";
                            }
                            if (showResults) {
                              if (optIdx === q.correctIndex) {
                                btnStyle = "bg-emerald-600 text-white font-bold border-emerald-600";
                              } else if (selected === optIdx && !isCorrect) {
                                btnStyle = "bg-rose-600 text-white font-bold border-rose-600";
                              }
                            }
                            return (
                              <button
                                key={optIdx}
                                disabled={showResults}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                className={`p-3 rounded-xl border text-left transition-all ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className="mt-3 pt-3 border-t border-stone-200/60 text-xs text-stone-600">
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowResults(false);
                    }}
                    className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50"
                  >
                    Reset Answers
                  </button>
                  <button
                    onClick={() => setShowResults(true)}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 shadow-sm"
                  >
                    Submit Assessment
                  </button>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: LABS & CAPSTONE TRACKER */}
            {activeWorkbench === "labs" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="pb-4 border-b border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-orange-600" />
                    Practical Labs & Major Capstone Tracker
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Track your progress through Labs 1–7 and the complete E-Commerce Analytics Capstone Project.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 1, title: "Lab 1: Database & Table Creation", desc: "Build student_management database with students, departments, courses, and enrollments." },
                    { id: 2, title: "Lab 2: Dataset Seeding", desc: "Populate at least 20 students, 5 departments, 10 courses, and 50 enrollment records." },
                    { id: 3, title: "Lab 3: Core Query Operations", desc: "Execute filtering, aggregations, department-wise student counts, and course average marks." },
                    { id: 4, title: "Lab 4: Multi-Table Joins", desc: "Implement INNER, LEFT, and FULL OUTER joins to detect un-enrolled students and empty courses." },
                    { id: 5, title: "Lab 5: CTEs & Window Functions", desc: "Rank students in departments with DENSE_RANK(), calculate cumulative enrollments, and partition NTILE(4)." },
                    { id: 6, title: "Lab 6: Transaction Management", desc: "Build fee-payment system with transactions, ROLLBACK, SAVEPOINTS, and error handling." },
                    { id: 7, title: "Lab 7: Query Plan Optimization", desc: "Populate 100k rows, inspect plans via EXPLAIN ANALYZE, test B-tree vs partial indexes, and update statistics." },
                    { id: 8, title: "Capstone Phase 1: Database Modeling (ERD)", desc: "Design ERD for customers, products, orders, order items, categories, payments, inventory, refunds." },
                    { id: 9, title: "Capstone Phase 2: Schema & Constraints DDL", desc: "Deploy normalized tables, check constraints, foreign keys, and indexes." },
                    { id: 10, title: "Capstone Phase 3 & 4: 20 Analytical Queries & Views", desc: "Write CTEs, window ranking, materialized views, recursive taxonomy queries, and audit triggers." },
                    { id: 11, title: "Capstone Phase 5 & 6: Python ETL Integration", desc: "Build Python batch loader with SQLAlchemy, connection pooling, and Pytest test suite." }
                  ].map(lab => (
                    <div
                      key={lab.id}
                      onClick={() => toggleLab(lab.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                        completedLabs[lab.id]
                          ? "bg-emerald-50/50 border-emerald-200"
                          : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      <button className="mt-0.5">
                        {completedLabs[lab.id] ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Square className="w-5 h-5 text-stone-400" />
                        )}
                      </button>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-stone-900">{lab.title}</h4>
                        <p className="text-xs text-stone-600 mt-1">{lab.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 6: INTERVIEW QUESTIONS VAULT */}
            {activeWorkbench === "interview" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                      SQL & Database Engineering Interview Vault
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Targeted technical questions covering ACID, MVCC, Indexing, and Query Optimization.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {["all", "fundamentals", "sql_basics", "joins", "advanced", "db_programming", "transactions", "indexing", "optimization"].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setInterviewFilter(cat)}
                        className={`px-2.5 py-1 rounded-lg font-bold capitalize transition-all ${
                          interviewFilter === cat
                            ? "bg-orange-600 text-white"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {cat === "sql_basics" ? "SQL Basics" : cat === "db_programming" ? "DB Programming" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredQuestions.map(q => {
                    const isExpanded = expandedInterviewQuestion === q.id;
                    return (
                      <div
                        key={q.id}
                        className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50"
                      >
                        <button
                          onClick={() => setExpandedInterviewQuestion(isExpanded ? null : q.id)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-stone-100/70 transition-colors"
                        >
                          <span className="font-bold text-xs sm:text-sm text-stone-900">
                            {q.id}. {q.question}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-stone-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-stone-600 flex-shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-white">
                            <p className="mt-2">{q.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
