const fs = require('fs');
const path = require('path');

const moduleData = {
  id: "trees",
  title: "12. Trees & Binary Search Trees",
  track: "java",
  courseId: "java-programming",
  description: "Master foundational and advanced tree data structures: binary tree anatomy, depth, height, level, full/complete/perfect/balanced taxonomies, recursive traversals (Preorder, Inorder, Postorder), BFS Level-Order traversal using Queues, Binary Search Tree (BST) operations (Search, Insertion, 3-case Deletion via Inorder Successor/Predecessor), bottom-up tree diameter (LeetCode 543), AVL balance invariants, Lowest Common Ancestor (LCA), strict range-bound BST validation (LeetCode 98), and preorder tree serialization/deserialization (LeetCode 297).",
  totalQuestions: 20,
  questions: [
    {
      id: "m12-q1",
      question: "Which tree traversal visits nodes in the order: Root → Left Subtree → Right Subtree?",
      options: ["Inorder", "Postorder", "Preorder", "Level-order"],
      correctIndex: 2,
      explanation: "Preorder traversal processes the current Root node first, followed recursively by the Left subtree, and finally the Right subtree."
    },
    {
      id: "m12-q2",
      question: "Which data structure is primarily used to implement Breadth-First Search (BFS) level-order traversal?",
      options: ["Stack", "Queue", "HashMap", "TreeSet"],
      correctIndex: 1,
      explanation: "A Queue (FIFO) tracks nodes level by level, ensuring that children of earlier nodes are visited before deeper descendants."
    },
    {
      id: "m12-q3",
      question: "What is the maximum number of nodes in a binary tree of height 3 (measuring height by edges)?",
      options: ["7", "8", "15", "16"],
      correctIndex: 2,
      explanation: "For a binary tree with height h (edges), the maximum number of nodes in a perfect tree is 2^(h+1) - 1. For h = 3, N = 2^(3+1) - 1 = 16 - 1 = 15."
    },
    {
      id: "m12-q4",
      question: "Where is the minimum element always located in a valid Binary Search Tree (BST)?",
      options: ["Root node", "Rightmost node", "Leftmost node", "Any leaf node"],
      correctIndex: 2,
      explanation: "In a BST, every left edge leads to smaller values. Therefore, traversing left until `node.left == null` leads to the absolute minimum element."
    },
    {
      id: "m12-q5",
      question: "When deleting a BST node with two children, which node is typically used to replace it in the inorder successor method?",
      options: ["Maximum in left subtree", "Minimum in right subtree", "Root node", "Any arbitrary leaf"],
      correctIndex: 1,
      explanation: "The inorder successor is the smallest value strictly greater than the node, which is found at the leftmost node (minimum) of the right subtree."
    },
    {
      id: "m12-q6",
      question: "What is the time complexity of the optimized postorder/bottom-up binary tree diameter calculation?",
      options: ["O(log n)", "O(n log n)", "O(n)", "O(n^2)"],
      correctIndex: 2,
      explanation: "By computing subtree heights and updating the global diameter in a single postorder pass, each node is visited once in O(n) time."
    },
    {
      id: "m12-q7",
      question: "Which technique is most appropriate for validating that a binary tree strictly satisfies the global BST ordering property?",
      options: [
        "Checking immediate children only (node.left < node < node.right)",
        "Using recursive minimum and maximum range bounds (min < node.val < max)",
        "Level-order queue traversal",
        "Sorting the node references"
      ],
      correctIndex: 1,
      explanation: "Checking immediate children fails because values deep in a right subtree could be smaller than an ancestor. Range bounds (min, max) ensure global subtree correctness."
    },
    {
      id: "m12-q8",
      question: "Why are null markers (such as '#') essential when serializing a binary tree?",
      options: [
        "To sort node values",
        "To reduce tree height",
        "To preserve the exact missing-child structure unambiguously",
        "To eliminate duplicate values"
      ],
      correctIndex: 2,
      explanation: "Without null markers, identical preorder sequences could represent multiple different tree shapes. Null markers record missing children so reconstruction is unique."
    },
    {
      id: "m12-q9",
      question: "In a Full Binary Tree, how many children can each node possess?",
      options: [
        "Exactly 1 child",
        "Either 0 or 2 children",
        "At most 1 child",
        "Always 2 children"
      ],
      correctIndex: 1,
      explanation: "In a Full Binary Tree, every node has either zero children (leaf) or exactly two children; no node has a single child."
    },
    {
      id: "m12-q10",
      question: "What property distinguishes a Complete Binary Tree?",
      options: [
        "All levels are full, and all leaves are at the exact same depth",
        "All levels except possibly the last are completely filled, and the last level is filled from left to right",
        "Every node has balance factor 0",
        "Left subtree height equals right subtree height"
      ],
      correctIndex: 1,
      explanation: "A Complete Binary Tree is completely filled up to depth d - 1, and level d is populated sequentially from left to right with no gaps."
    },
    {
      id: "m12-q11",
      question: "What does an Inorder traversal (Left → Root → Right) of a valid BST produce?",
      options: [
        "Values in descending order",
        "Values in strictly ascending sorted order",
        "Values grouped by level",
        "Unsorted values"
      ],
      correctIndex: 1,
      explanation: "Because Left < Root < Right at every node, an inorder traversal always visits elements in strictly increasing sorted order."
    },
    {
      id: "m12-q12",
      question: "In a non-empty binary tree with n nodes, exactly how many edges connect them?",
      options: ["n", "n - 1", "2n", "n / 2"],
      correctIndex: 1,
      explanation: "Every node except the root has exactly one incoming parent edge, so a tree with n nodes contains exactly n - 1 edges."
    },
    {
      id: "m12-q13",
      question: "What is the difference between the depth of a node and the height of a node?",
      options: [
        "Depth is edges from root down to node; Height is edges from node down to deepest leaf",
        "Depth is edges to deepest leaf; Height is edges from root",
        "Depth and height are always identical",
        "Depth is measured in bytes; Height is measured in nodes"
      ],
      correctIndex: 0,
      explanation: "Depth measures distance from the root (Root = 0). Height measures the longest path downward to a leaf (Leaf = 0)."
    },
    {
      id: "m12-q14",
      question: "What is the worst-case time complexity of searching in an unbalanced, skewed Binary Search Tree?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      correctIndex: 2,
      explanation: "When elements are inserted in sorted order, an ordinary BST degenerates into a single linear chain (skewed tree), causing search to take O(n) time."
    },
    {
      id: "m12-q15",
      question: "In an AVL self-balancing tree, what is the allowed range for the balance factor (BF = Height(left) - Height(right))?",
      options: ["BF = 0 only", "BF in {-1, 0, 1}", "BF in {-2, 0, 2}", "BF <= 2"],
      correctIndex: 1,
      explanation: "An AVL tree maintains height balance by ensuring that for every node, the height difference between left and right subtrees is at most 1 (BF in {-1, 0, 1})."
    },
    {
      id: "m12-q16",
      question: "How is Lowest Common Ancestor (LCA) computed in a BST with keys p and q in O(h) time?",
      options: [
        "By branching left if both p and q are smaller than root, branching right if both are greater, or returning root when split",
        "By storing parent pointers in a hash table",
        "By performing postorder traversal on both subtrees",
        "By calculating tree diameter"
      ],
      correctIndex: 0,
      explanation: "In a BST, if both keys are smaller than root, LCA is in left subtree; if both are greater, LCA is in right subtree; if p and q split across root, root is the LCA."
    },
    {
      id: "m12-q17",
      question: "Why is Long.MIN_VALUE and Long.MAX_VALUE used in the BST validation range function instead of Integer values?",
      options: [
        "Because Java long runs faster than int",
        "To prevent overflow and boundary false-negatives when valid tree nodes contain Integer.MIN_VALUE or Integer.MAX_VALUE",
        "Because TreeNodes in Java only store 64-bit numbers",
        "To comply with JVM 64-bit memory architecture"
      ],
      correctIndex: 1,
      explanation: "If a tree node contains Integer.MAX_VALUE, strict comparison `val < max` with an integer bound would fail or cause integer overflow."
    },
    {
      id: "m12-q18",
      question: "For a binary tree with n nodes serialized using preorder traversal with null markers, how many total tokens are produced?",
      options: ["n", "2n", "2n + 1", "n^2"],
      correctIndex: 2,
      explanation: "Every binary tree with n nodes has exactly n + 1 null child references. Including both the n nodes and n + 1 null markers yields 2n + 1 total tokens."
    },
    {
      id: "m12-q19",
      question: "In zero-based array indexing of a complete binary tree, what is the index of the left child of node at index i?",
      options: ["2i", "2i + 1", "2i + 2", "i / 2"],
      correctIndex: 1,
      explanation: "With zero-based indexing, the left child of node at index i is at 2i + 1, the right child is at 2i + 2, and the parent is at floor((i - 1) / 2)."
    },
    {
      id: "m12-q20",
      question: "What is the space complexity of Breadth-First Search (BFS) level-order traversal on a binary tree?",
      options: ["O(1)", "O(h)", "O(w) where w is the maximum width of the tree", "O(n^2)"],
      correctIndex: 2,
      explanation: "At its peak, the BFS queue holds all the nodes of the widest level, requiring O(w) auxiliary space (which can be up to n/2 = O(n) in a full tree)."
    }
  ]
};

const paths = [
  path.resolve(__dirname, '../backend/content/java-programming/modules/trees.json'),
  path.resolve(__dirname, '../backend/content/java/modules/trees.json')
];

for (const p of paths) {
  fs.writeFileSync(p, JSON.stringify(moduleData, null, 2), 'utf8');
  console.log(`Wrote ${p} successfully!`);
}
