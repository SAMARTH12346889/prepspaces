import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  GitMerge,
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
  Grid3X3,
  Eye,
  LineChart,
  Link as LinkIcon,
  ChevronsRight,
  GitCommit,
  CircleDot,
  FastForward,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Rows,
  Layers,
  Clock,
  Shuffle,
  Shield
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaTreesSections from "./JavaTreesSections";

export default function JavaTrees() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java");

  // View mode: 'interactive' | 'reader'
  const [viewMode, setViewMode] = useState("interactive");
  const [activeTab, setActiveTab] = useState("bstStudio");

  // Reader settings
  const [activeSection, setActiveSection] = useState(0);
  const [readerMode, setReaderMode] = useState("continuous");
  const [searchFilter, setSearchFilter] = useState("");

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Labs completed tracker
  const [completedLabs, setCompletedLabs] = useState({});

  // Copied code feedback
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const scrollToSection = (idx) => {
    setActiveSection(idx);
    const element = document.getElementById(`section-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // =========================================================================
  // WORKBENCH 1: INTERACTIVE BST STUDIO (Insert, Search, Delete, Extremes)
  // =========================================================================
  // Initial BST values: 50, 30, 70, 20, 40, 60, 80
  const [bstKeys, setBstKeys] = useState([50, 30, 70, 20, 40, 60, 80]);
  const [bstInputVal, setBstInputVal] = useState("65");
  const [bstSearchVal, setBstSearchVal] = useState("60");
  const [bstHighlightNodes, setBstHighlightNodes] = useState([]);
  const [bstFeedback, setBstFeedback] = useState(null);

  // Rebuild BST object model from bstKeys
  const bstRoot = useMemo(() => {
    class Node {
      constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
      }
    }
    const insert = (root, val) => {
      if (!root) return new Node(val);
      if (val < root.val) root.left = insert(root.left, val);
      else if (val > root.val) root.right = insert(root.right, val);
      return root;
    };

    let root = null;
    for (const k of bstKeys) {
      root = insert(root, k);
    }
    return root;
  }, [bstKeys]);

  const handleBstInsert = () => {
    const val = parseInt(bstInputVal, 10);
    if (isNaN(val)) return;
    if (bstKeys.includes(val)) {
      setBstFeedback({ type: "warn", msg: `Value ${val} already exists (BST ignores duplicates).` });
      return;
    }
    setBstKeys(prev => [...prev, val]);
    setBstFeedback({ type: "success", msg: `Inserted ${val} into BST.` });
    setBstInputVal("");
  };

  const handleBstSearch = () => {
    const target = parseInt(bstSearchVal, 10);
    if (isNaN(target)) return;

    const path = [];
    let curr = bstRoot;
    let found = false;

    while (curr) {
      path.push(curr.val);
      if (target === curr.val) {
        found = true;
        break;
      } else if (target < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    setBstHighlightNodes(path);
    if (found) {
      setBstFeedback({ type: "success", msg: `Found ${target}! Path taken: ${path.join(" → ")}.` });
    } else {
      setBstFeedback({ type: "warn", msg: `Target ${target} not in BST. Traversed: ${path.join(" → ")} → null.` });
    }
  };

  const handleBstDelete = (target) => {
    if (!bstKeys.includes(target)) return;
    setBstKeys(prev => prev.filter(k => k !== target));
    setBstFeedback({ type: "info", msg: `Deleted node ${target} and re-balanced BST references.` });
  };

  // BST Extremes
  const bstMin = useMemo(() => {
    if (!bstRoot) return null;
    let curr = bstRoot;
    while (curr.left) curr = curr.left;
    return curr.val;
  }, [bstRoot]);

  const bstMax = useMemo(() => {
    if (!bstRoot) return null;
    let curr = bstRoot;
    while (curr.right) curr = curr.right;
    return curr.val;
  }, [bstRoot]);

  // =========================================================================
  // WORKBENCH 2: RECURSIVE TRAVERSALS & LEVEL-ORDER BFS
  // =========================================================================
  const [traversalType, setTraversalType] = useState("inorder"); // 'preorder' | 'inorder' | 'postorder' | 'levelorder'
  const [traversalStep, setTraversalStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Compute traversal arrays
  const traversalSequences = useMemo(() => {
    const preorderList = [];
    const inorderList = [];
    const postorderList = [];
    const levelorderList = [];

    const dfs = (node) => {
      if (!node) return;
      preorderList.push(node.val);
      dfs(node.left);
      inorderList.push(node.val);
      dfs(node.right);
      postorderList.push(node.val);
    };
    dfs(bstRoot);

    if (bstRoot) {
      const q = [bstRoot];
      while (q.length > 0) {
        const curr = q.shift();
        levelorderList.push(curr.val);
        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
      }
    }

    return {
      preorder: preorderList,
      inorder: inorderList,
      postorder: postorderList,
      levelorder: levelorderList,
    };
  }, [bstRoot]);

  const currentSequence = traversalSequences[traversalType] || [];

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setTraversalStep(s => {
          if (s >= currentSequence.length - 1) {
            setIsAutoPlaying(false);
            return s;
          }
          return s + 1;
        });
      }, 700);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentSequence.length]);

  // =========================================================================
  // WORKBENCH 3: TREE METRICS, HEIGHT & DIAMETER
  // =========================================================================
  const treeMetrics = useMemo(() => {
    let maxDiameter = 0;

    const calcHeight = (node) => {
      if (!node) return -1;
      const lh = calcHeight(node.left);
      const rh = calcHeight(node.right);
      maxDiameter = Math.max(maxDiameter, lh + rh + 2);
      return 1 + Math.max(lh, rh);
    };

    const rootHeight = calcHeight(bstRoot);
    const nodeCount = bstKeys.length;
    const edgeCount = Math.max(0, nodeCount - 1);

    // Height-balanced check
    const checkBalanced = (node) => {
      if (!node) return 0;
      const lh = checkBalanced(node.left);
      if (lh === -1) return -1;
      const rh = checkBalanced(node.right);
      if (rh === -1) return -1;
      if (Math.abs(lh - rh) > 1) return -1;
      return 1 + Math.max(lh, rh);
    };
    const isHeightBalanced = checkBalanced(bstRoot) !== -1;

    return {
      height: rootHeight,
      diameter: maxDiameter,
      nodes: nodeCount,
      edges: edgeCount,
      isBalanced: isHeightBalanced
    };
  }, [bstRoot, bstKeys]);

  // =========================================================================
  // WORKBENCH 4: LOWEST COMMON ANCESTOR (LCA)
  // =========================================================================
  const [lcaP, setLcaP] = useState(20);
  const [lcaQ, setLcaQ] = useState(40);

  const lcaResult = useMemo(() => {
    if (!bstRoot) return null;
    let curr = bstRoot;
    const path = [];
    while (curr) {
      path.push(curr.val);
      if (lcaP < curr.val && lcaQ < curr.val) {
        curr = curr.left;
      } else if (lcaP > curr.val && lcaQ > curr.val) {
        curr = curr.right;
      } else {
        return { lcaNode: curr.val, path };
      }
    }
    return { lcaNode: null, path };
  }, [bstRoot, lcaP, lcaQ]);

  // =========================================================================
  // WORKBENCH 5: BST VALIDATION & RANGE INVARIANT (LeetCode 98)
  // =========================================================================
  const [validateScenario, setValidateScenario] = useState("valid"); // 'valid' | 'invalidLocal' | 'invalidGlobal'

  const validationAnalysis = useMemo(() => {
    if (validateScenario === "valid") {
      return {
        title: "Valid BST: [10, 5, 15, null, null, 12, 20]",
        treeDesc: "Left subtree is strictly < 10; right subtree [12, 20] is strictly > 10. Every local and global bound holds.",
        isValid: true,
        trace: [
          "Root 10: Range (-∞, +∞) -> Valid",
          "Node 5: Range (-∞, 10) -> Valid",
          "Node 15: Range (10, +∞) -> Valid",
          "Node 12: Range (10, 15) -> Valid",
          "Node 20: Range (15, +∞) -> Valid",
        ]
      };
    } else if (validateScenario === "invalidLocal") {
      return {
        title: "Local Relationship Violation: [10, 12, 15]",
        treeDesc: "Immediate left child of 10 has value 12! Fails immediate test `left.val < root.val`.",
        isValid: false,
        trace: [
          "Root 10: Range (-∞, +∞) -> Valid",
          "Node 12 (Left of 10): Expected < 10, but got 12 -> REJECTED!"
        ]
      };
    } else {
      return {
        title: "Classic Deep Invariant Trap: [10, 5, 15, null, null, 6, 20]",
        treeDesc: "Node 6 is the left child of 15. Locally, 6 < 15 is true! But globally, 6 is in the RIGHT subtree of 10, so 6 must be > 10!",
        isValid: false,
        trace: [
          "Root 10: Range (-∞, +∞) -> Valid",
          "Node 5: Range (-∞, 10) -> Valid",
          "Node 15: Range (10, +∞) -> Valid",
          "Node 6: Range (10, 15) -> Expected > 10, but got 6 -> REJECTED! (Range bound violated)"
        ]
      };
    }
  }, [validateScenario]);

  // =========================================================================
  // WORKBENCH 6: SERIALIZE & DESERIALIZE (LeetCode 297)
  // =========================================================================
  const [serializedOutput, setSerializedOutput] = useState("1,2,#,#,3,4,#,#,5,#,#");

  const deserializedStats = useMemo(() => {
    const tokens = serializedOutput.split(",").map(t => t.trim()).filter(Boolean);
    const nodeCount = tokens.filter(t => t !== "#").length;
    const nullCount = tokens.filter(t => t === "#").length;
    const isFormulaMatch = nullCount === nodeCount + 1;

    return { tokens, nodeCount, nullCount, isFormulaMatch };
  }, [serializedOutput]);

  // =========================================================================
  // QUIZ DATA (15 MCQs)
  // =========================================================================
  const quizData = [
    {
      id: "q1",
      question: "Which tree traversal visits nodes in the order: Root → Left Subtree → Right Subtree?",
      options: ["Inorder", "Postorder", "Preorder", "Level-order"],
      correct: 2,
      explanation: "Preorder traversal processes the current Root node first, followed recursively by the Left subtree, and finally the Right subtree."
    },
    {
      id: "q2",
      question: "Which data structure is primarily used to implement Breadth-First Search (BFS) level-order traversal?",
      options: ["Stack", "Queue", "HashMap", "TreeSet"],
      correct: 1,
      explanation: "A Queue (FIFO) processes nodes level by level, ensuring that children of earlier nodes are visited before deeper descendants."
    },
    {
      id: "q3",
      question: "What is the maximum number of nodes in a binary tree of height 3 (measuring height by edges)?",
      options: ["7", "8", "15", "16"],
      correct: 2,
      explanation: "For height h (edges), max nodes in a perfect tree is 2^(h+1) - 1. For h = 3, N = 2^4 - 1 = 15."
    },
    {
      id: "q4",
      question: "Where is the minimum element always located in a valid Binary Search Tree (BST)?",
      options: ["Root node", "Rightmost node", "Leftmost node", "Any leaf node"],
      correct: 2,
      explanation: "In a BST, every left child is smaller than its parent. Traversing left until `node.left == null` leads to the absolute minimum element."
    },
    {
      id: "q5",
      question: "When deleting a BST node with two children, which node is typically used to replace it in the inorder successor method?",
      options: ["Maximum in left subtree", "Minimum in right subtree", "Root node", "Any arbitrary leaf"],
      correct: 1,
      explanation: "The inorder successor is the smallest value strictly greater than the node, found at the leftmost node (minimum) of the right subtree."
    },
    {
      id: "q6",
      question: "What is the time complexity of the optimized postorder/bottom-up binary tree diameter calculation?",
      options: ["O(log n)", "O(n log n)", "O(n)", "O(n^2)"],
      correct: 2,
      explanation: "By computing subtree heights and updating the diameter in a single bottom-up postorder pass, each node is visited once in O(n) time."
    },
    {
      id: "q7",
      question: "Which technique is most appropriate for validating that a binary tree strictly satisfies the global BST ordering property?",
      options: [
        "Checking immediate children only (node.left < node < node.right)",
        "Using recursive minimum and maximum range bounds (min < node.val < max)",
        "Level-order queue traversal",
        "Sorting the node references"
      ],
      correct: 1,
      explanation: "Checking immediate children fails because values deep in a right subtree could be smaller than an ancestor. Range bounds (min, max) ensure global subtree correctness."
    },
    {
      id: "q8",
      question: "Why are null markers (such as '#') essential when serializing a binary tree?",
      options: [
        "To sort node values",
        "To reduce tree height",
        "To preserve the exact missing-child structure unambiguously",
        "To eliminate duplicate values"
      ],
      correct: 2,
      explanation: "Without null markers, identical preorder sequences could represent multiple different tree shapes. Null markers record missing children so reconstruction is unique."
    },
    {
      id: "q9",
      question: "In a Full Binary Tree, how many children can each node possess?",
      options: [
        "Exactly 1 child",
        "Either 0 or 2 children",
        "At most 1 child",
        "Always 2 children"
      ],
      correct: 1,
      explanation: "In a Full Binary Tree, every node has either zero children (leaf) or exactly two children; no node has a single child."
    },
    {
      id: "q10",
      question: "What property distinguishes a Complete Binary Tree?",
      options: [
        "All levels are full, and all leaves are at the exact same depth",
        "All levels except possibly the last are completely filled, and the last level is filled from left to right",
        "Every node has balance factor 0",
        "Left subtree height equals right subtree height"
      ],
      correct: 1,
      explanation: "A Complete Binary Tree is completely filled up to depth d - 1, and level d is populated sequentially from left to right with no gaps."
    },
    {
      id: "q11",
      question: "What does an Inorder traversal (Left → Root → Right) of a valid BST produce?",
      options: [
        "Values in descending order",
        "Values in strictly ascending sorted order",
        "Values grouped by level",
        "Unsorted values"
      ],
      correct: 1,
      explanation: "Because Left < Root < Right at every node, an inorder traversal always visits elements in strictly increasing sorted order."
    },
    {
      id: "q12",
      question: "In a non-empty binary tree with n nodes, exactly how many edges connect them?",
      options: ["n", "n - 1", "2n", "n / 2"],
      correct: 1,
      explanation: "Every node except the root has exactly one incoming parent edge, so a tree with n nodes contains exactly n - 1 edges."
    },
    {
      id: "q13",
      question: "What is the difference between the depth of a node and the height of a node?",
      options: [
        "Depth is edges from root down to node; Height is edges from node down to deepest leaf",
        "Depth is edges to deepest leaf; Height is edges from root",
        "Depth and height are always identical",
        "Depth is measured in bytes; Height is measured in nodes"
      ],
      correct: 0,
      explanation: "Depth measures distance from the root (Root = 0). Height measures the longest path downward to a leaf (Leaf = 0)."
    },
    {
      id: "q14",
      question: "What is the worst-case time complexity of searching in an unbalanced, skewed Binary Search Tree?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      correct: 2,
      explanation: "When elements are inserted in sorted order, an ordinary BST degenerates into a single linear chain (skewed tree), causing search to take O(n) time."
    },
    {
      id: "q15",
      question: "In an AVL self-balancing tree, what is the allowed range for the balance factor (BF = Height(left) - Height(right))?",
      options: ["BF = 0 only", "BF in {-1, 0, 1}", "BF in {-2, 0, 2}", "BF <= 2"],
      correct: 1,
      explanation: "An AVL tree maintains height balance by ensuring that for every node, the height difference between left and right subtrees is at most 1 (BF in {-1, 0, 1})."
    }
  ];

  const quizScore = useMemo(() => {
    let score = 0;
    quizData.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  // Filter sections in reader mode
  const filteredSections = useMemo(() => {
    if (!searchFilter.trim()) return JavaTreesSections;
    const term = searchFilter.toLowerCase();
    return JavaTreesSections.filter(
      s => s.title.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
    );
  }, [searchFilter]);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Top sticky module navigation bar */}
      <ModuleNav
        track="java"
        currentModuleId="trees"
        prevRoute="/learning/java/hashing"
        nextRoute="/learning/java/heaps"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 space-y-8">
        
        {/* Module Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-stone-900 via-stone-850 to-orange-950 text-white p-6 sm:p-10 border border-stone-800 shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium tracking-wide">
                <GitMerge className="w-3.5 h-3.5" />
                <span>MODULE 12 · INTERMEDIATE TO ADVANCED</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Trees & Binary Search Trees (BST)
              </h1>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Master hierarchical data structures, binary tree properties (depth, height, level, full, complete, perfect), recursive traversals (Preorder, Inorder, Postorder, BFS Level-Order), BST operations (Search, Insertion, 3-case Deletion via Inorder Successor), tree diameter, height balancing, Lowest Common Ancestor (LCA), strict range validation, and tree serialization.
              </p>
            </div>

            {/* View Mode Toggle Pill */}
            <div className="flex sm:flex-col items-center justify-end gap-3 shrink-0">
              <div className="inline-flex p-1 bg-stone-800/80 backdrop-blur-md rounded-2xl border border-stone-700/60 shadow-inner">
                <button
                  onClick={() => setViewMode("interactive")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    viewMode === "interactive"
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  <span>Workbenches</span>
                </button>
                <button
                  onClick={() => setViewMode("reader")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    viewMode === "reader"
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Full Reader</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Java 17+ SE & DSA Spec</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE WORKBENCHES VIEW */}
        {/* ========================================================================= */}
        {viewMode === "interactive" && (
          <div className="space-y-6">
            {/* Workbench Subnav Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#e7e3da] [scrollbar-width:none]">
              {[
                { id: "bstStudio", label: "BST Studio", icon: GitBranch },
                { id: "traversals", label: "Traversals (DFS & BFS)", icon: ListOrdered },
                { id: "metrics", label: "Height & Diameter", icon: BarChart3 },
                { id: "lca", label: "Lowest Common Ancestor", icon: Target },
                { id: "validation", label: "Validate BST (Range)", icon: ShieldCheck },
                { id: "codec", label: "Serialize / Deserialize", icon: Binary },
                { id: "quiz", label: "15-MCQ Assessment", icon: HelpCircle },
                { id: "labs", label: "45 Labs & LeetCode", icon: Award }
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-orange-600 text-white shadow-sm"
                        : "bg-white hover:bg-stone-100 text-stone-600 border border-[#e7e3da]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: BST STUDIO */}
            {activeTab === "bstStudio" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Binary Search Tree Engine
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Interactive BST Studio (Insert, Search, Delete with Inorder Successor)
                    </h3>
                    <p className="text-xs text-stone-500">
                      Maintain the strict invariant: `Left &lt; Root &lt; Right`. Test leaf deletion, single-child splice, and 2-child successor swaps.
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Insert:</span>
                      <input
                        type="number"
                        value={bstInputVal}
                        onChange={(e) => setBstInputVal(e.target.value)}
                        placeholder="Value"
                        className="w-20 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg font-mono focus:outline-none focus:border-orange-500"
                      />
                      <button
                        onClick={handleBstInsert}
                        className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold shadow-2xs"
                      >
                        Insert
                      </button>
                    </div>

                    <div className="h-4 w-px bg-stone-300 mx-1"></div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Search:</span>
                      <input
                        type="number"
                        value={bstSearchVal}
                        onChange={(e) => setBstSearchVal(e.target.value)}
                        placeholder="Target"
                        className="w-20 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg font-mono focus:outline-none focus:border-orange-500"
                      />
                      <button
                        onClick={handleBstSearch}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-lg text-xs font-semibold shadow-2xs"
                      >
                        Search
                      </button>
                    </div>

                    <div className="h-4 w-px bg-stone-300 mx-1"></div>

                    {/* Presets */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Presets:</span>
                      <button
                        onClick={() => {
                          setBstKeys([50, 30, 70, 20, 40, 60, 80]);
                          setBstHighlightNodes([]);
                          setBstFeedback({ type: "info", msg: "Loaded Balanced BST preset." });
                        }}
                        className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-[11px] rounded text-stone-700 font-mono"
                      >
                        Balanced
                      </button>
                      <button
                        onClick={() => {
                          setBstKeys([10, 20, 30, 40, 50]);
                          setBstHighlightNodes([]);
                          setBstFeedback({ type: "warn", msg: "Loaded Skewed BST preset (O(n) search)." });
                        }}
                        className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-[11px] rounded text-stone-700 font-mono"
                      >
                        Skewed
                      </button>
                    </div>

                    <div className="ml-auto flex items-center gap-4 text-xs font-mono text-stone-500">
                      <span>Min: <strong className="text-stone-900">{bstMin ?? "null"}</strong></span>
                      <span>Max: <strong className="text-stone-900">{bstMax ?? "null"}</strong></span>
                    </div>
                  </div>

                  {bstFeedback && (
                    <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      bstFeedback.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : bstFeedback.type === "warn"
                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                        : "bg-blue-50 text-blue-800 border border-blue-200"
                    }`}>
                      {bstFeedback.type === "success" ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-amber-600" />}
                      <span>{bstFeedback.msg}</span>
                    </div>
                  )}

                  {/* BST Visual representation */}
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                      <span>Node Count: <strong className="text-stone-900">{bstKeys.length}</strong></span>
                      <span>Click any node badge to trigger <strong>deleteBST(node)</strong>:</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 py-6">
                      {bstKeys.map((k) => {
                        const isHighlighted = bstHighlightNodes.includes(k);
                        return (
                          <div
                            key={k}
                            onClick={() => handleBstDelete(k)}
                            className={`p-3 rounded-2xl border text-center cursor-pointer transition-all min-w-[70px] ${
                              isHighlighted
                                ? "bg-orange-500 text-white border-orange-600 shadow-md ring-2 ring-orange-300 scale-105"
                                : "bg-white text-stone-800 border-stone-300 hover:border-red-400 hover:shadow-xs"
                            }`}
                            title={`Click to delete ${k}`}
                          >
                            <div className="text-base font-bold font-mono">{k}</div>
                            <div className={`text-[10px] mt-0.5 ${isHighlighted ? "text-orange-100" : "text-stone-400"}`}>
                              delete ✕
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TRAVERSALS (DFS & BFS) */}
            {activeTab === "traversals" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Traversal Step-by-Step Simulator
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Recursive DFS (Preorder, Inorder, Postorder) & BFS Level-Order
                      </h3>
                    </div>

                    {/* Traversal selector */}
                    <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
                      {[
                        { id: "inorder", label: "Inorder (Sorted)" },
                        { id: "preorder", label: "Preorder" },
                        { id: "postorder", label: "Postorder" },
                        { id: "levelorder", label: "Level-Order (BFS)" },
                      ].map(t => (
                        <button
                          key={t.id}
                          onClick={() => {
                            setTraversalType(t.id);
                            setTraversalStep(0);
                            setIsAutoPlaying(false);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            traversalType === t.id ? "bg-white text-stone-900 shadow-2xs" : "text-stone-500 hover:text-stone-900"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Player Controls */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setIsAutoPlaying(p => !p)}
                      className="flex items-center gap-1.5 px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold shadow-2xs"
                    >
                      {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isAutoPlaying ? "Pause" : "Play Animation"}</span>
                    </button>
                    <button
                      onClick={() => setTraversalStep(s => Math.min(s + 1, currentSequence.length - 1))}
                      disabled={traversalStep >= currentSequence.length - 1}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 rounded-lg text-xs font-semibold"
                    >
                      Next Step →
                    </button>
                    <button
                      onClick={() => {
                        setTraversalStep(0);
                        setIsAutoPlaying(false);
                      }}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold"
                    >
                      Reset
                    </button>

                    <div className="ml-auto text-xs font-mono text-stone-500">
                      Step: <strong className="text-stone-900">{traversalStep + 1}</strong> / {currentSequence.length}
                    </div>
                  </div>

                  {/* Traversal Output Tape */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                      <span className="font-bold text-stone-700">Visited Order Sequence:</span>
                      {traversalType === "inorder" && (
                        <span className="text-emerald-600 font-bold">✓ Ascending Sorted Property</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      {currentSequence.map((val, idx) => {
                        const isVisited = idx <= traversalStep;
                        const isCurrent = idx === traversalStep;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center transition-all min-w-[60px] ${
                              isCurrent
                                ? "bg-orange-500 text-white border-orange-600 scale-105 shadow-md ring-2 ring-orange-300"
                                : isVisited
                                ? "bg-white text-stone-900 border-stone-300 shadow-2xs"
                                : "bg-stone-100 text-stone-400 border-stone-200 opacity-60"
                            }`}
                          >
                            <div className="text-[10px] font-mono opacity-60">#{idx + 1}</div>
                            <div className="text-sm font-bold font-mono">{val}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TREE METRICS, HEIGHT & DIAMETER */}
            {activeTab === "metrics" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Mathematical Invariants & Dimensions
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Tree Metrics: Height, Depth, Diameter & Balance Checker
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-1">
                      <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold">Height (Edges)</div>
                      <div className="text-2xl font-extrabold text-orange-700 font-mono">{treeMetrics.height}</div>
                      <div className="text-[11px] text-stone-500">Root downward path</div>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-1">
                      <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold">Diameter (Edges)</div>
                      <div className="text-2xl font-extrabold text-orange-700 font-mono">{treeMetrics.diameter}</div>
                      <div className="text-[11px] text-stone-500">Longest path between any 2 nodes</div>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-1">
                      <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold">Total Edges (n - 1)</div>
                      <div className="text-2xl font-extrabold text-stone-900 font-mono">{treeMetrics.edges}</div>
                      <div className="text-[11px] text-stone-500">{treeMetrics.nodes} nodes</div>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-1">
                      <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold">AVL Height Balanced?</div>
                      <div className={`text-xl font-extrabold font-mono ${treeMetrics.isBalanced ? "text-emerald-700" : "text-red-700"}`}>
                        {treeMetrics.isBalanced ? "✓ Balanced" : "✕ Skewed"}
                      </div>
                      <div className="text-[11px] text-stone-500">|lh - rh| &le; 1 at all nodes</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: LOWEST COMMON ANCESTOR (LCA) */}
            {activeTab === "lca" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Hierarchical Queries
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Lowest Common Ancestor (LCA) in BST
                    </h3>
                    <p className="text-xs text-stone-500">
                      In a BST, if `p` and `q` are both smaller than `root`, move left. If both are greater, move right. The first node where they split is their LCA!
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Node p:</span>
                      <select
                        value={lcaP}
                        onChange={(e) => setLcaP(parseInt(e.target.value, 10))}
                        className="px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      >
                        {bstKeys.map(k => <option key={k} value={k}>{k}</option>)}
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Node q:</span>
                      <select
                        value={lcaQ}
                        onChange={(e) => setLcaQ(parseInt(e.target.value, 10))}
                        className="px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      >
                        {bstKeys.map(k => <option key={k} value={k}>{k}</option>)}
                      </select>
                    </div>

                    <div className="ml-auto p-3 bg-orange-50 rounded-xl border border-orange-200 flex items-center gap-2">
                      <span className="text-xs text-orange-800 font-bold">Lowest Common Ancestor:</span>
                      <strong className="text-base font-mono text-orange-700">{lcaResult?.lcaNode ?? "null"}</strong>
                    </div>
                  </div>

                  {lcaResult && (
                    <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 font-mono text-xs text-stone-700">
                      <strong>BST LCA Path:</strong> {lcaResult.path.join(" → ")} (Time: O(h))
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 5: BST VALIDATION & RANGE INVARIANT */}
            {activeTab === "validation" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      LeetCode 98 · Invariant Traps
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Validate Binary Search Tree: Range Invariant Engine
                    </h3>
                    <p className="text-xs text-stone-500">
                      Learn why checking immediate children `left &lt; root &lt; right` fails, and how passing `(min, max)` range bounds guarantees global validity.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: "valid", label: "Scenario A: Valid BST" },
                      { id: "invalidLocal", label: "Scenario B: Immediate Child Violation" },
                      { id: "invalidGlobal", label: "Scenario C: Classic Deep Subtree Trap (Node 6 in Right Subtree)" }
                    ].map(btn => (
                      <button
                        key={btn.id}
                        onClick={() => setValidateScenario(btn.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          validateScenario === btn.id
                            ? "bg-orange-600 text-white shadow-2xs"
                            : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className={`p-5 rounded-2xl border ${
                    validationAnalysis.isValid ? "bg-emerald-50/70 border-emerald-300" : "bg-red-50/70 border-red-300"
                  } space-y-3`}>
                    <div className="flex items-center gap-2">
                      {validationAnalysis.isValid ? <CheckCircle className="w-5 h-5 text-emerald-700" /> : <AlertTriangle className="w-5 h-5 text-red-700" />}
                      <h4 className="text-sm font-bold text-stone-900">{validationAnalysis.title}</h4>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">{validationAnalysis.treeDesc}</p>

                    <div className="p-4 bg-white rounded-xl border border-stone-200 font-mono text-xs space-y-1">
                      <span className="text-stone-500 font-bold block mb-1">Recursive Range Bound Check:</span>
                      {validationAnalysis.trace.map((step, idx) => (
                        <div key={idx} className={step.includes("REJECTED") ? "text-red-700 font-bold" : "text-stone-700"}>
                          &gt; {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: SERIALIZE & DESERIALIZE */}
            {activeTab === "codec" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      LeetCode 297 · Codec Architecture
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Tree Serialization & Deserialization Engine
                    </h3>
                    <p className="text-xs text-stone-500">
                      Convert tree structures into preorder string tokens with `#` null markers, ensuring exact structure reconstruction with 2n + 1 total tokens.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Serialized Preorder String:</span>
                      <input
                        type="text"
                        value={serializedOutput}
                        onChange={(e) => setSerializedOutput(e.target.value)}
                        className="px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg font-mono flex-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                        <div className="text-[10px] font-mono text-stone-400">Total Nodes (n)</div>
                        <div className="text-xl font-bold font-mono text-stone-900">{deserializedStats.nodeCount}</div>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                        <div className="text-[10px] font-mono text-stone-400">Null Markers (# = n + 1)</div>
                        <div className="text-xl font-bold font-mono text-orange-700">{deserializedStats.nullCount}</div>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                        <div className="text-[10px] font-mono text-stone-400">Formula Check (2n + 1)</div>
                        <div className={`text-xl font-bold font-mono ${deserializedStats.isFormulaMatch ? "text-emerald-700" : "text-amber-700"}`}>
                          {deserializedStats.tokens.length} tokens
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 7: 15-MCQ QUIZ */}
            {activeTab === "quiz" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Formal Assessment
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Module 12 Knowledge Check (15 MCQs)
                      </h3>
                    </div>
                    {quizSubmitted && (
                      <div className="px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-xl text-xs font-mono font-bold text-orange-800">
                        Score: {quizScore} / {quizData.length} ({Math.round((quizScore / quizData.length) * 100)}%)
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {quizData.map((q, qIdx) => {
                      const selected = quizAnswers[q.id];
                      return (
                        <div key={q.id} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="px-2 py-0.5 bg-stone-200 text-stone-700 rounded font-mono text-xs font-bold">
                              Q{qIdx + 1}
                            </span>
                            <span className="text-sm font-semibold text-stone-900">{q.question}</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                            {q.options.map((opt, optIdx) => {
                              const isPicked = selected === optIdx;
                              let btnClass = "bg-white text-stone-700 border-stone-200 hover:bg-stone-100";
                              if (quizSubmitted) {
                                if (optIdx === q.correct) btnClass = "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
                                else if (isPicked) btnClass = "bg-red-100 text-red-800 border-red-300";
                              } else if (isPicked) {
                                btnClass = "bg-orange-600 text-white border-orange-600 font-semibold";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !quizSubmitted && setQuizAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                                  className={`p-2.5 text-xs text-left rounded-lg border transition-all ${btnClass}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {quizSubmitted && (
                            <div className="pl-8 pt-1 text-xs text-stone-600">
                              <strong className="text-stone-900">Explanation: </strong>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <button
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold"
                    >
                      Reset Quiz
                    </button>
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold shadow-2xs"
                    >
                      Submit Answers
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 8: 45 LABS & 24 LEETCODE TRACK */}
            {activeTab === "labs" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Hands-on Practice
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      45 Practical Coding Assignments & 24 LeetCode Practice Tracks
                    </h3>
                  </div>

                  {/* LeetCode Track */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                      Curated LeetCode Tree Progression (24 Problems)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { num: "144", name: "Binary Tree Preorder", diff: "Easy", concept: "DFS", url: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
                        { num: "94", name: "Binary Tree Inorder", diff: "Easy", concept: "DFS", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
                        { num: "145", name: "Binary Tree Postorder", diff: "Easy", concept: "DFS", url: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
                        { num: "102", name: "Level Order Traversal", diff: "Medium", concept: "BFS Queue", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
                        { num: "104", name: "Maximum Depth", diff: "Easy", concept: "Recursion", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
                        { num: "226", name: "Invert Binary Tree", diff: "Easy", concept: "Recursion", url: "https://leetcode.com/problems/invert-binary-tree/" },
                        { num: "100", name: "Same Tree", diff: "Easy", concept: "DFS", url: "https://leetcode.com/problems/same-tree/" },
                        { num: "101", name: "Symmetric Tree", diff: "Easy", concept: "Recursion", url: "https://leetcode.com/problems/symmetric-tree/" },
                        { num: "700", name: "Search in a BST", diff: "Easy", concept: "BST Search", url: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
                        { num: "701", name: "Insert into a BST", diff: "Medium", concept: "BST Insert", url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
                        { num: "450", name: "Delete Node in a BST", diff: "Medium", concept: "BST Deletion", url: "https://leetcode.com/problems/delete-node-in-a-bst/" },
                        { num: "98", name: "Validate BST", diff: "Medium", concept: "Range Validation", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
                        { num: "230", name: "Kth Smallest in BST", diff: "Medium", concept: "Inorder", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
                        { num: "235", name: "LCA of a BST", diff: "Medium", concept: "BST LCA", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
                        { num: "110", name: "Balanced Binary Tree", diff: "Easy", concept: "Height Balance", url: "https://leetcode.com/problems/balanced-binary-tree/" },
                        { num: "543", name: "Diameter of Binary Tree", diff: "Easy", concept: "Bottom-Up DFS", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
                        { num: "236", name: "LCA of Binary Tree", diff: "Medium", concept: "DFS Split", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
                        { num: "124", name: "Binary Tree Max Path Sum", diff: "Hard", concept: "Bottom-Up DFS", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
                        { num: "297", name: "Serialize & Deserialize", diff: "Hard", concept: "Codec Preorder", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
                        { num: "105", name: "Construct from Pre/Inorder", diff: "Medium", concept: "Construction", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
                        { num: "199", name: "Right Side View", diff: "Medium", concept: "BFS Queue", url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
                        { num: "103", name: "Zigzag Level Order", diff: "Medium", concept: "Deque BFS", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
                        { num: "662", name: "Maximum Width of Tree", diff: "Medium", concept: "BFS Indexing", url: "https://leetcode.com/problems/maximum-width-of-binary-tree/" },
                        { num: "99", name: "Recover Binary Search Tree", diff: "Hard", concept: "Inorder Pointers", url: "https://leetcode.com/problems/recover-binary-search-tree/" },
                      ].map(p => (
                        <a
                          key={p.num}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-stone-50 hover:bg-orange-50/50 rounded-xl border border-stone-200 hover:border-orange-300 transition-all flex items-center justify-between"
                        >
                          <div>
                            <div className="text-xs font-bold text-stone-900">{p.num}. {p.name}</div>
                            <div className="text-[10px] text-stone-500 font-mono">{p.concept}</div>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            p.diff === "Easy" ? "bg-emerald-100 text-emerald-800" : p.diff === "Medium" ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"
                          }`}>
                            {p.diff}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 45 Assignments Checklist */}
                  <div className="space-y-4 pt-4 border-t border-stone-100">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                      Module Assignments Checklist (45 Problems)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Beginner */}
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                        <span className="text-xs font-bold text-stone-800 font-mono">Assignment 1 — Beginner (1-15)</span>
                        <div className="space-y-1.5 text-xs text-stone-700">
                          {[
                            "1. Create binary tree manually",
                            "2. Count total number of nodes",
                            "3. Count leaf nodes",
                            "4. Count internal nodes",
                            "5. Calculate height of tree",
                            "6. Preorder traversal",
                            "7. Inorder traversal",
                            "8. Postorder traversal",
                            "9. Level-order traversal",
                            "10. Sum of all node values",
                            "11. Maximum value in tree",
                            "12. Minimum value in tree",
                            "13. Count nodes at given depth",
                            "14. Print all root-to-leaf paths",
                            "15. Invert a binary tree"
                          ].map((t, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!completedLabs[`b_${i}`]}
                                onChange={(e) => setCompletedLabs(c => ({ ...c, [`b_${i}`]: e.target.checked }))}
                                className="rounded text-orange-600 focus:ring-orange-500"
                              />
                              <span className={completedLabs[`b_${i}`] ? "line-through text-stone-400" : ""}>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Intermediate */}
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                        <span className="text-xs font-bold text-stone-800 font-mono">Assignment 2 — Intermediate (16-30)</span>
                        <div className="space-y-1.5 text-xs text-stone-700">
                          {[
                            "16. Search element in BST",
                            "17. Insert element into BST",
                            "18. Delete element from BST",
                            "19. Find min and max in BST",
                            "20. Find inorder successor",
                            "21. Find inorder predecessor",
                            "22. Validate BST property",
                            "23. Kth smallest element in BST",
                            "24. Kth largest element in BST",
                            "25. LCA in a BST",
                            "26. Sorted array to balanced BST",
                            "27. Check identical trees",
                            "28. Check mirror trees",
                            "29. Minimum depth of tree",
                            "30. Right side view of tree"
                          ].map((t, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!completedLabs[`i_${i}`]}
                                onChange={(e) => setCompletedLabs(c => ({ ...c, [`i_${i}`]: e.target.checked }))}
                                className="rounded text-orange-600 focus:ring-orange-500"
                              />
                              <span className={completedLabs[`i_${i}`] ? "line-through text-stone-400" : ""}>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Advanced */}
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                        <span className="text-xs font-bold text-stone-800 font-mono">Assignment 3 — Advanced (31-45)</span>
                        <div className="space-y-1.5 text-xs text-stone-700">
                          {[
                            "31. Diameter of binary tree",
                            "32. Check height balanced tree",
                            "33. LCA in general binary tree",
                            "34. Serialize and deserialize tree",
                            "35. Maximum path sum",
                            "36. Root-to-leaf paths target sum",
                            "37. Tree from preorder and inorder",
                            "38. Tree from inorder and postorder",
                            "39. Zigzag level-order traversal",
                            "40. Vertical order traversal",
                            "41. Top view of binary tree",
                            "42. Bottom view of binary tree",
                            "43. Boundary traversal of tree",
                            "44. Maximum width of tree",
                            "45. Recover swapped BST nodes"
                          ].map((t, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!completedLabs[`a_${i}`]}
                                onChange={(e) => setCompletedLabs(c => ({ ...c, [`a_${i}`]: e.target.checked }))}
                                className="rounded text-orange-600 focus:ring-orange-500"
                              />
                              <span className={completedLabs[`a_${i}`] ? "line-through text-stone-400" : ""}>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* FULL READER VIEW */}
        {/* ========================================================================= */}
        {viewMode === "reader" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar TOC */}
            <div className="lg:col-span-1 space-y-4">
              <div className="sticky top-20 bg-white p-4 rounded-2xl border border-[#e7e3da] shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="text-xs font-bold font-mono uppercase text-stone-500">Curriculum TOC</span>
                  <span className="text-[11px] font-mono text-orange-600">{JavaTreesSections.length} Chapters</span>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-stone-400" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filter sections..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="max-h-[70vh] overflow-y-auto space-y-1 dark-scrollbar">
                  {filteredSections.map((sec, idx) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(parseInt(sec.number, 10))}
                      title={sec.title}
                      className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-start justify-between ${
                        activeSection === parseInt(sec.number, 10)
                          ? "bg-orange-50 text-orange-800 font-bold border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <span className="break-words whitespace-normal leading-snug flex-1 pr-2">{sec.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40 mt-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reading Content Pane */}
            <div className="lg:col-span-3 space-y-10">
              {JavaTreesSections.map((sec, idx) => (
                <div
                  key={sec.id}
                  id={`section-${idx}`}
                  className="p-6 sm:p-8 bg-white rounded-3xl border border-[#e7e3da] shadow-2xs space-y-4 scroll-mt-20"
                >
                  <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      {sec.category}
                    </span>
                    <span className="text-xs font-mono text-stone-400">Chapter {sec.number} / 31</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                    {sec.title}
                  </h2>

                  <div className="prose prose-stone max-w-none pt-2">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
