/**
 * Central PrepSpaces Concept Knowledge Library Index.
 * Connects Layer 3 (Concepts) <-> Layer 2 (Modules) <-> Layer 1 (Courses) + AI Mock Interviews.
 */
import { CONCEPTS_JAVA_OS } from "./concepts/conceptsJavaOs.js";
import { CONCEPTS_NET_SEC } from "./concepts/conceptsNetSec.js";
import { CONCEPTS_AI_CLOUD } from "./concepts/conceptsAiCloud.js";
import { CONCEPTS_DEVOPS_SYSDESIGN } from "./concepts/conceptsDevopsSysDesign.js";

export const CONCEPT_CATEGORIES = [
  {
    id: "java",
    route: "/concepts/java",
    title: "Java & JVM Internals",
    shortTitle: "Java",
    metaTitle: "Java Concepts Library — JVM, GC, HashMap & Concurrency | PrepSpaces",
    description:
      "Searchable deep-dive Java concepts covering JVM architecture, G1GC/ZGC garbage collection, HashMap internals, multithreading, Virtual Threads, and the Java Memory Model.",
    keywords: "Java concepts, JVM architecture, Java garbage collection, HashMap internals, Java Memory Model, Java interview prep",
    overview:
      "Master runtime internals, memory fences, collections mechanics, and concurrency models tested in backend software engineering interviews.",
    companionCourse: { title: "Operating Systems Masterclass", route: "/learning/os" },
  },
  {
    id: "os",
    route: "/concepts/os",
    title: "Operating Systems Concepts",
    shortTitle: "Operating Systems",
    metaTitle: "Operating Systems Concepts — Processes, Paging, Deadlocks | PrepSpaces",
    description:
      "Deep-dive Operating Systems reference topics: Processes vs Threads, Virtual Memory & TLB paging, Coffman Deadlocks, CPU Scheduling (MLFQ/EEVDF), and Mutex vs Semaphore.",
    keywords: "Operating systems concepts, process vs thread, virtual memory paging, Coffman deadlock, mutex vs semaphore",
    overview:
      "Core computer science kernel abstractions bridging hardware architecture, POSIX syscalls, concurrency primitives, and Linux diagnostics.",
    companionCourse: { title: "Operating Systems Masterclass (24 Modules)", route: "/learning/os" },
  },
  {
    id: "networks",
    route: "/concepts/networks",
    title: "Computer Networks Concepts",
    shortTitle: "Networks",
    metaTitle: "Computer Networks Concepts — TCP/UDP, DNS, TLS 1.3, CIDR | PrepSpaces",
    description:
      "Explore practical computer networking topics: TCP vs UDP & QUIC, recursive DNS resolution, HTTP vs HTTPS TLS 1.3 handshakes, OSI vs TCP/IP layers, and CIDR subnetting.",
    keywords: "Computer networks concepts, TCP vs UDP, DNS resolution, HTTPS TLS 1.3, OSI model, CIDR subnetting",
    overview:
      "Trace every hop across physical cables, Ethernet switching, IPv4 CIDR subnets, transport congestion windows, and encrypted application protocols.",
    companionCourse: { title: "Computer Networks Masterclass (24 Modules)", route: "/learning/networks" },
  },
  {
    id: "cybersecurity",
    route: "/concepts/cybersecurity",
    title: "Cybersecurity Concepts",
    shortTitle: "Cybersecurity",
    metaTitle: "Cybersecurity Concepts — SQLi, XSS, JWT/OAuth2, STRIDE | PrepSpaces",
    description:
      "Learn offensive and defensive cybersecurity concepts: SQL Injection, Cross-Site Scripting (XSS), JWT & OAuth 2.0 PKCE security, STRIDE threat modeling, and CSRF vs SSRF.",
    keywords: "Cybersecurity concepts, SQL injection, XSS defense, JWT OAuth 2.0 security, STRIDE threat modeling, CSRF SSRF",
    overview:
      "Understand root-cause exploitation mechanics paired directly with parameterized queries, CSP, token signing hygiene, and zero-trust architecture.",
    companionCourse: { title: "Cybersecurity Masterclass (24 Modules)", route: "/learning/cybersecurity" },
  },
  {
    id: "ai",
    route: "/concepts/ai",
    title: "AI Engineering & LLM Concepts",
    shortTitle: "AI Engineering",
    metaTitle: "AI Engineering Concepts — RAG, Transformers, LoRA, KV Cache | PrepSpaces",
    description:
      "Technical AI & LLM systems lessons: Retrieval-Augmented Generation (RAG), Transformer Self-Attention, LoRA/QLoRA fine-tuning, Vector HNSW search, and KV Cache PagedAttention.",
    keywords: "AI engineering concepts, RAG architecture, Transformer self-attention, LoRA QLoRA, HNSW embeddings, KV cache",
    overview:
      "Bridge deep learning attention math directly to production retrieval, vector search, efficient fine-tuning, and low-latency GPU serving.",
    companionCourse: { title: "AI Engineering & Generative AI Course (24 Modules)", route: "/learning/ai" },
  },
  {
    id: "cloud",
    route: "/concepts/cloud",
    title: "Cloud Computing Concepts",
    shortTitle: "Cloud",
    metaTitle: "Cloud Computing Concepts — VPC, IAM, S3 vs EBS, Multi-Region | PrepSpaces",
    description:
      "Master cloud infrastructure concepts: VPC public/private subnets & NAT, IAM least-privilege policies, serverless cold starts, Object vs Block vs File storage, and RTO/RPO.",
    keywords: "Cloud computing concepts, VPC networking, IAM least privilege, serverless cold starts, S3 EBS EFS, RTO RPO",
    overview:
      "Architect isolated private cloud networks, least-privilege IAM roles, serverless V8/Firecracker runtimes, storage tiers, and disaster recovery topologies.",
    companionCourse: { title: "Cloud Computing Track (13 Modules)", route: "/learning/cloud" },
  },
  {
    id: "devops",
    route: "/concepts/devops",
    title: "DevOps & SRE Concepts",
    shortTitle: "DevOps & SRE",
    metaTitle: "DevOps & SRE Concepts — Docker, Kubernetes, Terraform, SLOs | PrepSpaces",
    description:
      "Learn production DevOps & Site Reliability concepts: Docker containers vs VMs, Kubernetes probes & Pod lifecycle, Blue-Green vs Canary rollouts, Terraform state locking, and SLIs/SLOs.",
    keywords: "DevOps concepts, Docker vs VM, Kubernetes probes, Blue-Green Canary, Terraform state locking, SLI SLO SLA",
    overview:
      "Connect kernel namespaces and container orchestration cleanly with declarative IaC state safety, progressive delivery, and error-budget engineering.",
    companionCourse: { title: "DevOps & SRE Track (12 Modules)", route: "/learning/devops/linux" },
  },
  {
    id: "system-design",
    route: "/concepts/system-design",
    title: "System Design Concepts",
    shortTitle: "System Design",
    metaTitle: "System Design Concepts — Consistent Hashing, CAP, Raft, Caching | PrepSpaces",
    description:
      "Core distributed architecture concepts: Consistent Hashing & Virtual Nodes, CAP & PACELC theorems, Rate Limiting algorithms, Cache-Aside vs Write-Through, and Raft Consensus.",
    keywords: "System design concepts, consistent hashing, CAP PACELC theorem, token bucket rate limiting, cache aside, Raft consensus",
    overview:
      "Internalize horizontal partitioning, replication quorums, distributed consensus, caching stampede protection, and traffic shaping for scale.",
    companionCourse: { title: "System Design Masterclass (24 Modules)", route: "/learning/system-design" },
  },
];

export const ALL_CONCEPTS = [
  ...CONCEPTS_JAVA_OS,
  ...CONCEPTS_NET_SEC,
  ...CONCEPTS_AI_CLOUD,
  ...CONCEPTS_DEVOPS_SYSDESIGN,
].map((c) => ({
  ...c,
  route: `/concepts/${c.category}/${c.slug}`,
}));

export function getConceptCategory(categoryId) {
  return CONCEPT_CATEGORIES.find((cat) => cat.id === categoryId) || null;
}

export function getConceptsByCategory(categoryId) {
  return ALL_CONCEPTS.filter((c) => c.category === categoryId);
}

export function getConceptByPath(categoryId, slug) {
  return ALL_CONCEPTS.find((c) => c.category === categoryId && c.slug === slug) || null;
}

export function resolveRelatedConcepts(concept) {
  if (!concept?.relatedConcepts?.length) return [];
  return concept.relatedConcepts
    .map((route) => ALL_CONCEPTS.find((c) => c.route === route))
    .filter(Boolean);
}
