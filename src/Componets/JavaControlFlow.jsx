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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaControlFlowSections from "./JavaControlFlowSections";

export default function JavaControlFlow() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java");

  // Mode tab state: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("control-flow"); // 'control-flow' | 'loop-tracer' | 'recursion-stack' | 'pattern-generator' | 'math-toolkit' | 'quiz' | 'labs'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 1: DECISION FLOW & MODERN SWITCH EVALUATOR
  // ---------------------------------------------------------------------------
  const [testScore, setTestScore] = useState(85);
  const [dayNumber, setDayNumber] = useState(3);
  const [switchMode, setSwitchMode] = useState("expression"); // 'statement' | 'expression'

  const scoreEvaluation = useMemo(() => {
    const score = Number(testScore);
    if (isNaN(score) || score < 0 || score > 100) {
      return { grade: "Invalid", description: "Score must be between 0 and 100", branch: "else (error)" };
    }
    if (score >= 90) return { grade: "A", description: "Outstanding performance", branch: "if (score >= 90)" };
    if (score >= 80) return { grade: "B", description: "Good performance", branch: "else if (score >= 80)" };
    if (score >= 70) return { grade: "C", description: "Satisfactory performance", branch: "else if (score >= 70)" };
    if (score >= 60) return { grade: "D", description: "Pass with minimum requirements", branch: "else if (score >= 60)" };
    return { grade: "F", description: "Failing mark - remedial review needed", branch: "else" };
  }, [testScore]);

  const switchEvaluation = useMemo(() => {
    const days = [
      { num: 1, name: "Monday", type: "Weekday", energy: "Productive start" },
      { num: 2, name: "Tuesday", type: "Weekday", energy: "Deep focus" },
      { num: 3, name: "Wednesday", type: "Weekday", energy: "Midweek sprint" },
      { num: 4, name: "Thursday", type: "Weekday", energy: "Optimization" },
      { num: 5, name: "Friday", type: "Weekday", energy: "Wrap-up & retro" },
      { num: 6, name: "Saturday", type: "Weekend", energy: "Rest & relaxation" },
      { num: 7, name: "Sunday", type: "Weekend", energy: "Recharge & planning" },
    ];
    const match = days.find((d) => d.num === dayNumber);
    if (!match) return { name: "Unknown Day", type: "Invalid", energy: "N/A" };
    return match;
  }, [dayNumber]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 2: LOOP EXECUTION & DRY RUN TRACER
  // ---------------------------------------------------------------------------
  const [loopType, setLoopType] = useState("for"); // 'for' | 'while' | 'do-while'
  const [loopLimit, setLoopLimit] = useState(5);
  const [useBreakAt, setUseBreakAt] = useState(0); // 0 means no break
  const [useContinueAt, setUseContinueAt] = useState(0); // 0 means no continue

  const loopTrace = useMemo(() => {
    const trace = [];
    const limit = Math.max(1, Math.min(10, Number(loopLimit) || 5));
    let sum = 0;
    let i = 1;

    if (loopType === "for" || loopType === "while") {
      while (i <= limit) {
        if (useBreakAt > 0 && i === useBreakAt) {
          trace.push({ step: trace.length + 1, i, condition: `${i} <= ${limit} (TRUE)`, action: `break triggered at i=${i}`, sum, terminated: true });
          break;
        }
        if (useContinueAt > 0 && i === useContinueAt) {
          trace.push({ step: trace.length + 1, i, condition: `${i} <= ${limit} (TRUE)`, action: `continue triggered at i=${i} (skipped)`, sum, skipped: true });
          i++;
          continue;
        }
        sum += i;
        trace.push({ step: trace.length + 1, i, condition: `${i} <= ${limit} (TRUE)`, action: `sum += ${i} -> sum = ${sum}`, sum });
        i++;
      }
      if (!(useBreakAt > 0 && i === useBreakAt)) {
        trace.push({ step: trace.length + 1, i, condition: `${i} <= ${limit} (FALSE)`, action: "Loop terminates", sum, finished: true });
      }
    } else {
      // do-while
      do {
        if (useBreakAt > 0 && i === useBreakAt) {
          trace.push({ step: trace.length + 1, i, condition: "Pre-check N/A (Executes body first)", action: `break triggered at i=${i}`, sum, terminated: true });
          break;
        }
        if (useContinueAt > 0 && i === useContinueAt) {
          trace.push({ step: trace.length + 1, i, condition: "Pre-check N/A", action: `continue triggered at i=${i} (skipped)`, sum, skipped: true });
          i++;
          continue;
        }
        sum += i;
        trace.push({ step: trace.length + 1, i, condition: `Post-check: ${i} <= ${limit}`, action: `sum += ${i} -> sum = ${sum}`, sum });
        i++;
      } while (i <= limit);
    }
    return { trace, finalSum: sum };
  }, [loopType, loopLimit, useBreakAt, useContinueAt]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 3: RECURSION CALL STACK VISUALIZER
  // ---------------------------------------------------------------------------
  const [recursionMode, setRecursionMode] = useState("factorial"); // 'factorial' | 'fibonacci'
  const [recursionInput, setRecursionInput] = useState(4);

  const recursionFrames = useMemo(() => {
    const n = Math.max(1, Math.min(6, Number(recursionInput) || 4));
    if (recursionMode === "factorial") {
      const frames = [];
      for (let k = n; k >= 1; k--) {
        frames.push({
          depth: n - k + 1,
          call: `factorial(${k})`,
          condition: k === 1 ? "1 <= 1 (Base Case reached!)" : `${k} > 1 (Recursive Case)`,
          computation: k === 1 ? "returns 1 directly" : `awaits ${k} * factorial(${k - 1})`,
          state: k === 1 ? "BASE CASE" : "WAITING ON SUB-CALL",
          returnValue: null,
        });
      }
      // calculate returns
      let acc = 1;
      const unwound = frames.map((f, idx) => {
        const k = 1 + idx; // from base case up
        acc = acc * k;
        return { ...f, resolvedReturn: acc };
      });
      return { frames, unwound: unwound.reverse(), finalResult: acc };
    } else {
      // fibonacci
      const getFib = (val) => (val <= 1 ? val : getFib(val - 1) + getFib(val - 2));
      const result = getFib(n);
      const frames = [
        { depth: 1, call: `fibonacci(${n})`, condition: `${n} > 1 (Branching calls)`, computation: `fib(${n - 1}) + fib(${n - 2})`, state: "ROOT FRAME" },
        { depth: 2, call: `fibonacci(${n - 1})`, condition: `${n - 1} > 1`, computation: `Left subtree evaluation`, state: "BRANCH" },
        { depth: 3, call: `fibonacci(${Math.max(1, n - 2)})`, condition: "Base evaluation", computation: "Right subtree evaluation", state: "BRANCH" },
      ];
      return { frames, unwound: frames, finalResult: result };
    }
  }, [recursionMode, recursionInput]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 4: NESTED LOOP PATTERN GENERATOR
  // ---------------------------------------------------------------------------
  const [patternType, setPatternType] = useState("right-triangle");
  const [patternRows, setPatternRows] = useState(5);

  const patternOutput = useMemo(() => {
    const n = Math.max(3, Math.min(8, Number(patternRows) || 5));
    const lines = [];

    switch (patternType) {
      case "square":
        for (let r = 1; r <= n; r++) {
          lines.push("* ".repeat(n).trim());
        }
        break;
      case "right-triangle":
        for (let r = 1; r <= n; r++) {
          lines.push("* ".repeat(r).trim());
        }
        break;
      case "inverted-triangle":
        for (let r = n; r >= 1; r--) {
          lines.push("* ".repeat(r).trim());
        }
        break;
      case "increasing-numbers":
        for (let r = 1; r <= n; r++) {
          let s = "";
          for (let c = 1; c <= r; c++) s += c + " ";
          lines.push(s.trim());
        }
        break;
      case "repeated-numbers":
        for (let r = 1; r <= n; r++) {
          let s = "";
          for (let c = 1; c <= r; c++) s += r + " ";
          lines.push(s.trim());
        }
        break;
      case "pyramid":
        for (let r = 1; r <= n; r++) {
          const spaces = " ".repeat(n - r);
          const stars = "* ".repeat(r).trim();
          lines.push(spaces + stars);
        }
        break;
      case "diamond":
        // top half
        for (let r = 1; r <= n; r++) {
          const spaces = " ".repeat(n - r);
          const stars = "* ".repeat(r).trim();
          lines.push(spaces + stars);
        }
        // bottom half
        for (let r = n - 1; r >= 1; r--) {
          const spaces = " ".repeat(n - r);
          const stars = "* ".repeat(r).trim();
          lines.push(spaces + stars);
        }
        break;
      default:
        lines.push("Select a pattern");
    }
    return lines.join("\n");
  }, [patternType, patternRows]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 5: MATHEMATICAL ALGORITHMS TOOLKIT
  // ---------------------------------------------------------------------------
  const [mathAlgo, setMathAlgo] = useState("prime"); // 'prime' | 'reverse' | 'palindrome' | 'gcd' | 'armstrong'
  const [mathNum1, setMathNum1] = useState(29);
  const [mathNum2, setMathNum2] = useState(48);

  const mathResult = useMemo(() => {
    const a = Math.abs(parseInt(mathNum1, 10)) || 0;
    const b = Math.abs(parseInt(mathNum2, 10)) || 0;

    if (mathAlgo === "prime") {
      if (a <= 1) return { isPrime: false, explanation: `${a} is not prime (primes are integers > 1).`, steps: ["Check a <= 1: True"] };
      let divisor = -1;
      const steps = [];
      const limit = Math.floor(Math.sqrt(a));
      steps.push(`Testing potential divisors from 2 up to sqrt(${a}) = ${limit}`);
      for (let d = 2; d <= limit; d++) {
        if (a % d === 0) {
          divisor = d;
          steps.push(`Divisible by ${d} (${a} % ${d} == 0)`);
          break;
        } else {
          steps.push(`${a} % ${d} != 0 (clean remainder: ${a % d})`);
        }
      }
      return {
        isPrime: divisor === -1,
        explanation: divisor === -1 ? `${a} is a PRIME number! (no divisors found)` : `${a} is COMPOSITE (divisible by ${divisor}).`,
        steps,
      };
    }

    if (mathAlgo === "reverse" || mathAlgo === "palindrome") {
      let temp = a;
      let rev = 0;
      const steps = [];
      while (temp > 0) {
        const rem = temp % 10;
        rev = rev * 10 + rem;
        steps.push(`Extract digit: ${rem} | rev = rev * 10 + ${rem} -> ${rev} | Remaining temp: ${Math.floor(temp / 10)}`);
        temp = Math.floor(temp / 10);
      }
      const isPal = rev === a;
      return {
        original: a,
        reversed: rev,
        isPalindrome: isPal,
        explanation: mathAlgo === "palindrome"
          ? (isPal ? `${a} is a PALINDROME (reads identically backwards).` : `${a} is NOT a palindrome (${a} != ${rev}).`)
          : `Reverse of ${a} is ${rev}.`,
        steps,
      };
    }

    if (mathAlgo === "gcd") {
      let x = a;
      let y = b;
      const steps = [];
      while (y !== 0) {
        const rem = x % y;
        steps.push(`gcd(${x}, ${y}): ${x} % ${y} = ${rem}`);
        x = y;
        y = rem;
      }
      const gcdVal = x;
      const lcmVal = (a * b) / (gcdVal || 1);
      return {
        gcd: gcdVal,
        lcm: lcmVal,
        explanation: `Greatest Common Divisor GCD(${a}, ${b}) = ${gcdVal}. Least Common Multiple LCM(${a}, ${b}) = ${lcmVal}.`,
        steps,
      };
    }

    if (mathAlgo === "armstrong") {
      const digits = a.toString().split("").map(Number);
      const k = digits.length;
      let sum = 0;
      const steps = [];
      digits.forEach((d) => {
        const p = Math.pow(d, k);
        sum += p;
        steps.push(`Digit ${d}^${k} = ${p} (Running sum: ${sum})`);
      });
      const isArm = sum === a;
      return {
        isArmstrong: isArm,
        digitsCount: k,
        sumOfPowers: sum,
        explanation: isArm
          ? `${a} is an ARMSTRONG number! Sum of digits raised to power ${k} equals ${sum}.`
          : `${a} is NOT an Armstrong number (Sum of powers: ${sum} != ${a}).`,
        steps,
      };
    }

    return { explanation: "Select an algorithm." };
  }, [mathAlgo, mathNum1, mathNum2]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 6: QUIZ (15 Questions from Section 25 Part A)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is an algorithm?",
      options: [
        "A programming language",
        "A finite sequence of well-defined steps to solve a problem",
        "A computer hardware component",
        "A Java library",
      ],
      correctIndex: 1,
      explanation: "An algorithm is formally defined as a finite, ordered sequence of unambiguous instructions designed to solve a specific problem or computational task.",
    },
    {
      id: 2,
      question: "2. Which technique divides a large problem into smaller problems?",
      options: ["Compilation", "Decomposition", "Casting", "Inheritance"],
      correctIndex: 1,
      explanation: "Problem decomposition breaks down a complex problem into smaller, more manageable subproblems or functional units that can be solved and tested independently.",
    },
    {
      id: 3,
      question: "3. Which flowchart symbol is used for a decision?",
      options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
      correctIndex: 2,
      explanation: "In standard flowchart conventions (ANSI/ISO), the diamond symbol represents a decision/conditional branch with two or more exiting paths (e.g. Yes/No).",
    },
    {
      id: 4,
      question: "4. Which statement executes a block only if a condition is true?",
      options: ["for", "if", "break", "return"],
      correctIndex: 1,
      explanation: "The if statement evaluates a boolean condition and executes its enclosed block only if that expression evaluates to true.",
    },
    {
      id: 5,
      question: "5. Which loop executes its body at least once?",
      options: ["for", "while", "do-while", "Enhanced for"],
      correctIndex: 2,
      explanation: "A do-while loop is an exit-controlled (post-test) loop, meaning the loop body executes once before its termination condition is ever evaluated.",
    },
    {
      id: 6,
      question: "6. Which statement terminates the nearest enclosing loop?",
      options: ["continue", "break", "return only", "skip"],
      correctIndex: 1,
      explanation: "The break statement unconditionally terminates the execution of the innermost enclosing loop or switch statement.",
    },
    {
      id: 7,
      question: "7. What does continue do?",
      options: [
        "Terminates the application",
        "Terminates every loop",
        "Skips the current iteration and proceeds to the next",
        "Restarts the program",
      ],
      correctIndex: 2,
      explanation: "The continue statement halts the current iteration of the innermost loop and immediately passes control to the loop condition/update expression for the next iteration.",
    },
    {
      id: 8,
      question: "8. Which keyword specifies that a method does not return a value?",
      options: ["null", "static", "void", "final"],
      correctIndex: 2,
      explanation: "The void keyword indicates that a method performs actions but does not return any value to its caller.",
    },
    {
      id: 9,
      question: "9. What is method overloading?",
      options: [
        "Defining methods with identical names and different parameter lists",
        "Defining methods only inside loops",
        "Calling a method repeatedly",
        "Returning multiple unrelated values",
      ],
      correctIndex: 0,
      explanation: "Method overloading occurs when two or more methods within the same class share identical names but possess different parameter lists (by count, type, or order).",
    },
    {
      id: 10,
      question: "10. What is the base case in recursion?",
      options: [
        "The first variable declaration",
        "The condition that terminates recursive calls",
        "The method name",
        "The return type",
      ],
      correctIndex: 1,
      explanation: "The base case is the terminating condition in a recursive method that returns a concrete value directly without initiating further recursive calls, preventing infinite recursion.",
    },
    {
      id: 11,
      question: "11. What happens if a recursive method has no reachable terminating condition?",
      options: [
        "It always returns zero",
        "It may continue until a stack overflow occurs",
        "It automatically becomes a loop",
        "The compiler always optimizes it away",
      ],
      correctIndex: 1,
      explanation: "Without a reachable base case, recursive calls consume stack frames indefinitely until the JVM runs out of call stack memory and throws a java.lang.StackOverflowError.",
    },
    {
      id: 12,
      question: "12. What is the result of 7 % 2?",
      options: ["0", "1", "2", "3"],
      correctIndex: 1,
      explanation: "The modulo operator % returns the remainder of integer division: 7 divided by 2 is 3 with a remainder of 1.",
    },
    {
      id: 13,
      question: "13. Which statement is most suitable for a menu that must appear at least once?",
      options: ["do-while", "if", "return", "continue"],
      correctIndex: 0,
      explanation: "A do-while loop guarantees at least one execution of its body, making it ideal for console menus where options must be shown prior to reading user input.",
    },
    {
      id: 14,
      question: "14. What is the time complexity of two independent nested loops, each iterating n times?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 3,
      explanation: "Two nested loops each iterating n times execute n * n iterations in total, resulting in quadratic time complexity O(n²).",
    },
    {
      id: 15,
      question: "15. Which construct can directly produce a value in modern Java?",
      options: [
        "Traditional if statement only",
        "Switch expression",
        "break statement",
        "continue statement",
      ],
      correctIndex: 1,
      explanation: "Modern Java switch expressions (introduced in Java 14) can be evaluated directly on the right-hand side of assignments to produce a value, unlike traditional switch statements.",
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx,
    }));
  };

  const scoreCount = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  }, [userAnswers]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 7: LABS & ASSIGNMENTS TRACKER
  // ---------------------------------------------------------------------------
  const [completedLabs, setCompletedLabs] = useState({});

  const toggleLab = (id) => {
    setCompletedLabs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const labList = [
    { id: "lab-1", type: "Lab", title: "Lab 1: Decision-Making System", goal: "Determine whether a student qualifies for graduation based on cumulative grade and attendance rate." },
    { id: "lab-2", type: "Lab", title: "Lab 2: Menu-Driven Calculator", goal: "Build a console calculator offering arithmetic operations and an exit option using do-while and switch." },
    { id: "lab-3", type: "Lab", title: "Lab 3: Number Analysis", goal: "Accept a series of positive numbers terminated by -1; display count, sum, average, largest, and smallest." },
    { id: "lab-4", type: "Lab", title: "Lab 4: Multiplication Tables", goal: "Print an organized multiplication grid from 1 x 1 to 10 x 10 with formatted columns." },
    { id: "lab-5", type: "Lab", title: "Lab 5: Pattern Generator", goal: "Offer a menu generating right triangle, inverted triangle, pyramid, and diamond patterns." },
    { id: "lab-6", type: "Lab", title: "Lab 6: Method-Based Mathematical Toolkit", goal: "Implement modular helper methods: isEven(), factorial(), isPrime(), reverse(), and isPalindrome()." },
    { id: "lab-7", type: "Lab", title: "Lab 7: Recursion Practice", goal: "Implement recursive solutions for countdown, factorial, and Fibonacci with stack trace notes." },
    { id: "asg-1", type: "Assignment", title: "Assignment 1: Electricity Billing System", goal: "Calculate tiered unit charges, commercial vs domestic tariff rates, and late fee surcharge." },
    { id: "asg-2", type: "Assignment", title: "Assignment 2: ATM Transaction Simulation", goal: "Simulate authentication PIN checks, balance inquiries, cash withdrawals, and daily limit enforcement." },
    { id: "asg-3", type: "Assignment", title: "Assignment 3: Prime Numbers in a Range", goal: "Read start and end values, find all primes within interval, count total, and calculate their sum." },
    { id: "asg-4", type: "Assignment", title: "Assignment 4: Number Properties Analyzer", goal: "Analyze a number: count digits, calculate digit sum, test for palindrome, and test for Armstrong property." },
    { id: "asg-5", type: "Assignment", title: "Assignment 5: Pattern Collection", goal: "Display centered hollow square, Floyd's triangle, number pyramid, and alphabet patterns." },
    { id: "asg-6", type: "Assignment", title: "Assignment 6: Mathematical Sequence Generator", goal: "Generate Fibonacci sequence, arithmetic progression, geometric progression, and Collatz conjecture." },
    { id: "asg-7", type: "Assignment", title: "Assignment 7: Recursion Challenge", goal: "Implement recursive sum of first n integers, power calculation x^n, and sum of digits." },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans antialiased selection:bg-orange-200 selection:text-orange-900 px-4 py-6 sm:px-8 sm:py-10 md:px-12">
      {/* Top Navigation */}
      <ModuleNav track="java" currentModuleId="control-flow" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={goBack}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-orange-600" />
                  Java Master Course · Module 2
                </span>
                <span className="text-xs font-mono text-stone-500 hidden sm:inline">
                  30 In-Depth Sections · 15 MCQs · 7 Labs
                </span>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span>Specification & Blueprints</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Interactive Workbenches (7)</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Control Flow, Methods & Problem-Solving Fundamentals
            </h1>
            <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Transition from linear instruction execution to dynamic decision making, repetition structures, modular method design, stack-frame recursion, nested loop patterns, and fundamental mathematical algorithms in modern Java.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* MODE 1: CURRICULUM SPECIFICATION & BLUEPRINTS                       */}
        {/* =================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content (3 cols) */}
            <div className="lg:col-span-3 space-y-8">
              <JavaControlFlowSections />
            </div>

            {/* Sticky Table of Contents (1 col) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border border-[#e7e3da] p-5 shadow-xs space-y-4 max-h-[85vh] overflow-y-auto dark-scrollbar">
                <div className="flex items-center gap-2 pb-3 border-b border-stone-100 font-bold text-stone-900 text-sm">
                  <ListOrdered className="w-4 h-4 text-orange-600" />
                  <span>Module Index (30 Parts)</span>
                </div>
                <nav className="space-y-1 text-xs">
                  {[
                    { id: "overview", label: "Module Overview & Objectives" },
                    { id: "section-1", label: "1. Algorithmic Thinking" },
                    { id: "section-2", label: "2. Problem Decomposition" },
                    { id: "section-3", label: "3. Pseudocode & Flowcharts" },
                    { id: "section-4", label: "4. Conditional Statements" },
                    { id: "section-5", label: "5. Nested Conditionals" },
                    { id: "section-6", label: "6. Switch & Switch Expressions" },
                    { id: "section-7", label: "7. Looping Statements" },
                    { id: "section-8", label: "8. The for Loop" },
                    { id: "section-9", label: "9. The while Loop" },
                    { id: "section-10", label: "10. The do-while Loop" },
                    { id: "section-11", label: "11. Loop Comparison" },
                    { id: "section-12", label: "12. Nested Loops" },
                    { id: "section-13", label: "13. Break & Continue" },
                    { id: "section-14", label: "14. Methods in Java" },
                    { id: "section-15", label: "15. Parameters & Arguments" },
                    { id: "section-16", label: "16. Return Types" },
                    { id: "section-17", label: "17. Method Overloading" },
                    { id: "section-18", label: "18. Scope of Variables" },
                    { id: "section-19", label: "19. Recursion Introduction" },
                    { id: "section-20", label: "20. Pattern Programming" },
                    { id: "section-21", label: "21. Mathematical Problem-Solving" },
                    { id: "section-22", label: "22. 7 Worked Programs" },
                    { id: "section-23", label: "23. 7 Practical Labs" },
                    { id: "section-24", label: "24. 7 Independent Assignments" },
                    { id: "section-25", label: "25. Assessment & MCQs" },
                    { id: "section-26", label: "26. Student Result Mini Project" },
                    { id: "section-27", label: "27. Debugging & Common Bugs" },
                    { id: "section-28", label: "28. Recommended Resources" },
                    { id: "section-29", label: "29. Module Revision Sheet" },
                    { id: "section-30", label: "30. Completion Criteria" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      title={item.label}
                      className="block px-2.5 py-1.5 rounded-lg text-stone-600 hover:text-orange-700 hover:bg-orange-50/60 transition-colors break-words whitespace-normal leading-snug"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="pt-3 border-t border-stone-100">
                  <button
                    onClick={() => setActiveTab("workbench")}
                    className="w-full py-2 px-3 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Open Workbenches</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* MODE 2: INTERACTIVE WORKBENCHES (7 COMPREHENSIVE TOOLS)            */}
        {/* =================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Sub-tab navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-2xs">
              {[
                { id: "control-flow", label: "Decision & Switch", icon: Split },
                { id: "loop-tracer", label: "Loop Dry Run Tracer", icon: Repeat },
                { id: "recursion-stack", label: "Recursion Call Stack", icon: Layers },
                { id: "pattern-generator", label: "Pattern Generator", icon: Compass },
                { id: "math-toolkit", label: "Math Algorithms", icon: Calculator },
                { id: "quiz", label: "15 MCQs Assessment", icon: HelpCircle },
                { id: "labs", label: "Labs & Assignments Tracker", icon: CheckSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeWorkbenchTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkbenchTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-orange-600 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 1. DECISION FLOW & SWITCH EVALUATOR */}
            {activeWorkbenchTab === "control-flow" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Panel A: If-Else-If Ladder Evaluator */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                    <Split className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">If-Else-If Ladder Simulator</h3>
                      <p className="text-xs text-stone-500">Live evaluation of student grades based on boundary scores</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-stone-700">
                      Enter Score (0 – 100): <span className="text-orange-600 font-mono text-sm">{testScore}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={testScore}
                      onChange={(e) => setTestScore(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>0 (F)</span>
                      <span>60 (D)</span>
                      <span>70 (C)</span>
                      <span>80 (B)</span>
                      <span>90 (A)</span>
                      <span>100</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-stone-600">Assigned Grade:</span>
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-bold font-mono text-sm">
                        Grade {scoreEvaluation.grade}
                      </span>
                    </div>
                    <div className="text-xs text-stone-600">
                      <span className="font-medium">Active Branch:</span>{" "}
                      <code className="text-orange-700 font-mono px-1 py-0.5 bg-stone-100 rounded">
                        {scoreEvaluation.branch}
                      </code>
                    </div>
                    <div className="text-xs text-stone-500 italic">
                      {scoreEvaluation.description}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                    <pre>{`if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}`}</pre>
                  </div>
                </div>

                {/* Panel B: Modern Switch Expressions vs Statements */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      <div>
                        <h3 className="font-bold text-stone-900 text-base">Modern Switch Expression (Java 14+)</h3>
                        <p className="text-xs text-stone-500">Arrow syntax (-&gt;) eliminates accidental fall-through</p>
                      </div>
                    </div>
                    <div className="inline-flex p-0.5 bg-stone-100 rounded-lg text-xs font-semibold">
                      <button
                        onClick={() => setSwitchMode("expression")}
                        className={`px-2 py-1 rounded ${switchMode === "expression" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500"}`}
                      >
                        Expression
                      </button>
                      <button
                        onClick={() => setSwitchMode("statement")}
                        className={`px-2 py-1 rounded ${switchMode === "statement" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500"}`}
                      >
                        Traditional
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-stone-700">Select Day of Week (1 = Mon, 7 = Sun):</label>
                    <div className="grid grid-cols-7 gap-1">
                      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <button
                          key={num}
                          onClick={() => setDayNumber(num)}
                          className={`py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                            dayNumber === num
                              ? "bg-orange-600 text-white shadow-xs"
                              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 text-sm">{switchEvaluation.name}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-orange-800 font-semibold text-xs border border-orange-200">
                        {switchEvaluation.type}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-mono">Routine: {switchEvaluation.energy}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                    <pre>{switchMode === "expression" ? `// Modern Switch Expression (produces value directly)
String dayType = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7           -> "Weekend";
    default             -> "Invalid day";
};` : `// Traditional Switch Statement (requires explicit break)
String dayType;
switch (day) {
    case 1: case 2: case 3: case 4: case 5:
        dayType = "Weekday";
        break;
    case 6: case 7:
        dayType = "Weekend";
        break;
    default:
        dayType = "Invalid day";
}`}</pre>
                  </div>
                </div>
              </div>
            )}

            {/* 2. LOOP DRY RUN TRACER */}
            {activeWorkbenchTab === "loop-tracer" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Interactive Loop Dry Run & State Inspector</h3>
                      <p className="text-xs text-stone-500">Step through loop cycles, observe counter updates, accumulator sum, and jump controls</p>
                    </div>
                  </div>

                  <div className="inline-flex p-1 bg-stone-100 rounded-xl">
                    {["for", "while", "do-while"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setLoopType(type)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                          loopType === type
                            ? "bg-white text-stone-900 shadow-xs"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Max Iterations (N): <span className="font-mono text-orange-600">{loopLimit}</span>
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="8"
                      value={loopLimit}
                      onChange={(e) => setLoopLimit(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Simulate Break at i: <span className="font-mono text-orange-600">{useBreakAt || "None"}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={loopLimit}
                      value={useBreakAt}
                      onChange={(e) => setUseBreakAt(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Simulate Continue at i: <span className="font-mono text-orange-600">{useContinueAt || "None"}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={loopLimit}
                      value={useContinueAt}
                      onChange={(e) => setUseContinueAt(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>
                </div>

                {/* Dry Run Table */}
                <div className="overflow-x-auto rounded-xl border border-[#e7e3da] shadow-2xs">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                      <tr>
                        <th className="px-4 py-2.5">Step</th>
                        <th className="px-4 py-2.5">Counter (i)</th>
                        <th className="px-4 py-2.5">Condition Check</th>
                        <th className="px-4 py-2.5">Loop Body Action</th>
                        <th className="px-4 py-2.5">Accumulator (sum)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e3da]">
                      {loopTrace.trace.map((row) => (
                        <tr
                          key={row.step}
                          className={`${
                            row.terminated
                              ? "bg-rose-50/70 text-rose-900 font-semibold"
                              : row.skipped
                              ? "bg-amber-50/70 text-amber-900"
                              : row.finished
                              ? "bg-stone-100/70 text-stone-500 italic"
                              : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2.5 font-mono">{row.step}</td>
                          <td className="px-4 py-2.5 font-mono font-bold text-orange-700">{row.i}</td>
                          <td className="px-4 py-2.5 font-mono">{row.condition}</td>
                          <td className="px-4 py-2.5">{row.action}</td>
                          <td className="px-4 py-2.5 font-mono font-bold">{row.sum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-orange-50 border border-orange-200">
                  <span className="text-xs font-semibold text-stone-700">Accumulated Total (sum):</span>
                  <span className="text-base font-extrabold font-mono text-orange-800">{loopTrace.finalSum}</span>
                </div>
              </div>
            )}

            {/* 3. RECURSION CALL STACK VISUALIZER */}
            {activeWorkbenchTab === "recursion-stack" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-600" />
                      <div>
                        <h3 className="font-bold text-stone-900 text-base">Call Stack Visualizer</h3>
                        <p className="text-xs text-stone-500">Observe stack frame allocation and unwinding</p>
                      </div>
                    </div>
                    <div className="inline-flex p-0.5 bg-stone-100 rounded-lg text-xs font-semibold">
                      <button
                        onClick={() => setRecursionMode("factorial")}
                        className={`px-2.5 py-1 rounded ${recursionMode === "factorial" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500"}`}
                      >
                        Factorial
                      </button>
                      <button
                        onClick={() => setRecursionMode("fibonacci")}
                        className={`px-2.5 py-1 rounded ${recursionMode === "fibonacci" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500"}`}
                      >
                        Fibonacci
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-stone-700">
                      Input Value (N): <span className="font-mono text-orange-600">{recursionInput}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={recursionInput}
                      onChange={(e) => setRecursionInput(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  {/* Active Stack Frames */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                      Call Stack (Top of Stack = Active Execution)
                    </div>
                    <div className="space-y-2">
                      {recursionFrames.frames.map((frame, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between transition-all ${
                            frame.state === "BASE CASE"
                              ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold"
                              : "bg-stone-50 border-stone-200 text-stone-800"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <div className="font-mono font-bold text-orange-700 flex items-center gap-1.5">
                              <span>Frame #{frame.depth}:</span>
                              <code>{frame.call}</code>
                            </div>
                            <div className="text-[11px] text-stone-500">{frame.condition}</div>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                              frame.state === "BASE CASE"
                                ? "bg-emerald-200 text-emerald-800"
                                : "bg-stone-200 text-stone-700"
                            }`}
                          >
                            {frame.state}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-400">Final Resolved Value:</span>
                    <span className="text-xl font-bold font-mono text-orange-400">
                      {recursionFrames.finalResult}
                    </span>
                  </div>
                </div>

                {/* Java Implementation & Explanations */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <h4 className="font-bold text-stone-900 text-sm">Java Implementation Architecture</h4>
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                    <pre>{recursionMode === "factorial" ? `// Recursive Factorial
public static long factorial(int n) {
    // 1. BASE CASE (terminates recursion)
    if (n <= 1) {
        return 1;
    }
    // 2. RECURSIVE CASE (progresses toward base)
    return n * factorial(n - 1);
}` : `// Recursive Fibonacci
public static int fibonacci(int n) {
    // 1. BASE CASES
    if (n <= 0) return 0;
    if (n == 1) return 1;
    
    // 2. RECURSIVE CASE
    return fibonacci(n - 1) + fibonacci(n - 2);
}`}</pre>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>JVM Call Stack Boundary:</span>
                    </div>
                    <p className="leading-relaxed">
                      Every invocation pushes a new <code>StackFrame</code> containing local variables and return address onto the JVM call stack. If the base case is omitted or unreachable, frames accumulate until memory exhausts, throwing a <code>java.lang.StackOverflowError</code>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. PATTERN GENERATOR */}
            {activeWorkbenchTab === "pattern-generator" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                    <Compass className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Nested Loop Pattern Laboratory</h3>
                      <p className="text-xs text-stone-500">Configure rows and pattern geometries generated via 2D nested loops</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-stone-700">Select Pattern Template:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: "square", name: "Solid Square" },
                        { id: "right-triangle", name: "Right Triangle" },
                        { id: "inverted-triangle", name: "Inverted Triangle" },
                        { id: "increasing-numbers", name: "Number Triangle" },
                        { id: "repeated-numbers", name: "Repeated Row" },
                        { id: "pyramid", name: "Pyramid" },
                        { id: "diamond", name: "Diamond" },
                      ].map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPatternType(p.id)}
                          className={`p-2 rounded-xl text-xs font-semibold text-left transition-all ${
                            patternType === p.id
                              ? "bg-orange-600 text-white shadow-xs"
                              : "bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200"
                          }`}
                        >
                          {p.name}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Row Count (N): <span className="font-mono text-orange-600">{patternRows}</span>
                      </label>
                      <input
                        type="range"
                        min="3"
                        max="8"
                        value={patternRows}
                        onChange={(e) => setPatternRows(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>
                  </div>

                  {/* Terminal Canvas */}
                  <div className="p-4 rounded-xl bg-neutral-900 text-amber-400 font-mono text-sm overflow-x-auto border border-neutral-800 shadow-inner">
                    <div className="text-[11px] text-stone-500 pb-2 border-b border-neutral-800 mb-2 font-mono flex justify-between">
                      <span>CONSOLE OUTPUT</span>
                      <span>{patternRows} ROWS</span>
                    </div>
                    <pre className="leading-tight select-all">{patternOutput}</pre>
                  </div>
                </div>

                {/* Java Source Generation */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-4">
                  <h4 className="font-bold text-stone-900 text-sm">Corresponding Java Nested-Loop Architecture</h4>
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                    <pre>{`// Outer loop controls rows
for (int i = 1; i <= ${patternRows}; i++) {
    // Inner loop controls columns/elements
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    // Newline after each completed row
    System.out.println();
}`}</pre>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2 leading-relaxed">
                    <div className="font-bold text-stone-900">Algorithmic Pattern Rules:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Outer Loop:</strong> Always runs <code>rows</code> times, dictating the line break index.</li>
                      <li><strong>Inner Loop(s):</strong> Dictates horizontal characters. When spaces precede stars (e.g. Pyramid/Diamond), use two consecutive inner loops.</li>
                      <li><strong>Time Complexity:</strong> For two independent loops of size $N$, total operations equal $O(N^2)$.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 5. MATHEMATICAL ALGORITHMS TOOLKIT */}
            {activeWorkbenchTab === "math-toolkit" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Mathematical Algorithm Test-Bench</h3>
                      <p className="text-xs text-stone-500">Live execution of core algorithms from Section 21: Primes, Palindromes, GCD/LCM, and Armstrong</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: "prime", label: "Prime Checker" },
                      { id: "palindrome", label: "Palindrome Number" },
                      { id: "gcd", label: "GCD & LCM" },
                      { id: "armstrong", label: "Armstrong Number" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setMathAlgo(m.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          mathAlgo === m.id
                            ? "bg-orange-600 text-white shadow-xs"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <label className="block text-xs font-semibold text-stone-700">Enter Number 1 (A):</label>
                    <input
                      type="number"
                      value={mathNum1}
                      onChange={(e) => setMathNum1(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                    />
                  </div>
                  {mathAlgo === "gcd" && (
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                      <label className="block text-xs font-semibold text-stone-700">Enter Number 2 (B):</label>
                      <input
                        type="number"
                        value={mathNum2}
                        onChange={(e) => setMathNum2(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                      />
                    </div>
                  )}
                </div>

                {/* Result Card */}
                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    <span className="font-bold text-stone-900 text-sm">{mathResult.explanation}</span>
                  </div>
                  {mathResult.steps && mathResult.steps.length > 0 && (
                    <div className="pt-2 border-t border-orange-200/60">
                      <div className="text-[11px] font-bold text-stone-600 uppercase font-mono mb-1">Execution Steps:</div>
                      <div className="max-h-40 overflow-y-auto space-y-1 font-mono text-xs text-stone-700 [scrollbar-width:thin]">
                        {mathResult.steps.map((st, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-orange-500 font-bold">&gt;</span>
                            <span>{st}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 6. ASSESSMENT QUIZ (15 MCQs) */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Module 2 Assessment (15 MCQs)</h3>
                      <p className="text-xs text-stone-500">Official textbook review questions from Section 25 Part A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-mono font-bold text-stone-600">
                      Score: <span className="text-orange-600 text-sm">{scoreCount}</span> / {quizQuestions.length}
                    </div>
                    <button
                      onClick={() => setShowResults(!showResults)}
                      className="px-3 py-1.5 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 transition-colors shadow-2xs"
                    >
                      {showResults ? "Hide Answers" : "Evaluate & Check All"}
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = userAnswers[q.id];
                    const isAnswered = selected !== undefined;
                    const isCorrect = selected === q.correctIndex;

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-xl border transition-all ${
                          showResults
                            ? isCorrect
                              ? "bg-emerald-50/50 border-emerald-300"
                              : "bg-rose-50/50 border-rose-300"
                            : isAnswered
                            ? "bg-stone-50 border-stone-200"
                            : "bg-white border-[#e7e3da]"
                        }`}
                      >
                        <h4 className="font-bold text-stone-900 text-sm mb-3">{q.question}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {q.options.map((opt, oIdx) => {
                            const isThisSelected = selected === oIdx;
                            const isThisCorrect = q.correctIndex === oIdx;

                            let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";
                            if (showResults) {
                              if (isThisCorrect) {
                                btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                              } else if (isThisSelected && !isCorrect) {
                                btnStyle = "bg-rose-100 border-rose-400 text-rose-950 line-through";
                              }
                            } else if (isThisSelected) {
                              btnStyle = "bg-orange-600 border-orange-600 text-white font-semibold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectOption(q.id, oIdx)}
                                className={`p-2.5 rounded-lg border text-xs text-left transition-all ${btnStyle}`}
                              >
                                <span className="font-mono mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                        {showResults && (
                          <div className="pt-2 border-t border-stone-200/60 text-xs text-stone-600">
                            <span className="font-bold text-stone-900">Explanation:</span> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 7. LABS & ASSIGNMENTS TRACKER */}
            {activeWorkbenchTab === "labs" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Practical Labs & Assignments Checklist</h3>
                      <p className="text-xs text-stone-500">Track implementation of all 7 laboratory exercises and 7 independent challenges</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-stone-600">
                    Completed: <span className="text-orange-600">{Object.values(completedLabs).filter(Boolean).length}</span> / {labList.length}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {labList.map((lab) => {
                    const isDone = !!completedLabs[lab.id];
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
                                    : "bg-stone-100 text-stone-700"
                                }`}
                              >
                                {lab.type}
                              </span>
                              <h4 className={`text-xs font-bold ${isDone ? "text-stone-500 line-through" : "text-stone-900"}`}>
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
            )}
          </div>
        )}
      </main>
    </div>
  );
}
