import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Binary,
  ExternalLink,
  FileText,
  BarChart2,
  Clock,
  Timer,
  GitBranch,
  Split,
  Eye,
  Key,
  Grid,
  Database,
  Search,
  Maximize2,
  TrendingDown,
  TrendingUp,
  AlertOctagon,
  Gauge,
  Radio,
  ZapOff,
  Share2,
  Bell,
  MessageSquare,
  Repeat,
  Power,
  Pause,
  HardDrive,
  Save,
  CheckSquare,
  Archive,
  History,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 16                                 */
/* Crash Consistency, Durability and Recovery                                 */
/* Page Cache · fsync() · Journaling · Copy-on-Write · Atomic Rename · WAL    */
/* -------------------------------------------------------------------------- */

export default function OSCrashConsistency() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeLesson, setActiveLesson] = useState("volatile");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(39);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: Staged Atomic File Replacement & Durability Timeline         */
  /* -------------------------------------------------------------------------- */
  const [durabilityStep, setDurabilityStep] = useState(0);

  const durabilityTimelineSteps = [
    {
      time: "T0",
      title: "Application Memory Buffer",
      call: 'buffer = b\'{"mode":"production"}\'',
      location: "Process User Space RAM",
      durable: false,
      state: "Data exists solely in private heap memory. Process crash or sudden power loss destroys data instantly with zero trace.",
      targetVisible: "Old File v1.0",
      tempVisible: "None",
      diskBlocks: "Block #100: [Old Data v1.0]",
    },
    {
      time: "T1",
      title: "Kernel Page Cache Write",
      call: "write(fd_temp, buffer, len)",
      location: "Kernel Dirty Page Cache",
      durable: false,
      state: "write() returned success! Kernel marked pages as 'dirty'. NOT yet durable. Power failure before flush loses newly written bytes.",
      targetVisible: "Old File v1.0",
      tempVisible: "Temp File .update-9842 (Dirty RAM)",
      diskBlocks: "Block #100: [Old Data v1.0]",
    },
    {
      time: "T2",
      title: "File Data Synchronization",
      call: "fsync(fd_temp)",
      location: "Non-Volatile Storage (Flash/Disk)",
      durable: true,
      state: "fsync() forced kernel dirty pages and inode extent metadata to non-volatile medium. Payload safely persisted on disk, but target pathname still points to old file.",
      targetVisible: "Old File v1.0",
      tempVisible: "Temp File .update-9842 (Durable Flash)",
      diskBlocks: "Block #100: [Old Data v1.0] | Block #108: [New Data v2.0]",
    },
    {
      time: "T3",
      title: "Atomic Namespace Replacement",
      call: "rename(temp_path, target_path)",
      location: "Filesystem Inode & Directory Index",
      durable: false,
      state: "Target directory entry atomically swapped from old inode to new inode. Any new open('config.json') immediately reads v2.0! BUT directory block in RAM may still be dirty.",
      targetVisible: "New File v2.0 (RAM Dentry)",
      tempVisible: "Unlinked / Deleted",
      diskBlocks: "Block #108: [New Data v2.0] | Inode swap in RAM",
    },
    {
      time: "T4",
      title: "Directory Entry Synchronization",
      call: "fsync(fd_dir)",
      location: "Non-Volatile Storage Directory Extents",
      durable: true,
      state: "Directory metadata written and flushed to durable media. Update is 100% crash-consistent and guaranteed durable across sudden power loss!",
      targetVisible: "New File v2.0 (Durable Dentry)",
      tempVisible: "None",
      diskBlocks: "Block #108: [New Data v2.0] | Inode #412 committed to Dir Table",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: Crash Window & Failure Injection Simulator                   */
  /* -------------------------------------------------------------------------- */
  const [selectedCrashWindow, setSelectedCrashWindow] = useState("inplace");
  const [crashSimulated, setCrashSimulated] = useState(false);

  const crashScenarios = {
    inplace: {
      name: "Unsafe In-Place Overwrite (open('config.json', 'w'))",
      crashMoment: "Crash occurs mid-write after file truncation",
      survivingState: "CORRUPTED OR 0-BYTE EMPTY FILE",
      severity: "CRITICAL DATA LOSS",
      severityColor: "text-red-700 bg-red-100 border-red-300",
      explanation:
        "Opening with 'w' mode instantly truncated the original file to 0 bytes. Power failed mid-write. Both the original valid config AND the new config are completely destroyed!",
      recoveryAction: "Manual restore from external backup required; local file is unrecoverable garbage.",
    },
    mid_temp: {
      name: "Crash During Temporary File Write (T1)",
      crashMoment: "Power loss while write() is filling .update-temp",
      survivingState: "Old File v1.0 Intact & Valid",
      severity: "CLEAN ISOLATION",
      severityColor: "text-emerald-700 bg-emerald-100 border-emerald-300",
      explanation:
        "Because write() was directed at an isolated temporary file, the destination target file was never touched. Old v1.0 remains fully valid.",
      recoveryAction: "Cleanup daemon deletes orphaned .update-temp file. Application retries write later.",
    },
    after_file_fsync: {
      name: "Crash After fsync(temp), Before rename() (T2)",
      crashMoment: "Power loss after temp is durable on flash, before rename()",
      survivingState: "Old File v1.0 Active; Temp File Fully Durable",
      severity: "SAFE (STAGED CANDIDATE)",
      severityColor: "text-blue-700 bg-blue-100 border-blue-300",
      explanation:
        "Temp file is 100% complete and durable on disk. Target file still points to valid Old v1.0. Zero corruption.",
      recoveryAction: "Application recovery detects staged candidate, validates checksum, and finishes rename() or discards.",
    },
    after_rename_before_dir: {
      name: "Crash After rename(), Before fsync(dir) (T3)",
      crashMoment: "Power loss after atomic dentry swap, before directory fsync()",
      survivingState: "Uncertain Namespace Visibility",
      severity: "AMBIGUOUS COMMIT",
      severityColor: "text-amber-700 bg-amber-100 border-amber-300",
      explanation:
        "The atomic rename happened in RAM. If the directory block was not flushed before power cut, post-reboot state may revert to Old v1.0 or reveal New v2.0.",
      recoveryAction: "Application must inspect file checksum and version headers on startup; must NOT assume failure or success.",
    },
    clean_durable: {
      name: "Clean Durability Sequence Completed (T4)",
      crashMoment: "Power loss occurs after fsync(file) + rename() + fsync(dir)",
      survivingState: "New File v2.0 100% Durable & Active",
      severity: "PERFECT DURABILITY",
      severityColor: "text-emerald-700 bg-emerald-100 border-emerald-300",
      explanation:
        "Every byte of content and all filesystem directory entries were flushed past volatile device caches to persistent storage.",
      recoveryAction: "Normal startup; zero repair needed.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: Journaling vs Copy-on-Write (CoW) Visualizer                 */
  /* -------------------------------------------------------------------------- */
  const [fsType, setFsType] = useState("journaling");
  const [journalStep, setJournalStep] = useState(0);

  const journalingSteps = [
    {
      title: "1. Transaction Open",
      detail: "Application initiates update. File metadata changes (inode, block bitmap) buffered in kernel journal transaction.",
      journalState: "[Tx #401: Inode 412 -> Addr 8092, Size 4096]",
      homeBlocks: "Old Block #500 (Active)",
    },
    {
      title: "2. Journal Commit & Barrier",
      detail: "Transaction flushed to circular on-disk journal with a mandatory I/O barrier. Once commit record is written, transaction is guaranteed durable.",
      journalState: "[Tx #401 Committed on Disk Journal]",
      homeBlocks: "Old Block #500 (Active)",
    },
    {
      title: "3. Checkpointing (Home Write)",
      detail: "Filesystem safely copies metadata and data to final home locations on disk. Journal space can now be reclaimed.",
      journalState: "[Tx #401 Reclaimed / Cleared]",
      homeBlocks: "New Block #8092 (Committed to Home Location)",
    },
  ];

  const cowSteps = [
    {
      title: "1. Write New Data Out-of-Place",
      detail: "Never overwrites existing blocks in place! Allocates new unused physical blocks (Block #700) and writes new data + cryptographic checksum.",
      treeRoot: "Root A -> Inode 412 -> Block #500 (Original)",
      allocatedBlocks: "Block #700 (Unreferenced New Data)",
    },
    {
      title: "2. Clone Parent B-Tree Nodes",
      detail: "Copies and updates parent metadata nodes up the tree to reference Block #700 without breaking existing references.",
      treeRoot: "Root A (Old Snapshot) still valid",
      allocatedBlocks: "New Branch Node -> Block #700",
    },
    {
      title: "3. Atomic Root Pointer Flip",
      detail: "Flushes superblocks and atomically updates filesystem root pointer from Root A to Root B. Instantly publishes new version with zero in-place overwrite risks.",
      treeRoot: "Root B -> Inode 412 -> Block #700 (Current)",
      allocatedBlocks: "Root A freed or preserved as Snapshot",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: RPO / RTO & Disaster Recovery Exposure Calculator             */
  /* -------------------------------------------------------------------------- */
  const [backupIntervalMin, setBackupIntervalMin] = useState(60); // minutes
  const [dataRateMbSec, setDataRateMbSec] = useState(5); // MB/s
  const [dollarPerMb, setDollarPerMb] = useState(50); // $ per MB
  const [restoreTimeMin, setRestoreTimeMin] = useState(45); // minutes
  const [hasTestedDrill, setHasTestedDrill] = useState(false);

  const rpoExposureMb = useMemo(() => backupIntervalMin * 60 * dataRateMbSec, [backupIntervalMin, dataRateMbSec]);
  const financialRisk = useMemo(() => rpoExposureMb * dollarPerMb, [rpoExposureMb, dollarPerMb]);
  const effectiveRto = useMemo(() => (hasTestedDrill ? restoreTimeMin : restoreTimeMin * 2.8), [hasTestedDrill, restoreTimeMin]);

  /* -------------------------------------------------------------------------- */
  /* QUIZ STATE & DATA                                                          */
  /* -------------------------------------------------------------------------- */
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What does a successful write() system call guarantee by itself on Linux?",
      options: [
        "The data is safely stored on persistent physical flash/magnetic media",
        "The kernel accepted the bytes into memory (e.g. page cache), unless an error was returned",
        "The directory entry and file name have been synchronized to non-volatile storage",
        "The file update is guaranteed crash-consistent across power loss",
      ],
      correctIndex: 1,
      explanation:
        "A successful write() merely confirms that the operating system kernel accepted the bytes into volatile memory (the page cache). It does NOT guarantee that data has been flushed to persistent storage media.",
    },
    {
      id: 2,
      question: "In a crash-safe file replacement protocol, why must you synchronize the temporary file (fsync) before calling rename()?",
      options: [
        "To prevent other concurrent processes from opening the containing directory",
        "To ensure the complete new file contents and inode metadata are durable on disk before publishing the new name",
        "To disable filesystem journal transactions during the update",
        "To force the Linux virtual memory manager to evict the page cache",
      ],
      correctIndex: 1,
      explanation:
        "If you rename before fsync(), a sudden crash can leave the new directory entry pointing to unwritten, empty, or garbage blocks on disk. Synchronizing first ensures that the contents are durable before the namespace pointer is switched.",
    },
    {
      id: 3,
      question: "What is the purpose of performing fsync() on the containing directory descriptor after an atomic rename?",
      options: [
        "To synchronize the directory-entry change (dentry namespace link) to persistent storage",
        "To recalculate SHA-256 checksums for every file in the directory",
        "To purge all inactive file buffers from RAM",
        "To allow the rename syscall to work across different filesystems",
      ],
      correctIndex: 0,
      explanation:
        "Directories are themselves files containing directory entries (dentries). While rename() is atomic in RAM, calling fsync() on the directory file descriptor requests that the directory block update is flushed to persistent storage.",
    },
    {
      id: 4,
      question: "What does filesystem journaling (such as in ext4 or XFS) primarily protect?",
      options: [
        "It guarantees that every multi-file application transaction is ACID-compliant",
        "It allows the filesystem to quickly restore structural consistency (inodes, bitmaps, directory trees) after a crash",
        "It eliminates the possibility of physical storage hardware degradation",
        "It eliminates the need for periodic backups",
      ],
      correctIndex: 1,
      explanation:
        "Journaling protects filesystem structural invariants (free lists, inode tables, directory links) so that the filesystem can mount quickly without a lengthy fsck scan. It does NOT automatically make application-level business transactions consistent.",
    },
    {
      id: 5,
      question: "Why is an active restore drill an indispensable part of a production backup strategy?",
      options: [
        "It guarantees that data will never be corrupted in the future",
        "It verifies that the backup files can actually be restored into working, consistent application state",
        "It replaces the need for filesystem checksums and RAID arrays",
        "It automatically reduces the Recovery Time Objective (RTO) to zero seconds",
      ],
      correctIndex: 1,
      explanation:
        "Untested backups frequently fail due to missing encryption keys, incompatible database versions, corrupted media, or missing configuration files. A backup is only as good as a proven, successful restore drill.",
    },
    {
      id: 6,
      question: "What is the primary limitation of simulated crash testing that uses process exceptions or signal kills?",
      options: [
        "It cannot model application-level state transitions",
        "It does not reproduce real storage-controller cache loss, power failure, or kernel writeback reordering",
        "It is unable to compute cryptographic hashes like SHA-256",
        "It requires a raw unpartitioned NVMe drive to run",
      ],
      correctIndex: 1,
      explanation:
        "An exception or process kill leaves the operating system kernel and hardware running, allowing dirty page cache pages to be flushed normally. Real power loss stops the CPU immediately, exposing volatile cache data loss and device reordering.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  /* -------------------------------------------------------------------------- */
  /* CHECKLIST STATE                                                            */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState({
    item1: true,
    item2: true,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistCompletion = useMemo(() => {
    const total = Object.keys(checklist).length;
    const completed = Object.values(checklist).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  }, [checklist]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans">
      {/* Top Navigation & Track Bar */}
      <ModuleNav
        track="os"
        currentModuleId="crash-consistency"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova OS Tutor"
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 mb-6">
          <span
            onClick={() => navigate("/learning")}
            className="cursor-pointer hover:text-stone-800 transition-colors"
          >
            Learning Center
          </span>
          <span>/</span>
          <span
            onClick={() => navigate("/learning/os")}
            className="cursor-pointer hover:text-stone-800 transition-colors"
          >
            Operating Systems
          </span>
          <span>/</span>
          <span className="text-stone-800 font-medium">Module 16: Crash Consistency, Durability & Recovery</span>
        </div>

        {/* Module Header Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e7e3da] shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-semibold text-xs tracking-wide uppercase mb-3">
                <ShieldCheck size={14} />
                <span>Operating Systems Engineering · Module 16</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
                Crash Consistency, Durability & Recovery
              </h1>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                If power is cut at the worst possible microsecond, what data survives? Master the durability chain from volatile RAM and dirty page caches down to non-volatile flash. Learn write barriers, fsync(), atomic file replacement protocols, journaling, copy-on-write, and disaster recovery.
              </p>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Persistence Sync:</span>
                <span className="text-xs font-bold text-stone-800">fsync() & fdatasync()</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Atomic Primitive:</span>
                <span className="text-xs font-bold text-[#ea580c]">rename(temp, target)</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Lab Tool:</span>
                <span className="text-xs font-bold text-stone-800">crash_lab.py Simulator</span>
              </div>
            </div>
          </div>

          {/* Lesson Selector Tabs */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-2">
            {[
              { id: "volatile", label: "1. Volatile vs Persistent State", icon: HardDrive },
              { id: "ordering", label: "2. Write Ordering & fsync", icon: Clock },
              { id: "journaling", label: "3. Journaling vs CoW", icon: GitBranch },
              { id: "atomic", label: "4. Crash-Safe File Updates", icon: Save },
              { id: "recovery", label: "5. Crash Windows & Recovery", icon: ShieldCheck },
              { id: "backups", label: "6. Backups & Validation", icon: Archive },
              { id: "lab", label: "7. Crash-Safety Lab", icon: Terminal },
              { id: "quiz", label: "Knowledge Check", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeLesson === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveLesson(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "bg-stone-100 hover:bg-stone-200/70 text-stone-700"
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 1: VOLATILE VERSUS PERSISTENT STATE                         */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "volatile" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <HardDrive size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    1. Volatile versus Persistent State
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    RAM · Page Cache · Disk Controller Caches · Durability Boundaries · ACID Terminology
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  A successful write call does <strong>not</strong> mean your data has reached non-volatile storage media. When you call <code>write()</code> in Python or C, bytes travel through multiple caching layers:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-6 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                    <span className="text-xs font-bold text-stone-500 uppercase">Layer 1</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">Application Buffer</h4>
                    <p className="text-xs text-stone-600 mt-2">C runtime <code>FILE*</code> or language buffer (e.g. 4KB). Lost on process crash.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                    <span className="text-xs font-bold text-amber-600 uppercase">Layer 2 (Volatile)</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">Kernel Page Cache</h4>
                    <p className="text-xs text-stone-600 mt-2">OS dirty memory pages awaiting flusher threads. Lost on power failure or kernel panic.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                    <span className="text-xs font-bold text-amber-600 uppercase">Layer 3 (Volatile)</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">Device DRAM Cache</h4>
                    <p className="text-xs text-stone-600 mt-2">On-drive volatile buffer inside SSD controller. Lost unless battery/capacitor backed (PLP).</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-center">
                    <span className="text-xs font-bold text-emerald-700 uppercase">Layer 4 (Persistent)</span>
                    <h4 className="font-bold text-emerald-900 text-sm mt-1">NAND Flash Cells</h4>
                    <p className="text-xs text-emerald-800 mt-2">Non-volatile floating-gate/charge-trap cells. Survives power disconnection.</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Three Properties That Must Never Be Confused</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">Atomicity</span>
                    <h4 className="font-bold text-stone-900 mt-1">All-or-Nothing Execution</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      An update appears to take effect as a single indivisible step. Readers never observe an intermediate half-written state. (e.g. <code>rename()</code>).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">Consistency</span>
                    <h4 className="font-bold text-stone-900 mt-1">Invariants Preserved</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      System rules and business logic remain valid before and after recovery (e.g. Account Balance matches Ledger history, directory dentries match inodes).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">Durability</span>
                    <h4 className="font-bold text-stone-900 mt-1">Survives Power Loss</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Once acknowledged as durable, committed data survives power cuts, kernel panics, and reboots under the hardware durability contract.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 2: WRITE ORDERING & DURABILITY                              */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "ordering" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Clock size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    2. Write Ordering, Barriers, and fsync()
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    write() vs fflush() vs close() vs fsync() vs fdatasync() · Flushes & Barriers · FUA
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  To enforce durability, operating systems expose explicit synchronization primitives:
                </p>

                <div className="overflow-x-auto not-prose my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                        <th className="py-2.5 px-3 font-semibold">Operation</th>
                        <th className="py-2.5 px-3 font-semibold">What It Guarantees</th>
                        <th className="py-2.5 px-3 font-semibold">What It Does NOT Guarantee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">write()</td>
                        <td className="py-2.5 px-3">Kernel accepted bytes into RAM page cache</td>
                        <td className="py-2.5 px-3 text-red-600 font-semibold">Does NOT guarantee persistence on disk</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">fflush()</td>
                        <td className="py-2.5 px-3">Flushes C runtime stdio buffer into kernel</td>
                        <td className="py-2.5 px-3 text-red-600 font-semibold">Data is still volatile in kernel page cache</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">close()</td>
                        <td className="py-2.5 px-3">Releases file descriptor table slot</td>
                        <td className="py-2.5 px-3 text-red-600 font-semibold">Does NOT force dirty pages to storage</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-emerald-700">fdatasync()</td>
                        <td className="py-2.5 px-3">Flushes file data pages and essential size metadata</td>
                        <td className="py-2.5 px-3">Does not flush non-essential metadata (atime/mtime)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-emerald-700">fsync(file)</td>
                        <td className="py-2.5 px-3">Flushes file data pages AND all inode metadata to disk</td>
                        <td className="py-2.5 px-3 text-amber-700 font-semibold">Does NOT make new directory entries durable!</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-[#ea580c]">fsync(dir)</td>
                        <td className="py-2.5 px-3">Flushes the parent directory's dentry table to disk</td>
                        <td className="py-2.5 px-3">Requires opening directory via <code>open(dir, O_RDONLY)</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 not-prose my-4">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <AlertTriangle size={16} />
                    The Golden Rule of Ordering
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Computers and flash controllers reorder writes for performance. If you write new file data, rename it into a directory, and power fails before the file data is flushed, the directory entry will point to <strong>uninitialized garbage or zero-filled blocks</strong>! You must issue a barrier: <code>fsync(file)</code> BEFORE <code>rename()</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* SIMULATOR 1: Staged Atomic File Replacement & Durability Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Timer size={20} className="text-[#ea580c]" />
                Interactive Durability Timeline & State Simulator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Step through T0 to T4 to observe where data resides, what callers see, and when true durability across power failure is reached.
              </p>

              {/* Timeline Step Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                {durabilityTimelineSteps.map((step, idx) => (
                  <button
                    key={step.time}
                    onClick={() => setDurabilityStep(idx)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      durabilityStep === idx
                        ? "bg-[#ea580c] text-white border-[#ea580c] shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-80">
                      Step {step.time}
                    </span>
                    <span className="text-xs font-bold block mt-0.5 truncate">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Step Detail Card */}
              {(() => {
                const cur = durabilityTimelineSteps[durabilityStep];
                return (
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-stone-200 text-stone-800 font-mono text-xs font-bold">
                            {cur.time}
                          </span>
                          <h4 className="text-base font-bold text-stone-900">{cur.title}</h4>
                        </div>
                        <span className="text-xs font-mono text-stone-500 mt-1 block">
                          Executing: <code>{cur.call}</code>
                        </span>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          cur.durable
                            ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                            : "bg-amber-100 text-amber-800 border-amber-300"
                        }`}
                      >
                        {cur.durable ? "✓ DURABLE ACROSS POWER CUT" : "⚠ VOLATILE (LOST ON POWER CUT)"}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{cur.state}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-stone-200 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="text-stone-500 font-medium">Physical Data Location:</span>
                        <p className="font-semibold text-stone-800 mt-0.5">{cur.location}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="text-stone-500 font-medium">Reader Visibility (open('config.json')):</span>
                        <p className="font-semibold text-stone-800 mt-0.5">{cur.targetVisible}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="text-stone-500 font-medium">Disk Block Map:</span>
                        <p className="font-mono font-semibold text-stone-800 mt-0.5">{cur.diskBlocks}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 3: JOURNALING VERSUS COPY-ON-WRITE                          */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "journaling" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <GitBranch size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    3. Journaling and Copy-on-Write (CoW) Filesystems
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    ext4 & XFS vs Btrfs & ZFS · Metadata consistency · Atomic tree roots · Write amplification
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Modern filesystems employ one of two architectural paradigms to ensure that sudden crashes leave the on-disk structures recoverable without a multi-hour <code>fsck</code> scan:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Paradigm A</span>
                    <h3 className="font-bold text-stone-900 mt-1">Journaling (ext4, XFS)</h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                      Logs metadata operations to a circular write-ahead log (journal) on disk before updating home blocks. On reboot, the kernel inspects the journal and replays committed transactions or discards incomplete ones.
                    </p>
                    <div className="mt-3 text-xs font-mono text-stone-500">
                      Sequence: Tx Open &rarr; Commit Barrier &rarr; Checkpoint Home
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Paradigm B</span>
                    <h3 className="font-bold text-stone-900 mt-1">Copy-on-Write (Btrfs, ZFS)</h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                      Never overwrites existing data blocks in-place! Writes modified data and metadata out-of-place to fresh blocks, then atomically updates parent tree pointers up to the superblock root.
                    </p>
                    <div className="mt-3 text-xs font-mono text-stone-500">
                      Sequence: Write Out-of-Place &rarr; Hash Checksum &rarr; Superblock Root Flip
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Journaling vs Copy-on-Write Mechanism Visualizer */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Workflow size={20} className="text-[#ea580c]" />
                Journaling vs Copy-on-Write Architectural Visualizer
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Compare step-by-step how ext4 Journaling updates metadata versus how Btrfs/ZFS Copy-on-Write flips root pointers.
              </p>

              {/* FS Selector Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => {
                    setFsType("journaling");
                    setJournalStep(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    fsType === "journaling" ? "bg-[#ea580c] text-white shadow-xs" : "bg-stone-100 text-stone-700"
                  }`}
                >
                  ext4 Journaling Pipeline
                </button>
                <button
                  onClick={() => {
                    setFsType("cow");
                    setJournalStep(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    fsType === "cow" ? "bg-[#ea580c] text-white shadow-xs" : "bg-stone-100 text-stone-700"
                  }`}
                >
                  Btrfs / ZFS Copy-on-Write (CoW)
                </button>
              </div>

              {/* Step Flow */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {(fsType === "journaling" ? journalingSteps : cowSteps).map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => setJournalStep(idx)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      journalStep === idx
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
                    }`}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider block opacity-70">
                      Step {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm mt-0.5">{step.title}</h4>
                    <p className="text-xs mt-2 opacity-90 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>

              {/* Active Step State Inspector */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm space-y-2">
                <div className="font-bold text-stone-900">
                  {fsType === "journaling" ? "Disk State under Journaling:" : "B-Tree State under Copy-on-Write:"}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <span className="text-stone-500 block text-[11px] font-sans">
                      {fsType === "journaling" ? "On-Disk Journal Segment:" : "Active B-Tree Root Pointer:"}
                    </span>
                    <span className="text-[#ea580c] font-semibold">
                      {fsType === "journaling"
                        ? journalingSteps[journalStep].journalState
                        : cowSteps[journalStep].treeRoot}
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <span className="text-stone-500 block text-[11px] font-sans">
                      {fsType === "journaling" ? "Home File Data Blocks:" : "Physical Extent Allocations:"}
                    </span>
                    <span className="text-stone-800 font-semibold">
                      {fsType === "journaling"
                        ? journalingSteps[journalStep].homeBlocks
                        : cowSteps[journalStep].allocatedBlocks}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 4: CRASH-SAFE FILE UPDATES                                  */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "atomic" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Save size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    4. Atomic File Replacement and Safe Update Patterns
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    The unsafe truncation bug · Staged temporary files · os.replace() · Directory synchronization
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Consider the naive file update pattern taught in introductory programming courses:
                </p>

                <div className="p-3.5 rounded-xl bg-red-50 text-red-900 font-mono text-xs not-prose border border-red-200">
                  # DANGEROUS / UNSAFE IN PRODUCTION!
                  <br />
                  with open("config.json", "w") as f:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;f.write(new_configuration_json)
                </div>

                <p>
                  Opening in <code>"w"</code> mode truncates the file immediately. If power fails or the process dies during serialization, <strong>your previous valid configuration is destroyed and replaced with a corrupt 0-byte file</strong>.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Production Implementation: <code>durable_replace()</code></h3>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto relative not-prose">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import os
import tempfile

def durable_replace(path: str, data: bytes) -> None:
    """
    Replace a file atomically and durably on POSIX filesystems.
    Guarantees:
    1. Previous file remains intact until new file is fully durable.
    2. Atomic namespace switch via same-directory os.replace().
    3. Directory dentry synchronization via fsync().
    """
    path = os.path.abspath(path)
    directory = os.path.dirname(path) or "."
    temp_path = None
    
    try:
        # Create temp file in SAME directory to guarantee same filesystem partition
        fd, temp_path = tempfile.mkstemp(prefix=".update-", dir=directory)
        
        # Write data and flush both userspace runtime buffers & kernel cache
        with os.fdopen(fd, "wb") as f:
            f.write(data)
            f.flush()
            os.fsync(f.fileno()) # Force data & inode to non-volatile flash
            
        # Atomic namespace replacement
        os.replace(temp_path, path)
        temp_path = None # Successfully renamed; do not delete in finally
        
        # Synchronize containing directory dentry table
        dir_fd = os.open(directory, os.O_RDONLY)
        try:
            os.fsync(dir_fd)
        finally:
            os.close(dir_fd)
            
    finally:
        # If any exception occurred before rename, remove partial temp file
        if temp_path and os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except OSError:
                pass
`,
                        "durable_code"
                      )
                    }
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                    title="Copy Python Code"
                  >
                    {copiedSnippet === "durable_code" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <pre>{`import os
import tempfile

def durable_replace(path: str, data: bytes) -> None:
    path = os.path.abspath(path)
    directory = os.path.dirname(path) or "."
    temp_path = None
    try:
        # 1. Staged temp file in same directory (same filesystem)
        fd, temp_path = tempfile.mkstemp(prefix=".update-", dir=directory)
        with os.fdopen(fd, "wb") as f:
            f.write(data)
            f.flush()
            os.fsync(f.fileno()) # 2. Sync file contents to flash
            
        os.replace(temp_path, path) # 3. Atomic same-filesystem dentry swap
        temp_path = None
        
        # 4. Sync containing directory dentry table
        dir_fd = os.open(directory, os.O_RDONLY)
        try:
            os.fsync(dir_fd)
        finally:
            os.close(dir_fd)
    finally:
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)`}</pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 5: CRASH WINDOWS & RECOVERY                                 */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "recovery" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    5. Crash Windows and Recovery Invariants
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Crash window analysis · Write-ahead logs (WAL) · Idempotent recovery · Checksum validation
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  A crash consistency analysis asks a rigorous question: <em>"If execution cuts out at instruction $N$, what state will be found on disk when the system powers back on?"</em>
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Core Recovery Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">1. Idempotency</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">Safe to Rerun</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      If the recovery procedure itself crashes midway, executing it again on the next reboot must not corrupt data.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">2. Commit Records</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">Explicit Boundaries</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      A transaction is either committed or discarded. Never infer completion from partial data presence alone.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">3. Cryptographic Hashes</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">SHA-256 Checksums</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Validate payloads against expected checksums to detect silent block bit-rot and partial sector overwrites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: Crash Window & Failure Injection Simulator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <ZapOff size={20} className="text-[#ea580c]" />
                Crash Window & Failure Injection Simulator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Inject sudden power failure at different checkpoints during a file update. Inspect what survives after reboot and what recovery must do.
              </p>

              {/* Checkpoint Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
                {[
                  { id: "inplace", label: "0. Unsafe Overwrite Truncate" },
                  { id: "mid_temp", label: "1. Mid-Write to Temp File" },
                  { id: "after_file_fsync", label: "2. After Temp fsync, Before rename" },
                  { id: "after_rename_before_dir", label: "3. After rename, Before dir fsync" },
                  { id: "clean_durable", label: "4. Clean Durability Complete" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedCrashWindow(item.id);
                      setCrashSimulated(false);
                    }}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedCrashWindow === item.id
                        ? "bg-[#ea580c] text-white border-[#ea580c] shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div>
                  <span className="text-xs text-stone-500 font-medium block">Selected Checkpoint:</span>
                  <strong className="text-sm text-stone-900">{crashScenarios[selectedCrashWindow].name}</strong>
                </div>

                <button
                  onClick={() => setCrashSimulated(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <Power size={15} />
                  <span>Cut Power & Reboot System</span>
                </button>
              </div>

              {/* Post-Reboot Result Card */}
              {crashSimulated && (
                <div className="p-5 rounded-2xl bg-white border border-stone-300 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <div>
                      <span className="text-xs text-stone-400 font-mono">POST-REBOOT DISK ANALYSIS</span>
                      <h4 className="text-base font-bold text-stone-900">
                        {crashScenarios[selectedCrashWindow].survivingState}
                      </h4>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${crashScenarios[selectedCrashWindow].severityColor}`}
                    >
                      {crashScenarios[selectedCrashWindow].severity}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <strong>Forensic Analysis: </strong>
                    {crashScenarios[selectedCrashWindow].explanation}
                  </p>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-800">
                    <strong className="text-stone-900 block mb-1">Required Recovery Action:</strong>
                    {crashScenarios[selectedCrashWindow].recoveryAction}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 6: BACKUPS & INTEGRITY VALIDATION                           */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "backups" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Archive size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    6. Backups, Integrity, and Recovery Validation
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    RPO & RTO · Backup failure modes · Disaster recovery drills · Cryptographic verification
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  A backup is meaningless unless you can prove that it can be restored into a functioning, consistent production environment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="font-bold text-stone-900 text-base mb-1">Recovery Point Objective (RPO)</h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      The maximum acceptable data loss measured backwards in time. An RPO of 15 minutes means transactions older than 15 minutes must never be lost.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="font-bold text-stone-900 text-base mb-1">Recovery Time Objective (RTO)</h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      The maximum acceptable duration of service downtime from initial disaster declaration until the restored service passes production health checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: RPO / RTO & Disaster Recovery Exposure Calculator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <History size={20} className="text-[#ea580c]" />
                RPO / RTO & Disaster Recovery Exposure Calculator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Calculate data loss exposure and financial downtime risk based on backup frequency and restore drill validation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div>
                    <div className="flex justify-between text-xs text-stone-700 mb-1">
                      <span className="font-medium">Backup Snapshot Interval (RPO Window):</span>
                      <span className="font-mono font-bold text-[#ea580c]">{backupIntervalMin} minutes</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="720"
                      step="5"
                      value={backupIntervalMin}
                      onChange={(e) => setBackupIntervalMin(Number(e.target.value))}
                      className="w-full accent-[#ea580c]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-stone-700 mb-1">
                      <span className="font-medium">Production Data Mutation Rate:</span>
                      <span className="font-mono font-bold text-stone-900">{dataRateMbSec} MB/s</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="1"
                      value={dataRateMbSec}
                      onChange={(e) => setDataRateMbSec(Number(e.target.value))}
                      className="w-full accent-[#ea580c]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-stone-700 mb-1">
                      <span className="font-medium">Estimated Raw Restore Time:</span>
                      <span className="font-mono font-bold text-stone-900">{restoreTimeMin} minutes</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="180"
                      step="5"
                      value={restoreTimeMin}
                      onChange={(e) => setRestoreTimeMin(Number(e.target.value))}
                      className="w-full accent-[#ea580c]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-800">Quarterly Restore Drills Verified?</span>
                    <button
                      onClick={() => setHasTestedDrill(!hasTestedDrill)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                        hasTestedDrill ? "bg-emerald-600 text-white" : "bg-stone-300 text-stone-700"
                      }`}
                    >
                      {hasTestedDrill ? "✓ DRILL TESTED" : "✗ UNTESTED BACKUP"}
                    </button>
                  </div>
                </div>

                {/* Calculation Output Card */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase tracking-wider">
                      Business Risk Exposure
                    </span>
                    <div className="mt-3 space-y-3">
                      <div>
                        <span className="text-xs text-stone-400">Maximum Uncommitted Data at Risk (RPO):</span>
                        <div className="text-xl font-mono font-bold text-amber-400">
                          {(rpoExposureMb / 1024).toFixed(2)} GB ({rpoExposureMb.toLocaleString()} MB)
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-stone-400">Effective Downtime Duration (RTO):</span>
                        <div className="text-xl font-mono font-bold text-white">
                          {effectiveRto.toFixed(0)} minutes
                          {!hasTestedDrill && (
                            <span className="text-xs text-red-400 block font-sans font-normal mt-0.5">
                              (2.8x penalty due to untested encryption keys & restore bugs)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-400">
                    Audit Status:{" "}
                    {hasTestedDrill && backupIntervalMin <= 30 ? (
                      <span className="text-emerald-400 font-bold">Compliant Tier-1 Production SLA</span>
                    ) : (
                      <span className="text-amber-400 font-bold">Risk Warning: Excessive RPO window or unverified restore</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 7: PRACTICAL CRASH-SAFETY LAB                               */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "lab" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Terminal size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    7. Practical Lab: Crash-Safe Updates & Failure Injection
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    crash_lab.py simulator · Canonical JSON · SHA-256 commit records · Invariant preservation
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  In this lab, you build and analyze a crash-consistency simulator. A committed record contains a monotonically increasing version number, a payload, and an authenticating SHA-256 digest. Failures are injected at discrete checkpoints to verify that recovery never exposes a corrupt or uncommitted record.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Executable Lab Script: <code>crash_lab.py</code></h3>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto relative not-prose">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import json
import hashlib
import tempfile
from pathlib import Path

def encode_record(version: int, value: str):
    payload = {"version": version, "value": value}
    canonical = json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return {
        "payload": payload,
        "sha256": hashlib.sha256(canonical).hexdigest(),
    }

def valid_record(record: dict) -> bool:
    try:
        payload = record["payload"]
        canonical = json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
        expected = hashlib.sha256(canonical).hexdigest()
        return record["sha256"] == expected
    except (KeyError, TypeError, ValueError):
        return False

def simulate_update(target_path: Path, new_version: int, new_val: str, crash_at: str):
    """
    Simulates staged atomic update with injected failure checkpoints:
    crash_at options: 'none', 'before_staging', 'during_write', 'after_fsync', 'after_rename'
    """
    directory = target_path.parent
    staged_path = directory / f".update-{new_version}.tmp"
    
    if crash_at == "before_staging":
        raise RuntimeError("Crash injected before staging temporary file!")
        
    record = encode_record(new_version, new_val)
    
    if crash_at == "during_write":
        # Write corrupted partial record
        staged_path.write_text('{"payload": {"version": 2, "value": "INCOMPLETE...')
        raise RuntimeError("Crash injected mid-write! File contains partial garbage.")
        
    staged_path.write_text(json.dumps(record, indent=2))
    # Simulated fsync(staged_path)
    
    if crash_at == "after_fsync":
        raise RuntimeError("Crash injected after file fsync(), before rename()!")
        
    # Atomic rename
    staged_path.replace(target_path)
    
    if crash_at == "after_rename":
        raise RuntimeError("Crash injected after rename, before directory fsync()!")
        
    print(f"Update to v{new_version} fully committed and durable.")

def recover(target_path: Path):
    """Idempotent recovery procedure."""
    # 1. Clean dangling temp files
    for tmp in target_path.parent.glob(".update-*.tmp"):
        print(f"Recovery: cleaning uncommitted temporary file {tmp.name}")
        tmp.unlink(missing_ok=True)
        
    # 2. Validate committed file integrity
    if target_path.exists():
        try:
            data = json.loads(target_path.read_text())
            if valid_record(data):
                print(f"Recovery: Target file v{data['payload']['version']} is VALID (SHA256 OK).")
                return data
            else:
                print("Recovery ERROR: Corrupted checksum detected! Quarantining file.")
        except json.JSONDecodeError:
            print("Recovery ERROR: Malformed JSON! Quarantining file.")
    return None

if __name__ == "__main__":
    work_dir = Path("./crash_lab_workspace")
    work_dir.mkdir(exist_ok=True)
    target = work_dir / "committed_config.json"
    
    # Initialize initial committed state v1
    target.write_text(json.dumps(encode_record(1, "Initial Healthy Config"), indent=2))
    print("Initial state: v1 committed.")
    
    # Test failure scenario
    try:
        simulate_update(target, 2, "Updated Production Config", crash_at="during_write")
    except RuntimeError as e:
        print(f"SIMULATED FAULT: {e}")
        
    print("\\n--- Starting Crash Recovery Routine ---")
    active_record = recover(target)
    print(f"Final active record: {active_record['payload'] if active_record else 'None'}")
`,
                        "crash_lab_py"
                      )
                    }
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                    title="Copy Python Code"
                  >
                    {copiedSnippet === "crash_lab_py" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <pre>{`# crash_lab.py - Canonical Crash Consistency Simulator
import json, hashlib
from pathlib import Path

def encode_record(version, value):
    payload = {"version": version, "value": value}
    canonical = json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return {"payload": payload, "sha256": hashlib.sha256(canonical).hexdigest()}

def valid_record(record):
    try:
        payload = record["payload"]
        canonical = json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
        return record["sha256"] == hashlib.sha256(canonical).hexdigest()
    except (KeyError, TypeError, ValueError):
        return False

def recover(target_path):
    # Idempotent recovery cleans temp files and validates checksums
    for tmp in target_path.parent.glob(".update-*.tmp"):
        tmp.unlink(missing_ok=True)
    if target_path.exists():
        data = json.loads(target_path.read_text())
        if valid_record(data):
            print(f"Validated v{data['payload']['version']} checksum OK.")
            return data
    return None`}</pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 8: KNOWLEDGE CHECK & QUIZ                                   */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "quiz" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                    <Award size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                      Module 16 Knowledge Check
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500">
                      Verify your mastery of write ordering, fsync semantics, journaling, atomic file replacement, and recovery
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {isSubmitted && (
                    <div className="px-4 py-2 rounded-2xl bg-orange-50 border border-orange-200 text-[#ea580c] font-bold text-sm">
                      Score: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                  )}
                  <button
                    onClick={() => {
                      if (isSubmitted) {
                        setSelectedAnswers({});
                        setIsSubmitted(false);
                      } else {
                        setIsSubmitted(true);
                      }
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                  >
                    {isSubmitted ? "Retake Quiz" : "Submit Answers"}
                  </button>
                </div>
              </div>

              {/* Quiz Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const selectedIdx = selectedAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-2xl bg-stone-50 border border-stone-200"
                    >
                      <h3 className="font-semibold text-stone-900 text-sm sm:text-base mb-3">
                        {idx + 1}. {q.question}
                      </h3>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let optionClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                          if (selectedIdx === optIdx) {
                            optionClass = "bg-orange-50 border-[#ea580c] text-[#ea580c] font-semibold";
                          }
                          if (isSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optionClass = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                            } else if (selectedIdx === optIdx && selectedIdx !== q.correctIndex) {
                              optionClass = "bg-red-50 border-red-500 text-red-800";
                            } else {
                              optionClass = "bg-white border-stone-200 text-stone-400 opacity-60";
                            }
                          }

                          return (
                            <div
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-between ${optionClass}`}
                            >
                              <span>{opt}</span>
                              {isSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 size={16} className="text-emerald-600" />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <div className="mt-4 p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
                          <strong className="text-stone-900">Explanation: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mastery Checklist */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    Module 16 Mastery Checklist
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Track your engineering competence across crash consistency, durability, and recovery
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full transition-all duration-300"
                      style={{ width: `${checklistCompletion}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-700">{checklistCompletion}%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { key: "item1", label: "Distinguish volatile memory, page cache, disk controller buffers, and persistent media" },
                  { key: "item2", label: "Differentiate write(), fflush(), close(), fdatasync(), and fsync()" },
                  { key: "item3", label: "Implement atomic file replacement with staged temp files and same-filesystem rename()" },
                  { key: "item4", label: "Synchronize parent directory descriptors to persist namespace dentry modifications" },
                  { key: "item5", label: "Compare metadata journaling (ext4) and copy-on-write shadow paging (Btrfs/ZFS)" },
                  { key: "item6", label: "Perform crash window analysis across multi-step file replacement sequences" },
                  { key: "item7", label: "Design idempotent recovery routines using version numbers and SHA-256 digests" },
                  { key: "item8", label: "Calculate RPO and RTO exposure windows and execute disaster recovery validation drills" },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleChecklistItem(item.key)}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3 cursor-pointer hover:bg-stone-100 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() => {}}
                      className="w-4 h-4 text-[#ea580c] rounded-md focus:ring-orange-500 cursor-pointer"
                    />
                    <span className={`text-xs sm:text-sm ${checklist[item.key] ? "text-stone-900 font-medium" : "text-stone-500 line-through"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-12 pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/ipc")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 15 (IPC, Pipes & Shared Memory)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/kernel-architecture")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 17 (Kernel Architecture & xv6)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Crash Consistency & Durability"
        defaultMessage="Hello! Ask me any question about write barriers, fsync(), atomic rename, journaling, copy-on-write, or disaster recovery!"
      />
    </div>
  );
}
