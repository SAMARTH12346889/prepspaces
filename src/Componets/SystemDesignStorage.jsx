import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  HardDrive,
  Database,
  Search,
  Server,
  Layers,
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
  Lock,
  Globe,
  Cpu,
  Zap,
  FileText,
  Key,
  Radio,
  FileCode,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  StorageHierarchyDiagram,
  ObjectStorageMultipartDiagram,
  DistributedStorageErasureCodingDiagram,
  SearchInvertedIndexDiagram,
  DataPipelineLakehouseDiagram,
} from "./SystemDesignStorageDiagrams";

export default function SystemDesignStorage() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "calculators" | "qa" | "project" | "assessment" | "reading"
  const [activeUnit, setActiveUnit] = useState("unit-1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 1: CLOUD OBJECT STORAGE & RETRIEVAL COST ESTIMATOR
  // ---------------------------------------------------------------------------
  const [storageVolumeTB, setStorageVolumeTB] = useState(50);
  const [monthlyReadPcnt, setMonthlyReadPcnt] = useState(20);
  const [egressTransferTB, setEgressTransferTB] = useState(10);

  const storageCostResults = useMemo(() => {
    const rawGB = storageVolumeTB * 1000;
    const readGB = (rawGB * monthlyReadPcnt) / 100;
    const egressGB = egressTransferTB * 1000;

    // S3 Standard ($0.023/GB, $0.0004 per 1k GETs, $0.09/GB egress)
    const s3StandardStorage = rawGB * 0.023;
    const s3StandardEgress = egressGB * 0.09;
    const s3StandardTotal = Math.round(s3StandardStorage + s3StandardEgress);

    // S3 Infrequent Access ($0.0125/GB, $0.01/GB retrieval, $0.09/GB egress)
    const s3IAStorage = rawGB * 0.0125;
    const s3IARetrieval = readGB * 0.01;
    const s3IATotal = Math.round(s3IAStorage + s3IARetrieval + s3StandardEgress);

    // S3 Glacier Deep Archive ($0.00099/GB, $0.02/GB retrieval, $0.09/GB egress)
    const glacierStorage = rawGB * 0.00099;
    const glacierRetrieval = readGB * 0.02;
    const glacierTotal = Math.round(glacierStorage + glacierRetrieval + s3StandardEgress);

    return {
      rawGB,
      s3StandardTotal,
      s3IATotal,
      glacierTotal,
      savingsIA: Math.max(0, s3StandardTotal - s3IATotal),
    };
  }, [storageVolumeTB, monthlyReadPcnt, egressTransferTB]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 2: ERASURE CODING VS REPLICATION OVERHEAD SIZER
  // ---------------------------------------------------------------------------
  const [datasetSizeTB, setDatasetSizeTB] = useState(100);
  const [ecDataChunksK, setEcDataChunksK] = useState(8);
  const [ecParityChunksM, setEcParityChunksM] = useState(4);

  const erasureCodingAnalysis = useMemo(() => {
    // 3x Replication:
    const repRawStorageTB = datasetSizeTB * 3;
    const repOverheadPct = 200; // +200%
    const repFailureTolerance = 2; // tolerates 2 replica node losses

    // Reed Solomon RS(k, m):
    const totalChunks = ecDataChunksK + ecParityChunksM;
    const ecOverheadRatio = totalChunks / ecDataChunksK;
    const ecRawStorageTB = Math.round(datasetSizeTB * ecOverheadRatio);
    const ecOverheadPct = Math.round(((totalChunks - ecDataChunksK) / ecDataChunksK) * 100);
    const ecFailureTolerance = ecParityChunksM;
    const rawDiskSavingsTB = repRawStorageTB - ecRawStorageTB;

    return {
      repRawStorageTB,
      repOverheadPct,
      repFailureTolerance,
      ecRawStorageTB,
      ecOverheadPct,
      ecFailureTolerance,
      rawDiskSavingsTB,
    };
  }, [datasetSizeTB, ecDataChunksK, ecParityChunksM]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 3: BM25 RELEVANCE SCORING CALCULATOR
  // ---------------------------------------------------------------------------
  const [bm25Tf, setBm25Tf] = useState(3);
  const [bm25DocLen, setBm25DocLen] = useState(250);
  const [bm25AvgDocLen, setBm25AvgDocLen] = useState(300);

  const bm25Score = useMemo(() => {
    const k1 = 1.2;
    const b = 0.75;
    const idf = 1.85; // Simulated IDF for moderately rare technical term

    const numerator = bm25Tf * (k1 + 1);
    const denominator = bm25Tf + k1 * (1 - b + b * (bm25DocLen / (bm25AvgDocLen || 1)));
    const tfComponent = numerator / denominator;
    const score = (idf * tfComponent).toFixed(3);

    return {
      k1,
      b,
      idf,
      tfComponent: tfComponent.toFixed(3),
      score,
    };
  }, [bm25Tf, bm25DocLen, bm25AvgDocLen]);

  // ---------------------------------------------------------------------------
  // 10 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "Why is cloud object storage (e.g., Amazon S3, MinIO) poorly suited as a direct disk backend for a high-concurrency transactional database (e.g., PostgreSQL)?",
      options: [
        "Object storage does not support in-place byte updates; modifying 1 byte requires re-uploading the entire object",
        "Object storage has a maximum file size limit of only 100MB",
        "Object storage only operates over local fibre-channel networks",
      ],
      correct: 0,
      explanation:
        "Object storage treats objects as immutable binary blobs. Modifying even a single 8KB database page would require downloading, re-encoding, and PUT-uploading the entire multi-gigabyte object, resulting in catastrophic latency and write amplification. Block storage (e.g. AWS EBS) is required for page-level random I/O.",
    },
    {
      id: 2,
      question: "How does Reed-Solomon Erasure Coding RS(8, 4) compare to standard 3x Replication for cold data archiving?",
      options: [
        "RS(8, 4) requires 50% storage overhead and tolerates 4 failures, whereas 3x replication requires 200% overhead and tolerates 2 failures",
        "RS(8, 4) requires 400% storage overhead and cannot tolerate any node failures",
        "3x replication requires less network bandwidth to reconstruct lost chunks than RS(8, 4)",
      ],
      correct: 0,
      explanation:
        "In RS(8, 4), 8 data chunks produce 4 parity chunks (12 total), yielding a storage overhead of only 12/8 = 1.5x (50% overhead) while tolerating any 4 concurrent disk/node failures. 3x replication has 200% overhead (3.0x raw storage) and only tolerates 2 failures.",
    },
    {
      id: 3,
      question: "What is an Inverted Index in information retrieval systems such as Lucene and OpenSearch?",
      options: [
        "A relational table where primary keys are sorted in descending reverse order",
        "A mapping from distinct vocabulary terms to a posting list of document IDs (and positions) where that term occurs",
        "A B+ Tree that stores documents sorted alphabetically by file name",
      ],
      correct: 1,
      explanation:
        "An inverted index inverts the standard document-to-words relationship. It maps each tokenized vocabulary term (e.g. 'distributed') to a posting list containing the list of document IDs where that word appears, enabling sub-millisecond Boolean and relevance search.",
    },
    {
      id: 4,
      question: "In the Okapi BM25 ranking algorithm, what purpose does the hyperparameter 'b' serve?",
      options: [
        "It sets the maximum number of search results returned per page",
        "It penalizes long documents by normalizing term frequency against document length relative to average document length",
        "It encrypts the posting list on disk",
      ],
      correct: 1,
      explanation:
        "Parameter b (typically 0.75) controls document length normalization. Without it, a 50-page thesis would artificially outrank a concise 1-page article simply because words occur more times by virtue of length.",
    },
    {
      id: 5,
      question: "What distinguishes an Inode in a POSIX filesystem from a Directory Entry (dentry)?",
      options: [
        "An inode stores file metadata and data block pointers (excluding the file name); the dentry maps a human-readable name to that inode number",
        "An inode only stores file names; the dentry stores disk blocks",
        "Inodes are only used on Windows NTFS file systems",
      ],
      correct: 0,
      explanation:
        "An inode stores ownership, file size, permissions, timestamps, and block pointers, but never the filename. The directory entry (dentry) lives in a directory file and links the string filename to the corresponding inode number. Multiple dentries pointing to the same inode create hard links.",
    },
    {
      id: 6,
      question: "Why is Apache Parquet significantly faster than row-oriented JSON or CSV for analytical SQL queries (OLAP)?",
      options: [
        "Parquet is columnar, allowing the query engine to load only requested columns (projection) and skip irrelevant row chunks using metadata min/max statistics (predicate pushdown)",
        "Parquet eliminates network round-trips by running directly inside the client's browser",
        "Parquet disables data compression to maximize raw read speed",
      ],
      correct: 0,
      explanation:
        "Columnar formats store values of the same column contiguously. Analytical queries selecting 3 columns out of 100 read 97% less data from disk. Contiguous similar data also compresses dramatically via dictionary encoding, and file footer statistics allow skipping non-matching blocks entirely.",
    },
    {
      id: 7,
      question: "In event streaming and data pipelines, how does an 'event-time watermark' enable safe windowed aggregation?",
      options: [
        "It permanently halts the pipeline if any event arrives out of sequence",
        "It acts as a temporal progress marker indicating that the system assumes all events up to timestamp T have arrived, allowing window closure",
        "It overwrites the Kafka partition offset with the current wall-clock time",
      ],
      correct: 1,
      explanation:
        "A watermark of timestamp T guarantees to the streaming framework (Flink/Spark) that no more events with timestamp t &le; T are expected. When the watermark advances past the window end, the operator emits the aggregated result, bounding latency while tolerating network delays.",
    },
    {
      id: 8,
      question: "What is the 'small-file problem' in Hadoop, S3, and Lakehouse architectures, and how is it resolved?",
      options: [
        "Files under 1MB cannot be read by Apache Spark",
        "Millions of tiny files overwhelm NameNode/catalog metadata memory and cause excessive HTTP request overhead; resolved by compaction jobs merging small files into 128MB–512MB chunks",
        "Files smaller than 4KB are automatically deleted by the Linux page cache",
      ],
      correct: 1,
      explanation:
        "Every file requires metadata tracking and opens an HTTP/TCP connection. Having millions of 10KB files causes massive metadata overhead, extreme request charges, and degraded Spark query speed. Lakehouses use automated background compaction (bin-packing) to merge small files into optimal 128MB–512MB Parquet files.",
    },
    {
      id: 9,
      question: "How do Pre-Signed URLs enhance security and scalability in large-scale media upload platforms?",
      options: [
        "Clients stream heavy gigabyte payloads directly to object storage (S3/MinIO) using temporary cryptographic signatures, offloading app servers from I/O bottlenecks",
        "Pre-signed URLs bypass all TLS encryption to speed up throughput",
        "They grant permanent root administrator privileges to any client",
      ],
      correct: 0,
      explanation:
        "By issuing a time-bounded cryptographically signed URL from an IAM-authenticated application gateway, clients stream 4K video directly to S3. Application web servers never buffer heavy payloads, preventing network saturation and thread starvation.",
    },
    {
      id: 10,
      question: "What is the key difference between Recovery Point Objective (RPO) and Recovery Time Objective (RTO) in storage disaster recovery?",
      options: [
        "RPO dictates the maximum tolerable data loss window in time; RTO dictates the maximum tolerable downtime duration to restore service",
        "RPO measures storage disk IOPS; RTO measures query response time in milliseconds",
        "RPO applies to batch pipelines; RTO applies to streaming pipelines",
      ],
      correct: 0,
      explanation:
        "RPO (Recovery Point Objective) measures data loss (e.g. at most 5 minutes of un-replicated logs lost). RTO (Recovery Time Objective) measures business interruption time (e.g. restoring service within 30 minutes after a regional failure).",
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
  // CAPSTONE PROJECT PROGRESS TRACKING (9 DELIVERABLES)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    deliv1: false,
    deliv2: false,
    deliv3: false,
    deliv4: false,
    deliv5: false,
    deliv6: false,
    deliv7: false,
    deliv8: false,
    deliv9: false,
  });

  const toggleChecklist = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(projectChecklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // SENIOR SYSTEMS ENGINEERING Q&A (6 DEEP PRODUCTION SCENARIOS)
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "How does Dropbox / Google Drive implement block-level deduplication and delta sync?",
      context:
        "A user edits one line in a 500MB PDF document or code archive. Uploading the entire 500MB file wastes mobile bandwidth and server storage.",
      answer:
        "Clients divide files into variable-length or fixed-size chunks (typically 4MB) using Content-Defined Chunking (Rabin Fingerprinting). The client computes SHA-256 hashes for each chunk and queries the metadata service. Only new, unrecognized chunk hashes are uploaded to Object Storage (S3/MinIO). The metadata service creates a new file version mapping pointing to the combined list of existing and newly written chunk IDs. This achieves ~80% bandwidth and storage savings.",
    },
    {
      id: "qa-2",
      title: "Why did the original Google File System (GFS) suffer from single-Master bottlenecks, and how did HDFS & Colossus resolve it?",
      context:
        "Google's original 2003 GFS paper described a single Master holding all metadata in RAM for millions of 64MB chunks.",
      answer:
        "As Google's data grew from petabytes to exabytes, the Master's RAM became exhausted by billions of files and chunk handles. Furthermore, a single Master's CPU could not process the millions of client RPC requests per second. Hadoop HDFS addressed this with NameNode Federation (multiple independent namespaces sharing DataNodes) and Standby NameNodes with QJM. Modern Colossus (GFS v2) distributes metadata horizontally across Bigtable/Spanner with Curators, completely eliminating the centralized single master.",
    },
    {
      id: "qa-3",
      title: "Why is hybrid search (BM25 Keyword + Vector Embeddings) superior to pure vector search alone?",
      context:
        "Building an enterprise AI search platform for engineering documentation, codebases, and legal contracts.",
      answer:
        "Pure dense vector embeddings (e.g., Ada-002, BGE) excel at semantic concepts ('fast car' matching 'speedy automobile') but frequently fail on exact identifiers, SKU numbers, variable names, error codes (e.g. `ERR_SOCKET_TIMEOUT_104`), and acronyms. BM25 inverted index matching guarantees exact keyword hits. Production platforms (e.g. OpenSearch Hybrid Search) execute both BM25 and k-NN vector queries in parallel, combining results via Reciprocal Rank Fusion (RRF) to provide the highest NDCG relevance.",
    },
    {
      id: "qa-4",
      title: "How does Apache Kafka achieve high throughput with zero-copy transfers, and why is sequential disk faster than random RAM?",
      context:
        "Kafka brokers sustain millions of messages/sec per node while writing directly to persistent magnetic hard disks or SSDs.",
      answer:
        "Kafka relies on two key principles: (1) Append-only sequential disk writes bypass disk seek latency, achieving ~600MB/s on NVMe and ~150MB/s on magnetic disks—comparable to random memory access speeds. (2) Zero-Copy Network Transfer: Kafka uses the Linux `sendfile()` syscall. Data flows directly from OS Page Cache to the Network Socket buffer via DMA (Direct Memory Access), eliminating user-space memory copies and context switches.",
    },
    {
      id: "qa-5",
      title: "What causes the 'small-file problem' in Lakehouses, and how does Apache Iceberg solve Hive's partition directory bottlenecks?",
      context:
        "Streaming ingestion into S3 creates thousands of tiny 20KB files every hour. Queries take minutes just to list objects.",
      answer:
        "In traditional Hive-style storage, partition listing requires invoking slow `S3:ListObjectsV2` RPCs over recursive directory structures. Furthermore, reading thousands of tiny files suffers from high HTTP handshake latency. Apache Iceberg solves this by tracking data files directly in hierarchical Avro Manifest Files and Snapshot Trees. The query engine reads the manifest tree in memory, performs instant partition pruning and min/max file skipping without touching S3 directory APIs, and triggers automated bin-packing compaction.",
    },
    {
      id: "qa-6",
      title: "How do storage systems defend against Silent Data Corruption and Bit-Rot?",
      context:
        "Cosmic rays, firmware bugs, or decaying magnetic charge can flip bits on disk platters without the OS controller returning an I/O error.",
      answer:
        "Silent bit-rot means a file read returns corrupted bytes with a 0 exit code. Modern storage engines (ZFS, Ceph, MinIO) compute cryptographic checksums (e.g., HighwayHash or SHA-256) per block during writes and store them in separate metadata trees. On read, the block is hashed and verified against the stored checksum. If a mismatch is detected, the system immediately pulls a pristine chunk from a peer replica or calculates the original block using Erasure Coding parity, writes it back to disk, and alerts administrators.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 9 DETAILED CURRICULUM UNITS
  // ---------------------------------------------------------------------------
  const curriculumUnits = [
    {
      id: "unit-1",
      unitNum: 1,
      title: "Storage Fundamentals & Data Models",
      summary:
        "Data states, storage hierarchy, block vs file vs object storage, latency numbers, and workload selection matrices.",
      diagram: <StorageHierarchyDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Storage architecture is the foundation of all distributed systems. At its core, system design evaluates three persistent data states: <strong>Data at Rest</strong> (persisted on non-volatile media), <strong>Data in Transit</strong> (traversing networks over TCP/TLS), and <strong>Data in Use</strong> (active in CPU registers and volatile RAM).
          </p>

          <h4 className="font-bold text-stone-900 text-base mt-3">The Three Core Storage Paradigms</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
              <strong className="text-stone-900 block text-sm">1. Block Storage</strong>
              <span className="text-stone-500 font-mono text-[10px] block mt-1">EBS, Local NVMe, SAN</span>
              <p className="mt-2 text-stone-600 leading-normal">
                Exposes raw unformatted blocks (4KB–64KB) over SCSI or NVMe-oF. Supports random byte-level writes. Essential for database engines (PostgreSQL, MySQL) and OS root volumes.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
              <strong className="text-stone-900 block text-sm">2. File Storage</strong>
              <span className="text-stone-500 font-mono text-[10px] block mt-1">NFS, SMB, CephFS, EFS</span>
              <p className="mt-2 text-stone-600 leading-normal">
                Organizes data into hierarchical trees of directories and files. Implements POSIX APIs (open, read, write, seek, lock). Shared across multiple compute instances concurrently.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
              <strong className="text-stone-900 block text-sm">3. Object Storage</strong>
              <span className="text-stone-500 font-mono text-[10px] block mt-1">S3, MinIO, GCS, Azure Blob</span>
              <p className="mt-2 text-stone-600 leading-normal">
                Flat address space of immutable blobs accessed via HTTP REST (GET, PUT, DELETE). Scales to exabytes with 11 9&apos;s durability. Standard backend for data lakes and media assets.
              </p>
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-4">Numbers Every Systems Engineer Must Know</h4>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 font-mono text-xs space-y-1.5 text-stone-800">
            <div>&bull; L1 cache reference: <strong>0.5 ns</strong></div>
            <div>&bull; Branch mispredict: <strong>5 ns</strong></div>
            <div>&bull; L2 cache reference: <strong>7 ns</strong></div>
            <div>&bull; Mutex lock/unlock: <strong>25 ns</strong></div>
            <div>&bull; Main memory (RAM) reference: <strong>100 ns</strong></div>
            <div>&bull; Read 1 MB sequentially from memory: <strong>250,000 ns (250 &mu;s)</strong></div>
            <div>&bull; Read 1 MB sequentially from NVMe SSD: <strong>1,000,000 ns (1 ms)</strong></div>
            <div>&bull; HDD seek latency: <strong>10,000,000 ns (10 ms)</strong></div>
            <div>&bull; Round-trip packet CA &rarr; Netherlands &rarr; CA: <strong>150,000,000 ns (150 ms)</strong></div>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3.5 text-xs text-blue-900">
            <strong>Engineering Takeaway:</strong> Disk seeks on magnetic platters are 100,000x slower than RAM. Modern storage engines convert random writes into sequential writes using Write-Ahead Logs (WAL) and Log-Structured Merge (LSM) Trees.
          </div>
        </div>
      ),
    },
    {
      id: "unit-2",
      unitNum: 2,
      title: "Object Storage & Cloud Architecture",
      summary:
        "Bucket/key design, prefix partitioning, multipart uploads, pre-signed URLs, optimistic concurrency, and CDN edge delivery.",
      diagram: <ObjectStorageMultipartDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Cloud Object Storage replaces traditional hierarchical folder structures with a flat key-value namespace. An object consists of <strong>Key</strong> (unique identifier string), <strong>Value</strong> (raw binary payload), <strong>Metadata</strong> (HTTP headers, content-type, tags), and <strong>Version ID</strong>.
          </p>

          <h4 className="font-bold text-stone-900 text-base">Prefix Partitioning &amp; High-Throughput Scaling</h4>
          <p className="text-xs text-stone-600">
            Cloud object stores automatically partition data based on key prefixes. In Amazon S3, each partition prefix supports at least <strong>3,500 PUT/POST/DELETE</strong> and <strong>5,500 GET/HEAD requests per second</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-red-900">
              <strong className="block font-bold">Anti-Pattern (Hot Prefix Bottleneck):</strong>
              <code className="text-[11px] block mt-1 font-mono">
                s3://app-bucket/2026-10-16/log_001.json
              </code>
              <span className="text-[10px] block mt-1">All concurrent writes hit the exact same date prefix, choking request throughput.</span>
            </div>
            <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-900">
              <strong className="block font-bold">Production Pattern (Hash Prefix Spread):</strong>
              <code className="text-[11px] block mt-1 font-mono">
                s3://app-bucket/a8f2/2026-10-16/log_001.json
              </code>
              <span className="text-[10px] block mt-1">Hex hashes distribute incoming traffic across hundreds of independent storage partitions.</span>
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-3">Pre-Signed URLs &amp; Zero-Proxy Streaming</h4>
          <p className="text-xs text-stone-600">
            Never proxy multi-gigabyte media uploads through stateless API microservices. The backend authenticates the client, verifies permissions, and generates a cryptographically signed HMAC-SHA256 URL granting temporary upload rights directly to the object store.
          </p>
        </div>
      ),
    },
    {
      id: "unit-3",
      unitNum: 3,
      title: "File-System Internals & Storage Management",
      summary:
        "Inodes, directory entries, superblocks, free-space bitmaps, page cache, read-ahead, write-back, and crash consistency.",
      diagram: <StorageHierarchyDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Operating system file systems (ext4, XFS, ZFS) translate logical byte streams into physical storage blocks. The disk layout is divided into <strong>Superblocks</strong>, <strong>Inode Tables</strong>, <strong>Block Bitmaps</strong>, and <strong>Data Blocks</strong>.
          </p>

          <h4 className="font-bold text-stone-900 text-base">Key Structures Inside a POSIX Filesystem</h4>
          <ul className="list-disc pl-5 space-y-2 text-xs text-stone-600">
            <li>
              <strong>Superblock:</strong> Stores master geometry: total filesystem size, block size (4096 bytes), total inodes, free block counts, and mount status. Replicated across block groups for disaster recovery.
            </li>
            <li>
              <strong>Inode (Index Node):</strong> The data structure storing file metadata: ownership (UID/GID), access permissions, file size in bytes, timestamps (atime, mtime, ctime), and pointers to data blocks.
            </li>
            <li>
              <strong>Directory Entry (dentry):</strong> A directory is simply a special file containing a list of pairs: <code>(filename_string, inode_number)</code>.
            </li>
            <li>
              <strong>Page Cache &amp; Dirty Writes:</strong> The kernel caches read blocks in free RAM. Writes are buffered as &apos;dirty pages&apos; and flushed asynchronously to disk by <code>pdflush</code> / <code>kswapd</code>, achieving low-latency writes at the risk of losing uncommitted data upon power failure.
            </li>
          </ul>

          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-900">
            <strong>Crash Consistency &amp; Journaling:</strong> Writing a file requires 3 operations: (1) write data block, (2) update inode size, (3) mark block in bitmap. A power cut midway corrupts the filesystem. <strong>Journaling file systems</strong> write a small intent log (WAL) to disk before committing changes, enabling instant crash recovery without full disk scans (fsck).
          </div>
        </div>
      ),
    },
    {
      id: "unit-4",
      unitNum: 4,
      title: "Distributed File Systems & Fault Tolerance",
      summary:
        "GFS, HDFS, Ceph, chunk servers, NameNodes, heartbeat leases, replication factor vs. erasure coding overhead.",
      diagram: <DistributedStorageErasureCodingDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            When data scales beyond a single server, storage must be distributed across thousands of commodity machines. Pioneered by Google File System (GFS) and Apache Hadoop HDFS, distributed file systems decouple <strong>Metadata Coordination</strong> from <strong>Data Payload Streaming</strong>.
          </p>

          <h4 className="font-bold text-stone-900 text-base">GFS / HDFS Architecture Decoupling</h4>
          <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs font-mono space-y-2">
            <div><strong>1. Client contacts Master / NameNode:</strong> &quot;Where are the chunks for <code>/data/dataset.parquet</code>?&quot;</div>
            <div><strong>2. Master responds with metadata:</strong> &quot;Chunk 1 is on DataNodes [12, 45, 89]; Chunk 2 is on [3, 22, 67]&quot;.</div>
            <div><strong>3. Direct DataNode Streaming:</strong> Client streams bytes directly to and from DataNodes. The Master is completely bypassed during data transfer.</div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-3">Erasure Coding (EC) vs. 3x Replication</h4>
          <p className="text-xs text-stone-600">
            Traditional 3x replication consumes 200% extra storage (300TB raw disk for 100TB data). <strong>Reed-Solomon Erasure Coding RS(8, 4)</strong> breaks data into 8 data fragments and calculates 4 parity fragments. Any 8 of the 12 fragments can mathematically reconstruct the entire file. Storage overhead drops from 200% down to 50%!
          </p>
        </div>
      ),
    },
    {
      id: "unit-5",
      unitNum: 5,
      title: "Search Engines & Information Retrieval",
      summary:
        "Crawling, tokenization, inverted indexes, postings lists, BM25 relevance scoring, index sharding, and NDCG evaluation.",
      diagram: <SearchInvertedIndexDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Relational databases and object storage cannot execute fast text search: <code>WHERE text LIKE &apos;%query%&apos;</code> requires a catastrophic full-table sequential scan. Search engines (Lucene, OpenSearch, Elasticsearch) solve this via <strong>Inverted Indexes</strong>.
          </p>

          <h4 className="font-bold text-stone-900 text-base">The Text Ingestion &amp; Indexing Pipeline</h4>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono text-center">
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="font-bold block text-stone-900">1. Tokenize</span>
              <span className="text-[10px] text-stone-500">Split into words</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="font-bold block text-stone-900">2. Normalize</span>
              <span className="text-[10px] text-stone-500">Lowercase &amp; strip punctuation</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="font-bold block text-stone-900">3. Stem / Filter</span>
              <span className="text-[10px] text-stone-500">Porter Stemmer / Stopwords</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="font-bold block text-stone-900">4. Postings</span>
              <span className="text-[10px] text-stone-500">Append docId + offsets</span>
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-3">Relevance Scoring: From TF-IDF to Okapi BM25</h4>
          <p className="text-xs text-stone-600">
            BM25 scores documents based on two core intuition principles:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Inverse Document Frequency (IDF):</strong> Rare words (e.g. &apos;raft&apos;, &apos;quorums&apos;) carry vastly higher information weight than frequent words (e.g. &apos;the&apos;, &apos;system&apos;).</li>
            <li><strong>Term Frequency Saturation:</strong> An article mentioning a term 20 times is not 20x more relevant than one mentioning it twice. BM25 asymptotically saturates the impact of repeated words.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "unit-6",
      unitNum: 6,
      title: "Data Pipelines & Data Engineering",
      summary:
        "ETL vs. ELT, batch vs. streaming, Kafka partitions, event time, watermarks, idempotency, retries, and schema evolution.",
      diagram: <DataPipelineLakehouseDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Data pipelines transport, sanitize, and enrich information across distributed systems. Modern architectures have shifted from traditional <strong>ETL (Extract &rarr; Transform &rarr; Load)</strong> to <strong>ELT (Extract &rarr; Load &rarr; Transform)</strong>, preserving raw event fidelity in lakehouses before executing declarative SQL models.
          </p>

          <h4 className="font-bold text-stone-900 text-base">Batch vs. Stream Processing Architecture</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 text-sm block">Batch Processing (Spark / MapReduce)</strong>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Processes bounded historical datasets periodically (hourly/daily). Maximizes throughput and computational efficiency. Tolerates minutes or hours of latency.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 text-sm block">Stream Processing (Flink / Kafka Streams)</strong>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Processes unbounded continuous event logs item-by-item or in micro-batches. Low latency (sub-second to seconds). Requires event-time watermarks and state checkpoints.
              </p>
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-3">Idempotency &amp; Exactly-Once Semantics</h4>
          <p className="text-xs text-stone-600">
            Network glitches cause producer retries, inevitably delivering duplicate events. Achieving reliable data engineering requires <strong>Idempotent Consumers</strong>: each event carries a unique idempotency key (e.g. UUID), and downstream sinks execute upserts or deduplication tables to ensure records are counted strictly once.
          </p>
        </div>
      ),
    },
    {
      id: "unit-7",
      unitNum: 7,
      title: "Data Lakes, Lakehouses, & Analytical Storage",
      summary:
        "Parquet internals, Medallion Architecture (Bronze/Silver/Gold), Iceberg/Delta Lake ACID tables, predicate pushdown, and compaction.",
      diagram: <DataPipelineLakehouseDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            The <strong>Lakehouse Architecture</strong> combines the elasticity and low cost of Object Storage (S3) with the ACID transactions, schema enforcement, and sub-second performance of enterprise Data Warehouses.
          </p>

          <h4 className="font-bold text-stone-900 text-base">The Medallion Architecture (Bronze &rarr; Silver &rarr; Gold)</h4>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg border border-amber-200 bg-amber-50 text-amber-900">
              <strong>Bronze (Raw Zone):</strong> Append-only raw event logs and source API dumps directly from Kafka or CDC. Unaltered history.
            </div>
            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800">
              <strong>Silver (Cleansed Zone):</strong> Validated schemas, deduplicated records, enriched identifiers, and typed Parquet tables.
            </div>
            <div className="p-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-900">
              <strong>Gold (Curated Analytics Zone):</strong> Business-aggregated metrics, customer 360 tables, and dimensional star-schemas optimized for BI queries.
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-3">Why Apache Parquet Outperforms CSV / JSON</h4>
          <p className="text-xs text-stone-600">
            Parquet stores data by columns rather than rows. If a table has 150 columns and an analyst executes <code>SELECT avg(duration_ms) FROM logs WHERE status = 500</code>, the engine performs <strong>Column Projection</strong> (reads only 2 columns from disk) and <strong>Predicate Pushdown</strong> (uses file footer min/max values to skip irrelevant file blocks entirely).
          </p>
        </div>
      ),
    },
    {
      id: "unit-8",
      unitNum: 8,
      title: "Storage Security, Reliability, & Observability",
      summary:
        "RBAC, KMS envelope encryption, immutable WORM backups, ransomware defenses, silent bit-rot scrubbers, SLIs/SLOs, and RPO/RTO.",
      diagram: <StorageHierarchyDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Production storage systems must withstand catastrophic failure modes: disk head crashes, fiber-optic cuts, ransomware attackers, and rogue internal deletion scripts.
          </p>

          <h4 className="font-bold text-stone-900 text-base">Key Storage Security &amp; Defense Controls</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li>
              <strong>Envelope Encryption (KMS):</strong> Data is encrypted using a local Data Encryption Key (DEK). The DEK is encrypted under a master Key Encryption Key (KEK) managed in Hardware Security Modules (HSMs).
            </li>
            <li>
              <strong>Immutable WORM Storage (Write Once, Read Many):</strong> S3 Object Lock in Compliance Mode prevents anyone—even the root account administrator—from deleting or modifying objects until the retention period expires. Essential defense against ransomware.
            </li>
            <li>
              <strong>Silent Bit-Rot Scrubbing:</strong> Background daemon threads continuously scan block checksums against stored hashes. Mismatched blocks are repaired immediately via parity before data loss cascades.
            </li>
          </ul>

          <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs font-mono space-y-1">
            <span className="font-bold text-stone-900 block">Reliability Metrics Formulation:</span>
            <div>&bull; Availability (%) = (Total Uptime / (Total Uptime + Downtime)) &times; 100</div>
            <div>&bull; Durability (%) = Probability that an object is not lost over a 1-year period (e.g. 99.999999999%)</div>
            <div>&bull; RPO = Maximum lost data duration; RTO = Maximum operational downtime</div>
          </div>
        </div>
      ),
    },
    {
      id: "unit-9",
      unitNum: 9,
      title: "System Design Case Studies & Architecture Trade-offs",
      summary:
        "Four end-to-end industry architectures: Cloud File Storage (Dropbox), Document Search Engine, Real-Time Analytics, and AI RAG Storage.",
      diagram: <DataPipelineLakehouseDiagram />,
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            In this capstone synthesis unit, learners apply concepts to four definitive industry production architectures.
          </p>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 text-sm block">Case Study A: Cloud File Storage Platform (Dropbox / Google Drive)</strong>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Architecture separates Metadata DB (MySQL/CockroachDB) from Block Storage (S3/MinIO). Client splits files into 4MB chunks, computes SHA-256 hashes, deduplicates against server catalog, and streams only delta blocks over pre-signed URLs. Notification servers push sync changes via WebSockets.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 text-sm block">Case Study B: Search Platform for Millions of Documents</strong>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Asynchronous ingestion pipeline buffers new documents into Kafka. Distributed Lucene workers construct inverted index shards partitioned by document ID. Coordinator nodes route queries, execute scatter-gather BM25 scoring, and merge top-K results with sub-20ms latency.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 text-sm block">Case Study C: Real-Time Analytics Platform</strong>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Clickstream telemetry events are published to partitioned Kafka topics. Apache Flink computes tumbling 5-minute aggregations using event-time watermarks. Results are written simultaneously to ClickHouse for real-time dashboards and Apache Iceberg for long-term historical exploration.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 text-sm block">Case Study D: AI Knowledge &amp; Document Platform (RAG Architecture)</strong>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Raw PDFs and docs are uploaded to S3. Text is extracted, parsed, and divided into 500-token chunks with 50-token overlaps. Chunks are simultaneously indexed in OpenSearch for BM25 keyword search and embedded into high-dimensional vectors in a Vector Database (Qdrant/Milvus). Hybrid retrieval retrieves and reranks top passages before LLM generation.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentUnitData = curriculumUnits.find((u) => u.id === activeUnit) || curriculumUnits[0];

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans pb-24">
      {/* Top Module Navigation Bar */}
      <ModuleNav track="system-design" currentModuleId="storage" />

      {/* Hero Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-mono font-bold text-orange-700">
                  SYSTEM DESIGN MASTERCLASS &bull; MODULE 8
                </span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-mono text-stone-600">
                  Advanced Curriculum
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Object Storage, File Systems, Search Engines &amp; Data Pipelines
              </h1>
              <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Understand how large-scale systems store files and objects, organize data on physical disks, index information for sub-millisecond retrieval, and build fault-tolerant streaming and lakehouse pipelines.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/learning/system-design/replication")}
                className="px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 transition cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft size={14} />
                Module 7: Replication
              </button>
              <button
                type="button"
                onClick={() => navigate("/learning/system-design/distributed-systems")}
                className="px-3.5 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                Module 9: Distributed Systems
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Module Meta Cards */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">2 Weeks Structured</span>
              <span className="text-[10px] text-stone-500 block">35–45 study &amp; lab hours</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Prerequisites</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modules 1–7</span>
              <span className="text-[10px] text-stone-500 block">Networking, OS, Databases</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Engines</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">S3, HDFS, Spark, Lucene</span>
              <span className="text-[10px] text-stone-500 block">Parquet, Iceberg &amp; Kafka</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Final Capstone</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Searchable Data Platform</span>
              <span className="text-[10px] text-orange-600 font-bold block">9 Production Deliverables</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 overflow-x-auto no-scrollbar gap-2">
          {[
            { id: "curriculum", label: "Curriculum & Units", count: "9 Units", icon: BookOpen },
            { id: "calculators", label: "Capacity & Cost Tools", count: "3 Simulators", icon: Sliders },
            { id: "qa", label: "Production Q&A", count: "6 Scenarios", icon: HelpCircle },
            { id: "project", label: "Capstone Platform", count: "9 Deliverables", icon: FolderTree },
            { id: "assessment", label: "Module 8 Quiz", count: "10 Questions", icon: ShieldCheck },
            { id: "reading", label: "Academic Citations", count: "6 References", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-orange-600 text-orange-600 bg-orange-50/50 rounded-t-xl"
                    : "border-transparent text-stone-500 hover:text-stone-900 hover:border-stone-300"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-mono text-stone-600">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & UNITS                                          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Units Menu */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block px-1">
                Curriculum Structure (9 Units)
              </span>
              {curriculumUnits.map((u) => {
                const isSelected = activeUnit === u.id;
                return (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setActiveUnit(u.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex flex-col gap-1 ${
                      isSelected
                        ? "border-orange-500 bg-white shadow-xs"
                        : "border-[#e7e3da] bg-[#faf8f4] hover:bg-white hover:border-stone-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-orange-600 uppercase">
                        Unit {u.unitNum}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-orange-600" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                      {u.title}
                    </span>
                    <span className="text-[11px] text-stone-500 line-clamp-1">
                      {u.summary}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Unit Deep-Dive & Architecture Diagram */}
            <div className="lg:col-span-8 space-y-6">
              {/* Unit Content Card */}
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs space-y-4">
                <div className="border-b border-[#e7e3da] pb-4">
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Unit {currentUnitData.unitNum} of 9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                    {currentUnitData.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">{currentUnitData.summary}</p>
                </div>

                {/* Body Content */}
                <div>{currentUnitData.content}</div>
              </div>

              {/* Architectural Diagram */}
              <div>{currentUnitData.diagram}</div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE CAPACITY, COST & SIZING TOOLS                   */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            {/* Tool 1 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-5">
                <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                  Interactive Systems Tool 1
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Cloud Object Storage &amp; Retrieval Cost Calculator
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Model financial trade-offs between S3 Standard, Infrequent Access, and Glacier Deep Archive based on read patterns and egress.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Raw Storage Volume: <span className="text-orange-600">{storageVolumeTB} TB</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={storageVolumeTB}
                    onChange={(e) => setStorageVolumeTB(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">1 TB to 500 TB scale</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Monthly Read Rate: <span className="text-orange-600">{monthlyReadPcnt}% of data</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={monthlyReadPcnt}
                    onChange={(e) => setMonthlyReadPcnt(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">Access frequency per month</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Internet Egress: <span className="text-orange-600">{egressTransferTB} TB</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={egressTransferTB}
                    onChange={(e) => setEgressTransferTB(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">External egress bandwidth</span>
                </div>
              </div>

              {/* Cost Results Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-stone-500 font-bold block text-[10px] uppercase">S3 Standard</span>
                  <div className="text-xl font-extrabold text-stone-900 mt-1">
                    ${storageCostResults.s3StandardTotal.toLocaleString()} / mo
                  </div>
                  <span className="text-[10px] text-stone-500 block mt-1">Optimal for daily active reads</span>
                </div>
                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60">
                  <span className="text-blue-800 font-bold block text-[10px] uppercase">S3 Infrequent Access</span>
                  <div className="text-xl font-extrabold text-blue-900 mt-1">
                    ${storageCostResults.s3IATotal.toLocaleString()} / mo
                  </div>
                  <span className="text-[10px] text-blue-700 block mt-1">
                    Saves ${storageCostResults.savingsIA.toLocaleString()}/mo if reads &lt; 30%
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60">
                  <span className="text-purple-800 font-bold block text-[10px] uppercase">Glacier Deep Archive</span>
                  <div className="text-xl font-extrabold text-purple-900 mt-1">
                    ${storageCostResults.glacierTotal.toLocaleString()} / mo
                  </div>
                  <span className="text-[10px] text-purple-700 block mt-1">Ideal for regulatory compliance / cold logs</span>
                </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-5">
                <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                  Interactive Systems Tool 2
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Reed-Solomon Erasure Coding vs. 3x Replication Sizer
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Evaluate physical raw disk footprint and fault tolerance across data fragment splits (k) and parity fragments (m).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Target Dataset: <span className="text-orange-600">{datasetSizeTB} TB</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={datasetSizeTB}
                    onChange={(e) => setDatasetSizeTB(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">Net useful user data</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Data Chunks (k): <span className="text-orange-600">{ecDataChunksK}</span>
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="16"
                    value={ecDataChunksK}
                    onChange={(e) => setEcDataChunksK(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">Galois data vector size</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Parity Chunks (m): <span className="text-orange-600">{ecParityChunksM}</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    value={ecParityChunksM}
                    onChange={(e) => setEcParityChunksM(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">Simultaneous tolerated failures</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-stone-500 font-bold block text-[10px] uppercase">Standard 3x Replication</span>
                  <div className="text-xl font-extrabold text-stone-900 mt-1">
                    {erasureCodingAnalysis.repRawStorageTB} TB Raw Disks
                  </div>
                  <span className="text-stone-600 block mt-1">
                    Overhead: +{erasureCodingAnalysis.repOverheadPct}% &bull; Tolerates {erasureCodingAnalysis.repFailureTolerance} disk crashes
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60">
                  <span className="text-emerald-800 font-bold block text-[10px] uppercase">
                    Reed-Solomon RS({ecDataChunksK}, {ecParityChunksM})
                  </span>
                  <div className="text-xl font-extrabold text-emerald-950 mt-1">
                    {erasureCodingAnalysis.ecRawStorageTB} TB Raw Disks
                  </div>
                  <span className="text-emerald-700 font-bold block mt-1">
                    Saves {erasureCodingAnalysis.rawDiskSavingsTB} TB of hardware! Tolerates {erasureCodingAnalysis.ecFailureTolerance} simultaneous node crashes.
                  </span>
                </div>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-5">
                <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                  Interactive Systems Tool 3
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Okapi BM25 Search Relevance Score Simulator
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Tune term frequency saturation and document length normalization to witness how BM25 ranks documents.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Term Occurrences in Doc (tf): <span className="text-orange-600">{bm25Tf}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={bm25Tf}
                    onChange={(e) => setBm25Tf(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">Raw term frequency</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Candidate Doc Length (|D|): <span className="text-orange-600">{bm25DocLen} words</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={bm25DocLen}
                    onChange={(e) => setBm25DocLen(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">Candidate document word count</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Average Corpus Doc Length (avgdl): <span className="text-orange-600">{bm25AvgDocLen} words</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    step="50"
                    value={bm25AvgDocLen}
                    onChange={(e) => setBm25AvgDocLen(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <span className="text-[10px] text-stone-400 font-mono block mt-1">Benchmark corpus average</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl border border-stone-200 bg-[#faf8f4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Calculated BM25 Relevance Score</span>
                  <span className="text-2xl font-extrabold text-orange-600">{bm25Score.score}</span>
                </div>
                <div className="text-[11px] text-stone-600 space-y-1">
                  <div>IDF Weight: <strong>{bm25Score.idf}</strong> &bull; Saturation Component: <strong>{bm25Score.tfComponent}</strong></div>
                  <div>Hyperparameters: <code>k1 = {bm25Score.k1}</code>, <code>b = {bm25Score.b}</code></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: PRODUCTION Q&A                                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="border-b border-stone-200 pb-3 mb-6">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                Staff Systems Architecture
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                Senior Systems Engineering Q&amp;A Scenarios
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Real-world failure modes, architectural trade-offs, and design interview scenarios from hyper-scale production deployments.
              </p>
            </div>

            {qaScenarios.map((qa) => {
              const isExpanded = expandedQA[qa.id];
              return (
                <div
                  key={qa.id}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-xs transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-stone-50/70 transition cursor-pointer"
                  >
                    <div>
                      <span className="font-mono text-[10px] font-bold text-orange-600 uppercase block mb-1">
                        Scenario: {qa.id.toUpperCase()}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900">
                        {qa.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">{qa.context}</p>
                    </div>
                    <div className="shrink-0 text-stone-400">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-5 pt-0 border-t border-stone-100 bg-[#faf8f4] text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <div className="mt-3 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                        <strong className="text-stone-900 block mb-2 font-mono text-xs uppercase text-orange-700">
                          Senior Engineering Resolution:
                        </strong>
                        <p>{qa.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: CAPSTONE PROJECT TRACKER                                    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Portfolio Capstone Project
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                    Build a Searchable Data Platform
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Ingest documents, store payloads in S3/MinIO, construct an inverted index, and process event streams into an analytics lakehouse.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Progress</span>
                  <span className="text-xl font-extrabold text-orange-600 font-mono">
                    {completedCount} / 9 Complete
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-orange-600 h-full transition-all duration-300"
                  style={{ width: `${(completedCount / 9) * 100}%` }}
                />
              </div>

              {/* 9 Deliverables Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    key: "deliv1",
                    title: "1. Document Ingestion API",
                    desc: "Accept multipart uploads with MIME type detection and generate SHA-256 checksums.",
                  },
                  {
                    key: "deliv2",
                    title: "2. Object Storage Separation",
                    desc: "Store binary files in MinIO/S3 and persist file metadata in relational PostgreSQL/SQLite.",
                  },
                  {
                    key: "deliv3",
                    title: "3. Inverted Index Engine",
                    desc: "Extract text, tokenize, remove stopwords, stem words, and build an in-memory or Lucene index.",
                  },
                  {
                    key: "deliv4",
                    title: "4. BM25 Ranked Query Service",
                    desc: "Implement BM25 scoring with boolean operators (AND, OR, NOT) and faceted filters.",
                  },
                  {
                    key: "deliv5",
                    title: "5. Event Stream Pipeline",
                    desc: "Stream search and view events through Kafka topics into an analytical dataset.",
                  },
                  {
                    key: "deliv6",
                    title: "6. Lakehouse Parquet Storage",
                    desc: "Write enriched events to partitioned Parquet files with snappy compression.",
                  },
                  {
                    key: "deliv7",
                    title: "7. Deduplication & Idempotency",
                    desc: "Handle duplicate event arrivals and network retry spikes without double-counting metrics.",
                  },
                  {
                    key: "deliv8",
                    title: "8. Storage Security & IAM",
                    desc: "Enforce time-limited pre-signed URLs and implement role-based access controls (RBAC).",
                  },
                  {
                    key: "deliv9",
                    title: "9. Benchmarks & Engineering Report",
                    desc: "Record search latency percentiles (p50, p95, p99) and produce an architecture trade-off report.",
                  },
                ].map((item) => {
                  const isDone = projectChecklist[item.key];
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleChecklist(item.key)}
                      className={`p-4 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                        isDone
                          ? "border-emerald-300 bg-emerald-50/50"
                          : "border-stone-200 bg-white hover:border-orange-300 shadow-xs"
                      }`}
                    >
                      <div className="mt-0.5">
                        {isDone ? (
                          <CheckCircle2 size={18} className="text-emerald-600" />
                        ) : (
                          <div className="w-4 h-4 rounded border border-stone-300 bg-stone-50" />
                        )}
                      </div>
                      <div>
                        <strong className={`text-xs block ${isDone ? "text-emerald-950" : "text-stone-900"}`}>
                          {item.title}
                        </strong>
                        <p className="text-[11px] text-stone-500 mt-1 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Assessment Weightage Summary */}
              <div className="mt-4 p-4 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs">
                <span className="font-bold text-stone-900 block font-mono text-[10px] uppercase mb-2">
                  Academic Evaluation Breakdown:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-stone-600">
                  <div>&bull; Conceptual Quizzes: <strong>15%</strong></div>
                  <div>&bull; Architecture Designs: <strong>20%</strong></div>
                  <div>&bull; Practical Labs: <strong>30%</strong></div>
                  <div>&bull; Final Capstone: <strong>35%</strong></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT QUIZ                                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Knowledge Assessment
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Module 8: Storage, Search &amp; Pipelines Evaluation
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    10 comprehensive questions verifying technical mastery of block vs. object storage, erasure coding, inverted indexes, and lakehouses.
                  </p>
                </div>
                {quizSubmitted ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-stone-900">
                      Score: {calculateScore()} / 10 ({Math.round((calculateScore() / 10) * 100)}%)
                    </span>
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw size={13} />
                      Retry
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setQuizSubmitted(true)}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer"
                  >
                    Submit Answers
                  </button>
                )}
              </div>

              {/* Question List */}
              <div className="space-y-6 pt-2">
                {quizQuestions.map((q, idx) => {
                  const selected = selectedAnswers[q.id];
                  const isCorrect = selected === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition ${
                        quizSubmitted
                          ? isCorrect
                            ? "border-emerald-300 bg-emerald-50/30"
                            : "border-red-300 bg-red-50/30"
                          : "border-stone-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-orange-600">
                          Q{idx + 1}.
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                          {q.question}
                        </h4>
                      </div>

                      <div className="space-y-2 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const isOptSelected = selected === oIdx;
                          let optStyle =
                            "border-stone-200 bg-stone-50/60 hover:bg-stone-100 text-stone-700";

                          if (isOptSelected && !quizSubmitted) {
                            optStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                          } else if (quizSubmitted) {
                            if (oIdx === q.correct) {
                              optStyle = "border-emerald-500 bg-emerald-100/70 text-emerald-950 font-bold";
                            } else if (isOptSelected && !isCorrect) {
                              optStyle = "border-red-400 bg-red-100/70 text-red-950 line-through";
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectAnswer(q.id, oIdx)}
                              className={`w-full text-left p-3 rounded-xl border transition cursor-pointer ${optStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                          <strong className="text-stone-900 block font-mono text-[10px] uppercase mb-1">
                            Architectural Explanation:
                          </strong>
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

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: ACADEMIC CITATIONS & RESEARCH PAPERS                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-4">
            <div className="border-b border-stone-200 pb-3 mb-6">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                Curriculum Foundation
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                Recommended Study Resources &amp; Research Citations
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Authoritative computer science textbooks, landmark systems papers, and academic course materials supporting Module 8.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Operating Systems: Three Easy Pieces (OSTEP)",
                  authors: "Remzi H. Arpaci-Dusseau & Andrea C. Arpaci-Dusseau",
                  topics: "File Systems, Disk Scheduling, Inodes, Journaling, and Crash Consistency.",
                  link: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
                  badge: "Free Online Textbook",
                },
                {
                  title: "Introduction to Information Retrieval",
                  authors: "Christopher D. Manning, Prabhakar Raghavan, Hinrich Schütze",
                  topics: "Inverted Index Construction, BM25 Scoring, Boolean Queries, and NDCG Evaluation.",
                  link: "https://nlp.stanford.edu/IR-book/",
                  badge: "Stanford University / Cambridge",
                },
                {
                  title: "Designing Data-Intensive Applications (DDIA)",
                  authors: "Martin Kleppmann",
                  topics: "Reliable Storage Engines, SSTables, LSM-Trees, Batch (Spark), and Stream (Kafka) Processing.",
                  link: "https://dataintensive.net/",
                  badge: "Industry Standard Reference",
                },
                {
                  title: "The Google File System (GFS)",
                  authors: "Sanjay Ghemawat, Howard Gobioff, Shun-Tak Leung",
                  topics: "Decoupling Control Flow from Data Flow, 64MB Chunks, Leases, and Append Semantics.",
                  link: "https://research.google/pubs/pub51/",
                  badge: "Landmark Systems Paper (ACM SOSP)",
                },
                {
                  title: "Scalable Systems for Data Science (DS256)",
                  authors: "Department of Computational and Data Sciences (CDS), IISc Bangalore",
                  topics: "Distributed Storage, Lakehouses, Resilient Distributed Datasets, and Spark Internals.",
                  link: "https://cds.iisc.ac.in/courses/ds256/",
                  badge: "IISc Bangalore Curriculum",
                },
                {
                  title: "Data Engineering (CS5015)",
                  authors: "Department of Computer Science & Engineering, IIT Palakkad",
                  topics: "Information Retrieval, Analytical Columnar Storage, and Stream ETL Pipelines.",
                  link: "https://cse.iitpkd.ac.in/courses/cs5015-Data-Engineering/",
                  badge: "IIT Palakkad Curriculum",
                },
              ].map((res, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-stone-200 bg-white shadow-xs space-y-2 hover:border-orange-300 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-orange-700 bg-orange-100 px-2.5 py-0.5 rounded-full font-bold">
                      {res.badge}
                    </span>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-orange-600 transition"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">{res.title}</h4>
                  <span className="text-[11px] text-stone-500 font-mono block">{res.authors}</span>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">{res.topics}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
