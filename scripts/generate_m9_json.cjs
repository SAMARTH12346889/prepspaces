const fs = require('fs');
const path = require('path');

const outPath1 = path.resolve(__dirname, '../backend/content/java-programming/modules/linked-lists.json');
const outPath2 = path.resolve(__dirname, '../backend/content/java/modules/linked-lists.json');

const questions = [
  {
    id: "m9-q1",
    question: "What is a linked list?",
    options: [
      "A collection of sorted values stored only in arrays",
      "A sequence of nodes connected through references",
      "A mathematical tree",
      "A fixed-size primitive data structure"
    ],
    correctIndex: 1,
    explanation: "A linked list is a linear data structure composed of discrete node objects linked dynamically by object references."
  },
  {
    id: "m9-q2",
    question: "What does a singly linked-list node contain?",
    options: [
      "Only data",
      "Data and previous reference",
      "Data and next reference",
      "Two next references"
    ],
    correctIndex: 2,
    explanation: "A singly linked node stores its payload value (`data`) and a reference to the succeeding node (`next`)."
  },
  {
    id: "m9-q3",
    question: "What is the time complexity of inserting at the head of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctIndex: 0,
    explanation: "Prepending at the head requires creating a node, pointing its next to the current head, and updating head — an O(1) constant-time operation."
  },
  {
    id: "m9-q4",
    question: "What is the time complexity of accessing an arbitrary index in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(2ⁿ)"],
    correctIndex: 2,
    explanation: "Because nodes are allocated dynamically on the heap without contiguous memory indexing, accessing index k requires traversing k links sequentially, taking O(n) worst-case time."
  },
  {
    id: "m9-q5",
    question: "Which linked list supports bidirectional traversal (both forward and backward)?",
    options: ["Singly linked list", "Doubly linked list", "Array", "Stack"],
    correctIndex: 1,
    explanation: "A doubly linked list stores both `prev` and `next` object references in each node, enabling O(1) bidirectional navigation."
  },
  {
    id: "m9-q6",
    question: "What is special about a circular singly linked list?",
    options: [
      "Its tail points to null",
      "Its tail points to the head",
      "It has no nodes",
      "It has no data"
    ],
    correctIndex: 1,
    explanation: "In a circular linked list, the final node (tail) connects back to the first node (head) instead of referencing null."
  },
  {
    id: "m9-q7",
    question: "Which algorithm detects a cycle using slow and fast pointers?",
    options: ["Binary search", "Merge sort", "Floyd's algorithm", "Counting sort"],
    correctIndex: 2,
    explanation: "Floyd's cycle detection (tortoise and hare algorithm) employs a slow pointer advancing 1 step and a fast pointer advancing 2 steps."
  },
  {
    id: "m9-q8",
    question: "How many steps does the fast pointer move during each iteration of Floyd's algorithm?",
    options: ["One", "Two", "Three", "Four"],
    correctIndex: 1,
    explanation: "The fast pointer moves two nodes per iteration (`fast = fast.next.next`), catching the slow pointer if a loop exists."
  },
  {
    id: "m9-q9",
    question: "What is the auxiliary space complexity of iterative linked-list reversal?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    correctIndex: 2,
    explanation: "Iterative reversal modifies pointers in-place using only three reference variables (`prev`, `curr`, `next`), requiring O(1) auxiliary space."
  },
  {
    id: "m9-q10",
    question: "How can the middle of a linked list be found efficiently in a single pass?",
    options: ["Sorting", "Slow and fast pointers", "HashMap only", "Binary search"],
    correctIndex: 1,
    explanation: "When fast moves twice as fast as slow, slow lands exactly on the middle node when fast reaches the end of the list."
  },
  {
    id: "m9-q11",
    question: "How should node identity be checked when finding two lists' intersection?",
    options: [
      "Compare their data values",
      "Compare their indices",
      "Compare references using ==",
      "Sort both lists"
    ],
    correctIndex: 2,
    explanation: "An intersection occurs when two lists share the exact same physical heap node object; reference equality `nodeA == nodeB` must be checked."
  },
  {
    id: "m9-q12",
    question: "What is the time complexity of merging two sorted singly linked lists of lengths m and n?",
    options: ["O(log n)", "O(m + n)", "O(n²)", "O(1)"],
    correctIndex: 1,
    explanation: "Merging two sorted lists examines each node from both lists at most once to relink them, resulting in linear O(m + n) time."
  },
  {
    id: "m9-q13",
    question: "What extra memory does the HashSet method for removing duplicates from an unsorted list use in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctIndex: 2,
    explanation: "If all n elements are unique, the HashSet stores all n values, requiring O(n) auxiliary memory."
  },
  {
    id: "m9-q14",
    question: "Which Java class in java.util provides a built-in doubly linked list?",
    options: ["ArrayList", "LinkedList", "HashMap", "HashSet"],
    correctIndex: 1,
    explanation: "`java.util.LinkedList` implements the `List` and `Deque` interfaces using an internal bidirectional doubly linked list."
  },
  {
    id: "m9-q15",
    question: "What is a major disadvantage of a linked list compared with an array?",
    options: [
      "It cannot store integers",
      "It cannot be traversed",
      "It lacks constant-time indexed access",
      "It cannot grow dynamically"
    ],
    correctIndex: 2,
    explanation: "Arrays allow O(1) random access via arithmetic memory offsets; linked lists require sequential traversal O(n) to reach index k."
  },
  {
    id: "m9-q16",
    question: "Why can deleting a known node take O(1) time in a Doubly Linked List but O(n) in a Singly Linked List?",
    options: [
      "Doubly linked lists store precomputed sizes in every node",
      "Its predecessor is directly accessible via node.prev without traversing from head",
      "Doubly linked lists use contiguous memory buffers",
      "The JVM automatically optimizes double references"
    ],
    correctIndex: 1,
    explanation: "In a singly linked list, unlinking a node requires locating its predecessor (taking O(n) traversal from head). In a doubly linked list, `node.prev` is immediately available in O(1)."
  },
  {
    id: "m9-q17",
    question: "What is the key behavioral difference between LinkedList.removeFirst() and LinkedList.pollFirst()?",
    options: [
      "removeFirst() takes O(n) while pollFirst() takes O(1)",
      "removeFirst() throws NoSuchElementException on empty list; pollFirst() returns null",
      "pollFirst() removes the tail node instead of head",
      "removeFirst() creates a deep copy before deletion"
    ],
    correctIndex: 1,
    explanation: "Standard collection contracts define `removeFirst()` to throw `NoSuchElementException` when called on an empty collection, while `pollFirst()` returns `null` safely."
  },
  {
    id: "m9-q18",
    question: "What is the time and auxiliary space complexity of Merge Sort on a Singly Linked List?",
    options: [
      "O(n²) time and O(1) space",
      "O(n log n) time and O(log n) recursion call-stack space",
      "O(n log n) time and O(n) auxiliary heap array space",
      "O(n) time and O(n) space"
    ],
    correctIndex: 1,
    explanation: "Unlike arrays, linked lists can merge sorted halves in O(1) auxiliary space simply by relinking node references, requiring only O(log n) stack space for recursion."
  },
  {
    id: "m9-q19",
    question: "In a Circular Singly Linked List, why is maintaining a 'tail' reference preferable to maintaining a 'head' reference?",
    options: [
      "tail allows O(1) access to both the last node (tail) and the first node (tail.next)",
      "head cannot point to null in circular lists",
      "tail consumes half the memory of head",
      "It prevents Java garbage collection cycles"
    ],
    correctIndex: 0,
    explanation: "With only a tail pointer in a circular list, `tail` is the end and `tail.next` is immediately the head, giving O(1) operations at both ends."
  },
  {
    id: "m9-q20",
    question: "Why do linked lists typically exhibit slower iteration benchmarks than arrays despite both having O(n) traversal complexity?",
    options: [
      "Linked lists use 64-bit integer values only",
      "Separate heap allocations cause poor CPU cache spatial locality and frequent cache misses",
      "Java forbids JIT compilation on pointer traversals",
      "Linked list references require synchronization locks"
    ],
    correctIndex: 1,
    explanation: "Array elements sit contiguously in memory, leveraging CPU cache prefetching. Linked list nodes are scattered across the heap, causing CPU cache misses on pointer chasing."
  }
];

const moduleData = {
  id: "linked-lists",
  title: "9. Linked Lists",
  track: "java",
  courseId: "java-programming",
  description: "Master linked-list data structures in Java: node architecture, reference mechanics, singly, doubly, and circular linked lists, pointer manipulation (head/tail/index insertion and deletion), iterative/recursive reversal, slow and fast pointer techniques, Floyd's cycle detection, two-pointer intersection, and production-grade implementations.",
  totalQuestions: questions.length,
  questions: questions
};

fs.writeFileSync(outPath1, JSON.stringify(moduleData, null, 2), 'utf8');
fs.writeFileSync(outPath2, JSON.stringify(moduleData, null, 2), 'utf8');

console.log(`Generated JSON successfully with ${questions.length} questions.`);
