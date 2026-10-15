/**
 * fastCommandMatcher.js
 *
 * Deterministic client-side fast path matcher for unambiguous voice commands.
 * Bypasses network/LLM intent planning when the command is explicit and unambiguous,
 * reducing execution latency by ~800-1500ms while maintaining strict route validation.
 */

const REGISTERED_ROUTES = {
  home: { route: "/", label: "Dashboard" },
  learning: { route: "/learning", label: "Learning Center" },
  os: { route: "/learning/os", label: "Operating Systems Master Course" },
  "os-architecture": { route: "/learning/os/architecture", label: "Computer Architecture for OS Engineers" },
  "os-systems-programming": { route: "/learning/os/systems-programming", label: "C Programming & Systems Programming Model" },
  "os-syscalls": { route: "/learning/os/syscalls", label: "OS Interfaces & System Calls" },
  "os-processes": { route: "/learning/os/processes", label: "Processes & Process Lifecycle" },
  "os-scheduling": { route: "/learning/os/scheduling", label: "CPU Scheduling & Performance" },
  "os-threads": { route: "/learning/os/threads", label: "Threads & Multithreading" },
  "os-concurrency": { route: "/learning/os/concurrency", label: "Concurrency, Synchronization & Deadlocks" },
  "os-memory": { route: "/learning/os/memory", label: "Memory Hierarchy & Allocation" },
  "os-virtual-memory": { route: "/learning/os/virtual-memory", label: "Virtual Memory & Address Translation" },
  "os-demand-paging": { route: "/learning/os/demand-paging", label: "Demand Paging & Page Replacement" },
  "os-virtualization": { route: "/learning/os/virtualization", label: "Advanced Memory, VMs & Containers" },
  "os-filesystems": { route: "/learning/os/filesystems", label: "Filesystems & Storage Architecture" },
  "os-storage": { route: "/learning/os/storage", label: "Storage Architecture & I/O" },
  "os-ipc": { route: "/learning/os/ipc", label: "IPC, Pipes & Shared Memory" },
  "os-crash-consistency": { route: "/learning/os/crash-consistency", label: "Crash Consistency & Durability" },
  "os-kernel-architecture": { route: "/learning/os/kernel-architecture", label: "Kernel Architecture & xv6" },
  "os-diagnostics": { route: "/learning/os/diagnostics", label: "Linux Internals & Performance Diagnostics" },
  "os-networking": { route: "/learning/os/networking", label: "OS Networking & Network I/O" },
  "os-security": { route: "/learning/os/security", label: "OS Security, Isolation & Reliability" },
  "os-advanced-sync": { route: "/learning/os/advanced-sync", label: "Advanced Synchronization & Multiprocessor" },
  "os-design-testing": { route: "/learning/os/testing", label: "OS Design, Testing & Failure Analysis" },
  "os-capstone": { route: "/learning/os/capstone", label: "Operating Systems Capstone (xv6)" },
  "os-final-capstone": { route: "/learning/os/final-capstone", label: "Final Capstone: OS Engineering Lab" },
  networks: { route: "/learning/networks", label: "Computer Networks & Internet Engineering" },
  "networks-models": { route: "/learning/networks/models", label: "Network Models — OSI and TCP/IP" },
  "networks-physical": { route: "/learning/networks/physical", label: "Physical Layer & Data Transmission" },
  "networks-datalink": { route: "/learning/networks/datalink", label: "Data Link Layer & Ethernet Switching" },
  "networks-ipv4": { route: "/learning/networks/ipv4", label: "IPv4 Addressing & Subnetting" },
  "networks-ipv6": { route: "/learning/networks/ipv6", label: "IPv6 & Modern Addressing" },
  "networks-routing": { route: "/learning/networks/routing", label: "Routing & Router Architecture" },
  "networks-config": { route: "/learning/networks/config", label: "ICMP, ARP, DHCP & Network Configuration" },
  "networks-tcp": { route: "/learning/networks/tcp", label: "TCP — Reliable Transport" },
  "networks-udp": { route: "/learning/networks/udp", label: "UDP, QUIC & Modern Transport" },
  "networks-dns": { route: "/learning/networks/dns", label: "DNS & Internet Naming" },
  "networks-applayer": { route: "/learning/networks/application-layer", label: "Application Protocols & Web Networking" },
  "networks-wireless": { route: "/learning/networks/wireless", label: "Wireless, Wi-Fi & Mobile Networking" },
  "networks-switching": { route: "/learning/networks/switching", label: "Switching, VLANs & Enterprise LAN Design" },
  "networks-firewalls": { route: "/learning/networks/firewalls", label: "Network Services, Firewalls & Access Control" },
  "networks-enterprise-cloud": { route: "/learning/networks/enterprise-cloud", label: "Enterprise, Data Center & Cloud Networking" },
  "networks-threat-modeling": { route: "/learning/networks/threat-modeling", label: "Network Security & Threat Modeling" },
  "networks-packet-analysis": { route: "/learning/networks/packet-analysis", label: "Packet Analysis & Network Reconnaissance" },
  "networks-attacks": { route: "/learning/networks/attacks-defenses", label: "Common Network Attacks & Countermeasures" },
  "networks-ids-ips": { route: "/learning/networks/ids-ips-soc", label: "IDS/IPS, SOC Monitoring & Incident Response" },
  "networks-automation": { route: "/learning/networks/network-automation", label: "Network Programming & Automation" },
  "networks-advanced-routing": { route: "/learning/networks/advanced-routing", label: "Advanced Routing, Performance & Troubleshooting" },
  "networks-security-architecture": { route: "/learning/networks/security-architecture", label: "Modern Network Security Architecture" },
  "networks-final-capstone": { route: "/learning/networks/final-capstone", label: "Final Capstone: Network Engineering Lab" },
  "system-design": { route: "/learning/system-design", label: "System Design Masterclass" },
  "system-design-requirements": { route: "/learning/system-design/requirements", label: "System Design Requirements & Capacity" },
  "system-design-networking": { route: "/learning/system-design/networking", label: "System Design APIs & Networking" },
  "system-design-architecture": { route: "/learning/system-design/architecture", label: "System Design Monoliths & Microservices" },
  "system-design-databases": { route: "/learning/system-design/databases", label: "System Design Databases & Indexing" },
  "system-design-caching": { route: "/learning/system-design/caching", label: "System Design Caching & Invalidation" },
  "system-design-replication": { route: "/learning/system-design/replication", label: "System Design Replication & Sharding" },
  "system-design-distributed-systems": { route: "/learning/system-design/distributed-systems", label: "System Design Distributed Systems & Time" },
  "system-design-consistency": { route: "/learning/system-design/consistency", label: "System Design Consistency & Quorums" },
  "system-design-consensus": { route: "/learning/system-design/consensus", label: "System Design Consensus & Leader Election" },
  "system-design-messaging": { route: "/learning/system-design/messaging", label: "System Design Message Queues & Streaming" },
  "system-design-transactions": { route: "/learning/system-design/transactions", label: "System Design Transactions & Sagas" },
  "system-design-traffic": { route: "/learning/system-design/traffic", label: "System Design Load Balancing & Traffic" },
  "system-design-scalability": { route: "/learning/system-design/scalability", label: "System Design Scalability & Performance" },
  "system-design-multi-region": { route: "/learning/system-design/multi-region", label: "System Design Multi-Region & Disaster Recovery" },
  "system-design-reliability": { route: "/learning/system-design/reliability", label: "System Design Reliability & Observability" },
  "system-design-security": { route: "/learning/system-design/security", label: "System Design Security & Multi-Tenancy" },
  "system-design-realtime": { route: "/learning/system-design/realtime", label: "System Design Real-Time Systems & WebSockets" },
  "system-design-search": { route: "/learning/system-design/search", label: "System Design Search, Feeds & Recommendations" },
  "system-design-ai-systems": { route: "/learning/system-design/ai-systems", label: "System Design AI Systems & Inference Serving" },
  "system-design-case-studies": { route: "/learning/system-design/case-studies", label: "System Design Case Studies" },
  "system-design-advanced-case-studies": { route: "/learning/system-design/advanced-case-studies", label: "System Design Advanced Case Studies" },
  "system-design-capstone": { route: "/learning/system-design/capstone", label: "System Design Final Capstone" },
  interview: { route: "/interview", label: "Technical Interview Room" },
};

// Patterns that identify questions (NEVER fast-path as navigation!)
const QUESTION_PATTERNS = [
  /^(what|why|how|who|when|where|which|can you|could you|explain|tell me|define|is there|describe)\b/i,
  /\?$/,
];

// Patterns for unambiguous navigation
const NAVIGATION_RULES = [
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(interview|the interview|mock interview|interview room|practice room)$/i,
    destination: "interview",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(system design|system design masterclass|architectural thinking)$/i,
    destination: "system-design",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(requirements|capacity estimation|capacity planning|system design requirements|system design module 2)$/i,
    destination: "system-design-requirements",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(networking|apis|protocols|system design networking|system design module 3)$/i,
    destination: "system-design-networking",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(architecture|microservices|monoliths|modular monolith|system design architecture|system design module 4)$/i,
    destination: "system-design-architecture",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(databases|database design|indexing|sql|nosql|system design databases|system design module 5)$/i,
    destination: "system-design-databases",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(caching|redis|cdn|cache invalidation|system design caching|system design module 6)$/i,
    destination: "system-design-caching",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(replication|sharding|partitioning|distributed database|distributed databases|system design replication|system design sharding|system design module 7)$/i,
    destination: "system-design-replication",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(distributed systems|clocks|timeouts|circuit breaker|failure models|system design distributed systems|system design module 9)$/i,
    destination: "system-design-distributed-systems",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(consistency|quorums|quorum reads|linearizability|read repair|consistency models|system design consistency|system design module 10)$/i,
    destination: "system-design-consistency",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(consensus|leader election|raft|paxos|fencing tokens|coordination|split brain|system design consensus|system design module 11)$/i,
    destination: "system-design-consensus",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(messaging|message queues|kafka|rabbitmq|event driven|stream processing|flink|outbox|system design messaging|system design module 12)$/i,
    destination: "system-design-messaging",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(transactions|distributed transactions|sagas|saga pattern|idempotency|two phase commit|2pc|system design transactions|system design module 13)$/i,
    destination: "system-design-transactions",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(traffic|load balancing|rate limiting|backpressure|traffic management|system design traffic|system design module 14)$/i,
    destination: "system-design-traffic",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(scalability|performance|bottlenecks|capacity estimation|little's law|system design scalability|system design module 15)$/i,
    destination: "system-design-scalability",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(multi-region|disaster recovery|cross region replication|rto rpo|failover|split brain|system design multi region|system design module 16)$/i,
    destination: "system-design-multi-region",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(reliability|observability|resilience|circuit breaker|graceful degradation|error budget|opentelemetry|distributed tracing|sli slo|system design reliability|system design module 17)$/i,
    destination: "system-design-reliability",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(security|multi-tenant|multi tenancy|authorization|identity|rbac|abac|row level security|rls|idor|bola|passkeys|zero trust|system design security|system design module 18)$/i,
    destination: "system-design-security",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(real-time|realtime|websockets|websocket|presence|sse|socket\.io|notifications|system design realtime|system design module 19)$/i,
    destination: "system-design-realtime",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(search|feeds|recommendations|cdn|content delivery|inverted index|system design search|system design module 20)$/i,
    destination: "system-design-search",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(ai systems|ai architecture|inference|model serving|rag|vector search|vllm|embeddings|system design ai systems|system design module 21)$/i,
    destination: "system-design-ai-systems",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(case studies|system design case studies|url shortener|chat service|notification platform|social feed|system design module 22)$/i,
    destination: "system-design-case-studies",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(advanced case studies|advanced system design|video platform|ride hailing|uber architecture|payment platform|ai service|large scale ai|system design module 23)$/i,
    destination: "system-design-advanced-case-studies",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(capstone|system design capstone|capstone project|system design module 24)$/i,
    destination: "system-design-capstone",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(oops|oop|object oriented|oops page|oop page)$/i,
    destination: "learning",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(learning|learning center|lessons|study)$/i,
    destination: "learning",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me)\s+(home|homepage|dashboard|main page)$/i,
    destination: "home",
  },
  // Direct single-word or short destination commands
  {
    regex: /^(system design|system design masterclass)$/i,
    destination: "system-design",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(os|operating systems|operating system|os course|operating systems course)$/i,
    destination: "os",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(computer architecture|os architecture|architecture module|os module 2)$/i,
    destination: "os-architecture",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(c programming|systems programming|c and systems programming|systems programming model|os module 3)$/i,
    destination: "os-systems-programming",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(system calls|syscalls|process execution|os interfaces|os module 4)$/i,
    destination: "os-syscalls",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(processes|process lifecycle|process tree|pcb|os module 5)$/i,
    destination: "os-processes",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(cpu scheduling|scheduling|scheduling algorithms|gantt chart|os module 6)$/i,
    destination: "os-scheduling",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(threads|multithreading|posix threads|pthreads|amdahl's law|amdahl|os module 7)$/i,
    destination: "os-threads",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(concurrency|synchronization|locks|deadlocks|mutex|os module 8)$/i,
    destination: "os-concurrency",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(memory|memory hierarchy|memory allocation|allocator|free list|fragmentation|os module 9)$/i,
    destination: "os-memory",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(virtual memory|address translation|paging|page tables|tlb|mmap|os module 10)$/i,
    destination: "os-virtual-memory",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(demand paging|page replacement|page faults|belady|belady's anomaly|thrashing|working set|os module 11)$/i,
    destination: "os-demand-paging",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(virtualization|virtual machines|containers|docker|cgroups|namespaces|ept|huge pages|numa|os module 12)$/i,
    destination: "os-virtualization",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(filesystems|file systems|inodes|vfs|journaling|ext4|xfs|btrfs|zfs|fsync|os module 13)$/i,
    destination: "os-filesystems",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(storage|storage architecture|disk scheduling|ssd|hdd|nvme|io scheduling|write amplification|io_uring|os module 14)$/i,
    destination: "os-storage",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(ipc|interprocess communication|pipes|pipe|anonymous pipes|fifos|shared memory|shm|unix domain sockets|signals|os module 15)$/i,
    destination: "os-ipc",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(crash consistency|durability|fsync|recovery|journaling|crash recovery|os module 16)$/i,
    destination: "os-crash-consistency",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(kernel architecture|kernel|xv6|kernel internals|system calls dispatch|system call dispatch|os module 17)$/i,
    destination: "os-kernel-architecture",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(diagnostics|performance diagnostics|linux diagnostics|linux internals|vmstat|iostat|perf|strace|os module 18)$/i,
    destination: "os-diagnostics",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(os networking|network io|network i\/o|sockets|linux networking|epoll|os module 19)$/i,
    destination: "os-networking",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(os security|operating system security|linux security|isolation|cgroups|seccomp|least privilege|os module 20)$/i,
    destination: "os-security",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(advanced synchronization|multiprocessor|lock free|false sharing|cache coherence|os module 21)$/i,
    destination: "os-advanced-sync",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(design and testing|os testing|testing|failure analysis|fault injection|race detection|kernel panics|kernel panic|os module 22)$/i,
    destination: "os-design-testing",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(os capstone|xv6 capstone|kernel extension|os module 23)$/i,
    destination: "os-capstone",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(final capstone|os final capstone|os engineering lab|capstone lab|os module 24)$/i,
    destination: "os-final-capstone",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(computer networks|networks|computer network|networking|networking course|computer networks course|networks module 1)$/i,
    destination: "networks",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(network models|osi model|tcp ip model|osi and tcp ip|networks module 2)$/i,
    destination: "networks-models",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(physical layer|data transmission|shannon capacity|line coding|networks module 3)$/i,
    destination: "networks-physical",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(data link layer|datalink|data link|ethernet|ethernet switching|spanning tree|vlan|stp|networks module 4)$/i,
    destination: "networks-datalink",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(ipv4 addressing|ipv4|subnetting|vlsm|flsm|ip addressing|nat|cidr|networks module 5)$/i,
    destination: "networks-ipv4",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(ipv6 addressing|ipv6|slaac|ndp|neighbor discovery|dual stack|happy eyeballs|networks module 6)$/i,
    destination: "networks-ipv6",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(routing|router architecture|routing tables|longest prefix match|ospf|bgp|packet forwarding|networks module 7)$/i,
    destination: "networks-routing",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(network configuration|dhcp|arp|icmp|host configuration|dhcp dora|address resolution|networks module 8)$/i,
    destination: "networks-config",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(tcp|reliable transport|tcp handshake|sliding window|tcp flow control|congestion control|networks module 9)$/i,
    destination: "networks-tcp",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(udp|quic|modern transport|http3|http 3|udp datagrams|udp course|networks module 10)$/i,
    destination: "networks-udp",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(dns|domain name system|internet naming|dns resolution|dnssec|doh|dot|networks module 11)$/i,
    destination: "networks-dns",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(application protocols|web networking|http protocols|application layer|web protocols|networks module 12)$/i,
    destination: "networks-applayer",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(wireless|wifi|wi-fi|mobile networking|cellular|5g|wireless networks|networks module 13)$/i,
    destination: "networks-wireless",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(switching|vlans|vlan|enterprise lan|lan design|spanning tree|stp|rstp|networks module 14)$/i,
    destination: "networks-switching",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(firewalls|firewall|network security|access control|vpn|ids ips|suricata|networks module 15)$/i,
    destination: "networks-firewalls",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(enterprise networking|data center|datacenter|cloud networking|leaf spine|vxlan|zero trust|networks module 16)$/i,
    destination: "networks-enterprise-cloud",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(threat modeling|threat model|security fundamentals|cia triad|stride|network risk|networks module 17)$/i,
    destination: "networks-threat-modeling",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(packet analysis|wireshark|tcpdump|pcap|reconnaissance|network reconnaissance|networks module 18)$/i,
    destination: "networks-packet-analysis",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(network attacks|arp spoofing|dns spoofing|syn flood|vlan hopping|attacks and defenses|common attacks|common network attacks|countermeasures|networks module 19)$/i,
    destination: "networks-attacks",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(ids and ips|ids ips|ids|ips|suricata|snort|zeek|soc monitoring|incident response|soc|networks module 20)$/i,
    destination: "networks-ids-ips",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(network programming|network automation|socket programming|python networking|python sockets|netconf|restconf|diagnostics tool|networks module 21)$/i,
    destination: "networks-automation",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(advanced routing|bgp routing|ospf convergence|network troubleshooting|bufferbloat|asymmetric routing|pmtud|networks module 22)$/i,
    destination: "networks-advanced-routing",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(security architecture|modern network security|zero trust architecture|network zero trust|microsegmentation|wireguard vpn|container network policy|container network policies|networks module 23)$/i,
    destination: "networks-security-architecture",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(networks capstone|network capstone|final capstone network|network engineering lab|capstone network lab|networks module 24)$/i,
    destination: "networks-final-capstone",
  },
  {
    regex: /^(interview|mock interview)$/i,
    destination: "interview",
  },
  {
    regex: /^(operating systems|os course)$/i,
    destination: "os",
  },
  {
    regex: /^(oops|oop mastery)$/i,
    destination: "learning",
  },
  {
    regex: /^(home|dashboard)$/i,
    destination: "home",
  },
  {
    regex: /^(databases|indexing|database design)$/i,
    destination: "system-design-databases",
  },
  {
    regex: /^(consistency|quorums|linearizability)$/i,
    destination: "system-design-consistency",
  },
  {
    regex: /^(consensus|raft|paxos|leader election)$/i,
    destination: "system-design-consensus",
  },
  {
    regex: /^(messaging|message queues|kafka|rabbitmq|stream processing)$/i,
    destination: "system-design-messaging",
  },
  {
    regex: /^(transactions|distributed transactions|sagas|idempotency|two phase commit|2pc)$/i,
    destination: "system-design-transactions",
  },
  {
    regex: /^(traffic|load balancing|rate limiting|backpressure)$/i,
    destination: "system-design-traffic",
  },
  {
    regex: /^(scalability|performance modeling|bottlenecks|capacity estimation)$/i,
    destination: "system-design-scalability",
  },
  {
    regex: /^(multi-region|disaster recovery|rto rpo|cross region replication|failover runbook)$/i,
    destination: "system-design-multi-region",
  },
  {
    regex: /^(reliability|observability|resilience|circuit breaker|graceful degradation|error budget|distributed tracing)$/i,
    destination: "system-design-reliability",
  },
  {
    regex: /^(security|multi-tenant|multi tenancy|authorization|rbac|abac|row level security|rls|idor|zero trust)$/i,
    destination: "system-design-security",
  },
  {
    regex: /^(real-time|realtime|websockets|websocket|presence|socket\.io|realtime systems)$/i,
    destination: "system-design-realtime",
  },
  {
    regex: /^(search|feeds|recommendations|content delivery|inverted index|search systems)$/i,
    destination: "system-design-search",
  },
  {
    regex: /^(ai systems|ai architecture|inference serving|model serving|rag|vector search|vllm)$/i,
    destination: "system-design-ai-systems",
  },
  {
    regex: /^(case studies|system design case studies|url shortener|chat service|notification platform|social feed)$/i,
    destination: "system-design-case-studies",
  },
  {
    regex: /^(advanced case studies|advanced system design|video platform|ride hailing|uber architecture|payment platform|ai service)$/i,
    destination: "system-design-advanced-case-studies",
  },
  {
    regex: /^(capstone|system design capstone|capstone project)$/i,
    destination: "system-design-capstone",
  },
  {
    regex: /^(diagnostics|performance diagnostics|linux diagnostics|linux internals)$/i,
    destination: "os-diagnostics",
  },
  {
    regex: /^(os networking|network io|network i\/o|linux networking)$/i,
    destination: "os-networking",
  },
  {
    regex: /^(os security|operating system security|linux security|least privilege)$/i,
    destination: "os-security",
  },
  {
    regex: /^(advanced synchronization|multiprocessor|lock free|false sharing|cache coherence)$/i,
    destination: "os-advanced-sync",
  },
  {
    regex: /^(design and testing|os testing|failure analysis|fault injection|kernel panics|kernel panic)$/i,
    destination: "os-design-testing",
  },
  {
    regex: /^(os capstone|xv6 capstone)$/i,
    destination: "os-capstone",
  },
  {
    regex: /^(final capstone|os final capstone|os engineering lab|capstone lab)$/i,
    destination: "os-final-capstone",
  },
  {
    regex: /^(computer networks|computer network|networking course|computer networks course)$/i,
    destination: "networks",
  },
  {
    regex: /^(network models|osi model|tcp ip model|osi and tcp ip)$/i,
    destination: "networks-models",
  },
  {
    regex: /^(physical layer|data transmission|shannon capacity)$/i,
    destination: "networks-physical",
  },
  {
    regex: /^(data link layer|datalink|ethernet switching|spanning tree)$/i,
    destination: "networks-datalink",
  },
  {
    regex: /^(ipv4 addressing|ipv4|subnetting|vlsm)$/i,
    destination: "networks-ipv4",
  },
  {
    regex: /^(ipv6 addressing|ipv6|slaac|neighbor discovery)$/i,
    destination: "networks-ipv6",
  },
  {
    regex: /^(routing|router architecture|ospf|bgp)$/i,
    destination: "networks-routing",
  },
  {
    regex: /^(network configuration|dhcp|arp|icmp|dhcp dora)$/i,
    destination: "networks-config",
  },
  {
    regex: /^(tcp|reliable transport|tcp handshake)$/i,
    destination: "networks-tcp",
  },
  {
    regex: /^(udp|quic|modern transport|http3|http 3)$/i,
    destination: "networks-udp",
  },
  {
    regex: /^(dns|domain name system|dns resolution|dnssec)$/i,
    destination: "networks-dns",
  },
  {
    regex: /^(application protocols|web networking|http protocols|application layer)$/i,
    destination: "networks-applayer",
  },
  {
    regex: /^(wireless|wifi|wi-fi|mobile networking|cellular)$/i,
    destination: "networks-wireless",
  },
  {
    regex: /^(switching|vlans|enterprise lan|lan design|spanning tree)$/i,
    destination: "networks-switching",
  },
  {
    regex: /^(firewalls|firewall|access control|packet filtering)$/i,
    destination: "networks-firewalls",
  },
  {
    regex: /^(enterprise networking|data center|datacenter|cloud networking|leaf spine|vxlan)$/i,
    destination: "networks-enterprise-cloud",
  },
  {
    regex: /^(threat modeling|threat model|security fundamentals|cia triad|stride)$/i,
    destination: "networks-threat-modeling",
  },
  {
    regex: /^(packet analysis|wireshark|tcpdump|pcap|reconnaissance|network reconnaissance)$/i,
    destination: "networks-packet-analysis",
  },
  {
    regex: /^(network attacks|arp spoofing|dns spoofing|syn flood|vlan hopping|attacks and defenses)$/i,
    destination: "networks-attacks",
  },
  {
    regex: /^(ids and ips|ids ips|suricata|snort|zeek|soc monitoring|incident response)$/i,
    destination: "networks-ids-ips",
  },
  {
    regex: /^(network programming|network automation|socket programming|python networking|python sockets)$/i,
    destination: "networks-automation",
  },
  {
    regex: /^(advanced routing|bgp routing|ospf convergence|network troubleshooting|bufferbloat|asymmetric routing)$/i,
    destination: "networks-advanced-routing",
  },
  {
    regex: /^(security architecture|modern network security|zero trust architecture|microsegmentation|wireguard vpn)$/i,
    destination: "networks-security-architecture",
  },
  {
    regex: /^(networks capstone|network capstone|network engineering lab|capstone network lab)$/i,
    destination: "networks-final-capstone",
  },
];

// Patterns for local playback/assistant controls
const CONTROL_RULES = [
  {
    regex: /^(stop|stop listening|cancel|halt|quiet|shut up|hush)$/i,
    action: "stop",
  },
  {
    regex: /^(pause|pause audio|hold on)$/i,
    action: "pause",
  },
];

/**
 * Attempts to match a finalized transcript against deterministic fast-path rules.
 *
 * @param {string} transcript - The finalized speech-to-text transcript
 * @returns {Object|null} Fast path match result or null if ambiguous
 */
export function matchFastCommand(transcript = "") {
  const clean = String(transcript || "").trim();
  if (!clean) return null;

  // Rule 0: If it's a question, reject fast-path navigation immediately
  for (const qPattern of QUESTION_PATTERNS) {
    if (qPattern.test(clean)) {
      return null;
    }
  }

  // Rule 1: Check Control actions (Stop/Pause)
  for (const rule of CONTROL_RULES) {
    if (rule.regex.test(clean)) {
      return {
        type: "CONTROL",
        action: rule.action,
        fastPath: true,
        response: rule.action === "stop" ? "Stopped." : "Paused.",
      };
    }
  }

  // Rule 2: Check Navigation actions
  for (const rule of NAVIGATION_RULES) {
    if (rule.regex.test(clean)) {
      const dest = REGISTERED_ROUTES[rule.destination];
      if (dest) {
        return {
          type: "NAVIGATE",
          destination: rule.destination,
          route: dest.route,
          label: dest.label,
          fastPath: true,
          response: `Navigating to ${dest.label}.`,
        };
      }
    }
  }

  // No unambiguous fast path match: proceed to semantic Groq intent planner
  return null;
}
