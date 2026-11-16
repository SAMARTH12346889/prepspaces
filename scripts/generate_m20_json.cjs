const fs = require('fs');
const path = require('path');

const moduleDataAdvancedDP = {
  moduleId: "advanced-dp",
  courseId: "java-programming",
  title: "20. Advanced Dynamic Programming & Algorithm Design",
  description: "Master advanced dynamic programming and algorithm design in Java: Multidimensional DP, Grid DP, String DP (LCS, Edit Distance, Longest Palindromic Subsequence), Tree DP (House Robber III, Tree Diameter), Graph DP on DAGs, Bitmask DP & Traveling Salesman Problem (TSP), Digit DP with tightness tracking, Interval DP (Matrix Chain Multiplication, Burst Balloons), Divide-and-Conquer DP optimization, Meet in the Middle, Bit Manipulation (Brian Kernighan, XOR techniques, submask enumeration), Number Theory (GCD, Sieve, Modular Inverses, Fermat), Randomized Algorithms (Las Vegas vs Monte Carlo, Reservoir Sampling), and Correctness Proofs (Induction, Loop Invariants, Exchange Arguments).",
  duration: "12-14 hours",
  sectionsCount: 31,
  topics: [
    "Advanced DP State Modeling: Multi-variable constraints, 5-step formulation recipe, pseudopolynomial vs polynomial time",
    "Multi-Dimensional DP: 2D/3D state grids (multi-constraint knapsack, stock trading with transaction limits)",
    "Grid DP: Unique Paths, handling obstacles, Minimum Path Sum, and 2D spatial coordinate transitions",
    "String DP: Levenshtein Edit Distance, contiguous substrings vs non-contiguous subsequences",
    "Longest Palindromic Subsequence (LPS): Interval expansion, reverse table processing, equivalence to LCS with reverse(s)",
    "Tree DP: Hierarchical subproblems, House Robber III, Tree Diameter, take vs skip state pairs in O(N) time",
    "Graph DP on DAGs: Topological ordering, longest paths in O(V + E), and condensation DAGs for general graphs",
    "Bitmask DP: Representing subsets using binary integers, submask transitions, and exponential subset state spaces",
    "Traveling Salesman Problem (TSP): NP-hard tour minimization via Bitmask DP O(N² 2ⁿ) with return-edge completion",
    "Digit DP: Counting numbers satisfying digit sum/pattern properties via position, sum, and tight prefix constraints",
    "Interval DP: Contiguous sub-range optimization, Matrix Chain Multiplication, and Burst Balloons inside-out transition",
    "DP Optimization Techniques: Rolling variables, monotonic queues, Convex Hull Trick, and Knuth optimization",
    "Space Optimization in DP: Compressing 2D tables into 1D reverse arrays or 2-row rolling buffers in O(N) memory",
    "Divide-and-Conquer DP: Accelerating partition recurrences from O(KN²) to O(KN log N) via split monotonicity",
    "Meet in the Middle: Splitting exponential search spaces of size N into N/2 to reduce complexity to O(N 2^(N/2))",
    "Bit Manipulation Fundamentals: Six bitwise operators, two's complement ~x = -x - 1, and bit shifting semantics",
    "Bit Manipulation Techniques: Parity check (n & 1), power of two (n & (n - 1) == 0), Brian Kernighan bit count, isolate rightmost bit (n & -n)",
    "XOR Techniques: Self-inversion, single number isolation, partitioning two unique numbers, 4-step periodic range XOR",
    "Bitmasking & Submask Enumeration: Permission sets, generating 2ⁿ subsets, and sub = (sub - 1) & mask iteration trick",
    "Mathematical Patterns: Euclidean GCD, LCM, Sieve of Eratosthenes, modular arithmetic, binary exponentiation, Fermat's inverse",
    "Randomized Algorithms: Las Vegas vs Monte Carlo, Randomized QuickSort, Reservoir Sampling stream selection",
    "Complexity & Correctness Proofs: States x transitions rule, mathematical induction, loop invariants, and greedy exchange arguments"
  ],
  commands: [
    "int rightmost = n & -n; n &= (n - 1);",
    "for (int sub = mask; sub > 0; sub = (sub - 1) & mask) { ... }",
    "dp[newMask][v] = Math.min(dp[newMask][v], dp[mask][u] + cost[u][v]);",
    "long take = root.val + left.skip + right.skip; long skip = Math.max(left.take, left.skip) + Math.max(right.take, right.skip);",
    "int maxDigit = tight ? digits.charAt(pos) - '0' : 9; boolean nextTight = tight && (d == maxDigit);",
    "dp[l][r] = Math.max(dp[l][r], dp[l][k - 1] + dp[k + 1][r] + nums[l - 1] * nums[k] * nums[r + 1]);",
    "long power(long base, long exp, long mod) { long res = 1; while (exp > 0) { if ((exp & 1) == 1) res = (res * base) % mod; base = (base * base) % mod; exp >>= 1; } return res; }"
  ],
  scenarios: [
    {
      "title": "Autonomous Drone Fleet Delivery Route Optimization",
      "description": "An autonomous delivery drone must visit 18 delivery drop-off points across a city and return to base while minimizing total battery expenditure.",
      "solution": "With N = 18 delivery points, brute-force tour permutation is 18! ≈ 6.4 × 10¹⁵ (infeasible). Implement Bitmask DP for the Traveling Salesman Problem (TSP) using state dp[mask][u] in O(N² 2ⁿ) operations, completing in milliseconds."
    },
    {
      "title": "Subsea Oil Pipeline Sensor Security & Independence",
      "description": "A deep-sea sensor network is structured as a tree. To prevent signal interference, no two directly adjacent sensor nodes may transmit on high frequency simultaneously, while total transmission throughput must be maximized.",
      "solution": "Formulate as Maximum Weight Independent Set on a Tree (Tree DP). For each node u, return a state pair (take[u], skip[u]) where take[u] combines u's value with skip results of children, while skip[u] takes max(take, skip) of children in O(N) time."
    },
    {
      "title": "Banking Core Large Ledger Subset Fraud Detection",
      "description": "A fraud audit system must determine whether any subset of 40 suspicious wire transfers sums exactly to a flagged money laundering total target.",
      "solution": "N = 40 is too large for 2⁴⁰ brute-force enumeration. Apply Meet in the Middle: partition the 40 transactions into two sets of 20, precompute 2²⁰ ≈ 10⁶ subset sums for each half, sort the second half, and use binary search in O(N 2^(N/2)) time."
    }
  ],
  questions: [
    {
      "id": "m20-q1",
      "question": "What does the term 'pseudopolynomial time' mean in the context of the 0/1 Knapsack DP algorithm with complexity O(nW)?",
      "options": [
        "The runtime is polynomial with respect to the numeric value of capacity W, but exponential with respect to the input length in bits (log W).",
        "The algorithm is only an approximation and does not yield an exact solution.",
        "The algorithm runs in polynomial time on average but factorial time in the worst case.",
        "The algorithm uses pseudo-random number generators during table initialization."
      ],
      "correctAnswer": 0,
      "explanation": "An algorithm is pseudopolynomial if its runtime is polynomial in the numeric values of the input (capacity W), but exponential in the length of the input representation in bits (which is proportional to log W)."
    },
    {
      "id": "m20-q2",
      "question": "In Multi-Dimensional DP, when is adding an extra dimension justified?",
      "options": [
        "Only when an independent constraint or condition directly changes future permitted choices or optimal payoff.",
        "Whenever the input has more than 100 elements.",
        "Whenever the problem uses recursion.",
        "To make the DP table symmetric."
      ],
      "correctAnswer": 0,
      "explanation": "Every DP dimension must represent necessary historical state that affects future choices or constraints (e.g. remaining capacity, holding stock, transactions left). Adding dimensions unnecessarily exponentially inflates memory and transition time."
    },
    {
      "id": "m20-q3",
      "question": "In Grid DP with obstacles where obstacle cells are marked with 1, how is the state transition modified?",
      "options": [
        "For any blocked cell (i, j), set dp[i][j] = 0, so no paths can enter or propagate through that cell.",
        "Set dp[i][j] = -1 and backtrack.",
        "Subtract 1 from all neighboring cells.",
        "Remove the entire row and column containing the obstacle."
      ],
      "correctAnswer": 0,
      "explanation": "A blocked cell cannot be stepped on, meaning there are 0 valid ways to arrive at it: dp[i][j] = 0. Its adjacent downstream cells will therefore receive 0 contributions from this blocked route."
    },
    {
      "id": "m20-q4",
      "question": "What is the fundamental difference between Longest Common Subsequence (LCS) and Longest Common Substring?",
      "options": [
        "Substring elements must be strictly contiguous in both strings, whereas subsequence elements maintain relative order but can have gaps.",
        "Substrings can have characters in reverse order.",
        "Subsequence applies only to integers, while substring applies to strings.",
        "Substrings always run in O(1) time."
      ],
      "correctAnswer": 0,
      "explanation": "A substring requires consecutive contiguous characters in both original strings (matching resets to 0 on mismatch), whereas a subsequence preserves relative ordering without requiring contiguity."
    },
    {
      "id": "m20-q5",
      "question": "In Longest Palindromic Subsequence (LPS), why must the DP table outer loop iterate index i from n - 1 down to 0?",
      "options": [
        "Because state dp[i][j] depends on smaller subproblems with larger start index i + 1: dp[i+1][j] and dp[i+1][j-1].",
        "Because Java arrays can only be traversed backwards.",
        "To reverse the string in place.",
        "To avoid integer underflow."
      ],
      "correctAnswer": 0,
      "explanation": "The recurrence for interval [i, j] looks at sub-interval [i+1, j-1] and [i+1, j]. To ensure these subproblems are already computed, i must be iterated in descending order from n-1 down to 0."
    },
    {
      "id": "m20-q6",
      "question": "How can Longest Palindromic Subsequence (LPS) of a string s be cleanly solved using standard Longest Common Subsequence (LCS)?",
      "options": [
        "Compute LCS between string s and its reverse: LCS(s, reverse(s)).",
        "Compute LCS between s and a string of all 'a' characters.",
        "Split s into two halves and find LCS of the halves.",
        "Run LCS twice and divide the length by 2."
      ],
      "correctAnswer": 0,
      "explanation": "A palindrome reads identical forwards and backwards. The longest sequence of characters that appears in both s and reverse(s) in the same relative order is precisely the Longest Palindromic Subsequence."
    },
    {
      "id": "m20-q7",
      "question": "In Tree DP for House Robber III, what two values are maintained in the post-order return state for each node u?",
      "options": [
        "take[u] (max money if node u is robbed) and skip[u] (max money if node u is skipped).",
        "height[u] and depth[u].",
        "minCost[u] and maxCost[u].",
        "inDegree[u] and outDegree[u]."
      ],
      "correctAnswer": 0,
      "explanation": "For each node, returning (take, skip) allows the parent to easily compute: take[parent] = val + left.skip + right.skip, and skip[parent] = max(left.take, left.skip) + max(right.take, right.skip)."
    },
    {
      "id": "m20-q8",
      "question": "Why can the longest path in a Directed Acyclic Graph (DAG) be solved in linear O(V + E) time using dynamic programming?",
      "options": [
        "Because a DAG possesses a topological ordering that allows edges to be processed in dependency order without cycles or back-edges.",
        "Because all edge weights in a DAG must be positive.",
        "Because every DAG is a complete binary tree.",
        "Because DAGs do not contain vertices with degree > 2."
      ],
      "correctAnswer": 0,
      "explanation": "A topological sort linearizes vertices such that every directed edge u -> v has u appearing before v. Processing vertices in this topological sequence guarantees that when visiting v, all possible paths to v have already been finalized."
    },
    {
      "id": "m20-q9",
      "question": "In Bitmask DP for the Traveling Salesman Problem (TSP), what does the state dp[mask][u] represent?",
      "options": [
        "The minimum travel cost starting at city 0, visiting exactly the set of cities set in bitmask 'mask', and currently ending at city u.",
        "The total number of permutations of cities in mask.",
        "The length of the shortest path from city u to all unvisited cities.",
        "The degree of vertex u in the spanning tree."
      ],
      "correctAnswer": 0,
      "explanation": "In TSP Bitmask DP, mask encodes the subset of already visited vertices as bit flags, and u is the last vertex visited, allowing transition to any unvisited vertex v: newCost = dp[mask][u] + cost[u][v]."
    },
    {
      "id": "m20-q10",
      "question": "In Bitmask DP for TSP, what is the final step to complete the tour after visiting all cities (fullMask = (1 << n) - 1)?",
      "options": [
        "Find min_{u != 0} (dp[fullMask][u] + cost[u][0]) to add the return cost from endpoint u back to starting city 0.",
        "Subtract the cost of the first city visited.",
        "Divide the total cost by the number of cities.",
        "Run Dijkstra's algorithm from the last city."
      ],
      "correctAnswer": 0,
      "explanation": "A TSP tour is a closed cycle returning to the starting vertex. After reaching state dp[fullMask][u], we must add edge cost[u][0] to close the tour and take the minimum across all possible finishing cities u."
    },
    {
      "id": "m20-q11",
      "question": "In Digit DP, what does the boolean state flag 'tight' represent?",
      "options": [
        "Whether the prefix of digits selected so far matches the upper bound prefix exactly (restricting the current digit to at most upper_digit).",
        "Whether memory cache limits have been exceeded.",
        "Whether all digits chosen so far are prime.",
        "Whether the number contains leading zeroes."
      ],
      "correctAnswer": 0,
      "explanation": "When tight is true, the current digit cannot exceed the corresponding digit of the upper bound. Once a strictly smaller digit is chosen, tight becomes false for all subsequent positions, allowing digits 0 through 9 freely."
    },
    {
      "id": "m20-q12",
      "question": "In the Burst Balloons interval DP problem, why is choosing the LAST balloon to burst in interval [l, r] the winning strategy?",
      "options": [
        "Choosing the last balloon ensures that its adjacent multipliers are fixed at the outer boundaries nums[l-1] and nums[r+1], cleanly decoupling the subproblems [l, k-1] and [k+1, r].",
        "Because bursting the last balloon gives 10x points.",
        "Because the last balloon is always the largest number.",
        "Because bursting the first balloon causes an infinite loop."
      ],
      "correctAnswer": 0,
      "explanation": "Bursting a balloon first creates dependencies across subproblems because its neighbors disappear. Choosing the last balloon k to burst means all other balloons in [l, r] are already gone, so balloon k is bordered strictly by nums[l-1] and nums[r+1]."
    },
    {
      "id": "m20-q13",
      "question": "Under what mathematical condition can Divide-and-Conquer DP optimization reduce a partition DP from O(KN²) to O(KN log N)?",
      "options": [
        "When the optimal split positions satisfy monotonicity: opt[g][i] <= opt[g][i + 1].",
        "When all matrix entries are powers of two.",
        "When the input array is already sorted.",
        "When the number of groups K is greater than N."
      ],
      "correctAnswer": 0,
      "explanation": "Divide-and-Conquer DP optimization requires monotonicity of optimal split positions (opt[g][i] <= opt[g][i+1]), meaning the optimal partition boundary for a larger prefix cannot move to the left."
    },
    {
      "id": "m20-q14",
      "question": "How does the Meet in the Middle technique optimize the Subset Sum problem for N = 40 elements?",
      "options": [
        "It splits the 40 elements into two halves of 20, generates 2²⁰ ≈ 10⁶ subset sums for each half, sorts one list, and uses binary search in O(N 2^(N/2)) time.",
        "It approximates the sum using Monte Carlo simulation.",
        "It applies dynamic programming with an array of size 2⁴⁰.",
        "It deletes the middle 20 elements."
      ],
      "correctAnswer": 0,
      "explanation": "2⁴⁰ ≈ 1.1 × 10¹² is impossible to enumerate. Splitting into two 20-element sets requires evaluating only 2²⁰ ≈ 10⁶ sums per half, which easily runs in memory and executes in fractions of a second using binary search."
    },
    {
      "id": "m20-q15",
      "question": "What bitwise expression clears the lowest / rightmost set bit of an integer n in O(1) time?",
      "options": [
        "n & (n - 1)",
        "n | (n + 1)",
        "n ^ (n - 1)",
        "n & (-n)"
      ],
      "correctAnswer": 0,
      "explanation": "Subtracting 1 flips the rightmost set bit and all bits below it. Bitwise ANDing n with n - 1 clears that lowest set bit while leaving all higher bits intact (Brian Kernighan's algorithm)."
    },
    {
      "id": "m20-q16",
      "question": "What bitwise expression isolates the rightmost set bit of integer n as a power-of-two mask?",
      "options": [
        "n & (-n)",
        "n & (n - 1)",
        "n ^ (-n)",
        "~n + 1"
      ],
      "correctAnswer": 0,
      "explanation": "In two's complement, -n = (~n) + 1. Performing n & (-n) zeroes out all bits except the lowest set bit of n."
    },
    {
      "id": "m20-q17",
      "question": "Given an array where every integer appears twice except for two unique numbers A and B, how does XOR separate them?",
      "options": [
        "XOR all elements to get xor = A ^ B, find a set bit mask = xor & -xor, and partition array elements into two buckets based on that bit.",
        "Sort the array and take the first two elements.",
        "Multiply all elements and factorize the product.",
        "Sum all numbers and divide by 2."
      ],
      "correctAnswer": 0,
      "explanation": "Because A != B, A ^ B has at least one set bit. Filtering the array into two subsets based on that bit guarantees A is in one group and B is in the other, with all duplicate pairs canceling out in their respective groups."
    },
    {
      "id": "m20-q18",
      "question": "What is the difference between a Las Vegas algorithm and a Monte Carlo randomized algorithm?",
      "options": [
        "Las Vegas always produces the correct answer with variable runtime; Monte Carlo has bounded runtime but may produce an incorrect answer with controllable probability.",
        "Las Vegas uses floating-point numbers; Monte Carlo uses integers.",
        "Monte Carlo is deterministic; Las Vegas is non-deterministic.",
        "Las Vegas only works on graph problems."
      ],
      "correctAnswer": 0,
      "explanation": "A Las Vegas randomized algorithm (like Randomized QuickSort) is guaranteed to produce the exact correct result, with running time being the random variable. A Monte Carlo algorithm runs in fixed time but carries a bounded probability of error."
    },
    {
      "id": "m20-q19",
      "question": "In Reservoir Sampling from an unknown-length stream, how does choosing the i-th item with probability 1/i guarantee equal 1/N selection probability?",
      "options": [
        "The probability of item k being chosen is 1/k, and the probability it is NOT replaced by any subsequent item i (from k+1 to N) is ∏_{i=k+1}^N (1 - 1/i) = k/N; multiplying (1/k) * (k/N) yields exactly 1/N.",
        "Because random numbers in Java repeat every N calls.",
        "Because stream items are shuffled before arrival.",
        "Because Reservoir Sampling stores all previous items in memory."
      ],
      "correctAnswer": 0,
      "explanation": "The telescoping product of survival probabilities (1 - 1/i) from k+1 to N cancels out to k/N. Multiplying the initial selection probability (1/k) by the survival probability (k/N) gives exactly (1/k) * (k/N) = 1/N for every item."
    },
    {
      "id": "m20-q20",
      "question": "In algorithm correctness proofs, how does an exchange argument prove that a greedy choice is globally optimal?",
      "options": [
        "It assumes an optimal solution does not make the greedy choice, and proves that swapping that decision for the greedy choice yields a solution of equal or superior quality without violating constraints.",
        "It exchanges the input array with a sorted copy.",
        "It swaps recursive calls for loops.",
        "It exchanges time complexity for space complexity."
      ],
      "correctAnswer": 0,
      "explanation": "An exchange argument shows that any optimal solution that deviates from the greedy choice can be modified by swapping in the greedy choice without degrading the objective value, proving the greedy choice is never suboptimal."
    }
  ]
};

// Write both files
const destJavaProg = path.join(__dirname, '../backend/content/java-programming/modules/advanced-dp.json');
const destJava = path.join(__dirname, '../backend/content/java/modules/advanced-dp.json');

fs.writeFileSync(destJavaProg, JSON.stringify(moduleDataAdvancedDP, null, 2), 'utf-8');

const moduleDataCourseJava = { ...moduleDataAdvancedDP, courseId: "java" };
fs.writeFileSync(destJava, JSON.stringify(moduleDataCourseJava, null, 2), 'utf-8');

console.log('Successfully generated:');
console.log(' - ' + destJavaProg);
console.log(' - ' + destJava);
