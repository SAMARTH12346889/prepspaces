import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Database,
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
  Copy,
  Check,
  Table,
  Sliders,
  Boxes,
  Clock,
  Zap,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringModelingSections from "./DataEngineeringModelingSections";

export default function DataEngineeringModeling() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("erd"); // 'erd' | 'normalization' | 'star_snowflake' | 'scd' | 'event_stream' | 'quiz'

  // Workbench 1: Interactive ERD & Schema Visualizer
  const [selectedEntity, setSelectedEntity] = useState("orders");
  const entityData = {
    customers: {
      title: "Customers (OLTP Entity)",
      pk: "customer_id (BIGINT)",
      fks: [],
      columns: [
        { name: "customer_id", type: "BIGINT", constraint: "PRIMARY KEY", desc: "Unique natural/surrogate customer identifier" },
        { name: "customer_name", type: "VARCHAR(100)", constraint: "NOT NULL", desc: "Full customer legal name" },
        { name: "email", type: "VARCHAR(255)", constraint: "UNIQUE", desc: "Contact email address" },
        { name: "city", type: "VARCHAR(100)", constraint: "NULLABLE", desc: "Current primary residence location" },
      ],
      cardinality: "1 Customer → Many Orders (1:N)",
    },
    orders: {
      title: "Orders (OLTP Entity)",
      pk: "order_id (BIGINT)",
      fks: ["customer_id → customers(customer_id)"],
      columns: [
        { name: "order_id", type: "BIGINT", constraint: "PRIMARY KEY", desc: "Unique order transaction identifier" },
        { name: "customer_id", type: "BIGINT", constraint: "FOREIGN KEY NOT NULL", desc: "References customers(customer_id)" },
        { name: "order_date", type: "TIMESTAMP", constraint: "NOT NULL", desc: "UTC timestamp when order was initiated" },
        { name: "status", type: "VARCHAR(30)", constraint: "DEFAULT 'PENDING'", desc: "State machine: PENDING, SHIPPED, DELIVERED" },
      ],
      cardinality: "Many Orders → 1 Customer (N:1) | 1 Order → Many Order Items (1:N)",
    },
    order_items: {
      title: "Order Items (Junction / Bridge Entity)",
      pk: "order_item_id (BIGINT)",
      fks: ["order_id → orders(order_id)", "product_id → products(product_id)"],
      columns: [
        { name: "order_item_id", type: "BIGINT", constraint: "PRIMARY KEY", desc: "Line item identifier" },
        { name: "order_id", type: "BIGINT", constraint: "FOREIGN KEY NOT NULL", desc: "References orders(order_id)" },
        { name: "product_id", type: "BIGINT", constraint: "FOREIGN KEY NOT NULL", desc: "References products(product_id)" },
        { name: "quantity", type: "INT", constraint: "CHECK (quantity > 0)", desc: "Units purchased in this line" },
        { name: "unit_price", type: "DECIMAL(12,2)", constraint: "NOT NULL", desc: "Snapshot price at time of order" },
      ],
      cardinality: "Connects Orders (M) to Products (N) via Bridge",
    },
    products: {
      title: "Products (Catalog Entity)",
      pk: "product_id (BIGINT)",
      fks: [],
      columns: [
        { name: "product_id", type: "BIGINT", constraint: "PRIMARY KEY", desc: "Unique product SKU identifier" },
        { name: "product_name", type: "VARCHAR(150)", constraint: "NOT NULL", desc: "Commercial name of item" },
        { name: "category", type: "VARCHAR(100)", constraint: "NOT NULL", desc: "Catalog category (e.g. Electronics)" },
        { name: "price", type: "DECIMAL(12,2)", constraint: "CHECK (price >= 0)", desc: "Standard catalog listing price" },
      ],
      cardinality: "1 Product → Many Order Items (1:N)",
    },
  };

  // Workbench 2: Interactive Normalization Step-Through
  const [normStage, setNormStage] = useState(1); // 1: 1NF, 2: 2NF, 3: 3NF

  // Workbench 3: Star vs Snowflake
  const [schemaModel, setSchemaModel] = useState("star"); // 'star' | 'snowflake'

  // Workbench 4: SCD Type 2 Simulator
  const [scdVersion, setScdVersion] = useState(1); // 1: Initial in Pune, 2: Moved to Mumbai
  const scdRecords = [
    {
      customer_key: 1,
      customer_id: 101,
      name: "Rahul Sharma",
      city: "Pune",
      effective_from: "2025-01-01",
      effective_to: scdVersion === 2 ? "2026-05-31" : "NULL",
      is_current: scdVersion === 1,
    },
    ...(scdVersion === 2
      ? [
          {
            customer_key: 2,
            customer_id: 101,
            name: "Rahul Sharma",
            city: "Mumbai",
            effective_from: "2026-06-01",
            effective_to: "NULL",
            is_current: true,
          },
        ]
      : []),
  ];

  // Workbench 5: Event-Driven Lifecycle Stream
  const [eventLog, setEventLog] = useState([
    {
      event_id: "evt_1001",
      event_type: "OrderCreated",
      timestamp: "2026-11-09T10:00:00Z",
      payload: { order_id: 5001, customer_id: 101, total_amount: 65000 },
    },
  ]);
  const [orderStage, setOrderStage] = useState(0); // 0: Created, 1: Paid, 2: Shipped, 3: Delivered

  const handleNextEvent = () => {
    const nextStage = orderStage + 1;
    if (nextStage === 1) {
      setEventLog((prev) => [
        ...prev,
        {
          event_id: "evt_1002",
          event_type: "PaymentCompleted",
          timestamp: "2026-11-09T10:05:00Z",
          payload: { order_id: 5001, method: "UPI", status: "SUCCESS" },
        },
      ]);
      setOrderStage(1);
    } else if (nextStage === 2) {
      setEventLog((prev) => [
        ...prev,
        {
          event_id: "evt_1003",
          event_type: "OrderShipped",
          timestamp: "2026-11-09T14:30:00Z",
          payload: { order_id: 5001, carrier: "BlueDart", tracking: "BD99281A" },
        },
      ]);
      setOrderStage(2);
    } else if (nextStage === 3) {
      setEventLog((prev) => [
        ...prev,
        {
          event_id: "evt_1004",
          event_type: "OrderDelivered",
          timestamp: "2026-11-10T11:15:00Z",
          payload: { order_id: 5001, recipient: "Rahul Sharma", signature: "CONFIRMED" },
        },
      ]);
      setOrderStage(3);
    }
  };

  // Workbench 6: Assessment Quiz State
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the fundamental requirement of First Normal Form (1NF)?",
      options: [
        "Eliminating foreign keys",
        "Every column must contain atomic (indivisible) values with no repeating groups",
        "Creating a snowflake schema",
        "Every table must have a surrogate key",
      ],
      correct: 1,
      explanation: "1NF requires that each column contains atomic values, each cell holds a single value, and repeating groups or arrays are eliminated into separate rows.",
    },
    {
      id: 2,
      question: "2. When does a table violate Second Normal Form (2NF)?",
      options: [
        "When it has too many columns",
        "When a non-key attribute depends on only part of a composite candidate key (partial dependency)",
        "When it uses VARCHAR instead of TEXT",
        "When foreign keys allow NULL values",
      ],
      correct: 1,
      explanation: "2NF is violated when a composite key exists and a non-key attribute depends functionally on only a subset of that composite key rather than the entire key.",
    },
    {
      id: 3,
      question: "3. What characterizes a Transitive Dependency in Third Normal Form (3NF)?",
      options: [
        "A foreign key referencing another schema",
        "A non-key attribute functionally depending on another non-key attribute (X → Y → Z)",
        "An index slowing down write operations",
        "A table with multiple primary keys",
      ],
      correct: 1,
      explanation: "3NF eliminates transitive dependencies where non-key attribute A determines non-key attribute B (e.g. employee_id → department_id → department_name).",
    },
    {
      id: 4,
      question: "4. What is the primary architectural difference between a Star Schema and a Snowflake Schema?",
      options: [
        "Star schemas have no fact tables",
        "In a star schema, dimension tables are denormalized; in a snowflake schema, dimensions are normalized into hierarchies",
        "Snowflake schemas cannot store measures",
        "Star schemas only work in PostgreSQL",
      ],
      correct: 1,
      explanation: "Star schemas maintain denormalized dimensions connecting directly to a central fact table. Snowflake schemas normalize dimension hierarchies (e.g. Product → Subcategory → Category).",
    },
    {
      id: 5,
      question: "5. Why is SCD Type 2 the standard pattern for dimension history in data warehouses?",
      options: [
        "It overwrites old values to save disk space",
        "It creates a new dimension row with effective date bounds and active flags, preserving exact historical context for older transactions",
        "It deletes old records automatically",
        "It prevents all updates completely",
      ],
      correct: 1,
      explanation: "SCD Type 2 inserts a new row with effective_from, effective_to, and is_current flags, allowing historical sales to remain associated with the customer's state at the time of purchase.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) s++;
    });
    return s;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-900">
      {/* Top Universal Module Navigation Bar */}
      <ModuleNav
        currentModuleId="data-modeling"
        courseId="data-engineering"
        courseName="Data Engineering Master Course"
        trackName="Data Engineering"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Header Breadcrumb & Mode Switcher */}
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
            <span className="text-orange-600 font-semibold">Module 4 — Data Modeling</span>
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
              <Database className="w-3.5 h-3.5" />
              Interactive Workbenches (6)
            </button>
          </div>
        </div>

        {/* HERO BANNER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-orange-100 text-orange-800 border border-orange-200">
              DATA ENGINEERING MASTER COURSE &middot; MODULE 4
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-stone-100 text-stone-700 border border-stone-200">
              DATABASE ENGINEERING &middot; INTERMEDIATE TO ADVANCED
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 24 COMPLETE SECTIONS &middot; ZERO OMISSIONS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-4">
            Module 4 &mdash; Data Modeling and Database Design
          </h1>

          <p className="text-stone-600 text-base sm:text-lg max-w-4xl leading-relaxed mb-6">
            Master relational database design and analytical dimensional modeling. From conceptual, logical, and physical models,
            Crow&apos;s Foot ERDs, and 1NF/2NF/3NF/BCNF normalization to Star and Snowflake schemas, fact table grain,
            Slowly Changing Dimensions (SCD Type 1 &amp; 2), bitemporal historical tracking, event sourcing, schema evolution, and dbt warehousing.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-100 text-xs">
            <div>
              <span className="text-stone-400 block font-mono uppercase text-[10px]">Relational Design</span>
              <span className="font-bold text-stone-800">1NF, 2NF, 3NF, BCNF</span>
            </div>
            <div>
              <span className="text-stone-400 block font-mono uppercase text-[10px]">Dimensional Models</span>
              <span className="font-bold text-stone-800">Star &amp; Snowflake Schemas</span>
            </div>
            <div>
              <span className="text-stone-400 block font-mono uppercase text-[10px]">History &amp; Events</span>
              <span className="font-bold text-stone-800">SCD Type 2 &amp; Event Sourcing</span>
            </div>
            <div>
              <span className="text-stone-400 block font-mono uppercase text-[10px]">Production Lab</span>
              <span className="font-bold text-stone-800">E-Commerce Data Warehouse</span>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* TAB 1: CURRICULUM VIEW (SPECIFICATION & BLUEPRINTS) */}
        {/* =================================================================== */}
        {activeTab === "curriculum" && (
          <DataEngineeringModelingSections />
        )}

        {/* =================================================================== */}
        {/* TAB 2: INTERACTIVE WORKBENCHES VIEW */}
        {/* =================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
              <button
                onClick={() => setActiveWorkbench("erd")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "erd"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Database className="w-3.5 h-3.5" /> 1. ERD &amp; Schema Inspector
              </button>

              <button
                onClick={() => setActiveWorkbench("normalization")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "normalization"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Sliders className="w-3.5 h-3.5" /> 2. Normalization Lab (1NF&ndash;3NF)
              </button>

              <button
                onClick={() => setActiveWorkbench("star_snowflake")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "star_snowflake"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Boxes className="w-3.5 h-3.5" /> 3. Star vs Snowflake
              </button>

              <button
                onClick={() => setActiveWorkbench("scd")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "scd"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Clock className="w-3.5 h-3.5" /> 4. SCD Type 2 Simulator
              </button>

              <button
                onClick={() => setActiveWorkbench("event_stream")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "event_stream"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <Zap className="w-3.5 h-3.5" /> 5. Event Stream Lifecycle
              </button>

              <button
                onClick={() => setActiveWorkbench("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "quiz"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" /> 6. Assessment Check
              </button>
            </div>

            {/* Workbench 1: ERD & Schema Visualizer */}
            {activeWorkbench === "erd" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Interactive Schema Visualizer
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-1">
                    Relational Schema &amp; Crow&apos;s Foot Cardinality
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Inspect relational tables, primary keys, foreign key constraints, and relational cardinality.
                  </p>
                </div>

                {/* Entity Selector */}
                <div className="flex flex-wrap gap-2">
                  {Object.keys(entityData).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedEntity(key)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                        selectedEntity === key
                          ? "bg-orange-100 text-orange-900 border border-orange-300 ring-2 ring-orange-400/20"
                          : "bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      {key.replace("_", " ")}
                    </button>
                  ))}
                </div>

                {/* Table Structure */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <h3 className="font-bold text-stone-900 text-base">{entityData[selectedEntity].title}</h3>
                    <span className="text-xs font-mono font-bold text-stone-600 bg-white px-2.5 py-1 rounded-lg border border-stone-200">
                      Cardinality: {entityData[selectedEntity].cardinality}
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white">
                    <table className="w-full text-left text-xs text-stone-700">
                      <thead className="bg-stone-100/70 border-b border-stone-200 font-mono text-[11px] uppercase">
                        <tr>
                          <th className="p-3">Column Name</th>
                          <th className="p-3">Data Type</th>
                          <th className="p-3">Constraint</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-mono">
                        {entityData[selectedEntity].columns.map((col, idx) => (
                          <tr key={idx} className="hover:bg-orange-50/20">
                            <td className="p-3 font-bold text-stone-900">{col.name}</td>
                            <td className="p-3 text-orange-700">{col.type}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${col.constraint.includes("PRIMARY") ? "bg-amber-100 text-amber-900" : col.constraint.includes("FOREIGN") ? "bg-blue-100 text-blue-900" : "bg-stone-100 text-stone-700"}`}>
                                {col.constraint}
                              </span>
                            </td>
                            <td className="p-3 font-sans text-stone-600">{col.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Workbench 2: Normalization Lab */}
            {activeWorkbench === "normalization" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Normal Form Step-Through
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-1">
                    Database Normalization &amp; Anomaly Prevention
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Step through 1NF, 2NF, and 3NF to observe how insertion, update, and deletion anomalies are systematically eliminated.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { stage: 1, title: "1. 1NF (Atomicity)", desc: "Eliminate repeating groups" },
                    { stage: 2, title: "2. 2NF (Full Functional Dependency)", desc: "Eliminate partial composite key dependencies" },
                    { stage: 3, title: "3. 3NF (Transitive Dependency)", desc: "Eliminate non-key to non-key dependencies" },
                  ].map((s) => (
                    <button
                      key={s.stage}
                      onClick={() => setNormStage(s.stage)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        normStage === s.stage
                          ? "bg-orange-50 border-orange-300 ring-2 ring-orange-400/20"
                          : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      <span className="font-bold text-xs text-stone-900 block">{s.title}</span>
                      <span className="text-[11px] text-stone-500 mt-0.5 block">{s.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <h3 className="font-bold text-stone-900 text-sm">
                    {normStage === 1 && "Stage 1: First Normal Form (1NF) Violation & Resolution"}
                    {normStage === 2 && "Stage 2: Second Normal Form (2NF) Partial Key Resolution"}
                    {normStage === 3 && "Stage 3: Third Normal Form (3NF) Transitive Dependency Resolution"}
                  </h3>

                  {normStage === 1 && (
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      Before 1NF: A student enrollment row contains multiple courses in one cell (e.g. <code>courses: &quot;Java, Python, SQL&quot;</code>).
                      After 1NF: The row is unnested so each cell contains a single atomic scalar value.
                    </p>
                  )}

                  {normStage === 2 && (
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      In a composite key <code>(student_id, course_id)</code>, <code>student_name</code> depends only on <code>student_id</code>, while <code>course_name</code> depends only on <code>course_id</code>.
                      2NF decomposes this into three separate tables: <strong>Students</strong>, <strong>Courses</strong>, and <strong>Enrollments</strong>.
                    </p>
                  )}

                  {normStage === 3 && (
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      In the Employees table, <code>employee_id &rarr; department_id &rarr; department_name</code>.
                      Because <code>department_name</code> depends transitively on <code>department_id</code>, changing marketing to marketing &amp; sales requires modifying every employee.
                      3NF extracts <strong>Departments</strong> into an independent table.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Workbench 3: Star vs Snowflake */}
            {activeWorkbench === "star_snowflake" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Warehouse Architecture Comparison
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Star Schema vs. Snowflake Schema
                    </h2>
                    <p className="text-sm text-stone-600 mt-1">
                      Compare query complexity, join depth, and storage trade-offs between denormalized and normalized dimensional architectures.
                    </p>
                  </div>

                  <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200">
                    <button
                      onClick={() => setSchemaModel("star")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        schemaModel === "star" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
                      }`}
                    >
                      Star Schema
                    </button>
                    <button
                      onClick={() => setSchemaModel("snowflake")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        schemaModel === "snowflake" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
                      }`}
                    >
                      Snowflake Schema
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <h3 className="font-bold text-stone-900 text-sm">
                      {schemaModel === "star" ? "Star Schema Architecture" : "Snowflake Schema Architecture"}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {schemaModel === "star"
                        ? "Central fact_sales table directly connects to denormalized dimensions (dim_customer, dim_product, dim_date). Fast analytical queries with minimal joins."
                        : "Central fact_sales table connects to normalized dimension hierarchies (dim_product → dim_subcategory → dim_category). Zero descriptive redundancy at the cost of additional joins."}
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-800">
                      {schemaModel === "star"
                        ? "SELECT p.category, SUM(f.revenue) FROM fact_sales f JOIN dim_product p ON f.product_key = p.product_key GROUP BY p.category;"
                        : "SELECT c.category_name, SUM(f.revenue) FROM fact_sales f JOIN dim_product p ON f.product_key = p.product_key JOIN dim_subcategory sc ON p.subcat_key = sc.subcat_key JOIN dim_category c ON sc.cat_key = c.cat_key GROUP BY c.category_name;"}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                    <h3 className="font-bold text-stone-900 text-sm">Design Trade-offs</h3>
                    <div className="space-y-1.5 text-stone-700">
                      <div className="flex justify-between py-1 border-b border-stone-200">
                        <span className="font-semibold">Query Performance:</span>
                        <span className="font-mono">{schemaModel === "star" ? "Fast (1-join hop)" : "Moderate (Multi-join)"}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-stone-200">
                        <span className="font-semibold">Storage Overhead:</span>
                        <span className="font-mono">{schemaModel === "star" ? "Slightly higher (Denormalized)" : "Minimal (Zero duplication)"}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-stone-200">
                        <span className="font-semibold">BI Tool Compatibility:</span>
                        <span className="font-mono">{schemaModel === "star" ? "Optimal (PowerBI / Tableau)" : "Requires hierarchy modeling"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Workbench 4: SCD Type 2 Simulator */}
            {activeWorkbench === "scd" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Historical Dimension Simulator
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Slowly Changing Dimension (SCD Type 2)
                    </h2>
                    <p className="text-sm text-stone-600 mt-1">
                      Simulate a customer moving from Pune to Mumbai. Observe how surrogate keys preserve historical lineage.
                    </p>
                  </div>

                  <button
                    onClick={() => setScdVersion((prev) => (prev === 1 ? 2 : 1))}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs hover:bg-orange-700 cursor-pointer shadow-xs"
                  >
                    <RefreshCw size={12} />
                    <span>{scdVersion === 1 ? "Trigger Move to Mumbai" : "Reset to Initial State"}</span>
                  </button>
                </div>

                <div className="overflow-x-auto border border-stone-200 rounded-2xl bg-white">
                  <table className="w-full text-left text-xs text-stone-700">
                    <thead className="bg-stone-100/70 border-b border-stone-200 font-mono text-[11px] uppercase text-stone-600">
                      <tr>
                        <th className="p-3">Surrogate Key (PK)</th>
                        <th className="p-3">Natural ID</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">City</th>
                        <th className="p-3">Effective From</th>
                        <th className="p-3">Effective To</th>
                        <th className="p-3">Is Current?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono">
                      {scdRecords.map((r) => (
                        <tr key={r.customer_key} className={r.is_current ? "bg-emerald-50/30" : "bg-stone-50/50 text-stone-500"}>
                          <td className="p-3 font-bold text-stone-900">#{r.customer_key}</td>
                          <td className="p-3">#{r.customer_id}</td>
                          <td className="p-3 font-sans text-stone-800">{r.name}</td>
                          <td className="p-3 font-bold text-orange-700">{r.city}</td>
                          <td className="p-3">{r.effective_from}</td>
                          <td className="p-3">{r.effective_to}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${r.is_current ? "bg-emerald-100 text-emerald-800" : "bg-stone-200 text-stone-600"}`}>
                              {r.is_current ? "TRUE (ACTIVE)" : "FALSE (EXPIRED)"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Workbench 5: Event-Driven Lifecycle Stream */}
            {activeWorkbench === "event_stream" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Streaming Event Emitter &middot; Kafka Pipeline
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Event-Based Data Modeling Stream
                    </h2>
                    <p className="text-sm text-stone-600 mt-1">
                      Emit state transition events across an e-commerce order lifecycle. Observe JSON payloads and timestamps.
                    </p>
                  </div>

                  <button
                    disabled={orderStage >= 3}
                    onClick={handleNextEvent}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs cursor-pointer shadow-xs ${
                      orderStage >= 3 ? "bg-stone-200 text-stone-400 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-orange-700"
                    }`}
                  >
                    <span>{orderStage === 0 ? "Emit PaymentCompleted" : orderStage === 1 ? "Emit OrderShipped" : orderStage === 2 ? "Emit OrderDelivered" : "Lifecycle Complete"}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                <div className="space-y-3">
                  {eventLog.map((ev, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs border border-stone-800 space-y-2">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                        <span className="text-orange-400 font-bold">{ev.event_type}</span>
                        <span className="text-stone-400 text-[10px]">{ev.timestamp}</span>
                      </div>
                      <pre className="text-stone-300 overflow-x-auto text-[11px]">
                        <code>{JSON.stringify(ev, null, 2)}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workbench 6: Knowledge Assessment */}
            {activeWorkbench === "quiz" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Module Assessment &middot; Self-Check
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Data Modeling Knowledge Check
                    </h2>
                    <p className="text-sm text-stone-600 mt-1">
                      Test your understanding of normalization, star schemas, SCD Type 2, and event-based architectures.
                    </p>
                  </div>

                  <div className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                    Answered: {Object.keys(selectedAnswers).length} / {quizQuestions.length}
                  </div>
                </div>

                <div className="space-y-4">
                  {quizQuestions.map((q) => {
                    const isSelected = selectedAnswers[q.id] !== undefined;
                    const selectedIdx = selectedAnswers[q.id];
                    const isCorrect = selectedIdx === q.correct;

                    return (
                      <div key={q.id} className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-3">
                        <h3 className="font-bold text-sm sm:text-base text-stone-900">{q.question}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, oIdx) => {
                            let btnStyle = "bg-white text-stone-700 border-stone-200 hover:bg-stone-100";
                            if (showResults) {
                              if (oIdx === q.correct) btnStyle = "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold";
                              else if (selectedIdx === oIdx) btnStyle = "bg-red-100 border-red-300 text-red-900";
                            } else if (selectedIdx === oIdx) {
                              btnStyle = "bg-orange-100 border-orange-400 text-orange-900 font-bold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectOption(q.id, oIdx)}
                                className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs leading-relaxed ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-red-50 text-red-900 border border-red-200"}`}>
                            <strong>{isCorrect ? "Correct!" : "Incorrect."}</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setShowResults(!showResults)}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs bg-orange-600 hover:bg-orange-700 text-white shadow-xs cursor-pointer"
                  >
                    {showResults ? "Hide Explanations" : "Submit Assessment"}
                  </button>

                  {showResults && (
                    <div className="text-sm font-bold text-stone-800">
                      Your Score: <span className="text-orange-600">{score}</span> / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
