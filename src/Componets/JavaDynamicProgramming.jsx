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
  Code2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_DYNAMIC_PROGRAMMING_SECTIONS } from "./JavaDynamicProgrammingSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What are the two foundational properties a problem must possess to be effectively solved by Dynamic Programming?",
    options: [
      "Overlapping Subproblems and Optimal Substructure",
      "Greedy Choice Property and Independence of States",
      "Logarithmic Tree Height and Bounded Degree",
      "Continuous Variables and Convex Differentiability"
    ],
    correct: 0,
    explanation: "Dynamic Programming requires Overlapping Subproblems (the same subproblems are solved repeatedly) and Optimal Substructure (the globally optimal solution can be constructed from optimal solutions to its subproblems)."
  },
  {
    id: 2,
    question: "What is the primary operational difference between Top-Down Memoization and Bottom-Up Tabulation in Java?",
    options: [
      "Memoization is recursive and computes only required states on demand but risks StackOverflowError on deep calls; Tabulation is iterative and computes all table states systematically from base cases using loops",
      "Memoization always runs in O(N²) time while Tabulation runs in O(N) time",
      "Memoization does not use auxiliary memory, whereas Tabulation requires disk storage",
      "Tabulation cannot solve optimization problems"
    ],
    correct: 0,
    explanation: "Top-Down DP starts from the target state and recursively caches subproblem solutions as needed (on-demand), risking JVM call stack overflow for large N. Bottom-Up DP starts from base cases and fills the DP table iteratively using loops, with zero recursion overhead."
  },
  {
    id: 3,
    question: "When converting naive recursive Fibonacci fib(n) to Dynamic Programming, how does the time complexity transform?",
    options: [
      "From exponential O(2ⁿ) to linear O(n)",
      "From O(n!) to O(n²)",
      "From O(n²) to O(log n)",
      "From O(n log n) to O(1)"
    ],
    correct: 0,
    explanation: "Naive recursive Fibonacci forms a binary tree of height n with 2ⁿ calls due to massive duplicate recomputation. DP computes each of the n distinct subproblems exactly once in O(1) time each, reducing time complexity to O(n)."
  },
  {
    id: 4,
    question: "In the Climbing Stairs problem where a climber can take 1 or 2 steps, why is the recurrence relation dp[i] = dp[i - 1] + dp[i - 2]?",
    options: [
      "To land on step i, the final step must have originated either from step i-1 (via a 1-step jump) or from step i-2 (via a 2-step jump). By the addition rule, total ways is the sum of ways to both previous steps",
      "Because stairs always follow an arithmetic progression",
      "Because taking 2 steps doubles the previous number of combinations",
      "Because step i requires computing the square root of the step count"
    ],
    correct: 0,
    explanation: "Any valid sequence of steps reaching step i must end with either a 1-step leap (originating from step i-1) or a 2-step leap (originating from step i-2). Since these two final actions are mutually exclusive, the total distinct ways is dp[i-1] + dp[i-2]."
  },
  {
    id: 5,
    question: "In the Minimum Cost Climbing Stairs problem, what does the recurrence dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]) represent?",
    options: [
      "The minimum cumulative cost to step onto step i, paying its fee and coming from the cheaper of the previous two steps",
      "The total sum of all stairs visited up to step i",
      "The average cost per step climbed",
      "The maximum cost allowed before the climber terminates"
    ],
    correct: 0,
    explanation: "To occupy step i, you must pay cost[i] plus the minimum accumulated cost to reach step i, which could only have been entered from step i-1 or step i-2."
  },
  {
    id: 6,
    question: "Why does a greedy approach fail on the House Robber problem (e.g., [2, 7, 9, 3, 1] or [100, 1, 1, 100])?",
    options: [
      "A local greedy choice to rob a high-value house locks out both its neighbors, which could have yielded a greater combined sum than the single house",
      "Greedy algorithms cannot compare integers in Java",
      "Greedy sorting modifies the original house addresses",
      "Greedy choices always result in negative sums"
    ],
    correct: 0,
    explanation: "In [100, 1, 1, 100], greedy picking takes 100 at index 0 and index 3, but in [2, 10, 10, 2], picking 10 prevents picking the other 10. DP evaluates both include (nums[i] + dp[i-2]) and exclude (dp[i-1]) globally."
  },
  {
    id: 7,
    question: "In House Robber II where houses are arranged in a circular ring (house 0 is adjacent to house n-1), how is the circular constraint solved with standard DP?",
    options: [
      "By running the linear House Robber algorithm twice: once for houses 0 to n-2 (excluding the last house), and once for houses 1 to n-1 (excluding the first house), returning Math.max of both",
      "By duplicating the entire array and running Kadane's algorithm",
      "By sorting the houses in descending order of cash",
      "By applying Dijkstra's algorithm along the perimeter"
    ],
    correct: 0,
    explanation: "Because house 0 and house n-1 cannot both be robbed simultaneously, at least one of them must be left unrobbed. This cleanly breaks the circle into two standard linear problems: subarray [0 ... n-2] and subarray [1 ... n-1]."
  },
  {
    id: 8,
    question: "In the standard 2D 0/1 Knapsack DP table dp[i][w], what does cell dp[i][w] represent?",
    options: [
      "The maximum value obtainable using a subset of the first i items with a maximum weight capacity of w",
      "The minimum weight required to pack i items",
      "The index of the heaviest item included in capacity w",
      "The total number of ways to pack exactly i items"
    ],
    correct: 0,
    explanation: "The DP state dp[i][w] represents the maximum profit/value achievable by considering the first i items under a total weight limit of w."
  },
  {
    id: 9,
    question: "When compressing the 0/1 Knapsack table to a 1D array dp[w], why MUST the capacity loop iterate in reverse from W down to wt[i]?",
    options: [
      "Iterating backwards ensures that dp[w - wt[i]] represents the value from the previous item tier (i - 1), preventing the current item i from being included multiple times",
      "Iterating forward causes ArrayIndexOutOfBoundsException in Java",
      "Iterating backwards sorts the items by value density",
      "Backward iteration is required by the JVM JIT compiler"
    ],
    correct: 0,
    explanation: "If we iterate forward (from wt[i] to W), an updated value in dp[w - wt[i]] would represent item i having already been included, allowing item i to be included repeatedly (which turns it into Unbounded Knapsack). Backward iteration preserves the single-use invariant of 0/1 Knapsack."
  },
  {
    id: 10,
    question: "Why does Unbounded Knapsack intentionally iterate capacity w forward from wt[i] up to W?",
    options: [
      "Because each item has unlimited copies, so updating dp[w] from a previously updated dp[w - wt[i]] in the current pass allows multiple instances of item i to be chosen",
      "Because backward iteration in unbounded knapsack creates integer underflow",
      "Because unbounded knapsack cannot be solved using 2D DP",
      "Because items in unbounded knapsack must have negative weights"
    ],
    correct: 0,
    explanation: "In Unbounded Knapsack, an item can be chosen infinitely many times. Forward iteration allows dp[w] to build directly on top of dp[w - wt[i]] that already contains one or more instances of the same item i."
  },
  {
    id: 11,
    question: "In the Subset Sum Problem, what does boolean dp[i][j] represent?",
    options: [
      "Whether a subset of the first i elements can sum to exactly j",
      "The number of elements required to sum to j",
      "The maximum element used in a subset summing to j",
      "Whether element i is greater than target j"
    ],
    correct: 0,
    explanation: "In Subset Sum, dp[i][j] is a boolean flag indicating if there is any subset chosen from the first i numbers whose elements sum exactly to target j."
  },
  {
    id: 12,
    question: "How can the Partition Equal Subset Sum problem be reduced to the Subset Sum problem?",
    options: [
      "If totalSum is odd, equal partition is impossible (return false); otherwise, search for a subset summing to totalSum / 2",
      "Sort the array and check if the median equals the mean",
      "Divide the array into odd and even numbers and check if both lengths match",
      "Sum the array and take modulo 3"
    ],
    correct: 0,
    explanation: "Partitioning into two subsets of equal sum requires each subset to sum to totalSum / 2. If totalSum is odd, integer division by 2 is impossible. If even, the problem is identical to finding a subset summing to target = totalSum / 2."
  },
  {
    id: 13,
    question: "In Coin Change II (number of unique combinations to make amount A), why must the outer loop iterate over coins and the inner loop over amounts?",
    options: [
      "Iterating coins in the outer loop enforces that coins are considered in a fixed order, counting unique combinations rather than ordered permutations (order does not matter)",
      "Iterating amounts outer would cause an OutOfMemoryError",
      "Because Java arrays only permit coin iteration first",
      "To ensure all coins are sorted in descending order"
    ],
    correct: 0,
    explanation: "If amounts are in the outer loop, {1, 2} and {2, 1} would both be counted as distinct paths (permutations). Putting coins in the outer loop ensures coin 2 is never placed before coin 1 in any combination, ensuring only unique combinations are counted."
  },
  {
    id: 14,
    question: "In Longest Common Subsequence (LCS) between strings s1 and s2, if s1.charAt(i - 1) == s2.charAt(j - 1), what is the state transition?",
    options: [
      "dp[i][j] = 1 + dp[i - 1][j - 1]",
      "dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])",
      "dp[i][j] = dp[i - 1][j - 1]",
      "dp[i][j] = dp[i - 1][j] + dp[i][j - 1]"
    ],
    correct: 0,
    explanation: "When the current characters match, they extend the longest common subsequence formed by the prefixes of s1 and s2 up to indices i-1 and j-1 by exactly 1 character: 1 + dp[i-1][j-1]."
  },
  {
    id: 15,
    question: "In Edit Distance (Levenshtein Distance) between word1 and word2, if characters mismatch at indices i and j, which three operations are minimized?",
    options: [
      "1 + Math.min(dp[i - 1][j] /* delete */, Math.min(dp[i][j - 1] /* insert */, dp[i - 1][j - 1] /* replace */))",
      "Math.min(dp[i - 1][j], dp[i][j - 1]) - 1",
      "1 + Math.max(dp[i - 1][j], dp[i][j - 1])",
      "dp[i - 1][j - 1] * 2"
    ],
    correct: 0,
    explanation: "A mismatch can be resolved by deleting character i from word1 (state dp[i-1][j]), inserting character j into word1 (state dp[i][j-1]), or replacing character i with character j (state dp[i-1][j-1]). Each operation carries a cost of 1."
  }
];

// --- 35 PRACTICE PROBLEMS & LABS TRACKER ---
const LAB_ASSIGNMENTS = [
  // Level 1: DP Fundamentals (1-8)
  { id: 1, tier: "Level 1", title: "Fibonacci Number (LeetCode 509)", desc: "Implement memoization, tabulation, and O(1) space optimization for Fibonacci sequence." },
  { id: 2, tier: "Level 1", title: "Climbing Stairs (LeetCode 70)", desc: "Count distinct ways to reach top using 1 or 2 steps; reduce to Fibonacci recurrence." },
  { id: 3, tier: "Level 1", title: "Min Cost Climbing Stairs (LeetCode 746)", desc: "Find minimum cost to reach the top of the floor starting from index 0 or 1." },
  { id: 4, tier: "Level 1", title: "Tribonacci Number (LeetCode 1137)", desc: "Compute T(n) = T(n-1) + T(n-2) + T(n-3) using three sliding state variables in O(1) space." },
  { id: 5, tier: "Level 1", title: "House Robber (LeetCode 198)", desc: "Maximize loot from non-adjacent houses using include/exclude recurrence." },
  { id: 6, tier: "Level 1", title: "House Robber II (LeetCode 213)", desc: "Circular house neighborhood: break circle into [0...n-2] and [1...n-1]." },
  { id: 7, tier: "Level 1", title: "Maximum Subarray - Kadane's DP (LeetCode 53)", desc: "Dynamic programming state: dp[i] = Math.max(nums[i], nums[i] + dp[i-1])." },
  { id: 8, tier: "Level 1", title: "Delete and Earn (LeetCode 740)", desc: "Transform into House Robber by bucketing frequencies into point sums." },

  // Level 2: Knapsack & Subset DP (9-17)
  { id: 9, tier: "Level 2", title: "0/1 Knapsack Problem (Standard)", desc: "Build 2D table and optimize to 1D reverse iteration for bounded item choices." },
  { id: 10, tier: "Level 2", title: "Unbounded Knapsack Problem", desc: "Forward capacity propagation for infinite item supply; contrast with 0/1 Knapsack." },
  { id: 11, tier: "Level 2", title: "Subset Sum Problem (GFG)", desc: "Boolean DP table determining if a subset can sum exactly to target." },
  { id: 12, tier: "Level 2", title: "Partition Equal Subset Sum (LeetCode 416)", desc: "Check if array sum is even, then solve Subset Sum for target = sum / 2." },
  { id: 13, tier: "Level 2", title: "Coin Change - Minimum Coins (LeetCode 322)", desc: "Unbounded knapsack minimization with INF sentinel initialization for unreachable amounts." },
  { id: 14, tier: "Level 2", title: "Coin Change II - Total Combinations (LeetCode 518)", desc: "Iterate coins outer and amounts inner to count unique unordered combinations." },
  { id: 15, tier: "Level 2", title: "Target Sum (LeetCode 494)", desc: "Transform assigning +/- signs into subset sum problem with P = (sum + target) / 2." },
  { id: 16, tier: "Level 2", title: "Last Stone Weight II (LeetCode 1049)", desc: "Minimize difference between two subsets using knapsack subset sum." },
  { id: 17, tier: "Level 2", title: "Combination Sum IV (LeetCode 377)", desc: "Ordered permutations: iterate target outer and numbers inner." },

  // Level 3: String & Subsequence DP (18-26)
  { id: 18, tier: "Level 3", title: "Longest Common Subsequence (LeetCode 1143)", desc: "2D character matching DP and string reconstruction by backtracking pointers." },
  { id: 19, tier: "Level 3", title: "Longest Increasing Subsequence (LeetCode 300)", desc: "Compare O(N²) DP with O(N log N) patience sorting binary search." },
  { id: 20, tier: "Level 3", title: "Edit Distance (LeetCode 72)", desc: "Levenshtein distance: insert, delete, and replace operations on 2D string grid." },
  { id: 21, tier: "Level 3", title: "Longest Palindromic Subsequence (LeetCode 516)", desc: "LCS between string s and its reverse, or interval DP dp[i][j]." },
  { id: 22, tier: "Level 3", title: "Minimum Insertion Steps to Make a String Palindrome (LeetCode 1312)", desc: "Length of string minus Longest Palindromic Subsequence." },
  { id: 23, tier: "Level 3", title: "Distinct Subsequences (LeetCode 115)", desc: "Count occurrences of string t as subsequence of s using 2D DP." },
  { id: 24, tier: "Level 3", title: "Shortest Common Supersequence (LeetCode 1092)", desc: "Reconstruct shortest supersequence by tracing through the LCS DP table." },
  { id: 25, tier: "Level 3", title: "Interleaving String (LeetCode 97)", desc: "Check if s3 is formed by interleaving s1 and s2 using 2D boolean DP." },
  { id: 26, tier: "Level 3", title: "Wildcard Matching (LeetCode 44)", desc: "2D DP matching '?' (single char) and '*' (zero or more chars)." },

  // Level 4: Advanced 2D, Grid & Interval DP (27-35)
  { id: 27, tier: "Level 4", title: "Unique Paths (LeetCode 62)", desc: "Grid path counting: dp[i][j] = dp[i-1][j] + dp[i][j-1] with 1D row rolling." },
  { id: 28, tier: "Level 4", title: "Unique Paths II with Obstacles (LeetCode 63)", desc: "Grid path counting zeroing out cells where obstacleGrid[i][j] == 1." },
  { id: 29, tier: "Level 4", title: "Minimum Path Sum (LeetCode 64)", desc: "Find lowest cost path from top-left to bottom-right moving only right and down." },
  { id: 30, tier: "Level 4", title: "Maximal Square (LeetCode 221)", desc: "dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) for largest binary square." },
  { id: 31, tier: "Level 4", title: "Matrix Chain Multiplication (Standard MCM)", desc: "Interval DP: iterate chain length L and partition point k in O(N³)." },
  { id: 32, tier: "Level 4", title: "Burst Balloons (LeetCode 312)", desc: "Interval DP: pick the last balloon to burst in interval [i, j] to avoid dependencies." },
  { id: 33, tier: "Level 4", title: "Palindrome Partitioning II (LeetCode 132)", desc: "Find minimum cuts needed to partition a string into palindromes in O(N²)." },
  { id: 34, tier: "Level 4", title: "Russian Doll Envelopes (LeetCode 354)", desc: "Sort width ascending and height descending; run O(N log N) LIS on heights." },
  { id: 35, tier: "Level 4", title: "Trapping Rain Water - DP Approach (LeetCode 42)", desc: "Precompute leftMax and rightMax arrays in O(N) to compute trapped water per column." }
];

export default function JavaDynamicProgramming() {
  // Mode: "reader" (Curriculum sections) vs "workbenches" (Interactive Workbenches)
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
      const saved = localStorage.getItem("prepspaces_m19_labs");
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
      localStorage.setItem("prepspaces_m19_labs", JSON.stringify(next));
    } catch {
      // storage unavailable
    }
  };

  // --- WORKBENCH 1 STATE: Fibonacci Quad-Strategy ---
  const [fibN, setFibN] = useState(7);

  const fibStats = useMemo(() => {
    const n = Math.min(Math.max(fibN, 0), 20);
    // Recursion
    let recCalls = 0;
    function calcRec(k) {
      recCalls++;
      if (k <= 0) return 0;
      if (k === 1) return 1;
      return calcRec(k - 1) + calcRec(k - 2);
    }
    const val = calcRec(n);

    // Tabulation array
    const dp = new Array(n + 1).fill(0);
    if (n >= 1) dp[1] = 1;
    for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];

    return {
      n,
      val,
      recCalls,
      memCalls: n <= 1 ? 1 : 2 * n - 1,
      tabSteps: n <= 1 ? 1 : n - 1,
      dpTable: dp
    };
  }, [fibN]);

  // --- WORKBENCH 2 STATE: Climbing Stairs & Min Cost ---
  const [stairsCost, setStairsCost] = useState([10, 15, 20, 5, 25]);
  const minCostStairsResult = useMemo(() => {
    const cost = stairsCost;
    const n = cost.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < n; i++) {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    dp[n] = Math.min(dp[n - 1], dp[n - 2]);
    return { dp, topCost: dp[n] };
  }, [stairsCost]);

  // --- WORKBENCH 3 STATE: House Robber I & II ---
  const [houses] = useState([2, 7, 9, 3, 1]);
  const [isCircular, setIsCircular] = useState(false);

  const houseRobberResult = useMemo(() => {
    const solveLinear = (arr) => {
      if (!arr.length) return { maxVal: 0, picked: [] };
      if (arr.length === 1) return { maxVal: arr[0], picked: [0] };
      const dp = new Array(arr.length).fill(0);
      dp[0] = arr[0];
      dp[1] = Math.max(arr[0], arr[1]);
      for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
      }
      // Reconstruct picked
      const picked = [];
      let i = arr.length - 1;
      while (i >= 0) {
        if (i === 0) {
          picked.push(0);
          break;
        } else if (i === 1) {
          if (arr[1] > arr[0]) picked.push(1);
          else picked.push(0);
          break;
        } else if (dp[i] === arr[i] + dp[i - 2]) {
          picked.push(i);
          i -= 2;
        } else {
          i -= 1;
        }
      }
      return { maxVal: dp[arr.length - 1], picked: picked.reverse() };
    };

    if (!isCircular) {
      const res = solveLinear(houses);
      return { maxVal: res.maxVal, picked: res.picked, variant: "Linear (Robber I)" };
    } else {
      if (houses.length === 1) return { maxVal: houses[0], picked: [0], variant: "Circular (Robber II)" };
      const sub1 = houses.slice(0, houses.length - 1);
      const sub2 = houses.slice(1);
      const res1 = solveLinear(sub1);
      const res2 = solveLinear(sub2);
      if (res1.maxVal >= res2.maxVal) {
        return { maxVal: res1.maxVal, picked: res1.picked, variant: "Circular (Subproblem [0 ... n-2])" };
      } else {
        return { maxVal: res2.maxVal, picked: res2.picked.map(idx => idx + 1), variant: "Circular (Subproblem [1 ... n-1])" };
      }
    }
  }, [houses, isCircular]);

  // --- WORKBENCH 4 STATE: 0/1 Knapsack Simulator ---
  const [knapCapacity, setKnapCapacity] = useState(7);
  const [knapItems] = useState([
    { id: 1, name: "Item A", wt: 1, val: 1 },
    { id: 2, name: "Item B", wt: 3, val: 4 },
    { id: 3, name: "Item C", wt: 4, val: 5 },
    { id: 4, name: "Item D", wt: 5, val: 7 }
  ]);

  const knapTable = useMemo(() => {
    const W = knapCapacity;
    const n = knapItems.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      const wt = knapItems[i - 1].wt;
      const val = knapItems[i - 1].val;
      for (let w = 0; w <= W; w++) {
        if (wt <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], val + dp[i - 1][w - wt]);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    // Reconstruct chosen
    const chosen = [];
    let curW = W;
    for (let i = n; i > 0; i--) {
      if (dp[i][curW] !== dp[i - 1][curW]) {
        chosen.push(knapItems[i - 1]);
        curW -= knapItems[i - 1].wt;
      }
    }

    return { dp, maxVal: dp[n][W], chosen };
  }, [knapCapacity, knapItems]);

  // --- WORKBENCH 5 STATE: Unbounded Knapsack ---
  const [unbCapacity, setUnbCapacity] = useState(8);
  const [unbItems] = useState([
    { wt: 2, val: 5, name: "Gold bar (wt:2, val:5)" },
    { wt: 3, val: 8, name: "Gem bundle (wt:3, val:8)" },
    { wt: 4, val: 11, name: "Artifact (wt:4, val:11)" }
  ]);

  const unbResult = useMemo(() => {
    const W = unbCapacity;
    const dp = new Array(W + 1).fill(0);
    const trace = [];

    for (const item of unbItems) {
      for (let w = item.wt; w <= W; w++) {
        const candidate = item.val + dp[w - item.wt];
        if (candidate > dp[w]) {
          dp[w] = candidate;
        }
      }
      trace.push({ item: item.name, row: [...dp] });
    }
    return { dp, maxVal: dp[W], trace };
  }, [unbCapacity, unbItems]);

  // --- WORKBENCH 6 STATE: Subset Sum & Partition Equal ---
  const [subsetArr, setSubsetArr] = useState([1, 5, 11, 5]);
  const subsetResult = useMemo(() => {
    const nums = subsetArr;
    const total = nums.reduce((a, b) => a + b, 0);
    const isEven = total % 2 === 0;
    const target = isEven ? total / 2 : Math.floor(total / 2);

    const dp = Array.from({ length: nums.length + 1 }, () => new Array(target + 1).fill(false));
    for (let i = 0; i <= nums.length; i++) dp[i][0] = true;

    for (let i = 1; i <= nums.length; i++) {
      const num = nums[i - 1];
      for (let j = 1; j <= target; j++) {
        if (num <= j) {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return {
      total,
      isEven,
      target,
      canPartition: isEven && dp[nums.length][target],
      dpTable: dp
    };
  }, [subsetArr]);

  // --- WORKBENCH 7 STATE: Coin Change I vs II ---
  const [coinAmount, setCoinAmount] = useState(5);
  const [coinList] = useState([1, 2, 5]);

  const coinChangeResult = useMemo(() => {
    const coins = coinList;
    const A = coinAmount;
    // Coin Change I: Min Coins
    const dpMin = new Array(A + 1).fill(999999);
    dpMin[0] = 0;
    for (let a = 1; a <= A; a++) {
      for (const c of coins) {
        if (c <= a) {
          dpMin[a] = Math.min(dpMin[a], 1 + dpMin[a - c]);
        }
      }
    }
    const minCoins = dpMin[A] >= 999999 ? -1 : dpMin[A];

    // Coin Change II: Number of Combinations (Coins outer)
    const dpWays = new Array(A + 1).fill(0);
    dpWays[0] = 1;
    for (const c of coins) {
      for (let a = c; a <= A; a++) {
        dpWays[a] += dpWays[a - c];
      }
    }
    const totalWays = dpWays[A];

    return { minCoins, totalWays, dpMin, dpWays };
  }, [coinAmount, coinList]);

  // --- WORKBENCH 8 STATE: LCS & Edit Distance ---
  const [s1, setS1] = useState("abcde");
  const [s2, setS2] = useState("ace");
  const [lcsTab, setLcsTab] = useState("lcs"); // "lcs" or "edit"

  const lcsResult = useMemo(() => {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    // Reconstruct LCS string
    let lcsStr = "";
    let i = m, j = n;
    while (i > 0 && j > 0) {
      if (s1[i - 1] === s2[j - 1]) {
        lcsStr = s1[i - 1] + lcsStr;
        i--;
        j--;
      } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }

    return { dp, lcsLen: dp[m][n], lcsStr };
  }, [s1, s2]);

  const editDistResult = useMemo(() => {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(
            dp[i - 1][j],     // deletion
            dp[i][j - 1],     // insertion
            dp[i - 1][j - 1]  // replacement
          );
        }
      }
    }
    return { dp, distance: dp[m][n] };
  }, [s1, s2]);

  // Filtered curriculum sections
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return JAVA_DYNAMIC_PROGRAMMING_SECTIONS;
    const q = searchTerm.toLowerCase();
    return JAVA_DYNAMIC_PROGRAMMING_SECTIONS.filter(
      s => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const activeSection = useMemo(() => {
    return JAVA_DYNAMIC_PROGRAMMING_SECTIONS.find(s => s.id === activeSectionId) || JAVA_DYNAMIC_PROGRAMMING_SECTIONS[0];
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
        currentModuleId="dynamic-programming"
        currentTrack="java"
        totalModules={20}
        accentColor="indigo"
        prevRoute="/learning/java/shortest-paths-mst"
        nextRoute="/learning/java/advanced-dp"
      />

      {/* Hero Banner */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-indigo-950/30 via-slate-900/40 to-slate-950 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5" />
              Module 19 — Master Algorithms Track
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
              Dynamic Programming Fundamentals
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed">
              Master state formulation, optimal substructure, overlapping subproblems, memoization vs tabulation, knapsack models, string subsequences, and interview pattern recognition in Java.
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
            Curriculum Reader (32 Sections)
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
                { id: 1, name: "1. Fibonacci Quad", icon: Zap },
                { id: 2, name: "2. Climbing Stairs", icon: Activity },
                { id: 3, name: "3. House Robber", icon: Layers },
                { id: 4, name: "4. 0/1 Knapsack", icon: Grid },
                { id: 5, name: "5. Unbounded Knap", icon: Database },
                { id: 6, name: "6. Subset Sum", icon: Sparkles },
                { id: 7, name: "7. Coin Change", icon: Cpu },
                { id: 8, name: "8. LCS & Edit Dist", icon: Code2 }
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

            {/* WORKBENCH 1: Fibonacci Quad-Strategy Visualizer */}
            {activeWb === 1 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-indigo-400" />
                      Workbench 1: Fibonacci Quad-Strategy Benchmark
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      Directly observe the exponential vs linear divergence: Naive Recursion vs Memoization vs Tabulation vs Space Optimization.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">Input N:</span>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={fibN}
                      onChange={(e) => setFibN(Number(e.target.value))}
                      className="w-32 accent-indigo-500"
                    />
                    <span className="px-2.5 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg text-indigo-300 font-mono font-bold text-xs">
                      n = {fibN}
                    </span>
                  </div>
                </div>

                {/* 4 Strategy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Strategy 1: Naive Recursion */}
                  <div className="bg-slate-950/70 border border-red-500/30 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">1. Naive Recursion</span>
                      <span className="text-[10px] font-mono text-slate-400">O(2ⁿ)</span>
                    </div>
                    <div className="text-2xl font-extrabold text-white font-mono">{fibStats.val}</div>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div>Function Calls: <span className="font-mono text-red-300 font-bold">{fibStats.recCalls}</span></div>
                      <div>Aux Space: <span className="font-mono text-slate-300">O(N) stack</span></div>
                      <div>Duplicated Work: <span className="font-mono text-red-400 font-semibold">{Math.max(0, fibStats.recCalls - fibStats.n)} redundant</span></div>
                    </div>
                  </div>

                  {/* Strategy 2: Memoization */}
                  <div className="bg-slate-950/70 border border-amber-500/30 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">2. Memoization</span>
                      <span className="text-[10px] font-mono text-slate-400">O(N) Top-Down</span>
                    </div>
                    <div className="text-2xl font-extrabold text-white font-mono">{fibStats.val}</div>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div>Function Calls: <span className="font-mono text-amber-300 font-bold">{fibStats.memCalls}</span></div>
                      <div>Aux Space: <span className="font-mono text-slate-300">O(N) memo + stack</span></div>
                      <div>Cache Hits: <span className="font-mono text-amber-400 font-semibold">{Math.max(0, fibStats.memCalls - (fibStats.n + 1))} hits</span></div>
                    </div>
                  </div>

                  {/* Strategy 3: Tabulation */}
                  <div className="bg-slate-950/70 border border-blue-500/30 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">3. Tabulation</span>
                      <span className="text-[10px] font-mono text-slate-400">O(N) Bottom-Up</span>
                    </div>
                    <div className="text-2xl font-extrabold text-white font-mono">{fibStats.val}</div>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div>Loop Iterations: <span className="font-mono text-blue-300 font-bold">{fibStats.tabSteps}</span></div>
                      <div>Aux Space: <span className="font-mono text-slate-300">O(N) array</span></div>
                      <div>Call Stack: <span className="font-mono text-blue-400 font-semibold">0 overhead</span></div>
                    </div>
                  </div>

                  {/* Strategy 4: Space-Optimized */}
                  <div className="bg-slate-950/70 border border-emerald-500/30 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">4. Space Optimized</span>
                      <span className="text-[10px] font-mono text-slate-400">O(1) Space</span>
                    </div>
                    <div className="text-2xl font-extrabold text-emerald-400 font-mono">{fibStats.val}</div>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div>Loop Iterations: <span className="font-mono text-emerald-300 font-bold">{fibStats.tabSteps}</span></div>
                      <div>Aux Space: <span className="font-mono text-emerald-400 font-bold">O(1) (2 vars)</span></div>
                      <div>Memory Efficiency: <span className="font-mono text-emerald-400 font-semibold">100% optimal</span></div>
                    </div>
                  </div>
                </div>

                {/* DP Array Strip */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-slate-400">Bottom-Up Tabulation State Array dp[0 ... {fibStats.n}]:</div>
                  <div className="flex flex-wrap gap-2">
                    {fibStats.dpTable.map((val, idx) => (
                      <div
                        key={idx}
                        className={`px-3 py-2 rounded-lg border text-center font-mono ${
                          idx === fibStats.n
                            ? "bg-indigo-500/20 border-indigo-500 text-indigo-300 font-bold ring-2 ring-indigo-500/30"
                            : "bg-slate-900 border-slate-800 text-slate-300"
                        }`}
                      >
                        <div className="text-[10px] text-slate-400">i={idx}</div>
                        <div className="text-sm font-semibold">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: Climbing Stairs & Min Cost */}
            {activeWb === 2 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-indigo-400" />
                    Workbench 2: Minimum Cost Climbing Stairs Visualizer
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Formula: <code className="text-indigo-300 font-mono">dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])</code>
                  </p>
                </div>

                {/* Controls to adjust costs */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs text-slate-400 font-mono">Preset Step Costs:</span>
                  {[
                    [10, 15, 20, 5, 25],
                    [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
                    [10, 20, 30],
                    [2, 5, 3, 1, 7, 3, 4]
                  ].map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => setStairsCost(preset)}
                      className={`px-3 py-1 text-xs rounded-lg border font-mono transition ${
                        JSON.stringify(stairsCost) === JSON.stringify(preset)
                          ? "bg-indigo-600/30 border-indigo-500 text-indigo-300"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Preset {idx + 1} ({preset.length} steps)
                    </button>
                  ))}
                </div>

                {/* Interactive Stepping Visualizer */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Flight of Stairs</span>
                    <span className="font-mono text-emerald-400 font-bold">
                      Minimum Total Cost to Top: {minCostStairsResult.topCost}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2 items-end">
                    {stairsCost.map((cost, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-center flex flex-col justify-between"
                        style={{ height: `${Math.min(180, 70 + cost * 1.5)}px` }}
                      >
                        <div className="text-[10px] text-slate-400 font-mono">Step {idx}</div>
                        <div className="my-auto">
                          <span className="text-xs font-mono font-bold text-amber-300">Fee: {cost}</span>
                          <div className="text-[11px] font-mono text-indigo-400 mt-1">
                            dp = {minCostStairsResult.dp[idx]}
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-400">
                          {idx === 0 || idx === 1 ? "start choice" : "min prev 2"}
                        </span>
                      </div>
                    ))}
                    {/* Top of Floor */}
                    <div className="bg-indigo-950/60 border border-indigo-500/50 rounded-lg p-2.5 text-center flex flex-col justify-between h-[190px]">
                      <div className="text-[10px] text-indigo-400 font-mono font-bold">TOP FLOOR</div>
                      <div className="my-auto">
                        <div className="text-xs text-slate-400">Exit Cost</div>
                        <div className="text-lg font-bold font-mono text-emerald-400">
                          {minCostStairsResult.topCost}
                        </div>
                      </div>
                      <span className="text-[9px] text-emerald-400">min(dp[n-1], dp[n-2])</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: House Robber I & II */}
            {activeWb === 3 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-indigo-400" />
                      Workbench 3: House Robber Decision Studio
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      State transition: <code className="text-indigo-300 font-mono">dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])</code>
                    </p>
                  </div>

                  {/* Toggle Circular Mode */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsCircular(false)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                        !isCircular
                          ? "bg-indigo-600/30 border-indigo-500 text-indigo-300"
                          : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}
                    >
                      Linear (Robber I)
                    </button>
                    <button
                      onClick={() => setIsCircular(true)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                        isCircular
                          ? "bg-indigo-600/30 border-indigo-500 text-indigo-300"
                          : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}
                    >
                      Circular (Robber II)
                    </button>
                  </div>
                </div>

                {/* Houses Grid */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Street of Houses ({houseRobberResult.variant})</span>
                    <span className="font-mono text-emerald-400 font-bold text-sm">
                      Max Loot: ${houseRobberResult.maxVal}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3">
                    {houses.map((val, idx) => {
                      const isPicked = houseRobberResult.picked.includes(idx);
                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            isPicked
                              ? "bg-emerald-950/40 border-emerald-500/70 text-emerald-300 ring-2 ring-emerald-500/20"
                              : "bg-slate-900/60 border-slate-800 text-slate-400"
                          }`}
                        >
                          <div className="text-[10px] font-mono text-slate-400">House #{idx}</div>
                          <div className="text-xl font-bold font-mono my-1 text-white">${val}</div>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                              isPicked ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-400"
                            }`}
                          >
                            {isPicked ? "ROBBED" : "SKIPPED"}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {isCircular && (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300/90 leading-relaxed">
                      <strong>Circular Invariant:</strong> House 0 and House {houses.length - 1} cannot both be robbed. The algorithm splits into two linear DP runs: <code>[0 ... {houses.length - 2}]</code> and <code>[1 ... {houses.length - 1}]</code>, taking the global maximum.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WORKBENCH 4: 0/1 Knapsack Simulator */}
            {activeWb === 4 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Grid className="w-5 h-5 text-indigo-400" />
                      Workbench 4: 0/1 Knapsack 2D Matrix & 1D Space Simulator
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      Recurrence: <code className="text-indigo-300 font-mono">dp[i][w] = Math.max(dp[i - 1][w], val + dp[i - 1][w - wt])</code>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">Knapsack Capacity W:</span>
                    <input
                      type="range"
                      min="3"
                      max="10"
                      value={knapCapacity}
                      onChange={(e) => setKnapCapacity(Number(e.target.value))}
                      className="w-28 accent-indigo-500"
                    />
                    <span className="px-2.5 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg text-indigo-300 font-mono font-bold text-xs">
                      W = {knapCapacity}
                    </span>
                  </div>
                </div>

                {/* Items and Max Value */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {knapItems.map((item) => {
                    const isChosen = knapTable.chosen.some(c => c.id === item.id);
                    return (
                      <div
                        key={item.id}
                        className={`p-3 rounded-xl border flex items-center justify-between ${
                          isChosen
                            ? "bg-indigo-950/40 border-indigo-500/60 text-indigo-300 ring-1 ring-indigo-500/30"
                            : "bg-slate-950 border-slate-800 text-slate-400"
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-xs text-white">{item.name}</div>
                          <div className="text-[11px] font-mono text-slate-400">
                            Weight: {item.wt} | Value: ${item.val}
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          isChosen ? "bg-indigo-500/20 text-indigo-300" : "bg-slate-800 text-slate-400"
                        }`}>
                          {isChosen ? "PACKED" : "OMITTED"}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* 2D DP Table Visualizer */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono text-slate-400 font-semibold">2D DP Table dp[item i][capacity w]</span>
                    <span className="font-mono text-emerald-400 font-bold">Max Value at dp[{knapItems.length}][{knapCapacity}] = ${knapTable.maxVal}</span>
                  </div>
                  <table className="w-full text-center text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                        <th className="p-2 text-left">Item \ Cap</th>
                        {Array.from({ length: knapCapacity + 1 }, (_, w) => (
                          <th key={w} className="p-2">w={w}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {knapTable.dp.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-900/40 transition">
                          <td className="p-2 text-left font-sans text-slate-300 font-medium">
                            {i === 0 ? "0 (None)" : `${i}. ${knapItems[i - 1].name}`}
                          </td>
                          {row.map((val, w) => {
                            const isOptimalCell = i === knapItems.length && w === knapCapacity;
                            return (
                              <td
                                key={w}
                                className={`p-2 ${
                                  isOptimalCell
                                    ? "bg-indigo-600/30 text-indigo-300 font-bold border border-indigo-500"
                                    : val > 0
                                    ? "text-emerald-400 font-semibold"
                                    : "text-slate-400"
                                }`}
                              >
                                {val}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: Unbounded Knapsack */}
            {activeWb === 5 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-400" />
                    Workbench 5: Unbounded Knapsack & Forward Capacity Studio
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Unlimited supply: loop iterates <strong>forward</strong> <code className="text-indigo-300 font-mono">for (w = wt; w &lt;= W; w++)</code> allowing multiple copies.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Configuration</span>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Max Capacity W: {unbCapacity}</label>
                      <input
                        type="range"
                        min="4"
                        max="12"
                        value={unbCapacity}
                        onChange={(e) => setUnbCapacity(Number(e.target.value))}
                        className="w-full accent-indigo-500"
                      />
                    </div>
                    <div className="space-y-1.5 pt-2">
                      {unbItems.map((it, idx) => (
                        <div key={idx} className="text-xs font-mono bg-slate-900 p-2 rounded border border-slate-800/80 text-slate-300 flex justify-between">
                          <span>{it.name}</span>
                          <span className="text-amber-400">ratio: {(it.val / it.wt).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">1D Array State Propagation</span>
                      <span className="font-mono text-emerald-400 font-bold">Max Value = ${unbResult.maxVal}</span>
                    </div>

                    <div className="space-y-2">
                      {unbResult.trace.map((tr, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="text-[11px] font-mono text-indigo-400">After item: {tr.item}</span>
                          <div className="flex flex-wrap gap-1">
                            {tr.row.map((val, w) => (
                              <div key={w} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-center min-w-[34px]">
                                <span className="block text-[8px] text-slate-400">w={w}</span>
                                <span className="font-bold text-slate-200">{val}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: Subset Sum & Partition Equal */}
            {activeWb === 6 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                    Workbench 6: Subset Sum & Partition Equal Subset Matrix
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Target = TotalSum / 2. Boolean DP transition: <code className="text-indigo-300 font-mono">dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num]</code>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs text-slate-400 font-mono">Input Array Presets:</span>
                  {[
                    [1, 5, 11, 5],
                    [1, 2, 3, 5],
                    [2, 2, 2, 2],
                    [3, 1, 5, 9, 12]
                  ].map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSubsetArr(preset)}
                      className={`px-3 py-1 text-xs rounded-lg border font-mono transition ${
                        JSON.stringify(subsetArr) === JSON.stringify(preset)
                          ? "bg-indigo-600/30 border-indigo-500 text-indigo-300"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      [{preset.join(", ")}]
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-xs text-slate-400 font-mono">Total Array Sum</div>
                    <div className="text-2xl font-bold text-white font-mono">{subsetResult.total}</div>
                    <div className={`p-2.5 rounded-lg border text-xs leading-relaxed ${
                      subsetResult.isEven ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300" : "bg-red-950/30 border-red-500/40 text-red-300"
                    }`}>
                      {subsetResult.isEven ? `Even total sum (${subsetResult.total}). Required subset target = ${subsetResult.target}.` : `Odd total sum (${subsetResult.total}). Cannot be split into two equal integers!`}
                    </div>
                    <div className="pt-2">
                      <span className="text-xs text-slate-400 font-mono block">Can Partition Equally?</span>
                      <span className={`text-lg font-bold font-mono ${subsetResult.canPartition ? "text-emerald-400" : "text-red-400"}`}>
                        {subsetResult.canPartition ? "TRUE (Partition Exists)" : "FALSE (Impossible)"}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-2 overflow-x-auto bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-2">Subset Sum Boolean Table (up to target = {subsetResult.target})</div>
                    <table className="w-full text-center text-xs font-mono border-collapse">
                      <thead>
                        <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                          <th className="p-1.5 text-left">i \ sum</th>
                          {Array.from({ length: subsetResult.target + 1 }, (_, j) => (
                            <th key={j} className="p-1.5">{j}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {subsetResult.dpTable.map((row, i) => (
                          <tr key={i}>
                            <td className="p-1.5 text-left font-sans text-slate-300">
                              {i === 0 ? "0 (empty)" : `${i}. num=${subsetArr[i - 1]}`}
                            </td>
                            {row.map((val, j) => (
                              <td
                                key={j}
                                className={`p-1.5 font-bold ${
                                  val ? "text-emerald-400 bg-emerald-500/10" : "text-slate-400"
                                }`}
                              >
                                {val ? "T" : "F"}
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

            {/* WORKBENCH 7: Coin Change I vs II */}
            {activeWb === 7 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-indigo-400" />
                      Workbench 7: Coin Change I (Min Coins) vs Coin Change II (Combinations Count)
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      Coin Change I minimizes coins with INF sentinels. Coin Change II sums ways with coins in outer loop.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">Target Amount:</span>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={coinAmount}
                      onChange={(e) => setCoinAmount(Number(e.target.value))}
                      className="w-28 accent-indigo-500"
                    />
                    <span className="px-2.5 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg text-indigo-300 font-mono font-bold text-xs">
                      Amount = {coinAmount}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Coin Change I */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Coin Change I (Min Coins)</span>
                      <span className="text-xs font-mono text-slate-400">Coins: [{coinList.join(", ")}]</span>
                    </div>
                    <div className="text-3xl font-extrabold text-white font-mono">
                      {coinChangeResult.minCoins === -1 ? "Impossible (-1)" : `${coinChangeResult.minCoins} Coins`}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Recurrence: <code className="text-indigo-300 font-mono">dp[a] = Math.min(dp[a], 1 + dp[a - c])</code>.
                      Base case: <code className="text-indigo-300 font-mono">dp[0] = 0</code>, all others INF.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {coinChangeResult.dpMin.map((val, a) => (
                        <div key={a} className="p-1.5 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-center min-w-[34px]">
                          <span className="block text-[8px] text-slate-400">amt={a}</span>
                          <span className={`font-bold ${val >= 999999 ? "text-red-400" : "text-emerald-400"}`}>
                            {val >= 999999 ? "∞" : val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Coin Change II */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Coin Change II (Distinct Ways)</span>
                      <span className="text-xs font-mono text-slate-400">Order Does NOT Matter</span>
                    </div>
                    <div className="text-3xl font-extrabold text-white font-mono">
                      {coinChangeResult.totalWays} Combinations
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Recurrence: <code className="text-emerald-300 font-mono">dp[a] += dp[a - c]</code> with coins in outer loop to prevent ordered permutations. Base: <code className="text-emerald-300 font-mono">dp[0] = 1</code>.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {coinChangeResult.dpWays.map((val, a) => (
                        <div key={a} className="p-1.5 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-center min-w-[34px]">
                          <span className="block text-[8px] text-slate-400">amt={a}</span>
                          <span className="font-bold text-emerald-300">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 8: LCS & Edit Distance Studio */}
            {activeWb === 8 && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-7 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-indigo-400" />
                      Workbench 8: String DP Studio (LCS & Edit Distance)
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400">
                      Two-dimensional string grid dynamic programming with character alignment.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLcsTab("lcs")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                        lcsTab === "lcs" ? "bg-indigo-600/30 border-indigo-500 text-indigo-300" : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}
                    >
                      Longest Common Subsequence
                    </button>
                    <button
                      onClick={() => setLcsTab("edit")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                        lcsTab === "edit" ? "bg-indigo-600/30 border-indigo-500 text-indigo-300" : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}
                    >
                      Edit Distance (Levenshtein)
                    </button>
                  </div>
                </div>

                {/* String Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 font-mono block mb-1">String 1 (s1):</label>
                    <input
                      type="text"
                      value={s1}
                      onChange={(e) => setS1(e.target.value.toLowerCase().replace(/[^a-z]/g, ''))}
                      maxLength={10}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-mono block mb-1">String 2 (s2):</label>
                    <input
                      type="text"
                      value={s2}
                      onChange={(e) => setS2(e.target.value.toLowerCase().replace(/[^a-z]/g, ''))}
                      maxLength={10}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* Sub-view: LCS */}
                {lcsTab === "lcs" && (
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">LCS DP Grid Matrix</span>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono">Length: <strong className="text-indigo-400">{lcsResult.lcsLen}</strong></span>
                        <span className="text-slate-400 font-mono">String: <strong className="text-emerald-400 font-mono">"{lcsResult.lcsStr}"</strong></span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-center text-xs font-mono border-collapse">
                        <thead>
                          <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                            <th className="p-2 text-left">s1 \ s2</th>
                            <th className="p-2">ε</th>
                            {s2.split('').map((ch, j) => (
                              <th key={j} className="p-2 text-indigo-300 font-bold">{ch}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {lcsResult.dp.map((row, i) => (
                            <tr key={i}>
                              <td className="p-2 text-left text-indigo-300 font-bold">
                                {i === 0 ? "ε" : s1[i - 1]}
                              </td>
                              {row.map((val, j) => {
                                const isMatch = i > 0 && j > 0 && s1[i - 1] === s2[j - 1];
                                return (
                                  <td
                                    key={j}
                                    className={`p-2 ${
                                      isMatch
                                        ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40"
                                        : "text-slate-300"
                                    }`}
                                  >
                                    {val}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Sub-view: Edit Distance */}
                {lcsTab === "edit" && (
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">Levenshtein Edit Operations Grid</span>
                      <span className="font-mono text-emerald-400 font-bold text-sm">
                        Minimum Operations: {editDistResult.distance}
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-center text-xs font-mono border-collapse">
                        <thead>
                          <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                            <th className="p-2 text-left">s1 \ s2</th>
                            <th className="p-2">ε</th>
                            {s2.split('').map((ch, j) => (
                              <th key={j} className="p-2 text-amber-300 font-bold">{ch}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {editDistResult.dp.map((row, i) => (
                            <tr key={i}>
                              <td className="p-2 text-left text-amber-300 font-bold">
                                {i === 0 ? "ε" : s1[i - 1]}
                              </td>
                              {row.map((val, j) => {
                                const isFinal = i === s1.length && j === s2.length;
                                return (
                                  <td
                                    key={j}
                                    className={`p-2 ${
                                      isFinal
                                        ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/50"
                                        : "text-slate-300"
                                    }`}
                                  >
                                    {val}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: CURRICULUM READER */}
        {activeMode === "reader" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Sidebar Table of Contents */}
            <div className="lg:col-span-1 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sticky top-4 max-h-[85vh] flex flex-col gap-3">
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

              <div className="overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-start gap-2 ${
                      activeSectionId === sec.id
                        ? "bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-slate-400 mt-0.5">{sec.id}.</span>
                    <span className="truncate">{sec.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                  Section {activeSection.id} of 31
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
                  disabled={activeSectionId >= JAVA_DYNAMIC_PROGRAMMING_SECTIONS.length - 1}
                  onClick={() => setActiveSectionId(prev => Math.min(JAVA_DYNAMIC_PROGRAMMING_SECTIONS.length - 1, prev + 1))}
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
                    35 Dynamic Programming Practice Labs & Interview Roadmap
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400">
                    Track your progress across 4 curated levels from beginner memoization to advanced competitive DP patterns.
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
                  Module 19 Mastery Assessment Quiz
                </h3>
                <p className="text-xs text-slate-400">15 Scenario-based Dynamic Programming Questions</p>
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
