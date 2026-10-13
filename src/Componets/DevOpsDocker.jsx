import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  Boxes,
  Layers,
  HardDrive,
  Network,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Activity,
  Tag,
  BookOpen,
  Check,
  Eye,
  Server,
  Database,
  Cpu,
  RefreshCw,
  Zap,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsDocker() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'dockerfile-lab' | 'compose-lab' | 'security-gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: DOCKERFILE MULTI-STAGE BUILD & LAYER CACHE VISUALIZER
  // =========================================================================
  const [buildStrategy, setBuildStrategy] = useState("multistage"); // 'naive' | 'multistage'
  const [cacheScenario, setCacheScenario] = useState("clean"); // 'clean' | 'code-change' | 'deps-change'

  const layerData = useMemo(() => {
    if (buildStrategy === "naive") {
      const isDepsChanged = cacheScenario === "deps-change";
      const isCodeChanged = cacheScenario === "code-change";

      return {
        strategyName: "Naive Single-Stage Build (Anti-Pattern)",
        totalSize: "842 MB",
        buildTime: cacheScenario === "clean" ? "48.2s" : isDepsChanged ? "42.0s" : "38.5s (Rebuilt pip install due to bad COPY ordering!)",
        attackSurface: "High (gcc, make, python3-dev, pip headers present in runtime)",
        layers: [
          { instruction: "FROM python:3.13", size: "340 MB", cached: cacheScenario !== "clean" },
          { instruction: "WORKDIR /app", size: "0 B", cached: cacheScenario !== "clean" },
          { instruction: "COPY . .  <-- ANTI-PATTERN: Copies app.py before dependencies!", size: "45 KB", cached: false },
          {
            instruction: "RUN apt-get update && apt-get install -y gcc libpq-dev",
            size: "320 MB",
            cached: !isCodeChanged && !isDepsChanged,
          },
          {
            instruction: "RUN pip install -r requirements.txt",
            size: "182 MB",
            cached: false, // Invalidated because COPY . . changed!
          },
          { instruction: "CMD [\"python\", \"app.py\"]", size: "0 B", cached: false },
        ],
      };
    } else {
      const isDepsChanged = cacheScenario === "deps-change";
      const isCodeChanged = cacheScenario === "code-change";

      return {
        strategyName: "Optimized Multi-Stage Build (SRE Production Standard)",
        totalSize: "128 MB",
        buildTime: cacheScenario === "clean" ? "32.4s" : isDepsChanged ? "29.1s" : "0.8s (Instant Cache Hit!)",
        attackSurface: "Minimal (No compilers, non-root user, slim runtime base)",
        layers: [
          {
            stage: "Stage 1: Builder (Discarded)",
            instruction: "FROM python:3.13-slim AS builder",
            size: "120 MB",
            cached: cacheScenario !== "clean",
          },
          {
            stage: "Stage 1: Builder",
            instruction: "COPY requirements.txt .",
            size: "2 KB",
            cached: !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 1: Builder",
            instruction: "RUN pip install --prefix=/install -r requirements.txt",
            size: "180 MB (Not in final image!)",
            cached: !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 2: Runtime (Final Artifact)",
            instruction: "FROM python:3.13-slim AS runtime",
            size: "120 MB",
            cached: true,
          },
          {
            stage: "Stage 2: Runtime",
            instruction: "COPY --from=builder /install /usr/local",
            size: "8 MB (Compiled wheels only)",
            cached: !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 2: Runtime",
            instruction: "COPY --chown=app:app app.py .",
            size: "15 KB",
            cached: !isCodeChanged && !isDepsChanged && cacheScenario !== "clean",
          },
          {
            stage: "Stage 2: Runtime",
            instruction: "USER app && CMD [\"/app/start.sh\"]",
            size: "0 B",
            cached: !isCodeChanged && !isDepsChanged && cacheScenario !== "clean",
          },
        ],
      };
    }
  }, [buildStrategy, cacheScenario]);

  // =========================================================================
  // SIMULATOR 2: INTERACTIVE COMPOSE MULTI-SERVICE NETWORK & VOLUME SIMULATOR
  // =========================================================================
  const [composeServicesRunning, setComposeServicesRunning] = useState(true);
  const [databaseVolumeActive, setDatabaseVolumeActive] = useState(true);
  const [notesList, setNotesList] = useState([
    { id: 1, message: "Deploy initial notes-api:1.0.0", created_at: "2026-10-09 20:10:00" },
    { id: 2, message: "Configure non-root user 'app' (UID 1000)", created_at: "2026-10-09 20:25:00" },
  ]);
  const [inputNote, setInputNote] = useState("");
  const [dnsLog, setDnsLog] = useState([
    "API Container connected to 'frontend' and 'backend' networks.",
    "Database Container connected to 'backend' (internal: true).",
    "Embedded DNS 127.0.0.11 resolved 'db' -> 172.28.0.2 (Port 5432).",
    "PostgreSQL 18 volume mounted to /var/lib/postgresql from 'postgres_data'.",
    "API read_only root filesystem active; writable /tmp backed by tmpfs.",
  ]);

  const handleCreateNote = () => {
    if (!composeServicesRunning) {
      setDnsLog((prev) => ["[CRITICAL] 502 Bad Gateway: API container is down!", ...prev.slice(0, 7)]);
      return;
    }
    if (!inputNote.trim()) return;

    const newNote = {
      id: notesList.length + 1,
      message: inputNote.trim(),
      created_at: new Date().toISOString().replace("T", " ").substring(0, 19),
    };

    setNotesList([newNote, ...notesList]);
    setInputNote("");
    setDnsLog((prev) => [
      `POST /notes -> 201 Created (Inserted row ID #${newNote.id} into PostgreSQL table 'notes')`,
      ...prev.slice(0, 7),
    ]);
  };

  const handleComposeDown = () => {
    setComposeServicesRunning(false);
    setDnsLog((prev) => [
      "$ docker compose down",
      "Stopped container notes-app-api-1",
      "Stopped container notes-app-db-1",
      "Removed networks: notes-app_frontend, notes-app_backend",
      "Named volume 'postgres_data' PRESERVED on host storage.",
      ...prev.slice(0, 7),
    ]);
  };

  const handleComposeUp = () => {
    setComposeServicesRunning(true);
    setDnsLog((prev) => [
      "$ docker compose up -d",
      "Created network notes-app_frontend, notes-app_backend",
      "Started notes-app-db-1 (Healthy: pg_isready passed)",
      "Started notes-app-api-1 (Healthy: /readyz passed)",
      databaseVolumeActive
        ? `Mounted existing volume 'postgres_data': Re-attached ${notesList.length} persisted records.`
        : "Created empty volume 'postgres_data'. Zero records present.",
      ...prev.slice(0, 7),
    ]);
  };

  const handleComposeDownVolumeWipe = () => {
    setComposeServicesRunning(false);
    setDatabaseVolumeActive(false);
    setNotesList([]);
    setDnsLog((prev) => [
      "$ docker compose down -v  <-- WARNING: -v destroys volumes!",
      "Removed container notes-app-api-1",
      "Removed container notes-app-db-1",
      "DELETED VOLUME 'postgres_data'! All persisted database rows erased.",
      ...prev.slice(0, 7),
    ]);
  };

  // =========================================================================
  // SIMULATOR 3: CONTAINER SECURITY & SRE INCIDENT GAMEDAY
  // =========================================================================
  const incidentScenarios = [
    {
      id: "inc-1",
      title: "Incident 1: Plaintext Secret Leaked in Image Layer History",
      symptom: "Security scan by Docker Scout flagged a hardcoded AWS_SECRET_ACCESS_KEY inside image layer sha256:7f8a9.",
      codeSnippet: `# Dockerfile inspection:
FROM python:3.13-slim
ENV AWS_SECRET_ACCESS_KEY="AKIAIOSFODNN7EXAMPLESECRET"
RUN aws s3 cp s3://internal-bucket/config.json /app/config.json
ENV AWS_SECRET_ACCESS_KEY=""  <-- Author tried to 'delete' the secret`,
      question: "The author argues that setting the variable to empty string in the next line deleted the secret. Is the image safe to push?",
      options: [
        {
          id: "opt-a",
          label: "Yes: Since the final container environment shows an empty string, the key is gone.",
          correct: false,
          explanation: "Dangerous misconception! Each Dockerfile instruction generates an immutable filesystem layer. Anyone running 'docker history' or extracting the layer tarball can read the full secret key in layer 2."
        },
        {
          id: "opt-b",
          label: "No: Image layers are immutable. Use BuildKit secret mounts (--mount=type=secret) or runtime secrets, revoke the exposed key immediately, and rebuild without secrets in instructions.",
          correct: true,
          explanation: "Correct! Docker explicitly states that ENV and ARG instructions persist in image metadata. Secrets must be mounted ephemerally using BuildKit secret mounts or supplied at container runtime via Docker secrets."
        },
        {
          id: "opt-c",
          label: "Yes, but only if you tag the image as 'private'.",
          correct: false,
          explanation: "Tagging does not alter layer immutability or protect against authorized users reading the plaintext metadata."
        }
      ]
    },
    {
      id: "inc-2",
      title: "Incident 2: API Crash: Read-Only Root Filesystem with tmpfs Missing",
      symptom: "When deployed with 'read_only: true', Gunicorn fails immediately with: [Errno 30] Read-only file system: '/tmp/gunicorn.pid'.",
      codeSnippet: `# compose.yaml snippet:
services:
  api:
    image: notes-api:1.0.0
    read_only: true
    # Notice: No tmpfs mount configured for temporary process files!`,
      question: "How should an SRE remediate this failure while maintaining the security benefit of a read-only root filesystem?",
      options: [
        {
          id: "opt-a",
          label: "Disable read_only: true and run the container with full root write permissions.",
          correct: false,
          explanation: "This destroys the principle of least privilege and increases container compromise blast radius."
        },
        {
          id: "opt-b",
          label: "Add a 'tmpfs: [/tmp, /run]' mount to compose.yaml so transient runtime caches use memory, keeping the OS root immutable.",
          correct: true,
          explanation: "Exact SRE pattern: Combine 'read_only: true' with an in-memory tmpfs mounted at /tmp or /run. This allows Gunicorn and Python to write ephemeral pid and cache files without compromising container immutability."
        },
        {
          id: "opt-c",
          label: "Change the container user to root so it can override the read-only flag.",
          correct: false,
          explanation: "Root users cannot bypass an OS-level read-only mount and violates container security standards."
        }
      ]
    },
    {
      id: "inc-3",
      title: "Incident 3: Missing Ingress: Loopback 127.0.0.1 vs Wildcard 0.0.0.0 Listener",
      symptom: "Container is running and healthy, but 'curl http://localhost:8000' from the host returns 'Connection refused' or empty reply.",
      codeSnippet: `# Inside start.sh:
exec gunicorn --bind 127.0.0.1:8000 app:app

# Host command:
docker run -p 127.0.0.1:8000:8000 notes-api:1.0.0`,
      question: "Why does binding Gunicorn to 127.0.0.1 inside the container prevent host access via '-p 8000:8000'?",
      options: [
        {
          id: "opt-a",
          label: "Because port 8000 is reserved by the Linux kernel for audio drivers.",
          correct: false,
          explanation: "Port 8000 is a standard unprivileged user port."
        },
        {
          id: "opt-b",
          label: "Inside a container's network namespace, 127.0.0.1 is the container's isolated loopback interface. Host-forwarded packets arrive on eth0 (virtual bridge), requiring the process to bind to 0.0.0.0.",
          correct: true,
          explanation: "Fundamental Linux network namespace principle: 127.0.0.1 only accepts packets generated inside that container's loopback namespace. To receive traffic forwarded from the Docker bridge/host, the application must bind to 0.0.0.0 (all interfaces)."
        },
        {
          id: "opt-c",
          label: "Docker Desktop requires all web servers to run on port 80.",
          correct: false,
          explanation: "Docker can map any unprivileged host port to any container port."
        }
      ]
    },
    {
      id: "inc-4",
      title: "Incident 4: Shutdown Hang: 10-Second Delay and SIGKILL Termination",
      symptom: "Running 'docker stop api' always hangs for exactly 10 seconds before terminating with exit code 137.",
      codeSnippet: `# Dockerfile instruction:
CMD python app.py   <-- Note: Shell form (not Exec form!)

# Process list inside container:
PID 1 -> /bin/sh -c python app.py
PID 7 -> python app.py`,
      question: "Why does shell form cause the container to hang for 10 seconds on shutdown, and how do you fix it?",
      options: [
        {
          id: "opt-a",
          label: "Shell form launches /bin/sh as PID 1, which does not forward SIGTERM to child processes. Docker waits 10s timeout, then sends SIGKILL. Fix: Use exec form CMD [\"python\", \"app.py\"].",
          correct: true,
          explanation: "Authoritative process supervision mechanic: When using shell form, /bin/sh becomes PID 1. Standard shells do not forward signals like SIGTERM to child processes. Docker's grace period (10s) expires, forcing an ungraceful SIGKILL. Exec form (or using 'exec' in start.sh) runs Python as PID 1, allowing graceful termination."
        },
        {
          id: "opt-b",
          label: "Python scripts cannot receive Linux signals.",
          correct: false,
          explanation: "Python handles SIGTERM and SIGINT natively when running as PID 1 or when wrapped properly."
        },
        {
          id: "opt-c",
          label: "Add 'kill -9' to .dockerignore.",
          correct: false,
          explanation: ".dockerignore only affects build context file copying, not process termination."
        }
      ]
    },
    {
      id: "inc-5",
      title: "Incident 5: PostgreSQL 18 Volume Target Migration Data Loss",
      symptom: "A team upgraded to the official postgres:18 image using volume target '/var/lib/postgresql/data'. Upon container restart, all database records disappeared.",
      codeSnippet: `# Faulty compose.yaml:
services:
  db:
    image: postgres:18
    volumes:
      - pg_data:/var/lib/postgresql/data  <-- Pre-v18 legacy path!`,
      question: "Why did data persistence fail in PostgreSQL 18 with this configuration?",
      options: [
        {
          id: "opt-a",
          label: "PostgreSQL 18 disabled named volume support.",
          correct: false,
          explanation: "Named volumes are a core Docker feature independent of database engine."
        },
        {
          id: "opt-b",
          label: "Official postgres:18 updated its default PGDATA location to '/var/lib/postgresql'. Mounting to the legacy '/data' subdirectory left the actual data directory in the ephemeral container layer.",
          correct: true,
          explanation: "Exact Docker official image documentation update: PostgreSQL 18 changed the base data target to /var/lib/postgresql. Mounting the volume to the old /data path meant actual database files were written to the container's ephemeral writable layer and discarded upon recreation."
        },
        {
          id: "opt-c",
          label: "PostgreSQL 18 requires mounting directly to /etc/postgresql.",
          correct: false,
          explanation: "/etc/postgresql stores configuration files, not the database cluster table blocks."
        }
      ]
    }
  ];

  const [selectedIncidentIndex, setSelectedIncidentIndex] = useState(0);
  const [incidentAnswers, setIncidentAnswers] = useState({});

  const handleIncidentAnswer = (incId, optId) => {
    setIncidentAnswers((prev) => ({ ...prev, [incId]: optId }));
  };

  // =========================================================================
  // TOPIC CURRICULUM DATA (10 COMPREHENSIVE TOPICS)
  // =========================================================================
  const topics = useMemo(
    () => [
      {
        id: "concept-containers",
        number: "01",
        title: "Containers vs. Virtual Machines & Kernel Primitives",
        badge: "Kernel Namespaces & cgroups",
        summary:
          "The 'it works on my machine' trap. Containers share the host Linux kernel via namespaces and control groups (cgroups), whereas VMs run an entire guest OS kernel atop a hypervisor. The 4 core terms: Dockerfile, Image, Container, and Registry.",
        details: [
          {
            heading: "The Container Paradigm vs. Heavy Hypervisors",
            body: "In traditional virtualization, Type-2 hypervisors (VirtualBox, VMware) emulate virtual CPU, RAM, and hardware devices to boot an entire independent Guest OS kernel (consuming gigabytes of memory and taking 30–60 seconds to boot). In contrast, a container is simply a standard Linux process running directly on the host kernel, isolated through kernel boundaries. Containers start in milliseconds and share the host kernel page cache.",
          },
          {
            heading: "The Academic Operating System Foundation: Namespaces",
            body: "As taught in MIT Operating System Engineering, Stanford CS111, and Cambridge OS coursework, Linux process isolation relies on 6 fundamental kernel namespaces:\n- PID Namespace: Provides an isolated process ID space (container process sees itself as PID 1).\n- NET Namespace: Dedicated virtual network interfaces, routing tables, and port spaces.\n- MNT Namespace: Isolated filesystem mount points (hiding host disk hierarchies).\n- IPC Namespace: Isolates inter-process shared memory and POSIX message queues.\n- UTS Namespace: Dedicated hostname and domain names.\n- USER Namespace: Maps container-internal root (UID 0) to an unprivileged host UID.",
          },
          {
            heading: "Control Groups (cgroups): Resource Throttling & OOM Protection",
            body: "While namespaces control WHAT a container can see, Control Groups (cgroups v1/v2) control HOW MUCH resource it can consume. cgroups enforce strict limits on CPU shares, memory ceilings, disk I/O bandwidth, and maximum process counts (PID limits). If a container exceeds its memory cgroup limit, the Linux kernel Out-Of-Memory (OOM) killer terminates processes inside that container without crashing the host OS.",
          },
          {
            heading: "The Four Fundamental Terms",
            body: "1. Dockerfile: Declarative text script describing how to construct a filesystem snapshot.\n2. Image: Immutable, cryptographically hashed, read-only multi-layered template containing dependencies and code.\n3. Container: A runnable, isolated process instance created from an image with an ephemeral writable layer.\n4. Registry: A centralized service (Docker Hub, AWS ECR, GitHub Container Registry) that stores and distributes versioned images.",
          },
        ],
        codeSnippet: `# Verify Docker engine and kernel capabilities
docker --version
docker info

# Run your first diagnostic container
docker run --rm hello-world

# Inspect container process isolation from host
docker run -d --name web-test -p 127.0.0.1:8080:80 nginx
docker inspect --format '{{.State.Pid}}' web-test  # Shows host PID!
docker top web-test                               # Shows running processes`,
      },
      {
        id: "dockerfile-mechanics",
        number: "02",
        title: "Dockerfiles & Core Instruction Architecture",
        badge: "Syntax & PID 1 Supervision",
        summary:
          "Deconstructing Dockerfile instructions: FROM, WORKDIR, COPY, RUN, ENV, ARG, USER, EXPOSE, ENTRYPOINT, and CMD. Exec form vs shell form and PID 1 signal handling.",
        details: [
          {
            heading: "Core Dockerfile Instructions",
            body: "- FROM: Initializes a new build stage and sets the Base Image.\n- WORKDIR: Sets the working directory for subsequent instructions (automatically creates directory if missing).\n- COPY: Copies files from the build context into the container filesystem (always prefer COPY over ADD).\n- RUN: Executes commands during image build time and commits the result as a new image layer.\n- ENV: Sets persistent environment variables available during build and at runtime.\n- ARG: Defines build-time-only variables (never bake secrets into ARG!).\n- USER: Drops root privileges and switches to an unprivileged user UID/GID.\n- EXPOSE: Documents intended ports (pure metadata; does not publish to host).",
          },
          {
            heading: "ENTRYPOINT vs. CMD",
            body: "- ENTRYPOINT defines the default binary or executable for the container (e.g., `ENTRYPOINT [\"python\"]`).\n- CMD supplies default parameters or arguments that can be overridden by CLI arguments when running `docker run`.\nWhen used together, `ENTRYPOINT [\"python\"]` and `CMD [\"app.py\"]` allows the user to override `app.py` with `test.py` via `docker run my-image test.py`.",
          },
          {
            heading: "Exec Form vs. Shell Form: The PID 1 Signal Trap",
            body: "There are two syntax forms for CMD and ENTRYPOINT:\n1. Shell Form: `CMD python app.py` $\\rightarrow$ Spawns `/bin/sh -c 'python app.py'`. The shell becomes PID 1 and DOES NOT forward signals like `SIGTERM`. When stopping the container, Python never receives the shutdown signal, hangs for 10 seconds, and gets killed abruptly by `SIGKILL`.\n2. Exec Form (MANDATORY): `CMD [\"python\", \"app.py\"]` $\\rightarrow$ Runs Python directly as PID 1, receiving signals cleanly.",
          },
          {
            heading: "EXPOSE vs. -p (Host Port Publishing)",
            body: "`EXPOSE 8000` is documentation only; it does not bind to host interfaces. To make a container port reachable from your computer, you must explicitly publish it using `-p <host-ip>:<host-port>:<container-port>`, such as `-p 127.0.0.1:8000:8000`.",
          },
        ],
        codeSnippet: `# Production Python Dockerfile
FROM python:3.13-slim

WORKDIR /app

# Security: Create non-root system user
RUN groupadd --system app && useradd --system --gid app --home-dir /app app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY --chown=app:app app.py .

USER app

EXPOSE 8000

# Exec form ensures proper signal forwarding
CMD ["python", "app.py"]`,
      },
      {
        id: "layers-caching",
        number: "03",
        title: "Image Layers, OverlayFS & Build Cache Optimization",
        badge: "OverlayFS & Layer Invalidation",
        summary:
          "How union filesystems (OverlayFS) work. Ordering instructions to maximize build cache hits. Preventing build context bloat with .dockerignore.",
        details: [
          {
            heading: "How OverlayFS & Union Mounts Work",
            body: "Docker images are composed of stacked read-only layers using the Linux OverlayFS storage driver. Each instruction in a Dockerfile that modifies files (`RUN`, `COPY`, `ADD`) creates a new immutable layer (`diff` directory). When a container runs, Docker attaches a thin, read-write 'container layer' on top. Any file modifications made during runtime are captured in this ephemeral upper layer using copy-on-write (CoW).",
          },
          {
            heading: "Instruction Ordering & Cache Invalidation",
            body: "Docker evaluates instructions sequentially from top to bottom. If an instruction's inputs have not changed, Docker reuses the cached layer from a previous build.\nCRITICAL RULE: If a layer changes, that layer and ALL SUBSEQUENT LAYERS ARE INVALIDATED!\nAnti-Pattern: Running `COPY . .` before `RUN pip install -r requirements.txt`. Any small edit to `README.md` or `app.py` invalidates `COPY . .`, forcing Docker to re-download and re-install all Python dependencies every single build!",
          },
          {
            heading: "The Golden Dependency Caching Pattern",
            body: "Always copy dependency declarations (`package.json`, `requirements.txt`, `go.mod`) first, execute dependency installation, and only THEN copy application source code. Since dependencies change much less frequently than application code, 95% of your builds will hit the cache in < 1 second.",
          },
          {
            heading: ".dockerignore Hygiene",
            body: "When you run `docker build .`, the Docker CLI sends the entire directory ('build context') to the Docker daemon. Unfiltered build contexts send huge git histories (`.git`), virtual environments (`.venv`), local secrets (`.env`), and compiled bytecode (`__pycache__`), slowing down builds and risking accidental secret leakage. Always configure a strict `.dockerignore` file.",
          },
        ],
        codeSnippet: `# Inspect layer composition and sizes
docker image history my-app:1.0

# Recommended .dockerignore
.git
.github
.env
.env.*
secrets/
.venv/
venv/
__pycache__/
*.pyc
*.log`,
      },
      {
        id: "multistage-builds",
        number: "04",
        title: "Multi-Stage Builds: Production-Grade Artifacts",
        badge: "Attack Surface Minimization",
        summary:
          "Separating build toolchains (compilers, build headers) from runtime artifacts. Copying outputs with 'COPY --from=builder'. Slashing image size from 900MB to 120MB.",
        details: [
          {
            heading: "The Problem with Single-Stage Builds",
            body: "Compiling native C extensions (like `psycopg`, `cryptography`, or Go/Rust binaries) requires installing `gcc`, `make`, `g++`, and OS header packages (`libpq-dev`). In a single-stage build, these compiler tools and package caches remain permanently baked into the final image, swelling image size by 700MB+ and dramatically expanding the container's CVE security attack surface.",
          },
          {
            heading: "The Multi-Stage Build Architecture",
            body: "Introduced by Docker to eliminate intermediate build scripts, Multi-Stage Builds allow multiple `FROM` instructions in a single Dockerfile:\n1. Builder Stage: Uses a complete SDK image, installs compilers, builds dependencies into an isolated directory (e.g. `/install`).\n2. Runtime Stage: Starts from a pristine, minimal base image (`python:3.13-slim` or distroless). Copies ONLY the compiled artifacts using `COPY --from=builder /install /usr/local`.\nAll compilers, dev headers, and build caches are completely discarded!",
          },
          {
            heading: "Operational & Security Benefits",
            body: "- 85% Image Size Reduction: Faster network pulls across CI/CD runners and Kubernetes nodes.\n- Attack Surface Minimization: Attackers who achieve remote code execution inside the container find no compilers or build tools to compile privilege escalation exploits.",
          },
        ],
        codeSnippet: `# Production Multi-Stage Dockerfile
FROM python:3.13-slim AS builder

WORKDIR /build
COPY requirements.txt .

# Install dependencies into dedicated prefix
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# Final Pristine Runtime Stage
FROM python:3.13-slim AS runtime

WORKDIR /app
# Copy only the compiled Python packages
COPY --from=builder /install /usr/local
COPY app.py .

CMD ["python", "app.py"]`,
      },
      {
        id: "storage-volumes",
        number: "05",
        title: "Volumes, Bind Mounts & Persistent Storage",
        badge: "Storage Drivers & PostgreSQL 18",
        summary:
          "The ephemeral container layer vs. Named Volumes vs. Bind Mounts vs. tmpfs. Why PostgreSQL data disappears if misconfigured. The PostgreSQL 18 mount path update.",
        details: [
          {
            heading: "The Ephemeral Writable Layer Trap",
            body: "Any data written to a container's default filesystem resides in its ephemeral writable layer. When a container is deleted (`docker rm`), that writable layer is destroyed instantly. Production databases (PostgreSQL, MySQL, Redis) must NEVER store state in the container writable layer.",
          },
          {
            heading: "The Three Types of Mounts",
            body: "1. Named Volumes (`--mount type=volume,source=my_data,target=/data`): Managed exclusively by Docker inside `/var/lib/docker/volumes/`. Isolated from host OS direct access; survives container removal; best for databases and stateful services.\n2. Bind Mounts (`--mount type=bind,source=$PWD,target=/app`): Maps an exact directory or file from the host filesystem into the container. Excellent for local code hot-reloading during development.\n3. tmpfs Mounts (`--mount type=tmpfs,target=/tmp`): Persisted purely in host RAM. Never written to disk; ideal for sensitive in-memory secrets and transient caches on read-only containers.",
          },
          {
            heading: "Critical 2026/PostgreSQL 18 Update: Volume Target",
            body: "For years, earlier PostgreSQL images documented `/var/lib/postgresql/data` as the volume target. Official Docker documentation for PostgreSQL 18 specifies that `/var/lib/postgresql` is the volume target. If an engineer mounts to the legacy `/data` subpath on PostgreSQL 18, database files are written to the container's ephemeral layer and disappear upon container recreation!",
          },
        ],
        codeSnippet: `# Create and inspect a named volume
docker volume create postgres_data
docker volume inspect postgres_data

# Run PostgreSQL with persistent named volume
docker run -d \\
  --name db \\
  -e POSTGRES_PASSWORD=secret \\
  -v postgres_data:/var/lib/postgresql \\
  postgres:18

# Read-only bind mount for development
docker run --rm -v "$(pwd)":/app:ro python:3.13-slim ls -la /app`,
      },
      {
        id: "networking-dns",
        number: "06",
        title: "Docker Networking & Embedded Service Discovery",
        badge: "Bridge Networks & DNS 127.0.0.11",
        summary:
          "Default bridge vs User-defined bridge networks. Embedded DNS service discovery by container name. Network isolation: Internal networks and securing database ports.",
        details: [
          {
            heading: "Default Bridge vs. User-Defined Bridge Networks",
            body: "When Docker starts without custom configuration, containers attach to the legacy default `bridge`. The default bridge DOES NOT support automatic DNS resolution between containers (requiring fragile IP addresses or legacy `--link` flags). User-defined bridge networks (`docker network create app-net`) automatically enable Docker's embedded DNS server (`127.0.0.11`), allowing containers to resolve peer services by container name (e.g. `ping db`).",
          },
          {
            heading: "Host Port Binding: 127.0.0.1 vs. 0.0.0.0",
            body: "When publishing ports via `-p 8080:8000`, Docker binds to `0.0.0.0:8080` (all public network interfaces) by default, exposing the container to the local LAN or public internet. In local development or multi-tier architectures, always bind explicitly to loopback: `-p 127.0.0.1:8080:8000` to prevent unintended external exposure.",
          },
          {
            heading: "Network Segmentation Principle",
            body: "Never put all containers on a single flat network. Modern microservices use segmented networks:\n- `frontend` network: API container and reverse proxy (Nginx/Traefik).\n- `backend` network (`internal: true`): API container and PostgreSQL database.\nThe database has NO published host port and NO external internet route. Only the API can connect to port 5432.",
          },
        ],
        codeSnippet: `# Create isolated application network
docker network create --driver bridge app-network

# Run database on app-network without publishing ports to host
docker run -d --name db --network app-network postgres:18

# Run API connected to app-network (resolves 'db' via Docker DNS)
docker run -d --name api --network app-network -p 127.0.0.1:8000:8000 notes-api:1.0.0`,
      },
      {
        id: "registries-tags",
        number: "07",
        title: "Registries, Tags, Immutability & Image Security",
        badge: "Digest Pinning & Docker Scout",
        summary:
          "Registry taxonomy: registry/namespace/repo:tag. Why tags are mutable pointers. Pinning immutable SHA-256 digests. Generating SBOMs and scanning with Docker Scout.",
        details: [
          {
            heading: "The Structure of an Image Reference",
            body: "Every container image reference conforms to the standard specification:\n`[registry_host[:port]/][namespace/]repository[:tag|@digest]`\nFor example, `docker.io/library/nginx:latest` or `ghcr.io/company/api:1.0.0`.\nIf registry is omitted, Docker defaults to Docker Hub (`docker.io`).",
          },
          {
            heading: "The Peril of Mutable Tags vs. Immutable Digests",
            body: "A Docker tag is merely a movable text alias. The tag `python:3.13-slim` or `latest` changes whenever upstream maintains an update. In production CI/CD pipelines, relying on mutable tags means two builds on different days can produce different binaries. For absolute reproducibility, pin base images by their immutable cryptographic SHA-256 digest:\n`FROM python:3.13-slim@sha256:7f3a92...`",
          },
          {
            heading: "Software Bill of Materials (SBOM) & Vulnerability Scanning",
            body: "Modern DevSecOps mandates visibility into every package installed in an image:\n- `docker scout cves <image>`: Scans image layers for known CVE vulnerabilities.\n- `docker sbom <image>`: Generates a complete Software Bill of Materials in SPDX or CycloneDX format, cataloging every OS and language dependency.",
          },
        ],
        codeSnippet: `# Authenticate and tag image
docker tag notes-api:1.0.0 myorg/notes-api:1.0.0
docker login
docker push myorg/notes-api:1.0.0

# Pinning by immutable cryptographic digest in Dockerfile:
# FROM python:3.13-slim@sha256:32662c90a184f4f346db3b...

# Inspect image vulnerabilities with Docker Scout
docker scout quickview notes-api:1.0.0`,
      },
      {
        id: "container-security",
        number: "08",
        title: "Production Docker Security & Hardening Doctrine",
        badge: "Non-Root & Capability Dropping",
        summary:
          "Running non-root (`USER app`). Eliminating hardcoded secrets. Read-only root filesystem with tmpfs. Dropping all Linux capabilities (`cap_drop: ALL`).",
        details: [
          {
            heading: "Rule 1: Never Run as Root Inside Containers",
            body: "By default, processes inside containers run as UID 0 (root). If an attacker achieves command injection or finds a kernel privilege escalation vulnerability, running as root makes breakout much easier. Always create a dedicated system user:\n`RUN groupadd -r app && useradd -r -g app app`\n`USER app`",
          },
          {
            heading: "Rule 2: Read-Only Root Filesystem with tmpfs",
            body: "Configure `read_only: true` on application containers. This prevents an attacker from downloading malicious payloads, installing rootkits, or modifying application source files. Provide write access only to transient memory directories via `tmpfs: [/tmp, /run]`.",
          },
          {
            heading: "Rule 3: Drop All Linux Kernel Capabilities",
            body: "Linux divides root privileges into fine-grained capabilities (`CAP_NET_RAW`, `CAP_SYS_ADMIN`, `CAP_CHOWN`). Standard application containers do not need these capabilities. Follow least privilege:\n`cap_drop: [ALL]`\n`security_opt: [no-new-privileges:true]`",
          },
          {
            heading: "Rule 4: Never Mount the Docker Socket",
            body: "Never mount `/var/run/docker.sock` into an application container! Access to the Docker socket allows any container process to communicate with the Docker daemon and launch privileged containers on the host, granting instant root host takeover.",
          },
        ],
        codeSnippet: `# Production Security Hardening in compose.yaml
services:
  api:
    image: notes-api:1.0.0
    read_only: true
    tmpfs:
      - /tmp
    cap_drop:
      - ALL
    security_opt:
      - no-new-privileges:true
    pids_limit: 100`,
      },
      {
        id: "docker-compose",
        number: "09",
        title: "Docker Compose: Multi-Service Architecture",
        badge: "Declarative YAML & Health Checks",
        summary:
          "Composing multi-tier applications. Declarative YAML syntax. Health checks with 'condition: service_healthy'. File-backed secrets.",
        details: [
          {
            heading: "Declarative Multi-Service Definition",
            body: "Docker Compose defines the desired state of your entire application stack in a single `compose.yaml` file: services, volumes, networks, secrets, and environment configurations. This enables team members to boot an entire production-replica stack with a single command: `docker compose up -d`.",
          },
          {
            heading: "The Dependency Ordering Race Condition",
            body: "A common beginner bug: `depends_on: [db]`. By default, `depends_on` only waits until the `db` container starts executing, NOT until PostgreSQL is ready to accept socket connections! The API boots, tries to query tables, crashes immediately, and enters a restart loop. Solution: Use health check dependencies:\n`depends_on:\n  db:\n    condition: service_healthy`",
          },
          {
            heading: "Configuring Robust Health Checks",
            body: "Health checks run periodic diagnostic probes inside the container:\n- Database health check: `pg_isready -U appuser -d appdb`\n- API health check: HTTP probe against `/readyz`\nCompose monitors health check status (`starting`, `healthy`, `unhealthy`) and orchestrates start order safely.",
          },
          {
            heading: "File-Backed Compose Secrets",
            body: "Compose secrets provide sensitive credentials (like database passwords) via files mounted into `/run/secrets/` in tmpfs memory. The secret is never baked into image layers or logged in environment variables (`docker inspect`).",
          },
        ],
        codeSnippet: `# Dependency synchronization with health check
services:
  api:
    build: .
    depends_on:
      db:
        condition: service_healthy
  db:
    image: postgres:18
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U appuser -d appdb"]
      interval: 5s
      timeout: 3s
      retries: 5`,
      },
      {
        id: "sre-troubleshooting",
        number: "10",
        title: "SRE Diagnostics: Triage Doctrine & Failure Playbook",
        badge: "Production Failure Matrix",
        summary:
          "Systematic container triage. Diagnosing immediate exits, network timeouts, persistent data loss, and layer bloat.",
        details: [
          {
            heading: "Immediate Container Exit Triage",
            body: "When a container terminates immediately after launch:\n1. Run `docker ps -a` to inspect the exit code (e.g., `Exit 1`, `Exit 137` = OOM killer, `Exit 127` = missing binary/command not found).\n2. Run `docker logs <container-id>` to inspect stdout/stderr tracebacks.\n3. Run `docker inspect <container-id>` to review entrypoint and environment variables.",
          },
          {
            heading: "Database Connectivity Triage",
            body: "If an API cannot connect to the database:\n1. Verify both containers are members of the same user-defined bridge network (`docker network inspect <net>`).\n2. Verify the API connects to the service name `db`, not `localhost` or `127.0.0.1`.\n3. Verify the database health check is passing (`docker compose ps`).\n4. Verify credentials match the secret file.",
          },
          {
            heading: "Container Resource Monitoring",
            body: "Run `docker stats` to view real-time CPU %, Memory usage, memory limits, network I/O, and block I/O across all active containers. Pinpoint memory leaks before cgroups trigger the OOM killer.",
          },
        ],
        codeSnippet: `# SRE Diagnostic Commands
docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Ports}}"
docker logs --tail 50 --timestamps <container>
docker stats --no-stream
docker exec -it <container> sh`,
      },
    ],
    []
  );

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (14 IN-DEPTH QUESTIONS)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "Why is a container not simply a small virtual machine?",
      options: [
        "Containers share the host operating system kernel and isolate processes using kernel namespaces and cgroups, whereas VMs run a dedicated guest OS kernel atop a hypervisor.",
        "Containers are written in Python while VMs are written in C.",
        "Containers do not use memory or CPU on the host computer.",
        "VMs can only run Windows while containers only run Linux."
      ],
      correctIndex: 0,
      a: "Containers are isolated processes that execute directly on the host Linux kernel, sharing kernel memory, system call interfaces, and page caches while isolated by namespaces and throttled by cgroups. In contrast, virtual machines run an independent guest operating system kernel atop virtualized hardware emulated by a hypervisor, incurring substantial CPU and memory overhead.",
    },
    {
      q: "What specific roles do namespaces and cgroups play in Linux containerization?",
      options: [
        "Namespaces isolate what a container can see (PID, network, mounts, IPC, UTS, user), while cgroups control how many resources a container can consume (CPU, RAM, disk I/O, PIDs).",
        "Namespaces compress images while cgroups upload them to Docker Hub.",
        "cgroups manage DNS names and namespaces manage file permissions.",
        "They are obsolete Linux features replaced by Docker Desktop."
      ],
      correctIndex: 0,
      a: "Namespaces provide visibility boundaries, giving the container process its own isolated PID table, virtual network interfaces, filesystem mount tree, IPC queues, and hostname. Control groups (cgroups) provide resource boundaries, enforcing limits on CPU shares, memory ceilings, disk I/O throughput, and process counts to prevent noisy-neighbor host exhaustion.",
    },
    {
      q: "How do a Dockerfile, an image, a container, and a registry relate to one another?",
      options: [
        "A Dockerfile is the build recipe; an image is the compiled immutable multi-layered snapshot; a container is an active running instance of an image; a registry stores and distributes images.",
        "An image builds a Dockerfile; a container is a registry; a Dockerfile is a VM.",
        "They are four different commands in Docker Compose with identical behavior.",
        "A registry runs containers, an image is a script, and a Dockerfile is a network."
      ],
      correctIndex: 0,
      a: "A Dockerfile contains the declarative instructions to build an image. An image is a read-only, content-addressable package containing filesystem layers and configuration metadata. A container is a runtime instantiation of an image with an ephemeral writable layer. A registry (e.g., Docker Hub) is a remote repository service used to store, version, and distribute images.",
    },
    {
      q: "How does the ordering of Dockerfile instructions affect layers and build caching?",
      options: [
        "Docker caches layers sequentially; changing an instruction invalidates its cache and forces all subsequent layers to rebuild. Copying dependencies before code maximizes cache hits.",
        "Docker builds all instructions in random parallel order without caching.",
        "Order does not matter because Docker automatically detects which files changed inside scripts.",
        "Putting instructions at the top makes them rebuild slower."
      ],
      correctIndex: 0,
      a: "Docker evaluates instructions from top to bottom, reusing cached layers whose inputs have not changed. When an instruction's inputs change (such as `COPY`), that layer and all subsequent layers are invalidated. Placing infrequently changing dependencies (`requirements.txt`) before frequently changing code (`app.py`) allows dependency installation to be cached across routine code edits.",
    },
    {
      q: "Why would an SRE engineer use a multi-stage build?",
      options: [
        "To separate the build environment (compilers, build tools, dev libraries) from the runtime environment, drastically reducing final image size and attack surface.",
        "To run multiple containers inside a single image simultaneously.",
        "Because single-stage builds cannot run Python.",
        "To automatically generate HTML documentation for the application."
      ],
      correctIndex: 0,
      a: "Multi-stage builds allow developers to install heavy compilers, native build toolchains (`gcc`, `make`), and package caches in an ephemeral builder stage, and copy only the final compiled binaries/packages into a pristine, minimal runtime base image. This slashes image sizes by 80%+ and removes compiler binaries that attackers could exploit.",
    },
    {
      q: "When should an engineer use a named volume rather than a bind mount?",
      options: [
        "Use named volumes for persistent application data managed by Docker (like database storage); use bind mounts when mounting host source code into containers for local development.",
        "Use bind mounts for production databases and named volumes for README files.",
        "Named volumes only work on Windows; bind mounts only work on Linux.",
        "Named volumes are destroyed when containers stop; bind mounts are permanent."
      ],
      correctIndex: 0,
      a: "Named volumes are managed directly by Docker in `/var/lib/docker/volumes/`, isolated from direct host filesystem tampering, and survive container removal, making them ideal for production database persistence. Bind mounts tie a container path directly to an arbitrary host directory, which is ideal for hot-reloading code in development but risky in production.",
    },
    {
      q: "What is the difference between a container's internal port and a published host port?",
      options: [
        "The internal port is where the process listens inside the container's network namespace; the published host port is bound on the host OS interface and forwarded by Docker to the container.",
        "Internal ports use TCP while published ports use UDP.",
        "They must always be the exact same port number or Docker fails to start.",
        "Internal ports are public to the internet while host ports are private."
      ],
      correctIndex: 0,
      a: "An internal port (e.g. 8000 in `EXPOSE 8000`) is the socket port opened by the application inside its virtual network namespace. A published host port (e.g. `127.0.0.1:8080:8000`) instructs the Docker daemon to configure host firewall/iptables rules to forward packets arriving at host port 8080 into container port 8000.",
    },
    {
      q: "Why should an application container not need its database container's port published to the host?",
      options: [
        "Because both containers can communicate directly over a shared private Docker bridge network using internal DNS, keeping the database port inaccessible from external networks.",
        "Because databases cannot bind to network sockets inside Docker.",
        "Because publishing ports makes databases run out of memory.",
        "Because Docker Compose automatically deletes published database ports."
      ],
      correctIndex: 0,
      a: "In multi-container applications, containers on the same user-defined bridge network communicate directly across virtual bridge interfaces using service-name DNS (e.g. `db:5432`). Publishing the database port on the host creates an unnecessary security vulnerability by exposing the database socket to the host network or public internet.",
    },
    {
      q: "Why is a tag less precise than an image digest for identifying a particular image?",
      options: [
        "Tags are mutable pointers that can be overwritten by new image builds, whereas a digest is an immutable cryptographic SHA-256 hash of the image manifest.",
        "Tags can only have 5 characters while digests have 10.",
        "Digests change every time a container restarts.",
        "Tags are only used locally and cannot be pushed to registries."
      ],
      correctIndex: 0,
      a: "An image tag (such as `python:3.13-slim` or `v1.0.0`) is a mutable reference that can be updated at any time to point to different contents. An image digest (`@sha256:...`) is a content-addressable cryptographic hash of the image manifest and layers, guaranteeing absolute immutability and build reproducibility.",
    },
    {
      q: "Why is placing a secret in a Dockerfile 'ARG' or 'ENV' potentially unsafe?",
      options: [
        "Because ARG and ENV values persist permanently in image layer metadata and can be extracted by anyone running 'docker history' or inspecting the image.",
        "Because ARG and ENV variables crash the Linux kernel.",
        "Because secrets in ENV variables are automatically emailed to Docker Hub.",
        "Because Dockerfiles cannot process strings longer than 8 characters."
      ],
      correctIndex: 0,
      a: "Docker explicitly warns that values passed to `ARG` and `ENV` are committed directly into the image's JSON configuration and layer metadata. Anyone with read access to the image can run `docker history --no-trunc` or `docker inspect` to recover cleartext secrets. Use BuildKit secret mounts (`--mount=type=secret`) or runtime secret managers instead.",
    },
    {
      q: "What does a container health check establish, and what does it NOT guarantee?",
      options: [
        "It verifies that a specific test probe passes at that moment; it does not guarantee that the application can handle high concurrent load or will not crash under future requests.",
        "It guarantees 100% bug-free code forever.",
        "It proves that the container is running on Kubernetes.",
        "It guarantees that the database has infinite disk space."
      ],
      correctIndex: 0,
      a: "A health check periodically executes a declared command (e.g. `pg_isready` or an HTTP request to `/readyz`) to verify functional responsiveness. While it confirms the process is alive and responsive to that probe, it does not guarantee database performance, absence of memory leaks, or resilience under production traffic spikes.",
    },
    {
      q: "How would an SRE diagnose an application that runs locally but cannot connect to its database container?",
      options: [
        "Verify network membership in user-defined bridge, test service-name DNS resolution, check port 5432 availability, verify database health check status, and check credentials.",
        "Restart the host computer 3 times.",
        "Delete the Dockerfile and reinstall Python.",
        "Change the container name to 'root'."
      ],
      correctIndex: 0,
      a: "SRE triage sequence: 1. Confirm both containers are on the same custom bridge network (`docker network inspect`); 2. Verify connection string uses the service hostname `db` instead of `localhost`; 3. Inspect database logs to ensure initialization succeeded; 4. Check if the database health check is passing; 5. Verify the password file in `/run/secrets/` matches database credentials.",
    },
    {
      q: "How can you demonstrate that database data survives container recreation?",
      options: [
        "Write a record to the database, run 'docker compose down' to stop and delete containers, run 'docker compose up -d' to recreate them, and query the record to verify persistence.",
        "Take a screenshot of the terminal.",
        "Delete the volume and check if the database crashes.",
        "Restart Docker Desktop and read the Dockerfile."
      ],
      correctIndex: 0,
      a: "Insert a unique row into the database, execute `docker compose down` (which removes containers and networks but preserves named volumes), re-launch the application with `docker compose up -d`, and verify the record is still present. To contrast, running `docker compose down -v` removes the named volume and erases data.",
    },
    {
      q: "What evidence should an SRE review before promoting a container image to a production release?",
      options: [
        "Vulnerability scan results (Docker Scout/Trivy), non-root execution validation, SBOM provenance, pinned base image digest, test pass logs, and absence of baked secrets.",
        "Only the image size in megabytes.",
        "Whether the Dockerfile has comments on every line.",
        "A confirmation email from the developer."
      ],
      correctIndex: 0,
      a: "Production promotion criteria require: 1. Zero critical/high CVEs in vulnerability scans; 2. Verification that the container runs as an unprivileged user (`USER app`); 3. SBOM attestation cataloging all dependencies; 4. Cryptographically pinned base image digest; 5. Passing end-to-end integration test suites; 6. Audit confirming no credentials exist in image layers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="docker"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Docker AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Boxes size={14} />
              <span>University-Informed Container Engineering & Production Systems</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Docker & Container Systems
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Build the application <strong className="text-stone-900 font-semibold">once</strong> as a versioned,
              testable artifact, then promote that artifact through environments without rebuilding. Grounded in
              operating-systems foundations from <span className="font-semibold text-stone-900">MIT</span>,{" "}
              <span className="font-semibold text-stone-900">Stanford (CS111)</span>,{" "}
              <span className="font-semibold text-stone-900">Cambridge</span>,{" "}
              <span className="font-semibold text-stone-900">NUS (CS2106)</span>, and official Docker & OCI specifications.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "dockerfile-lab", label: "Lab 1: Multi-Stage Layer Visualizer", icon: Layers },
              { id: "compose-lab", label: "Lab 2: Multi-Service Compose & Volumes", icon: Database },
              { id: "security-gameday", label: "Lab 3: Security & Failure GameDay", icon: ShieldCheck },
              { id: "mastery", label: "Mastery Assessment (14 Questions)", icon: CheckCircle2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? "bg-orange-500 text-white shadow-orange-500/20 shadow-md"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI TUTOR EMBED */}
        {showAiTutor && (
          <div className="mb-10 rounded-2xl border border-orange-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-600" />
                <h3 className="text-base font-bold text-stone-900">Nova AI: Docker & Container Systems Mentor</h3>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800"
              >
                Close
              </button>
            </div>
            <div className="pt-4">
              <LearningRo
                currentTopic="devops-docker-containers"
                moduleName="Docker & Container Systems"
              />
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: THEORY & CURRICULUM TOPICS (10 TOPICS)                       */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* LEFT TOPIC SELECTOR */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block">
                Syllabus Topics
              </span>
              {topics.map((t, idx) => {
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all border ${
                      isSelected
                        ? "bg-[#18181b] text-white border-[#27272a] shadow-lg shadow-stone-900/10"
                        : "bg-white/80 text-stone-800 border-stone-200/80 hover:bg-white hover:border-orange-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-orange-400" : "text-stone-600"
                        }`}
                      >
                        Topic {t.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/10 text-stone-300"
                            : "bg-stone-100 text-stone-600 border border-stone-200"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <div className="font-bold text-sm leading-snug">{t.title}</div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT DETAIL VIEW */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-100">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-orange-600 tracking-wider">
                      Topic {topics[selectedTopic].number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                      {topics[selectedTopic].title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">
                    {topics[selectedTopic].badge}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {topics[selectedTopic].summary}
                </p>

                {/* Subsections */}
                <div className="mt-8 space-y-6">
                  {topics[selectedTopic].details.map((detail, dIdx) => (
                    <div key={dIdx} className="border-l-2 border-orange-500 pl-4 py-1">
                      <h3 className="text-base font-bold text-stone-900">{detail.heading}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed whitespace-pre-line font-sans">
                        {detail.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CODE DEMONSTRATION SNIPPET */}
                <div className="mt-8">
                  <div className="flex items-center justify-between bg-[#18181b] text-stone-300 px-4 py-2 rounded-t-xl text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      Production Dockerfile / CLI Reference
                    </span>
                    <span className="text-[10px] text-stone-400">docker / compose</span>
                  </div>
                  <pre className="p-4 bg-[#18181b] text-stone-100 text-xs font-mono rounded-b-xl overflow-x-auto border-t border-stone-800 leading-relaxed">
                    <code>{topics[selectedTopic].codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* NEXT / PREV BUTTONS */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={selectedTopic === 0}
                  onClick={() => setSelectedTopic(selectedTopic - 1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition"
                >
                  <ArrowLeft size={14} /> Previous Topic
                </button>
                <button
                  disabled={selectedTopic === topics.length - 1}
                  onClick={() => setSelectedTopic(selectedTopic + 1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-40 transition"
                >
                  Next Topic <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - MULTI-STAGE BUILD & LAYER CACHE VISUALIZER           */}
        {/* =================================================================== */}
        {activeTab === "dockerfile-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Layers size={14} />
                <span>Lab 1: Layer Cache & Multi-Stage Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Multi-Stage Build & Layer Cache Visualizer
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Experience why instruction ordering and multi-stage separation are fundamental to container
                engineering. Compare build durations, final image sizes, and security attack surfaces.
              </p>
            </div>

            {/* CONTROLS TOOLBAR */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Strategy Selector */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Build Architecture:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setBuildStrategy("multistage")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                        buildStrategy === "multistage"
                          ? "bg-orange-500 text-white shadow-sm"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      ✓ Multi-Stage Build (Production)
                    </button>
                    <button
                      onClick={() => setBuildStrategy("naive")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                        buildStrategy === "naive"
                          ? "bg-rose-600 text-white shadow-sm"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      ⚠ Naive Single-Stage (Anti-Pattern)
                    </button>
                  </div>
                </div>

                {/* Cache Scenario Selector */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Simulate Developer Action:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCacheScenario("clean")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                        cacheScenario === "clean"
                          ? "bg-stone-900 text-white"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      Fresh Clean Build
                    </button>
                    <button
                      onClick={() => setCacheScenario("code-change")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                        cacheScenario === "code-change"
                          ? "bg-stone-900 text-white"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      Edit app.py only
                    </button>
                    <button
                      onClick={() => setCacheScenario("deps-change")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                        cacheScenario === "deps-change"
                          ? "bg-stone-900 text-white"
                          : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                      }`}
                    >
                      Edit requirements.txt
                    </button>
                  </div>
                </div>
              </div>

              {/* TELEMETRY CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-200">
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">Final Image Size:</span>
                  <span className="text-xl font-black text-stone-900 mt-0.5 block">{layerData.totalSize}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">Build Duration:</span>
                  <span className="text-xl font-black text-stone-900 mt-0.5 block">{layerData.buildTime}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">Attack Surface / CVEs:</span>
                  <span className="text-xs font-bold text-stone-800 mt-1 block leading-tight">{layerData.attackSurface}</span>
                </div>
              </div>
            </div>

            {/* LAYER LIST VISUALIZER */}
            <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-6 text-white space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-b border-stone-800 pb-3">
                <span className="flex items-center gap-2">
                  <Layers size={14} className="text-orange-400" />
                  <span>Build Layers Stack ({layerData.layers.length} Instructions)</span>
                </span>
                <span>{layerData.strategyName}</span>
              </div>

              <div className="space-y-2">
                {layerData.layers.map((lay, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border font-mono text-xs flex flex-wrap items-center justify-between gap-3 transition ${
                      lay.cached
                        ? "bg-stone-900/90 border-stone-700 text-stone-300"
                        : "bg-orange-950/40 border-orange-600/70 text-white shadow-sm"
                    }`}
                  >
                    <div className="space-y-1">
                      {lay.stage && (
                        <span className="text-[10px] font-bold text-orange-400 block uppercase tracking-wider">
                          {lay.stage}
                        </span>
                      )}
                      <div className="font-semibold text-stone-100">{lay.instruction}</div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-stone-400 text-[11px]">{lay.size}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          lay.cached
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        }`}
                      >
                        {lay.cached ? "CACHED" : "REBUILT"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - COMPOSE MULTI-SERVICE NETWORK & VOLUMES              */}
        {/* =================================================================== */}
        {activeTab === "compose-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Database size={14} />
                <span>Lab 2: Multi-Service Orchestration & Persistence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Interactive Compose Multi-Service & Volume Simulator
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Observe the complete microservice architecture: Client $\rightarrow$ API container (Port 8000,
                read-only root, non-root user) $\rightarrow$ Backend network $\rightarrow$ PostgreSQL 18 (internal
                only, mounted to <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">postgres_data</code> named volume).
                Test data persistence across container recreation.
              </p>
            </div>

            {/* TOPOLOGY MAP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Host/Client */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-stone-500">HOST & INGRESS</span>
                  <span className="text-[10px] font-mono bg-stone-200 px-2 py-0.5 rounded font-bold">127.0.0.1</span>
                </div>
                <h4 className="font-black text-stone-900 text-sm">Client / Browser</h4>
                <p className="text-xs text-stone-600">
                  Sends HTTP requests to <code className="font-mono text-orange-700">127.0.0.1:8000</code>. Only the API
                  port is exposed to the host loopback.
                </p>
              </div>

              {/* API Container */}
              <div
                className={`p-5 rounded-2xl border transition space-y-2 ${
                  composeServicesRunning
                    ? "border-emerald-300 bg-emerald-50/40 text-emerald-950"
                    : "border-stone-300 bg-stone-100 text-stone-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold">CONTAINER 1: api</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      composeServicesRunning ? "bg-emerald-600 text-white" : "bg-stone-300 text-stone-600"
                    }`}
                  >
                    {composeServicesRunning ? "RUNNING :8000" : "STOPPED"}
                  </span>
                </div>
                <h4 className="font-black text-sm">Python Flask + Gunicorn</h4>
                <div className="text-xs space-y-1">
                  <div>• USER: app (non-root)</div>
                  <div>• read_only: true + tmpfs: /tmp</div>
                  <div>• Networks: frontend, backend</div>
                </div>
              </div>

              {/* Database Container */}
              <div
                className={`p-5 rounded-2xl border transition space-y-2 ${
                  composeServicesRunning
                    ? "border-blue-300 bg-blue-50/40 text-blue-950"
                    : "border-stone-300 bg-stone-100 text-stone-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold">CONTAINER 2: db</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      composeServicesRunning ? "bg-blue-600 text-white" : "bg-stone-300 text-stone-600"
                    }`}
                  >
                    {composeServicesRunning ? "HEALTHY :5432" : "STOPPED"}
                  </span>
                </div>
                <h4 className="font-black text-sm">PostgreSQL 18</h4>
                <div className="text-xs space-y-1">
                  <div>• Volume: <span className="font-bold text-orange-700">postgres_data</span></div>
                  <div>• Target: /var/lib/postgresql</div>
                  <div>• Network: backend (internal: true)</div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE CONTROLS */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-stone-700">Orchestration & Failure Controls:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleComposeDown}
                    disabled={!composeServicesRunning}
                    className="px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition"
                  >
                    docker compose down (Keep Volume)
                  </button>
                  <button
                    onClick={handleComposeUp}
                    disabled={composeServicesRunning}
                    className="px-3.5 py-1.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 disabled:opacity-40 transition"
                  >
                    docker compose up -d
                  </button>
                  <button
                    onClick={handleComposeDownVolumeWipe}
                    className="px-3.5 py-1.5 rounded-xl border border-rose-300 bg-rose-50 text-rose-800 text-xs font-bold hover:bg-rose-100 transition"
                  >
                    docker compose down -v (Wipe Volume)
                  </button>
                </div>
              </div>

              {/* NOTE CREATION INPUT */}
              <div className="flex gap-2 pt-2 border-t border-stone-200">
                <input
                  type="text"
                  value={inputNote}
                  onChange={(e) => setInputNote(e.target.value)}
                  placeholder="Enter message (e.g., 'Verify PostgreSQL 18 volume persistence')..."
                  className="flex-1 rounded-xl border border-stone-300 px-4 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onKeyDown={(e) => e.key === "Enter" && handleCreateNote()}
                />
                <button
                  onClick={handleCreateNote}
                  disabled={!composeServicesRunning}
                  className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 disabled:opacity-40 transition shadow-sm"
                >
                  POST /notes
                </button>
              </div>
            </div>

            {/* PERSISTED DATABASE DATA & DIAGNOSTIC LOG */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Persisted Records */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="font-bold text-xs text-stone-900 flex items-center gap-2">
                    <Database size={14} className="text-orange-500" />
                    <span>PostgreSQL Table: 'notes' ({notesList.length} rows)</span>
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">Volume: postgres_data</span>
                </div>

                <div className="space-y-2 max-h-52 overflow-y-auto">
                  {notesList.length === 0 ? (
                    <div className="p-6 text-center text-xs text-stone-400 font-mono">
                      Database is empty. (Volume was wiped or no records created).
                    </div>
                  ) : (
                    notesList.map((nt) => (
                      <div key={nt.id} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                        <div className="flex items-center justify-between text-stone-500 text-[10px] mb-1">
                          <span className="font-bold text-orange-600">ID #{nt.id}</span>
                          <span>{nt.created_at}</span>
                        </div>
                        <div className="text-stone-800 font-sans font-medium">{nt.message}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Embedded DNS & HTTP Telemetry Log */}
              <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Activity size={12} className="text-orange-400" />
                    <span>Compose Network & Storage Telemetry</span>
                  </span>
                  <span>127.0.0.11 DNS</span>
                </div>
                <div className="space-y-1 pt-1">
                  {dnsLog.map((line, lIdx) => (
                    <div key={lIdx} className="text-stone-300 flex items-start gap-2 text-[11px]">
                      <span className="text-orange-500 select-none">&gt;</span>
                      <span className={lIdx === 0 ? "text-emerald-400 font-bold" : ""}>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SECURITY & SRE FAILURE GAMEDAY                       */}
        {/* =================================================================== */}
        {activeTab === "security-gameday" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <ShieldCheck size={14} />
                <span>Lab 3: Production Container Security & Failure Triage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Container Security & SRE Incident GameDay
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Containers do not magically create an automatic security boundary. Analyze 5 real-world production
                container failures: secret exposure in image layers, read-only root crashes, loopback listener traps,
                PID 1 signal hangs, and PostgreSQL volume target migrations.
              </p>
            </div>

            {/* INCIDENT SELECTOR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {incidentScenarios.map((sc, sIdx) => {
                const isSelected = selectedIncidentIndex === sIdx;
                const isAnswered = incidentAnswers[sc.id] !== undefined;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedIncidentIndex(sIdx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-[#18181b] text-white border-stone-800 shadow-md"
                        : "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? "text-orange-400 font-bold" : "text-stone-500 font-bold"}>
                        Case #{sIdx + 1}
                      </span>
                      {isAnswered && (
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded font-bold">
                          ✓ Solved
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs truncate">{sc.title.split(":")[1] || sc.title}</div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE INCIDENT CARD */}
            {(() => {
              const currentInc = incidentScenarios[selectedIncidentIndex];
              const answer = incidentAnswers[currentInc.id];

              return (
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-8 space-y-6">
                  {/* Incident Header */}
                  <div className="pb-4 border-b border-stone-200 space-y-1">
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Failure Investigation
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">{currentInc.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 pt-1">
                      <strong className="text-stone-800">Observed Symptom: </strong>
                      {currentInc.symptom}
                    </p>
                  </div>

                  {/* Code Snippet Inspection */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-stone-500 block mb-2">
                      Code / Log Inspection:
                    </span>
                    <pre className="p-4 rounded-xl bg-[#18181b] text-xs font-mono overflow-x-auto text-stone-200 border border-stone-800 leading-relaxed">
                      <code>{currentInc.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Question & Options */}
                  <div className="space-y-4 pt-2">
                    <span className="text-sm font-bold text-stone-900 block">{currentInc.question}</span>

                    <div className="space-y-2.5">
                      {currentInc.options.map((opt) => {
                        const isChosen = answer === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleIncidentAnswer(currentInc.id, opt.id)}
                            className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all ${
                              isChosen
                                ? opt.correct
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm"
                                  : "bg-rose-50 border-rose-300 text-rose-900 shadow-sm"
                                : "bg-white border-stone-200 text-stone-800 hover:bg-stone-100"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono ${
                                  isChosen
                                    ? opt.correct
                                      ? "bg-emerald-600 text-white border-emerald-600"
                                      : "bg-rose-600 text-white border-rose-600"
                                    : "border-stone-300 text-stone-500 bg-stone-50"
                                }`}
                              >
                                {opt.id.slice(-1).toUpperCase()}
                              </span>
                              <div className="space-y-1">
                                <span className="font-semibold block">{opt.label}</span>
                                {isChosen && (
                                  <p
                                    className={`text-xs mt-2 pt-2 border-t leading-relaxed ${
                                      opt.correct
                                        ? "border-emerald-200 text-emerald-800 font-sans"
                                        : "border-rose-200 text-rose-800 font-sans"
                                    }`}
                                  >
                                    <strong className="font-bold">
                                      {opt.correct ? "✓ SRE Remediation: " : "✗ Root Cause Defect: "}
                                    </strong>
                                    {opt.explanation}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: MASTERY ASSESSMENT (14 QUESTIONS)                            */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <CheckCircle2 size={14} />
                <span>Final Mastery Assessment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                14-Question Comprehensive Docker Systems Assessment
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Before advancing to CI/CD pipelines and Kubernetes cluster orchestration, prove complete mastery over
                container isolation, multi-stage optimization, storage persistence, and production security controls.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-stone-50/40 overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600 font-bold">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white space-y-3">
                        <div className="space-y-1.5 pt-2">
                          <span className="font-mono text-[10px] font-bold uppercase text-stone-400 block">
                            Key Options & Evaluation:
                          </span>
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg text-xs font-mono flex items-start gap-2 ${
                                oIdx === mq.correctIndex
                                  ? "bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold"
                                  : "text-stone-500"
                              }`}
                            >
                              <span>{oIdx === mq.correctIndex ? "✓" : "•"}</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-stone-100">
                          <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                            Authoritative Systems Engineering Answer:
                          </span>
                          <p className="text-stone-700 font-sans">{mq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              DevOps & SRE Track • Module 3 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Docker & Container Systems Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand Linux namespaces & cgroups, multi-stage layer caching, persistent volumes, bridge network
              segmentation, non-root security hardening, and Compose multi-service synchronization.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/git")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 2: Git
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/k8s")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-1.5"
            >
              <span>Next: Module 4 — Kubernetes</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
