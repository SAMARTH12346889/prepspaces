import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  Layers,
  Lightbulb,
  MessageSquare,
  Network,
  Play,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Building2,
  Boxes,
  Copy,
  Activity,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 1: CLOUD FOUNDATIONS                               */
/* Weeks 1–2: From Physical Datacenter to Cloud Architecture                  */
/* Systems Engineering principles: MIT 6.033, Stanford CS144, NIST SP 800-145 */
/* -------------------------------------------------------------------------- */

export default function CloudComputing() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive' | 'qa'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Failure Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  // Availability Calculator State
  const [ninesInput, setNinesInput] = useState("99.99");

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const cloudTopics = useMemo(
    () => [
      {
        id: "big-picture",
        title: "The Big Picture & 3 Levels of Abstraction",
        shortTitle: "1. The Big Picture",
        category: "Foundations",
        icon: Globe,
        summary:
          "Cloud is not magic; it is an abstraction layer constructed over physical hardware. Master the 3 levels: Physical, Infrastructure Abstraction, and Application.",
        theory: [
          "Every virtual machine, database, or serverless function you run executes on physical CPUs, RAM modules, SSDs, and networking cables housed in concrete datacenters with diesel backup generators and water-chilled cooling units.",
          "MIT 6.033 systems engineering teaches us that complex systems are made manageable through layered abstractions. Cloud provides a programmable control plane (APIs) over raw physical infrastructure.",
          "Stanford CS144 networking foundations remind us that all inter-datacenter and inter-region communication obeys the speed of light in fiber optic glass (~5ms per 1,000km). Physical distance imposes real latency limits.",
          "Level 1 (Physical): Silicon CPUs, ECC RAM, NVMe drives, Top-of-Rack (ToR) switches, power distribution units (PDUs), cooling towers, and diesel generators.",
          "Level 2 (Infrastructure Abstraction): Hypervisors (KVM/ESXi), Virtual Machines, VPC software-defined networks, Virtual Disks (EBS/Managed Disks), and load balancers.",
          "Level 3 (Application): Web microservices, Docker containers, FaaS functions, managed SQL/NoSQL databases, and distributed caches.",
        ],
        keyPoints: [
          "Cloud is physical computing resources wrapped in a multi-tenant API control plane.",
          "Level 1: Physical hardware (servers, racks, fiber optics, power).",
          "Level 2: Virtualized abstractions (VMs, VPC subnets, hypervisors).",
          "Level 3: Application runtime (containers, APIs, distributed databases).",
          "Systems engineering goal: Never lose sight of the physical constraints beneath virtual abstractions.",
          "Every abstraction leaks under extreme load, partition, or hardware failure.",
        ],
        diagramType: "abstraction-stack",
        architectDecision:
          "When designing a low-latency financial exchange, you cannot treat compute as abstract. You must choose bare-metal or single-tenant Nitro/C2 instances with SR-IOV enhanced networking to avoid hypervisor context switching jitter.",
        interviewQuestions: [
          {
            q: "What does it mean that 'cloud is an abstraction layer'?",
            a: "Cloud software creates virtual representations of compute, memory, disk, and networking. While you interact with JSON APIs and web consoles, underneath the cloud provider automates scheduling, hypervisor provisioning, and physical routing.",
          },
          {
            q: "Why do systems engineers care about the physical level if cloud abstracts it?",
            a: "Because physical laws cannot be abstracted away: speed-of-light networking latency, noisy neighbors competing for shared CPU cache (L3), physical rack power failure, and fiber cuts dictate system availability and latency tails.",
          },
        ],
      },

      {
        id: "datacenter-regions-azs",
        title: "Physical Datacenter, Regions & Availability Zones",
        shortTitle: "2. Datacenters & AZs",
        category: "Physical Infrastructure",
        icon: Building2,
        summary:
          "How physical datacenters combine into Availability Zones and geographic Regions to create isolated failure boundaries.",
        theory: [
          "A Datacenter is a physical building housing thousands of server racks. Inside, servers connect to Top-of-Rack (ToR) switches, powered by dual redundant Power Distribution Units (PDUs), backed by UPS batteries and exterior diesel generators.",
          "An Availability Zone (AZ) consists of one or more discrete datacenters, each with independent power, cooling, and networking. AZs in a region are physically separated by meaningful distance (typically 10 to 60 miles) to prevent shared disaster risk (floods, power grid collapses), yet close enough for ultra-low latency (<2ms round-trip fiber).",
          "A Region is a separate geographic area (e.g., us-east-1 in Virginia, eu-west-1 in Ireland) containing 3 or more isolated AZs. Regions are fully isolated from each other for fault containment and legal compliance (data residency).",
          "Fault Domains: Even inside a single datacenter, servers are organized into fault domains (different server racks sharing the same power supply and switch). Cloud schedulers use this to ensure redundant VMs don't sit on the same physical power strip.",
        ],
        keyPoints: [
          "Datacenter: Physical facility with servers, cooling, ToR switches, and generators.",
          "Availability Zone (AZ): One or more datacenters with independent utility feeds and isolated flood/fire risks.",
          "Region: Geographic territory with multiple low-latency interconnected AZs.",
          "Inter-AZ latency is typically <1-2ms, allowing synchronous database replication.",
          "Inter-Region latency is 30-150ms+, requiring asynchronous replication.",
          "Architecture rule: Deploy across at least 2 or 3 AZs for High Availability (HA).",
        ],
        diagramType: "region-az-topology",
        architectDecision:
          "Never deploy two critical database replicas on two VMs in the same AZ. A single utility transformer explosion or fiber trench digger can take down the entire AZ simultaneously. Always distribute across independent AZs.",
        interviewQuestions: [
          {
            q: "Why can't an Availability Zone just be a different room in the same building?",
            a: "Because physical failure modes like building fires, lightning strikes, localized flooding, or power substation failures would destroy both 'zones' at once. Real AZs are physically separate buildings miles apart.",
          },
          {
            q: "Why don't we do synchronous database replication across regions?",
            a: "Synchronous replication requires waiting for the remote replica to acknowledge every write. At 70ms round-trip across oceans, every database transaction would crawl, causing catastrophic thread contention and latency spikes.",
          },
        ],
      },

      {
        id: "nist-cloud-characteristics",
        title: "NIST 5 Essential Characteristics & Delivery Models",
        shortTitle: "3. NIST Models & IaaS/PaaS/SaaS",
        category: "Cloud Economics & Models",
        icon: Layers,
        summary:
          "The canonical NIST SP 800-145 standard: 5 essential characteristics, 3 service models, and 4 deployment topologies.",
        theory: [
          "NIST defines cloud computing by 5 mandatory characteristics: (1) On-demand self-service (provision without human admin intervention), (2) Broad network access (accessible via standard network mechanisms), (3) Resource pooling (multi-tenant shared hardware dynamically assigned), (4) Rapid elasticity (capabilities elastically provisioned and released), (5) Measured service (metered pay-as-you-go billing).",
          "IaaS (Infrastructure as a Service): Provider manages datacenter, physical servers, hypervisor. You manage OS, patches, runtime, networking rules, and code. Examples: AWS EC2, Azure VMs, Google Compute Engine.",
          "PaaS (Platform as a Service): Provider manages OS, runtime, scaling, hardware. You provide application code and configuration. Examples: AWS Elastic Beanstalk, Azure App Service, Google Cloud Run, Heroku.",
          "SaaS (Software as a Service): Provider manages the entire stack end-to-end. You simply use the software via web or API. Examples: Gmail, Salesforce, Microsoft 365, Slack.",
          "Deployment Models: Public Cloud (multi-tenant hyperscaler infrastructure), Private Cloud (dedicated infrastructure for single organization), Hybrid Cloud (combining on-premises private datacenter with public cloud via VPN/DirectConnect), Multi-Cloud (leveraging two or more public cloud vendors).",
        ],
        keyPoints: [
          "5 NIST Characteristics: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service.",
          "IaaS: Maximum control, maximum operational burden (you patch the Linux kernel).",
          "PaaS: High productivity, developer focuses purely on application code.",
          "SaaS: Zero maintenance, complete turnkey solution.",
          "Hybrid Cloud connects legacy on-prem datacenters with cloud bursting or compliance storage.",
          "Multi-Cloud avoids vendor lock-in but dramatically multiplies operational and networking complexity.",
        ],
        diagramType: "delivery-models-pyramid",
        architectDecision:
          "Choose PaaS (e.g. AWS App Runner or GCP Cloud Run) for standard web APIs to eliminate OS patching toil. Only drop down to IaaS when you require custom Linux kernel modules, custom network drivers, or specialized hardware access.",
        interviewQuestions: [
          {
            q: "What is the difference between simply renting a dedicated server and Cloud Computing?",
            a: "Dedicated hosting lacks on-demand self-service API provisioning, rapid elasticity (scaling up/down in seconds), dynamic resource pooling, and fine-grained per-second measured billing.",
          },
          {
            q: "Why might a company choose Hybrid Cloud instead of 100% Public Cloud?",
            a: "Regulatory requirements (e.g. banking data sovereignty laws requiring on-prem hardware), amortized legacy mainframe capital investments, or ultra-low sub-millisecond local factory hardware integration.",
          },
        ],
      },

      {
        id: "virtualization-hypervisors",
        title: "Virtualization, Hypervisors & Virtual Machines",
        shortTitle: "4. Hypervisors & VMs",
        category: "Virtualization & Compute",
        icon: Cpu,
        summary:
          "How physical silicon is partitioned: Type 1 vs Type 2 hypervisors, vCPU time-slicing, virtual memory, and hardware-assisted virtualization.",
        theory: [
          "Virtualization is the simulation of a hardware platform, operating system, storage device, or network resources. It decouples the operating system from the underlying physical server.",
          "Type 1 Hypervisor (Bare-Metal): Runs directly on physical host hardware without a host OS. Highly efficient with minimal latency. Examples: Linux KVM (used by AWS Nitro and GCP), VMware ESXi, Microsoft Hyper-V.",
          "Type 2 Hypervisor (Hosted): Runs as an application inside a host operating system. Primarily for desktop development. Examples: VirtualBox, VMware Workstation.",
          "vCPUs (Virtual CPUs): A vCPU is a time-sliced thread scheduled on a physical CPU core (or hyper-thread) by the hypervisor scheduler. If a physical host has 64 cores (128 threads), the hypervisor might schedule 250 vCPUs through statistical multiplexing.",
          "Hardware Virtualization: Modern CPUs feature Intel VT-x and AMD-V instruction extensions. They introduce 'root' and 'non-root' privilege rings so the guest OS can execute non-sensitive instructions directly on bare metal at full speed without software trap-and-emulate emulation.",
          "Virtual Memory: Hypervisor maintains Extended Page Tables (EPT / SLAT) translating Guest Virtual Address -> Guest Physical Address -> Host Physical Address.",
        ],
        keyPoints: [
          "Type 1 hypervisors run directly on bare metal (KVM, ESXi); Type 2 runs on top of an OS (VirtualBox).",
          "Modern cloud providers use customized Type 1 hypervisors with hardware offloading (e.g., AWS Nitro cards).",
          "vCPUs are scheduled threads mapped to physical CPU execution pipelines.",
          "Hardware extensions (VT-x, AMD-V, EPT) enable near-native execution speed.",
          "VM Images (AMIs, VHDs) are bootable disk templates; Snapshots capture point-in-time delta blocks.",
          "Advantage: Strong hardware-level security boundaries; Disadvantage: Guest OS memory footprint (~500MB+ per VM).",
        ],
        diagramType: "hypervisor-internals",
        architectDecision:
          "Be aware of 'noisy neighbors' on oversubscribed hypervisors. If another VM on the same physical chip saturates the L3 memory cache or memory bus, your p99 latencies will degrade. Use dedicated host or compute-optimized instance families for predictable performance.",
        interviewQuestions: [
          {
            q: "What is the difference between a Type 1 and Type 2 hypervisor?",
            a: "A Type 1 runs directly on the bare metal with no intermediary OS, providing raw hardware access, lower overhead, and enterprise stability. Type 2 runs as a user process on top of Windows/macOS/Linux, adding another layer of OS scheduling overhead.",
          },
          {
            q: "How does a snapshot differ from a full backup?",
            a: "A snapshot is typically a copy-on-write pointer delta storing only blocks that have changed since the last snapshot. A full backup is an independent copy of all data blocks copied to cold storage.",
          },
        ],
      },

      {
        id: "containers-namespaces-cgroups",
        title: "Containers Under the Hood: Namespaces & cgroups",
        shortTitle: "5. Containers & Isolation",
        category: "Virtualization & Compute",
        icon: Boxes,
        summary:
          "Containers are not mini-VMs. They are isolated Linux host processes constrained by Namespaces and Control Groups (cgroups).",
        theory: [
          "A Virtual Machine packages a full virtual hardware set and a complete Guest OS (kernel + binaries + libraries). A Container packages only the application and its dependencies, sharing the underlying host Linux kernel.",
          "Linux Namespaces provide illusion of isolation (what the process can SEE):",
          "• PID Namespace: Process tree isolation (inside the container, the app is PID 1; outside on host, it's PID 18492).",
          "• NET Namespace: Dedicated network stack, virtual eth0, iptables rules, loopback, and port bindings.",
          "• MNT Namespace: Isolated root filesystem mount point, hiding host disks.",
          "• IPC Namespace: Isolated inter-process communication message queues and shared memory.",
          "• UTS Namespace: Independent hostname and domain name.",
          "• USER Namespace: Maps non-root container UID 0 to an unprivileged host UID for security hardening.",
          "Linux cgroups (Control Groups) provide resource accounting and throttling (what the process can USE): limits maximum CPU quota (e.g. 50% of 1 core), memory cap (e.g. 512MB, triggering OOM killer if breached), disk I/O IOPS, and network bandwidth.",
          "Container Images: Immutable read-only layers stacked using an Overlay2 / Union filesystem, topped with a thin writable container layer.",
        ],
        keyPoints: [
          "Containers are isolated host processes, NOT lightweight virtual machines.",
          "Namespaces govern visibility (isolated PIDs, network interfaces, mounts).",
          "cgroups govern resource consumption (CPU throttling, RAM caps, OOM kills).",
          "Shared kernel: If the host kernel panics, all containers on that host fail.",
          "Startup time: Milliseconds for containers vs tens of seconds for VMs.",
          "Security: Hypervisors provide hardware-assisted boundary; containers share kernel system call surface.",
        ],
        diagramType: "container-vs-vm",
        architectDecision:
          "Never run untrusted, multi-tenant arbitrary customer code inside standard Docker containers because kernel privilege escalation exploits (Dirty COW, container escapes) can compromise the host. Use microVMs (AWS Firecracker, Kata Containers) for multi-tenant isolation.",
        interviewQuestions: [
          {
            q: "Why does a container start in 200 milliseconds while a VM takes 45 seconds?",
            a: "A VM must boot a complete operating system kernel, initialize virtual hardware drivers, run systemd, and mount virtual disks. A container is simply starting a pre-configured process on an already running, warm Linux kernel.",
          },
          {
            q: "What happens when a container exceeds its cgroup memory limit?",
            a: "The Linux kernel Out-Of-Memory (OOM) killer triggers immediately, sending SIGKILL (exit code 137) to the primary process inside that cgroup, killing the container instantly.",
          },
        ],
      },

      {
        id: "serverless-faas",
        title: "Serverless Computing & Functions as a Service (FaaS)",
        shortTitle: "6. Serverless & FaaS",
        category: "Cloud Architectures",
        icon: Zap,
        summary:
          "Event-driven compute with automated scale-to-zero, micro-billing, and cold start trade-offs.",
        theory: [
          "Serverless does NOT mean there are no servers. It means the cloud provider abstracts away all server management, patching, capacity planning, and OS configuration. You pay strictly for execution time (in milliseconds) and memory allocated.",
          "Event-Driven Execution: Functions (AWS Lambda, Google Cloud Functions, Azure Functions) trigger in response to events: an HTTP request via API Gateway, a file upload to S3, a message arriving on an SQS/Kafka queue, or a database record change.",
          "Scale-to-Zero: When no traffic arrives, 0 instances run and you pay $0.00. When 5,000 concurrent requests arrive, the provider instantly spins up 5,000 isolated worker sandboxes.",
          "Cold Starts: When a function is invoked for the first time (or after idling), the provider must allocate a microVM/container, download your code artifact, start the language runtime (JVM, Node, Python), and execute global initialization code. This adds latency (50ms to 2+ seconds).",
          "Subsequent requests hit warm execution environments, executing in single-digit milliseconds.",
        ],
        keyPoints: [
          "Serverless = No server management + automatic scaling + pay-only-for-active-compute + built-in HA.",
          "Event-driven: Invocations triggered by HTTP, queues, storage events, or cron timers.",
          "Cold Start: Initial sandbox creation + runtime boot + dependency loading.",
          "Languages like Rust, Go, and Node.js have negligible cold starts (<100ms); JVM/Spring Boot can take 1.5s+.",
          "Best for: Spiky, unpredictable workloads, asynchronous background jobs, and webhooks.",
          "Worst for: Long-running steady-state compute (>15 mins), low-latency web sockets, ultra-low sub-5ms SLA.",
        ],
        diagramType: "serverless-lifecycle",
        architectDecision:
          "For steady 24/7 high-throughput traffic (e.g. 10,000 requests/sec continuous), Serverless FaaS can become significantly more expensive than running containerized workloads on Kubernetes or ECS spot instances.",
        interviewQuestions: [
          {
            q: "How do you minimize cold start latency in serverless architectures?",
            a: "1) Keep deployment packages minimal. 2) Choose fast-starting runtimes (Node, Python, Go, Rust). 3) Use Provisioned Concurrency to keep instances pre-warmed. 4) Move expensive DB connections outside the handler so they persist across warm invocations.",
          },
          {
            q: "When would a VM be preferable over a serverless function?",
            a: "When running persistent background daemons, workloads requiring persistent local disk cache, complex legacy monolithic apps, or high steady-state compute where FaaS billing per-ms exceeds flat-rate VM pricing.",
          },
        ],
      },

      {
        id: "scalability-elasticity-availability",
        title: "Scalability, Elasticity & High Availability",
        shortTitle: "7. Scalability & Availability",
        category: "Resilience & Systems Engineering",
        icon: Activity,
        summary:
          "Horizontal vs Vertical scaling, Elastic automated capacity, The 'Nines' downtime SLA table, and Single Points of Failure.",
        theory: [
          "Scalability is the capability of a system to handle growing amounts of work by adding resources.",
          "• Vertical Scaling (Scale Up): Adding more CPU, RAM, or NVMe disk to an existing single server. Limited by physical hardware ceilings and requires downtime.",
          "• Horizontal Scaling (Scale Out): Adding more server instances behind a load balancer. Virtually unlimited scale, requires stateless application architecture.",
          "Elasticity is the system's ability to automatically acquire and release computing capacity dynamically in real time to match the live workload demand curve (e.g. Auto Scaling Groups based on CPU or request count).",
          "Scalability vs Elasticity: A system can be scalable (can handle 1 million users if you manually buy 50 servers) without being elastic (it cannot shrink to 2 servers at midnight automatically).",
          "Availability is the percentage of time a system is fully operational and accessible. Measured in 'Nines':",
          "• 99.0% (Two Nines): 3.65 days downtime per year.",
          "• 99.9% (Three Nines): 8.76 hours downtime per year.",
          "• 99.99% (Four Nines): 52.6 minutes downtime per year.",
          "• 99.999% (Five Nines): 5.26 minutes downtime per year.",
          "Single Point of Failure (SPOF): Any individual component whose failure causes the entire system to stop functioning (e.g., a single non-replicated database or lone web server).",
        ],
        keyPoints: [
          "Vertical scaling hits hardware walls; horizontal scaling requires stateless app architecture.",
          "Scalability = capacity to grow; Elasticity = automated real-time matching of capacity to demand.",
          "Availability vs Reliability: Availability = Is it up? Reliability = Does it perform correctly without error?",
          "Every extra '9' of availability exponentially increases infrastructure cost and architectural complexity.",
          "To eliminate SPOFs: use Load Balancers, Multi-AZ compute pools, and active/standby replicated databases.",
        ],
        diagramType: "nines-table",
        architectDecision:
          "To scale web tiers horizontally, store session state in external distributed caches (Redis) or database tables, NEVER in the local web server's local memory.",
        interviewQuestions: [
          {
            q: "Why is 99.999% availability ('five nines') so difficult to achieve?",
            a: "Five nines allows only 5 minutes of downtime in an entire year. That leaves zero time for human operator intervention; failovers, health checks, DNS routing, and database rollbacks must be 100% automated in seconds.",
          },
          {
            q: "Can a system be highly scalable but have low availability?",
            a: "Yes! A cluster can horizontally scale to 500 web instances, but if they all depend on a single, non-replicated MySQL primary database, a single disk crash brings the entire 500-instance system down.",
          },
        ],
      },

      {
        id: "shared-responsibility-model",
        title: "The Cloud Shared Responsibility Model",
        shortTitle: "8. Shared Responsibility",
        category: "Security & Governance",
        icon: Shield,
        summary:
          "Security OF the Cloud vs Security IN the Cloud across IaaS, PaaS, and SaaS delivery tiers.",
        theory: [
          "One of the most catastrophic misconceptions in cloud is assuming 'the cloud provider secures everything.' The Shared Responsibility Model defines strict contractual boundaries.",
          "Security OF the Cloud (Provider Responsibility): Physical datacenter perimeter security, biometric access, HVAC, power generators, physical server hardware, hypervisor integrity, and core global network fiber.",
          "Security IN the Cloud (Customer Responsibility): Customer data encryption (at rest and in transit), IAM users and permissions, operating system security patches (in IaaS), firewall / Security Group rules, database access controls, and application source code vulnerabilities.",
          "Responsibility shifts with service tiers:",
          "• In IaaS (EC2/Azure VM): You patch the Linux OS, configure local firewalls, install security agents, and rotate SSH keys.",
          "• In PaaS (Cloud Run/Beanstalk): Provider patches the OS and language runtime; you secure your app code, secrets, and API access.",
          "• In SaaS (Google Workspace/Salesforce): Provider secures everything down to the application; you only manage user access, passwords, and MFA.",
        ],
        keyPoints: [
          "Provider is responsible for Security OF the Cloud (physical facilities, hardware, hypervisors).",
          "Customer is responsible for Security IN the Cloud (data, IAM roles, network firewalls, OS patching).",
          "IaaS requires you to patch OS kernels and configure iptables/security groups.",
          "PaaS offloads OS and runtime patching to the provider.",
          "Over 95% of cloud security breaches originate from customer misconfigurations (open S3 buckets, overly permissive IAM roles), not cloud hypervisor zero-days.",
        ],
        diagramType: "shared-responsibility-matrix",
        architectDecision:
          "Enforce the Principle of Least Privilege in IAM roles. Never attach AdministratorAccess to an EC2 instance profile or lambda execution role. A compromised web app can compromise your entire AWS account.",
        interviewQuestions: [
          {
            q: "If an EC2 instance is hacked via an unpatched OpenSSL vulnerability, who is responsible?",
            a: "The customer. In IaaS, the cloud provider provides the hardware and hypervisor, but guest OS patching and software maintenance belong 100% to the customer.",
          },
          {
            q: "How does the boundary change when moving from EC2 to AWS Fargate or Lambda?",
            a: "In Fargate and Lambda, the cloud provider assumes responsibility for the underlying OS, hypervisor, runtime patches, and host isolation. The customer is only responsible for the container image code, function logic, and IAM policies.",
          },
        ],
      },

      {
        id: "cross-cloud-mapping",
        title: "Cross-Cloud Mental Mapping (AWS vs Azure vs GCP)",
        shortTitle: "9. AWS vs Azure vs GCP",
        category: "Industry Implementation",
        icon: Workflow,
        summary:
          "Translate concepts across the big three hyperscalers. Core primitives map directly to the same underlying systems architectures.",
        theory: [
          "Senior cloud engineers do not tie their mental models to specific vendor branding. Compute, object storage, software-defined networking, and managed relational databases exist across all three major clouds with equivalent mechanisms.",
          "Virtual Machines: AWS EC2 (Elastic Compute Cloud) ↔ Azure Virtual Machines ↔ Google Compute Engine (GCE). All execute on custom Type 1 hypervisors with fast hardware virtualization.",
          "Object Storage: AWS S3 ↔ Azure Blob Storage ↔ Google Cloud Storage (GCS). Highly durable distributed storage with HTTP REST APIs and cross-region replication.",
          "Virtual Networking: AWS VPC ↔ Azure VNet ↔ Google Cloud VPC (global network). Software-defined overlay networks using VXLAN/Geneve encapsulation.",
          "Serverless FaaS: AWS Lambda ↔ Azure Functions ↔ Google Cloud Functions / Cloud Run.",
          "Relational Databases: AWS RDS / Aurora ↔ Azure SQL Database / Azure Database for PostgreSQL ↔ Google Cloud SQL / Cloud Spanner.",
          "Kubernetes Managed Services: AWS EKS ↔ Azure AKS ↔ Google GKE (Google Kubernetes Engine).",
        ],
        keyPoints: [
          "Core primitives are identical: Virtual Compute, Block Storage, Object Storage, Software-Defined VPC, and IAM.",
          "AWS uses Regional VPCs; GCP uses unique Global VPCs where subnets span across regions automatically.",
          "Azure organizes resources into Resource Groups; AWS uses Accounts and Tagging; GCP uses Projects and Folders.",
          "Understanding the fundamental systems abstraction allows an architect to switch cloud providers in hours.",
        ],
        diagramType: "cross-cloud-matrix-diagram",
        architectDecision:
          "Abstract your deployment manifests using Terraform, OpenTofu, or Pulumi rather than vendor-locked CloudFormation or Bicep templates to make cross-cloud migrations and multi-cloud disaster recovery realistic.",
        interviewQuestions: [
          {
            q: "What is the primary architectural difference between an AWS VPC and a GCP VPC?",
            a: "An AWS VPC is bound to a single AWS Region. A GCP VPC is Global by default; subnets within the same GCP VPC can be placed in different geographic continents and communicate over Google's private global fiber network without peering.",
          },
          {
            q: "How does object storage (S3/Blob/GCS) differ from block storage (EBS/Managed Disks)?",
            a: "Block storage exposes raw sector blocks over iSCSI/NVMe-oF to a single VM operating system for filesystems (ext4/NTFS). Object storage stores unstructured objects (files + metadata) accessed via HTTP REST APIs with infinite scalability.",
          },
        ],
      },

      {
        id: "progressive-labs",
        title: "Hands-on Progression: Labs 1 through 5",
        shortTitle: "10. Hands-on Labs 1–5",
        category: "Practical Engineering",
        icon: Terminal,
        summary:
          "Progressive systems engineering labs: from single VM to load-balanced multi-AZ containerized and serverless architectures.",
        theory: [
          "Real learning requires hands-on verification. Module 1 builds understanding through a strict 5-stage progression:",
          "• Lab 1 — Single VM: Deploy a single Linux VM. Inspect public/private IP addresses, OS process table, open TCP ports, and Security Group firewall ingress rules.",
          "• Lab 2 — Redundancy & Load Balancing: Deploy 2 identical web VMs behind an Application Load Balancer (ALB). Configure HTTP health checks. Terminate VM1 and verify zero-downtime routing to VM2.",
          "• Lab 3 — Multi-Availability Zone Isolation: Relocate VM2 into a separate Availability Zone (AZ2). Simulate a complete AZ blackout and verify regional survival.",
          "• Lab 4 — Containerizing the Workload: Package the web app into a Docker container. Inspect Linux cgroups and namespaces under stress tests.",
          "• Lab 5 — Serverless Event-Driven Migration: Re-architect the API as a Serverless function. Measure cold start vs warm start latencies with simulated load spikes.",
        ],
        keyPoints: [
          "Lab 1 establishes networking, ports, OS, and firewall security fundamentals.",
          "Lab 2 proves horizontal scaling and health-check driven failover.",
          "Lab 3 demonstrates physical failure domain independence across AZs.",
          "Lab 4 teaches process isolation via namespaces and cgroups.",
          "Lab 5 benchmarks FaaS auto-scale to zero and cold start characteristics.",
        ],
        diagramType: "lab-progression",
        architectDecision:
          "Always test failure mechanisms actively during staging. If you don't intentionally pull the plug on instances during chaos drills, your first failover test will occur in production during peak business hours.",
        interviewQuestions: [
          {
            q: "How does an Application Load Balancer determine whether a VM is healthy?",
            a: "The ALB periodically sends HTTP GET requests (e.g. to /healthz) at configured intervals (e.g. every 10s). If the instance fails to return a 200 OK after N consecutive attempts, it is deregistered and traffic is routed elsewhere.",
          },
        ],
      },

      {
        id: "failure-game",
        title: "Interactive 'What If?' Cloud Architect Failure Simulator",
        shortTitle: "11. Failure Game",
        category: "Simulation & Practice",
        icon: ShieldAlert,
        summary:
          "Test your architectural instincts! Respond to live production crises: VM crashes, AZ blackouts, 20x traffic spikes, and database deadlocks.",
        theory: [
          "Systems architecture cannot be mastered purely through theory. You must develop an instinct for failure modes and cascading disasters.",
          "MIT 6.033 emphasizes: 'Systems fail. Good architecture contains failure to localized domains without propagating cascading collapse.'",
          "Play through the interactive scenarios below. Choose the optimal architectural remedy for each production event, evaluate trade-offs, and track your resilience score.",
        ],
        keyPoints: [
          "Event 1: Web VM 1 crashes unexpectedly.",
          "Event 2: Load Balancer receives traffic while VM1 is down.",
          "Event 3: Primary Relational Database server crashes.",
          "Event 4: Complete electrical substation explosion destroys AZ-1.",
          "Event 5: Sudden 20x viral flash-crowd traffic surge.",
          "Event 6: Traffic drops back to normal (Elasticity cost test).",
          "Event 7: Fiber optic cut severs entire cloud region.",
          "Event 8: Hyperscaler control plane API outage (Multi-cloud reality test).",
        ],
        diagramType: "failure-simulator",
        architectDecision:
          "Design every component assuming its downstream dependencies will fail, slow down, or return errors. Always implement timeouts, circuit breakers, and exponential backoff.",
        interviewQuestions: [
          {
            q: "What is cascading failure and how do you prevent it?",
            a: "Cascading failure occurs when one failed component shifts its workload to surviving instances, overloading them and causing them to crash in a domino effect. Prevent it using rate limiting, load shedding, circuit breakers, and over-provisioned headroom.",
          },
        ],
      },

      {
        id: "senior-architect-review",
        title: "Senior Architect Interview & Systems Deep Dive",
        shortTitle: "12. Systems Deep Dive & Q&A",
        category: "Mastery & Review",
        icon: Award,
        summary:
          "Review the core comparisons, the 75 Foundations interview questions, and the advanced MIT 6.033 / Stanford CS144 systems questions.",
        theory: [
          "To graduate from a 'tool user' to a true Cloud Systems Architect, you must understand the deep trade-offs behind every design decision.",
          "Review the 10 canonical architectural comparisons:",
          "1. VM vs Container: Hardware hypervisor isolation vs Shared kernel process isolation.",
          "2. Container vs Serverless: User-managed runtime environment vs Provider-managed event execution.",
          "3. Scalability vs Elasticity: Capability to handle load vs Dynamic automated matching of capacity.",
          "4. Region vs Availability Zone: High-latency geographic boundary vs Low-latency infrastructure failure boundary.",
          "5. Availability vs Reliability: Service is reachable (uptime) vs Service performs intended logic correctly without error.",
          "6. Synchronous vs Asynchronous Replication: Zero RPO with high latency vs Low latency with potential data lag.",
          "7. IaaS vs PaaS: Low-level control with high maintenance vs High velocity with provider opinionation.",
          "8. Public Cloud vs Private Cloud: Infinite elasticity and zero capex vs Complete data sovereignty and high fixed capex.",
          "9. Horizontal vs Vertical Scaling: Stateless distributed instances vs Monolithic scale-up with downtime.",
          "10. High Availability vs Disaster Recovery: Surviving localized hardware failure in minutes vs Surviving catastrophic regional destruction in hours.",
        ],
        keyPoints: [
          "Senior architects speak in trade-offs, SLAs, failure boundaries, and cost implications.",
          "Never start with the tool (e.g. 'We need Kubernetes'). Start with the business and technical requirement.",
          "Business requirement → Technical requirement → Architectural property → Design → Technology choice.",
        ],
        diagramType: "summary-matrix",
        architectDecision:
          "Always quantify the cost of downtime versus the cost of redundancy. A five-nines multi-region active-active architecture costs 5x more to build and operate. Ensure the business case justifies the engineering investment.",
        interviewQuestions: [
          {
            q: "Why can a highly elastic application still have poor availability?",
            a: "If auto-scaling takes 5 minutes to boot new VM instances while traffic spikes in 15 seconds, user requests will timeout and drop before capacity arrives. Elasticity without adequate pre-warmed headroom or queue buffering leads to outages.",
          },
          {
            q: "Why does multi-cloud sometimes make reliability worse rather than better?",
            a: "Multi-cloud forces teams to use lowest-common-denominator tools, introduces complex cross-cloud networking latencies and egress bills, doubles security configuration surface area, and increases human operational error.",
          },
        ],
      },
    ],
    []
  );

  const currentTopic = cloudTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < cloudTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : cloudTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scenarios for the Failure Simulator Game
  const failureScenarios = [
    {
      id: 1,
      title: "Event 1: Application VM 1 Crashes Unexpectedly",
      context:
        "Your system has an Application Load Balancer routing 50/50 traffic to App VM 1 (AZ-1) and App VM 2 (AZ-2). Suddenly, VM 1's physical host experiences memory ECC failure and VM 1 crashes.",
      question: "What happens to live user requests and what architectural mechanism handles this?",
      options: [
        {
          id: "A",
          text: "The whole site crashes because VM 1 cannot respond.",
          verdict: "Incorrect",
          explanation:
            "Because an Application Load Balancer sits in front of redundant instances, a single VM crash does not bring down the entire system.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "ALB detects failed health checks on VM 1, stops routing traffic to it, and routes 100% of traffic to VM 2.",
          verdict: "Correct! Fault Tolerance in Action",
          explanation:
            "The load balancer's continuous HTTP health checks detect failure within seconds, deregister VM 1, and failover all traffic to healthy VM 2. If VM 2 has enough capacity headroom, users experience zero downtime.",
          isCorrect: true,
        },
        {
          id: "C",
          text: "The DNS server immediately updates its IP record to point users directly to VM 2's private IP.",
          verdict: "Incorrect",
          explanation:
            "DNS records point to the Load Balancer, not individual internal VMs. Furthermore, DNS caching TTLs would make DNS failover far too slow (minutes to hours).",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Event 2: Primary Database Node Crashes",
      context:
        "Traffic is flowing through the web tier, but the primary PostgreSQL relational database instance experiences a storage volume failure.",
      question: "If you only have a single standalone DB instance in AZ-1, what is the architectural outcome?",
      options: [
        {
          id: "A",
          text: "Web servers will automatically store data in memory and sync later without errors.",
          verdict: "Incorrect",
          explanation:
            "Standard web servers will throw 500 Internal Server Errors and database connection timeouts. Data cannot be magically stored safely without a persistent replica.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "Complete outage. The single database was a Single Point of Failure (SPOF).",
          verdict: "Correct! SPOF Catastrophe",
          explanation:
            "Having redundant web servers is meaningless if your database is a Single Point of Failure. High availability requires a Multi-AZ standby replica with automated synchronous failover.",
          isCorrect: true,
        },
        {
          id: "C",
          text: "The cloud provider automatically creates a replica with zero data loss in 2 seconds.",
          verdict: "Incorrect",
          explanation:
            "Cloud providers do not automatically provision standby database replicas unless you architect and configure the database service for Multi-AZ replication.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Event 3: Complete Availability Zone (AZ-1) Blackout",
      context:
        "A severe regional construction accident cuts all utility feeds and fiber conduits entering AZ-1. The entire zone goes offline.",
      question: "Which architecture survives this disaster with zero manual intervention?",
      options: [
        {
          id: "A",
          text: "Four VMs running in the same datacenter rack.",
          verdict: "Incorrect",
          explanation:
            "All four VMs belong to the exact same failure domain. When AZ-1 loses power, all four VMs vanish simultaneously.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "Stateless VMs distributed across AZ-1 and AZ-2 behind an ALB, with Multi-AZ Database failover.",
          verdict: "Correct! True Multi-AZ Resiliency",
          explanation:
            "Because AZ-2 has independent power, cooling, and network links, ALB shifts all traffic to AZ-2, and the database automatically promotes its AZ-2 standby to primary.",
          isCorrect: true,
        },
        {
          id: "C",
          text: "A single very large 128-core VM in AZ-1.",
          verdict: "Incorrect",
          explanation:
            "Vertical scaling does not protect against physical infrastructure failure. When the building loses power, even a 1000-core server goes dark.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Event 4: Sudden 20× Flash-Crowd Viral Traffic Surge",
      context:
        "Your e-commerce startup is featured on national TV. Request rate jumps from 500 requests/sec to 10,000 requests/sec in 60 seconds.",
      question: "What is the best architectural strategy to avoid total collapse?",
      options: [
        {
          id: "A",
          text: "Rely solely on standard VM Auto Scaling Groups to boot 30 new VMs in real time.",
          verdict: "Risky: Scale Latency Lag",
          explanation:
            "Standard VM boot, OS initialization, and app deployment takes 3 to 7 minutes. During that lag, your existing VMs will be saturated, causing cascading connection timeouts.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "Pre-scale or use fast-scaling containers/serverless + asynchronous queue decoupling (SQS) + CDN edge caching for static assets.",
          verdict: "Correct! Systems Architecture Mastery",
          explanation:
            "Edge CDNs absorb 80% of static traffic, asynchronous message queues buffer incoming checkout writes safely, and fast-scaling container/FaaS runtimes absorb spikes without dropping requests.",
          isCorrect: true,
        },
        {
          id: "C",
          text: "Immediately double the RAM of the running VMs while they process traffic.",
          verdict: "Impossible in Production",
          explanation:
            "Vertical scaling of a running VM typically requires stopping the instance, changing the instance type, and rebooting—causing total downtime during peak traffic!",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Event 5: Traffic Returns to Normal Baseline",
      context:
        "The TV broadcast ends. Traffic drops back from 10,000 req/s to 500 req/s. You currently have 40 instances running.",
      question: "What cloud characteristic prevents financial waste?",
      options: [
        {
          id: "A",
          text: "Elasticity: Auto-scaling downscales excess instances automatically, stopping per-second billing.",
          verdict: "Correct! True Elasticity",
          explanation:
            "Elasticity works in both directions. True cloud architectures scale down during quiet hours to minimize billing.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Scalability: It keeps all 40 instances running forever just in case.",
          verdict: "Incorrect & Costly",
          explanation:
            "Paying for 40 idle instances 24/7 destroys cloud ROI. That is the definition of over-provisioned waste.",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleGameAnswer = (scenario, option) => {
    const isFirstTry = gameHistory[scenario.id] === undefined;
    setGameSelection(option.id);
    setGameHistory((prev) => ({
      ...prev,
      [scenario.id]: { optionId: option.id, isCorrect: option.isCorrect },
    }));

    if (isFirstTry && option.isCorrect) {
      setGameScore((prev) => prev + 20);
    }
  };

  // Helper to calculate downtime from nines input
  const calculateDowntime = (nines) => {
    const val = parseFloat(nines);
    if (isNaN(val) || val <= 0 || val > 100) return null;
    const unavailabilityFraction = (100 - val) / 100;
    const minutesPerYear = 365.25 * 24 * 60;
    const totalDowntimeMinutes = unavailabilityFraction * minutesPerYear;

    if (totalDowntimeMinutes >= 1440) {
      const days = (totalDowntimeMinutes / 1440).toFixed(2);
      return `${days} days / year`;
    } else if (totalDowntimeMinutes >= 60) {
      const hours = (totalDowntimeMinutes / 60).toFixed(2);
      return `${hours} hours / year`;
    } else if (totalDowntimeMinutes >= 1) {
      const mins = totalDowntimeMinutes.toFixed(2);
      return `${mins} minutes / year`;
    } else {
      const secs = (totalDowntimeMinutes * 60).toFixed(1);
      return `${secs} seconds / year`;
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="cloud"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Cloud AI"
        />

        {/* AI TUTOR ACCORDION DRAWER */}
        {showAiTutor && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Nova AI Cloud Systems Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask doubts about hypervisors, failure domains, multi-AZ resilience, or NIST characteristics.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`cloud-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER - High-end Prepspaces Aesthetic */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Server size={13} />
                <span>Foundations of Systems & Architecture</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                From Physical Datacenter to Cloud Architecture
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                No rote memorization. Built on the systems engineering philosophy of MIT 6.033, Stanford CS144, and Berkeley: understand the abstractions, failure domains, trade-offs, and physical silicon beneath the virtual cloud.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-[#f97316]">12</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Core Sections</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-emerald-400">5</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Hands-on Labs</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-amber-400">8</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Failure Scenarios</div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN INTERACTIVE COURSE CONTAINER */}
        <div className="overflow-hidden rounded-3xl border border-[#e7e3da] bg-white/80 shadow-sm backdrop-blur-xl">
          {/* TOP CONTROLS & MODULE TITLE */}
          <div className="border-b border-[#e7e3da] bg-[#faf8f4]/70 px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ea580c]">
                  Cloud Foundations Masterclass
                </p>
                <h2 className="text-xl md:text-2xl font-black text-[#18181b]">
                  {currentTopic.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-xl border border-[#e7e3da] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-stone-700 shadow-sm">
                  Topic {topicNumber} / {cloudTopics.length}
                </span>

                <span className="rounded-xl border border-orange-200 bg-orange-50 px-3.5 py-1.5 font-mono text-xs font-bold text-[#ea580c] shadow-sm">
                  {currentTopic.category}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
            {/* SIDEBAR NAVIGATION */}
            <aside className="border-b border-[#e7e3da] bg-[#faf8f4]/50 p-4 md:border-b-0 md:border-r">
              <div className="mb-3 px-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Course Modules
                </h3>
              </div>

              <div className="space-y-1.5">
                {cloudTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  const active = selectedTopic === index;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => {
                        setSelectedTopic(index);
                        setActiveTab("theory");
                      }}
                      className={`group flex w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition-all ${
                        active
                          ? "bg-[#f97316] text-white font-bold shadow-[0_4px_16px_rgba(249,115,22,0.25)]"
                          : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-white text-stone-600 border border-[#e7e3da] group-hover:border-orange-300 group-hover:text-[#ea580c]"
                        }`}
                      >
                        <Icon size={15} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-mono text-[10px] ${
                              active ? "text-white/80" : "text-stone-400"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs font-bold truncate">
                            {topic.shortTitle.replace(/^\d+\.\s*/, "")}
                          </span>
                        </div>
                        <span
                          className={`mt-0.5 block text-[10px] truncate ${
                            active ? "text-orange-100" : "text-stone-400"
                          }`}
                        >
                          {topic.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Links to Interactive Tools */}
              <div className="mt-6 border-t border-[#e7e3da] pt-4 px-2 space-y-2">
                <button
                  onClick={() => setSelectedTopic(10)} // Failure Game
                  className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50/70 p-2.5 text-xs font-bold text-red-800 hover:bg-red-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-red-600" />
                    Play Failure Game
                  </span>
                  <span className="rounded-full bg-red-200 px-2 py-0.5 text-[10px]">Playable</span>
                </button>

                <button
                  onClick={() => setSelectedTopic(9)} // Labs
                  className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className="text-emerald-600" />
                    Labs 1–5 Walkthrough
                  </span>
                  <span className="rounded-full bg-emerald-200 px-2 py-0.5 text-[10px]">Hands-on</span>
                </button>
              </div>
            </aside>

            {/* MAIN TOPIC CONTENT AREA */}
            <main className="min-w-0 p-5 md:p-8">
              {/* TOP SUMMARY CARD */}
              <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316] text-white">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800">
                      Core Concept Mental Model
                    </h4>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-800 font-medium">
                      {currentTopic.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE DIAGRAM VIEWER */}
              <div className="mt-6">
                <VisualDiagramComponent
                  type={currentTopic.diagramType}
                  topic={currentTopic}
                  ninesInput={ninesInput}
                  setNinesInput={setNinesInput}
                  calculateDowntime={calculateDowntime}
                  failureScenarios={failureScenarios}
                  gameScenarioIndex={gameScenarioIndex}
                  setGameScenarioIndex={setGameScenarioIndex}
                  gameSelection={gameSelection}
                  handleGameAnswer={handleGameAnswer}
                  gameScore={gameScore}
                  gameHistory={gameHistory}
                  copyCode={copyCode}
                  copiedCodeId={copiedCodeId}
                />
              </div>

              {/* IN-DEPTH THEORY SECTION */}
              <section className="mt-8 rounded-2xl border border-[#e7e3da] bg-white shadow-sm">
                <div className="border-b border-[#e7e3da] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      In-Depth Systems Engineering Theory
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-stone-400">MIT 6.033 & NIST SP 800-145</span>
                </div>

                <div className="space-y-4 px-6 py-6 text-sm md:text-[15px] leading-relaxed text-stone-700">
                  {currentTopic.theory.map((para, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                      <p>{para}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* KEY ARCHITECTURAL TAKEAWAYS */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm overflow-hidden">
                <div
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="flex items-center justify-between border-b border-[#e7e3da] px-6 py-4 cursor-pointer hover:bg-stone-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Key Architectural Principles & Invariants
                    </h3>
                  </div>
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {showDetails && (
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b border-[#e7e3da]">
                    <div className="p-5 space-y-3">
                      {currentTopic.keyPoints.slice(0, 3).map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                          <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 1}`}</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-5 space-y-3">
                      {currentTopic.keyPoints.slice(3).map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                          <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 4}`}</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* REAL-WORLD ARCHITECTURAL DECISION */}
              {currentTopic.architectDecision && (
                <section className="mt-6 rounded-2xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
                  <div className="flex items-center gap-2 text-[#f97316] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Shield size={16} />
                    <span>Senior Architect Decision Rationale</span>
                  </div>
                  <p className="text-sm md:text-[15px] text-stone-300 leading-relaxed">
                    {currentTopic.architectDecision}
                  </p>
                </section>
              )}

              {/* INTERVIEW QUESTIONS ACCORDION */}
              {currentTopic.interviewQuestions && currentTopic.interviewQuestions.length > 0 && (
                <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Technical Interview & Systems Defense Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {currentTopic.interviewQuestions.map((qa, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-[#e7e3da] bg-[#faf8f4]/60 p-4"
                      >
                        <div className="flex items-start gap-2 text-sm font-bold text-stone-900">
                          <span className="text-[#ea580c] font-mono">Q:</span>
                          <span>{qa.q}</span>
                        </div>
                        <div className="mt-2.5 flex items-start gap-2 text-xs md:text-sm leading-relaxed text-stone-600 pl-4 border-l-2 border-orange-300">
                          <span className="text-stone-400 font-mono">A:</span>
                          <span>{qa.a}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* BOTTOM NAVIGATION BUTTONS */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
                <button
                  type="button"
                  onClick={previousTopic}
                  className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-5 py-2.5 text-xs md:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: {selectedTopic === 0 ? "Last Topic" : cloudTopics[selectedTopic - 1].shortTitle}</span>
                </button>

                <button
                  type="button"
                  onClick={nextTopic}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95"
                >
                  <span>Next: {selectedTopic === cloudTopics.length - 1 ? "Overview" : cloudTopics[selectedTopic + 1].shortTitle}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL DIAGRAM COMPONENT DISPATCHER                                        */
/* Rich interactive visual components for every cloud systems topic           */
/* -------------------------------------------------------------------------- */

function VisualDiagramComponent({
  type,
  topic,
  ninesInput,
  setNinesInput,
  calculateDowntime,
  failureScenarios,
  gameScenarioIndex,
  setGameScenarioIndex,
  gameSelection,
  handleGameAnswer,
  gameScore,
  gameHistory,
  copyCode,
  copiedCodeId,
}) {
  switch (type) {
    case "abstraction-stack":
      return <AbstractionStackDiagram />;

    case "region-az-topology":
      return <RegionAzTopologyDiagram />;

    case "delivery-models-pyramid":
      return <DeliveryModelsDiagram />;

    case "hypervisor-internals":
      return <HypervisorInternalsDiagram />;

    case "container-vs-vm":
      return <ContainerVsVmDiagram />;

    case "serverless-lifecycle":
      return <ServerlessLifecycleDiagram />;

    case "nines-table":
      return (
        <NinesCalculatorDiagram
          ninesInput={ninesInput}
          setNinesInput={setNinesInput}
          calculateDowntime={calculateDowntime}
        />
      );

    case "shared-responsibility-matrix":
      return <SharedResponsibilityDiagram />;

    case "cross-cloud-matrix-diagram":
      return <CrossCloudMatrixDiagram />;

    case "lab-progression":
      return <LabsProgressionDiagram copyCode={copyCode} copiedCodeId={copiedCodeId} />;

    case "failure-simulator":
      return (
        <FailureSimulatorGame
          failureScenarios={failureScenarios}
          gameScenarioIndex={gameScenarioIndex}
          setGameScenarioIndex={setGameScenarioIndex}
          gameSelection={gameSelection}
          handleGameAnswer={handleGameAnswer}
          gameScore={gameScore}
          gameHistory={gameHistory}
        />
      );

    case "summary-matrix":
    default:
      return <FinalArchitectureDiagram />;
  }
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL RICH DIAGRAMS                                                   */
/* -------------------------------------------------------------------------- */

function AbstractionStackDiagram() {
  const [activeLevel, setActiveLevel] = useState(1);

  const levels = [
    {
      lvl: 3,
      name: "Level 3: Application Runtime",
      color: "border-orange-300 bg-orange-50/70 text-orange-900",
      accent: "bg-[#ea580c]",
      items: ["Node.js / Go Web API", "Microservices", "Docker Containers", "PostgreSQL / Redis", "Serverless Lambdas"],
      description: "What end-users interact with and what software engineers write. Completely unaware of physical silicon.",
    },
    {
      lvl: 2,
      name: "Level 2: Infrastructure Abstraction (Cloud Control Plane)",
      color: "border-amber-300 bg-amber-50/70 text-amber-900",
      accent: "bg-amber-600",
      items: ["Virtual Machines (vCPUs)", "VPC Subnets & Route Tables", "Virtual Disks (EBS/NVMe)", "Load Balancers (ALB)", "Software-Defined Firewall Rules"],
      description: "Provisioned instantly via REST API. Emulated or scheduled by Type 1 hypervisors and Linux kernel network overlays.",
    },
    {
      lvl: 1,
      name: "Level 1: Physical Reality (Physical Datacenter)",
      color: "border-stone-400 bg-stone-100 text-stone-900",
      accent: "bg-stone-800",
      items: ["Multi-core Intel Xeon/AMD EPYC CPUs", "DDR5 ECC RAM Sticks", "NVMe SSD PCIe Disks", "Top-of-Rack (ToR) 100Gbps Switches", "UPS Batteries & Diesel Generators"],
      description: "Physical atoms subject to heat, thermodynamics, fiber cuts, power substation fires, and speed-of-light propagation delays.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Interactive Systems Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The 3 Levels of Cloud Computing Abstraction
          </h4>
        </div>
        <span className="text-xs text-stone-500">Click a level to inspect</span>
      </div>

      <div className="space-y-3">
        {levels.map((l) => (
          <div
            key={l.lvl}
            onClick={() => setActiveLevel(l.lvl)}
            className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
              activeLevel === l.lvl
                ? `${l.color} shadow-md scale-[1.01]`
                : "border-[#e7e3da] bg-stone-50/50 hover:bg-stone-50 opacity-80"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${l.accent}`} />
                {l.name}
              </span>
              <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/80 border border-stone-200">
                Layer {l.lvl}
              </span>
            </div>

            <p className="text-xs text-stone-600 mb-3">{l.description}</p>

            <div className="flex flex-wrap gap-2">
              {l.items.map((item, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-white/90 border border-stone-200/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-stone-800 shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-orange-950 flex items-center gap-2">
        <Sparkles size={16} className="text-[#f97316] shrink-0" />
        <span>
          <strong>MIT 6.033 Golden Principle:</strong> Cloud engineering is the art of navigating between these three levels when troubleshooting latency spikes, network partitions, and hardware crashes.
        </span>
      </div>
    </div>
  );
}

function RegionAzTopologyDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Geographic & Physical Isolation
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Region vs. Availability Zone Architecture
          </h4>
        </div>
        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-orange-800">
          Independent Failure Domains
        </span>
      </div>

      {/* Cloud Region Outer Box */}
      <div className="rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50/20 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[#ea580c]" />
            <span className="font-bold text-stone-800 text-sm">
              Cloud Region (e.g. us-east-1 • N. Virginia)
            </span>
          </div>
          <span className="font-mono text-[10px] text-stone-500">
            Isolated Geographic Territory
          </span>
        </div>

        {/* 3 AZs Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* AZ 1 */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800">
                AZ-1 (us-east-1a)
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Datacenter Facility A</span>
                <span className="text-[10px] text-stone-500">Dedicated utility substation + UPS</span>
              </div>
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Compute Rack Cluster</span>
                <span className="text-[10px] text-stone-500">App VM 1 & Primary Database</span>
              </div>
            </div>
          </div>

          {/* AZ 2 */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800">
                AZ-2 (us-east-1b)
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Datacenter Facility B (15 miles apart)</span>
                <span className="text-[10px] text-stone-500">Independent power grid + Diesel gen</span>
              </div>
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Compute Rack Cluster</span>
                <span className="text-[10px] text-stone-500">App VM 2 & Standby DB Replica</span>
              </div>
            </div>
          </div>

          {/* AZ 3 */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800">
                AZ-3 (us-east-1c)
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Datacenter Facility C</span>
                <span className="text-[10px] text-stone-500">Independent flood zone & cooling</span>
              </div>
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Compute Rack Cluster</span>
                <span className="text-[10px] text-stone-500">App VM 3 & DB Witness Quorum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Low-latency Private Fiber Bus */}
        <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white/90 border border-orange-200 py-2 text-xs font-mono text-stone-700">
          <Activity size={14} className="text-[#ea580c]" />
          <span>Inter-AZ Private Metro Dark Fiber Interconnect: <strong>&lt; 1.5ms Latency</strong></span>
        </div>
      </div>
    </div>
  );
}

function DeliveryModelsDiagram() {
  const [selectedModel, setSelectedModel] = useState("iaas");

  const models = {
    iaas: {
      title: "IaaS (Infrastructure as a Service)",
      examples: "AWS EC2, Google Compute Engine, Azure VMs",
      youManage: ["Application Code", "Database & Schema", "Language Runtime", "Operating System Patches", "Firewall & Security Groups"],
      providerManages: ["Physical Datacenter", "Electrical & Cooling", "Physical Servers & Racks", "Virtualization & Hypervisor", "Core Fiber Networking"],
      tradeoff: "Maximum operational freedom and kernel configuration; highest manual patching toil.",
    },
    paas: {
      title: "PaaS (Platform as a Service)",
      examples: "AWS Elastic Beanstalk, Google Cloud Run, Azure App Service, Heroku",
      youManage: ["Application Source Code", "Environment Config & Secrets", "Database Schema"],
      providerManages: ["Operating System & Security Patches", "Language Runtime (Node/Python)", "Auto-scaling Provisioning", "Physical Servers & Hypervisors", "Datacenter Facilities"],
      tradeoff: "High developer productivity and zero OS maintenance; opinionated runtime constraints.",
    },
    saas: {
      title: "SaaS (Software as a Service)",
      examples: "Gmail, Google Workspace, Salesforce, Microsoft 365, Slack",
      youManage: ["User Accounts & Permissions", "Access Control & MFA", "Company Data"],
      providerManages: ["Complete Application Code", "Database Backups & Scaling", "Operating Systems", "Runtime & Dependencies", "All Global Hardware"],
      tradeoff: "Turnkey immediate utility with zero infrastructure responsibility; limited customization.",
    },
  };

  const current = models[selectedModel];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            NIST SP 800-145 Service Models
          </span>
          <h4 className="text-base font-bold text-stone-900">
            IaaS vs. PaaS vs. SaaS Responsibility Split
          </h4>
        </div>

        {/* Model Selector Tabs */}
        <div className="flex gap-1.5 rounded-xl bg-stone-100 p-1 border border-stone-200">
          {["iaas", "paas", "saas"].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedModel(m)}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-bold uppercase transition ${
                selectedModel === m
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h5 className="font-bold text-stone-900 text-sm">{current.title}</h5>
        <p className="text-xs text-stone-500 font-mono mt-0.5">Examples: {current.examples}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Customer Responsibility */}
        <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">
          <div className="flex items-center gap-2 mb-3 text-[#ea580c] font-bold text-xs uppercase tracking-wider font-mono">
            <CheckCircle2 size={16} />
            <span>YOU Manage (Customer)</span>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            {current.youManage.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-white/80 border border-orange-200/60 rounded-lg p-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Provider Responsibility */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
          <div className="flex items-center gap-2 mb-3 text-emerald-700 font-bold text-xs uppercase tracking-wider font-mono">
            <Shield size={16} />
            <span>PROVIDER Manages (AWS/Azure/GCP)</span>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            {current.providerManages.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-white/80 border border-emerald-200/60 rounded-lg p-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-stone-100 p-3 text-xs text-stone-700 border border-stone-200 font-medium">
        <strong>Architectural Trade-Off:</strong> {current.tradeoff}
      </div>
    </div>
  );
}

function HypervisorInternalsDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Virtualization Architecture
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Type 1 Bare-Metal Hypervisor vs. Type 2 Hosted
          </h4>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Type 1 */}
        <div className="rounded-2xl border-2 border-orange-300 bg-orange-50/40 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs font-bold text-[#ea580c]">
              Type 1: Bare-Metal (Cloud Standard)
            </span>
            <span className="rounded bg-orange-200 px-2 py-0.5 text-[10px] font-bold text-orange-900">
              KVM / ESXi / Hyper-V
            </span>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-orange-200 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 1</span>
                <span className="text-[10px] text-stone-500">Guest OS + App</span>
              </div>
              <div className="rounded-lg border border-orange-200 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 2</span>
                <span className="text-[10px] text-stone-500">Guest OS + App</span>
              </div>
            </div>

            <div className="rounded-lg bg-[#f97316] text-white p-2.5 text-center text-xs font-bold shadow-xs">
              Type 1 Hypervisor (Runs directly on Silicon)
            </div>

            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Hardware (CPU, RAM, NIC with Intel VT-x)
            </div>
          </div>
          <p className="mt-3 text-[11px] text-stone-600">
            Direct bare-metal access. High throughput, low latency, near-zero CPU overhead. Used in AWS Nitro, Azure, and Google Compute Engine.
          </p>
        </div>

        {/* Type 2 */}
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs font-bold text-stone-700">
              Type 2: Hosted Hypervisor
            </span>
            <span className="rounded bg-stone-200 px-2 py-0.5 text-[10px] font-bold text-stone-800">
              VirtualBox / Workstation
            </span>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-stone-300 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 1</span>
                <span className="text-[10px] text-stone-500">Guest OS</span>
              </div>
              <div className="rounded-lg border border-stone-300 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 2</span>
                <span className="text-[10px] text-stone-500">Guest OS</span>
              </div>
            </div>

            <div className="rounded-lg bg-stone-300 text-stone-800 p-2 text-center text-xs font-bold">
              Type 2 Hypervisor Software
            </div>

            <div className="rounded-lg bg-stone-400 text-stone-900 p-2 text-center text-xs font-bold">
              Host Operating System (Windows / macOS)
            </div>

            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Hardware (CPU, RAM)
            </div>
          </div>
          <p className="mt-3 text-[11px] text-stone-600">
            Double OS layer overhead. Slower I/O and scheduling jitter. Useful for local laptop testing, never for production cloud.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContainerVsVmDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Isolation Mechanics
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Virtual Machine vs. Docker Container Architecture
          </h4>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* VM */}
        <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-4">
          <div className="mb-2 font-mono text-xs font-bold text-stone-800 flex items-center justify-between">
            <span>Virtual Machine (Hardware Isolation)</span>
            <span className="text-[10px] font-bold text-stone-500">Boot: ~30-60s</span>
          </div>

          <div className="space-y-1.5">
            <div className="rounded-lg bg-orange-100 border border-orange-300 p-2 text-center text-xs font-bold text-orange-950">
              App A (Binaries & Libraries)
            </div>
            <div className="rounded-lg bg-amber-100 border border-amber-300 p-2 text-center text-xs font-semibold text-amber-900">
              Guest OS Kernel (Full Linux/Windows) • ~500MB+ RAM
            </div>
            <div className="rounded-lg bg-stone-200 p-2 text-center text-xs font-mono text-stone-700">
              Virtual Hardware (vCPU, vRAM, vNIC)
            </div>
            <div className="rounded-lg bg-[#f97316] text-white p-2 text-center text-xs font-bold">
              Hypervisor (Hardware Virtualization)
            </div>
            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Host Server
            </div>
          </div>
        </div>

        {/* Container */}
        <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-4">
          <div className="mb-2 font-mono text-xs font-bold text-emerald-800 flex items-center justify-between">
            <span>Container (Process Isolation)</span>
            <span className="text-[10px] font-bold text-emerald-600">Boot: ~150ms</span>
          </div>

          <div className="space-y-1.5">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-lg bg-emerald-100 border border-emerald-300 p-2 text-center text-xs font-bold text-emerald-950">
                Container 1 (App A)
              </div>
              <div className="rounded-lg bg-emerald-100 border border-emerald-300 p-2 text-center text-xs font-bold text-emerald-950">
                Container 2 (App B)
              </div>
            </div>

            <div className="rounded-lg bg-emerald-200 border border-emerald-300 p-2 text-center text-xs font-semibold text-emerald-950">
              Docker / containerd Runtime
            </div>

            <div className="rounded-lg bg-stone-300 p-2 text-center text-xs font-bold text-stone-900">
              Shared Host Linux Kernel (Namespaces & cgroups)
            </div>

            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Host Server / Bare-Metal VM
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 text-xs">
        <div className="rounded-xl bg-stone-100 p-3 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Namespaces (What process SEES):</strong>
          PID (process IDs), NET (IP & ports), MNT (filesystems), IPC, UTS (hostname).
        </div>
        <div className="rounded-xl bg-stone-100 p-3 border border-stone-200">
          <strong className="text-stone-900 block mb-1">cgroups (What process USES):</strong>
          CPU quota limits, Memory caps (OOM killer), Disk I/O IOPS limits.
        </div>
      </div>
    </div>
  );
}

function ServerlessLifecycleDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            FaaS Execution Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Cold Start vs. Warm Start Invocation Lifecycle
          </h4>
        </div>
      </div>

      <div className="space-y-4">
        {/* Cold Start Flow */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-red-800 flex items-center gap-1.5">
              <Zap size={14} className="text-red-600" />
              Cold Start (First Request or Scaled-from-Zero)
            </span>
            <span className="font-mono text-xs font-bold text-red-600">~200ms - 2,500ms</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
            <div className="rounded-lg bg-white border border-red-200 p-2">
              <span className="font-mono text-[10px] text-stone-400 block">Step 1</span>
              <span className="font-bold text-stone-800">Download Code</span>
            </div>
            <div className="rounded-lg bg-white border border-red-200 p-2">
              <span className="font-mono text-[10px] text-stone-400 block">Step 2</span>
              <span className="font-bold text-stone-800">Launch MicroVM</span>
            </div>
            <div className="rounded-lg bg-white border border-red-200 p-2">
              <span className="font-mono text-[10px] text-stone-400 block">Step 3</span>
              <span className="font-bold text-stone-800">Init Runtime & DB</span>
            </div>
            <div className="rounded-lg bg-red-100 border border-red-300 p-2">
              <span className="font-mono text-[10px] text-red-600 block">Step 4</span>
              <span className="font-bold text-red-900">Execute Handler</span>
            </div>
          </div>
        </div>

        {/* Warm Start Flow */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-600" />
              Warm Start (Subsequent Concurrent Requests)
            </span>
            <span className="font-mono text-xs font-bold text-emerald-600">&lt; 10ms Latency</span>
          </div>

          <div className="flex items-center justify-between gap-3 text-center text-xs">
            <div className="flex-1 rounded-lg bg-emerald-100 border border-emerald-300 p-3">
              <span className="font-mono text-[10px] text-emerald-700 block">Immediate Execution</span>
              <span className="font-bold text-emerald-950">Execute Handler on Pre-Warmed Sandbox</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NinesCalculatorDiagram({ ninesInput, setNinesInput, calculateDowntime }) {
  const tableData = [
    { nines: "99.0%", name: "Two Nines", maxDowntime: "3.65 days / year", commonIn: "Standard internal dev environments" },
    { nines: "99.9%", name: "Three Nines", maxDowntime: "8.76 hours / year", commonIn: "Single-AZ production applications" },
    { nines: "99.99%", name: "Four Nines", maxDowntime: "52.6 minutes / year", commonIn: "Multi-AZ web architectures with ALB" },
    { nines: "99.999%", name: "Five Nines", maxDowntime: "5.26 minutes / year", commonIn: "Multi-region active-active telecom & finance" },
  ];

  const calculated = calculateDowntime(ninesInput);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Reliability Engineering Calculator
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The High Availability "Nines" & Permissible Downtime
          </h4>
        </div>

        {/* Interactive SLA Input */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-700">Test SLA %:</span>
          <input
            type="number"
            step="0.01"
            min="90"
            max="99.9999"
            value={ninesInput}
            onChange={(e) => setNinesInput(e.target.value)}
            className="w-24 rounded-lg border border-orange-300 bg-orange-50 px-2 py-1 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
      </div>

      {calculated && (
        <div className="mb-5 rounded-xl bg-orange-500 text-white p-4 flex flex-wrap items-center justify-between gap-3 shadow-md">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-orange-200">
              Calculated Permissible Downtime
            </span>
            <div className="text-xl md:text-2xl font-black">{calculated}</div>
          </div>
          <span className="text-xs text-orange-100 max-w-sm">
            At {ninesInput}%, any outage longer than this breaches your legal SLA contract and triggers customer service credits.
          </span>
        </div>
      )}

      {/* Nines Reference Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 font-mono text-stone-500">
              <th className="py-2.5 px-3">Availability</th>
              <th className="py-2.5 px-3">Name</th>
              <th className="py-2.5 px-3">Allowed Downtime / Year</th>
              <th className="py-2.5 px-3">Typical Target Architecture</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-orange-50/30 transition">
                <td className="py-3 px-3 font-mono font-bold text-[#ea580c]">{row.nines}</td>
                <td className="py-3 px-3 font-medium">{row.name}</td>
                <td className="py-3 px-3 font-mono font-bold text-stone-900">{row.maxDowntime}</td>
                <td className="py-3 px-3 text-stone-600">{row.commonIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SharedResponsibilityDiagram() {
  const layers = [
    { name: "Customer Data & Encryption", iaas: "Customer", paas: "Customer", saas: "Customer" },
    { name: "IAM & Access Policies", iaas: "Customer", paas: "Customer", saas: "Customer" },
    { name: "Application Code", iaas: "Customer", paas: "Customer", saas: "Provider" },
    { name: "OS & Security Patches", iaas: "Customer", paas: "Provider", saas: "Provider" },
    { name: "Hypervisor & Virtual Network", iaas: "Provider", paas: "Provider", saas: "Provider" },
    { name: "Physical Servers & Storage", iaas: "Provider", paas: "Provider", saas: "Provider" },
    { name: "Datacenter Power & Facilities", iaas: "Provider", paas: "Provider", saas: "Provider" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Governance & Security Boundaries
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Shared Responsibility Model Matrix
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 font-mono text-stone-500">
              <th className="py-2.5 px-3">Infrastructure Layer</th>
              <th className="py-2.5 px-3 text-center">IaaS (EC2/Azure VM)</th>
              <th className="py-2.5 px-3 text-center">PaaS (Cloud Run/Beanstalk)</th>
              <th className="py-2.5 px-3 text-center">SaaS (M365/Gmail)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {layers.map((l, idx) => (
              <tr key={idx} className="hover:bg-stone-50 transition">
                <td className="py-2.5 px-3 font-bold text-stone-800">{l.name}</td>
                <td className="py-2.5 px-3 text-center">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                      l.iaas === "Customer"
                        ? "bg-orange-100 text-orange-800 border border-orange-200"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {l.iaas}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                      l.paas === "Customer"
                        ? "bg-orange-100 text-orange-800 border border-orange-200"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {l.paas}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                      l.saas === "Customer"
                        ? "bg-orange-100 text-orange-800 border border-orange-200"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {l.saas}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CrossCloudMatrixDiagram() {
  const [filter, setFilter] = useState("all");

  const matrix = [
    { domain: "Compute (VM)", aws: "Amazon EC2", azure: "Azure Virtual Machines", gcp: "Google Compute Engine (GCE)" },
    { domain: "Serverless FaaS", aws: "AWS Lambda", azure: "Azure Functions", gcp: "Google Cloud Functions / Cloud Run" },
    { domain: "Object Storage", aws: "Amazon S3", azure: "Azure Blob Storage", gcp: "Google Cloud Storage (GCS)" },
    { domain: "Block Storage", aws: "Amazon EBS", azure: "Azure Managed Disks", gcp: "Google Persistent Disk" },
    { domain: "Virtual Networking", aws: "Amazon VPC", azure: "Azure Virtual Network (VNet)", gcp: "Google Cloud VPC (Global)" },
    { domain: "Relational DB", aws: "Amazon RDS / Aurora", azure: "Azure SQL Database", gcp: "Google Cloud SQL / Spanner" },
    { domain: "NoSQL Database", aws: "Amazon DynamoDB", azure: "Azure Cosmos DB", gcp: "Google Cloud Firestore / Bigtable" },
    { domain: "Managed Kubernetes", aws: "Amazon EKS", azure: "Azure Kubernetes Service (AKS)", gcp: "Google Kubernetes Engine (GKE)" },
    { domain: "Identity & Access", aws: "AWS IAM", azure: "Microsoft Entra ID (Azure AD)", gcp: "Google Cloud IAM" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Multi-Cloud Rosetta Stone
          </span>
          <h4 className="text-base font-bold text-stone-900">
            AWS vs. Azure vs. Google Cloud Service Mapping
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 font-mono text-stone-500">
              <th className="py-2.5 px-3">System Primitive</th>
              <th className="py-2.5 px-3 font-bold text-amber-700">AWS</th>
              <th className="py-2.5 px-3 font-bold text-blue-700">Microsoft Azure</th>
              <th className="py-2.5 px-3 font-bold text-emerald-700">Google Cloud (GCP)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700 font-mono">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-50 transition">
                <td className="py-3 px-3 font-sans font-bold text-stone-900">{row.domain}</td>
                <td className="py-3 px-3 text-amber-900 font-semibold">{row.aws}</td>
                <td className="py-3 px-3 text-blue-900 font-semibold">{row.azure}</td>
                <td className="py-3 px-3 text-emerald-900 font-semibold">{row.gcp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LabsProgressionDiagram({ copyCode, copiedCodeId }) {
  const [activeLab, setActiveLab] = useState(1);

  const labs = [
    {
      id: 1,
      title: "Lab 1: Single VM Deployment & OS Inspection",
      cli: `# Launch Ubuntu 22.04 VM & inspect OS isolation
curl -s http://169.254.169.254/latest/meta-data/public-ipv4
ps aux --forest # View Linux process hierarchy tree
sudo lsof -i :80 # Verify web server TCP port listener
ip addr show eth0 # View private VPC interface`,
      learnings: [
        "Inspect Linux PID 1 process tree and public vs private IP mapping.",
        "Verify security group firewall ingress rules on port 80/443.",
        "Observe single point of failure: terminating this VM yields 100% downtime.",
      ],
    },
    {
      id: 2,
      title: "Lab 2: Redundant VMs + Application Load Balancer",
      cli: `# Test ALB Round-Robin & Health Check Failover
for i in {1..10}; do
  curl -s http://my-alb-dns-name.amazonaws.com | grep "Server-ID"
  sleep 0.5
done
# Observe traffic alternating between VM 1 and VM 2`,
      learnings: [
        "Configure HTTP health checks (/healthz endpoint).",
        "Observe round-robin routing across healthy pool instances.",
        "Simulate failure by stopping Nginx on VM 1; verify zero downtime on VM 2.",
      ],
    },
    {
      id: 3,
      title: "Lab 3: Multi-Availability Zone Resilience",
      cli: `# Deploy VM 1 into AZ-1 (us-east-1a) and VM 2 into AZ-2 (us-east-1b)
aws ec2 run-instances --subnet-id subnet-az1a --image-id ami-xxxx ...
aws ec2 run-instances --subnet-id subnet-az1b --image-id ami-xxxx ...`,
      learnings: [
        "Isolate workloads into distinct physical failure domains.",
        "Verify inter-AZ network latency (< 1.5ms).",
        "Verify that blacking out AZ-1 maintains 100% regional availability through AZ-2.",
      ],
    },
    {
      id: 4,
      title: "Lab 4: Packaging Application into a Container",
      cli: `# Build lightweight container & inspect Linux cgroups
docker build -t cloud-app:v1 .
docker run -d --name app -p 8080:8080 --cpus="0.5" --memory="256m" cloud-app:v1
# Inspect cgroup memory limit
cat /sys/fs/cgroup/memory/memory.limit_in_bytes`,
      learnings: [
        "Understand that the container shares the host Linux kernel.",
        "Observe cgroup memory enforcement (exceeding 256MB triggers OOM kill).",
        "Compare boot times: 180ms container vs 45s virtual machine.",
      ],
    },
    {
      id: 5,
      title: "Lab 5: Serverless Event-Driven Function & Cold Start Benchmark",
      cli: `# Deploy AWS Lambda / Cloud Run and benchmark cold start
curl -w "Connect: %{time_connect}, StartTransfer: %{time_starttransfer}, Total: %{time_total}\\n" \\
     https://api.mycloud.com/order-checkout`,
      learnings: [
        "Observe scale-to-zero ($0 cost when idle).",
        "Measure cold start latency (initial 800ms) vs warm start latency (8ms).",
        "Identify best use cases: asynchronous webhooks and queue consumers.",
      ],
    },
  ];

  const current = labs[activeLab - 1];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Progressive Systems Curriculum
          </span>
          <h4 className="text-base font-bold text-stone-900">
            5 Hands-On Architecture Labs Walkthrough
          </h4>
        </div>

        {/* Lab selector pills */}
        <div className="flex flex-wrap gap-1.5">
          {labs.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLab(l.id)}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-bold transition ${
                activeLab === l.id
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              Lab {l.id}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <h5 className="font-bold text-stone-900 text-sm">{current.title}</h5>
      </div>

      {/* Code Block */}
      <div className="relative mb-4 overflow-hidden rounded-xl border border-[#27272a] bg-[#18181b] p-4 text-white">
        <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
          <span className="font-mono text-[11px] text-stone-400 flex items-center gap-1.5">
            <Terminal size={13} className="text-[#f97316]" />
            Terminal Commands & Verification
          </span>
          <button
            onClick={() => copyCode(current.cli, `lab-${current.id}`)}
            className="flex items-center gap-1 text-[11px] font-mono text-[#f97316] hover:underline"
          >
            <Copy size={12} />
            {copiedCodeId === `lab-${current.id}` ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
          <code>{current.cli}</code>
        </pre>
      </div>

      {/* Core Architectural Takeaways */}
      <div className="rounded-xl bg-orange-50/60 border border-orange-200 p-4">
        <span className="font-mono text-xs font-bold text-orange-900 block mb-2">
          Key Engineering Objectives & Observations:
        </span>
        <ul className="space-y-1.5 text-xs text-stone-700">
          {current.learnings.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#ea580c] font-bold">•</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FailureSimulatorGame({
  failureScenarios,
  gameScenarioIndex,
  setGameScenarioIndex,
  gameSelection,
  handleGameAnswer,
  gameScore,
  gameHistory,
}) {
  const currentScenario = failureScenarios[gameScenarioIndex];
  const historyForCurrent = gameHistory[currentScenario.id];

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-orange-300 bg-white p-5 md:p-6 shadow-md">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-red-500" />
            Live Crisis Simulator
          </span>
          <h4 className="text-base font-bold text-stone-900">
            "You are the Cloud Architect" Failure Simulation Game
          </h4>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]">
            Score: {gameScore} / 100
          </div>

          <div className="flex gap-1">
            {failureScenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setGameScenarioIndex(idx)}
                className={`h-7 w-7 rounded-lg font-mono text-xs font-bold transition ${
                  gameScenarioIndex === idx
                    ? "bg-[#f97316] text-white"
                    : gameHistory[s.id]
                    ? gameHistory[s.id].isCorrect
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scenario Context Card */}
      <div className="mb-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <h5 className="font-bold text-stone-900 text-sm mb-1">{currentScenario.title}</h5>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{currentScenario.context}</p>
      </div>

      <div className="mb-4">
        <h6 className="font-bold text-stone-900 text-xs md:text-sm">{currentScenario.question}</h6>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {currentScenario.options.map((opt) => {
          const isSelected = historyForCurrent?.optionId === opt.id;
          let btnStyle = "border-stone-200 hover:border-orange-300 bg-white";

          if (isSelected) {
            btnStyle = opt.isCorrect
              ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
              : "border-red-500 bg-red-50 text-red-950 font-bold";
          }

          return (
            <div key={opt.id}>
              <button
                type="button"
                onClick={() => handleGameAnswer(currentScenario, opt)}
                className={`w-full text-left rounded-xl border-2 p-3.5 text-xs md:text-sm transition flex items-start gap-3 ${btnStyle}`}
              >
                <span className="font-mono font-bold text-stone-400">{opt.id}.</span>
                <span className="flex-1">{opt.text}</span>
              </button>

              {/* Feedback when selected */}
              {isSelected && (
                <div
                  className={`mt-2 rounded-lg p-3 text-xs leading-relaxed border ${
                    opt.isCorrect
                      ? "bg-emerald-100/70 border-emerald-300 text-emerald-900"
                      : "bg-red-100/70 border-red-300 text-red-900"
                  }`}
                >
                  <strong className="block mb-1 font-bold">{opt.verdict}</strong>
                  <span>{opt.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation inside game */}
      <div className="mt-5 flex justify-between items-center border-t border-stone-200 pt-4">
        <button
          disabled={gameScenarioIndex === 0}
          onClick={() => setGameScenarioIndex((prev) => prev - 1)}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-bold text-stone-600 disabled:opacity-40"
        >
          Previous Scenario
        </button>

        <span className="font-mono text-xs text-stone-400">
          Scenario {gameScenarioIndex + 1} of {failureScenarios.length}
        </span>

        <button
          disabled={gameScenarioIndex === failureScenarios.length - 1}
          onClick={() => setGameScenarioIndex((prev) => prev + 1)}
          className="rounded-lg bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white shadow-xs disabled:opacity-40"
        >
          Next Scenario
        </button>
      </div>
    </div>
  );
}

function FinalArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Module 1 Capstone Reference Architecture
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Resilient High-Availability Multi-AZ Cloud Stack
          </h4>
        </div>
        <span className="rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 font-mono text-[10px] font-bold">
          99.99% Target SLA
        </span>
      </div>

      {/* Users -> DNS -> ALB */}
      <div className="flex flex-col items-center gap-3">
        <div className="rounded-xl border border-stone-300 bg-stone-100 px-4 py-2 font-mono text-xs font-bold text-stone-800">
          Users & Client Devices (Worldwide)
        </div>

        <div className="text-stone-400 font-mono text-xs">↓ HTTPS (Port 443) via Edge Anycast DNS</div>

        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 px-6 py-2.5 text-center shadow-xs">
          <span className="font-mono text-xs font-black text-[#ea580c] block">
            Application Load Balancer (ALB)
          </span>
          <span className="text-[10px] text-stone-500">Cross-AZ TLS Termination & Health Probes</span>
        </div>

        <div className="text-stone-400 font-mono text-xs">↓ Low-latency internal routing</div>

        {/* Region with 2 AZs */}
        <div className="w-full rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/60 p-4">
          <div className="font-mono text-xs font-bold text-stone-700 mb-3 text-center">
            Cloud Region (VPC with Multi-AZ Subnets)
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* AZ 1 Subnet */}
            <div className="rounded-xl border border-orange-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
                AZ-1 Failure Domain (Subnet A)
              </span>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-2 font-mono">
                  App VM 1 (Containerized Microservice)
                </div>
                <div className="rounded-lg bg-stone-100 p-2 font-mono text-stone-700">
                  Primary Relational Database (Read/Write)
                </div>
              </div>
            </div>

            {/* AZ 2 Subnet */}
            <div className="rounded-xl border border-orange-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
                AZ-2 Failure Domain (Subnet B)
              </span>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-2 font-mono">
                  App VM 2 (Containerized Microservice)
                </div>
                <div className="rounded-lg bg-stone-100 p-2 font-mono text-stone-700">
                  Synchronous Standby DB Replica (Auto-failover)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
