// projectx/src/Componets/DataEngineeringSpark.jsx
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
  Code2,
  Radio,
  Send,
  SlidersHorizontal,
  RotateCw,
  Split,
  Merge
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringSparkSections from "./DataEngineeringSparkSections";

export default function DataEngineeringSpark() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("cluster_topology");
  // 'cluster_topology' | 'dag_shuffle' | 'catalyst_optimizer' | 'broadcast_join' | 'skew_salting' | 'lakehouse_quiz'

  // =========================================================================
  // WORKBENCH 1: Spark Cluster Topology & Resource Allocator
  // =========================================================================
  const [numWorkers, setNumWorkers] = useState(6);
  const [coresPerNode, setCoresPerNode] = useState(16);
  const [ramPerNodeGb, setRamPerNodeGb] = useState(64);
  const [coresPerExecutor, setCoresPerExecutor] = useState(5); // 5 is industry sweet spot for HDFS I/O

  const clusterResources = useMemo(() => {
    // Leave 1 core and 1GB per node for OS / YARN / K8s node agent
    const usableCoresPerNode = Math.max(1, coresPerNode - 1);
    const usableRamPerNode = Math.max(1, ramPerNodeGb - 4);

    const executorsPerNode = Math.floor(usableCoresPerNode / coresPerExecutor);
    const totalRawExecutors = executorsPerNode * numWorkers;
    // 1 executor allocated for Driver in cluster mode
    const totalExecutors = Math.max(1, totalRawExecutors - 1);

    const ramPerExecutor = Math.floor(usableRamPerNode / Math.max(1, executorsPerNode));
    const memoryOverhead = Math.max(0.384, ramPerExecutor * 0.1); // spark.executor.memoryOverhead (10%)
    const heapMemory = (ramPerExecutor - memoryOverhead).toFixed(1);

    const totalClusterParallelism = totalExecutors * coresPerExecutor;

    return {
      executorsPerNode,
      totalExecutors,
      ramPerExecutor,
      heapMemory,
      memoryOverhead: memoryOverhead.toFixed(2),
      totalClusterParallelism,
      totalCores: numWorkers * coresPerNode,
      totalRam: numWorkers * ramPerNodeGb
    };
  }, [numWorkers, coresPerNode, ramPerNodeGb, coresPerExecutor]);

  // =========================================================================
  // WORKBENCH 2: DAG, Stage & Shuffle Inspector
  // =========================================================================
  const [selectedDagStage, setSelectedDagStage] = useState("stage_1"); // 'stage_0' | 'stage_1' | 'stage_2'
  const dagStages = [
    {
      id: "stage_0",
      name: "Stage 0: Parquet Scan & Narrow Map",
      type: "Narrow",
      tasks: 40,
      inputSize: "40.2 GB",
      shuffleWrite: "14.8 GB",
      operations: ["FileScan parquet [order_id, customer_id, city, amount]", "Filter (amount > 0)", "Project [discount = amount * 0.90]"],
      status: "COMPLETED",
      duration: "18.4s"
    },
    {
      id: "stage_1",
      name: "Stage 1: Shuffle Exchange & Partial Aggregation",
      type: "Wide (Exchange)",
      tasks: 200,
      inputSize: "14.8 GB (Shuffle Read)",
      shuffleWrite: "2.1 GB",
      operations: ["Exchange hashpartitioning(city, 200)", "HashAggregate(keys=[city], functions=[sum(amount)])"],
      status: "COMPLETED",
      duration: "34.2s"
    },
    {
      id: "stage_2",
      name: "Stage 2: SortMergeJoin with Broadcast Alternative",
      type: "Wide (Join)",
      tasks: 200,
      inputSize: "2.1 GB + 50 MB",
      shuffleWrite: "0 GB (Final Output)",
      operations: ["BroadcastExchange [customers_small]", "BroadcastHashJoin [customer_id]", "FileCommit Parquet Output"],
      status: "COMPLETED",
      duration: "12.6s"
    }
  ];

  // =========================================================================
  // WORKBENCH 3: Catalyst Optimizer & Predicate Pushdown Visualizer
  // =========================================================================
  const [filterClause, setFilterClause] = useState("amount > 5000 AND year = 2026");
  const [selectedCols, setSelectedCols] = useState("city, amount");

  const catalystPlans = useMemo(() => {
    return {
      unoptimized: `== Parsed Logical Plan ==\n'Project ['city, 'amount]\n+- 'Filter ('amount > 5000 AND 'year = 2026)\n   +- 'UnresolvedRelation [orders], [], false`,
      analyzed: `== Analyzed Logical Plan ==\ncity: string, amount: double\nProject [city#12, amount#14]\n+- Filter ((amount#14 > 5000.0) AND (year#15 = 2026))\n   +- SubqueryAlias orders\n      +- Relation [order_id#10, customer_id#11, city#12, product#13, amount#14, year#15] parquet`,
      optimized: `== Optimized Logical Plan (Catalyst) ==\nProject [city#12, amount#14]\n+- Filter (isnotnull(amount#14) AND (amount#14 > 5000.0))\n   +- Relation [city#12, amount#14, year#15] parquet\n      PushedFilters: [IsNotNull(amount), GreaterThan(amount,5000.0), EqualTo(year,2026)]\n      ReadSchema: struct<city:string,amount:double>`,
      physical: `== Physical Plan (WholeStageCodegen) ==\n*(1) Project [city#12, amount#14]\n+- *(1) Filter (isnotnull(amount#14) AND (amount#14 > 5000.0))\n   +- *(1) ColumnarBatchScan [city#12, amount#14] FileScan parquet [city#12,amount#14]\n      Batched: true, DataFilters: [isnotnull(amount#14), (amount#14 > 5000.0)],\n      PartitionFilters: [EqualTo(year#15, 2026)], Format: Parquet`
    };
  }, [filterClause, selectedCols]);

  // =========================================================================
  // WORKBENCH 4: Broadcast Join vs Sort-Merge Shuffle Join Performance Lab
  // =========================================================================
  const [joinStrategy, setJoinStrategy] = useState("broadcast"); // 'sort_merge' | 'broadcast'
  const [factTableRows, setFactTableRows] = useState(100); // in millions
  const [dimTableMb, setDimTableMb] = useState(15); // in MB

  const joinPerformance = useMemo(() => {
    if (joinStrategy === "broadcast") {
      const isDimTooBig = dimTableMb > 100;
      return {
        strategyName: "BroadcastHashJoin (BHJ)",
        shuffleBytes: "0 MB (No shuffle on 100M fact rows!)",
        networkTransfer: `${dimTableMb} MB (Copied to each worker once)`,
        diskSpill: "0 MB",
        estExecutionTime: isDimTooBig ? "Risk of OOM (Dim table exceeds memory)" : "14.2 seconds",
        explanation: "The small table is collected to the Driver and broadcast to all Executors. Each executor performs an in-memory hash join against local fact partitions with ZERO network shuffling."
      };
    } else {
      const shuffleVolume = (factTableRows * 0.45).toFixed(1);
      return {
        strategyName: "SortMergeJoin (SMJ) / ShuffleHashJoin",
        shuffleBytes: `${shuffleVolume} GB transferred across network`,
        networkTransfer: `${shuffleVolume} GB across all nodes`,
        diskSpill: factTableRows > 80 ? "12.4 GB spilled to local NVMe" : "0 MB",
        estExecutionTime: "118.5 seconds (8.3x slower due to full network shuffle & sort)",
        explanation: "Both tables are partitioned by join key across all cluster workers. Data is written to disk, transferred over the network, and sorted before merging."
      };
    }
  }, [joinStrategy, factTableRows, dimTableMb]);

  // =========================================================================
  // WORKBENCH 5: Data Skew Detection, Salting & AQE Studio
  // =========================================================================
  const [skewMitigation, setSkewMitigation] = useState("none"); // 'none' | 'salting' | 'aqe'

  const partitionDistribution = useMemo(() => {
    if (skewMitigation === "none") {
      return [
        { partition: "Part 0 (Mumbai)", rows: "60 Million", duration: "185s (STRAGGLER)", status: "bottleneck" },
        { partition: "Part 1 (Delhi)", rows: "20 Million", duration: "24s", status: "ok" },
        { partition: "Part 2 (Bengaluru)", rows: "15 Million", duration: "18s", status: "ok" },
        { partition: "Part 3 (Pune)", rows: "5 Million", duration: "6s", status: "ok" }
      ];
    } else if (skewMitigation === "salting") {
      return [
        { partition: "Part 0 (Mumbai_0..2)", rows: "20 Million", duration: "25s", status: "balanced" },
        { partition: "Part 1 (Mumbai_3..5)", rows: "20 Million", duration: "25s", status: "balanced" },
        { partition: "Part 2 (Mumbai_6..9)", rows: "20 Million", duration: "25s", status: "balanced" },
        { partition: "Part 3 (Delhi/BLR/Pune)", rows: "40 Million (split)", duration: "26s", status: "balanced" }
      ];
    } else {
      // AQE automatically splits skewed partitions into sub-partitions
      return [
        { partition: "Part 0 (Mumbai - Slice A)", rows: "15 Million", duration: "19s (AQE auto-split)", status: "optimized" },
        { partition: "Part 1 (Mumbai - Slice B)", rows: "15 Million", duration: "19s (AQE auto-split)", status: "optimized" },
        { partition: "Part 2 (Mumbai - Slice C)", rows: "15 Million", duration: "19s (AQE auto-split)", status: "optimized" },
        { partition: "Part 3 (Mumbai - Slice D)", rows: "15 Million", duration: "19s (AQE auto-split)", status: "optimized" }
      ];
    }
  }, [skewMitigation]);

  // =========================================================================
  // WORKBENCH 6: Medallion Lakehouse Pipeline & 15-Question Mastery Quiz
  // =========================================================================
  const medallionStages = [
    {
      layer: "Bronze (Raw)",
      path: "data/bronze/orders.parquet",
      count: "100,000 rows",
      schema: "Raw JSON / string schema with audit timestamps",
      cleaning: "Untouched ingest fidelity with ingestion_timestamp"
    },
    {
      layer: "Silver (Curated)",
      path: "data/silver/orders.parquet",
      count: "94,200 rows (-5,800 null/duplicate/negative rows)",
      schema: "Typed schema (amount: double, order_date: date)",
      cleaning: "ROW_NUMBER() Window deduplication, NULL filtering, broadcast join customer lookup"
    },
    {
      layer: "Gold (Business Marts)",
      path: "data/gold/sales_metrics.parquet",
      count: "365 daily aggregates",
      schema: "Aggregated: city, product, total_revenue, units_sold",
      cleaning: "Ready for Power BI dashboards & Spark SQL analytical queries"
    }
  ];

  // 15 Comprehensive Assessment Questions
  const quizQuestions = [
    {
      id: 1,
      q: "1. What is the fundamental difference between horizontal and vertical scaling?",
      options: [
        "Horizontal scaling increases CPU/RAM of a single machine; vertical scaling adds nodes",
        "Horizontal scaling adds more commodity nodes to the cluster; vertical scaling upgrades single-machine hardware",
        "Horizontal scaling only works for MySQL databases",
        "Vertical scaling requires Hadoop YARN"
      ],
      correct: 1,
      expl: "Vertical scaling increases the CPU/RAM of a single machine. Horizontal scaling distributes data and computation across many networked nodes."
    },
    {
      id: 2,
      q: "2. How does Apache Spark achieve superior performance over Hadoop MapReduce?",
      options: [
        "By eliminating network connections completely",
        "By keeping intermediate data in RAM and executing optimized DAGs without continuous disk writes",
        "By translating all Python code into C++",
        "By running only single-threaded tasks"
      ],
      correct: 1,
      expl: "MapReduce writes intermediate states to physical disks between Map and Reduce phases. Spark maintains data in memory and optimizes complete DAG pipelines."
    },
    {
      id: 3,
      q: "3. What is the primary role of the Spark Driver program?",
      options: [
        "Storing the physical HDFS blocks on disk",
        "Running tasks and caching partitions on worker nodes",
        "Coordinating application lifecycle, planning query DAGs, and scheduling stages and tasks",
        "Managing cluster operating system updates"
      ],
      correct: 2,
      expl: "The Driver orchestrates application execution, parses code, builds DAG execution plans, divides jobs into stages/tasks, and coordinates executors."
    },
    {
      id: 4,
      q: "4. What is a Spark Task?",
      options: [
        "An entire PySpark script executed from start to finish",
        "The atomic unit of work scheduled by the driver, processing one partition of data in a stage",
        "A cluster manager daemon running on Kubernetes",
        "A physical CPU socket"
      ],
      correct: 1,
      expl: "A Task is the smallest unit of execution scheduled by Spark. Each task processes exactly one partition of data on an executor core."
    },
    {
      id: 5,
      q: "5. How does an RDD achieve fault tolerance without replicating all data partitions?",
      options: [
        "By continuously taking full snapshots of every partition to tape storage",
        "By recording transformation lineage, allowing lost partitions to be recomputed on demand",
        "By disabling node failures at the hardware layer",
        "By forcing all operations to execute on the driver"
      ],
      correct: 1,
      expl: "RDDs remember their deterministic lineage graph. If a partition is lost due to worker failure, Spark recomputes only that missing partition from upstream sources."
    },
    {
      id: 6,
      q: "6. What is the primary advantage of DataFrames over low-level RDDs?",
      options: [
        "DataFrames run without a JVM",
        "DataFrames have relational schemas and leverage the Catalyst Optimizer and Tungsten code generation",
        "DataFrames do not support SQL queries",
        "DataFrames cannot be partitioned"
      ],
      correct: 1,
      expl: "DataFrames provide structured schemas that allow Spark's Catalyst Optimizer to push down predicates, prune columns, and compile optimized bytecode via Project Tungsten."
    },
    {
      id: 7,
      q: "7. What does Predicate Pushdown achieve in Spark SQL?",
      options: [
        "Pushes all sorting operations to the driver",
        "Applies filter conditions directly at the data storage layer (e.g. Parquet row groups) before loading into memory",
        "Converts DataFrames into unstructured text files",
        "Increases the number of shuffle partitions"
      ],
      correct: 1,
      expl: "Predicate pushdown delegates filtering to the storage engine (like Parquet or databases), reading only blocks containing matching records."
    },
    {
      id: 8,
      q: "8. Which of the following is considered a wide transformation in Apache Spark?",
      options: ["map()", "filter()", "select()", "groupBy()"],
      correct: 3,
      expl: "groupBy() requires redistributing records across partitions (a shuffle) so that matching keys end up on the same worker, making it a wide transformation."
    },
    {
      id: 9,
      q: "9. Why does Apache Spark evaluate transformations lazily?",
      options: [
        "Because Python cannot execute code synchronously",
        "To allow Spark to inspect the full DAG and build a globally optimized physical plan before executing compute",
        "To prevent any data from ever being written to disk",
        "To ensure Spark only executes on a single CPU core"
      ],
      correct: 1,
      expl: "Lazy evaluation allows the Catalyst engine to see the entire pipeline, merge adjacent filters, prune unused columns, and plan optimal joins before computing."
    },
    {
      id: 10,
      q: "10. What is the difference between repartition() and coalesce()?",
      options: [
        "repartition() can only decrease partitions; coalesce() can only increase partitions",
        "repartition() performs a full shuffle to balance data; coalesce() merges adjacent partitions without a full shuffle",
        "coalesce() requires a cluster restart",
        "repartition() writes all data to local disk"
      ],
      correct: 1,
      expl: "repartition() redistributes data evenly using a full cluster shuffle. coalesce() avoids a full shuffle when reducing partition counts."
    },
    {
      id: 11,
      q: "11. Why is a Spark Shuffle considered one of the most expensive cluster operations?",
      options: [
        "It forces the driver to restart",
        "It involves disk I/O serialization, network transfer across worker nodes, and sorting intermediate partition blocks",
        "It disables parallel processing",
        "It requires all worker machines to have identical GPU hardware"
      ],
      correct: 1,
      expl: "Shuffles require mappers to serialize data to local disk, stream gigabytes over the network to reducers, and sort partition blocks by key."
    },
    {
      id: 12,
      q: "12. When is a Broadcast Join optimal in Spark SQL?",
      options: [
        "When joining two multi-terabyte fact tables",
        "When joining a large table with a relatively small lookup/dimension table that fits in executor memory",
        "When both tables have severe data skew on the join key",
        "When the network connection between workers is disconnected"
      ],
      correct: 1,
      expl: "A Broadcast Join sends the small dimension table to every executor once, completely eliminating the need to shuffle the large fact table."
    },
    {
      id: 13,
      q: "13. How does Salting resolve data skew during large-scale aggregations or joins?",
      options: [
        "By deleting records associated with the popular key",
        "By appending random suffixes (salts) to high-frequency keys to evenly distribute their rows across multiple worker partitions",
        "By compressing the dataset with gzip",
        "By moving all calculations to the driver"
      ],
      correct: 1,
      expl: "Salting adds random numeric suffixes to heavily skewed keys (e.g. Mumbai_0..9), dividing the bottleneck key across multiple parallel tasks."
    },
    {
      id: 14,
      q: "14. Under Spark Unified Memory Management, how do Execution Memory and Storage Memory interact?",
      options: [
        "They use completely separate static hardware RAM chips with no sharing",
        "They share a unified region; execution can evict storage blocks if memory is required for active shuffles/joins, but storage cannot evict active execution memory",
        "Storage memory always terminates running execution tasks",
        "Neither memory region can ever spill data to disk"
      ],
      correct: 1,
      expl: "Execution and storage share a dynamic pool. Active execution (joins/sorts) can evict cached storage blocks to disk if memory is required."
    },
    {
      id: 15,
      q: "15. What is the key difference between raw Apache Parquet files and a Delta Lakehouse table?",
      options: [
        "Parquet is row-based; Delta Lake is column-based",
        "Parquet is an immutable columnar storage file format, whereas Delta Lake adds an ACID transaction log, schema enforcement, time travel, and UPDATE/MERGE/DELETE capabilities on top of Parquet files",
        "Delta Lake cannot be read by Apache Spark",
        "Parquet files require an external relational database server"
      ],
      correct: 1,
      expl: "Parquet is a columnar file format. Delta Lake adds an ACID transaction log (_delta_log) on top of Parquet, enabling atomic commits, time travel, schema evolution, and upserts."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 pb-20 selection:bg-orange-500 selection:text-white">
      {/* Universal Module Navigation */}
      <ModuleNav currentCourseId="data-engineering" currentModuleId="spark-processing" />

      {/* Hero Header */}
      <div className="border-b border-[#e7e3da] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors mb-2"
              >
                <ArrowLeft size={14} />
                <span>Back to Course Catalog</span>
              </button>
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                  Module 11
                </span>
                <span className="text-xs font-mono text-stone-500">Advanced Distributed Systems</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Distributed Data Processing with Apache Spark
              </h1>
              <p className="text-stone-600 max-w-3xl text-sm sm:text-base leading-relaxed">
                Master distributed cluster computing: Spark Driver and Executors, RDD lineage, Catalyst query planning,
                narrow vs. wide transformations, lazy DAG evaluation, shuffle minimization, broadcast joins, Unified Memory management,
                data skew mitigation via salting and AQE, Apache Parquet columnar internals, and Delta Lake Medallion pipelines.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 p-1 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className={activeTab === "curriculum" ? "text-orange-600" : ""} />
                <span>Specification & Blueprints</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === "workbench"
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sparkles size={14} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === "curriculum" ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <DataEngineeringSparkSections />
            </div>

            {/* Sticky Table of Contents */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-20 bg-white rounded-2xl border border-[#e7e3da] p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-stone-500 pb-2 border-b border-[#e7e3da]">
                  <Table size={14} className="text-orange-500" />
                  <span>Module 11 Syllabus</span>
                </div>
                <div className="text-xs space-y-1.5 max-h-[75vh] overflow-y-auto pr-1">
                  {[
                    { id: "overview", label: "Module 11 Overview" },
                    { id: "section-1", label: "1. What is Distributed Processing?" },
                    { id: "section-2", label: "2. Big Data Processing Fundamentals" },
                    { id: "section-3", label: "3. Hadoop Ecosystem Overview" },
                    { id: "section-4", label: "4. MapReduce Programming Model" },
                    { id: "section-5", label: "5. Hadoop Distributed File System" },
                    { id: "section-6", label: "6. Apache Spark Architecture" },
                    { id: "section-7", label: "7. Spark Driver and Executors" },
                    { id: "section-8", label: "8. Spark Clusters" },
                    { id: "section-9", label: "9. RDD Architecture & Lineage" },
                    { id: "section-10", label: "10. DataFrame & Dataset APIs" },
                    { id: "section-11", label: "11. Spark SQL & Catalyst Optimizer" },
                    { id: "section-12", label: "12. Transformations and Actions" },
                    { id: "section-13", label: "13. Lazy Evaluation" },
                    { id: "section-14", label: "14. Data Partitioning & Coalesce" },
                    { id: "section-15", label: "15. Shuffling & Data Exchange" },
                    { id: "section-16", label: "16. Joins & Aggregations" },
                    { id: "section-17", label: "17. Broadcast Joins" },
                    { id: "section-18", label: "18. Caching & Persistence" },
                    { id: "section-19", label: "19. Data Skew & Salting" },
                    { id: "section-20", label: "20. Spark Memory Management" },
                    { id: "section-21", label: "21. Spark Performance Tuning" },
                    { id: "section-22", label: "22. Parquet & Lakehouse Formats" },
                    { id: "section-23", label: "23. Large-Scale Distributed Pipelines" },
                    { id: "section-24", label: "24. Capstone E-Commerce Pipeline" },
                    { id: "section-25", label: "25. Practical Labs & Assignments" },
                    { id: "section-26", label: "26. Advanced Assignments" },
                    { id: "section-27", label: "27. Interview Preparation" },
                    { id: "section-28", label: "28. Recommended Learning Resources" },
                    { id: "section-29", label: "29. Final Module Summary" }
                  ].map(sec => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-1 px-2 rounded-lg text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors truncate"
                    >
                      {sec.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* WORKBENCH MODE */
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-4">
              {[
                { id: "cluster_topology", label: "1. Cluster Topology & Sizing", icon: Server },
                { id: "dag_shuffle", label: "2. DAG & Shuffle Inspector", icon: Workflow },
                { id: "catalyst_optimizer", label: "3. Catalyst Optimizer Studio", icon: Cpu },
                { id: "broadcast_join", label: "4. Broadcast vs Shuffle Join Lab", icon: Split },
                { id: "skew_salting", label: "5. Data Skew & Salting Tuner", icon: Sliders },
                { id: "lakehouse_quiz", label: "6. Medallion Pipeline & 15-Q Quiz", icon: ShieldCheck }
              ].map(wb => {
                const Icon = wb.icon;
                const isActive = activeWorkbench === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-white text-stone-600 border border-[#e7e3da] hover:text-stone-900 hover:border-stone-400"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{wb.label}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: CLUSTER TOPOLOGY */}
            {activeWorkbench === "cluster_topology" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-[#e7e3da] pb-4">
                  <h3 className="text-xl font-bold text-stone-900">
                    Spark Cluster Topology & Sizing Calculator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Calculate optimal executor count, cores per executor, and JVM heap vs memory overhead allocations based on industry best practices.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Worker Nodes</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="2"
                        max="32"
                        value={numWorkers}
                        onChange={e => setNumWorkers(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500"
                      />
                      <span className="font-mono text-sm font-bold text-stone-900">{numWorkers}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Cores per Node</label>
                    <select
                      value={coresPerNode}
                      onChange={e => setCoresPerNode(parseInt(e.target.value, 10))}
                      className="w-full bg-white border border-stone-300 rounded-lg p-2 text-xs font-medium"
                    >
                      <option value="8">8 Cores</option>
                      <option value="16">16 Cores (Production standard)</option>
                      <option value="32">32 Cores</option>
                      <option value="64">64 Cores</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">RAM per Node</label>
                    <select
                      value={ramPerNodeGb}
                      onChange={e => setRamPerNodeGb(parseInt(e.target.value, 10))}
                      className="w-full bg-white border border-stone-300 rounded-lg p-2 text-xs font-medium"
                    >
                      <option value="32">32 GB</option>
                      <option value="64">64 GB (Standard compute)</option>
                      <option value="128">128 GB</option>
                      <option value="256">256 GB (High memory)</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Cores / Executor</label>
                    <select
                      value={coresPerExecutor}
                      onChange={e => setCoresPerExecutor(parseInt(e.target.value, 10))}
                      className="w-full bg-white border border-stone-300 rounded-lg p-2 text-xs font-medium"
                    >
                      <option value="4">4 Cores</option>
                      <option value="5">5 Cores (Recommended optimal)</option>
                      <option value="6">6 Cores</option>
                    </select>
                  </div>
                </div>

                {/* Calculated Configuration Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Total Active Executors</span>
                    <span className="text-2xl font-black text-stone-900">{clusterResources.totalExecutors}</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">(+1 allocated for Driver)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Executor JVM Heap</span>
                    <span className="text-2xl font-black text-orange-600">{clusterResources.heapMemory} GB</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">spark.executor.memory</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Memory Overhead</span>
                    <span className="text-2xl font-black text-stone-900">{clusterResources.memoryOverhead} GB</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Off-heap & native memory</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Max Task Concurrency</span>
                    <span className="text-2xl font-black text-green-700">{clusterResources.totalClusterParallelism}</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Parallel tasks across cluster</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto space-y-1">
                  <div className="text-orange-400 font-bold mb-1">Generated Spark Submit Configuration:</div>
                  <div>spark-submit \</div>
                  <div>  --master yarn \</div>
                  <div>  --deploy-mode cluster \</div>
                  <div>  --num-executors {clusterResources.totalExecutors} \</div>
                  <div>  --executor-cores {coresPerExecutor} \</div>
                  <div>  --executor-memory {Math.floor(clusterResources.heapMemory)}g \</div>
                  <div>  --conf spark.executor.memoryOverhead={Math.ceil(parseFloat(clusterResources.memoryOverhead) * 1024)}m \</div>
                  <div>  --conf spark.default.parallelism={clusterResources.totalClusterParallelism * 2} \</div>
                  <div>  --conf spark.sql.shuffle.partitions={clusterResources.totalClusterParallelism * 2}</div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: DAG & SHUFFLE */}
            {activeWorkbench === "dag_shuffle" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-[#e7e3da] pb-4">
                  <h3 className="text-xl font-bold text-stone-900">
                    Spark DAG, Stage & Shuffle Inspector
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Trace how Spark divides a job into stages separated by Shuffle Exchange boundaries.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {dagStages.map(stage => (
                    <button
                      key={stage.id}
                      onClick={() => setSelectedDagStage(stage.id)}
                      className={`text-left p-4 rounded-xl border transition-all space-y-2 ${
                        selectedDagStage === stage.id
                          ? "border-orange-500 bg-orange-50/50 shadow-sm"
                          : "border-stone-200 bg-stone-50 hover:border-stone-300"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-stone-900">{stage.name.split(':')[0]}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          stage.type.includes("Wide") ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                        }`}>
                          {stage.type}
                        </span>
                      </div>
                      <div className="font-semibold text-xs text-stone-700 truncate">{stage.name.split(':')[1]}</div>
                      <div className="text-[11px] text-stone-500 font-mono flex items-center justify-between">
                        <span>Tasks: {stage.tasks}</span>
                        <span>Duration: {stage.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Active Stage Details */}
                {(() => {
                  const active = dagStages.find(s => s.id === selectedDagStage);
                  return (
                    <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                        <span className="font-bold text-sm text-stone-900">{active.name}</span>
                        <div className="flex items-center gap-3 text-xs font-mono">
                          <span>Input: <strong className="text-stone-900">{active.inputSize}</strong></span>
                          <span>Shuffle Out: <strong className="text-orange-600">{active.shuffleWrite}</strong></span>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">Physical Stage Pipeline Operations:</span>
                        <div className="space-y-1.5 font-mono text-xs">
                          {active.operations.map((op, i) => (
                            <div key={i} className="flex items-center gap-2 p-2 rounded bg-white border border-stone-200">
                              <span className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-[10px] text-stone-600 font-bold">{i+1}</span>
                              <span className="text-stone-800">{op}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* WORKBENCH 3: CATALYST OPTIMIZER */}
            {activeWorkbench === "catalyst_optimizer" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-[#e7e3da] pb-4">
                  <h3 className="text-xl font-bold text-stone-900">
                    Catalyst Optimizer & Execution Plan Visualizer
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Examine how Spark's Catalyst engine applies predicate pushdown and column pruning from Parsed Plan to Physical Tungsten Codegen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">User SQL / Query Representation</span>
                    <pre className="p-3 bg-white border border-stone-200 rounded-lg text-xs font-mono text-stone-800">
                      SELECT city, amount FROM orders WHERE amount &gt; 5000 AND year = 2026;
                    </pre>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1 text-xs text-stone-700">
                    <span className="font-bold text-stone-900 block mb-1">Catalyst Optimization Phases:</span>
                    <div>1. <strong>Analysis:</strong> Resolves column names against Parquet metadata catalog.</div>
                    <div>2. <strong>Logical Optimization:</strong> Pushes down filter <code className="font-mono text-orange-600">(amount &gt; 5000)</code> and partition filter <code className="font-mono text-orange-600">(year = 2026)</code>.</div>
                    <div>3. <strong>Column Pruning:</strong> Drops customer_id, order_id, product before scan.</div>
                  </div>
                </div>

                {/* Optimized Physical Code Plan */}
                <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto space-y-2">
                  <div className="text-orange-400 font-bold">Spark explain(True) Output:</div>
                  <pre className="text-stone-300 leading-relaxed">{catalystPlans.optimized}</pre>
                  <div className="pt-2 border-t border-stone-800">
                    <div className="text-green-400 font-bold">Physical Plan with Tungsten Codegen:</div>
                    <pre className="text-stone-300 leading-relaxed">{catalystPlans.physical}</pre>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: BROADCAST VS SORT-MERGE JOIN */}
            {activeWorkbench === "broadcast_join" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Broadcast Join vs Sort-Merge Shuffle Join Performance Lab
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Compare network shuffle volumes and query execution times when joining large fact tables with lookup tables.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setJoinStrategy("broadcast")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        joinStrategy === "broadcast" ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      Broadcast Join (BHJ)
                    </button>
                    <button
                      onClick={() => setJoinStrategy("sort_merge")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        joinStrategy === "sort_merge" ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      Sort-Merge Join (SMJ)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Fact Table Size (Orders)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="10"
                        max="200"
                        step="10"
                        value={factTableRows}
                        onChange={e => setFactTableRows(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500"
                      />
                      <span className="font-mono text-xs font-bold text-stone-900">{factTableRows}M rows</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">Dimension Table Size (Products)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="1"
                        max="150"
                        step="5"
                        value={dimTableMb}
                        onChange={e => setDimTableMb(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500"
                      />
                      <span className="font-mono text-xs font-bold text-stone-900">{dimTableMb} MB</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Comparison */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Join Strategy</span>
                    <span className="font-bold text-sm text-stone-900">{joinPerformance.strategyName}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Shuffle Read / Write</span>
                    <span className="font-bold text-sm text-orange-600">{joinPerformance.shuffleBytes}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Disk Spilling</span>
                    <span className="font-bold text-sm text-stone-900">{joinPerformance.diskSpill}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Est. Duration</span>
                    <span className="font-bold text-sm text-green-700">{joinPerformance.estExecutionTime}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                  <span className="font-bold text-stone-900 block mb-1">Architectural Analysis:</span>
                  {joinPerformance.explanation}
                </div>
              </div>
            )}

            {/* WORKBENCH 5: DATA SKEW & SALTING */}
            {activeWorkbench === "skew_salting" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Data Skew Detection & Salting Optimization Studio
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Simulate a cluster straggler task caused by skewed keys and apply Salting or AQE to balance partitions.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[
                      { id: "none", label: "No Mitigation (Skewed)" },
                      { id: "salting", label: "Key Salting (0..9)" },
                      { id: "aqe", label: "AQE Skew Join" }
                    ].map(st => (
                      <button
                        key={st.id}
                        onClick={() => setSkewMitigation(st.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          skewMitigation === st.id ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {partitionDistribution.map((p, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border space-y-2 ${
                        p.status === "bottleneck"
                          ? "bg-red-50 border-red-300 ring-2 ring-red-400/20"
                          : p.status === "balanced"
                          ? "bg-blue-50/60 border-blue-200"
                          : p.status === "optimized"
                          ? "bg-green-50/60 border-green-200"
                          : "bg-stone-50 border-stone-200"
                      }`}
                    >
                      <div className="text-xs font-bold text-stone-900 truncate">{p.partition}</div>
                      <div className="text-xl font-black text-stone-800">{p.rows}</div>
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-200/60 font-mono">
                        <span className="text-stone-500">Duration:</span>
                        <span className={p.status === "bottleneck" ? "text-red-700 font-bold" : "text-stone-800"}>
                          {p.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {skewMitigation === "salting" && (
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-1">
                    <div className="text-orange-400 font-bold">Salting Transformation Implementation:</div>
                    <div>salted_orders = orders.withColumn("salt", floor(rand() * 10))</div>
                    <div>salted_orders = salted_orders.withColumn("salted_city", concat_ws("_", col("city"), col("salt")))</div>
                    <div># First aggregate by salted key (parallelizes Mumbai across 10 tasks)</div>
                    <div>partial_agg = salted_orders.groupBy("salted_city").sum("amount")</div>
                    <div># Second rollup aggregate by original key</div>
                    <div>final_agg = partial_agg.groupBy(split(col("salted_city"), "_")[0].alias("city")).sum("sum(amount)")</div>
                  </div>
                )}
              </div>
            )}

            {/* WORKBENCH 6: MEDALLION PIPELINE & 15-QUESTION QUIZ */}
            {activeWorkbench === "lakehouse_quiz" && (
              <div className="space-y-8">
                {/* Medallion Pipeline Card */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="border-b border-[#e7e3da] pb-3">
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Layers size={20} className="text-orange-500" />
                      <span>Medallion Architecture Pipeline Flow (Bronze &rarr; Silver &rarr; Gold)</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Production Lakehouse pipeline transforming raw order events into validated silver records and gold analytical marts.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {medallionStages.map((stage, i) => (
                      <div key={i} className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-stone-900">{stage.layer}</span>
                          <span className="font-mono text-orange-600">{stage.count}</span>
                        </div>
                        <div className="text-[11px] font-mono text-stone-500 truncate">{stage.path}</div>
                        <div className="text-xs text-stone-700 pt-2 border-t border-stone-200">
                          {stage.cleaning}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 15-Question Assessment */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">
                        Module 11 Assessment — Test Your Understanding
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 mt-1">
                        15 comprehensive questions covering Spark architecture, RDD lineage, Catalyst optimizations, shuffles, broadcast joins, salting, memory management, and lakehouses.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-orange-100 text-orange-800">
                        Score: {quizScore} / {quizQuestions.length}
                      </span>
                      <button
                        onClick={() => setShowQuizResults(true)}
                        className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm"
                      >
                        Submit Assessment
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {quizQuestions.map(q => {
                      const userChoice = quizAnswers[q.id];
                      return (
                        <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
                          <div className="font-bold text-stone-900 text-sm sm:text-base">{q.q}</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userChoice === optIdx;
                              let btnClass = "border-stone-200 bg-white text-stone-700 hover:border-orange-300";
                              if (isSelected) {
                                btnClass = "border-orange-500 bg-orange-50 text-orange-900 font-bold";
                              }
                              if (showQuizResults) {
                                if (optIdx === q.correct) {
                                  btnClass = "border-green-500 bg-green-50 text-green-900 font-bold";
                                } else if (isSelected && optIdx !== q.correct) {
                                  btnClass = "border-red-500 bg-red-50 text-red-900 line-through";
                                }
                              }
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)}
                                  className={`text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2 ${btnClass}`}
                                >
                                  <span className="w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>
                          {showQuizResults && (
                            <div className="mt-2 p-2.5 rounded-lg bg-white border border-stone-200 text-xs text-stone-600">
                              <span className="font-bold text-stone-800">Explanation: </span>
                              {q.expl}
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
