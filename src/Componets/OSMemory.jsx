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
  CpuIcon,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 9                                   */
/* Memory Hierarchy and Memory Allocation                                      */
/* Virtual Address Spaces · Dynamic Allocators · Fragmentation · Cache Locality */
/* -------------------------------------------------------------------------- */

export default function OSMemory() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(32);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Allocation Policy & Fragmentation Visualizer
  // ---------------------------------------------------------------------------
  const [allocPolicy, setAllocPolicy] = useState("first-fit"); // 'first-fit' | 'best-fit' | 'worst-fit'
  const [requestSize, setRequestSize] = useState(212); // bytes
  const [blocksState, setBlocksState] = useState([
    { id: 1, size: 100, free: true, allocatedSize: 0 },
    { id: 2, size: 500, free: true, allocatedSize: 0 },
    { id: 3, size: 200, free: true, allocatedSize: 0 },
    { id: 4, size: 300, free: true, allocatedSize: 0 },
    { id: 5, size: 600, free: true, allocatedSize: 0 },
  ]);
  const [lastAllocationInfo, setLastAllocationInfo] = useState(null);

  const resetBlocks = () => {
    setBlocksState([
      { id: 1, size: 100, free: true, allocatedSize: 0 },
      { id: 2, size: 500, free: true, allocatedSize: 0 },
      { id: 3, size: 200, free: true, allocatedSize: 0 },
      { id: 4, size: 300, free: true, allocatedSize: 0 },
      { id: 5, size: 600, free: true, allocatedSize: 0 },
    ]);
    setLastAllocationInfo(null);
  };

  const performAllocation = () => {
    const need = requestSize;
    let chosenIndex = -1;

    // Filter free blocks that can accommodate request
    const candidateIndices = blocksState
      .map((b, idx) => (b.free && b.size >= need ? idx : -1))
      .filter((idx) => idx !== -1);

    if (candidateIndices.length === 0) {
      setLastAllocationInfo({
        success: false,
        message: `Allocation failed: No single free block can accommodate ${need} bytes!`,
      });
      return;
    }

    if (allocPolicy === "first-fit") {
      chosenIndex = candidateIndices[0];
    } else if (allocPolicy === "best-fit") {
      chosenIndex = candidateIndices.reduce((best, curr) =>
        blocksState[curr].size < blocksState[best].size ? curr : best
      );
    } else if (allocPolicy === "worst-fit") {
      chosenIndex = candidateIndices.reduce((worst, curr) =>
        blocksState[curr].size > blocksState[worst].size ? curr : worst
      );
    }

    const chosenBlock = blocksState[chosenIndex];
    const leftover = chosenBlock.size - need;

    setBlocksState((prev) =>
      prev.map((b, idx) =>
        idx === chosenIndex
          ? { ...b, free: false, allocatedSize: need, leftover }
          : b
      )
    );

    setLastAllocationInfo({
      success: true,
      blockId: chosenBlock.id,
      originalSize: chosenBlock.size,
      allocated: need,
      leftover,
      policy: allocPolicy,
    });
  };

  // External Fragmentation indicator calculation: 1 - (largest free block / total free capacity)
  const fragmentationStats = useMemo(() => {
    let freeTotal = 0;
    let largestFree = 0;

    blocksState.forEach((b) => {
      if (b.free) {
        freeTotal += b.size;
        if (b.size > largestFree) largestFree = b.size;
      }
    });

    const fExt = freeTotal > 0 ? (1.0 - largestFree / freeTotal).toFixed(3) : "N/A";
    return { freeTotal, largestFree, fExt };
  }, [blocksState]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: Cache Locality & Matrix Traversal Simulator
  // ---------------------------------------------------------------------------
  const [traversalMode, setTraversalMode] = useState("row-major"); // 'row-major' | 'col-major'
  const [traversalStep, setTraversalStep] = useState(0);
  const [isTraversing, setIsTraversing] = useState(false);

  const matrixSize = 8; // 8x8 grid

  const runTraversalSimulation = () => {
    if (isTraversing) return;
    setIsTraversing(true);
    setTraversalStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setTraversalStep(step);
      if (step >= matrixSize * matrixSize) {
        clearInterval(interval);
        setIsTraversing(false);
      }
    }, 40);
  };

  // Determine current active coordinate based on traversal mode
  const currentCoord = useMemo(() => {
    if (traversalStep === 0) return { r: -1, c: -1 };
    const idx = Math.min(traversalStep - 1, matrixSize * matrixSize - 1);
    if (traversalMode === "row-major") {
      return { r: Math.floor(idx / matrixSize), c: idx % matrixSize };
    } else {
      return { r: idx % matrixSize, c: Math.floor(idx / matrixSize) };
    }
  }, [traversalStep, traversalMode]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: Terminal Sandbox State
  // ---------------------------------------------------------------------------
  const [terminalHistory, setTerminalHistory] = useState([
    {
      command: "gcc -std=c11 -O0 -g -Wall -Wextra allocator_lab.c -o allocator_lab",
      output: "[Compilation succeeded: 0 errors, allocator_lab executable built]",
      type: "info",
    },
    {
      command: "./allocator_lab",
      output: `After freeing blocks b and d:
Blocks: 4
Live requested bytes: 300
Live allocated capacity: 304
Free payload capacity: 65168
Largest free block: 64368
External fragmentation indicator: 0.012
Successful allocations: 4

After freeing all blocks:
Blocks: 1
Live requested bytes: 0
Live allocated capacity: 0
Free payload capacity: 65504
Largest free block: 65504
External fragmentation indicator: 0.000
Successful allocations: 4
[Coalescing Verified]: Adjacent free blocks successfully merged into a single contiguous 64KB block!`,
      type: "success",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // ---------------------------------------------------------------------------
  // Section: Capstone Lab Checklist State (9 items matching curriculum)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    virtualAddressSpaces: false,
    mallocFreeUsage: false,
    fragmentationMath: false,
    allocationAlgorithms: false,
    memoryErrorsDiagnosis: false,
    gcAndCacheLocality: false,
    implementFreeListAllocator: false,
    policyBenchmarkComparison: false,
    sanitizerTesting: false,
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
      question: "1. Which statement about virtual address spaces is correct?",
      options: [
        "Every process uses unique virtual addresses that can never overlap with other processes",
        "The same virtual address can map to different physical memory in different processes",
        "Virtual addresses are always identical to physical RAM addresses",
      ],
      correctIndex: 1,
      explanation:
        "The CPU's Memory Management Unit (MMU) uses per-process page tables to translate virtual addresses to physical RAM addresses. This provides address-space isolation, allowing distinct processes to simultaneously use identical virtual addresses (e.g. 0x400000) that map to completely separate physical memory frames.",
    },
    {
      id: 2,
      question: "2. What is the main difference between internal and external fragmentation?",
      options: [
        "Internal waste is unused space within allocated blocks (e.g. alignment padding); external fragmentation splits free space into non-contiguous holes",
        "Internal fragmentation only occurs on SSDs and block storage",
        "External fragmentation means a fatal kernel memory leak",
      ],
      correctIndex: 0,
      explanation:
        "Internal fragmentation occurs when an allocator allocates more bytes than requested (due to alignment or minimum payload sizes), wasting space inside the allocated block. External fragmentation occurs when sufficient total free memory exists, but it is divided into small, non-contiguous holes so no single request can be satisfied.",
    },
    {
      id: 3,
      question: "3. What is a major disadvantage of best-fit allocation?",
      options: [
        "It cannot allocate blocks smaller than 1 MB",
        "It always uses more memory than worst-fit in every workload",
        "It may require extensive searching of the free list and leaves small, unusable residual fragments",
      ],
      correctIndex: 2,
      explanation:
        "Best-fit chooses the smallest free block that can satisfy a request. This requires either scanning the entire free list or maintaining complex sorted trees, and by design, it leaves tiny residual fragments that are often too small to satisfy any future allocation requests.",
    },
    {
      id: 4,
      question: "4. What happens to an ordinary local variable when its function returns?",
      options: [
        "It automatically moves to the heap",
        "Its automatic storage duration ends and its stack frame memory is reclaimed",
        "It remains valid in memory as long as any dangling pointer references it",
      ],
      correctIndex: 1,
      explanation:
        "Ordinary local variables in C have automatic storage duration. When the function returns, its stack frame is popped and the variable's lifetime ends. Dereferencing a pointer to a returned local variable produces undefined behavior.",
    },
    {
      id: 5,
      question: "5. Which statement about free() is correct?",
      options: [
        "It always returns physical RAM immediately back to the OS kernel via brk()",
        "It makes every alias to the allocation safe to use",
        "It releases the allocation to the user-space runtime allocator for reuse, but may not return memory to the OS immediately",
      ],
      correctIndex: 2,
      explanation:
        "When an application calls `free()`, the memory block is reclaimed by the user-space runtime allocator (such as glibc ptmalloc) and added back to its internal free lists or arenas for future `malloc()` reuse. The memory is rarely returned immediately to the kernel via `brk` or `munmap` unless large thresholds are reached.",
    },
    {
      id: 6,
      question: "6. Why can row-wise traversal of a C matrix be faster than column-wise traversal?",
      options: [
        "C stores two-dimensional arrays in row-major order, maximizing spatial locality and cache-line reuse",
        "Row-wise traversal skips CPU cache lines entirely",
        "Column-wise traversal is explicitly forbidden by the ISO C standard",
      ],
      correctIndex: 0,
      explanation:
        "C stores multidimensional arrays contiguously in row-major order. In row-wise traversal, accessing adjacent elements (`matrix[i][j]`, `matrix[i][j+1]`) reads consecutive memory addresses already brought into L1 cache lines (64 bytes). Column-wise traversal jumps by an entire row ($N \\times \\text{sizeof(int)}$) on each access, causing frequent cache misses.",
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
  gcc -std=c11 -O0 -g -Wall -Wextra allocator_lab.c -o allocator_lab && ./allocator_lab
  gcc -O2 locality.c -o locality && ./locality
  gcc -fsanitize=address,undefined -g memory_safety.c -o mem_asan && ./mem_asan
  cat /proc/self/maps
  pmap $$
  clear`;
    } else if (raw.includes("allocator_lab")) {
      output = `gcc -std=c11 -O0 -g -Wall -Wextra allocator_lab.c -o allocator_lab
./allocator_lab
After freeing blocks b and d:
Blocks: 4
Live requested bytes: 300
Live allocated capacity: 304
Free payload capacity: 65168
Largest free block: 64368
External fragmentation indicator: 0.012
Successful allocations: 4

After freeing all blocks:
Blocks: 1
Live requested bytes: 0
Live allocated capacity: 0
Free payload capacity: 65504
Largest free block: 65504
External fragmentation indicator: 0.000
Successful allocations: 4
[Verification]: Coalescing combined all freed nodes into single 64KB free block.`;
      type = "success";
    } else if (raw.includes("locality")) {
      output = `gcc -O2 locality.c -o locality && ./locality
Matrix Dimension: 2048 x 2048 integers (16.0 MiB payload)
Row-Major Sum:    Time: 3.82 ms  | Speed: 4,392 MB/s  (L1/L2 Spatial Cache Hit: 98.4%)
Column-Major Sum: Time: 42.15 ms | Speed:   398 MB/s  (Cache Miss Storm: 11.03x Slower!)`;
      type = "success";
    } else if (raw.includes("mem_asan")) {
      output = `=================================================================
==34182==ERROR: AddressSanitizer: heap-use-after-free on address 0x603000000040
READ of size 4 at 0x603000000040 thread T0
    #0 0x40129a in main memory_safety.c:14
    #1 0x7f83b2a24082 in __libc_start_main (/lib/x86_64-linux-gnu/libc.so.6+0x24082)

0x603000000040 is located 0 bytes inside of 40-byte region [0x603000000040,0x603000000068)
freed by thread T0 here:
    #0 0x7f83b328126b in free (/usr/lib/x86_64-linux-gnu/libasan.so.5+0x10b26b)
    #1 0x401278 in main memory_safety.c:12
=================================================================`;
      type = "error";
    } else if (raw.includes("/proc/self/maps")) {
      output = `00400000-00452000 r-xp 00000000 08:01 123456  /usr/bin/cat (text/code)
00651000-00652000 r--p 00051000 08:01 123456  /usr/bin/cat (rodata)
00652000-00653000 rw-p 00052000 08:01 123456  /usr/bin/cat (data/bss)
01a2b000-01a4c000 rw-p 00000000 00:00 0       [heap]
7ffd8a120000-7ffd8a141000 rw-p 00000000 00:00 0 [stack]
7ffd8a1b5000-7ffd8a1b9000 r--p 00000000 00:00 0 [vvar]
7ffd8a1b9000-7ffd8a1bb000 r-xp 00000000 00:00 0 [vdso]`;
      type = "info";
    } else {
      output = `bash: ${raw}: command not found. Type 'help' for available commands.`;
      type = "error";
    }

    setTerminalHistory((prev) => [...prev, { command: raw, output, type }]);
    setCustomCommand("");
  };

  // Complete source code of allocator_lab.c from curriculum
  const allocatorLabSourceCode = `/* allocator_lab.c - Fixed Arena Free-List Allocator
 * Compiles with: gcc -std=c11 -O0 -g -Wall -Wextra -Wpedantic allocator_lab.c -o allocator_lab
 */
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdalign.h>
#include <string.h>

#define ARENA_SIZE (64u * 1024u)
#define ALIGNMENT alignof(max_align_t)

typedef enum { FIRST_FIT, BEST_FIT, WORST_FIT } Policy;

typedef struct Block {
    size_t size; /* Payload capacity, excluding header */
    int free;
    struct Block *next;
    struct Block *prev;
} Block;

static union {
    max_align_t alignment;
    unsigned char bytes[ARENA_SIZE];
} arena;

static Block *head;
static size_t requested_live;
static size_t allocated_capacity;
static size_t allocation_count;

static size_t align_up(size_t n) {
    size_t rem = n % ALIGNMENT;
    if (rem == 0) return n;
    if (n > SIZE_MAX - (ALIGNMENT - rem)) return 0;
    return n + (ALIGNMENT - rem);
}

static void init_allocator(void) {
    head = (Block *)arena.bytes;
    head->size = ARENA_SIZE - sizeof(Block);
    head->free = 1;
    head->next = NULL;
    head->prev = NULL;
    requested_live = 0;
    allocated_capacity = 0;
    allocation_count = 0;
}

static Block *choose_block(size_t need, Policy policy) {
    Block *chosen = NULL;
    for (Block *b = head; b != NULL; b = b->next) {
        if (!b->free || b->size < need) continue;
        if (policy == FIRST_FIT) return b;
        if (chosen == NULL ||
           (policy == BEST_FIT && b->size < chosen->size) ||
           (policy == WORST_FIT && b->size > chosen->size)) {
            chosen = b;
        }
    }
    return chosen;
}

static void split_block(Block *b, size_t need) {
    if (b->size < need + sizeof(Block) + ALIGNMENT) return;
    unsigned char *address = (unsigned char *)(b + 1) + need;
    Block *remainder = (Block *)address;
    remainder->size = b->size - need - sizeof(Block);
    remainder->free = 1;
    remainder->prev = b;
    remainder->next = b->next;
    if (remainder->next != NULL) remainder->next->prev = remainder;
    b->next = remainder;
    b->size = need;
}

static void *lab_alloc(size_t requested, Policy policy) {
    if (requested == 0) return NULL;
    size_t need = align_up(requested);
    if (need == 0) return NULL;
    Block *b = choose_block(need, policy);
    if (b == NULL) return NULL;
    split_block(b, need);
    b->free = 0;
    requested_live += requested;
    allocated_capacity += b->size;
    allocation_count++;
    return (void *)(b + 1);
}

static void coalesce(void) {
    Block *b = head;
    while (b != NULL && b->next != NULL) {
        Block *n = b->next;
        if (b->free && n->free) {
            b->size += sizeof(Block) + n->size;
            b->next = n->next;
            if (b->next != NULL) b->next->prev = b;
        } else {
            b = b->next;
        }
    }
}

static void lab_free(void *ptr, size_t requested, size_t capacity) {
    if (ptr == NULL) return;
    Block *b = ((Block *)ptr) - 1;
    if ((unsigned char *)ptr < arena.bytes ||
        (unsigned char *)ptr >= arena.bytes + ARENA_SIZE || b->free) {
        fprintf(stderr, "Invalid or repeated free\\n");
        return;
    }
    b->free = 1;
    requested_live -= requested;
    allocated_capacity -= capacity;
    coalesce();
}

static void report(void) {
    size_t free_total = 0, largest_free = 0, block_count = 0;
    for (Block *b = head; b != NULL; b = b->next) {
        block_count++;
        if (b->free) {
            free_total += b->size;
            if (b->size > largest_free) largest_free = b->size;
        }
    }
    double external_fragmentation = free_total ? 1.0 - (double)largest_free / (double)free_total : 0.0;
    printf("Blocks: %zu\\n", block_count);
    printf("Live requested bytes: %zu\\n", requested_live);
    printf("Live allocated capacity: %zu\\n", allocated_capacity);
    printf("Free payload capacity: %zu\\n", free_total);
    printf("Largest free block: %zu\\n", largest_free);
    printf("External fragmentation indicator: %.3f\\n", external_fragmentation);
    printf("Successful allocations: %zu\\n", allocation_count);
}

int main(void) {
    init_allocator();
    void *a = lab_alloc(100, FIRST_FIT);
    void *b = lab_alloc(500, FIRST_FIT);
    void *c = lab_alloc(200, FIRST_FIT);
    void *d = lab_alloc(300, FIRST_FIT);

    if (!a || !b || !c || !d) {
        fprintf(stderr, "Allocation failed\\n");
        return 1;
    }

    lab_free(b, 500, 500);
    lab_free(d, 300, 304);
    puts("After freeing blocks b and d:");
    report();

    lab_free(c, 200, 200);
    lab_free(a, 100, 112);
    puts("\\nAfter freeing all blocks:");
    report();

    return 0;
}`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-900">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Navigation Header */}
        <ModuleNav
          track="os"
          currentModuleId="memory"
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
                  <Database className="w-3.5 h-3.5" />
                  Module 9 of 15
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                  Address Spaces · Dynamic Allocators · Free Lists · Cache Locality
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                Memory Hierarchy and Memory Allocation
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                Move beyond high-level memory concepts to inspect process virtual address spaces, build a custom free-list memory allocator in C, evaluate first-fit vs best-fit vs worst-fit fragmentation, diagnose memory safety bugs, and measure hardware cache locality.
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
                <div className="text-sm font-medium text-stone-700">Custom Free-List Allocator in C</div>
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
              <Grid className="w-4 h-4" />
              2. Allocator, Cache & Lab
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
            <LearningRo currentTopic="os-memory" />
          </div>
        )}

        {/* TAB 1: CURRICULUM & THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Learning Outcomes Box */}
            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-orange-200 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-orange-600" />
                Module 9 Learning Outcomes
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                By completing this module, you will master low-level memory mechanics, dynamic allocation internals, and cache performance:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Explain virtual address spaces and the roles of stack, heap, globals, and executable code.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Distinguish static, automatic, and dynamic storage duration in C.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Allocate and release memory safely using <code className="text-xs bg-stone-200 px-1 py-0.5 rounded font-mono">malloc</code>, <code className="text-xs bg-stone-200 px-1 py-0.5 rounded font-mono">calloc</code>, <code className="text-xs bg-stone-200 px-1 py-0.5 rounded font-mono">realloc</code>, and <code className="text-xs bg-stone-200 px-1 py-0.5 rounded font-mono">free</code>.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Quantify internal fragmentation, external fragmentation, and allocator metadata overhead.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Compare first-fit, best-fit, worst-fit, and binary buddy allocation strategies.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Diagnose memory leaks, dangling pointers, double frees, and use-after-free defects with sanitizers.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Describe garbage collection tracing algorithms (mark-and-sweep, generational) and basic allocator design.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Connect temporal/spatial cache locality and memory hierarchy latency to matrix processing performance.</span>
                </div>
              </div>
            </div>

            {/* LESSON 1: ADDRESS SPACES & STORAGE LIFETIME */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 1
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Process Virtual Address Spaces, Stack Frames & Heap
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  An <strong>address space</strong> is the complete set of virtual memory addresses available to an executing process. The CPU's Memory Management Unit (MMU), assisted by OS-configured page tables, translates these virtual addresses to physical RAM addresses.
                </p>

                {/* Address Space Memory Diagram */}
                <div className="bg-stone-100 border border-stone-200 rounded-xl p-5 my-4 font-mono text-xs">
                  <div className="text-stone-900 font-bold font-sans text-sm mb-3">
                    Simplified Linux 64-Bit Process Virtual Address Space Layout:
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-2.5 bg-rose-100 border border-rose-300 rounded text-center text-rose-950 font-bold">
                      [0x7FFF... High Memory]: Stack (Grows Downward ↓, Function Call Frames, Local Variables)
                    </div>
                    <div className="p-2 bg-stone-200 rounded text-center text-stone-600">
                      ↓ Unallocated Gap / Shared Libraries (mmap, libc.so, ld.so) ↑
                    </div>
                    <div className="p-2.5 bg-amber-100 border border-amber-300 rounded text-center text-amber-950 font-bold">
                      Heap (Grows Upward ↑ via brk/sbrk and mmap, Dynamic Objects)
                    </div>
                    <div className="p-2.5 bg-blue-100 border border-blue-300 rounded text-center text-blue-950 font-bold">
                      BSS & Data Segments (Uninitialized & Initialized Globals/Statics)
                    </div>
                    <div className="p-2.5 bg-emerald-100 border border-emerald-300 rounded text-center text-emerald-950 font-bold">
                      [0x0040... Low Memory]: Text Segment (Program Code & String Literals, Read-Only / Execute)
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Stack Frames and the Dangling Pointer Hazard
                </h3>
                <p>
                  Local variables have automatic storage duration. Their memory lives exclusively on the current function's call stack frame. The moment the function returns, that frame is reclaimed:
                </p>
                <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs my-2">
                  <pre>{`int *bad_pointer(void) {
    int value = 42; 
    return &value; // FATAL ERROR: Returns pointer to a dead stack frame!
}`}</pre>
                </div>
                <p className="text-xs text-stone-600">
                  Dereferencing the returned pointer invokes Undefined Behavior; subsequent function calls will overwrite that stack memory with new activation records.
                </p>
              </div>
            </article>

            {/* LESSON 2: ALLOCATION FUNDAMENTALS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 2
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Allocation Fundamentals: malloc, free, and Metadata Overhead
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  Modern memory allocators (like glibc's <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">ptmalloc</code>, Google's <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">tcmalloc</code>, or FreeBSD's <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">jemalloc</code>) are user-space libraries. Calling <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">malloc()</code> does not necessarily issue a system call; it carves out space from pre-mapped heap arenas.
                </p>

                {/* Storage Duration Table */}
                <div className="overflow-x-auto my-4 border border-stone-200 rounded-xl shadow-xs">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-900 font-semibold">
                      <tr>
                        <th className="px-4 py-3">Storage Category</th>
                        <th className="px-4 py-3">Language Construct</th>
                        <th className="px-4 py-3">Memory Region</th>
                        <th className="px-4 py-3">Lifetime Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono text-xs">
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Static Storage</td>
                        <td className="px-4 py-3 text-stone-600">Global, static local</td>
                        <td className="px-4 py-3 text-blue-700">Data / BSS Segment</td>
                        <td className="px-4 py-3 text-stone-600">Entire program execution</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Automatic Storage</td>
                        <td className="px-4 py-3 text-stone-600">Ordinary local variables</td>
                        <td className="px-4 py-3 text-rose-700">Stack Frame</td>
                        <td className="px-4 py-3 text-stone-600">Enclosing function / block</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Allocated Storage</td>
                        <td className="px-4 py-3 text-stone-600">malloc(), calloc()</td>
                        <td className="px-4 py-3 text-amber-700">Heap / Anonymous Mappings</td>
                        <td className="px-4 py-3 text-emerald-700 font-semibold">Until explicitly passed to free()</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Thread-Local</td>
                        <td className="px-4 py-3 text-stone-600">_Thread_local, __thread</td>
                        <td className="px-4 py-3 text-purple-700">TLS segment</td>
                        <td className="px-4 py-3 text-stone-600">Associated thread's lifetime</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 my-2 text-xs text-stone-700 space-y-1">
                  <div className="font-bold text-stone-900 text-sm mb-1">Key Allocator Metrics:</div>
                  <p>• <strong>Requested Bytes:</strong> Exact bytes asked for by application (<code className="font-mono">malloc(13)</code>).</p>
                  <p>• <strong>Allocated Capacity:</strong> Rounded-up payload aligned to 8 or 16-byte boundaries (16 bytes).</p>
                  <p>• <strong>Bookkeeping Overhead:</strong> Block headers stored immediately adjacent to payload (16–32 bytes per chunk).</p>
                  <p>• <strong>Resident Set Size (RSS):</strong> Memory currently mapped into physical RAM pages by OS.</p>
                </div>
              </div>
            </article>

            {/* LESSON 3: FRAGMENTATION & ALGORITHMS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 3
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Internal vs External Fragmentation & Allocation Strategies
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                    <h4 className="font-bold text-amber-950 text-sm mb-1">Internal Fragmentation</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Unused space <em>inside</em> an allocated memory block. Occurs because allocators enforce hardware alignment (e.g. 8 or 16-byte boundaries) or use fixed size classes. If an app requests 13 bytes and receives a 16-byte slot, 3 bytes are wasted internally.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50">
                    <h4 className="font-bold text-rose-950 text-sm mb-1">External Fragmentation</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Total free capacity in the arena is sufficient to satisfy a request, but the free space is fragmented into separate, non-contiguous holes such that no single available block is large enough.
                    </p>
                  </div>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center font-mono text-sm my-2">
                  <span className="font-bold text-stone-900">External Fragmentation Indicator: </span>
                  <code className="text-orange-700 font-bold">F_ext = 1.0 - (Largest Free Block / Total Free Capacity)</code>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Classic Free-List Selection Strategies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <div className="font-bold text-stone-900 text-sm mb-1">First-Fit</div>
                    <div className="text-xs text-stone-600">
                      Scans from list head and picks the first block large enough. Fast, but tends to accumulate small unusable holes near the front.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <div className="font-bold text-stone-900 text-sm mb-1">Best-Fit</div>
                    <div className="text-xs text-stone-600">
                      Scans the entire list to find the smallest block that fits. Minimizes immediate leftover, but creates many tiny residual fragments.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <div className="font-bold text-stone-900 text-sm mb-1">Worst-Fit</div>
                    <div className="text-xs text-stone-600">
                      Picks the largest available block. Leaves a substantial remainder, but quickly destroys blocks needed for future large allocations.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <div className="font-bold text-stone-900 text-sm mb-1">Buddy Allocation</div>
                    <div className="text-xs text-stone-600">
                      Partitions memory into power-of-two blocks ($2^k$). When freed, buddy blocks are recursively merged. Fast coalescing, but causes internal waste.
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 4: MEMORY SAFETY & GC */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 4
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Memory Safety, Sanitizers & Garbage Collection
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/40 text-xs">
                    <strong className="text-rose-900 text-sm block mb-0.5">Memory Leak</strong>
                    Allocated memory is never freed before all pointers to it are lost. Over time, process resident memory balloons.
                  </div>
                  <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/40 text-xs">
                    <strong className="text-rose-900 text-sm block mb-0.5">Dangling Pointer & Use-After-Free</strong>
                    Reading or writing through a pointer after the target object has been released. Can corrupt allocator headers or cause exploits.
                  </div>
                  <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/40 text-xs">
                    <strong className="text-rose-900 text-sm block mb-0.5">Double Free</strong>
                    Calling <code className="font-mono">free()</code> more than once on the same address. Corrupts the allocator's free-list links.
                  </div>
                  <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/40 text-xs">
                    <strong className="text-emerald-900 text-sm block mb-0.5">AddressSanitizer (ASan)</strong>
                    Compile with <code className="font-mono bg-white px-1 py-0.5 rounded">-fsanitize=address,undefined</code> to catch bounds overruns and UAF immediately with stack traces.
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 5: LOCALITY & MEMORY PERFORMANCE */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 5
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Cache Locality and Memory Hierarchy Performance
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  A memory allocator can be mathematically optimal and yet yield terrible throughput if data structures fight against the CPU's hardware memory hierarchy:
                </p>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 my-2 text-xs font-mono">
                  <div className="font-bold text-stone-900 font-sans text-sm mb-2">The Latency Pyramid:</div>
                  <div className="space-y-1">
                    <div className="bg-emerald-100 text-emerald-950 p-1.5 rounded">CPU Registers: ~0.5 ns (Tens of registers)</div>
                    <div className="bg-emerald-50 text-emerald-900 p-1.5 rounded">L1 Cache: ~1.2 ns (48 KiB per core, 64-byte line size)</div>
                    <div className="bg-blue-50 text-blue-900 p-1.5 rounded">L2 Cache: ~4 ns (1.25 MiB per core)</div>
                    <div className="bg-purple-50 text-purple-900 p-1.5 rounded">L3 Cache: ~15 ns (24+ MiB shared)</div>
                    <div className="bg-amber-50 text-amber-900 p-1.5 rounded">Main Memory (DRAM): ~60–100 ns (Gigabytes)</div>
                    <div className="bg-rose-50 text-rose-900 p-1.5 rounded">NVMe SSD / Disk: ~10,000–100,000 ns (Terabytes)</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Matrix Traversal: Row-Major vs Column-Major
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  C stores multidimensional arrays in <strong>row-major order</strong> (elements in the same row are adjacent in memory). Iterating row-wise (<code className="font-mono text-xs">matrix[i][j]</code>) visits consecutive bytes in RAM, maximizing spatial locality and prefetcher throughput. Iterating column-wise (<code className="font-mono text-xs">matrix[j][i]</code>) jumps by an entire row ($N \times 4$ bytes) per iteration, triggering an L1/L2 cache miss on nearly every access and running up to <strong>10x–12x slower</strong>!
                </p>
              </div>
            </article>

            {/* LESSON 6: PRACTICAL ALLOCATOR LAB */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 6 & Capstone Lab
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Capstone Lab: Building a Fixed-Arena Free-List Allocator in C
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  In this lab, you implement a complete 64KB fixed arena allocator featuring doubly-linked free-list nodes, block splitting, contiguous coalescing, and support for First-Fit, Best-Fit, and Worst-Fit policies.
                </p>

                <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 text-stone-200 font-mono text-xs my-4">
                  <div className="flex items-center justify-between px-4 py-2 bg-stone-950 border-b border-stone-800 text-stone-400">
                    <span className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-orange-500" />
                      allocator_lab.c — Complete Free-List Allocator Implementation
                    </span>
                    <button
                      onClick={() => copyToClipboard(allocatorLabSourceCode, "alloc-c")}
                      className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                    >
                      {copiedCodeId === "alloc-c" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Source</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto leading-relaxed max-h-96">
                    <code>{allocatorLabSourceCode}</code>
                  </pre>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* TAB 2: INTERACTIVE LAB (ALLOCATOR POLICY, CACHE LOCALITY, TERMINAL) */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-8">
            {/* TOOL 1: ALLOCATION STRATEGY VISUALIZER */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Boxes className="w-5 h-5 text-orange-600" />
                    Interactive Free-List Allocation Policy Simulator
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Simulate how First-Fit, Best-Fit, and Worst-Fit select blocks and split free capacity.
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setAllocPolicy("first-fit")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      allocPolicy === "first-fit"
                        ? "bg-orange-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    First-Fit
                  </button>
                  <button
                    onClick={() => setAllocPolicy("best-fit")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      allocPolicy === "best-fit"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Best-Fit
                  </button>
                  <button
                    onClick={() => setAllocPolicy("worst-fit")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      allocPolicy === "worst-fit"
                        ? "bg-purple-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Worst-Fit
                  </button>
                  <button
                    onClick={resetBlocks}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-200 text-stone-700 hover:bg-stone-300 ml-2 cursor-pointer"
                  >
                    Reset Arena
                  </button>
                </div>
              </div>

              {/* Request Slider & Action */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-800 mb-1">
                    <span>Incoming Allocation Request:</span>
                    <span className="font-mono text-orange-600 text-sm">{requestSize} Bytes</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="550"
                    step="10"
                    value={requestSize}
                    onChange={(e) => setRequestSize(parseInt(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-0.5">
                    <span>50 Bytes (Small)</span>
                    <span>212 Bytes (Curriculum Standard)</span>
                    <span>550 Bytes (Large)</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={performAllocation}
                    className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Allocate {requestSize}B with {allocPolicy}
                  </button>
                </div>
              </div>

              {/* Memory Arena Blocks Visualizer */}
              <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 mb-4">
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                  Current Free-List Memory Arena (Total: 1700 Bytes)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {blocksState.map((b) => (
                    <div
                      key={b.id}
                      className={`p-3 rounded-lg border text-center transition ${
                        b.free
                          ? "bg-white border-stone-300 shadow-2xs"
                          : "bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300"
                      }`}
                    >
                      <div className="text-[11px] font-bold text-stone-500">Block #{b.id}</div>
                      <div className="text-lg font-bold font-mono text-stone-900 mt-0.5">
                        {b.size} B
                      </div>
                      <div className="mt-2">
                        {b.free ? (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-semibold">
                            FREE
                          </span>
                        ) : (
                          <div className="space-y-0.5">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold block">
                              Alloc: {b.allocatedSize} B
                            </span>
                            <span className="text-[9px] text-stone-500 block">
                              Leftover: {b.leftover} B
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics & Allocation Feedback */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-[11px] text-stone-500 uppercase font-semibold">Free Capacity</div>
                  <div className="text-2xl font-bold font-mono text-stone-800 mt-0.5">
                    {fragmentationStats.freeTotal} B
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-[11px] text-stone-500 uppercase font-semibold">Largest Free Block</div>
                  <div className="text-2xl font-bold font-mono text-blue-600 mt-0.5">
                    {fragmentationStats.largestFree} B
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-[11px] text-stone-500 uppercase font-semibold">External Fragmentation (F_ext)</div>
                  <div className="text-2xl font-bold font-mono text-orange-600 mt-0.5">
                    {fragmentationStats.fExt}
                  </div>
                </div>
              </div>

              {lastAllocationInfo && (
                <div
                  className={`mt-4 p-3 rounded-xl border text-xs leading-relaxed ${
                    lastAllocationInfo.success
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                      : "bg-rose-50 border-rose-300 text-rose-950"
                  }`}
                >
                  {lastAllocationInfo.success ? (
                    <div>
                      <strong>Success:</strong> Allocated {lastAllocationInfo.allocated}B into Block #{lastAllocationInfo.blockId} ({lastAllocationInfo.originalSize}B) using <strong>{lastAllocationInfo.policy}</strong>. Remaining split block capacity: {lastAllocationInfo.leftover}B.
                    </div>
                  ) : (
                    <div>
                      <strong>Failure:</strong> {lastAllocationInfo.message}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* TOOL 2: CACHE LOCALITY & MATRIX TRAVERSAL VISUALIZER */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Grid className="w-5 h-5 text-blue-600" />
                    Cache Locality & Matrix Traversal Visualizer
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Watch how row-major access enjoys continuous cache-line spatial hits while column-major access triggers cache misses.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setTraversalMode("row-major");
                      setTraversalStep(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      traversalMode === "row-major"
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Row-Major (Spatial Locality)
                  </button>
                  <button
                    onClick={() => {
                      setTraversalMode("col-major");
                      setTraversalStep(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      traversalMode === "col-major"
                        ? "bg-rose-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Column-Major (Cache Thrashing)
                  </button>
                  <button
                    disabled={isTraversing}
                    onClick={runTraversalSimulation}
                    className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Play Animation
                  </button>
                </div>
              </div>

              {/* Matrix Grid Visualization */}
              <div className="flex flex-col items-center p-4 bg-stone-50 rounded-xl border border-stone-200 mb-4">
                <div className="text-xs font-mono font-bold text-stone-600 mb-3">
                  8 × 8 Matrix Elements in Memory (Active Element: [{currentCoord.r >= 0 ? currentCoord.r : "—"}, {currentCoord.c >= 0 ? currentCoord.c : "—"}])
                </div>
                <div className="grid grid-cols-8 gap-1.5 max-w-sm w-full">
                  {Array.from({ length: matrixSize * matrixSize }).map((_, idx) => {
                    const r = Math.floor(idx / matrixSize);
                    const c = idx % matrixSize;
                    const isActive = r === currentCoord.r && c === currentCoord.c;

                    return (
                      <div
                        key={idx}
                        className={`h-9 rounded flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-75 ${
                          isActive
                            ? traversalMode === "row-major"
                              ? "bg-emerald-500 text-white scale-110 shadow-md ring-2 ring-emerald-300"
                              : "bg-rose-500 text-white scale-110 shadow-md ring-2 ring-rose-300"
                            : "bg-white border border-stone-200 text-stone-400"
                        }`}
                      >
                        {r},{c}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Traversal Summary Card */}
              <div
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  traversalMode === "row-major"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}
              >
                <strong>{traversalMode === "row-major" ? "Row-Major Result:" : "Column-Major Result:"} </strong>
                {traversalMode === "row-major"
                  ? "Elements reside contiguously in memory. When element [i, 0] is read, the hardware prefetcher loads an entire 64-byte cache line (16 integers), causing the next 15 reads to be ultra-fast L1 cache hits (~1.2ns latency)."
                  : "Each iteration jumps by an entire row (8 integers * 4 bytes). Consecutive reads hit completely different cache sets, resulting in high cache miss rates, bus latency, and up to a 10x throughput penalty."}
              </div>
            </div>

            {/* TOOL 3: INTERACTIVE TERMINAL SANDBOX */}
            <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-xl text-stone-200 font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-3 bg-stone-950 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span className="font-bold text-stone-300">Linux Memory Allocator & Sanitizer Sandbox</span>
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
                    placeholder="Type command (e.g. ./allocator_lab, ./locality, ./mem_asan, help)..."
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
                    onClick={() => executeTerminalCommand("gcc -std=c11 -O0 -g -Wall -Wextra allocator_lab.c -o allocator_lab && ./allocator_lab")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    ./allocator_lab
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("gcc -O2 locality.c -o locality && ./locality")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    ./locality
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("gcc -fsanitize=address,undefined -g memory_safety.c -o mem_asan && ./mem_asan")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    AddressSanitizer
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
                  Module 9 Completion Criteria Checklist
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Track your deliverables: implement a free-list allocator, evaluate fragmentation, analyze cache locality, and verify with AddressSanitizer.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-stone-700">
                  Progress: {completedChecklistCount} / 9 Completed
                </span>
                <button
                  onClick={() => {
                    const report = `PREPSPACES OS MODULE 9 COMPLETION REPORT:
- Virtual Address Spaces & Stack Frames: ${checklist.virtualAddressSpaces ? "PASS" : "PENDING"}
- malloc(), calloc(), realloc(), free(): ${checklist.mallocFreeUsage ? "PASS" : "PENDING"}
- Fragmentation & F_ext Indicator: ${checklist.fragmentationMath ? "PASS" : "PENDING"}
- First-fit vs Best-fit vs Worst-fit vs Buddy: ${checklist.allocationAlgorithms ? "PASS" : "PENDING"}
- Memory Safety (Leaks, UAF, Double Free): ${checklist.memoryErrorsDiagnosis ? "PASS" : "PENDING"}
- GC Tracing & Cache Locality: ${checklist.gcAndCacheLocality ? "PASS" : "PENDING"}
- Free-List Allocator Implementation (allocator_lab.c): ${checklist.implementFreeListAllocator ? "PASS" : "PENDING"}
- Policy Benchmark & Coalescing: ${checklist.policyBenchmarkComparison ? "PASS" : "PENDING"}
- ASan & UBSan Sanitizer Testing: ${checklist.sanitizerTesting ? "PASS" : "PENDING"}
Completion Score: ${Math.round((completedChecklistCount / 9) * 100)}%`;
                    copyToClipboard(report, "checklist-rep9");
                  }}
                  className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedCodeId === "checklist-rep9" ? (
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
                  key: "virtualAddressSpaces",
                  title: "1. Explain virtual address spaces, stack frames, and dynamic object lifetimes",
                  desc: "Describe MMU address translation, stack frame destruction upon function return, and why returning pointers to locals is invalid.",
                },
                {
                  key: "mallocFreeUsage",
                  title: "2. Correctly use malloc(), calloc(), realloc(), and free() in C",
                  desc: "Handle memory allocation failures gracefully, check integer multiplication overflows, and pair allocations with releases.",
                },
                {
                  key: "fragmentationMath",
                  title: "3. Identify and calculate internal and external fragmentation",
                  desc: "Compute external fragmentation F_ext = 1 - (largest free block / total free capacity) and analyze alignment padding.",
                },
                {
                  key: "allocationAlgorithms",
                  title: "4. Compare First-Fit, Best-Fit, Worst-Fit, and Buddy allocation",
                  desc: "Analyze search complexity, residual fragment sizes, power-of-two rounding, and recursive buddy block coalescing.",
                },
                {
                  key: "memoryErrorsDiagnosis",
                  title: "5. Diagnose memory leaks, dangling pointers, double frees, and use-after-free bugs",
                  desc: "Trace pointer ownership lifecycles, clear dangling aliases, and understand heap corruption mechanics.",
                },
                {
                  key: "gcAndCacheLocality",
                  title: "6. Describe garbage collection strategies and hardware cache locality",
                  desc: "Contrast reference counting with mark-and-sweep, and explain 64-byte cache line prefetching in row-major vs column-major matrix traversals.",
                },
                {
                  key: "implementFreeListAllocator",
                  title: "7. Implement a custom free-list allocator with aligned headers, splitting, and coalescing",
                  desc: "Build allocator_lab.c with 64KB fixed arena, max_align_t alignment, block splitting, and bidirectional neighbor merging.",
                },
                {
                  key: "policyBenchmarkComparison",
                  title: "8. Compare allocation policies using measured fragmentation and allocation-failure statistics",
                  desc: "Run experiment matrices across small/large allocations and verify that adjacent block coalescing successfully restores large blocks.",
                },
                {
                  key: "sanitizerTesting",
                  title: "9. Document allocator limitations and verify safety using AddressSanitizer (-fsanitize=address)",
                  desc: "Compile with ASan/UBSan, test error handling paths, and inspect Linux process mappings via /proc/self/maps.",
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
                  Module 9 Knowledge Assessment
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Evaluate your understanding of address spaces, fragmentation, allocation policies, free() mechanics, and cache locality.
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
            onClick={() => navigate("/learning/os/concurrency")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-white rounded-xl transition border border-stone-200/80 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 8 (Synchronization & Deadlocks)
          </button>
          <button
            onClick={() => navigate("/learning/os/virtual-memory")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition shadow-xs cursor-pointer"
          >
            Next: Module 10 (Virtual Memory & Paging)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
