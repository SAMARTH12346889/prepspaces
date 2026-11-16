const fs = require('fs');
const path = require('path');

const moduleData = {
  id: "heaps",
  title: "13. Heaps, Priority Queues & Advanced Trees",
  track: "java",
  courseId: "java-programming",
  description: "Master heaps, priority queues, and advanced self-balancing trees: Min Heap and Max Heap invariants, complete binary tree array indexing (2i+1, 2i+2, floor((i-1)/2)), sift-up and sift-down mechanics, O(n) bottom-up Build Heap proof, in-place Heap Sort, Java PriorityQueue internals, optimal sized heaps for Kth largest/smallest, Top K Frequent Elements (LeetCode 347), Merge K Sorted Lists (LeetCode 23), two-heap streaming median finder (LeetCode 295), AVL Trees balance factors and 4 rotation cases (LL, RR, LR, RL), Red-Black Tree 5 invariants, recoloring, and TreeMap internals.",
  totalQuestions: 20,
  questions: [
    {
      id: "m13-q1",
      question: "Which element is always located at the root of a Min Heap?",
      options: ["Largest element", "Smallest element", "Middle element", "Arbitrary element depending on insertion"],
      correctIndex: 1,
      explanation: "By definition of the Min Heap property, every parent node is less than or equal to its children (Parent <= LeftChild and Parent <= RightChild). Therefore, the global minimum is always at the root (index 0)."
    },
    {
      id: "m13-q2",
      question: "What is the time complexity of inserting an element into a binary heap containing N elements?",
      options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
      correctIndex: 1,
      explanation: "Inserting an element appends it to the last array position and sifts it up toward the root. Since a complete binary tree has height floor(log2(N)), sift-up requires at most O(log N) comparisons and swaps."
    },
    {
      id: "m13-q3",
      question: "What is the time complexity of constructing a binary heap using the bottom-up Build Heap algorithm on an unsorted array of size N?",
      options: ["O(log N)", "O(N)", "O(N log N)", "O(N^2)"],
      correctIndex: 1,
      explanation: "Bottom-up Build Heap calls heapify starting from the last non-leaf node (floor(N/2) - 1) down to index 0. Because most nodes reside on levels near the bottom of the tree with very small sub-heights, the summation of (height * nodes_at_height) converges to O(N)."
    },
    {
      id: "m13-q4",
      question: "Why does bottom-up Build Heap achieve O(N) linear time instead of O(N log N)?",
      options: [
        "It uses a hash table to skip comparisons",
        "Approximately half of the nodes are leaves requiring 0 swaps, and higher levels have exponentially fewer nodes",
        "It relies on QuickSelect partitioning",
        "It sorts the array in-place first"
      ],
      correctIndex: 1,
      explanation: "In a complete binary tree, ~N/2 nodes are leaves at height 0 (costing 0 operations), ~N/4 are at height 1 (costing at most 1 swap), and only 1 node (the root) is at height log N. Summing (N/2^(h+1)) * h yields a convergent arithmetic-geometric series bounded by 2N = O(N)."
    },
    {
      id: "m13-q5",
      question: "For a complete binary heap stored in a zero-based array, what is the formula to locate the parent of a node at index i (where i > 0)?",
      options: ["floor((i - 1) / 2)", "floor(i / 2)", "2 * i + 1", "2 * i - 1"],
      correctIndex: 0,
      explanation: "In zero-based indexing, the parent of index i is given by floor((i - 1) / 2). For example, nodes at indices 1 and 2 both map to parent index (1-1)/2 = 0 and (2-1)/2 = 0."
    },
    {
      id: "m13-q6",
      question: "For a node at index i in a zero-based array binary heap, what are the left and right child indices?",
      options: ["Left: 2i, Right: 2i + 1", "Left: 2i + 1, Right: 2i + 2", "Left: 2i - 1, Right: 2i", "Left: i + 1, Right: i + 2"],
      correctIndex: 1,
      explanation: "In zero-based indexing, the left child is located at 2i + 1 and the right child is located at 2i + 2 (assuming these indices are strictly less than the heap size)."
    },
    {
      id: "m13-q7",
      question: "In an array representation of a binary heap with N elements, what is the index range of the leaf nodes?",
      options: ["0 to floor(N / 2) - 1", "floor(N / 2) to N - 1", "N / 2 to N", "Only index N - 1"],
      correctIndex: 1,
      explanation: "The last non-leaf node is at index floor(N/2) - 1. Therefore, all subsequent positions from floor(N/2) up to N - 1 are leaf nodes with no children."
    },
    {
      id: "m13-q8",
      question: "What is the worst-case time complexity and auxiliary space complexity of standard in-place Heap Sort?",
      options: ["Time: O(N log N), Auxiliary Space: O(1)", "Time: O(N^2), Auxiliary Space: O(1)", "Time: O(N log N), Auxiliary Space: O(N)", "Time: O(N), Auxiliary Space: O(log N)"],
      correctIndex: 0,
      explanation: "Heap Sort builds a Max Heap in O(N) and performs N - 1 extractions, each costing O(log N) sift-downs, yielding a guaranteed O(N log N) worst-case time with O(1) auxiliary space when implemented iteratively."
    },
    {
      id: "m13-q9",
      question: "Is standard Heap Sort a stable sorting algorithm?",
      options: ["Yes, always", "No, relative order of duplicate elements can be rearranged during sift-downs", "Yes, when using a Min Heap", "Stable only for integers"],
      correctIndex: 1,
      explanation: "Heap Sort is not stable because swapping elements across tree levels and between index 0 and index (size - 1) destroys the relative initial order of equal keys."
    },
    {
      id: "m13-q10",
      question: "In Java, what ordering does `java.util.PriorityQueue<Integer>` maintain by default when no Comparator is provided?",
      options: ["Descending order (Max Heap)", "Ascending natural order (Min Heap)", "First-In-First-Out (FIFO)", "Random order"],
      correctIndex: 1,
      explanation: "By default, Java's PriorityQueue orders elements according to their natural ordering (Comparable), placing the smallest element at the head (acting as a Min Heap)."
    },
    {
      id: "m13-q11",
      question: "How can you instantiate a Java `PriorityQueue<Integer>` that acts as a Max Heap?",
      options: [
        "new PriorityQueue<>(Comparator.reverseOrder())",
        "new PriorityQueue<>(Ordering.MAX)",
        "new MaxPriorityQueue<>()",
        "new PriorityQueue<>(Comparator.naturalOrder())"
      ],
      correctIndex: 0,
      explanation: "Passing `Comparator.reverseOrder()` or `(a, b) -> Integer.compare(b, a)` reverses the comparison contract so that larger values have higher priority at the root."
    },
    {
      id: "m13-q12",
      question: "What happens when you iterate through a Java PriorityQueue using an enhanced for-loop `for (int val : pq)`?",
      options: [
        "Elements are iterated in strictly sorted priority order",
        "Elements are iterated in arbitrary internal array layout order without sorted guarantees",
        "An UnsupportedOperationException is thrown",
        "The queue is emptied during iteration"
      ],
      correctIndex: 1,
      explanation: "The Oracle Java documentation explicitly warns that the iterator does NOT guarantee elements in priority order; it traverses the backing array. To extract elements in sorted order, you must call `pq.poll()` repeatedly."
    },
    {
      id: "m13-q13",
      question: "Which data structure and size provides the optimal O(N log K) time and O(K) space to find the Kth largest element in an unsorted array of size N?",
      options: [
        "Max Heap of size N",
        "Min Heap of size K",
        "Min Heap of size N",
        "Stack of size K"
      ],
      correctIndex: 1,
      explanation: "A Min Heap of size K retains only the K largest elements seen so far. When heap size exceeds K, removing the minimum (`poll()`) discards smaller elements, leaving the Kth largest at the root in O(N log K) time."
    },
    {
      id: "m13-q14",
      question: "In the Two-Heaps algorithm for finding the running median of a data stream (LeetCode 295), how are the heaps configured?",
      options: [
        "Lower half: Max Heap, Upper half: Min Heap",
        "Lower half: Min Heap, Upper half: Max Heap",
        "Two Min Heaps of equal sizes",
        "Two Max Heaps of equal sizes"
      ],
      correctIndex: 0,
      explanation: "The smaller half of numbers is stored in a Max Heap (root gives the maximum of the lower half), and the larger half is stored in a Min Heap (root gives the minimum of the upper half). The median is computed from these two roots in O(1) time."
    },
    {
      id: "m13-q15",
      question: "What is the time complexity of merging K sorted linked lists containing N total nodes using a Min Heap (LeetCode 23)?",
      options: ["O(N log K)", "O(K log N)", "O(N * K)", "O(N^2)"],
      correctIndex: 0,
      explanation: "The Min Heap holds at most K nodes (the active heads of each non-empty list). Each of the N total nodes is inserted and extracted once, taking O(log K) per step, for a total time of O(N log K) and auxiliary space of O(K)."
    },
    {
      id: "m13-q16",
      question: "What is the valid Balance Factor (BF = Height(left) - Height(right)) for every node in a valid AVL Tree?",
      options: ["BF in {-1, 0, 1}", "BF in {0, 1, 2}", "BF in {-2, 0, 2}", "BF must strictly equal 0"],
      correctIndex: 0,
      explanation: "An AVL Tree strictly requires that for every node, the difference between the left and right subtree heights is at most 1: |BF| <= 1, meaning BF in {-1, 0, 1}."
    },
    {
      id: "m13-q17",
      question: "Which single rotation is applied to rebalance a node that has a Left-Left (LL) imbalance in an AVL tree?",
      options: ["Left rotation", "Right rotation", "Left-Right double rotation", "Right-Left double rotation"],
      correctIndex: 1,
      explanation: "An LL imbalance occurs when the left subtree of the left child is heavy (BF = +2, left child BF >= 0). A single Right Rotation at the imbalanced node restores balance in O(1) time."
    },
    {
      id: "m13-q18",
      question: "Which sequence of rotations corrects an AVL Left-Right (LR) imbalance?",
      options: [
        "Left rotation on left child, then Right rotation on root",
        "Right rotation on left child, then Left rotation on root",
        "Two consecutive Right rotations",
        "Two consecutive Left rotations"
      ],
      correctIndex: 0,
      explanation: "An LR imbalance is a 'zig-zag' shape. First, a Left Rotation is applied to the left child to convert the imbalance into a straight LL case, followed by a Right Rotation on the root node."
    },
    {
      id: "m13-q19",
      question: "Which of the following is an invariant property of a Red-Black Tree?",
      options: [
        "The root must always be red",
        "No two consecutive red nodes are permitted (a red node's children must be black)",
        "Every path from root to leaf has a different black height",
        "All data nodes must have exactly two non-null children"
      ],
      correctIndex: 1,
      explanation: "Rule 4 of Red-Black Trees dictates that if a node is red, both its children must be black. Therefore, red nodes cannot appear consecutively along any path from the root to a leaf."
    },
    {
      id: "m13-q20",
      question: "Which Java standard library collection is internally implemented using a Red-Black Tree to guarantee O(log N) search, insert, and delete?",
      options: ["java.util.HashMap", "java.util.PriorityQueue", "java.util.TreeMap", "java.util.LinkedHashMap"],
      correctIndex: 2,
      explanation: "Java's `TreeMap` (and `TreeSet`, which wraps TreeMap) is implemented as a Red-Black Tree, guaranteeing O(log N) time for `containsKey`, `get`, `put`, `remove`, and ordered navigation operations."
    }
  ]
};

const paths = [
  path.resolve(__dirname, '../backend/content/java-programming/modules/heaps.json'),
  path.resolve(__dirname, '../backend/content/java/modules/heaps.json')
];

paths.forEach(p => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(moduleData, null, 2) + '\n', 'utf8');
  console.log('Successfully wrote', p);
});
