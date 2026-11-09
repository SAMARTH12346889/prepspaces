// projectx/src/Componets/DataEngineeringAirflow.jsx
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
import DataEngineeringAirflowSections from "./DataEngineeringAirflowSections";

export default function DataEngineeringAirflow() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("dag_simulator");
  // 'dag_simulator' | 'cron_scheduler' | 'dynamic_mapping' | 'retry_idempotency' | 'asset_dagster' | 'production_mastery'

  // =========================================================================
  // WORKBENCH 1: Airflow DAG & Dependency Graph Simulator
  // =========================================================================
  const [branchChoice, setBranchChoice] = useState("publish"); // 'publish' | 'quarantine'
  const [injectError, setInjectError] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [selectedTask, setSelectedTask] = useState("extract_orders");

  const dagTasks = useMemo(() => [
    {
      id: "extract_orders",
      label: "extract_orders",
      type: "TaskFlow @task",
      operator: "PythonOperator (SDK)",
      layer: "Ingest",
      upstream: ["start"],
      code: `@task\ndef extract_orders():\n    return [{"order_id": 101, "amount": 250}, {"order_id": 102, "amount": 420}]`,
      xcom: '{"record_count": 2, "source": "postgres_orders"}'
    },
    {
      id: "extract_customers",
      label: "extract_customers",
      type: "TaskFlow @task",
      operator: "PythonOperator (SDK)",
      layer: "Ingest",
      upstream: ["start"],
      code: `@task\ndef extract_customers():\n    return [{"cust_id": 101, "tier": "gold"}, {"cust_id": 102, "tier": "silver"}]`,
      xcom: '{"record_count": 2, "source": "crm_api"}'
    },
    {
      id: "validate_data",
      label: "validate_data",
      type: "TaskFlow @task",
      operator: "PythonOperator (SDK)",
      layer: "Quality",
      upstream: ["extract_orders", "extract_customers"],
      code: `@task\ndef validate_data(orders, customers):\n    return all(o["amount"] > 0 for o in orders)`,
      xcom: '{"is_valid": true, "failed_records": 0}'
    },
    {
      id: "choose_branch",
      label: "choose_path",
      type: "Branching @task.branch",
      operator: "BranchPythonOperator",
      layer: "Decision",
      upstream: ["validate_data"],
      code: `@task.branch\ndef choose_path(is_valid):\n    if is_valid:\n        return "publish_data"\n    return "quarantine_data"`,
      xcom: `{"selected_branch": "${branchChoice === 'publish' ? 'publish_data' : 'quarantine_data'}"}`
    },
    {
      id: "publish_data",
      label: "publish_data",
      type: "Branch Path A",
      operator: "PythonOperator",
      layer: "Processing",
      upstream: ["choose_branch"],
      code: `@task\ndef publish_data():\n    print("Promoting valid data to Silver zone")`,
      xcom: '{"status": "silver_ready"}'
    },
    {
      id: "quarantine_data",
      label: "quarantine_data",
      type: "Branch Path B",
      operator: "PythonOperator",
      layer: "Processing",
      upstream: ["choose_branch"],
      code: `@task\ndef quarantine_data():\n    print("Routing dirty data to Dead-Letter Queue")`,
      xcom: '{"status": "quarantined"}'
    },
    {
      id: "spark_processing",
      label: "spark_processing",
      type: "Spark Submit",
      operator: "SparkSubmitOperator",
      layer: "Compute",
      upstream: ["publish_data", "quarantine_data"],
      code: `spark_job = SparkSubmitOperator(\n    task_id="spark_processing",\n    conn_id="spark_default",\n    application="/opt/airflow/apps/sales_processing.py",\n    trigger_rule="none_failed_min_one_success"\n)`,
      xcom: '{"spark_app_id": "app-20261109-08241", "gold_rows_written": 2}'
    },
    {
      id: "load_warehouse",
      label: "load_warehouse",
      type: "SQL Execute",
      operator: "SQLExecuteQueryOperator",
      layer: "Storage",
      upstream: ["spark_processing"],
      code: `load_dw = SQLExecuteQueryOperator(\n    task_id="load_warehouse",\n    conn_id="analytics_dw",\n    sql="MERGE INTO sales_fact USING gold_staged ..."\n)`,
      xcom: '{"dw_rows_upserted": 2, "runtime_ms": 482}'
    },
    {
      id: "send_alert",
      label: "send_notification",
      type: "Notification",
      operator: "EmailOperator / SlackHook",
      layer: "Alerting",
      upstream: ["load_warehouse"],
      code: `@task\ndef send_notification(summary):\n    print("Pipeline completed successfully. Pushed metrics to Slack channel #data-ops")`,
      xcom: '{"slack_message_id": "msg-9921", "status": "sent"}'
    }
  ], [branchChoice]);

  // Determine state of each task based on currentStepIndex
  const taskStates = useMemo(() => {
    const states = {};
    const executionOrder = [
      ["extract_orders", "extract_customers"],
      ["validate_data"],
      ["choose_branch"],
      branchChoice === "publish" ? ["publish_data"] : ["quarantine_data"],
      ["spark_processing"],
      ["load_warehouse"],
      ["send_alert"]
    ];

    dagTasks.forEach(t => {
      states[t.id] = "queued";
    });

    if (currentStepIndex === -1) {
      dagTasks.forEach(t => { states[t.id] = "queued"; });
      return states;
    }

    if (branchChoice === "publish") {
      states["quarantine_data"] = "skipped";
    } else {
      states["publish_data"] = "skipped";
    }

    for (let step = 0; step <= currentStepIndex && step < executionOrder.length; step++) {
      const activeIds = executionOrder[step];
      const isCurrent = step === currentStepIndex;

      activeIds.forEach(id => {
        if (injectError && id === "validate_data") {
          states[id] = "failed";
        } else if (injectError && step > 1) {
          states[id] = "upstream_failed";
        } else {
          states[id] = isCurrent ? "running" : "success";
        }
      });
    }

    return states;
  }, [currentStepIndex, branchChoice, injectError, dagTasks]);

  const handleStepNext = () => {
    if (currentStepIndex < 6) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleResetDag = () => {
    setCurrentStepIndex(-1);
    setInjectError(false);
  };

  const handleRunFullDag = () => {
    setCurrentStepIndex(6);
  };

  // =========================================================================
  // WORKBENCH 2: Cron Expression & Data Interval Scheduler Visualizer
  // =========================================================================
  const [cronMinute, setCronMinute] = useState("0");
  const [cronHour, setCronHour] = useState("2");
  const [cronDom, setCronDom] = useState("*");
  const [cronMonth, setCronMonth] = useState("*");
  const [cronDow, setCronDow] = useState("*");
  const [catchupEnabled, setCatchupEnabled] = useState(false);

  const cronString = `${cronMinute} ${cronHour} ${cronDom} ${cronMonth} ${cronDow}`;

  const cronDescription = useMemo(() => {
    if (cronString === "0 * * * *") return "Every hour, at minute 0 (Preset: @hourly)";
    if (cronString === "0 0 * * *") return "Every day at midnight UTC (00:00) (Preset: @daily)";
    if (cronString === "0 2 * * *") return "Every day at 02:00 AM UTC (Daily ETL batch window)";
    if (cronString === "0 0 * * 0") return "Every Sunday at midnight UTC (Preset: @weekly)";
    if (cronString === "0 0 1 * *") return "First day of every month at midnight (Preset: @monthly)";
    if (cronString === "*/15 * * * *") return "Every 15 minutes continuously";
    if (cronString === "0 0,12 * * *") return "Twice daily: at 00:00 and 12:00 UTC";
    return `At minute ${cronMinute}, hour ${cronHour}, day-of-month ${cronDom}, month ${cronMonth}, day-of-week ${cronDow}`;
  }, [cronString, cronMinute, cronHour, cronDom, cronMonth, cronDow]);

  const applyPreset = (preset) => {
    switch (preset) {
      case "hourly":
        setCronMinute("0"); setCronHour("*"); setCronDom("*"); setCronMonth("*"); setCronDow("*");
        break;
      case "daily_2am":
        setCronMinute("0"); setCronHour("2"); setCronDom("*"); setCronMonth("*"); setCronDow("*");
        break;
      case "daily_midnight":
        setCronMinute("0"); setCronHour("0"); setCronDom("*"); setCronMonth("*"); setCronDow("*");
        break;
      case "weekly":
        setCronMinute("0"); setCronHour("0"); setCronDom("*"); setCronMonth("*"); setCronDow("0");
        break;
      case "monthly":
        setCronMinute("0"); setCronHour("0"); setCronDom("1"); setCronMonth("*"); setCronDow("*");
        break;
      case "business_hours":
        setCronMinute("30"); setCronHour("18"); setCronDom("*"); setCronMonth("*"); setCronDow("1-5");
        break;
      default:
        break;
    }
  };

  // =========================================================================
  // WORKBENCH 3: Dynamic Task Mapping (.expand()) & Map-Reduce Studio
  // =========================================================================
  const [numPartitions, setNumPartitions] = useState(8); // 4, 8, 12, 16
  const [poolConcurrency, setPoolConcurrency] = useState(4); // 2, 4, 8 slots
  const [dynamicSimStep, setDynamicSimStep] = useState(0); // 0: Idle, 1: Discovered, 2: Mapping, 3: Completed

  const mappedInstances = useMemo(() => {
    return Array.from({ length: numPartitions }, (_, i) => ({
      index: i,
      filePath: `s3://data-lake/bronze/2026-11-09/part-${String(i).padStart(4, "0")}.parquet`,
      sizeMb: (120 + (i * 17) % 85),
      status: dynamicSimStep === 0 ? "pending"
            : dynamicSimStep === 1 ? "discovered"
            : dynamicSimStep === 2 ? (i < poolConcurrency ? "running" : "queued")
            : "success"
    }));
  }, [numPartitions, poolConcurrency, dynamicSimStep]);

  // =========================================================================
  // WORKBENCH 4: Task Retries, Exponential Backoff & Idempotency Sandbox
  // =========================================================================
  const [maxRetries, setMaxRetries] = useState(3);
  const [baseDelaySec, setBaseDelaySec] = useState(5);
  const [useExponential, setUseExponential] = useState(true);
  const [failureType, setFailureType] = useState("transient"); // 'transient' | 'fatal'
  const [retryAttempt, setRetryAttempt] = useState(0);
  const [idempotencyMode, setIdempotencyMode] = useState("idempotent"); // 'non_idempotent' | 'idempotent'

  const retryTimeline = useMemo(() => {
    const list = [];
    let currentDelay = baseDelaySec;
    for (let r = 1; r <= maxRetries; r++) {
      list.push({
        attempt: r,
        delay: currentDelay,
        label: `Retry #${r}: Delay ${currentDelay}s`
      });
      if (useExponential) {
        currentDelay = currentDelay * 2;
      }
    }
    return list;
  }, [maxRetries, baseDelaySec, useExponential]);

  // =========================================================================
  // WORKBENCH 5: Data-Aware Scheduling (Airflow 3 Assets vs Dagster Assets)
  // =========================================================================
  const [assetFramework, setAssetFramework] = useState("airflow"); // 'airflow' | 'dagster'
  const [ordersAssetVersion, setOrdersAssetVersion] = useState(1);
  const [customersAssetVersion, setCustomersAssetVersion] = useState(1);
  const [consumerTriggerCount, setConsumerTriggerCount] = useState(0);
  const [assetLogs, setAssetLogs] = useState([
    "[System] Asset catalog initialized with URI s3://lakehouse/orders and s3://lakehouse/customers"
  ]);

  const handleEmitOrdersAsset = () => {
    const nextVer = ordersAssetVersion + 1;
    setOrdersAssetVersion(nextVer);
    setConsumerTriggerCount(prev => prev + 1);
    setAssetLogs(prev => [
      `[Airflow 3 Asset Event] Producer DAG 'extract_orders_dag' published materialization to 's3://lakehouse/orders' (version ${nextVer})`,
      `[Scheduler] Evaluated condition 'schedule=[orders_asset]': Condition satisfied! Queued DAG Run for 'daily_sales_consumer_dag'`,
      ...prev.slice(0, 8)
    ]);
  };

  const handleEmitCustomersAsset = () => {
    const nextVer = customersAssetVersion + 1;
    setCustomersAssetVersion(nextVer);
    setAssetLogs(prev => [
      `[Airflow 3 Asset Event] Producer DAG 'sync_crm_customers' updated 's3://lakehouse/customers' (version ${nextVer})`,
      ...prev.slice(0, 8)
    ]);
  };

  // =========================================================================
  // WORKBENCH 6: Production Architecture & 15-Question Curriculum Quiz
  // =========================================================================
  const [selectedClusterComponent, setSelectedClusterComponent] = useState("scheduler");
  const clusterComponents = [
    {
      id: "dag_processor",
      name: "DAG Processor",
      badge: "Airflow 3 Isolated Service",
      role: "Parses Python DAG files into serialized representations without blocking scheduling loops.",
      scaling: "Standalone container service; can horizontally scale for thousands of DAG files.",
      ports: "Internal IPC / Database writes"
    },
    {
      id: "scheduler",
      name: "Airflow Scheduler",
      badge: "Core Orchestrator",
      role: "Evaluates active DAG runs, resolves dependencies, and schedules task instances to the executor queue.",
      scaling: "Multi-Scheduler HA with row-level database locking.",
      ports: "Heartbeat every 500ms"
    },
    {
      id: "api_server",
      name: "API Server & Web UI",
      badge: "FastAPI / Modern Interface",
      role: "Serves Web UI, OpenAPI endpoints, and programmatic execution controls with JWT authentication.",
      scaling: "Stateless load-balanced web tier behind NGINX / Cloud Ingress.",
      ports: "HTTP 8080"
    },
    {
      id: "executor",
      name: "Celery / Kubernetes Executor",
      badge: "Execution Abstraction",
      role: "Determines how and where task instances run: via Redis broker queue or dynamic Kubernetes Pod launch.",
      scaling: "K8s worker autoscaling from 0 to 500+ ephemeral task pods.",
      ports: "Redis 6379 / K8s API 6443"
    },
    {
      id: "metadata_db",
      name: "PostgreSQL Metadata DB",
      badge: "System of Record",
      role: "Stores all state: DAG runs, task instances, variables, connections, XComs, and user sessions.",
      scaling: "Managed PostgreSQL 15+ with PgBouncer connection pooling and Read Replicas.",
      ports: "PostgreSQL 5432"
    },
    {
      id: "triggerer",
      name: "Airflow Triggerer",
      badge: "Async Deferrable Loop",
      role: "Runs async event loops for deferrable operators and sensors without consuming heavy worker slots.",
      scaling: "Handles 10,000+ suspended deferred tasks in a single lightweight process.",
      ports: "Asyncio Python event loop"
    },
    {
      id: "secrets_backend",
      name: "External Secrets Backend",
      badge: "Enterprise Vault / AWS KMS",
      role: "Retrieves credentials and connection strings at runtime without storing secrets in plaintext.",
      scaling: "Centralized cloud KMS with role-based IAM and automatic secret rotation.",
      ports: "HTTPS 443 / Vault 8200"
    }
  ];

  // 15 Comprehensive Assessment Questions
  const quizQuestions = [
    {
      id: 1,
      q: "1. What is the primary role of Apache Airflow in a modern data engineering architecture?",
      options: [
        "It is a distributed SQL query engine for petabyte-scale storage",
        "It orchestrates, schedules, and monitors workflows and task dependencies across heterogeneous systems",
        "It replaces PostgreSQL as an ACID-compliant OLTP database",
        "It acts as a real-time message broker like Apache Kafka"
      ],
      correct: 1,
      expl: "Airflow is an orchestration engine that coordinates when and how tasks run across external systems (Spark, databases, S3), but it does not execute heavy distributed data processing internally."
    },
    {
      id: 2,
      q: "2. Why must workflows in Apache Airflow be Directed Acyclic Graphs (DAGs)?",
      options: [
        "To ensure that tasks execute only once per year",
        "Because cycles would create infinite execution loops where tasks wait on each other indefinitely",
        "To allow bi-directional streaming between Spark and Kafka",
        "Because Python functions cannot return values if loops exist"
      ],
      correct: 1,
      expl: "DAGs are directed (dependencies flow in one clear direction) and acyclic (no loops or cycles). Cycles would cause circular dependencies where tasks deadlock waiting on each other."
    },
    {
      id: 3,
      q: "3. In Apache Airflow, what is the critical distinction between a DAG, a DAG Run, and a Task Instance?",
      options: [
        "DAG is the code definition, DAG Run is a specific execution of that DAG, and Task Instance is an execution of a specific task within that DAG Run",
        "DAG is the database table, DAG Run is a row in PostgreSQL, and Task Instance is a column",
        "DAG is for PythonOperator, DAG Run is for BashOperator, and Task Instance is for SparkSubmitOperator",
        "There is no difference; they are interchangeable terms"
      ],
      correct: 0,
      expl: "The DAG is the static blueprint in Python; a DAG Run represents an instantiation of the DAG for a specific logical date; a Task Instance represents an individual task within that specific run."
    },
    {
      id: 4,
      q: "4. What role does the DAG Processor play in modern Airflow architecture?",
      options: [
        "It connects directly to Amazon S3 to store Parquet files",
        "It parses DAG files into serialized representations in isolation from the Scheduler to prevent slow or malicious user code from freezing scheduling loops",
        "It compiles Python code into C++ binaries for worker nodes",
        "It routes HTTP requests from end users to the Webserver"
      ],
      correct: 1,
      expl: "Modern Airflow decouples the DAG Processor from the main Scheduler loop. The DAG Processor periodically parses Python files into serialized DAGs in the metadata database, keeping the Scheduler fast and resilient."
    },
    {
      id: 5,
      q: "5. How do CeleryExecutor and KubernetesExecutor differ in task execution and isolation?",
      options: [
        "CeleryExecutor runs tasks locally inside the scheduler; KubernetesExecutor runs them on Hadoop YARN",
        "CeleryExecutor uses a static pool of pre-warmed worker nodes managed via a message broker (Redis/RabbitMQ); KubernetesExecutor launches a dynamic dedicated Pod for each individual task instance",
        "KubernetesExecutor cannot run Python scripts",
        "CeleryExecutor is only supported in Apache Airflow 1.x"
      ],
      correct: 1,
      expl: "CeleryExecutor distributes tasks across a fixed/autoscaled set of long-running worker processes via a broker. KubernetesExecutor spins up an isolated, ephemeral Kubernetes pod per task instance, offering maximum environment isolation and clean resource cleanup."
    },
    {
      id: 6,
      q: "6. What is the advantage of using the TaskFlow API (@task) over traditional PythonOperator?",
      options: [
        "It eliminates the need for Python packages",
        "It allows natural Python function authoring, automatic XCom return value passing, and implicit dependency tracking between task calls",
        "It automatically converts Python code to Apache Spark jobs",
        "It disables task retries to make DAGs faster"
      ],
      correct: 1,
      expl: "TaskFlow API decorators (@task) allow writing clean Python functions where inputs and outputs are automatically wired via XComs and dependencies without manual boilerplate."
    },
    {
      id: 7,
      q: "7. What is the key performance benefit of Airflow Deferrable Operators (and Triggerers) over traditional Sensor polling?",
      options: [
        "They increase worker CPU usage to finish tasks faster",
        "They yield the worker slot and suspend task execution until an async event occurs, freeing worker slots for other tasks and reducing resource consumption",
        "They bypass the metadata database completely",
        "They disable SSL encryption for higher network throughput"
      ],
      correct: 1,
      expl: "Traditional sensors block an entire worker slot while polling (poke). Deferrable operators hand off waiting tasks to an asynchronous event loop running in the Airflow Triggerer, freeing worker processes to execute actual work."
    },
    {
      id: 8,
      q: "8. When implementing branching in an Airflow DAG, which trigger rule should downstream barrier tasks typically use?",
      options: [
        "all_success",
        "all_failed",
        "none_failed_min_one_success or one_success",
        "dummy_rule"
      ],
      correct: 2,
      expl: "In branching, skipped branches have a state of skipped. The default all_success rule would fail because the skipped task did not succeed. Using none_failed_min_one_success ensures the downstream task runs if the chosen branch succeeded and no upstream failed."
    },
    {
      id: 9,
      q: "9. In Airflow scheduling, why does a DAG with @daily (or 0 0 * * *) starting on 2026-01-01 run at 2026-01-02 00:00:00?",
      options: [
        "Because Airflow has a built-in 24-hour bug",
        "Because Airflow follows the data interval model: the run covers data from 2026-01-01 00:00 to 2026-01-02 00:00, which can only be fully collected after the period closes",
        "Because timezones are always converted to UTC minus one day",
        "Because the DAG Processor takes 24 hours to parse files"
      ],
      correct: 1,
      expl: "Airflow evaluates scheduled runs at the close of their data interval (data_interval_end). For the period Jan 1 00:00 to Jan 2 00:00, all records for Jan 1 have only finished arriving at Jan 2 00:00."
    },
    {
      id: 10,
      q: "10. What does setting catchup=False on a DAG do when it is first activated with a start_date six months in the past?",
      options: [
        "It deletes the DAG file permanently",
        "It executes all 180 missed daily DAG runs simultaneously",
        "It skips the historical backlog and only creates a DAG Run for the most recently completed data interval",
        "It causes the Scheduler to throw a runtime exception"
      ],
      correct: 2,
      expl: "When catchup=False, the scheduler ignores historical intervals between start_date and the current date, scheduling only the latest interval. catchup=True (default in older versions) would trigger runs for every missed interval."
    },
    {
      id: 11,
      q: "11. How does Dynamic Task Mapping (.expand()) differ from creating tasks in a standard Python for loop?",
      options: [
        "There is no difference; .expand() is just an alias for a Python loop",
        "Dynamic Task Mapping creates task instances dynamically at runtime based on the actual output of an upstream task, whereas a Python loop creates static tasks at DAG parse time",
        "Dynamic Task Mapping only works with BashOperator",
        "Dynamic Task Mapping limits task count to 10"
      ],
      correct: 1,
      expl: "Static loops generate tasks when the scheduler parses the DAG file. .expand() resolves the collection dynamically at runtime during task execution, scaling to thousands of items without bloating DAG parsing."
    },
    {
      id: 12,
      q: "12. Why should large datasets (e.g. DataFrames or gigabyte files) NOT be passed through Airflow XCom?",
      options: [
        "Because XCom is stored in the Airflow Metadata Database (PostgreSQL/MySQL), causing database bloat, memory exhaustion, and severe scheduler degradation",
        "Because XCom only accepts integer values",
        "Because XCom data is automatically deleted after 10 seconds",
        "Because XCom is unencrypted plaintext on the local hard drive"
      ],
      correct: 0,
      expl: "XCom values are serialized into the metadata database table xcom. Storing large datasets there can exhaust database storage and bring down the cluster. Pass storage paths (S3/GCS URI) via XCom instead."
    },
    {
      id: 13,
      q: "13. Why should production Airflow deployments use an external Secrets Backend (like HashiCorp Vault or AWS Secrets Manager) instead of storing credentials in the UI or environment files?",
      options: [
        "Because Airflow cannot read passwords longer than 8 characters",
        "To provide centralized encryption, automated secret rotation, fine-grained access audits, and prevent committing credentials into Git repositories or database dumps",
        "Because PostgreSQL does not support string columns",
        "To disable network firewalls"
      ],
      correct: 1,
      expl: "External secret backends ensure production credentials are encrypted at rest, rotated automatically without restarting services, audited, and never committed to version control or baked into Docker images."
    },
    {
      id: 14,
      q: "14. What is Data-Aware Scheduling (Assets in Airflow 3.x), and how does it improve pipeline architecture?",
      options: [
        "It replaces the DAG Scheduler with an Apache Spark cluster",
        "It decouples producer and consumer workflows by allowing DAGs to be triggered automatically when specific datasets/assets are updated, rather than relying on brittle rigid cron timers",
        "It forces all data to be stored in CSV format",
        "It encrypts datasets using SHA-256"
      ],
      correct: 1,
      expl: "Asset-aware scheduling allows DAGs to trigger based on data updates (schedule=[orders_asset]) rather than arbitrary clock times. This prevents race conditions where consumer DAGs start before producer DAGs finish writing data."
    },
    {
      id: 15,
      q: "15. In Dagster, what is a \"Software-Defined Asset\" (@asset), and how does its mental model differ from an Airflow task?",
      options: [
        "Dagster assets can only run on Windows machines",
        "A Dagster asset focuses on the data object itself (what data should exist and its lineage/dependencies), whereas a traditional Airflow task focuses on the step of work to execute (imperative action)",
        "A Dagster asset is a physical SSD drive attached to the cluster",
        "Dagster assets cannot be scheduled or backfilled"
      ],
      correct: 1,
      expl: "Dagster's core abstraction is data-centric: you define the asset (e.g. cleaned_orders), its upstream dependencies, and how to materialize it. Airflow traditionally focuses on the workflow graph of execution tasks, though Airflow 3 has adopted data-aware assets."
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
              Module 12 · Airflow & Dagster
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f2efe9] to-[#f6f4ee] border-b border-[#e7e3da] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-[#f97316] text-xs font-bold uppercase tracking-wider font-mono">
              Course Module 12
            </span>
            <span className="text-xs text-stone-500 font-mono">Workflow Automation & Pipeline Management</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Workflow Orchestration with Apache Airflow
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-700 max-w-3xl leading-relaxed">
            Design, schedule, automate, and monitor complex production data engineering pipelines using
            Apache Airflow 3.x, DAGs, TaskFlow API, Celery & Kubernetes executors, dynamic task mapping,
            secrets management, data-aware scheduling, and Dagster Software-Defined Assets.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-xs border border-[#e7e3da] rounded-xl p-3.5 shadow-2xs">
              <div className="text-xs font-mono text-stone-500 uppercase">Architecture</div>
              <div className="text-lg font-bold text-stone-900 mt-0.5 flex items-center gap-1.5">
                <Workflow size={18} className="text-orange-500" />
                Airflow 3.x + Dagster
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs border border-[#e7e3da] rounded-xl p-3.5 shadow-2xs">
              <div className="text-xs font-mono text-stone-500 uppercase">Workflow Abstraction</div>
              <div className="text-lg font-bold text-stone-900 mt-0.5 flex items-center gap-1.5">
                <GitBranch size={18} className="text-orange-500" />
                DAGs & Assets
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
            <DataEngineeringAirflowSections />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#e7e3da]">
              {[
                { id: "dag_simulator", label: "1. DAG Simulator", icon: Workflow },
                { id: "cron_scheduler", label: "2. Cron & Data Intervals", icon: Clock },
                { id: "dynamic_mapping", label: "3. Dynamic Mapping", icon: Layers },
                { id: "retry_idempotency", label: "4. Retries & Idempotency", icon: RotateCcw },
                { id: "asset_dagster", label: "5. Assets & Dagster", icon: GitBranch },
                { id: "production_mastery", label: "6. Production & Quiz", icon: ShieldCheck }
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
            {/* WORKBENCH 1: Airflow DAG & Dependency Graph Simulator */}
            {/* ============================================================= */}
            {activeWorkbench === "dag_simulator" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 1</span>
                    <span>•</span>
                    <span>Control Flow & State Machine</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    Airflow DAG & Dependency Graph Simulator
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Simulate task execution flows, parallel fan-outs (`extract_orders` and `extract_customers`),
                    TaskFlow branching (`@task.branch`), and barrier trigger rules (`none_failed_min_one_success`).
                  </p>
                </div>

                {/* Control Toolbar */}
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleStepNext}
                      disabled={currentStepIndex >= 6}
                      className="px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-40 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Play size={14} />
                      Step Next Task ({currentStepIndex + 1}/7)
                    </button>
                    <button
                      onClick={handleRunFullDag}
                      className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-900 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Zap size={14} />
                      Execute Complete DAG
                    </button>
                    <button
                      onClick={handleResetDag}
                      className="px-3.5 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <RotateCcw size={14} />
                      Reset
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <span className="text-stone-700">Branch Decision:</span>
                      <select
                        value={branchChoice}
                        onChange={(e) => setBranchChoice(e.target.value)}
                        className="bg-white border border-[#e7e3da] rounded px-2 py-1 text-xs font-semibold text-stone-900 focus:outline-hidden"
                      >
                        <option value="publish">Valid Data → publish_data</option>
                        <option value="quarantine">Corrupt Data → quarantine_data</option>
                      </select>
                    </label>

                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={injectError}
                        onChange={(e) => setInjectError(e.target.checked)}
                        className="rounded accent-orange-500"
                      />
                      <span className="text-red-700 font-bold">Inject Validation Failure</span>
                    </label>
                  </div>
                </div>

                {/* State Legend */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="text-stone-500">Task States:</span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                    <span className="w-2 h-2 rounded-full bg-stone-400" /> queued
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> running
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> success
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> failed
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-stone-100 text-stone-400 border border-stone-200 line-through">
                    <span className="w-2 h-2 rounded-full bg-stone-300" /> skipped
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> upstream_failed
                  </span>
                </div>

                {/* Visual DAG Nodes Flow */}
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 overflow-x-auto space-y-4">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                    <span>DAG ID: ecommerce_sales_orchestration · Airflow 3 SDK</span>
                    <span>Trigger Rule: none_failed_min_one_success</span>
                  </div>

                  <div className="min-w-[650px] flex items-center justify-between gap-3 text-xs font-mono pt-2">
                    {/* Ingestion Tier (Parallel) */}
                    <div className="flex flex-col gap-3">
                      {["extract_orders", "extract_customers"].map(id => {
                        const task = dagTasks.find(t => t.id === id);
                        const state = taskStates[id];
                        const isSelected = selectedTask === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedTask(id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              state === "success" ? "bg-emerald-950/70 border-emerald-700 text-emerald-300"
                              : state === "running" ? "bg-blue-950/70 border-blue-600 text-blue-200 animate-pulse"
                              : state === "failed" ? "bg-rose-950/70 border-rose-600 text-rose-200"
                              : "bg-neutral-900 border-neutral-700 text-neutral-300"
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between gap-2">
                              <span>{task.label}</span>
                              <span className="text-[10px] uppercase opacity-75">{state}</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-1">{task.operator}</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Quality Check */}
                    <div>
                      {["validate_data"].map(id => {
                        const task = dagTasks.find(t => t.id === id);
                        const state = taskStates[id];
                        const isSelected = selectedTask === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedTask(id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              state === "success" ? "bg-emerald-950/70 border-emerald-700 text-emerald-300"
                              : state === "running" ? "bg-blue-950/70 border-blue-600 text-blue-200 animate-pulse"
                              : state === "failed" ? "bg-rose-950/70 border-rose-600 text-rose-200"
                              : "bg-neutral-900 border-neutral-700 text-neutral-300"
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between gap-2">
                              <span>{task.label}</span>
                              <span className="text-[10px] uppercase opacity-75">{state}</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-1">{task.operator}</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Branching */}
                    <div>
                      {["choose_branch"].map(id => {
                        const task = dagTasks.find(t => t.id === id);
                        const state = taskStates[id];
                        const isSelected = selectedTask === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedTask(id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              state === "success" ? "bg-emerald-950/70 border-emerald-700 text-emerald-300"
                              : state === "running" ? "bg-blue-950/70 border-blue-600 text-blue-200 animate-pulse"
                              : "bg-neutral-900 border-neutral-700 text-neutral-300"
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between gap-2">
                              <span>{task.label}</span>
                              <span className="text-[10px] uppercase opacity-75">{state}</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-1">@task.branch</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Branch Targets */}
                    <div className="flex flex-col gap-3">
                      {["publish_data", "quarantine_data"].map(id => {
                        const task = dagTasks.find(t => t.id === id);
                        const state = taskStates[id];
                        const isSelected = selectedTask === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedTask(id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              state === "success" ? "bg-emerald-950/70 border-emerald-700 text-emerald-300"
                              : state === "running" ? "bg-blue-950/70 border-blue-600 text-blue-200 animate-pulse"
                              : state === "skipped" ? "bg-neutral-900/40 border-neutral-800 text-neutral-500 opacity-50"
                              : "bg-neutral-900 border-neutral-700 text-neutral-300"
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between gap-2">
                              <span>{task.label}</span>
                              <span className="text-[10px] uppercase opacity-75">{state}</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-1">{task.layer}</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Compute & Storage */}
                    <div className="flex flex-col gap-3">
                      {["spark_processing", "load_warehouse"].map(id => {
                        const task = dagTasks.find(t => t.id === id);
                        const state = taskStates[id];
                        const isSelected = selectedTask === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedTask(id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              state === "success" ? "bg-emerald-950/70 border-emerald-700 text-emerald-300"
                              : state === "running" ? "bg-blue-950/70 border-blue-600 text-blue-200 animate-pulse"
                              : state === "upstream_failed" ? "bg-amber-950/50 border-amber-700 text-amber-300"
                              : "bg-neutral-900 border-neutral-700 text-neutral-300"
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between gap-2">
                              <span>{task.label}</span>
                              <span className="text-[10px] uppercase opacity-75">{state}</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-1">{task.operator}</div>
                          </div>
                        );
                      })}
                    </div>

                    <ArrowRight size={18} className="text-neutral-600 shrink-0" />

                    {/* Notification */}
                    <div>
                      {["send_alert"].map(id => {
                        const task = dagTasks.find(t => t.id === id);
                        const state = taskStates[id];
                        const isSelected = selectedTask === id;
                        return (
                          <div
                            key={id}
                            onClick={() => setSelectedTask(id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected ? "ring-2 ring-orange-500" : ""
                            } ${
                              state === "success" ? "bg-emerald-950/70 border-emerald-700 text-emerald-300"
                              : state === "running" ? "bg-blue-950/70 border-blue-600 text-blue-200 animate-pulse"
                              : state === "upstream_failed" ? "bg-amber-950/50 border-amber-700 text-amber-300"
                              : "bg-neutral-900 border-neutral-700 text-neutral-300"
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between gap-2">
                              <span>{task.label}</span>
                              <span className="text-[10px] uppercase opacity-75">{state}</span>
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-1">{task.operator}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Selected Task Inspector */}
                {selectedTask && (
                  <div className="p-4 rounded-xl bg-stone-50 border border-[#e7e3da] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900 font-mono text-sm">
                          Task Inspector: {selectedTask}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${
                          taskStates[selectedTask] === "success" ? "bg-emerald-100 text-emerald-800"
                          : taskStates[selectedTask] === "running" ? "bg-blue-100 text-blue-800"
                          : taskStates[selectedTask] === "failed" ? "bg-rose-100 text-rose-800"
                          : "bg-stone-200 text-stone-700"
                        }`}>
                          {taskStates[selectedTask]}
                        </span>
                      </div>
                      <span className="text-xs text-stone-500 font-mono">
                        Upstream: {dagTasks.find(t => t.id === selectedTask)?.upstream.join(", ")}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 overflow-x-auto">
                        <div className="text-[10px] text-neutral-400 mb-1">TASK DEFINITION:</div>
                        <pre><code>{dagTasks.find(t => t.id === selectedTask)?.code}</code></pre>
                      </div>
                      <div className="p-3 rounded-lg bg-neutral-900 text-emerald-300 overflow-x-auto">
                        <div className="text-[10px] text-neutral-400 mb-1">XCOM METADATA RETURN VALUE:</div>
                        <pre><code>{dagTasks.find(t => t.id === selectedTask)?.xcom}</code></pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 2: Cron & Data Intervals Visualizer */}
            {/* ============================================================= */}
            {activeWorkbench === "cron_scheduler" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 2</span>
                    <span>•</span>
                    <span>Temporal Mechanics</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    Cron Expression & Data Interval Scheduler
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Understand the 5-field cron syntax, schedule presets, and why a daily DAG for Nov 8 actually executes at Nov 9 00:00:00!
                  </p>
                </div>

                {/* Preset Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-stone-500">Presets:</span>
                  {[
                    { id: "hourly", label: "@hourly" },
                    { id: "daily_2am", label: "Daily at 2 AM (0 2 * * *)" },
                    { id: "daily_midnight", label: "@daily (Midnight)" },
                    { id: "weekly", label: "@weekly" },
                    { id: "monthly", label: "@monthly" },
                    { id: "business_hours", label: "Weekdays 6:30 PM" }
                  ].map(p => (
                    <button
                      key={p.id}
                      onClick={() => applyPreset(p.id)}
                      className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold font-mono border border-stone-200 transition-colors"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Interactive 5-Field Cron Editor */}
                <div className="grid grid-cols-5 gap-2 sm:gap-4 p-4 rounded-xl bg-neutral-950 text-neutral-100 font-mono text-center">
                  <div>
                    <div className="text-[10px] text-neutral-400 mb-1 uppercase">Minute</div>
                    <input
                      type="text"
                      value={cronMinute}
                      onChange={(e) => setCronMinute(e.target.value)}
                      className="w-full text-center py-2 rounded bg-neutral-900 border border-neutral-700 font-bold text-base sm:text-xl text-orange-400 focus:outline-hidden"
                    />
                    <div className="text-[10px] text-neutral-500 mt-1">0 - 59</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 mb-1 uppercase">Hour</div>
                    <input
                      type="text"
                      value={cronHour}
                      onChange={(e) => setCronHour(e.target.value)}
                      className="w-full text-center py-2 rounded bg-neutral-900 border border-neutral-700 font-bold text-base sm:text-xl text-orange-400 focus:outline-hidden"
                    />
                    <div className="text-[10px] text-neutral-500 mt-1">0 - 23</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 mb-1 uppercase">Day of Month</div>
                    <input
                      type="text"
                      value={cronDom}
                      onChange={(e) => setCronDom(e.target.value)}
                      className="w-full text-center py-2 rounded bg-neutral-900 border border-neutral-700 font-bold text-base sm:text-xl text-orange-400 focus:outline-hidden"
                    />
                    <div className="text-[10px] text-neutral-500 mt-1">1 - 31 or *</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 mb-1 uppercase">Month</div>
                    <input
                      type="text"
                      value={cronMonth}
                      onChange={(e) => setCronMonth(e.target.value)}
                      className="w-full text-center py-2 rounded bg-neutral-900 border border-neutral-700 font-bold text-base sm:text-xl text-orange-400 focus:outline-hidden"
                    />
                    <div className="text-[10px] text-neutral-500 mt-1">1 - 12 or *</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 mb-1 uppercase">Day of Week</div>
                    <input
                      type="text"
                      value={cronDow}
                      onChange={(e) => setCronDow(e.target.value)}
                      className="w-full text-center py-2 rounded bg-neutral-900 border border-neutral-700 font-bold text-base sm:text-xl text-orange-400 focus:outline-hidden"
                    />
                    <div className="text-[10px] text-neutral-500 mt-1">0 - 6 (0=Sun)</div>
                  </div>
                </div>

                {/* Translation Card */}
                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider font-mono text-orange-900">
                      Evaluated Schedule: <code className="font-black text-sm">{cronString}</code>
                    </div>
                    <div className="text-sm font-semibold mt-0.5">{cronDescription}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-900 text-xs font-bold font-mono">
                    UTC Timezone
                  </span>
                </div>

                {/* Data Interval vs Execution Date Timeline */}
                <div className="space-y-3">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Calendar size={16} className="text-orange-500" />
                    Data Interval Execution Mechanics (Airflow Paradigm)
                  </h3>
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 font-mono text-xs space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <div className="text-emerald-400 font-bold">data_interval_start</div>
                        <div className="text-neutral-400 text-[11px]">2026-11-08 00:00:00 UTC</div>
                      </div>
                      <div className="flex-1 w-full flex items-center gap-2">
                        <div className="h-2 w-full bg-neutral-800 rounded-full relative overflow-hidden">
                          <div className="absolute inset-0 bg-orange-500/80 rounded-full" />
                        </div>
                        <span className="text-[10px] text-orange-400 whitespace-nowrap">24h Interval Window</span>
                      </div>
                      <div className="text-center sm:text-right">
                        <div className="text-emerald-400 font-bold">data_interval_end</div>
                        <div className="text-neutral-400 text-[11px]">2026-11-09 00:00:00 UTC</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] leading-relaxed">
                      <strong className="text-orange-400 block mb-1">Why DAG Run fires at the END of the interval:</strong>
                      A daily pipeline processing records generated during November 8 can only be certain all November 8 transactions
                      have completed arriving after 23:59:59 closes. Therefore, the Airflow Scheduler submits the DAG Run for execution
                      at <span className="text-white font-bold">2026-11-09 00:00:00 UTC</span>.
                    </div>
                  </div>
                </div>

                {/* Catchup Toggle */}
                <div className="p-4 rounded-xl bg-stone-50 border border-[#e7e3da] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900 text-xs sm:text-sm block">
                      Catchup Property: <code className="font-mono text-orange-600">{catchupEnabled ? "catchup=True" : "catchup=False"}</code>
                    </span>
                    <span className="text-xs text-stone-500">
                      {catchupEnabled
                        ? "Airflow will trigger backfill DAG Runs for every missed historical day since start_date."
                        : "Airflow ignores historical days and only runs the single most recent completed data interval."}
                    </span>
                  </div>
                  <button
                    onClick={() => setCatchupEnabled(!catchupEnabled)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors ${
                      catchupEnabled ? "bg-orange-500 text-white" : "bg-stone-300 text-stone-800"
                    }`}
                  >
                    Toggle Catchup
                  </button>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 3: Dynamic Task Mapping (.expand()) */}
            {/* ============================================================= */}
            {activeWorkbench === "dynamic_mapping" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 3</span>
                    <span>•</span>
                    <span>Runtime Parallelism</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    Dynamic Task Mapping (`.expand()`) & Map-Reduce Studio
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Watch an upstream task dynamically discover partitions and spawn mapped task instances at runtime,
                    respecting concurrency pool limits before reducing in a downstream task.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Incoming Files / Partitions: {numPartitions}
                    </label>
                    <input
                      type="range"
                      min={4}
                      max={16}
                      step={4}
                      value={numPartitions}
                      onChange={(e) => {
                        setNumPartitions(Number(e.target.value));
                        setDynamicSimStep(0);
                      }}
                      className="w-full accent-orange-500"
                    />
                    <div className="text-[10px] text-stone-500 flex justify-between mt-0.5">
                      <span>4 files</span>
                      <span>8 files</span>
                      <span>12 files</span>
                      <span>16 files</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Worker Slot Concurrency Limit: {poolConcurrency}
                    </label>
                    <input
                      type="range"
                      min={2}
                      max={8}
                      step={2}
                      value={poolConcurrency}
                      onChange={(e) => setPoolConcurrency(Number(e.target.value))}
                      className="w-full accent-orange-500"
                    />
                    <div className="text-[10px] text-stone-500 flex justify-between mt-0.5">
                      <span>2 slots</span>
                      <span>4 slots</span>
                      <span>6 slots</span>
                      <span>8 slots</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => setDynamicSimStep(prev => (prev < 3 ? prev + 1 : 0))}
                      className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Play size={14} />
                      {dynamicSimStep === 0 ? "1. Discover Partitions"
                       : dynamicSimStep === 1 ? "2. Expand Mapped Tasks"
                       : dynamicSimStep === 2 ? "3. Reduce & Combine"
                       : "Reset Simulation"}
                    </button>
                  </div>
                </div>

                {/* Code Blueprint */}
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-mono text-xs overflow-x-auto">
                  <div className="text-[10px] text-neutral-400 mb-1">AIRFLOW 3 TASKFLOW EXPAND PATTERN:</div>
                  <pre><code>{`@task
def discover_files():
    return [f"s3://lake/part-{i}.parquet" for i in range(${numPartitions})]

@task(max_active_tis_per_dag=${poolConcurrency})
def process_file(file_path):
    # Executed as separate mapped TaskInstance [#0, #1, ...]
    return {"path": file_path, "status": "processed"}

@task
def combine_metrics(processed_results):
    # Automatically reduces array of mapped outputs
    return {"total_files": len(processed_results)}

files = discover_files()
mapped_results = process_file.expand(file_path=files)  # Dynamic Task Mapping
combine_metrics(mapped_results)`}</code></pre>
                </div>

                {/* Visual Mapped Task Grid */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-stone-800">
                      Mapped Task Instances: {numPartitions} Instances
                    </span>
                    <span className="text-stone-500">
                      Active Worker Slots: {dynamicSimStep === 2 ? Math.min(numPartitions, poolConcurrency) : 0} / {poolConcurrency}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {mappedInstances.map(inst => (
                      <div
                        key={inst.index}
                        className={`p-3 rounded-xl border font-mono text-xs transition-all ${
                          inst.status === "success" ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                          : inst.status === "running" ? "bg-blue-50 border-blue-400 text-blue-900 animate-pulse"
                          : inst.status === "queued" ? "bg-amber-50 border-amber-300 text-amber-900"
                          : inst.status === "discovered" ? "bg-purple-50 border-purple-300 text-purple-900"
                          : "bg-stone-50 border-stone-200 text-stone-600"
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>process_file [#{inst.index}]</span>
                          <span className="text-[10px] uppercase font-bold">{inst.status}</span>
                        </div>
                        <div className="text-[10px] text-stone-500 mt-1 truncate">{inst.filePath}</div>
                        <div className="text-[10px] font-bold mt-1 text-stone-700">{inst.sizeMb} MB</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 4: Retries, Exponential Backoff & Idempotency */}
            {/* ============================================================= */}
            {activeWorkbench === "retry_idempotency" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 4</span>
                    <span>•</span>
                    <span>Fault Tolerance & Data Integrity</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    Task Retries, Exponential Backoff & Idempotency Sandbox
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Test exponential delay formulas on transient failures, and compare non-idempotent inserts with idempotent MERGE statements.
                  </p>
                </div>

                {/* Configuration Bar */}
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Max Retries: {maxRetries}
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={maxRetries}
                      onChange={(e) => setMaxRetries(Number(e.target.value))}
                      className="w-full accent-orange-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Base Delay: {baseDelaySec} seconds
                    </label>
                    <input
                      type="range"
                      min={2}
                      max={15}
                      value={baseDelaySec}
                      onChange={(e) => setBaseDelaySec(Number(e.target.value))}
                      className="w-full accent-orange-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <label className="flex items-center gap-2 text-xs font-bold text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useExponential}
                        onChange={(e) => setUseExponential(e.target.checked)}
                        className="rounded accent-orange-500"
                      />
                      <span>Exponential Backoff (2^n)</span>
                    </label>
                  </div>
                </div>

                {/* Backoff Timeline */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 font-mono text-xs space-y-3">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                    SIMULATED RETRY DELAY SEQUENCE:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-rose-950 border border-rose-700 text-rose-300">
                      Initial Run: FAILED
                    </span>
                    {retryTimeline.map(item => (
                      <React.Fragment key={item.attempt}>
                        <ArrowRight size={14} className="text-neutral-600" />
                        <span className="px-2.5 py-1 rounded bg-amber-950 border border-amber-700 text-amber-300">
                          {item.label}
                        </span>
                      </React.Fragment>
                    ))}
                    <ArrowRight size={14} className="text-neutral-600" />
                    <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300">
                      Succeeded on Attempt #{maxRetries}
                    </span>
                  </div>
                </div>

                {/* Idempotency Comparator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-stone-900 text-sm">
                      Idempotency Test: What Happens When Task Retries?
                    </h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIdempotencyMode("non_idempotent")}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono ${
                          idempotencyMode === "non_idempotent"
                            ? "bg-rose-600 text-white"
                            : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        Non-Idempotent (INSERT)
                      </button>
                      <button
                        onClick={() => setIdempotencyMode("idempotent")}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono ${
                          idempotencyMode === "idempotent"
                            ? "bg-emerald-600 text-white"
                            : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        Idempotent (MERGE INTO)
                      </button>
                    </div>
                  </div>

                  {idempotencyMode === "non_idempotent" ? (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm space-y-2">
                      <div className="font-bold font-mono text-rose-900">
                        ANTIPATTERN: INSERT INTO sales_daily VALUES (...)
                      </div>
                      <p>
                        When a network blip occurs after insertion but before the task reports success, Airflow retries the task.
                        A raw <code className="font-mono bg-rose-100 px-1 py-0.5 rounded">INSERT</code> inserts duplicate rows,
                        corrupting revenue metrics and causing double-counted sales in dashboards!
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm space-y-2">
                      <div className="font-bold font-mono text-emerald-900">
                        BEST PRACTICE: MERGE INTO sales_daily USING staged ON ...
                      </div>
                      <p>
                        With a SQL <code className="font-mono bg-emerald-100 px-1 py-0.5 rounded">MERGE INTO</code> or partition overwrite
                        (<code className="font-mono bg-emerald-100 px-1 py-0.5 rounded">INSERT OVERWRITE</code>), executing the task 1 time
                        or 10 times yields the exact same clean state with ZERO duplicate records.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 5: Data-Aware Assets (Airflow vs Dagster) */}
            {/* ============================================================= */}
            {activeWorkbench === "asset_dagster" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                    <span>Workbench 5</span>
                    <span>•</span>
                    <span>Asset-Aware Orchestration</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                    Data-Aware Scheduling: Airflow 3 Assets vs Dagster
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Compare Airflow 3 dataset/asset-triggered DAGs with Dagster's Software-Defined Assets (`@asset`) paradigm.
                  </p>
                </div>

                {/* Framework Selector */}
                <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                  <button
                    onClick={() => setAssetFramework("airflow")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      assetFramework === "airflow"
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Airflow 3.x Asset-Aware Scheduling
                  </button>
                  <button
                    onClick={() => setAssetFramework("dagster")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      assetFramework === "dagster"
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Dagster Software-Defined Assets
                  </button>
                </div>

                {assetFramework === "airflow" ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-mono text-xs overflow-x-auto">
                      <div className="text-[10px] text-neutral-400 mb-1">AIRFLOW 3 ASSET PRODUCER & CONSUMER:</div>
                      <pre><code>{`from airflow.sdk import DAG, Asset, task

orders_asset = Asset("s3://company-data/processed/orders/")

# Producer DAG
with DAG(dag_id="produce_orders", schedule="@daily"):
    @task(outlets=[orders_asset])
    def generate_orders():
        return "Orders materialized to S3"

# Consumer DAG (Automatically fires when Asset is updated!)
with DAG(dag_id="consume_orders", schedule=[orders_asset]):
    @task
    def build_dashboard():
        return "Refreshed PowerBI dashboard with new orders"`}</code></pre>
                    </div>

                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-xs font-mono font-bold text-stone-900">
                          PRODUCER TRIGGERS:
                        </div>
                        <div className="text-xs text-stone-600">
                          Click to simulate upstream producer DAGs writing data to S3.
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleEmitOrdersAsset}
                          className="px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Database size={14} />
                          Emit Orders Asset (v{ordersAssetVersion})
                        </button>
                        <button
                          onClick={handleEmitCustomersAsset}
                          className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-900 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Database size={14} />
                          Emit Customers Asset (v{customersAssetVersion})
                        </button>
                      </div>
                    </div>

                    {/* Live Event Log */}
                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-2 text-neutral-300">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                        <span>ASSET EVENT STREAM</span>
                        <span className="text-orange-400">Consumer Trigger Count: {consumerTriggerCount}</span>
                      </div>
                      <div className="space-y-1 max-h-40 overflow-y-auto">
                        {assetLogs.map((log, idx) => (
                          <div key={idx} className="text-[11px] leading-relaxed">
                            {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-mono text-xs overflow-x-auto">
                      <div className="text-[10px] text-neutral-400 mb-1">DAGSTER SOFTWARE-DEFINED ASSETS:</div>
                      <pre><code>{`from dagster import asset

@asset
def raw_orders():
    return [{"order_id": 1, "amount": 500}]

@asset
def cleaned_orders(raw_orders):
    # Dependency declared directly as input parameter!
    return [o for o in raw_orders if o["amount"] > 0]

@asset
def sales_summary(cleaned_orders):
    return {"total_sales": sum(o["amount"] for o in cleaned_orders)}`}</code></pre>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-[#e7e3da]">
                        <span className="text-[10px] uppercase font-bold text-stone-500">Asset 1</span>
                        <div className="font-bold text-stone-900 mt-1">raw_orders</div>
                        <div className="text-stone-600 text-[11px] mt-1">Extracts JSON from API</div>
                        <div className="mt-3 text-[10px] text-emerald-600 font-bold">Materialized: 10,000 rows</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-[#e7e3da]">
                        <span className="text-[10px] uppercase font-bold text-stone-500">Asset 2</span>
                        <div className="font-bold text-stone-900 mt-1">cleaned_orders</div>
                        <div className="text-stone-600 text-[11px] mt-1">Filters NULLs & negatives</div>
                        <div className="mt-3 text-[10px] text-emerald-600 font-bold">Materialized: 9,850 rows</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-[#e7e3da]">
                        <span className="text-[10px] uppercase font-bold text-stone-500">Asset 3</span>
                        <div className="font-bold text-stone-900 mt-1">sales_summary</div>
                        <div className="text-stone-600 text-[11px] mt-1">Aggregates revenue metrics</div>
                        <div className="mt-3 text-[10px] text-emerald-600 font-bold">Materialized: 365 days</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ============================================================= */}
            {/* WORKBENCH 6: Production Architecture & 15-Question Quiz */}
            {/* ============================================================= */}
            {activeWorkbench === "production_mastery" && (
              <div className="space-y-8">
                {/* Cluster Layout */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase font-bold">
                      <span>Workbench 6</span>
                      <span>•</span>
                      <span>Production Topology</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Airflow 3 Production Cluster Architecture
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Click any component to inspect its role, High Availability (HA) setup, failure modes, and scaling strategies.
                    </p>
                  </div>

                  {/* Component Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {clusterComponents.map(comp => (
                      <button
                        key={comp.id}
                        onClick={() => setSelectedClusterComponent(comp.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                          selectedClusterComponent === comp.id
                            ? "bg-stone-900 text-white shadow-sm"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
                        }`}
                      >
                        {comp.name}
                      </button>
                    ))}
                  </div>

                  {/* Active Component Card */}
                  {selectedClusterComponent && (() => {
                    const comp = clusterComponents.find(c => c.id === selectedClusterComponent);
                    return (
                      <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-black text-stone-900 text-base sm:text-lg flex items-center gap-2">
                            <Server size={18} className="text-orange-500" />
                            {comp.name}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-mono font-bold uppercase">
                            {comp.badge}
                          </span>
                        </div>
                        <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">{comp.role}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-1">
                          <div className="p-2.5 rounded-lg bg-white border border-[#e7e3da]">
                            <strong className="text-stone-900 block mb-0.5">SCALING STRATEGY:</strong>
                            <span className="text-stone-600">{comp.scaling}</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-[#e7e3da]">
                            <strong className="text-stone-900 block mb-0.5">NETWORKING & PORTS:</strong>
                            <span className="text-stone-600">{comp.ports}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* 15 Comprehensive Assessment Quiz */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono text-orange-600 uppercase font-bold">
                        Curriculum Mastery Check
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        15-Question Airflow & Dagster Assessment
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
            onClick={() => navigate("/learning/data-engineering/spark-processing")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e7e3da] text-stone-700 hover:text-stone-900 hover:bg-stone-50 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 11 · Apache Spark</span>
          </button>

          <button
            onClick={() => navigate("/learning/data-engineering")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <span>Next: Module 13 · Real-Time Streaming with Apache Kafka</span>
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
