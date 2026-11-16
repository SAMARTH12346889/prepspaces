import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaStacksQueuesSections from "./JavaStacksQueuesSections";

export default function JavaStacksQueues() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java");

  // View mode: 'interactive' | 'reader'
  const [viewMode, setViewMode] = useState("interactive");
  const [activeTab, setActiveTab] = useState("stackStudio");
  const [copiedCode, setCopiedCode] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Lab progress
  const [completedLabs, setCompletedLabs] = useState({});

  // -------------------------------------------------------------
  // WORKBENCH 1: Interactive Stack Studio (LIFO)
  // -------------------------------------------------------------
  const [stackItems, setStackItems] = useState([10, 20, 30]);
  const [stackInput, setStackInput] = useState("40");
  const [stackCapacity, setStackCapacity] = useState(5);
  const [stackLog, setStackLog] = useState("Stack initialized with [10, 20, 30] (Top is 30).");

  const handlePush = () => {
    const val = parseInt(stackInput, 10);
    if (isNaN(val)) return;
    if (stackItems.length >= stackCapacity) {
      setStackLog(`STACK OVERFLOW ERROR! Maximum capacity (${stackCapacity}) reached.`);
      return;
    }
    setStackItems([...stackItems, val]);
    setStackLog(`PUSH O(1): Pushed ${val} onto top of stack (top index = ${stackItems.length}).`);
  };

  const handlePop = () => {
    if (stackItems.length === 0) {
      setStackLog("STACK UNDERFLOW ERROR! Cannot pop from empty stack.");
      return;
    }
    const popped = stackItems[stackItems.length - 1];
    setStackItems(stackItems.slice(0, -1));
    setStackLog(`POP O(1): Removed top element ${popped}. New top is ${stackItems.length > 1 ? stackItems[stackItems.length - 2] : "none (empty)"}.`);
  };

  const handlePeek = () => {
    if (stackItems.length === 0) {
      setStackLog("Stack is empty (no top element).");
      return;
    }
    const topVal = stackItems[stackItems.length - 1];
    setStackLog(`PEEK O(1): Current top element is ${topVal} (stack remains unchanged).`);
  };

  const handleClearStack = () => {
    setStackItems([]);
    setStackLog("Cleared all elements from stack. top = -1.");
  };

  // -------------------------------------------------------------
  // WORKBENCH 2: Circular Queue Studio (FIFO with Wrap-around)
  // -------------------------------------------------------------
  const [cqCapacity, setCqCapacity] = useState(5);
  const [cqItems, setCqItems] = useState([10, 20, 30, null, null]);
  const [cqFront, setCqFront] = useState(0);
  const [cqRear, setCqRear] = useState(3);
  const [cqSize, setCqSize] = useState(3);
  const [cqInput, setCqInput] = useState("40");
  const [cqLog, setCqLog] = useState("Circular Queue initialized: front = 0, rear = 3, size = 3.");

  const handleEnqueue = () => {
    const val = parseInt(cqInput, 10);
    if (isNaN(val)) return;
    if (cqSize >= cqCapacity) {
      setCqLog(`QUEUE OVERFLOW! All ${cqCapacity} slots are occupied.`);
      return;
    }
    const newItems = [...cqItems];
    newItems[cqRear] = val;
    const nextRear = (cqRear + 1) % cqCapacity;
    setCqItems(newItems);
    setCqRear(nextRear);
    setCqSize(cqSize + 1);
    setCqLog(`ENQUEUE O(1): Stored ${val} at index ${cqRear}. Next rear = (${cqRear} + 1) % ${cqCapacity} = ${nextRear}.`);
  };

  const handleDequeue = () => {
    if (cqSize === 0) {
      setCqLog("QUEUE UNDERFLOW! Queue is currently empty.");
      return;
    }
    const val = cqItems[cqFront];
    const newItems = [...cqItems];
    newItems[cqFront] = null;
    const nextFront = (cqFront + 1) % cqCapacity;
    setCqItems(newItems);
    setCqFront(nextFront);
    setCqSize(cqSize - 1);
    setCqLog(`DEQUEUE O(1): Removed ${val} from index ${cqFront}. Next front = (${cqFront} + 1) % ${cqCapacity} = ${nextFront}.`);
  };

  const handleResetCQ = () => {
    setCqItems([10, 20, 30, null, null]);
    setCqFront(0);
    setCqRear(3);
    setCqSize(3);
    setCqLog("Circular queue reset to default [10, 20, 30, empty, empty].");
  };

  // -------------------------------------------------------------
  // WORKBENCH 3: Double-Ended Queue (Deque) Studio
  // -------------------------------------------------------------
  const [dequeItems, setDequeItems] = useState([20, 30, 40]);
  const [dequeInput, setDequeInput] = useState("10");
  const [dequeLog, setDequeLog] = useState("Deque initialized: [20, 30, 40]. Supports both ends.");

  const handleAddFirst = () => {
    const val = parseInt(dequeInput, 10);
    if (isNaN(val)) return;
    setDequeItems([val, ...dequeItems]);
    setDequeLog(`addFirst O(1): Inserted ${val} at the FRONT.`);
  };

  const handleAddLast = () => {
    const val = parseInt(dequeInput, 10);
    if (isNaN(val)) return;
    setDequeItems([...dequeItems, val]);
    setDequeLog(`addLast O(1): Inserted ${val} at the REAR.`);
  };

  const handleRemoveFirst = () => {
    if (dequeItems.length === 0) {
      setDequeLog("Deque is empty!");
      return;
    }
    const val = dequeItems[0];
    setDequeItems(dequeItems.slice(1));
    setDequeLog(`removeFirst O(1): Removed ${val} from the FRONT.`);
  };

  const handleRemoveLast = () => {
    if (dequeItems.length === 0) {
      setDequeLog("Deque is empty!");
      return;
    }
    const val = dequeItems[dequeItems.length - 1];
    setDequeItems(dequeItems.slice(0, -1));
    setDequeLog(`removeLast O(1): Removed ${val} from the REAR.`);
  };

  // -------------------------------------------------------------
  // WORKBENCH 4: Monotonic Stack (Next Greater Element)
  // -------------------------------------------------------------
  const ngeArray = useMemo(() => [4, 5, 2, 10, 8], []);
  const [ngeStep, setNgeStep] = useState(0);

  const ngeHistory = useMemo(() => {
    const hist = [];
    const n = ngeArray.length;
    const res = new Array(n).fill(-1);
    const stack = []; // stores indices

    hist.push({
      step: 0,
      currIdx: null,
      stack: [],
      res: [...res],
      desc: "Initial: stack is empty, all answers initialized to -1."
    });

    for (let i = 0; i < n; i++) {
      const val = ngeArray[i];
      while (stack.length > 0 && val > ngeArray[stack[stack.length - 1]]) {
        const poppedIdx = stack.pop();
        res[poppedIdx] = val;
        hist.push({
          step: hist.length,
          currIdx: i,
          poppedIdx,
          stack: [...stack],
          res: [...res],
          desc: `Current value ${val} (idx ${i}) > value ${ngeArray[poppedIdx]} (idx ${poppedIdx}). Resolved next greater for idx ${poppedIdx} = ${val}!`
        });
      }
      stack.push(i);
      hist.push({
        step: hist.length,
        currIdx: i,
        stack: [...stack],
        res: [...res],
        desc: `Pushed current index ${i} (value ${val}) onto monotonic decreasing stack.`
      });
    }

    hist.push({
      step: hist.length,
      currIdx: null,
      stack: [...stack],
      res: [...res],
      desc: `Scan complete! Remaining indices in stack [${stack.join(", ")}] have no strictly greater elements to their right (-1).`
    });

    return hist;
  }, [ngeArray]);

  // -------------------------------------------------------------
  // WORKBENCH 5: Stock Span Problem Studio
  // -------------------------------------------------------------
  const stockPrices = useMemo(() => [100, 80, 60, 70, 60, 75, 85], []);
  const [spanStep, setSpanStep] = useState(0);

  const spanHistory = useMemo(() => {
    const hist = [];
    const n = stockPrices.length;
    const spans = new Array(n).fill(1);
    const stack = []; // indices of decreasing prices

    hist.push({
      i: null,
      stack: [],
      spans: [...spans],
      desc: "Start: empty stack. Each day begins with base span = 1 (today)."
    });

    for (let i = 0; i < n; i++) {
      const p = stockPrices[i];
      while (stack.length > 0 && stockPrices[stack[stack.length - 1]] <= p) {
        stack.pop();
      }
      const s = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
      spans[i] = s;
      stack.push(i);

      hist.push({
        i,
        stack: [...stack],
        spans: [...spans],
        desc: `Day ${i + 1} ($${p}): Popped lesser/equal past days. Nearest strictly greater day index = ${stack.length > 1 ? stack[stack.length - 2] : "none"}. Span = ${s}.`
      });
    }
    return hist;
  }, [stockPrices]);

  // -------------------------------------------------------------
  // WORKBENCH 6: Largest Rectangle in Histogram Studio
  // -------------------------------------------------------------
  const histHeights = useMemo(() => [2, 1, 5, 6, 2, 3], []);
  const [histStep, setHistStep] = useState(0);

  const histTrace = useMemo(() => {
    const trace = [];
    const heights = [...histHeights, 0]; // virtual sentinel bar
    const stack = [];
    let maxArea = 0;

    trace.push({
      i: 0,
      stack: [],
      maxArea: 0,
      currentCalc: null,
      desc: "Initial: stack is empty. Virtual sentinel bar (height 0) appended at end."
    });

    for (let i = 0; i < heights.length; i++) {
      const curH = heights[i];
      while (stack.length > 0 && heights[stack[stack.length - 1]] > curH) {
        const hIdx = stack.pop();
        const h = heights[hIdx];
        const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        const area = h * w;
        maxArea = Math.max(maxArea, area);
        trace.push({
          i,
          stack: [...stack],
          maxArea,
          currentCalc: { hIdx, h, w, area },
          desc: `Bar ${hIdx} (height ${h}) bounded on right by idx ${i} (height ${curH}). Width = ${w}, Area = ${h} × ${w} = ${area}. Max Area = ${maxArea}!`
        });
      }
      if (i < histHeights.length) {
        stack.push(i);
        trace.push({
          i,
          stack: [...stack],
          maxArea,
          currentCalc: null,
          desc: `Pushed bar index ${i} (height ${curH}) onto increasing stack.`
        });
      }
    }
    return trace;
  }, [histHeights]);

  // -------------------------------------------------------------
  // WORKBENCH 7: Sliding Window Maximum (Monotonic Deque)
  // -------------------------------------------------------------
  const swArray = useMemo(() => [1, 3, -1, -3, 5, 3, 6, 7], []);
  const [swK, setSwK] = useState(3);
  const [swStep, setSwStep] = useState(0);

  const swTrace = useMemo(() => {
    const trace = [];
    const n = swArray.length;
    const deque = []; // stores indices
    const result = [];

    trace.push({
      i: null,
      deque: [],
      result: [],
      desc: `Initial: window size k = ${swK}. Deque is empty.`
    });

    for (let i = 0; i < n; i++) {
      // 1. Remove expired
      while (deque.length > 0 && deque[0] <= i - swK) {
        deque.shift();
      }
      // 2. Remove smaller elements from rear
      while (deque.length > 0 && swArray[deque[deque.length - 1]] <= swArray[i]) {
        deque.pop();
      }
      deque.push(i);

      if (i >= swK - 1) {
        result.push(swArray[deque[0]]);
      }

      trace.push({
        i,
        deque: [...deque],
        result: [...result],
        desc: `Index ${i} (val ${swArray[i]}): Evicted expired/smaller candidates. Deque front (idx ${deque[0]}, val ${swArray[deque[0]]}) is window max!`
      });
    }
    return trace;
  }, [swArray, swK]);

  // -------------------------------------------------------------
  // WORKBENCH 8: Balanced Parentheses Validator
  // -------------------------------------------------------------
  const [bracketStr, setBracketStr] = useState("([{}])");
  const parenResult = useMemo(() => {
    const stack = [];
    const steps = [];
    let valid = true;

    for (let i = 0; i < bracketStr.length; i++) {
      const ch = bracketStr[i];
      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push(ch);
        steps.push({ ch, stack: [...stack], action: `Encountered open bracket '${ch}' -> Pushed onto stack.` });
      } else if (ch === ')' || ch === ']' || ch === '}') {
        if (stack.length === 0) {
          valid = false;
          steps.push({ ch, stack: [], action: `Closing bracket '${ch}' with empty stack -> INVALID!` });
          break;
        }
        const top = stack.pop();
        const matches = (ch === ')' && top === '(') || (ch === ']' && top === '[') || (ch === '}' && top === '{');
        if (!matches) {
          valid = false;
          steps.push({ ch, stack: [...stack], action: `Mismatch! Found '${ch}' but expected match for '${top}' -> INVALID!` });
          break;
        } else {
          steps.push({ ch, stack: [...stack], action: `Matched '${top}' with '${ch}' -> Popped successfully.` });
        }
      }
    }
    if (valid && stack.length > 0) {
      valid = false;
      steps.push({ ch: "end", stack: [...stack], action: `Unmatched opening brackets remaining on stack -> INVALID!` });
    }
    return { valid, steps };
  }, [bracketStr]);

  // -------------------------------------------------------------
  // QUIZ DATA (15 MCQs matching Section 62 & 65)
  // -------------------------------------------------------------
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      q: "What principle does a stack follow?",
      options: ["FIFO", "LIFO", "Random order", "Sorted order"],
      correct: 1,
      exp: "Stack follows Last In, First Out (LIFO) where the most recently inserted element is always popped first."
    },
    {
      id: 2,
      q: "Which operation inserts an element into a stack?",
      options: ["Pop", "Peek", "Push", "Dequeue"],
      correct: 2,
      exp: "The `push()` operation places a new element onto the top of the stack."
    },
    {
      id: 3,
      q: "Which operation removes an element from the top of a stack?",
      options: ["Push", "Pop", "Enqueue", "Offer"],
      correct: 1,
      exp: "The `pop()` operation removes and returns the current top item from the stack."
    },
    {
      id: 4,
      q: "What principle does a normal queue follow?",
      options: ["LIFO", "FIFO", "Random order", "Reverse order"],
      correct: 1,
      exp: "A queue operates under First In, First Out (FIFO) semantics, processing items in arrival order."
    },
    {
      id: 5,
      q: "Where is an element inserted in a standard queue?",
      options: ["Front", "Rear", "Middle", "Random position"],
      correct: 1,
      exp: "In a standard queue, elements enter at the rear (tail) and exit from the front (head)."
    },
    {
      id: 6,
      q: "What is the primary purpose of a circular queue?",
      options: ["Sort elements", "Reuse freed array positions through wrap-around", "Reverse elements", "Remove duplicates"],
      correct: 1,
      exp: "Circular indexing `(index + 1) % capacity` wraps around to index 0, allowing freed slots to be reused without shifting."
    },
    {
      id: 7,
      q: "What is a deque (Double-Ended Queue)?",
      options: ["A stack with no removal operation", "A queue that supports insertion and deletion at both ends", "A sorting algorithm", "A tree structure"],
      correct: 1,
      exp: "A deque allows insertion and removal at both the front and rear in constant time."
    },
    {
      id: 8,
      q: "Which Java class is commonly recommended for stack implementation?",
      options: ["ArrayList", "HashMap", "ArrayDeque", "TreeSet"],
      correct: 2,
      exp: "Java official documentation recommends `ArrayDeque` over the legacy `Stack` class due to modern unsynchronized performance."
    },
    {
      id: 9,
      q: "Which algorithm uses a monotonic stack?",
      options: ["Binary search", "Next Greater Element", "Merge sort", "Linear search"],
      correct: 1,
      exp: "Next Greater Element maintains indices in a monotonic decreasing stack to resolve answers in O(n) total time."
    },
    {
      id: 10,
      q: "What is the time complexity of balanced-parentheses checking?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
      exp: "Every bracket character is pushed or popped at most once, yielding linear O(n) complexity."
    },
    {
      id: 11,
      q: "What is the time complexity of the optimized Stock Span algorithm?",
      options: ["O(n²)", "O(n log n)", "O(n)", "O(2ⁿ)"],
      correct: 2,
      exp: "Because each price index is pushed once and popped at most once, the total amortized time across all days is O(n)."
    },
    {
      id: 12,
      q: "Which structure is used for Sliding Window Maximum in O(n) time?",
      options: ["Ordinary stack", "Monotonic deque", "Binary search tree only", "Heap only"],
      correct: 1,
      exp: "A monotonic deque preserves maximum candidates at the front and removes smaller expired items from the rear/front."
    },
    {
      id: 13,
      q: "What is the auxiliary space complexity of the sliding-window deque solution?",
      options: ["O(1)", "O(log n)", "O(k)", "O(n²)"],
      correct: 2,
      exp: "The deque holds indices for only the active window, storing at most k candidates at any time."
    },
    {
      id: 14,
      q: "Which data structure is fundamentally used in Breadth-First Search (BFS)?",
      options: ["Stack", "Queue", "Heap", "Set only"],
      correct: 1,
      exp: "BFS visits vertices level-by-level, requiring a FIFO queue to process newly discovered nodes in arrival order."
    },
    {
      id: 15,
      q: "Which structure naturally supports undo operations in reverse order?",
      options: ["Queue", "Stack", "Array only", "Graph"],
      correct: 1,
      exp: "Undo mechanisms reverse the most recent operation first, directly matching the LIFO property of a stack."
    }
  ], []);

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizQuestions, selectedAnswers]);

  // -------------------------------------------------------------
  // LABS & ASSIGNMENTS TRACKER
  // -------------------------------------------------------------
  const labsAndAssignments = useMemo(() => [
    { id: "l1", type: "Lab", title: "Lab 1: Fixed-Capacity Array Stack", goal: "Implement push, pop, peek, isFull, isEmpty, and handle underflow/overflow exceptions." },
    { id: "l2", type: "Lab", title: "Lab 2: Generic Linked-List Stack", goal: "Implement generic Node<T>, O(1) top prepend/removal, and dynamic memory growth." },
    { id: "l3", type: "Lab", title: "Lab 3: Circular Array Queue", goal: "Implement modulo indexing (rear + 1) % C, size tracking, and full/empty state disambiguation." },
    { id: "l4", type: "Lab", title: "Lab 4: Linked-List Queue", goal: "Maintain front and rear pointers, O(1) tail enqueue, O(1) head dequeue, and null transitions." },
    { id: "l5", type: "Lab", title: "Lab 5: Balanced Parentheses Checker", goal: "Validate (), [], and {} brackets with order precedence and unmatched opener/closer detection." },
    { id: "l6", type: "Lab", title: "Lab 6: Sliding Window Maximum Deque", goal: "Implement monotonic decreasing index deque, window expiration, and O(n) linear performance." },
    { id: "a1", type: "Assignment", title: "Assignment 1: Balanced Parentheses Validator", goal: "Validate string brackets using Java ArrayDeque; handle empty strings and nested delimiters." },
    { id: "a2", type: "Assignment", title: "Assignment 2: Next Greater Element", goal: "Monotonic decreasing stack in O(n) time; return array of first strictly larger elements to right." },
    { id: "a3", type: "Assignment", title: "Assignment 3: Previous Smaller Element", goal: "Nearest smaller element to left using monotonic stack; handle duplicate elements correctly." },
    { id: "a4", type: "Assignment", title: "Assignment 4: Stock Span Problem", goal: "Calculate consecutive non-greater daily prices using stack of day indices in O(n) amortized time." },
    { id: "a5", type: "Assignment", title: "Assignment 5: Largest Rectangle in Histogram", goal: "Monotonic increasing stack with virtual zero-height sentinel bar and long area math." },
    { id: "a6", type: "Assignment", title: "Assignment 6: Sliding Window Maximum", goal: "ArrayDeque index sliding window; compare against O(nk) brute force." },
    { id: "a7", type: "Assignment", title: "Assignment 7: Min Stack in O(1) Space", goal: "Design stack supporting getMin() in O(1) using auxiliary min tracking or delta encoding." },
    { id: "a8", type: "Assignment", title: "Assignment 8: Queue Using Two Stacks", goal: "Implement FIFO queue with input and output stacks in O(1) amortized time." },
    { id: "a9", type: "Assignment", title: "Assignment 9: Stack Using Two Queues", goal: "Implement LIFO stack with two FIFO queues; compare push-heavy vs pop-heavy trade-offs." },
    { id: "a10", type: "Assignment", title: "Assignment 10: Postfix Expression Evaluator", goal: "Tokenize arithmetic expressions (+, -, *, /) and evaluate using operand stack." }
  ], []);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return JavaStacksQueuesSections;
    const q = searchQuery.toLowerCase();
    return JavaStacksQueuesSections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans selection:bg-orange-500/20 selection:text-orange-900 flex flex-col justify-between px-4 py-6 sm:px-8 sm:py-10 md:px-12">
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
                Module 10
              </span>
              <h1 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-orange-600 hidden xs:inline" />
                Stacks, Queues & Deques
              </h1>
            </div>
          </div>

          {/* View Mode Toggle */}
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
              <Layers className="w-3.5 h-3.5" />
              <span>LINEAR ADTS · MONOTONIC STRUCTURES · 27 PARTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Module 10: Stacks, Queues & Deques
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
              Master the foundational linear Abstract Data Types: LIFO Stacks, FIFO Queues, Double-Ended Queues (Deques),
              circular array queues, Java's ArrayDeque, and powerful monotonic algorithms (Next Greater Element, Stock Span,
              Largest Rectangle in Histogram, and Sliding Window Maximum).
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-300">
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <Box className="w-3.5 h-3.5 text-orange-400" /> Stack (LIFO) & Queue (FIFO)
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Monotonic Stacks & Deques
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> 15 MCQs & 16 Labs/Assignments
              </span>
            </div>
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <ModuleNav
          track="java"
          courseId="java-programming"
          currentModuleId="stacks-queues"
          prevRoute="/learning/java/linked-lists"
          nextRoute="/learning/java/hashing"
        />

        {/* ======================================================== */}
        {/* VIEW MODE: READER MODE (Complete 27-Part Textbook) */}
        {/* ======================================================== */}
        {viewMode === "reader" ? (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-xl border border-[#e7e3da] shadow-2xs">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">
                  Full Curriculum Reader ({JavaStacksQueuesSections.length} Sections)
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
                { id: "stackStudio", label: "Stack Studio (LIFO)", icon: Layers },
                { id: "circularQueue", label: "Circular Queue (FIFO)", icon: Repeat },
                { id: "dequeStudio", label: "Deque Studio", icon: ArrowDownUp },
                { id: "nextGreater", label: "Next Greater Element", icon: TrendingUp },
                { id: "stockSpan", label: "Stock Span Problem", icon: BarChart3 },
                { id: "histogram", label: "Histogram Max Area", icon: Rows },
                { id: "slidingWindow", label: "Sliding Window Max", icon: FastForward },
                { id: "parentheses", label: "Bracket Validator", icon: Code2 },
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

            {/* TAB 1: STACK STUDIO (LIFO) */}
            {activeTab === "stackStudio" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Interactive ADT Studio
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Stack (LIFO — Last In, First Out)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Push items onto top and pop from top. Demonstrates stack underflow and overflow conditions.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">Capacity:</span>
                      <select
                        value={stackCapacity}
                        onChange={(e) => setStackCapacity(parseInt(e.target.value, 10))}
                        className="px-2.5 py-1 text-xs bg-stone-100 border border-stone-300 rounded font-mono"
                      >
                        <option value={4}>4 items</option>
                        <option value={5}>5 items</option>
                        <option value={6}>6 items</option>
                      </select>
                      <button
                        onClick={handleClearStack}
                        className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                        title="Clear Stack"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Vertical Visual Stack */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-4">
                    <div className="flex flex-col items-center">
                      <div className="w-48 border-x-4 border-b-4 border-stone-700 rounded-b-2xl p-2 bg-[#faf8f5] flex flex-col-reverse gap-2 min-h-[220px] shadow-inner justify-start">
                        {Array.from({ length: stackCapacity }).map((_, idx) => {
                          const val = stackItems[idx];
                          const isTop = idx === stackItems.length - 1;
                          const exists = idx < stackItems.length;

                          return (
                            <div
                              key={idx}
                              className={`w-full py-2.5 rounded-xl border text-center font-mono text-xs font-bold transition-all duration-300 ${
                                isTop
                                  ? "bg-orange-500 text-white border-orange-600 ring-4 ring-orange-500/20 shadow-md"
                                  : exists
                                  ? "bg-white text-stone-800 border-stone-300 shadow-2xs"
                                  : "bg-stone-100/70 text-stone-400 border-dashed border-stone-300"
                              }`}
                            >
                              {exists ? (
                                <div className="flex items-center justify-between px-3">
                                  <span className="text-[10px] text-stone-400">idx {idx}</span>
                                  <span className="text-sm">{val}</span>
                                  {isTop ? (
                                    <span className="text-[10px] bg-white text-orange-700 px-1.5 py-0.5 rounded uppercase font-bold">
                                      TOP
                                    </span>
                                  ) : (
                                    <span className="w-7" />
                                  )}
                                </div>
                              ) : (
                                <span className="text-[11px] text-stone-400">[ empty slot {idx} ]</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-xs font-mono text-stone-500 font-bold mt-2">Stack Base (Index 0)</span>
                    </div>

                    {/* Operational Controls */}
                    <div className="w-full md:w-80 space-y-3 p-4 rounded-xl bg-[#faf8f5] border border-stone-200">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={stackInput}
                          onChange={(e) => setStackInput(e.target.value)}
                          placeholder="Value"
                          className="w-24 px-3 py-1.5 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                        <button
                          onClick={handlePush}
                          className="flex-1 px-3 py-1.5 text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
                        >
                          push(val) O(1)
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={handlePop}
                          className="px-3 py-1.5 text-xs font-bold bg-white border border-stone-300 hover:bg-red-50 hover:text-red-700 hover:border-red-300 rounded transition-colors text-stone-800"
                        >
                          pop() O(1)
                        </button>
                        <button
                          onClick={handlePeek}
                          className="px-3 py-1.5 text-xs font-bold bg-white border border-stone-300 hover:bg-stone-100 rounded transition-colors text-stone-800"
                        >
                          peek() O(1)
                        </button>
                      </div>

                      <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-200 space-y-1">
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span className="font-bold text-stone-800">{stackItems.length} / {stackCapacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Top Index:</span>
                          <span className="font-bold text-stone-800">{stackItems.length - 1}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Empty:</span>
                          <span className="font-bold text-stone-800">{stackItems.length === 0 ? "true" : "false"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Full:</span>
                          <span className="font-bold text-stone-800">{stackItems.length === stackCapacity ? "true" : "false"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status log */}
                  <div className="p-3 bg-neutral-900 rounded-xl text-neutral-300 font-mono text-xs flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="text-orange-400 font-bold">LOG:</span>
                    <span className="truncate">{stackLog}</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CIRCULAR QUEUE (FIFO WITH WRAP-AROUND) */}
            {activeTab === "circularQueue" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Interactive FIFO Studio
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Circular Array Queue (Modulo Index Wrap-around)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Enqueue at rear `(rear + 1) % C` and dequeue from front `(front + 1) % C`. Reuses freed slots without element shifting.
                      </p>
                    </div>

                    <button
                      onClick={handleResetCQ}
                      className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Array slots with Front & Rear pointers */}
                  <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 space-y-6">
                    <div className="grid grid-cols-5 gap-3">
                      {cqItems.map((val, idx) => {
                        const isFront = idx === cqFront && cqSize > 0;
                        const isRear = idx === cqRear;
                        const hasVal = val !== null;

                        return (
                          <div key={idx} className="flex flex-col items-center">
                            {/* Pointers above slot */}
                            <div className="h-6 flex items-center gap-1 font-mono text-[10px] font-bold">
                              {isFront && (
                                <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white shadow-2xs">
                                  FRONT
                                </span>
                              )}
                              {isRear && (
                                <span className="px-1.5 py-0.5 rounded bg-orange-500 text-white shadow-2xs">
                                  REAR
                                </span>
                              )}
                            </div>

                            {/* Slot box */}
                            <div
                              className={`w-full py-4 rounded-xl border-2 font-mono flex flex-col items-center justify-center shadow-xs transition-all ${
                                isFront && isRear && cqSize > 0
                                  ? "border-amber-500 bg-amber-50 ring-4 ring-amber-500/20"
                                  : isFront
                                  ? "border-emerald-500 bg-emerald-50"
                                  : isRear
                                  ? "border-orange-500 bg-orange-500"
                                  : hasVal
                                  ? "border-stone-400 bg-white"
                                  : "border-dashed border-stone-300 bg-stone-100/50"
                              }`}
                            >
                              <span className="text-[10px] text-stone-400">Slot {idx}</span>
                              <span className="text-base font-bold text-stone-900">
                                {hasVal ? val : "—"}
                              </span>
                            </div>

                            <span className="text-[10px] font-mono text-stone-400 mt-1">idx {idx}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Operational controls */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#faf8f5] rounded-xl border border-stone-200">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <input
                        type="number"
                        value={cqInput}
                        onChange={(e) => setCqInput(e.target.value)}
                        placeholder="Value"
                        className="w-24 px-3 py-1.5 text-xs bg-white border border-stone-300 rounded font-mono"
                      />
                      <button
                        onClick={handleEnqueue}
                        className="px-4 py-1.5 text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
                      >
                        enqueue(val) O(1)
                      </button>
                      <button
                        onClick={handleDequeue}
                        className="px-4 py-1.5 text-xs font-bold bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 rounded transition-colors"
                      >
                        dequeue() O(1)
                      </button>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-stone-600">
                      <span>Front: <strong>{cqFront}</strong></span>
                      <span>Rear: <strong>{cqRear}</strong></span>
                      <span>Size: <strong>{cqSize} / {cqCapacity}</strong></span>
                    </div>
                  </div>

                  {/* Status log */}
                  <div className="p-3 bg-neutral-900 rounded-xl text-neutral-300 font-mono text-xs flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="text-orange-400 font-bold">LOG:</span>
                    <span className="truncate">{cqLog}</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DEQUE STUDIO */}
            {activeTab === "dequeStudio" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Double-Ended Queue
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Deque (Insert & Remove at Both Ends)
                    </h3>
                    <p className="text-xs text-stone-500">
                      Supports `addFirst`, `addLast`, `removeFirst`, `removeLast` in amortized O(1) time. Implemented via Java's `ArrayDeque`.
                    </p>
                  </div>

                  {/* Deque chain */}
                  <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 flex items-center justify-center overflow-x-auto min-h-[140px]">
                    {dequeItems.length === 0 ? (
                      <span className="text-xs font-mono text-stone-400">[ Deque is Empty ]</span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-orange-100 border border-orange-300 text-orange-800 text-[10px] font-bold font-mono">
                          FRONT
                        </span>
                        <span className="text-stone-400 font-bold">⇄</span>

                        {dequeItems.map((val, idx) => (
                          <React.Fragment key={idx}>
                            <div className="px-4 py-2.5 rounded-xl border-2 border-stone-700 bg-white font-mono text-center shadow-xs">
                              <div className="text-[10px] text-stone-400">idx {idx}</div>
                              <div className="text-sm font-bold text-stone-900">{val}</div>
                            </div>
                            {idx < dequeItems.length - 1 && <span className="text-stone-400 font-bold">⇄</span>}
                          </React.Fragment>
                        ))}

                        <span className="text-stone-400 font-bold">⇄</span>
                        <span className="px-2 py-0.5 rounded bg-orange-500 border border-orange-500 text-orange-400 text-[10px] font-bold font-mono">
                          REAR
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Controls */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-stone-200 space-y-2">
                      <span className="text-xs font-bold text-stone-900 font-mono">Front Operations:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleAddFirst}
                          className="flex-1 py-1.5 text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
                        >
                          addFirst({dequeInput})
                        </button>
                        <button
                          onClick={handleRemoveFirst}
                          className="flex-1 py-1.5 text-xs font-bold bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 rounded transition-colors"
                        >
                          removeFirst()
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-stone-200 space-y-2">
                      <span className="text-xs font-bold text-stone-900 font-mono">Rear Operations:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleAddLast}
                          className="flex-1 py-1.5 text-xs font-bold bg-orange-500 hover:bg-orange-500 text-white rounded transition-colors"
                        >
                          addLast({dequeInput})
                        </button>
                        <button
                          onClick={handleRemoveLast}
                          className="flex-1 py-1.5 text-xs font-bold bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 rounded transition-colors"
                        >
                          removeLast()
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-stone-500">Value to insert:</span>
                    <input
                      type="number"
                      value={dequeInput}
                      onChange={(e) => setDequeInput(e.target.value)}
                      className="w-24 px-2 py-1 text-xs bg-white border border-stone-300 rounded font-mono"
                    />
                  </div>

                  {/* Status log */}
                  <div className="p-3 bg-neutral-900 rounded-xl text-neutral-300 font-mono text-xs flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="text-orange-400 font-bold">LOG:</span>
                    <span className="truncate">{dequeLog}</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: MONOTONIC STACK (NEXT GREATER ELEMENT) */}
            {activeTab === "nextGreater" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Monotonic Stack Workbench
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Next Greater Element (Monotonic Decreasing Stack)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Trace how a stack of unresolved indices achieves O(n) total time because every element is pushed and popped at most once.
                      </p>
                    </div>

                    <button
                      onClick={() => setNgeStep(0)}
                      className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {(() => {
                    const stepData = ngeHistory[Math.min(ngeStep, ngeHistory.length - 1)];
                    return (
                      <div className="space-y-4">
                        {/* Array elements & Next Greater Answers */}
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 space-y-4">
                          <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
                            {ngeArray.map((val, idx) => {
                              const isCurr = stepData.currIdx === idx;
                              const isPopped = stepData.poppedIdx === idx;
                              const inStack = stepData.stack.includes(idx);
                              const answer = stepData.res[idx];

                              return (
                                <div key={idx} className="flex flex-col items-center">
                                  <div className="h-5 text-[10px] font-mono font-bold">
                                    {isCurr && <span className="text-orange-600">scan</span>}
                                    {isPopped && <span className="text-emerald-600 font-bold">resolved!</span>}
                                  </div>

                                  <div
                                    className={`px-4 py-3 rounded-xl border-2 font-mono flex flex-col items-center justify-center min-w-[56px] transition-all ${
                                      isCurr
                                        ? "border-orange-500 bg-orange-50 ring-4 ring-orange-500/20"
                                        : inStack
                                        ? "border-orange-500 bg-orange-500"
                                        : "border-stone-400 bg-white"
                                    }`}
                                  >
                                    <span className="text-[10px] text-stone-400">idx {idx}</span>
                                    <span className="text-base font-bold text-stone-900">{val}</span>
                                  </div>

                                  <div className="mt-2 text-xs font-mono">
                                    <span className="text-[10px] text-stone-400">NGE: </span>
                                    <span className={`font-bold ${answer !== -1 ? "text-emerald-600" : "text-stone-400"}`}>
                                      {answer}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Stack preview */}
                        <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="text-stone-400">Monotonic Stack (indices):</span>
                            <span className="text-orange-400 font-bold">
                              [{stepData.stack.map((idx) => `idx ${idx} (${ngeArray[idx]})`).join(", ")}]
                            </span>
                          </div>
                          <span className="text-stone-400">Top is rightmost</span>
                        </div>

                        {/* Commentary */}
                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-stone-800 flex items-center justify-between">
                          <p className="font-medium">{stepData.desc}</p>
                          <span className="font-mono text-orange-800 font-bold shrink-0">
                            Step {ngeStep} / {ngeHistory.length - 1}
                          </span>
                        </div>

                        {/* Stepper buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            disabled={ngeStep === 0}
                            onClick={() => setNgeStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Back
                          </button>
                          <button
                            disabled={ngeStep === ngeHistory.length - 1}
                            onClick={() => setNgeStep((s) => Math.min(ngeHistory.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-40"
                          >
                            Advance Monotonic Stack →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 5: STOCK SPAN PROBLEM */}
            {activeTab === "stockSpan" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Financial Time-Series Analysis
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Stock Span Problem (Monotonic Decreasing Stack)
                      </h3>
                      <p className="text-xs text-stone-500">
                        Calculates consecutive days leading up to day `i` where price was &le; price[i].
                      </p>
                    </div>

                    <button
                      onClick={() => setSpanStep(0)}
                      className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {(() => {
                    const stepData = spanHistory[Math.min(spanStep, spanHistory.length - 1)];
                    return (
                      <div className="space-y-4">
                        {/* Price bars visualization */}
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 flex items-end justify-center gap-4 h-56">
                          {stockPrices.map((price, idx) => {
                            const isCurrent = stepData.i === idx;
                            const spanVal = stepData.spans[idx];
                            const heightPct = Math.round((price / 110) * 100);

                            return (
                              <div key={idx} className="flex flex-col items-center gap-1 h-full justify-end">
                                <span className="text-[10px] font-mono text-stone-500 font-bold">${price}</span>
                                <div
                                  style={{ height: `${heightPct}%` }}
                                  className={`w-12 rounded-t-lg transition-all duration-300 flex flex-col items-center justify-end pb-1 ${
                                    isCurrent
                                      ? "bg-orange-500 text-white shadow-md ring-4 ring-orange-500/20"
                                      : idx <= (stepData.i ?? -1)
                                      ? "bg-emerald-600 text-white"
                                      : "bg-stone-200 text-stone-400"
                                  }`}
                                >
                                  <span className="text-[10px] font-mono font-bold">
                                    {idx <= (stepData.i ?? -1) ? `S=${spanVal}` : ""}
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono text-stone-400">Day {idx + 1}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Commentary */}
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-stone-800 flex items-center justify-between">
                          <p className="font-medium">{stepData.desc}</p>
                          <span className="font-mono text-emerald-800 font-bold shrink-0">
                            Day {(stepData.i ?? -1) + 1} / {stockPrices.length}
                          </span>
                        </div>

                        {/* Stepper buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            disabled={spanStep === 0}
                            onClick={() => setSpanStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Back
                          </button>
                          <button
                            disabled={spanStep === spanHistory.length - 1}
                            onClick={() => setSpanStep((s) => Math.min(spanHistory.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40"
                          >
                            Process Next Day →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 6: LARGEST RECTANGLE IN HISTOGRAM */}
            {activeTab === "histogram" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Geometry & Monotonic Stack
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Largest Rectangle in Histogram (Max Area O(n))
                      </h3>
                      <p className="text-xs text-stone-500">
                        When a shorter bar arrives, preceding taller bars are popped and their maximal rectangular areas finalized.
                      </p>
                    </div>

                    <button
                      onClick={() => setHistStep(0)}
                      className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {(() => {
                    const stepData = histTrace[Math.min(histStep, histTrace.length - 1)];
                    return (
                      <div className="space-y-4">
                        {/* Histogram bars */}
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 flex items-end justify-center gap-3 h-56">
                          {histHeights.map((h, idx) => {
                            const isPopped = stepData.currentCalc?.hIdx === idx;
                            const inStack = stepData.stack.includes(idx);
                            const heightPct = Math.round((h / 7) * 100);

                            return (
                              <div key={idx} className="flex flex-col items-center gap-1 h-full justify-end">
                                <span className="text-[10px] font-mono text-stone-500 font-bold">{h}</span>
                                <div
                                  style={{ height: `${heightPct}%` }}
                                  className={`w-12 rounded-t-lg transition-all duration-300 flex items-center justify-center font-mono text-xs font-bold ${
                                    isPopped
                                      ? "bg-red-500 text-white shadow-lg ring-4 ring-red-500/20"
                                      : inStack
                                      ? "bg-orange-500 text-white"
                                      : "bg-stone-300 text-stone-700"
                                  }`}
                                >
                                  {isPopped ? "POP" : ""}
                                </div>
                                <span className="text-[10px] font-mono text-stone-400">idx {idx}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Calculation details card */}
                        <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between text-xs font-mono">
                          <div>
                            <span className="text-stone-400">Max Area Recorded: </span>
                            <span className="text-orange-400 font-bold text-sm">{stepData.maxArea}</span>
                          </div>
                          {stepData.currentCalc && (
                            <div className="text-stone-300">
                              Formula: h({stepData.currentCalc.h}) × w({stepData.currentCalc.w}) = <strong className="text-emerald-400">{stepData.currentCalc.area}</strong>
                            </div>
                          )}
                        </div>

                        {/* Commentary */}
                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-stone-800 flex items-center justify-between">
                          <p className="font-medium">{stepData.desc}</p>
                          <span className="font-mono text-orange-800 font-bold shrink-0">
                            Step {histStep} / {histTrace.length - 1}
                          </span>
                        </div>

                        {/* Stepper buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            disabled={histStep === 0}
                            onClick={() => setHistStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Back
                          </button>
                          <button
                            disabled={histStep === histTrace.length - 1}
                            onClick={() => setHistStep((s) => Math.min(histTrace.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-40"
                          >
                            Advance Histogram Step →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 7: SLIDING WINDOW MAXIMUM */}
            {activeTab === "slidingWindow" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Monotonic Queue Workbench
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        Sliding Window Maximum (Monotonic Deque O(n))
                      </h3>
                      <p className="text-xs text-stone-500">
                        Deque maintains indices of useful maximum candidates in decreasing order. Front element is window maximum.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500">k (Window):</span>
                      <select
                        value={swK}
                        onChange={(e) => {
                          setSwK(parseInt(e.target.value, 10));
                          setSwStep(0);
                        }}
                        className="px-2.5 py-1 text-xs bg-stone-100 border border-stone-300 rounded font-mono"
                      >
                        <option value={2}>k = 2</option>
                        <option value={3}>k = 3</option>
                        <option value={4}>k = 4</option>
                      </select>
                      <button
                        onClick={() => setSwStep(0)}
                        className="p-1.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600"
                        title="Reset"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {(() => {
                    const stepData = swTrace[Math.min(swStep, swTrace.length - 1)];
                    return (
                      <div className="space-y-4">
                        {/* Array elements with sliding window highlight */}
                        <div className="p-6 bg-[#faf8f5] rounded-xl border border-stone-200 space-y-4">
                          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
                            {swArray.map((val, idx) => {
                              const inWindow = stepData.i !== null && idx <= stepData.i && idx > stepData.i - swK;
                              const inDeque = stepData.deque.includes(idx);
                              const isMax = stepData.deque[0] === idx && inWindow;

                              return (
                                <div key={idx} className="flex flex-col items-center">
                                  <div className="h-5 text-[10px] font-mono font-bold">
                                    {isMax && <span className="text-emerald-600 uppercase">max</span>}
                                  </div>

                                  <div
                                    className={`px-3 py-2.5 rounded-xl border-2 font-mono flex flex-col items-center justify-center min-w-[50px] transition-all ${
                                      isMax
                                        ? "border-emerald-500 bg-emerald-50 ring-4 ring-emerald-500/20"
                                        : inWindow
                                        ? "border-orange-500 bg-orange-50/50"
                                        : inDeque
                                        ? "border-orange-500 bg-orange-500"
                                        : "border-stone-300 bg-white"
                                    }`}
                                  >
                                    <span className="text-[9px] text-stone-400">idx {idx}</span>
                                    <span className="text-sm font-bold text-stone-900">{val}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Results array */}
                        <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between text-xs font-mono">
                          <div>
                            <span className="text-stone-400">Output Windows Maximums: </span>
                            <span className="text-orange-400 font-bold">[{stepData.result.join(", ")}]</span>
                          </div>
                          <div>
                            <span className="text-stone-400">Deque Indices: </span>
                            <span className="text-orange-300 font-bold">[{stepData.deque.join(", ")}]</span>
                          </div>
                        </div>

                        {/* Commentary */}
                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-stone-800 flex items-center justify-between">
                          <p className="font-medium">{stepData.desc}</p>
                          <span className="font-mono text-orange-800 font-bold shrink-0">
                            Step {swStep} / {swTrace.length - 1}
                          </span>
                        </div>

                        {/* Stepper buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            disabled={swStep === 0}
                            onClick={() => setSwStep((s) => Math.max(0, s - 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 hover:bg-stone-100 disabled:opacity-40"
                          >
                            ← Back
                          </button>
                          <button
                            disabled={swStep === swTrace.length - 1}
                            onClick={() => setSwStep((s) => Math.min(swTrace.length - 1, s + 1))}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-40"
                          >
                            Slide Window Forward →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* TAB 8: BRACKET VALIDATOR */}
            {activeTab === "parentheses" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="border-b border-stone-100 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Syntax Parsing & Matching
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      Balanced Parentheses Validator (Stack LIFO)
                    </h3>
                    <p className="text-xs text-stone-500">
                      Push opening brackets (, [, &#123; and pop matching closers ), ], &#125;.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-stone-500">Bracket String:</span>
                    <input
                      type="text"
                      value={bracketStr}
                      onChange={(e) => setBracketStr(e.target.value)}
                      placeholder="e.g. ([{}])"
                      className="px-3 py-1.5 text-xs bg-white border border-stone-300 rounded font-mono w-64"
                    />
                    <div className="flex gap-2">
                      {["([{}])", "([)]", "{[()]}", "((("].map((example) => (
                        <button
                          key={example}
                          onClick={() => setBracketStr(example)}
                          className="px-2.5 py-1 text-xs bg-stone-100 border border-stone-200 rounded font-mono hover:bg-stone-200"
                        >
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Result banner */}
                  <div
                    className={`p-4 rounded-xl border flex items-center justify-between text-xs font-mono font-bold ${
                      parenResult.valid
                        ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                        : "bg-red-50 border-red-300 text-red-900"
                    }`}
                  >
                    <span>Result: {parenResult.valid ? "VALID BALANCED BRACKETS" : "INVALID / UNBALANCED BRACKETS"}</span>
                    <span>{parenResult.steps.length} Steps Traced</span>
                  </div>

                  {/* Step-by-step trace */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-500">Execution Trace:</span>
                    <div className="space-y-1.5 max-h-60 overflow-y-auto pr-2">
                      {parenResult.steps.map((st, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-[#faf8f5] border border-stone-200 text-xs font-mono flex items-center justify-between">
                          <span>{st.action}</span>
                          <span className="text-stone-400">Stack: [{st.stack.join(", ")}]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 9: KNOWLEDGE QUIZ */}
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
                        Test your conceptual and practical mastery of stacks, queues, deques, and monotonic algorithms.
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
                      <span>Quiz completed! Review individual explanations above.</span>
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

            {/* TAB 10: LABS & ASSIGNMENTS */}
            {activeTab === "labs" && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                        Practical Implementation Tracker
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                        6 Laboratories & 10 Coding Assignments
                      </h3>
                      <p className="text-xs text-stone-500">
                        Track your progress across hands-on implementations and major interview problem assignments.
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
