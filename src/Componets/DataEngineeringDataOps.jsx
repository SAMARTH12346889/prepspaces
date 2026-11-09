// projectx/src/Componets/DataEngineeringDataOps.jsx
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
  Database,
  Search,
  AlertOctagon,
  FileText,
  HelpCircle,
  ChevronRight,
  Eye,
  SlidersVertical,
  Hash,
  ShieldAlert,
  Share2,
  Lock,
  Flame,
  ArrowDownRight,
  Gauge,
  Cloud,
  DollarSign,
  CloudRain,
  Network,
  Box,
  GitCommit,
  GitPullRequest,
  CheckSquare,
  XCircle,
  Pause
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import { DataOpsSection, dataOpsSectionsMeta } from "./DataEngineeringDataOpsSections";

export default function DataEngineeringDataOps() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("docker_builder");
  // 'docker_builder' | 'cicd_runner' | 'terraform_iac' | 'deployment_lab' | 'k8s_orchestrator' | 'migration_quiz'

  // Curriculum section state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtered sections for curriculum
  const categories = useMemo(() => {
    const set = new Set(dataOpsSectionsMeta.map((s) => s.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredSections = useMemo(() => {
    return dataOpsSectionsMeta.filter((s) => {
      const matchCat =
        selectedCategory === "all" || s.category === selectedCategory;
      const matchQuery =
        !searchQuery ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // --------------------------------------------------------------------------
  // WORKBENCH 1: Docker Multi-Stage Containerizer & Layer Cache Inspector
  // --------------------------------------------------------------------------
  const [baseImageType, setBaseImageType] = useState("slim"); // 'full' (1.02 GB) vs 'slim' (185 MB)
  const [cachePipLayer, setCachePipLayer] = useState(true);
  const [useNonRootUser, setUseNonRootUser] = useState(true);
  const [dockerEnvApp, setDockerEnvApp] = useState("production");
  const [isBuildingImage, setIsBuildingImage] = useState(false);
  const [dockerBuildResult, setDockerBuildResult] = useState(null);

  const simulateDockerBuild = () => {
    setIsBuildingImage(true);
    setTimeout(() => {
      const baseMB = baseImageType === "full" ? 1020 : 185;
      const pipCacheHit = cachePipLayer ? "CACHED (0.1s)" : "RE-DOWNLOADED (34.2s)";
      const userStatus = useNonRootUser ? "appuser (UID 1001, Non-Root)" : "root (UID 0 - SECURITY RISK)";

      setDockerBuildResult({
        totalSizeMB: baseMB,
        pipLayerStatus: pipCacheHit,
        user: userStatus,
        layersCount: 6,
        sha: "sha256:7f4a2b918c5e" + Math.floor(Math.random() * 10000)
      });
      setIsBuildingImage(false);
    }, 700);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 2: GitHub Actions CI/CD Pipeline Simulator & Matrix Runner
  // --------------------------------------------------------------------------
  const [ciSimulateBug, setCiSimulateBug] = useState(false); // if true, pytest fails!
  const [ciStage, setCiStage] = useState(0); // 0: idle, 1: checkout, 2: python, 3: lint, 4: pytest, 5: data quality, 6: docker build
  const [isCiRunning, setIsCiRunning] = useState(false);
  const [ciLogs, setCiLogs] = useState([]);

  const runCiPipeline = () => {
    setIsCiRunning(true);
    setCiStage(1);
    setCiLogs(["[CI] Triggered by pull_request on branch 'main' (commit sha: 8f2a1b9)"]);

    setTimeout(() => {
      setCiStage(2);
      setCiLogs((prev) => [...prev, "[Job: Setup] Checked out repository via actions/checkout@v4", "[Job: Python] Configured Python 3.12-slim environment"]);
    }, 600);

    setTimeout(() => {
      setCiStage(3);
      setCiLogs((prev) => [...prev, "[Job: Lint] Running Ruff & Flake8 linter... 0 errors, 0 warnings (Code format clean)"]);
    }, 1200);

    setTimeout(() => {
      if (ciSimulateBug) {
        setCiStage(4);
        setCiLogs((prev) => [
          ...prev,
          "[Job: Pytest] RUNNING tests/unit/test_transform.py...",
          "FAILED: assert result.iloc[0]['amount'] == 500 (Received: -100). Invalid negative amount allowed!",
          "🛑 CI FAILED: 1 failed test. Pull request merge BLOCKED."
        ]);
        setIsCiRunning(false);
      } else {
        setCiStage(4);
        setCiLogs((prev) => [
          ...prev,
          "[Job: Pytest] tests/unit/test_transform.py ............. [100% PASS]",
          "[Job: Pytest] tests/unit/test_extract.py ............... [100% PASS]"
        ]);

        setTimeout(() => {
          setCiStage(5);
          setCiLogs((prev) => [
            ...prev,
            "[Job: DataQuality] Running Great Expectations schema validation...",
            "Assertion passed: 'order_id' is_unique: true, 'amount' > 0: true, 'status' in ['completed']: true"
          ]);

          setTimeout(() => {
            setCiStage(6);
            setCiLogs((prev) => [
              ...prev,
              "[Job: Docker] Built OCI container image: ecommerce-pipeline:sha-8f2a1b9",
              "[Job: OIDC] Authenticated with AWS ECR via GitHub OIDC token (zero static secrets)",
              "✅ CI SUCCESS: All 6 stages passed. Pull request approved for merge into Staging!"
            ]);
            setIsCiRunning(false);
          }, 700);
        }, 700);
      }
    }, 1800);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 3: Terraform Declarative IaC Provisioner & State Machine
  // --------------------------------------------------------------------------
  const [tfEnv, setTfEnv] = useState("staging"); // 'staging' | 'production'
  const [hasDrift, setHasDrift] = useState(false);
  const [tfStage, setTfStage] = useState("ready"); // 'ready' | 'planning' | 'planned' | 'applying' | 'applied'
  const [tfPlanDetails, setTfPlanDetails] = useState(null);

  const runTerraformPlan = () => {
    setTfStage("planning");
    setTimeout(() => {
      setTfPlanDetails({
        env: tfEnv,
        toAdd: hasDrift ? 0 : 3,
        toChange: hasDrift ? 1 : 0,
        toDestroy: 0,
        driftNote: hasDrift
          ? "Drift detected: S3 bucket 'company-lake' tags manually modified in AWS console. Terraform will restore declared tags."
          : "Plan: 3 to add, 0 to change, 0 to destroy (S3 Bucket, IAM Role, Glue DB)."
      });
      setTfStage("planned");
    }, 700);
  };

  const runTerraformApply = () => {
    setTfStage("applying");
    setTimeout(() => {
      setHasDrift(false);
      setTfStage("applied");
    }, 900);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 4: Production Deployment Strategy Laboratory
  // --------------------------------------------------------------------------
  const [deployStrategy, setDeployStrategy] = useState("blue_green"); // 'recreate' | 'rolling' | 'blue_green' | 'canary' | 'shadow'
  const [trafficSplitV2, setTrafficSplitV2] = useState(10); // for Canary (0 to 100%)
  const [simulateV2ErrorSpike, setSimulateV2ErrorSpike] = useState(false);
  const [activeVersionServing, setActiveVersionServing] = useState("v1"); // for Blue/Green

  // --------------------------------------------------------------------------
  // WORKBENCH 5: Kubernetes Batch Orchestration & CronJob Simulator
  // --------------------------------------------------------------------------
  const [k8sWorkloadType, setK8sWorkloadType] = useState("Job"); // 'Job' | 'CronJob'
  const [podMemoryLimitMB, setPodMemoryLimitMB] = useState(1024); // 256 to 4096 MB
  const [datasetBatchSizeMB, setDatasetBatchSizeMB] = useState(1500); // 500 to 3000 MB
  const [k8sExecutionStatus, setK8sExecutionStatus] = useState("idle"); // 'idle' | 'running' | 'completed' | 'oom_killed'

  const triggerK8sJob = () => {
    setK8sExecutionStatus("running");
    setTimeout(() => {
      if (datasetBatchSizeMB > podMemoryLimitMB) {
        setK8sExecutionStatus("oom_killed");
      } else {
        setK8sExecutionStatus("completed");
      }
    }, 800);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 6: Expand-and-Contract Migration Laboratory & 15-Question Quiz
  // --------------------------------------------------------------------------
  const [migrationPhase, setMigrationPhase] = useState(1); // 1: Expand, 2: Migrate/Dual-Write, 3: Validate, 4: Contract

  // 15-Question Quiz State
  const quizQuestions = [
    {
      q: "What is the primary difference in operational focus between DevOps and DataOps?",
      options: [
        "DevOps manages application delivery; DataOps manages reliable, high-quality data pipeline delivery and data correctness",
        "DevOps is for AWS cloud only; DataOps is only for local Docker environments",
        "DataOps eliminates the need for version control and automated testing",
        "DevOps requires Kubernetes; DataOps only uses bash scripts"
      ],
      answer: 0,
      exp: "While DevOps focuses on application software release cycles and service availability, DataOps focuses on data delivery, ensuring both pipeline execution correctness and the semantic accuracy, completeness, and freshness of analytical datasets."
    },
    {
      q: "Why is copying 'requirements.txt' before application source code in a Dockerfile a critical optimization?",
      options: [
        "It prevents Python from creating bytecode (.pyc) files",
        "Docker reuses the cached dependency layer when application code changes, avoiding slow 'pip install' re-executions",
        "Linux permissions do not allow files to be copied after source code",
        "It automatically upgrades Python to the latest patch release"
      ],
      answer: 1,
      exp: "Docker builds images in ordered layers. Because dependencies change less frequently than application code, copying requirements.txt first allows Docker to reuse the cached heavy pip install layer, slashing build times from minutes to seconds."
    },
    {
      q: "What is the primary security vulnerability of embedding static AWS Access Keys in a Dockerfile or GitHub repository secret?",
      options: [
        "Static credentials never expire and risk permanent account compromise if leaked in image layers or commit histories",
        "Static credentials slow down PySpark execution speed by 50%",
        "AWS charges an extra hourly rate for static access keys",
        "Docker cannot parse environment variables containing numbers"
      ],
      answer: 0,
      exp: "Hardcoded or permanent credentials can be exposed through public commits, build layer metadata, or leaked tokens. Modern DataOps uses short-lived temporary credentials via OpenID Connect (OIDC) federation."
    },
    {
      q: "What does idempotency mean in the context of production data engineering pipelines?",
      options: [
        "The pipeline runs in parallel across 100 worker nodes",
        "Executing the same pipeline multiple times with the same input produces the exact same final state without duplicate data",
        "The pipeline automatically converts CSV files into JSON format",
        "The pipeline is written in both Python and Scala"
      ],
      answer: 1,
      exp: "An idempotent pipeline can be safely rerun or retried after failure without causing duplicate records or corrupted aggregates, using techniques like partition replacement, upserts (MERGE), or deterministic deduplication."
    },
    {
      q: "In Terraform, what is the critical purpose of 'Terraform State' (terraform.tfstate)?",
      options: [
        "It compiles HCL syntax into C++ machine code",
        "It maps declared configuration resources to real-world cloud infrastructure objects and tracks metadata and relationships",
        "It stores temporary Git pull request branches",
        "It replaces the AWS Management Console login password"
      ],
      answer: 1,
      exp: "Terraform state acts as the single source of truth mapping your declared configuration files to actual cloud resources, allowing Terraform to calculate resource additions, modifications, or destructions during planning."
    },
    {
      q: "Why should production Terraform state be stored in an S3 remote backend with DynamoDB locking instead of local Git commits?",
      options: [
        "Local state files are always encrypted with AES-256",
        "Remote state enables team collaboration, protects sensitive state attributes, and prevents concurrent conflicting writes via state locks",
        "DynamoDB is required to convert HCL into SQL queries",
        "Git repositories reject files larger than 10 Kilobytes"
      ],
      answer: 1,
      exp: "Committing state to Git risks exposing sensitive plaintext credentials and leads to state divergence among team members. A remote S3 backend with DynamoDB state locking guarantees coordinated, conflict-free team infrastructure management."
    },
    {
      q: "In a Blue-Green deployment for an analytical data service, how is a release cutover executed?",
      options: [
        "All servers in Blue are immediately formatted before Green starts",
        "Traffic or query dispatch is instantly switched from the current stable environment (Blue) to the fully tested new environment (Green)",
        "Blue and Green run on separate physical continents",
        "Green only accepts traffic between midnight and 2 AM"
      ],
      answer: 1,
      exp: "In Blue-Green deployments, the new release is deployed and validated in an identical standby environment (Green). Once verified, traffic router or DNS directs 100% of traffic to Green, with Blue standing by for instant rollback if issues emerge."
    },
    {
      q: "How does the 'Expand-and-Contract' pattern enable zero-downtime database schema migrations for data pipelines?",
      options: [
        "It deletes all legacy columns before creating new ones",
        "It adds the new column first (Expand), supports dual-writing, verifies downstream consumers, and only drops the old column after cutover (Contract)",
        "It compresses tables into ZIP archives during migration",
        "It requires an offline database maintenance window of 6 hours"
      ],
      answer: 1,
      exp: "Expand-and-Contract prevents broken downstream dependencies by never renaming or deleting columns in a single breaking step. Old and new columns coexist during migration until all consumers have transitioned."
    },
    {
      q: "What is the difference between a Kubernetes 'Job' and a Kubernetes 'Deployment' for data workloads?",
      options: [
        "A Job runs a container to completion (batch workload); a Deployment maintains a continuously running set of replicas (services/APIs)",
        "A Job only runs in development; a Deployment only runs in production",
        "Deployments cannot run containerized Python scripts",
        "A Job automatically creates a PostgreSQL database instance"
      ],
      answer: 0,
      exp: "Kubernetes Deployments ensure stateless pods run continuously and restart if terminated. Kubernetes Jobs run batch tasks (like an ETL script) until a specified number of successful completions, then terminate cleanly."
    },
    {
      q: "In Kubernetes, what happens to a data processing Pod when its container memory consumption exceeds its configured 'resources.limits.memory'?",
      options: [
        "Kubernetes automatically increases physical RAM on the worker node",
        "The container is terminated by the Linux OOM-killer with status 'OOMKilled' (Exit Code 137)",
        "The container continues running at half CPU speed",
        "The data is automatically swapped to an S3 bucket"
      ],
      answer: 1,
      exp: "When a container attempts to allocate more memory than its declared limit ceiling, the Linux kernel terminates the offending process with SIGKILL (Exit Code 137), reporting OOMKilled to the Kubernetes kubelet."
    },
    {
      q: "Why is data rollback significantly more complex than application software rollback in data engineering?",
      options: [
        "Container registries do not support historical version tags",
        "Reverting application code to an older commit does not repair or undo corrupt, duplicated, or invalid records already written to the warehouse",
        "Python does not support database update operations",
        "Git commits are permanently erased after 30 days"
      ],
      answer: 1,
      exp: "While application rollback is as simple as redeploying a previous Docker image, data rollback requires identifying corrupted partitions, reconciling downstream aggregates, and reprocessing historical source data."
    },
    {
      q: "What is the primary role of a 'Canary' deployment strategy in production pipeline engineering?",
      options: [
        "To route 100% of traffic to the new version simultaneously",
        "To expose a small fraction of real production traffic (e.g. 5-10%) to the new release to verify error rates and data quality before full rollout",
        "To run tests only on developer laptops",
        "To replace unit testing in GitHub Actions"
      ],
      answer: 1,
      exp: "Canary deployments limit blast radius. By routing a small percentage of workloads to the new version, teams observe telemetry, error budgets, and data validation rules before committing the entire production fleet."
    },
    {
      q: "In Docker Compose, what is the purpose of declaring a named 'volume' for a PostgreSQL service?",
      options: [
        "It speeds up network communication between containers",
        "It persists database files on the host filesystem so data is retained even when containers are stopped or removed",
        "It encrypts all network packets using TLS 1.3",
        "It prevents Docker from creating image layers"
      ],
      answer: 1,
      exp: "Containers have ephemeral filesystems. Declaring a named volume maps the database storage directory (/var/lib/postgresql/data) to persistent host storage, ensuring data survives container recycles."
    },
    {
      q: "Why does successful execution status (Exit Code 0) of a data pipeline NOT prove data correctness?",
      options: [
        "Python always returns exit code 0 even when syntax errors occur",
        "A transformation script can complete without runtime errors while producing mathematically incorrect numbers, schema drift, or dropped records",
        "Docker containers do not support exit code inspection",
        "Databases do not log SQL execution errors"
      ],
      answer: 1,
      exp: "A program can execute smoothly while computing `revenue = price + quantity` instead of `price * quantity`. True DataOps requires data quality testing (assertions on value bounds, null rates, and uniqueness) beyond process exit codes."
    },
    {
      q: "How does OpenID Connect (OIDC) improve security in GitHub Actions CI/CD workflows deploying to AWS?",
      options: [
        "It eliminates long-lived AWS IAM Access Keys from GitHub secrets by exchanging short-lived JWT tokens for temporary STS credentials",
        "It bypasses AWS IAM permission checks entirely",
        "It encrypts all Python scripts before compilation",
        "It makes GitHub repositories private by default"
      ],
      answer: 0,
      exp: "OIDC allows GitHub Actions to authenticate directly with AWS IAM via cryptographic token exchange. AWS STS issues short-lived temporary security credentials scoped strictly to the repository and branch, eliminating static secrets."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuizAnswer = (qIdx, optIdx) => {
    if (showQuizResults) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) correct++;
    });
    return correct;
  }, [quizAnswers, quizQuestions]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans">
      {/* Universal Module Navigation */}
      <ModuleNav currentModuleId="dataops-cicd" />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Course Breadcrumbs & Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <button
              onClick={goBack}
              className="hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              <ArrowLeft size={12} />
              <span>Courses</span>
            </button>
            <span>/</span>
            <span className="hover:text-stone-900">Data Engineering Master Course</span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 19: DataOps, Docker & CI/CD</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-orange-100 text-orange-700 border border-orange-200">
                  MODULE 19 · ADVANCED PRODUCTION ENGINEERING
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-300">
                  GIT · DOCKER · CI/CD · TERRAFORM · K8S
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                DataOps, Docker, CI/CD and Infrastructure as Code
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                Learn how professional data teams engineer, containerize, test, automate, and deploy production pipelines. Master Git branching, Docker multi-stage images, GitHub Actions CI/CD, Terraform declarative IaC, Kubernetes batch orchestration, and zero-downtime release strategies.
              </p>
            </div>

            {/* Mode Switcher Pill Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-xl border border-stone-300 shadow-inner self-start md:self-auto">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className={activeTab === "curriculum" ? "text-orange-600" : ""} />
                <span>Specification & Blueprints (30)</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Cpu size={14} className={activeTab === "workbench" ? "text-orange-600" : ""} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TAB 1: SPECIFICATION & BLUEPRINTS (FULL VERBATIM CURRICULUM)      */}
        {/* ================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Sidebar: Syllabus Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-4 sticky top-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-orange-600" />
                  <span className="font-bold text-sm text-stone-800">Module 19 Syllabus</span>
                </div>
                <span className="text-[11px] font-mono text-stone-500">
                  {dataOpsSectionsMeta.length} Sections
                </span>
              </div>

              {/* Search & Category Filter */}
              <div className="space-y-2">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search sections or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-stone-200 text-xs bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="flex flex-wrap gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-colors ${
                        selectedCategory === cat
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {cat === "all" ? "All Categories" : cat.split("·")[0].trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section List */}
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 [scrollbar-width:thin]">
                {filteredSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSectionId(sec.id)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                        isActive
                          ? "bg-orange-50 text-orange-950 font-semibold border border-orange-200 shadow-sm"
                          : "hover:bg-stone-50 text-stone-700 border border-transparent"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 ${
                          isActive
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {sec.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="truncate leading-tight">{sec.title}</div>
                        <div className="text-[10px] text-stone-400 truncate mt-0.5">
                          {sec.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Workbench Shortcut Card */}
              <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-xs">
                <div className="font-semibold text-orange-900 flex items-center gap-1.5 mb-1">
                  <Sparkles size={13} className="text-orange-600" />
                  <span>Hands-on Engineering Labs</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed mb-2">
                  Test Docker multi-stage caching, simulate GitHub Actions CI runs, provision Terraform state, and observe Kubernetes Pod limits.
                </p>
                <button
                  onClick={() => setActiveTab("workbench")}
                  className="w-full py-1.5 px-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <span>Launch Workbenches</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Right Main Content: Verbatim Section Viewer */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <DataOpsSection sectionId={activeSectionId} />

              {/* Prev / Next Section Controls */}
              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  disabled={activeSectionId <= 0}
                  onClick={() => setActiveSectionId((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <ArrowLeft size={13} />
                  <span>Previous Section</span>
                </button>

                <span className="text-xs font-mono text-stone-500">
                  Section {activeSectionId} of {dataOpsSectionsMeta.length - 1}
                </span>

                <button
                  disabled={activeSectionId >= dataOpsSectionsMeta.length - 1}
                  onClick={() => setActiveSectionId((prev) => Math.min(dataOpsSectionsMeta.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <span>Next Section</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: INTERACTIVE WORKBENCHES (6 PRODUCTION LABS)                */}
        {/* ================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
              {[
                { id: "docker_builder", label: "1. Docker Layer & Cache", icon: Box },
                { id: "cicd_runner", label: "2. GitHub Actions CI/CD", icon: GitPullRequest },
                { id: "terraform_iac", label: "3. Terraform State & Drift", icon: HardDrive },
                { id: "deployment_lab", label: "4. Deployment Strategies", icon: Layers },
                { id: "k8s_orchestrator", label: "5. Kubernetes Batch & Limits", icon: Cpu },
                { id: "migration_quiz", label: "6. Schema Migration & Exam", icon: ShieldCheck }
              ].map((wb) => {
                const Icon = wb.icon;
                const isCur = activeWorkbench === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isCur
                        ? "bg-stone-900 text-white shadow-sm border border-stone-900"
                        : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                    }`}
                  >
                    <Icon size={14} className={isCur ? "text-orange-400" : "text-stone-500"} />
                    <span>{wb.label}</span>
                  </button>
                );
              })}
            </div>

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 1: Docker Multi-Stage Containerizer & Cache          */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "docker_builder" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 1
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Docker Multi-Stage Containerizer & Layer Cache Inspector
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Inspect Dockerfile instruction layer order, dependency build caching, and image size optimization for containerized Python ETL workloads.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 space-y-4">
                    {/* Dockerfile Configuration Controls */}
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="text-xs font-bold text-stone-800">Base Image Selection:</div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setBaseImageType("slim")}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            baseImageType === "slim"
                              ? "bg-white border-orange-500 shadow-sm ring-2 ring-orange-500/20"
                              : "bg-stone-100 border-stone-200 hover:bg-white"
                          }`}
                        >
                          <div className="font-bold text-xs text-stone-900">python:3.12-slim</div>
                          <div className="text-[11px] text-stone-500 mt-0.5">Debian minimal footprint</div>
                          <span className="inline-block mt-2 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold">
                            ~185 MB Image
                          </span>
                        </button>

                        <button
                          onClick={() => setBaseImageType("full")}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            baseImageType === "full"
                              ? "bg-white border-orange-500 shadow-sm ring-2 ring-orange-500/20"
                              : "bg-stone-100 border-stone-200 hover:bg-white"
                          }`}
                        >
                          <div className="font-bold text-xs text-stone-900">python:3.12 (Full)</div>
                          <div className="text-[11px] text-stone-500 mt-0.5">Complete build toolchains</div>
                          <span className="inline-block mt-2 px-1.5 py-0.5 rounded text-[10px] font-mono bg-red-100 text-red-800 font-bold">
                            ~1,020 MB Image
                          </span>
                        </button>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-stone-200">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-stone-700 flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={cachePipLayer}
                              onChange={(e) => setCachePipLayer(e.target.checked)}
                              className="accent-orange-600 rounded"
                            />
                            <span>Copy requirements.txt before code (Enable Layer Cache)</span>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-stone-700 flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={useNonRootUser}
                              onChange={(e) => setUseNonRootUser(e.target.checked)}
                              className="accent-orange-600 rounded"
                            />
                            <span>Create non-root user (appuser, UID 1001)</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-2">
                        <label className="text-xs font-bold text-stone-800 block mb-1">
                          Runtime Environment Variable (APP_ENV)
                        </label>
                        <select
                          value={dockerEnvApp}
                          onChange={(e) => setDockerEnvApp(e.target.value)}
                          className="w-full text-xs p-2 rounded-lg border border-stone-200 bg-white font-mono"
                        >
                          <option value="development">development (Local sample orders)</option>
                          <option value="staging">staging (Pre-production replication)</option>
                          <option value="production">production (Strict warehouse target)</option>
                        </select>
                      </div>

                      <button
                        onClick={simulateDockerBuild}
                        disabled={isBuildingImage}
                        className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
                      >
                        {isBuildingImage ? (
                          <>
                            <RefreshCw size={13} className="animate-spin" />
                            <span>Building OCI Container Image...</span>
                          </>
                        ) : (
                          <>
                            <Play size={13} />
                            <span>Execute Docker Build</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Dockerfile & Build Output Telemetry */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 shadow-inner">
                      <div className="text-[10px] uppercase text-orange-400 font-bold flex items-center justify-between border-b border-stone-800 pb-2">
                        <span>Generated Dockerfile Specification</span>
                        <span>Context: .</span>
                      </div>
                      <pre className="text-emerald-300 text-[11px] leading-relaxed overflow-x-auto [scrollbar-width:thin]">
                        {`FROM python:${baseImageType === "slim" ? "3.12-slim" : "3.12"}

WORKDIR /app
${
  cachePipLayer
    ? `# 1. Dependency layer cached when application code changes!
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2. Frequently changing application code
COPY src/ ./src/
COPY main.py .`
    : `# ANTI-PATTERN: Invalidates pip install cache on EVERY code edit!
COPY . .
RUN pip install -r requirements.txt`
}
${
  useNonRootUser
    ? `# Security best practice: Never run as root in production
RUN useradd --create-home --uid 1001 appuser
USER appuser`
    : `# WARNING: Running container as root UID 0!`
}

ENV APP_ENV=${dockerEnvApp}
CMD ["python", "main.py"]`}
                      </pre>
                    </div>

                    {dockerBuildResult ? (
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
                        <div className="text-xs font-mono font-bold text-stone-800 uppercase flex items-center justify-between">
                          <span>Build Telemetry & Layer Metrics</span>
                          <span className="text-emerald-700 font-bold">Successfully Tagged</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          <div className="p-2.5 rounded bg-white border border-stone-200">
                            <span className="text-[10px] text-stone-400 block uppercase">Final Image Footprint</span>
                            <strong className="text-base text-stone-900">{dockerBuildResult.totalSizeMB} MB</strong>
                          </div>
                          <div className="p-2.5 rounded bg-white border border-stone-200">
                            <span className="text-[10px] text-stone-400 block uppercase">Dependency Pip Layer</span>
                            <strong className="text-sm text-orange-600">{dockerBuildResult.pipLayerStatus}</strong>
                          </div>
                          <div className="p-2.5 rounded bg-white border border-stone-200 col-span-2">
                            <span className="text-[10px] text-stone-400 block uppercase">Runtime Execution User</span>
                            <strong className="text-xs text-stone-800">{dockerBuildResult.user}</strong>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-xs text-stone-400 font-mono bg-stone-50 rounded-xl border border-dashed border-stone-200">
                        Click "Execute Docker Build" to assemble and measure the container image.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 2: GitHub Actions CI/CD Pipeline Simulator           */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "cicd_runner" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 2
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      GitHub Actions CI/CD Pipeline Simulator & Matrix Runner
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Simulate an automated GitHub Actions pipeline responding to a Pull Request. Witness how unit tests and data quality assertions gate production merges.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="text-xs font-bold text-stone-800">Simulate PR Code Quality:</div>
                      <div className="grid grid-cols-1 gap-2">
                        <button
                          onClick={() => setCiSimulateBug(false)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            !ciSimulateBug
                              ? "bg-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/20"
                              : "bg-stone-100 border-stone-200 hover:bg-white"
                          }`}
                        >
                          <div className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-emerald-600" />
                            <span>Valid Commit: Clean Order Transformation</span>
                          </div>
                          <div className="text-[11px] text-stone-500 mt-1">
                            Deduplicates order_id, removes status != completed, positive amount filter.
                          </div>
                        </button>

                        <button
                          onClick={() => setCiSimulateBug(true)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            ciSimulateBug
                              ? "bg-white border-red-500 shadow-sm ring-2 ring-red-500/20"
                              : "bg-stone-100 border-stone-200 hover:bg-white"
                          }`}
                        >
                          <div className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                            <AlertTriangle size={13} className="text-red-600" />
                            <span>Faulty Commit: Allows Negative Amounts (-$100)</span>
                          </div>
                          <div className="text-[11px] text-stone-500 mt-1">
                            Developer removed positive price filter. Pytest will catch data anomaly!
                          </div>
                        </button>
                      </div>

                      <button
                        onClick={runCiPipeline}
                        disabled={isCiRunning}
                        className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
                      >
                        {isCiRunning ? (
                          <>
                            <RefreshCw size={13} className="animate-spin" />
                            <span>Executing CI Pipeline on Ubuntu Runner...</span>
                          </>
                        ) : (
                          <>
                            <Play size={13} />
                            <span>Trigger Pull Request Workflow</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* CI Stages Progress */}
                    <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2 font-mono text-xs">
                      <div className="font-bold text-stone-800 uppercase text-[11px] mb-2 font-sans">
                        Pipeline Stages:
                      </div>
                      {[
                        { stage: 1, label: "actions/checkout@v4" },
                        { stage: 2, label: "actions/setup-python@v5 (3.12)" },
                        { stage: 3, label: "Linting & Static Analysis (Ruff)" },
                        { stage: 4, label: "Pytest Unit Tests (test_transform.py)" },
                        { stage: 5, label: "Data Quality Contract Tests (GE)" },
                        { stage: 6, label: "Docker Build & OIDC ECR Push" }
                      ].map((st) => (
                        <div
                          key={st.stage}
                          className={`p-2 rounded-lg flex items-center justify-between transition-all ${
                            ciStage > st.stage || (ciStage === 6 && st.stage === 6 && !isCiRunning && !ciSimulateBug)
                              ? "bg-emerald-50 text-emerald-800 font-semibold"
                              : ciStage === st.stage
                              ? ciSimulateBug && st.stage === 4
                                ? "bg-red-100 text-red-900 font-bold"
                                : "bg-orange-100 text-orange-900 font-bold animate-pulse"
                              : "bg-stone-50 text-stone-400"
                          }`}
                        >
                          <span>{st.label}</span>
                          {ciStage > st.stage || (ciStage === 6 && st.stage === 6 && !isCiRunning && !ciSimulateBug) ? (
                            <CheckCircle2 size={13} className="text-emerald-600" />
                          ) : ciStage === st.stage && ciSimulateBug && st.stage === 4 ? (
                            <XCircle size={13} className="text-red-600" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Runner Terminal Logs */}
                  <div className="lg:col-span-7">
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 shadow-inner min-h-[380px]">
                      <div className="text-[10px] uppercase text-orange-400 font-bold flex items-center justify-between border-b border-stone-800 pb-2">
                        <span>GitHub Hosted Runner: ubuntu-latest</span>
                        <span>Workflow: ci.yml</span>
                      </div>
                      <div className="space-y-1 text-stone-300 text-[11px] overflow-y-auto max-h-[320px] [scrollbar-width:thin]">
                        {ciLogs.length > 0 ? (
                          ciLogs.map((log, idx) => (
                            <div
                              key={idx}
                              className={`leading-relaxed ${
                                log.includes("FAILED") || log.includes("🛑")
                                  ? "text-red-400 font-bold"
                                  : log.includes("✅") || log.includes("PASS")
                                  ? "text-emerald-300 font-bold"
                                  : "text-stone-300"
                              }`}
                            >
                              {log}
                            </div>
                          ))
                        ) : (
                          <div className="text-stone-500 py-8 text-center">
                            Awaiting workflow trigger. Click "Trigger Pull Request Workflow" to run tests.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 3: Terraform Declarative IaC Provisioner & State     */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "terraform_iac" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 3
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Terraform Declarative IaC Provisioner & State Machine
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Experience Terraform's core lifecycle: Init $\to$ Plan $\to$ Apply. Inspect remote state locking in DynamoDB and simulate infrastructure drift detection.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                      <div>
                        <label className="text-xs font-bold text-stone-800 block mb-1">Target Environment</label>
                        <select
                          value={tfEnv}
                          onChange={(e) => setTfEnv(e.target.value)}
                          className="w-full text-xs p-2 rounded-lg border border-stone-200 bg-white font-mono"
                        >
                          <option value="staging">staging (company-lake-staging)</option>
                          <option value="production">production (company-lake-prod-immutable)</option>
                        </select>
                      </div>

                      <div className="pt-2 border-t border-stone-200">
                        <label className="text-xs font-medium text-stone-700 flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={hasDrift}
                            onChange={(e) => setHasDrift(e.target.checked)}
                            className="accent-orange-600 rounded"
                          />
                          <span>Simulate Manual Console Drift (Someone edited tags in AWS UI)</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <button
                          onClick={runTerraformPlan}
                          disabled={tfStage === "planning" || tfStage === "applying"}
                          className="py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                        >
                          {tfStage === "planning" ? (
                            <RefreshCw size={12} className="animate-spin" />
                          ) : (
                            <FileCode size={12} />
                          )}
                          <span>terraform plan</span>
                        </button>

                        <button
                          onClick={runTerraformApply}
                          disabled={tfStage !== "planned" && tfStage !== "applied"}
                          className="py-2 rounded-lg bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                        >
                          {tfStage === "applying" ? (
                            <RefreshCw size={12} className="animate-spin" />
                          ) : (
                            <CheckSquare size={12} />
                          )}
                          <span>terraform apply</span>
                        </button>
                      </div>
                    </div>

                    {/* Remote State Architecture Card */}
                    <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                      <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                        <Lock size={14} className="text-orange-600" />
                        <span>Remote State Backend Topology</span>
                      </div>
                      <div className="text-[11px] font-mono text-stone-600 space-y-1">
                        <div>S3 Bucket: <code className="text-orange-600">tf-state-company-2026</code></div>
                        <div>DynamoDB Lock Table: <code className="text-stone-800">tf-locks</code></div>
                        <div>State Locking Status: <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">LOCKED DURING APPLY</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Terraform Plan & Spec Output */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 shadow-inner">
                      <div className="text-[10px] uppercase text-orange-400 font-bold flex items-center justify-between border-b border-stone-800 pb-2">
                        <span>Terraform Output Stream</span>
                        <span>AWS Provider ap-south-1</span>
                      </div>
                      <pre className="text-emerald-300 text-[11px] leading-relaxed overflow-x-auto [scrollbar-width:thin]">
                        {tfPlanDetails
                          ? `# terraform plan output:
An execution plan has been generated and is shown below:

Terraform used the selected providers to generate the following execution plan.
Resource actions are indicated with the following symbols:
  ${hasDrift ? "~ modify" : "+ create"}

Terraform will perform the following actions:
  ${
    hasDrift
      ? `~ aws_s3_bucket.data_lake
      ~ tags = {
          ~ "Environment" = "unauthorized-manual-change" -> "${tfEnv}"
          + "Project"     = "ecommerce-data-platform"
        }`
      : `+ aws_s3_bucket.data_lake
      bucket        = "company-lake-${tfEnv}-2026"
      force_destroy = false
  + aws_iam_role.pipeline_role
      name          = "dataops-pipeline-role-${tfEnv}"
  + aws_glue_catalog_database.ecommerce
      name          = "ecommerce_${tfEnv}"`
  }

${tfPlanDetails.driftNote}`
                          : `# Click "terraform plan" to inspect calculated infrastructure changes.`}
                      </pre>
                    </div>

                    {tfStage === "applied" && (
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                          <span>Apply complete! Resources: {hasDrift ? "0 added, 1 changed" : "3 added, 0 changed"}, 0 destroyed.</span>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-700">Lock Released</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 4: Production Deployment Strategy Laboratory        */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "deployment_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 4
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Production Deployment Strategy Laboratory (Blue-Green vs Canary vs Shadow)
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Compare zero-downtime release strategies for production data services. Test traffic shifting, error spike rollbacks, and parallel shadow validation.
                  </p>
                </div>

                {/* Strategy Switcher */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "recreate", name: "Recreate", desc: "Stop v1, start v2. Small downtime." },
                    { id: "rolling", name: "Rolling", desc: "Gradual node replacement. Zero downtime." },
                    { id: "blue_green", name: "Blue-Green", desc: "Dual environments, instant DNS switch." },
                    { id: "canary", name: "Canary", desc: "10% sample traffic, progressive rollout." }
                  ].map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setDeployStrategy(st.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        deployStrategy === st.id
                          ? "bg-white border-orange-500 shadow-sm ring-2 ring-orange-500/20"
                          : "bg-stone-50 border-stone-200 hover:bg-white"
                      }`}
                    >
                      <div className="font-bold text-xs text-stone-900">{st.name}</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">{st.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Strategy Playground */}
                <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-4">
                  {deployStrategy === "blue_green" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-bold text-stone-800">
                          Active Traffic Target:{" "}
                          <span className={`font-mono font-bold uppercase px-2 py-0.5 rounded ${activeVersionServing === "v1" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"}`}>
                            {activeVersionServing === "v1" ? "Blue (v1.0 - Current Stable)" : "Green (v2.0 - New Release)"}
                          </span>
                        </div>
                        <button
                          onClick={() => setActiveVersionServing(activeVersionServing === "v1" ? "v2" : "v1")}
                          className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow"
                        >
                          <RefreshCw size={12} />
                          <span>Switch Traffic Router to {activeVersionServing === "v1" ? "Green (v2)" : "Blue (v1)"}</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className={`p-4 rounded-xl border transition-all ${activeVersionServing === "v1" ? "bg-white border-blue-500 shadow ring-2 ring-blue-500/20" : "bg-stone-100 opacity-60"}`}>
                          <div className="text-xs font-bold text-blue-900 mb-1">Blue Environment (v1.0)</div>
                          <div className="text-xs font-mono text-stone-600">Serving: 100% Production Traffic</div>
                          <div className="text-[11px] text-stone-500 mt-2">Error Rate: 0.01% · Latency: 140ms</div>
                        </div>

                        <div className={`p-4 rounded-xl border transition-all ${activeVersionServing === "v2" ? "bg-white border-emerald-500 shadow ring-2 ring-emerald-500/20" : "bg-stone-100 opacity-60"}`}>
                          <div className="text-xs font-bold text-emerald-900 mb-1">Green Environment (v2.0)</div>
                          <div className="text-xs font-mono text-stone-600">
                            Serving: {activeVersionServing === "v2" ? "100% Production Traffic" : "0% (Warm Standby)"}
                          </div>
                          <div className="text-[11px] text-stone-500 mt-2">Error Rate: 0.00% · Latency: 98ms (Optimized)</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {deployStrategy === "canary" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-800">
                          Canary Traffic Allocation (v2): {trafficSplitV2}%
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setTrafficSplitV2(10)}
                            className="px-2 py-1 rounded bg-white border border-stone-200 text-xs font-mono"
                          >
                            10% (Initial)
                          </button>
                          <button
                            onClick={() => setTrafficSplitV2(50)}
                            className="px-2 py-1 rounded bg-white border border-stone-200 text-xs font-mono"
                          >
                            50% (Ramp)
                          </button>
                          <button
                            onClick={() => setTrafficSplitV2(100)}
                            className="px-2 py-1 rounded bg-emerald-600 text-white text-xs font-mono font-bold"
                          >
                            100% (Promoted)
                          </button>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={trafficSplitV2}
                        onChange={(e) => setTrafficSplitV2(parseInt(e.target.value))}
                        className="w-full accent-orange-600"
                      />

                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-white border border-stone-200">
                          <span className="text-stone-400 block text-[10px]">Baseline Stable (v1.0)</span>
                          <strong className="text-base text-stone-900">{100 - trafficSplitV2}% Traffic</strong>
                        </div>
                        <div className="p-3 rounded-lg bg-white border border-stone-200">
                          <span className="text-stone-400 block text-[10px]">Canary Node (v2.0)</span>
                          <strong className="text-base text-orange-600">{trafficSplitV2}% Traffic</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {deployStrategy === "rolling" && (
                    <div className="space-y-2 text-xs font-mono">
                      <div className="text-stone-700 font-sans font-bold mb-2">Rolling Update Progress across 4 Replicas:</div>
                      <div className="grid grid-cols-4 gap-2">
                        {["Replica #1 (v2)", "Replica #2 (v2)", "Replica #3 (v1)", "Replica #4 (v1)"].map((rep, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-white border border-stone-200 text-center">
                            <div className="text-[10px] text-stone-400">{rep.split(" ")[0]} {rep.split(" ")[1]}</div>
                            <div className={`text-xs font-bold mt-1 ${rep.includes("v2") ? "text-emerald-600" : "text-stone-700"}`}>
                              {rep.split(" ")[2]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {deployStrategy === "recreate" && (
                    <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <AlertTriangle size={14} className="text-amber-600" />
                        <span>Recreate Strategy Characteristics:</span>
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        Best suited for non-critical nightly batch jobs. Version 1 is terminated, leaving a 20-40 second window of zero active consumers while Version 2 initializes and connects to the warehouse.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 5: Kubernetes Batch Orchestration & CronJob Simulator */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "k8s_orchestrator" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      LABORATORY 5
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Kubernetes Batch Orchestration & Resource Limits Simulator
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Deploy containerized Python ETL Jobs and CronJobs on a simulated Kubernetes cluster. Test Pod memory limits and observe OOMKilled (Exit Code 137) failures.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                      <div>
                        <label className="text-xs font-bold text-stone-800 block mb-1">Kubernetes Object Type</label>
                        <select
                          value={k8sWorkloadType}
                          onChange={(e) => setK8sWorkloadType(e.target.value)}
                          className="w-full text-xs p-2 rounded-lg border border-stone-200 bg-white font-mono"
                        >
                          <option value="Job">Job (Run-to-completion one-off batch)</option>
                          <option value="CronJob">CronJob (0 0 * * * Midnight schedule)</option>
                        </select>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-stone-700">Pod Memory Limit (resources.limits.memory):</span>
                          <span className="font-mono font-bold text-stone-900">{podMemoryLimitMB} MiB</span>
                        </div>
                        <input
                          type="range"
                          min="256"
                          max="3072"
                          step="128"
                          value={podMemoryLimitMB}
                          onChange={(e) => setPodMemoryLimitMB(parseInt(e.target.value))}
                          className="w-full accent-orange-600"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-stone-700">Daily Sales Batch Size (Memory footprint):</span>
                          <span className="font-mono font-bold text-stone-900">{datasetBatchSizeMB} MiB</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="2500"
                          step="100"
                          value={datasetBatchSizeMB}
                          onChange={(e) => setDatasetBatchSizeMB(parseInt(e.target.value))}
                          className="w-full accent-orange-600"
                        />
                      </div>

                      <button
                        onClick={triggerK8sJob}
                        disabled={k8sExecutionStatus === "running"}
                        className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
                      >
                        {k8sExecutionStatus === "running" ? (
                          <>
                            <RefreshCw size={13} className="animate-spin" />
                            <span>Kubelet Scheduling Pod on Worker Node...</span>
                          </>
                        ) : (
                          <>
                            <Play size={13} />
                            <span>kubectl apply -f {k8sWorkloadType.toLowerCase()}.yaml</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* K8s YAML & Execution Telemetry */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 shadow-inner">
                      <div className="text-[10px] uppercase text-orange-400 font-bold flex items-center justify-between border-b border-stone-800 pb-2">
                        <span>Manifest: {k8sWorkloadType.toLowerCase()}.yaml</span>
                        <span>Namespace: dataops</span>
                      </div>
                      <pre className="text-emerald-300 text-[11px] leading-relaxed overflow-x-auto [scrollbar-width:thin]">
                        {`apiVersion: batch/v1
kind: ${k8sWorkloadType}
metadata:
  name: orders-${k8sWorkloadType.toLowerCase()}
spec:
  ${k8sWorkloadType === "CronJob" ? `schedule: "0 0 * * *"\n  concurrencyPolicy: Forbid\n  jobTemplate:\n    spec:` : ""}
  backoffLimit: 2
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: orders-pipeline
          image: ecommerce-pipeline:v1
          resources:
            requests:
              memory: "256Mi"
              cpu: "500m"
            limits:
              memory: "${podMemoryLimitMB}Mi"
              cpu: "2"`}
                      </pre>
                    </div>

                    {/* Status Feedback */}
                    {k8sExecutionStatus === "completed" && (
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <div>
                          <strong>Pod Status: Completed (Exit Code 0)</strong>
                          <div className="text-[11px] text-emerald-800 font-sans mt-0.5">
                            Peak heap allocation: {datasetBatchSizeMB} MiB within the {podMemoryLimitMB} MiB limit. Pipeline finished successfully.
                          </div>
                        </div>
                      </div>
                    )}

                    {k8sExecutionStatus === "oom_killed" && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs font-mono flex items-center gap-2">
                        <AlertTriangle size={16} className="text-red-600 shrink-0" />
                        <div>
                          <strong>Pod Status: OOMKilled (Exit Code 137)</strong>
                          <div className="text-[11px] text-red-800 font-sans mt-0.5">
                            Batch dataset ({datasetBatchSizeMB} MiB) exceeded pod ceiling ({podMemoryLimitMB} MiB). Increase container memory limit to recover.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* WORKBENCH 6: Expand-and-Contract Migration & 15-Question Quiz  */}
            {/* -------------------------------------------------------------- */}
            {activeWorkbench === "migration_quiz" && (
              <div className="space-y-6">
                {/* Part A: Expand and Contract Schema Migration */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                      MIGRATION LAB
                    </span>
                    <h2 className="text-xl font-bold text-stone-900">
                      Zero-Downtime Expand-and-Contract Schema Migration Simulator
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Step through the four production phases of safely evolving a database schema without breaking active downstream analytical pipelines or dashboards.
                  </p>

                  {/* Phase Stepper Tabs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {[
                      { p: 1, title: "1. Expand", desc: "Add new column" },
                      { p: 2, title: "2. Dual-Write", desc: "Write both + backfill" },
                      { p: 3, title: "3. Validate", desc: "Switch consumers" },
                      { p: 4, title: "4. Contract", desc: "Drop legacy column" }
                    ].map((phase) => (
                      <button
                        key={phase.p}
                        onClick={() => setMigrationPhase(phase.p)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          migrationPhase === phase.p
                            ? "bg-white border-orange-500 shadow-sm ring-2 ring-orange-500/20"
                            : "bg-stone-50 border-stone-200 hover:bg-white"
                        }`}
                      >
                        <div className="font-bold text-xs text-stone-900">{phase.title}</div>
                        <div className="text-[10px] text-stone-500 mt-0.5">{phase.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                    <div className="text-[10px] uppercase text-orange-400 font-bold flex items-center justify-between">
                      <span>Phase {migrationPhase} SQL Migration & Application State</span>
                      <span>Target: customers table</span>
                    </div>
                    <pre className="text-emerald-300 text-[11px] leading-relaxed overflow-x-auto [scrollbar-width:thin]">
                      {migrationPhase === 1 &&
                        `-- PHASE 1: EXPAND
-- Add the new column as NULLABLE so legacy inserts do not fail.
ALTER TABLE customers ADD COLUMN full_name VARCHAR(255);

-- Status:
-- Legacy Pipeline: Reads & writes 'customer_name' (Continues working without interruption)
-- New Code: Not yet deployed`}
                      {migrationPhase === 2 &&
                        `-- PHASE 2: DUAL-WRITE & BACKFILL
-- 1. Pipeline writes to BOTH customer_name and full_name simultaneously.
-- 2. Backfill existing historical records in batches:
UPDATE customers 
SET full_name = customer_name 
WHERE full_name IS NULL;

-- Status: 100% of rows now have valid data in both columns.`}
                      {migrationPhase === 3 &&
                        `-- PHASE 3: VALIDATE & SWITCH
-- Verify all downstream BI dashboards and queries have transitioned:
SELECT COUNT(*) FROM customers WHERE full_name IS NULL; -- Must be 0
-- Update reporting views and analytics models to query 'full_name' exclusively.`}
                      {migrationPhase === 4 &&
                        `-- PHASE 4: CONTRACT
-- Safe removal: Zero downstream systems depend on legacy column.
ALTER TABLE customers DROP COLUMN customer_name;

-- Zero downtime achieved! Schema evolution complete.`}
                    </pre>
                  </div>
                </div>

                {/* Part B: 15-Question Curriculum Quiz */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-semibold">
                          EXAM READINESS
                        </span>
                        <h2 className="text-xl font-bold text-stone-900">
                          Module 19 Mastery Assessment (15 Questions)
                        </h2>
                      </div>
                      <p className="text-xs text-stone-600">
                        Test your production engineering mastery across DataOps, Docker, CI/CD, Terraform, and Kubernetes.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {showQuizResults ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-stone-700">
                            Score: {quizScore} / {quizQuestions.length} ({((quizScore / quizQuestions.length) * 100).toFixed(0)}%)
                          </span>
                          <button
                            onClick={() => {
                              setShowQuizResults(false);
                              setQuizAnswers({});
                            }}
                            className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold hover:bg-stone-50"
                          >
                            Retake Quiz
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowQuizResults(true)}
                          disabled={Object.keys(quizAnswers).length === 0}
                          className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white font-bold text-xs transition-colors shadow"
                        >
                          Submit & View Explanations
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Question Cards */}
                  <div className="space-y-4">
                    {quizQuestions.map((q, qIdx) => {
                      const userChoice = quizAnswers[qIdx];
                      const isAnswered = userChoice !== undefined;
                      const isCorrect = isAnswered && userChoice === q.answer;

                      return (
                        <div
                          key={qIdx}
                          className={`p-4 rounded-xl border transition-all ${
                            showQuizResults
                              ? isCorrect
                                ? "bg-emerald-50/50 border-emerald-200"
                                : "bg-red-50/50 border-red-200"
                              : "bg-stone-50 border-stone-200"
                          }`}
                        >
                          <div className="flex items-start gap-2.5 mb-3">
                            <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <div className="font-semibold text-xs sm:text-sm text-stone-900 leading-snug">
                              {q.q}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-7">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userChoice === optIdx;
                              let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                              if (showQuizResults) {
                                if (optIdx === q.answer) {
                                  btnClass = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                                } else if (isSelected) {
                                  btnClass = "bg-red-100 border-red-300 text-red-900";
                                } else {
                                  btnClass = "bg-white border-stone-200 opacity-60";
                                }
                              } else if (isSelected) {
                                btnClass = "bg-orange-50 border-orange-500 text-orange-950 font-bold ring-1 ring-orange-500";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                                  className={`p-2.5 rounded-lg border text-left text-xs leading-relaxed transition-all flex items-start gap-2 ${btnClass}`}
                                >
                                  <span className="font-mono text-[10px] text-stone-400 shrink-0 mt-0.5">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {showQuizResults && (
                            <div className="mt-3 ml-7 p-3 rounded-lg bg-white border border-stone-200 text-xs text-stone-700 space-y-1">
                              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                                {isCorrect ? (
                                  <CheckCircle2 size={14} className="text-emerald-600" />
                                ) : (
                                  <AlertTriangle size={14} className="text-red-600" />
                                )}
                                <span>Explanation</span>
                              </div>
                              <p className="leading-relaxed text-stone-600 text-[11px]">{q.exp}</p>
                            </div>
                          )}
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
