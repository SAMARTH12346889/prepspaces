import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Hash,
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
  Pause,
  RotateCcw,
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
  Crown,
  Grid3X3,
  Eye,
  LineChart,
  Link as LinkIcon,
  ChevronsRight,
  GitMerge,
  GitCommit,
  CircleDot,
  FastForward,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Rows,
  Layers,
  Clock,
  Shuffle,
  Shield
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaHashingSections from "./JavaHashingSections";

export default function JavaHashing() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java");

  // View mode: 'interactive' | 'reader'
  const [viewMode, setViewMode] = useState("interactive");
  const [activeTab, setActiveTab] = useState("hashTableStudio");

  // Reader settings
  const [activeSection, setActiveSection] = useState(0);
  const [readerMode, setReaderMode] = useState("continuous");
  const [searchFilter, setSearchFilter] = useState("");

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Labs completed tracker
  const [completedLabs, setCompletedLabs] = useState({});

  // Copied code feedback
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Scroll to section in continuous reader mode
  const scrollToSection = (idx) => {
    setActiveSection(idx);
    const element = document.getElementById(`section-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // =========================================================================
  // WORKBENCH 1: HASH TABLE STUDIO (Chaining vs Open Addressing Probing)
  // =========================================================================
  const [htCapacity, setHtCapacity] = useState(10);
  const [htStrategy, setHtStrategy] = useState("chaining"); // 'chaining' | 'linear' | 'quadratic' | 'double'
  const [htInputKey, setHtInputKey] = useState("25");
  const [htInputValue, setHtInputValue] = useState("Priya");
  const [htSearchKey, setHtSearchKey] = useState("");
  const [htSearchFeedback, setHtSearchFeedback] = useState(null);

  // Initial demo data
  const [htBuckets, setHtBuckets] = useState(() => {
    // default capacity 10 with separate chaining entries
    const initial = Array.from({ length: 10 }, () => []);
    initial[2] = [{ key: 12, value: "Rahul" }, { key: 22, value: "Vikram" }];
    initial[5] = [{ key: 25, value: "Priya" }, { key: 35, value: "Aman" }];
    initial[7] = [{ key: 37, value: "Neha" }];
    return initial;
  });

  // Open addressing array: Array of { key, value, status: 'empty'|'occupied'|'tombstone' }
  const [oaTable, setOaTable] = useState(() => {
    const table = Array.from({ length: 11 }, () => ({ key: null, value: null, status: "empty" }));
    table[2] = { key: 12, value: "Rahul", status: "occupied" };
    table[3] = { key: 22, value: "Vikram", status: "occupied" }; // collided at 2, probed to 3
    table[5] = { key: 25, value: "Priya", status: "occupied" };
    table[7] = { key: 37, value: "Neha", status: "occupied" };
    return table;
  });

  const [oaProbeTrace, setOaProbeTrace] = useState([]);

  // Compute metrics
  const chainingCount = useMemo(() => {
    return htBuckets.reduce((acc, bucket) => acc + bucket.length, 0);
  }, [htBuckets]);

  const chainingLoadFactor = (chainingCount / htCapacity).toFixed(2);

  const oaOccupiedCount = useMemo(() => {
    return oaTable.filter(slot => slot.status === "occupied").length;
  }, [oaTable]);

  const oaLoadFactor = (oaOccupiedCount / oaTable.length).toFixed(2);

  const handleChainingInsert = () => {
    const k = parseInt(htInputKey, 10);
    if (isNaN(k)) return;
    const bucketIdx = Math.abs(k) % htCapacity;
    setHtBuckets(prev => {
      const copy = prev.map(b => [...b]);
      const existing = copy[bucketIdx].find(item => item.key === k);
      if (existing) {
        existing.value = htInputValue;
      } else {
        copy[bucketIdx].push({ key: k, value: htInputValue });
      }
      return copy;
    });
  };

  const handleChainingDelete = (k) => {
    const bucketIdx = Math.abs(k) % htCapacity;
    setHtBuckets(prev => {
      const copy = prev.map(b => [...b]);
      copy[bucketIdx] = copy[bucketIdx].filter(item => item.key !== k);
      return copy;
    });
  };

  const handleChainingSearch = () => {
    const k = parseInt(htSearchKey, 10);
    if (isNaN(k)) return;
    const bucketIdx = Math.abs(k) % htCapacity;
    const item = htBuckets[bucketIdx].find(e => e.key === k);
    if (item) {
      setHtSearchFeedback({ found: true, message: `Key ${k} found in Bucket ${bucketIdx} with value "${item.value}"!` });
    } else {
      setHtSearchFeedback({ found: false, message: `Key ${k} not found (Bucket ${bucketIdx} checked).` });
    }
  };

  // Open Addressing Insert
  const handleOaInsert = () => {
    const k = parseInt(htInputKey, 10);
    if (isNaN(k)) return;
    const m = oaTable.length;
    const trace = [];
    const h1 = Math.abs(k) % m;
    const h2 = 7 - (Math.abs(k) % 7);

    let inserted = false;
    const newTable = oaTable.map(s => ({ ...s }));

    for (let i = 0; i < m; i++) {
      let pos;
      if (htStrategy === "linear") {
        pos = (h1 + i) % m;
      } else if (htStrategy === "quadratic") {
        pos = (h1 + i * i) % m;
      } else {
        // double hashing
        pos = (h1 + i * h2) % m;
      }

      trace.push({ attempt: i, pos, key: newTable[pos].key, status: newTable[pos].status });

      if (newTable[pos].status === "empty" || newTable[pos].status === "tombstone" || newTable[pos].key === k) {
        newTable[pos] = { key: k, value: htInputValue, status: "occupied" };
        inserted = true;
        break;
      }
    }

    setOaProbeTrace(trace);
    if (inserted) {
      setOaTable(newTable);
    } else {
      alert("Hash Table Full! Cannot insert.");
    }
  };

  // =========================================================================
  // WORKBENCH 2: JAVA HASHMAP BIT SPREADING & TREEIFICATION SIMULATOR
  // =========================================================================
  const [hmKeyInput, setHmKeyInput] = useState("Java");
  const [hmValInput, setHmValInput] = useState("Language");
  const [hmSimCapacity, setHmSimCapacity] = useState(16);
  const [hmEntries, setHmEntries] = useState([
    { key: "Java", val: "Language", hash: 2301506, spread: 2301541, index: 5 },
    { key: "Python", val: "Scripting", hash: -1808614770, spread: -1808642358, index: 10 },
    { key: "Rust", val: "Systems", hash: 2562479, spread: 2562518, index: 6 },
    { key: "Go", val: "Cloud", hash: 2267, spread: 2267, index: 11 },
  ]);

  // Synthetic collision test for treeification visualizer
  const [collisionCount, setCollisionCount] = useState(4); // simulate 1 to 9 colliding items in bucket 3
  const isTreeified = collisionCount >= 8 && hmSimCapacity >= 64;

  const currentKeyAnalysis = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < hmKeyInput.length; i++) {
      hash = (31 * hash + hmKeyInput.charCodeAt(i)) | 0;
    }
    const spread = (hash ^ (hash >>> 16)) | 0;
    const mask = hmSimCapacity - 1;
    const index = spread & mask;
    return {
      hash,
      hashHex: (hash >>> 0).toString(16).padStart(8, '0'),
      hashBin: (hash >>> 0).toString(2).padStart(32, '0'),
      spread,
      spreadHex: (spread >>> 0).toString(16).padStart(8, '0'),
      spreadBin: (spread >>> 0).toString(2).padStart(32, '0'),
      mask,
      maskBin: mask.toString(2).padStart(8, '0'),
      index
    };
  }, [hmKeyInput, hmSimCapacity]);

  const addHmSimEntry = () => {
    if (!hmKeyInput.trim()) return;
    setHmEntries(prev => {
      const filtered = prev.filter(e => e.key !== hmKeyInput);
      return [
        ...filtered,
        {
          key: hmKeyInput,
          val: hmValInput,
          hash: currentKeyAnalysis.hash,
          spread: currentKeyAnalysis.spread,
          index: currentKeyAnalysis.index
        }
      ];
    });
  };

  // =========================================================================
  // WORKBENCH 3: LRU CACHE SIMULATOR (LinkedHashMap with accessOrder = true)
  // =========================================================================
  const [lruCapacity, setLruCapacity] = useState(4);
  const [lruInputKey, setLruInputKey] = useState("1");
  const [lruInputValue, setLruInputValue] = useState("Page A");
  const [lruGetInput, setLruGetInput] = useState("1");
  const [lruLog, setLruLog] = useState(["Cache initialized with capacity 4"]);

  // Internal ordered array representing doubly linked list: head = LRU (oldest), tail = MRU (newest)
  const [lruCache, setLruCache] = useState([
    { key: "1", value: "Page A" },
    { key: "2", value: "Page B" },
    { key: "3", value: "Page C" },
  ]);

  const handleLruPut = () => {
    if (!lruInputKey) return;
    setLruCache(prev => {
      const copy = prev.filter(item => item.key !== lruInputKey);
      let evictedMsg = "";
      if (copy.length >= lruCapacity) {
        const evicted = copy.shift(); // evict LRU (head)
        evictedMsg = ` | Evicted LRU Key "${evicted.key}"`;
      }
      copy.push({ key: lruInputKey, value: lruInputValue }); // append MRU (tail)
      setLruLog(l => [`PUT: Key "${lruInputKey}" = "${lruInputValue}"${evictedMsg}`, ...l.slice(0, 9)]);
      return copy;
    });
  };

  const handleLruGet = () => {
    if (!lruGetInput) return;
    setLruCache(prev => {
      const idx = prev.findIndex(item => item.key === lruGetInput);
      if (idx === -1) {
        setLruLog(l => [`GET: Key "${lruGetInput}" -> CACHE MISS (null)`, ...l.slice(0, 9)]);
        return prev;
      }
      const item = prev[idx];
      const copy = prev.filter((_, i) => i !== idx);
      copy.push(item); // move to MRU (tail)
      setLruLog(l => [`GET: Key "${lruGetInput}" -> HIT ("${item.value}") | Moved to MRU Tail`, ...l.slice(0, 9)]);
      return copy;
    });
  };

  // =========================================================================
  // WORKBENCH 4: TWO SUM COMPLEMENT VISUALIZER
  // =========================================================================
  const [twoSumArrStr, setTwoSumArrStr] = useState("2, 7, 11, 15");
  const [twoSumTarget, setTwoSumTarget] = useState(9);
  const [twoSumStep, setTwoSumStep] = useState(0);

  const twoSumArray = useMemo(() => {
    return twoSumArrStr.split(",").map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
  }, [twoSumArrStr]);

  const twoSumSteps = useMemo(() => {
    const steps = [];
    const map = new Map();
    let solution = null;

    for (let i = 0; i < twoSumArray.length; i++) {
      const current = twoSumArray[i];
      const complement = twoSumTarget - current;
      const found = map.has(complement);
      const prevIndex = found ? map.get(complement) : null;

      steps.push({
        index: i,
        current,
        complement,
        found,
        prevIndex,
        mapState: Array.from(map.entries()).map(([k, v]) => ({ key: k, index: v }))
      });

      if (found) {
        solution = [prevIndex, i];
        break;
      }
      map.set(current, i);
    }
    return { steps, solution };
  }, [twoSumArray, twoSumTarget]);

  const currentTwoSumStep = twoSumSteps.steps[Math.min(twoSumStep, twoSumSteps.steps.length - 1)];

  // =========================================================================
  // WORKBENCH 5: LONGEST CONSECUTIVE SEQUENCE (LeetCode 128)
  // =========================================================================
  const [lcsInputStr, setLcsInputStr] = useState("100, 4, 200, 1, 3, 2");
  const lcsArray = useMemo(() => {
    return lcsInputStr.split(",").map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
  }, [lcsInputStr]);

  const lcsAnalysis = useMemo(() => {
    const set = new Set(lcsArray);
    const sequences = [];
    let longestStreak = 0;
    let longestSeq = [];

    for (const num of set) {
      // Check if num is the start of a streak
      if (!set.has(num - 1)) {
        let currentNum = num;
        let streak = 1;
        const currentSeq = [currentNum];

        while (set.has(currentNum + 1)) {
          currentNum += 1;
          streak += 1;
          currentSeq.push(currentNum);
        }

        sequences.push({
          start: num,
          length: streak,
          sequence: currentSeq
        });

        if (streak > longestStreak) {
          longestStreak = streak;
          longestSeq = currentSeq;
        }
      }
    }

    return { set: Array.from(set), sequences, longestStreak, longestSeq };
  }, [lcsArray]);

  // =========================================================================
  // WORKBENCH 6: FREQUENCY MAP & ANAGRAM ANALYZER
  // =========================================================================
  const [anagramStr1, setAnagramStr1] = useState("listen");
  const [anagramStr2, setAnagramStr2] = useState("silent");

  const anagramAnalysis = useMemo(() => {
    const clean1 = anagramStr1.toLowerCase().replace(/[^a-z0-9]/g, "");
    const clean2 = anagramStr2.toLowerCase().replace(/[^a-z0-9]/g, "");

    const freq1 = {};
    for (const c of clean1) freq1[c] = (freq1[c] || 0) + 1;

    const freq2 = {};
    for (const c of clean2) freq2[c] = (freq2[c] || 0) + 1;

    let isAnagram = clean1.length === clean2.length;
    if (isAnagram) {
      for (const k in freq1) {
        if (freq1[k] !== freq2[k]) {
          isAnagram = false;
          break;
        }
      }
    }

    const allKeys = Array.from(new Set([...Object.keys(freq1), ...Object.keys(freq2)])).sort();

    return { clean1, clean2, freq1, freq2, isAnagram, allKeys };
  }, [anagramStr1, anagramStr2]);

  // =========================================================================
  // WORKBENCH 7: EQUALS() & HASHCODE() CONTRACT SANDBOX
  // =========================================================================
  const [contractMode, setContractMode] = useState("correct"); // 'default' | 'equalsOnly' | 'correct' | 'mutated'

  const contractSimulation = useMemo(() => {
    if (contractMode === "default") {
      return {
        title: "Default Object Reference Equality",
        desc: "s1 and s2 have identical fields (id=101, name='Rahul'), but default Object.equals() compares memory addresses (s1 == s2).",
        s1Hash: "0x4f35b2e (System identity)",
        s2Hash: "0x78ab12d (System identity)",
        equalsResult: "false (s1.equals(s2))",
        setResult: "Size = 2 (DUPLICATE BUG: Both objects added into HashSet!)",
        isBug: true
      };
    } else if (contractMode === "equalsOnly") {
      return {
        title: "Overrode equals() WITHOUT hashCode()",
        desc: "s1.equals(s2) returns true, but hashCode() was NOT overridden! Java assigns disparate identity hash codes.",
        s1Hash: "Bucket 3 (Hash 0x4f35b2e)",
        s2Hash: "Bucket 9 (Hash 0x78ab12d)",
        equalsResult: "true (Logical match)",
        setResult: "Size = 2 (PHANTOM LOOKUP BUG: map.get(s2) queries Bucket 9 and fails to find s1 stored in Bucket 3!)",
        isBug: true
      };
    } else if (contractMode === "correct") {
      return {
        title: "Proper Contract (Objects.hash(id, name) & equals())",
        desc: "Both objects hash to the exact same bucket (Objects.hash(101, 'Rahul') = 78622158). equals() verifies field equality.",
        s1Hash: "Bucket 6 (Hash 78622158)",
        s2Hash: "Bucket 6 (Hash 78622158)",
        equalsResult: "true",
        setResult: "Size = 1 (CORRECT: Duplicate rejected; map.get(new Student(101, 'Rahul')) finds the value in O(1)!)",
        isBug: false
      };
    } else {
      return {
        title: "Field Mutation Bug (Mutable HashMap Key)",
        desc: "s1 inserted with id=101 into Bucket 6. Then s1.id is modified to 999! Subsequent map.get(s1) computes Bucket 13 and returns null!",
        s1Hash: "Bucket 6 (Original Hash 78622158) -> Now Bucket 13 (Hash 94821102)",
        s2Hash: "Original slot remains Bucket 6",
        equalsResult: "Key permanently lost (Zombie object in HashMap!)",
        setResult: "map.get(s1) -> null (Silent Memory Leak & Data Loss!)",
        isBug: true
      };
    }
  }, [contractMode]);

  // =========================================================================
  // QUIZ QUESTIONS (15 MCQs)
  // =========================================================================
  const quizData = [
    {
      id: "q1",
      question: "What is the average time complexity of searching in a well-distributed HashMap?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correct: 2,
      explanation: "Under uniform hashing with a bounded load factor (<= 0.75), search, insertion, and deletion operate in expected O(1) average time."
    },
    {
      id: "q2",
      question: "Which collision-resolution technique checks consecutive positions (index + 1, index + 2, ...)?",
      options: ["Double hashing", "Linear probing", "Quadratic probing", "Separate chaining"],
      correct: 1,
      explanation: "Linear probing checks consecutive positions: `h_i(key) = (h(key) + i) % m`."
    },
    {
      id: "q3",
      question: "What is the default load factor of Java's java.util.HashMap?",
      options: ["0.25", "0.50", "0.75", "1.00"],
      correct: 2,
      explanation: "Java's HashMap defaults to a load factor of 0.75, which balances time efficiency and space overhead."
    },
    {
      id: "q4",
      question: "Which data structure is internally used to back Java's HashSet?",
      options: ["TreeMap", "LinkedList", "HashMap", "ArrayDeque"],
      correct: 2,
      explanation: "HashSet is backed by a private HashMap where elements serve as keys mapped to a shared dummy `PRESENT` Object."
    },
    {
      id: "q5",
      question: "Which Java collection maintains elements in sorted key order?",
      options: ["HashMap", "LinkedHashMap", "TreeMap", "HashSet"],
      correct: 2,
      explanation: "TreeMap is backed by a Red-Black Tree and maintains its keys in natural sorted order or via a custom Comparator."
    },
    {
      id: "q6",
      question: "According to the Java contract, if a.equals(b) is true, what must be true?",
      options: ["a == b", "Their hash codes must be equal", "Their hash codes must differ", "They must share the same memory address"],
      correct: 1,
      explanation: "If two objects are equal by `equals()`, their `hashCode()` integers must be identical."
    },
    {
      id: "q7",
      question: "Which open-addressing technique generally reduces primary clustering most effectively?",
      options: ["Linear probing", "Double hashing", "Separate chaining", "None"],
      correct: 1,
      explanation: "Double hashing uses a secondary key-dependent hash function for step size, eliminating primary clustering."
    },
    {
      id: "q8",
      question: "Which data structure allows solving the Longest Consecutive Sequence problem in O(n) time?",
      options: ["Stack", "Queue", "HashSet", "TreeMap"],
      correct: 2,
      explanation: "A HashSet allows O(1) membership checks to find sequence starts (`num - 1` not in set) and count consecutive streaks."
    },
    {
      id: "q9",
      question: "Why does Java HashMap enforce capacity to be a power of two?",
      options: [
        "To allow bitwise AND `(n - 1) & hash` instead of slow modulo division",
        "To prevent collisions completely",
        "To enable binary search over buckets",
        "To comply with JVM 64-bit alignment"
      ],
      correct: 0,
      explanation: "When capacity `n` is a power of two, `(n - 1) & hash` produces identical results to `hash % n` in a single CPU cycle."
    },
    {
      id: "q10",
      question: "What bitwise formula does Java HashMap apply for hash spreading before masking?",
      options: ["h ^ (h >>> 16)", "h << 4", "~h & 0xFF", "h | (h << 16)"],
      correct: 0,
      explanation: "`h ^ (h >>> 16)` mixes upper 16 bits into lower 16 bits to prevent high-bit loss when bucket count is small."
    },
    {
      id: "q11",
      question: "What is the treeification threshold in Java 8+ HashMap?",
      options: ["4", "6", "8", "16"],
      correct: 2,
      explanation: "TREEIFY_THRESHOLD = 8. A bucket list of 8 nodes converts into a Red-Black Tree if table capacity >= 64."
    },
    {
      id: "q12",
      question: "What is the minimum overall table capacity required before treeification will occur in Java HashMap?",
      options: ["16", "32", "64", "128"],
      correct: 2,
      explanation: "MIN_TREEIFY_CAPACITY = 64. If a bucket reaches 8 nodes but total capacity is < 64, HashMap resizes instead."
    },
    {
      id: "q13",
      question: "What is the untreeification threshold when a tree bucket shrinks?",
      options: ["2", "4", "6", "7"],
      correct: 2,
      explanation: "UNTREEIFY_THRESHOLD = 6. A tree bucket converts back to a regular linked list if node count falls to 6."
    },
    {
      id: "q14",
      question: "How can Java LinkedHashMap be converted into an LRU Cache?",
      options: [
        "Set `accessOrder = true` and override `removeEldestEntry()`",
        "Pass a reverse Comparator to the constructor",
        "Wrap the map in `Collections.unmodifiableMap()`",
        "Use `TreeMap` instead"
      ],
      correct: 0,
      explanation: "LinkedHashMap with `accessOrder = true` moves accessed entries to the tail, and `removeEldestEntry` evicts the head."
    },
    {
      id: "q15",
      question: "Why should mutable objects not be used as keys in a HashMap?",
      options: [
        "It throws a NullPointerException immediately",
        "Mutating key fields alters its hashCode, making it unfindable in its original bucket (memory leak / phantom key)",
        "The JVM automatically deallocates the map",
        "The map automatically untreeifies"
      ],
      correct: 1,
      explanation: "Mutating key fields alters hashCode. Future queries calculate a different bucket index or fail equals(), losing the key."
    }
  ];

  const quizScore = useMemo(() => {
    let score = 0;
    quizData.forEach((q, idx) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  // Filter sections in reader mode
  const filteredSections = useMemo(() => {
    if (!searchFilter.trim()) return JavaHashingSections;
    const term = searchFilter.toLowerCase();
    return JavaHashingSections.filter(
      s => s.title.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
    );
  }, [searchFilter]);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Top sticky module navigation bar */}
      <ModuleNav
        currentModuleId="hashing"
        prevRoute="/learning/java/stacks-queues"
        nextRoute={null}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 space-y-8">
        
        {/* Module Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-stone-900 via-stone-850 to-orange-950 text-white p-6 sm:p-10 border border-stone-800 shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium tracking-wide">
                <Hash className="w-3.5 h-3.5" />
                <span>MODULE 11 · ADVANCED DATA STRUCTURES</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Hashing & Hash-Based Data Structures
              </h1>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Master hash tables, hash functions, collision resolution (Separate Chaining, Linear Probing, Quadratic Probing, Double Hashing), load factors, rehashing, Java HashMap internals (bit spreading, power-of-two mask, Red-Black treeification), LinkedHashMap LRU Cache, TreeMap, custom equals() & hashCode() contracts, and high-frequency interview patterns.
              </p>
            </div>

            {/* View Mode Toggle Pill */}
            <div className="flex sm:flex-col items-center justify-end gap-3 shrink-0">
              <div className="inline-flex p-1 bg-stone-800/80 backdrop-blur-md rounded-2xl border border-stone-700/60 shadow-inner">
                <button
                  onClick={() => setViewMode("interactive")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    viewMode === "interactive"
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  <span>Workbenches</span>
                </button>
                <button
                  onClick={() => setViewMode("reader")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    viewMode === "reader"
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Full Reader</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Java 17+ SE & DSA Spec</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE WORKBENCHES VIEW */}
        {/* ========================================================================= */}
        {viewMode === "interactive" && (
          <div className="space-y-6">
            {/* Workbench Subnav Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#e7e3da] [scrollbar-width:none]">
              {[
                { id: "hashTableStudio", label: "Hash Table Studio", icon: Grid },
                { id: "hashmapInternals", label: "HashMap Internals & Tree", icon: Binary },
                { id: "lruCacheStudio", label: "LinkedHashMap & LRU", icon: Clock },
                { id: "twoSumStudio", label: "Two Sum Solver", icon: Target },
                { id: "longestConsecutive", label: "Longest Consecutive", icon: ListOrdered },
                { id: "frequencyAnagram", label: "Frequency & Anagrams", icon: Type },
                { id: "equalsContract", label: "equals() & hashCode()", icon: Shield },
                { id: "quiz", label: "15-MCQ Assessment", icon: HelpCircle },
                { id: "labs", label: "30 Labs & LeetCode", icon: Award }
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-orange-600 text-white shadow-sm"
                        : "bg-white hover:bg-stone-100 text-stone-600 border border-[#e7e3da]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: HASH TABLE STUDIO */}
            {activeTab === "hashTableStudio" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Collision Resolution Workbench
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Interactive Hash Table (Separate Chaining vs Open Addressing)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Compare linked-node bucket chains with Linear Probing, Quadratic Probing, and Double Hashing.
                      </p>
                    </div>

                    {/* Strategy Selector */}
                    <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
                      {[
                        { id: "chaining", label: "Chaining" },
                        { id: "linear", label: "Linear Probing" },
                        { id: "quadratic", label: "Quadratic Probing" },
                        { id: "double", label: "Double Hashing" },
                      ].map(s => (
                        <button
                          key={s.id}
                          onClick={() => setHtStrategy(s.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            htStrategy === s.id ? "bg-white text-stone-900 shadow-2xs" : "text-stone-500 hover:text-stone-900"
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Key:</span>
                      <input
                        type="number"
                        value={htInputKey}
                        onChange={(e) => setHtInputKey(e.target.value)}
                        className="w-20 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg font-mono focus:outline-none focus:border-orange-500"
                        placeholder="Key"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Value:</span>
                      <input
                        type="text"
                        value={htInputValue}
                        onChange={(e) => setHtInputValue(e.target.value)}
                        className="w-28 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg font-mono focus:outline-none focus:border-orange-500"
                        placeholder="Value"
                      />
                    </div>
                    <button
                      onClick={htStrategy === "chaining" ? handleChainingInsert : handleOaInsert}
                      className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-all"
                    >
                      Insert Pair
                    </button>

                    <div className="h-4 w-px bg-stone-300 mx-1"></div>

                    {/* Search control */}
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={htSearchKey}
                        onChange={(e) => setHtSearchKey(e.target.value)}
                        placeholder="Search key..."
                        className="w-28 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg font-mono focus:outline-none focus:border-orange-500"
                      />
                      <button
                        onClick={handleChainingSearch}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-lg text-xs font-semibold"
                      >
                        Search
                      </button>
                    </div>

                    {/* Metrics Badge */}
                    <div className="ml-auto flex items-center gap-3 text-xs font-mono">
                      <span className="text-stone-500">
                        Load Factor: <strong className="text-stone-900">{htStrategy === "chaining" ? chainingLoadFactor : oaLoadFactor}</strong>
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        (htStrategy === "chaining" ? chainingLoadFactor : oaLoadFactor) > 0.75
                          ? "bg-red-100 text-red-700 border border-red-200"
                          : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      }`}>
                        {(htStrategy === "chaining" ? chainingLoadFactor : oaLoadFactor) > 0.75 ? "Resize Needed" : "Optimal"}
                      </span>
                    </div>
                  </div>

                  {htSearchFeedback && (
                    <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      htSearchFeedback.found ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-amber-50 text-amber-800 border border-amber-200"
                    }`}>
                      {htSearchFeedback.found ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-amber-600" />}
                      <span>{htSearchFeedback.message}</span>
                    </div>
                  )}

                  {/* VISUALIZATION CONTAINER */}
                  {htStrategy === "chaining" ? (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider font-mono">
                        Bucket Array with Linked Nodes (Capacity: {htCapacity})
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                        {htBuckets.map((bucket, idx) => (
                          <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                            <div className="flex items-center justify-between text-[11px] font-mono border-b border-stone-200 pb-1">
                              <span className="font-bold text-stone-700">Bucket [{idx}]</span>
                              <span className="text-stone-400">{bucket.length} items</span>
                            </div>
                            {bucket.length === 0 ? (
                              <div className="text-[11px] text-stone-400 italic py-2 text-center">null</div>
                            ) : (
                              <div className="space-y-1.5">
                                {bucket.map((node, nIdx) => (
                                  <div
                                    key={nIdx}
                                    className="p-2 bg-white rounded-lg border border-orange-200 shadow-2xs flex items-center justify-between text-xs"
                                  >
                                    <div>
                                      <strong className="text-orange-700 font-mono">{node.key}</strong>
                                      <span className="text-stone-400 mx-1">:</span>
                                      <span className="text-stone-700">{node.value}</span>
                                    </div>
                                    <button
                                      onClick={() => handleChainingDelete(node.key)}
                                      className="text-stone-400 hover:text-red-600 text-[10px] font-mono ml-2"
                                      title="Delete key"
                                    >
                                      ✕
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider font-mono">
                        Flat Array Slots with {htStrategy === "linear" ? "Linear Probing (h + i) % m" : htStrategy === "quadratic" ? "Quadratic Probing (h + i²) % m" : "Double Hashing (h1 + i·h2) % m"} (Capacity: {oaTable.length})
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-11 gap-2">
                        {oaTable.map((slot, idx) => (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-xl border text-center transition-all ${
                              slot.status === "occupied"
                                ? "bg-orange-50 border-orange-300 shadow-2xs"
                                : "bg-stone-50 border-stone-200"
                            }`}
                          >
                            <div className="text-[10px] font-mono text-stone-400">[{idx}]</div>
                            {slot.status === "occupied" ? (
                              <div className="mt-1">
                                <div className="text-xs font-bold font-mono text-orange-800">{slot.key}</div>
                                <div className="text-[10px] text-stone-600 truncate">{slot.value}</div>
                              </div>
                            ) : (
                              <div className="text-[10px] text-stone-400 italic mt-1">- empty -</div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Probe Trace Output */}
                      {oaProbeTrace.length > 0 && (
                        <div className="p-3 bg-stone-900 text-stone-200 rounded-xl font-mono text-xs space-y-1">
                          <span className="text-orange-400 font-bold">Probe Sequence Trace:</span>
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {oaProbeTrace.map((p, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-stone-800 rounded border border-stone-700">
                                Attempt {p.attempt}: Index [{p.pos}] ({p.status})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: JAVA HASHMAP BIT SPREADING & TREEIFICATION */}
            {activeTab === "hashmapInternals" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      JVM Architecture & Bitwise Operations
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Java HashMap Internals: Bit Spreading & Treeification Engine
                    </h3>
                    <p className="text-xs text-stone-500">
                      Observe how `key.hashCode()` is transformed via `h ^ (h &gt;&gt;&gt; 16)` and masked with `(n - 1)` to compute the bucket index in constant time.
                    </p>
                  </div>

                  {/* Interactive Bit Spreading Calculator */}
                  <div className="p-5 bg-stone-900 text-stone-200 rounded-2xl font-mono text-xs space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-stone-400">Key:</span>
                        <input
                          type="text"
                          value={hmKeyInput}
                          onChange={(e) => setHmKeyInput(e.target.value)}
                          className="px-2.5 py-1 bg-stone-800 text-orange-400 border border-stone-700 rounded w-32 focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-stone-400">Value:</span>
                        <input
                          type="text"
                          value={hmValInput}
                          onChange={(e) => setHmValInput(e.target.value)}
                          className="px-2.5 py-1 bg-stone-800 text-white border border-stone-700 rounded w-32 focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-stone-400">Capacity (Power of 2):</span>
                        <select
                          value={hmSimCapacity}
                          onChange={(e) => setHmSimCapacity(parseInt(e.target.value, 10))}
                          className="px-2.5 py-1 bg-stone-800 text-white border border-stone-700 rounded"
                        >
                          <option value="16">16 (Default Initial)</option>
                          <option value="32">32 (Doubled)</option>
                          <option value="64">64 (Min Treeify)</option>
                        </select>
                      </div>
                      <button
                        onClick={addHmSimEntry}
                        className="px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white rounded font-sans font-semibold"
                      >
                        Compute & Store
                      </button>
                    </div>

                    {/* Step-by-Step Bitwise Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-stone-800">
                      <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60 space-y-1">
                        <div className="text-[11px] text-stone-400 font-sans">Step 1: key.hashCode()</div>
                        <div className="text-orange-300 font-bold">{currentKeyAnalysis.hash}</div>
                        <div className="text-[10px] text-stone-500">Hex: 0x{currentKeyAnalysis.hashHex}</div>
                        <div className="text-[9px] text-stone-400 break-all">{currentKeyAnalysis.hashBin}</div>
                      </div>

                      <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60 space-y-1">
                        <div className="text-[11px] text-stone-400 font-sans">Step 2: h ^ (h &gt;&gt;&gt; 16) [Spread]</div>
                        <div className="text-amber-300 font-bold">{currentKeyAnalysis.spread}</div>
                        <div className="text-[10px] text-stone-500">Hex: 0x{currentKeyAnalysis.spreadHex}</div>
                        <div className="text-[9px] text-stone-400 break-all">{currentKeyAnalysis.spreadBin}</div>
                      </div>

                      <div className="p-3 bg-stone-800/80 rounded-xl border border-orange-500/40 bg-orange-950/20 space-y-1">
                        <div className="text-[11px] text-orange-400 font-sans">Step 3: (capacity - 1) & spread</div>
                        <div className="text-xl font-extrabold text-orange-400">Index: [{currentKeyAnalysis.index}]</div>
                        <div className="text-[10px] text-stone-400">Mask: {currentKeyAnalysis.mask} (0b{currentKeyAnalysis.maskBin})</div>
                      </div>
                    </div>
                  </div>

                  {/* TREEIFICATION THRESHOLD SIMULATOR */}
                  <div className="p-5 bg-[#faf8f5] rounded-2xl border border-[#e7e3da] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-stone-900">
                          Bucket Collision & Treeification Simulator (Bucket [3])
                        </h4>
                        <p className="text-xs text-stone-500">
                          Simulate multiple colliding keys in a single bucket. When node count reaches 8 and table capacity &gt;= 64, the chain treeifies into a Red-Black Tree.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-stone-500">Collisions:</span>
                        <input
                          type="range"
                          min="1"
                          max="9"
                          value={collisionCount}
                          onChange={(e) => setCollisionCount(parseInt(e.target.value, 10))}
                          className="w-28 accent-orange-600"
                        />
                        <span className="text-xs font-bold font-mono text-orange-700 w-6">{collisionCount}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-stone-200">
                      <div className="flex items-center justify-between mb-3 text-xs font-mono">
                        <span>Mode: <strong className={isTreeified ? "text-red-700 font-bold" : "text-stone-700 font-bold"}>{isTreeified ? "Red-Black Tree (TreeNode)" : "Singly Linked List (Node)"}</strong></span>
                        <span className="text-stone-500">Search Time: <strong className="text-stone-900">{isTreeified ? "O(log n)" : "O(n)"}</strong></span>
                      </div>

                      {isTreeified ? (
                        <div className="p-4 bg-red-50/50 rounded-xl border border-red-200 text-center space-y-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">
                            <span>🌲 Treeified into Red-Black Tree (TREEIFY_THRESHOLD = 8 reached)</span>
                          </div>
                          <div className="text-xs text-stone-600 font-mono">
                            Root Node &lt;K,V&gt; with Left / Right / Parent references and Red/Black coloring
                          </div>
                          <div className="flex justify-center items-center gap-2 pt-2">
                            {Array.from({ length: collisionCount }).map((_, i) => (
                              <span key={i} className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono text-white ${i % 2 === 0 ? "bg-red-700" : "bg-neutral-900"}`}>
                                {i + 1}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 overflow-x-auto py-2">
                          {Array.from({ length: collisionCount }).map((_, i) => (
                            <React.Fragment key={i}>
                              <div className="px-3 py-1.5 bg-stone-100 rounded-lg border border-stone-300 font-mono text-xs whitespace-nowrap">
                                Node {i + 1}
                              </div>
                              {i < collisionCount - 1 && <span className="text-stone-400 font-bold">→</span>}
                            </React.Fragment>
                          ))}
                          {collisionCount < 8 && (
                            <span className="text-stone-400 text-xs italic font-mono pl-2">
                              ({8 - collisionCount} more to treeify)
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: LINKEDHASHMAP & LRU CACHE */}
            {activeTab === "lruCacheStudio" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Access-Order Tracking & Eviction
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      LinkedHashMap LRU Cache Visualizer
                    </h3>
                    <p className="text-xs text-stone-500">
                      Constructed with `new LinkedHashMap(16, 0.75f, true)`. Accessing an element moves it to MRU (Tail). Overfilling capacity evicts LRU (Head).
                    </p>
                  </div>

                  {/* LRU Controls */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Put Key:</span>
                      <input
                        type="text"
                        value={lruInputKey}
                        onChange={(e) => setLruInputKey(e.target.value)}
                        className="w-16 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Value:</span>
                      <input
                        type="text"
                        value={lruInputValue}
                        onChange={(e) => setLruInputValue(e.target.value)}
                        className="w-24 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>
                    <button
                      onClick={handleLruPut}
                      className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded text-xs font-semibold"
                    >
                      cache.put(key, val)
                    </button>

                    <div className="h-4 w-px bg-stone-300 mx-2"></div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Get Key:</span>
                      <input
                        type="text"
                        value={lruGetInput}
                        onChange={(e) => setLruGetInput(e.target.value)}
                        className="w-16 px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>
                    <button
                      onClick={handleLruGet}
                      className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded text-xs font-semibold"
                    >
                      cache.get(key)
                    </button>

                    <div className="ml-auto text-xs font-mono text-stone-500">
                      Capacity: <strong className="text-stone-900">{lruCapacity}</strong>
                    </div>
                  </div>

                  {/* Cache Representation */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                      <span className="text-red-600 font-bold">← LRU (Head / Eviction Candidate)</span>
                      <span className="text-emerald-600 font-bold">MRU (Tail / Most Recently Used) →</span>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      {lruCache.length === 0 ? (
                        <div className="text-stone-400 text-xs italic py-4 mx-auto">Cache is empty.</div>
                      ) : (
                        lruCache.map((item, idx) => (
                          <React.Fragment key={item.key}>
                            <div className="p-3 bg-white rounded-xl border border-stone-300 shadow-2xs text-center min-w-[100px] shrink-0">
                              <div className="text-[10px] font-mono text-stone-400">Position {idx}</div>
                              <div className="text-sm font-bold font-mono text-orange-700">"{item.key}"</div>
                              <div className="text-xs text-stone-600 truncate">{item.value}</div>
                            </div>
                            {idx < lruCache.length - 1 && (
                              <div className="text-stone-400 font-bold text-xs shrink-0">⇄</div>
                            )}
                          </React.Fragment>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Log Console */}
                  <div className="p-4 bg-stone-900 text-stone-300 rounded-xl font-mono text-xs space-y-1">
                    <span className="text-orange-400 font-bold">Cache Activity Log:</span>
                    {lruLog.map((entry, idx) => (
                      <div key={idx} className="text-stone-400 text-[11px]">
                        &gt; {entry}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: TWO SUM COMPLEMENT SOLVER */}
            {activeTab === "twoSumStudio" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Complement Lookup Invariant
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Two Sum HashMap Optimizer: complement = target - current
                    </h3>
                    <p className="text-xs text-stone-500">
                      Instead of checking all pairs in O(n²), query whether `target - current` was previously stored in the HashMap in O(1) average time.
                    </p>
                  </div>

                  {/* Input settings */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Array:</span>
                      <input
                        type="text"
                        value={twoSumArrStr}
                        onChange={(e) => setTwoSumArrStr(e.target.value)}
                        className="px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono w-48"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Target:</span>
                      <input
                        type="number"
                        value={twoSumTarget}
                        onChange={(e) => setTwoSumTarget(parseInt(e.target.value, 10))}
                        className="px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono w-20"
                      />
                    </div>
                    <button
                      onClick={() => setTwoSumStep(0)}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-xs font-semibold"
                    >
                      Reset
                    </button>
                    <button
                      onClick={() => setTwoSumStep(s => Math.min(s + 1, twoSumSteps.steps.length - 1))}
                      disabled={twoSumStep >= twoSumSteps.steps.length - 1}
                      className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white rounded text-xs font-semibold"
                    >
                      Next Step →
                    </button>
                  </div>

                  {/* Array Representation */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-stone-500 font-bold">Input Array:</span>
                    <div className="flex items-center gap-2 overflow-x-auto">
                      {twoSumArray.map((val, idx) => {
                        const isCurrent = currentTwoSumStep && currentTwoSumStep.index === idx;
                        const isSolution = twoSumSteps.solution && twoSumSteps.solution.includes(idx);
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center transition-all min-w-[70px] ${
                              isSolution
                                ? "bg-emerald-50 border-emerald-500 shadow-sm"
                                : isCurrent
                                ? "bg-orange-50 border-orange-500 ring-2 ring-orange-400"
                                : "bg-white border-stone-200"
                            }`}
                          >
                            <div className="text-[10px] font-mono text-stone-400">index {idx}</div>
                            <div className="text-sm font-bold font-mono text-stone-900">{val}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step status */}
                  {currentTwoSumStep && (
                    <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span>Iteration index: <strong className="text-orange-700">{currentTwoSumStep.index}</strong></span>
                        <span>Current element: <strong className="text-stone-900">{currentTwoSumStep.current}</strong></span>
                        <span>Required Complement: <strong className="text-blue-700">{currentTwoSumStep.complement}</strong></span>
                      </div>
                      <div className="text-stone-600">
                        {currentTwoSumStep.found ? (
                          <span className="text-emerald-700 font-bold">
                            SUCCESS: Complement {currentTwoSumStep.complement} found at map index {currentTwoSumStep.prevIndex}! Matching indices: [{currentTwoSumStep.prevIndex}, {currentTwoSumStep.index}]
                          </span>
                        ) : (
                          <span>
                            Complement {currentTwoSumStep.complement} NOT in map. Stored {currentTwoSumStep.current} → index {currentTwoSumStep.index}.
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 5: LONGEST CONSECUTIVE SEQUENCE */}
            {activeTab === "longestConsecutive" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      LeetCode 128 · HashSet Sequence Expansion
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Longest Consecutive Sequence in O(n) Time
                    </h3>
                    <p className="text-xs text-stone-500">
                      Only numbers where `num - 1` is absent from the HashSet initiate sequence traversal, guaranteeing linear overall time.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-stone-500">Array:</span>
                    <input
                      type="text"
                      value={lcsInputStr}
                      onChange={(e) => setLcsInputStr(e.target.value)}
                      className="px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono w-72"
                      placeholder="e.g. 100, 4, 200, 1, 3, 2"
                    />
                    <div className="flex gap-2">
                      {["100, 4, 200, 1, 3, 2", "0, 3, 7, 2, 5, 8, 4, 6, 0, 1"].map(ex => (
                        <button
                          key={ex}
                          onClick={() => setLcsInputStr(ex)}
                          className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-[11px] rounded text-stone-600 font-mono"
                        >
                          {ex}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* HashSet display */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-stone-500 font-bold">HashSet Unique Elements:</span>
                    <div className="flex flex-wrap gap-2">
                      {lcsAnalysis.set.map((n, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-stone-100 rounded-lg border border-stone-200 font-mono text-xs text-stone-800">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Discovered Sequences */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider font-mono">
                      Discovered Consecutive Streaks (Starts where num - 1 is absent)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {lcsAnalysis.sequences.map((seq, idx) => {
                        const isMax = seq.length === lcsAnalysis.longestStreak;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border ${
                              isMax ? "bg-orange-50 border-orange-300 ring-1 ring-orange-300 shadow-2xs" : "bg-stone-50 border-stone-200"
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs font-mono mb-1">
                              <span className="font-bold text-stone-700">Start: {seq.start}</span>
                              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${isMax ? "bg-orange-600 text-white" : "bg-stone-200 text-stone-600"}`}>
                                Length: {seq.length}
                              </span>
                            </div>
                            <div className="text-xs font-mono text-stone-600">
                              {seq.sequence.join(" → ")}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800">
                        Maximal Consecutive Streak Length:
                      </span>
                      <span className="text-lg font-mono font-extrabold text-emerald-700">
                        {lcsAnalysis.longestStreak} ({lcsAnalysis.longestSeq.join(" → ")})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: FREQUENCY MAPS & ANAGRAM ANALYZER */}
            {activeTab === "frequencyAnagram" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      String & Character Frequency
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Frequency Map & Anagram Validator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Compare character frequencies across two strings or compute character distributions using `getOrDefault(ch, 0) + 1`.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">String 1:</span>
                      <input
                        type="text"
                        value={anagramStr1}
                        onChange={(e) => setAnagramStr1(e.target.value)}
                        className="px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">String 2:</span>
                      <input
                        type="text"
                        value={anagramStr2}
                        onChange={(e) => setAnagramStr2(e.target.value)}
                        className="px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      anagramAnalysis.isAnagram ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                    }`}>
                      {anagramAnalysis.isAnagram ? "✓ Valid Anagrams" : "✕ Not Anagrams"}
                    </span>
                  </div>

                  {/* Character frequency table comparison */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs font-mono border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700">
                        <tr>
                          <th className="p-2.5 text-left">Character</th>
                          <th className="p-2.5 text-center">String 1 Count</th>
                          <th className="p-2.5 text-center">String 2 Count</th>
                          <th className="p-2.5 text-center">Match?</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        {anagramAnalysis.allKeys.map(ch => {
                          const c1 = anagramAnalysis.freq1[ch] || 0;
                          const c2 = anagramAnalysis.freq2[ch] || 0;
                          const match = c1 === c2;
                          return (
                            <tr key={ch} className={match ? "bg-white" : "bg-red-50/50"}>
                              <td className="p-2.5 font-bold text-orange-700">'{ch}'</td>
                              <td className="p-2.5 text-center">{c1}</td>
                              <td className="p-2.5 text-center">{c2}</td>
                              <td className="p-2.5 text-center">
                                {match ? <span className="text-emerald-600 font-bold">✓</span> : <span className="text-red-600 font-bold">✕</span>}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 7: EQUALS() & HASHCODE() CONTRACT SANDBOX */}
            {activeTab === "equalsContract" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Object Equality & Contract Guarantees
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Custom equals() & hashCode() Contract Simulator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Test the catastrophic consequences of violating the contract between logical equality and hash codes in collections.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: "default", label: "Case A: Default Reference Equality" },
                      { id: "equalsOnly", label: "Case B: equals() WITHOUT hashCode()" },
                      { id: "correct", label: "Case C: Proper Objects.hash() Contract" },
                      { id: "mutated", label: "Case D: Key Field Mutation Bug" }
                    ].map(btn => (
                      <button
                        key={btn.id}
                        onClick={() => setContractMode(btn.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          contractMode === btn.id
                            ? "bg-orange-600 text-white shadow-2xs"
                            : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className={`p-5 rounded-2xl border ${
                    contractSimulation.isBug ? "bg-amber-50/70 border-amber-300" : "bg-emerald-50/70 border-emerald-300"
                  } space-y-3`}>
                    <div className="flex items-center gap-2">
                      {contractSimulation.isBug ? <AlertTriangle className="w-5 h-5 text-amber-700" /> : <CheckCircle className="w-5 h-5 text-emerald-700" />}
                      <h4 className="text-sm font-bold text-stone-900">{contractSimulation.title}</h4>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">{contractSimulation.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                      <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                        <span className="text-stone-400">s1 Hash:</span>
                        <div className="font-bold text-stone-900">{contractSimulation.s1Hash}</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                        <span className="text-stone-400">s2 Hash:</span>
                        <div className="font-bold text-stone-900">{contractSimulation.s2Hash}</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs">
                      <span className="text-stone-500">HashSet / HashMap Outcome: </span>
                      <strong className={contractSimulation.isBug ? "text-red-700" : "text-emerald-700"}>
                        {contractSimulation.setResult}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 8: 15-MCQ QUIZ */}
            {activeTab === "quiz" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Formal Assessment
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Module 11 Knowledge Check (15 MCQs)
                      </h3>
                    </div>
                    {quizSubmitted && (
                      <div className="px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-xl text-xs font-mono font-bold text-orange-800">
                        Score: {quizScore} / {quizData.length} ({Math.round((quizScore / quizData.length) * 100)}%)
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {quizData.map((q, qIdx) => {
                      const selected = quizAnswers[q.id];
                      return (
                        <div key={q.id} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="px-2 py-0.5 bg-stone-200 text-stone-700 rounded font-mono text-xs font-bold">
                              Q{qIdx + 1}
                            </span>
                            <span className="text-sm font-semibold text-stone-900">{q.question}</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                            {q.options.map((opt, optIdx) => {
                              const isPicked = selected === optIdx;
                              let btnClass = "bg-white text-stone-700 border-stone-200 hover:bg-stone-100";
                              if (quizSubmitted) {
                                if (optIdx === q.correct) btnClass = "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
                                else if (isPicked) btnClass = "bg-red-100 text-red-800 border-red-300";
                              } else if (isPicked) {
                                btnClass = "bg-orange-600 text-white border-orange-600 font-semibold";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !quizSubmitted && setQuizAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                                  className={`p-2.5 text-xs text-left rounded-lg border transition-all ${btnClass}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {quizSubmitted && (
                            <div className="pl-8 pt-1 text-xs text-stone-600">
                              <strong className="text-stone-900">Explanation: </strong>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <button
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold"
                    >
                      Reset Quiz
                    </button>
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold shadow-2xs"
                    >
                      Submit Answers
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 9: 30 LABS & LEETCODE TRACK */}
            {activeTab === "labs" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Hands-on Practice
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      30 Practical Coding Assignments & 12 LeetCode Tracks
                    </h3>
                  </div>

                  {/* Curated LeetCode Track */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                      Curated LeetCode Practice Track (12 Problems)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { num: "217", name: "Contains Duplicate", diff: "Easy", concept: "HashSet", url: "https://leetcode.com/problems/contains-duplicate/" },
                        { num: "1", name: "Two Sum", diff: "Easy", concept: "HashMap", url: "https://leetcode.com/problems/two-sum/" },
                        { num: "242", name: "Valid Anagram", diff: "Easy", concept: "Frequency", url: "https://leetcode.com/problems/valid-anagram/" },
                        { num: "349", name: "Intersection of Two Arrays", diff: "Easy", concept: "HashSet", url: "https://leetcode.com/problems/intersection-of-two-arrays/" },
                        { num: "387", name: "First Unique Character", diff: "Easy", concept: "Frequency", url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
                        { num: "49", name: "Group Anagrams", diff: "Medium", concept: "HashMap", url: "https://leetcode.com/problems/group-anagrams/" },
                        { num: "347", name: "Top K Frequent Elements", diff: "Medium", concept: "Heap/Map", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
                        { num: "3", name: "Longest Substring Without Repeating", diff: "Medium", concept: "Map Window", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                        { num: "560", name: "Subarray Sum Equals K", diff: "Medium", concept: "Prefix Sum", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
                        { num: "128", name: "Longest Consecutive Sequence", diff: "Medium", concept: "HashSet", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
                        { num: "146", name: "LRU Cache", diff: "Medium", concept: "LinkedHashMap", url: "https://leetcode.com/problems/lru-cache/" },
                        { num: "76", name: "Minimum Window Substring", diff: "Hard", concept: "Freq Map Window", url: "https://leetcode.com/problems/minimum-window-substring/" },
                      ].map(p => (
                        <a
                          key={p.num}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-stone-50 hover:bg-orange-50/50 rounded-xl border border-stone-200 hover:border-orange-300 transition-all flex items-center justify-between"
                        >
                          <div>
                            <div className="text-xs font-bold text-stone-900">{p.num}. {p.name}</div>
                            <div className="text-[10px] text-stone-500 font-mono">{p.concept}</div>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            p.diff === "Easy" ? "bg-emerald-100 text-emerald-800" : p.diff === "Medium" ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"
                          }`}>
                            {p.diff}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 30 Assignments Checklist */}
                  <div className="space-y-4 pt-4 border-t border-stone-100">
                    <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                      Module Assignments Checklist (30 Problems)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Beginner */}
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                        <span className="text-xs font-bold text-stone-800 font-mono">Assignment 1 — Beginner (1-10)</span>
                        <div className="space-y-1.5 text-xs text-stone-700">
                          {[
                            "1. Frequency map for integer array",
                            "2. Character frequency counter",
                            "3. Remove duplicate elements",
                            "4. First repeated element",
                            "5. First non-repeating character",
                            "6. Valid anagram checker",
                            "7. Distinct elements count",
                            "8. Intersection of two arrays",
                            "9. Union of two arrays",
                            "10. Contains duplicate boolean"
                          ].map((t, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!completedLabs[`b_${i}`]}
                                onChange={(e) => setCompletedLabs(c => ({ ...c, [`b_${i}`]: e.target.checked }))}
                                className="rounded text-orange-600 focus:ring-orange-500"
                              />
                              <span className={completedLabs[`b_${i}`] ? "line-through text-stone-400" : ""}>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Intermediate */}
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                        <span className="text-xs font-bold text-stone-800 font-mono">Assignment 2 — Intermediate (11-20)</span>
                        <div className="space-y-1.5 text-xs text-stone-700">
                          {[
                            "11. Two Sum complement map",
                            "12. Group Anagrams sorter",
                            "13. Find all duplicate elements",
                            "14. Top K Frequent Elements",
                            "15. Sort Characters by Frequency",
                            "16. Intersection of Two Arrays II",
                            "17. Subarray Sum Equals K",
                            "18. Longest Substring Without Repeat",
                            "19. Find Common Characters",
                            "20. Count Pairs With Given Sum"
                          ].map((t, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!completedLabs[`i_${i}`]}
                                onChange={(e) => setCompletedLabs(c => ({ ...c, [`i_${i}`]: e.target.checked }))}
                                className="rounded text-orange-600 focus:ring-orange-500"
                              />
                              <span className={completedLabs[`i_${i}`] ? "line-through text-stone-400" : ""}>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Advanced */}
                      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                        <span className="text-xs font-bold text-stone-800 font-mono">Assignment 3 — Advanced (21-30)</span>
                        <div className="space-y-1.5 text-xs text-stone-700">
                          {[
                            "21. Longest Consecutive Sequence",
                            "22. Minimum Window Substring",
                            "23. 4Sum II complement hashing",
                            "24. Subarray Sums Divisible by K",
                            "25. Longest Arithmetic Subsequence",
                            "26. Design an LRU Cache",
                            "27. Design a Custom HashMap",
                            "28. Design a Custom HashSet",
                            "29. Insert Delete GetRandom O(1)",
                            "30. Distinct Elements in Every Window"
                          ].map((t, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!completedLabs[`a_${i}`]}
                                onChange={(e) => setCompletedLabs(c => ({ ...c, [`a_${i}`]: e.target.checked }))}
                                className="rounded text-orange-600 focus:ring-orange-500"
                              />
                              <span className={completedLabs[`a_${i}`] ? "line-through text-stone-400" : ""}>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* FULL READER VIEW */}
        {/* ========================================================================= */}
        {viewMode === "reader" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar TOC */}
            <div className="lg:col-span-1 space-y-4">
              <div className="sticky top-20 bg-white p-4 rounded-2xl border border-[#e7e3da] shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="text-xs font-bold font-mono uppercase text-stone-500">Curriculum TOC</span>
                  <span className="text-[11px] font-mono text-orange-600">{JavaHashingSections.length} Chapters</span>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-stone-400" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filter sections..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="max-h-[70vh] overflow-y-auto space-y-1 [scrollbar-width:thin]">
                  {filteredSections.map((sec, idx) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(parseInt(sec.number, 10))}
                      className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-center justify-between ${
                        activeSection === parseInt(sec.number, 10)
                          ? "bg-orange-50 text-orange-800 font-bold border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reading Content Pane */}
            <div className="lg:col-span-3 space-y-10">
              {JavaHashingSections.map((sec, idx) => (
                <div
                  key={sec.id}
                  id={`section-${idx}`}
                  className="p-6 sm:p-8 bg-white rounded-3xl border border-[#e7e3da] shadow-2xs space-y-4 scroll-mt-20"
                >
                  <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      {sec.category}
                    </span>
                    <span className="text-xs font-mono text-stone-400">Chapter {sec.number} / 28</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                    {sec.title}
                  </h2>

                  <div className="prose prose-stone max-w-none pt-2">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
