/**
 * Concepts Batch 1: Java Programming & JVM (5) + Operating Systems (5)
 * Complete original technical lessons with code examples, common mistakes,
 * interview Q&As, and internal links to PrepSpaces courses and modules.
 */

export const CONCEPTS_JAVA_OS = [
  // ================= JAVA (5) =================
  {
    slug: "jvm",
    category: "java",
    subcategory: "Runtime & Execution",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Java Virtual Machine (JVM) Architecture, ClassLoader & Runtime Memory",
    metaTitle: "Java Virtual Machine (JVM) Architecture Explained | PrepSpaces Concepts",
    description:
      "Learn how the Java Virtual Machine (JVM) loads bytecode, organizes Heap, Stack, and Metaspace memory, executes JIT compilation, and answers core interview questions.",
    keywords: "JVM architecture, Java Virtual Machine, ClassLoader, JVM Heap vs Stack, JIT compiler, Metaspace, bytecode execution",
    directAnswer:
      "The Java Virtual Machine (JVM) is an abstract execution engine that loads compiled .class bytecode, verifies type safety, manages runtime memory (Heap, JVM Stacks, Metaspace, PC Registers), and executes instructions using an interpreter paired with Just-In-Time (JIT) native machine code compilation.",
    sections: [
      {
        heading: "1. ClassLoader Subsystem: Loading, Linking, and Initialization",
        paragraphs: [
          "Java separates compilation from platform-specific execution. `javac` compiles `.java` source files into architecture-neutral bytecode (`.class`). When a class is first referenced, the ClassLoader subsystem follows three strict phases: Loading, Linking (Verification, Preparation, Resolution), and Initialization.",
          "Class loaders follow the Parent Delegation Model: Bootstrap ClassLoader loads core JDK modules (`java.base`), Platform ClassLoader loads standard extensions, and Application ClassLoader loads classpath classes—preventing untrusted code from spoofing core classes like `java.lang.String`.",
        ],
        bullets: [
          "Loading: Reads binary `.class` streams and creates a `java.lang.Class` object in Metaspace.",
          "Linking: Bytecode verifier validates stack frame types; preparation allocates static fields with zero/default values.",
          "Initialization: Executes static initializers (`clinit`) and assigns explicit static values.",
        ],
      },
      {
        heading: "2. Runtime Data Areas: Shared vs Per-Thread Memory",
        paragraphs: [
          "Understanding which JVM memory regions are shared across threads vs private to a single thread explains nearly every concurrency and `OutOfMemoryError` scenario.",
          "The Heap (objects and arrays) and Metaspace (class metadata, method bytecode, runtime constant pool) are shared globally, requiring synchronization and garbage collection. Each thread owns its own JVM Stack (holding local primitive variables and object references per method call frame), Native Method Stack, and Program Counter (PC) register.",
        ],
      },
      {
        heading: "3. Execution Engine: Interpreter & HotSpot JIT Compilation",
        paragraphs: [
          "Interpreting every bytecode opcode sequentially would be slow, while compiling everything upfront delays startup. HotSpot solves this using Tiered Compilation: the interpreter runs cold paths immediately while profiling method invocation counters and loop back-edges.",
          "Once a method crosses the hot threshold, C1 (client compiler) and C2 (server optimizing compiler) emit heavily optimized native CPU instructions—performing method inlining, dead-code elimination, loop unrolling, and escape analysis (allocating non-escaping objects directly on the stack via scalar replacement).",
        ],
      },
    ],
    codeExample: {
      title: "Inspecting ClassLoader Hierarchy & Heap Boundaries at Runtime",
      language: "java",
      code: `public class JvmRuntimeInspector {
    public static void main(String[] args) {
        ClassLoader appLoader = JvmRuntimeInspector.class.getClassLoader();
        System.out.println("App ClassLoader: " + appLoader);
        System.out.println("Parent (Platform): " + appLoader.getParent());
        // Bootstrap ClassLoader is implemented natively and returns null in Java
        System.out.println("Bootstrap Loader: " + String.class.getClassLoader());

        Runtime rt = Runtime.getRuntime();
        long mb = 1024L * 1024L;
        System.out.printf("Heap Initial/Total: %d MB | Max (-Xmx): %d MB%n",
                rt.totalMemory() / mb, rt.maxMemory() / mb);
    }
}`,
      explanation:
        "Verify the parent delegation chain (`AppClassLoader -> PlatformClassLoader -> null` for Bootstrap) and check current committed vs maximum `-Xmx` heap sizes cleanly at runtime.",
    },
    commonMistakes: [
      {
        mistake: "Confusing PermGen with Metaspace in modern JVMs (Java 8+).",
        correction:
          "PermGen was fixed-size inside heap-contiguous memory and removed in Java 8. Metaspace stores class metadata in native OS memory and grows dynamically unless capped by `-XX:MaxMetaspaceSize`.",
      },
      {
        mistake: "Assuming object fields live on the Stack if created inside a method.",
        correction:
          "Local reference variables live in stack frames, whereas objects normally reside on the Heap—unless JIT escape analysis proves an object never leaves the method and applies scalar replacement.",
      },
      {
        mistake: "Mixing up JRE, JDK, and JVM responsibilities.",
        correction:
          "JVM executes bytecode; JRE bundles JVM plus core runtime libraries; JDK adds developer tools (`javac`, `jstack`, `jmap`, `jshell`) around the JRE/JVM.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does `StackOverflowError` happen separately from `OutOfMemoryError: Java heap space`?",
        answer:
          "`StackOverflowError` occurs when a single thread exceeds its private call-stack limit (`-Xss`), usually due to unbounded recursion. `OutOfMemoryError: Java heap space` occurs when live objects retained across the shared Heap exceed `-Xmx` and GC cannot reclaim space.",
      },
      {
        question: "How does the Parent Delegation Model protect JVM security?",
        answer:
          "Before loading a class itself, a ClassLoader delegates upward to its parent up to the Bootstrap loader. Even if an attacker puts a fake `java.lang.Object` on the classpath, the Bootstrap loader always wins and loads the trusted JDK class.",
      },
      {
        question: "What is JIT Escape Analysis?",
        answer:
          "A C2 compiler optimization that determines whether an allocated object is only reachable within a single method or thread, allowing the compiler to elide locks and eliminate heap allocation via scalar replacement.",
      },
    ],
    relatedConcepts: [
      "/concepts/java/garbage-collection",
      "/concepts/java/java-memory-model",
      "/concepts/os/virtual-memory-and-paging",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Connect JVM stacks, virtual memory, and thread scheduling directly to OS kernel mechanics.",
    },
    relatedModules: [
      { title: "OS Module 3: C & Systems Programming (Memory & Binaries)", route: "/learning/os/systems-programming" },
      { title: "OS Module 10: Virtual Memory & Paging", route: "/learning/os/virtual-memory" },
      { title: "System Design Module 15: Scalability & Performance", route: "/learning/system-design/scalability" },
    ],
    practiceAction: {
      label: "Practice Systems Interviews with AI",
      to: "/ai-interview",
      summary: "Test your understanding of memory layout, threads, and runtime performance in a live spoken AI mock interview.",
    },
  },
  {
    slug: "garbage-collection",
    category: "java",
    subcategory: "Memory Management",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Garbage Collection in Java: Generational Hypothesis, G1GC & ZGC",
    metaTitle: "Java Garbage Collection (G1GC, ZGC & Generational Heap) | PrepSpaces Concepts",
    description:
      "Understand how Java Garbage Collection works: GC roots, mark-and-sweep, generational Eden/Survivor/Old regions, G1GC, ZGC low-latency pauses, and memory leak troubleshooting.",
    keywords: "Java garbage collection, G1GC, ZGC, generational GC, GC roots, Stop-The-World, OutOfMemoryError",
    directAnswer:
      "Java Garbage Collection automatically reclaims heap objects that are no longer reachable from GC Roots (active stack frames, static fields, JNI references). Modern JVMs partition the heap generationally so short-lived objects are collected rapidly in Young Generation while long-lived objects move to Old Generation via G1GC or low-pause ZGC.",
    sections: [
      {
        heading: "1. Reachability Analysis & GC Roots",
        paragraphs: [
          "Java determines liveness by reachability tracing rather than simple reference counting, so cyclic object graphs (`A -> B -> A`) with no external anchor are still collected cleanly.",
          "Collectors traverse object graphs starting from GC Roots: local variables on active thread stacks, static class fields, active `Thread` objects, and JNI native handles. Unreachable subgraphs become eligible for reclamation.",
        ],
      },
      {
        heading: "2. Weak Generational Hypothesis (Young vs Old)",
        paragraphs: [
          "Empirical profiling shows that most objects die young—temporary strings, iterators, DTOs, and streams rarely survive a few milliseconds. Scanning the whole multi-gigabyte heap every time would waste CPU.",
          "HotSpot divides objects into Young Generation (`Eden` + `Survivor S0/S1`, using fast copying Minor GCs) and Old/Tenured Generation (promoted after surviving several minor cycles). Copying collectors relocate surviving objects compactly, eliminating heap fragmentation and enabling fast pointer-bump allocation via Thread-Local Allocation Buffers (TLABs).",
        ],
      },
      {
        heading: "3. Choosing Between G1GC and Generational ZGC",
        paragraphs: [
          "Since Java 9, G1GC (Garbage-First) is the default collector: it splits the heap into equal-sized regions, tracks remembered sets, and targets predictable pause-time goals (`-XX:MaxGCPauseMillis=200`) by collecting the fullest garbage regions first.",
          "For ultra-low tail-latency services (`p99 < 1ms` pauses even on 64GB+ heaps), ZGC (`-XX:+UseZGC -XX:+ZGenerational` in Java 21+) performs marking and compaction concurrently with application threads using colored pointers and load barriers.",
        ],
      },
    ],
    codeExample: {
      title: "Observing Soft vs Weak References & GC Flags",
      language: "java",
      code: `import java.lang.ref.WeakReference;

public class GcReferenceDemo {
    public static void main(String[] args) {
        Object strongRef = new byte[1024 * 1024]; // 1 MB strongly reachable
        WeakReference<Object> weakRef = new WeakReference<>(new byte[1024 * 1024]);

        System.out.println("Before GC - weakRef present: " + (weakRef.get() != null));
        System.gc(); // Advisory hint for demonstration; avoid calling System.gc() in prod
        System.out.println("After GC  - strongRef: " + (strongRef != null)
                + ", weakRef: " + (weakRef.get() != null));
    }
}
// Recommended production diagnostics: -Xlog:gc*:file=gc.log:time,uptime,level,tags`,
      explanation:
        "Strong references prevent collection until nulled or out of scope, whereas `WeakReference` entries (like `WeakHashMap` keys) are reclaimed on the next GC cycle.",
    },
    commonMistakes: [
      {
        mistake: "Calling `System.gc()` in request handlers to free memory.",
        correction:
          "`System.gc()` is only a hint and by default triggers an expensive full Stop-The-World collection. Tune heap sizing and collector flags instead.",
      },
      {
        mistake: "Believing automatic GC eliminates memory leaks in Java.",
        correction:
          "Unbounded static maps, unclosed streams/connections, ThreadLocals in pooled worker threads, and forgotten listeners retain strong references and still trigger `OutOfMemoryError`.",
      },
      {
        mistake: "Setting `-Xmx` too close to container cgroup memory limits.",
        correction:
          "JVM consumes non-heap memory for Metaspace, thread stacks, JIT code cache, and NIO direct buffers. Leave headroom (`-XX:MaxRAMPercentage=75.0`) so Linux cgroups don't OOM-kill the container.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does Java avoid reference counting for heap garbage collection?",
        answer:
          "Reference counting cannot reclaim circular object references cleanly without cycle detectors, and atomic counter increments on every pointer assignment add heavy multithreaded overhead.",
      },
      {
        question: "What causes a Stop-The-World (STW) pause, and how does ZGC keep pauses sub-millisecond?",
        answer:
          "Collectors briefly pause application threads at safepoints so object pointers don't mutate mid-trace. ZGC moves almost all marking and object relocation to concurrent background phases via colored pointers and load barriers.",
      },
      {
        question: "How do you diagnose a Java memory leak in production?",
        answer:
          "Enable `-XX:+HeapDumpOnOutOfMemoryError`, inspect live GC logs, and analyze the `.hprof` dump in Eclipse MAT or VisualVM using Dominator Tree and GC-Root retention paths.",
      },
    ],
    relatedConcepts: [
      "/concepts/java/jvm",
      "/concepts/java/java-memory-model",
      "/concepts/os/virtual-memory-and-paging",
    ],
    relatedCourse: {
      title: "DevOps & SRE Track",
      route: "/learning/devops/linux",
      description: "Learn container cgroup limits, production telemetry, and SRE reliability patterns for JVM services.",
    },
    relatedModules: [
      { title: "OS Module 9: Memory Hierarchy & Allocation", route: "/learning/os/memory" },
      { title: "DevOps Module 3: Docker & Container Isolation", route: "/learning/devops/docker" },
      { title: "System Design Module 17: Reliability & Observability", route: "/learning/system-design/reliability" },
    ],
    practiceAction: {
      label: "Practice Runtime & Architecture Questions",
      to: "/ai-interview",
      summary: "Rehearse explaining heap sizing, container OOM kills, and tail latency in a timed AI interview.",
    },
  },
  {
    slug: "hashmap-internals",
    category: "java",
    subcategory: "Collections & Data Structures",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "How HashMap Works Internally in Java (Hashing, Resizing & Treeification)",
    metaTitle: "Java HashMap Internals: Hashing, Collisions & Treeify | PrepSpaces Concepts",
    description:
      "Deep dive into Java HashMap internals: hash perturbation, bucket index bitmasking, equals/hashCode contract, load factor 0.75 resizing, and Java 8 Red-Black treeification.",
    keywords: "Java HashMap internals, hashCode equals contract, load factor 0.75, HashMap treeification, Red-Black tree bucket",
    directAnswer:
      "Java's HashMap stores key-value entries in a power-of-two array of buckets (`Node<K,V>[]`). It mixes `key.hashCode()` via `(h = key.hashCode()) ^ (h >>> 16)`, maps buckets with `(n - 1) & hash`, resolves collisions via linked lists or balanced Red-Black trees (`TREEIFY_THRESHOLD = 8`), and resizes at `capacity * 0.75`.",
    sections: [
      {
        heading: "1. Key Hashing, Perturbation & Power-of-Two Indexing",
        paragraphs: [
          "Computing `hash % capacity` directly is slower than bitwise masking. Because `HashMap` always maintains table capacity as a power of two (`16, 32, 64...`), bucket index computation simplifies to `(n - 1) & hash`.",
          "However, masking ignores upper hash bits when `n` is small. `HashMap.hash(key)` XORs the upper 16 bits into the lower 16 bits (`h ^ (h >>> 16)`) so high-bit entropy reduces bucket collisions even in small tables.",
        ],
      },
      {
        heading: "2. Collision Handling & Java 8 Treeification",
        paragraphs: [
          "Two unequal keys landing in the same bucket share a singly linked list checked with `equals()`. In worst-case hash-flooding scenarios before Java 8, `O(n)` linked-list scans could degrade `get()` to linear time.",
          "Since Java 8, once a single bucket exceeds `TREEIFY_THRESHOLD = 8` nodes AND the overall table capacity is at least `MIN_TREEIFY_CAPACITY = 64`, that bucket converts into a self-balancing Red-Black tree—improving worst-case bucket lookup from `O(n)` to `O(log n)`.",
        ],
      },
      {
        heading: "3. Load Factor (0.75), Resizing & Concurrency Hazards",
        paragraphs: [
          "When `size > capacity * 0.75`, `HashMap` doubles capacity and re-distributes nodes. Because capacity doubles by one bit, each existing node either stays at `oldIndex` or moves cleanly to `oldIndex + oldCapacity` without recomputing `hashCode()`.",
          "Remember that `HashMap` is **not thread-safe**: concurrent structural modifications across threads cause lost updates or `ConcurrentModificationException` in fail-fast iterators. Use `ConcurrentHashMap` for shared concurrent state.",
        ],
      },
    ],
    codeExample: {
      title: "Why Immutable Keys with Consistent equals/hashCode Matter",
      language: "java",
      code: `import java.util.HashMap;
import java.util.Objects;

public final class CacheKey {
    private final String service;
    private final int version;

    public CacheKey(String service, int version) {
        this.service = service;
        this.version = version;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CacheKey other)) return false;
        return version == other.version && Objects.equals(service, other.service);
    }

    @Override
    public int hashCode() {
        return Objects.hash(service, version); // Both equals() fields included!
    }

    public static void main(String[] args) {
        var map = new HashMap<CacheKey, String>();
        map.put(new CacheKey("auth", 2), "https://auth.internal");
        System.out.println(map.get(new CacheKey("auth", 2))); // Prints URL cleanly
    }
}`,
      explanation:
        "If `equals()` checks both `service` and `version`, `hashCode()` MUST depend on the exact same immutable fields; mutating a key field after `put()` strands the entry in the wrong bucket.",
    },
    commonMistakes: [
      {
        mistake: "Overriding `equals()` without overriding `hashCode()`.",
        correction:
          "Equal objects must return equal hash codes (`a.equals(b) => a.hashCode() == b.hashCode()`). Skipping `hashCode()` routes equal objects to different buckets, making `map.get(key)` return `null`.",
      },
      {
        mistake: "Using mutable POJOs as `HashMap` keys and modifying them after insertion.",
        correction:
          "Changing a field alters `hashCode()`, causing subsequent `get()` and `remove()` calls to inspect the wrong bucket and leak memory.",
      },
      {
        mistake: "Using `HashMap` across concurrent threads expecting safe reads alongside writes.",
        correction:
          "Concurrent `put()` calls break structural invariants; use `ConcurrentHashMap` which leverages CAS bucket head insertion and fine-grained per-bin synchronization.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why is `HashMap` default load factor `0.75`?",
        answer:
          "It balances time and space under Poisson collision distribution: higher load factors save array memory but sharply raise bucket collisions; `0.75` keeps expected chain lengths near zero (`e^(-0.75)` empty/low chains) before doubling.",
      },
      {
        question: "Why does `HashMap` require capacity >= 64 before converting a long bucket to a tree?",
        answer:
          "When tables are tiny (`< 64`), collisions usually mean the array simply needs resizing rather than complex tree nodes (`TreeNode` takes roughly double the memory of `Node`).",
      },
      {
        question: "How does `ConcurrentHashMap` in Java 8+ differ from Java 7?",
        answer:
          "Java 7 used coarse fixed `Segment` locks; Java 8+ eliminates segments and uses lock-free CAS for empty buckets plus `synchronized` only on the first node of a colliding bucket.",
      },
    ],
    relatedConcepts: [
      "/concepts/java/jvm",
      "/concepts/java/multithreading-and-concurrency",
      "/concepts/system-design/consistent-hashing",
    ],
    relatedCourse: {
      title: "System Design Masterclass",
      route: "/learning/system-design",
      description: "See how single-node hashing extends to distributed caches and consistent hashing rings.",
    },
    relatedModules: [
      { title: "System Design Module 5: Databases & Indexing Internals", route: "/learning/system-design/databases" },
      { title: "System Design Module 6: Distributed Caching", route: "/learning/system-design/caching" },
    ],
    practiceAction: {
      label: "Start Technical Mock Interview",
      to: "/ai-interview",
      summary: "Practice explaining hashing, B-Trees vs hash indexes, and concurrency trade-offs out loud.",
    },
  },
  {
    slug: "multithreading-and-concurrency",
    category: "java",
    subcategory: "Concurrency",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Java Multithreading: Thread Pools, synchronized vs ReentrantLock & Virtual Threads",
    metaTitle: "Java Multithreading, Locks & ExecutorService | PrepSpaces Concepts",
    description:
      "Master Java concurrency: platform vs virtual threads, synchronized monitor locks vs ReentrantLock, ExecutorService thread pools, and preventing race conditions and deadlocks.",
    keywords: "Java multithreading, synchronized vs ReentrantLock, ExecutorService, Java concurrency, race condition, virtual threads",
    directAnswer:
      "Java achieves concurrent execution via OS-backed platform threads (`ThreadPoolExecutor` / `ExecutorService`) and lightweight JVM-scheduled Virtual Threads (Java 21+). Shared mutable state must be guarded with `synchronized`, `ReentrantLock`, or lock-free `Atomic*` primitives to prevent race conditions and visibility bugs.",
    sections: [
      {
        heading: "1. Why Thread Pools Replace Raw `new Thread()` Creation",
        paragraphs: [
          "Spawning an OS-backed platform thread costs substantial stack memory (typically ~1 MB via `-Xss`) and kernel context-switch overhead. Unbounded `new Thread()` under heavy load quickly exhausts RAM and degrades CPU throughput via thrashing.",
          "`ExecutorService` (`ThreadPoolExecutor`) bounds active worker threads, queues burst work in a `BlockingQueue`, and reuses threads across tasks. Always specify bounded queue sizes and explicit rejection policies rather than relying on unbounded `Executors.newFixedThreadPool()` defaults in high-throughput backends.",
        ],
      },
      {
        heading: "2. `synchronized` Monitor Locks vs `ReentrantLock`",
        paragraphs: [
          "`synchronized` uses an intrinsic monitor lock attached to every Java object, automatically acquiring on block entry and releasing even if an exception is thrown.",
          "`java.util.concurrent.locks.ReentrantLock` adds explicit capabilities essential in systems code: non-blocking `tryLock(timeout)` to avoid indefinite deadlocks, interruptible lock acquisition (`lockInterruptibly()`), optional fairness ordering, and multiple `Condition` queues (`notFull`, `notEmpty`).",
        ],
      },
      {
        heading: "3. Platform Threads vs Java 21 Virtual Threads",
        paragraphs: [
          "Traditional thread-per-request servers stall OS carrier threads while waiting on database or HTTP I/O. Java 21 Project Loom introduced Virtual Threads (`Executors.newVirtualThreadPerTaskExecutor()`), allowing thousands to millions of concurrent blocking I/O tasks to multiplex cleanly across a small pool of OS carrier threads whenever a virtual thread yields on socket I/O.",
        ],
      },
    ],
    codeExample: {
      title: "Deadlock-Safe Transfer Using ReentrantLock tryLock()",
      language: "java",
      code: `import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

public class SafeLockService {
    private final ReentrantLock lockA = new ReentrantLock();
    private final ReentrantLock lockB = new ReentrantLock();

    public boolean executeOrderedWork() throws InterruptedException {
        if (lockA.tryLock(100, TimeUnit.MILLISECONDS)) {
            try {
                if (lockB.tryLock(100, TimeUnit.MILLISECONDS)) {
                    try {
                        return true; // Critical section guarded safely by both locks
                    } finally {
                        lockB.unlock();
                    }
                }
            } finally {
                lockA.unlock();
            }
        }
        return false; // Timed out instead of deadlocking indefinitely
    }
}`,
      explanation:
        "Timed `tryLock()` breaks circular hold-and-wait deadlock risks, while `try / finally` guarantees lock release even on exceptions.",
    },
    commonMistakes: [
      {
        mistake: "Using `synchronized` around slow network/DB calls inside Java 21 Virtual Threads without checking pinning.",
        correction:
          "Historically (prior to Java 24 JEP 491), `synchronized` around blocking I/O pinned virtual threads to carrier threads. Prefer `ReentrantLock` for I/O-heavy concurrent guards.",
      },
      {
        mistake: "Assuming `Executors.newCachedThreadPool()` is safe under traffic spikes.",
        correction:
          "`newCachedThreadPool()` spawns unbounded threads up to `Integer.MAX_VALUE`, risking OOM crashes during downstream latency spikes.",
      },
      {
        mistake: "Acquiring multiple locks in inconsistent order across methods.",
        correction:
          "Always establish a canonical lock ordering (e.g., sort by account ID) or use timed `tryLock()` backoff.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the difference between `Callable` and `Runnable`, and `execute()` vs `submit()`?",
        answer:
          "`Runnable.run()` returns `void` and cannot throw checked exceptions; `Callable<V>.call()` returns a typed result `V` and can throw checked exceptions. `execute()` accepts `Runnable` fire-and-forget, whereas `submit()` returns a `Future<T>` handle.",
      },
      {
        question: "When should you choose `ReentrantLock` over `synchronized`?",
        answer:
          "When you need timeout-bounded lock acquisition (`tryLock`), interruptible waiting, fair queueing, or multiple separate `Condition` objects for producer-consumer signaling.",
      },
      {
        question: "Do Virtual Threads speed up CPU-bound computation?",
        answer:
          "No—CPU-bound work is still bounded by physical CPU cores. Virtual Threads dramatically improve throughput and scalability for I/O-bound workloads that spend time waiting on sockets or databases.",
      },
    ],
    relatedConcepts: [
      "/concepts/java/java-memory-model",
      "/concepts/os/deadlock-and-coffman-conditions",
      "/concepts/os/mutex-vs-semaphore",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Master POSIX threads, context switching, mutexes, and deadlock theory at the OS kernel level.",
    },
    relatedModules: [
      { title: "OS Module 7: Threads & Multithreading", route: "/learning/os/threads" },
      { title: "OS Module 8: Synchronization & Deadlocks", route: "/learning/os/concurrency" },
      { title: "OS Module 21: Advanced Multiprocessor Synchronization", route: "/learning/os/advanced-sync" },
    ],
    practiceAction: {
      label: "Practice Concurrency Mock Interview",
      to: "/ai-interview",
      summary: "Practice answering OS + concurrency trade-off questions with real-time AI scoring.",
    },
  },
  {
    slug: "java-memory-model",
    category: "java",
    subcategory: "Concurrency & Internals",
    difficulty: "Advanced",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Java Memory Model (JMM), `volatile` & Happens-Before Guarantees",
    metaTitle: "Java Memory Model (JMM), volatile & Happens-Before | PrepSpaces Concepts",
    description:
      "Learn how the Java Memory Model governs visibility, instruction reordering, volatile memory barriers, atomic operations, and happens-before guarantees across CPU cores.",
    keywords: "Java Memory Model, JMM, volatile keyword Java, happens-before Java, instruction reordering, double-checked locking",
    directAnswer:
      "The Java Memory Model (JMM) defines when writes made by one thread to shared heap memory are guaranteed visible to another thread, despite CPU L1/L2 caches and compiler/CPU instruction reordering, via formal happens-before rules enforced by `volatile`, `synchronized`, `final`, and `java.util.concurrent.atomic`.",
    sections: [
      {
        heading: "1. Why Visibility & Reordering Bugs Happen",
        paragraphs: [
          "Modern multicore CPUs cache variables in local L1/L2 caches and store buffers, while JIT compilers and out-of-order CPUs reorder independent reads/writes for speed. Without memory synchronization barriers, Thread A setting `running = false` may stay cached in Core 0's store buffer while Thread B loops forever reading stale `true` on Core 1.",
          "The JMM solves this portably across x86, ARM, and RISC-V by defining Happens-Before relationships rather than tying Java semantics to any one CPU's cache-coherency protocol.",
        ],
      },
      {
        heading: "2. What `volatile` Guarantees — And What It Does Not",
        paragraphs: [
          "Declaring a field `volatile` enforces two things: (1) every write flushes out to main visibility before subsequent reads see it (a write-to-a-volatile-field happens-before every subsequent read of that field), and (2) compiler/CPU memory fences forbid reordering reads/writes across the volatile boundary.",
          "Crucially, `volatile` guarantees **visibility** and **ordering**, NOT compound **atomicity**. `volatile int count; count++;` is still a three-step read-modify-write race condition—use `AtomicInteger` (`CAS` / Compare-And-Swap) or `LongAdder` instead.",
        ],
      },
      {
        heading: "3. Core Happens-Before Rules & Safe Publication",
        paragraphs: [
          "Key JMM happens-before rules include: Program Order within one thread, Monitor Unlock -> subsequent Monitor Lock on the same monitor, Volatile Write -> subsequent Volatile Read, Thread `start()` -> actions inside the started thread, and `Thread.join()`.",
          "Safe publication ensures another thread never observes a partially constructed object reference—especially important in classic Double-Checked Locking singletons where `private static volatile Instance instance;` prevents instruction reordering from exposing an uninitialized object.",
        ],
      },
    ],
    codeExample: {
      title: "Thread-Safe Double-Checked Locking & Atomic Counter",
      language: "java",
      code: `import java.util.concurrent.atomic.AtomicLong;

public class MetricsRegistry {
    // volatile forbids reordering object allocation & constructor field initialization
    private static volatile MetricsRegistry instance;
    private final AtomicLong requests = new AtomicLong(0);

    private MetricsRegistry() {}

    public static MetricsRegistry getInstance() {
        MetricsRegistry ref = instance;
        if (ref == null) {
            synchronized (MetricsRegistry.class) {
                ref = instance;
                if (ref == null) {
                    ref = instance = new MetricsRegistry();
                }
            }
        }
        return ref;
    }

    public long recordRequest() {
        return requests.incrementAndGet(); // Atomic CAS, unlike volatile++
    }
}`,
      explanation:
        "Combining `volatile` for safe double-checked singleton publication with `AtomicLong` CAS counters avoids both race conditions and heavy synchronized bottlenecks.",
    },
    commonMistakes: [
      {
        mistake: "Writing `volatile int counter` and incrementing with `counter++` from multiple threads.",
        correction:
          "`counter++` reads, adds 1, and writes back in 3 instructions. Two threads reading `5` concurrently both write `6`. Use `AtomicInteger` or `synchronized`.",
      },
      {
        mistake: "Implementing Double-Checked Locking without `volatile` on the singleton reference.",
        correction:
          "Without `volatile`, the JVM may reorder `new Instance()` pointer assignment before field initialization completes, returning a half-constructed object.",
      },
      {
        mistake: "Assuming a `volatile` array reference (`volatile int[] arr`) makes array elements volatile.",
        correction:
          "Only the array reference itself is volatile—reading or mutating `arr[i]` requires `AtomicIntegerArray` or `VarHandle` acquire/release fences.",
      },
    ],
    interviewQuestions: [
      {
        question: "Explain the difference between `volatile` and `AtomicInteger`.",
        answer:
          "`volatile` guarantees cross-thread visibility and ordering fences for single reads/writes, whereas `AtomicInteger` uses hardware Compare-And-Swap (`CAS`) instructions to make compound updates like `incrementAndGet()` atomic and lock-free.",
      },
      {
        question: "What does `happens-before` mean in the JMM?",
        answer:
          "If action A happens-before action B, the JMM guarantees that all memory effects performed by A are visible to B, and no observable reordering breaks that causal order.",
      },
      {
        question: "How do `final` fields interact with safe object publication?",
        answer:
          "Under JMM initialization safety, `final` fields initialized inside a constructor that does not leak `this` are guaranteed visible to any thread without synchronization once the constructor finishes.",
      },
    ],
    relatedConcepts: [
      "/concepts/java/multithreading-and-concurrency",
      "/concepts/os/mutex-vs-semaphore",
      "/concepts/os/process-vs-thread",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Explore hardware memory ordering, spinlocks, cache coherence, false sharing, and RCU.",
    },
    relatedModules: [
      { title: "OS Module 21: Advanced Synchronization & Multiprocessor", route: "/learning/os/advanced-sync" },
      { title: "OS Module 8: Synchronization & Deadlocks", route: "/learning/os/concurrency" },
    ],
    practiceAction: {
      label: "Practice Multiprocessor Concepts with AI",
      to: "/ai-interview",
      summary: "Challenge yourself on memory visibility, atomics, and lock-free design in PrepSpaces AI Interviews.",
    },
  },

  // ================= OPERATING SYSTEMS (5) =================
  {
    slug: "process-vs-thread",
    category: "os",
    subcategory: "Processes & Concurrency",
    difficulty: "Beginner",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Process vs Thread: Address Space, Context Switching & Linux Internals",
    metaTitle: "Process vs Thread in Operating Systems | PrepSpaces Concepts",
    description:
      "Compare processes and threads in depth: isolated virtual address spaces, shared heap vs private stacks, context-switching TLB overhead, and Linux task_struct internals.",
    keywords: "process vs thread, operating systems, context switch, PCB task_struct, multithreading vs multiprocessing",
    directAnswer:
      "A process is an executing program isolated in its own virtual address space, file descriptor table, and Process Control Block (PCB), whereas threads are lightweight execution units inside a process that share code, heap, and open files while keeping separate registers, program counter, and call stack.",
    sections: [
      {
        heading: "1. Memory Isolation vs Shared Address Space",
        paragraphs: [
          "Operating systems run untrusted or independent programs safely by giving each process an isolated virtual address space backed by distinct page tables. One process crashing or corrupting a pointer cannot overwrite another process's heap—communication requires explicit Inter-Process Communication (IPC) such as pipes, Unix domain sockets, or shared memory segments.",
          "By contrast, threads spawned inside the same process (`pthread_create` or Linux `clone()` with `CLONE_VM`) share the identical page tables, heap, global variables, and file descriptors. Passing data between threads takes nanoseconds via shared pointers, though missing synchronization creates data races.",
        ],
      },
      {
        heading: "2. Context Switching Overhead & TLB Impact",
        paragraphs: [
          "Switching between two threads of the **same** process saves CPU registers and the stack pointer (`RSP`) without swapping the active virtual memory root (`CR3` register on x86-64).",
          "Switching between two **different processes** forces the kernel to switch page tables, which invalidates non-ASID entries in the Translation Lookaside Buffer (TLB) and causes cold CPU cache misses immediately after scheduling.",
        ],
      },
      {
        heading: "3. How Linux Implements Both via `task_struct`",
        paragraphs: [
          "Linux blurs the traditional boundary at the kernel level: both processes and threads are represented as tasks (`struct task_struct`) created via the `clone()` system call. `fork()` creates a task with its own memory descriptor (Copy-on-Write until mutated), whereas POSIX `pthreads` pass flags sharing memory, signal handlers, and file descriptors inside a single thread group (`TGID`).",
        ],
      },
    ],
    codeExample: {
      title: "Spawning a Child Process (`fork`) vs Thread (`pthread_create`) in C",
      language: "c",
      code: `#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int shared_var = 10;

int main(void) {
    pid_t pid = fork();
    if (pid == 0) {
        shared_var = 99; // Child mutates its private Copy-on-Write copy
        printf("Child PID=%d sees shared_var=%d\\n", getpid(), shared_var);
        return 0;
    }
    waitpid(pid, NULL, 0);
    // Parent memory stays untouched at 10 because address spaces are isolated
    printf("Parent PID=%d still sees shared_var=%d\\n", getpid(), shared_var);
    return 0;
}`,
      explanation:
        "Even though `shared_var` looks global in source code, `fork()` isolates parent and child via Copy-on-Write virtual pages so the parent continues printing `10`.",
    },
    commonMistakes: [
      {
        mistake: "Assuming threads run faster for all tasks regardless of isolation requirements.",
        correction:
          "Browser tabs (Chromium/Firefox) and nginx workers deliberately isolate with processes so a single crash or exploit cannot dump keys from sibling tabs.",
      },
      {
        mistake: "Thinking threads share stacks.",
        correction:
          "Every thread MUST maintain its own private stack and CPU register set so function local variables and return addresses never collide.",
      },
      {
        mistake: "Ignoring Copy-on-Write in `fork()`.",
        correction:
          "`fork()` does not eagerly duplicate gigabytes of parent RAM; kernel maps pages read-only and copies only 4KB pages actually written afterward.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why is a thread context switch faster than a process context switch?",
        answer:
          "Sibling threads share the same virtual address space (page tables), so the kernel avoids switching CR3/page directory bases and preserves warm TLB translations and L1/L2 memory locality.",
      },
      {
        question: "What resources do threads inside the same process share vs keep private?",
        answer:
          "Shared: Heap, global/static data, text/code segment, open file descriptors, PID. Private: Thread ID (TID), CPU registers, Program Counter (PC), and call stack.",
      },
      {
        question: "What is a zombie process vs an orphan process?",
        answer:
          "A zombie process has terminated (`exit`) but stays in the process table until its parent collects its exit status via `wait()`/`waitpid()`. An orphan process continues running after its parent dies and gets reparented to PID 1 (`init`/`systemd`).",
      },
    ],
    relatedConcepts: [
      "/concepts/os/virtual-memory-and-paging",
      "/concepts/os/cpu-scheduling-algorithms",
      "/concepts/os/mutex-vs-semaphore",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Full 24-module systems course covering Linux PCB lifecycle, scheduling, virtual memory, and xv6 kernel labs.",
    },
    relatedModules: [
      { title: "OS Module 4: Syscalls & fork/exec Execution", route: "/learning/os/syscalls" },
      { title: "OS Module 5: Processes & Lifecycle", route: "/learning/os/processes" },
      { title: "OS Module 7: Threads & Multithreading", route: "/learning/os/threads" },
    ],
    practiceAction: {
      label: "Run OS Processes Mock Interview",
      to: "/interview",
      summary: "Select Operating Systems -> Module 5/7 on PrepSpaces to answer spoken questions on processes and threads.",
    },
  },
  {
    slug: "virtual-memory-and-paging",
    category: "os",
    subcategory: "Memory Management",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Virtual Memory, Page Tables & TLB Address Translation Explained",
    metaTitle: "Virtual Memory, Page Tables & TLB Explained | PrepSpaces Concepts",
    description:
      "Learn how operating systems and the hardware MMU translate virtual addresses to physical frames using multi-level page tables, TLB caching, demand paging, and page faults.",
    keywords: "virtual memory, page tables, TLB translation lookaside buffer, MMU, page fault, demand paging, Effective Access Time",
    directAnswer:
      "Virtual memory gives every process a contiguous, private logical address space decoupled from physical RAM fragmentation. During execution, the CPU's Memory Management Unit (MMU) translates Virtual Page Numbers into Physical Frame Numbers via hierarchical page tables accelerated by an on-chip hardware cache called the TLB.",
    sections: [
      {
        heading: "1. Why OSes Use Virtual Memory & Fixed-Size Pages",
        paragraphs: [
          "Without virtual memory, concurrent applications would overwrite one another's physical RAM addresses and fail when contiguous physical gaps shrank due to external fragmentation.",
          "Virtual memory solves both: it divides virtual address spaces into fixed chunks called **pages** (commonly 4 KB, or 2 MB / 1 GB huge pages) mapped onto arbitrary **physical frames** in RAM. Unused regions need zero physical frames upfront thanks to **Demand Paging**.",
        ],
      },
      {
        heading: "2. Multi-Level Page Tables & Hardware Page Walks",
        paragraphs: [
          "A flat page table for a 48-bit 64-bit virtual address space with 4 KB pages would require millions of entries per process—wasting gigabytes even for tiny `Hello World` programs. x86-64 solves this using 4-level hierarchical radix page tables (`PML4 -> PDPT -> PD -> PT`), allocating branches only for mapped virtual ranges.",
          "Each Page Table Entry (PTE) carries the physical frame number alongside hardware protection bits: **Present (P)**, **Read/Write (R/W)**, **User/Supervisor (U/S)**, **Accessed (A)**, **Dirty (D)**, and **No-Execute (NX/XD)** to block stack buffer-overflow code execution.",
        ],
      },
      {
        heading: "3. TLB Acceleration & Page Fault Lifecycle",
        paragraphs: [
          "Walking 4 page-table levels in DRAM on every instruction fetch or load would multiply memory latency by 5x. CPUs embed a tiny, ultra-fast associative cache inside the MMU called the **Translation Lookaside Buffer (TLB)**. With a 99% TLB hit rate, Effective Access Time (`EAT`) stays nearly equal to single-cycle RAM lookup.",
          "If the MMU finds a PTE with `Present = 0`, the CPU raises a hardware Page Fault trap (`#PF`) to the OS kernel. On a **minor fault** (page already in page cache or Copy-on-Write duplicate), the OS updates the PTE in microseconds; on a **major fault**, the OS pauses the process while loading the missing 4 KB page from disk/swap.",
        ],
      },
    ],
    codeExample: {
      title: "Calculating Effective Access Time (EAT) & Observing Page Faults",
      language: "bash",
      code: `# Formula: EAT = alpha * (TLB_time + Mem_time) + (1 - alpha) * (TLB_time + (levels + 1) * Mem_time)
# Example (98% TLB hit, 1ns TLB, 100ns DRAM, 4-level page table):
#   TLB Hit  : 1ns + 100ns = 101ns
#   TLB Miss : 1ns + 400ns (walk) + 100ns (data) = 501ns
#   EAT = 0.98 * 101 + 0.02 * 501 = 109ns

# Inspect live minor and major page faults for any Linux process:
ps -eo pid,comm,min_flt,maj_flt --sort=-maj_flt | head -n 10`,
      explanation:
        "Even small drops in TLB hit rate escalate average memory latency quickly because a 4-level page walk needs four extra DRAM accesses—which is why database/JVM workloads benefit from Huge Pages (`2 MB`).",
    },
    commonMistakes: [
      {
        mistake: "Assuming every page fault reads slowly from disk.",
        correction:
          "Most faults during startup and `malloc()` are minor (soft) page faults resolved purely in RAM by allocating a zeroed frame or linking shared library pages already in OS page cache.",
      },
      {
        mistake: "Confusing thrashing with high CPU utilization.",
        correction:
          "During thrashing, processes constantly page-fault and wait on swap I/O—causing CPU utilization to *plummet* while disk queue depth spikes.",
      },
      {
        mistake: "Confusing internal vs external fragmentation in paging.",
        correction:
          "Paging eliminates *external* physical fragmentation (any free frame fits any page), leaving only tiny *internal* fragmentation inside the final partially filled 4 KB page.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why do 64-bit operating systems use multi-level page tables instead of a single flat array?",
        answer:
          "A flat page table covering sparse 48-bit address spaces would consume hundreds of megabytes per process even if the process uses 1 MB of RAM. Multi-level trees allocate inner tables lazily only for mapped memory regions.",
      },
      {
        question: "What is the difference between a minor page fault and a major page fault?",
        answer:
          "A minor fault requires no disk I/O (e.g., allocating a demand-zeroed heap page or mapping a shared library already cached in RAM). A major fault blocks the thread to read page contents from SSD/disk swap.",
      },
      {
        question: "How do Huge Pages improve database or ML performance?",
        answer:
          "Increasing page size from 4 KB to 2 MB shrinks TLB miss frequency dramatically by letting the same fixed number of TLB slots cover 512x more virtual memory.",
      },
    ],
    relatedConcepts: [
      "/concepts/os/process-vs-thread",
      "/concepts/java/jvm",
      "/concepts/java/garbage-collection",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Interactive MMU simulators, LRU/Clock page replacement labs, and TLB calculations.",
    },
    relatedModules: [
      { title: "OS Module 10: Virtual Memory & Paging", route: "/learning/os/virtual-memory" },
      { title: "OS Module 11: Demand Paging & Page Replacement", route: "/learning/os/demand-paging" },
      { title: "OS Module 12: Virtualization & Two-Stage Paging", route: "/learning/os/virtualization" },
    ],
    practiceAction: {
      label: "Practice Virtual Memory Questions",
      to: "/interview",
      summary: "Launch Operating Systems Module 10 mock interviews to practice MMU & TLB explanations live.",
    },
  },
  {
    slug: "deadlock-and-coffman-conditions",
    category: "os",
    subcategory: "Synchronization",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Deadlock in Operating Systems: The 4 Coffman Conditions & Prevention",
    metaTitle: "Deadlock & 4 Coffman Conditions Explained | PrepSpaces Concepts",
    description:
      "Master deadlock in OS and databases: all 4 Coffman conditions, resource allocation graphs, lock ordering prevention, Banker's avoidance algorithm, and recovery strategies.",
    keywords: "deadlock operating systems, 4 Coffman conditions, deadlock prevention vs avoidance, Banker's algorithm, lock ordering",
    directAnswer:
      "Deadlock is a permanent stall where two or more threads or transactions block indefinitely waiting for locks held by each other. It occurs if and only if four Coffman conditions hold simultaneously: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait—breaking any one prevents deadlock.",
    sections: [
      {
        heading: "1. The 4 Necessary Coffman Conditions",
        paragraphs: [
          "Edward Coffman formalized four conditions required together for a deadlock cycle. If even one condition is falsified by architecture or policy, deadlock becomes mathematically impossible.",
        ],
        bullets: [
          "Mutual Exclusion: At least one resource is held non-shareably (e.g., an exclusive write mutex).",
          "Hold and Wait: A thread holds at least one resource while blocking to acquire additional resources.",
          "No Preemption: Resources cannot be forcibly revoked by the scheduler until the holder releases them voluntarily.",
          "Circular Wait: A closed cycle `T1 -> T2 -> ... -> T1` exists where each task waits on a resource locked by the next.",
        ],
      },
      {
        heading: "2. Practical Prevention: Breaking Circular Wait via Global Lock Ordering",
        paragraphs: [
          "Preventing Mutual Exclusion is often impossible for mutable state, and atomic all-at-once acquisition hurts concurrency. In production databases and OS kernels, engineers almost universally break **Circular Wait**.",
          "Assign a strict total numeric order to lock objects (`lock.id` or memory pointer address). If Thread 1 and Thread 2 transfer between Account 100 and Account 200, forcing BOTH threads to lock `min(100, 200)` before `max(100, 200)` makes circular cycles strictly impossible.",
        ],
      },
      {
        heading: "3. Deadlock Avoidance, Detection & Database Timeout Recovery",
        paragraphs: [
          "Deadlock Avoidance (such as Dijkstra's Banker's Algorithm) inspects future resource declarations upfront to ensure allocations stay in a Safe State, though knowing max future demands is rarely practical in dynamic web backends.",
          "Distributed databases instead accept rare deadlocks and run **Detection & Recovery**: building periodic wait-for graphs, finding cycles, and aborting/rolling back one victim transaction (`deadlock_timeout` in PostgreSQL).",
        ],
      },
    ],
    codeExample: {
      title: "Eliminating Deadlock via Canonical Lock Ordering in Python/Pseudocode",
      language: "python",
      code: `import threading

class Account:
    def __init__(self, account_id: int, balance: int):
        self.id = account_id
        self.balance = balance
        self.lock = threading.Lock()

def transfer(src: Account, dst: Account, amount: int):
    # Break Circular Wait: always acquire lower account ID lock first
    first, second = (src, dst) if src.id < dst.id else (dst, src)
    with first.lock:
        with second.lock:
            if src.balance >= amount:
                src.balance -= amount
                dst.balance += amount`,
      explanation:
        "Whether Thread A calls `transfer(acc1, acc2, 50)` concurrently with Thread B calling `transfer(acc2, acc1, 25)`, both acquire `acc1.lock` before `acc2.lock`—preventing cycles.",
    },
    commonMistakes: [
      {
        mistake: "Assuming deadlock and livelock mean the same thing.",
        correction:
          "Deadlocked threads sleep consuming 0% CPU while blocked; livelocked threads actively retry/back off endlessly without making forward progress (like two polite people stepping sideways in the same direction).",
      },
      {
        mistake: "Checking only lock counts instead of acquisition order.",
        correction:
          "Locking A->B and B->A involves only 2 locks total, yet still deadlocks instantly under interleaving.",
      },
      {
        mistake: "Forgetting non-reentrant self-deadlock.",
        correction:
          "Calling a helper that re-acquires a non-reentrant `threading.Lock()` already held by the same thread deadlocks with a single thread!",
      },
    ],
    interviewQuestions: [
      {
        question: "Which Coffman condition is easiest to break in real backend systems, and how?",
        answer:
          "Circular Wait—by enforcing deterministic global lock acquisition ordering (e.g., locking rows/accounts in ascending primary-key order) or using timed lock retries (`tryLock`).",
      },
      {
        question: "How does a Relational Database (like PostgreSQL) handle row-lock deadlocks?",
        answer:
          "Instead of preventing locks statically, PostgreSQL maintains a wait-for lock graph, triggers deadlock detection after `deadlock_timeout` (default 1s), aborts one victim transaction to roll back cleanly, and lets the other proceed.",
      },
      {
        question: "What is starvation vs deadlock?",
        answer:
          "Starvation occurs when a runnable thread is perpetually denied CPU or locks due to unfair scheduling or high-priority traffic, whereas deadlock means zero threads in the cycle can ever execute.",
      },
    ],
    relatedConcepts: [
      "/concepts/os/mutex-vs-semaphore",
      "/concepts/java/multithreading-and-concurrency",
      "/concepts/os/process-vs-thread",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Explore Coffman conditions, monitor invariants, mutexes, and deadlock diagnostics.",
    },
    relatedModules: [
      { title: "OS Module 8: Synchronization & Deadlocks", route: "/learning/os/concurrency" },
      { title: "Data Engineering Module 3: ACID Transactions & Locks", route: "/learning/data-engineering/sql" },
    ],
    practiceAction: {
      label: "Practice Deadlock Questions with AI",
      to: "/ai-interview",
      summary: "Practice explaining Coffman conditions and database lock ordering clearly in PrepSpaces AI Mock Interviews.",
    },
  },
  {
    slug: "cpu-scheduling-algorithms",
    category: "os",
    subcategory: "CPU Scheduling",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "CPU Scheduling Algorithms: FCFS, SJF, Round Robin, MLFQ & Linux EEVDF",
    metaTitle: "CPU Scheduling Algorithms (FCFS, SJF, RR, MLFQ, EEVDF) | PrepSpaces Concepts",
    description:
      "Compare CPU scheduling policies including FCFS, Shortest Job First (SJF/SRTF), Round Robin, Multilevel Feedback Queues (MLFQ), and modern Linux EEVDF scheduling.",
    keywords: "CPU scheduling algorithms, FCFS, SJF, Round Robin, MLFQ, Linux EEVDF CFS, turnaround time vs response time",
    directAnswer:
      "CPU schedulers choose which runnable thread runs next on each CPU core, balancing conflicting goals: high throughput and short turnaround time (batch work) against low response latency (interactive UI/requests). Modern kernels evolve from FCFS/SJF/Round Robin principles into Multilevel Feedback Queues (MLFQ) and Linux EEVDF.",
    sections: [
      {
        heading: "1. Core Scheduling Metrics & Inherent Trade-Offs",
        paragraphs: [
          "No single policy maximizes every goal at once. Schedulers continuously trade off throughput (completions/sec), CPU utilization, waiting time, turnaround time (`completion - arrival`), response time (`first run - arrival`), and fairness.",
        ],
        bullets: [
          "FCFS (First-Come, First-Served): Non-preemptive FIFO queue—simple with zero starvation, but suffers the Convoy Effect when short interactive tasks stall behind one long CPU hog.",
          "SJF / SRTF (Shortest Job / Remaining Time First): Provably minimizes average waiting time, but cannot know future CPU burst durations reliably and can starve long CPU-bound jobs.",
          "Round Robin (RR): Allocates fixed time quanta (`q`, typically 4–20 ms) before preemption—great response latency, though overly tiny `q` balloons context-switch overhead.",
        ],
      },
      {
        heading: "2. Multilevel Feedback Queue (MLFQ): Learning Without Oracles",
        paragraphs: [
          "Real OS kernels do not know in advance whether a new task is a 2 ms terminal keystroke or a 10-minute video transcode. MLFQ uses multiple priority queues and observes behavior dynamically:",
          "New jobs start at highest priority. Interactive I/O jobs yield before exhausting their time slice and stay high-priority for snappy response, whereas CPU-heavy jobs use full slices and gradually demote to lower-priority, longer-slice queues—preventing starvation via periodic priority boosts.",
        ],
      },
      {
        heading: "3. Modern Linux Scheduler: CFS to EEVDF",
        paragraphs: [
          "Linux previously used the Completely Fair Scheduler (CFS), tracking `vruntime` in a Red-Black tree so threads with least weighted CPU history ran next. Since Linux 6.6+, CFS has been replaced by **EEVDF (Earliest Eligible Virtual Deadline First)**, which improves tail latency for short interactive workloads while maintaining proportional `nice`-weight fairness.",
        ],
      },
    ],
    codeExample: {
      title: "Inspecting Real-Time Process Scheduling Policy & Priority in Linux",
      language: "bash",
      code: `# View scheduling class (TS=Time-Sharing/EEVDF, FF=FIFO, RR=Round-Robin) and nice values
ps -eo pid,cls,ni,pri,psr,comm --sort=-pri | head -n 12

# Run a CPU-heavy batch build at lower scheduling priority (nice +15)
nice -n 15 make -j4`,
      explanation:
        "`cls` shows the kernel scheduling policy (`TS` normal fair share vs real-time `FF`/`RR`), and `ni` adjusts weighted CPU share cleanly.",
    },
    commonMistakes: [
      {
        mistake: "Setting Round Robin time quantum extremely small (e.g., 50 microseconds) for lower latency.",
        correction:
          "If quantum approaches context-switch latency, CPU spends most cycles saving registers and missing caches instead of executing user code.",
      },
      {
        mistake: "Assuming SJF is directly used in general desktop/cloud OS kernels.",
        correction:
          "Exact future CPU burst durations are unknown upfront; OSes approximate SJF behavior empirically with MLFQ or virtual-deadline estimators like EEVDF.",
      },
      {
        mistake: "Ignoring CPU affinity and NUMA locality.",
        correction:
          "Migrating a hot thread across physical sockets invalidates L1/L2 caches and crosses slower NUMA memory interconnects.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the Convoy Effect in FCFS scheduling?",
        answer:
          "When one CPU-intensive process runs non-preemptively for seconds while dozens of fast I/O-bound processes queue behind it, leaving I/O devices idle and hurting responsiveness.",
      },
      {
        question: "How does MLFQ keep interactive processes responsive while avoiding starvation?",
        answer:
          "I/O-bound jobs naturally block before their quantum ends so they remain in top queues, while a periodic global priority boost moves long-waiting batch jobs back up so they never starve.",
      },
      {
        question: "Turnaround Time vs Response Time—which matters more for web APIs?",
        answer:
          "Response time (time until request processing starts) directly impacts user-perceived p99 latency, whereas batch analytics pipelines care most about total Turnaround Time and throughput.",
      },
    ],
    relatedConcepts: [
      "/concepts/os/process-vs-thread",
      "/concepts/os/mutex-vs-semaphore",
      "/concepts/java/multithreading-and-concurrency",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Interactive Gantt simulators and deep dives into FCFS, SRTF, MLFQ, and Linux EEVDF.",
    },
    relatedModules: [
      { title: "OS Module 6: CPU Scheduling", route: "/learning/os/scheduling" },
      { title: "OS Module 18: Linux Internals & Performance Diagnostics", route: "/learning/os/diagnostics" },
    ],
    practiceAction: {
      label: "Test Scheduling Concepts via AI Interview",
      to: "/interview",
      summary: "Practice explaining FCFS, SJF, MLFQ, and EEVDF trade-offs in PrepSpaces Operating Systems interviews.",
    },
  },
  {
    slug: "mutex-vs-semaphore",
    category: "os",
    subcategory: "Synchronization",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Mutex vs Semaphore: Ownership, Signaling & Priority Inversion",
    metaTitle: "Mutex vs Semaphore in Operating Systems | PrepSpaces Concepts",
    description:
      "Understand the core differences between a Mutex and a Semaphore: ownership semantics, binary lock vs counting permit pool, producer-consumer signaling, and priority inversion.",
    keywords: "mutex vs semaphore, binary semaphore, counting semaphore, priority inversion, producer consumer synchronization",
    directAnswer:
      "A Mutex (Mutual Exclusion) is a strict ownership lock guarding a critical section—only the thread that locked it may unlock it. A Semaphore is a non-owned signaling counter (`wait/P` and `post/V`) controlling access across N concurrent permits or notifying another thread that an event occurred.",
    sections: [
      {
        heading: "1. Ownership Semantics: The Core Architectural Distinction",
        paragraphs: [
          "Confusion often arises because a Binary Semaphore (initial value `1`) looks superficially like a Mutex. The defining difference is **ownership**: a mutex belongs strictly to the acquiring thread until that exact thread unlocks it.",
          "Because a mutex tracks its owner thread, OS kernels can enforce error checks, support recursive locking, and apply **Priority Inheritance** when a high-priority thread waits on a lock held by a low-priority thread. A semaphore has no owner—Thread A can wait on `sem_wait()` while Thread B or an interrupt handler calls `sem_post()` to wake it up.",
        ],
      },
      {
        heading: "2. Counting Semaphores for Resource Pools & Bounded Buffers",
        paragraphs: [
          "Semaphores shine whenever you need to gate **K identical resources** simultaneously rather than just 1 critical section—such as limiting database connection pools (`initial = 16`), bounding concurrent I/O requests, or solving the classic Producer-Consumer problem with two counters (`empty_slots = N`, `filled_slots = 0`) paired with a mutex protecting queue pointers.",
        ],
      },
      {
        heading: "3. Priority Inversion & Mars Pathfinder Lesson",
        paragraphs: [
          "Priority Inversion happens when a low-priority task holds a mutex needed by a high-priority task, and medium-priority tasks repeatedly preempt the low-priority holder—starving the high-priority task indefinitely.",
          "Real-time OS kernels solve this on mutexes (not semaphores!) via **Priority Inheritance Protocol**, temporarily boosting the mutex owner's priority up to the highest waiting thread until unlock.",
        ],
      },
    ],
    codeExample: {
      title: "Bounded Connection Pool Gate Using a Semaphore + Mutex in Python",
      language: "python",
      code: `import threading

class ResourcePool:
    def __init__(self, items):
        self.items = list(items)
        self.permits = threading.Semaphore(len(items)) # Allows up to N concurrent users
        self.list_lock = threading.Lock()            # Guards shared list mutation

    def acquire(self):
        self.permits.acquire()
        with self.list_lock:
            return self.items.pop()

    def release(self, item):
        with self.list_lock:
            self.items.append(item)
        self.permits.release() # Can even be released after returning item cleanly`,
      explanation:
        "Notice how `Semaphore` bounds concurrency (`N` connections) while `Lock` (mutex) guards mutual exclusion on the `items` list itself.",
    },
    commonMistakes: [
      {
        mistake: "Using a Mutex to signal across two different threads (lock in Thread A, unlock in Thread B).",
        correction:
          "Unlocking a mutex owned by another thread invokes undefined behavior in POSIX `pthread_mutex_unlock`. Use a Semaphore or Condition Variable (`pthread_cond_signal`) for cross-thread signaling.",
      },
      {
        mistake: "Expecting a Semaphore alone to fix shared buffer corruption with count > 1.",
        correction:
          "A counting semaphore allows multiple threads inside simultaneously; you still need a Mutex around shared data-structure mutations.",
      },
      {
        mistake: "Forgetting Priority Inheritance only works on owned Mutexes.",
        correction:
          "Because a semaphore has no single owner thread to boost, kernels cannot apply priority inheritance to semaphores.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why can't a binary semaphore completely replace a mutex in production systems?",
        answer:
          "Binary semaphores lack thread ownership, meaning any arbitrary thread can erroneously call `post()` (`V`), violating mutual exclusion and preventing kernel priority-inversion mitigation.",
      },
      {
        question: "How does a Condition Variable pair with a Mutex?",
        answer:
          "A mutex protects shared predicate state, while a condition variable (`cond_wait`) atomically releases the mutex and puts the waiting thread to sleep until another thread updates state and signals it.",
      },
      {
        question: "What is a spinlock vs a blocking mutex?",
        answer:
          "A spinlock busy-loops checking an atomic flag (saving context switches when locks are held for nanoseconds inside kernels with multiple cores), while a blocking mutex puts the thread to sleep on a kernel wait queue.",
      },
    ],
    relatedConcepts: [
      "/concepts/os/deadlock-and-coffman-conditions",
      "/concepts/os/process-vs-thread",
      "/concepts/java/multithreading-and-concurrency",
    ],
    relatedCourse: {
      title: "Operating Systems Masterclass",
      route: "/learning/os",
      description: "Deep dive into POSIX mutexes, semaphores, C11 memory ordering, and spinlocks.",
    },
    relatedModules: [
      { title: "OS Module 8: Synchronization & Deadlocks", route: "/learning/os/concurrency" },
      { title: "OS Module 21: Advanced Synchronization & Spinlocks", route: "/learning/os/advanced-sync" },
    ],
    practiceAction: {
      label: "Practice OS Concurrency Mock Interview",
      to: "/ai-interview",
      summary: "Practice distinguishing mutexes, semaphores, condition variables, and spinlocks with AI scoring.",
    },
  },
];
