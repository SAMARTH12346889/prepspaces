// projectx/src/Componets/DataEngineeringInternals.jsx
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
  RotateCcw
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringInternalsSections from "./DataEngineeringInternalsSections";

export default function DataEngineeringInternals() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("buffer_pool"); // 'buffer_pool' | 'index_internals' | 'join_engine' | 'mvcc' | 'wal_recovery' | 'tuning_quiz'

  // =========================================================================
  // WORKBENCH 1: Buffer Pool & Memory Management Simulator
  // =========================================================================
  const [bufferFrames, setBufferFrames] = useState([
    { id: 0, pageId: "P-101", table: "orders", dirty: false, pinCount: 1, lastAccess: 1 },
    { id: 1, pageId: "P-102", table: "orders", dirty: true, pinCount: 0, lastAccess: 2 },
    { id: 2, pageId: "P-201", table: "customers", dirty: false, pinCount: 0, lastAccess: 3 },
    { id: 3, pageId: "P-305", table: "products", dirty: false, pinCount: 0, lastAccess: 4 },
  ]);
  const [bufferStats, setBufferStats] = useState({ hits: 24, misses: 6, dirtyFlushes: 2, evictions: 2 });
  const [requestedPage, setRequestedPage] = useState("P-101");
  const [requestMode, setRequestMode] = useState("read"); // 'read' | 'write'
  const [bufferLog, setBufferLog] = useState([
    "Buffer pool initialized with 4 frames (8KB PostgreSQL standard pages).",
    "Pre-warmed frames with P-101 (orders), P-102 (orders), P-201 (customers), P-305 (products)."
  ]);

  const hitRatio = useMemo(() => {
    const total = bufferStats.hits + bufferStats.misses;
    if (total === 0) return 100;
    return ((bufferStats.hits / total) * 100).toFixed(1);
  }, [bufferStats]);

  const handlePageRequest = () => {
    const pageToFind = requestedPage.trim().toUpperCase();
    if (!pageToFind) return;

    const existingIdx = bufferFrames.findIndex(f => f.pageId === pageToFind);
    if (existingIdx !== -1) {
      // CACHE HIT
      const updated = [...bufferFrames];
      if (requestMode === "write") {
        updated[existingIdx].dirty = true;
      }
      updated[existingIdx].lastAccess = Date.now();
      setBufferFrames(updated);
      setBufferStats(prev => ({ ...prev, hits: prev.hits + 1 }));
      setBufferLog(prev => [
        `[CACHE HIT] Requested page ${pageToFind} found in Frame ${existingIdx} (${requestMode === "write" ? "Marked DIRTY" : "Clean read"}).`,
        ...prev.slice(0, 7)
      ]);
    } else {
      // CACHE MISS
      // Find victim frame using LRU (least recent lastAccess and pinCount === 0)
      let victimIdx = 0;
      let oldestAccess = Infinity;
      bufferFrames.forEach((frame, idx) => {
        if (frame.pinCount === 0 && frame.lastAccess < oldestAccess) {
          oldestAccess = frame.lastAccess;
          victimIdx = idx;
        }
      });

      const victim = bufferFrames[victimIdx];
      let flushedDirty = false;
      if (victim.dirty) {
        flushedDirty = true;
      }

      const updated = [...bufferFrames];
      updated[victimIdx] = {
        id: victimIdx,
        pageId: pageToFind,
        table: pageToFind.startsWith("P-1") ? "orders" : pageToFind.startsWith("P-2") ? "customers" : "products",
        dirty: requestMode === "write",
        pinCount: 0,
        lastAccess: Date.now()
      };
      setBufferFrames(updated);
      setBufferStats(prev => ({
        ...prev,
        misses: prev.misses + 1,
        evictions: prev.evictions + 1,
        dirtyFlushes: flushedDirty ? prev.dirtyFlushes + 1 : prev.dirtyFlushes
      }));
      setBufferLog(prev => [
        `[CACHE MISS] Page ${pageToFind} not in memory. Evicted ${victim.pageId} from Frame ${victimIdx}${flushedDirty ? " (flushed dirty page to disk first)" : ""}. Loaded from storage.`,
        ...prev.slice(0, 7)
      ]);
    }
  };

  const handleFlushDirtyPages = () => {
    let count = 0;
    const updated = bufferFrames.map(f => {
      if (f.dirty) {
        count++;
        return { ...f, dirty: false };
      }
      return f;
    });
    setBufferFrames(updated);
    setBufferStats(prev => ({ ...prev, dirtyFlushes: prev.dirtyFlushes + count }));
    setBufferLog(prev => [
      `[CHECKPOINT] Checkpoint triggered: flushed ${count} dirty page(s) to persistent storage. All frames now clean.`,
      ...prev.slice(0, 7)
    ]);
  };

  // =========================================================================
  // WORKBENCH 2: Index Internals Visualizer (B+ Tree vs LSM Tree vs Hash)
  // =========================================================================
  const [selectedIndexType, setSelectedIndexType] = useState("btree"); // 'btree' | 'lsm' | 'hash'
  const [indexSearchKey, setIndexSearchKey] = useState("45");
  const [indexQueryResult, setIndexQueryResult] = useState(null);

  const handleIndexQuery = () => {
    const key = parseInt(indexSearchKey, 10);
    if (isNaN(key)) return;

    if (selectedIndexType === "btree") {
      let path = [];
      path.push("Root Node [30 | 60]");
      if (key < 30) {
        path.push("Internal Node [10 | 20]");
        path.push(`Leaf Node Block #4 (keys 10..29) -> Points to heap tuple`);
      } else if (key < 60) {
        path.push("Internal Node [30 | 50]");
        path.push(`Leaf Node Block #5 (keys 30..59) -> Target Key ${key} located via binary search in leaf`);
      } else {
        path.push("Internal Node [70 | 80]");
        path.push(`Leaf Node Block #6 (keys 60..90) -> Points to heap tuple`);
      }
      setIndexQueryResult({
        found: true,
        type: "B+ Tree",
        timeComplexity: "O(log N)",
        ioCost: "3 Page Reads (Root -> Internal -> Leaf -> Heap fetch)",
        steps: path
      });
    } else if (selectedIndexType === "lsm") {
      let path = [];
      path.push("1. Check Memtable (Active in-memory red-black tree): Key not present.");
      path.push("2. Check Immutable Memtable: Key not present.");
      path.push("3. Probe Level 0 Bloom Filter: Hash check = POSITIVE (Might exist).");
      path.push("4. Scan Level 0 SSTable file `sstable_l0_01.db`: Read block.");
      path.push(`5. Key ${key} found with Timestamp T=1698200!`);
      setIndexQueryResult({
        found: true,
        type: "LSM Tree",
        timeComplexity: "O(log N) with Bloom filter pruning",
        ioCost: "1 Sequential SSTable Block Read (Skipped 3 SSTables via Bloom Filters)",
        steps: path
      });
    } else {
      // Hash Index
      const bucket = key % 8;
      let path = [];
      path.push(`1. Calculate hash: h(${key}) = ${key} % 8 = Bucket #${bucket}`);
      path.push(`2. Read Bucket #${bucket} header from disk.`);
      path.push(`3. Scan item slot: Key ${key} matched -> TID (page 12, slot 4)`);
      setIndexQueryResult({
        found: true,
        type: "Hash Index",
        timeComplexity: "O(1) Average Lookup",
        ioCost: "1 Bucket Read + 1 Heap Tuple Read (No range query support)",
        steps: path
      });
    }
  };

  // =========================================================================
  // WORKBENCH 3: Query Execution & Join Algorithm Workbench
  // =========================================================================
  const [selectedJoinType, setSelectedJoinType] = useState("hash"); // 'nested' | 'hash' | 'merge'
  const [workMemMb, setWorkMemMb] = useState(16); // 4MB to 64MB
  const [ordersRowCount, setOrdersRowCount] = useState(100000);
  const [customersRowCount, setCustomersRowCount] = useState(10000);

  const joinMetrics = useMemo(() => {
    const memoryRequiredMb = ((customersRowCount * 128) / (1024 * 1024)).toFixed(1);
    const exceedsMemory = parseFloat(memoryRequiredMb) > workMemMb;

    if (selectedJoinType === "nested") {
      return {
        name: "Nested Loop Join",
        bestFor: "Small outer dataset or when inner relation has an indexed primary key lookup.",
        complexity: "O(M × N) without index, O(M × log N) with index",
        estCost: (ordersRowCount * 0.05).toFixed(0),
        memorySpill: false,
        spillDesc: "None (Streams tuples one by one, minimal memory footprint)",
        explainPlan: `Nested Loop  (cost=0.58..${(ordersRowCount * 0.05).toFixed(0)} rows=${ordersRowCount} width=84)\n  ->  Seq Scan on orders o  (cost=0.00..1845.00 rows=${ordersRowCount})\n  ->  Index Scan using customers_pkey on customers c  (cost=0.29..0.35 rows=1)\n        Index Cond: (c.customer_id = o.customer_id)`
      };
    } else if (selectedJoinType === "hash") {
      return {
        name: "Hash Join",
        bestFor: "Unsorted large datasets with equality join predicates (=). Most common in OLAP/OLTP joins.",
        complexity: "O(M + N) with sufficient work_mem",
        estCost: (customersRowCount * 0.02 + ordersRowCount * 0.015).toFixed(0),
        memorySpill: exceedsMemory,
        spillDesc: exceedsMemory
          ? `WARNING: Hash table size (${memoryRequiredMb}MB) exceeds work_mem (${workMemMb}MB). Spilled partitions to disk (Batch 1 & 2 via temp files)!`
          : `Hash table (${memoryRequiredMb}MB) fits fully inside work_mem (${workMemMb}MB). In-memory single-pass hash join.`,
        explainPlan: `Hash Join  (cost=345.00..${(customersRowCount * 0.02 + ordersRowCount * 0.015).toFixed(0)} rows=${ordersRowCount} width=84)\n  Hash Cond: (o.customer_id = c.customer_id)\n  ->  Seq Scan on orders o  (cost=0.00..1845.00 rows=${ordersRowCount})\n  ->  Hash  (cost=195.00..195.00 rows=${customersRowCount})\n        Buckets: 16384  Batches: ${exceedsMemory ? 2 : 1}  Memory Usage: ${Math.min(workMemMb, parseFloat(memoryRequiredMb))}MB${exceedsMemory ? " (Spill to disk)" : ""}\n        ->  Seq Scan on customers c  (cost=0.00..195.00 rows=${customersRowCount})`
      };
    } else {
      return {
        name: "Sort-Merge Join",
        bestFor: "Both relations are already sorted on join keys (e.g. from B-tree index) or range joins.",
        complexity: "O(M log M + N log N) for sorting, O(M + N) for linear merge scan",
        estCost: (ordersRowCount * 0.035).toFixed(0),
        memorySpill: workMemMb < 8,
        spillDesc: workMemMb < 8 ? "External disk sort triggered (temp files created)" : "In-memory quicksort performed",
        explainPlan: `Merge Join  (cost=840.00..${(ordersRowCount * 0.035).toFixed(0)} rows=${ordersRowCount} width=84)\n  Merge Cond: (o.customer_id = c.customer_id)\n  ->  Sort  (cost=520.00..545.00 rows=${ordersRowCount})\n        Sort Key: o.customer_id\n        Sort Method: ${workMemMb < 8 ? "external merge  Disk: 4096kB" : "quicksort  Memory: 3840kB"}\n        ->  Seq Scan on orders o\n  ->  Sort  (cost=140.00..152.00 rows=${customersRowCount})\n        Sort Key: c.customer_id\n        Sort Method: quicksort  Memory: 1024kB\n        ->  Seq Scan on customers c`
      };
    }
  }, [selectedJoinType, workMemMb, ordersRowCount, customersRowCount]);

  // =========================================================================
  // WORKBENCH 4: MVCC & Concurrency Isolation Simulator
  // =========================================================================
  const [isolationLevel, setIsolationLevel] = useState("read_committed"); // 'read_committed' | 'repeatable_read' | 'serializable'
  const [t1Status, setT1Status] = useState("IDLE"); // 'IDLE' | 'ACTIVE' | 'COMMITTED' | 'ABORTED'
  const [t2Status, setT2Status] = useState("IDLE");
  const [tableTuples, setTableTuples] = useState([
    { tid: "Tuple (0,1)", customerId: 101, balance: 5000, xmin: 500, xmax: 0, status: "LIVE" },
    { tid: "Tuple (0,2)", customerId: 102, balance: 12000, xmin: 501, xmax: 0, status: "LIVE" },
  ]);
  const [mvccLogs, setMvccLogs] = useState([
    "PostgreSQL MVCC state initialized. Current global TxID = 510.",
    "Tuple (0,1) created by TxID 500 (xmin=500, xmax=0)."
  ]);

  const handleStartT1 = () => {
    setT1Status("ACTIVE (TxID 511)");
    setMvccLogs(prev => [
      `[T1 START] Transaction T1 initiated with Snapshot TxID=511 under ${isolationLevel.replace('_', ' ').toUpperCase()}.`,
      ...prev.slice(0, 7)
    ]);
  };

  const handleStartT2 = () => {
    setT2Status("ACTIVE (TxID 512)");
    setMvccLogs(prev => [
      `[T2 START] Transaction T2 initiated with Snapshot TxID=512 under ${isolationLevel.replace('_', ' ').toUpperCase()}.`,
      ...prev.slice(0, 7)
    ]);
  };

  const handleT2UpdateBalance = () => {
    // T2 updates customer 101 balance to 7000
    // In MVCC: old tuple xmax is set to 512, and a new tuple is appended with xmin=512!
    setTableTuples(prev => [
      { ...prev[0], xmax: 512, status: "MARKED_DELETED" },
      { tid: "Tuple (0,3)", customerId: 101, balance: 7000, xmin: 512, xmax: 0, status: "UNCOMMITTED" },
      prev[1]
    ]);
    setMvccLogs(prev => [
      `[T2 UPDATE] T2 (TxID 512) updated Customer 101 balance to 7000. Tuple (0,1) xmax set to 512; new Tuple (0,3) created with xmin=512.`,
      ...prev.slice(0, 7)
    ]);
  };

  const handleT2Commit = () => {
    setT2Status("COMMITTED (TxID 512)");
    setTableTuples(prev => prev.map(t => t.tid === "Tuple (0,3)" ? { ...t, status: "LIVE" } : t.status === "MARKED_DELETED" ? { ...t, status: "DEAD" } : t));
    setMvccLogs(prev => [
      `[T2 COMMIT] Transaction T2 committed. Tuple (0,3) is now committed live. Old Tuple (0,1) is now a DEAD TUPLE (eligible for VACUUM).`,
      ...prev.slice(0, 7)
    ]);
  };

  const handleT1Read = () => {
    if (isolationLevel === "read_committed") {
      // Sees latest committed
      const val = t2Status.startsWith("COMMITTED") ? 7000 : 5000;
      setMvccLogs(prev => [
        `[T1 SELECT] Read Committed snapshot: T1 reads Customer 101 Balance = ${val} (Reads latest committed tuple).`,
        ...prev.slice(0, 7)
      ]);
    } else {
      // Repeatable read / Serializable sees snapshot taken at T1 start (TxID 511, before 512 committed!)
      setMvccLogs(prev => [
        `[T1 SELECT] ${isolationLevel === 'repeatable_read' ? 'Repeatable Read' : 'Serializable'} snapshot: T1 reads Customer 101 Balance = 5000! (Ignores TxID 512 changes due to initial snapshot isolation).`,
        ...prev.slice(0, 7)
      ]);
    }
  };

  const handleVacuumCleanup = () => {
    setTableTuples(prev => prev.filter(t => t.status !== "DEAD"));
    setMvccLogs(prev => [
      `[VACUUM] VACUUM ANALYZE completed: Reclaimed dead tuple space, updated statistics, and prevented transaction ID wraparound.`,
      ...prev.slice(0, 7)
    ]);
  };

  const handleResetMVCC = () => {
    setT1Status("IDLE");
    setT2Status("IDLE");
    setTableTuples([
      { tid: "Tuple (0,1)", customerId: 101, balance: 5000, xmin: 500, xmax: 0, status: "LIVE" },
      { tid: "Tuple (0,2)", customerId: 102, balance: 12000, xmin: 501, xmax: 0, status: "LIVE" },
    ]);
    setMvccLogs([
      "PostgreSQL MVCC state initialized. Current global TxID = 510.",
      "Tuple (0,1) created by TxID 500 (xmin=500, xmax=0)."
    ]);
  };

  // =========================================================================
  // WORKBENCH 5: WAL & Checkpoint Crash Recovery Lab
  // =========================================================================
  const [walTimeline, setWalTimeline] = useState([
    { lsn: "0/16B0000", txId: "Tx 701", op: "INSERT orders (id=1001)", status: "COMMITTED_ON_DISK" },
    { lsn: "0/16B0050", txId: "Tx 702", op: "UPDATE customers (id=101)", status: "COMMITTED_ON_DISK" },
    { lsn: "0/16B0100", txId: "CHECKPOINT", op: "CHECKPOINT RECORD (dirty pages flushed)", status: "CHECKPOINT_POINT" },
    { lsn: "0/16B0180", txId: "Tx 703", op: "INSERT order_items (id=5001)", status: "COMMITTED_IN_WAL" },
    { lsn: "0/16B0200", txId: "Tx 704", op: "UPDATE accounts (balance - 2500)", status: "UNCOMMITTED_CRASHED" },
  ]);
  const [recoveryLog, setRecoveryLog] = useState([]);
  const [recoveryFinished, setRecoveryFinished] = useState(false);

  const handleRunRecovery = () => {
    const logs = [
      "1. System crash detected! Database restarting in crash recovery mode...",
      "2. Locate pg_control file -> Found last valid CHECKPOINT at LSN 0/16B0100.",
      "3. REDO PHASE (Rolling forward):",
      "   -> Found Tx 703 (LSN 0/16B0180): Reapplying committed transaction changes to page buffer...",
      "   -> Applied changes for Tx 703 successfully.",
      "4. UNDO PHASE (Rolling back uncommitted work):",
      "   -> Found Tx 704 (LSN 0/16B0200): Transaction did not commit before crash!",
      "   -> Reversing partial write on accounts table...",
      "   -> Aborted Tx 704 and freed lock structures.",
      "5. ARIES Recovery Complete! Database opened for normal read/write traffic at LSN 0/16B0250."
    ];
    setRecoveryLog(logs);
    setRecoveryFinished(true);
  };

  const handleResetRecovery = () => {
    setRecoveryLog([]);
    setRecoveryFinished(false);
  };

  // =========================================================================
  // WORKBENCH 6: Database Performance Tuning & 15-Question Assessment
  // =========================================================================
  const [sharedBuffersGb, setSharedBuffersGb] = useState(4); // 1GB to 32GB
  const [tuneWorkMemMb, setTuneWorkMemMb] = useState(32); // 4MB to 256MB
  const [maxConnections, setMaxConnections] = useState(100);
  const [effectiveCacheSizeGb, setEffectiveCacheSizeGb] = useState(12);

  const ramCalculations = useMemo(() => {
    const maxClientMemGb = ((maxConnections * tuneWorkMemMb) / 1024).toFixed(1);
    const totalPotentialRamGb = (sharedBuffersGb + parseFloat(maxClientMemGb)).toFixed(1);
    const isRisky = parseFloat(totalPotentialRamGb) > 16;
    return { maxClientMemGb, totalPotentialRamGb, isRisky };
  }, [sharedBuffersGb, tuneWorkMemMb, maxConnections]);

  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "What is the primary unit of storage and I/O between persistent disk and memory in PostgreSQL by default?",
      options: [
        "A 64-byte CPU cache line",
        "An 8 KB database page (heap block)",
        "A 1 MB extent",
        "A 128 MB table partition"
      ],
      correct: 1,
      explanation: "PostgreSQL defaults to 8 KB pages. All table and index I/O is performed in page increments."
    },
    {
      id: 2,
      q: "Why are B+ Trees preferred over regular B-Trees for relational database indexes?",
      options: [
        "B+ Trees store full table records in all internal nodes",
        "B+ Trees have linked leaf nodes, enabling extremely fast range scans and ordered scans",
        "B+ Trees use O(1) hashing instead of balanced search trees",
        "B+ Trees never require disk I/O"
      ],
      correct: 1,
      explanation: "In B+ Trees, all actual data pointers are concentrated at the leaf level, and leaves are linked sequentially with sibling pointers for efficient range traversals."
    },
    {
      id: 3,
      q: "In an LSM Tree architecture, what is the role of a Bloom Filter?",
      options: [
        "To compress SSTables before writing to disk",
        "To quickly test if a key definitely does NOT exist in an SSTable, preventing unnecessary disk I/O",
        "To sort keys inside the active memtable",
        "To coordinate distributed consensus between replicas"
      ],
      correct: 1,
      explanation: "Bloom filters have zero false negatives: if it says an element is absent, the storage engine can safely skip reading that SSTable file from disk."
    },
    {
      id: 4,
      q: "When an application executes a query, what is the core responsibility of the Cost-Based Optimizer (CBO)?",
      options: [
        "To write changes to the Write-Ahead Log",
        "To evaluate possible execution plans (scans, joins, orders) and pick the one with the lowest estimated disk/CPU cost",
        "To bill the user's credit card for compute time",
        "To encrypt database tables with AES-256"
      ],
      correct: 1,
      explanation: "The CBO calculates estimated disk page fetches and CPU tuple costs based on statistics from pg_statistic to select the optimal physical plan."
    },
    {
      id: 5,
      q: "Which JOIN algorithm builds an in-memory hash table on the smaller inner relation and then streams the larger outer relation?",
      options: [
        "Nested Loop Join",
        "Hash Join",
        "Sort-Merge Join",
        "Broadcast Cartesian Join"
      ],
      correct: 1,
      explanation: "Hash Join performs a Build Phase (hash table on inner relation in work_mem) followed by a Probe Phase (scanning the outer relation)."
    },
    {
      id: 6,
      q: "What happens if a Hash Join or Sort operation exceeds the configured `work_mem` parameter in PostgreSQL?",
      options: [
        "The query immediately throws a fatal exception and aborts",
        "The operation spills intermediate batches to temporary files on disk, significantly increasing latency",
        "The database dynamically expands physical RAM on the host",
        "PostgreSQL switches the query to SQLite"
      ],
      correct: 1,
      explanation: "When work_mem is exceeded, PostgreSQL splits the hash table into batches and spills them to temporary disk files, creating I/O overhead."
    },
    {
      id: 7,
      q: "What is the primary guarantee provided by Write-Ahead Logging (WAL)?",
      options: [
        "Data changes are written to a sequential log on disk before dirty buffer pool pages are written to table storage",
        "All queries run in under 1 millisecond",
        "Indexes are never needed for SELECT queries",
        "Databases automatically shard tables across multiple clouds"
      ],
      correct: 0,
      explanation: "WAL guarantees Durability (the D in ACID): changes are durably appended to WAL before dirty pages are flushed to heap files."
    },
    {
      id: 8,
      q: "In PostgreSQL MVCC, what do the `xmin` and `xmax` header fields in each tuple represent?",
      options: [
        "Minimum and maximum integer values allowed in that column",
        "The transaction ID that inserted the tuple (xmin) and the transaction ID that deleted/updated it (xmax)",
        "The coordinate bounds of a PostGIS spatial geometry",
        "The timestamp when the table was backed up"
      ],
      correct: 1,
      explanation: "xmin records the creating transaction ID; xmax records the deleting or updating transaction ID, allowing snapshots to determine tuple visibility without read locks."
    },
    {
      id: 9,
      q: "Why is VACUUM necessary in PostgreSQL?",
      options: [
        "To clean dust from the database server fans",
        "To remove dead tuple versions created by UPDATEs and DELETEs, and prevent 32-bit transaction ID wraparound",
        "To convert relational tables into JSON documents",
        "To compress B-tree indexes into Hash indexes"
      ],
      correct: 1,
      explanation: "Because MVCC creates new tuple versions instead of in-place updates, VACUUM is mandatory to reclaim dead space and freeze old txids."
    },
    {
      id: 10,
      q: "What is 'Partition Pruning' in database query optimization?",
      options: [
        "Deleting historical records older than 1 year",
        "The optimizer skipping entire partitions that cannot match WHERE clause constraints, avoiding unnecessary disk reads",
        "Splitting a table into exactly 10 shards",
        "Compressing table files with gzip"
      ],
      correct: 1,
      explanation: "Partition pruning allows the query engine to completely eliminate physical partition files that don't satisfy the query predicate."
    },
    {
      id: 11,
      q: "What is the main difference between synchronous and asynchronous database replication?",
      options: [
        "Synchronous replication does not use network connections",
        "Synchronous waits for at least one standby to confirm write receipt before committing, while asynchronous commits immediately on primary",
        "Asynchronous replication guarantees zero data loss in all crash scenarios",
        "Synchronous replication only works with NoSQL databases"
      ],
      correct: 1,
      explanation: "Synchronous replication guarantees zero data loss (RPO=0) at the expense of higher write latency; asynchronous replication commits locally with non-blocking standby transmission."
    },
    {
      id: 12,
      q: "Under PostgreSQL's default `READ COMMITTED` isolation level, which concurrency anomaly can occur?",
      options: [
        "Dirty Reads (reading uncommitted data)",
        "Non-Repeatable Reads (reading different values if another transaction commits during execution)",
        "Buffer Pool corruption",
        "Hardware disk head crash"
      ],
      correct: 1,
      explanation: "Read Committed prevents Dirty Reads, but Non-Repeatable Reads can occur if another transaction commits between two SELECT statements."
    },
    {
      id: 13,
      q: "What tool is commonly placed in front of PostgreSQL to pool connections and avoid process-per-connection memory bloat?",
      options: [
        "PgBouncer",
        "Apache Spark",
        "Redis Sentinel",
        "Docker Compose"
      ],
      correct: 0,
      explanation: "PgBouncer acts as a lightweight connection pooler, maintaining a pool of persistent connections and drastically reducing memory overhead."
    },
    {
      id: 14,
      q: "What does `EXPLAIN (ANALYZE, BUFFERS)` in PostgreSQL reveal that standard `EXPLAIN` does not?",
      options: [
        "Actual execution time, actual rows produced, and exact shared buffer hits/reads",
        "The source code of the PostgreSQL backend engine",
        "The network bandwidth of the client machine",
        "The password hashes of database superusers"
      ],
      correct: 0,
      explanation: "EXPLAIN ANALYZE actually executes the query to return real timing and counts; BUFFERS reveals shared hit, read, dirtied, and written page counts."
    },
    {
      id: 15,
      q: "Which PostgreSQL setting controls the dedicated memory buffer used for database caching across all queries?",
      options: [
        "shared_buffers",
        "work_mem",
        "maintenance_work_mem",
        "wal_buffers"
      ],
      correct: 0,
      explanation: "shared_buffers allocates PostgreSQL's primary in-memory page cache (typically set to 25% of total server RAM)."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Universal Module Navigation */}
      <ModuleNav track="data-engineering" currentModuleId="internals" />

      {/* Mode & Switcher Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-1 sm:mt-2">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 border border-[#e7e3da] rounded-2xl p-2.5 sm:p-3 shadow-2xs backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 pl-1 hidden sm:inline">View Mode:</span>
            <div className="flex items-center gap-1 bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab("curriculum")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "curriculum"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Specification & Blueprints
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("workbench")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Interactive Workbenches (6)
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500 pr-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Module 5 · Database Internals & Performance</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider font-mono">
            Foundation Level · Database Internals · Production Systems
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Module 5 — Database Internals and Performance Engineering
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Deep dive into the internal mechanics of modern relational and log-structured database systems. Master 8KB storage pages, buffer pool eviction, B+ Trees vs LSM Trees, cost-based query optimization, nested loop vs hash joins, ACID concurrency control, MVCC snapshots, WAL crash recovery, and multi-node replication.
          </p>
        </div>

        {/* View Mode: Curriculum Specification vs Interactive Workbenches */}
        {activeTab === "curriculum" ? (
          <DataEngineeringInternalsSections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/60 rounded-2xl border border-stone-300/70">
              <button
                onClick={() => setActiveWorkbench("buffer_pool")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "buffer_pool"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <HardDrive size={14} className="text-orange-600" />
                <span>1. Buffer Pool & Cache</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("index_internals")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "index_internals"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <GitBranch size={14} className="text-orange-600" />
                <span>2. B+ Tree / LSM / Hash</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("join_engine")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "join_engine"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Cpu size={14} className="text-orange-600" />
                <span>3. Join Engine & CBO</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("mvcc")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "mvcc"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Layers size={14} className="text-orange-600" />
                <span>4. MVCC & Isolation</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("wal_recovery")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "wal_recovery"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <ShieldCheck size={14} className="text-orange-600" />
                <span>5. WAL Crash Recovery</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("tuning_quiz")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "tuning_quiz"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sliders size={14} className="text-orange-600" />
                <span>6. Tuning & Assessment</span>
              </button>
            </div>

            {/* WORKBENCH 1: Buffer Pool & Cache Simulator */}
            {activeWorkbench === "buffer_pool" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 1 · Memory Management
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Buffer Pool & 8KB Page Cache Simulator</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Simulate how PostgreSQL manages RAM in `shared_buffers`. Observe cache hits, cache misses, dirty page modifications, LRU victim eviction, and checkpoint flushing.
                  </p>
                </div>

                {/* Metrics Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Cache Hit Ratio</span>
                    <div className="text-2xl font-black text-stone-900 mt-1">{hitRatio}%</div>
                    <span className="text-[10px] text-stone-500">(Target: &gt; 90%)</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Cache Hits</span>
                    <div className="text-2xl font-black text-emerald-600 mt-1">{bufferStats.hits}</div>
                    <span className="text-[10px] text-stone-500">Fast RAM reads</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Cache Misses</span>
                    <div className="text-2xl font-black text-rose-600 mt-1">{bufferStats.misses}</div>
                    <span className="text-[10px] text-stone-500">Storage disk I/O</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Dirty Page Flushes</span>
                    <div className="text-2xl font-black text-amber-600 mt-1">{bufferStats.dirtyFlushes}</div>
                    <span className="text-[10px] text-stone-500">Writes to disk</span>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center gap-3">
                  <label className="text-xs font-bold text-stone-700">Request Page ID:</label>
                  <input
                    type="text"
                    value={requestedPage}
                    onChange={(e) => setRequestedPage(e.target.value)}
                    placeholder="e.g. P-101, P-205"
                    className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-stone-300 bg-white"
                  />
                  <div className="flex items-center gap-1 bg-stone-200/70 p-1 rounded-lg text-xs font-bold">
                    <button
                      onClick={() => setRequestMode("read")}
                      className={`px-2.5 py-1 rounded-md transition ${requestMode === "read" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                    >
                      Read
                    </button>
                    <button
                      onClick={() => setRequestMode("write")}
                      className={`px-2.5 py-1 rounded-md transition ${requestMode === "write" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                    >
                      Write (Mark Dirty)
                    </button>
                  </div>
                  <button
                    onClick={handlePageRequest}
                    className="px-4 py-1.5 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Play size={12} />
                    <span>Execute Request</span>
                  </button>
                  <button
                    onClick={handleFlushDirtyPages}
                    className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold rounded-lg transition flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw size={12} />
                    <span>Trigger Checkpoint Flush</span>
                  </button>
                </div>

                {/* Buffer Pool Frames Display */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase font-bold text-stone-500">Active Buffer Frames (RAM Capacity: 4 Pages)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {bufferFrames.map((frame) => (
                      <div
                        key={frame.id}
                        className={`p-4 rounded-xl border transition ${
                          frame.dirty
                            ? "border-amber-400 bg-amber-50/60 shadow-2xs"
                            : "border-stone-200 bg-white shadow-2xs"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase font-bold text-stone-400">Frame #{frame.id}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            frame.dirty ? "bg-amber-200 text-amber-900" : "bg-emerald-100 text-emerald-800"
                          }`}>
                            {frame.dirty ? "DIRTY (needs write)" : "CLEAN"}
                          </span>
                        </div>
                        <div className="text-lg font-black text-stone-900 font-mono mt-2">{frame.pageId}</div>
                        <div className="text-xs text-stone-500 mt-1">Table: <span className="font-semibold text-stone-700">{frame.table}</span></div>
                        <div className="text-[11px] font-mono text-stone-400 mt-2">Pin Count: {frame.pinCount} | 8,192 bytes</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Log */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase font-bold text-stone-500">Buffer Manager Activity Log</span>
                  <div className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs space-y-1">
                    {bufferLog.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-stone-500">&gt;</span>
                        <span className={log.includes("HIT") ? "text-emerald-400" : log.includes("MISS") ? "text-rose-400" : "text-neutral-200"}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: Index Internals Visualizer */}
            {activeWorkbench === "index_internals" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 2 · Storage & Indexing
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Index Internals: B+ Tree vs. LSM Tree vs. Hash</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Understand how search keys traverse B+ Tree balanced nodes, probe LSM Tree memtables and Bloom Filters, and calculate direct hash buckets.
                  </p>
                </div>

                {/* Index Selector */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => { setSelectedIndexType("btree"); setIndexQueryResult(null); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      selectedIndexType === "btree" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    B+ Tree (PostgreSQL Default)
                  </button>
                  <button
                    onClick={() => { setSelectedIndexType("lsm"); setIndexQueryResult(null); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      selectedIndexType === "lsm" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    LSM Tree (RocksDB / Cassandra)
                  </button>
                  <button
                    onClick={() => { setSelectedIndexType("hash"); setIndexQueryResult(null); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      selectedIndexType === "hash" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Hash Index (O(1) Equality)
                  </button>
                </div>

                {/* Query Input */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold text-stone-700">Lookup Search Key:</span>
                  <input
                    type="number"
                    value={indexSearchKey}
                    onChange={(e) => setIndexSearchKey(e.target.value)}
                    className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-stone-300 bg-white w-24"
                  />
                  <button
                    onClick={handleIndexQuery}
                    className="px-4 py-1.5 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Play size={12} />
                    <span>Trace Key Lookup</span>
                  </button>
                </div>

                {/* Query Traversal Visualizer */}
                {indexQueryResult && (
                  <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                      <div>
                        <span className="text-xs font-mono text-stone-500">Traversed Structure:</span>
                        <div className="text-base font-bold text-stone-900">{indexQueryResult.type}</div>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-mono">
                        <div><span className="text-stone-400">Complexity:</span> <strong className="text-emerald-700">{indexQueryResult.timeComplexity}</strong></div>
                        <div><span className="text-stone-400">I/O Overhead:</span> <strong className="text-orange-700">{indexQueryResult.ioCost}</strong></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase font-bold text-stone-500">Execution Traversal Steps:</span>
                      {indexQueryResult.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-stone-200 text-xs font-mono">
                          <span className="w-5 h-5 rounded-full bg-stone-100 border border-stone-300 flex items-center justify-center text-[10px] font-bold text-stone-600 shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-stone-800">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* WORKBENCH 3: Join Engine & CBO */}
            {activeWorkbench === "join_engine" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 3 · Query Engine
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Query Optimization & Join Algorithm Engine</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Evaluate the cost formulas of Nested Loop, Hash Join, and Sort-Merge Join. Simulate memory spills when hash tables exceed `work_mem`.
                  </p>
                </div>

                {/* Configuration Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <label className="text-xs font-bold text-stone-700 block">Join Algorithm:</label>
                    <select
                      value={selectedJoinType}
                      onChange={(e) => setSelectedJoinType(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="hash">Hash Join (Build + Probe)</option>
                      <option value="nested">Nested Loop Join</option>
                      <option value="merge">Sort-Merge Join</option>
                    </select>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <label className="text-xs font-bold text-stone-700 block">PostgreSQL `work_mem` ({workMemMb} MB):</label>
                    <input
                      type="range"
                      min="4"
                      max="64"
                      step="4"
                      value={workMemMb}
                      onChange={(e) => setWorkMemMb(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                      <span>4 MB</span>
                      <span>32 MB</span>
                      <span>64 MB</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <label className="text-xs font-bold text-stone-700 block">Orders Outer Table ({ordersRowCount.toLocaleString()} rows):</label>
                    <select
                      value={ordersRowCount}
                      onChange={(e) => setOrdersRowCount(parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="10000">10,000 Orders (Small)</option>
                      <option value="100000">100,000 Orders (Medium)</option>
                      <option value="1000000">1,000,000 Orders (Large)</option>
                    </select>
                  </div>
                </div>

                {/* Join Algorithm Analysis */}
                <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <div>
                      <span className="text-xs font-mono text-stone-400 uppercase">Selected Join Algorithm</span>
                      <h3 className="text-xl font-bold text-stone-900">{joinMetrics.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-400 uppercase">Estimated CBO Cost</span>
                      <div className="text-xl font-black text-orange-600 font-mono">{joinMetrics.estCost}</div>
                    </div>
                  </div>

                  <p className="text-sm text-stone-700">{joinMetrics.bestFor}</p>

                  <div className={`p-3.5 rounded-xl border text-xs ${
                    joinMetrics.memorySpill
                      ? "border-rose-300 bg-rose-50 text-rose-900"
                      : "border-emerald-300 bg-emerald-50 text-emerald-900"
                  }`}>
                    <strong className="block font-bold mb-0.5">{joinMetrics.memorySpill ? "Disk Spill Detected:" : "Memory Status:"}</strong>
                    <span>{joinMetrics.spillDesc}</span>
                  </div>

                  {/* EXPLAIN Output */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase font-bold text-stone-500">EXPLAIN (ANALYZE, BUFFERS) Plan Tree</span>
                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
                      <pre className="overflow-x-auto [scrollbar-width:thin]">
                        <code>{joinMetrics.explainPlan}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: MVCC & Concurrency Isolation */}
            {activeWorkbench === "mvcc" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 4 · Concurrency & ACID
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">PostgreSQL MVCC & Isolation Level Tester</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Simulate how PostgreSQL tuple headers (`xmin` and `xmax`) provide non-blocking reads. Experience how Read Committed vs Repeatable Read handles concurrent updates.
                  </p>
                </div>

                {/* Isolation Selector */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-stone-700 mr-2">Isolation Level:</span>
                  <button
                    onClick={() => { setIsolationLevel("read_committed"); handleResetMVCC(); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isolationLevel === "read_committed" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Read Committed (Default)
                  </button>
                  <button
                    onClick={() => { setIsolationLevel("repeatable_read"); handleResetMVCC(); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isolationLevel === "repeatable_read" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Repeatable Read
                  </button>
                  <button
                    onClick={() => { setIsolationLevel("serializable"); handleResetMVCC(); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isolationLevel === "serializable" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Serializable
                  </button>
                </div>

                {/* Concurrent Transactions Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Transaction 1 */}
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-stone-900">Transaction T1 (Reader)</span>
                      <span className="text-xs font-mono font-bold text-orange-600">{t1Status}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={handleStartT1}
                        disabled={t1Status !== "IDLE"}
                        className="px-3 py-1.5 bg-stone-900 text-white text-xs font-bold rounded-lg disabled:opacity-40 cursor-pointer"
                      >
                        BEGIN (TxID 511)
                      </button>
                      <button
                        onClick={handleT1Read}
                        disabled={t1Status === "IDLE"}
                        className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg disabled:opacity-40 cursor-pointer"
                      >
                        SELECT balance WHERE id=101
                      </button>
                    </div>
                  </div>

                  {/* Transaction 2 */}
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-stone-900">Transaction T2 (Writer)</span>
                      <span className="text-xs font-mono font-bold text-orange-600">{t2Status}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={handleStartT2}
                        disabled={t2Status !== "IDLE"}
                        className="px-3 py-1.5 bg-stone-900 text-white text-xs font-bold rounded-lg disabled:opacity-40 cursor-pointer"
                      >
                        BEGIN (TxID 512)
                      </button>
                      <button
                        onClick={handleT2UpdateBalance}
                        disabled={!t2Status.startsWith("ACTIVE")}
                        className="px-3 py-1.5 bg-amber-600 text-white text-xs font-bold rounded-lg disabled:opacity-40 cursor-pointer"
                      >
                        UPDATE balance = 7000
                      </button>
                      <button
                        onClick={handleT2Commit}
                        disabled={!t2Status.startsWith("ACTIVE")}
                        className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg disabled:opacity-40 cursor-pointer"
                      >
                        COMMIT
                      </button>
                    </div>
                  </div>
                </div>

                {/* Table Physical Tuples on Disk */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase font-bold text-stone-500">PostgreSQL Physical Heap Page Tuples</h4>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleVacuumCleanup}
                        className="px-3 py-1 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1"
                      >
                        <RefreshCw size={12} />
                        <span>Run VACUUM Cleanup</span>
                      </button>
                      <button
                        onClick={handleResetMVCC}
                        className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg text-xs font-bold transition cursor-pointer"
                      >
                        Reset Test
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto border border-stone-200 rounded-xl">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-stone-100 border-b border-stone-200 text-stone-600">
                        <tr>
                          <th className="p-3">Physical TID</th>
                          <th className="p-3">customer_id</th>
                          <th className="p-3">balance</th>
                          <th className="p-3">xmin (Created)</th>
                          <th className="p-3">xmax (Deleted)</th>
                          <th className="p-3">MVCC Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 bg-white">
                        {tableTuples.map((tuple, idx) => (
                          <tr key={idx} className={tuple.status === "DEAD" ? "bg-stone-100/70 text-stone-400" : ""}>
                            <td className="p-3 font-bold">{tuple.tid}</td>
                            <td className="p-3">{tuple.customerId}</td>
                            <td className="p-3 font-bold">${tuple.balance}</td>
                            <td className="p-3 text-emerald-700 font-bold">{tuple.xmin}</td>
                            <td className="p-3 text-rose-700 font-bold">{tuple.xmax === 0 ? "0 (Live)" : tuple.xmax}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                tuple.status === "LIVE" ? "bg-emerald-100 text-emerald-800" :
                                tuple.status === "DEAD" ? "bg-rose-100 text-rose-800" :
                                "bg-amber-100 text-amber-800"
                              }`}>
                                {tuple.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MVCC Activity Logs */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase font-bold text-stone-500">Transaction & MVCC Log</span>
                  <div className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs space-y-1">
                    {mvccLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-stone-500">&gt;</span>
                        <span className={log.includes("COMMIT") ? "text-emerald-400" : log.includes("VACUUM") ? "text-amber-400" : "text-neutral-200"}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: WAL & Checkpoint Crash Recovery Lab */}
            {activeWorkbench === "wal_recovery" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 5 · Durability & Recovery
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Write-Ahead Logging (WAL) & Crash Recovery Lab</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Experience how database engines survive power cuts and hardware crashes using Write-Ahead Logging (WAL) and ARIES recovery (REDO committed operations, UNDO uncommitted operations).
                  </p>
                </div>

                {/* WAL Stream Visualization */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase font-bold text-stone-500">Append-Only Write-Ahead Log (WAL) Disk Stream</h4>
                  <div className="space-y-2">
                    {walTimeline.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-2 text-xs font-mono ${
                          item.status === "CHECKPOINT_POINT"
                            ? "border-blue-300 bg-blue-50/70 text-blue-900"
                            : item.status === "UNCOMMITTED_CRASHED"
                            ? "border-rose-300 bg-rose-50/70 text-rose-900"
                            : "border-stone-200 bg-stone-50 text-stone-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-orange-600">{item.lsn}</span>
                          <span className="font-bold">{item.txId}</span>
                          <span className="text-stone-600">{item.op}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          item.status === "CHECKPOINT_POINT" ? "bg-blue-200 text-blue-900" :
                          item.status === "UNCOMMITTED_CRASHED" ? "bg-rose-200 text-rose-900" :
                          "bg-emerald-100 text-emerald-800"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Crash Simulation Trigger */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Server Crash at LSN 0/16B0200:</span>
                    <span className="text-xs text-stone-500">Uncommitted Tx 704 was running when server lost power. Checkpoint was at 0/16B0100.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRunRecovery}
                      disabled={recoveryFinished}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                    >
                      <RotateCcw size={14} />
                      <span>Simulate Crash & Run ARIES Recovery</span>
                    </button>
                    {recoveryFinished && (
                      <button
                        onClick={handleResetRecovery}
                        className="px-3 py-2 bg-stone-200 text-stone-700 text-xs font-bold rounded-xl hover:bg-stone-300 transition"
                      >
                        Reset Lab
                      </button>
                    )}
                  </div>
                </div>

                {/* Recovery Output Console */}
                {recoveryLog.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase font-bold text-stone-500">PostgreSQL Startup Recovery Console</span>
                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1.5 border border-neutral-800 leading-relaxed">
                      {recoveryLog.map((line, idx) => (
                        <div key={idx} className={line.includes("REDO") ? "text-emerald-400" : line.includes("UNDO") ? "text-amber-400" : line.includes("Complete") ? "text-cyan-400 font-bold" : "text-neutral-300"}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* WORKBENCH 6: Tuning & Assessment */}
            {activeWorkbench === "tuning_quiz" && (
              <div className="space-y-8">
                {/* Configuration Tuning Sandbox */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                      Part A · Configuration Sandbox
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900">PostgreSQL Memory & Connection Sizing Tuner</h2>
                    <p className="text-stone-600 text-sm mt-1">
                      Configure `postgresql.conf` parameters and calculate worst-case RAM consumption to prevent Linux OOM killer from terminating your production database.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <label className="text-xs font-bold text-stone-700 block">shared_buffers ({sharedBuffersGb} GB):</label>
                      <input
                        type="range"
                        min="1"
                        max="16"
                        value={sharedBuffersGb}
                        onChange={(e) => setSharedBuffersGb(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Dedicated page buffer cache (usually 25% RAM)</span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <label className="text-xs font-bold text-stone-700 block">work_mem per sort/hash ({tuneWorkMemMb} MB):</label>
                      <input
                        type="range"
                        min="4"
                        max="128"
                        step="4"
                        value={tuneWorkMemMb}
                        onChange={(e) => setTuneWorkMemMb(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Allocated per operation per backend</span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <label className="text-xs font-bold text-stone-700 block">max_connections ({maxConnections}):</label>
                      <input
                        type="range"
                        min="20"
                        max="500"
                        step="10"
                        value={maxConnections}
                        onChange={(e) => setMaxConnections(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Client pool size (use PgBouncer for high counts)</span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <label className="text-xs font-bold text-stone-700 block">effective_cache_size ({effectiveCacheSizeGb} GB):</label>
                      <input
                        type="range"
                        min="4"
                        max="48"
                        step="4"
                        value={effectiveCacheSizeGb}
                        onChange={(e) => setEffectiveCacheSizeGb(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Advisory planner estimate for OS filesystem cache</span>
                    </div>
                  </div>

                  {/* Sizing Calculation Alert */}
                  <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                    ramCalculations.isRisky
                      ? "border-rose-300 bg-rose-50 text-rose-950"
                      : "border-emerald-300 bg-emerald-50 text-emerald-950"
                  }`}>
                    <div className="flex items-center justify-between">
                      <strong className="font-bold">
                        {ramCalculations.isRisky ? "HIGH RISK: Potential Memory Exhaustion (OOM)!" : "Optimal Production Memory Sizing:"}
                      </strong>
                      <span className="font-mono font-black">{ramCalculations.totalPotentialRamGb} GB Max Potential RAM</span>
                    </div>
                    <p className="mt-1">
                      {ramCalculations.isRisky
                        ? `Caution: If all ${maxConnections} clients run complex sorting queries concurrently, max backend client RAM will reach ${ramCalculations.maxClientMemGb} GB. Combined with shared_buffers (${sharedBuffersGb} GB), the total memory required exceeds 16 GB, causing the Linux kernel OOM killer to terminate the PostgreSQL daemon! Consider deploying PgBouncer.`
                        : `Healthy sizing: Total worst-case RAM (${ramCalculations.totalPotentialRamGb} GB) fits safely on an enterprise 32 GB or 64 GB cloud compute instance with ample headroom for OS kernel buffers and filesystem page cache.`}
                    </p>
                  </div>
                </div>

                {/* 15-Question Comprehensive Assessment */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Part B · Mastery Assessment
                      </div>
                      <h2 className="text-2xl font-bold text-stone-900">Database Internals & Performance Quiz (15 Questions)</h2>
                      <p className="text-stone-600 text-sm mt-1">
                        Test your mastery of storage engines, B+ Trees, LSM trees, query optimization, join algorithms, MVCC, WAL, and partitioning.
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
