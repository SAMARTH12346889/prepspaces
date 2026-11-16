import React, { useState, useMemo, useEffect, useRef } from "react";
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
  Pause,
  RotateCcw,
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
  Ship,
  Scale,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaSearchingSortingSections from "./JavaSearchingSortingSections";

export default function JavaSearchingSorting() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java");

  // Tab mode: 'curriculum' (Text & Chapters) vs 'workbenches' (Interactive Labs)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("sorting-visualizer");

  // -------------------------------------------------------------
  // WORKBENCH 1: Interactive Sorting Algorithm Visualizer
  // -------------------------------------------------------------
  const [sortAlgo, setSortAlgo] = useState("bubble");
  const [arraySize, setArraySize] = useState(12);
  const [animSpeed, setAnimSpeed] = useState(120);
  const [bars, setBars] = useState([]);
  const [activeIndices, setActiveIndices] = useState({ comparing: [], swapping: [], sorted: [] });
  const [sortStats, setSortStats] = useState({ comparisons: 0, swaps: 0, phase: "Idle" });
  const [isSorting, setIsSorting] = useState(false);
  const isSortingRef = useRef(false);

  // Generate random or custom arrays
  const generateArray = (type = "random") => {
    setIsSorting(false);
    isSortingRef.current = false;
    let newBars = [];
    if (type === "random") {
      newBars = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 85) + 15);
    } else if (type === "nearly-sorted") {
      newBars = Array.from({ length: arraySize }, (_, i) => (i + 1) * 6 + 10);
      // Swap a couple of adjacent elements
      if (newBars.length > 4) {
        [newBars[2], newBars[3]] = [newBars[3], newBars[2]];
        [newBars[newBars.length - 2], newBars[newBars.length - 3]] = [
          newBars[newBars.length - 3],
          newBars[newBars.length - 2],
        ];
      }
    } else if (type === "reverse") {
      newBars = Array.from({ length: arraySize }, (_, i) => (arraySize - i) * 6 + 10);
    } else if (type === "duplicates") {
      const vals = [20, 35, 50, 65, 80];
      newBars = Array.from({ length: arraySize }, () => vals[Math.floor(Math.random() * vals.length)]);
    }
    setBars(newBars);
    setActiveIndices({ comparing: [], swapping: [], sorted: [] });
    setSortStats({ comparisons: 0, swaps: 0, phase: "Ready" });
  };

  useEffect(() => {
    generateArray("random");
  }, [arraySize]);

  // Sleep utility for animation
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Run Sorting Animation
  const runSorting = async () => {
    if (isSorting) return;
    setIsSorting(true);
    isSortingRef.current = true;
    let arr = [...bars];
    let compCount = 0;
    let swapCount = 0;

    if (sortAlgo === "bubble") {
      setSortStats({ comparisons: 0, swaps: 0, phase: "Bubble Sorting..." });
      const n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
          if (!isSortingRef.current) return;
          compCount++;
          setActiveIndices({ comparing: [j, j + 1], swapping: [], sorted: [] });
          setSortStats((p) => ({ ...p, comparisons: compCount }));
          await sleep(animSpeed);

          if (arr[j] > arr[j + 1]) {
            swapCount++;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
            setBars([...arr]);
            setActiveIndices({ comparing: [], swapping: [j, j + 1], sorted: [] });
            setSortStats((p) => ({ ...p, swaps: swapCount }));
            await sleep(animSpeed);
          }
        }
        if (!swapped) break;
      }
    } else if (sortAlgo === "selection") {
      setSortStats({ comparisons: 0, swaps: 0, phase: "Selection Sorting..." });
      const n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
          if (!isSortingRef.current) return;
          compCount++;
          setActiveIndices({ comparing: [minIdx, j], swapping: [], sorted: [] });
          setSortStats((p) => ({ ...p, comparisons: compCount }));
          await sleep(animSpeed);

          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        if (minIdx !== i) {
          swapCount++;
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
          setBars([...arr]);
          setActiveIndices({ comparing: [], swapping: [i, minIdx], sorted: [] });
          setSortStats((p) => ({ ...p, swaps: swapCount }));
          await sleep(animSpeed);
        }
      }
    } else if (sortAlgo === "insertion") {
      setSortStats({ comparisons: 0, swaps: 0, phase: "Insertion Sorting..." });
      const n = arr.length;
      for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0) {
          if (!isSortingRef.current) return;
          compCount++;
          setActiveIndices({ comparing: [j, j + 1], swapping: [], sorted: [] });
          setSortStats((p) => ({ ...p, comparisons: compCount }));
          await sleep(animSpeed);

          if (arr[j] > key) {
            swapCount++;
            arr[j + 1] = arr[j];
            setBars([...arr]);
            setActiveIndices({ comparing: [], swapping: [j, j + 1], sorted: [] });
            setSortStats((p) => ({ ...p, swaps: swapCount }));
            j--;
            await sleep(animSpeed);
          } else {
            break;
          }
        }
        arr[j + 1] = key;
        setBars([...arr]);
      }
    }

    setIsSorting(false);
    isSortingRef.current = false;
    setActiveIndices({ comparing: [], swapping: [], sorted: Array.from({ length: arr.length }, (_, i) => i) });
    setSortStats((p) => ({ ...p, phase: "Sorted!" }));
  };

  const stopSorting = () => {
    setIsSorting(false);
    isSortingRef.current = false;
    setSortStats((p) => ({ ...p, phase: "Paused" }));
  };

  // -------------------------------------------------------------
  // WORKBENCH 2: Binary Search & Bounds Explorer
  // -------------------------------------------------------------
  const [bsArray, setBsArray] = useState([10, 20, 20, 20, 40, 50, 70, 80, 90, 100]);
  const [bsTarget, setBsTarget] = useState(20);
  const [bsMode, setBsMode] = useState("lower-bound"); // 'exact', 'lower-bound', 'upper-bound', 'count'
  const [bsPointers, setBsPointers] = useState({ low: 0, high: 9, mid: 4, eliminated: [] });
  const [bsHistory, setBsHistory] = useState([]);

  const computedBounds = useMemo(() => {
    // Lower bound
    let low = 0;
    let high = bsArray.length;
    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (bsArray[mid] < bsTarget) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    const lower = low;

    // Upper bound
    low = 0;
    high = bsArray.length;
    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (bsArray[mid] <= bsTarget) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    const upper = low;

    // Exact search
    let exactIdx = -1;
    let l = 0;
    let r = bsArray.length - 1;
    while (l <= r) {
      const m = Math.floor(l + (r - l) / 2);
      if (bsArray[m] === bsTarget) {
        exactIdx = m;
        break;
      } else if (bsArray[m] < bsTarget) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    return {
      lower,
      upper,
      count: upper - lower,
      exactIdx,
    };
  }, [bsArray, bsTarget]);

  // -------------------------------------------------------------
  // WORKBENCH 3: Search in Rotated Sorted Array
  // -------------------------------------------------------------
  const [rotationPivot, setRotationPivot] = useState(3);
  const [rotatedHasDuplicates, setRotatedHasDuplicates] = useState(false);
  const [rotatedTarget, setRotatedTarget] = useState(0);

  const rotatedArray = useMemo(() => {
    let base = [0, 1, 2, 4, 5, 6, 7];
    if (rotatedHasDuplicates) {
      base = [2, 2, 2, 3, 4, 2, 2];
    }
    const pivot = Math.max(0, Math.min(base.length - 1, rotationPivot));
    return [...base.slice(pivot), ...base.slice(0, pivot)];
  }, [rotationPivot, rotatedHasDuplicates]);

  const rotatedSearchResult = useMemo(() => {
    const arr = rotatedArray;
    const target = rotatedTarget;
    let low = 0;
    let high = arr.length - 1;
    let steps = [];

    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);
      steps.push({ low, mid, high, midVal: arr[mid] });

      if (arr[mid] === target) {
        return { foundIndex: mid, steps, success: true };
      }

      // Handle duplicate ambiguity
      if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
        low++;
        high--;
        continue;
      }

      // Left half sorted
      if (arr[low] <= arr[mid]) {
        if (arr[low] <= target && target < arr[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else {
        // Right half sorted
        if (arr[mid] < target && target <= arr[high]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }

    return { foundIndex: -1, steps, success: false };
  }, [rotatedArray, rotatedTarget]);

  // -------------------------------------------------------------
  // WORKBENCH 4: Binary Search on Answer (Ship Packages Within D Days)
  // -------------------------------------------------------------
  const [shipWeights, setShipWeights] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [shipDaysLimit, setShipDaysLimit] = useState(5);
  const [candidateCap, setCandidateCap] = useState(15);

  const shipCapacityBounds = useMemo(() => {
    const minCap = Math.max(...shipWeights);
    const maxCap = shipWeights.reduce((a, b) => a + b, 0);
    return { minCap, maxCap };
  }, [shipWeights]);

  const shipSimulation = useMemo(() => {
    let daysNeeded = 1;
    let currentLoad = 0;
    let dayBags = [[]];

    for (const w of shipWeights) {
      if (currentLoad + w > candidateCap) {
        daysNeeded++;
        currentLoad = w;
        dayBags.push([w]);
      } else {
        currentLoad += w;
        dayBags[dayBags.length - 1].push(w);
      }
    }

    const isValid = daysNeeded <= shipDaysLimit;
    return { daysNeeded, isValid, dayBags };
  }, [shipWeights, candidateCap, shipDaysLimit]);

  // -------------------------------------------------------------
  // WORKBENCH 5: Non-Comparison Sorting Studio (Counting & Radix)
  // -------------------------------------------------------------
  const [nonCompAlgo, setNonCompAlgo] = useState("counting");
  const countingSample = [-2, 4, 2, 2, 8, 3, 3, 1];

  const countingDerivation = useMemo(() => {
    const min = Math.min(...countingSample);
    const max = Math.max(...countingSample);
    const range = max - min + 1;
    const count = new Array(range).fill(0);
    countingSample.forEach((v) => count[v - min]++);

    const cumulative = [...count];
    for (let i = 1; i < cumulative.length; i++) {
      cumulative[i] += cumulative[i - 1];
    }

    const output = new Array(countingSample.length).fill(0);
    const countCopy = [...cumulative];
    for (let i = countingSample.length - 1; i >= 0; i--) {
      const val = countingSample[i];
      const idx = val - min;
      countCopy[idx]--;
      output[countCopy[idx]] = val;
    }

    return { min, max, range, count, cumulative, output };
  }, []);

  // -------------------------------------------------------------
  // WORKBENCH 6: Stability & Multi-Key Sort Sandbox
  // -------------------------------------------------------------
  const initialStudents = [
    { id: 1, name: "David", marks: 80, originalIdx: 1 },
    { id: 2, name: "Alice", marks: 85, originalIdx: 2 },
    { id: 3, name: "Charlie", marks: 85, originalIdx: 3 },
    { id: 4, name: "Bob", marks: 90, originalIdx: 4 },
  ];
  const [isStableMode, setIsStableMode] = useState(true);

  const sortedStudents = useMemo(() => {
    const copy = [...initialStudents];
    if (isStableMode) {
      // Stable sort: preserves initial indices on tie
      return copy.sort((a, b) => a.marks - b.marks);
    } else {
      // Artificially simulate unstable flip on equal keys
      return copy.sort((a, b) => {
        if (a.marks === b.marks) return b.originalIdx - a.originalIdx;
        return a.marks - b.marks;
      });
    }
  }, [isStableMode]);

  // -------------------------------------------------------------
  // WORKBENCH 7: Java Sorting APIs (Arrays.sort vs Collections.sort)
  // -------------------------------------------------------------
  const [apiType, setApiType] = useState("primitive-arrays");
  const [customSortOrder, setCustomSortOrder] = useState("asc");

  // -------------------------------------------------------------
  // WORKBENCH 8: 15-Question Knowledge Assessment Quiz
  // -------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. Which algorithm works correctly without requiring sorted input?",
      options: ["Binary search", "Lower bound", "Linear search", "Upper bound"],
      correct: 2,
      explanation: "Linear search checks elements one by one sequentially, requiring zero preconditions on ordering.",
    },
    {
      id: "q2",
      question: "2. What is the worst-case time complexity of linear search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
      explanation: "In the worst case (target at the last position or absent), linear search examines all n elements.",
    },
    {
      id: "q3",
      question: "3. What is the time complexity of binary search on a sorted array?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(2ⁿ)"],
      correct: 1,
      explanation: "Binary search cuts the remaining search interval in half on every step, running in O(log n) time.",
    },
    {
      id: "q4",
      question: "4. What is required for ordinary binary search?",
      options: ["Unsorted input", "Sorted input with consistent ordering", "A hash table", "A linked list"],
      correct: 1,
      explanation: "Sorted data is required so the algorithm can safely discard the half that cannot contain the target.",
    },
    {
      id: "q5",
      question: "5. Which search algorithm finds the first element greater than or equal to a target?",
      options: ["Upper bound", "Linear search", "Lower bound", "Quick search"],
      correct: 2,
      explanation: "Lower bound returns the smallest index i where array[i] >= target.",
    },
    {
      id: "q6",
      question: "6. Which sorting algorithm uses divide and conquer?",
      options: ["Bubble sort", "Selection sort", "Merge sort", "Linear search"],
      correct: 2,
      explanation: "Merge sort recursively splits the collection in half and merges the sorted subarrays.",
    },
    {
      id: "q7",
      question: "7. Which sorting algorithm is stable in its standard implementation?",
      options: ["Heap sort", "Selection sort", "Insertion sort", "Standard quicksort"],
      correct: 2,
      explanation: "Insertion sort only shifts elements strictly greater than the key, preserving the relative order of equals.",
    },
    {
      id: "q8",
      question: "8. Which sorting algorithm typically requires O(n) additional array memory?",
      options: ["Heap sort", "Merge sort", "Selection sort", "Bubble sort"],
      correct: 1,
      explanation: "Standard array merge sort allocates a temporary buffer of size n for the merge procedure.",
    },
    {
      id: "q9",
      question: "9. Which sorting algorithm repeatedly builds a sorted prefix by inserting the next element?",
      options: ["Insertion sort", "Heap sort", "Counting sort", "Quick sort"],
      correct: 0,
      explanation: "Insertion sort takes the next element and shifts larger prefix elements right to make room for insertion.",
    },
    {
      id: "q10",
      question: "10. Which sorting algorithm uses a binary heap?",
      options: ["Merge sort", "Heap sort", "Bubble sort", "Bucket sort"],
      correct: 1,
      explanation: "Heap sort organizes elements into a max heap, then repeatedly extracts the root into the sorted suffix.",
    },
    {
      id: "q11",
      question: "11. What is the worst-case time complexity of conventional quicksort?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      correct: 3,
      explanation: "If pivots are persistently unbalanced (e.g. sorted array with last element pivot), quicksort degrades to O(n²).",
    },
    {
      id: "q12",
      question: "12. Which algorithm is particularly useful when integers fall within a small range k?",
      options: ["Counting sort", "Quick sort", "Heap sort", "Merge sort"],
      correct: 0,
      explanation: "Counting sort tallies frequencies in an array of size k, running in O(n + k) linear time.",
    },
    {
      id: "q13",
      question: "13. Which technique sorts values digit by digit from LSD to MSD?",
      options: ["Bucket sort", "Radix sort", "Heap sort", "Selection sort"],
      correct: 1,
      explanation: "LSD Radix sort performs multiple stable sorting passes on individual digit or byte positions.",
    },
    {
      id: "q14",
      question: "14. Which Java standard library class provides Arrays.sort()?",
      options: ["java.util.Collections", "java.util.Arrays", "java.lang.Array", "java.util.Sort"],
      correct: 1,
      explanation: "java.util.Arrays provides static sorting methods for primitive and object arrays.",
    },
    {
      id: "q15",
      question: "15. Which Java utility method sorts a List collection?",
      options: ["Arrays.sort()", "Collections.sort()", "List.search()", "Scanner.sort()"],
      correct: 1,
      explanation: "Collections.sort() sorts List implementations in place using natural ordering or a Comparator.",
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
      const saved = localStorage.getItem("prepspaces_java_m8_labs");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleLab = (id) => {
    setCompletedLabs((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_java_m8_labs", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const labItems = [
    { id: "lab-1", type: "Lab", title: "Lab 1: Searching Algorithm Comparison", goal: "Benchmark linear search vs binary search on 100,000 integers and record operation counts across different target positions." },
    { id: "lab-2", type: "Lab", title: "Lab 2: Lower Bound and Upper Bound", goal: "Implement lower bound, upper bound, and occurrence counting on arrays with duplicate elements." },
    { id: "lab-3", type: "Lab", title: "Lab 3: Compare Simple Sorting Algorithms", goal: "Benchmark bubble sort, selection sort, and insertion sort on sorted, reverse, random, and duplicate datasets." },
    { id: "lab-4", type: "Lab", title: "Lab 4: Compare Efficient Sorting Algorithms", goal: "Implement and compare merge sort, quicksort, and heap sort across stability, memory, and pivot degradation." },
    { id: "lab-5", type: "Lab", title: "Lab 5: Non-Comparison Sorting", goal: "Implement counting sort with negative offsets, LSD radix sort on 32-bit ints, and floating-point bucket sort." },
    { id: "assign-1", type: "Assignment", title: "Assignment 1: Search in Rotated Sorted Array", goal: "Implement modified binary search to locate targets in rotated arrays in O(log n) time without re-sorting." },
    { id: "assign-2", type: "Assignment", title: "Assignment 2: Find First and Last Position", goal: "Use lower and upper bounds to identify duplicate boundaries without linear scanning." },
    { id: "assign-3", type: "Assignment", title: "Assignment 3: Sort Student Records", goal: "Design multi-attribute comparator sorting with records, demonstrating stability under equal marks." },
    { id: "assign-4", type: "Assignment", title: "Assignment 4: Implement Quick Sort", goal: "Implement Lomuto partition, median-of-three pivot selection, and recursion depth optimization." },
    { id: "assign-5", type: "Assignment", title: "Assignment 5: Implement Merge Sort", goal: "Implement recursive divide-and-conquer merge sort and prove stability on tagged record objects." },
    { id: "assign-6", type: "Assignment", title: "Assignment 6: Binary Search on Answer", goal: "Formulate a monotonic predicate and apply parametric binary search to solve the worker workload assignment problem." },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white pb-24 px-4 py-6 sm:px-8 sm:py-10 md:px-12">
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
              <span>Java Programming Master Course · Module 8</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight">
              Searching &amp; Sorting Algorithms
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
              Master linear search, binary search, bounds, rotated arrays, binary search on answer, elementary sorting (bubble, selection, insertion), efficient divide-and-conquer (merge, quick, heap), non-comparison sorting (counting, radix, bucket), stability, and Java standard library APIs.
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
          currentModuleId="searching-sorting"
          prevRoute="/learning/java/complexity-analysis"
          nextRoute="/learning/java/linked-lists"
        />

        {activeTab === "curriculum" ? (
          <div className="mt-8">
            <JavaSearchingSortingSections />
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {/* WORKBENCH SUB-TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e7e3da] text-xs font-semibold [scrollbar-width:none]">
              {[
                { id: "sorting-visualizer", label: "1. Sorting Visualizer", icon: ArrowDownUp },
                { id: "binary-explorer", label: "2. Binary Search & Bounds", icon: Binary },
                { id: "rotated-search", label: "3. Rotated Array Search", icon: RotateCcw },
                { id: "parametric-search", label: "4. Binary Search on Answer", icon: Ship },
                { id: "non-comparison", label: "5. Counting & Radix Sort", icon: HashIcon },
                { id: "stability-sandbox", label: "6. Stability & Multi-Key", icon: Scale },
                { id: "quiz-section", label: "7. Knowledge Assessment (Quiz)", icon: HelpCircle },
                { id: "labs-tracker", label: "8. Labs & Assignments", icon: CheckSquare },
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

            {/* 1. SORTING VISUALIZER */}
            {activeWorkbench === "sorting-visualizer" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <ArrowDownUp className="w-5 h-5 text-orange-600" />
                        <span>Interactive Sorting Algorithm Visualizer</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Watch element-by-element comparisons, swaps, shifts, and partitioning in real time.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <select
                        value={sortAlgo}
                        onChange={(e) => {
                          stopSorting();
                          setSortAlgo(e.target.value);
                        }}
                        className="text-xs font-bold px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 focus:outline-none focus:border-orange-500"
                      >
                        <option value="bubble">Bubble Sort (O(n²))</option>
                        <option value="selection">Selection Sort (O(n²))</option>
                        <option value="insertion">Insertion Sort (O(n²))</option>
                      </select>

                      {isSorting ? (
                        <button
                          onClick={stopSorting}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-xs transition"
                        >
                          <Pause className="w-3.5 h-3.5" />
                          <span>Pause</span>
                        </button>
                      ) : (
                        <button
                          onClick={runSorting}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-xs transition"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Play Sort</span>
                        </button>
                      )}

                      <button
                        onClick={() => generateArray("random")}
                        className="p-2 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition"
                        title="Generate Random"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Array Presets & Sliders */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-700">Presets:</span>
                      <button
                        onClick={() => generateArray("random")}
                        className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-semibold"
                      >
                        Random
                      </button>
                      <button
                        onClick={() => generateArray("nearly-sorted")}
                        className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-semibold"
                      >
                        Nearly Sorted
                      </button>
                      <button
                        onClick={() => generateArray("reverse")}
                        className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-semibold"
                      >
                        Reverse Sorted
                      </button>
                      <button
                        onClick={() => generateArray("duplicates")}
                        className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-semibold"
                      >
                        Duplicates
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-stone-500">Speed:</span>
                        <input
                          type="range"
                          min="20"
                          max="300"
                          value={animSpeed}
                          onChange={(e) => setAnimSpeed(Number(e.target.value))}
                          className="w-20 accent-orange-600 cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-stone-500">Size:</span>
                        <input
                          type="range"
                          min="6"
                          max="20"
                          value={arraySize}
                          onChange={(e) => setArraySize(Number(e.target.value))}
                          className="w-16 accent-orange-600 cursor-pointer"
                        />
                        <span className="font-mono font-bold text-stone-700">{arraySize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Bar Container */}
                  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 mb-6 flex items-end justify-center gap-2 min-h-[260px]">
                    {bars.map((val, idx) => {
                      const isComparing = activeIndices.comparing.includes(idx);
                      const isSwapping = activeIndices.swapping.includes(idx);
                      const isSorted = activeIndices.sorted.includes(idx);

                      let barColor = "bg-orange-500";
                      if (isSwapping) barColor = "bg-red-500";
                      else if (isComparing) barColor = "bg-amber-400";
                      else if (isSorted) barColor = "bg-emerald-500";

                      return (
                        <div key={idx} className="flex flex-col items-center flex-1 max-w-[36px]">
                          <span className="text-[10px] font-mono text-stone-400 mb-1">{val}</span>
                          <div
                            className={`w-full rounded-t-md transition-all duration-100 ${barColor}`}
                            style={{ height: `${val * 2}px` }}
                          />
                          <span className="text-[9px] font-mono text-stone-500 mt-1">{idx}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Live Stats HUD */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono">Comparisons</div>
                      <div className="text-xl font-mono font-black text-amber-600 mt-0.5">
                        {sortStats.comparisons}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono">Swaps / Shifts</div>
                      <div className="text-xl font-mono font-black text-red-600 mt-0.5">{sortStats.swaps}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <div className="text-[11px] text-stone-500 font-mono">Status</div>
                      <div className="text-sm font-mono font-bold text-stone-800 mt-1">{sortStats.phase}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. BINARY SEARCH & BOUNDS EXPLORER */}
            {activeWorkbench === "binary-explorer" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <Binary className="w-5 h-5 text-orange-600" />
                        <span>Binary Search &amp; Boundary Explorer</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Explore exact lookup, lower bound (first &ge; target), upper bound (first &gt; target), and frequency counts.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-stone-700">Target Value:</span>
                      <input
                        type="number"
                        value={bsTarget}
                        onChange={(e) => setBsTarget(Number(e.target.value))}
                        className="w-20 px-3 py-1.5 rounded-xl border border-stone-300 font-mono font-bold text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  {/* Mode Selector */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      { id: "lower-bound", label: "Lower Bound (First >= Target)" },
                      { id: "upper-bound", label: "Upper Bound (First > Target)" },
                      { id: "exact", label: "Exact Binary Search" },
                      { id: "count", label: "Count Occurrences (Upper - Lower)" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setBsMode(m.id)}
                        className={`text-xs px-3.5 py-1.5 rounded-xl border font-semibold transition cursor-pointer ${
                          bsMode === m.id
                            ? "bg-stone-900 text-white border-stone-900 font-bold shadow-xs"
                            : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>

                  {/* Visual Array Grid */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-stone-700 mb-2">Sorted Array (10 Elements):</div>
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                      {bsArray.map((val, idx) => {
                        let isHighlighted = false;
                        let badgeLabel = "";

                        if (bsMode === "lower-bound" && idx === computedBounds.lower) {
                          isHighlighted = true;
                          badgeLabel = "Lower";
                        } else if (bsMode === "upper-bound" && idx === computedBounds.upper) {
                          isHighlighted = true;
                          badgeLabel = "Upper";
                        } else if (bsMode === "exact" && idx === computedBounds.exactIdx) {
                          isHighlighted = true;
                          badgeLabel = "Match";
                        } else if (bsMode === "count" && idx >= computedBounds.lower && idx < computedBounds.upper) {
                          isHighlighted = true;
                          badgeLabel = "=";
                        }

                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              isHighlighted
                                ? "bg-orange-50 border-orange-500 shadow-xs"
                                : "bg-white border-stone-200"
                            }`}
                          >
                            <span className="text-[10px] font-mono text-stone-400 block">[{idx}]</span>
                            <span className="text-lg font-mono font-black text-stone-900 block mt-0.5">{val}</span>
                            {badgeLabel && (
                              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-orange-600 text-white rounded-full mt-1 inline-block">
                                {badgeLabel}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Results Summary Card */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div>
                        <span className="text-stone-500 block">Lower Bound Index:</span>
                        <span className="font-mono font-black text-sm text-stone-900">
                          {computedBounds.lower} {computedBounds.lower === bsArray.length && "(Array Length)"}
                        </span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Upper Bound Index:</span>
                        <span className="font-mono font-black text-sm text-stone-900">
                          {computedBounds.upper} {computedBounds.upper === bsArray.length && "(Array Length)"}
                        </span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Occurrences Count:</span>
                        <span className="font-mono font-black text-sm text-emerald-700">
                          {computedBounds.count} copies
                        </span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Exact Match Index:</span>
                        <span className="font-mono font-black text-sm text-orange-700">
                          {computedBounds.exactIdx !== -1 ? computedBounds.exactIdx : "Not Found (-1)"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. ROTATED SORTED ARRAY SEARCH */}
            {activeWorkbench === "rotated-search" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <RotateCcw className="w-5 h-5 text-orange-600" />
                      <span>Search in Rotated Sorted Array Studio</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Identify which half is sorted (<code className="text-orange-700 font-mono">numbers[low] &lt;= numbers[mid]</code>) to achieve O(log n) lookup.
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                        <span>Rotation Pivot Shift:</span>
                        <span className="font-mono text-orange-700">{rotationPivot} slots</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="6"
                        value={rotationPivot}
                        onChange={(e) => setRotationPivot(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <label className="text-xs font-bold text-stone-700 block mb-1">Target to Find:</label>
                      <input
                        type="number"
                        value={rotatedTarget}
                        onChange={(e) => setRotatedTarget(Number(e.target.value))}
                        className="w-full text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white border border-stone-300 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-700">Include Duplicates:</span>
                      <button
                        onClick={() => setRotatedHasDuplicates((p) => !p)}
                        className={`text-xs px-3 py-1 rounded-lg border font-bold transition cursor-pointer ${
                          rotatedHasDuplicates
                            ? "bg-orange-500 text-orange-400 border-orange-500"
                            : "bg-white text-stone-600 border-stone-300"
                        }`}
                      >
                        {rotatedHasDuplicates ? "Duplicates Active" : "Distinct Values"}
                      </button>
                    </div>
                  </div>

                  {/* Rotated Array Display */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {rotatedArray.map((val, idx) => {
                        const isMatch = rotatedSearchResult.foundIndex === idx;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center flex-1 min-w-[50px] ${
                              isMatch ? "bg-emerald-50 border-emerald-500 shadow-xs" : "bg-white border-stone-200"
                            }`}
                          >
                            <span className="text-[10px] font-mono text-stone-400">[{idx}]</span>
                            <span className="text-lg font-mono font-black text-stone-900 block mt-0.5">{val}</span>
                            {isMatch && (
                              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-emerald-600 text-white rounded-full mt-1 inline-block">
                                Match
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Resolution Report */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                    <strong className="text-stone-900 font-bold block mb-1">Search Decision Matrix:</strong>
                    {rotatedSearchResult.success ? (
                      <span className="text-emerald-700 font-bold">
                        Target {rotatedTarget} successfully located at index {rotatedSearchResult.foundIndex} in{" "}
                        {rotatedSearchResult.steps.length} binary search comparisons!
                      </span>
                    ) : (
                      <span className="text-red-600 font-bold">
                        Target {rotatedTarget} is not present in the array. Verified in {rotatedSearchResult.steps.length} steps.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 4. BINARY SEARCH ON ANSWER (PARAMETRIC SEARCH) */}
            {activeWorkbench === "parametric-search" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <Ship className="w-5 h-5 text-orange-600" />
                      <span>Binary Search on Answer: Capacity to Ship Packages</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Problem: Ship packages in order within <code className="text-orange-700 font-mono">D = {shipDaysLimit}</code> days. Find minimum viable ship capacity.
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-stone-700">
                        <span>Max Shipping Days Limit (D):</span>
                        <span className="font-mono text-orange-700">{shipDaysLimit} Days</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={shipDaysLimit}
                        onChange={(e) => setShipDaysLimit(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="flex justify-between text-xs font-bold text-stone-700">
                        <span>Test Ship Capacity:</span>
                        <span className="font-mono text-orange-700">{candidateCap} tons/day</span>
                      </div>
                      <input
                        type="range"
                        min={shipCapacityBounds.minCap}
                        max={shipCapacityBounds.maxCap}
                        value={candidateCap}
                        onChange={(e) => setCandidateCap(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Daily Load Distribution Preview */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-2">
                      <span>Packages Loaded per Day (Capacity: {candidateCap}):</span>
                      <span className={`font-mono font-bold ${shipSimulation.isValid ? "text-emerald-700" : "text-red-600"}`}>
                        Requires {shipSimulation.daysNeeded} Days (Limit: {shipDaysLimit})
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                      {shipSimulation.dayBags.map((bag, dIdx) => {
                        const totalDayWeight = bag.reduce((a, b) => a + b, 0);
                        return (
                          <div key={dIdx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                            <div className="flex justify-between text-[11px] font-bold text-stone-600 mb-1.5 border-b border-stone-200 pb-1">
                              <span>Day {dIdx + 1}</span>
                              <span className="font-mono">{totalDayWeight} / {candidateCap}</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {bag.map((w, wIdx) => (
                                <span key={wIdx} className="px-1.5 py-0.5 rounded bg-orange-100 text-orange-800 font-mono font-bold text-[10px]">
                                  {w}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feasibility Verdict */}
                  <div
                    className={`p-4 rounded-xl border text-xs font-semibold ${
                      shipSimulation.isValid
                        ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                        : "bg-red-50 border-red-300 text-red-900"
                    }`}
                  >
                    {shipSimulation.isValid ? (
                      <div>
                        &check; Capacity <strong>{candidateCap}</strong> CAN ship all packages in {shipSimulation.daysNeeded} days (within limit {shipDaysLimit}). Monotonic property guarantees all capacities &ge; {candidateCap} are also valid!
                      </div>
                    ) : (
                      <div>
                        &cross; Capacity <strong>{candidateCap}</strong> requires {shipSimulation.daysNeeded} days, exceeding the {shipDaysLimit}-day deadline!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 5. NON-COMPARISON SORTING STUDIO */}
            {activeWorkbench === "non-comparison" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-[#e7e3da] pb-4 mb-6">
                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                      <HashIcon className="w-5 h-5 text-orange-600" />
                      <span>Non-Comparison Sorting Studio: Counting Sort Pipeline</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Explore linear-time sorting for small integer ranges without element-to-element comparisons.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Input Array */}
                    <div>
                      <span className="text-xs font-bold text-stone-700 block mb-1.5">Input Array with Negatives:</span>
                      <div className="flex flex-wrap gap-2">
                        {countingSample.map((v, i) => (
                          <div key={i} className="px-3 py-1.5 rounded-lg bg-stone-100 font-mono font-bold text-xs text-stone-800">
                            {v}
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-stone-500 mt-1 block">
                        Min: {countingDerivation.min}, Max: {countingDerivation.max}, Range (k): {countingDerivation.range}
                      </span>
                    </div>

                    {/* Frequency Tally Table */}
                    <div>
                      <span className="text-xs font-bold text-stone-700 block mb-1.5">1. Frequency Array count[val - min]:</span>
                      <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-stone-50 text-stone-700 border-b border-[#e7e3da]">
                            <tr>
                              <th className="px-3 py-2">Offset Key</th>
                              {countingDerivation.count.map((_, i) => (
                                <th key={i} className="px-3 py-2 text-center">{i}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-3 py-2 font-bold text-stone-900">Original Val</td>
                              {countingDerivation.count.map((_, i) => (
                                <td key={i} className="px-3 py-2 text-center font-bold text-orange-700">
                                  {i + countingDerivation.min}
                                </td>
                              ))}
                            </tr>
                            <tr className="bg-stone-50/50">
                              <td className="px-3 py-2 font-bold text-stone-900">Count</td>
                              {countingDerivation.count.map((c, i) => (
                                <td key={i} className="px-3 py-2 text-center font-bold text-emerald-700">
                                  {c}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Sorted Output */}
                    <div>
                      <span className="text-xs font-bold text-stone-700 block mb-1.5">2. Reconstructed Sorted Output (O(n + k)):</span>
                      <div className="flex flex-wrap gap-2">
                        {countingDerivation.output.map((v, i) => (
                          <div key={i} className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 font-mono font-bold text-xs text-emerald-900">
                            {v}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. STABILITY & MULTI-KEY SANDBOX */}
            {activeWorkbench === "stability-sandbox" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-orange-600" />
                        <span>Sorting Stability &amp; Key-Tie Invariant Studio</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Notice how Alice and Charlie both have 85 marks. Stable sorting preserves their original arrival order!
                      </p>
                    </div>

                    <button
                      onClick={() => setIsStableMode((p) => !p)}
                      className={`text-xs px-4 py-2 rounded-xl font-bold transition shadow-xs cursor-pointer ${
                        isStableMode ? "bg-emerald-600 text-white" : "bg-stone-900 text-white"
                      }`}
                    >
                      {isStableMode ? "Stable Sort (Merge/Insertion)" : "Unstable Sort (Selection/Quick)"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Original Order */}
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                      <span className="text-xs font-bold text-stone-700 block">Original Records (Input Sequence):</span>
                      <div className="space-y-2">
                        {initialStudents.map((s) => (
                          <div key={s.id} className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-stone-200 text-xs">
                            <span className="font-bold text-stone-800">{s.name}</span>
                            <span className="font-mono text-orange-700 font-bold">{s.marks} Marks</span>
                            <span className="text-[10px] text-stone-400 font-mono">Pos #{s.originalIdx}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sorted Order */}
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                      <span className="text-xs font-bold text-stone-700 block">Sorted Output by Marks:</span>
                      <div className="space-y-2">
                        {sortedStudents.map((s, idx) => {
                          const isTie = s.marks === 85;
                          return (
                            <div
                              key={s.id}
                              className={`flex items-center justify-between p-2.5 rounded-lg border text-xs ${
                                isTie ? "bg-orange-50 border-orange-300" : "bg-white border-stone-200"
                              }`}
                            >
                              <span className="font-bold text-stone-800">
                                {idx + 1}. {s.name}
                              </span>
                              <span className="font-mono text-orange-700 font-bold">{s.marks} Marks</span>
                              <span className="text-[10px] text-stone-500 font-mono">Orig Pos: #{s.originalIdx}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. KNOWLEDGE ASSESSMENT QUIZ */}
            {activeWorkbench === "quiz-section" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-orange-600" />
                        <span>Module 8 Knowledge Assessment Quiz</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        15 Comprehensive MCQs testing searching, sorting algorithms, bounds, and stability.
                      </p>
                    </div>

                    {submittedQuiz && (
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-stone-700">Your Score:</span>
                        <span
                          className={`text-sm font-mono font-black px-3 py-1 rounded-xl border ${
                            quizScore >= 12
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
                    {quizQuestions.map((q) => {
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

            {/* 8. LABS & ASSIGNMENTS TRACKER */}
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
                        Track completion of all 5 practical laboratory exercises and 6 algorithmic assignments.
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
                                      : "bg-orange-500 text-orange-400"
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

function HashIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="14" y2="21" />
    </svg>
  );
}
