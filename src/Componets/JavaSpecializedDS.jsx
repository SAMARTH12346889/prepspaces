import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
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
  Scale,
  Minimize2,
  GitCommit,
  Hash,
  ListFilter,
  Network,
  GitMerge,
  Table,
  Binary as BinaryIcon
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_SPECIALIZED_DS_SECTIONS } from "./JavaSpecializedDSSections";
import { getCourseAccess, completeModule, UNLOCK_UPDATED_EVENT } from "../services/unlockingService";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the time complexity of searching for a word of length L in a Trie containing N words?",
    options: ["O(L)", "O(N * L)", "O(log N)", "O(N + L)"],
    correct: 0,
    explanation: "A Trie checks at most one node per character of the query string. For a word of length L, exactly L transitions are made down the tree, taking O(L) time regardless of the total word count N."
  },
  {
    id: 2,
    question: "Why does each Trie node require a boolean flag such as isEndOfWord?",
    options: [
      "To differentiate between a complete valid word and an incomplete prefix of a longer word",
      "To prevent recursive cycles from forming in the tree",
      "To record whether all 26 alphabet branches are populated",
      "To enable automatic garbage collection"
    ],
    correct: 0,
    explanation: "If 'app' and 'apple' are both stored, the node at the second 'p' represents both the end of 'app' and an internal prefix node of 'apple'. Without isEndOfWord, searching for 'app' would be indistinguishable from an incomplete prefix."
  },
  {
    id: 3,
    question: "In LeetCode 211 (Wildcard Dictionary Search), how should the '.' character be handled during search?",
    options: [
      "Recursively branch DFS across all existing non-null children of the current node",
      "Convert the Trie into a HashSet and run regex matching",
      "Only match the wildcard against the letter 'a'",
      "Terminate search and return false"
    ],
    correct: 0,
    explanation: "When encountering '.', the search algorithm branches across all existing children via recursion/DFS. If any child path returns true, the wildcard pattern matches."
  },
  {
    id: 4,
    question: "What two critical optimizations allow Disjoint Set Union (DSU) to achieve near-constant O(alpha(N)) amortized time?",
    options: [
      "Path Compression and Union by Rank (or Size)",
      "Splay tree rotation and AVL rebalancing",
      "Binary lifting and topological sorting",
      "Breadth-first search and dynamic programming"
    ],
    correct: 0,
    explanation: "Path Compression flattens the tree depth during find operations, while Union by Rank/Size attaches shallower trees under deeper roots, bounding maximum height."
  },
  {
    id: 5,
    question: "What does the Path Compression optimization do during a find(x) operation in DSU?",
    options: [
      "Re-points node x and all visited ancestors directly to the representative root of their set",
      "Deletes all redundant edges in the graph",
      "Reverses parent pointers to point from root down to leaves",
      "Sorts the set elements in ascending numeric order"
    ],
    correct: 0,
    explanation: "Path compression updates parent[x] = find(parent[x]) during recursion, flattening tree depth so future queries on x or any visited ancestor complete in O(1) time."
  },
  {
    id: 6,
    question: "How does DSU detect a cycle when processing undirected edges in a graph (e.g. Kruskal's or LeetCode 684)?",
    options: [
      "If find(u) == find(v) before adding edge (u, v), adding the edge creates a cycle",
      "If rank[u] equals rank[v], a cycle is formed",
      "If the total number of connected components is greater than 1",
      "If find(u) returns null"
    ],
    correct: 0,
    explanation: "If find(u) == find(v), u and v already belong to the same connected component. Adding edge (u, v) provides an alternate path between them, forming a cycle."
  },
  {
    id: 7,
    question: "Why is a Segment Tree array typically sized to 4 * N for an input array of size N?",
    options: [
      "To accommodate the complete binary tree rounded up to the nearest power of 2 (2^(ceil(log2 N) + 1) < 4N)",
      "Because each node stores 4 pointers to siblings and parents",
      "To support 4-way quaternary branching",
      "To duplicate the tree for multithreaded concurrency"
    ],
    correct: 0,
    explanation: "In an array-based binary tree representation (root at 1, left child 2i, right child 2i+1), rounding N up to the next power of 2 and doubling leaf space guarantees node indices will not exceed 4N."
  },
  {
    id: 8,
    question: "What is the construction time and range query time for a standard Segment Tree on N elements?",
    options: [
      "Build: O(N), Query: O(log N)",
      "Build: O(N log N), Query: O(1)",
      "Build: O(N^2), Query: O(log N)",
      "Build: O(log N), Query: O(N)"
    ],
    correct: 0,
    explanation: "Building the tree visits each of the 2N - 1 nodes once from bottom to top in O(N) time. Any range query visits at most 4 nodes per level in a tree of height O(log N), taking O(log N) time."
  },
  {
    id: 9,
    question: "What bitwise expression isolates the lowest set bit (lowbit) of an integer i in two's complement?",
    options: ["i & (-i)", "i | (-i)", "i ^ (i - 1)", "i & (i - 1)"],
    correct: 0,
    explanation: "In two's complement, -i = (~i + 1). Bitwise ANDing i with -i clears all higher-order bits, isolating the single lowest set 1-bit: lowbit(i) = i & (-i)."
  },
  {
    id: 10,
    question: "In a 1-based Fenwick Tree, how does index i advance when propagating a point update?",
    options: ["i += (i & -i)", "i -= (i & -i)", "i = i * 2", "i = (i - 1) / 2"],
    correct: 0,
    explanation: "A point update adds delta to index i and propagates to all covering ancestor intervals by repeatedly adding its lowest set bit: i += (i & -i) while i <= N."
  },
  {
    id: 11,
    question: "In a 1-based Fenwick Tree, how does index i retreat when computing a prefix sum query?",
    options: ["i -= (i & -i)", "i += (i & -i)", "i = i / 2", "i = (i + 1) >> 1"],
    correct: 0,
    explanation: "A prefix query accumulates tree[i] and strips the lowest set bit: i -= (i & -i) until i reaches 0, visiting at most log2(N) nodes in O(log N) time."
  },
  {
    id: 12,
    question: "What is the memory consumption of a Fenwick Tree compared to a Segment Tree for N elements?",
    options: [
      "Fenwick Tree requires O(N) space (N + 1 ints), while Segment Tree requires ~4N ints",
      "Fenwick Tree requires O(N^2) space, while Segment Tree requires O(N)",
      "Both require identical O(N log N) space",
      "Segment Tree uses less space than Fenwick Tree"
    ],
    correct: 0,
    explanation: "A Fenwick Tree uses exactly one array of size N + 1 (O(N) space) with minimal memory overhead, whereas a standard array-backed Segment Tree allocates 4N elements."
  },
  {
    id: 13,
    question: "Why does a Sparse Table provide O(1) query time for Range Minimum Queries (RMQ) but NOT for Range Sum Queries?",
    options: [
      "Minimum is idempotent: min(A, B) = min(A, B, overlap), while Sum counts overlapping ranges twice",
      "Sparse Tables only store boolean values",
      "Sum causes 64-bit integer overflow in O(1) time",
      "Sparse Tables do not support static arrays"
    ],
    correct: 0,
    explanation: "Because f(x, x) = x for min/max/gcd (idempotence), two overlapping intervals of length 2^k covering [L, R] yield the exact minimum in O(1). For sum, overlapping elements would be added twice."
  },
  {
    id: 14,
    question: "What are the preprocessing time and space complexities for building a Sparse Table on N elements?",
    options: [
      "O(N log N) time and O(N log N) space",
      "O(N) time and O(1) space",
      "O(log N) time and O(N) space",
      "O(N^2) time and O(N) space"
    ],
    correct: 0,
    explanation: "The table computes dp[i][k] for 0 <= i < N and 0 <= k <= floor(log2 N). There are N * (floor(log2 N) + 1) states, each taking O(1) dynamic programming transitions, requiring O(N log N) time and space."
  },
  {
    id: 15,
    question: "Which data structure is the optimal choice for a problem requiring frequent point updates and dynamic range-sum queries with minimal code overhead?",
    options: ["Fenwick Tree (Binary Indexed Tree)", "Sparse Table", "Static Prefix Sum Array", "Trie"],
    correct: 0,
    explanation: "A Fenwick Tree handles both point updates and range-sum queries in O(log N) time with only ~15 lines of code and O(N) space, making it significantly simpler than a Segment Tree for point-sum problems."
  }
];

// --- 45 LABS & PRACTICAL ASSIGNMENTS ---
const LAB_ASSIGNMENTS = [
  // Beginner (1-15)
  { id: 1, tier: "Beginner", title: "TrieNode Class Definition", desc: "Build a TrieNode class supporting 26 lowercase English child pointers and boolean isEndOfWord." },
  { id: 2, tier: "Beginner", title: "Trie Word Insertion", desc: "Implement insert(String word) iterating over characters and creating child nodes dynamically." },
  { id: 3, tier: "Beginner", title: "Trie Word Search", desc: "Implement search(String word) returning true only when all characters match and isEndOfWord is true." },
  { id: 4, tier: "Beginner", title: "Trie Prefix startsWith", desc: "Implement startsWith(String prefix) returning true if any word in the Trie shares the given prefix." },
  { id: 5, tier: "Beginner", title: "Trie Memory Benchmarking", desc: "Compare memory footprints of array-based TrieNode[26] vs HashMap<Character, TrieNode> on sparse datasets." },
  { id: 6, tier: "Beginner", title: "DSU Array Initialization", desc: "Initialize parent[] array where parent[i] = i and size[] / rank[] arrays for N elements." },
  { id: 7, tier: "Beginner", title: "DSU Naive Find Operation", desc: "Implement recursive find without path compression and analyze worst-case O(N) chain degradation." },
  { id: 8, tier: "Beginner", title: "DSU Path Compression Find", desc: "Implement find(x) with recursive parent[x] = find(parent[x]) tree flattening." },
  { id: 9, tier: "Beginner", title: "DSU Union by Rank", desc: "Implement union(x, y) attaching shallower trees under deeper roots and incrementing rank on tie." },
  { id: 10, tier: "Beginner", title: "DSU Union by Size", desc: "Implement union(x, y) attaching smaller component trees under larger roots and summing sizes." },
  { id: 11, tier: "Beginner", title: "Connected Components Counter", desc: "Track total distinct connected components initialized to N, decrementing on every successful union." },
  { id: 12, tier: "Beginner", title: "Lowbit Bitwise Function", desc: "Implement lowbit(int i) = i & (-i) and verify lowest set bit outputs for powers of 2." },
  { id: 13, tier: "Beginner", title: "Fenwick Tree 1-Based Setup", desc: "Build FenwickTree class of size N+1 with empty constructor and O(N log N) naive initialization." },
  { id: 14, tier: "Beginner", title: "Fenwick Tree Point Add", desc: "Implement add(int i, int delta) advancing indices with i += (i & -i)." },
  { id: 15, tier: "Beginner", title: "Fenwick Tree Prefix Query", desc: "Implement query(int i) accumulating values with i -= (i & -i)." },

  // Intermediate (16-30)
  { id: 16, tier: "Intermediate", title: "Trie Autocomplete Suggestions", desc: "Given a prefix, traverse to prefix root and run DFS to collect all words up to a limit K." },
  { id: 17, tier: "Intermediate", title: "Wildcard Word Search (LeetCode 211)", desc: "Support '.' matching any character using recursive DFS branching across non-null child nodes." },
  { id: 18, tier: "Intermediate", title: "Count Distinct Substrings (Trie)", desc: "Insert all suffixes of a string into a Trie; count total nodes created to find unique substrings." },
  { id: 19, tier: "Intermediate", title: "Maximum XOR of Two Numbers (LeetCode 421)", desc: "Build a 32-bit Binary Trie and greedily query opposite bits to maximize XOR." },
  { id: 20, tier: "Intermediate", title: "Word Search II on 2D Board (LeetCode 212)", desc: "Combine Trie dictionary with 2D grid backtracking, pruning visited paths dynamically." },
  { id: 21, tier: "Intermediate", title: "DSU Redundant Connection (LeetCode 684)", desc: "Identify the edge in an undirected graph that creates a cycle using find-and-union." },
  { id: 22, tier: "Intermediate", title: "Number of Provinces (LeetCode 547)", desc: "Count connected components in an adjacency matrix using Disjoint Set Union." },
  { id: 23, tier: "Intermediate", title: "Accounts Merge (LeetCode 721)", desc: "Group user accounts sharing common emails using DSU on email-to-id mapping." },
  { id: 24, tier: "Intermediate", title: "Kruskal's Minimum Spanning Tree", desc: "Sort edges by weight and greedily select non-cyclic edges using DSU until N-1 edges added." },
  { id: 25, tier: "Intermediate", title: "Fenwick Tree Range Sum Query", desc: "Compute sum(L, R) as query(R) - query(L - 1) in O(log N) time." },
  { id: 26, tier: "Intermediate", title: "Fenwick Tree Linear O(N) Build", desc: "Construct a Fenwick Tree in O(N) by pushing current element value to parent index i + lowbit(i)." },
  { id: 27, tier: "Intermediate", title: "Count Inversions via Fenwick Tree", desc: "Coordinate compress array and count inversions (i < j and arr[i] > arr[j]) in O(N log N)." },
  { id: 28, tier: "Intermediate", title: "Segment Tree Recursive Build", desc: "Construct a 4N array Segment Tree for range sums in linear O(N) time." },
  { id: 29, tier: "Intermediate", title: "Segment Tree Range Sum Query", desc: "Handle complete overlap, partial overlap, and no overlap recursive branches in O(log N)." },
  { id: 30, tier: "Intermediate", title: "Segment Tree Point Update", desc: "Update leaf node and recompute ancestor segment sums bottom-up to root." },

  // Advanced (31-45)
  { id: 31, tier: "Advanced", title: "Segment Tree Range Minimum Query (RMQ)", desc: "Modify segment tree nodes to store min(left, right) with Integer.MAX_VALUE identity element." },
  { id: 32, tier: "Advanced", title: "Segment Tree with Lazy Propagation", desc: "Support range updates [L, R] += val in O(log N) time using lazy tags and push-down mechanics." },
  { id: 33, tier: "Advanced", title: "Sparse Table RMQ Construction", desc: "Precompute dp[i][k] table in O(N log N) using dp[i][k] = min(dp[i][k-1], dp[i + 2^(k-1)][k-1])." },
  { id: 34, tier: "Advanced", title: "Sparse Table O(1) Range Query", desc: "Compute range minimum in O(1) using k = floor(log2(R - L + 1)) and idempotent overlap." },
  { id: 35, tier: "Advanced", title: "Sparse Table Range GCD Query", desc: "Implement static Range Greatest Common Divisor queries exploiting gcd idempotence gcd(a, a) = a." },
  { id: 36, tier: "Advanced", title: "2D Fenwick Tree (Matrix Range Sum)", desc: "Implement 2D BIT supporting point update in O(log R * log C) and submatrix sum queries." },
  { id: 37, tier: "Advanced", title: "Persistent Segment Tree (Versioned)", desc: "Create new path nodes on updates to query historical versions of an array in O(log N) space." },
  { id: 38, tier: "Advanced", title: "Dynamic Segment Tree (Coordinate Compressed)", desc: "Allocate pointer-based nodes on demand to handle queries up to coordinate range 10^9." },
  { id: 39, tier: "Advanced", title: "DSU with Rollback (Undo Operations)", desc: "Record history stack of parent and rank changes to support undoing the last K union operations." },
  { id: 40, tier: "Advanced", title: "DSU on Trees (Small-to-Large Merging)", desc: "Solve offline tree subtree queries in O(N log^2 N) by merging smaller child sets into larger." },
  { id: 41, tier: "Advanced", title: "Trie with Word Frequencies & Ranking", desc: "Store search frequencies at end-of-word nodes and maintain Top-K suggest heaps at prefixes." },
  { id: 42, tier: "Advanced", title: "Ternary Search Tree (TST) Implementation", desc: "Implement balanced 3-way branching (less, equal, greater) saving memory over 26-way arrays." },
  { id: 43, tier: "Advanced", title: "Aho-Corasick Automaton Concept", desc: "Augment Trie with failure links to search for multiple dictionary keywords simultaneously in O(text)." },
  { id: 44, tier: "Advanced", title: "Segment Tree Maximum Subarray Sum", desc: "Maintain total sum, prefix max, suffix max, and best subarray max in each segment node." },
  { id: 45, tier: "Advanced", title: "High-Throughput Geo-Prefix Search Engine", desc: "Architect an in-memory geo-prefix search service combining Trie index and DSU cluster regions." }
];

export default function JavaSpecializedDS() {
  const navigate = useNavigate();

  // Active Mode & Tools
  const [activeTab, setActiveTab] = useState("workbench");
  const [workbenchTool, setWorkbenchTool] = useState("trie-studio");
  const [searchFilter, setSearchFilter] = useState("");
  const [activeSectionId, setActiveSectionId] = useState(0);

  // Access & Completion State
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [completedSections, setCompletedSections] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_java_specialized_ds_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Labs State
  const [completedLabs, setCompletedLabs] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_java_specialized_ds_labs");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [labTierFilter, setLabTierFilter] = useState("All");

  // --- WORKBENCH 1: TRIE & AUTOCOMPLETE STUDIO STATE ---
  const [trieWords, setTrieWords] = useState(["cat", "car", "cart", "card", "dog", "door", "dot"]);
  const [trieInputWord, setTrieInputWord] = useState("");
  const [trieQuery, setTrieQuery] = useState("");
  const [trieSearchRes, setTrieSearchRes] = useState(null);
  const [triePrefixRes, setTriePrefixRes] = useState(null);
  const [trieAutocompleteRes, setTrieAutocompleteRes] = useState([]);
  const [trieLogs, setTrieLogs] = useState(["Initialized Trie with 7 default dictionary words"]);

  const handleTrieInsert = () => {
    const w = trieInputWord.trim().toLowerCase();
    if (!w) return;
    if (trieWords.includes(w)) {
      setTrieLogs(prev => [`Word "${w}" already exists in the Trie`, ...prev.slice(0, 9)]);
      return;
    }
    setTrieWords([...trieWords, w]);
    setTrieLogs(prev => [`Inserted "${w}" into Trie (Length: ${w.length})`, ...prev.slice(0, 9)]);
    setTrieInputWord("");
  };

  const handleTrieSearch = () => {
    const q = trieQuery.trim().toLowerCase();
    if (!q) return;
    const exists = trieWords.includes(q);
    setTrieSearchRes({ word: q, found: exists });
    setTrieLogs(prev => [`search("${q}") -> ${exists ? "TRUE (Exact word found)" : "FALSE (Word not present)"}`, ...prev.slice(0, 9)]);
  };

  const handleTriePrefix = () => {
    const q = trieQuery.trim().toLowerCase();
    if (!q) return;
    const hasPrefix = trieWords.some(w => w.startsWith(q));
    setTriePrefixRes({ prefix: q, found: hasPrefix });
    setTrieLogs(prev => [`startsWith("${q}") -> ${hasPrefix ? "TRUE (Prefix path exists)" : "FALSE (No words share this prefix)"}`, ...prev.slice(0, 9)]);
  };

  const handleTrieAutocomplete = () => {
    const q = trieQuery.trim().toLowerCase();
    if (!q) return;
    const matches = trieWords.filter(w => w.startsWith(q));
    setTrieAutocompleteRes(matches);
    setTrieLogs(prev => [`autocomplete("${q}") via DFS -> Found ${matches.length} word(s): [${matches.join(", ")}]`, ...prev.slice(0, 9)]);
  };

  // --- WORKBENCH 2: WILDCARD DICTIONARY SEARCH STATE ---
  const [wildcardWords, setWildcardWords] = useState(["bad", "dad", "mad", "pad", "bat", "cat"]);
  const [wildcardPattern, setWildcardPattern] = useState(".ad");
  const [wildcardMatches, setWildcardMatches] = useState([]);
  const [wildcardLogs, setWildcardLogs] = useState(["Ready to test wildcard patterns with '.' matching any single character."]);

  const handleWildcardSearch = () => {
    const pattern = wildcardPattern.trim().toLowerCase();
    if (!pattern) return;
    const regex = new RegExp("^" + pattern.replace(/\./g, "[a-z]") + "$");
    const matched = wildcardWords.filter(w => regex.test(w));
    setWildcardMatches(matched);
    setWildcardLogs(prev => [`search("${pattern}") -> DFS matched ${matched.length} word(s): [${matched.join(", ")}]`, ...prev.slice(0, 9)]);
  };

  // --- WORKBENCH 3: DSU (UNION-FIND) VISUALIZER STATE ---
  const [dsuSize] = useState(7);
  const [dsuParent, setDsuParent] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [dsuRank, setDsuRank] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [dsuU, setDsuU] = useState(0);
  const [dsuV, setDsuV] = useState(1);
  const [dsuLogs, setDsuLogs] = useState(["DSU initialized with 7 elements (0..6) in separate sets"]);

  const dsuFind = (i, parentArr) => {
    let curr = i;
    const path = [];
    while (curr !== parentArr[curr]) {
      path.push(curr);
      curr = parentArr[curr];
    }
    return { root: curr, path };
  };

  const handleDsuFind = (node) => {
    const { root, path } = dsuFind(node, dsuParent);
    const newParent = [...dsuParent];
    path.forEach(p => {
      newParent[p] = root;
    });
    setDsuParent(newParent);
    setDsuLogs(prev => [`find(${node}) traversed path [${path.join(" -> ")} ${path.length > 0 ? "->" : ""} ${root}]. Path compression flattened ancestors directly to root ${root}.`, ...prev.slice(0, 9)]);
  };

  const handleDsuUnion = () => {
    const u = parseInt(dsuU);
    const v = parseInt(dsuV);
    if (isNaN(u) || isNaN(v) || u < 0 || u >= dsuSize || v < 0 || v >= dsuSize) return;

    const resU = dsuFind(u, dsuParent);
    const resV = dsuFind(v, dsuParent);
    const rootU = resU.root;
    const rootV = resV.root;

    if (rootU === rootV) {
      setDsuLogs(prev => [`union(${u}, ${v}): Elements already share root ${rootU}! No change.`, ...prev.slice(0, 9)]);
      return;
    }

    const newParent = [...dsuParent];
    const newRank = [...dsuRank];

    if (newRank[rootU] < newRank[rootV]) {
      newParent[rootU] = rootV;
      setDsuLogs(prev => [`union(${u}, ${v}): rank(${rootU}) < rank(${rootV}). Attached tree ${rootU} under root ${rootV}.`, ...prev.slice(0, 9)]);
    } else if (newRank[rootU] > newRank[rootV]) {
      newParent[rootV] = rootU;
      setDsuLogs(prev => [`union(${u}, ${v}): rank(${rootV}) < rank(${rootU}). Attached tree ${rootV} under root ${rootU}.`, ...prev.slice(0, 9)]);
    } else {
      newParent[rootV] = rootU;
      newRank[rootU] += 1;
      setDsuLogs(prev => [`union(${u}, ${v}): Equal ranks! Attached tree ${rootV} under root ${rootU} and incremented rank(${rootU}) to ${newRank[rootU]}.`, ...prev.slice(0, 9)]);
    }

    setDsuParent(newParent);
    setDsuRank(newRank);
  };

  const handleDsuReset = () => {
    setDsuParent(Array.from({ length: dsuSize }, (_, i) => i));
    setDsuRank(Array.from({ length: dsuSize }, () => 0));
    setDsuLogs(["DSU reset. Each element is its own representative root."]);
  };

  // --- WORKBENCH 4: DSU GRAPH CYCLE DETECTOR (LEETCODE 684) ---
  const [cycleEdges] = useState([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]);
  const [cycleStep, setCycleStep] = useState(0);
  const [cycleDsuParent, setCycleDsuParent] = useState([0, 1, 2, 3, 4, 5]);
  const [cycleDetectedEdge, setCycleDetectedEdge] = useState(null);
  const [cycleLogs, setCycleLogs] = useState(["Ready to simulate Redundant Connection (LeetCode 684) edge by edge."]);

  const handleCycleStepForward = () => {
    if (cycleStep >= cycleEdges.length) return;
    const [u, v] = cycleEdges[cycleStep];

    const findRoot = (x, pArr) => {
      let curr = x;
      while (curr !== pArr[curr]) curr = pArr[curr];
      return curr;
    };

    const rootU = findRoot(u, cycleDsuParent);
    const rootV = findRoot(v, cycleDsuParent);

    if (rootU === rootV) {
      setCycleDetectedEdge([u, v]);
      setCycleLogs(prev => [`Edge #${cycleStep + 1} [${u}, ${v}]: find(${u}) = ${rootU} and find(${v}) = ${rootV}. Both endpoints already connected! CYCLE DETECTED! Redundant edge is [${u}, ${v}].`, ...prev.slice(0, 9)]);
      setCycleStep(cycleStep + 1);
    } else {
      const nextP = [...cycleDsuParent];
      nextP[rootU] = rootV;
      setCycleDsuParent(nextP);
      setCycleLogs(prev => [`Edge #${cycleStep + 1} [${u}, ${v}]: find(${u}) = ${rootU} != find(${v}) = ${rootV}. Sets merged safely.`, ...prev.slice(0, 9)]);
      setCycleStep(cycleStep + 1);
    }
  };

  const handleCycleReset = () => {
    setCycleStep(0);
    setCycleDsuParent([0, 1, 2, 3, 4, 5]);
    setCycleDetectedEdge(null);
    setCycleLogs(["Graph cycle detector reset. Ready for step-by-step verification."]);
  };

  // --- WORKBENCH 5: SEGMENT TREE RANGE QUERY & POINT UPDATE ---
  const [segArray, setSegArray] = useState([1, 3, 5, 7, 9, 11]);
  const [segQueryL, setSegQueryL] = useState(1);
  const [segQueryR, setSegQueryR] = useState(4);
  const [segAggFunc, setSegAggFunc] = useState("sum");
  const [segQueryResult, setSegQueryResult] = useState(null);
  const [segUpdateIdx, setSegUpdateIdx] = useState(2);
  const [segUpdateVal, setSegUpdateVal] = useState(6);
  const [segLogs, setSegLogs] = useState(["Segment Tree built for initial array [1, 3, 5, 7, 9, 11]"]);

  const segTree = useMemo(() => {
    const n = segArray.length;
    const tree = new Array(4 * n).fill(0);

    const build = (node, start, end) => {
      if (start === end) {
        tree[node] = segArray[start];
        return;
      }
      const mid = Math.floor((start + end) / 2);
      build(2 * node, start, mid);
      build(2 * node + 1, mid + 1, end);
      if (segAggFunc === "sum") tree[node] = tree[2 * node] + tree[2 * node + 1];
      else if (segAggFunc === "min") tree[node] = Math.min(tree[2 * node], tree[2 * node + 1]);
      else tree[node] = Math.max(tree[2 * node], tree[2 * node + 1]);
    };

    build(1, 0, n - 1);
    return tree;
  }, [segArray, segAggFunc]);

  const handleSegQuery = () => {
    const L = parseInt(segQueryL);
    const R = parseInt(segQueryR);
    const n = segArray.length;
    if (isNaN(L) || isNaN(R) || L < 0 || R >= n || L > R) return;

    const visitedNodes = [];
    const query = (node, s, e) => {
      if (L <= s && e <= R) {
        visitedNodes.push({ node, s, e, type: "COMPLETE OVERLAP", val: segTree[node] });
        return segTree[node];
      }
      if (e < L || s > R) {
        visitedNodes.push({ node, s, e, type: "NO OVERLAP (PRUNED)", val: null });
        return segAggFunc === "sum" ? 0 : segAggFunc === "min" ? Infinity : -Infinity;
      }
      visitedNodes.push({ node, s, e, type: "PARTIAL OVERLAP (SPLIT)", val: null });
      const mid = Math.floor((s + e) / 2);
      const leftVal = query(2 * node, s, mid);
      const rightVal = query(2 * node + 1, mid + 1, e);
      if (segAggFunc === "sum") return leftVal + rightVal;
      if (segAggFunc === "min") return Math.min(leftVal, rightVal);
      return Math.max(leftVal, rightVal);
    };

    const res = query(1, 0, n - 1);
    setSegQueryResult({ L, R, res, visitedNodes });
    setSegLogs(prev => [`Range query [${L}, ${R}] (${segAggFunc.toUpperCase()}) -> ${res}. Visited ${visitedNodes.length} nodes.`, ...prev.slice(0, 9)]);
  };

  const handleSegUpdate = () => {
    const idx = parseInt(segUpdateIdx);
    const val = parseInt(segUpdateVal);
    if (isNaN(idx) || isNaN(val) || idx < 0 || idx >= segArray.length) return;

    const newArr = [...segArray];
    newArr[idx] = val;
    setSegArray(newArr);
    setSegLogs(prev => [`Point update: arr[${idx}] changed from ${segArray[idx]} to ${val}. Ancestors updated bottom-up.`, ...prev.slice(0, 9)]);
  };

  // --- WORKBENCH 6: FENWICK TREE (BIT) & LOWBIT VISUALIZER ---
  const [bitArray] = useState([3, 2, -1, 6, 5, 4, -3, 3]);
  const [bitQueryIdx, setBitQueryIdx] = useState(5);
  const [bitPrefixRes, setBitPrefixRes] = useState(null);
  const [bitInspectNum, setBitInspectNum] = useState(12);
  const [bitLogs, setBitLogs] = useState(["Fenwick Tree initialized with 8 elements (1-based index 1..8)"]);

  const fenwickTree = useMemo(() => {
    const n = bitArray.length;
    const tree = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      let idx = i + 1;
      const val = bitArray[i];
      while (idx <= n) {
        tree[idx] += val;
        idx += idx & -idx;
      }
    }
    return tree;
  }, [bitArray]);

  const handleBitQuery = () => {
    const targetIdx = parseInt(bitQueryIdx);
    if (isNaN(targetIdx) || targetIdx < 1 || targetIdx > bitArray.length) return;

    let idx = targetIdx;
    let sum = 0;
    const path = [];
    while (idx > 0) {
      sum += fenwickTree[idx];
      path.push({ idx, val: fenwickTree[idx], lowbit: idx & -idx });
      idx -= idx & -idx;
    }
    setBitPrefixRes({ targetIdx, sum, path });
    setBitLogs(prev => [`Prefix sum(1..${targetIdx}) -> ${sum}. Traversed indices: [${path.map(p => p.idx).join(" -> ")}].`, ...prev.slice(0, 9)]);
  };

  // --- WORKBENCH 7: SPARSE TABLE STATIC RMQ SIMULATOR ---
  const [sparseArray] = useState([4, 2, 3, 7, 1, 5, 3, 8]);
  const [sparseQueryL, setSparseQueryL] = useState(1);
  const [sparseQueryR, setSparseQueryR] = useState(6);
  const [sparseResult, setSparseResult] = useState(null);
  const [sparseLogs, setSparseLogs] = useState(["Sparse Table built for static RMQ on [4, 2, 3, 7, 1, 5, 3, 8]"]);

  const sparseTable = useMemo(() => {
    const n = sparseArray.length;
    const maxK = Math.floor(Math.log2(n));
    const dp = Array.from({ length: n }, () => new Array(maxK + 1).fill(0));

    for (let i = 0; i < n; i++) {
      dp[i][0] = sparseArray[i];
    }

    for (let j = 1; j <= maxK; j++) {
      for (let i = 0; i + (1 << j) <= n; i++) {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i + (1 << (j - 1))][j - 1]);
      }
    }
    return { dp, maxK };
  }, [sparseArray]);

  const handleSparseQuery = () => {
    const L = parseInt(sparseQueryL);
    const R = parseInt(sparseQueryR);
    const n = sparseArray.length;
    if (isNaN(L) || isNaN(R) || L < 0 || R >= n || L > R) return;

    const len = R - L + 1;
    const k = Math.floor(Math.log2(len));
    const block1Val = sparseTable.dp[L][k];
    const block2Val = sparseTable.dp[R - (1 << k) + 1][k];
    const minVal = Math.min(block1Val, block2Val);

    setSparseResult({
      L,
      R,
      len,
      k,
      pow2: 1 << k,
      block1Range: [L, L + (1 << k) - 1],
      block1Val,
      block2Range: [R - (1 << k) + 1, R],
      block2Val,
      minVal
    });

    setSparseLogs(prev => [`RMQ query [${L}, ${R}] (len=${len}, k=${k}, 2^k=${1 << k}) -> min(${block1Val}, ${block2Val}) = ${minVal} in O(1) time!`, ...prev.slice(0, 9)]);
  };

  // --- WORKBENCH 8: SPECIALIZED DATA STRUCTURE DECISION MATRIX ---
  const [decisionProblem, setDecisionProblem] = useState("dynamic-sum");

  const DECISION_CASES = {
    "dynamic-sum": {
      title: "Point Updates + Dynamic Range Sum Queries",
      winner: "Fenwick Tree (Binary Indexed Tree)",
      alt: "Segment Tree",
      time: "Query: O(log N), Update: O(log N)",
      space: "O(N) (N+1 array ints)",
      pros: "Ultra-compact code (~15 lines), minimal memory, fast cache locality.",
      cons: "Not trivially extensible to complex lazy range updates.",
      verdict: "Use Fenwick Tree unless arbitrary range-range updates with lazy propagation are explicitly required."
    },
    "static-rmq": {
      title: "Static Range Minimum / Maximum Query (No Updates)",
      winner: "Sparse Table",
      alt: "Segment Tree",
      time: "Precompute: O(N log N), Query: O(1) STRICT",
      space: "O(N log N)",
      pros: "True O(1) instant lookup by exploiting idempotent overlap min(A, B).",
      cons: "Immutable array only; any point update would require O(N log N) complete rebuild.",
      verdict: "Unbeatable for static arrays with heavy query traffic (e.g. 10^6 queries)."
    },
    "prefix-autocomplete": {
      title: "String Dictionary with Prefix Search & Autocomplete",
      winner: "Trie (Prefix Tree)",
      alt: "HashMap / TreeSet",
      time: "Insert: O(L), Search: O(L), Prefix: O(L)",
      space: "O(Total Characters * Alphabet)",
      pros: "Optimal prefix pruning, DFS autocomplete, character-by-character validation.",
      cons: "Significant pointer memory overhead when alphabet is large and sparse.",
      verdict: "The gold standard for spell-checkers, IP routing, autocomplete search, and wildcard search."
    },
    "dynamic-connectivity": {
      title: "Dynamic Graph Connectivity & Cycle Detection",
      winner: "Disjoint Set Union (DSU / Union-Find)",
      alt: "BFS / DFS Traversal",
      time: "Amortized O(alpha(N)) practically O(1)",
      space: "O(N) (parent[] and rank[] arrays)",
      pros: "Instant incremental edge checks, component count tracking, avoids graph re-traversals.",
      cons: "Only supports edge insertions (undirected connectivity); edge deletion requires rollback stacks.",
      verdict: "Crucial for Kruskal's MST, LeetCode 684 Redundant Connection, and dynamic grouping."
    },
    "range-update-range-query": {
      title: "Range Updates [L, R] += val & Range Sum Queries [L, R]",
      winner: "Segment Tree with Lazy Propagation",
      alt: "Difference Array (static only)",
      time: "Range Update: O(log N), Range Query: O(log N)",
      space: "O(4N)",
      pros: "Handles arbitrary associative range operations with deferred push-down propagation.",
      cons: "Substantial code volume (~70 lines) and 4N memory allocation.",
      verdict: "The most versatile range query structure in competitive programming and systems."
    }
  };

  // Section completion handler
  const toggleSectionComplete = (idx) => {
    setCompletedSections(prev => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem("prepspaces_java_specialized_ds_progress", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const toggleLabComplete = (id) => {
    setCompletedLabs(prev => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_java_specialized_ds_labs", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const completedSectionCount = Object.values(completedSections).filter(Boolean).length;
  const completedLabCount = Object.values(completedLabs).filter(Boolean).length;

  const filteredLabs = useMemo(() => {
    if (labTierFilter === "All") return LAB_ASSIGNMENTS;
    return LAB_ASSIGNMENTS.filter(lab => lab.tier === labTierFilter);
  }, [labTierFilter]);

  const filteredSections = useMemo(() => {
    if (!searchFilter.trim()) return JAVA_SPECIALIZED_DS_SECTIONS;
    const term = searchFilter.toLowerCase();
    return JAVA_SPECIALIZED_DS_SECTIONS.filter(s =>
      s.title.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
    );
  }, [searchFilter]);

  const handleQuizAnswer = (qId, optionIdx) => {
    if (showQuizResults) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* MODULE HEADER BAR */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/java/heaps")}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Previous Module: Heaps & Priority Queues"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  MODULE 14
                </span>
                <span className="text-xs text-slate-400 font-mono">Advanced DSA</span>
              </div>
              <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                Tries, Disjoint Sets & Specialized Structures
              </h1>
            </div>
          </div>

          {/* MODE SELECTOR */}
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "workbench"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sliders className="w-4 h-4" />
              8 Interactive Workbenches
            </button>
            <button
              onClick={() => setActiveTab("reader")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "reader"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Curriculum (37 Sections)
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "quiz"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Assessment Quiz (15)
            </button>
            <button
              onClick={() => setActiveTab("labs")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "labs"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Award className="w-4 h-4" />
              45 Practical Labs ({completedLabCount}/45)
            </button>
          </div>
        </div>
      </header>

      {/* TOP NOTIFICATION / PROGRESS STATUS BAR */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-4">
            <span>Reading Progress: <strong className="text-emerald-400">{completedSectionCount}</strong> of 37 Sections</span>
            <span>•</span>
            <span>Practical Labs: <strong className="text-cyan-400">{completedLabCount}</strong> of 45 Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-300 font-mono text-[11px]">Specialized Range & Set Data Structures</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
        {/* ========================================================================= */}
        {/* TAB 1: INTERACTIVE WORKBENCHES (8 SPECIALIZED TOOLS)                      */}
        {/* ========================================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* TOOL SELECTOR PILLS */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800">
              {[
                { id: "trie-studio", label: "1. Trie & Autocomplete Studio", icon: FolderTree },
                { id: "wildcard-search", label: "2. Wildcard Dictionary (LC 211)", icon: Search },
                { id: "dsu-visualizer", label: "3. DSU & Path Compression", icon: GitMerge },
                { id: "dsu-cycle", label: "4. DSU Graph Cycle Detector (LC 684)", icon: Activity },
                { id: "segment-tree", label: "5. Segment Tree Range Simulator", icon: BinaryIcon },
                { id: "fenwick-tree", label: "6. Fenwick Tree (BIT) & Lowbit", icon: Calculator },
                { id: "sparse-table", label: "7. Sparse Table O(1) RMQ", icon: Table },
                { id: "decision-matrix", label: "8. Data Structure Decision Matrix", icon: Compass }
              ].map(tool => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setWorkbenchTool(tool.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      workbenchTool === tool.id
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm"
                        : "bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tool.label}
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: TRIE & AUTOCOMPLETE STUDIO */}
            {workbenchTool === "trie-studio" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <FolderTree className="w-4 h-4" />
                      Trie Operations Studio
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Store words in a 26-way prefix tree. Test exact word search, prefix matching, and DFS autocomplete suggestions.
                    </p>

                    {/* Word Insert */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">Insert Word into Trie</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={trieInputWord}
                          onChange={(e) => setTrieInputWord(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleTrieInsert()}
                          placeholder="e.g. apple"
                          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                        />
                        <button
                          onClick={handleTrieInsert}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                        >
                          Insert
                        </button>
                      </div>
                    </div>

                    {/* Word Query */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">Query String</label>
                      <input
                        type="text"
                        value={trieQuery}
                        onChange={(e) => setTrieQuery(e.target.value)}
                        placeholder="e.g. ca"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <button
                          onClick={handleTrieSearch}
                          className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
                        >
                          search(w)
                        </button>
                        <button
                          onClick={handleTriePrefix}
                          className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
                        >
                          startsWith(p)
                        </button>
                        <button
                          onClick={handleTrieAutocomplete}
                          className="px-2 py-1.5 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-medium"
                        >
                          autocomplete(p)
                        </button>
                      </div>
                    </div>

                    {/* Query Outcome Banner */}
                    {trieSearchRes && (
                      <div className={`p-3 rounded-lg text-xs border ${trieSearchRes.found ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-rose-500/10 border-rose-500/30 text-rose-300"}`}>
                        <strong>Exact Search ("{trieSearchRes.word}"):</strong> {trieSearchRes.found ? "✓ FOUND (isEndOfWord = true)" : "✗ NOT FOUND"}
                      </div>
                    )}
                    {triePrefixRes && (
                      <div className={`p-3 rounded-lg text-xs border ${triePrefixRes.found ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300" : "bg-amber-500/10 border-amber-500/30 text-amber-300"}`}>
                        <strong>Prefix startsWith ("{triePrefixRes.prefix}"):</strong> {triePrefixRes.found ? "✓ TRUE (Prefix path exists in Trie)" : "✗ FALSE (No words share this prefix)"}
                      </div>
                    )}
                    {trieAutocompleteRes.length > 0 && (
                      <div className="p-3 rounded-lg text-xs bg-slate-950 border border-cyan-500/30 text-slate-200 space-y-1">
                        <div className="font-semibold text-cyan-400">Autocomplete Suggestions:</div>
                        <div className="flex flex-wrap gap-1">
                          {trieAutocompleteRes.map((w, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-[11px]">
                              {w}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {/* Words stored badge grid */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300">Words Stored in Active Trie ({trieWords.length})</span>
                      <button
                        onClick={() => {
                          setTrieWords(["cat", "car", "cart", "card", "dog", "door", "dot"]);
                          setTrieSearchRes(null);
                          setTriePrefixRes(null);
                          setTrieAutocompleteRes([]);
                          setTrieLogs(["Trie reset to default dataset."]);
                        }}
                        className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Reset Default
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trieWords.map((word, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 flex items-center gap-2"
                        >
                          <span>{word}</span>
                          <span className="text-[10px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-sans">
                            isEnd
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trie Conceptual Hierarchy */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300">Prefix Tree Structure & Branching</span>
                      <span className="text-xs font-mono text-slate-500">Root: [empty, 26 children]</span>
                    </div>
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto space-y-2">
                      <div className="text-amber-400 font-bold">root (isEnd: false)</div>
                      <div className="pl-4 border-l-2 border-slate-800 space-y-1">
                        <div>├── <span className="text-emerald-400 font-semibold">'c'</span> (isEnd: false)</div>
                        <div className="pl-6 border-l-2 border-slate-800 space-y-1">
                          <div>├── <span className="text-emerald-400 font-semibold">'a'</span> (isEnd: false)</div>
                          <div className="pl-6 border-l-2 border-slate-800 space-y-1">
                            <div>├── <span className="text-emerald-400 font-bold">'t'</span> <span className="text-emerald-500 text-[10px] bg-emerald-950 px-1 py-0.5 rounded">[isEnd: true] ("cat")</span></div>
                            <div>└── <span className="text-emerald-400 font-bold">'r'</span> <span className="text-emerald-500 text-[10px] bg-emerald-950 px-1 py-0.5 rounded">[isEnd: true] ("car")</span></div>
                            <div className="pl-6 border-l-2 border-slate-800 space-y-1">
                              <div>├── <span className="text-emerald-400 font-bold">'t'</span> <span className="text-emerald-500 text-[10px] bg-emerald-950 px-1 py-0.5 rounded">[isEnd: true] ("cart")</span></div>
                              <div>└── <span className="text-emerald-400 font-bold">'d'</span> <span className="text-emerald-500 text-[10px] bg-emerald-950 px-1 py-0.5 rounded">[isEnd: true] ("card")</span></div>
                            </div>
                          </div>
                        </div>
                        <div>└── <span className="text-cyan-400 font-semibold">'d'</span> (isEnd: false)</div>
                        <div className="pl-6 border-l-2 border-slate-800 space-y-1">
                          <div>└── <span className="text-cyan-400 font-semibold">'o'</span> (isEnd: false)</div>
                          <div className="pl-6 border-l-2 border-slate-800 space-y-1">
                            <div>├── <span className="text-cyan-400 font-bold">'g'</span> <span className="text-cyan-500 text-[10px] bg-cyan-950 px-1 py-0.5 rounded">[isEnd: true] ("dog")</span></div>
                            <div>├── <span className="text-cyan-400 font-bold">'t'</span> <span className="text-cyan-500 text-[10px] bg-cyan-950 px-1 py-0.5 rounded">[isEnd: true] ("dot")</span></div>
                            <div>└── <span className="text-cyan-400 font-bold">'o'</span> (isEnd: false)</div>
                            <div className="pl-6 border-l-2 border-slate-800">
                              <div>└── <span className="text-cyan-400 font-bold">'r'</span> <span className="text-cyan-500 text-[10px] bg-cyan-950 px-1 py-0.5 rounded">[isEnd: true] ("door")</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity Log */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Trie Operation Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {trieLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: WILDCARD DICTIONARY SEARCH */}
            {workbenchTool === "wildcard-search" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      LeetCode 211: Wildcard Word Search
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Design a word search structure where the <code className="text-amber-400">'.'</code> dot character can match any arbitrary letter from <code className="text-slate-300">'a'</code> through <code className="text-slate-300">'z'</code> using recursive DFS branching.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">Wildcard Pattern (use . for wildcard)</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={wildcardPattern}
                          onChange={(e) => setWildcardPattern(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleWildcardSearch()}
                          placeholder="e.g. .ad, b.., ..t"
                          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                        />
                        <button
                          onClick={handleWildcardSearch}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                        >
                          DFS Search
                        </button>
                      </div>
                    </div>

                    {/* Pre-made Pattern Quick Buttons */}
                    <div className="space-y-1">
                      <span className="text-[11px] text-slate-400">Quick Test Patterns:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {[".ad", "b..", "..t", "d.d", ".a.", "...."].map((pat, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setWildcardPattern(pat);
                              const regex = new RegExp("^" + pat.replace(/\./g, "[a-z]") + "$");
                              const matched = wildcardWords.filter(w => regex.test(w));
                              setWildcardMatches(matched);
                              setWildcardLogs(prev => [`Quick search("${pat}") -> ${matched.length} match(es): [${matched.join(", ")}]`, ...prev.slice(0, 9)]);
                            }}
                            className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs border border-slate-700"
                          >
                            {pat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Results Box */}
                    {wildcardMatches.length > 0 ? (
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                        <div className="font-bold">Match Found! Pattern "{wildcardPattern}" matches:</div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {wildcardMatches.map((m, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono">
                              "{m}"
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                        No matches found for pattern "{wildcardPattern}" or search has not run yet.
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Active Wildcard Dictionary Words</span>
                    <div className="flex flex-wrap gap-2">
                      {wildcardWords.map((word, idx) => {
                        const isMatched = wildcardMatches.includes(word);
                        return (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-xl text-xs font-mono border transition-all ${
                              isMatched
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/10 font-bold scale-105"
                                : "bg-slate-950 text-slate-400 border-slate-800"
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* DFS Recursion Tree Visualization */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                    <span className="text-xs font-semibold text-slate-300">DFS Wildcard Resolution Logic</span>
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
                      <div className="text-slate-400">// Java LeetCode 211 Recursive DFS Logic:</div>
                      <div className="text-orange-300">if (char == '.') &#123;</div>
                      <div className="pl-4 text-emerald-300">// Branch across ALL non-null children:</div>
                      <div className="pl-4 text-cyan-300">for (TrieNode child : node.children) &#123;</div>
                      <div className="pl-8 text-slate-200">if (child != null && dfs(word, index + 1, child)) return true;</div>
                      <div className="pl-4 text-cyan-300">&#125;</div>
                      <div className="pl-4 text-rose-300">return false; // Backtrack if no child branch matched</div>
                      <div className="text-orange-300">&#125;</div>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Wildcard Search Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {wildcardLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: DSU (UNION-FIND) VISUALIZER */}
            {workbenchTool === "dsu-visualizer" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <GitMerge className="w-4 h-4" />
                      Disjoint Set Union (DSU) Visualizer
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Visualize <code className="text-emerald-400">parent[]</code> pointers, Path Compression tree flattening, and Union by Rank.
                    </p>

                    <div className="space-y-3 pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-slate-300 font-semibold">Union Two Sets</label>
                        <button
                          onClick={handleDsuReset}
                          className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">Element u (0..6)</span>
                          <input
                            type="number"
                            min="0"
                            max="6"
                            value={dsuU}
                            onChange={(e) => setDsuU(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">Element v (0..6)</span>
                          <input
                            type="number"
                            min="0"
                            max="6"
                            value={dsuV}
                            onChange={(e) => setDsuV(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleDsuUnion}
                        className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Execute union(u, v)
                      </button>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <span className="text-xs text-slate-300 font-semibold block">Interactive Find with Path Compression</span>
                      <div className="flex flex-wrap gap-1.5">
                        {Array.from({ length: dsuSize }, (_, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleDsuFind(idx)}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700"
                          >
                            find({idx})
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {/* Parent Array Visualizer */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300">Live DSU State Arrays</span>
                      <span className="text-xs font-mono text-emerald-400">Total Sets: {new Set(dsuParent.map((_, i) => dsuFind(i, dsuParent).root)).size}</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono text-center border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="p-2 text-left">Array</th>
                            {Array.from({ length: dsuSize }, (_, i) => (
                              <th key={i} className="p-2">[{i}]</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-800/50">
                            <td className="p-2 text-left font-semibold text-slate-300">parent[i]</td>
                            {dsuParent.map((p, idx) => (
                              <td key={idx} className={`p-2 font-bold ${p === idx ? "text-amber-400 bg-amber-500/10" : "text-emerald-400 bg-emerald-500/10"}`}>
                                {p}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-2 text-left font-semibold text-slate-300">rank[i]</td>
                            {dsuRank.map((r, idx) => (
                              <td key={idx} className="p-2 text-cyan-400">
                                {r}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Forest Tree Visualizer */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Forest Representation (Nodes pointing to Parents)</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                      {Array.from({ length: dsuSize }, (_, idx) => {
                        const isRoot = dsuParent[idx] === idx;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center font-mono text-xs ${
                              isRoot
                                ? "bg-amber-500/10 border-amber-500/40 text-amber-300 shadow-md shadow-amber-500/10"
                                : "bg-slate-950 border-slate-800 text-slate-300"
                            }`}
                          >
                            <div className="text-lg font-bold">{idx}</div>
                            <div className="text-[10px] text-slate-400 mt-1">
                              {isRoot ? "ROOT" : `-> ${dsuParent[idx]}`}
                            </div>
                            <div className="text-[9px] text-cyan-400 mt-0.5">
                              rank: {dsuRank[idx]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* DSU Log */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">DSU Operations Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {dsuLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: DSU GRAPH CYCLE DETECTOR (LEETCODE 684) */}
            {workbenchTool === "dsu-cycle" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      LeetCode 684: Redundant Connection
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Given an undirected tree of N nodes with 1 additional redundant edge that creates a cycle, process edges one by one using DSU to pinpoint the exact cycle-inducing edge.
                    </p>

                    <div className="space-y-3 pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-semibold">Step {cycleStep} of {cycleEdges.length} Edges Processed</span>
                        <button
                          onClick={handleCycleReset}
                          className="text-slate-400 hover:text-slate-200 flex items-center gap-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Reset
                        </button>
                      </div>

                      <button
                        onClick={handleCycleStepForward}
                        disabled={cycleStep >= cycleEdges.length}
                        className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white text-xs font-semibold transition-all"
                      >
                        {cycleStep >= cycleEdges.length ? "All Edges Processed" : `Process Next Edge: [${cycleEdges[cycleStep][0]}, ${cycleEdges[cycleStep][1]}]`}
                      </button>
                    </div>

                    {/* Cycle Detected Banner */}
                    {cycleDetectedEdge && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs space-y-1">
                        <div className="font-bold flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                          CYCLE DETECTED AT EDGE [{cycleDetectedEdge[0]}, {cycleDetectedEdge[1]}]!
                        </div>
                        <p className="text-rose-200/80 text-[11px] leading-relaxed">
                          Both vertices {cycleDetectedEdge[0]} and {cycleDetectedEdge[1]} were already connected in the same component. Adding this edge completes a closed cycle, making it the redundant edge.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {/* Edge Processing List */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Graph Edge Pipeline</span>
                    <div className="grid grid-cols-5 gap-2">
                      {cycleEdges.map((edge, idx) => {
                        const isProcessed = idx < cycleStep;
                        const isCurrent = idx === cycleStep;
                        const isCycle = cycleDetectedEdge && cycleDetectedEdge[0] === edge[0] && cycleDetectedEdge[1] === edge[1];

                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                              isCycle
                                ? "bg-rose-500/20 border-rose-500/60 text-rose-300 font-bold scale-105 shadow-md shadow-rose-500/20"
                                : isCurrent
                                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 ring-2 ring-emerald-500/30"
                                : isProcessed
                                ? "bg-slate-950 border-slate-800 text-slate-400"
                                : "bg-slate-950/50 border-slate-850 text-slate-600"
                            }`}
                          >
                            <div className="text-[10px] text-slate-400">Edge #{idx + 1}</div>
                            <div className="text-sm font-bold mt-0.5">[{edge[0]}, {edge[1]}]</div>
                            <div className="text-[9px] mt-1">
                              {isCycle ? "REDUNDANT" : isProcessed ? "✓ CONNECTED" : "PENDING"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Parent Array */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">DSU Step History</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {cycleLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: SEGMENT TREE RANGE QUERY & POINT UPDATE */}
            {workbenchTool === "segment-tree" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <BinaryIcon className="w-4 h-4" />
                      Segment Tree Range Simulator
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Simulate range queries and point updates in <code className="text-emerald-400">O(log N)</code> time with complete/partial/no overlap node classification.
                    </p>

                    {/* Query Controls */}
                    <div className="space-y-3 pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-slate-300 font-semibold">Range Query [L, R]</label>
                        <select
                          value={segAggFunc}
                          onChange={(e) => setSegAggFunc(e.target.value)}
                          className="bg-slate-950 border border-slate-800 rounded px-2 py-0.5 text-xs text-emerald-400 font-mono"
                        >
                          <option value="sum">Sum Aggregation</option>
                          <option value="min">Min Aggregation</option>
                          <option value="max">Max Aggregation</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">Left Index L (0..5)</span>
                          <input
                            type="number"
                            min="0"
                            max="5"
                            value={segQueryL}
                            onChange={(e) => setSegQueryL(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">Right Index R (0..5)</span>
                          <input
                            type="number"
                            min="0"
                            max="5"
                            value={segQueryR}
                            onChange={(e) => setSegQueryR(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleSegQuery}
                        className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Query Range [{segQueryL}, {segQueryR}]
                      </button>
                    </div>

                    {/* Point Update Controls */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">Point Update: arr[idx] = val</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">Index (0..5)</span>
                          <input
                            type="number"
                            min="0"
                            max="5"
                            value={segUpdateIdx}
                            onChange={(e) => setSegUpdateIdx(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">New Value</span>
                          <input
                            type="number"
                            value={segUpdateVal}
                            onChange={(e) => setSegUpdateVal(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleSegUpdate}
                        className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
                      >
                        Apply Point Update
                      </button>
                    </div>

                    {/* Query Result Summary */}
                    {segQueryResult && (
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                        <div className="font-bold">
                          Query [{segQueryResult.L}, {segQueryResult.R}] {segAggFunc.toUpperCase()} Result: {segQueryResult.res}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Visited {segQueryResult.visitedNodes.length} segment nodes along the O(log N) tree path.
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {/* Array Visualization */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Underlying Array (Leaf Nodes of Segment Tree)</span>
                    <div className="grid grid-cols-6 gap-2">
                      {segArray.map((val, idx) => {
                        const inQuery = segQueryResult && idx >= segQueryResult.L && idx <= segQueryResult.R;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                              inQuery
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold scale-105"
                                : "bg-slate-950 border-slate-800 text-slate-300"
                            }`}
                          >
                            <div className="text-[10px] text-slate-400">arr[{idx}]</div>
                            <div className="text-base font-bold mt-1">{val}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Overlap Classification Legend */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                    <span className="text-xs font-semibold text-slate-300">Query Node Overlap Classification</span>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                        <strong className="block text-[11px]">Complete Overlap</strong>
                        Segment is fully inside [L, R]. Return stored node value immediately.
                      </div>
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
                        <strong className="block text-[11px]">Partial Overlap</strong>
                        Segment partially intersects [L, R]. Split down both children.
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400">
                        <strong className="block text-[11px]">No Overlap (Prune)</strong>
                        Segment disjoint from [L, R]. Return identity element (0/inf).
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Segment Tree Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {segLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: FENWICK TREE (BIT) & LOWBIT VISUALIZER */}
            {workbenchTool === "fenwick-tree" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Calculator className="w-4 h-4" />
                      Fenwick Tree (Binary Indexed Tree)
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Understand the core bit manipulation identity <code className="text-cyan-400">lowbit(i) = i & (-i)</code> that governs ancestor progression and prefix accumulation.
                    </p>

                    {/* Lowbit Inspector */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">Inspect Integer Lowbit: i & (-i)</label>
                      <input
                        type="number"
                        value={bitInspectNum}
                        onChange={(e) => setBitInspectNum(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                      />
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono space-y-1">
                        <div className="text-slate-400">i = {bitInspectNum} = <span className="text-emerald-400">{bitInspectNum.toString(2).padStart(8, "0")}</span></div>
                        <div className="text-slate-400">-i (2's comp) = <span className="text-amber-400">{((~bitInspectNum + 1) >>> 0).toString(2).slice(-8)}</span></div>
                        <div className="text-cyan-300 font-bold">lowbit = {bitInspectNum & -bitInspectNum} (2^{Math.log2(bitInspectNum & -bitInspectNum)}) = {(bitInspectNum & -bitInspectNum).toString(2).padStart(8, "0")}</div>
                      </div>
                    </div>

                    {/* Prefix Sum Query */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">Prefix Sum Query: query(i)</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="1"
                          max={bitArray.length}
                          value={bitQueryIdx}
                          onChange={(e) => setBitQueryIdx(e.target.value)}
                          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                        <button
                          onClick={handleBitQuery}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                        >
                          Query Sum(1..i)
                        </button>
                      </div>
                    </div>

                    {bitPrefixRes && (
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 space-y-1">
                        <div className="font-bold">Prefix Sum (1..{bitPrefixRes.targetIdx}): {bitPrefixRes.sum}</div>
                        <div className="text-[11px] text-slate-300">
                          Accumulated indices: {bitPrefixRes.path.map(p => `tree[${p.idx}](${p.val})`).join(" + ")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {/* Responsible Range Chart */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Fenwick Tree 1-Based Indices & Responsible Ranges</span>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono text-center border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="p-2 text-left">i</th>
                            <th className="p-2">Binary</th>
                            <th className="p-2">lowbit(i)</th>
                            <th className="p-2">Interval Covered</th>
                            <th className="p-2">tree[i] Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: bitArray.length }, (_, idx) => {
                            const i = idx + 1;
                            const lb = i & -i;
                            const start = i - lb + 1;
                            return (
                              <tr key={i} className="border-b border-slate-800/40 hover:bg-slate-850/50">
                                <td className="p-2 text-left font-bold text-amber-400">{i}</td>
                                <td className="p-2 text-slate-400">{i.toString(2).padStart(4, "0")}</td>
                                <td className="p-2 text-cyan-400 font-bold">{lb}</td>
                                <td className="p-2 text-emerald-300">[{start}..{i}]</td>
                                <td className="p-2 font-bold text-slate-200">{fenwickTree[i]}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Fenwick Operations Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {bitLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 7: SPARSE TABLE STATIC RMQ SIMULATOR */}
            {workbenchTool === "sparse-table" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Table className="w-4 h-4" />
                      Sparse Table Static RMQ Simulator
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Demonstrate strictly <code className="text-emerald-400">O(1)</code> Range Minimum Queries exploiting the idempotent overlap property <code className="text-cyan-400">min(A, B) = min(A, B, overlap)</code>.
                    </p>

                    <div className="space-y-3 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">RMQ Query Range [L, R]</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">L (0..7)</span>
                          <input
                            type="number"
                            min="0"
                            max="7"
                            value={sparseQueryL}
                            onChange={(e) => setSparseQueryL(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">R (0..7)</span>
                          <input
                            type="number"
                            min="0"
                            max="7"
                            value={sparseQueryR}
                            onChange={(e) => setSparseQueryR(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleSparseQuery}
                        className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Compute O(1) Minimum
                      </button>
                    </div>

                    {sparseResult && (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-2">
                        <div className="font-bold text-sm">
                          RMQ [{sparseResult.L}, {sparseResult.R}] Minimum = {sparseResult.minVal}
                        </div>
                        <div className="text-[11px] text-slate-300 space-y-1">
                          <div>Range Length = {sparseResult.len}</div>
                          <div>Largest power of 2: k = floor(log2({sparseResult.len})) = <strong className="text-cyan-400">{sparseResult.k}</strong> (2^{sparseResult.k} = {sparseResult.pow2})</div>
                          <div>Block 1: [{sparseResult.block1Range[0]}..{sparseResult.block1Range[1]}] &rarr; Value: {sparseResult.block1Val}</div>
                          <div>Block 2: [{sparseResult.block2Range[0]}..{sparseResult.block2Range[1]}] &rarr; Value: {sparseResult.block2Val}</div>
                          <div className="text-amber-400 font-bold pt-1">
                            Result: min({sparseResult.block1Val}, {sparseResult.block2Val}) = {sparseResult.minVal} in O(1) time!
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {/* Array and DP Table Display */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Precomputed Sparse Table dp[i][k] (O(N log N))</span>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono text-center border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="p-2 text-left">i (arr[i])</th>
                            <th className="p-2">k=0 (len 1)</th>
                            <th className="p-2">k=1 (len 2)</th>
                            <th className="p-2">k=2 (len 4)</th>
                            <th className="p-2">k=3 (len 8)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sparseArray.map((val, i) => (
                            <tr key={i} className="border-b border-slate-800/40">
                              <td className="p-2 text-left font-bold text-amber-400">
                                [{i}] = {val}
                              </td>
                              {Array.from({ length: 4 }, (_, k) => (
                                <td key={k} className="p-2 text-slate-300">
                                  {sparseTable.dp[i][k] !== undefined && i + (1 << k) <= sparseArray.length
                                    ? sparseTable.dp[i][k]
                                    : "-"}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Sparse Table Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {sparseLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 8: SPECIALIZED DATA STRUCTURE DECISION MATRIX */}
            {workbenchTool === "decision-matrix" && (
              <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <Compass className="w-5 h-5 text-emerald-400" />
                        Specialized Data Structure Selection Engine
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Select a problem requirement to view the optimal data structure, time/space complexities, trade-offs, and engineering rationale.
                      </p>
                    </div>
                  </div>

                  {/* Problem Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                    {Object.entries(DECISION_CASES).map(([key, data]) => (
                      <button
                        key={key}
                        onClick={() => setDecisionProblem(key)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                          decisionProblem === key
                            ? "bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-600/30 scale-105"
                            : "bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-800"
                        }`}
                      >
                        {data.title}
                      </button>
                    ))}
                  </div>

                  {/* Active Decision Card */}
                  {DECISION_CASES[decisionProblem] && (
                    <div className="mt-4 p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-850">
                        <div>
                          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Recommended Data Structure</span>
                          <h4 className="text-xl font-bold text-emerald-400 mt-0.5">
                            {DECISION_CASES[decisionProblem].winner}
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-400">Alternative:</span>
                          <div className="text-sm font-semibold text-slate-300">{DECISION_CASES[decisionProblem].alt}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                          <div className="text-xs text-slate-400">Time Complexity</div>
                          <div className="text-sm font-mono text-cyan-400 font-bold">{DECISION_CASES[decisionProblem].time}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                          <div className="text-xs text-slate-400">Space Complexity</div>
                          <div className="text-sm font-mono text-amber-400 font-bold">{DECISION_CASES[decisionProblem].space}</div>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="text-xs">
                          <strong className="text-emerald-400">Key Advantage:</strong>{" "}
                          <span className="text-slate-300">{DECISION_CASES[decisionProblem].pros}</span>
                        </div>
                        <div className="text-xs">
                          <strong className="text-rose-400">Trade-off / Limitation:</strong>{" "}
                          <span className="text-slate-300">{DECISION_CASES[decisionProblem].cons}</span>
                        </div>
                        <div className="text-xs p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                          <strong>Interview Verdict:</strong> {DECISION_CASES[decisionProblem].verdict}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CURRICULUM READER (38 FULL SECTIONS)                                */}
        {/* ========================================================================= */}
        {activeTab === "reader" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar Section Navigation */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 sticky top-20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Module Outline</span>
                  <span className="text-xs text-emerald-400 font-mono">{filteredSections.length} Sections</span>
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filter sections..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 dark-scrollbar">
                  {filteredSections.map((sec) => {
                    const isDone = !!completedSections[sec.id];
                    const isActive = activeSectionId === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setActiveSectionId(sec.id)}
                        title={sec.title}
                        className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                          isActive
                            ? "bg-emerald-600 text-white font-medium shadow-md shadow-emerald-600/20"
                            : isDone
                            ? "bg-slate-950/70 text-slate-300 hover:bg-slate-850"
                            : "bg-slate-950 text-slate-400 hover:bg-slate-850 hover:text-slate-200"
                        }`}
                      >
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSectionComplete(sec.id);
                          }}
                          className="mt-0.5 shrink-0"
                        >
                          {isDone ? (
                            <CheckSquare className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-emerald-400"}`} />
                          ) : (
                            <Square className="w-3.5 h-3.5 text-slate-600 hover:text-slate-400" />
                          )}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="break-words whitespace-normal leading-snug font-medium">{sec.title}</div>
                          <div className={`text-[10px] mt-0.5 line-clamp-1 ${isActive ? "text-emerald-200" : "text-slate-500"}`}>
                            {sec.category}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active Section Content View */}
            <div className="lg:col-span-8">
              {(() => {
                const currentSec = JAVA_SPECIALIZED_DS_SECTIONS.find(s => s.id === activeSectionId) || JAVA_SPECIALIZED_DS_SECTIONS[0];
                const isDone = !!completedSections[currentSec.id];

                return (
                  <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            {currentSec.id === 0
                              ? "Module Overview · 37 Core Sections"
                              : `Section ${currentSec.id} of 37`}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {currentSec.category}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                          {currentSec.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => toggleSectionComplete(currentSec.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                          isDone
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                        }`}
                      >
                        {isDone ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            Completed
                          </>
                        ) : (
                          <>
                            <Square className="w-4 h-4 text-slate-400" />
                            Mark as Done
                          </>
                        )}
                      </button>
                    </div>

                    {/* Section Body */}
                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm">
                      {currentSec.content}
                    </div>

                    {/* Next / Previous Section Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                      <button
                        disabled={currentSec.id === 0}
                        onClick={() => setActiveSectionId(Math.max(0, currentSec.id - 1))}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 disabled:opacity-40 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" /> Previous Section
                      </button>
                      <button
                        disabled={currentSec.id >= JAVA_SPECIALIZED_DS_SECTIONS.length - 1}
                        onClick={() => setActiveSectionId(Math.min(JAVA_SPECIALIZED_DS_SECTIONS.length - 1, currentSec.id + 1))}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-xs text-white font-semibold flex items-center gap-2"
                      >
                        Next Section <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                );
              })()}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: ASSESSMENT QUIZ (15 QUESTIONS)                                     */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-400" />
                  Module 14 Knowledge Assessment
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  15 questions covering Tries, DSU, Segment Trees, Fenwick Trees, and Sparse Tables.
                </p>
              </div>
              <div className="flex items-center gap-3">
                {showQuizResults ? (
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowQuizResults(false);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setShowQuizResults(true)}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-xs font-bold text-white transition-all shadow-lg shadow-emerald-600/30"
                  >
                    Submit Assessment ({Object.keys(userAnswers).length}/15 Answered)
                  </button>
                )}
              </div>
            </div>

            {showQuizResults && (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Your Score</div>
                  <div className="text-3xl font-bold text-white mt-1">
                    {calculateScore()} / {QUIZ_QUESTIONS.length}
                    <span className="text-sm text-slate-400 font-normal ml-2">
                      ({Math.round((calculateScore() / QUIZ_QUESTIONS.length) * 100)}%)
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-300">
                  {calculateScore() >= 12 ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-5 h-5" /> Master Level: Outstanding DSA Proficiency!
                    </span>
                  ) : (
                    <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-5 h-5" /> Review the curriculum sections to strengthen key concepts!
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const selected = userAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isCorrect = isAnswered && selected === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl border transition-all ${
                      showQuizResults
                        ? isCorrect
                          ? "bg-emerald-500/5 border-emerald-500/30"
                          : "bg-rose-500/5 border-rose-500/30"
                        : "bg-slate-900 border-slate-800"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 space-y-3">
                        <p className="text-sm font-semibold text-white">{q.question}</p>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const isThisOption = selected === optIdx;
                            let btnStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850";

                            if (showQuizResults) {
                              if (optIdx === q.correct) {
                                btnStyle = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-semibold";
                              } else if (isThisOption) {
                                btnStyle = "bg-rose-500/20 border-rose-500/50 text-rose-300";
                              } else {
                                btnStyle = "bg-slate-950/50 border-slate-850 text-slate-500";
                              }
                            } else if (isThisOption) {
                              btnStyle = "bg-emerald-600/30 border-emerald-500 text-emerald-200 font-semibold";
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={showQuizResults}
                                onClick={() => handleQuizAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl text-xs border transition-all flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {showQuizResults && optIdx === q.correct && (
                                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {showQuizResults && (
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                            <strong className="text-emerald-400">Explanation: </strong>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: 45 PRACTICAL LABS TRACKER                                          */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  45 Practical Implementation Labs
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Categorized into Beginner, Intermediate, and Advanced milestones with persistent progress.
                </p>
              </div>

              {/* Tier Filters */}
              <div className="flex items-center gap-2">
                {["All", "Beginner", "Intermediate", "Advanced"].map(tier => (
                  <button
                    key={tier}
                    onClick={() => setLabTierFilter(tier)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      labTierFilter === tier
                        ? "bg-emerald-600 text-white font-bold"
                        : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLabs.map((lab) => {
                const isCompleted = !!completedLabs[lab.id];
                return (
                  <div
                    key={lab.id}
                    onClick={() => toggleLabComplete(lab.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isCompleted
                        ? "bg-emerald-500/10 border-emerald-500/30 text-slate-200"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                            lab.tier === "Beginner"
                              ? "bg-cyan-500/20 text-cyan-400"
                              : lab.tier === "Intermediate"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-orange-500/15 text-orange-400"
                          }`}
                        >
                          {lab.tier}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">Lab #{lab.id}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">{lab.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{lab.desc}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className={isCompleted ? "text-emerald-400 font-semibold" : "text-slate-500"}>
                        {isCompleted ? "✓ Completed" : "Mark as Completed"}
                      </span>
                      {isCompleted ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* MODULE FOOTER NAVIGATION */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <ModuleNav currentModuleId="specialized-ds" nextRoute="/learning/java/two-pointers-sliding-window" />
        </div>
      </footer>
    </div>
  );
}
