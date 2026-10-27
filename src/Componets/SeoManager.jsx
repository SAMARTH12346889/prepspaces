import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://prepspaces.com";

// Comprehensive route SEO definitions
const routeMeta = {
  "/": {
    title: "prepspaces — AI Interview Preparation & Technical Learning",
    description: "Prepare for technical interviews with structured learning resources, System Design masterclasses, DevOps, Cloud Computing, and interview practice tools from prepspaces.",
    canonical: `${BASE_URL}/`,
  },
  "/learning": {
    title: "Technical Systems Engineering Curriculum & Masterclasses — prepspaces",
    description: "Explore comprehensive university-informed preparation tracks in System Design, Cloud Computing, DevOps & SRE, Operating Systems, Computer Networks, and Cybersecurity.",
    canonical: `${BASE_URL}/learning`,
  },
  "/learn": {
    title: "Technical Interview Preparation Curriculum & Courses — PrepSpaces",
    description: "Explore comprehensive, interactive preparation tracks for System Design, DevOps & SRE, Cloud Computing, and Operating Systems.",
    canonical: `${BASE_URL}/learning`,
  },
  "/learning/os": {
    title: "Operating Systems Master Course — Kernel Internals & Systems Thinking | PrepSpaces",
    description: "Master operating systems internals, kernel architectures, process scheduling, virtual memory, concurrency, and Linux systems programming.",
    canonical: `${BASE_URL}/learning/os`,
  },
  "/learning/os/intro": {
    title: "Module 1: Introduction to Operating Systems and Systems Thinking | PrepSpaces",
    description: "Learn why operating systems exist, hardware abstraction layers, kernel vs user space, system calls, and Linux inspection labs.",
    canonical: `${BASE_URL}/learning/os`,
  },
  "/learning/os/architecture": {
    title: "Module 2: Computer Architecture for OS Engineers | PrepSpaces",
    description: "Master CPU execution, registers, privilege rings, interrupts, MMU page translation, TLBs, DMA, and system boot stages.",
    canonical: `${BASE_URL}/learning/os/architecture`,
  },
  "/learning/os/systems-programming": {
    title: "Module 3: C Programming & Systems Programming Model | PrepSpaces",
    description: "Master C memory models, virtual address space layouts, ELF binaries, static and dynamic linking, AddressSanitizer, and POSIX system interfaces.",
    canonical: `${BASE_URL}/learning/os/systems-programming`,
  },
  "/learning/os/syscalls": {
    title: "Module 4: OS Interfaces, System Calls & Program Execution | PrepSpaces",
    description: "Master system call transitions, file descriptors, fork, execvp, waitpid, process lifecycle, signals, pipes, and strace diagnostics.",
    canonical: `${BASE_URL}/learning/os/syscalls`,
  },
  "/learning/os/processes": {
    title: "Module 5: Processes and Process Lifecycle | PrepSpaces",
    description: "Master process abstractions, kernel task_struct (PCB), 5-state transitions, context switching, orphans, zombies, and Linux /proc exploration.",
    canonical: `${BASE_URL}/learning/os/processes`,
  },
  "/learning/os/scheduling": {
    title: "Module 6: CPU Scheduling and Performance | PrepSpaces",
    description: "Master FCFS, SJF, SRTF, Round Robin, Multilevel Feedback Queues (MLFQ), context-switch overhead, CPU affinity, and Linux EEVDF.",
    canonical: `${BASE_URL}/learning/os/scheduling`,
  },
  "/learning/os/threads": {
    title: "Module 7: Threads and Multithreaded Programming | PrepSpaces",
    description: "Master POSIX threads (pthreads), shared vs private state, threading models (1:1, N:1, M:N), Amdahl's Law, and cache false sharing mitigation.",
    canonical: `${BASE_URL}/learning/os/threads`,
  },
  "/learning/os/concurrency": {
    title: "Module 8: Concurrency, Synchronization and Deadlocks | PrepSpaces",
    description: "Master race conditions, critical sections, POSIX mutexes, condition variables, semaphores, C11 memory ordering, Coffman deadlock conditions, and linearizability.",
    canonical: `${BASE_URL}/learning/os/concurrency`,
  },
  "/learning/os/memory": {
    title: "Module 9: Memory Hierarchy and Memory Allocation | PrepSpaces",
    description: "Master virtual address spaces, stack frames, heap allocators, first-fit vs best-fit vs buddy allocation, fragmentation, and cache locality.",
    canonical: `${BASE_URL}/learning/os/memory`,
  },
  "/learning/os/virtual-memory": {
    title: "Module 10: Virtual Memory and Address Translation | PrepSpaces",
    description: "Master hardware MMU address translation, hierarchical page tables, PTE flags, TLB hit rates, Effective Access Time (EAT), and Copy-on-Write.",
    canonical: `${BASE_URL}/learning/os/virtual-memory`,
  },
  "/learning/os/demand-paging": {
    title: "Module 11: Demand Paging and Page Replacement | PrepSpaces",
    description: "Master demand paging, minor and major faults, working sets, thrashing, FIFO, Optimal, LRU, Clock, Belady's Anomaly, and Linux memory pressure.",
    canonical: `${BASE_URL}/learning/os/demand-paging`,
  },
  "/learning/os/virtualization": {
    title: "Module 12: Advanced Memory, Virtual Machines and Containers | PrepSpaces",
    description: "Master memory-mapped I/O, huge pages, NUMA nodes, hypervisors, EPT/NPT two-stage translation, Linux namespaces, and cgroup v2 memory limits.",
    canonical: `${BASE_URL}/learning/os/virtualization`,
  },
  "/learning/os/filesystems": {
    title: "Module 13: Filesystems and Storage Architecture | PrepSpaces",
    description: "Master files, directories, inodes, dentries, extents, journaling, crash consistency, VFS, page cache writeback, fsync, and ext4/XFS/Btrfs design.",
    canonical: `${BASE_URL}/learning/os/filesystems`,
  },
  "/learning/os/storage": {
    title: "Module 14: Storage Architecture, I/O Scheduling & Performance | PrepSpaces",
    description: "Master HDDs, flash SSDs, NVMe parallel queues, Little's Law, Linux I/O schedulers, DMA, write amplification, and io_uring.",
    canonical: `${BASE_URL}/learning/os/storage`,
  },
  "/learning/os/ipc": {
    title: "Module 15: IPC, Pipes, Shared Memory & Signals | PrepSpaces",
    description: "Master interprocess communication, anonymous pipes, named FIFOs, Unix domain sockets, POSIX shared memory, semaphores, signals, and backpressure.",
    canonical: `${BASE_URL}/learning/os/ipc`,
  },
  "/learning/os/crash-consistency": {
    title: "Module 16: Crash Consistency, Durability and Recovery | PrepSpaces",
    description: "Master crash consistency, page cache write ordering, fsync, atomic file replacement, journaling, copy-on-write, and disaster recovery validation.",
    canonical: `${BASE_URL}/learning/os/crash-consistency`,
  },
  "/learning/os/kernel-architecture": {
    title: "Module 17: Kernel Architecture & System Implementation | PrepSpaces",
    description: "Master kernel internals, boot flow from UEFI to PID 1, system-call dispatch tables, trap handling, spinlock interrupt safety, and MIT xv6 vs Linux.",
    canonical: `${BASE_URL}/learning/os/kernel-architecture`,
  },
  "/learning/os/diagnostics": {
    title: "Module 18: Linux Internals & Performance Diagnostics | PrepSpaces",
    description: "Master Linux performance diagnostics, /proc, /sys, vmstat, iostat, perf, strace, PSI stalls, and evidence-based bottleneck triage.",
    canonical: `${BASE_URL}/learning/os/diagnostics`,
  },
  "/learning/os/networking": {
    title: "Module 19: OS Networking & Network I/O | PrepSpaces",
    description: "Master the Linux kernel network stack, TCP/UDP sockets, non-blocking I/O, epoll event loops, socket buffers, application backpressure, and network namespaces.",
    canonical: `${BASE_URL}/learning/os/networking`,
  },
  "/learning/os/security": {
    title: "Module 20: OS Security, Isolation & Reliability | PrepSpaces",
    description: "Master Linux identities, capabilities, POSIX permissions, cgroup v2 limits, seccomp filters, Secure Boot, DoS defenses, and STRIDE threat modeling.",
    canonical: `${BASE_URL}/learning/os/security`,
  },
  "/learning/os/advanced-sync": {
    title: "Module 21: Advanced Synchronization & Multiprocessor Systems | PrepSpaces",
    description: "Master multiprocessor synchronization, spinlocks, atomics, lock-free queues, memory ordering, cache coherence, false sharing, NUMA, and RCU.",
    canonical: `${BASE_URL}/learning/os/advanced-sync`,
  },
  "/learning/os/testing": {
    title: "Module 22: OS Design, Testing & Failure Analysis | PrepSpaces",
    description: "Master systems testing, component invariants, fault injection, ThreadSanitizer race detection, kernel panics, and performance regression gates.",
    canonical: `${BASE_URL}/learning/os/testing`,
  },
  "/learning/os/design-testing": {
    title: "Module 22: OS Design, Testing & Failure Analysis | PrepSpaces",
    description: "Master systems testing, component invariants, fault injection, ThreadSanitizer race detection, kernel panics, and performance regression gates.",
    canonical: `${BASE_URL}/learning/os/testing`,
  },
  "/learning/os/capstone": {
    title: "Module 23 Capstone: Build an OS Component (xv6/RISC-V) | PrepSpaces",
    description: "Build, extend, and test an educational operating system component using MIT xv6 on RISC-V, system call traps, and engineering verification.",
    canonical: `${BASE_URL}/learning/os/capstone`,
  },
  "/learning/os/final-capstone": {
    title: "Module 24: Final Capstone — Operating Systems Engineering Lab | PrepSpaces",
    description: "Culminating operating systems engineering project. Implement bounded concurrent worker queues, performance diagnostic tools, or virtual memory simulators.",
    canonical: `${BASE_URL}/learning/os/final-capstone`,
  },
  "/learning/networks": {
    title: "Module 1: Introduction to Computer Networks & Internet Architecture | PrepSpaces",
    description: "Master computer networks from physical signals and Ethernet switching to global BGP routing, packet switching math, TCP/IP protocols, and network security.",
    canonical: `${BASE_URL}/learning/networks`,
  },
  "/learning/networks/intro": {
    title: "Module 1: Introduction to Computer Networks & Internet Architecture | PrepSpaces",
    description: "Master computer networks from physical signals and Ethernet switching to global BGP routing, packet switching math, TCP/IP protocols, and network security.",
    canonical: `${BASE_URL}/learning/networks`,
  },
  "/learning/networks/models": {
    title: "Module 2: Network Models — OSI & TCP/IP Protocol Architecture | PrepSpaces",
    description: "Master OSI 7-layer and TCP/IP 4-layer network models, protocol encapsulation, router frame re-framing, Wireshark packet dissection, and layered troubleshooting.",
    canonical: `${BASE_URL}/learning/networks/models`,
  },
  "/learning/networks/physical": {
    title: "Module 3: Physical Layer & Data Transmission | PrepSpaces",
    description: "Master physical layer signals, Nyquist and Shannon channel capacity, optical power budgets, line coding (NRZ, Manchester, PAM-4), and ethtool transceiver diagnostics.",
    canonical: `${BASE_URL}/learning/networks/physical`,
  },
  "/learning/networks/datalink": {
    title: "Module 4: Data Link Layer & Ethernet Switching | PrepSpaces",
    description: "Master Ethernet frame structures, CAM table MAC learning, ARP resolution, 802.1Q VLAN trunking, Spanning Tree Protocol (STP), and Layer 2 link security.",
    canonical: `${BASE_URL}/learning/networks/datalink`,
  },
  "/learning/networks/ipv4": {
    title: "Module 5: IPv4 Addressing, Subnetting & Enterprise Planning | PrepSpaces",
    description: "Master 32-bit binary arithmetic, CIDR notation, subnet calculations, VLSM address optimization, RFC 1918 private addressing, and NAT/PAT connection tracking.",
    canonical: `${BASE_URL}/learning/networks/ipv4`,
  },
  "/learning/networks/ipv6": {
    title: "Module 6: IPv6 Architecture, Modern Addressing & Transition Engineering | PrepSpaces",
    description: "Master 128-bit hexadecimal addressing, address compression rules, Global Unicast, Link-Local, Neighbor Discovery Protocol (NDP), SLAAC autoconfiguration, DHCPv6, dual-stack networks, transition mechanisms (NAT64/DNS64), and IPv6 defense-in-depth.",
    canonical: `${BASE_URL}/learning/networks/ipv6`,
  },
  "/learning/networks/routing": {
    title: "Module 7: Routing and Router Architecture | PrepSpaces",
    description: "Master Longest-Prefix Matching (LPM), RIB vs FIB data structures, hop-by-hop TTL frame re-encapsulation, Dijkstra link-state calculations in OSPF, BGP interdomain policy, and network fault troubleshooting.",
    canonical: `${BASE_URL}/learning/networks/routing`,
  },
  "/learning/networks/config": {
    title: "Module 8: ICMP, ARP, DHCP & Network Configuration | PrepSpaces",
    description: "Master host configuration protocols, DHCP DORA lease lifecycle, ARP address resolution and spoofing, ICMP diagnostics, DNS name resolution dependencies, and tcpdump packet analysis.",
    canonical: `${BASE_URL}/learning/networks/config`,
  },
  "/learning/networks/tcp": {
    title: "Module 9: TCP — Reliable Transport & Performance Engineering | PrepSpaces",
    description: "Master TCP internals, 3-way handshake, 11 connection states, sliding windows, flow control (rwnd), congestion control (cwnd), Fast Retransmit, PMTUD black holes, BDP calculation, and SYN cookies.",
    canonical: `${BASE_URL}/learning/networks/tcp`,
  },
  "/learning/networks/udp": {
    title: "Module 10: UDP, QUIC & Modern Transport Protocols | PrepSpaces",
    description: "Master UDP datagrams, 8-byte headers, checksum verification, application-managed reliability, QUIC (RFC 9000), HTTP/3, 0-RTT handshakes, Head-of-Line blocking elimination, connection migration, and DDoS amplification defense.",
    canonical: `${BASE_URL}/learning/networks/udp`,
  },
  "/learning/networks/dns": {
    title: "Module 11: DNS & Internet Naming Architecture | PrepSpaces",
    description: "Master global DNS hierarchy, root servers, recursive vs iterative resolution, 12-byte wire headers, resource records (A, AAAA, CNAME, MX, TXT, PTR), negative caching, DoH/DoT encryption, DNSSEC trust chains, and DNS tunneling forensics.",
    canonical: `${BASE_URL}/learning/networks/dns`,
  },
  "/learning/networks/application-layer": {
    title: "Module 12: Application Protocols & Web Networking | PrepSpaces",
    description: "Master HTTP/1.1 semantics, status codes, conditional caching (ETags), TLS 1.3 handshakes, X.509 PKI certificates, reverse proxies, REST APIs, CORS, and WebSockets.",
    canonical: `${BASE_URL}/learning/networks/application-layer`,
  },
  "/learning/networks/wireless": {
    title: "Module 13: Wireless, Wi-Fi & Mobile Networking | PrepSpaces",
    description: "Master IEEE 802.11 Wi-Fi generations (Wi-Fi 4-7), RF propagation, channel planning, WPA3-SAE, enterprise 802.1X EAP-TLS, Bluetooth LE, 5G Core, and WIPS defense.",
    canonical: `${BASE_URL}/learning/networks/wireless`,
  },
  "/learning/networks/switching": {
    title: "Module 14: Switching, VLANs & Enterprise LAN Design | PrepSpaces",
    description: "Master hierarchical campus networks, 802.1Q trunking, inter-VLAN routing (ROAS and SVIs), 802.1w RSTP loop prevention, LACP link aggregation, and Layer 2 switch port security.",
    canonical: `${BASE_URL}/learning/networks/switching`,
  },
  "/learning/networks/firewalls": {
    title: "Module 15: Network Services, Firewalls & Access Control | PrepSpaces",
    description: "Master stateful packet inspection, conntrack, ACL rule ordering, NAT, IPsec/WireGuard VPNs, Suricata IDS/IPS, bastion jump hosts, and Linux nftables.",
    canonical: `${BASE_URL}/learning/networks/firewalls`,
  },
  "/learning/networks/enterprise-cloud": {
    title: "Module 16: Enterprise, Data Center & Cloud Networking | PrepSpaces",
    description: "Master data center leaf-spine fabrics, ECMP routing, multi-tier cloud VPCs, Layer 4/7 load balancing, VXLAN overlays, MTU engineering, and Zero Trust.",
    canonical: `${BASE_URL}/learning/networks/enterprise-cloud`,
  },
  "/learning/networks/threat-modeling": {
    title: "Module 17: Network Security Fundamentals & Threat Modeling | PrepSpaces",
    description: "Master the CIA triad, explicit trust boundaries, attack surface reduction, STRIDE threat modeling, TLS 1.3 AEAD cryptography, and qualitative risk assessment.",
    canonical: `${BASE_URL}/learning/networks/threat-modeling`,
  },
  "/learning/networks/packet-analysis": {
    title: "Module 18: Packet Analysis & Network Reconnaissance | PrepSpaces",
    description: "Master Wireshark 3-pane dissection, display filters, tcpdump command-line capture, BPF filters, Nmap port states, and evidence integrity hashing.",
    canonical: `${BASE_URL}/learning/networks/packet-analysis`,
  },
  "/learning/networks/attacks-defenses": {
    title: "Module 19: Common Network Attacks & Defensive Countermeasures | PrepSpaces",
    description: "Master network attack vectors and mitigations: ARP cache poisoning vs Dynamic ARP Inspection (DAI), DNS cache poisoning vs DNSSEC, IP spoofing vs uRPF, TCP SYN floods vs SYN cookies, and VLAN hopping defenses.",
    canonical: `${BASE_URL}/learning/networks/attacks-defenses`,
  },
  "/learning/networks/ids-ips-soc": {
    title: "Module 20: IDS/IPS, SOC Monitoring and Incident Response | PrepSpaces",
    description: "Master network intrusion detection and prevention: Passive IDS vs Inline IPS, Suricata and Snort 3 rule authoring, Zeek telemetry logs, multi-source IoC correlation, SIEM triage, and NIST SP 800-61 incident response.",
    canonical: `${BASE_URL}/learning/networks/ids-ips-soc`,
  },
  "/learning/networks/network-automation": {
    title: "Module 21: Network Programming and Automation | PrepSpaces",
    description: "Master Python network programming and automation: TCP/UDP socket lifecycles, dual-stack DNS resolution with socket.getaddrinfo, HTTP client probing, ThreadPoolExecutor concurrency, RESTCONF/NETCONF idempotency, and JSONL diagnostics.",
    canonical: `${BASE_URL}/learning/networks/network-automation`,
  },
  "/learning/networks/advanced-routing": {
    title: "Module 22: Advanced Routing, Performance and Troubleshooting | PrepSpaces",
    description: "Master BGP routing policy, OSPF link-state convergence, Bufferbloat queueing dynamics, Path MTU Discovery (PMTUD) black holes, asymmetric routing across stateful firewalls, and enterprise root-cause analysis (RCA).",
    canonical: `${BASE_URL}/learning/networks/advanced-routing`,
  },
  "/learning/networks/security-architecture": {
    title: "Module 23: Modern Network Security Architecture | PrepSpaces",
    description: "Master Zero Trust (NIST SP 800-207), microsegmentation, secure DNS (DoH/DoT/DNSSEC), TLS 1.3 certificate lifecycle, WireGuard vs IPsec cryptokey routing, Kubernetes NetworkPolicies, and Network Detection & Response (NDR).",
    canonical: `${BASE_URL}/learning/networks/security-architecture`,
  },
  "/learning/networks/final-capstone": {
    title: "Module 24: Final Capstone — Network Engineering and Security Lab | PrepSpaces",
    description: "Build and audit an enterprise-grade segmented network lab featuring 802.1Q VLAN trunking, inter-VLAN routing, stateful firewall rules, HSRP/VRRP gateway redundancy, packet captures, iperf3 benchmarks, and complete engineering reports.",
    canonical: `${BASE_URL}/learning/networks/final-capstone`,
  },
  "/learn/computer-networks": {
    title: "Computer Networks & Internet Engineering Course | PrepSpaces",
    description: "University-level computer networks course based on MIT, Stanford, Berkeley, CMU, and Princeton curricula. Packet switching, sockets, routing, and Wireshark labs.",
    canonical: `${BASE_URL}/learn/computer-networks`,
  },
  "/learn/system-design": {
    title: "System Design Course for Beginners | PrepSpaces",
    description: "Master large-scale distributed systems, architectural thinking, capacity estimation, microservices, and system design interview questions.",
    canonical: `${BASE_URL}/learning/system-design`,
  },
  "/learn/cloud-computing": {
    title: "Cloud Computing Course and Interview Preparation | PrepSpaces",
    description: "Master enterprise public cloud architecture, AWS, Azure, GCP, VPC networking, compute, storage, and cloud engineering interview questions.",
    canonical: `${BASE_URL}/learning/cloud`,
  },
  "/learn/devops": {
    title: "DevOps Course and Interview Preparation | PrepSpaces",
    description: "Master modern production infrastructure, Linux systems, Docker, Kubernetes, CI/CD pipelines, and SRE interview preparation.",
    canonical: `${BASE_URL}/learning/devops/linux`,
  },
  "/interview": {
    title: "Technical Mock Interview Platform — PrepSpaces",
    description: "Practice technical and behavioral software engineering mock interviews. Status and roadmap updates for automated interview rooms.",
    canonical: `${BASE_URL}/interview`,
    robots: "noindex, follow",
  },

  // System Design Masterclass
  "/learning/system-design": {
    title: "System Design Course & Architecture Interview Preparation | PrepSpaces",
    description: "Complete guide to designing scalable distributed systems, high availability, microservices, and system design interview questions.",
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
  "/learning/system-design/storage": {
    title: "Object Storage, File Systems, Search Engines & Data Pipelines — PrepSpaces",
    description: "Master cloud object storage, distributed file systems, inverted index search engines, batch and streaming data pipelines, and modern lakehouse architecture.",
    canonical: `${BASE_URL}/learning/system-design/storage`,
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
    title: "Cloud Computing Course & Interview Preparation | PrepSpaces",
    description: "Master public cloud architecture, AWS, Azure, GCP, availability zones, data center topologies, and cloud interview questions.",
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
    title: "DevOps Course & SRE Interview Preparation | PrepSpaces",
    description: "Master modern production infrastructure, Linux systems, GitOps, Docker, Kubernetes, CI/CD, and DevOps interview questions.",
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
  // Cybersecurity Masterclass (24 Modules)
  "/learning/cybersecurity": {
    title: "Cybersecurity Masterclass — Ethical Hacking & Systems Defense | PrepSpaces",
    description: "Master university-informed cybersecurity engineering: CIA triad, threat modeling, ethical hacking, OWASP Top 10, NIST CSF 2.0, MITRE ATT&CK, and practical defense.",
    canonical: `${BASE_URL}/learning/cybersecurity`,
  },
  "/learning/cybersecurity/intro": {
    title: "Module 1: Introduction to Cybersecurity & Ethical Hacking | PrepSpaces",
    description: "Understand the adversarial mindset, threat actors, attack surfaces, vulnerability classifications, and legal boundaries of ethical hacking.",
    canonical: `${BASE_URL}/learning/cybersecurity`,
  },
  "/learning/cybersecurity/networking": {
    title: "Module 2: Computer Networking for Cybersecurity Engineers | PrepSpaces",
    description: "Deep-dive into network protocol security, TCP/IP attacks, ARP spoofing, DNS cache poisoning, TLS inspection, and firewall architecture.",
    canonical: `${BASE_URL}/learning/cybersecurity/networking`,
  },
  "/learning/cybersecurity/systems": {
    title: "Module 3: Operating System Internals & Systems Hardening | PrepSpaces",
    description: "Kernel privilege rings, system calls, memory safety, ASLR, DEP, process isolation, and Linux/Windows host hardening.",
    canonical: `${BASE_URL}/learning/cybersecurity/systems`,
  },
  "/learning/cybersecurity/threat-modeling": {
    title: "Module 4: Threat Modeling, Risk Assessment & Security Architecture | PrepSpaces",
    description: "STRIDE methodology, DREAD scoring, attack trees, trust boundaries, and risk mitigation strategies for modern software systems.",
    canonical: `${BASE_URL}/learning/cybersecurity/threat-modeling`,
  },
  "/learning/cybersecurity/methodology": {
    title: "Module 5: Ethical Hacking Methodology, Scoping & Rules of Engagement | PrepSpaces",
    description: "PTES, NIST SP 800-115, OSSTMM standards, legal authorizations, scopes of work, and professional rules of engagement.",
    canonical: `${BASE_URL}/learning/cybersecurity/methodology`,
  },
  "/learning/cybersecurity/osint": {
    title: "Module 6: Open-Source Intelligence (OSINT) & Passive Reconnaissance | PrepSpaces",
    description: "Recon-ng, Shodan, certificate transparency logs, DNS enumeration, WHOIS, and threat intelligence gathering techniques.",
    canonical: `${BASE_URL}/learning/cybersecurity/osint`,
  },
  "/learning/cybersecurity/recon": {
    title: "Module 7: Active Reconnaissance, Port Scanning & Enumeration | PrepSpaces",
    description: "Nmap scanning techniques, service enumeration, banner grabbing, NSE scripts, and network perimeter mapping.",
    canonical: `${BASE_URL}/learning/cybersecurity/recon`,
  },
  "/learning/cybersecurity/vulnerability-assessment": {
    title: "Module 8: Vulnerability Assessment, CVEs & CVSS Scoring | PrepSpaces",
    description: "Vulnerability management lifecycles, automated scanning, CVE database analysis, CVSS v3.1/v4.0 scoring, and prioritization.",
    canonical: `${BASE_URL}/learning/cybersecurity/vulnerability-assessment`,
  },
  "/learning/cybersecurity/network-security": {
    title: "Module 9: Network Security Architecture, Firewalls & IDS/IPS | PrepSpaces",
    description: "Stateful inspection, packet filtering, DMZs, Snort/Suricata IDS/IPS, network segmentation, and zero-trust perimeter defense.",
    canonical: `${BASE_URL}/learning/cybersecurity/network-security`,
  },
  "/learning/cybersecurity/os-security": {
    title: "Module 10: Operating System Security, Hardening & Integrity | PrepSpaces",
    description: "Linux & Windows benchmark hardening (CIS), AppArmor, SELinux, auditd, PAM authentication, and file integrity monitoring.",
    canonical: `${BASE_URL}/learning/cybersecurity/os-security`,
  },
  "/learning/cybersecurity/iam": {
    title: "Module 11: Identity, Authentication & Access Control (IAM) | PrepSpaces",
    description: "OAuth 2.0, OpenID Connect, SAML 2.0, Multi-Factor Authentication (MFA), RBAC, ABAC, and privilege management.",
    canonical: `${BASE_URL}/learning/cybersecurity/iam`,
  },
  "/learning/cybersecurity/cryptography": {
    title: "Module 12: Applied Cryptography, PKI & TLS Architecture | PrepSpaces",
    description: "Symmetric vs asymmetric encryption (AES, RSA, ECC), hashing, digital signatures, X.509 certificates, PKI, and TLS 1.3 handshakes.",
    canonical: `${BASE_URL}/learning/cybersecurity/cryptography`,
  },
  "/learning/cybersecurity/web-security": {
    title: "Module 13: Web Application Architecture, Sessions & Browser Security | PrepSpaces",
    description: "HTTP security headers, CSP, CORS, SameSite cookies, session tokens, DOM security models, and client-side defense.",
    canonical: `${BASE_URL}/learning/cybersecurity/web-security`,
  },
  "/learning/cybersecurity/owasp-top-10": {
    title: "Module 14: OWASP Top 10, Injection Vulnerabilities & Secure Input | PrepSpaces",
    description: "SQL injection, command injection, XSS, SSRF, IDOR, input validation, and parameterized query defenses.",
    canonical: `${BASE_URL}/learning/cybersecurity/owasp-top-10`,
  },
  "/learning/cybersecurity/auth-api-security": {
    title: "Module 15: Authentication Flaws, Access Control & API Security | PrepSpaces",
    description: "BOLA, BFLA, JWT vulnerabilities, mass assignment, rate limiting, and API security best practices (OWASP API Top 10).",
    canonical: `${BASE_URL}/learning/cybersecurity/auth-api-security`,
  },
  "/learning/cybersecurity/secure-code-review": {
    title: "Module 16: Secure Code Review, SAST/DAST & Remediation Validation | PrepSpaces",
    description: "Manual code audits, static and dynamic application security testing (SAST/DAST), software supply chain analysis, and automated CI/CD gating.",
    canonical: `${BASE_URL}/learning/cybersecurity/secure-code-review`,
  },
  "/learning/cybersecurity/wireless-security": {
    title: "Module 17: Wireless Security & Wi-Fi Defense | PrepSpaces",
    description: "WPA2/WPA3 protocols, 802.11 frames, 4-way handshakes, evil twin detection, rogue AP mitigation, and enterprise WLAN defense.",
    canonical: `${BASE_URL}/learning/cybersecurity/wireless-security`,
  },
  "/learning/cybersecurity/cloud-security": {
    title: "Module 18: Cloud Security, Containers, IAM Policies & K8s | PrepSpaces",
    description: "Shared responsibility model, AWS/Azure/GCP IAM least privilege, container vulnerability scanning, Kubernetes RBAC, and cloud posture management.",
    canonical: `${BASE_URL}/learning/cybersecurity/cloud-security`,
  },
  "/learning/cybersecurity/malware-analysis": {
    title: "Module 19: Malware Analysis Fundamentals & Threat Intelligence | PrepSpaces",
    description: "Static and dynamic malware analysis, sandboxing, reverse engineering basics, ransomware defense, and indicators of compromise (IOCs).",
    canonical: `${BASE_URL}/learning/cybersecurity/malware-analysis`,
  },
  "/learning/cybersecurity/soc-siem": {
    title: "Module 20: Security Monitoring, SIEM, Incident Response & Forensics | PrepSpaces",
    description: "SOC workflows, log collection, SIEM rule engineering, NIST SP 800-61 incident response, disk/memory artifact preservation, and chain of custody.",
    canonical: `${BASE_URL}/learning/cybersecurity/soc-siem`,
  },
  "/learning/cybersecurity/pentest-planning": {
    title: "Module 21: Penetration Testing Planning, RoE & Evidence Collection | PrepSpaces",
    description: "Scoping charters, rules of engagement, risk minimization, evidentiary integrity, chain of custody, and safe assessment execution.",
    canonical: `${BASE_URL}/learning/cybersecurity/pentest-planning`,
  },
  "/learning/cybersecurity/red-blue-purple-teams": {
    title: "Module 22: Red Team, Blue Team Operations & Purple Team Exercises | PrepSpaces",
    description: "Adversary emulation, MITRE ATT&CK mapping, detection engineering, telemetry gap analysis, and collaborative purple teaming.",
    canonical: `${BASE_URL}/learning/cybersecurity/red-blue-purple-teams`,
  },
  "/learning/cybersecurity/pentest-reports": {
    title: "Module 23: Penetration Testing Reports, CVSS v4 & Retesting | PrepSpaces",
    description: "Executive and technical reporting, CVSS v4.0 calculator integration, prioritized remediation lifecycles, and verified retesting.",
    canonical: `${BASE_URL}/learning/cybersecurity/pentest-reports`,
  },
  "/learning/cybersecurity/final-capstone": {
    title: "Module 24: Final Capstone — Security Assessment & Defense | PrepSpaces",
    description: "End-to-end cybersecurity project: Assess, Document, Secure, Retest, and Defend an enterprise lab environment.",
    canonical: `${BASE_URL}/learning/cybersecurity/final-capstone`,
  },
  "/learn/cybersecurity": {
    title: "Cybersecurity Masterclass — Ethical Hacking & Systems Defense | PrepSpaces",
    description: "Master university-informed cybersecurity engineering: CIA triad, threat modeling, ethical hacking, OWASP Top 10, NIST CSF 2.0, MITRE ATT&CK, and practical defense.",
    canonical: `${BASE_URL}/learning/cybersecurity`,
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
 * Helper to inject or update BreadcrumbList JSON-LD on nested pages
 */
function updateBreadcrumbs(pathname, title) {
  let script = document.getElementById("jsonld-breadcrumbs");
  
  if (pathname === "/" || pathname === "") {
    if (script) script.remove();
    return;
  }

  const parts = pathname.split("/").filter(Boolean);
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${BASE_URL}/`,
    },
  ];

  let currentPath = "";
  parts.forEach((part, index) => {
    currentPath += `/${part}`;
    const cleanName =
      index === parts.length - 1
        ? title.split("—")[0].split("|")[0].trim()
        : part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");

    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": cleanName,
      "item": `${BASE_URL}${currentPath}`,
    });
  });

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };

  if (!script) {
    script = document.createElement("script");
    script.id = "jsonld-breadcrumbs";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(breadcrumbData);
}

/**
 * SeoManager Component
 * Observes React Router pathname changes and updates document.title, meta descriptions,
 * canonical link tags, Open Graph, Twitter metadata, and Breadcrumbs in real time.
 */
export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, "") || "/";
    const meta = routeMeta[pathname] || {
      title: "PrepSpaces — Technical Interview Preparation & Architecture Mastery",
      description: "Interactive technical learning platform for software engineers. System design, cloud computing, and DevOps.",
      canonical: `${BASE_URL}${pathname}`,
    };

    // 1. Update Title
    document.title = meta.title;

    // 2. Update Standard Meta
    updateMetaTag("name", "description", meta.description);
    updateMetaTag("name", "robots", meta.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Update Canonical Link
    updateCanonicalUrl(meta.canonical);

    // 4. Update Open Graph Meta
    updateMetaTag("property", "og:title", meta.title);
    updateMetaTag("property", "og:description", meta.description);
    updateMetaTag("property", "og:url", meta.canonical);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:site_name", "prepspaces");
    updateMetaTag("property", "og:image", `${BASE_URL}/logo-mark.png`);

    // 5. Update Twitter Meta
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", meta.title);
    updateMetaTag("name", "twitter:description", meta.description);
    updateMetaTag("name", "twitter:image", `${BASE_URL}/logo-mark.png`);

    // 6. Update Breadcrumbs Structured Data
    updateBreadcrumbs(pathname, meta.title);

    // 7. Track SPA page views in Google Analytics (gtag.js)
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-N10P6557MZ", {
        page_path: pathname,
        page_title: meta.title,
        page_location: window.location.href,
      });
    }
  }, [location.pathname]);

  return null;
}
