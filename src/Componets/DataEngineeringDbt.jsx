// projectx/src/Componets/DataEngineeringDbt.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Workflow,
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
  ShieldCheck,
  RotateCcw,
  Globe,
  Key,
  Binary,
  FileSpreadsheet,
  Code2,
  Radio,
  Send,
  SlidersHorizontal,
  RotateCw,
  Split,
  Merge,
  Calendar,
  Database
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringDbtSections from "./DataEngineeringDbtSections";

export default function DataEngineeringDbt() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("lineage_dag");
  // 'lineage_dag' | 'materialization_sim' | 'snapshot_scd' | 'testing_engine' | 'jinja_macros' | 'slim_ci_quiz'

  // =========================================================================
  // WORKBENCH 1: dbt Model DAG & Lineage Visualizer (ref & source)
  // =========================================================================
  const [selectedModelId, setSelectedModelId] = useState("fct_sales");
  const [selectionSyntax, setSelectionSyntax] = useState("all"); // 'all' | 'stg_orders+' | '+fct_sales' | '+int_order_details+'

  const dbtModels = useMemo(() => [
    {
      id: "src_orders",
      label: "source('ecommerce', 'orders')",
      type: "source",
      layer: "Raw Source",
      materialization: "external table",
      upstream: [],
      rawSql: "-- External table in warehouse\nSELECT order_id, customer_id, product_id, amount, status FROM raw.orders",
      compiledSql: "SELECT order_id, customer_id, product_id, amount, status FROM ecommerce.raw.orders"
    },
    {
      id: "src_customers",
      label: "source('ecommerce', 'customers')",
      type: "source",
      layer: "Raw Source",
      materialization: "external table",
      upstream: [],
      rawSql: "-- External table in warehouse\nSELECT customer_id, customer_name, country FROM raw.customers",
      compiledSql: "SELECT customer_id, customer_name, country FROM ecommerce.raw.customers"
    },
    {
      id: "src_products",
      label: "source('ecommerce', 'products')",
      type: "source",
      layer: "Raw Source",
      materialization: "external table",
      upstream: [],
      rawSql: "-- External table in warehouse\nSELECT product_id, product_name, category FROM raw.products",
      compiledSql: "SELECT product_id, product_name, category FROM ecommerce.raw.products"
    },
    {
      id: "stg_orders",
      label: "stg_orders",
      type: "model",
      layer: "Staging",
      materialization: "view",
      upstream: ["src_orders"],
      rawSql: `{{ config(materialized='view') }}\nSELECT\n    order_id,\n    customer_id,\n    product_id,\n    CAST(amount AS DECIMAL(18,2)) AS amount,\n    LOWER(TRIM(status)) AS order_status\nFROM {{ source('ecommerce', 'orders') }}\nWHERE order_id IS NOT NULL`,
      compiledSql: `CREATE OR REPLACE VIEW analytics.staging.stg_orders AS\nSELECT\n    order_id,\n    customer_id,\n    product_id,\n    CAST(amount AS DECIMAL(18,2)) AS amount,\n    LOWER(TRIM(status)) AS order_status\nFROM ecommerce.raw.orders\nWHERE order_id IS NOT NULL;`
    },
    {
      id: "stg_customers",
      label: "stg_customers",
      type: "model",
      layer: "Staging",
      materialization: "view",
      upstream: ["src_customers"],
      rawSql: `{{ config(materialized='view') }}\nSELECT\n    customer_id,\n    TRIM(customer_name) AS customer_name,\n    UPPER(country) AS country\nFROM {{ source('ecommerce', 'customers') }}\nWHERE customer_id IS NOT NULL`,
      compiledSql: `CREATE OR REPLACE VIEW analytics.staging.stg_customers AS\nSELECT\n    customer_id,\n    TRIM(customer_name) AS customer_name,\n    UPPER(country) AS country\nFROM ecommerce.raw.customers\nWHERE customer_id IS NOT NULL;`
    },
    {
      id: "stg_products",
      label: "stg_products",
      type: "model",
      layer: "Staging",
      materialization: "view",
      upstream: ["src_products"],
      rawSql: `{{ config(materialized='view') }}\nSELECT\n    product_id,\n    TRIM(product_name) AS product_name,\n    TRIM(category) AS category\nFROM {{ source('ecommerce', 'products') }}\nWHERE product_id IS NOT NULL`,
      compiledSql: `CREATE OR REPLACE VIEW analytics.staging.stg_products AS\nSELECT\n    product_id,\n    TRIM(product_name) AS product_name,\n    TRIM(category) AS category\nFROM ecommerce.raw.products\nWHERE product_id IS NOT NULL;`
    },
    {
      id: "int_order_details",
      label: "int_order_details",
      type: "model",
      layer: "Intermediate",
      materialization: "ephemeral",
      upstream: ["stg_orders", "stg_customers", "stg_products"],
      rawSql: `{{ config(materialized='ephemeral') }}\nSELECT\n    orders.order_id,\n    orders.customer_id,\n    customers.customer_name,\n    customers.country,\n    orders.product_id,\n    products.product_name,\n    products.category,\n    orders.amount,\n    orders.order_status\nFROM {{ ref('stg_orders') }} AS orders\nLEFT JOIN {{ ref('stg_customers') }} AS customers ON orders.customer_id = customers.customer_id\nLEFT JOIN {{ ref('stg_products') }} AS products ON orders.product_id = products.product_id`,
      compiledSql: `-- Ephemeral CTE injected into referencing queries:\nWITH __dbt__cte__int_order_details AS (\n    SELECT orders.order_id, orders.customer_id, customers.customer_name, customers.country, orders.product_id, products.product_name, products.category, orders.amount, orders.order_status\n    FROM analytics.staging.stg_orders AS orders\n    LEFT JOIN analytics.staging.stg_customers AS customers ON orders.customer_id = customers.customer_id\n    LEFT JOIN analytics.staging.stg_products AS products ON orders.product_id = products.product_id\n)`
    },
    {
      id: "fct_sales",
      label: "fct_sales",
      type: "model",
      layer: "Marts",
      materialization: "table",
      upstream: ["int_order_details"],
      rawSql: `{{ config(materialized='table') }}\nSELECT\n    order_id,\n    customer_id,\n    product_id,\n    country,\n    category,\n    amount AS sales_amount\nFROM {{ ref('int_order_details') }}\nWHERE order_status = 'completed'`,
      compiledSql: `CREATE TABLE analytics.marts.fct_sales AS\nWITH __dbt__cte__int_order_details AS ( ... )\nSELECT\n    order_id,\n    customer_id,\n    product_id,\n    country,\n    category,\n    amount AS sales_amount\nFROM __dbt__cte__int_order_details\nWHERE order_status = 'completed';`
    },
    {
      id: "dim_customers",
      label: "dim_customers",
      type: "model",
      layer: "Marts",
      materialization: "table",
      upstream: ["stg_customers"],
      rawSql: `{{ config(materialized='table') }}\nSELECT DISTINCT\n    customer_id,\n    customer_name,\n    country\nFROM {{ ref('stg_customers') }}`,
      compiledSql: `CREATE TABLE analytics.marts.dim_customers AS\nSELECT DISTINCT\n    customer_id,\n    customer_name,\n    country\nFROM analytics.staging.stg_customers;`
    },
    {
      id: "customer_metrics",
      label: "customer_metrics",
      type: "model",
      layer: "Marts",
      materialization: "table",
      upstream: ["fct_sales"],
      rawSql: `SELECT\n    customer_id,\n    COUNT(order_id) AS total_orders,\n    SUM(sales_amount) AS lifetime_revenue,\n    AVG(sales_amount) AS average_order_value\nFROM {{ ref('fct_sales') }}\nGROUP BY customer_id`,
      compiledSql: `CREATE TABLE analytics.marts.customer_metrics AS\nSELECT\n    customer_id,\n    COUNT(order_id) AS total_orders,\n    SUM(sales_amount) AS lifetime_revenue,\n    AVG(sales_amount) AS average_order_value\nFROM analytics.marts.fct_sales\nGROUP BY customer_id;`
    }
  ], []);

  // Determine active highlights based on selectionSyntax
  const activeNodes = useMemo(() => {
    const active = new Set();
    if (selectionSyntax === "all") {
      dbtModels.forEach(m => active.add(m.id));
    } else if (selectionSyntax === "stg_orders+") {
      // stg_orders and downstream: int_order_details, fct_sales, customer_metrics
      active.add("stg_orders");
      active.add("int_order_details");
      active.add("fct_sales");
      active.add("customer_metrics");
    } else if (selectionSyntax === "+fct_sales") {
      // fct_sales and upstream: int_order_details, stg_orders, stg_customers, stg_products, sources
      active.add("src_orders");
      active.add("src_customers");
      active.add("src_products");
      active.add("stg_orders");
      active.add("stg_customers");
      active.add("stg_products");
      active.add("int_order_details");
      active.add("fct_sales");
    } else if (selectionSyntax === "+int_order_details+") {
      active.add("src_orders");
      active.add("src_customers");
      active.add("src_products");
      active.add("stg_orders");
      active.add("stg_customers");
      active.add("stg_products");
      active.add("int_order_details");
      active.add("fct_sales");
      active.add("customer_metrics");
    }
    return active;
  }, [selectionSyntax, dbtModels]);

  // =========================================================================
  // WORKBENCH 2: Materialization Comparator & Incremental Strategy Simulator
  // =========================================================================
  const [selectedMatType, setSelectedMatType] = useState("incremental");
  const [incomingBatchSize, setIncomingBatchSize] = useState(250000); // 250k rows
  const [useLookbackWindow, setUseLookbackWindow] = useState(true);
  const [isFullRefresh, setIsFullRefresh] = useState(false);
  const [incrementalStrategy, setIncrementalStrategy] = useState("merge"); // 'merge' | 'delete+insert' | 'append'

  const materializationDetails = {
    view: {
      title: "View Materialization",
      persistence: "Database SQL View (zero physical rows copied)",
      queryPerf: "Recalculated on every query read (can be slow for complex aggregations)",
      storageCost: "Zero incremental warehouse storage",
      bestFor: "Staging models, column renaming, type casting, basic filtering"
    },
    table: {
      title: "Table Materialization",
      persistence: "Full physical table recreated from scratch on each run",
      queryPerf: "Fast for BI queries (precomputed analytical results)",
      storageCost: "Full dataset storage cost",
      bestFor: "Fact & dimension marts queried repeatedly by BI dashboards"
    },
    incremental: {
      title: "Incremental Materialization",
      persistence: "Physical table created once; subsequent runs insert/update only new or modified rows",
      queryPerf: "Fast BI reads + low warehouse transformation runtime",
      storageCost: "Standard physical table storage",
      bestFor: "High-volume transactional event tables (orders, logs, clickstreams)"
    },
    ephemeral: {
      title: "Ephemeral Materialization",
      persistence: "No relation created in warehouse; interpolated as CTE into referencing queries",
      queryPerf: "Depends on final merged query; keeps warehouse schema clean",
      storageCost: "Zero storage",
      bestFor: "Lightweight, reusable intermediate transformation logic"
    },
    materialized_view: {
      title: "Materialized View",
      persistence: "Database-managed materialized view with platform-native refresh",
      queryPerf: "Fast precomputed query reads with automatic freshness maintenance",
      storageCost: "Physical storage managed by warehouse",
      bestFor: "Precomputed analytical summaries on supported cloud platforms"
    }
  };

  // =========================================================================
  // WORKBENCH 3: SCD Type 2 Snapshot Machine
  // =========================================================================
  const [snapshotStrategy, setSnapshotStrategy] = useState("timestamp"); // 'timestamp' | 'check'
  const [selectedCalendarDate, setSelectedCalendarDate] = useState("2026-01-20");

  const customerHistoryRecords = [
    {
      scd_id: "scd-c001-v1",
      customer_id: "C001",
      name: "Amit Sharma",
      city: "Mumbai",
      valid_from: "2026-01-01",
      valid_to: "2026-01-15",
      is_current: false
    },
    {
      scd_id: "scd-c001-v2",
      customer_id: "C001",
      name: "Amit Sharma",
      city: "Pune",
      valid_from: "2026-01-15",
      valid_to: "NULL (Current)",
      is_current: true
    },
    {
      scd_id: "scd-c002-v1",
      customer_id: "C002",
      name: "Neha Patel",
      city: "Bengaluru",
      valid_from: "2026-01-05",
      valid_to: "NULL (Current)",
      is_current: true
    }
  ];

  const historicalActiveCity = useMemo(() => {
    // Check where C001 lived on selectedCalendarDate
    if (selectedCalendarDate < "2026-01-01") return "Not registered yet";
    if (selectedCalendarDate < "2026-01-15") return "Mumbai (Record v1 active)";
    return "Pune (Record v2 active)";
  }, [selectedCalendarDate]);

  // =========================================================================
  // WORKBENCH 4: Data Testing & Quality Assertion Engine
  // =========================================================================
  const [corruptDataInjected, setCorruptDataInjected] = useState(false);
  const [testExecutionLog, setTestExecutionLog] = useState([]);

  const testDefinitions = [
    {
      name: "unique (order_id)",
      type: "Generic Test",
      target: "stg_orders.order_id",
      rule: "SELECT order_id, count(*) FROM stg_orders GROUP BY 1 HAVING count(*) > 1",
      status: corruptDataInjected ? "FAILED" : "PASSED",
      failures: corruptDataInjected ? 2 : 0,
      severity: "error"
    },
    {
      name: "not_null (customer_id)",
      type: "Generic Test",
      target: "stg_orders.customer_id",
      rule: "SELECT * FROM stg_orders WHERE customer_id IS NULL",
      status: "PASSED",
      failures: 0,
      severity: "error"
    },
    {
      name: "accepted_values (order_status)",
      type: "Generic Test",
      target: "stg_orders.order_status",
      rule: "SELECT * FROM stg_orders WHERE order_status NOT IN ('completed', 'pending', 'cancelled', 'returned')",
      status: "PASSED",
      failures: 0,
      severity: "warn"
    },
    {
      name: "relationships (customer_id -> dim_customers)",
      type: "Generic Test",
      target: "fct_sales.customer_id",
      rule: "SELECT customer_id FROM fct_sales WHERE customer_id NOT IN (SELECT customer_id FROM dim_customers)",
      status: "PASSED",
      failures: 0,
      severity: "error"
    },
    {
      name: "assert_positive_revenue (Singular Test)",
      type: "Singular Test",
      target: "fct_sales.sales_amount",
      rule: "SELECT * FROM fct_sales WHERE sales_amount < 0",
      status: "PASSED",
      failures: 0,
      severity: "error"
    }
  ];

  const handleRunTests = () => {
    if (corruptDataInjected) {
      setTestExecutionLog([
        "[19:20:01] Running 5 data tests against target schema 'analytics'...",
        "[19:20:02] PASS: not_null_stg_orders_customer_id (0 violations)",
        "[19:20:02] PASS: accepted_values_stg_orders_order_status (0 violations)",
        "[19:20:03] PASS: relationships_fct_sales_customer_id__dim_customers (0 violations)",
        "[19:20:03] PASS: assert_positive_revenue (0 violations)",
        "[19:20:04] FAIL: unique_stg_orders_order_id (Found 2 duplicate rows with order_id=101)!",
        "[19:20:04] ERROR: 1 of 5 tests failed. dbt build halted with non-zero exit code 1."
      ]);
    } else {
      setTestExecutionLog([
        "[19:20:01] Running 5 data tests against target schema 'analytics'...",
        "[19:20:02] PASS: unique_stg_orders_order_id (0 violations)",
        "[19:20:02] PASS: not_null_stg_orders_customer_id (0 violations)",
        "[19:20:03] PASS: accepted_values_stg_orders_order_status (0 violations)",
        "[19:20:03] PASS: relationships_fct_sales_customer_id__dim_customers (0 violations)",
        "[19:20:04] PASS: assert_positive_revenue (0 violations)",
        "[19:20:04] SUCCESS: 5 of 5 tests passed in 2.84s! Target models validated."
      ]);
    }
  };

  // =========================================================================
  // WORKBENCH 5: Jinja Templating & Macro Studio
  // =========================================================================
  const [selectedMethods, setSelectedMethods] = useState(["card", "upi", "cash"]);
  const paymentMethodsCatalog = ["card", "upi", "cash", "netbanking", "wallet"];

  const toggleMethod = (method) => {
    if (selectedMethods.includes(method)) {
      if (selectedMethods.length > 1) {
        setSelectedMethods(selectedMethods.filter(m => m !== method));
      }
    } else {
      setSelectedMethods([...selectedMethods, method]);
    }
  };

  const compiledPivotSql = useMemo(() => {
    let sql = "SELECT\n    customer_id,\n";
    selectedMethods.forEach((m, idx) => {
      const isLast = idx === selectedMethods.length - 1;
      sql += `    SUM(CASE WHEN payment_method = '${m}' THEN amount ELSE 0 END) AS ${m}_revenue${isLast ? "" : ","}\n`;
    });
    sql += "FROM payments\nGROUP BY customer_id;";
    return sql;
  }, [selectedMethods]);

  // =========================================================================
  // WORKBENCH 6: Slim CI / CD & 15-Question Quiz
  // =========================================================================
  const [ciStep, setCiStep] = useState(1); // 1: PR opened, 2: State Comparison, 3: Deferral Execution, 4: Merged

  // 15 Comprehensive Assessment Questions
  const quizQuestions = [
    {
      id: 1,
      q: "1. What is the primary objective of Analytics Engineering and dbt in the modern data stack?",
      options: [
        "To replace transactional operational databases like PostgreSQL",
        "To transform, model, test, and document raw warehouse data into clean, business-ready analytical datasets using modular SQL and software engineering best practices",
        "To ingest binary log events directly from Apache Kafka",
        "To build machine learning neural networks in Python"
      ],
      correct: 1,
      expl: "Analytics Engineering bridges data engineering and data analytics by using dbt to transform already-loaded data in the warehouse into reliable, tested, and documented business datasets."
    },
    {
      id: 2,
      q: "2. How does dbt execute transformations against a data warehouse?",
      options: [
        "It pulls all data to the local machine, transforms it in Python memory, and re-uploads it",
        "It compiles Jinja-templated SQL files into platform-specific SQL queries and sends them to the connected warehouse (Snowflake, BigQuery, PostgreSQL) to execute in-place",
        "It translates SQL models into C++ shared libraries",
        "It uses MapReduce on a private Hadoop cluster"
      ],
      correct: 1,
      expl: "dbt does not store data or process compute itself; it compiles SQL/Jinja and pushes execution directly down to the target data platform via adapters."
    },
    {
      id: 3,
      q: "3. What is the difference between source() and ref() in a dbt model?",
      options: [
        "source() references raw tables loaded outside dbt, while ref() references other models within the dbt project and automatically builds the dependency graph",
        "source() is for views, while ref() is for physical tables",
        "source() runs only in production, while ref() runs in development",
        "They are identical aliases"
      ],
      correct: 0,
      expl: "source() declares external raw ingestion tables and enables freshness testing; ref() links dbt models together, enabling automatic DAG lineage and parallel execution."
    },
    {
      id: 4,
      q: "4. What happens when a dbt model is configured with materialized='view'?",
      options: [
        "dbt creates a physical table in storage with all rows copied",
        "dbt creates or replaces a SQL view definition in the warehouse, requiring zero extra storage but executing the underlying query on demand",
        "dbt exports the query results as a CSV seed file",
        "dbt stores the table in an in-memory Redis cache"
      ],
      correct: 1,
      expl: "Views store only the SQL query definition in the database metadata; rows are evaluated dynamically when queried, minimizing storage at the cost of compute on read."
    },
    {
      id: 5,
      q: "5. Why is an incremental model (materialized='incremental') useful for large transaction datasets?",
      options: [
        "It compresses data using gzip",
        "It processes only new or modified rows since the last execution rather than rebuilding hundreds of millions of historical rows every run",
        "It disables data testing to run faster",
        "It converts SQL queries into Apache Spark jobs"
      ],
      correct: 1,
      expl: "Incremental models use is_incremental() filters (e.g. updated_at > max(updated_at)) and unique keys to insert/update only changed records, saving massive warehouse compute."
    },
    {
      id: 6,
      q: "6. What is the purpose of the unique_key configuration in an incremental model?",
      options: [
        "It creates a unique index on the column in PostgreSQL",
        "It tells dbt which column(s) to use for matching and updating existing records (e.g. in a MERGE statement) to prevent duplicate rows on re-execution",
        "It encrypts the column using SHA-256",
        "It deletes all NULL values from the table"
      ],
      correct: 1,
      expl: "unique_key tells update-based strategies (like MERGE or delete+insert) how to match incoming records against existing warehouse rows to ensure idempotency."
    },
    {
      id: 7,
      q: "7. What are the four built-in generic data tests provided by dbt Core?",
      options: [
        "sum, avg, min, max",
        "unique, not_null, accepted_values, relationships",
        "is_positive, is_negative, is_zero, is_null",
        "select, insert, update, delete"
      ],
      correct: 1,
      expl: "dbt Core comes with four foundational generic assertions: unique (no duplicates), not_null (no nulls), accepted_values (enumerated domain list), and relationships (referential integrity)."
    },
    {
      id: 8,
      q: "8. When does a dbt data test pass?",
      options: [
        "When the test query returns more than 100 rows",
        "When the test query returns exactly 0 rows (zero failing records)",
        "When the database administrator approves it",
        "When the execution time is under 1 second"
      ],
      correct: 1,
      expl: "dbt tests are written as assertions that seek failing records; returning 0 rows indicates zero rule violations, so the test passes."
    },
    {
      id: 9,
      q: "9. What is the difference between a generic test and a singular test in dbt?",
      options: [
        "Generic tests are defined once and parameterized in YAML across multiple models/columns; singular tests are standalone SQL queries asserting a specific business rule",
        "Generic tests are for tables; singular tests are for views",
        "Generic tests can only test strings; singular tests can test numbers",
        "There is no difference"
      ],
      correct: 0,
      expl: "Generic tests are reusable templates applied in schema YAML; singular tests are single SQL scripts located in the tests/ directory representing custom domain logic."
    },
    {
      id: 10,
      q: "10. In dbt Snapshots, what type of dimensional tracking is implemented?",
      options: [
        "SCD Type 0 (Fixed values)",
        "SCD Type 1 (Overwriting existing values)",
        "SCD Type 2 (Tracking historical versions with validity windows dbt_valid_from and dbt_valid_to)",
        "SCD Type 3 (Previous value column)"
      ],
      correct: 2,
      expl: "dbt snapshots capture changes in source records over time, inserting new versioned rows with dbt_valid_from and dbt_valid_to timestamps (classic SCD Type 2)."
    },
    {
      id: 11,
      q: "11. What is the difference between dbt seed and an ordinary data ingestion pipeline?",
      options: [
        "Seeds are small, version-controlled CSV files (like country code lookups) committed to the Git repo, not meant for large or frequently changing transactional data",
        "Seeds can load petabyte-scale Parquet files directly from S3",
        "Seeds bypass database authentication",
        "Seeds are compiled into Python classes"
      ],
      correct: 0,
      expl: "dbt seed loads small, static reference mappings (country codes, tax bands) stored directly in the repository; high-volume ingestion belongs in external ETL/ELT pipelines."
    },
    {
      id: 12,
      q: "12. What is an Ephemeral materialization (materialized='ephemeral')?",
      options: [
        "A table that is deleted automatically after 24 hours",
        "A model that creates no physical relation in the database, but is injected as a Common Table Expression (CTE) into downstream models that reference it",
        "A real-time Kafka streaming table",
        "An unencrypted database view"
      ],
      correct: 1,
      expl: "Ephemeral models do not create tables or views in the warehouse; dbt interpolates their SQL into referencing models as CTEs, keeping the warehouse namespace clean."
    },
    {
      id: 13,
      q: "13. What is the purpose of Slim CI in a production dbt deployment?",
      options: [
        "To run dbt on micro-controllers",
        "To build and test only the models modified in a Pull Request and their downstream dependents (state:modified+), using --defer to reference production relations for unmodified upstreams",
        "To compress SQL code into minified files",
        "To skip running tests entirely"
      ],
      correct: 1,
      expl: "Slim CI dramatically reduces CI runtime and cloud warehouse cost by building only modified models and their downstream dependents, resolving unmodified parent models against production artifacts."
    },
    {
      id: 14,
      q: "14. What command in dbt executes models, seeds, snapshots, and tests in their proper DAG dependency order?",
      options: [
        "dbt run",
        "dbt compile",
        "dbt build",
        "dbt test"
      ],
      correct: 2,
      expl: "dbt build is the unified command that executes seeds, models, snapshots, and tests in dependency order across the directed acyclic graph."
    },
    {
      id: 15,
      q: "15. Why should a dbt model use a lookback window when filtering incremental updates?",
      options: [
        "To speed up query parsing",
        "To capture late-arriving records whose update timestamps fall slightly behind the last recorded max timestamp",
        "To prevent PostgreSQL from locking tables",
        "To reduce database disk space"
      ],
      correct: 1,
      expl: "A lookback window (e.g. updated_at >= max(updated_at) - INTERVAL '3 days') ensures records delayed by upstream network queues or out-of-order batches are not permanently skipped."
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correct) {
        s++;
      }
    });
    return s;
  }, [userAnswers, quizQuestions]);

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 pb-28">
      {/* Top Banner Navigation */}
      <header className="border-b border-[#e7e3da] bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-xs sm:text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            <span>Data Engineering Master Course</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono uppercase bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full font-bold">
              Module 13 · Analytics Engineering & dbt
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f2efe9] to-[#f6f4ee] border-b border-[#e7e3da] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-[#f97316] text-xs font-bold uppercase tracking-wider font-mono">
              Course Module 13
            </span>
            <span className="text-xs text-stone-500 font-mono">SQL Transformation, Data Modeling & Quality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Analytics Engineering and dbt
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-700 max-w-3xl leading-relaxed">
            Transform raw warehouse tables into reliable, tested, documented, and business-ready analytical datasets
            using dbt Core & v2, modular SQL modeling, view/table/incremental materializations, SCD Type 2 snapshots,
            data testing, Jinja macros, and automated Slim CI/CD pipelines.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-xs border border-[#e7e3da] rounded-xl p-3.5 shadow-2xs">
              <div className="text-xs font-mono text-stone-500 uppercase">Framework</div>
              <div className="text-lg font-bold text-stone-900 mt-0.5 flex items-center gap-1.5">
                <Boxes size={18} className="text-orange-500" />
                dbt Core & v2
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs border border-[#e7e3da] rounded-xl p-3.5 shadow-2xs">
              <div className="text-xs font-mono text-stone-500 uppercase">Architecture</div>
              <div className="text-lg font-bold text-stone-900 mt-0.5 flex items-center gap-1.5">
                <GitBranch size={18} className="text-orange-500" />
                Staging → Int → Marts
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs border border-[#e7e3da] rounded-xl p-3.5 shadow-2xs">
              <div className="text-xs font-mono text-stone-500 uppercase">Interactive Labs</div>
              <div className="text-lg font-bold text-stone-900 mt-0.5 flex items-center gap-1.5">
                <Zap size={18} className="text-orange-500" />
                6 Workbenches
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs border border-[#e7e3da] rounded-xl p-3.5 shadow-2xs">
              <div className="text-xs font-mono text-stone-500 uppercase">Mastery Check</div>
              <div className="text-lg font-bold text-stone-900 mt-0.5 flex items-center gap-1.5">
                <CheckCircle2 size={18} className="text-orange-500" />
                15 Quiz Questions
              </div>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 flex items-center gap-3 border-b border-stone-300">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`pb-3 px-2 text-sm sm:text-base font-bold transition-all relative ${
                activeTab === "curriculum"
                  ? "text-stone-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen size={18} />
                Specification & Blueprints (26 Sections)
              </span>
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`pb-3 px-2 text-sm sm:text-base font-bold transition-all relative ${
                activeTab === "workbench"
                  ? "text-stone-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <span className="flex items-center gap-2">
                <Zap size={18} className="text-orange-500" />
                Interactive Workbenches (6)
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        {activeTab === "curriculum" ? (
          <div>
            <DataEngineeringDbtSections />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#e7e3da]">
              {[
                { id: "lineage_dag", label: "1. Model DAG & Lineage", icon: Workflow },
                { id: "materialization_sim", label: "2. Materializations & Incremental", icon: Layers },
                { id: "snapshot_scd", label: "3. SCD Type 2 Snapshots", icon: Clock },
                { id: "testing_engine", label: "4. Data Testing & Assertions", icon: ShieldCheck },
                { id: "jinja_macros", label: "5. Jinja & Macro Studio", icon: Code2 },
                { id: "slim_ci_quiz", label: "6. Slim CI & 15 Quiz", icon: CheckCircle2 }
              ].map(w => {
                const Icon = w.icon;
                const isActive = activeWorkbench === w.id;
                return (
                  <button
                    key={w.id}
                    onClick={() => setActiveWorkbench(w.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-white text-stone-700 hover:bg-stone-100 border border-[#e7e3da]"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{w.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ============================================================= */}
            {/* WORKBENCH 1: dbt Model DAG & Lineage Visualizer */}
            {/* ============================================================= */}
            {activeWorkbench === "lineage_dag" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 1</span>
                    <span>•</span>
                    <span>Model Lineage & Selection Graph</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    dbt Model DAG & Dependency Lineage Visualizer
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Explore the complete 3-tier Analytics Engineering DAG: raw sources $\rightarrow$ staging views $\rightarrow$ intermediate ephemeral models $\rightarrow$ reporting marts. Test selection operators (`+model`, `model+`).
                  </p>
                </div>

                {/* Selection Syntax Toolbar */}
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-stone-600">Model Selector:</span>
                    {[
                      { id: "all", label: "dbt build (All Models)" },
                      { id: "stg_orders+", label: "dbt build --select stg_orders+" },
                      { id: "+fct_sales", label: "dbt build --select +fct_sales" },
                      { id: "+int_order_details+", label: "dbt build --select +int_order_details+" }
                    ].map(btn => (
                      <button
                        key={btn.id}
                        onClick={() => setSelectionSyntax(btn.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                          selectionSyntax === btn.id
                            ? "bg-stone-900 text-white shadow-xs"
                            : "bg-white border border-[#e7e3da] text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-stone-500">
                    Active Nodes: {activeNodes.size} of {dbtModels.length}
                  </span>
                </div>

                {/* Visual DAG Flow Canvas */}
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 overflow-x-auto space-y-4">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                    <span>dbt Lineage Graph · ecommerce_analytics</span>
                    <span>Dependencies resolved via ref() & source()</span>
                  </div>

                  <div className="min-w-[700px] flex items-center justify-between gap-4 text-xs font-mono pt-2">
                    {/* Sources Column */}
                    <div className="flex flex-col gap-2.5">
                      <div className="text-[10px] text-neutral-500 font-bold uppercase mb-1">Raw Sources</div>
                      {["src_orders", "src_customers", "src_products"].map(id => {
                        const m = dbtModels.find(x => x.id === id);
                        const isActive = activeNodes.has(id);
                        const isSelected = selectedModelId === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedModelId(id)}
                            className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              isActive ? "bg-neutral-900 border-neutral-700 text-neutral-200" : "bg-neutral-950/40 border-neutral-800 text-neutral-600 opacity-40"
                            }`}
                          >
                            <div className="font-bold truncate max-w-[140px]">{m.label}</div>
                            <div className="text-[10px] text-neutral-400">{m.layer}</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Staging Column */}
                    <div className="flex flex-col gap-2.5">
                      <div className="text-[10px] text-neutral-500 font-bold uppercase mb-1">Staging (Views)</div>
                      {["stg_orders", "stg_customers", "stg_products"].map(id => {
                        const m = dbtModels.find(x => x.id === id);
                        const isActive = activeNodes.has(id);
                        const isSelected = selectedModelId === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedModelId(id)}
                            className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              isActive ? "bg-blue-950/60 border-blue-800 text-blue-200" : "bg-neutral-950/40 border-neutral-800 text-neutral-600 opacity-40"
                            }`}
                          >
                            <div className="font-bold">{m.label}</div>
                            <div className="text-[10px] text-blue-300">{m.materialization}</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Intermediate Column */}
                    <div className="flex flex-col gap-2.5">
                      <div className="text-[10px] text-neutral-500 font-bold uppercase mb-1">Intermediate</div>
                      {["int_order_details"].map(id => {
                        const m = dbtModels.find(x => x.id === id);
                        const isActive = activeNodes.has(id);
                        const isSelected = selectedModelId === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedModelId(id)}
                            className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              isActive ? "bg-purple-950/60 border-purple-800 text-purple-200" : "bg-neutral-950/40 border-neutral-800 text-neutral-600 opacity-40"
                            }`}
                          >
                            <div className="font-bold">{m.label}</div>
                            <div className="text-[10px] text-purple-300">{m.materialization} (CTE)</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Marts Column */}
                    <div className="flex flex-col gap-2.5">
                      <div className="text-[10px] text-neutral-500 font-bold uppercase mb-1">Marts (Tables)</div>
                      {["fct_sales", "dim_customers"].map(id => {
                        const m = dbtModels.find(x => x.id === id);
                        const isActive = activeNodes.has(id);
                        const isSelected = selectedModelId === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedModelId(id)}
                            className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              isActive ? "bg-emerald-950/60 border-emerald-800 text-emerald-200" : "bg-neutral-950/40 border-neutral-800 text-neutral-600 opacity-40"
                            }`}
                          >
                            <div className="font-bold">{m.label}</div>
                            <div className="text-[10px] text-emerald-300">{m.materialization}</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Metrics / Reporting */}
                    <div className="flex flex-col gap-2.5">
                      <div className="text-[10px] text-neutral-500 font-bold uppercase mb-1">BI Reporting</div>
                      {["customer_metrics"].map(id => {
                        const m = dbtModels.find(x => x.id === id);
                        const isActive = activeNodes.has(id);
                        const isSelected = selectedModelId === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedModelId(id)}
                            className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              isActive ? "bg-amber-950/60 border-amber-800 text-amber-200" : "bg-neutral-950/40 border-neutral-800 text-neutral-600 opacity-40"
                            }`}
                          >
                            <div className="font-bold">{m.label}</div>
                            <div className="text-[10px] text-amber-300">{m.materialization}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Model Code Inspector */}
                {selectedModelId && (() => {
                  const m = dbtModels.find(x => x.id === selectedModelId);
                  return (
                    <div className="p-4 rounded-xl bg-stone-50 border border-[#e7e3da] space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-mono text-stone-900 text-sm">
                            Model Inspector: {m.label}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-orange-100 text-orange-800 font-bold">
                            {m.layer} · {m.materialization}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-stone-500">
                          Upstream: {m.upstream.length > 0 ? m.upstream.join(", ") : "None (Root Source)"}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 overflow-x-auto">
                          <div className="text-[10px] text-neutral-400 mb-1">DEVELOPER JINJA SQL SOURCE:</div>
                          <pre><code>{m.rawSql}</code></pre>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-900 text-emerald-300 overflow-x-auto">
                          <div className="text-[10px] text-neutral-400 mb-1">DBT COMPILED WAREHOUSE SQL:</div>
                          <pre><code>{m.compiledSql}</code></pre>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 2: Materialization Comparator & Incremental Sim */}
            {/* ============================================================= */}
            {activeWorkbench === "materialization_sim" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 2</span>
                    <span>•</span>
                    <span>Storage vs Compute Engineering</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    Materialization Strategies & Incremental Processing
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Compare the 5 dbt materializations and test incremental merge strategies, lookback windows, and `--full-refresh` operations on 500 million transaction datasets.
                  </p>
                </div>

                {/* Materialization Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  {Object.keys(materializationDetails).map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMatType(mat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                        selectedMatType === mat
                          ? "bg-orange-500 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>

                {/* Selected Materialization Profile Card */}
                {(() => {
                  const info = materializationDetails[selectedMatType];
                  return (
                    <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 text-orange-950 space-y-2 text-xs sm:text-sm">
                      <div className="font-bold text-orange-900 text-base">{info.title}</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                          <strong className="block text-stone-900">Warehouse Persistence:</strong>
                          <span className="text-stone-700">{info.persistence}</span>
                        </div>
                        <div>
                          <strong className="block text-stone-900">Query Performance:</strong>
                          <span className="text-stone-700">{info.queryPerf}</span>
                        </div>
                        <div>
                          <strong className="block text-stone-900">Storage Consumption:</strong>
                          <span className="text-stone-700">{info.storageCost}</span>
                        </div>
                        <div>
                          <strong className="block text-stone-900">Recommended Use Cases:</strong>
                          <span className="text-stone-700">{info.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Incremental Simulation Engine */}
                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e7e3da] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                      <Zap size={16} className="text-orange-500" />
                      Incremental Run Simulation (500M Row Historical Table)
                    </h3>
                    <span className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase bg-stone-200 text-stone-800">
                      Strategy: {incrementalStrategy}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Incoming Batch: {(incomingBatchSize / 1000).toLocaleString()}k records
                      </label>
                      <input
                        type="range"
                        min={50000}
                        max={1000000}
                        step={50000}
                        value={incomingBatchSize}
                        onChange={(e) => setIncomingBatchSize(Number(e.target.value))}
                        className="w-full accent-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Incremental Strategy:
                      </label>
                      <select
                        value={incrementalStrategy}
                        onChange={(e) => setIncrementalStrategy(e.target.value)}
                        className="w-full bg-white border border-[#e7e3da] rounded px-2.5 py-1.5 text-xs font-semibold text-stone-900 focus:outline-hidden"
                      >
                        <option value="merge">merge (PostgreSQL / Snowflake MERGE)</option>
                        <option value="delete+insert">delete+insert (Warehouse partition swap)</option>
                        <option value="append">append (Append-only immutable events)</option>
                      </select>
                    </div>

                    <div className="space-y-2 pt-1">
                      <label className="flex items-center gap-2 text-xs font-bold text-stone-800 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={useLookbackWindow}
                          onChange={(e) => setUseLookbackWindow(e.target.checked)}
                          className="rounded accent-orange-500"
                        />
                        <span>3-Day Lookback Window (Late Data)</span>
                      </label>

                      <label className="flex items-center gap-2 text-xs font-bold text-stone-800 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isFullRefresh}
                          onChange={(e) => setIsFullRefresh(e.target.checked)}
                          className="rounded accent-orange-500"
                        />
                        <span className="text-rose-700">--full-refresh (Rebuild 500M)</span>
                      </label>
                    </div>
                  </div>

                  {/* Code Snippet for Incremental Model */}
                  <div className="p-3.5 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                    <pre><code>{`{{ config(
    materialized='incremental',
    unique_key='order_id',
    incremental_strategy='${incrementalStrategy}'
) }}

SELECT order_id, customer_id, amount, updated_at
FROM {{ source('ecommerce', 'orders') }}
${isFullRefresh ? "-- full-refresh enabled: skipping incremental filter" : `{% if is_incremental() %}
WHERE updated_at >= (
    SELECT COALESCE(MAX(updated_at), '1900-01-01') FROM {{ this }}
)${useLookbackWindow ? " - INTERVAL '3 days'  -- lookback window for delayed records" : ""}
{% endif %}`}`}</code></pre>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-[#e7e3da] text-xs font-mono flex items-center justify-between">
                    <span>Estimated Records Processed:</span>
                    <span className="font-bold text-stone-900">
                      {isFullRefresh
                        ? "500,000,000 rows (FULL TABLE REBUILD)"
                        : `${(incomingBatchSize + (useLookbackWindow ? 45000 : 0)).toLocaleString()} rows (INCREMENTAL MERGE)`}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 3: SCD Type 2 Snapshot Machine */}
            {/* ============================================================= */}
            {activeWorkbench === "snapshot_scd" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 3</span>
                    <span>•</span>
                    <span>Slowly Changing Dimensions</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    SCD Type 2 Snapshot Machine (`dbt snapshot`)
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Trace historical customer address mutations over time using validity windows (`dbt_valid_from` to `dbt_valid_to`) without overwriting legacy dimensions.
                  </p>
                </div>

                {/* Strategy Selector */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da]">
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="font-bold text-stone-700">Snapshot Strategy:</span>
                    <button
                      onClick={() => setSnapshotStrategy("timestamp")}
                      className={`px-3 py-1 rounded-lg font-semibold ${
                        snapshotStrategy === "timestamp" ? "bg-orange-500 text-white" : "bg-white border text-stone-700"
                      }`}
                    >
                      timestamp (updated_at)
                    </button>
                    <button
                      onClick={() => setSnapshotStrategy("check")}
                      className={`px-3 py-1 rounded-lg font-semibold ${
                        snapshotStrategy === "check" ? "bg-orange-500 text-white" : "bg-white border text-stone-700"
                      }`}
                    >
                      check (check_cols: ['city', 'email'])
                    </button>
                  </div>

                  <span className="text-xs text-stone-500 font-mono">
                    Target Schema: <code className="text-stone-800">analytics.snapshots</code>
                  </span>
                </div>

                {/* Interactive Time Travel Slider */}
                <div className="p-4 rounded-xl bg-stone-50 border border-[#e7e3da] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-stone-800">
                      Simulate Querying as of Historical Date: <code className="text-orange-600 font-black">{selectedCalendarDate}</code>
                    </span>
                    <span className="font-bold text-stone-700">
                      Customer C001 (Amit) Location: <span className="text-emerald-700">{historicalActiveCity}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {["2026-01-05", "2026-01-10", "2026-01-14", "2026-01-15", "2026-01-20", "2026-01-30"].map(date => (
                      <button
                        key={date}
                        onClick={() => setSelectedCalendarDate(date)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                          selectedCalendarDate === date
                            ? "bg-stone-900 text-white"
                            : "bg-white border border-[#e7e3da] text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Snapshot Table Representation */}
                <div className="overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm font-mono">
                    <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                      <tr>
                        <th className="px-4 py-3">dbt_scd_id</th>
                        <th className="px-4 py-3">customer_id</th>
                        <th className="px-4 py-3">name</th>
                        <th className="px-4 py-3">city</th>
                        <th className="px-4 py-3">dbt_valid_from</th>
                        <th className="px-4 py-3">dbt_valid_to</th>
                        <th className="px-4 py-3">Record Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e3da]">
                      {customerHistoryRecords.map(rec => (
                        <tr
                          key={rec.scd_id}
                          className={rec.is_current ? "bg-emerald-50/40" : "bg-white"}
                        >
                          <td className="px-4 py-2.5 text-stone-500">{rec.scd_id}</td>
                          <td className="px-4 py-2.5 font-bold text-stone-900">{rec.customer_id}</td>
                          <td className="px-4 py-2.5 text-stone-700">{rec.name}</td>
                          <td className="px-4 py-2.5 font-bold text-orange-600">{rec.city}</td>
                          <td className="px-4 py-2.5 text-stone-700">{rec.valid_from}</td>
                          <td className="px-4 py-2.5 text-stone-700">{rec.valid_to}</td>
                          <td className="px-4 py-2.5">
                            {rec.is_current ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                Current (SCD2 Active)
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-200 text-stone-700">
                                Historical Expired
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 4: Data Testing & Quality Assertion Engine */}
            {/* ============================================================= */}
            {activeWorkbench === "testing_engine" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 4</span>
                    <span>•</span>
                    <span>Automated Quality Verification</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    dbt Test Engine: Generic & Singular Assertions
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Verify data assumptions with the 4 core generic tests (`unique`, `not_null`, `accepted_values`, `relationships`) and domain-specific singular assertions.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleRunTests}
                      className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Play size={14} />
                      Execute `dbt test`
                    </button>
                    <button
                      onClick={() => {
                        setCorruptDataInjected(!corruptDataInjected);
                        setTestExecutionLog([]);
                      }}
                      className={`px-3.5 py-2 rounded-xl font-bold text-xs transition-colors border ${
                        corruptDataInjected
                          ? "bg-rose-100 border-rose-300 text-rose-900"
                          : "bg-white border-stone-300 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      {corruptDataInjected ? "Corrupt Row Injected (Duplicate order_id=101)" : "Inject Corrupt Duplicate Row"}
                    </button>
                  </div>

                  <span className="text-xs font-mono text-stone-500">
                    Rule: Returning 0 rows = Test Passes
                  </span>
                </div>

                {/* Test Table Grid */}
                <div className="overflow-x-auto rounded-xl border border-[#e7e3da] bg-white">
                  <table className="w-full text-left text-xs sm:text-sm font-mono">
                    <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                      <tr>
                        <th className="px-4 py-3">Test Name</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Target Column / Model</th>
                        <th className="px-4 py-3">Severity</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e3da]">
                      {testDefinitions.map(test => (
                        <tr key={test.name} className="hover:bg-stone-50">
                          <td className="px-4 py-2.5 font-bold text-stone-900">{test.name}</td>
                          <td className="px-4 py-2.5 text-stone-600">{test.type}</td>
                          <td className="px-4 py-2.5 text-stone-800">{test.target}</td>
                          <td className="px-4 py-2.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                              test.severity === "error" ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-800"
                            }`}>
                              {test.severity}
                            </span>
                          </td>
                          <td className="px-4 py-2.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                              test.status === "PASSED" ? "bg-emerald-100 text-emerald-800" : "bg-rose-600 text-white"
                            }`}>
                              {test.status} {test.failures > 0 ? `(${test.failures} rows)` : ""}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* CLI Output Log Console */}
                {testExecutionLog.length > 0 && (
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-1 text-neutral-300">
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-2">
                      DBT CLI EXECUTION OUTPUT:
                    </div>
                    {testExecutionLog.map((line, idx) => (
                      <div
                        key={idx}
                        className={line.includes("FAIL") || line.includes("ERROR") ? "text-rose-400 font-bold" : line.includes("SUCCESS") ? "text-emerald-400 font-bold" : ""}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 5: Jinja Templating & Macro Studio */}
            {/* ============================================================= */}
            {activeWorkbench === "jinja_macros" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 5</span>
                    <span>•</span>
                    <span>Dynamic SQL Generation</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    Jinja Templating & Reusable Macro Studio
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Observe how Jinja loops (&#123;% for %&#125;) dynamically generate repetitive SQL pivot aggregations across selectable payment methods without code duplication.
                  </p>
                </div>

                {/* Payment Methods Checkboxes */}
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                  <div className="text-xs font-bold text-stone-700">
                    Select Payment Methods to Pivot:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {paymentMethodsCatalog.map(m => (
                      <button
                        key={m}
                        onClick={() => toggleMethod(m)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                          selectedMethods.includes(m)
                            ? "bg-orange-500 text-white shadow-xs"
                            : "bg-white border border-[#e7e3da] text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        {selectedMethods.includes(m) ? `✓ ${m}` : `+ ${m}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Side-by-side Template vs Compiled SQL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 overflow-x-auto space-y-2">
                    <div className="text-[10px] text-neutral-400 uppercase">
                      JINJA SOURCE CODE (`models/marts/fct_payment_pivot.sql`):
                    </div>
                    <pre><code>{`{% set payment_methods = ${JSON.stringify(selectedMethods)} %}

SELECT
    customer_id,
    {% for method in payment_methods %}
    SUM(
        CASE WHEN payment_method = '{{ method }}'
        THEN amount ELSE 0 END
    ) AS {{ method }}_revenue{% if not loop.last %},{% endif %}
    {% endfor %}
FROM payments
GROUP BY customer_id;`}</code></pre>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-300 overflow-x-auto space-y-2">
                    <div className="text-[10px] text-neutral-400 uppercase">
                      COMPILED WAREHOUSE SQL (`target/compiled/...`):
                    </div>
                    <pre><code>{compiledPivotSql}</code></pre>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 6: Slim CI / CD & 15-Question Quiz */}
            {/* ============================================================= */}
            {activeWorkbench === "slim_ci_quiz" && (
              <div className="space-y-8">
                {/* Slim CI Workflow Visualizer */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                      <span>Workbench 6</span>
                      <span>•</span>
                      <span>Production Deployment</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Slim CI / CD Pipeline Simulator
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      See how state-based model selection (`state:modified+`) and `--defer` build only modified models in isolated PR schemas (`dbt_pr_142`), saving 90% of CI runtime and warehouse costs.
                    </p>
                  </div>

                  {/* Slim CI Steps */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
                    {[
                      { step: 1, title: "1. PR Opened", desc: "Developer pushes git branch feature/revenue-fix" },
                      { step: 2, title: "2. State Comparison", desc: "dbt compares PR against prod manifest.json" },
                      { step: 3, title: "3. Slim CI Run", desc: "dbt build -s state:modified+ --defer --state prod/" },
                      { step: 4, title: "4. Merged to Main", desc: "Approved PR deployed to production schema" }
                    ].map(st => (
                      <button
                        key={st.step}
                        onClick={() => setCiStep(st.step)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          ciStep === st.step
                            ? "bg-stone-900 text-white shadow-xs"
                            : "bg-[#faf8f5] text-stone-700 hover:bg-stone-200 border-[#e7e3da]"
                        }`}
                      >
                        <div className="font-bold text-sm mb-1">{st.title}</div>
                        <div className="text-[11px] opacity-80">{st.desc}</div>
                      </button>
                    ))}
                  </div>

                  {/* Active Step Terminal Preview */}
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 font-mono text-xs space-y-2">
                    <div className="text-[10px] text-neutral-400 uppercase">
                      SLIM CI COMMAND EXECUTION:
                    </div>
                    <pre className="text-emerald-400"><code>{ciStep === 1 ? "$ git checkout -b feature/revenue-fix\n$ git commit -m 'Fix revenue calculation logic'\n$ git push origin feature/revenue-fix"
: ciStep === 2 ? "$ aws s3 cp s3://company-dbt-artifacts/production/manifest.json ./prod-state/\n$ dbt parse\nIdentified 1 modified model: fct_sales\nIdentified 1 downstream dependent: customer_metrics"
: ciStep === 3 ? "$ dbt build --select state:modified+ --defer --state ./prod-state/ --target ci\nBuilding 2 of 280 models in schema 'dbt_pr_142'...\nPASS: fct_sales (Table created in 1.4s)\nPASS: customer_metrics (Table created in 2.1s)\nUnmodified models resolved against 'analytics_prod' via deferral!"
: "$ git checkout main && git merge feature/revenue-fix\n$ dbt build --target prod\nProduction models updated. Artifacts published to metadata catalog."}</code></pre>
                  </div>
                </div>

                {/* 15 Comprehensive Assessment Quiz */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono text-orange-600 uppercase font-bold">
                        Curriculum Mastery Check
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        15-Question Analytics Engineering Assessment
                      </h2>
                    </div>
                    {showResults && (
                      <div className="px-4 py-1.5 rounded-xl bg-orange-100 border border-orange-300 text-orange-950 font-mono font-bold text-sm">
                        Score: {score} / 15 ({Math.round((score / 15) * 100)}%)
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {quizQuestions.map(q => {
                      const selected = userAnswers[q.id];
                      const isCorrect = selected === q.correct;
                      return (
                        <div
                          key={q.id}
                          className="p-5 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-3"
                        >
                          <div className="font-bold text-stone-900 text-sm sm:text-base">
                            {q.q}
                          </div>
                          <div className="space-y-2">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selected === optIdx;
                              let btnStyle = "bg-white hover:bg-stone-100 text-stone-800 border-stone-200";
                              if (showResults) {
                                if (optIdx === q.correct) {
                                  btnStyle = "bg-emerald-50 text-emerald-950 border-emerald-400 font-bold";
                                } else if (isThisSelected) {
                                  btnStyle = "bg-rose-50 text-rose-950 border-rose-400 line-through";
                                }
                              } else if (isThisSelected) {
                                btnStyle = "bg-orange-500 text-white border-orange-500 font-bold";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectOption(q.id, optIdx)}
                                  disabled={showResults}
                                  className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${btnStyle}`}
                                >
                                  <span className="w-5 h-5 rounded-full border border-current shrink-0 flex items-center justify-center text-[10px] font-mono mt-0.5">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {showResults && (
                            <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                              isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                                        : "bg-amber-50 text-amber-900 border border-amber-200"
                            }`}>
                              <strong className="block mb-0.5 font-bold">
                                {isCorrect ? "Correct!" : "Explanation:"}
                              </strong>
                              {q.expl}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e7e3da]">
                    <div className="text-xs text-stone-500 font-mono">
                      Answered: {Object.keys(userAnswers).length} / 15 questions
                    </div>
                    <div className="flex items-center gap-2">
                      {!showResults ? (
                        <button
                          onClick={() => setShowResults(true)}
                          disabled={Object.keys(userAnswers).length === 0}
                          className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-sm shadow-sm transition-colors"
                        >
                          Grade Assessment
                        </button>
                      ) : (
                        <button
                          onClick={handleResetQuiz}
                          className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-sm transition-colors"
                        >
                          Retake Quiz
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Course Progression Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/data-engineering/airflow-orchestration")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e7e3da] text-stone-700 hover:text-stone-900 hover:bg-stone-50 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 12 · Apache Airflow</span>
          </button>

          <button
            onClick={() => navigate("/learning/data-engineering")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <span>Next: Module 14 · Real-Time Data Streaming with Apache Kafka</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Universal Module Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e7e3da] shadow-lg">
        <ModuleNav />
      </div>
    </div>
  );
}
