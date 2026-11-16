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
  Share2,
  RefreshCw,
  Search,
  Compass,
  Zap,
  Grid
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_SHORTEST_PATHS_MST_SECTIONS } from "./JavaShortestPathsMSTSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why does Breadth-First Search (BFS) guarantee finding the shortest path in an unweighted graph, but fails to guarantee it in a weighted graph?",
    options: [
      "BFS explores vertices in non-decreasing order of hop counts; in unweighted graphs, fewest hops equals lowest cost, but in weighted graphs, a 3-hop path can have less total weight than a 1-hop path",
      "BFS uses recursion which cannot evaluate weights greater than 1",
      "BFS sorts edges by weight in descending order",
      "BFS only operates on Directed Acyclic Graphs"
    ],
    correct: 0,
    explanation: "In an unweighted graph, each hop costs 1, so visiting level-by-level guarantees minimal cost. In a weighted graph, a direct 1-hop edge might cost 10 while an alternate 2-hop route costs 2 + 3 = 5."
  },
  {
    id: 2,
    question: "What is edge relaxation in shortest-path algorithms?",
    options: [
      "Checking whether routing through vertex u yields a shorter known distance to vertex v: if (dist[u] + weight < dist[v]) dist[v] = dist[u] + weight",
      "Deleting an edge from the graph if its weight exceeds the average edge weight",
      "Decreasing all edge weights by a constant factor to prevent overflow",
      "Approximating exponential weights with logarithmic approximations"
    ],
    correct: 0,
    explanation: "Edge relaxation tests whether traveling to v via u improves upon the best currently recorded distance to v. If so, dist[v] is lowered."
  },
  {
    id: 3,
    question: "Why does Dijkstra's algorithm fail to guarantee the correct shortest path when negative edge weights are present?",
    options: [
      "Dijkstra assumes greedily that once a vertex is extracted from the PriorityQueue with the smallest distance, its shortest distance is finalized and cannot be improved by future paths",
      "Negative edge weights cause division by zero in the priority queue",
      "Java's PriorityQueue throws an IllegalArgumentException on negative numbers",
      "Dijkstra only works on complete bipartite graphs"
    ],
    correct: 0,
    explanation: "Dijkstra relies on the greedy property that non-negative weights can never decrease path lengths. A negative edge can make an initially expensive route later become much cheaper, violating the assumption that a popped vertex's distance is permanently final."
  },
  {
    id: 4,
    question: "In Java's PriorityQueue implementation of Dijkstra's algorithm, why is the check 'if (currentDistance != dist[u]) continue;' necessary?",
    options: [
      "Because Java PriorityQueue does not support decreaseKey in O(log N); inserting new states leaves stale, outdated distance entries in the queue that must be discarded",
      "To check whether vertex u has outgoing edges",
      "To prevent cycles from causing infinite recursion",
      "To verify that the graph is directed"
    ],
    correct: 0,
    explanation: "When a shorter path to vertex u is discovered, we push a new State(u, newDist) into the PriorityQueue. The older State(u, oldDist) remains inside. When popped, checking currentDistance != dist[u] allows us to safely ignore this stale entry in O(1) time."
  },
  {
    id: 5,
    question: "Why does the Bellman-Ford algorithm perform edge relaxation exactly V - 1 times?",
    options: [
      "In a graph of V vertices with no negative cycles, any shortest simple path can contain at most V - 1 edges",
      "Because V - 1 is the number of faces in a planar graph",
      "Because each pass only relaxes one single edge",
      "To allow binary search across the edge array"
    ],
    correct: 0,
    explanation: "A simple path cannot visit any vertex more than once without forming a cycle. Therefore, the longest simple path connecting any two vertices contains at most V - 1 edges. Each round of Bellman-Ford guarantees finding optimal paths that are at least one edge longer."
  },
  {
    id: 6,
    question: "How does Bellman-Ford detect whether a negative-weight cycle is reachable from the source vertex?",
    options: [
      "By performing a V-th relaxation pass: if any edge can still be relaxed (dist[u] + weight < dist[v]), a reachable negative cycle exists",
      "By checking if any initial edge weight is negative",
      "By checking if the source distance becomes negative",
      "By checking if the sum of all vertex distances is less than zero"
    ],
    correct: 0,
    explanation: "Since all shortest simple paths are guaranteed to be fully discovered after V - 1 iterations, if any distance can still decrease on the V-th pass, the reduction must be caused by cycling infinitely around a negative-weight loop."
  },
  {
    id: 7,
    question: "What is the time complexity and dynamic programming recurrence of the Floyd-Warshall algorithm?",
    options: [
      "O(V³) time with recurrence: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]) considering each intermediate vertex k",
      "O(V² log V) time with recurrence: dist[i][j] = dist[i][j-1] + weight",
      "O(V * E) time with recurrence: dist[i] = min(dist[u] + weight)",
      "O(2^V) time with recurrence: dist[i][j] = dist[j][i]"
    ],
    correct: 0,
    explanation: "Floyd-Warshall tests every vertex k as an intermediate waypoint between every pair of vertices (i, j). With three nested loops running from 0 to V-1, its time complexity is O(V³) and memory complexity is O(V²)."
  },
  {
    id: 8,
    question: "How does Floyd-Warshall detect the presence of a negative cycle in the graph?",
    options: [
      "If any diagonal element dist[i][i] becomes negative (dist[i][i] < 0)",
      "If any off-diagonal element dist[i][j] equals INF",
      "If the determinant of the distance matrix is zero",
      "If the number of iterations exceeds V²"
    ],
    correct: 0,
    explanation: "Normally, the shortest distance from any vertex to itself is 0. If dist[i][i] < 0, it means traveling through a loop from vertex i back to vertex i yields a negative total cost, confirming a negative cycle involving vertex i."
  },
  {
    id: 9,
    question: "How can shortest paths be found in a Directed Acyclic Graph (DAG) with both positive and negative edge weights in linear O(V + E) time?",
    options: [
      "Compute topological ordering of vertices, then relax outgoing edges of each vertex in topological order in a single pass",
      "Run Dijkstra's algorithm using a Max-Heap",
      "Run Floyd-Warshall on the transposed DAG",
      "Convert all negative edge weights to positive by adding a large constant"
    ],
    correct: 0,
    explanation: "Because a DAG has no cycles, vertices can be linearized into a topological order where every edge points from an earlier vertex to a later vertex. Processing vertices in this topological sequence guarantees that when we arrive at vertex u, all possible incoming paths have already been finalized."
  },
  {
    id: 10,
    question: "What is the key difference between a Shortest Path Tree (SPT) and a Minimum Spanning Tree (MST)?",
    options: [
      "An SPT minimizes the path distance from one specific source to all other vertices; an MST minimizes the total sum of edge weights connecting all vertices across the entire graph",
      "An SPT has V edges while an MST has V - 1 edges",
      "An MST requires directed graphs while an SPT requires undirected graphs",
      "An SPT cannot contain cycles while an MST always contains cycles"
    ],
    correct: 0,
    explanation: "An MST optimizes the collective infrastructure cost of connecting all vertices without regard to any specific source. An SPT optimizes individual route distances from one root source, often resulting in a higher total edge weight than the MST."
  },
  {
    id: 11,
    question: "How many edges does a Minimum Spanning Tree (MST) contain for a connected undirected graph with V vertices?",
    options: [
      "Exactly V - 1 edges",
      "V edges",
      "V * (V - 1) / 2 edges",
      "At least V + 1 edges"
    ],
    correct: 0,
    explanation: "By definition, a tree spanning V vertices connects all vertices without any cycles. Any tree with V vertices has exactly V - 1 edges. Fewer edges would leave the graph disconnected; more edges would create cycles."
  },
  {
    id: 12,
    question: "What is the core algorithmic difference between Prim's and Kruskal's algorithms?",
    options: [
      "Prim grows a single connected tree from an arbitrary starting vertex using a PriorityQueue; Kruskal sorts all edges globally and connects disjoint components using DSU",
      "Prim works only on unweighted graphs while Kruskal works on weighted graphs",
      "Prim takes O(V³) time while Kruskal takes O(V) time",
      "Prim selects the maximum edge while Kruskal selects the minimum edge"
    ],
    correct: 0,
    explanation: "Prim grows an MST outward from a seed vertex by always picking the minimum edge connecting the current tree to an outside vertex. Kruskal sorts all edges globally and adds the lightest edge that does not form a cycle using Disjoint Set Union."
  },
  {
    id: 13,
    question: "In Disjoint Set Union (DSU), what does Path Compression accomplish?",
    options: [
      "During the find(x) operation, it flattens the tree by making all traversed nodes point directly to the root representative, reducing future lookups to near O(1)",
      "It removes duplicate vertices from the graph",
      "It compresses edge weights using Huffman encoding",
      "It balances the tree like an AVL rotation"
    ],
    correct: 0,
    explanation: "Path compression updates parent[x] = find(parent[x]) during recursion. After finding the root representative, every node along the path is re-parented directly to the root, preventing tall unbalanced lookup chains."
  },
  {
    id: 14,
    question: "What is the amortized time complexity of DSU operations (find and union) when both Path Compression and Union by Size/Rank are used?",
    options: [
      "O(α(V)), where α is the inverse Ackermann function, effectively constant (<= 4 for all practical inputs)",
      "O(log V)",
      "O(V)",
      "O(1) strictly worst-case"
    ],
    correct: 0,
    explanation: "Combining path compression with union by rank or size yields an amortized time complexity of O(α(V)) per operation, where α(V) is the inverse Ackermann function, which is strictly less than 5 for any universe-scale input size."
  },
  {
    id: 15,
    question: "How does 0-1 BFS achieve O(V + E) linear time complexity for graphs whose edge weights are strictly {0, 1}?",
    options: [
      "It uses a double-ended queue (ArrayDeque): 0-weight edges are pushed to the front (offerFirst) and 1-weight edges to the back (offerLast)",
      "It sorts edge weights in a PriorityQueue",
      "It converts 0-weight edges into directed cycles",
      "It runs Bellman-Ford for only 2 iterations"
    ],
    correct: 0,
    explanation: "In a Deque, pushing 0-weight transitions to the front preserves the monotonic non-decreasing order of distances without heap overhead. Vertices reached at cost d are explored before vertices at cost d + 1, achieving linear O(V + E) time."
  }
];

// --- 35 PRACTICE PROBLEMS & LABS TRACKER ---
const LAB_ASSIGNMENTS = [
  // Level 1: Graph Shortest-Path Fundamentals (1-7)
  { id: 1, tier: "Level 1", title: "Find if Path Exists in Graph (LeetCode 1971)", desc: "Basic BFS/DFS or DSU to determine reachability between source and destination in undirected graph." },
  { id: 2, tier: "Level 1", title: "Shortest Path in Unweighted Graph (BFS Traversal)", desc: "Compute shortest distances and reconstruct the path using a parent pointer array." },
  { id: 3, tier: "Level 1", title: "Dijkstra's Algorithm Implementation from Scratch", desc: "Build single-source shortest path using PriorityQueue and Adjacency List with Edge objects." },
  { id: 4, tier: "Level 1", title: "Network Delay Time (LeetCode 743)", desc: "Classic Dijkstra: find time for signal to reach all nodes from source K; return max distance or -1." },
  { id: 5, tier: "Level 1", title: "Path With Minimum Effort (LeetCode 1631)", desc: "Dijkstra on grid: distance represents max absolute height difference between consecutive cells." },
  { id: 6, tier: "Level 1", title: "Minimum Path Sum (LeetCode 64)", desc: "Grid pathfinding using Dynamic Programming or Dijkstra for minimum cost traversal from top-left to bottom-right." },
  { id: 7, tier: "Level 1", title: "Print Shortest Path in Weighted Graph", desc: "Augment Dijkstra with parent[] array to backtrack and print the actual sequence of vertices." },

  // Level 2: Advanced Shortest Paths (8-14)
  { id: 8, tier: "Level 2", title: "Bellman-Ford Algorithm with Negative Cycle Detection", desc: "Run V-1 edge relaxations; execute V-th pass to flag infinite negative cost cycles." },
  { id: 9, tier: "Level 2", title: "Cheapest Flights Within K Stops (LeetCode 787)", desc: "Layered Bellman-Ford / BFS: relax at most K+1 times using a clone distance array to prevent cascaded flights." },
  { id: 10, tier: "Level 2", title: "Floyd-Warshall All-Pairs Distance Matrix", desc: "O(V³) dynamic programming: test all intermediate vertices k and check diagonal for negative loops." },
  { id: 11, tier: "Level 2", title: "Find the City With the Smallest Number of Neighbors (LeetCode 1334)", desc: "Execute Floyd-Warshall; count cities within distanceThreshold and return highest indexed tie." },
  { id: 12, tier: "Level 2", title: "Shortest Path in a Directed Acyclic Graph (DAG)", desc: "Kahn's topological sort followed by linear relaxation of outgoing edges in O(V + E)." },
  { id: 13, tier: "Level 2", title: "Course Schedule IV (LeetCode 1462)", desc: "Transitive closure using Floyd-Warshall reachability boolean matrix or multi-source BFS." },
  { id: 14, tier: "Level 2", title: "Second Minimum Time to Reach Destination (LeetCode 2045)", desc: "Modified BFS/Dijkstra maintaining two shortest distances (dist1 and dist2) with traffic signal delays." },

  // Level 3: Minimum Spanning Trees & DSU (15-22)
  { id: 15, tier: "Level 3", title: "Disjoint Set Union (DSU) with Path Compression & Rank", desc: "Implement robust DSU class supporting find, union, and connected components count in O(alpha(V))." },
  { id: 16, tier: "Level 3", title: "Redundant Connection (LeetCode 684)", desc: "Find the edge in an undirected graph that creates a cycle using DSU union-find." },
  { id: 17, tier: "Level 3", title: "Number of Operations to Make Network Connected (LeetCode 1319)", desc: "Count available cables vs required components: return components - 1 if edges >= n - 1." },
  { id: 18, tier: "Level 3", title: "Kruskal's Algorithm Implementation", desc: "Sort edges ascending by weight; select V-1 edges connecting disjoint components via DSU." },
  { id: 19, tier: "Level 3", title: "Prim's Algorithm Implementation", desc: "Grow tree from node 0 using PriorityQueue of boundary candidate edges; detect disconnection." },
  { id: 20, tier: "Level 3", title: "Min Cost to Connect All Points (LeetCode 1584)", desc: "Manhattan distance complete graph: compute MST using Prim's algorithm or Kruskal's with DSU." },
  { id: 21, tier: "Level 3", title: "Connecting Cities With Minimum Cost (LeetCode 1135)", desc: "Standard MST problem: return total minimum weight or -1 if the graph cannot be fully connected." },
  { id: 22, tier: "Level 3", title: "Satisfiability of Equality Equations (LeetCode 990)", desc: "Process '==' equations with DSU union; verify that no '!=' equation shares the same root." },

  // Level 4: Advanced Interview & FAANG Problems (23-35)
  { id: 23, tier: "Level 4", title: "Shortest Path in Binary Matrix (LeetCode 1091)", desc: "8-directional BFS in binary grid from (0,0) to (n-1,n-1) through open 0-cells." },
  { id: 24, tier: "Level 4", title: "Rotting Oranges (LeetCode 994)", desc: "Multi-Source BFS: enqueue all rotten oranges at t=0; propagate rot level-by-level until all fresh rot." },
  { id: 25, tier: "Level 4", title: "01 Matrix (LeetCode 542)", desc: "Multi-Source BFS from all 0-cells outwards to assign shortest distance to nearest 0 in O(R*C)." },
  { id: 26, tier: "Level 4", title: "Minimum Cost to Make at Least One Valid Path in a Grid (LeetCode 1368)", desc: "0-1 BFS: cost is 0 if moving in sign direction; cost is 1 if changing arrow direction; use ArrayDeque." },
  { id: 27, tier: "Level 4", title: "Swim in Rising Water (LeetCode 778)", desc: "Dijkstra or Binary Search + BFS to find minimum time where water level covers path to (n-1, n-1)." },
  { id: 28, tier: "Level 4", title: "Shortest Path Visiting All Nodes (LeetCode 847)", desc: "BFS with Bitmask state (node, mask): find shortest path covering all 2^N bitmask subsets." },
  { id: 29, tier: "Level 4", title: "As Far from Land as Possible (LeetCode 1162)", desc: "Multi-source BFS from all land cells (1) to find maximum distance to any water cell (0)." },
  { id: 30, tier: "Level 4", title: "Word Ladder (LeetCode 127)", desc: "Bidirectional BFS or level BFS to transform beginWord to endWord via valid dictionary words." },
  { id: 31, tier: "Level 4", title: "Open the Lock (LeetCode 752)", desc: "BFS shortest path on 4-wheel rotary lock avoiding deadends; compute min wheel turns." },
  { id: 32, tier: "Level 4", title: "Minimum Spanning Tree with Edge Constraints", desc: "Compute MST including mandatory edges or excluding banned bridges using modified Kruskal." },
  { id: 33, tier: "Level 4", title: "Snakes and Ladders (LeetCode 909)", desc: "BFS on Boustrophedon board: flatten 2D coordinates to 1D and compute minimum die rolls." },
  { id: 34, tier: "Level 4", title: "Cut Off Trees for Golf Event (LeetCode 675)", desc: "Sort tree heights ascending; run consecutive BFS shortest paths to harvest each tree in order." },
  { id: 35, tier: "Level 4", title: "Critical Connections in a Network (LeetCode 1192)", desc: "Tarjan's Bridge algorithm: return all edges (u, v) where low[v] > disc[u] in O(V + E)." }
];

// Top-level constants for Workbench 1 (Dijkstra SVG)
const WB1_NODES = [
  { id: 0, x: 70, y: 150 },
  { id: 1, x: 200, y: 60 },
  { id: 2, x: 200, y: 240 },
  { id: 3, x: 340, y: 100 },
  { id: 4, x: 340, y: 220 }
];

const WB1_EDGES = [
  { u: 0, v: 1, w: 4 },
  { u: 0, v: 2, w: 1 },
  { u: 2, v: 1, w: 2 },
  { u: 1, v: 3, w: 1 },
  { u: 2, v: 3, w: 5 },
  { u: 3, v: 4, w: 3 }
];

export default function JavaShortestPathsMST() {
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
      const saved = localStorage.getItem("java_m18_labs_status");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleLab = (id) => {
    setLabStatus(prev => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("java_m18_labs_status", JSON.stringify(next));
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

  // --- WORKBENCH 1: DIJKSTRA VISUALIZER ---
  const [wb1Step, setWb1Step] = useState(0);
  const wb1Trace = [
    { curr: 0, dist: [0, "∞", "∞", "∞", "∞"], pq: [{ node: 0, d: 0 }], note: "Init: dist[0]=0. Seed PQ with State(0, 0)." },
    { curr: 0, dist: [0, 4, 1, "∞", "∞"], pq: [{ node: 2, d: 1 }, { node: 1, d: 4 }], note: "Pop Node 0 (d=0). Relax outgoing: (0->1, w=4) dist[1]=4; (0->2, w=1) dist[2]=1." },
    { curr: 2, dist: [0, 3, 1, 6, "∞"], pq: [{ node: 1, d: 3 }, { node: 1, d: 4 }, { node: 3, d: 6 }], note: "Pop Node 2 (d=1). Relax (2->1, w=2): 1+2=3 < 4, dist[1] updated to 3! Relax (2->3, w=5): dist[3]=6." },
    { curr: 1, dist: [0, 3, 1, 4, "∞"], pq: [{ node: 3, d: 4 }, { node: 1, d: 4 }, { node: 3, d: 6 }], note: "Pop Node 1 (d=3). Relax (1->3, w=1): 3+1=4 < 6, dist[3] updated to 4!" },
    { curr: 3, dist: [0, 3, 1, 4, 7], pq: [{ node: 1, d: 4 }, { node: 3, d: 6 }, { node: 4, d: 7 }], note: "Pop Node 3 (d=4). Relax (3->4, w=3): 4+3=7, dist[4]=7." },
    { curr: 1, dist: [0, 3, 1, 4, 7], pq: [{ node: 3, d: 6 }, { node: 4, d: 7 }], isStale: true, note: "Pop stale entry State(1, 4). Since 4 > dist[1](3), discard immediately (O(1))." },
    { curr: 4, dist: [0, 3, 1, 4, 7], pq: [], note: "Pop Node 4 (d=7). All reachable nodes finalized. Final distances: [0:0, 1:3, 2:1, 3:4, 4:7]!" }
  ];
  const curWb1 = wb1Trace[Math.min(wb1Step, wb1Trace.length - 1)];

  // --- WORKBENCH 2: BELLMAN-FORD & NEGATIVE CYCLES ---
  const [wb2HasCycle, setWb2HasCycle] = useState(false);
  const [wb2Step, setWb2Step] = useState(0);

  const wb2NormalTrace = [
    { pass: 0, dist: [0, "∞", "∞", "∞"], note: "Initial state: dist[0] = 0, all others ∞." },
    { pass: 1, dist: [0, 4, 5, "∞"], note: "Pass 1: Relax (0->1, 4) -> dist[1]=4; (0->2, 5) -> dist[2]=5." },
    { pass: 2, dist: [0, 4, 2, 10], note: "Pass 2: Relax (1->2, -2) -> dist[2]=min(5, 4-2)=2; (1->3, 6) -> dist[3]=10." },
    { pass: 3, dist: [0, 4, 2, 5], note: "Pass 3: Relax (2->3, 3) -> dist[3]=min(10, 2+3)=5. Converged!" },
    { pass: "Pass V (Check)", dist: [0, 4, 2, 5], cycleDetected: false, note: "Pass V: No distances improved. Graph has NO negative cycle. Result valid!" }
  ];

  const wb2CycleTrace = [
    { pass: 0, dist: [0, "∞", "∞"], note: "Graph with negative loop (1->2: -5, 2->1: 2). dist=[0, ∞, ∞]." },
    { pass: 1, dist: [0, 2, -3], note: "Pass 1: Relax (0->1, 2) -> dist[1]=2; (1->2, -5) -> dist[2]=-3." },
    { pass: 2, dist: [0, -1, -6], note: "Pass 2: Relax (2->1, 2) -> dist[1]=-1; (1->2, -5) -> dist[2]=-6." },
    { pass: "Pass V (Check)", dist: [0, -4, -9], cycleDetected: true, note: "Pass V: Distances still decreasing indefinitely! NEGATIVE CYCLE DETECTED!" }
  ];

  // --- WORKBENCH 3: FLOYD-WARSHALL MATRIX ---
  const [wb3K, setWb3K] = useState(0);
  const wb3Matrices = [
    {
      k: 0,
      title: "Initial Direct Adjacency Matrix (k = -1)",
      mat: [
        [0, 5, 10],
        ["∞", 0, 3],
        [2, "∞", 0]
      ],
      note: "Direct edge weights before considering intermediate vertices."
    },
    {
      k: 1,
      title: "After considering Vertex 0 as intermediate (k = 0)",
      mat: [
        [0, 5, 10],
        ["∞", 0, 3],
        [2, 7, 0]
      ],
      note: "Route 2 -> 0 -> 1 costs 2 + 5 = 7. dist[2][1] updated from ∞ to 7."
    },
    {
      k: 2,
      title: "After considering Vertex 1 as intermediate (k = 1)",
      mat: [
        [0, 5, 8],
        ["∞", 0, 3],
        [2, 7, 0]
      ],
      note: "Route 0 -> 1 -> 2 costs 5 + 3 = 8 < 10. dist[0][2] improved to 8!"
    },
    {
      k: 3,
      title: "After considering Vertex 2 as intermediate (k = 2) - FINAL",
      mat: [
        [0, 5, 8],
        [5, 0, 3],
        [2, 7, 0]
      ],
      note: "Route 1 -> 2 -> 0 costs 3 + 2 = 5. dist[1][0] updated to 5. All pairs finalized!"
    }
  ];

  // --- WORKBENCH 4: DAG SHORTEST PATHS ---
  const [wb4Step, setWb4Step] = useState(0);
  const wb4Trace = [
    { topo: [0, 1, 2, 3, 4], curr: 0, dist: [0, "∞", "∞", "∞", "∞"], note: "Topological Order: [0, 1, 2, 3, 4]. Start at Source 0 with dist[0]=0." },
    { topo: [0, 1, 2, 3, 4], curr: 0, dist: [0, 3, 2, "∞", "∞"], note: "Relax outgoing from 0: (0->1, w=3) dist[1]=3; (0->2, w=2) dist[2]=2." },
    { topo: [0, 1, 2, 3, 4], curr: 1, dist: [0, 3, 2, 7, "∞"], note: "Process 1: (1->3, w=4) dist[3]=3+4=7." },
    { topo: [0, 1, 2, 3, 4], curr: 2, dist: [0, 3, 2, 1, "∞"], note: "Process 2: (2->3, w=-1) dist[3]=min(7, 2 + (-1)) = 1! Negative edge handled easily in DAG." },
    { topo: [0, 1, 2, 3, 4], curr: 3, dist: [0, 3, 2, 1, 3], note: "Process 3: (3->4, w=2) dist[4]=1+2=3." },
    { topo: [0, 1, 2, 3, 4], curr: 4, dist: [0, 3, 2, 1, 3], note: "Process 4: Leaf node. DAG Shortest Path complete in linear O(V + E) time!" }
  ];

  // --- WORKBENCH 5: PRIM'S MST ALGORITHM ---
  const [wb5Step, setWb5Step] = useState(0);
  const wb5Trace = [
    { tree: [0], cand: ["(0-1, w=1)", "(0-2, w=4)"], totalW: 0, note: "Start at vertex 0. Mark visited. Boundary edges: (0-1: 1), (0-2: 4)." },
    { tree: [0, 1], cand: ["(1-2, w=2)", "(1-3, w=5)", "(0-2, w=4)"], added: "(0-1, w=1)", totalW: 1, note: "Lightest boundary edge is (0-1, w=1). Add to MST. Add node 1." },
    { tree: [0, 1, 2], cand: ["(2-3, w=3)", "(1-3, w=5)"], added: "(1-2, w=2)", totalW: 3, note: "Lightest boundary edge is (1-2, w=2). Add to MST. Add node 2." },
    { tree: [0, 1, 2, 3], cand: [], added: "(2-3, w=3)", totalW: 6, note: "Lightest boundary edge is (2-3, w=3). Add node 3. All 4 vertices connected with 3 edges! MST Total: 6." }
  ];

  // --- WORKBENCH 6: KRUSKAL'S MST & DSU ---
  const [wb6Step, setWb6Step] = useState(0);
  const wb6Trace = [
    { edge: "(0-1, w=1)", u: 0, v: 1, w: 1, dsu: ["{0}", "{1}", "{2}", "{3}"], accepted: true, total: 1, note: "Lightest edge (0-1, w=1). find(0)!=find(1). Merge -> Accept edge!" },
    { edge: "(1-2, w=2)", u: 1, v: 2, w: 2, dsu: ["{0, 1}", "{2}", "{3}"], accepted: true, total: 3, note: "Next edge (1-2, w=2). find(1)!=find(2). Merge -> Accept edge!" },
    { edge: "(2-3, w=3)", u: 2, v: 3, w: 3, dsu: ["{0, 1, 2}", "{3}"], accepted: true, total: 6, note: "Next edge (2-3, w=3). find(2)!=find(3). Merge -> Accept edge! 3 edges selected (V-1)." },
    { edge: "(0-2, w=4)", u: 0, v: 2, w: 4, dsu: ["{0, 1, 2, 3}"], accepted: false, total: 6, isCycle: true, note: "Next edge (0-2, w=4). find(0)==find(2) (Both root 0). CYCLE REJECTED!" }
  ];

  // --- WORKBENCH 7: MULTI-SOURCE BFS ---
  const [wb7Step, setWb7Step] = useState(0);
  const wb7Grids = [
    {
      step: 0,
      grid: [
        [0, 0, 1],
        [0, 0, 0],
        [1, 0, 0]
      ],
      dist: [
        ["-", "-", "0"],
        ["-", "-", "-"],
        ["0", "-", "-"]
      ],
      note: "T=0: Seed queue with all sources simultaneously: (0, 2) and (2, 0). dist=0."
    },
    {
      step: 1,
      grid: [
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0]
      ],
      dist: [
        ["-", "1", "0"],
        ["1", "-", "1"],
        ["0", "1", "-"]
      ],
      note: "T=1: Expand 1 hop in 4 directions from both sources. 4 cells reached at dist=1."
    },
    {
      step: 2,
      grid: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      dist: [
        ["2", "1", "0"],
        ["1", "2", "1"],
        ["0", "1", "2"]
      ],
      note: "T=2: Final wavefront reaches remaining cells (0,0), (1,1), and (2,2) at dist=2. Complete!"
    }
  ];

  // --- WORKBENCH 8: 0-1 BFS DEQUE ---
  const [wb8Step, setWb8Step] = useState(0);
  const wb8Trace = [
    { curr: "A", d: 0, deque: ["[A:0]"], dist: { A: 0, B: "∞", C: "∞", D: "∞" }, note: "Start at A with dist[A]=0. Push to Deque front." },
    { curr: "A", d: 0, deque: ["[B:0]", "[C:1]"], dist: { A: 0, B: 0, C: 1, D: "∞" }, note: "Pop A. (A->B, w=0) -> pushFront(B:0); (A->C, w=1) -> pushBack(C:1)." },
    { curr: "B", d: 0, deque: ["[C:0]", "[C:1]"], dist: { A: 0, B: 0, C: 0, D: "∞" }, note: "Pop B (d=0). Edge (B->C, w=0): dist[C]=min(1, 0+0)=0! pushFront(C:0)." },
    { curr: "C", d: 0, deque: ["[D:1]", "[C:1]"], dist: { A: 0, B: 0, C: 0, D: 1 }, note: "Pop C (d=0). Edge (C->D, w=1): dist[D]=1. pushBack(D:1)." },
    { curr: "D", d: 1, deque: [], dist: { A: 0, B: 0, C: 0, D: 1 }, note: "Pop D (d=1). Remaining entries are stale. Complete in O(V + E) time!" }
  ];

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return JAVA_SHORTEST_PATHS_MST_SECTIONS;
    const q = searchQuery.toLowerCase();
    return JAVA_SHORTEST_PATHS_MST_SECTIONS.filter(
      sec => sec.title.toLowerCase().includes(q) || sec.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-200">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur border-b border-slate-800 px-4 lg:px-8 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/learning/java/graph-theory")}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            title="Previous Module: Graph Theory"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 rounded">
                Module 18
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">Advanced Java + DSA</span>
            </div>
            <h1 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-orange-400" />
              Shortest Paths & Minimum Spanning Trees
            </h1>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
              activeTab === "curriculum"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Curriculum</span>
          </button>
          <button
            onClick={() => setActiveTab("workbenches")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
              activeTab === "workbenches"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="hidden md:inline">8 Workbenches</span>
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
              activeTab === "quiz"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Assessment Quiz</span>
          </button>
          <button
            onClick={() => setActiveTab("labs")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
              activeTab === "labs"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span className="hidden md:inline">35 Practice Labs</span>
            <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded-full bg-slate-800 text-slate-300">
              {completedLabsCount}/35
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* TAB 1: CURRICULUM READER */}
        {activeTab === "curriculum" && (
          <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 lg:px-8 py-6 gap-6">
            {/* Sidebar Section Index */}
            <aside className="w-full lg:w-80 shrink-0 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col h-fit lg:sticky lg:top-20 max-h-[85vh]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-orange-400" />
                  Sections (27)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Module 18</span>
              </div>

              {/* Filter box */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter 27 sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-orange-500"
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
                        : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                    }`}
                  >
                    <span className="break-words whitespace-normal leading-snug pr-2 flex-1">{sec.title}</span>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0 mt-0.5">#{sec.id}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Reading Content Pane */}
            <main className="flex-1 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 lg:p-8 min-w-0">
              {(() => {
                const currentSec = JAVA_SHORTEST_PATHS_MST_SECTIONS.find(s => s.id === activeSectionId) || JAVA_SHORTEST_PATHS_MST_SECTIONS[0];
                return (
                  <div>
                    {/* Section Header */}
                    <div className="border-b border-slate-800 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            {currentSec.id === 0
                              ? "Module Overview · 27 Core Sections"
                              : `Section ${currentSec.id} of 27`}
                          </span>
                          <span className="text-xs text-slate-400">PrepSpaces Java Masterclass</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-white">{currentSec.title}</h2>
                        <p className="text-xs text-slate-400 mt-1">{currentSec.summary}</p>
                      </div>

                      {/* Jump to Workbench CTA */}
                      <button
                        onClick={() => {
                          setActiveTab("workbenches");
                          if (currentSec.id <= 4) setActiveWorkbench(1);
                          else if (currentSec.id <= 6) setActiveWorkbench(2);
                          else if (currentSec.id === 7) setActiveWorkbench(3);
                          else if (currentSec.id === 8) setActiveWorkbench(4);
                          else if (currentSec.id <= 10) setActiveWorkbench(5);
                          else if (currentSec.id <= 15) setActiveWorkbench(6);
                          else if (currentSec.id <= 17) setActiveWorkbench(7);
                          else setActiveWorkbench(8);
                        }}
                        className="px-3.5 py-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-semibold flex items-center gap-2 transition shrink-0"
                      >
                        <Cpu className="w-3.5 h-3.5 text-orange-400" />
                        Open Interactive Visualizer
                      </button>
                    </div>

                    {/* Section Content */}
                    <div className="prose prose-invert max-w-none text-slate-200">
                      {currentSec.content}
                    </div>

                    {/* Bottom Navigation */}
                    <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between">
                      <button
                        disabled={activeSectionId === 0}
                        onClick={() => setActiveSectionId(prev => Math.max(0, prev - 1))}
                        className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Previous Section
                      </button>
                      <button
                        disabled={activeSectionId === JAVA_SHORTEST_PATHS_MST_SECTIONS.length - 1}
                        onClick={() => setActiveSectionId(prev => Math.min(JAVA_SHORTEST_PATHS_MST_SECTIONS.length - 1, prev + 1))}
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
                { id: 1, title: "1. Dijkstra PQ", icon: Compass },
                { id: 2, title: "2. Bellman-Ford", icon: RefreshCw },
                { id: 3, title: "3. Floyd-Warshall", icon: Grid },
                { id: 4, title: "4. DAG Shortest", icon: Clock },
                { id: 5, title: "5. Prim's MST", icon: GitMerge },
                { id: 6, title: "6. Kruskal & DSU", icon: Share2 },
                { id: 7, title: "7. Multi-Source BFS", icon: Activity },
                { id: 8, title: "8. 0-1 BFS Deque", icon: Zap }
              ].map((wb) => {
                const Icon = wb.icon;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 ${
                      activeWorkbench === wb.id
                        ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                        : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-orange-300" />
                    <span className="text-xs font-bold" title={wb.title}>{wb.title}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: DIJKSTRA VISUALIZER */}
            {activeWorkbench === 1 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 1
                    </span>
                    <span className="text-xs text-slate-400">Nonnegative Shortest Paths & PriorityQueue</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Dijkstra's Algorithm & Relaxation Visualizer</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Step through Dijkstra's execution: observe Min-Heap PriorityQueue states, edge relaxation, and pruning of stale outdated entries.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* SVG Graph */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center min-h-[300px]">
                    <svg width="420" height="290" className="overflow-visible">
                      {/* Edges */}
                      {WB1_EDGES.map((e, idx) => {
                        const n1 = WB1_NODES[e.u];
                        const n2 = WB1_NODES[e.v];
                        const isRelaxed = curWb1.curr === e.u;
                        const mx = (n1.x + n2.x) / 2;
                        const my = (n1.y + n2.y) / 2;
                        return (
                          <g key={idx}>
                            <line
                              x1={n1.x}
                              y1={n1.y}
                              x2={n2.x}
                              y2={n2.y}
                              stroke={isRelaxed ? "#6366f1" : "#334155"}
                              strokeWidth={isRelaxed ? "2.5" : "1.5"}
                            />
                            <rect
                              x={mx - 10}
                              y={my - 8}
                              width="20"
                              height="16"
                              rx="4"
                              fill="#0f172a"
                              stroke="#334155"
                            />
                            <text
                              x={mx}
                              y={my + 4}
                              textAnchor="middle"
                              fill="#a5b4fc"
                              fontSize="10"
                              fontFamily="monospace"
                              fontWeight="bold"
                            >
                              {e.w}
                            </text>
                          </g>
                        );
                      })}

                      {/* Nodes */}
                      {WB1_NODES.map((n) => {
                        const isCurr = curWb1.curr === n.id;
                        const d = curWb1.dist[n.id];
                        return (
                          <g key={n.id}>
                            <circle
                              cx={n.x}
                              cy={n.y}
                              r={isCurr ? 20 : 16}
                              className={`transition-all duration-300 ${
                                isCurr
                                  ? "fill-amber-500 stroke-amber-300 stroke-2"
                                  : d !== "∞"
                                  ? "fill-orange-500 stroke-orange-400 stroke-2"
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
                            <text
                              x={n.x}
                              y={n.y - 20}
                              textAnchor="middle"
                              fill={d !== "∞" ? "#34d399" : "#64748b"}
                              fontSize="11"
                              fontWeight="bold"
                              fontFamily="monospace"
                            >
                              d={d}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    <div className="flex items-center gap-4 text-[11px] text-slate-400 mt-2">
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500"></span> Current Extracted</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Discovered / In PQ</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-600"></span> Unvisited</span>
                    </div>
                  </div>

                  {/* Simulator State Panel */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between gap-4">
                    <div className="space-y-4">
                      {/* Step Note */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-orange-300 font-mono leading-relaxed">
                        {curWb1.note}
                      </div>

                      {/* Stale State Alert */}
                      {curWb1.isStale && (
                        <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                          <span>Stale PriorityQueue entry detected! Bypassed in O(1) without re-scanning neighbors.</span>
                        </div>
                      )}

                      {/* Priority Queue State */}
                      <div>
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Min-Heap PriorityQueue (PriorityQueue&lt;State&gt;)
                        </span>
                        <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-900 rounded-lg border border-slate-800 min-h-[42px]">
                          {curWb1.pq.length > 0 ? (
                            curWb1.pq.map((st, idx) => (
                              <span
                                key={idx}
                                className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                                  idx === 0 ? "bg-amber-500 text-slate-950" : "bg-orange-500 text-white"
                                }`}
                              >
                                State(node:{st.node}, d:{st.d}) {idx === 0 && "(Min)"}
                              </span>
                            ))
                          ) : (
                            <span className="text-slate-400 text-xs font-mono">[ Queue Empty ]</span>
                          )}
                        </div>
                      </div>

                      {/* Distance Array */}
                      <div>
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Distance Array (long[] dist)
                        </span>
                        <div className="grid grid-cols-5 gap-1.5">
                          {curWb1.dist.map((d, i) => (
                            <div key={i} className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-center font-mono text-xs">
                              <span className="text-slate-400 block text-[10px]">node {i}</span>
                              <span className={d !== "∞" ? "text-emerald-400 font-bold" : "text-slate-400"}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Step Controls */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                      <button
                        onClick={() => setWb1Step(0)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                      >
                        Reset
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={wb1Step === 0}
                          onClick={() => setWb1Step(prev => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                        >
                          Prev Step
                        </button>
                        <span className="text-xs font-mono text-slate-400">
                          {wb1Step + 1}/{wb1Trace.length}
                        </span>
                        <button
                          disabled={wb1Step === wb1Trace.length - 1}
                          onClick={() => setWb1Step(prev => Math.min(wb1Trace.length - 1, prev + 1))}
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

            {/* WORKBENCH 2: BELLMAN-FORD & NEGATIVE CYCLES */}
            {activeWorkbench === 2 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 2
                    </span>
                    <span className="text-xs text-slate-400">V - 1 Iterations & Negative Cycle Flag</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Bellman-Ford & Negative Cycle Detector</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulate edge relaxations across all edges V-1 times and observe how pass V confirms whether a reachable negative-weight cycle exists.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => { setWb2HasCycle(false); setWb2Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      !wb2HasCycle ? "bg-orange-500 text-white" : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    Valid Graph (No Negative Cycle)
                  </button>
                  <button
                    onClick={() => { setWb2HasCycle(true); setWb2Step(0); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      wb2HasCycle ? "bg-rose-600 text-white" : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    Graph With Negative Cycle
                  </button>
                </div>

                {(() => {
                  const trace = wb2HasCycle ? wb2CycleTrace : wb2NormalTrace;
                  const cur = trace[Math.min(wb2Step, trace.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                              Iteration Round: {cur.pass}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">V = {cur.dist.length} vertices</span>
                          </div>

                          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 mb-4 leading-relaxed">
                            {cur.note}
                          </div>

                          {cur.cycleDetected !== undefined && (
                            <div className={`p-4 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                              cur.cycleDetected ? "bg-rose-500/20 border-rose-500/40 text-rose-300" : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                            }`}>
                              {cur.cycleDetected ? (
                                <>
                                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                                  <span>CRITICAL: Edge relaxation succeeded on pass V! Reachable negative-weight cycle detected!</span>
                                </>
                              ) : (
                                <>
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                  <span>No edges relaxed on pass V. Graph is free of negative cycles. All shortest paths verified!</span>
                                </>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                          Invariance: <strong className="text-orange-300">Shortest simple path has at most V - 1 edges</strong>
                        </div>
                      </div>

                      {/* State Display */}
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                            Current Distance Array (dist[])
                          </span>
                          <div className="grid grid-cols-4 gap-2">
                            {cur.dist.map((d, i) => (
                              <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center font-mono text-xs">
                                <span className="text-slate-400 block text-[10px]">node {i}</span>
                                <span className={`text-base font-bold ${
                                  d !== "∞" ? (Number(d) < 0 ? "text-rose-400" : "text-emerald-400") : "text-slate-400"
                                }`}>
                                  {d}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                          <button
                            onClick={() => setWb2Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb2Step === 0}
                              onClick={() => setWb2Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-slate-400">{wb2Step + 1}/{trace.length}</span>
                            <button
                              disabled={wb2Step === trace.length - 1}
                              onClick={() => setWb2Step(p => Math.min(trace.length - 1, p + 1))}
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

            {/* WORKBENCH 3: FLOYD-WARSHALL MATRIX */}
            {activeWorkbench === 3 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 3
                    </span>
                    <span className="text-xs text-slate-400">All-Pairs Shortest Paths O(V³) DP</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Floyd-Warshall 2D Distance Matrix Simulator</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Observe how testing each intermediate waypoint vertex k updates the all-pairs distance matrix in-place.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Matrix Grid */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col items-center justify-center">
                    <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                      {wb3Matrices[wb3K].title}
                    </div>

                    <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-xs">
                      <div className="p-2 text-slate-400 font-bold">i \ j</div>
                      <div className="p-2 text-orange-400 font-bold">0</div>
                      <div className="p-2 text-orange-400 font-bold">1</div>
                      <div className="p-2 text-orange-400 font-bold">2</div>
                      {wb3Matrices[wb3K].mat.map((row, r) => (
                        <React.Fragment key={r}>
                          <div className="p-2 text-orange-400 font-bold">{r}</div>
                          {row.map((val, c) => (
                            <div
                              key={c}
                              className={`p-2.5 rounded-lg border font-bold ${
                                r === c
                                  ? "bg-slate-800/80 border-slate-700 text-slate-300"
                                  : val !== "∞"
                                  ? "bg-orange-500/20 border-orange-500 text-orange-200"
                                  : "bg-slate-900 border-slate-800 text-slate-400"
                              }`}
                            >
                              {val}
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>

                    <p className="text-[11px] text-slate-400 mt-4 text-center">
                      Recurrence: <code className="text-orange-300 font-mono">dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</code>
                    </p>
                  </div>

                  {/* Matrix Step Note & Controls */}
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                        Intermediate Waypoint Explanation
                      </span>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-orange-300 leading-relaxed mb-4">
                        {wb3Matrices[wb3K].note}
                      </div>

                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                        <div>Diagonal Negative Cycle Check:</div>
                        <div className="text-emerald-400 font-mono font-bold">
                          dist[0][0]=0, dist[1][1]=0, dist[2][2]=0 (All non-negative, no cycles)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <button
                        onClick={() => setWb3K(0)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                      >
                        Reset
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={wb3K === 0}
                          onClick={() => setWb3K(p => Math.max(0, p - 1))}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                        >
                          Prev
                        </button>
                        <span className="text-xs font-mono text-slate-400">{wb3K + 1}/{wb3Matrices.length}</span>
                        <button
                          disabled={wb3K === wb3Matrices.length - 1}
                          onClick={() => setWb3K(p => Math.min(wb3Matrices.length - 1, p + 1))}
                          className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500 text-xs font-semibold text-white disabled:opacity-40"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: DAG SHORTEST PATHS */}
            {activeWorkbench === 4 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 4
                    </span>
                    <span className="text-xs text-slate-400">Linear Time O(V + E) Topological Relaxation</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">DAG Shortest Paths via Topological Sort</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Linearize the DAG into topological order and relax outgoing edges in a single pass. Handles negative edge weights safely!
                  </p>
                </div>

                {(() => {
                  const cur = wb4Trace[Math.min(wb4Step, wb4Trace.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="mb-3">
                            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                              Topological Sequence
                            </span>
                            <div className="flex items-center gap-2">
                              {cur.topo.map((node, i) => (
                                <span
                                  key={i}
                                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                                    node === cur.curr ? "bg-amber-500 text-slate-950" : "bg-slate-900 border border-slate-800 text-slate-300"
                                  }`}
                                >
                                  {node}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 leading-relaxed">
                            {cur.note}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                          Advantage: <strong className="text-emerald-400">Linear O(V + E) runtime with negative weights allowed</strong>
                        </div>
                      </div>

                      {/* Distance Array */}
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                            Distance Array (dist[])
                          </span>
                          <div className="grid grid-cols-5 gap-2">
                            {cur.dist.map((d, i) => (
                              <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center font-mono text-xs">
                                <span className="text-slate-400 block text-[10px]">node {i}</span>
                                <span className={`text-base font-bold ${d !== "∞" ? "text-emerald-400" : "text-slate-400"}`}>
                                  {d}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                          <button
                            onClick={() => setWb4Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb4Step === 0}
                              onClick={() => setWb4Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-slate-400">{wb4Step + 1}/{wb4Trace.length}</span>
                            <button
                              disabled={wb4Step === wb4Trace.length - 1}
                              onClick={() => setWb4Step(p => Math.min(wb4Trace.length - 1, p + 1))}
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

            {/* WORKBENCH 5: PRIM'S MST ALGORITHM */}
            {activeWorkbench === 5 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 5
                    </span>
                    <span className="text-xs text-slate-400">Tree-Growing Greedy Strategy O(E log V)</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Prim's Algorithm & Cut Boundary Studio</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Grow an MST from seed vertex 0. Always select the minimum-weight boundary edge crossing the cut between the tree and outside vertices.
                  </p>
                </div>

                {(() => {
                  const cur = wb5Trace[Math.min(wb5Step, wb5Trace.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                              MST Tree Nodes ({cur.tree.length}/4)
                            </span>
                            <span className="text-xs font-mono text-emerald-400 font-bold">Total Weight: {cur.totalW}</span>
                          </div>

                          <div className="flex items-center gap-2 mb-4">
                            {cur.tree.map((n, i) => (
                              <span key={i} className="px-3 py-1 rounded bg-orange-500 text-white font-mono text-xs font-bold">
                                Vertex {n}
                              </span>
                            ))}
                          </div>

                          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 leading-relaxed mb-3">
                            {cur.note}
                          </div>

                          {cur.added && (
                            <div className="p-2.5 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs font-bold flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                              <span>Added Edge to MST: {cur.added}</span>
                            </div>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                          Cut Property: <strong className="text-orange-300">Minimum-weight edge crossing the cut is always safe</strong>
                        </div>
                      </div>

                      {/* Candidate Queue */}
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                            Boundary Candidate Edges (PriorityQueue)
                          </span>
                          <div className="space-y-1.5">
                            {cur.cand.length > 0 ? (
                              cur.cand.map((c, i) => (
                                <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono flex items-center justify-between">
                                  <span>{c}</span>
                                  <span className="text-[10px] text-orange-400 font-bold">{i === 0 ? "Next Min Candidate" : "In PQ"}</span>
                                </div>
                              ))
                            ) : (
                              <span className="text-slate-400 text-xs font-mono">[ Tree Fully Connected ]</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                          <button
                            onClick={() => setWb5Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb5Step === 0}
                              onClick={() => setWb5Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-slate-400">{wb5Step + 1}/{wb5Trace.length}</span>
                            <button
                              disabled={wb5Step === wb5Trace.length - 1}
                              onClick={() => setWb5Step(p => Math.min(wb5Trace.length - 1, p + 1))}
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

            {/* WORKBENCH 6: KRUSKAL'S MST & DSU */}
            {activeWorkbench === 6 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 6
                    </span>
                    <span className="text-xs text-slate-400">Global Edge Sorting & DSU Cycle Rejection</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Kruskal's Algorithm & DSU Forest Simulator</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Process edges in ascending order. Disjoint Set Union checks if endpoints belong to the same component, preventing cycle formation.
                  </p>
                </div>

                {(() => {
                  const cur = wb6Trace[Math.min(wb6Step, wb6Trace.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                              Edge Under Test: {cur.edge}
                            </span>
                            <span className="text-xs font-mono text-emerald-400 font-bold">Total MST Weight: {cur.total}</span>
                          </div>

                          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 leading-relaxed mb-4">
                            {cur.note}
                          </div>

                          <div className={`p-3.5 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                            cur.isCycle ? "bg-rose-500/20 border-rose-500/40 text-rose-300" : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          }`}>
                            {cur.isCycle ? (
                              <>
                                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                                <span>CYCLE DETECTED: find({cur.u}) == find({cur.v}). Edge rejected!</span>
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>VALID EDGE: find({cur.u}) != find({cur.v}). Edge merged into MST!</span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                          DSU Optimization: <strong className="text-orange-300">Path compression + Union by size = O(alpha(V))</strong>
                        </div>
                      </div>

                      {/* DSU Sets */}
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                            Disjoint Component Sets (DSU Forest)
                          </span>
                          <div className="space-y-2">
                            {cur.dsu.map((setStr, i) => (
                              <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-orange-300 flex items-center justify-between">
                                <span>Component {i + 1}</span>
                                <span className="font-bold text-emerald-400">{setStr}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                          <button
                            onClick={() => setWb6Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb6Step === 0}
                              onClick={() => setWb6Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-slate-400">{wb6Step + 1}/{wb6Trace.length}</span>
                            <button
                              disabled={wb6Step === wb6Trace.length - 1}
                              onClick={() => setWb6Step(p => Math.min(wb6Trace.length - 1, p + 1))}
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

            {/* WORKBENCH 7: MULTI-SOURCE BFS */}
            {activeWorkbench === 7 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 7
                    </span>
                    <span className="text-xs text-slate-400">Nearest Zero / Rotting Oranges Wavefront</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Multi-Source BFS Grid Propagation</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Seed the queue with all sources at distance 0 simultaneously. Wavefront expands in unison to calculate nearest-facility distance in O(R*C).
                  </p>
                </div>

                {(() => {
                  const cur = wb7Grids[Math.min(wb7Step, wb7Grids.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Grid Display */}
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col items-center justify-center">
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                          Grid State & Distance Matrix (Time = {cur.step})
                        </span>

                        <div className="grid grid-cols-3 gap-2">
                          {cur.dist.map((row, r) => (
                            <React.Fragment key={r}>
                              {row.map((dVal, c) => (
                                <div
                                  key={c}
                                  className={`w-16 h-16 rounded-xl border flex flex-col items-center justify-center font-mono transition-all ${
                                    dVal === "0"
                                      ? "bg-rose-600/30 border-rose-500 text-rose-300 font-bold"
                                      : dVal === "1"
                                      ? "bg-amber-600/30 border-amber-500 text-amber-300 font-bold"
                                      : dVal === "2"
                                      ? "bg-emerald-600/30 border-emerald-500 text-emerald-300 font-bold"
                                      : "bg-slate-900 border-slate-800 text-slate-400"
                                  }`}
                                >
                                  <span className="text-[10px] text-slate-400">({r},{c})</span>
                                  <span className="text-sm">{dVal === "-" ? "?" : `d=${dVal}`}</span>
                                </div>
                              ))}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-[11px] text-slate-400 mt-4">
                          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rose-500"></span> Sources (d=0)</span>
                          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500"></span> Wavefront 1</span>
                          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Wavefront 2</span>
                        </div>
                      </div>

                      {/* Log & Step Controls */}
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                            Step Log
                          </span>
                          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-orange-300 leading-relaxed mb-4">
                            {cur.note}
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                            <div>Primary Applications:</div>
                            <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-0.5">
                              <li>Rotting Oranges (LeetCode 994)</li>
                              <li>01 Matrix Nearest Zero (LeetCode 542)</li>
                              <li>Shortest distance to fire exits / hospital centers</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                          <button
                            onClick={() => setWb7Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb7Step === 0}
                              onClick={() => setWb7Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-slate-400">{wb7Step + 1}/{wb7Grids.length}</span>
                            <button
                              disabled={wb7Step === wb7Grids.length - 1}
                              onClick={() => setWb7Step(p => Math.min(wb7Grids.length - 1, p + 1))}
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

            {/* WORKBENCH 8: 0-1 BFS DEQUE */}
            {activeWorkbench === 8 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Workbench 8
                    </span>
                    <span className="text-xs text-slate-400">ArrayDeque Front/Back Push O(V + E)</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">0-1 BFS Double-Ended Queue Studio</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    When edge weights are strictly 0 and 1, push 0-weight edges to the front and 1-weight edges to the back of a Deque. Achieves linear O(V + E) without heap overhead!
                  </p>
                </div>

                {(() => {
                  const cur = wb8Trace[Math.min(wb8Step, wb8Trace.length - 1)];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                              Processing Node: {cur.curr} (d = {cur.d})
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-bold">Weights: &#123;0, 1&#125;</span>
                          </div>

                          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 leading-relaxed mb-4">
                            {cur.note}
                          </div>

                          <div>
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                              Deque State (ArrayDeque&lt;State&gt;)
                            </span>
                            <div className="flex items-center gap-2 p-2.5 bg-slate-900 rounded-lg border border-slate-800 min-h-[42px] overflow-x-auto">
                              {cur.deque.length > 0 ? (
                                cur.deque.map((item, i) => (
                                  <span key={i} className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                                    i === 0 ? "bg-amber-500 text-slate-950" : "bg-orange-500 text-white"
                                  }`}>
                                    {item} {i === 0 && "(Front)"}
                                  </span>
                                ))
                              ) : (
                                <span className="text-slate-400 text-xs font-mono">[ Deque Empty ]</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                          Invariant: <strong className="text-orange-300">Elements in Deque differ by at most 1 in distance</strong>
                        </div>
                      </div>

                      {/* Distance Map */}
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                            Distance Map
                          </span>
                          <div className="grid grid-cols-4 gap-2">
                            {Object.entries(cur.dist).map(([node, d]) => (
                              <div key={node} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center font-mono text-xs">
                                <span className="text-slate-400 block text-[10px]">Node {node}</span>
                                <span className={`text-base font-bold ${d !== "∞" ? "text-emerald-400" : "text-slate-400"}`}>
                                  {d}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                          <button
                            onClick={() => setWb8Step(0)}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                          >
                            Reset
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              disabled={wb8Step === 0}
                              onClick={() => setWb8Step(p => Math.max(0, p - 1))}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40"
                            >
                              Prev
                            </button>
                            <span className="text-xs font-mono text-slate-400">{wb8Step + 1}/{wb8Trace.length}</span>
                            <button
                              disabled={wb8Step === wb8Trace.length - 1}
                              onClick={() => setWb8Step(p => Math.min(wb8Trace.length - 1, p + 1))}
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
          </div>
        )}

        {/* TAB 3: 15-QUESTION ASSESSMENT QUIZ */}
        {activeTab === "quiz" && (
          <div className="flex-1 max-w-4xl mx-auto w-full px-4 lg:px-8 py-6 flex flex-col gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Evaluation Quiz
                    </span>
                    <span className="text-xs text-slate-400">15 Multiple Choice Questions</span>
                  </div>
                  <h2 className="text-2xl font-black text-white">Module 18 Mastery Assessment</h2>
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
                  <div key={q.id} className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-bold text-slate-200">
                        {idx + 1}. {q.question}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2 mt-1">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAnswers[q.id] === optIdx;
                        let btnStyle = "bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-850";

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
                            <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-mono shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                        <strong className="text-orange-400 block mb-0.5">Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit / Retake Button */}
              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                {quizSubmitted ? (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setUserAnswers({});
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition"
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
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      Problem Roadmap
                    </span>
                    <span className="text-xs text-slate-400">4 Difficulty Tiers</span>
                  </div>
                  <h2 className="text-2xl font-black text-white">35 FAANG & LeetCode Graph Labs</h2>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-32 bg-slate-950 rounded-full h-2.5 border border-slate-800 overflow-hidden">
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
              {["Level 1", "Level 2", "Level 3", "Level 4"].map((tier) => {
                const problemsInTier = LAB_ASSIGNMENTS.filter(p => p.tier === tier);
                const tierTitles = {
                  "Level 1": "Level 1: Graph Shortest-Path Fundamentals",
                  "Level 2": "Level 2: Advanced Shortest Paths (Bellman-Ford, Floyd-Warshall, DAGs)",
                  "Level 3": "Level 3: Minimum Spanning Trees & DSU",
                  "Level 4": "Level 4: Advanced Interview & FAANG Problems"
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
                                ? "bg-emerald-950/20 border-emerald-500/30 text-slate-300"
                                : "bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <button className="mt-0.5 text-slate-400 hover:text-white">
                                {isDone ? (
                                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                                ) : (
                                  <Square className="w-4 h-4 text-slate-600" />
                                )}
                              </button>
                              <div>
                                <span className={`text-xs font-bold block ${isDone ? "line-through text-slate-400" : "text-white"}`}>
                                  {lab.title}
                                </span>
                                <span className="text-[11px] text-slate-400">{lab.desc}</span>
                              </div>
                            </div>

                            <span className="text-[10px] font-mono text-slate-400 shrink-0">#{lab.id}</span>
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
      <footer className="mt-auto border-t border-slate-800 bg-slate-950 px-4 lg:px-8 py-4">
        <ModuleNav
          courseId="java-programming"
          currentModuleId="shortest-paths-mst"
          prevRoute="/learning/java/graph-theory"
          nextRoute="/learning/java/dynamic-programming"
        />
      </footer>
    </div>
  );
}
