const fs = require('fs');
const path = require('path');

const outPath1 = path.resolve(__dirname, '../backend/content/java-programming/modules/stacks-queues.json');
const outPath2 = path.resolve(__dirname, '../backend/content/java/modules/stacks-queues.json');

const questions = [
  {
    id: "m10-q1",
    question: "What principle does a stack follow?",
    options: ["FIFO", "LIFO", "Random order", "Sorted order"],
    correctIndex: 1,
    explanation: "A stack follows LIFO (Last In, First Out) where the most recently inserted element is always the first one removed."
  },
  {
    id: "m10-q2",
    question: "Which operation inserts an element into a stack?",
    options: ["Pop", "Peek", "Push", "Dequeue"],
    correctIndex: 2,
    explanation: "`push(value)` inserts an element onto the top of the stack."
  },
  {
    id: "m10-q3",
    question: "Which operation removes an element from the top of a stack?",
    options: ["Push", "Pop", "Enqueue", "Offer"],
    correctIndex: 1,
    explanation: "`pop()` removes and returns the most recently pushed top element of the stack."
  },
  {
    id: "m10-q4",
    question: "What principle does a normal queue follow?",
    options: ["LIFO", "FIFO", "Random order", "Reverse order"],
    correctIndex: 1,
    explanation: "A queue operates under the FIFO (First In, First Out) principle, serving elements in their exact arrival order."
  },
  {
    id: "m10-q5",
    question: "Where is an element inserted in a standard queue?",
    options: ["Front", "Rear", "Middle", "Random position"],
    correctIndex: 1,
    explanation: "In a standard queue, new elements are enqueued at the `rear` (tail) and dequeued from the `front` (head)."
  },
  {
    id: "m10-q6",
    question: "What is the primary purpose of a circular queue?",
    options: [
      "Sort elements",
      "Reuse freed array positions through wrap-around",
      "Reverse elements",
      "Remove duplicates"
    ],
    correctIndex: 1,
    explanation: "A circular queue uses modulo indexing to wrap around to index 0, reusing slots freed by previous dequeues without shifting elements."
  },
  {
    id: "m10-q7",
    question: "What is a deque (Double-Ended Queue)?",
    options: [
      "A stack with no removal operation",
      "A queue that supports insertion and deletion at both ends",
      "A sorting algorithm",
      "A tree structure"
    ],
    correctIndex: 1,
    explanation: "A deque allows elements to be added or removed from both the front and the rear in amortized constant time."
  },
  {
    id: "m10-q8",
    question: "Which Java class is modernly recommended for stack and queue implementations in single-threaded contexts?",
    options: ["ArrayList", "HashMap", "ArrayDeque", "TreeSet"],
    correctIndex: 2,
    explanation: "Java officially recommends `ArrayDeque` over the legacy synchronized `Stack` class because of superior performance, cache locality, and lack of locking overhead."
  },
  {
    id: "m10-q9",
    question: "Which algorithm uses a monotonic stack to achieve an O(n) linear-time solution?",
    options: ["Binary search", "Next Greater Element", "Merge sort", "Linear search"],
    correctIndex: 1,
    explanation: "Next Greater Element uses a monotonic decreasing stack to resolve subsequent larger elements in a single pass of O(n) amortized time."
  },
  {
    id: "m10-q10",
    question: "What is the time complexity of balanced-parentheses checking using a stack?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctIndex: 2,
    explanation: "Each character of the string is inspected once and pushed/popped at most once, yielding O(n) time."
  },
  {
    id: "m10-q11",
    question: "What is the time complexity of the optimized Stock Span algorithm using a monotonic stack?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(2ⁿ)"],
    correctIndex: 2,
    explanation: "Each price index enters and leaves the stack at most once, giving an amortized O(n) linear-time guarantee."
  },
  {
    id: "m10-q12",
    question: "Which data structure is typically used to solve Sliding Window Maximum in O(n) time?",
    options: ["Ordinary stack", "Monotonic deque", "Binary search tree only", "Heap only"],
    correctIndex: 1,
    explanation: "A monotonic decreasing deque stores indices of maximum candidates, enabling O(1) front extraction per window shift."
  },
  {
    id: "m10-q13",
    question: "What is the auxiliary space complexity of the sliding-window monotonic deque solution for window size k?",
    options: ["O(1)", "O(log n)", "O(k)", "O(n²)"],
    correctIndex: 2,
    explanation: "At any given point, the deque contains at most k candidate indices belonging to the active sliding window."
  },
  {
    id: "m10-q14",
    question: "Which data structure is fundamentally used to implement Breadth-First Search (BFS)?",
    options: ["Stack", "Queue", "Heap", "Set only"],
    correctIndex: 1,
    explanation: "BFS explores graph or tree vertices level by level, which naturally requires a FIFO queue to process earlier discovered nodes first."
  },
  {
    id: "m10-q15",
    question: "Which data structure naturally supports undo/redo operations in reverse order?",
    options: ["Queue", "Stack", "Array only", "Graph"],
    correctIndex: 1,
    explanation: "Undo mechanisms require popping the most recently executed action first, which aligns perfectly with LIFO stack semantics."
  },
  {
    id: "m10-q16",
    question: "In a circular array queue of capacity C, how is the rear pointer updated after an enqueue?",
    options: [
      "rear = rear + 1",
      "rear = (rear + 1) % C",
      "rear = (rear - 1 + C) % C",
      "rear = rear * 2"
    ],
    correctIndex: 1,
    explanation: "Modulo arithmetic `(rear + 1) % C` wraps the pointer back to index 0 when it exceeds index C - 1."
  },
  {
    id: "m10-q17",
    question: "Why is ArrayDeque in Java preferred over the legacy java.util.Stack class?",
    options: [
      "Stack does not support push/pop",
      "Stack extends Vector, imposing synchronization overhead on every operation",
      "ArrayDeque allows null elements",
      "Stack is limited to 100 elements"
    ],
    correctIndex: 1,
    explanation: "`java.util.Stack` inherits from `Vector`, meaning all operations acquire synchronized locks, adding unnecessary locking overhead in single-threaded environments."
  },
  {
    id: "m10-q18",
    question: "In Largest Rectangle in Histogram, what does popping a bar from the monotonic stack indicate?",
    options: [
      "The popped bar can extend infinitely to the right",
      "The popped bar's maximum rightward extension is bounded by the current bar",
      "The histogram is empty",
      "The area is guaranteed to be 0"
    ],
    correctIndex: 1,
    explanation: "When a shorter bar appears, any taller bar on the stack cannot extend further right; its maximum rectangular area is fully bounded and can be finalized."
  },
  {
    id: "m10-q19",
    question: "In Sliding Window Maximum, why does the monotonic deque store indices rather than element values?",
    options: [
      "Java does not support storing integers in Deque",
      "Indices allow checking whether an element has expired from the current window (index <= i - k)",
      "Indices consume less RAM than integers",
      "Indices prevent duplicate elements"
    ],
    correctIndex: 1,
    explanation: "Storing indices allows verifying if the front candidate has fallen out of the active window: `deque.peekFirst() <= i - k`."
  },
  {
    id: "m10-q20",
    question: "What is the amortized time complexity of dequeue() in a queue implemented with two stacks?",
    options: ["O(n)", "O(n²)", "O(1)", "O(log n)"],
    correctIndex: 2,
    explanation: "Although moving elements between the input and output stacks takes O(n) worst-case time, each element is transferred at most once, giving an amortized O(1) time per dequeue."
  }
];

const moduleData = {
  id: "stacks-queues",
  title: "10. Stacks, Queues & Deques",
  track: "java",
  courseId: "java-programming",
  description: "Master foundational linear ADTs: LIFO Stacks, FIFO Queues, Double-Ended Queues (Deques), circular array queues, dynamic resizing, Java's ArrayDeque, and advanced algorithmic paradigms including Monotonic Stacks (Next Greater Element, Stock Span, Histogram Area) and Monotonic Deques (Sliding Window Maximum).",
  totalQuestions: questions.length,
  questions: questions
};

fs.writeFileSync(outPath1, JSON.stringify(moduleData, null, 2), 'utf8');
fs.writeFileSync(outPath2, JSON.stringify(moduleData, null, 2), 'utf8');

console.log(`Generated JSON successfully with ${questions.length} questions.`);
