import React, { useState, useMemo } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Award,
  CheckSquare,
  Square,
  Activity,
  Layers,
  Cpu,
  Search,
  Zap,
  Grid,
  Code2,
  GitBranch,
  Compass,
  Sliders
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS } from "./JavaProblemSolvingPatternsSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "In the Backtracking algorithmic template, what is the crucial purpose of the 'unchoose' operation?",
    options: [
      "To undo the mutation applied to the state so that subsequent branching choices explore a clean, uncorrupted state",
      "To delete the recursive call stack frame from JVM memory",
      "To free garbage collection heap space",
      "To check whether the base condition has been satisfied"
    ],
    correct: 0,
    explanation: "Backtracking modifies a shared mutable state before recursing. The unchoose step restores the state to its prior condition before the next loop iteration tests an alternate choice."
  },
  {
    id: 2,
    question: "In the N-Queens problem, how do the boolean arrays columns, diagonal1, and diagonal2 allow O(1) safety verification?",
    options: [
      "By mapping col, major diagonal (row - col + n - 1), and minor diagonal (row + col) to fixed array indices",
      "By executing binary search across the chessboard",
      "By hashing board coordinates into a HashMap",
      "By calculating the Euclidean distance between all queens"
    ],
    correct: 0,
    explanation: "Cells on the same major diagonal have constant (row - col), normalized to [0, 2n-2] by adding n - 1. Cells on the same minor diagonal have constant (row + col). Boolean lookup runs in O(1) time."
  },
  {
    id: 3,
    question: "How does Branch and Bound fundamentally differ from standard Backtracking?",
    options: [
      "Backtracking searches for valid solutions by pruning invalid states; Branch and Bound searches for an optimal solution by pruning branches whose optimistic bound cannot beat the best known result",
      "Backtracking uses queues, while Branch and Bound uses arrays",
      "Branch and Bound is only applicable to sorting algorithms",
      "Backtracking runs in polynomial time, while Branch and Bound is always exponential"
    ],
    correct: 0,
    explanation: "While Backtracking prunes states that violate feasibility constraints, Branch and Bound computes a mathematical bound (optimistic estimate) and prunes entire subtrees if they cannot possibly surpass the current best known optimal solution."
  },
  {
    id: 4,
    question: "What is the primary condition required for Binary Search on Answer to be applicable to an optimization problem?",
    options: [
      "The feasibility function must be monotonic over the search range (e.g. if capacity C is feasible, all capacities > C are also feasible)",
      "The input array must be pre-sorted in strictly descending order",
      "The problem must contain negative numbers",
      "The time complexity must be quadratic"
    ],
    correct: 0,
    explanation: "Binary Search on Answer requires monotonic feasibility: a clear dividing boundary exists where all candidate values on one side are feasible and all on the other side are infeasible, allowing half the range to be eliminated each step."
  },
  {
    id: 5,
    question: "In the Ship Packages within D Days problem, what are the initial boundaries [low, high] for the binary search range?",
    options: [
      "low = max(weights), high = sum(weights)",
      "low = 0, high = weights.length",
      "low = min(weights), high = max(weights)",
      "low = 1, high = D"
    ],
    correct: 0,
    explanation: "A ship must at minimum be able to hold the heaviest single package (max(weights)), otherwise that package could never be shipped. At maximum, a ship of capacity sum(weights) can deliver all packages in a single day."
  },
  {
    id: 6,
    question: "Why does a Monotonic Stack store array INDICES rather than element values when finding the Next Greater Element?",
    options: [
      "Storing indices allows updating the exact array positions of elements that found their next greater element and computing distances/spans",
      "Because Java Stack cannot store primitive integers",
      "Indices take less memory than values in Java",
      "Storing values causes StackOverflowError"
    ],
    correct: 0,
    explanation: "Indices uniquely identify where each element is located in the input array. This allows setting answer[index] = arr[i] and calculating width/span i - stack.peek() - 1 in histogram problems."
  },
  {
    id: 7,
    question: "In the Largest Rectangle in Histogram problem, why does the monotonic stack approach achieve O(N) linear time complexity?",
    options: [
      "Each bar index is pushed onto the stack exactly once and popped from the stack at most once",
      "Because the histogram is pre-sorted in ascending order",
      "Because it skips bars that are taller than the average",
      "Because it uses dynamic programming memoization"
    ],
    correct: 0,
    explanation: "Even though there is a nested while loop, every element enters the stack once and leaves the stack at most once across the entire algorithm, bounding total stack operations to 2N (amortized O(1) per element)."
  },
  {
    id: 8,
    question: "How does a Monotonic Queue implemented with ArrayDeque achieve O(N) time for Sliding Window Maximum of window size K?",
    options: [
      "By maintaining indices in decreasing order of value: evicting smaller elements from the back upon insertion and removing expired indices from the front",
      "By sorting the window using Arrays.sort() at each step",
      "By maintaining a balanced AVL tree of window elements",
      "By taking the average of the window endpoints"
    ],
    correct: 0,
    explanation: "The deque keeps indices sorted by value. An element entering the window renders any older, smaller elements permanently obsolete (they can never be the maximum), so they are pruned from the back in O(1) amortized time."
  },
  {
    id: 9,
    question: "Which algorithm is most appropriate for finding the shortest path from a single source in a directed graph with non-negative edge weights?",
    options: [
      "Dijkstra's Algorithm with a PriorityQueue in O((V + E) log V)",
      "Bellman-Ford Algorithm in O(VE)",
      "Floyd-Warshall Algorithm in O(V³)",
      "Prim's Algorithm in O(E log V)"
    ],
    correct: 0,
    explanation: "When all edge weights are non-negative, Dijkstra's greedy edge relaxation with a Min-PriorityQueue provides the optimal single-source shortest path in O((V + E) log V) time."
  },
  {
    id: 10,
    question: "In Kahn's Topological Sort algorithm, what does it signify if the number of processed vertices is strictly less than V?",
    options: [
      "The directed graph contains at least one cycle (it is not a DAG)",
      "The graph is disconnected into multiple components",
      "All edge weights are negative",
      "The graph is a binary search tree"
    ],
    correct: 0,
    explanation: "In Kahn's algorithm, vertices with in-degree 0 are queued and removed. Vertices involved in a directed cycle always retain an in-degree of at least 1, so they are never enqueued, resulting in fewer than V processed vertices."
  },
  {
    id: 11,
    question: "What is the amortized complexity per operation of Disjoint Set Union (DSU) when both Path Compression and Union by Size/Rank are used?",
    options: [
      "O(α(V)), where α is the inverse Ackermann function (effectively constant <= 4 for all practical universe scales)",
      "O(log V)",
      "O(V)",
      "O(1) strict worst-case"
    ],
    correct: 0,
    explanation: "Combining path compression (flattening tree depth during find) with union by size or rank keeps tree heights minimal, achieving an amortized time complexity of O(α(V)) per query."
  },
  {
    id: 12,
    question: "How can you determine whether an undirected graph is bipartite?",
    options: [
      "Perform BFS or DFS two-coloring; the graph is bipartite if and only if no two adjacent vertices are assigned the same color (it contains no odd cycles)",
      "Check whether the number of edges equals V - 1",
      "Run topological sort and check for cycles",
      "Verify that all vertex degrees are even"
    ],
    correct: 0,
    explanation: "A graph is bipartite if and only if its vertices can be partitioned into two sets such that all edges connect vertices between different sets. This is verified by 2-coloring via BFS/DFS without color conflicts."
  },
  {
    id: 13,
    question: "In Tree DP for Maximum Independent Set, what is the recurrence relation for take[u]?",
    options: [
      "take[u] = 1 + sum_{v in children(u)} skip[v]",
      "take[u] = 1 + sum_{v in children(u)} take[v]",
      "take[u] = max(skip[u], take[u - 1])",
      "take[u] = sum_{v in children(u)} max(take[v], skip[v])"
    ],
    correct: 0,
    explanation: "If node u is selected (weight 1), none of its direct children can be selected (since adjacent nodes cannot both be in an independent set). Thus, we must sum the skip[v] results of all its children."
  },
  {
    id: 14,
    question: "In algorithm correctness proofs, how does an Exchange Argument prove that a greedy choice is optimal?",
    options: [
      "It assumes an optimal solution differs from the greedy choice, and proves that swapping that choice for the greedy choice never degrades solution quality",
      "It exchanges the input array with a sorted duplicate",
      "It swaps recursive calls for iterative loops",
      "It exchanges time complexity for space complexity"
    ],
    correct: 0,
    explanation: "An exchange argument shows that any hypothetical optimal solution that deviates from the greedy algorithm can be transformed step-by-step into the greedy solution without reducing the objective value."
  },
  {
    id: 15,
    question: "How does a Difference Array allow multiple range updates [l, r] += x to be performed in O(1) time?",
    options: [
      "By applying diff[l] += x and diff[r + 1] -= x, then reconstructing the updated array via a single prefix sum sweep in O(N)",
      "By sorting the updates by value",
      "By using a 2D matrix of differences",
      "By dividing the array into sqrt(N) blocks"
    ],
    correct: 0,
    explanation: "A difference array marks the entry point of the addition (+x at l) and the cancellation point (-x at r + 1). Computing the cumulative prefix sum propagates the addition throughout [l, r] in one O(N) sweep."
  }
];

// --- 35 PRACTICE PROBLEMS & LABS TRACKER ---
const LAB_ASSIGNMENTS = [
  // Level 1: Pattern Recognition (1-8)
  { id: 1, tier: "Level 1", title: "N-Queens Solver (LeetCode 51)", desc: "Backtracking with O(1) diagonal collision lookup using boolean arrays." },
  { id: 2, tier: "Level 1", title: "Subsets & Combinations (LeetCode 78)", desc: "Recursive backtracking choose-explore-unchoose state generation." },
  { id: 3, tier: "Level 1", title: "Combination Sum (LeetCode 39)", desc: "Backtracking with pruning when candidate sum exceeds target." },
  { id: 4, tier: "Level 1", title: "Merge Sort Implementation", desc: "Divide and Conquer: divide in half, conquer singletons, merge sorted subarrays." },
  { id: 5, tier: "Level 1", title: "Search in Rotated Sorted Array (LeetCode 33)", desc: "Modified binary search determining which half is strictly sorted." },
  { id: 6, tier: "Level 1", title: "Koko Eating Bananas (LeetCode 875)", desc: "Binary Search on Answer: minimum eating speed K to finish piles in H hours." },
  { id: 7, tier: "Level 1", title: "Next Greater Element I (LeetCode 496)", desc: "Decreasing Monotonic Stack maintaining index lookups in O(N)." },
  { id: 8, tier: "Level 1", title: "Daily Temperatures (LeetCode 739)", desc: "Monotonic stack calculating index distance to next warmer temperature." },

  // Level 2: Advanced DS & Algorithms (9-17)
  { id: 9, tier: "Level 2", title: "Sliding Window Maximum (LeetCode 239)", desc: "Monotonic Queue with ArrayDeque storing indices in decreasing order in O(N)." },
  { id: 10, tier: "Level 2", title: "Largest Rectangle in Histogram (LeetCode 84)", desc: "Monotonic stack identifying left and right smaller boundaries in O(N)." },
  { id: 11, tier: "Level 2", title: "Trapping Rain Water (LeetCode 42)", desc: "Two pointers or monotonic stack bounded by boundary heights." },
  { id: 12, tier: "Level 2", title: "Aggressive Cows (SPOJ)", desc: "Binary Search on Answer + Greedy stall placement verification." },
  { id: 13, tier: "Level 2", title: "Course Schedule - Topo Sort (LeetCode 207)", desc: "Kahn's BFS in-degree queue or DFS 3-color cycle detection." },
  { id: 14, tier: "Level 2", title: "Network Delay Time (LeetCode 743)", desc: "Dijkstra's shortest path with Min-PriorityQueue on non-negative weights." },
  { id: 15, tier: "Level 2", title: "Redundant Connection (LeetCode 684)", desc: "Disjoint Set Union (DSU) detecting cycle-creating edges in undirected graph." },
  { id: 16, tier: "Level 2", title: "Is Graph Bipartite? (LeetCode 785)", desc: "BFS or DFS 2-coloring conflict detection (no odd cycles)." },
  { id: 17, tier: "Level 2", title: "Count of Smaller Numbers After Self (LeetCode 315)", desc: "Merge sort inversion counting or Fenwick Tree (BIT)." },

  // Level 3: Advanced Optimization & DP (18-26)
  { id: 18, tier: "Level 3", title: "Word Search II (LeetCode 212)", desc: "Trie + Backtracking grid search with branch pruning." },
  { id: 19, tier: "Level 3", title: "Sudoku Solver (LeetCode 37)", desc: "Backtracking with constraint propagation across row, col, and 3x3 box." },
  { id: 20, tier: "Level 3", title: "Traveling Salesman Problem (TSP)", desc: "Bitmask DP dp[mask][u] in O(N² 2ⁿ) with return edge closure." },
  { id: 21, tier: "Level 3", title: "Burst Balloons (LeetCode 312)", desc: "Interval DP: pick last balloon to burst in interval [l, r]." },
  { id: 22, tier: "Level 3", title: "House Robber III (LeetCode 337)", desc: "Tree DP: post-order state pair (take, skip) on binary tree in O(N)." },
  { id: 23, tier: "Level 3", title: "Longest Increasing Subsequence (LeetCode 300)", desc: "Patience sorting with binary search (Arrays.binarySearch) in O(N log N)." },
  { id: 24, tier: "Level 3", title: "Numbers At Most N (Digit DP)", desc: "Digit DP counting with tight prefix and non-leading-zero flags." },
  { id: 25, tier: "Level 3", title: "Corporate Flight Bookings (LeetCode 1109)", desc: "Difference Array range updates [l, r] += x with prefix sum accumulation." },
  { id: 26, tier: "Level 3", title: "Meeting Rooms II (Sweep Line)", desc: "Sweep Line interval event sorting (start vs end) tracking concurrent rooms." },

  // Level 4: Contest & Hard Multi-Pattern (27-35)
  { id: 27, tier: "Level 4", title: "Mo's Algorithm - Distinct Elements", desc: "Offline query sorting by sqrt-decomposition blocks in O((N + Q) sqrt(N))." },
  { id: 28, tier: "Level 4", title: "Shortest Path Visiting All Nodes (LeetCode 847)", desc: "BFS on state space (vertex, bitmask) for shortest traversal." },
  { id: 29, tier: "Level 4", title: "Split Array Largest Sum (LeetCode 410)", desc: "Binary Search on Answer + Greedy subarray partitioning." },
  { id: 30, tier: "Level 4", title: "Word Ladder (LeetCode 127)", desc: "Bidirectional BFS with HashSet for shortest transformation." },
  { id: 31, tier: "Level 4", title: "Maximum Subarray Sum with One Deletion (LeetCode 1186)", desc: "State-machine dynamic programming tracking 0 or 1 deletions." },
  { id: 32, tier: "Level 4", title: "Minimum Cost to Cut a Stick (LeetCode 1547)", desc: "Interval DP on cut coordinates." },
  { id: 33, tier: "Level 4", title: "Russian Doll Envelopes (LeetCode 354)", desc: "Sort width ascending, height descending; run O(N log N) LIS on heights." },
  { id: 34, tier: "Level 4", title: "Fast Modular Exponentiation & Fermat", desc: "Binary power aⁿ mod m and modular inverse for combinatorics." },
  { id: 35, tier: "Level 4", title: "Reservoir Sampling Stream Engine", desc: "Uniform 1/N streaming random sample with O(1) memory via 1/i replacement." }
];

export default function JavaProblemSolvingPatterns() {
  // Mode: "reader" (Curriculum sections) vs "workbenches" (Interactive Workbenches) vs "labs" (Practice Labs)
  const [activeMode, setActiveMode] = useState("workbenches");
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [activeWb, setActiveWb] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Quiz State
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Labs Tracker State
  const [completedLabs, setCompletedLabs] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_m21_labs");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleLab = (id) => {
    const next = completedLabs.includes(id)
      ? completedLabs.filter(item => item !== id)
      : [...completedLabs, id];
    setCompletedLabs(next);
    try {
      localStorage.setItem("prepspaces_m21_labs", JSON.stringify(next));
    } catch {
      // storage unavailable
    }
  };

  // --- WORKBENCH 1 STATE: Backtracking N-Queens ---
  const [nQueensSize, setNQueensSize] = useState(4);
  const nQueensSolutions = useMemo(() => {
    const n = nQueensSize;
    const solutions = [];
    const cols = new Array(n).fill(false);
    const d1 = new Array(2 * n - 1).fill(false);
    const d2 = new Array(2 * n - 1).fill(false);
    const board = Array.from({ length: n }, () => new Array(n).fill('.'));

    function solve(row) {
      if (row === n) {
        solutions.push(board.map(r => r.join('')));
        return;
      }
      for (let col = 0; col < n; col++) {
        const diag1 = row - col + n - 1;
        const diag2 = row + col;
        if (cols[col] || d1[diag1] || d2[diag2]) continue;

        board[row][col] = 'Q';
        cols[col] = d1[diag1] = d2[diag2] = true;
        solve(row + 1);
        board[row][col] = '.';
        cols[col] = d1[diag1] = d2[diag2] = false;
      }
    }
    solve(0);
    return { count: solutions.length, firstSolution: solutions[0] || [] };
  }, [nQueensSize]);

  // --- WORKBENCH 2 STATE: Binary Search on Answer ---
  const [shipPackages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [shipDays, setShipDays] = useState(5);

  const shipResult = useMemo(() => {
    const weights = shipPackages;
    const days = shipDays;
    let low = Math.max(...weights);
    let high = weights.reduce((a, b) => a + b, 0);

    const check = (cap) => {
      let required = 1;
      let cur = 0;
      for (const w of weights) {
        if (cur + w > cap) {
          required++;
          cur = 0;
        }
        cur += w;
      }
      return required <= days;
    };

    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2);
      if (check(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return { minCapacity: low, minBound: Math.max(...weights), maxBound: weights.reduce((a, b) => a + b, 0) };
  }, [shipPackages, shipDays]);

  // --- WORKBENCH 3 STATE: Monotonic Stack ---
  const [ngeInput] = useState([4, 5, 2, 10, 8]);
  const ngeResult = useMemo(() => {
    const arr = ngeInput;
    const ans = new Array(arr.length).fill(-1);
    const stack = []; // indices

    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        const popped = stack.pop();
        ans[popped] = arr[i];
      }
      stack.push(i);
    }
    return ans;
  }, [ngeInput]);

  // --- WORKBENCH 4 STATE: Monotonic Queue ---
  const [mqArray] = useState([1, 3, -1, -3, 5, 3, 6, 7]);
  const [mqWindowK, setMqWindowK] = useState(3);

  const mqResult = useMemo(() => {
    const arr = mqArray;
    const k = mqWindowK;
    const result = [];
    const deque = []; // indices

    for (let i = 0; i < arr.length; i++) {
      while (deque.length > 0 && deque[0] <= i - k) {
        deque.shift();
      }
      while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
        deque.pop();
      }
      deque.push(i);
      if (i >= k - 1) {
        result.push(arr[deque[0]]);
      }
    }
    return result;
  }, [mqArray, mqWindowK]);

  // --- WORKBENCH 5 STATE: Graph Pattern Classifier ---
  const [hasWeights, setHasWeights] = useState(true);
  const [hasNegatives, setHasNegatives] = useState(false);
  const [isDAG, setIsDAG] = useState(false);

  const graphRecommendation = useMemo(() => {
    if (!hasWeights) {
      return {
        algo: "Breadth-First Search (BFS)",
        complexity: "O(V + E)",
        reason: "Unweighted shortest paths are guaranteed by exploring level by level with a FIFO queue."
      };
    }
    if (isDAG) {
      return {
        algo: "DAG Shortest Paths via Topological Sort",
        complexity: "O(V + E)",
        reason: "Directed Acyclic Graphs allow linear edge relaxation in topological order, even with negative weights."
      };
    }
    if (hasNegatives) {
      return {
        algo: "Bellman-Ford Algorithm",
        complexity: "O(V × E)",
        reason: "Handles negative edge weights and reliably detects reachable negative cycles across V - 1 passes."
      };
    }
    return {
      algo: "Dijkstra's Algorithm (Min-PriorityQueue)",
      complexity: "O((V + E) log V)",
      reason: "Optimal greedy single-source shortest path for non-negative weighted graphs."
    };
  }, [hasWeights, hasNegatives, isDAG]);

  // --- WORKBENCH 6 STATE: Tree DP Maximum Independent Set ---
  const [treeIS] = useState({
    id: 1, val: 1,
    children: [
      { id: 2, val: 1, children: [{ id: 4, val: 1, children: [] }, { id: 5, val: 1, children: [] }] },
      { id: 3, val: 1, children: [] }
    ]
  });

  const treeISResult = useMemo(() => {
    function dfs(node) {
      if (!node) return { take: 0, skip: 0 };
      let take = 1;
      let skip = 0;
      for (const child of node.children) {
        const childRes = dfs(child);
        take += childRes.skip;
        skip += Math.max(childRes.take, childRes.skip);
      }
      return { take, skip };
    }
    const res = dfs(treeIS);
    return { maxSetSize: Math.max(res.take, res.skip), rootTake: res.take, rootSkip: res.skip };
  }, [treeIS]);

  // --- WORKBENCH 7 STATE: Difference Array ---
  const [diffBase] = useState([0, 0, 0, 0, 0]);
  const [rangeUpdateVal, setRangeUpdateVal] = useState(5);

  const diffResult = useMemo(() => {
    const n = diffBase.length;
    const diff = new Array(n + 1).fill(0);
    // Apply update [1, 3] += val
    const l = 1, r = 3;
    diff[l] += rangeUpdateVal;
    diff[r + 1] -= rangeUpdateVal;

    // Prefix sum recovery
    const recovered = new Array(n).fill(0);
    let cur = 0;
    for (let i = 0; i < n; i++) {
      cur += diff[i];
      recovered[i] = cur;
    }
    return { diffArray: diff.slice(0, n + 1), recovered };
  }, [diffBase, rangeUpdateVal]);

  // --- WORKBENCH 8 STATE: Mo's Sqrt-Decomposition Simulator ---
  const [moQueries] = useState([
    { id: 1, l: 1, r: 4 },
    { id: 2, l: 0, r: 2 },
    { id: 3, l: 2, r: 5 },
    { id: 4, l: 3, r: 4 }
  ]);

  const moSortedQueries = useMemo(() => {
    const n = 6;
    const blockSize = Math.max(1, Math.floor(Math.sqrt(n)));
    const sorted = [...moQueries].sort((a, b) => {
      const b1 = Math.floor(a.l / blockSize);
      const b2 = Math.floor(b.l / blockSize);
      if (b1 !== b2) return b1 - b2;
      return a.r - b.r;
    });
    return { blockSize, sorted };
  }, [moQueries]);

  // Filtered curriculum sections
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS;
    const q = searchTerm.toLowerCase();
    return JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS.filter(
      s => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const activeSection = useMemo(() => {
    return JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS.find(s => s.id === activeSectionId) || JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS[0];
  }, [activeSectionId]);

  // Quiz score
  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navigation Bar */}
      <ModuleNav
        currentModuleId="problem-solving-patterns"
        track="java"
        totalModules={24}
        accentColor="indigo"
        prevRoute="/learning/java/advanced-dp"
        nextRoute="/learning/java/collections-jvm"
      />

      {/* Hero Banner */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-indigo-950/30 via-slate-900/40 to-slate-950 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5" />
              Module 21 — Master Problem Solving Track
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
              Advanced Problem-Solving Patterns
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed">
              Synthesize your complete Java & DSA foundation into unified patterns: Backtracking pruning, Branch and Bound, Binary Search on Answer, Monotonic Stacks & Queues, Tree DP, Greedy Proofs, Difference Arrays, and Offline Mo's Algorithm.
            </p>
          </div>

          {/* Quick Metrics & Quiz Launcher */}
          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs">
              <div className="text-right">
                <span className="text-slate-400 block text-[10px]">Practice Labs</span>
                <span className="font-bold text-emerald-400">{completedLabs.length} / 35 Complete</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>

            <button
              onClick={() => setShowQuizModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium text-xs md:text-sm shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
            >
              <Award className="w-4 h-4" />
              Take Assessment Quiz ({QUIZ_QUESTIONS.length} MCQs)
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="max-w-7xl mx-auto mt-8 flex items-center gap-2 border-b border-slate-800">
          <button
            onClick={() => setActiveMode("workbenches")}
            className={`px-5 py-2.5 text-xs md:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeMode === "workbenches"
                ? "border-indigo-500 text-indigo-400 bg-indigo-500/10 rounded-t-lg"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Activity className="w-4 h-4" />
            8 Interactive Workbenches
          </button>
          <button
            onClick={() => setActiveMode("reader")}
            className={`px-5 py-2.5 text-xs md:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeMode === "reader"
                ? "border-indigo-500 text-indigo-400 bg-indigo-500/10 rounded-t-lg"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Curriculum Reader (22 Sections)
          </button>
          <button
            onClick={() => setActiveMode("labs")}
            className={`px-5 py-2.5 text-xs md:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeMode === "labs"
                ? "border-indigo-500 text-indigo-400 bg-indigo-500/10 rounded-t-lg"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            35 Practice Labs Tracker
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        {/* VIEW 1: INTERACTIVE WORKBENCHES */}
        {activeMode === "workbenches" && (
          <div className="space-y-6">
            {/* Workbench Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {[
                { id: 1, name: "1. N-Queens Solver", icon: Grid },
                { id: 2, name: "2. Binary Search Ans", icon: Search },
                { id: 3, name: "3. Monotonic Stack", icon: Layers },
                { id: 4, name: "4. Monotonic Queue", icon: Sliders },
                { id: 5, name: "5. Graph Classifier", icon: Compass },
                { id: 6, name: "6. Tree DP (Set)", icon: GitBranch },
                { id: 7, name: "7. Difference Array", icon: Code2 },
                { id: 8, name: "8. Mo's Sqrt Decomp", icon: Cpu }
              ].map(wb => {
                const IconComponent = wb.icon;
                const isSel = activeWb === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWb(wb.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                      isSel
                        ? "bg-indigo-600/20 border-indigo-500/70 text-indigo-300 shadow-md shadow-indigo-600/10"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isSel ? "text-indigo-400" : "text-slate-400"}`} />
                    <span className="text-xs font-semibold leading-tight">{wb.name}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: Backtracking N-Queens */}
            {activeWb === 1 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Grid className="w-5 h-5 text-indigo-400" />
                      Workbench 1: Backtracking & N-Queens Visualizer
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      O(1) diagonal conflict verification using <code className="text-indigo-300 font-mono">d1[r - c + n - 1]</code> and <code className="text-indigo-300 font-mono">d2[r + c]</code>.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span>Board Size N:</span>
                    <input
                      type="range"
                      min="4"
                      max="8"
                      value={nQueensSize}
                      onChange={(e) => setNQueensSize(Number(e.target.value))}
                      className="w-24 accent-indigo-500"
                    />
                    <span className="text-indigo-400 font-bold">{nQueensSize} × {nQueensSize}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                    <span className="text-xs font-mono text-slate-400 block uppercase">Placement Metrics</span>
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                      {nQueensSolutions.count} Valid Solutions
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Placing one queen per row. Any candidate column with boolean collision on column array or diagonals is immediately pruned.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-2">First Discovered Arrangement</div>
                    <div className="inline-block p-2 bg-slate-900 rounded-lg border border-slate-800">
                      {nQueensSolutions.firstSolution.map((rowStr, r) => (
                        <div key={r} className="flex gap-1 my-1">
                          {rowStr.split('').map((cell, c) => (
                            <span
                              key={c}
                              className={`w-7 h-7 flex items-center justify-center font-mono text-xs font-bold rounded ${
                                cell === 'Q'
                                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
                                  : (r + c) % 2 === 0
                                  ? "bg-slate-800 text-slate-400"
                                  : "bg-slate-850 text-slate-400"
                              }`}
                            >
                              {cell === 'Q' ? '♛' : '·'}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: Binary Search on Answer */}
            {activeWb === 2 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Search className="w-5 h-5 text-indigo-400" />
                      Workbench 2: Binary Search on Answer (Capacity to Ship Packages)
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      Searching over monotonic feasibility range <code className="text-indigo-300 font-mono">[max(weights), sum(weights)]</code> in O(N log S).
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span>Deadline (Days D):</span>
                    <input
                      type="range"
                      min="2"
                      max="10"
                      value={shipDays}
                      onChange={(e) => setShipDays(Number(e.target.value))}
                      className="w-24 accent-indigo-500"
                    />
                    <span className="text-indigo-400 font-bold">{shipDays} Days</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Minimum Ship Capacity:</span>
                    <div className="text-3xl font-extrabold text-white font-mono mt-1">{shipResult.minCapacity} kg/day</div>
                  </div>
                  <div className="text-right text-xs text-slate-400 font-mono space-y-1">
                    <div>Lower Bound (max package): <span className="text-indigo-400">{shipResult.minBound}</span></div>
                    <div>Upper Bound (sum of packages): <span className="text-emerald-400">{shipResult.maxBound}</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: Monotonic Stack */}
            {activeWb === 3 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-400" />
                    Workbench 3: Monotonic Stack Studio (Next Greater Element)
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Decreasing monotonic stack storing array indices: each element enters and exits the stack at most once for linear O(N) evaluation.
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {ngeInput.map((val, idx) => (
                    <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center space-y-1">
                      <span className="text-[10px] text-slate-400 font-mono">idx: {idx}</span>
                      <div className="text-xl font-mono font-bold text-white">{val}</div>
                      <span className="text-xs font-mono font-bold text-emerald-400 block">
                        NGE: {ngeResult[idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 4: Monotonic Queue */}
            {activeWb === 4 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-indigo-400" />
                      Workbench 4: Monotonic Queue (Sliding Window Maximum)
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      Double-ended ArrayDeque maintaining decreasing values by evicting smaller items from rear in O(N).
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span>Window K:</span>
                    <input
                      type="range"
                      min="2"
                      max="5"
                      value={mqWindowK}
                      onChange={(e) => setMqWindowK(Number(e.target.value))}
                      className="w-20 accent-indigo-500"
                    />
                    <span className="text-indigo-400 font-bold">K = {mqWindowK}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-slate-400">Input Array: [{mqArray.join(", ")}]</div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {mqResult.map((maxVal, idx) => (
                      <div key={idx} className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg font-mono text-xs">
                        <span className="text-[10px] text-slate-400 block">Window {idx}</span>
                        <span className="text-sm font-bold text-emerald-400">Max = {maxVal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: Graph Classifier */}
            {activeWb === 5 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-indigo-400" />
                    Workbench 5: Graph Algorithm Classifier & Decision Matrix
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Toggle constraint properties to inspect the recommended graph algorithm and theoretical reasoning.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setHasWeights(!hasWeights)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-mono ${
                      hasWeights ? "bg-indigo-600/30 border-indigo-500 text-indigo-300" : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}
                  >
                    Weighted Edges: {hasWeights ? "YES" : "NO (Unweighted)"}
                  </button>

                  <button
                    onClick={() => setHasNegatives(!hasNegatives)}
                    disabled={!hasWeights}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-mono disabled:opacity-30 ${
                      hasNegatives ? "bg-indigo-600/30 border-indigo-500 text-indigo-300" : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}
                  >
                    Negative Weights: {hasNegatives ? "YES" : "NO"}
                  </button>

                  <button
                    onClick={() => setIsDAG(!isDAG)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-mono ${
                      isDAG ? "bg-indigo-600/30 border-indigo-500 text-indigo-300" : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}
                  >
                    Acyclic (DAG): {isDAG ? "YES" : "NO"}
                  </button>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase">Recommended Architecture</span>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">{graphRecommendation.algo}</div>
                  <div className="text-xs font-mono text-indigo-400">Complexity: {graphRecommendation.complexity}</div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">{graphRecommendation.reason}</p>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: Tree DP */}
            {activeWb === 6 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-indigo-400" />
                    Workbench 6: Tree DP (Maximum Independent Set)
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Post-order DFS state vector: <code className="text-indigo-300 font-mono">take[u] = 1 + sum(skip[c])</code> and <code className="text-indigo-300 font-mono">skip[u] = sum(max(take, skip))</code>.
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Maximum Independent Set Size:</span>
                    <div className="text-3xl font-extrabold text-white font-mono mt-1">{treeISResult.maxSetSize} Nodes</div>
                  </div>
                  <div className="text-right text-xs text-slate-400 font-mono space-y-1">
                    <div>Root Take: <span className="text-indigo-400">{treeISResult.rootTake}</span></div>
                    <div>Root Skip: <span className="text-emerald-400">{treeISResult.rootSkip}</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 7: Difference Array */}
            {activeWb === 7 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-indigo-400" />
                      Workbench 7: Difference Array Range Updates
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      O(1) range additions via <code className="text-indigo-300 font-mono">diff[l] += x; diff[r+1] -= x;</code> with prefix sum recovery.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span>Range Add Value (+x on [1, 3]):</span>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={rangeUpdateVal}
                      onChange={(e) => setRangeUpdateVal(Number(e.target.value))}
                      className="w-20 accent-indigo-500"
                    />
                    <span className="text-indigo-400 font-bold">+{rangeUpdateVal}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-xs font-mono text-slate-400 block mb-2">Difference Array diff[0 ... 5]:</span>
                    <div className="flex gap-2">
                      {diffResult.diffArray.map((v, i) => (
                        <div key={i} className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-center">
                          <span className="block text-[8px] text-slate-400">{i}</span>
                          <span className="font-bold text-indigo-300">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-xs font-mono text-slate-400 block mb-2">Recovered Array via Prefix Sum:</span>
                    <div className="flex gap-2">
                      {diffResult.recovered.map((v, i) => (
                        <div key={i} className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-center">
                          <span className="block text-[8px] text-slate-400">{i}</span>
                          <span className="font-bold text-emerald-400">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 8: Mo's Algorithm */}
            {activeWb === 8 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-400" />
                    Workbench 8: Mo's Algorithm Offline Query Sqrt-Decomposition
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Sorting queries by <code className="text-indigo-300 font-mono">block(L) = L / sqrt(N)</code> balances pointer movement to O((N + Q) sqrt(N)).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase">Original Arrival Order</span>
                    <div className="space-y-1">
                      {moQueries.map(q => (
                        <div key={q.id} className="text-xs font-mono bg-slate-900 p-2 rounded border border-slate-800">
                          Q#{q.id}: [{q.l}, {q.r}]
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase">
                      Mo's Reordered Processing (Block Size = {moSortedQueries.blockSize})
                    </span>
                    <div className="space-y-1">
                      {moSortedQueries.sorted.map((q, idx) => (
                        <div key={q.id} className="text-xs font-mono bg-emerald-950/20 border border-emerald-500/40 p-2 rounded text-emerald-300 flex justify-between">
                          <span>Step {idx + 1}: Q#{q.id} [{q.l}, {q.r}]</span>
                          <span className="text-slate-400 text-[10px]">block: {Math.floor(q.l / moSortedQueries.blockSize)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: CURRICULUM READER */}
        {activeMode === "reader" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Sidebar Table of Contents */}
            <div className="lg:col-span-1 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sticky top-4 max-h-[85vh] flex flex-col gap-3 dark-scrollbar">
              <div className="flex items-center gap-2 px-1">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="overflow-y-auto space-y-1 pr-1 custom-scrollbar dark-scrollbar">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    title={sec.title}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-start gap-2 ${
                      activeSectionId === sec.id
                        ? "bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-slate-400 mt-0.5 shrink-0">{sec.id}.</span>
                    <span className="break-words whitespace-normal leading-snug flex-1">{sec.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                  {activeSection.id === 0
                    ? "Module Overview · 22 Core Sections"
                    : `Section ${activeSection.id} of 22`}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {activeSection.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  {activeSection.summary}
                </p>
              </div>

              {/* Render Section Content */}
              <div className="prose prose-invert max-w-none text-slate-300 text-xs md:text-sm leading-relaxed">
                {activeSection.content}
              </div>

              {/* Bottom Pagination */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                <button
                  disabled={activeSectionId <= 0}
                  onClick={() => setActiveSectionId(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-950 text-xs font-medium text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-slate-700 flex items-center gap-1.5 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous Section
                </button>
                <button
                  disabled={activeSectionId >= JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS.length - 1}
                  onClick={() => setActiveSectionId(prev => Math.min(JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition shadow-md shadow-indigo-600/20"
                >
                  Next Section <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: 35 PRACTICE LABS TRACKER */}
        {activeMode === "labs" && (
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-4 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-indigo-400" />
                    35 Advanced Problem-Solving Patterns Labs
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Track your implementation progress across 4 curated levels from backtracking to competitive programming.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-emerald-400 font-bold block">
                    {completedLabs.length} / 35 Solved ({Math.round((completedLabs.length / 35) * 100)}%)
                  </span>
                  <div className="w-36 bg-slate-800 h-2 rounded-full overflow-hidden mt-1.5">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-300"
                      style={{ width: `${(completedLabs.length / 35) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lab Cards Grouped by Tier */}
              {["Level 1", "Level 2", "Level 3", "Level 4"].map(tier => {
                const tierLabs = LAB_ASSIGNMENTS.filter(l => l.tier === tier);
                const tierDone = tierLabs.filter(l => completedLabs.includes(l.id)).length;
                return (
                  <div key={tier} className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        {tier} ({tierDone}/{tierLabs.length})
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tierLabs.map(lab => {
                        const isDone = completedLabs.includes(lab.id);
                        return (
                          <div
                            key={lab.id}
                            onClick={() => toggleLab(lab.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                              isDone
                                ? "bg-emerald-950/20 border-emerald-500/40 text-slate-200"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300"
                            }`}
                          >
                            <button className="mt-0.5 text-slate-400 hover:text-white">
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400" />
                              )}
                            </button>
                            <div className="space-y-1">
                              <div className="text-xs font-semibold text-white flex items-center gap-2">
                                <span className="text-slate-400 font-mono text-[10px]">#{lab.id}</span>
                                {lab.title}
                              </div>
                              <p className="text-[11px] text-slate-400 leading-relaxed">
                                {lab.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ASSESSMENT QUIZ MODAL */}
      {showQuizModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  Module 21 Mastery Assessment Quiz
                </h3>
                <p className="text-xs text-slate-400">15 Scenario-based Pattern Recognition Questions</p>
              </div>
              <button
                onClick={() => setShowQuizModal(false)}
                className="text-slate-400 hover:text-white text-xs px-2.5 py-1 rounded-lg bg-slate-800"
              >
                Close
              </button>
            </div>

            {/* Questions List */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userChoice = quizAnswers[q.id];
                return (
                  <div key={q.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-xs md:text-sm font-semibold text-white flex items-start gap-2">
                      <span className="font-mono text-indigo-400">Q{idx + 1}.</span>
                      <span>{q.question}</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        let optClass = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";
                        if (quizSubmitted) {
                          if (optIdx === q.correct) optClass = "bg-emerald-950/40 border-emerald-500 text-emerald-300 font-semibold";
                          else if (isSelected) optClass = "bg-red-950/40 border-red-500 text-red-300";
                        } else if (isSelected) {
                          optClass = "bg-indigo-600/30 border-indigo-500 text-indigo-300 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center gap-2.5 ${optClass}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-mono shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                        <div className="font-semibold text-emerald-400">Explanation:</div>
                        <p className="text-slate-400 text-[11px] leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
              {quizSubmitted ? (
                <div className="text-xs font-mono">
                  Your Score: <strong className="text-emerald-400 text-sm">{quizScore} / {QUIZ_QUESTIONS.length}</strong> ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </div>
              ) : (
                <div className="text-xs text-slate-400">
                  {Object.keys(quizAnswers).length} of {QUIZ_QUESTIONS.length} answered
                </div>
              )}

              <div className="flex items-center gap-2">
                {quizSubmitted ? (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-700 transition"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white disabled:opacity-40 transition shadow-lg shadow-indigo-600/20"
                  >
                    Submit Answers
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
