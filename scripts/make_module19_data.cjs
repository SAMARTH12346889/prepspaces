const fs = require('fs');
const path = require('path');

const overview = {
  moduleNumber: "19",
  title: "AI MLOps, Deployment & CI/CD",
  recommendedDuration: "30–35 hours",
  difficulty: "Advanced / MLOps & Production Engineering",
  primaryStack: "Python 3.12+, Docker, MLflow, DVC, GitHub Actions, Kubernetes, FastAPI, vLLM",
  monitoringTools: "Evidently AI, Prometheus, Grafana",
  corePrinciples: "Reproducibility, Model Lineage, Multi-Stage Containerization, Blue-Green/Canary Rollouts, Drift Detection",
  finalOutcome: "Architect, build, and automate end-to-end MLOps lifecycles for foundation models and machine learning pipelines. Master Docker containerization, MLflow experiment tracking and model registries with champion/challenger aliases, DVC dataset versioning and reproducible DAG pipelines, GitHub Actions CI/CD workflows, Canary and Blue-Green deployment strategies, Kubernetes orchestration with health probes, and production drift monitoring using Evidently AI."
};

const curriculumUnits = [
  {
    id: "unit-01",
    number: "01",
    title: "Foundations of MLOps & The Machine Learning Lifecycle",
    subtitle: "Bridging Data Science, Machine Learning, and DevOps",
    summary: "Understand why traditional software engineering practices fail when applied naively to machine learning systems. Contrast DevOps with MLOps across the 10-stage lifecycle, and establish model lineage.",
    topics: [
      {
        id: "sec-01-01",
        title: "The 'Works on My Machine' Problem & The Need for MLOps",
        content: `In traditional software development, application behavior changes almost exclusively when code changes. In machine learning systems, behavior changes along three independent axes:
1. Application Code (Inference runtime, feature extraction)
2. Training Data (Distribution shift, new domains, corrupted annotations)
3. Model Weights & Hyperparameters (Epochs, learning rate, LoRA rank)

Without MLOps, teams suffer from unversioned models (e.g., 'java_model_final_v2_latest.pkl'), lost training parameters, and an inability to roll back when a deployed model degrades in production.`
      },
      {
        id: "sec-01-02",
        title: "DevOps vs MLOps: Architectural Taxonomy",
        content: `While DevOps focuses on continuous code integration and reliable software deployment, MLOps expands these principles to handle stateful, data-driven artifacts:

| Dimension | Traditional DevOps | Machine Learning Operations (MLOps) |
| :--- | :--- | :--- |
| **Primary Artifact** | Compiled Binaries & Source Code | Code + Large Datasets + Model Weights |
| **Versioning** | Git | Git (Code) + DVC (Data) + MLflow (Models) |
| **Testing** | Unit & Integration Tests | Unit Tests + Data Validation + Behavioral & Regression Evaluation |
| **Pipeline Trigger** | Code commit / PR merge | Code change + New data arrival + Scheduled CT + Performance drift |
| **Monitoring** | Latency, Error Rate, CPU/Memory | Latency + Error Rate + Data Drift + Concept Drift + Groundedness |`
      },
      {
        id: "sec-01-03",
        title: "The 10-Stage End-to-End MLOps Lifecycle",
        content: `A resilient production AI system executes through 10 synchronized stages:
1. Data Ingestion: Automated ingestion from production DBs, user sessions, or vector stores.
2. Data Validation: Checking for schema consistency, null values, and distribution anomalies.
3. Feature Engineering & Preprocessing: Tokenization, embedding generation, normalization.
4. Model Training / Fine-Tuning: Distributed GPU execution (PyTorch, Hugging Face, LoRA).
5. Experiment Tracking: Logging parameters, loss curves, and evaluation metrics (MLflow).
6. Model Evaluation & Gating: Automated scoring against golden benchmark datasets.
7. Model Registry: Centralized cataloging of approved versioned artifacts and @champion tags.
8. Packaging & Containerization: Multi-stage Docker builds and image registry publishing.
9. Deployment Orchestration: Blue-Green or Canary rollout behind a model gateway.
10. Continuous Monitoring & Retraining: Tracking drift, latency, and triggering CT loops.`
      }
    ]
  },
  {
    id: "unit-02",
    number: "02",
    title: "Docker & Containerization for AI Systems",
    subtitle: "Images, Containers, Multi-Stage Builds & Volume Management",
    summary: "Package complex Python and AI dependencies into lightweight, reproducible container images. Master Dockerfile instructions, layer caching optimizations, and multi-service orchestration with Docker Compose.",
    topics: [
      {
        id: "sec-02-01",
        title: "Docker Architecture: Images vs Containers vs Registries",
        content: `Containers provide process-level isolation sharing the host operating system kernel, avoiding the heavy hypervisor overhead of virtual machines:
- Docker Image: A read-only, layered filesystem template packaging code, runtime, system libraries, and dependencies.
- Docker Container: A live, runnable instance of an image with an isolated writable top layer.
- Container Registry: Centralized storage and distribution hub (Docker Hub, GitHub Container Registry GHCR, AWS ECR).`
      },
      {
        id: "sec-02-02",
        title: "Multi-Stage Docker Builds & Image Optimization",
        content: `Naive Python Docker images often balloon to 3–5 GB because compilers (gcc, g++), build dependencies, and pip wheel caches are left inside the image.

Multi-stage builds decouple build tooling from the runtime:
\`\`\`dockerfile
# Stage 1: Build & compile wheels
FROM python:3.12-slim AS builder
WORKDIR /build
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# Stage 2: Minimal runtime image
FROM python:3.12-slim AS runtime
WORKDIR /app
COPY --from=builder /install /usr/local
COPY app ./app
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`
This pattern slashes final container size from 1.8 GB to ~220 MB, accelerating Kubernetes image pull times and reducing vulnerabilities.`
      },
      {
        id: "sec-02-03",
        title: "Multi-Service Orchestration with Docker Compose",
        content: `AI backends rarely run in isolation; they coordinate FastAPI servers, PostgreSQL relational state, and Redis caching.
Docker Compose defines these relationships in compose.yaml:
\`\`\`yaml
services:
  backend:
    build: .
    ports: ["8000:8000"]
    environment:
      DATABASE_URL: postgresql://admin:secret@db:5432/prepspaces
      REDIS_URL: redis://redis:6379/0
    depends_on: [db, redis]
  db:
    image: postgres:16
    volumes: [postgres_data:/var/lib/postgresql/data]
  redis:
    image: redis:7
volumes:
  postgres_data:
\`\`\`
Command: \`docker compose up -d --build\` spins up the entire integrated ecosystem.`
      }
    ]
  },
  {
    id: "unit-03",
    number: "03",
    title: "Containerizing Machine Learning Models & GPU Workloads",
    subtitle: "Decoupled Weight Management & NVIDIA Container Toolkit",
    summary: "Address the critical architectural division between containerizing application code versus multi-gigabyte neural network weights. Configure GPU pass-through using the NVIDIA Container Toolkit.",
    topics: [
      {
        id: "sec-03-01",
        title: "The Golden Rule: Decouple Model Weights from Container Images",
        content: `Never bake a 15GB LLM weight file directly into a Docker application image!
Why baking weights fails:
1. Slow CI/CD: Every 2-line code bugfix requires rebuilding, uploading, and pulling a 15GB image across runners.
2. Registry Storage Explosion: 10 daily releases consume 150GB of container registry storage.
3. Lack of Independence: Cannot upgrade application code without invalidating model artifact caches.

The Production Pattern:
- Docker Image: Contains only Python runtime, CUDA drivers, FastAPI, inference engines (vLLM), and dependencies (~1.5GB).
- Model Weights: Stored in an S3/Cloud Storage bucket or shared NFS volume, mounted into the container at runtime or loaded dynamically from an MLflow Model Registry.`
      },
      {
        id: "sec-03-02",
        title: "NVIDIA Container Toolkit & GPU Pass-Through",
        content: `To enable hardware acceleration inside Docker, the host requires the NVIDIA Container Toolkit (nvidia-container-runtime).
Running an accelerated container:
\`\`\`bash
docker run --gpus all -d -p 8000:8000 \\
  -v /models/qwen-7b:/models \\
  vllm/vllm-openai:latest \\
  --model /models
\`\`\`
This exposes host CUDA drivers and Tensor Cores directly to the containerized inference engine.`
      }
    ]
  },
  {
    id: "unit-04",
    number: "04",
    title: "Model Versioning & Experiment Tracking with MLflow",
    subtitle: "Runs, Metrics, Artifacts, Autologging & Model Registry",
    summary: "Master experiment tracking using MLflow. Log parameters, loss curves, and model artifacts, organize experiments logically, and manage production deployment readiness using the MLflow Model Registry.",
    topics: [
      {
        id: "sec-04-01",
        title: "MLflow Core Tracking Architecture",
        content: `MLflow Tracking organizes machine learning experiments into four distinct components:
1. Parameters: Key-value configuration inputs (learning_rate: 0.0005, batch_size: 16, lora_rank: 8).
2. Metrics: Scaled time-series evaluations recorded throughout training (loss, accuracy, F1 score).
3. Artifacts: Binary outputs produced by runs (model checkpoints, tokenizer files, confusion matrix plots).
4. Metadata: Git commit hash, user, timestamp, execution duration.

\`\`\`python
import mlflow

mlflow.set_experiment("PrepSpaces-Java-Interviewer")
with mlflow.start_run(run_name="LoRA-Rank16-LR3e-4"):
    mlflow.log_params({"lr": 3e-4, "rank": 16, "base_model": "Qwen2.5-Coder"})
    # Training Loop
    mlflow.log_metric("eval_loss", 0.18)
    mlflow.log_metric("f1_score", 0.92)
    mlflow.sklearn.log_model(model, "model", registered_model_name="JavaInterviewer")
\`\`\``
      },
      {
        id: "sec-04-02",
        title: "MLflow Model Registry & Model Aliases (@champion / @challenger)",
        content: `Legacy MLOps used static model stages (Staging, Production, Archived). Modern MLflow uses flexible Model Aliases:
- \`@champion\`: Points to the active production model version serving user traffic.
- \`@challenger\`: Points to the newly evaluated candidate model being tested in canary or shadow deployments.

Inference service loading by alias:
\`\`\`python
import mlflow.pyfunc
model = mlflow.pyfunc.load_model("models:/JavaInterviewer@champion")
\`\`\`
Promoting a new model version merely updates the alias pointer without requiring redeployment or modifying application source code.`
      }
    ]
  },
  {
    id: "unit-05",
    number: "05",
    title: "Data Versioning with DVC (Data Version Control)",
    subtitle: "Git Integration, Remote Object Storage & Reproducible Pipelines",
    summary: "Solve the dataset versioning challenge using DVC. Decouple massive training datasets from Git history, push data pointers to remote S3 buckets, and construct Directed Acyclic Graph (DAG) pipelines.",
    topics: [
      {
        id: "sec-05-01",
        title: "Why Git Cannot Version Datasets & How DVC Works",
        content: `Git was engineered for text source code; committing 20GB of training JSON or audio files causes repository bloat and clones to fail.
How DVC Solves This:
1. Dataset file: \`data/interview_dataset.json\` (12 GB)
2. Command: \`dvc add data/interview_dataset.json\`
3. DVC calculates the file's SHA-256 hash, stores the raw data in its local content-addressable cache (\`.dvc/cache\`), and generates a tiny metadata pointer: \`data/interview_dataset.json.dvc\` (40 bytes).
4. The developer commits the \`.dvc\` pointer file to Git.
5. The raw 12 GB dataset is synchronized to remote cloud storage via \`dvc push\` (S3/GCS/Azure).`
      },
      {
        id: "sec-05-02",
        title: "DVC Pipelines & Directed Acyclic Graph (DAG) Reproducibility",
        content: `DVC pipelines (\`dvc.yaml\`) define multi-stage ML workflows where each stage declares dependencies (\`deps\`), parameters (\`params\`), and outputs (\`outs\`):
\`\`\`yaml
stages:
  preprocess:
    cmd: python src/preprocess.py
    deps: [data/raw.json, src/preprocess.py]
    outs: [data/clean.csv]
  train:
    cmd: python src/train.py
    deps: [data/clean.csv, src/train.py]
    params: [train.lr, train.epochs]
    outs: [models/model.pkl]
  evaluate:
    cmd: python src/evaluate.py
    deps: [models/model.pkl, data/clean.csv]
    metrics: [{metrics.json: {cache: false}}]
\`\`\`
Command: \`dvc repro\` inspects hashes of all dependencies. If only \`train.py\` changed, it skips \`preprocess\` and immediately executes \`train\` and \`evaluate\`.`
      }
    ]
  },
  {
    id: "unit-06",
    number: "06",
    title: "CI/CD & Continuous Training (CT) Automation",
    subtitle: "GitHub Actions Workflows, Testing Gates & Docker Registry Publishing",
    summary: "Construct fully automated CI/CD and Continuous Training pipelines with GitHub Actions. Automate linting, unit testing, model evaluation regression checks, Docker building, and image distribution.",
    topics: [
      {
        id: "sec-06-01",
        title: "Continuous Integration vs Continuous Delivery vs Continuous Training",
        content: `In an AI engineering platform:
- CI (Continuous Integration): Validates code on every git push via linters (flake8, oxlint), type checkers, and unit tests (pytest).
- CD (Continuous Delivery/Deployment): Builds Docker images, tags them with the git commit SHA, pushes to GitHub Container Registry (GHCR), and triggers Kubernetes rollouts.
- CT (Continuous Training): Retrains the model automatically when new production interview datasets accumulate or when performance drift is detected, logging runs to MLflow.`
      },
      {
        id: "sec-06-02",
        title: "GitHub Actions Workflow Anatomy for MLOps",
        content: `A production workflow executes in \`.github/workflows/mlops.yml\`:
\`\`\`yaml
name: MLOps Pipeline
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12" }
      - run: pip install -r requirements.txt pytest
      - run: pytest tests/ -v
  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/prepspaces/api:\${{ github.sha }}
\`\`\``
      }
    ]
  },
  {
    id: "unit-07",
    number: "07",
    title: "Production Deployment Strategies for AI Models",
    subtitle: "Direct, Blue-Green, Canary & Shadow Deployments",
    summary: "Evaluate and implement advanced rollout strategies that mitigate deployment risks. Contrast instant Blue-Green cutovers with gradual Canary traffic splitting and risk-free Shadow deployments.",
    topics: [
      {
        id: "sec-07-01",
        title: "Rollout Strategies: Blue-Green vs Canary vs Shadow",
        content: `1. Direct (Recreate) Deployment:
- Terminates v1 before launching v2. Result: Inevitable downtime. High risk.
2. Blue-Green Deployment:
- Two identical environments run simultaneously: Blue (active v1 serving 100% traffic) and Green (idle v2).
- Traffic router switches 100% of user traffic to Green instantly. If errors spike, switch back to Blue in seconds.
3. Canary Deployment:
- Routes a tiny percentage of production traffic (e.g., 5%) to the new v2 model, while 95% remains on v1.
- Telemetry (latency, error rates, hallucinations) is monitored. If stable, traffic increases: 5% -> 25% -> 50% -> 100%.
4. Shadow Deployment:
- Incoming live requests are duplicated by the gateway. The user receives the response from v1, but v2 also processes the prompt in the background.
- Allows 100% real-world latency, memory, and safety evaluation without exposing users to potential regressions.`
      },
      {
        id: "sec-07-02",
        title: "Automated Rollback & Health Probes",
        content: `Every deployment strategy requires an automated circuit breaker:
If p95 latency exceeds 800ms or 5xx error rate exceeds 1% during a Canary rollout, the deployment controller automatically rolls back traffic to the previous known good version without human intervention.`
      }
    ]
  },
  {
    id: "unit-08",
    number: "08",
    title: "Kubernetes & Container Orchestration for Scale",
    subtitle: "Pods, Deployments, Services, Rolling Updates & Health Probes",
    summary: "Orchestrate multi-node AI backend and serving clusters with Kubernetes. Master Pod specs, ReplicaSets, Rolling Updates, and configure Startup, Liveness, and Readiness probes.",
    topics: [
      {
        id: "sec-08-01",
        title: "Kubernetes Architecture for AI Systems",
        content: `Kubernetes automates container scheduling, failover, and scaling across clusters:
- Pod: Smallest deployable compute unit; encapsulates application container and shared network namespace.
- Deployment: Declares desired replica count, rolling update strategy, and container image versions.
- Service: Stable virtual IP and load-balancing abstraction routing traffic across dynamic pods.
- Ingress: External HTTP/S reverse proxy mapping domain routes to internal services.`
      },
      {
        id: "sec-08-02",
        title: "The Three Kubernetes Probes: Startup, Liveness & Readiness",
        content: `LLM inference engines take 60–180 seconds to download weights, allocate VRAM, and compile CUDA kernels. Standard web probes would prematurely kill the pod!

Kubernetes Probe Trio:
1. Startup Probe: Gives slow-booting LLM containers up to 180 seconds to initialize before liveness checks begin.
2. Liveness Probe: Confirms the process event loop has not deadlocked. If it fails, Kubernetes kills and restarts the container.
3. Readiness Probe: Verifies the model has finished loading into VRAM and is ready to process tokens. If it fails, Kubernetes stops sending user traffic to that pod without killing it.`
      }
    ]
  },
  {
    id: "unit-09",
    number: "09",
    title: "Model Monitoring, Drift Detection & Evidently AI",
    subtitle: "Data Drift, Concept Drift, Prediction Drift & Statistical Metrics",
    summary: "Detect and diagnose silent model degradation in production. Differentiate Data Drift from Concept Drift and Prediction Drift, compute Kolmogorov-Smirnov and Wasserstein metrics, and automate drift reporting.",
    topics: [
      {
        id: "sec-09-01",
        title: "The Three Forms of Model Drift",
        content: `Models silently decay in production even if infrastructure uptime is 100%:
1. Data Drift (Covariate Shift): The distribution of input features $P(X)$ changes.
   Example: Candidates stop asking basic Java syntax questions and start submitting Spring Boot 4 and Virtual Threads queries.
2. Concept Drift: The relationship between input features and target outputs $P(Y|X)$ changes.
   Example: A technical interview answer that was rated 'acceptable' in 2020 is now considered 'deprecated' in 2026.
3. Prediction Drift: The distribution of model predictions $P(\\hat{Y})$ shifts significantly over time (e.g., candidate pass rate plummets from 65% to 20%).`
      },
      {
        id: "sec-09-02",
        title: "Drift Measurement & Evidently AI Integration",
        content: `Statistical tests quantify distribution divergence between a baseline reference dataset and current production traffic:
- Kolmogorov-Smirnov (K-S) Test: Non-parametric test comparing continuous cumulative distributions (p-value < 0.05 indicates drift).
- Population Stability Index (PSI): Common for binned categorical and numerical distributions (PSI > 0.2 indicates significant drift).
- Wasserstein Distance (Earth Mover's Distance): Quantifies the minimum work required to transform one distribution into another.

Evidently AI automates drift report generation:
\`\`\`python
import pandas as pd
from evidently.report import Report
from evidently.metric_preset import DataDriftPreset

report = Report(metrics=[DataDriftPreset()])
report.run(reference_data=baseline_df, current_data=production_df)
report.save_html("drift_report.html")
\`\`\``
      }
    ]
  },
  {
    id: "unit-10",
    number: "10",
    title: "LLM Observability & Generative AI Telemetry",
    subtitle: "TTFT, TPOT, Groundedness, Hallucination Tracking & Cost",
    summary: "Implement dedicated observability for Generative AI applications. Track Time to First Token (TTFT), Time Per Output Token (TPOT), token consumption budgets, groundedness metrics, and safety violations.",
    topics: [
      {
        id: "sec-10-01",
        title: "Core GenAI Telemetry Metrics",
        content: `Traditional server metrics (CPU, RAM, HTTP 200/500) fail to capture LLM quality:
- TTFT (Time to First Token): Measures prompt prefill and queuing latency.
- TPOT (Time Per Output Token): Measures autoregressive decode speed. Target: <30ms per token for natural reading cadence.
- Tokens per Second (Throughput): Total generated tokens across all concurrent streams.
- Token Utilization: Ratio of prompt tokens vs completion tokens.
- Inference Cost Accounting: Real-time calculation of dollars spent per user request based on model pricing.`
      },
      {
        id: "sec-10-02",
        title: "Automated Retraining & Active Learning Triggers",
        content: `When drift or quality drop is verified:
1. Low-scoring interview evaluations flagged by user feedback or LLM-as-a-judge are saved to an annotation queue.
2. Human-in-the-loop reviewers curate and correct the data.
3. DVC versions the newly expanded dataset.
4. Continuous Training (CT) pipeline retrains the LoRA adapter.
5. If new benchmark F1 exceeds the current @champion by >= 1.5%, the model registry alias is automatically updated.`
      }
    ]
  },
  {
    id: "unit-11",
    number: "11",
    title: "Production Architecture for PrepSpaces AI Platform",
    subtitle: "End-to-End System Design & Inter-Module Cohesion",
    summary: "Synthesize Modules 17 (Serving), 18 (Backend), and 19 (MLOps) into a resilient production architecture integrating GitHub Actions, DVC, MLflow, Docker, Kubernetes, and Prometheus.",
    topics: [
      {
        id: "sec-011-01",
        title: "The Unified AI Systems Engineering Blueprint",
        content: `A complete enterprise AI interview platform unites three specialized operational layers:
1. Serving Layer (Module 17): High-throughput vLLM clusters with PagedAttention and continuous batching running on GPU nodes.
2. Backend Layer (Module 18): High-concurrency FastAPI ASGI servers managing user auth, Pydantic validation, Redis Token Bucket rate limiting, and SSE streaming.
3. MLOps Layer (Module 19): GitHub Actions CI/CD pipelines, DVC data versioning, MLflow experiment tracking and model registries, Kubernetes canary deployments, and Evidently drift monitoring.`
      }
    ]
  },
  {
    id: "unit-12",
    number: "12",
    title: "Assessment, Labs & Capstone Architecture",
    subtitle: "Hands-on Mastery Verification & Engineering Roadmap",
    summary: "Consolidate practical engineering competencies through 9 comprehensive laboratory exercises, 18 coding challenges, 30 university-level theory questions, and a full production capstone project.",
    topics: [
      {
        id: "sec-12-01",
        title: "MLOps Engineering Competency Framework",
        content: `Before production deployment, verify mastery across containerization, model tracking, data versioning, automated testing, canary rollouts, and drift observability.`
      }
    ]
  }
];

const practicalLabs = [
  {
    id: "lab-01",
    number: "01",
    title: "Dockerizing a FastAPI Application with Multi-Stage Builds",
    duration: "45 mins",
    difficulty: "Beginner",
    summary: "Construct a multi-stage Dockerfile packaging a FastAPI application into a slim, production-optimized container image under 200MB.",
    code: `# syntax=docker/dockerfile:1
# Multi-Stage Production Dockerfile for FastAPI
FROM python:3.12-slim AS builder

WORKDIR /build
RUN apt-get update && apt-get install -y --no-install-recommends gcc && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# Final minimal runtime image
FROM python:3.12-slim AS runtime

WORKDIR /app
COPY --from=builder /install /usr/local
COPY app/ ./app/

# Run as non-root user for security
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`
  },
  {
    id: "lab-02",
    number: "02",
    title: "Docker Compose Multi-Container Stack (FastAPI + Postgres + Redis)",
    duration: "45 mins",
    difficulty: "Intermediate",
    summary: "Orchestrate an integrated development stack linking an asynchronous FastAPI server, PostgreSQL database, and Redis cache with volume persistence.",
    code: `services:
  backend:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      DATABASE_URL: postgresql://prepspaces:secretpass@postgres:5432/prepspaces_db
      REDIS_URL: redis://redis:6379/0
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: prepspaces
      POSTGRES_PASSWORD: secretpass
      POSTGRES_DB: prepspaces_db
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U prepspaces -d prepspaces_db"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:`
  },
  {
    id: "lab-03",
    number: "03",
    title: "MLflow Experiment Tracking & Model Registry Automation",
    duration: "50 mins",
    difficulty: "Advanced",
    summary: "Train multiple classification models with differing hyperparameters, log metrics to MLflow, and programmatically promote the best run to @champion.",
    code: `import mlflow
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score
from mlflow.tracking import MlflowClient

mlflow.set_tracking_uri("sqlite:///mlflow.db")
mlflow.set_experiment("Java-Interview-Classifier")

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

for n_estimators in [20, 50, 100]:
    with mlflow.start_run(run_name=f"rf_trees_{n_estimators}"):
        model = RandomForestClassifier(n_estimators=n_estimators, max_depth=4, random_state=42)
        model.fit(X_train, y_train)
        preds = model.predict(X_test)
        
        acc = accuracy_score(y_test, preds)
        f1 = f1_score(y_test, preds, average="weighted")
        
        mlflow.log_param("n_estimators", n_estimators)
        mlflow.log_metric("accuracy", acc)
        mlflow.log_metric("f1_score", f1)
        
        mlflow.sklearn.log_model(
            sk_model=model,
            artifact_path="model",
            registered_model_name="JavaInterviewModel"
        )

# Set @champion alias on newest version
client = MlflowClient()
latest_version = client.get_latest_versions("JavaInterviewModel")[0].version
client.set_registered_model_alias("JavaInterviewModel", "champion", latest_version)
print(f"Promoted Version {latest_version} to @champion alias!")`
  },
  {
    id: "lab-04",
    number: "04",
    title: "DVC Data Versioning & Reproducible DAG Pipelines",
    duration: "55 mins",
    difficulty: "Advanced",
    summary: "Version large training datasets with DVC, push to simulated remote storage, configure dvc.yaml stages, and execute reproducible pipeline runs.",
    code: `# Step 1: Initialize Git and DVC
# git init && dvc init

# Step 2: Track training data
# dvc add data/training_dataset.json
# git add data/training_dataset.json.dvc .gitignore
# git commit -m "Track dataset with DVC"

# Step 3: Define dvc.yaml pipeline
# dvc.yaml:
# stages:
#   clean:
#     cmd: python src/clean.py
#     deps: [data/training_dataset.json, src/clean.py]
#     outs: [data/clean.csv]
#   train:
#     cmd: python src/train.py
#     deps: [data/clean.csv, src/train.py]
#     params: [train.learning_rate, train.epochs]
#     outs: [models/model.pkl]
#   evaluate:
#     cmd: python src/evaluate.py
#     deps: [models/model.pkl, data/clean.csv]
#     metrics: [{metrics.json: {cache: false}}]

# Step 4: Reproduce pipeline automatically
# dvc repro`
  },
  {
    id: "lab-05",
    number: "05",
    title: "Production Drift Monitoring with Evidently AI",
    duration: "50 mins",
    difficulty: "Advanced",
    summary: "Compute statistical data drift (Kolmogorov-Smirnov & Population Stability Index) between reference and production prompt distributions, outputting HTML reports.",
    code: `import pandas as pd
import numpy as np
from evidently.report import Report
from evidently.metric_preset import DataDriftPreset

# Generate reference baseline dataset (historic user prompts)
np.random.seed(42)
baseline_data = pd.DataFrame({
    "prompt_token_count": np.random.normal(loc=120, scale=30, size=1000),
    "technical_complexity_score": np.random.uniform(1.0, 5.0, size=1000),
    "response_latency_ms": np.random.normal(loc=450, scale=50, size=1000)
})

# Generate production dataset with severe data drift (users asking complex cloud queries)
production_data = pd.DataFrame({
    "prompt_token_count": np.random.normal(loc=350, scale=80, size=500), # Drifted!
    "technical_complexity_score": np.random.uniform(3.5, 5.0, size=500), # Drifted!
    "response_latency_ms": np.random.normal(loc=850, scale=120, size=500) # Degraded!
})

# Compute drift report
drift_report = Report(metrics=[DataDriftPreset()])
drift_report.run(reference_data=baseline_data, current_data=production_data)
drift_report.save_html("production_drift_report.html")
print("Drift report successfully generated at production_drift_report.html")`
  }
];

const capstoneProject = {
  title: "Automated MLOps Platform for AI Interview Systems",
  duration: "3 - 4 Weeks",
  overview: "Design and implement a complete MLOps platform managing the entire lifecycle of an AI Java Interview evaluation model. The system encompasses dataset versioning with DVC, experiment tracking and model registries with MLflow, multi-stage Docker packaging, GitHub Actions CI/CD workflows, automated Canary deployments on Kubernetes with readiness probes, and production drift monitoring using Evidently AI.",
  architectureMilestones: [
    {
      phase: "Phase 1: Dataset Pipeline & DVC Version Control",
      tasks: [
        "Curate, clean, and version a 50,000-example Java technical interview question-answer dataset using DVC.",
        "Configure remote cloud storage synchronization (S3/GCS) with Git metadata tracking.",
        "Construct multi-stage DAG pipelines in dvc.yaml with caching and automated dependency reproduction."
      ]
    },
    {
      phase: "Phase 2: MLflow Experiment Tracking & Model Registry",
      tasks: [
        "Fine-tune Qwen/Llama LoRA adapters across multiple hyperparameter configurations.",
        "Log hyperparameters, loss curves, F1 scores, and model artifacts to MLflow Tracking.",
        "Register the top-performing candidate in the MLflow Model Registry and tag with @champion alias."
      ]
    },
    {
      phase: "Phase 3: Multi-Stage Containerization & CI/CD Automation",
      tasks: [
        "Write production multi-stage Dockerfile keeping final runtime image under 250MB.",
        "Configure GitHub Actions workflow for linting, pytest automated unit tests, and image building.",
        "Publish tagged commit SHA images to GitHub Container Registry (GHCR)."
      ]
    },
    {
      phase: "Phase 4: Canary Deployment & Evidently Observability",
      tasks: [
        "Deploy Kubernetes manifests with Startup, Liveness, and Readiness probes.",
        "Implement a Canary deployment strategy routing 10% traffic to the new model with automated rollback.",
        "Integrate Evidently AI to monitor data drift and emit alerts when KS p-value < 0.05."
      ]
    }
  ],
  deliverables: [
    "Full GitHub repository containing code, tests, and .github/workflows CI/CD pipeline.",
    "DVC configuration (dvc.yaml, dvc.lock) with remote storage hooks.",
    "MLflow tracking database and registered model with active @champion alias.",
    "Multi-stage Dockerfile and docker-compose.yaml development environment.",
    "Kubernetes deployment manifests with Canary routing and health probes.",
    "Automated drift detection script generating production Evidently reports."
  ]
};

const codingAssignments = [
  {
    id: "task-01",
    title: "1. Minimal Python Dockerfile",
    difficulty: "Easy",
    instructions: "Write a Dockerfile that uses python:3.12-slim, sets WORKDIR to /app, copies requirements.txt, runs pip install, copies main.py, and runs uvicorn.",
    starterCode: `FROM python:3.12-slim
WORKDIR /app
# Complete remaining instructions`
  },
  {
    id: "task-02",
    title: "2. Dockerignore File Configuration",
    difficulty: "Easy",
    instructions: "Create a .dockerignore file that ignores __pycache__, .git, venv, and .env files to keep build contexts small.",
    starterCode: `# .dockerignore
__pycache__/
*.py[cod]
.git/
.env
venv/`
  },
  {
    id: "task-03",
    title: "3. MLflow Parameter Logging",
    difficulty: "Easy",
    instructions: "Use mlflow.log_params to record learning_rate: 0.001 and batch_size: 32 inside an active run.",
    starterCode: `import mlflow

with mlflow.start_run():
    # Log parameters
    pass`
  },
  {
    id: "task-04",
    title: "4. MLflow Metric Logging Over Epochs",
    difficulty: "Medium",
    instructions: "Log evaluation loss across 5 epochs using mlflow.log_metric with the epoch parameter as step.",
    starterCode: `import mlflow

with mlflow.start_run():
    losses = [0.8, 0.5, 0.35, 0.25, 0.18]
    # Log each loss with its step
    pass`
  },
  {
    id: "task-05",
    title: "5. MLflow Model Loading with Alias",
    difficulty: "Medium",
    instructions: "Write a function load_champion_model that loads the model tagged with @champion alias using mlflow.pyfunc.load_model.",
    starterCode: `import mlflow.pyfunc

def load_champion_model(model_name: str):
    # Load and return model using alias
    pass`
  },
  {
    id: "task-06",
    title: "6. DVC Data Tracking Command Runner",
    difficulty: "Medium",
    instructions: "Write a Python script that invokes subprocess to execute 'dvc add' on a specified file path.",
    starterCode: `import subprocess

def track_dataset_with_dvc(filepath: str):
    # Run dvc add via subprocess
    pass`
  },
  {
    id: "task-07",
    title: "7. GitHub Actions Basic Test Step",
    difficulty: "Medium",
    instructions: "Write the YAML snippet for a GitHub Actions job step that installs pytest and runs it quietly.",
    starterCode: `- name: Run Pytest
  run: |
    pip install pytest
    pytest -q`
  },
  {
    id: "task-08",
    title: "8. Docker Compose Healthcheck Configuration",
    difficulty: "Medium",
    instructions: "Write a docker-compose healthcheck block for PostgreSQL verifying pg_isready with interval 5s.",
    starterCode: `healthcheck:
  test: ["CMD-SHELL", "pg_isready -U user"]
  interval: 5s
  timeout: 5s
  retries: 3`
  },
  {
    id: "task-09",
    title: "9. Multi-Stage Dockerfile Builder Pattern",
    difficulty: "Medium",
    instructions: "Write a multi-stage Dockerfile that installs dependencies to /install in stage 1 and copies to /usr/local in stage 2.",
    starterCode: `FROM python:3.12-slim AS builder
# Stage 1

FROM python:3.12-slim AS runtime
# Stage 2`
  },
  {
    id: "task-10",
    title: "10. Model Evaluation Threshold Gatekeeper",
    difficulty: "Medium",
    instructions: "Write a function evaluate_candidate_model(new_f1, champion_f1, min_gain=0.015) returning True only if new_f1 meets threshold.",
    starterCode: `def evaluate_candidate_model(new_f1: float, champion_f1: float, min_gain: float = 0.015) -> bool:
    # Return True if new_f1 >= champion_f1 + min_gain
    pass`
  },
  {
    id: "task-11",
    title: "11. Kubernetes Readiness Probe Definition",
    difficulty: "Medium",
    instructions: "Write a Kubernetes YAML container readinessProbe checking /ready on port 8000 with initialDelaySeconds 30.",
    starterCode: `readinessProbe:
  httpGet:
    path: /ready
    port: 8000
  initialDelaySeconds: 30
  periodSeconds: 10`
  },
  {
    id: "task-12",
    title: "12. Canary Traffic Split Router Simulator",
    difficulty: "Medium",
    instructions: "Write a routing function route_request(canary_percentage: int) that returns 'v2' canary_percentage of the time and 'v1' otherwise.",
    starterCode: `import random

def route_request(canary_percentage: int) -> str:
    # Return 'v2' if random value < canary_percentage, else 'v1'
    pass`
  },
  {
    id: "task-13",
    title: "13. Kolmogorov-Smirnov Data Drift Test",
    difficulty: "Hard",
    instructions: "Use scipy.stats.ks_2samp to test for drift between reference and production token counts, returning True if p < 0.05.",
    starterCode: `from scipy.stats import ks_2samp

def detect_drift_ks(ref_data: list[float], prod_data: list[float]) -> bool:
    # Compute KS test; return True if p_value < 0.05
    pass`
  },
  {
    id: "task-14",
    title: "14. Population Stability Index (PSI) Calculator",
    difficulty: "Hard",
    instructions: "Implement the Population Stability Index formula: sum((prod_pct - ref_pct) * ln(prod_pct / ref_pct)).",
    starterCode: `import numpy as np

def calculate_psi(ref_dist: np.ndarray, prod_dist: np.ndarray) -> float:
    # Calculate and return PSI
    pass`
  },
  {
    id: "task-15",
    title: "15. Automated Rollback Trigger on Error Spikes",
    difficulty: "Hard",
    instructions: "Write a monitor function that evaluates a list of recent HTTP status codes and triggers rollback if error rate > 5%.",
    starterCode: `def check_error_threshold_and_rollback(status_codes: list[int], threshold: float = 0.05) -> bool:
    # Calculate 5xx error rate; return True if rollback required
    pass`
  },
  {
    id: "task-16",
    title: "16. DVC DAG Stage Generator",
    difficulty: "Hard",
    instructions: "Write a Python script that outputs a valid dvc.yaml string given a dictionary of stage configurations.",
    starterCode: `import yaml

def generate_dvc_stage_yaml(stages_dict: dict) -> str:
    return yaml.dump({"stages": stages_dict}, sort_keys=False)`
  },
  {
    id: "task-17",
    title: "17. GenAI Cost Tracker per Request",
    difficulty: "Hard",
    instructions: "Calculate request cost given input_tokens, output_tokens, price_per_million_input, and price_per_million_output.",
    starterCode: `def compute_request_cost(input_tokens: int, output_tokens: int, price_in: float = 0.15, price_out: float = 0.60) -> float:
    # Return total cost in USD
    pass`
  },
  {
    id: "task-18",
    title: "18. Evidently AI Drift Report Exporter",
    difficulty: "Hard",
    instructions: "Write a function generating an Evidently DataDriftPreset report comparing two pandas DataFrames and saving to HTML.",
    starterCode: `from evidently.report import Report
from evidently.metric_preset import DataDriftPreset
import pandas as pd

def generate_drift_html(ref_df: pd.DataFrame, prod_df: pd.DataFrame, output_path: str):
    # Run Evidently report and save to output_path
    pass`
  }
];

const theoryQuestions = [
  {
    id: "theory-01",
    question: "What is MLOps and why is traditional DevOps insufficient for machine learning applications?",
    answer: "MLOps extends DevOps by addressing the unique lifecycle demands of machine learning systems. Traditional DevOps manages code and static binaries, where behavior changes almost exclusively with code updates. In machine learning, an application's behavior is jointly determined by code, training data distributions, and model weights. MLOps introduces dataset versioning, experiment tracking, model registries, continuous evaluation, and drift monitoring to manage this dual code-and-data lifecycle."
  },
  {
    id: "theory-02",
    question: "What is the difference between a Docker image and a Docker container?",
    answer: "A Docker image is a read-only, layered, immutable template packaging an application, runtime, libraries, environment variables, and default configuration. A Docker container is a runnable, isolated instance created from an image. When a container starts, a thin read-write layer is added on top of the immutable image layers to capture runtime state changes."
  },
  {
    id: "theory-03",
    question: "Why should large model weights never be packaged directly inside a Docker application image?",
    answer: "Foundation models and LLMs range from 4GB to over 70GB. Packaging weights directly inside application images causes severe CI/CD bloat: every bugfix requires rebuilding, pushing, and pulling multi-gigabyte layers across runners and servers, inflating registry costs. Decoupling weights (storing them in S3/GCS or shared NFS volumes) allows lightweight application containers (<250MB) to be deployed in seconds while mounting or streaming model artifacts independently."
  },
  {
    id: "theory-04",
    question: "How do multi-stage Docker builds reduce container image size and enhance production security?",
    answer: "Multi-stage builds use multiple 'FROM' statements in a single Dockerfile. The first stage (builder) installs compilers, development packages, and build tools needed to compile wheels. The final runtime stage copies only the compiled artifacts and runtime dependencies, discarding build tools, package managers, and temporary caches. This slashes image sizes by 80%+ and minimizes the attack surface by excluding unnecessary binaries from production."
  },
  {
    id: "theory-05",
    question: "Explain the four core tracking primitives in MLflow: Parameters, Metrics, Artifacts, and Metadata.",
    answer: "1) Parameters: Static key-value configurations set before a run (e.g., learning rate, batch size, LoRA rank). 2) Metrics: Quantitative values recorded over time/epochs (e.g., training loss, validation accuracy, F1 score). 3) Artifacts: Binary output files produced by a run (model checkpoints, tokenizer files, evaluation plots). 4) Metadata: System details automatically captured by MLflow (git commit SHA, user, hardware specifications, execution duration)."
  },
  {
    id: "theory-06",
    question: "How do modern MLflow Model Aliases (@champion / @challenger) improve model lifecycle management?",
    answer: "Legacy MLOps relied on rigid model stages (Staging, Production, Archived). Modern MLflow uses flexible model aliases: '@champion' references the approved production model, while '@challenger' references a candidate under evaluation. Inference servers resolve models by alias ('models:/JavaInterviewer@champion'). Upgrading to a new model version merely reassigns the alias pointer, enabling instantaneous cutovers and zero-downtime rollbacks without code modifications."
  },
  {
    id: "theory-07",
    question: "How does DVC enable dataset versioning without bloating the Git repository?",
    answer: "DVC computes content-addressable SHA-256 hashes of large datasets, stores the raw files in a local cache or remote object store (S3, GCS), and generates tiny human-readable '.dvc' pointer files (containing the hash and file size). Developers commit only the '.dvc' pointer files to Git. When collaborators clone the repo, running 'dvc pull' fetches the exact dataset version matching the active Git commit."
  },
  {
    id: "theory-08",
    question: "What is a DVC pipeline and how does 'dvc repro' ensure computational reproducibility?",
    answer: "A DVC pipeline ('dvc.yaml') organizes multi-stage ML workflows as a Directed Acyclic Graph (DAG), defining dependencies ('deps'), parameters ('params'), and outputs ('outs') for each step. When running 'dvc repro', DVC checks the hashes of all dependencies. If only 'train.py' changed, it skips unchanged preprocessing stages, executes only the downstream training and evaluation steps, and updates 'dvc.lock' to record exact reproducibility hashes."
  },
  {
    id: "theory-09",
    question: "What is Continuous Training (CT) and how does it differ from Continuous Integration (CI)?",
    answer: "CI (Continuous Integration) automates code validation: whenever developers push code, automated workflows run linters, type checks, and unit tests to ensure software integrity. CT (Continuous Training) is specific to machine learning: it automates the retraining and evaluation of models when new production data arrives, on a recurring schedule, or when drift detection alerts indicate model quality degradation."
  },
  {
    id: "theory-10",
    question: "Compare Blue-Green deployment with Canary deployment for AI model rollouts.",
    answer: "Blue-Green deployment runs two identical environments: Blue (active v1 serving 100% of traffic) and Green (v2). A traffic router switches 100% of traffic instantly from Blue to Green, enabling immediate rollbacks if errors occur, but requiring 2x infrastructure. Canary deployment routes a tiny percentage (e.g. 5%) of production traffic to the new v2 model, while 95% remains on v1. Telemetry is monitored; if stable, traffic is incrementally expanded (10% -> 50% -> 100%), limiting blast radius if v2 fails."
  },
  {
    id: "theory-11",
    question: "What is Shadow Deployment and why is it particularly valuable for Generative AI applications?",
    answer: "In Shadow Deployment, the API gateway duplicates incoming live requests, sending them to both the production v1 model and the candidate v2 model. Only the v1 response is returned to the user, while the v2 response is logged for offline analysis. This allows engineering teams to benchmark real-world latency, memory utilization, answer quality, and hallucination rates under realistic production load without risking user experience."
  },
  {
    id: "theory-12",
    question: "Explain the role of Kubernetes Startup, Liveness, and Readiness probes in LLM serving.",
    answer: "Foundation models can take several minutes to allocate GPU memory and compile CUDA kernels. 1) Startup Probe: Grants slow-booting LLM containers generous time (e.g. 180s) to initialize before liveness checks begin. 2) Liveness Probe: Verifies the process is alive; failure causes Kubernetes to restart the container. 3) Readiness Probe: Verifies the model weights are loaded and ready to accept inference requests; failure diverts traffic away from the pod without killing it."
  },
  {
    id: "theory-13",
    question: "What is Data Drift (Covariate Shift) and how does it differ from Concept Drift?",
    answer: "Data Drift occurs when the statistical distribution of input data P(X) changes over time (e.g. users stop asking about Java 8 and begin submitting Java 21 Virtual Thread queries). Concept Drift occurs when the relationship between inputs and target outputs P(Y|X) changes (e.g. coding patterns considered optimal in 2020 become deprecated security anti-patterns in 2026). Data drift can be monitored without labels; concept drift requires ground truth labels."
  },
  {
    id: "theory-14",
    question: "What is Prediction Drift and what are its primary causes in production AI?",
    answer: "Prediction Drift refers to significant shifts in the distribution of model outputs P(Y_hat) over time (e.g. candidate pass rate drops from 70% to 25%). It can be caused by upstream data drift, unannounced prompt format modifications, model weight corruption, software dependency mismatches, or changing user demographic distributions."
  },
  {
    id: "theory-15",
    question: "How does the Kolmogorov-Smirnov (KS) test detect data drift in continuous feature distributions?",
    answer: "The two-sample Kolmogorov-Smirnov test compares the empirical cumulative distribution functions (eCDFs) of a reference baseline dataset and a production dataset. It calculates the maximum vertical distance (D-statistic) between the two curves. If the resulting p-value is below a significance threshold (typically alpha = 0.05), the null hypothesis that both samples come from the same distribution is rejected, indicating statistically significant drift."
  },
  {
    id: "theory-16",
    question: "What is the Population Stability Index (PSI) and how are its thresholds interpreted?",
    answer: "PSI measures the shift in distribution across binned segments between a reference dataset and current data: PSI = sum((Actual% - Expected%) * ln(Actual% / Expected%)). Standard interpretation thresholds: PSI < 0.1 indicates no significant distribution change; 0.1 <= PSI < 0.2 indicates moderate change requiring monitoring; PSI >= 0.2 indicates significant distribution shift necessitating model investigation and potential retraining."
  },
  {
    id: "theory-17",
    question: "Why are TTFT and TPOT essential metrics for LLM observability?",
    answer: "Time to First Token (TTFT) captures prompt prefill, tokenization, and request queuing delays; high TTFT makes applications feel sluggish and unresponsive. Time Per Output Token (TPOT) measures the throughput of the autoregressive decode phase; if TPOT exceeds 40ms per token, streamed text appears jerky and unnatural. Monitoring both decouples compute-bound bottlenecks (prefill) from memory-bandwidth bottlenecks (decode)."
  },
  {
    id: "theory-18",
    question: "How do automated rollbacks work in Kubernetes during a canary deployment?",
    answer: "A deployment controller (such as Argo Rollouts or Flagger) monitors Prometheus metrics (e.g. 5xx HTTP error percentage, p99 latency) during canary traffic increments. If the canary pod's error rate exceeds a defined threshold (e.g. >1%) or latency breaches SLOs, the controller immediately stops the rollout, sets canary traffic to 0%, restores 100% traffic to the stable deployment, and triggers an incident alert."
  },
  {
    id: "theory-19",
    question: "What is the function of a model registry in enterprise AI governance?",
    answer: "A model registry serves as a single source of truth for approved models, providing model lineage (connecting models to training data, git commits, and parameters), version control, model status metadata, approval workflow tracking, and artifact integrity verification (SHA hashes). It prevents rogue or unvetted experimental models from reaching production."
  },
  {
    id: "theory-20",
    question: "Why should Docker containers run as non-root users in production?",
    answer: "By default, Docker containers run as the root user. If an attacker discovers an application vulnerability (such as remote code execution or container breakout), running as root grants them root-level access on the host or inside the container filesystem. Creating and switching to a dedicated non-root user ('RUN useradd -m appuser && USER appuser') enforces the principle of least privilege."
  },
  {
    id: "theory-21",
    question: "How does caching in GitHub Actions optimize CI/CD pipeline execution times?",
    answer: "GitHub Actions caches downloaded pip wheels, Docker layers, and node_modules between workflow runs using cache keys based on dependency lockfiles ('hashFiles('requirements.txt')'). If dependencies have not changed, steps restore dependencies from cache in seconds rather than redownloading and recompiling packages from scratch on every commit."
  },
  {
    id: "theory-22",
    question: "What is model lineage and why is it critical for regulatory compliance and auditability?",
    answer: "Model lineage is the complete audit trail documenting how a production model was created: the exact training code version (Git SHA), dataset snapshot (DVC hash), hyperparameters, hardware environment, evaluation benchmarks, and approving engineer. In regulated domains (finance, healthcare, hiring AI), model lineage is legally required to explain and audit model decisions."
  },
  {
    id: "theory-23",
    question: "What role does Prometheus and Grafana play in an MLOps architecture?",
    answer: "Prometheus scrapes and stores time-series operational metrics (request counts, TTFT latency buckets, active SSE streams, GPU VRAM utilization, error rates). Grafana visualizes these metrics through real-time dashboards and evaluates alerting rules, dispatching alerts to Slack/PagerDuty when thresholds (e.g. p95 latency > 800ms) are violated."
  },
  {
    id: "theory-24",
    question: "Why should continuous training pipelines include an evaluation gate against a champion model?",
    answer: "Retraining a model on new data does not guarantee improved performance; new data may contain noisy labels, edge cases, or catastrophic forgetting of previously learned capabilities. An automated evaluation gate tests the newly trained model against the active @champion on a frozen benchmark. The challenger is only promoted if it matches or exceeds the champion's score across all critical metrics."
  },
  {
    id: "theory-25",
    question: "What is the difference between data versioning with DVC and database snapshots?",
    answer: "Database snapshots are heavy binary dumps of entire relational tables, difficult to branch, merge, or diff across git workflows. DVC treats data files as versionable file system assets, integrating seamlessly with Git branches, supporting remote cloud storage syncing, and tracking stage dependencies for pipeline reproducibility."
  },
  {
    id: "theory-26",
    question: "How do Kubernetes ConfigMaps and Secrets decouple configuration from container images?",
    answer: "ConfigMaps store non-sensitive configuration keys (port numbers, feature flags, service URLs), while Secrets store base64-encoded encrypted sensitive credentials (database passwords, API keys). They are injected into Pods as environment variables or mounted files at runtime, allowing the same container image to run across development, staging, and production without rebuilding."
  },
  {
    id: "theory-27",
    question: "What is Active Learning in a production MLOps loop?",
    answer: "Active Learning automatically identifies production user queries where the model had high uncertainty, poor evaluation scores, or user dissatisfaction flags. These high-value edge cases are routed to human annotators for review and correction, and subsequently added to the DVC-versioned training dataset to maximize the impact of the next retraining cycle."
  },
  {
    id: "theory-28",
    question: "What is the difference between Horizontal Pod Autoscaling (HPA) and Vertical Pod Autoscaling (VPA)?",
    answer: "HPA (Horizontal Pod Autoscaler) dynamically scales the number of running pod replicas up or down based on metrics like CPU utilization or custom inference queue depth. VPA (Vertical Pod Autoscaler) adjusts the CPU and memory resource requests/limits assigned to individual pods. For stateless API and inference serving, HPA is preferred to absorb traffic surges without restarting pods."
  },
  {
    id: "theory-29",
    question: "How does Evidently AI compute embedding drift for multimodal or language models?",
    answer: "Evidently reduces high-dimensional vector embeddings to 2D/3D components using PCA or UMAP, or measures distribution shifts in pairwise cosine distances between reference and production embeddings. A shift in the geometric centroid or spread of production embeddings indicates user queries are exploring unfamiliar semantic spaces."
  },
  {
    id: "theory-30",
    question: "How would you architect a fully automated MLOps pipeline for an AI technical interview platform?",
    answer: "1) Git versions backend and training code. 2) DVC versions interview datasets and manages reproducible training pipelines. 3) PyTorch/LoRA trains models, logging metrics and artifacts to MLflow. 4) An automated evaluation gate compares candidate models against the active @champion. 5) Approved models are registered in the MLflow Model Registry. 6) GitHub Actions runs tests and builds a multi-stage Docker image (<250MB). 7) Kubernetes deploys the service via a 10% Canary rollout with health probes. 8) Evidently and Prometheus monitor latency, TTFT, and data drift, triggering automated rollbacks on failure or retraining loops on verified distribution shift."
  }
];

const quizQuestions = [
  {
    id: "quiz-01",
    question: "Why is traditional DevOps insufficient for managing machine learning systems?",
    options: [
      "DevOps cannot deploy applications to the cloud",
      "ML application behavior depends on code, model weights, and changing data distributions, requiring dataset and model lifecycle versioning",
      "DevOps only works with compiled C++ binaries",
      "ML models cannot be packaged inside Docker containers"
    ],
    correctIndex: 1,
    explanation: "ML systems are uniquely stateful and data-driven; their performance can change without any code change when underlying data distributions shift."
  },
  {
    id: "quiz-02",
    question: "Why should large foundation model weights be decoupled from Docker container images?",
    options: [
      "Docker does not support files larger than 100 megabytes",
      "Baking multi-gigabyte weights into images causes massive CI/CD bloat, slow registry transfers, and prevents independent code updates",
      "Model weights run faster when stored in Git repositories",
      "Container runtimes cannot read binary weight files"
    ],
    correctIndex: 1,
    explanation: "Decoupling weights allows application containers to remain lightweight (<250MB), enabling rapid CI/CD cycles while mounting or streaming weights from object storage."
  },
  {
    id: "quiz-03",
    question: "What is the primary advantage of a multi-stage Docker build for Python applications?",
    options: [
      "It allows the container to run on both Windows and Linux simultaneously",
      "It separates build tools and compilers from the final runtime image, drastically reducing container size and security vulnerabilities",
      "It automatically trains machine learning models during the build step",
      "It eliminates the need for requirements.txt"
    ],
    correctIndex: 1,
    explanation: "Multi-stage builds discard build tools, compilers, and pip caches, producing slim production images with smaller attack surfaces and faster pull times."
  },
  {
    id: "quiz-04",
    question: "How do modern MLflow Model Aliases (@champion / @challenger) improve model deployments?",
    options: [
      "They automatically delete older model versions from disk",
      "They allow inference services to resolve active production models dynamically without requiring application redeployment or code changes",
      "They convert PyTorch models into JavaScript code",
      "They enforce password authentication on model weights"
    ],
    correctIndex: 1,
    explanation: "Aliases allow inference clients to query '@champion' while operators reassign the alias pointer upon successful model validation."
  },
  {
    id: "quiz-05",
    question: "How does DVC track large datasets without committing binary files into Git?",
    options: [
      "It compresses datasets into zip files before committing them to Git",
      "It computes SHA-256 hashes, stores raw files in remote storage (S3/GCS), and commits lightweight .dvc metadata pointer files to Git",
      "It converts datasets into SQL tables inside PostgreSQL",
      "It deletes old datasets whenever new files are added"
    ],
    correctIndex: 1,
    explanation: "DVC tracks data by storing raw files in content-addressable storage while committing tiny .dvc pointer files into Git."
  },
  {
    id: "quiz-06",
    question: "What is the primary operational mechanism of a Canary deployment?",
    options: [
      "Instantly switching 100% of traffic from an old version to a new version",
      "Routing a small percentage of live production traffic to the new model version while monitoring error rates and latency before expanding rollout",
      "Running all requests in a development sandbox without user traffic",
      "Rebuilding the model from scratch every time a user logs in"
    ],
    correctIndex: 1,
    explanation: "Canary rollouts expose a new version to a small slice of production traffic (e.g. 5%), mitigating the blast radius of unexpected regressions."
  },
  {
    id: "quiz-07",
    question: "What is the purpose of a Kubernetes Readiness Probe for an LLM inference pod?",
    options: [
      "To restart the container if CPU usage exceeds 90%",
      "To verify that model weights have finished loading into GPU memory before routing user traffic to the pod",
      "To run automated unit tests on the container",
      "To check whether the developer has logged into Docker Hub"
    ],
    correctIndex: 1,
    explanation: "Readiness probes prevent traffic from reaching slow-loading model pods until weights are allocated and endpoints are ready to serve inference."
  },
  {
    id: "quiz-08",
    question: "What is Data Drift (Covariate Shift)?",
    options: [
      "A database disk corruption error",
      "A shift in the statistical distribution of input features P(X) compared to the baseline training dataset",
      "A bug where the model produces random outputs",
      "An increase in API server memory consumption"
    ],
    correctIndex: 1,
    explanation: "Data drift occurs when incoming production prompt or feature distributions differ significantly from the data used during model training."
  },
  {
    id: "quiz-09",
    question: "What is the difference between Data Drift and Concept Drift?",
    options: [
      "Data drift affects images; concept drift affects text",
      "Data drift is a change in input distribution P(X); concept drift is a change in the relationship between inputs and target outputs P(Y|X)",
      "They are identical terms with no practical difference",
      "Concept drift only occurs during local development"
    ],
    correctIndex: 1,
    explanation: "Data drift represents shifting inputs; concept drift represents a fundamental change in the definition of the correct target output for given inputs."
  },
  {
    id: "quiz-10",
    question: "In a statistical drift test like Kolmogorov-Smirnov, what indicates that drift has occurred?",
    options: [
      "A p-value greater than 0.99",
      "A p-value less than the significance threshold (typically p < 0.05)",
      "The test takes longer than 10 seconds to execute",
      "The dataset contains duplicate rows"
    ],
    correctIndex: 1,
    explanation: "A p-value < 0.05 rejects the null hypothesis that reference and production datasets come from the same distribution, confirming drift."
  },
  {
    id: "quiz-11",
    question: "What is the purpose of Shadow Deployment in Generative AI systems?",
    options: [
      "Hiding model weights behind encryption keys",
      "Duplicating production user prompts to a candidate model in the background to evaluate real-world quality without exposing users to risk",
      "Running models only during off-peak nighttime hours",
      "Training models without supervised human labels"
    ],
    correctIndex: 1,
    explanation: "Shadow deployments mirror live traffic to candidate models, allowing safe benchmarking of latency and output quality without affecting users."
  },
  {
    id: "quiz-12",
    question: "What are the two core telemetry metrics used to evaluate LLM generation responsiveness?",
    options: [
      "Disk I/O and RAM usage",
      "Time to First Token (TTFT) and Time Per Output Token (TPOT)",
      "Ethernet bandwidth and CPU fan speed",
      "SQL query time and table row count"
    ],
    correctIndex: 1,
    explanation: "TTFT measures prefill responsiveness; TPOT measures the throughput of incremental autoregressive decode iterations."
  }
];

const competenciesChecklist = [
  { id: "comp-01", label: "Understand MLOps principles and the 10-stage machine learning lifecycle" },
  { id: "comp-02", label: "Differentiate DevOps from MLOps across data, model, and code dimensions" },
  { id: "comp-03", label: "Write production multi-stage Dockerfiles under 250MB" },
  { id: "comp-04", label: "Orchestrate multi-container backend stacks with Docker Compose" },
  { id: "comp-05", label: "Decouple large foundation model weights from container images" },
  { id: "comp-06", label: "Configure GPU pass-through with the NVIDIA Container Toolkit" },
  { id: "comp-07", label: "Track parameters, metrics, and artifacts using MLflow Tracking" },
  { id: "comp-08", label: "Manage model versions and @champion / @challenger aliases in MLflow" },
  { id: "comp-09", label: "Version large training datasets using DVC and remote cloud storage" },
  { id: "comp-10", label: "Construct reproducible DAG pipelines using dvc.yaml and dvc repro" },
  { id: "comp-11", label: "Implement Continuous Integration (CI) test workflows in GitHub Actions" },
  { id: "comp-12", label: "Automate Docker image building and publishing to container registries" },
  { id: "comp-13", label: "Establish automated evaluation gates before model deployment" },
  { id: "comp-14", label: "Implement Blue-Green deployment cutovers for instant rollbacks" },
  { id: "comp-15", label: "Implement Canary deployments with gradual traffic splitting" },
  { id: "comp-16", label: "Conduct Shadow deployments to benchmark real-world AI traffic" },
  { id: "comp-17", label: "Configure Kubernetes Startup, Liveness, and Readiness probes for LLMs" },
  { id: "comp-18", label: "Distinguish Data Drift, Concept Drift, and Prediction Drift" },
  { id: "comp-19", label: "Calculate Kolmogorov-Smirnov and Population Stability Index drift metrics" },
  { id: "comp-20", label: "Generate automated drift monitoring reports with Evidently AI" },
  { id: "comp-21", label: "Track GenAI telemetry: TTFT, TPOT, tokens/sec, and request costs" },
  { id: "comp-22", label: "Automate Active Learning loops from production user feedback" },
  { id: "comp-23", label: "Design a complete end-to-end MLOps architecture for enterprise platforms" }
];

const learningResources = [
  {
    title: "Docker Documentation & Best Practices",
    url: "https://docs.docker.com/",
    description: "Official guide covering images, containers, multi-stage builds, and Compose orchestration."
  },
  {
    title: "MLflow Tracking & Model Registry",
    url: "https://mlflow.org/docs/latest/",
    description: "Authoritative manual for experiment tracking, model artifacts, and version aliases."
  },
  {
    title: "DVC (Data Version Control) Documentation",
    url: "https://dvc.org/doc",
    description: "Comprehensive guide for versioning large datasets and building reproducible DAG pipelines."
  },
  {
    title: "GitHub Actions Automation Reference",
    url: "https://docs.github.com/en/actions",
    description: "Workflows, runners, automated testing, secrets management, and container publishing."
  },
  {
    title: "Kubernetes Core Concepts & Probes",
    url: "https://kubernetes.io/docs/concepts/",
    description: "Cluster architecture, Pods, Deployments, Rolling Updates, and Startup/Liveness/Readiness probes."
  },
  {
    title: "Evidently AI Machine Learning Observability",
    url: "https://docs.evidentlyai.com/",
    description: "Open-source evaluation, data drift detection, and production model quality monitoring."
  }
];

const outputContent = `// Module 19: AI MLOps, Deployment & CI/CD Curriculum Data
// Generated automatically for PrepSpaces AI Engineering & Generative AI track.

export const overview = ${JSON.stringify(overview, null, 2)};

export const curriculumUnits = ${JSON.stringify(curriculumUnits, null, 2)};

export const practicalLabs = ${JSON.stringify(practicalLabs, null, 2)};

export const capstoneProject = ${JSON.stringify(capstoneProject, null, 2)};

export const codingAssignments = ${JSON.stringify(codingAssignments, null, 2)};

export const theoryQuestions = ${JSON.stringify(theoryQuestions, null, 2)};

export const quizQuestions = ${JSON.stringify(quizQuestions, null, 2)};

export const competenciesChecklist = ${JSON.stringify(competenciesChecklist, null, 2)};

export const learningResources = ${JSON.stringify(learningResources, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/Componets/aiMlopsDeploymentData.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log('Successfully generated Module 19 curriculum data at ' + outputPath);
console.log('File size: ' + fs.statSync(outputPath).size + ' bytes');
