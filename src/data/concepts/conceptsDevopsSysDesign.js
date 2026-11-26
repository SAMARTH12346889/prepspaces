/**
 * Concepts Batch 4: DevOps & SRE (5) + System Design (5)
 */

export const CONCEPTS_DEVOPS_SYSDESIGN = [
  // ================= DEVOPS & SRE (5) =================
  {
    slug: "docker-containers-vs-vms",
    category: "devops",
    subcategory: "Containers & Linux Isolation",
    difficulty: "Beginner",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Docker Containers vs Virtual Machines: Namespaces, Cgroups & Image Layers",
    metaTitle: "Docker Containers vs Virtual Machines Explained | PrepSpaces Concepts",
    description:
      "Compare Docker Containers and Virtual Machines: shared host Linux kernel via Namespaces + cgroups v2 + OverlayFS vs full Hypervisor guest OS boots, security isolation, and multi-stage Dockerfiles.",
    keywords: "Docker vs Virtual Machines, Linux namespaces and cgroups, OverlayFS image layers, multi-stage Dockerfile, container isolation",
    directAnswer:
      "Virtual Machines emulate virtual hardware via a Hypervisor (`KVM`/`Xen`) so each VM boots an entire independent Guest OS kernel (`GBs`, seconds-to-minutes boot). Docker Containers share the **host OS kernel** cleanly in isolation using Linux **Namespaces** (visibility: PID, net, mount), **Control Groups / cgroups** (resource caps: CPU, RAM), and **OverlayFS** layered filesystems—booting in milliseconds.",
    sections: [
      {
        heading: "1. Linux Primitives Under the Hood: Namespaces + Cgroups + OverlayFS",
        paragraphs: [
          "There is no magic 'container object' inside the Linux kernel—a running container is simply an isolated Linux process shaped by three kernel primitives:",
        ],
        bullets: [
          "Namespaces (Isolation of what you can SEE): `pid` gives container PID 1; `net` gives its own virtual NIC/IP stack; `mnt` isolates filesystem root; `user` maps non-root host UIDs.",
          "cgroups v2 (Limits on what you can USE): Hard-caps CPU quota (`--cpus`), RAM (`--memory`), and disk I/O so one noisy container cannot starve sibling services.",
          "OverlayFS (Copy-on-Write Image Layers): Read-only base OS + dependency layers share cleanly on disk across containers while runtime writes touch only a thin ephemeral top writable layer.",
        ],
      },
      {
        heading: "2. Security Boundary Trade-Off: Hypervisors vs Shared Kernel",
        paragraphs: [
          "Because containers share one host kernel syscall surface, a kernel privilege-escalation exploit could theoretically affect neighboring containers unless hardened with non-root `USER`, Seccomp syscall filtering, dropped Linux Capabilities, and read-only rootfs. Multi-tenant untrusted workloads (like arbitrary user code sandboxes) layer **microVMs (Firecracker)** or **gVisor** on top.",
        ],
      },
    ],
    codeExample: {
      title: "Production Multi-Stage Dockerfile Cutting Image Size & Attack Surface",
      language: "dockerfile",
      code: `# Stage 1: Full build toolchain (discarded in final image)
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Minimal non-root runtime image
FROM node:22-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
USER appuser
EXPOSE 3000
CMD ["node", "dist/server.js"]`,
      explanation:
        "Multi-stage builds discard compilers and `devDependencies` before production, while `USER appuser` removes root inside the container.",
    },
    commonMistakes: [
      {
        mistake: "Running containers as default `root` (`UID 0`) without dropping capabilities.",
        correction:
          "Always declare a dedicated non-root `USER` and `--cap-drop=ALL` in Kubernetes/Docker security contexts.",
      },
      {
        mistake: "Copying `.env` secrets or `.git` folders (`COPY . .`) without a `.dockerignore` file.",
        correction:
          "Secrets baked inside intermediate Dockerfile layers stay permanently visible via `docker history` even if deleted in a later `RUN rm` step!",
      },
      {
        mistake: "Placing `COPY . .` BEFORE `npm ci` / `pip install`.",
        correction:
          "Any single-line code edit invalidates the dependency install layer cache—copy `package-lock.json` and install dependencies first.",
      },
    ],
    interviewQuestions: [
      {
        question: "What Linux kernel features make Docker containers possible?",
        answer:
          "**Namespaces** isolate process views (`pid`, `net`, `mnt`, `ipc`, `uts`, `user`), **cgroups** enforce CPU/memory/I/O quotas, and **UnionFS/OverlayFS** provides Copy-on-Write layered image mounts.",
      },
      {
        question: "Why might a serverless platform use Firecracker microVMs instead of raw Docker containers for untrusted multi-tenant code?",
        answer:
          "Docker containers share the host Linux kernel syscall table; Firecracker hypervisor isolation gives every tenant its own tiny dedicated kernel in ~125ms boot time.",
      },
      {
        question: "Why does deleting a secret file on a later `RUN rm /app/.env` Dockerfile line fail to secure the image?",
        answer:
          "Docker images are immutable union layer stacks—the file still exists intact inside the earlier layer tarball.",
      },
    ],
    relatedConcepts: [
      "/concepts/devops/kubernetes-pod-lifecycle",
      "/concepts/os/process-vs-thread",
      "/concepts/cloud/serverless-cold-starts",
    ],
    relatedCourse: {
      title: "DevOps & Site Reliability Engineering (SRE)",
      route: "/learning/devops/linux",
      description: "Master Linux systems, Dockerfiles, container namespaces, Kubernetes, Terraform, and SRE.",
    },
    relatedModules: [
      { title: "DevOps Module 3: Docker & Container Isolation", route: "/learning/devops/docker" },
      { title: "OS Module 12: VMs, Hypervisors & Linux Containers", route: "/learning/os/virtualization" },
    ],
    practiceAction: {
      label: "Practice DevOps Container Interviews",
      to: "/interview",
      summary: "Select DevOps & SRE Track -> Docker to explain namespaces, cgroups, and multi-stage builds.",
    },
  },
  {
    slug: "kubernetes-pod-lifecycle",
    category: "devops",
    subcategory: "Orchestration",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Kubernetes Pod Lifecycle, Health Probes, Services & Graceful Shutdown",
    metaTitle: "Kubernetes Pod Lifecycle, Probes & Services Explained | PrepSpaces Concepts",
    description:
      "Master Kubernetes Pod scheduling and lifecycle: Pending/Running/Succeeded/Failed/CrashLoopBackOff phases, Liveness vs Readiness vs Startup probes, Services, and zero-downtime SIGTERM drains.",
    keywords: "Kubernetes Pod lifecycle, liveness vs readiness probe, CrashLoopBackOff, Kubernetes Service ClusterIP, SIGTERM graceful shutdown",
    directAnswer:
      "In Kubernetes, a **Pod** is the smallest deployable scheduling unit—wrapping one or more closely coupled containers sharing one network namespace IP and localhost loopback. Controllers (`Deployment`) reconcile desired replica state continuously while **Startup, Readiness, and Liveness probes** control traffic routing and automatic restarts cleanly.",
    sections: [
      {
        heading: "1. Control Plane Flow: From `kubectl apply` to Running Container",
        paragraphs: [
          "Applying a Deployment YAML hits `kube-apiserver` (auth, admission control, persisted to `etcd`). The Deployment Controller spawns a `ReplicaSet` which creates declarative Pod objects. `kube-scheduler` binds each `Pending` Pod to an eligible worker node matching CPU/RAM `requests`, taints, and affinity—where `kubelet` instructs `containerd` to pull images and start containers.",
        ],
      },
      {
        heading: "2. Distinguishing Startup, Readiness, and Liveness Probes",
        paragraphs: [
          "Confusing Liveness and Readiness probes causes cascading outage loops in production:",
        ],
        bullets: [
          "Startup Probe: Runs first for slow-booting apps (e.g., JVM warmups), holding off Liveness/Readiness checks until initialization succeeds.",
          "Readiness Probe: Controls **Service Endpoints** traffic—failing Readiness pulls the Pod out of Load Balancer rotation cleanly *without* restarting it (ideal during temporary DB overload or graceful drains).",
          "Liveness Probe: Detects deadlocked processes; failing Liveness triggers `kubelet` to kill and restart the container.",
        ],
      },
      {
        heading: "3. Zero-Downtime `SIGTERM` Shutdown Synchronization",
        paragraphs: [
          "When terminating a Pod during rolling updates, Kubernetes simultaneously sends `SIGTERM` to the container AND removes its IP from Endpoints asynchronously across kube-proxy nodes. Adding a `preStop: { exec: { command: [\"sleep\", \"5\"] } }` hook lets endpoints propagate across Load Balancers cleanly before the server stops accepting new sockets.",
        ],
      },
    ],
    codeExample: {
      title: "Production Pod Probes Manifest",
      language: "yaml",
      code: `spec:
  containers:
    - name: api-server
      image: prepspaces/api:1.4.2
      ports:
        - containerPort: 8080
      readinessProbe:
        httpGet: { path: /health/ready, port: 8080 }
        periodSeconds: 5
      livenessProbe:
        httpGet: { path: /health/live, port: 8080 }
        initialDelaySeconds: 15
        periodSeconds: 10
      resources:
        requests: { cpu: "250m", memory: "256Mi" }
        limits:   { memory: "512Mi" }`,
      explanation:
        "`readinessProbe` gates live Service traffic cleanly, while separate `/health/live` avoids restarting healthy Pods solely because a downstream dependency hiccupped.",
    },
    commonMistakes: [
      {
        mistake: "Making `/health/live` ping PostgreSQL or Redis.",
        correction:
          "If PostgreSQL blips for 3 seconds, every API Pod fails Liveness simultaneously and enters synchronized `CrashLoopBackOff`! Check DB connectivity only in `/health/ready`, keep `/health/live` process-local.",
      },
      {
        mistake: "Using `:latest` image tags in production Deployments.",
        correction:
          "Mutable `:latest` breaks reproducible rollbacks and risks deploying divergent versions across auto-scaled nodes. Pin immutable digest/semver tags.",
      },
      {
        mistake: "Omitting memory `limits` or setting CPU `limits` overly tight on bursty web apps.",
        correction:
          "Strict `memory limits` protect nodes from OOM chaos, whereas overly low CPU `limits` trigger aggressive CFS throttling spikes on tail latency (`p99`).",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the exact difference between a Liveness Probe and a Readiness Probe?",
        answer:
          "Readiness removes the Pod IP from Service Load Balancer endpoints temporarily until healthy; Liveness kills and restarts the stuck container completely.",
      },
      {
        question: "Why would a Pod get stuck in `CrashLoopBackOff` vs `ImagePullBackOff`?",
        answer:
          "`ImagePullBackOff` fails before container boot (wrong registry tag/auth secret); `CrashLoopBackOff` means the container started but exited repeatedly with non-zero code (missing env var, uncaught panic, failed Liveness probe).",
      },
      {
        question: "How does Kubernetes expose Pods internally (`ClusterIP`) vs externally (`Ingress`)?",
        answer:
          "`ClusterIP` assigns a stable virtual service IP load-balancing healthy matching Pods inside the cluster, whereas `Ingress`/Gateway API terminates L7 HTTP/HTTPS external traffic routing host/paths to ClusterIP Services.",
      },
    ],
    relatedConcepts: [
      "/concepts/devops/docker-containers-vs-vms",
      "/concepts/devops/blue-green-vs-canary-deployment",
      "/concepts/devops/sli-slo-sla-error-budgets",
    ],
    relatedCourse: {
      title: "DevOps & Site Reliability Engineering (SRE)",
      route: "/learning/devops/linux",
      description: "Full Kubernetes cluster internals, Helm charts, CI/CD, and SRE resilience engineering.",
    },
    relatedModules: [
      { title: "DevOps Module 4: Kubernetes Cluster Orchestration", route: "/learning/devops/k8s" },
      { title: "DevOps Module 7: Zero-Downtime Deployment Strategies", route: "/learning/devops/deployment" },
    ],
    practiceAction: {
      label: "Practice Kubernetes Mock Interview",
      to: "/interview",
      summary: "Select DevOps -> Kubernetes module to explain probes, Ingress, and Pod failures aloud.",
    },
  },
  {
    slug: "blue-green-vs-canary-deployment",
    category: "devops",
    subcategory: "CI/CD & Release Engineering",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Blue-Green vs Canary Deployments: Zero-Downtime Rollout Strategies",
    metaTitle: "Blue-Green vs Canary Deployments Explained | PrepSpaces Concepts",
    description:
      "Compare Recreate, Rolling, Blue-Green, and Canary deployment strategies: instant rollback mechanics, blast radius limits, database schema backward compatibility, and feature flags.",
    keywords: "Blue-Green vs Canary deployment, zero downtime deployment, expand and contract schema migration, rolling update",
    directAnswer:
      "Both **Blue-Green** and **Canary** strategies avoid downtime during releases. **Blue-Green** runs a full duplicate Green environment alongside live Blue and flips 100% traffic atomically for instant rollback (at 2x temporary infra cost). **Canary** gradually shifts 1% -> 5% -> 25% -> 100% of live traffic onto the new build while watching golden error/latency metrics to limit blast radius.",
    sections: [
      {
        heading: "1. Selecting the Right Release Strategy",
        paragraphs: [
          "Every rollout strategy trades off peak infrastructure footprint against rollback speed and blast radius:",
        ],
        bullets: [
          "Blue-Green: Deploy v2 ('Green') completely, run smoke tests on internal URL, cut router/ALB 100% from v1 ('Blue') to v2. Rollback = switch router back in seconds.",
          "Canary Release: Expose v2 to 1–5% of real production traffic (or internal employees first), automatically verify `5xx` error rate & p99 latency SLOs via Argo Rollouts/Flagger, then ramp to 100%.",
          "Feature Flags (`Decouple Deploy from Release`): Ship dark code safely off by default and toggle features dynamically without redeploying binaries.",
        ],
      },
      {
        heading: "2. The Database Compatibility Trap (`Expand & Contract`)",
        paragraphs: [
          "Even perfect Blue-Green or Canary routers crash if v2 runs `ALTER TABLE RENAME COLUMN` directly, because v1 instances running concurrently immediately fail on missing columns!",
          "Use the **Expand & Contract** pattern across 3 commits: (1) Expand by adding nullable new column while v1 writes both, (2) Backfill & switch code to read new column (v2), (3) Contract by dropping the old column only after 100% of v1 pods have drained cleanly.",
        ],
      },
    ],
    codeExample: {
      title: "Progressive Canary Rollout Steps (Argo Rollouts Conceptual Flow)",
      language: "yaml",
      code: `strategy:
  canary:
    steps:
      - setWeight: 5      # Shift 5% live traffic to v2
      - pause: { duration: 5m }
      - analysis: { templates: [{ templateName: error-rate-p99-check }] }
      - setWeight: 25
      - pause: { duration: 10m }
      - setWeight: 100`,
      explanation:
        "Automated canary analysis aborts and rolls weight back to `0%` automatically if v2 breaches error or latency thresholds.",
    },
    commonMistakes: [
      {
        mistake: "Running destructive `DROP COLUMN` / `RENAME` DB migrations atomically with code rollout.",
        correction:
          "At least one old version window (`Blue` or non-canary pods) runs concurrently during rollback/cutover; schema changes must stay backward-compatible for `N-1`.",
      },
      {
        mistake: "Switching Blue -> Green before warming caches or connection pools.",
        correction:
          "Cold JVM JIT or empty Redis caches hit with 100% instant traffic can spike latency—pre-warm Green smoke paths first.",
      },
      {
        mistake: "Deploying Canary without automated telemetry baseline comparison.",
        correction:
          "Canary reduces blast radius only if you actively watch error budgets, `5xx`, and `p99` latency against the baseline version.",
      },
    ],
    interviewQuestions: [
      {
        question: "When would you pick Canary over Blue-Green?",
        answer:
          "When validating risky backend or ML model changes against real user behavior at 1–5% traffic before risking 100% of customers, or when running 2x peak fleet size for Blue-Green is cost-prohibitive.",
      },
      {
        question: "How do you perform a zero-downtime database column rename during Blue-Green or Rolling updates?",
        answer:
          "Via Expand & Contract: add the new column, dual-write both columns, backfill old rows, deploy readers of the new column, and only drop the deprecated column in a subsequent release.",
      },
      {
        question: "What is the difference between Deployment and Feature Release?",
        answer:
          "Deployment places artifacts on servers; Release turns user-facing behavior on via Feature Flags—separating operational rollouts from product launches.",
      },
    ],
    relatedConcepts: [
      "/concepts/devops/kubernetes-pod-lifecycle",
      "/concepts/devops/sli-slo-sla-error-budgets",
      "/concepts/cloud/multi-region-failover",
    ],
    relatedCourse: {
      title: "DevOps & Site Reliability Engineering (SRE)",
      route: "/learning/devops/linux",
      description: "Hands-on CI/CD, GitOps, Canary vs Blue/Green cutovers, and rollback engineering.",
    },
    relatedModules: [
      { title: "DevOps Module 7: Deployment Strategies (Blue/Green & Canary)", route: "/learning/devops/deployment" },
      { title: "DevOps Module 6: CI/CD & GitOps Pipelines", route: "/learning/devops/cicd" },
    ],
    practiceAction: {
      label: "Practice CI/CD Release Interviews",
      to: "/interview",
      summary: "Practice defending Expand-Contract DB migrations and Canary rollouts live.",
    },
  },
  {
    slug: "terraform-state-locking",
    category: "devops",
    subcategory: "Infrastructure as Code",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Terraform Infrastructure as Code, Remote State & State Locking Explained",
    metaTitle: "Terraform Remote State, Drift & Locking Explained | PrepSpaces Concepts",
    description:
      "Understand declarative Terraform Infrastructure as Code: why terraform.tfstate exists, remote encrypted backends (S3 + native lockfiles), drift detection, and plan/apply workflows.",
    keywords: "Terraform state locking, remote backend S3, Infrastructure as Code IaC, terraform plan vs apply, drift detection",
    directAnswer:
      "Terraform manages cloud infrastructure declaratively using `.tf` HCL definitions tracked against a JSON state snapshot (`terraform.tfstate`) mapping HCL resource IDs to real cloud IDs. Production teams store state remotely in encrypted, versioned object backends with **atomic State Locking** so concurrent CI runs cannot corrupt infrastructure state.",
    sections: [
      {
        heading: "1. Why `terraform.tfstate` Matters & Danger of Local State",
        paragraphs: [
          "Terraform compares three snapshots during `terraform plan`: your HCL configuration files, the remote cloud provider's live API state, and `terraform.tfstate` tracking resource dependencies and metadata.",
          "Storing `.tfstate` locally on a developer laptop breaks team collaboration (two engineers create conflicting VPCs), leaks plaintext DB passwords that providers write into state, and loses history. Production pipelines always configure a **Remote Backend** (e.g., S3 with KMS encryption + versioning + state locking).",
        ],
      },
      {
        heading: "2. State Locking, Workspaces & Drift Remediation",
        paragraphs: [
          "If two GitHub Actions PR merges run `terraform apply` simultaneously without locking, both write competing partial state snapshots—causing orphaned cloud assets or accidental deletions. State locking acquires an atomic mutex lease on the state file before `plan`/`apply` mutates anything.",
          "When engineers make emergency 'ClickOps' console edits directly in AWS/Cloudflare, **Drift** appears on the next `terraform plan`; reconcile either by updating HCL to match reality or letting `apply` restore declared state.",
        ],
      },
    ],
    codeExample: {
      title: "Encrypted Remote S3 Backend Configuration with State Locking",
      language: "hcl",
      code: `terraform {
  required_version = ">= 1.10"
  backend "s3" {
    bucket       = "prepspaces-terraform-state-prod"
    key          = "network/vpc/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true # Native S3 conditional-write state locking (TF >= 1.10)
  }
}`,
      explanation:
        "Encrypts remote state at rest, isolates network state cleanly via path `key`, and acquires an atomic lock preventing concurrent `apply` races.",
    },
    commonMistakes: [
      {
        mistake: "Committing `terraform.tfstate` into Git.",
        correction:
          "Terraform state frequently caches sensitive output strings (connection strings, private keys, tokens)—never commit `.tfstate` to Git (`*.tfstate*` in `.gitignore`).",
      },
      {
        mistake: "Running `terraform apply -auto-approve` without reviewing `plan` destruction diffs.",
        correction:
          "Changing an immutable attribute (e.g., DB engine or VPC CIDR) forces `-/+ destroy and recreate`—always review `plan` in PR comments first.",
      },
      {
        mistake: "Putting an entire organization's VPC, EKS, RDS, and DNS inside one monolithic `.tfstate` file.",
        correction:
          "Split state cleanly by blast radius and change cadence (`network/`, `data/`, `app/`) so one app deploy never risks touching core database/network state.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does Terraform need `state` if it can already query cloud APIs?",
        answer:
          "State maps HCL resource names to real cloud UUIDs, caches dependency deletion ordering (critical when removing objects from code), and improves large-graph diff performance.",
      },
      {
        question: "What happens if a CI runner crashes mid-apply leaving a stale lock?",
        answer:
          "Verify no active process is genuinely running `apply`, inspect the incomplete cloud state, and release the stuck lock safely via `terraform force-unlock <LOCK_ID>`.",
      },
      {
        question: "Declarative (Terraform) vs Imperative scripts (`awscli` Bash)—which wins for infra?",
        answer:
          "Declarative IaC converges cleanly toward target state idempotently (`2+` runs produce zero extra resources), whereas imperative scripts fail halfway cleanly unless every command handles existing-resource checks manually.",
      },
    ],
    relatedConcepts: [
      "/concepts/cloud/vpc-networking",
      "/concepts/devops/blue-green-vs-canary-deployment",
      "/concepts/devops/kubernetes-pod-lifecycle",
    ],
    relatedCourse: {
      title: "DevOps & Site Reliability Engineering (SRE)",
      route: "/learning/devops/linux",
      description: "Master Terraform HCL, reusable modules, remote backends, and GitOps workflows.",
    },
    relatedModules: [
      { title: "DevOps Module 5: Infrastructure as Code with Terraform", route: "/learning/devops/iac" },
      { title: "Cloud Module 7: AWS Architecture & IaC", route: "/learning/cloud/aws" },
    ],
    practiceAction: {
      label: "Practice Terraform & IaC Interviews",
      to: "/interview",
      summary: "Practice defending state locking, drift detection, and modular HCL design out loud.",
    },
  },
  {
    slug: "sli-slo-sla-error-budgets",
    category: "devops",
    subcategory: "Site Reliability Engineering",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "SLI, SLO, SLA & Error Budgets in Site Reliability Engineering (SRE)",
    metaTitle: "SLI vs SLO vs SLA & Error Budgets Explained | PrepSpaces Concepts",
    description:
      "Master Google SRE reliability metrics: Service Level Indicators (SLI), Objectives (SLO), contractual Agreements (SLA), Error Budgets, and alert burn rates.",
    keywords: "SLI SLO SLA difference, SRE error budget, burn rate alerting, four golden signals SRE",
    directAnswer:
      "An **SLI** (Indicator) is a measured metric (e.g., percentage of HTTP requests returning `< 500ms`), an **SLO** (Objective) is the internal target threshold (`99.9%` over 30 days), and an **SLA** (Agreement) is the stricter external business contract carrying customer credits (`99.5%`). The gap `100% - SLO` forms your **Error Budget** balancing feature velocity against stability.",
    sections: [
      {
        heading: "1. How SLI, SLO & SLA Align Across Engineering & Product",
        paragraphs: [
          "100% uptime is neither practical nor free—chasing the last `.09%` exponentially explodes cloud cost and freezes feature delivery. SRE frames reliability economically:",
        ],
        bullets: [
          "SLI (Good Events / Valid Events * 100%): Concrete user-facing measurement (Availability, p99 Latency, Data Freshness) derived from SRE's 4 Golden Signals (Latency, Traffic, Errors, Saturation).",
          "SLO (Internal Target): Tighter than SLA (`99.9%` = max `43.2 minutes` bad time per 30-day window) so engineering fixes reliability long before legal contracts breach.",
          "Error Budget (`100% - 99.9% = 0.1%`): Shared currency between Devs and SREs—healthy budget greenlights rapid releases; exhausted budget halts risky feature launches until reliability work finishes.",
        ],
      },
      {
        heading: "2. Alerting on Burn Rates Rather Than CPU Thresholds",
        paragraphs: [
          "Waking engineers at 3 AM because one server hit `85% CPU` causes pager fatigue even when users experience zero errors. Multi-window **Error Budget Burn-Rate Alerts** page humans only when error velocity threatens to exhaust a large slice (e.g., `2%` in `1h`) of the monthly SLO budget.",
        ],
      },
    ],
    codeExample: {
      title: "Computing Monthly Error Budget & Burn Rate in Python",
      language: "python",
      code: `MINUTES_30_DAYS = 30 * 24 * 60  # 43,200 minutes
slo_target = 0.999              # 99.9% availability SLO

error_budget_fraction = 1.0 - slo_target                # 0.001
allowed_bad_minutes = MINUTES_30_DAYS * error_budget_fraction
print(f"30-day Error Budget: {allowed_bad_minutes:.1f} minutes (~43.2m)")
# At 14.4x burn rate (1.44% error rate), the entire 30-day budget burns in just 50 hours!`,
      explanation:
        "Thinking in error budgets converts abstract '99.9%' numbers into exact minutes of allowable bad experience and actionable release policies.",
    },
    commonMistakes: [
      {
        mistake: "Setting SLO equals 100% or matching SLA identically (`SLO == SLA`).",
        correction:
          "100% leaves zero room for maintenance or deployments, and `SLO == SLA` gives zero buffer before triggering financial contract penalties.",
      },
      {
        mistake: "Measuring availability strictly at an internal pod health endpoint instead of edge user requests.",
        correction:
          "If edge DNS or TLS Load Balancers drop user requests while backend `/health` reads 200 OK, internal SLIs lie—measure as close to the user path as possible.",
      },
      {
        mistake: "Treating Error Budgets as punishment rather than engineering guidance.",
        correction:
          "A 100%-unused error budget can actually signal excessive release caution; use budget intentionally to ship improvements and run chaos tests safely.",
      },
    ],
    interviewQuestions: [
      {
        question: "Give concrete examples of an SLI, SLO, and SLA for an API service.",
        answer:
          "SLI: ratio of HTTP 2xx/3xx/4xx responses served under `300ms` measured at API Gateway; SLO: `>= 99.9%` over rolling 28 days; SLA: contractual commitment to `>= 99.5%` monthly uptime before service credits trigger.",
      },
      {
        question: "What are the Four Golden Signals of SRE monitoring?",
        answer:
          "**Latency** (successful vs failed request latency), **Traffic** (requests/sec), **Errors** (explicit 5xx + implicit wrong payloads), and **Saturation** (how full CPU, RAM, DB connections, or queues are).",
      },
      {
        question: "What action triggers when a team burns 100% of its monthly Error Budget early?",
        answer:
          "New non-emergency feature deployments pause; engineering sprints pivot 100% toward reliability hardening, rollback safety, automated testing, and performance fixes until SLO health recovers.",
      },
    ],
    relatedConcepts: [
      "/concepts/devops/blue-green-vs-canary-deployment",
      "/concepts/cloud/multi-region-failover",
      "/concepts/system-design/rate-limiting-algorithms",
    ],
    relatedCourse: {
      title: "DevOps & Site Reliability Engineering (SRE)",
      route: "/learning/devops/linux",
      description: "Master Google SRE practices, error budgets, incident response, and chaos engineering.",
    },
    relatedModules: [
      { title: "DevOps Module 8: Site Reliability Engineering (SLOs & Budgets)", route: "/learning/devops/sre" },
      { title: "System Design Module 17: Reliability & Observability", route: "/learning/system-design/reliability" },
    ],
    practiceAction: {
      label: "Practice SRE & Reliability Interviews",
      to: "/interview",
      summary: "Practice explaining SLI/SLO/SLA and burn-rate alerting in PrepSpaces DevOps interviews.",
    },
  },

  // ================= SYSTEM DESIGN (5) =================
  {
    slug: "consistent-hashing",
    category: "system-design",
    subcategory: "Data Partitioning",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Consistent Hashing & Virtual Nodes in Distributed Systems",
    metaTitle: "Consistent Hashing & Virtual Nodes Explained | PrepSpaces Concepts",
    description:
      "Understand why naive `hash(key) % N` fails when cluster nodes scale, how Consistent Hashing rings limit key remapping to ~K/N keys, and how Virtual Nodes prevent uneven hot shards.",
    keywords: "consistent hashing, virtual nodes vnodes, distributed caching sharding, hash ring system design, Cassandra Dynamo ring",
    directAnswer:
      "Consistent Hashing maps both server nodes and data keys onto a circular `0..2^32 - 1` hash ring, routing each key clockwise to the first node encountered. Unlike `hash(key) % N`—which remaps almost 100% of keys whenever `N` changes—consistent hashing moves only **~K/N** keys on node additions or failures, while **Virtual Nodes** ensure uniform load balance.",
    sections: [
      {
        heading: "1. Why Naive Modulo Hashing (`hash(key) % N`) Breaks at Scale",
        paragraphs: [
          "Suppose 10 million cached user profiles sit across 4 Redis nodes (`hash(id) % 4`). When Node 4 crashes or Node 5 joins (`% 3` or `% 5`), nearly **75%–80%** of keys suddenly map to different nodes—triggering a catastrophic cache-miss thundering herd directly onto primary databases.",
        ],
      },
      {
        heading: "2. The Hash Ring & Virtual Nodes (VNodes) Solution",
        paragraphs: [
          "Consistent hashing fixes rebalancing churn: both nodes (`hash(nodeIP)`) and keys (`hash(userID)`) sit on the same `32-bit` / `128-bit` ring. Removing Node C shifts **only** keys previously living between Node B and Node C clockwise onto Node D.",
          "With only 4 physical servers, raw random hashing leaves lopsided arc sizes (one node owning 45% of the ring!). Assigning each server **100–200 Virtual Nodes** (`hash('node1#0') .. hash('node1#149')`) slices arcs finely around the circle—making shard distribution tight (`<5%` variance) and letting faster hardware take proportionally more virtual nodes.",
        ],
      },
    ],
    codeExample: {
      title: "Compact Consistent Hash Ring with Virtual Nodes in Python",
      language: "python",
      code: `import bisect, hashlib

class ConsistentHashRing:
    def __init__(self, vnodes: int = 100):
        self.vnodes = vnodes
        self.ring: dict[int, str] = {}
        self.sorted_keys: list[int] = []

    def _hash(self, value: str) -> int:
        return int(hashlib.md5(value.encode()).hexdigest(), 16)

    def add_node(self, node: str):
        for i in range(self.vnodes):
            h = self._hash(f"{node}#{i}")
            self.ring[h] = node
            bisect.insort(self.sorted_keys, h)

    def get_node(self, key: str) -> str:
        h = self._hash(key)
        idx = bisect.bisect_right(self.sorted_keys, h) % len(self.sorted_keys)
        return self.ring[self.sorted_keys[idx]]`,
      explanation:
        "`bisect_right` finds the next clockwise virtual node in `O(log(N * V))` time and wraps cleanly around index `0` at ring wraparound.",
    },
    commonMistakes: [
      {
        mistake: "Implementing consistent hashing with zero Virtual Nodes (`vnodes = 1`) in small clusters.",
        correction:
          "3–5 physical hashes cluster unevenly on a 32-bit circle and overload one unlucky node when a neighbor fails; 100–200 vnodes distributes failover evenly across every surviving node.",
      },
      {
        mistake: "Assuming consistent hashing alone eliminates celebrity 'hot keys'.",
        correction:
          "One viral user ID still hashes to one primary shard regardless of ring balance! Combine consistent hashing with local L1 caching, read replicas, or key-salting (`celebrity_id#rand(0..9)`).",
      },
      {
        mistake: "Forgetting replication factor (`N = 3`) alongside ring routing.",
        correction:
          "Distributed stores (Dynamo, Cassandra) store each key across the next `N` distinct **physical** nodes clockwise (skipping duplicate vnodes owned by the same host).",
      },
    ],
    interviewQuestions: [
      {
        question: "How many keys roughly move when adding 1 node to a 10-node Consistent Hashing cluster holding 10M keys?",
        answer:
          "Only `K / N = 10M / 11` (~9%) of keys move from existing nodes to the newcomer, compared to ~90% with `hash(k) % N`.",
      },
      {
        question: "Why do Dynamo and Cassandra add Virtual Nodes instead of 1 position per machine?",
        answer:
          "Virtual nodes balance data/traffic uniformly across small clusters, distribute recovery streaming evenly across all remaining servers when a host dies, and support heterogeneous hardware weights.",
      },
      {
        question: "How does a Consistent Hash ring solve heterogeneous server capacities (e.g., 64GB vs 128GB RAM)?",
        answer:
          "Assign proportional Virtual Node counts (e.g., 100 vnodes to the 64GB box and 200 vnodes to the 128GB box).",
      },
    ],
    relatedConcepts: [
      "/concepts/system-design/cache-aside-vs-write-through",
      "/concepts/system-design/cap-theorem",
      "/concepts/java/hashmap-internals",
    ],
    relatedCourse: {
      title: "System Design Masterclass",
      route: "/learning/system-design",
      description: "24 modules on horizontal sharding, consistent hashing, distributed caches, and consensus.",
    },
    relatedModules: [
      { title: "System Design Module 7: Replication & Horizontal Sharding", route: "/learning/system-design/replication" },
      { title: "System Design Module 6: Caching & Invalidation", route: "/learning/system-design/caching" },
    ],
    practiceAction: {
      label: "Practice System Design Interviews",
      to: "/interview",
      summary: "Practice explaining consistent hashing, vnodes, and hot-key mitigation live.",
    },
  },
  {
    slug: "cap-theorem",
    category: "system-design",
    subcategory: "Distributed Systems Theory",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "CAP Theorem & PACELC Explained: Consistency, Availability & Partitions",
    metaTitle: "CAP Theorem & PACELC Explained Clearly | PrepSpaces Concepts",
    description:
      "Understand Eric Brewer's CAP Theorem and PACELC extension accurately: why P is non-optional, CP vs AP during network splits, and why latency vs consistency still trades off when healthy.",
    keywords: "CAP theorem, PACELC theorem, CP vs AP distributed systems, eventual consistency, linearizability",
    directAnswer:
      "The CAP Theorem proves that during a network Partition (`P`) splitting distributed nodes apart, a datastore must choose between returning strictly up-to-date **Consistency (`C`)** (by rejecting writes/stale reads on the isolated minority side) or remaining **Available (`A`)** for every reachable node at the risk of stale/divergent state. **PACELC** adds that even *Else* (when no partition exists), systems trade off **Latency (`L`)** vs **Consistency (`C`)**.",
    sections: [
      {
        heading: "1. Why 'Pick 2 of 3' (CA vs CP vs AP) Is Misleading",
        paragraphs: [
          "In real wide-area and data-center networks, switch cuts, GC pauses, and packet drops guarantee **Partitions (`P`) WILL happen**. You cannot choose `'CA'` permanently in a distributed system—the real design fork occurs only *when* a partition splits nodes: choose **CP** (preserve linearizable truth by refusing unsafe reads/writes) or **AP** (stay writable/readable on both sides and reconcile conflicts later).",
        ],
        bullets: [
          "CP Examples (Banking ledgers, Raft/etcd, ZooKeeper, Spanner): Refuse minority-partition writes so two clients never double-spend the same account balance.",
          "AP Examples (Shopping carts, DNS, social counters, Dynamo-style R+W <= N): Accept writes on both partitioned sides and reconcile via Last-Write-Wins, Vector Clocks, or CRDTs.",
        ],
      },
      {
        heading: "2. PACELC: Why Healthy Clusters Still Make Trade-Offs",
        paragraphs: [
          "Daniel Abadi's **PACELC** fixes CAP's blindspot: *if* **P**artitioned, choose **A** vs **C**; **E**lse (normal healthy operation), choose **L**atency vs **C**onsistency! Synchronous cross-region quorum replication guarantees strong consistency (`PC/EC`) at higher write RTT latency (`100ms`), whereas async follower replication responds fast locally (`PA/EL` or `PC/EL`) accepting momentary replication lag.",
        ],
      },
    ],
    codeExample: {
      title: "Quorum Tunability Inside a Dynamo-Style Store (`R + W > N`)",
      language: "text",
      code: `Replication Factor N = 3:
  Write Quorum W = 2, Read Quorum R = 2  --> R + W = 4 > 3 (Strong Overlap / Tunable CP)
  Write Quorum W = 1, Read Quorum R = 1  --> R + W = 2 <= 3 (Low-Latency / Eventual AP)
  Write Quorum W = 3, Read Quorum R = 1  --> Fast reads, zero write partition tolerance`,
      explanation:
        "Adjusting `R` and `W` overlaps lets distributed datastores move dynamically along the Latency-vs-Consistency spectrum.",
    },
    commonMistakes: [
      {
        mistake: "Saying 'I pick CA (Consistency + Availability) because our cloud network never drops packets.'",
        correction:
          "Networks always partition eventually (`P` is unavoidable in distributed systems). Claiming CA ignores network failure physics.",
      },
      {
        mistake: "Confusing CAP 'Consistency' (Linearizability) with ACID 'Consistency' (schema/foreign-key constraints).",
        correction:
          "CAP `C` means every read returns the latest completed write globally (single-copy linearizability); ACID `C` means transactions preserve DB invariants/constraints.",
      },
      {
        mistake: "Assuming Eventual Consistency is completely unsafe for any product.",
        correction:
          "Video view counts, product catalogs, CDN DNS records, and activity feeds work brilliantly with Eventual Consistency (`AP`) and fast local reads.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why can't a distributed system practically pick 'CA' in CAP Theorem?",
        answer:
          "Because network links across servers will inevitably drop or delay packets (`P` happens). Once a partition splits two replicas, answering concurrently on both sides breaks Consistency while halting the isolated side breaks Availability.",
      },
      {
        question: "What does PACELC capture that CAP misses?",
        answer:
          "PACELC captures the everyday healthy-network trade-off: synchronously waiting for replicas raises Consistency at the cost of write Latency (`EC`), whereas returning immediately after writing primary lowers Latency (`EL`) with slight staleness risk.",
      },
      {
        question: "Does `R + W > N` by itself guarantee full linearizable strong consistency?",
        answer:
          "Not unconditionally without read-repair/anti-entropy and monotonic timestamps—under sloppy quorums or failing hinted handoffs, overlapping quorums need consensus protocols (Raft/Paxos) or read-repair guarantees.",
      },
    ],
    relatedConcepts: [
      "/concepts/system-design/raft-consensus-algorithm",
      "/concepts/cloud/multi-region-failover",
      "/concepts/system-design/consistent-hashing",
    ],
    relatedCourse: {
      title: "System Design Masterclass",
      route: "/learning/system-design",
      description: "Master consistency models, quorum math (R+W > N), Paxos/Raft, and distributed transactions.",
    },
    relatedModules: [
      { title: "System Design Module 9: Distributed Systems & Time", route: "/learning/system-design/distributed-systems" },
      { title: "System Design Module 10: Consistency & Quorums", route: "/learning/system-design/consistency" },
    ],
    practiceAction: {
      label: "Practice Distributed Systems Interviews",
      to: "/interview",
      summary: "Practice explaining CAP, PACELC, and quorum trade-offs cleanly in PrepSpaces AI Interviews.",
    },
  },
  {
    slug: "rate-limiting-algorithms",
    category: "system-design",
    subcategory: "Traffic Control & Resilience",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "API Rate Limiting Algorithms: Token Bucket, Leaky Bucket & Sliding Window",
    metaTitle: "Rate Limiting Algorithms Explained (Token Bucket, Sliding Window) | PrepSpaces Concepts",
    description:
      "Compare API rate limiting algorithms: Token Bucket, Leaky Bucket, Fixed Window Counter, Sliding Window Log/Counter, Redis atomic Lua scripts, and HTTP 429 Retry-After headers.",
    keywords: "API rate limiting algorithms, token bucket vs leaky bucket, sliding window counter Redis, HTTP 429 Retry-After",
    directAnswer:
      "API Rate Limiters throttle abusive bursts, prevent brute-force login probes, and enforce fair tenant quotas before downstream services saturate. **Token Bucket** allows controlled bursts cleanly with minimal memory (`2` fields per key), **Leaky Bucket** smooths output to a steady rate, and **Sliding Window Counter** prevents Fixed-Window boundary 2x spike exploits.",
    sections: [
      {
        heading: "1. Comparing the 4 Core Rate Limiting Algorithms",
        paragraphs: [
          "Selecting the right algorithm balances burst friendliness against Redis memory footprint per key:",
        ],
        bullets: [
          "Token Bucket: Bucket holds max `B` tokens refilling at rate `r/sec`. Each request consumes 1 token—allows healthy short user bursts cleanly while bounding long-term average rate (`O(1)` memory).",
          "Leaky Bucket: Queue drains downstream at a strictly constant smooth rate (ideal for fixed-rate external webhooks/DBs), dropping overflow.",
          "Fixed Window Counter: Resets counters every minute boundary (`12:01:00`)—ultra simple, yet suffers a 2x burst bug (`100` reqs at `12:00:59` + `100` reqs at `12:01:01`).",
          "Sliding Window Counter: Blends weighted overlap from previous + current fixed windows (`prevCount * overlap + currCount`), eliminating boundary bursts in `O(1)` space per user.",
        ],
      },
      {
        heading: "2. Distributed Race Conditions & Atomic Redis Execution",
        paragraphs: [
          "In multi-worker API clusters, a naive `GET count -> check -> INCR count` introduces classic read-modify-write races permitting extra requests through. Execute limit checks atomically via single-round-trip **Redis Lua Scripts** (`EVAL`) returning remaining quota + reset epoch alongside standard `HTTP 429 Too Many Requests` and `Retry-After` headers.",
        ],
      },
    ],
    codeExample: {
      title: "Token Bucket Rate Limiter Logic (In-Memory Reference)",
      language: "javascript",
      code: `class TokenBucket {
  constructor(capacity, refillPerSecond) {
    this.capacity = capacity;
    this.refillPerMs = refillPerSecond / 1000;
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  allowRequest(cost = 1) {
    const now = Date.now();
    this.tokens = Math.min(this.capacity, this.tokens + (now - this.lastRefill) * this.refillPerMs);
    this.lastRefill = now;
    if (this.tokens < cost) return false;
    this.tokens -= cost;
    return true;
  }
}`,
      explanation:
        "Lazy timestamp refilling avoids background cron timers cleanly—recomputing accrued tokens on demand with just two scalars (`tokens`, `lastRefill`).",
    },
    commonMistakes: [
      {
        mistake: "Using separate non-atomic Redis `GET` followed by `SET` across distributed API servers.",
        correction:
          "Concurrent servers both read stale counts and overwrite each other—run Redis `INCR` + `EXPIRE` inside a single Lua script.",
      },
      {
        mistake: "Using Fixed-Window counters on sensitive auth/checkout limits without awareness of 2x edge bursts.",
        correction:
          "Prefer Token Bucket or Sliding Window Counter so attackers cannot hit `2x` limit cleanly across `:59 -> :00` boundaries.",
      },
      {
        mistake: "Letting a brief Redis outage crash 100% of API requests ('fail-closed' everywhere).",
        correction:
          "Decide deliberately per endpoint: critical auth/billing may fail-closed or degrade to local per-node emergency limiters rather than dropping all normal traffic.",
      },
    ],
    interviewQuestions: [
      {
        question: "Compare Token Bucket vs Leaky Bucket.",
        answer:
          "Token Bucket permits short traffic bursts up to bucket capacity (`B`) when tokens have accrued, whereas Leaky Bucket enforces a strictly constant smooth output pacing rate.",
      },
      {
        question: "What is the Fixed Window boundary problem, and how does Sliding Window Counter fix it?",
        answer:
          "Sending 100 requests at `00:59` and 100 at `01:01` lets 200 requests through inside 2 seconds despite a 100/min limit. Sliding Window Counter weights the prior minute's count dynamically (`curr + prev * overlapRatio`).",
      },
      {
        question: "Which HTTP status code and headers should a rate-limited API return?",
        answer:
          "`429 Too Many Requests` with `Retry-After` (seconds) and standard `X-RateLimit-Limit` / `X-RateLimit-Remaining` headers so well-behaved clients back off with jitter.",
      },
    ],
    relatedConcepts: [
      "/concepts/system-design/cache-aside-vs-write-through",
      "/concepts/system-design/consistent-hashing",
      "/concepts/devops/sli-slo-sla-error-budgets",
    ],
    relatedCourse: {
      title: "System Design Masterclass",
      route: "/learning/system-design",
      description: "Master L4/L7 load balancing, Token Bucket rate limiting, circuit breakers, and backpressure.",
    },
    relatedModules: [
      { title: "System Design Module 14: Load Balancing & Traffic Control", route: "/learning/system-design/traffic" },
      { title: "System Design Module 22: System Design Case Studies", route: "/learning/system-design/case-studies" },
    ],
    practiceAction: {
      label: "Practice Rate Limiter System Design",
      to: "/interview",
      summary: "Practice designing a distributed API rate limiter cleanly in PrepSpaces AI Interviews.",
    },
  },
  {
    slug: "cache-aside-vs-write-through",
    category: "system-design",
    subcategory: "Caching & Latency",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Distributed Caching Strategies: Cache-Aside, Write-Through & Stampede Protection",
    metaTitle: "Cache-Aside vs Write-Through & Cache Stampede | PrepSpaces Concepts",
    description:
      "Compare Cache-Aside (Lazy Loading), Read-Through, Write-Through, and Write-Behind caching strategies, LRU/LFU eviction, and stopping Thundering Herd cache stampedes.",
    keywords: "cache aside vs write through, write behind cache, cache stampede thundering herd, Redis distributed caching, LRU vs LFU",
    directAnswer:
      "**Cache-Aside** lets the application query Redis first, loading from the database and populating cache only on misses (simple, resilient if Redis dies). **Write-Through** updates cache and DB synchronously together so reads stay hot and fresh at slower write latency, while **Write-Behind** buffers writes asynchronously in cache for high write throughput.",
    sections: [
      {
        heading: "1. Read & Write Caching Topologies",
        paragraphs: [
          "Match read freshness, write speed, and failure tolerance cleanly:",
        ],
        bullets: [
          "Cache-Aside (Lazy Loading): App checks cache -> on miss reads DB & sets TTL -> on DB update invalidates/deletes cache key (`DEL`). Never fills cache with unused cold data.",
          "Write-Through: Writes hit cache and DB synchronously in tandem—no cold misses for newly written rows, though write latency rises slightly and infrequent data stays cached.",
          "Write-Behind (Write-Back): App writes fast to cache memory only and flushes batches asynchronously to disk/DB—blazing write throughput at data-loss risk if cache crashes before flush.",
        ],
      },
      {
        heading: "2. Defeating Cache Stampedes (Thundering Herd) & Cache Penetration",
        paragraphs: [
          "When one viral homepage key expires at `12:00:00`, 5,000 concurrent requests miss Redis simultaneously and slam the primary SQL database together (**Cache Stampede**). Stop stampedes using **Singleflight / Distributed Mutex Coalescing** (1 worker recomputes while peers wait briefly) or **Probabilistic Early Expiration (Jittered TTL)**.",
          "Similarly, repeated requests for nonexistent IDs (`?id=-999`) bypass empty caches and hammer the DB (**Cache Penetration**)—defend with short-TTL **negative caching** (`NULL` placeholder) or an in-memory **Bloom Filter**.",
        ],
      },
    ],
    codeExample: {
      title: "Cache-Aside Read Helper with Jittered TTL Against Synchronized Expirations",
      language: "javascript",
      code: `async function getCourseWithCacheAside(courseId, cache, db) {
  const key = \`course:\${courseId}\`;
  const cached = await cache.get(key);
  if (cached !== null) return JSON.parse(cached); // May include "null" sentinel for negative caching

  const row = await db.findCourseById(courseId);
  // Base 10m TTL + random 0-60s jitter prevents mass synchronized expiration waves
  const ttlSeconds = (row ? 600 : 60) + Math.floor(Math.random() * 60);
  await cache.set(key, JSON.stringify(row || null), { EX: ttlSeconds });
  return row;
}`,
      explanation:
        "Short-TTL `null` caching stops nonexistent-ID DB floods, while random TTL jitter smooths expiration spikes across thousands of warmed keys.",
    },
    commonMistakes: [
      {
        mistake: "Caching `value` then updating DB without deleting/invalidating stale cache entries.",
        correction:
          "Under Cache-Aside writes, update DB first and then **delete** (`DEL`) the cache key rather than rewriting blindly out of order.",
      },
      {
        mistake: "Giving 100,000 warmed cache items the identical `EX = 3600` at startup.",
        correction:
          "Every key expires at the exact same second an hour later, causing a predictable hourly database thundering herd—always add random TTL jitter.",
      },
      {
        mistake: "Confusing LRU (Recency) vs LFU (Frequency) eviction policies.",
        correction:
          "A massive one-time batch scan wipes an **LRU** cache of hot keys, whereas **LFU** keeps genuinely popular frequently accessed keys safe.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why should a write update in Cache-Aside *delete* the cache key rather than *updating* it?",
        answer:
          "Two concurrent writes (`A` writes DB=1 then pauses; `B` writes DB=2 & cache=2; `A` resumes writing stale cache=1) leave permanently inconsistent DB (`2`) vs Cache (`1`). Updating DB then deleting cache triggers the next reader to pull fresh truth.",
      },
      {
        question: "How do you stop a Cache Stampede when a viral hot key expires?",
        answer:
          "Combine request coalescing (`singleflight` / per-key distributed lock so only 1 request hits DB), probabilistic early refresh before TTL ends, and random TTL jitter.",
      },
      {
        question: "What is Cache Penetration vs Cache Avalanche?",
        answer:
          "Penetration happens when requests query nonexistent keys missing both cache and DB repeatedly (solved via Bloom filters/negative caching); Avalanche happens when whole cache tiers fail or massive keys expire simultaneously.",
      },
    ],
    relatedConcepts: [
      "/concepts/system-design/consistent-hashing",
      "/concepts/system-design/rate-limiting-algorithms",
      "/concepts/cloud/object-vs-block-vs-file-storage",
    ],
    relatedCourse: {
      title: "System Design Masterclass",
      route: "/learning/system-design",
      description: "Master distributed caching invalidation, Redis topologies, and stampede mitigation.",
    },
    relatedModules: [
      { title: "System Design Module 6: Caching & Invalidation", route: "/learning/system-design/caching" },
      { title: "System Design Module 15: Scalability & Bottleneck Tuning", route: "/learning/system-design/scalability" },
    ],
    practiceAction: {
      label: "Practice Caching System Design",
      to: "/interview",
      summary: "Practice defending Cache-Aside, Write-Through, and stampede defenses in AI interviews.",
    },
  },
  {
    slug: "raft-consensus-algorithm",
    category: "system-design",
    subcategory: "Consensus & Coordination",
    difficulty: "Advanced",
    readTime: "9 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Raft Consensus Algorithm: Leader Election, Log Replication & Safety",
    metaTitle: "Raft Consensus Algorithm Explained Clearly | PrepSpaces Concepts",
    description:
      "Understand how Raft powers etcd, Consul, and Kafka KRaft: Terms, Randomized Election Timeouts, majority quorum Leader Election, AppendEntries log replication, and Split-Brain safety.",
    keywords: "Raft consensus algorithm, leader election quorum, Raft log replication, etcd Kubernetes Raft, split brain safety",
    directAnswer:
      "Raft is a fault-tolerant distributed consensus algorithm (used in `etcd`, Consul, CockroachDB, and Kafka KRaft) ensuring a replicated cluster agrees on one ordered log of commands even if minority nodes crash. It decomposes consensus cleanly into **Leader Election** (using monotonically increasing **Terms** and randomized timeouts), **Log Replication**, and strict majority-quorum **Safety** (`N/2 + 1`).",
    sections: [
      {
        heading: "1. Three Node Roles, Monotonic Terms & Randomized Leader Election",
        paragraphs: [
          "Every Raft node exists in one of three states: **Follower**, **Candidate**, or **Leader**. Time advances in logical numbered **Terms** (serving as distributed fencing epochs).",
          "If a Follower stops receiving periodic `AppendEntries` heartbeats before its randomized election timeout (`150–300 ms`), it increments `currentTerm`, becomes a Candidate, votes for itself, and broadcasts `RequestVote`. Randomized timeouts break tie splits swiftly so one Candidate secures `floor(N/2) + 1` majority votes cleanly.",
        ],
      },
      {
        heading: "2. Log Replication & Two-Step Commit Rule",
        paragraphs: [
          "Clients send all state mutations to the **Leader**, which appends the entry locally (`uncommitted`) and sends `AppendEntries(prevLogIndex, prevLogTerm)` RPCs to Followers. Once a strict majority confirms disk persistence, the Leader commits the entry, applies it to its state machine (`FSM`), and notifies Followers in the next heartbeat.",
        ],
      },
      {
        heading: "3. Split-Brain Defense & Odd Cluster Sizing (`3` or `5`)",
        paragraphs: [
          "Suppose a 5-node cluster partitions into 2 nodes (including the old Leader!) and 3 nodes. The minority 2-node side can **never** gather 3 majority votes to elect a leader or commit writes; meanwhile the 3-node majority elects a higher-Term Leader safely. When the network heals, the old Leader sees a higher `Term`, steps down immediately to Follower, and truncates any uncommitted stale tail logs.",
        ],
      },
    ],
    codeExample: {
      title: "Majority Quorum Fault Tolerance Math (`2f + 1` Rule)",
      language: "text",
      code: `Cluster Nodes (N) | Majority Quorum | Max Node Failures Tolerated (f)
------------------+-----------------+--------------------------------
        3         |        2        | 1 node down safely
        4         |        3        | Still ONLY 1! (Wastes 1 extra node)
        5         |        3        | 2 nodes down safely (production standard)
        7         |        4        | 3 nodes down safely`,
      explanation:
        "Even cluster sizes (`4`, `6`) add cost without increasing fault tolerance (`4` still dies if 2 nodes fail, since `4 - 2 = 2 < quorum 3`)—always deploy odd node counts `3`, `5`, or `7`.",
    },
    commonMistakes: [
      {
        mistake: "Running 2-node or 4-node Raft clusters expecting extra reliability.",
        correction:
          "A 2-node cluster needs `quorum = 2`—zero fault tolerance (even worse than 1 node)! Always deploy `3` or `5` nodes.",
      },
      {
        mistake: "Allowing Followers to serve stale reads directly without `ReadIndex` / lease checks during partitions.",
        correction:
          "An isolated partitioned old Leader could return stale reads unless linearizable read verification (`ReadIndex` quorum heartbeat) confirms leadership.",
      },
      {
        mistake: "Allowing a Candidate with incomplete logs to win election just by timing out fastest.",
        correction:
          "Raft's Election Restriction rejects votes for any Candidate whose log is less up-to-date (`lastLogTerm`, `lastLogIndex`) than the voter's own committed log.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does Kubernetes run `etcd` on 3 or 5 nodes instead of 2 or 4?",
        answer:
          "Because Raft requires `floor(N/2) + 1` votes to tolerate `f` failures (`2f + 1`). A 4-node cluster has quorum 3 and tolerates only 1 failure—same as 3 nodes while paying 33% more infra cost.",
      },
      {
        question: "How does Raft prevent two split-brain Leaders from both committing conflicting data?",
        answer:
          "Each Term permits at most 1 elected leader via majority quorum intersection (two disjoint majorities cannot coexist inside `N` nodes), and every RPC carries `Term` so stale leaders step down immediately.",
      },
      {
        question: "Why does Raft randomize election timeouts between e.g. 150ms–300ms?",
        answer:
          "Fixed identical timeouts would cause all Followers to become Candidates simultaneously and split votes repeatedly; randomization ensures one node usually times out first and wins majority quickly.",
      },
    ],
    relatedConcepts: [
      "/concepts/system-design/cap-theorem",
      "/concepts/system-design/consistent-hashing",
      "/concepts/cloud/multi-region-failover",
    ],
    relatedCourse: {
      title: "System Design Masterclass",
      route: "/learning/system-design",
      description: "Interactive Paxos vs Raft breakdowns, leader election, log safety, and distributed coordination.",
    },
    relatedModules: [
      { title: "System Design Module 11: Consensus & Coordination (Paxos & Raft)", route: "/learning/system-design/consensus" },
      { title: "System Design Module 10: Consistency & Quorums", route: "/learning/system-design/consistency" },
    ],
    practiceAction: {
      label: "Practice Consensus & Raft Interviews",
      to: "/interview",
      summary: "Select System Design -> Consensus on PrepSpaces to explain Raft election & safety aloud.",
    },
  },
];
