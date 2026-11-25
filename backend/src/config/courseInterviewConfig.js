/**
 * Course and Module Registry for PrepSpaces Mock Interviews
 * Provides full course list, dynamic module hierarchies, and concise expected learning outcomes.
 */

export const PREPSPACES_COURSES = [
  {
    id: "ai-engineering",
    title: "AI Engineering & Generative AI",
    badge: "AI & Generative AI Track",
    isActive: true,
    comingSoon: false,
    description: "Evaluates your understanding of neural network architectures, LLM fine-tuning, RAG pipelines, autonomous agents, and production AI system design.",
    outcome: "Demonstrate architectural competence across Transformer mechanisms, embedding search, prompt engineering, and scalable AI inference.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive AI Engineering)", description: "Covers the complete 24-module AI & GenAI curriculum from foundations to production architecture." },
      { id: "M01", title: "M01: AI Engineering Foundations & Python for AI", phase: "P1", description: "Evaluates core AI concepts, Python data structures, NumPy array vectorization, and computational thinking." },
      { id: "M02", title: "M02: Mathematics for AI & Machine Learning", phase: "P1", description: "Tests linear algebra, matrix decomposition, multivariable calculus, gradients, and probability distributions for AI." },
      { id: "M03", title: "M03: Machine Learning Fundamentals", phase: "P1", description: "Assesses supervised/unsupervised algorithms, regression, classification, regularization, and model validation." },
      { id: "M04", title: "M04: Deep Learning & Neural Network Engineering", phase: "P1", description: "Covers multilayer perceptrons, backpropagation, activation dynamics, loss landscapes, and PyTorch architecture." },
      { id: "M05", title: "M05: Natural Language Processing Engineering", phase: "P2", description: "Tests tokenization, n-grams, word embeddings, sequence modeling, and traditional NLP pipelines." },
      { id: "M06", title: "M06: Transformer Architecture from Scratch", phase: "P2", description: "Deep dive into self-attention, multi-head attention, scaled dot-product, positional encodings, and encoder-decoder stacks." },
      { id: "M07", title: "M07: Large Language Models: GPT, Llama & Qwen", phase: "P2", description: "Evaluates autoregressive architectures, decoder-only LLMs (GPT, Llama, Qwen), KV caching, and context scaling." },
      { id: "M08", title: "M08: LLM Training & Fine-Tuning Foundations", phase: "P2", description: "Tests pre-training objectives, instruction fine-tuning, loss metrics, and alignment foundations." },
      { id: "M09", title: "M09: Prompt Engineering & Structured LLM Outputs", phase: "P3", description: "Assesses zero-shot, few-shot, chain-of-thought, system prompt design, output schemas, and constrained decoding." },
      { id: "M10", title: "M10: Embeddings, Vector Databases & Semantic Search", phase: "P3", description: "Evaluates dense embedding spaces, similarity search, ANN indexing (HNSW/IVF), and vector database operations." },
      { id: "M11", title: "M11: Retrieval-Augmented Generation (RAG) Engineering", phase: "P3", description: "Covers naive and advanced RAG, chunking strategies, hybrid dense-sparse search, and context injection." },
      { id: "M12", title: "M12: Multimodal Generative AI", phase: "P3", description: "Assesses vision-language models, cross-modal attention, image generation, and multimodal reasoning systems." },
      { id: "M13", title: "M13: AI Agents & Tool-Calling Systems", phase: "P4", description: "Tests ReAct loops, deterministic tool calling, function schemas, and environment observation cycles." },
      { id: "M14", title: "M14: Multi-Agent AI Systems & Orchestration", phase: "P4", description: "Evaluates multi-agent orchestration, communication protocols, task decomposition, and consensus mechanisms." },
      { id: "M15", title: "M15: Advanced RAG & Knowledge Engineering", phase: "P4", description: "Covers graph RAG, hierarchical knowledge retrieval, rerankers, contextual compression, and metadata routing." },
      { id: "M16", title: "M16: AI Evaluation, Alignment & Safety Engineering", phase: "P4", description: "Assesses benchmark evaluations, hallucination measurement, red teaming, jailbreak defenses, and safety guardrails." },
      { id: "M17", title: "M17: LLM Inference & Model Serving Engineering", phase: "P5", description: "Tests vLLM, TensorRT-LLM, continuous batching, PagedAttention, speculative decoding, and model serving." },
      { id: "M18", title: "M18: AI Backend Engineering & API Development", phase: "P5", description: "Evaluates high-throughput streaming APIs, WebSocket inference, async queues, and production AI middleware." },
      { id: "M19", title: "M19: AI MLOps, Deployment & CI/CD", phase: "P5", description: "Tests model registries, CI/CD pipelines, containerized inference, versioning, and canary deployments." },
      { id: "M20", title: "M20: AI Scalability, Optimization & Observability", phase: "P5", description: "Covers distributed inference, GPU profiling, quantization (AWQ/GPTQ/FP8), and observability dashboards." },
      { id: "M21", title: "M21: Fine-Tuning LLMs for Domain-Specific Applications", phase: "P6", description: "Tests PEFT, LoRA/QLoRA parameter efficiency, domain adaptation, and synthetic dataset curation." },
      { id: "M22", title: "M22: Building Small Language Models from Scratch", phase: "P6", description: "Evaluates training compact language models (SLMs), architecture choices, tokenizer design, and compute efficiency." },
      { id: "M23", title: "M23: AI System Design & Real-World Architecture", phase: "P6", description: "Covers end-to-end enterprise AI system design, capacity planning, cost budgets, and architectural trade-offs." },
      { id: "M24", title: "M24: Final AI Engineering Capstone", phase: "P6", description: "Comprehensive capstone interview evaluating full-stack AI engineering, production readiness, and systems mastery." },
    ],
  },
  {
    id: "system-design",
    title: "System Design Masterclass",
    badge: "System Architecture Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates your ability to design resilient, distributed software systems capable of scaling to millions of concurrent users.",
    outcome: "Demonstrate proficiency in capacity planning, database sharding, caching strategies, distributed consensus, and fault-tolerant architecture.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Evaluates complete end-to-end distributed system design and trade-off analysis." },
      { id: "architecture-fundamentals", title: "Architecture Fundamentals & Capacity Planning", description: "Tests throughput estimation, latency budgets, bottleneck identification, and SLA design." },
      { id: "networking-apis", title: "Networking, Protocols & API Gateways", description: "Assesses gRPC vs REST vs WebSockets, load balancing algorithms, and reverse proxies." },
      { id: "databases-modeling", title: "Databases: SQL vs NoSQL & Data Modeling", description: "Tests ACID vs BASE, relational schema design, document vs wide-column databases, and indexing." },
      { id: "caching-strategies", title: "Caching Strategies & Distributed Invalidation", description: "Evaluates Redis/Memcached patterns, cache-aside, write-through, write-behind, and thundering herd defense." },
      { id: "sharding-replication", title: "Replication, Sharding & Partitioning", description: "Tests consistent hashing, leader-follower replication, split-brain resolution, and horizontal scaling." },
      { id: "distributed-consensus", title: "Distributed Consensus & Consistency Models", description: "Assesses CAP theorem, PACELC, linearizability, Raft, Paxos, and distributed locking." },
      { id: "message-queues", title: "Message Queues & Event-Driven Architecture", description: "Tests Kafka vs RabbitMQ, publish-subscribe topologies, consumer groups, and idempotency." },
      { id: "transactions-sagas", title: "Distributed Transactions & Saga Patterns", description: "Evaluates two-phase commit (2PC), orchestrator vs choreography sagas, and compensating actions." },
      { id: "multi-region", title: "High Availability & Multi-Region Resilience", description: "Assesses active-active vs active-passive failover, cross-region replication, and disaster recovery." },
    ],
  },
  {
    id: "operating-systems",
    title: "Operating Systems Master Course",
    badge: "Core Systems Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates deep technical knowledge of kernel internals, virtual memory translation, process scheduling, concurrency, and POSIX primitives.",
    outcome: "Demonstrate low-level understanding of hardware mediation, CPU privilege levels, interrupt handling, and memory lifecycle.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Covers complete operating system internals from bootstrap to file systems." },
      { id: "kernel-architecture", title: "Kernel Architecture & Privilege Rings", description: "Assesses monolithic vs microkernels, user space vs kernel space transitions, and trap handling." },
      { id: "systems-programming", title: "Systems Programming & POSIX System Calls", description: "Tests C memory management, file descriptors, signals, and fork/exec process execution." },
      { id: "process-lifecycle", title: "Process Lifecycle & Inter-Process Communication", description: "Evaluates process control blocks, shared memory, pipes, message queues, and context switching." },
      { id: "cpu-scheduling", title: "CPU Scheduling Algorithms & Multiprocessing", description: "Tests CFS (Completely Fair Scheduler), priority inversion, affinity, and real-time scheduling." },
      { id: "concurrency-locks", title: "Concurrency, Threads & Deadlock Prevention", description: "Assesses pthreads, mutexes, semaphores, spinlocks, condition variables, and Coffman conditions." },
      { id: "virtual-memory", title: "Virtual Memory, Paging & TLB Translation", description: "Evaluates multi-level page tables, page faults, demand paging, TLB caching, and page replacement." },
      { id: "file-systems", title: "File Systems, Inodes & Storage I/O", description: "Tests VFS abstraction, inode metadata, journaling file systems, buffer caches, and disk scheduling." },
    ],
  },
  {
    id: "computer-networks",
    title: "Computer Networks & Internet",
    badge: "Networking & Protocols Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates mastery of network architectures, protocol stacks, packet analysis, socket programming, and modern Internet engineering.",
    outcome: "Articulate network layer mechanics, TCP flow control, BGP routing, TLS 1.3 handshakes, and modern HTTP/3 protocols.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Comprehensive evaluation across the entire OSI and TCP/IP protocol stack." },
      { id: "network-models", title: "Network Models, Topologies & Packet Switching", description: "Assesses OSI 7-layer vs TCP/IP models, packet vs circuit switching, and propagation delays." },
      { id: "ethernet-switching", title: "Ethernet, Data Link Layer & VLANs", description: "Tests MAC addressing, ARP resolution, Spanning Tree Protocol (STP), and collision domains." },
      { id: "ip-routing", title: "IP Addressing, Subnetting & BGP Routing", description: "Evaluates CIDR notation, IPv4/IPv6 headers, intra-domain (OSPF) and inter-domain (BGP) routing." },
      { id: "tcp-udp", title: "Transport Layer: TCP Reliability & Flow Control", description: "Tests 3-way handshake, sliding window, slow start, congestion avoidance, and UDP trade-offs." },
      { id: "socket-programming", title: "Socket Programming & Multiplexing (epoll)", description: "Assesses blocking vs non-blocking I/O, select/poll/epoll, and high-performance server architectures." },
      { id: "dns-cdn", title: "DNS, CDN Architectures & Web Protocols", description: "Evaluates recursive vs iterative DNS, Anycast routing, CDN edge caching, and cache invalidation." },
      { id: "http3-tls", title: "HTTP/2, HTTP/3 (QUIC) & TLS 1.3 Security", description: "Tests head-of-line blocking mitigation, QUIC UDP streams, TLS 1.3 zero-RTT, and cipher suites." },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Masterclass",
    badge: "Security & Defense Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates practical understanding of security engineering, cryptographic protocols, ethical hacking, and threat mitigation.",
    outcome: "Demonstrate defensive security mindset, adversarial threat modeling, zero-trust implementation, and OWASP vulnerability remediation.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Complete assessment of modern enterprise defense, cryptography, and application security." },
      { id: "threat-modeling", title: "Security Principles & STRIDE Threat Modeling", description: "Assesses the CIA triad, STRIDE methodology, attack surface reduction, and defense-in-depth." },
      { id: "cryptography-pki", title: "Cryptography, Hashing & Public Key Infrastructure", description: "Tests symmetric vs asymmetric encryption, RSA, ECC, cryptographic hashes, and X.509 certificates." },
      { id: "auth-oauth", title: "Authentication, Authorization & OAuth 2.0 / OIDC", description: "Evaluates JWT security, RBAC vs ABAC, multi-factor authentication, and token revocation patterns." },
      { id: "web-security-owasp", title: "Web Application Security & OWASP Top 10", description: "Tests injection vulnerabilities (SQLi, Command Injection), XSS, CSRF, SSRF, and secure headers." },
      { id: "zero-trust", title: "Zero Trust Architecture & Network Defense", description: "Assesses microsegmentation, least privilege access, mTLS service meshes, and perimeterless defense." },
      { id: "incident-response", title: "Vulnerability Assessment & Incident Response", description: "Evaluates ethical hacking workflows, penetration testing methodologies, CVE triage, and SIEM logs." },
    ],
  },
  {
    id: "devops",
    title: "DevOps & SRE Track",
    badge: "Infrastructure & Automation Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates real-world infrastructure engineering, container orchestration, CI/CD automation, and site reliability practices.",
    outcome: "Demonstrate competence in container lifecycle, Kubernetes deployments, infrastructure as code, and automated production pipelines.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Complete evaluation of modern DevOps culture, cloud infrastructure, and SRE metrics." },
      { id: "linux-automation", title: "Linux Administration & Bash Automation", description: "Tests systemd service management, process signals, shell scripting, and storage administration." },
      { id: "docker-containers", title: "Docker Containerization & Image Optimization", description: "Assesses namespaces, cgroups, UnionFS, multi-stage builds, and container security scanning." },
      { id: "kubernetes", title: "Kubernetes Orchestration & Pod Architecture", description: "Tests Deployments, StatefulSets, Services, Ingress, ConfigMaps, Secrets, and CNI networking." },
      { id: "terraform-iac", title: "Infrastructure as Code (IaC) with Terraform", description: "Evaluates declarative syntax, state locking, module design, drift detection, and plan verification." },
      { id: "cicd-gitops", title: "CI/CD Pipelines & GitOps Automation", description: "Tests automated testing gates, artifact registries, blue-green deployments, canary releases, and ArgoCD." },
      { id: "sre-observability", title: "SRE Practices, Observability & Incident Response", description: "Assesses SLI/SLO/SLA definitions, error budgets, Prometheus metrics, distributed tracing, and post-mortems." },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing & Systems",
    badge: "Cloud Architecture Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates multi-cloud architectural principles, compute abstraction, managed storage, and cost-efficient cloud system design.",
    outcome: "Demonstrate enterprise cloud engineering across AWS, Azure, and Google Cloud with emphasis on multi-region reliability and security.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Comprehensive evaluation of cloud architecture across AWS, Azure, and Google Cloud." },
      { id: "cloud-networking", title: "VPC Architecture, Subnets & Transit Gateways", description: "Tests virtual networks, CIDR block allocation, NAT gateways, peering, and direct connections." },
      { id: "cloud-compute", title: "Compute Services, Containers & Serverless", description: "Assesses VM sizing, auto-scaling groups, serverless execution limits, and cold-start mitigation." },
      { id: "cloud-storage", title: "Cloud Storage, Object Stores & Data Services", description: "Tests S3 storage classes, bucket policies, lifecycle transitions, and managed database replicas." },
      { id: "cloud-security", title: "Cloud IAM, KMS & Security Governance", description: "Evaluates least privilege IAM policies, role assumption, KMS envelope encryption, and audit trails." },
      { id: "cloud-finops", title: "Multi-Region Disaster Recovery & FinOps", description: "Assesses RTO/RPO objectives, active-active multi-region failover, and cloud cost optimization." },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning Master Course",
    badge: "Machine Learning Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates end-to-end data science and classical machine learning, from statistical foundations to production model deployments.",
    outcome: "Articulate algorithm selection trade-offs, regularization techniques, feature engineering, and model validation strategies.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Complete assessment of supervised, unsupervised, and ensemble machine learning." },
      { id: "ml-math-eda", title: "Mathematical Foundations & Exploratory Data Analysis", description: "Tests linear algebra, multivariable calculus, probability distributions, and outlier handling." },
      { id: "supervised-learning", title: "Supervised Learning: Regression & Classification", description: "Assesses linear/logistic regression, decision trees, support vector machines, and loss metrics." },
      { id: "ensemble-methods", title: "Ensemble Methods: Random Forests & Boosting", description: "Tests bagging vs boosting, gradient boosting machines, XGBoost, LightGBM, and feature importance." },
      { id: "unsupervised-learning", title: "Unsupervised Learning: Clustering & Dimensionality Reduction", description: "Evaluates K-Means, hierarchical clustering, PCA (Principal Component Analysis), and t-SNE." },
      { id: "model-evaluation", title: "Model Evaluation, Cross-Validation & Metric Selection", description: "Assesses ROC-AUC, Precision-Recall curves, F1-score, k-fold cross-validation, and data leakage." },
      { id: "mlops-deployment", title: "Production ML Pipelines & Model Serving", description: "Tests model serialization, feature stores, data drift detection, and automated retraining workflows." },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering Master Course",
    badge: "Data Systems Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates large-scale data pipeline engineering, streaming architectures, dimensional modeling, and modern lakehouse designs.",
    outcome: "Demonstrate competence in distributed data processing with Spark, real-time streaming with Kafka, and modern lakehouse architectures.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Covers complete data pipeline architecture, distributed computation, and storage layers." },
      { id: "data-architecture", title: "Data Architecture & Pipeline Principles", description: "Tests batch vs streaming, idempotency in pipelines, backfilling strategies, and data SLAs." },
      { id: "oltp-olap", title: "OLTP vs OLAP Systems & Dimensional Modeling", description: "Assesses row vs columnar storage, star and snowflake schemas, slowly changing dimensions (SCD)." },
      { id: "spark-processing", title: "Distributed Batch Processing with Apache Spark", description: "Tests RDDs, DataFrames, Spark SQL, shuffling bottlenecks, partitioning, and memory management." },
      { id: "kafka-streaming", title: "Real-Time Stream Processing with Apache Kafka", description: "Evaluates topic partitioning, consumer offset commits, exactly-once semantics, and watermarks." },
      { id: "lakehouse-iceberg", title: "Data Lakehouses (Apache Iceberg & Delta Lake)", description: "Assesses ACID on object storage, metadata management, time travel queries, and compaction." },
      { id: "data-quality", title: "Data Quality, Testing & Pipeline Governance", description: "Tests automated schema validation, anomaly detection, Great Expectations, and lineage tracking." },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain Technology & Decentralized Systems",
    badge: "Decentralized Systems Track",
    isActive: false,
    comingSoon: true,
    description: "Evaluates cryptographic fundamentals, distributed consensus mechanisms, smart contract security, and decentralized architecture.",
    outcome: "Demonstrate mastery of peer-to-peer network consensus, EVM execution, smart contract security, and Layer 2 rollup scaling.",
    modules: [
      { id: "all", title: "All Modules (Comprehensive Interview)", description: "Complete assessment of blockchain architecture, consensus, and smart contract engineering." },
      { id: "crypto-primitives", title: "Cryptographic Primitives & Digital Signatures", description: "Tests cryptographic hashing (SHA-256/Keccak), asymmetric key pairs, and Merkle tree verification." },
      { id: "consensus-mechanisms", title: "Consensus Mechanisms: Proof of Work vs Proof of Stake", description: "Evaluates Nakamoto consensus, validator slashing, finality guarantees, and 51% attack resistance." },
      { id: "smart-contracts-evm", title: "Smart Contracts & EVM Execution Mechanics", description: "Assesses bytecode execution, gas metering, state storage slots, and reentrancy vulnerability defense." },
      { id: "l2-scaling", title: "Layer 2 Scaling, Rollups & Zero-Knowledge Proofs", description: "Tests optimistic rollups, fraud proofs, ZK-rollups (SNARKs/STARKs), and state channel mechanics." },
    ],
  },
];

/**
 * Normalizes any module input identifier (e.g. "M01", "module-1", "m1", "ai-foundations") into "M01"
 */
export function normalizeModuleId(moduleId) {
  if (!moduleId || moduleId === "all") return "all";
  const str = String(moduleId).trim().toUpperCase();
  if (/^M\d{2}$/.test(str)) return str;
  if (/^M\d{1}$/.test(str)) return `M0${str.slice(1)}`;
  const modMatch = str.match(/MODULE[-_]?(\d+)/i) || str.match(/^(\d+)$/);
  if (modMatch) {
    const num = parseInt(modMatch[1], 10);
    if (num >= 1 && num <= 24) {
      return `M${String(num).padStart(2, "0")}`;
    }
  }
  const slugMap = {
    "AI-FOUNDATIONS": "M01",
    "PYTHON": "M01",
    "MATH": "M02",
    "MATHEMATICS": "M02",
    "MATH-AI": "M02",
    "MACHINE-LEARNING": "M03",
    "ML": "M03",
    "DEEP-LEARNING": "M04",
    "NEURAL-NETWORKS": "M04",
    "NLP": "M05",
    "TRANSFORMERS": "M06",
    "LLM-FUNDAMENTALS": "M07",
    "LLMS": "M07",
    "FINE-TUNING": "M08",
    "PROMPT-ENGINEERING": "M09",
    "EMBEDDINGS": "M10",
    "VECTOR-SEARCH": "M10",
    "RAG-VECTOR-SEARCH": "M11",
    "RAG": "M11",
    "MULTIMODAL": "M12",
    "MULTIMODAL-AI": "M12",
    "AGENTS": "M13",
    "AGENTS-TOOL-USE": "M13",
    "MULTI-AGENT": "M14",
    "ADVANCED-RAG": "M15",
    "EVALUATION-SAFETY": "M16",
    "SAFETY": "M16",
    "LLMOPS": "M17",
    "LLMOPS-SERVING": "M17",
    "INFERENCE": "M17",
    "AI-BACKEND": "M18",
    "BACKEND": "M18",
    "MLOPS": "M19",
    "DEPLOYMENT": "M19",
    "SCALABILITY": "M20",
    "OPTIMIZATION": "M20",
    "DOMAIN-FINE-TUNING": "M21",
    "SMALL-LANGUAGE-MODELS": "M22",
    "SLM": "M22",
    "SCRATCH-SLM": "M22",
    "SYSTEM-DESIGN": "M23",
    "AI-SYSTEM-DESIGN": "M23",
    "CAPSTONE": "M24",
    "FINAL-CAPSTONE": "M24",
  };
  return slugMap[str] || moduleId;
}

/**
 * Returns course by ID with safe fallback
 */
export function getCourseById(courseId) {
  return PREPSPACES_COURSES.find((c) => c.id === courseId) || PREPSPACES_COURSES[0];
}

/**
 * Returns module by course ID and module ID with intelligent normalization
 */
export function getModuleById(courseId, moduleId) {
  const course = getCourseById(courseId);
  if (!course || !course.modules || course.modules.length === 0) return null;
  const targetId = moduleId || "all";
  const normalized = normalizeModuleId(targetId);

  // 1. Direct ID match
  let found = course.modules.find((m) => m.id === targetId || m.id === normalized);
  if (found) return found;

  // 2. Case-insensitive / slug match
  found = course.modules.find(
    (m) => m.id.toLowerCase() === targetId.toLowerCase() || m.id.toLowerCase() === normalized.toLowerCase()
  );
  if (found) return found;

  return course.modules[0];
}
