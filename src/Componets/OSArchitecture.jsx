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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 2                                   */
/* Computer Architecture for OS Engineers                                     */
/* MIT 6.1810, CMU CS:APP 15-213, Stanford CS140, UC Berkeley CS162 Standard  */
/* -------------------------------------------------------------------------- */

export default function OSArchitecture() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'quiz' | 'checklist'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Section 6.8 Knowledge Check State
  const [section6QuizAnswer, setSection6QuizAnswer] = useState(null);

  // Page Offset Calculator State (Section 6.8)
  const [calcVirtualAddr, setCalcVirtualAddr] = useState("0x12345");

  const computedPageCalc = useMemo(() => {
    try {
      const cleanHex = calcVirtualAddr.trim().toLowerCase().startsWith("0x")
        ? calcVirtualAddr.trim().toLowerCase().slice(2)
        : calcVirtualAddr.trim().toLowerCase();
      const num = parseInt(cleanHex, 16);
      if (isNaN(num)) return null;

      const pageSize = 4096; // 4 KiB = 2^12
      const offset = num % pageSize;
      const vpn = Math.floor(num / pageSize);

      return {
        hexInput: "0x" + num.toString(16).toUpperCase(),
        decInput: num.toLocaleString(),
        offsetHex: "0x" + offset.toString(16).toUpperCase(),
        offsetDec: offset,
        vpnHex: "0x" + vpn.toString(16).toUpperCase(),
        vpnDec: vpn,
      };
    } catch {
      return null;
    }
  }, [calcVirtualAddr]);

  // Section 10: Lab Checklist State (8 items)
  const [checklist, setChecklist] = useState({
    compileElf: false,
    inspectAssembly: false,
    recordPid: false,
    traceSyscalls: false,
    archPageSize: false,
    memoryMaps: false,
    mmuPaging: false,
    bootStages: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // Section 11: Knowledge Assessment State (8 questions)
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which register identifies the current instruction stream on x86-64?",
      options: ["RSP", "RIP", "CR3", "RFLAGS"],
      correctIndex: 1,
      explanation:
        "On x86-64, the Instruction Pointer (RIP) holds the 64-bit virtual address of the next instruction to be fetched and executed by the CPU. (On AArch64, the equivalent register is PC). RSP is the stack pointer, CR3 points to the page table root, and RFLAGS stores CPU condition codes.",
    },
    {
      id: 2,
      question: "Why does an ordinary application use a system call to request protected kernel services?",
      options: [
        "The CPU cannot execute arithmetic in user mode",
        "Hardware privilege mechanisms restrict direct privileged operations",
        "Every function call enters the kernel",
        "System calls automatically create new processes",
      ],
      correctIndex: 1,
      explanation:
        "Processors enforce hardware privilege rings (Ring 3 vs Ring 0). Unprivileged user-mode code is prohibited from executing privileged CPU instructions (such as disabling interrupts or modifying page tables) or accessing physical device controllers directly. System calls provide a hardware-gated interface to request supervisor services.",
    },
    {
      id: 3,
      question: "What distinguishes a context switch from a mode switch?",
      options: [
        "A context switch changes the executing thread; a mode switch changes privilege level",
        "They are always identical",
        "A mode switch always changes the physical CPU",
        "A context switch only occurs during boot",
      ],
      correctIndex: 0,
      explanation:
        "A mode switch transitions the current CPU between privilege states (e.g. Ring 3 user mode to Ring 0 kernel mode for a syscall) while continuing the exact same thread of execution. A context switch saves the architectural state of one thread and restores that of another, switching which task is running.",
    },
    {
      id: 4,
      question: "Which statement about page faults is correct?",
      options: [
        "Every page fault means invalid memory access",
        "Every page fault reads data from an SSD",
        "Some page faults are handled successfully by the OS",
        "A page fault is the same as a TLB miss",
      ],
      correctIndex: 2,
      explanation:
        "Page faults are a standard mechanism of virtual memory. Many page faults are completely routine and resolved successfully by the kernel, such as demand paging (allocating zeroed physical pages on first touch) and copy-on-write (COW) page duplication during fork().",
    },
    {
      id: 5,
      question: "What does DMA primarily allow?",
      options: [
        "A CPU to skip all device management",
        "A device or controller to transfer data to or from memory without CPU copying every byte",
        "An application to bypass memory protection",
        "An SSD to replace RAM",
      ],
      correctIndex: 1,
      explanation:
        "Direct Memory Access (DMA) enables high-speed peripheral controllers (such as NVMe SSDs, 100GbE NICs, and GPUs) to transfer data directly into or out of system DRAM over the PCIe bus without requiring the CPU to execute programmed I/O loops copying every byte.",
    },
    {
      id: 6,
      question: "Which component commonly loads the Linux kernel during a PC boot?",
      options: [
        "The CPU cache",
        "A bootloader such as GRUB",
        "The shell",
        "The application linker",
      ],
      correctIndex: 1,
      explanation:
        "On PC systems, after UEFI or BIOS firmware initializes fundamental hardware, it invokes a bootloader such as GRUB (or systemd-boot). The bootloader loads the compressed Linux kernel image (vmlinuz) and initial ramdisk (initramfs) into memory and transfers control to the kernel entry point.",
    },
    {
      id: 7,
      question: "What is the primary purpose of a TLB?",
      options: [
        "Store the entire operating system",
        "Cache address translations to reduce translation overhead",
        "Store all persistent files",
        "Schedule CPU threads",
      ],
      correctIndex: 1,
      explanation:
        "The Translation Lookaside Buffer (TLB) is an on-chip associative cache inside the MMU that stores recent virtual-to-physical address mappings. A TLB hit resolves an address translation in ~1 clock cycle, avoiding costly 4-level or 5-level page table memory walks.",
    },
    {
      id: 8,
      question: "What does a hardware timer help an OS achieve?",
      options: [
        "Permanent CPU ownership by one process",
        "Preemptive scheduling and time-related operations",
        "Automatic compilation of every program",
        "Elimination of device interrupts",
      ],
      correctIndex: 1,
      explanation:
        "A programmable hardware timer (such as the APIC timer or HPET) periodically sends hardware interrupts to the CPU. This allows the operating system kernel to regain control from CPU-bound tasks, update time slices, and enforce preemptive multitasking.",
    },
  ];

  const handleSelectQuizOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  // Section 9: Interactive Linux Lab Simulator State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "gcc -Wall -Wextra -O0 hello.c -o hello && ./hello",
      output:
        "Hello from the operating system!\nProcess ID: 12450",
    },
    {
      cmd: "file hello",
      output:
        "hello: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=a1b2c3d4, for GNU/Linux 3.2.0, not stripped",
    },
  ]);

  const commandDatabase = {
    "gcc -Wall -Wextra -O0 hello.c -o hello": "[Compiled hello.c -> ELF 64-bit binary 'hello' with 0 warnings]",
    "gcc -Wall -Wextra -O0 hello.c -o hello && ./hello": "Hello from the operating system!\nProcess ID: 12450",
    "./hello": "Hello from the operating system!\nProcess ID: 12452",
    "file hello":
      "hello: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=a1b2c3d4, for GNU/Linux 3.2.0, not stripped",
    "ls -lh hello": "-rwxr-xr-x 1 prepspaces prepspaces 16K Oct 15 11:20 hello",
    "readelf -h hello":
      "ELF Header:\n  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00\n  Class:                             ELF64\n  Data:                              2's complement, little endian\n  Version:                           1 (current)\n  OS/ABI:                            UNIX - System V\n  Type:                              DYN (Position-Independent Executable)\n  Machine:                           Advanced Micro Devices X86-64\n  Version:                           0x1\n  Entry point address:               0x1060\n  Start of program headers:          64 (bytes into file)\n  Start of section headers:          13968 (bytes into file)\n  Flags:                             0x0\n  Size of this header:               64 (bytes)\n  Size of program headers:           56 (bytes)\n  Number of program headers:         13\n  Size of section headers:           64 (bytes)\n  Number of section headers:         31",
    "readelf -l hello":
      "Elf file type is DYN (Position-Independent Executable file)\nEntry point 0x1060\nThere are 13 program headers, starting at offset 64\n\nProgram Headers:\n  Type           Offset             VirtAddr           PhysAddr           FileSiz            MemSiz              Flags  Align\n  PHDR           0x0000000000000040 0x0000000000000040 0x0000000000000040 0x00000000000002d8 0x00000000000002d8  R      0x8\n  INTERP         0x0000000000000318 0x0000000000000318 0x0000000000000318 0x000000000000001c 0x000000000000001c  R      0x1\n      [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]\n  LOAD           0x0000000000000000 0x0000000000000000 0x0000000000000000 0x0000000000000608 0x0000000000000608  R      0x1000\n  LOAD           0x0000000000001000 0x0000000000001000 0x0000000000001000 0x00000000000001c5 0x00000000000001c5  R E    0x1000\n  LOAD           0x0000000000002000 0x0000000000002000 0x0000000000002000 0x0000000000000150 0x0000000000000150  R      0x1000\n  LOAD           0x0000000000002db0 0x0000000000003db0 0x0000000000003db0 0x0000000000000260 0x0000000000000268  RW     0x1000",
    "objdump -d hello | grep -A 20 '<main>:'":
      "0000000000001149 <main>:\n    1149:	f3 0f 1e fa          	endbr64 \n    114d:	55                   	push   %rbp\n    114e:	48 89 e5             	mov    %rsp,%rbp\n    1151:	48 8d 05 ac 0e 00 00 	lea    0xeac(%rip),%rax        # 2004 <_IO_stdin_used+0x4>\n    1158:	48 89 c7             	mov    %rax,%rdi\n    115b:	e8 e0 fe ff ff       	call   1040 <puts@plt>\n    1160:	e8 db fe ff ff       	call   1040 <getpid@plt>\n    1165:	48 89 c6             	mov    %rax,%rsi\n    1168:	48 8d 05 b9 0e 00 00 	lea    0xeb9(%rip),%rax        # 2028 <_IO_stdin_used+0x28>\n    116f:	48 89 c7             	mov    %rax,%rdi\n    1172:	b8 00 00 00 00       	mov    $0x0,%eax\n    1177:	e8 d4 fe ff ff       	call   1050 <printf@plt>\n    117c:	b8 00 00 00 00       	mov    $0x0,%eax\n    1181:	5d                   	pop    %rbp\n    1182:	c3                   	ret",
    "objdump -d hello":
      "0000000000001149 <main>:\n    1149:	push   %rbp\n    114a:	mov    %rsp,%rbp\n    114d:	lea    0xeac(%rip),%rdi        # 'Hello from the operating system!'\n    1154:	call   puts@plt\n    1159:	call   getpid@plt\n    115e:	mov    %rax,%rsi\n    1161:	lea    0xeb9(%rip),%rdi        # 'Process ID: %ld\\n'\n    1168:	mov    $0x0,%eax\n    116d:	call   printf@plt\n    1172:	mov    $0x0,%eax\n    1177:	pop    %rbp\n    1178:	ret",
    "gcc -Wall -Wextra -O0 inspect.c -o inspect && ./inspect":
      "PID: 12460\n[Process 12460 sleeping for 30s. Inspecting live memory maps...]",
    "ps -p 12460 -o pid,ppid,stat,%cpu,%mem,cmd":
      "    PID    PPID STAT %CPU %MEM CMD\n  12460   10240 S+    0.0  0.0 ./inspect",
    "cat /proc/12460/status | head -n 12":
      "Name:	inspect\nUmask:	0002\nState:	S (sleeping)\nTgid:	12460\nNgid:	0\nPid:	12460\nPPid:	10240\nTracerPid:	0\nUid:	1000	1000	1000	1000\nGid:	1000	1000	1000	1000\nFDSize:	64\nGroups:	1000 4 24 27 30 46 110",
    "cat /proc/12460/maps":
      "55a1b2000000-55a1b2001000 r--p 00000000 08:01 131075  /home/prepspaces/inspect (Code Read-Only)\n55a1b2001000-55a1b2002000 r-xp 00001000 08:01 131075  /home/prepspaces/inspect (Text / Executable)\n55a1b2002000-55a1b2003000 r--p 00002000 08:01 131075  /home/prepspaces/inspect (RODATA)\n55a1b2003000-55a1b2004000 rw-p 00003000 08:01 131075  /home/prepspaces/inspect (DATA / BSS)\n55a1b3800000-55a1b3821000 rw-p 00000000 00:00 0       [heap]\n7f94c0a00000-7f94c0a28000 r--p 00000000 08:01 524290  /lib/x86_64-linux-gnu/libc.so.6\n7f94c0a28000-7f94c0bbd000 r-xp 00028000 08:01 524290  /lib/x86_64-linux-gnu/libc.so.6 (glibc text)\n7f94c0bbd000-7f94c0c15000 r--p 001bd000 08:01 524290  /lib/x86_64-linux-gnu/libc.so.6\n7f94c0c15000-7f94c0c19000 rw-p 00215000 08:01 524290  /lib/x86_64-linux-gnu/libc.so.6\n7ffd8a420000-7ffd8a441000 rw-p 00000000 00:00 0       [stack] (User stack grows down)\n7ffd8a4f0000-7ffd8a4f4000 r--p 00000000 00:00 0       [vvar]\n7ffd8a4f4000-7ffd8a4f6000 r-xp 00000000 00:00 0       [vdso] (Virtual Dynamic Shared Object)",
    "strace ./hello":
      "execve(\"./hello\", [\"./hello\"], 0x7ffd58) = 0\nbrk(NULL)                               = 0x55d4a1b000\naccess(\"/etc/ld.so.preload\", R_OK)      = -1 ENOENT (No such file or directory)\nopenat(AT_FDCWD, \"/etc/ld.so.cache\", O_RDONLY|O_CLOEXEC) = 3\nfstat(3, {st_mode=S_IFREG|0644, st_size=68124, ...}) = 0\nmmap(NULL, 68124, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f81a2b00000\nclose(3)                                = 0\nopenat(AT_FDCWD, \"/lib/x86_64-linux-gnu/libc.so.6\", O_RDONLY|O_CLOEXEC) = 3\nread(3, \"\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\", 832) = 832\nmmap(NULL, 2228224, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f81a2800000\nclose(3)                                = 0\ngetpid()                                = 12450\nwrite(1, \"Hello from the operating system!\\n\", 33) = 33\nwrite(1, \"Process ID: 12450\\n\", 19)     = 19\nexit_group(0)                           = ?\n+++ exited with 0 +++",
    "strace -e trace=process,memory,file ./hello":
      "execve(\"./hello\", [\"./hello\"], 0x7ffd58) = 0\nopenat(AT_FDCWD, \"/etc/ld.so.cache\", O_RDONLY|O_CLOEXEC) = 3\nmmap(NULL, 68124, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f81a2b00000\nopenat(AT_FDCWD, \"/lib/x86_64-linux-gnu/libc.so.6\", O_RDONLY|O_CLOEXEC) = 3\nmmap(NULL, 2228224, PROT_READ|PROT_EXEC, MAP_PRIVATE, 3, 0) = 0x7f81a2800000\ngetpid()                                = 12450\nexit_group(0)                           = ?\n+++ exited with 0 +++",
    "getconf PAGE_SIZE": "4096",
    "uname -m": "x86_64",
    "cat /proc/cpuinfo | grep 'model name' | head -n 1": "model name	: Intel(R) Xeon(R) Platinum 8375C CPU @ 2.80GHz",
    "help":
      "Supported Lab 2 diagnostic commands:\n• gcc -Wall -Wextra -O0 hello.c -o hello && ./hello\n• file hello, ls -lh hello\n• readelf -h hello, readelf -l hello\n• objdump -d hello | grep -A 20 '<main>:'\n• gcc -Wall -Wextra -O0 inspect.c -o inspect && ./inspect\n• ps -p 12460 -o pid,ppid,stat,%cpu,%mem,cmd\n• cat /proc/12460/maps, cat /proc/12460/status | head -n 12\n• strace ./hello\n• strace -e trace=process,memory,file ./hello\n• getconf PAGE_SIZE, uname -m\n• clear",
  };

  const handleExecuteCommand = (cmdText = terminalInput) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    }

    let output = commandDatabase[trimmed];
    if (!output) {
      if (trimmed.startsWith("cat ")) {
        output = `cat: ${trimmed.split(" ")[1]}: No such file or directory`;
      } else {
        output = `bash: ${trimmed}: command not found. Type 'help' for supported Lab 2 compilation & tracing commands.`;
      }
    }

    setTerminalHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setTerminalInput("");
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-6 sm:px-8 sm:py-10 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Module Navigation Header */}
        <ModuleNav
          track="os"
          currentModuleId="architecture"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Architecture Tutor"
        />

        {/* Hero Header */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Cpu size={13} />
              Operating Systems Master Course · Module 2
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              MIT 6.1810 & CMU CS:APP 15-213 Standard
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              Hardware-OS Co-Design
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#18181b] tracking-tight">
            Computer Architecture for OS Engineers
          </h1>

          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            This module explains the concrete hardware mechanisms that make an operating system possible. Moving from CPU instruction execution, architectural registers, and privilege levels to interrupts, the memory hierarchy, the MMU, page translation, DMA, and the complete boot process.
          </p>

          {/* Module Learning Objectives Grid */}
          <div className="mt-6 pt-6 border-t border-stone-200/80">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#ea580c]" />
              Module 2 Learning Objectives (10 Core Competencies)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 text-xs text-stone-700">
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">1.</span>
                <span>CPU instruction cycle: Fetch, Decode, Execute, Commit.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">2.</span>
                <span>Registers: GPRs, RIP/PC, RSP, RFLAGS, and CR0/CR2/CR3/CR4.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">3.</span>
                <span>User vs Kernel privilege: Rings 0–3 (x86) and EL0–EL3 (ARM).</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">4.</span>
                <span>Interrupts, exceptions, traps, and timer preemption.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">5.</span>
                <span>Memory hierarchy: L1/L2/L3 caches, latency, and locality.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">6.</span>
                <span>MMU translation: virtual page numbers & page offsets.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">7.</span>
                <span>Page tables, TLBs, shootdowns, and page faults.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">8.</span>
                <span>DMA, device controllers, and concurrent I/O operations.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">9.</span>
                <span>Boot sequence: UEFI, GRUB bootloader, initramfs, PID 1.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-1.5">
                <span className="font-mono font-bold text-[#ea580c]">10.</span>
                <span>ELF binaries, <code className="font-mono bg-stone-200 px-1 rounded">strace</code>, and <code className="font-mono bg-stone-200 px-1 rounded">/proc/[pid]/maps</code>.</span>
              </div>
            </div>
            <p className="mt-3 text-[11px] font-mono text-stone-500">
              <strong>Prerequisites:</strong> Module 1, binary/hex arithmetic, CPU fundamentals, and elementary C programming.
            </p>
          </div>
        </header>

        {/* View Mode Navigation Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-stone-200/80 pb-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <BookOpen size={16} className={activeTab === "theory" ? "text-orange-400" : "text-stone-400"} />
            <span>Architecture Deep Dive (§1–§8)</span>
          </button>

          <button
            onClick={() => setActiveTab("interactive-lab")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "interactive-lab"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Terminal size={16} className={activeTab === "interactive-lab" ? "text-orange-400" : "text-stone-400"} />
            <span>Compilation & Tracing Lab (§9)</span>
          </button>

          <button
            onClick={() => setActiveTab("checklist")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "checklist"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "checklist" ? "text-orange-400" : "text-stone-400"} />
            <span>Lab Report Checklist ({completedChecklistCount}/8)</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "quiz"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Award size={16} className={activeTab === "quiz" ? "text-orange-400" : "text-stone-400"} />
            <span>Architecture Assessment Quiz (8 Questions)</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM THEORY & ARCHITECTURE                                   */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* 1. CPU Execution: How a Program Actually Runs */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 1
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Silicon Execution Model</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                1. CPU Execution: How a Program Actually Runs
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                The CPU contains dedicated silicon hardware for instruction decoding, arithmetic logic (ALU), execution units, register files, load/store queues, on-chip caches, and branch prediction logic.
              </p>

              {/* 4-Stage Instruction Pipeline Visualization */}
              <div className="my-6 p-5 rounded-2xl border border-stone-200 bg-stone-50">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 mb-4 text-center">
                  Figure 1.1 — The Four Canonical Architectural Stages
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] font-bold">Stage 1</span>
                    <h4 className="font-bold text-stone-900 mt-1.5 text-sm">Fetch</h4>
                    <p className="mt-1 text-stone-600">The CPU reads instruction bytes from memory or L1 Instruction Cache at address in <code className="font-mono bg-stone-100 px-1 rounded">RIP/PC</code>.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[10px] font-bold">Stage 2</span>
                    <h4 className="font-bold text-stone-900 mt-1.5 text-sm">Decode</h4>
                    <p className="mt-1 text-stone-600">Instruction decoders inspect opcode bytes, resolving operands, addressing modes, and register dependencies.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">Stage 3</span>
                    <h4 className="font-bold text-stone-900 mt-1.5 text-sm">Execute</h4>
                    <p className="mt-1 text-stone-600">ALUs, floating-point units, or load/store units perform the arithmetic, logic, branch, or memory access.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono text-[10px] font-bold">Stage 4</span>
                    <h4 className="font-bold text-stone-900 mt-1.5 text-sm">Commit</h4>
                    <p className="mt-1 text-stone-600">Results retire in-order into architectural registers or cache, making changes permanent and visible to the OS.</p>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950">
                  <strong>OS Scheduler Link:</strong> When the OS switches a thread out, it must preserve this architectural execution state. The physical registers, stack pointer, and instruction pointer represent the thread's entire live identity.
                </div>
              </div>
            </section>

            {/* 2. CPU Registers and Execution State */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 2
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Architectural Register Files</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                2. CPU Registers, Stack & Privileged Control State
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Registers are the fastest storage locations on the CPU silicon, operating with sub-nanosecond access latency.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Binary size={16} className="text-[#ea580c]" />
                    General-Purpose Registers (x86-64)
                  </h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    16 64-bit GPRs: <code className="font-mono bg-stone-200 px-1 rounded">RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP, R8–R15</code>.
                  </p>
                  <p className="mt-2 text-stone-600">
                    <strong>System V AMD64 ABI Convention:</strong> Function arguments passed in <code className="font-mono bg-stone-100 px-1 rounded">RDI, RSI, RDX, RCX, R8, R9</code>; return value placed in <code className="font-mono bg-stone-100 px-1 rounded">RAX</code>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Workflow size={16} className="text-[#ea580c]" />
                    Instruction & Stack Pointers
                  </h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    • <strong>RIP (x86-64) / PC (ARM):</strong> Holds the address of the current instruction stream.
                  </p>
                  <p className="mt-1 text-stone-600 leading-relaxed">
                    • <strong>RSP (Stack Pointer):</strong> Points to the top of the thread's call stack. Stacks grow downwards toward lower virtual addresses.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Activity size={16} className="text-[#ea580c]" />
                    Flags & Status (RFLAGS)
                  </h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Maintains condition codes: Zero Flag (ZF), Carry Flag (CF), Sign Flag (SF), Overflow Flag (OF), and Interrupt Enable Flag (IF). Conditional jumps inspect these flags.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/50">
                  <h3 className="font-bold text-orange-950 text-sm flex items-center gap-2">
                    <Lock size={16} className="text-[#ea580c]" />
                    Privileged Control Registers
                  </h3>
                  <p className="mt-2 text-orange-900 leading-relaxed">
                    • <strong>CR0:</strong> Enables protected mode & paging.
                  </p>
                  <p className="mt-1 text-orange-900 leading-relaxed">
                    • <strong>CR2:</strong> Stores the faulting linear virtual address on a page fault exception!
                  </p>
                  <p className="mt-1 text-orange-900 leading-relaxed">
                    • <strong>CR3:</strong> Holds physical base address of PML4 (top-level page table). Context switches reload CR3 to swap address spaces!
                  </p>
                </div>
              </div>
            </section>

            {/* 3. User Mode, Kernel Mode, and CPU Privilege Levels */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 3
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Hardware Privilege Separation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                3. User Mode, Kernel Mode & Privilege Enforcement
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Kernel mode and User mode are not separate physical processors; they are hardware-enforced CPU privilege states. The same physical core dynamically toggles privileges between application execution and kernel services.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                  <h3 className="font-bold text-stone-900 text-sm">x86-64 Protection Rings</h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="p-2.5 rounded bg-orange-100 text-orange-900 font-mono font-bold flex justify-between">
                      <span>Ring 0</span>
                      <span>Kernel / Supervisor Mode (Full Hardware Control)</span>
                    </div>
                    <div className="p-2.5 rounded bg-stone-200/60 text-stone-600 font-mono flex justify-between">
                      <span>Ring 1 & 2</span>
                      <span>Device Drivers / OS Services (Unused by Linux/Windows)</span>
                    </div>
                    <div className="p-2.5 rounded bg-blue-50 text-blue-900 font-mono font-bold flex justify-between">
                      <span>Ring 3</span>
                      <span>User Mode (Applications & Utilities)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                  <h3 className="font-bold text-stone-900 text-sm">ARM AArch64 Exception Levels</h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="p-2 rounded bg-purple-100 text-purple-900 font-mono text-[11px] flex justify-between">
                      <span>EL3</span>
                      <span>Secure Monitor / Firmware (TrustZone)</span>
                    </div>
                    <div className="p-2 rounded bg-indigo-100 text-indigo-900 font-mono text-[11px] flex justify-between">
                      <span>EL2</span>
                      <span>Hypervisor (KVM / Xen)</span>
                    </div>
                    <div className="p-2 rounded bg-orange-100 text-orange-900 font-mono text-[11px] font-bold flex justify-between">
                      <span>EL1</span>
                      <span>OS Kernel (Linux / Windows)</span>
                    </div>
                    <div className="p-2 rounded bg-blue-50 text-blue-900 font-mono text-[11px] font-bold flex justify-between">
                      <span>EL0</span>
                      <span>User Applications</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl border border-rose-200 bg-rose-50/60 text-xs text-rose-950">
                <strong>What happens if user code executes a privileged instruction?</strong> (e.g. <code className="font-mono bg-rose-100 px-1 rounded">hlt</code> or <code className="font-mono bg-rose-100 px-1 rounded">mov %cr3, %rax</code>). The CPU hardware detects privilege insufficiency, halts the instruction, and triggers a General Protection Fault (<code className="font-mono">#GP</code>), transferring control to the kernel exception handler which delivers a <code className="font-mono">SIGSEGV</code> signal to terminate the offending process.
              </div>
            </section>

            {/* 4. Interrupts, Exceptions, Traps, and Hardware Timers */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 4
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Asynchronous Events & Preemption</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                4. Interrupts, Exceptions, Traps & Hardware Timers
              </h2>

              {/* Event Comparison Table */}
              <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 font-bold text-stone-700 border-b border-stone-200">
                    <tr>
                      <th className="p-3">Event Type</th>
                      <th className="p-3">Source & Cause</th>
                      <th className="p-3">Timing Relationship</th>
                      <th className="p-3">Concrete Production Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Hardware Interrupt</td>
                      <td className="p-3">Peripheral device or APIC timer</td>
                      <td className="p-3 font-mono text-blue-700">Asynchronous</td>
                      <td className="p-3">Network card signals Ethernet frame arrived in RAM buffer</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Exception / Fault</td>
                      <td className="p-3">CPU instruction execution error</td>
                      <td className="p-3 font-mono text-rose-700">Synchronous</td>
                      <td className="p-3">Page fault (#PF) when dereferencing an unmapped address</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Trap</td>
                      <td className="p-3">Intentional debugging or trace point</td>
                      <td className="p-3 font-mono text-purple-700">Synchronous</td>
                      <td className="p-3">GDB breakpoint instruction (<code className="font-mono">INT 3</code>)</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">System Call</td>
                      <td className="p-3">Program requests OS kernel service</td>
                      <td className="p-3 font-mono text-emerald-700">Synchronous & Intentional</td>
                      <td className="p-3">Application invokes <code className="font-mono">syscall</code> to execute <code className="font-mono">write()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Preemption Box */}
              <div className="mt-6 p-4 rounded-2xl border border-stone-200 bg-stone-50">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Zap size={16} className="text-[#ea580c]" />
                  How Hardware Timers Enable Preemptive Multitasking
                </h3>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  If an application enters an infinite loop <code className="font-mono bg-stone-200 px-1 rounded">while(1) &#123;&#125;</code>, the system does not freeze. The hardware timer generates periodic timer interrupts (e.g. every 1ms or 4ms). When the interrupt fires, the CPU saves user state and enters the kernel's scheduler. The scheduler decrements the process's time slice, determines that its quantum has expired, and context-switches to another runnable task!
                </p>
              </div>
            </section>

            {/* 5. Memory Hierarchy: Registers, Caches, RAM, and Persistent Storage */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 5
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Memory Hierarchy & Locality</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                5. Memory Hierarchy & Why Caches Dominate Performance
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Computer systems exploit two fundamental physical properties: <strong>Temporal Locality</strong> (recently accessed data will be accessed again soon) and <strong>Spatial Locality</strong> (adjacent memory addresses will be accessed soon).
              </p>

              {/* Latency Pyramid Table */}
              <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 font-bold text-stone-700 border-b border-stone-200">
                    <tr>
                      <th className="p-3">Hierarchy Level</th>
                      <th className="p-3">Typical Capacity</th>
                      <th className="p-3">Access Latency</th>
                      <th className="p-3">Managed By</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">CPU Registers</td>
                      <td className="p-3">~1 KB (16–32 registers)</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">~0.5 ns (1 cycle)</td>
                      <td className="p-3">Compiler / Assembler</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">L1 Cache (Private to core)</td>
                      <td className="p-3">64–128 KB per core</td>
                      <td className="p-3 font-mono font-bold text-emerald-700">~1–2 ns (4 cycles)</td>
                      <td className="p-3">CPU Hardware</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">L2 Cache (Private/Shared)</td>
                      <td className="p-3">512 KB–2 MB per core</td>
                      <td className="p-3 font-mono font-bold text-blue-700">~4–10 ns (14 cycles)</td>
                      <td className="p-3">CPU Hardware</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">L3 Cache (Shared across cores)</td>
                      <td className="p-3">16–64 MB shared</td>
                      <td className="p-3 font-mono font-bold text-amber-700">~20–40 ns (50 cycles)</td>
                      <td className="p-3">CPU Hardware</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Main Memory (DRAM)</td>
                      <td className="p-3">16–256 GB</td>
                      <td className="p-3 font-mono font-bold text-orange-700">~60–100 ns (200 cycles)</td>
                      <td className="p-3">OS Memory Subsystem / MMU</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">NVMe SSD Storage</td>
                      <td className="p-3">512 GB–8 TB</td>
                      <td className="p-3 font-mono font-bold text-rose-700">~10–50 µs (100,000 cycles)</td>
                      <td className="p-3">OS Filesystem & NVMe Drivers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-700">
                <strong>False Sharing Danger:</strong> When two threads on separate CPU cores concurrently write to distinct variables that happen to share the same 64-byte cache line, the hardware cache-coherence protocol (MESI) constantly invalidates the cache line between cores, destroying multi-threaded performance.
              </div>
            </section>

            {/* 6. The MMU, Page Tables, TLBs, and Address Translation */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 6
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Virtual Memory Hardware Engine</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                6. The MMU, Page Tables, TLBs & Address Translation
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Every application sees an isolated, private virtual address space. Two unrelated processes can both store data at virtual address <code className="font-mono bg-stone-100 px-1 rounded">0x400000</code>; the <strong>Memory Management Unit (MMU)</strong> maps each to completely different physical page frames in DRAM.
              </p>

              {/* 4 KiB Translation Formula */}
              <div className="my-6 p-5 rounded-2xl border border-stone-200 bg-stone-50">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Address Translation Mathematics (4 KiB Standard Page)
                </h3>
                <p className="text-xs text-stone-600 mb-4">
                  Since <span className="font-mono font-bold">4096 = 2¹²</span>, the lowest <strong>12 bits</strong> represent the offset within the page frame. The upper bits represent the <strong>Virtual Page Number (VPN)</strong>.
                </p>

                {/* Interactive Page Offset Calculator */}
                <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50">
                  <p className="font-bold text-xs text-orange-950 mb-2">
                    Interactive Page Offset Calculator (Worked Example: 0x12345)
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="text-xs text-stone-600 font-mono">Virtual Address (Hex):</label>
                    <input
                      type="text"
                      value={calcVirtualAddr}
                      onChange={(e) => setCalcVirtualAddr(e.target.value)}
                      placeholder="e.g. 0x12345"
                      className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white font-mono text-xs font-bold text-stone-800"
                    />
                  </div>

                  {computedPageCalc && (
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                      <div className="p-2 rounded bg-white border border-orange-200">
                        <span className="text-[10px] text-stone-400 block">Input Address</span>
                        <span className="font-bold text-stone-900">{computedPageCalc.hexInput}</span>
                      </div>
                      <div className="p-2 rounded bg-white border border-orange-200">
                        <span className="text-[10px] text-stone-400 block">Virtual Page No.</span>
                        <span className="font-bold text-[#ea580c]">{computedPageCalc.vpnHex} ({computedPageCalc.vpnDec})</span>
                      </div>
                      <div className="p-2 rounded bg-white border border-orange-200">
                        <span className="text-[10px] text-stone-400 block">Page Offset (12-bit)</span>
                        <span className="font-bold text-emerald-700">{computedPageCalc.offsetHex} ({computedPageCalc.offsetDec})</span>
                      </div>
                      <div className="p-2 rounded bg-white border border-orange-200">
                        <span className="text-[10px] text-stone-400 block">Translation Rule</span>
                        <span className="text-stone-700 text-[11px]">Physical = Frame + {computedPageCalc.offsetHex}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Section 6 Knowledge Check */}
              <div className="mt-6 p-4 rounded-2xl border border-stone-200 bg-stone-50">
                <p className="text-xs font-bold text-stone-900 mb-2">
                  Checkpoint Question: What is the primary difference between a TLB miss and a page fault?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "a", label: "They always mean the same thing." },
                    {
                      id: "b",
                      label: "A TLB miss means a cached translation was not found; a page fault means the access needs kernel exception handling.",
                      isCorrect: true,
                    },
                    { id: "c", label: "A TLB miss always means the disk is being read." },
                    { id: "d", label: "A page fault can only occur in kernel mode." },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSection6QuizAnswer(option.id)}
                      className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                        section6QuizAnswer === option.id
                          ? option.isCorrect
                            ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
                            : "border-rose-400 bg-rose-50 text-rose-950 font-bold"
                          : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <span className="font-mono mr-2">{option.id.toUpperCase()}.</span>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. DMA, I/O Devices, and Device Controllers */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 7
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Asynchronous Hardware I/O</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                7. Direct Memory Access (DMA) & Device Controllers
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Without DMA, the CPU would be forced to execute programmed I/O loops, copying every byte from device registers into RAM. <strong>DMA</strong> offloads bulk data movement to the controller, freeing the CPU to execute application computation.
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 font-bold text-stone-700 border-b border-stone-200">
                    <tr>
                      <th className="p-3">Property</th>
                      <th className="p-3">Programmed I/O (PIO)</th>
                      <th className="p-3">Direct Memory Access (DMA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Data Transfer Execution</td>
                      <td className="p-3">CPU executes loops reading port/MMIO registers byte-by-byte</td>
                      <td className="p-3 font-bold text-emerald-800">Hardware controller moves data directly over PCIe bus into RAM</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">CPU Overhead</td>
                      <td className="p-3 text-rose-700 font-bold">100% CPU utilization during transfer</td>
                      <td className="p-3 text-emerald-700 font-bold">Near 0% (CPU only sets up descriptor buffers)</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Completion Notification</td>
                      <td className="p-3">CPU polling or synchronous return</td>
                      <td className="p-3">MSI-X hardware interrupt signals buffer ready</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. Boot Firmware, Bootloaders, and Kernel Startup */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 8
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Bootstrapping Sequence</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                8. Boot Firmware, Bootloaders & Kernel Initialization
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Bootstrapping is a chain of trust and hardware preparation. Each stage configures the minimum environment required to load the next stage.
              </p>

              {/* 6 Boot Stages Timeline */}
              <div className="mt-6 space-y-3 text-xs text-stone-700">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-stone-900 text-white font-mono font-bold text-[10px]">1</span>
                  <div>
                    <p className="font-bold text-stone-900">Power-On & CPU Reset</p>
                    <p className="text-stone-600 mt-0.5">CPU starts executing from architecture reset vector (e.g. 0xFFFFFFF0 in flash ROM).</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-stone-900 text-white font-mono font-bold text-[10px]">2</span>
                  <div>
                    <p className="font-bold text-stone-900">Firmware (UEFI / BIOS)</p>
                    <p className="text-stone-600 mt-0.5">Initializes memory controller DRAM, PCIe bus enumeration, checks Secure Boot keys, finds EFI System Partition (ESP).</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-stone-900 text-white font-mono font-bold text-[10px]">3</span>
                  <div>
                    <p className="font-bold text-stone-900">Bootloader (GRUB)</p>
                    <p className="text-stone-600 mt-0.5">Loads compressed kernel image (<code className="font-mono">vmlinuz</code>) and initial ramdisk (<code className="font-mono">initramfs</code>) into memory; passes kernel command-line arguments.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-stone-900 text-white font-mono font-bold text-[10px]">4</span>
                  <div>
                    <p className="font-bold text-stone-900">Initramfs (Early User Space)</p>
                    <p className="text-stone-600 mt-0.5">Unpacks temporary root filesystem in RAM to load NVMe, RAID, or LUKS disk encryption drivers required to mount the real disk.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-stone-900 text-white font-mono font-bold text-[10px]">5</span>
                  <div>
                    <p className="font-bold text-stone-900">Kernel Subsystem Initialization</p>
                    <p className="text-stone-600 mt-0.5">Initializes page tables, interrupt descriptor tables (IDT), CPU scheduler, and mounts root filesystem <code className="font-mono">/</code>.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-stone-900 text-white font-mono font-bold text-[10px]">6</span>
                  <div>
                    <p className="font-bold text-stone-900">First User-Space Process (PID 1: systemd)</p>
                    <p className="text-stone-600 mt-0.5">The kernel executes <code className="font-mono">/sbin/init</code>. PID 1 spawns logging, network managers, SSH daemon, and user login terminals.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE LAB (COMPILATION TO EXECUTION TRACING) (§9)            */}
        {/* ========================================================================= */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                    Section 9 · Lab 2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-1">
                    Trace a Program from Compilation to Execution
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compile C programs, inspect ELF headers, disassemble machine instructions with <code className="font-mono bg-stone-100 px-1 rounded">objdump</code>, trace system calls with <code className="font-mono bg-stone-100 px-1 rounded">strace</code>, and explore live virtual memory maps in <code className="font-mono bg-stone-100 px-1 rounded">/proc/[pid]/maps</code>.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleExecuteCommand("help")}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                  >
                    View Supported Commands
                  </button>
                  <button
                    onClick={() => setTerminalHistory([])}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-600 hover:text-stone-900 transition cursor-pointer"
                  >
                    Clear Console
                  </button>
                </div>
              </div>

              {/* Quick Command Launcher Pills */}
              <div className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Quick Run Experiments:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "gcc -Wall -Wextra -O0 hello.c -o hello && ./hello",
                    "file hello",
                    "readelf -h hello",
                    "readelf -l hello",
                    "objdump -d hello | grep -A 20 '<main>:'",
                    "gcc -Wall -Wextra -O0 inspect.c -o inspect && ./inspect",
                    "cat /proc/12460/maps",
                    "cat /proc/12460/status | head -n 12",
                    "strace ./hello",
                    "strace -e trace=process,memory,file ./hello",
                    "getconf PAGE_SIZE",
                  ].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleExecuteCommand(cmd)}
                      className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-orange-100 hover:text-[#ea580c] border border-stone-200 text-stone-700 font-mono text-[11px] transition cursor-pointer"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Linux Terminal Screen */}
              <div className="rounded-2xl border border-stone-800 bg-[#121214] p-4 text-white font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3 text-[11px] text-stone-400">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 font-bold text-stone-300">prepspaces@arch-lab: ~/module2</span>
                  </div>
                  <span>x86-64 GNU/Linux</span>
                </div>

                {/* History Output Area */}
                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 text-orange-400 font-bold">
                        <span className="text-emerald-400">prepspaces@arch-lab:~$</span>
                        <span>{item.cmd}</span>
                      </div>
                      <pre className="text-stone-300 text-[11px] whitespace-pre-wrap leading-relaxed pl-2 border-l border-stone-800">
                        {item.output}
                      </pre>
                    </div>
                  ))}
                </div>

                {/* Command Input Prompt */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleExecuteCommand();
                  }}
                  className="mt-4 pt-3 border-t border-stone-800 flex items-center gap-2"
                >
                  <span className="text-emerald-400 font-bold shrink-0">prepspaces@arch-lab:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type diagnostic command (e.g. readelf -h hello, strace ./hello, cat /proc/12460/maps)..."
                    className="flex-1 bg-transparent text-white focus:outline-hidden text-xs font-mono placeholder:text-stone-600"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 rounded bg-[#ea580c] hover:bg-orange-600 text-white font-bold text-[11px] transition cursor-pointer"
                  >
                    Run
                  </button>
                </form>
              </div>

              {/* Lab Guided Experiments Breakdown */}
              <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-700">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900">ELF Headers & Machine Code</p>
                  <p className="mt-1 text-stone-600 leading-relaxed">
                    Examine <code className="font-mono bg-stone-200 px-1 rounded">readelf -l hello</code>. Notice how ELF specifies memory protection flags: <code className="font-mono">R E</code> (Read + Execute) for code, and <code className="font-mono">RW</code> (Read + Write) for data. The processor will never allow code execution on data pages!
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900">System Call Tracing (strace)</p>
                  <p className="mt-1 text-stone-600 leading-relaxed">
                    Notice how <code className="font-mono">printf()</code> invokes <code className="font-mono">write(1, ...)</code>. The C library buffers characters until a newline or explicit <code className="font-mono">fflush()</code> before making the expensive Ring 0 system call transition.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900">Live Virtual Memory Maps</p>
                  <p className="mt-1 text-stone-600 leading-relaxed">
                    Run <code className="font-mono bg-stone-200 px-1 rounded">cat /proc/12460/maps</code>. Identify the stack (grows down), heap (grows up), and dynamic glibc library mappings created via <code className="font-mono">mmap()</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: LAB REPORT CHECKLIST (§10)                                         */}
        {/* ========================================================================= */}
        {activeTab === "checklist" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 10 · Laboratory Report
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-1">
                  Module 2 Lab Completion Checklist & Answers
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Track your laboratory observations across the compilation, assembly, process inspection, and system call tracing experiments.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">Progress</p>
                  <p className="text-lg font-black text-[#ea580c]">{completedChecklistCount} / 8 Complete</p>
                </div>
                <div className="w-16 h-2 rounded-full bg-stone-200 overflow-hidden">
                  <div
                    className="h-full bg-[#ea580c] transition-all duration-300"
                    style={{ width: `${(completedChecklistCount / 8) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 8 Interactive Checklist Items */}
            <div className="mt-6 space-y-3">
              {[
                {
                  key: "compileElf",
                  title: "Compiled C Program & Inspected ELF Format",
                  desc: "Executed 'gcc -O0 hello.c -o hello' and inspected headers using 'file hello' and 'readelf -h hello'.",
                },
                {
                  key: "inspectAssembly",
                  title: "Inspected Generated Assembly & Machine Instructions",
                  desc: "Disassembled the compiled binary using 'objdump -d hello'; identified main stack frame setup and calls.",
                },
                {
                  key: "recordPid",
                  title: "Recorded Process ID and Inspected Process State",
                  desc: "Executed inspect binary, obtained live PID, and inspected /proc/[pid]/status process flags.",
                },
                {
                  key: "traceSyscalls",
                  title: "Traced System Calls using strace",
                  desc: "Captured execve, brk, mmap, openat, getpid, and write system calls during program startup.",
                },
                {
                  key: "archPageSize",
                  title: "Recorded CPU Architecture & Hardware Page Size",
                  desc: "Verified x86-64 architecture via 'uname -m' and confirmed 4096-byte hardware page via 'getconf PAGE_SIZE'.",
                },
                {
                  key: "memoryMaps",
                  title: "Identified Code, Heap, Shared Library, and Stack Mappings",
                  desc: "Inspected /proc/[pid]/maps; observed stack growing downwards, heap growing upwards, and glibc mappings.",
                },
                {
                  key: "mmuPaging",
                  title: "Explained How the MMU & Page Tables Support Virtual Memory",
                  desc: "Articulated how VPNs translate to physical page frames while 12-bit page offsets remain unchanged.",
                },
                {
                  key: "bootStages",
                  title: "Explained the Major Boot Stages from Reset to PID 1",
                  desc: "Traced CPU reset vector -> UEFI firmware -> GRUB bootloader -> initramfs -> kernel init -> systemd.",
                },
              ].map((item) => {
                const isChecked = checklist[item.key];
                return (
                  <div
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? "border-emerald-300 bg-emerald-50/50"
                        : "border-stone-200 bg-stone-50/50 hover:bg-stone-50"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border mt-0.5 transition-colors ${
                        isChecked
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check size={13} strokeWidth={3} />}
                    </div>
                    <div>
                      <h3 className={`text-xs sm:text-sm font-bold ${isChecked ? "text-emerald-950" : "text-stone-900"}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Copy Lab Template Report */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-stone-900">Module 2 Formal Lab Report Answers Template</h3>
                <button
                  onClick={() =>
                    copyCode(
                      `# Module 2 Lab Report: Computer Architecture for OS Engineers\n\n## 1. Questions & Answers\n- **C source vs Assembly vs Machine instructions:** C is human-readable; Assembly is mnemonic representation of machine opcodes; Machine instructions are raw binary bytes decoded by CPU decoders.\n- **Executable loading:** OS loads ELF segments into virtual memory address space, links shared libraries via dynamic linker, and sets RIP to entry point.\n- **System call kernel entry:** User-space places syscall # in RAX, executes syscall instruction -> CPU elevates privilege to Ring 0, saves RIP, and executes kernel syscall handler.\n- **Same virtual address in two processes:** MMU translates VPNs through distinct page tables (CR3 register) to completely separate physical memory frames in DRAM.\n- **TLB miss vs Page fault:** TLB miss means cached translation was absent (hardware page walk); Page fault means memory is not mapped or violates protection (kernel exception).\n- **DMA efficiency:** Controller transfers data directly to DRAM via PCIe bus, eliminating CPU programmed I/O loops.\n- **Firmware vs Bootloader vs Kernel:** Firmware initializes hardware and finds boot disk; Bootloader loads kernel/initramfs into memory; Kernel initializes OS subsystems and runs user space.\n- **Timer interrupt preemption:** Hardware timer fires periodic interrupts, transferring control to scheduler to preempt CPU-bound tasks.\n\n## 2. System Verification\n- Architecture: x86-64 | Page Size: 4096 bytes\n- Binary: ELF 64-bit PIE executable`,
                      "lab2-template"
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  {copiedCodeId === "lab2-template" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCodeId === "lab2-template" ? "Copied Answers!" : "Copy Report Answers Template"}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT QUIZ (§11)                                    */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 11 · University Assessment
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-1">
                  Module 2 Architecture Assessment Quiz
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  8 in-depth computer architecture questions testing your understanding of registers, privilege rings, context switching, paging, DMA, and boot sequences.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {quizSubmitted ? (
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-orange-50 border border-orange-200">
                    <Award size={22} className="text-[#ea580c]" />
                    <div>
                      <p className="text-[11px] font-mono text-stone-500 uppercase">Final Score</p>
                      <p className="text-base font-extrabold text-[#ea580c]">
                        {calculateQuizScore()} / 8 Marks ({Math.round((calculateQuizScore() / 8) * 100)}%)
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length < 8}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer ${
                      Object.keys(quizAnswers).length === 8
                        ? "bg-[#ea580c] text-white hover:bg-orange-600 shadow-orange-500/20"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    Submit Answers ({Object.keys(quizAnswers).length}/8 Answered)
                  </button>
                )}
              </div>
            </div>

            {/* Quiz Questions List */}
            <div className="mt-6 space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOption = quizAnswers[q.id];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctIndex;

                return (
                  <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                        <span className="font-mono text-[#ea580c] mr-2">Q{idx + 1}.</span>
                        {q.question}
                      </h3>
                      {quizSubmitted && (
                        <span
                          className={`shrink-0 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {isCorrect ? "1 Mark (Correct)" : "0 Marks"}
                        </span>
                      )}
                    </div>

                    <div className="mt-3.5 space-y-2">
                      {q.options.map((option, optIdx) => {
                        const isThisSelected = selectedOption === optIdx;
                        let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (isThisSelected && !isCorrect) {
                            btnStyle = "border-rose-400 bg-rose-50 text-rose-950 font-bold line-through";
                          } else {
                            btnStyle = "border-stone-200 bg-stone-100 text-stone-400 opacity-60";
                          }
                        } else if (isThisSelected) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                          >
                            <span>
                              <span className="font-mono font-bold mr-2 text-stone-400">
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              {option}
                            </span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 p-3 rounded-xl bg-stone-100 border border-stone-200/80 text-xs text-stone-700">
                        <p className="font-bold text-stone-900 mb-1">Architectural Explanation:</p>
                        <p className="leading-relaxed text-stone-600">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {quizSubmitted && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-200 bg-white font-bold text-xs text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                >
                  <RotateCcw size={15} />
                  <span>Retake Quiz</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 12: UNIVERSITY REFERENCES & NEXT MODULE PREVIEW                   */}
        {/* ========================================================================= */}
        <section className="mt-8 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
              Section 12
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs text-stone-500 font-medium">Curricular References</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
            University-Level Reference Materials
          </h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">MIT 6.1810 — Operating System Engineering</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                System calls, traps, virtual memory, page tables, interrupts, and RISC-V privileged execution in xv6.
              </p>
              <a
                href="https://pdos.csail.mit.edu/6.1810/2025/"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>MIT 6.1810 Course Materials</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">Computer Systems: A Programmer's Perspective (CS:APP)</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                By Randal E. Bryant and David R. O'Hallaron (Carnegie Mellon University). Machine-level execution, assembly, memory hierarchy, linking, and virtual memory.
              </p>
              <a
                href="https://csapp.cs.cmu.edu/"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>CMU CS:APP Resources</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">Intel® 64 and IA-32 Architectures Software Developer’s Manual</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                The definitive hardware reference for instruction behavior, privilege levels, exceptions, multi-level paging (PML4/PML5), interrupts, and processor control registers.
              </p>
              <a
                href="https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>Intel Architecture Manuals</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">Official Linux Kernel DMA & Memory Documentation</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Kernel internals for memory management, DMA-mapping APIs, cache coherency, and device driver frameworks.
              </p>
              <a
                href="https://docs.kernel.org/"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>Official Kernel Documentation</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Module 2 Completion Criteria Banner */}
          <div className="mt-6 p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 text-xs text-emerald-950">
            <h4 className="font-bold flex items-center gap-1.5 text-sm text-emerald-900">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Module 2 Completion Criteria
            </h4>
            <p className="mt-1 leading-relaxed">
              You are ready to advance to <strong>Module 3: Processes, Threads, and CPU Scheduling</strong> when you can explain CPU register execution state, distinguish mode switching from context switching, trace a system call lifecycle, describe interrupt-driven scheduling, calculate a 12-bit page offset, explain how DMA enables concurrent I/O, and trace the Linux boot sequence from CPU reset to PID 1.
            </p>
          </div>
        </section>

        {/* Global Footer */}
        <footer className="mt-12 text-center text-xs text-stone-400 py-6">
          © {new Date().getFullYear()} PrepSpaces. Operating Systems Master Curriculum.
        </footer>
      </div>
    </div>
  );
}
