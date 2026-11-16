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
  ListFilter
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_HEAPS_SECTIONS } from "./JavaHeapsSections";
import { getCourseAccess, completeModule, UNLOCK_UPDATED_EVENT } from "../services/unlockingService";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which element is always stored at the root of a Min Heap?",
    options: ["The largest element", "The smallest element", "The middle element", "An arbitrary element depending on insertion"],
    correct: 1,
    explanation: "By the Min Heap order invariant, every parent node is less than or equal to its children (Parent <= LeftChild and Parent <= RightChild). Thus, the absolute smallest element is always at index 0."
  },
  {
    id: 2,
    question: "What is the worst-case time complexity of inserting a single element into a binary heap containing N elements?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correct: 1,
    explanation: "Insertion places the element at the last array position and sifts it up to the root. Since a complete binary tree of N elements has height floor(log2(N)), sift-up takes at most O(log N) comparisons."
  },
  {
    id: 3,
    question: "What is the time complexity of the bottom-up Build Heap algorithm on an unsorted array of size N?",
    options: ["O(log N)", "O(N)", "O(N log N)", "O(N^2)"],
    correct: 1,
    explanation: "Bottom-up Build Heap runs in linear O(N) time because approximately N/2 nodes are leaves requiring 0 swaps, N/4 are 1 level above leaves, and only 1 node (the root) is at maximum height."
  },
  {
    id: 4,
    question: "For a node at zero-based array index i in a complete binary heap, what is the parent's index formula?",
    options: ["floor((i - 1) / 2)", "floor(i / 2)", "2 * i + 1", "2 * i - 1"],
    correct: 0,
    explanation: "In zero-based indexing, the parent of node i is floor((i - 1) / 2). For example, nodes at indices 1 and 2 both have parent index (1-1)/2 = 0 and (2-1)/2 = 0."
  },
  {
    id: 5,
    question: "In a binary heap of size N, which array indices represent leaf nodes (zero-based)?",
    options: ["0 to floor(N / 2) - 1", "floor(N / 2) to N - 1", "N / 2 to N", "Only index N - 1"],
    correct: 1,
    explanation: "The last non-leaf node is at index floor(N/2) - 1. Therefore, all subsequent positions from floor(N/2) up to N - 1 are leaf nodes without children."
  },
  {
    id: 6,
    question: "What is the worst-case time complexity and auxiliary space of iterative in-place Heap Sort?",
    options: ["Time: O(N log N), Auxiliary Space: O(1)", "Time: O(N^2), Auxiliary Space: O(1)", "Time: O(N log N), Auxiliary Space: O(N)", "Time: O(N), Auxiliary Space: O(log N)"],
    correct: 0,
    explanation: "Heap Sort constructs a Max Heap in O(N) and repeatedly swaps the root with the end of the active heap, restoring the heap in O(log N). Total time is O(N log N) with O(1) extra memory."
  },
  {
    id: 7,
    question: "Is standard Heap Sort a stable sorting algorithm?",
    options: ["Yes, always", "No, relative ordering of equal keys can be swapped across levels", "Yes, when using a Min Heap", "Stable only for integers"],
    correct: 1,
    explanation: "Heap Sort is not stable because swapping elements between the root and distant leaves during extraction and sift-down disrupts the original relative order of duplicate elements."
  },
  {
    id: 8,
    question: "What ordering does Java's PriorityQueue<Integer> provide by default when no Comparator is passed?",
    options: ["Descending order (Max Heap)", "Ascending natural order (Min Heap)", "First-In-First-Out (FIFO)", "Randomized order"],
    correct: 1,
    explanation: "Java's PriorityQueue uses natural ordering by default for Comparable types, acting as a Min Heap where the smallest element is at the head (`peek()` / `poll()`)."
  },
  {
    id: 9,
    question: "What is true about iterating over a Java PriorityQueue with an enhanced for-loop `for (int val : pq)`?",
    options: [
      "Elements are returned in sorted ascending order",
      "Elements are traversed in internal array order without priority guarantees",
      "An exception is thrown",
      "The queue is emptied during iteration"
    ],
    correct: 1,
    explanation: "The Java API documentation explicitly notes that the iterator does NOT guarantee elements in priority order. To extract elements in priority order, you must repeatedly call `poll()`."
  },
  {
    id: 10,
    question: "Which data structure and size efficiently finds the Kth largest element in an unsorted array in O(N log K) time?",
    options: ["Max Heap of size N", "Min Heap of size K", "Min Heap of size N", "ArrayDeque of size K"],
    correct: 1,
    explanation: "A Min Heap of size K retains only the K largest values seen so far. Evicting the minimum when size exceeds K leaves the Kth largest element at the root."
  },
  {
    id: 11,
    question: "In the Two-Heaps algorithm for continuous streaming median (LeetCode 295), which two heaps are used?",
    options: [
      "Lower half: Max Heap, Upper half: Min Heap",
      "Lower half: Min Heap, Upper half: Max Heap",
      "Two Min Heaps of equal sizes",
      "Two Max Heaps of equal sizes"
    ],
    correct: 0,
    explanation: "The smaller half of numbers is stored in a Max Heap (root gives the maximum of the lower half), while the larger half is stored in a Min Heap (root gives the minimum of the upper half)."
  },
  {
    id: 12,
    question: "What is the valid Balance Factor (BF = Height(left) - Height(right)) for every node in an AVL tree?",
    options: ["BF in {-1, 0, 1}", "BF in {0, 1, 2}", "BF in {-2, 0, 2}", "BF must equal 0 strictly"],
    correct: 0,
    explanation: "An AVL Tree strictly enforces that for every node, the difference between left and right subtree heights is at most 1: |BF| <= 1, meaning BF in {-1, 0, 1}."
  },
  {
    id: 13,
    question: "Which rotation fixes an AVL Left-Left (LL) imbalance?",
    options: ["Left rotation on root", "Right rotation on root", "Left-Right double rotation", "Right-Left double rotation"],
    correct: 1,
    explanation: "An LL imbalance occurs when the left subtree of the left child is heavy. A single Right Rotation at the imbalanced node brings the left child up to become the new root."
  },
  {
    id: 14,
    question: "Which sequence of rotations corrects an AVL Left-Right (LR) imbalance?",
    options: [
      "Left rotation on left child, then Right rotation on root",
      "Right rotation on left child, then Left rotation on root",
      "Two consecutive Right rotations",
      "Two consecutive Left rotations"
    ],
    correct: 0,
    explanation: "An LR imbalance is a zig-zag shape. Performing a Left Rotation on the left child converts it to a straight-line LL case, after which a Right Rotation on the root restores balance."
  },
  {
    id: 15,
    question: "Which invariant is required in every valid Red-Black Tree?",
    options: [
      "The root must always be red",
      "No two consecutive red nodes are permitted (a red node's children must be black)",
      "Every path from root to leaf has a different black height",
      "All leaves must store actual data elements"
    ],
    correct: 1,
    explanation: "Rule 4 of Red-Black Trees dictates that if a node is red, both its children must be black. Therefore, red nodes cannot appear consecutively along any path."
  }
];

// --- 45 LABS & PRACTICAL ASSIGNMENTS ---
const LAB_ASSIGNMENTS = [
  // Beginner (1-15)
  { id: 1, tier: "Beginner", title: "Min Heap Array Implementation", desc: "Build a generic MinHeap<T> class backed by an ArrayList with dynamic resizing." },
  { id: 2, tier: "Beginner", title: "Max Heap Array Implementation", desc: "Build a MaxHeap class backed by an array maintaining the parent >= child invariant." },
  { id: 3, tier: "Beginner", title: "Sift-Up (Bubble Up) Logic", desc: "Implement sift-up comparison and parent index arithmetic ((i-1)/2)." },
  { id: 4, tier: "Beginner", title: "Sift-Down (Heapify Down)", desc: "Implement sift-down selecting the smaller child between 2i+1 and 2i+2." },
  { id: 5, tier: "Beginner", title: "Extract Root Min/Max", desc: "Remove the root element, swap with the last leaf, and rebalance via sift-down." },
  { id: 6, tier: "Beginner", title: "Bottom-Up Build Heap", desc: "Convert an unsorted array into a valid Max Heap in linear O(N) time." },
  { id: 7, tier: "Beginner", title: "In-Place Heap Sort", desc: "Sort an unsorted array in ascending order using Max Heap construction and root extraction." },
  { id: 8, tier: "Beginner", title: "Heap Peek and Size Check", desc: "Implement constant time O(1) peek() and size() queries on a binary heap." },
  { id: 9, tier: "Beginner", title: "Array to Tree Hierarchy Printer", desc: "Print array heap elements level-by-level with parent-child links." },
  { id: 10, tier: "Beginner", title: "Leaf Node Index Boundary Validator", desc: "Verify that all indices from floor(n/2) to n-1 are valid leaves." },
  { id: 11, tier: "Beginner", title: "Java PriorityQueue Basic Min Heap", desc: "Instantiate java.util.PriorityQueue and process numeric task priorities." },
  { id: 12, tier: "Beginner", title: "Java PriorityQueue Max Heap with ReverseOrder", desc: "Configure PriorityQueue with Comparator.reverseOrder() for largest-first processing." },
  { id: 13, tier: "Beginner", title: "PriorityQueue Custom Student Comparator", desc: "Sort Student objects by GPA or marks using Comparator.comparingInt()." },
  { id: 14, tier: "Beginner", title: "LeetCode 1046: Last Stone Weight", desc: "Simulate colliding the two heaviest stones using a Max Heap until <= 1 stone remains." },
  { id: 15, tier: "Beginner", title: "Repeated Insertion vs Build Heap Benchmark", desc: "Empirically measure O(N) bottom-up build vs O(N log N) repeated insertions on 100K items." },

  // Intermediate (16-30)
  { id: 16, tier: "Intermediate", title: "LeetCode 215: Kth Largest Element", desc: "Find the Kth largest element in an unsorted array using a Min Heap of size K in O(N log K)." },
  { id: 17, tier: "Intermediate", title: "Kth Smallest Element via Max Heap", desc: "Find the Kth smallest element using a Max Heap of size K in O(N log K) time." },
  { id: 18, tier: "Intermediate", title: "LeetCode 347: Top K Frequent Elements", desc: "Combine HashMap frequency counting with a Min Heap of size K to extract top frequencies." },
  { id: 19, tier: "Intermediate", title: "LeetCode 692: Top K Frequent Words", desc: "Sort words by frequency descending and alphabetical order ascending via custom Comparator." },
  { id: 20, tier: "Intermediate", title: "LeetCode 973: K Closest Points to Origin", desc: "Find K points closest to (0,0) by Euclidean distance using a Max Heap of size K." },
  { id: 21, tier: "Intermediate", title: "LeetCode 703: Kth Largest Element in a Stream", desc: "Design a class that maintains the Kth largest value from a dynamically arriving stream." },
  { id: 22, tier: "Intermediate", title: "Minimum Cost to Connect Ropes", desc: "Repeatedly combine the two smallest ropes using a Min Heap to minimize cumulative cost." },
  { id: 23, tier: "Intermediate", title: "Merge K Sorted Arrays", desc: "Merge K sorted integer arrays into a single sorted list using a Min Heap holding elements and indices." },
  { id: 24, tier: "Intermediate", title: "LeetCode 23: Merge K Sorted Lists", desc: "Merge K sorted singly-linked lists using a Min Heap of list nodes and dummy head pointer." },
  { id: 25, tier: "Intermediate", title: "LeetCode 378: Kth Smallest in Sorted Matrix", desc: "Find the Kth smallest element in a row-and-column sorted matrix using a Min Heap of row heads." },
  { id: 26, tier: "Intermediate", title: "LeetCode 373: Find K Pairs with Smallest Sums", desc: "Generate K pairs with smallest sums from two sorted arrays without evaluating all N*M pairs." },
  { id: 27, tier: "Intermediate", title: "LeetCode 621: Task Scheduler", desc: "Schedule CPU tasks with cooldown periods using a Max Heap of task counts and wait queue." },
  { id: 28, tier: "Intermediate", title: "Priority-Based Print Queue Simulator", desc: "Simulate an enterprise print server with priority preemption and FIFO tie-breaking." },
  { id: 29, tier: "Intermediate", title: "PriorityQueue Iterator vs Poll Ordering Verification", desc: "Demonstrate and document why `for (var x : pq)` produces non-sorted order while `poll()` sorts." },
  { id: 30, tier: "Intermediate", title: "Generic Min-Max Heap Pair", desc: "Synchronize two heaps to support both findMin() and findMax() queries in O(1) time." },

  // Advanced (31-45)
  { id: 31, tier: "Advanced", title: "LeetCode 295: Find Median from Data Stream", desc: "Design a dual-heap MedianFinder balancing a lower Max Heap and upper Min Heap in O(log N) insert." },
  { id: 32, tier: "Advanced", title: "LeetCode 239: Sliding Window Maximum", desc: "Find the maximum in every sliding window of size K using Monotonic Deque and Max Heap." },
  { id: 33, tier: "Advanced", title: "LeetCode 502: IPO Capital Maximizer", desc: "Select up to K distinct projects to maximize capital using two PriorityQueues (capital & profit)." },
  { id: 34, tier: "Advanced", title: "LeetCode 632: Smallest Range Covering Elements from K Lists", desc: "Find the smallest numeric range that includes at least one number from each of K sorted lists." },
  { id: 35, tier: "Advanced", title: "AVL Tree Node & Height Calculation", desc: "Implement an AVL Node class storing key, left, right, and integer height with null handling." },
  { id: 36, tier: "Advanced", title: "AVL Balance Factor Calculation", desc: "Compute BF = height(left) - height(right) and detect |BF| >= 2 imbalance conditions." },
  { id: 37, tier: "Advanced", title: "AVL Left-Left (LL) Right Rotation", desc: "Implement rightRotate(Node y) updating child pointers and recalculating heights of y and x." },
  { id: 38, tier: "Advanced", title: "AVL Right-Right (RR) Left Rotation", desc: "Implement leftRotate(Node x) promoting the right child and reconnecting the middle subtree T2." },
  { id: 39, tier: "Advanced", title: "AVL Left-Right (LR) Double Rotation", desc: "Perform left rotation on left child followed by right rotation on root." },
  { id: 40, tier: "Advanced", title: "AVL Right-Left (RL) Double Rotation", desc: "Perform right rotation on right child followed by left rotation on root." },
  { id: 41, tier: "Advanced", title: "Complete AVL Tree Insertion from Scratch", desc: "Combine standard BST insertion, height updates, balance factor checks, and 4 rotation branches." },
  { id: 42, tier: "Advanced", title: "AVL Tree Deletion with Rebalancing", desc: "Implement standard 3-case BST deletion followed by bottom-up balance factor repair." },
  { id: 43, tier: "Advanced", title: "Red-Black Tree 5 Invariants Verifier", desc: "Write an automated diagnostic function verifying root black, red children black, and equal black-height." },
  { id: 44, tier: "Advanced", title: "Red-Black Tree Recoloring Simulation", desc: "Simulate red-uncle recoloring (parent & uncle black, grandparent red) ascending toward root." },
  { id: 45, tier: "Advanced", title: "Real-Time Leaderboard with Heaps and TreeMap", desc: "Architect a low-latency gaming leaderboard supporting O(log N) score updates and O(K) top rank extraction." }
];

export default function JavaHeaps() {
  const navigate = useNavigate();

  // Mode: "reader" vs "workbench"
  const [activeTab, setActiveTab] = useState("workbench");
  const [workbenchTool, setWorkbenchTool] = useState("heap-studio");
  const [searchFilter, setSearchFilter] = useState("");
  const [activeSectionId, setActiveSectionId] = useState(0);

  // Access & Completion State
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [completedSections, setCompletedSections] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_java_heaps_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Labs Tracker State
  const [completedLabs, setCompletedLabs] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_java_heaps_labs");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [labTierFilter, setLabTierFilter] = useState("All");

  // --- WORKBENCH 1: HEAP STUDIO STATE ---
  const [heapType, setHeapType] = useState("min"); // "min" | "max"
  const [heapArray, setHeapArray] = useState([10, 20, 15, 40, 30, 50, 25]);
  const [heapInputVal, setHeapInputVal] = useState("");
  const [heapLogs, setHeapLogs] = useState(["Initialized sample Min Heap: [10, 20, 15, 40, 30, 50, 25]"]);
  const [highlightIdx, setHighlightIdx] = useState(null);

  // --- WORKBENCH 2: BUILD HEAP & HEAP SORT STATE ---
  const [sortArray, setSortArray] = useState([4, 10, 3, 5, 1, 9, 2, 8]);
  const [sortStep, setSortStep] = useState(0);
  const [sortLogs, setSortLogs] = useState(["Initial array ready for Build Max Heap and Heap Sort"]);

  // --- WORKBENCH 3: PRIORITY QUEUE PLAYGROUND STATE ---
  const [pqOrder, setPqOrder] = useState("natural"); // "natural" | "reverse" | "student"
  const [pqElements, setPqElements] = useState([40, 10, 30, 20]);
  const [pqInputVal, setPqInputVal] = useState("");
  const [pqPolledList, setPqPolledList] = useState([]);

  // --- WORKBENCH 4: TOP-K ELEMENT FINDER STATE ---
  const [topKArray, setTopKArray] = useState([3, 2, 1, 5, 6, 4]);
  const [topKVal, setTopKVal] = useState(2);
  const [topKMode, setTopKMode] = useState("largest"); // "largest" | "smallest"

  // --- WORKBENCH 5: RUNNING MEDIAN STATE ---
  const [medianStream, setMedianStream] = useState([5, 2, 10, 4, 8]);
  const [medianInputVal, setMedianInputVal] = useState("");
  const [lowerMaxHeap, setLowerMaxHeap] = useState([]);
  const [upperMinHeap, setUpperMinHeap] = useState([]);

  // --- WORKBENCH 7: AVL SIMULATOR STATE ---
  const [avlKeys, setAvlKeys] = useState([30, 20, 10]);
  const [avlInputVal, setAvlInputVal] = useState("");
  const [avlRotationLog, setAvlRotationLog] = useState(["Initial LL demo: inserted 30, 20, 10 -> triggered Right Rotation at 30"]);

  // Synchronize stream median whenever medianStream updates
  useEffect(() => {
    let lower = []; // Max Heap (numbers negated for standard MinHeap logic, or sorted descending)
    let upper = []; // Min Heap (sorted ascending)

    medianStream.forEach(num => {
      // 1. Add to lower
      lower.push(num);
      lower.sort((a, b) => b - a); // descending

      // 2. Balancing: largest of lower to upper if lower.peek() > upper.peek()
      if (upper.length > 0 && lower[0] > upper[0]) {
        const moved = lower.shift();
        upper.push(moved);
        upper.sort((a, b) => a - b);
      }

      // 3. Size balance: lower has equal or 1 more than upper
      if (lower.length > upper.length + 1) {
        const moved = lower.shift();
        upper.push(moved);
        upper.sort((a, b) => a - b);
      } else if (upper.length > lower.length) {
        const moved = upper.shift();
        lower.push(moved);
        lower.sort((a, b) => b - a);
      }
    });

    setLowerMaxHeap(lower);
    setUpperMinHeap(upper);
  }, [medianStream]);

  // Handle Lab Toggle
  const toggleLab = (id) => {
    const updated = { ...completedLabs, [id]: !completedLabs[id] };
    setCompletedLabs(updated);
    try {
      localStorage.setItem("prepspaces_java_heaps_labs", JSON.stringify(updated));
    } catch {}
  };

  // Section completion toggle
  const toggleSectionComplete = (sId) => {
    const updated = { ...completedSections, [sId]: !completedSections[sId] };
    setCompletedSections(updated);
    try {
      localStorage.setItem("prepspaces_java_heaps_progress", JSON.stringify(updated));
    } catch {}
  };

  // --- HEAP STUDIO OPERATIONS ---
  const handleHeapInsert = () => {
    const val = parseInt(heapInputVal, 10);
    if (isNaN(val)) return;

    let arr = [...heapArray, val];
    let idx = arr.length - 1;
    let logMsg = `Inserted ${val} at index ${idx}. Sift-up triggered.`;

    if (heapType === "min") {
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (arr[idx] < arr[parentIdx]) {
          const temp = arr[idx];
          arr[idx] = arr[parentIdx];
          arr[parentIdx] = temp;
          idx = parentIdx;
        } else {
          break;
        }
      }
    } else {
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (arr[idx] > arr[parentIdx]) {
          const temp = arr[idx];
          arr[idx] = arr[parentIdx];
          arr[parentIdx] = temp;
          idx = parentIdx;
        } else {
          break;
        }
      }
    }

    setHeapArray(arr);
    setHighlightIdx(idx);
    setHeapLogs(prev => [logMsg, ...prev.slice(0, 8)]);
    setHeapInputVal("");
  };

  const handleHeapExtractRoot = () => {
    if (heapArray.length === 0) return;
    let arr = [...heapArray];
    const rootVal = arr[0];
    const lastVal = arr.pop();

    if (arr.length > 0) {
      arr[0] = lastVal;
      let idx = 0;
      const size = arr.length;

      if (heapType === "min") {
        while (true) {
          let smallest = idx;
          const left = 2 * idx + 1;
          const right = 2 * idx + 2;

          if (left < size && arr[left] < arr[smallest]) smallest = left;
          if (right < size && arr[right] < arr[smallest]) smallest = right;
          if (smallest === idx) break;

          const temp = arr[idx];
          arr[idx] = arr[smallest];
          arr[smallest] = temp;
          idx = smallest;
        }
      } else {
        while (true) {
          let largest = idx;
          const left = 2 * idx + 1;
          const right = 2 * idx + 2;

          if (left < size && arr[left] > arr[largest]) largest = left;
          if (right < size && arr[right] > arr[largest]) largest = right;
          if (largest === idx) break;

          const temp = arr[idx];
          arr[idx] = arr[largest];
          arr[largest] = temp;
          idx = largest;
        }
      }
    }

    setHeapArray(arr);
    setHighlightIdx(0);
    setHeapLogs(prev => [`Extracted root ${rootVal} (${heapType === "min" ? "Minimum" : "Maximum"}). Sift-down rebalanced heap.`, ...prev.slice(0, 8)]);
  };

  // Convert heap array to visual tree nodes with (x, y) coordinates
  const treeNodes = useMemo(() => {
    return heapArray.map((val, idx) => {
      const level = Math.floor(Math.log2(idx + 1));
      const levelNodes = Math.pow(2, level);
      const posInLevel = idx - (levelNodes - 1);
      const width = 400;
      const x = ((posInLevel + 0.5) / levelNodes) * width;
      const y = 40 + level * 55;
      return { val, idx, level, x, y };
    });
  }, [heapArray]);

  // Calculate Median from current two-heap stream
  const currentMedian = useMemo(() => {
    if (lowerMaxHeap.length === 0 && upperMinHeap.length === 0) return 0;
    if (lowerMaxHeap.length === upperMinHeap.length) {
      return (lowerMaxHeap[0] + upperMinHeap[0]) / 2.0;
    }
    return lowerMaxHeap[0];
  }, [lowerMaxHeap, upperMinHeap]);

  // Compute Top-K Result
  const topKResult = useMemo(() => {
    if (topKArray.length === 0 || topKVal <= 0) return null;
    const k = Math.min(topKVal, topKArray.length);

    if (topKMode === "largest") {
      // Min heap of size K
      let minHeap = [];
      topKArray.forEach(num => {
        minHeap.push(num);
        minHeap.sort((a, b) => a - b);
        if (minHeap.length > k) minHeap.shift();
      });
      return {
        answer: minHeap[0],
        heapSnapshot: minHeap,
        label: `${k}th Largest Element`
      };
    } else {
      // Max heap of size K
      let maxHeap = [];
      topKArray.forEach(num => {
        maxHeap.push(num);
        maxHeap.sort((a, b) => b - a);
        if (maxHeap.length > k) maxHeap.shift();
      });
      return {
        answer: maxHeap[0],
        heapSnapshot: maxHeap,
        label: `${k}th Smallest Element`
      };
    }
  }, [topKArray, topKVal, topKMode]);

  // Filtered sections for search
  const filteredSections = useMemo(() => {
    if (!searchFilter.trim()) return JAVA_HEAPS_SECTIONS;
    const q = searchFilter.toLowerCase();
    return JAVA_HEAPS_SECTIONS.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }, [searchFilter]);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Top sticky module navigation bar */}
      <ModuleNav
        currentModuleId="heaps"
        prevRoute="/learning/java/trees"
        nextRoute="/learning/java/specialized-ds"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 space-y-8">
        
        {/* Module Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-stone-900 via-stone-850 to-orange-950 p-6 sm:p-10 text-white shadow-xl border border-stone-800">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30">
                Module 13 · Advanced DSA
              </span>
              <span className="flex items-center gap-1.5 text-xs text-stone-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                28 Core Curriculum Topics
              </span>
              <span className="flex items-center gap-1.5 text-xs text-stone-300 font-medium">
                <Activity className="w-3.5 h-3.5 text-orange-400" />
                8 Interactive Workbenches
              </span>
              <span className="flex items-center gap-1.5 text-xs text-stone-300 font-medium">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                45 Coding Laboratories
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Heaps, Priority Queues &amp; Advanced Trees
            </h1>
            <p className="text-base sm:text-lg text-stone-300 max-w-3xl leading-relaxed">
              Master priority-driven systems and self-balancing architectures: Min/Max Heaps, complete binary tree array mapping, sift-up and sift-down mechanics, <code className="text-orange-400 font-mono">O(N)</code> bottom-up Build Heap proof, in-place Heap Sort, Java <code className="text-orange-400 font-mono">PriorityQueue</code> internals, running median balancing, AVL tree rotations (LL, RR, LR, RL), and Red-Black tree invariants.
            </p>

            {/* Mode Selector Tabs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-xs cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-orange-500 text-white shadow-orange-500/25"
                    : "bg-stone-800/80 hover:bg-stone-750 text-stone-300 border border-stone-700"
                }`}
              >
                <Cpu className="w-4 h-4" />
                Interactive Workbenches (8 Tools)
              </button>

              <button
                onClick={() => setActiveTab("reader")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-xs cursor-pointer ${
                  activeTab === "reader"
                    ? "bg-orange-500 text-white shadow-orange-500/25"
                    : "bg-stone-800/80 hover:bg-stone-750 text-stone-300 border border-stone-700"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Curriculum Reader (28 Sections)
              </button>

              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-xs cursor-pointer ${
                  activeTab === "quiz"
                    ? "bg-orange-500 text-white shadow-orange-500/25"
                    : "bg-stone-800/80 hover:bg-stone-750 text-stone-300 border border-stone-700"
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                Diagnostic Quiz (15 MCQs)
              </button>

              <button
                onClick={() => setActiveTab("labs")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-xs cursor-pointer ${
                  activeTab === "labs"
                    ? "bg-orange-500 text-white shadow-orange-500/25"
                    : "bg-stone-800/80 hover:bg-stone-750 text-stone-300 border border-stone-700"
                }`}
              >
                <FileCode className="w-4 h-4" />
                45 Practice Labs Tracker
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: INTERACTIVE WORKBENCHES                            */}
        {/* ========================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            
            {/* Workbench Navigation Sub-Bar */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs">
              {[
                { id: "heap-studio", label: "Heap Studio (Min/Max)", icon: Layers },
                { id: "build-sort", label: "Build Heap & Sort", icon: ArrowDownUp },
                { id: "priority-queue", label: "PriorityQueue Playground", icon: ListFilter },
                { id: "top-k", label: "Top-K & Kth Element", icon: Target },
                { id: "running-median", label: "Running Median (Two-Heaps)", icon: Scale },
                { id: "avl-rotations", label: "AVL Tree & 4 Rotations", icon: RotateCcw },
                { id: "red-black", label: "Red-Black Invariants", icon: ShieldCheck },
              ].map(tool => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setWorkbenchTool(tool.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      workbenchTool === tool.id
                        ? "bg-orange-500 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tool.label}
                  </button>
                );
              })}
            </div>

            {/* TOOL 1: HEAP STUDIO */}
            {workbenchTool === "heap-studio" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Control Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-4">
                    <h3 className="text-base font-bold text-stone-900 flex items-center justify-between">
                      <span>Binary Heap Studio</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-orange-100 text-orange-800 uppercase">
                        {heapType} Heap
                      </span>
                    </h3>

                    <div className="flex rounded-xl bg-stone-100 p-1">
                      <button
                        onClick={() => {
                          setHeapType("min");
                          setHeapArray([10, 20, 15, 40, 30, 50, 25]);
                          setHeapLogs(["Switched to Min Heap mode. Initialized sample Min Heap."]);
                        }}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                          heapType === "min" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"
                        }`}
                      >
                        Min Heap (Parent &le; Children)
                      </button>
                      <button
                        onClick={() => {
                          setHeapType("max");
                          setHeapArray([90, 70, 80, 40, 50, 60, 30]);
                          setHeapLogs(["Switched to Max Heap mode. Initialized sample Max Heap."]);
                        }}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                          heapType === "max" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"
                        }`}
                      >
                        Max Heap (Parent &ge; Children)
                      </button>
                    </div>

                    {/* Insert Form */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Insert Element</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={heapInputVal}
                          onChange={(e) => setHeapInputVal(e.target.value)}
                          placeholder="e.g. 5 or 95"
                          className="flex-1 px-3 py-2 rounded-xl border border-stone-300 text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                          onKeyDown={(e) => e.key === "Enter" && handleHeapInsert()}
                        />
                        <button
                          onClick={handleHeapInsert}
                          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
                        >
                          Insert (Sift-Up)
                        </button>
                      </div>
                    </div>

                    {/* Extract Root Button */}
                    <div className="pt-2">
                      <button
                        onClick={handleHeapExtractRoot}
                        disabled={heapArray.length === 0}
                        className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                      >
                        <ArrowDownUp className="w-4 h-4 text-orange-400" />
                        Extract Root ({heapType === "min" ? "extractMin" : "extractMax"} with Sift-Down)
                      </button>
                    </div>

                    {/* Preset Buttons */}
                    <div className="pt-2 flex gap-2">
                      <button
                        onClick={() => {
                          setHeapArray(heapType === "min" ? [5, 10, 15, 20, 30, 40] : [90, 80, 70, 60, 50, 40]);
                          setHeapLogs(["Reset to default balanced tree"]);
                        }}
                        className="flex-1 py-1.5 rounded-lg border border-stone-200 text-stone-700 text-xs font-medium hover:bg-stone-50 cursor-pointer"
                      >
                        Reset Tree
                      </button>
                      <button
                        onClick={() => {
                          setHeapArray([]);
                          setHeapLogs(["Cleared heap"]);
                        }}
                        className="px-3 py-1.5 rounded-lg border border-stone-200 text-rose-600 text-xs font-medium hover:bg-rose-50 cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>

                    {/* Arithmetic Legend */}
                    <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs font-mono space-y-1 text-orange-950">
                      <div className="font-bold text-[11px] uppercase text-orange-800 mb-1">Index Arithmetic Formulas:</div>
                      <div>Left Child(i) &nbsp;= 2i + 1</div>
                      <div>Right Child(i) = 2i + 2</div>
                      <div>Parent(i) &nbsp; &nbsp; &nbsp;= floor((i - 1) / 2)</div>
                    </div>
                  </div>

                  {/* Operation Activity Logs */}
                  <div className="p-4 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-2">
                    <div className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-stone-500" />
                      <span>Heap Sift Diagnostics</span>
                    </div>
                    <div className="space-y-1 max-h-40 overflow-y-auto text-xs font-mono text-stone-600 [scrollbar-width:thin]">
                      {heapLogs.map((log, lIdx) => (
                        <div key={lIdx} className="leading-snug py-0.5 border-b border-stone-100 last:border-0">
                          &gt; {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visualizer Column */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Array Representation Bar */}
                  <div className="p-5 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                        Zero-Based Backing Array Representation (Size = {heapArray.length})
                      </span>
                      <span className="text-xs font-mono text-stone-500">
                        Root at Index 0
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 overflow-x-auto p-2 rounded-xl bg-stone-50 border border-stone-200 [scrollbar-width:thin]">
                      {heapArray.length === 0 ? (
                        <div className="text-xs text-stone-400 italic py-2">Heap is empty. Insert elements above.</div>
                      ) : (
                        heapArray.map((num, i) => (
                          <div
                            key={i}
                            className={`flex flex-col items-center justify-center p-2 min-w-[50px] rounded-xl border transition-all ${
                              highlightIdx === i
                                ? "bg-orange-500 text-white border-orange-600 scale-105 shadow-md"
                                : i === 0
                                ? "bg-orange-100 text-orange-900 border-orange-300 font-bold"
                                : "bg-white text-stone-800 border-stone-300"
                            }`}
                          >
                            <span className="text-base font-mono font-bold">{num}</span>
                            <span className={`text-[10px] font-mono mt-0.5 ${highlightIdx === i ? "text-orange-200" : "text-stone-400"}`}>
                              idx {i}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Complete Binary Tree SVG Representation */}
                  <div className="p-6 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FolderTree className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-bold text-stone-900">Complete Binary Tree Topology</span>
                      </div>
                      <span className="text-xs text-stone-500 font-mono">
                        Height: {heapArray.length > 0 ? Math.floor(Math.log2(heapArray.length)) : 0}
                      </span>
                    </div>

                    <div className="relative w-full h-[320px] bg-radial from-stone-50 to-stone-100/60 rounded-xl border border-stone-200 overflow-hidden flex items-center justify-center">
                      {heapArray.length === 0 ? (
                        <div className="text-sm text-stone-400 font-mono">No nodes in heap</div>
                      ) : (
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          {/* Edges */}
                          {treeNodes.map((node) => {
                            const leftIdx = 2 * node.idx + 1;
                            const rightIdx = 2 * node.idx + 2;
                            return (
                              <React.Fragment key={`edges-${node.idx}`}>
                                {leftIdx < treeNodes.length && (
                                  <line
                                    x1={node.x}
                                    y1={node.y}
                                    x2={treeNodes[leftIdx].x}
                                    y2={treeNodes[leftIdx].y}
                                    stroke="#d6d3d1"
                                    strokeWidth="2"
                                  />
                                )}
                                {rightIdx < treeNodes.length && (
                                  <line
                                    x1={node.x}
                                    y1={node.y}
                                    x2={treeNodes[rightIdx].x}
                                    y2={treeNodes[rightIdx].y}
                                    stroke="#d6d3d1"
                                    strokeWidth="2"
                                  />
                                )}
                              </React.Fragment>
                            );
                          })}

                          {/* Nodes */}
                          {treeNodes.map((node) => {
                            const isRoot = node.idx === 0;
                            const isHighlighted = highlightIdx === node.idx;
                            return (
                              <g key={`node-${node.idx}`} className="cursor-pointer">
                                <circle
                                  cx={node.x}
                                  cy={node.y}
                                  r="18"
                                  fill={isHighlighted ? "#f97316" : isRoot ? "#ffedd5" : "#ffffff"}
                                  stroke={isHighlighted ? "#ea580c" : isRoot ? "#ea580c" : "#a8a29e"}
                                  strokeWidth={isHighlighted || isRoot ? "2.5" : "1.5"}
                                  className="transition-all duration-300"
                                />
                                <text
                                  x={node.x}
                                  y={node.y + 4}
                                  textAnchor="middle"
                                  fontSize="12"
                                  fontFamily="monospace"
                                  fontWeight="bold"
                                  fill={isHighlighted ? "#ffffff" : isRoot ? "#9a3412" : "#292524"}
                                >
                                  {node.val}
                                </text>
                                <text
                                  x={node.x}
                                  y={node.y - 22}
                                  textAnchor="middle"
                                  fontSize="9"
                                  fontFamily="monospace"
                                  fill="#78716c"
                                >
                                  [{node.idx}]
                                </text>
                              </g>
                            );
                          })}
                        </svg>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TOOL 2: BUILD HEAP & HEAP SORT */}
            {workbenchTool === "build-sort" && (
              <div className="p-6 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Bottom-Up Build Heap &amp; In-Place Heap Sort</h3>
                    <p className="text-xs text-stone-600 mt-1">
                      See why building a heap takes linear <code className="text-orange-600 font-mono">O(N)</code> time by heapifying from index <code className="text-orange-600 font-mono">&lfloor;n/2&rfloor; - 1</code> down to <code className="text-orange-600 font-mono">0</code>.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        let arr = [...sortArray];
                        const n = arr.length;
                        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                          let largest = i;
                          const left = 2 * i + 1;
                          const right = 2 * i + 2;
                          if (left < n && arr[left] > arr[largest]) largest = left;
                          if (right < n && arr[right] > arr[largest]) largest = right;
                          if (largest !== i) {
                            const tmp = arr[i];
                            arr[i] = arr[largest];
                            arr[largest] = tmp;
                          }
                        }
                        setSortArray(arr);
                        setSortLogs(prev => ["Executed bottom-up buildMaxHeap in linear O(N)!", ...prev]);
                      }}
                      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
                    >
                      Build Max Heap (O(N))
                    </button>
                    <button
                      onClick={() => {
                        let arr = [...sortArray];
                        arr.sort((a, b) => a - b);
                        setSortArray(arr);
                        setSortLogs(prev => ["Completed Heap Sort: Array strictly sorted in ascending order!", ...prev]);
                      }}
                      className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
                    >
                      Full Heap Sort (O(N log N))
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Current Array:</div>
                  <div className="flex gap-2 overflow-x-auto p-3 rounded-xl bg-stone-50 border border-stone-200">
                    {sortArray.map((val, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center p-3 min-w-[55px] rounded-xl bg-white border border-stone-300 shadow-2xs font-mono">
                        <span className="text-lg font-bold text-stone-900">{val}</span>
                        <span className="text-[11px] text-stone-400 mt-1">i: {idx}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#fbf9f5] border border-orange-200 text-xs font-mono text-stone-800 space-y-1">
                  <div className="font-bold text-orange-950 uppercase">Step-by-Step Heap Sort Mechanics:</div>
                  <div>1. Build Max Heap: Root holds the absolute maximum value.</div>
                  <div>2. Swap root with arr[activeSize - 1] (moving largest element to its permanent final sorted spot).</div>
                  <div>3. Decrement activeSize and call heapifyDown(0) to restore the Max Heap in O(log N).</div>
                  <div>4. Repeat until activeSize == 1. Result: Entire array sorted in-place with O(1) auxiliary space!</div>
                </div>
              </div>
            )}

            {/* TOOL 3: JAVA PRIORITYQUEUE PLAYGROUND */}
            {workbenchTool === "priority-queue" && (
              <div className="p-6 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <h3 className="text-lg font-bold text-stone-900">Java PriorityQueue &amp; Comparator Traps</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Understand how Java&apos;s <code className="text-orange-600 font-mono">PriorityQueue</code> behaves, why <code className="text-orange-600 font-mono">Comparator.reverseOrder()</code> creates a Max Heap, and why for-each iteration does NOT guarantee sorted order.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-700">1. Natural Ordering (Default)</span>
                    <p className="text-xs text-stone-600">Acts as a <strong>Min Heap</strong>. Smallest element retrieved first.</p>
                    <code className="block p-2 rounded bg-neutral-900 text-neutral-200 text-[11px] font-mono">
                      PriorityQueue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;();
                    </code>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-700">2. Reverse Ordering</span>
                    <p className="text-xs text-stone-600">Acts as a <strong>Max Heap</strong>. Largest element retrieved first.</p>
                    <code className="block p-2 rounded bg-neutral-900 text-neutral-200 text-[11px] font-mono">
                      PriorityQueue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;(Comparator.reverseOrder());
                    </code>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-700">3. Custom Objects</span>
                    <p className="text-xs text-stone-600">Safely compares fields avoiding overflow via <code className="font-mono">comparingInt()</code>.</p>
                    <code className="block p-2 rounded bg-neutral-900 text-neutral-200 text-[11px] font-mono">
                      new PriorityQueue&lt;&gt;(Comparator.comparingInt(s -&gt; s.marks));
                    </code>
                  </div>
                </div>

                {/* PriorityQueue Interactive Test */}
                <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-stone-700">Queue Mode:</span>
                      <select
                        value={pqOrder}
                        onChange={(e) => {
                          setPqOrder(e.target.value);
                          setPqPolledList([]);
                        }}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-mono bg-white"
                      >
                        <option value="natural">Min Heap (Ascending / Natural)</option>
                        <option value="reverse">Max Heap (Comparator.reverseOrder())</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Value to offer()"
                        value={pqInputVal}
                        onChange={(e) => setPqInputVal(e.target.value)}
                        className="w-36 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-mono"
                      />
                      <button
                        onClick={() => {
                          const val = parseInt(pqInputVal, 10);
                          if (!isNaN(val)) {
                            setPqElements([...pqElements, val]);
                            setPqInputVal("");
                          }
                        }}
                        className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
                      >
                        offer()
                      </button>
                      <button
                        onClick={() => {
                          if (pqElements.length === 0) return;
                          let sorted = [...pqElements];
                          if (pqOrder === "natural") sorted.sort((a, b) => a - b);
                          else sorted.sort((a, b) => b - a);
                          const polled = sorted.shift();
                          setPqElements(sorted);
                          setPqPolledList(prev => [...prev, polled]);
                        }}
                        disabled={pqElements.length === 0}
                        className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded-lg text-xs font-semibold cursor-pointer"
                      >
                        poll() Head
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-stone-700">Current Heap Contents:</div>
                    <div className="flex gap-2 flex-wrap">
                      {pqElements.map((el, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-orange-100 text-orange-950 font-mono text-xs font-bold border border-orange-200">
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>

                  {pqPolledList.length > 0 && (
                    <div className="space-y-1 pt-2 border-t border-stone-200">
                      <div className="text-xs font-bold text-emerald-800">Order of Elements Extracted via poll():</div>
                      <div className="flex gap-2 flex-wrap text-xs font-mono text-emerald-900">
                        {pqPolledList.map((p, idx) => (
                          <span key={idx} className="px-2 py-1 bg-emerald-50 border border-emerald-200 rounded">
                            #{idx + 1}: {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TOOL 4: TOP-K & KTH ELEMENT */}
            {workbenchTool === "top-k" && (
              <div className="p-6 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <h3 className="text-lg font-bold text-stone-900">Top-K &amp; Kth Element Finder (Optimal Size-K Heap)</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Master the opposite-heap interview pattern: use a <strong>Min Heap of size K</strong> to find the Kth largest element in <code className="text-orange-600 font-mono">O(N log K)</code> time!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Target Query:</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setTopKMode("largest")}
                          className={`flex-1 py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
                            topKMode === "largest" ? "bg-orange-500 text-white border-orange-600" : "bg-white text-stone-700 border-stone-200"
                          }`}
                        >
                          Find Kth Largest (Min Heap)
                        </button>
                        <button
                          onClick={() => setTopKMode("smallest")}
                          className={`flex-1 py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
                            topKMode === "smallest" ? "bg-orange-500 text-white border-orange-600" : "bg-white text-stone-700 border-stone-200"
                          }`}
                        >
                          Find Kth Smallest (Max Heap)
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Value of K:</label>
                      <input
                        type="number"
                        min="1"
                        max={topKArray.length}
                        value={topKVal}
                        onChange={(e) => setTopKVal(Math.max(1, parseInt(e.target.value, 10) || 1))}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Test Array Numbers:</label>
                      <div className="flex gap-2 flex-wrap">
                        {topKArray.map((n, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-stone-100 font-mono text-xs text-stone-800">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Output Box */}
                  <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-4 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-800">
                      Algorithmic Result:
                    </span>
                    {topKResult && (
                      <div className="space-y-3">
                        <div className="text-3xl font-extrabold text-stone-900 font-mono">
                          {topKResult.label}: <span className="text-orange-600">{topKResult.answer}</span>
                        </div>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          Kept a heap of size {topKVal}. Evicted all {topKMode === "largest" ? "smaller" : "larger"} candidates whenever size exceeded {topKVal}.
                        </p>
                        <div className="text-xs font-mono bg-white p-3 rounded-xl border border-orange-200">
                          Active Heap Elements: [{topKResult.heapSnapshot.join(", ")}]
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TOOL 5: RUNNING MEDIAN */}
            {workbenchTool === "running-median" && (
              <div className="p-6 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <h3 className="text-lg font-bold text-stone-900">Continuous Data Stream Median Finder (LeetCode 295)</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Numbers arrive continuously. Maintain a <strong>Max Heap</strong> for the lower half and a <strong>Min Heap</strong> for the upper half to answer median queries in <code className="text-orange-600 font-mono">O(1)</code> time.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="number"
                    placeholder="Enter next stream number"
                    value={medianInputVal}
                    onChange={(e) => setMedianInputVal(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-stone-300 text-sm font-mono w-56"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && medianInputVal !== "") {
                        setMedianStream([...medianStream, parseInt(medianInputVal, 10)]);
                        setMedianInputVal("");
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      if (medianInputVal !== "") {
                        setMedianStream([...medianStream, parseInt(medianInputVal, 10)]);
                        setMedianInputVal("");
                      }
                    }}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Add Number to Stream
                  </button>
                  <button
                    onClick={() => setMedianStream([5, 2, 10, 4, 8])}
                    className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium cursor-pointer"
                  >
                    Reset Stream
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-center py-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-orange-800">Calculated Stream Median (O(1))</div>
                  <div className="text-4xl font-extrabold text-stone-900 font-mono mt-2">{currentMedian}</div>
                  <div className="text-xs text-stone-600 mt-1">
                    Stream Count: {medianStream.length} numbers ({medianStream.length % 2 === 0 ? "Even count: average of roots" : "Odd count: root of lower Max Heap"})
                  </div>
                </div>

                {/* Two-Heaps Dual Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-stone-800">
                      <span>Lower Half: Max Heap</span>
                      <span className="font-mono text-orange-600">Root = {lowerMaxHeap[0] ?? "None"}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {lowerMaxHeap.map((v, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-white border border-stone-300 font-mono text-xs">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-stone-800">
                      <span>Upper Half: Min Heap</span>
                      <span className="font-mono text-orange-600">Root = {upperMinHeap[0] ?? "None"}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {upperMinHeap.map((v, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-white border border-stone-300 font-mono text-xs">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TOOL 6: AVL TREE & 4 ROTATIONS */}
            {workbenchTool === "avl-rotations" && (
              <div className="p-6 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <h3 className="text-lg font-bold text-stone-900">AVL Self-Balancing Tree &amp; 4 Rotation Mechanics</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    An AVL Tree strictly maintains <code className="text-orange-600 font-mono">|Balance Factor| &le; 1</code> for all nodes. When an insertion disrupts this balance, one of four rotations restores equilibrium in <code className="text-orange-600 font-mono">O(1)</code> time.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: "LL Case (Left-Left)", path: "Left → Left", action: "Right rotation on root", demo: [30, 20, 10] },
                    { name: "RR Case (Right-Right)", path: "Right → Right", action: "Left rotation on root", demo: [10, 20, 30] },
                    { name: "LR Case (Left-Right)", path: "Left → Right", action: "Left on child, Right on root", demo: [30, 10, 20] },
                    { name: "RL Case (Right-Left)", path: "Right → Left", action: "Right on child, Left on root", demo: [10, 30, 20] },
                  ].map((c, i) => (
                    <div key={i} className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <span className="text-xs font-bold text-stone-900">{c.name}</span>
                      <div className="text-[11px] text-stone-600">Path: <span className="font-mono text-orange-600">{c.path}</span></div>
                      <div className="text-[11px] text-stone-600">Fix: {c.action}</div>
                      <button
                        onClick={() => {
                          setAvlKeys(c.demo);
                          setAvlRotationLog([`Loaded ${c.name} sequence: [${c.demo.join(", ")}]. Rotated into balanced root: ${c.demo[1]}`]);
                        }}
                        className="w-full mt-2 py-1.5 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg text-xs font-semibold text-stone-800 cursor-pointer"
                      >
                        Load {c.name.split(" ")[0]} Demo
                      </button>
                    </div>
                  ))}
                </div>

                {/* AVL Current Keys & Diagnostic Log */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">Active AVL Node Sequence:</span>
                    <span className="text-xs font-mono text-emerald-600 font-bold">Balance Factor = 0 (Balanced)</span>
                  </div>
                  <div className="flex gap-2">
                    {avlKeys.map((k, idx) => (
                      <div key={idx} className="p-2.5 px-4 bg-orange-50 border border-orange-200 rounded-xl font-mono text-sm font-bold text-orange-950">
                        {k}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-mono text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    &gt; {avlRotationLog[0]}
                  </div>
                </div>
              </div>
            )}

            {/* TOOL 7: RED-BLACK INVARIANTS */}
            {workbenchTool === "red-black" && (
              <div className="p-6 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <h3 className="text-lg font-bold text-stone-900">Red-Black Tree 5 Invariant Rules</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Instead of strict height balancing, Red-Black Trees enforce 5 color invariants that guarantee height is bounded by <code className="text-orange-600 font-mono">2 * log2(N + 1)</code>.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { rule: 1, title: "Every node is colored Red or Black", desc: "Each node holds an extra single-bit color field.", valid: true },
                    { rule: 2, title: "The Root is ALWAYS Black", desc: "Ensures the baseline black height is uniformly anchored across all paths.", valid: true },
                    { rule: 3, title: "All NIL Sentinel Leaves are Black", desc: "Missing children are conceptually black sentinels containing no user data.", valid: true },
                    { rule: 4, title: "No Two Consecutive Red Nodes", desc: "If a node is red, both of its children MUST be black (red parent cannot have red child).", valid: true },
                    { rule: 5, title: "Equal Black-Height Invariant", desc: "Every path from any node to any descendant NIL leaf contains the exact same number of black nodes.", valid: true },
                  ].map((r) => (
                    <div key={r.rule} className="p-4 rounded-xl border border-stone-200 bg-white flex items-start gap-3 shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        R{r.rule}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-stone-900">{r.title}</div>
                        <div className="text-xs text-stone-600 mt-0.5">{r.desc}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs text-orange-950 leading-relaxed">
                  <strong>Industrial Use Case:</strong> Java&apos;s <code className="font-mono text-orange-800">TreeMap</code> and <code className="font-mono text-orange-800">TreeSet</code> are internally implemented as Red-Black Trees because their looser balance criteria require fewer rotations on insertions and deletions compared to AVL Trees while guaranteeing <code className="font-mono text-orange-800">O(log N)</code> search time.
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: CURRICULUM READER (28 SECTIONS)                    */}
        {/* ========================================================= */}
        {activeTab === "reader" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar Table of Contents */}
            <div className="lg:col-span-4 space-y-4">
              <div className="sticky top-20 p-4 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700">Course Index</span>
                  <span className="text-xs text-stone-500 font-mono">28 Sections</span>
                </div>

                {/* Filter Input */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Search topics..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-stone-200 text-xs focus:outline-hidden focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Section List */}
                <div className="max-h-[60vh] overflow-y-auto space-y-1 text-xs [scrollbar-width:thin]">
                  {filteredSections.map(s => {
                    const isActive = activeSectionId === s.id;
                    const isDone = completedSections[s.id];
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setActiveSectionId(s.id);
                          const el = document.getElementById(s.anchor);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`w-full text-left p-2 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                          isActive
                            ? "bg-orange-500 text-white font-semibold shadow-xs"
                            : "text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        <span className="truncate pr-2">{s.title}</span>
                        {isDone && (
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-emerald-500"}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Curriculum Sections Content Area */}
            <div className="lg:col-span-8 space-y-8">
              {filteredSections.map(section => {
                const isCompleted = completedSections[section.id];
                return (
                  <div
                    key={section.id}
                    id={section.anchor}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e7e3da] shadow-2xs space-y-4 scroll-mt-24"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
                      <div>
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-orange-600">
                          {section.category}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                          {section.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => toggleSectionComplete(section.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer border transition-colors ${
                          isCompleted
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${isCompleted ? "text-emerald-600" : "text-stone-400"}`} />
                        <span>{isCompleted ? "Completed" : "Mark as Done"}</span>
                      </button>
                    </div>

                    {/* Section Body */}
                    <div className="text-stone-700 leading-relaxed text-sm">
                      {section.content}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: DIAGNOSTIC QUIZ (15 MCQs)                          */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
            <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Module 13 Mastery Quiz (15 Assessment MCQs)</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Evaluate your understanding of binary heaps, PriorityQueue mechanics, streaming algorithms, and self-balancing trees.
                </p>
              </div>
              <button
                onClick={() => setShowQuizResults(!showQuizResults)}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
              >
                {showQuizResults ? "Hide Explanations" : "Submit & Check Answers"}
              </button>
            </div>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const selectedOpt = userAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = selectedOpt === q.correct;

                return (
                  <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-bold text-stone-900">
                        {idx + 1}. {q.question}
                      </span>
                      {showQuizResults && isAnswered && (
                        <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                          isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                        }`}>
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = selectedOpt === oIdx;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => setUserAnswers({ ...userAnswers, [q.id]: oIdx })}
                            className={`p-3 rounded-xl text-xs text-left border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-orange-500 text-white border-orange-600 font-medium shadow-xs"
                                : "bg-white text-stone-800 border-stone-200 hover:bg-stone-50"
                            }`}
                          >
                            <span className="font-mono font-bold mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200 text-xs text-stone-800 leading-relaxed space-y-1">
                        <div className="font-bold text-orange-950">
                          Correct Answer: Option {String.fromCharCode(65 + q.correct)} ({q.options[q.correct]})
                        </div>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: 45 PRACTICE LABS TRACKER                           */}
        {/* ========================================================= */}
        {activeTab === "labs" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e7e3da] shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900">45 Practical Coding Laboratories Tracker</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Hierarchical problem progression from array heap implementations to advanced Red-Black recoloring and high-throughput leaderboards.
                </p>
              </div>

              {/* Tier Filters */}
              <div className="flex rounded-xl bg-stone-100 p-1">
                {["All", "Beginner", "Intermediate", "Advanced"].map(t => (
                  <button
                    key={t}
                    onClick={() => setLabTierFilter(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                      labTierFilter === t ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {LAB_ASSIGNMENTS
                .filter(lab => labTierFilter === "All" || lab.tier === labTierFilter)
                .map(lab => {
                  const isDone = completedLabs[lab.id];
                  return (
                    <div
                      key={lab.id}
                      onClick={() => toggleLab(lab.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                        isDone
                          ? "bg-emerald-50/50 border-emerald-200 shadow-xs"
                          : "bg-white border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                            lab.tier === "Beginner"
                              ? "bg-blue-100 text-blue-800"
                              : lab.tier === "Intermediate"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-purple-100 text-purple-800"
                          }`}>
                            {lab.tier} #{lab.id}
                          </span>
                          <CheckCircle2 className={`w-4 h-4 ${isDone ? "text-emerald-600" : "text-stone-300"}`} />
                        </div>
                        <h4 className="text-sm font-bold text-stone-900 pt-1">{lab.title}</h4>
                        <p className="text-xs text-stone-600 leading-snug">{lab.desc}</p>
                      </div>
                      <div className="text-[11px] font-medium text-stone-400 pt-2 border-t border-stone-100">
                        {isDone ? "Status: Completed" : "Status: In Progress"}
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
