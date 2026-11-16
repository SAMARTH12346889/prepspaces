const fs = require('fs');
const path = require('path');

const module18Data = {
  moduleId: "shortest-paths-mst",
  courseId: "java-programming",
  title: "18. Shortest Paths & Minimum Spanning Trees",
  description: "Master shortest-path and network optimization algorithms in Java: Breadth-First Search (BFS), Dijkstra's algorithm with PriorityQueue, Bellman-Ford with negative-cycle detection, Floyd-Warshall all-pairs dynamic programming, DAG topological relaxation, Prim's and Kruskal's Minimum Spanning Tree (MST) algorithms, Disjoint Set Union (DSU) with path compression and union-by-size, Network Connectivity optimization, Grid-based BFS, Multi-Source BFS, and 0-1 BFS with ArrayDeque.",
  duration: "8-10 hours",
  sectionsCount: 28,
  topics: [
    "Shortest Path Problem Foundations: Single-source, single-pair, single-destination, all-pairs, and DAGs",
    "Java Weighted Graph Representations: Adjacency List with Edge class and directed vs undirected edges",
    "BFS Shortest Path in Unweighted Graphs: Level queue exploration, parent pointer arrays, and path reconstruction",
    "Dijkstra's Algorithm: Nonnegative weights, edge relaxation, PriorityQueue state modeling, and stale entry pruning",
    "Negative Edge Weights vs Negative Cycles: Why greedy choice fails and infinite reduction loops",
    "Bellman-Ford Algorithm: V-1 relaxation passes, negative cycle detection, and disconnected super-sources",
    "Floyd-Warshall Algorithm: All-pairs shortest paths O(V³), dynamic programming recurrence, and diagonal cycle checks",
    "DAG Shortest Paths: Kahn's topological sort + single-pass edge relaxation in O(V + E) handling negative weights",
    "Minimum Spanning Trees (MST): V-1 edges spanning tree invariant, MST vs Shortest Path comparison, and Cut/Cycle properties",
    "Prim's Algorithm: Greedy vertex-growing strategy, PriorityQueue candidate edges, and connectivity verification",
    "Kruskal's Algorithm: Global edge sorting O(E log E), cycle prevention via Disjoint Set Union (DSU)",
    "Disjoint Set Union (DSU / Union-Find): Parent array, path compression, and union by size in amortized O(α(V))",
    "DSU-Based Graph Optimization: Dynamic connectivity queries, cycle detection in undirected graphs, and component counting",
    "Network Connectivity: Connecting disjoint infrastructure, redundant edge reallocation, and minimum C-1 operations",
    "Grid-Based Graph Problems: Implicit grid graphs, direction vectors (dr, dc), 4-way and 8-way BFS pathfinding",
    "Multi-Source BFS: Simultaneous queue seeding, nearest zero / facility calculations, Rotting Oranges pattern",
    "0-1 BFS: ArrayDeque front/back push for {0, 1} edge weights in linear O(V + E) time",
    "Algorithm Selection Decision Guide: Decision trees for shortest paths, MSTs, grids, and edge weight constraints",
    "Common Pitfalls: Dijkstra with negative weights, integer overflow on INF, disconnected Prim components, stale PQ states",
    "35 LeetCode & FAANG Practice Problems categorized across 4 progressive difficulty levels"
  ],
  commands: [
    "PriorityQueue<State> pq = new PriorityQueue<>(Comparator.comparingLong(s -> s.distance));",
    "if (dist[u] + weight < dist[v]) { dist[v] = dist[u] + weight; pq.offer(new State(v, dist[v])); }",
    "for (int i = 0; i < V - 1; i++) { for (Edge e : edges) { if (dist[e.from] != INF && dist[e.from] + e.w < dist[e.to]) ... } }",
    "dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);",
    "Deque<State> deque = new ArrayDeque<>(); if (weight == 0) deque.offerFirst(next); else deque.offerLast(next);",
    "int find(int x) { if (parent[x] != x) parent[x] = find(parent[x]); return parent[x]; }",
    "boolean union(int a, int b) { int ra = find(a), rb = find(b); if (ra == rb) return false; ... return true; }"
  ],
  scenarios: [
    {
      title: "Global Air Traffic Fuel Optimization & Flight Connections",
      description: "An airline reservation engine needs to compute the lowest-cost flight routes across 50,000 airports with layovers, layover rebates, and potential promotional discounts.",
      solution: "If all flight segment costs are nonnegative, execute Dijkstra's algorithm with a Min-Heap. If promotional discount rebates introduce negative edge weights (without negative cycles), execute Bellman-Ford or DAG relaxation for scheduled forward routes."
    },
    {
      title: "National High-Speed Fiber Optic Grid Layout",
      description: "A telecommunications conglomerate needs to lay subterranean fiber optic cables connecting 2,000 municipal data centers at minimum total trenching and cabling cost.",
      solution: "Model municipal centers as vertices and potential cable trenches as weighted undirected edges. Run Kruskal's algorithm with Disjoint Set Union (DSU) or Prim's algorithm with a PriorityQueue to compute the Minimum Spanning Tree (MST) spanning all 2,000 centers with exactly 1,999 trench segments."
    },
    {
      title: "Emergency Rescue Response Grid Pathfinding",
      description: "A disaster management agency coordinates drones navigating a 1,000x1,000 flooded topographical grid to deliver supplies to isolated survivors while avoiding debris zones.",
      solution: "Represent the topographical grid as an implicit graph. If movement costs across open cells are uniform (cost 1), execute Multi-Source BFS seeded from all emergency response bases. If swamp movement costs 1 and paved road movement costs 0, execute 0-1 BFS with an ArrayDeque in linear O(R*C) time."
    }
  ],
  questions: [
    {
      id: "m18-q1",
      question: "Why does Breadth-First Search (BFS) guarantee finding the shortest path in an unweighted graph, but fails to guarantee it in a weighted graph?",
      options: [
        "BFS explores vertices in non-decreasing order of edge hop counts; in unweighted graphs, fewest hops equals least cost, but in weighted graphs, a 3-hop path can have less total weight than a 1-hop path.",
        "BFS uses recursion which cannot evaluate weights greater than 1.",
        "BFS sorts edges by weight in descending order.",
        "BFS only operates on Directed Acyclic Graphs."
      ],
      correctAnswer: 0,
      explanation: "BFS explores vertices level by level. In an unweighted graph, each hop costs 1, so the first time a node is visited, it has the minimal possible cost. In weighted graphs, a direct 1-hop edge might cost 100 while an alternate 3-hop route costs 1 + 2 + 3 = 6."
    },
    {
      id: "m18-q2",
      question: "What is edge relaxation in shortest-path algorithms?",
      options: [
        "Checking whether routing through vertex u yields a shorter known distance to vertex v: if (dist[u] + weight < dist[v]) dist[v] = dist[u] + weight.",
        "Deleting an edge from the graph if its weight exceeds the average edge weight.",
        "Decreasing all edge weights by a constant factor to prevent overflow.",
        "Approximating exponential weights with logarithmic approximations."
      ],
      correctAnswer: 0,
      explanation: "Edge relaxation is the fundamental operation that checks whether traveling from source to v via u offers a lower total cost than the best currently known route to v. If so, dist[v] is updated to dist[u] + weight."
    },
    {
      id: "m18-q3",
      question: "Why does Dijkstra's algorithm fail to guarantee the correct shortest path when negative edge weights are present?",
      options: [
        "Dijkstra assumes greedily that once a vertex is extracted from the PriorityQueue with the smallest distance, its shortest distance is finalized and cannot be improved by future paths.",
        "Negative edge weights cause division by zero in the priority queue.",
        "Java's PriorityQueue throws an IllegalArgumentException on negative numbers.",
        "Dijkstra only works on complete bipartite graphs."
      ],
      correctAnswer: 0,
      explanation: "Dijkstra relies on the greedy property that adding nonnegative edge weights can never decrease path length. A negative edge can make an initially expensive route later become much cheaper, violating the assumption that a popped vertex's distance is permanently final."
    },
    {
      id: "m18-q4",
      question: "In Java's PriorityQueue implementation of Dijkstra's algorithm, why is the check 'if (currentDistance != dist[u]) continue;' necessary?",
      options: [
        "Because Java PriorityQueue does not support decreaseKey in O(log N); inserting new states leaves stale, outdated distance entries in the queue that must be discarded.",
        "To check whether vertex u has outgoing edges.",
        "To prevent cycles from causing infinite recursion.",
        "To verify that the graph is directed."
      ],
      correctAnswer: 0,
      explanation: "When a shorter path to vertex u is discovered, we push a new State(u, newDist) into the PriorityQueue. The older, longer State(u, oldDist) remains inside the queue. When it is eventually popped, checking currentDistance != dist[u] allows us to safely ignore this stale entry in O(1) time."
    },
    {
      id: "m18-q5",
      question: "Why does the Bellman-Ford algorithm perform edge relaxation exactly V - 1 times?",
      options: [
        "In a graph of V vertices with no negative cycles, any shortest simple path can contain at most V - 1 edges.",
        "Because V - 1 is the number of faces in a planar graph.",
        "Because each pass only relaxes one single edge.",
        "To allow binary search across the edge array."
      ],
      correctAnswer: 0,
      explanation: "A simple path cannot visit any vertex more than once without forming a cycle. Therefore, the longest simple path connecting any two vertices contains at most V - 1 edges. Each round of Bellman-Ford guarantees finding optimal paths that are at least one edge longer."
    },
    {
      id: "m18-q6",
      question: "How does Bellman-Ford detect whether a negative-weight cycle is reachable from the source vertex?",
      options: [
        "By performing a V-th relaxation pass: if any edge can still be relaxed (dist[u] + weight < dist[v]), a reachable negative cycle exists.",
        "By checking if any initial edge weight is negative.",
        "By checking if the source distance becomes negative.",
        "By checking if the sum of all vertex distances is less than zero."
      ],
      correctAnswer: 0,
      explanation: "Since all shortest simple paths are guaranteed to be fully discovered after V - 1 iterations, if any distance can still decrease on the V-th pass, the reduction must be caused by cycling infinitely around a negative-weight loop."
    },
    {
      id: "m18-q7",
      question: "What is the time complexity and dynamic programming recurrence of the Floyd-Warshall algorithm?",
      options: [
        "O(V³) time with recurrence: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]) considering each intermediate vertex k.",
        "O(V² log V) time with recurrence: dist[i][j] = dist[i][j-1] + weight.",
        "O(V * E) time with recurrence: dist[i] = min(dist[u] + weight).",
        "O(2^V) time with recurrence: dist[i][j] = dist[j][i]."
      ],
      correctAnswer: 0,
      explanation: "Floyd-Warshall tests every vertex k as an intermediate waypoint between every pair of vertices (i, j). With three nested loops running from 0 to V-1, its time complexity is O(V³) and memory complexity is O(V²)."
    },
    {
      id: "m18-q8",
      question: "How does Floyd-Warshall detect the presence of a negative cycle in the graph?",
      options: [
        "If any diagonal element dist[i][i] becomes negative (dist[i][i] < 0).",
        "If any off-diagonal element dist[i][j] equals INF.",
        "If the determinant of the distance matrix is zero.",
        "If the number of iterations exceeds V²."
      ],
      correctAnswer: 0,
      explanation: "Normally, the shortest distance from any vertex to itself is 0. If dist[i][i] < 0, it means traveling through a loop from vertex i back to vertex i yields a negative total cost, confirming a negative cycle involving vertex i."
    },
    {
      id: "m18-q9",
      question: "How can shortest paths be found in a Directed Acyclic Graph (DAG) with both positive and negative edge weights in linear O(V + E) time?",
      options: [
        "Compute topological ordering of vertices, then relax outgoing edges of each vertex in topological order in a single pass.",
        "Run Dijkstra's algorithm using a Max-Heap.",
        "Run Floyd-Warshall on the transposed DAG.",
        "Convert all negative edge weights to positive by adding a large constant."
      ],
      correctAnswer: 0,
      explanation: "Because a DAG has no cycles, vertices can be linearized into a topological order where every edge points from an earlier vertex to a later vertex. Processing vertices in this topological sequence guarantees that when we arrive at vertex u, all possible incoming paths have already been finalized."
    },
    {
      id: "m18-q10",
      question: "What is the key difference between a Shortest Path Tree (SPT) and a Minimum Spanning Tree (MST)?",
      options: [
        "An SPT minimizes the path distance from one specific source to all other vertices; an MST minimizes the total sum of edge weights connecting all vertices across the entire graph.",
        "An SPT has V edges while an MST has V - 1 edges.",
        "An MST requires directed graphs while an SPT requires undirected graphs.",
        "An SPT cannot contain cycles while an MST always contains cycles."
      ],
      correctAnswer: 0,
      explanation: "An MST optimizes the collective infrastructure cost of connecting all vertices without regard to any specific source. An SPT optimizes individual route distances from one root source, often resulting in a higher total edge weight than the MST."
    },
    {
      id: "m18-q11",
      question: "How many edges does a Minimum Spanning Tree (MST) contain for a connected undirected graph with V vertices?",
      options: [
        "Exactly V - 1 edges",
        "V edges",
        "V * (V - 1) / 2 edges",
        "At least V + 1 edges"
      ],
      correctAnswer: 0,
      explanation: "By definition, a tree spanning V vertices connects all vertices without any cycles. Any tree with V vertices has exactly V - 1 edges. Fewer edges would leave the graph disconnected; more edges would create cycles."
    },
    {
      id: "m18-q12",
      question: "What is the core algorithmic difference between Prim's and Kruskal's algorithms?",
      options: [
        "Prim grows a single connected tree from an arbitrary starting vertex using a PriorityQueue; Kruskal sorts all edges globally and connects disjoint components using DSU.",
        "Prim works only on unweighted graphs while Kruskal works on weighted graphs.",
        "Prim takes O(V³) time while Kruskal takes O(V) time.",
        "Prim selects the maximum edge while Kruskal selects the minimum edge."
      ],
      correctAnswer: 0,
      explanation: "Prim grows an MST outward from a seed vertex by always picking the minimum edge connecting the current tree to an outside vertex. Kruskal sorts all edges globally and adds the lightest edge that does not form a cycle using Disjoint Set Union."
    },
    {
      id: "m18-q13",
      question: "In Disjoint Set Union (DSU), what does Path Compression accomplish?",
      options: [
        "During the find(x) operation, it flattens the tree by making all traversed nodes point directly to the root representative, reducing future lookups to near O(1).",
        "It removes duplicate vertices from the graph.",
        "It compresses edge weights using Huffman encoding.",
        "It balances the tree like an AVL rotation."
      ],
      correctAnswer: 0,
      explanation: "Path compression updates parent[x] = find(parent[x]) during recursion. After finding the root representative, every node along the path is re-parented directly to the root, preventing tall unbalanced lookup chains."
    },
    {
      id: "m18-q14",
      question: "What is the amortized time complexity of DSU operations (find and union) when both Path Compression and Union by Size/Rank are used?",
      options: [
        "O(α(V)), where α is the inverse Ackermann function, effectively constant (<= 4 for all practical inputs)",
        "O(log V)",
        "O(V)",
        "O(1) strictly worst-case"
      ],
      correctAnswer: 0,
      explanation: "Combining path compression with union by rank or size yields an amortized time complexity of O(α(V)) per operation, where α(V) is the inverse Ackermann function, which is strictly less than 5 for any universe-scale input size."
    },
    {
      id: "m18-q15",
      question: "How can DSU be used to detect cycles in an UNDIRECTED graph?",
      options: [
        "For each edge (u, v), if find(u) == find(v), u and v are already in the same connected component, meaning edge (u, v) creates a cycle.",
        "By checking if the size of the root component equals V.",
        "By sorting vertices by in-degree.",
        "By running topological sort on the parent array."
      ],
      correctAnswer: 0,
      explanation: "If two vertices u and v already share the same representative root in DSU, an existing path already connects them. Adding edge (u, v) introduces an alternate path between them, which creates a cycle."
    },
    {
      id: "m18-q16",
      question: "Given a network of n computers with several disconnected components C, what is the minimum number of connections needed to make the entire network connected?",
      options: [
        "C - 1, provided the total number of existing connections is at least n - 1",
        "C",
        "n - C",
        "2 * (C - 1)"
      ],
      correctAnswer: 0,
      explanation: "Connecting C separate components together into a single component requires at least C - 1 bridge edges. If the total number of cables in the entire network is < n - 1, it is impossible to connect all n computers even by moving redundant cables."
    },
    {
      id: "m18-q17",
      question: "When should Multi-Source BFS be utilized instead of standard single-source BFS?",
      options: [
        "When finding the minimum distance from multiple simultaneous starting points to all other cells (e.g. 01 Matrix, Rotting Oranges, Distance to Nearest Facility).",
        "When the graph has negative edge weights.",
        "When computing the Minimum Spanning Tree of a grid.",
        "When detecting bridges in a directed graph."
      ],
      correctAnswer: 0,
      explanation: "Multi-Source BFS seeds the queue with all initial source locations at distance 0 simultaneously. The BFS wavefront expands outward in unison, discovering the closest source to every cell in a single O(V + E) or O(R * C) pass."
    },
    {
      id: "m18-q18",
      question: "How does 0-1 BFS achieve O(V + E) linear time complexity for graphs whose edge weights are strictly {0, 1}?",
      options: [
        "It uses a double-ended queue (ArrayDeque): 0-weight edges are pushed to the front (offerFirst) and 1-weight edges to the back (offerLast).",
        "It sorts edge weights in a PriorityQueue.",
        "It converts 0-weight edges into directed cycles.",
        "It runs Bellman-Ford for only 2 iterations."
      ],
      correctAnswer: 0,
      explanation: "In a Deque, pushing 0-weight transitions to the front preserves the monotonic non-decreasing order of distances without heap overhead. Vertices reached at cost d are explored before vertices at cost d + 1, achieving linear O(V + E) time."
    },
    {
      id: "m18-q19",
      question: "What is the Cut Property of Minimum Spanning Trees?",
      options: [
        "For any cut that partitions a graph's vertices into two subsets, the minimum-weight edge crossing the cut must belong to at least one MST.",
        "Cutting any edge from an MST leaves both subtrees with equal weights.",
        "An MST cannot contain any cut vertices.",
        "Removing a bridge from an MST doubles the number of cycles."
      ],
      correctAnswer: 0,
      explanation: "The Cut Property states that for any partition (cut) of vertices into sets S and V - S, the lightest edge connecting S to V - S is safe to include in the MST. This property proves the correctness of both Prim's and Kruskal's greedy edge selections."
    },
    {
      id: "m18-q20",
      question: "Why should long[] rather than int[] be preferred for distance arrays in Java shortest-path implementations with large weights?",
      options: [
        "Accumulating edge weights can easily exceed Integer.MAX_VALUE (2.14 x 10^9), causing 32-bit signed overflow into negative values and corrupting distance comparisons.",
        "long arrays are required by Java's PriorityQueue comparator.",
        "int arrays cannot store zero distances.",
        "long arrays take less memory in 64-bit JVMs."
      ],
      correctAnswer: 0,
      explanation: "In graphs with large edge weights (or many hops), dist[u] + weight can exceed 2^31 - 1, overflowing to negative values. A negative distance looks artificially tiny to Math.min() or PriorityQueue, creating critical routing bugs."
    }
  ]
};

const paths = [
  path.join(__dirname, '../backend/content/java-programming/modules/shortest-paths-mst.json'),
  path.join(__dirname, '../backend/content/java/modules/shortest-paths-mst.json')
];

for (const p of paths) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(module18Data, null, 2), 'utf-8');
  console.log(`Successfully wrote: ${p}`);
}
