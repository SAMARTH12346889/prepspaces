import React, { useState, useMemo } from "react";
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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaArraysStringsSections from "./JavaArraysStringsSections";

export default function JavaArraysStrings() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java/control-flow");

  // Mode tab state: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("array-workbench"); // 'array-workbench' | 'search-lab' | 'matrix-studio' | 'string-pool' | 'dsa-math' | 'quiz' | 'labs'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 1: ARRAY MANIPULATION & REFERENCE VISUALIZER
  // ---------------------------------------------------------------------------
  const [arrayElements, setArrayElements] = useState([10, 20, 30, 40, 50]);
  const [insertVal, setInsertVal] = useState(25);
  const [insertIndex, setInsertIndex] = useState(2);
  const [aliasedRef, setAliasedRef] = useState(false); // simulates `int[] b = a`
  const [cloneRef, setCloneRef] = useState(false); // simulates `int[] b = a.clone()`
  const [copiedArrayVal, setCopiedArrayVal] = useState([10, 20, 30, 40, 50]);

  const handleInsert = () => {
    const idx = Math.max(0, Math.min(arrayElements.length, Number(insertIndex) || 0));
    const val = Number(insertVal) || 0;
    const next = [...arrayElements.slice(0, idx), val, ...arrayElements.slice(idx)];
    setArrayElements(next);
    if (aliasedRef) {
      setCopiedArrayVal(next); // Aliased shares the exact same memory!
    }
  };

  const handleDelete = (delIdx) => {
    if (arrayElements.length <= 1) return;
    const next = arrayElements.filter((_, i) => i !== delIdx);
    setArrayElements(next);
    if (aliasedRef) {
      setCopiedArrayVal(next);
    }
  };

  const handleUpdateFirst = (newVal) => {
    const next = [...arrayElements];
    next[0] = newVal;
    setArrayElements(next);
    if (aliasedRef) {
      setCopiedArrayVal(next);
    }
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 2: SEARCH LAB (LINEAR VS BINARY SEARCH)
  // ---------------------------------------------------------------------------
  const searchDataset = useMemo(() => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], []);
  const [searchTarget, setSearchTarget] = useState(60);

  const searchAnalysis = useMemo(() => {
    const target = Number(searchTarget);
    // Linear search trace
    const linearSteps = [];
    let linearFoundIdx = -1;
    for (let i = 0; i < searchDataset.length; i++) {
      linearSteps.push({ index: i, value: searchDataset[i], match: searchDataset[i] === target });
      if (searchDataset[i] === target) {
        linearFoundIdx = i;
        break;
      }
    }

    // Binary search trace
    const binarySteps = [];
    let left = 0;
    let right = searchDataset.length - 1;
    let binaryFoundIdx = -1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const midVal = searchDataset[mid];
      binarySteps.push({
        step: binarySteps.length + 1,
        left,
        right,
        mid,
        midVal,
        action: midVal === target ? "Found Target" : midVal < target ? "Search Right (left = mid + 1)" : "Search Left (right = mid - 1)",
      });
      if (midVal === target) {
        binaryFoundIdx = mid;
        break;
      }
      if (midVal < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return {
      linearSteps,
      linearFoundIdx,
      linearComparisons: linearSteps.length,
      binarySteps,
      binaryFoundIdx,
      binaryComparisons: binarySteps.length,
    };
  }, [searchDataset, searchTarget]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 3: 2D MATRIX OPERATIONS STUDIO
  // ---------------------------------------------------------------------------
  const [matrixA, setMatrixA] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [matrixB, setMatrixB] = useState([
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ]);
  const [matrixOp, setMatrixOp] = useState("add"); // 'add' | 'transpose' | 'multiply' | 'diagonals'

  const matrixResult = useMemo(() => {
    const rows = 3;
    const cols = 3;

    if (matrixOp === "add") {
      const res = [];
      for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < cols; c++) {
          row.push(matrixA[r][c] + matrixB[r][c]);
        }
        res.push(row);
      }
      return { type: "matrix", data: res, label: "Matrix A + Matrix B" };
    }

    if (matrixOp === "transpose") {
      const res = [];
      for (let c = 0; c < cols; c++) {
        const row = [];
        for (let r = 0; r < rows; r++) {
          row.push(matrixA[r][c]);
        }
        res.push(row);
      }
      return { type: "matrix", data: res, label: "Transpose of Matrix A (A^T)" };
    }

    if (matrixOp === "multiply") {
      const res = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          let sum = 0;
          for (let k = 0; k < cols; k++) {
            sum += matrixA[i][k] * matrixB[k][j];
          }
          row.push(sum);
        }
        res.push(row);
      }
      return { type: "matrix", data: res, label: "Product Matrix A × B (O(n³))" };
    }

    if (matrixOp === "diagonals") {
      let mainSum = 0;
      let secSum = 0;
      for (let i = 0; i < rows; i++) {
        mainSum += matrixA[i][i];
        secSum += matrixA[i][rows - 1 - i];
      }
      return {
        type: "diagonals",
        mainSum,
        secSum,
        label: `Main Diagonal: ${mainSum} | Secondary Diagonal: ${secSum}`,
      };
    }

    return { type: "none" };
  }, [matrixA, matrixB, matrixOp]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 4: STRING & MEMORY POOL LAB
  // ---------------------------------------------------------------------------
  const [stringSample, setStringSample] = useState("Java");
  const [stringMethod, setStringMethod] = useState("immutability"); // 'immutability' | 'pool' | 'builder'

  const stringPoolAnalysis = useMemo(() => {
    // "Java" literal vs new String("Java") vs intern()
    return {
      literalA: '"Java" (String Pool at 0x100A)',
      literalB: '"Java" (String Pool at 0x100A)',
      heapObj: 'new String("Java") (JVM Heap at 0x7FF0)',
      internObj: 'heapObj.intern() -> returns reference to Pool at 0x100A',
      eqReference1: "literalA == literalB -> true (Same pooled instance)",
      eqReference2: "literalA == heapObj  -> false (Pool vs distinct heap object)",
      eqContent: "literalA.equals(heapObj) -> true (Identical char sequences)",
      eqIntern: "literalA == heapObj.intern() -> true (Canonical pooled ref)",
    };
  }, []);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 5: DSA FOUNDATIONS & MATH TOOLKIT
  // ---------------------------------------------------------------------------
  const [dsaTool, setDsaTool] = useState("sieve"); // 'sieve' | 'euclid' | 'mod-power' | 'two-pointer' | 'prefix-sum'
  const [sieveLimit, setSieveLimit] = useState(30);
  const [mathA, setMathA] = useState(48);
  const [mathB, setMathB] = useState(18);
  const [baseExp, setBaseExp] = useState(2);
  const [powerExp, setPowerExp] = useState(10);
  const [modVal, setModVal] = useState(1000);

  const sievePrimes = useMemo(() => {
    const lim = Math.max(2, Math.min(60, Number(sieveLimit) || 30));
    const isPrime = new Array(lim + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let p = 2; p * p <= lim; p++) {
      if (isPrime[p]) {
        for (let i = p * p; i <= lim; i += p) {
          isPrime[i] = false;
        }
      }
    }
    const primes = [];
    for (let i = 2; i <= lim; i++) {
      if (isPrime[i]) primes.push(i);
    }
    return { primes, isPrime, lim };
  }, [sieveLimit]);

  const euclidResult = useMemo(() => {
    let a = Math.abs(Number(mathA) || 0);
    let b = Math.abs(Number(mathB) || 0);
    const origA = a;
    const origB = b;
    const steps = [];

    while (b !== 0) {
      const rem = a % b;
      steps.push(`gcd(${a}, ${b}) -> remainder ${a} % ${b} = ${rem}`);
      a = b;
      b = rem;
    }
    const gcd = a;
    const lcm = origA === 0 || origB === 0 ? 0 : Math.abs(Math.floor((origA / gcd) * origB));
    return { gcd, lcm, steps };
  }, [mathA, mathB]);

  const modPowerResult = useMemo(() => {
    let base = Number(baseExp) || 2;
    let exp = Number(powerExp) || 10;
    const m = Number(modVal) || 1000;
    if (m <= 0) return { result: 0, steps: ["Modulus must be positive"] };

    let res = 1 % m;
    base = base % m;
    const steps = [];
    let curExp = exp;
    let curBase = base;

    while (curExp > 0) {
      if (curExp % 2 === 1) {
        res = (res * curBase) % m;
        steps.push(`Bit 1: res = (res * ${curBase}) % ${m} -> ${res}`);
      }
      curBase = (curBase * curBase) % m;
      curExp = Math.floor(curExp / 2);
      if (curExp > 0) {
        steps.push(`Square base: base = (${curBase}^2) % ${m} -> ${curBase}, exp >>= 1 (exp=${curExp})`);
      }
    }
    return { result: res, steps };
  }, [baseExp, powerExp, modVal]);

  // Prefix Sum demo array
  const prefixRaw = useMemo(() => [2, 4, 6, 8, 10], []);
  const prefixArray = useMemo(() => {
    const p = [prefixRaw[0]];
    for (let i = 1; i < prefixRaw.length; i++) {
      p.push(p[i - 1] + prefixRaw[i]);
    }
    return p;
  }, [prefixRaw]);
  const [queryL, setQueryL] = useState(1);
  const [queryR, setQueryR] = useState(3);

  const rangeSumResult = useMemo(() => {
    const l = Math.max(0, Math.min(prefixRaw.length - 1, Number(queryL) || 0));
    const r = Math.max(l, Math.min(prefixRaw.length - 1, Number(queryR) || 0));
    const sum = prefixArray[r] - (l > 0 ? prefixArray[l - 1] : 0);
    return { l, r, sum };
  }, [prefixRaw, prefixArray, queryL, queryR]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 6: 20-QUESTION ASSESSMENT QUIZ (Section 27 Part A)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is an array in Java?",
      options: [
        "A collection that automatically grows in size",
        "A fixed-length object containing elements of one component type",
        "A method that stores multiple values",
        "A primitive data type",
      ],
      correctIndex: 1,
      explanation: "An array in Java is a dynamically allocated, fixed-length object that stores a contiguous sequence of elements belonging to a single homogeneous component type.",
    },
    {
      id: 2,
      question: "2. What is the first valid index of a Java array?",
      options: ["-1", "0", "1", "Depends on the array size"],
      correctIndex: 1,
      explanation: "Java arrays use zero-based indexing; the first element is at index 0 and the final element is at index length - 1.",
    },
    {
      id: 3,
      question: "3. How do you obtain an array's length?",
      options: ["array.length()", "array.size()", "array.length", "array.count()"],
      correctIndex: 2,
      explanation: "In Java, array length is an immutable public final field accessed directly as array.length (without parentheses, unlike String.length()).",
    },
    {
      id: 4,
      question: "4. Which operation usually takes O(1) time for an array?",
      options: ["Full traversal", "Linear search", "Indexed access", "Copying the complete array"],
      correctIndex: 2,
      explanation: "Direct indexed access array[i] takes constant O(1) time because the JVM calculates the direct memory offset using the base address and element byte size.",
    },
    {
      id: 5,
      question: "5. Which searching algorithm requires sorted input?",
      options: ["Linear search", "Binary search", "Sequential search", "Unordered search"],
      correctIndex: 1,
      explanation: "Binary search requires that elements be sorted in ascending order so that the search space can be halved at each iteration.",
    },
    {
      id: 6,
      question: "6. What does assigning one array variable to another do?",
      options: [
        "Automatically creates a deep copy",
        "Copies all primitive elements to a different object",
        "Copies the reference value",
        "Deletes the first array",
      ],
      correctIndex: 2,
      explanation: "In Java, array variables hold reference values. Assigning one array variable to another copies the reference, meaning both variables point to the exact same underlying array object (aliasing).",
    },
    {
      id: 7,
      question: "7. What happens when an invalid array index is accessed?",
      options: [
        "The array automatically expands",
        "An ArrayIndexOutOfBoundsException occurs",
        "Java returns zero",
        "The operation is ignored",
      ],
      correctIndex: 1,
      explanation: "Attempting to access an index outside the valid range [0, length - 1] throws a runtime java.lang.ArrayIndexOutOfBoundsException.",
    },
    {
      id: 8,
      question: "8. Which statement about Java's two-dimensional arrays is correct?",
      options: [
        "Every two-dimensional array must be rectangular",
        "They are arrays whose elements can reference other arrays",
        "They are primitive values",
        "They cannot be traversed using nested loops",
      ],
      correctIndex: 1,
      explanation: "Java does not use true 2D contiguous matrices; 2D arrays are arrays of references where each element references an independent 1D array object, allowing jagged/ragged structures.",
    },
    {
      id: 9,
      question: "9. Why are String objects immutable?",
      options: [
        "Their contents can never be accessed",
        "Their character sequence cannot be changed after construction",
        "They cannot be assigned to variables",
        "They cannot be compared",
      ],
      correctIndex: 1,
      explanation: "String objects are immutable: once instantiated on the heap or string pool, their character sequences cannot be altered; any modification operation returns a brand-new String object.",
    },
    {
      id: 10,
      question: "10. What does equals() do when used on String objects?",
      options: [
        "Checks reference identity",
        "Compares String content",
        "Deletes the String",
        "Converts the String to uppercase",
      ],
      correctIndex: 1,
      explanation: "The equals() method in the String class performs character-by-character semantic content comparison, whereas the == operator checks reference memory identity.",
    },
    {
      id: 11,
      question: "11. Which class is generally preferred for repeated String construction in single-threaded code?",
      options: ["String", "StringBuilder", "StringBuffer", "Scanner"],
      correctIndex: 1,
      explanation: "StringBuilder is an unsynchronized, mutable sequence of characters designed for high-performance single-threaded string construction without intermediate garbage collection overhead.",
    },
    {
      id: 12,
      question: "12. Which class provides synchronized methods for mutable character-sequence operations?",
      options: ["String", "StringBuilder", "StringBuffer", "Character"],
      correctIndex: 2,
      explanation: "StringBuffer provides synchronized methods for thread-safe mutable string operations when multiple threads concurrently modify the same character buffer.",
    },
    {
      id: 13,
      question: "13. What does String.indexOf() return if the target is absent?",
      options: ["0", "1", "-1", "null"],
      correctIndex: 2,
      explanation: "String.indexOf() returns -1 whenever the target character or substring is not found within the calling String.",
    },
    {
      id: 14,
      question: "14. What is the usual time complexity of linear search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 2,
      explanation: "Linear search checks elements sequentially from index 0 to length - 1, resulting in O(n) average and worst-case time complexity.",
    },
    {
      id: 15,
      question: "15. What is the optimized trial-division complexity of checking whether a number is prime?",
      options: ["O(n²)", "O(√n)", "O(log n)", "O(1)"],
      correctIndex: 1,
      explanation: "Optimized trial division tests potential divisors up to sqrt(n) because any composite factor above sqrt(n) must have a complementary factor below sqrt(n), yielding O(sqrt(n)) complexity.",
    },
    {
      id: 16,
      question: "16. What is the GCD of 12 and 18?",
      options: ["2", "3", "6", "36"],
      correctIndex: 2,
      explanation: "The greatest positive integer that divides both 12 and 18 without a remainder is 6 (factors of 12: 1,2,3,4,6,12; factors of 18: 1,2,3,6,9,18).",
    },
    {
      id: 17,
      question: "17. What is the LCM of 4 and 6?",
      options: ["4", "6", "10", "12"],
      correctIndex: 3,
      explanation: "The least common multiple of 4 and 6 is 12 (multiples of 4: 4,8,12; multiples of 6: 6,12).",
    },
    {
      id: 18,
      question: "18. What is the result of Math.floorMod(-17, 5)?",
      options: ["-2", "-3", "2", "3"],
      correctIndex: 3,
      explanation: "Math.floorMod(-17, 5) produces 3 because mathematical modulo floors towards negative infinity: -17 = 5 * (-4) + 3.",
    },
    {
      id: 19,
      question: "19. Which structure is useful for storing character frequencies for lowercase English letters?",
      options: [
        "int array of length 10",
        "int array of length 26",
        "boolean array of length 2",
        "double array of length 5",
      ],
      correctIndex: 1,
      explanation: "For lowercase English characters from a to z, an integer array of size 26 maps directly using the character offset index ch - 'a'.",
    },
    {
      id: 20,
      question: "20. What is the time complexity of traversing every element of an r × c matrix?",
      options: ["O(r + c)", "O(r × c)", "O(log r)", "O(1)"],
      correctIndex: 1,
      explanation: "Traversing all cells in a matrix with r rows and c columns requires visiting r * c elements, yielding O(r * c) time complexity.",
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx,
    }));
  };

  const scoreCount = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  }, [userAnswers]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 7: LABS & ASSIGNMENTS TRACKER
  // ---------------------------------------------------------------------------
  const [completedLabs, setCompletedLabs] = useState({});

  const toggleLab = (id) => {
    setCompletedLabs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const labList = [
    { id: "lab-1", type: "Lab", title: "Lab 1: Array Fundamentals", goal: "Accept student marks into an array, calculate total, average, maximum, and minimum." },
    { id: "lab-2", type: "Lab", title: "Lab 2: Array Insertion & Deletion", goal: "Practice element shifting with extra capacity, index validation, and bounds safety." },
    { id: "lab-3", type: "Lab", title: "Lab 3: Searching Algorithms", goal: "Implement linear search on unsorted arrays and binary search on sorted arrays." },
    { id: "lab-4", type: "Lab", title: "Lab 4: Array Analytics", goal: "Implement second-largest element finder, duplicate detection, and in-place reversal." },
    { id: "lab-5", type: "Lab", title: "Lab 5: String Analyzer", goal: "Calculate sentence length, word count, vowels, consonants, digits, spaces, and reversed text." },
    { id: "lab-6", type: "Lab", title: "Lab 6: StringBuilder Laboratory", goal: "Benchmark StringBuilder vs repeated String concatenation under high-iteration workloads." },
    { id: "lab-7", type: "Lab", title: "Lab 7: Mathematical Algorithms", goal: "Implement prime testing, Sieve of Eratosthenes, Euclidean GCD/LCM, and modular exponentiation." },
    { id: "lab-8", type: "Lab", title: "Lab 8: Matrix Processing", goal: "Perform matrix addition, subtraction, transpose, multiplication, and diagonal sums." },
    { id: "asg-1", type: "Assignment", title: "Assignment 1: Product Inventory Analyzer", goal: "Track product prices and quantities with arrays; calculate total inventory valuation." },
    { id: "asg-2", type: "Assignment", title: "Assignment 2: Array Rotation", goal: "Rotate an array to the right by k positions using extra array and in-place reversal." },
    { id: "asg-3", type: "Assignment", title: "Assignment 3: Second-Largest & Smallest", goal: "Find distinct second-largest and second-smallest values with single-pass validation." },
    { id: "asg-4", type: "Assignment", title: "Assignment 4: Anagram Analyzer", goal: "Check whether two strings are anagrams using frequency arrays and case normalization." },
    { id: "asg-5", type: "Assignment", title: "Assignment 5: Character Frequency Report", goal: "Generate an ordered frequency map of every character occurring in a given text." },
    { id: "asg-6", type: "Assignment", title: "Assignment 6: Prime Number Toolkit", goal: "Generate primes in intervals, prime factorization, and divisor counting." },
    { id: "asg-7", type: "Assignment", title: "Assignment 7: Matrix Calculator", goal: "Build a menu-driven 2D matrix calculation suite with dimension validation." },
    { id: "asg-8", type: "Assignment", title: "Assignment 8: Text Normalization & Palindrome", goal: "Check sentence palindromes ignoring punctuation, case, and spacing." },
    { id: "asg-9", type: "Assignment", title: "Assignment 9: Range Sum Query", goal: "Implement prefix sums to answer multiple range-sum queries in O(1) time." },
    { id: "asg-10", type: "Assignment", title: "Assignment 10: Matrix Diagonal & Boundary", goal: "Calculate boundary sums without double-counting corners on n x n matrices." },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans antialiased selection:bg-orange-200 selection:text-orange-900">
      {/* Top Navigation */}
      <ModuleNav track="java" currentModuleId="arrays-strings" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={goBack}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-orange-600" />
                  Java Master Course · Module 3
                </span>
                <span className="text-xs font-mono text-stone-500 hidden sm:inline">
                  33 In-Depth Sections · 20 MCQs · 8 Labs · 10 Assignments
                </span>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span>Specification & Blueprints</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Interactive Workbenches (7)</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Arrays, Strings & Mathematical Programming
            </h1>
            <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Master sequential collections, memory reference semantics, multidimensional matrices, String immutability, the JVM String Constant Pool, mutable StringBuilder mechanics, prime number sieves, Euclidean number theory, and foundational DSA algorithms.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* MODE 1: CURRICULUM SPECIFICATION & BLUEPRINTS                       */}
        {/* =================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content (3 cols) */}
            <div className="lg:col-span-3 space-y-8">
              <JavaArraysStringsSections />
            </div>

            {/* Sticky Table of Contents (1 col) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border border-[#e7e3da] p-5 shadow-xs space-y-4 max-h-[85vh] overflow-y-auto [scrollbar-width:thin]">
                <div className="flex items-center gap-2 pb-3 border-b border-stone-100 font-bold text-stone-900 text-sm">
                  <ListOrdered className="w-4 h-4 text-orange-600" />
                  <span>Module Index (33 Parts)</span>
                </div>
                <nav className="space-y-1 text-xs">
                  {[
                    { id: "overview", label: "Module Overview & Objectives" },
                    { id: "section-1", label: "1. Introduction to Arrays" },
                    { id: "section-2", label: "2. One-Dimensional Arrays" },
                    { id: "section-3", label: "3. Array Traversal" },
                    { id: "section-4", label: "4. Insertion & Deletion" },
                    { id: "section-5", label: "5. Searching (Linear & Binary)" },
                    { id: "section-6", label: "6. References & Memory Behavior" },
                    { id: "section-7", label: "7. Multidimensional Arrays" },
                    { id: "section-8", label: "8. Matrix Operations" },
                    { id: "section-9", label: "9. Introduction to Strings" },
                    { id: "section-10", label: "10. String Immutability" },
                    { id: "section-11", label: "11. Java String Pool" },
                    { id: "section-12", label: "12. String Manipulation API" },
                    { id: "section-13", label: "13. StringBuilder & StringBuffer" },
                    { id: "section-14", label: "14. Character Processing & Unicode" },
                    { id: "section-15", label: "15. Frequency Counting" },
                    { id: "section-16", label: "16. String Problem Solving" },
                    { id: "section-17", label: "17. Mathematics for DSA" },
                    { id: "section-18", label: "18. Euclidean GCD" },
                    { id: "section-19", label: "19. LCM Calculation" },
                    { id: "section-20", label: "20. Modular Arithmetic" },
                    { id: "section-21", label: "21. Reversal & Palindromes" },
                    { id: "section-22", label: "22. Two-Pointers & Prefix Sums" },
                    { id: "section-23", label: "23. Complexity Reference" },
                    { id: "section-24", label: "24. 5 Worked Code Examples" },
                    { id: "section-25", label: "25. 8 Practical Labs" },
                    { id: "section-26", label: "26. 10 Independent Assignments" },
                    { id: "section-27", label: "27. 20 Assessment MCQs" },
                    { id: "section-28", label: "28. 30 Graded Challenges" },
                    { id: "section-29", label: "29. Analysis Toolkit Mini Project" },
                    { id: "section-30", label: "30. Common Beginner Mistakes" },
                    { id: "section-31", label: "31. Module Revision Sheet" },
                    { id: "section-32", label: "32. Official Resources" },
                    { id: "section-33", label: "33. Completion Checklist" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-2.5 py-1.5 rounded-lg text-stone-600 hover:text-orange-700 hover:bg-orange-50/60 transition-colors truncate"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="pt-3 border-t border-stone-100">
                  <button
                    onClick={() => setActiveTab("workbench")}
                    className="w-full py-2 px-3 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Open Workbenches</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* MODE 2: INTERACTIVE WORKBENCHES (7 COMPREHENSIVE TOOLS)            */}
        {/* =================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Sub-tab navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs">
              {[
                { id: "array-workbench", label: "Array & References", icon: Grid },
                { id: "search-lab", label: "Search: Linear vs Binary", icon: Search },
                { id: "matrix-studio", label: "2D Matrix Studio", icon: Maximize2 },
                { id: "string-pool", label: "String Pool & Immutability", icon: Type },
                { id: "dsa-math", label: "DSA Math & Sieves", icon: Calculator },
                { id: "quiz", label: "20 MCQs Assessment", icon: HelpCircle },
                { id: "labs", label: "Labs & Assignments Tracker", icon: CheckSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeWorkbenchTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkbenchTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-orange-600 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 1. ARRAY MANIPULATION & REFERENCE VISUALIZER */}
            {activeWorkbenchTab === "array-workbench" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                    <Grid className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Interactive Array Elements & Shifting</h3>
                      <p className="text-xs text-stone-500">Inspect zero-based indexing, insert by shifting right, delete by shifting left</p>
                    </div>
                  </div>

                  {/* Visual Array Blocks */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-stone-600">
                      Active Array (<code className="font-mono text-orange-700">length = {arrayElements.length}</code>):
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {arrayElements.map((val, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center bg-stone-50 border border-stone-200 rounded-xl p-2.5 min-w-[56px] relative group"
                        >
                          <span className="text-[10px] font-mono text-stone-400 font-bold mb-1">[{idx}]</span>
                          <span className="text-sm font-mono font-bold text-stone-900">{val}</span>
                          <button
                            onClick={() => handleDelete(idx)}
                            className="mt-2 text-[10px] text-rose-500 hover:text-rose-700 font-semibold uppercase tracking-wider"
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block mb-1">Value to Insert:</label>
                      <input
                        type="number"
                        value={insertVal}
                        onChange={(e) => setInsertVal(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block mb-1">At Index:</label>
                      <input
                        type="number"
                        min="0"
                        max={arrayElements.length}
                        value={insertIndex}
                        onChange={(e) => setInsertIndex(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={handleInsert}
                        className="w-full py-1.5 px-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors shadow-2xs"
                      >
                        Insert & Shift
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reference Semantics Panel */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                    <Workflow className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Reference Aliasing vs Independent Copying</h3>
                      <p className="text-xs text-stone-500">Understand heap memory references and method argument mutation</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setAliasedRef(true);
                        setCloneRef(false);
                        setCopiedArrayVal(arrayElements);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        aliasedRef ? "bg-orange-600 text-white shadow-xs" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      int[] b = a; (Aliased)
                    </button>
                    <button
                      onClick={() => {
                        setCloneRef(true);
                        setAliasedRef(false);
                        setCopiedArrayVal([...arrayElements]);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        cloneRef ? "bg-orange-600 text-white shadow-xs" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      int[] b = a.clone(); (Independent Copy)
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <div className="flex justify-between font-mono">
                      <span>Variable a: <strong className="text-orange-700">[{arrayElements.join(", ")}]</strong></span>
                      <span className="text-stone-400">@HeapRef_0x1A</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span>Variable b: <strong className="text-emerald-700">[{copiedArrayVal.join(", ")}]</strong></span>
                      <span className="text-stone-400">{aliasedRef ? "@HeapRef_0x1A (SHARED!)" : "@HeapRef_0x9B (NEW)"}</span>
                    </div>
                    <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                      <span>Test Action:</span>
                      <button
                        onClick={() => handleUpdateFirst(999)}
                        className="px-2.5 py-1 rounded bg-stone-200 hover:bg-stone-300 font-mono text-[11px] font-bold text-stone-800"
                      >
                        Execute: a[0] = 999;
                      </button>
                    </div>
                    {aliasedRef && (
                      <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                        Notice: Since <code>b</code> aliases <code>a</code>, updating <code>a[0]</code> immediately reflects inside <code>b[0]</code>!
                      </p>
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                    <pre>{aliasedRef ? `// Aliasing: Multiple references point to same array object
int[] a = {10, 20, 30};
int[] b = a;         // Copies reference only
b[0] = 999;          // Mutates shared heap object!
System.out.println(a[0]); // Prints 999` : `// Independent Copy: Allocates new heap array
int[] a = {10, 20, 30};
int[] b = a.clone(); // or Arrays.copyOf(a, a.length)
b[0] = 999;          // Mutates copy only
System.out.println(a[0]); // Still prints 10`}</pre>
                  </div>
                </div>
              </div>
            )}

            {/* 2. SEARCH LAB */}
            {activeWorkbenchTab === "search-lab" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Search Algorithm Laboratory</h3>
                      <p className="text-xs text-stone-500">Direct side-by-side performance comparison: Linear Search vs Binary Search</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-xs font-semibold text-stone-700">Target Value:</label>
                    <input
                      type="number"
                      value={searchTarget}
                      onChange={(e) => setSearchTarget(Number(e.target.value))}
                      className="w-24 px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                    />
                  </div>
                </div>

                {/* Visual Sorted Array */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-stone-600">Sorted Dataset (Length = 10):</div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {searchDataset.map((val, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-lg border font-bold ${
                          val === Number(searchTarget)
                            ? "bg-orange-600 text-white border-orange-700 shadow-xs"
                            : "bg-stone-50 text-stone-700 border-stone-200"
                        }`}
                      >
                        [{idx}]: {val}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Linear Search */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-stone-900 text-sm">Linear Search (Sequential)</h4>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-stone-200 text-stone-800">
                        O(n) Worst-case
                      </span>
                    </div>
                    <div className="text-xs text-stone-600 font-mono">
                      Comparisons executed: <strong className="text-orange-700">{searchAnalysis.linearComparisons}</strong>
                    </div>
                    <div className="text-xs text-stone-700">
                      Result:{" "}
                      {searchAnalysis.linearFoundIdx !== -1 ? (
                        <span className="text-emerald-700 font-bold">Found at index {searchAnalysis.linearFoundIdx}</span>
                      ) : (
                        <span className="text-rose-600 font-bold">Target not found (-1)</span>
                      )}
                    </div>
                    <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-[11px] overflow-x-auto">
                      <pre>{`for (int i = 0; i < n; i++) {
    if (arr[i] == target) return i;
}
return -1;`}</pre>
                    </div>
                  </div>

                  {/* Binary Search */}
                  <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-stone-900 text-sm">Binary Search (Divide & Conquer)</h4>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-orange-200 text-orange-900">
                        O(log n)
                      </span>
                    </div>
                    <div className="text-xs text-stone-600 font-mono">
                      Comparisons executed: <strong className="text-orange-700">{searchAnalysis.binaryComparisons}</strong>
                    </div>
                    <div className="text-xs text-stone-700">
                      Result:{" "}
                      {searchAnalysis.binaryFoundIdx !== -1 ? (
                        <span className="text-emerald-700 font-bold">Found at index {searchAnalysis.binaryFoundIdx}</span>
                      ) : (
                        <span className="text-rose-600 font-bold">Target not found (-1)</span>
                      )}
                    </div>
                    <div className="max-h-32 overflow-y-auto space-y-1 text-[11px] font-mono [scrollbar-width:thin]">
                      {searchAnalysis.binarySteps.map((st) => (
                        <div key={st.step} className="p-1 rounded bg-white/80 border border-orange-200">
                          Step {st.step}: mid={st.mid} (val={st.midVal}) &rarr; {st.action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. 2D MATRIX STUDIO */}
            {activeWorkbenchTab === "matrix-studio" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">2D Matrix Operations Studio</h3>
                      <p className="text-xs text-stone-500">Live linear algebra: matrix addition, transposition, multiplication, and diagonal sums</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: "add", label: "Addition (A + B)" },
                      { id: "transpose", label: "Transpose (A^T)" },
                      { id: "multiply", label: "Multiplication (A × B)" },
                      { id: "diagonals", label: "Diagonal Sums" },
                    ].map((op) => (
                      <button
                        key={op.id}
                        onClick={() => setMatrixOp(op.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          matrixOp === op.id ? "bg-orange-600 text-white shadow-xs" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {op.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  {/* Matrix A */}
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                    <div className="text-xs font-bold text-stone-800">Matrix A (3 × 3)</div>
                    <div className="grid grid-cols-3 gap-1 font-mono text-center text-xs">
                      {matrixA.map((row, r) =>
                        row.map((val, c) => (
                          <div key={`${r}-${c}`} className="p-2 bg-white rounded border border-stone-200 font-bold">
                            {val}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Operation Symbol */}
                  <div className="text-center font-extrabold text-2xl text-stone-400">
                    {matrixOp === "add" ? "+" : matrixOp === "multiply" ? "×" : matrixOp === "transpose" ? "⇄" : "Σ"}
                  </div>

                  {/* Matrix B or Result */}
                  <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-200 space-y-2">
                    <div className="text-xs font-bold text-stone-900">{matrixResult.label}</div>
                    {matrixResult.type === "matrix" && (
                      <div className="grid grid-cols-3 gap-1 font-mono text-center text-xs">
                        {matrixResult.data.map((row, r) =>
                          row.map((val, c) => (
                            <div key={`${r}-${c}`} className="p-2 bg-white rounded border border-orange-200 font-bold text-orange-800">
                              {val}
                            </div>
                          ))
                        )}
                      </div>
                    )}
                    {matrixResult.type === "diagonals" && (
                      <div className="p-3 bg-white rounded border border-orange-200 space-y-2 text-xs font-mono">
                        <div>Main Diagonal Sum: <strong className="text-orange-700">{matrixResult.mainSum}</strong></div>
                        <div>Secondary Diagonal Sum: <strong className="text-orange-700">{matrixResult.secSum}</strong></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 4. STRING & MEMORY POOL LAB */}
            {activeWorkbenchTab === "string-pool" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                    <Type className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">JVM String Constant Pool Simulator</h3>
                      <p className="text-xs text-stone-500">Visualizing reference comparison (==) versus content equality (.equals())</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 font-mono text-xs">
                    <div className="p-2 bg-white rounded border border-stone-200">
                      <strong>String a = "Java";</strong> &rarr; {stringPoolAnalysis.literalA}
                    </div>
                    <div className="p-2 bg-white rounded border border-stone-200">
                      <strong>String b = "Java";</strong> &rarr; {stringPoolAnalysis.literalB}
                    </div>
                    <div className="p-2 bg-white rounded border border-stone-200">
                      <strong>String c = new String("Java");</strong> &rarr; {stringPoolAnalysis.heapObj}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-1 font-mono text-xs">
                    <div className="font-bold text-stone-900 pb-1 border-b border-orange-200">Evaluation Truth Table:</div>
                    <div className="text-emerald-800">{stringPoolAnalysis.eqReference1}</div>
                    <div className="text-rose-700">{stringPoolAnalysis.eqReference2}</div>
                    <div className="text-emerald-800">{stringPoolAnalysis.eqContent}</div>
                    <div className="text-emerald-800">{stringPoolAnalysis.eqIntern}</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <h4 className="font-bold text-stone-900 text-sm">StringBuilder vs String Concatenation</h4>
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                    <pre>{`// ANTIPATTERN: O(n²) string copy overhead in loops
String s = "";
for (int i = 0; i < 1000; i++) {
    s = s + i; // Creates 1000 garbage objects!
}

// PRODUCTION PATTERN: Amortized O(1) in-place buffer append
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
String result = sb.toString();`}</pre>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
                    <span className="font-bold text-stone-900">Synchronization Note:</span>
                    <p className="leading-relaxed">
                      Use <code>StringBuilder</code> for high performance in thread-confined local operations. Use <code>StringBuffer</code> only when concurrent threads mutate the same shared character sequence.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. DSA FOUNDATIONS & MATH TOOLKIT */}
            {activeWorkbenchTab === "dsa-math" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">DSA Foundations & Number Theory Studio</h3>
                      <p className="text-xs text-stone-500">Interactive Sieve of Eratosthenes, Euclidean GCD/LCM, Modular Power, and Prefix Sums</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: "sieve", label: "Sieve of Eratosthenes" },
                      { id: "euclid", label: "Euclidean GCD / LCM" },
                      { id: "mod-power", label: "Modular Power" },
                      { id: "prefix-sum", label: "Prefix Sum Queries" },
                    ].map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => setDsaTool(tool.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          dsaTool === tool.id ? "bg-orange-600 text-white shadow-xs" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {tool.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sieve Panel */}
                {dsaTool === "sieve" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <label className="text-xs font-semibold text-stone-700">Upper Limit N (2 to 50):</label>
                      <input
                        type="range"
                        min="10"
                        max="50"
                        value={sieveLimit}
                        onChange={(e) => setSieveLimit(Number(e.target.value))}
                        className="accent-orange-600"
                      />
                      <span className="font-mono text-xs font-bold text-orange-700">{sieveLimit}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {Array.from({ length: sievePrimes.lim - 1 }, (_, i) => i + 2).map((num) => {
                        const isPrime = sievePrimes.isPrime[num];
                        return (
                          <span
                            key={num}
                            className={`w-9 h-9 flex items-center justify-center rounded-lg border font-bold ${
                              isPrime
                                ? "bg-emerald-100 text-emerald-950 border-emerald-300 shadow-2xs"
                                : "bg-stone-100 text-stone-400 border-stone-200 line-through"
                            }`}
                          >
                            {num}
                          </span>
                        );
                      })}
                    </div>
                    <div className="text-xs text-stone-600 font-mono">
                      Primes up to {sievePrimes.lim}: <strong className="text-emerald-800">{sievePrimes.primes.join(", ")}</strong>
                    </div>
                  </div>
                )}

                {/* Euclidean GCD/LCM */}
                {dsaTool === "euclid" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Number A:</label>
                        <input
                          type="number"
                          value={mathA}
                          onChange={(e) => setMathA(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Number B:</label>
                        <input
                          type="number"
                          value={mathB}
                          onChange={(e) => setMathB(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl space-y-2 text-xs font-mono">
                      <div className="text-stone-900 font-bold text-sm">
                        GCD({mathA}, {mathB}) = <span className="text-orange-700">{euclidResult.gcd}</span> | LCM({mathA}, {mathB}) = <span className="text-orange-700">{euclidResult.lcm}</span>
                      </div>
                      <div className="space-y-1 text-stone-600">
                        {euclidResult.steps.map((st, i) => (
                          <div key={i}>&gt; {st}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Modular Power */}
                {dsaTool === "mod-power" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Base:</label>
                        <input
                          type="number"
                          value={baseExp}
                          onChange={(e) => setBaseExp(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Exponent:</label>
                        <input
                          type="number"
                          value={powerExp}
                          onChange={(e) => setPowerExp(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Modulus (M):</label>
                        <input
                          type="number"
                          value={modVal}
                          onChange={(e) => setModVal(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-stone-900 text-white rounded-xl space-y-2 font-mono text-xs">
                      <div>
                        Result: ({baseExp}^{powerExp}) % {modVal} = <strong className="text-orange-400 text-sm">{modPowerResult.result}</strong>
                      </div>
                      <div className="text-[11px] text-stone-400 space-y-1">
                        {modPowerResult.steps.map((st, i) => (
                          <div key={i}>{st}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Prefix Sum Queries */}
                {dsaTool === "prefix-sum" && (
                  <div className="space-y-4">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono space-y-1">
                      <div>Raw Array: <span className="font-bold text-stone-800">[{prefixRaw.join(", ")}]</span></div>
                      <div>Prefix Sum: <span className="font-bold text-orange-700">[{prefixArray.join(", ")}]</span></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Query Left Index (L):</label>
                        <input
                          type="number"
                          min="0"
                          max={prefixRaw.length - 1}
                          value={queryL}
                          onChange={(e) => setQueryL(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">Query Right Index (R):</label>
                        <input
                          type="number"
                          min="0"
                          max={prefixRaw.length - 1}
                          value={queryR}
                          onChange={(e) => setQueryR(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 font-mono text-xs bg-white"
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 text-xs font-mono">
                      Sum of elements from index {rangeSumResult.l} to {rangeSumResult.r} = <strong className="text-orange-800 text-base">{rangeSumResult.sum}</strong> (Computed in O(1) via <code>prefix[{rangeSumResult.r}] - prefix[{rangeSumResult.l - 1}]</code>)
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 6. ASSESSMENT QUIZ (20 MCQs) */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Module 3 Comprehensive Assessment (20 MCQs)</h3>
                      <p className="text-xs text-stone-500">Official textbook review questions from Section 27 Part A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-mono font-bold text-stone-600">
                      Score: <span className="text-orange-600 text-sm">{scoreCount}</span> / {quizQuestions.length}
                    </div>
                    <button
                      onClick={() => setShowResults(!showResults)}
                      className="px-3 py-1.5 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 transition-colors shadow-2xs"
                    >
                      {showResults ? "Hide Answers" : "Evaluate & Check All"}
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = userAnswers[q.id];
                    const isAnswered = selected !== undefined;
                    const isCorrect = selected === q.correctIndex;

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-xl border transition-all ${
                          showResults
                            ? isCorrect
                              ? "bg-emerald-50/50 border-emerald-300"
                              : "bg-rose-50/50 border-rose-300"
                            : isAnswered
                            ? "bg-stone-50 border-stone-200"
                            : "bg-white border-[#e7e3da]"
                        }`}
                      >
                        <h4 className="font-bold text-stone-900 text-sm mb-3">{q.question}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {q.options.map((opt, oIdx) => {
                            const isThisSelected = selected === oIdx;
                            const isThisCorrect = q.correctIndex === oIdx;

                            let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";
                            if (showResults) {
                              if (isThisCorrect) {
                                btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                              } else if (isThisSelected && !isCorrect) {
                                btnStyle = "bg-rose-100 border-rose-400 text-rose-950 line-through";
                              }
                            } else if (isThisSelected) {
                              btnStyle = "bg-orange-600 border-orange-600 text-white font-semibold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectOption(q.id, oIdx)}
                                className={`p-2.5 rounded-lg border text-xs text-left transition-all ${btnStyle}`}
                              >
                                <span className="font-mono mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                        {showResults && (
                          <div className="pt-2 border-t border-stone-200/60 text-xs text-stone-600">
                            <span className="font-bold text-stone-900">Explanation:</span> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 7. LABS & ASSIGNMENTS TRACKER */}
            {activeWorkbenchTab === "labs" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Practical Labs & Assignments Checklist</h3>
                      <p className="text-xs text-stone-500">Track completion of all 8 laboratory exercises and 10 independent challenges</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-stone-600">
                    Completed: <span className="text-orange-600">{Object.values(completedLabs).filter(Boolean).length}</span> / {labList.length}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {labList.map((lab) => {
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
                                    : "bg-stone-100 text-stone-700"
                                }`}
                              >
                                {lab.type}
                              </span>
                              <h4 className={`text-xs font-bold ${isDone ? "text-stone-500 line-through" : "text-stone-900"}`}>
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
            )}
          </div>
        )}
      </main>
    </div>
  );
}
