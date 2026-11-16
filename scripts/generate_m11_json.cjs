const fs = require('fs');
const path = require('path');

const moduleData = {
  id: "hashing",
  title: "11. Hashing & Hash-Based Data Structures",
  track: "java",
  courseId: "java-programming",
  description: "Master foundational and advanced hash-based data structures: hash functions, uniform distribution, separate chaining, open addressing (linear probing, quadratic probing, double hashing), load factor, rehashing, Java HashMap internals (bit spreading, power-of-two mask, treeification into red-black trees), HashSet, LinkedHashMap (LRU Cache), TreeMap, custom equals() and hashCode() contracts, and high-frequency algorithmic patterns (Two Sum, Frequency Maps, Group Anagrams, Longest Consecutive Sequence).",
  totalQuestions: 20,
  questions: [
    {
      id: "m11-q1",
      question: "What is the average time complexity of searching in a well-distributed HashMap?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correctIndex: 2,
      explanation: "In a well-distributed hash table with low collision rates and a controlled load factor, searching takes expected O(1) average time."
    },
    {
      id: "m11-q2",
      question: "Which collision-resolution technique uses consecutive positions in the array?",
      options: ["Double hashing", "Linear probing", "Quadratic probing", "Separate chaining"],
      correctIndex: 1,
      explanation: "Linear probing resolves collisions by sequentially inspecting the next consecutive positions (index + 1, index + 2, ...) modulo table capacity."
    },
    {
      id: "m11-q3",
      question: "What is the default load factor of Java's java.util.HashMap?",
      options: ["0.25", "0.50", "0.75", "1.00"],
      correctIndex: 2,
      explanation: "Java's HashMap defaults to a load factor of 0.75, striking an empirical balance between time performance and memory space utilization."
    },
    {
      id: "m11-q4",
      question: "Which data structure is internally used by Java's java.util.HashSet?",
      options: ["TreeMap", "LinkedList", "HashMap", "ArrayDeque"],
      correctIndex: 2,
      explanation: "HashSet is backed by a private HashMap where elements are stored as keys and mapped to a shared dummy `PRESENT` Object."
    },
    {
      id: "m11-q5",
      question: "Which Java collection maintains its entries in sorted key order?",
      options: ["HashMap", "LinkedHashMap", "TreeMap", "HashSet"],
      correctIndex: 2,
      explanation: "TreeMap is backed by a Red-Black Tree and maintains its keys in natural sorted order (or by a custom Comparator)."
    },
    {
      id: "m11-q6",
      question: "According to the Java equals() and hashCode() contract, if a.equals(b) is true, what must be true?",
      options: ["a == b", "Their hash codes must be equal", "Their hash codes must differ", "They must have different references"],
      correctIndex: 1,
      explanation: "The contract mandates that if two objects are equal according to equals(), they MUST produce the exact same hashCode() integer."
    },
    {
      id: "m11-q7",
      question: "Which technique generally reduces primary clustering most effectively among the open addressing probing methods?",
      options: ["Linear probing", "Double hashing", "Separate chaining", "None"],
      correctIndex: 1,
      explanation: "Double hashing computes probe step sizes using a secondary hash function dependent on the key, eliminating primary clustering and secondary clustering."
    },
    {
      id: "m11-q8",
      question: "Which data structure is particularly useful for solving the Longest Consecutive Sequence problem in O(n) time?",
      options: ["Stack", "Queue", "HashSet", "TreeMap"],
      correctIndex: 2,
      explanation: "A HashSet provides O(1) membership lookups, allowing sequence starts (num - 1 not in set) to be identified and counted in linear total time."
    },
    {
      id: "m11-q9",
      question: "Why does Java's HashMap enforce its capacity to always be a power of two?",
      options: [
        "To allow bitwise AND `(n - 1) & hash` instead of slow modulo division",
        "To prevent collisions entirely",
        "To enable binary search on bucket indexes",
        "To comply with JVM 64-bit word alignment"
      ],
      correctIndex: 0,
      explanation: "When capacity `n` is a power of two, `(n - 1) & hash` yields identical results to `hash % n` while executing in a single CPU cycle."
    },
    {
      id: "m11-q10",
      question: "What bitwise operation does Java HashMap use for hash spreading before computing bucket index?",
      options: [
        "h ^ (h >>> 16)",
        "h << 4",
        "~h & 0xFF",
        "h | (h << 16)"
      ],
      correctIndex: 0,
      explanation: "Java HashMap executes `h ^ (h >>> 16)` to mix the higher 16 bits into the lower 16 bits, preventing collisions when table capacity is small."
    },
    {
      id: "m11-q11",
      question: "At what bucket list length does Java HashMap consider treeifying a linked list bucket into a Red-Black Tree?",
      options: ["4", "6", "8", "16"],
      correctIndex: 2,
      explanation: "The TREEIFY_THRESHOLD is 8. When a chain reaches 8 nodes and the table capacity is at least 64, it converts into a Red-Black Tree."
    },
    {
      id: "m11-q12",
      question: "What is the minimum overall table capacity required before a bucket chain of length 8 is treeified in Java HashMap?",
      options: ["16", "32", "64", "128"],
      correctIndex: 2,
      explanation: "MIN_TREEIFY_CAPACITY is 64. If a bucket reaches 8 elements but total capacity is under 64, HashMap resizes the table instead of treeifying."
    },
    {
      id: "m11-q13",
      question: "What is the untreeification threshold in Java HashMap when nodes are removed or the table is resized?",
      options: ["2", "4", "6", "7"],
      correctIndex: 2,
      explanation: "UNTREEIFY_THRESHOLD is 6. If tree bin nodes fall to 6 or fewer during shrinkage or resizing, the tree bin converts back to a regular linked list."
    },
    {
      id: "m11-q14",
      question: "How can Java's LinkedHashMap be configured to function as a Least Recently Used (LRU) Cache?",
      options: [
        "By setting `accessOrder = true` and overriding `removeEldestEntry()`",
        "By passing a custom Comparator to the constructor",
        "By converting the map into a PriorityQueue",
        "By calling `Collections.synchronizedMap()`"
      ],
      correctIndex: 0,
      explanation: "Constructing LinkedHashMap with `accessOrder = true` moves accessed items to the tail, and overriding `removeEldestEntry(Map.Entry)` evicts the head once capacity is exceeded."
    },
    {
      id: "m11-q15",
      question: "What occurs if you override equals() on a custom class but do NOT override hashCode()?",
      options: [
        "Compilation error",
        "Two logically equal objects may have different hash codes and end up in different buckets in a HashMap",
        "HashMap throws ConcurrentModificationException at runtime",
        "The JVM automatically synthesizes an appropriate hashCode from object fields"
      ],
      correctIndex: 1,
      explanation: "Without overriding hashCode(), Java uses identity hash codes. Two logically equal instances will hash to different buckets, making `map.get()` fail to find stored keys."
    },
    {
      id: "m11-q16",
      question: "Why should you never mutate fields involved in equals() and hashCode() after inserting an object into a HashSet or HashMap?",
      options: [
        "It causes an immediate NullPointerException",
        "The object's hash code changes, making it unfindable in its original bucket (memory leak / phantom key)",
        "The JVM garbage collector immediately deallocates the object",
        "The bucket automatically untreeifies"
      ],
      correctIndex: 1,
      explanation: "Mutating key fields changes the object's hashCode. Subsequent queries compute a different bucket index or fail equality comparisons, leaving the entry permanently lost in the table."
    },
    {
      id: "m11-q17",
      question: "What is the optimal time complexity to solve the Two Sum problem using a HashMap?",
      options: ["O(n^2)", "O(n log n)", "O(n) average", "O(1)"],
      correctIndex: 2,
      explanation: "By computing `complement = target - current` and checking whether the complement exists in the map in O(1) time per element, the overall traversal takes O(n) average time."
    },
    {
      id: "m11-q18",
      question: "In Quadratic Probing, what is 'secondary clustering'?",
      options: [
        "Keys that hash to the same initial index follow the exact same probing sequence",
        "Adjacent occupied slots merge into large contiguous clusters",
        "Buckets become too full to support resizing",
        "The hash table runs out of prime capacities"
      ],
      correctIndex: 0,
      explanation: "Secondary clustering occurs when keys that share the same initial hash index `h(k)` generate the identical probe offset sequence `(h(k) + i^2) % m`."
    },
    {
      id: "m11-q19",
      question: "What is primary clustering in Linear Probing?",
      options: [
        "Long runs of occupied slots that cause progressively longer probe sequences for new collisions",
        "Collisions between keys sharing the same initial letter",
        "Treeification of long linked lists into trees",
        "Double resizing when load factor exceeds 1.0"
      ],
      correctIndex: 0,
      explanation: "Primary clustering occurs when occupied slots group into continuous blocks; any hash landing in or near the block increases its length and degrades probe efficiency."
    },
    {
      id: "m11-q20",
      question: "What is the worst-case search complexity in a pre-Java-8 HashMap if all n keys collide into a single bucket?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 2,
      explanation: "Without treeification, all colliding keys form a single linear linked list, degenerating search, insert, and delete operations into O(n) linear scans."
    }
  ]
};

const paths = [
  path.resolve(__dirname, '../backend/content/java-programming/modules/hashing.json'),
  path.resolve(__dirname, '../backend/content/java/modules/hashing.json')
];

for (const p of paths) {
  fs.writeFileSync(p, JSON.stringify(moduleData, null, 2), 'utf8');
  console.log(`Wrote ${p} successfully!`);
}
