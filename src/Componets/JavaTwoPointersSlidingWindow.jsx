import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Award,
  Check,
  Search,
  Sliders,
  CheckSquare,
  Square,
  Calculator,
  Compass,
  Activity,
  GitMerge,
  Table,
  Layers,
  Repeat,
  Split,
  Binary as BinaryIcon,
  Maximize2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS } from "./JavaTwoPointersSlidingWindowSections";

// --- 15 COMPREHENSIVE ASSESSMENT QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why does the two-pointer technique on a sorted array find a pair adding up to target in O(n) time instead of O(n^2)?",
    options: [
      "Because sorted order guarantees moving left rightward increases the sum and moving right leftward decreases the sum, eliminating unviable pairs without scanning them",
      "Because it hashes every element into an underlying bucket table",
      "Because it creates a binary heap and extracts root elements in O(1)",
      "Because it performs divide-and-conquer merge sort recursively"
    ],
    correct: 0,
    explanation: "In a sorted array, if arr[left] + arr[right] < target, pairing arr[left] with any other element to the left of 'right' would only produce an even smaller sum. Thus left can be safely incremented without checking other candidates. The symmetric reasoning holds for right--, examining at most n elements."
  },
  {
    id: 2,
    question: "In Floyd's Cycle Detection Algorithm (Tortoise and Hare), what speeds do the slow and fast pointers move?",
    options: [
      "Slow moves 1 step; Fast moves 2 steps",
      "Slow moves 1 step; Fast moves 3 steps",
      "Both move 2 steps simultaneously",
      "Slow starts at head; Fast starts at tail"
    ],
    correct: 0,
    explanation: "By having slow move 1 step and fast move 2 steps, the distance between fast and slow decreases by 1 node per iteration inside any cycle of length C, guaranteeing they meet in at most C steps with O(1) space."
  },
  {
    id: 3,
    question: "After fast and slow pointers meet inside a cycle in a linked list, how is the exact starting node of the cycle located?",
    options: [
      "Move one pointer back to the head of the list; advance both pointers 1 step at a time until they meet",
      "Reverse the linked list starting from the meeting point",
      "Continue moving fast 2 steps and slow 1 step until they meet a second time",
      "Traverse backwards from slow using previous pointers"
    ],
    correct: 0,
    explanation: "Let L be distance to cycle start and C be cycle length. The meeting point is C - (L mod C) from the cycle start. Moving one pointer to the head while keeping the other at the meeting node and advancing both 1 step causes them to meet exactly at the cycle entrance after L steps."
  },
  {
    id: 4,
    question: "In same-direction in-place array modification (e.g. Remove Duplicates from Sorted Array), what do pointers i and j represent?",
    options: [
      "i tracks the boundary of the last unique element; j scans forward through the array",
      "i scans from right to left; j scans from left to right",
      "i and j form a sliding window of fixed width K",
      "i stores the frequency map; j stores the running sum"
    ],
    correct: 0,
    explanation: "Pointer j scans every element in the array. Whenever arr[j] != arr[i], a new unique value is discovered: i is incremented and arr[i] is updated to arr[j], compacting unique elements into the prefix of the array."
  },
  {
    id: 5,
    question: "How is a fixed-size sliding window of size K updated in O(1) time when moving from index right-1 to right?",
    options: [
      "windowSum = windowSum + arr[right] - arr[right - k]",
      "windowSum = windowSum + arr[right] + arr[right - k]",
      "Recompute the sum by iterating from right - k + 1 to right",
      "Multiply windowSum by arr[right] / arr[right - k]"
    ],
    correct: 0,
    explanation: "A fixed-size window slides by adding the incoming element at index right and subtracting the outgoing element at index right - k, completing the shift in O(1) time."
  },
  {
    id: 6,
    question: "Why should you NOT use a standard variable-size sliding window to find a subarray with a target sum when the array contains negative numbers?",
    options: [
      "Because negative numbers violate monotonicity: shrinking the window by moving left forward can INCREASE the sum, and expanding right can DECREASE it",
      "Because sliding windows cannot store negative array indices",
      "Because Java arrays throw ArrayIndexOutOfBoundsException on negative values",
      "Because negative numbers require floating point division"
    ],
    correct: 0,
    explanation: "The variable sliding window relies on monotonic expansion (increasing sum) and shrinking (decreasing sum). Negative numbers destroy this monotonic property, making it impossible to know whether expanding or shrinking will move toward the target sum. Prefix Sums + HashMap must be used instead."
  },
  {
    id: 7,
    question: "In LeetCode 3 (Longest Substring Without Repeating Characters), why is left updated with Math.max(left, lastSeen.get(c) + 1)?",
    options: [
      "To prevent left from moving backwards if the duplicate character was seen at an index already outside the current window (e.g. in 'abba')",
      "To ensure the window size never exceeds 26",
      "Because Math.max runs in O(1) whereas an if statement runs in O(N)",
      "To reset the window to the beginning of the string"
    ],
    correct: 0,
    explanation: "In a string like 'abba', after processing the second 'b' left moves to index 2. When the second 'a' is encountered at index 3, lastSeen('a') is 0. Moving left to 0 + 1 = 1 would move left backwards and re-introduce the duplicate 'b'. Math.max ensures left only moves forward."
  },
  {
    id: 8,
    question: "In LeetCode 76 (Minimum Window Substring), when is the current window [left, right] considered valid?",
    options: [
      "When 'formed == required', meaning every unique character from string t matches or exceeds its required frequency in the active window",
      "When the length of the window right - left + 1 equals t.length()",
      "When all 26 English lowercase letters are present",
      "When left reaches the end of string s"
    ],
    correct: 0,
    explanation: "Variables 'required' (count of distinct characters in t) and 'formed' (count of characters in the window whose frequency meets or exceeds requirement) ensure that once formed == required, all character requirements are satisfied."
  },
  {
    id: 9,
    question: "Given a 1D prefix sum array P of size N+1 where P[i+1] = P[i] + arr[i], what is the formula for the sum of elements from index l to r inclusive?",
    options: ["P[r + 1] - P[l]", "P[r] - P[l - 1]", "P[r + 1] - P[l + 1]", "P[r] - P[l]"],
    correct: 0,
    explanation: "P[r + 1] contains the sum of elements arr[0..r], and P[l] contains the sum of arr[0..l-1]. Subtracting P[l] removes the prefix before index l, leaving exactly arr[l..r] in O(1) time."
  },
  {
    id: 10,
    question: "What is the formula to calculate the sum of a 2D matrix rectangle with corners (r1, c1) to (r2, c2) inclusive using a (rows+1) x (cols+1) 2D prefix sum array P?",
    options: [
      "P[r2+1][c2+1] - P[r1][c2+1] - P[r2+1][c1] + P[r1][c1]",
      "P[r2][c2] - P[r1][c2] - P[r2][c1] + P[r1][c1]",
      "P[r2+1][c2+1] + P[r1][c2+1] - P[r2+1][c1] - P[r1][c1]",
      "P[r2+1][c2+1] - P[r1+1][c1+1]"
    ],
    correct: 0,
    explanation: "By the Principle of Inclusion-Exclusion: take the entire top-left rectangle P[r2+1][c2+1], subtract the top strip P[r1][c2+1], subtract the left strip P[r2+1][c1], and add back the doubly subtracted top-left corner P[r1][c1]."
  },
  {
    id: 11,
    question: "How does a Difference Array apply a range update 'add value x to all elements from index left to right inclusive' in O(1) time?",
    options: [
      "diff[left] += x; if (right + 1 < diff.length) diff[right + 1] -= x;",
      "diff[left] += x; diff[right] -= x;",
      "diff[left] -= x; diff[right + 1] += x;",
      "diff[left..right] += x using a for-loop"
    ],
    correct: 0,
    explanation: "Incrementing diff[left] by x ensures that computing the running prefix sum adds x to every index starting from left. Decrementing diff[right + 1] by x cancels this addition for all indices beyond right."
  },
  {
    id: 12,
    question: "What mathematical property of the XOR operator allows range XOR queries to be answered in O(1) using prefix XOR?",
    options: [
      "a ^ a = 0 and a ^ 0 = a, so P[r+1] ^ P[l] cancels out the prefix arr[0..l-1]",
      "XOR is distributive over addition",
      "XOR produces monotonic sequences",
      "XOR clears the lowest set bit"
    ],
    correct: 0,
    explanation: "Because a ^ a = 0, evaluating P[r+1] ^ P[l] computes (arr[0] ^ ... ^ arr[r]) ^ (arr[0] ^ ... ^ arr[l-1]). Elements from 0 to l-1 appear twice and cancel to 0, leaving arr[l] ^ ... ^ arr[r]."
  },
  {
    id: 13,
    question: "In LeetCode 560 (Subarray Sum Equals K), why must the frequency map be initialized with map.put(0L, 1)?",
    options: [
      "To account for valid subarrays that start at index 0 (where prefixSum == k, so prefixSum - k == 0)",
      "To prevent NullPointerException when the array is empty",
      "To represent the sentinel node of a linked list",
      "Because 0 is the smallest integer"
    ],
    correct: 0,
    explanation: "If a subarray starting at index 0 has sum equal to k, the running prefix sum becomes k. Looking up prefixSum - k queries 0. If 0 is not in the map with frequency 1, this valid subarray would not be counted."
  },
  {
    id: 14,
    question: "In 'Longest Subarray with Sum Equal to K', why must we use map.putIfAbsent(prefix, i) rather than map.put(prefix, i)?",
    options: [
      "Because to maximize the length of a subarray ending at index j (length = j - earlier_idx), we must preserve the EARLIEST index where prefix appeared",
      "Because HashMaps throw an exception on duplicate keys",
      "Because later indices overwrite negative sums",
      "To avoid integer overflow"
    ],
    correct: 0,
    explanation: "The length of a valid subarray is j - earlier_index. To make this difference as large as possible, earlier_index must be as small as possible. Therefore, we preserve the earliest index and never overwrite it."
  },
  {
    id: 15,
    question: "What is the core dynamic programming recurrence of Kadane's Algorithm for maximum subarray sum?",
    options: [
      "currentSum = Math.max(arr[i], currentSum + arr[i]); maxSum = Math.max(maxSum, currentSum);",
      "currentSum = currentSum + arr[i]; maxSum = Math.max(0, currentSum);",
      "currentSum = Math.min(arr[i], currentSum + arr[i]);",
      "maxSum = arr[i] + arr[i-1];"
    ],
    correct: 0,
    explanation: "At each index i, we decide whether to extend the previous optimal subarray (currentSum + arr[i]) or start a fresh subarray containing only arr[i] (if the accumulated previous sum is negative)."
  }
];

// --- 30 PRACTICE PROBLEMS & LABS TRACKER ---
const LAB_ASSIGNMENTS = [
  // Level 1: Fundamentals (1-7)
  { id: 1, tier: "Level 1", title: "Reverse Array In-Place", desc: "Swap opposite-direction pointers until they cross with O(1) auxiliary space." },
  { id: 2, tier: "Level 1", title: "Valid Palindrome Verification", desc: "Check character equality inward from both ends, skipping non-alphanumeric symbols." },
  { id: 3, tier: "Level 1", title: "Two Sum II in Sorted Array", desc: "Find pair sum matching target using opposite-direction pointers in linear O(N) time." },
  { id: 4, tier: "Level 1", title: "Remove Duplicates from Sorted Array", desc: "Maintain last unique element index i and scan with pointer j in-place." },
  { id: 5, tier: "Level 1", title: "Move Zeroes to End", desc: "Compact nonzero values to write position and zero out the remainder of the array." },
  { id: 6, tier: "Level 1", title: "Middle of the Linked List", desc: "Use fast (2-step) and slow (1-step) pointers to locate list midpoint in one pass." },
  { id: 7, tier: "Level 1", title: "Linked List Cycle Detection", desc: "Apply Floyd's Tortoise and Hare algorithm to detect circular loops in O(1) memory." },

  // Level 2: Sliding Window (8-13)
  { id: 8, tier: "Level 2", title: "Maximum Sum Subarray of Size K", desc: "Slide fixed window of size K: add arr[i] and subtract arr[i - K] in O(1) per step." },
  { id: 9, tier: "Level 2", title: "Minimum Sum Subarray of Size K", desc: "Track lowest consecutive sum across all contiguous windows of length K." },
  { id: 10, tier: "Level 2", title: "Average of All Subarrays of Size K", desc: "Compute rolling average for N - K + 1 contiguous windows using sliding window." },
  { id: 11, tier: "Level 2", title: "Longest Substring Without Repeating Characters", desc: "Use HashMap lastSeen and Math.max(left, lastSeen + 1) for variable-size window (LeetCode 3)." },
  { id: 12, tier: "Level 2", title: "Longest Subarray with at Most K Distinct", desc: "Expand right, record frequencies, and shrink left when distinct count exceeds K." },
  { id: 13, tier: "Level 2", title: "Minimum Size Subarray Sum", desc: "Find smallest window length with sum >= target assuming positive numbers (LeetCode 209)." },

  // Level 3: Prefix Sums (14-20)
  { id: 14, tier: "Level 3", title: "1D Prefix Sum Construction", desc: "Build size N+1 prefix array and answer range queries in O(1) via P[R+1] - P[L]." },
  { id: 15, tier: "Level 3", title: "Range Sum Queries (LeetCode 303)", desc: "Encapsulate static immutable array in a NumArray class with O(1) sumRange." },
  { id: 16, tier: "Level 3", title: "Find Pivot / Equilibrium Index", desc: "Locate index where sum of elements strictly to the left equals sum to the right." },
  { id: 17, tier: "Level 3", title: "Subarray Sum Equals K (LeetCode 560)", desc: "Accumulate prefix sum, query frequency of prefix - K from HashMap, and initialize 0->1." },
  { id: 18, tier: "Level 3", title: "Longest Subarray with Sum K", desc: "Preserve earliest index using putIfAbsent(prefix, i) to maximize valid range length." },
  { id: 19, tier: "Level 3", title: "Difference Array Range Additions", desc: "Apply Q batch range updates [L, R] += val in O(1) and rebuild array in O(N)." },
  { id: 20, tier: "Level 3", title: "Prefix XOR Range Queries", desc: "Answer XOR queries on ranges in O(1) time using P[R+1] ^ P[L] cancellation." },

  // Level 4: Advanced Interview Problems (21-30)
  { id: 21, tier: "Level 4", title: "Three Sum (LeetCode 15)", desc: "Sort array, fix element i, and run two pointers, skipping duplicates at 3 distinct levels." },
  { id: 22, tier: "Level 4", title: "Three Sum Closest (LeetCode 16)", desc: "Find three integers whose sum is closest to target by minimizing |sum - target|." },
  { id: 23, tier: "Level 4", title: "Four Sum (LeetCode 18)", desc: "Extend 3Sum to 4Sum with two outer loops and two pointers, guarding against 64-bit overflow." },
  { id: 24, tier: "Level 4", title: "Minimum Window Substring (LeetCode 76)", desc: "Track need/window frequency maps and shrink left when formed == required in O(N+M)." },
  { id: 25, tier: "Level 4", title: "Maximum Subarray (Kadane's Algorithm)", desc: "Find largest contiguous sum using current = max(x, current + x) with arr[0] initialization." },
  { id: 26, tier: "Level 4", title: "Sliding Window Maximum (LeetCode 239)", desc: "Maintain monotonic decreasing deque of indices to query window maximum in amortized O(1)." },
  { id: 27, tier: "Level 4", title: "Count Subarrays with XOR Equal to K", desc: "Maintain prefix XOR frequency map and query prefixXOR ^ K count in O(N)." },
  { id: 28, tier: "Level 4", title: "Maximum Sum Circular Subarray", desc: "Compute max(maxKadane, totalSum - minKadane) to handle circular boundary wrapping." },
  { id: 29, tier: "Level 4", title: "Maximum Sum of Two Non-Overlapping Subarrays", desc: "Combine prefix/suffix maximums to maximize sum of two disjoint windows of sizes L and M." },
  { id: 30, tier: "Level 4", title: "2D Matrix Rectangle Sum (LeetCode 304)", desc: "Implement NumMatrix using 2D prefix sums and 4-term inclusion-exclusion in O(1)." }
];

export default function JavaTwoPointersSlidingWindow() {
  const navigate = useNavigate();

  // Mode: "workbench" | "reader" | "quiz" | "labs"
  const [activeTab, setActiveTab] = useState("workbench");
  const [workbenchTool, setWorkbenchTool] = useState("two-pointers");
  const [searchFilter, setSearchFilter] = useState("");
  const [activeSectionId, setActiveSectionId] = useState(0);

  // Storage Persistence
  const [completedSections, setCompletedSections] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_java_m15_sections");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [completedLabs, setCompletedLabs] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_java_m15_labs");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [userAnswers, setUserAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [labTierFilter, setLabTierFilter] = useState("All");

  // --- WORKBENCH 1: TWO POINTERS (PAIR SUM & REVERSAL) ---
  const [twoPtrMode, setTwoPtrMode] = useState("pair-sum"); // "pair-sum" | "reverse"
  const [tpArray, setTpArray] = useState([1, 2, 4, 7, 9, 11, 15]);
  const [tpTarget, setTpTarget] = useState(11);
  const [tpLeft, setTpLeft] = useState(0);
  const [tpRight, setTpRight] = useState(6);
  const [tpFound, setTpFound] = useState(null);
  const [tpLogs, setTpLogs] = useState(["Two Pointers initialized with sorted array [1, 2, 4, 7, 9, 11, 15] and target 11."]);

  const handleTpStep = () => {
    if (twoPtrMode === "pair-sum") {
      if (tpLeft >= tpRight) {
        setTpLogs(prev => ["Pointers crossed. Target pair not found in array.", ...prev.slice(0, 9)]);
        return;
      }
      const sum = tpArray[tpLeft] + tpArray[tpRight];
      if (sum === tpTarget) {
        setTpFound({ left: tpLeft, right: tpRight, val1: tpArray[tpLeft], val2: tpArray[tpRight] });
        setTpLogs(prev => [`MATCH FOUND: arr[${tpLeft}] (${tpArray[tpLeft]}) + arr[${tpRight}] (${tpArray[tpRight]}) = ${tpTarget}!`, ...prev.slice(0, 9)]);
      } else if (sum < tpTarget) {
        setTpLogs(prev => [`arr[${tpLeft}] (${tpArray[tpLeft]}) + arr[${tpRight}] (${tpArray[tpRight]}) = ${sum} < ${tpTarget}. Sum too small &rarr; left++`, ...prev.slice(0, 9)]);
        setTpLeft(tpLeft + 1);
      } else {
        setTpLogs(prev => [`arr[${tpLeft}] (${tpArray[tpLeft]}) + arr[${tpRight}] (${tpArray[tpRight]}) = ${sum} > ${tpTarget}. Sum too large &rarr; right--`, ...prev.slice(0, 9)]);
        setTpRight(tpRight - 1);
      }
    } else {
      // Reverse
      if (tpLeft >= tpRight) {
        setTpLogs(prev => ["Reversal complete! Pointers have met/crossed.", ...prev.slice(0, 9)]);
        return;
      }
      const nextArr = [...tpArray];
      const temp = nextArr[tpLeft];
      nextArr[tpLeft] = nextArr[tpRight];
      nextArr[tpRight] = temp;
      setTpArray(nextArr);
      setTpLogs(prev => [`Swapped index ${tpLeft} (${temp}) with index ${tpRight} (${nextArr[tpLeft]}). Moving inward.`, ...prev.slice(0, 9)]);
      setTpLeft(tpLeft + 1);
      setTpRight(tpRight - 1);
    }
  };

  const handleTpReset = () => {
    setTpArray([1, 2, 4, 7, 9, 11, 15]);
    setTpLeft(0);
    setTpRight(6);
    setTpFound(null);
    setTpLogs(["Reset two-pointer simulator to initial state."]);
  };

  // --- WORKBENCH 2: FAST & SLOW CYCLE DETECTOR ---
  const [cycleStep, setCycleStep] = useState(0);
  const [cycleSlow, setCycleSlow] = useState(0);
  const [cycleFast, setCycleFast] = useState(0);
  const [cyclePhase, setCyclePhase] = useState("detect"); // "detect" | "find-start"
  const [cycleDetected, setCycleDetected] = useState(false);
  const [cycleStartFound, setCycleStartFound] = useState(null);
  const [cycleLogs, setCycleLogs] = useState(["Linked list cycle detector ready. Node sequence: 0->1->2->3->4->5->points back to 2."]);

  // Node graph: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 2
  const nextNode = (idx) => {
    if (idx === 5) return 2; // cycle loop back
    return idx + 1;
  };

  const handleCycleStep = () => {
    if (cyclePhase === "detect") {
      const nextS = nextNode(cycleSlow);
      const nextF = nextNode(nextNode(cycleFast));
      setCycleSlow(nextS);
      setCycleFast(nextF);
      setCycleStep(cycleStep + 1);

      if (nextS === nextF) {
        setCycleDetected(true);
        setCyclePhase("find-start");
        setCycleSlow(0); // reset pointer 1 to head
        setCycleLogs(prev => [`Step ${cycleStep + 1}: Slow and Fast met at Node ${nextS}! Cycle confirmed. Phase 2: Reset slow pointer to head (Node 0) to find cycle entrance.`, ...prev.slice(0, 9)]);
      } else {
        setCycleLogs(prev => [`Step ${cycleStep + 1}: Slow moved to ${nextS}, Fast moved to ${nextF}.`, ...prev.slice(0, 9)]);
      }
    } else {
      // Find start: both move 1 step
      const nextS = nextNode(cycleSlow);
      const nextF = nextNode(cycleFast);
      setCycleSlow(nextS);
      setCycleFast(nextF);
      setCycleStep(cycleStep + 1);

      if (nextS === nextF) {
        setCycleStartFound(nextS);
        setCycleLogs(prev => [`Both pointers met at Node ${nextS}! Cycle starts at Node ${nextS}.`, ...prev.slice(0, 9)]);
      } else {
        setCycleLogs(prev => [`Both advancing 1 step: Pointer 1 at Node ${nextS}, Pointer 2 at Node ${nextF}.`, ...prev.slice(0, 9)]);
      }
    }
  };

  const handleCycleReset = () => {
    setCycleStep(0);
    setCycleSlow(0);
    setCycleFast(0);
    setCyclePhase("detect");
    setCycleDetected(false);
    setCycleStartFound(null);
    setCycleLogs(["Reset linked list cycle detector."]);
  };

  // --- WORKBENCH 3: SAME DIRECTION (REMOVE DUPES / MOVE ZEROES) ---
  const [sameDirMode, setSameDirMode] = useState("remove-dupes"); // "remove-dupes" | "move-zeroes"
  const [sdArray, setSdArray] = useState([1, 1, 2, 2, 3, 4, 4, 5]);
  const [sdI, setSdI] = useState(0);
  const [sdJ, setSdJ] = useState(1);
  const [sdDone, setSdDone] = useState(false);
  const [sdLogs, setSdLogs] = useState(["Same-direction in-place compaction initialized."]);

  const handleSdStep = () => {
    if (sameDirMode === "remove-dupes") {
      if (sdJ >= sdArray.length) {
        setSdDone(true);
        setSdLogs(prev => [`Finished! First ${sdI + 1} elements are deduplicated unique values.`, ...prev.slice(0, 9)]);
        return;
      }
      if (sdArray[sdJ] !== sdArray[sdI]) {
        const nextArr = [...sdArray];
        const nextI = sdI + 1;
        nextArr[nextI] = sdArray[sdJ];
        setSdArray(nextArr);
        setSdLogs(prev => [`arr[${sdJ}] (${sdArray[sdJ]}) != arr[${sdI}] (${sdArray[sdI]}): i advanced to ${nextI}, copied arr[${nextI}] = ${sdArray[sdJ]}.`, ...prev.slice(0, 9)]);
        setSdI(nextI);
      } else {
        setSdLogs(prev => [`arr[${sdJ}] == arr[${sdI}] (${sdArray[sdJ]}): Duplicate skipped, advancing scanner j.`, ...prev.slice(0, 9)]);
      }
      setSdJ(sdJ + 1);
    } else {
      // Move Zeroes
      if (sdJ >= sdArray.length) {
        setSdDone(true);
        setSdLogs(prev => ["Finished! All zeroes moved to end maintaining relative order.", ...prev.slice(0, 9)]);
        return;
      }
      if (sdArray[sdJ] !== 0) {
        const nextArr = [...sdArray];
        const temp = nextArr[sdI];
        nextArr[sdI] = nextArr[sdJ];
        nextArr[sdJ] = temp;
        setSdArray(nextArr);
        setSdLogs(prev => [`Non-zero ${nextArr[sdI]} at j=${sdJ} swapped with write-pos i=${sdI}.`, ...prev.slice(0, 9)]);
        setSdI(sdI + 1);
      } else {
        setSdLogs(prev => [`Zero at j=${sdJ} skipped, scanner advancing.`, ...prev.slice(0, 9)]);
      }
      setSdJ(sdJ + 1);
    }
  };

  const handleSdReset = () => {
    if (sameDirMode === "remove-dupes") {
      setSdArray([1, 1, 2, 2, 3, 4, 4, 5]);
      setSdI(0);
      setSdJ(1);
    } else {
      setSdArray([0, 1, 0, 3, 12, 0, 7]);
      setSdI(0);
      setSdJ(0);
    }
    setSdDone(false);
    setSdLogs(["Reset array state."]);
  };

  // --- WORKBENCH 4: FIXED-SIZE SLIDING WINDOW (SIZE K) ---
  const [fixedArray] = useState([2, 1, 5, 1, 3, 2, 8, 4]);
  const [fixedK, setFixedK] = useState(3);
  const [fixedRight, setFixedRight] = useState(2);
  const [fixedCurrentSum, setFixedCurrentSum] = useState(8);
  const [fixedMaxSum, setFixedMaxSum] = useState(8);
  const [fixedBestWindow, setFixedBestWindow] = useState([0, 2]);
  const [fixedLogs, setFixedLogs] = useState(["Fixed-size sliding window initialized: K=3, first window [2, 1, 5] sum = 8."]);

  const handleFixedStep = () => {
    const nextR = fixedRight + 1;
    if (nextR >= fixedArray.length) {
      setFixedLogs(prev => [`End of array reached! Max sum of size ${fixedK} is ${fixedMaxSum}.`, ...prev.slice(0, 9)]);
      return;
    }
    const incoming = fixedArray[nextR];
    const outgoing = fixedArray[nextR - fixedK];
    const newSum = fixedCurrentSum + incoming - outgoing;
    setFixedRight(nextR);
    setFixedCurrentSum(newSum);

    let newMax = fixedMaxSum;
    let newBest = fixedBestWindow;
    if (newSum > fixedMaxSum) {
      newMax = newSum;
      newBest = [nextR - fixedK + 1, nextR];
      setFixedMaxSum(newMax);
      setFixedBestWindow(newBest);
    }

    setFixedLogs(prev => [
      `Slide to [${nextR - fixedK + 1}..${nextR}]: +${incoming} (arr[${nextR}]) - ${outgoing} (arr[${nextR - fixedK}]) = ${newSum}. Max: ${newMax}.`,
      ...prev.slice(0, 9)
    ]);
  };

  const handleFixedReset = () => {
    setFixedRight(fixedK - 1);
    const initSum = fixedArray.slice(0, fixedK).reduce((a, b) => a + b, 0);
    setFixedCurrentSum(initSum);
    setFixedMaxSum(initSum);
    setFixedBestWindow([0, fixedK - 1]);
    setFixedLogs([`Reset window of size K=${fixedK}. Initial sum = ${initSum}.`]);
  };

  // --- WORKBENCH 5: VARIABLE WINDOW (LONGEST UNIQUE SUBSTRING) ---
  const [uniqueStr, setUniqueStr] = useState("abcabcbb");
  const [uRight, setURight] = useState(0);
  const [uLeft, setULeft] = useState(0);
  const [uLastSeen, setULastSeen] = useState({});
  const [uMaxLen, setUMaxLen] = useState(0);
  const [uBestSub, setUBestSub] = useState("");
  const [uLogs, setULogs] = useState(["Variable-size window initialized for string 'abcabcbb'."]);

  const handleUniqueStep = () => {
    if (uRight >= uniqueStr.length) {
      setULogs(prev => [`String scanning complete! Longest unique substring length = ${uMaxLen} ("${uBestSub}").`, ...prev.slice(0, 9)]);
      return;
    }
    const c = uniqueStr[uRight];
    let nextL = uLeft;

    if (uLastSeen[c] !== undefined) {
      const prevIdx = uLastSeen[c];
      nextL = Math.max(uLeft, prevIdx + 1);
      setULogs(prev => [
        `Duplicate '${c}' detected! Previous seen at ${prevIdx}. left updated to Math.max(${uLeft}, ${prevIdx + 1}) = ${nextL}.`,
        ...prev.slice(0, 9)
      ]);
    } else {
      setULogs(prev => [`Character '${c}' at ${uRight} is fresh in window [${nextL}..${uRight}].`, ...prev.slice(0, 9)]);
    }

    const nextSeen = { ...uLastSeen, [c]: uRight };
    setULastSeen(nextSeen);
    setULeft(nextL);

    const len = uRight - nextL + 1;
    if (len > uMaxLen) {
      setUMaxLen(len);
      setUBestSub(uniqueStr.slice(nextL, uRight + 1));
    }

    setURight(uRight + 1);
  };

  const handleUniqueReset = () => {
    setURight(0);
    setULeft(0);
    setULastSeen({});
    setUMaxLen(0);
    setUBestSub("");
    setULogs(["Reset unique substring simulator."]);
  };

  // --- WORKBENCH 6: MINIMUM WINDOW SUBSTRING (LEETCODE 76) ---
  const [minS] = useState("ADOBECODEBANC");
  const [minT] = useState("ABC");
  const [minL, setMinL] = useState(0);
  const [minR, setMinR] = useState(0);
  const [minFormed, setMinFormed] = useState(0);
  const [minWindowMap, setMinWindowMap] = useState({});
  const [minBestLen, setMinBestLen] = useState(Infinity);
  const [minBestStr, setMinBestStr] = useState("");
  const [minLogs, setMinLogs] = useState(["Minimum window substring ready. S='ADOBECODEBANC', T='ABC'."]);

  const minNeed = useMemo(() => {
    const map = {};
    for (const c of minT) map[c] = (map[c] || 0) + 1;
    return map;
  }, [minT]);

  const handleMinStep = () => {
    if (minR >= minS.length && minFormed < Object.keys(minNeed).length) {
      setMInLogsSafe("Scan finished! Optimal minimum window is '" + minBestStr + "' (length " + minBestLen + ").");
      return;
    }

    // If currently valid, shrink left
    if (minFormed === Object.keys(minNeed).length) {
      const curLen = minR - minL;
      if (curLen < minBestLen) {
        setMinBestLen(curLen);
        setMinBestStr(minS.slice(minL, minR));
      }
      const leftChar = minS[minL];
      const nextWindow = { ...minWindowMap, [leftChar]: minWindowMap[leftChar] - 1 };
      setMinWindowMap(nextWindow);

      let nextFormed = minFormed;
      if (minNeed[leftChar] && nextWindow[leftChar] < minNeed[leftChar]) {
        nextFormed--;
      }
      setMinFormed(nextFormed);
      setMinL(minL + 1);
      setMinLogs(prev => [`Window valid! Shrunk left from ${minL} ('${leftChar}'). Next formed: ${nextFormed}/${Object.keys(minNeed).length}.`, ...prev.slice(0, 9)]);
    } else {
      // Expand right
      const rightChar = minS[minR];
      const nextCount = (minWindowMap[rightChar] || 0) + 1;
      const nextWindow = { ...minWindowMap, [rightChar]: nextCount };
      setMinWindowMap(nextWindow);

      let nextFormed = minFormed;
      if (minNeed[rightChar] && nextCount === minNeed[rightChar]) {
        nextFormed++;
      }
      setMinFormed(nextFormed);
      setMinR(minR + 1);
      setMinLogs(prev => [`Expanded right to ${minR} ('${rightChar}'). Formed characters: ${nextFormed}/${Object.keys(minNeed).length}.`, ...prev.slice(0, 9)]);
    }
  };

  const setMInLogsSafe = (msg) => {
    setMinLogs(prev => [msg, ...prev.slice(0, 9)]);
  };

  const handleMinReset = () => {
    setMinL(0);
    setMinR(0);
    setMinFormed(0);
    setMinWindowMap({});
    setMinBestLen(Infinity);
    setMinBestStr("");
    setMinLogs(["Reset LeetCode 76 simulator."]);
  };

  // --- WORKBENCH 7: PREFIX SUMS & DIFFERENCE ARRAY ---
  const [pref1DArr] = useState([2, 4, 6, 8, 10]);
  const [qL, setQL] = useState(1);
  const [qR, setQR] = useState(3);
  const [qResult, setQResult] = useState(null);

  const pref1D = useMemo(() => {
    const p = [0];
    for (let i = 0; i < pref1DArr.length; i++) p.push(p[i] + pref1DArr[i]);
    return p;
  }, [pref1DArr]);

  const handle1DQuery = () => {
    if (qL < 0 || qR >= pref1DArr.length || qL > qR) return;
    const ans = pref1D[qR + 1] - pref1D[qL];
    setQResult({ ans, l: qL, r: qR, pRight: pref1D[qR + 1], pLeft: pref1D[qL] });
  };

  // --- WORKBENCH 8: KADANE'S ALGORITHM SIMULATOR ---
  const [kadaneArr] = useState([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  const [kadaneIdx, setKadaneIdx] = useState(0);
  const [kCurrentSum, setKCurrentSum] = useState(-2);
  const [kMaxSum, setKMaxSum] = useState(-2);
  const [kBestRange, setKBestRange] = useState([0, 0]);
  const [kStart, setKStart] = useState(0);
  const [kadaneLogs, setKadaneLogs] = useState(["Kadane's algorithm initialized with array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]. Initialized currentSum=arr[0]=-2."]);

  const handleKadaneStep = () => {
    const nextIdx = kadaneIdx + 1;
    if (nextIdx >= kadaneArr.length) {
      setKadaneLogs(prev => [`Kadane processing complete! Maximum subarray sum is ${kMaxSum} across range [${kBestRange[0]}..${kBestRange[1]}].`, ...prev.slice(0, 9)]);
      return;
    }
    const val = kadaneArr[nextIdx];
    let nextCur;
    let nextStart = kStart;

    if (val > kCurrentSum + val) {
      nextCur = val;
      nextStart = nextIdx;
      setKadaneLogs(prev => [`arr[${nextIdx}] (${val}) > currentSum + val (${kCurrentSum + val}) &rarr; Start NEW subarray at index ${nextIdx}.`, ...prev.slice(0, 9)]);
    } else {
      nextCur = kCurrentSum + val;
      setKadaneLogs(prev => [`Extended previous subarray: currentSum = ${kCurrentSum} + ${val} = ${nextCur}.`, ...prev.slice(0, 9)]);
    }

    let nextMax = kMaxSum;
    let nextBest = kBestRange;
    if (nextCur > kMaxSum) {
      nextMax = nextCur;
      nextBest = [nextStart, nextIdx];
      setKMaxSum(nextMax);
      setKBestRange(nextBest);
    }

    setKadaneIdx(nextIdx);
    setKCurrentSum(nextCur);
    setKStart(nextStart);
  };

  const handleKadaneReset = () => {
    setKadaneIdx(0);
    setKCurrentSum(kadaneArr[0]);
    setKMaxSum(kadaneArr[0]);
    setKBestRange([0, 0]);
    setKStart(0);
    setKadaneLogs(["Reset Kadane's algorithm simulator."]);
  };

  // Completion toggle helpers
  const toggleSectionComplete = (idx) => {
    setCompletedSections(prev => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem("prepspaces_java_m15_sections", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const toggleLabComplete = (id) => {
    setCompletedLabs(prev => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_java_m15_labs", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const completedSecCount = Object.values(completedSections).filter(Boolean).length;
  const completedLabCount = Object.values(completedLabs).filter(Boolean).length;

  const filteredSections = useMemo(() => {
    if (!searchFilter.trim()) return JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS;
    const term = searchFilter.toLowerCase();
    return JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS.filter(
      s => s.title.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
    );
  }, [searchFilter]);

  const filteredLabs = useMemo(() => {
    if (labTierFilter === "All") return LAB_ASSIGNMENTS;
    return LAB_ASSIGNMENTS.filter(lab => lab.tier === labTierFilter);
  }, [labTierFilter]);

  const handleQuizAnswer = (qId, optionIdx) => {
    if (showQuizResults) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* MODULE HEADER BAR */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/java/specialized-ds")}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Previous Module: Tries, Disjoint Sets & Specialized Structures"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  MODULE 15
                </span>
                <span className="text-xs text-slate-400 font-mono">Advanced Problem-Solving Patterns</span>
              </div>
              <h1 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                Two Pointers, Sliding Window & Prefix Sums
              </h1>
            </div>
          </div>

          {/* MODE SELECTOR */}
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "workbench"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sliders className="w-4 h-4" />
              8 Interactive Workbenches
            </button>
            <button
              onClick={() => setActiveTab("reader")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "reader"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Curriculum (24 Sections)
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "quiz"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Assessment Quiz (15)
            </button>
            <button
              onClick={() => setActiveTab("labs")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "labs"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Award className="w-4 h-4" />
              30 Practice Labs ({completedLabCount}/30)
            </button>
          </div>
        </div>
      </header>

      {/* SUB-HEADER PROGRESS BANNER */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-4">
            <span>Reading Progress: <strong className="text-emerald-400">{completedSecCount}</strong> of 24 Sections</span>
            <span>&bull;</span>
            <span>Practice Labs: <strong className="text-cyan-400">{completedLabCount}</strong> of 30 Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-300 font-mono text-[11px]">Two Pointers &bull; Sliding Window &bull; Prefix Sums</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
        {/* ========================================================================= */}
        {/* TAB 1: 8 INTERACTIVE WORKBENCHES                                          */}
        {/* ========================================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* TOOL SELECTOR PILLS */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800">
              {[
                { id: "two-pointers", label: "1. Two Pointers Studio", icon: Repeat },
                { id: "fast-slow", label: "2. Fast & Slow Cycle Detector", icon: Activity },
                { id: "same-direction", label: "3. In-Place Compaction", icon: GitMerge },
                { id: "fixed-window", label: "4. Fixed-Size Window (Size K)", icon: BinaryIcon },
                { id: "unique-sub", label: "5. Longest Unique Substring", icon: Search },
                { id: "min-window", label: "6. Min Window Substring (LC 76)", icon: Maximize2 },
                { id: "prefix-sums", label: "7. 1D/2D Prefix Sums", icon: Calculator },
                { id: "kadane", label: "8. Kadane's Max Subarray", icon: Compass }
              ].map(tool => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setWorkbenchTool(tool.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      workbenchTool === tool.id
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm"
                        : "bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tool.label}
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: TWO POINTERS STUDIO */}
            {workbenchTool === "two-pointers" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                        <Repeat className="w-4 h-4" />
                        Opposite-Direction Two Pointers
                      </h3>
                      <div className="flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 text-[11px]">
                        <button
                          onClick={() => { setTwoPtrMode("pair-sum"); handleTpReset(); }}
                          className={`px-2 py-0.5 rounded font-medium ${twoPtrMode === "pair-sum" ? "bg-emerald-600 text-white" : "text-slate-400"}`}
                        >
                          Pair Sum
                        </button>
                        <button
                          onClick={() => { setTwoPtrMode("reverse"); handleTpReset(); }}
                          className={`px-2 py-0.5 rounded font-medium ${twoPtrMode === "reverse" ? "bg-emerald-600 text-white" : "text-slate-400"}`}
                        >
                          Reversal
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {twoPtrMode === "pair-sum"
                        ? "Pointers start at extremes and move inward based on sorted sum comparison."
                        : "In-place array reversal swapping elements at left and right pointers in O(1) space."}
                    </p>

                    {twoPtrMode === "pair-sum" && (
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        <label className="text-xs text-slate-300 font-semibold block">Target Sum</label>
                        <input
                          type="number"
                          value={tpTarget}
                          onChange={(e) => { setTpTarget(parseInt(e.target.value) || 0); setTpFound(null); }}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleTpStep}
                        className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Step Next (L={tpLeft}, R={tpRight})
                      </button>
                      <button
                        onClick={handleTpReset}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {tpFound && (
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Target Found!
                        </div>
                        <div>arr[{tpFound.left}] ({tpFound.val1}) + arr[{tpFound.right}] ({tpFound.val2}) = {tpTarget}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Array Pointers Visualization</span>
                    <div className="grid grid-cols-7 gap-2">
                      {tpArray.map((val, idx) => {
                        const isL = idx === tpLeft;
                        const isR = idx === tpRight;
                        const isMatch = tpFound && (idx === tpFound.left || idx === tpFound.right);

                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                              isMatch
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold scale-105"
                                : isL || isR
                                ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300 ring-2 ring-cyan-500/30"
                                : "bg-slate-950 border-slate-800 text-slate-400"
                            }`}
                          >
                            <div className="text-[10px] text-slate-500">[{idx}]</div>
                            <div className="text-base font-bold my-1 text-white">{val}</div>
                            <div className="text-[10px] font-semibold text-cyan-400">
                              {isL && isR ? "L & R" : isL ? "L &rarr;" : isR ? "&larr; R" : "-"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Two Pointers Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {tpLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: FAST & SLOW CYCLE DETECTOR */}
            {workbenchTool === "fast-slow" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Floyd&apos;s Tortoise &amp; Hare (Cycle Detection)
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Slow pointer moves 1 step while fast pointer moves 2 steps. Inside a cycle of length C, they meet in at most C iterations.
                    </p>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                      <div><strong>Phase:</strong> <span className="text-cyan-400 font-mono">{cyclePhase === "detect" ? "1. Detect Cycle Existence" : "2. Locate Cycle Entrance"}</span></div>
                      <div><strong>Slow Pointer Node:</strong> <span className="text-emerald-400 font-bold">{cycleSlow}</span></div>
                      <div><strong>Fast Pointer Node:</strong> <span className="text-purple-400 font-bold">{cycleFast}</span></div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleCycleStep}
                        className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Advance Pointers (Step #{cycleStep + 1})
                      </button>
                      <button
                        onClick={handleCycleReset}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {cycleStartFound !== null && (
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cycle Entrance Found!
                        </div>
                        <div>The cycle begins at <strong>Node {cycleStartFound}</strong>.</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Linked List Graph (Node 5 points back to Node 2)</span>
                    <div className="grid grid-cols-6 gap-2">
                      {[0, 1, 2, 3, 4, 5].map((node) => {
                        const isS = node === cycleSlow;
                        const isF = node === cycleFast;
                        const inCycle = node >= 2;

                        return (
                          <div
                            key={node}
                            className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                              inCycle
                                ? "bg-amber-500/10 border-amber-500/40 text-amber-300"
                                : "bg-slate-950 border-slate-800 text-slate-300"
                            }`}
                          >
                            <div className="text-[10px] text-slate-400">{inCycle ? "Cycle Node" : "Linear Node"}</div>
                            <div className="text-base font-bold my-1 text-white">Node {node}</div>
                            <div className="text-[10px] space-y-0.5">
                              {isS && <div className="px-1 rounded bg-emerald-500/20 text-emerald-400">Slow</div>}
                              {isF && <div className="px-1 rounded bg-purple-500/20 text-purple-400">Fast</div>}
                              {!isS && !isF && <div className="text-slate-600">-</div>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Cycle Detector Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {cycleLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: SAME DIRECTION (REMOVE DUPES / MOVE ZEROES) */}
            {workbenchTool === "same-direction" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                        <GitMerge className="w-4 h-4" />
                        In-Place Array Compaction
                      </h3>
                      <div className="flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 text-[11px]">
                        <button
                          onClick={() => { setSameDirMode("remove-dupes"); handleSdReset(); }}
                          className={`px-2 py-0.5 rounded font-medium ${sameDirMode === "remove-dupes" ? "bg-emerald-600 text-white" : "text-slate-400"}`}
                        >
                          Remove Dupes
                        </button>
                        <button
                          onClick={() => { setSameDirMode("move-zeroes"); handleSdReset(); }}
                          className={`px-2 py-0.5 rounded font-medium ${sameDirMode === "move-zeroes" ? "bg-emerald-600 text-white" : "text-slate-400"}`}
                        >
                          Move Zeroes
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sameDirMode === "remove-dupes"
                        ? "Pointer i tracks boundary of unique elements; pointer j scans forward for new values."
                        : "Pointer i records write position for nonzero values; pointer j scans the array."}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={handleSdStep}
                        disabled={sdDone}
                        className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white text-xs font-semibold"
                      >
                        {sdDone ? "Completed" : `Step Forward (i=${sdI}, j=${sdJ})`}
                      </button>
                      <button
                        onClick={handleSdReset}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Array In-Place State</span>
                    <div className="grid grid-cols-8 gap-1.5">
                      {sdArray.map((val, idx) => {
                        const isI = idx === sdI;
                        const isJ = idx === sdJ;
                        const isUniquePrefix = idx <= sdI;

                        return (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all ${
                              isUniquePrefix
                                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-bold"
                                : "bg-slate-950 border-slate-800 text-slate-500"
                            }`}
                          >
                            <div className="text-[9px] text-slate-500">[{idx}]</div>
                            <div className="text-sm font-bold my-1 text-white">{val}</div>
                            <div className="text-[9px] font-semibold text-cyan-400">
                              {isI && isJ ? "i & j" : isI ? "i (write)" : isJ ? "j (scan)" : "-"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Compaction Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {sdLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: FIXED-SIZE SLIDING WINDOW (SIZE K) */}
            {workbenchTool === "fixed-window" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <BinaryIcon className="w-4 h-4" />
                      Fixed-Size Sliding Window (Size K)
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Slide window of width K=3 in O(1) time: add incoming <code className="text-emerald-400">arr[R]</code> and subtract outgoing <code className="text-rose-400">arr[R - K]</code>.
                    </p>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                      <div><strong>Current Window Sum:</strong> <span className="text-cyan-400 font-bold">{fixedCurrentSum}</span></div>
                      <div><strong>Max Window Sum Seen:</strong> <span className="text-emerald-400 font-bold">{fixedMaxSum}</span></div>
                      <div><strong>Optimal Subarray:</strong> <span className="text-amber-400 font-mono">[{fixedBestWindow[0]}..{fixedBestWindow[1]}]</span></div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleFixedStep}
                        className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Slide Window Right
                      </button>
                      <button
                        onClick={handleFixedReset}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Array Sliding Window Highlight (K=3)</span>
                    <div className="grid grid-cols-8 gap-2">
                      {fixedArray.map((val, idx) => {
                        const inWindow = idx > fixedRight - fixedK && idx <= fixedRight;
                        const isOutgoing = idx === fixedRight - fixedK;
                        const isIncoming = idx === fixedRight;

                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                              inWindow
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold scale-105"
                                : "bg-slate-950 border-slate-800 text-slate-400"
                            }`}
                          >
                            <div className="text-[10px] text-slate-500">[{idx}]</div>
                            <div className="text-base font-bold my-1 text-white">{val}</div>
                            <div className="text-[9px]">
                              {isIncoming ? "+IN" : inWindow ? "IN" : "-"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Window Step History</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {fixedLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: VARIABLE-SIZE (LONGEST UNIQUE SUBSTRING) */}
            {workbenchTool === "unique-sub" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      LeetCode 3: Longest Unique Substring
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Expand right while keeping all characters unique. When a duplicate appears, jump left forward using <code className="text-amber-400">Math.max(left, lastSeen + 1)</code>.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <label className="text-xs text-slate-300 font-semibold block">Input String</label>
                      <input
                        type="text"
                        value={uniqueStr}
                        onChange={(e) => { setUniqueStr(e.target.value.toLowerCase()); handleUniqueReset(); }}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                      />
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                      <div><strong>Active Window [L..R]:</strong> [{uLeft}..{Math.max(0, uRight - 1)}] ({uniqueStr.slice(uLeft, uRight)})</div>
                      <div><strong>Longest Unique Found:</strong> <span className="text-emerald-400 font-bold">{uMaxLen} (&quot;{uBestSub}&quot;)</span></div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleUniqueStep}
                        className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Step Next (R={uRight})
                      </button>
                      <button
                        onClick={handleUniqueReset}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">String Character Index Tracker</span>
                    <div className="flex flex-wrap gap-2">
                      {uniqueStr.split("").map((ch, idx) => {
                        const inWindow = idx >= uLeft && idx < uRight;
                        const isR = idx === uRight - 1;
                        const isL = idx === uLeft;

                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                              inWindow
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold scale-105"
                                : "bg-slate-950 border-slate-800 text-slate-500"
                            }`}
                          >
                            <div className="text-[10px] text-slate-500">{idx}</div>
                            <div className="text-lg font-bold my-1 text-white">{ch}</div>
                            <div className="text-[9px] text-cyan-400">
                              {isL && isR ? "L,R" : isL ? "L" : isR ? "R" : "-"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Algorithm Execution Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {uLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: MINIMUM WINDOW SUBSTRING (LC 76) */}
            {workbenchTool === "min-window" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Maximize2 className="w-4 h-4" />
                      LeetCode 76: Minimum Window Substring
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Two-phase sliding window: expand right until <code className="text-emerald-400">formed == required</code>, then shrink left to find minimal valid length.
                    </p>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                      <div><strong>Target Characters (T):</strong> &quot;{minT}&quot; (need: {Object.keys(minNeed).length} unique)</div>
                      <div><strong>Formed Count:</strong> <span className="text-cyan-400 font-bold">{minFormed} / {Object.keys(minNeed).length}</span></div>
                      <div><strong>Best Window Found:</strong> <span className="text-emerald-400 font-bold">{minBestStr || "None"} ({minBestLen === Infinity ? 0 : minBestLen})</span></div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleMinStep}
                        className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Step Next (L={minL}, R={minR})
                      </button>
                      <button
                        onClick={handleMinReset}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">String S Window View</span>
                    <div className="flex flex-wrap gap-1.5">
                      {minS.split("").map((ch, idx) => {
                        const inWindow = idx >= minL && idx < minR;
                        const isTChar = !!minNeed[ch];

                        return (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all ${
                              inWindow
                                ? isTChar
                                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold"
                                  : "bg-slate-900 border-slate-700 text-slate-300"
                                : "bg-slate-950 border-slate-800 text-slate-600"
                            }`}
                          >
                            <div className="text-[9px] text-slate-500">{idx}</div>
                            <div className="text-sm font-bold my-0.5">{ch}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Min Window Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {minLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 7: 1D/2D PREFIX SUMS */}
            {workbenchTool === "prefix-sums" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Calculator className="w-4 h-4" />
                      1D Prefix Sum Query Engine
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Precompute cumulative totals in O(N). Query any range [L, R] in strictly O(1) time using <code className="text-cyan-400">P[R+1] - P[L]</code>.
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                      <div>
                        <span className="text-[11px] text-slate-400 block mb-1">Left Index L (0..4)</span>
                        <input
                          type="number"
                          min="0"
                          max="4"
                          value={qL}
                          onChange={(e) => setQL(parseInt(e.target.value) || 0)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block mb-1">Right Index R (0..4)</span>
                        <input
                          type="number"
                          min="0"
                          max="4"
                          value={qR}
                          onChange={(e) => setQR(parseInt(e.target.value) || 0)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handle1DQuery}
                      className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                    >
                      Calculate Range Sum [{qL}..{qR}]
                    </button>

                    {qResult && (
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 space-y-1">
                        <div className="font-bold">Sum([{qResult.l}..{qResult.r}]) = {qResult.ans}</div>
                        <div className="text-[11px] text-slate-300">
                          Formula: P[{qResult.r + 1}] ({qResult.pRight}) - P[{qResult.l}] ({qResult.pLeft}) = {qResult.ans} in O(1)
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <span className="text-xs font-semibold text-slate-300">Prefix Array Construction</span>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono text-center border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="p-2 text-left">Index</th>
                            {pref1D.map((_, i) => (
                              <th key={i} className="p-2">[{i}]</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-800/50">
                            <td className="p-2 text-left font-semibold text-slate-300">arr[i]</td>
                            <td className="p-2 text-slate-600">-</td>
                            {pref1DArr.map((v, idx) => (
                              <td key={idx} className="p-2 font-bold text-amber-400">{v}</td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-2 text-left font-semibold text-slate-300">Prefix P[i]</td>
                            {pref1D.map((p, idx) => (
                              <td key={idx} className="p-2 font-bold text-emerald-400">{p}</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 8: KADANE'S ALGORITHM */}
            {workbenchTool === "kadane" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      Kadane&apos;s Max Subarray Sum
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      At each element, choose whether to extend the previous subarray or start fresh: <code className="text-amber-400">cur = max(x, cur + x)</code>.
                    </p>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                      <div><strong>Current Subarray Sum:</strong> <span className="text-cyan-400 font-bold">{kCurrentSum}</span></div>
                      <div><strong>All-Time Max Sum:</strong> <span className="text-emerald-400 font-bold">{kMaxSum}</span></div>
                      <div><strong>Best Subarray:</strong> <span className="text-amber-400 font-mono">[{kBestRange[0]}..{kBestRange[1]}]</span></div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleKadaneStep}
                        className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        Step Next (Idx={kadaneIdx})
                      </button>
                      <button
                        onClick={handleKadaneReset}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-300">Array Processing &amp; Subarray Highlight</span>
                    <div className="grid grid-cols-9 gap-1.5">
                      {kadaneArr.map((val, idx) => {
                        const inBest = idx >= kBestRange[0] && idx <= kBestRange[1];
                        const isCur = idx === kadaneIdx;

                        return (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all ${
                              inBest
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold"
                                : isCur
                                ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300"
                                : "bg-slate-950 border-slate-800 text-slate-400"
                            }`}
                          >
                            <div className="text-[9px] text-slate-500">[{idx}]</div>
                            <div className="text-sm font-bold my-1 text-white">{val}</div>
                            <div className="text-[9px]">{isCur ? "ACTIVE" : inBest ? "MAX" : "-"}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Kadane Log</span>
                    <div className="font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                      {kadaneLogs.map((log, idx) => (
                        <div key={idx} className="border-b border-slate-850 pb-1">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CURRICULUM READER (24 SECTIONS)                                    */}
        {/* ========================================================================= */}
        {activeTab === "reader" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 sticky top-20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Index</span>
                  <span className="text-xs text-emerald-400 font-mono">{filteredSections.length} Sections</span>
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filter sections..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 dark-scrollbar">
                  {filteredSections.map((sec) => {
                    const isDone = !!completedSections[sec.id];
                    const isActive = activeSectionId === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setActiveSectionId(sec.id)}
                        title={sec.title}
                        className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                          isActive
                            ? "bg-emerald-600 text-white font-medium shadow-md shadow-emerald-600/20"
                            : isDone
                            ? "bg-slate-950/70 text-slate-300 hover:bg-slate-850"
                            : "bg-slate-950 text-slate-400 hover:bg-slate-850 hover:text-slate-200"
                        }`}
                      >
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSectionComplete(sec.id);
                          }}
                          className="mt-0.5 shrink-0"
                        >
                          {isDone ? (
                            <CheckSquare className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-emerald-400"}`} />
                          ) : (
                            <Square className="w-3.5 h-3.5 text-slate-600 hover:text-slate-400" />
                          )}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="break-words whitespace-normal leading-snug font-medium">{sec.title}</div>
                          <div className={`text-[10px] mt-0.5 line-clamp-1 ${isActive ? "text-emerald-200" : "text-slate-500"}`}>
                            {sec.category}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              {(() => {
                const currentSec = JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS.find(s => s.id === activeSectionId) || JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS[0];
                const isDone = !!completedSections[currentSec.id];

                return (
                  <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                      <div>
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {currentSec.category}
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
                          {currentSec.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => toggleSectionComplete(currentSec.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                          isDone
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                        }`}
                      >
                        {isDone ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            Completed
                          </>
                        ) : (
                          <>
                            <Square className="w-4 h-4 text-slate-400" />
                            Mark as Done
                          </>
                        )}
                      </button>
                    </div>

                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm">
                      {currentSec.content}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                      <button
                        disabled={currentSec.id === 0}
                        onClick={() => setActiveSectionId(Math.max(0, currentSec.id - 1))}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 disabled:opacity-40 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" /> Previous Section
                      </button>
                      <button
                        disabled={currentSec.id >= JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS.length - 1}
                        onClick={() => setActiveSectionId(Math.min(JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS.length - 1, currentSec.id + 1))}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-xs text-white font-semibold flex items-center gap-2"
                      >
                        Next Section <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                );
              })()}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: ASSESSMENT QUIZ (15 QUESTIONS)                                     */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-400" />
                  Module 15 Knowledge Assessment
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  15 questions covering Two Pointers, Sliding Windows, Prefix Sums, Difference Arrays, and Kadane&apos;s Algorithm.
                </p>
              </div>
              <div className="flex items-center gap-3">
                {showQuizResults ? (
                  <button
                    onClick={() => { setUserAnswers({}); setShowQuizResults(false); }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setShowQuizResults(true)}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-xs font-bold text-white transition-all shadow-lg shadow-emerald-600/30"
                  >
                    Submit Assessment ({Object.keys(userAnswers).length}/15 Answered)
                  </button>
                )}
              </div>
            </div>

            {showQuizResults && (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Your Score</div>
                  <div className="text-3xl font-bold text-white mt-1">
                    {calculateScore()} / {QUIZ_QUESTIONS.length}
                    <span className="text-sm text-slate-400 font-normal ml-2">
                      ({Math.round((calculateScore() / QUIZ_QUESTIONS.length) * 100)}%)
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-300">
                  {calculateScore() >= 12 ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-5 h-5" /> Master Level: Superb DSA Pattern Proficiency!
                    </span>
                  ) : (
                    <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-5 h-5" /> Review the curriculum sections to strengthen key techniques!
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const selected = userAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isCorrect = isAnswered && selected === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl border transition-all ${
                      showQuizResults
                        ? isCorrect
                          ? "bg-emerald-500/5 border-emerald-500/30"
                          : "bg-rose-500/5 border-rose-500/30"
                        : "bg-slate-900 border-slate-800"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 space-y-3">
                        <p className="text-sm font-semibold text-white">{q.question}</p>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const isThisOption = selected === optIdx;
                            let btnStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850";

                            if (showQuizResults) {
                              if (optIdx === q.correct) {
                                btnStyle = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-semibold";
                              } else if (isThisOption) {
                                btnStyle = "bg-rose-500/20 border-rose-500/50 text-rose-300";
                              } else {
                                btnStyle = "bg-slate-950/50 border-slate-850 text-slate-500";
                              }
                            } else if (isThisOption) {
                              btnStyle = "bg-emerald-600/30 border-emerald-500 text-emerald-200 font-semibold";
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={showQuizResults}
                                onClick={() => handleQuizAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl text-xs border transition-all flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {showQuizResults && optIdx === q.correct && (
                                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {showQuizResults && (
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                            <strong className="text-emerald-400">Explanation: </strong>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: 30 PRACTICE PROBLEMS & LABS TRACKER                                */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  30 Practice Problems &amp; Implementation Labs
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Categorized into 4 difficulty tiers: Fundamentals, Sliding Window, Prefix Sums, and Advanced Interview Patterns.
                </p>
              </div>

              {/* Tier Filters */}
              <div className="flex items-center gap-2">
                {["All", "Level 1", "Level 2", "Level 3", "Level 4"].map(tier => (
                  <button
                    key={tier}
                    onClick={() => setLabTierFilter(tier)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      labTierFilter === tier
                        ? "bg-emerald-600 text-white font-bold"
                        : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLabs.map((lab) => {
                const isCompleted = !!completedLabs[lab.id];
                return (
                  <div
                    key={lab.id}
                    onClick={() => toggleLabComplete(lab.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isCompleted
                        ? "bg-emerald-500/10 border-emerald-500/30 text-slate-200"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                            lab.tier === "Level 1"
                              ? "bg-cyan-500/20 text-cyan-400"
                              : lab.tier === "Level 2"
                              ? "bg-blue-500/20 text-blue-400"
                              : lab.tier === "Level 3"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          {lab.tier}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">Problem #{lab.id}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">{lab.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{lab.desc}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className={isCompleted ? "text-emerald-400 font-semibold" : "text-slate-500"}>
                        {isCompleted ? "✓ Solved" : "Mark as Solved"}
                      </span>
                      {isCompleted ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* MODULE FOOTER NAVIGATION */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <ModuleNav currentModuleId="two-pointers-sliding-window" nextRoute="/learning/java/greedy-algorithms" />
        </div>
      </footer>
    </div>
  );
}
