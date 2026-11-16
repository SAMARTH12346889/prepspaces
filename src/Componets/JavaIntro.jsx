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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaIntroSections from "./JavaIntroSections";

export default function JavaIntro() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode tab state: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("jvm-simulator"); // 'jvm-simulator' | 'type-casting' | 'operators' | 'code-runner' | 'quiz' | 'labs'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 1: JVM ARCHITECTURE & EXECUTION SIMULATOR
  // ---------------------------------------------------------------------------
  const [jvmStep, setJvmStep] = useState(0); // 0: Source, 1: javac, 2: ClassLoader, 3: Verifier, 4: JIT/Interpreter, 5: Output

  const jvmStages = [
    {
      title: "1. Java Source Code",
      file: "HelloWorld.java",
      badge: "Human-Readable Source",
      description: "Developers write high-level Java instructions adhering to the Java Language Specification.",
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      state: "Plain text file stored on local filesystem.",
    },
    {
      title: "2. javac Compiler (Bytecode Generation)",
      file: "javac HelloWorld.java -> HelloWorld.class",
      badge: "Compile-Time Phase",
      description: "The javac compiler verifies syntax, validates type rules, and translates source instructions into portable bytecode.",
      code: `// Compiled from HelloWorld.java (Bytecode disasm via javap -c)
public class HelloWorld {
  public HelloWorld();
    Code:
       0: aload_0
       1: invokespecial #1 // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: getstatic     #7 // Field java/lang/System.out:Ljava/io/PrintStream;
       3: ldc           #13 // String Hello, World!
       5: invokevirtual #15 // Method java/io/PrintStream.println:(Ljava/lang/String;)V
       8: return
}`,
      state: "HelloWorld.class generated containing intermediate bytecode instructions.",
    },
    {
      title: "3. JVM Class Loader Subsystem",
      file: "Loading -> Linking -> Initialization",
      badge: "JVM Runtime Stage 1",
      description: "Loads the binary class data into JVM Method Area, verifies symbolic references, and allocates static fields with initial default values.",
      code: `[JVM ClassLoader Action]
1. Bootstrap ClassLoader: Loaded java.lang.Object, java.lang.System
2. Application ClassLoader: Loaded class HelloWorld from classpath
3. Linking Phase: Verified bytecode structure, prepared static memory
4. Initialization: Executed static initializers (if any)`,
      state: "Binary representation loaded into JVM Runtime Memory Area.",
    },
    {
      title: "4. Bytecode Verifier & Security Check",
      file: "Runtime Safety & Integrity Check",
      badge: "JVM Runtime Stage 2",
      description: "Ensures bytecode adheres to JVM safety constraints: checks stack overflow/underflow, variable type legality, and memory access integrity.",
      code: `[Bytecode Verifier Status]
✓ Type safety rules checked: PASS
✓ Stack bounds and register types verified: PASS
✓ No illegal memory address manipulation detected: PASS
✓ Access control modifiers enforced: PASS`,
      state: "Bytecode certified safe for machine execution.",
    },
    {
      title: "5. Execution Engine (Interpreter + JIT Compiler)",
      file: "HotSpot VM / Native CPU Execution",
      badge: "JVM Runtime Stage 3",
      description: "Bytecode is interpreted immediately. Hotspot methods are compiled by the Just-In-Time (JIT) compiler directly into native x86/ARM machine code.",
      code: `[Execution Engine Runtime Memory Snapshot]
HEAP MEMORY:
  - String instance: "Hello, World!" [@0x7f9a12c]
JVM STACK (Thread 1 - main):
  - Frame: HelloWorld.main(String[] args)
    • Local Variable [0]: args (ref -> empty String array)
    • Operand Stack: [PrintStream ref, String ref]
PROGRAM COUNTER (PC Register):
  - Thread main pointing to bytecode offset 5 -> invokevirtual`,
      state: "Native processor instructions executed on host CPU.",
    },
    {
      title: "6. Program Output & Line Termination",
      file: "Standard Output Stream (System.out)",
      badge: "Execution Complete",
      description: "The PrintStream flushes character stream to the console with platform-dependent line ending.",
      code: `Hello, World!

Process finished with exit code 0`,
      state: "Program finished execution cleanly.",
    },
  ];

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 2: TYPE CONVERSION & CASTING
  // ---------------------------------------------------------------------------
  const [selectedTypeFrom, setSelectedTypeFrom] = useState("int");
  const [selectedTypeTo, setSelectedTypeTo] = useState("byte");
  const [inputValue, setInputValue] = useState("130");

  const typeConversionResult = useMemo(() => {
    const rawNum = parseFloat(inputValue);
    if (isNaN(rawNum)) {
      return { isValid: false, message: "Please enter a valid numeric literal." };
    }

    // Widening vs Narrowing analysis
    const hierarchy = {
      byte: { size: 8, min: -128, max: 127, rank: 1 },
      short: { size: 16, min: -32768, max: 32767, rank: 2 },
      char: { size: 16, min: 0, max: 65535, rank: 2 },
      int: { size: 32, min: -2147483648, max: 2147483647, rank: 3 },
      long: { size: 64, min: -9223372036854775808n, max: 9223372036854775807n, rank: 4 },
      float: { size: 32, precision: "6-7 digits", rank: 5 },
      double: { size: 64, precision: "15-16 digits", rank: 6 },
    };

    const fromInfo = hierarchy[selectedTypeFrom];
    const toInfo = hierarchy[selectedTypeTo];
    const isWidening = toInfo.rank > fromInfo.rank;
    const isSame = selectedTypeFrom === selectedTypeTo;

    let computedVal = "";
    let dataLossWarning = false;

    if (selectedTypeTo === "byte") {
      const intVal = Math.trunc(rawNum);
      // simulate 8-bit signed two's complement
      let byteVal = intVal & 0xff;
      if (byteVal >= 128) byteVal -= 256;
      computedVal = byteVal.toString();
      if (intVal < -128 || intVal > 127) dataLossWarning = true;
    } else if (selectedTypeTo === "short") {
      const intVal = Math.trunc(rawNum);
      let shortVal = intVal & 0xffff;
      if (shortVal >= 32768) shortVal -= 65536;
      computedVal = shortVal.toString();
      if (intVal < -32768 || intVal > 32767) dataLossWarning = true;
    } else if (selectedTypeTo === "int") {
      computedVal = Math.trunc(rawNum).toString();
      if (rawNum !== Math.trunc(rawNum)) dataLossWarning = true;
    } else if (selectedTypeTo === "double") {
      computedVal = rawNum.toFixed(1);
    } else if (selectedTypeTo === "float") {
      computedVal = rawNum.toFixed(1) + "f";
    } else {
      computedVal = Math.trunc(rawNum).toString();
    }

    return {
      isValid: true,
      isWidening,
      isSame,
      computedVal,
      dataLossWarning,
      syntax: isSame
        ? `${selectedTypeTo} result = value;`
        : isWidening
        ? `${selectedTypeTo} result = value; // Implicit widening conversion`
        : `${selectedTypeTo} result = (${selectedTypeTo}) value; // Explicit narrowing cast required`,
    };
  }, [selectedTypeFrom, selectedTypeTo, inputValue]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 3: OPERATORS & PRECEDENCE EVALUATOR
  // ---------------------------------------------------------------------------
  const [operatorA, setOperatorA] = useState(10);
  const [operatorB, setOperatorB] = useState(3);
  const [prePostA, setPrePostA] = useState(5);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 4: CODE RUNNER & SAMPLE PROGRAMS
  // ---------------------------------------------------------------------------
  const [selectedProgramIdx, setSelectedProgramIdx] = useState(0);

  const samplePrograms = [
    {
      id: "hello-world",
      title: "Program 1: Hello World",
      description: "Basic Java program structure, class declaration, main method, and standard output.",
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming");
    }
}`,
      output: `Hello, World!
Welcome to Java Programming`,
      notes: "Class name 'HelloWorld' must match filename 'HelloWorld.java'.",
    },
    {
      id: "student-info",
      title: "Program 2: Student Information",
      description: "Demonstrating multiple primitive data types (String, int, char, double, boolean).",
      code: `public class StudentInformation {
    public static void main(String[] args) {
        String name = "Alex";
        int age = 21;
        char grade = 'A';
        double percentage = 89.5;
        boolean isPassed = true;

        System.out.println("Student Information");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
        System.out.println("Percentage: " + percentage);
        System.out.println("Passed: " + isPassed);
    }
}`,
      output: `Student Information
Name: Alex
Age: 21
Grade: A
Percentage: 89.5
Passed: true`,
      notes: "Variables are strongly typed. String uses double quotes, char uses single quotes.",
    },
    {
      id: "arithmetic",
      title: "Program 3: Arithmetic Calculator",
      description: "Testing addition, subtraction, multiplication, integer division, and modulus remainder.",
      code: `public class ArithmeticCalculator {
    public static void main(String[] args) {
        int a = 20;
        int b = 5;

        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Remainder: " + (a % b));
    }
}`,
      output: `Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4
Remainder: 0`,
      notes: "Integer division discards fractional remainders. Parentheses enforce operator precedence.",
    },
    {
      id: "circle-area",
      title: "Program 4: Area of a Circle",
      description: "Using the final keyword for constants, mathematical formulas, and floating-point math.",
      code: `public class CircleArea {
    public static void main(String[] args) {
        final double PI = 3.14159;
        double radius = 7;

        double area = PI * radius * radius;

        System.out.println("Radius: " + radius);
        System.out.println("Area of circle: " + area);
    }
}`,
      output: `Radius: 7.0
Area of circle: 153.93791`,
      notes: "'final' prevents reassignment. Constants are typically named in UPPERCASE.",
    },
    {
      id: "type-conv",
      title: "Program 5: Type Conversion",
      description: "Widening conversion (int -> double) and narrowing conversion (double -> int).",
      code: `public class TypeConversion {
    public static void main(String[] args) {
        int number = 100;
        double decimalNumber = number;

        double price = 99.75;
        int wholePrice = (int) price;

        System.out.println("Integer: " + number);
        System.out.println("Widened value: " + decimalNumber);
        System.out.println("Original price: " + price);
        System.out.println("Narrowed value: " + wholePrice);
    }
}`,
      output: `Integer: 100
Widened value: 100.0
Original price: 99.75
Narrowed value: 99`,
      notes: "Narrowing truncates decimals towards zero; it does not perform rounding.",
    },
    {
      id: "bill-calculator",
      title: "Program 8: Simple Bill Calculator",
      description: "Real-world commercial billing calculation with constants, quantities, and tax.",
      code: `public class BillCalculator {
    public static void main(String[] args) {
        final double TAX_RATE = 0.18;

        double productPrice = 1000;
        int quantity = 2;

        double subtotal = productPrice * quantity;
        double tax = subtotal * TAX_RATE;
        double finalAmount = subtotal + tax;

        System.out.println("Product Price: " + productPrice);
        System.out.println("Quantity: " + quantity);
        System.out.println("Subtotal: " + subtotal);
        System.out.println("Tax: " + tax);
        System.out.println("Final Amount: " + finalAmount);
    }
}`,
      output: `Product Price: 1000.0
Quantity: 2
Subtotal: 2000.0
Tax: 360.0
Final Amount: 2360.0`,
      notes: "In enterprise financial applications, BigDecimal is used to prevent floating-point binary inaccuracies.",
    },
    {
      id: "mini-project",
      title: "Mini Project: Student Result & Profile System",
      description: "Full end-of-module capstone system combining I/O, averages, and formatted reports.",
      code: `import java.util.Scanner;

public class StudentResultSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        final int NUMBER_OF_SUBJECTS = 5;
        final int MAX_MARKS_PER_SUBJECT = 100;

        System.out.print("Enter student name: ");
        String name = "Alex Johnson"; // Simulated input

        System.out.print("Enter age: ");
        int age = 21;

        System.out.print("Enter course name: ");
        String course = "Computer Science";

        double mark1 = 85.0;
        double mark2 = 90.0;
        double mark3 = 78.0;
        double mark4 = 88.0;
        double mark5 = 92.0;

        double total = mark1 + mark2 + mark3 + mark4 + mark5;
        double maximumMarks = NUMBER_OF_SUBJECTS * MAX_MARKS_PER_SUBJECT;
        double percentage = (total / maximumMarks) * 100;
        double average = total / NUMBER_OF_SUBJECTS;

        System.out.println("\\n========== STUDENT REPORT ==========");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Course: " + course);
        System.out.println("Total Marks: " + total);
        System.out.println("Average Marks: " + average);
        System.out.println("Percentage: " + percentage + "%");
        System.out.println("====================================");

        scanner.close();
    }
}`,
      output: `========== STUDENT REPORT ==========
Name: Alex Johnson
Age: 21
Course: Computer Science
Total Marks: 433.0
Average Marks: 86.6
Percentage: 86.6%
====================================`,
      notes: "Consolidates variables, constants, arithmetic calculations, formatting, and resource cleanup.",
    },
  ];

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 5: QUIZ STATE (10 Questions from Section 18 Part A)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the primary purpose of a programming language?",
      options: [
        "To manufacture computer hardware",
        "To express instructions that a computer can process",
        "To replace the operating system",
        "To increase physical memory",
      ],
      correctIndex: 1,
      explanation: "A programming language is a formal notation designed to communicate algorithms, calculations, and decisions to a computer system.",
    },
    {
      id: 2,
      question: "2. Which of the following is responsible for executing Java bytecode?",
      options: ["JDK", "JVM", "Javadoc", "Scanner"],
      correctIndex: 1,
      explanation: "The JVM (Java Virtual Machine) loads, verifies, and executes compiled Java bytecode on the target operating system.",
    },
    {
      id: 3,
      question: "3. Which command compiles a Java source file?",
      options: ["java", "javac", "compile", "run"],
      correctIndex: 1,
      explanation: "The javac tool (Java Compiler) compiles .java source files into .class bytecode files.",
    },
    {
      id: 4,
      question: "4. Which file is generated by normal Java source compilation?",
      options: [".java", ".exe", ".class", ".html"],
      correctIndex: 2,
      explanation: "Normal Java compilation produces .class files containing intermediate bytecode for the JVM.",
    },
    {
      id: 5,
      question: "5. Which data type is suitable for storing a whole-number value within the normal 32-bit signed integer range?",
      options: ["boolean", "int", "char", "float"],
      correctIndex: 1,
      explanation: "int is Java's default 32-bit signed integer type, spanning from -2,147,483,648 to 2,147,483,647.",
    },
    {
      id: 6,
      question: "6. Which keyword is commonly used to declare a variable that cannot be reassigned after initialization?",
      options: ["static", "public", "final", "void"],
      correctIndex: 2,
      explanation: "The final keyword prevents reassignment of a variable after its initial value is assigned, creating a constant.",
    },
    {
      id: 7,
      question: "7. What is the result of 10 / 3 when both operands are integers?",
      options: ["3.33", "3", "4", "0"],
      correctIndex: 1,
      explanation: "When both operands in division are integers, Java performs integer division and truncates the fractional portion, yielding 3.",
    },
    {
      id: 8,
      question: "8. Which Scanner method reads a complete line of text?",
      options: ["nextInt()", "nextDouble()", "nextLine()", "nextBoolean()"],
      correctIndex: 2,
      explanation: "scanner.nextLine() reads input until the next newline character, returning the full line as a String.",
    },
    {
      id: 9,
      question: "9. Which error can allow a program to compile and execute but still produce an incorrect result?",
      options: ["Syntax error", "Logical error", "Installation error", "Import error"],
      correctIndex: 1,
      explanation: "A logical error violates the intended business or mathematical logic without breaking grammar or triggering an exception.",
    },
    {
      id: 10,
      question: "10. What does JDK stand for?",
      options: [
        "Java Development Kit",
        "Java Data Kernel",
        "Java Dynamic Key",
        "Java Development Kernel",
      ],
      correctIndex: 0,
      explanation: "JDK stands for Java Development Kit, which contains development tools (javac, java, jar, javadoc) plus runtime components.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    if (submittedQuiz) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const score = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  }, [selectedAnswers]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE WORKBENCH 6: LABS & ASSIGNMENTS TRACKER
  // ---------------------------------------------------------------------------
  const [completedLabs, setCompletedLabs] = useState({});

  const toggleLab = (labId) => {
    setCompletedLabs((prev) => ({ ...prev, [labId]: !prev[labId] }));
  };

  const labsList = [
    { id: "lab-1", title: "Lab 1: Java Environment Setup", desc: "Install JDK, verify java/javac -version, compile and execute first program via terminal." },
    { id: "lab-2", title: "Lab 2: Personal Information Program", desc: "Store and format full name, age, college, course, percentage, grade, enrolled status." },
    { id: "lab-3", title: "Lab 3: Marks & Average Calculator", desc: "Store marks for 5 subjects, compute total and floating-point average." },
    { id: "lab-4", title: "Lab 4: Unit Conversion Program", desc: "Celsius to Fahrenheit conversion using (Celsius * 9 / 5) + 32 with double precision." },
    { id: "lab-5", title: "Lab 5: Simple Banking Calculation", desc: "Track account balance with simulated deposit and withdrawal transactions." },
    { id: "asgn-1", title: "Assignment 1: Personal Profile Generator", desc: "Accept user input with Scanner and output a formatted profile card." },
    { id: "asgn-2", title: "Assignment 2: Shopping Total Calculator", desc: "Accept item price and quantity, calculate subtotal and tax with constant TAX_RATE." },
    { id: "asgn-3", title: "Assignment 3: Time Conversion System", desc: "Convert total seconds into hours, minutes, and seconds using / and % operators." },
    { id: "asgn-4", title: "Assignment 4: Metric & Imperial Distance Converter", desc: "Convert kilometers into meters, centimeters, and miles." },
    { id: "asgn-5", title: "Assignment 5: Salary & Allowance Calculator", desc: "Calculate basic salary, allowances, monthly gross, and annual gross with constant ratios." },
    { id: "asgn-6", title: "Assignment 6: Debugging Challenge", desc: "Identify and resolve missing semicolon, operator precedence bug, and variable case typo." },
  ];

  const handleCopyCode = (codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] font-sans overflow-x-hidden">
      {/* Top Universal Navigation Bar */}
      <ModuleNav
        courseTitle="Java Programming Master Course"
        track="java"
        trackId="java"
        currentModuleId="intro"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb & Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium">
            <span
              onClick={() => navigate("/learning")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Curriculum
            </span>
            <span>/</span>
            <span
              onClick={() => navigate("/courses/java")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Java Programming
            </span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 1 — Foundations</span>
          </div>

          {/* Mode Pill Switcher */}
          <div className="flex items-center bg-stone-200/70 p-1 rounded-2xl self-start md:self-auto border border-stone-300/60 shadow-inner">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Specification &amp; Blueprints
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Sparkles size={14} className="text-orange-500" />
              Interactive Workbenches
            </button>
          </div>
        </div>

        {/* HERO HEADER */}
        <div className="rounded-3xl bg-linear-to-br from-stone-900 via-stone-800 to-orange-950 text-white p-6 sm:p-10 shadow-xl relative overflow-hidden border border-stone-800">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-8 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Coffee size={13} className="text-orange-400" /> Module 1 of 24
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Introduction to Programming with Java
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Master computational thinking, algorithms, JDK/JRE/JVM architecture, byte-level compilation pipelines, the 8 primitive data types, type promotions, operators, Scanner console I/O, and systematic debugging principles.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700/60">
                <Cpu size={14} className="text-orange-400" /> JVM Execution Engine
              </div>
              <div className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700/60">
                <Binary size={14} className="text-orange-400" /> 8 Primitive Types
              </div>
              <div className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700/60">
                <Terminal size={14} className="text-orange-400" /> Scanner &amp; Debugging
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MODE 1: CURRICULUM SPECIFICATION & BLUEPRINTS                     */}
        {/* ================================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-10">
            <JavaIntroSections />

            {/* Bottom Module Completion & Next Steps Card */}
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-orange-600 font-bold uppercase tracking-wider">
                  Ready to test your knowledge?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  Switch to the Interactive Workbenches
                </h3>
                <p className="text-sm text-stone-600 max-w-xl">
                  Inspect the live JVM execution simulator, test widening vs narrowing conversions, solve the 10-question assessment, and view code outputs in real time.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab("workbench");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 shrink-0 cursor-pointer"
              >
                Launch Workbenches
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODE 2: INTERACTIVE WORKBENCHES                                   */}
        {/* ================================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 border-b border-stone-300">
              <button
                onClick={() => setActiveWorkbenchTab("jvm-simulator")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeWorkbenchTab === "jvm-simulator"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Cpu size={14} />
                1. JVM Execution Simulator
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("type-casting")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeWorkbenchTab === "type-casting"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Binary size={14} />
                2. Type Casting &amp; Promotion Lab
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("operators")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeWorkbenchTab === "operators"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Code2 size={14} />
                3. Precedence &amp; Operators
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("code-runner")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeWorkbenchTab === "code-runner"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Terminal size={14} />
                4. Worked Code Runner (8 Programs)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <HelpCircle size={14} />
                5. Assessment Quiz (10 Questions)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("labs")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeWorkbenchTab === "labs"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Award size={14} />
                6. Lab &amp; Assignment Tracker
              </button>
            </div>

            {/* TAB 1: JVM EXECUTION SIMULATOR */}
            {activeWorkbenchTab === "jvm-simulator" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Interactive Architecture Simulator
                    </span>
                    <span className="text-xs font-mono text-stone-500">Stage {jvmStep + 1} of 6</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mt-2">
                    JVM Compilation &amp; Execution Pipeline
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Trace step-by-step how human Java source code transforms through javac, class loading, bytecode verification, JIT compilation, and native execution.
                  </p>
                </div>

                {/* Stepper Progress Bar */}
                <div className="grid grid-cols-6 gap-2">
                  {jvmStages.map((stage, idx) => (
                    <button
                      key={idx}
                      onClick={() => setJvmStep(idx)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        jvmStep === idx
                          ? "bg-orange-50 border-orange-500 ring-2 ring-orange-500/20 shadow-xs"
                          : idx < jvmStep
                          ? "bg-stone-50 border-stone-300 text-stone-700"
                          : "bg-stone-50/50 border-stone-200 text-stone-400"
                      }`}
                    >
                      <div className="text-[10px] font-mono font-bold uppercase truncate">
                        Step {idx + 1}
                      </div>
                      <div className="text-xs font-semibold truncate hidden sm:block">
                        {stage.title.split(". ")[1]}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Active Stage Card */}
                <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e7e3da] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
                    <div>
                      <span className="text-xs font-mono text-orange-600 font-bold uppercase">
                        {jvmStages[jvmStep].badge}
                      </span>
                      <h4 className="text-lg font-bold text-stone-900">
                        {jvmStages[jvmStep].title}
                      </h4>
                    </div>
                    <div className="text-xs font-mono px-3 py-1 rounded bg-stone-200 text-stone-800 self-start sm:self-auto">
                      {jvmStages[jvmStep].file}
                    </div>
                  </div>

                  <p className="text-stone-700 text-sm leading-relaxed">
                    {jvmStages[jvmStep].description}
                  </p>

                  {/* Code / State representation */}
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto border border-neutral-800">
                    <pre className="overflow-x-auto [scrollbar-width:thin]">
                      <code>{jvmStages[jvmStep].code}</code>
                    </pre>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
                    <span className="font-mono">Status: {jvmStages[jvmStep].state}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setJvmStep((prev) => Math.max(0, prev - 1))}
                        disabled={jvmStep === 0}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        &larr; Previous Stage
                      </button>
                      <button
                        onClick={() => setJvmStep((prev) => Math.min(jvmStages.length - 1, prev + 1))}
                        disabled={jvmStep === jvmStages.length - 1}
                        className="px-3 py-1.5 rounded-lg bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-40 disabled:cursor-not-allowed font-semibold cursor-pointer"
                      >
                        Next Stage &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TYPE CASTING & NUMERIC PROMOTION */}
            {activeWorkbenchTab === "type-casting" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Type System Workbench
                    </span>
                    <span className="text-xs font-mono text-stone-500">Widening vs Narrowing</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mt-2">
                    Primitive Type Conversion &amp; Bit Truncation
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Explore automatic widening and explicit narrowing conversions. See why converting 130 to byte results in -126 due to two&apos;s complement low-order bit retention.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-600 mb-1">Source Type (From):</label>
                    <select
                      value={selectedTypeFrom}
                      onChange={(e) => setSelectedTypeFrom(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-mono bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="byte">byte (8-bit signed)</option>
                      <option value="short">short (16-bit signed)</option>
                      <option value="int">int (32-bit signed)</option>
                      <option value="long">long (64-bit signed)</option>
                      <option value="float">float (32-bit IEEE 754)</option>
                      <option value="double">double (64-bit IEEE 754)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-600 mb-1">Target Type (To):</label>
                    <select
                      value={selectedTypeTo}
                      onChange={(e) => setSelectedTypeTo(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-mono bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="byte">byte (8-bit signed)</option>
                      <option value="short">short (16-bit signed)</option>
                      <option value="int">int (32-bit signed)</option>
                      <option value="long">long (64-bit signed)</option>
                      <option value="float">float (32-bit IEEE 754)</option>
                      <option value="double">double (64-bit IEEE 754)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-600 mb-1">Literal Value to Convert:</label>
                    <input
                      type="number"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-mono bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                      placeholder="e.g. 130 or 99.99"
                    />
                  </div>
                </div>

                {/* Conversion Result Card */}
                {typeConversionResult.isValid && (
                  <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e7e3da] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono ${
                            typeConversionResult.isSame
                              ? "bg-stone-100 text-stone-700"
                              : typeConversionResult.isWidening
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {typeConversionResult.isSame
                            ? "Identical Type"
                            : typeConversionResult.isWidening
                            ? "Widening Conversion (Safe / Automatic)"
                            : "Narrowing Conversion (Explicit Cast Required)"}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-stone-500">
                        Result: <strong className="text-orange-700 font-bold">{typeConversionResult.computedVal}</strong>
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs">
                      <code>{typeConversionResult.syntax}</code>
                    </div>

                    {typeConversionResult.dataLossWarning && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-start gap-2">
                        <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold">Data Loss / Bit Truncation Warning:</strong> The value {inputValue} overflows or truncates outside the target {selectedTypeTo} range. Only the lowest bits are retained.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: OPERATORS & PRECEDENCE */}
            {activeWorkbenchTab === "operators" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Evaluation Engine
                    </span>
                    <span className="text-xs font-mono text-stone-500">Operators &amp; Precedence</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mt-2">
                    Arithmetic, Increment, and Short-Circuit Logic
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Visualize integer division truncation, pre-increment vs post-increment state evaluation, and boolean short-circuit protections.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Division test */}
                  <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                      <Binary size={15} className="text-orange-600" />
                      Integer Division Truncation
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span>a =</span>
                      <input
                        type="number"
                        value={operatorA}
                        onChange={(e) => setOperatorA(parseInt(e.target.value) || 0)}
                        className="w-16 px-2 py-1 rounded border border-stone-300"
                      />
                      <span>b =</span>
                      <input
                        type="number"
                        value={operatorB}
                        onChange={(e) => setOperatorB(parseInt(e.target.value) || 1)}
                        className="w-16 px-2 py-1 rounded border border-stone-300"
                      />
                    </div>
                    <div className="p-3 bg-neutral-900 text-neutral-100 rounded-xl font-mono text-xs space-y-1">
                      <div>// Integer division: (a / b)</div>
                      <div className="text-orange-400 font-bold">{operatorA} / {operatorB} = {operatorB !== 0 ? Math.trunc(operatorA / operatorB) : "ArithmeticException: / by zero"}</div>
                      <div className="pt-2 border-t border-neutral-800 text-stone-400">// Floating-point division: ((double)a / b)</div>
                      <div className="text-green-400 font-bold">{(operatorA * 1.0) / (operatorB || 1)}</div>
                    </div>
                  </div>

                  {/* Pre vs Post Increment */}
                  <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                      <Activity size={15} className="text-orange-600" />
                      Pre-Increment (++a) vs Post-Increment (a++)
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span>Initial variable a =</span>
                      <input
                        type="number"
                        value={prePostA}
                        onChange={(e) => setPrePostA(parseInt(e.target.value) || 0)}
                        className="w-16 px-2 py-1 rounded border border-stone-300"
                      />
                    </div>
                    <div className="p-3 bg-neutral-900 text-neutral-100 rounded-xl font-mono text-xs space-y-1">
                      <div>Post-increment: result = a++</div>
                      <div className="text-stone-300">result = <span className="text-orange-400 font-bold">{prePostA}</span>, then a becomes <span className="text-green-400 font-bold">{prePostA + 1}</span></div>
                      <div className="pt-2 border-t border-neutral-800">Pre-increment: result = ++a</div>
                      <div className="text-stone-300">a becomes <span className="text-green-400 font-bold">{prePostA + 1}</span>, and result = <span className="text-orange-400 font-bold">{prePostA + 1}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: WORKED CODE RUNNER */}
            {activeWorkbenchTab === "code-runner" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Java Standard Programs
                    </span>
                    <span className="text-xs font-mono text-stone-500">8 Programs + Capstone</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mt-2">
                    Worked Code Library &amp; Execution Outputs
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Select any standard program from Module 1 to inspect source structure, copy runnable code, and verify compiler/runtime outputs.
                  </p>
                </div>

                {/* Program Selector Pills */}
                <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2">
                  {samplePrograms.map((prog, idx) => (
                    <button
                      key={prog.id}
                      onClick={() => setSelectedProgramIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                        selectedProgramIdx === idx
                          ? "bg-stone-900 text-white font-bold"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {prog.title.split(": ")[1]}
                    </button>
                  ))}
                </div>

                {/* Selected Program Display */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-stone-900">
                        {samplePrograms[selectedProgramIdx].title}
                      </h4>
                      <p className="text-stone-600 text-xs mt-0.5">
                        {samplePrograms[selectedProgramIdx].description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyCode(samplePrograms[selectedProgramIdx].code)}
                      className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCode ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                      {copiedCode ? "Copied!" : "Copy Code"}
                    </button>
                  </div>

                  {/* Code Block */}
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto border border-neutral-800 shadow-inner">
                    <pre className="overflow-x-auto [scrollbar-width:thin]">
                      <code>{samplePrograms[selectedProgramIdx].code}</code>
                    </pre>
                  </div>

                  {/* Output Terminal */}
                  <div className="rounded-xl bg-stone-950 text-stone-200 border border-stone-800 overflow-hidden font-mono text-xs">
                    <div className="bg-stone-900 px-4 py-2 border-b border-stone-800 flex items-center justify-between text-stone-400 text-[11px]">
                      <span className="flex items-center gap-1.5 font-semibold text-stone-300">
                        <Terminal size={12} className="text-orange-400" />
                        Simulated Standard Output
                      </span>
                      <span>Exit Code: 0</span>
                    </div>
                    <div className="p-4 text-emerald-400 leading-relaxed whitespace-pre-wrap">
                      {samplePrograms[selectedProgramIdx].output}
                    </div>
                  </div>

                  <div className="text-xs text-stone-500 font-mono">
                    <strong className="text-stone-700">Engineering Note:</strong> {samplePrograms[selectedProgramIdx].notes}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: ASSESSMENT QUIZ */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                        Official Assessment
                      </span>
                      <span className="text-xs font-mono text-stone-500">10 Questions</span>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mt-2">
                      Module 1 Knowledge Check
                    </h3>
                  </div>

                  {submittedQuiz && (
                    <div className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-orange-900 text-sm font-bold flex items-center gap-2">
                      <Award size={18} className="text-orange-600" />
                      Score: {score} / 10 ({score >= 7 ? "PASSED" : "REVIEW RECOMMENDED"})
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const isAnswered = selected !== undefined;
                    const isCorrect = isAnswered && selected === q.correctIndex;

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          submittedQuiz
                            ? isCorrect
                              ? "bg-green-50/50 border-green-200"
                              : "bg-red-50/50 border-red-200"
                            : "bg-[#faf8f5] border-[#e7e3da]"
                        }`}
                      >
                        <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-3">
                          {q.question}
                        </h4>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            let optStyle = "bg-white border-stone-200 text-stone-800 hover:border-orange-300";

                            if (submittedQuiz) {
                              if (optIdx === q.correctIndex) {
                                optStyle = "bg-green-100 border-green-400 text-green-900 font-semibold";
                              } else if (selected === optIdx) {
                                optStyle = "bg-red-100 border-red-400 text-red-900";
                              } else {
                                optStyle = "bg-white border-stone-200 text-stone-400";
                              }
                            } else if (selected === optIdx) {
                              optStyle = "bg-orange-50 border-orange-500 text-orange-950 font-semibold ring-1 ring-orange-500";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                disabled={submittedQuiz}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                              >
                                <span>{opt}</span>
                                {submittedQuiz && optIdx === q.correctIndex && (
                                  <CheckCircle size={15} className="text-green-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {submittedQuiz && (
                          <div className="mt-3 pt-3 border-t border-stone-200 text-xs text-stone-600">
                            <strong className="text-stone-800">Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setSubmittedQuiz(false);
                    }}
                    className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 cursor-pointer"
                  >
                    Reset Quiz
                  </button>

                  <button
                    onClick={() => setSubmittedQuiz(true)}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm transition-all shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    Submit Answers
                  </button>
                </div>
              </div>
            )}

            {/* TAB 6: LAB & ASSIGNMENT TRACKER */}
            {activeWorkbenchTab === "labs" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Practical Roadmap
                    </span>
                    <span className="text-xs font-mono text-stone-500">5 Labs + 6 Assignments</span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mt-2">
                    Laboratory Exercises &amp; Independent Projects
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Track your progress completing the practical tasks in your local IDE (IntelliJ, Eclipse, or VS Code).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {labsList.map((lab) => {
                    const isDone = !!completedLabs[lab.id];
                    return (
                      <div
                        key={lab.id}
                        onClick={() => toggleLab(lab.id)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isDone
                            ? "bg-green-50/50 border-green-300 shadow-2xs"
                            : "bg-[#faf8f5] border-[#e7e3da] hover:border-orange-300"
                        }`}
                      >
                        <div className="mt-0.5">
                          {isDone ? (
                            <CheckSquare size={18} className="text-green-600" />
                          ) : (
                            <Square size={18} className="text-stone-400" />
                          )}
                        </div>
                        <div className="space-y-1">
                          <h4 className={`text-sm font-bold ${isDone ? "text-green-900 line-through" : "text-stone-900"}`}>
                            {lab.title}
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {lab.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
