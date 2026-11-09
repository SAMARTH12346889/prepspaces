import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Code,
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
  Play,
  Database,
  Cpu,
  Layers,
  Search,
  FileText,
  Server,
  Activity,
  Zap,
  Filter,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import DataEngineeringPythonSections from "./DataEngineeringPythonSections";

export default function DataEngineeringPython() {
  const navigate = useNavigate();

  // Mode & Workbench selection
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "workbench"
  const [activeWorkbench, setActiveWorkbench] = useState("pipeline"); // "pipeline" | "regex" | "pandas_polars" | "quiz" | "assignments" | "interview"

  // Code copy feedback
  const [copiedId, setCopiedId] = useState(null);
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE ETL PIPELINE SIMULATOR STATE
  // ---------------------------------------------------------------------------
  const initialRawOrders = [
    { order_id: 101, customer_id: 1, product: "Laptop", quantity: 1, price: 50000, status: "SUCCESS" },
    { order_id: 102, customer_id: 2, product: "Mobile", quantity: 2, price: 20000, status: "SUCCESS" },
    { order_id: 103, customer_id: 3, product: "Keyboard", quantity: 3, price: 1000, status: "SUCCESS" },
    { order_id: 104, customer_id: 1, product: "Mouse", quantity: 2, price: 500, status: "FAILED" },
    { order_id: 105, customer_id: 2, product: "Monitor", quantity: 1, price: 12000, status: "SUCCESS" },
    { order_id: 106, customer_id: 3, product: "Headphones", quantity: 2, price: 1500, status: "SUCCESS" },
  ];

  const [pipelineOrders, setPipelineOrders] = useState(initialRawOrders);
  const [customOrderId, setCustomOrderId] = useState("107");
  const [customCustomerId, setCustomCustomerId] = useState("4");
  const [customProduct, setCustomProduct] = useState("Webcam");
  const [customQuantity, setCustomQuantity] = useState("1");
  const [customPrice, setCustomPrice] = useState("3500");
  const [customStatus, setCustomStatus] = useState("SUCCESS");

  const [pipelineStage, setPipelineStage] = useState("raw"); // "raw" | "extracted" | "validated" | "transformed" | "loaded"
  const [pipelineLogs, setPipelineLogs] = useState([
    "2026-11-09 10:00:00 | INFO | src.pipeline | Pipeline initialized with 6 raw CSV records."
  ]);

  const addCustomOrder = () => {
    const newOrd = {
      order_id: Number(customOrderId) || 0,
      customer_id: Number(customCustomerId) || 0,
      product: customProduct.trim() || "Item",
      quantity: Number(customQuantity) || 0,
      price: Number(customPrice) || 0,
      status: customStatus
    };
    setPipelineOrders(prev => [...prev, newOrd]);
    setPipelineLogs(prev => [
      ...prev,
      `2026-11-09 10:01:05 | INFO | src.extractor | Added custom record order_id=${newOrd.order_id} to input stream.`
    ]);
  };

  const resetPipeline = () => {
    setPipelineOrders(initialRawOrders);
    setPipelineStage("raw");
    setPipelineLogs([
      "2026-11-09 10:00:00 | INFO | src.pipeline | Pipeline reset to initial state with 6 records."
    ]);
  };

  const pipelineResults = useMemo(() => {
    const extractedCount = pipelineOrders.length;
    const valid = [];
    const rejected = [];
    const seenIds = new Set();
    const allowedStatuses = new Set(["SUCCESS", "FAILED", "PENDING"]);

    for (let i = 0; i < pipelineOrders.length; i++) {
      const row = pipelineOrders[i];
      const rowNum = i + 2;

      if (!row.order_id || row.order_id <= 0) {
        rejected.push({ rowNumber: rowNum, record: row, reason: "Invalid order ID" });
        continue;
      }
      if (!row.customer_id || row.customer_id <= 0) {
        rejected.push({ rowNumber: rowNum, record: row, reason: "Invalid customer ID" });
        continue;
      }
      if (row.quantity <= 0) {
        rejected.push({ rowNumber: rowNum, record: row, reason: "Invalid quantity <= 0" });
        continue;
      }
      if (row.price < 0) {
        rejected.push({ rowNumber: rowNum, record: row, reason: "Negative price < 0" });
        continue;
      }
      if (!row.product || row.product.trim() === "") {
        rejected.push({ rowNumber: rowNum, record: row, reason: "Product name missing" });
        continue;
      }
      if (!allowedStatuses.has(row.status.toUpperCase())) {
        rejected.push({ rowNumber: rowNum, record: row, reason: `Invalid status: ${row.status}` });
        continue;
      }
      if (seenIds.has(row.order_id)) {
        rejected.push({ rowNumber: rowNum, record: row, reason: `Duplicate order ID: ${row.order_id}` });
        continue;
      }

      seenIds.add(row.order_id);
      valid.push(row);
    }

    const transformed = valid
      .filter(r => r.status === "SUCCESS")
      .map(r => ({
        ...r,
        total_amount: r.quantity * r.price
      }));

    const totalRevenue = transformed.reduce((acc, curr) => acc + curr.total_amount, 0);

    return {
      extracted: extractedCount,
      valid,
      rejected,
      transformed,
      totalRevenue
    };
  }, [pipelineOrders]);

  const advancePipeline = (targetStage) => {
    setPipelineStage(targetStage);
    const ts = new Date().toISOString().replace("T", " ").substring(0, 19);
    if (targetStage === "extracted") {
      setPipelineLogs(prev => [
        ...prev,
        `${ts} | INFO | src.extractor | Extracted ${pipelineResults.extracted} rows from orders.csv`
      ]);
    } else if (targetStage === "validated") {
      setPipelineLogs(prev => [
        ...prev,
        `${ts} | INFO | src.validator | Validated records: ${pipelineResults.valid.length} valid, ${pipelineResults.rejected.length} rejected.`
      ]);
    } else if (targetStage === "transformed") {
      setPipelineLogs(prev => [
        ...prev,
        `${ts} | INFO | src.transformer | Transformed ${pipelineResults.transformed.length} SUCCESS records. Filtered non-SUCCESS transactions.`
      ]);
    } else if (targetStage === "loaded") {
      setPipelineLogs(prev => [
        ...prev,
        `${ts} | INFO | src.loader | Executed batch INSERT INTO orders ON CONFLICT(order_id) DO UPDATE.`,
        `${ts} | INFO | src.loader | Successfully loaded ${pipelineResults.transformed.length} records into SQLite sales.db. Total Revenue: ₹${pipelineResults.totalRevenue.toLocaleString()}`
      ]);
    }
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE REGEX TESTER STATE
  // ---------------------------------------------------------------------------
  const [regexMode, setRegexMode] = useState("email");
  const [regexPattern, setRegexPattern] = useState("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");
  const [regexSampleText, setRegexSampleText] = useState(
    "Contact our engineering team at dev@prepspaces.com or support@company.in.\nInvalid address test: rahul@ without domain.\nBilling desk: payments-billing_2026@cloud.corp.net."
  );

  const handleRegexPreset = (mode) => {
    setRegexMode(mode);
    if (mode === "email") {
      setRegexPattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}");
      setRegexSampleText(
        "Contact our engineering team at dev@prepspaces.com or support@company.in.\nInvalid address test: rahul@ without domain.\nBilling desk: payments-billing_2026@cloud.corp.net."
      );
    } else if (mode === "transaction") {
      setRegexPattern("TXN-\\d{4}-\\d+");
      setRegexSampleText(
        "[2026-11-09 10:20:00] Payment completed. Transaction ID: TXN-2026-1001 status=SUCCESS\n[2026-11-09 10:20:15] Refund issued. Ref: TXN-2026-1002 status=REFUNDED\n[2026-11-09 10:20:30] Webhook error for TXN-99-abc (malformed id)."
      );
    } else if (mode === "phone") {
      setRegexPattern("\\D");
      setRegexSampleText("US Customer: +1 (555) 234-5678\nIndia Customer: +91-987-654-3210");
    }
  };

  const regexMatches = useMemo(() => {
    try {
      if (!regexPattern) return [];
      if (regexMode === "phone") {
        return [
          {
            original: regexSampleText,
            cleaned: regexSampleText.replace(new RegExp("\\D", "g"), "")
          }
        ];
      }
      const reg = new RegExp(regexPattern, "g");
      const matches = regexSampleText.match(reg) || [];
      return matches;
    } catch (e) {
      return ["Error: Invalid Regex Pattern"];
    }
  }, [regexPattern, regexSampleText, regexMode]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE PANDAS VS POLARS ENGINE
  // ---------------------------------------------------------------------------
  const [dataframeEngine, setDataframeEngine] = useState("polars");
  const [queryExecutionMode, setQueryExecutionMode] = useState("lazy");

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "Which Python data structure stores unique elements?",
      options: ["List", "Tuple", "Set", "String"],
      correctIndex: 2,
      explanation: "A set stores unique elements and automatically eliminates duplicates. Sets support mathematical union, intersection, and difference operations."
    },
    {
      id: 2,
      question: "What does yield do inside a Python function?",
      options: [
        "Ends the program",
        "Produces a value and suspends generator execution",
        "Creates a database connection",
        "Deletes an object"
      ],
      correctIndex: 1,
      explanation: "The yield statement produces a value and suspends execution state, returning control to the caller until the next value is requested."
    },
    {
      id: 3,
      question: "Which method is called when a new class instance is initialized?",
      options: ["__start__()", "__main__()", "__init__()", "__create__()"],
      correctIndex: 2,
      explanation: "__init__() is Python's constructor method, executed whenever a new instance is instantiated."
    },
    {
      id: 4,
      question: "What is the primary purpose of exception handling?",
      options: [
        "Increase file size",
        "Handle runtime errors and exceptional conditions",
        "Automatically clean every dataset",
        "Create variables"
      ],
      correctIndex: 1,
      explanation: "Exception handling gracefully intercepts runtime failures, provides diagnostic logs, prevents application crashes, and permits recovery or retries."
    },
    {
      id: 5,
      question: "Which built-in module is used to read and write JSON?",
      options: ["csv", "json", "re", "math"],
      correctIndex: 1,
      explanation: "Python's standard library json module provides json.load(), json.loads(), json.dump(), and json.dumps()."
    },
    {
      id: 6,
      question: "Which technique is suitable for processing a very large CSV without loading everything into memory?",
      options: [
        "Using readlines() for the entire file",
        "Converting the entire file to a list",
        "Reading the file in chunks",
        "Printing every record"
      ],
      correctIndex: 2,
      explanation: "Processing files in chunks (or streaming via generators/iterators) keeps only a bounded subset of rows in memory at any given time."
    },
    {
      id: 7,
      question: "Which library is commonly used for HTTP requests in Python?",
      options: ["Requests", "Pytest", "SQLite", "Regex"],
      correctIndex: 0,
      explanation: "Requests is the de facto standard HTTP library for Python REST API interactions, authentication, and session management."
    },
    {
      id: 8,
      question: "What does a virtual environment provide?",
      options: [
        "A new physical computer",
        "Isolation of project dependencies",
        "Automatic cloud deployment",
        "A database backup"
      ],
      correctIndex: 1,
      explanation: "A virtual environment isolates project-specific dependencies and packages from the global system installation and other projects."
    },
    {
      id: 9,
      question: "What is the correct tool for automated Python unit testing in this module?",
      options: ["Airflow", "Kafka", "Pytest", "Parquet"],
      correctIndex: 2,
      explanation: "Pytest is Python's premier testing framework, featuring assert-based tests, fixtures, and parameterized execution."
    },
    {
      id: 10,
      question: "What does df.groupby() commonly do in Pandas?",
      options: [
        "Deletes a DataFrame",
        "Groups rows to support aggregation",
        "Creates a virtual environment",
        "Connects to an API"
      ],
      correctIndex: 1,
      explanation: "df.groupby() splits data into groups based on key columns, permitting aggregate computations like sum(), mean(), or count()."
    },
    {
      id: 11,
      question: "Which feature of Polars allows a query to be planned before execution?",
      options: ["Lazy execution", "Inheritance", "Exception chaining", "File locking"],
      correctIndex: 0,
      explanation: "Polars lazy execution builds a query plan graph and optimizes predicate pushdown and projection pushdown before running collect()."
    },
    {
      id: 12,
      question: "Why should SQL queries use parameters for external values?",
      options: [
        "To change Python syntax",
        "To reduce SQL injection risk and separate values from query code",
        "To disable transactions",
        "To increase CSV file size"
      ],
      correctIndex: 1,
      explanation: "Parameterized SQL prevents malicious injection attacks and cleanly separates structural SQL commands from untrusted client input."
    },
    {
      id: 13,
      question: "Which Python feature is used to record application events at different severity levels?",
      options: ["print only", "logging", "range", "enumerate"],
      correctIndex: 1,
      explanation: "Python's logging module provides standard levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) with structured timestamps and file handlers."
    },
    {
      id: 14,
      question: "What does idempotency mean in data pipeline design?",
      options: [
        "Every job must run exactly once",
        "Repeated execution should not create unintended additional effects",
        "All records must be deleted",
        "Every dataset must be a list"
      ],
      correctIndex: 1,
      explanation: "Idempotent pipelines guarantee that re-running a job or re-processing batches does not duplicate records or corrupt data."
    },
    {
      id: 15,
      question: "Which module provides Python's built-in CSV reader and writer?",
      options: ["xml", "csv", "typing", "datetime"],
      correctIndex: 1,
      explanation: "The csv module contains csv.reader, csv.writer, csv.DictReader, and csv.DictWriter."
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, optionIndex) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) score++;
    });
    return score;
  };

  // ---------------------------------------------------------------------------
  // PRACTICAL ASSIGNMENTS STATE
  // ---------------------------------------------------------------------------
  const [completedAssignments, setCompletedAssignments] = useState({});
  const toggleAssignment = (id) => {
    setCompletedAssignments(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERVIEW QUESTIONS VAULT STATE
  // ---------------------------------------------------------------------------
  const [expandedInterviewQuestion, setExpandedInterviewQuestion] = useState(null);
  const [interviewFilter, setInterviewFilter] = useState("all");

  const interviewQuestions = [
    {
      id: 1,
      category: "fundamentals",
      question: "What is Python, and why is it used in Data Engineering?",
      answer: "Python is a high-level, general-purpose interpreted language with clean syntax, dynamic strong typing, and an enormous ecosystem of data libraries (Pandas, Polars, PyArrow, Requests, SQLAlchemy, Pytest). It excels as glue code connecting APIs, databases, message queues, cloud object storage, and distributed engines like Apache Spark."
    },
    {
      id: 2,
      category: "fundamentals",
      question: "Explain dynamic typing and strong typing in Python.",
      answer: "Dynamic typing means variable types are determined at runtime without explicit declarations. Strong typing means Python enforces type safety and does not automatically coerce unrelated types (e.g. '10' + 5 raises TypeError instead of coercing to 15 or '105')."
    },
    {
      id: 3,
      category: "fundamentals",
      question: "What is the difference between mutable and immutable objects?",
      answer: "Mutable objects (lists, dictionaries, sets) can have their contents altered in-place after creation without changing object identity. Immutable objects (integers, floats, strings, tuples, frozensets) cannot be modified after instantiation; any operation produces a new object."
    },
    {
      id: 4,
      category: "fundamentals",
      question: "Explain lists, tuples, sets, and dictionaries.",
      answer: "Lists: ordered, mutable, permit duplicates [1, 2, 2]. Tuples: ordered, immutable, permit duplicates (1, 2). Sets: unordered/insertion-ordered, mutable, unique elements only {1, 2}. Dictionaries: key-value mapping with unique hashable keys and fast O(1) average lookups."
    },
    {
      id: 5,
      category: "fundamentals",
      question: "What is the difference between == and is?",
      answer: "== evaluates value equality (whether two objects have equivalent content). 'is' evaluates reference identity (whether two references point to the exact same memory address, verified via id()). Always use 'is None' to check for missing/None values."
    },
    {
      id: 6,
      category: "fundamentals",
      question: "What is the difference between append() and extend()?",
      answer: "append(item) adds the item as a single element at the end of the list. extend(iterable) unpacks and appends each element from the iterable into the target list."
    },
    {
      id: 7,
      category: "fundamentals",
      question: "What is the difference between break and continue?",
      answer: "break immediately terminates the loop entirely. continue skips the remainder of the current iteration and advances execution to the next iteration."
    },
    {
      id: 8,
      category: "fundamentals",
      question: "What is the difference between positional and keyword arguments?",
      answer: "Positional arguments are mapped to function parameters by their sequential order. Keyword arguments are explicitly passed by parameter name (e.g. func(city='Pune', name='Rahul')), allowing any order."
    },
    {
      id: 9,
      category: "fundamentals",
      question: "What is the purpose of *args and **kwargs?",
      answer: "*args accepts variable-length non-keyword positional arguments as a tuple. **kwargs accepts variable-length keyword arguments as a dictionary, facilitating flexible wrapper functions and decorators."
    },
    {
      id: 10,
      category: "fundamentals",
      question: "What are Python decorators?",
      answer: "Decorators are functions that take another function as an argument, extend or wrap its behavior without modifying its source code, and return a new callable. Widely used for timing execution (@measure_time), authentication, logging, and retry logic."
    },
    {
      id: 11,
      category: "advanced",
      question: "What are iterators and generators?",
      answer: "An iterator is an object implementing __iter__() and __next__(). A generator is a specialized function containing yield that lazily produces items on demand, maintaining state between calls without allocating memory for the full sequence."
    },
    {
      id: 12,
      category: "advanced",
      question: "What is the difference between yield and return?",
      answer: "return sends a single final value back to the caller and terminates the function's execution frame. yield emits an intermediate value, freezes the local execution state, and resumes from that point when next() is invoked."
    },
    {
      id: 13,
      category: "advanced",
      question: "Explain list comprehensions and when NOT to use them.",
      answer: "List comprehensions provide concise syntax for transforming and filtering iterables: [x**2 for x in nums if x > 0]. Do not use them when processing massive datasets that exceed RAM (use generator expressions instead) or when multi-line complex logic harms readability."
    },
    {
      id: 14,
      category: "advanced",
      question: "How do generators help process large datasets?",
      answer: "Generators stream records row-by-row or batch-by-batch. A 50GB file can be read and transformed using only a few megabytes of RAM because records are discarded from working memory after downstream consumption."
    },
    {
      id: 15,
      category: "advanced",
      question: "What is the difference between shallow copy and deep copy?",
      answer: "A shallow copy (copy.copy()) constructs a new collection object but populates it with references to the child objects contained in the original. A deep copy (copy.deepcopy()) recursively copies all nested objects, isolating the new copy completely."
    },
    {
      id: 16,
      category: "advanced",
      question: "Explain the four pillars of Object-Oriented Programming (OOP) in Data Engineering.",
      answer: "Encapsulation: bundling data and methods while restricting direct external modification (__balance). Inheritance: reusing base classes (DataSource -> DatabaseSource). Polymorphism: uniform interfaces for different formats (CSVExtractor, JSONExtractor). Abstraction: exposing clean interfaces while hiding complex internal mechanics using abc.ABC."
    },
    {
      id: 17,
      category: "advanced",
      question: "What is the purpose of a context manager in Python?",
      answer: "Context managers (implemented via with statements and __enter__/__exit__) ensure guaranteed resource acquisition and release, such as closing file handles, database connections, and releasing locks, even when unhandled exceptions occur."
    },
    {
      id: 18,
      category: "advanced",
      question: "What is the Global Interpreter Lock (GIL)?",
      answer: "The GIL is a mutex in CPython that allows only one native thread to execute Python bytecode at a time, protecting memory management. For CPU-bound parallel processing, engineers use multiprocessing, vectorized C/Rust libraries (NumPy, Polars), or distributed systems (Spark)."
    },
    {
      id: 19,
      category: "files",
      question: "How do you read a large CSV file efficiently in Python?",
      answer: "1) Iterate line-by-line via open() or csv.DictReader. 2) Read in batches with a custom generator yielding chunk lists. 3) Use pd.read_csv('orders.csv', chunksize=10000). 4) Use Polars lazy execution with pl.scan_csv('orders.csv')."
    },
    {
      id: 20,
      category: "files",
      question: "Compare CSV, JSON, and XML for data pipelines.",
      answer: "CSV: Flat tabular structure, compact, fast, but lacks nested hierarchies and explicit type metadata. JSON: Key-value objects and arrays, natively maps to dictionaries, ideal for REST APIs, but verbose for millions of rows. XML: Hierarchical nested tags, schema-enforceable (XSD), prevalent in enterprise/banking, but verbose and slow to parse."
    },
    {
      id: 21,
      category: "files",
      question: "How do you handle missing values in Python?",
      answer: "Check with value is None or pd.isna(). Replace with sensible business defaults (e.g. fillna(0) for counts), drop unrecoverable rows (dropna()), or route corrupted rows to a quarantine/dead-letter table for investigation."
    },
    {
      id: 22,
      category: "files",
      question: "What is regular expression pattern matching and how is it used in ETL?",
      answer: "Regex (re module) matches and extracts substrings based on formal patterns (e.g. r'TXN-\\d{4}-\\d+' for transaction codes, or r'\\D' to strip non-digit characters from phone numbers) and validates emails and timestamps during data ingestion."
    },
    {
      id: 23,
      category: "api_db",
      question: "What is a REST API and how do you send GET requests in Python?",
      answer: "A REST API exposes server resources over HTTP endpoints. In Python, use requests.get(url, params=params, headers=headers, timeout=15). Always specify a timeout and call response.raise_for_status() to intercept HTTP 4xx/5xx errors."
    },
    {
      id: 24,
      category: "api_db",
      question: "What is API pagination and how do you implement it?",
      answer: "APIs limit payloads using pagination (offset/limit, page-based, or cursor-based). A pipeline iterates in a while loop, requesting successive pages or following continuation tokens until no new records are returned."
    },
    {
      id: 25,
      category: "api_db",
      question: "How do you handle HTTP 429 Too Many Requests?",
      answer: "Inspect the 'Retry-After' header if present. Implement exponential backoff with random jitter to delay retries (e.g. 2s, 4s, 8s) and ensure client request rates stay under documented SLA quotas."
    },
    {
      id: 26,
      category: "api_db",
      question: "Why are parameterized database queries critical?",
      answer: "Parameterized queries pass external inputs as separate parameters (e.g. VALUES (?, ?) in SQLite or :param in SQLAlchemy) rather than string interpolation, neutralizing SQL injection attacks and enabling query plan caching."
    },
    {
      id: 27,
      category: "api_db",
      question: "What is SQLAlchemy and why do data engineers use it?",
      answer: "SQLAlchemy provides database abstraction, connection pooling, dialect translation across PostgreSQL/MySQL/Oracle/Snowflake, transaction context management, and unified bulk execution interfaces."
    },
    {
      id: 28,
      category: "api_db",
      question: "How do you make database ingestion idempotent?",
      answer: "Use natural/business unique keys, deterministic hash IDs, and database upsert operations (INSERT INTO ... ON CONFLICT(order_id) DO UPDATE in PostgreSQL/SQLite) or staging table merges so re-running a job updates existing records without duplication."
    },
    {
      id: 29,
      category: "pandas_testing",
      question: "What is the difference between Pandas and Polars?",
      answer: "Pandas: Mature, widely adopted, Python/C implementation, primarily eager execution, single-core by default. Polars: Written in Rust, built on Apache Arrow memory format, multi-threaded parallel execution, supports lazy query optimization (scan_csv + collect), and significantly lower memory overhead."
    },
    {
      id: 30,
      category: "pandas_testing",
      question: "What is lazy execution in Polars?",
      answer: "Lazy execution constructs an expression graph rather than executing operations row-by-row. When collect() is invoked, the engine applies predicate pushdown (filtering before reading) and projection pushdown (reading only required columns)."
    },
    {
      id: 31,
      category: "pandas_testing",
      question: "What is Pytest and what are parameterized tests?",
      answer: "Pytest is a Python test framework. Parameterized tests (@pytest.mark.parametrize) execute a single test function multiple times across an array of varied input/output tuples, testing edge cases like negative values, empty strings, and nulls."
    },
    {
      id: 32,
      category: "production",
      question: "Why is structured logging preferred over print() in production pipelines?",
      answer: "Logging provides severity filtering (DEBUG, INFO, WARNING, ERROR), ISO timestamps, logger names, thread IDs, stack traces, and routing to multiple destinations (console, rotating files, centralized sinks like Datadog/CloudWatch)."
    },
    {
      id: 33,
      category: "production",
      question: "How do you protect database credentials and API keys?",
      answer: "Store secrets in environment variables (.env files locally, AWS Secrets Manager or HashiCorp Vault in cloud). Never hardcode secrets in source code or commit them to version control (.gitignore .env and .venv)."
    },
    {
      id: 34,
      category: "production",
      question: "What happens when a pipeline fails halfway through?",
      answer: "Without transactions and checkpoints, the destination database is left in a corrupted partial state. Production pipelines wrap writes in database transactions (rollback on failure), maintain atomic staging tables, and save checkpoints for resumption."
    },
    {
      id: 35,
      category: "production",
      question: "How would you process 100 million records using Python data engineering tools?",
      answer: "1) Avoid loading all rows into RAM. 2) Store data in columnar Parquet format partitioned by date/region. 3) Process in batches with Polars lazy scans or PyArrow. 4) Bulk-insert via database staging tables with COPY commands. 5) For multi-node distributed workloads, orchestrate using Apache Spark (PySpark) with an Airflow DAG."
    }
  ];

  const filteredQuestions = useMemo(() => {
    if (interviewFilter === "all") return interviewQuestions;
    return interviewQuestions.filter(q => q.category === interviewFilter);
  }, [interviewFilter]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-900">
      {/* Top Universal Module Navigation Bar */}
      <ModuleNav
        currentModuleId="python"
        courseId="data-engineering"
        courseName="Data Engineering Master Course"
        trackName="Data Engineering"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Header Breadcrumb & Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium">
            <span
              onClick={() => navigate("/learning")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Curriculum
            </span>
            <span>/</span>
            <span
              onClick={() => navigate("/courses/data-engineering")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Data Engineering
            </span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 2 · Python</span>
          </div>

          {/* Mode Pill Switcher */}
          <div className="flex items-center bg-stone-200/70 p-1 rounded-2xl self-start md:self-auto border border-stone-300/60 shadow-inner">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Specification & Blueprints
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "workbench"
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Interactive Workbenches (6)
            </button>
          </div>
        </div>

        {/* HERO BANNER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-orange-100 text-orange-800 border border-orange-200">
              DATA ENGINEERING MASTER COURSE · MODULE 2
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-stone-100 text-stone-700 border border-stone-200">
              PROGRAMMING FOUNDATIONS · INTERMEDIATE TO ADVANCED
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 26 SECTIONS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-4">
            Module 2 — Python Programming for Data Engineering
          </h1>

          <p className="text-stone-600 text-base sm:text-lg max-w-4xl leading-relaxed mb-6">
            Master the core programming language of modern data platforms. From CPython internals, generators, and OOP architectures to streaming large files, regex parsing, REST API ingestion, database connectivity (SQLite & SQLAlchemy), high-performance DataFrames (Pandas vs Polars), Pytest automation, and a production-ready e-commerce ETL pipeline.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-100 text-xs sm:text-sm">
            <div>
              <span className="text-stone-600 block">Core Languages</span>
              <span className="font-bold text-stone-900">Python 3.12+ (CPython)</span>
            </div>
            <div>
              <span className="text-stone-600 block">Data Engines</span>
              <span className="font-bold text-stone-900">Pandas, Polars, PyArrow</span>
            </div>
            <div>
              <span className="text-stone-600 block">Testing & DB</span>
              <span className="font-bold text-stone-900">Pytest, SQLite, SQLAlchemy</span>
            </div>
            <div>
              <span className="text-stone-600 block">Delivery Format</span>
              <span className="font-bold text-stone-900">Modular ETL Pipeline</span>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* TAB 1: CURRICULUM VIEW (SPECIFICATION & BLUEPRINTS) */}
        {/* =================================================================== */}
        {activeTab === "curriculum" && (
          <DataEngineeringPythonSections />
        )}

        {/* =================================================================== */}
        {/* TAB 2: INTERACTIVE WORKBENCHES VIEW */}
        {/* =================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
              <button
                onClick={() => setActiveWorkbench("pipeline")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "pipeline"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Activity className="w-3.5 h-3.5" /> 1. ETL Pipeline Simulator
              </button>

              <button
                onClick={() => setActiveWorkbench("regex")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "regex"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Filter className="w-3.5 h-3.5" /> 2. Regex & Log Extractor
              </button>

              <button
                onClick={() => setActiveWorkbench("pandas_polars")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "pandas_polars"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" /> 3. Pandas vs Polars Engine
              </button>

              <button
                onClick={() => setActiveWorkbench("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "quiz"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" /> 4. Knowledge Quiz (15 Qs)
              </button>

              <button
                onClick={() => setActiveWorkbench("assignments")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "assignments"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" /> 5. Assignments (7)
              </button>

              <button
                onClick={() => setActiveWorkbench("interview")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeWorkbench === "interview"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" /> 6. Interview Vault (35+)
              </button>
            </div>

            {/* WORKBENCH 1: INTERACTIVE ETL PIPELINE SIMULATOR */}
            {activeWorkbench === "pipeline" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-orange-600" />
                      Interactive Python ETL Pipeline Simulator
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Simulate the Section 20 e-commerce data pipeline: extract CSV records, validate business rules, route corrupt records, calculate revenue, and batch-upsert into SQLite.
                    </p>
                  </div>
                  <button
                    onClick={resetPipeline}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 self-start sm:self-auto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Reset Dataset
                  </button>
                </div>

                {/* Pipeline Stage Controller */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => advancePipeline("extracted")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      pipelineStage === "extracted"
                        ? "bg-orange-50 border-orange-300 ring-2 ring-orange-500/20"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase text-stone-600 block">Step 1</span>
                    <span className="font-bold text-xs text-stone-900">Extract (CSV)</span>
                    <span className="text-[11px] text-stone-600 block mt-0.5">{pipelineResults.extracted} Rows</span>
                  </button>

                  <button
                    onClick={() => advancePipeline("validated")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      pipelineStage === "validated"
                        ? "bg-orange-50 border-orange-300 ring-2 ring-orange-500/20"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase text-stone-600 block">Step 2</span>
                    <span className="font-bold text-xs text-stone-900">Validate Rules</span>
                    <span className="text-[11px] text-emerald-600 block mt-0.5">{pipelineResults.valid.length} Valid / {pipelineResults.rejected.length} Rejected</span>
                  </button>

                  <button
                    onClick={() => advancePipeline("transformed")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      pipelineStage === "transformed"
                        ? "bg-orange-50 border-orange-300 ring-2 ring-orange-500/20"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase text-stone-600 block">Step 3</span>
                    <span className="font-bold text-xs text-stone-900">Transform</span>
                    <span className="text-[11px] text-stone-600 block mt-0.5">{pipelineResults.transformed.length} Success Orders</span>
                  </button>

                  <button
                    onClick={() => advancePipeline("loaded")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      pipelineStage === "loaded"
                        ? "bg-orange-50 border-orange-300 ring-2 ring-orange-500/20"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase text-stone-600 block">Step 4</span>
                    <span className="font-bold text-xs text-stone-900">Load to SQLite</span>
                    <span className="text-[11px] text-orange-600 font-bold block mt-0.5">₹{pipelineResults.totalRevenue.toLocaleString()}</span>
                  </button>
                </div>

                {/* Real-time metrics bar */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <span className="text-stone-600 block">Raw Extracted</span>
                    <span className="font-extrabold text-stone-900 text-sm">{pipelineResults.extracted}</span>
                  </div>
                  <div>
                    <span className="text-stone-600 block">Passed Validation</span>
                    <span className="font-extrabold text-emerald-600 text-sm">{pipelineResults.valid.length}</span>
                  </div>
                  <div>
                    <span className="text-stone-600 block">Quarantined</span>
                    <span className="font-extrabold text-rose-600 text-sm">{pipelineResults.rejected.length}</span>
                  </div>
                  <div>
                    <span className="text-stone-600 block">Loaded Orders</span>
                    <span className="font-extrabold text-stone-900 text-sm">{pipelineResults.transformed.length}</span>
                  </div>
                  <div>
                    <span className="text-stone-600 block">Calculated Revenue</span>
                    <span className="font-extrabold text-orange-600 text-sm">₹{pipelineResults.totalRevenue.toLocaleString()}</span>
                  </div>
                </div>

                {/* Add Custom Record Bar to Test Validation & Upserts */}
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-800 mb-2">Inject Custom Record to Test Rules (Duplicates, Bad Prices, Failed Statuses):</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs">
                    <input
                      type="number"
                      placeholder="Order ID"
                      value={customOrderId}
                      onChange={e => setCustomOrderId(e.target.value)}
                      className="p-2 border border-stone-300 rounded-xl bg-white"
                    />
                    <input
                      type="number"
                      placeholder="Cust ID"
                      value={customCustomerId}
                      onChange={e => setCustomCustomerId(e.target.value)}
                      className="p-2 border border-stone-300 rounded-xl bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Product"
                      value={customProduct}
                      onChange={e => setCustomProduct(e.target.value)}
                      className="p-2 border border-stone-300 rounded-xl bg-white"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={customQuantity}
                      onChange={e => setCustomQuantity(e.target.value)}
                      className="p-2 border border-stone-300 rounded-xl bg-white"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={customPrice}
                      onChange={e => setCustomPrice(e.target.value)}
                      className="p-2 border border-stone-300 rounded-xl bg-white"
                    />
                    <button
                      onClick={addCustomOrder}
                      className="px-3 py-2 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-sm"
                    >
                      + Inject Row
                    </button>
                  </div>
                </div>

                {/* Display Current Stage Data */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-stone-700 tracking-wider">
                    Current Active State: {pipelineStage.toUpperCase()}
                  </h4>
                  
                  <div className="overflow-x-auto [scrollbar-width:thin] border border-stone-200 rounded-2xl">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                        <tr>
                          <th className="p-3">order_id</th>
                          <th className="p-3">customer_id</th>
                          <th className="p-3">product</th>
                          <th className="p-3">quantity</th>
                          <th className="p-3">price</th>
                          <th className="p-3">status</th>
                          {pipelineStage === "transformed" || pipelineStage === "loaded" ? (
                            <th className="p-3 text-orange-600">total_amount</th>
                          ) : null}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {(pipelineStage === "transformed" || pipelineStage === "loaded"
                          ? pipelineResults.transformed
                          : pipelineOrders
                        ).map((row, idx) => (
                          <tr key={idx} className="hover:bg-stone-50">
                            <td className="p-3 font-mono font-bold text-stone-900">{row.order_id}</td>
                            <td className="p-3 font-mono text-stone-600">{row.customer_id}</td>
                            <td className="p-3 text-stone-800 font-medium">{row.product}</td>
                            <td className="p-3 font-mono">{row.quantity}</td>
                            <td className="p-3 font-mono">₹{row.price.toLocaleString()}</td>
                            <td className="p-3">
                              <span
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                  row.status === "SUCCESS"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-rose-100 text-rose-800"
                                }`}
                              >
                                {row.status}
                              </span>
                            </td>
                            {pipelineStage === "transformed" || pipelineStage === "loaded" ? (
                              <td className="p-3 font-mono font-bold text-orange-600">
                                ₹{(row.quantity * row.price).toLocaleString()}
                              </td>
                            ) : null}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Rejected rows quarantine inspection */}
                  {pipelineResults.rejected.length > 0 && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl">
                      <h5 className="font-bold text-xs text-rose-900 mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        Quarantined Records (`output/rejected_orders.csv`)
                      </h5>
                      <div className="space-y-1.5 text-xs text-rose-800 font-mono">
                        {pipelineResults.rejected.map((rej, i) => (
                          <div key={i} className="flex items-center justify-between bg-white/70 p-2 rounded-lg border border-rose-100">
                            <span>Row {rej.rowNumber}: Order #{rej.record.order_id} ({rej.record.product})</span>
                            <span className="font-bold text-rose-700">{rej.reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Terminal Execution Logs */}
                  <div>
                    <h5 className="text-xs font-bold uppercase text-stone-700 tracking-wider mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-stone-600" />
                      Execution Audit Logs (`logs/pipeline.log`)
                    </h5>
                    <pre className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin] max-h-48">
                      {pipelineLogs.map((log, i) => (
                        <div key={i} className="leading-relaxed">{log}</div>
                      ))}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: REGEX TESTER */}
            {activeWorkbench === "regex" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="pb-4 border-b border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-orange-600" />
                    Interactive Regular Expression (Regex) Workbench
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Test regular expressions on real-world log strings, transactional IDs, and dirty contact data in real-time.
                  </p>
                </div>

                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => handleRegexPreset("email")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      regexMode === "email" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Email Extractor
                  </button>
                  <button
                    onClick={() => handleRegexPreset("transaction")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      regexMode === "transaction" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    TXN Log Parser
                  </button>
                  <button
                    onClick={() => handleRegexPreset("phone")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      regexMode === "phone" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Non-Digit Stripper (\D)
                  </button>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Regex Pattern:</label>
                  <input
                    type="text"
                    value={regexPattern}
                    onChange={e => setRegexPattern(e.target.value)}
                    className="w-full p-3 font-mono text-xs border border-stone-300 rounded-xl bg-stone-50"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Target Raw Text / Log Payload:</label>
                  <textarea
                    rows={4}
                    value={regexSampleText}
                    onChange={e => setRegexSampleText(e.target.value)}
                    className="w-full p-3 font-mono text-xs border border-stone-300 rounded-xl bg-stone-50"
                  />
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-800 mb-2">Extraction Results:</h4>
                  {regexMode === "phone" ? (
                    <div className="text-xs font-mono text-stone-700">
                      Cleaned Digits: <strong className="text-emerald-600">{regexMatches[0]?.cleaned}</strong>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {regexMatches.length > 0 ? (
                        regexMatches.map((m, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white border border-stone-300 text-stone-800 font-mono text-xs rounded-lg shadow-sm">
                            {m}
                          </span>
                        ))
                      ) : (
                        <span className="text-stone-600 text-xs italic">No matching pattern found.</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WORKBENCH 3: PANDAS VS POLARS ENGINE */}
            {activeWorkbench === "pandas_polars" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="pb-4 border-b border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-orange-600" />
                    Pandas vs Polars Architecture & Query Planner
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare eager step-by-step memory allocation against Polars compiled Rust query graphs with lazy pushdown.
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <span className="font-bold text-stone-700">Engine:</span>
                  <button
                    onClick={() => setDataframeEngine("pandas")}
                    className={`px-3 py-1.5 rounded-xl font-bold ${
                      dataframeEngine === "pandas" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Pandas (Python + C)
                  </button>
                  <button
                    onClick={() => setDataframeEngine("polars")}
                    className={`px-3 py-1.5 rounded-xl font-bold ${
                      dataframeEngine === "polars" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Polars (Rust Engine)
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                    <h4 className="font-bold text-stone-900 mb-2">Code Implementation</h4>
                    <pre className="bg-stone-900 text-stone-100 p-3 rounded-xl font-mono overflow-x-auto [scrollbar-width:thin]">
{dataframeEngine === "pandas" ? `import pandas as pd

# Pandas Eager Execution
df = pd.read_csv("large_orders.csv")
filtered = df[df["status"] == "SUCCESS"]
result = (
    filtered.groupby("customer_id")["amount"]
    .sum()
    .reset_index()
)` : `import polars as pl

# Polars Lazy Execution Graph
result = (
    pl.scan_csv("large_orders.csv")
    .filter(pl.col("status") == "SUCCESS")
    .group_by("customer_id")
    .agg(pl.col("amount").sum().alias("total_spend"))
    .collect()  # Rust engine executes
)`}
                    </pre>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                    <h4 className="font-bold text-stone-900 mb-2">Query Execution Plan</h4>
                    <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-2 text-stone-700 font-mono text-[11px]">
                      {dataframeEngine === "pandas" ? (
                        <>
                          <div className="text-amber-800">1. [EAGER] Load all columns of large_orders.csv into RAM</div>
                          <div className="text-amber-800">2. [EAGER] Allocate boolean mask vector for status == SUCCESS</div>
                          <div className="text-amber-800">3. [EAGER] Slice rows into a 2nd complete DataFrame copy</div>
                          <div className="text-amber-800">4. [EAGER] Single-threaded groupby hash aggregation</div>
                          <div className="text-stone-600 font-sans italic text-xs mt-2">Peak memory: ~3x raw dataset size.</div>
                        </>
                      ) : (
                        <>
                          <div className="text-emerald-700 font-bold">1. [PLAN] Construct Abstract Syntax Tree (AST)</div>
                          <div className="text-emerald-700">2. [OPTIMIZE] Predicate Pushdown: filter status earlier</div>
                          <div className="text-emerald-700">3. [OPTIMIZE] Projection Pushdown: read only customer_id, amount, status</div>
                          <div className="text-emerald-700">4. [EXECUTE] Multi-core SIMD parallel Rust scan</div>
                          <div className="text-stone-600 font-sans italic text-xs mt-2">Peak memory: ~0.3x raw dataset size (up to 10x memory reduction).</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: KNOWLEDGE ASSESSMENT QUIZ (15 Questions) */}
            {activeWorkbench === "quiz" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-orange-600" />
                      Module 2 Knowledge Assessment (15 Questions)
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Validate your comprehension of Python foundations, iterators, OOP, database connectivity, and testing.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-bold text-stone-600">
                      {Object.keys(userAnswers).length} / {quizQuestions.length} Answered
                    </span>
                    {showResults && (
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-extrabold text-xs">
                        Score: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map(q => {
                    const selected = userAnswers[q.id];
                    const isCorrect = selected === q.correctIndex;
                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          showResults
                            ? isCorrect
                              ? "bg-emerald-50/50 border-emerald-200"
                              : "bg-rose-50/50 border-rose-200"
                            : "bg-stone-50 border-stone-200"
                        }`}
                      >
                        <h4 className="font-bold text-stone-900 text-sm mb-3">
                          {q.id}. {q.question}
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map((opt, optIdx) => {
                            let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                            if (selected === optIdx) {
                              btnStyle = "bg-stone-900 text-white font-bold border-stone-900";
                            }
                            if (showResults) {
                              if (optIdx === q.correctIndex) {
                                btnStyle = "bg-emerald-600 text-white font-bold border-emerald-600";
                              } else if (selected === optIdx && !isCorrect) {
                                btnStyle = "bg-rose-600 text-white font-bold border-rose-600";
                              }
                            }
                            return (
                              <button
                                key={optIdx}
                                disabled={showResults}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                className={`p-3 rounded-xl border text-left transition-all ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className="mt-3 pt-3 border-t border-stone-200/60 text-xs text-stone-600">
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowResults(false);
                    }}
                    className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50"
                  >
                    Reset Answers
                  </button>
                  <button
                    onClick={() => setShowResults(true)}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 shadow-sm"
                  >
                    Submit Assessment
                  </button>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: PRACTICAL ASSIGNMENTS (7) */}
            {activeWorkbench === "assignments" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="pb-4 border-b border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-orange-600" />
                    Practical Assignments Tracker (7 Hands-On Tasks)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Complete these industry-style independent exercises to reinforce your production Python engineering capabilities.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "Assignment 1 — Build a CSV Data Cleaner",
                      desc: "Read messy customer CSV records, detect missing emails, deduplicate customer IDs, standardize city casing ('pune' -> 'Pune'), validate age boundaries, and export clean_customers.csv and rejected_customers.csv."
                    },
                    {
                      id: 2,
                      title: "Assignment 2 — Build an API Data Extractor",
                      desc: "Query JSONPlaceholder (/users), handle HTTP timeouts and error codes with Requests, validate mandatory fields, and export JSON and CSV payloads with logging."
                    },
                    {
                      id: 3,
                      title: "Assignment 3 — Database Ingestion System",
                      desc: "Build an ingestion script loading order records into SQLite and PostgreSQL using SQLAlchemy. Implement batch executemany, parameterized SQL, and ON CONFLICT idempotent upserts."
                    },
                    {
                      id: 4,
                      title: "Assignment 4 — Large Dataset Processing (1 Million Rows)",
                      desc: "Generate 1,000,000 synthetic orders. Benchmark execution time and peak memory footprint between eager full CSV loading, chunked batching, and lazy streaming generators."
                    },
                    {
                      id: 5,
                      title: "Assignment 5 — OOP Data Pipeline Architecture",
                      desc: "Create an object-oriented pipeline with BaseExtractor, CSVExtractor, JSONExtractor, DataValidator, Transformer, DatabaseLoader, and PipelineMonitor using abc.ABC abstraction."
                    },
                    {
                      id: 6,
                      title: "Assignment 6 — Automated Testing with Pytest",
                      desc: "Write unit and parameterized tests verifying data cleaning rules, exception raising for negative amounts, null handling, and mock database insertions."
                    },
                    {
                      id: 7,
                      title: "Assignment 7 — Mini Production Project",
                      desc: "Build an end-to-end ingestion system: API -> Requests -> Validation -> Polars DataFrame -> PostgreSQL -> Revenue Summary Report with .env configuration and logging."
                    }
                  ].map(a => (
                    <div
                      key={a.id}
                      onClick={() => toggleAssignment(a.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                        completedAssignments[a.id]
                          ? "bg-emerald-50/50 border-emerald-200"
                          : "bg-stone-50 border-stone-200 hover:bg-stone-100/70"
                      }`}
                    >
                      <button className="mt-0.5">
                        {completedAssignments[a.id] ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Square className="w-5 h-5 text-stone-400" />
                        )}
                      </button>
                      <div className="flex-grow">
                        <h4 className="font-bold text-xs sm:text-sm text-stone-900">{a.title}</h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 6: INTERVIEW QUESTIONS VAULT */}
            {activeWorkbench === "interview" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                      Data Engineering Technical Interview Vault (35+ Q&As)
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Curated questions covering Python fundamentals, iterators, databases, Polars, and production architecture.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {["all", "fundamentals", "advanced", "files", "api_db", "pandas_testing", "production"].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setInterviewFilter(cat)}
                        className={`px-2.5 py-1 rounded-lg font-bold capitalize transition-all ${
                          interviewFilter === cat
                            ? "bg-orange-600 text-white"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {cat === "api_db" ? "APIs & DB" : cat === "pandas_testing" ? "Pandas & Testing" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredQuestions.map(q => {
                    const isExpanded = expandedInterviewQuestion === q.id;
                    return (
                      <div
                        key={q.id}
                        className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50"
                      >
                        <button
                          onClick={() => setExpandedInterviewQuestion(isExpanded ? null : q.id)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-stone-100/70 transition-colors"
                        >
                          <span className="font-bold text-xs sm:text-sm text-stone-900">
                            {q.id}. {q.question}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-stone-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-stone-600 flex-shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-white">
                            <p className="mt-2">{q.answer}</p>
                          </div>
                        )}
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
