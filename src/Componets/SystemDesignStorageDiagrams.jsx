import React, { useState } from "react";
import {
  HardDrive,
  Database,
  Search,
  Server,
  Layers,
  Cpu,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  ShieldCheck,
  Zap,
  Activity,
  FileText,
  Key,
  Folder,
  Sliders,
  Boxes,
  Split,
  Binary,
  Radio,
  FileCode,
} from "lucide-react";

/**
 * Diagram 1: Storage Hierarchy & Performance Tiers
 * Compares CPU Caches, RAM, NVMe SSD, HDD, Distributed File Systems, and Cloud Object Storage.
 */
export function StorageHierarchyDiagram() {
  const [selectedTier, setSelectedTier] = useState("nvme");

  const tiers = {
    l1: {
      name: "CPU L1 / L2 Cache",
      latency: "0.5 – 3 ns",
      throughput: "~1,000 GB/s",
      costPerGB: "$500.00 / GB (silicon)",
      persistence: "Volatile",
      accessPattern: "Cache line loads (64 bytes)",
      useCase: "Active registers, loop execution, CPU pipeline execution",
      icon: Cpu,
      color: "border-purple-300 bg-purple-50 text-purple-900",
      accent: "bg-purple-600",
    },
    ram: {
      name: "Main Memory (DDR4 / DDR5 RAM)",
      latency: "50 – 100 ns",
      throughput: "20 – 100 GB/s",
      costPerGB: "$3.00 – $5.00 / GB",
      persistence: "Volatile (lost on power loss)",
      accessPattern: "Byte-addressable random access",
      useCase: "Redis, Memcached, database buffer pool, OS page cache",
      icon: Layers,
      color: "border-blue-300 bg-blue-50 text-blue-900",
      accent: "bg-blue-600",
    },
    nvme: {
      name: "NVMe SSD (PCIe Gen4 / Gen5)",
      latency: "10 – 50 \u03BCs",
      throughput: "3,500 – 7,500 MB/s",
      costPerGB: "$0.08 – $0.15 / GB",
      persistence: "Non-volatile (Flash NAND)",
      accessPattern: "Block-addressable (4KB disk pages)",
      useCase: "PostgreSQL WAL, MySQL InnoDB data pages, RocksDB LSM-Trees",
      icon: HardDrive,
      color: "border-emerald-300 bg-emerald-50 text-emerald-900",
      accent: "bg-emerald-600",
    },
    hdd: {
      name: "Spinning Magnetic Hard Disk (HDD)",
      latency: "5 – 15 ms (Seek + Rotational)",
      throughput: "150 – 250 MB/s (Sequential)",
      costPerGB: "$0.015 – $0.025 / GB",
      persistence: "Non-volatile (Magnetic platters)",
      accessPattern: "Sequential sectors (Random I/O penalty is 100x)",
      useCase: "Cold log archives, raw video files, big data sequential scans",
      icon: Database,
      color: "border-amber-300 bg-amber-50 text-amber-900",
      accent: "bg-amber-600",
    },
    dfs: {
      name: "Distributed File System (HDFS / Ceph / NFS)",
      latency: "1 – 5 ms (Network RTT + RPC)",
      throughput: "10 – 100 Gbps network aggregate",
      costPerGB: "$0.04 – $0.08 / GB (including replicas)",
      persistence: "Durable (3x replicated or Erasure Coded)",
      accessPattern: "Large sequential chunks (64MB – 128MB)",
      useCase: "Apache Spark batch jobs, distributed compute clusters, POSIX mounts",
      icon: Server,
      color: "border-cyan-300 bg-cyan-50 text-cyan-900",
      accent: "bg-cyan-600",
    },
    s3: {
      name: "Cloud Object Storage (Amazon S3 / MinIO / GCS)",
      latency: "50 – 150 ms (Time To First Byte)",
      throughput: "Virtually unlimited (via prefix partitioning)",
      costPerGB: "$0.023 / GB (Hot) down to $0.00099 (Glacier)",
      persistence: "99.999999999% (11 9's durability)",
      accessPattern: "HTTP REST API (GET, PUT, Multipart)",
      useCase: "Modern Data Lakes, analytical Parquet tables, user media, backups",
      icon: Boxes,
      color: "border-orange-300 bg-orange-50 text-orange-900",
      accent: "bg-orange-600",
    },
  };

  const active = tiers[selectedTier];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 1
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Storage Hierarchy: Latency, Bandwidth, &amp; Cost Trade-Offs
          </h4>
        </div>
        <div className="flex flex-wrap gap-1 text-xs">
          {Object.entries(tiers).map(([key, t]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedTier(key)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                selectedTier === key
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Pyramid / Tier Stack */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-5 space-y-1.5 font-mono text-[11px]">
          <div
            onClick={() => setSelectedTier("l1")}
            className={`p-2 rounded-lg border transition cursor-pointer text-center font-bold ${
              selectedTier === "l1"
                ? "border-purple-500 bg-purple-500 text-white shadow-sm"
                : "border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-100"
            }`}
          >
            CPU L1/L2 Cache (0.5 ns, ~$500/GB)
          </div>
          <div
            onClick={() => setSelectedTier("ram")}
            className={`p-2 rounded-lg border transition cursor-pointer text-center font-bold ${
              selectedTier === "ram"
                ? "border-blue-500 bg-blue-500 text-white shadow-sm"
                : "border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"
            }`}
          >
            RAM (100 ns, ~$4/GB)
          </div>
          <div
            onClick={() => setSelectedTier("nvme")}
            className={`p-2 rounded-lg border transition cursor-pointer text-center font-bold ${
              selectedTier === "nvme"
                ? "border-emerald-500 bg-emerald-500 text-white shadow-sm"
                : "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
            }`}
          >
            NVMe SSD (20 &mu;s, ~$0.10/GB)
          </div>
          <div
            onClick={() => setSelectedTier("hdd")}
            className={`p-2 rounded-lg border transition cursor-pointer text-center font-bold ${
              selectedTier === "hdd"
                ? "border-amber-500 bg-amber-500 text-white shadow-sm"
                : "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
            }`}
          >
            HDD Platter (10 ms, ~$0.02/GB)
          </div>
          <div
            onClick={() => setSelectedTier("dfs")}
            className={`p-2 rounded-lg border transition cursor-pointer text-center font-bold ${
              selectedTier === "dfs"
                ? "border-cyan-500 bg-cyan-500 text-white shadow-sm"
                : "border-cyan-200 bg-cyan-50 text-cyan-800 hover:bg-cyan-100"
            }`}
          >
            Distributed FS (HDFS/Ceph) (~5 ms, ~$0.05/GB)
          </div>
          <div
            onClick={() => setSelectedTier("s3")}
            className={`p-2 rounded-lg border transition cursor-pointer text-center font-bold ${
              selectedTier === "s3"
                ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                : "border-orange-200 bg-orange-50 text-orange-800 hover:bg-orange-100"
            }`}
          >
            Object Storage (S3/MinIO) (100 ms, ~$0.02/GB down to $0.001)
          </div>
        </div>

        {/* Selected Tier Deep-Dive Card */}
        <div className="md:col-span-7 rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${active.accent}`} />
              <strong className="text-stone-900 text-sm">{active.name}</strong>
            </div>
            <span className="font-mono text-[10px] text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
              {active.persistence}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2 rounded-lg border border-stone-200">
              <span className="text-stone-400 font-mono block text-[9px] uppercase">Access Latency</span>
              <span className="font-bold text-stone-800 font-mono">{active.latency}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-stone-200">
              <span className="text-stone-400 font-mono block text-[9px] uppercase">Sequential Throughput</span>
              <span className="font-bold text-stone-800 font-mono">{active.throughput}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-stone-200">
              <span className="text-stone-400 font-mono block text-[9px] uppercase">Approx Cost / GB</span>
              <span className="font-bold text-stone-800 font-mono">{active.costPerGB}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-stone-200">
              <span className="text-stone-400 font-mono block text-[9px] uppercase">Access Interface</span>
              <span className="font-bold text-stone-800 font-mono truncate">{active.accessPattern}</span>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-stone-200">
            <span className="text-stone-400 font-mono block text-[9px] uppercase mb-1">
              Architectural Systems Role
            </span>
            <p className="text-stone-700 leading-relaxed text-[11px]">{active.useCase}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 2: Object Storage Architecture & Multipart Upload Flow
 * Illustrates Key Prefix Hash Partitioning, Pre-signed URLs, Multipart Chunks, and S3 ETag verification.
 */
export function ObjectStorageMultipartDiagram() {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "1. Client Requests Pre-signed URL",
      desc: "Client authenticates with App Gateway and requests permission to upload a 5GB video. Gateway signs an IAM-constrained Pre-Signed PUT URL valid for 15 minutes.",
      flow: "Client &rarr; App Server (Generate IAM Pre-signed URL)",
    },
    {
      id: 2,
      title: "2. Initiate Multipart Upload",
      desc: "Client invokes InitiateMultipartUpload on Object Storage (S3/MinIO). Storage allocates an UploadId and initializes metadata catalog entry.",
      flow: "Client &rarr; S3 API: InitiateMultipartUpload(Bucket, Key) &rarr; UploadId",
    },
    {
      id: 3,
      title: "3. Parallel Chunk Streaming via Prefixes",
      desc: "Client splits the file into 50 x 100MB parts. Multiple concurrent workers stream parts directly to S3 endpoints across partitioned key prefixes.",
      flow: "Part 1..50 &rarr; S3 Storage Nodes (Streaming PUT with MD5 Checksum)",
    },
    {
      id: 4,
      title: "4. ETag Validation & Complete Assembly",
      desc: "For each chunk, S3 writes replicas and returns an MD5 ETag. Client sends CompleteMultipartUpload with list of (PartNumber, ETag). S3 atomically finalizes object.",
      flow: "Client &rarr; S3: CompleteMultipartUpload &rarr; Generates combined ETag-50",
    },
    {
      id: 5,
      title: "5. Event Notification Triggers Data Pipeline",
      desc: "S3 fires an s3:ObjectCreated event to Kafka/SQS topic. Downstream transcoding workers and ingestion pipelines immediately consume the new object.",
      flow: "S3 Event Bridge &rarr; Kafka Topic &rarr; Ingestion &amp; Search Pipeline",
    },
  ];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 2
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Object Storage: Pre-signed Multipart Upload &amp; Event Architecture
          </h4>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStep(s)}
              className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${
                step === s
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Architectural Flow Diagram */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
          <div
            className={`p-3 rounded-xl border transition ${
              step >= 1 ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-stone-50 text-stone-400"
            }`}
          >
            <span className="block font-bold text-[11px]">Client Browser / App</span>
            <span className="text-[9px] opacity-80">Streams direct chunks</span>
          </div>
          <div
            className={`p-3 rounded-xl border transition ${
              step === 1 ? "border-orange-500 bg-orange-50 text-orange-900 font-bold" : "border-stone-200 bg-stone-50 text-stone-500"
            }`}
          >
            <span className="block font-bold text-[11px]">API Gateway</span>
            <span className="text-[9px]">Signs Pre-Signed URLs</span>
          </div>
          <div
            className={`p-3 rounded-xl border transition ${
              step >= 2 && step <= 4
                ? "border-emerald-600 bg-emerald-50 text-emerald-900 font-bold"
                : "border-stone-200 bg-stone-50 text-stone-500"
            }`}
          >
            <span className="block font-bold text-[11px]">Object Storage (S3/MinIO)</span>
            <span className="text-[9px]">Prefix Partitioned Bucket</span>
          </div>
          <div
            className={`p-3 rounded-xl border transition ${
              step === 5 ? "border-blue-600 bg-blue-50 text-blue-900 font-bold" : "border-stone-200 bg-stone-50 text-stone-500"
            }`}
          >
            <span className="block font-bold text-[11px]">Kafka / Event Bridge</span>
            <span className="text-[9px]">Fires downstream ETL</span>
          </div>
        </div>

        {/* Active Step Details */}
        <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-orange-950 text-sm">{steps[step - 1].title}</h5>
            <span className="text-[10px] font-mono text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
              Phase {step} of 5
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-xs">{steps[step - 1].desc}</p>
          <div className="bg-white/80 p-2 rounded-lg border border-orange-200 font-mono text-[11px] text-orange-900">
            <strong>Payload Protocol:</strong> {steps[step - 1].flow}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 3: Distributed File System & Erasure Coding vs Replication
 * GFS/HDFS Master & ChunkServers, comparing 3x Replication with Reed-Solomon RS(8+4).
 */
export function DistributedStorageErasureCodingDiagram() {
  const [mode, setMode] = useState("ec"); // "rep" | "ec"
  const [failedNodes, setFailedNodes] = useState([]);

  const toggleNodeFail = (nodeId) => {
    setFailedNodes((prev) =>
      prev.includes(nodeId) ? prev.filter((id) => id !== nodeId) : [...prev, nodeId]
    );
  };

  const resetCluster = () => {
    setFailedNodes([]);
  };

  // In 3x Replication, tolerance is 2 failures per 3-replica group
  // In RS(8+4), 8 data chunks + 4 parity chunks = 12 nodes total. Tolerates up to 4 arbitrary failures!
  const isHealthy =
    mode === "rep"
      ? failedNodes.filter((n) => [1, 2, 3].includes(n)).length < 3
      : failedNodes.length <= 4;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 3
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Fault Tolerance: 3x Replication vs Reed-Solomon Erasure Coding
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setMode("rep");
                resetCluster();
              }}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                mode === "rep"
                  ? "bg-white text-orange-600 shadow-xs font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              3x Replication (200% Overhead)
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("ec");
                resetCluster();
              }}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                mode === "ec"
                  ? "bg-white text-orange-600 shadow-xs font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Reed-Solomon RS(8+4) (50% Overhead)
            </button>
          </div>
          <button
            type="button"
            onClick={resetCluster}
            className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded-lg text-xs font-bold hover:bg-stone-200 transition cursor-pointer flex items-center gap-1"
          >
            <RefreshCw size={12} />
            Reset
          </button>
        </div>
      </div>

      {/* Cluster Node Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs bg-stone-50 p-3 rounded-xl border border-stone-200">
          <div>
            <span className="font-bold text-stone-900">Cluster Status: </span>
            {isHealthy ? (
              <span className="text-emerald-700 font-bold font-mono">
                DATA RECOVERABLE ({failedNodes.length} node{failedNodes.length === 1 ? "" : "s"} down)
              </span>
            ) : (
              <span className="text-red-700 font-bold font-mono">
                DATA LOSS / CORRUPTION THRESHOLD EXCEEDED ({failedNodes.length} down)
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono text-stone-500">
            {mode === "rep" ? "Tolerates 2 node failures" : "Tolerates 4 arbitrary parity failures"}
          </span>
        </div>

        {mode === "rep" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[1, 2, 3].map((node) => {
              const isDead = failedNodes.includes(node);
              return (
                <div
                  key={node}
                  onClick={() => toggleNodeFail(node)}
                  className={`p-4 rounded-xl border cursor-pointer transition text-center ${
                    isDead
                      ? "border-red-400 bg-red-50 text-red-900 shadow-inner"
                      : "border-stone-200 bg-white hover:border-orange-300 shadow-xs"
                  }`}
                >
                  <Server className="mx-auto mb-2" size={24} />
                  <span className="font-bold block text-xs">Node {node} (Replica {node})</span>
                  <span className="text-[10px] font-mono block mt-1">
                    {isDead ? "FAILED (Click to revive)" : "HEALTHY (Click to fail)"}
                  </span>
                  <div className="mt-2 text-[10px] bg-stone-100 rounded px-2 py-1 text-stone-600 font-mono">
                    Full 100% File Copy
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dataNode) => {
              const isDead = failedNodes.includes(dataNode);
              return (
                <div
                  key={dataNode}
                  onClick={() => toggleNodeFail(dataNode)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition text-center ${
                    isDead
                      ? "border-red-400 bg-red-50 text-red-900"
                      : "border-blue-200 bg-blue-50/60 hover:border-blue-400"
                  }`}
                >
                  <span className="text-[9px] font-mono uppercase font-bold text-blue-800 block">
                    Data Chunk {dataNode}
                  </span>
                  <span className="text-xs font-bold block">{isDead ? "DEAD" : "ALIVE"}</span>
                  <span className="text-[9px] font-mono text-stone-500">12.5% of payload</span>
                </div>
              );
            })}
            {[9, 10, 11, 12].map((parityNode, idx) => {
              const isDead = failedNodes.includes(parityNode);
              return (
                <div
                  key={parityNode}
                  onClick={() => toggleNodeFail(parityNode)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition text-center ${
                    isDead
                      ? "border-red-400 bg-red-50 text-red-900"
                      : "border-purple-200 bg-purple-50/60 hover:border-purple-400"
                  }`}
                >
                  <span className="text-[9px] font-mono uppercase font-bold text-purple-800 block">
                    Parity P{idx + 1}
                  </span>
                  <span className="text-xs font-bold block">{isDead ? "DEAD" : "ALIVE"}</span>
                  <span className="text-[9px] font-mono text-stone-500">Galois Field Code</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Comparison Metrics Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono bg-[#faf8f4] p-3 rounded-xl border border-stone-200">
          <div>
            <span className="text-stone-400 block text-[9px] uppercase">Storage Overhead</span>
            <span className="font-bold text-stone-800">
              {mode === "rep" ? "200% (3x Raw Disk Cost)" : "50% (1.5x Raw Disk Cost)"}
            </span>
          </div>
          <div>
            <span className="text-stone-400 block text-[9px] uppercase">Failure Rebuild Penalty</span>
            <span className="font-bold text-stone-800">
              {mode === "rep" ? "Low: Simple stream from alive node" : "High: Reads 8 chunks across network + CPU math"}
            </span>
          </div>
          <div>
            <span className="text-stone-400 block text-[9px] uppercase">Target Workload</span>
            <span className="font-bold text-stone-800">
              {mode === "rep" ? "Hot write-heavy OLTP & fast failover" : "Petabyte-scale cold data lakes & S3 objects"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 4: Search Engine Inverted Index & BM25 Scoring
 * Explains Document Ingestion, Tokenizer, Posting Lists, and Term Weighting.
 */
export function SearchInvertedIndexDiagram() {
  const [selectedTerm, setSelectedTerm] = useState("distributed");

  const terms = {
    distributed: {
      df: 3,
      postings: [
        { docId: "Doc 1", title: "Distributed Consensus in Raft", tf: 4, score: "3.42" },
        { docId: "Doc 3", title: "Scalable Distributed File Systems", tf: 2, score: "2.15" },
        { docId: "Doc 4", title: "Distributed Cache Invalidation", tf: 1, score: "1.30" },
      ],
      idf: "1.28 (Common across systems articles)",
    },
    storage: {
      df: 2,
      postings: [
        { docId: "Doc 2", title: "Object Storage Internals & S3", tf: 5, score: "4.10" },
        { docId: "Doc 3", title: "Scalable Distributed File Systems", tf: 2, score: "1.95" },
      ],
      idf: "1.69 (Specific to persistence topics)",
    },
    pipeline: {
      df: 1,
      postings: [
        { docId: "Doc 5", title: "Real-Time Streaming Pipelines with Kafka", tf: 6, score: "5.82" },
      ],
      idf: "2.38 (High discriminative value)",
    },
  };

  const active = terms[selectedTerm];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 4
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Information Retrieval: Inverted Index &amp; BM25 Postings List
          </h4>
        </div>
        <div className="flex gap-1.5 text-xs">
          {Object.keys(terms).map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setSelectedTerm(term)}
              className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition cursor-pointer ${
                selectedTerm === term
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              &quot;{term}&quot;
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Term Dictionary & Index Stats */}
        <div className="md:col-span-5 rounded-xl border border-stone-200 bg-[#faf8f4] p-3.5 text-xs space-y-3">
          <span className="font-mono text-[10px] uppercase font-bold text-stone-400 block">
            Lucene / OpenSearch Term Dictionary
          </span>
          <div className="p-3 bg-white rounded-lg border border-stone-200 font-mono text-xs">
            <span className="text-stone-400 text-[10px] block">LOOKUP TERM:</span>
            <strong className="text-orange-600 text-sm">&quot;{selectedTerm}&quot;</strong>
            <div className="mt-2 text-[11px] text-stone-600 space-y-1">
              <div>Document Frequency (DF): <strong className="text-stone-900">{active.df} docs</strong></div>
              <div>Calculated IDF Weight: <strong className="text-stone-900">{active.idf}</strong></div>
            </div>
          </div>
          <p className="text-stone-600 text-[11px] leading-relaxed">
            The lexicon maps normalized vocabulary tokens to contiguous <strong>Posting Lists</strong> stored on disk using delta-encoded bit-packing (Frame-of-Reference / Roaring Bitmaps).
          </p>
        </div>

        {/* Posting List & BM25 Relevance Matches */}
        <div className="md:col-span-7 space-y-2">
          <span className="font-mono text-[10px] uppercase font-bold text-stone-400 block">
            Postings List Pointer &rarr; Matched Documents
          </span>
          <div className="space-y-2">
            {active.postings.map((p) => (
              <div
                key={p.docId}
                className="p-3 rounded-xl border border-stone-200 bg-white flex items-center justify-between text-xs hover:border-orange-300 transition"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-stone-100 font-mono text-[10px] px-1.5 py-0.5 rounded text-stone-600 font-bold">
                      {p.docId}
                    </span>
                    <strong className="text-stone-900 text-xs">{p.title}</strong>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono mt-1 block">
                    Term Frequency (TF) = {p.tf} occurrences
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-stone-400 block uppercase">BM25 Score</span>
                  <span className="font-mono font-bold text-orange-600 text-sm">{p.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 5: Modern Lakehouse & Data Pipeline Flow
 * End-to-end architecture: Ingestion -> Kafka -> Spark/Flink -> Parquet/Iceberg -> Trino/Search.
 */
export function DataPipelineLakehouseDiagram() {
  const [activeStage, setActiveStage] = useState("storage");

  const stages = {
    ingest: {
      title: "1. Ingestion Layer: Event Streaming & Micro-Batches",
      tech: "Apache Kafka, AWS Kinesis, Debezium CDC",
      details:
        "High-throughput event logs and database change data capture (CDC) streams are buffered with partitioned topics, ensuring sequential ordering per partition key.",
    },
    process: {
      title: "2. Processing Engine: Batch vs Streaming Transformations",
      tech: "Apache Spark, Apache Flink, dbt",
      details:
        "Validates schema, filters corrupted payloads, deduplicates using event-time watermarks, and writes structured columnar records in micro-batches.",
    },
    storage: {
      title: "3. Analytical Storage: Parquet & Lakehouse Table Formats",
      tech: "Apache Iceberg, Delta Lake, Apache Parquet on MinIO/S3",
      details:
        "Stores columnar Parquet with dictionary compression, partition pruning, and ACID table snapshots, solving the classic small-file problem with background compaction.",
    },
    query: {
      title: "4. Serving & Consumption: Search & Interactive BI",
      tech: "Trino, ClickHouse, OpenSearch, Superset",
      details:
        "Distributed MPP engines push filters down to storage metadata (Predicate Pushdown), returning queries over billions of rows in sub-second latency.",
    },
  };

  const curr = stages[activeStage];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 5
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            End-to-End Modern Data Pipeline &amp; Lakehouse Architecture
          </h4>
        </div>
        <div className="flex gap-1 text-xs">
          {Object.keys(stages).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setActiveStage(st)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono transition cursor-pointer capitalize ${
                activeStage === st
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* Pipeline Flow Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div
            onClick={() => setActiveStage("ingest")}
            className={`p-3 rounded-xl border cursor-pointer transition ${
              activeStage === "ingest" ? "border-orange-500 bg-orange-50 font-bold" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <Radio className="mx-auto mb-1 text-orange-600" size={18} />
            <span className="block text-[11px]">1. Ingest (Kafka)</span>
            <span className="text-[9px] text-stone-400">Durable Buffering</span>
          </div>
          <div
            onClick={() => setActiveStage("process")}
            className={`p-3 rounded-xl border cursor-pointer transition ${
              activeStage === "process" ? "border-orange-500 bg-orange-50 font-bold" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <Cpu className="mx-auto mb-1 text-blue-600" size={18} />
            <span className="block text-[11px]">2. Compute (Spark)</span>
            <span className="text-[9px] text-stone-400">ETL &amp; Watermarks</span>
          </div>
          <div
            onClick={() => setActiveStage("storage")}
            className={`p-3 rounded-xl border cursor-pointer transition ${
              activeStage === "storage" ? "border-orange-500 bg-orange-50 font-bold" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <Boxes className="mx-auto mb-1 text-emerald-600" size={18} />
            <span className="block text-[11px]">3. Lakehouse (Iceberg)</span>
            <span className="text-[9px] text-stone-400">Parquet on S3</span>
          </div>
          <div
            onClick={() => setActiveStage("query")}
            className={`p-3 rounded-xl border cursor-pointer transition ${
              activeStage === "query" ? "border-orange-500 bg-orange-50 font-bold" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <Search className="mx-auto mb-1 text-purple-600" size={18} />
            <span className="block text-[11px]">4. Serve (Trino/Search)</span>
            <span className="text-[9px] text-stone-400">Sub-second Analytics</span>
          </div>
        </div>

        {/* Selected Stage Detail */}
        <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs space-y-2">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-stone-900 text-sm">{curr.title}</h5>
            <span className="font-mono text-[10px] text-stone-500 bg-white px-2.5 py-1 rounded border border-stone-200 font-bold">
              {curr.tech}
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-xs">{curr.details}</p>
        </div>
      </div>
    </div>
  );
}
