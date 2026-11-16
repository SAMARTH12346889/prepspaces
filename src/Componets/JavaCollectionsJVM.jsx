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
  Cpu,
  Search,
  Zap,
  Grid,
  Database,
  RefreshCw,
  Play,
  RotateCcw,
  BarChart3,
  Terminal,
  ShieldCheck
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_COLLECTIONS_JVM_SECTIONS } from "./JavaCollectionsJVMSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why is java.util.Map not an extension of the java.util.Collection interface?",
    options: [
      "A Collection represents an aggregation of individual objects, whereas a Map represents key-to-value key/value mappings with two-dimensional entry semantics",
      "Map was created before Collection in JDK 1.0",
      "Map cannot be iterated over, whereas Collection allows iterator access",
      "The JVM bytecode verifier prohibits interface multiple inheritance on key-value pairs"
    ],
    correct: 0,
    explanation: "Collection models an aggregation of single items (List, Set, Queue). Map models unique keys mapped to values. Forcing Map into Collection would force methods like add(Object) to possess ambiguous semantics."
  },
  {
    id: 2,
    question: "In OpenJDK's standard ArrayList implementation, what is the default capacity growth factor when internal storage overflows?",
    options: [
      "Approximately 50% (newCapacity = oldCapacity + (oldCapacity >> 1))",
      "Exactly 100% (doubling the capacity)",
      "Fixed incremental increase of 16 elements",
      "25% plus a fixed overhead of 10 elements"
    ],
    correct: 0,
    explanation: "ArrayList in OpenJDK grows by approximately 50% (newCapacity = oldCapacity + (oldCapacity >> 1)), striking an optimal balance between amortized O(1) appends and avoiding excessive unused allocated heap memory."
  },
  {
    id: 3,
    question: "Why does traversing an ArrayList frequently outperform traversing a LinkedList in real-world benchmarks, despite both possessing O(N) theoretical time complexity?",
    options: [
      "ArrayList stores object references in contiguous memory, maximizing CPU cache line utilization and hardware prefetching, whereas LinkedList incurs cache misses chasing heap node pointers",
      "LinkedList requires synchronized locks during element traversal",
      "ArrayList iterations are completely vectorized into SIMD assembly by the JVM interpreter",
      "LinkedList nodes are automatically allocated in Metaspace rather than young generation heap"
    ],
    correct: 0,
    explanation: "CPUs fetch data in cache lines (typically 64 bytes). ArrayList stores references in a contiguous native array, ensuring sequential memory locality and hardware prefetch hits. LinkedList allocates independent Node objects across the heap, incurring cache misses."
  },
  {
    id: 4,
    question: "In Java 8+ HashMap, under what conditions does an individual hash bucket convert from a singly linked list into a balanced Red-Black Tree (Treeification)?",
    options: [
      "When the bucket's collision chain length reaches 8 (TREEIFY_THRESHOLD) AND total table capacity is at least 64 (MIN_TREEIFY_CAPACITY)",
      "Whenever any two keys produce identical hash codes",
      "Whenever the table's total element count exceeds 12 (Capacity 16 * 0.75)",
      "When all keys in the map implement the java.lang.Comparable interface"
    ],
    correct: 0,
    explanation: "In OpenJDK HashMap, treeification triggers only when a bucket's bin count reaches 8 AND the table capacity is at least 64. If capacity is under 64, HashMap resizes the table instead to naturally redistribute collided keys."
  },
  {
    id: 5,
    question: "What is the primary function of the hash spreading bitwise operation `hash ^ (hash >>> 16)` in HashMap?",
    options: [
      "It XORs the upper 16 bits of the hashCode with the lower 16 bits to ensure higher-order bits influence bucket indexing in small tables",
      "It encrypts the key to prevent malicious memory dumps",
      "It eliminates all negative integer values from hashCode()",
      "It converts 32-bit hashes into 64-bit memory addresses"
    ],
    correct: 0,
    explanation: "Because table capacity is always a power of two, bucket indexing `(capacity - 1) & hash` only masks the lower bits. Spreading `hash ^ (hash >>> 16)` folds higher bits into lower bit positions, dramatically reducing collisions."
  },
  {
    id: 6,
    question: "What catastrophic issue occurs if a mutable object used as a HashMap key has its mutated field altered after being inserted into the map?",
    options: [
      "The object's new hashCode will calculate a different bucket index, making get() unable to find the entry even though it remains stored in the map",
      "The JVM immediately throws a ConcurrentModificationException",
      "The HashMap automatically deletes the entry during its next GC cycle",
      "The mutated key overwrites all other keys in the bucket"
    ],
    correct: 0,
    explanation: "HashMap places keys in buckets according to their hashCode() at insertion time. If mutable fields modify the hash later, future lookups compute a different bucket index, causing get() to return null and resulting in memory leaks."
  },
  {
    id: 7,
    question: "How does a TreeSet determine whether an element to be inserted is a duplicate of an existing set member?",
    options: [
      "By testing if comparator.compare(a, b) == 0 (or a.compareTo(b) == 0), NOT by calling equals()",
      "By strictly invoking a.equals(b)",
      "By checking if a.hashCode() == b.hashCode()",
      "By comparing object identity memory references (a == b)"
    ],
    correct: 0,
    explanation: "TreeSet (and TreeMap) rely entirely on its Comparator or Comparable implementation. If compare(a, b) == 0, the elements are treated as duplicate keys regardless of what a.equals(b) returns."
  },
  {
    id: 8,
    question: "What is the worst-case time complexity of PriorityQueue.remove(Object o) and PriorityQueue.contains(Object o)?",
    options: [
      "O(N), because locating an arbitrary object requires a linear scan over the internal array backing the heap",
      "O(log N), because binary search can be performed across the heap",
      "O(1), because the root element can be checked immediately",
      "O(N log N), because the heap must be re-sorted from scratch"
    ],
    correct: 0,
    explanation: "While peek() is O(1) and offer()/poll() are O(log N), locating an arbitrary non-root object requires traversing the unordered array elements in O(N) time before sifting down or up."
  },
  {
    id: 9,
    question: "How does ConcurrentHashMap achieve thread-safe updates without suffering from global locking contention like Hashtable or Collections.synchronizedMap?",
    options: [
      "It uses lock-free CAS (Compare-And-Swap) for empty bucket heads and synchronized locking synchronized on individual bucket head nodes for collided bins",
      "It creates a separate cloned copy of the entire table on every write",
      "It serializes all updates to an internal background worker thread",
      "It runs exclusively on virtual threads pinned to the underlying OS core"
    ],
    correct: 0,
    explanation: "Modern ConcurrentHashMap in Java 8+ uses CAS instructions to atomically place the initial node in an empty bucket. For occupied buckets, it synchronizes only on the head node of that specific bin, allowing concurrent threads to write to different buckets simultaneously."
  },
  {
    id: 10,
    question: "Under the Java Memory Model (JMM), does declaring `volatile int counter = 0` ensure that `counter++` is thread-safe across concurrent threads?",
    options: [
      "No, because counter++ is a non-atomic composite operation consisting of read, modify, and write steps",
      "Yes, volatile enforces hardware-level atomicity on all arithmetic operations",
      "Yes, because volatile prevents thread CPU registers from caching variables",
      "No, volatile only works on reference types and boolean flags"
    ],
    correct: 0,
    explanation: "Volatile guarantees memory visibility and instruction ordering (happens-before), but NOT mutual exclusion or operation atomicity. `counter++` reads the value, increments it, and writes it back; two concurrent threads can interleave these steps and lose updates. Use AtomicInteger or synchronization."
  },
  {
    id: 11,
    question: "Which of the following creates a formal 'Happens-Before' ordering relationship under the Java Memory Model?",
    options: [
      "Unlocking a monitor lock happens-before every subsequent lock on that exact same monitor",
      "Creating an ArrayList happens-before inserting elements into a LinkedList",
      "Calling System.currentTimeMillis() happens-before any garbage collection pause",
      "Any read operation happens-before any unrelated write operation in separate threads"
    ],
    correct: 0,
    explanation: "Core JMM rules establish that monitor unlock happens-before subsequent lock on the same monitor, volatile write happens-before subsequent volatile read of that field, and Thread.start() happens-before any actions in the started thread."
  },
  {
    id: 12,
    question: "Where are local primitive variables, method parameters, and object references stored during method execution?",
    options: [
      "In the executing thread's JVM Stack Frame (Local Variable Array)",
      "In the shared Old Generation Heap",
      "In the Metaspace native memory area",
      "In the JVM code cache"
    ],
    correct: 0,
    explanation: "Each thread possesses its own JVM Stack. When a method is called, a Stack Frame is pushed containing local variables, method arguments, operand stack, and reference pointers to heap-allocated objects."
  },
  {
    id: 13,
    question: "What constitutes a 'GC Root' in JVM reachability analysis?",
    options: [
      "Active thread stack frame local references, static class fields, JNI global/local references, and JVM internal system references",
      "All instances of java.lang.String stored in the heap",
      "Any object that has survived more than 15 minor garbage collection cycles",
      "Only the root node of active Red-Black Trees in TreeMap"
    ],
    correct: 0,
    explanation: "GC roots are pointers outside the garbage-collected heap that can reach heap objects: local variables and operand stack references in active threads, static class variables, JNI handles, and system class loaders."
  },
  {
    id: 14,
    question: "What is the core assumption behind the 'Generational Hypothesis' utilized by modern JVM garbage collectors?",
    options: [
      "Most allocated objects have very short lifespans and die shortly after creation, while objects surviving multiple GC cycles tend to persist for a long time",
      "Old generation objects allocate faster than young generation objects",
      "Older versions of the JVM allocate less memory than modern versions",
      "Garbage collection must run once per generational CPU clock tick"
    ],
    correct: 0,
    explanation: "The weak generational hypothesis observes that the vast majority (>90%) of objects die quickly (e.g. temporary method variables, DTOs). Generational collectors isolate young space (Eden + Survivors) to rapidly collect dead objects via minor GCs without scanning the large old generation."
  },
  {
    id: 15,
    question: "What happens during the 'Parent Delegation Model' when an Application ClassLoader is requested to load a class?",
    options: [
      "It delegates the load request up to the Platform ClassLoader (and subsequently Bootstrap ClassLoader) first before attempting to find and load the class locally",
      "It immediately loads the class from disk and pushes it up to the parent",
      "It checks if the class is thread-safe before delegating to the JVM execution engine",
      "It compiles the class with javac in memory"
    ],
    correct: 0,
    explanation: "Parent delegation ensures stability and security: a classloader forwards requests to its parent before searching its own classpath. This prevents untrusted code from replacing foundational classes like java.lang.Object or java.lang.String."
  }
];

// --- 35 PRACTICE PROBLEMS TRACKER DATA ---
const PRACTICE_PROBLEMS = [
  { id: 1, title: "Custom ArrayList Implementation", difficulty: "Medium", category: "Collections", description: "Build a generic MyArrayList with dynamic 50% resizing, range checks, and fast-fail iterator." },
  { id: 2, title: "LRU Cache using LinkedHashMap", difficulty: "Medium", category: "Collections", description: "Implement an O(1) Least Recently Used cache extending or delegating to LinkedHashMap with removeEldestEntry." },
  { id: 3, title: "Frequency Counter with merge()", difficulty: "Easy", category: "Collections", description: "Count word frequencies using modern Map.merge(word, 1, Integer::sum) pipeline." },
  { id: 4, title: "Top-K Frequent Elements", difficulty: "Medium", category: "Collections", description: "Find the top K most frequent elements using a HashMap frequency counter and a min-heap PriorityQueue." },
  { id: 5, title: "First Non-Repeating Character", difficulty: "Easy", category: "Collections", description: "Use LinkedHashMap to track occurrence counts while preserving character arrival order." },
  { id: 6, title: "Custom Hash Table with Separate Chaining", difficulty: "Hard", category: "Collections", description: "Implement a generic MyHashMap from scratch with bucket arrays, bit-spreading, and load-factor resizing." },
  { id: 7, title: "Sort Elements by Frequency", difficulty: "Medium", category: "Collections", description: "Sort an array of integers by descending frequency, breaking ties by lower numerical value using TreeMap." },
  { id: 8, title: "Sliding Window Median using Two Heaps", difficulty: "Hard", category: "Collections", description: "Maintain a max-heap and min-heap to compute median values over moving arrays in O(log K) per step." },
  { id: 9, title: "Nearest Smaller/Greater Key via NavigableMap", difficulty: "Medium", category: "Collections", description: "Use TreeMap floorKey, ceilingKey, lowerKey, and higherKey to solve range proximity queries." },
  { id: 10, title: "Fail-Fast vs Fail-Safe Iterator Demonstration", difficulty: "Easy", category: "Collections", description: "Demonstrate ConcurrentModificationException on ArrayList vs safe traversal on CopyOnWriteArrayList." },

  { id: 11, title: "Thread-Safe Bank Account using Synchronized", difficulty: "Medium", category: "Concurrency", description: "Design a bank account class with deposit, withdraw, and transfer methods ensuring deadlock-free execution." },
  { id: 12, title: "AtomicInteger vs Volatile Benchmark", difficulty: "Medium", category: "Concurrency", description: "Build a multi-threaded experiment proving lost updates on volatile int vs zero loss on AtomicInteger." },
  { id: 13, title: "Producer-Consumer with ArrayBlockingQueue", difficulty: "Medium", category: "Concurrency", description: "Implement a multi-worker producer-consumer system using bounded BlockingQueue with offer and poll." },
  { id: 14, title: "Concurrent High-Traffic Counter", difficulty: "Medium", category: "Concurrency", description: "Use ConcurrentHashMap.compute() and LongAdder to track millions of page views across concurrent threads." },
  { id: 15, title: "Volatile Flag Termination", difficulty: "Easy", category: "Concurrency", description: "Demonstrate thread visibility using volatile boolean running flag to safely shutdown background worker loops." },
  { id: 16, title: "Double-Checked Locking Singleton", difficulty: "Hard", category: "Concurrency", description: "Implement thread-safe singleton using volatile instance reference and synchronized monitor locks." },
  { id: 17, title: "Read-Heavy Cache with CopyOnWriteArrayList", difficulty: "Medium", category: "Concurrency", description: "Implement a pub-sub event listener registry where subscription changes are rare and events fire rapidly." },
  { id: 18, title: "Deadlock Reproduction & Detection", difficulty: "Hard", category: "Concurrency", description: "Intentionally write a 2-lock cyclic dependency and detect it using jstack and ThreadMXBean." },
  { id: 19, title: "Custom Non-Blocking Stack with AtomicReference", difficulty: "Hard", category: "Concurrency", description: "Implement Treiber's lock-free stack algorithm using CAS loops on AtomicReference." },

  { id: 20, title: "StackOverflowError Boundary Diagnostic", difficulty: "Easy", category: "JVM Memory", description: "Write an unbounded recursive method and inspect thread stack depth before failure." },
  { id: 21, title: "Heap Memory Leak Reproduction", difficulty: "Medium", category: "JVM Memory", description: "Build an unbounded static cache of byte arrays and trigger java.lang.OutOfMemoryError: Java heap space." },
  { id: 22, title: "Constrained Heap Experiment with -Xmx", difficulty: "Medium", category: "JVM Memory", description: "Run a memory-intensive allocation loop under java -Xms32m -Xmx64m and observe GC frequency." },
  { id: 23, title: "WeakReference vs SoftReference Cache", difficulty: "Hard", category: "JVM Memory", description: "Build an image thumbnail cache using SoftReference and verify GC reclamation under memory pressure." },
  { id: 24, title: "Custom ClassLoader Implementation", difficulty: "Hard", category: "JVM Memory", description: "Write a ClassLoader that loads encrypted .class bytecode files from disk and decrypts them before defineClass." },
  { id: 25, title: "Class Initialization Order Verification", difficulty: "Medium", category: "JVM Memory", description: "Verify order of static blocks, instance initializers, and constructors across class inheritance hierarchies." },
  { id: 26, title: "Static Field Access without Class Initialization", difficulty: "Easy", category: "JVM Memory", description: "Prove that accessing a static final compile-time primitive constant does not trigger class initialization." },
  { id: 27, title: "Metaspace Exhaustion Simulator", difficulty: "Hard", category: "JVM Memory", description: "Dynamically generate and load thousands of classes using ByteBuddy to trigger OutOfMemoryError: Metaspace." },

  { id: 28, title: "JMH Microbenchmark: String Concatenation vs StringBuilder", difficulty: "Medium", category: "Performance", description: "Write a rigorous JMH benchmark measuring nanosecond costs of + vs StringBuilder with warmup iterations." },
  { id: 29, title: "JMH Microbenchmark: Primitive Arrays vs Boxed ArrayList", difficulty: "Medium", category: "Performance", description: "Benchmark sum calculation across int[] vs ArrayList<Integer> to measure boxing allocation overhead." },
  { id: 30, title: "JFR Recording & CPU Bottleneck Inspection", difficulty: "Hard", category: "Performance", description: "Record a 60-second JFR profile using jcmd and identify hot methods in Java Mission Control." },
  { id: 31, title: "Escape Analysis & Scalar Replacement Verification", difficulty: "Hard", category: "Performance", description: "Write a method creating short-lived DTOs and verify with -XX:+PrintEscapeAnalysis that heap allocations are eliminated." },
  { id: 32, title: "Fast I/O Parser for 1,000,000 Integers", difficulty: "Medium", category: "Performance", description: "Build a custom byte-level fast reader and compare its throughput against Scanner and BufferedReader." },
  { id: 33, title: "Garbage Collection Log Parsing", difficulty: "Medium", category: "Performance", description: "Enable -Xlog:gc* and analyze pause times, young gen collection durations, and tenuring promotions." },
  { id: 34, title: "Object Header & Padding Analysis with JOL", difficulty: "Hard", category: "Performance", description: "Use Java Object Layout (JOL) to inspect mark words, class pointers, field offsets, and 8-byte alignment." },
  { id: 35, title: "Enterprise Capstone: Concurrent Student Management System", difficulty: "Hard", category: "Performance", description: "Build a multithreaded system combining ConcurrentHashMap, PriorityQueue, HashSet, and JFR diagnostics." }
];

export default function JavaCollectionsJVM() {
  const [activeTab, setActiveTab] = useState("curriculum"); // curriculum | workbenches | quiz | labs
  const [selectedSection, setSelectedSection] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeWorkbench, setActiveWorkbench] = useState("arraylist"); // arraylist, hashmap, priorityqueue, matrix, jmm, gc, jit, profiler

  // Lab completed set
  const [completedLabs, setCompletedLabs] = useState(() => new Set([1, 2, 4]));

  // Quiz State
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // --- WORKBENCH 1: ARRAYLIST RESIZING STATE ---
  const [alCapacity, setAlCapacity] = useState(4);
  const [alElements, setAlElements] = useState([10, 20, 30]);
  const [alHistory, setAlHistory] = useState([
    "Initialized ArrayList with initial capacity = 4, size = 3."
  ]);

  const addAlElement = () => {
    const nextVal = (alElements.length + 1) * 10;
    if (alElements.length >= alCapacity) {
      const newCap = alCapacity + (alCapacity >> 1); // 50% growth
      setAlCapacity(newCap);
      setAlElements([...alElements, nextVal]);
      setAlHistory(prev => [
        `Capacity overflow! Allocated larger array (${alCapacity} -> ${newCap}, ~50% growth). Copied existing elements and appended ${nextVal}.`,
        ...prev.slice(0, 5)
      ]);
    } else {
      setAlElements([...alElements, nextVal]);
      setAlHistory(prev => [
        `Appended ${nextVal} at index ${alElements.length}. Capacity remains ${alCapacity}.`,
        ...prev.slice(0, 5)
      ]);
    }
  };

  const removeAlElement = () => {
    if (alElements.length === 0) return;
    const removed = alElements[alElements.length - 1];
    setAlElements(alElements.slice(0, -1));
    setAlHistory(prev => [
      `Removed last element ${removed}. Capacity remains ${alCapacity}.`,
      ...prev.slice(0, 5)
    ]);
  };

  const ensureAlCapacity = () => {
    if (alCapacity < 12) {
      setAlCapacity(12);
      setAlHistory(prev => [
        `Called ensureCapacity(12). Expanded internal array capacity to 12 in advance to avoid future resizes.`,
        ...prev.slice(0, 5)
      ]);
    }
  };

  const resetAl = () => {
    setAlCapacity(4);
    setAlElements([10, 20, 30]);
    setAlHistory(["Reset ArrayList to default capacity = 4, size = 3."]);
  };

  // --- WORKBENCH 2: HASHMAP BUCKET & COLLISION STATE ---
  const [hmCapacity] = useState(8);
  const [hmKeyInput, setHmKeyInput] = useState("Priya");
  const [hmValInput, setHmValInput] = useState("95");
  const [hmBuckets, setHmBuckets] = useState(() => {
    const b = Array.from({ length: 8 }, () => []);
    b[1].push({ key: "Amit", val: "90", hash: 2049987 });
    b[1].push({ key: "Rahul", val: "88", hash: 7892345 });
    b[4].push({ key: "Neha", val: "92", hash: 2435660 });
    return b;
  });
  const [hmLog, setHmLog] = useState([
    "Pre-populated HashMap with Amit (Bucket 1), Rahul (Bucket 1 collision), and Neha (Bucket 4)."
  ]);

  const insertHmEntry = () => {
    if (!hmKeyInput.trim()) return;
    // Compute simple deterministic string hash code
    let h = 0;
    for (let i = 0; i < hmKeyInput.length; i++) {
      h = (Math.imul(31, h) + hmKeyInput.charCodeAt(i)) | 0;
    }
    const spreadHash = h ^ (h >>> 16);
    const bucketIdx = Math.abs(spreadHash) % hmCapacity;

    const newBuckets = hmBuckets.map((bucket, idx) => {
      if (idx === bucketIdx) {
        // check duplicate
        const existingIdx = bucket.findIndex(e => e.key === hmKeyInput);
        if (existingIdx >= 0) {
          const updated = [...bucket];
          updated[existingIdx] = { key: hmKeyInput, val: hmValInput, hash: spreadHash };
          return updated;
        }
        return [...bucket, { key: hmKeyInput, val: hmValInput, hash: spreadHash }];
      }
      return bucket;
    });

    setHmBuckets(newBuckets);
    setHmLog(prev => [
      `Key "${hmKeyInput}": hash=${spreadHash}, bucketIndex=(8 - 1) & hash = ${bucketIdx}. Placed in Bucket ${bucketIdx} (Chain len: ${newBuckets[bucketIdx].length}).`,
      ...prev.slice(0, 5)
    ]);
  };

  // --- WORKBENCH 3: PRIORITYQUEUE MIN-HEAP STATE ---
  const [pqHeap, setPqHeap] = useState([10, 20, 15, 40, 50, 30]);
  const [pqInputVal, setPqInputVal] = useState("5");
  const [pqLog, setPqLog] = useState([
    "Min-heap root is 10. Parent at i, children at 2i + 1 and 2i + 2."
  ]);

  const pqOffer = () => {
    const val = parseInt(pqInputVal, 10);
    if (isNaN(val)) return;
    const h = [...pqHeap, val];
    let idx = h.length - 1;
    // Sift up
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (h[idx] < h[parentIdx]) {
        const temp = h[idx];
        h[idx] = h[parentIdx];
        h[parentIdx] = temp;
        idx = parentIdx;
      } else {
        break;
      }
    }
    setPqHeap(h);
    setPqLog(prev => [
      `Offered ${val}: Placed at end index ${pqHeap.length} and sifted up to index ${idx}. Min element is now ${h[0]}.`,
      ...prev.slice(0, 5)
    ]);
  };

  const pqPoll = () => {
    if (pqHeap.length === 0) return;
    const minVal = pqHeap[0];
    if (pqHeap.length === 1) {
      setPqHeap([]);
      setPqLog(prev => [`Polled root ${minVal}. Heap is now empty.`, ...prev.slice(0, 5)]);
      return;
    }
    const h = [...pqHeap];
    const last = h.pop();
    h[0] = last;
    let idx = 0;
    const len = h.length;
    // Sift down
    while (true) {
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      let smallest = idx;
      if (left < len && h[left] < h[smallest]) smallest = left;
      if (right < len && h[right] < h[smallest]) smallest = right;
      if (smallest !== idx) {
        const temp = h[idx];
        h[idx] = h[smallest];
        h[smallest] = temp;
        idx = smallest;
      } else {
        break;
      }
    }
    setPqHeap(h);
    setPqLog(prev => [
      `Polled minimum ${minVal}. Moved last element ${last} to root and sifted down to index ${idx}. New min: ${h[0]}.`,
      ...prev.slice(0, 5)
    ]);
  };

  // --- WORKBENCH 4: DECISION MATRIX STATE ---
  const [dmPattern, setDmPattern] = useState("indexed"); // indexed, keyval, unique, ordered, priority, deque
  const [dmThreadModel, setDmThreadModel] = useState("single"); // single, concurrent, readheavy, producerconsumer

  const decisionRecommendation = useMemo(() => {
    if (dmThreadModel === "concurrent") {
      if (dmPattern === "keyval") {
        return {
          name: "ConcurrentHashMap<K, V>",
          complexity: "O(1) Avg Get/Put",
          rationale: "Lock-free CAS for empty bins, fine-grained bucket synchronization for collisions. Avoids global lock bottleneck."
        };
      }
      if (dmPattern === "ordered") {
        return {
          name: "ConcurrentSkipListMap<K, V>",
          complexity: "O(log N) All ops",
          rationale: "Thread-safe lock-free skip list maintaining sorted keys concurrently."
        };
      }
      return {
        name: "ConcurrentLinkedQueue<E> / CopyOnWriteArraySet",
        complexity: "O(1) Concurrent",
        rationale: "Lock-free MPSC queues or copy-on-write sets depending on sequence or uniqueness requirements."
      };
    }
    if (dmThreadModel === "readheavy") {
      return {
        name: "CopyOnWriteArrayList<E>",
        complexity: "O(1) Reads, O(N) Writes",
        rationale: "Zero-synchronization lock-free array reads. Writers copy array on modification. Ideal for pub-sub listener registries."
      };
    }
    if (dmThreadModel === "producerconsumer") {
      return {
        name: "ArrayBlockingQueue<E> / LinkedBlockingQueue<E>",
        complexity: "O(1) Enqueue/Dequeue",
        rationale: "Thread-safe bounded queue with blocking put() and take() methods coordinating producer and consumer rates."
      };
    }
    // Single threaded
    switch (dmPattern) {
      case "indexed":
        return {
          name: "ArrayList<E>",
          complexity: "O(1) Random Access, Amortized O(1) Append",
          rationale: "Contiguous native array with optimal CPU cache locality and hardware prefetching."
        };
      case "keyval":
        return {
          name: "HashMap<K, V>",
          complexity: "O(1) Avg Get/Put",
          rationale: "Hash table with bit-spreading and treeification at 8 entries."
        };
      case "unique":
        return {
          name: "HashSet<E>",
          complexity: "O(1) Avg Add/Contains",
          rationale: "Backed by HashMap keys; fast O(1) membership checks."
        };
      case "ordered":
        return {
          name: "TreeMap<K, V> / TreeSet<E>",
          complexity: "O(log N) Insert/Search/Delete",
          rationale: "Self-balancing Red-Black Tree guaranteeing logarithmic bounds and NavigableMap range queries (floor, ceiling)."
        };
      case "priority":
        return {
          name: "PriorityQueue<E>",
          complexity: "O(1) Peek, O(log N) Offer/Poll",
          rationale: "Binary min-heap providing rapid retrieval of highest/lowest priority elements."
        };
      case "deque":
        return {
          name: "ArrayDeque<E>",
          complexity: "O(1) Double-Ended Ops",
          rationale: "Resizable circular array faster than LinkedList for stacks and queues; zero node allocation overhead."
        };
      default:
        return { name: "ArrayList<E>", complexity: "O(1)", rationale: "General-purpose standard default list." };
    }
  }, [dmPattern, dmThreadModel]);

  // --- WORKBENCH 5: JMM RACE CONDITION SIMULATOR ---
  const [jmmMode, setJmmMode] = useState("volatile"); // volatile, synchronized, atomic
  const [jmmThreadAVal, setJmmThreadAVal] = useState(0);
  const [jmmThreadBVal, setJmmThreadBVal] = useState(0);
  const [jmmFinalCount, setJmmFinalCount] = useState(0);
  const [jmmSimulationLog, setJmmSimulationLog] = useState("");

  const runJmmSimulation = () => {
    if (jmmMode === "volatile") {
      // simulate race condition where 2 threads each do 5 increments, but interleaving causes lost updates
      setJmmThreadAVal(5);
      setJmmThreadBVal(5);
      setJmmFinalCount(7); // lost 3 updates!
      setJmmSimulationLog(
        "RACE CONDITION DETECTED! Thread A and Thread B both read count=2 simultaneously. Thread A computed 3, Thread B computed 3 and overwrote Thread A's increment! Volatile guarantees visibility, NOT atomicity of count++."
      );
    } else if (jmmMode === "synchronized") {
      setJmmThreadAVal(5);
      setJmmThreadBVal(5);
      setJmmFinalCount(10);
      setJmmSimulationLog(
        "PERFECT ATOMICITY: Synchronized monitor lock forced Thread A and Thread B to execute increment() sequentially under mutual exclusion. Unlock happens-before subsequent lock. Total = 10."
      );
    } else {
      setJmmThreadAVal(5);
      setJmmThreadBVal(5);
      setJmmFinalCount(10);
      setJmmSimulationLog(
        "LOCK-FREE SUCCESS: AtomicInteger.incrementAndGet() used hardware CPU atomic CAS (Compare-And-Swap) loops. No threads were blocked, zero updates were lost. Total = 10."
      );
    }
  };

  // --- WORKBENCH 6: GENERATIONAL GC SIMULATOR ---
  const [edenUsage, setEdenUsage] = useState(65); // percent
  const [s0Usage, setS0Usage] = useState(20);
  const [s1Usage, setS1Usage] = useState(0);
  const [oldGenUsage, setOldGenUsage] = useState(30);
  const [gcCycleCount, setGcCycleCount] = useState(0);
  const [gcLog, setGcLog] = useState([
    "JVM initialized with Generational Heap: Eden (young), S0/S1 (survivors), Tenured (old gen)."
  ]);

  const allocateMemoryGC = () => {
    if (edenUsage + 25 >= 100) {
      // Trigger Minor GC
      setEdenUsage(10);
      const newS1 = Math.min(100, s0Usage + 15);
      setS1Usage(newS1);
      setS0Usage(0);
      const newOld = Math.min(100, oldGenUsage + 10);
      setOldGenUsage(newOld);
      setGcCycleCount(c => c + 1);
      setGcLog(prev => [
        `[GC Cycle #${gcCycleCount + 1}] Minor GC triggered! Eden reached 100%. Reachable live objects copied to S1. Aged survivors promoted to Tenured Old Gen. Eden cleared.`,
        ...prev.slice(0, 5)
      ]);
    } else {
      setEdenUsage(edenUsage + 25);
      setGcLog(prev => [
        `Allocated 32MB short-lived objects in Eden TLAB (Eden now at ${edenUsage + 25}%).`,
        ...prev.slice(0, 5)
      ]);
    }
  };

  const triggerMajorGC = () => {
    setEdenUsage(5);
    setS0Usage(0);
    setS1Usage(0);
    setOldGenUsage(15);
    setGcLog(prev => [
      "MAJOR GC (Full GC / Stop-The-World) executed! Scanned entire Heap. Reclaimed dead objects in Old Generation and compacted fragmented memory.",
      ...prev.slice(0, 5)
    ]);
  };

  // --- WORKBENCH 7: JIT TIERED EXECUTION SIMULATOR ---
  const [jitInvocations, setJitInvocations] = useState(0);

  const jitState = useMemo(() => {
    if (jitInvocations < 500) {
      return {
        level: "Tier 0 — Bytecode Interpreter",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        desc: "Execution via interpreter loop. Startup is instantaneous, zero compilation overhead, gathering method invocation counters.",
        optimizations: "None (Raw Bytecode Interpretation)"
      };
    } else if (jitInvocations < 2000) {
      return {
        level: "Tier 1-3 — C1 Client Compiler",
        color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
        desc: "Hot method threshold passed! C1 compiles method to native assembly with basic optimizations and profiling instrumentation.",
        optimizations: "Basic register allocation, branch frequency profiling"
      };
    } else {
      return {
        level: "Tier 4 — C2 Server Optimizing Compiler",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        desc: "Peak execution tier reached! C2 aggressively transforms bytecode based on runtime profile data.",
        optimizations: "Method Inlining, Escape Analysis (Scalar Replacement), Loop Unrolling, Vectorization"
      };
    }
  }, [jitInvocations]);

  // --- WORKBENCH 8: PERFORMANCE PROFILING DIAGNOSTICS ---
  const [profScenario, setProfScenario] = useState("cpu"); // cpu, memleak, gcpauses, deadlock

  const scenarioDetails = useMemo(() => {
    switch (profScenario) {
      case "cpu":
        return {
          title: "100% CPU Spike on Production Node",
          symptoms: "Thread stuck in infinite loop or O(N^2) unindexed collection scan under high request volume.",
          command: "jstack <PID> | grep -A 20 'RUNNABLE'",
          tool: "Java Flight Recorder (JFR) + Thread Dump",
          fix: "Replace O(N) list search with O(1) HashSet, or add termination condition to while loop."
        };
      case "memleak":
        return {
          title: "OutOfMemoryError: Java heap space after 48 Hours",
          symptoms: "Unbounded static Map cache holding references to byte arrays prevents garbage collection.",
          command: "jcmd <PID> GC.heap_dump /tmp/heap.hprof",
          tool: "Eclipse Memory Analyzer (MAT) / VisualVM",
          fix: "Replace static collection with bounded Caffeine/Guava cache with size limits and eviction policies."
        };
      case "gcpauses":
        return {
          title: "P99 Latency Spikes (Stop-The-World Pauses > 800ms)",
          symptoms: "Excessive temporary object allocation churn inside high-throughput API endpoints causing frequent Old Gen promotions.",
          command: "java -Xlog:gc*,gc+phases=debug:file=gc.log",
          tool: "Java Mission Control (JMC) + GCViewer",
          fix: "Switch to G1GC with -XX:MaxGCPauseMillis=200 or ZGC, reuse buffers via StringBuilder, and eliminate primitive boxing."
        };
      case "deadlock":
        return {
          title: "Application Freezes / Blocked Worker Threads",
          symptoms: "Thread 1 holds Lock A waiting for Lock B, while Thread 2 holds Lock B waiting for Lock A.",
          command: "jcmd <PID> Thread.print",
          tool: "jcmd built-in Deadlock Detector",
          fix: "Enforce strict global lock acquisition ordering or convert to java.util.concurrent tryLock() with timeouts."
        };
      default:
        return { title: "", symptoms: "", command: "", tool: "", fix: "" };
    }
  }, [profScenario]);

  // Quiz scoring
  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  // Filtered curriculum sections
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return JAVA_COLLECTIONS_JVM_SECTIONS;
    const q = searchQuery.toLowerCase();
    return JAVA_COLLECTIONS_JVM_SECTIONS.filter(
      s => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navigation Bar */}
      <ModuleNav
        currentModuleId="collections-jvm"
        track="java"
        totalModules={24}
        accentColor="indigo"
        prevRoute="/learning/java/problem-solving-patterns"
        nextRoute="/learning/java/interview-mastery"
      />

      {/* Hero Banner */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-indigo-950/30 via-slate-900/40 to-slate-950 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5" />
              Module 22 — Advanced Java &amp; Systems Engineering
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
              Collections, JVM &amp; Performance
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed">
              Master Java Collections Framework internals (ArrayList 50% resizing, HashMap treeification &amp; hash spreading, TreeMap Red-Black invariants, PriorityQueue min-heaps), JVM memory architecture (Stack frames vs Heap, GC reachability &amp; generational collectors), the Java Memory Model (JMM happens-before, volatile vs atomic CAS), and production performance engineering (JMH, JFR, JMC).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setQuizModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium text-xs md:text-sm shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition"
            >
              <Award className="w-4 h-4" />
              Knowledge Check ({QUIZ_QUESTIONS.length} MCQs)
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 overflow-x-auto py-2.5">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "curriculum"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Curriculum Reader (23 Sections)
          </button>

          <button
            onClick={() => setActiveTab("workbenches")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "workbenches"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Cpu className="w-4 h-4" />
            8 Interactive Workbenches
          </button>

          <button
            onClick={() => setActiveTab("labs")}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "labs"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Layers className="w-4 h-4" />
            Practice Labs Tracker ({completedLabs.size}/{PRACTICE_PROBLEMS.length})
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        {/* --- TAB 1: CURRICULUM READER --- */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-2xl p-4 sticky top-16 max-h-[82vh] flex flex-col dark-scrollbar">
              <div className="relative mb-3">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search topics, JVM internals, collections..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div className="overflow-y-auto space-y-1.5 flex-1 pr-1 custom-scrollbar dark-scrollbar">
                {filteredSections.map(sec => {
                  const isSelected = selectedSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setSelectedSection(sec.id)}
                      title={sec.title}
                      className={`w-full text-left p-3 rounded-xl transition flex flex-col gap-1 border ${
                        isSelected
                          ? "bg-indigo-600/15 border-indigo-500/40 text-white"
                          : "border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className={isSelected ? "text-indigo-400 font-mono" : "text-slate-500 font-mono"}>
                          Sec {sec.id}
                        </span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
                      </div>
                      <div className="text-xs font-medium text-slate-200 break-words whitespace-normal leading-snug">{sec.title}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{sec.summary}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section Reader Display */}
            <div className="lg:col-span-8 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                    {selectedSection === 0
                      ? "Module Overview · 23 Core Sections"
                      : `Section ${selectedSection} of 23`}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {JAVA_COLLECTIONS_JVM_SECTIONS[selectedSection]?.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={selectedSection === 0}
                    onClick={() => setSelectedSection(prev => Math.max(0, prev - 1))}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 text-slate-300 transition"
                    title="Previous Section"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={selectedSection === JAVA_COLLECTIONS_JVM_SECTIONS.length - 1}
                    onClick={() => setSelectedSection(prev => Math.min(JAVA_COLLECTIONS_JVM_SECTIONS.length - 1, prev + 1))}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 text-slate-300 transition"
                    title="Next Section"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Render Section Content */}
              <div className="text-slate-300 leading-relaxed text-sm md:text-base">
                {JAVA_COLLECTIONS_JVM_SECTIONS[selectedSection]?.content}
              </div>

              {/* Footer navigation */}
              <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  disabled={selectedSection === 0}
                  onClick={() => setSelectedSection(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-medium text-slate-300 flex items-center gap-2 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Previous Section
                </button>
                <button
                  disabled={selectedSection === JAVA_COLLECTIONS_JVM_SECTIONS.length - 1}
                  onClick={() => setSelectedSection(prev => Math.min(JAVA_COLLECTIONS_JVM_SECTIONS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-xs font-medium text-white flex items-center gap-2 transition"
                >
                  Next Section
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: INTERACTIVE WORKBENCHES --- */}
        {activeTab === "workbenches" && (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              {[
                { id: "arraylist", name: "1. ArrayList Resizing", icon: Layers },
                { id: "hashmap", name: "2. HashMap Buckets", icon: Grid },
                { id: "priorityqueue", name: "3. PriorityQueue Heap", icon: BarChart3 },
                { id: "matrix", name: "4. Collections Matrix", icon: Database },
                { id: "jmm", name: "5. JMM Race & Volatile", icon: ShieldCheck },
                { id: "gc", name: "6. Generational GC", icon: RefreshCw },
                { id: "jit", name: "7. JIT Tiered Engine", icon: Zap },
                { id: "profiler", name: "8. Outage Diagnostic", icon: Terminal }
              ].map(wb => {
                const IconComponent = wb.icon;
                const isCurrent = activeWorkbench === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition flex items-center gap-2 ${
                      isCurrent
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    {wb.name}
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: ARRAYLIST RESIZING */}
            {activeWorkbench === "arraylist" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-400" />
                    ArrayList Dynamic Resizing &amp; Memory Allocation
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Simulates OpenJDK's 50% capacity expansion rule: <code className="text-indigo-300 font-mono">newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1)</code>.
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Size (Elements)</div>
                    <div className="text-2xl font-bold text-indigo-400 font-mono mt-1">{alElements.length}</div>
                  </div>
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Current Capacity</div>
                    <div className="text-2xl font-bold text-white font-mono mt-1">{alCapacity}</div>
                  </div>
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Load Percentage</div>
                    <div className="text-2xl font-bold text-amber-400 font-mono mt-1">
                      {Math.round((alElements.length / alCapacity) * 100)}%
                    </div>
                  </div>
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Amortized Cost</div>
                    <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">O(1)</div>
                  </div>
                </div>

                {/* Visual Array representation */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">Internal Object[] elementData:</div>
                  <div className="flex flex-wrap gap-2 p-4 bg-slate-950 rounded-2xl border border-slate-800 min-h-[80px] items-center">
                    {Array.from({ length: alCapacity }).map((_, idx) => {
                      const hasVal = idx < alElements.length;
                      return (
                        <div
                          key={idx}
                          className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center font-mono text-xs transition-all ${
                            hasVal
                              ? "bg-indigo-600/20 border-indigo-500/50 text-indigo-300 font-bold"
                              : "bg-slate-900/40 border-dashed border-slate-800 text-slate-600"
                          }`}
                        >
                          <span className="text-[10px] text-slate-500">[{idx}]</span>
                          <span>{hasVal ? alElements[idx] : "null"}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={addAlElement}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 transition"
                  >
                    <Play className="w-3.5 h-3.5" />
                    add(element)
                  </button>
                  <button
                    onClick={removeAlElement}
                    disabled={alElements.length === 0}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 font-medium text-xs transition"
                  >
                    removeLast()
                  </button>
                  <button
                    onClick={ensureAlCapacity}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 font-medium text-xs transition"
                  >
                    ensureCapacity(12)
                  </button>
                  <button
                    onClick={resetAl}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs transition ml-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Operation History */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                  <div className="text-slate-500 text-[11px] mb-1">JVM RESIZE LOG:</div>
                  {alHistory.map((item, idx) => (
                    <div key={idx} className={idx === 0 ? "text-indigo-300" : "text-slate-500 text-[11px]"}>
                      &gt; {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 2: HASHMAP BUCKET SIMULATOR */}
            {activeWorkbench === "hashmap" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Grid className="w-5 h-5 text-indigo-400" />
                    HashMap Separate Chaining &amp; Treeification
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Visualizes how keys are hashed, spread via <code className="text-indigo-300 font-mono">hash ^ (hash &gt;&gt;&gt; 16)</code>, and placed into buckets using <code className="text-indigo-300 font-mono">(capacity - 1) &amp; hash</code>.
                  </p>
                </div>

                {/* Input row */}
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="text"
                    placeholder="Key (e.g. Priya)"
                    value={hmKeyInput}
                    onChange={e => setHmKeyInput(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500 w-36"
                  />
                  <input
                    type="text"
                    placeholder="Val (e.g. 95)"
                    value={hmValInput}
                    onChange={e => setHmValInput(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500 w-28"
                  />
                  <button
                    onClick={insertHmEntry}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 transition"
                  >
                    <Play className="w-3.5 h-3.5" />
                    map.put(key, val)
                  </button>
                </div>

                {/* Buckets Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {hmBuckets.map((nodes, bIdx) => {
                    const isTreeified = nodes.length >= 8;
                    return (
                      <div
                        key={bIdx}
                        className={`p-3.5 rounded-2xl border transition ${
                          isTreeified
                            ? "bg-rose-950/20 border-rose-500/50"
                            : nodes.length > 1
                            ? "bg-amber-950/20 border-amber-500/40"
                            : "bg-slate-950/80 border-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="font-bold text-slate-300">Bucket [{bIdx}]</span>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded ${
                              isTreeified
                                ? "bg-rose-500/20 text-rose-400 font-bold"
                                : nodes.length > 1
                                ? "bg-amber-500/20 text-amber-400"
                                : "text-slate-500"
                            }`}
                          >
                            {isTreeified ? "TREE (TreeNode)" : `${nodes.length} nodes`}
                          </span>
                        </div>

                        {nodes.length === 0 ? (
                          <div className="text-[11px] font-mono text-slate-600 italic">null (empty)</div>
                        ) : (
                          <div className="space-y-1.5">
                            {nodes.map((node, nIdx) => (
                              <div
                                key={nIdx}
                                className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-[11px] font-mono flex items-center justify-between text-slate-200"
                              >
                                <span className="text-indigo-300 font-semibold">{node.key}</span>
                                <span className="text-slate-400">→ {node.val}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Hash Log */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                  <div className="text-slate-500 text-[11px] mb-1">HASH COMPUTATION LOG:</div>
                  {hmLog.map((line, idx) => (
                    <div key={idx} className={idx === 0 ? "text-indigo-300" : "text-slate-500 text-[11px]"}>
                      &gt; {line}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 3: PRIORITYQUEUE MIN-HEAP */}
            {activeWorkbench === "priorityqueue" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-400" />
                    PriorityQueue Binary Min-Heap Simulator
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Visualizes complete binary min-heap array storage with <code className="text-indigo-300 font-mono">offer()</code> (sift-up) and <code className="text-indigo-300 font-mono">poll()</code> (sift-down) in O(log N) time.
                  </p>
                </div>

                {/* Current Array View */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">
                    Heap Array (Root at [0], Children at 2i+1, 2i+2):
                  </div>
                  <div className="flex flex-wrap gap-2 p-4 bg-slate-950 rounded-2xl border border-slate-800 items-center">
                    {pqHeap.map((val, idx) => (
                      <div
                        key={idx}
                        className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center font-mono text-xs ${
                          idx === 0
                            ? "bg-amber-500/20 border-amber-500/60 text-amber-300 font-extrabold"
                            : "bg-indigo-600/20 border-indigo-500/40 text-indigo-300 font-bold"
                        }`}
                      >
                        <span className="text-[10px] text-slate-500">[{idx}]</span>
                        <span>{val}</span>
                      </div>
                    ))}
                    {pqHeap.length === 0 && <span className="text-slate-600 font-mono text-xs">Heap is empty</span>}
                  </div>
                </div>

                {/* Operations */}
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="number"
                    value={pqInputVal}
                    onChange={e => setPqInputVal(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500 w-24"
                    placeholder="Val"
                  />
                  <button
                    onClick={pqOffer}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 transition"
                  >
                    <Play className="w-3.5 h-3.5" />
                    pq.offer({pqInputVal})
                  </button>
                  <button
                    onClick={pqPoll}
                    disabled={pqHeap.length === 0}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-amber-300 font-medium text-xs transition"
                  >
                    pq.poll() (Extract Min)
                  </button>
                  <button
                    onClick={() => {
                      setPqHeap([10, 20, 15, 40, 50, 30]);
                      setPqLog(["Reset min-heap to [10, 20, 15, 40, 50, 30]."]);
                    }}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs transition ml-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Operation Log */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                  <div className="text-slate-500 text-[11px] mb-1">HEAP LOG:</div>
                  {pqLog.map((line, idx) => (
                    <div key={idx} className={idx === 0 ? "text-indigo-300" : "text-slate-500 text-[11px]"}>
                      &gt; {line}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 4: COLLECTIONS SELECTION MATRIX */}
            {activeWorkbench === "matrix" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-400" />
                    Collections Selection Decision Matrix
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Select your access requirements and concurrency model to determine the mathematically optimal Java collection.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Selectors */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-2">Primary Access Pattern:</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "indexed", label: "Indexed Random Access" },
                          { id: "keyval", label: "Key-Value Lookup" },
                          { id: "unique", label: "Unique Members Only" },
                          { id: "ordered", label: "Sorted Keys / Range Queries" },
                          { id: "priority", label: "Priority Extrema" },
                          { id: "deque", label: "Stack / Deque Processing" }
                        ].map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => setDmPattern(opt.id)}
                            className={`p-2.5 rounded-xl border text-xs font-medium text-left transition ${
                              dmPattern === opt.id
                                ? "bg-indigo-600/20 border-indigo-500 text-white"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-2">Concurrency Model:</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "single", label: "Single-Threaded" },
                          { id: "concurrent", label: "High Concurrent Writes" },
                          { id: "readheavy", label: "Read-Heavy (Rare Writes)" },
                          { id: "producerconsumer", label: "Producer-Consumer Pipeline" }
                        ].map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => setDmThreadModel(opt.id)}
                            className={`p-2.5 rounded-xl border text-xs font-medium text-left transition ${
                              dmThreadModel === opt.id
                                ? "bg-indigo-600/20 border-indigo-500 text-white"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Card */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-indigo-500/30 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider mb-1">
                        RECOMMENDED COLLECTION
                      </div>
                      <div className="text-2xl font-extrabold text-white font-mono mt-1">
                        {decisionRecommendation.name}
                      </div>
                      <div className="inline-block mt-2 px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold">
                        {decisionRecommendation.complexity}
                      </div>
                      <p className="text-slate-300 text-xs md:text-sm mt-4 leading-relaxed">
                        {decisionRecommendation.rationale}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                      Engineering Rule: Always declare interface types (e.g. List&lt;T&gt; list = new ArrayList&lt;&gt;()).
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: JMM RACE CONDITION SIMULATOR */}
            {activeWorkbench === "jmm" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    Java Memory Model: Visibility vs Atomicity Race Simulator
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Simulates two concurrent worker threads executing 5 increments on a shared counter to demonstrate volatile lost updates vs synchronized vs CAS.
                  </p>
                </div>

                {/* Mode Selector */}
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { id: "volatile", label: "1. volatile int counter (Non-Atomic)" },
                    { id: "synchronized", label: "2. synchronized void increment() (Monitor Lock)" },
                    { id: "atomic", label: "3. AtomicInteger (Hardware CAS)" }
                  ].map(m => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setJmmMode(m.id);
                        setJmmFinalCount(0);
                        setJmmThreadAVal(0);
                        setJmmThreadBVal(0);
                        setJmmSimulationLog("");
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-medium transition ${
                        jmmMode === m.id
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                {/* Run simulation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={runJmmSimulation}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium text-xs flex items-center gap-2 transition"
                  >
                    <Play className="w-4 h-4" />
                    Run 2 Concurrent Threads (5 ops each)
                  </button>
                </div>

                {/* Live Thread Visualizer */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xs font-mono text-slate-500">Thread A Increments</div>
                    <div className="text-3xl font-bold font-mono text-sky-400 mt-2">+{jmmThreadAVal}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xs font-mono text-slate-500">Thread B Increments</div>
                    <div className="text-3xl font-bold font-mono text-indigo-400 mt-2">+{jmmThreadBVal}</div>
                  </div>
                  <div
                    className={`p-4 rounded-xl border text-center ${
                      jmmFinalCount === 10
                        ? "bg-emerald-950/20 border-emerald-500/50"
                        : jmmFinalCount > 0
                        ? "bg-rose-950/20 border-rose-500/50"
                        : "bg-slate-950 border-slate-800"
                    }`}
                  >
                    <div className="text-xs font-mono text-slate-500">Final Stored Count (Expected: 10)</div>
                    <div
                      className={`text-3xl font-bold font-mono mt-2 ${
                        jmmFinalCount === 10
                          ? "text-emerald-400"
                          : jmmFinalCount > 0
                          ? "text-rose-400"
                          : "text-slate-600"
                      }`}
                    >
                      {jmmFinalCount}
                    </div>
                  </div>
                </div>

                {/* Explanation Output */}
                {jmmSimulationLog && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
                    <span className="text-indigo-400 font-bold">ANALYSIS: </span>
                    {jmmSimulationLog}
                  </div>
                )}
              </div>
            )}

            {/* WORKBENCH 6: GENERATIONAL GC SIMULATOR */}
            {activeWorkbench === "gc" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-indigo-400" />
                    Generational Garbage Collection &amp; Memory Promotion
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Visualizes how modern generational collectors (G1, Parallel) manage Eden, Survivor spaces, and Tenured Old Gen.
                  </p>
                </div>

                {/* Heap Memory Bars */}
                <div className="space-y-4">
                  {/* Eden */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>Young Gen: Eden Space (Allocations)</span>
                      <span>{edenUsage}%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-6 rounded-xl overflow-hidden border border-slate-800">
                      <div
                        className="bg-indigo-600 h-full transition-all duration-300"
                        style={{ width: `${edenUsage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* S0 and S1 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                        <span>Survivor 0 (From)</span>
                        <span>{s0Usage}%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-5 rounded-xl overflow-hidden border border-slate-800">
                        <div
                          className="bg-sky-500 h-full transition-all duration-300"
                          style={{ width: `${s0Usage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                        <span>Survivor 1 (To)</span>
                        <span>{s1Usage}%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-5 rounded-xl overflow-hidden border border-slate-800">
                        <div
                          className="bg-sky-400 h-full transition-all duration-300"
                          style={{ width: `${s1Usage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Old Gen */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>Old Generation (Tenured - Promoted Objects)</span>
                      <span>{oldGenUsage}%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-6 rounded-xl overflow-hidden border border-slate-800">
                      <div
                        className="bg-amber-500 h-full transition-all duration-300"
                        style={{ width: `${oldGenUsage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={allocateMemoryGC}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 transition"
                  >
                    <Play className="w-3.5 h-3.5" />
                    Allocate 32MB Objects
                  </button>
                  <button
                    onClick={triggerMajorGC}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-medium text-xs transition"
                  >
                    Trigger Full GC (Stop-The-World)
                  </button>
                </div>

                {/* GC Event Log */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                  <div className="text-slate-500 text-[11px] mb-1">JVM GC LOG:</div>
                  {gcLog.map((line, idx) => (
                    <div key={idx} className={idx === 0 ? "text-indigo-300" : "text-slate-500 text-[11px]"}>
                      &gt; {line}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 7: JIT TIERED ENGINE */}
            {activeWorkbench === "jit" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-400" />
                    JIT Tiered Compilation &amp; Warm-up Engine
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Simulates HotSpot tiered compilation levels: Interpreter (Tier 0) &rarr; C1 Compiler (Tiers 1-3) &rarr; C2 Server Compiler (Tier 4).
                  </p>
                </div>

                {/* Counter & Level Display */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-slate-500">Method Invocation Counter:</div>
                    <div className="text-4xl font-extrabold text-white font-mono mt-1">
                      {jitInvocations.toLocaleString()} calls
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 mb-1">Active JIT Compilation Level:</div>
                    <div className={`px-4 py-2 rounded-xl border font-mono text-xs font-bold ${jitState.color}`}>
                      {jitState.level}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
                  <div>
                    <strong className="text-slate-300">Execution Dynamics:</strong>{" "}
                    <span className="text-slate-400">{jitState.desc}</span>
                  </div>
                  <div>
                    <strong className="text-indigo-300">Applied Optimizations:</strong>{" "}
                    <span className="text-slate-300 font-mono">{jitState.optimizations}</span>
                  </div>
                </div>

                {/* Call buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setJitInvocations(c => c + 100)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition"
                  >
                    +100 Invocations
                  </button>
                  <button
                    onClick={() => setJitInvocations(c => c + 1000)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition"
                  >
                    +1,000 Invocations (Cross C1 Threshold)
                  </button>
                  <button
                    onClick={() => setJitInvocations(c => c + 10000)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition"
                  >
                    +10,000 Invocations (Trigger C2 Peak)
                  </button>
                  <button
                    onClick={() => setJitInvocations(0)}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs transition ml-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* WORKBENCH 8: PERFORMANCE OUTAGE DIAGNOSTICS */}
            {activeWorkbench === "profiler" && (
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-indigo-400" />
                    Production Outage &amp; Diagnostic CLI Studio
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    Select a high-severity production incident to view diagnosis CLI commands, thread dump outputs, and code refactorings.
                  </p>
                </div>

                {/* Incident picker */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { id: "cpu", label: "100% CPU Spike" },
                    { id: "memleak", label: "Heap OOM Leak" },
                    { id: "gcpauses", label: "800ms GC Pauses" },
                    { id: "deadlock", label: "Thread Deadlock" }
                  ].map(inc => (
                    <button
                      key={inc.id}
                      onClick={() => setProfScenario(inc.id)}
                      className={`p-3 rounded-xl border text-xs font-medium text-left transition ${
                        profScenario === inc.id
                          ? "bg-indigo-600/20 border-indigo-500 text-white"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {inc.label}
                    </button>
                  ))}
                </div>

                {/* Scenario Analysis Card */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider">
                      INCIDENT SCENARIO:
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">{scenarioDetails.title}</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{scenarioDetails.symptoms}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
                    <div>
                      <div className="text-[11px] font-mono text-indigo-400 uppercase">Diagnostic CLI Command</div>
                      <code className="block mt-1.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-200">
                        {scenarioDetails.command}
                      </code>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-sky-400 uppercase">Profiling Tool</div>
                      <div className="mt-1.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {scenarioDetails.tool}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-emerald-400 uppercase">Recommended Architectural Fix</div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{scenarioDetails.fix}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- TAB 3: PRACTICE LABS TRACKER --- */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/40 p-6 rounded-3xl border border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-400" />
                  35 Practical Labs &amp; Production Challenges
                </h3>
                <p className="text-slate-400 text-xs md:text-sm mt-1">
                  Track your hands-on implementation progress across Collections, Concurrency, JVM Internals, and Performance Engineering.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400">Total Completed</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono">
                    {completedLabs.size} / {PRACTICE_PROBLEMS.length}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-emerald-500 flex items-center justify-center text-xs font-bold text-white">
                  {Math.round((completedLabs.size / PRACTICE_PROBLEMS.length) * 100)}%
                </div>
              </div>
            </div>

            {/* Problem List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRACTICE_PROBLEMS.map(p => {
                const isDone = completedLabs.has(p.id);
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      setCompletedLabs(prev => {
                        const next = new Set(prev);
                        if (next.has(p.id)) next.delete(p.id);
                        else next.add(p.id);
                        return next;
                      });
                    }}
                    className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-3.5 ${
                      isDone
                        ? "bg-emerald-950/10 border-emerald-500/30 text-slate-200"
                        : "bg-slate-900/30 border-slate-800/80 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="mt-0.5">
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-600" />
                      )}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white font-mono">
                          Lab {p.id}. {p.title}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                            p.difficulty === "Easy"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : p.difficulty === "Medium"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          }`}
                        >
                          {p.difficulty}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
                      <div className="text-[10px] font-mono text-indigo-400">{p.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* --- KNOWLEDGE CHECK QUIZ MODAL --- */}
      {quizModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  Module 22 Knowledge Check Assessment
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  15 Scenario-based questions on Collections, JVM Internals &amp; Performance Engineering
                </p>
              </div>
              <button
                onClick={() => setQuizModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
              >
                ✕
              </button>
            </div>

            {/* Questions Container */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 scrollbar-thin scrollbar-thumb-slate-800">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const selectedOption = quizAnswers[q.id];

                return (
                  <div key={q.id} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="text-xs font-mono text-indigo-400 font-semibold">Question {idx + 1} of 15</div>
                    <div className="text-sm font-medium text-white leading-relaxed">{q.question}</div>

                    <div className="space-y-2 mt-2">
                      {q.options.map((opt, oIdx) => {
                        let btnStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";

                        if (quizSubmitted) {
                          if (oIdx === q.correct) {
                            btnStyle = "bg-emerald-950/30 border-emerald-500/60 text-emerald-200 font-semibold";
                          } else if (selectedOption === oIdx) {
                            btnStyle = "bg-rose-950/30 border-rose-500/60 text-rose-200";
                          } else {
                            btnStyle = "bg-slate-950 opacity-40 border-slate-800 text-slate-500";
                          }
                        } else if (selectedOption === oIdx) {
                          btnStyle = "bg-indigo-600/20 border-indigo-500 text-white font-medium";
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={quizSubmitted}
                            onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: oIdx }))}
                            className={`w-full p-3 rounded-xl border text-xs text-left transition flex items-start gap-2.5 ${btnStyle}`}
                          >
                            <span className="font-mono text-slate-500">{String.fromCharCode(65 + oIdx)}.</span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                        <span className="font-bold text-indigo-300">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
              {quizSubmitted ? (
                <div className="text-xs font-mono">
                  Your Score: <strong className="text-emerald-400 text-sm">{quizScore} / {QUIZ_QUESTIONS.length}</strong> ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </div>
              ) : (
                <div className="text-xs text-slate-400">
                  {Object.keys(quizAnswers).length} of {QUIZ_QUESTIONS.length} answered
                </div>
              )}

              <div className="flex items-center gap-2">
                {quizSubmitted ? (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-700 transition"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white disabled:opacity-40 transition shadow-lg shadow-indigo-600/20"
                  >
                    Submit Answers
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
