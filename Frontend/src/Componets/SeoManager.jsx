import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://prepspaces.com";

// Comprehensive route SEO definitions
const routeMeta = {
  "/": {
    title: "PrepSpaces — Technical Interview Preparation & Architecture Mastery",
    description: "Prepare for top-tier software engineering interviews with interactive learning tracks in System Design, Cloud Computing, DevOps, and OOPS.",
    canonical: `${BASE_URL}/`,
  },
  "/learning": {
    title: "Engineering Curriculum & Study Tracks — PrepSpaces",
    description: "Explore in-depth interactive tracks for System Design, DevOps & SRE, Cloud Computing, and Object-Oriented Programming (OOPS).",
    canonical: `${BASE_URL}/learning`,
  },
  "/learning/oops": {
    title: "OOPS Mastery & Object-Oriented Design Patterns — PrepSpaces",
    description: "Master OOP principles, encapsulation, polymorphism, inheritance, and SOLID design patterns with real-world architectural code examples.",
    canonical: `${BASE_URL}/learning/oops`,
  },
  "/interview": {
    title: "Technical Mock Interview Platform — PrepSpaces",
    description: "Practice technical and behavioral software engineering mock interviews. Status and roadmap updates for automated interview rooms.",
    canonical: `${BASE_URL}/interview`,
  },

  // System Design Masterclass
  "/learning/system-design": {
    title: "System Design Masterclass: Architecture & Scale — PrepSpaces",
    description: "Complete guide to designing scalable distributed systems, high availability, microservices, and architectural trade-offs.",
    canonical: `${BASE_URL}/learning/system-design`,
  },
  "/learning/system-design/intro": {
    title: "Architectural Thinking & System Design Foundations — PrepSpaces",
    description: "Learn foundational architectural design principles, non-functional requirements, and trade-off matrices for distributed systems.",
    canonical: `${BASE_URL}/learning/system-design`,
  },
  "/learning/system-design/requirements": {
    title: "Requirements & Capacity Estimation Guide — PrepSpaces",
    description: "Learn how to estimate throughput (QPS/RPS), storage volumes, bandwidth, and memory caches during system design interviews.",
    canonical: `${BASE_URL}/learning/system-design/requirements`,
  },
  "/learning/system-design/networking": {
    title: "Networking, APIs & Communication Protocols — PrepSpaces",
    description: "Deep dive into REST, gRPC, WebSockets, HTTP/2, HTTP/3, and TCP/UDP communication patterns in modern architectures.",
    canonical: `${BASE_URL}/learning/system-design/networking`,
  },
  "/learning/system-design/architecture": {
    title: "Monoliths vs Microservices Architecture — PrepSpaces",
    description: "Compare monolithic architectures, modular monoliths, and microservices decomposition with real-world trade-off criteria.",
    canonical: `${BASE_URL}/learning/system-design/architecture`,
  },
  "/learning/system-design/databases": {
    title: "Relational Databases, NoSQL & Indexing Internals — PrepSpaces",
    description: "Master B-Trees, LSM-Trees, SQL indexing, NoSQL document/key-value stores, and database query optimization.",
    canonical: `${BASE_URL}/learning/system-design/databases`,
  },
  "/learning/system-design/caching": {
    title: "Distributed Caching, Redis & CDN Strategies — PrepSpaces",
    description: "Master cache-aside, write-through, write-behind, LRU/LFU eviction, and distributed caching invalidation strategies.",
    canonical: `${BASE_URL}/learning/system-design/caching`,
  },
  "/learning/system-design/replication": {
    title: "Database Replication, Partitioning & Sharding — PrepSpaces",
    description: "Master horizontal sharding, consistent hashing, single-leader vs multi-leader replication, and failover topologies.",
    canonical: `${BASE_URL}/learning/system-design/replication`,
  },
  "/learning/system-design/distributed-systems": {
    title: "Distributed Systems, Clocks & Network Partitions — PrepSpaces",
    description: "Understand physical vs logical clocks (Lamport, Vector), network latency, timeouts, and CAP theorem nuances.",
    canonical: `${BASE_URL}/learning/system-design/distributed-systems`,
  },
  "/learning/system-design/consistency": {
    title: "Consistency Models, Linearizability & Quorum Systems — PrepSpaces",
    description: "Deep dive into strict consistency, sequential consistency, causal consistency, eventual consistency, and quorum math (R+W > N).",
    canonical: `${BASE_URL}/learning/system-design/consistency`,
  },
  "/learning/system-design/consensus": {
    title: "Distributed Consensus & Raft Protocol — PrepSpaces",
    description: "Interactive breakdown of distributed consensus, Paxos vs Raft, leader election, log replication, and split-brain defenses.",
    canonical: `${BASE_URL}/learning/system-design/consensus`,
  },
  "/learning/system-design/messaging": {
    title: "Message Queues, Kafka & Event-Driven Architecture — PrepSpaces",
    description: "Understand message brokers, RabbitMQ vs Apache Kafka, consumer groups, partitions, event sourcing, and delivery semantics.",
    canonical: `${BASE_URL}/learning/system-design/messaging`,
  },
  "/learning/system-design/transactions": {
    title: "Distributed Transactions, 2PC & Saga Orchestration — PrepSpaces",
    description: "Learn how to manage transactions across distributed microservices using Two-Phase Commit (2PC) and Saga patterns.",
    canonical: `${BASE_URL}/learning/system-design/transactions`,
  },
  "/learning/system-design/traffic": {
    title: "Load Balancing, Rate Limiting & Traffic Management — PrepSpaces",
    description: "Master L4/L7 load balancing algorithms, Token Bucket, Leaky Bucket rate limiting, circuit breakers, and backpressure.",
    canonical: `${BASE_URL}/learning/system-design/traffic`,
  },
  "/learning/system-design/scalability": {
    title: "Scalability & Performance Modeling — PrepSpaces",
    description: "Analyze system bottlenecks, vertical vs horizontal scaling, Amdahl's law, Universal Scalability Law, and performance tuning.",
    canonical: `${BASE_URL}/learning/system-design/scalability`,
  },
  "/learning/system-design/multi-region": {
    title: "Multi-Region Deployments & Disaster Recovery — PrepSpaces",
    description: "Design active-passive and active-active multi-region architectures, calculating RTO (Recovery Time Objective) and RPO.",
    canonical: `${BASE_URL}/learning/system-design/multi-region`,
  },
  "/learning/system-design/reliability": {
    title: "Reliability Engineering & Observability — PrepSpaces",
    description: "Master metrics, distributed tracing, structured logging, SLA/SLO/SLI calculation, and high-availability design.",
    canonical: `${BASE_URL}/learning/system-design/reliability`,
  },
  "/learning/system-design/security": {
    title: "System Design Security & Multi-Tenancy — PrepSpaces",
    description: "Architect zero-trust networks, OAuth2/OIDC token verification, RBAC/ABAC authorization, and data isolation at scale.",
    canonical: `${BASE_URL}/learning/system-design/security`,
  },
  "/learning/system-design/realtime": {
    title: "Real-Time Systems, WebSockets & Presence Servers — PrepSpaces",
    description: "Design live presence platforms, collaborative editing architectures, and scalable WebSocket connection managers.",
    canonical: `${BASE_URL}/learning/system-design/realtime`,
  },
  "/learning/system-design/search": {
    title: "Search Engines, Inverted Index & Vector Feeds — PrepSpaces",
    description: "Understand inverted index engines (Elasticsearch), full-text retrieval, relevance ranking, and activity feed generation.",
    canonical: `${BASE_URL}/learning/system-design/search`,
  },
  "/learning/system-design/ai-systems": {
    title: "AI Systems Design & Inference Serving at Scale — PrepSpaces",
    description: "Architect production machine learning systems, model serving pipelines, GPU scheduling, vector databases, and RAG architectures.",
    canonical: `${BASE_URL}/learning/system-design/ai-systems`,
  },
  "/learning/system-design/case-studies": {
    title: "System Design Case Studies (URL Shortener, Chat, Feed) — PrepSpaces",
    description: "Full end-to-end architectural case studies: TinyURL shortener, real-time WhatsApp-style chat, and Twitter feed algorithms.",
    canonical: `${BASE_URL}/learning/system-design/case-studies`,
  },
  "/learning/system-design/advanced-case-studies": {
    title: "Advanced System Design Case Studies (Uber, Netflix, Stripe) — PrepSpaces",
    description: "High-scale engineering deep dives: Ride-hailing dispatch, global video streaming CDN, and financial payment platforms.",
    canonical: `${BASE_URL}/learning/system-design/advanced-case-studies`,
  },
  "/learning/system-design/capstone": {
    title: "System Design Architecture Capstone Project — PrepSpaces",
    description: "Synthesize all distributed system principles into a complete, enterprise-grade architecture specification and design doc.",
    canonical: `${BASE_URL}/learning/system-design/capstone`,
  },

  // Cloud Computing Track
  "/learning/cloud": {
    title: "Cloud Computing Fundamentals & Global Infrastructure — PrepSpaces",
    description: "Master public cloud architecture, availability zones, data center topologies, and cloud operating principles.",
    canonical: `${BASE_URL}/learning/cloud`,
  },
  "/learning/cloud/networking": {
    title: "Cloud Networking: VPCs, Subnets & Gateways — PrepSpaces",
    description: "Design enterprise VPC topologies, CIDR blocks, transit gateways, NAT gateways, and secure cloud perimeter networking.",
    canonical: `${BASE_URL}/learning/cloud/networking`,
  },
  "/learning/cloud/compute": {
    title: "Cloud Compute: Virtual Machines to Serverless — PrepSpaces",
    description: "Compare EC2 instances, spot instances, autoscaling groups, containers (ECS), and serverless execution models.",
    canonical: `${BASE_URL}/learning/cloud/compute`,
  },
  "/learning/cloud/storage": {
    title: "Cloud Storage: Object, Block & File Systems — PrepSpaces",
    description: "Deep dive into AWS S3, EBS, EFS, storage lifecycle policies, encryption at rest, and cloud data tiering.",
    canonical: `${BASE_URL}/learning/cloud/storage`,
  },
  "/learning/cloud/databases": {
    title: "Managed Cloud Databases: RDS, DynamoDB & Aurora — PrepSpaces",
    description: "Architect managed cloud database clusters with read replicas, multi-AZ failover, and global distributed tables.",
    canonical: `${BASE_URL}/learning/cloud/databases`,
  },
  "/learning/cloud/architecture": {
    title: "Well-Architected Cloud Framework — PrepSpaces",
    description: "Implement the 6 pillars of AWS/Azure Well-Architected Framework: operational excellence, security, reliability, performance, cost, sustainability.",
    canonical: `${BASE_URL}/learning/cloud/architecture`,
  },
  "/learning/cloud/aws": {
    title: "Deep AWS Engineering & Architecture Mastery — PrepSpaces",
    description: "In-depth guide to core Amazon Web Services: IAM policies, CloudFormation, CloudWatch, and multi-account AWS Organizations.",
    canonical: `${BASE_URL}/learning/cloud/aws`,
  },
  "/learning/cloud/azure": {
    title: "Microsoft Azure Architecture & Enterprise Cloud — PrepSpaces",
    description: "Master Azure Resource Manager (ARM), Azure AD (Entra ID), Virtual Networks, and Azure enterprise landing zones.",
    canonical: `${BASE_URL}/learning/cloud/azure`,
  },
  "/learning/cloud/gcp": {
    title: "Google Cloud Platform (GCP) Architecture — PrepSpaces",
    description: "Understand Google Cloud VPCs, BigQuery architecture, Google Kubernetes Engine (GKE), and global network backbone.",
    canonical: `${BASE_URL}/learning/cloud/gcp`,
  },
  "/learning/cloud/multicloud": {
    title: "Multi-Cloud Strategy & Hybrid Architectures — PrepSpaces",
    description: "Design portable, vendor-neutral architectures across AWS, Azure, and Google Cloud with unified governance.",
    canonical: `${BASE_URL}/learning/cloud/multicloud`,
  },
  "/learning/cloud/security": {
    title: "Cloud Security, IAM & Zero-Trust Governance — PrepSpaces",
    description: "Enforce least privilege IAM, secret rotation, key management (KMS), and automated cloud security posture management (CSPM).",
    canonical: `${BASE_URL}/learning/cloud/security`,
  },
  "/learning/cloud/economics": {
    title: "Cloud Economics & FinOps Cost Optimization — PrepSpaces",
    description: "Master FinOps lifecycle, reserved instances, savings plans, rightsizing workloads, and multi-tenant cost allocation.",
    canonical: `${BASE_URL}/learning/cloud/economics`,
  },
  "/learning/cloud/advanced": {
    title: "Advanced Cloud Systems & Edge Computing — PrepSpaces",
    description: "Explore edge computing runtimes, Cloudflare Workers, AWS Lambda@Edge, and geo-distributed compute topologies.",
    canonical: `${BASE_URL}/learning/cloud/advanced`,
  },

  // DevOps & SRE Track
  "/learning/devops": {
    title: "DevOps & Site Reliability Engineering (SRE) Track — PrepSpaces",
    description: "Master modern production infrastructure, Linux systems, GitOps, Docker, Kubernetes, and automated deployment pipelines.",
    canonical: `${BASE_URL}/learning/devops`,
  },
  "/learning/devops/linux": {
    title: "Linux Administration & System Internals for DevOps — PrepSpaces",
    description: "Master Linux shell scripting, file permissions, processes, systemd services, memory management, and network troubleshooting.",
    canonical: `${BASE_URL}/learning/devops/linux`,
  },
  "/learning/devops/git": {
    title: "Git Internals & Professional Branching Workflows — PrepSpaces",
    description: "Deep dive into Git plumbing commands, DAG commits, trunk-based development, rebasing, and merge strategies.",
    canonical: `${BASE_URL}/learning/devops/git`,
  },
  "/learning/devops/docker": {
    title: "Docker & Containerization Mastery — PrepSpaces",
    description: "Build production Dockerfiles, multi-stage builds, container isolation, Linux namespaces/cgroups, and image security.",
    canonical: `${BASE_URL}/learning/devops/docker`,
  },
  "/learning/devops/k8s": {
    title: "Kubernetes Architecture & Cluster Orchestration — PrepSpaces",
    description: "Master Pods, Deployments, StatefulSets, Services, Ingress, Helm charts, and Kubernetes control plane internals.",
    canonical: `${BASE_URL}/learning/devops/k8s`,
  },
  "/learning/devops/iac": {
    title: "Infrastructure as Code with Terraform — PrepSpaces",
    description: "Master Terraform HCL, state management, module reusability, remote backends, and GitOps infrastructure provisioning.",
    canonical: `${BASE_URL}/learning/devops/iac`,
  },
  "/learning/devops/cicd": {
    title: "CI/CD Pipelines & Continuous Delivery — PrepSpaces",
    description: "Build robust GitHub Actions and GitLab CI pipelines with automated linting, test suites, and zero-downtime releases.",
    canonical: `${BASE_URL}/learning/devops/cicd`,
  },
  "/learning/devops/deployment": {
    title: "Deployment Strategies: Blue/Green & Canary — PrepSpaces",
    description: "Implement zero-downtime deployment strategies, canary releases, blue/green switching, and automated health checks.",
    canonical: `${BASE_URL}/learning/devops/deployment`,
  },
  "/learning/devops/sre": {
    title: "Site Reliability Engineering: SLOs & Error Budgets — PrepSpaces",
    description: "Implement Google SRE practices, define Service Level Objectives (SLOs), calculate error budgets, and incident command.",
    canonical: `${BASE_URL}/learning/devops/sre`,
  },
  "/learning/devops/reliability": {
    title: "Production Resilience & Chaos Engineering — PrepSpaces",
    description: "Design fault-tolerant systems using chaos engineering principles, graceful degradation, and post-mortem analysis.",
    canonical: `${BASE_URL}/learning/devops/reliability`,
  },
  "/learning/devops/devsecops": {
    title: "DevSecOps & Software Supply Chain Security — PrepSpaces",
    description: "Secure software supply chains with container vulnerability scanning (Trivy), SAST/DAST, and secret detection.",
    canonical: `${BASE_URL}/learning/devops/devsecops`,
  },
  "/learning/devops/platform": {
    title: "Platform Engineering & Internal Developer Portals — PrepSpaces",
    description: "Build developer platforms, self-service infrastructure blueprints, and paved-road developer experiences.",
    canonical: `${BASE_URL}/learning/devops/platform`,
  },
  "/learning/devops/capstone": {
    title: "DevOps & SRE Production Capstone Project — PrepSpaces",
    description: "Deploy an end-to-end cloud-native microservices cluster with complete CI/CD, Terraform IaC, and monitoring stack.",
    canonical: `${BASE_URL}/learning/devops/capstone`,
  },
};

/**
 * Helper to update or create a `<meta>` tag by name or property
 */
function updateMetaTag(attributeName, attributeValue, content) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/**
 * Helper to update or create `<link rel="canonical">`
 */
function updateCanonicalUrl(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

/**
 * SeoManager Component
 * Observes React Router pathname changes and updates document.title, meta descriptions,
 * canonical link tags, Open Graph, and Twitter metadata in real time.
 */
export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, "") || "/";
    const meta = routeMeta[pathname] || {
      title: "PrepSpaces — Technical Interview Preparation & Architecture Mastery",
      description: "Interactive technical learning platform for software engineers. System design, cloud computing, DevOps, and OOP.",
      canonical: `${BASE_URL}${pathname}`,
    };

    // 1. Update Title
    document.title = meta.title;

    // 2. Update Standard Meta
    updateMetaTag("name", "description", meta.description);
    updateMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Update Canonical Link
    updateCanonicalUrl(meta.canonical);

    // 4. Update Open Graph Meta
    updateMetaTag("property", "og:title", meta.title);
    updateMetaTag("property", "og:description", meta.description);
    updateMetaTag("property", "og:url", meta.canonical);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:site_name", "PrepSpaces");
    updateMetaTag("property", "og:image", `${BASE_URL}/logo-mark.png`);

    // 5. Update Twitter Meta
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", meta.title);
    updateMetaTag("name", "twitter:description", meta.description);
    updateMetaTag("name", "twitter:image", `${BASE_URL}/logo-mark.png`);
  }, [location.pathname]);

  return null;
}
