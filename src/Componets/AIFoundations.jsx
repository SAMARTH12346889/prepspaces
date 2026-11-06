import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Bot,
  Sparkles,
  Cpu,
  Layers,
  Database,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  ShieldCheck,
  Activity,
  Sliders,
  HelpCircle,
  FolderTree,
  Scale,
  RefreshCw,
  Clock,
  Terminal,
  Zap,
  Boxes,
  FileText,
  FileCode,
  Check,
  Copy,
  Play,
  Award,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  AITaxonomyDiagram,
  IntelligentAgentDiagram,
  VectorizationBenchmarkTool,
  NormalizationSimulatorTool,
  AIEngineeringPipelineDiagram,
} from "./AIFoundationsDiagrams";

export default function AIFoundations() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "calculators" | "qa" | "project" | "labs" | "assessment" | "reading"
  const [activePart, setActivePart] = useState("part-1");
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Copy helper
  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // 15 KNOWLEDGE ASSESSMENT QUIZ QUESTIONS (SECTION 33.1)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "Which statement best describes Artificial Intelligence?",
      options: [
        "A programming language designed exclusively for neural networks",
        "A field of computer science focused on creating computational systems that exhibit intelligent behaviour",
        "A database management system optimized for vector embeddings",
        "An operating system kernel written in C and Python",
      ],
      correct: 1,
      explanation:
        "Artificial Intelligence is the broad computer science discipline concerned with building systems capable of performing tasks typically requiring human intelligence: learning, reasoning, perception, planning, and problem solving.",
    },
    {
      id: 2,
      question: "Which of these is a subfield of Machine Learning?",
      options: [
        "Deep Learning",
        "HTML5 Semantic Formatting",
        "B-Tree Database Indexing",
        "Operating System Memory Paging",
      ],
      correct: 0,
      explanation:
        "Deep Learning is a specialized subfield of Machine Learning that uses multi-layered artificial neural networks to learn representations of data automatically.",
    },
    {
      id: 3,
      question: "Which learning paradigm uses explicitly labelled examples (features paired with target outcomes)?",
      options: [
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Supervised Learning",
        "Rule-based Heuristic Programming",
      ],
      correct: 2,
      explanation:
        "Supervised Learning trains models using input features mapped to known target labels (e.g. house area and bedrooms mapped to price).",
    },
    {
      id: 4,
      question: "What does Python's built-in input() function return?",
      options: [
        "An integer if digits were entered, otherwise a string",
        "A float number",
        "Always a string (str), regardless of input content",
        "A Boolean value",
      ],
      correct: 2,
      explanation:
        "Python's input() function always returns user input as a string (str). To perform mathematical operations, you must explicitly convert it using int() or float().",
    },
    {
      id: 5,
      question: "Which Python data structure stores key-value pairs with fast hashing lookups?",
      options: ["List", "Tuple", "Dictionary", "Set"],
      correct: 2,
      explanation:
        "A dictionary (dict) stores associations between unique keys and arbitrary values, providing average O(1) time complexity for insertions and lookups.",
    },
    {
      id: 6,
      question: "Which keyword is used to define a reusable function in Python?",
      options: ["function", "define", "def", "method"],
      correct: 2,
      explanation:
        "The 'def' keyword introduces a function definition in Python (e.g. def calculate_average(scores): ...).",
    },
    {
      id: 7,
      question: "What is the result of the Python integer floor division expression 11 // 2?",
      options: ["5.5", "5", "6", "1"],
      correct: 1,
      explanation:
        "The floor division operator '//' divides two numbers and truncates towards negative infinity, producing the integer 5.",
    },
    {
      id: 8,
      question: "Which of the following Python data structures is mutable (can be altered in-place after creation)?",
      options: ["Tuple", "String", "List", "Integer"],
      correct: 2,
      explanation:
        "Lists are mutable; you can append, remove, or modify elements in-place without creating an entirely new object.",
    },
    {
      id: 9,
      question: "What is the purpose of Python's try-except block?",
      options: [
        "To speed up loop iterations",
        "To catch and handle runtime exceptions gracefully without crashing the program",
        "To declare object-oriented class inheritance",
        "To import third-party packages from PyPI",
      ],
      correct: 1,
      explanation:
        "The try-except block intercepts runtime exceptions (e.g., ValueError, ZeroDivisionError), allowing the application to recover or log user-friendly error messages.",
    },
    {
      id: 10,
      question: "What does a Python class define?",
      options: [
        "Only a disk file format",
        "A blueprint for creating objects that bundle state (attributes) and behavior (methods)",
        "A relational database table",
        "A while loop execution thread",
      ],
      correct: 1,
      explanation:
        "A class defines the structure and behavior of objects, encapsulating data attributes and callable methods through an initializer (__init__).",
    },
    {
      id: 11,
      question: "What is NumPy's central numerical data structure?",
      options: ["Dictionary", "DataFrame", "ndarray", "Linked List"],
      correct: 2,
      explanation:
        "NumPy's core data structure is the ndarray (n-dimensional array), providing contiguous memory storage, fixed data types, and SIMD hardware acceleration.",
    },
    {
      id: 12,
      question: "Which operator performs matrix multiplication between compatible 2D NumPy arrays?",
      options: [
        "* (performs element-wise multiplication)",
        "@ (matrix multiplication operator)",
        "%",
        "//",
      ],
      correct: 1,
      explanation:
        "In modern Python and NumPy, '@' performs algebraic matrix dot multiplication, while '*' performs element-wise multiplication.",
    },
    {
      id: 13,
      question: "What does NumPy's broadcasting mechanism allow?",
      options: [
        "Transmitting data over Wi-Fi sockets",
        "Performing arithmetic operations between differently shaped arrays that meet compatibility rules without manual copying",
        "Compressing CSV files on disk",
        "Object-oriented class polymorphism",
      ],
      correct: 1,
      explanation:
        "Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations without making unnecessary duplicate memory copies.",
    },
    {
      id: 14,
      question: "What is a Pandas DataFrame?",
      options: [
        "A two-dimensional, size-mutable, tabular data structure with labelled rows and columns",
        "A Python function decorator",
        "A convolutional neural network layer",
        "A binary serialization format",
      ],
      correct: 0,
      explanation:
        "A Pandas DataFrame is a 2D tabular data structure with columns of potentially different types, supporting rich SQL-like relational and statistical operations.",
    },
    {
      id: 15,
      question: "What is the primary purpose of Jupyter Notebook in AI engineering?",
      options: [
        "Compiling bare-metal C kernels",
        "An interactive computing environment combining live code, Markdown notes, math formulas, and visualizations for reproducible experiments",
        "Serving high-throughput REST APIs in production",
        "Managing encrypted user passwords",
      ],
      correct: 1,
      explanation:
        "Jupyter Notebook allows engineers to iteratively test code cells, inspect intermediate datasets, render Matplotlib visualizations, and document analytical reasoning in shareable notebooks.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let count = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) count += 1;
    });
    return count;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // ---------------------------------------------------------------------------
  // CAPSTONE PROJECT PROGRESS TRACKING (SECTION 32 - STUDENT INTELLIGENCE SYSTEM)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
  });

  const toggleChecklist = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(projectChecklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // SENIOR AI ENGINEERING Q&A (6 DEEP PRODUCTION SCENARIOS)
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "Why is NumPy SIMD vectorization 50–100x faster than native Python for-loops?",
      context:
        "A data scientist processes 10 million audio signals or image pixel tensors. A naive Python loop takes 8 seconds; NumPy takes 80 milliseconds.",
      answer:
        "In pure Python, every element in a list is a heap-allocated PyObject with type metadata and reference counters. A for-loop must dynamically resolve types, check boundaries, and dereference pointers on every single iteration. NumPy allocates a single contiguous block of uniform C-types (e.g. float64). It executes compiled C/Fortran loops and leverages CPU hardware SIMD (Single Instruction, Multiple Data) vector registers (such as AVX-512) to process 8 to 16 floating-point values in a single clock cycle with zero interpreter overhead.",
    },
    {
      id: "qa-2",
      title: "What is Data Leakage during feature normalization, and how does it compromise model evaluation?",
      context:
        "An engineer normalizes a dataset using `(X - X.min()) / (X.max() - X.min())` before executing a train/test split.",
      answer:
        "If you calculate minimum, maximum, mean, or standard deviation across the entire dataset before splitting, information from the held-out test set leaks into the training pipeline. The model learns based on statistical properties of data it will encounter in evaluation, creating artificially optimistic accuracy metrics that collapse when deployed to real-world unseen production traffic. The rule is absolute: always fit scalers strictly on training data, then apply the fitted parameters to validation and test sets.",
    },
    {
      id: "qa-3",
      title: "How does an AI Engineer differ from a Data Scientist and an MLOps Engineer?",
      context:
        "An organization is building an enterprise generative AI document assistant and must staff engineering roles effectively.",
      answer:
        "A Data Scientist explores data, formulates hypotheses, and builds statistical models or prototypes. An ML Engineer specializes in training deep architectures, optimizing loss functions, and managing GPU clusters. An AI Engineer bridges the gap to software engineering: designing end-to-end applications, integrating LLM APIs and vector databases, engineering prompts, building RAG retrieval pipelines, evaluating outputs, and ensuring latency, cost, and reliability. An MLOps Engineer builds CI/CD pipelines, container orchestration, and monitoring infrastructure.",
    },
    {
      id: "qa-4",
      title: "Why does filling missing data with the Mean introduce bias in skewed distributions?",
      context:
        "A dataset contains student study hours where 90% study 2–4 hours, but three outliers study 40 hours.",
      answer:
        "The arithmetic mean is extremely sensitive to extreme outliers. In a right-skewed distribution, the mean is pulled significantly higher than typical student behavior. Imputing missing study hours with the inflated mean assigns unrealistic values to missing records. The Median (50th percentile) is robust to outliers and represents the true central tendency of skewed data. For categorical fields, Mode (most frequent) or dedicated 'Missing' indicator categories are preferred.",
    },
    {
      id: "qa-5",
      title: "What is the difference between Data Drift and Concept Drift in deployed AI systems?",
      context:
        "A deployed fraud detection model's accuracy drops from 94% to 76% over six months.",
      answer:
        "Data Drift (Covariate Shift) occurs when the distribution of input features P(X) changes over time (e.g., consumer spending amounts shift due to holiday season or inflation) while the relationship P(Y|X) remains unchanged. Concept Drift occurs when the underlying statistical relationship between features and the target label P(Y|X) changes (e.g., fraudsters adopt entirely new laundering tactics, so previously benign patterns now represent fraud). Both require automated drift detectors and scheduled retraining pipelines.",
    },
    {
      id: "qa-6",
      title: "Why should mutable objects (like lists or dictionaries) never be used as default function arguments in Python?",
      context:
        "A developer writes `def add_student(name, scores=[])` and notices scores persist across different students.",
      answer:
        "In Python, default arguments are evaluated once when the function definition is executed, NOT every time the function is called. If you specify a mutable default like `scores=[]`, that single list instance is shared across all subsequent invocations. Modifying it inside the function mutates the default object for all future callers. The standard professional Python idiom is to use `None`: `def add_student(name, scores=None): if scores is None: scores = []`.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 11 CURRICULUM PARTS DATA (SECTIONS 01 TO 33)
  // ---------------------------------------------------------------------------
  const curriculumParts = [
    {
      id: "part-1",
      partNum: 1,
      title: "Part I — Artificial Intelligence Foundations",
      sections: "Sections 01–05",
      hours: "7 hours",
      diagram: <AITaxonomyDiagram />,
      summary:
        "What is AI, 4 fundamental capabilities, symbolic vs statistical vs deep learning, intelligent agent architectures, and AI engineering roles.",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            <strong>Artificial Intelligence</strong> is a foundational discipline of computer science focused on creating computational systems capable of tasks associated with intelligent behaviour: learning from information, recognizing patterns, understanding natural language, solving complex problems, and selecting rational actions.
          </p>

          <h4 className="font-bold text-stone-900 text-base mt-2">The Four Fundamental Capabilities of AI</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white shadow-xs">
              <strong className="text-stone-900 block text-xs font-bold text-purple-900">A. Perception</strong>
              <p className="mt-1 text-stone-600 text-[11px] leading-relaxed">
                Interprets sensory information from the environment: computer vision in medical CT scans, facial recognition, and speech acoustics.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white shadow-xs">
              <strong className="text-stone-900 block text-xs font-bold text-blue-900">B. Learning</strong>
              <p className="mt-1 text-stone-600 text-[11px] leading-relaxed">
                Improves performance over time through data or feedback: recommendation engines updating customer preferences.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white shadow-xs">
              <strong className="text-stone-900 block text-xs font-bold text-emerald-900">C. Reasoning</strong>
              <p className="mt-1 text-stone-600 text-[11px] leading-relaxed">
                Draws valid inferences and conclusions from available knowledge: clinical diagnostic decision support systems.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white shadow-xs">
              <strong className="text-stone-900 block text-xs font-bold text-orange-900">D. Planning &amp; Action</strong>
              <p className="mt-1 text-stone-600 text-[11px] leading-relaxed">
                Evaluates candidate trajectories to achieve goals: autonomous navigation systems selecting steering and braking maneuvers.
              </p>
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-4">Types of AI Systems by Scope</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Artificial Narrow Intelligence (ANI):</strong> Systems engineered for specific domains (image classifiers, chess engines, translation tools, LLMs). All modern deployed AI systems operate in this category.</li>
            <li><strong>Artificial General Intelligence (AGI):</strong> A theoretical system demonstrating broad human-level cognitive competence across arbitrary domains. An active research horizon, not current software reality.</li>
            <li><strong>Artificial Superintelligence (ASI):</strong> Hypothetical intelligence vastly surpassing human capability across all intellectual fields.</li>
          </ul>

          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3.5 text-xs text-orange-950">
            <strong>Intelligent Agent Core Principle:</strong> An agent operates within an <strong>Environment</strong>. It senses observations through <strong>Perception</strong>, updates its internal state via <strong>Reasoning</strong>, and selects an <strong>Action</strong> that mutates the environment.
          </div>
        </div>
      ),
    },
    {
      id: "part-2",
      partNum: 2,
      title: "Part II — Python Programming for AI (Foundations to OOP)",
      sections: "Sections 06–22",
      hours: "14–16 hours",
      diagram: <IntelligentAgentDiagram />,
      summary:
        "Computational thinking, syntax, dynamic typing, mutable vs immutable, strings & text processing, control flow, functions, data structures, OOP, testing, and venv.",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Python is the lingua franca of AI engineering. Drawing inspiration from <strong>Harvard CS50P</strong>, this part establishes rigorous computational thinking, modular code design, data structures, and object-oriented architectures.
          </p>

          <h4 className="font-bold text-stone-900 text-base mt-2">Core Computational Pillars</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block">1. Dynamic Typing &amp; Scopes</strong>
              <span className="text-[11px] text-stone-600 mt-1 block">
                Variables are references to heap objects. Understand mutable lists/dicts vs immutable ints/strings/tuples and why default arguments must be <code>None</code>.
              </span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block">2. Text Processing &amp; NLP Prep</strong>
              <span className="text-[11px] text-stone-600 mt-1 block">
                String slicing <code>text[::-1]</code>, whitespace normalization, case folding, regex tokenization, and f-string template interpolation.
              </span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block">3. OOP &amp; Dataclasses</strong>
              <span className="text-[11px] text-stone-600 mt-1 block">
                Encapsulation with <code>_private</code> attributes, composition over inheritance, and <code>@dataclass</code> for model configurations.
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-emerald-400 font-mono text-xs overflow-x-auto">
            <div className="text-stone-500 mb-1"># Professional Python Type-Hinted Function with Validation</div>
            <div>def calculate_accuracy(correct: int, total: int) -&gt; float:</div>
            <div className="pl-4 text-stone-400">&quot;&quot;&quot;Calculate classification accuracy percentage.&quot;&quot;&quot;</div>
            <div className="pl-4">if total &lt;= 0:</div>
            <div className="pl-8 text-amber-300">raise ValueError(&quot;Total observations must be strictly positive&quot;)</div>
            <div className="pl-4">return (correct / total) * 100.0</div>
          </div>
        </div>
      ),
    },
    {
      id: "part-3",
      partNum: 3,
      title: "Part III — NumPy for AI Engineering",
      sections: "Sections 23–25",
      hours: "4–5 hours",
      diagram: <VectorizationBenchmarkTool />,
      summary:
        "Multidimensional ndarrays, indexing, reshaping, matrix multiplication with @, statistical operations, broadcasting rules, and vectorization.",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            <strong>NumPy</strong> provides the fundamental numerical infrastructure for all machine learning frameworks (PyTorch, TensorFlow, Scikit-learn). Its central abstraction is the <strong>ndarray</strong>: a homogeneous, multidimensional block of contiguous memory.
          </p>

          <h4 className="font-bold text-stone-900 text-base mt-2">Key Matrix &amp; Array Operations</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li>
              <strong>Element-Wise Arithmetic vs. Dot Product:</strong> <code>A * B</code> computes Hadamard element-wise multiplication; <code>A @ B</code> computes algebraic matrix dot product.
            </li>
            <li>
              <strong>Broadcasting:</strong> Automatically expands smaller arrays across dimensions when trailing axes are either equal or equal to 1.
            </li>
            <li>
              <strong>Boolean Masking:</strong> Filter data instantly without loops: <code>passing = scores[scores &gt;= 40]</code>.
            </li>
            <li>
              <strong>Statistical Reductions:</strong> <code>np.mean()</code>, <code>np.std()</code>, <code>np.argmax()</code>, and <code>np.percentile()</code> executed directly in hardware registers.
            </li>
          </ul>

          <div className="p-3 rounded-xl border border-blue-200 bg-blue-50/70 text-xs text-blue-900">
            <strong>Memory Layout Insight:</strong> Unlike Python lists that store pointers scattered across the heap, a NumPy array stores raw numbers in contiguous memory. This guarantees CPU L1 cache hits and enables SIMD hardware parallel execution.
          </div>
        </div>
      ),
    },
    {
      id: "part-4",
      partNum: 4,
      title: "Part IV — Pandas for Data Engineering",
      sections: "Sections 26–28",
      hours: "4–5 hours",
      diagram: <NormalizationSimulatorTool />,
      summary:
        "Series vs DataFrame, CSV/JSON/Excel I/O, data cleaning, handling missing values, type casting, filtering, loc vs iloc, groupby, and merging.",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Real-world data is messy, incomplete, and inconsistently typed. <strong>Pandas</strong> provides expressive tabular data structures (<strong>Series</strong> and <strong>DataFrames</strong>) for exploratory data analysis (EDA), data wrangling, and feature transformations.
          </p>

          <h4 className="font-bold text-stone-900 text-base mt-2">Essential Data Cleaning Techniques</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block font-mono text-[11px]">Handling Missing Values</strong>
              <code className="text-stone-600 text-[10px] block mt-1">df[&apos;hours&apos;].fillna(df[&apos;hours&apos;].median())</code>
              <span className="text-stone-500 text-[10px] block mt-1">
                Prefer median over mean for skewed distributions to avoid outlier distortions.
              </span>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block font-mono text-[11px]">Deduplication &amp; Type Coercion</strong>
              <code className="text-stone-600 text-[10px] block mt-1">df.drop_duplicates(subset=[&apos;student_id&apos;])</code>
              <span className="text-stone-500 text-[10px] block mt-1">
                Coerce dirty inputs with <code>pd.to_numeric(df[&apos;score&apos;], errors=&apos;coerce&apos;)</code>.
              </span>
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-base mt-2">Selection: loc vs. iloc</h4>
          <p className="text-xs text-stone-600">
            <code>df.loc[label_indexer]</code> uses explicit row/column labels; <code>df.iloc[integer_indexer]</code> uses 0-based integer positional coordinates.
          </p>
        </div>
      ),
    },
    {
      id: "part-5",
      partNum: 5,
      title: "Part V — Jupyter Notebook & Experimentation",
      sections: "Section 29",
      hours: "1–1.5 hours",
      diagram: <AIEngineeringPipelineDiagram />,
      summary:
        "Interactive notebook environment, code vs markdown cells, kernel execution hazards, and reproducible scientific workflows.",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            <strong>Jupyter Notebook</strong> bridges scientific discovery and software engineering. It combines executable code, rich visualizations, mathematical formulas via KaTeX, and narrative explanations into a reproducible document.
          </p>

          <h4 className="font-bold text-stone-900 text-base mt-2">Understanding the Kernel Execution State</h4>
          <p className="text-xs text-stone-600">
            A Jupyter notebook is backed by a stateful Python <strong>Kernel</strong> process. Variables defined in one cell persist in memory.
          </p>
          <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-xs space-y-1">
            <strong>Critical Engineering Hazard (Out-of-Order Execution):</strong>
            <p>
              If an engineer runs Cell 4, modifies Cell 1, and reruns Cell 2, the notebook state becomes hidden and irreproducible. Always execute <strong>Kernel &rarr; Restart &amp; Run All</strong> before sharing or submitting notebook artifacts.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "part-6",
      partNum: 6,
      title: "Part VI — Complete AI Engineering Workflow",
      sections: "Section 30",
      hours: "2 hours",
      diagram: <AIEngineeringPipelineDiagram />,
      summary:
        "11-step lifecycle from problem definition to monitoring, data drift vs concept drift, and traditional ML vs Generative AI workflows.",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            AI Engineering is the discipline of designing, deploying, evaluating, and maintaining production systems powered by machine learning or foundation models. An engineer starts with the <strong>Problem</strong>, not the model.
          </p>

          <h4 className="font-bold text-stone-900 text-base mt-2">The 11-Stage Production Lifecycle</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>1. Problem Formulation:</strong> Establish decision outcomes, target metrics, and constraints.
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>2. Data Preprocessing &amp; EDA:</strong> Handle missing values, outliers, and feature correlations.
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>3. Feature Engineering:</strong> Compute domain ratios (e.g. practice questions per study hour).
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>4. Train/Val/Test Split:</strong> Strictly isolate test data to prevent data leakage.
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>5. Model Training &amp; Loss:</strong> Optimize parameters via gradient descent.
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>6. Evaluation:</strong> Precision, Recall, F1, RMSE, and confusion matrices.
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>7. Deployment &amp; Serving:</strong> REST APIs, containerization, and latency profiling.
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <strong>8. Drift Monitoring:</strong> Detect Covariate Data Drift and Concept Drift.
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentPartData = curriculumParts.find((p) => p.id === activePart) || curriculumParts[0];

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans pb-24">
      {/* Top Module Navigation Bar */}
      <ModuleNav track="ai" currentModuleId="foundations" />

      {/* Hero Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-mono font-bold text-orange-700 flex items-center gap-1.5">
                  <Brain size={14} />
                  AI ENGINEERING &amp; GENERATIVE AI &bull; MODULE 01
                </span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-mono text-stone-600">
                  University-Level Curriculum
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                AI Engineering Foundations &amp; Python for AI
              </h1>
              <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Build the foundations of an AI Engineer. Progress from the principles of Artificial Intelligence and intelligent agent architectures to professional Python programming, NumPy numerical computing, Pandas data engineering, and an end-to-end student performance intelligence system.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/learning")}
                className="px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 transition cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft size={14} />
                All Courses
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("project")}
                className="px-3.5 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                View Capstone Project
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Module Meta Cards */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Guided Duration</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">30–36 Hours</span>
              <span className="text-[10px] text-stone-500 block">12–15 practical lab hours</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Difficulty Level</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Beginner to Intermediate</span>
              <span className="text-[10px] text-stone-500 block">No prior AI experience assumed</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Stack</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Python, NumPy, Pandas</span>
              <span className="text-[10px] text-stone-500 block">Matplotlib, Jupyter, Colab</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Integrated Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Student Intelligence</span>
              <span className="text-[10px] text-orange-600 font-bold block">End-to-End Data Pipeline</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 overflow-x-auto no-scrollbar gap-2">
          {[
            { id: "curriculum", label: "Curriculum & Theory", count: "33 Sections", icon: BookOpen },
            { id: "calculators", label: "Interactive Tools", count: "3 Simulators", icon: Sliders },
            { id: "labs", label: "Practical Labs", count: "7 Labs", icon: Code },
            { id: "project", label: "Mini Capstone", count: "9 Steps", icon: FolderTree },
            { id: "qa", label: "Interview Scenarios", count: "6 Questions", icon: HelpCircle },
            { id: "assessment", label: "Knowledge Quiz", count: "15 MCQs", icon: ShieldCheck },
            { id: "reading", label: "Academic Resources", count: "8 Citations", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-orange-600 text-orange-600 bg-orange-50/50 rounded-t-xl"
                    : "border-transparent text-stone-500 hover:text-stone-900 hover:border-stone-300"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-mono text-stone-600">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & PARTS                                          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Parts Selector */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block px-1">
                Curriculum Structure (33 Sections)
              </span>
              {curriculumParts.map((part) => {
                const isSelected = activePart === part.id;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActivePart(part.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex flex-col gap-1 ${
                      isSelected
                        ? "border-orange-500 bg-white shadow-xs"
                        : "border-[#e7e3da] bg-[#faf8f4] hover:bg-white hover:border-stone-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-orange-600 uppercase">
                        {part.sections} &bull; {part.hours}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-orange-600" />}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                      {part.title}
                    </span>
                    <span className="text-[11px] text-stone-500 line-clamp-1">{part.summary}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Part Content & Diagram */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs space-y-4">
                <div className="border-b border-[#e7e3da] pb-4">
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Part {currentPartData.partNum} of 6 &bull; {currentPartData.sections}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                    {currentPartData.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">{currentPartData.summary}</p>
                </div>
                <div>{currentPartData.content}</div>
              </div>

              <div>{currentPartData.diagram}</div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE TOOLS & BENCHMARKS                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            <VectorizationBenchmarkTool />
            <NormalizationSimulatorTool />
            <AIEngineeringPipelineDiagram />
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: PRACTICAL LABS (PART VII - SECTION 31)                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3 mb-6">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                Section 31 &bull; Practical Hands-on Laboratories
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                Mandatory Engineering Laboratory Program (Labs 01–07)
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Students must not complete this course by watching videos alone. Complete each hands-on laboratory with working deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "LAB 01",
                  title: "AI Application Classification",
                  type: "Conceptual Lab",
                  tasks: [
                    "Select 20 real-world AI applications across healthcare, finance, and robotics.",
                    "Classify each as Rule-based, Supervised ML, Deep Learning, or Generative AI.",
                    "Identify inputs, outputs, failure modes, and ethical risk factors.",
                  ],
                  deliverable: "AI Technology Classification Matrix (PDF / Markdown)",
                },
                {
                  id: "LAB 02",
                  title: "Python Programming Fundamentals",
                  type: "Coding Lab",
                  tasks: [
                    "Build a modular command-line calculator with ZeroDivisionError guards.",
                    "Write an iterative and recursive factorial evaluation script.",
                    "Implement a student grade tracker that persists records to file storage.",
                  ],
                  deliverable: "calculator.py and student_records.py with unit tests",
                },
                {
                  id: "LAB 03",
                  title: "Python Data Structures",
                  type: "Intermediate Coding",
                  tasks: [
                    "Store student records in nested dictionaries and lists.",
                    "Deduplicate skillset tags using set union and intersection.",
                    "Sort student records by score using lambda key sort expressions.",
                  ],
                  deliverable: "student_directory.py with searching & filtering methods",
                },
                {
                  id: "LAB 04",
                  title: "NumPy Numerical Computing",
                  type: "Numerical Computing",
                  tasks: [
                    "Construct 1D, 2D, and 3D ndarrays and verify shape/stride attributes.",
                    "Implement algebraic matrix multiplication with the @ operator.",
                    "Perform Z-score standardization and Min-Max scaling on random feature tensors.",
                  ],
                  deliverable: "numpy_practical_lab.ipynb with benchmarks",
                },
                {
                  id: "LAB 05",
                  title: "Pandas Data Exploration & Wrangling",
                  type: "Data Engineering",
                  tasks: [
                    "Import messy CSV dataset containing nulls and duplicate IDs.",
                    "Impute missing values using median statistics and drop duplicate rows.",
                    "Group by department, aggregate average performance, and export clean dataset.",
                  ],
                  deliverable: "data_cleaning_pipeline.py and cleaned_dataset.csv",
                },
                {
                  id: "LAB 06",
                  title: "Jupyter Experimentation & Visualization",
                  type: "Scientific Notebook",
                  tasks: [
                    "Build a computational notebook combining prose, KaTeX formulas, and Python code.",
                    "Generate Matplotlib histograms and categorized bar charts.",
                    "Demonstrate clean kernel restart & run all cell reproducibility.",
                  ],
                  deliverable: "student_experiment.ipynb with embedded figures",
                },
                {
                  id: "LAB 07",
                  title: "AI Engineering System Architecture",
                  type: "System Design Lab",
                  tasks: [
                    "Identify an educational assistant problem requirement.",
                    "Design a 4-tier architecture (UI, Application API, AI Service, Data Store).",
                    "Specify evaluation metrics, data drift monitors, and responsible AI controls.",
                  ],
                  deliverable: "ai_assistant_architecture_doc.md with block diagrams",
                },
              ].map((lab) => (
                <div key={lab.id} className="p-5 rounded-2xl border border-stone-200 bg-white shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      {lab.id} &bull; {lab.type}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">{lab.title}</h4>
                  <ul className="space-y-1 text-xs text-stone-600">
                    {lab.tasks.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-orange-600 font-bold">&bull;</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-stone-100 text-[11px] font-mono text-stone-500">
                    <strong>Deliverable:</strong> {lab.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: INTEGRATED MODULE PROJECT (SECTION 32)                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Section 32 &bull; Mandatory Capstone
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                    Student Performance Intelligence System
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Build a complete Python, NumPy, and Pandas intelligence system to ingest raw student records, handle nulls, deduplicate IDs, engineer features, and export analytics.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Milestones</span>
                  <span className="text-xl font-extrabold text-orange-600 font-mono">
                    {completedCount} / 9 Complete
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-orange-600 h-full transition-all duration-300"
                  style={{ width: `${(completedCount / 9) * 100}%` }}
                />
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    key: "step1",
                    title: "Step 1: Ingest & Create DataFrame",
                    desc: "Load raw student dictionaries with missing values and duplicate records into Pandas DataFrame.",
                  },
                  {
                    key: "step2",
                    title: "Step 2: Inspect Data Structure",
                    desc: "Audit DataFrame using shape, info(), describe(), isnull().sum(), and duplicated().sum().",
                  },
                  {
                    key: "step3",
                    title: "Step 3: Clean & Impute Missing Data",
                    desc: "Deduplicate student_id, fill missing study hours with median, and coerce invalid scores.",
                  },
                  {
                    key: "step4",
                    title: "Step 4: Compute NumPy Statistics",
                    desc: "Calculate average score, median, standard deviation, min, and max using NumPy vector arrays.",
                  },
                  {
                    key: "step5",
                    title: "Step 5: Categorize Performance",
                    desc: "Apply categorization function: Excellent (>=90), Strong (>=75), Developing (>=60), Needs Support (<60).",
                  },
                  {
                    key: "step6",
                    title: "Step 6: Feature Engineering",
                    desc: "Derive practice_per_hour = practice_questions / study_hours, handling division by zero.",
                  },
                  {
                    key: "step7",
                    title: "Step 7: Filter High & Low Performers",
                    desc: "Query high performers (>=85) and students needing support (<60) for intervention reporting.",
                  },
                  {
                    key: "step8",
                    title: "Step 8: Generate Matplotlib Charts",
                    desc: "Render score distribution histogram and performance category bar chart, saving PNG artifacts.",
                  },
                  {
                    key: "step9",
                    title: "Step 9: Export Clean Dataset & Report",
                    desc: "Export cleaned_student_performance.csv and write technical README with rubric evaluation.",
                  },
                ].map((item) => {
                  const isDone = projectChecklist[item.key];
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleChecklist(item.key)}
                      className={`p-4 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                        isDone
                          ? "border-emerald-300 bg-emerald-50/50"
                          : "border-stone-200 bg-white hover:border-orange-300 shadow-xs"
                      }`}
                    >
                      <div className="mt-0.5">
                        {isDone ? (
                          <CheckCircle2 size={18} className="text-emerald-600" />
                        ) : (
                          <div className="w-4 h-4 rounded border border-stone-300 bg-stone-50" />
                        )}
                      </div>
                      <div>
                        <strong className={`text-xs block ${isDone ? "text-emerald-950" : "text-stone-900"}`}>
                          {item.title}
                        </strong>
                        <p className="text-[11px] text-stone-500 mt-1 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Complete Code Example Box */}
              <div className="mt-6 rounded-xl border border-stone-200 bg-stone-900 p-4 text-xs font-mono text-stone-300 space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-emerald-400 font-bold">student_analysis.py (Complete Reference Script)</span>
                  <button
                    type="button"
                    onClick={() =>
                      copyCode(
                        `import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 1. Dataset Creation\ndata = {\n    "student_id": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1003],\n    "name": ["Aman", "Riya", "Karan", "Neha", "Arjun", "Priya", "Rahul", "Karan"],\n    "study_hours": [2, 4, 6, np.nan, 8, 3, 5, 6],\n    "practice_questions": [10, 25, 40, 45, 60, np.nan, 35, 40],\n    "score": [55, 68, 82, 88, 92, 72, 81, 82]\n}\ndf = pd.DataFrame(data)\n\n# 2. Cleaning\ndf = df.drop_duplicates(subset="student_id", keep="first")\ndf["study_hours"] = df["study_hours"].fillna(df["study_hours"].median())\ndf["practice_questions"] = df["practice_questions"].fillna(0)\ndf["score"] = pd.to_numeric(df["score"], errors="coerce")\ndf = df.dropna(subset=["score"])\n\n# 3. Categorization & Feature Engineering\ndef categorize(s):\n    return "Excellent" if s >= 90 else "Strong" if s >= 75 else "Developing" if s >= 60 else "Needs Support"\n\ndf["performance"] = df["score"].apply(categorize)\ndf["practice_per_hour"] = df["practice_questions"] / df["study_hours"].replace(0, np.nan)\n\n# 4. Statistics\nscores = df["score"].to_numpy()\nprint(f"Mean: {np.mean(scores):.2f}, Median: {np.median(scores)}, Std: {np.std(scores):.2f}")\n\n# 5. Export\ndf.to_csv("cleaned_student_performance.csv", index=False)\nprint("Cleaned dataset successfully exported.")`,
                        "capstone-code"
                      )
                    }
                    className="flex items-center gap-1 text-[11px] text-stone-400 hover:text-white"
                  >
                    {copiedCodeId === "capstone-code" ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{copiedCodeId === "capstone-code" ? "Copied" : "Copy Script"}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto text-[11px] text-stone-300 leading-relaxed">
{`# 1. Deduplicate & Impute Missing Data
df = df.drop_duplicates(subset="student_id", keep="first")
df["study_hours"] = df["study_hours"].fillna(df["study_hours"].median())
df["practice_questions"] = df["practice_questions"].fillna(0)

# 2. Derive Features & Calculate NumPy Metrics
df["performance"] = df["score"].apply(categorize_performance)
df["practice_per_hour"] = df["practice_questions"] / df["study_hours"].replace(0, np.nan)
print("Mean:", np.mean(df["score"].to_numpy()), "Std:", np.std(df["score"].to_numpy()))

# 3. Export
df.to_csv("cleaned_student_performance.csv", index=False)`}
                </pre>
              </div>

              {/* Rubric Table */}
              <div className="mt-4 p-4 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs">
                <span className="font-bold text-stone-900 block font-mono text-[10px] uppercase mb-2">
                  Academic Evaluation Rubric (100 Marks Total):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-stone-600">
                  <div>&bull; Python Programming: <strong>15%</strong></div>
                  <div>&bull; NumPy Operations: <strong>15%</strong></div>
                  <div>&bull; Pandas Processing: <strong>20%</strong></div>
                  <div>&bull; Data Cleaning: <strong>15%</strong></div>
                  <div>&bull; Visualizations: <strong>15%</strong></div>
                  <div>&bull; Code Quality/Testing: <strong>10%</strong></div>
                  <div>&bull; Presentation/Report: <strong>10%</strong></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: TECHNICAL INTERVIEW SCENARIOS (SECTION 33.3)                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="border-b border-stone-200 pb-3 mb-6">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                Section 33.3 &bull; Staff AI Engineering Scenarios
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                Technical Interview &amp; Architecture Scenarios
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Senior engineering explanations covering SIMD vectorization physics, data leakage, drift detection, and Python runtime internals.
              </p>
            </div>

            {qaScenarios.map((qa) => {
              const isExpanded = expandedQA[qa.id];
              return (
                <div
                  key={qa.id}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-xs transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-stone-50/70 transition cursor-pointer"
                  >
                    <div>
                      <span className="font-mono text-[10px] font-bold text-orange-600 uppercase block mb-1">
                        Scenario: {qa.id.toUpperCase()}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900">{qa.title}</h4>
                      <p className="text-xs text-stone-500 mt-1">{qa.context}</p>
                    </div>
                    <div className="shrink-0 text-stone-400">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-5 pt-0 border-t border-stone-100 bg-[#faf8f4] text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <div className="mt-3 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                        <strong className="text-stone-900 block mb-2 font-mono text-xs uppercase text-orange-700">
                          Senior Engineering Answer:
                        </strong>
                        <p>{qa.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT QUIZ (SECTION 33.1)                    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Section 33.1 &bull; Knowledge Evaluation
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Module 01: AI Foundations &amp; Python Evaluation
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    15 multiple-choice questions verifying technical mastery of AI definitions, Python syntax, OOP, NumPy vectorization, and Pandas wrangling.
                  </p>
                </div>
                {quizSubmitted ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-stone-900">
                      Score: {calculateScore()} / 15 ({Math.round((calculateScore() / 15) * 100)}%)
                    </span>
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw size={13} />
                      Retry Quiz
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setQuizSubmitted(true)}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer"
                  >
                    Submit Answers
                  </button>
                )}
              </div>

              {/* Question List */}
              <div className="space-y-6 pt-2">
                {quizQuestions.map((q, idx) => {
                  const selected = selectedAnswers[q.id];
                  const isCorrect = selected === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition ${
                        quizSubmitted
                          ? isCorrect
                            ? "border-emerald-300 bg-emerald-50/30"
                            : "border-red-300 bg-red-50/30"
                          : "border-stone-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-orange-600">
                          Q{idx + 1}.
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                          {q.question}
                        </h4>
                      </div>

                      <div className="space-y-2 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const isOptSelected = selected === oIdx;
                          let optStyle =
                            "border-stone-200 bg-stone-50/60 hover:bg-stone-100 text-stone-700";

                          if (isOptSelected && !quizSubmitted) {
                            optStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                          } else if (quizSubmitted) {
                            if (oIdx === q.correct) {
                              optStyle = "border-emerald-500 bg-emerald-100/70 text-emerald-950 font-bold";
                            } else if (isOptSelected && !isCorrect) {
                              optStyle = "border-red-400 bg-red-100/70 text-red-950 line-through";
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectAnswer(q.id, oIdx)}
                              className={`w-full text-left p-3 rounded-xl border transition cursor-pointer ${optStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                          <strong className="text-stone-900 block font-mono text-[10px] uppercase mb-1">
                            Explanation:
                          </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 7: ACADEMIC CITATIONS & UNIVERSITY CURRICULA (PART X)          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-4">
            <div className="border-b border-stone-200 pb-3 mb-6">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                Part X &bull; Academic Pedagogical Foundation
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                University-Level Curricula &amp; Primary Documentation
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Standard academic references from Harvard, Stanford, and MIT informing this curriculum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Harvard CS50P: Introduction to Programming with Python",
                  institution: "Harvard University / David J. Malan",
                  topics: "Functions, variables, conditionals, loops, exceptions, libraries, unit testing, and OOP.",
                  link: "https://cs50.harvard.edu/python/",
                  badge: "Harvard Online Standard",
                },
                {
                  title: "Stanford CS229: Machine Learning",
                  institution: "Stanford University / Andrew Ng",
                  topics: "Supervised learning, loss optimization, neural network architectures, and generalization.",
                  link: "https://cs229.stanford.edu/",
                  badge: "Stanford Flagship Course",
                },
                {
                  title: "MIT 6.S191: Introduction to Deep Learning",
                  institution: "Massachusetts Institute of Technology (MIT)",
                  topics: "Deep neural networks, backpropagation, transformers, and generative modeling.",
                  link: "http://introtodeeplearning.com/",
                  badge: "MIT Official Course",
                },
                {
                  title: "Python 3 Language Documentation",
                  institution: "Python Software Foundation (PSF)",
                  topics: "Data model, built-in types, exceptions, unittest module, and standard library.",
                  link: "https://docs.python.org/3/",
                  badge: "Official Specification",
                },
                {
                  title: "NumPy User Guide & API Reference",
                  institution: "NumPy Project",
                  topics: "Array creation, slicing, vectorization, broadcasting, and linear algebra routines.",
                  link: "https://numpy.org/doc/stable/",
                  badge: "Open Source Documentation",
                },
                {
                  title: "Pandas User Guide & API Reference",
                  institution: "Pandas Development Team",
                  topics: "DataFrames, Series, missing data imputation, group-by aggregations, and reshaping.",
                  link: "https://pandas.pydata.org/docs/",
                  badge: "Open Source Documentation",
                },
              ].map((res, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-stone-200 bg-white shadow-xs space-y-2 hover:border-orange-300 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-orange-700 bg-orange-100 px-2.5 py-0.5 rounded-full font-bold">
                      {res.badge}
                    </span>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-orange-600 transition"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">{res.title}</h4>
                  <span className="text-[11px] text-stone-500 font-mono block">{res.institution}</span>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">{res.topics}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
