import React, { useState, useMemo } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Award,
  CheckSquare,
  Square,
  Layers,
  Search,
  Zap,
  Play,
  RotateCcw,
  BarChart3,
  Terminal,
  ShieldCheck,
  Code2,
  Users,
  Compass,
  AlertTriangle
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_INTERVIEW_MASTERY_SECTIONS } from "./JavaInterviewMasterySections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "In the 7-step coding interview framework, what should a candidate always do immediately after listening to or reading the problem statement?",
    options: [
      "Clarify ambiguous requirements, input bounds, edge scenarios, and constraints with the interviewer before discussing any code",
      "Immediately write out the most optimized Java solution in the editor",
      "Begin writing unit test cases and setting up JUnit runner infrastructure",
      "Ask the interviewer to provide the optimal time and space complexity constraints right away"
    ],
    correct: 0,
    explanation: "Step 1 & 2 of the framework mandate confirming understanding and clarifying requirements (input sizes, types, sortedness, edge bounds) before jumping into algorithmic design or coding."
  },
  {
    id: 2,
    question: "When asked to solve an unfamiliar problem, why is articulating a brute-force solution first considered an interview best practice?",
    options: [
      "It establishes a correct baseline, demonstrates problem comprehension, guarantees a working fallback, and reveals redundant operations to optimize",
      "It allows the candidate to stall for time while searching for the optimal answer online",
      "Interviewers reject candidates who propose an optimal solution immediately without writing brute force first",
      "Brute force solutions in Java are automatically optimized by the HotSpot JIT compiler to linear time"
    ],
    correct: 0,
    explanation: "Articulating a brute force approach proves you comprehend the problem, guarantees you have a baseline correct answer, and pinpoints where redundant computations occur, allowing systematic optimization."
  },
  {
    id: 3,
    question: "In the classic Two Sum problem (find indices of two numbers that add up to target), how does the optimal single-pass approach achieve O(N) time complexity?",
    options: [
      "By storing each seen number and its index in a HashMap, checking if (target - nums[i]) exists in expected O(1) time per element",
      "By sorting the array in O(N log N) time and using nested binary searches",
      "By using two nested loops iterating from i = 0 and j = i + 1",
      "By converting all numbers into a Trie and querying prefixes"
    ],
    correct: 0,
    explanation: "A HashMap stores previously inspected elements mapped to their indices. For each element nums[i], checking whether the complement target - nums[i] has already been seen takes expected O(1) time, solving the problem in O(N) total time and O(N) space."
  },
  {
    id: 4,
    question: "Which of the following represents a critical edge case category that should ALWAYS be evaluated during interview problem analysis?",
    options: [
      "Empty collections, single-element inputs, negative values, duplicates, and integer overflow at bounds",
      "Whether the JVM runs in 32-bit or 64-bit client mode",
      "Whether the interviewer uses dark mode or light mode in their IDE",
      "Whether the target computer has multiple CPU sockets"
    ],
    correct: 0,
    explanation: "Core algorithmic edge cases include empty inputs ([], \"\"), single elements, two elements, duplicate elements, negative numbers, extreme numeric values (Integer.MAX_VALUE, Integer.MIN_VALUE), and large-scale inputs."
  },
  {
    id: 5,
    question: "What is the primary objective of performing a systematic dry run with a variable trace table before declaring code complete in an interview?",
    options: [
      "To trace state variables step-by-step through a concrete test case, catching off-by-one errors and pointer bugs before execution",
      "To measure the exact microsecond execution latency on the host CPU",
      "To convince the interviewer that automated tests are unnecessary",
      "To reformat indentation and rename local variables"
    ],
    correct: 0,
    explanation: "A dry run involves manually tracing pointers, counters, and state variables row-by-row on a concrete sample input. This verifies correctness, validates loop termination, and uncovers off-by-one bugs before running."
  },
  {
    id: 6,
    question: "In Floyd's Cycle-Finding Algorithm (Tortoise and Hare) for singly linked lists, how do the two pointers operate to detect a loop in O(N) time and O(1) space?",
    options: [
      "Slow pointer advances 1 node per step while Fast pointer advances 2 nodes per step; if they meet, a cycle exists",
      "Both pointers start at the tail and move backward towards the head node",
      "Fast pointer counts all visited nodes into a dynamic HashSet while slow pointer deletes them",
      "Slow pointer advances 2 nodes while fast pointer reverses the list nodes in-place"
    ],
    correct: 0,
    explanation: "Floyd's algorithm uses two pointers: slow (slow = slow.next) and fast (fast = fast.next.next). If a cycle exists, the fast pointer closes the relative distance by 1 node per iteration until both pointers reference the identical node."
  },
  {
    id: 7,
    question: "When reversing a singly linked list iteratively in O(N) time and O(1) space, why is a temporary nextNode pointer mandatory inside the traversal loop?",
    options: [
      "Because updating current.next = previous breaks the link to the remainder of the list, losing access to subsequent nodes unless preserved first",
      "Because Java Garbage Collection deletes unreferenced next nodes immediately within loop scope",
      "Because LinkedList in Java requires synchronized double buffering during pointer mutation",
      "Because the JVM memory model prohibits direct reference reassignment without an intermediate register"
    ],
    correct: 0,
    explanation: "In ReverseLinkedList, overwriting current.next to point backwards to previous severs the forward pointer chain. Storing ListNode nextNode = current.next prior to mutating current.next ensures the remaining unreversed chain remains accessible."
  },
  {
    id: 8,
    question: "In Kadane's algorithm for finding the Maximum Subarray Sum, what is the core dynamic programming recurrence relation evaluated at each index i?",
    options: [
      "currentSum = Math.max(nums[i], currentSum + nums[i])",
      "currentSum = currentSum + nums[i] unconditionally",
      "currentSum = Math.min(nums[i], currentSum - nums[i])",
      "currentSum = Math.max(nums[i], nums[i - 1])"
    ],
    correct: 0,
    explanation: "Kadane's algorithm determines whether to extend the existing contiguous subarray (currentSum + nums[i]) or discard the prior subarray and restart a fresh subarray at nums[i], yielding currentSum = Math.max(nums[i], currentSum + nums[i])."
  },
  {
    id: 9,
    question: "In the 'Longest Substring Without Repeating Characters' problem, what allows the sliding window to achieve O(N) time complexity rather than O(N^2)?",
    options: [
      "Each character is added by the right pointer once and removed by the left pointer at most once, meaning both pointers traverse at most N steps",
      "The string is converted into a sorted array of characters",
      "A nested loop rescans all characters from index 0 whenever a duplicate is found",
      "Regular expressions pre-filter all repeated subsequences in O(1) time"
    ],
    correct: 0,
    explanation: "In a sliding window with two pointers left and right, both indices advance strictly monotonically from 0 to N. Because each element enters and leaves the window at most once, total time complexity is bounded by O(2N) = O(N)."
  },
  {
    id: 10,
    question: "Why is Breadth-First Search (BFS) preferred over Depth-First Search (DFS) when finding the shortest path in an unweighted graph?",
    options: [
      "BFS explores vertices in order of increasing distance level-by-level, guaranteeing the first time the target is reached represents the minimum edge count",
      "BFS requires O(1) auxiliary space whereas DFS requires exponential memory",
      "DFS cannot be implemented on unweighted graphs in Java",
      "BFS operates without needing a visited set"
    ],
    correct: 0,
    explanation: "BFS processes nodes radially level by level in non-decreasing order of path length from the source. In an unweighted graph, the first time a destination vertex is dequeued, the path traversed is guaranteed to be the shortest."
  },
  {
    id: 11,
    question: "In the House Robber problem (cannot rob two adjacent houses), what is the optimal state transition and space optimization?",
    options: [
      "current = Math.max(previousOne, previousTwo + nums[i]), which only requires two scalar tracking variables instead of an entire array",
      "dp[i] = dp[i - 1] + dp[i - 2]",
      "current = Math.min(previousOne, nums[i])",
      "Using a 2D matrix of size N x N to track all possible combinations"
    ],
    correct: 0,
    explanation: "At house i, the robber can either skip house i (taking previousOne) or rob house i (taking previousTwo + nums[i]). Because calculating current only depends on the previous two values, space can be reduced to O(1) auxiliary variables."
  },
  {
    id: 12,
    question: "In Java, why should iterative String concatenation inside loops (e.g., s += ch) be replaced with StringBuilder during technical interviews?",
    options: [
      "String is immutable; each '+' creates a new String and copies existing characters, leading to O(N^2) time and massive heap allocation churn",
      "String concatenation causes compiler syntax errors in Java 8 and higher",
      "The '+' operator in Java is non-deterministic and can scramble characters",
      "StringBuilder automatically validates palindrome properties"
    ],
    correct: 0,
    explanation: "Because java.lang.String is immutable, repeated concatenation inside an N-iteration loop allocates a new character array each time, copying all prior characters and accumulating O(N^2) total work. StringBuilder uses a dynamic buffer with amortized O(1) appends, finishing in O(N) time."
  },
  {
    id: 13,
    question: "What is the consequence of overriding equals() in a custom Java class without overriding hashCode() when instances are used as HashMap keys?",
    options: [
      "Logically equal keys may produce different hash codes, resulting in entries being placed into wrong buckets and failing subsequent lookups",
      "The JVM throws a FatalClassFormatError at runtime",
      "The HashMap automatically locks all threads permanently",
      "Keys will automatically be sorted in descending order"
    ],
    correct: 0,
    explanation: "The Java contract requires: if a.equals(b) is true, then a.hashCode() == b.hashCode() must also be true. If violated, map.get(newKey) hashes to a different bucket than where the equal key was stored, causing lookup failures."
  },
  {
    id: 14,
    question: "During a 90-minute Online Assessment (OA) with 3 problems, what is the recommended time triage strategy?",
    options: [
      "Read all 3 questions first, rank them by difficulty/pattern familiarity, solve the easiest first to secure points, and budget time for testing",
      "Spend the first 80 minutes attempting the hardest question to maximize partial credit",
      "Write code for all three simultaneously in three different browser tabs",
      "Submit empty files immediately to check if automated test cases reveal answers"
    ],
    correct: 0,
    explanation: "Triage strategy advises: spend 5 minutes reading all questions, solve the most straightforward question first to secure baseline points and build momentum, allocate balanced time to medium/hard, and reserve the final 10 minutes for edge testing."
  },
  {
    id: 15,
    question: "What is the 'Think-Aloud' protocol and why do top tech companies heavily weight it in engineering interview rubrics?",
    options: [
      "Continuously vocalizing your thought process, trade-offs, and reasoning so the interviewer understands how you formulate solutions and collaborate",
      "Reading every Java keyword aloud in a high-pitch voice as you type it",
      "Singing pseudocode out loud to memorize syntax rules",
      "Reciting Java documentation word-for-word from memory"
    ],
    correct: 0,
    explanation: "The Think-Aloud protocol gives the interviewer visibility into your analytical problem-solving process, architectural trade-offs, and communication skills. It also allows the interviewer to guide you before you invest time into flawed approaches."
  }
];

// --- 35 PRACTICE PROBLEMS TRACKER ACROSS 4 LEVELS ---
const PRACTICE_PROBLEMS = [
  // Level 1: Data Structures & Core Java Fundamentals (1-9)
  { id: 1, title: "Two Sum with HashMap Complement", level: 1, difficulty: "Easy", pattern: "Hashing", time: "O(N)", space: "O(N)" },
  { id: 2, title: "Valid Anagram with Frequency Array", level: 1, difficulty: "Easy", pattern: "Strings / Arrays", time: "O(N)", space: "O(1)" },
  { id: 3, title: "Valid Palindrome with Two Pointers", level: 1, difficulty: "Easy", pattern: "Two Pointers", time: "O(N)", space: "O(1)" },
  { id: 4, title: "Reverse Singly Linked List In-Place", level: 1, difficulty: "Easy", pattern: "Pointers", time: "O(N)", space: "O(1)" },
  { id: 5, title: "Detect Cycle in Linked List (Floyd's Algorithm)", level: 1, difficulty: "Easy", pattern: "Fast & Slow Pointers", time: "O(N)", space: "O(1)" },
  { id: 6, title: "Valid Parentheses with ArrayDeque Stack", level: 1, difficulty: "Easy", pattern: "Stack", time: "O(N)", space: "O(N)" },
  { id: 7, title: "Implement Queue using Two Stacks", level: 1, difficulty: "Easy", pattern: "Stack / Queue", time: "Amortized O(1)", space: "O(N)" },
  { id: 8, title: "Maximum Subarray (Kadane's Algorithm)", level: 1, difficulty: "Medium", pattern: "Dynamic Programming", time: "O(N)", space: "O(1)" },
  { id: 9, title: "Binary Search & Interval Invariant Verification", level: 1, difficulty: "Easy", pattern: "Binary Search", time: "O(log N)", space: "O(1)" },

  // Level 2: Coding Interview Patterns (10-18)
  { id: 10, title: "Longest Substring Without Repeating Characters", level: 2, difficulty: "Medium", pattern: "Sliding Window", time: "O(N)", space: "O(min(N, M))" },
  { id: 11, title: "Subarray Sum Equals K (Prefix Sum + HashMap)", level: 2, difficulty: "Medium", pattern: "Prefix Sums", time: "O(N)", space: "O(N)" },
  { id: 12, title: "Container With Most Water", level: 2, difficulty: "Medium", pattern: "Two Pointers", time: "O(N)", space: "O(1)" },
  { id: 13, title: "3Sum Zero Triplet Elimination", level: 2, difficulty: "Medium", pattern: "Sorting + Two Pointers", time: "O(N^2)", space: "O(1)" },
  { id: 14, title: "Sliding Window Maximum with Monotonic Deque", level: 2, difficulty: "Hard", pattern: "Monotonic Queue", time: "O(N)", space: "O(K)" },
  { id: 15, title: "Next Greater Element using Monotonic Stack", level: 2, difficulty: "Medium", pattern: "Monotonic Stack", time: "O(N)", space: "O(N)" },
  { id: 16, title: "Merge Overlapping Intervals", level: 2, difficulty: "Medium", pattern: "Intervals / Sorting", time: "O(N log N)", space: "O(N)" },
  { id: 17, title: "Top K Frequent Elements (Min-Heap / Bucket Sort)", level: 2, difficulty: "Medium", pattern: "Heap / PriorityQueue", time: "O(N log K)", space: "O(N)" },
  { id: 18, title: "Find First and Last Position in Sorted Array", level: 2, difficulty: "Medium", pattern: "Binary Search", time: "O(log N)", space: "O(1)" },

  // Level 3: Trees, Graphs & Dynamic Programming (19-27)
  { id: 19, title: "Binary Tree Level Order Traversal (BFS)", level: 3, difficulty: "Medium", pattern: "Tree BFS", time: "O(N)", space: "O(W)" },
  { id: 20, title: "Lowest Common Ancestor in Binary Tree", level: 3, difficulty: "Medium", pattern: "Tree DFS", time: "O(N)", space: "O(H)" },
  { id: 21, title: "Validate Binary Search Tree (Range Invariant)", level: 3, difficulty: "Medium", pattern: "Tree Traversal", time: "O(N)", space: "O(H)" },
  { id: 22, title: "Number of Connected Components / Islands", level: 3, difficulty: "Medium", pattern: "Graph BFS / DFS", time: "O(V + E)", space: "O(V)" },
  { id: 23, title: "Shortest Path in Unweighted Grid (BFS)", level: 3, difficulty: "Medium", pattern: "Graph BFS", time: "O(R * C)", space: "O(R * C)" },
  { id: 24, title: "Course Schedule Cycle Detection (Kahn's / DFS)", level: 3, difficulty: "Medium", pattern: "Topological Sort", time: "O(V + E)", space: "O(V + E)" },
  { id: 25, title: "House Robber (Adjacent Optimization)", level: 3, difficulty: "Medium", pattern: "1D DP", time: "O(N)", space: "O(1)" },
  { id: 26, title: "Coin Change (Fewest Coins Combination)", level: 3, difficulty: "Medium", pattern: "Knapsack DP", time: "O(N * Target)", space: "O(Target)" },
  { id: 27, title: "Longest Increasing Subsequence (Patience Sort)", level: 3, difficulty: "Medium", pattern: "DP / Binary Search", time: "O(N log N)", space: "O(N)" },

  // Level 4: Mock Assessments, Placement & Hard Optimization (28-35)
  { id: 28, title: "LRU Cache Design (HashMap + Doubly LinkedList)", level: 4, difficulty: "Hard", pattern: "System / Cache", time: "O(1) all ops", space: "O(Capacity)" },
  { id: 29, title: "Trapping Rain Water (Two Pointers / Monotonic)", level: 4, difficulty: "Hard", pattern: "Two Pointers", time: "O(N)", space: "O(1)" },
  { id: 30, title: "Word Search II (Trie + Backtracking Matrix)", level: 4, difficulty: "Hard", pattern: "Trie / Backtracking", time: "O(M * 4^L)", space: "O(Total Chars)" },
  { id: 31, title: "Serialize and Deserialize Binary Tree", level: 4, difficulty: "Hard", pattern: "Tree Design", time: "O(N)", space: "O(N)" },
  { id: 32, title: "Median of Two Sorted Arrays", level: 4, difficulty: "Hard", pattern: "Binary Search Partition", time: "O(log(min(M, N)))", space: "O(1)" },
  { id: 33, title: "Edit Distance (Levenshtein Matrix DP)", level: 4, difficulty: "Hard", pattern: "2D Grid DP", time: "O(M * N)", space: "O(min(M, N))" },
  { id: 34, title: "Merge K Sorted Linked Lists (Min-Heap / Divide)", level: 4, difficulty: "Hard", pattern: "PriorityQueue", time: "O(N log K)", space: "O(K)" },
  { id: 35, title: "Comprehensive Placement Mock: 3-Problem OA Simulation", level: 4, difficulty: "Hard", pattern: "Timed Assessment", time: "90 min timed", space: "Rigorous" }
];

const KADANE_ARRAY = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

export default function JavaInterviewMastery() {
  // Navigation & Mode state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [viewMode, setViewMode] = useState("guided"); // "guided" or "textbook"
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum", "workbenches", "quiz", "problems"

  // Practice checklist state
  const [completedProblems, setCompletedProblems] = useState(() => new Set());
  const [filterLevel, setFilterLevel] = useState("all");

  // Quiz state
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // --- WORKBENCH 1: 7-STEP INTERVIEW WORKFLOW SIMULATOR ---
  const [workflowStep, setWorkflowStep] = useState(1);
  const WORKFLOW_STEPS = [
    {
      step: 1,
      title: "1. Understand the Problem",
      candidateSay: "Let me rephrase the problem in my own words to confirm my understanding: Given an array of integers and a target sum, I need to find the pair of indices whose values add up exactly to the target.",
      interviewerThought: "Clear comprehension. The candidate didn't immediately jump into coding or assume constraints.",
      actions: ["Listen carefully", "Rephrase requirements in your own words", "State expected input and output data types", "Never start coding immediately"]
    },
    {
      step: 2,
      title: "2. Clarify Requirements & Constraints",
      candidateSay: "A few clarifying questions: Can numbers be negative? Is the array sorted? Can duplicate values exist? What should be returned if no pair satisfies the target? What is the maximum length of the array?",
      interviewerThought: "Excellent engineering rigor. These questions expose boundary conditions and determine algorithm choice.",
      actions: ["Inquire about negative numbers & zero", "Ask about duplicate handling", "Check memory or time limits (e.g. N <= 10^5 vs N <= 10^3)", "Confirm sortedness and return contract"]
    },
    {
      step: 3,
      title: "3. Propose Brute-Force Solution",
      candidateSay: "To establish a correct baseline, a brute-force approach would test every pair (i, j) with two nested loops. If nums[i] + nums[j] == target, return {i, j}. This runs in O(N^2) time and O(1) space.",
      interviewerThought: "Guarantees a working baseline. The candidate recognizes where the quadratic bottleneck lies.",
      actions: ["State naive approach clearly", "Calculate exact Big-O complexity", "Highlight redundant repeated scans", "Use brute force as a springboard for optimization"]
    },
    {
      step: 4,
      title: "4. Optimize the Approach",
      candidateSay: "We can optimize from O(N^2) to O(N) by using a HashMap. As we iterate through nums, we check if the complement (target - nums[i]) was already seen. HashMap lookup is expected O(1), achieving linear time.",
      interviewerThought: "Optimal pattern recognized. Candidate clearly explained the space-time trade-off (trading O(N) auxiliary space for O(N) time).",
      actions: ["Identify algorithmic pattern (Hashing, Two Pointers, Window)", "Explain space-time trade-off", "Verify constraints fit inside typical 10^8 operations/sec budget", "Seek verbal consensus before writing code"]
    },
    {
      step: 5,
      title: "5. State Complexity Before Coding",
      candidateSay: "Before writing the implementation: Time complexity will be O(N) because we perform a single pass with O(1) hash map operations. Space complexity will be O(N) in the worst case to store at most N entries.",
      interviewerThought: "Accurate analysis. Candidate demonstrates theoretical confidence before touching the keyboard.",
      actions: ["State Big-O time complexity", "State Big-O auxiliary space complexity", "Mention worst-case hash collision bounds if asked", "Confirm interviewer agreement"]
    },
    {
      step: 6,
      title: "6. Write Clean Production Code",
      candidateSay: "I will now implement this in Java. I'll declare the Map with interface typing (Map<Integer, Integer>), validate inputs for null or small lengths, and use clean, semantic variable names.",
      interviewerThought: "Production-grade code: clean null checks, meaningful variable names, idiomatic Java collections usage.",
      actions: ["Use interface types (Map, List)", "Write defensive null/boundary checks", "Maintain clean indentation and modular structure", "Avoid cryptic 1-letter variables except loop indices"]
    },
    {
      step: 7,
      title: "7. Dry Run & Edge Case Verification",
      candidateSay: "Let's dry run with nums = [2, 7, 11, 15], target = 9. Step 0: complement 7 not in map, put (2, 0). Step 1: nums[1] = 7, complement 2 found at index 0. Returns {0, 1}. Also verified empty array and negative numbers.",
      interviewerThought: "Thorough verification. Candidate caught no off-by-one errors and proved the logic works without pressing 'Run'. Strong Hire.",
      actions: ["Walk through small concrete test case", "Maintain a mental or drawn trace table", "Test edge scenarios: empty array, single element, negative numbers", "Only run code after manual trace succeeds"]
    }
  ];

  // --- WORKBENCH 2: BRUTE FORCE TO OPTIMIZED TRANSFORMER ---
  const [selectedTransformerProblem, setSelectedTransformerProblem] = useState("twosum");
  const TRANSFORMER_DATA = {
    twosum: {
      title: "Two Sum: Pair Target Sum",
      naive: {
        complexity: "Time: O(N^2) | Space: O(1)",
        description: "Two nested loops checking all possible pairs (i, j).",
        opsFor10k: "100,000,000 comparisons (Slow / TLE risk)",
        code: `// Brute Force: O(N^2)
for (int i = 0; i < n; i++) {
  for (int j = i + 1; j < n; j++) {
    if (nums[i] + nums[j] == target) {
      return new int[]{i, j};
    }
  }
}`
      },
      optimized: {
        complexity: "Time: O(N) | Space: O(N)",
        description: "Single pass with HashMap complement lookup.",
        opsFor10k: "10,000 lookups (~2 milliseconds)",
        code: `// Optimized: O(N) Time, O(N) Space
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < n; i++) {
  int complement = target - nums[i];
  if (map.containsKey(complement)) {
    return new int[]{map.get(complement), i};
  }
  map.put(nums[i], i);
}`
      },
      insight: "Trade-off insight: By trading O(N) heap memory for a HashMap, we eliminate the inner O(N) linear search, converting redundant comparisons into instantaneous O(1) hash bucket queries."
    },
    subarraySum: {
      title: "Subarray Sum Equals K",
      naive: {
        complexity: "Time: O(N^2) | Space: O(1)",
        description: "Nested loops computing cumulative sum for every starting index i and ending index j.",
        opsFor10k: "50,000,000 operations",
        code: `// Brute Force: O(N^2)
int count = 0;
for (int i = 0; i < n; i++) {
  int sum = 0;
  for (int j = i; j < n; j++) {
    sum += nums[j];
    if (sum == k) count++;
  }
}`
      },
      optimized: {
        complexity: "Time: O(N) | Space: O(N)",
        description: "Prefix Sum cumulative count stored in HashMap.",
        opsFor10k: "10,000 map queries",
        code: `// Optimized: O(N) Time, O(N) Space
Map<Integer, Integer> prefixMap = new HashMap<>();
prefixMap.put(0, 1);
int sum = 0, count = 0;
for (int num : nums) {
  sum += num;
  count += prefixMap.getOrDefault(sum - k, 0);
  prefixMap.put(sum, prefixMap.getOrDefault(sum, 0) + 1);
}`
      },
      insight: "Prefix Sum Invariant: If prefixSum[j] - prefixSum[i] = k, then prefixSum[i] = prefixSum[j] - k. Storing past prefix sums in a HashMap lets us count valid prior subarrays in O(1) time."
    },
    longestSubstr: {
      title: "Longest Substring Without Repeating Characters",
      naive: {
        complexity: "Time: O(N^3) or O(N^2) | Space: O(min(N, M))",
        description: "Generate all substrings and check uniqueness with an inner set loop.",
        opsFor10k: "Hundreds of millions of operations",
        code: `// Brute Force: O(N^2)
int maxLen = 0;
for (int i = 0; i < n; i++) {
  Set<Character> seen = new HashSet<>();
  for (int j = i; j < n; j++) {
    if (seen.contains(s.charAt(j))) break;
    seen.add(s.charAt(j));
    maxLen = Math.max(maxLen, j - i + 1);
  }
}`
      },
      optimized: {
        complexity: "Time: O(N) | Space: O(min(N, 128))",
        description: "Sliding window with character last-seen index array.",
        opsFor10k: "10,000 character evaluations",
        code: `// Optimized: O(N) Sliding Window
int[] lastSeen = new int[128];
Arrays.fill(lastSeen, -1);
int left = 0, maxLen = 0;
for (int right = 0; right < s.length(); right++) {
  char c = s.charAt(right);
  left = Math.max(left, lastSeen[c] + 1);
  lastSeen[c] = right;
  maxLen = Math.max(maxLen, right - left + 1);
}`
      },
      insight: "Sliding Window Invariant: Instead of restarting the window at i+1 upon collision, jump the left pointer straight past the duplicate's last-seen index, keeping both pointers strictly forward-moving."
    }
  };

  // --- WORKBENCH 3: SYSTEMATIC DRY-RUN SIMULATOR ---
  const [dryRunStep, setDryRunStep] = useState(0);
  const BINARY_SEARCH_ARRAY = [2, 5, 8, 12, 16, 23, 38];
  const TARGET_VAL = 16;
  const DRY_RUN_HISTORY = [
    { step: 0, low: 0, high: 6, mid: 3, valMid: 12, action: "Compare 12 with target 16 -> 12 < 16, so search right half: low = mid + 1 (4)" },
    { step: 1, low: 4, high: 6, mid: 5, valMid: 23, action: "Compare 23 with target 16 -> 23 > 16, so search left half: high = mid - 1 (4)" },
    { step: 2, low: 4, high: 4, mid: 4, valMid: 16, action: "Compare 16 with target 16 -> 16 == 16, Match found! Return index 4." }
  ];

  // --- WORKBENCH 4: EDGE CASE STRESS TESTER ---
  const [selectedAlgo, setSelectedAlgo] = useState("maxSubarray");
  const EDGE_CASES = [
    { name: "Empty Array", input: "[]", maxSubarray: "Throws IllegalArgumentException (Safe)", twoSum: "Returns [-1, -1] immediately", palindrome: "Returns true (empty string is palindrome)" },
    { name: "Single Element", input: "[42]", maxSubarray: "Returns 42 (Correct, no index overflow)", twoSum: "Returns [-1, -1] (Requires at least 2)", palindrome: "Returns true (single char is palindrome)" },
    { name: "All Duplicates", input: "[5, 5, 5, 5]", maxSubarray: "Returns 20 (All positives summed)", twoSum: "Finds pair {0, 1} if target=10", palindrome: "Returns true" },
    { name: "All Negative Values", input: "[-8, -2, -5, -1]", maxSubarray: "Returns -1 (Kadane correctly tracks least negative)", twoSum: "Works seamlessly with negative complements", palindrome: "N/A" },
    { name: "Extreme Values (Overflow)", input: "[2147483647, 10]", maxSubarray: "Potential int overflow! Suggests long accumulator", twoSum: "Complement calculation target - nums[i] safe", palindrome: "N/A" },
    { name: "Target Not Present", input: "[1, 3, 5], Target=9", maxSubarray: "N/A", twoSum: "Returns [-1, -1] cleanly without NPE", palindrome: "N/A" }
  ];

  // --- WORKBENCH 5: THINK-EXPLAIN-IMPLEMENT COMMUNICATION TRAINER ---
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState(null);
  const COMMUNICATION_SCENARIOS = [
    {
      scenario: "Interviewer asks: 'What happens if the input array contains 100 million integers?'",
      options: [
        {
          id: "A",
          text: "I would just run the HashMap solution because HashMap is O(1).",
          grade: "Weak",
          score: 1,
          feedback: "Dismissive of memory constraints. 100M entries in a Java HashMap requires gigabytes of boxed Integer object overhead and will likely trigger OutOfMemoryError."
        },
        {
          id: "B",
          text: "The O(N) time complexity remains good, but 100 million elements in a standard Java HashMap would consume roughly 3-4 GB of heap memory due to 32-byte Map.Entry object overhead. If memory is constrained, we could sort the array in-place or use external merge sort and apply two pointers in O(1) auxiliary space.",
          grade: "Outstanding (Staff Engineer Tier)",
          score: 5,
          feedback: "Superb engineering depth! You recognized heap memory consumption, object boxing overhead, and proposed an in-place two-pointer sorting trade-off."
        },
        {
          id: "C",
          text: "I don't know, my computer has 16GB of RAM so it should be fine.",
          grade: "Poor",
          score: 0,
          feedback: "Red flag. Production code runs inside constrained container limits; never assume infinite local hardware."
        }
      ]
    },
    {
      scenario: "Interviewer remarks: 'Take a close look at your while loop termination condition: while (left <= right) vs while (left < right).'",
      options: [
        {
          id: "A",
          text: "They are basically the same in Java, it doesn't matter much.",
          grade: "Poor",
          score: 0,
          feedback: "Severe red flag. The choice between <= and < defines whether single-element intervals [i, i] are inspected, preventing off-by-one bugs or infinite loops."
        },
        {
          id: "B",
          text: "Thank you for the prompt! In my Binary Search, because I update high = mid - 1 and low = mid + 1, when the search space shrinks to a single element where low == right, we still must inspect that remaining element. If I used <, that last element would be skipped. So <= is required for this boundary invariant.",
          grade: "Outstanding",
          score: 5,
          feedback: "Perfect collaborative response! You thanked the interviewer, explained the interval invariant clearly, and proved why <= ensures correctness."
        },
        {
          id: "C",
          text: "Let me just change it to < and see if the test passes.",
          grade: "Weak",
          score: 2,
          feedback: "Guess-and-check coding. Interviewers want deliberate reasoning, not trial-and-error changes."
        }
      ]
    },
    {
      scenario: "You are stuck on a Dynamic Programming state transition and have been silent for 40 seconds.",
      options: [
        {
          id: "A",
          text: "Stay completely silent until you figure out the complete solution.",
          grade: "Poor",
          score: 0,
          feedback: "Interview silence is fatal. The interviewer cannot evaluate your thinking or offer timely hints if you don't communicate."
        },
        {
          id: "B",
          text: "Vocalize your thought process: 'I'm currently considering what subproblem dp[i] should represent. If dp[i] is the maximum loot up to house i, then at house i, I either rob it—which requires adding nums[i] to dp[i-2]—or skip it—taking dp[i-1]. Let me test this recurrence on a 3-element example.'",
          grade: "Outstanding",
          score: 5,
          feedback: "Ideal Think-Aloud technique! Vocalizing subproblem choices allows the interviewer to see your logical deduction and nudge you if needed."
        },
        {
          id: "C",
          text: "Ask: 'Can you just tell me the answer?'",
          grade: "Unacceptable",
          score: 0,
          feedback: "Demonstrates complete defeat. Always express your partial progress and ask targeted clarification questions instead."
        }
      ]
    }
  ];

  // --- WORKBENCH 6: FLOYD'S CYCLE DETECTION VISUALIZER ---
  const [cycleStep, setCycleStep] = useState(0);
  // Linked list: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> loop back to 2
  // Nodes: [0, 1, 2, 3, 4, 5]
  const CYCLE_PATH = [
    { slow: 0, fast: 0, note: "Start: Both slow and fast at head (Node 0)" },
    { slow: 1, fast: 2, note: "Step 1: Slow advances 1 -> Node 1 | Fast advances 2 -> Node 2" },
    { slow: 2, fast: 4, note: "Step 2: Slow advances 1 -> Node 2 | Fast advances 2 -> Node 4" },
    { slow: 3, fast: 2, note: "Step 3: Slow advances 1 -> Node 3 | Fast advances 2 -> Node 2 (Wrapped in cycle!)" },
    { slow: 4, fast: 4, note: "Step 4: Slow advances 1 -> Node 4 | Fast advances 2 -> Node 4. Both pointers MEET! Cycle confirmed in O(N) time and O(1) space." }
  ];

  // --- WORKBENCH 7: KADANE'S SUBARRAY MAX VISUALIZER ---
  const [kadaneIndex, setKadaneIndex] = useState(0);
  const kadaneStates = useMemo(() => {
    let cur = KADANE_ARRAY[0];
    let max = KADANE_ARRAY[0];
    const states = [{
      idx: 0,
      val: KADANE_ARRAY[0],
      curSum: cur,
      maxSum: max,
      decision: "Initial element: currentSum = -2, maxSum = -2"
    }];
    for (let i = 1; i < KADANE_ARRAY.length; i++) {
      const val = KADANE_ARRAY[i];
      const extend = cur + val;
      const restart = val;
      if (restart > extend) {
        cur = restart;
        states.push({
          idx: i,
          val,
          curSum: cur,
          maxSum: Math.max(max, cur),
          decision: `Restart new subarray at index ${i} because ${val} > (${cur - val} + ${val} = ${extend})`
        });
      } else {
        cur = extend;
        states.push({
          idx: i,
          val,
          curSum: cur,
          maxSum: Math.max(max, cur),
          decision: `Extend subarray: ${cur - val} + ${val} = ${cur}`
        });
      }
      max = Math.max(max, cur);
    }
    return states;
  }, []);

  // --- WORKBENCH 8: MOCK INTERVIEW SCORING & MISTAKE MATRIX ---
  const [rubricScores, setRubricScores] = useState({
    problemSolving: 4,
    codingExecution: 4,
    communication: 4,
    edgeCases: 3,
    timeManagement: 4
  });

  const totalRubricScore = Object.values(rubricScores).reduce((a, b) => a + b, 0);
  const getRecommendation = (score) => {
    if (score >= 22) return { grade: "Strong Hire", color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/40" };
    if (score >= 18) return { grade: "Hire / Lean Hire", color: "text-orange-400 bg-slate-900 border-orange-500/40" };
    if (score >= 14) return { grade: "Lean No Hire", color: "text-amber-400 bg-amber-950/40 border-amber-500/40" };
    return { grade: "No Hire", color: "text-rose-400 bg-rose-950/40 border-rose-500/40" };
  };

  // Filter practice problems
  const filteredProblems = useMemo(() => {
    return PRACTICE_PROBLEMS.filter((p) => {
      if (filterLevel === "all") return true;
      return p.level === Number(filterLevel);
    });
  }, [filterLevel]);

  // Toggle problem completion
  const toggleProblem = (id) => {
    setCompletedProblems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Section search filter
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return JAVA_INTERVIEW_MASTERY_SECTIONS;
    const q = searchQuery.toLowerCase();
    return JAVA_INTERVIEW_MASTERY_SECTIONS.filter(
      (s) => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Quiz submission handler
  const handleSelectOption = (qId, optIdx) => {
    if (submittedQuiz) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white pb-16">
      {/* Module Navigation Header */}
      <ModuleNav
        track="java"
        currentModuleId="interview-mastery"
        moduleTitle="23. Technical Interview & Placement Mastery"
        totalModules={24}
        prevRoute="/learning/java/collections-jvm"
        nextRoute="/learning/java/capstone-project"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full flex-1">
        {/* Module Header Banner */}
        <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-r from-slate-900 via-slate-900/60 to-slate-900 border border-slate-800 shadow-2xl overflow-hidden mb-8">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Engineering Placement Masterclass
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Module 23 — Technical Interview &amp; Placement Mastery
              </h1>
              <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
                Master the structured 7-step interview framework, brute-force to linear optimization, variable trace dry-runs, think-aloud communication, and top placement problem patterns.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>23 Curriculum Sections</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>8 Interactive Workbenches</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>35 Placement Labs</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-800/80">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === "curriculum"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Curriculum (23 Sections)
            </button>
            <button
              onClick={() => setActiveTab("workbenches")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === "workbenches"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Terminal className="w-4 h-4" />
              8 Interactive Workbenches
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === "quiz"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Award className="w-4 h-4" />
              15 MCQ Placement Quiz
            </button>
            <button
              onClick={() => setActiveTab("problems")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === "problems"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              35 Placement Labs Tracker ({completedProblems.size}/35)
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM READER */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sticky top-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-orange-400" />
                  Table of Contents
                </span>
                <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
                  <button
                    onClick={() => setViewMode("guided")}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                      viewMode === "guided" ? "bg-orange-500 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Focus Mode
                  </button>
                  <button
                    onClick={() => setViewMode("textbook")}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                      viewMode === "textbook" ? "bg-orange-500 text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Full Book
                  </button>
                </div>
              </div>

              {/* Search bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search topics, questions, dry runs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Section list */}
              <div className="max-h-[60vh] overflow-y-auto space-y-1 pr-1 custom-scrollbar dark-scrollbar">
                {filteredSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveSectionId(sec.id);
                        if (viewMode === "textbook") {
                          const elem = document.getElementById(`section-${sec.id}`);
                          if (elem) elem.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      title={sec.title}
                      className={`w-full text-left px-3 py-2 rounded-xl transition-all flex flex-col gap-0.5 text-xs ${
                        isActive
                          ? "bg-orange-500/15 text-orange-300 border border-orange-500/40"
                          : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 border border-transparent"
                      }`}
                    >
                      <div className="font-semibold break-words whitespace-normal leading-snug">{sec.title}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{sec.summary}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              {viewMode === "guided" ? (
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <div>
                      <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider">
                        {activeSectionId === 0
                          ? "Module Overview · 23 Core Sections"
                          : `Section ${activeSectionId} of 23`}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                        {JAVA_INTERVIEW_MASTERY_SECTIONS[activeSectionId]?.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={activeSectionId === 0}
                        onClick={() => setActiveSectionId((prev) => Math.max(0, prev - 1))}
                        className="p-2 rounded-xl bg-slate-800 border border-slate-700 disabled:opacity-40 hover:bg-slate-700 transition-colors"
                        title="Previous section"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        disabled={activeSectionId === JAVA_INTERVIEW_MASTERY_SECTIONS.length - 1}
                        onClick={() =>
                          setActiveSectionId((prev) =>
                            Math.min(JAVA_INTERVIEW_MASTERY_SECTIONS.length - 1, prev + 1)
                          )
                        }
                        className="p-2 rounded-xl bg-slate-800 border border-slate-700 disabled:opacity-40 hover:bg-slate-700 transition-colors"
                        title="Next section"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    {JAVA_INTERVIEW_MASTERY_SECTIONS[activeSectionId]?.content}
                  </div>

                  {/* Section bottom navigation */}
                  <div className="flex items-center justify-between pt-8 mt-12 border-t border-slate-800">
                    <button
                      disabled={activeSectionId === 0}
                      onClick={() => {
                        setActiveSectionId((prev) => Math.max(0, prev - 1));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous Section
                    </button>
                    <button
                      disabled={activeSectionId === JAVA_INTERVIEW_MASTERY_SECTIONS.length - 1}
                      onClick={() => {
                        setActiveSectionId((prev) =>
                          Math.min(JAVA_INTERVIEW_MASTERY_SECTIONS.length - 1, prev + 1)
                        );
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-xs font-semibold text-white disabled:opacity-30 hover:bg-orange-500 shadow-lg shadow-orange-500/20"
                    >
                      Next Section
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Textbook view */
                <div className="space-y-16">
                  {JAVA_INTERVIEW_MASTERY_SECTIONS.map((sec) => (
                    <div
                      key={sec.id}
                      id={`section-${sec.id}`}
                      className="pt-8 border-t first:border-t-0 border-slate-800/80"
                    >
                      <div className="mb-4">
                        <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider">
                          {sec.id === 0 ? "Module Overview" : `Section ${sec.id} of 23`}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                          {sec.title}
                        </h2>
                      </div>
                      <div className="prose prose-invert max-w-none">{sec.content}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: 8 INTERACTIVE WORKBENCHES */}
        {activeTab === "workbenches" && (
          <div className="space-y-12">
            {/* WORKBENCH 1: 7-STEP INTERVIEW WORKFLOW SIMULATOR */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 1: 7-Step Coding Interview Workflow Simulator
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Step through the exact 7-phase methodology expected by Google, Amazon, Microsoft, and Meta interviewers.
                  </p>
                </div>
              </div>

              {/* Step selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 my-6">
                {WORKFLOW_STEPS.map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setWorkflowStep(s.step)}
                    className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                      workflowStep === s.step
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 border border-orange-400"
                        : "bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/60"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75">Step {s.step}</span>
                    <span className="truncate w-full text-center" title={s.title}>{s.title.split(". ")[1]}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Details */}
              {(() => {
                const stepData = WORKFLOW_STEPS.find((s) => s.step === workflowStep);
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950/70 border border-slate-800 p-6 rounded-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
                        <Users className="w-4 h-4" />
                        Candidate Vocalization (What to Say)
                      </div>
                      <blockquote className="p-4 rounded-xl bg-slate-900 border-l-4 border-orange-500 text-slate-200 text-sm italic leading-relaxed">
                        &ldquo;{stepData.candidateSay}&rdquo;
                      </blockquote>

                      <div className="mt-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Tactical Checklist
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {stepData.actions.map((act, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4" />
                          Interviewer Assessment Rubric
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-sm leading-relaxed mt-2">
                          <p className="font-medium">{stepData.interviewerThought}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <button
                          disabled={workflowStep === 1}
                          onClick={() => setWorkflowStep((prev) => Math.max(1, prev - 1))}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                        >
                          &larr; Prior Phase
                        </button>
                        <span className="text-xs font-mono text-slate-400">
                          Phase {workflowStep} of 7
                        </span>
                        <button
                          disabled={workflowStep === 7}
                          onClick={() => setWorkflowStep((prev) => Math.min(7, prev + 1))}
                          className="px-3 py-1.5 rounded-lg bg-orange-500 text-xs font-semibold text-white disabled:opacity-30 hover:bg-orange-500"
                        >
                          Next Phase &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* WORKBENCH 2: BRUTE FORCE TO OPTIMIZED TRANSFORMER */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 2: Brute Force to Optimized Transformer
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Compare naive quadratic nested loops against optimal linear data-structure patterns.
                  </p>
                </div>
              </div>

              {/* Problem selector */}
              <div className="flex flex-wrap gap-2 my-4">
                {Object.keys(TRANSFORMER_DATA).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTransformerProblem(key)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedTransformerProblem === key
                        ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {TRANSFORMER_DATA[key].title}
                  </button>
                ))}
              </div>

              {(() => {
                const data = TRANSFORMER_DATA[selectedTransformerProblem];
                return (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Naive Box */}
                      <div className="p-5 rounded-2xl bg-slate-950/80 border border-rose-500/30 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                              Naive Brute Force
                            </span>
                            <span className="text-xs font-mono text-rose-300 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/40">
                              {data.naive.complexity}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mb-3">{data.naive.description}</p>
                          <pre className="p-3 bg-slate-900 rounded-xl text-xs font-mono text-rose-200 overflow-x-auto">
                            <code>{data.naive.code}</code>
                          </pre>
                        </div>
                        <div className="mt-4 p-2.5 rounded-lg bg-rose-950/20 text-rose-300 text-xs font-mono border border-rose-900/50">
                          Work for N = 10,000: <strong>{data.naive.opsFor10k}</strong>
                        </div>
                      </div>

                      {/* Optimized Box */}
                      <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                              Optimized Pattern
                            </span>
                            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
                              {data.optimized.complexity}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mb-3">{data.optimized.description}</p>
                          <pre className="p-3 bg-slate-900 rounded-xl text-xs font-mono text-emerald-200 overflow-x-auto">
                            <code>{data.optimized.code}</code>
                          </pre>
                        </div>
                        <div className="mt-4 p-2.5 rounded-lg bg-emerald-950/20 text-emerald-300 text-xs font-mono border border-emerald-900/50">
                          Work for N = 10,000: <strong>{data.optimized.opsFor10k}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-orange-500/30 text-orange-200 text-xs leading-relaxed">
                      <strong>Core Optimization Principle:</strong> {data.insight}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* WORKBENCH 3: SYSTEMATIC DRY-RUN SIMULATOR */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 3: Systematic Dry-Run Simulator (Binary Search)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Simulate how interview candidates trace pointer state variables step-by-step before running code.
                  </p>
                </div>
              </div>

              <div className="my-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Array: <code className="text-orange-300">[2, 5, 8, 12, 16, 23, 38]</code> | Target:{" "}
                  <code className="text-emerald-400">{TARGET_VAL}</code>
                </div>

                {/* Array Visualization */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {BINARY_SEARCH_ARRAY.map((num, idx) => {
                    const curState = DRY_RUN_HISTORY[dryRunStep];
                    const isLow = idx === curState.low;
                    const isHigh = idx === curState.high;
                    const isMid = idx === curState.mid;
                    const inRange = idx >= curState.low && idx <= curState.high;

                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm border transition-all ${
                            isMid
                              ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/30 scale-105"
                              : inRange
                              ? "bg-slate-900 text-orange-200 border-orange-500/50"
                              : "bg-slate-900/60 text-slate-600 border-slate-800 opacity-40"
                          }`}
                        >
                          {num}
                        </div>
                        <div className="mt-1 flex flex-col items-center text-[10px] font-mono">
                          <span className="text-slate-500">[{idx}]</span>
                          {isLow && <span className="text-orange-400 font-bold">LOW</span>}
                          {isHigh && <span className="text-amber-400 font-bold">HIGH</span>}
                          {isMid && <span className="text-emerald-400 font-bold">MID</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Trace Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/80">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <th className="p-2.5">Step</th>
                        <th className="p-2.5">Low</th>
                        <th className="p-2.5">High</th>
                        <th className="p-2.5">Mid = (L+H)/2</th>
                        <th className="p-2.5">Value at Mid</th>
                        <th className="p-2.5">Action &amp; Interval Update</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {DRY_RUN_HISTORY.slice(0, dryRunStep + 1).map((row) => (
                        <tr
                          key={row.step}
                          className={row.step === dryRunStep ? "bg-slate-900 text-white" : ""}
                        >
                          <td className="p-2.5 font-bold text-orange-400">Step {row.step + 1}</td>
                          <td className="p-2.5">{row.low}</td>
                          <td className="p-2.5">{row.high}</td>
                          <td className="p-2.5 font-bold text-emerald-400">{row.mid}</td>
                          <td className="p-2.5 font-bold text-amber-300">{row.valMid}</td>
                          <td className="p-2.5 text-slate-200">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Step controls */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800">
                  <button
                    disabled={dryRunStep === 0}
                    onClick={() => setDryRunStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                  >
                    &larr; Step Back
                  </button>
                  <button
                    onClick={() => setDryRunStep(0)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                  <button
                    disabled={dryRunStep === DRY_RUN_HISTORY.length - 1}
                    onClick={() => setDryRunStep((prev) => Math.min(DRY_RUN_HISTORY.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 text-xs font-semibold text-white disabled:opacity-30 hover:bg-emerald-500"
                  >
                    Step Forward &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* WORKBENCH 4: EDGE CASE STRESS TESTER */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 4: Edge Case Stress Tester
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Verify defensive bounds against common corner cases that disqualify candidates in technical rounds.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 my-4">
                <span className="text-xs text-slate-400">Select Algorithm:</span>
                <select
                  value={selectedAlgo}
                  onChange={(e) => setSelectedAlgo(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-orange-500"
                >
                  <option value="maxSubarray">Maximum Subarray (Kadane)</option>
                  <option value="twoSum">Two Sum (HashMap)</option>
                  <option value="palindrome">Valid Palindrome (Two Pointers)</option>
                </select>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-900 text-slate-300 font-mono border-b border-slate-800">
                      <th className="p-3">Edge Case Category</th>
                      <th className="p-3">Sample Input</th>
                      <th className="p-3">Defensive Behavior &amp; Expected Output</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {EDGE_CASES.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40">
                        <td className="p-3 font-semibold text-white">{item.name}</td>
                        <td className="p-3 font-mono text-orange-300">{item.input}</td>
                        <td className="p-3">{item[selectedAlgo]}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                            VERIFIED
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* WORKBENCH 5: THINK-EXPLAIN-IMPLEMENT COMMUNICATION TRAINER */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 5: Think-Explain-Implement Communication Trainer
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Practice answering high-stakes interview follow-ups and navigating hints collaboratively.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Scenario tabs */}
                <div className="flex flex-wrap gap-2">
                  {COMMUNICATION_SCENARIOS.map((sc, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedScenario(i);
                        setSelectedResponse(null);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedScenario === i
                          ? "bg-orange-500 text-white"
                          : "bg-slate-800/80 text-slate-400 hover:text-white"
                      }`}
                    >
                      Scenario {i + 1}
                    </button>
                  ))}
                </div>

                {(() => {
                  const activeSc = COMMUNICATION_SCENARIOS[selectedScenario];
                  return (
                    <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                      <div className="p-3.5 rounded-xl bg-slate-900 border-l-4 border-orange-500 text-sm font-semibold text-white">
                        {activeSc.scenario}
                      </div>

                      <div className="space-y-2 mt-4">
                        <span className="text-xs font-mono text-slate-400">Choose candidate reply:</span>
                        {activeSc.options.map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setSelectedResponse(opt)}
                            className={`w-full text-left p-3.5 rounded-xl text-xs transition-all border ${
                              selectedResponse?.id === opt.id
                                ? "bg-slate-900 border-orange-500 text-white"
                                : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800"
                            }`}
                          >
                            <span className="font-bold text-orange-400 mr-2">{opt.id}.</span>
                            {opt.text}
                          </button>
                        ))}
                      </div>

                      {selectedResponse && (
                        <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Evaluation Grade:
                            </span>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                selectedResponse.score >= 4
                                  ? "bg-emerald-950 text-emerald-400 border border-emerald-500/40"
                                  : selectedResponse.score >= 2
                                  ? "bg-amber-950 text-amber-400 border border-amber-500/40"
                                  : "bg-rose-950 text-rose-400 border border-rose-500/40"
                              }`}
                            >
                              {selectedResponse.grade}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {selectedResponse.feedback}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* WORKBENCH 6: FLOYD'S CYCLE DETECTION VISUALIZER */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 6: Floyd's Cycle Detection Visualizer
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Watch the Tortoise (1x) and Hare (2x) pointers detect a cyclic loop in O(N) time and O(1) space.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                <div className="text-xs font-mono text-slate-400">
                  List: Head(0) &rarr; 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; Loop back to 2
                </div>

                {/* Nodes Display */}
                <div className="flex flex-wrap items-center gap-4">
                  {[0, 1, 2, 3, 4].map((nodeId) => {
                    const stepInfo = CYCLE_PATH[cycleStep];
                    const isSlow = stepInfo.slow === nodeId;
                    const isFast = stepInfo.fast === nodeId;
                    const bothMeet = isSlow && isFast && cycleStep > 0;

                    return (
                      <div key={nodeId} className="flex flex-col items-center">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-base border transition-all ${
                            bothMeet
                              ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-xl shadow-emerald-500/50 scale-110"
                              : isSlow
                              ? "bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/20"
                              : isFast
                              ? "bg-amber-500 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/30"
                              : "bg-slate-900 text-slate-300 border-slate-800"
                          }`}
                        >
                          N{nodeId}
                        </div>
                        <div className="mt-1 flex flex-col items-center text-[10px] font-mono min-h-[30px]">
                          {bothMeet && (
                            <span className="text-emerald-400 font-extrabold animate-pulse">
                              MEET! (Loop)
                            </span>
                          )}
                          {!bothMeet && isSlow && <span className="text-orange-400 font-bold">SLOW (1x)</span>}
                          {!bothMeet && isFast && <span className="text-amber-400 font-bold">FAST (2x)</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                  {CYCLE_PATH[cycleStep].note}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={cycleStep === 0}
                    onClick={() => setCycleStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                  >
                    &larr; Prev Step
                  </button>
                  <button
                    onClick={() => setCycleStep(0)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                  <button
                    disabled={cycleStep === CYCLE_PATH.length - 1}
                    onClick={() => setCycleStep((prev) => Math.min(CYCLE_PATH.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-cyan-600 text-xs font-semibold text-white disabled:opacity-30 hover:bg-cyan-500"
                  >
                    Advance Step &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* WORKBENCH 7: KADANE'S SUBARRAY MAX VISUALIZER */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 7: Kadane's Algorithm &amp; Subarray Max Step Visualizer
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Step through index-by-index DP recurrence:{" "}
                    <code className="text-orange-300">currentSum = Math.max(nums[i], currentSum + nums[i])</code>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  {KADANE_ARRAY.map((num, idx) => {
                    const isCurrent = idx === kadaneIndex;
                    const isProcessed = idx < kadaneIndex;
                    return (
                      <div
                        key={idx}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-xs border transition-all ${
                          isCurrent
                            ? "bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/20 scale-110"
                            : isProcessed
                            ? "bg-slate-800 text-slate-400 border-slate-700"
                            : "bg-slate-900/60 text-slate-600 border-slate-800"
                        }`}
                      >
                        {num}
                      </div>
                    );
                  })}
                </div>

                {(() => {
                  const state = kadaneStates[kadaneIndex];
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs font-mono text-slate-400">Current Element nums[i]</span>
                        <div className="text-2xl font-bold font-mono text-white mt-1">{state.val}</div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs font-mono text-slate-400">currentSum</span>
                        <div className="text-2xl font-bold font-mono text-orange-400 mt-1">{state.curSum}</div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs font-mono text-slate-400">maximumSum</span>
                        <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">{state.maxSum}</div>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono">
                  {kadaneStates[kadaneIndex]?.decision}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={kadaneIndex === 0}
                    onClick={() => setKadaneIndex((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                  >
                    &larr; Prev Index
                  </button>
                  <button
                    onClick={() => setKadaneIndex(0)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                  <button
                    disabled={kadaneIndex === KADANE_ARRAY.length - 1}
                    onClick={() => setKadaneIndex((prev) => Math.min(KADANE_ARRAY.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-orange-500 text-xs font-semibold text-white disabled:opacity-30 hover:bg-orange-500"
                  >
                    Next Index &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* WORKBENCH 8: MOCK INTERVIEW SCORING & MISTAKE MATRIX */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 8: Mock Interview Scoring &amp; Mistake Diagnostic Matrix
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Self-evaluate across the 5 core interview competency dimensions used by top tech hiring committees.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sliders */}
                <div className="lg:col-span-7 space-y-4">
                  {[
                    { key: "problemSolving", label: "1. Problem Solving & Algorithm Selection", desc: "Recognizing underlying patterns and formulating optimal approaches." },
                    { key: "codingExecution", label: "2. Code Quality & Bug-Free Execution", desc: "Clean modular syntax, interface types, and defensive checks." },
                    { key: "communication", label: "3. Think-Aloud & Collaborative Dialogue", desc: "Vocalizing thought process and responding productively to hints." },
                    { key: "edgeCases", label: "4. Edge Case Handling & Dry Run Rigor", desc: "Systematic trace tables, boundary testing before running." },
                    { key: "timeManagement", label: "5. Time Management & Stress Resilience", desc: "Finishing within 35-45 minutes without panic or stalling." }
                  ].map((dim) => (
                    <div key={dim.key} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{dim.label}</span>
                        <span className="font-mono font-bold text-orange-400">{rubricScores[dim.key]} / 5</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{dim.desc}</p>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={rubricScores[dim.key]}
                        onChange={(e) =>
                          setRubricScores((prev) => ({ ...prev, [dim.key]: Number(e.target.value) }))
                        }
                        className="w-full accent-orange-500 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                {/* Score Summary Box */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-950/90 border border-slate-800">
                  <div className="space-y-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Placement Readiness Scorecard
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold text-white">{totalRubricScore}</span>
                      <span className="text-slate-500 text-lg font-mono">/ 25</span>
                    </div>

                    {(() => {
                      const rec = getRecommendation(totalRubricScore);
                      return (
                        <div className={`p-4 rounded-xl border text-center font-bold text-sm ${rec.color}`}>
                          Hiring Recommendation: {rec.grade}
                        </div>
                      );
                    })()}

                    <div className="space-y-2 pt-2 text-xs text-slate-400">
                      <div className="flex justify-between">
                        <span>22 - 25:</span>
                        <span className="text-emerald-400 font-semibold">Strong Hire (Tier-1 Tech)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>18 - 21:</span>
                        <span className="text-orange-400 font-semibold">Hire (Competitive Offer)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>14 - 17:</span>
                        <span className="text-amber-400 font-semibold">Lean No (Needs Pattern Polish)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>&lt; 14:</span>
                        <span className="text-rose-400 font-semibold">No Hire (Revisit DSA Fundamentals)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
                    Maintain an interview error log for every score below 4 to target corrective drills.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 15 MCQ PLACEMENT QUIZ */}
        {activeTab === "quiz" && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  Module 23 Comprehensive Placement Assessment
                </h3>
                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  15 high-frequency technical interview questions testing frameworks, optimization, and edge cases.
                </p>
              </div>
              {submittedQuiz && (
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-emerald-400">
                    {calculateQuizScore()} / {QUIZ_QUESTIONS.length}
                  </div>
                  <div className="text-xs text-slate-400">
                    {Math.round((calculateQuizScore() / QUIZ_QUESTIONS.length) * 100)}% Score
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const selectedOpt = userAnswers[q.id];
                const isCorrect = selectedOpt === q.correct;
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-white">{q.question}</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-2 pl-9">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = selectedOpt === optIdx;
                        let optStyle = "bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800";
                        if (submittedQuiz) {
                          if (optIdx === q.correct) {
                            optStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-300 font-semibold";
                          } else if (isThisSelected) {
                            optStyle = "bg-rose-950/60 border-rose-500 text-rose-300";
                          }
                        } else if (isThisSelected) {
                          optStyle = "bg-slate-900 border-orange-500 text-white font-medium";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={submittedQuiz}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl text-xs transition-all border ${optStyle}`}
                          >
                            <span className="font-mono font-bold mr-2">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {submittedQuiz && (
                      <div
                        className={`ml-9 p-3.5 rounded-xl text-xs leading-relaxed border ${
                          isCorrect
                            ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
                            : "bg-rose-950/20 border-rose-500/30 text-rose-300"
                        }`}
                      >
                        <strong>{isCorrect ? "Correct!" : "Incorrect."}</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setUserAnswers({});
                  setSubmittedQuiz(false);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Reset Assessment
              </button>

              {!submittedQuiz ? (
                <button
                  disabled={Object.keys(userAnswers).length < QUIZ_QUESTIONS.length}
                  onClick={() => setSubmittedQuiz(true)}
                  className="px-6 py-2.5 rounded-xl bg-orange-500 text-xs font-bold text-white hover:bg-orange-500 disabled:opacity-40 shadow-lg shadow-orange-500/20"
                >
                  Submit &amp; View Score
                </button>
              ) : (
                <span className="text-xs font-mono text-emerald-400">
                  Assessment Complete ({calculateQuizScore()} / {QUIZ_QUESTIONS.length})
                </span>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: 35 PRACTICE LABS TRACKER */}
        {activeTab === "problems" && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <CheckSquare className="w-6 h-6 text-orange-400" />
                  35 Technical Placement Problems Tracker
                </h3>
                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  Track your mastery across the 4 standard tiers of technical interview questions.
                </p>
              </div>

              {/* Level Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Filter Tier:</span>
                <select
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-orange-500"
                >
                  <option value="all">All 4 Levels (35)</option>
                  <option value="1">Level 1: Core Fundamentals (9)</option>
                  <option value="2">Level 2: Interview Patterns (9)</option>
                  <option value="3">Level 3: Trees, Graphs &amp; DP (9)</option>
                  <option value="4">Level 4: Mock Rounds &amp; Hard (8)</option>
                </select>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Placement Readiness Progress</span>
                <span className="text-orange-400 font-bold">
                  {completedProblems.size} / 35 Solved (
                  {Math.round((completedProblems.size / 35) * 100)}%)
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${(completedProblems.size / 35) * 100}%` }}
                />
              </div>
            </div>

            {/* Problem list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              {filteredProblems.map((prob) => {
                const isDone = completedProblems.has(prob.id);
                return (
                  <div
                    key={prob.id}
                    onClick={() => toggleProblem(prob.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isDone
                        ? "bg-emerald-950/20 border-emerald-500/40 text-slate-200"
                        : "bg-slate-950/70 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-600 shrink-0" />
                      )}
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span>{prob.id}. {prob.title}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-slate-400">
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300">
                            {prob.pattern}
                          </span>
                          <span>{prob.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          prob.difficulty === "Easy"
                            ? "bg-emerald-950/70 text-emerald-400 border border-emerald-500/30"
                            : prob.difficulty === "Medium"
                            ? "bg-amber-950/70 text-amber-400 border border-amber-500/30"
                            : "bg-rose-950/70 text-rose-400 border border-rose-500/30"
                        }`}
                      >
                        {prob.difficulty}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">Tier {prob.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
