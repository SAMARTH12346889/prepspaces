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
  Footprints,
  Eye,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaRecursionSections from "./JavaRecursionSections";

export default function JavaRecursion() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java/advanced");

  // Mode tab state: 'curriculum' | 'workbench'
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("recursion-studio");

  // ---------------------------------------------------------------------------
  // WORKBENCH 1: CALL STACK & FRAME UNWINDING STUDIO
  // ---------------------------------------------------------------------------
  const [stackInputN, setStackInputN] = useState(4);
  const [stackOperation, setStackOperation] = useState("factorial"); // 'factorial' | 'sum'
  const [currentStackStep, setCurrentStackStep] = useState(0);

  // Compute full step sequence for stack animation
  const stackAnimationSteps = useMemo(() => {
    const n = Math.max(1, Math.min(6, Number(stackInputN) || 1));
    const steps = [];

    // Phase 1: Descent
    for (let i = n; i >= 1; i--) {
      steps.push({
        phase: "Descent",
        activeN: i,
        desc: `Call ${stackOperation}(${i}) pushed to thread stack frame. Checking base case: ${i} == 1 ? False. Pending recursive call.`,
        frames: Array.from({ length: n - i + 1 }, (_, idx) => ({
          call: `${stackOperation}(${n - idx})`,
          n: n - idx,
          state: idx === n - i ? "active" : "waiting",
          pending: n - idx === 1 ? "Base Case: returns 1" : stackOperation === "factorial" ? `${n - idx} * ${stackOperation}(${n - idx - 1})` : `${n - idx} + ${stackOperation}(${n - idx - 1})`,
        })),
      });
    }

    // Phase 2: Unwinding
    let accumulated = 1;
    for (let i = 2; i <= n; i++) {
      if (stackOperation === "factorial") {
        accumulated *= i;
      } else {
        accumulated += i;
      }
      steps.push({
        phase: "Unwinding",
        activeN: i,
        desc: `Stack unwinding: ${stackOperation}(${i - 1}) returned. Frame ${stackOperation}(${i}) computes result = ${accumulated} and pops.`,
        frames: Array.from({ length: n - i + 1 }, (_, idx) => ({
          call: `${stackOperation}(${n - idx})`,
          n: n - idx,
          state: idx === 0 ? "popping" : "waiting",
          pending: `Current evaluated value: ${accumulated}`,
        })),
      });
    }

    // Final completed step
    steps.push({
      phase: "Completed",
      activeN: n,
      desc: `All stack frames popped! Final return value delivered to caller: ${accumulated}.`,
      frames: [],
    });

    return steps;
  }, [stackInputN, stackOperation]);

  const currentStepData = stackAnimationSteps[currentStackStep] || stackAnimationSteps[0];

  const handleNextStep = () => {
    setCurrentStackStep((prev) => Math.min(stackAnimationSteps.length - 1, prev + 1));
  };

  const handlePrevStep = () => {
    setCurrentStackStep((prev) => Math.max(0, prev - 1));
  };

  const handleResetStack = () => {
    setCurrentStackStep(0);
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 2: RECURSION TREE VISUALIZER (NAIVE VS MEMOIZED FIBONACCI)
  // ---------------------------------------------------------------------------
  const [fibN, setFibN] = useState(4);
  const [treeMode, setTreeMode] = useState("naive"); // 'naive' | 'memoized'

  const fibStats = useMemo(() => {
    const n = Math.max(0, Math.min(5, Number(fibN) || 0));
    // Naive call count: T(0)=1, T(1)=1, T(n)=T(n-1)+T(n-2)+1
    const callCount = [1, 1, 3, 5, 9, 15][n] || 15;
    const memoCallCount = n <= 1 ? 1 : 2 * n - 1;
    const fibValues = [0, 1, 1, 2, 3, 5];

    return {
      n,
      val: fibValues[n],
      naiveCalls: callCount,
      memoCalls: memoCallCount,
      redundancy: callCount - memoCallCount,
    };
  }, [fibN]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 3: MATHEMATICAL INDUCTION PROOF STUDIO
  // ---------------------------------------------------------------------------
  const [inductionProofType, setInductionProofType] = useState("sumNatural"); // sumNatural | sumOdd | powerSet

  // ---------------------------------------------------------------------------
  // WORKBENCH 4: COMBINATORICS & SUBSETS (INCLUDE-EXCLUDE) LAB
  // ---------------------------------------------------------------------------
  const [combInput, setCombInput] = useState(["A", "B", "C"]);
  const [combR, setCombR] = useState(2);
  const [combAction, setCombAction] = useState("subsets"); // 'subsets' | 'permutations' | 'combinations'

  const combCalculations = useMemo(() => {
    const n = combInput.length;
    const r = Math.max(1, Math.min(n, Number(combR) || 1));

    // Factorial helper
    const fact = (num) => (num <= 1 ? 1 : num * fact(num - 1));

    // Permutations P(n, r)
    const pCount = fact(n) / fact(n - r);
    // Combinations C(n, r)
    const cCount = fact(n) / (fact(r) * fact(n - r));
    // Subsets 2^n
    const subCount = Math.pow(2, n);

    // Generate actual items
    let results = [];
    if (combAction === "subsets") {
      // Include-exclude power set
      for (let mask = 0; mask < (1 << n); mask++) {
        const sub = [];
        for (let i = 0; i < n; i++) {
          if ((mask & (1 << i)) !== 0) sub.push(combInput[i]);
        }
        results.push(sub.length === 0 ? "∅ (Empty set)" : `{ ${sub.join(", ")} }`);
      }
    } else if (combAction === "combinations") {
      // Fixed size r combinations
      const combos = [];
      const helper = (start, chosen) => {
        if (chosen.length === r) {
          combos.push(`{ ${chosen.join(", ")} }`);
          return;
        }
        for (let i = start; i < n; i++) {
          helper(i + 1, [...chosen, combInput[i]]);
        }
      };
      helper(0, []);
      results = combos;
    } else {
      // Permutations of size n
      const perms = [];
      const used = new Array(n).fill(false);
      const helper = (current) => {
        if (current.length === n) {
          perms.push(current.join(""));
          return;
        }
        for (let i = 0; i < n; i++) {
          if (used[i]) continue;
          used[i] = true;
          helper([...current, combInput[i]]);
          used[i] = false;
        }
      };
      helper([]);
      results = perms;
    }

    return {
      n,
      r,
      pCount,
      cCount,
      subCount,
      results,
    };
  }, [combInput, combR, combAction]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 5: N-QUEENS INTERACTIVE CHESSBOARD SOLVER
  // ---------------------------------------------------------------------------
  const [boardN, setBoardN] = useState(4);
  const [queenColumns, setQueenColumns] = useState([-1, -1, -1, -1]);
  const [nQueensSolutionList, setNQueensSolutionList] = useState([]);
  const [selectedSolIdx, setSelectedSolIdx] = useState(0);

  // Re-solve N-Queens when N changes
  useEffect(() => {
    const n = Number(boardN);
    const solutions = [];
    const cols = new Array(n).fill(-1);

    const isSafe = (row, col, placed) => {
      for (let prevRow = 0; prevRow < row; prevRow++) {
        const prevCol = placed[prevRow];
        if (prevCol === col) return false;
        if (Math.abs(prevRow - row) === Math.abs(prevCol - col)) return false;
      }
      return true;
    };

    const solve = (row, placed) => {
      if (row === n) {
        solutions.push([...placed]);
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col, placed)) {
          placed[row] = col;
          solve(row + 1, placed);
          placed[row] = -1;
        }
      }
    };

    solve(0, cols);
    setNQueensSolutionList(solutions);
    setSelectedSolIdx(0);
    if (solutions.length > 0) {
      setQueenColumns(solutions[0]);
    } else {
      setQueenColumns(new Array(n).fill(-1));
    }
  }, [boardN]);

  const handleSelectQueenSolution = (idx) => {
    setSelectedSolIdx(idx);
    setQueenColumns(nQueensSolutionList[idx]);
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 6: SUDOKU BACKTRACKING SOLVER & MRV HEURISTIC
  // ---------------------------------------------------------------------------
  const initialSudokuGrid = useMemo(() => [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ], []);

  const [sudokuGrid, setSudokuGrid] = useState(initialSudokuGrid);
  const [sudokuSolved, setSudokuSolved] = useState(false);

  const handleSolveSudoku = () => {
    const board = sudokuGrid.map((r) => [...r]);

    const isValid = (r, c, num) => {
      for (let i = 0; i < 9; i++) {
        if (board[r][i] === num || board[i][c] === num) return false;
      }
      const br = Math.floor(r / 3) * 3;
      const bc = Math.floor(c / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[br + i][bc + j] === num) return false;
        }
      }
      return true;
    };

    const solve = () => {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (board[r][c] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(r, c, num)) {
                board[r][c] = num;
                if (solve()) return true;
                board[r][c] = 0; // Backtrack
              }
            }
            return false;
          }
        }
      }
      return true;
    };

    if (solve()) {
      setSudokuGrid(board);
      setSudokuSolved(true);
    }
  };

  const handleResetSudoku = () => {
    setSudokuGrid(initialSudokuGrid);
    setSudokuSolved(false);
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 7: RAT IN A MAZE & 4-DIRECTION GRID PATHFINDING
  // ---------------------------------------------------------------------------
  const [mazeGrid, setMazeGrid] = useState([
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
  ]);
  const [mazePath, setMazePath] = useState([]);
  const [mazeStatus, setMazeStatus] = useState("idle");

  const handleFindMazePath = () => {
    const n = mazeGrid.length;
    const path = [];
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));

    const solve = (r, c) => {
      if (r === n - 1 && c === n - 1) {
        path.push([r, c]);
        return true;
      }
      if (r < 0 || c < 0 || r >= n || c >= n || mazeGrid[r][c] === 0 || visited[r][c]) {
        return false;
      }

      visited[r][c] = true;
      path.push([r, c]);

      // Down
      if (solve(r + 1, c)) return true;
      // Right
      if (solve(r, c + 1)) return true;

      // Backtrack
      path.pop();
      return false;
    };

    if (solve(0, 0)) {
      setMazePath(path);
      setMazeStatus("found");
    } else {
      setMazePath([]);
      setMazeStatus("blocked");
    }
  };

  const toggleMazeCell = (r, c) => {
    if ((r === 0 && c === 0) || (r === mazeGrid.length - 1 && c === mazeGrid.length - 1)) return;
    const next = mazeGrid.map((row, ri) =>
      row.map((cell, ci) => (ri === r && ci === c ? (cell === 1 ? 0 : 1) : cell))
    );
    setMazeGrid(next);
    setMazePath([]);
    setMazeStatus("idle");
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 8: 20-QUESTION ASSESSMENT QUIZ
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    { id: 1, question: "1. What is recursion in computer programming?", options: ["A method that never returns", "A method calling itself to solve a smaller instance of the same problem", "A loop without a terminating condition", "A variable referencing another variable"], correct: 1, explanation: "Recursion is a programming technique where a method calls itself to solve progressively smaller subproblems until reaching a terminating base case." },
    { id: 2, question: "2. What is the primary role of a base case in a recursive method?", options: ["To initialize the method parameters", "The terminating condition that provides an answer directly without making another recursive call", "To print the final computation result", "To reset the JVM heap memory"], correct: 1, explanation: "The base case identifies when recursion must stop; without it, recursion continues indefinitely until a StackOverflowError occurs." },
    { id: 3, question: "3. Which runtime memory structure manages method invocations and activation frames?", options: ["Heap Memory", "Call Stack", "BlockingQueue", "ConcurrentHashMap"], correct: 1, explanation: "The call stack manages method invocations, allocating an activation frame for local variables and parameters on each call, and popping it on return." },
    { id: 4, question: "4. What runtime error is thrown when a thread exhausts its available call stack space due to infinite or excessively deep recursion?", options: ["OutOfMemoryError: Metaspace", "StackOverflowError", "NullPointerException", "ClassCastException"], correct: 1, explanation: "An excessively deep or non-terminating recursive descent continuously allocates stack frames until the thread stack is exhausted, throwing java.lang.StackOverflowError." },
    { id: 5, question: "5. Which recursive pattern is classified as tail recursion?", options: ["A recursive call followed by an addition or multiplication", "A recursive method where the recursive call is the final operation before returning", "Recursion with two distinct base cases", "Recursion that accepts no parameters"], correct: 1, explanation: "Tail recursion occurs when the recursive call is the absolute final statement executed in the method body, with zero pending computation remaining upon return." },
    { id: 6, question: "6. Does the standard HotSpot JVM guarantee tail-call optimization (TCO)?", options: ["Yes, for all methods", "No, standard Java HotSpot does not eliminate stack frames for tail-recursive calls", "Only for static methods in Java 21", "Only when using final methods"], correct: 1, explanation: "Java does not guarantee tail-call optimization in standard HotSpot JVM; converting to tail recursion does not prevent StackOverflowError in deep calls." },
    { id: 7, question: "7. What is mathematical induction used for in computer science?", options: ["Serializing objects to disk", "Proving that a property or algorithm holds true for all integers over a domain", "Allocating 2D arrays in heap memory", "Compiling Java bytecode to native machine code"], correct: 1, explanation: "Mathematical induction proves statements over integers using a base case and an inductive step, providing the mathematical proof foundation for recursive algorithm correctness." },
    { id: 8, question: "8. What is the very first step in a proof by mathematical induction?", options: ["The inductive hypothesis", "The base case (proving the statement holds for the initial integer)", "The complexity calculation", "The tail-call conversion"], correct: 1, explanation: "The base case proves that the proposition P(1) or P(0) holds true for the smallest valid starting value." },
    { id: 9, question: "9. In combinatorial permutations, does the relative ordering of elements matter?", options: ["Yes, order matters (ABC and CBA are completely distinct permutations)", "No, order is ignored", "Only for integer arrays", "Only when elements are unique"], correct: 0, explanation: "A permutation is an ordered arrangement; ABC, BAC, and CBA are different permutations because their element sequence differs." },
    { id: 10, question: "10. In combinatorial combinations, does the relative ordering of elements matter?", options: ["Yes, order is strictly preserved", "No, order does not matter (AB and BA represent the exact same combination)", "Only when selecting subsets of size 3", "Only with repetition allowed"], correct: 1, explanation: "A combination is an unordered selection; the groups {A, B} and {B, A} are identical combinations." },
    { id: 11, question: "11. How many total subsets (power set) does a set containing 4 distinct elements possess?", options: ["4", "8", "12", "16 (2^4)"], correct: 3, explanation: "For a set of n distinct elements, each element has 2 independent choices (include or exclude), yielding 2^n total subsets (2^4 = 16)." },
    { id: 12, question: "12. What is the defining characteristic of a subsequence compared to a substring?", options: ["It must always be contiguous", "It preserves original relative ordering but elements need not be contiguous", "It reverses the original text", "It contains only unique vowels"], correct: 1, explanation: "A subsequence preserves the relative left-to-right order of characters but allows zero or more intervening characters to be omitted (e.g. 'ACE' is a subsequence of 'ABCDE')." },
    { id: 13, question: "13. Which recursive decision pattern is foundational for generating all subsets and subsequences?", options: ["The Include-Exclude pattern (branching on whether to pick or omit the current element)", "The Push-Pop stack pattern", "Binary search halving", "Direct modular hashing"], correct: 0, explanation: "The include-exclude pattern branches twice at each element: one recursive branch includes the item, and the other excludes it." },
    { id: 14, question: "14. What is backtracking in algorithmic problem-solving?", options: ["Sorting an array backwards", "An exploratory strategy that makes a choice, explores recursively, and reverts (un-chooses) upon failure or completion", "Rerunning an entire program from main()", "Replacing loops with streams"], correct: 1, explanation: "Backtracking systematically searches a decision state space by choosing candidate options, recursively exploring them, and un-choosing (reverting state) when a dead-end is reached." },
    { id: 15, question: "15. What is pruning in a backtracking search tree?", options: ["Adding redundant recursive branches", "Immediately terminating and abandoning search branches that violate constraints and cannot lead to a valid solution", "Expanding the size of an array dynamically", "Garbage-collecting dead objects"], correct: 1, explanation: "Pruning evaluates constraints early on partial configurations, rejecting invalid branches without exploring their subtrees, drastically reducing search time." },
    { id: 16, question: "16. What is the core non-attacking constraint in the classic N-Queens problem?", options: ["Every queen must be on black squares", "No two queens may share the same row, column, or diagonal", "All queens must be placed in a straight line", "Queens can only move like knights"], correct: 1, explanation: "On an N x N chessboard, no two queens can attack each other, meaning no two queens can occupy the same row, column, or diagonal." },
    { id: 17, question: "17. In the standard N-Queens problem, how many queens are placed on an N x N board?", options: ["2N", "N - 1", "N (exactly one per row)", "N^2"], correct: 2, explanation: "Exactly N queens must be placed on an N x N board such that each row contains exactly one queen." },
    { id: 18, question: "18. Which three structural scopes must satisfy uniqueness (digits 1-9) in a standard Sudoku solver?", options: ["Rows, columns, and 3x3 subgrid boxes", "Diagonals, rows, and perimeter borders", "Corners, rows, and center lines", "Only rows and columns"], correct: 0, explanation: "A valid Sudoku board mandates that digits 1 through 9 appear without repetition in every row, every column, and each of the nine 3x3 subgrid boxes." },
    { id: 19, question: "19. Why is Breadth-First Search (BFS) preferred over Depth-First Search (DFS) for unweighted grid shortest-path problems?", options: ["BFS uses less memory than DFS", "BFS explores level-by-level, guaranteeing that the first time a destination is reached, the shortest path is found", "DFS cannot handle obstacles", "BFS avoids recursion stack frames entirely"], correct: 1, explanation: "In an unweighted graph or grid, BFS traverses outward in uniform distance ripples, guaranteeing that the first time target (R, C) is dequeued, it is along the minimum number of steps." },
    { id: 20, question: "20. What is the output-sensitive time complexity of generating and printing all subsets of an n-element array?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n * 2^n)"], correct: 3, explanation: "There are 2^n subsets, and printing/copying each subset requires up to O(n) operations, yielding an output-sensitive time complexity of O(n * 2^n)." },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 9: LABS & PRACTICAL TASKS CHECKLIST
  // ---------------------------------------------------------------------------
  const labsList = [
    { id: "lab-1", type: "Lab", title: "Recursive Fundamentals", goal: "Implement recursive factorial, sum, power, digit sum, and string reversal with explicit base-case assertions." },
    { id: "lab-2", type: "Lab", title: "Call Stack Tracing", goal: "Trace stack frames, draw activation diagrams for factorial(5), and demonstrate the stack unwinding return sequence." },
    { id: "lab-3", type: "Lab", title: "Mathematical Induction Proofs", goal: "Write rigorous formal induction proofs for arithmetic summations, power set size, and recursive correctness." },
    { id: "lab-4", type: "Lab", title: "Permutation Generator", goal: "Build recursive backtracking permutation generator for distinct and duplicate elements using used[] arrays." },
    { id: "lab-5", type: "Lab", title: "Combination Generator", goal: "Generate combinations of fixed size r without ordering, verifying against mathematical C(n, r) formulas." },
    { id: "lab-6", type: "Lab", title: "Subsets & Subsequences", goal: "Implement include-exclude recursive decision trees and compare performance against binary bitmask generation." },
    { id: "lab-7", type: "Lab", title: "N-Queens Solver", goal: "Solve 4-Queens and 8-Queens using 1-queen-per-row invariants, column tracking, and diagonal conflict math." },
    { id: "lab-8", type: "Lab", title: "Sudoku Backtracking Solver", goal: "Implement 9x9 Sudoku solver validating row, column, and 3x3 box constraints with recursive digit placement." },
    { id: "lab-9", type: "Lab", title: "Maze Pathfinding & Cycle Detection", goal: "Navigate 2D grid mazes using 4-direction recursive DFS with visited tracking and path reconstruction." },
    { id: "lab-10", type: "Lab", title: "Recurrence Relations & Master Theorem", goal: "Derive recurrence equations for halving vs branching algorithms and evaluate time/space bounds." },
    { id: "proj-1", type: "Project", title: "Recursive & Backtracking Problem Solver (Capstone)", goal: "Develop full interactive CLI solver unifying mathematics, combinatorics, N-Queens, Sudoku, and maze pathfinding." },
    { id: "proj-2", type: "Project", title: "Knight's Tour Solver", goal: "Implement Warnsdorff's heuristic for the Knight's Tour problem on an 8x8 chessboard using backtracking." },
    { id: "proj-3", type: "Project", title: "Word Search Grid Solver", goal: "Find words in a 2D Boggle grid with 8-directional backtracking and visited cell protections." },
    { id: "proj-4", type: "Project", title: "Graph M-Coloring Solver", goal: "Assign M colors to an undirected graph adjacency matrix avoiding adjacent color collisions." },
    { id: "proj-5", type: "Project", title: "Subset Sum & Partition Problem", goal: "Find exact subsets matching target sum with branch-and-bound pruning and memoized dynamic programming." },
  ];

  const [completedLabs, setCompletedLabs] = useState({});
  const toggleLab = (id) => {
    setCompletedLabs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 pb-16 selection:bg-orange-500/20 selection:text-orange-900 px-4 py-6 sm:px-8 sm:py-10 md:px-12">
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-[#e7e3da] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goBack()}
              className="p-1.5 rounded-lg border border-[#e7e3da] hover:bg-stone-100 text-stone-600 transition"
              title="Return to Track Overview"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <span className="font-semibold text-stone-800">Java Master Course</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-orange-600 font-bold">Module 6: Recursion, Backtracking & Math</span>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-[#f4f1ea] p-1 rounded-xl border border-[#e7e3da]">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-2xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              <span>Curriculum (33 Sections)</span>
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "workbench"
                  ? "bg-white text-stone-900 shadow-2xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Interactive Workbenches (9 Labs)</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* Module Header Hero */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 mb-8 border border-stone-800 shadow-lg relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-mono text-xs font-bold border border-orange-500/30">
                MODULE 6 · PHASE 1 CAPSTONE
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-medium border border-stone-700">
                14-16 Hours Study Time
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                Algorithmic Thinking & DSA Bridge
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Recursion, Backtracking & Mathematical Foundations
            </h1>
            <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
              Master recursive problem decomposition, call stack activation frames, recursion trees, tail recursion, mathematical induction, combinatorial permutations and combinations, include-exclude subset generation, and constraint-based backtracking algorithms (N-Queens, Sudoku, Rat in a Maze, and 4-Direction Grid Pathfinding).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setActiveTab("workbench");
                  setActiveWorkbenchTab("recursion-studio");
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 text-white font-semibold text-xs sm:text-sm hover:bg-orange-500 transition-colors shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Interactive Studios</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("workbench");
                  setActiveWorkbenchTab("quiz");
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-xs sm:text-sm hover:bg-stone-700 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Take 20 MCQs Exam</span>
              </button>
            </div>
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <ModuleNav
          track="java"
          courseId="java-programming"
          currentModuleId="recursion-backtracking"
          prevRoute="/learning/java/advanced"
          nextRoute="/learning/java/complexity-analysis"
        />

        {activeTab === "curriculum" ? (
          <div className="mt-8">
            <JavaRecursionSections />
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {/* WORKBENCH SUB-TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e7e3da] text-xs font-semibold [scrollbar-width:none]">
              {[
                { id: "recursion-studio", label: "1. Call Stack & Frame Unwinding", icon: Layers },
                { id: "tree-visualizer", label: "2. Recursion Tree & Memoization", icon: GitBranch },
                { id: "induction-lab", label: "3. Mathematical Induction Proofs", icon: Calculator },
                { id: "combinatorics-lab", label: "4. Permutations & Subsets", icon: Binary },
                { id: "nqueens-studio", label: "5. N-Queens Chessboard Solver", icon: Crown },
                { id: "sudoku-studio", label: "6. Sudoku Backtracking Solver", icon: Grid3X3 },
                { id: "maze-studio", label: "7. Rat in a Maze & Grid Pathfinding", icon: Footprints },
                { id: "quiz", label: "8. 20-Question Assessment Exam", icon: HelpCircle },
                { id: "labs", label: "9. Labs, Projects & Challenges Tracker", icon: Award },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeWorkbenchTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkbenchTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-orange-600 text-white font-bold shadow-xs"
                        : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 1. CALL STACK & FRAME UNWINDING STUDIO */}
            {activeWorkbenchTab === "recursion-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-orange-600" />
                        JVM Call Stack: Recursive Descent & Unwinding Phase Inspector
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        Step through activation frames to witness how recursive method calls are pushed onto the JVM thread stack and subsequently unwound to combine return values.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleResetStack}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50 flex items-center gap-1.5"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Controls */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="bg-[#fcfbf9] p-4 rounded-xl border border-stone-200 space-y-3">
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                          Algorithm & Input:
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => {
                              setStackOperation("factorial");
                              setCurrentStackStep(0);
                            }}
                            className={`py-2 px-3 rounded-lg text-xs font-bold border transition ${
                              stackOperation === "factorial"
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                            }`}
                          >
                            Factorial(n)
                          </button>
                          <button
                            onClick={() => {
                              setStackOperation("sum");
                              setCurrentStackStep(0);
                            }}
                            className={`py-2 px-3 rounded-lg text-xs font-bold border transition ${
                              stackOperation === "sum"
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                            }`}
                          >
                            NaturalSum(n)
                          </button>
                        </div>

                        <div>
                          <label className="text-xs text-stone-600 font-semibold flex justify-between mb-1">
                            <span>Input (n):</span>
                            <span className="font-mono text-orange-600 font-bold">{stackInputN}</span>
                          </label>
                          <input
                            type="range"
                            min="2"
                            max="6"
                            value={stackInputN}
                            onChange={(e) => {
                              setStackInputN(Number(e.target.value));
                              setCurrentStackStep(0);
                            }}
                            className="w-full accent-orange-600"
                          />
                        </div>

                        <div className="pt-2 flex items-center gap-2">
                          <button
                            disabled={currentStackStep === 0}
                            onClick={handlePrevStep}
                            className="flex-1 py-2 px-3 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40"
                          >
                            &larr; Back
                          </button>
                          <button
                            disabled={currentStackStep === stackAnimationSteps.length - 1}
                            onClick={handleNextStep}
                            className="flex-1 py-2 px-3 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-500 disabled:opacity-40 transition shadow-2xs"
                          >
                            Step Next &rarr;
                          </button>
                        </div>
                      </div>

                      {/* Explanation box */}
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                        <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                          JVM Call Stack Invariant:
                        </div>
                        Activation frames are pushed during <strong>recursive descent</strong> until reaching the base case. Then, during <strong>stack unwinding</strong>, frames pop in LIFO (Last-In, First-Out) reverse order, passing return values back to their callers.
                      </div>
                    </div>

                    {/* Stack Frames Display */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold text-stone-700 uppercase tracking-wider">
                        <span>Call Stack Frames (Top = Active Invocation)</span>
                        <span className="font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                          Phase: {currentStepData.phase} · Step {currentStackStep + 1} of {stackAnimationSteps.length}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-900 text-white font-mono text-xs space-y-2 min-h-[220px] flex flex-col justify-end border border-stone-800">
                        {currentStepData.frames.length === 0 ? (
                          <div className="m-auto text-center text-stone-400">
                            Stack is empty. Execution returned to main().
                          </div>
                        ) : (
                          currentStepData.frames.map((frame, idx) => (
                            <div
                              key={idx}
                              className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                                frame.state === "active"
                                  ? "bg-orange-950/80 border-orange-500 text-orange-200"
                                  : frame.state === "popping"
                                  ? "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                                  : "bg-stone-800/80 border-stone-700 text-stone-300"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white">{frame.call}</span>
                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-stone-700 text-stone-300">
                                  frame #{currentStepData.frames.length - idx}
                                </span>
                              </div>
                              <span className="text-xs text-stone-400">{frame.pending}</span>
                            </div>
                          ))
                        )}
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-800 font-mono">
                        <span className="text-orange-600 font-bold">&gt; Step Trace: </span>
                        {currentStepData.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. RECURSION TREE & MEMOIZATION */}
            {activeWorkbenchTab === "tree-visualizer" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <GitBranch className="w-5 h-5 text-orange-600" />
                      Recursion Tree Visualization: Naive O(2ⁿ) vs Memoized O(n) Fibonacci
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Inspect the exponential branching factor of binary recursion and observe how memoization prunes redundant subproblem recomputation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 space-y-4">
                      <div className="bg-[#fcfbf9] p-4 rounded-xl border border-stone-200 space-y-3">
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                          Fibonacci Parameter (n):
                        </label>
                        <div className="flex items-center gap-2">
                          {[2, 3, 4, 5].map((val) => (
                            <button
                              key={val}
                              onClick={() => setFibN(val)}
                              className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition ${
                                fibN === val
                                  ? "bg-orange-600 text-white border-orange-600"
                                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                              }`}
                            >
                              F({val})
                            </button>
                          ))}
                        </div>

                        <div>
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mt-3 mb-1">
                            Algorithm Mode:
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => setTreeMode("naive")}
                              className={`py-2 px-2 rounded-lg text-xs font-bold border transition ${
                                treeMode === "naive"
                                  ? "bg-rose-50 text-rose-900 border-rose-300"
                                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                              }`}
                            >
                              Naive O(2ⁿ)
                            </button>
                            <button
                              onClick={() => setTreeMode("memoized")}
                              className={`py-2 px-2 rounded-lg text-xs font-bold border transition ${
                                treeMode === "memoized"
                                  ? "bg-emerald-50 text-emerald-900 border-emerald-300"
                                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                              }`}
                            >
                              Memoized O(n)
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Stat summary card */}
                      <div className="p-4 rounded-xl bg-stone-900 text-white font-mono text-xs space-y-2">
                        <div className="text-stone-400 uppercase text-[10px] font-bold">Execution Metrics:</div>
                        <div>Target Result: <span className="text-orange-400 font-bold">F({fibStats.n}) = {fibStats.val}</span></div>
                        <div>Naive Call Count: <span className="text-rose-400 font-bold">{fibStats.naiveCalls} calls</span></div>
                        <div>Memoized Call Count: <span className="text-emerald-400 font-bold">{fibStats.memoCalls} calls</span></div>
                        <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 font-sans">
                          Memoization eliminates <strong>{fibStats.redundancy} redundant recursive calls</strong>.
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                      <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-3">
                        <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                          Recursion Tree Structure for F({fibN}):
                        </div>

                        {treeMode === "naive" ? (
                          <div className="p-4 rounded-xl bg-stone-950 text-stone-200 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                            <div className="text-stone-500 mb-2">// Full binary recursive tree without memoization</div>
                            {fibN === 4 && (
                              <pre>{`                  F(4)
                 /    \\
              F(3)    F(2)   <-- F(2) recomputed!
             /   \\     /  \\
          F(2)  F(1) F(1) F(0)
          /  \\
       F(1) F(0)`}</pre>
                            )}
                            {fibN === 3 && (
                              <pre>{`            F(3)
           /    \\
        F(2)    F(1)
       /   \\
    F(1)   F(0)`}</pre>
                            )}
                            {fibN === 2 && (
                              <pre>{`        F(2)
       /    \\
    F(1)    F(0)`}</pre>
                            )}
                            {fibN === 5 && (
                              <pre>{`                        F(5)
                       /    \\
                    F(4)    F(3)  <-- F(3) recomputed!
                   /   \\    /   \\
                 F(3)  F(2) F(2) F(1)
                 ...   ...  ...`}</pre>
                            )}
                          </div>
                        ) : (
                          <div className="p-4 rounded-xl bg-stone-950 text-stone-200 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                            <div className="text-emerald-400 mb-2">// Memoized linear recursion tree (O(n) calls)</div>
                            <pre>{`F(${fibN}) -> calls F(${fibN - 1}) -> calls F(${fibN - 2}) ...
When right-hand branches execute, memo[k] returns cached answer in O(1)!
Total distinct subproblems solved: exactly ${fibN + 1}.`}</pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. MATHEMATICAL INDUCTION PROOFS */}
            {activeWorkbenchTab === "induction-lab" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-orange-600" />
                      Mathematical Induction Proof Studio
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Understand the 4-step formal structure of mathematical induction and its exact equivalence to base cases and recursive hypotheses in program correctness proofs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 space-y-3">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                        Select Proposition P(n):
                      </label>
                      <div className="space-y-2">
                        {[
                          { id: "sumNatural", title: "Sum of First n Natural Numbers", formula: "1 + 2 + ... + n = n(n+1)/2" },
                          { id: "sumOdd", title: "Sum of First n Odd Integers", formula: "1 + 3 + ... + (2n-1) = n²" },
                          { id: "powerSet", title: "Power Set Size of Set with n Elements", formula: "|P(S)| = 2ⁿ" },
                        ].map((p) => (
                          <button
                            key={p.id}
                            onClick={() => setInductionProofType(p.id)}
                            className={`w-full text-left p-3 rounded-xl border transition ${
                              inductionProofType === p.id
                                ? "bg-orange-50 border-orange-300 text-orange-950 font-bold shadow-2xs"
                                : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                            }`}
                          >
                            <div className="text-xs font-bold">{p.title}</div>
                            <div className="text-[11px] text-stone-500 font-mono mt-0.5">{p.formula}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                      <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-4">
                        <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                          Formal Proof by Mathematical Induction:
                        </div>

                        {inductionProofType === "sumNatural" && (
                          <div className="space-y-3 text-xs leading-relaxed">
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 1 — Base Case (n = 1):</span>
                              <p className="text-stone-700">
                                LHS = 1. RHS = 1(1 + 1)/2 = 1. Since LHS = RHS, base case P(1) holds true.
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 2 — Inductive Hypothesis:</span>
                              <p className="text-stone-700">
                                Assume the statement is true for an arbitrary positive integer k: 1 + 2 + ... + k = k(k + 1)/2.
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 3 — Inductive Step (Prove for k + 1):</span>
                              <p className="text-stone-700 font-mono">
                                [1 + 2 + ... + k] + (k + 1) = k(k + 1)/2 + (k + 1)<br />
                                = (k + 1) [k/2 + 1] = (k + 1)(k + 2)/2.<br />
                                This matches the required form for (k + 1)!
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold">
                              Step 4 — Conclusion: By mathematical induction, P(n) holds for all n ≥ 1. Q.E.D.
                            </div>
                          </div>
                        )}

                        {inductionProofType === "sumOdd" && (
                          <div className="space-y-3 text-xs leading-relaxed">
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 1 — Base Case (n = 1):</span>
                              <p className="text-stone-700">LHS = 2(1) - 1 = 1. RHS = 1² = 1. P(1) holds true.</p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 2 — Inductive Hypothesis:</span>
                              <p className="text-stone-700">Assume 1 + 3 + ... + (2k - 1) = k² for an arbitrary integer k.</p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 3 — Inductive Step:</span>
                              <p className="text-stone-700 font-mono">
                                [1 + 3 + ... + (2k - 1)] + (2(k + 1) - 1) = k² + 2k + 1 = (k + 1)².
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold">
                              Step 4 — Conclusion: P(n) holds for all n ≥ 1.
                            </div>
                          </div>
                        )}

                        {inductionProofType === "powerSet" && (
                          <div className="space-y-3 text-xs leading-relaxed">
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 1 — Base Case (n = 0):</span>
                              <p className="text-stone-700">For empty set ∅, the only subset is ∅. |P(∅)| = 1 = 2⁰. P(0) holds.</p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 2 — Inductive Hypothesis:</span>
                              <p className="text-stone-700">Assume any set of size k has exactly 2ᵏ subsets.</p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                              <span className="font-bold text-orange-600 uppercase font-mono">Step 3 — Inductive Step:</span>
                              <p className="text-stone-700">
                                When adding element (k + 1), every existing subset can either exclude it or include it. Thus total subsets = 2 × 2ᵏ = 2^(k + 1).
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold">
                              Step 4 — Conclusion: An n-element set has exactly 2ⁿ subsets.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. COMBINATORICS & SUBSETS */}
            {activeWorkbenchTab === "combinatorics-lab" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Binary className="w-5 h-5 text-orange-600" />
                      Permutations, Combinations & Include-Exclude Subset Generator
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Generate permutations (order matters), combinations (order ignored), and the complete power set (2ⁿ subsets) via include-exclude recursion and binary bitmasks.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 space-y-4">
                      <div className="bg-[#fcfbf9] p-4 rounded-xl border border-stone-200 space-y-3">
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                          Generator Mode:
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {["subsets", "combinations", "permutations"].map((act) => (
                            <button
                              key={act}
                              onClick={() => setCombAction(act)}
                              className={`py-2 px-1 text-center rounded-lg text-xs font-bold border capitalize transition ${
                                combAction === act
                                  ? "bg-orange-600 text-white border-orange-600"
                                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                              }`}
                            >
                              {act}
                            </button>
                          ))}
                        </div>

                        {combAction === "combinations" && (
                          <div>
                            <label className="text-xs text-stone-600 font-semibold flex justify-between mb-1">
                              <span>Choose Size (r):</span>
                              <span className="font-mono text-orange-600 font-bold">{combR}</span>
                            </label>
                            <input
                              type="range"
                              min="1"
                              max={combInput.length}
                              value={combR}
                              onChange={(e) => setCombR(Number(e.target.value))}
                              className="w-full accent-orange-600"
                            />
                          </div>
                        )}
                      </div>

                      {/* Formulas Card */}
                      <div className="p-4 rounded-xl bg-stone-900 text-white font-mono text-xs space-y-2">
                        <div className="text-stone-400 uppercase text-[10px] font-bold">Combinatorial Formulas:</div>
                        <div>P(n, r) = n! / (n - r)! = <span className="text-orange-400">{combCalculations.pCount}</span></div>
                        <div>C(n, r) = n! / (r!(n - r)!) = <span className="text-amber-400">{combCalculations.cCount}</span></div>
                        <div>Subsets = 2ⁿ = <span className="text-emerald-400">{combCalculations.subCount}</span></div>
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                      <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold text-stone-800 uppercase tracking-wider">
                          <span>Generated Outputs ({combCalculations.results.length} total)</span>
                          <span className="font-mono text-stone-500">Elements: [{combInput.join(", ")}]</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
                          {combCalculations.results.map((res, i) => (
                            <div key={i} className="p-2.5 rounded-lg border bg-white text-xs font-mono text-stone-800 text-center shadow-2xs">
                              {res}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. N-QUEENS CHESSBOARD SOLVER */}
            {activeWorkbenchTab === "nqueens-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-orange-600" />
                      N-Queens Constraint Satisfaction Chessboard Solver
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Place N queens on an N × N chessboard such that no two queens share the same row, column, or diagonal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-4 space-y-4">
                      <div className="bg-[#fcfbf9] p-4 rounded-xl border border-stone-200 space-y-3">
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                          Board Size (N × N):
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {[4, 5, 6, 8].map((n) => (
                            <button
                              key={n}
                              onClick={() => setBoardN(n)}
                              className={`py-2 text-center rounded-lg text-xs font-bold border transition ${
                                boardN === n
                                  ? "bg-orange-600 text-white border-orange-600"
                                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                              }`}
                            >
                              {n}×{n}
                            </button>
                          ))}
                        </div>

                        <div className="pt-2">
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                            Available Solutions:
                          </label>
                          <div className="text-xs text-stone-600">
                            Total Valid Solutions: <strong className="text-orange-600">{nQueensSolutionList.length}</strong>
                          </div>
                          {nQueensSolutionList.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {nQueensSolutionList.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSelectQueenSolution(idx)}
                                  className={`px-2 py-1 rounded text-[11px] font-mono font-bold border ${
                                    selectedSolIdx === idx
                                      ? "bg-orange-600 text-white border-orange-600"
                                      : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                                  }`}
                                >
                                  #{idx + 1}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Conflict Math Card */}
                      <div className="p-4 rounded-xl bg-stone-900 text-white font-mono text-xs space-y-2">
                        <div className="text-stone-400 uppercase text-[10px] font-bold">Diagonal Conflict Check:</div>
                        <div className="text-emerald-400">Math.abs(r1 - r2) == Math.abs(c1 - c2)</div>
                        <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                          If row difference equals column difference, two queens share a diagonal! Pruning immediately rejects the move.
                        </p>
                      </div>
                    </div>

                    {/* Chessboard View */}
                    <div className="lg:col-span-8 flex flex-col items-center">
                      <div
                        className="grid border-2 border-stone-800 rounded-xl overflow-hidden shadow-md"
                        style={{
                          gridTemplateColumns: `repeat(${boardN}, minmax(0, 1fr))`,
                          width: `${Math.min(360, boardN * 56)}px`,
                          height: `${Math.min(360, boardN * 56)}px`,
                        }}
                      >
                        {Array.from({ length: boardN }).map((_, r) =>
                          Array.from({ length: boardN }).map((_, c) => {
                            const isDark = (r + c) % 2 === 1;
                            const hasQueen = queenColumns[r] === c;

                            return (
                              <div
                                key={`${r}-${c}`}
                                className={`flex items-center justify-center transition-all ${
                                  hasQueen
                                    ? "bg-orange-500 text-white"
                                    : isDark
                                    ? "bg-stone-700 text-stone-300"
                                    : "bg-stone-200 text-stone-700"
                                }`}
                              >
                                {hasQueen && <Crown className="w-5 h-5 drop-shadow-md animate-bounce" />}
                              </div>
                            );
                          })
                        )}
                      </div>
                      <div className="mt-3 text-xs text-stone-500 font-mono">
                        Placement Array: [{queenColumns.join(", ")}]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. SUDOKU BACKTRACKING SOLVER */}
            {activeWorkbenchTab === "sudoku-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <Grid3X3 className="w-5 h-5 text-orange-600" />
                        9 × 9 Sudoku Constraint Satisfaction Backtracking Solver
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        Witness multi-constraint pruning across rows, columns, and 3 × 3 subgrids as backtracking fills blank cells.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSolveSudoku}
                        disabled={sudokuSolved}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-500 transition shadow-sm disabled:opacity-50"
                      >
                        Solve with Backtracking
                      </button>
                      <button
                        onClick={handleResetSudoku}
                        className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                      >
                        Reset Board
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="grid grid-cols-9 border-2 border-stone-900 rounded-xl overflow-hidden shadow-md max-w-sm sm:max-w-md w-full aspect-square">
                      {sudokuGrid.map((row, r) =>
                        row.map((val, c) => {
                          const isInitial = initialSudokuGrid[r][c] !== 0;
                          const borderR = (r + 1) % 3 === 0 && r !== 8 ? "border-b-2 border-b-stone-900" : "border-b border-stone-300";
                          const borderC = (c + 1) % 3 === 0 && c !== 8 ? "border-r-2 border-r-stone-900" : "border-r border-stone-300";

                          return (
                            <div
                              key={`${r}-${c}`}
                              className={`flex items-center justify-center font-mono font-bold text-xs sm:text-base ${borderR} ${borderC} ${
                                isInitial
                                  ? "bg-stone-100 text-stone-950 font-black"
                                  : val !== 0
                                  ? "bg-orange-50 text-orange-600"
                                  : "bg-white text-stone-300"
                              }`}
                            >
                              {val !== 0 ? val : ""}
                            </div>
                          );
                        })
                      )}
                    </div>
                    {sudokuSolved && (
                      <div className="mt-4 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Sudoku solved! All row, column, and 3×3 box constraints satisfied.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 7. RAT IN A MAZE */}
            {activeWorkbenchTab === "maze-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <Footprints className="w-5 h-5 text-orange-600" />
                        Rat in a Maze: 2D Grid Pathfinding & Backtrack Explorer
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        Click on cells to toggle obstacles (wall vs open path). Run the recursive solver to observe DFS exploration and backtracking.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleFindMazePath}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-500 transition shadow-sm"
                      >
                        Find Path (DFS)
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-4">
                    <div className="grid grid-cols-4 border-2 border-stone-800 rounded-xl overflow-hidden shadow-md w-64 h-64">
                      {mazeGrid.map((row, r) =>
                        row.map((cell, c) => {
                          const isStart = r === 0 && c === 0;
                          const isEnd = r === mazeGrid.length - 1 && c === mazeGrid.length - 1;
                          const inPath = mazePath.some(([pr, pc]) => pr === r && pc === c);

                          return (
                            <button
                              key={`${r}-${c}`}
                              onClick={() => toggleMazeCell(r, c)}
                              className={`flex items-center justify-center font-mono font-bold text-xs border border-stone-300 transition-all ${
                                cell === 0
                                  ? "bg-stone-900 text-stone-500"
                                  : inPath
                                  ? "bg-orange-500 text-white"
                                  : isStart || isEnd
                                  ? "bg-emerald-100 text-emerald-900"
                                  : "bg-white text-stone-700 hover:bg-stone-100"
                              }`}
                            >
                              {isStart ? "S" : isEnd ? "E" : cell === 0 ? "■" : inPath ? "●" : ""}
                            </button>
                          );
                        })
                      )}
                    </div>

                    <div className="text-xs text-stone-600">
                      {mazeStatus === "found" && (
                        <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Path found from (0,0) to ({mazeGrid.length - 1},{mazeGrid.length - 1}) in {mazePath.length} steps!
                        </span>
                      )}
                      {mazeStatus === "blocked" && (
                        <span className="text-rose-700 font-bold flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4" /> All exploratory branches blocked! No valid path exists.
                        </span>
                      )}
                      {mazeStatus === "idle" && (
                        <span>Click cells to toggle walls (■), then click 'Find Path (DFS)'.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. 20-QUESTION ASSESSMENT EXAM */}
            {activeWorkbenchTab === "quiz" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-orange-600" />
                        Module 6 Assessment: 20 Multiple-Choice Questions
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Test your comprehension of recursive descent, call stacks, induction, permutations, combinations, subsets, pruning, and backtracking algorithms.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-xs font-semibold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg border">
                        Progress:{" "}
                        <strong className="text-orange-600">
                          {Object.keys(quizAnswers).length} / {quizQuestions.length}
                        </strong>
                      </div>
                      <button
                        onClick={() => setShowResults(!showResults)}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 transition-colors shadow-2xs"
                      >
                        {showResults ? "Hide Results" : "Submit / Check Score"}
                      </button>
                    </div>
                  </div>

                  {showResults && (
                    <div className="mb-6 p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between">
                      <div>
                        <div className="text-xs text-stone-400 font-mono">YOUR TOTAL EXAM SCORE:</div>
                        <div className="text-2xl font-black text-orange-400 font-mono">
                          {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </div>
                      </div>
                      <div className="text-xs text-stone-300 max-w-sm text-right">
                        {quizScore >= 16
                          ? "🎉 Exceptional mastery of recursion and backtracking! You have completed Phase 1 and are ready to advance to Data Structures and Algorithms."
                          : "Review the question explanations below and revisit the corresponding curriculum chapters."}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {quizQuestions.map((q) => {
                      const isAnswered = quizAnswers[q.id] !== undefined;
                      const selectedOpt = quizAnswers[q.id];
                      const isCorrect = selectedOpt === q.correct;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border transition-all ${
                            showResults
                              ? isCorrect
                                ? "bg-emerald-50/50 border-emerald-300"
                                : isAnswered
                                ? "bg-rose-50/50 border-rose-300"
                                : "bg-stone-50 border-stone-200"
                              : "bg-white border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <div className="font-semibold text-xs text-stone-900 mb-2.5">
                            {q.question}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedOpt === optIdx;
                              let optBtnClass = "bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700";

                              if (showResults) {
                                if (optIdx === q.correct) {
                                  optBtnClass = "bg-emerald-600 text-white font-bold border-emerald-600";
                                } else if (isSelected) {
                                  optBtnClass = "bg-rose-600 text-white font-bold border-rose-600";
                                }
                              } else if (isSelected) {
                                optBtnClass = "bg-orange-600 text-white font-bold border-orange-600";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)}
                                  className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between ${optBtnClass}`}
                                >
                                  <span>{opt}</span>
                                  {showResults && optIdx === q.correct && (
                                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {showResults && (
                            <div className="mt-3 p-3 rounded-lg bg-stone-100 text-[11px] text-stone-700 leading-relaxed">
                              <span className="font-bold text-stone-900">Explanation: </span>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 9. LABS, PROJECTS & CHALLENGES */}
            {activeWorkbenchTab === "labs" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-600" />
                      Labs, Independent Assignments & Mini-Project Tracker
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Track your hands-on coding implementations in your local IDE as you build recursive functions, permutation engines, and constraint-based backtracking applications.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {labsList.map((lab) => {
                      const isDone = completedLabs[lab.id] || false;
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
