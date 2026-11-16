import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Coffee,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  Lock,
  Unlock,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Layers,
  Cpu,
  Server,
  Activity,
  Workflow,
  BarChart3,
  HardDrive,
  GitBranch,
  Filter,
  CheckCircle,
  Play,
  Binary,
  Code2,
  ListOrdered,
  Bug,
  Award,
  Repeat,
  Split,
  Calculator,
  Compass,
  Zap,
  Grid,
  Search,
  Type,
  Maximize2,
  ShieldCheck,
  Box,
  Share2,
  Sliders,
  Target,
  FileText,
  ShieldAlert,
  FolderTree,
  Database,
  ArrowDownUp,
  SlidersHorizontal,
  Crown,
  Grid3X3,
  Eye,
  LineChart,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaComplexitySections from "./JavaComplexitySections";

export default function JavaComplexity() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java");

  // Tab mode: 'curriculum' (Text & Chapters) vs 'workbenches' (Interactive Labs)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("asymptotic-studio");

  // -------------------------------------------------------------
  // WORKBENCH 1: Asymptotic Growth Visualizer & Benchmark Studio
  // -------------------------------------------------------------
  const [nVal, setNVal] = useState(30);
  const [visibleCurves, setVisibleCurves] = useState({
    c1: true,
    logn: true,
    n: true,
    nlogn: true,
    n2: true,
    n3: false,
    twoN: true,
  });

  const toggleCurve = (key) => {
    setVisibleCurves((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const asymptoticData = useMemo(() => {
    const n = Math.max(1, Math.min(100, nVal));
    const log2n = Math.log2(n);
    const nlogn = n * log2n;
    const n2 = n * n;
    const n3 = n * n * n;
    const twoN = n <= 30 ? Math.pow(2, n) : Infinity;

    return {
      n,
      c1: 1,
      logn: Number(log2n.toFixed(2)),
      nVal: n,
      nlogn: Number(nlogn.toFixed(1)),
      n2,
      n3,
      twoN: twoN === Infinity ? "> 10^12" : twoN.toLocaleString(),
      twoNNum: twoN,
    };
  }, [nVal]);

  // -------------------------------------------------------------
  // WORKBENCH 2: Loop Complexity Analyzer & Step Simulator
  // -------------------------------------------------------------
  const [loopPattern, setLoopPattern] = useState("nested-full");
  const [loopN, setLoopN] = useState(10);
  const [simSteps, setSimSteps] = useState(0);
  const [simLog, setSimLog] = useState([]);

  const loopPatterns = [
    {
      id: "sequential",
      name: "1. Sequential Independent Loops (O(n + m))",
      complexity: "O(n)",
      formula: "n + n = 2n",
      code: `for (int i = 0; i < n; i++) { count++; }\nfor (int j = 0; j < n; j++) { count++; }`,
      calc: (n) => 2 * n,
      desc: "Costs of sequential loops are added, not multiplied. 2n scales linearly.",
    },
    {
      id: "nested-full",
      name: "2. Full Two-Level Nested Loops (O(n²))",
      complexity: "O(n²)",
      formula: "n × n = n²",
      code: `for (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        count++;\n    }\n}`,
      calc: (n) => n * n,
      desc: "Inner loop runs n times for each of the n outer iterations. Total work = n².",
    },
    {
      id: "dependent-triangle",
      name: "3. Dependent Inner Loop (Arithmetic Series Θ(n²))",
      complexity: "Θ(n²)",
      formula: "1 + 2 + ... + n = n(n+1)/2",
      code: `for (int i = 0; i < n; i++) {\n    for (int j = 0; j <= i; j++) {\n        count++;\n    }\n}`,
      calc: (n) => (n * (n + 1)) / 2,
      desc: "The inner loop bounds depend on outer index i. The arithmetic progression sums to n(n+1)/2 = 0.5n² + 0.5n.",
    },
    {
      id: "logarithmic-doubling",
      name: "4. Logarithmic Loop (Doubling j *= 2)",
      complexity: "O(log n)",
      formula: "k = ⌊log₂ n⌋ + 1",
      code: `for (int j = 1; j < n; j *= 2) {\n    count++;\n}`,
      calc: (n) => (n <= 1 ? 0 : Math.floor(Math.log2(n - 1)) + 1),
      desc: "j doubles on each iteration (1, 2, 4, 8...). It takes only log₂(n) steps to exceed n.",
    },
    {
      id: "linear-log",
      name: "5. Nested Linear Outer × Logarithmic Inner (O(n log n))",
      complexity: "O(n log n)",
      formula: "n × ⌊log₂ n⌋",
      code: `for (int i = 0; i < n; i++) {\n    for (int j = 1; j < n; j *= 2) {\n        count++;\n    }\n}`,
      calc: (n) => (n <= 1 ? 0 : n * (Math.floor(Math.log2(n - 1)) + 1)),
      desc: "The outer loop runs n times; the inner loop executes log₂(n) times per outer pass. Total = n log n.",
    },
    {
      id: "log-squared",
      name: "6. Double Logarithmic Loops (O((log n)²))",
      complexity: "O((log n)²)",
      formula: "log₂ n × log₂ n",
      code: `for (int i = 1; i < n; i *= 2) {\n    for (int j = 1; j < n; j *= 2) {\n        count++;\n    }\n}`,
      calc: (n) => (n <= 1 ? 0 : Math.pow(Math.floor(Math.log2(n - 1)) + 1, 2)),
      desc: "Both outer and inner variables double on each step. Total = log(n) × log(n).",
    },
    {
      id: "cubic-full",
      name: "7. Three Full Nested Loops (O(n³))",
      complexity: "O(n³)",
      formula: "n × n × n = n³",
      code: `for (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        for (int k = 0; k < n; k++) count++;\n    }\n}`,
      calc: (n) => n * n * n,
      desc: "Standard 3-matrix multiplication or all-triplets search. Scales cubically.",
    },
  ];

  const currentPattern = useMemo(
    () => loopPatterns.find((p) => p.id === loopPattern) || loopPatterns[1],
    [loopPattern]
  );

  const calculatedOps = useMemo(
    () => currentPattern.calc(loopN),
    [currentPattern, loopN]
  );

  // -------------------------------------------------------------
  // WORKBENCH 3: Master Theorem Calculator & Recurrence Solver
  // -------------------------------------------------------------
  const [recurrenceA, setRecurrenceA] = useState(2);
  const [recurrenceB, setRecurrenceB] = useState(2);
  const [recurrenceF, setRecurrenceF] = useState("n");

  const masterTheoremPresets = [
    { name: "Merge Sort", a: 2, b: 2, f: "n" },
    { name: "Binary Search", a: 1, b: 2, f: "1" },
    { name: "Karatsuba Multiplication", a: 3, b: 2, f: "n" },
    { name: "Strassen Matrix Mult", a: 7, b: 2, f: "n^2" },
    { name: "Two Halves + Constant", a: 2, b: 2, f: "1" },
    { name: "Quadtree Division", a: 4, b: 2, f: "n" },
  ];

  const masterTheoremResult = useMemo(() => {
    const a = Number(recurrenceA);
    const b = Number(recurrenceB);
    if (a < 1 || b <= 1) {
      return {
        valid: false,
        error: "Master Theorem requires a >= 1 and b > 1.",
      };
    }

    const logba = Math.log(a) / Math.log(b);
    const logbaRounded = Number(logba.toFixed(3));

    // Parse f(n) degree
    let degF = 0;
    let hasLog = false;
    let fStr = recurrenceF.trim().toLowerCase();

    if (fStr === "1") {
      degF = 0;
    } else if (fStr === "n") {
      degF = 1;
    } else if (fStr === "n^2") {
      degF = 2;
    } else if (fStr === "n^3") {
      degF = 3;
    } else if (fStr.includes("log")) {
      degF = 1;
      hasLog = true;
    }

    const eps = 0.001;
    let appliedCase = "";
    let finalBound = "";
    let rationale = "";

    if (degF < logba - eps) {
      appliedCase = "Case 1: Recursive Work Dominates";
      finalBound = `Θ(n^${logbaRounded === 1 ? "" : logbaRounded})`;
      rationale = `f(n) = ${recurrenceF} is polynomially smaller than n^(log_b a) = n^${logbaRounded}. The leaves of the recursion tree dominate.`;
    } else if (Math.abs(degF - logba) <= eps) {
      appliedCase = "Case 2: Balanced Work Between Levels";
      finalBound = `Θ(n^${logbaRounded === 1 ? "" : logbaRounded} log n)`;
      rationale = `f(n) is asymptotically comparable to n^(log_b a) = n^${logbaRounded}. Work is distributed equally across all log_b n levels.`;
    } else {
      appliedCase = "Case 3: Non-Recursive Work Dominates";
      finalBound = `Θ(${recurrenceF})`;
      rationale = `f(n) = ${recurrenceF} is polynomially larger than n^(log_b a) = n^${logbaRounded}, and regularity condition a*f(n/b) <= c*f(n) holds. Root dominates.`;
    }

    return {
      valid: true,
      logbaRounded,
      appliedCase,
      finalBound,
      rationale,
    };
  }, [recurrenceA, recurrenceB, recurrenceF]);

  // -------------------------------------------------------------
  // WORKBENCH 4: Amortized Analysis & Dynamic Array Studio
  // -------------------------------------------------------------
  const [arrayCapacity, setArrayCapacity] = useState(1);
  const [arrayElements, setArrayElements] = useState([]);
  const [amortizedLog, setAmortizedLog] = useState([]);
  const [totalCopies, setTotalCopies] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const resetDynamicArray = () => {
    setArrayCapacity(1);
    setArrayElements([]);
    setAmortizedLog([]);
    setTotalCopies(0);
    setTotalCost(0);
  };

  const appendToDynamicArray = (count = 1) => {
    let currentCap = arrayCapacity;
    let currentElems = [...arrayElements];
    let newLogs = [...amortizedLog];
    let copies = totalCopies;
    let runningCost = totalCost;

    for (let c = 0; c < count; c++) {
      const elemVal = currentElems.length + 1;
      let cost = 1; // 1 for element insertion
      let resized = false;
      let oldCap = currentCap;

      if (currentElems.length >= currentCap) {
        // Double capacity
        const prevSize = currentElems.length;
        currentCap = currentCap * 2;
        copies += prevSize;
        cost += prevSize; // copy existing elements
        resized = true;
      }

      currentElems.push(elemVal);
      runningCost += cost;

      newLogs.unshift({
        id: elemVal,
        val: elemVal,
        cost,
        resized,
        oldCap,
        newCap: currentCap,
        cumCost: runningCost,
        avgCost: (runningCost / currentElems.length).toFixed(2),
      });
    }

    setArrayCapacity(currentCap);
    setArrayElements(currentElems);
    setAmortizedLog(newLogs.slice(0, 30));
    setTotalCopies(copies);
    setTotalCost(runningCost);
  };

  // -------------------------------------------------------------
  // WORKBENCH 5: Time vs Space Trade-off (Duplicate Detection)
  // -------------------------------------------------------------
  const [tradeoffN, setTradeoffN] = useState(100);
  const [duplicateMode, setDuplicateMode] = useState("none"); // none, early, middle, late

  const tradeoffStats = useMemo(() => {
    const n = tradeoffN;
    // Approach A: Brute Force Nested Loops
    // Best case: duplicate at index 0 and 1 -> 1 comparison
    // Worst case: no duplicates -> n(n-1)/2 comparisons
    let comparisonsSlow = 0;
    if (duplicateMode === "early") {
      comparisonsSlow = 1;
    } else if (duplicateMode === "middle") {
      const mid = Math.floor(n / 2);
      comparisonsSlow = (mid * (mid + 1)) / 2;
    } else if (duplicateMode === "late") {
      comparisonsSlow = (n * (n - 1)) / 2;
    } else {
      comparisonsSlow = (n * (n - 1)) / 2;
    }

    // Approach B: HashSet
    let operationsFast = 0;
    if (duplicateMode === "early") {
      operationsFast = 2; // insert 1st, 2nd collides
    } else if (duplicateMode === "middle") {
      operationsFast = Math.floor(n / 2);
    } else if (duplicateMode === "late") {
      operationsFast = n;
    } else {
      operationsFast = n;
    }

    return {
      n,
      slow: {
        timeComp: "O(n²)",
        auxSpace: "O(1) [0 extra objects]",
        comparisons: comparisonsSlow.toLocaleString(),
        desc: "Examines every pair without allocating extra memory.",
      },
      fast: {
        timeComp: "O(n) expected",
        auxSpace: `O(n) [${operationsFast} HashSet entry nodes]`,
        operations: operationsFast.toLocaleString(),
        desc: "Trades memory for instant O(1) expected hash lookups.",
      },
    };
  }, [tradeoffN, duplicateMode]);

  // -------------------------------------------------------------
  // WORKBENCH 6: Sorting & Searching Complexity Battle Arena
  // -------------------------------------------------------------
  const [arenaSearchTarget, setArenaSearchTarget] = useState(784321);
  const searchArenaN = 1000000;
  const binarySteps = Math.ceil(Math.log2(searchArenaN));

  const sortingAlgorithms = [
    { name: "Bubble Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "Yes", inPlace: "Yes" },
    { name: "Selection Sort", best: "O(n²)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "No", inPlace: "Yes" },
    { name: "Insertion Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "Yes", inPlace: "Yes" },
    { name: "Merge Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(n)", stable: "Yes", inPlace: "No" },
    { name: "Quick Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n²)", space: "O(log n) stack", stable: "No", inPlace: "Yes" },
    { name: "Heap Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(1)", stable: "No", inPlace: "Yes" },
  ];

  // -------------------------------------------------------------
  // WORKBENCH 7: Loop Invariant Proof Studio
  // -------------------------------------------------------------
  const [invariantStep, setInvariantStep] = useState(0);
  const invariantProofSteps = [
    {
      title: "1. Precondition & Postcondition",
      badge: "Specification",
      content:
        "Precondition: Input array 'numbers' is non-null and numbers.length >= 1.\nPostcondition: Method returns the largest integer in 'numbers'.",
      code: `int maximum = numbers[0];\nfor (int i = 1; i < numbers.length; i++) {\n    if (numbers[i] > maximum) maximum = numbers[i];\n}\nreturn maximum;`,
    },
    {
      title: "2. The Loop Invariant Statement",
      badge: "Invariant Property",
      content:
        "Invariant: At the start of iteration i, 'maximum' holds the highest value among all elements in numbers[0 .. i - 1].",
      code: `// Invariant holds for subarray numbers[0 .. i - 1] at each boundary`,
    },
    {
      title: "3. Initialization (Base Step)",
      badge: "Initialization",
      content:
        "Prior to the first iteration (i = 1), 'maximum' is assigned numbers[0]. The subarray examined so far contains only numbers[0]. Since numbers[0] is trivially the maximum of itself, the invariant holds true initially.",
      code: `int maximum = numbers[0]; // Trivially true for subarray of size 1`,
    },
    {
      title: "4. Maintenance (Inductive Step)",
      badge: "Maintenance",
      content:
        "Assume the invariant holds before iteration i (maximum is largest in numbers[0 .. i - 1]). During iteration i, we compare numbers[i] with maximum. If numbers[i] > maximum, maximum is updated. Otherwise it remains unchanged. In either case, after the iteration, maximum is the largest in numbers[0 .. i]. Incrementing i to i+1 re-establishes the invariant for the next round.",
      code: `if (numbers[i] > maximum) maximum = numbers[i]; // Preserves invariant`,
    },
    {
      title: "5. Termination & Final Correctness",
      badge: "Termination",
      content:
        "The loop terminates when i reaches numbers.length. Substituting i = numbers.length into our invariant establishes that 'maximum' contains the largest element in numbers[0 .. numbers.length - 1] (the entire array). Therefore, returning maximum satisfies the postcondition with 100% mathematical certainty.",
      code: `return maximum; // Guaranteed correct for all valid inputs`,
    },
  ];

  // -------------------------------------------------------------
  // WORKBENCH 8: 20-Question Knowledge Assessment Quiz
  // -------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What does algorithmic time complexity describe?",
      options: [
        "Exact execution time in milliseconds on a target computer",
        "Growth of computational work as input size increases",
        "Total number of source code characters",
        "Count of classes loaded by the JVM",
      ],
      correct: 1,
      explanation: "Time complexity describes the growth rate in computational operations as input size n increases, abstracting away machine-specific hardware differences.",
    },
    {
      id: "q2",
      question: "2. Which notation represents an asymptotic upper bound?",
      options: ["Big-O (O)", "Big-Omega (Ω)", "Big-Theta (Θ)", "Little-omega (ω)"],
      correct: 0,
      explanation: "Big-O notation specifies an asymptotic upper bound: f(n) <= c * g(n) for all n >= n0.",
    },
    {
      id: "q3",
      question: "3. Which notation represents a tight asymptotic bound?",
      options: ["Big-O (O)", "Big-Omega (Ω)", "Big-Theta (Θ)", "Big-Delta (Δ)"],
      correct: 2,
      explanation: "Big-Theta (Θ) represents a tight bound where an algorithm is bounded both above and below by constant multiples of g(n).",
    },
    {
      id: "q4",
      question: "4. What is the time complexity of binary search on a sorted array?",
      options: ["O(n²)", "O(n)", "O(log n)", "O(2ⁿ)"],
      correct: 2,
      explanation: "Binary search repeatedly divides the search interval in half, eliminating 50% of remaining candidates per comparison.",
    },
    {
      id: "q5",
      question: "5. What is the time complexity of two full nested loops, each executing n times?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
      correct: 2,
      explanation: "Two full nested loops each running n times perform n × n = n² iterations, yielding quadratic O(n²) complexity.",
    },
    {
      id: "q6",
      question: "6. What is the auxiliary stack space of a simple recursive factorial implementation?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
      explanation: "Linear recursion builds n active activation frames on the JVM call stack before unwinding at the base case, consuming O(n) auxiliary stack space.",
    },
    {
      id: "q7",
      question: "7. Which algorithm commonly has O(n log n) worst-case time and O(n) auxiliary array space?",
      options: ["Linear search", "Merge sort", "Selection sort", "Bubble sort"],
      correct: 1,
      explanation: "Merge sort guarantees O(n log n) worst-case time and requires O(n) auxiliary array space for temporary merging buffers.",
    },
    {
      id: "q8",
      question: "8. What does amortized analysis examine?",
      options: [
        "Only the fastest best-case input",
        "A sequence of operations and their combined aggregate cost",
        "Only call-stack memory depth",
        "The CPU clock cycle of a single primitive instruction",
      ],
      correct: 1,
      explanation: "Amortized analysis guarantees an average bound per operation across a sequence of operations (e.g. dynamic array geometric doubling).",
    },
    {
      id: "q9",
      question: "9. Which algorithm commonly has exponential time O(2ⁿ) when implemented naively?",
      options: ["Iterative linear search", "Binary search", "Naive recursive Fibonacci", "Array index access"],
      correct: 2,
      explanation: "Naive recursive Fibonacci repeatedly recalculates overlapping subproblems, branching into an exponential tree of calls.",
    },
    {
      id: "q10",
      question: "10. Which statement about Big-O is correct?",
      options: [
        "It always means worst-case complexity",
        "It gives an asymptotic upper bound",
        "It gives the exact number of CPU operations",
        "It means constant time",
      ],
      correct: 1,
      explanation: "Big-O is a mathematical upper bound; it can bound worst-case, average-case, or best-case functions depending on the case being analyzed.",
    },
  ];

  const handleSelectOption = (qid, idx) => {
    if (submittedQuiz) return;
    setSelectedAnswers((prev) => ({ ...prev, [qid]: idx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers]);

  // -------------------------------------------------------------
  // WORKBENCH 9: Interactive Labs & Assignments Tracker
  // -------------------------------------------------------------
  const [completedLabs, setCompletedLabs] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_java_m7_labs");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleLab = (id) => {
    setCompletedLabs((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_java_m7_labs", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const labItems = [
    { id: "lab-1", type: "Lab", title: "Lab 1: Build a Complexity Demonstrator", goal: "Implement linear, quadratic, and logarithmic operations counters and compare growth for n = 10, 100, 1000." },
    { id: "lab-2", type: "Lab", title: "Lab 2: Compare Duplicate Detection", goal: "Benchmark nested-loop brute force O(n²) vs HashSet O(n) lookups across varying duplicate placement distributions." },
    { id: "lab-3", type: "Lab", title: "Lab 3: Recursive vs Iterative Factorial", goal: "Compare operation counts, call-stack activation records, and numeric overflow behavior between iterative and recursive factorial." },
    { id: "lab-4", type: "Lab", title: "Lab 4: Solve Recurrences", goal: "Derive solutions for T(n) = T(n-1) + 1, T(n/2) + 1, 2T(n/2) + n, 2T(n/2) + 1, and T(n-1) + n using expansion and Master Theorem." },
    { id: "assign-1", type: "Assignment", title: "Assignment 1: Complexity Classification", goal: "Classify five distinct code fragments into their exact Big-O and Big-Theta asymptotic bounds." },
    { id: "assign-2", type: "Assignment", title: "Assignment 2: Build a Better Search", goal: "Implement and verify iterative vs recursive binary search, handling empty bounds and proving invariant maintenance." },
    { id: "assign-3", type: "Assignment", title: "Assignment 3: Analyze Recursive Subsets", goal: "Prove why subset generation takes O(2ⁿ) time, evaluating branching depth and output generation memory." },
    { id: "assign-4", type: "Assignment", title: "Assignment 4: Design a Time-Space Trade-Off", goal: "Design, implement, and benchmark two competing solutions (memory-constrained vs compute-optimized) for anagram verification." },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white pb-24">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* Module Header & Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700 backdrop-blur-sm mb-2">
              <Coffee className="w-3.5 h-3.5 text-orange-600" />
              <span>Java Programming Master Course · Module 7</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight">
              Algorithm Analysis &amp; Big-O Complexity
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
              Master asymptotic analysis (Big-O, Big-Omega, Big-Theta), loop invariant correctness proofs, best/average/worst-case behavior, nested loop arithmetic, recurrence relations, Master Theorem, and amortized data-structure scaling.
            </p>
          </div>

          {/* Mode Switcher Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "curriculum"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Curriculum Guide</span>
            </button>
            <button
              onClick={() => setActiveTab("workbenches")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "workbenches"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Interactive Workbenches</span>
            </button>
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <ModuleNav
          track="java"
          courseId="java-programming"
          currentModuleId="complexity-analysis"
          prevRoute="/learning/java/recursion-backtracking"
          nextRoute={null}
        />

        {activeTab === "curriculum" ? (
          <div className="mt-8">
            <JavaComplexitySections />
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {/* WORKBENCH SUB-TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e7e3da] text-xs font-semibold [scrollbar-width:none]">
              {[
                { id: "asymptotic-studio", label: "1. Asymptotic Growth Studio", icon: LineChart },
                { id: "loop-analyzer", label: "2. Loop Complexity Analyzer", icon: Layers },
                { id: "master-theorem", label: "3. Master Theorem Solver", icon: Calculator },
                { id: "amortized-studio", label: "4. Amortized Array Studio", icon: Database },
                { id: "tradeoff-sandbox", label: "5. Time-Space Trade-Off", icon: Split },
                { id: "sorting-arena", label: "6. Big-O Battle Arena", icon: ArrowDownUp },
                { id: "invariant-studio", label: "7. Loop Invariant Proofs", icon: ShieldCheck },
                { id: "quiz-section", label: "8. Knowledge Assessment (Quiz)", icon: HelpCircle },
                { id: "labs-tracker", label: "9. Labs & Assignments", icon: CheckSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeWorkbench === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkbench(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-stone-900 text-white shadow-xs"
                        : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-orange-400" : "text-stone-500"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 1. ASYMPTOTIC GROWTH STUDIO */}
            {activeWorkbench === "asymptotic-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <LineChart className="w-5 h-5 text-orange-600" />
                        <span>Asymptotic Growth Curves &amp; Comparative Scaler</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Observe how operations escalate as input size n increases from small to enterprise scale.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-stone-500 font-bold">Input Size n:</span>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={nVal}
                        onChange={(e) => setNVal(Number(e.target.value))}
                        className="w-32 accent-orange-600 cursor-pointer"
                      />
                      <span className="w-10 px-2 py-1 rounded bg-orange-50 border border-orange-200 text-orange-700 font-mono font-bold text-center text-xs">
                        {nVal}
                      </span>
                    </div>
                  </div>

                  {/* Curve Toggle Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      { key: "c1", label: "O(1) Constant", color: "text-emerald-700 bg-emerald-50 border-emerald-300" },
                      { key: "logn", label: "O(log n) Logarithmic", color: "text-blue-700 bg-blue-50 border-blue-300" },
                      { key: "n", label: "O(n) Linear", color: "text-amber-700 bg-amber-50 border-amber-300" },
                      { key: "nlogn", label: "O(n log n) Linearithmic", color: "text-purple-700 bg-purple-50 border-purple-300" },
                      { key: "n2", label: "O(n²) Quadratic", color: "text-orange-700 bg-orange-50 border-orange-300" },
                      { key: "n3", label: "O(n³) Cubic", color: "text-pink-700 bg-pink-50 border-pink-300" },
                      { key: "twoN", label: "O(2ⁿ) Exponential", color: "text-red-700 bg-red-50 border-red-300" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => toggleCurve(item.key)}
                        className={`text-xs px-3 py-1.5 rounded-xl border font-mono font-bold transition cursor-pointer ${
                          visibleCurves[item.key]
                            ? item.color
                            : "bg-stone-50 border-stone-200 text-stone-400 line-through"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Operation Count Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono font-semibold">O(1) Constant</div>
                      <div className="text-xl font-mono font-black text-emerald-600 mt-1">1 op</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">&lt; 1 ns</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono font-semibold">O(log n)</div>
                      <div className="text-xl font-mono font-black text-blue-600 mt-1">{asymptoticData.logn} ops</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">~3 ns</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono font-semibold">O(n) Linear</div>
                      <div className="text-xl font-mono font-black text-amber-600 mt-1">{asymptoticData.nVal} ops</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">~30 ns</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono font-semibold">O(n log n)</div>
                      <div className="text-xl font-mono font-black text-purple-600 mt-1">{asymptoticData.nlogn} ops</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">~150 ns</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono font-semibold">O(n²) Quadratic</div>
                      <div className="text-xl font-mono font-black text-orange-600 mt-1">{asymptoticData.n2.toLocaleString()} ops</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">~1 µs</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono font-semibold">O(n³) Cubic</div>
                      <div className="text-xl font-mono font-black text-pink-600 mt-1">{asymptoticData.n3.toLocaleString()} ops</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">~30 µs</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center col-span-2">
                      <div className="text-[11px] text-stone-500 font-mono font-semibold">O(2ⁿ) Exponential</div>
                      <div className="text-xl font-mono font-black text-red-600 mt-1 truncate">{asymptoticData.twoN} ops</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">
                        {nVal > 30 ? "Exceeds age of the universe!" : "Infeasible for large n"}
                      </div>
                    </div>
                  </div>

                  {/* Visual Relative Height Bar Chart */}
                  <div className="p-4 rounded-xl bg-neutral-900 text-white font-mono text-xs">
                    <div className="text-stone-400 mb-3 text-[11px] uppercase tracking-wider font-bold">
                      Normalized Execution Bar (Relative Scale for n = {nVal})
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-emerald-400">O(1)</span>
                          <span>1</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "2%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-blue-400">O(log n)</span>
                          <span>{asymptoticData.logn}</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, (asymptoticData.logn / asymptoticData.n2) * 100 + 4)}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-amber-400">O(n)</span>
                          <span>{asymptoticData.nVal}</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${Math.min(100, (asymptoticData.nVal / asymptoticData.n2) * 100 + 8)}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-purple-400">O(n log n)</span>
                          <span>{asymptoticData.nlogn}</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${Math.min(100, (asymptoticData.nlogn / asymptoticData.n2) * 100 + 15)}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-orange-400">O(n²)</span>
                          <span>{asymptoticData.n2}</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. LOOP COMPLEXITY ANALYZER */}
            {activeWorkbench === "loop-analyzer" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-600" />
                      <span>Loop Complexity Analyzer &amp; Step Counter</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Select classic algorithmic loop structures and watch the exact mathematical arithmetic series evaluate.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Pattern Selector */}
                    <div className="md:col-span-5 space-y-2">
                      <label className="text-xs font-bold text-stone-700 block mb-1">Select Loop Structure:</label>
                      {loopPatterns.map((pat) => (
                        <button
                          key={pat.id}
                          onClick={() => setLoopPattern(pat.id)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${
                            loopPattern === pat.id
                              ? "bg-orange-50 border-orange-400 text-orange-950 font-bold shadow-xs"
                              : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="truncate">{pat.name}</span>
                            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white border border-stone-200 text-orange-700 font-bold shrink-0 ml-1">
                              {pat.complexity}
                            </span>
                          </div>
                        </button>
                      ))}

                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mt-4 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-stone-700">Set n:</span>
                          <span className="font-mono font-bold text-orange-700 px-2 py-0.5 bg-orange-100 rounded">
                            n = {loopN}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="50"
                          value={loopN}
                          onChange={(e) => setLoopN(Number(e.target.value))}
                          className="w-full accent-orange-600 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Code & Formula Display */}
                    <div className="md:col-span-7 space-y-4">
                      <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs border border-neutral-800">
                        <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3">
                          <span className="text-orange-400 font-bold">JAVA SOURCE SNIPPET</span>
                          <span>Input: n = {loopN}</span>
                        </div>
                        <pre className="overflow-x-auto leading-relaxed">
                          <code>{currentPattern.code}</code>
                        </pre>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200">
                          <div className="text-[11px] text-orange-800 font-mono font-bold uppercase">Complexity Class</div>
                          <div className="text-2xl font-mono font-black text-orange-700 mt-1">{currentPattern.complexity}</div>
                          <div className="text-xs text-stone-600 mt-1 font-mono">{currentPattern.formula}</div>
                        </div>

                        <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                          <div className="text-[11px] text-emerald-800 font-mono font-bold uppercase">Computed Iterations</div>
                          <div className="text-2xl font-mono font-black text-emerald-700 mt-1">
                            {calculatedOps.toLocaleString()}
                          </div>
                          <div className="text-xs text-stone-600 mt-1">Total inner operations</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                        <strong className="text-stone-900 font-bold block mb-1">Analytical Derivation:</strong>
                        {currentPattern.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. MASTER THEOREM SOLVER */}
            {activeWorkbench === "master-theorem" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-orange-600" />
                      <span>Master Theorem Recurrence Solver Studio</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Solve divide-and-conquer recurrences of the form:{" "}
                      <code className="text-orange-700 font-mono font-bold">T(n) = a T(n / b) + f(n)</code>
                    </p>
                  </div>

                  {/* Presets */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-stone-700 mb-2">Algorithm Presets:</div>
                    <div className="flex flex-wrap gap-2">
                      {masterTheoremPresets.map((p) => (
                        <button
                          key={p.name}
                          onClick={() => {
                            setRecurrenceA(p.a);
                            setRecurrenceB(p.b);
                            setRecurrenceF(p.f);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-orange-50 hover:border-orange-300 text-xs font-semibold text-stone-700 transition cursor-pointer"
                        >
                          {p.name} ({p.a}T(n/{p.b}) + {p.f})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Subproblems Count (a &ge; 1):
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="64"
                        value={recurrenceA}
                        onChange={(e) => setRecurrenceA(Math.max(1, Number(e.target.value)))}
                        className="w-full text-sm font-mono font-bold px-3 py-2 rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-orange-500"
                      />
                      <span className="text-[11px] text-stone-500 mt-1 block">Number of recursive branches spawned</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Division Factor (b &gt; 1):
                      </label>
                      <input
                        type="number"
                        min="2"
                        max="16"
                        value={recurrenceB}
                        onChange={(e) => setRecurrenceB(Math.max(2, Number(e.target.value)))}
                        className="w-full text-sm font-mono font-bold px-3 py-2 rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-orange-500"
                      />
                      <span className="text-[11px] text-stone-500 mt-1 block">Input reduction factor at each level</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Outside Work f(n):
                      </label>
                      <select
                        value={recurrenceF}
                        onChange={(e) => setRecurrenceF(e.target.value)}
                        className="w-full text-sm font-mono font-bold px-3 py-2 rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-orange-500"
                      >
                        <option value="1">1 (Constant Θ(1))</option>
                        <option value="n">n (Linear Θ(n))</option>
                        <option value="n^2">n^2 (Quadratic Θ(n²))</option>
                        <option value="n^3">n^3 (Cubic Θ(n³))</option>
                      </select>
                      <span className="text-[11px] text-stone-500 mt-1 block">Non-recursive merge/split work</span>
                    </div>
                  </div>

                  {/* Derivation Result Card */}
                  {masterTheoremResult.valid ? (
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white shadow-lg space-y-4 font-mono">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-700 pb-3">
                        <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                          {masterTheoremResult.appliedCase}
                        </span>
                        <span className="text-xs text-stone-400">
                          Critical Exponent: log_{recurrenceB}({recurrenceA}) = {masterTheoremResult.logbaRounded}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-xs text-stone-400">Tight Bound:</div>
                        <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">
                          T(n) = {masterTheoremResult.finalBound}
                        </div>
                      </div>

                      <p className="text-xs text-stone-300 font-sans leading-relaxed border-t border-stone-700/80 pt-3">
                        <strong className="text-white">Mathematical Explanation:</strong> {masterTheoremResult.rationale}
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-semibold">
                      {masterTheoremResult.error}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. AMORTIZED ANALYSIS STUDIO */}
            {activeWorkbench === "amortized-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <Database className="w-5 h-5 text-orange-600" />
                        <span>Dynamic Array Resizing &amp; Amortized O(1) Proof</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Simulate Java ArrayList geometric doubling. Even with occasional O(n) array copies, average cost per append is O(1).
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => appendToDynamicArray(1)}
                        className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition cursor-pointer shadow-xs"
                      >
                        + Append 1
                      </button>
                      <button
                        onClick={() => appendToDynamicArray(8)}
                        className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition cursor-pointer shadow-xs"
                      >
                        + Append 8
                      </button>
                      <button
                        onClick={resetDynamicArray}
                        className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition cursor-pointer"
                        title="Reset Array"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Summary Metric Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono">Current Size (n)</div>
                      <div className="text-xl font-mono font-black text-stone-900 mt-0.5">{arrayElements.length}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono">Allocated Capacity (C)</div>
                      <div className="text-xl font-mono font-black text-orange-600 mt-0.5">{arrayCapacity}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono">Total Elements Copied</div>
                      <div className="text-xl font-mono font-black text-purple-600 mt-0.5">{totalCopies}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono">Amortized Avg Cost</div>
                      <div className="text-xl font-mono font-black text-emerald-600 mt-0.5">
                        {arrayElements.length > 0 ? (totalCost / arrayElements.length).toFixed(2) : "1.00"}
                      </div>
                    </div>
                  </div>

                  {/* Visual Buffer Slot Representation */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-2">
                      <span>Memory Buffer Slot Allocation ({arrayElements.length} / {arrayCapacity} slots filled):</span>
                      <span className="font-mono text-stone-400 font-normal">Geometric Doubling Factor = 2x</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 p-3 rounded-xl bg-stone-100 border border-stone-200 min-h-[50px] items-center">
                      {Array.from({ length: arrayCapacity }).map((_, idx) => {
                        const hasElem = idx < arrayElements.length;
                        return (
                          <div
                            key={idx}
                            className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-[11px] font-bold transition-all ${
                              hasElem
                                ? "bg-orange-600 text-white shadow-xs"
                                : "bg-white border border-dashed border-stone-300 text-stone-300"
                            }`}
                          >
                            {hasElem ? arrayElements[idx] : ""}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step Execution Log */}
                  <div className="rounded-xl border border-stone-200 overflow-hidden text-xs">
                    <div className="bg-stone-50 px-4 py-2.5 border-b border-stone-200 font-bold text-stone-800 flex justify-between items-center">
                      <span>Recent Appends Execution Log</span>
                      <span className="text-[11px] text-stone-500 font-normal">Last {amortizedLog.length} steps</span>
                    </div>
                    <div className="max-h-48 overflow-y-auto divide-y divide-stone-100 [scrollbar-width:thin]">
                      {amortizedLog.length === 0 ? (
                        <div className="p-4 text-center text-stone-400 italic">No appends performed yet. Click '+ Append 1' to start!</div>
                      ) : (
                        amortizedLog.map((log) => (
                          <div key={log.id} className="p-3 flex items-center justify-between hover:bg-stone-50">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-stone-800">Append #{log.val}</span>
                              {log.resized && (
                                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold font-mono">
                                  Resized: {log.oldCap} &rarr; {log.newCap}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 font-mono text-xs">
                              <span className={log.cost > 1 ? "text-purple-700 font-bold" : "text-stone-600"}>
                                Work Cost: {log.cost}
                              </span>
                              <span className="text-emerald-700 font-bold">
                                Running Avg: {log.avgCost} / op
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. TIME-SPACE TRADE-OFF SANDBOX */}
            {activeWorkbench === "tradeoff-sandbox" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <Split className="w-5 h-5 text-orange-600" />
                      <span>Time-Space Trade-Off: Duplicate Detection Benchmark</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Compare Approach A (Nested Loops: O(n²) time, O(1) space) versus Approach B (HashSet: O(n) time, O(n) space).
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="flex justify-between text-xs font-bold text-stone-700">
                        <span>Array Size (n):</span>
                        <span className="font-mono text-orange-700">{tradeoffN} elements</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="1000"
                        step="20"
                        value={tradeoffN}
                        onChange={(e) => setTradeoffN(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-xs font-bold text-stone-700 block mb-1">Duplicate Placement:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "none", label: "No Duplicate (Worst)" },
                          { id: "late", label: "End of Array" },
                          { id: "middle", label: "Middle of Array" },
                          { id: "early", label: "Beginning (Best)" },
                        ].map((m) => (
                          <button
                            key={m.id}
                            onClick={() => setDuplicateMode(m.id)}
                            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                              duplicateMode === m.id
                                ? "bg-stone-900 text-white border-stone-900 font-bold"
                                : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comparative Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Approach A: Nested Loops */}
                    <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-stone-200 text-stone-800">
                          APPROACH A: NESTED LOOPS
                        </span>
                        <span className="text-xs font-mono font-bold text-red-600">O(n²) Time</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-stone-200">
                          <span className="text-stone-500">Comparisons Required:</span>
                          <span className="font-mono font-black text-stone-900">{tradeoffStats.slow.comparisons}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-stone-200">
                          <span className="text-stone-500">Auxiliary Memory Space:</span>
                          <span className="font-mono font-black text-emerald-600">{tradeoffStats.slow.auxSpace}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-stone-500">Memory Allocation Cost:</span>
                          <span className="font-mono text-emerald-700 font-bold">Zero Heap Overhead</span>
                        </div>
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed bg-white p-3 rounded-xl border border-stone-200">
                        {tradeoffStats.slow.desc} Ideal when RAM is strictly constrained, but unscalable on large arrays.
                      </p>
                    </div>

                    {/* Approach B: HashSet */}
                    <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50/40 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-orange-100 text-orange-800">
                          APPROACH B: HASHSET
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-700">O(n) Time</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-orange-200/60">
                          <span className="text-stone-500">Operations Performed:</span>
                          <span className="font-mono font-black text-emerald-700">{tradeoffStats.fast.operations}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-orange-200/60">
                          <span className="text-stone-500">Auxiliary Memory Space:</span>
                          <span className="font-mono font-black text-orange-700">{tradeoffStats.fast.auxSpace}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-stone-500">Speedup Factor:</span>
                          <span className="font-mono text-orange-700 font-bold">
                            {tradeoffStats.slow.comparisons > 0 && tradeoffStats.fast.operations > 0
                              ? `~${Math.round(
                                  parseInt(tradeoffStats.slow.comparisons.replace(/,/g, "")) /
                                    parseInt(tradeoffStats.fast.operations.replace(/,/g, ""))
                                )}x Faster`
                              : "N/A"}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed bg-white p-3 rounded-xl border border-orange-200/80">
                        {tradeoffStats.fast.desc} Standard industry trade-off: spending modest heap memory avoids quadratic CPU churn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. BIG-O BATTLE ARENA */}
            {activeWorkbench === "sorting-arena" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <ArrowDownUp className="w-5 h-5 text-orange-600" />
                      <span>Sorting &amp; Searching Big-O Battle Arena</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Direct theoretical comparison across best, average, and worst cases with auxiliary memory bounds.
                    </p>
                  </div>

                  {/* Search Showdown Card */}
                  <div className="p-5 rounded-2xl bg-stone-900 text-white mb-6 space-y-4 shadow-sm font-mono">
                    <div className="flex items-center justify-between text-xs text-orange-400 font-bold">
                      <span>SEARCH SHOWDOWN: n = 1,000,000 (1 Million Sorted Elements)</span>
                      <span className="text-stone-400">Worst Case Comparison</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 space-y-2">
                        <div className="text-xs text-stone-400">Linear Search O(n):</div>
                        <div className="text-2xl font-black text-red-400">1,000,000 checks</div>
                        <div className="text-[11px] text-stone-400 font-sans">
                          Must inspect every element sequentially until the match or end is reached.
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-800/80 border border-orange-500/50 space-y-2">
                        <div className="text-xs text-orange-400">Binary Search O(log n):</div>
                        <div className="text-2xl font-black text-emerald-400">At Most {binarySteps} checks</div>
                        <div className="text-[11px] text-stone-400 font-sans">
                          Halves remaining interval each step. 2²⁰ &gt; 1,000,000, so 20 steps guarantee resolution!
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sorting Algorithms Comparison Table */}
                  <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                        <tr>
                          <th className="px-4 py-3">Algorithm</th>
                          <th className="px-4 py-3">Best Case</th>
                          <th className="px-4 py-3">Average Case</th>
                          <th className="px-4 py-3">Worst Case</th>
                          <th className="px-4 py-3">Aux Space</th>
                          <th className="px-4 py-3">Stability</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e7e3da] font-mono">
                        {sortingAlgorithms.map((alg, idx) => (
                          <tr key={alg.name} className={idx % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"}>
                            <td className="px-4 py-2.5 font-bold text-stone-900 font-sans">{alg.name}</td>
                            <td className="px-4 py-2.5 text-emerald-700 font-bold">{alg.best}</td>
                            <td className="px-4 py-2.5 text-stone-700">{alg.avg}</td>
                            <td className={`px-4 py-2.5 font-bold ${alg.worst.includes("²") ? "text-orange-700" : "text-stone-800"}`}>
                              {alg.worst}
                            </td>
                            <td className="px-4 py-2.5 text-stone-600">{alg.space}</td>
                            <td className="px-4 py-2.5 text-stone-600 font-sans">{alg.stable}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 7. LOOP INVARIANT PROOF STUDIO */}
            {activeWorkbench === "invariant-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                      <span>Loop Invariant &amp; Correctness Proof Studio</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Step through the 3 essential phases of a formal algorithm correctness proof for <code>findMaximum()</code>.
                    </p>
                  </div>

                  {/* Stepper Buttons */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 [scrollbar-width:none]">
                    {invariantProofSteps.map((step, idx) => (
                      <button
                        key={step.title}
                        onClick={() => setInvariantStep(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                          invariantStep === idx
                            ? "bg-orange-600 text-white shadow-xs"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {step.badge}
                      </button>
                    ))}
                  </div>

                  {/* Active Step Card */}
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <h4 className="text-base font-bold text-stone-900">{invariantProofSteps[invariantStep].title}</h4>
                      <span className="text-[11px] font-mono text-orange-700 font-bold px-2 py-0.5 rounded bg-orange-100">
                        Step {invariantStep + 1} of {invariantProofSteps.length}
                      </span>
                    </div>

                    <p className="text-sm text-stone-700 leading-relaxed">
                      {invariantProofSteps[invariantStep].content}
                    </p>

                    <div className="p-3 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                      <pre>
                        <code>{invariantProofSteps[invariantStep].code}</code>
                      </pre>
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        disabled={invariantStep === 0}
                        onClick={() => setInvariantStep((p) => p - 1)}
                        className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold disabled:opacity-40"
                      >
                        &larr; Previous Step
                      </button>
                      <button
                        disabled={invariantStep === invariantProofSteps.length - 1}
                        onClick={() => setInvariantStep((p) => p + 1)}
                        className="px-4 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold disabled:opacity-40 shadow-xs"
                      >
                        Next Step &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. KNOWLEDGE ASSESSMENT QUIZ */}
            {activeWorkbench === "quiz-section" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-orange-600" />
                        <span>Module 7 Knowledge Assessment Quiz</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        10 Comprehensive MCQs testing algorithm analysis, asymptotic bounds, and recurrences.
                      </p>
                    </div>

                    {submittedQuiz && (
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-stone-700">Your Score:</span>
                        <span
                          className={`text-sm font-mono font-black px-3 py-1 rounded-xl border ${
                            quizScore >= 8
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : "bg-orange-50 text-orange-700 border-orange-300"
                          }`}
                        >
                          {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {quizQuestions.map((q, qIndex) => {
                      const userChoice = selectedAnswers[q.id];
                      const isCorrect = userChoice === q.correct;
                      return (
                        <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
                          <h4 className="text-sm font-bold text-stone-900">{q.question}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, oIndex) => {
                              const isSelected = userChoice === oIndex;
                              let btnClass = "bg-white border-stone-200 text-stone-700 hover:border-orange-300";
                              if (submittedQuiz) {
                                if (oIndex === q.correct) {
                                  btnClass = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                                } else if (isSelected && !isCorrect) {
                                  btnClass = "bg-red-50 border-red-400 text-red-900";
                                } else {
                                  btnClass = "bg-white border-stone-200 text-stone-400 opacity-60";
                                }
                              } else if (isSelected) {
                                btnClass = "bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-2xs";
                              }

                              return (
                                <button
                                  key={oIndex}
                                  disabled={submittedQuiz}
                                  onClick={() => handleSelectOption(q.id, oIndex)}
                                  className={`text-left p-2.5 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between gap-2 ${btnClass}`}
                                >
                                  <span>{opt}</span>
                                  {submittedQuiz && oIndex === q.correct && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {submittedQuiz && (
                            <div className="text-xs p-2.5 rounded-lg bg-white border border-stone-200 text-stone-600 leading-relaxed">
                              <strong className="text-stone-900">Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#e7e3da] flex justify-end gap-3">
                    {submittedQuiz ? (
                      <button
                        onClick={() => {
                          setSubmittedQuiz(false);
                          setSelectedAnswers({});
                        }}
                        className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 transition"
                      >
                        Reset &amp; Retake Quiz
                      </button>
                    ) : (
                      <button
                        disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                        onClick={() => setSubmittedQuiz(true)}
                        className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Submit Answers ({Object.keys(selectedAnswers).length}/{quizQuestions.length})
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 9. LABS & ASSIGNMENTS TRACKER */}
            {activeWorkbench === "labs-tracker" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <CheckSquare className="w-5 h-5 text-orange-600" />
                        <span>Interactive Laboratories &amp; Assignments Tracker</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Track your completion of all 4 practical laboratories and 4 comprehensive engineering assignments.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-stone-700">Completed:</span>
                      <span className="text-xs font-mono font-black px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {Object.values(completedLabs).filter(Boolean).length} / {labItems.length}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {labItems.map((lab) => {
                      const isDone = !!completedLabs[lab.id];
                      return (
                        <div
                          key={lab.id}
                          onClick={() => toggleLab(lab.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isDone
                              ? "bg-emerald-50/50 border-emerald-300"
                              : "bg-white border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              type="button"
                              className="mt-0.5 text-stone-400 hover:text-stone-600 focus:outline-none"
                            >
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400" />
                              )}
                            </button>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono uppercase ${
                                    lab.type === "Lab"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-purple-100 text-purple-800"
                                  }`}
                                >
                                  {lab.type}
                                </span>
                                <h4
                                  className={`text-xs font-bold ${
                                    isDone ? "text-stone-500 line-through" : "text-stone-900"
                                  }`}
                                >
                                  {lab.title}
                                </h4>
                              </div>
                              <p className="text-xs text-stone-600 leading-relaxed">{lab.goal}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
