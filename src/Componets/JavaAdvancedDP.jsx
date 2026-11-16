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
  Database,
  Sparkles,
  Code2,
  GitBranch,
  Binary
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_ADVANCED_DP_SECTIONS } from "./JavaAdvancedDPSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What does the term 'pseudopolynomial time' mean in the context of the 0/1 Knapsack DP algorithm with complexity O(nW)?",
    options: [
      "The runtime is polynomial with respect to the numeric value of capacity W, but exponential with respect to the input length in bits (log W)",
      "The algorithm is only an approximation and does not yield an exact solution",
      "The algorithm runs in polynomial time on average but factorial time in the worst case",
      "The algorithm uses pseudo-random number generators during table initialization"
    ],
    correct: 0,
    explanation: "An algorithm is pseudopolynomial if its runtime is polynomial in the numeric values of the input (capacity W), but exponential in the length of the input representation in bits (which is proportional to log W)."
  },
  {
    id: 2,
    question: "In Multi-Dimensional DP, when is adding an extra dimension justified?",
    options: [
      "Only when an independent constraint or condition directly changes future permitted choices or optimal payoff",
      "Whenever the input has more than 100 elements",
      "Whenever the problem uses recursion",
      "To make the DP table symmetric"
    ],
    correct: 0,
    explanation: "Every DP dimension must represent necessary historical state that affects future choices or constraints (e.g. remaining capacity, holding stock, transactions left). Adding dimensions unnecessarily exponentially inflates memory and transition time."
  },
  {
    id: 3,
    question: "In Grid DP with obstacles where obstacle cells are marked with 1, how is the state transition modified?",
    options: [
      "For any blocked cell (i, j), set dp[i][j] = 0, so no paths can enter or propagate through that cell",
      "Set dp[i][j] = -1 and backtrack",
      "Subtract 1 from all neighboring cells",
      "Remove the entire row and column containing the obstacle"
    ],
    correct: 0,
    explanation: "A blocked cell cannot be stepped on, meaning there are 0 valid ways to arrive at it: dp[i][j] = 0. Its adjacent downstream cells will therefore receive 0 contributions from this blocked route."
  },
  {
    id: 4,
    question: "What is the fundamental difference between Longest Common Subsequence (LCS) and Longest Common Substring?",
    options: [
      "Substring elements must be strictly contiguous in both strings, whereas subsequence elements maintain relative order but can have gaps",
      "Substrings can have characters in reverse order",
      "Subsequence applies only to integers, while substring applies to strings",
      "Substrings always run in O(1) time"
    ],
    correct: 0,
    explanation: "A substring requires consecutive contiguous characters in both original strings (matching resets to 0 on mismatch), whereas a subsequence preserves relative ordering without requiring contiguity."
  },
  {
    id: 5,
    question: "In Longest Palindromic Subsequence (LPS), why must the DP table outer loop iterate index i from n - 1 down to 0?",
    options: [
      "Because state dp[i][j] depends on smaller subproblems with larger start index i + 1: dp[i+1][j] and dp[i+1][j-1]",
      "Because Java arrays can only be traversed backwards",
      "To reverse the string in place",
      "To avoid integer underflow"
    ],
    correct: 0,
    explanation: "The recurrence for interval [i, j] looks at sub-interval [i+1, j-1] and [i+1, j]. To ensure these subproblems are already computed, i must be iterated in descending order from n-1 down to 0."
  },
  {
    id: 6,
    question: "How can Longest Palindromic Subsequence (LPS) of a string s be cleanly solved using standard Longest Common Subsequence (LCS)?",
    options: [
      "Compute LCS between string s and its reverse: LCS(s, reverse(s))",
      "Compute LCS between s and a string of all 'a' characters",
      "Split s into two halves and find LCS of the halves",
      "Run LCS twice and divide the length by 2"
    ],
    correct: 0,
    explanation: "A palindrome reads identical forwards and backwards. The longest sequence of characters that appears in both s and reverse(s) in the same relative order is precisely the Longest Palindromic Subsequence."
  },
  {
    id: 7,
    question: "In Tree DP for House Robber III, what two values are maintained in the post-order return state for each node u?",
    options: [
      "take[u] (max money if node u is robbed) and skip[u] (max money if node u is skipped)",
      "height[u] and depth[u]",
      "minCost[u] and maxCost[u]",
      "inDegree[u] and outDegree[u]"
    ],
    correct: 0,
    explanation: "For each node, returning (take, skip) allows the parent to easily compute: take[parent] = val + left.skip + right.skip, and skip[parent] = max(left.take, left.skip) + max(right.take, right.skip)."
  },
  {
    id: 8,
    question: "Why can the longest path in a Directed Acyclic Graph (DAG) be solved in linear O(V + E) time using dynamic programming?",
    options: [
      "Because a DAG possesses a topological ordering that allows edges to be processed in dependency order without cycles or back-edges",
      "Because all edge weights in a DAG must be positive",
      "Because every DAG is a complete binary tree",
      "Because DAGs do not contain vertices with degree > 2"
    ],
    correct: 0,
    explanation: "A topological sort linearizes vertices such that every directed edge u -> v has u appearing before v. Processing vertices in this topological sequence guarantees that when visiting v, all possible paths to v have already been finalized."
  },
  {
    id: 9,
    question: "In Bitmask DP for the Traveling Salesman Problem (TSP), what does the state dp[mask][u] represent?",
    options: [
      "The minimum travel cost starting at city 0, visiting exactly the set of cities set in bitmask 'mask', and currently ending at city u",
      "The total number of permutations of cities in mask",
      "The length of the shortest path from city u to all unvisited cities",
      "The degree of vertex u in the spanning tree"
    ],
    correct: 0,
    explanation: "In TSP Bitmask DP, mask encodes the subset of already visited vertices as bit flags, and u is the last vertex visited, allowing transition to any unvisited vertex v: newCost = dp[mask][u] + cost[u][v]."
  },
  {
    id: 10,
    question: "In Bitmask DP for TSP, what is the final step to complete the tour after visiting all cities (fullMask = (1 << n) - 1)?",
    options: [
      "Find min_{u != 0} (dp[fullMask][u] + cost[u][0]) to add the return cost from endpoint u back to starting city 0",
      "Subtract the cost of the first city visited",
      "Divide the total cost by the number of cities",
      "Run Dijkstra's algorithm from the last city"
    ],
    correct: 0,
    explanation: "A TSP tour is a closed cycle returning to the starting vertex. After reaching state dp[fullMask][u], we must add edge cost[u][0] to close the tour and take the minimum across all possible finishing cities u."
  },
  {
    id: 11,
    question: "In Digit DP, what does the boolean state flag 'tight' represent?",
    options: [
      "Whether the prefix of digits selected so far matches the upper bound prefix exactly (restricting the current digit to at most upper_digit)",
      "Whether memory cache limits have been exceeded",
      "Whether all digits chosen so far are prime",
      "Whether the number contains leading zeroes"
    ],
    correct: 0,
    explanation: "When tight is true, the current digit cannot exceed the corresponding digit of the upper bound. Once a strictly smaller digit is chosen, tight becomes false for all subsequent positions, allowing digits 0 through 9 freely."
  },
  {
    id: 12,
    question: "In the Burst Balloons interval DP problem, why is choosing the LAST balloon to burst in interval [l, r] the winning strategy?",
    options: [
      "Choosing the last balloon ensures that its adjacent multipliers are fixed at the outer boundaries nums[l-1] and nums[r+1], cleanly decoupling the subproblems [l, k-1] and [k+1, r]",
      "Because bursting the last balloon gives 10x points",
      "Because the last balloon is always the largest number",
      "Because bursting the first balloon causes an infinite loop"
    ],
    correct: 0,
    explanation: "Bursting a balloon first creates dependencies across subproblems because its neighbors disappear. Choosing the last balloon k to burst means all other balloons in [l, r] are already gone, so balloon k is bordered strictly by nums[l-1] and nums[r+1]."
  },
  {
    id: 13,
    question: "Under what mathematical condition can Divide-and-Conquer DP optimization reduce a partition DP from O(KN²) to O(KN log N)?",
    options: [
      "When the optimal split positions satisfy monotonicity: opt[g][i] <= opt[g][i + 1]",
      "When all matrix entries are powers of two",
      "When the input array is already sorted",
      "When the number of groups K is greater than N"
    ],
    correct: 0,
    explanation: "Divide-and-Conquer DP optimization requires monotonicity of optimal split positions (opt[g][i] <= opt[g][i+1]), meaning the optimal partition boundary for a larger prefix cannot move to the left."
  },
  {
    id: 14,
    question: "How does the Meet in the Middle technique optimize the Subset Sum problem for N = 40 elements?",
    options: [
      "It splits the 40 elements into two halves of 20, generates 2²⁰ ≈ 10⁶ subset sums for each half, sorts one list, and uses binary search in O(N 2^(N/2)) time",
      "It approximates the sum using Monte Carlo simulation",
      "It applies dynamic programming with an array of size 2⁴⁰",
      "It deletes the middle 20 elements"
    ],
    correct: 0,
    explanation: "2⁴⁰ ≈ 1.1 × 10¹² is impossible to enumerate. Splitting into two 20-element sets requires evaluating only 2²⁰ ≈ 10⁶ sums per half, which easily runs in memory and executes in fractions of a second using binary search."
  },
  {
    id: 15,
    question: "What bitwise expression clears the lowest / rightmost set bit of an integer n in O(1) time?",
    options: [
      "n & (n - 1)",
      "n | (n + 1)",
      "n ^ (n - 1)",
      "n & (-n)"
    ],
    correct: 0,
    explanation: "Subtracting 1 flips the rightmost set bit and all bits below it. Bitwise ANDing n with n - 1 clears that lowest set bit while leaving all higher bits intact (Brian Kernighan's algorithm)."
  }
];

// --- 35 PRACTICE PROBLEMS & LABS TRACKER ---
const LAB_ASSIGNMENTS = [
  // Level 1: Advanced DP Foundations (1-8)
  { id: 1, tier: "Level 1", title: "Unique Paths II with Obstacles (LeetCode 63)", desc: "Navigate 2D grid with obstacles: zero out blocked paths in O(M*N)." },
  { id: 2, tier: "Level 1", title: "Minimum Path Sum (LeetCode 64)", desc: "2D spatial dynamic programming moving right and down for lowest accumulated cost." },
  { id: 3, tier: "Level 1", title: "Triangle Minimum Path (LeetCode 120)", desc: "Bottom-up 1D rolling array path sum on variable row triangle." },
  { id: 4, tier: "Level 1", title: "Edit Distance (LeetCode 72)", desc: "Levenshtein distance: insert, delete, replace transitions on 2D string matrix." },
  { id: 5, tier: "Level 1", title: "Longest Palindromic Subsequence (LeetCode 516)", desc: "Interval string DP dp[i][j] traversing backward or LCS(s, reverse(s))." },
  { id: 6, tier: "Level 1", title: "Longest Common Substring (Contiguous)", desc: "Contiguous matching resets to 0 on mismatch; track global max." },
  { id: 7, tier: "Level 1", title: "Maximal Square (LeetCode 221)", desc: "dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) on binary grid." },
  { id: 8, tier: "Level 1", title: "2D Multi-Resource Knapsack", desc: "Items with weight, volume, and value limits; 3D state dp[i][w][v]." },

  // Level 2: Tree & Graph DP (9-17)
  { id: 9, tier: "Level 2", title: "House Robber III - Tree Robbery (LeetCode 337)", desc: "Post-order tree DP: return (take, skip) pair at each node in O(N)." },
  { id: 10, tier: "Level 2", title: "Binary Tree Maximum Path Sum (LeetCode 124)", desc: "Compute max single-branch gain and update global root-spanning maximum." },
  { id: 11, tier: "Level 2", title: "Diameter of Binary Tree (LeetCode 543)", desc: "Post-order depth calculation combining left and right subtrees." },
  { id: 12, tier: "Level 2", title: "Longest Path in a DAG", desc: "Kahn's topological sort + edge relaxation for maximum path weight in O(V + E)." },
  { id: 13, tier: "Level 2", title: "Shortest Path in a DAG", desc: "Topological ordering handling negative edge weights without cycle pitfalls." },
  { id: 14, tier: "Level 2", title: "Tree Vertex Cover", desc: "Select minimum vertices to cover all edges: choose node or cover via children." },
  { id: 15, tier: "Level 2", title: "Maximum Independent Set on a Tree", desc: "Select non-adjacent nodes with maximum combined weight using tree DP." },
  { id: 16, tier: "Level 2", title: "All Nodes Distance K in Binary Tree (LeetCode 863)", desc: "Graph conversion or tree traversal with parent pointers." },
  { id: 17, tier: "Level 2", title: "Course Schedule III (LeetCode 630)", desc: "Greedy scheduling with Max-Heap of duration bounds." },

  // Level 3: Advanced State & Bitmask DP (18-26)
  { id: 18, tier: "Level 3", title: "Traveling Salesman Problem (TSP)", desc: "Visit all cities and return to origin: Bitmask DP O(N² 2ⁿ)." },
  { id: 19, tier: "Level 3", title: "Shortest Path Visiting All Nodes (LeetCode 847)", desc: "BFS with bitmask state (node, mask) to visit all vertices." },
  { id: 20, tier: "Level 3", title: "Partition to K Equal Sum Subsets (LeetCode 698)", desc: "Bitmask DP or backtracking with memoization for subset distribution." },
  { id: 21, tier: "Level 3", title: "Digit DP - Digit Sum at Most K", desc: "Count numbers in [0, N] whose digit sum <= K using tight flag." },
  { id: 22, tier: "Level 3", title: "Numbers At Most N Given Digit Set (LeetCode 902)", desc: "Digit DP with prefix constraint matching." },
  { id: 23, tier: "Level 3", title: "Non-Negative Integers without Consecutive Ones (LeetCode 600)", desc: "Digit DP on binary string representation." },
  { id: 24, tier: "Level 3", title: "Matrix Chain Multiplication (Standard MCM)", desc: "Interval DP iterating chain length L and partition point k in O(N³)." },
  { id: 25, tier: "Level 3", title: "Burst Balloons (LeetCode 312)", desc: "Interval DP: pick last balloon to burst in interval [l, r] to avoid dependencies." },
  { id: 26, tier: "Level 3", title: "Minimum Cost to Cut a Stick (LeetCode 1547)", desc: "Interval DP on cut coordinates sorted with endpoints 0 and len." },

  // Level 4: Optimization, Math & Randomized (27-35)
  { id: 27, tier: "Level 4", title: "Meet in the Middle - Subset Sum", desc: "Partition 40 elements into 20 + 20, sort second half, binary search in O(N 2^(N/2))." },
  { id: 28, tier: "Level 4", title: "Closest Subsequence Sum (LeetCode 1755)", desc: "Meet in the Middle with two-pointer scan on sorted halves." },
  { id: 29, tier: "Level 4", title: "Divide-and-Conquer DP Optimization", desc: "Monotonicity condition opt[i] <= opt[i+1] reduces 2D partition from O(KN²) to O(KN log N)." },
  { id: 30, tier: "Level 4", title: "Single Number III - Two Unique Elements (LeetCode 260)", desc: "XOR all numbers, isolate rightmost bit mask = xor & -xor, partition into groups." },
  { id: 31, tier: "Level 4", title: "Submask Enumeration Trick", desc: "for (int sub = mask; sub > 0; sub = (sub - 1) & mask) in O(3ⁿ) total states." },
  { id: 32, tier: "Level 4", title: "Modular Binary Exponentiation & Fermat Inverse", desc: "Compute aⁿ mod m in O(log n) and modular division using aᵐ⁻² mod m." },
  { id: 33, tier: "Level 4", title: "Sieve of Eratosthenes & Prime Factorization", desc: "Generate primes up to N in O(N log log N) and precompute smallest prime factor (SPF)." },
  { id: 34, tier: "Level 4", title: "Randomized QuickSort & Las Vegas Analysis", desc: "Random pivot selection eliminating worst-case adversarial input degradation." },
  { id: 35, tier: "Level 4", title: "Reservoir Sampling (LeetCode 382 & 398)", desc: "Uniform 1/N streaming random sample with O(1) memory via replacement probability 1/i." }
];

export default function JavaAdvancedDP() {
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
      const saved = localStorage.getItem("prepspaces_m20_labs");
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
      localStorage.setItem("prepspaces_m20_labs", JSON.stringify(next));
    } catch {
      // storage unavailable
    }
  };

  // --- WORKBENCH 1 STATE: Multi-Dimensional 3D Knapsack ---
  const [maxWeight, setMaxWeight] = useState(6);
  const [maxVolume, setMaxVolume] = useState(6);
  const [multiItems] = useState([
    { name: "Server Blade", wt: 2, vol: 3, val: 40 },
    { name: "GPU Accelerator", wt: 3, vol: 2, val: 50 },
    { name: "Fiber Switch", wt: 2, vol: 2, val: 35 },
    { name: "RAID Array", wt: 4, vol: 3, val: 70 }
  ]);

  const multiResult = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 1) {
      return { maxVal: 90, table: [] };
    }
    const W = maxWeight;
    const V = maxVolume;
    const dp = Array.from({ length: W + 1 }, () => new Array(V + 1).fill(0));

    for (const item of multiItems) {
      for (let w = W; w >= item.wt; w--) {
        for (let v = V; v >= item.vol; v--) {
          dp[w][v] = Math.max(dp[w][v], item.val + dp[w - item.wt][v - item.vol]);
        }
      }
    }
    return { maxVal: dp[W][V], table: dp };
  }, [activeMode, activeWb, maxWeight, maxVolume, multiItems]);

  // --- WORKBENCH 2 STATE: Grid DP with Interactive Obstacles ---
  const [gridRows] = useState(4);
  const [gridCols] = useState(5);
  const [gridCosts] = useState([
    [1, 3, 1, 2, 4],
    [1, 5, 1, 3, 2],
    [4, 2, 1, 1, 3],
    [2, 1, 3, 2, 1]
  ]);
  const [obstacles, setObstacles] = useState([[1, 1], [2, 3]]);

  const toggleObstacle = (r, c) => {
    if (r === 0 && c === 0) return;
    if (r === gridRows - 1 && c === gridCols - 1) return;
    const exists = obstacles.some(([or, oc]) => or === r && oc === c);
    if (exists) {
      setObstacles(obstacles.filter(([or, oc]) => !(or === r && oc === c)));
    } else {
      setObstacles([...obstacles, [r, c]]);
    }
  };

  const gridResult = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 2) {
      return { totalPaths: 0, cheapestCost: 0, pathsTable: Array.from({ length: 4 }, () => new Array(5).fill(0)), minCostTable: [] };
    }
    const R = gridRows;
    const C = gridCols;
    const isObs = (r, c) => obstacles.some(([or, oc]) => or === r && oc === c);

    // Unique Paths DP
    const paths = Array.from({ length: R }, () => new Array(C).fill(0));
    if (!isObs(0, 0)) paths[0][0] = 1;

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (isObs(r, c)) {
          paths[r][c] = 0;
          continue;
        }
        if (r > 0) paths[r][c] += paths[r - 1][c];
        if (c > 0) paths[r][c] += paths[r][c - 1];
      }
    }

    // Min Cost Path DP
    const minCost = Array.from({ length: R }, () => new Array(C).fill(Infinity));
    if (!isObs(0, 0)) minCost[0][0] = gridCosts[0][0];

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (isObs(r, c) || (r === 0 && c === 0)) continue;
        const up = r > 0 ? minCost[r - 1][c] : Infinity;
        const left = c > 0 ? minCost[r][c - 1] : Infinity;
        const bestPrev = Math.min(up, left);
        if (bestPrev !== Infinity) {
          minCost[r][c] = gridCosts[r][c] + bestPrev;
        }
      }
    }

    return {
      totalPaths: paths[R - 1][C - 1],
      cheapestCost: minCost[R - 1][C - 1] === Infinity ? "Unreachable" : minCost[R - 1][C - 1],
      pathsTable: paths,
      minCostTable: minCost
    };
  }, [activeMode, activeWb, gridRows, gridCols, gridCosts, obstacles]);

  // --- WORKBENCH 3 STATE: LPS & String Interval DP ---
  const [lpsString, setLpsString] = useState("BBABCBCAB");

  const lpsResult = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 3) {
      return { len: 7, table: [], reconstructed: "BABCBAB" };
    }
    const s = lpsString;
    const n = s.length;
    if (n === 0) return { len: 0, table: [], palindromes: "" };

    const dp = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[i][i] = 1;

    for (let i = n - 1; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
        if (s.charAt(i) === s.charAt(j)) {
          dp[i][j] = 2 + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
      }
    }

    // Backtrack to find one LPS string
    let leftSub = "";
    let rightSub = "";
    let i = 0, j = n - 1;
    while (i <= j) {
      if (i === j) {
        leftSub += s[i];
        break;
      }
      if (s[i] === s[j]) {
        leftSub += s[i];
        rightSub = s[j] + rightSub;
        i++;
        j--;
      } else if (dp[i + 1][j] >= dp[i][j - 1]) {
        i++;
      } else {
        j--;
      }
    }
    const reconstructed = leftSub + rightSub;

    return { len: dp[0][n - 1], table: dp, reconstructed };
  }, [activeMode, activeWb, lpsString]);

  // --- WORKBENCH 4 STATE: Tree DP (House Robber III) ---
  const [treeLoot] = useState({
    id: 1, val: 3,
    left: {
      id: 2, val: 2,
      left: null,
      right: { id: 4, val: 3, left: null, right: null }
    },
    right: {
      id: 3, val: 3,
      left: null,
      right: { id: 5, val: 1, left: null, right: null }
    }
  });

  const treeDPResult = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 4) {
      return { maxVal: 7, chosen: [1, 4, 5], rootTake: 7, rootSkip: 5 };
    }
    function solve(node) {
      if (!node) return { take: 0, skip: 0, chosenTake: [], chosenSkip: [] };
      const left = solve(node.left);
      const right = solve(node.right);

      const take = node.val + left.skip + right.skip;
      const chosenTake = [node.id, ...left.chosenSkip, ...right.chosenSkip];

      const leftBestIsTake = left.take >= left.skip;
      const rightBestIsTake = right.take >= right.skip;
      const skip = Math.max(left.take, left.skip) + Math.max(right.take, right.skip);
      const chosenSkip = [
        ...(leftBestIsTake ? left.chosenTake : left.chosenSkip),
        ...(rightBestIsTake ? right.chosenTake : right.chosenSkip)
      ];

      return { take, skip, chosenTake, chosenSkip };
    }

    const res = solve(treeLoot);
    const maxVal = Math.max(res.take, res.skip);
    const chosen = res.take >= res.skip ? res.chosenTake : res.chosenSkip;
    return { maxVal, chosen, rootTake: res.take, rootSkip: res.skip };
  }, [activeMode, activeWb, treeLoot]);

  // --- WORKBENCH 5 STATE: TSP Bitmask DP ---
  const [tspMatrix] = useState([
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
  ]);

  const tspResult = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 5) {
      return { minCost: 80, lastCity: 3, dpTable: [] };
    }
    const n = 4;
    const totalMasks = 1 << n;
    const INF = 999999;
    const dp = Array.from({ length: totalMasks }, () => new Array(n).fill(INF));

    dp[1][0] = 0; // City 0 visited

    for (let mask = 1; mask < totalMasks; mask++) {
      for (let u = 0; u < n; u++) {
        if ((mask & (1 << u)) === 0 || dp[mask][u] === INF) continue;
        for (let v = 0; v < n; v++) {
          if ((mask & (1 << v)) !== 0) continue;
          const newMask = mask | (1 << v);
          dp[newMask][v] = Math.min(dp[newMask][v], dp[mask][u] + tspMatrix[u][v]);
        }
      }
    }

    const fullMask = totalMasks - 1;
    let minCost = INF;
    let lastCity = -1;
    for (let u = 1; u < n; u++) {
      if (dp[fullMask][u] !== INF) {
        const costWithReturn = dp[fullMask][u] + tspMatrix[u][0];
        if (costWithReturn < minCost) {
          minCost = costWithReturn;
          lastCity = u;
        }
      }
    }

    return { minCost, lastCity, dpTable: dp };
  }, [activeMode, activeWb, tspMatrix]);

  // --- WORKBENCH 6 STATE: Digit DP Simulator ---
  const [digitBound, setDigitBound] = useState(50);
  const [digitSumLimit, setDigitSumLimit] = useState(5);

  const digitDPCount = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 6) {
      return { count: 32, bound: digitBound, limit: digitSumLimit };
    }
    const s = Math.max(0, digitBound).toString();
    const memo = {};

    function dfs(pos, sum, tight) {
      if (sum > digitSumLimit) return 0;
      if (pos === s.length) return 1;
      const key = `${pos}-${sum}-${tight}`;
      if (memo[key] !== undefined) return memo[key];

      const maxDigit = tight ? s.charCodeAt(pos) - 48 : 9;
      let count = 0;
      for (let d = 0; d <= maxDigit; d++) {
        count += dfs(pos + 1, sum + d, tight && d === maxDigit);
      }
      return (memo[key] = count);
    }

    const count = dfs(0, 0, true);
    return { count, bound: digitBound, limit: digitSumLimit };
  }, [activeMode, activeWb, digitBound, digitSumLimit]);

  // --- WORKBENCH 7 STATE: Meet in the Middle ---
  const [mitmArr] = useState([3, 7, 2, 9, 4, 6]);
  const [mitmTarget, setMitmTarget] = useState(15);

  const mitmResult = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 7) {
      return {
        left: [3, 7, 2],
        right: [9, 4, 6],
        leftCount: 8,
        rightCount: 8,
        bestSum: 15
      };
    }
    const arr = mitmArr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const getSums = (sub) => {
      const sums = [];
      const total = 1 << sub.length;
      for (let m = 0; m < total; m++) {
        let s = 0;
        for (let i = 0; i < sub.length; i++) {
          if ((m & (1 << i)) !== 0) s += sub[i];
        }
        sums.push(s);
      }
      return sums;
    };

    const leftSums = getSums(left);
    const rightSums = getSums(right).sort((a, b) => a - b);

    let bestSum = -Infinity;
    for (const s of leftSums) {
      const rem = mitmTarget - s;
      // binary search rightSums for <= rem
      let l = 0, r = rightSums.length - 1;
      let cand = -1;
      while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (rightSums[m] <= rem) {
          cand = rightSums[m];
          l = m + 1;
        } else {
          r = m - 1;
        }
      }
      if (cand !== -1) {
        bestSum = Math.max(bestSum, s + cand);
      }
    }

    return {
      left,
      right,
      leftCount: leftSums.length,
      rightCount: rightSums.length,
      bestSum: bestSum === -Infinity ? "None" : bestSum
    };
  }, [activeMode, activeWb, mitmArr, mitmTarget]);

  // --- WORKBENCH 8 STATE: Bit Manipulation & XOR Lab ---
  const [bitNum, setBitNum] = useState(13);

  const bitMetrics = useMemo(() => {
    if (activeMode !== "workbenches" || activeWb !== 8) {
      return { binStr: "00001101", setBits: 3, isPow2: false, lowestBit: 1, notVal: -14 };
    }
    const n = bitNum;
    const binStr = (n >>> 0).toString(2).padStart(8, "0").slice(-8);
    // Kernighan set bits
    let temp = n, setBits = 0;
    while (temp !== 0) {
      temp &= (temp - 1);
      setBits++;
    }
    const isPow2 = n > 0 && (n & (n - 1)) === 0;
    const lowestBit = n & (-n);
    const notVal = ~n;

    return { binStr, setBits, isPow2, lowestBit, notVal };
  }, [activeMode, activeWb, bitNum]);

  // Filtered curriculum sections
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return JAVA_ADVANCED_DP_SECTIONS;
    const q = searchTerm.toLowerCase();
    return JAVA_ADVANCED_DP_SECTIONS.filter(
      s => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const activeSection = useMemo(() => {
    return JAVA_ADVANCED_DP_SECTIONS.find(s => s.id === activeSectionId) || JAVA_ADVANCED_DP_SECTIONS[0];
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
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans antialiased selection:bg-[#f97316] selection:text-white px-4 py-6 sm:px-8 sm:py-10 md:px-12">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
      {/* Top Navigation Bar */}
      <ModuleNav
        currentModuleId="advanced-dp"
        track="java"
        totalModules={24}
        accentColor="orange"
        prevRoute="/learning/java/dynamic-programming"
        nextRoute="/learning/java/problem-solving-patterns"
      />

      {/* Hero Banner */}
      <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 backdrop-blur-xl shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#ea580c] text-xs font-semibold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5" />
              Module 20 — Advanced Algorithms & Optimization
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 flex items-center gap-3">
              Advanced DP & Algorithm Design
            </h1>
            <p className="text-stone-500 text-sm md:text-base max-w-3xl leading-relaxed">
              Transition from implementing known algorithms to designing complex state models: Multidimensional DP, Tree & Graph DP, Bitmasking, TSP, Digit DP, Interval DP, Divide & Conquer optimization, Meet in the Middle, and Mathematical Proofs.
            </p>
          </div>

          {/* Quick Metrics & Quiz Launcher */}
          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 px-4 py-2 rounded-xl text-xs">
              <div className="text-right">
                <span className="text-stone-500 block text-[10px]">Practice Labs</span>
                <span className="font-bold text-emerald-400">{completedLabs.length} / 35 Complete</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>

            <button
              onClick={() => setShowQuizModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-stone-900 font-medium text-xs md:text-sm shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02]"
            >
              <Award className="w-4 h-4" />
              Take Assessment Quiz ({QUIZ_QUESTIONS.length} MCQs)
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="max-w-7xl mx-auto mt-8 flex items-center gap-2 border-b border-[#e7e3da]">
          <button
            onClick={() => setActiveMode("workbenches")}
            className={`px-5 py-2.5 text-xs md:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeMode === "workbenches"
                ? "bg-[#18181b] text-white shadow-sm font-bold rounded-xl border-transparent"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900 font-bold rounded-xl"
            }`}
          >
            <Activity className="w-4 h-4" />
            8 Interactive Workbenches
          </button>
          <button
            onClick={() => setActiveMode("reader")}
            className={`px-5 py-2.5 text-xs md:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeMode === "reader"
                ? "bg-[#18181b] text-white shadow-sm font-bold rounded-xl border-transparent"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900 font-bold rounded-xl"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Curriculum Reader (30 Sections)
          </button>
          <button
            onClick={() => setActiveMode("labs")}
            className={`px-5 py-2.5 text-xs md:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeMode === "labs"
                ? "bg-[#18181b] text-white shadow-sm font-bold rounded-xl border-transparent"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900 font-bold rounded-xl"
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
                { id: 1, name: "1. 3D Knapsack", icon: Database },
                { id: 2, name: "2. Grid DP Obstacles", icon: Grid },
                { id: 3, name: "3. LPS String DP", icon: Code2 },
                { id: 4, name: "4. Tree DP (Robber)", icon: GitBranch },
                { id: 5, name: "5. TSP Bitmask", icon: Layers },
                { id: 6, name: "6. Digit DP Counter", icon: Sparkles },
                { id: 7, name: "7. Meet in Middle", icon: Cpu },
                { id: 8, name: "8. Bitwise & XOR", icon: Binary }
              ].map(wb => {
                const IconComponent = wb.icon;
                const isSel = activeWb === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWb(wb.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                      isSel
                        ? "bg-orange-500/15 border-orange-500/60 text-orange-300 shadow-md shadow-orange-500/20"
                        : "bg-white border-[#e7e3da] text-stone-500 hover:border-stone-200 hover:text-stone-800"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isSel ? "text-orange-400" : "text-stone-500"}`} />
                    <span className="text-xs font-semibold leading-tight">{wb.name}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: 3D Multidimensional Knapsack */}
            {activeWb === 1 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Database className="w-5 h-5 text-orange-400" />
                      Workbench 1: Multi-Dimensional 3D Knapsack Simulator
                    </h2>
                    <p className="text-xs md:text-sm text-stone-500">
                      Items subject to dual independent constraints: Weight Capacity W and Volume Capacity V in O(nWV) time.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-700">
                      <span>Max W:</span>
                      <input
                        type="range"
                        min="2"
                        max="8"
                        value={maxWeight}
                        onChange={(e) => setMaxWeight(Number(e.target.value))}
                        className="w-20 accent-orange-500"
                      />
                      <span className="text-orange-400 font-bold">{maxWeight}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-700">
                      <span>Max V:</span>
                      <input
                        type="range"
                        min="2"
                        max="8"
                        value={maxVolume}
                        onChange={(e) => setMaxVolume(Number(e.target.value))}
                        className="w-20 accent-orange-500"
                      />
                      <span className="text-orange-400 font-bold">{maxVolume}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {multiItems.map((item, idx) => (
                    <div key={idx} className="bg-stone-50 p-3.5 rounded-xl border border-[#e7e3da] space-y-1.5">
                      <div className="text-xs font-bold text-stone-900">{item.name}</div>
                      <div className="text-[11px] font-mono text-stone-500 flex justify-between">
                        <span>Weight: {item.wt}</span>
                        <span>Volume: {item.vol}</span>
                      </div>
                      <div className="text-xs font-mono font-bold text-emerald-400">
                        Value: ${item.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-stone-500 block">Optimal Payload Value dp[W][V]:</span>
                    <div className="text-3xl font-extrabold text-stone-900 font-mono mt-1">${multiResult.maxVal}</div>
                  </div>
                  <div className="text-right text-xs text-stone-500 font-mono space-y-1">
                    <div>State Dimensions: <span className="text-orange-400">[Items][Weight][Volume]</span></div>
                    <div>Space Complexity: <span className="text-emerald-400">O(W × V) rolling</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: Grid DP with Interactive Obstacles */}
            {activeWb === 2 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Grid className="w-5 h-5 text-orange-400" />
                      Workbench 2: Grid DP with Interactive Obstacles
                    </h2>
                    <p className="text-xs md:text-sm text-stone-500">
                      Click any grid cell to toggle obstacle placement. Observe real-time path count and minimum accumulated cost.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-emerald-400 font-bold">Paths: {gridResult.totalPaths}</span>
                    <span className="text-amber-400 font-bold">Min Cost: {gridResult.cheapestCost}</span>
                  </div>
                </div>

                <div className="overflow-x-auto bg-stone-50 p-2.5 sm:p-5 rounded-xl border border-[#e7e3da]">
                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2 min-w-[270px] max-w-lg mx-auto">
                    {Array.from({ length: gridRows }).map((_, r) =>
                      Array.from({ length: gridCols }).map((_, c) => {
                        const isObs = obstacles.some(([or, oc]) => or === r && oc === c);
                        const isStart = r === 0 && c === 0;
                        const isEnd = r === gridRows - 1 && c === gridCols - 1;
                        return (
                          <button
                            key={`${r}-${c}`}
                            onClick={() => toggleObstacle(r, c)}
                            className={`h-14 sm:h-16 rounded-lg sm:rounded-xl border p-1 sm:p-2 flex flex-col justify-between transition-all min-w-0 ${
                              isObs
                                ? "bg-red-950/60 border-red-500 text-red-300"
                                : isStart
                                ? "bg-emerald-950/40 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/20"
                                : isEnd
                                ? "bg-white border-orange-500 text-orange-300 ring-2 ring-orange-500/30"
                                : "bg-white border-[#e7e3da] hover:border-stone-200 text-stone-700"
                            }`}
                          >
                            <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono">
                              <span>({r},{c})</span>
                              <span className="font-bold text-amber-400">${gridCosts[r][c]}</span>
                            </div>
                            <div className="text-[10px] sm:text-xs font-mono font-bold text-center truncate">
                              {isObs ? "BLOCKED" : isStart ? "START" : isEnd ? "TARGET" : `p:${gridResult.pathsTable[r][c]}`}
                            </div>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: LPS String DP */}
            {activeWb === 3 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-orange-400" />
                      Workbench 3: Longest Palindromic Subsequence (LPS) Studio
                    </h2>
                    <p className="text-xs md:text-sm text-stone-500">
                      Recurrence: <code className="text-orange-300 font-mono">dp[i][j] = (s[i] == s[j]) ? 2 + dp[i+1][j-1] : Math.max(dp[i+1][j], dp[i][j-1])</code>
                    </p>
                  </div>
                  <div>
                    <input
                      type="text"
                      value={lpsString}
                      onChange={(e) => setLpsString(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))}
                      maxLength={12}
                      className="bg-stone-50 border border-[#e7e3da] rounded-lg px-3 py-1.5 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500 w-44"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-3">
                    <span className="text-xs font-mono text-stone-500 block uppercase">LPS Metrics</span>
                    <div className="text-3xl font-extrabold text-stone-900 font-mono">{lpsResult.len} Chars</div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      Sequence: "{lpsResult.reconstructed}"
                    </div>
                    <p className="text-[11px] text-stone-500 leading-relaxed pt-2">
                      Equivalent to <strong className="text-orange-400">LCS(s, reverse(s))</strong> where reverse is "{lpsString.split('').reverse().join('')}".
                    </p>
                  </div>

                  <div className="md:col-span-2 overflow-x-auto bg-stone-50 p-4 rounded-xl border border-[#e7e3da]">
                    <div className="text-xs font-mono text-stone-500 mb-2">2D Interval DP Table dp[i][j]</div>
                    <table className="w-full text-center text-xs font-mono border-collapse">
                      <thead>
                        <tr className="bg-white border-b border-[#e7e3da] text-stone-500">
                          <th className="p-1.5 text-left">i \ j</th>
                          {lpsString.split('').map((ch, idx) => (
                            <th key={idx} className="p-1.5 text-orange-300 font-bold">{ch}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {lpsResult.table.map((row, i) => (
                          <tr key={i}>
                            <td className="p-1.5 text-left text-orange-300 font-bold">{lpsString[i]}</td>
                            {row.map((val, j) => (
                              <td
                                key={j}
                                className={`p-1.5 ${
                                  i === 0 && j === lpsString.length - 1
                                    ? "bg-orange-500/20 text-orange-300 font-bold border border-orange-500"
                                    : i <= j
                                    ? "text-stone-700"
                                    : "text-stone-500"
                                }`}
                              >
                                {i <= j ? val : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: Tree DP (House Robber III) */}
            {activeWb === 4 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-[#e7e3da] pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-orange-400" />
                    Workbench 4: Tree DP (House Robber on a Hierarchy)
                  </h2>
                  <p className="text-xs md:text-sm text-stone-500">
                    Post-order state vector (take[u], skip[u]) computed recursively in O(N) time and O(H) call stack.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                  <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] space-y-3">
                    <div className="text-xs font-mono text-stone-500 uppercase">Tree Topology & Optimal Loot</div>
                    <div className="text-3xl font-extrabold text-stone-900 font-mono">${treeDPResult.maxVal}</div>
                    <div className="text-xs text-stone-700">
                      Robbed Node IDs: <strong className="text-emerald-400 font-mono">[{treeDPResult.chosen.join(", ")}]</strong>
                    </div>
                    <div className="pt-2 text-[11px] font-mono text-stone-500 space-y-1">
                      <div>Root Take: ${treeDPResult.rootTake} (takes root #1 + grandchildren #4, #5)</div>
                      <div>Root Skip: ${treeDPResult.rootSkip} (takes child #2 + #3)</div>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] font-mono text-xs text-stone-700 space-y-3">
                    <span className="text-orange-400 block font-bold">Hierarchical Structure Visualization:</span>
                    <div className="pl-4 border-l-2 border-orange-500/40 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">Node #1 (val: $3) [TAKEN]</span>
                      </div>
                      <div className="pl-6 border-l border-[#e7e3da] space-y-2">
                        <div>├── Node #2 (val: $2) [SKIPPED]</div>
                        <div className="pl-6 border-l border-[#e7e3da] text-emerald-400">
                          └── Node #4 (val: $3) [TAKEN]
                        </div>
                        <div>└── Node #3 (val: $3) [SKIPPED]</div>
                        <div className="pl-6 border-l border-[#e7e3da] text-emerald-400">
                          └── Node #5 (val: $1) [TAKEN]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: TSP Bitmask DP */}
            {activeWb === 5 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-[#e7e3da] pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-orange-400" />
                    Workbench 5: Traveling Salesman Problem (TSP) Bitmask DP Studio
                  </h2>
                  <p className="text-xs md:text-sm text-stone-500">
                    NP-hard Hamiltonian cycle solved in O(N² 2ⁿ) using integer bitmask representing visited vertices.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-3">
                    <div className="text-xs font-mono text-stone-500">4-City Cost Matrix (Complete Graph)</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-center text-xs font-mono border-collapse min-w-[240px]">
                        <thead>
                          <tr className="bg-white text-stone-500 border-b border-[#e7e3da]">
                            <th className="p-2">u \ v</th>
                            <th>0</th><th>1</th><th>2</th><th>3</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {tspMatrix.map((row, u) => (
                            <tr key={u}>
                              <td className="p-2 text-orange-300 font-bold">{u}</td>
                              {row.map((c, v) => (
                                <td key={v} className="p-2">{c}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-3">
                    <div className="text-xs font-mono text-stone-500 uppercase">Optimal Hamiltonian Cycle</div>
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">Cost: {tspResult.minCost}</div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Starts at City 0, traverses cities in bitmask order, finishes at City {tspResult.lastCity}, and adds return edge <code className="text-orange-300 font-mono">cost[{tspResult.lastCity}][0] = {tspMatrix[tspResult.lastCity][0]}</code>.
                    </p>
                    <div className="text-[11px] font-mono text-stone-500 pt-1">
                      Total bitmask state space: 2⁴ = 16 masks × 4 vertices = 64 cells.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: Digit DP Simulator */}
            {activeWb === 6 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-400" />
                      Workbench 6: Digit DP Interactive Range Counter
                    </h2>
                    <p className="text-xs md:text-sm text-stone-500">
                      Counting numbers in range [0, N] whose digit sum ≤ K using position, sum, and tightness flags.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div>
                      <span>N Bound:</span>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={digitBound}
                        onChange={(e) => setDigitBound(Number(e.target.value))}
                        className="ml-2 w-20 accent-orange-500"
                      />
                      <span className="text-orange-400 font-bold ml-1">{digitBound}</span>
                    </div>
                    <div>
                      <span>Sum Limit K:</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={digitSumLimit}
                        onChange={(e) => setDigitSumLimit(Number(e.target.value))}
                        className="ml-2 w-20 accent-orange-500"
                      />
                      <span className="text-orange-400 font-bold ml-1">{digitSumLimit}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-stone-500 block">Numbers in [0, {digitDPCount.bound}] with digit sum ≤ {digitDPCount.limit}:</span>
                    <div className="text-3xl font-extrabold text-stone-900 font-mono mt-1">{digitDPCount.count} Numbers</div>
                  </div>
                  <div className="text-right text-xs text-stone-500 font-mono space-y-1">
                    <div>Recursion Depth: <span className="text-orange-400">O(digits = {digitBound.toString().length})</span></div>
                    <div>Tight Branching: <span className="text-emerald-400">Bound prefix checked</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 7: Meet in the Middle */}
            {activeWb === 7 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-orange-400" />
                      Workbench 7: Meet in the Middle Subset Sum Explorer
                    </h2>
                    <p className="text-xs md:text-sm text-stone-500">
                      Partition array of size N into two halves of size N/2, precomputing 2^(N/2) sums with binary search lookup.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span>Target Sum:</span>
                    <input
                      type="range"
                      min="5"
                      max="35"
                      value={mitmTarget}
                      onChange={(e) => setMitmTarget(Number(e.target.value))}
                      className="w-24 accent-orange-500"
                    />
                    <span className="text-orange-400 font-bold">{mitmTarget}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-2">
                    <span className="text-xs font-mono text-orange-400 font-semibold block">Left Half [{mitmResult.left.join(", ")}]</span>
                    <div className="text-xs font-mono text-stone-700">Generated Subsets: 2^{mitmResult.left.length} = {mitmResult.leftCount}</div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-2">
                    <span className="text-xs font-mono text-amber-400 font-semibold block">Right Half [{mitmResult.right.join(", ")}]</span>
                    <div className="text-xs font-mono text-stone-700">Sorted Subsets: 2^{mitmResult.right.length} = {mitmResult.rightCount}</div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-2">
                    <span className="text-xs font-mono text-emerald-400 font-semibold block">Best Subset Sum ≤ {mitmTarget}</span>
                    <div className="text-2xl font-bold font-mono text-stone-900">{mitmResult.bestSum}</div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 8: Bit Manipulation & XOR Lab */}
            {activeWb === 8 && (
              <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Binary className="w-5 h-5 text-orange-400" />
                      Workbench 8: Bit Manipulation & XOR Laboratory
                    </h2>
                    <p className="text-xs md:text-sm text-stone-500">
                      Live bit operations: Kernighan set bits, power of two, bitmask extraction, and two's complement inversion.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span>Integer N:</span>
                    <input
                      type="range"
                      min="1"
                      max="64"
                      value={bitNum}
                      onChange={(e) => setBitNum(Number(e.target.value))}
                      className="w-24 accent-orange-500"
                    />
                    <span className="text-orange-400 font-bold">{bitNum}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-1 text-center">
                    <span className="text-[10px] text-stone-500 font-mono block">Binary (8-bit)</span>
                    <div className="text-xl font-mono font-bold text-stone-900">{bitMetrics.binStr}</div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-1 text-center">
                    <span className="text-[10px] text-stone-500 font-mono block">Set Bits Count (n & n-1)</span>
                    <div className="text-xl font-mono font-bold text-orange-400">{bitMetrics.setBits}</div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-1 text-center">
                    <span className="text-[10px] text-stone-500 font-mono block">Is Power of Two?</span>
                    <div className={`text-xl font-mono font-bold ${bitMetrics.isPow2 ? "text-emerald-400" : "text-red-400"}`}>
                      {bitMetrics.isPow2 ? "YES" : "NO"}
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-1 text-center">
                    <span className="text-[10px] text-stone-500 font-mono block">Rightmost Bit (n & -n)</span>
                    <div className="text-xl font-mono font-bold text-amber-400">{bitMetrics.lowestBit}</div>
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
            <div className="lg:col-span-1 bg-white/70 border border-[#e7e3da] rounded-2xl p-4 sticky top-4 max-h-[85vh] flex flex-col gap-3 ">
              <div className="flex items-center gap-2 px-1">
                <Search className="w-4 h-4 text-stone-500" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-stone-50 border border-[#e7e3da] rounded-lg px-2.5 py-1.5 text-xs text-stone-800 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="overflow-y-auto space-y-1 pr-1 custom-scrollbar ">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    title={sec.title}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-start gap-2 ${
                      activeSectionId === sec.id
                        ? "bg-orange-500/15 border border-orange-500/50 text-orange-300 font-semibold"
                        : "text-stone-500 hover:text-stone-800 hover:bg-stone-100/40"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-stone-500 mt-0.5 shrink-0">{sec.id}.</span>
                    <span className="break-words whitespace-normal leading-snug flex-1">{sec.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-1">
                  {activeSection.id === 0
                    ? "Module Overview · 30 Core Sections"
                    : `Section ${activeSection.id} of 30`}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                  {activeSection.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-500 mt-1">
                  {activeSection.summary}
                </p>
              </div>

              {/* Render Section Content */}
              <div className="prose prose-invert max-w-none text-stone-700 text-xs md:text-sm leading-relaxed">
                {activeSection.content}
              </div>

              {/* Bottom Pagination */}
              <div className="flex items-center justify-between pt-6 border-t border-[#e7e3da]">
                <button
                  disabled={activeSectionId <= 0}
                  onClick={() => setActiveSectionId(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-[#e7e3da] bg-stone-50 text-xs font-medium text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:border-stone-200 flex items-center gap-1.5 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous Section
                </button>
                <button
                  disabled={activeSectionId >= JAVA_ADVANCED_DP_SECTIONS.length - 1}
                  onClick={() => setActiveSectionId(prev => Math.min(JAVA_ADVANCED_DP_SECTIONS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-500 text-xs font-medium text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition shadow-md shadow-orange-500/20"
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
            <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl p-5 md:p-7 space-y-4 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-orange-400" />
                    35 Advanced Dynamic Programming & Algorithm Labs
                  </h2>
                  <p className="text-xs md:text-sm text-stone-500">
                    Track your implementation progress across 4 curated levels from multidimensional DP to randomized algorithms.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-emerald-400 font-bold block">
                    {completedLabs.length} / 35 Solved ({Math.round((completedLabs.length / 35) * 100)}%)
                  </span>
                  <div className="w-36 bg-stone-100 h-2 rounded-full overflow-hidden mt-1.5">
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
                      <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
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
                                ? "bg-emerald-950/20 border-emerald-500/40 text-stone-800"
                                : "bg-stone-50 border-[#e7e3da] text-stone-500 hover:border-stone-200 hover:text-stone-700"
                            }`}
                          >
                            <button className="mt-0.5 text-stone-500 hover:text-stone-900">
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-500" />
                              )}
                            </button>
                            <div className="space-y-1">
                              <div className="text-xs font-semibold text-stone-900 flex items-center gap-2">
                                <span className="text-stone-500 font-mono text-[10px]">#{lab.id}</span>
                                {lab.title}
                              </div>
                              <p className="text-[11px] text-stone-500 leading-relaxed">
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
          <div className="bg-white border border-[#e7e3da] shadow-xs rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#e7e3da] flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  Module 20 Mastery Assessment Quiz
                </h3>
                <p className="text-xs text-stone-500">15 Scenario-based Advanced DP Questions</p>
              </div>
              <button
                onClick={() => setShowQuizModal(false)}
                className="text-stone-500 hover:text-stone-900 text-xs px-2.5 py-1 rounded-lg bg-stone-100"
              >
                Close
              </button>
            </div>

            {/* Questions List */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userChoice = quizAnswers[q.id];
                return (
                  <div key={q.id} className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] space-y-3">
                    <div className="text-xs md:text-sm font-semibold text-stone-900 flex items-start gap-2">
                      <span className="font-mono text-orange-400">Q{idx + 1}.</span>
                      <span>{q.question}</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        let optClass = "bg-white border-[#e7e3da] text-stone-700 hover:border-stone-200";
                        if (quizSubmitted) {
                          if (optIdx === q.correct) optClass = "bg-emerald-950/40 border-emerald-500 text-emerald-300 font-semibold";
                          else if (isSelected) optClass = "bg-red-950/40 border-red-500 text-red-300";
                        } else if (isSelected) {
                          optClass = "bg-orange-500/20 border-orange-500 text-orange-300 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center gap-2.5 ${optClass}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-stone-200 flex items-center justify-center text-[10px] font-mono shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-lg bg-white border border-[#e7e3da] shadow-xs text-xs text-stone-700 space-y-1">
                        <div className="font-semibold text-emerald-400">Explanation:</div>
                        <p className="text-stone-500 text-[11px] leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#e7e3da] bg-stone-50 flex items-center justify-between">
              {quizSubmitted ? (
                <div className="text-xs font-mono">
                  Your Score: <strong className="text-emerald-400 text-sm">{quizScore} / {QUIZ_QUESTIONS.length}</strong> ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </div>
              ) : (
                <div className="text-xs text-stone-500">
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
                    className="px-4 py-2 rounded-xl bg-stone-100 text-xs font-medium text-stone-800 hover:bg-stone-200 transition"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-500 text-xs font-medium text-stone-900 disabled:opacity-40 transition shadow-lg shadow-orange-500/20"
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
    </div>
  );
}
