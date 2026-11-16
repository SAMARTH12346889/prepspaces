import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  Award,
  CheckSquare,
  Square,
  Activity,
  GitMerge,
  Layers,
  Clock,
  Cpu,
  Network,
  Share2,
  RefreshCw,
  Search
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_GRAPH_THEORY_SECTIONS } from "./JavaGraphTheorySections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which of the following statements about graph representations is correct for a sparse graph with V = 100,000 vertices and E = 200,000 edges?",
    options: [
      "Adjacency Matrix requires O(V²) space (~40 GB of RAM) whereas Adjacency List requires O(V + E) space",
      "Adjacency Matrix requires O(V) space and enables O(1) neighbor iteration",
      "Edge List allows querying whether an edge (u, v) exists in O(1) time",
      "Adjacency List requires more memory than Adjacency Matrix when E << V²"
    ],
    correct: 0,
    explanation: "An adjacency matrix of size 100,000 x 100,000 contains 10^10 cells (~40 GB of RAM). An adjacency list stores only actual edges, requiring O(V + E) auxiliary space (~few MBs)."
  },
  {
    id: 2,
    question: "In an undirected graph with V vertices and E edges, what is the sum of degrees of all vertices according to the Handshaking Lemma?",
    options: [
      "2 * E",
      "E",
      "V * (V - 1) / 2",
      "E / 2"
    ],
    correct: 0,
    explanation: "By the Handshaking Lemma, every undirected edge connects two vertices and contributes exactly 1 to the degree of each endpoint. Therefore, the sum of all vertex degrees is 2 * E."
  },
  {
    id: 3,
    question: "What is the time complexity of Breadth-First Search (BFS) and Depth-First Search (DFS) on an Adjacency List?",
    options: [
      "O(V + E)",
      "O(V²)",
      "O(V * E)",
      "O(V log E)"
    ],
    correct: 0,
    explanation: "Each vertex is enqueued/visited once (O(V)), and every edge is traversed once in directed or twice in undirected graphs (O(E)). Thus total time is O(V + E)."
  },
  {
    id: 4,
    question: "Why does BFS guarantee finding the shortest path in terms of edge count in an unweighted graph, while DFS does not?",
    options: [
      "BFS explores vertices in non-decreasing order of hop distance level by level using a FIFO Queue",
      "BFS uses a PriorityQueue sorted by edge weights",
      "DFS is iterative while BFS is recursive",
      "BFS sorts neighbor nodes numerically before visiting"
    ],
    correct: 0,
    explanation: "BFS visits all distance-d vertices before any distance-(d+1) vertex. The first time a target node is popped or marked, the discovered path is guaranteed to have the minimum number of edges."
  },
  {
    id: 5,
    question: "How can you detect a cycle in an UNDIRECTED graph during DFS traversal?",
    options: [
      "If an adjacent neighbor is already visited and is NOT the immediate parent vertex",
      "If an adjacent neighbor is already visited regardless of parent status",
      "If all neighbors of a vertex have in-degree > 1",
      "If the recursion stack depth exceeds V"
    ],
    correct: 0,
    explanation: "In an undirected graph, the edge back to the immediate parent is the edge we just traversed. If we encounter a visited neighbor that is not our parent, an alternative path exists, confirming a cycle."
  },
  {
    id: 6,
    question: "Why can the undirected cycle detection condition (visited[neighbor] && neighbor != parent) NOT be used directly for DIRECTED graphs?",
    options: [
      "Two independent directed paths converging onto a common child (cross edge) would be falsely flagged as a cycle",
      "Directed graphs cannot contain cycles",
      "Directed graphs do not support visited arrays",
      "Directed graphs only allow BFS, not DFS"
    ],
    correct: 0,
    explanation: "In directed graphs, edges like 1 -> 3 and 2 -> 3 converge onto 3 without forming a cycle. To detect directed cycles, we must track whether a visited node is currently in the active recursion stack (Back Edge)."
  },
  {
    id: 7,
    question: "In the 3-state coloring algorithm for directed cycle detection (0 = Unvisited, 1 = Visiting / in call stack, 2 = Visited), what signals a cycle?",
    options: [
      "Encountering a neighbor in state 1 (Back Edge)",
      "Encountering a neighbor in state 0",
      "Encountering a neighbor in state 2",
      "Encountering a leaf vertex with out-degree 0"
    ],
    correct: 0,
    explanation: "State 1 represents vertices currently residing in the active recursion call stack. An edge leading to a vertex in state 1 forms a Back Edge to an ancestor, confirming a directed cycle."
  },
  {
    id: 8,
    question: "A graph is bipartite (2-colorable) if and only if:",
    options: [
      "It contains no odd-length cycles",
      "It is a complete graph",
      "Every vertex has an even degree",
      "It is strongly connected"
    ],
    correct: 0,
    explanation: "By Konig's Theorem, a graph is bipartite if and only if it contains no cycles of odd length. Any odd cycle inevitably forces two adjacent nodes to share the same color."
  },
  {
    id: 9,
    question: "What is a prerequisite condition for a graph to have a valid Topological Ordering?",
    options: [
      "The graph must be a Directed Acyclic Graph (DAG)",
      "The graph must be undirected and connected",
      "The graph must contain at least one Hamiltonian cycle",
      "The graph must have equal in-degrees and out-degrees"
    ],
    correct: 0,
    explanation: "Topological ordering requires that for every directed edge u -> v, u appears before v. If a cycle exists (A -> B -> A), no linear ordering can satisfy dependencies. Only DAGs have valid topological orderings."
  },
  {
    id: 10,
    question: "How does Kahn's algorithm detect whether a directed graph contains a cycle?",
    options: [
      "If the count of vertices popped from the in-degree 0 queue is less than V, a cycle exists",
      "By checking if any vertex initially has in-degree 0",
      "By counting the total number of edges traversed",
      "By maintaining an ancestor pointer for each node"
    ],
    correct: 0,
    explanation: "Vertices trapped in a cycle always have in-degree >= 1 and are never pushed to the queue. If the total number of processed vertices < V, the remaining vertices form cycles."
  },
  {
    id: 11,
    question: "What is a Strongly Connected Component (SCC) in a directed graph?",
    options: [
      "A maximal subgraph where every vertex is mutually reachable from every other vertex in the subgraph",
      "A set of vertices connected by undirected bridge edges",
      "A subgraph with zero directed cycles",
      "A spanning tree with minimal total edge weight"
    ],
    correct: 0,
    explanation: "An SCC is a maximal subset of vertices such that for every pair of vertices u and v, there exists a directed path from u to v and a directed path from v to u."
  },
  {
    id: 12,
    question: "Why does Kosaraju's Algorithm reverse (transpose) all edges of the graph in Step 2?",
    options: [
      "To prevent DFS from leaking out of the current SCC into already processed sink SCCs when popped in reverse finish-time order",
      "To convert the directed graph into an undirected graph",
      "To reduce space complexity from O(V+E) to O(V)",
      "To eliminate self-loops and multi-edges"
    ],
    correct: 0,
    explanation: "Reversing edges converts SCC sources into SCC sinks. Running DFS on the transposed graph in decreasing order of original finish times confines each traversal strictly within its own SCC."
  },
  {
    id: 13,
    question: "What is the primary operational difference between Kosaraju's and Tarjan's SCC algorithms?",
    options: [
      "Both are O(V + E), but Tarjan uses a single DFS pass with low-link values while Kosaraju requires two DFS passes and graph transposition",
      "Kosaraju is O(V²) while Tarjan is O(V + E)",
      "Tarjan works only on DAGs whereas Kosaraju works on cyclic graphs",
      "Kosaraju finds bridges while Tarjan finds topological orderings"
    ],
    correct: 0,
    explanation: "Both achieve linear O(V + E) runtime, but Tarjan avoids building the transposed graph and requires only a single recursive DFS pass by maintaining discovery times and low-link values."
  },
  {
    id: 14,
    question: "In Tarjan's Bridge-Finding algorithm, an edge (u, v) in the DFS tree is a bridge (critical connection) if and only if:",
    options: [
      "low[v] > disc[u]",
      "low[v] <= disc[u]",
      "low[v] == disc[u]",
      "disc[v] == disc[u] + 1"
    ],
    correct: 0,
    explanation: "The condition low[v] > disc[u] means that from subtree v and its descendants, the lowest discovery time reachable via back-edges is strictly greater than disc[u]. Thus v has no back-edge reaching u or ancestors of u; removing (u, v) disconnects the graph."
  },
  {
    id: 15,
    question: "In Tarjan's Articulation Point algorithm, what condition makes a NON-ROOT vertex u a cut vertex?",
    options: [
      "It has a child v in the DFS tree such that low[v] >= disc[u]",
      "It has low[u] == 0",
      "It has at least two DFS children",
      "Its degree is strictly odd"
    ],
    correct: 0,
    explanation: "For a non-root vertex u, if a child v satisfies low[v] >= disc[u], the subtree rooted at v has no back-edge reaching any ancestor strictly above u. Removing u isolates v's subtree."
  }
];

// --- 35 PRACTICE PROBLEMS & LABS TRACKER ---
const LAB_ASSIGNMENTS = [
  // Level 1: Fundamentals & Representations (1-7)
  { id: 1, tier: "Level 1", title: "Find Center of Star Graph (LeetCode 1791)", desc: "Inspect first two edges; the common vertex between them is the center of the star in O(1)." },
  { id: 2, tier: "Level 1", title: "Find if Path Exists in Graph (LeetCode 1971)", desc: "Basic BFS/DFS or DSU to determine reachability between source and destination in undirected graph." },
  { id: 3, tier: "Level 1", title: "Clone Graph (LeetCode 133)", desc: "Deep copy an undirected graph using BFS/DFS with a HashMap<Node, Node> to avoid duplicate node creation." },
  { id: 4, tier: "Level 1", title: "Keys and Rooms (LeetCode 841)", desc: "Traverse rooms starting from room 0 using BFS/DFS visited array; check if visited count equals N." },
  { id: 5, tier: "Level 1", title: "Find the Town Judge (LeetCode 997)", desc: "Calculate trust score (inDegree - outDegree); the judge has score N-1 with outDegree 0." },
  { id: 6, tier: "Level 1", title: "Adjacency Matrix to Adjacency List Converter", desc: "Build an adjacency list from a dense matrix representation in O(V²) time." },
  { id: 7, tier: "Level 1", title: "Count Odd Degree Vertices (Handshaking Lemma)", desc: "Validate that the number of vertices with odd degree in any undirected graph is always even." },

  // Level 2: Traversal & Connectivity (8-14)
  { id: 8, tier: "Level 2", title: "Rotting Oranges (LeetCode 994)", desc: "Multi-source BFS level-order traversal: push all initial rotten oranges to queue at minute 0." },
  { id: 9, tier: "Level 2", title: "Number of Islands (LeetCode 200)", desc: "Classic grid DFS/BFS: iterate through grid; whenever '1' found, increment count and flood-fill sink to '0'." },
  { id: 10, tier: "Level 2", title: "Max Area of Island (LeetCode 695)", desc: "DFS return area count: explore 4 directions summing up connected land cells." },
  { id: 11, tier: "Level 2", title: "Number of Provinces (LeetCode 547)", desc: "Find connected components in an adjacency matrix using visited array and DFS/BFS." },
  { id: 12, tier: "Level 2", title: "Surrounded Regions (LeetCode 130)", desc: "Boundary DFS: flood-fill all 'O's connected to grid boundary, then flip unreached interior 'O's to 'X'." },
  { id: 13, tier: "Level 2", title: "01 Matrix (LeetCode 542)", desc: "Multi-source BFS from all 0-cells outwards to compute shortest distance to nearest 0 in O(R*C)." },
  { id: 14, tier: "Level 2", title: "Shortest Path in Binary Matrix (LeetCode 1091)", desc: "8-directional BFS in binary grid to find shortest path from top-left to bottom-right." },

  // Level 3: Cycle Detection & Bipartite Graphs (15-21)
  { id: 15, tier: "Level 3", title: "Is Graph Bipartite? (LeetCode 785)", desc: "Two-coloring via BFS/DFS: assign alternating colors {0, 1}; if adjacent nodes share color, return false." },
  { id: 16, tier: "Level 3", title: "Course Schedule (LeetCode 207)", desc: "Detect directed cycle in course prerequisite graph using 3-state DFS or Kahn's in-degree algorithm." },
  { id: 17, tier: "Level 3", title: "Course Schedule II (LeetCode 210)", desc: "Return valid topological ordering using Kahn's algorithm or reverse post-order DFS." },
  { id: 18, tier: "Level 3", title: "Possible Bipartition (LeetCode 886)", desc: "Build dislike graph and verify 2-colorability to split people into two non-conflicting groups." },
  { id: 19, tier: "Level 3", title: "Graph Valid Tree (LeetCode 261)", desc: "Graph is a tree iff it has exactly V-1 edges and is connected (cycle-free undirected DFS)." },
  { id: 20, tier: "Level 3", title: "Detect Cycle in Undirected Graph (BFS Parent Tracking)", desc: "Queue-based cycle check storing Pair(node, parent); flag cycle if neighbor visited && neighbor != parent." },
  { id: 21, tier: "Level 3", title: "Find Eventual Safe States (LeetCode 802)", desc: "3-state coloring: nodes not involved in any cycle or pointing to cycles are safe states." },

  // Level 4: Topological Sorting & DAGs (22-28)
  { id: 22, tier: "Level 4", title: "Alien Dictionary (LeetCode 269)", desc: "Construct DAG from adjacent lexicographical words and extract character alphabet via Kahn's Topo Sort." },
  { id: 23, tier: "Level 4", title: "Sequence Reconstruction (LeetCode 444)", desc: "Check if a sequence can be uniquely reconstructed by ensuring Topo queue size is strictly 1 at all times." },
  { id: 24, tier: "Level 4", title: "Minimum Height Trees (LeetCode 310)", desc: "Prune leaf nodes (degree 1) iteratively in topological peel layers until 1 or 2 centroid roots remain." },
  { id: 25, tier: "Level 4", title: "All Ancestors of a Node in a DAG (LeetCode 2192)", desc: "Topological sort or reverse DFS from each node to gather sorted ancestors." },
  { id: 26, tier: "Level 4", title: "Longest Path in a DAG", desc: "Process nodes in topological order and relax distances with dist[v] = max(dist[v], dist[u] + weight)." },
  { id: 27, tier: "Level 4", title: "Parallel Courses (LeetCode 1136)", desc: "BFS topological sort counting level semesters to complete all N university courses." },
  { id: 28, tier: "Level 4", title: "Sort Items by Groups Respecting Dependencies (LeetCode 1203)", desc: "Dual-level topological sort: topological sort on group DAG and topological sort on intra-group items." },

  // Level 5: Strongly Connected Components, Bridges & Articulation Points (29-35)
  { id: 29, tier: "Level 5", title: "Critical Connections in a Network (LeetCode 1192)", desc: "Tarjan's Bridge algorithm: return all edges (u, v) where low[v] > disc[u] in O(V + E)." },
  { id: 30, tier: "Level 5", title: "Tarjan's Articulation Points Extraction", desc: "Identify all cut vertices whose removal increases the number of connected components." },
  { id: 31, tier: "Level 5", title: "Kosaraju's SCC Decomposition in Java", desc: "Two-pass DFS algorithm with transposed graph to partition directed graph into maximal SCCs." },
  { id: 32, tier: "Level 5", title: "Tarjan's SCC Single-Pass Algorithm", desc: "Stack-based SCC extraction using disc[] and low[] values in a single recursive DFS pass." },
  { id: 33, tier: "Level 5", title: "Redundant Connection (LeetCode 684)", desc: "Find edge that creates a cycle in an undirected graph using DSU union-find or DFS." },
  { id: 34, tier: "Level 5", title: "Redundant Connection II (LeetCode 685)", desc: "Handle directed graph with either two parents, a directed cycle, or both." },
  { id: 35, tier: "Level 5", title: "Accounts Merge (LeetCode 721)", desc: "Connect emails sharing the same account using Disjoint Set Union or connected component DFS." }
];

const WB2_NODES = [
  { id: 0, x: 70, y: 70 },
  { id: 1, x: 200, y: 50 },
  { id: 2, x: 100, y: 180 },
  { id: 3, x: 280, y: 150 },
  { id: 4, x: 220, y: 240 },
  { id: 5, x: 340, y: 240 }
];

const WB2_EDGES = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [3, 5], [4, 5]
];

export default function JavaGraphTheory() {
  const navigate = useNavigate();

  // Navigation / View Tabs
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "workbenches" | "quiz" | "labs"
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [activeWorkbench, setActiveWorkbench] = useState(1); // 1 to 8

  // Search & Filter for Curriculum
  const [searchQuery, setSearchQuery] = useState("");

  // Quiz state
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Labs Tracker state
  const [labStatus, setLabStatus] = useState(() => {
    try {
      const saved = localStorage.getItem("java_m17_labs_status");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleLab = (id) => {
    setLabStatus(prev => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("java_m17_labs_status", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const completedLabsCount = useMemo(() => {
    return Object.values(labStatus).filter(Boolean).length;
  }, [labStatus]);

  // Quiz evaluation
  const score = useMemo(() => {
    if (!quizSubmitted) return 0;
    return QUIZ_QUESTIONS.reduce((acc, q) => {
      return acc + (userAnswers[q.id] === q.correct ? 1 : 0);
    }, 0);
  }, [quizSubmitted, userAnswers]);

  // --- WORKBENCH 1: GRAPH REPRESENTATION PLAYGROUND ---
  const [wb1GraphType, setWb1GraphType] = useState("undirected"); // "undirected" | "directed"
  const [wb1VCount, setWb1VCount] = useState(5);
  const [wb1Edges, setWb1Edges] = useState([
    [0, 1], [0, 2], [1, 2], [1, 3], [3, 4]
  ]);
  const [wb1NewU, setWb1NewU] = useState(0);
  const [wb1NewV, setWb1NewV] = useState(3);

  const addEdgeWb1 = () => {
    if (wb1NewU >= 0 && wb1NewU < wb1VCount && wb1NewV >= 0 && wb1NewV < wb1VCount && wb1NewU !== wb1NewV) {
      const exists = wb1Edges.some(
        ([u, v]) => (u === wb1NewU && v === wb1NewV) || (wb1GraphType === "undirected" && u === wb1NewV && v === wb1NewU)
      );
      if (!exists) {
        setWb1Edges([...wb1Edges, [wb1NewU, wb1NewV]]);
      }
    }
  };

  const removeEdgeWb1 = (index) => {
    setWb1Edges(wb1Edges.filter((_, idx) => idx !== index));
  };

  const wb1AdjMatrix = useMemo(() => {
    const mat = Array.from({ length: wb1VCount }, () => Array(wb1VCount).fill(0));
    wb1Edges.forEach(([u, v]) => {
      if (u < wb1VCount && v < wb1VCount) {
        mat[u][v] = 1;
        if (wb1GraphType === "undirected") {
          mat[v][u] = 1;
        }
      }
    });
    return mat;
  }, [wb1VCount, wb1Edges, wb1GraphType]);

  const wb1AdjList = useMemo(() => {
    const list = Array.from({ length: wb1VCount }, () => []);
    wb1Edges.forEach(([u, v]) => {
      if (u < wb1VCount && v < wb1VCount) {
        list[u].push(v);
        if (wb1GraphType === "undirected") {
          list[v].push(u);
        }
      }
    });
    list.forEach(neighbors => neighbors.sort((a, b) => a - b));
    return list;
  }, [wb1VCount, wb1Edges, wb1GraphType]);

  // --- WORKBENCH 2: BFS VISUALIZER ---
  const [wb2Step, setWb2Step] = useState(0);
  const wb2History = useMemo(() => {
    // Generate BFS steps
    const adj = Array.from({ length: 6 }, () => []);
    WB2_EDGES.forEach(([u, v]) => {
      adj[u].push(v);
      adj[v].push(u);
    });
    adj.forEach(l => l.sort((a, b) => a - b));

    const steps = [];
    const queue = [0];
    const visited = [true, false, false, false, false, false];
    const dist = [0, -1, -1, -1, -1, -1];
    const order = [];

    steps.push({
      curr: null,
      queue: [...queue],
      visited: [...visited],
      dist: [...dist],
      order: [...order],
      note: "Initial State: Start at Vertex 0. Enqueue [0], visited[0] = true, dist[0] = 0."
    });

    while (queue.length > 0) {
      const u = queue.shift();
      order.push(u);
      steps.push({
        curr: u,
        queue: [...queue],
        visited: [...visited],
        dist: [...dist],
        order: [...order],
        note: `Dequeued vertex ${u}. Inspecting adjacent neighbors: [${adj[u].join(", ")}].`
      });

      for (const v of adj[u]) {
        if (!visited[v]) {
          visited[v] = true;
          dist[v] = dist[u] + 1;
          queue.push(v);
          steps.push({
            curr: u,
            neighbor: v,
            queue: [...queue],
            visited: [...visited],
            dist: [...dist],
            order: [...order],
            note: `Discovered unvisited neighbor ${v}. Set dist[${v}] = ${dist[v]}, Enqueue [${queue.join(", ")}].`
          });
        }
      }
    }

    steps.push({
      curr: null,
      queue: [],
      visited: [...visited],
      dist: [...dist],
      order: [...order],
      note: `BFS Complete! Final traversal order: [${order.join(" -> ")}].`
    });

    return steps;
  }, []);

  const curWb2 = wb2History[Math.min(wb2Step, wb2History.length - 1)];

  // --- WORKBENCH 3: DFS VISUALIZER ---
  const [wb3Step, setWb3Step] = useState(0);
  const wb3History = useMemo(() => {
    const adj = [
      [1, 2],    // 0
      [0, 3, 4], // 1
      [0, 5],    // 2
      [1],       // 3
      [1, 5],    // 4
      [2, 4]     // 5
    ];
    const steps = [];
    const visited = [false, false, false, false, false, false];
    const stack = [];
    const path = [];

    function dfs(u, p) {
      visited[u] = true;
      stack.push(u);
      path.push(u);
      steps.push({
        curr: u,
        parent: p,
        stack: [...stack],
        visited: [...visited],
        path: [...path],
        action: "VISIT",
        note: `Enter dfs(${u}). Pushed to call stack. Stack: [${stack.join(", ")}].`
      });

      for (const v of adj[u]) {
        if (!visited[v]) {
          steps.push({
            curr: u,
            next: v,
            stack: [...stack],
            visited: [...visited],
            path: [...path],
            action: "DISCOVER",
            note: `From ${u}, neighbor ${v} is unvisited. Recursive call dfs(${v}).`
          });
          dfs(v, u);
          steps.push({
            curr: u,
            backFrom: v,
            stack: [...stack],
            visited: [...visited],
            path: [...path],
            action: "RESUME",
            note: `Returned to dfs(${u}) from ${v}. Continuing neighbor scan.`
          });
        }
      }

      stack.pop();
      steps.push({
        curr: u,
        stack: [...stack],
        visited: [...visited],
        path: [...path],
        action: "BACKTRACK",
        note: `Exiting dfs(${u}). Popped from call stack. Stack: [${stack.join(", ")}].`
      });
    }

    dfs(0, -1);
    steps.push({
      curr: null,
      stack: [],
      visited: [...visited],
      path: [...path],
      action: "DONE",
      note: `DFS Complete! Full exploration path: [${path.join(" -> ")}].`
    });
    return steps;
  }, []);

  const curWb3 = wb3History[Math.min(wb3Step, wb3History.length - 1)];

  // --- WORKBENCH 4: CONNECTED COMPONENTS ---
  const [wb4SelectedComp, setWb4SelectedComp] = useState(null);
  const wb4Components = [
    { id: 1, name: "Component A (Alpha)", color: "emerald", nodes: [0, 1, 2], edges: [[0, 1], [1, 2], [2, 0]] },
    { id: 2, name: "Component B (Beta)", color: "cyan", nodes: [3, 4, 5, 6], edges: [[3, 4], [4, 5], [5, 6], [3, 6]] },
    { id: 3, name: "Component C (Gamma)", color: "amber", nodes: [7, 8], edges: [[7, 8]] }
  ];

  // --- WORKBENCH 5: CYCLE DETECTION ---
  const [wb5Mode, setWb5Mode] = useState("undirected"); // "undirected" | "directed"
  const [wb5Step, setWb5Step] = useState(0);

  const wb5UndirectedTrace = [
    { curr: 0, parent: -1, visited: [true, false, false, false], cycleFound: false, note: "Start DFS at 0. parent = -1. visited[0] = true." },
    { curr: 1, parent: 0, visited: [true, true, false, false], cycleFound: false, note: "Traverse 0 -> 1. parent = 0. visited[1] = true." },
    { curr: 2, parent: 1, visited: [true, true, true, false], cycleFound: false, note: "Traverse 1 -> 2. parent = 1. visited[2] = true." },
    { curr: 2, neighbor: 0, parent: 1, visited: [true, true, true, false], cycleFound: true, note: "From 2, neighbor 0 is visited and 0 != parent(1) -> CYCLE DETECTED!" }
  ];

  const wb5DirectedTrace = [
    { curr: 0, state: ["GRAY", "WHITE", "WHITE", "WHITE"], cycleFound: false, note: "Visiting node 0 (State: GRAY / in stack)." },
    { curr: 1, state: ["GRAY", "GRAY", "WHITE", "WHITE"], cycleFound: false, note: "Traverse 0 -> 1. Visiting node 1 (State: GRAY)." },
    { curr: 2, state: ["GRAY", "GRAY", "GRAY", "WHITE"], cycleFound: false, note: "Traverse 1 -> 2. Visiting node 2 (State: GRAY)." },
    { curr: 2, neighbor: 0, state: ["GRAY", "GRAY", "GRAY", "WHITE"], cycleFound: true, note: "From 2, neighbor 0 is in state GRAY (Back Edge to active stack) -> DIRECTED CYCLE DETECTED!" }
  ];

  // --- WORKBENCH 6: BIPARTITE TWO-COLORING ---
  const [wb6GraphType, setWb6GraphType] = useState("bipartite"); // "bipartite" (even cycle) | "non-bipartite" (odd cycle triangle)
  const [wb6Step, setWb6Step] = useState(0);

  const wb6BipartiteSteps = [
    { curr: 0, color: [0, -1, -1, -1], conflict: false, note: "Start at Node 0. Assign Color 0 (Orange)." },
    { curr: 1, color: [0, 1, -1, -1], conflict: false, note: "Neighbor 1: Assign opposite Color 1 (Emerald)." },
    { curr: 2, color: [0, 1, 1, -1], conflict: false, note: "Neighbor 2: Assign opposite Color 1 (Emerald)." },
    { curr: 3, color: [0, 1, 1, 0], conflict: false, note: "Neighbor 3 (connected to 1 & 2): Assign opposite Color 0 (Orange). All edges valid. Graph IS Bipartite!" }
  ];

  const wb6OddCycleSteps = [
    { curr: 0, color: [0, -1, -1], conflict: false, note: "Triangle Graph: Start at Node 0. Assign Color 0 (Orange)." },
    { curr: 1, color: [0, 1, -1], conflict: false, note: "Edge (0, 1): Neighbor 1 gets opposite Color 1 (Emerald)." },
    { curr: 2, color: [0, 1, 1], conflict: false, note: "Edge (0, 2): Neighbor 2 gets opposite Color 1 (Emerald)." },
    { curr: 2, neighbor: 1, color: [0, 1, 1], conflict: true, note: "Conflict on Edge (1, 2)! Both endpoints have Color 1 (Emerald). Odd cycle of length 3 detected -> NOT Bipartite!" }
  ];

  // --- WORKBENCH 7: KAHN'S TOPOLOGICAL SORT ---
  const [wb7Step, setWb7Step] = useState(0);
  const wb7Trace = [
    { inDeg: [0, 1, 1, 2, 2], queue: [0], order: [], note: "Step 0: Calculate initial In-Degrees: [0:0, 1:1, 2:1, 3:2, 4:2]. Push in-degree 0 nodes -> Queue: [0]." },
    { inDeg: [0, 0, 0, 2, 2], queue: [1, 2], order: [0], note: "Step 1: Pop 0. Add 0 to Topo Order. Decrement in-degree of 1 and 2. Both become 0! Queue: [1, 2]." },
    { inDeg: [0, 0, 0, 1, 2], queue: [2, 3], order: [0, 1], note: "Step 2: Pop 1. Add 1 to Topo Order. Decrement in-degree of 3 (now 1). Queue: [2]." },
    { inDeg: [0, 0, 0, 0, 1], queue: [3], order: [0, 1, 2], note: "Step 3: Pop 2. Add 2 to Topo Order. Decrement in-degree of 3 (now 0, push 3) and 4 (now 1). Queue: [3]." },
    { inDeg: [0, 0, 0, 0, 0], queue: [4], order: [0, 1, 2, 3], note: "Step 4: Pop 3. Add 3 to Topo Order. Decrement in-degree of 4 (now 0, push 4). Queue: [4]." },
    { inDeg: [0, 0, 0, 0, 0], queue: [], order: [0, 1, 2, 3, 4], note: "Step 5: Pop 4. Add 4 to Topo Order. Queue is empty. Processed 5/5 nodes. Valid Topo Sort: [0, 1, 2, 3, 4]!" }
  ];

  // --- WORKBENCH 8: KOSARAJU & TARJAN SCC / BRIDGES ---
  const [wb8Mode, setWb8Mode] = useState("kosaraju"); // "kosaraju" | "tarjan_bridge"
  const [wb8Step, setWb8Step] = useState(0);

  const wb8KosarajuSteps = [
    { phase: "Pass 1 (DFS Finish Times)", stack: [0, 1, 2, 3, 4], note: "Run DFS on original graph to record finish times. Stack top to bottom: [4, 3, 2, 1, 0]." },
    { phase: "Graph Transposition", note: "Reverse all directed edges: u -> v becomes v -> u. SCC sources become sinks." },
    { phase: "Pass 2 (DFS on Transposed)", scc: ["SCC 1: {0, 1, 2}", "SCC 2: {3}", "SCC 3: {4}"], note: "Pop nodes from stack; DFS extracts SCC 1: {0, 1, 2}, SCC 2: {3}, SCC 3: {4}. Total 3 SCCs found!" }
  ];

  const wb8TarjanBridgeSteps = [
    { disc: [0, 1, 2, 3], low: [0, 0, 0, 3], note: "Node 0 (disc=0, low=0), Node 1 (disc=1, low=0), Node 2 (disc=2, low=0). Back edge (2, 0) updates low[1]=0, low[2]=0." },
    { disc: [0, 1, 2, 3], low: [0, 0, 0, 3], bridge: [1, 3], note: "DFS explores edge (1, 3) to Node 3. Node 3 has disc=3, low=3. Checking low[3] > disc[1]: 3 > 1 is TRUE!" },
    { disc: [0, 1, 2, 3], low: [0, 0, 0, 3], bridge: [1, 3], isCut: true, note: "Edge (1, 3) is a CRITICAL BRIDGE! Removing (1, 3) disconnects Node 3. Vertex 1 is an Articulation Point!" }
  ];

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return JAVA_GRAPH_THEORY_SECTIONS;
    const q = searchQuery.toLowerCase();
    return JAVA_GRAPH_THEORY_SECTIONS.filter(
      sec => sec.title.toLowerCase().includes(q) || sec.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-6 sm:px-8 sm:py-10 md:px-12 font-sans antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Module Navigation Header */}
        <ModuleNav
          track="java"
          currentModuleId="graph-theory"
        />

        {/* Hero Header */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Network size={13} />
              Module 17 · Java + DSA Master Course
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              Graph Representations &amp; Traversals
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#18181b] tracking-tight">
            Graph Theory &amp; Graph Algorithms
          </h1>

          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Master adjacency lists, adjacency matrices, BFS, DFS, cycle detection, bipartite testing, topological sort (Kahn's and DFS), and connected component algorithms in Java.
          </p>
        </header>

        {/* View Mode Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "curriculum"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <BookOpen size={16} className={activeTab === "curriculum" ? "text-orange-400" : "text-stone-400"} />
            <span>Curriculum</span>
          </button>
          <button
            onClick={() => setActiveTab("workbenches")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "workbenches"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Cpu size={16} className={activeTab === "workbenches" ? "text-orange-400" : "text-stone-400"} />
            <span>8 Workbenches</span>
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "quiz"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <HelpCircle size={16} className={activeTab === "quiz" ? "text-orange-400" : "text-stone-400"} />
            <span>Assessment Quiz</span>
          </button>
          <button
            onClick={() => setActiveTab("labs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "labs"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Award size={16} className={activeTab === "labs" ? "text-orange-400" : "text-stone-400"} />
            <span>35 Practice Labs</span>
          </button>
        </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col">
        {/* TAB 1: CURRICULUM CONTENT READER */}
        {activeTab === "curriculum" && (
          <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 lg:px-8 py-6 gap-6">
            {/* Sidebar Section List */}
            <aside className="w-full lg:w-80 shrink-0 bg-white border border-[#e7e3da] rounded-2xl p-4 flex flex-col h-fit lg:sticky lg:top-20 max-h-[85vh]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-orange-400" />
                  Sections (25)
                </span>
                <span className="text-[10px] text-stone-500 font-mono">Module 17</span>
              </div>

              {/* Search box */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-stone-500" />
                <input
                  type="text"
                  placeholder="Filter 25 sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border border-[#e7e3da] rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-800 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Section Buttons */}
              <div className="overflow-y-auto space-y-1 pr-1 custom-scrollbar dark-scrollbar">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    title={sec.title}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-start justify-between ${
                      activeSectionId === sec.id
                        ? "bg-orange-500/15 text-orange-300 border border-orange-500/40 font-semibold"
                        : "text-stone-500 hover:bg-stone-100/60 hover:text-stone-800"
                    }`}
                  >
                    <span className="break-words whitespace-normal leading-snug pr-2 flex-1">{sec.title}</span>
                    <span className="text-[10px] font-mono text-stone-500 shrink-0 mt-0.5">#{sec.id}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Reading Content Pane */}
            <main className="flex-1 bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 min-w-0">
              {(() => {
                const currentSec = JAVA_GRAPH_THEORY_SECTIONS.find(s => s.id === activeSectionId) || JAVA_GRAPH_THEORY_SECTIONS[0];
                return (
                  <div>
                    {/* Section Header */}
                    <div className="border-b border-[#e7e3da] pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            {currentSec.id === 0
                              ? "Module Overview · 25 Core Sections"
                              : `Section ${currentSec.id} of 25`}
                          </span>
                          <span className="text-xs text-stone-500">PrepSpaces Java Masterclass</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-white">{currentSec.title}</h2>
                        <p className="text-xs text-stone-500 mt-1">{currentSec.summary}</p>
                      </div>

                      {/* Jump to Workbench CTA */}
                      <button
                        onClick={() => {
                          setActiveTab("workbenches");
                          if (currentSec.id <= 6) setActiveWorkbench(1);
                          else if (currentSec.id <= 7) setActiveWorkbench(2);
                          else if (currentSec.id <= 9) setActiveWorkbench(3);
                          else if (currentSec.id === 10) setActiveWorkbench(4);
                          else if (currentSec.id === 11) setActiveWorkbench(5);
                          else if (currentSec.id === 12) setActiveWorkbench(6);
                          else if (currentSec.id <= 14) setActiveWorkbench(7);
                          else setActiveWorkbench(8);
                        }}
                        className="px-3.5 py-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-semibold flex items-center gap-2 transition shrink-0"
                      >
                        <Cpu className="w-3.5 h-3.5 text-orange-400" />
                        Open Interactive Visualizer
                      </button>
                    </div>

                    {/* Section Content */}
                    <div className="prose prose-invert max-w-none text-stone-800">
                      {currentSec.content}
                    </div>

                    {/* Bottom Navigation between sections */}
                    <div className="mt-12 pt-6 border-t border-[#e7e3da] flex items-center justify-between">
                      <button
                        disabled={activeSectionId === 0}
                        onClick={() => setActiveSectionId(prev => Math.max(0, prev - 1))}
                        className="px-4 py-2 rounded-xl border border-[#e7e3da] bg-white hover:bg-stone-100 text-xs font-semibold text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Previous Section
                      </button>
                      <button
                        disabled={activeSectionId === JAVA_GRAPH_THEORY_SECTIONS.length - 1}
                        onClick={() => setActiveSectionId(prev => Math.min(JAVA_GRAPH_THEORY_SECTIONS.length - 1, prev + 1))}
                        className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-500 text-white text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition shadow-md shadow-orange-500/20"
                      >
                        Next Section
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </main>
          </div>
        )}

        {/* TAB 2: 8 INTERACTIVE WORKBENCHES */}
        {activeTab === "workbenches" && (
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-6 flex flex-col gap-6">
            {/* Workbench Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {[
                { id: 1, title: "1. Representations", icon: Share2 },
                { id: 2, title: "2. BFS Queue", icon: Activity },
                { id: 3, title: "3. DFS Call Stack", icon: GitMerge },
                { id: 4, title: "4. Components", icon: Network },
                { id: 5, title: "5. Cycle Detection", icon: RefreshCw },
                { id: 6, title: "6. Bipartite 2-Color", icon: Layers },
                { id: 7, title: "7. Kahn's Topo Sort", icon: Clock },
                { id: 8, title: "8. Kosaraju / Tarjan", icon: Cpu }
              ].map((wb) => {
                const Icon = wb.icon;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 ${
                      activeWorkbench === wb.id
                        ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                        : "bg-white border-[#e7e3da] text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-orange-300" />
                    <span className="text-xs font-bold" title={wb.title}>{wb.title}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: GRAPH REPRESENTATION PLAYGROUND */}
            {activeWorkbench === 1 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 1
                    </span>
                    <span className="text-xs text-stone-500">Graph Representations & Data Structures</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Interactive Graph Representation Playground</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Configure vertices and edges to compare Adjacency Matrix O(V²), Adjacency List O(V + E), and Edge List O(E) in real time.
                  </p>
                </div>

                {/* Graph Controls */}
                <div className="flex flex-wrap items-center gap-4 bg-stone-50 p-4 rounded-xl border border-[#e7e3da] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-500 font-semibold">Graph Mode:</span>
                    <button
                      onClick={() => setWb1GraphType("undirected")}
                      className={`px-3 py-1 rounded-lg ${wb1GraphType === "undirected" ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-500"}`}
                    >
                      Undirected
                    </button>
                    <button
                      onClick={() => setWb1GraphType("directed")}
                      className={`px-3 py-1 rounded-lg ${wb1GraphType === "directed" ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-500"}`}
                    >
                      Directed
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-stone-500 font-semibold">Vertices V:</span>
                    <select
                      value={wb1VCount}
                      onChange={(e) => setWb1VCount(Number(e.target.value))}
                      className="bg-stone-100 border border-stone-200 rounded-lg px-2 py-1 text-stone-800"
                    >
                      <option value={4}>4 Vertices (0..3)</option>
                      <option value={5}>5 Vertices (0..4)</option>
                      <option value={6}>6 Vertices (0..5)</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-stone-500 font-semibold">Add Edge:</span>
                    <span className="text-stone-500">u:</span>
                    <input
                      type="number"
                      min={0}
                      max={wb1VCount - 1}
                      value={wb1NewU}
                      onChange={(e) => setWb1NewU(Number(e.target.value))}
                      className="w-12 bg-stone-100 border border-stone-200 rounded px-1.5 py-0.5 text-center"
                    />
                    <span className="text-stone-500">v:</span>
                    <input
                      type="number"
                      min={0}
                      max={wb1VCount - 1}
                      value={wb1NewV}
                      onChange={(e) => setWb1NewV(Number(e.target.value))}
                      className="w-12 bg-stone-100 border border-stone-200 rounded px-1.5 py-0.5 text-center"
                    />
                    <button
                      onClick={addEdgeWb1}
                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition"
                    >
                      + Add Edge
                    </button>
                  </div>
                </div>

                {/* Representations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Adjacency Matrix */}
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] flex flex-col">
                    <div className="flex items-center justify-between mb-3 border-b border-[#e7e3da] pb-2">
                      <span className="font-bold text-xs text-orange-400 uppercase tracking-wider">1. Adjacency Matrix</span>
                      <span className="text-[10px] font-mono text-stone-500">Space: O(V²) = {wb1VCount * wb1VCount} cells</span>
                    </div>
                    <div className="overflow-x-auto flex-1 flex flex-col items-center justify-center py-2">
                      <div className="grid" style={{ gridTemplateColumns: `repeat(${wb1VCount + 1}, minmax(28px, 1fr))` }}>
                        <div className="text-[11px] font-mono text-stone-500 text-center p-1">u\v</div>
                        {Array.from({ length: wb1VCount }).map((_, c) => (
                          <div key={c} className="text-[11px] font-mono text-orange-400 font-bold text-center p-1">{c}</div>
                        ))}
                        {wb1AdjMatrix.map((row, r) => (
                          <React.Fragment key={r}>
                            <div className="text-[11px] font-mono text-orange-400 font-bold text-center p-1">{r}</div>
                            {row.map((cell, c) => (
                              <div
                                key={c}
                                className={`text-xs font-mono text-center p-1 m-0.5 rounded ${
                                  cell === 1 ? "bg-orange-500 text-white font-bold" : "bg-white text-stone-500"
                                }`}
                              >
                                {cell}
                              </div>
                            ))}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-2">
                      Edge lookup (u, v): <strong className="text-emerald-400">O(1)</strong> | Neighbors scan: <strong className="text-amber-400">O(V)</strong>
                    </p>
                  </div>

                  {/* Adjacency List */}
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] flex flex-col">
                    <div className="flex items-center justify-between mb-3 border-b border-[#e7e3da] pb-2">
                      <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider">2. Adjacency List</span>
                      <span className="text-[10px] font-mono text-stone-500">Space: O(V + E)</span>
                    </div>
                    <div className="space-y-1.5 flex-1 overflow-y-auto">
                      {wb1AdjList.map((neighbors, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-mono bg-white p-2 rounded-lg border border-[#e7e3da]">
                          <span className="w-6 h-6 rounded bg-orange-500 text-white font-bold flex items-center justify-center shrink-0">
                            {idx}
                          </span>
                          <span className="text-stone-500">→</span>
                          {neighbors.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {neighbors.map((nb, i) => (
                                <span key={i} className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px]">
                                  {nb}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-stone-500 italic text-[11px]">empty (no outgoing)</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-stone-500 mt-2">
                      Edge lookup: <strong className="text-amber-400">O(deg)</strong> | Neighbors scan: <strong className="text-emerald-400">O(deg)</strong>
                    </p>
                  </div>

                  {/* Edge List */}
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] flex flex-col">
                    <div className="flex items-center justify-between mb-3 border-b border-[#e7e3da] pb-2">
                      <span className="font-bold text-xs text-amber-400 uppercase tracking-wider">3. Edge List</span>
                      <span className="text-[10px] font-mono text-stone-500">Total: {wb1Edges.length} edges</span>
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-48 space-y-1">
                      {wb1Edges.length > 0 ? (
                        wb1Edges.map(([u, v], idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-[#e7e3da] text-xs font-mono">
                            <span className="text-stone-800">
                              [{u} {wb1GraphType === "directed" ? "→" : "—"} {v}]
                            </span>
                            <button
                              onClick={() => removeEdgeWb1(idx)}
                              className="text-[11px] text-rose-400 hover:text-rose-300 px-1.5 py-0.5 rounded bg-rose-500/10 hover:bg-rose-500/20"
                            >
                              Remove
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-stone-500 text-xs text-center py-4">No edges defined.</p>
                      )}
                    </div>
                    <p className="text-[11px] text-stone-500 mt-2">
                      Best suited for: <strong className="text-orange-300">Kruskal's MST / Bellman-Ford</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: BFS VISUALIZER */}
            {activeWorkbench === 2 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 2
                    </span>
                    <span className="text-xs text-stone-500">Level-Order Traversal & Queue Dynamics</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Breadth-First Search (BFS) Visualizer</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Step through BFS execution on an unweighted graph. Observe FIFO Queue state, Visited tracking, and shortest path hop distances.
                  </p>
                </div>

                {/* Graph SVG & State Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* SVG Graph */}
                  <div className="bg-stone-50 p-4 rounded-xl border border-[#e7e3da] flex flex-col items-center justify-center min-h-[300px]">
                    <svg width="420" height="290" className="overflow-visible">
                      {/* Edges */}
                      {WB2_EDGES.map(([u, v], i) => {
                        const n1 = WB2_NODES[u];
                        const n2 = WB2_NODES[v];
                        const isVisitedEdge = curWb2.visited[u] && curWb2.visited[v];
                        return (
                          <line
                            key={i}
                            x1={n1.x}
                            y1={n1.y}
                            x2={n2.x}
                            y2={n2.y}
                            stroke={isVisitedEdge ? "#6366f1" : "#334155"}
                            strokeWidth={isVisitedEdge ? "2.5" : "1.5"}
                            strokeDasharray={isVisitedEdge ? "none" : "3 3"}
                          />
                        );
                      })}

                      {/* Nodes */}
                      {WB2_NODES.map((n) => {
                        const isCurr = curWb2.curr === n.id;
                        const isVis = curWb2.visited[n.id];
                        const inQ = curWb2.queue.includes(n.id);
                        return (
                          <g key={n.id} className="cursor-pointer">
                            <circle
                              cx={n.x}
                              cy={n.y}
                              r={isCurr ? 20 : 16}
                              className={`transition-all duration-300 ${
                                isCurr
                                  ? "fill-amber-500 stroke-amber-300 stroke-2"
                                  : inQ
                                  ? "fill-orange-500 stroke-orange-400 stroke-2"
                                  : isVis
                                  ? "fill-emerald-600 stroke-emerald-400"
                                  : "fill-slate-800 stroke-slate-600"
                              }`}
                            />
                            <text
                              x={n.x}
                              y={n.y + 4}
                              textAnchor="middle"
                              fill="#ffffff"
                              fontSize="12"
                              fontWeight="bold"
                              fontFamily="monospace"
                            >
                              {n.id}
                            </text>
                            {/* Distance Label */}
                            {curWb2.dist[n.id] >= 0 && (
                              <text
                                x={n.x}
                                y={n.y - 20}
                                textAnchor="middle"
                                fill="#a5b4fc"
                                fontSize="10"
                                fontFamily="monospace"
                              >
                                d={curWb2.dist[n.id]}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </svg>

                    <div className="flex items-center gap-4 text-[11px] text-stone-500 mt-2">
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500"></span> Currently Dequeued</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-orange-500"></span> In Queue</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-600"></span> Visited</span>
                    </div>
                  </div>

                  {/* Simulator State Panel */}
                  <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between gap-4">
                    <div className="space-y-4">
                      {/* Step Note */}
                      <div className="p-3 rounded-xl bg-white border border-[#e7e3da] text-xs text-orange-300 font-mono leading-relaxed">
                        {curWb2.note}
                      </div>

                      {/* Queue State */}
                      <div>
                        <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                          FIFO Queue State (Queue&lt;Integer&gt;)
                        </span>
                        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-[#e7e3da] min-h-[42px] overflow-x-auto">
                          {curWb2.queue.length > 0 ? (
                            curWb2.queue.map((item, idx) => (
                              <span
                                key={idx}
                                className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                                  idx === 0 ? "bg-amber-500 text-slate-950" : "bg-orange-500 text-white"
                                }`}
                              >
                                {item} {idx === 0 && "(Head)"}
                              </span>
                            ))
                          ) : (
                            <span className="text-stone-500 text-xs font-mono">[ Empty Queue ]</span>
                          )}
                        </div>
                      </div>

                      {/* Traversal Order & Distances */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
                          <span className="text-[11px] font-bold text-stone-500 block mb-1">Visited Array</span>
                          <div className="flex flex-wrap gap-1">
                            {curWb2.visited.map((v, i) => (
                              <span
                                key={i}
                                className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                                  v ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-stone-100 text-stone-500"
                                }`}
                              >
                                {i}:{v ? "T" : "F"}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
                          <span className="text-[11px] font-bold text-stone-500 block mb-1">BFS Output Order</span>
                          <span className="text-xs font-mono text-emerald-400 font-bold">
                            {curWb2.order.length > 0 ? curWb2.order.join(" → ") : "—"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Step Controls */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#e7e3da]">
                      <button
                        onClick={() => setWb2Step(0)}
                        className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                      >
                        Reset
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={wb2Step === 0}
                          onClick={() => setWb2Step(prev => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 disabled:opacity-40"
                        >
                          Prev Step
                        </button>
                        <span className="text-xs font-mono text-stone-500">
                          {wb2Step + 1}/{wb2History.length}
                        </span>
                        <button
                          disabled={wb2Step === wb2History.length - 1}
                          onClick={() => setWb2Step(prev => Math.min(wb2History.length - 1, prev + 1))}
                          className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40 shadow-md shadow-orange-500/20"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: DFS CALL STACK STUDIO */}
            {activeWorkbench === 3 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 3
                    </span>
                    <span className="text-xs text-stone-500">Recursion, Call Stack & Backtracking</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Depth-First Search (DFS) & Call Stack Studio</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Visualize how JVM recursion pushes and pops stack frames during DFS traversal and backtracking.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Call Stack Visualizer */}
                  <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#e7e3da] pb-2 mb-4">
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          JVM Call Stack (LIFO)
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">Depth: {curWb3.stack.length}</span>
                      </div>

                      <div className="flex flex-col-reverse gap-2 min-h-[220px] p-3 bg-white rounded-xl border border-[#e7e3da] justify-start">
                        {curWb3.stack.length > 0 ? (
                          curWb3.stack.map((frame, idx) => (
                            <div
                              key={idx}
                              className={`p-2.5 rounded-lg border font-mono text-xs flex items-center justify-between ${
                                idx === curWb3.stack.length - 1
                                  ? "bg-orange-500/20 border-orange-500 text-orange-200 font-bold"
                                  : "bg-stone-100/80 border-stone-200 text-stone-700"
                              }`}
                            >
                              <span>dfs(node = {frame})</span>
                              <span className="text-[10px] text-stone-500">
                                {idx === curWb3.stack.length - 1 ? "[ACTIVE FRAME]" : `depth: ${idx}`}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="text-center text-stone-500 text-xs py-10 font-mono">
                            Call Stack is empty (Base Case Reached / Complete)
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#e7e3da] text-xs text-stone-500">
                      Action Type: <strong className="text-orange-300 font-mono">{curWb3.action}</strong>
                    </div>
                  </div>

                  {/* Trace Log & Step Controls */}
                  <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between gap-4">
                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-white border border-[#e7e3da] text-xs text-orange-300 font-mono leading-relaxed">
                        {curWb3.note}
                      </div>

                      <div>
                        <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                          Discovery Path (Order of First Visit)
                        </span>
                        <div className="p-2.5 bg-white rounded-lg border border-[#e7e3da] text-xs font-mono text-emerald-400 font-bold">
                          {curWb3.path.join(" → ")}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                          Visited Status (boolean[] visited)
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {curWb3.visited.map((v, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 rounded text-xs font-mono ${
                                v ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-stone-100 text-stone-500"
                              }`}
                            >
                              node {i}: {v ? "true" : "false"}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Step Controls */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#e7e3da]">
                      <button
                        onClick={() => setWb3Step(0)}
                        className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                      >
                        Reset
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={wb3Step === 0}
                          onClick={() => setWb3Step(prev => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 disabled:opacity-40"
                        >
                          Prev Step
                        </button>
                        <span className="text-xs font-mono text-stone-500">
                          {wb3Step + 1}/{wb3History.length}
                        </span>
                        <button
                          disabled={wb3Step === wb3History.length - 1}
                          onClick={() => setWb3Step(prev => Math.min(wb3History.length - 1, prev + 1))}
                          className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40 shadow-md shadow-orange-500/20"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: CONNECTED COMPONENTS EXPLORER */}
            {activeWorkbench === 4 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 4
                    </span>
                    <span className="text-xs text-stone-500">Flood Fill & Subgraph Decomposition</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Connected Components Explorer</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Detect isolated provinces and islands in disconnected graphs using outer-loop component scanning.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {wb4Components.map((comp) => (
                    <div
                      key={comp.id}
                      onClick={() => setWb4SelectedComp(comp.id)}
                      className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                        wb4SelectedComp === comp.id
                          ? "bg-white border-orange-500 shadow-xl"
                          : "bg-stone-50 border-[#e7e3da] hover:border-stone-200"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                            comp.color === "emerald" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" :
                            comp.color === "cyan" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" :
                            "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          }`}>
                            {comp.name}
                          </span>
                          <span className="text-xs font-mono text-stone-500">Size: {comp.nodes.length} Nodes</span>
                        </div>
                        <p className="text-xs text-stone-700 mb-4">
                          Vertices: <strong className="font-mono text-white">[{comp.nodes.join(", ")}]</strong>
                        </p>
                        <div className="text-xs font-mono text-stone-500 space-y-1">
                          {comp.edges.map(([u, v], i) => (
                            <div key={i} className="bg-white px-2 py-1 rounded">
                              Edge ({u}, {v})
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#e7e3da] text-[11px] text-stone-500">
                        Launched via: <code className="text-orange-300">if (!visited[{comp.nodes[0]}]) dfs({comp.nodes[0]});</code>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-[#e7e3da] text-xs text-stone-700 flex items-center justify-between">
                  <span>Total Connected Components: <strong className="text-emerald-400 font-bold">3 Disjoint Provinces</strong></span>
                  <span className="text-stone-500 font-mono">Time: O(V + E) | Space: O(V)</span>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: CYCLE DETECTION STUDIO */}
            {activeWorkbench === 5 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 5
                    </span>
                    <span className="text-xs text-stone-500">Parent-Tracking vs 3-State Recursion Stack</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Cycle Detection Studio</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Compare undirected cycle detection (neighbor != parent) with directed cycle detection (3-Color / RecStack).
                  </p>
                </div>

                {/* Mode Selector */}
                <div className="flex gap-2">
                  <button
                    onClick={() => { setWb5Mode("undirected"); setWb5Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      wb5Mode === "undirected" ? "bg-orange-500 text-white" : "bg-white text-stone-500"
                    }`}
                  >
                    Undirected Graph (Parent Tracking)
                  </button>
                  <button
                    onClick={() => { setWb5Mode("directed"); setWb5Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      wb5Mode === "directed" ? "bg-orange-500 text-white" : "bg-white text-stone-500"
                    }`}
                  >
                    Directed Graph (3-State Back-Edge)
                  </button>
                </div>

                {/* Trace Display */}
                {(() => {
                  const trace = wb5Mode === "undirected" ? wb5UndirectedTrace : wb5DirectedTrace;
                  const cur = trace[Math.min(wb5Step, trace.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-3">
                            Algorithm Rule & Status
                          </span>
                          <div className="p-3 bg-white rounded-xl border border-[#e7e3da] text-xs font-mono text-stone-800 mb-4 leading-relaxed">
                            {wb5Mode === "undirected" ? (
                              <>
                                <strong>Rule:</strong> If neighbor is already visited AND neighbor != parent, an alternate cycle path exists!
                              </>
                            ) : (
                              <>
                                <strong>Rule:</strong> 0 = WHITE (Unvisited), 1 = GRAY (Visiting / in stack), 2 = BLACK (Finished). Cycle occurs if edge leads to GRAY node!
                              </>
                            )}
                          </div>

                          <div className={`p-4 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                            cur.cycleFound ? "bg-rose-500/20 border-rose-500/40 text-rose-300" : "bg-white border-[#e7e3da] text-stone-700"
                          }`}>
                            {cur.cycleFound ? (
                              <>
                                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                                <span>CYCLE CONFIRMED! Alternate / Back edge detected.</span>
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>No cycle on current path. Continuing exploration...</span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#e7e3da] text-xs text-stone-500">
                          Step Note: <span className="text-stone-800">{cur.note}</span>
                        </div>
                      </div>

                      {/* Step Controller */}
                      <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-2">
                            State Inspection
                          </span>
                          {wb5Mode === "undirected" ? (
                            <div className="space-y-2 text-xs font-mono">
                              <div>Current Node: <span className="text-amber-400 font-bold">{cur.curr}</span></div>
                              <div>Immediate Parent: <span className="text-stone-700">{cur.parent}</span></div>
                              <div className="flex gap-2">
                                {cur.visited.map((v, i) => (
                                  <span key={i} className={`px-2 py-1 rounded ${v ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-500"}`}>
                                    v[{i}]: {v ? "T" : "F"}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-2 text-xs font-mono">
                              <div>Current Node: <span className="text-amber-400 font-bold">{cur.curr}</span></div>
                              <div className="flex gap-2">
                                {cur.state.map((s, i) => (
                                  <span key={i} className={`px-2 py-1 rounded ${
                                    s === "GRAY" ? "bg-amber-500 text-slate-950 font-bold" :
                                    s === "BLACK" ? "bg-slate-700 text-stone-700" :
                                    "bg-white text-stone-500"
                                  }`}>
                                    v[{i}]: {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#e7e3da]">
                          <button
                            onClick={() => setWb5Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb5Step === 0}
                              onClick={() => setWb5Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-stone-500">{wb5Step + 1}/{trace.length}</span>
                            <button
                              disabled={wb5Step === trace.length - 1}
                              onClick={() => setWb5Step(p => Math.min(trace.length - 1, p + 1))}
                              className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* WORKBENCH 6: BIPARTITE TWO-COLORING SIMULATOR */}
            {activeWorkbench === 6 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 6
                    </span>
                    <span className="text-xs text-stone-500">Konig's Theorem & Odd Cycle Conflict</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Bipartite Graph Two-Coloring Simulator</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Simulate 2-coloring via BFS/DFS. A graph is bipartite if and only if it contains NO odd-length cycles.
                  </p>
                </div>

                {/* Graph preset toggle */}
                <div className="flex gap-2">
                  <button
                    onClick={() => { setWb6GraphType("bipartite"); setWb6Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      wb6GraphType === "bipartite" ? "bg-orange-500 text-white" : "bg-white text-stone-500"
                    }`}
                  >
                    Bipartite Graph (Even Cycle: Length 4)
                  </button>
                  <button
                    onClick={() => { setWb6GraphType("non-bipartite"); setWb6Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      wb6GraphType === "non-bipartite" ? "bg-orange-500 text-white" : "bg-white text-stone-500"
                    }`}
                  >
                    Non-Bipartite Graph (Odd Cycle: Triangle 3)
                  </button>
                </div>

                {(() => {
                  const steps = wb6GraphType === "bipartite" ? wb6BipartiteSteps : wb6OddCycleSteps;
                  const cur = steps[Math.min(wb6Step, steps.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-3">
                            Step Trace & Conflict Detection
                          </span>
                          <div className="p-3 bg-white rounded-xl border border-[#e7e3da] text-xs font-mono text-stone-800 mb-4 leading-relaxed">
                            {cur.note}
                          </div>

                          <div className={`p-4 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                            cur.conflict ? "bg-rose-500/20 border-rose-500/40 text-rose-300" : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          }`}>
                            {cur.conflict ? (
                              <>
                                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                                <span>ODD CYCLE CONFLICT! Adjacent vertices share Color 1. NOT Bipartite!</span>
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>No color conflict. Alternating colors valid so far.</span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#e7e3da] text-xs text-stone-500">
                          Theorem: <strong className="text-orange-300">Graph is 2-colorable ⟺ No odd cycle</strong>
                        </div>
                      </div>

                      {/* Coloring State */}
                      <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-3">
                            Node Color Assignments (color[] array)
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {cur.color.map((c, i) => (
                              <div
                                key={i}
                                className={`p-3 rounded-lg border font-mono text-xs flex items-center justify-between ${
                                  c === 0 ? "bg-orange-500/20 border-orange-500 text-orange-200 font-bold" :
                                  c === 1 ? "bg-emerald-600/30 border-emerald-500 text-emerald-200 font-bold" :
                                  "bg-white border-[#e7e3da] text-stone-500"
                                }`}
                              >
                                <span>Node {i}</span>
                                <span>{c === 0 ? "Color 0 (Orange)" : c === 1 ? "Color 1 (Emerald)" : "Uncolored (-1)"}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#e7e3da]">
                          <button
                            onClick={() => setWb6Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb6Step === 0}
                              onClick={() => setWb6Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-stone-500">{wb6Step + 1}/{steps.length}</span>
                            <button
                              disabled={wb6Step === steps.length - 1}
                              onClick={() => setWb6Step(p => Math.min(steps.length - 1, p + 1))}
                              className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* WORKBENCH 7: KAHN'S TOPOLOGICAL SORT */}
            {activeWorkbench === 7 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 7
                    </span>
                    <span className="text-xs text-stone-500">In-Degree Queue & Dependency Resolution</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Kahn's Algorithm & In-Degree Topo Sorter</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Simulate BFS-based topological sorting on a Directed Acyclic Graph (DAG) with in-degree tracking.
                  </p>
                </div>

                {(() => {
                  const cur = wb7Trace[Math.min(wb7Step, wb7Trace.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-2">
                            Step Log & Queue Simulation
                          </span>
                          <div className="p-3 bg-white rounded-xl border border-[#e7e3da] text-xs font-mono text-orange-300 mb-4 leading-relaxed">
                            {cur.note}
                          </div>

                          <div className="mb-4">
                            <span className="text-xs font-bold text-stone-700 block mb-1">
                              Zero In-Degree Queue (Ready Tasks)
                            </span>
                            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-[#e7e3da] min-h-[40px]">
                              {cur.queue.length > 0 ? (
                                cur.queue.map((item, i) => (
                                  <span key={i} className="px-2.5 py-1 rounded bg-orange-500 text-white font-mono text-xs font-bold">
                                    Node {item}
                                  </span>
                                ))
                              ) : (
                                <span className="text-stone-500 text-xs font-mono">[ Queue Empty ]</span>
                              )}
                            </div>
                          </div>

                          <div>
                            <span className="text-xs font-bold text-stone-700 block mb-1">
                              Constructed Topological Order
                            </span>
                            <div className="p-2.5 bg-white rounded-lg border border-[#e7e3da] text-xs font-mono text-emerald-400 font-bold">
                              {cur.order.length > 0 ? cur.order.join(" → ") : "—"}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#e7e3da] text-xs text-stone-500">
                          Cycle Check: <strong className="text-emerald-400">{cur.order.length}/5 vertices processed</strong>
                        </div>
                      </div>

                      {/* In-Degree array */}
                      <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-3">
                            In-Degree Array (inDegree[])
                          </span>
                          <div className="space-y-2">
                            {cur.inDeg.map((deg, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#e7e3da] text-xs font-mono">
                                <span>Vertex {i}</span>
                                <span className={`px-2 py-0.5 rounded font-bold ${
                                  deg === 0 ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-stone-100 text-amber-400"
                                }`}>
                                  inDegree = {deg}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#e7e3da]">
                          <button
                            onClick={() => setWb7Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb7Step === 0}
                              onClick={() => setWb7Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-stone-500">{wb7Step + 1}/{wb7Trace.length}</span>
                            <button
                              disabled={wb7Step === wb7Trace.length - 1}
                              onClick={() => setWb7Step(p => Math.min(wb7Trace.length - 1, p + 1))}
                              className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* WORKBENCH 8: KOSARAJU & TARJAN SCC / BRIDGES */}
            {activeWorkbench === 8 && (
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 8
                    </span>
                    <span className="text-xs text-stone-500">Advanced Graph Connectivity & Cut Components</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Kosaraju & Tarjan SCC / Bridges Analyzer</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Explore Strongly Connected Components (SCC) via Kosaraju Transpose and Tarjan Low-Link discovery for Bridges & Articulation Points.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => { setWb8Mode("kosaraju"); setWb8Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      wb8Mode === "kosaraju" ? "bg-orange-500 text-white" : "bg-white text-stone-500"
                    }`}
                  >
                    Kosaraju SCC (Two-Pass Transpose)
                  </button>
                  <button
                    onClick={() => { setWb8Mode("tarjan_bridge"); setWb8Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      wb8Mode === "tarjan_bridge" ? "bg-orange-500 text-white" : "bg-white text-stone-500"
                    }`}
                  >
                    Tarjan Bridges (low[v] &gt; disc[u])
                  </button>
                </div>

                {wb8Mode === "kosaraju" ? (
                  <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                        {wb8KosarajuSteps[wb8Step].phase}
                      </span>
                      <span className="text-xs font-mono text-stone-500">Step {wb8Step + 1} of 3</span>
                    </div>

                    <p className="text-xs text-stone-700">{wb8KosarajuSteps[wb8Step].note}</p>

                    {wb8KosarajuSteps[wb8Step].scc && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {wb8KosarajuSteps[wb8Step].scc.map((item, i) => (
                          <div key={i} className="p-3 bg-white rounded-xl border border-orange-500/40 text-xs font-mono font-bold text-orange-300">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-[#e7e3da]">
                      <button
                        onClick={() => setWb8Step(0)}
                        className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                      >
                        Reset
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={wb8Step === 0}
                          onClick={() => setWb8Step(p => Math.max(0, p - 1))}
                          className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 disabled:opacity-40"
                        >
                          Prev
                        </button>
                        <button
                          disabled={wb8Step === wb8KosarajuSteps.length - 1}
                          onClick={() => setWb8Step(p => Math.min(wb8KosarajuSteps.length - 1, p + 1))}
                          className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-stone-50 p-5 rounded-xl border border-[#e7e3da] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Tarjan Low-Link & Bridge Evaluator
                      </span>
                      <span className="text-xs font-mono text-stone-500">Step {wb8Step + 1} of 3</span>
                    </div>

                    <p className="text-xs text-stone-700">{wb8TarjanBridgeSteps[wb8Step].note}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {wb8TarjanBridgeSteps[wb8Step].disc.map((d, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-white border border-[#e7e3da] text-xs font-mono">
                          <span className="text-orange-400 font-bold">Node {i}:</span>
                          <div className="text-[11px] text-stone-500">disc = {d}</div>
                          <div className="text-[11px] text-emerald-400 font-bold">low = {wb8TarjanBridgeSteps[wb8Step].low[i]}</div>
                        </div>
                      ))}
                    </div>

                    {wb8TarjanBridgeSteps[wb8Step].bridge && (
                      <div className="p-3 bg-amber-500/20 border border-amber-500/40 rounded-xl text-xs font-bold text-amber-300 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        CRITICAL BRIDGE: Edge ({wb8TarjanBridgeSteps[wb8Step].bridge[0]}, {wb8TarjanBridgeSteps[wb8Step].bridge[1]}) satisfies low[v] &gt; disc[u]!
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-[#e7e3da]">
                      <button
                        onClick={() => setWb8Step(0)}
                        className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                      >
                        Reset
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={wb8Step === 0}
                          onClick={() => setWb8Step(p => Math.max(0, p - 1))}
                          className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700 disabled:opacity-40"
                        >
                          Prev
                        </button>
                        <button
                          disabled={wb8Step === wb8TarjanBridgeSteps.length - 1}
                          onClick={() => setWb8Step(p => Math.min(wb8TarjanBridgeSteps.length - 1, p + 1))}
                          className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: 15-QUESTION ASSESSMENT QUIZ */}
        {activeTab === "quiz" && (
          <div className="flex-1 max-w-4xl mx-auto w-full px-4 lg:px-8 py-6 flex flex-col gap-6">
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Evaluation Quiz
                    </span>
                    <span className="text-xs text-stone-500">15 Multiple Choice Questions</span>
                  </div>
                  <h2 className="text-2xl font-black text-white">Module 17 Mastery Assessment</h2>
                </div>

                {quizSubmitted && (
                  <div className="px-4 py-2 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-300 font-bold text-sm">
                    Score: {score} / {QUIZ_QUESTIONS.length} ({Math.round((score / QUIZ_QUESTIONS.length) * 100)}%)
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {QUIZ_QUESTIONS.map((q, idx) => (
                  <div key={q.id} className="p-5 rounded-xl bg-stone-50 border border-[#e7e3da] flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-bold text-stone-800">
                        {idx + 1}. {q.question}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2 mt-1">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAnswers[q.id] === optIdx;
                        let btnStyle = "bg-white border-[#e7e3da] text-stone-700 hover:bg-slate-850";

                        if (quizSubmitted) {
                          if (optIdx === q.correct) {
                            btnStyle = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-semibold";
                          } else if (isSelected) {
                            btnStyle = "bg-rose-500/20 border-rose-500/50 text-rose-300";
                          }
                        } else if (isSelected) {
                          btnStyle = "bg-orange-500/20 border-orange-500 text-orange-200 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                            className={`p-3 rounded-lg border text-left text-xs transition flex items-center gap-3 ${btnStyle}`}
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
                      <div className="mt-2 p-3 rounded-lg bg-white border border-[#e7e3da] text-xs text-stone-500">
                        <strong className="text-orange-400 block mb-0.5">Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit / Retake Button */}
              <div className="pt-4 border-t border-[#e7e3da] flex justify-end gap-3">
                {quizSubmitted ? (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setUserAnswers({});
                    }}
                    className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-white font-bold text-xs transition"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-500 text-white font-bold text-xs transition shadow-lg shadow-orange-500/20"
                  >
                    Submit Answers
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 35 PRACTICE PROBLEMS & LABS TRACKER */}
        {activeTab === "labs" && (
          <div className="flex-1 max-w-5xl mx-auto w-full px-4 lg:px-8 py-6 flex flex-col gap-6">
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Problem Roadmap
                    </span>
                    <span className="text-xs text-stone-500">5 Difficulty Tiers</span>
                  </div>
                  <h2 className="text-2xl font-black text-white">35 FAANG & LeetCode Graph Labs</h2>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-32 bg-stone-50 rounded-full h-2.5 border border-[#e7e3da] overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-500"
                      style={{ width: `${(completedLabsCount / 35) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {completedLabsCount} / 35 Completed
                  </span>
                </div>
              </div>

              {/* Tiers List */}
              {["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"].map((tier) => {
                const problemsInTier = LAB_ASSIGNMENTS.filter(p => p.tier === tier);
                const tierTitles = {
                  "Level 1": "Level 1: Fundamentals & Representations",
                  "Level 2": "Level 2: Traversal & Connectivity (BFS & DFS)",
                  "Level 3": "Level 3: Cycle Detection & Bipartite Graphs",
                  "Level 4": "Level 4: Topological Sorting & DAGs",
                  "Level 5": "Level 5: Strongly Connected Components, Bridges & Articulation Points"
                };

                return (
                  <div key={tier} className="space-y-3">
                    <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      {tierTitles[tier]} ({problemsInTier.length})
                    </h3>

                    <div className="grid grid-cols-1 gap-2">
                      {problemsInTier.map((lab) => {
                        const isDone = !!labStatus[lab.id];
                        return (
                          <div
                            key={lab.id}
                            onClick={() => toggleLab(lab.id)}
                            className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between gap-4 ${
                              isDone
                                ? "bg-emerald-950/20 border-emerald-500/30 text-stone-700"
                                : "bg-stone-50/80 border-[#e7e3da] text-stone-800 hover:border-stone-200"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <button className="mt-0.5 text-stone-500 hover:text-white">
                                {isDone ? (
                                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                                ) : (
                                  <Square className="w-4 h-4 text-slate-600" />
                                )}
                              </button>
                              <div>
                                <span className={`text-xs font-bold block ${isDone ? "line-through text-stone-500" : "text-white"}`}>
                                  {lab.title}
                                </span>
                                <span className="text-[11px] text-stone-500">{lab.desc}</span>
                              </div>
                            </div>

                            <span className="text-[10px] font-mono text-stone-500 shrink-0">#{lab.id}</span>
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

      {/* Persistent Footer with Module Navigation */}
      </div>
    </div>
  );
}
