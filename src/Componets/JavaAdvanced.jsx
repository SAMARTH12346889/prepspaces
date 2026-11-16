import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Coffee,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  Lock,
  Unlock,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Layers,
  Cpu,
  Server,
  Activity,
  Workflow,
  BarChart3,
  HardDrive,
  GitBranch,
  Filter,
  CheckCircle,
  Play,
  Binary,
  Code2,
  ListOrdered,
  Bug,
  Award,
  Repeat,
  Split,
  Calculator,
  Compass,
  Zap,
  Grid,
  Search,
  Type,
  Maximize2,
  ShieldCheck,
  Box,
  Share2,
  Sliders,
  Target,
  FileText,
  ShieldAlert,
  FolderTree,
  Database,
  ArrowDownUp,
  SlidersHorizontal,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaAdvancedSections from "./JavaAdvancedSections";

export default function JavaAdvanced() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java/oop");

  // Mode tab state: 'curriculum' | 'workbench'
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("exception-studio");

  // ---------------------------------------------------------------------------
  // WORKBENCH 1: EXCEPTION CALL STACK & PROPAGATION STUDIO
  // ---------------------------------------------------------------------------
  const initialStack = useMemo(() => [
    { id: 4, method: "main()", file: "OrderApp.java", line: 18, hasTryCatch: false, catches: [] },
    { id: 3, method: "processCheckout()", file: "CheckoutService.java", line: 42, hasTryCatch: true, catches: ["PaymentFailedException", "NetworkException"] },
    { id: 2, method: "chargeCreditCard()", file: "PaymentGateway.java", line: 89, hasTryCatch: false, catches: [] },
    { id: 1, method: "executeHttpsPost()", file: "HttpClient.java", line: 134, hasTryCatch: false, catches: [] },
  ], []);

  const [callStack, setCallStack] = useState(initialStack);
  const [activeException, setActiveException] = useState("PaymentFailedException");
  const [stackStatus, setStackStatus] = useState("idle"); // idle | thrown | unwinding | caught | completed
  const [stackLogs, setStackLogs] = useState([
    "JVM initial state: thread 'main' running in method executeHttpsPost().",
    "Call stack depth: 4 frames allocated in JVM Thread Stack Memory.",
  ]);
  const [currentUnwindIdx, setCurrentUnwindIdx] = useState(0);

  const handleThrowException = (type) => {
    setActiveException(type);
    setStackStatus("thrown");
    setCurrentUnwindIdx(0);
    setStackLogs((prev) => [
      `CRITICAL: Exception '${type}' actively instantiated and thrown at executeHttpsPost() (HttpClient.java:134).`,
      "Stack unwinding initiated: JVM search starts for an enclosing try-catch block matching this throwable.",
      ...prev,
    ]);
  };

  const handleStepUnwind = () => {
    if (stackStatus === "idle" || stackStatus === "completed") return;

    if (currentUnwindIdx === 0) {
      setCurrentUnwindIdx(1);
      setStackLogs((prev) => [
        "Unwound frame: executeHttpsPost() popped. No matching catch block.",
        "Searching caller frame: chargeCreditCard()...",
        ...prev,
      ]);
    } else if (currentUnwindIdx === 1) {
      setCurrentUnwindIdx(2);
      setStackLogs((prev) => [
        "Unwound frame: chargeCreditCard() popped. No matching catch block.",
        "Searching caller frame: processCheckout()... Has try-catch block!",
        ...prev,
      ]);
    } else if (currentUnwindIdx === 2) {
      if (activeException === "OutOfMemoryError") {
        setCurrentUnwindIdx(3);
        setStackLogs((prev) => [
          "FRAME MISMATCH: OutOfMemoryError is an Error (unchecked), not caught by PaymentFailedException!",
          "processCheckout() popped without handling. Propagating to main()...",
          ...prev,
        ]);
      } else {
        setStackStatus("caught");
        setStackLogs((prev) => [
          `SUCCESS: catch (${activeException} ex) matched in processCheckout()!`,
          "Exception handled gracefully. Recovery fallback executed. finally block guaranteed execution.",
          ...prev,
        ]);
      }
    } else if (currentUnwindIdx === 3) {
      setStackStatus("completed");
      setStackLogs((prev) => [
        "UNCAUGHT FATAL ERROR: Reached bottom of thread stack without matching catch.",
        "Thread 'main' terminated abnormally. Stack trace dumped to stderr.",
        ...prev,
      ]);
    }
  };

  const handleResetStack = () => {
    setCallStack(initialStack);
    setStackStatus("idle");
    setCurrentUnwindIdx(0);
    setStackLogs([
      "Call stack reset to clean initialized state.",
      "Thread 'main' ready.",
    ]);
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 2: GENERICS, BOUNDED TYPES & PECS VISUALIZER
  // ---------------------------------------------------------------------------
  const [genericType, setGenericType] = useState("Integer");
  const [pecsScenario, setPecsScenario] = useState("producer");
  const [showErasureBytecode, setShowErasureBytecode] = useState(false);

  // ---------------------------------------------------------------------------
  // WORKBENCH 3: COLLECTIONS ARCHITECTURE & PERFORMANCE BENCHMARK
  // ---------------------------------------------------------------------------
  const [collectionCategory, setCollectionCategory] = useState("list");
  const [simulatedOps, setSimulatedOps] = useState(null);

  const runBenchmarkSimulation = () => {
    if (collectionCategory === "list") {
      setSimulatedOps({
        type: "List Operations",
        results: [
          { impl: "ArrayList", randomGet: "< 0.01 ms (O(1) continuous memory offset)", insertHead: "4.2 ms (O(n) element copy shift)", insertTail: "0.02 ms (amortized O(1))", memoryOverhead: "Lowest (compact Object[] array)" },
          { impl: "LinkedList", randomGet: "12.8 ms (O(n) sequential pointer hop)", insertHead: "0.01 ms (O(1) 2-pointer rewiring)", insertTail: "0.01 ms (O(1) tail pointer)", memoryOverhead: "Highest (24 bytes extra per node: prev, next, item)" },
        ],
      });
    } else if (collectionCategory === "set") {
      setSimulatedOps({
        type: "Set Operations",
        results: [
          { impl: "HashSet", lookup: "0.02 ms (O(1) hash code bucket index)", ordering: "None (scattered across buckets)", allowsNull: "Yes (single null at bucket 0)", backingStructure: "HashMap instance" },
          { impl: "LinkedHashSet", lookup: "0.03 ms (O(1) hash code)", ordering: "Insertion Order (doubly-linked bucket chain)", allowsNull: "Yes", backingStructure: "LinkedHashMap instance" },
          { impl: "TreeSet", lookup: "0.85 ms (O(log n) tree traversal)", ordering: "Natural / Comparator Sorted Order", allowsNull: "No (throws NullPointerException)", backingStructure: "Red-Black Balanced Tree (TreeMap)" },
        ],
      });
    } else {
      setSimulatedOps({
        type: "Map Operations",
        results: [
          { impl: "HashMap", getPut: "O(1) average (bucket lookup + equals)", collisionHandling: "Chaining -> Treeification at 8 nodes", ordered: "No", memoryUsage: "Moderate" },
          { impl: "LinkedHashMap", getPut: "O(1) average", collisionHandling: "Chaining + Doubly linked list insertion record", ordered: "Insertion / Access Order (LRU Cache)", memoryUsage: "Moderate + 16 bytes per entry" },
          { impl: "TreeMap", getPut: "O(log n) guaranteed", collisionHandling: "Red-Black Self-Balancing Binary Search Tree", ordered: "Sorted by Key (Comparable / Comparator)", memoryUsage: "High (left, right, parent, color per node)" },
        ],
      });
    }
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 4: FUNCTIONAL INTERFACES & LAMBDAS PLAYGROUND
  // ---------------------------------------------------------------------------
  const [selectedFI, setSelectedFI] = useState("Predicate");
  const [fiInput, setFiInput] = useState("Production Java Microservice");
  const [fiThreshold, setFiThreshold] = useState(10);

  const fiExecutionResult = useMemo(() => {
    switch (selectedFI) {
      case "Predicate":
        return {
          signature: "Predicate<String>: (s) -> boolean",
          code: `Predicate<String> isLongName = s -> s.length() > ${fiThreshold};`,
          methodRefEquivalent: "None (custom threshold comparison)",
          evaluated: fiInput.length > Number(fiThreshold),
          displayType: "boolean",
        };
      case "Function":
        return {
          signature: "Function<String, Integer>: (s) -> R",
          code: "Function<String, Integer> stringLength = String::length;",
          methodRefEquivalent: "String::length  (Unbound instance method)",
          evaluated: fiInput.length,
          displayType: "Integer",
        };
      case "Consumer":
        return {
          signature: "Consumer<String>: (s) -> void",
          code: "Consumer<String> logger = System.out::println;",
          methodRefEquivalent: "System.out::println  (Bound instance method)",
          evaluated: `[STDOUT]: Processing audit record '${fiInput}'`,
          displayType: "void (side-effect console print)",
        };
      case "Supplier":
        return {
          signature: "Supplier<Double>: () -> T",
          code: "Supplier<Double> randomScore = Math::random;",
          methodRefEquivalent: "Math::random  (Static method reference)",
          evaluated: "0.8742",
          displayType: "Double",
        };
      default:
        return {};
    }
  }, [selectedFI, fiInput, fiThreshold]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 5: STREAM API PIPELINE & COLLECTOR VISUALIZER
  // ---------------------------------------------------------------------------
  const rawEngineers = useMemo(() => [
    { id: 1, name: "Alice Chen", dept: "Backend", lang: "Java", salary: 145000, exp: 7 },
    { id: 2, name: "Bob Martinez", dept: "Frontend", lang: "TypeScript", salary: 115000, exp: 4 },
    { id: 3, name: "Carlos Silva", dept: "Backend", lang: "Java", salary: 160000, exp: 9 },
    { id: 4, name: "Diana Prince", dept: "Cloud/DevOps", lang: "Go", salary: 140000, exp: 5 },
    { id: 5, name: "Evan Wright", dept: "Backend", lang: "Kotlin", salary: 125000, exp: 3 },
    { id: 6, name: "Fiona Gallagher", dept: "Frontend", lang: "TypeScript", salary: 98000, exp: 2 },
  ], []);

  const [streamMinExp, setStreamMinExp] = useState(3);
  const [streamDept, setStreamDept] = useState("ALL");
  const [streamSort, setStreamSort] = useState("salaryDesc");
  const [streamCollector, setStreamCollector] = useState("toList");

  const streamPipelineResult = useMemo(() => {
    let filtered = rawEngineers.filter((e) => e.exp >= Number(streamMinExp));
    if (streamDept !== "ALL") {
      filtered = filtered.filter((e) => e.dept === streamDept);
    }
    const sorted = [...filtered].sort((a, b) => {
      if (streamSort === "salaryDesc") return b.salary - a.salary;
      if (streamSort === "salaryAsc") return a.salary - b.salary;
      if (streamSort === "expDesc") return b.exp - a.exp;
      return a.name.localeCompare(b.name);
    });

    let terminalOutput;
    if (streamCollector === "toList") {
      terminalOutput = sorted.map((e) => `${e.name} (${e.dept} - $${e.salary.toLocaleString()})`);
    } else if (streamCollector === "averageSalary") {
      const avg = sorted.length > 0 ? Math.round(sorted.reduce((acc, curr) => acc + curr.salary, 0) / sorted.length) : 0;
      terminalOutput = `Average Salary: $${avg.toLocaleString()} (across ${sorted.length} matching engineers)`;
    } else if (streamCollector === "groupingByDept") {
      const groups = {};
      sorted.forEach((e) => {
        if (!groups[e.dept]) groups[e.dept] = [];
        groups[e.dept].push(e.name);
      });
      terminalOutput = groups;
    }

    return {
      sourceCount: rawEngineers.length,
      filteredCount: filtered.length,
      sortedRecords: sorted,
      terminalOutput,
    };
  }, [rawEngineers, streamMinExp, streamDept, streamSort, streamCollector]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 6: MONADIC OPTIONAL STATE MACHINE
  // ---------------------------------------------------------------------------
  const [optRawValue, setOptRawValue] = useState("user@prepspaces.com");
  const [optWrapType, setOptWrapType] = useState("ofNullable");

  const optEvaluated = useMemo(() => {
    let container = null;
    let error = null;

    if (optWrapType === "of") {
      if (optRawValue === null || optRawValue === "null" || optRawValue.trim() === "") {
        error = "NullPointerException! Optional.of(value) strictly forbids null values.";
      } else {
        container = optRawValue;
      }
    } else if (optWrapType === "empty") {
      container = null;
    } else {
      container = optRawValue === "null" || optRawValue.trim() === "" ? null : optRawValue;
    }

    const isPresent = container !== null;
    const mappedUpper = isPresent ? container.toUpperCase() : "N/A";
    const eagerDefault = isPresent ? container : "default-fallback@prepspaces.com (Eagerly evaluated)";

    return {
      container,
      error,
      isPresent,
      mappedUpper,
      eagerDefault,
    };
  }, [optRawValue, optWrapType]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 7: MODERN NIO.2 & SERIALIZATION SECURITY INSPECTOR
  // ---------------------------------------------------------------------------
  const [inspectorSubTab, setInspectorSubTab] = useState("nio");
  const [nioBaseDir, setNioBaseDir] = useState("/app/data/storage");
  const [nioUserPath, setNioUserPath] = useState("reports/2026/q1_summary.json");

  const nioPathAnalysis = useMemo(() => {
    const rawCombined = `${nioBaseDir}/${nioUserPath}`;
    const parts = rawCombined.split("/").filter(Boolean);
    const normalizedStack = [];
    for (const p of parts) {
      if (p === ".") continue;
      if (p === "..") {
        if (normalizedStack.length > 0) normalizedStack.pop();
      } else {
        normalizedStack.push(p);
      }
    }
    const normalized = "/" + normalizedStack.join("/");
    const baseNormalized = "/" + nioBaseDir.split("/").filter(Boolean).join("/");
    const isSafe = normalized.startsWith(baseNormalized);

    return {
      rawCombined,
      normalized,
      isSafe,
      warning: !isSafe
        ? "CRITICAL PATH TRAVERSAL DETECTED! Path escapes root directory boundary. In production, this would expose arbitrary filesystem files."
        : "PATH IS SAFE: Canonical target resides securely within the sanctioned base directory.",
    };
  }, [nioBaseDir, nioUserPath]);

  const [userSession] = useState({
    userId: 84920,
    username: "samarth_lead",
    passwordHash: "$2b$12$eX8zW.uHqM19...",
    authToken: "eyJhbGciOiJIUzI1Ni...",
  });
  const [deserializedResult, setDeserializedResult] = useState(null);

  const handleSerialize = () => {
    setDeserializedResult({
      userId: userSession.userId,
      username: userSession.username,
      passwordHash: null,
      authToken: null,
      note: "transient fields were NOT serialized! Restored as null in Java memory.",
    });
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 8: 30-QUESTION ASSESSMENT QUIZ
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    { id: 1, question: "1. What is the root class of Java's entire exception and error hierarchy?", options: ["Exception", "Error", "Throwable", "RuntimeException"], correct: 2, explanation: "java.lang.Throwable is the root class of the entire Java error and exception hierarchy; only Throwable instances can be thrown or caught." },
    { id: 2, question: "2. Which of the following is a checked exception in Java?", options: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"], correct: 2, explanation: "IOException subclasses Exception directly and is checked, meaning the compiler mandates catch-or-declare." },
    { id: 3, question: "3. Which keyword explicitly throws an exception instance during program execution?", options: ["throws", "throw", "catch", "finally"], correct: 1, explanation: "The 'throw' keyword actively instantiates and signals an exception object within a method body." },
    { id: 4, question: "4. Which keyword is declared on a method signature to indicate that it may propagate exceptions to its caller?", options: ["throws", "throw", "final", "static"], correct: 0, explanation: "The 'throws' keyword appears in method signatures to advertise checked exceptions to callers." },
    { id: 5, question: "5. Which language construct automatically closes resources implementing AutoCloseable upon completion?", options: ["switch statement", "try-with-resources", "synchronized block", "if-else statement"], correct: 1, explanation: "try-with-resources (Java 7+) automatically invokes close() on any AutoCloseable declared in the try header." },
    { id: 6, question: "6. Which exception category does NOT require compile-time handling or declaration?", options: ["Checked exceptions", "Unchecked exceptions (RuntimeException & subclasses)", "All Throwable instances", "Only IOException"], correct: 1, explanation: "Unchecked exceptions (RuntimeException, Error) are exempt from mandatory compile-time catch-or-declare requirements." },
    { id: 7, question: "7. What happens when an exception is thrown inside a method and no local catch block handles it?", options: ["The program immediately freezes without terminating", "The method terminates and the exception propagates down the call stack to the caller", "The JVM replaces the exception with null", "The operating system restarts"], correct: 1, explanation: "Exception propagation unwinds stack frames one by one until an enclosing catch block is found or thread terminates." },
    { id: 8, question: "8. What is the primary compile-time benefit of Java Generics?", options: ["Increases execution speed by 10x", "Provides strong type safety and eliminates manual type casting errors", "Allows primitive types to be stored directly without boxing", "Bypasses JVM memory garbage collection"], correct: 1, explanation: "Generics shift type checking from runtime (ClassCastException) to compile-time, eliminating explicit casting." },
    { id: 9, question: "9. What occurs during JVM type erasure for unbounded type parameters like <T>?", options: ["Type parameters are retained at runtime as dynamic classes", "Type parameters are replaced with Object in bytecode and casts are inserted", "The compiler generates duplicate bytecodes for each type", "Generics are stored directly in Metaspace"], correct: 1, explanation: "Unbounded type parameters <T> are erased to java.lang.Object in bytecode to preserve backward compatibility with legacy JVMs." },
    { id: 10, question: "10. In the PECS guideline for bounded wildcards, what does PECS stand for?", options: ["Parameter Extends, Constructor Super", "Producer Extends, Consumer Super", "Primitive Extends, Class Super", "Polymorphism Extends, Casting Super"], correct: 1, explanation: "Producer Extends, Consumer Super: use '? extends T' when reading data (producing), and '? super T' when writing data (consuming)." },
    { id: 11, question: "11. Which wildcard allows writing an Integer into a generic collection?", options: ["List<? extends Number>", "List<? super Integer>", "List<?>", "List<? extends Integer>"], correct: 1, explanation: "Consumer super: List<? super Integer> can accept Integer values because the list is guaranteed to hold Integer or an ancestor." },
    { id: 12, question: "12. Which interface serves as the root for List, Set, and Queue in the Java Collections Framework?", options: ["Map", "Collection", "Iterable", "Comparable"], correct: 1, explanation: "java.util.Collection is the root interface for List, Set, and Queue (which in turn extends java.lang.Iterable)." },
    { id: 13, question: "13. Which Map implementation does NOT preserve any key insertion order or sorting?", options: ["LinkedHashMap", "TreeMap", "HashMap", "ConcurrentSkipListMap"], correct: 2, explanation: "HashMap organizes entries across hash buckets based on hash codes; order is non-deterministic and can change across resizes." },
    { id: 14, question: "14. What exception is thrown by fail-fast iterators when a collection is modified structurally during traversal?", options: ["IllegalStateException", "ConcurrentModificationException", "UnsupportedOperationException", "IndexOutOfBoundsException"], correct: 1, explanation: "Fail-fast iterators track expectedModCount; if modCount diverges during traversal, ConcurrentModificationException is thrown." },
    { id: 15, question: "15. Which interface defines the 'natural ordering' of objects via the compareTo() method?", options: ["Comparator", "Comparable", "Cloneable", "Serializable"], correct: 1, explanation: "java.lang.Comparable defines int compareTo(T o) for a class's intrinsic natural sort order." },
    { id: 16, question: "16. What is a functional interface in Java?", options: ["An interface with only private methods", "An interface with exactly one abstract method (SAM)", "An interface with multiple constructors", "An interface that cannot be implemented"], correct: 1, explanation: "A functional interface has exactly one abstract method (Single Abstract Method - SAM) and can be targeted by lambdas." },
    { id: 17, question: "17. Which standard functional interface takes an argument of type T and returns a boolean?", options: ["Function<T, R>", "Consumer<T>", "Predicate<T>", "Supplier<T>"], correct: 2, explanation: "Predicate<T> has the abstract method boolean test(T t)." },
    { id: 18, question: "18. What is the method reference equivalent of the lambda (s) -> System.out.println(s)?", options: ["System.out::print", "System.out::println", "PrintStream::println", "System::out::println"], correct: 1, explanation: "System.out::println is a bound instance method reference on the System.out PrintStream instance." },
    { id: 19, question: "19. Which statement is true about Java Streams?", options: ["Streams store elements in physical heap memory like collections", "Streams modify their underlying source collections directly", "Streams are lazy and only execute intermediate operations when a terminal operation is called", "Streams can be traversed multiple times safely"], correct: 2, explanation: "Streams do not store elements; intermediate operations (filter, map) are lazy and only execute when a terminal operation triggers the pipeline." },
    { id: 20, question: "20. Which of the following is an intermediate (lazy) Stream operation?", options: ["collect()", "forEach()", "filter()", "reduce()"], correct: 2, explanation: "filter() returns a new lazy Stream pipeline without consuming elements until a terminal operation is invoked." },
    { id: 21, question: "21. Which collector groups Stream elements by a classified key into a Map?", options: ["Collectors.toList()", "Collectors.groupingBy()", "Collectors.joining()", "Collectors.partitioningBy()"], correct: 1, explanation: "Collectors.groupingBy() implements an SQL GROUP BY operation, aggregating elements into a Map<K, List<T>>." },
    { id: 22, question: "22. Why are specialized primitive streams like IntStream preferred over Stream<Integer>?", options: ["They allow multiple inheritance", "They avoid the performance and memory overhead of boxing and unboxing primitives", "They bypass the JVM security manager", "They run on the GPU"], correct: 1, explanation: "IntStream stores raw 32-bit int primitives directly in memory buffers, avoiding 24-byte Integer object boxing overhead." },
    { id: 23, question: "23. What common concurrency problem can arise when using parallel streams with shared mutable state?", options: ["Deadlock on compilation", "Race conditions and data corruption", "Memory leaks in Metaspace", "Stack overflow in ForkJoinPool"], correct: 1, explanation: "Parallel streams utilize multiple worker threads concurrently; mutating unsynchronized shared state causes race conditions." },
    { id: 24, question: "24. What is the primary purpose of Optional<T> in modern Java?", options: ["To replace all if statements in code", "To provide a type-level representation of an absent value and prevent NullPointerException", "To speed up collection lookups", "To encrypt sensitive fields"], correct: 1, explanation: "Optional<T> makes the potential absence of a return value explicit in the API contract, forcing callers to handle missing states." },
    { id: 25, question: "25. What is the key difference between optional.orElse(val) and optional.orElseGet(supplier)?", options: ["orElse() is lazy while orElseGet() is eager", "orElse() evaluates its argument eagerly every time, while orElseGet() evaluates lazily only if absent", "There is no difference in execution", "orElseGet() throws an exception if present"], correct: 1, explanation: "orElse(defaultValue) evaluates the fallback expression immediately, whereas orElseGet(() -> compute()) executes lazily only if the Optional is empty." },
    { id: 26, question: "26. Which modern class in java.nio.file provides static helper methods for creating, reading, and writing files?", options: ["File", "Paths", "Files", "FileSystem"], correct: 2, explanation: "java.nio.file.Files provides static utility methods (writeString, readString, lines, copy, delete) operating on Path objects." },
    { id: 27, question: "27. Which character encoding should always be explicitly specified when reading and writing text files?", options: ["ASCII", "StandardCharsets.UTF_8", "ISO-8859-1", "Windows-1252"], correct: 1, explanation: "StandardCharsets.UTF_8 guarantees cross-platform determinism across Linux, macOS, and Windows operating systems." },
    { id: 28, question: "28. What keyword prevents a specific field from being serialized when an object is written to ObjectOutputStream?", options: ["volatile", "transient", "static", "final"], correct: 1, explanation: "The 'transient' keyword marks fields that must be omitted from byte streams during serialization (e.g., passwords, sockets)." },
    { id: 29, question: "29. What is the role of serialVersionUID in a Serializable class?", options: ["It provides a checksum for class file compression", "It verifies that the sender and receiver of a serialized object have loaded compatible class definitions", "It serves as the primary key in a database table", "It specifies the thread priority during serialization"], correct: 1, explanation: "serialVersionUID ensures version compatibility; if class structure changes, an InvalidClassException signals version mismatch." },
    { id: 30, question: "30. Why is deserializing untrusted byte streams considered a severe security vulnerability?", options: ["It causes high disk I/O latency", "Untrusted byte streams can trigger arbitrary remote code execution via malicious gadget chains", "It bypasses Java garbage collection", "It converts checked exceptions to unchecked exceptions"], correct: 1, explanation: "Untrusted deserialization allows attackers to instantiate malicious class sequences (gadget chains) during readObject(), triggering remote code execution." },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 9: LABS & PRACTICAL TASKS CHECKLIST
  // ---------------------------------------------------------------------------
  const labsList = [
    { id: "lab-1", type: "Lab", title: "Custom Exception Hierarchy", goal: "Design InsufficientFundsException and InvalidAccountException with error codes, message chaining, and suppressed exception logging." },
    { id: "lab-2", type: "Lab", title: "Safe AutoCloseable Resource Manager", goal: "Implement a custom database connection pool resource implementing AutoCloseable that logs clean releases and manages suppressed exceptions." },
    { id: "lab-3", type: "Lab", title: "Generic LRU Cache with Eviction", goal: "Create a generic LRUCache<K, V> backed by LinkedHashMap with access-order eviction and thread-safe lock encapsulation." },
    { id: "lab-4", type: "Lab", title: "PECS Data Pipeline Utility", goal: "Build CollectionsUtil with copyElements(List<? super T> dest, List<? extends T> src) validating PECS variance rules." },
    { id: "lab-5", type: "Lab", title: "Frequency Counter & Sorting Pipeline", goal: "Read a large text stream, count word frequencies into a Map<String, Integer>, and sort by frequency descending using Comparator chaining." },
    { id: "lab-6", type: "Lab", title: "Functional Query Engine", goal: "Implement higher-order filter, map, and fold utility methods accepting Predicate<T>, Function<T, R>, and BinaryOperator<T>." },
    { id: "lab-7", type: "Lab", title: "Employee Analytics Stream Pipeline", goal: "Process a 5,000-record CSV with Stream API: filter active status, group by department, and calculate median compensation." },
    { id: "lab-8", type: "Lab", title: "Monadic Configuration Loader", goal: "Build AppConfig parser returning Optional<String> and Optional<Integer> with orElseGet fallback defaults and validate inputs." },
    { id: "lab-9", type: "Lab", title: "Secure NIO.2 File Walker & Audit", goal: "Recursively traverse a directory tree with Files.walk(), enforce directory boundaries against path traversal, and aggregate file statistics." },
    { id: "lab-10", type: "Lab", title: "Encrypted Serialization & ObjectFilter", goal: "Implement secure UserSession serialization with serialVersionUID, transient security fields, and custom ObjectInputFilter." },
    { id: "proj-1", type: "Project", title: "Student Management System (Capstone)", goal: "Develop complete end-to-end console & file-backed enterprise application with custom exceptions, generics, streams, and NIO.2 storage." },
    { id: "proj-2", type: "Project", title: "Parallel Log File Analyzer", goal: "Process multi-gigabyte server access logs concurrently using parallel streams, counting 4xx/5xx HTTP codes and top IP origins." },
    { id: "proj-3", type: "Project", title: "In-Memory Key-Value Store", goal: "Design generic KeyValueStore<K, V> with TTL expiration, snapshot serialization, and atomic update functions." },
    { id: "proj-4", type: "Project", title: "Stream-Based Expression Evaluator", goal: "Parse and evaluate mathematical token streams using functional pipelines and recursive reduction operators." },
    { id: "proj-5", type: "Project", title: "Asynchronous Event Dispatcher", goal: "Construct publisher-subscriber event broker with typed event listeners, functional consumers, and exception isolation." },
  ];

  const [completedLabs, setCompletedLabs] = useState({});
  const toggleLab = (id) => {
    setCompletedLabs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 pb-16 selection:bg-orange-500/20 selection:text-orange-900 px-4 py-6 sm:px-8 sm:py-10 md:px-12">
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-[#e7e3da] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goBack()}
              className="p-1.5 rounded-lg border border-[#e7e3da] hover:bg-stone-100 text-stone-600 transition"
              title="Return to Track Overview"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <span className="font-semibold text-stone-800">Java Master Course</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-orange-600 font-bold">Module 5: Advanced Java Programming</span>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-[#f4f1ea] p-1 rounded-xl border border-[#e7e3da]">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-2xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              <span>Curriculum (43 Sections)</span>
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "workbench"
                  ? "bg-white text-stone-900 shadow-2xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Interactive Workbenches (9 Labs)</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* Module Header Hero */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 mb-8 border border-stone-800 shadow-lg relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-mono text-xs font-bold border border-orange-500/30">
                MODULE 5
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-medium border border-stone-700">
                14-16 Hours Study Time
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                Enterprise & Production Grade
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Advanced Java Programming & Standard Library
            </h1>
            <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
              Master industrial Java engineering: robust exception hierarchies, custom exceptions, try-with-resources, generic classes/methods, bounded wildcards (PECS), Collections Framework deep dive, lambdas, functional interfaces, Stream API pipelines, collectors, Optional monadic flow, NIO.2 file handling, byte/character streams, and serialization security.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setActiveTab("workbench");
                  setActiveWorkbenchTab("exception-studio");
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 text-white font-semibold text-xs sm:text-sm hover:bg-orange-500 transition-colors shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Interactive Studios</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("workbench");
                  setActiveWorkbenchTab("quiz");
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-xs sm:text-sm hover:bg-stone-700 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Take 30 MCQs Exam</span>
              </button>
            </div>
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <ModuleNav
          track="java"
          courseId="java-programming"
          currentModuleId="advanced"
          prevRoute="/learning/java/oop"
          nextRoute="/learning/java/recursion-backtracking"
        />

        {activeTab === "curriculum" ? (
          <div className="mt-8">
            <JavaAdvancedSections />
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {/* WORKBENCH SUB-TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e7e3da] text-xs font-semibold [scrollbar-width:none]">
              {[
                { id: "exception-studio", label: "1. Exception Call Stack Studio", icon: AlertTriangle },
                { id: "generics-lab", label: "2. Generics & PECS Lab", icon: Box },
                { id: "collections-studio", label: "3. Collections Benchmark", icon: Layers },
                { id: "functional-playground", label: "4. Lambdas & Functional Interfaces", icon: Zap },
                { id: "stream-studio", label: "5. Stream Pipeline Studio", icon: Workflow },
                { id: "optional-lab", label: "6. Optional State Machine", icon: ShieldCheck },
                { id: "io-serialization-inspector", label: "7. NIO.2 & Serialization Inspector", icon: HardDrive },
                { id: "quiz", label: "8. 30-Question Assessment Exam", icon: HelpCircle },
                { id: "labs", label: "9. Labs, Projects & 40 Interview Qs", icon: Award },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeWorkbenchTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkbenchTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-orange-600 text-white font-bold shadow-xs"
                        : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 1. EXCEPTION CALL STACK STUDIO */}
            {activeWorkbenchTab === "exception-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        JVM Call Stack Unwinding & Exception Propagation Simulator
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        Visualize how the Java Virtual Machine searches the runtime call stack frame-by-frame for matching catch blocks, checked exception contracts, and finally block guarantees.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleResetStack}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50 flex items-center gap-1.5"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reset Stack</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Controls & Active Exception */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="bg-[#fcfbf9] p-4 rounded-xl border border-stone-200 space-y-3">
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                          Select Throwable to Trigger:
                        </label>
                        <div className="space-y-2">
                          {[
                            { name: "PaymentFailedException", type: "Checked (Custom)", desc: "Mandates compile-time try-catch or throws" },
                            { name: "NullPointerException", type: "Unchecked (RuntimeException)", desc: "Propagates silently without compile-time check" },
                            { name: "OutOfMemoryError", type: "Fatal JVM Error", desc: "Cannot be caught safely; uncaught by application catch" },
                          ].map((ex) => (
                            <button
                              key={ex.name}
                              disabled={stackStatus !== "idle"}
                              onClick={() => handleThrowException(ex.name)}
                              className={`w-full text-left p-3 rounded-lg border transition ${
                                activeException === ex.name
                                  ? "bg-orange-50 border-orange-300 text-orange-950 font-bold"
                                  : "bg-white border-stone-200 text-stone-800 hover:bg-stone-50"
                              } ${stackStatus !== "idle" ? "opacity-60 cursor-not-allowed" : ""}`}
                            >
                              <div className="flex items-center justify-between text-xs">
                                <span>{ex.name}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 font-mono text-stone-600">
                                  {ex.type}
                                </span>
                              </div>
                              <div className="text-[11px] text-stone-500 font-normal mt-0.5">{ex.desc}</div>
                            </button>
                          ))}
                        </div>

                        <div className="pt-2">
                          <button
                            disabled={stackStatus === "idle" || stackStatus === "caught" || stackStatus === "completed"}
                            onClick={handleStepUnwind}
                            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                              stackStatus === "thrown" || stackStatus === "unwinding"
                                ? "bg-orange-600 text-white hover:bg-orange-500 shadow-sm"
                                : "bg-stone-200 text-stone-400 cursor-not-allowed"
                            }`}
                          >
                            <Play className="w-3.5 h-3.5" />
                            <span>Step Unwind Next Frame</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                        <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                          JVM Exception Rule:
                        </div>
                        When a method throws an exception, normal execution halts immediately. The JVM inspects the current frame. If no matching catch block is found, the frame is popped from the thread stack, returning to caller frame. This continues until a matching handler is found or the thread terminates.
                      </div>
                    </div>

                    {/* Visual Stack Frames */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center justify-between">
                        <span>JVM Thread Stack (Top = Active Frame)</span>
                        <span className="text-stone-500 font-mono font-normal">State: {stackStatus.toUpperCase()}</span>
                      </div>

                      <div className="space-y-2">
                        {callStack.map((frame, idx) => {
                          const isCurrent = (stackStatus === "thrown" && idx === 0) || (currentUnwindIdx === idx);
                          const isPopped = currentUnwindIdx > idx;
                          const isCaughtHere = stackStatus === "caught" && frame.id === 3;

                          return (
                            <div
                              key={frame.id}
                              className={`p-4 rounded-xl border transition-all ${
                                isCaughtHere
                                  ? "bg-emerald-50 border-emerald-400 shadow-xs"
                                  : isPopped
                                  ? "bg-stone-100/70 border-stone-200 opacity-40 line-through text-stone-400"
                                  : isCurrent
                                  ? "bg-orange-50/80 border-orange-400 shadow-sm"
                                  : "bg-white border-stone-200 text-stone-800"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-xs font-bold text-stone-900">{frame.method}</span>
                                  <span className="text-xs text-stone-500 font-mono">({frame.file}:{frame.line})</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {frame.hasTryCatch ? (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                                      catches [{frame.catches.join(", ")}]
                                    </span>
                                  ) : (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-stone-100 text-stone-500">
                                      no local catch
                                    </span>
                                  )}
                                  {isCurrent && !isCaughtHere && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-600 text-white animate-pulse">
                                      SEARCHING
                                    </span>
                                  )}
                                  {isCaughtHere && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white flex items-center gap-1">
                                      <Check className="w-3.5 h-3.5" /> MATCHED & HANDLED
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Event Log Console */}
                      <div className="mt-4 bg-stone-950 text-stone-200 p-4 rounded-xl font-mono text-xs space-y-1.5 max-h-48 overflow-y-auto border border-stone-800">
                        <div className="text-[10px] uppercase font-bold text-stone-400 mb-1 border-b border-stone-800 pb-1">
                          JVM Execution & Unwinding Log
                        </div>
                        {stackLogs.map((log, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-orange-500 select-none">&gt;</span>
                            <span className="leading-relaxed">{log}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. GENERICS & PECS LAB */}
            {activeWorkbenchTab === "generics-lab" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Box className="w-5 h-5 text-orange-600" />
                      Generics, Bounded Types & PECS (Producer Extends, Consumer Super)
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Experience compile-time type safety, verify bounded wildcard read/write constraints, and inspect JVM type erasure bytecode decompilation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Generic Box<T> Studio */}
                    <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-4">
                      <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-orange-600" />
                        Generic Container: Box&lt;T extends Number&gt;
                      </h4>

                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-stone-600 font-medium block mb-1">
                            Choose Type Parameter &lt;T&gt;:
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {["Integer", "Double", "String"].map((t) => (
                              <button
                                key={t}
                                onClick={() => setGenericType(t)}
                                className={`py-2 px-3 rounded-lg text-xs font-bold border transition ${
                                  genericType === t
                                    ? t === "String"
                                      ? "bg-rose-50 border-rose-400 text-rose-800"
                                      : "bg-orange-50 border-orange-300 text-orange-900"
                                    : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                                }`}
                              >
                                &lt;{t}&gt;
                              </button>
                            ))}
                          </div>
                        </div>

                        {genericType === "String" ? (
                          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
                            <span className="font-bold flex items-center gap-1.5 mb-0.5">
                              <ShieldAlert className="w-4 h-4 text-rose-600" />
                              Compile-Time Error: Type parameter not within bound!
                            </span>
                            java: type argument java.lang.String is not within bounds of type-variable T extends java.lang.Number.
                          </div>
                        ) : (
                          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                            <span className="font-bold flex items-center gap-1.5 mb-0.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              Valid Bounded Type Parameter!
                            </span>
                            Box&lt;{genericType}&gt; satisfies &lt;T extends Number&gt;. Box stores instances of {genericType} with zero boxing/unboxing overhead.
                          </div>
                        )}

                        <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs">
                          <div className="text-stone-400">// Java Source Definition</div>
                          <span className="text-orange-400">public class</span> Box&lt;<span className="text-amber-300">T extends Number</span>&gt; &#123;<br />
                          &nbsp;&nbsp;<span className="text-orange-400">private</span> T value;<br />
                          &nbsp;&nbsp;<span className="text-orange-400">public void</span> set(T v) &#123; <span className="text-stone-400">this</span>.value = v; &#125;<br />
                          &nbsp;&nbsp;<span className="text-orange-400">public</span> T get() &#123; <span className="text-orange-400">return</span> value; &#125;<br />
                          &#125;
                        </div>
                      </div>
                    </div>

                    {/* PECS Rule Visualizer */}
                    <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
                          <SlidersHorizontal className="w-4 h-4 text-orange-600" />
                          PECS Rule Interactive Demonstration
                        </h4>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setPecsScenario("producer")}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold border transition ${
                              pecsScenario === "producer"
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-stone-600 border-stone-200"
                            }`}
                          >
                            ? extends T (Producer)
                          </button>
                          <button
                            onClick={() => setPecsScenario("consumer")}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold border transition ${
                              pecsScenario === "consumer"
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-stone-600 border-stone-200"
                            }`}
                          >
                            ? super T (Consumer)
                          </button>
                        </div>
                      </div>

                      {pecsScenario === "producer" ? (
                        <div className="space-y-3">
                          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                            <span className="font-bold">PRODUCER EXTENDS:</span> When you only READ from a generic collection, use <code>List&lt;? extends Number&gt;</code>. It produces items.
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-950 font-mono">
                              <span>Number n = list.get(0);</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">ALLOWED (Safe Read)</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-between text-rose-950 font-mono">
                              <span>list.add(10); // COMPILE ERROR</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-900">FORBIDDEN (Read-Only)</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-stone-500">
                            Why forbidden? Because <code>List&lt;? extends Number&gt;</code> could be a <code>List&lt;Double&gt;</code> at runtime; inserting an Integer would corrupt type safety!
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
                            <span className="font-bold">CONSUMER SUPER:</span> When you WRITE into a collection, use <code>List&lt;? super Integer&gt;</code>. It consumes items.
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-950 font-mono">
                              <span>list.add(42);</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">ALLOWED (Safe Write)</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-between text-amber-950 font-mono">
                              <span>Object obj = list.get(0);</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">RETURNS OBJECT</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-stone-500">
                            Because the list holds Integer or any superclass (Number, Object), writing an Integer is 100% type-safe, but reading only yields Object.
                          </p>
                        </div>
                      )}

                      {/* Bytecode Erasure Toggle */}
                      <div className="pt-2 border-t border-stone-200">
                        <button
                          onClick={() => setShowErasureBytecode(!showErasureBytecode)}
                          className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1.5"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>{showErasureBytecode ? "Hide JVM Bytecode Erasure" : "Inspect JVM Bytecode Erasure (javap -c)"}</span>
                        </button>

                        {showErasureBytecode && (
                          <div className="mt-3 p-3 rounded-xl bg-stone-900 text-stone-200 font-mono text-[11px] leading-relaxed">
                            <div className="text-stone-400">// javap -c Box.class (Notice: T is erased to java.lang.Number!)</div>
                            public class Box &#123;<br />
                            &nbsp;&nbsp;java.lang.Number value;<br />
                            &nbsp;&nbsp;public void set(java.lang.Number);<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Code:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0: aload_0<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: aload_1<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: putfield #7 // Field value:Ljava/lang/Number;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5: return<br />
                            &#125;
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. COLLECTIONS BENCHMARK & ARCHITECTURE */}
            {activeWorkbenchTab === "collections-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-600" />
                      Collections Framework Architecture & Live Benchmark Matrix
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Compare internal memory allocation, node pointer overhead, treeification thresholds, and asymptotic time complexities across List, Set, and Map implementations.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        {["list", "set", "map"].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setCollectionCategory(cat);
                              setSimulatedOps(null);
                            }}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                              collectionCategory === cat
                                ? "bg-orange-600 text-white shadow-xs"
                                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                            }`}
                          >
                            {cat} Hierarchy
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={runBenchmarkSimulation}
                        className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition flex items-center gap-1.5 shadow-sm"
                      >
                        <Zap className="w-3.5 h-3.5 text-orange-400" />
                        <span>Run 100,000 Operations Benchmark</span>
                      </button>
                    </div>

                    {/* Benchmark Results Display */}
                    {simulatedOps ? (
                      <div className="space-y-3">
                        <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                          Simulation Results: {simulatedOps.type} (n = 100,000 elements)
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {simulatedOps.results.map((res, i) => (
                            <div key={i} className="p-4 rounded-xl border border-stone-200 bg-[#fcfbf9] space-y-2">
                              <div className="text-sm font-black text-orange-600 border-b border-stone-200 pb-1.5 flex items-center justify-between">
                                <span>{res.impl}</span>
                                <span className="text-[10px] font-mono text-stone-500">Benchmark Tested</span>
                              </div>
                              {Object.entries(res).filter(([k]) => k !== "impl").map(([k, v]) => (
                                <div key={k} className="text-xs flex flex-col gap-0.5">
                                  <span className="text-stone-500 font-mono text-[10px] uppercase">{k}:</span>
                                  <span className="font-semibold text-stone-800">{v}</span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 text-center rounded-2xl bg-[#fcfbf9] border border-dashed border-stone-300">
                        <Layers className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                        <div className="text-xs font-bold text-stone-700">Click 'Run 100,000 Operations Benchmark'</div>
                        <p className="text-xs text-stone-500 mt-1 max-w-md mx-auto">
                          Generates side-by-side empirical performance metrics and heap memory footprint comparisons for {collectionCategory.toUpperCase()} implementations.
                        </p>
                      </div>
                    )}

                    {/* Architecture Hierarchy Blueprint */}
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[11px] font-bold uppercase">Collections Framework Class Tree (JDK 21)</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <div>
                          <div className="text-orange-400 font-bold">List&lt;E&gt;</div>
                          <div className="text-stone-300 text-[11px] mt-1 space-y-1">
                            <div>├── ArrayList (Dynamic array)</div>
                            <div>├── LinkedList (Doubly linked)</div>
                            <div>└── Vector / Stack (Legacy)</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-orange-400 font-bold">Set&lt;E&gt;</div>
                          <div className="text-stone-300 text-[11px] mt-1 space-y-1">
                            <div>├── HashSet (O(1) hash bucket)</div>
                            <div>├── LinkedHashSet (Insertion order)</div>
                            <div>└── TreeSet (Red-Black O(log n))</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-orange-400 font-bold">Map&lt;K, V&gt;</div>
                          <div className="text-stone-300 text-[11px] mt-1 space-y-1">
                            <div>├── HashMap (Bucket + Treeify 8)</div>
                            <div>├── LinkedHashMap (LRU order)</div>
                            <div>└── TreeMap (Sorted Red-Black)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. FUNCTIONAL INTERFACES & LAMBDAS PLAYGROUND */}
            {activeWorkbenchTab === "functional-playground" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      Functional Interfaces & Lambda Expression Playground
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Experiment with the foundational four functional interfaces in <code>java.util.function</code>, test custom lambda behaviors, and translate to method references (<code>::</code>).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Select Interface */}
                    <div className="lg:col-span-4 space-y-3">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                        Core Functional Interface:
                      </label>
                      <div className="space-y-2">
                        {["Predicate", "Function", "Consumer", "Supplier"].map((name) => (
                          <button
                            key={name}
                            onClick={() => setSelectedFI(name)}
                            className={`w-full text-left p-3 rounded-xl border transition ${
                              selectedFI === name
                                ? "bg-orange-50 border-orange-300 text-orange-950 font-bold shadow-2xs"
                                : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                            }`}
                          >
                            <div className="text-xs font-bold">{name}&lt;T...&gt;</div>
                            <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                              {name === "Predicate" && "T -> boolean (Condition testing)"}
                              {name === "Function" && "T -> R (Transformation mapping)"}
                              {name === "Consumer" && "T -> void (Side-effect consumer)"}
                              {name === "Supplier" && "() -> T (Value factory)"}
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Interactive Inputs */}
                      <div className="pt-3 border-t border-stone-200 space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Input Argument (String):
                          </label>
                          <input
                            type="text"
                            value={fiInput}
                            onChange={(e) => setFiInput(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono focus:outline-none focus:border-orange-500"
                          />
                        </div>

                        {selectedFI === "Predicate" && (
                          <div>
                            <label className="text-xs font-semibold text-stone-700 flex justify-between mb-1">
                              <span>Length Threshold:</span>
                              <span className="font-mono text-orange-600 font-bold">{fiThreshold}</span>
                            </label>
                            <input
                              type="range"
                              min="3"
                              max="30"
                              value={fiThreshold}
                              onChange={(e) => setFiThreshold(e.target.value)}
                              className="w-full accent-orange-600"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Execution Display */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                            {fiExecutionResult.signature}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold font-mono">
                            @FunctionalInterface
                          </span>
                        </div>

                        <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs space-y-2">
                          <div className="text-stone-400">// Lambda Expression Target</div>
                          <div className="text-amber-300">{fiExecutionResult.code}</div>
                          <div className="text-stone-400 pt-2">// Method Reference Equivalent (::)</div>
                          <div className="text-emerald-400">{fiExecutionResult.methodRefEquivalent}</div>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                            Evaluation Result:
                          </div>
                          <div className="text-base font-black text-stone-900 font-mono">
                            {String(fiExecutionResult.evaluated)}
                          </div>
                          <div className="text-[11px] text-stone-500 font-mono">
                            Return Type: {fiExecutionResult.displayType}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. STREAM PIPELINE STUDIO */}
            {activeWorkbenchTab === "stream-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Workflow className="w-5 h-5 text-orange-600" />
                      Stream API Pipeline & Multi-Stage Collector Visualizer
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Construct lazy functional pipelines on real dataset records. Watch intermediate filters and mappers flow directly into terminal collectors.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Pipeline Controls */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="bg-[#fcfbf9] p-4 rounded-xl border border-stone-200 space-y-4">
                        <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                          Pipeline Step Controls:
                        </div>

                        {/* Filter Min Experience */}
                        <div>
                          <label className="text-xs text-stone-600 font-semibold flex justify-between mb-1">
                            <span>.filter(e -&gt; e.exp &gt;= {streamMinExp})</span>
                            <span className="font-mono text-orange-600 font-bold">{streamMinExp} yrs</span>
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="8"
                            value={streamMinExp}
                            onChange={(e) => setStreamMinExp(e.target.value)}
                            className="w-full accent-orange-600"
                          />
                        </div>

                        {/* Filter Department */}
                        <div>
                          <label className="text-xs text-stone-600 font-semibold block mb-1">
                            .filter(e -&gt; e.dept.equals(...))
                          </label>
                          <select
                            value={streamDept}
                            onChange={(e) => setStreamDept(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs bg-white focus:outline-none focus:border-orange-500"
                          >
                            <option value="ALL">All Departments</option>
                            <option value="Backend">Backend</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Cloud/DevOps">Cloud/DevOps</option>
                          </select>
                        </div>

                        {/* Sort */}
                        <div>
                          <label className="text-xs text-stone-600 font-semibold block mb-1">
                            .sorted(Comparator...)
                          </label>
                          <select
                            value={streamSort}
                            onChange={(e) => setStreamSort(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs bg-white focus:outline-none focus:border-orange-500"
                          >
                            <option value="salaryDesc">Salary (Highest First)</option>
                            <option value="salaryAsc">Salary (Lowest First)</option>
                            <option value="expDesc">Experience (Highest First)</option>
                            <option value="nameAsc">Name Alphabetical</option>
                          </select>
                        </div>

                        {/* Terminal Collector */}
                        <div>
                          <label className="text-xs text-stone-600 font-semibold block mb-1">
                            Terminal Operation .collect(...)
                          </label>
                          <select
                            value={streamCollector}
                            onChange={(e) => setStreamCollector(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs bg-white focus:outline-none focus:border-orange-500"
                          >
                            <option value="toList">.toList() (List of records)</option>
                            <option value="averageSalary">Collectors.averagingInt(Salary)</option>
                            <option value="groupingByDept">Collectors.groupingBy(Dept)</option>
                          </select>
                        </div>
                      </div>

                      {/* Stream Code Generator */}
                      <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-[11px] leading-relaxed">
                        <div className="text-stone-400">// Equivalent Java Stream Pipeline</div>
                        engineers.stream()<br />
                        &nbsp;&nbsp;.filter(e -&gt; e.getExp() &gt;= {streamMinExp})<br />
                        {streamDept !== "ALL" && `  .filter(e -> "${streamDept}".equals(e.getDept()))\n`}
                        &nbsp;&nbsp;.sorted(Comparator.comparing(Dev::getSalary).reversed())<br />
                        {streamCollector === "toList" && "  .map(Dev::getName).toList();"}
                        {streamCollector === "averageSalary" && "  .collect(Collectors.averagingInt(Dev::getSalary));"}
                        {streamCollector === "groupingByDept" && "  .collect(Collectors.groupingBy(Dev::getDept));"}
                      </div>
                    </div>

                    {/* Pipeline Visualization */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                        <span>Pipeline Flow: {streamPipelineResult.sourceCount} Source Elements &rarr; {streamPipelineResult.filteredCount} Filtered</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {streamPipelineResult.sortedRecords.map((dev) => (
                          <div key={dev.id} className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-2xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-stone-900">{dev.name}</span>
                              <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-orange-100 text-orange-800">
                                {dev.dept}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                              <span>{dev.lang} · {dev.exp} yrs exp</span>
                              <span className="text-emerald-700 font-bold">${dev.salary.toLocaleString()}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Terminal Result Card */}
                      <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 space-y-2">
                        <div className="text-xs font-bold text-orange-950 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600" />
                          Terminal Collector Output:
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-orange-200 font-mono text-xs text-stone-800">
                          {typeof streamPipelineResult.terminalOutput === "object" ? (
                            <pre className="whitespace-pre-wrap">{JSON.stringify(streamPipelineResult.terminalOutput, null, 2)}</pre>
                          ) : (
                            <div>{String(streamPipelineResult.terminalOutput)}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. OPTIONAL STATE MACHINE */}
            {activeWorkbenchTab === "optional-lab" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                      Optional&lt;T&gt; Monadic Container & Eager vs Lazy Supplier Lab
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Understand how Optional eliminates NullPointerException, transforms values safely with <code>.map()</code>, and differentiates eager <code>orElse()</code> from lazy <code>orElseGet()</code>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-4">
                      <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                        Container Configuration:
                      </h4>

                      <div>
                        <label className="text-xs text-stone-600 font-medium block mb-1">
                          Underlying Value:
                        </label>
                        <div className="grid grid-cols-3 gap-2 mb-2">
                          <button
                            onClick={() => setOptRawValue("user@prepspaces.com")}
                            className="py-1.5 px-2 rounded-lg text-xs font-medium border bg-white hover:bg-stone-50"
                          >
                            "Valid Email"
                          </button>
                          <button
                            onClick={() => setOptRawValue("")}
                            className="py-1.5 px-2 rounded-lg text-xs font-medium border bg-white hover:bg-stone-50"
                          >
                            "" (Empty String)
                          </button>
                          <button
                            onClick={() => setOptRawValue("null")}
                            className="py-1.5 px-2 rounded-lg text-xs font-medium border bg-rose-50 text-rose-800 border-rose-200"
                          >
                            null
                          </button>
                        </div>
                        <input
                          type="text"
                          value={optRawValue}
                          onChange={(e) => setOptRawValue(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-stone-600 font-medium block mb-1">
                          Wrapping Factory Method:
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "ofNullable", label: "Optional.ofNullable(v)" },
                            { id: "of", label: "Optional.of(v)" },
                            { id: "empty", label: "Optional.empty()" },
                          ].map((wrap) => (
                            <button
                              key={wrap.id}
                              onClick={() => setOptWrapType(wrap.id)}
                              className={`py-2 px-2 rounded-lg text-xs font-bold border transition text-center ${
                                optWrapType === wrap.id
                                  ? "bg-orange-600 text-white border-orange-600"
                                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                              }`}
                            >
                              {wrap.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Fallback Comparison */}
                      <div className="pt-2 border-t border-stone-200 space-y-2">
                        <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                          Eager vs Lazy Fallback Benchmark:
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-2 text-xs">
                          <div>
                            <span className="font-mono text-orange-600 font-bold">.orElse(fetchFromDb())</span>
                            <p className="text-[11px] text-stone-500">
                              Eagerly executed even if the Optional contains a value! Wastes CPU and network calls.
                            </p>
                          </div>
                          <div>
                            <span className="font-mono text-emerald-600 font-bold">.orElseGet(() -&gt; fetchFromDb())</span>
                            <p className="text-[11px] text-stone-500">
                              Lazily executed by Supplier only when the Optional is completely empty. Best practice.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* State Display */}
                    <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-stone-200 space-y-4">
                      <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                        Monadic Container Internal State:
                      </h4>

                      {optEvaluated.error ? (
                        <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-900 space-y-1">
                          <div className="font-bold flex items-center gap-1.5">
                            <ShieldAlert className="w-4 h-4 text-rose-600" />
                            {optEvaluated.error}
                          </div>
                          <p className="text-[11px]">
                            Optional.of(value) requires a guaranteed non-null reference. Use Optional.ofNullable(value) if the input can be null.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className={`p-4 rounded-xl border flex items-center justify-between ${
                            optEvaluated.isPresent
                              ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                              : "bg-stone-100 border-stone-300 text-stone-600"
                          }`}>
                            <div className="flex items-center gap-2">
                              {optEvaluated.isPresent ? (
                                <CheckCircle className="w-5 h-5 text-emerald-600" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-stone-400" />
                              )}
                              <span className="font-bold text-xs font-mono">
                                {optEvaluated.isPresent ? `Present: "${optEvaluated.container}"` : "Empty Container (Optional.empty)"}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-white border">
                              isPresent() = {String(optEvaluated.isPresent)}
                            </span>
                          </div>

                          <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs space-y-2">
                            <div className="text-stone-400">// Monadic Safe Transformations</div>
                            <div>opt.map(String::toUpperCase) &rarr; <span className="text-amber-300">"{optEvaluated.mappedUpper}"</span></div>
                            <div>opt.orElse("backup@fallback.com") &rarr; <span className="text-emerald-400">"{optEvaluated.eagerDefault}"</span></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. NIO.2 & SERIALIZATION INSPECTOR */}
            {activeWorkbenchTab === "io-serialization-inspector" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <HardDrive className="w-5 h-5 text-orange-600" />
                      Modern NIO.2 Path Inspector & Object Serialization Security
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Validate filesystem boundaries against Directory Traversal attacks using NIO.2 Path normalization, and observe how transient fields protect secrets during ObjectOutputStream serialization.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
                      <button
                        onClick={() => setInspectorSubTab("nio")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                          inspectorSubTab === "nio" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        NIO.2 Path Traversal Validator
                      </button>
                      <button
                        onClick={() => setInspectorSubTab("serialization")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                          inspectorSubTab === "serialization" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        Serialization & transient Keyword Security
                      </button>
                    </div>

                    {inspectorSubTab === "nio" ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-3">
                            <div>
                              <label className="text-xs font-semibold text-stone-700 block mb-1">
                                Base Storage Directory (Whitelisted):
                              </label>
                              <input
                                type="text"
                                value={nioBaseDir}
                                onChange={(e) => setNioBaseDir(e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-stone-700 block mb-1">
                                User Input Relative Path:
                              </label>
                              <div className="flex gap-2 mb-2">
                                <button
                                  onClick={() => setNioUserPath("reports/2026/q1_summary.json")}
                                  className="px-2.5 py-1 rounded bg-stone-100 text-stone-700 text-[11px] font-medium hover:bg-stone-200"
                                >
                                  Safe Path
                                </button>
                                <button
                                  onClick={() => setNioUserPath("../../etc/passwd")}
                                  className="px-2.5 py-1 rounded bg-rose-50 text-rose-800 border border-rose-200 text-[11px] font-bold hover:bg-rose-100"
                                >
                                  Malicious Traversal (../../)
                                </button>
                              </div>
                              <input
                                type="text"
                                value={nioUserPath}
                                onChange={(e) => setNioUserPath(e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className={`p-4 rounded-xl border space-y-2 ${
                            nioPathAnalysis.isSafe
                              ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                              : "bg-rose-50 border-rose-300 text-rose-950"
                          }`}>
                            <div className="font-bold text-xs flex items-center gap-1.5">
                              {nioPathAnalysis.isSafe ? (
                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <ShieldAlert className="w-4 h-4 text-rose-600" />
                              )}
                              <span>Normalized Target Path:</span>
                            </div>
                            <div className="font-mono text-xs font-bold">{nioPathAnalysis.normalized}</div>
                            <p className="text-[11px] leading-relaxed">{nioPathAnalysis.warning}</p>
                          </div>

                          <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs space-y-1">
                            <div className="text-stone-400">// NIO.2 Security Pattern</div>
                            Path base = Path.of(baseDir);<br />
                            Path target = base.resolve(userInput).normalize();<br />
                            <span className="text-orange-400">if</span> (!target.startsWith(base)) &#123;<br />
                            &nbsp;&nbsp;<span className="text-rose-400">throw new SecurityException("Directory traversal attack!");</span><br />
                            &#125;
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
                            <div className="text-stone-400">// UserSession.java with transient keyword</div>
                            <span className="text-orange-400">public class</span> UserSession <span className="text-orange-400">implements</span> Serializable &#123;<br />
                            &nbsp;&nbsp;<span className="text-orange-400">private static final long</span> serialVersionUID = 1L;<br />
                            &nbsp;&nbsp;<span className="text-blue-400">private int</span> userId = 84920;<br />
                            &nbsp;&nbsp;<span className="text-blue-400">private String</span> username = "samarth_lead";<br />
                            &nbsp;&nbsp;<span className="text-rose-400">private transient String</span> passwordHash = "$2b$12$...";<br />
                            &nbsp;&nbsp;<span className="text-rose-400">private transient String</span> authToken = "eyJhbGci...";<br />
                            &#125;
                          </div>

                          <button
                            onClick={handleSerialize}
                            className="w-full py-2.5 px-4 rounded-xl bg-orange-600 text-white font-bold text-xs hover:bg-orange-500 transition shadow-sm flex items-center justify-center gap-2"
                          >
                            <Binary className="w-4 h-4" />
                            <span>Serialize & Deserialize (Test transient Protection)</span>
                          </button>
                        </div>

                        <div className="space-y-4">
                          <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                            Deserialized Object in Memory:
                          </div>

                          {deserializedResult ? (
                            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3 font-mono text-xs">
                              <div>userId: <span className="text-emerald-600 font-bold">{deserializedResult.userId}</span></div>
                              <div>username: <span className="text-emerald-600 font-bold">"{deserializedResult.username}"</span></div>
                              <div>passwordHash: <span className="text-rose-600 font-bold">null (STRIPPED BY TRANSIENT)</span></div>
                              <div>authToken: <span className="text-rose-600 font-bold">null (STRIPPED BY TRANSIENT)</span></div>
                              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500 font-sans">
                                {deserializedResult.note}
                              </div>
                            </div>
                          ) : (
                            <div className="p-8 text-center rounded-xl bg-stone-50 border border-dashed border-stone-300 text-xs text-stone-500">
                              Click 'Serialize & Deserialize' to view deserialized memory fields.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 8. 30-QUESTION ASSESSMENT EXAM */}
            {activeWorkbenchTab === "quiz" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-orange-600" />
                        Module 5 Assessment: 30 Multiple-Choice Questions
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Comprehensive evaluation across Exceptions, Generics, PECS, Collections, Lambdas, Streams, Optional, NIO.2, and Serialization Security.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-xs font-semibold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg border">
                        Progress:{" "}
                        <strong className="text-orange-600">
                          {Object.keys(quizAnswers).length} / {quizQuestions.length}
                        </strong>
                      </div>
                      <button
                        onClick={() => setShowResults(!showResults)}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 transition-colors shadow-2xs"
                      >
                        {showResults ? "Hide Results" : "Submit / Check Score"}
                      </button>
                    </div>
                  </div>

                  {showResults && (
                    <div className="mb-6 p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between">
                      <div>
                        <div className="text-xs text-stone-400 font-mono">YOUR TOTAL EXAM SCORE:</div>
                        <div className="text-2xl font-black text-orange-400 font-mono">
                          {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </div>
                      </div>
                      <div className="text-xs text-stone-300 max-w-sm text-right">
                        {quizScore >= 24
                          ? "🎉 Outstanding enterprise mastery! You have completely conquered Core Java Phase 1 and are ready for Data Structures, Algorithms & Spring Boot."
                          : "Review the question explanations below and revisit the corresponding curriculum sections."}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {quizQuestions.map((q) => {
                      const isAnswered = quizAnswers[q.id] !== undefined;
                      const selectedOpt = quizAnswers[q.id];
                      const isCorrect = selectedOpt === q.correct;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border transition-all ${
                            showResults
                              ? isCorrect
                                ? "bg-emerald-50/50 border-emerald-300"
                                : isAnswered
                                ? "bg-rose-50/50 border-rose-300"
                                : "bg-stone-50 border-stone-200"
                              : "bg-white border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <div className="font-semibold text-xs text-stone-900 mb-2.5">
                            {q.question}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedOpt === optIdx;
                              let optBtnClass = "bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700";

                              if (showResults) {
                                if (optIdx === q.correct) {
                                  optBtnClass = "bg-emerald-600 text-white font-bold border-emerald-600";
                                } else if (isSelected) {
                                  optBtnClass = "bg-rose-600 text-white font-bold border-rose-600";
                                }
                              } else if (isSelected) {
                                optBtnClass = "bg-orange-600 text-white font-bold border-orange-600";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)}
                                  className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between ${optBtnClass}`}
                                >
                                  <span>{opt}</span>
                                  {showResults && optIdx === q.correct && (
                                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {showResults && (
                            <div className="mt-3 p-3 rounded-lg bg-stone-100 text-[11px] text-stone-700 leading-relaxed">
                              <span className="font-bold text-stone-900">Explanation: </span>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 9. LABS, PROJECTS & INTERVIEW QUESTIONS */}
            {activeWorkbenchTab === "labs" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-600" />
                      Labs, Capstone Projects & 40 Technical Interview Questions Tracker
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Track your hands-on coding implementations in your local IDE and master the 40 core enterprise Java technical interview questions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {labsList.map((lab) => {
                      const isDone = completedLabs[lab.id] || false;
                      return (
                        <div
                          key={lab.id}
                          onClick={() => toggleLab(lab.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isDone
                              ? "bg-emerald-50/50 border-emerald-300"
                              : "bg-white border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              type="button"
                              className="mt-0.5 text-stone-400 hover:text-stone-600 focus:outline-none"
                            >
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400" />
                              )}
                            </button>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono uppercase ${
                                    lab.type === "Lab"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-orange-500 text-orange-400"
                                  }`}
                                >
                                  {lab.type}
                                </span>
                                <h4
                                  className={`text-xs font-bold ${
                                    isDone ? "text-stone-500 line-through" : "text-stone-900"
                                  }`}
                                >
                                  {lab.title}
                                </h4>
                              </div>
                              <p className="text-xs text-stone-600 leading-relaxed">{lab.goal}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
