import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  Award,
  CheckSquare,
  Square,
  Activity,
  GitMerge,
  Layers,
  Clock,
  Cpu,
  Fuel,
  Calendar,
  PackageCheck,
  Network
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_GREEDY_ALGORITHMS_SECTIONS } from "./JavaGreedyAlgorithmsSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the defining characteristic of a Greedy Algorithm?",
    options: [
      "It makes the locally optimal choice at each step without reconsidering prior decisions, hoping to achieve a global optimum",
      "It checks every possible branch of the recursion tree before making a selection",
      "It computes overlapping subproblems and memoizes them in a 2D lookup table",
      "It splits the input into two halves and recursively merges the solutions"
    ],
    correct: 0,
    explanation: "A greedy algorithm builds a solution step by step by choosing the option that appears best at the current moment without backtracking."
  },
  {
    id: 2,
    question: "What does the Greedy Choice Property mean?",
    options: [
      "A globally optimal solution can be constructed by assembling locally optimal (greedy) choices first without precluding an optimal final outcome",
      "Every choice must consume zero auxiliary memory",
      "Decisions made in early iterations can be freely retracted later",
      "The algorithm must run in strictly constant O(1) time"
    ],
    correct: 0,
    explanation: "The greedy choice property guarantees that choosing the locally best candidate at each step keeps us on the path to an overall globally optimal solution."
  },
  {
    id: 3,
    question: "In the Exchange Argument proof technique for greedy correctness, what is demonstrated?",
    options: [
      "Any hypothetical optimal solution can swap its choice for the greedy choice without decreasing overall solution quality",
      "Space complexity can always be exchanged for time complexity",
      "Adjacent elements can be swapped using bubble sort in O(n^2)",
      "Dynamic programming tables can be exchanged for hash maps"
    ],
    correct: 0,
    explanation: "The exchange argument proves that replacing the first differing choice of an optimal solution O with the greedy choice G yields a valid solution that is at least as good as O."
  },
  {
    id: 4,
    question: "In the classic Activity Selection Problem, why is sorting by FINISHING time optimal rather than starting time or duration?",
    options: [
      "Finishing earliest leaves the maximum remaining time available for subsequent compatible activities",
      "Starting earliest guarantees the activity has the highest profit",
      "Shortest duration ensures that no memory leaks occur",
      "Finishing earliest minimizes the CPU cache misses"
    ],
    correct: 0,
    explanation: "Selecting the activity that finishes earliest frees up the resource at the earliest possible moment, leaving the largest possible time window for remaining activities."
  },
  {
    id: 5,
    question: "In LeetCode 56 (Merge Intervals), why are intervals sorted by their START time?",
    options: [
      "Sorting by start time ensures intervals are processed chronologically left-to-right, so each interval only needs comparison with the current merged range",
      "Sorting by start time guarantees O(1) auxiliary space",
      "Sorting by start time prevents intervals from having negative coordinates",
      "It allows binary search inside every single interval"
    ],
    correct: 0,
    explanation: "When sorted by start time, if interval i overlaps with current merged range (intervals[i][0] <= currentEnd), it is guaranteed to extend or fit inside it."
  },
  {
    id: 6,
    question: "In the Minimum Number of Platforms railway problem, what does the two-pointer sweep-line strategy do?",
    options: [
      "Sorts arrival and departure times independently; increments platform count on arrival and decrements on departure",
      "Calculates the greatest common divisor of all train arrival times",
      "Uses a hash map of platform numbers to track train occupancy",
      "Computes the transitive closure of the train network"
    ],
    correct: 0,
    explanation: "Because platforms are indistinguishable, sorting arrivals and departures separately and scanning chronologically tracks the peak concurrent trains at the station."
  },
  {
    id: 7,
    question: "Why does the greedy strategy succeed for Fractional Knapsack but fail for 0/1 Knapsack?",
    options: [
      "In Fractional Knapsack, items can be subdivided so capacity can be completely saturated with highest value-per-weight density without leaving unusable voids",
      "Fractional Knapsack only works when all item weights are powers of two",
      "0/1 Knapsack has no optimal substructure",
      "Fractional Knapsack items are automatically sorted by the JVM"
    ],
    correct: 0,
    explanation: "Divisible items allow the knapsack to take partial fractions of the highest value/weight ratio item, completely filling remaining capacity without empty dead space."
  },
  {
    id: 8,
    question: "In Job Sequencing with Deadlines, where should a high-profit job be scheduled to maximize future options?",
    options: [
      "In the latest available time slot at or before its deadline",
      "In the earliest possible time slot (Slot 1)",
      "In the slot matching its profit value",
      "Randomly across any open slot"
    ],
    correct: 0,
    explanation: "Scheduling a job as late as possible before its deadline preserves earlier slots for jobs with tighter deadlines, maximizing scheduling flexibility."
  },
  {
    id: 9,
    question: "How does Disjoint Set Union (DSU) optimize the slot lookup in Job Sequencing?",
    options: [
      "parent[t] points to the latest free slot; path compression makes finding and unioning the next free slot run in near O(1) time",
      "It sorts the jobs without calling Arrays.sort",
      "It calculates the exact factorial of deadlines",
      "It stores the job profits in a balanced AVL tree"
    ],
    correct: 0,
    explanation: "DSU represents chains of occupied slots. Using find(parent, deadline) jumps directly to the latest free slot in amortized O(alpha(D)) time."
  },
  {
    id: 10,
    question: "In Huffman Coding, what is a 'Prefix Code' and why is it essential?",
    options: [
      "No character's binary code is a prefix of another character's code, enabling instantaneous and unambiguous decoding without delimiters",
      "Every character has the exact same 8-bit length",
      "The compressed file is prefixed with a 64-bit timestamp",
      "Codes are sorted in strictly ascending numerical order"
    ],
    correct: 0,
    explanation: "A prefix code ensures that when streaming bits from left to right, as soon as a bit sequence matches a character's code, it can be decoded immediately without ambiguity."
  },
  {
    id: 11,
    question: "How does a Min-Heap facilitate the greedy solution to Meeting Rooms II (minimum rooms)?",
    options: [
      "The heap stores end times of active meetings; if earliest end time <= current meeting start, reuse that room by polling from the heap",
      "The heap stores meeting durations to prioritize shorter meetings",
      "The heap stores room numbers to round-robin meetings evenly",
      "The heap sorts meetings in reverse chronological order"
    ],
    correct: 0,
    explanation: "After sorting by start time, the Min-Heap tracks when active rooms become free. If minHeap.peek() <= meeting.start, that room is reused (poll & push new end time)."
  },
  {
    id: 12,
    question: "In Jump Game I (LeetCode 55), how does the greedy algorithm determine reachability to the last index?",
    options: [
      "Maintains farthest = Math.max(farthest, i + nums[i]); returns false if i > farthest, and true if farthest >= n - 1",
      "Runs Dijkstra's shortest path algorithm on the jump graph",
      "Uses backtracking to test all possible jump combinations",
      "Checks if the sum of all elements in nums is greater than n"
    ],
    correct: 0,
    explanation: "By tracking the farthest reachable boundary, if the current index i ever exceeds farthest, index i is unreachable. Otherwise, reachability extends forward in O(n) time."
  },
  {
    id: 13,
    question: "In Jump Game II (LeetCode 45), when is another jump committed?",
    options: [
      "When the iterator index i reaches currentEnd, jumps is incremented and currentEnd is updated to farthest",
      "Every time nums[i] is greater than 3",
      "Whenever farthest reaches an even index",
      "Only when reaching the final index"
    ],
    correct: 0,
    explanation: "Jump Game II behaves like BFS levels: currentEnd marks the boundary of the current jump level. Reaching currentEnd forces committing to the next jump (currentEnd = farthest)."
  },
  {
    id: 14,
    question: "In the Gas Station problem (LeetCode 134), why is resetting start = i + 1 valid when tank drops below 0 at station i?",
    options: [
      "Because any station between start and i contributed non-negative accumulated fuel, meaning starting at any of them would fail at or before i",
      "Because station i + 1 is guaranteed to have zero travel cost",
      "Because the problem specifies that valid starts are always odd indices",
      "Because all stations after i are automatically skipped"
    ],
    correct: 0,
    explanation: "If journey started at S and failed at i, any intermediate station k (S < k <= i) had strictly less accumulated gas than S provided. Thus, k would also fail at or before i."
  },
  {
    id: 15,
    question: "Given coin denominations [1, 3, 4] and target 6, why does the greedy choice of picking largest coin fail?",
    options: [
      "Greedy picks 4, then two 1s (total 3 coins), whereas optimal is two 3s (total 2 coins)",
      "Greedy exceeds 6 and throws an ArithmeticException",
      "Greedy loops infinitely between 1 and 3",
      "Greedy only works for prime coin denominations"
    ],
    correct: 0,
    explanation: "Picking the locally largest coin (4) leaves a remainder of 2, requiring two 1s (4 + 1 + 1 = 3 coins). The optimal solution is two 3s (3 + 3 = 2 coins), proving general Coin Change requires DP."
  }
];

// --- 32 PRACTICE PROBLEMS & LABS TRACKER ---
const LAB_ASSIGNMENTS = [
  // Level 1: Fundamentals (1-6)
  { id: 1, tier: "Level 1", title: "Assign Cookies (LeetCode 455)", desc: "Sort greed factors and cookie sizes; satisfy the child with the smallest feasible cookie." },
  { id: 2, tier: "Level 1", title: "Lemonade Change (LeetCode 860)", desc: "Greedy change simulation: prioritize giving $10 bills over $5 bills when returning $15 change." },
  { id: 3, tier: "Level 1", title: "Best Time to Buy and Sell Stock II (LeetCode 122)", desc: "Capture every positive daily upward price difference (prices[i] - prices[i-1])." },
  { id: 4, tier: "Level 1", title: "Maximum Units on a Truck (LeetCode 1710)", desc: "Sort box types by units per box descending; fill truck capacity greedily." },
  { id: 5, tier: "Level 1", title: "Can Place Flowers (LeetCode 605)", desc: "Scan array and greedily plant flower whenever previous, current, and next slots are 0." },
  { id: 6, tier: "Level 1", title: "Minimum Cost to Connect Sticks (LeetCode 1167)", desc: "Repeatedly combine the two shortest sticks using a Min-Heap (Huffman analogue)." },

  // Level 2: Intervals and Scheduling (7-14)
  { id: 7, tier: "Level 2", title: "Non-overlapping Intervals (LeetCode 435)", desc: "Sort by finish time; count minimum removals to eliminate all interval overlaps." },
  { id: 8, tier: "Level 2", title: "Minimum Number of Arrows to Burst Balloons (LeetCode 452)", desc: "Sort balloons by end coordinate; shoot arrow at balloon's end to pop all overlapping balloons." },
  { id: 9, tier: "Level 2", title: "Insert Interval (LeetCode 57)", desc: "Insert new interval into sorted non-overlapping list and merge overlapping boundaries." },
  { id: 10, tier: "Level 2", title: "Merge Intervals (LeetCode 56)", desc: "Sort by start time; expand currentEnd = max(currentEnd, nextEnd) on overlap." },
  { id: 11, tier: "Level 2", title: "Meeting Rooms (LeetCode 252)", desc: "Sort meetings by start time; check if any meeting starts before previous finishes." },
  { id: 12, tier: "Level 2", title: "Meeting Rooms II (LeetCode 253)", desc: "Min-Heap room allocation tracking active meeting end times; return peak heap size." },
  { id: 13, tier: "Level 2", title: "Minimum Number of Platforms", desc: "Sort arrival and departure times; sweep-line two pointers to track peak platforms." },
  { id: 14, tier: "Level 2", title: "Job Sequencing with Deadlines", desc: "Sort jobs by profit descending; schedule in latest available slot <= deadline via DSU." },

  // Level 3: Greedy Optimization (15-24)
  { id: 15, tier: "Level 3", title: "Fractional Knapsack Problem", desc: "Sort items by value-to-weight ratio descending; saturate capacity with fractional split." },
  { id: 16, tier: "Level 3", title: "Jump Game (LeetCode 55)", desc: "Maintain farthest = max(farthest, i + nums[i]); check if last index is reachable in O(N)." },
  { id: 17, tier: "Level 3", title: "Jump Game II (LeetCode 45)", desc: "Range expansion: increment jumps when reaching currentEnd, setting currentEnd = farthest." },
  { id: 18, tier: "Level 3", title: "Gas Station (LeetCode 134)", desc: "Track total balance and running tank; reset start = i + 1 whenever tank drops below 0." },
  { id: 19, tier: "Level 3", title: "Task Scheduler (LeetCode 621)", desc: "Frequency-based math formula: max(tasks.length, (maxFreq - 1) * (n + 1) + countMax)." },
  { id: 20, tier: "Level 3", title: "Partition Labels (LeetCode 763)", desc: "Store last occurrence of each character; expand partition end until i reaches partitionEnd." },
  { id: 21, tier: "Level 3", title: "Hand of Straights (LeetCode 846)", desc: "Use TreeMap to greedily form consecutive groups of size W starting from minimum card." },
  { id: 22, tier: "Level 3", title: "Reorganize String (LeetCode 767)", desc: "Place most frequent characters at even indices using Max-Heap to avoid adjacent duplicates." },
  { id: 23, tier: "Level 3", title: "Huffman Coding Lossless Compression", desc: "Build optimal prefix tree by repeatedly pairing the two lowest-frequency symbols." },
  { id: 24, tier: "Level 3", title: "Candy Distribution (LeetCode 135)", desc: "Two-pass greedy scan (left-to-right, then right-to-left) to satisfy neighbor ratings." },

  // Level 4: Advanced Problem Solving (25-32)
  { id: 25, tier: "Level 4", title: "Minimum Refueling Stops (LeetCode 871)", desc: "Drive as far as possible; greedily refuel from largest available passed station via Max-Heap." },
  { id: 26, tier: "Level 4", title: "IPO — Maximize Capital (LeetCode 502)", desc: "Sort projects by capital requirement; push affordable projects into Max-Heap by profit." },
  { id: 27, tier: "Level 4", title: "Course Schedule III (LeetCode 630)", desc: "Sort by lastDay; track courses in Max-Heap and replace longest course if deadline exceeded." },
  { id: 28, tier: "Level 4", title: "Smallest Range Covering Elements from K Lists", desc: "Min-Heap containing one element from each list; minimize maxVal - minVal in O(N log K)." },
  { id: 29, tier: "Level 4", title: "Maximum Performance of a Team (LeetCode 1383)", desc: "Sort by efficiency descending; maintain Min-Heap of top K speeds to maximize speedSum * eff." },
  { id: 30, tier: "Level 4", title: "Minimum Cost to Hire K Workers (LeetCode 857)", desc: "Sort workers by wage/quality ratio; maintain Min-Heap of qualities to scale group wages." },
  { id: 31, tier: "Level 4", title: "Create Maximum Number (LeetCode 321)", desc: "Greedy monotonic stack to select k digits from each array and merge lexicographically." },
  { id: 32, tier: "Level 4", title: "Remove K Digits (LeetCode 402)", desc: "Monotonic increasing stack: greedily pop larger previous digit whenever current digit is smaller." }
];

export default function JavaGreedyAlgorithms() {
  const navigate = useNavigate();

  // Navigation / View Tabs
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "workbenches" | "quiz" | "labs"
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [activeWorkbench, setActiveWorkbench] = useState(1); // 1 to 8

  // Quiz state
  const [userAnswers, setUserAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Labs completed state
  const [completedLabs, setCompletedLabs] = useState(() => {
    try {
      const saved = localStorage.getItem("java_m16_completed_labs");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleLab = (id) => {
    const next = { ...completedLabs, [id]: !completedLabs[id] };
    setCompletedLabs(next);
    try {
      localStorage.setItem("java_m16_completed_labs", JSON.stringify(next));
    } catch (e) {
      console.error(e);
    }
  };

  const completedCount = useMemo(() => {
    return Object.values(completedLabs).filter(Boolean).length;
  }, [completedLabs]);

  // ==========================================
  // WORKBENCH 1: ACTIVITY SELECTION STUDIO
  // ==========================================
  const [wb1SortMode, setWb1SortMode] = useState("finish"); // "finish" | "start" | "duration"
  const [wb1Step, setWb1Step] = useState(0);

  const initialActivities = useMemo(() => [
    { id: "A", start: 1, finish: 3 },
    { id: "B", start: 2, finish: 5 },
    { id: "C", start: 3, finish: 4 },
    { id: "D", start: 4, finish: 6 },
    { id: "E", start: 6, finish: 8 }
  ], []);

  const sortedActivities = useMemo(() => {
    const list = [...initialActivities];
    if (wb1SortMode === "finish") {
      list.sort((a, b) => a.finish - b.finish);
    } else if (wb1SortMode === "start") {
      list.sort((a, b) => a.start - b.start);
    } else {
      list.sort((a, b) => (a.finish - a.start) - (b.finish - b.start));
    }
    return list;
  }, [initialActivities, wb1SortMode]);

  // Compute selection up to step
  const wb1State = useMemo(() => {
    let lastFinish = -1;
    const selected = [];
    const skipped = [];
    const currentActivity = sortedActivities[wb1Step] || null;

    for (let idx = 0; idx <= Math.min(wb1Step, sortedActivities.length - 1); idx++) {
      const act = sortedActivities[idx];
      if (idx < wb1Step) {
        if (act.start >= lastFinish) {
          selected.push(act);
          lastFinish = act.finish;
        } else {
          skipped.push(act);
        }
      }
    }

    return {
      selected,
      skipped,
      currentActivity,
      lastFinish,
      isFinished: wb1Step >= sortedActivities.length
    };
  }, [sortedActivities, wb1Step]);

  // ==========================================
  // WORKBENCH 2: INTERVAL MERGING VISUALIZER
  // ==========================================
  const [wb2Step, setWb2Step] = useState(0);
  const rawIntervals = useMemo(() => [
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
    [15, 18]
  ], []);

  const sortedIntervals = useMemo(() => {
    return [...rawIntervals].sort((a, b) => a[0] - b[0]);
  }, [rawIntervals]);

  const wb2State = useMemo(() => {
    if (sortedIntervals.length === 0) return { merged: [], current: null, next: null };
    const merged = [];
    let current = [...sortedIntervals[0]];

    for (let i = 1; i <= wb2Step && i < sortedIntervals.length; i++) {
      const next = sortedIntervals[i];
      if (next[0] <= current[1]) {
        current[1] = Math.max(current[1], next[1]);
      } else {
        merged.push(current);
        current = [...next];
      }
    }

    const nextCandidate = wb2Step + 1 < sortedIntervals.length ? sortedIntervals[wb2Step + 1] : null;

    return {
      merged,
      current,
      nextCandidate,
      isFinished: wb2Step >= sortedIntervals.length - 1
    };
  }, [sortedIntervals, wb2Step]);

  // ==========================================
  // WORKBENCH 3: RAILWAY MINIMUM PLATFORMS
  // ==========================================
  const [wb3Step, setWb3Step] = useState(0);
  const wb3Arrivals = useMemo(() => [900, 940, 950, 1100, 1500, 1800], []);
  const wb3Departures = useMemo(() => [910, 1200, 1120, 1130, 1900, 2000], []);

  const wb3SortedArr = useMemo(() => [...wb3Arrivals].sort((a, b) => a - b), [wb3Arrivals]);
  const wb3SortedDep = useMemo(() => [...wb3Departures].sort((a, b) => a - b), [wb3Departures]);

  const wb3History = useMemo(() => {
    const steps = [];
    let i = 0;
    let j = 0;
    let platforms = 0;
    let maxPlatforms = 0;
    const n = wb3SortedArr.length;

    while (i < n) {
      if (wb3SortedArr[i] <= wb3SortedDep[j]) {
        platforms++;
        maxPlatforms = Math.max(maxPlatforms, platforms);
        steps.push({
          type: "ARRIVAL",
          time: wb3SortedArr[i],
          i,
          j,
          platforms,
          maxPlatforms,
          msg: `Train arrives at ${wb3SortedArr[i]}. Platforms in use: ${platforms} (Peak: ${maxPlatforms})`
        });
        i++;
      } else {
        platforms--;
        steps.push({
          type: "DEPARTURE",
          time: wb3SortedDep[j],
          i,
          j,
          platforms,
          maxPlatforms,
          msg: `Train departs at ${wb3SortedDep[j]}. Platforms in use: ${platforms} (Peak: ${maxPlatforms})`
        });
        j++;
      }
    }
    return steps;
  }, [wb3SortedArr, wb3SortedDep]);

  // ==========================================
  // WORKBENCH 4: FRACTIONAL KNAPSACK STUDIO
  // ==========================================
  const [knapsackCapacity, setKnapsackCapacity] = useState(50);
  const wb4Items = useMemo(() => [
    { id: "A", weight: 10, value: 60, ratio: 6.0 },
    { id: "B", weight: 20, value: 100, ratio: 5.0 },
    { id: "C", weight: 30, value: 120, ratio: 4.0 }
  ], []);

  const wb4Solution = useMemo(() => {
    let remCap = knapsackCapacity;
    let totalVal = 0;
    const itemAllocations = [];

    for (const item of wb4Items) {
      if (remCap === 0) {
        itemAllocations.push({ ...item, takenWeight: 0, takenFraction: 0, gainedValue: 0 });
        continue;
      }
      if (item.weight <= remCap) {
        remCap -= item.weight;
        totalVal += item.value;
        itemAllocations.push({ ...item, takenWeight: item.weight, takenFraction: 1, gainedValue: item.value });
      } else {
        const fraction = remCap / item.weight;
        const val = item.value * fraction;
        totalVal += val;
        itemAllocations.push({ ...item, takenWeight: remCap, takenFraction: fraction, gainedValue: val });
        remCap = 0;
      }
    }

    return { totalVal, remCap, itemAllocations };
  }, [knapsackCapacity, wb4Items]);

  // ==========================================
  // WORKBENCH 5: JOB SEQUENCING WITH DSU
  // ==========================================
  const [wb5Step, setWb5Step] = useState(0);
  const wb5Jobs = useMemo(() => [
    { id: "A", deadline: 2, profit: 100 },
    { id: "B", deadline: 1, profit: 19 },
    { id: "C", deadline: 2, profit: 27 },
    { id: "D", deadline: 1, profit: 25 },
    { id: "E", deadline: 3, profit: 15 }
  ], []);

  const wb5SortedJobs = useMemo(() => {
    return [...wb5Jobs].sort((a, b) => b.profit - a.profit);
  }, [wb5Jobs]);

  const wb5State = useMemo(() => {
    const slots = { 1: null, 2: null, 3: null };
    const scheduled = [];
    const skipped = [];
    let totalProfit = 0;

    for (let idx = 0; idx <= Math.min(wb5Step, wb5SortedJobs.length - 1); idx++) {
      const job = wb5SortedJobs[idx];
      let assignedSlot = null;
      for (let s = Math.min(job.deadline, 3); s >= 1; s--) {
        if (!slots[s]) {
          assignedSlot = s;
          break;
        }
      }

      if (assignedSlot !== null) {
        slots[assignedSlot] = job.id;
        scheduled.push({ ...job, slot: assignedSlot });
        totalProfit += job.profit;
      } else {
        skipped.push(job);
      }
    }

    return {
      slots,
      scheduled,
      skipped,
      totalProfit,
      currentJob: wb5SortedJobs[wb5Step] || null,
      isFinished: wb5Step >= wb5SortedJobs.length - 1
    };
  }, [wb5SortedJobs, wb5Step]);

  // ==========================================
  // WORKBENCH 6: HUFFMAN CODING SIMULATOR
  // ==========================================
  const huffmanData = useMemo(() => [
    { char: "A", freq: 5, code: "11", len: 2 },
    { char: "B", freq: 4, code: "10", len: 2 },
    { char: "C", freq: 3, code: "00", len: 2 },
    { char: "D", freq: 2, code: "011", len: 3 },
    { char: "E", freq: 1, code: "010", len: 3 }
  ], []);

  const huffmanStats = useMemo(() => {
    const totalChars = huffmanData.reduce((acc, c) => acc + c.freq, 0); // 15
    const fixedBits = totalChars * 3; // 45 bits (since 5 chars need ceil(log2(5))=3 bits)
    const huffmanBits = huffmanData.reduce((acc, c) => acc + c.freq * c.len, 0); // 5*2 + 4*2 + 3*2 + 2*3 + 1*3 = 10+8+6+6+3 = 33 bits
    const savedPercentage = (((fixedBits - huffmanBits) / fixedBits) * 100).toFixed(1);
    return { totalChars, fixedBits, huffmanBits, savedPercentage };
  }, [huffmanData]);

  // ==========================================
  // WORKBENCH 7: MEETING ROOMS II MIN-HEAP
  // ==========================================
  const [wb7Step, setWb7Step] = useState(0);
  const wb7Meetings = useMemo(() => [
    { id: "M1", start: 0, end: 30 },
    { id: "M2", start: 5, end: 10 },
    { id: "M3", start: 15, end: 20 }
  ], []);

  const wb7Sorted = useMemo(() => {
    return [...wb7Meetings].sort((a, b) => a.start - b.start);
  }, [wb7Meetings]);

  const wb7State = useMemo(() => {
    const heap = [];
    const roomAssignments = [];

    for (let i = 0; i <= Math.min(wb7Step, wb7Sorted.length - 1); i++) {
      const m = wb7Sorted[i];
      heap.sort((a, b) => a - b);

      if (heap.length > 0 && heap[0] <= m.start) {
        heap.shift(); // reuse room
        heap.push(m.end);
        roomAssignments.push({ ...m, action: "REUSED_ROOM", heapEnd: m.end });
      } else {
        heap.push(m.end);
        roomAssignments.push({ ...m, action: "NEW_ROOM_ALLOCATED", heapEnd: m.end });
      }
    }

    return {
      heap: [...heap].sort((a, b) => a - b),
      roomAssignments,
      minRooms: heap.length,
      currentMeeting: wb7Sorted[wb7Step] || null,
      isFinished: wb7Step >= wb7Sorted.length - 1
    };
  }, [wb7Sorted, wb7Step]);

  // ==========================================
  // WORKBENCH 8: JUMP GAME & GAS STATION
  // ==========================================
  const [wb8Mode, setWb8Mode] = useState("jump"); // "jump" | "gas"
  const [wb8JumpStep, setWb8JumpStep] = useState(0);
  const jumpArray = useMemo(() => [2, 3, 1, 1, 4], []);

  const jumpState = useMemo(() => {
    let farthest = 0;
    let currentEnd = 0;
    let jumps = 0;
    const history = [];

    for (let i = 0; i <= Math.min(wb8JumpStep, jumpArray.length - 1); i++) {
      if (i > farthest) {
        history.push({ i, val: jumpArray[i], farthest, currentEnd, jumps, failed: true });
        break;
      }
      farthest = Math.max(farthest, i + jumpArray[i]);
      if (i === currentEnd && i < jumpArray.length - 1) {
        jumps++;
        currentEnd = farthest;
      }
      history.push({ i, val: jumpArray[i], farthest, currentEnd, jumps, failed: false });
    }

    return {
      history,
      latest: history[history.length - 1] || null,
      isReachable: farthest >= jumpArray.length - 1
    };
  }, [jumpArray, wb8JumpStep]);

  // Gas station state
  const [wb8GasStep, setWb8GasStep] = useState(0);
  const gasData = useMemo(() => ({
    gas: [1, 2, 3, 4, 5],
    cost: [3, 4, 5, 1, 2]
  }), []);

  const gasState = useMemo(() => {
    let total = 0;
    let tank = 0;
    let start = 0;
    const history = [];

    for (let i = 0; i <= Math.min(wb8GasStep, gasData.gas.length - 1); i++) {
      const diff = gasData.gas[i] - gasData.cost[i];
      total += diff;
      tank += diff;
      let reset = false;
      if (tank < 0) {
        start = i + 1;
        tank = 0;
        reset = true;
      }
      history.push({ i, gas: gasData.gas[i], cost: gasData.cost[i], diff, total, tank, start, reset });
    }

    return {
      history,
      latest: history[history.length - 1] || null,
      canComplete: total >= 0
    };
  }, [gasData, wb8GasStep]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Header Banner */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/java/two-pointers-sliding-window")}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              title="Previous Module: Two Pointers & Sliding Window"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                  MODULE 16
                </span>
                <span className="text-xs text-slate-400 font-medium">Java + DSA Master Course</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                Greedy Algorithms & Interval Problems
              </h1>
            </div>
          </div>

          {/* View Mode Navigation Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
                activeTab === "curriculum"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Curriculum</span>
            </button>
            <button
              onClick={() => setActiveTab("workbenches")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
                activeTab === "workbenches"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>8 Interactive Workbenches</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
                activeTab === "quiz"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Assessment Quiz (15)</span>
            </button>
            <button
              onClick={() => setActiveTab("labs")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
                activeTab === "labs"
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Labs Tracker ({completedCount}/32)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* ============================================================== */}
        {/* TAB 1: FULL CURRICULUM READER WITH SECTION TOC                 */}
        {/* ============================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sticky top-20 max-h-[82vh] overflow-y-auto space-y-3 dark-scrollbar">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  23 Sections
                </span>
                <span className="text-[11px] font-mono text-amber-400">100% Fidelity</span>
              </div>
              <div className="space-y-1">
                {JAVA_GREEDY_ALGORITHMS_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    title={sec.title}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-start justify-between transition ${
                      activeSectionId === sec.id
                        ? "bg-amber-500/20 text-amber-200 font-semibold border border-amber-500/40"
                        : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                    }`}
                  >
                    <span className="break-words whitespace-normal leading-snug pr-2 flex-1">{sec.title}</span>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0 mt-0.5">#{sec.id}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Section Reader Display */}
            <article className="lg:col-span-3 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                    {JAVA_GREEDY_ALGORITHMS_SECTIONS[activeSectionId]?.category || "Curriculum"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                    {JAVA_GREEDY_ALGORITHMS_SECTIONS[activeSectionId]?.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeSectionId === 0}
                    onClick={() => setActiveSectionId((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs text-slate-300 disabled:opacity-40 hover:bg-slate-700 transition"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeSectionId === JAVA_GREEDY_ALGORITHMS_SECTIONS.length - 1}
                    onClick={() => setActiveSectionId((prev) => Math.min(JAVA_GREEDY_ALGORITHMS_SECTIONS.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/20 text-xs text-amber-200 disabled:opacity-40 hover:bg-amber-500/30 transition font-semibold"
                  >
                    Next Section
                  </button>
                </div>
              </div>

              {/* Section Content */}
              <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed">
                {JAVA_GREEDY_ALGORITHMS_SECTIONS[activeSectionId]?.content}
              </div>

              {/* Footer Pager */}
              <div className="border-t border-slate-800 pt-6 flex items-center justify-between">
                <button
                  disabled={activeSectionId === 0}
                  onClick={() => {
                    setActiveSectionId((prev) => Math.max(0, prev - 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white disabled:opacity-30"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous Section
                </button>
                <button
                  disabled={activeSectionId === JAVA_GREEDY_ALGORITHMS_SECTIONS.length - 1}
                  onClick={() => {
                    setActiveSectionId((prev) => Math.min(JAVA_GREEDY_ALGORITHMS_SECTIONS.length - 1, prev + 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold disabled:opacity-30"
                >
                  Next Section <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: EIGHT INTERACTIVE WORKBENCHES                          */}
        {/* ============================================================== */}
        {activeTab === "workbenches" && (
          <div className="space-y-6">
            {/* Workbench Selector Bar */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
              {[
                { id: 1, label: "1. Activity Selection Studio", icon: Calendar },
                { id: 2, label: "2. Interval Merging (LC 56)", icon: GitMerge },
                { id: 3, label: "3. Minimum Platforms Sweep", icon: Activity },
                { id: 4, label: "4. Fractional Knapsack", icon: PackageCheck },
                { id: 5, label: "5. Job Sequencing & DSU", icon: Clock },
                { id: 6, label: "6. Huffman Coding Trees", icon: Network },
                { id: 7, label: "7. Meeting Rooms II Heap", icon: Layers },
                { id: 8, label: "8. Jump Game & Gas Station", icon: Fuel }
              ].map((wb) => {
                const Icon = wb.icon;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      activeWorkbench === wb.id
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{wb.label}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: ACTIVITY SELECTION */}
            {activeWorkbench === 1 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-amber-400" />
                      Activity Selection & Interval Scheduling Studio
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Compare Greedy strategy (Earliest Finish Time) against alternative heuristics (Earliest Start, Shortest Duration).
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Sort By:</span>
                    <select
                      value={wb1SortMode}
                      onChange={(e) => {
                        setWb1SortMode(e.target.value);
                        setWb1Step(0);
                      }}
                      className="bg-slate-800 border border-slate-700 rounded-lg text-xs px-2.5 py-1 text-slate-200"
                    >
                      <option value="finish">Earliest Finish Time (Optimal Greedy)</option>
                      <option value="start">Earliest Start Time (Suboptimal)</option>
                      <option value="duration">Shortest Duration (Suboptimal)</option>
                    </select>
                  </div>
                </div>

                {/* Timeline Axis Visualizer */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span>Timeline (Time Units 0 to 9)</span>
                    <span className="font-mono text-amber-400">
                      Step {wb1Step} of {sortedActivities.length} | Selected: {wb1State.selected.length}
                    </span>
                  </div>

                  {/* Activities Grid */}
                  <div className="space-y-2.5 pt-2">
                    {sortedActivities.map((act, idx) => {
                      const isSelected = wb1State.selected.some((s) => s.id === act.id);
                      const isSkipped = wb1State.skipped.some((s) => s.id === act.id);
                      const isCurrent = idx === wb1Step;

                      return (
                        <div key={act.id} className="flex items-center gap-3">
                          <span className="w-16 font-mono text-xs text-slate-300 font-bold">
                            Act {act.id} [{act.start}-{act.finish}]
                          </span>
                          <div className="flex-1 bg-slate-900 h-7 rounded-lg relative overflow-hidden flex items-center px-2">
                            {/* Gantt Bar */}
                            <div
                              style={{
                                left: `${(act.start / 9) * 100}%`,
                                width: `${((act.finish - act.start) / 9) * 100}%`
                              }}
                              className={`absolute h-5 rounded transition-all duration-300 flex items-center justify-center text-[10px] font-mono font-bold ${
                                isSelected
                                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                                  : isSkipped
                                  ? "bg-rose-500/40 text-rose-200 line-through border border-rose-500/60"
                                  : isCurrent
                                  ? "bg-amber-400 text-slate-950 animate-pulse"
                                  : "bg-slate-800 text-slate-400 border border-slate-700"
                              }`}
                            >
                              {act.id}
                            </div>
                          </div>
                          <span className="w-20 text-[11px] font-mono text-right">
                            {isSelected && <span className="text-emerald-400 font-bold">✓ Selected</span>}
                            {isSkipped && <span className="text-rose-400 font-bold">✕ Overlap</span>}
                            {isCurrent && <span className="text-amber-300 font-bold animate-pulse">Scanning</span>}
                            {!isSelected && !isSkipped && !isCurrent && <span className="text-slate-400">Pending</span>}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step Controls */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <div className="text-xs text-slate-300">
                    {wb1State.currentActivity ? (
                      <span>
                        Evaluating <strong className="text-amber-300">Activity {wb1State.currentActivity.id}</strong> (Start: {wb1State.currentActivity.start}, Finish: {wb1State.currentActivity.finish}).
                        {wb1State.currentActivity.start >= wb1State.lastFinish ? (
                          <span className="text-emerald-400 font-semibold ml-1"> Compatible (start &gt;= lastFinish: {wb1State.lastFinish})!</span>
                        ) : (
                          <span className="text-rose-400 font-semibold ml-1"> Conflict with previous finish ({wb1State.lastFinish})!</span>
                        )}
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-semibold">
                        Algorithm Complete! Total non-overlapping activities selected: {wb1State.selected.length}.
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWb1Step(0)}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
                    >
                      Reset
                    </button>
                    <button
                      disabled={wb1State.isFinished}
                      onClick={() => setWb1Step((prev) => prev + 1)}
                      className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-xs disabled:opacity-40 hover:bg-amber-400 transition"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: INTERVAL MERGING */}
            {activeWorkbench === 2 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <GitMerge className="w-5 h-5 text-amber-400" />
                    Interval Merging Visualizer (LeetCode 56)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Sorted by starting time left-to-right. On overlap (<code className="text-amber-300 font-mono">next.start &lt;= current.end</code>), extend ending time (<code className="text-amber-300 font-mono">current.end = Math.max(current.end, next.end)</code>).
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span>Input Intervals (Sorted by start time)</span>
                    <span className="font-mono text-amber-400">Step {wb2Step} / {sortedIntervals.length - 1}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {sortedIntervals.map((intv, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg font-mono text-xs border ${
                          idx === wb2Step
                            ? "bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold"
                            : idx < wb2Step
                            ? "bg-slate-800 text-slate-400 border-slate-700"
                            : "bg-slate-900 text-slate-300 border-slate-800"
                        }`}
                      >
                        [{intv[0]}, {intv[1]}]
                      </span>
                    ))}
                  </div>

                  {/* Active Merge Box */}
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Current Merged Interval:</span>
                      <span className="text-lg font-mono font-bold text-emerald-400">
                        [{wb2State.current[0]}, {wb2State.current[1]}]
                      </span>
                    </div>
                    {wb2State.nextCandidate && (
                      <div className="text-right">
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Comparing With Next:</span>
                        <span className="text-base font-mono font-semibold text-cyan-300">
                          [{wb2State.nextCandidate[0]}, {wb2State.nextCandidate[1]}]
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Final Merged List */}
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Accumulated Result List:</span>
                    <div className="flex flex-wrap gap-2">
                      {wb2State.merged.map((m, idx) => (
                        <span key={idx} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-lg font-mono text-xs font-semibold">
                          [{m[0]}, {m[1]}]
                        </span>
                      ))}
                      {wb2State.isFinished && (
                        <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-lg font-mono text-xs font-semibold">
                          [{wb2State.current[0]}, {wb2State.current[1]}]
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-xs text-slate-300">
                    {wb2State.isFinished
                      ? "All intervals examined! Complete merged list formed."
                      : `Inspecting interval at index ${wb2Step + 1}...`}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWb2Step(0)}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
                    >
                      Reset
                    </button>
                    <button
                      disabled={wb2State.isFinished}
                      onClick={() => setWb2Step((prev) => prev + 1)}
                      className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-xs disabled:opacity-40 hover:bg-amber-400 transition"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: MINIMUM PLATFORMS */}
            {activeWorkbench === 3 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-amber-400" />
                    Railway Minimum Platforms Sweeper (Two Pointers)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Sort arrivals and departures independently. A two-pointer sweep chronologically simulates trains entering and leaving.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Sorted Arrivals:</span>
                    <div className="flex flex-wrap gap-1 font-mono text-xs">
                      {wb3SortedArr.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Sorted Departures:</span>
                    <div className="flex flex-wrap gap-1 font-mono text-xs">
                      {wb3SortedDep.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-rose-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold block">Peak Platforms:</span>
                      <span className="text-3xl font-mono font-bold text-amber-400">
                        {wb3History[wb3Step]?.maxPlatforms || 0}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 uppercase font-semibold block">Current Active:</span>
                      <span className="text-2xl font-mono font-bold text-cyan-300">
                        {wb3History[wb3Step]?.platforms || 0}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Log */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 max-h-48 overflow-y-auto">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Sweep-Line Event Stream:</span>
                  {wb3History.slice(0, wb3Step + 1).map((ev, idx) => (
                    <div key={idx} className="text-xs font-mono flex items-center gap-2 text-slate-300">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        ev.type === "ARRIVAL" ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                      }`}>
                        {ev.type}
                      </span>
                      <span>{ev.msg}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-xs text-slate-400">
                    Step {wb3Step + 1} of {wb3History.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWb3Step(0)}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
                    >
                      Reset
                    </button>
                    <button
                      disabled={wb3Step >= wb3History.length - 1}
                      onClick={() => setWb3Step((prev) => prev + 1)}
                      className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-xs disabled:opacity-40 hover:bg-amber-400 transition"
                    >
                      Next Event
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: FRACTIONAL KNAPSACK */}
            {activeWorkbench === 4 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <PackageCheck className="w-5 h-5 text-amber-400" />
                      Fractional Knapsack Studio (Value-to-Weight Ratios)
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Sort by ratio (value / weight) descending. Saturate the knapsack capacity by taking whole items and a fraction of the boundary item.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-300 font-medium">Capacity Slider:</span>
                    <input
                      type="range"
                      min="10"
                      max="70"
                      step="5"
                      value={knapsackCapacity}
                      onChange={(e) => setKnapsackCapacity(Number(e.target.value))}
                      className="w-28 accent-amber-500"
                    />
                    <span className="text-xs font-mono font-bold text-amber-400 w-12 text-right">
                      {knapsackCapacity} kg
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {wb4Solution.itemAllocations.map((item) => (
                    <div key={item.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">Item {item.id}</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-semibold">
                          {item.ratio.toFixed(1)} $/kg
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 space-y-1">
                        <div>Weight: <strong className="text-slate-200">{item.weight} kg</strong> | Value: <strong className="text-slate-200">${item.value}</strong></div>
                        <div>Taken Weight: <strong className="text-emerald-400">{item.takenWeight.toFixed(1)} kg</strong> ({(item.takenFraction * 100).toFixed(0)}%)</div>
                        <div>Value Contributed: <strong className="text-cyan-300">${item.gainedValue.toFixed(1)}</strong></div>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                        <div
                          style={{ width: `${item.takenFraction * 100}%` }}
                          className="h-full bg-emerald-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Knapsack Meter */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Total Maximum Value:</span>
                    <span className="text-3xl font-mono font-bold text-emerald-400">
                      ${wb4Solution.totalVal.toFixed(1)}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Remaining Capacity:</span>
                    <span className="text-xl font-mono font-bold text-slate-300">
                      {wb4Solution.remCap} kg
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 max-w-sm">
                    <strong>Exchange Argument:</strong> Taking items with higher ratio ensures every unit of capacity yields maximum value. Fractional knapsack is always globally optimal.
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: JOB SEQUENCING WITH DSU */}
            {activeWorkbench === 5 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    Job Sequencing with Deadlines (Disjoint Set Union)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Sort jobs by profit descending. Place each job in the latest open slot at or before its deadline. DSU finds the latest free slot in near O(1) time.
                  </p>
                </div>

                {/* Slots Visualization */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((slotNum) => {
                    const assignedJobId = wb5State.slots[slotNum];
                    return (
                      <div key={slotNum} className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-2">
                        <span className="text-xs text-slate-400 font-mono">Time Slot {slotNum}</span>
                        <div className={`py-3 rounded-lg font-mono font-bold text-base border ${
                          assignedJobId
                            ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                            : "bg-slate-900 text-slate-400 border-dashed border-slate-800"
                        }`}>
                          {assignedJobId ? `Job ${assignedJobId}` : "Empty"}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Jobs Evaluation List */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Jobs Sorted by Profit Descending:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {wb5SortedJobs.map((j, idx) => {
                      const isProcessed = idx <= wb5Step;
                      const isScheduled = wb5State.scheduled.some((s) => s.id === j.id);

                      return (
                        <div
                          key={j.id}
                          className={`p-2.5 rounded-lg border text-xs font-mono space-y-1 ${
                            isProcessed
                              ? isScheduled
                                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                                : "bg-rose-500/10 border-rose-500/40 text-rose-300 line-through"
                              : "bg-slate-900 border-slate-800 text-slate-400"
                          }`}
                        >
                          <div className="font-bold flex justify-between">
                            <span>Job {j.id}</span>
                            <span>${j.profit}</span>
                          </div>
                          <div className="text-[11px] text-slate-400">Deadline: {j.deadline}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <div className="text-xs text-slate-300">
                    Total Profit Accumulated: <strong className="text-amber-400 text-base font-mono">${wb5State.totalProfit}</strong> | Jobs Done: {wb5State.scheduled.length}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWb5Step(0)}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
                    >
                      Reset
                    </button>
                    <button
                      disabled={wb5State.isFinished}
                      onClick={() => setWb5Step((prev) => prev + 1)}
                      className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-xs disabled:opacity-40 hover:bg-amber-400 transition"
                    >
                      Process Next Job
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: HUFFMAN CODING */}
            {activeWorkbench === 6 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Network className="w-5 h-5 text-amber-400" />
                    Huffman Coding & Variable-Length Prefix Codes
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Lossless compression: repeatedly pair the two lowest-frequency symbols using a Min-Heap. Higher frequency symbols receive shorter bit codes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Table of Codes */}
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Generated Prefix Codes:</span>
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-amber-400 font-mono">
                          <th className="pb-2">Char</th>
                          <th className="pb-2">Freq</th>
                          <th className="pb-2">Prefix Code</th>
                          <th className="pb-2">Length</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-850 font-mono">
                        {huffmanData.map((row) => (
                          <tr key={row.char}>
                            <td className="py-2 font-bold text-white">{row.char}</td>
                            <td className="py-2 text-slate-400">{row.freq}</td>
                            <td className="py-2 text-cyan-300 font-bold">{row.code}</td>
                            <td className="py-2 text-slate-300">{row.len} bits</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Compression Metrics */}
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Compression Performance:</span>
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Total Characters:</span>
                        <span className="font-mono text-slate-200 font-bold">{huffmanStats.totalChars}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Fixed-Length (3 bits/char):</span>
                        <span className="font-mono text-rose-400 font-bold">{huffmanStats.fixedBits} bits</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Huffman Variable-Length:</span>
                        <span className="font-mono text-emerald-400 font-bold">{huffmanStats.huffmanBits} bits</span>
                      </div>
                      <div className="border-t border-slate-800 pt-3 flex justify-between items-center">
                        <span className="text-xs text-slate-300 font-semibold">Compression Savings:</span>
                        <span className="text-lg font-mono font-bold text-amber-400">
                          {huffmanStats.savedPercentage}% Reduction
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 7: MEETING ROOMS II MIN-HEAP */}
            {activeWorkbench === 7 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-400" />
                    Meeting Rooms II Min-Heap Allocator
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Sorted by start time. A Min-Heap tracks active meeting end times. If the earliest ending meeting finishes before the next meeting starts, reuse that room.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Sorted Meetings:</span>
                    <div className="space-y-1">
                      {wb7Sorted.map((m, idx) => (
                        <div
                          key={m.id}
                          className={`px-2.5 py-1 rounded text-xs font-mono flex justify-between border ${
                            idx === wb7Step
                              ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold"
                              : "bg-slate-900 text-slate-400 border-slate-800"
                          }`}
                        >
                          <span>{m.id}</span>
                          <span>[{m.start}, {m.end}]</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Min-Heap */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Min-Heap (Active End Times):</span>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {wb7State.heap.map((endT, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                          End: {endT}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rooms Count */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 uppercase font-semibold block">Minimum Rooms:</span>
                      <span className="text-3xl font-mono font-bold text-amber-400">
                        {wb7State.minRooms}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">Peak concurrent meetings</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-xs text-slate-300">
                    {wb7State.currentMeeting && (
                      <span>
                        Processing <strong className="text-amber-300">Meeting {wb7State.currentMeeting.id}</strong> [{wb7State.currentMeeting.start}, {wb7State.currentMeeting.end}]
                      </span>
                    )}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWb7Step(0)}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
                    >
                      Reset
                    </button>
                    <button
                      disabled={wb7State.isFinished}
                      onClick={() => setWb7Step((prev) => prev + 1)}
                      className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-xs disabled:opacity-40 hover:bg-amber-400 transition"
                    >
                      Next Meeting
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 8: JUMP GAME & GAS STATION */}
            {activeWorkbench === 8 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Fuel className="w-5 h-5 text-amber-400" />
                      Jump Game & Gas Station Deficit Sweeper
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Simulate reachability boundaries in Jump Game and cumulative fuel deficit resetting in Gas Station.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                    <button
                      onClick={() => setWb8Mode("jump")}
                      className={`px-3 py-1.5 rounded-lg font-medium ${wb8Mode === "jump" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400"}`}
                    >
                      Jump Game I & II
                    </button>
                    <button
                      onClick={() => setWb8Mode("gas")}
                      className={`px-3 py-1.5 rounded-lg font-medium ${wb8Mode === "gas" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400"}`}
                    >
                      Gas Station Circuit
                    </button>
                  </div>
                </div>

                {wb8Mode === "jump" ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Jump Array [nums]:</span>
                      <div className="flex gap-2">
                        {jumpArray.map((val, idx) => (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center font-mono flex-1 ${
                              idx === wb8JumpStep
                                ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold"
                                : idx <= (jumpState.latest?.farthest || 0)
                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                                : "bg-slate-900 border-slate-800 text-slate-400"
                            }`}
                          >
                            <span className="text-[10px] text-slate-400 block">Idx {idx}</span>
                            <span className="text-lg font-bold">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
                      <div>
                        <span className="text-slate-400 block">Farthest Reachable:</span>
                        <span className="text-xl font-mono font-bold text-emerald-400">{jumpState.latest?.farthest || 0}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Current Jump Boundary:</span>
                        <span className="text-xl font-mono font-bold text-cyan-300">{jumpState.latest?.currentEnd || 0}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Jumps Committed:</span>
                        <span className="text-xl font-mono font-bold text-amber-400">{jumpState.latest?.jumps || 0}</span>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <button onClick={() => setWb8JumpStep(0)} className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300">
                        Reset
                      </button>
                      <button
                        disabled={wb8JumpStep >= jumpArray.length - 1}
                        onClick={() => setWb8JumpStep((prev) => prev + 1)}
                        className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs disabled:opacity-40"
                      >
                        Next Jump Step
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Station-by-Station Deficit:</span>
                      <div className="grid grid-cols-5 gap-2 font-mono text-xs">
                        {gasData.gas.map((g, idx) => (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-lg border text-center ${
                              idx === wb8GasStep
                                ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold"
                                : "bg-slate-900 border-slate-800 text-slate-300"
                            }`}
                          >
                            <span className="text-[10px] text-slate-400 block">Station {idx}</span>
                            <div>Gas: {g} | Cost: {gasData.cost[idx]}</div>
                            <div className={g - gasData.cost[idx] >= 0 ? "text-emerald-400" : "text-rose-400"}>
                              Diff: {g - gasData.cost[idx] >= 0 ? `+${g - gasData.cost[idx]}` : g - gasData.cost[idx]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
                      <div>
                        <span className="text-slate-400 block">Candidate Start:</span>
                        <span className="text-xl font-mono font-bold text-amber-400">Station {gasState.latest?.start || 0}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Current Tank Fuel:</span>
                        <span className="text-xl font-mono font-bold text-cyan-300">{gasState.latest?.tank || 0}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Circuit Completable:</span>
                        <span className={`text-sm font-bold ${gasState.canComplete ? "text-emerald-400" : "text-rose-400"}`}>
                          {gasState.canComplete ? "YES (Total >= 0)" : "NO (Total < 0)"}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <button onClick={() => setWb8GasStep(0)} className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300">
                        Reset
                      </button>
                      <button
                        disabled={wb8GasStep >= gasData.gas.length - 1}
                        onClick={() => setWb8GasStep((prev) => prev + 1)}
                        className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs disabled:opacity-40"
                      >
                        Next Station
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: ASSESSMENT QUIZ (15 MCQs)                               */}
        {/* ============================================================== */}
        {activeTab === "quiz" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-400" />
                  Module 16 Assessment Quiz
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  15 scenario-based interview questions on Greedy Choice Property, Interval Merging, DSU, Huffman Coding, and DP counterexamples.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setShowQuizResults(false);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
                >
                  Reset Quiz
                </button>
                <button
                  onClick={() => setShowQuizResults(true)}
                  className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition"
                >
                  Submit & Score
                </button>
              </div>
            </div>

            {/* Quiz Questions List */}
            <div className="space-y-4">
              {QUIZ_QUESTIONS.map((q, qIdx) => {
                const selectedAns = userAnswers[q.id];
                const isSubmitted = showQuizResults;
                const isCorrect = selectedAns === q.correct;

                return (
                  <div key={q.id} className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {qIdx + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                        {q.question}
                      </h4>
                    </div>

                    <div className="space-y-2 pt-1 pl-8">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selectedAns === optIdx;
                        let optStyle = "border-slate-800 bg-slate-950/60 text-slate-300 hover:bg-slate-900";

                        if (isSubmitted) {
                          if (optIdx === q.correct) {
                            optStyle = "border-emerald-500/60 bg-emerald-500/10 text-emerald-200 font-semibold";
                          } else if (isChosen && !isCorrect) {
                            optStyle = "border-rose-500/60 bg-rose-500/10 text-rose-200 line-through";
                          }
                        } else if (isChosen) {
                          optStyle = "border-amber-500/60 bg-amber-500/20 text-amber-200 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isSubmitted}
                            onClick={() => setUserAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                            className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition flex items-center gap-2.5 ${optStyle}`}
                          >
                            <span className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center text-[10px] shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isSubmitted && (
                      <div className={`mt-3 p-3 rounded-xl border text-xs leading-relaxed pl-8 ${
                        isCorrect ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-rose-500/10 border-rose-500/30 text-rose-300"
                      }`}>
                        <div className="font-bold flex items-center gap-1.5 mb-1">
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />}
                          {isCorrect ? "Correct!" : "Explanation:"}
                        </div>
                        <p className="text-slate-300">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: PRACTICE LABS TRACKER (32 PROBLEMS)                     */}
        {/* ============================================================== */}
        {activeTab === "labs" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  32 LeetCode & Practice Labs Tracker
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Categorized across 4 mastery tiers: Fundamentals, Intervals & Scheduling, Greedy Optimization, and Advanced Problem Solving.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  {completedCount} / 32 Completed ({((completedCount / 32) * 100).toFixed(0)}%)
                </span>
              </div>
            </div>

            {/* Labs Accordion / Grid */}
            <div className="space-y-3">
              {LAB_ASSIGNMENTS.map((lab) => {
                const isDone = !!completedLabs[lab.id];

                return (
                  <div
                    key={lab.id}
                    onClick={() => toggleLab(lab.id)}
                    className={`p-4 rounded-xl border transition cursor-pointer flex items-center justify-between gap-4 ${
                      isDone
                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-200"
                        : "bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-850"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button className="mt-0.5 text-slate-400 hover:text-white">
                        {isDone ? <CheckSquare className="w-4 h-4 text-emerald-400" /> : <Square className="w-4 h-4 text-slate-400" />}
                      </button>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">
                            {lab.tier}
                          </span>
                          <h4 className={`text-xs sm:text-sm font-semibold ${isDone ? "text-emerald-300 line-through" : "text-white"}`}>
                            {lab.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{lab.desc}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">#{lab.id}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Module Course Navigation Footer */}
      <footer className="mt-12 border-t border-slate-800/80 bg-slate-900/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ModuleNav currentModuleId="greedy-algorithms" />
        </div>
      </footer>
    </div>
  );
}
