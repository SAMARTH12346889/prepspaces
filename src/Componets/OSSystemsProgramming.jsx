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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 3                                   */
/* C Programming and the Systems Programming Model                            */
/* CMU CS:APP 15-213, MIT 6.1810, Stanford CS110, UC Berkeley CS162 Standard  */
/* -------------------------------------------------------------------------- */

export default function OSSystemsProgramming() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(26);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'quiz' | 'checklist'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Interactive Struct Alignment Inspector State (Lesson 1.4)
  const [structConfig, setStructConfig] = useState({
    includePadding: true,
    reorderFields: false,
  });

  // Interactive Memory Layout Inspector State (Lesson 2.5)
  const [selectedMemoryRegion, setSelectedMemoryRegion] = useState("heap");

  // Interactive Build Pipeline Stage (Lesson 3)
  const [activePipelineStage, setActivePipelineStage] = useState("preprocess");

  // Terminal Simulator State (Capstone Lab & Debugging)
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "gcc -Wall -Wextra -Wpedantic -std=c17 main.c mathutil.c -o app && ./app",
      out: "Result: 30\n[Process exited with status 0]",
      type: "success",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // Section 10: Capstone Lab Checklist State (7 items matching curriculum)
  const [checklist, setChecklist] = useState({
    createFiles: false,
    buildProject: false,
    inspectElf: false,
    runGdb: false,
    inspectLibraries: false,
    asanBugFix: false,
    writeReport: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // Section 11: Knowledge Assessment State (8 questions matching curriculum)
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "1. What does the address-of operator `&` do?",
      options: [
        "Returns the size of an object",
        "Produces the address of an object",
        "Frees allocated memory",
        "Dereferences a pointer",
      ],
      correctIndex: 1,
      explanation:
        "The unary `&` operator evaluates to the memory address of its operand. For example, `&score` yields a pointer holding the memory address where the variable `score` is stored. Conversely, `*ptr` dereferences that address.",
    },
    {
      id: 2,
      question: "2. Which statement about stack and heap is correct?",
      options: [
        "All C local variables must live on the stack",
        "Heap allocations are automatically freed when a function returns",
        "Stack and heap are common implementation concepts, not C-mandated memory regions",
        "Global variables always live on the heap",
      ],
      correctIndex: 2,
      explanation:
        "The ISO C standard defines language semantics in terms of storage duration (automatic, static, allocated, and thread-local), not hardware stack and heap memory. The division into stack frames and heap arenas is an architectural convention established by operating system ABIs and standard C runtimes.",
    },
    {
      id: 3,
      question: "3. Which stage resolves external symbols between object files?",
      options: [
        "Preprocessing",
        "Linking",
        "Runtime input",
        "Header inclusion",
      ],
      correctIndex: 1,
      explanation:
        "The Linker (`ld` invoked via `gcc`) combines relocatable object files (`.o`), matches unresolved external symbol references (such as `add_numbers` called in `main.o`) with symbol definitions in other object files or libraries, patches relocations, and outputs an executable ELF.",
    },
    {
      id: 4,
      question: "4. What does `free(ptr)` do?",
      options: [
        "Sets ptr to NULL automatically",
        "Releases the allocated object when ptr is a valid allocation pointer",
        "Frees every allocation made by the program",
        "Guarantees the memory is immediately returned to the OS",
      ],
      correctIndex: 1,
      explanation:
        "`free(ptr)` releases the memory block pointed to by `ptr` back to the allocator runtime arena. Crucially, `free()` does NOT set `ptr` to `NULL` (leaving it as a dangling pointer unless cleared manually), and memory may be cached by the allocator rather than immediately unmapped via `brk`/`munmap`.",
    },
    {
      id: 5,
      question: "5. What is a file descriptor?",
      options: [
        "A C variable type for filenames",
        "A process-level handle used to refer to an open I/O resource",
        "A compiler warning",
        "A section of an ELF file",
      ],
      correctIndex: 1,
      explanation:
        "A file descriptor is a small non-negative integer (e.g., 0 for stdin, 1 for stdout, 2 for stderr) that acts as an index into the kernel's per-process open file table (`struct files_struct`), pointing to underlying open files, sockets, pipes, or devices.",
    },
    {
      id: 6,
      question: "6. What is a main advantage of dynamic libraries?",
      options: [
        "They eliminate every runtime dependency",
        "They can allow compatible library code to be shared by multiple processes",
        "They prevent all memory errors",
        "They remove the need for linking",
      ],
      correctIndex: 1,
      explanation:
        "Shared dynamic libraries (`.so`) allow multiple concurrently running processes to share the exact same physical memory pages of executable code mapped read-only (`PROT_READ | PROT_EXEC`). Furthermore, bug fixes in the shared object do not require relinking all dependent applications.",
    },
    {
      id: 7,
      question: "7. Which tool is commonly used to inspect ELF headers?",
      options: ["readelf", "make", "Valgrind only", "printf"],
      correctIndex: 0,
      explanation:
        "`readelf` (part of GNU Binutils) is specifically designed to parse and display the ELF header (`readelf -h`), section headers (`readelf -S`), symbol tables (`readelf -s`), and dynamic tags (`readelf -d`) of Unix executables and object files.",
    },
    {
      id: 8,
      question: "8. Why is out-of-bounds access dangerous?",
      options: [
        "It always returns zero",
        "It is always caught by the compiler",
        "It can cause undefined behavior and memory corruption",
        "It only affects performance",
      ],
      correctIndex: 2,
      explanation:
        "Out-of-bounds reading or writing invokes undefined behavior. It can silently overwrite adjacent variables, corrupt return addresses on the stack, allow remote code execution vulnerabilities, or cause asynchronous segfaults far from the point of the bug.",
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
  gcc -Wall -Wextra -std=c17 main.c mathutil.c -o app
  ./app
  gcc -E hello.c -o hello.i
  gcc -S hello.c -o hello.s
  gcc -c main.c -o main.o
  readelf -h app
  readelf -S app
  objdump -d app
  strace ./app
  ldd app
  gcc -fsanitize=address,undefined -g bug.c -o bug && ./bug
  gdb ./app
  make
  clear`;
    } else if (raw.includes("readelf -h")) {
      output = `ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00
  Class:                             ELF64
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  Type:                              DYN (Position-Independent Executable file)
  Machine:                           Advanced Micro Devices X86-64
  Version:                           0x1
  Entry point address:               0x1060
  Start of program headers:          64 (bytes into file)
  Start of section headers:          14808 (bytes into file)
  Flags:                             0x0
  Size of this header:               64 (bytes)
  Number of program headers:         13
  Number of section headers:         31`;
      type = "success";
    } else if (raw.includes("readelf -S")) {
      output = `There are 31 section headers, starting at offset 0x39d8:

Section Headers:
  [Nr] Name              Type             Address           Offset   Size   ES Flg Lk Inf Al
  [ 0]                   NULL             0000000000000000  00000000 000000 00      0   0  0
  [14] .text             PROGBITS         0000000000001060  00001060 0001c2 00  AX  0   0 16
  [16] .rodata           PROGBITS         0000000000002000  00002000 000028 00   A  0   0  4
  [24] .data             PROGBITS         0000000000004000  00003000 000010 00  WA  0   0  8
  [25] .bss              NOBITS           0000000000004010  00003010 000008 00  WA  0   0  4
Key: AX = Alloc & Execute (code), WA = Writable & Alloc (data), A = Alloc (read-only)`;
      type = "success";
    } else if (raw.includes("objdump -d")) {
      output = `app:     file format elf64-x86-64

Disassembly of section .text:

0000000000001149 <add_numbers>:
    1149: 55                    push   %rbp
    114a: 48 89 e5              mov    %rsp,%rbp
    114d: 89 7d fc              mov    %edi,-0x4(%rbp)
    1150: 89 75 f8              mov    %esi,-0x8(%rbp)
    1153: 8b 55 fc              mov    -0x4(%rbp),%edx
    1156: 8b 45 f8              mov    -0x8(%rbp),%eax
    1159: 01 d0                 add    %edx,%eax
    115b: 5d                    pop    %rbp
    115c: c3                    ret

000000000000115d <main>:
    115d: 55                    push   %rbp
    115e: 48 89 e5              mov    %rsp,%rbp
    1161: 48 83 ec 10           sub    $0x10,%rsp
    1165: be 14 00 00 00        mov    $0x14,%esi
    116a: bf 0a 00 00 00        mov    $0xa,%edi
    116f: e8 d5 ff ff ff        call   1149 <add_numbers>
    1174: 89 45 fc              mov    %eax,-0x4(%rbp)
    1177: 8b 45 fc              mov    -0x4(%rbp),%eax
    117a: 89 c6                 mov    %eax,%esi
    117c: 48 8d 3d 81 0e 00 00  lea    0xe81(%rip),%rdi        # 2004 <_IO_stdin_used+0x4>
    1183: b8 00 00 00 00        mov    $0x0,%eax
    1188: e8 b3 fe ff ff        call   1040 <printf@plt>
    118d: b8 00 00 00 00        mov    $0x0,%eax
    1192: c9                    leave
    1193: c3                    ret`;
      type = "success";
    } else if (raw.includes("strace")) {
      output = `execve("./app", ["./app"], 0x7ffd19b3d900 /* 58 vars */) = 0
brk(NULL)                               = 0x55dc5b248000
arch_prctl(0x3001 /* ARCH_SET_FS */, 0x7fa281859740) = 0
mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7fa281857000
write(1, "Result: 30\\n", 11)           = 11
exit_group(0)                           = ?
+++ exited with 0 +++`;
      type = "success";
    } else if (raw.includes("ldd")) {
      output = `        linux-vdso.so.1 (0x00007ffd395fd000)
        libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fa281600000)
        /lib64/ld-linux-x86-64.so.2 (0x00007fa281861000)`;
      type = "success";
    } else if (raw.includes("sanitize") || raw.includes("bug")) {
      output = `=================================================================
==4210==ERROR: AddressSanitizer: stack-buffer-overflow on address 0x7ffd9a3ef0bc at pc 0x55a9b8 bp 0x7ffd9a3ef080 sp 0x7ffd9a3ef078
WRITE of size 4 at 0x7ffd9a3ef0bc thread T0
    #0 0x55a9b8 in unsafe_example bug.c:4
    #1 0x55ab10 in main bug.c:9
    #2 0x7f482d in __libc_start_main (/lib/x86_64-linux-gnu/libc.so.6+0x29d90)

Address 0x7ffd9a3ef0bc is located in stack of thread T0 at offset 44 in frame
    #0 0x55a900 in unsafe_example bug.c:1

  This frame has 1 object(s):
    [32, 44) 'values' <== Memory access at offset 44 overflows this variable!
HINT: this may indicate a buffer overflow in array bounds checking.
SUMMARY: AddressSanitizer: stack-buffer-overflow bug.c:4 in unsafe_example
ABORTING`;
      type = "error";
    } else if (raw.includes("gdb")) {
      output = `GNU gdb (Ubuntu 12.1-0ubuntu1) 12.1
Reading symbols from ./app...
(gdb) break main
Breakpoint 1 at 0x1165: file main.c, line 5.
(gdb) run
Starting program: /home/engineer/module3/app 
Breakpoint 1, main () at main.c:5
5           int result = add_numbers(10, 20);
(gdb) step
add_numbers (a=10, b=20) at mathutil.c:3
3           return a + b;
(gdb) print a
$1 = 10
(gdb) print b
$2 = 20
(gdb) finish
Value returned is $3 = 30
(gdb) continue
Continuing.
Result: 30
[Inferior 1 (process 4390) exited normally]`;
      type = "success";
    } else if (raw.includes("./app")) {
      output = `Result: 30\n[Process completed successfully with exit code 0]`;
      type = "success";
    } else if (raw.startsWith("gcc") && raw.includes("-E")) {
      output = `# 1 "hello.c"
# 1 "<built-in>"
# 1 "<command-line>"
# 1 "/usr/include/stdio.h" 1 3 4
typedef long unsigned int size_t;
extern int puts (const char *__s);
/* 800+ lines of expanded system headers truncated */
# 2 "hello.c" 2
int main(void) {
 puts("Hello, systems programming!");
 return 0;
}`;
      type = "info";
    } else if (raw.startsWith("gcc") && raw.includes("-S")) {
      output = `.file   "hello.c"
.text
.section    .rodata
.LC0:
    .string "Hello, systems programming!"
.text
.globl  main
.type   main, @function
main:
    pushq   %rbp
    movq    %rsp, %rbp
    leaq    .LC0(%rip), %rax
    movq    %rax, %rdi
    call    puts@PLT
    movl    $0, %eax
    popq    %rbp
    ret`;
      type = "info";
    } else if (raw.startsWith("gcc") || raw.startsWith("make")) {
      output = `[CC] main.c -> main.o
[CC] mathutil.c -> mathutil.o
[LD] main.o mathutil.o -> app
Build completed cleanly. Zero warnings with -Wall -Wextra -Wpedantic.`;
      type = "success";
    } else {
      output = `bash: ${raw}: command processed in sandbox environment. Try typing 'help' or click any of the suggested command pills below.`;
      type = "warning";
    }

    setTerminalHistory((prev) => [...prev, { cmd: raw, out: output, type }]);
    setCustomCommand("");
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Breadcrumb & Navigation */}
      <ModuleNav
        track="os"
        currentModuleId="systems-programming"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova Systems AI"
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Module Header Card */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 tracking-wide uppercase">
                  Module 3 · Advanced Foundations
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  CMU 15-213 · MIT 6.1810 Curriculum
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                C Programming and the Systems Programming Model
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                Connect C programming directly to the way an operating system actually works. Move past high-level abstractions to inspect raw memory, virtual address spaces, executable binaries (ELF), object linking, system calls, and memory sanitizers.
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-stone-100">
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Estimated Time
                </div>
                <div className="text-lg font-bold text-stone-800">90–120 min</div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Lab Platform
                </div>
                <div className="text-sm font-medium text-stone-700">Linux / GCC / GDB / ELF</div>
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
              <Terminal className="w-4 h-4" />
              2. Interactive Terminal & Lab
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
              3. Capstone Checklist ({completedChecklistCount}/7)
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

        {/* TAB 1: CURRICULUM & THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* Roadmap Overview */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold font-serif tracking-tight text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-orange-400" />
                Module Roadmap & Systems Architecture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 1</span>
                  <h4 className="font-semibold text-white mt-1">C Memory Fundamentals</h4>
                  <p className="text-xs text-stone-400 mt-1">Pointers, addresses, arrays, alignment, padding & offsetof.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 2</span>
                  <h4 className="font-semibold text-white mt-1">Process Memory Layout</h4>
                  <p className="text-xs text-stone-400 mt-1">Stack frames, heap arenas, BSS, data segment, text & ASLR.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 3</span>
                  <h4 className="font-semibold text-white mt-1">Source to Executable</h4>
                  <p className="text-xs text-stone-400 mt-1">Preprocessing (.i), assembly (.s), object files (.o), linking & ELF.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 4</span>
                  <h4 className="font-semibold text-white mt-1">Libraries & Runtime</h4>
                  <p className="text-xs text-stone-400 mt-1">Static archives (.a) vs dynamic shared objects (.so), ldd & PIC.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 5</span>
                  <h4 className="font-semibold text-white mt-1">Safety & Debugging</h4>
                  <p className="text-xs text-stone-400 mt-1">Undefined behavior, buffer overflows, AddressSanitizer & GDB.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 6</span>
                  <h4 className="font-semibold text-white mt-1">File Descriptors & Syscalls</h4>
                  <p className="text-xs text-stone-400 mt-1">POSIX open, read, write, errno EINTR loops & resource cleanup.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 7</span>
                  <h4 className="font-semibold text-white mt-1">Systems Workflow</h4>
                  <p className="text-xs text-stone-400 mt-1">GCC warning flags (-Wall -Wextra), Makefiles with tabs & builds.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Capstone</span>
                  <h4 className="font-semibold text-white mt-1">Capstone Lab</h4>
                  <p className="text-xs text-stone-400 mt-1">Multi-file C build, readelf inspection, objdump, strace & ASan fix.</p>
                </div>
              </div>
            </div>

            {/* LESSON 1: C MEMORY FUNDAMENTALS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 1
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  C Memory Fundamentals
                </h2>
              </div>

              {/* 1.1 Why C Matters */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-mono font-bold">1.1</span>
                  Why C Matters to Operating Systems
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  C is widely used in operating-system kernels (Linux, FreeBSD, Windows NT, XNU), device drivers, embedded systems, language runtimes, and performance-critical infrastructure because it offers <strong>direct control over memory</strong> and relatively little runtime overhead.
                </p>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 font-mono text-sm text-stone-800">
                  <span className="text-purple-600 font-semibold">int</span> x = <span className="text-amber-600">10</span>; <span className="text-stone-400">// 1. Creates an integer object in storage</span><br />
                  <span className="text-purple-600 font-semibold">int</span> *p = &amp;x; <span className="text-stone-400">// 2. Stores its virtual memory address in a pointer variable</span><br />
                  *p = <span className="text-amber-600">25</span>; <span className="text-stone-400">// 3. Dereferences that pointer to modify the original object</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h5 className="font-bold text-stone-900 mb-1">Memory & Addresses</h5>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Every object in C resides at a specific memory location and occupies a fixed number of bytes. The address is how CPU instructions refer to hardware and program state.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h5 className="font-bold text-stone-900 mb-1">Indirection & Safety</h5>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Pointers enable indirection. The compiler enforces types while the operating system and hardware MMU enforce memory safety boundaries (e.g., page write protections).
                    </p>
                  </div>
                </div>
              </div>

              {/* 1.2 Pointers & Addresses */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-mono font-bold">1.2</span>
                  Pointers and Addresses
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  A pointer is an object that stores the memory address of another object or function.
                </p>

                <div className="relative bg-stone-950 text-stone-100 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                  <button
                    onClick={() => copyToClipboard(`#include <stdio.h>\n\nint main(void) {\n    int score = 90;\n    int *ptr = &score;\n\n    printf("Value: %d\\n", score);\n    printf("Through pointer: %d\\n", *ptr);\n\n    *ptr = 95;\n    printf("Updated value: %d\\n", score);\n\n    return 0;\n}`, "code-1-2")}
                    className="absolute top-3 right-3 text-stone-400 hover:text-white p-1 rounded bg-stone-800"
                    title="Copy code"
                  >
                    {copiedCodeId === "code-1-2" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre>{`#include <stdio.h>

int main(void) {
    int score = 90;
    int *ptr = &score;

    printf("Value: %d\\n", score);
    printf("Through pointer: %d\\n", *ptr);

    *ptr = 95;
    printf("Updated value: %d\\n", score);

    return 0;
}`}</pre>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-stone-200 rounded-lg">
                    <thead className="bg-stone-100 text-stone-700 font-semibold">
                      <tr>
                        <th className="py-2 px-3 border-b">Expression</th>
                        <th className="py-2 px-3 border-b">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="py-2 px-3 font-mono font-bold text-stone-900">score</td>
                        <td className="py-2 px-3 text-stone-600">The value stored in the integer object (e.g., 90)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono font-bold text-stone-900">&amp;score</td>
                        <td className="py-2 px-3 text-stone-600">The memory address of the integer object (e.g., 0x7ffd91a2408c)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono font-bold text-stone-900">int *ptr</td>
                        <td className="py-2 px-3 text-stone-600">Declares a pointer variable named ptr that points to an integer</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono font-bold text-stone-900">*ptr</td>
                        <td className="py-2 px-3 text-stone-600">Dereferences the pointer to access or modify the pointed-to object</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono font-bold text-stone-900">ptr = NULL</td>
                        <td className="py-2 px-3 text-stone-600">Sets the pointer to the null pointer address (guaranteed not to point to any valid object)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                  <strong>Crucial Systems Concept:</strong> A pointer is <em>not</em> the object it points to. Modifying <code className="font-mono font-bold">ptr = ptr + 1</code> changes the memory address stored in the pointer. Modifying <code className="font-mono font-bold">*ptr = 100</code> changes the value in the underlying object.
                </div>
              </div>

              {/* 1.3 Arrays and Pointer Arithmetic */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-mono font-bold">1.3</span>
                  Arrays and Pointer Arithmetic
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  An array contains a contiguous sequence of elements of the same type. In most expressions, the name of an array decays into a pointer to its first element:
                </p>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 font-mono text-xs">
                  int values[4] = &#123;10, 20, 30, 40&#125;;<br />
                  printf("%d\\n", values[2]);       <span className="text-stone-400">// Outputs: 30</span><br />
                  printf("%d\\n", *(values + 2));   <span className="text-stone-400">// Outputs: 30 (pointer arithmetic automatically scales by sizeof(int))</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-100 text-xs text-stone-700 space-y-1">
                  <div className="font-bold text-stone-900">Difference between Array and Pointer:</div>
                  <p>• An array has a fixed extent as part of its type. <code className="font-mono font-bold text-stone-900">sizeof(values)</code> yields 16 bytes (4 elements × 4 bytes).</p>
                  <p>• A pointer is an independent variable storing an address. <code className="font-mono font-bold text-stone-900">sizeof(ptr)</code> yields 8 bytes on any 64-bit architecture.</p>
                </div>
              </div>

              {/* 1.4 Structs, Padding, and Alignment */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-mono font-bold">1.4</span>
                  Structs, Padding, and Alignment
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Compilers insert padding bytes between struct members or at the end of the struct to satisfy hardware CPU alignment rules (e.g., 64-bit doubles must align to 8-byte boundaries for single-cycle memory reads).
                </p>

                {/* Interactive Struct Layout Visualizer */}
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                      Interactive Struct Memory Layout Inspector
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={structConfig.reorderFields}
                          onChange={(e) => setStructConfig((prev) => ({ ...prev, reorderFields: e.target.checked }))}
                          className="rounded text-orange-600 focus:ring-orange-500"
                        />
                        <span>Optimize field order (save padding)</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs">
                      <div className="text-stone-400">// C Declaration</div>
                      {structConfig.reorderFields ? (
                        <div>
                          <span className="text-purple-400">struct</span> ProcessInfo &#123;<br />
                          &nbsp;&nbsp;<span className="text-blue-400">double</span> cpu_time; <span className="text-stone-500">// 8 bytes (offset 0)</span><br />
                          &nbsp;&nbsp;<span className="text-blue-400">int</span> pid;        <span className="text-stone-500">// 4 bytes (offset 8)</span><br />
                          &nbsp;&nbsp;<span className="text-blue-400">char</span> state;     <span className="text-stone-500">// 1 byte  (offset 12)</span><br />
                          &nbsp;&nbsp;<span className="text-amber-400">// 3 bytes tail padding</span><br />
                          &#125;; <span className="text-emerald-400">// Total size: 16 bytes</span>
                        </div>
                      ) : (
                        <div>
                          <span className="text-purple-400">struct</span> ProcessInfo &#123;<br />
                          &nbsp;&nbsp;<span className="text-blue-400">int</span> pid;        <span className="text-stone-500">// 4 bytes (offset 0)</span><br />
                          &nbsp;&nbsp;<span className="text-blue-400">char</span> state;     <span className="text-stone-500">// 1 byte  (offset 4)</span><br />
                          &nbsp;&nbsp;<span className="text-amber-400">// 3 bytes alignment padding</span><br />
                          &nbsp;&nbsp;<span className="text-blue-400">double</span> cpu_time; <span className="text-stone-500">// 8 bytes (offset 8)</span><br />
                          &#125;; <span className="text-emerald-400">// Total size: 16 bytes</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs text-stone-600 font-semibold">16-Byte Linear Memory Layout:</div>
                      <div className="grid grid-cols-16 gap-0.5 border border-stone-300 rounded p-1 bg-white font-mono text-[10px] text-center">
                        {!structConfig.reorderFields ? (
                          <>
                            <div className="col-span-4 bg-blue-100 text-blue-800 p-1 rounded-sm border border-blue-300 font-bold" title="int pid (4 bytes)">pid [0-3]</div>
                            <div className="col-span-1 bg-emerald-100 text-emerald-800 p-1 rounded-sm border border-emerald-300 font-bold" title="char state (1 byte)">st [4]</div>
                            <div className="col-span-3 bg-amber-100 text-amber-800 p-1 rounded-sm border border-dashed border-amber-300 italic" title="Padding (3 bytes)">pad [5-7]</div>
                            <div className="col-span-8 bg-purple-100 text-purple-800 p-1 rounded-sm border border-purple-300 font-bold" title="double cpu_time (8 bytes)">cpu_time [8-15]</div>
                          </>
                        ) : (
                          <>
                            <div className="col-span-8 bg-purple-100 text-purple-800 p-1 rounded-sm border border-purple-300 font-bold" title="double cpu_time (8 bytes)">cpu_time [0-7]</div>
                            <div className="col-span-4 bg-blue-100 text-blue-800 p-1 rounded-sm border border-blue-300 font-bold" title="int pid (4 bytes)">pid [8-11]</div>
                            <div className="col-span-1 bg-emerald-100 text-emerald-800 p-1 rounded-sm border border-emerald-300 font-bold" title="char state (1 byte)">st [12]</div>
                            <div className="col-span-3 bg-amber-100 text-amber-800 p-1 rounded-sm border border-dashed border-amber-300 italic" title="Tail Padding (3 bytes)">pad [13-15]</div>
                          </>
                        )}
                      </div>
                      <div className="text-[11px] text-stone-500 flex justify-between px-1">
                        <span>Offset 0x00</span>
                        <span>Offset 0x08</span>
                        <span>Offset 0x10 (16B)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 2: PROCESS MEMORY LAYOUT */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 2
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Process Memory Layout
                </h2>
              </div>

              <p className="text-stone-700 leading-relaxed">
                When the OS kernel loads an executable into memory via the <code className="font-mono">execve()</code> system call, it sets up a virtual address space partitioned into distinct segments with specific access permissions (<code className="font-mono">PROT_READ</code>, <code className="font-mono">PROT_WRITE</code>, <code className="font-mono">PROT_EXEC</code>).
              </p>

              {/* Memory Region Explorer */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-2">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                    Virtual Address Segments (High to Low)
                  </div>
                  {[
                    { id: "kernel", name: "Kernel Space (0xffff8000...)", desc: "Inaccessible to Ring 3 user code" },
                    { id: "stack", name: "Stack Segment", desc: "Grows downward; local variables & call frames" },
                    { id: "mmap", name: "Memory Mappings & Shared Libs", desc: "Shared libraries (.so), dynamic allocations" },
                    { id: "heap", name: "Heap Arena", desc: "Grows upward; malloc/calloc/free" },
                    { id: "bss", name: "BSS Segment", desc: "Uninitialized global & static variables (zero-filled)" },
                    { id: "data", name: "Initialized Data Segment", desc: "Globals & statics with explicit initial values" },
                    { id: "text", name: "Text / Code Segment", desc: "Executable machine instructions (read-only)" },
                  ].map((seg) => (
                    <button
                      key={seg.id}
                      onClick={() => setSelectedMemoryRegion(seg.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                        selectedMemoryRegion === seg.id
                          ? "bg-orange-50 border-orange-300 text-orange-950 font-bold shadow-sm"
                          : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-mono">{seg.name}</div>
                      <div className="text-[11px] text-stone-500 font-normal mt-0.5">{seg.desc}</div>
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-2 bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4">
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                    <Activity className="w-4 h-4 text-orange-600" />
                    Segment Deep-Dive: <span className="font-mono text-orange-700">{selectedMemoryRegion.toUpperCase()}</span>
                  </h4>

                  {selectedMemoryRegion === "kernel" && (
                    <div className="text-sm text-stone-700 space-y-2">
                      <p><strong>Permissions:</strong> Supervisor-only (Ring 0). Direct access from user mode triggers a hardware general protection fault / SIGSEGV.</p>
                      <p><strong>Contents:</strong> Kernel text, page tables, process descriptors (<code className="font-mono">struct task_struct</code>), interrupt handlers, and physical memory direct mappings.</p>
                    </div>
                  )}

                  {selectedMemoryRegion === "stack" && (
                    <div className="text-sm text-stone-700 space-y-2">
                      <p><strong>Permissions:</strong> Read + Write (<code className="font-mono">PROT_READ | PROT_WRITE</code>), strictly non-executable (NX bit enabled to prevent shellcode injection).</p>
                      <p><strong>Contents:</strong> Function activation frames, return instruction pointers (RIP), saved frame pointers (RBP), and local automatic variables.</p>
                      <div className="bg-red-50 border border-red-200 text-red-900 p-3 rounded-lg text-xs">
                        <strong>Dangerous Anti-Pattern:</strong> Returning the address of a local variable (e.g. <code className="font-mono">return &amp;x;</code>) yields a dangling pointer because the stack frame is destroyed upon function return.
                      </div>
                    </div>
                  )}

                  {selectedMemoryRegion === "heap" && (
                    <div className="text-sm text-stone-700 space-y-2">
                      <p><strong>Permissions:</strong> Read + Write (<code className="font-mono">PROT_READ | PROT_WRITE</code>).</p>
                      <p><strong>Lifecycle:</strong> Explicitly allocated via <code className="font-mono">malloc()</code> and released via <code className="font-mono">free()</code>. Managed via runtime allocators (ptmalloc in glibc, jemalloc, mimalloc) which manage OS memory via <code className="font-mono">brk()</code> and <code className="font-mono">mmap()</code>.</p>
                      <p><strong>Golden Rules:</strong> Always check if malloc returns NULL; always free memory once and only once; avoid use-after-free by clearing pointers to NULL.</p>
                    </div>
                  )}

                  {selectedMemoryRegion === "bss" && (
                    <div className="text-sm text-stone-700 space-y-2">
                      <p><strong>Full Name:</strong> Block Started by Symbol. Represents uninitialized static storage variables (e.g., <code className="font-mono">int global_zero;</code>).</p>
                      <p><strong>Efficiency Optimization:</strong> The ELF file does not store thousands of zeros on disk. The ELF header merely specifies the required BSS size; the OS kernel zeroes out those memory pages upon allocation via demand paging.</p>
                    </div>
                  )}

                  {selectedMemoryRegion === "data" && (
                    <div className="text-sm text-stone-700 space-y-2">
                      <p><strong>Contents:</strong> Initialized global and static variables (e.g., <code className="font-mono">int global_init = 100;</code>).</p>
                      <p><strong>On Disk:</strong> Explicitly stored inside the executable file's <code className="font-mono">.data</code> section.</p>
                    </div>
                  )}

                  {selectedMemoryRegion === "text" && (
                    <div className="text-sm text-stone-700 space-y-2">
                      <p><strong>Permissions:</strong> Read + Execute (<code className="font-mono">PROT_READ | PROT_EXEC</code>), non-writable.</p>
                      <p><strong>Contents:</strong> Compiled machine code instructions. Because it is marked read-only, attempting to overwrite function code causes an immediate hardware trap.</p>
                    </div>
                  )}

                  {selectedMemoryRegion === "mmap" && (
                    <div className="text-sm text-stone-700 space-y-2">
                      <p><strong>Contents:</strong> Shared library code (<code className="font-mono">libc.so</code>), thread stacks, and memory-mapped files.</p>
                      <p><strong>Memory Sharing:</strong> Multiple independent processes share the exact same physical pages of read-only library code, radically conserving DRAM.</p>
                    </div>
                  )}

                  {/* Lab Code snippet for memory_layout.c */}
                  <div className="pt-3 border-t border-stone-200">
                    <div className="text-xs font-bold text-stone-800 mb-2 font-mono">
                      Lab Experiment: memory_layout.c
                    </div>
                    <div className="relative bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                      <pre>{`#include <stdio.h>
#include <stdlib.h>

int global_init = 100;
int global_zero;

int main(void) {
    int local = 20;
    static int local_static = 30;
    int *heap_value = malloc(sizeof *heap_value);
    if (!heap_value) return 1;

    printf("Text (main):       %p\\n", (void *)&main);
    printf("Data (global_init):%p\\n", (void *)&global_init);
    printf("BSS (global_zero): %p\\n", (void *)&global_zero);
    printf("BSS/Data (static): %p\\n", (void *)&local_static);
    printf("Heap allocation:   %p\\n", (void *)heap_value);
    printf("Stack (local):     %p\\n", (void *)&local);

    free(heap_value);
    return 0;
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 3: FROM C SOURCE TO EXECUTABLE */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 3
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  From C Source to Executable: The 4-Stage Pipeline
                </h2>
              </div>

              <p className="text-stone-700 leading-relaxed">
                A single invocation of <code className="font-mono font-bold text-stone-900">gcc hello.c -o hello</code> is not an atomic operation. It coordinates four distinct toolchain stages: Preprocessor (<code className="font-mono">cpp</code>), Compiler (<code className="font-mono">cc1</code>), Assembler (<code className="font-mono">as</code>), and Linker (<code className="font-mono">ld</code>).
              </p>

              {/* Pipeline Interactive Tabs */}
              <div className="flex items-center gap-2 border-b border-stone-200 overflow-x-auto pb-px">
                {[
                  { id: "preprocess", label: "1. Preprocessor (gcc -E)" },
                  { id: "compile", label: "2. Compiler (gcc -S)" },
                  { id: "assemble", label: "3. Assembler (gcc -c)" },
                  { id: "link", label: "4. Linker (ld)" },
                  { id: "elf", label: "5. ELF Binary Format" },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setActivePipelineStage(st.id)}
                    className={`px-3 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                      activePipelineStage === st.id
                        ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/60 font-bold"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-sm space-y-4">
                {activePipelineStage === "preprocess" && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900">Stage 1: Preprocessor (<code className="font-mono">hello.c &rarr; hello.i</code>)</h4>
                    <p className="text-stone-600 text-xs">
                      The preprocessor expands all <code className="font-mono">#include</code> header files (copying their prototypes inline), substitutes <code className="font-mono">#define</code> macros, strips comments, and evaluates conditional compilation directives (<code className="font-mono">#ifdef</code>).
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs">
                      gcc -E hello.c -o hello.i<br />
                      <span className="text-stone-400"># Result: hello.i expands ~800 lines of stdio declarations!</span>
                    </div>
                  </div>
                )}

                {activePipelineStage === "compile" && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900">Stage 2: Compiler (<code className="font-mono">hello.i &rarr; hello.s</code>)</h4>
                    <p className="text-stone-600 text-xs">
                      The compiler performs lexical analysis, syntax parsing, type checking, and optimization, outputting architecture-specific assembly instructions (e.g., x86-64 AT&amp;T or Intel syntax).
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs">
                      gcc -S hello.c -o hello.s<br />
                      <span className="text-stone-400"># Result: Assembly instructions with labels (.LC0, main) and register usage (%rdi, %rax)</span>
                    </div>
                  </div>
                )}

                {activePipelineStage === "assemble" && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900">Stage 3: Assembler (<code className="font-mono">hello.s &rarr; hello.o</code>)</h4>
                    <p className="text-stone-600 text-xs">
                      The assembler converts human-readable assembly instructions into machine code opcode bytes, packaging them into a relocatable object file (<code className="font-mono">.o</code>) with section headers and symbol tables.
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs">
                      gcc -c hello.c -o hello.o<br />
                      <span className="text-stone-400"># External functions (like puts) have unresolved placeholder addresses (relocations)</span>
                    </div>
                  </div>
                )}

                {activePipelineStage === "link" && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900">Stage 4: Linker (<code className="font-mono">hello.o &rarr; hello</code>)</h4>
                    <p className="text-stone-600 text-xs">
                      The linker resolves external symbol references between object files and libraries, patches relative displacement jump offsets, sets up the program entry point (<code className="font-mono">_start</code>), and generates the final executable.
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs">
                      gcc hello.o -o hello<br />
                      <span className="text-stone-400"># If an external function has no definition, linker fails: "undefined reference to 'foo'"</span>
                    </div>
                  </div>
                )}

                {activePipelineStage === "elf" && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900">ELF (Executable and Linkable Format) Anatomy</h4>
                    <p className="text-stone-600 text-xs">
                      ELF is the standard binary format for Linux. It consists of:
                    </p>
                    <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1">
                      <li><strong>ELF Header:</strong> Architecture, endianness, entry point, offsets to table headers.</li>
                      <li><strong>Program Headers (Segments):</strong> Used by the OS kernel loader (<code className="font-mono">LOAD</code>, <code className="font-mono">DYNAMIC</code>, <code className="font-mono">INTERP</code>).</li>
                      <li><strong>Section Headers:</strong> Used by compilers and linkers (<code className="font-mono">.text</code>, <code className="font-mono">.data</code>, <code className="font-mono">.rodata</code>, <code className="font-mono">.bss</code>, <code className="font-mono">.symtab</code>).</li>
                      <li><strong>Dynamic Linker:</strong> Typically <code className="font-mono">/lib64/ld-linux-x86-64.so.2</code>.</li>
                    </ul>
                  </div>
                )}
              </div>
            </article>

            {/* LESSON 4: STATIC AND DYNAMIC LIBRARIES */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 4
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Static and Dynamic Libraries
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-orange-600" />
                    Static Libraries (<code className="font-mono text-xs">.a</code> archives)
                  </h4>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Created using the <code className="font-mono font-bold">ar</code> archiver tool. The linker copies selected object code directly into the final executable binary.
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px]">
                    gcc -c mathutil.c -o mathutil.o<br />
                    ar rcs libmathutil.a mathutil.o<br />
                    gcc main.c -L. -lmathutil -o app_static
                  </div>
                  <ul className="text-xs text-stone-600 space-y-1">
                    <li>• <strong>Pros:</strong> Self-contained; fewer runtime dependency conflicts.</li>
                    <li>• <strong>Cons:</strong> Larger binary footprint; updating library requires relinking all apps.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    Dynamic Libraries (<code className="font-mono text-xs">.so</code> shared objects)
                  </h4>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Compiled with Position-Independent Code (<code className="font-mono">-fPIC</code>). Resolved and loaded into memory at program startup by the dynamic linker.
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px]">
                    gcc -fPIC -c mathutil.c -o mathutil.o<br />
                    gcc -shared -o libmathutil.so mathutil.o<br />
                    gcc main.c -L. -lmathutil -o app_dynamic<br />
                    LD_LIBRARY_PATH=. ./app_dynamic
                  </div>
                  <ul className="text-xs text-stone-600 space-y-1">
                    <li>• <strong>Pros:</strong> Shared physical memory pages across processes; easy library patches.</li>
                    <li>• <strong>Cons:</strong> Runtime dependency on compatible library versions.</li>
                  </ul>
                </div>
              </div>

              {/* Static vs Dynamic Matrix */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs text-left border border-stone-200 rounded-lg">
                  <thead className="bg-stone-100 text-stone-700 font-semibold">
                    <tr>
                      <th className="py-2.5 px-3 border-b">Feature</th>
                      <th className="py-2.5 px-3 border-b">Static Linking (.a)</th>
                      <th className="py-2.5 px-3 border-b">Dynamic Linking (.so)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="py-2 px-3 font-semibold text-stone-900">Library Code</td>
                      <td className="py-2 px-3 text-stone-600">Selected code is copied into executable</td>
                      <td className="py-2 px-3 text-stone-600">Shared library dependency recorded in DT_NEEDED</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-stone-900">Disk &amp; Memory</td>
                      <td className="py-2 px-3 text-stone-600">Larger binary; code duplicated per process</td>
                      <td className="py-2 px-3 text-stone-600">Small binary; code pages shared across all processes</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-stone-900">Inspection Tool</td>
                      <td className="py-2 px-3 font-mono text-stone-600">ar -t libmathutil.a</td>
                      <td className="py-2 px-3 font-mono text-stone-600">ldd ./app or readelf -d ./app</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-stone-900">On-demand loading</td>
                      <td className="py-2 px-3 text-stone-600">Not possible at runtime</td>
                      <td className="py-2 px-3 font-mono text-stone-600">dlopen() / dlsym() / dlclose()</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* LESSON 5: MEMORY SAFETY & DEBUGGING */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 5
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Undefined Behavior, Memory Safety, and Modern Tooling
                </h2>
              </div>

              <p className="text-stone-700 leading-relaxed">
                In C, <strong>undefined behavior (UB)</strong> occurs when code performs an operation for which the ISO standard imposes no requirements. Compilers assume UB never happens; under <code className="font-mono">-O2</code> or <code className="font-mono">-O3</code>, optimization passes may delete security checks or generate unexpected assembly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-red-800">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Buffer Overflow
                  </div>
                  <p>Writing outside array bounds. Corrupts neighboring variables or stack frame return pointers.</p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-800">
                    <RotateCcw className="w-4 h-4 text-amber-600" />
                    Use-After-Free
                  </div>
                  <p>Accessing an allocation after <code className="font-mono">free()</code>. The memory may already be reallocated to another structure.</p>
                </div>

                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-purple-800">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    AddressSanitizer (ASan)
                  </div>
                  <p>Compiler instrumentation that tracks shadow memory bytes and aborts immediately upon illegal reads/writes.</p>
                </div>
              </div>

              {/* ASan Build & Flags */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3 text-xs">
                <div className="font-bold text-stone-900">Compile with Modern Diagnostics &amp; AddressSanitizer:</div>
                <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono">
                  gcc -Wall -Wextra -Wpedantic -g -O1 \<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;-fsanitize=address,undefined \<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;-fno-omit-frame-pointer \<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;bug.c -o bug && ./bug
                </div>
                <p className="text-stone-600">
                  AddressSanitizer intercepts calls to memory allocators and instruments all memory loads and stores with check instructions against an 8:1 shadow memory map.
                </p>
              </div>

              {/* GDB Interactive Reference */}
              <div className="bg-stone-900 text-stone-100 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="text-orange-400 font-bold">Essential GNU Debugger (GDB) Commands:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-stone-300">
                  <div><span className="text-emerald-400 font-bold">break</span> &lt;loc&gt; (Set bp)</div>
                  <div><span className="text-emerald-400 font-bold">run</span> [args] (Launch)</div>
                  <div><span className="text-emerald-400 font-bold">next</span> (Step over)</div>
                  <div><span className="text-emerald-400 font-bold">step</span> (Step into)</div>
                  <div><span className="text-emerald-400 font-bold">print</span> &lt;var&gt; (Inspect)</div>
                  <div><span className="text-emerald-400 font-bold">backtrace</span> (Stack trace)</div>
                  <div><span className="text-emerald-400 font-bold">info</span> locals (Scope)</div>
                  <div><span className="text-emerald-400 font-bold">continue</span> (Resume)</div>
                </div>
              </div>
            </article>

            {/* LESSON 6: FILES, FILE DESCRIPTORS & SYSTEM INTERFACES */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 6
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Files, File Descriptors, and System Interfaces
                </h2>
              </div>

              <p className="text-stone-700 leading-relaxed">
                In Unix-like systems, <em>"everything is a stream of bytes."</em> An open I/O resource (file, socket, pipe) is represented to user space as a non-negative integer called a <strong>file descriptor</strong>.
              </p>

              <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                <div className="p-3 rounded-lg bg-stone-100 border border-stone-300">
                  <div className="font-bold text-stone-900">0 : STDIN_FILENO</div>
                  <div className="text-stone-500 text-[11px]">Standard Input</div>
                </div>
                <div className="p-3 rounded-lg bg-stone-100 border border-stone-300">
                  <div className="font-bold text-stone-900">1 : STDOUT_FILENO</div>
                  <div className="text-stone-500 text-[11px]">Standard Output</div>
                </div>
                <div className="p-3 rounded-lg bg-stone-100 border border-stone-300">
                  <div className="font-bold text-stone-900">2 : STDERR_FILENO</div>
                  <div className="text-stone-500 text-[11px]">Standard Error</div>
                </div>
              </div>

              {/* POSIX write() with EINTR and short writes */}
              <div className="space-y-3">
                <h4 className="font-bold text-stone-900 text-sm">
                  Production-Grade POSIX write() Pattern (Handling Partial Writes &amp; EINTR)
                </h4>
                <div className="relative bg-stone-950 text-stone-100 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                  <pre>{`#include <errno.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main(void) {
    const char message[] = "Hello from write() system call!\\n";
    size_t remaining = sizeof(message) - 1;
    const char *ptr = message;

    while (remaining > 0) {
        ssize_t n = write(STDOUT_FILENO, ptr, remaining);
        if (n < 0) {
            if (errno == EINTR) {
                continue; // System call interrupted by signal; retry
            }
            perror("write");
            return 1;
        }
        if (n == 0) {
            fprintf(stderr, "write made no progress\\n");
            return 1;
        }
        ptr += n;
        remaining -= (size_t)n;
    }
    return 0;
}`}</pre>
                </div>
              </div>
            </article>

            {/* LESSON 7: REPEATABLE BUILDS & MAKEFILES */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 7
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  GCC, Makefiles, and Repeatable Builds
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  Professional systems programming demands reproducible compilation rules. Make automatically determines which files need to be recompiled based on timestamp changes.
                </p>

                <div className="relative bg-stone-950 text-stone-100 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                  <div className="text-amber-400 mb-2 font-sans text-xs">
                    ⚠️ Critical: Makefile command lines MUST begin with a literal tab character, not spaces!
                  </div>
                  <pre>{`CC = gcc
CFLAGS = -std=c17 -Wall -Wextra -Wpedantic -g -O0
TARGET = app
OBJECTS = main.o mathutil.o

all: $(TARGET)

$(TARGET): $(OBJECTS)
\t$(CC) $(OBJECTS) -o $(TARGET)

main.o: main.c mathutil.h
\t$(CC) $(CFLAGS) -c main.c -o main.o

mathutil.o: mathutil.c mathutil.h
\t$(CC) $(CFLAGS) -c mathutil.c -o mathutil.o

clean:
\trm -f $(OBJECTS) $(TARGET)

.PHONY: all clean`}</pre>
                </div>
              </div>
            </article>

            {/* UNIVERSITY REFERENCES SECTION */}
            <section className="bg-stone-100 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                University-Level References &amp; Foundations
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm">
                This curriculum follows the standard systems architecture curricula of top universities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">CMU CS:APP 15-213</h5>
                  <p className="text-stone-600 mt-1">Carnegie Mellon University — machine-level programming, linking, virtual memory, and exceptional control flow.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">MIT 6.1810 Operating Systems</h5>
                  <p className="text-stone-600 mt-1">MIT xv6 labs connecting C systems code to kernel implementation, memory tables, and traps.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">OSTEP (Three Easy Pieces)</h5>
                  <p className="text-stone-600 mt-1">University of Wisconsin–Madison — processes, memory virtualization, concurrency, and persistence.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">GNU C Library &amp; GDB Manuals</h5>
                  <p className="text-stone-600 mt-1">Standard references for POSIX system call interfaces, glibc memory allocators, and breakpoint debugging.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: INTERACTIVE TERMINAL & SYSTEMS LAB */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-orange-600" />
                    Capstone Systems Terminal &amp; Toolchain Workbench
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Simulate real Linux systems commands. Inspect ELF headers, disassembly, system call traces with <code className="font-mono">strace</code>, GDB sessions, and AddressSanitizer bug detection.
                  </p>
                </div>
                <button
                  onClick={() => executeTerminalCommand("clear")}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                >
                  Clear Terminal
                </button>
              </div>

              {/* Command Suggestion Pills */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Quick Click Commands to Execute:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "gcc -Wall -Wextra -std=c17 main.c mathutil.c -o app",
                    "./app",
                    "readelf -h app",
                    "readelf -S app",
                    "objdump -d app",
                    "strace ./app",
                    "ldd app",
                    "gcc -fsanitize=address,undefined -g bug.c -o bug && ./bug",
                    "gdb ./app",
                    "gcc -E hello.c -o hello.i",
                    "gcc -S hello.c -o hello.s",
                    "make",
                  ].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeTerminalCommand(cmd)}
                      className="px-2.5 py-1 bg-stone-100 hover:bg-orange-100 hover:text-orange-900 border border-stone-300 rounded-md font-mono text-[11px] transition text-stone-800"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Screen */}
              <div className="bg-stone-950 text-stone-100 rounded-xl p-4 sm:p-6 font-mono text-xs shadow-inner min-h-[420px] max-h-[600px] overflow-y-auto space-y-4">
                <div className="text-stone-400 text-[11px] pb-2 border-b border-stone-800 flex justify-between">
                  <span>engineer@prepspaces:~/module3-systems$</span>
                  <span>Linux x86-64 · GCC 13.2 · GDB 14.1</span>
                </div>

                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-orange-400 font-bold">
                      <span className="text-emerald-400">user@prepspaces:~$</span>
                      <span>{item.cmd}</span>
                    </div>
                    <pre
                      className={`whitespace-pre-wrap text-[11px] leading-relaxed ${
                        item.type === "error"
                          ? "text-red-400 bg-red-950/30 p-2.5 rounded border border-red-900/50"
                          : item.type === "success"
                          ? "text-emerald-300"
                          : item.type === "warning"
                          ? "text-amber-300"
                          : "text-stone-300"
                      }`}
                    >
                      {item.out}
                    </pre>
                  </div>
                ))}

                {/* Live Command Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    executeTerminalCommand(customCommand);
                  }}
                  className="flex items-center gap-2 pt-2"
                >
                  <span className="text-emerald-400 font-bold">user@prepspaces:~$</span>
                  <input
                    type="text"
                    value={customCommand}
                    onChange={(e) => setCustomCommand(e.target.value)}
                    placeholder="Type command (e.g. 'readelf -h app', 'objdump -d app', 'help')..."
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 placeholder:text-stone-600"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded text-[11px] font-sans font-semibold transition"
                  >
                    Run
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAPSTONE CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-900">
                  Capstone Lab Completion Checklist
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Track your mastery through all 7 university-grade milestones for Module 3.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-orange-100 text-orange-800">
                  {completedChecklistCount} of 7 Completed ({Math.round((completedChecklistCount / 7) * 100)}%)
                </span>
                <button
                  onClick={() => {
                    const report = `# PrepSpaces Module 3: C Programming & Systems Programming Model
## Lab Completion Report
- [${checklist.createFiles ? "x" : " "}] Create main.c, mathutil.c, and mathutil.h
- [${checklist.buildProject ? "x" : " "}] Build the project using GCC and Make
- [${checklist.inspectElf ? "x" : " "}] Inspect ELF headers, symbols, and disassembly (readelf & objdump)
- [${checklist.runGdb ? "x" : " "}] Run program under GDB with breakpoints & stepping
- [${checklist.inspectLibraries ? "x" : " "}] Inspect shared-library dependencies (ldd & readelf -d)
- [${checklist.asanBugFix ? "x" : " "}] Build with AddressSanitizer and fix memory bug
- [${checklist.writeReport ? "x" : " "}] Write short lab report explaining results

Score: ${completedChecklistCount}/7 milestones completed.
Verified on: ${new Date().toISOString()}`;
                    navigator.clipboard.writeText(report);
                    alert("Lab completion report copied to clipboard!");
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy Report
                </button>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {[
                {
                  key: "createFiles",
                  title: "1. Create main.c, mathutil.c, and mathutil.h",
                  desc: "Declare function prototype in mathutil.h, implement addition in mathutil.c, and call it from main.c.",
                },
                {
                  key: "buildProject",
                  title: "2. Build project using GCC and Make",
                  desc: "Compile individual object files (.o) and link them into an executable using a repeatable Makefile with literal tabs.",
                },
                {
                  key: "inspectElf",
                  title: "3. Inspect ELF headers, sections, and disassembly",
                  desc: "Execute `readelf -h`, `readelf -S`, and `objdump -d` to inspect the entry point, code segments, and x86-64 assembly instructions.",
                },
                {
                  key: "runGdb",
                  title: "4. Run the program under GDB",
                  desc: "Set a breakpoint at main, step into add_numbers, inspect variables with `print`, and observe return values.",
                },
                {
                  key: "inspectLibraries",
                  title: "5. Inspect shared-library dependencies",
                  desc: "Run `ldd ./app` and `readelf -d ./app` to identify the dynamic linker (/lib64/ld-linux-x86-64.so.2) and glibc.",
                },
                {
                  key: "asanBugFix",
                  title: "6. Build with AddressSanitizer and fix memory bug",
                  desc: "Compile with `-fsanitize=address,undefined`, inspect the stack-buffer-overflow trace, and fix the out-of-bounds array write.",
                },
                {
                  key: "writeReport",
                  title: "7. Write short explanation of how source becomes process",
                  desc: "Summarize preprocessing, compilation, assembly, linking, and kernel loading via execve().",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleChecklist(item.key)}
                  className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition ${
                    checklist[item.key]
                      ? "bg-emerald-50/60 border-emerald-200"
                      : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() => {}}
                      className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${checklist[item.key] ? "text-emerald-950" : "text-stone-900"}`}>
                      {item.title}
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE ASSESSMENT */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-900">
                  Module 3 Knowledge Check (8 Questions)
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Test your mastery of C pointers, memory layout, ELF linking, and POSIX system calls.
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold font-mono px-3 py-1.5 rounded-full bg-orange-100 text-orange-800">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </span>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOpt = quizAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition-all ${
                      quizSubmitted
                        ? isCorrect
                          ? "bg-emerald-50/40 border-emerald-300"
                          : "bg-red-50/40 border-red-300"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-900 mb-3">
                      {q.question}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (selectedOpt === optIdx) {
                            btnStyle = "bg-red-100 border-red-400 text-red-950 line-through";
                          } else {
                            btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                          }
                        } else if (selectedOpt === optIdx) {
                          btnStyle = "bg-orange-100 border-orange-400 text-orange-950 font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 pt-3 border-t border-stone-200/60 text-xs text-stone-600 leading-relaxed">
                        <strong className="text-stone-800">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition shadow-sm ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-orange-600 hover:bg-orange-500 text-white cursor-pointer"
                      : "bg-stone-300 text-stone-500 cursor-not-allowed"
                  }`}
                >
                  {Object.keys(quizAnswers).length === quizQuestions.length
                    ? "Check Answers (Submit Quiz)"
                    : `Answer all ${quizQuestions.length} questions to submit (${Object.keys(quizAnswers).length}/${quizQuestions.length})`}
                </button>
              </div>
            ) : null}
          </div>
        )}

        {/* Footer Navigation Bar */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/architecture")}
            className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 2 (Computer Architecture)
          </button>

          <div className="text-xs text-stone-500 font-medium">
            Module 3 of 12 · PrepSpaces Operating Systems Master Course
          </div>

          <button
            onClick={() => navigate("/learning/os/processes")}
            className="flex items-center gap-2 text-xs font-semibold text-orange-600 hover:text-orange-700 transition"
          >
            Next: Module 4 (Processes &amp; Threads)
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>

      {/* Floating AI Tutor Drawer */}
      {showAiTutor && (
        <aside className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col h-[520px]">
          <div className="bg-stone-900 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="font-semibold text-xs tracking-wide">Nova Systems AI Tutor</span>
            </div>
            <button
              onClick={() => setShowAiTutor(false)}
              className="text-stone-400 hover:text-white text-xs font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-hidden p-2">
            <LearningRo
              courseId="os"
              moduleId="systems-programming"
              moduleTitle="C Programming & Systems Programming Model"
            />
          </div>
        </aside>
      )}
    </div>
  );
}
