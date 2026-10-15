import React, { useState, useMemo, useEffect } from "react";
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
  HardDrive,
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
  Globe,
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
  FastForward,
  Pause,
  SkipForward,
  CornerDownRight,
  Container,
  Box,
  Monitor,
  Share2,
  FolderTree,
  Folder,
  File,
  Link2,
  Unlink2,
  HardDriveDownload,
  Save,
  CheckCheck,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 13                                 */
/* Filesystems and Storage Architecture                                       */
/* Inodes · Dentries · Extents · Journaling · VFS · Page Cache · fsync · ext4 */
/* -------------------------------------------------------------------------- */

export default function OSFilesystems() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(36);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Path Resolution & Inode Explorer
  // ---------------------------------------------------------------------------
  const SAMPLE_PATHS = [
    {
      path: "/home/student/docs/report.txt",
      desc: "Deep nested user document requiring 4 directory traversals.",
      steps: [
        { component: "/", inode: 2, type: "Directory (Root)", block: 1024, permissions: "drwxr-xr-x" },
        { component: "home", inode: 18420, type: "Directory", block: 42100, permissions: "drwxr-xr-x" },
        { component: "student", inode: 92410, type: "Directory", block: 89400, permissions: "drwx------" },
        { component: "docs", inode: 104219, type: "Directory", block: 95412, permissions: "drwxr-xr-x" },
        { component: "report.txt", inode: 420194, type: "Regular File", block: 142080, permissions: "-rw-r--r--" },
      ],
      extents: [
        { startBlock: 142080, length: 16, logicalRange: "0 KB - 64 KB" },
        { startBlock: 189420, length: 32, logicalRange: "64 KB - 192 KB" },
      ],
    },
    {
      path: "/var/log/syslog",
      desc: "System log file with append-only write access.",
      steps: [
        { component: "/", inode: 2, type: "Directory (Root)", block: 1024, permissions: "drwxr-xr-x" },
        { component: "var", inode: 2048, type: "Directory", block: 8192, permissions: "drwxr-xr-x" },
        { component: "log", inode: 16420, type: "Directory", block: 32768, permissions: "drwxr-xr-x" },
        { component: "syslog", inode: 78420, type: "Regular File", block: 102400, permissions: "-rw-r-----" },
      ],
      extents: [{ startBlock: 102400, length: 64, logicalRange: "0 KB - 256 KB" }],
    },
    {
      path: "/etc/passwd",
      desc: "System configuration file readable by all local users.",
      steps: [
        { component: "/", inode: 2, type: "Directory (Root)", block: 1024, permissions: "drwxr-xr-x" },
        { component: "etc", inode: 4096, type: "Directory", block: 16384, permissions: "drwxr-xr-x" },
        { component: "passwd", inode: 34102, type: "Regular File", block: 65536, permissions: "-rw-r--r--" },
      ],
      extents: [{ startBlock: 65536, length: 4, logicalRange: "0 KB - 16 KB" }],
    },
  ];

  const [selectedPathIdx, setSelectedPathIdx] = useState(0);
  const currentPathData = SAMPLE_PATHS[selectedPathIdx];

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: Inode, Hard Link and Symlink Lifecycle Simulator
  // ---------------------------------------------------------------------------
  const [hasOriginal, setHasOriginal] = useState(true);
  const [hasHardlink, setHasHardlink] = useState(true);
  const [hasSymlink, setHasSymlink] = useState(true);

  const linkCount = (hasOriginal ? 1 : 0) + (hasHardlink ? 1 : 0);
  const dataBlocksFreed = linkCount === 0;
  const isSymlinkBroken = hasSymlink && !hasOriginal;

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: Journaling & Crash Consistency Stepper
  // ---------------------------------------------------------------------------
  const JOURNAL_STEPS = [
    {
      id: "prepare",
      title: "1. Prepare In-Memory Transaction",
      desc: "Application writes data. Kernel allocates new extent (block 1400) and constructs dirty inode and dentry in RAM.",
      journalState: "Empty",
      diskInodeState: "Inode size = 0 KB (Old)",
      risk: "Safe: zero storage modifications yet.",
    },
    {
      id: "write_journal",
      title: "2. Write Metadata to Journal Log",
      desc: "Filesystem sequentially writes modified inode, block allocation bitmap, and dentry into contiguous journal area.",
      journalState: "Transaction #429 written (Pending Commit)",
      diskInodeState: "Inode size = 0 KB (Old)",
      risk: "Power loss here: Journal transaction incomplete without commit record. Discarded safely on reboot!",
    },
    {
      id: "commit",
      title: "3. Write Journal Commit Record (Atomic Barrier)",
      desc: "Journal commit block flushed to persistent storage with barrier. The transaction is now legally committed!",
      journalState: "Transaction #429 COMMITTED ✓",
      diskInodeState: "Inode size = 0 KB (Old)",
      risk: "Power loss here: Recovery scans journal, sees Commit Record, and replays transaction to disk!",
    },
    {
      id: "checkpoint",
      title: "4. Checkpoint (Write to Final Locations)",
      desc: "Kernel writes updated inode, free bitmap, and file blocks to their final on-disk locations.",
      journalState: "Transaction #429 (Checkpointing)",
      diskInodeState: "Inode size = 64 KB (Updated ✓)",
      risk: "Final storage updated. If crash occurs during checkpoint, journal replay completes it.",
    },
    {
      id: "release",
      title: "5. Release / Circular Journal Reclamation",
      desc: "Transaction removed from active journal log. Storage space reclaimed for future transactions.",
      journalState: "Reclaimed / Ready",
      diskInodeState: "Inode size = 64 KB (Durable ✓)",
      risk: "Transaction fully integrated into filesystem structure.",
    },
  ];

  const [journalStepIndex, setJournalStepIndex] = useState(0);
  const [simulatedCrash, setSimulatedCrash] = useState(false);

  const currentJournalStep = JOURNAL_STEPS[journalStepIndex];

  // ---------------------------------------------------------------------------
  // Interactive Tool 4: Page Cache Dirty Writeback & fsync() Buffer
  // ---------------------------------------------------------------------------
  const [dirtyPagesMB, setDirtyPagesMB] = useState(48); // MB
  const [fsyncTriggered, setFsyncTriggered] = useState(false);

  const pageCacheMetrics = useMemo(() => {
    const isOverBackgroundLimit = dirtyPagesMB >= 80;
    const isOverThrottleLimit = dirtyPagesMB >= 160;

    return {
      isOverBackgroundLimit,
      isOverThrottleLimit,
      status: fsyncTriggered
        ? "DURABLE (fsync Flushed to Disk)"
        : isOverThrottleLimit
        ? "THROTTLED (Synchronous Writeback)"
        : isOverBackgroundLimit
        ? "FLUSHING (Background pdflush Active)"
        : "CACHED (Volatile in RAM)",
      badgeColor: fsyncTriggered
        ? "bg-emerald-100 text-emerald-800 border-emerald-300"
        : isOverThrottleLimit
        ? "bg-rose-100 text-rose-800 border-rose-300"
        : isOverBackgroundLimit
        ? "bg-amber-100 text-amber-800 border-amber-300"
        : "bg-blue-100 text-blue-800 border-blue-300",
    };
  }, [dirtyPagesMB, fsyncTriggered]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 5: Terminal Simulation Sandbox
  // ---------------------------------------------------------------------------
  const [terminalCommand, setTerminalCommand] = useState(
    "python3 fs_inspector.py docs/notes.txt notes-hardlink.txt notes-symlink.txt"
  );

  const terminalOutput = useMemo(() => {
    switch (terminalCommand) {
      case "python3 fs_inspector.py docs/notes.txt notes-hardlink.txt notes-symlink.txt":
        return `======================================================================
PREPSPACES OS LAB: FILESYSTEM METADATA INSPECTOR
======================================================================
Target Path: docs/notes.txt
  Type            : regular file
  Permissions     : -rw-r--r-- (0644)
  Device ID       : 66305 (major: 259, minor: 1)
  Inode Number    : 420194  <-- SAME INODE
  Hard-Link Count : 2       <-- 2 directory entries point here!
  Logical Size    : 18 bytes
  Allocated Blocks: 8 (512-byte blocks = 4096 bytes allocated)
  Last Access     : 2026-10-15T12:00:14+00:00
  Last Data Modify: 2026-10-15T12:00:14+00:00
  Last Inode Change: 2026-10-15T12:01:02+00:00

Target Path: notes-hardlink.txt
  Type            : regular file
  Permissions     : -rw-r--r-- (0644)
  Device ID       : 66305
  Inode Number    : 420194  <-- IDENTICAL INODE (Hard Link!)
  Hard-Link Count : 2
  Logical Size    : 18 bytes
  Allocated Blocks: 8

Target Path: notes-symlink.txt
  Type            : symbolic link
  Permissions     : lrwxrwxrwx (0777)
  Device ID       : 66305
  Inode Number    : 420195  <-- DISTINCT INODE!
  Hard-Link Count : 1
  Logical Size    : 14 bytes (Length of target path string: 'docs/notes.txt')
  Allocated Blocks: 0 (Fast symlink stored directly inside inode!)
  Target Path     : docs/notes.txt -> RESOLVED ✓`;

      case "stat docs/notes.txt && stat -L notes-symlink.txt":
        return `  File: docs/notes.txt
  Size: 18        	Blocks: 8          IO Block: 4096   regular file
Device: 10301h/66305d	Inode: 420194      Links: 2
Access: (0644/-rw-r--r--)  Uid: ( 1000/ student)   Gid: ( 1000/ student)
Access: 2026-10-15 12:00:14.281920192 +0000
Modify: 2026-10-15 12:00:14.281920192 +0000
Change: 2026-10-15 12:01:02.194829104 +0000
 Birth: 2026-10-15 12:00:14.281920192 +0000

  File: notes-symlink.txt (dereferenced via -L)
  Size: 18        	Blocks: 8          IO Block: 4096   regular file
Device: 10301h/66305d	Inode: 420194      Links: 2
Note: 'stat -L' traversed the symlink pointer and inspected target inode 420194.`;

      case "findmnt -o TARGET,SOURCE,FSTYPE,OPTIONS":
        return `TARGET                       SOURCE      FSTYPE   OPTIONS
/                            /dev/nvme0n1p2 ext4     rw,relatime,errors=remount-ro
├─/sys                       sysfs       sysfs    rw,nosuid,nodev,noexec,relatime
├─/proc                      proc        proc     rw,nosuid,nodev,noexec,relatime
├─/dev                       udev        devtmpfs rw,nosuid,noexec,relatime,size=8124920k
├─/run                       tmpfs       tmpfs    rw,nosuid,nodev,noexec,relatime,size=1630124k
├─/data                      /dev/nvme0n1p3 xfs      rw,noatime,attr2,inode64,logbufs=8
└─/var/lib/docker/overlay2   overlay     overlay  rw,relatime,lowerdir=...,upperdir=...

Analysis:
  - Root (/) uses ext4 with 'relatime' mount option (suppresses redundant atime disk writes).
  - High-throughput /data uses XFS with 'noatime'.
  - Docker container layers mounted via in-kernel 'overlay' filesystem.`;

      case "cat /proc/meminfo | grep -E 'Cached|Buffers|Dirty|Writeback'":
        return `Buffers:            184920 kB
Cached:            4819200 kB  (4.8 GB page cache keeping hot file pages in RAM)
Dirty:               49152 kB  (48 MB of modified pages awaiting disk writeback)
Writeback:               0 kB  (Currently in-flight I/O being written to storage)
WritebackTmp:            0 kB

Key Takeaway:
  - 'Dirty' memory represents successful write() syscalls not yet persisted to physical media.
  - Calling fsync() forces 'Dirty' -> 'Writeback' -> 'Durable Storage'.`;

      case "strace -e trace=%file python3 fs_inspector.py docs/notes.txt":
        return `execve("/usr/bin/python3", ["python3", "fs_inspector.py", "docs/notes.txt"], [/* 48 vars */]) = 0
newfstatat(AT_FDCWD, "docs/notes.txt", {st_mode=S_IFREG|0644, st_size=18, ...}, AT_SYMLINK_NOFOLLOW) = 0
openat(AT_FDCWD, "docs/notes.txt", O_RDONLY|O_CLOEXEC) = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=18, ...}) = 0
close(3) = 0

Observation:
  - Notice the 'newfstatat' call with AT_SYMLINK_NOFOLLOW (equivalent to lstat):
    It inspects the inode metadata directly without reading file contents into memory!`;

      default:
        return "Unknown command.";
    }
  }, [terminalCommand]);

  // Copy code helper
  const handleCopyCode = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // ---------------------------------------------------------------------------
  // Assessment Quiz (6 Questions)
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the primary difference between a hard link and a symbolic link?",
      options: [
        "A hard link creates a new copy of data; a symbolic link shares data blocks.",
        "A hard link points directly to the existing inode number; a symbolic link is a separate file containing a path string.",
        "A hard link can span multiple filesystems; a symbolic link cannot.",
        "A symbolic link increments the inode's link count; a hard link does not.",
      ],
      correct: 1,
      explanation:
        "A hard link creates an additional directory entry pointing to the same existing inode number (incrementing the inode link count). A symbolic link is an entirely independent file (with its own inode) whose contents are the target path string.",
    },
    {
      id: "q2",
      question: "Where is a file's name stored in a Unix-style filesystem such as ext4?",
      options: [
        "Inside the file's inode metadata structure.",
        "In the master superblock at block 0.",
        "Inside directory entry data blocks (dentries).",
        "Inside the first data extent of the file.",
      ],
      correct: 2,
      explanation:
        "In Unix-style filesystems, an inode stores file metadata (permissions, owner, size, timestamps, extent pointers) but NOT the filename. Filenames are stored inside directory entry (dentry) records that map human-readable names to inode numbers.",
    },
    {
      id: "q3",
      question: "Why does calling write() return successfully before data is written to physical storage?",
      options: [
        "The CPU executes the disk write synchronously in parallel.",
        "The kernel writes the data to the Page Cache in RAM, marking pages 'Dirty' for delayed asynchronous writeback.",
        "The Linux kernel drops unwritten data if storage is busy.",
        "Disk controllers require writes to be buffered inside the CPU registers.",
      ],
      correct: 1,
      explanation:
        "Standard buffered I/O writes data directly into the kernel Page Cache in RAM, which is fast (~nanoseconds). The kernel marks the pages 'dirty' and flushes them to disk asynchronously via background flusher daemons (pdflush). To guarantee durability on disk, the application must call fsync().",
    },
    {
      id: "q4",
      question: "How does a journaling filesystem (such as ext4 in ordered mode) ensure crash consistency?",
      options: [
        "By duplicating the entire disk twice onto a backup drive.",
        "By recording metadata updates in a contiguous journal log and committing them with a barrier before updating final on-disk structures.",
        "By disabling all write caching on the storage drive.",
        "By running e2fsck on every boot automatically.",
      ],
      correct: 1,
      explanation:
        "Journaling ensures crash consistency by writing multi-step metadata changes as an atomic transaction into a dedicated journal area first. Once the 'Commit Record' is persisted, the filesystem can always safely recover after a power cut by replaying committed transactions during reboot.",
    },
    {
      id: "q5",
      question: "What is an 'extent' in modern filesystems (ext4, XFS, Btrfs)?",
      options: [
        "A linked list of non-contiguous single blocks.",
        "A contiguous range of physical blocks described by a starting block number and block length.",
        "A special inode used only for directory listings.",
        "The maximum size a file can reach on a 64-bit filesystem.",
      ],
      correct: 1,
      explanation:
        "An extent replaces traditional multi-level indirect block pointers with a compact structure: (starting physical block, length). This allows a single 12-byte extent record to index thousands of contiguous blocks, drastically reducing metadata overhead and fragmentation.",
    },
    {
      id: "q6",
      question: "What unique data protection feature distinguishes Btrfs and ZFS from ext4 and XFS?",
      options: [
        "They use FAT32 tables for backwards compatibility.",
        "End-to-end data checksumming and Copy-on-Write (CoW) trees that detect and self-heal silent data corruption (bit rot).",
        "They disable the Virtual Filesystem (VFS) to run directly on bare metal.",
        "They do not support directories.",
      ],
      correct: 1,
      explanation:
        "Btrfs and ZFS use Copy-on-Write (CoW) B-trees and cryptographic/CRC checksums for all user data and metadata. If disk bit rot or media degradation flips a bit, the filesystem detects the checksum mismatch and can self-heal from parity/mirror copies.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  // ---------------------------------------------------------------------------
  // Engineering Mastery Checklist (8 items)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    fd_vs_inode: true,
    hard_vs_symlink: true,
    extent_allocation: false,
    journal_recovery: false,
    vfs_mount: false,
    pagecache_fsync: false,
    ext4_xfs_btrfs: false,
    inspector_tool: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Universal Module Navigation Bar */}
      <ModuleNav
        track="os"
        currentModuleId="filesystems"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova OS Tutor"
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Header / Hero Banner */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#e7e3da] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                <BookOpen size={12} className="text-orange-600" />
                Module 13 · Core OS Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                <HardDrive size={12} className="text-stone-600" />
                Storage Internals & VFS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Save size={12} className="text-emerald-600" />
                Journaling & Crash Consistency
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
              Filesystems and Storage Architecture
            </h1>

            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed">
              Trace the complete journey from a human-readable path like <code className="font-mono text-sm bg-stone-100 px-1.5 py-0.5 rounded text-orange-700">/home/student/report.txt</code> through
              directory entries, inode metadata, cached memory pages, extent trees, journaling transactions, and physical block
              storage. Build a complete Python filesystem inspector to audit Linux storage internals.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Lessons Covered</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">8 In-Depth Topics</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Architectures Compared</div>
                <div className="text-base font-bold text-orange-600 mt-0.5">ext4, XFS, Btrfs, ZFS</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Interactive Simulators</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">4 Visual Engines</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Practical Capstone</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">Python fs_inspector.py</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 space-x-2 sm:space-x-4 overflow-x-auto">
          {[
            { id: "theory", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "interactive-lab", label: "Interactive Simulators", icon: Sliders },
            { id: "checklist", label: "Mastery Checklist", icon: CheckCircle2, badge: `${completedChecklistCount}/8` },
            { id: "quiz", label: "Knowledge Check", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-4 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? "border-orange-600 text-orange-600 font-bold"
                    : "border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1.5 px-2 py-0.5 text-xs rounded-full font-mono ${
                      isActive ? "bg-orange-100 text-orange-700" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* TAB 1: CURRICULUM & LESSONS                                           */}
        {/* ===================================================================== */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* Lesson 1: Files, Directories, and File Descriptors */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  01
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    File Abstractions, Directories and File Descriptors
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Everything is a File · Process Descriptor Table · Open File Descriptions · Path Resolution
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  In Unix-like systems, the file abstraction unifies access to disparate kernel objects. A regular file,
                  a directory, a terminal device, a named pipe (FIFO), and a network socket can all be accessed through
                  the universal API: <code className="font-mono text-xs">open()</code>, <code className="font-mono text-xs">read()</code>,
                  <code className="font-mono text-xs">write()</code>, <code className="font-mono text-xs">lseek()</code>, and
                  <code className="font-mono text-xs">close()</code>.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  The Three-Tier Descriptor Architecture
                </h3>
                <div className="p-5 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs sm:text-sm space-y-3 border border-stone-800">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold shrink-0">1. File Descriptor (fd):</span>
                    <span>A small integer (<code className="text-amber-300">0, 1, 2, 3...</code>) indexing the process's private descriptor table. Local to the process!</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold shrink-0">2. Open File Description:</span>
                    <span>System-wide kernel structure tracking current read/write offset, access modes (<code className="text-amber-300">O_RDONLY, O_APPEND</code>), and reference count. Shared across <code className="text-amber-300">dup()</code> and <code className="text-amber-300">fork()</code>!</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold shrink-0">3. VFS Inode Object:</span>
                    <span>The concrete representation of the file metadata on disk, shared by all open file descriptions referencing that file.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-1.5">
                  <div className="font-bold text-stone-900 font-sans">Why This Separation Matters:</div>
                  <div>• Calling <code className="font-mono">open()</code> twice on the same file creates two independent open file descriptions with independent file offsets.</div>
                  <div>• Calling <code className="font-mono">dup()</code> or <code className="font-mono">fork()</code> shares the open file description, meaning both processes advance the exact same file offset!</div>
                </div>
              </div>
            </section>

            {/* Lesson 2: Inodes, Links, and Permissions */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  02
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Inodes, Directory Entries, Links and Permissions
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Inodes vs Dentries · Hard Links · Symlinks · Unix Permission Bits · SUID/SGID/Sticky
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  An <strong>inode (index node)</strong> stores all metadata about a filesystem object except its filename.
                  A <strong>directory entry (dentry)</strong> is a simple name-to-inode mapping table.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Link2 size={16} className="text-orange-600" />
                      Hard Links: Same Inode
                    </h3>
                    <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                      <li>Multiple directory entries pointing to the identical inode number.</li>
                      <li>Increments the inode's <code className="font-mono text-xs">st_nlink</code> counter.</li>
                      <li>Deleting one name only decrements the link count. Data is freed only when <code className="font-mono text-xs">st_nlink == 0</code> and no process holds an open fd.</li>
                      <li>Cannot span across filesystem boundaries or point to directories.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Share2 size={16} className="text-blue-600" />
                      Symbolic Links: Path Pointers
                    </h3>
                    <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                      <li>An independent file with its own unique inode number.</li>
                      <li>File contents store the string path to the target.</li>
                      <li>Can point across different filesystems and disk mounts.</li>
                      <li>Becomes a <strong>dangling / broken link</strong> if the target file is renamed or removed.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
                  <div className="font-bold mb-1">Directory Execute Bit Distinction:</div>
                  For a directory, <strong>read (r)</strong> permission allows listing entries (<code className="font-mono">ls</code>).
                  <strong>Execute (x)</strong> permission allows traversing or searching through the directory to open files inside it (<code className="font-mono">cd</code>).
                </div>
              </div>
            </section>

            {/* Lesson 3: Block Layout and Extents */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  03
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Block Layout, Extent Allocation & Free-Space Tracking
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Contiguous vs Extent Allocation · Free-Space Bitmaps · 119 MB for 1 Billion Blocks
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Early filesystems indexed files using direct and multi-level indirect block pointers (e.g. ext2/ext3).
                  Modern filesystems (ext4, XFS, Btrfs) use <strong>extent trees</strong>:
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-mono space-y-1">
                  <div className="font-bold text-stone-900 font-sans">Extent Representation: (start_block, length)</div>
                  <div>• Extent 1: Physical blocks 1000 - 1127 (Length: 128 blocks = 512 KB)</div>
                  <div>• Extent 2: Physical blocks 8000 - 8063 (Length: 64 blocks = 256 KB)</div>
                  <div className="text-stone-500 text-[11px] font-sans mt-2">
                    A single extent header covers hundreds of contiguous blocks, eliminating massive indirect block pointer overhead.
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  Free-Space Bitmap Storage Formula
                </h3>
                <p>
                  To track block allocations, a filesystem uses 1 bit per physical block. For a filesystem with \(N\) blocks:
                </p>
                <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs sm:text-sm">
                  Bitmap Storage = N / 8 bytes
                  <br />
                  For 1,000,000,000 blocks (4 TB at 4KB block size):
                  <br />
                  1,000,000,000 / 8 = 125,000,000 bytes ≈ <strong>119.2 MiB</strong>
                </div>
              </div>
            </section>

            {/* Lesson 4: Journaling and Crash Recovery */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  04
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Journaling, Metadata Consistency & Crash Recovery
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Write-Ahead Logging · Transactions · Commit Records · fsync() Durability
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Creating or appending to a file requires multiple separate disk writes: allocating data blocks, updating
                  the free bitmap, writing the new inode, and adding the directory entry. If power fails halfway through,
                  the filesystem structures become corrupted.
                </p>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
                  <div className="font-bold text-stone-900 font-sans">The 5-Step Journaling Protocol:</div>
                  <div>1. <strong>Prepare:</strong> Changes assembled in memory.</div>
                  <div>2. <strong>Write Journal:</strong> Metadata written sequentially to the on-disk journal log.</div>
                  <div>3. <strong>Commit:</strong> Commit record flushed to journal with a hardware storage barrier. <em>The transaction is now legally committed!</em></div>
                  <div>4. <strong>Checkpoint:</strong> Metadata written to final on-disk locations (inode table, directory blocks).</div>
                  <div>5. <strong>Reclaim:</strong> Journal transaction cleared.</div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-900">
                  <strong>Crash Consistency vs Durability:</strong> A journaling filesystem guarantees that internal
                  filesystem structures remain consistent after a reboot without running hours of <code className="font-mono">fsck</code>.
                  However, it does <em>not</em> guarantee that uncommitted application data survived. An application must call
                  <code className="font-mono font-bold">fsync(fd)</code> to guarantee data persistence on disk.
                </div>
              </div>
            </section>

            {/* Lesson 5: VFS and Mount Points */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  05
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Virtual Filesystem (VFS) and Mount Architecture
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Kernel Abstraction Layer · struct file_operations · Mount Points · Mount Namespaces
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  The Linux <strong>Virtual Filesystem (VFS)</strong> provides an object-oriented kernel abstraction layer.
                  Applications interact with standard VFS objects:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                    <div className="font-bold text-stone-900">superblock</div>
                    <div className="text-stone-500 text-[10px] mt-0.5">Filesystem instance</div>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                    <div className="font-bold text-stone-900">inode</div>
                    <div className="text-stone-500 text-[10px] mt-0.5">Object metadata</div>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                    <div className="font-bold text-stone-900">dentry</div>
                    <div className="text-stone-500 text-[10px] mt-0.5">Directory path cache</div>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                    <div className="font-bold text-stone-900">file</div>
                    <div className="text-stone-500 text-[10px] mt-0.5">Open file description</div>
                  </div>
                </div>

                <p>
                  Each concrete filesystem (ext4, XFS, Btrfs, NFS) registers function pointer tables implementing these
                  interfaces (e.g. <code className="font-mono text-xs">struct file_operations &#123; .read, .write, .fsync &#125;</code>).
                </p>
              </div>
            </section>

            {/* Lesson 6: Page Cache and Durability */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  06
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Page Cache, Buffering and fsync() Durability
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Cached Reads · Dirty Pages · Writeback Throttling · Atomic File Replacement
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Storage I/O is orders of magnitude slower than CPU registers and RAM. The Linux <strong>Page Cache</strong>
                  transparently intercepts all buffered reads and writes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 font-sans">
                    <div className="font-bold mb-1">Standard Buffered Write Path:</div>
                    <div className="text-xs text-blue-800">
                      1. Application calls <code className="font-mono">write(fd, buf, len)</code>.<br />
                      2. Kernel copies bytes to RAM Page Cache.<br />
                      3. Pages marked <strong>Dirty</strong>; syscall returns immediately (~microseconds).<br />
                      4. Background kernel threads (<code className="font-mono">pdflush / flusher</code>) flush dirty pages to storage later.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-sans">
                    <div className="font-bold mb-1">Atomic Crash-Safe Write Pattern:</div>
                    <div className="text-xs text-emerald-800">
                      1. Write data to temporary file: <code className="font-mono">data.tmp</code>.<br />
                      2. Call <code className="font-mono">fsync(tmp_fd)</code> to guarantee bytes on physical disk.<br />
                      3. Atomically replace target: <code className="font-mono">rename("data.tmp", "data.json")</code>.<br />
                      4. Call <code className="font-mono">fsync(dir_fd)</code> on containing directory dentry!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 7: Filesystem Comparison */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  07
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Filesystem Comparison: ext4, XFS, Btrfs and ZFS
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Workload Trade-offs · In-Place vs Copy-on-Write · End-to-End Data Checksumming
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full text-xs sm:text-sm border border-stone-200 rounded-xl overflow-hidden">
                    <thead className="bg-stone-100 text-stone-900 font-bold font-mono">
                      <tr>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Property</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">ext4</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">XFS</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Btrfs</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">ZFS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Design Model</td>
                        <td className="py-2.5 px-3">In-place update + Journal</td>
                        <td className="py-2.5 px-3">In-place update + Journal</td>
                        <td className="py-2.5 px-3 font-semibold text-orange-600">Copy-on-Write (CoW)</td>
                        <td className="py-2.5 px-3 font-semibold text-orange-600">Copy-on-Write (CoW)</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Data Checksums</td>
                        <td className="py-2.5 px-3 text-rose-600">No (metadata only)</td>
                        <td className="py-2.5 px-3 text-rose-600">No (metadata only)</td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-600">Yes (Data + Metadata)</td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-600">Yes (Self-Healing)</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Snapshots</td>
                        <td className="py-2.5 px-3">External (LVM)</td>
                        <td className="py-2.5 px-3">External (reflink only)</td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-600">Native Subvolumes</td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-600">Native Instant ZFS Snapshots</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Primary Strength</td>
                        <td className="py-2.5 px-3">Broadest Linux compatibility</td>
                        <td className="py-2.5 px-3">Massive parallel throughput</td>
                        <td className="py-2.5 px-3">Snapshots & flexible pools</td>
                        <td className="py-2.5 px-3">Enterprise data integrity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Lesson 8: Practical Lab - Python fs_inspector */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                    08
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900">
                      Practical Lab: Filesystem Metadata Inspector
                    </h2>
                    <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                      fs_inspector.py · lstat · Inode Auditing · Hard Link Detection · strace
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyCode(
                      "python-inspector-code",
                      `#!/usr/bin/env python3
import os
import sys
import stat
from datetime import datetime

def format_time(ts):
    return datetime.fromtimestamp(ts).astimezone().isoformat(timespec="seconds")

def get_object_type(mode):
    if stat.S_ISREG(mode): return "regular file"
    if stat.S_ISDIR(mode): return "directory"
    if stat.S_ISLNK(mode): return "symbolic link"
    if stat.S_ISCHR(mode): return "character device"
    if stat.S_ISBLK(mode): return "block device"
    if stat.S_ISFIFO(mode): return "FIFO"
    if stat.S_ISSOCK(mode): return "socket"
    return "unknown"

def inspect_path(path):
    try:
        # lstat does NOT follow symlinks, inspecting link itself!
        st = os.lstat(path)
        print("=" * 60)
        print(f"Path: {path}")
        print(f"  Type            : {get_object_type(st.st_mode)}")
        print(f"  Permissions     : {oct(stat.S_IMODE(st.st_mode))}")
        print(f"  Device ID       : {st.st_dev}")
        print(f"  Inode Number    : {st.st_ino}")
        print(f"  Hard-Link Count : {st.st_nlink}")
        print(f"  Logical Size    : {st.st_size} bytes")
        print(f"  Allocated Blocks: {getattr(st, 'st_blocks', 'N/A')}")
        print(f"  Modify Time     : {format_time(st.st_mtime)}")
        print(f"  Inode Change    : {format_time(st.st_ctime)}")
        if stat.S_ISLNK(st.st_mode):
            target = os.readlink(path)
            print(f"  Symlink Target  : {target}")
    except OSError as err:
        print(f"Error inspecting {path}: {err}", file=sys.stderr)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 fs_inspector.py <file1> [file2 ...]")
        sys.exit(1)
    for p in sys.argv[1:]:
        inspect_path(p)`
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                >
                  {copiedCodeId === "python-inspector-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCodeId === "python-inspector-code" ? "Copied" : "Copy Inspector Code"}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs overflow-x-auto border border-stone-800">
                <pre>{`#!/usr/bin/env python3
import os, sys, stat
from datetime import datetime

def format_time(ts):
    return datetime.fromtimestamp(ts).astimezone().isoformat(timespec="seconds")

def inspect_path(path):
    st = os.lstat(path)  # lstat inspects the link without following
    print(f"Path: {path}")
    print(f"  Inode: {st.st_ino} | Links: {st.st_nlink} | Size: {st.st_size} bytes")
    print(f"  Blocks: {getattr(st, 'st_blocks', 0)} | Permissions: {oct(stat.S_IMODE(st.st_mode))}")
    if stat.S_ISLNK(st.st_mode):
        print(f"  Symlink Target: {os.readlink(path)}")`}</pre>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                         */}
        {/* ===================================================================== */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-10">
            {/* Interactive Engine 1: Path Resolution & Inode Explorer */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <FolderTree className="text-orange-600" size={24} />
                    Path Resolution & Inode Directory Walk
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Trace how the VFS path walker resolves a human path step-by-step from Root inode 2 down to the final physical extent.
                  </p>
                </div>

                <div className="flex gap-2">
                  {SAMPLE_PATHS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPathIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-colors ${
                        selectedPathIdx === idx
                          ? "bg-orange-600 text-white font-bold shadow-2xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {item.path.split("/").pop()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4 text-xs font-mono text-stone-600 flex items-center gap-2">
                <span className="font-bold text-stone-900">Resolving Path:</span>
                <span className="bg-stone-100 px-2 py-1 rounded text-orange-600 font-bold">{currentPathData.path}</span>
                <span className="text-stone-400">({currentPathData.desc})</span>
              </div>

              {/* Step Walk Breadcrumbs */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                {currentPathData.steps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                    <div className="text-[10px] font-mono text-stone-400 uppercase">
                      Step {idx + 1}
                    </div>
                    <div className="my-2">
                      <div className="text-sm font-black font-mono text-stone-900">
                        {step.component}
                      </div>
                      <div className="text-[11px] font-mono text-orange-600">
                        Inode #{step.inode}
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                      <div>{step.type}</div>
                      <div>Block: {step.block}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final Extents Table */}
              <div>
                <h3 className="text-xs font-mono font-bold text-stone-700 uppercase mb-2">
                  Target File Extent Allocation on Physical Disk
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPathData.extents.map((ext, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-orange-50/60 border border-orange-200 text-xs font-mono">
                      <div className="font-bold text-orange-900 mb-1">Extent #{idx + 1}</div>
                      <div className="text-stone-700">Start Physical Block: <strong>{ext.startBlock}</strong></div>
                      <div className="text-stone-700">Contiguous Length: <strong>{ext.length} blocks</strong> ({ext.length * 4} KB)</div>
                      <div className="text-stone-500 text-[11px] mt-1">Logical File Offset: {ext.logicalRange}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Interactive Engine 2: Inode vs Hard Link vs Symlink Lifecycle */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Link2 className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Inode vs Hard Link vs Symbolic Link Lifecycle Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Toggle creating and unlinking directory entries to observe link count decrements and when data blocks are truly freed.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={() => setHasOriginal(!hasOriginal)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-colors ${
                    hasOriginal
                      ? "bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100"
                      : "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                  }`}
                >
                  {hasOriginal ? "Unlink report.txt" : "Restore report.txt"}
                </button>
                <button
                  onClick={() => setHasHardlink(!hasHardlink)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-colors ${
                    hasHardlink
                      ? "bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100"
                      : "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                  }`}
                >
                  {hasHardlink ? "Unlink final-report.txt" : "Create Hard Link"}
                </button>
                <button
                  onClick={() => setHasSymlink(!hasSymlink)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-colors ${
                    hasSymlink
                      ? "bg-stone-100 text-stone-700 border-stone-300"
                      : "bg-blue-50 text-blue-700 border-blue-300"
                  }`}
                >
                  {hasSymlink ? "Remove latest.txt" : "Create Symlink"}
                </button>
              </div>

              {/* Visual Table */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Directory Entries */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono font-bold text-stone-700 uppercase mb-3">
                    Directory Entries (dentries)
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className={`p-2.5 rounded-xl border flex justify-between ${hasOriginal ? "bg-white border-stone-200" : "bg-stone-100/60 border-dashed text-stone-400"}`}>
                      <span>report.txt</span>
                      <span>{hasOriginal ? "→ Inode 4201" : "[Unlinked]"}</span>
                    </div>
                    <div className={`p-2.5 rounded-xl border flex justify-between ${hasHardlink ? "bg-white border-stone-200" : "bg-stone-100/60 border-dashed text-stone-400"}`}>
                      <span>final-report.txt (Hard)</span>
                      <span>{hasHardlink ? "→ Inode 4201" : "[Unlinked]"}</span>
                    </div>
                    <div className={`p-2.5 rounded-xl border flex justify-between ${hasSymlink ? isSymlinkBroken ? "bg-rose-50 border-rose-300 text-rose-800" : "bg-blue-50 border-blue-300 text-blue-800" : "bg-stone-100/60 border-dashed text-stone-400"}`}>
                      <span>latest.txt (Symlink)</span>
                      <span>{hasSymlink ? isSymlinkBroken ? "DANGLING ✗" : "→ 'report.txt'" : "[Unlinked]"}</span>
                    </div>
                  </div>
                </div>

                {/* Inode 4201 Card */}
                <div className={`p-4 rounded-2xl border flex flex-col justify-between ${dataBlocksFreed ? "bg-rose-50 border-rose-300" : "bg-white border-orange-300 ring-1 ring-orange-200"}`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold uppercase text-stone-500">
                        Target Inode Structure
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${dataBlocksFreed ? "bg-rose-600 text-white" : "bg-orange-100 text-orange-800"}`}>
                        {dataBlocksFreed ? "INODE DEALLOCATED" : "INODE ACTIVE"}
                      </span>
                    </div>
                    <div className="text-2xl font-black font-mono text-stone-900 my-1">
                      Inode #4201
                    </div>
                    <div className="text-xs font-mono text-stone-600 space-y-1 mt-2">
                      <div>Hard Link Count (st_nlink): <strong className={linkCount > 0 ? "text-emerald-700" : "text-rose-600"}>{linkCount}</strong></div>
                      <div>Permissions: -rw-r--r-- (0644)</div>
                      <div>UID/GID: 1000 / 1000</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-stone-200 text-[11px] text-stone-600">
                    {dataBlocksFreed
                      ? "Link count reached 0: kernel marks inode & data blocks free in allocation bitmap!"
                      : "File data survives as long as at least 1 hard link remains active."}
                  </div>
                </div>

                {/* Storage Blocks Card */}
                <div className={`p-4 rounded-2xl border flex flex-col justify-between ${dataBlocksFreed ? "bg-stone-100 border-dashed border-stone-300 text-stone-400" : "bg-emerald-50/70 border-emerald-300 text-emerald-900"}`}>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase mb-2">
                      Physical Storage Extents
                    </div>
                    <div className="text-xl font-black font-mono my-1">
                      {dataBlocksFreed ? "[Blocks Reclaimed]" : "Block 142080 (4096 B)"}
                    </div>
                    <p className="text-xs mt-2 leading-relaxed font-sans">
                      {dataBlocksFreed
                        ? "Storage blocks returned to the filesystem free-space bitmap for future allocations."
                        : "Actual byte content stored on NVMe storage media."}
                    </p>
                  </div>
                  <div className="text-[11px] font-mono mt-3 pt-3 border-t border-black/10">
                    Status: {dataBlocksFreed ? "Free in bitmap" : "Allocated & Protected"}
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Engine 3: Journaling & Crash Consistency Stepper */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <Save className="text-orange-600" size={24} />
                    Journaling & Crash Consistency Stepper
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Step through the 5 phases of an ext4 journal transaction and simulate power cuts to verify recovery behavior.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setJournalStepIndex((prev) => Math.max(0, prev - 1));
                      setSimulatedCrash(false);
                    }}
                    disabled={journalStepIndex === 0}
                    className="p-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition-colors"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setJournalStepIndex((prev) => Math.min(JOURNAL_STEPS.length - 1, prev + 1));
                      setSimulatedCrash(false);
                    }}
                    disabled={journalStepIndex >= JOURNAL_STEPS.length - 1}
                    className="p-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => setSimulatedCrash(!simulatedCrash)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-colors ${
                      simulatedCrash
                        ? "bg-rose-600 text-white border-rose-600 animate-pulse"
                        : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    {simulatedCrash ? "Power Cut Simulated!" : "Simulate Power Crash"}
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="grid grid-cols-5 gap-1 mb-6">
                {JOURNAL_STEPS.map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setJournalStepIndex(idx);
                      setSimulatedCrash(false);
                    }}
                    className={`h-2 rounded-full cursor-pointer transition-all ${
                      idx <= journalStepIndex ? "bg-orange-600" : "bg-stone-200"
                    }`}
                  />
                ))}
              </div>

              {/* Current Step Card */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase text-stone-500">
                    Phase {journalStepIndex + 1} of 5
                  </span>
                  <span className="text-xs font-mono font-bold text-orange-600">
                    ext4 ordered mode
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {currentJournalStep.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                  {currentJournalStep.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-3 border-t border-stone-200">
                  <div>Journal Area: <strong>{currentJournalStep.journalState}</strong></div>
                  <div>Final On-Disk Inode: <strong>{currentJournalStep.diskInodeState}</strong></div>
                </div>

                <div className="mt-3 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600">
                  <strong>Crash Analysis: </strong>{currentJournalStep.risk}
                </div>
              </div>

              {simulatedCrash && (
                <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-xs sm:text-sm text-rose-900">
                  <strong>Reboot Recovery Engine: </strong>
                  {journalStepIndex < 2
                    ? "Incomplete transaction without commit block. Kernel discards journal log. Filesystem remains structurally consistent!"
                    : "Valid Commit Record found in journal! Linux recovery driver replays the transaction, checkpoints the metadata, and restores filesystem state perfectly without errors."}
                </div>
              )}
            </section>

            {/* Interactive Engine 4: Page Cache Dirty Writeback & fsync() Buffer */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Gauge className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Page Cache Dirty Writeback & fsync() Buffer Visualizer
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Observe how dirty pages accumulate in RAM before writeback, and how fsync() forces an immediate hardware flush.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                    <span>Dirty Page Cache Volume:</span>
                    <span className="text-orange-600">{dirtyPagesMB} MiB Dirty RAM</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200}
                    step={8}
                    value={dirtyPagesMB}
                    onChange={(e) => {
                      setDirtyPagesMB(parseInt(e.target.value, 10));
                      setFsyncTriggered(false);
                    }}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                    <span>0 MiB (Clean)</span>
                    <span>80 MiB (Background pdflush)</span>
                    <span>160 MiB (Synchronous Throttle)</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setDirtyPagesMB(0);
                      setFsyncTriggered(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-orange-600 text-white font-mono text-xs font-bold hover:bg-orange-700 transition-colors shadow-xs"
                  >
                    Trigger fsync(fd) Flush
                  </button>
                  <button
                    onClick={() => {
                      setDirtyPagesMB(48);
                      setFsyncTriggered(false);
                    }}
                    className="px-3 py-2 rounded-xl bg-stone-100 text-stone-700 font-mono text-xs hover:bg-stone-200 transition-colors"
                  >
                    Reset
                  </button>
                </div>

                <div className={`p-5 rounded-2xl border ${pageCacheMetrics.badgeColor}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase">
                      Current Durability State
                    </span>
                    <span className="text-xs font-mono font-bold">
                      {pageCacheMetrics.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans mt-2 leading-relaxed">
                    {fsyncTriggered
                      ? "fsync() blocked until all dirty pages were physically written and confirmed by the storage controller's write cache. Data is durable against unexpected power loss!"
                      : dirtyPagesMB > 0
                      ? `${dirtyPagesMB} MiB of data has returned from write() calls into RAM, but is NOT yet written to storage media. A power cut right now loses this modified data!`
                      : "Page cache is clean. All data is synchronized on durable storage."}
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Engine 5: Terminal Simulation Sandbox */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Terminal className="text-orange-600" size={22} />
                  <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                    Linux Storage & Metadata Terminal Sandbox
                  </h2>
                </div>
                <div className="text-xs font-mono text-stone-500">Live Emulated Output</div>
              </div>

              {/* Command Presets */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "python3 fs_inspector.py docs/notes.txt notes-hardlink.txt notes-symlink.txt",
                  "stat docs/notes.txt && stat -L notes-symlink.txt",
                  "findmnt -o TARGET,SOURCE,FSTYPE,OPTIONS",
                  "cat /proc/meminfo | grep -E 'Cached|Buffers|Dirty|Writeback'",
                  "strace -e trace=%file python3 fs_inspector.py docs/notes.txt",
                ].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => setTerminalCommand(cmd)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-colors ${
                      terminalCommand === cmd
                        ? "bg-stone-900 text-orange-400 font-bold"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    $ {cmd.split(" ")[0]} {cmd.split(" ")[1] || ""}...
                  </button>
                ))}
              </div>

              <div className="rounded-2xl bg-[#1e1e24] text-stone-200 p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-stone-800 shadow-inner">
                <div className="flex items-center gap-2 text-stone-400 pb-3 mb-3 border-b border-stone-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs text-stone-300">bash — student@linux-vm: ~/fs-lab</span>
                </div>
                <div className="text-emerald-400 font-bold mb-2">$ {terminalCommand}</div>
                <pre className="text-stone-300 leading-relaxed whitespace-pre-wrap">{terminalOutput}</pre>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: MASTERY CHECKLIST                                              */}
        {/* ===================================================================== */}
        {activeTab === "checklist" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={24} />
                  Module 13 Engineering Competency Checklist
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Verify your engineering skills across filesystems, inode structures, crash recovery, and VFS interfaces.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-stone-700">
                  {completedChecklistCount} / 8 Completed
                </span>
                <div className="w-32 h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${(completedChecklistCount / 8) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "fd_vs_inode",
                  title: "File Descriptors vs Open File Descriptions vs Inodes",
                  desc: "Explain the three-tier descriptor architecture and why dup() and fork() share file offsets while independent open() calls do not.",
                },
                {
                  id: "hard_vs_symlink",
                  title: "Hard Links vs Symbolic Links",
                  desc: "Distinguish multiple dentries referencing the same inode number from independent symlink pointer files and dangling links.",
                },
                {
                  id: "extent_allocation",
                  title: "Extent-Based Block Allocation",
                  desc: "Calculate free-space bitmap size (N/8 bytes) and explain how extent (start, length) pairs eliminate multi-level indirect block overhead.",
                },
                {
                  id: "journal_recovery",
                  title: "Journaling & Crash Consistency Protocol",
                  desc: "Trace transaction commit barriers, ordered vs writeback mode, and explain how journal replay restores valid metadata without fsck.",
                },
                {
                  id: "vfs_mount",
                  title: "Linux Virtual Filesystem (VFS) & Mounts",
                  desc: "Explain struct file_operations dispatching and how mount namespaces isolate filesystem hierarchies inside containers.",
                },
                {
                  id: "pagecache_fsync",
                  title: "Page Cache Dirty Writeback & fsync()",
                  desc: "Distinguish volatile memory write visibility in the Page Cache from physical on-disk durability via fsync() and fdatasync().",
                },
                {
                  id: "ext4_xfs_btrfs",
                  title: "ext4 vs XFS vs Btrfs vs ZFS Trade-offs",
                  desc: "Compare in-place journaling filesystems against Copy-on-Write (CoW) architectures with native snapshots and data checksumming.",
                },
                {
                  id: "inspector_tool",
                  title: "Filesystem Metadata Inspector Implementation",
                  desc: "Implement a Python 3 CLI tool using os.lstat() to audit device IDs, inodes, permissions, links, and extent block allocations.",
                },
              ].map((item) => {
                const isChecked = checklist[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? "bg-emerald-50/60 border-emerald-300 ring-1 ring-emerald-200"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check size={14} />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">{item.title}</div>
                      <div className="text-xs text-stone-600 mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================================== */}
        {/* TAB 4: KNOWLEDGE CHECK QUIZ                                           */}
        {/* ===================================================================== */}
        {activeTab === "quiz" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                  <HelpCircle className="text-orange-600" size={24} />
                  Module 13 Knowledge Check
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Test your understanding of inodes, links, extent allocation, journaling, and storage durability.
                </p>
              </div>

              {showQuizResults ? (
                <div className="flex items-center gap-3">
                  <div className="text-sm font-mono font-bold text-stone-800">
                    Score:{" "}
                    <strong
                      className={
                        calculateScore() >= 5
                          ? "text-emerald-600"
                          : calculateScore() >= 3
                          ? "text-amber-600"
                          : "text-rose-600"
                      }
                    >
                      {calculateScore()} / {quizQuestions.length}
                    </strong>
                  </div>
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setShowQuizResults(false);
                    }}
                    className="px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white font-mono text-xs font-bold hover:bg-orange-700 disabled:opacity-40 transition-colors shadow-xs"
                >
                  Submit & Check Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                </button>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOption = quizAnswers[q.id];
                const isSubmitted = showQuizResults;
                const isCorrect = selectedOption === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      isSubmitted
                        ? isCorrect
                          ? "bg-emerald-50/50 border-emerald-200"
                          : "bg-rose-50/50 border-rose-200"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-sm sm:text-base font-bold text-stone-900">
                        {idx + 1}. {q.question}
                      </h3>
                      {isSubmitted && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase shrink-0 ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {isCorrect ? "Correct ✓" : "Incorrect ✗"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mt-3">
                      {q.options.map((option, optIdx) => {
                        const isChosen = selectedOption === optIdx;
                        let optionStyle =
                          "bg-white border-stone-200 hover:border-stone-300 text-stone-800";

                        if (isSubmitted) {
                          if (optIdx === q.correct) {
                            optionStyle = "bg-emerald-100/80 border-emerald-400 font-bold text-emerald-900";
                          } else if (isChosen && !isCorrect) {
                            optionStyle = "bg-rose-100/80 border-rose-400 text-rose-900";
                          } else {
                            optionStyle = "bg-white/60 border-stone-200 text-stone-500 opacity-60";
                          }
                        } else if (isChosen) {
                          optionStyle = "bg-orange-50 border-orange-500 ring-2 ring-orange-200 text-orange-900 font-medium";
                        }

                        return (
                          <div
                            key={optIdx}
                            onClick={() => !isSubmitted && handleSelectOption(q.id, optIdx)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${optionStyle}`}
                          >
                            <span>{option}</span>
                            {isSubmitted && optIdx === q.correct && (
                              <CheckCircle2 size={16} className="text-emerald-700 shrink-0 ml-2" />
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
          </section>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-12 pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/virtualization")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 12 (Advanced Memory, VMs & Containers)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/storage")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 14 (Storage & Disk Scheduling)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Filesystems & Storage Architecture"
        defaultMessage="Hello! Ask me any question about inodes, directory entries, hard links vs symlinks, ext4 extents, journaling, or page cache writeback!"
      />
    </div>
  );
}
