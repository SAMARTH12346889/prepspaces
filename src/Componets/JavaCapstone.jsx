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
  Compass,
  FolderTree,
  Activity,
  Boxes,
  Cpu
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_CAPSTONE_SECTIONS } from "./JavaCapstoneSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why should an algorithm visualizer application strictly separate the Algorithm Engine from the Presentation/Visualization Layer?",
    options: [
      "To allow the identical algorithm implementation to run in CLI, automated unit tests, and JMH microbenchmarks without UI dependencies",
      "Because Java bytecode verifier prevents UI classes from calling sorting algorithms directly",
      "Because graphic frameworks like JavaFX automatically sort arrays on the GPU",
      "To reduce the size of the final JAR file by half"
    ],
    correct: 0,
    explanation: "Decoupling algorithm logic from rendering enables reuse across different presentation interfaces (JavaFX, Web/React, CLI), allows deterministic JUnit testing, and prevents UI animations from distorting algorithmic complexity measurements."
  },
  {
    id: 2,
    question: "When implementing an interactive algorithm animation player with Play, Pause, and Step controls, why is generating a stream of compact AlgorithmStep events superior to snapshotting the entire array on every comparison?",
    options: [
      "Storing full array clones on every single comparison causes catastrophic heap allocation churn and high GC pauses for large inputs",
      "Java records are automatically vectorized by the HotSpot JIT compiler",
      "Array snapshots cannot be indexed by integer indices",
      "The Java Garbage Collector deletes arrays after 100 snapshots"
    ],
    correct: 0,
    explanation: "A sorting algorithm may perform millions of comparisons. Storing full array clones on every comparison consumes excessive heap memory. Compact step records (COMPARE, i, j) or state deltas consume minimal memory and enable fast replay."
  },
  {
    id: 3,
    question: "In Project 2 (Java Coding Interview Platform), what is the most critical security rule when executing untrusted user-submitted Java code?",
    options: [
      "Never execute untrusted user-submitted code inside the primary backend application process; execute it in isolated, disposable sandboxes with CPU, memory, and network limits",
      "Simply check that the submitted code does not contain the word 'System.exit()'",
      "Run the user submission with root/administrator privileges to prevent permission denied errors",
      "Compile the code with Java 8 because older versions cannot access host networks"
    ],
    correct: 0,
    explanation: "Untrusted user code can execute infinite loops, exhaust memory (fork bombs), read host files, or launch network attacks. Submissions must run in isolated, resource-constrained, non-root sandbox environments with strict execution timeouts."
  },
  {
    id: 4,
    question: "What is the key functional difference between the 'Run' action and the 'Submit' action on a coding assessment platform?",
    options: [
      "'Run' executes the code against sample or custom test cases for quick feedback; 'Submit' evaluates against the full hidden judge test suite and records official verdict metrics",
      "'Run' compiles Java bytecode while 'Submit' converts the code into C++",
      "'Run' tests performance while 'Submit' only checks syntax formatting",
      "There is no difference; both run the exact same test cases"
    ],
    correct: 0,
    explanation: "'Run' allows candidates to debug against provided sample inputs or custom edge cases. 'Submit' triggers the official grading pipeline against the complete test suite (including hidden edge cases, boundary bounds, and large stress tests)."
  },
  {
    id: 5,
    question: "In custom data structure implementation (Project 3), how does a DynamicArray achieve amortized O(1) append operations when internal storage fills up?",
    options: [
      "By allocating a new array of double capacity (2x) and copying existing elements, ensuring the doubling cost is spread over N prior O(1) appends",
      "By adding exactly 1 new slot every time an element is appended",
      "By storing elements in CPU registers rather than main RAM",
      "By converting itself into a LinkedList whenever full"
    ],
    correct: 0,
    explanation: "Geometric capacity doubling (2x) guarantees that resizing occurs only after an exponentially increasing number of insertions. The total cost to insert N items is bounded by 2N, yielding an amortized constant time O(1) per append."
  },
  {
    id: 6,
    question: "When deleting a node with two children from a Binary Search Tree (BST), how must the replacement node be selected to preserve the BST invariant?",
    options: [
      "Replace the node's value with its inorder successor (minimum of the right subtree) or inorder predecessor (maximum of left subtree), then recursively delete that replacement node",
      "Replace the node with the root of the tree",
      "Delete both children and re-insert their values into the root",
      "Replace the node with null and shift all right child pointers leftward"
    ],
    correct: 0,
    explanation: "The inorder successor is guaranteed to be greater than all nodes in the left subtree and smaller than all remaining nodes in the right subtree. Substituting it into the target node preserves the ordering invariant across the entire tree."
  },
  {
    id: 7,
    question: "In an AVL Tree, what triggers a Left-Right (LR) double rotation during insertion?",
    options: [
      "A node's balance factor becomes +2 and the new element was inserted into the right subtree of its left child",
      "Both left and right child pointers reference identical nodes",
      "The root node has an odd number of total descendants",
      "A deletion occurs on a leaf node with two parent references"
    ],
    correct: 0,
    explanation: "When a node has balance factor +2 (left-heavy) and its left child is right-heavy (balance factor -1), a single rotation cannot restore balance. An initial Left rotation on the left child followed by a Right rotation on the node restores balance."
  },
  {
    id: 8,
    question: "Why should a custom data structure playground distinguish between 'logical memory visualization' and 'actual JVM physical memory'?",
    options: [
      "Because JVM garbage collectors move heap objects during compaction, and HotSpot optimizations may scalar-replace or align memory without fixed RAM addresses",
      "Because Java code runs directly on bare silicon without virtual memory",
      "Because 64-bit operating systems do not use pointers",
      "Because memory addresses in Java change every 10 milliseconds"
    ],
    correct: 0,
    explanation: "Logical diagrams represent reference relationships (nodes pointing to next nodes). Physical memory in HotSpot is subject to object header alignment (16-byte boundaries), compressed OOPs, GC relocation, and escape analysis."
  },
  {
    id: 9,
    question: "Why is measuring code execution speed using System.nanoTime() alone considered unreliable for scientifically valid Java performance benchmarks?",
    options: [
      "System.nanoTime() fails to account for JVM warm-up phases, JIT Tiered compilation tier promotions, GC pause spikes, and dead-code elimination",
      "System.nanoTime() has a resolution of only 1 second on modern operating systems",
      "The Java runtime automatically disables System.nanoTime() inside loops",
      "System.nanoTime() can only measure single-threaded code"
    ],
    correct: 0,
    explanation: "Microbenchmarks require JMH (Java Microbenchmark Harness) to properly warm up HotSpot JIT compilation tiers, prevent loop dead-code elimination via Blackholes, randomize iterations, and isolate GC interference."
  },
  {
    id: 10,
    question: "In software engineering requirement analysis, which of the following represents an unambiguous, testable 'Acceptance Criterion'?",
    options: [
      "When the user selects Merge Sort and submits an array of 1,000 random integers, the visualizer sorts all elements in non-decreasing order in under 2 seconds, displaying comparison counts and allowing pause/step navigation",
      "The algorithm visualizer should look nice and sort arrays quickly",
      "The backend must be built using modern software practices",
      "Users should enjoy solving coding problems on the platform"
    ],
    correct: 0,
    explanation: "Acceptance criteria must be concrete, testable, and measurable with verifiable outcomes, inputs, time limits, and UI capabilities."
  },
  {
    id: 11,
    question: "When designing the database schema for a Coding Interview Platform (Project 2), what is the appropriate entity relationship between User and Submission?",
    options: [
      "One-to-Many: One user can have multiple submissions, and each submission belongs to exactly one user",
      "One-to-One: A user is only permitted a single submission across the platform",
      "Many-to-Many: Submissions can belong to multiple users simultaneously",
      "No relationship is required in relational database design"
    ],
    correct: 0,
    explanation: "A registered candidate submits multiple solutions over time across different problems. Thus, User (1) connects to Submission (Many) via user_id foreign key."
  },
  {
    id: 12,
    question: "In an online judge system, what does the verdict 'Time Limit Exceeded' (TLE) indicate?",
    options: [
      "The user's program failed to complete execution within the allocated CPU/wall-clock time budget (typically 1-2 seconds)",
      "The candidate submitted their solution after the interview assessment deadline expired",
      "The database server was too slow to save the code",
      "The user took longer than 15 minutes to type their solution"
    ],
    correct: 0,
    explanation: "TLE occurs when a program exceeds the per-test-case execution time threshold (e.g. 1000ms), usually indicating an asymptotic complexity that is too high or an infinite loop."
  },
  {
    id: 13,
    question: "What is the core benefit of applying the Test-Driven Development (TDD) cycle (Red -> Green -> Refactor) when implementing complex DSA data structures?",
    options: [
      "Writing tests first forces precise definition of edge behavior, invariants, and API contracts before writing code, preventing regression bugs during optimization",
      "TDD automatically generates documentation without human intervention",
      "TDD guarantees that an algorithm runs in O(1) time",
      "The Java compiler requires test files to precede source code files"
    ],
    correct: 0,
    explanation: "TDD ensures that interface contracts, boundary handling, and edge cases are concretely established in automated tests prior to implementation, allowing fearless refactoring and optimization."
  },
  {
    id: 14,
    question: "Which of the following edge cases MUST be tested when verifying a custom Binary Search implementation?",
    options: [
      "Empty array [], single-element array (found and absent), first element, last element, duplicate elements, and absent target",
      "Testing whether the user has a mechanical keyboard",
      "Running the code on a mobile browser emulator",
      "Passing non-ASCII characters into an integer array"
    ],
    correct: 0,
    explanation: "Binary search algorithms frequently fail on boundary bounds: single element arrays, looking for elements smaller than the first item or greater than the last item, empty inputs, and duplicate occurrences."
  },
  {
    id: 15,
    question: "In the recommended Capstone Assessment Rubric, what is the highest-weighted evaluation category?",
    options: [
      "Data Structures and Algorithms (25%)",
      "Interface visual styling (50%)",
      "Number of Git branches (40%)",
      "Number of lines of code written (70%)"
    ],
    correct: 0,
    explanation: "As an engineering capstone for a Java + DSA master course, Data Structures & Algorithms forms the intellectual core (25%), followed by Java OOP (15%), Architecture (15%), and Testing (15%)."
  }
];

// --- 35 CAPSTONE PROJECT MILESTONES TRACKER ACROSS 4 TIERS ---
const CAPSTONE_MILESTONES = [
  // Tier 1: Planning & Architectural Foundations (1-9)
  { id: 1, title: "Capstone Project Selection & Scope Proposal", tier: 1, category: "Planning", focus: "Architecture", deliverable: "Proposal doc with core objectives" },
  { id: 2, title: "Functional & Non-Functional Requirement Spec", tier: 1, category: "Planning", focus: "Requirements", deliverable: "User stories & constraint boundaries" },
  { id: 3, title: "Acceptance Criteria Definition (Given-When-Then)", tier: 1, category: "Planning", focus: "Testing", deliverable: "Testable acceptance scenarios" },
  { id: 4, title: "System Layering & Responsibility Separation Diagram", tier: 1, category: "Architecture", focus: "Design", deliverable: "Layered architecture blueprint" },
  { id: 5, title: "Package Structure & Java Interface Contracts", tier: 1, category: "Architecture", focus: "OOP", deliverable: "Core interface definitions" },
  { id: 6, title: "Data Model & Schema Entity-Relationship Design", tier: 1, category: "Architecture", focus: "Data Modeling", deliverable: "Entity relational diagrams" },
  { id: 7, title: "AlgorithmStep Compact Record Event Architecture", tier: 1, category: "Architecture", focus: "Memory Efficiency", deliverable: "Immutable step event records" },
  { id: 8, title: "Git Repository Initialization & Clean .gitignore", tier: 1, category: "Tooling", focus: "Version Control", deliverable: "Sanitized repo on GitHub" },
  { id: 9, title: "Maven / Gradle Build Lifecycle & Dependency Setup", tier: 1, category: "Tooling", focus: "Build System", deliverable: "pom.xml / build.gradle config" },

  // Tier 2: Core Data Structures & Algorithm Engines (10-18)
  { id: 10, title: "Sorting Engine: Bubble, Selection & Insertion Sort", tier: 2, category: "Algorithms", focus: "Elementary Sorting", deliverable: "O(N^2) sorting modules" },
  { id: 11, title: "Divide & Conquer: Merge Sort & In-Place QuickSort", tier: 2, category: "Algorithms", focus: "O(N log N) Sorting", deliverable: "Recursive partition engines" },
  { id: 12, title: "Heap Sort & Binary Max-Heap Sift-Down Mechanics", tier: 2, category: "Algorithms", focus: "Heap Sort", deliverable: "O(N log N) in-place heap sort" },
  { id: 13, title: "Searching Engine: Linear & Interval-Invariant Binary Search", tier: 2, category: "Algorithms", focus: "Searching", deliverable: "Logarithmic search engine" },
  { id: 14, title: "Binary Search Tree: Insert, Search & In-Order Successor Delete", tier: 2, category: "Data Structures", focus: "Hierarchical BST", deliverable: "3-case BST deletion engine" },
  { id: 15, title: "Graph Engine: Adjacency Lists, BFS Level & DFS Stack", tier: 2, category: "Graphs", focus: "Graph Traversal", deliverable: "Radial & depth explorers" },
  { id: 16, title: "Dijkstra Shortest Path with Min-Heap PriorityQueue", tier: 2, category: "Graphs", focus: "Shortest Paths", deliverable: "Edge relaxation engine" },
  { id: 17, title: "Prim's Minimum Spanning Tree (MST) Engine", tier: 2, category: "Graphs", focus: "Network Optimization", deliverable: "Cut-property greedy engine" },
  { id: 18, title: "Dynamic Programming: Fibonacci & 0/1 Knapsack Grid", tier: 2, category: "Dynamic Programming", focus: "State Transitions", deliverable: "2D DP tabulation engine" },

  // Tier 3: Custom Structures, Sandboxing & Application UX (19-27)
  { id: 19, title: "Custom DynamicArray with 2x Geometric Doubling", tier: 3, category: "Custom Structures", focus: "Memory Allocation", deliverable: "Generic resizable array" },
  { id: 20, title: "Custom Singly & Doubly LinkedList with Node Splicing", tier: 3, category: "Custom Structures", focus: "Pointers", deliverable: "O(1) insertion linked lists" },
  { id: 21, title: "Custom HashMap Separate Chaining Collision Resolver", tier: 3, category: "Custom Structures", focus: "Hashing", deliverable: "Load factor & bucket resizer" },
  { id: 22, title: "Self-Balancing AVL Tree with 4 Rotation Types", tier: 3, category: "Custom Structures", focus: "Rotations", deliverable: "LL, RR, LR, RL AVL tree" },
  { id: 23, title: "Interactive Animation Controller (Play, Pause, Step, Speed)", tier: 3, category: "User Experience", focus: "UI Controls", deliverable: "State transition controller" },
  { id: 24, title: "Isolated Judge Worker Sandbox (Process & Timeout Limits)", tier: 3, category: "Security", focus: "Execution Isolation", deliverable: "Non-root safe runner" },
  { id: 25, title: "Automated Judge Verdict Pipeline (AC, WA, TLE, MLE, CE)", tier: 3, category: "Backend", focus: "Evaluation", deliverable: "Test case diff checker" },
  { id: 26, title: "Submission History & Persistent Progress Dashboard", tier: 3, category: "Backend", focus: "Persistence", deliverable: "User submissions tracking" },
  { id: 27, title: "Logical Memory Graph Visualization Component", tier: 3, category: "User Experience", focus: "Visualizer", deliverable: "Node & reference drawer" },

  // Tier 4: Testing, Benchmarking, Deployment & Defense (28-35)
  { id: 28, title: "Comprehensive JUnit 5 Unit Test Suite (100% Core Coverage)", tier: 4, category: "Testing", focus: "Automated Tests", deliverable: "Regression test suite" },
  { id: 29, title: "Edge Case Boundary Suite (Empty, Single, Dups, Overflow)", tier: 4, category: "Testing", focus: "Edge Cases", deliverable: "Adversarial test matrix" },
  { id: 30, title: "JMH Microbenchmarking Suite (Warm-up & JIT Profiling)", tier: 4, category: "Performance", focus: "Benchmarking", deliverable: "Empirical latency reports" },
  { id: 31, title: "Production README Documentation with Architecture Flowcharts", tier: 4, category: "Documentation", focus: "Technical Docs", deliverable: "Exhaustive project README" },
  { id: 32, title: "Platform Native Packaging with jpackage / Dockerfile", tier: 4, category: "Deployment", focus: "Release Engineering", deliverable: "Installable bundles / images" },
  { id: 33, title: "10-Slide Engineering Architecture Presentation Deck", tier: 4, category: "Presentation", focus: "Technical Defense", deliverable: "Slide deck & script" },
  { id: 34, title: "Pre-Release Static Code Analysis & Sonar/SpotBugs Audit", tier: 4, category: "Quality", focus: "Code Hygiene", deliverable: "0 critical bug reports" },
  { id: 35, title: "Final Capstone Defense & Live Interactive Demo", tier: 4, category: "Evaluation", focus: "Final Defense", deliverable: "Evaluated 100% rubric score" }
];

export default function JavaCapstone() {
  // Navigation & Mode state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [viewMode, setViewMode] = useState("guided"); // "guided" or "textbook"
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum", "workbenches", "quiz", "milestones"

  // Capstone Milestone state
  const [completedMilestones, setCompletedMilestones] = useState(() => new Set());
  const [filterTier, setFilterTier] = useState("all");

  // Quiz state
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // --- WORKBENCH 1: CAPSTONE PROJECT SELECTOR & BLUEPRINT ---
  const [selectedProject, setSelectedProject] = useState("proj1");
  const PROJECT_BLUEPRINTS = {
    proj1: {
      id: "proj1",
      name: "Project 1 — Interactive DSA Algorithm Visualizer",
      tagline: "Visualizing Data Structures & Algorithms Through Step-By-Step Animation",
      difficulty: "Balanced (Recommended)",
      techStack: "Java 21, JavaFX / React Web, Canvas, JUnit 5, JMH, Maven",
      presentation: "Desktop GUI or Web Frontend rendering real-time animated node graphs and sorting bars.",
      engine: "Decoupled Algorithm Engine emitting compact AlgorithmStep records (COMPARE, SWAP, RELAX, VISIT).",
      architecture: [
        "Presentation Layer: Play/Pause/Step slider controls, array bar charts, node graphs, complexity panels.",
        "Visualization Engine: Step-replay queue, transition interpolation, state history slider.",
        "Algorithm Engine: Sorting (6 types), Searching, BST, Graph BFS/DFS, Dijkstra, Prim, Knapsack DP.",
        "Core Data Structures: Generic arrays, singly/doubly linked nodes, adjacency lists, priority queues."
      ],
      pros: "Best balanced demonstration of both algorithmic mastery and clean software architecture.",
      targetAudience: "Junior & Mid-Level Software Engineers seeking high-impact portfolio demonstrations."
    },
    proj2: {
      id: "proj2",
      name: "Project 2 — Java Coding Interview Platform",
      tagline: "Mini-LeetCode Online Assessment & Isolated Judge Engine",
      difficulty: "Advanced Backend & Systems",
      techStack: "Java, Spring Boot, Docker / Container Sandboxes, PostgreSQL, Redis Queue, JUnit 5",
      presentation: "Browser code editor workspace, sample test runners, submission tables, and leaderboards.",
      engine: "Isolated judge execution worker compiling user submissions and enforcing timeouts/memory caps.",
      architecture: [
        "Problem Management Service: Problems, constraints, public examples, and hidden judge test suites.",
        "Coding Workspace: Monaco editor, language runtime selector, custom input execution.",
        "Isolated Judge Engine: Non-root containerized runner, CPU & memory limits, stdout capture.",
        "Verdict & Submission Pipeline: Evaluates AC, WA, TLE, MLE, CE and updates user rating metrics."
      ],
      pros: "Proves enterprise backend architecture, system security, sandboxing, and data modeling skills.",
      targetAudience: "Backend & Systems Engineers aiming for fintech and cloud infrastructure roles."
    },
    proj3: {
      id: "proj3",
      name: "Project 3 — Intelligent Data Structures Playground",
      tagline: "Custom In-Memory Data Structures from Scratch with Logical Memory Models",
      difficulty: "Deep Systems & Low-Level DSA",
      techStack: "Java Core (Generics), Custom Memory Allocations, JMH Microbenchmarks, JavaFX",
      presentation: "Interactive memory-block inspector showing pointers, capacity resizes, and collision buckets.",
      engine: "Bypasses java.util to implement DynamicArray, LinkedList, HashMap, and AVL Trees natively.",
      architecture: [
        "Custom Storage Layer: Hand-crafted DynamicArray, DoublyLinkedList, Chained HashMap, AVL Tree.",
        "Logical Memory Visualizer: Displays object reference pointers, node links, and table buckets.",
        "Benchmarking Engine: Microbenchmark harness comparing custom structures against java.util collections.",
        "Operation Profiler: Real-time operation counters (pointer mutations, comparisons, arraycopies)."
      ],
      pros: "Unbeatable proof of internal data structure knowledge, pointer mechanics, and JVM memory awareness.",
      targetAudience: "Performance Engineers, Systems Architects, and Compiler/JVM Enthusiasts."
    }
  };

  // --- WORKBENCH 2: INTERACTIVE SORTING & SEARCHING STUDIO ---
  const [sortAlgo, setSortAlgo] = useState("bubble");
  const [sortStep, setSortStep] = useState(0);
  const SORT_DATA = {
    bubble: [
      { arr: [50, 20, 40, 10, 30], active: [0, 1], action: "Compare 50 and 20 -> 50 > 20, SWAP!" },
      { arr: [20, 50, 40, 10, 30], active: [1, 2], action: "Compare 50 and 40 -> 50 > 40, SWAP!" },
      { arr: [20, 40, 50, 10, 30], active: [2, 3], action: "Compare 50 and 10 -> 50 > 10, SWAP!" },
      { arr: [20, 40, 10, 50, 30], active: [3, 4], action: "Compare 50 and 30 -> 50 > 30, SWAP! 50 locked in place." },
      { arr: [20, 40, 10, 30, 50], active: [1, 2], action: "Pass 2: Compare 40 and 10 -> 40 > 10, SWAP!" },
      { arr: [20, 10, 40, 30, 50], active: [2, 3], action: "Compare 40 and 30 -> 40 > 30, SWAP! 40 locked in place." },
      { arr: [20, 10, 30, 40, 50], active: [0, 1], action: "Pass 3: Compare 20 and 10 -> 20 > 10, SWAP!" },
      { arr: [10, 20, 30, 40, 50], active: [], action: "Array fully sorted! Total swaps: 6. Time: O(N^2)." }
    ],
    selection: [
      { arr: [50, 20, 40, 10, 30], active: [0, 3], action: "Scan unsorted: minimum is 10 at index 3. Swap with index 0." },
      { arr: [10, 20, 40, 50, 30], active: [1, 1], action: "Scan unsorted: minimum is 20 at index 1. Already in place." },
      { arr: [10, 20, 40, 50, 30], active: [2, 4], action: "Scan unsorted: minimum is 30 at index 4. Swap with index 2." },
      { arr: [10, 20, 30, 50, 40], active: [3, 4], action: "Scan unsorted: minimum is 40 at index 4. Swap with index 3." },
      { arr: [10, 20, 30, 40, 50], active: [], action: "Array fully sorted! Total swaps: 3. Time: O(N^2)." }
    ],
    insertion: [
      { arr: [50, 20, 40, 10, 30], active: [0, 1], action: "Insert 20 into sorted prefix [50] -> shift 50 right, place 20." },
      { arr: [20, 50, 40, 10, 30], active: [1, 2], action: "Insert 40 into [20, 50] -> shift 50 right, place 40." },
      { arr: [20, 40, 50, 10, 30], active: [2, 3], action: "Insert 10 into [20, 40, 50] -> shift all right, place 10." },
      { arr: [10, 20, 40, 50, 30], active: [3, 4], action: "Insert 30 into [10, 20, 40, 50] -> shift 50, 40 right, place 30." },
      { arr: [10, 20, 30, 40, 50], active: [], action: "Array fully sorted! Total shifts: 6. Time: O(N^2)." }
    ]
  };

  // --- WORKBENCH 3: TREE & GRAPH EXPLORATION ENGINE ---
  const [graphMode, setGraphMode] = useState("dijkstra");
  const [graphStep, setGraphStep] = useState(0);
  const GRAPH_STEPS = {
    dijkstra: [
      { current: "A", pq: "[A:0]", dist: { A: 0, B: "∞", C: "∞", D: "∞" }, note: "Initialize source dist[A] = 0, others ∞. Push A to PriorityQueue." },
      { current: "A", pq: "[B:4, C:2]", dist: { A: 0, B: 4, C: 2, D: "∞" }, note: "Poll A(0). Relax edges A->B(4) and A->C(2). Enqueue B and C." },
      { current: "C", pq: "[B:3, D:7]", dist: { A: 0, B: 3, C: 2, D: 7 }, note: "Poll C(2). Relax C->B (dist 2+1=3 < 4, updated!) and C->D (dist 2+5=7). Enqueue." },
      { current: "B", pq: "[D:5]", dist: { A: 0, B: 3, C: 2, D: 5 }, note: "Poll B(3). Relax B->D (dist 3+2=5 < 7, updated!). Finalize shortest path to D = 5." }
    ],
    bfs: [
      { current: "A", queue: "[A]", visited: ["A"], note: "Enqueue source vertex A into FIFO Queue." },
      { current: "A", queue: "[B, C]", visited: ["A", "B", "C"], note: "Dequeue A. Enqueue unvisited neighbors B and C." },
      { current: "B", queue: "[C, D, E]", visited: ["A", "B", "C", "D", "E"], note: "Dequeue B. Enqueue neighbors D and E." },
      { current: "C", queue: "[D, E, F]", visited: ["A", "B", "C", "D", "E", "F"], note: "Dequeue C. Enqueue neighbor F. Level-order traversal complete!" }
    ]
  };

  // --- WORKBENCH 4: DYNAMIC PROGRAMMING TABLE STATE VISUALIZER ---
  const [dpStep, setDpStep] = useState(2);
  const DP_FIB = [0, 1, 1, 2, 3, 5, 8, 13, 21];

  // --- WORKBENCH 5: ISOLATED JUDGE ENGINE SIMULATOR ---
  const [judgeLang] = useState("Java 21");
  const [judgeState, setJudgeState] = useState("idle"); // idle, compiling, executing, verdict
  const [simVerdict, setSimVerdict] = useState("Accepted");

  const runJudgeSimulation = (verdictType) => {
    setSimVerdict(verdictType);
    setJudgeState("compiling");
    setTimeout(() => {
      setJudgeState("executing");
      setTimeout(() => {
        setJudgeState("verdict");
      }, 700);
    }, 600);
  };

  // --- WORKBENCH 6: CUSTOM DATA STRUCTURE MEMORY STUDIO ---
  const [arrayElements, setArrayElements] = useState([10, 20, 30, 40]);
  const [arrayCapacity, setArrayCapacity] = useState(4);

  const addArrayElement = () => {
    if (arrayElements.length >= arrayCapacity) {
      setArrayCapacity((prev) => prev * 2);
    }
    setArrayElements((prev) => [...prev, (prev.length + 1) * 10]);
  };

  const resetArray = () => {
    setArrayElements([10, 20, 30, 40]);
    setArrayCapacity(4);
  };

  // --- WORKBENCH 7: BENCHMARK & PROFILING COMPARISON MATRIX ---
  const [benchmarkN, setBenchmarkN] = useState(100000);
  const BENCHMARK_METRICS = {
    1000: { alGet: "1.2 ns", llGet: "420 ns", hmPut: "8.5 ns", tmPut: "45 ns", cacheMisses: "0.2%" },
    100000: { alGet: "2.1 ns", llGet: "3,200,000 ns (3.2 ms)", hmPut: "12.4 ns", tmPut: "185 ns", cacheMisses: "4.8%" },
    1000000: { alGet: "3.4 ns", llGet: "38 ms (Extremely Slow)", hmPut: "18.2 ns", tmPut: "420 ns", cacheMisses: "14.2%" }
  };

  // --- WORKBENCH 8: CAPSTONE RUBRIC & 21-STEP READINESS CHECKLIST ---
  const [checklist, setChecklist] = useState(() => new Set());
  const CHECKLIST_ITEMS = [
    { id: 1, phase: "1. Planning", text: "Selected one primary capstone project (Visualizer, Judge, or Playground)" },
    { id: 2, phase: "1. Planning", text: "Defined comprehensive functional and non-functional requirements" },
    { id: 3, phase: "1. Planning", text: "Prepared testable acceptance criteria with verification boundaries" },
    { id: 4, phase: "1. Planning", text: "Created system layered architecture diagram and package blueprint" },
    { id: 5, phase: "2. Core Implementation", text: "Implemented required core data structures (arrays, nodes, heaps, tables)" },
    { id: 6, phase: "2. Core Implementation", text: "Implemented required algorithms (sorting, searching, trees, graphs, DP)" },
    { id: 7, phase: "2. Core Implementation", text: "Applied idiomatic Java OOP, generics, and interface-driven design" },
    { id: 8, phase: "2. Core Implementation", text: "Separated responsibilities strictly between presentation and algorithm engine" },
    { id: 9, phase: "3. Testing", text: "Created automated JUnit 5 test suite verifying standard behavior" },
    { id: 10, phase: "3. Testing", text: "Tested boundary cases (empty collections, single elements, extreme sizes)" },
    { id: 11, phase: "3. Testing", text: "Tested invalid inputs, negative numbers, and null-pointer defense" },
    { id: 12, phase: "3. Testing", text: "Verified mathematical correctness and algorithmic loop invariants" },
    { id: 13, phase: "4. Performance", text: "Analyzed theoretical Big-O time and auxiliary space complexities" },
    { id: 14, phase: "4. Performance", text: "Constructed empirical microbenchmarks comparing execution latency" },
    { id: 15, phase: "4. Performance", text: "Identified at least one computational bottleneck and documented optimization" },
    { id: 16, phase: "4. Performance", text: "Verified optimization results against baseline measurements" },
    { id: 17, phase: "5. Delivery", text: "Created Git repository with atomic commits and clean .gitignore" },
    { id: 18, phase: "5. Delivery", text: "Authored comprehensive README with diagrams, features, and quickstart" },
    { id: 19, phase: "5. Delivery", text: "Added technical complexity and testing documentation reports" },
    { id: 20, phase: "5. Delivery", text: "Packaged desktop bundle (jpackage) or containerized backend image" },
    { id: 21, phase: "5. Delivery", text: "Prepared 10-slide architectural presentation deck for technical defense" }
  ];

  const toggleChecklist = (id) => {
    setChecklist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Filter practice problems
  const filteredMilestones = useMemo(() => {
    return CAPSTONE_MILESTONES.filter((p) => {
      if (filterTier === "all") return true;
      return p.tier === Number(filterTier);
    });
  }, [filterTier]);

  const toggleMilestone = (id) => {
    setCompletedMilestones((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Section search filter
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return JAVA_CAPSTONE_SECTIONS;
    const q = searchQuery.toLowerCase();
    return JAVA_CAPSTONE_SECTIONS.filter(
      (s) => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

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
        currentModuleId="capstone-project"
        moduleTitle="24. Final Java & DSA Capstone Project"
        totalModules={24}
        prevRoute="/learning/java/interview-mastery"
        nextRoute={null}
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
                Final Masterclass Capstone Project
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Module 24 — Final Java &amp; DSA Capstone Project
              </h1>
              <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
                Design, implement, benchmark, test, document, and deploy a production-grade software engineering project integrating 24 modules of Java, OOP, Data Structures, Algorithms, and JVM performance.
              </p>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>25 Project Sections</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>8 Interactive Workbenches</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>35 Capstone Milestones</span>
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
              Curriculum (25 Sections)
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
              15 MCQ Capstone Quiz
            </button>
            <button
              onClick={() => setActiveTab("milestones")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === "milestones"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              35 Capstone Milestones ({completedMilestones.size}/35)
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
                  placeholder="Search topics, projects, architectures..."
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
                          ? "Capstone Overview · 25 Project Sections"
                          : `Section ${activeSectionId} of 25`}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                        {JAVA_CAPSTONE_SECTIONS[activeSectionId]?.title}
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
                        disabled={activeSectionId === JAVA_CAPSTONE_SECTIONS.length - 1}
                        onClick={() =>
                          setActiveSectionId((prev) =>
                            Math.min(JAVA_CAPSTONE_SECTIONS.length - 1, prev + 1)
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
                    {JAVA_CAPSTONE_SECTIONS[activeSectionId]?.content}
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
                      disabled={activeSectionId === JAVA_CAPSTONE_SECTIONS.length - 1}
                      onClick={() => {
                        setActiveSectionId((prev) =>
                          Math.min(JAVA_CAPSTONE_SECTIONS.length - 1, prev + 1)
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
                  {JAVA_CAPSTONE_SECTIONS.map((sec) => (
                    <div
                      key={sec.id}
                      id={`section-${sec.id}`}
                      className="pt-8 border-t first:border-t-0 border-slate-800/80"
                    >
                      <div className="mb-4">
                        <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider">
                          {sec.id === 0 ? "Capstone Overview" : `Section ${sec.id} of 25`}
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
            {/* WORKBENCH 1: CAPSTONE PROJECT SELECTOR & BLUEPRINT */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 1: Capstone Project Selector &amp; Blueprint Generator
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Compare the three capstone pathways and review their layered architectures, tech stacks, and deliverables.
                  </p>
                </div>
              </div>

              {/* Project selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
                {Object.values(PROJECT_BLUEPRINTS).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProject(p.id)}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      selectedProject === p.id
                        ? "bg-slate-900 border-orange-500 text-white shadow-xl shadow-orange-500/20"
                        : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400">
                        {p.difficulty}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-1">{p.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{p.tagline}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                      Tech: {p.techStack.split(",")[0]}, {p.techStack.split(",")[1]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Blueprint Details */}
              {(() => {
                const b = PROJECT_BLUEPRINTS[selectedProject];
                return (
                  <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                      <div>
                        <h4 className="text-lg font-bold text-white">{b.name}</h4>
                        <p className="text-xs text-orange-400 font-mono mt-0.5">{b.tagline}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 border border-orange-500/30 text-orange-300 self-start">
                        {b.difficulty}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <FolderTree className="w-3.5 h-3.5 text-orange-400" />
                          Layered Architecture Blueprint
                        </span>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {b.architecture.map((layer, idx) => (
                            <li key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2">
                              <span className="w-5 h-5 rounded-full bg-orange-500/15 text-orange-400 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{layer}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                            Recommended Technology Stack:
                          </span>
                          <div className="text-xs font-mono font-semibold text-emerald-300">
                            {b.techStack}
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                            Strategic Engineering Value:
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">{b.pros}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900 border border-orange-500/30 text-orange-200 text-xs">
                          <strong>Target Career Trajectory:</strong> {b.targetAudience}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* WORKBENCH 2: INTERACTIVE SORTING & SEARCHING STUDIO */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 2: Interactive Algorithm Animation Studio
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Step through real-time state transitions, pointer highlights, and comparison operations.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 my-4">
                {["bubble", "selection", "insertion"].map((algoKey) => (
                  <button
                    key={algoKey}
                    onClick={() => {
                      setSortAlgo(algoKey);
                      setSortStep(0);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                      sortAlgo === algoKey
                        ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {algoKey} Sort Visualizer
                  </button>
                ))}
              </div>

              {(() => {
                const steps = SORT_DATA[sortAlgo];
                const currentData = steps[sortStep] || steps[0];
                return (
                  <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                    {/* Array visualization bars */}
                    <div className="flex items-end justify-center gap-4 h-48 pt-6 pb-2 border-b border-slate-800">
                      {currentData.arr.map((val, idx) => {
                        const isActive = currentData.active.includes(idx);
                        return (
                          <div key={idx} className="flex flex-col items-center gap-2">
                            <div className="text-xs font-mono font-bold text-white">{val}</div>
                            <div
                              style={{ height: `${val * 2.5}px` }}
                              className={`w-12 rounded-t-xl transition-all duration-300 flex items-center justify-center ${
                                isActive
                                  ? "bg-amber-400 shadow-xl shadow-amber-500/50 scale-105"
                                  : "bg-orange-500"
                              }`}
                            />
                            <span className="text-[10px] font-mono text-slate-500">[{idx}]</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span>{currentData.action}</span>
                      <span className="text-orange-400 font-bold">
                        Step {sortStep + 1} / {steps.length}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        disabled={sortStep === 0}
                        onClick={() => setSortStep((prev) => Math.max(0, prev - 1))}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                      >
                        &larr; Step Back
                      </button>
                      <button
                        onClick={() => setSortStep(0)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" /> Reset
                      </button>
                      <button
                        disabled={sortStep === steps.length - 1}
                        onClick={() => setSortStep((prev) => Math.min(steps.length - 1, prev + 1))}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs disabled:opacity-30 hover:bg-amber-400 shadow-lg shadow-amber-500/20"
                      >
                        Step Forward &rarr;
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* WORKBENCH 3: TREE & GRAPH EXPLORATION ENGINE */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 3: Tree &amp; Graph Interactive Exploration Engine
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Explore Dijkstra's shortest path edge relaxations and BFS level-by-level queue management.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 my-4">
                <button
                  onClick={() => {
                    setGraphMode("dijkstra");
                    setGraphStep(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold ${
                    graphMode === "dijkstra" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  Dijkstra Shortest Path
                </button>
                <button
                  onClick={() => {
                    setGraphMode("bfs");
                    setGraphStep(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold ${
                    graphMode === "bfs" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  Breadth-First Search (BFS)
                </button>
              </div>

              {(() => {
                const steps = GRAPH_STEPS[graphMode];
                const active = steps[graphStep] || steps[0];
                return (
                  <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                    <div className="flex flex-wrap items-center justify-around gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      {["A", "B", "C", "D"].map((node) => {
                        const isCurrent = active.current === node;
                        return (
                          <div key={node} className="flex flex-col items-center">
                            <div
                              className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-base border transition-all ${
                                isCurrent
                                  ? "bg-cyan-500 text-slate-950 border-cyan-300 shadow-xl shadow-cyan-500/50 scale-110"
                                  : "bg-slate-800 text-slate-200 border-slate-700"
                              }`}
                            >
                              {node}
                            </div>
                            {graphMode === "dijkstra" && active.dist && (
                              <span className="text-[11px] font-mono text-cyan-300 mt-1">
                                d={active.dist[node]}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono space-y-2">
                      <div className="text-cyan-400 font-bold">
                        {graphMode === "dijkstra" ? `Queue State: ${active.pq}` : `Queue: ${active.queue}`}
                      </div>
                      <p>{active.note}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        disabled={graphStep === 0}
                        onClick={() => setGraphStep((prev) => Math.max(0, prev - 1))}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                      >
                        &larr; Prev Step
                      </button>
                      <span className="text-xs font-mono text-slate-500">
                        Step {graphStep + 1} of {steps.length}
                      </span>
                      <button
                        disabled={graphStep === steps.length - 1}
                        onClick={() => setGraphStep((prev) => Math.min(steps.length - 1, prev + 1))}
                        className="px-3 py-1.5 rounded-lg bg-cyan-600 text-xs font-semibold text-white disabled:opacity-30 hover:bg-cyan-500"
                      >
                        Advance Step &rarr;
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* WORKBENCH 4: DYNAMIC PROGRAMMING TABLE STATE VISUALIZER */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 4: Dynamic Programming Table State Visualizer
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Watch tabulation fill cell-by-cell using previous overlapping subproblem solutions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                <div className="text-xs font-mono text-slate-400">
                  Recurrence: <code className="text-orange-300 font-bold">F(n) = F(n-1) + F(n-2)</code> | Base: F(0)=0, F(1)=1
                </div>

                <div className="flex flex-wrap gap-2">
                  {DP_FIB.map((val, idx) => {
                    const isTarget = idx === dpStep;
                    const isOperand1 = idx === dpStep - 1;
                    const isOperand2 = idx === dpStep - 2;
                    const isFilled = idx <= dpStep;

                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm border transition-all ${
                            isTarget
                              ? "bg-orange-500 text-white border-orange-400 shadow-xl shadow-orange-500/20 scale-110"
                              : isOperand1 || isOperand2
                              ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/50"
                              : isFilled
                              ? "bg-slate-900 text-slate-300 border-slate-800"
                              : "bg-slate-950 text-slate-700 border-slate-900 opacity-40"
                          }`}
                        >
                          {isFilled ? val : "?"}
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 mt-1">n={idx}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  Calculating F({dpStep}): F({dpStep - 1}) [{DP_FIB[dpStep - 1]}] + F({dpStep - 2}) [{DP_FIB[dpStep - 2]}] ={" "}
                  <strong className="text-orange-400">{DP_FIB[dpStep]}</strong>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={dpStep <= 2}
                    onClick={() => setDpStep((prev) => Math.max(2, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-30 hover:bg-slate-700"
                  >
                    &larr; Prev Cell
                  </button>
                  <button
                    disabled={dpStep >= DP_FIB.length - 1}
                    onClick={() => setDpStep((prev) => Math.min(DP_FIB.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-orange-500 text-xs font-semibold text-white disabled:opacity-30 hover:bg-orange-500"
                  >
                    Next Cell &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* WORKBENCH 5: ISOLATED JUDGE ENGINE SIMULATOR */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 5: Isolated Judge Engine Simulator (Project 2)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Simulate the sandboxed execution pipeline: validation, sandbox execution, timeout enforcement, and official verdicts.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Judge Target: TwoSum.java ({judgeLang})</span>
                  <span className="text-emerald-400">Sandbox: Disposable Container (Non-root, Net Disabled)</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => runJudgeSimulation("Accepted")}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-semibold border border-emerald-500/40"
                  >
                    Simulate Correct Code (Accepted)
                  </button>
                  <button
                    onClick={() => runJudgeSimulation("Time Limit Exceeded")}
                    className="px-3 py-1.5 rounded-lg bg-amber-600/30 text-amber-300 hover:bg-amber-600 hover:text-white text-xs font-semibold border border-amber-500/40"
                  >
                    Simulate Infinite Loop (TLE)
                  </button>
                  <button
                    onClick={() => runJudgeSimulation("Wrong Answer")}
                    className="px-3 py-1.5 rounded-lg bg-rose-600/30 text-rose-300 hover:bg-rose-600 hover:text-white text-xs font-semibold border border-rose-500/40"
                  >
                    Simulate Off-by-One (WA)
                  </button>
                </div>

                {judgeState !== "idle" && (
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-slate-400">Pipeline Status:</span>
                      {judgeState === "compiling" && (
                        <span className="text-amber-400 animate-pulse">Compiling javac TwoSum.java...</span>
                      )}
                      {judgeState === "executing" && (
                        <span className="text-cyan-400 animate-pulse">Running inside isolated sandbox (Memory: 256MB, Timeout: 1000ms)...</span>
                      )}
                      {judgeState === "verdict" && (
                        <span
                          className={`font-bold ${
                            simVerdict === "Accepted"
                              ? "text-emerald-400"
                              : simVerdict === "Time Limit Exceeded"
                              ? "text-amber-400"
                              : "text-rose-400"
                          }`}
                        >
                          Verdict: {simVerdict}
                        </span>
                      )}
                    </div>

                    {judgeState === "verdict" && (
                      <div className="p-3 rounded-lg bg-slate-950 text-xs font-mono text-slate-300 border border-slate-800 space-y-1">
                        <div>Test Suite: 10/10 Test Cases Evaluated</div>
                        <div>Execution Time: {simVerdict === "Time Limit Exceeded" ? "> 1000 ms (Killed)" : "42 ms"}</div>
                        <div>Peak Heap Memory: 18.4 MB</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* WORKBENCH 6: CUSTOM DATA STRUCTURE MEMORY STUDIO */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Boxes className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 6: Custom Data Structure Memory Studio (Project 3)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Interact with hand-crafted DynamicArray doubling, LinkedList node pointers, and HashMap bucket chains.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-400">
                    DynamicArray Capacity: <strong className="text-orange-400">{arrayCapacity}</strong> | Size:{" "}
                    <strong className="text-emerald-400">{arrayElements.length}</strong>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={addArrayElement}
                      className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-semibold hover:bg-orange-500"
                    >
                      + Append Element
                    </button>
                    <button
                      onClick={resetArray}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-semibold hover:text-white"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* Slots display */}
                <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  {Array.from({ length: arrayCapacity }).map((_, idx) => {
                    const hasVal = idx < arrayElements.length;
                    return (
                      <div
                        key={idx}
                        className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center font-mono text-xs transition-all ${
                          hasVal
                            ? "bg-slate-900 border-orange-500 text-white font-bold"
                            : "bg-slate-950/60 border-slate-800 text-slate-600 border-dashed"
                        }`}
                      >
                        <span>{hasVal ? arrayElements[idx] : "null"}</span>
                        <span className="text-[9px] text-slate-500">[{idx}]</span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-orange-500/30 text-orange-200 text-xs">
                  <strong>Memory Invariant:</strong> Whenever size == capacity, the array doubles capacity via{" "}
                  <code>System.arraycopy(elements, 0, newArray, 0, size)</code>, guaranteeing amortized O(1) appends.
                </div>
              </div>
            </div>

            {/* WORKBENCH 7: BENCHMARK & PROFILING COMPARISON MATRIX */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 7: Benchmark &amp; Profiling Comparison Matrix
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Compare theoretical Big-O predictions against empirical JMH microbenchmark hardware measurements.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 my-4">
                <span className="text-xs text-slate-400">Dataset Size (N):</span>
                {[1000, 100000, 1000000].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setBenchmarkN(sz)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-semibold ${
                      benchmarkN === sz ? "bg-amber-500 text-slate-950 font-bold" : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    N = {sz.toLocaleString()}
                  </button>
                ))}
              </div>

              {(() => {
                const metric = BENCHMARK_METRICS[benchmarkN];
                return (
                  <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="bg-slate-900 text-slate-300 border-b border-slate-800">
                          <th className="p-3">Data Structure Operation</th>
                          <th className="p-3">Big-O Complexity</th>
                          <th className="p-3">Measured Latency (JMH)</th>
                          <th className="p-3">Hardware Cache Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        <tr>
                          <td className="p-3 font-semibold text-white">ArrayList.get(index)</td>
                          <td className="p-3 text-orange-400">O(1)</td>
                          <td className="p-3 text-emerald-400 font-bold">{metric.alGet}</td>
                          <td className="p-3 text-emerald-300">Contiguous memory, 99% cache line hit</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">LinkedList.get(index)</td>
                          <td className="p-3 text-rose-400">O(N)</td>
                          <td className="p-3 text-rose-400 font-bold">{metric.llGet}</td>
                          <td className="p-3 text-rose-300">Pointer chasing, frequent L3 cache misses</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">HashMap.put(key, val)</td>
                          <td className="p-3 text-orange-400">Expected O(1)</td>
                          <td className="p-3 text-emerald-400 font-bold">{metric.hmPut}</td>
                          <td className="p-3">Hash table bucket lookup</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">TreeMap.put(key, val)</td>
                          <td className="p-3 text-orange-400">O(log N)</td>
                          <td className="p-3 text-amber-300 font-bold">{metric.tmPut}</td>
                          <td className="p-3">Red-Black tree rebalancing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })()}
            </div>

            {/* WORKBENCH 8: CAPSTONE RUBRIC & 21-STEP READINESS CHECKLIST */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Workbench 8: Capstone Evaluation Rubric &amp; 21-Step Readiness Checklist
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400">
                    Track your project completion against the official 100% weighted capstone assessment rubric.
                  </p>
                </div>
              </div>

              {/* Progress Summary */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Capstone Readiness Progress</span>
                  <span className="text-orange-400 font-bold">
                    {checklist.size} / 21 Requirements Completed ({Math.round((checklist.size / 21) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${(checklist.size / 21) * 100}%` }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  {CHECKLIST_ITEMS.map((item) => {
                    const isDone = checklist.has(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleChecklist(item.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                          isDone
                            ? "bg-emerald-950/20 border-emerald-500/40 text-slate-200"
                            : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <div className="text-xs">
                          <span className="font-mono text-[10px] text-orange-400 block">{item.phase}</span>
                          <span className={isDone ? "text-white font-medium" : ""}>{item.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 15 MCQ CAPSTONE QUIZ */}
        {activeTab === "quiz" && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  Module 24 Comprehensive Capstone Assessment
                </h3>
                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  15 architectural and engineering questions evaluating complete project delivery readiness.
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
                  <div key={q.id} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
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

        {/* TAB 4: 35 CAPSTONE MILESTONES TRACKER */}
        {activeTab === "milestones" && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <CheckSquare className="w-6 h-6 text-orange-400" />
                  35 Capstone Engineering Milestones Tracker
                </h3>
                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  Track your project deliverables from requirements and data structures to deployment and final defense.
                </p>
              </div>

              {/* Tier Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Filter Tier:</span>
                <select
                  value={filterTier}
                  onChange={(e) => setFilterTier(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-orange-500"
                >
                  <option value="all">All 4 Tiers (35)</option>
                  <option value="1">Tier 1: Planning &amp; Architecture (9)</option>
                  <option value="2">Tier 2: Core Data Structures &amp; Algorithms (9)</option>
                  <option value="3">Tier 3: Custom Structures &amp; Engine UX (9)</option>
                  <option value="4">Tier 4: Testing, Benchmarking &amp; Deployment (8)</option>
                </select>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Milestone Completion Progress</span>
                <span className="text-orange-400 font-bold">
                  {completedMilestones.size} / 35 Completed (
                  {Math.round((completedMilestones.size / 35) * 100)}%)
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${(completedMilestones.size / 35) * 100}%` }}
                />
              </div>
            </div>

            {/* Milestone list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              {filteredMilestones.map((milestone) => {
                const isDone = completedMilestones.has(milestone.id);
                return (
                  <div
                    key={milestone.id}
                    onClick={() => toggleMilestone(milestone.id)}
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
                          <span>{milestone.id}. {milestone.title}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-slate-400">
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300">
                            {milestone.category}
                          </span>
                          <span>{milestone.deliverable}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono text-slate-500">Tier {milestone.tier}</span>
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
