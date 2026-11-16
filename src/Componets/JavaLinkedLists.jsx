import React, { useState, useMemo, useEffect, useRef } from "react";
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
  Unlink,
  Radio,
  ChevronsRight,
  GitMerge,
  GitCommit,
  CircleDot,
  FastForward,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaLinkedListsSections from "./JavaLinkedListsSections";

export default function JavaLinkedLists() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java");

  // View mode: 'interactive' | 'reader'
  const [viewMode, setViewMode] = useState("interactive");
  const [activeTab, setActiveTab] = useState("visualizer");
  const [copiedCode, setCopiedCode] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [activeQuizFilter, setActiveQuizFilter] = useState("all");

  // Lab progress
  const [completedLabs, setCompletedLabs] = useState({});

  // -------------------------------------------------------------
  // WORKBENCH 1: Linked List Visualizer State (Singly / Doubly / Circular)
  // -------------------------------------------------------------
  const [listType, setListType] = useState("singly"); // "singly" | "doubly" | "circular"
  const [nodes, setNodes] = useState([10, 20, 30, 40]);
  const [insertVal, setInsertVal] = useState("25");
  const [insertIdx, setInsertIdx] = useState("2");
  const [deleteIdx, setDeleteIdx] = useState("1");
  const [searchTarget, setSearchTarget] = useState("30");
  const [highlightIdx, setHighlightIdx] = useState(null);
  const [animLog, setAnimLog] = useState("Linked list initialized with 4 nodes.");

  const resetList = (type = listType) => {
    setListType(type);
    setNodes([10, 20, 30, 40]);
    setHighlightIdx(null);
    setAnimLog(`Reset to standard ${type} linked list [10, 20, 30, 40].`);
  };

  const handleAddFirst = () => {
    const val = parseInt(insertVal, 10);
    if (isNaN(val)) return;
    setNodes([val, ...nodes]);
    setHighlightIdx(0);
    setAnimLog(`Prepend O(1): Created Node(${val}), pointed next -> ${nodes[0] || "null"}, updated head.`);
  };

  const handleAddLast = () => {
    const val = parseInt(insertVal, 10);
    if (isNaN(val)) return;
    setNodes([...nodes, val]);
    setHighlightIdx(nodes.length);
    setAnimLog(`Append: Created Node(${val}), pointed tail.next -> ${val}, updated tail.`);
  };

  const handleInsertAt = () => {
    const val = parseInt(insertVal, 10);
    const idx = parseInt(insertIdx, 10);
    if (isNaN(val) || isNaN(idx) || idx < 0 || idx > nodes.length) {
      setAnimLog(`Invalid index ${idx}. Valid range: 0 to ${nodes.length}.`);
      return;
    }
    const nextList = [...nodes];
    nextList.splice(idx, 0, val);
    setNodes(nextList);
    setHighlightIdx(idx);
    setAnimLog(`Insert at index ${idx}: Traversed ${idx} steps O(n), updated predecessor.next -> ${val}.`);
  };

  const handleRemoveFirst = () => {
    if (nodes.length === 0) {
      setAnimLog("List is already empty!");
      return;
    }
    const val = nodes[0];
    setNodes(nodes.slice(1));
    setHighlightIdx(null);
    setAnimLog(`Remove head O(1): Removed Node(${val}), shifted head to ${nodes[1] ?? "null"}.`);
  };

  const handleRemoveLast = () => {
    if (nodes.length === 0) {
      setAnimLog("List is already empty!");
      return;
    }
    const val = nodes[nodes.length - 1];
    setNodes(nodes.slice(0, -1));
    setHighlightIdx(null);
    setAnimLog(`Remove tail (${listType === "doubly" ? "O(1) with prev pointer" : "O(n) traversal to find predecessor"}): Removed Node(${val}).`);
  };

  const handleRemoveAt = () => {
    const idx = parseInt(deleteIdx, 10);
    if (isNaN(idx) || idx < 0 || idx >= nodes.length) {
      setAnimLog(`Invalid delete index ${idx}. Valid range: 0 to ${nodes.length - 1}.`);
      return;
    }
    const val = nodes[idx];
    const nextList = nodes.filter((_, i) => i !== idx);
    setNodes(nextList);
    setHighlightIdx(null);
    setAnimLog(`Remove at index ${idx}: Unlinked Node(${val}), predecessor now connects directly to successor.`);
  };

  const handleSearch = () => {
    const target = parseInt(searchTarget, 10);
    if (isNaN(target)) return;
    let step = 0;
    const interval = setInterval(() => {
      if (step < nodes.length) {
        setHighlightIdx(step);
        if (nodes[step] === target) {
          setAnimLog(`Target ${target} FOUND at index ${step}!`);
          clearInterval(interval);
        } else {
          setAnimLog(`Inspecting index ${step}: Node value is ${nodes[step]} != ${target}. Advancing pointer...`);
          step++;
        }
      } else {
        setHighlightIdx(null);
        setAnimLog(`Target ${target} NOT FOUND after checking all ${nodes.length} nodes (O(n)).`);
        clearInterval(interval);
      }
    }, 450);
  };

  // -------------------------------------------------------------
  // WORKBENCH 2: Iterative Reversal Studio (prev, curr, next)
  // -------------------------------------------------------------
  const [revStep, setRevStep] = useState(0);
  const [revPlaying, setRevPlaying] = useState(false);
  const revOriginal = useMemo(() => [10, 20, 30, 40, 50], []);

  // Precompute step-by-step states for iterative reversal of [10, 20, 30, 40, 50]
  const revStepsData = useMemo(() => {
    return [
      {
        step: 0,
        prev: null,
        curr: 0,
        next: null,
        links: [1, 2, 3, 4, null],
        desc: "Initial State: prev = null, curr = head (Node 10). Ready to begin traversal.",
        pseudo: "Node prev = null; Node curr = head;"
      },
      {
        step: 1,
        prev: null,
        curr: 0,
        next: 1,
        links: [1, 2, 3, 4, null],
        desc: "Step 1: Save next node. next = curr.next (Node 20).",
        pseudo: "Node next = curr.next;"
      },
      {
        step: 2,
        prev: null,
        curr: 0,
        next: 1,
        links: [null, 2, 3, 4, null],
        desc: "Step 2: Reverse link. curr.next = prev (points 10 -> null).",
        pseudo: "curr.next = prev;"
      },
      {
        step: 3,
        prev: 0,
        curr: 1,
        next: 1,
        links: [null, 2, 3, 4, null],
        desc: "Step 3: Advance pointers. prev = curr (10), curr = next (20).",
        pseudo: "prev = curr; curr = next;"
      },
      {
        step: 4,
        prev: 0,
        curr: 1,
        next: 2,
        links: [null, 2, 3, 4, null],
        desc: "Step 4: Save next node. next = curr.next (Node 30).",
        pseudo: "Node next = curr.next;"
      },
      {
        step: 5,
        prev: 0,
        curr: 1,
        next: 2,
        links: [null, 0, 3, 4, null],
        desc: "Step 5: Reverse link. curr.next = prev (points 20 -> 10).",
        pseudo: "curr.next = prev;"
      },
      {
        step: 6,
        prev: 1,
        curr: 2,
        next: 2,
        links: [null, 0, 3, 4, null],
        desc: "Step 6: Advance pointers. prev = curr (20), curr = next (30).",
        pseudo: "prev = curr; curr = next;"
      },
      {
        step: 7,
        prev: 1,
        curr: 2,
        next: 3,
        links: [null, 0, 3, 4, null],
        desc: "Step 7: Save next node. next = curr.next (Node 40).",
        pseudo: "Node next = curr.next;"
      },
      {
        step: 8,
        prev: 1,
        curr: 2,
        next: 3,
        links: [null, 0, 1, 4, null],
        desc: "Step 8: Reverse link. curr.next = prev (points 30 -> 20).",
        pseudo: "curr.next = prev;"
      },
      {
        step: 9,
        prev: 2,
        curr: 3,
        next: 3,
        links: [null, 0, 1, 4, null],
        desc: "Step 9: Advance pointers. prev = curr (30), curr = next (40).",
        pseudo: "prev = curr; curr = next;"
      },
      {
        step: 10,
        prev: 2,
        curr: 3,
        next: 4,
        links: [null, 0, 1, 4, null],
        desc: "Step 10: Save next node. next = curr.next (Node 50).",
        pseudo: "Node next = curr.next;"
      },
      {
        step: 11,
        prev: 2,
        curr: 3,
        next: 4,
        links: [null, 0, 1, 2, null],
        desc: "Step 11: Reverse link. curr.next = prev (points 40 -> 30).",
        pseudo: "curr.next = prev;"
      },
      {
        step: 12,
        prev: 3,
        curr: 4,
        next: 4,
        links: [null, 0, 1, 2, null],
        desc: "Step 12: Advance pointers. prev = curr (40), curr = next (50).",
        pseudo: "prev = curr; curr = next;"
      },
      {
        step: 13,
        prev: 3,
        curr: 4,
        next: null,
        links: [null, 0, 1, 2, null],
        desc: "Step 13: Save next node. next = curr.next (null).",
        pseudo: "Node next = curr.next;"
      },
      {
        step: 14,
        prev: 3,
        curr: 4,
        next: null,
        links: [null, 0, 1, 2, 3],
        desc: "Step 14: Reverse link. curr.next = prev (points 50 -> 40).",
        pseudo: "curr.next = prev;"
      },
      {
        step: 15,
        prev: 4,
        curr: null,
        next: null,
        links: [null, 0, 1, 2, 3],
        desc: "Final Step: curr == null. head = prev (Node 50). Reversal complete in O(n) time and O(1) space!",
        pseudo: "return prev; // new head is Node 50"
      }
    ];
  }, []);

  useEffect(() => {
    let timer;
    if (revPlaying) {
      timer = setInterval(() => {
        setRevStep((s) => {
          if (s >= revStepsData.length - 1) {
            setRevPlaying(false);
            return s;
          }
          return s + 1;
        });
      }, 1200);
    }
    return () => clearInterval(timer);
  }, [revPlaying, revStepsData.length]);

  // -------------------------------------------------------------
  // WORKBENCH 3: Slow & Fast Pointers (Find Middle Node)
  // -------------------------------------------------------------
  const [midListMode, setMidListMode] = useState("odd"); // "odd" (5 items) | "even" (6 items)
  const [midPointerVariant, setMidPointerVariant] = useState("second"); // "second" | "first"
  const [midStep, setMidStep] = useState(0);

  const midList = useMemo(() => {
    return midListMode === "odd" ? [10, 20, 30, 40, 50] : [10, 20, 30, 40, 50, 60];
  }, [midListMode]);

  const midHistory = useMemo(() => {
    const hist = [];
    let slow = 0;
    let fast = midPointerVariant === "first" ? (midList.length > 1 ? 1 : null) : 0;
    hist.push({
      slow,
      fast,
      desc: `Initial: slow = 0 (Node ${midList[0]}), fast = ${fast !== null ? `${fast} (Node ${midList[fast]})` : "null"}.`
    });

    while (fast !== null && fast < midList.length && fast + 1 < midList.length) {
      slow += 1;
      fast += 2;
      hist.push({
        slow,
        fast: fast < midList.length ? fast : null,
        desc: `Iteration: slow -> ${slow} (${midList[slow]}), fast -> ${fast < midList.length ? `${fast} (${midList[fast]})` : "past end (null)"}.`
      });
    }
    hist.push({
      slow,
      fast: null,
      desc: `Terminated! Fast pointer cannot advance 2 steps. Middle node is Node ${midList[slow]} (index ${slow}).`
    });
    return hist;
  }, [midList, midPointerVariant]);

  // -------------------------------------------------------------
  // WORKBENCH 4: Floyd's Cycle Detection & Cycle Start Studio
  // -------------------------------------------------------------
  const cycleList = useMemo(() => [10, 20, 30, 40, 50, 60], []);
  const [cycleTargetIdx, setCycleTargetIdx] = useState(2); // node 50 (index 5) connects to node 30 (index 2)
  const [cyclePhase, setCyclePhase] = useState("detect"); // "detect" | "start"
  const [floydStep, setFloydStep] = useState(0);

  const floydSim = useMemo(() => {
    // Generate trace for detection phase
    const trace = [];
    let slow = 0;
    let fast = 0;
    const hasLoop = cycleTargetIdx !== -1;
    let met = false;
    let meetingNode = null;

    trace.push({
      phase: 1,
      slow: 0,
      fast: 0,
      desc: "Phase 1 Start: slow = 0 (Head), fast = 0 (Head). Both pointers initialized at head."
    });

    const getNext = (idx) => {
      if (idx === cycleList.length - 1) {
        return hasLoop ? cycleTargetIdx : null;
      }
      return idx + 1;
    };

    let stepCount = 0;
    while (stepCount < 25) {
      stepCount++;
      const nextSlow = getNext(slow);
      const fast1 = getNext(fast);
      const fast2 = fast1 !== null ? getNext(fast1) : null;

      if (fast2 === null || fast1 === null) {
        trace.push({
          phase: 1,
          slow: nextSlow,
          fast: null,
          desc: "Fast pointer reached null! No cycle detected in this linked list (acyclic)."
        });
        break;
      }

      slow = nextSlow;
      fast = fast2;

      if (slow === fast) {
        met = true;
        meetingNode = slow;
        trace.push({
          phase: 1,
          slow,
          fast,
          desc: `COLLISION! Fast caught slow at Node ${cycleList[slow]} (index ${slow}). Cycle confirmed!`
        });
        break;
      } else {
        trace.push({
          phase: 1,
          slow,
          fast,
          desc: `Advancing: slow -> Node ${cycleList[slow]}, fast -> Node ${cycleList[fast]}.`
        });
      }
    }

    // Phase 2: cycle start
    if (met) {
      let p1 = 0; // head
      let p2 = meetingNode;
      trace.push({
        phase: 2,
        p1,
        p2,
        desc: `Phase 2 Start: Reset p1 to Head (Node ${cycleList[0]}); keep p2 at meeting point Node ${cycleList[p2]}. Both advance 1 step/iteration.`
      });

      while (p1 !== p2) {
        p1 = getNext(p1);
        p2 = getNext(p2);
        if (p1 === p2) {
          trace.push({
            phase: 2,
            p1,
            p2,
            desc: `CYCLE ENTRY DISCOVERED! p1 and p2 met at Node ${cycleList[p1]} (index ${p1})! Cycle begins here.`
          });
          break;
        } else {
          trace.push({
            phase: 2,
            p1,
            p2,
            desc: `Phase 2 step: p1 -> Node ${cycleList[p1]}, p2 -> Node ${cycleList[p2]}.`
          });
        }
      }
    }

    return trace;
  }, [cycleList, cycleTargetIdx]);

  // -------------------------------------------------------------
  // WORKBENCH 5: Merge Two Sorted Lists Studio
  // -------------------------------------------------------------
  const [mergeL1, setMergeL1] = useState([1, 3, 5, 7]);
  const [mergeL2, setMergeL2] = useState([2, 4, 6, 8]);
  const [mergeStep, setMergeStep] = useState(0);

  const mergeHistory = useMemo(() => {
    const hist = [];
    let p1 = 0;
    let p2 = 0;
    const merged = [];

    hist.push({
      p1,
      p2,
      merged: [...merged],
      desc: "Initial: dummy = 0. Compare front of List 1 and List 2."
    });

    while (p1 < mergeL1.length && p2 < mergeL2.length) {
      if (mergeL1[p1] <= mergeL2[p2]) {
        merged.push(mergeL1[p1]);
        hist.push({
          p1: p1 + 1,
          p2,
          merged: [...merged],
          desc: `Compared ${mergeL1[p1]} <= ${mergeL2[p2]}: Attached ${mergeL1[p1]} from List 1 to current.next. Advanced p1.`
        });
        p1++;
      } else {
        merged.push(mergeL2[p2]);
        hist.push({
          p1,
          p2: p2 + 1,
          merged: [...merged],
          desc: `Compared ${mergeL1[p1]} > ${mergeL2[p2]}: Attached ${mergeL2[p2]} from List 2 to current.next. Advanced p2.`
        });
        p2++;
      }
    }

    while (p1 < mergeL1.length) {
      merged.push(mergeL1[p1]);
      hist.push({
        p1: p1 + 1,
        p2,
        merged: [...merged],
        desc: `List 2 exhausted: Attached remainder of List 1 (${mergeL1[p1]}).`
      });
      p1++;
    }

    while (p2 < mergeL2.length) {
      merged.push(mergeL2[p2]);
      hist.push({
        p1,
        p2: p2 + 1,
        merged: [...merged],
        desc: `List 1 exhausted: Attached remainder of List 2 (${mergeL2[p2]}).`
      });
      p2++;
    }

    hist.push({
      p1,
      p2,
      merged: [...merged],
      desc: `Merge complete! Total elements merged: ${merged.length} in O(m + n) time and O(1) auxiliary space (relinked nodes).`
    });

    return hist;
  }, [mergeL1, mergeL2]);

  // -------------------------------------------------------------
  // WORKBENCH 6: Two-Pointer Intersection Studio
  // -------------------------------------------------------------
  const [interStep, setInterStep] = useState(0);
  const interCommon = useMemo(() => [30, 40, 50], []);
  const interA = useMemo(() => [10, 20], []);
  const interB = useMemo(() => [5], []);

  const interHistory = useMemo(() => {
    // List A: [10, 20, 30, 40, 50]
    // List B: [5, 30, 40, 50]
    const fullA = [...interA, ...interCommon];
    const fullB = [...interB, ...interCommon];
    const trace = [];

    // Pointer sequences:
    // Path A: A elements -> Common -> null -> B elements -> Common
    // Path B: B elements -> Common -> null -> A elements -> Common
    const pathA = [...fullA.map((v, i) => ({ id: `A_${i}`, val: v, label: `A[${i}]` })), { id: "nullA", val: "null", label: "null" }, ...fullB.map((v, i) => ({ id: `B_${i}`, val: v, label: `B[${i}]` }))];
    const pathB = [...fullB.map((v, i) => ({ id: `B_${i}`, val: v, label: `B[${i}]` })), { id: "nullB", val: "null", label: "null" }, ...fullA.map((v, i) => ({ id: `A_${i}`, val: v, label: `A[${i}]` }))];

    const len = Math.max(pathA.length, pathB.length);
    for (let i = 0; i < len; i++) {
      const nodeA = pathA[i] || { id: "done", val: "null", label: "null" };
      const nodeB = pathB[i] || { id: "done", val: "null", label: "null" };
      const match = nodeA.val === nodeB.val && nodeA.val !== "null" && (nodeA.id.startsWith("A_") || nodeA.id.startsWith("B_")) && nodeA.val >= 30;

      trace.push({
        step: i,
        nodeA,
        nodeB,
        match,
        desc: match
          ? `MATCH FOUND! Both pointers reached shared Node ${nodeA.val} at the same time after traveling equal distance (a + b - c)!`
          : `Step ${i}: Pointer A is at ${nodeA.label} (${nodeA.val}), Pointer B is at ${nodeB.label} (${nodeB.val}).`
      });

      if (match) break;
    }
    return trace;
  }, [interA, interB, interCommon]);

  // -------------------------------------------------------------
  // QUIZ DATA (15 Comprehensive MCQs matching Section 68 & 71)
  // -------------------------------------------------------------
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      q: "What is a linked list?",
      options: [
        "A collection of sorted values stored only in arrays",
        "A sequence of nodes connected through references",
        "A mathematical tree",
        "A fixed-size primitive data structure"
      ],
      correct: 1,
      exp: "A linked list is a linear data structure composed of discrete node objects linked dynamically by object references."
    },
    {
      id: 2,
      q: "What does a singly linked-list node contain?",
      options: [
        "Only data",
        "Data and previous reference",
        "Data and next reference",
        "Two next references"
      ],
      correct: 2,
      exp: "A singly linked node stores its payload value (`data`) and a reference to the succeeding node (`next`)."
    },
    {
      id: 3,
      q: "What is the time complexity of inserting at the head of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correct: 0,
      exp: "Prepending at the head requires creating a node, pointing its next to the current head, and updating head — an O(1) constant-time operation."
    },
    {
      id: 4,
      q: "What is the time complexity of accessing an arbitrary index in a singly linked list?",
      options: ["O(1)", "O(log n)", "O(n)", "O(2ⁿ)"],
      correct: 2,
      exp: "Because nodes are allocated dynamically on the heap without contiguous memory indexing, accessing index k requires traversing k links sequentially, taking O(n) worst-case time."
    },
    {
      id: 5,
      q: "Which linked list supports bidirectional traversal (both forward and backward)?",
      options: ["Singly linked list", "Doubly linked list", "Array", "Stack"],
      correct: 1,
      exp: "A doubly linked list stores both `prev` and `next` object references in each node, enabling O(1) bidirectional navigation."
    },
    {
      id: 6,
      q: "What is special about a circular singly linked list?",
      options: [
        "Its tail points to null",
        "Its tail points to the head",
        "It has no nodes",
        "It has no data"
      ],
      correct: 1,
      exp: "In a circular linked list, the final node (tail) connects back to the first node (head) instead of referencing null."
    },
    {
      id: 7,
      q: "Which algorithm detects a cycle using slow and fast pointers?",
      options: ["Binary search", "Merge sort", "Floyd's algorithm", "Counting sort"],
      correct: 2,
      exp: "Floyd's cycle detection (tortoise and hare algorithm) employs a slow pointer advancing 1 step and a fast pointer advancing 2 steps."
    },
    {
      id: 8,
      q: "How many steps does the fast pointer move during each iteration of Floyd's algorithm?",
      options: ["One", "Two", "Three", "Four"],
      correct: 1,
      exp: "The fast pointer moves two nodes per iteration (`fast = fast.next.next`), catching the slow pointer if a loop exists."
    },
    {
      id: 9,
      q: "What is the auxiliary space complexity of iterative linked-list reversal?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correct: 2,
      exp: "Iterative reversal modifies pointers in-place using only three reference variables (`prev`, `curr`, `next`), requiring O(1) auxiliary space."
    },
    {
      id: 10,
      q: "How can the middle of a linked list be found efficiently in a single pass?",
      options: ["Sorting", "Slow and fast pointers", "HashMap only", "Binary search"],
      correct: 1,
      exp: "When fast moves twice as fast as slow, slow lands exactly on the middle node when fast reaches the end of the list."
    },
    {
      id: 11,
      q: "How should node identity be checked when finding two lists' intersection?",
      options: [
        "Compare their data values",
        "Compare their indices",
        "Compare references using ==",
        "Sort both lists"
      ],
      correct: 2,
      exp: "An intersection occurs when two lists share the exact same physical heap node object; reference equality `nodeA == nodeB` must be checked."
    },
    {
      id: 12,
      q: "What is the time complexity of merging two sorted singly linked lists of lengths m and n?",
      options: ["O(log n)", "O(m + n)", "O(n²)", "O(1)"],
      correct: 1,
      exp: "Merging two sorted lists examines each node from both lists at most once to relink them, resulting in linear O(m + n) time."
    },
    {
      id: 13,
      q: "What extra memory does the HashSet method for removing duplicates from an unsorted list use in the worst case?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
      exp: "If all n elements are unique, the HashSet stores all n values, requiring O(n) auxiliary memory."
    },
    {
      id: 14,
      q: "Which Java class in java.util provides a built-in doubly linked list?",
      options: ["ArrayList", "LinkedList", "HashMap", "HashSet"],
      correct: 1,
      exp: "`java.util.LinkedList` implements the `List` and `Deque` interfaces using an internal bidirectional doubly linked list."
    },
    {
      id: 15,
      q: "What is a major disadvantage of a linked list compared with an array?",
      options: [
        "It cannot store integers",
        "It cannot be traversed",
        "It lacks constant-time indexed access",
        "It cannot grow dynamically"
      ],
      correct: 2,
      exp: "Arrays allow O(1) random access via arithmetic memory offsets; linked lists require sequential traversal O(n) to reach index k."
    }
  ], []);

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        score++;
      }
    });
    return score;
  }, [quizQuestions, selectedAnswers]);

  // -------------------------------------------------------------
  // LABS & ASSIGNMENTS TRACKER
  // -------------------------------------------------------------
  const labsAndAssignments = useMemo(() => [
    { id: "l1", type: "Lab", title: "Lab 1: Build a Singly Linked List from Scratch", goal: "Implement generic Node<T>, head/tail pointers, addFirst, addLast, insertAt, removeFirst, removeLast, removeAt, indexOf, and toString." },
    { id: "l2", type: "Lab", title: "Lab 2: Build a Doubly Linked List", goal: "Store prev and next references, bidirectional traversal (displayForward/displayBackward), O(1) tail removal, and verify invariant consistency." },
    { id: "l3", type: "Lab", title: "Lab 3: Build a Circular Singly Linked List", goal: "Maintain tail pointer, implement circular traversal with do-while return-to-start guard, addFirst, addLast, removeValue, and size tracking." },
    { id: "l4", type: "Lab", title: "Lab 4: Reverse a Linked List (Iterative & Recursive)", goal: "Implement 3-pointer iterative reversal and recursive call-stack unwinding reversal. Verify with odd, even, 1-node, and empty lists." },
    { id: "l5", type: "Lab", title: "Lab 5: Floyd's Cycle Detection & Cycle Start", goal: "Construct deliberate cycle test cases, execute Tortoise and Hare detection, and implement Phase 2 cycle-entry node identification." },
    { id: "a1", type: "Assignment", title: "Assignment 1: Find the Kth Node from the End", goal: "Fast-forward pointer1 by k steps, then advance pointer1 and pointer2 together until pointer1 reaches null. Return pointer2 in O(n) time." },
    { id: "a2", type: "Assignment", title: "Assignment 2: Remove Nth Node from End", goal: "Deploy dummy head node to eliminate head deletion edge-case; advance leader n+1 nodes and relink trailer predecessor in O(n)." },
    { id: "a3", type: "Assignment", title: "Assignment 3: Linked List Palindrome Checker", goal: "Locate middle using slow/fast pointers, reverse second half in-place, compare values sequentially, and restore original list structure." },
    { id: "a4", type: "Assignment", title: "Assignment 4: Rotate Linked List Right by K", goal: "Compute length, connect tail to head creating circular ring, compute (k % len) offset, traverse to new tail, and break ring." },
    { id: "a5", type: "Assignment", title: "Assignment 5: Merge K Sorted Linked Lists", goal: "Compare pairwise merge vs PriorityQueue min-heap approach O(N log k) reusing existing list nodes." },
    { id: "a6", type: "Assignment", title: "Assignment 6: Merge Sort on Singly Linked List", goal: "Split list with slow/fast pointers, recursively divide T(n)=2T(n/2)+O(n), and merge in O(1) auxiliary space without array allocations." },
    { id: "a7", type: "Assignment", title: "Assignment 7: Reorder List (L0 -> Ln -> L1 -> Ln-1)", goal: "Find middle, reverse second half, and interleave nodes alternately with multi-pointer splice mechanics." }
  ], []);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return JavaLinkedListsSections;
    const q = searchQuery.toLowerCase();
    return JavaLinkedListsSections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans selection:bg-orange-500/20 selection:text-orange-900 flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-8 py-3 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => goBack()}
              className="p-2 -ml-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200/50 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Return to Track"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Track</span>
            </button>
            <div className="h-4 w-px bg-stone-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-orange-100 border border-orange-200 text-orange-800 text-[11px] font-bold tracking-wider uppercase font-mono">
                Module 9
              </span>
              <h1 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                <LinkIcon className="w-4 h-4 text-orange-600 hidden xs:inline" />
                Linked Lists
              </h1>
            </div>
          </div>

          {/* View Mode Toggle Button */}
          <div className="flex items-center gap-2">
            <div className="bg-stone-200/70 p-1 rounded-xl flex items-center border border-stone-300/60 shadow-2xs">
              <button
                onClick={() => setViewMode("interactive")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "interactive"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Interactive Studio</span>
              </button>
              <button
                onClick={() => setViewMode("reader")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "reader"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-stone-600" />
                <span>Textbook Reader</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">
        {/* Module Title Banner */}
        <div className="mb-6 rounded-2xl bg-gradient-to-br from-stone-900 via-orange-950 to-stone-900 p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-mono mb-3">
              <LinkIcon className="w-3.5 h-3.5" />
              <span>DATA STRUCTURES · POINTER MECHANICS · 28 PARTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Module 9: Linked Lists
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
              Master the foundational pointer-linked data structure: singly, doubly, and circular topologies,
              constant-time insertion and deletion mechanics, iterative & recursive reversals, slow/fast pointer pacing,
              Floyd's cycle detection, two-pointer list intersections, and cache locality trade-offs.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-300">
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <Workflow className="w-3.5 h-3.5 text-orange-400" /> 3 Topologies (Singly, Doubly, Circular)
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <Repeat className="w-3.5 h-3.5 text-emerald-400" /> Floyd's Cycle Detection
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> 15 MCQs & 12 Labs/Assignments
              </span>
            </div>
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <ModuleNav
          track="java"
          courseId="java-programming"
          currentModuleId="linked-lists"
          prevRoute="/learning/java/searching-sorting"
          nextRoute="/learning/java/stacks-queues"
        />

        {/* ======================================================== */}
        {/* VIEW MODE: READER MODE (Complete 28-Part Textbook) */}
        {/* ======================================================== */}
        {viewMode === "reader" ? (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-xl border border-[#e7e3da] shadow-2xs">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">
                  Full Curriculum Reader ({JavaLinkedListsSections.length} Sections)
                </span>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#faf8f5] border border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-8">
              {filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.anchor}
                  className="p-6 sm:p-8 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs scroll-mt-20 transition-all hover:border-orange-200"
                >
                  <div className="mb-4 flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold">
                      {sec.category}
                    </span>
                    <a
                      href={`#${sec.anchor}`}
                      className="text-stone-400 hover:text-stone-700 text-xs font-mono"
                    >
                      #{sec.anchor}
                    </a>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 tracking-tight">
                    {sec.title}
                  </h3>
                  <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base">
                    {sec.content}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* ======================================================== */
          /* VIEW MODE: INTERACTIVE WORKBENCHES */
          /* ======================================================== */
          <div className="space-y-6">
            {/* Interactive Workbench Sub-navigation Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 [scrollbar-width:none]">
              {[
                { id: "visualizer", label: "Linked List Studio", icon: LinkIcon },
                { id: "reversal", label: "Iterative Reversal", icon: RotateCcw },
                { id: "twoPointers", label: "Slow & Fast Middle", icon: FastForward },
                { id: "cycleDetection", label: "Floyd's Cycle", icon: Repeat },
                { id: "merge", label: "Merge Sorted", icon: GitMerge },
                { id: "intersection", label: "Intersection", icon: Split },
                { id: "benchmark", label: "Array vs List Cache", icon: Cpu },
                { id: "quiz", label: "Knowledge Quiz (15 MCQs)", icon: HelpCircle },
                { id: "labs", label: "Labs & Assignments", icon: Award },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-orange-600 text-white shadow-xs"
                        : "bg-white text-stone-600 hover:text-stone-900 border border-[#e7e3da] hover:bg-stone-50"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: LINKED LIST VISUALIZER (Singly, Doubly, Circular) */}
            {activeTab === "visualizer" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Interactive Topology Studio
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Live Linked List Operations Visualizer
                      </h3>
                      <p className="text-xs text-stone-500">
                        Perform real-time prepending, appending, indexed insertion, deletion, and linear searching.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200">
                        {["singly", "doubly", "circular"].map((t) => (
                          <button
                            key={t}
                            onClick={() => resetList(t)}
                            className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize transition-all ${
                              listType === t
                                ? "bg-white text-orange-700 shadow-xs"
                                : "text-stone-600 hover:text-stone-900"
                            }`}
                          >
                            {t} List
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => resetList()}
                        className="p-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600 transition-colors"
                        title="Reset List"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Interactive Nodes Canvas */}
                  <div className="p-6 bg-[#faf8f5] rounded-xl border border-dashed border-stone-300 min-h-[160px] flex items-center justify-center overflow-x-auto [scrollbar-width:thin]">
                    {nodes.length === 0 ? (
                      <div className="text-center py-6 text-stone-400 font-mono text-xs">
                        [ Empty List: head = null, tail = null, size = 0 ]
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 py-4">
                        {/* HEAD pointer label */}
                        <div className="flex flex-col items-center mr-1">
                          <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-mono text-[10px] font-bold shadow-2xs">
                            HEAD
                          </span>
                          <span className="text-orange-600 text-xs">↓</span>
                        </div>

                        {nodes.map((val, idx) => {
                          const isHighlighted = highlightIdx === idx;
                          const isHead = idx === 0;
                          const isTail = idx === nodes.length - 1;

                          return (
                            <React.Fragment key={idx}>
                              <div
                                className={`flex flex-col items-center transition-all duration-300 ${
                                  isHighlighted ? "scale-105" : ""
                                }`}
                              >
                                <div
                                  className={`relative flex items-stretch border-2 rounded-xl overflow-hidden shadow-xs transition-all ${
                                    isHighlighted
                                      ? "border-orange-500 bg-orange-50 ring-4 ring-orange-500/20"
                                      : "border-stone-700 bg-white"
                                  }`}
                                >
                                  {listType === "doubly" && (
                                    <div className="px-2 py-2.5 bg-stone-100 border-r border-stone-300 text-[10px] font-mono text-stone-500 flex items-center justify-center">
                                      prev
                                    </div>
                                  )}
                                  <div className="px-4 py-2.5 flex flex-col items-center justify-center min-w-[54px]">
                                    <span className="text-xs font-mono text-stone-400 text-[10px]">
                                      idx {idx}
                                    </span>
                                    <span className="text-sm font-bold text-stone-900 font-mono">
                                      {val}
                                    </span>
                                  </div>
                                  <div className="px-2.5 py-2.5 bg-stone-100 border-l border-stone-300 text-[10px] font-mono text-stone-500 flex items-center justify-center">
                                    next
                                  </div>
                                </div>
                                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-stone-400">
                                  {isHead && <span className="text-orange-600 font-bold">head</span>}
                                  {isHead && isTail && <span>·</span>}
                                  {isTail && <span className="text-orange-400 font-bold">tail</span>}
                                </div>
                              </div>

                              {/* Pointer Arrow */}
                              {idx < nodes.length - 1 ? (
                                <div className="flex flex-col items-center justify-center px-1 text-stone-500 font-mono text-xs">
                                  {listType === "doubly" ? (
                                    <span className="text-stone-600 font-bold tracking-tighter">⇄</span>
                                  ) : (
                                    <span className="text-stone-600 font-bold">→</span>
                                  )}
                                </div>
                              ) : listType === "circular" ? (
                                <div className="flex items-center px-2 py-1 rounded bg-orange-100/70 border border-orange-200 text-orange-800 text-[10px] font-mono font-bold">
                                  ↺ loopback to HEAD
                                </div>
                              ) : (
                                <div className="flex items-center px-2 py-1 rounded bg-stone-200 text-stone-600 text-[10px] font-mono">
                                  null
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Operation Status Log */}
                  <div className="p-3 bg-neutral-900 rounded-xl text-neutral-300 font-mono text-xs flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="text-orange-400 font-bold">LOG:</span>
                    <span className="truncate">{animLog}</span>
                  </div>

                  {/* Operation Controls */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {/* Panel 1: Insertion */}
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f5] space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                        <LinkIcon className="w-3.5 h-3.5 text-orange-600" />
                        <span>Insert Operations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={insertVal}
                          onChange={(e) => setInsertVal(e.target.value)}
                          placeholder="Value"
                          className="w-20 px-2 py-1 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                        <button
                          onClick={handleAddFirst}
                          className="flex-1 px-2.5 py-1 text-xs font-semibold bg-white border border-stone-300 hover:bg-orange-50 hover:border-orange-300 rounded transition-colors text-stone-800"
                        >
                          addFirst O(1)
                        </button>
                        <button
                          onClick={handleAddLast}
                          className="flex-1 px-2.5 py-1 text-xs font-semibold bg-white border border-stone-300 hover:bg-orange-50 hover:border-orange-300 rounded transition-colors text-stone-800"
                        >
                          addLast
                        </button>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-xs text-stone-500 font-mono">Index:</span>
                        <input
                          type="number"
                          value={insertIdx}
                          onChange={(e) => setInsertIdx(e.target.value)}
                          placeholder="Idx"
                          className="w-16 px-2 py-1 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                        <button
                          onClick={handleInsertAt}
                          className="flex-1 px-2 py-1 text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
                        >
                          insertAt(idx)
                        </button>
                      </div>
                    </div>

                    {/* Panel 2: Deletion */}
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f5] space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                        <Unlink className="w-3.5 h-3.5 text-red-600" />
                        <span>Delete Operations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleRemoveFirst}
                          className="flex-1 px-2.5 py-1 text-xs font-semibold bg-white border border-stone-300 hover:bg-red-50 hover:border-red-300 hover:text-red-700 rounded transition-colors text-stone-800"
                        >
                          removeFirst O(1)
                        </button>
                        <button
                          onClick={handleRemoveLast}
                          className="flex-1 px-2.5 py-1 text-xs font-semibold bg-white border border-stone-300 hover:bg-red-50 hover:border-red-300 hover:text-red-700 rounded transition-colors text-stone-800"
                        >
                          removeLast
                        </button>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-xs text-stone-500 font-mono">Index:</span>
                        <input
                          type="number"
                          value={deleteIdx}
                          onChange={(e) => setDeleteIdx(e.target.value)}
                          placeholder="Idx"
                          className="w-16 px-2 py-1 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                        <button
                          onClick={handleRemoveAt}
                          className="flex-1 px-2 py-1 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                        >
                          removeAt(idx)
                        </button>
                      </div>
                    </div>

                    {/* Panel 3: Traversal & Search */}
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f5] space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                        <Search className="w-3.5 h-3.5 text-[#f97316]" />
                        <span>Search & Traversal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={searchTarget}
                          onChange={(e) => setSearchTarget(e.target.value)}
                          placeholder="Target"
                          className="w-24 px-2 py-1 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                        <button
                          onClick={handleSearch}
                          className="flex-1 px-3 py-1 text-xs font-semibold bg-[#f97316] hover:bg-[#ea580c] text-white rounded transition-colors"
                        >
                          Linear Search O(n)
                        </button>
                      </div>
                      <div className="text-[11px] text-stone-500 flex items-center justify-between pt-2 border-t border-stone-200 font-mono">
                        <span>List Size: {nodes.length}</span>
                        <span>Empty: {nodes.length === 0 ? "true" : "false"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: STEP-BY-STEP REVERSAL STUDIO */}
            {activeTab === "reversal" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Algorithm Workbench 2
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Iterative Reversal Studio (prev, curr, next Pointer Mechanics)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Watch how three references reverse links one-by-one in O(n) time and O(1) auxiliary space without allocating new nodes.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setRevPlaying(!revPlaying)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          revPlaying
                            ? "bg-amber-600 text-white"
                            : "bg-orange-600 hover:bg-orange-700 text-white"
                        }`}
                      >
                        {revPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{revPlaying ? "Pause" : "Auto-Play"}</span>
                      </button>
                      <button
                        onClick={() => {
                          setRevPlaying(false);
                          setRevStep(0);
                        }}
                        className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                        title="Reset Reversal"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Node Chain for Current Reversal Step */}
                  {(() => {
                    const currentStepData = revStepsData[revStep];
                    return (
                      <div className="space-y-4">
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 overflow-x-auto min-h-[170px] flex flex-col justify-center">
                          <div className="flex items-center justify-center gap-4 py-4 min-w-[500px]">
                            {revOriginal.map((val, idx) => {
                              const isCurr = currentStepData.curr === idx;
                              const isPrev = currentStepData.prev === idx;
                              const isNext = currentStepData.next === idx;

                              return (
                                <div key={idx} className="flex flex-col items-center">
                                  {/* Pointer labels pointing down */}
                                  <div className="h-6 flex items-center gap-1 font-mono text-[10px] font-bold">
                                    {isPrev && (
                                      <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                                        prev
                                      </span>
                                    )}
                                    {isCurr && (
                                      <span className="px-1.5 py-0.5 rounded bg-orange-600 text-white shadow-2xs">
                                        curr
                                      </span>
                                    )}
                                    {isNext && (
                                      <span className="px-1.5 py-0.5 rounded bg-orange-500 text-orange-400 border border-orange-500">
                                        next
                                      </span>
                                    )}
                                  </div>

                                  {/* Node box */}
                                  <div
                                    className={`relative px-4 py-3 rounded-xl border-2 font-mono flex flex-col items-center justify-center min-w-[60px] shadow-xs transition-all ${
                                      isCurr
                                        ? "border-orange-500 bg-orange-50 ring-4 ring-orange-500/20"
                                        : isPrev
                                        ? "border-amber-500 bg-amber-50/50"
                                        : "border-stone-400 bg-white"
                                    }`}
                                  >
                                    <span className="text-[10px] text-stone-400">Node {idx}</span>
                                    <span className="text-base font-bold text-stone-900">{val}</span>
                                    <div className="mt-1 text-[9px] text-stone-500 font-mono">
                                      → {currentStepData.links[idx] !== null ? `Node ${revOriginal[currentStepData.links[idx]]}` : "null"}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Step Description Card */}
                        <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div>
                            <span className="font-mono font-bold text-orange-800 uppercase text-[11px] block">
                              Step {revStep} of {revStepsData.length - 1}
                            </span>
                            <p className="text-stone-800 font-medium mt-0.5">{currentStepData.desc}</p>
                          </div>
                          <div className="px-3 py-1.5 bg-white rounded-lg border border-orange-200 font-mono text-orange-700 text-xs shrink-0">
                            {currentStepData.pseudo}
                          </div>
                        </div>

                        {/* Stepper Buttons */}
                        <div className="flex items-center justify-between gap-2 pt-2">
                          <button
                            disabled={revStep === 0}
                            onClick={() => setRevStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            ← Previous Step
                          </button>
                          <div className="flex items-center gap-1 font-mono text-xs text-stone-500">
                            <span>Step: {revStep} / {revStepsData.length - 1}</span>
                          </div>
                          <button
                            disabled={revStep === revStepsData.length - 1}
                            onClick={() => setRevStep((s) => Math.min(revStepsData.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            Next Step →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 3: SLOW & FAST POINTERS (Find Middle Node) */}
            {activeTab === "twoPointers" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Algorithm Workbench 3
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Slow & Fast Pointer Technique (Tortoise & Hare Middle)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Slow advances 1 step while Fast advances 2 steps. When Fast reaches the end, Slow is at the middle.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200">
                        <button
                          onClick={() => {
                            setMidListMode("odd");
                            setMidStep(0);
                          }}
                          className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                            midListMode === "odd" ? "bg-white text-orange-700 shadow-xs" : "text-stone-600"
                          }`}
                        >
                          Odd List (5 nodes)
                        </button>
                        <button
                          onClick={() => {
                            setMidListMode("even");
                            setMidStep(0);
                          }}
                          className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                            midListMode === "even" ? "bg-white text-orange-700 shadow-xs" : "text-stone-600"
                          }`}
                        >
                          Even List (6 nodes)
                        </button>
                      </div>

                      <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200">
                        <button
                          onClick={() => {
                            setMidPointerVariant("second");
                            setMidStep(0);
                          }}
                          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                            midPointerVariant === "second" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
                          }`}
                        >
                          2nd Middle (Default)
                        </button>
                        <button
                          onClick={() => {
                            setMidPointerVariant("first");
                            setMidStep(0);
                          }}
                          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                            midPointerVariant === "first" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
                          }`}
                        >
                          1st Middle
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Visual Chain */}
                  {(() => {
                    const currentMid = midHistory[Math.min(midStep, midHistory.length - 1)];
                    return (
                      <div className="space-y-4">
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 flex items-center justify-center overflow-x-auto min-h-[170px]">
                          <div className="flex items-center gap-3">
                            {midList.map((val, idx) => {
                              const isSlow = currentMid.slow === idx;
                              const isFast = currentMid.fast === idx;

                              return (
                                <React.Fragment key={idx}>
                                  <div className="flex flex-col items-center">
                                    <div className="h-6 flex items-center gap-1 font-mono text-[10px] font-bold">
                                      {isSlow && (
                                        <span className="px-2 py-0.5 rounded bg-emerald-600 text-white shadow-2xs">
                                          SLOW (Tortoise)
                                        </span>
                                      )}
                                      {isFast && (
                                        <span className="px-2 py-0.5 rounded bg-orange-500 text-white shadow-2xs">
                                          FAST (Hare)
                                        </span>
                                      )}
                                    </div>

                                    <div
                                      className={`px-4 py-3 rounded-xl border-2 font-mono flex flex-col items-center justify-center min-w-[56px] shadow-xs transition-all ${
                                        isSlow && isFast
                                          ? "border-amber-500 bg-amber-50 ring-4 ring-amber-500/20"
                                          : isSlow
                                          ? "border-emerald-500 bg-emerald-50 ring-4 ring-emerald-500/20"
                                          : isFast
                                          ? "border-orange-500 bg-orange-500 ring-4 ring-orange-500/30"
                                          : "border-stone-400 bg-white"
                                      }`}
                                    >
                                      <span className="text-[10px] text-stone-400">idx {idx}</span>
                                      <span className="text-base font-bold text-stone-900">{val}</span>
                                    </div>
                                  </div>

                                  {idx < midList.length - 1 && (
                                    <span className="text-stone-400 font-bold">→</span>
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>

                        {/* Status commentary */}
                        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-stone-800 flex items-center justify-between gap-3">
                          <p className="font-medium">{currentMid.desc}</p>
                          <span className="font-mono text-emerald-800 font-bold shrink-0">
                            Iteration {midStep} / {midHistory.length - 1}
                          </span>
                        </div>

                        {/* Stepper buttons */}
                        <div className="flex items-center justify-between gap-2 pt-2">
                          <button
                            disabled={midStep === 0}
                            onClick={() => setMidStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Step Back
                          </button>
                          <button
                            onClick={() => setMidStep(0)}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100"
                          >
                            Reset
                          </button>
                          <button
                            disabled={midStep === midHistory.length - 1}
                            onClick={() => setMidStep((s) => Math.min(midHistory.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-40"
                          >
                            Advance Pointers (+1 slow, +2 fast) →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 4: FLOYD'S CYCLE DETECTION & CYCLE START STUDIO */}
            {activeTab === "cycleDetection" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Algorithm Workbench 4
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Floyd's Cycle Detection & Cycle Start Studio
                      </h3>
                      <p className="text-xs text-stone-500">
                        Phase 1 discovers if a cycle exists via pointer collision. Phase 2 proves and finds the exact start node μ = kλ - d.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Loop back to:</span>
                      <select
                        value={cycleTargetIdx}
                        onChange={(e) => {
                          setCycleTargetIdx(parseInt(e.target.value, 10));
                          setFloydStep(0);
                        }}
                        className="px-2.5 py-1 text-xs bg-stone-100 border border-stone-300 rounded font-mono"
                      >
                        <option value={-1}>No Loop (Acyclic)</option>
                        <option value={0}>Node 10 (Head)</option>
                        <option value={2}>Node 30 (Middle - idx 2)</option>
                        <option value={4}>Node 50 (Tail loop - idx 4)</option>
                      </select>
                      <button
                        onClick={() => setFloydStep(0)}
                        className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                        title="Reset"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Topology Representation */}
                  {(() => {
                    const stepData = floydSim[Math.min(floydStep, floydSim.length - 1)];
                    return (
                      <div className="space-y-4">
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 overflow-x-auto min-h-[170px] flex flex-col justify-center">
                          <div className="flex items-center justify-center gap-3">
                            {cycleList.map((val, idx) => {
                              const isSlow = stepData.phase === 1 && stepData.slow === idx;
                              const isFast = stepData.phase === 1 && stepData.fast === idx;
                              const isP1 = stepData.phase === 2 && stepData.p1 === idx;
                              const isP2 = stepData.phase === 2 && stepData.p2 === idx;
                              const isCycleEntry = cycleTargetIdx === idx;

                              return (
                                <React.Fragment key={idx}>
                                  <div className="flex flex-col items-center">
                                    <div className="h-6 flex items-center gap-1 font-mono text-[10px] font-bold">
                                      {isSlow && (
                                        <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white">
                                          slow
                                        </span>
                                      )}
                                      {isFast && (
                                        <span className="px-1.5 py-0.5 rounded bg-orange-500 text-white">
                                          fast
                                        </span>
                                      )}
                                      {isP1 && (
                                        <span className="px-1.5 py-0.5 rounded bg-amber-500 text-white">
                                          p1 (head)
                                        </span>
                                      )}
                                      {isP2 && (
                                        <span className="px-1.5 py-0.5 rounded bg-orange-600 text-white">
                                          p2 (meet)
                                        </span>
                                      )}
                                    </div>

                                    <div
                                      className={`px-3.5 py-2.5 rounded-xl border-2 font-mono flex flex-col items-center justify-center min-w-[54px] shadow-xs transition-all ${
                                        (isSlow && isFast) || (isP1 && isP2)
                                          ? "border-red-600 bg-red-50 ring-4 ring-red-500/20"
                                          : isCycleEntry
                                          ? "border-amber-500 bg-amber-50/50"
                                          : "border-stone-400 bg-white"
                                      }`}
                                    >
                                      <span className="text-[10px] text-stone-400">Node {idx}</span>
                                      <span className="text-sm font-bold text-stone-900">{val}</span>
                                      {isCycleEntry && (
                                        <span className="text-[9px] text-amber-700 font-bold uppercase">
                                          [entry]
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {idx < cycleList.length - 1 ? (
                                    <span className="text-stone-400 font-bold">→</span>
                                  ) : cycleTargetIdx !== -1 ? (
                                    <div className="px-2 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 font-mono text-[10px] font-bold">
                                      ↺ links to Node {cycleList[cycleTargetIdx]}
                                    </div>
                                  ) : (
                                    <span className="text-stone-400 text-xs font-mono">null</span>
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>

                        {/* Step commentary */}
                        <div className="p-4 rounded-xl bg-orange-500/15 border border-orange-500 text-xs text-stone-800 flex items-center justify-between gap-3">
                          <p className="font-medium">{stepData.desc}</p>
                          <span className="font-mono text-orange-400 font-bold shrink-0">
                            Phase {stepData.phase} · Step {floydStep} / {floydSim.length - 1}
                          </span>
                        </div>

                        {/* Stepper Buttons */}
                        <div className="flex items-center justify-between gap-2 pt-2">
                          <button
                            disabled={floydStep === 0}
                            onClick={() => setFloydStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Back
                          </button>
                          <div className="text-xs text-stone-500 font-mono">
                            Target Loop: {cycleTargetIdx === -1 ? "None" : `Node ${cycleList[cycleTargetIdx]}`}
                          </div>
                          <button
                            disabled={floydStep === floydSim.length - 1}
                            onClick={() => setFloydStep((s) => Math.min(floydSim.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-500 text-white hover:bg-orange-500 disabled:opacity-40"
                          >
                            Advance Floyd Algorithm →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 5: MERGE TWO SORTED LISTS STUDIO */}
            {activeTab === "merge" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Algorithm Workbench 5
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Merge Two Sorted Lists (Dummy Head & Relinking)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Compare front elements in O(m + n) time and relink references in O(1) auxiliary space without copying nodes.
                      </p>
                    </div>

                    <button
                      onClick={() => setMergeStep(0)}
                      className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {(() => {
                    const stepData = mergeHistory[Math.min(mergeStep, mergeHistory.length - 1)];
                    return (
                      <div className="space-y-4">
                        {/* Source lists with active pointer indicators */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-[#faf8f5] border border-stone-200 space-y-2">
                            <span className="text-xs font-mono font-bold text-stone-500">List 1: [1, 3, 5, 7]</span>
                            <div className="flex items-center gap-2">
                              {mergeL1.map((val, idx) => (
                                <div
                                  key={idx}
                                  className={`px-3 py-2 rounded-lg border font-mono text-xs font-bold transition-all ${
                                    stepData.p1 === idx
                                      ? "bg-orange-50 border-orange-500 text-orange-700 ring-2 ring-orange-500/20"
                                      : idx < stepData.p1
                                      ? "bg-stone-200 text-stone-400 border-stone-300"
                                      : "bg-white text-stone-900 border-stone-300"
                                  }`}
                                >
                                  {val}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-[#faf8f5] border border-stone-200 space-y-2">
                            <span className="text-xs font-mono font-bold text-stone-500">List 2: [2, 4, 6, 8]</span>
                            <div className="flex items-center gap-2">
                              {mergeL2.map((val, idx) => (
                                <div
                                  key={idx}
                                  className={`px-3 py-2 rounded-lg border font-mono text-xs font-bold transition-all ${
                                    stepData.p2 === idx
                                      ? "bg-amber-50 border-amber-500 text-amber-700 ring-2 ring-amber-500/20"
                                      : idx < stepData.p2
                                      ? "bg-stone-200 text-stone-400 border-stone-300"
                                      : "bg-white text-stone-900 border-stone-300"
                                  }`}
                                >
                                  {val}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Merged output chain */}
                        <div className="p-4 rounded-xl bg-stone-900 text-white space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                            <span>Merged List (dummy.next):</span>
                            <span>{stepData.merged.length} / 8 nodes linked</span>
                          </div>
                          <div className="flex items-center gap-2 overflow-x-auto py-2">
                            <span className="px-2 py-1 bg-stone-800 rounded text-stone-400 text-xs font-mono">dummy</span>
                            <span className="text-stone-500">→</span>
                            {stepData.merged.map((val, idx) => (
                              <React.Fragment key={idx}>
                                <div className="px-3 py-1.5 rounded-lg bg-orange-600 text-white font-mono text-xs font-bold shadow-xs">
                                  {val}
                                </div>
                                {idx < stepData.merged.length - 1 && <span className="text-stone-500">→</span>}
                              </React.Fragment>
                            ))}
                            {stepData.merged.length < 8 && <span className="text-stone-500 text-xs font-mono">...</span>}
                          </div>
                        </div>

                        {/* Step commentary */}
                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-stone-800 flex items-center justify-between">
                          <p className="font-medium">{stepData.desc}</p>
                          <span className="font-mono text-orange-800 font-bold shrink-0">
                            Step {mergeStep} / {mergeHistory.length - 1}
                          </span>
                        </div>

                        {/* Stepper buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            disabled={mergeStep === 0}
                            onClick={() => setMergeStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Back
                          </button>
                          <button
                            disabled={mergeStep === mergeHistory.length - 1}
                            onClick={() => setMergeStep((s) => Math.min(mergeHistory.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-40"
                          >
                            Compare & Link Smaller Node →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 6: TWO-POINTER INTERSECTION STUDIO */}
            {activeTab === "intersection" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Algorithm Workbench 6
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Two-Pointer Intersection Studio (Equalization of Paths)
                      </h3>
                      <p className="text-xs text-stone-500">
                        When pointerA hits null, it jumps to headB; when pointerB hits null, it jumps to headA. Both traverse a + b - c nodes!
                      </p>
                    </div>

                    <button
                      onClick={() => setInterStep(0)}
                      className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {(() => {
                    const stepData = interHistory[Math.min(interStep, interHistory.length - 1)];
                    return (
                      <div className="space-y-4">
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 space-y-4">
                          <div className="text-xs font-mono text-stone-500">
                            Topology Diagram:
                          </div>
                          <div className="font-mono text-xs text-stone-800 leading-relaxed bg-white p-4 rounded-xl border border-stone-200 overflow-x-auto">
                            <pre>{`List A: [10] -> [20] ---\\
                          -> [30] -> [40] -> [50] -> null
List B:         [5] ---/
(Shared intersection begins at Node 30)`}</pre>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                              <span className="text-xs font-mono text-stone-500">Pointer A Position:</span>
                              <span className="px-2.5 py-1 bg-orange-100 border border-orange-300 rounded font-mono text-orange-800 text-xs font-bold">
                                {stepData.nodeA.label} ({stepData.nodeA.val})
                              </span>
                            </div>
                            <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                              <span className="text-xs font-mono text-stone-500">Pointer B Position:</span>
                              <span className="px-2.5 py-1 bg-amber-100 border border-amber-300 rounded font-mono text-amber-800 text-xs font-bold">
                                {stepData.nodeB.label} ({stepData.nodeB.val})
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Step commentary */}
                        <div
                          className={`p-4 rounded-xl border text-xs flex items-center justify-between ${
                            stepData.match
                              ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                              : "bg-orange-50 border-orange-200 text-stone-800"
                          }`}
                        >
                          <p className="font-medium">{stepData.desc}</p>
                          <span className="font-mono font-bold shrink-0">
                            Step {interStep} / {interHistory.length - 1}
                          </span>
                        </div>

                        {/* Stepper buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            disabled={interStep === 0}
                            onClick={() => setInterStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Back
                          </button>
                          <button
                            disabled={interStep === interHistory.length - 1}
                            onClick={() => setInterStep((s) => Math.min(interHistory.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#f97316] hover:bg-[#ea580c] text-white disabled:opacity-40"
                          >
                            Advance Both Pointers (Jump on null) →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 7: ARRAY VS LINKED LIST CACHE BENCHMARK STUDIO */}
            {activeTab === "benchmark" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Systems Architecture Comparison
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Memory Layout & Hardware Cache Locality Benchmark
                    </h3>
                    <p className="text-xs text-stone-500">
                      Why array traversal outperforms linked lists by 5x-10x in production despite identical O(n) algorithmic complexity.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Array Layout */}
                    <div className="p-5 rounded-xl border border-stone-200 bg-[#faf8f5] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-900 font-mono">Array (Contiguous Memory Buffer)</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                          HIGH CACHE HIT RATE
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-stone-200 font-mono text-xs">
                        <div className="grid grid-cols-5 gap-1 text-center">
                          {[10, 20, 30, 40, 50].map((v, i) => (
                            <div key={i} className="p-2 bg-emerald-50 border border-emerald-200 rounded">
                              <div className="text-[9px] text-stone-400">0x{1000 + i * 4}</div>
                              <div className="font-bold text-emerald-900">{v}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                        <li><strong>Single 64-byte Cache Line:</strong> Loads multiple adjacent primitive elements in one memory fetch.</li>
                        <li><strong>Hardware Prefetcher:</strong> Modern CPU L1/L2 prefetchers detect linear stride and preload next blocks into cache before access.</li>
                        <li><strong>Memory Overhead:</strong> Zero reference overhead per element for primitives.</li>
                      </ul>
                    </div>

                    {/* Linked List Layout */}
                    <div className="p-5 rounded-xl border border-stone-200 bg-[#faf8f5] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-900 font-mono">Linked List (Heap-Allocated Objects)</span>
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-mono font-bold">
                          FREQUENT CACHE MISSES
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-stone-200 font-mono text-xs">
                        <div className="flex items-center justify-between gap-1 text-center overflow-x-auto py-1">
                          {[
                            { v: 10, addr: "0x4A10" },
                            { v: 20, addr: "0x8F30" },
                            { v: 30, addr: "0x12B0" },
                            { v: 40, addr: "0x9E70" }
                          ].map((item, i) => (
                            <div key={i} className="p-1.5 bg-amber-50 border border-amber-200 rounded min-w-[50px]">
                              <div className="text-[8px] text-stone-400">{item.addr}</div>
                              <div className="font-bold text-amber-900">{item.v}</div>
                              <div className="text-[8px] text-stone-400">next→</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                        <li><strong>Heap Fragmentation:</strong> Node objects are allocated unpredictably across JVM heap generations.</li>
                        <li><strong>Pointer Chasing:</strong> Each link dereference (`curr.next`) triggers a memory stall (~200 CPU cycles on L3 miss).</li>
                        <li><strong>Object Overhead:</strong> Each Node object adds 16-byte object header + 8-byte reference pointer + padding.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Operational Comparison Matrix */}
                  <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#faf8f5] text-stone-900 border-b border-stone-200 font-semibold font-mono">
                        <tr>
                          <th className="px-4 py-2.5">Operation</th>
                          <th className="px-4 py-2.5">Array / ArrayList</th>
                          <th className="px-4 py-2.5">Singly Linked List</th>
                          <th className="px-4 py-2.5">Doubly Linked List</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-mono">
                        <tr>
                          <td className="px-4 py-2 text-stone-800 font-sans font-semibold">Indexed Access (get i)</td>
                          <td className="px-4 py-2 text-emerald-700 font-bold">O(1)</td>
                          <td className="px-4 py-2 text-amber-700">O(n)</td>
                          <td className="px-4 py-2 text-amber-700">O(n)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-stone-800 font-sans font-semibold">Insert / Delete at Head</td>
                          <td className="px-4 py-2 text-red-700">O(n) [shifting]</td>
                          <td className="px-4 py-2 text-emerald-700 font-bold">O(1)</td>
                          <td className="px-4 py-2 text-emerald-700 font-bold">O(1)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-stone-800 font-sans font-semibold">Insert / Delete at Tail</td>
                          <td className="px-4 py-2 text-emerald-700 font-bold">O(1) amortized</td>
                          <td className="px-4 py-2 text-stone-700">Insert O(1), Delete O(n)</td>
                          <td className="px-4 py-2 text-emerald-700 font-bold">O(1)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-stone-800 font-sans font-semibold">Delete Known Node Reference</td>
                          <td className="px-4 py-2 text-red-700">O(n) [shifting]</td>
                          <td className="px-4 py-2 text-amber-700">O(n) [must find prev]</td>
                          <td className="px-4 py-2 text-emerald-700 font-bold">O(1) [prev is available]</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 8: KNOWLEDGE QUIZ */}
            {activeTab === "quiz" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Module Evaluation
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Knowledge Assessment (15 Multiple-Choice Questions)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Test your conceptual and practical mastery of linked lists, references, invariants, and algorithms.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {quizSubmitted && (
                        <div className="px-3 py-1 rounded-xl bg-orange-100 border border-orange-300 text-orange-800 font-mono text-xs font-bold">
                          Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </div>
                      )}
                      <button
                        onClick={() => {
                          setSelectedAnswers({});
                          setQuizSubmitted(false);
                        }}
                        className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                        title="Reset Quiz"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Question cards */}
                  <div className="space-y-4">
                    {quizQuestions.map((q) => {
                      const selected = selectedAnswers[q.id];
                      const isCorrect = selected === q.correct;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border transition-all ${
                            quizSubmitted
                              ? isCorrect
                                ? "bg-emerald-50/50 border-emerald-200"
                                : "bg-red-50/50 border-red-200"
                              : "bg-[#faf8f5] border-stone-200"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-700 shrink-0 mt-0.5">
                              Q{q.id}
                            </span>
                            <div className="space-y-3 flex-1">
                              <h4 className="text-sm font-bold text-stone-900">{q.q}</h4>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {q.options.map((opt, oIdx) => {
                                  const isSelected = selected === oIdx;
                                  const isThisCorrect = q.correct === oIdx;

                                  let btnClass = "border-stone-200 bg-white text-stone-800 hover:bg-stone-100";
                                  if (quizSubmitted) {
                                    if (isThisCorrect) {
                                      btnClass = "border-emerald-500 bg-emerald-100 text-emerald-900 font-semibold";
                                    } else if (isSelected) {
                                      btnClass = "border-red-500 bg-red-100 text-red-900";
                                    }
                                  } else if (isSelected) {
                                    btnClass = "border-orange-500 bg-orange-50 text-orange-900 font-semibold ring-2 ring-orange-500/20";
                                  }

                                  return (
                                    <button
                                      key={oIdx}
                                      onClick={() => {
                                        if (!quizSubmitted) {
                                          setSelectedAnswers({ ...selectedAnswers, [q.id]: oIdx });
                                        }
                                      }}
                                      className={`text-left px-3 py-2 rounded-lg border text-xs transition-all flex items-center justify-between ${btnClass}`}
                                    >
                                      <span>{opt}</span>
                                      {quizSubmitted && isThisCorrect && (
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-1 shrink-0" />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {quizSubmitted && (
                                <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed font-sans">
                                  <strong className="text-stone-900">Explanation: </strong>
                                  {q.exp}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {!quizSubmitted ? (
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      disabled={Object.keys(selectedAnswers).length === 0}
                      className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-40"
                    >
                      Submit Answers ({Object.keys(selectedAnswers).length} / {quizQuestions.length} Answered)
                    </button>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200 text-xs font-mono">
                      <span>Quiz completed! Review individual answers above.</span>
                      <button
                        onClick={() => {
                          setSelectedAnswers({});
                          setQuizSubmitted(false);
                        }}
                        className="px-3 py-1 bg-white border border-orange-300 text-orange-800 rounded font-bold hover:bg-orange-100"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 9: LABS & ASSIGNMENTS TRACKER */}
            {activeTab === "labs" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Practical Implementation Tracker
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        5 Laboratories & 7 Coding Assignments
                      </h3>
                      <p className="text-xs text-stone-500">
                        Track your coding progress across all lab requirements and interview problem assignments.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-600 font-bold">
                        Progress: {Object.values(completedLabs).filter(Boolean).length} / {labsAndAssignments.length}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {labsAndAssignments.map((item) => {
                      const isDone = !!completedLabs[item.id];
                      return (
                        <div
                          key={item.id}
                          className={`p-4 rounded-xl border transition-all ${
                            isDone ? "bg-emerald-50/50 border-emerald-200" : "bg-[#faf8f5] border-stone-200"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() =>
                                setCompletedLabs({ ...completedLabs, [item.id]: !isDone })
                              }
                              className="mt-0.5 text-stone-400 hover:text-stone-700 transition-colors"
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
                                    item.type === "Lab"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-orange-500 text-orange-400"
                                  }`}
                                >
                                  {item.type}
                                </span>
                                <h4
                                  className={`text-xs font-bold ${
                                    isDone ? "text-stone-500 line-through" : "text-stone-900"
                                  }`}
                                >
                                  {item.title}
                                </h4>
                              </div>
                              <p className="text-xs text-stone-600 leading-relaxed">{item.goal}</p>
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
