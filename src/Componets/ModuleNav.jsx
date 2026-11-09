import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { getCourseModules, getSynchronousCachedCourseModules } from "../services/courseContentService";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  LogOut,
  User,
  Lock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  X,
} from "lucide-react";
import { getLocalProgress, PROGRESS_UPDATED_EVENT } from "../services/progressService";
import {
  getCourseAccess,
  getCachedCourseAccess,
  completeModule,
  autoCompleteModule,
  UNLOCK_UPDATED_EVENT,
} from "../services/unlockingService";
import { useSafeBack } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

export const CLOUD_MODULES = [
  { id: "cloud", name: "Foundations", route: "/learning/cloud" },
  { id: "networking", name: "Networking", route: "/learning/cloud/networking" },
  { id: "compute", name: "Compute", route: "/learning/cloud/compute" },
  { id: "storage", name: "Storage", route: "/learning/cloud/storage" },
  { id: "databases", name: "Databases", route: "/learning/cloud/databases" },
  { id: "architecture", name: "Architecture", route: "/learning/cloud/architecture" },
  { id: "aws", name: "AWS", route: "/learning/cloud/aws" },
  { id: "azure", name: "Azure", route: "/learning/cloud/azure" },
  { id: "gcp", name: "Google Cloud", route: "/learning/cloud/gcp" },
  { id: "multicloud", name: "Multi-Cloud", route: "/learning/cloud/multicloud" },
  { id: "security", name: "Security", route: "/learning/cloud/security" },
  { id: "economics", name: "Economics", route: "/learning/cloud/economics" },
  { id: "advanced", name: "Advanced Systems", route: "/learning/cloud/advanced" },
];

export const DEVOPS_MODULES = [
  { id: "linux", name: "Linux Administration", route: "/learning/devops/linux" },
  { id: "git", name: "Git & Workflows", route: "/learning/devops/git" },
  { id: "docker", name: "Docker & Containers", route: "/learning/devops/docker" },
  { id: "k8s", name: "Kubernetes", route: "/learning/devops/k8s" },
  { id: "iac", name: "Terraform IaC", route: "/learning/devops/iac" },
  { id: "cicd", name: "CI/CD & GitOps", route: "/learning/devops/cicd" },
  { id: "deployment", name: "Deployment Strategies", route: "/learning/devops/deployment" },
  { id: "sre", name: "Site Reliability (SRE)", route: "/learning/devops/sre" },
  { id: "reliability", name: "Production Reliability", route: "/learning/devops/reliability" },
  { id: "secops", name: "DevSecOps", route: "/learning/devops/secops" },
  { id: "platform", name: "Platform Engineering", route: "/learning/devops/platform" },
  { id: "capstone", name: "Capstone Project", route: "/learning/devops/capstone" },
];

export const SYSTEM_DESIGN_MODULES = [
  { id: "intro", name: "1. Architectural Thinking", route: "/learning/system-design" },
  { id: "requirements", name: "2. Requirements & Capacity", route: "/learning/system-design/requirements" },
  { id: "networking", name: "3. APIs & Networking", route: "/learning/system-design/networking" },
  { id: "architecture", name: "4. Monoliths & Services", route: "/learning/system-design/architecture" },
  { id: "databases", name: "5. Databases & Indexing", route: "/learning/system-design/databases" },
  { id: "caching", name: "6. Caching & Invalidation", route: "/learning/system-design/caching" },
  { id: "replication", name: "7. Replication & Sharding", route: "/learning/system-design/replication" },
  { id: "storage", name: "8. Object Storage & Data Pipelines", route: "/learning/system-design/storage" },
  { id: "distributed-systems", name: "9. Distributed Systems & Time", route: "/learning/system-design/distributed-systems" },
  { id: "consistency", name: "10. Consistency & Quorums", route: "/learning/system-design/consistency" },
  { id: "consensus", name: "11. Consensus & Coordination", route: "/learning/system-design/consensus" },
  { id: "messaging", name: "12. Message Queues & Streaming", route: "/learning/system-design/messaging" },
  { id: "transactions", name: "13. Distributed Transactions & Sagas", route: "/learning/system-design/transactions" },
  { id: "traffic", name: "14. Load Balancing & Traffic Control", route: "/learning/system-design/traffic" },
  { id: "scalability", name: "15. Scalability & Performance Modeling", route: "/learning/system-design/scalability" },
  { id: "multi-region", name: "16. Multi-Region & Disaster Recovery", route: "/learning/system-design/multi-region" },
  { id: "reliability", name: "17. Reliability & Observability", route: "/learning/system-design/reliability" },
  { id: "security", name: "18. Security & Multi-Tenancy", route: "/learning/system-design/security" },
  { id: "realtime", name: "19. Real-Time Systems & WebSockets", route: "/learning/system-design/realtime" },
  { id: "search", name: "20. Search, Feeds & Recommendations", route: "/learning/system-design/search" },
  { id: "ai-systems", name: "21. AI Systems & Inference Serving", route: "/learning/system-design/ai-systems" },
  { id: "case-studies", name: "22. System Design Case Studies", route: "/learning/system-design/case-studies" },
  { id: "advanced-case-studies", name: "23. Advanced Case Studies", route: "/learning/system-design/advanced-case-studies" },
  { id: "capstone", name: "24. Final Capstone Project", route: "/learning/system-design/capstone" },
];

export const OS_MODULES = [
  { id: "intro", name: "1. Intro & Systems Thinking", route: "/learning/os" },
  { id: "architecture", name: "2. Computer Architecture", route: "/learning/os/architecture" },
  { id: "systems-programming", name: "3. C & Systems Programming", route: "/learning/os/systems-programming" },
  { id: "syscalls", name: "4. Syscalls & Program Execution", route: "/learning/os/syscalls" },
  { id: "processes", name: "5. Processes & Lifecycle", route: "/learning/os/processes" },
  { id: "scheduling", name: "6. CPU Scheduling", route: "/learning/os/scheduling" },
  { id: "threads", name: "7. Threads & Multithreading", route: "/learning/os/threads" },
  { id: "concurrency", name: "8. Synchronization & Deadlocks", route: "/learning/os/concurrency" },
  { id: "memory", name: "9. Memory Hierarchy & Allocation", route: "/learning/os/memory" },
  { id: "virtual-memory", name: "10. Virtual Memory & Paging", route: "/learning/os/virtual-memory" },
  { id: "demand-paging", name: "11. Demand Paging & Replacement", route: "/learning/os/demand-paging" },
  { id: "virtualization", name: "12. Advanced Memory, VMs & Containers", route: "/learning/os/virtualization" },
  { id: "filesystems", name: "13. Filesystems & Storage Architecture", route: "/learning/os/filesystems" },
  { id: "storage", name: "14. Storage Architecture & I/O", route: "/learning/os/storage" },
  { id: "ipc", name: "15. IPC, Pipes & Shared Memory", route: "/learning/os/ipc" },
  { id: "crash-consistency", name: "16. Crash Consistency & Durability", route: "/learning/os/crash-consistency" },
  { id: "kernel-architecture", name: "17. Kernel Architecture & xv6", route: "/learning/os/kernel-architecture" },
  { id: "diagnostics", name: "18. Linux Internals & Diagnostics", route: "/learning/os/diagnostics" },
  { id: "networking", name: "19. OS Networking & Network I/O", route: "/learning/os/networking" },
  { id: "security", name: "20. OS Security, Isolation & Reliability", route: "/learning/os/security" },
  { id: "advanced-sync", name: "21. Advanced Synchronization & Multiprocessor", route: "/learning/os/advanced-sync" },
  { id: "testing", name: "22. OS Design, Testing & Failure Analysis", route: "/learning/os/testing" },
  { id: "capstone", name: "23. Capstone: Build an OS Component (xv6)", route: "/learning/os/capstone" },
  { id: "final-capstone", name: "24. Final Capstone: OS Engineering Lab", route: "/learning/os/final-capstone" },
];

export const NETWORKS_MODULES = [
  { id: "intro", name: "1. Intro & Fundamentals", route: "/learning/networks" },
  { id: "models", name: "2. Network Models (OSI & TCP/IP)", route: "/learning/networks/models" },
  { id: "physical", name: "3. Physical Layer & Transmission", route: "/learning/networks/physical" },
  { id: "datalink", name: "4. Data Link Layer & Ethernet", route: "/learning/networks/datalink" },
  { id: "ipv4", name: "5. IPv4 Addressing & Subnetting", route: "/learning/networks/ipv4" },
  { id: "ipv6", name: "6. IPv6 & Modern Addressing", route: "/learning/networks/ipv6" },
  { id: "routing", name: "7. Routing & Router Architecture", route: "/learning/networks/routing" },
  { id: "config", name: "8. ICMP, ARP, DHCP & Host Config", route: "/learning/networks/config" },
  { id: "tcp", name: "9. TCP — Reliable Transport", route: "/learning/networks/tcp" },
  { id: "udp", name: "10. UDP, QUIC & Modern Transport", route: "/learning/networks/udp" },
  { id: "dns", name: "11. DNS & Internet Naming", route: "/learning/networks/dns" },
  { id: "applayer", name: "12. Application Protocols & Web", route: "/learning/networks/application-layer" },
  { id: "wireless", name: "13. Wireless, Wi-Fi & Mobile", route: "/learning/networks/wireless" },
  { id: "switching", name: "14. Switching, VLANs & LAN Design", route: "/learning/networks/switching" },
  { id: "firewalls", name: "15. Firewalls & Access Control", route: "/learning/networks/firewalls" },
  { id: "enterprise-cloud", name: "16. Enterprise, Data Center & Cloud", route: "/learning/networks/enterprise-cloud" },
  { id: "threat-modeling", name: "17. Security & Threat Modeling", route: "/learning/networks/threat-modeling" },
  { id: "packet-analysis", name: "18. Packet Analysis & Recon", route: "/learning/networks/packet-analysis" },
  { id: "attacks", name: "19. Attacks & Countermeasures", route: "/learning/networks/attacks-defenses" },
  { id: "ids-ips-soc", name: "20. IDS/IPS & SOC Monitoring", route: "/learning/networks/ids-ips-soc" },
  { id: "network-automation", name: "21. Network Programming & Automation", route: "/learning/networks/network-automation" },
  { id: "advanced-routing", name: "22. Advanced Routing & Troubleshooting", route: "/learning/networks/advanced-routing" },
  { id: "security-architecture", name: "23. Modern Network Security Architecture", route: "/learning/networks/security-architecture" },
  { id: "final-capstone", name: "24. Final Capstone: Network Engineering Lab", route: "/learning/networks/final-capstone" },
];

export const AI_MODULES = [
  { id: "foundations", name: "1. AI Foundations & Python for AI", route: "/learning/ai" },
  { id: "math-for-ai", name: "2. Mathematics for AI & Machine Learning", route: "/learning/ai/math" },
  { id: "machine-learning", name: "3. Machine Learning Fundamentals", route: "/learning/ai/machine-learning" },
  { id: "deep-learning", name: "4. Deep Learning & Neural Network Engineering", route: "/learning/ai/deep-learning" },
  { id: "nlp", name: "5. Natural Language Processing (NLP) Engineering", route: "/learning/ai/nlp" },
  { id: "transformers", name: "6. Transformer Architecture from Scratch", route: "/learning/ai/transformers" },
  { id: "llms", name: "7. Large Language Models: GPT, Llama & Qwen", route: "/learning/ai/llms" },
  { id: "fine-tuning", name: "8. LLM Training & Fine-Tuning Foundations", route: "/learning/ai/fine-tuning" },
  { id: "prompt-engineering", name: "9. Prompt Engineering & Structured LLM Outputs", route: "/learning/ai/prompt-engineering" },
  { id: "vector-databases", name: "10. Embeddings, Vector Databases & Semantic Search", route: "/learning/ai/vector-databases" },
  { id: "rag-architecture", name: "11. Retrieval-Augmented Generation (RAG) Engineering", route: "/learning/ai/rag-architecture" },
  { id: "multimodal-ai", name: "12. Multimodal Generative AI (Vision & Audio)", route: "/learning/ai/multimodal-ai" },
  { id: "ai-agents", name: "13. AI Agents & Tool-Calling Systems", route: "/learning/ai/ai-agents" },
  { id: "multi-agent-systems", name: "14. Multi-Agent AI Systems & Orchestration", route: "/learning/ai/multi-agent-systems" },
  { id: "graph-rag", name: "15. Advanced RAG & Knowledge Engineering", route: "/learning/ai/graph-rag" },
  { id: "llm-evaluation", name: "16. AI Evaluation, Alignment & Safety Engineering", route: "/learning/ai/llm-evaluation" },
  { id: "inference-serving", name: "17. LLM Inference & Model Serving Engineering", route: "/learning/ai/inference-serving" },
  { id: "ai-backend-engineering", name: "18. AI Backend Engineering & API Development", route: "/learning/ai/backend-engineering" },
  { id: "mlops-deployment", name: "19. AI MLOps, Deployment & CI/CD", route: "/learning/ai/mlops-deployment" },
  { id: "scalability-optimization", name: "20. AI Scalability, Optimization & Observability", route: "/learning/ai/scalability-optimization" },
  { id: "fine-tuning-domain", name: "21. Fine-Tuning LLMs for Domain-Specific Applications", route: "/learning/ai/fine-tuning-domain" },
  { id: "scratch-slm", name: "22. Building Small Language Models from Scratch", route: "/learning/ai/scratch-slm" },
  { id: "ai-system-design", name: "23. AI System Design & Real-World Architecture", route: "/learning/ai/system-design" },
  { id: "final-capstone", name: "24. Final AI Engineering Capstone", route: "/learning/ai/final-capstone" },
];

export const CYBERSECURITY_MODULES = [
  { id: "intro", name: "1. Intro & Ethical Hacking", route: "/learning/cybersecurity" },
  { id: "networking", name: "2. Networking for Cyber", route: "/learning/cybersecurity/networking" },
  { id: "systems", name: "3. OS Internals & Hardening", route: "/learning/cybersecurity/systems" },
  { id: "threat-modeling", name: "4. Threat Modeling & Risk", route: "/learning/cybersecurity/threat-modeling" },
  { id: "methodology", name: "5. Methodology, Scope & RoE", route: "/learning/cybersecurity/methodology" },
  { id: "osint", name: "6. OSINT & Passive Recon", route: "/learning/cybersecurity/osint" },
  { id: "recon", name: "7. Active Recon & Enumeration", route: "/learning/cybersecurity/recon" },
  { id: "vulnerability-assessment", name: "8. Vulnerability Assessment & CVSS", route: "/learning/cybersecurity/vulnerability-assessment" },
  { id: "network-security", name: "9. Network Security & Firewalls", route: "/learning/cybersecurity/network-security" },
  { id: "os-security", name: "10. OS Security & Hardening", route: "/learning/cybersecurity/os-security" },
  { id: "iam", name: "11. Identity & Access Management", route: "/learning/cybersecurity/iam" },
  { id: "cryptography", name: "12. Cryptography, PKI & TLS", route: "/learning/cybersecurity/cryptography" },
  { id: "web-security", name: "13. Web Architecture, Sessions & Browser Security", route: "/learning/cybersecurity/web-security" },
  { id: "owasp-top-10", name: "14. OWASP Top 10 & Injection Prevention", route: "/learning/cybersecurity/owasp-top-10" },
  { id: "auth-api-security", name: "15. Auth Flaws, Access Control & API Security", route: "/learning/cybersecurity/auth-api-security" },
  { id: "secure-code-review", name: "16. Secure Code Review & Testing", route: "/learning/cybersecurity/secure-code-review" },
  { id: "wireless-security", name: "17. Wireless Security & Wi-Fi Defense", route: "/learning/cybersecurity/wireless-security" },
  { id: "cloud-security", name: "18. Cloud Security, Containers & IAM", route: "/learning/cybersecurity/cloud-security" },
  { id: "malware-analysis", name: "19. Malware Analysis & Ransomware Defense", route: "/learning/cybersecurity/malware-analysis" },
  { id: "soc-siem", name: "20. Security Monitoring, SIEM & Forensics", route: "/learning/cybersecurity/soc-siem" },
  { id: "pentest-planning", name: "21. Pentest Planning, RoE & Evidence", route: "/learning/cybersecurity/pentest-planning" },
  { id: "red-blue-purple-teams", name: "22. Red, Blue & Purple Team Ops", route: "/learning/cybersecurity/red-blue-purple-teams" },
  { id: "pentest-reports", name: "23. Pentest Reports, CVSS v4 & Retesting", route: "/learning/cybersecurity/pentest-reports" },
  { id: "final-capstone", name: "24. Final Capstone: Security Assessment & Defense", route: "/learning/cybersecurity/final-capstone" },
];

export const DATA_ENGINEERING_MODULES = [
  { id: "intro", name: "1. Intro to Data Engineering & Data Systems", route: "/learning/data-engineering" },
  { id: "python", name: "2. Python Programming for Data Engineering", route: "/learning/data-engineering/python" },
  { id: "sql", name: "3. Advanced SQL & Relational Databases", route: "/learning/data-engineering/sql" },
  { id: "data-modeling", name: "4. Data Modeling & Database Design", route: "/learning/data-engineering/data-modeling" },
  { id: "internals", name: "5. Database Internals & Performance", route: "/learning/data-engineering/internals" },
  { id: "data-formats", name: "6. Data Formats, Serialization & Integration", route: "/learning/data-engineering/data-formats" },
  { id: "data-warehousing", name: "7. Data Warehousing & Analytical Systems", route: "/learning/data-engineering/data-warehousing" },
  { id: "lakehouse", name: "8. Data Lakes & Lakehouse Architecture", route: "/learning/data-engineering/lakehouse" },
  { id: "ingestion-cdc", name: "9. Data Ingestion & Change Data Capture (CDC)", route: "/learning/data-engineering/ingestion-cdc" },
  { id: "etl-batch", name: "10. ETL, ELT & Batch Data Processing", route: "/learning/data-engineering/etl-batch" },
  { id: "spark-processing", name: "11. Distributed Data Processing (Apache Spark)", route: "/learning/data-engineering/spark-processing" },
  { id: "airflow-orchestration", name: "12. Workflow Orchestration (Apache Airflow)", route: "/learning/data-engineering/airflow-orchestration" },
  { id: "analytics-engineering-dbt", name: "13. Analytics Engineering & dbt", route: "/learning/data-engineering/analytics-engineering-dbt" },
  { id: "data-quality-lineage", name: "14. Data Quality, Testing, Metadata & Lineage", route: "/learning/data-engineering/data-quality-lineage" },
  { id: "distributed-systems", name: "15. Distributed Systems for Data Engineers", route: "/learning/data-engineering/distributed-systems" },
  { id: "kafka-event-driven", name: "16. Event-Driven Architecture & Apache Kafka", route: "/learning/data-engineering/kafka-event-driven" },
  { id: "stream-processing", name: "17. Stream Processing & Real-Time Analytics", route: "/learning/data-engineering/stream-processing" },
];

export const BLOCKCHAIN_MODULES = [
  { id: "intro", name: "1. Intro to Blockchain Technology", route: "/learning/blockchain" },
  { id: "cryptography", name: "2. Cryptography Fundamentals", route: "/learning/blockchain/cryptography" },
  { id: "consensus", name: "3. Distributed Systems & Consensus", route: "/learning/blockchain/consensus" },
  { id: "bitcoin-utxo", name: "4. Bitcoin Mechanics & UTXO", route: "/learning/blockchain/bitcoin-utxo" },
  { id: "ethereum-evm", name: "5. Ethereum Architecture & Ecosystem", route: "/learning/blockchain/ethereum-evm" },
  { id: "evm-internals", name: "6. Ethereum Virtual Machine (EVM)", route: "/learning/blockchain/evm-internals" },
  { id: "solidity", name: "7. Solidity Smart Contract Development", route: "/learning/blockchain/solidity" },
  { id: "advanced-solidity", name: "8. Advanced Solidity & Design", route: "/learning/blockchain/advanced-solidity" },
  { id: "contract-architecture", name: "9. DApp Architecture & Escrow", route: "/learning/blockchain/architecture" },
  { id: "testing", name: "10. Smart Contract Testing (Foundry & Hardhat)", route: "/learning/blockchain/testing" },
  { id: "wallets-keys", name: "11. Wallets, Keys & Transaction Signing", route: "/learning/blockchain/wallets-keys" },
  { id: "tokens", name: "12. ERC Token Standards (ERC-20, 721, 1155)", route: "/learning/blockchain/tokens" },
  { id: "web3-libraries", name: "13. Web3.js, Ethers.js & Viem", route: "/learning/blockchain/web3-libraries" },
  { id: "dapp-development", name: "14. Full-Stack DApp Development", route: "/learning/blockchain/dapp-development" },
  { id: "ipfs-storage", name: "15. IPFS & Decentralized Storage", route: "/learning/blockchain/ipfs-storage" },
  { id: "defi-protocols", name: "16. Decentralized Finance (DeFi) Protocol Architecture", route: "/learning/blockchain/defi-protocols" },
  { id: "dex-lending", name: "17. Decentralized Exchanges & Lending Protocols", route: "/learning/blockchain/dex-lending" },
  { id: "security-auditing", name: "18. Blockchain Security & Smart Contract Auditing", route: "/learning/blockchain/security-auditing" },
  { id: "layer-2-scaling", name: "19. Layer 2 & Blockchain Scaling", route: "/learning/blockchain/layer-2-scaling" },
  { id: "oracles-chainlink", name: "20. Oracles & Chainlink", route: "/learning/blockchain/oracles-chainlink" },
  { id: "daos-governance", name: "21. DAOs & Blockchain Governance", route: "/learning/blockchain/daos-governance" },
  { id: "hyperledger-fabric", name: "22. Hyperledger Fabric & Enterprise Blockchain", route: "/learning/blockchain/hyperledger-fabric" },
  { id: "solana-rust", name: "23. Solana Development with Rust", route: "/learning/blockchain/solana-rust" },
  { id: "final-capstone", name: "24. Final Blockchain Capstone Project", route: "/learning/blockchain/final-capstone" },
];

export default function ModuleNav({
  track: propTrack,
  trackId,
  course,
  currentModuleId: propCurrentModuleId,
  activeModuleId,
  showAiTutor,
  onAiTutorToggle,
  aiTutorLabel,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const scrollRef = useRef(null);

  const rawTrack = propTrack || trackId || course;

  // Auto-detect track if omitted, defaulted to "cloud", or passed as trackId/course
  const track = useMemo(() => {
    if (rawTrack && rawTrack !== "cloud") {
      if (rawTrack === "ai-engineering" || rawTrack === "ai") return "ai";
      if (rawTrack === "operating-systems" || rawTrack === "os") return "os";
      if (rawTrack === "computer-networks" || rawTrack === "networks") return "networks";
      if (rawTrack === "cybersecurity") return "cybersecurity";
      if (rawTrack === "system-design") return "system-design";
      if (rawTrack === "devops") return "devops";
      if (rawTrack === "blockchain") return "blockchain";
      if (rawTrack === "data-engineering") return "data-engineering";
      return rawTrack;
    }
    const path = (location?.pathname || "").toLowerCase();
    if (path.includes("/learning/data-engineering") || path.includes("/learn/data-engineering") || path.includes("/courses/data-engineering")) return "data-engineering";
    if (path.includes("/learning/ai") || path.includes("/learn/ai")) return "ai";
    if (path.includes("/learning/os") || path.includes("/learn/os")) return "os";
    if (path.includes("/learning/networks") || path.includes("/learn/networks")) return "networks";
    if (path.includes("/learning/cybersecurity") || path.includes("/learn/cybersecurity")) return "cybersecurity";
    if (path.includes("/learning/system-design") || path.includes("/learn/system-design")) return "system-design";
    if (path.includes("/learning/devops") || path.includes("/learn/devops")) return "devops";
    if (path.includes("/learning/blockchain") || path.includes("/learn/blockchain")) return "blockchain";
    if (path.includes("/learning/cloud") || path.includes("/learn/cloud")) return "cloud";
    return rawTrack || "cloud";
  }, [rawTrack, location?.pathname]);

  const courseIdMap = {
    os: "operating-systems",
    networks: "computer-networks",
    cybersecurity: "cybersecurity",
    "system-design": "system-design",
    cloud: "cloud",
    devops: "devops",
    ai: "ai-engineering",
    "ai-engineering": "ai-engineering",
    blockchain: "blockchain",
    "data-engineering": "data-engineering",
  };
  const resolvedCourseId = courseIdMap[track] || track;

  const getModulesForTrack = useCallback((t) => {
    switch (t) {
      case "devops":
        return DEVOPS_MODULES;
      case "system-design":
        return SYSTEM_DESIGN_MODULES;
      case "os":
        return OS_MODULES;
      case "networks":
        return NETWORKS_MODULES;
      case "cybersecurity":
        return CYBERSECURITY_MODULES;
      case "ai":
      case "ai-engineering":
        return AI_MODULES;
      case "blockchain":
        return BLOCKCHAIN_MODULES;
      case "data-engineering":
        return DATA_ENGINEERING_MODULES;
      default:
        return CLOUD_MODULES;
    }
  }, []);

  const [modules, setModules] = useState(() => {
    const cached = getSynchronousCachedCourseModules(resolvedCourseId);
    return (Array.isArray(cached) && cached.length > 0) ? cached : getModulesForTrack(track);
  });

  // Keep modules synchronized with track changes
  useEffect(() => {
    const cached = getSynchronousCachedCourseModules(resolvedCourseId);
    if (Array.isArray(cached) && cached.length > 0) {
      setModules(cached);
    } else {
      setModules(getModulesForTrack(track));
    }
  }, [track, resolvedCourseId, getModulesForTrack]);

  const explicitModuleId = propCurrentModuleId || activeModuleId;
  const currentModuleId = useMemo(() => {
    if (explicitModuleId) return explicitModuleId;
    const currentPath = (location?.pathname || "").toLowerCase().replace(/\/+$/, "");
    const found = modules.find((m) => {
      const routePath = (m.route || "").toLowerCase().replace(/\/+$/, "");
      return routePath === currentPath || currentPath.endsWith("/" + m.id);
    });
    return found ? found.id : (modules[0]?.id || "foundations");
  }, [explicitModuleId, location?.pathname, modules]);

  const [accessState, setAccessState] = useState(() => getCachedCourseAccess(resolvedCourseId));
  const [completedModuleIds, setCompletedModuleIds] = useState(() => {
    const cached = getCachedCourseAccess(resolvedCourseId);
    return cached?.completedModuleIds || [];
  });
  const [advancing, setAdvancing] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Load authoritative access from backend
  const loadAccess = useCallback(async () => {
    const data = await getCourseAccess(resolvedCourseId);
    if (data) {
      setAccessState(data);
      if (Array.isArray(data.completedModuleIds)) {
        setCompletedModuleIds(data.completedModuleIds);
      }
    }
  }, [resolvedCourseId]);

  useEffect(() => {
    loadAccess();

    const handleUnlock = (e) => {
      if (!e.detail?.courseId || e.detail.courseId === resolvedCourseId) {
        if (e.detail?.data) {
          setAccessState(e.detail.data);
          if (Array.isArray(e.detail.data.completedModuleIds)) {
            setCompletedModuleIds(e.detail.data.completedModuleIds);
          }
        } else {
          loadAccess();
        }
      }
    };

    window.addEventListener(UNLOCK_UPDATED_EVENT, handleUnlock);
    window.addEventListener(PROGRESS_UPDATED_EVENT, loadAccess);
    return () => {
      window.removeEventListener(UNLOCK_UPDATED_EVENT, handleUnlock);
      window.removeEventListener(PROGRESS_UPDATED_EVENT, loadAccess);
    };
  }, [resolvedCourseId, loadAccess]);

  useEffect(() => {
    let isMounted = true;
    const cached = getSynchronousCachedCourseModules(resolvedCourseId);
    if (cached && cached.length > 0) {
      setModules(cached);
    } else {
      getCourseModules(resolvedCourseId).then((data) => {
        if (isMounted && data && Array.isArray(data) && data.length > 0) {
          setModules(data);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [resolvedCourseId]);

  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector("[data-active='true']");
      if (activeBtn) {
        const timer = setTimeout(() => {
          activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }, 60);
        return () => clearTimeout(timer);
      }
    }
  }, [currentModuleId, modules]);

  // Automatic engagement completion:
  // When an authenticated student (or guest on free modules) visits an unlocked module,
  // automatically record completion as they explore lessons/content so the next module opens.
  useEffect(() => {
    if (!currentModuleId || !resolvedCourseId) return;

    // Skip if already recorded as completed
    if (completedModuleIds.includes(currentModuleId)) return;

    // Only auto-complete if current module is unlocked
    const modIndex = modules.findIndex((m) => m.id === currentModuleId);
    const isUnlockedNow =
      modIndex < 6 ||
      (isAuthenticated &&
        (modIndex === 6 || (modIndex > 0 && completedModuleIds.includes(modules[modIndex - 1]?.id))));
    if (!isUnlockedNow) return;

    let completed = false;
    const triggerComplete = () => {
      if (completed) return;
      completed = true;
      autoCompleteModule(resolvedCourseId, currentModuleId);
    };

    // 1. Timer: after 2.5 seconds on the page
    const timer = setTimeout(triggerComplete, 2500);

    // 2. Interaction: scroll or click anywhere on the page
    const onInteraction = () => {
      triggerComplete();
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
    };

    window.addEventListener("scroll", onInteraction, { passive: true });
    window.addEventListener("click", onInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
    };
  }, [currentModuleId, resolvedCourseId, modules, isAuthenticated, completedModuleIds]);

  const defaultFallback =
    currentModuleId === (track === "devops" ? "linux" : track === "system-design" ? "intro" : track === "os" ? "intro" : track === "networks" ? "intro" : track === "cybersecurity" ? "intro" : track === "blockchain" ? "intro" : track === "ai" || track === "ai-engineering" ? "foundations" : "cloud")
      ? "/learning"
      : track === "devops"
      ? "/learning/devops/linux"
      : track === "system-design"
      ? "/learning/system-design"
      : track === "os"
      ? "/learning/os"
      : track === "networks"
      ? "/learning/networks"
      : track === "cybersecurity"
      ? "/learning/cybersecurity"
      : track === "blockchain"
      ? "/learning/blockchain"
      : track === "ai" || track === "ai-engineering"
      ? "/learning/ai"
      : "/learning/cloud";

  const { goBack } = useSafeBack(defaultFallback);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollStep = Math.max(scrollRef.current.clientWidth * 0.75, 300);
      const offset = direction === "left" ? -scrollStep : scrollStep;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // 1. Authoritative access check for current module
  const currentIdx = modules.findIndex((m) => m.id === currentModuleId);
  const isCurrentFirstSix = currentIdx >= 0 && currentIdx < 6;
  const isCurrentModuleSeven = currentIdx === 6;
  const currentPrevModId = currentIdx > 0 ? modules[currentIdx - 1]?.id : null;
  const currentPrevCompleted = currentPrevModId ? completedModuleIds.includes(currentPrevModId) : false;

  const currentModAccess = accessState?.modules?.find((m) => m.id === currentModuleId);
  const isCurrentUnlocked = currentModAccess
    ? currentModAccess.isUnlocked
    : (isCurrentFirstSix || (isAuthenticated && (isCurrentModuleSeven || currentPrevCompleted)));
  const isCurrentAuthRequired = currentModAccess
    ? Boolean(currentModAccess?.requiresAuth)
    : (!isCurrentFirstSix && !isAuthenticated);
  const currentIsCompleted = completedModuleIds.includes(currentModuleId);

  // Find next module in sequence
  const nextMod = currentIdx >= 0 && currentIdx + 1 < modules.length ? modules[currentIdx + 1] : null;
  const currentOrder = currentIdx >= 0 ? currentIdx + 1 : 1;

  // Handler to complete current module and advance
  const handleAdvance = async () => {
    if (advancing) return;
    setAdvancing(true);

    try {
      const res = await completeModule(resolvedCourseId, currentModuleId);

      if (res.promptAuthNow || res.requiresAuth) {
        setShowAuthModal(true);
      } else if (res.nextUnlockedModule) {
        const targetMod = modules.find((m) => m.id === res.nextUnlockedModule);
        if (targetMod && targetMod.route) {
          navigate(targetMod.route);
        } else if (nextMod && nextMod.route) {
          navigate(nextMod.route);
        }
      } else if (nextMod && nextMod.route) {
        navigate(nextMod.route);
      }
    } finally {
      setAdvancing(false);
    }
  };

  // =========================================================================
  // NORMAL RENDER (ALL MODULES ARE UNRESTRICTED & ACCESSIBLE)
  // =========================================================================
  return (
    <div className="w-full max-w-6xl mx-auto mb-4 sm:mb-8 flex flex-col gap-2.5 sm:gap-3 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-6">
      {/* Top Breadcrumb & User Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 border-b border-[#e7e3da] pb-3 sm:pb-4">
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => goBack(defaultFallback)}
            className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white/90 px-3.5 py-2 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs backdrop-blur-md active:scale-95 cursor-pointer shrink-0"
            title="Go back to previous page"
            aria-label="Go back"
          >
            <ArrowLeft size={15} />
            <span>Back</span>
          </button>

          <span className="hidden sm:inline text-stone-300 select-none">/</span>

          <button
            type="button"
            onClick={() => navigate("/learning")}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-2 py-1.5 text-xs font-semibold text-stone-500 hover:text-[#f97316] transition cursor-pointer shrink-0"
            title="Jump to Curriculum Overview"
          >
            <span>Curriculum Overview</span>
          </button>
        </div>

        {/* Right Header Status / Brand or User Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {isAuthenticated ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                to="/dashboard"
                className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white/90 px-2.5 py-1.5 sm:py-2 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-2xs backdrop-blur-md cursor-pointer"
                title="Go to Dashboard"
              >
                {user?.picture ? (
                  <img
                    src={user.picture}
                    alt=""
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-orange-400"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f97316] text-white flex items-center justify-center text-[10px] font-bold">
                    {user?.name?.charAt(0)?.toUpperCase() || "S"}
                  </div>
                )}
                <span className="hidden sm:inline font-bold">{user?.name?.split(" ")[0] || "Dashboard"}</span>
              </Link>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  logout();
                }}
                title="Log Out"
                aria-label="Log Out"
                className="flex items-center gap-1 rounded-xl border border-[#e7e3da] bg-white/90 px-2.5 py-1.5 sm:py-2 text-xs font-semibold text-stone-600 hover:text-red-600 hover:border-red-200 transition shadow-2xs backdrop-blur-md cursor-pointer active:scale-95"
              >
                <LogOut size={13} />
                <span className="hidden md:inline">Log Out</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              state={{ from: location.pathname }}
              className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white/90 px-3 py-1.5 sm:py-2 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-2xs backdrop-blur-md cursor-pointer active:scale-95"
            >
              Sign In
            </Link>
          )}

          {SHOW_NOVA_AI && onAiTutorToggle ? (
            <button
              type="button"
              onClick={onAiTutorToggle}
              className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition shadow-xs backdrop-blur-md active:scale-95 ${
                showAiTutor
                  ? "border-[#f97316] bg-[#f97316] text-white shadow-orange-500/20"
                  : "border-[#e7e3da] bg-white/90 text-stone-700 hover:border-orange-300 hover:text-[#f97316]"
              }`}
            >
              <Sparkles size={14} className={showAiTutor ? "animate-pulse" : "text-[#f97316]"} />
              <span>{showAiTutor ? "Close Nova AI" : aiTutorLabel || "Ask Nova AI Tutor"}</span>
            </button>
          ) : (
            <Logo
              size="xs"
              suffix={
                track === "devops"
                  ? "DevOps"
                  : track === "system-design"
                  ? "System Design"
                  : track === "os"
                  ? "Operating Systems"
                  : track === "networks"
                  ? "Computer Networks"
                  : track === "cybersecurity"
                  ? "Cybersecurity"
                  : track === "ai" || track === "ai-engineering"
                  ? "AI Engineering"
                  : track === "blockchain"
                  ? "Blockchain"
                  : "Cloud"
              }
            />
          )}
        </div>
      </div>

      {/* Module Tabs Bar with Locks & Completed Badges */}
      <div className="relative flex items-center w-full min-w-0">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll modules left"
          className="flex shrink-0 h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white/90 text-stone-500 hover:text-stone-900 hover:border-orange-300 transition mr-1 sm:mr-1.5 shadow-2xs active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={15} />
        </button>

        <div
          ref={scrollRef}
          className="flex-1 min-w-0 flex items-center gap-1.5 overflow-x-auto rounded-xl sm:rounded-2xl border border-[#e7e3da] bg-white/90 p-1 sm:p-1.5 shadow-2xs backdrop-blur-md scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {modules.map((mod) => {
            const isActive = mod.id === currentModuleId;
            const isCompleted = completedModuleIds.includes(mod.id);

            return (
              <button
                key={mod.id}
                data-active={isActive ? "true" : undefined}
                onClick={() => navigate(mod.route)}
                className={`shrink-0 whitespace-nowrap rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold transition-all duration-200 cursor-pointer min-h-[34px] sm:min-h-[38px] inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-sm shadow-orange-500/25"
                    : "text-stone-600 hover:bg-stone-100/80 hover:text-stone-900"
                }`}
              >
                <span className="truncate max-w-[240px] sm:max-w-none">{mod.name}</span>
                {isCompleted && (
                  <span
                    className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[9px] font-bold shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200/80"
                    }`}
                  >
                    <CheckCircle2 size={10} className={isActive ? "text-white" : "text-emerald-600"} />
                    <span>Done</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll modules right"
          className="flex shrink-0 h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white/90 text-stone-500 hover:text-stone-900 hover:border-orange-300 transition ml-1 sm:ml-1.5 shadow-2xs active:scale-95 cursor-pointer"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      </div>
  );
}
