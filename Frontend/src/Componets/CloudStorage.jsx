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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 4: CLOUD STORAGE                                    */
/* Week 6: Block, File, Object, Distributed Storage, Durability & Lifecycle   */
/* Systems Theory: Google Colossus, AWS Dynamo/S3, Reed-Solomon Erasure Codes */
/* -------------------------------------------------------------------------- */

export default function CloudStorage() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Storage Cost & TCO Calculator State
  const [storageDataTb, setStorageDataTb] = useState(50); // Total TBs
  const [hotPct, setHotPct] = useState(40); // % in Hot/Standard
  const [coolPct, setCoolPct] = useState(40); // % in Cool/IA
  const [archivePct, setArchivePct] = useState(20); // % in Cold/Glacier
  const [monthlyRetrievalTb, setMonthlyRetrievalTb] = useState(5); // TB retrieved/month

  // Storage Selector Interactive Tool State
  const [selectorAccessPattern, setSelectorAccessPattern] = useState("multi-vm"); // "single-vm", "multi-vm", "web-clients", "database"
  const [selectorProtocol, setSelectorProtocol] = useState("nfs-posix"); // "block", "nfs-posix", "rest-http"
  const [selectorLatency, setSelectorLatency] = useState("sub-millisecond"); // "sub-millisecond", "low-millisecond", "minutes-hours"

  // Storage Crisis Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Cost Calculator Math
  const costBreakdown = useMemo(() => {
    const totalTb = parseFloat(storageDataTb) || 0;
    const hotTb = (totalTb * (parseFloat(hotPct) || 0)) / 100;
    const coolTb = (totalTb * (parseFloat(coolPct) || 0)) / 100;
    const archiveTb = (totalTb * (parseFloat(archivePct) || 0)) / 100;
    const retrieved = parseFloat(monthlyRetrievalTb) || 0;

    // Standard Pricing Assumptions (AWS S3 baseline)
    // Hot: $0.023 / GB / month = $23.55 / TB
    // Cool (Standard-IA): $0.0125 / GB / month = $12.80 / TB + $0.01/GB retrieval ($10.24/TB)
    // Archive (Glacier Flexible): $0.0036 / GB / month = $3.68 / TB + $0.03/GB retrieval ($30.72/TB)
    const hotStorageCost = hotTb * 23.55;
    const coolStorageCost = coolTb * 12.8;
    const archiveStorageCost = archiveTb * 3.68;

    // Retrieval costs apportioned mostly to cool & archive if fetched
    const coolRetrievalCost = Math.min(retrieved, coolTb) * 10.24;
    const archiveRetrievalCost = Math.max(0, retrieved - coolTb) * 30.72;

    const totalTieredMonthly =
      hotStorageCost + coolStorageCost + archiveStorageCost + coolRetrievalCost + archiveRetrievalCost;
    const allHotBaselineCost = totalTb * 23.55;
    const monthlySavings = Math.max(0, allHotBaselineCost - totalTieredMonthly);
    const savingsPercent = allHotBaselineCost > 0 ? ((monthlySavings / allHotBaselineCost) * 100).toFixed(1) : 0;

    return {
      hotTb,
      coolTb,
      archiveTb,
      hotStorageCost,
      coolStorageCost,
      archiveStorageCost,
      retrievalCost: coolRetrievalCost + archiveRetrievalCost,
      totalTieredMonthly,
      allHotBaselineCost,
      monthlySavings,
      savingsPercent,
    };
  }, [storageDataTb, hotPct, coolPct, archivePct, monthlyRetrievalTb]);

  // Recommended Storage Decision Engine logic
  const storageRecommendation = useMemo(() => {
    if (selectorAccessPattern === "database" || selectorProtocol === "block" || selectorLatency === "sub-millisecond") {
      return {
        type: "Block Storage",
        badge: "AWS EBS / Azure Managed Disk / GCP Persistent Disk",
        latency: "Sub-millisecond to ~2ms",
        protocol: "Raw block device over network (NVMe / iSCSI)",
        concurrency: "Dedicated single-VM attachment (or clustered multi-attach for RAC/GFS2)",
        reason:
          "Relational databases (PostgreSQL, MySQL, Oracle) and transactional state engines require low latency, small random 4KB/8KB reads and writes, and atomic block mutations. Block storage is non-negotiable here.",
        pricing: "Billed for provisioned capacity & IOPS whether filled with bytes or not.",
      };
    }

    if (selectorAccessPattern === "multi-vm" || selectorProtocol === "nfs-posix") {
      return {
        type: "Managed File Storage",
        badge: "AWS EFS / Azure Files / GCP Cloud Filestore",
        latency: "Low single-digit milliseconds (~3-10ms)",
        protocol: "NFSv4 (Linux) or SMB 3.0 (Windows)",
        concurrency: "Hundreds or thousands of VMs/containers mounted simultaneously (ReadWriteMany)",
        reason:
          "Traditional applications, CMS shared media directories (WordPress), legacy enterprise jobs, and Kubernetes pods needing shared ReadWriteMany volumes rely on POSIX filesystem tree semantics and file locking.",
        pricing: "Elastic pay-for-stored bytes or provisioned throughput tiers.",
      };
    }

    return {
      type: "Object Storage",
      badge: "AWS S3 / Azure Blob Storage / Google Cloud Storage",
      latency: "Tens to hundreds of milliseconds (10-100ms)",
      protocol: "REST API over HTTPS (GET, PUT, DELETE, LIST, Byte-Range)",
      concurrency: "Unlimited concurrent HTTP clients globally via CDNs or direct presigned URLs",
      reason:
        "Modern cloud-native systems store user uploads, images, backups, data lake parquet files, audio/video streams, and logs in object storage. It offers virtually infinite scalability, 11 nines durability, and built-in lifecycle tiering.",
      pricing: "Extremely cost-effective: pay only for exact gigabytes stored + API calls + data transfer.",
    };
  }, [selectorAccessPattern, selectorProtocol, selectorLatency]);

  const storageTopics = useMemo(
    () => [
      {
        id: "storage-mental-model",
        title: "The 4 Levels of Storage & 3 Core Models",
        shortTitle: "1. 4 Levels & 3 Models",
        category: "Foundations",
        icon: Database,
        summary:
          "Compute is temporary; data is what must survive. Master the 4 architectural layers of storage and the foundational differences between Block, File, and Object storage.",
        theory: [
          "In cloud architecture, virtual machines die, containers get rescheduled, and servers fail. But your customer transactions, database records, medical scans, and AI models cannot be lost. Storage is the persistent state of your enterprise.",
          "To design resilient cloud storage, you must examine it through 4 distinct abstraction levels:",
          "• LEVEL 1 — Application View: 'I need a database disk', 'I need a shared media folder', or 'I need a petabyte object repository.'",
          "• LEVEL 2 — Storage Interface: Block (raw sectors), File (hierarchical POSIX tree), or Object (flat key-value namespace with REST API).",
          "• LEVEL 3 — Distributed Storage Engine: 3-way synchronous replication, Reed-Solomon erasure coding, metadata catalogs, checksum verification, and background bit-rot scrubbing.",
          "• LEVEL 4 — Physical Infrastructure: NVMe SSDs, mechanical HDDs, multi-terabit datacenter leaf-spine networks, Availability Zones, and cross-region backbones.",
          "Every cloud storage product is a deliberate engineering trade-off between latency, throughput, concurrency, POSIX compatibility, durability, and cost.",
        ],
        keyPoints: [
          "Block Storage: Virtual raw hard drives for a single VM (OS boot, databases, high IOPS).",
          "File Storage: Hierarchical directory tree mounted across multiple VMs concurrently via NFS/SMB (POSIX compliant).",
          "Object Storage: Massive flat key-value bucket accessed via HTTP REST APIs (virtually infinite scale, lowest cost).",
          "Systems invariant: You cannot run a high-throughput transactional database directly on standard Object Storage due to lack of random block mutations.",
        ],
        diagramType: "storage-four-levels",
        architectDecision:
          "Never default to File Storage simply because 'it feels familiar like a local laptop folder'. Managed File Storage (EFS/Azure Files) costs 3x-10x more per gigabyte than Object Storage (S3/Blob). Use Object Storage for all user assets and data lake payloads.",
        interviewQuestions: [
          {
            q: "Explain the fundamental trade-off between Block, File, and Object Storage.",
            a: "Block storage provides ultra-low latency (<1ms) and random byte mutations for a single machine, but cannot scale globally and is expensive. File storage provides a shared POSIX directory tree with file locking for multiple concurrent servers, but has higher latency (3-10ms) and scaling limits. Object storage provides infinite exabyte scale, 11 nines durability, and global HTTP accessibility, but is append/replace only (immutable objects) with higher latency (20-100ms) and no POSIX file operations.",
          },
        ],
      },
      {
        id: "block-storage-deep-dive",
        title: "Block Storage: Virtual SAN, IOPS, Throughput & Multi-Attach",
        shortTitle: "2. Block Storage Deep Dive",
        category: "Block Storage",
        icon: HardDrive,
        summary:
          "Examine how cloud hypervisors attach network disks to VMs. Master IOPS vs Throughput formulas, burst balances, SSD tiers, and multi-attach clustered filesystems.",
        theory: [
          "Block storage (AWS EBS, Azure Managed Disks, GCP Persistent Disk) presents raw unformatted 512-byte or 4096-byte sectors to a virtual machine over a dedicated high-speed storage network (such as NVMe-over-Fabrics or proprietary fiber).",
          "To the operating system running inside the VM, the block volume looks identical to a physically plugged-in SAS/SATA/NVMe drive (`/dev/nvme1n1` or `C:` drive). The OS formats it with an ext4, XFS, or NTFS filesystem.",
          "Crucial Formula: Throughput (MB/s) = IOPS × I/O Block Size (KB) / 1024.",
          "• If your database issues 8 KB reads and writes at 10,000 IOPS: Throughput = 10,000 × 8 / 1024 = 78.1 MB/s.",
          "• If a backup tool streams large 256 KB sequential blocks at 1,000 IOPS: Throughput = 1,000 × 256 / 1024 = 250 MB/s.",
          "A disk bottleneck occurs when either IOPS or Throughput limits are hit. Modern cloud volumes (such as AWS gp3) decouple IOPS from provisioned volume size, whereas older gp2 volumes used burst credit buckets that caused sudden performance cliffs when exhausted.",
          "EBS Multi-Attach allows attaching a single io1/io2 volume to multiple EC2 instances simultaneously. However, standard filesystems like ext4 will immediately corrupt data if mounted simultaneously! You must use clustered filesystems (like GFS2 or Oracle RAC) that coordinate distributed locks.",
        ],
        keyPoints: [
          "Block storage resides in a single Availability Zone (AZ) and replicates synchronously within that AZ.",
          "gp3 / Premium SSD v2 allows independent provisioning of capacity (GB), IOPS, and throughput (MB/s).",
          "io2 Block Express / Ultra Disks provide sub-millisecond latency up to 256,000 IOPS for enterprise databases.",
          "Burst credit depletion on older gp2/Standard disks causes sudden database I/O latency spikes from 1ms to 2,000ms.",
        ],
        diagramType: "block-iops-throughput",
        architectDecision:
          "Always migrate legacy gp2 volumes to gp3. gp3 provides a baseline 3,000 IOPS and 125 MB/s at 20% lower cost per GB with zero burst-bucket depletion risk.",
        interviewQuestions: [
          {
            q: "Why does attaching a standard ext4 or NTFS block volume to two virtual machines simultaneously cause data corruption?",
            a: "Standard local filesystems assume single-host ownership. They cache directory metadata, inode allocations, and free-block bitmaps in the local host's RAM. If two independent OS kernels write to the same raw block volume without a distributed lock manager (like GFS2 or OCFS2), each OS will overwrite the other's metadata, resulting in immediate filesystem corruption.",
          },
        ],
      },
      {
        id: "file-storage-posix",
        title: "File Storage: POSIX Semantics, NFS, SMB & Multi-VM Shares",
        shortTitle: "3. File Storage & POSIX",
        category: "File Storage",
        icon: FolderTree,
        summary:
          "Understand hierarchical network filesystems (AWS EFS, Azure Files, GCP Filestore). Discover POSIX file locking, NFSv4 vs SMB 3.0, and concurrent ReadWriteMany clusters.",
        theory: [
          "File storage organizes bytes into human-readable directory trees: `/var/www/uploads/2026/report.pdf`. Unlike block storage (single machine) and object storage (flat HTTP API), file storage provides full POSIX (Portable Operating System Interface) filesystem semantics.",
          "What makes POSIX special?",
          "1. Hierarchical directories and atomic renames (`rename('/dir1/old.txt', '/dir2/new.txt')`).",
          "2. Byte-range file locking (`flock`, `fcntl`) allowing multiple processes to coordinate edits without overwriting.",
          "3. Standard OS read/write syscalls (`open()`, `seek()`, `write()`, `close()`) without rewriting application code.",
          "4. Shared ReadWriteMany (RWX) mounting: hundreds of web servers or containers can mount the exact same NFS/SMB export simultaneously.",
          "Protocols:",
          "• NFSv4 / NFSv3: The standard for Linux and Kubernetes environments (AWS EFS, GCP Filestore, Azure NetApp Files).",
          "• SMB 3.0: The standard for Windows Server, Active Directory integration, and macOS (Azure Files).",
          "Performance Models: Cloud file storage typically offers Elastic (pay as you go, throughput scales automatically with stored data volume) or Provisioned Throughput (reserve dedicated MB/s for high-throughput, low-capacity workloads).",
        ],
        keyPoints: [
          "Multi-VM Shared Access: Multiple compute nodes in different AZs can mount the same file share simultaneously.",
          "POSIX Compliance: Supports atomic renames, hard links, symbolic links, file permissions (chmod/chown), and byte-range locking.",
          "EFS Multi-AZ: Elastic File System automatically stores data redundantly across multiple AZs within a region.",
          "Latency Profile: 3ms - 10ms (higher than local Block Storage's <1ms due to network protocol overhead).",
        ],
        diagramType: "file-storage-nfs",
        architectDecision:
          "Do not use AWS EFS or Azure Files for database data directories (PostgreSQL/MySQL). The latency overhead of NFS network RPCs and distributed metadata locks will degrade transaction processing by 5x-10x compared to EBS.",
        interviewQuestions: [
          {
            q: "When should you choose File Storage (EFS/Azure Files) over Object Storage (S3/Blob)?",
            a: "Choose File Storage when existing application software relies on local POSIX filesystem operations (directory trees, atomic file rename, file locking, append-to-file), when multiple servers need concurrent read-write access to the same shared directory, or when refactoring legacy code to use HTTP S3 APIs is prohibitively expensive.",
          },
        ],
      },
      {
        id: "object-storage-architecture",
        title: "Object Storage Architecture: S3, Blob, REST API & Consistency",
        shortTitle: "4. Object Storage Deep Dive",
        category: "Object Storage",
        icon: Box,
        summary:
          "Deconstruct cloud object storage: flat namespaces, buckets, keys, metadata, multipart uploads, byte-range streaming, and strong read-after-write consistency.",
        theory: [
          "Object storage (AWS S3, Azure Blob Storage, Google Cloud Storage) is arguably the foundational cloud service that launched the modern internet. It abandons directory trees and raw sectors in favor of a massive distributed key-value store accessed purely over HTTP REST APIs.",
          "Core Anatomy of an Object:",
          "• Key: The unique string identifier (e.g., `customers/2026/invoices/inv_90412.pdf`). Slashes are just characters in the string, not physical folders!",
          "• Value: The raw bytes payload (from 0 bytes up to 5 TB per object).",
          "• Metadata: System headers (`Content-Type`, `Content-Length`, `ETag`, `Last-Modified`) plus custom user tags (`x-amz-meta-tenant: acme-corp`).",
          "• Version ID: Unique cryptographic generation hash when bucket versioning is enabled.",
          "Key Advanced Capabilities:",
          "1. Multipart Upload: Upload files larger than 100 MB in parallel 5 MB - 5 GB chunks. If chunk 34 fails, only chunk 34 retries. Crucial for network resilience!",
          "2. Byte-Range Requests: `Range: bytes=5000-10000` allows streaming video chunks or reading Parquet file headers without downloading the entire 50 GB file.",
          "3. Strong Read-After-Write Consistency: Since December 2020 (AWS S3) and native to Azure Blob/GCS, any `PUT` of a new object or overwrite of an existing object is immediately readable by subsequent `GET` requests without eventual consistency delays.",
        ],
        keyPoints: [
          "Flat Key-Value Namespace: Buckets contain keys and byte streams; 'folders' in web consoles are purely simulated UI prefixes.",
          "Objects are Immutable: You cannot edit byte 50 inside an existing S3 object. You must upload a completely new replacement object.",
          "Scale: Virtually infinite capacity and massive parallel throughput (3,500 PUTs/s and 5,500 GETs/s per prefix partition).",
          "Direct Browser Upload: Presigned URLs allow web browsers to upload directly to S3 without saturating backend API servers.",
        ],
        diagramType: "object-rest-api",
        architectDecision:
          "To achieve 50,000+ GET requests per second on S3, distribute files across randomized or hashed key prefixes (e.g. `data/2026/a1b2/file.parquet`), as each distinct prefix partition scales independently.",
        interviewQuestions: [
          {
            q: "Why are objects in S3 or Azure Blob storage immutable?",
            a: "Object storage is designed for exabyte scale, geo-replication, and 11 nines durability using erasure coding across thousands of commodity storage nodes. Allowing in-place partial byte mutations would require complex distributed locking, dirty-byte synchronization, and snapshot invalidation across all nodes. By making objects write-once-replace-whole, the distributed engine achieves near-linear scalability and high throughput.",
          },
        ],
      },
      {
        id: "distributed-storage-internals",
        title: "Distributed Storage Internals: Replication vs Erasure Coding",
        shortTitle: "5. Replication & Erasure Coding",
        category: "Distributed Systems",
        icon: Layers,
        summary:
          "Look under the hood of Google Colossus and AWS S3. Compare 3-way synchronous replication with Reed-Solomon Erasure Coding, bit-rot scrubbing, and self-healing.",
        theory: [
          "How do hyperscalers store exabytes of data reliably on cheap, failure-prone commodity hard drives? Hard drives fail every single day in every major datacenter. Storage engines assume failure is constant.",
          "Technique 1: 3-Way Synchronous Replication (Primary-Secondary)",
          "• Every byte written is duplicated across 3 separate physical racks or servers.",
          "• Storage Overhead: 200% (storing 1 TB requires 3 TB of physical raw disk capacity).",
          "• Fast write latency, but extremely expensive at scale.",
          "Technique 2: Reed-Solomon Erasure Coding (e.g., RS 8+4 or RS 16+4)",
          "• An object is split into 'k' data fragments, and mathematically combined into 'm' parity fragments.",
          "• In an RS 8+4 scheme: 8 data chunks + 4 parity chunks = 12 total fragments stored across 12 independent racks or AZs.",
          "• Storage Overhead: Only 50% (12 / 8 = 1.5x raw capacity!).",
          "• Fault Tolerance: Any 8 out of the 12 chunks can mathematically reconstruct the entire original object! The system can lose 4 simultaneous disks or entire server racks without losing a single byte.",
          "Background Scrubbing & Bit-Rot Healing:",
          "Magnetic disks and NAND flash suffer from silent data corruption ('bit rot') due to cosmic rays, electrical noise, or decaying magnetic charge. Cloud storage daemons continuously read stored blocks, recalculate SHA-256 or CRC32C checksums against metadata catalogs, and if a bit flip is detected, automatically reconstruct the healthy chunk from parity in the background.",
        ],
        keyPoints: [
          "3-Way Replication: $3\\times$ raw storage footprint, low CPU overhead, used for low-latency block volumes.",
          "Erasure Coding (RS k+m): $1.33\\times$ to $1.5\\times$ footprint, mathematically reconstructs lost data, used for object storage.",
          "Bit-Rot Defense: Continuous background scrubbing and checksum verification detects silent data decay before data loss occurs.",
          "Self-Healing: When a drive dies, the cluster immediately rebuilds missing parity blocks across remaining healthy drives.",
        ],
        diagramType: "erasure-coding-math",
        architectDecision:
          "Understand that while Erasure Coding drastically reduces storage cost, it requires higher CPU encoding overhead and slight latency penalties for small objects. Cloud providers handle this transparently in Object Storage tiers.",
        interviewQuestions: [
          {
            q: "How does Reed-Solomon Erasure Coding (RS 8+4) achieve higher fault tolerance than 3-way replication at half the storage cost?",
            a: "3-way replication stores 3 identical copies (300% physical footprint, 200% overhead) and can survive at most 2 drive failures. In RS 8+4 erasure coding, data is partitioned into 8 data blocks and 4 linear algebraic parity blocks (150% footprint, 50% overhead). Because any 8 of the 12 blocks can reconstruct the original file, the system survives up to 4 concurrent drive failures while consuming half the physical disk space.",
          },
        ],
      },
      {
        id: "durability-vs-availability",
        title: "Durability vs Availability & Cloud Redundancy Tiers",
        shortTitle: "6. Durability vs Availability",
        category: "Reliability & SLAs",
        icon: ShieldCheck,
        summary:
          "The critical distinction: Durability (will my data survive?) vs Availability (can I access it right now?). Learn Azure LRS/ZRS/GRS and AWS S3 Multi-AZ guarantees.",
        theory: [
          "One of the most tested cloud architecture distinctions is Durability vs Availability:",
          "1. DURABILITY: The probability that an object will NOT be lost or permanently corrupted over a one-year period.",
          "• AWS S3 Standard & Azure Blob guarantee '11 Nines' (99.999999999%) annual durability.",
          "• What does 11 nines actually mean? If you store 10,000,000 (10 million) objects in S3, you can expect to lose on average ONE single object every 10,000 years!",
          "2. AVAILABILITY: The percentage of time that the storage service endpoint is online, responding to HTTP requests, and returning data without 5xx errors.",
          "• Typical SLA: 99.9% to 99.99% availability (~52 minutes to 8.7 hours of allowable downtime per year).",
          "Cloud Redundancy Models (Azure nomenclature illustrated, matched globally):",
          "• LRS (Locally Redundant Storage): 3 copies within a single datacenter. Protects against disk/server failure; vulnerable to datacenter fires or floods.",
          "• ZRS (Zone-Redundant Storage): Synchronously written across 3 separate Availability Zones in the same region. Survives the complete destruction of an entire datacenter facility.",
          "• GRS (Geo-Redundant Storage): LRS (3 copies in primary region) + asynchronous replication to a paired secondary region 500+ miles away (3 copies). Protects against regional cataclysms.",
          "• GZRS (Geo-Zone-Redundant): ZRS in primary region (3 AZs) + asynchronous replication to secondary region.",
        ],
        keyPoints: [
          "Durability is about permanence; Availability is about uptime.",
          "A storage system can have 100% durability (data is completely intact on disk) but 0% availability (network cable severed).",
          "AWS S3 Standard and Azure ZRS automatically distribute data across at least 3 Availability Zones.",
          "S3 One Zone-IA stores data in a single AZ at 20% lower cost, but data is permanently lost if that AZ is destroyed.",
        ],
        diagramType: "redundancy-tiers",
        architectDecision:
          "For mission-critical production data, never use single-zone storage (like AWS S3 One Zone-IA or Azure LRS) unless the data is easily reproducible (such as thumbnail caches or transcoded video copies).",
        interviewQuestions: [
          {
            q: "Can a cloud storage system have 99.999999999% durability while simultaneously suffering from downtime?",
            a: "Yes. Durability measures whether data bytes remain intact without being lost or corrupted on disk. If a major fiber optic cut or API gateway outage occurs, the storage service might return HTTP 503 errors (0% availability for 30 minutes), yet not a single byte of stored data has been lost (11 nines durability maintained).",
          },
        ],
      },
      {
        id: "replication-vs-backup",
        title: "Replication ≠ Backup: RPO, RTO, Immutability & Ransomware Defense",
        shortTitle: "7. Replication ≠ Backup",
        category: "Disaster Recovery",
        icon: ShieldAlert,
        summary:
          "Why cross-region replication will NOT save you from an accidental DROP TABLE or ransomware. Master RPO, RTO, Versioning, Soft Delete, and WORM Object Lock.",
        theory: [
          "The most dangerous misconception in cloud engineering is: 'My storage is replicated across two regions, so I do not need backups.'",
          "Why Replication ≠ Backup:",
          "• Replication synchronizes state. If a developer accidentally runs `DELETE FROM users;` or an attacker deploys ransomware that encrypts your S3 bucket, that destructive write is faithfully replicated to the secondary region in milliseconds!",
          "• Replication protects against physical infrastructure failure (hardware death, datacenter floods).",
          "• Backups protect against logical errors, software bugs, accidental deletion, and malicious human activity.",
          "The Core Disaster Recovery Metrics:",
          "• RPO (Recovery Point Objective): The maximum acceptable amount of data loss measured in time (e.g. 'We can lose at most 15 minutes of transactions').",
          "• RTO (Recovery Time Objective): The maximum acceptable duration of downtime to restore the system (e.g. 'The system must be back online within 2 hours').",
          "Cloud Storage Immutability Safeguards:",
          "1. Object Versioning: Keeps past revisions of every overwritten or deleted object. Deleting an object only inserts a 'Delete Marker'; past versions remain fully restorable.",
          "2. Soft Delete: Retains deleted blobs/disks in a recycle bin for 1-365 days before permanent purge.",
          "3. Object Lock / WORM (Write Once, Read Many):",
          "   - Governance Mode: Specific privileged IAM users with special permissions can alter retention periods or delete objects.",
          "   - Compliance Mode: Mathematical immutability. NO ONE—not even the AWS Root Account owner or cloud provider engineers—can delete the object until the retention timer expires!",
        ],
        keyPoints: [
          "Replication copies corruptions and malicious deletions instantly to all replicas.",
          "Backups provide point-in-time recovery to a known good state prior to an incident.",
          "Object Lock (WORM in Compliance Mode) is the ultimate defense against ransomware and rogue administrators.",
          "MFA Delete requires a physical hardware multi-factor authentication code to permanently purge object versions.",
        ],
        diagramType: "replication-vs-backup",
        architectDecision:
          "Enforce S3 Object Lock in Compliance Mode for financial transactions, audit logs, and compliance records required by regulatory bodies (SEC Rule 17a-4, FINRA, HIPAA).",
        interviewQuestions: [
          {
            q: "A rogue engineer with full administrative IAM privileges executes a script to wipe all S3 buckets. How does Compliance-mode Object Lock prevent this catastrophe?",
            a: "In S3 Object Lock Compliance Mode, retention dates are mathematically enforced by the storage system. AWS explicitly prohibits the deletion of locked objects or shortening of the retention period by ANY identity, including the root account. Even if administrative IAM credentials are fully compromised, the API call to delete the locked object is rejected with HTTP 403 Access Denied.",
          },
        ],
      },
      {
        id: "storage-classes-lifecycle",
        title: "Storage Classes & Automated Lifecycle Management",
        shortTitle: "8. Storage Classes & Aging",
        category: "Storage Economics",
        icon: Archive,
        summary:
          "Journey through data aging: Hot, Cool, Cold, Deep Archive, and Intelligent-Tiering. How automated lifecycle policies save 70% to 95% on storage bills.",
        theory: [
          "Data follows a predictable access curve: 90% of all reads occur within the first 30 days of creation. After 90 days, data is rarely touched. After 1 year, data is kept purely for compliance, audit, or historical records.",
          "Leaving all historical data in Standard/Hot storage wastes massive amounts of capital. Cloud providers offer tiered storage classes optimized for different temperature profiles:",
          "1. HOT / STANDARD (AWS S3 Standard, Azure Blob Hot, GCS Standard):",
          "   - High storage cost (~$0.023/GB/mo), zero retrieval fees, millisecond latency. Ideal for active web traffic.",
          "2. COOL / INFREQUENT ACCESS (S3 Standard-IA, Azure Blob Cool, GCS Nearline):",
          "   - ~50% lower storage cost (~$0.0125/GB/mo), millisecond latency, but charges a retrieval fee (~$0.01/GB) when accessed.",
          "3. COLD / ARCHIVE (S3 Glacier Flexible, Azure Blob Cold, GCS Coldline):",
          "   - ~80% lower storage cost (~$0.0036/GB/mo). Retrieval requires minutes to hours (expedited/standard/bulk).",
          "4. DEEP ARCHIVE (S3 Glacier Deep Archive, Azure Blob Archive, GCS Archive):",
          "   - Lowest cost in the cloud (~$0.00099/GB/mo = ~$1 per Terabyte/month!). Retrieval takes 12 to 48 hours.",
          "5. INTELLIGENT-TIERING:",
          "   - Uses machine learning to automatically monitor access patterns and move objects between Frequent, Infrequent, Archive Instant, and Deep Archive tiers with ZERO operational overhead and NO retrieval fees.",
        ],
        keyPoints: [
          "Hot $\\rightarrow$ Cool $\\rightarrow$ Cold $\\rightarrow$ Archive $\\rightarrow$ Permanent Delete lifecycle progression.",
          "Glacier Deep Archive stores 1 Terabyte for approximately $1.00 per month.",
          "Intelligent-Tiering eliminates manual lifecycle rule guesswork for unpredictable access patterns.",
          "Transition rules run asynchronously once per day based on object creation dates.",
        ],
        diagramType: "lifecycle-tiering-funnel",
        architectDecision:
          "Default to S3 Intelligent-Tiering for user-generated content and data lakes with unpredictable access patterns. The small per-object monitoring fee ($0.0025 per 1,000 objects) is vastly outweighed by the 40-70% automated storage savings.",
        interviewQuestions: [
          {
            q: "What is the primary difference between S3 Glacier Instant Retrieval and S3 Glacier Flexible Retrieval?",
            a: "S3 Glacier Instant Retrieval provides millisecond access latency for archive data accessed once a quarter (like medical images or news archives), allowing direct real-time user serving. S3 Glacier Flexible Retrieval takes 1 to 5 hours (standard) or 3 to 5 minutes (expedited) to stage data into a temporary retrieval bucket before it can be read.",
          },
        ],
      },
      {
        id: "storage-economics-traps",
        title: "Storage Economics: Minimum Durations, 128KB Trap & API Fees",
        shortTitle: "9. Economic Traps & Gotchas",
        category: "FinOps & Billing",
        icon: DollarSign,
        summary:
          "Avoid multi-thousand-dollar cloud billing traps: minimum storage durations, minimum billable object sizes (the 128KB penalty), retrieval fees, and transition API costs.",
        theory: [
          "Moving data to colder tiers sounds like free money, but cloud pricing contains subtle economic traps that can double or triple your storage bill if misunderstood.",
          "TRAP 1: Minimum Storage Duration Fees",
          "• S3 Standard-IA requires 30 days minimum retention.",
          "• S3 Glacier Flexible requires 90 days minimum retention.",
          "• S3 Glacier Deep Archive requires 180 days minimum retention.",
          "If you upload a 10 TB dataset to Glacier Deep Archive and delete it after 3 days, AWS still bills you for the full 180 days of storage!",
          "TRAP 2: Minimum Billable Object Size (The 128 KB Trap)",
          "• S3 Standard-IA and Intelligent-Tiering enforce a minimum billable size of 128 KB per object.",
          "• If you store 10,000,000 log files that are each 2 KB in size:",
          "  Physical data: 10M × 2 KB = 20 GB.",
          "  Billable data in IA: 10M × 128 KB = 1,280 GB (64× inflation!).",
          "  Moving small files to IA actually multiplies your bill by 30x!",
          "TRAP 3: Transition API Request Costs",
          "• Moving 50 million small objects to Glacier costs $0.05 per 1,000 `PUT/COPY` requests = $2,500 in upfront API fees just to execute the lifecycle transition!",
          "• Always aggregate small objects into `.tar` or `.parquet` bundles before archiving.",
          "TRAP 4: Retrieval & Egress Bandwidth Charges",
          "• Accessing 50 TB from Glacier Deep Archive can incur high retrieval charges plus internet egress fees ($0.09/GB).",
        ],
        keyPoints: [
          "Never move files smaller than 128 KB into S3 Standard-IA or Glacier.",
          "Lifecycle transitions incur per-object API request charges ($0.05 per 1,000 S3 Glacier transition requests).",
          "Bundle small telemetry logs or sensor events into larger 64MB-512MB Parquet/Tar archives before cold storage.",
          "Early deletion of archived objects triggers pro-rated early deletion charges.",
        ],
        diagramType: "storage-cost-traps",
        architectDecision:
          "Before configuring lifecycle rules for cold tiers, audit your average object size. If average size is under 128 KB, introduce a compaction job (using AWS Glue or Lambda) to merge small records into combined Parquet blocks first.",
        interviewQuestions: [
          {
            q: "A company moved 100 million IoT sensor telemetry files (averaging 5 KB each) to S3 Standard-IA to cut costs. Why did their monthly bill increase substantially?",
            a: "Two major economic penalties occurred: (1) Minimum Billable Object Size: S3-IA bills every object as at least 128 KB. 100M × 5 KB is 500 GB of real data, but S3-IA billed it as 12.8 TB (a 25x billing increase). (2) Transition API fees: 100 million transition requests cost $0.01 per 1,000 requests = $1,000 just to migrate them. Storing small objects in IA is a severe FinOps antipattern.",
          },
        ],
      },
      {
        id: "cross-cloud-storage-matrix",
        title: "Cross-Cloud Storage Matrix: AWS vs Azure vs Google Cloud",
        shortTitle: "10. Cross-Cloud Matrix",
        category: "Cloud Comparison",
        icon: Globe,
        summary:
          "Exhaustive architectural comparison of AWS, Azure, and Google Cloud across Object Storage, Managed Disks, Shared Filesystems, and High-Performance Parallel Filesystems.",
        theory: [
          "Enterprise architects must navigate multi-cloud vernacular. While marketing names differ, the underlying distributed systems paradigms mirror each other across AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
          "1. OBJECT STORAGE:",
          "• AWS: Amazon S3 (Standard, S3 Express One Zone, Intelligent-Tiering, Standard-IA, Glacier Flexible, Glacier Deep Archive).",
          "• Azure: Azure Blob Storage (Hot, Cold, Cool, Archive tiers) + Data Lake Storage Gen2 (hierarchical namespace for Big Data).",
          "• GCP: Google Cloud Storage (Standard, Nearline, Coldline, Archive). GCP unique advantage: single unified API bucket where individual objects have custom storage classes with instant millisecond access even in Coldline.",
          "2. BLOCK STORAGE:",
          "• AWS: EBS (gp3 general purpose, io2 Block Express high-performance, st1 sequential throughput).",
          "• Azure: Azure Managed Disks (Standard HDD, Standard SSD, Premium SSD v2, Ultra Disk up to 400,000 IOPS).",
          "• GCP: Persistent Disk (Standard, Balanced, SSD, Extreme Persistent Disk, and Hyperdisk Extreme up to 500,000 IOPS).",
          "3. MANAGED FILE STORAGE:",
          "• AWS: Amazon EFS (Linux NFSv4), Amazon FSx for Windows File Server (SMB).",
          "• Azure: Azure Files (SMB 3.0 & NFSv4.1), Azure NetApp Files (enterprise sub-millisecond NFS).",
          "• GCP: Cloud Filestore (Basic, Zonal, Regional enterprise NFS).",
          "4. HIGH-PERFORMANCE PARALLEL FILESYSTEMS (AI / HPC):",
          "• AWS: Amazon FSx for Lustre (hundreds of GB/s for GPU training).",
          "• Azure: Azure Managed Lustre.",
          "• GCP: Google Cloud Parallelstore.",
        ],
        keyPoints: [
          "Object: S3 vs Azure Blob vs Google Cloud Storage.",
          "Block: AWS EBS vs Azure Managed Disks vs GCP Persistent Disk / Hyperdisk.",
          "File: AWS EFS vs Azure Files vs GCP Filestore.",
          "AI/HPC Filesystem: AWS FSx for Lustre vs Azure Managed Lustre vs GCP Parallelstore.",
        ],
        diagramType: "cross-cloud-matrix-table",
        architectDecision:
          "When designing multi-cloud architectures, abstract storage through standardized S3-compatible interfaces. Most modern tools (Spark, Snowflake, MinIO, TensorFlow) interface seamlessly with S3 API endpoints.",
        interviewQuestions: [
          {
            q: "How does Google Cloud Storage's archive tier latency compare with AWS S3 Glacier Flexible Retrieval?",
            a: "Google Cloud Storage Coldline and Archive tiers provide instant millisecond time-to-first-byte access to objects via standard HTTP GET calls (though with higher retrieval fees). In contrast, AWS S3 Glacier Flexible Retrieval requires an asynchronous restore job that takes minutes or hours before the object bytes can be downloaded.",
          },
        ],
      },
      {
        id: "interactive-storage-tools",
        title: "Interactive Storage Selection Engine & TCO Calculator",
        shortTitle: "11. Selection Engine & TCO",
        category: "Interactive Lab",
        icon: Sliders,
        summary:
          "Experiment with our interactive Decision Engine: select access patterns, protocols, and latency needs to identify optimal cloud storage. Simulate 50TB lifecycle cost savings.",
        theory: [
          "Choosing the wrong storage service introduces crippling latency or catastrophic cloud bills. Use this interactive decision engine to evaluate your workload parameters against the cloud storage matrix.",
          "Key Decision Axes:",
          "1. Concurrency: Does a single VM need raw disk sectors (Block), do multiple VMs need concurrent read-write access to a shared folder (File), or do millions of web clients fetch media over HTTP (Object)?",
          "2. Latency: Does your transactional database require sub-millisecond write latency, or can your data analytics pipeline tolerate 50ms HTTP retrieval?",
          "3. Cost Structure: Are you willing to pay upfront for provisioned capacity (EBS), or do you only want to pay for exact bytes stored (S3)?",
          "Try adjusting the sliders in the TCO Calculator below to see how a typical 50 TB production dataset saves thousands of dollars annually by shifting dormant data into Infrequent Access and Glacier Archive tiers.",
        ],
        keyPoints: [
          "Interactive Decision Engine: Real-time service mapping based on application characteristics.",
          "TCO Cost Simulator: Compare 100% Hot Standard storage against automated multi-tier lifecycle aging.",
          "Visualize the trade-off between monthly storage savings and data retrieval fees.",
        ],
        diagramType: "interactive-storage-calculator",
        architectDecision:
          "Never manually calculate storage costs using only the raw GB/month sticker price. Always factor in data retrieval fees, cross-AZ traffic, and API request costs in your total cost of ownership (TCO) model.",
        interviewQuestions: [
          {
            q: "What variables must be included in a realistic Total Cost of Ownership (TCO) calculation for cloud storage?",
            a: "A realistic storage TCO includes: (1) At-rest storage capacity ($/GB/month), (2) API request volume (PUT, GET, LIST calls), (3) Data retrieval fees for cooler tiers ($/GB), (4) Network egress charges (data transferred to the internet or across cloud regions), and (5) Management overhead (snapshots, replication traffic, and monitoring fees).",
          },
        ],
      },
      {
        id: "storage-crisis-game",
        title: "Storage Incident Crisis Game & Senior Architect Q&A",
        shortTitle: "12. Incident Crisis Game",
        category: "Simulation & Prep",
        icon: Award,
        summary:
          "Put your skills to the test in 7 real-world storage incident simulations: accidental 5TB deletion, ransomware lockouts, IOPS exhaustion, and multi-datacenter disasters.",
        theory: [
          "In real production environments, storage failures are high-stakes emergencies. Data loss can destroy companies, trigger regulatory fines, or wipe out months of business operations.",
          "In this simulation lab, you will act as the Lead Cloud Infrastructure Architect during 7 critical storage incidents:",
          "• Incident 1: Accidental deletion of a 5 TB production customer folder.",
          "• Incident 2: Ransomware encrypts shared corporate file storage.",
          "• Incident 3: Core transactional database stalls due to EBS IOPS depletion.",
          "• Incident 4: Catastrophic datacenter flood destroys entire Availability Zone.",
          "• Incident 5: Regulatory mandate requires 7-year tamper-proof compliance archiving.",
          "• Incident 6: 500-node machine learning cluster starved of shared training data.",
          "• Incident 7: Surprise $15,000 cloud bill caused by millions of 1 KB telemetry logs in cold storage.",
          "Analyze the root cause and select the correct architectural remediation for each scenario.",
        ],
        keyPoints: [
          "Hands-on incident triage with immediate architectural feedback and scoring.",
          "Covers ransomware mitigation, IOPS burst recovery, cross-AZ disaster recovery, and FinOps traps.",
          "Comprehensive Senior Cloud Architect interview preparation.",
        ],
        diagramType: "storage-crisis-simulator",
        architectDecision:
          "Every production storage architecture must undergo regular GameDay disaster recovery drills. If you have not tested restoring your backup snapshots or unmarking S3 delete markers under simulated crisis conditions, your backups do not exist.",
        interviewQuestions: [
          {
            q: "What is the difference between RPO and RTO in a disaster recovery architecture?",
            a: "RPO (Recovery Point Objective) measures data loss: the maximum delta between the disaster and the latest recoverable point in time (e.g., 15 minutes of lost data). RTO (Recovery Time Objective) measures downtime: the maximum elapsed time required to restore service and resume normal operations (e.g., system restored within 60 minutes).",
          },
        ],
      },
    ],
    []
  );

  const currentTopic = storageTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < storageTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : storageTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 7 Storage Incident Game Scenarios
  const storageGameScenarios = [
    {
      id: 1,
      title: "Incident 1: Accidental 5 TB Production Folder Deletion",
      context:
        "A junior DevOps engineer runs `aws s3 rm s3://company-prod-assets/media --recursive` by mistake, wiping out 5 Terabytes of active customer uploads.",
      question: "Which pre-configured storage safeguard allows instant recovery without downtime?",
      options: [
        {
          id: "A",
          text: "S3 Object Versioning: The delete operation merely created a 'Delete Marker'; removing the markers restores all original objects immediately.",
          verdict: "Correct! Zero-Data-Loss Instant Restoration",
          explanation:
            "When Object Versioning is active, a simple delete does not erase underlying bytes; it only places a lightweight Delete Marker on top. Deleting the Delete Marker instantly brings back the previous version!",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Submit a high-priority ticket to AWS Support asking them to restore the datacenter tape drive.",
          verdict: "Incorrect & Futile",
          explanation:
            "Cloud providers do not maintain private tape backups of customer object deletions. Without bucket versioning or independent backups, deleted objects are permanently gone.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Incident 2: Ransomware Attack Encrypts Corporate File Storage",
      context:
        "An infected internal laptop compromises an SMB file share on Azure Files and encrypts 200,000 files with an AES-256 ransomware key, demanding $500,000 in Bitcoin.",
      question: "What architectural safeguard best neutralizes this attack without paying the ransom?",
      options: [
        {
          id: "A",
          text: "Pay the ransom immediately because cloud storage cannot be rolled back.",
          verdict: "Incorrect & High Risk",
          explanation: "Never pay ransoms. Proper cloud storage architecture includes immutable snapshots and versioning.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "Restore from Azure Files Share Snapshots (or immutable WORM backups) taken prior to the ransomware execution timestamp.",
          verdict: "Correct! Point-in-Time Snapshot Recovery",
          explanation:
            "Share Snapshots are read-only point-in-time differential copies of file shares. Even if current files are encrypted, snapshots cannot be modified by the infected client and can be restored in minutes.",
          isCorrect: true,
        },
      ],
    },
    {
      id: 3,
      title: "Incident 3: Production Database Stalls During Flash Sale",
      context:
        "During a Black Friday spike, a MySQL database on an AWS EC2 instance with an older 500GB gp2 EBS volume experiences query latency jumping from 2ms to 1,800ms.",
      question: "What is the root cause and immediate online remediation?",
      options: [
        {
          id: "A",
          text: "The gp2 burst balance credit pool was exhausted; immediately modify the EBS volume to gp3 with provisioned 12,000 IOPS and 500 MB/s throughput online without rebooting.",
          verdict: "Correct! Burst Depletion & Elastic Volume Upgrade",
          explanation:
            "Older gp2 volumes rely on burst balances that drop to a baseline 3 IOPS/GB (1,500 IOPS for 500GB) once depleted. Modern EBS Elastic Volumes allow upgrading to gp3 online with dedicated provisioned IOPS without downtime.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Reboot the virtual machine to reset the CPU clock.",
          verdict: "Incorrect",
          explanation:
            "The bottleneck is disk I/O latency due to burst credit starvation, not CPU clock speed. Rebooting causes downtime without solving the underlying disk saturation.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Incident 4: Catastrophic Datacenter Fire Destroys AZ-1",
      context:
        "A major transformer fire destroys a physical datacenter housing Availability Zone us-east-1a. Your application uses AWS S3 Standard and Azure ZRS.",
      question: "What happens to your object storage data stored in that region?",
      options: [
        {
          id: "A",
          text: "All data is permanently lost because one of the physical datacenters burned down.",
          verdict: "Incorrect",
          explanation: "Standard multi-AZ object storage replicates across 3 independent availability zones.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "Zero data is lost and service remains available because S3 Standard and Azure ZRS automatically store redundant fragments across at least 3 distinct Availability Zones.",
          verdict: "Correct! Zone-Redundant Fault Tolerance",
          explanation:
            "S3 Standard and Azure ZRS distribute data across 3 separate AZs separated by meaningful physical distance. The total loss of one full AZ causes zero data loss and no interruption in HTTP availability.",
          isCorrect: true,
        },
      ],
    },
    {
      id: 5,
      title: "Incident 5: Strict Regulatory 7-Year Tamper-Proof Audit Mandate",
      context:
        "The SEC mandates that financial transaction logs must be stored immutably for 7 years: no entity, not even company executives or system administrators, may delete them.",
      question: "Which cloud storage configuration guarantees compliance with federal law?",
      options: [
        {
          id: "A",
          text: "S3 Object Lock in Compliance Mode with a 7-year retention period.",
          verdict: "Correct! WORM Compliance Immutability",
          explanation:
            "In Compliance Mode, AWS enforces Write-Once-Read-Many (WORM) immutability. No IAM user—including the root account owner—can delete locked objects or shorten the retention period until the 7 years elapse.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Ask sysadmins to sign an NDA promising not to delete any files from the bucket.",
          verdict: "Incorrect",
          explanation: "Regulatory bodies require cryptographic and architectural immutability guarantees, not informal policy promises.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      title: "Incident 6: 500-Node GPU Cluster Starved of Shared Training Data",
      context:
        "An AI team launches 500 GPU worker instances to train a large vision model. All workers attempt to read a 100 TB image dataset from a single standard NFS share, causing massive I/O timeouts.",
      question: "What high-performance storage architecture resolves this parallel I/O bottleneck?",
      options: [
        {
          id: "A",
          text: "Switch to a parallel cluster filesystem such as AWS FSx for Lustre or GCP Parallelstore linked directly to S3.",
          verdict: "Correct! Clustered High-Performance File System",
          explanation:
            "Lustre is designed for supercomputing and AI training. It strips data across hundreds of storage targets, providing hundreds of gigabytes per second of concurrent read throughput to thousands of GPU compute nodes.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Instruct all 500 GPU nodes to download the entire 100 TB dataset to their local EBS disks simultaneously.",
          verdict: "Incorrect",
          explanation:
            "Downloading 500 copies of 100 TB would saturate the network (50 Petabytes transferred!), incur huge costs, and exceed local disk capacity.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      title: "Incident 7: Shock $12,000 Bill From Storing 50 Million 1 KB Files in Glacier",
      context:
        "A team moved 50 million small IoT sensor logs (1 KB each) from S3 Standard to S3 Glacier Flexible to save money, but the next month's bill skyrocketed unexpectedly.",
      question: "Why did the bill increase and how should the architecture be corrected?",
      options: [
        {
          id: "A",
          text: "Glacier enforces a 32 KB billable metadata minimum per object, plus transition API fees. Consolidate small records into 64 MB - 256 MB Parquet/Tar archives before archiving.",
          verdict: "Correct! FinOps Compaction Architecture",
          explanation:
            "Glacier adds 32 KB of billable metadata per object (and S3-IA bills at 128 KB minimum). For 1 KB files, the metadata exceeds the data by 32x! Furthermore, 50 million transition API calls cost $2,500. Compacting files into larger archives completely eliminates this penalty.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Glacier is known to have billing bugs; dispute the charges with customer support.",
          verdict: "Incorrect",
          explanation:
            "This is documented hyperscaler pricing behavior, not a billing bug. Architects must design compaction pipelines for small objects.",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleGameAnswer = (scenarioId, optionId) => {
    const scenario = storageGameScenarios.find((s) => s.id === scenarioId);
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
    if (gameScenarioIndex < storageGameScenarios.length - 1) {
      setGameScenarioIndex((prev) => prev + 1);
      setGameSelection(gameHistory[storageGameScenarios[gameScenarioIndex + 1]?.id] || null);
    }
  };

  const prevGameScenario = () => {
    if (gameScenarioIndex > 0) {
      setGameScenarioIndex((prev) => prev - 1);
      setGameSelection(gameHistory[storageGameScenarios[gameScenarioIndex - 1]?.id] || null);
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
          currentModuleId="storage"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Storage AI"
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
                    Nova AI Cloud Storage Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about Block vs File vs Object, Reed-Solomon Erasure Coding, S3 Object Lock, 11 Nines Durability, or Glacier FinOps traps.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`storage-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Database size={13} />
                <span>Cloud Storage Architecture & Distributed Systems</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Block, File, Object & Distributed Storage
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                Compute is temporary; data is what you cannot afford to lose. Master the 4 levels of storage, Block vs File vs Object, Reed-Solomon Erasure Coding, 11 Nines durability, Replication vs Backup, and automated lifecycle cost optimization.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-[#f97316]">99.999999999%</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  11 Nines Durability
                </div>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-amber-400">12 Modules</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Complete Syllabus
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOPIC SELECTION PILLS */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {storageTopics.map((topic, index) => {
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
                    {selectedTopic + 1} / {storageTopics.length}
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
                      Architectural Blueprint: {currentTopic.shortTitle}
                    </span>
                  </div>
                  <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 font-mono text-[10px] text-orange-300">
                    Live System Visual
                  </span>
                </div>

                {/* DIAGRAM RENDERER BASED ON TOPIC */}
                {currentTopic.diagramType === "storage-four-levels" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl border border-stone-700 bg-stone-800/90 p-3 text-stone-200">
                      <div className="text-orange-400 font-bold mb-1">LEVEL 1: Application View</div>
                      <div className="text-stone-300 text-[11px]">
                        "I need a database disk" ↔ "I need a shared media volume" ↔ "I need a petabyte object repository"
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓ mapped to storage interfaces ↓</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="rounded-xl border border-amber-500/30 bg-amber-950/30 p-2.5 text-center">
                        <div className="font-bold text-amber-300 text-xs">BLOCK STORAGE</div>
                        <div className="text-[10px] text-stone-400 mt-1">Raw 4KB sectors • Sub-ms • Single VM</div>
                        <div className="text-[9px] text-orange-400 font-mono mt-1">AWS EBS • Azure Disk • GCE PD</div>
                      </div>
                      <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-2.5 text-center">
                        <div className="font-bold text-blue-300 text-xs">FILE STORAGE</div>
                        <div className="text-[10px] text-stone-400 mt-1">POSIX tree • 3-10ms • Multi-VM mount</div>
                        <div className="text-[9px] text-blue-400 font-mono mt-1">AWS EFS • Azure Files • Filestore</div>
                      </div>
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-2.5 text-center">
                        <div className="font-bold text-emerald-300 text-xs">OBJECT STORAGE</div>
                        <div className="text-[10px] text-stone-400 mt-1">Flat Key-Value • REST API • Global</div>
                        <div className="text-[9px] text-emerald-400 font-mono mt-1">AWS S3 • Azure Blob • GCS</div>
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓ powered by distributed storage engines ↓</div>
                    <div className="rounded-xl border border-stone-700 bg-stone-800/90 p-3 text-stone-200">
                      <div className="text-orange-400 font-bold mb-1">LEVEL 3: Distributed Storage Internals</div>
                      <div className="text-stone-300 text-[11px]">
                        Reed-Solomon Erasure Coding (RS 8+4) • 3-Way Synchronous Replication • SHA-256 Checksums • Bit-Rot Scrubbing
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓ deployed across physical infrastructure ↓</div>
                    <div className="rounded-xl border border-stone-700 bg-stone-800/90 p-3 text-stone-200">
                      <div className="text-orange-400 font-bold mb-1">LEVEL 4: Physical Hardware & Geography</div>
                      <div className="text-stone-300 text-[11px]">
                        NVMe SSDs • High-density HDDs • Terabit Leaf-Spine Fabric • 3 Availability Zones • Cross-Region Backbone
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "block-iops-throughput" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-4 border border-stone-800">
                      <div className="text-orange-400 font-bold mb-2">Throughput vs IOPS Invariant Formula:</div>
                      <div className="text-stone-200 text-sm">
                        Throughput (MB/s) = (IOPS × I/O Block Size in KB) / 1024
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="font-bold text-amber-300 mb-1">Scenario A: Transactional OLTP Database</div>
                        <div className="text-stone-400">Random 8 KB reads/writes</div>
                        <div className="text-stone-300 mt-1">10,000 IOPS × 8 KB = <span className="text-orange-400 font-bold">78.1 MB/s</span></div>
                        <div className="text-[10px] text-stone-400 mt-1">Bottleneck is IOPS limits, not throughput.</div>
                      </div>
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="font-bold text-blue-300 mb-1">Scenario B: Large Sequential Analytics/Backup</div>
                        <div className="text-stone-400">Sequential 256 KB block streams</div>
                        <div className="text-stone-300 mt-1">1,000 IOPS × 256 KB = <span className="text-blue-400 font-bold">250 MB/s</span></div>
                        <div className="text-[10px] text-stone-400 mt-1">Bottleneck is Throughput bandwidth, not IOPS.</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "file-storage-nfs" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-stone-300 text-center text-[11px] mb-2">
                      Multi-AZ Shared Network Filesystem (ReadWriteMany)
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 text-stone-300">
                        VM 1 (AZ-A)<br/><span className="text-orange-400">/mnt/data</span>
                      </div>
                      <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 text-stone-300">
                        VM 2 (AZ-B)<br/><span className="text-orange-400">/mnt/data</span>
                      </div>
                      <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 text-stone-300">
                        VM 3 (AZ-C)<br/><span className="text-orange-400">/mnt/data</span>
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓↓ NFSv4.1 / SMB 3.0 RPCs with distributed byte-range locks ↓↓</div>
                    <div className="rounded-xl border border-blue-500/40 bg-blue-950/40 p-3 text-center text-blue-200">
                      <div className="font-bold text-xs">AWS EFS / Azure Files / GCP Filestore</div>
                      <div className="text-[10px] text-stone-300 mt-1">
                        POSIX Hierarchical Tree: Atomic rename(), flock(), chmod, hard links
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "object-rest-api" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-[11px]">
                      <div className="text-emerald-400 font-bold mb-1">REST API Operations (No Mount Points!):</div>
                      <div className="text-stone-300">GET /bucket/key (Fetch payload + byte-ranges)</div>
                      <div className="text-stone-300">PUT /bucket/key (Upload entire object; immutable replace)</div>
                      <div className="text-stone-300">DELETE /bucket/key (Create Delete Marker or erase)</div>
                      <div className="text-stone-300">HEAD /bucket/key (Fetch metadata headers only without body)</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">Multipart Upload:</span> Parallel 5MB-5GB chunk uploads with independent retries.
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">Byte-Range Stream:</span> Fetch specific byte offsets (ideal for streaming video & Parquet).
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "erasure-coding-math" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-3">
                        <div className="font-bold text-red-300 mb-1">3-Way Replication</div>
                        <div className="text-stone-300">Original Object: 1 TB</div>
                        <div className="text-stone-300">Stored on Disk: 3 TB (200% overhead)</div>
                        <div className="text-stone-400 mt-1">Survives: Max 2 drive failures</div>
                      </div>
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3">
                        <div className="font-bold text-emerald-300 mb-1">Reed-Solomon Erasure Coding (RS 8+4)</div>
                        <div className="text-stone-300">Original: 8 Data Chunks</div>
                        <div className="text-stone-300">Parity: 4 Parity Chunks (50% overhead)</div>
                        <div className="text-emerald-400 font-bold mt-1">Survives: Up to 4 simultaneous drive failures!</div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 text-stone-300 text-[10px]">
                      Continuous Background Scrubbing: Recalculates CRC32C/SHA-256 hashes against catalog and self-heals corrupted sectors from surviving parity.
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "redundancy-tiers" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-stone-700 flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">LRS (Locally Redundant)</span>
                        <div className="text-stone-400 text-[10px]">3 copies inside a single datacenter</div>
                      </div>
                      <span className="text-xs text-stone-300">Survives disk failure; dies in DC flood</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-orange-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-orange-400 font-bold">ZRS / S3 Standard (Zone Redundant)</span>
                        <div className="text-stone-400 text-[10px]">Synchronous replication across 3 separate AZs</div>
                      </div>
                      <span className="text-xs text-emerald-300 font-bold">Survives entire datacenter destruction</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-blue-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-blue-400 font-bold">GRS (Geo-Redundant)</span>
                        <div className="text-stone-400 text-[10px]">Primary region + async replication to secondary region (500+ miles)</div>
                      </div>
                      <span className="text-xs text-stone-300">Survives continental catastrophe</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "replication-vs-backup" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-red-950/40 border border-red-500/40 p-3 text-red-200 text-[11px]">
                      <div className="font-bold text-red-300">Why Replication ≠ Backup:</div>
                      Accidental `DROP TABLE users;` or Ransomware write → immediately replicated to secondary region in 5 milliseconds! Both regions now destroyed.
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">RPO (Data Loss Window):</span> Maximum allowable lost transactions measured in time (e.g., 15 mins).
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">RTO (Restore Downtime):</span> Maximum allowable clock time to bring service back online (e.g., 60 mins).
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "lifecycle-tiering-funnel" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-orange-950/40 border border-orange-500/40 p-2 text-orange-200 flex justify-between">
                      <span>Day 0-30: S3 Standard / Blob Hot</span>
                      <span className="font-bold">~$23.00 / TB / mo</span>
                    </div>
                    <div className="text-center text-stone-500 text-[10px]">↓ 30 days of inactivity ↓</div>
                    <div className="rounded-lg bg-amber-950/40 border border-amber-500/40 p-2 text-amber-200 flex justify-between">
                      <span>Day 31-90: Standard-IA / Blob Cool</span>
                      <span className="font-bold">~$12.50 / TB / mo (50% saved)</span>
                    </div>
                    <div className="text-center text-stone-500 text-[10px]">↓ 90 days of inactivity ↓</div>
                    <div className="rounded-lg bg-blue-950/40 border border-blue-500/40 p-2 text-blue-200 flex justify-between">
                      <span>Day 91-365: S3 Glacier Flexible</span>
                      <span className="font-bold">~$3.60 / TB / mo (84% saved)</span>
                    </div>
                    <div className="text-center text-stone-500 text-[10px]">↓ 365+ days compliance archival ↓</div>
                    <div className="rounded-lg bg-purple-950/40 border border-purple-500/40 p-2 text-purple-200 flex justify-between">
                      <span>Year 1-7: S3 Glacier Deep Archive</span>
                      <span className="font-bold text-emerald-400">~$0.99 / TB / mo (95% saved!)</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "storage-cost-traps" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-red-500/40">
                      <div className="text-red-300 font-bold">128 KB Minimum Billable Size Trap:</div>
                      <div className="text-stone-400 text-[10px]">
                        A 2 KB file moved to S3-IA is billed as 128 KB (64x inflation!). Never move small files to IA.
                      </div>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-amber-500/40">
                      <div className="text-amber-300 font-bold">Minimum Retention Penalty:</div>
                      <div className="text-stone-400 text-[10px]">
                        Glacier requires 90 days, Deep Archive requires 180 days. Deleting early still charges the full period.
                      </div>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-blue-500/40">
                      <div className="text-blue-300 font-bold">Transition API Costs:</div>
                      <div className="text-stone-400 text-[10px]">
                        $0.05 per 1,000 PUT/COPY calls. 100M files = $5,000 upfront API fee. Always bundle into Tar/Parquet!
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "cross-cloud-matrix-table" && (
                  <div className="overflow-x-auto text-[10px] font-mono">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-700 text-stone-400">
                          <th className="py-2">Category</th>
                          <th className="py-2 text-orange-400">AWS</th>
                          <th className="py-2 text-blue-400">Azure</th>
                          <th className="py-2 text-emerald-400">Google Cloud</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800 text-stone-300">
                        <tr>
                          <td className="py-2 font-bold text-white">Object Storage</td>
                          <td>Amazon S3</td>
                          <td>Azure Blob Storage</td>
                          <td>Cloud Storage</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">Block Storage</td>
                          <td>EBS (gp3 / io2)</td>
                          <td>Managed Disks (Premium v2 / Ultra)</td>
                          <td>Persistent Disk / Hyperdisk</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">Managed File</td>
                          <td>Amazon EFS / FSx</td>
                          <td>Azure Files / NetApp Files</td>
                          <td>Cloud Filestore</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">Deep Archive</td>
                          <td>Glacier Deep Archive</td>
                          <td>Archive Tier</td>
                          <td>Archive Storage</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">AI/HPC Parallel</td>
                          <td>FSx for Lustre</td>
                          <td>Azure Managed Lustre</td>
                          <td>Cloud Parallelstore</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {currentTopic.diagramType === "interactive-storage-calculator" && (
                  <div className="space-y-4">
                    <div className="rounded-xl bg-stone-800 p-4 border border-stone-700">
                      <div className="text-orange-400 font-mono text-xs font-bold mb-2">
                        Simulated Storage Workload: {storageDataTb} TB Total
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div>
                          <div className="text-stone-400">100% Hot Baseline:</div>
                          <div className="text-white font-bold">${costBreakdown.allHotBaselineCost.toFixed(2)}/mo</div>
                        </div>
                        <div>
                          <div className="text-stone-400">Tiered Lifecycle Cost:</div>
                          <div className="text-emerald-400 font-bold">${costBreakdown.totalTieredMonthly.toFixed(2)}/mo</div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-mono text-stone-300">
                        Estimated Savings: <span className="text-[#f97316] font-bold">${costBreakdown.monthlySavings.toFixed(2)}/mo ({costBreakdown.savingsPercent}%)</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "storage-crisis-simulator" && (
                  <div className="rounded-xl bg-stone-800 p-4 border border-orange-500/40 text-center">
                    <div className="text-orange-400 font-mono text-xs font-bold mb-1">
                      Production Incident Simulator Active
                    </div>
                    <div className="text-stone-300 text-xs font-mono">
                      Scroll to the Interactive Incident Game section below to resolve all 7 scenarios!
                    </div>
                  </div>
                )}
              </div>

              {/* ARCHITECTURAL DECISION CALLOUT */}
              <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                    Lead Architect Invariant:
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
                  <span>Senior Cloud Systems Interview Challenge:</span>
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

            {/* INTERACTIVE STORAGE SELECTOR ENGINE LAB */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sliders size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Cloud Storage Decision Engine
                  </h3>
                  <p className="text-xs text-stone-500">
                    Input your workload characteristics to determine the mathematically optimal storage model.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-6">
                {/* Selector 1: Access Pattern */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    1. Workload Access Pattern:
                  </label>
                  <select
                    value={selectorAccessPattern}
                    onChange={(e) => setSelectorAccessPattern(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="database">Single VM Transactional Database (OLTP)</option>
                    <option value="single-vm">Single VM OS Boot / Dedicated Volume</option>
                    <option value="multi-vm">Multiple Concurrent VMs / Container Pods</option>
                    <option value="web-clients">Massive Web Clients / Data Lake / Assets</option>
                  </select>
                </div>

                {/* Selector 2: Protocol */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    2. Required Interface Protocol:
                  </label>
                  <select
                    value={selectorProtocol}
                    onChange={(e) => setSelectorProtocol(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="block">Raw Block Device (NVMe / iSCSI)</option>
                    <option value="nfs-posix">POSIX Hierarchical File Share (NFS / SMB)</option>
                    <option value="rest-http">REST API over HTTPS (GET / PUT / DELETE)</option>
                  </select>
                </div>

                {/* Selector 3: Latency */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    3. Latency Tolerance:
                  </label>
                  <select
                    value={selectorLatency}
                    onChange={(e) => setSelectorLatency(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="sub-millisecond">Sub-millisecond to ~2ms (Ultra Low)</option>
                    <option value="low-millisecond">3ms - 10ms (Low Network Latency)</option>
                    <option value="minutes-hours">20ms - 100ms+ (Batch / Streaming)</option>
                  </select>
                </div>
              </div>

              {/* RECOMMENDED OUTCOME CARD */}
              <div className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/80 p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-orange-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-800">
                      Architect Recommendation:
                    </span>
                    <span className="rounded-full bg-orange-600 px-3 py-0.5 text-xs font-bold text-white">
                      {storageRecommendation.type}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-500">
                    {storageRecommendation.badge}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-3 mb-3 text-xs font-mono">
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">LATENCY:</span>
                    <span className="font-bold text-stone-800">{storageRecommendation.latency}</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">CONCURRENCY:</span>
                    <span className="font-bold text-stone-800">{storageRecommendation.concurrency}</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">PROTOCOL:</span>
                    <span className="font-bold text-stone-800">{storageRecommendation.protocol}</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {storageRecommendation.reason}
                </p>

                <div className="mt-3 text-[11px] font-mono text-stone-500 border-t border-orange-200/60 pt-2">
                  <span className="font-bold text-orange-900">Cost Profile:</span> {storageRecommendation.pricing}
                </div>
              </div>
            </div>

            {/* INTERACTIVE STORAGE LIFECYCLE & TCO CALCULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Lifecycle TCO & Savings Simulator
                  </h3>
                  <p className="text-xs text-stone-500">
                    Model a real enterprise dataset aging across Hot, Cool, and Glacier tiers. Calculate net monthly savings.
                  </p>
                </div>
              </div>

              {/* SLIDERS */}
              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Total Stored Data:</span>
                    <span className="font-bold text-orange-600">{storageDataTb} Terabytes</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={storageDataTb}
                    onChange={(e) => setStorageDataTb(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Monthly Retrieval Volume:</span>
                    <span className="font-bold text-blue-600">{monthlyRetrievalTb} TB / month</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={storageDataTb}
                    step="1"
                    value={monthlyRetrievalTb}
                    onChange={(e) => setMonthlyRetrievalTb(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">% in Hot Standard Tier:</span>
                    <span className="font-bold text-orange-600">{hotPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={hotPct}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setHotPct(val);
                      if (val + coolPct > 100) setCoolPct(100 - val);
                      setArchivePct(Math.max(0, 100 - val - coolPct));
                    }}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">% in Glacier Archive:</span>
                    <span className="font-bold text-purple-600">{archivePct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={archivePct}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setArchivePct(val);
                      if (val + hotPct > 100) setHotPct(100 - val);
                      setCoolPct(Math.max(0, 100 - val - hotPct));
                    }}
                    className="w-full accent-purple-600"
                  />
                </div>
              </div>

              {/* TCO COMPARISON RESULTS */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    All-Hot Baseline Cost:
                  </span>
                  <div className="text-2xl font-black text-stone-800 font-mono">
                    ${costBreakdown.allHotBaselineCost.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">If 100% kept in S3 Standard</span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Lifecycle Tiered Cost:
                  </span>
                  <div className="text-2xl font-black text-emerald-700 font-mono">
                    ${costBreakdown.totalTieredMonthly.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">Storage + Retrieval fees</span>
                </div>

                <div className="rounded-2xl border border-orange-300 bg-orange-500 text-white p-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 text-orange-100">
                    Net Monthly Savings:
                  </span>
                  <div className="text-2xl font-black font-mono">
                    ${costBreakdown.monthlySavings.toFixed(2)}
                  </div>
                  <span className="text-[10px] font-mono text-orange-200">
                    {costBreakdown.savingsPercent}% reduction on storage bill!
                  </span>
                </div>
              </div>
            </div>

            {/* STORAGE INCIDENT CRISIS SIMULATOR GAME */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Storage Crisis Simulator: GameDay Triage
                    </h3>
                    <p className="text-xs text-stone-500">
                      Triage 7 production storage incidents. Test your real-world disaster recovery reflexes.
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
                      {gameScenarioIndex + 1} / {storageGameScenarios.length}
                    </span>
                    <button
                      onClick={nextGameScenario}
                      disabled={gameScenarioIndex === storageGameScenarios.length - 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* CURRENT SCENARIO CARD */}
              {(() => {
                const scenario = storageGameScenarios[gameScenarioIndex];
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
                  Module 4 Topic Index
                </h3>
              </div>

              <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {storageTopics.map((topic, index) => {
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
                  Core Storage Invariants
                </h3>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-stone-300">
                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Replication ≠ Backup</span>
                  Replication duplicates corruption, rogue drops, and ransomware instantly. Use Versioning + Object Lock.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Durability ≠ Availability</span>
                  11 Nines durability means data will never be destroyed; availability means you can reach the API right now.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">128 KB FinOps Rule</span>
                  Never archive objects smaller than 128 KB to IA or Glacier without bundling them into Parquet/Tar archives first.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Compliance Lock is Forever</span>
                  S3 Object Lock in Compliance Mode cannot be bypassed by ANY user, including the AWS root account!
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
                Module 5: Cloud Databases & Distributed Consensus (CAP Theorem, DynamoDB, Aurora & Spanner).
              </p>
              <button
                disabled
                className="w-full rounded-xl bg-stone-100 py-2.5 text-xs font-bold text-stone-400 cursor-not-allowed"
              >
                Module 5 Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
