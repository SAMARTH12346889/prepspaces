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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 10                                  */
/* Virtual Memory and Address Translation                                      */
/* MMU · Page Tables · TLB Caching · Permissions · mmap · Page Table Walks     */
/* -------------------------------------------------------------------------- */

export default function OSVirtualMemory() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(33);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Virtual-to-Physical Address Translation Engine
  // ---------------------------------------------------------------------------
  const [inputVA, setInputVA] = useState(12345);
  const [pageSizeBytes, setPageSizeBytes] = useState(4096); // 1024, 2048, 4096, 8192
  const [mappedPFN, setMappedPFN] = useState(9);

  const translationResults = useMemo(() => {
    const va = Math.max(0, parseInt(inputVA, 10) || 0);
    const pSize = pageSizeBytes;
    const vpn = Math.floor(va / pSize);
    const offset = va % pSize;
    const pfn = mappedPFN;
    const pa = pfn * pSize + offset;

    // Binary / Hex representations
    const vaHex = "0x" + va.toString(16).toUpperCase();
    const paHex = "0x" + pa.toString(16).toUpperCase();
    const offsetHex = "0x" + offset.toString(16).toUpperCase();

    return {
      va,
      pSize,
      vpn,
      offset,
      pfn,
      pa,
      vaHex,
      paHex,
      offsetHex,
    };
  }, [inputVA, pageSizeBytes, mappedPFN]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: TLB Effective Access Time (EAT) Calculator
  // ---------------------------------------------------------------------------
  const [tlbHitRatio, setTlbHitRatio] = useState(0.95); // 0.80 to 0.999
  const [tlbLatency, setTlbLatency] = useState(5); // ns
  const [memLatency, setMemLatency] = useState(100); // ns
  const [ptLevels, setPtLevels] = useState(4); // 1, 2, 4 levels (x86-64 uses 4)

  const eatResults = useMemo(() => {
    const h = tlbHitRatio;
    const t_tlb = tlbLatency;
    const t_mem = memLatency;
    const levels = ptLevels;

    // Hit: TLB lookup + 1 physical memory access
    const t_hit = t_tlb + t_mem;
    // Miss: TLB lookup + (levels * memory accesses for page table walk) + 1 data memory access
    const t_miss = t_tlb + levels * t_mem + t_mem;
    // EAT formula
    const eat = h * t_hit + (1 - h) * t_miss;
    const slowdownVsL1 = (eat / t_hit).toFixed(2);

    return {
      t_hit,
      t_miss,
      eat: eat.toFixed(2),
      slowdownVsL1,
    };
  }, [tlbHitRatio, tlbLatency, memLatency, ptLevels]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: Page Table Overhead Estimator
  // ---------------------------------------------------------------------------
  const [addressBits, setAddressBits] = useState(48); // 32, 36, 48
  const [overheadPageSize, setOverheadPageSize] = useState(4096); // 4096, 65536
  const [pteSizeBytes, setPteSizeBytes] = useState(8); // 4, 8

  const overheadResults = useMemo(() => {
    const totalVABytes = Math.pow(2, addressBits);
    const totalPages = Math.pow(2, addressBits) / overheadPageSize;
    const flatTableSizeBytes = totalPages * pteSizeBytes;

    let flatSizeStr = "";
    if (flatTableSizeBytes >= 1024 * 1024 * 1024 * 1024) {
      flatSizeStr = (flatTableSizeBytes / (1024 * 1024 * 1024 * 1024)).toFixed(1) + " TiB";
    } else if (flatTableSizeBytes >= 1024 * 1024 * 1024) {
      flatSizeStr = (flatTableSizeBytes / (1024 * 1024 * 1024)).toFixed(1) + " GiB";
    } else if (flatTableSizeBytes >= 1024 * 1024) {
      flatSizeStr = (flatTableSizeBytes / (1024 * 1024)).toFixed(1) + " MiB";
    } else {
      flatSizeStr = (flatTableSizeBytes / 1024).toFixed(1) + " KiB";
    }

    return {
      totalPages: totalPages.toLocaleString(),
      flatSizeStr,
    };
  }, [addressBits, overheadPageSize, pteSizeBytes]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 4: Terminal Sandbox State
  // ---------------------------------------------------------------------------
  const [terminalHistory, setTerminalHistory] = useState([
    {
      command: "python3 vm_simulator.py",
      output: `[PrepSpaces Virtual Memory Address Translation Simulator]
Virtual Address Space: 16-bit (65536 bytes) | Page Size: 1024 bytes (1 KiB)
Offset: 10 bits | Page Table: Two-Level Hierarchical (8 entries per level)

--- Translation Test Suite ---
VA: 0x0000 (0)     -> VPN:  0 (L1: 0, L2: 0) | Offset:    0 | Frame: 5 | PA: 0x1400 (5120) [STATUS: SUCCESS (R/W)]
VA: 0x03FF (1023)  -> VPN:  0 (L1: 0, L2: 0) | Offset: 1023 | Frame: 5 | PA: 0x17FF (6143) [STATUS: SUCCESS (R/W)]
VA: 0x0400 (1024)  -> VPN:  1 (L1: 0, L2: 1) | Offset:    0 | Frame: 2 | PA: 0x0800 (2048) [STATUS: SUCCESS (R)]
VA: 0x0400 (WRITE) -> VPN:  1 (L1: 0, L2: 1) | [PROTECTION FAULT: Page is Read-Only! SIGSEGV]
VA: 0x0800 (2048)  -> VPN:  2 (L1: 0, L2: 2) | [PAGE FAULT: Unmapped Virtual Page! SIGSEGV]
VA: 0x2000 (8192)  -> VPN:  8 (L1: 1, L2: 0) | Offset:    0 | Frame: 7 | PA: 0x1C00 (7168) [STATUS: SUCCESS (R/W)]
VA: 0x2400 (EXEC)  -> VPN:  9 (L1: 1, L2: 1) | Offset:    0 | Frame: 4 | PA: 0x1000 (4096) [STATUS: SUCCESS (EXEC)]`,
      type: "info",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // ---------------------------------------------------------------------------
  // Section: Capstone Lab Checklist State (9 items matching curriculum)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    logicalVirtualPhysical: false,
    segmentationVsPaging: false,
    addressTranslationMath: false,
    singleVsMultilevel: false,
    pageTableOverhead: false,
    tlbEATCalculation: false,
    pagePermissionsCOW: false,
    mmapDemandPaging: false,
    vmSimulatorLab: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // Section: Knowledge Assessment State (6 questions matching curriculum)
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "1. Why does the page offset remain completely unchanged during virtual-to-physical address translation?",
      options: [
        "Because the MMU ignores offsets during physical RAM routing",
        "Because virtual pages and physical frames are defined with the exact same fixed byte size",
        "Because offsets only apply to segment descriptors, not paging",
        "Because the operating system copies offsets into CPU control register CR3",
      ],
      correctIndex: 1,
      explanation:
        "A virtual page and a physical frame share the exact same capacity (e.g. 4096 bytes). Therefore, the relative offset from the start of the virtual page matches the exact relative offset from the start of the physical frame, leaving the lower offset bits unaltered.",
    },
    {
      id: 2,
      question: "2. What is the fundamental difference between a TLB miss and a page fault?",
      options: [
        "A TLB miss is a fatal hardware crash, whereas a page fault is a soft warning",
        "A TLB miss means the translation was not cached in the TLB (and can be resolved by walking page tables in RAM); a page fault means the page is unmapped or absent from physical RAM",
        "A TLB miss only happens during write operations; page faults only happen on instruction reads",
        "A page fault is resolved in hardware microcode, while a TLB miss always requires an OS kernel trap",
      ],
      correctIndex: 1,
      explanation:
        "A TLB miss simply means the translation is absent from the CPU's fast cache. If the page table entry in RAM is valid, the hardware MMU walker fills the TLB with zero software overhead. A page fault occurs when the page table entry itself has Present=0 or invalid permissions, triggering an OS kernel interrupt.",
    },
    {
      id: 3,
      question: "3. What is the primary advantage of multilevel page tables over single-level flat page tables?",
      options: [
        "They make address translation faster by skipping memory reads",
        "They drastically reduce memory overhead for sparse address spaces by allocating lower-level tables only for populated virtual regions",
        "They eliminate the need for the Translation Lookaside Buffer (TLB)",
        "They prevent all internal fragmentation in user applications",
      ],
      correctIndex: 1,
      explanation:
        "In a 64-bit architecture, a flat single-level table would require 512 GiB of RAM per process! Multilevel page tables form a tree structure where directories pointing to unmapped virtual memory regions are simply marked null, allowing a typical program to consume only a few kilobytes of page table RAM.",
    },
    {
      id: 4,
      question: "4. In a system with 4 KiB pages, 100ns RAM latency, and a 5ns TLB with a 95% hit ratio, what is the Effective Access Time (EAT) for a 1-level table?",
      options: [
        "105 ns",
        "110 ns",
        "125 ns",
        "205 ns",
      ],
      correctIndex: 1,
      explanation:
        "Hit time = 5ns (TLB) + 100ns (Data) = 105ns. Miss time = 5ns (TLB) + 100ns (Page Table) + 100ns (Data) = 205ns. EAT = (0.95 * 105) + (0.05 * 205) = 99.75 + 10.25 = 110 ns.",
    },
    {
      id: 5,
      question: "5. How does Copy-on-Write (COW) optimize process creation during fork()?",
      options: [
        "Parent and child initially share identical physical frames marked read-only; physical pages are only duplicated when one process attempts a write",
        "It forces the child process to execute on a separate physical CPU socket",
        "It compresses all physical memory frames into a swap partition",
        "It writes the child process image directly to NVMe storage",
      ],
      correctIndex: 0,
      explanation:
        "Duplicating a multi-gigabyte address space on every fork() would be slow and wasteful (especially if followed by exec()). Copy-on-Write marks the shared physical pages as read-only. When either process writes, the MMU triggers a protection fault, allowing the OS to allocate a fresh page, copy the 4KB data, and update the mapping.",
    },
    {
      id: 6,
      question: "6. What signal does the Linux kernel deliver to a user-space process that attempts to write to a page marked read-only?",
      options: [
        "SIGTERM (Termination)",
        "SIGSEGV (Segmentation Violation / Protection Fault)",
        "SIGKILL (Uncatchable Kill)",
        "SIGPIPE (Broken Pipe)",
      ],
      correctIndex: 1,
      explanation:
        "When an instruction attempts an unauthorized memory access (such as writing to a read-only page or accessing an unmapped virtual address), the hardware MMU raises an architectural page fault. The Linux kernel fault handler identifies the violation and delivers a SIGSEGV signal to the faulting thread.",
    },
  ];

  const handleSelectQuizAnswer = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  }, [quizAnswers]);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  // Run simulated commands in interactive terminal
  const executeTerminalCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    let output = "";
    let type = "info";

    if (raw === "clear") {
      setTerminalHistory([]);
      setCustomCommand("");
      return;
    }

    if (raw === "help") {
      output = `Available simulated commands:
  python3 vm_simulator.py
  gcc -Wall -Wextra mmap_demo.c -o mmap_demo && ./mmap_demo
  cat /proc/self/maps
  pmap -x $$
  clear`;
    } else if (raw.includes("vm_simulator.py")) {
      output = `[PrepSpaces Virtual Memory Address Translation Simulator]
Virtual Address Space: 16-bit (65536 bytes) | Page Size: 1024 bytes (1 KiB)
Offset: 10 bits | Page Table: Two-Level Hierarchical (8 entries per level)

--- Translation Test Suite ---
VA: 0x0000 (0)     -> VPN:  0 (L1: 0, L2: 0) | Offset:    0 | Frame: 5 | PA: 0x1400 (5120) [STATUS: SUCCESS (R/W)]
VA: 0x03FF (1023)  -> VPN:  0 (L1: 0, L2: 0) | Offset: 1023 | Frame: 5 | PA: 0x17FF (6143) [STATUS: SUCCESS (R/W)]
VA: 0x0400 (1024)  -> VPN:  1 (L1: 0, L2: 1) | Offset:    0 | Frame: 2 | PA: 0x0800 (2048) [STATUS: SUCCESS (R)]
VA: 0x0400 (WRITE) -> VPN:  1 (L1: 0, L2: 1) | [PROTECTION FAULT: Page is Read-Only! SIGSEGV]
VA: 0x0800 (2048)  -> VPN:  2 (L1: 0, L2: 2) | [PAGE FAULT: Unmapped Virtual Page! SIGSEGV]
VA: 0x2000 (8192)  -> VPN:  8 (L1: 1, L2: 0) | Offset:    0 | Frame: 7 | PA: 0x1C00 (7168) [STATUS: SUCCESS (R/W)]
VA: 0x2400 (EXEC)  -> VPN:  9 (L1: 1, L2: 1) | Offset:    0 | Frame: 4 | PA: 0x1000 (4096) [STATUS: SUCCESS (EXEC)]`;
      type = "success";
    } else if (raw.includes("mmap_demo")) {
      output = `gcc -Wall -Wextra mmap_demo.c -o mmap_demo
./mmap_demo
Mapped file 'data.bin' (18 bytes) into virtual address 0x7f83b2a00000
Page Permissions: PROT_READ | Flags: MAP_PRIVATE
First byte from memory: 'V' (0x56)
Full string in mapped buffer: "Virtual memory lab"
Memory safely unmapped via munmap()`;
      type = "success";
    } else if (raw.includes("/proc/self/maps")) {
      output = `00400000-00452000 r-xp 00000000 08:01 123456  /usr/bin/cat (text/code)
00651000-00652000 r--p 00051000 08:01 123456  /usr/bin/cat (rodata)
00652000-00653000 rw-p 00052000 08:01 123456  /usr/bin/cat (data/bss)
01a2b000-01a4c000 rw-p 00000000 00:00 0       [heap]
7ffd8a120000-7ffd8a141000 rw-p 00000000 00:00 0 [stack]
7ffd8a1b5000-7ffd8a1b9000 r--p 00000000 00:00 0 [vvar]
7ffd8a1b9000-7ffd8a1bb000 r-xp 00000000 00:00 0 [vdso]`;
      type = "info";
    } else if (raw.includes("pmap")) {
      output = `24912:   bash
Address           Kbytes     RSS   Dirty Mode  Mapping
0000000000400000     884     884       0 r-x-- bash
00000000006dc000      36      36      36 rw--- bash
00000000006e5000      20      20      20 rw---   [ anon ]
0000000001f37000    1484    1484    1484 rw---   [ heap ]
00007fffa9b20000     132      24      24 rw---   [ stack ]
total kB            2556    2448    1564`;
      type = "info";
    } else {
      output = `bash: ${raw}: command not found. Type 'help' for available commands.`;
      type = "error";
    }

    setTerminalHistory((prev) => [...prev, { command: raw, output, type }]);
    setCustomCommand("");
  };

  // Complete Python simulator code from curriculum
  const simulatorSourceCode = `"""
vm_simulator.py - Virtual-to-Physical Address Translation Simulator
A teaching simulator modeling a 16-bit virtual address space, 1 KiB pages,
two-level page tables, permissions (R/W/X), and translation exceptions.
"""
from dataclasses import dataclass

VA_BITS = 16
PAGE_SIZE = 1024
OFFSET_BITS = 10
INDEX_BITS = 3  # 8 entries per level
ENTRIES = 1 << INDEX_BITS
PTE_BYTES = 4

@dataclass
class PTE:
    frame: int
    readable: bool = True
    writable: bool = False
    executable: bool = False

# Virtual page number -> Physical frame and permissions
page_table = {
    0: PTE(frame=5, readable=True, writable=True),
    1: PTE(frame=2, readable=True, writable=False),
    8: PTE(frame=7, readable=True, writable=True),
    9: PTE(frame=4, readable=True, writable=False, executable=True),
}

def translate(va: int, access: str = "read") -> dict:
    if not isinstance(va, int) or not (0 <= va < (1 << VA_BITS)):
        return {"status": "invalid virtual address"}
    if access not in ("read", "write", "execute"):
        return {"status": "invalid access type"}

    vpn = va // PAGE_SIZE
    offset = va % PAGE_SIZE

    # Hierarchical index decomposition (Two-level)
    l1_idx = (vpn >> INDEX_BITS) & (ENTRIES - 1)
    l2_idx = vpn & (ENTRIES - 1)

    if vpn not in page_table:
        return {
            "status": "PAGE FAULT: unmapped page",
            "va": va,
            "vpn": vpn,
            "offset": offset,
            "l1_idx": l1_idx,
            "l2_idx": l2_idx
        }

    pte = page_table[vpn]
    # Check permissions
    if access == "read" and not pte.readable:
        return {"status": "PROTECTION FAULT: not readable", "va": va, "vpn": vpn}
    if access == "write" and not pte.writable:
        return {"status": "PROTECTION FAULT: page is read-only", "va": va, "vpn": vpn}
    if access == "execute" and not pte.executable:
        return {"status": "PROTECTION FAULT: execute-disabled", "va": va, "vpn": vpn}

    pa = (pte.frame * PAGE_SIZE) + offset
    return {
        "status": "SUCCESS",
        "va": va,
        "vpn": vpn,
        "offset": offset,
        "l1_idx": l1_idx,
        "l2_idx": l2_idx,
        "frame": pte.frame,
        "pa": pa
    }

if __name__ == "__main__":
    test_cases = [
        (0, "read"),
        (1023, "read"),
        (1024, "read"),
        (1024, "write"),
        (2048, "read"),
        (8192, "read"),
        (9216, "execute"),
    ]
    print("=== VM ADDRESS TRANSLATION RESULTS ===")
    for va, acc in test_cases:
        res = translate(va, acc)
        if res["status"] == "SUCCESS":
            print(f"VA: {va:5d} ({acc:7s}) -> VPN: {res['vpn']:2d} | Frame: {res['frame']:2d} | Offset: {res['offset']:4d} | PA: {res['pa']:5d} [OK]")
        else:
            print(f"VA: {va:5d} ({acc:7s}) -> [{res['status']}]")
`;

  // mmap C code from curriculum
  const mmapSourceCode = `/* mmap_demo.c - Demonstrates Memory-Mapped File I/O */
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>

int main(void) {
    int fd = open("data.bin", O_RDONLY);
    if (fd == -1) {
        perror("open");
        return 1;
    }

    struct stat st;
    if (fstat(fd, &st) == -1) {
        perror("fstat");
        close(fd);
        return 1;
    }

    if (st.st_size == 0) {
        close(fd);
        puts("Empty file");
        return 0;
    }

    // Map file into process virtual address space
    void *mapping = mmap(NULL, (size_t)st.st_size, PROT_READ, MAP_PRIVATE, fd, 0);
    if (mapping == MAP_FAILED) {
        perror("mmap");
        close(fd);
        return 1;
    }

    const unsigned char *bytes = mapping;
    printf("First byte: %c (0x%02x)\\n", bytes[0], (unsigned)bytes[0]);
    printf("Total mapped length: %ld bytes\\n", (long)st.st_size);

    if (munmap(mapping, (size_t)st.st_size) == -1) {
        perror("munmap");
        close(fd);
        return 1;
    }
    close(fd);
    return 0;
}`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-900">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Navigation Header */}
        <ModuleNav
          track="os"
          currentModuleId="virtual-memory"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Nova OS Tutor"
        />

        {/* Hero Section */}
        <section className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs mb-8 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
                  <Cpu className="w-3.5 h-3.5" />
                  Module 10 of 15
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                  Hardware MMU · Hierarchical Page Tables · TLB Caching · mmap
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                Virtual Memory and Address Translation
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                Virtual memory is the bedrock of modern OS multitasking, process isolation, and protection. Trace addresses through the MMU translation pipeline, calculate page-table storage overhead across architectures, model TLB hit rates and Effective Access Time (EAT), and build a complete address translation simulator.
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-stone-100">
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Estimated Time
                </div>
                <div className="text-lg font-bold text-stone-800">2.5–3.5 Hours</div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Capstone Lab
                </div>
                <div className="text-sm font-medium text-stone-700">Two-Level VM Simulator in Python</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 flex items-center gap-2 border-b border-stone-200 overflow-x-auto pb-px">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "theory"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              1. Curriculum & Theory
            </button>
            <button
              onClick={() => setActiveTab("interactive-lab")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "interactive-lab"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <Search className="w-4 h-4" />
              2. Address Translation & TLB Lab
            </button>
            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "checklist"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              3. Capstone Checklist ({completedChecklistCount}/9)
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "quiz"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <Award className="w-4 h-4" />
              4. Knowledge Assessment
            </button>
          </div>
        </section>

        {/* AI Assistant Drawer */}
        {showAiTutor && (
          <div className="mb-8">
            <LearningRo currentTopic="os-virtual-memory" />
          </div>
        )}

        {/* TAB 1: CURRICULUM & THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Learning Outcomes Box */}
            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-orange-200 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-orange-600" />
                Module 10 Learning Outcomes
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                By completing this module, you will master the hardware-software contracts governing memory translation, TLB caching, and page tables:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Distinguish logical, virtual, and physical addresses across hardware architectures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Compare contiguous allocation, segmentation, and paging trade-offs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Translate virtual addresses using VPNs, offsets, and physical frame numbers.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Explain single-level and multilevel hierarchical page table structures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Calculate page-table storage overhead for 32-bit, 36-bit, and 48-bit address spaces.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Calculate TLB Effective Access Time (EAT) and distinguish TLB misses from page faults.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Explain page permissions (R/W/X), process address-space isolation, and Copy-on-Write (COW).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Describe memory-mapped files (<code className="text-xs bg-stone-200 px-1 py-0.5 rounded font-mono">mmap</code>) and demand paging mechanics.</span>
                </div>
              </div>
            </div>

            {/* LESSON 1: ADDRESSING FUNDAMENTALS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 1
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Logical, Virtual, and Physical Addresses
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  In a virtual-memory system, applications never interact directly with physical RAM pins or memory chips. Instead, the CPU produces <strong>virtual addresses</strong> which are translated in hardware by the <strong>Memory Management Unit (MMU)</strong> into <strong>physical addresses</strong>.
                </p>

                {/* Translation Flow Diagram */}
                <div className="bg-stone-100 border border-stone-200 rounded-xl p-5 my-4 font-mono text-xs">
                  <div className="text-stone-900 font-bold font-sans text-sm mb-3">
                    The Hardware MMU Translation Pipeline:
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 bg-blue-100 border border-blue-300 rounded text-center text-blue-950 font-bold">
                      1. CPU Instruction Fetch or Load/Store produces Virtual Address (VA)
                    </div>
                    <div className="text-center text-stone-500 font-bold">↓ Check Translation Lookaside Buffer (TLB) Cache</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-emerald-100 border border-emerald-300 rounded text-center text-emerald-950 font-bold">
                        TLB Hit (~1ns): Physical Frame Number (PFN) returned instantly
                      </div>
                      <div className="p-2 bg-amber-100 border border-amber-300 rounded text-center text-amber-950 font-bold">
                        TLB Miss (~100-400ns): Hardware walks Page Table tree in RAM
                      </div>
                    </div>
                    <div className="text-center text-stone-500 font-bold">↓ Combine Frame with Invariant Offset</div>
                    <div className="p-2.5 bg-purple-100 border border-purple-300 rounded text-center text-purple-950 font-bold">
                      Physical Address (PA) = (PFN × PageSize) + Offset
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Address Translation Mathematics and Offset Invariance
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  For a page size of $P$ bytes (e.g. 4096 bytes), any virtual address $VA$ decomposes into:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 font-mono text-xs">
                  <div className="bg-stone-50 border border-stone-200 p-3 rounded-lg">
                    <span className="font-bold text-stone-800">Virtual Page Number (VPN):</span>
                    <div className="text-orange-700 font-bold mt-1">VPN = ⌊VA / P⌋</div>
                  </div>
                  <div className="bg-stone-50 border border-stone-200 p-3 rounded-lg">
                    <span className="font-bold text-stone-800">Page Offset:</span>
                    <div className="text-orange-700 font-bold mt-1">Offset = VA mod P</div>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-lg text-xs text-amber-900 leading-relaxed">
                  <strong>Why does the offset remain identical?</strong> Because virtual pages and physical frames are defined with the exact same fixed byte size. The offset points to the exact same relative byte within the frame as it did within the virtual page!
                </div>
              </div>
            </article>

            {/* LESSON 2: CONTIGUOUS VS SEGMENTATION VS PAGING */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 2
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Contiguous Allocation, Segmentation, and Paging
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                {/* Comparison Table */}
                <div className="overflow-x-auto my-4 border border-stone-200 rounded-xl shadow-xs">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-900 font-semibold">
                      <tr>
                        <th className="px-4 py-3">Property</th>
                        <th className="px-4 py-3">Contiguous Allocation</th>
                        <th className="px-4 py-3">Segmentation</th>
                        <th className="px-4 py-3">Paging</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono text-xs">
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Allocation Unit</td>
                        <td className="px-4 py-3 text-stone-600">Single contiguous physical block</td>
                        <td className="px-4 py-3 text-stone-600">Variable logical segment (code, data)</td>
                        <td className="px-4 py-3 text-emerald-700 font-semibold font-sans">Fixed-size page (4 KiB, 2 MiB)</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">External Fragmentation</td>
                        <td className="px-4 py-3 text-rose-700 font-bold">Severe (requires compaction)</td>
                        <td className="px-4 py-3 text-rose-700 font-bold">Frequent between variable segments</td>
                        <td className="px-4 py-3 text-emerald-700 font-semibold font-sans">Zero (any page fits any frame)</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Internal Waste</td>
                        <td className="px-4 py-3 text-stone-600">Depends on partition scheme</td>
                        <td className="px-4 py-3 text-stone-600">Negligible</td>
                        <td className="px-4 py-3 text-amber-700 font-sans">Small waste on final partial page</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Translation Hardware</td>
                        <td className="px-4 py-3 text-stone-600">Base and Bounds registers</td>
                        <td className="px-4 py-3 text-stone-600">Segment Table (Base + Limit)</td>
                        <td className="px-4 py-3 text-blue-700 font-semibold font-sans">MMU Page Tables &amp; TLB</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Fine-Grained Protection</td>
                        <td className="px-4 py-3 text-stone-500">None</td>
                        <td className="px-4 py-3 text-stone-600">Per-segment</td>
                        <td className="px-4 py-3 text-emerald-700 font-semibold font-sans">Per-page (R, W, X, User/Kernel)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            {/* LESSON 3: PAGE TABLES & PTE ANATOMY */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 3
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Page-Table Entries (PTEs) and Multilevel Page Tables
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  A <strong>Page-Table Entry (PTE)</strong> contains the physical frame number plus architectural status bits:
                </p>

                {/* PTE Flags Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3 font-mono text-xs">
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">P (Present):</span>
                    <span className="text-[11px] text-stone-600">1 if page is in RAM; 0 triggers Page Fault.</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">R/W (Read/Write):</span>
                    <span className="text-[11px] text-stone-600">1 allows writes; 0 makes page Read-Only.</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">U/S (User/Super):</span>
                    <span className="text-[11px] text-stone-600">0 restricts page to Kernel Ring 0 only.</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">NX / XD:</span>
                    <span className="text-[11px] text-stone-600">No-Execute bit prevents buffer overflow exploits.</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">A (Accessed):</span>
                    <span className="text-[11px] text-stone-600">Set by hardware MMU whenever page is read.</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">D (Dirty):</span>
                    <span className="text-[11px] text-stone-600">Set by hardware MMU whenever page is written to.</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">G (Global):</span>
                    <span className="text-[11px] text-stone-600">Prevents TLB flush on CR3 context switches.</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block">PFN (Frame):</span>
                    <span className="text-[11px] text-stone-600">Upper bits specify physical memory address frame.</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  The Hierarchical Page Table Walk
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  On x86-64, a 48-bit virtual address is partitioned into four 9-bit table indices plus a 12-bit page offset ($9 + 9 + 9 + 9 + 12 = 48$):
                </p>
                <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs my-2">
                  <pre>{`CR3 Control Register -> Root PML4 Table (512 entries)
  ↓ (PML4 Index: 9 bits)
Page Directory Pointer Table (PDP / 512 entries)
  ↓ (PDPT Index: 9 bits)
Page Directory (PD / 512 entries)
  ↓ (PD Index: 9 bits)
Page Table (PT / 512 entries)
  ↓ (PT Index: 9 bits) -> Yields Physical Frame Number (PFN)!
Physical Address = (PFN << 12) | Offset (12 bits)`}</pre>
                </div>
              </div>
            </article>

            {/* LESSON 4: TLB & EFFECTIVE ACCESS TIME */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 4
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Translation Lookaside Buffers (TLB) and Effective Access Time
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  Because a 4-level page walk requires 4 sequential memory reads before reaching data, performing a walk on every instruction would slow the CPU down by 500%. The <strong>Translation Lookaside Buffer (TLB)</strong> is an associative hardware cache storing recently used VPN $\to$ PFN translations.
                </p>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 my-2 text-xs">
                  <div className="font-bold text-stone-900 text-sm mb-1">Effective Access Time (EAT) Mathematical Model:</div>
                  <div className="font-mono bg-white p-2.5 rounded border border-stone-300 my-2 text-center text-stone-900 text-sm font-bold">
                    EAT = HitRatio × (T_tlb + T_mem) + (1 - HitRatio) × (T_tlb + Levels × T_mem + T_mem)
                  </div>
                  <p className="text-stone-600">
                    Even a tiny drop in TLB hit ratio from 99% to 90% doubles average memory latency, emphasizing the importance of sequential memory access patterns and Huge Pages (2 MiB / 1 GiB).
                  </p>
                </div>
              </div>
            </article>

            {/* LESSON 5: PROTECTION, COW & MMAP */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 5
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Page Permissions, Copy-on-Write (COW), and Memory-Mapped Files (mmap)
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/40">
                    <h4 className="font-bold text-purple-950 text-sm mb-1">Copy-on-Write (COW)</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      During <code className="font-mono">fork()</code>, instead of duplicating physical RAM pages, the kernel copies the page table entries and marks all shared physical frames as <strong>Read-Only</strong>. When either parent or child writes, the hardware MMU triggers a page fault; the kernel then allocates a new physical frame, copies the 4KB data, and updates the faulting process's PTE with write permissions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40">
                    <h4 className="font-bold text-blue-950 text-sm mb-1">Memory-Mapped Files (mmap)</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <code className="font-mono">mmap()</code> maps a disk file directly into the process virtual address space. File blocks are not loaded into RAM upfront; instead, accessing a pointer triggers <em>demand paging faults</em>, bringing blocks into the OS page cache on-demand and eliminating user/kernel buffer copy overhead.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 text-stone-200 font-mono text-xs my-2">
                  <div className="flex items-center justify-between px-4 py-2 bg-stone-950 border-b border-stone-800 text-stone-400">
                    <span className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-orange-500" />
                      mmap_demo.c — Memory-Mapped File I/O
                    </span>
                    <button
                      onClick={() => copyToClipboard(mmapSourceCode, "mmap-c")}
                      className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                    >
                      {copiedCodeId === "mmap-c" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto leading-relaxed max-h-64">
                    <code>{mmapSourceCode}</code>
                  </pre>
                </div>
              </div>
            </article>

            {/* LESSON 6: CAPSTONE LAB */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 6 & Capstone Lab
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Capstone Lab: Two-Level Virtual Memory Simulator
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  In this lab, you build and execute <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">vm_simulator.py</code>, translating 16-bit virtual addresses, verifying R/W/X page permissions, detecting unmapped page faults, and calculating multilevel page-table memory overhead.
                </p>

                <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 text-stone-200 font-mono text-xs my-2">
                  <div className="flex items-center justify-between px-4 py-2 bg-stone-950 border-b border-stone-800 text-stone-400">
                    <span className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-orange-500" />
                      vm_simulator.py — Complete Address Translation Engine
                    </span>
                    <button
                      onClick={() => copyToClipboard(simulatorSourceCode, "vmsim-py")}
                      className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                    >
                      {copiedCodeId === "vmsim-py" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Python</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto leading-relaxed max-h-96">
                    <code>{simulatorSourceCode}</code>
                  </pre>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* TAB 2: INTERACTIVE LAB (TRANSLATION ENGINE, TLB SIMULATOR, TERMINAL) */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-8">
            {/* TOOL 1: VIRTUAL-TO-PHYSICAL TRANSLATION ENGINE */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-orange-600" />
                    Interactive Address Translation Engine
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Trace virtual addresses into VPN and offset, simulate page-table lookup, and calculate physical addresses.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200">
                    PA = (PFN × PageSize) + Offset
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Virtual Address (Decimal):
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="1000000"
                    value={inputVA}
                    onChange={(e) => setInputVA(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white font-mono text-sm focus:outline-orange-500"
                  />
                  <div className="text-[10px] text-stone-500 mt-1">
                    Hex: <span className="font-mono text-stone-800 font-bold">{translationResults.vaHex}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Page Size (Bytes):
                  </label>
                  <div className="grid grid-cols-4 gap-1">
                    {[1024, 2048, 4096, 8192].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setPageSizeBytes(sz)}
                        className={`py-1.5 rounded text-xs font-bold transition cursor-pointer ${
                          pageSizeBytes === sz
                            ? "bg-orange-600 text-white"
                            : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        {sz / 1024}K
                      </button>
                    ))}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">
                    Offset bits: <span className="font-mono text-stone-800 font-bold">{Math.log2(pageSizeBytes)} bits</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Page Table Mapped Frame (PFN):
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="1024"
                    value={mappedPFN}
                    onChange={(e) => setMappedPFN(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 rounded-lg border border-stone-300 bg-white font-mono text-sm focus:outline-orange-500"
                  />
                  <div className="text-[10px] text-stone-500 mt-1">
                    Frame base: <span className="font-mono text-stone-800 font-bold">{mappedPFN * pageSizeBytes}</span>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Translation Box */}
              <div className="border border-stone-200 rounded-xl p-5 bg-white shadow-xs">
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-4">
                  Step-by-Step MMU Translation Walk
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 text-center">
                    <div className="text-[11px] text-blue-900 font-semibold uppercase">1. Virtual Page Number (VPN)</div>
                    <div className="text-2xl font-bold font-mono text-blue-700 mt-1">
                      {translationResults.vpn}
                    </div>
                    <div className="text-[10px] text-stone-500 mt-1">⌊{translationResults.va} / {translationResults.pSize}⌋</div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/50 text-center">
                    <div className="text-[11px] text-amber-900 font-semibold uppercase">2. Page Offset (Invariant)</div>
                    <div className="text-2xl font-bold font-mono text-amber-700 mt-1">
                      {translationResults.offset}
                    </div>
                    <div className="text-[10px] text-stone-500 mt-1">{translationResults.va} mod {translationResults.pSize} ({translationResults.offsetHex})</div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 text-center">
                    <div className="text-[11px] text-emerald-900 font-semibold uppercase">3. Physical Address (PA)</div>
                    <div className="text-2xl font-bold font-mono text-emerald-700 mt-1">
                      {translationResults.pa}
                    </div>
                    <div className="text-[10px] text-stone-500 mt-1">Hex: {translationResults.paHex}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-stone-100 font-mono text-xs text-stone-800">
                  <strong>Verification Formula: </strong>
                  PA = ({translationResults.pfn} × {translationResults.pSize}) + {translationResults.offset} = {translationResults.pfn * translationResults.pSize} + {translationResults.offset} = <strong>{translationResults.pa}</strong>
                </div>
              </div>
            </div>

            {/* TOOL 2: TLB EFFECTIVE ACCESS TIME CALCULATOR */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-600" />
                    TLB Effective Access Time (EAT) Simulator
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Calculate memory access latency penalty as a function of TLB hit ratio and page table levels.
                  </p>
                </div>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-stone-800 mb-1">
                    <span>TLB Hit Ratio:</span>
                    <span className="font-mono text-orange-600">{(tlbHitRatio * 100).toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.80"
                    max="0.999"
                    step="0.005"
                    value={tlbHitRatio}
                    onChange={(e) => setTlbHitRatio(parseFloat(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-0.5">
                    <span>80.0% (Poor)</span>
                    <span>99.9% (Ideal)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-stone-800 mb-1">
                    <span>Page Table Walk Levels:</span>
                    <span className="font-mono text-blue-600">{ptLevels} Levels</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mt-2">
                    {[1, 2, 4].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setPtLevels(lvl)}
                        className={`py-1.5 rounded text-xs font-bold transition cursor-pointer ${
                          ptLevels === lvl
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        {lvl} {lvl === 4 ? "(x86-64)" : "Lvl"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-stone-800 mb-1">
                    <span>RAM Access Latency:</span>
                    <span className="font-mono text-stone-800">{memLatency} ns</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    step="10"
                    value={memLatency}
                    onChange={(e) => setMemLatency(parseInt(e.target.value))}
                    className="w-full accent-stone-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-0.5">
                    <span>50 ns (Fast DDR5)</span>
                    <span>150 ns (High Latency)</span>
                  </div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-xs text-stone-500 uppercase font-semibold">Access Time on TLB Hit</div>
                  <div className="text-3xl font-bold font-mono text-emerald-600 mt-1">
                    {eatResults.t_hit} ns
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">TLB (5ns) + Data (100ns)</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-xs text-stone-500 uppercase font-semibold">Access Time on TLB Miss</div>
                  <div className="text-3xl font-bold font-mono text-rose-600 mt-1">
                    {eatResults.t_miss} ns
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">TLB + {ptLevels} Walk Reads + Data</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-xs text-stone-500 uppercase font-semibold">Effective Access Time (EAT)</div>
                  <div className="text-3xl font-bold font-mono text-orange-600 mt-1">
                    {eatResults.eat} ns
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">{eatResults.slowdownVsL1}x slower than pure hit</div>
                </div>
              </div>
            </div>

            {/* TOOL 3: INTERACTIVE TERMINAL SANDBOX */}
            <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-xl text-stone-200 font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-3 bg-stone-950 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span className="font-bold text-stone-300">Virtual Memory & mmap Sandbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => executeTerminalCommand("help")}
                    className="px-2 py-1 bg-stone-800 hover:bg-stone-700 rounded text-stone-300 transition cursor-pointer"
                  >
                    Help
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("clear")}
                    className="px-2 py-1 bg-stone-800 hover:bg-stone-700 rounded text-stone-300 transition cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Terminal History */}
              <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-orange-400 font-bold">
                      <span>$</span>
                      <span>{item.command}</span>
                    </div>
                    <pre
                      className={`whitespace-pre-wrap pl-4 leading-relaxed ${
                        item.type === "success"
                          ? "text-emerald-400"
                          : item.type === "error"
                          ? "text-rose-400"
                          : "text-stone-300"
                      }`}
                    >
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Command Input & Quick Buttons */}
              <div className="p-3 bg-stone-950 border-t border-stone-800 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold">$</span>
                  <input
                    type="text"
                    value={customCommand}
                    onChange={(e) => setCustomCommand(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && executeTerminalCommand(customCommand)}
                    placeholder="Type command (e.g. python3 vm_simulator.py, ./mmap_demo, help)..."
                    className="flex-1 bg-transparent border-none outline-none text-stone-100 placeholder-stone-600 font-mono text-xs"
                  />
                  <button
                    onClick={() => executeTerminalCommand(customCommand)}
                    className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold transition cursor-pointer"
                  >
                    Run
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-stone-500">
                  <span>Quick commands:</span>
                  <button
                    onClick={() => executeTerminalCommand("python3 vm_simulator.py")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    vm_simulator.py
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("gcc -Wall -Wextra mmap_demo.c -o mmap_demo && ./mmap_demo")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    mmap_demo
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("cat /proc/self/maps")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    /proc/self/maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAPSTONE CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Module 10 Completion Criteria Checklist
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Track your deliverables: calculate address translations, evaluate multilevel page-table memory overhead, model TLB performance, and build the address simulator.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-stone-700">
                  Progress: {completedChecklistCount} / 9 Completed
                </span>
                <button
                  onClick={() => {
                    const report = `PREPSPACES OS MODULE 10 COMPLETION REPORT:
- Logical, Virtual & Physical Addresses: ${checklist.logicalVirtualPhysical ? "PASS" : "PENDING"}
- Contiguous vs Segmentation vs Paging: ${checklist.segmentationVsPaging ? "PASS" : "PENDING"}
- Address Translation Math (VPN, Offset, PA): ${checklist.addressTranslationMath ? "PASS" : "PENDING"}
- Single-Level vs Multilevel Page Tables: ${checklist.singleVsMultilevel ? "PASS" : "PENDING"}
- Page-Table Memory Overhead Calculation: ${checklist.pageTableOverhead ? "PASS" : "PENDING"}
- TLB Hits, Misses & Effective Access Time (EAT): ${checklist.tlbEATCalculation ? "PASS" : "PENDING"}
- Page Permissions (R/W/X) & Copy-on-Write (COW): ${checklist.pagePermissionsCOW ? "PASS" : "PENDING"}
- Memory-Mapped Files (mmap) & Demand Paging: ${checklist.mmapDemandPaging ? "PASS" : "PENDING"}
- Two-Level VM Address Translation Simulator: ${checklist.vmSimulatorLab ? "PASS" : "PENDING"}
Completion Score: ${Math.round((completedChecklistCount / 9) * 100)}%`;
                    copyToClipboard(report, "checklist-rep10");
                  }}
                  className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedCodeId === "checklist-rep10" ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Report Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Verification Report
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  key: "logicalVirtualPhysical",
                  title: "1. Distinguish logical, virtual, and physical addresses",
                  desc: "Explain the role of the CPU MMU and why two separate processes can both use identical virtual addresses (0x400000).",
                },
                {
                  key: "segmentationVsPaging",
                  title: "2. Compare contiguous allocation, segmentation, and paging",
                  desc: "Analyze trade-offs in external fragmentation, compaction overhead, base-bounds registers, and non-contiguous physical placement.",
                },
                {
                  key: "addressTranslationMath",
                  title: "3. Translate virtual addresses using page numbers, offsets, and frame numbers",
                  desc: "Calculate VPN = floor(VA / PageSize), Offset = VA % PageSize, and PA = (PFN * PageSize) + Offset.",
                },
                {
                  key: "singleVsMultilevel",
                  title: "4. Explain single-level and multilevel page tables",
                  desc: "Explain how multi-level tree walks allow sparse address spaces to avoid allocating unmapped lower tables.",
                },
                {
                  key: "pageTableOverhead",
                  title: "5. Calculate page-table storage overhead for different address-space configurations",
                  desc: "Contrast 4 MiB flat tables on 32-bit with multi-terabyte flat tables on 48-bit, justifying 4-level x86-64 hierarchies.",
                },
                {
                  key: "tlbEATCalculation",
                  title: "6. Calculate TLB Effective Access Time (EAT) and distinguish TLB misses from page faults",
                  desc: "Compute EAT = HitRatio * T_hit + (1 - HitRatio) * T_miss and explain hardware MMU walks vs kernel exception handling.",
                },
                {
                  key: "pagePermissionsCOW",
                  title: "7. Explain page permissions (R/W/X), process isolation, and Copy-on-Write (COW)",
                  desc: "Detail how fork() leverages read-only shared physical pages to defer physical allocation until write faults occur.",
                },
                {
                  key: "mmapDemandPaging",
                  title: "8. Describe memory-mapped files (mmap) and demand paging",
                  desc: "Explain zero-copy I/O, MAP_PRIVATE vs MAP_SHARED, and how page faults lazily read disk blocks into the page cache.",
                },
                {
                  key: "vmSimulatorLab",
                  title: "9. Implement and verify the virtual-to-physical address translation simulator",
                  desc: "Execute vm_simulator.py, test valid and invalid addresses, check permission faults, and verify physical address mapping.",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleChecklist(item.key)}
                  className={`flex items-start gap-3.5 p-4 rounded-xl border transition cursor-pointer ${
                    checklist[item.key]
                      ? "bg-emerald-50/60 border-emerald-300"
                      : "bg-white border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checklist[item.key]}
                    onChange={() => {}}
                    className="mt-1 h-4 w-4 rounded text-orange-600 accent-orange-600 cursor-pointer"
                  />
                  <div>
                    <div className={`text-sm font-bold ${checklist[item.key] ? "text-emerald-900" : "text-stone-900"}`}>
                      {item.title}
                    </div>
                    <div className="text-xs text-stone-600 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE ASSESSMENT (QUIZ) */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  Module 10 Knowledge Assessment
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Evaluate your understanding of address translation, TLBs, page-table levels, Copy-on-Write, and page faults.
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-stone-800">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </span>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition cursor-pointer"
                  >
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => {
                const isSelected = quizAnswers[q.id] !== undefined;
                const isCorrect = quizAnswers[q.id] === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition ${
                      quizSubmitted
                        ? isCorrect
                          ? "bg-emerald-50/50 border-emerald-300"
                          : "bg-rose-50/50 border-rose-300"
                        : "bg-stone-50/60 border-stone-200"
                    }`}
                  >
                    <div className="font-bold text-stone-900 text-sm sm:text-base mb-3">
                      {q.question}
                    </div>

                    <div className="space-y-2 mb-3">
                      {q.options.map((opt, optIdx) => {
                        const isThisChosen = quizAnswers[q.id] === optIdx;
                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-lg text-xs sm:text-sm transition flex items-center justify-between cursor-pointer ${
                              quizSubmitted
                                ? optIdx === q.correctIndex
                                  ? "bg-emerald-100 text-emerald-900 font-bold border border-emerald-300"
                                  : isThisChosen
                                  ? "bg-rose-100 text-rose-900 line-through border border-rose-300"
                                  : "bg-white text-stone-500 border border-stone-200"
                                : isThisChosen
                                ? "bg-orange-100 text-orange-900 font-semibold border border-orange-300"
                                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                            }`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 text-xs leading-relaxed p-3 rounded-lg bg-white border border-stone-200 text-stone-700">
                        <strong className="text-stone-900">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white rounded-xl text-sm font-bold transition shadow-xs cursor-pointer"
                >
                  Submit Assessment
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom Pagination */}
        <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
          <button
            onClick={() => navigate("/learning/os/memory")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-white rounded-xl transition border border-stone-200/80 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 9 (Memory Hierarchy & Allocation)
          </button>
          <button
            onClick={() => navigate("/learning/os/filesystems")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition shadow-xs cursor-pointer"
          >
            Next: Module 11 (File Systems & I/O)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
