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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 17                                 */
/* Kernel Architecture and System Implementation                              */
/* xv6 · Linux Internals · Boot Flow · Syscall Dispatch · Spinlocks · Microkernels */
/* -------------------------------------------------------------------------- */

export default function OSKernelArchitecture() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeLesson, setActiveLesson] = useState("responsibilities");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(40);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: System Call Dispatch & Privilege Transition Engine           */
  /* -------------------------------------------------------------------------- */
  const [syscallStep, setSyscallStep] = useState(0);

  const syscallStages = [
    {
      step: 1,
      title: "1. User Space Library Wrapper (write())",
      ring: "User Mode (Ring 3 / EL0)",
      codeSnippet: `// user/usys.S or glibc sysdeps
mov rax, 1        ; SYS_write syscall number
mov rdi, 1        ; arg0: stdout file descriptor
lea rsi, [msg]    ; arg1: user pointer to "Kernel\\n"
mov rdx, 7        ; arg2: byte count
syscall           ; CPU instruction triggers trap`,
      cpuState: "RIP points to user code; RSP points to User Stack (0x7fff...)",
      explanation:
        "The application invokes the POSIX write() wrapper in user space. The wrapper sets up architectural registers with the syscall number and arguments before executing the CPU privilege trap instruction (syscall / ecall).",
    },
    {
      step: 2,
      title: "2. Hardware Privilege Escalation (CPU Trap)",
      ring: "Hardware Transition (Ring 3 -> Ring 0)",
      codeSnippet: `// CPU microcode actions:
1. Save user RIP -> RCX
2. Save user RFLAGS -> R11
3. Clear Interrupt Flag (CLI)
4. Switch RSP -> Per-CPU Kernel Stack (TSS.RSP0)
5. Set CPU Privilege = Ring 0 (Kernel)`,
      cpuState: "Hardware elevates privilege; switches to dedicated Kernel Stack",
      explanation:
        "The CPU hardware atomically transitions from user mode (Ring 3) to kernel mode (Ring 0). It loads the kernel stack pointer from the Task State Segment (TSS) and vectors execution directly to the kernel entry point (MSR_LSTAR).",
    },
    {
      step: 3,
      title: "3. Architecture Trap Entry (entry_SYSCALL_64)",
      ring: "Kernel Mode (Ring 0 / EL1)",
      codeSnippet: `// arch/x86/entry/entry_64.S
PUSH_AND_CLEAR_REGS ; Save all 15 user GPRs
mov rdi, rsp        ; Pass pt_regs struct to C handler
call do_syscall_64  ; Jump to C syscall dispatcher`,
      cpuState: "Kernel stack contains saved pt_regs / trapframe snapshot",
      explanation:
        "Low-level kernel assembly creates a trapframe on the kernel stack, saving all user general-purpose registers so the application state can be perfectly restored upon return.",
    },
    {
      step: 4,
      title: "4. System Call Dispatch Table Lookup",
      ring: "Kernel Mode (Ring 0 / EL1)",
      codeSnippet: `// arch/x86/entry/common.c
if (likely(nr < NR_syscalls)) {
    sys_call_ptr_t fn = sys_call_table[nr];
    regs->ax = fn(regs); // Invoke sys_write()
}`,
      cpuState: "Kernel indexes array: sys_call_table[1] -> __x64_sys_write",
      explanation:
        "The kernel validates that the syscall number is within bounds and indexes into the syscall dispatch table (sys_call_table in Linux, syscalls[] in xv6), invoking the target subsystem handler.",
    },
    {
      step: 5,
      title: "5. Argument Validation & Subsystem Work",
      ring: "Kernel Mode (Ring 0 / EL1)",
      codeSnippet: `// fs/read_write.c: ksys_write()
struct fd f = fdget(fd);
if (!access_ok(user_buf, count)) return -EFAULT;
copy_from_user(kernel_buf, user_buf, count);
ret = vfs_write(f.file, kernel_buf, count, &pos);`,
      cpuState: "Validating user pointer; invoking VFS & TTY driver layers",
      explanation:
        "The kernel enforces strict trust boundaries. It verifies that user pointers reside within valid user virtual address space, copies bytes via copy_from_user(), resolves the file descriptor via VFS, and transmits bytes to the display driver.",
    },
    {
      step: 6,
      title: "6. Return to User Space (sysretq / sret)",
      ring: "Return Transition (Ring 0 -> Ring 3)",
      codeSnippet: `// Restores user registers from pt_regs
mov rax, [result]  ; RAX = 7 (bytes written)
POP_REGS
sysretq            ; Atomically drops back to Ring 3`,
      cpuState: "RIP restored to user code; RSP restored to User Stack; RAX = 7",
      explanation:
        "The kernel places the return value into RAX, restores the user register state from the kernel stack, and executes sysretq (or sret in RISC-V), returning control to user space with the original user privilege level.",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: Monolithic vs Microkernel Architecture & Fault Isolation     */
  /* -------------------------------------------------------------------------- */
  const [archModel, setArchModel] = useState("monolithic");
  const [driverCrashed, setDriverCrashed] = useState(false);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: Boot Flow & Subsystem Initialization Timeline                */
  /* -------------------------------------------------------------------------- */
  const [bootMilestone, setBootMilestone] = useState(0);

  const bootMilestones = [
    {
      id: 0,
      phase: "Phase 1: Firmware (UEFI)",
      time: "0.00s",
      event: "Hardware Power-On & POST",
      details: "CPU starts in real mode / initial state. UEFI initializes motherboard chipset, RAM controller, PCI buses, and locates the EFI System Partition (ESP).",
      status: "Firmware handoff to bootloader",
    },
    {
      id: 1,
      phase: "Phase 2: Bootloader (GRUB)",
      time: "0.45s",
      event: "Loads Kernel & initramfs",
      details: "GRUB reads /boot filesystem, loads compressed kernel image (vmlinuz) and initial ramdisk (initramfs) into physical memory, sets up boot parameters, and transfers execution.",
      status: "Kernel image decompressed in RAM",
    },
    {
      id: 2,
      phase: "Phase 3: Kernel Head Entry",
      time: "0.82s",
      event: "startup_64 in head_64.S",
      details: "Enables 64-bit long mode, builds initial identity page tables, sets up Interrupt Descriptor Table (IDT), and jumps to architecture-independent start_kernel().",
      status: "CPU in 64-bit Ring 0 mode",
    },
    {
      id: 3,
      phase: "Phase 4: Early Subsystem Init",
      time: "1.10s",
      event: "start_kernel() Subsystem Setup",
      details: "Initializes buddy page allocator, slab caches (kmalloc), process scheduler queues, RCU infrastructure, and timer interrupts.",
      status: "Memory management & scheduler live",
    },
    {
      id: 4,
      phase: "Phase 5: Device Driver Probing",
      time: "1.65s",
      event: "PCI Enumeration & Drivers",
      details: "Scans PCIe buses, initializes storage controllers (NVMe/AHCI), network interfaces, and mounts the temporary root filesystem from initramfs.",
      status: "Storage & network devices ready",
    },
    {
      id: 5,
      phase: "Phase 6: Pivot to Real Root",
      time: "2.10s",
      event: "pivot_root() to Physical Disk",
      details: "initramfs scripts load essential storage/RAID drivers, unlock LUKS crypto disks if configured, and pivot_root() mounts the real NVMe root partition.",
      status: "Root filesystem mounted read-only/read-write",
    },
    {
      id: 6,
      phase: "Phase 7: Spawn PID 1 (systemd)",
      time: "2.40s",
      event: "kernel_execve('/sbin/init')",
      details: "Kernel spawns the first user-space process (PID 1: systemd). Systemd parses target units, initializes user-space system daemons, networking, and login shells.",
      status: "User space fully operational",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: Kernel Spinlock & Interrupt Self-Deadlock Demonstrator       */
  /* -------------------------------------------------------------------------- */
  const [irqDisabled, setIrqDisabled] = useState(false);
  const [simulatedDeadlock, setSimulatedDeadlock] = useState(false);
  const [lockLog, setLockLog] = useState([
    "Kernel thread running on CPU 0. Acquiring spinlock protecting process table.",
  ]);

  const triggerInterruptTest = () => {
    if (irqDisabled) {
      setSimulatedDeadlock(false);
      setLockLog([
        "1. Thread acquired spinlock using spin_lock_irqsave(&lock, flags).",
        "2. Local CPU interrupts were safely DISABLED by hardware flag.",
        "3. Hardware timer interrupt occurred! But interrupt was deferred by CPU.",
        "4. Thread safely finished critical section and called spin_unlock_irqrestore(&lock, flags).",
        "5. Interrupts re-enabled -> Deferred interrupt handled smoothly with 0 contention!",
        "STATUS: SUCCESSFUL SYNCHRONIZATION (No Deadlock).",
      ]);
    } else {
      setSimulatedDeadlock(true);
      setLockLog([
        "1. Thread acquired spinlock using raw spin_lock(&lock) (Interrupts ENABLED).",
        "2. Hardware timer interrupt fires on CPU 0 and interrupts the thread midway!",
        "3. Interrupt Service Routine (ISR) runs on CPU 0 and attempts to acquire the SAME spinlock.",
        "4. The lock is already held by the interrupted thread on CPU 0!",
        "5. The ISR busy-waits (spins) waiting for the lock to be released.",
        "6. But the interrupted thread cannot run to release the lock until the ISR exits!",
        "CRITICAL KERNEL HANG: Infinite Self-Deadlock on CPU 0! Watchdog timer will panic kernel.",
      ]);
    }
  };

  /* -------------------------------------------------------------------------- */
  /* QUIZ STATE & DATA                                                          */
  /* -------------------------------------------------------------------------- */
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which statement best describes a system call in an operating system?",
      options: [
        "An ordinary function call that executes entirely within the application's user address space",
        "A controlled request for a privileged kernel service that crosses the user/kernel boundary",
        "An asynchronous hardware signal triggered by an external NVMe storage device",
        "A mandatory context switch to another process in all execution paths",
      ],
      correctIndex: 1,
      explanation:
        "A system call is an intentional, controlled interface mechanism by which user-space programs request services from the privileged operating system kernel across the hardware privilege boundary.",
    },
    {
      id: 2,
      question: "What fundamentally distinguishes a hardware interrupt from a synchronous CPU exception?",
      options: [
        "A hardware interrupt arrives asynchronously relative to the executing instruction stream",
        "An interrupt always originates directly from user-space application code",
        "CPU exceptions never transition into privileged kernel code",
        "They are completely identical in origin, timing, and vector routing on all CPU architectures",
      ],
      correctIndex: 0,
      explanation:
        "Hardware interrupts are generated asynchronously by external hardware components (timers, network cards, disks) regardless of what instruction the CPU is currently executing. Exceptions are synchronous and caused by the execution of the current instruction (page faults, division by zero).",
    },
    {
      id: 3,
      question: "Why must the kernel strictly validate all user-supplied pointers during a system call?",
      options: [
        "Because user memory automatically becomes read-only upon entering the kernel",
        "Because user pointers may be invalid, unmapped, point to kernel memory, or be concurrently modified to cause security exploits",
        "Because pointers are automatically converted to physical addresses by hardware at syscall entry",
        "Validation is only required for filesystem operations, never for memory buffers",
      ],
      correctIndex: 1,
      explanation:
        "User pointers cannot be trusted. If the kernel blindly dereferenced user pointers without verification (or without copy_from_user), malicious user code could read or overwrite arbitrary kernel memory, bypassing all OS isolation.",
    },
    {
      id: 4,
      question: "What is the primary architectural danger of a bug in a Loadable Kernel Module (LKM) in Linux?",
      options: [
        "It can only terminate the user process that loaded it",
        "Because LKMs execute in privileged Ring 0, a bug can corrupt shared kernel memory or compromise the entire host system",
        "LKMs execute in a restricted sandbox and cannot access host RAM",
        "It affects only the specific source file of the module",
      ],
      correctIndex: 1,
      explanation:
        "Linux is a monolithic kernel. Loadable kernel modules execute with full Ring 0 privileges in kernel space. A null-pointer dereference, buffer overflow, or wild write in a kernel module can corrupt any kernel data structure or trigger an immediate kernel panic.",
    },
    {
      id: 5,
      question: "Why do microkernel architectures (such as seL4 or MINIX 3) offer superior fault isolation compared to monolithic kernels?",
      options: [
        "All device drivers and filesystems execute in a single shared privileged address space",
        "Most traditional kernel services (drivers, filesystems, networking) run as isolated user-space processes",
        "Microkernels eliminate all CPU context switches and IPC overhead",
        "Microkernels automatically prevent all software security vulnerabilities",
      ],
      correctIndex: 1,
      explanation:
        "In a microkernel, only core mechanisms (scheduling, basic memory primitives, IPC) remain in Ring 0. Drivers and filesystems run as ordinary unprivileged user-space processes. If a device driver crashes, it does not bring down the kernel and can simply be restarted.",
    },
    {
      id: 6,
      question: "Why is the xv6 operating system widely studied in operating systems engineering alongside production Linux?",
      options: [
        "xv6 is a binary drop-in replacement for enterprise Linux distributions",
        "Its compact, readable codebase allows learners to trace real end-to-end kernel mechanisms that are obscured by Linux's vast complexity",
        "The system call implementation and device driver models in xv6 are 100% identical to Linux",
        "xv6 operates entirely in user space without requiring hardware or emulator support",
      ],
      correctIndex: 1,
      explanation:
        "While Linux contains tens of millions of lines of code with complex architecture-specific optimizations, MIT's xv6 implements core Unix principles (processes, paging, system calls, spinlocks, filesystems) in under 10,000 lines of clean C, making kernel mechanisms directly readable and traceable.",
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
        currentModuleId="kernel-architecture"
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
          <span className="text-stone-800 font-medium">Module 17: Kernel Architecture & xv6</span>
        </div>

        {/* Module Header Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e7e3da] shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-semibold text-xs tracking-wide uppercase mb-3">
                <Cpu size={14} />
                <span>Operating Systems Engineering · Module 17</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
                Kernel Architecture & System Implementation
              </h1>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                Dive beneath the application interface into how an operating system is constructed. Explore the boot flow from firmware to PID 1, hardware privilege transitions, system-call dispatch tables, kernel stacks, spinlock interrupt safety, and compare production Linux with MIT’s educational xv6 kernel.
              </p>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Privilege Rings:</span>
                <span className="text-xs font-bold text-stone-800">Ring 3 (User) & Ring 0 (Kernel)</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Teaching Kernel:</span>
                <span className="text-xs font-bold text-[#ea580c]">MIT xv6-riscv</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Lab Focus:</span>
                <span className="text-xs font-bold text-stone-800">End-to-End Syscall Tracing</span>
              </div>
            </div>
          </div>

          {/* Lesson Selector Tabs */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-2">
            {[
              { id: "responsibilities", label: "1. Kernel Responsibilities", icon: Layers },
              { id: "boot", label: "2. Boot Flow & Init", icon: Power },
              { id: "interrupts", label: "3. Interrupts & Traps", icon: Zap },
              { id: "dispatch", label: "4. Syscall Dispatch", icon: Workflow },
              { id: "stacks", label: "5. Stacks, Locks & Scheduling", icon: Lock },
              { id: "models", label: "6. Monolithic vs Microkernel", icon: Boxes },
              { id: "xv6", label: "7. xv6 Code & Lab", icon: FileCode },
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
        {/* LESSON 1: KERNEL RESPONSIBILITIES & ARCHITECTURE                   */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "responsibilities" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Layers size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    1. Kernel Responsibilities and Subsystem Boundaries
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    The privileged core · Subsystem contracts · Monolithic address spaces · Hardware coordination
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  The kernel is the <strong>privileged core</strong> of an operating system. While user-space applications are strictly isolated inside virtual address spaces, the kernel executes with unrestricted hardware access, managing CPU registers, page table roots, physical memory, and device controllers.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Core Subsystem Responsibilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Subsystem 1</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">Process & Scheduling</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Maintains PCB / <code>task_struct</code> records, per-core runqueues, context switching, CPU affinity, and preemption.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Subsystem 2</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">Virtual Memory (MM)</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Constructs hierarchical page tables, handles demand page faults, manages buddy physical allocators and slab/slub caches.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Subsystem 3</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">VFS & Block Storage</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Translates file paths via inodes and dentries, manages dirty page writeback, and queues I/O through <code>blk-mq</code>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 not-prose my-4">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <AlertTriangle size={16} />
                    Subsystem Boundary vs Process Boundary
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    In a monolithic operating system like Linux, subsystem boundaries (e.g. between the VFS and the NVMe driver) are enforced only by C code conventions, not by hardware isolation. A null-pointer dereference or stray pointer in a device driver can corrupt scheduling queues or filesystem state across the entire computer.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 2: BOOT FLOW AND KERNEL INITIALIZATION                      */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "boot" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Power size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    2. Boot Flow and Kernel Initialization
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    UEFI & BIOS · GRUB Bootloader · head_64.S · start_kernel() · initramfs · Spawning PID 1
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Before an application can execute, modern computer hardware and the kernel execute a coordinated sequence of transitions from bare silicon up to the first user-space init daemon.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Linux Boot Inspection Commands</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">cat /proc/cmdline</span>
                    <p className="text-xs text-stone-700 mt-1">
                      Displays the exact boot parameters passed from GRUB to the kernel (e.g. root partition UUID, quiet, ro, console).
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">ps -p 1 -o pid,comm,args</span>
                    <p className="text-xs text-stone-700 mt-1">
                      Verifies the ancestor of all user-space processes (PID 1), typically <code>/sbin/init</code> symlinked to <code>systemd</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Boot Flow & Subsystem Initialization Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Clock size={20} className="text-[#ea580c]" />
                Interactive Boot Sequence & Initialization Timeline
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Step through the 7 boot milestones from CPU reset to user-space systemd execution.
              </p>

              {/* Milestones Scrubber */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
                {bootMilestones.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setBootMilestone(m.id)}
                    className={`p-2.5 rounded-2xl text-left border transition-all ${
                      bootMilestone === m.id
                        ? "bg-[#ea580c] text-white border-[#ea580c] shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}
                  >
                    <span className="text-[10px] font-mono block opacity-80">{m.time}</span>
                    <span className="text-xs font-bold block mt-0.5 truncate">{m.phase}</span>
                  </button>
                ))}
              </div>

              {/* Milestone Details Card */}
              {(() => {
                const cur = bootMilestones[bootMilestone];
                return (
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                      <div>
                        <span className="text-xs font-mono text-[#ea580c] font-bold">{cur.phase} (t = {cur.time})</span>
                        <h4 className="text-base font-bold text-stone-900">{cur.event}</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white border border-stone-300 text-xs font-bold text-stone-800">
                        {cur.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{cur.details}</p>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 3: INTERRUPTS AND PRIVILEGE TRANSITIONS                     */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "interrupts" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Zap size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    3. Interrupts, Exceptions, and Privilege Transitions
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Traps vs Syscalls vs IRQs · x86 Ring 0/Ring 3 · ARM EL0/EL1 · Top-half vs Bottom-half (softirqs)
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Execution transitions into privileged kernel space via three distinct architectural events:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Type 1</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">System Calls (Software Traps)</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Synchronous, intentional software requests (<code>syscall</code>, <code>ecall</code>). Application deliberately requests an OS service.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Type 2</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">CPU Exceptions</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Synchronous, instruction-generated faults (e.g. Page Fault #14, Division by Zero #0). Can be recoverable or fatal (SIGSEGV).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Type 3</span>
                    <h4 className="font-bold text-stone-900 text-sm mt-1">Hardware Interrupts (IRQs)</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Asynchronous electrical signals from peripherals (network packet arrival, NVMe completion, timer tick). Unrelated to current instruction.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Top-Half vs Bottom-Half (Deferred Work)</h3>
                <p>
                  Hardware interrupts preempt arbitrary code and must execute in microseconds with local CPU interrupts disabled. Therefore, Linux splits interrupt processing:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Top Half (Hard IRQ):</strong> Acknowledges the hardware device, clears the interrupt line, copies critical data to a kernel buffer, and schedules the bottom half.</li>
                  <li><strong>Bottom Half (softirq / threaded IRQ / workqueue):</strong> Runs with interrupts enabled, processing network packets, TCP reassembly, and disk completions.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 4: SYSTEM-CALL DISPATCH                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "dispatch" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Workflow size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    4. System-Call Dispatch and User Memory Validation
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    sys_call_table · Trapframe preservation · copy_from_user · Error conventions (-errno vs -1)
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  When user code calls <code>write(1, "Kernel", 6)</code>, how does the CPU jump into the kernel, execute the right C function, and safely return?
                </p>
              </div>
            </div>

            {/* SIMULATOR 1: System Call Dispatch Engine */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Terminal size={20} className="text-[#ea580c]" />
                Interactive System-Call Dispatch & Trapframe Simulator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Step through the 6 stages of a <code>write()</code> syscall from user space registers through Ring 0 dispatch and return.
              </p>

              {/* Stage Progress Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-6">
                {syscallStages.map((st, idx) => (
                  <button
                    key={st.step}
                    onClick={() => setSyscallStep(idx)}
                    className={`p-2.5 rounded-2xl text-left border transition-all ${
                      syscallStep === idx
                        ? "bg-[#ea580c] text-white border-[#ea580c] shadow-xs"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}
                  >
                    <span className="text-[10px] font-mono block opacity-80">Stage {st.step}</span>
                    <span className="text-xs font-bold block truncate mt-0.5">{st.title.split(". ")[1]}</span>
                  </button>
                ))}
              </div>

              {/* Stage Details */}
              {(() => {
                const cur = syscallStages[syscallStep];
                return (
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                      <div>
                        <span className="text-xs text-stone-500 font-mono">EXECUTION STAGE {cur.step} OF 6</span>
                        <h4 className="text-base font-bold text-stone-900">{cur.title}</h4>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          cur.ring.includes("Ring 0")
                            ? "bg-red-50 text-red-700 border-red-200"
                            : cur.ring.includes("Hardware")
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        {cur.ring}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{cur.explanation}</p>

                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
                      <pre>{cur.codeSnippet}</pre>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs">
                      <span className="text-stone-500 font-medium">CPU & Stack State: </span>
                      <span className="font-mono font-semibold text-stone-800">{cur.cpuState}</span>
                    </div>
                  </div>
                );
              })()}

              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => setSyscallStep((prev) => Math.max(0, prev - 1))}
                  disabled={syscallStep === 0}
                  className="px-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 text-xs font-medium disabled:opacity-40 transition-colors"
                >
                  &larr; Previous Stage
                </button>
                <button
                  onClick={() => setSyscallStep((prev) => Math.min(syscallStages.length - 1, prev + 1))}
                  disabled={syscallStep === syscallStages.length - 1}
                  className="px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white text-xs font-medium disabled:opacity-40 transition-colors shadow-xs"
                >
                  Next Stage &rarr;
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 5: KERNEL STACKS, LOCKS & SCHEDULING                        */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "stacks" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Lock size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    5. Kernel Stacks, Synchronization, and Scheduling
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Kernel stack boundaries · Spinlocks vs Mutexes · Interrupt-safety (spin_lock_irqsave) · Context switching
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Every running process in Linux has two stacks: a large user-space stack (typically 8MB limit) and a small, fixed-size <strong>per-thread kernel stack</strong> (typically 8KB or 16KB). Because kernel stack space is precious, kernel code must never allocate large local arrays or use deep recursion.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Kernel Locking Primitives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-900 text-sm">Spinlocks (spinlock_t)</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Busy-waits in a tight CPU loop until the lock is freed. <strong>Never sleeps!</strong> Can be held in interrupt context. Critical sections must be as short as possible.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-900 text-sm">Mutexes (struct mutex)</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Sleeping lock. If the lock is held, the calling thread is placed on a wait queue and yields the CPU via <code>schedule()</code>. <strong>Strictly illegal in interrupt context!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: Kernel Spinlock & Interrupt Self-Deadlock Demonstrator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <AlertOctagon size={20} className="text-[#ea580c]" />
                Kernel Spinlock & Interrupt Self-Deadlock Demonstrator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Understand why raw <code>spin_lock</code> can trigger an unrecoverable kernel deadlock when interrupted by a hardware timer, and how <code>spin_lock_irqsave</code> prevents it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-stone-800">Locking Method:</span>
                  <button
                    onClick={() => {
                      setIrqDisabled(!irqDisabled);
                      setSimulatedDeadlock(false);
                      setLockLog(["Lock mode toggled. Ready to trigger interrupt test."]);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      irqDisabled
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-600 text-white"
                    }`}
                  >
                    {irqDisabled ? "spin_lock_irqsave() (IRQs Disabled)" : "raw spin_lock() (IRQs Enabled)"}
                  </button>
                </div>

                <button
                  onClick={triggerInterruptTest}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <Zap size={15} />
                  <span>Fire Hardware Interrupt During Critical Section</span>
                </button>
              </div>

              {/* Status Banner */}
              <div
                className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm font-medium border ${
                  simulatedDeadlock
                    ? "bg-red-50 text-red-900 border-red-300"
                    : "bg-emerald-50 text-emerald-900 border-emerald-300"
                }`}
              >
                <strong>Execution Result: </strong>
                {simulatedDeadlock
                  ? "KERNEL HANG: Self-Deadlock detected on CPU 0! Spinlock holder was interrupted by an ISR demanding the same lock."
                  : "SAFE EXECUTION: Interrupt was safely deferred until spin_unlock_irqrestore. No deadlocks."}
              </div>

              {/* Execution Log */}
              <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-1.5 border border-stone-800">
                <span className="text-stone-400 text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
                  CPU Execution Sequence:
                </span>
                {lockLog.map((line, idx) => (
                  <div
                    key={idx}
                    className={
                      line.includes("CRITICAL")
                        ? "text-red-400 font-bold"
                        : line.includes("STATUS: SUCCESS")
                        ? "text-emerald-400 font-bold"
                        : "text-stone-300"
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 6: MONOLITHIC VERSUS MICROKERNEL ARCHITECTURES              */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "models" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Boxes size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    6. Kernel Architecture Models: Monolithic, Microkernel & Hybrid
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Linux vs seL4 / Mach · Fault isolation blast radius · Loadable Kernel Modules (LKMs) · Security risks
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  How should the boundary between privileged and unprivileged code be drawn?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Architecture A</span>
                    <h4 className="font-bold text-stone-900 mt-1">Modular Monolithic (Linux)</h4>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      All core services (Scheduler, MM, Filesystems, Network Stacks, Device Drivers) share one Ring 0 address space. Direct C function calls make it blisteringly fast, but a single driver crash can panic the whole OS.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c] uppercase">Architecture B</span>
                    <h4 className="font-bold text-stone-900 mt-1">Microkernel (seL4, MINIX 3)</h4>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      Ring 0 contains only IPC, basic scheduling, and hardware traps (typically &lt;10K lines of code). Filesystems, network stacks, and device drivers run as isolated user processes. A crashed driver is simply restarted.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: Monolithic vs Microkernel Architecture & Fault Isolation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Shield size={20} className="text-[#ea580c]" />
                Fault Isolation & Architecture Comparator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Switch between Monolithic and Microkernel models. Click "Inject Driver Crash" to observe the difference between an OS-wide Kernel Panic and isolated user process recovery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setArchModel("monolithic");
                      setDriverCrashed(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      archModel === "monolithic" ? "bg-[#ea580c] text-white shadow-xs" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    Modular Monolithic (Linux)
                  </button>
                  <button
                    onClick={() => {
                      setArchModel("microkernel");
                      setDriverCrashed(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      archModel === "microkernel" ? "bg-[#ea580c] text-white shadow-xs" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    Microkernel (seL4 / Mach)
                  </button>
                </div>

                <button
                  onClick={() => setDriverCrashed(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <Flame size={15} />
                  <span>Inject NVMe Driver Null-Pointer Crash</span>
                </button>
              </div>

              {/* Memory Layout Visualizer */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-900 text-white">
                  <div className="flex justify-between items-center text-xs text-stone-400 mb-2 border-b border-stone-800 pb-2">
                    <span className="font-bold text-red-400">KERNEL SPACE (RING 0 / PRIVILEGED)</span>
                    <span className="font-mono">Direct Hardware Access</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-stone-800 text-stone-200">CPU Scheduler</div>
                    <div className="p-2 rounded-lg bg-stone-800 text-stone-200">Virtual Memory (MMU)</div>
                    {archModel === "monolithic" ? (
                      <>
                        <div className="p-2 rounded-lg bg-stone-800 text-stone-200">VFS Filesystem</div>
                        <div
                          className={`p-2 rounded-lg font-bold border transition-colors ${
                            driverCrashed ? "bg-red-900 text-red-200 border-red-500 animate-pulse" : "bg-stone-800 text-stone-200 border-stone-700"
                          }`}
                        >
                          NVMe Device Driver {driverCrashed && "(CRASHED!)"}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-2 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800">
                          IPC Message Router
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800">
                          Trap Handlers (&lt;10K LOC)
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300">
                  <div className="flex justify-between items-center text-xs text-stone-600 mb-2 border-b border-stone-200 pb-2">
                    <span className="font-bold text-blue-600">USER SPACE (RING 3 / UNPRIVILEGED PROCESSES)</span>
                    <span className="font-mono">Isolated Virtual Address Spaces</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-white border border-stone-200 text-stone-800">Web Browser</div>
                    <div className="p-2 rounded-lg bg-white border border-stone-200 text-stone-800">Database Engine</div>
                    {archModel === "microkernel" && (
                      <>
                        <div className="p-2 rounded-lg bg-blue-50 border border-blue-300 text-blue-800 font-medium">
                          Filesystem Daemon
                        </div>
                        <div
                          className={`p-2 rounded-lg font-bold border transition-colors ${
                            driverCrashed ? "bg-amber-100 text-amber-800 border-amber-400" : "bg-blue-50 border border-blue-300 text-blue-800"
                          }`}
                        >
                          NVMe Driver Process {driverCrashed && "(Restarting...)"}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Crash Impact Banner */}
              {driverCrashed && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm font-medium border ${
                    archModel === "monolithic"
                      ? "bg-red-50 text-red-900 border-red-300"
                      : "bg-emerald-50 text-emerald-900 border-emerald-300"
                  }`}
                >
                  {archModel === "monolithic" ? (
                    <div>
                      <strong className="block text-base mb-1">FATAL KERNEL PANIC (MACHINE HALTED)</strong>
                      The NVMe driver crashed inside Ring 0. Because all subsystems share one address space, the kernel cannot trust its own internal state. The CPU executed a panic handler and the entire operating system froze.
                    </div>
                  ) : (
                    <div>
                      <strong className="block text-base mb-1">FAULT ISOLATED: ZERO MACHINE DOWNTIME</strong>
                      The NVMe driver crashed inside an isolated user-space process. The microkernel noticed the dead IPC endpoint, re-spawned the driver daemon, and reconnected pending I/O requests. Applications experienced a brief 2ms hiccup with 0 data corruption!
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 7: XV6 SOURCE-CODE EXPLORATION & CAPSTONE LAB               */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "xv6" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <FileCode size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    7. MIT xv6 Source-Code Exploration & Linux Tracing Lab
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    user/usys.pl · kernel/syscall.c · kernel/sysfile.c · kernel/trap.c · strace & objdump tracing
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  MIT’s <strong>xv6-riscv</strong> teaching operating system implements the complete Unix interface in under 10,000 lines of readable C.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">xv6 vs Linux Implementation Comparison</h3>
                <div className="overflow-x-auto not-prose my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                        <th className="py-2.5 px-3 font-semibold">Subsystem</th>
                        <th className="py-2.5 px-3 font-semibold">MIT xv6 Implementation</th>
                        <th className="py-2.5 px-3 font-semibold">Linux Kernel Implementation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Syscall Stubs</td>
                        <td className="py-2.5 px-3 font-mono">user/usys.pl (generates ecall asm)</td>
                        <td className="py-2.5 px-3 font-mono">glibc sysdeps / vDSO acceleration</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Trap Entry</td>
                        <td className="py-2.5 px-3 font-mono">kernel/trampoline.S & kernel/trap.c</td>
                        <td className="py-2.5 px-3 font-mono">arch/x86/entry/entry_64.S</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Dispatch Table</td>
                        <td className="py-2.5 px-3 font-mono">static uint64 (*syscalls[])(void)</td>
                        <td className="py-2.5 px-3 font-mono">const sys_call_ptr_t sys_call_table[]</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Process Table</td>
                        <td className="py-2.5 px-3 font-mono">struct proc proc[NPROC] (Fixed 64)</td>
                        <td className="py-2.5 px-3 font-mono">Dynamically allocated task_struct tree</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Lab Exercise: <code>trace_write.c</code></h3>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto relative not-prose">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `#include <errno.h>
#include <stdio.h>
#include <unistd.h>

int main(void) {
    const char msg[] = "Tracing a kernel boundary\\n";
    size_t offset = 0;
    const size_t length = sizeof(msg) - 1;

    while (offset < length) {
        ssize_t n = write(STDOUT_FILENO, msg + offset, length - offset);
        if (n > 0) {
            offset += (size_t)n;
        } else if (n == -1 && errno == EINTR) {
            continue;
        } else {
            perror("write");
            return 1;
        }
    }
    return 0;
}
`,
                        "trace_write_c"
                      )
                    }
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                    title="Copy C Code"
                  >
                    {copiedSnippet === "trace_write_c" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <pre>{`// trace_write.c - Linux Syscall Boundary Tracing
#include <errno.h>
#include <stdio.h>
#include <unistd.h>

int main(void) {
    const char msg[] = "Tracing a kernel boundary\\n";
    size_t offset = 0;
    const size_t length = sizeof(msg) - 1;

    while (offset < length) {
        ssize_t n = write(STDOUT_FILENO, msg + offset, length - offset);
        if (n > 0) {
            offset += (size_t)n;
        } else if (n == -1 && errno == EINTR) {
            continue;
        } else {
            perror("write");
            return 1;
        }
    }
    return 0;
}`}</pre>
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
                      Module 17 Knowledge Check
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500">
                      Verify your mastery of kernel boot flow, syscall dispatch, interrupts, spinlocks, and microkernels
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
                    Module 17 Mastery Checklist
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Track your engineering competence across kernel internals, system calls, and synchronization
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
                  { key: "item1", label: "Trace Linux boot sequence from UEFI firmware to PID 1 systemd" },
                  { key: "item2", label: "Differentiate system calls, synchronous exceptions, and asynchronous hardware interrupts" },
                  { key: "item3", label: "Explain CPU privilege escalation (x86 Ring 3/Ring 0, ARM EL0/EL1)" },
                  { key: "item4", label: "Trace system-call dispatch across trapframe creation, sys_call_table, and copy_from_user" },
                  { key: "item5", label: "Prevent kernel self-deadlocks using spin_lock_irqsave to disable local interrupts" },
                  { key: "item6", label: "Compare monolithic, modular monolithic, microkernel, and hybrid kernel models" },
                  { key: "item7", label: "Explain Loadable Kernel Module (LKM) capabilities and Ring 0 blast radius" },
                  { key: "item8", label: "Navigate MIT xv6 source code and trace sys_write end-to-end" },
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
            onClick={() => navigate("/learning/os/crash-consistency")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 16 (Crash Consistency & Durability)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/diagnostics")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 18 (Linux Internals & Performance Diagnostics)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Kernel Architecture & xv6"
        defaultMessage="Hello! Ask me any question about the Linux boot flow, system call dispatch, trap handling, spinlocks, microkernels, or xv6 internals!"
      />
    </div>
  );
}
