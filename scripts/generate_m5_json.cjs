const fs = require('fs');
const path = require('path');

const outPath1 = path.resolve(__dirname, '../backend/content/java-programming/modules/advanced.json');
const outPath2 = path.resolve(__dirname, '../backend/content/java/modules/advanced.json');

const questions = [
  {
    id: "m5-q1",
    question: "What is the root class of Java's entire exception and error hierarchy?",
    options: ["Exception", "Error", "Throwable", "RuntimeException"],
    correctIndex: 2,
    explanation: "java.lang.Throwable is the root class of the entire Java error and exception hierarchy; only instances of Throwable or its subclasses can be thrown or caught."
  },
  {
    id: "m5-q2",
    question: "Which of the following is a checked exception in Java?",
    options: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"],
    correctIndex: 2,
    explanation: "IOException is a checked exception directly subclassing java.lang.Exception; the compiler mandates that it must either be caught via try-catch or declared with throws."
  },
  {
    id: "m5-q3",
    question: "Which keyword explicitly throws an exception instance during program execution?",
    options: ["throws", "throw", "catch", "finally"],
    correctIndex: 1,
    explanation: "The 'throw' keyword is used inside a block or method body to actively instantiate and signal an exception object (e.g. throw new IllegalArgumentException())."
  },
  {
    id: "m5-q4",
    question: "Which keyword is declared on a method signature to indicate that it may propagate exceptions to its caller?",
    options: ["throws", "throw", "final", "static"],
    correctIndex: 0,
    explanation: "The 'throws' keyword appears in a method or constructor signature to declare the types of checked exceptions that the method may propagate without handling."
  },
  {
    id: "m5-q5",
    question: "Which language construct automatically closes resources implementing AutoCloseable upon completion?",
    options: ["switch statement", "try-with-resources", "synchronized block", "if-else statement"],
    correctIndex: 1,
    explanation: "Try-with-resources (introduced in Java 7) guarantees that any resource implementing AutoCloseable is automatically closed in reverse order of declaration."
  },
  {
    id: "m5-q6",
    question: "Which exception category does NOT require compile-time handling (try-catch) or declaration (throws)?",
    options: ["Checked exceptions", "Unchecked exceptions (RuntimeException & subclasses)", "All Throwable instances", "Only IOException"],
    correctIndex: 1,
    explanation: "Unchecked exceptions (subclasses of RuntimeException, as well as Error) are exempt from compile-time catch-or-declare requirements."
  },
  {
    id: "m5-q7",
    question: "What is the primary advantage of Java generics?",
    options: ["Automatic thread scheduling", "Compile-time type safety and reusable algorithms without manual casting", "Elimination of all runtime exceptions", "Automatic filesystem garbage collection"],
    correctIndex: 1,
    explanation: "Generics allow developers to create type-safe, reusable data structures and algorithms, eliminating ClassCastExceptions and verbose explicit casts at runtime."
  },
  {
    id: "m5-q8",
    question: "Which symbol represents an unknown wildcard type in Java generics?",
    options: ["T", "&", "?", "*"],
    correctIndex: 2,
    explanation: "The question mark '?' represents an unknown wildcard type in generic declarations (e.g. List<?> or List<? extends Number>)."
  },
  {
    id: "m5-q9",
    question: "What does the bounded type parameter `<T extends Number>` represent?",
    options: ["T must be a primitive numerical type like int", "T must be the Number class or one of its subclasses", "T must be a String", "T cannot be an Integer"],
    correctIndex: 1,
    explanation: "<T extends Number> is an upper-bounded type parameter restricting T to java.lang.Number or any reference type that inherits from Number."
  },
  {
    id: "m5-q10",
    question: "What is type erasure in Java?",
    options: ["Removing comments from generic source files", "The compiler process of replacing type parameters with bounds or Object for bytecode compatibility", "Garbage collection of unused collections", "Deleting null references from heap memory"],
    correctIndex: 1,
    explanation: "Type erasure is the mechanism where the Java compiler replaces generic type parameters with their upper bounds (or Object) and inserts casts as needed for backward compatibility."
  },
  {
    id: "m5-q11",
    question: "Which collection allows duplicate elements and maintains positional zero-based indexed ordering?",
    options: ["HashSet", "TreeSet", "ArrayList", "HashMap"],
    correctIndex: 2,
    explanation: "ArrayList implements the List interface, preserving insertion order, enabling O(1) indexed random access, and permitting duplicate elements."
  },
  {
    id: "m5-q12",
    question: "Which standard Set implementation provides NO guarantee regarding its iteration order?",
    options: ["LinkedHashSet", "HashSet", "TreeSet", "ArrayList"],
    correctIndex: 1,
    explanation: "HashSet uses hash codes to bucket elements into a hash table; it makes zero guarantees about encounter order across iterations or JDK versions."
  },
  {
    id: "m5-q13",
    question: "Which data structure in the Collections Framework stores key-value associations rather than individual elements?",
    options: ["List", "Set", "Queue", "Map"],
    correctIndex: 3,
    explanation: "Map stores key-value pairs where each unique key maps to exactly one value. While part of the Collections Framework, Map does not extend Collection."
  },
  {
    id: "m5-q14",
    question: "Which Set implementation preserves element uniqueness while maintaining predictable insertion order?",
    options: ["HashSet", "LinkedHashSet", "ArrayList", "PriorityQueue"],
    correctIndex: 1,
    explanation: "LinkedHashSet combines a hash table with a doubly linked list running through all of its entries, ensuring unique elements traversed in insertion order."
  },
  {
    id: "m5-q15",
    question: "Which interface is the root contract that allows an object to be targeted by enhanced for-each loops?",
    options: ["Serializable", "Iterable", "Comparator", "Optional"],
    correctIndex: 1,
    explanation: "Implementing java.lang.Iterable<T> allows an object to return an Iterator and be used directly in Java's 'for (T item : collection)' loops."
  },
  {
    id: "m5-q16",
    question: "Which method belongs to the standard Iterator interface to check for remaining elements?",
    options: ["hasNext()", "compareTo()", "apply()", "collect()"],
    correctIndex: 0,
    explanation: "The Iterator interface defines hasNext() to test if further elements exist, next() to advance, and optional remove() for safe structural deletion."
  },
  {
    id: "m5-q17",
    question: "Which interface should a custom domain class implement to define its single natural sorting order?",
    options: ["Comparator", "Comparable", "Iterator", "Supplier"],
    correctIndex: 1,
    explanation: "Implementing java.lang.Comparable<T> requires defining int compareTo(T other), which establishes the class's intrinsic natural ordering."
  },
  {
    id: "m5-q18",
    question: "Which interface defines an external, pluggable comparison strategy with multiple sorting criteria?",
    options: ["Comparable", "Comparator", "Consumer", "Predicate"],
    correctIndex: 1,
    explanation: "java.util.Comparator<T> defines int compare(T o1, T o2) and can be instantiated as separate strategies (or lambda expressions) to sort objects differently."
  },
  {
    id: "m5-q19",
    question: "In which Java release were lambda expressions and the Stream API officially introduced?",
    options: ["Java 5", "Java 7", "Java 8", "Java 17"],
    correctIndex: 2,
    explanation: "Java 8 (March 2014) introduced lambda expressions, default/static interface methods, method references, the Stream API, and Optional."
  },
  {
    id: "m5-q20",
    question: "What is the defining structural rule of a functional interface in Java?",
    options: ["It must contain only static helper methods", "It contains exactly one single abstract method (SAM)", "It cannot have any default methods", "It cannot be annotated with @FunctionalInterface"],
    correctIndex: 1,
    explanation: "A functional interface has exactly one abstract method (Single Abstract Method). It may contain any number of default or static methods."
  },
  {
    id: "m5-q21",
    question: "Which standard functional interface takes an argument of type T and returns a boolean?",
    options: ["Consumer<T>", "Supplier<T>", "Predicate<T>", "Function<T, R>"],
    correctIndex: 2,
    explanation: "Predicate<T> defines 'boolean test(T t)' and is widely used for conditions, filters, and validation."
  },
  {
    id: "m5-q22",
    question: "Which operator is used in Java for method references and constructor references?",
    options: ["->", "::", "==", "=>"],
    correctIndex: 1,
    explanation: "The double colon '::' operator is used for method references (e.g. String::toUpperCase, System.out::println, StringBuilder::new)."
  },
  {
    id: "m5-q23",
    question: "Which of the following Stream API operations is classified as an intermediate operation?",
    options: ["count()", "collect()", "filter()", "reduce()"],
    correctIndex: 2,
    explanation: "filter() returns a new lazy stream pipeline and is intermediate; count(), collect(), and reduce() are terminal operations that trigger computation."
  },
  {
    id: "m5-q24",
    question: "Which Stream operation aggregates elements into a single accumulated result using an identity and an associative function?",
    options: ["filter()", "reduce()", "peek()", "sorted()"],
    correctIndex: 1,
    explanation: "reduce() performs a reduction on stream elements using an identity value and an associative binary accumulator to produce a single value."
  },
  {
    id: "m5-q25",
    question: "What is the primary architectural purpose of the java.util.Optional container?",
    options: ["Store an infinite stream of objects", "Represent the possible absence of a value without returning null", "Replace all Java variable declarations", "Bypass exception handling in IO operations"],
    correctIndex: 1,
    explanation: "Optional<T> is designed primarily as a return type to explicitly signal to callers that a result may be absent, mitigating NullPointerExceptions."
  },
  {
    id: "m5-q26",
    question: "Which interface in Java NIO.2 represents a modern, file-system-independent path?",
    options: ["StringBuilder", "Path", "Scanner", "Iterator"],
    correctIndex: 1,
    explanation: "java.nio.file.Path represents a hierarchical path to a file or directory in modern Java, replacing older java.io.File usages."
  },
  {
    id: "m5-q27",
    question: "Which NIO.2 class provides high-level static utility methods for file reading, writing, and manipulation?",
    options: ["Files", "Optional", "Collection", "Serializable"],
    correctIndex: 0,
    explanation: "java.nio.file.Files provides rich static methods like readString(), writeString(), copy(), delete(), lines(), and newBufferedReader()."
  },
  {
    id: "m5-q28",
    question: "Which marker interface must a class implement to participate in default Java object serialization?",
    options: ["Iterator", "Comparable", "Serializable", "AutoCloseable"],
    correctIndex: 2,
    explanation: "java.io.Serializable is a marker interface that authorizes the JVM's ObjectOutputStream to serialize instances of the implementing class."
  },
  {
    id: "m5-q29",
    question: "Which modifier keyword prevents an instance field from being serialized by default Java serialization?",
    options: ["static", "final", "transient", "protected"],
    correctIndex: 2,
    explanation: "Marking an instance field as 'transient' instructs the JVM to skip that field during default object serialization (e.g. passwords, file handles)."
  },
  {
    id: "m5-q30",
    question: "Why is native Java deserialization of untrusted external data considered highly dangerous?",
    options: ["It always corrupts local hard disk partitions", "It can instantiate malicious gadget chains and execute arbitrary remote code", "It forces the JVM to disable all generic type safety", "It automatically encrypts the application classpath"],
    correctIndex: 1,
    explanation: "Deserializing untrusted byte streams allows attackers to manipulate object graphs and invoke harmful gadget chains, potentially achieving Remote Code Execution (RCE)."
  }
];

const advancedModule = {
  id: "advanced",
  courseId: "java-programming",
  index: 5,
  name: "5. Advanced Java Programming",
  title: "Advanced Java Programming & Standard Library Mastery",
  description: "Master enterprise Java engineering: robust exception hierarchies, custom exceptions, try-with-resources, generic classes/methods, bounded wildcards (PECS), Collections Framework deep dive, lambdas, functional interfaces, Stream API pipelines, collectors, Optional monadic flow, NIO.2 file handling, byte/character streams, and serialization security.",
  duration: "14-16 hours",
  level: "Advanced",
  route: "/learning/java/advanced",
  componentName: "JavaAdvanced",
  topics: [
    "Exception Handling Architecture: Throwable, Error, Exception & RuntimeException",
    "Checked vs Unchecked Exceptions: Compile-Time Contracts & Design Trade-offs",
    "Try, Catch, Finally & Java 7 Multi-Catch Exception Handling",
    "Signaling & Contracts: 'throw' Operator vs 'throws' Method Declarations",
    "Exception Propagation, Call Stack Unwinding & Chained Causes",
    "Custom Exceptions: Checked Domain Failures vs Unchecked Invariant Violations",
    "Automatic Resource Management: try-with-resources & Suppressed Exceptions",
    "Generics: Type Safety, Raw Type Elimination & Compile-Time Cast Verification",
    "Generic Classes, Type Parameters (T, E, K, V) & Heap Array Restrictions",
    "Generic Methods & Type Parameter Inference",
    "Bounded Types, Multiple Bounds (&) & Wildcards: PECS (Producer Extends, Consumer Super)",
    "JVM Type Erasure: Bytecode Bridge Methods & Generic Boundary Replacement",
    "Collections Framework Architecture: Iterable, Collection, List, Set, Queue & Map",
    "List Implementations: ArrayList Dynamic Growth vs LinkedList Node Overhead",
    "Set Implementations: HashSet Hashing vs LinkedHashSet Order vs TreeSet Balanced Trees",
    "Queue & Deque: ArrayDeque Ring Buffers vs PriorityQueue Binary Heaps",
    "Map Implementations: HashMap Buckets/Red-Black Trees vs LinkedHashMap vs TreeMap",
    "Traversal Semantics: Iterator, ListIterator & ConcurrentModificationException Fail-Fast",
    "Object Ordering: Comparable Natural Order vs Comparator Strategies & Method Chaining",
    "Lambda Expressions: Syntax, Scope, Closures & Functional Interface Targets",
    "Standard Functional Interfaces: Predicate, Function, Consumer, Supplier & Operators",
    "Method References: Static, Bound, Unbound & Constructor Reference (::) Syntax",
    "Stream API: Lazy Pipelines, Intermediate Filters/Maps vs Terminal Reductions",
    "Advanced Stream Reductions: reduce(), min(), max(), findFirst() & Short-Circuiting",
    "Stream Collectors: toList(), toSet(), joining() & Multi-Level groupingBy() Aggregations",
    "Primitive Streams: IntStream, LongStream, DoubleStream & Range Operations",
    "Parallel Streams: ForkJoinPool, Splitting Overhead & Concurrency Race Hazards",
    "Monadic Design with Optional<T>: orElse vs orElseGet vs orElseThrow",
    "Modern File I/O: Java NIO.2 Path, Paths & Files Static Operations",
    "Byte Streams vs Decoded Character Streams: UTF-8 Encodings & Buffered I/O",
    "File Handling Security, Path Validation, Directory Traversal & Atomic Moves",
    "Object Serialization: Serializable, serialVersionUID, ObjectStreams & transient Fields",
    "Serialization Security Risks: Untrusted Deserialization, Gadget Chains & ObjectInputFilter",
    "Full Capstone Project: Student Record Management System with File Persistence & Streams"
  ],
  quiz: questions
};

fs.writeFileSync(outPath1, JSON.stringify(advancedModule, null, 2), 'utf8');
fs.writeFileSync(outPath2, JSON.stringify(advancedModule, null, 2), 'utf8');
console.log(`Generated ${outPath1} and ${outPath2}`);
