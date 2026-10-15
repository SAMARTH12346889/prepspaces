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
  Code,
  CornerDownRight,
  Flame,
  PowerOff,
  SlidersHorizontal,
  FolderTree,
  Folder,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 18                                 */
/* Linux Internals and Performance Diagnostics                                */
/* /proc · /sys · vmstat · iostat · perf · strace · PSI · Bottleneck Triage   */
/* -------------------------------------------------------------------------- */

export default function OSPerformanceDiagnostics() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeLesson, setActiveLesson] = useState("processes");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(41);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: System Bottleneck Diagnoser & Resource Matrix Engine         */
  /* -------------------------------------------------------------------------- */
  const [selectedBottleneck, setSelectedBottleneck] = useState("cpu");

  const bottleneckScenarios = {
    cpu: {
      title: "Case A: CPU-Bound Computation",
      summary: "Processor cores fully saturated by user execution loops. Queue of runnable tasks waiting for CPU time.",
      metrics: {
        usr: 96,
        sy: 3,
        wa: 0,
        id: 1,
        r: 12,
        b: 0,
        cs: 1400,
        si: 0,
        so: 0,
        psiCpu: "28.4%",
        psiMem: "0.0%",
        psiIo: "0.0%",
      },
      topSnippet: `PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 8492 app       20   0  184.2m  42.1m  12.4m R 394.2   0.5   2:14.30 python3 (4 worker threads)
 8493 app       20   0  184.2m  42.1m  12.4m R  98.5   0.5   0:33.21 python3 (worker-1)
 8494 app       20   0  184.2m  42.1m  12.4m R  98.1   0.5   0:33.19 python3 (worker-2)`,
      vmstatSnippet: `procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in    cs us sy id wa st
12  0      0 4124920  84120 2140200   0    0     0     8 4210  1412 96  3  1  0  0`,
      iostatSnippet: `Device            r/s     w/s     rkB/s     wkB/s   await  aqu-sz  %util
nvme0n1          0.00    1.20      0.00      4.80    0.20    0.01   0.20`,
      straceSnippet: `// strace reveals virtually ZERO system calls! Time spent in user CPU execution:
clock_gettime(CLOCK_MONOTONIC, {tv_sec=1420, tv_nsec=841200}) = 0 <0.000001>
// Tens of millions of math iterations executing purely in userspace...`,
      perfSnippet: `Samples: 15K of event 'cycles', Event count (approx.): 12891240182
Overhead  Command  Shared Object       Symbol
  88.42%  python3  slow_app.py         [.] cpu_work
   7.14%  python3  [kernel.kallsyms]   [k] timer_interrupt
   2.10%  python3  libpython3.11.so    [.] PyEval_EvalFrameDefault`,
      diagnosis: "Confirmed CPU Saturation. Tasks queued on CPU runqueues (r=12 on 8 cores). No I/O or memory pressure. Optimization target: Algorithmic complexity in cpu_work() or parallel scaling.",
    },
    memory: {
      title: "Case B: Memory Pressure & Swap Thrashing",
      summary: "System RAM exhausted. Linux active working set exceeds physical capacity, forcing continuous synchronous swapping.",
      metrics: {
        usr: 15,
        sy: 48,
        wa: 34,
        id: 3,
        r: 3,
        b: 5,
        cs: 24800,
        si: 8420,
        so: 12400,
        psiCpu: "8.2%",
        psiMem: "62.4%",
        psiIo: "38.1%",
      },
      topSnippet: `PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 9102 db        20   0   32.4g  15.1g   2.1m D  28.2  95.4   8:42.12 mysqld
   42 root      20   0       0      0      0 R  22.1   0.0   3:12.40 kswapd0
   43 root      20   0       0      0      0 D  14.2   0.0   1:54.10 kcompactd0`,
      vmstatSnippet: `procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in    cs us sy id wa st
 3  5 4124920 120440  12100 184200 8420 12400 34100 48200 14210 24800 15 48  3 34  0`,
      iostatSnippet: `Device            r/s     w/s     rkB/s     wkB/s   await  aqu-sz  %util
nvme0n1        820.00 1410.00  34100.00  48200.00   14.20    8.42  94.20`,
      straceSnippet: `// Process stalls during memory allocation; kernel forces direct reclaim & paging:
mmap(NULL, 1073741824, PROT_READ|PROT_WRITE, MAP_ANONYMOUS, -1, 0) = <0.482012>
// 482 milliseconds spent stalled waiting for page reclaim and swap writes!`,
      perfSnippet: `Samples: 12K of event 'cycles'
Overhead  Command   Shared Object      Symbol
  34.12%  kswapd0   [kernel.kallsyms]  [k] isolate_lru_pages
  22.45%  kswapd0   [kernel.kallsyms]  [k] shrink_page_list
  14.10%  mysqld    [kernel.kallsyms]  [k] handle_mm_fault`,
      diagnosis: "Confirmed Memory Exhaustion & Swap Thrashing. High si/so (swap in/out), kswapd0 dominating kernel CPU (sy=48%), and extreme Memory PSI stall (62.4%). Optimization target: Reduce process working set or provision RAM.",
    },
    io: {
      title: "Case C: Synchronous I/O Stalls & Wait",
      summary: "Tasks repeatedly blocking in uninterruptible sleep (D state) waiting for storage writeback and fsync() flushes.",
      metrics: {
        usr: 4,
        sy: 8,
        wa: 82,
        id: 6,
        r: 1,
        b: 8,
        cs: 3400,
        si: 0,
        so: 0,
        psiCpu: "1.1%",
        psiMem: "0.0%",
        psiIo: "78.4%",
      },
      topSnippet: `PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 7412 logger    20   0   42.1m  12.4m   4.1m D   2.1   0.2   0:12.40 python3 (io_work)
 7413 logger    20   0   42.1m  12.4m   4.1m D   1.9   0.2   0:11.80 python3 (io_work)
 7414 logger    20   0   42.1m  12.4m   4.1m D   1.8   0.2   0:11.50 python3 (io_work)`,
      vmstatSnippet: `procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in    cs us sy id wa st
 1  8      0 5142010 148200 1842000   0    0     0 84200  4210  3400  4  8  6 82  0`,
      iostatSnippet: `Device            r/s     w/s     rkB/s     wkB/s   await  aqu-sz  %util
nvme0n1          0.00 2410.00      0.00  84200.00   48.20   16.40  99.80`,
      straceSnippet: `// Repeated fsync calls taking 40 to 60 milliseconds each:
write(4, "xxxxxxxxxxxxxxxx...", 4096) = 4096 <0.000012>
fsync(4) = 0 <0.052140>
write(4, "xxxxxxxxxxxxxxxx...", 4096) = 4096 <0.000011>
fsync(4) = 0 <0.048910>`,
      perfSnippet: `Samples: 8K of event 'cycles'
Overhead  Command   Shared Object      Symbol
  48.20%  python3   [kernel.kallsyms]  [k] io_schedule
  24.10%  python3   [kernel.kallsyms]  [k] blk_mq_dispatch_rq_list
  11.40%  python3   [kernel.kallsyms]  [k] nvme_queue_rq`,
      diagnosis: "Confirmed Synchronous Storage Bottleneck. Tasks stalled in 'D' state (b=8), CPU wa=82%, await=48.2ms, and 78.4% I/O PSI stall. strace reveals repeated fsync() calls. Optimization target: Batch writes, asynchronous I/O, or group commit.",
    },
    lock: {
      title: "Case D: Lock Contention & Thread Serialization",
      summary: "Multiple threads running concurrently, but throughput stalls and CPU utilization is low because threads spend time waiting for shared locks.",
      metrics: {
        usr: 18,
        sy: 24,
        wa: 0,
        id: 58,
        r: 2,
        b: 0,
        cs: 98400,
        si: 0,
        so: 0,
        psiCpu: "4.2%",
        psiMem: "0.0%",
        psiIo: "0.0%",
      },
      topSnippet: `PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 6120 syncapp   20   0  380.2m  84.2m  14.2m S  42.1   0.8   1:12.40 python3 (8 threads)
 6121 syncapp   20   0  380.2m  84.2m  14.2m S   5.2   0.8   0:08.10 python3 (worker-1)
 6122 syncapp   20   0  380.2m  84.2m  14.2m S   5.1   0.8   0:08.05 python3 (worker-2)`,
      vmstatSnippet: `procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in    cs us sy id wa st
 2  0      0 6124000  94120 1410200   0    0     0     0 12410 98400 18 24 58  0  0`,
      iostatSnippet: `Device            r/s     w/s     rkB/s     wkB/s   await  aqu-sz  %util
nvme0n1          0.00    0.80      0.00      3.20    0.10    0.00   0.10`,
      straceSnippet: `// Rapid futex contention with threads repeatedly blocking and waking:
futex(0x7fff84, FUTEX_WAIT_BITSET_PRIVATE, 2, NULL, ...) = 0 <0.004120>
futex(0x7fff84, FUTEX_WAKE_PRIVATE, 1) = 1 <0.000018>
futex(0x7fff84, FUTEX_WAIT_BITSET_PRIVATE, 2, NULL, ...) = 0 <0.003980>`,
      perfSnippet: `Samples: 14K of event 'cycles'
Overhead  Command   Shared Object      Symbol
  42.10%  python3   [kernel.kallsyms]  [k] futex_wait_queue_me
  28.40%  python3   [kernel.kallsyms]  [k] futex_wake
  14.20%  python3   libpthread.so      [.] __pthread_mutex_lock`,
      diagnosis: "Confirmed Lock Contention. Low CPU usage (usr=18%, id=58%) despite 8 active threads. Massive context switches (cs=98,400/s) and futex_wait dominating perf trace. Optimization target: Lock striping, lock-free queues, or reducing critical section duration.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: Virtual Filesystems Explorer (/proc vs /sys vs /dev)         */
  /* -------------------------------------------------------------------------- */
  const [selectedVfsTab, setSelectedVfsTab] = useState("proc_status");

  const vfsData = {
    proc_status: {
      path: "/proc/8492/status",
      type: "Virtual Process Metadata (/proc)",
      content: `Name:   slow_app.py
Umask:  0022
State:  R (running)
Tgid:   8492
Ngid:   0
Pid:    8492
PPid:   3140
TracerPid:      0
Uid:    1000    1000    1000    1000
Gid:    1000    1000    1000    1000
FDSize: 256
Groups: 1000 4 24 27 30 46 110
VmPeak:   284120 kB
VmSize:   284120 kB
VmLck:         0 kB
VmPin:         0 kB
VmHWM:     48210 kB
VmRSS:     48210 kB
RssAnon:   34100 kB
RssFile:   14110 kB
RssShmem:      0 kB
VmData:    41200 kB
VmStk:       132 kB
VmExe:      2840 kB
VmLib:      8410 kB
Threads: 4`,
      explanation:
        "VmRSS indicates the actual physical RAM frames currently resident for this process (48.2 MB). State shows 'R' (currently running on a CPU core). Threads count shows 4 concurrent execution threads within this thread group.",
    },
    proc_meminfo: {
      path: "/proc/meminfo",
      type: "System-Wide Memory Counters (/proc)",
      content: `MemTotal:       16312480 kB
MemFree:         4124920 kB
MemAvailable:    8412400 kB
Buffers:           84120 kB
Cached:          4310200 kB
SwapCached:            0 kB
Active:          6412000 kB
Inactive:        3841000 kB
Active(anon):    2140200 kB
Inactive(anon):   841000 kB
Active(file):    4271800 kB
Inactive(file):  3000000 kB
Dirty:               420 kB
Writeback:             0 kB
AnonPages:       2981200 kB
Mapped:           412000 kB
Shmem:            124000 kB
SwapTotal:       4194300 kB
SwapFree:        4194300 kB`,
      explanation:
        "MemAvailable (8.4 GB) is the true metric for available memory, not MemFree. Linux uses idle RAM for page cache (Cached: 4.3 GB), which is immediately reclaimable when applications request allocations.",
    },
    proc_psi: {
      path: "/proc/pressure/memory",
      type: "Pressure Stall Information (PSI)",
      content: `some avg10=2.41 avg60=1.12 avg300=0.45 total=14210402
full avg10=0.82 avg60=0.31 avg300=0.08 total=4821010`,
      explanation:
        "PSI quantifies workload degradation due to resource starvation. 'some avg10=2.41' means processes spent 2.41% of wall-clock time stalled waiting for memory over the last 10 seconds. 'full' indicates all CPUs were completely idle waiting for memory paging.",
    },
    sys_block: {
      path: "/sys/block/nvme0n1/queue/scheduler",
      type: "Device Model & Controller Controls (/sys)",
      content: `[none] mq-deadline kyber bfq`,
      explanation:
        "The active I/O scheduler is indicated in brackets '[none]'. For high-IOPS NVMe flash drives, 'none' allows hardware queues to handle scheduling directly with zero kernel scheduler lock contention.",
    },
    dev_nodes: {
      path: "/dev/null & /dev/nvme0n1",
      type: "Device Nodes (/dev)",
      content: `crw-rw-rw- 1 root root  1, 3 Oct 15 10:00 /dev/null
brw-rw---- 1 root disk 259, 0 Oct 15 10:00 /dev/nvme0n1`,
      explanation:
        "Device nodes are communication portals to kernel drivers. 'c' indicates a character device (stream), while 'b' indicates a block device (sector addressable). Major/minor numbers (1,3 and 259,0) identify driver dispatch tables.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: Linux Diagnostic Decision Tree                               */
  /* -------------------------------------------------------------------------- */
  const [selectedSymptom, setSelectedSymptom] = useState("low_cpu_slow");

  const decisionTree = {
    low_cpu_slow: {
      symptom: "Application is slow, but CPU utilization is low (< 20%)",
      recipe: [
        { cmd: "vmstat 1", purpose: "Check 'b' (blocked tasks) and 'wa' (I/O wait). If b > 0 and wa > 40%, it's storage I/O wait." },
        { cmd: "strace -f -T -p <PID>", purpose: "Observe blocking syscalls. Are threads waiting in futex() (lock contention) or read()/poll() (network/disk)?" },
        { cmd: "iostat -xz 1", purpose: "Verify if disk await latency is elevated (> 20ms) or queue depth aqu-sz is high." },
        { cmd: "cat /proc/<PID>/stack", purpose: "Inspect kernel call stacks to identify exactly which mutex or driver the threads are sleeping in." },
      ],
      misdiagnosisTrap: "Assuming low CPU means the application is healthy or idling. Often indicates severe lock serialization or blocking storage I/O.",
    },
    swapping: {
      symptom: "System becomes sluggish; memory appears 95% full",
      recipe: [
        { cmd: "free -h", purpose: "Look at 'available', NOT 'free'. If available is high, RAM is simply cached and system is healthy." },
        { cmd: "vmstat 1", purpose: "Inspect 'si' (swap-in) and 'so' (swap-out). If non-zero continuously, active memory thrashing is occurring." },
        { cmd: "cat /proc/pressure/memory", purpose: "Check PSI stall percentages. avg10 > 20% confirms catastrophic memory pressure." },
        { cmd: "ps -eo pid,pmem,rss,comm --sort=-rss | head", purpose: "Identify the top physical RAM consumers (RSS, not VSZ)." },
      ],
      misdiagnosisTrap: "Panicking because 'free' is near zero. Linux aggressively uses free RAM for page caching.",
    },
    tail_latency: {
      symptom: "Occasional p99 tail latency spikes to 500ms while average latency is 2ms",
      recipe: [
        { cmd: "dmesg -T", purpose: "Check for kernel warnings, memory allocation stalls, or hardware throttling events." },
        { cmd: "cat /proc/interrupts", purpose: "Inspect CPU interrupt distribution. Is one CPU core overwhelmed handling all NIC network interrupts?" },
        { cmd: "perf record -e sched:sched_switch -g -p <PID>", purpose: "Sample scheduler context switches to detect voluntary vs involuntary preemption delays." },
        { cmd: "strace -f -tt -T -e trace=fsync,fdatasync", purpose: "Detect periodic synchronous disk flushes blocking the main event loop." },
      ],
      misdiagnosisTrap: "Relying solely on 10-second averages (e.g. top or uptime). Tail spikes disappear inside averaged metrics.",
    },
    uninterruptible_d: {
      symptom: "Process stuck in 'D' state; cannot be killed even with kill -9",
      recipe: [
        { cmd: "cat /proc/<PID>/stack", purpose: "Read the kernel execution stack to see the exact driver function waiting on hardware." },
        { cmd: "dmesg --level=err,warn", purpose: "Look for NVMe timeouts, SATA resets, or network filesystem (NFS) disconnects." },
        { cmd: "cat /proc/loadavg", purpose: "Note that tasks in 'D' state inflate load average even when consuming 0% CPU." },
      ],
      misdiagnosisTrap: "Trying repeated kill -9 commands. A process in D state does not process signals until the kernel I/O request finishes.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* QUIZ STATE & DATA                                                          */
  /* -------------------------------------------------------------------------- */
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What does the Linux Load Average metric primarily represent?",
      options: [
        "The instantaneous percentage of CPU utilization across all cores",
        "The average number of tasks that are runnable (R) or in uninterruptible sleep (D) over time",
        "The percentage of free physical RAM remaining in the system",
        "The rate of disk write throughput in megabytes per second",
      ],
      correctIndex: 1,
      explanation:
        "Linux load average is not a CPU percentage. It measures the average demand for compute resources, counting tasks currently executing, waiting on CPU runqueues (R), and blocked on uninterruptible kernel I/O (D).",
    },
    {
      id: 2,
      question: "Which virtual filesystem interface exposes per-process memory mappings, open file descriptors, and runtime status?",
      options: [
        "/dev",
        "/sys only",
        "/proc/<PID>",
        "/boot",
      ],
      correctIndex: 2,
      explanation:
        "/proc is a virtual pseudo-filesystem created dynamically by the kernel. Subdirectories named after process IDs (/proc/<PID>) expose status, fd, maps, and I/O counters for that specific process.",
    },
    {
      id: 3,
      question: "Which tool is best suited for sampling CPU instruction hot spots and call stacks with minimal performance overhead?",
      options: [
        "perf",
        "journalctl only",
        "free",
        "ls",
      ],
      correctIndex: 0,
      explanation:
        "Linux perf uses hardware performance monitoring counters (PMUs) and kernel tracepoints to sample instruction execution and call stacks with low overhead, generating statistical flame graphs and symbol profiles.",
    },
    {
      id: 4,
      question: "What does sustained swap-in/out activity (si/so in vmstat) combined with high Memory PSI stalls indicate?",
      options: [
        "The physical CPU hardware has a broken core",
        "Severe memory pressure and active page thrashing",
        "The filesystem is always physically corrupted",
        "A multi-threaded deadlock is definitively proven",
      ],
      correctIndex: 1,
      explanation:
        "When active anonymous application memory exceeds physical RAM, the kernel is forced to swap pages out to disk and read them back in on demand (si/so). Combined with high PSI memory stalls, this proves active memory thrashing.",
    },
    {
      id: 5,
      question: "What does strace primarily observe during an application's execution?",
      options: [
        "Every single CPU assembly instruction executed in user space",
        "System calls crossing the user/kernel boundary and received signals",
        "Only motherboard and disk drive temperature sensors",
        "Only kernel boot timestamps",
      ],
      correctIndex: 1,
      explanation:
        "strace intercepts and records system calls made by a process and signals received, capturing system call names, arguments, return codes, and elapsed execution duration.",
    },
    {
      id: 6,
      question: "Why should an engineer correlate multiple diagnostic tools before concluding that storage I/O is the bottleneck?",
      options: [
        "Because all Linux performance tools always output identical data",
        "Because high device utilization (%util) alone does not prove an application bottleneck without measuring request latency and blocked tasks",
        "Because correlating tools completely removes all measurement overhead",
        "Because modern SSDs cannot experience hardware degradation",
      ],
      correctIndex: 1,
      explanation:
        "A single metric can be misleading. High disk %util on modern NVMe drives may simply indicate parallel queue saturation without latency spikes. Engineers correlate iostat (await), vmstat (b, wa), and strace (-T) to confirm that the application is actually waiting on I/O.",
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
        currentModuleId="diagnostics"
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
          <span className="text-stone-800 font-medium">Module 18: Linux Internals & Performance Diagnostics</span>
        </div>

        {/* Module Header Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e7e3da] shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-semibold text-xs tracking-wide uppercase mb-3">
                <Activity size={14} />
                <span>Operating Systems Engineering · Module 18</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
                Linux Internals & Performance Diagnostics
              </h1>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                Investigate Linux like a production systems engineer: measure first, form hypotheses, inspect kernel interfaces (/proc, /sys, /dev), profile system calls, interpret vmstat and iostat, distinguish CPU saturation from lock contention, and solve slow application bottlenecks with evidence.
              </p>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Core Principle:</span>
                <span className="text-xs font-bold text-stone-800">Measure First, Never Guess</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Diagnostic Suite:</span>
                <span className="text-xs font-bold text-[#ea580c]">vmstat · iostat · perf · strace</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Lab Project:</span>
                <span className="text-xs font-bold text-stone-800">slow_app.py Triage</span>
              </div>
            </div>
          </div>

          {/* Lesson Selector Tabs */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-2">
            {[
              { id: "processes", label: "1. Processes & States", icon: Cpu },
              { id: "vfs", label: "2. /proc, /sys & /dev", icon: FolderTree },
              { id: "systemd", label: "3. systemd & Logs", icon: Terminal },
              { id: "cpu_mem", label: "4. CPU & Memory Metrics", icon: BarChart2 },
              { id: "tools", label: "5. Diagnostic Toolset", icon: Gauge },
              { id: "strace", label: "6. Syscall Profiling", icon: FileText },
              { id: "bottlenecks", label: "7. Bottleneck Triage", icon: Search },
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
        {/* LESSON 1: LINUX PROCESSES, THREADS & STATES                        */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "processes" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Cpu size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    1. Linux Processes, Threads, and Execution States
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Process vs Thread · clone() flags · Process state codes (R, S, D, T, Z) · CPU utilization caveats
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  In Linux, both processes and threads are represented internally by identical kernel task structures (<code>task_struct</code>). The <code>clone()</code> syscall controls the degree of sharing between parent and child:
                </p>

                <div className="overflow-x-auto not-prose my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                        <th className="py-2.5 px-3 font-semibold">State Code</th>
                        <th className="py-2.5 px-3 font-semibold">Description</th>
                        <th className="py-2.5 px-3 font-semibold">Diagnostic Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-emerald-700">R</td>
                        <td className="py-2.5 px-3">Running or Runnable</td>
                        <td className="py-2.5 px-3">Executing on a CPU core or waiting in scheduler runqueue.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-blue-700">S</td>
                        <td className="py-2.5 px-3">Interruptible Sleep</td>
                        <td className="py-2.5 px-3">Waiting on an event (timer, socket, pipe). Wakes on signals.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-red-700">D</td>
                        <td className="py-2.5 px-3">Uninterruptible Sleep</td>
                        <td className="py-2.5 px-3">Waiting on hardware/disk I/O or kernel lock. Does NOT wake on signals!</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-amber-700">T</td>
                        <td className="py-2.5 px-3">Stopped or Traced</td>
                        <td className="py-2.5 px-3">Suspended by job control (SIGSTOP/Ctrl+Z) or debugger breakpoint.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-purple-700">Z</td>
                        <td className="py-2.5 px-3">Zombie (Defunct)</td>
                        <td className="py-2.5 px-3">Exited, but parent process has not collected status via waitpid().</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 not-prose my-4">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <AlertTriangle size={16} />
                    Utilization != Useful Progress
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    A thread showing 100% CPU utilization may be doing productive work, or it may be spinning in an infinite loop, thrashing on lock contention, or repeatedly retrying failed syscalls. Never assume high CPU equals high productivity.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 2: VIRTUAL FILESYSTEMS (/proc, /sys, /dev)                  */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "vfs" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <FolderTree size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    2. Kernel Interfaces: /proc, /sys, and /dev
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Virtual filesystems · Process inspection · Device hierarchies · Load Average truth
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Linux implements the Unix philosophy <em>"everything is a file"</em> by exposing kernel runtime state through three distinct virtual filesystems:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Virtual FS 1</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">/proc (Process & OS Info)</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Dynamic window into kernel memory, process table, open file descriptors, memory mappings, and CPU stats.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Virtual FS 2</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">/sys (Unified Device Model)</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Structured device hierarchy, block device queues, cgroups v2, and tunable kernel configuration parameters.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Virtual FS 3</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">/dev (Device Portals)</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Character and block device nodes (e.g. <code>/dev/null</code>, <code>/dev/nvme0n1</code>) routing I/O directly to drivers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: Virtual Filesystem Explorer */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Folder size={20} className="text-[#ea580c]" />
                Interactive Kernel Virtual Filesystem Explorer
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Inspect live mock outputs from `/proc/status`, `/proc/meminfo`, `/proc/pressure/memory`, and `/sys`.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: "proc_status", label: "/proc/<PID>/status" },
                  { id: "proc_meminfo", label: "/proc/meminfo" },
                  { id: "proc_psi", label: "/proc/pressure/memory" },
                  { id: "sys_block", label: "/sys/block/.../scheduler" },
                  { id: "dev_nodes", label: "/dev Device Nodes" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedVfsTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedVfsTab === tab.id
                        ? "bg-[#ea580c] text-white shadow-xs"
                        : "bg-stone-100 hover:bg-stone-200/70 text-stone-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {(() => {
                const cur = vfsData[selectedVfsTab];
                return (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                      <div>
                        <span className="text-xs text-stone-500 font-mono">{cur.type}</span>
                        <h4 className="text-base font-bold text-stone-900">{cur.path}</h4>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
                      <pre>{cur.content}</pre>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="text-stone-900">Engineering Interpretation: </strong>
                      {cur.explanation}
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 3: SYSTEMD & BOOT DIAGNOSTICS                               */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "systemd" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Terminal size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    3. systemd, journald, and Kernel Ring Buffer Diagnostics
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    systemctl status · journalctl filtering · systemd-analyze critical-chain · dmesg OOM triage
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  When services fail or slow down, Linux engineers correlate user-space systemd service logs with kernel ring buffer messages:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">dmesg --level=err,warn</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">Kernel Ring Buffer</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Catches Out-of-Memory (OOM) killer terminations, NVMe timeout resets, PCIe link errors, and filesystem write failures.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">journalctl -u app.service -b</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">Systemd Service Journal</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Filters log events strictly for a specific service unit since the current system boot, preserving stdout/stderr output.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 4: CPU SCHEDULING & MEMORY METRICS                          */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "cpu_mem" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <BarChart2 size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    4. CPU Scheduling, Memory Observability & PSI
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    vmstat 1 breakdown · RSS vs VSZ · Pressure Stall Information (PSI)
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  <code>vmstat 1</code> is the standard workhorse for real-time system performance triage:
                </p>

                <div className="overflow-x-auto not-prose my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                        <th className="py-2.5 px-3 font-semibold">Column</th>
                        <th className="py-2.5 px-3 font-semibold">Meaning</th>
                        <th className="py-2.5 px-3 font-semibold">Warning Threshold</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">r</td>
                        <td className="py-2.5 px-3">Runnable tasks awaiting CPU time</td>
                        <td className="py-2.5 px-3 text-red-700 font-semibold">&gt; Total Core Count</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">b</td>
                        <td className="py-2.5 px-3">Tasks in uninterruptible sleep (D state)</td>
                        <td className="py-2.5 px-3 text-red-700 font-semibold">&gt; 0 persistently (I/O stall)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">wa</td>
                        <td className="py-2.5 px-3">CPU % idle while waiting on outstanding I/O</td>
                        <td className="py-2.5 px-3 text-red-700 font-semibold">&gt; 20% (storage bottleneck)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">si / so</td>
                        <td className="py-2.5 px-3">Swap-in / Swap-out rate (KB/sec)</td>
                        <td className="py-2.5 px-3 text-red-700 font-semibold">&gt; 0 persistently (RAM thrashing)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 5: DIAGNOSTIC TOOLSET & METRICS                             */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "tools" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Gauge size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    5. Linux Performance Tools: iostat, perf, and Latency
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    iostat -xz 1 metrics · perf stat & record · Mean vs p99 tail latency
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Diagnosing complex systems requires selecting the right instrument for each tier:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">iostat -xz 1</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">Block Device Latency & Util</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Focus on <code>await</code> (average completion latency in ms) and <code>aqu-sz</code> (queue depth). High <code>%util</code> alone does not prove an NVMe is bottlenecked if <code>await</code> remains sub-millisecond!
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">perf record -g -- ./app</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">CPU Hotspot Call Graphs</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Samples instruction execution stacks at 99Hz to pinpoint exact hot functions in user code or the kernel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Decision Tree */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <SlidersHorizontal size={20} className="text-[#ea580c]" />
                Interactive Linux Diagnostic Decision Tree
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Select a symptom to reveal the precise diagnostic recipe, command sequence, and common misdiagnosis traps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
                {[
                  { id: "low_cpu_slow", label: "Slow, but Low CPU (<20%)" },
                  { id: "swapping", label: "Sluggish & High Memory" },
                  { id: "tail_latency", label: "p99 Tail Latency Spikes" },
                  { id: "uninterruptible_d", label: "Processes in 'D' State" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSymptom(item.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedSymptom === item.id
                        ? "bg-[#ea580c] text-white border-[#ea580c] shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200"
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.label}</span>
                  </button>
                ))}
              </div>

              {(() => {
                const cur = decisionTree[selectedSymptom];
                return (
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="border-b border-stone-200 pb-3">
                      <span className="text-xs text-stone-500 font-mono">OBSERVED PRODUCTION SYMPTOM</span>
                      <h4 className="text-base font-bold text-stone-900 mt-0.5">{cur.symptom}</h4>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                        Ordered Diagnostic Recipe:
                      </span>
                      {cur.recipe.map((step, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white border border-stone-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="font-mono font-bold text-[#ea580c]">{step.cmd}</span>
                          <span className="text-stone-700">{step.purpose}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-300 text-xs text-amber-900">
                      <strong>Common Misdiagnosis Trap: </strong> {cur.misdiagnosisTrap}
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 6: SYSTEM-CALL PROFILING                                    */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "strace" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <FileText size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    6. System-Call Profiling and Bottleneck Diagnosis
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    strace -c vs -T · Measurement perturbation · Profiling waiting vs computation
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  <code>strace</code> captures every syscall made by a process. Use <code>-c</code> for summary profiling and <code>-T</code> to measure syscall duration:
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto not-prose my-4">
                  <pre>{`$ strace -f -c ./app
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
 84.12    4.120400       41204       100           fsync
 12.40    0.608100          60     10000           write
  2.10    0.102800          10     10000           read
------ ----------- ----------- --------- --------- ----------------
100.00    4.831300                 20100           total`}</pre>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 not-prose my-4">
                  <h4 className="font-bold text-red-900 flex items-center gap-2 mb-1">
                    <AlertTriangle size={16} />
                    The Observer Effect (Perturbation Warning)
                  </h4>
                  <p className="text-xs text-red-800 leading-relaxed">
                    <code>strace</code> stops execution on every syscall entry and exit. On system-call-heavy applications, attaching <code>strace</code> can slow execution by <strong>2x to 10x</strong>! Always record baseline latency without strace first.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 7: DISTINGUISHING BOTTLENECKS & CAPSTONE LAB                */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "bottlenecks" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Search size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    7. Distinguishing CPU vs Memory vs I/O vs Lock Contention
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Resource matrix · slow_app.py capstone · Performance report structure
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  The essence of performance engineering is connecting observed metrics to a single justified root cause:
                </p>
              </div>
            </div>

            {/* SIMULATOR 1: System Bottleneck Diagnoser */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Activity size={20} className="text-[#ea580c]" />
                Interactive System Bottleneck & Resource Matrix Diagnoser
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Switch between 4 production failure modes to observe how vmstat, top, iostat, strace, and perf correlate.
              </p>

              {/* Scenario Toggle */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { id: "cpu", label: "1. CPU-Bound Loop" },
                  { id: "memory", label: "2. Swap Thrashing" },
                  { id: "io", label: "3. Storage I/O Stalls" },
                  { id: "lock", label: "4. Lock Contention" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedBottleneck(s.id)}
                    className={`p-3 rounded-2xl text-xs font-bold text-left border transition-all ${
                      selectedBottleneck === s.id
                        ? "bg-[#ea580c] text-white border-[#ea580c] shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {(() => {
                const cur = bottleneckScenarios[selectedBottleneck];
                return (
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <h4 className="font-bold text-stone-900 text-base">{cur.title}</h4>
                      <p className="text-xs text-stone-600 mt-1">{cur.summary}</p>
                    </div>

                    {/* Gauges Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                        <span className="text-[11px] text-stone-500 font-medium">CPU User (%usr)</span>
                        <div className="text-2xl font-mono font-bold text-stone-900 mt-1">{cur.metrics.usr}%</div>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                        <span className="text-[11px] text-stone-500 font-medium">Kernel CPU (%sy)</span>
                        <div className="text-2xl font-mono font-bold text-stone-900 mt-1">{cur.metrics.sy}%</div>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                        <span className="text-[11px] text-stone-500 font-medium">I/O Wait (%wa)</span>
                        <div className={`text-2xl font-mono font-bold mt-1 ${cur.metrics.wa > 30 ? "text-red-600" : "text-stone-900"}`}>
                          {cur.metrics.wa}%
                        </div>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                        <span className="text-[11px] text-stone-500 font-medium">Runnable (r) vs Blocked (b)</span>
                        <div className="text-2xl font-mono font-bold text-stone-900 mt-1">
                          {cur.metrics.r} / {cur.metrics.b}
                        </div>
                      </div>
                    </div>

                    {/* Tool Terminal Outputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-stone-700 block mb-1">top -H -p &lt;PID&gt;</span>
                        <div className="p-3 bg-stone-900 text-stone-200 font-mono text-[11px] rounded-xl overflow-x-auto">
                          <pre>{cur.topSnippet}</pre>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-stone-700 block mb-1">vmstat 1</span>
                        <div className="p-3 bg-stone-900 text-stone-200 font-mono text-[11px] rounded-xl overflow-x-auto">
                          <pre>{cur.vmstatSnippet}</pre>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-stone-700 block mb-1">iostat -xz 1</span>
                        <div className="p-3 bg-stone-900 text-stone-200 font-mono text-[11px] rounded-xl overflow-x-auto">
                          <pre>{cur.iostatSnippet}</pre>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-stone-700 block mb-1">perf report / strace</span>
                        <div className="p-3 bg-stone-900 text-stone-200 font-mono text-[11px] rounded-xl overflow-x-auto">
                          <pre>{cur.perfSnippet}</pre>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                      <strong>Diagnostic Conclusion: </strong> {cur.diagnosis}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Capstone Lab Scripts */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Code size={20} className="text-[#ea580c]" />
                Capstone Lab: slow_app.py and Performance Report
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Use this Python workload script to generate realistic CPU, I/O, and lock bottlenecks on your test machine.
              </p>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto relative mb-6">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `import argparse
import os
import time
import threading
import tempfile

def cpu_work(seconds):
    end = time.monotonic() + seconds
    value = 1
    while time.monotonic() < end:
        value = (value * 1664525 + 1013904223) & 0xFFFFFFFF
    return value

def io_work(seconds):
    end = time.monotonic() + seconds
    with tempfile.TemporaryDirectory(prefix="os-lab-") as directory:
        path = os.path.join(directory, "sample.bin")
        chunk = b"x" * 4096
        with open(path, "wb") as file:
            while time.monotonic() < end:
                file.write(chunk)
                file.flush()
                os.fsync(file.fileno())

def lock_work(seconds):
    lock = threading.Lock()
    counter = [0]
    stop = threading.Event()

    def worker():
        while not stop.is_set():
            with lock:
                counter[0] += 1

    threads = [threading.Thread(target=worker) for _ in range(8)]
    for t in threads:
        t.start()
    time.sleep(seconds)
    stop.set()
    for t in threads:
        t.join()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["cpu", "io", "lock"])
    parser.add_argument("--seconds", type=int, default=5)
    args = parser.parse_args()

    print(f"Running {args.mode} mode for {args.seconds}s...")
    t0 = time.monotonic()
    if args.mode == "cpu":
        cpu_work(args.seconds)
    elif args.mode == "io":
        io_work(args.seconds)
    elif args.mode == "lock":
        lock_work(args.seconds)
    print(f"Finished in {time.monotonic() - t0:.2f}s")
`,
                      "slow_app_py"
                    )
                  }
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                  title="Copy slow_app.py"
                >
                  {copiedSnippet === "slow_app_py" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
                <pre>{`# slow_app.py - Controlled Bottleneck Demonstration
import argparse, os, time, threading, tempfile

def cpu_work(seconds):
    end = time.monotonic() + seconds
    val = 1
    while time.monotonic() < end:
        val = (val * 1664525 + 1013904223) & 0xFFFFFFFF
    return val

def io_work(seconds):
    end = time.monotonic() + seconds
    with tempfile.TemporaryDirectory(prefix="os-lab-") as directory:
        path = os.path.join(directory, "sample.bin")
        chunk = b"x" * 4096
        with open(path, "wb") as f:
            while time.monotonic() < end:
                f.write(chunk)
                f.flush()
                os.fsync(f.fileno())

def lock_work(seconds):
    lock = threading.Lock()
    counter = [0]
    stop = threading.Event()
    def worker():
        while not stop.is_set():
            with lock: counter[0] += 1
    threads = [threading.Thread(target=worker) for _ in range(8)]
    for t in threads: t.start()
    time.sleep(seconds)
    stop.set()
    for t in threads: t.join()`}</pre>
              </div>

              {/* Report Template Card */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                    Diagnostic Report Template
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `# Linux Performance Investigation Report

## 1. Environment & Baseline
- Date: $(date)
- Kernel: $(uname -a)
- Cores: $(nproc) | RAM: $(free -h | grep Mem)
- Initial Uptime & Load: $(uptime)

## 2. Workload Tested
- Command: python3 slow_app.py [cpu|io|lock] --seconds 5
- Observed Wall Time: 5.02s

## 3. Evidence Collected
- vmstat 1: r=12, b=0, us=96, sy=3, wa=0
- top -H: 4 worker threads running at 98% CPU each
- perf report: 88.4% time spent in cpu_work()
- iostat: await=0.20ms, %util=0.2% (storage healthy)

## 4. Conclusion & Diagnosis
- Bottleneck: CPU-Bound Execution
- Confidence: HIGH (multiple correlated measurements)
- Next Experiment: Profile algorithmic optimization and benchmark vectorized math.
`,
                        "report_template"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-50 transition-colors"
                  >
                    {copiedSnippet === "report_template" ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                    <span>Copy Markdown Template</span>
                  </button>
                </div>
                <p className="text-xs text-stone-600">
                  Connect observed metrics from <code>vmstat</code>, <code>top</code>, <code>iostat</code>, and <code>perf</code> directly to a justified conclusion.
                </p>
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
                      Module 18 Knowledge Check
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500">
                      Verify your ability to interpret Linux performance metrics, virtual filesystems, and diagnostic tools
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
                    Module 18 Mastery Checklist
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Track your engineering competence across Linux diagnostics, kernel virtual filesystems, and bottleneck triage
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
                  { key: "item1", label: "Differentiate Linux processes, threads, clone() flags, and execution states (R, S, D, T, Z)" },
                  { key: "item2", label: "Inspect /proc, /sys, and /dev and explain their virtual filesystem mechanisms" },
                  { key: "item3", label: "Triage systemd services, journald logs, and dmesg kernel OOM messages" },
                  { key: "item4", label: "Decode vmstat 1 fields: r, b, us, sy, wa, cs, in, and swap activity" },
                  { key: "item5", label: "Interpret Pressure Stall Information (PSI) for CPU, Memory, and I/O" },
                  { key: "item6", label: "Profile block devices with iostat -xz 1 and differentiate await latency from %util" },
                  { key: "item7", label: "Profile system calls with strace -f -T without incurring fatal perturbation" },
                  { key: "item8", label: "Diagnose CPU-bound, memory thrashing, storage wait, and lock contention bottlenecks with evidence" },
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
            onClick={() => navigate("/learning/os/kernel-architecture")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 17 (Kernel Architecture & xv6)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/networking")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 19 (OS Networking & Network I/O)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Performance Diagnostics"
        defaultMessage="Hello! Ask me any question about vmstat, iostat, perf, strace, /proc virtual interfaces, PSI stalls, or bottleneck triage!"
      />
    </div>
  );
}
