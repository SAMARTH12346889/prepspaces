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
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 3: COMPUTE                                          */
/* Week 5: How Cloud Computing Resources Actually Run Your Applications        */
/* Systems Theory: MIT 6.004 (Computation Structures), CMU 15-440 (Dist. Sys) */
/* -------------------------------------------------------------------------- */

export default function CloudCompute() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Little's Law Calculator State
  const [arrivalRate, setArrivalRate] = useState(5000); // req/sec
  const [latencyMs, setLatencyMs] = useState(150); // ms
  const [headroomPct, setHeadroomPct] = useState(30); // %

  // Compute Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Little's Law Math: L = lambda * W
  const concurrency = useMemo(() => {
    const lambda = parseFloat(arrivalRate) || 0;
    const wSec = (parseFloat(latencyMs) || 0) / 1000;
    const baseConcurrency = Math.ceil(lambda * wSec);
    const withHeadroom = Math.ceil(baseConcurrency * (1 + (parseFloat(headroomPct) || 0) / 100));
    // Assuming 1 standard container handles ~50 concurrent connections
    const containersNeeded = Math.ceil(withHeadroom / 50);
    // Multi-AZ N+1 (2 AZs) needs each AZ to handle total load on failure
    const multiAzContainers = containersNeeded * 2;
    return { baseConcurrency, withHeadroom, containersNeeded, multiAzContainers };
  }, [arrivalRate, latencyMs, headroomPct]);

  const computeTopics = useMemo(
    () => [
      {
        id: "compute-mental-model",
        title: "The Complete Compute Mental Model",
        shortTitle: "1. Compute Mental Model",
        category: "Foundations",
        icon: Cpu,
        summary:
          "Compute is the processing engine of the cloud. Understand how applications execute across VMs, Containers, Serverless, and GPUs, supported by physical CPUs, RAM, and hypervisors.",
        theory: [
          "In cloud computing, 'compute' represents the processing horsepower allocated to execute machine instructions. While cloud platforms market dozens of product names, all compute rests on the same physical foundation: multi-core CPUs, high-speed RAM, local NVMe caches, and hardware accelerators (GPUs).",
          "MIT 6.004 (Computation Structures) teaches us that software execution is a translation hierarchy: High-Level Language (Node/Go/Python) → Operating System Processes & Threads → Machine Instructions (x86-64 / ARM64) → CPU Execution Units (ALU, Registers, L1/L2/L3 Caches).",
          "Cloud compute adapts across three axes:",
          "1. Abstraction: Virtual Machines (full OS control) ↔ Containers (application package density) ↔ Serverless (invocation-level execution).",
          "2. Elasticity: Dynamic scale-out during demand peaks, scale-in during idle troughs.",
          "3. Economics: On-Demand (guaranteed 24/7) ↔ Spot/Preemptible (excess capacity at 70-90% discount with eviction risk) ↔ Reserved/Savings Plans (committed baseline discount).",
          "Never treat compute as isolated CPU cores. Real systems architecture balances CPU, RAM, Network Bandwidth (packets per second), and Storage IOPS simultaneously.",
        ],
        keyPoints: [
          "Compute translates high-level code into physical processor instructions via OS scheduling and hypervisors.",
          "Choose compute model by workload: Legacy/Custom OS → VM; Scalable Microservices → Containers; Event-Driven/Spiky → Serverless; Parallel Math → GPU; Batch → Job Queue + Spot.",
          "The four interconnected resources: CPU, RAM, Storage (IOPS/throughput), and Network (Gbps/PPS).",
          "A server with 32 vCPUs will still stall if network bandwidth or disk I/O saturates.",
        ],
        diagramType: "compute-hierarchy",
        architectDecision:
          "Start your compute selection by identifying whether your workload is CPU-bound, Memory-bound, or I/O-bound before selecting an instance family. Oversizing CPU for an I/O-bound web application wastes thousands of dollars with zero performance gain.",
        interviewQuestions: [
          {
            q: "What does 'compute' encompass in a cloud environment beyond raw CPU?",
            a: "Cloud compute represents the bundled execution environment: CPU processing cores (vCPUs), RAM memory channels and caches, network interface throughput (Gbps and packets per second), and storage attachment bandwidth (EBS IOPS and throughput). A bottleneck in any of these four constraints caps overall application performance.",
          },
        ],
      },

      {
        id: "cpu-cores-threads-vcpus",
        title: "Physical Cores, Hardware Threads & vCPUs",
        shortTitle: "2. Cores, Threads & vCPUs",
        category: "Silicon & Architecture",
        icon: Server,
        summary:
          "Demystifying processor hardware: Physical Cores vs Simultaneous Multithreading (SMT/Hyper-Threading) vs Cloud vCPUs, and x86-64 vs ARM64 (Graviton/Ampere).",
        theory: [
          "One of the most persistent confusions in cloud engineering is assuming 1 vCPU equals 1 physical CPU core. It usually does not.",
          "• Physical CPU Core: An independent hardware execution block containing its own Arithmetic Logic Units (ALUs), Floating-Point Units (FPUs), registers, and L1/L2 hardware caches.",
          "• Hardware Thread (SMT / Hyper-Threading): Modern physical cores can duplicate register sets to expose two logical execution pipelines. While one thread waits on a memory fetch from DRAM, the other thread executes instructions on the ALU.",
          "• vCPU (Virtual CPU): In AWS EC2, Azure VMs, and GCP Compute Engine, 1 vCPU is typically ONE hardware thread of a physical core. Therefore, a 2 vCPU virtual machine is generally running on 1 single physical CPU core with two hyper-threads!",
          "Instruction Set Architectures (ISA):",
          "• x86-64 (Intel Xeon / AMD EPYC): Traditional CISC architecture. Dominates legacy enterprise software and specialized binary libraries.",
          "• ARM64 (AWS Graviton3/4, Azure Cobalt, GCP Tau T2A): Modern RISC architecture. Offers 20–40% superior price-performance, lower power draw, and dedicated physical cores per vCPU without SMT cache contention.",
        ],
        keyPoints: [
          "1 vCPU = 1 hardware thread (hyper-thread) on modern x86 hypervisors, NOT a full physical core.",
          "Compute-intensive or cryptographic workloads that saturate execution pipelines suffer from hyper-threading cache contention.",
          "ARM64 (AWS Graviton, GCP Tau) provides dramatic 20-40% cost and energy savings for Linux workloads.",
          "Cloud schedulers time-slice multiple vCPUs across physical host cores using statistical multiplexing.",
        ],
        diagramType: "cpu-core-thread-diagram",
        architectDecision:
          "Recompile your Go, Java, Python, and Node.js container workloads for ARM64 (AWS Graviton / Azure Cobalt). In 95% of web microservices, switching from x86 to ARM instances yields an immediate 20% cost reduction with identical or superior p99 response times.",
        interviewQuestions: [
          {
            q: "Why can two threads running on the same physical CPU core via Hyper-Threading impact tail latency?",
            a: "Because hardware threads on the same physical core share the same L1 and L2 cache, execution pipelines (ALUs), and memory bus. If Thread A executes heavy vector math, it evicts Thread B's cache lines (noisy neighbor on the same chip), causing L2 cache misses and latency spikes for Thread B.",
          },
        ],
      },

      {
        id: "workload-profiles",
        title: "Workload Profiles: CPU-bound vs Memory-bound vs I/O-bound",
        shortTitle: "3. Workload Profiles",
        category: "Capacity Planning",
        icon: Activity,
        summary:
          "Diagnose workload bottlenecks accurately: CPU-bound, Memory-bound, Storage I/O-bound, and Network-bound compute patterns.",
        theory: [
          "Senior cloud engineers never ask 'What instance size do we need?' without first profiling the workload's resource constraints.",
          "1. CPU-Bound Workloads: The processor runs at 95–100% utilization while memory and network remain low. Examples: video transcoding (FFmpeg), cryptographic hashing, scientific simulation, compiling code. Solution: Scale to Compute-Optimized families (AWS `c7g`, Azure `Fsv2`, GCP `c3`).",
          "2. Memory-Bound Workloads: High RAM consumption or memory bandwidth saturation. Examples: In-memory caches (Redis, Memcached), relational databases (PostgreSQL buffer pools), distributed analytics (Apache Spark), large JVM heaps. Solution: Scale to Memory-Optimized families (AWS `r7g`, Azure `Edsv5`, GCP `m3`).",
          "3. Storage I/O-Bound Workloads: CPU is idle at 10% with high `iowait%`. Disks throttle on IOPS or read/write throughput (MB/s). Examples: Kafka brokers, heavy Cassandra/Elasticsearch indexing. Solution: Storage-Optimized families with local NVMe SSDs (AWS `i4i`, Azure `Lsv3`, GCP `z3`).",
          "4. Network-Bound Workloads: Network packet drops, high connection rates (PPS), or saturated interface bandwidth long before CPU hits 50%. Examples: Reverse proxies (Envoy/Nginx), VPN gateways, real-time video streaming. Solution: Network-optimized instances with 100Gbps EFA / SmartNICs.",
        ],
        keyPoints: [
          "CPU-bound: High computation, minimal I/O → Compute-optimized (C-family).",
          "Memory-bound: Large in-memory dataset, cache hit ratio → Memory-optimized (R-family).",
          "Storage-bound: High `iowait`, disk queue depth → Storage-optimized (I-family with NVMe).",
          "Network-bound: Packet-per-second limits, network interface drops → High-bandwidth instances (C7gn).",
        ],
        diagramType: "bottleneck-diagnostic-tree",
        architectDecision:
          "When an application is slow, check Linux `iowait%` and network interface drops (`ethtool -S`) before upgrading CPU. If `iowait` is 60%, upgrading from 4 cores to 16 cores will do absolutely nothing; you need provisioned IOPS SSDs or read replicas.",
        interviewQuestions: [
          {
            q: "What Linux command-line metrics indicate that a workload is I/O-bound rather than CPU-bound?",
            a: "Running `top` or `vmstat 1` reveals high `%wa` (I/O wait time), while user `%us` and system `%sy` CPU percentages remain low. In `iostat -xz 1`, disk `%util` will approach 100% with high average wait times (`await`) and long request queues (`avgqu-sz`).",
          },
        ],
      },

      {
        id: "vm-machine-families",
        title: "Virtual Machine Architectures & Machine Families",
        shortTitle: "4. VM Families & Control Plane",
        category: "Virtual Machines",
        icon: Building2,
        summary:
          "AWS EC2, Azure VMs, and GCP Compute Engine machine families: General Purpose, Compute, Memory, Storage, Accelerator, and Bare Metal.",
        theory: [
          "Cloud providers organize thousands of server SKUs into standardized Machine Families based on the ratio of RAM to CPU:",
          "• General Purpose (1 vCPU : 4 GB RAM): Balanced compute and memory (AWS `m7g/m7i`, Azure `Dsv5`, GCP `n4`). Ideal starting point for web servers, container nodes, and dev environments.",
          "• Compute Optimized (1 vCPU : 2 GB RAM): High CPU clock speeds, lower memory ratio (AWS `c7g/c7i`, Azure `Fsv2`, GCP `c3`). Ideal for batch jobs, game servers, media encoders.",
          "• Memory Optimized (1 vCPU : 8 GB RAM): Massive memory capacity (AWS `r7g/x2iezn`, Azure `Edsv5/M-series`, GCP `m3`). Ideal for SAP HANA, SQL databases, Redis.",
          "• Storage Optimized: Bundled with low-latency local NVMe SSDs directly attached to the PCIe bus (AWS `i3en/i4i`, Azure `Lsv3`, GCP `z3`).",
          "• Accelerated / GPU: High-density NVIDIA H100/A100/L4 GPUs (AWS `p5/g5`, Azure `NDv5`, GCP `a3`).",
          "Control Plane vs Data Plane in VM Lifecycle:",
          "• Control Plane: When you call `ec2:RunInstances`, the cloud API validates IAM permissions, checks regional quota, queries host capacity placement algorithms, schedules the VM onto a hypervisor host, and attaches virtual network adapters (ENIs) and storage volumes (EBS).",
          "• Data Plane: Once booted, network packets and application requests flow directly through the host hardware and SR-IOV SmartNIC without control plane involvement.",
        ],
        keyPoints: [
          "General Purpose (1:4 ratio), Compute Optimized (1:2 ratio), Memory Optimized (1:8 ratio).",
          "Control plane handles provisioning, lifecycle, and API configuration; data plane executes live traffic.",
          "Bare metal instances bypass the hypervisor entirely for specialized licensing, hypervisor-in-hypervisor nested virtualization, and direct hardware access.",
          "GCP Compute Engine features unique 'Custom Machine Types', allowing architects to define exact custom CPU-to-RAM ratios.",
        ],
        diagramType: "machine-families-grid",
        architectDecision:
          "Remember that Quota ≠ Physical Capacity! Having an approved AWS quota of 50 `p5.48xlarge` GPU instances does NOT guarantee that the cloud provider has 50 physical servers available in that Availability Zone when you click launch. For critical production launches, purchase Capacity Reservations in advance.",
        interviewQuestions: [
          {
            q: "What is the difference between cloud quota and regional capacity?",
            a: "A quota is a soft administrative limit assigned to your cloud account to prevent runaway spending or accidental provisioning. Physical capacity represents the actual available rack servers running in that provider's datacenter. Even with a quota of 100 instances, launching can fail with `InsufficientInstanceCapacity` if the AZ is sold out.",
          },
        ],
      },

      {
        id: "container-scheduling",
        title: "Containers as a Compute Model & Orchestration",
        shortTitle: "5. Containers & Scheduling",
        category: "Modern Compute",
        icon: Boxes,
        summary:
          "Compute density through shared OS kernels. How container orchestrators (Kubernetes, ECS) solve bin-packing, resource requests, limits, affinity, and anti-affinity.",
        theory: [
          "Containers provide high compute density by eliminating the redundant guest operating system kernel overhead of traditional VMs.",
          "Instead of running 50 virtual machines with 50 separate Linux kernels, a containerized cluster runs 50 microservices as isolated Linux processes sharing a pool of 5 large virtual machines.",
          "Container Scheduling & Resource Allocation (CMU 15-440 Distributed Systems Principles):",
          "• Resource Requests: The minimum CPU/RAM guaranteed to the container. Schedulers (Kubernetes / ECS) use requests to perform bin-packing, deciding which node has enough unallocated capacity to place the pod.",
          "• Resource Limits: The maximum CPU/RAM the container is allowed to consume. Enforced by Linux cgroups. If an application exceeds its memory limit, the Linux kernel terminates it immediately with an Out-Of-Memory (OOM, exit code 137) kill.",
          "• Node Affinity & Anti-Affinity: Architectural placement rules. Example: 'Never place two replicas of the Checkout service on the same physical VM or in the same Availability Zone (pod anti-affinity)' ensures high availability across node crashes.",
          "• Overcommit / Statistical Multiplexing: Summing requests across pods allows cloud teams to run at 70–80% cluster hardware utilization compared to 15% on static VMs.",
        ],
        keyPoints: [
          "Containers share the host kernel, enabling 10x higher compute density and sub-second startup.",
          "Resource Requests define scheduling placement; Resource Limits define hard cgroup throttling/OOM caps.",
          "Pod Anti-Affinity spreads container replicas across independent failure domains (nodes, racks, AZs).",
          "Kubernetes and ECS solve the distributed bin-packing problem across heterogeneous compute pools.",
        ],
        diagramType: "container-bin-packing",
        architectDecision:
          "Always set CPU and Memory Requests on every production container. Without requests, the scheduler cannot make intelligent placement decisions, leading to node resource starvation and uncontrolled cascading evictions.",
        interviewQuestions: [
          {
            q: "What happens when a container exceeds its CPU limit versus when it exceeds its Memory limit?",
            a: "When a container exceeds its CPU limit, the Linux kernel CFS scheduler throttles it (it gets fewer CPU cycles, causing latency to increase, but the process stays alive). When it exceeds its Memory limit, Linux cannot throttle physical RAM; the Out-Of-Memory (OOM) killer fires immediately and terminates the container process with SIGKILL.",
          },
        ],
      },

      {
        id: "gpu-accelerated-compute",
        title: "GPU & Accelerated Compute for AI/ML and HPC",
        shortTitle: "6. GPUs & Accelerators",
        category: "Specialized Compute",
        icon: Zap,
        summary:
          "Why GPUs excel at massive parallel matrix operations: CUDA cores, Tensor cores, high-bandwidth VRAM (HBM3), and distributed interconnects (NVLink & InfiniBand).",
        theory: [
          "A CPU is designed for low latency on sequential control logic: heavy branch prediction, deep speculative execution, and large multi-level SRAM caches.",
          "A GPU (Graphics Processing Unit) is designed for massive compute throughput on embarrassingly parallel workloads: thousands of smaller ALU cores executing the same instruction simultaneously across thousands of data points (SIMD / SIMT).",
          "Why Machine Learning Demands GPUs:",
          "• Modern Deep Learning (Transformers, LLMs, Computer Vision) is fundamentally large-scale matrix multiplication: $C = A \\times B$.",
          "• An NVIDIA H100 GPU features over 16,000 CUDA cores and fourth-generation Tensor Cores capable of executing quadrillions of floating-point operations per second (FP8 / FP16).",
          "The Memory & Interconnect Bottleneck:",
          "• High Bandwidth Memory (HBM3): Provides over 3.35 Terabytes/second of memory bandwidth directly on the GPU die, eliminating DRAM bus starvation.",
          "• Distributed Multi-Node GPU Networking: A single GPU cannot hold an entire 70B parameter LLM. Training spans clusters of 1,024+ GPUs. Standard Ethernet is far too slow; distributed training requires NVIDIA NVLink (900 GB/s inter-GPU) and InfiniBand / AWS EFA (Elastic Fabric Adapter) with GPUDirect RDMA.",
        ],
        keyPoints: [
          "CPU = Low-latency sequential execution with branch prediction; GPU = High-throughput parallel matrix computation.",
          "Machine learning operations decompose into billions of simultaneous parallel floating-point multiply-accumulate operations.",
          "GPU High Bandwidth Memory (HBM) feeds parallel cores at terabytes per second.",
          "In distributed ML training, inter-GPU networking (InfiniBand, RoCE, AWS EFA) is as critical as GPU compute speed.",
        ],
        diagramType: "cpu-vs-gpu-architecture",
        architectDecision:
          "Do not use expensive GPU instances for simple web API inference if a smaller CPU model or quantized ONNX runtime can meet your p95 latency SLA. Only reach for GPUs when throughput, batching, and model parameter sizes make CPU execution impossible.",
        interviewQuestions: [
          {
            q: "Why is GPUDirect RDMA (Remote Direct Memory Access) essential for multi-node GPU cluster training?",
            a: "Without RDMA, transferring tensor gradients between GPU 1 on Node A and GPU 2 on Node B requires copying data from GPU VRAM → Host CPU RAM → Kernel Network Stack → NIC → Network → Destination Kernel → Host RAM → Destination VRAM. GPUDirect RDMA allows the NIC to read directly from GPU VRAM across the network with zero CPU copy overhead, slashing latency.",
          },
        ],
      },

      {
        id: "autoscaling-elasticity",
        title: "Autoscaling Architectures: Target Tracking & Predictive Scaling",
        shortTitle: "7. Autoscaling & Elasticity",
        category: "Resilience & Systems Engineering",
        icon: TrendingUp,
        summary:
          "Horizontal elasticity mechanics: Scale-out vs Scale-in, Target Tracking policies (thermostat model), Queue-depth scaling, and Predictive ML capacity forecasting.",
        theory: [
          "Autoscaling is the software-defined engine that converts static compute capacity into rapid elasticity.",
          "Autoscaling Group Core Primitives:",
          "• Minimum Capacity: Baseline safety floor. Ensures the system never scales below what is needed to survive sudden traffic spikes or maintain multi-AZ presence.",
          "• Desired Capacity: Current live target instance count.",
          "• Maximum Capacity: Hard ceiling to prevent runaway billing bugs from spawning thousands of instances.",
          "Scaling Policies & Signals:",
          "1. Target Tracking Scaling: Acts like a digital thermostat. You define a metric target (e.g. 'Maintain average CPU at 60%'). The autoscaler automatically adds or removes instances to keep the metric stable.",
          "2. Step Scaling: Adjusts capacity based on violation severity thresholds (e.g. CPU > 70% → add 2 VMs; CPU > 90% → add 5 VMs immediately).",
          "3. Queue-Depth Scaling: For asynchronous worker fleets, CPU is a lagging indicator. Scale based on SQS/RabbitMQ Backlog per Worker (`QueueDepth / NumberOfInstances`).",
          "4. Predictive Scaling: Uses machine learning on historical 14-day traffic patterns to forecast daily spikes (e.g. 9:00 AM market open) and launches capacity 15 minutes before the traffic arrives.",
          "The Downstream Cascade Danger: Autoscaling your web tier from 5 to 100 instances without scaling your relational database will instantly exhaust database connection pools, crashing the entire platform.",
        ],
        keyPoints: [
          "Target tracking functions like a thermostat, continuously maintaining metric setpoints.",
          "Queue depth is the optimal scaling metric for background workers, not CPU utilization.",
          "Predictive scaling launches capacity ahead of schedule to mitigate VM boot latency lags.",
          "Autoscaling one layer can destroy downstream bottlenecks; always implement connection pooling and rate limiting.",
        ],
        diagramType: "autoscaling-engine",
        architectDecision:
          "Configure asymmetric cooldown periods: make Scale-Out fast (e.g. 60-second cooldown) to aggressively handle incoming surges, but make Scale-In conservative (e.g. 300-second cooldown) to prevent 'flapping' (rapidly terminating instances right before another wave hits).",
        interviewQuestions: [
          {
            q: "Why can CPU utilization be a dangerous or ineffective metric for scaling web API servers?",
            a: "If the application becomes I/O-bound (waiting on a slow database or locked redis cache), threads will block in wait states. CPU utilization will plummet to 15%, causing a CPU-based autoscaler to scale IN (terminate instances) precisely when the system is drowning in queued requests! Concurrency or request latency is a far safer signal.",
          },
        ],
      },

      {
        id: "serverless-vs-containers",
        title: "Serverless vs Containers: The Compute Granularity Shift",
        shortTitle: "8. Serverless vs Containers",
        category: "Modern Compute",
        icon: Workflow,
        summary:
          "Comparing execution models: Virtual Machine (Machine) vs Container (Environment) vs Serverless (Invocation). Cold starts, concurrency limits, and serverless containers.",
        theory: [
          "The evolution of cloud compute is a steady shift in the unit of compute granularity:",
          "• Virtual Machine (AWS EC2 / Azure VM): The unit of compute is a Machine. You manage OS, patching, background daemons, and scale in terms of server nodes.",
          "• Container (AWS EKS / ECS / Azure AKS): The unit of compute is an Application Package. You manage the runtime container image, port bindings, and orchestrator configs.",
          "• Serverless Function (AWS Lambda / Azure Functions): The unit of compute is a single Function Invocation. You manage only code and IAM policies; the provider manages hardware, patching, scaling, and execution sandboxes.",
          "• Serverless Containers (Google Cloud Run / AWS Fargate / Azure Container Apps): The bridge between both worlds. You package a standard Docker container, but the cloud platform executes it serverlessly with scale-to-zero and per-second billing without managing any Kubernetes master or worker nodes.",
          "When Serverless Excels vs When It Fails:",
          "• Excels: Webhooks, asynchronous data pipelines, image transformation on S3 upload, spiky unpredictability.",
          "• Fails: Long-running computational processes (>15 min execution limits), stateful persistent socket connections, constant high-volume 24/7 steady-state compute where per-millisecond billing becomes 3x more expensive than reserved VMs.",
        ],
        keyPoints: [
          "Unit of compute shifts: Machine (VM) → Environment (Container) → Invocation (Serverless FaaS).",
          "Serverless containers (Cloud Run, Fargate) combine container portability with serverless auto-scale to zero.",
          "Cold start latency affects FaaS during initial burst invocations.",
          "For steady 24/7 high-throughput traffic, reserved VMs or container spot fleets are substantially cheaper than FaaS.",
        ],
        diagramType: "compute-granularity-comparison",
        architectDecision:
          "Use Google Cloud Run or AWS Fargate for microservices rather than managing raw EC2 clusters. You eliminate Kubernetes control plane management toil while retaining complete container portability across clouds.",
        interviewQuestions: [
          {
            q: "At what traffic profile does Serverless FaaS become more expensive than running containerized instances?",
            a: "When a service runs at high, continuous, predictable steady-state utilization 24/7 (e.g. sustained 5,000+ requests/second). Because serverless charges a premium for fine-grained per-millisecond billing and managed infrastructure, running flat-rate reserved EC2 instances or spot container clusters becomes 40–70% cheaper at scale.",
          },
        ],
      },

      {
        id: "batch-and-spot-compute",
        title: "Batch Computing & Spot / Preemptible Economics",
        shortTitle: "9. Batch & Spot Compute",
        category: "Cost & Scale",
        icon: BarChart3,
        summary:
          "Massive throughput at 70–90% cost savings: Decoupling interactive from batch workloads, job queues, Spot eviction notices, and fault-tolerant checkpointing.",
        theory: [
          "Interactive workloads care about latency (user waiting for checkout response). Batch workloads care about throughput and completion cost (processing 10 million bank records overnight).",
          "Batch Computing Architecture:",
          "• Job Submitter pushes 100,000 work payloads into an Amazon SQS / Google Cloud Pub/Sub queue.",
          "• Managed Batch Service (AWS Batch, Azure Batch, GCP Batch) monitors queue depth and provisions dynamically sized worker clusters.",
          "• Workers process records in parallel and write results to cloud object storage (S3 / GCS).",
          "Spot / Preemptible Compute Economics:",
          "• Cloud datacenters maintain vast pools of idle server capacity to handle potential customer spikes.",
          "• Cloud providers sell this unused spare capacity as Spot Instances (AWS Spot, Azure Spot, GCP Spot VMs) at up to a 90% discount compared to On-Demand prices!",
          "• The Trade-off: Spot capacity can be reclaimed (evicted) by the cloud provider at any time with only a 2-minute warning (AWS) or 30-second notice (GCP).",
          "The Resilient Spot Architecture Pattern:",
          "• Workloads must be idempotent, checkpointed, and horizontally distributed.",
          "• If Worker #14 is evicted mid-calculation, the message returns to the queue via message visibility timeout and is seamlessly picked up by another worker. Zero data loss!",
        ],
        keyPoints: [
          "Interactive = Latency sensitive; Batch = Throughput & cost sensitive.",
          "Spot compute offers 70-90% discounts by utilizing spare cloud capacity.",
          "Spot instances come with eviction risk (2-minute warning on AWS).",
          "Queue + Container Workers + Spot = The golden architecture for large-scale data processing.",
        ],
        diagramType: "batch-spot-architecture",
        architectDecision:
          "Never run single-node stateful databases on Spot instances! Use Spot for stateless container workers, CI/CD runners, rendering farms, and queue-drained background processors where instance interruption causes zero downtime.",
        interviewQuestions: [
          {
            q: "How does a distributed batch processing architecture ensure that no work is lost when a Spot VM is evicted?",
            a: "By using an asynchronous message queue with a visibility timeout (e.g. AWS SQS). A worker pulls a message and begins processing, but does not delete it. If the Spot VM is abruptly terminated, the visibility timeout expires and the queue automatically re-delivers the job to a healthy surviving worker. The processing logic must be idempotent.",
          },
        ],
      },

      {
        id: "capacity-planning-littles-law",
        title: "Compute Capacity Planning & Little's Law",
        shortTitle: "10. Capacity Planning",
        category: "Capacity Planning",
        icon: Gauge,
        summary:
          "Scientific systems sizing: Little's Law (L = λW), benchmarking instance throughput, headroom safety margins, and multi-AZ N+1 failure capacity.",
        theory: [
          "Capacity planning is the discipline of estimating compute requirements based on mathematical modeling rather than guesswork.",
          "Little's Law (Operations Research & Queuing Theory):",
          "Formula: L = λ × W",
          "• L = Average number of concurrent requests in the system.",
          "• λ (Lambda) = Arrival rate (requests per second).",
          "• W = Average service time (latency in seconds).",
          "Example: An API receives 10,000 requests/sec with an average processing latency of 100ms (0.1s):",
          "Concurrency L = 10,000 × 0.1 = 1,000 concurrent requests in flight at any given instant!",
          "Translating Concurrency into Compute Sizing:",
          "1. Benchmark Single Instance: Load test one VM. Suppose 1 VM handles 100 concurrent requests at 60% CPU with acceptable p95 latency.",
          "2. Raw Baseline: 1,000 concurrent requests ÷ 100 = 10 instances required.",
          "3. Headroom Safety Margin: Add 30% headroom to absorb sudden micro-bursts without latency degradation: 10 × 1.3 = 13 instances.",
          "4. Multi-AZ Failure Survival (N+AZ): If capacity is split evenly across AZ-A (7 instances) and AZ-B (7 instances), the loss of AZ-A leaves only 7 instances, violating your 13-instance baseline! To survive an entire AZ outage at peak traffic, you must provision 13 instances in AZ-A and 13 instances in AZ-B (or use fast target tracking autoscaling with aggressive scale-out).",
        ],
        keyPoints: [
          "Little's Law: Concurrency (L) = Arrival Rate (λ) × Average Latency (W).",
          "Never size servers for 100% CPU utilization; keep average load at 50-65% to absorb micro-bursts.",
          "N+1 / N+AZ planning guarantees system survival when an entire server rack or datacenter fails.",
          "Always benchmark real application performance under load; synthetic CPU specs do not account for software locks or GC pauses.",
        ],
        diagramType: "littles-law-calculator",
        architectDecision:
          "Always test your capacity plan under realistic database latency conditions. If your external payment gateway or database slows down from 50ms to 500ms during peak sales, Little's Law dictates that concurrent in-flight requests will multiply by 10x, requiring 10x more server threads and memory to prevent thread pool exhaustion!",
        interviewQuestions: [
          {
            q: "Using Little's Law, what happens to system concurrency if incoming traffic stays constant at 5,000 RPS, but database latency doubles from 100ms to 200ms?",
            a: "Concurrency doubles from 500 requests in flight (5,000 × 0.1s) to 1,000 requests in flight (5,000 × 0.2s). Web server worker threads and socket connections remain occupied twice as long, leading to connection pool exhaustion and thread starvation unless the server pool expands.",
          },
        ],
      },

      {
        id: "cross-cloud-compute-matrix",
        title: "Cross-Cloud Compute Matrix: AWS vs Azure vs GCP",
        shortTitle: "11. AWS vs Azure vs GCP Compute",
        category: "Industry Implementation",
        icon: Workflow,
        summary:
          "Direct comparison of compute primitives: EC2 vs Azure VMs vs GCE; Auto Scaling vs VMSS vs MIG; Lambda vs Azure Functions vs Cloud Run.",
        theory: [
          "Senior cloud engineers look past proprietary vendor marketing names to evaluate equivalent compute capabilities:",
          "• Virtual Machine Services: AWS EC2 ↔ Azure Virtual Machines ↔ Google Compute Engine (GCE). All execute on custom hypervisors (AWS Nitro KVM, Azure Hyper-V, Google KVM).",
          "• Managed Scaling Groups: AWS EC2 Auto Scaling Groups (ASG) ↔ Azure Virtual Machine Scale Sets (VMSS) ↔ Google Cloud Managed Instance Groups (MIG).",
          "• Serverless Containers: AWS Fargate ↔ Azure Container Apps ↔ Google Cloud Run. Run containers without managing underlying VM nodes.",
          "• Serverless Functions (FaaS): AWS Lambda ↔ Azure Functions ↔ Google Cloud Functions / Cloud Run.",
          "• Managed Batch: AWS Batch ↔ Azure Batch ↔ Google Cloud Batch.",
          "• Spot Compute: AWS Spot Instances ↔ Azure Spot VMs ↔ Google Cloud Spot VMs.",
          "Key Strategic Differences:",
          "• AWS: Widest variety of specialized silicon (Graviton ARM, Inferentia, Trainium).",
          "• Azure: Tightest enterprise hybrid integration with Windows Server, Active Directory, and Azure Arc.",
          "• Google Cloud: Exceptional container and Kubernetes tooling (GKE is the gold standard), unique custom VM configurations (mix exact vCPU and RAM), and industry-leading TPU AI accelerators.",
        ],
        keyPoints: [
          "Core compute primitives are functionally identical across AWS, Azure, and Google Cloud.",
          "AWS features deep proprietary silicon customization (Nitro, Graviton3/4).",
          "Azure excels in enterprise Windows and hybrid management.",
          "Google Cloud excels in custom VM sizing, Kubernetes (GKE), and TPUs.",
        ],
        diagramType: "cross-cloud-compute-table",
        architectDecision:
          "Architect your workloads to run in OCI-compliant container images (Docker / containerd). A containerized application can move between AWS ECS, Azure Container Apps, and GCP Cloud Run in minutes with zero code changes.",
        interviewQuestions: [
          {
            q: "How does Google Compute Engine's custom machine configuration differ from AWS EC2 instance sizing?",
            a: "AWS requires selecting from fixed pre-packaged instance types (e.g. `m6i.xlarge` with 4 vCPUs and 16 GB RAM). GCE allows developers to create custom machine types (e.g. 6 vCPUs and 11 GB RAM on N-series), optimizing costs for workloads whose resource ratios do not fit standard cloud packages.",
          },
        ],
      },

      {
        id: "compute-failure-game",
        title: "Interactive Compute Crisis & Architecture Game",
        shortTitle: "12. Compute Crisis Game",
        category: "Simulation & Practice",
        icon: ShieldAlert,
        summary:
          "Play the Cloud Compute Architect Crisis Game: Respond to 8 production events (traffic doubling, 10x surges, VM crashes, database saturation, 10M batch spikes, GPU allocation).",
        theory: [
          "Test your systems engineering instincts under real production fire!",
          "Remember the Golden Rule of Systems Architecture: 'When you scale compute, the bottleneck always moves downstream to the database, the network, or locks.'",
          "Play through the interactive scenarios below. Evaluate trade-offs between vertical scaling, horizontal autoscaling, queue decoupling, and spot interruption recovery.",
        ],
        keyPoints: [
          "Event 1: Traffic doubles unexpectedly.",
          "Event 2: Traffic jumps 10x viral surge.",
          "Event 3: Primary VM crashes.",
          "Event 4: Database becomes saturated bottleneck.",
          "Event 5: 10 million background jobs arrive.",
          "Event 6: AI training demands 64 GPUs.",
          "Event 7: Interruptible workload cost optimization.",
          "Event 8: Spot workers evicted mid-job.",
        ],
        diagramType: "compute-game-simulator",
        architectDecision:
          "Always design every compute workload assuming instances can disappear without warning. By treating servers as disposable cattle rather than irreplaceable pets, your systems become inherently resilient.",
        interviewQuestions: [
          {
            q: "What is the 'cattle vs pets' philosophy in cloud compute architecture?",
            a: "'Pets' are individual, carefully nurtured servers given unique names, manual configurations, and lovingly patched; their failure causes downtime. 'Cattle' are identical, disposable, automated instances referenced by numbers; when a sick instance fails, the autoscaler terminates it and boots a fresh replacement automatically without human intervention.",
          },
        ],
      },
    ],
    []
  );

  const currentTopic = computeTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < computeTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : computeTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 8 Compute Game Scenarios
  const computeGameScenarios = [
    {
      id: 1,
      title: "Event 1: User Traffic Doubles in 10 Minutes",
      context:
        "Your e-commerce application is running on two 4-vCPU virtual machines behind an Application Load Balancer. CPU utilization jumps from 40% to 80%.",
      question: "What is the best architectural move to handle this sustained increase?",
      options: [
        {
          id: "A",
          text: "Stop both running VMs, resize them to 8 vCPUs (vertical scale), and reboot them.",
          verdict: "Incorrect & Causes Downtime",
          explanation:
            "Vertical scaling of running VMs typically requires stopping instances and rebooting, which causes immediate downtime during peak business hours!",
          isCorrect: false,
        },
        {
          id: "B",
          text: "Trigger horizontal scale-out: The Auto Scaling Group launches two additional 4-vCPU instances behind the load balancer.",
          verdict: "Correct! Stateless Horizontal Scaling",
          explanation:
            "Horizontal scaling adds capacity dynamically with zero downtime. Traffic distributes across all 4 VMs, bringing average CPU load back to a healthy 40%.",
          isCorrect: true,
        },
      ],
    },
    {
      id: 2,
      title: "Event 2: Flash-Crowd Viral Surge (Traffic Jumps 10×)",
      context:
        "A celebrity tweets about your product. Request rate skyrockets from 2,000 RPS to 20,000 RPS in 45 seconds.",
      question: "Why might standard VM autoscaling lag and drop requests during this sudden spike?",
      options: [
        {
          id: "A",
          text: "VM boot, OS initialization, and application startup take 3 to 7 minutes to provision.",
          verdict: "Correct! Cold Boot Latency Lag",
          explanation:
            "Full virtual machines take minutes to boot and pass health checks. During that lag, existing VMs become overwhelmed. Pre-warmed headroom, fast container scaling (ECS/Cloud Run), or queue buffering are required for flash surges.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "The cloud provider automatically disables autoscaling during traffic spikes.",
          verdict: "Incorrect",
          explanation: "Cloud providers do not disable autoscaling; the delay is purely physical OS and application initialization time.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Event 3: Application Server VM1 Experiences Hardware Failure",
      context:
        "The physical motherboard hosting VM1 suffers a component failure. VM1 stops responding.",
      question: "What architectural mechanism detects and resolves this automatically?",
      options: [
        {
          id: "A",
          text: "The Load Balancer health check marks VM1 unhealthy, and the Auto Scaling Group terminates VM1 and launches a healthy replacement.",
          verdict: "Correct! Automated Self-Healing",
          explanation:
            "The ALB routes 100% of user traffic to VM2 within seconds. The Auto Scaling Group detects that current capacity (1) is less than desired capacity (2) and automatically provisions a new replacement VM.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "The cloud provider physically replaces the server motherboard in 10 seconds without rebooting.",
          verdict: "Incorrect",
          explanation: "Hardware repair takes hours. The software control plane replaces the instance on a different healthy physical host.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Event 4: Downstream Database Saturated Bottleneck",
      context:
        "Your web servers autoscale from 10 to 80 instances. Suddenly, user requests begin timing out with HTTP 500 errors across all 80 instances.",
      question: "What is the primary architectural cause?",
      options: [
        {
          id: "A",
          text: "The 80 web instances exhausted the relational database connection pool, locking the database.",
          verdict: "Correct! The Downstream Cascade Trap",
          explanation:
            "Autoscaling web servers simply shifts the bottleneck downstream. 80 instances opening hundreds of database connections caused connection pool exhaustion and lock contention. Connection pooling (RDS Proxy) and read caching (Redis) are essential.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "The web servers ran out of physical hard disk space.",
          verdict: "Incorrect",
          explanation: "Stateless web servers rarely run out of disk space during traffic spikes; database connection limits are the canonical culprit.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Event 5: 10 Million Nightly Image Resizing Jobs Arrive",
      context:
        "At midnight, your application must process and resize 10 million catalog images. The operation must finish before 6:00 AM.",
      question: "Which compute architecture is most cost-effective and resilient?",
      options: [
        {
          id: "A",
          text: "Resize images synchronously on the user-facing web servers as requests arrive.",
          verdict: "Disastrous Architecture",
          explanation: "Processing 10 million heavy CPU image jobs on user-facing web servers will saturate CPU and crash live customer checkout traffic!",
          isCorrect: false,
        },
        {
          id: "B",
          text: "Asynchronous SQS Queue + AWS Batch / Container Workers running on Spot Instances.",
          verdict: "Correct! Workload Isolation & 80% Cost Savings",
          explanation:
            "Separating batch from interactive traffic prevents outages. Using Spot instances saves 70–90% on compute costs for interruptible batch processing.",
          isCorrect: true,
        },
      ],
    },
    {
      id: 6,
      title: "Event 6: Spot Worker Evicted Mid-Calculation",
      context:
        "A Spot worker processing a 500MB video transcoding job receives a 2-minute interruption notice from the cloud provider.",
      question: "What design ensures the job completes without corrupting data?",
      options: [
        {
          id: "A",
          text: "The job periodically checkpoints progress to S3; when interrupted, the SQS message visibility expires and a new Spot worker resumes from the checkpoint.",
          verdict: "Correct! Fault-Tolerant Idempotency",
          explanation:
            "Because the architecture anticipated interruption, the job was retryable and checkpointed. The workload tolerated physical host reclamation with zero data loss.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Cancel the entire 10-million job pipeline and send error emails to customers.",
          verdict: "Incorrect",
          explanation: "A well-architected cloud system expects failure and recovers automatically.",
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
      setGameScore((prev) => prev + 15);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-amber-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="compute"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Compute AI"
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
                    Nova AI Cloud Compute Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about vCPU scheduling, Little's Law, GPU interconnects, Spot eviction handling, or EC2 vs GCE machine types.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`compute-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Cpu size={13} />
                <span>How Compute Resources Actually Run Applications</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Virtual Machines, Containers, GPUs & Autoscaling
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                Where does the code actually run? Master processor cores vs vCPUs, workload profiling (CPU vs Memory vs I/O bound), container scheduling, GPU matrix acceleration, Spot economics, Little's Law capacity planning, and deep cross-cloud architecture.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-[#f97316]">12</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Core Sections</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-emerald-400">L = λW</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Little's Law</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-amber-400">8</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Labs & Scenarios</div>
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
                  Cloud Compute Masterclass
                </p>
                <h2 className="text-xl md:text-2xl font-black text-[#18181b]">
                  {currentTopic.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-xl border border-[#e7e3da] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-stone-700 shadow-sm">
                  Topic {topicNumber} / {computeTopics.length}
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
                  Compute Topics
                </h3>
              </div>

              <div className="space-y-1.5">
                {computeTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  const active = selectedTopic === index;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(index)}
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

              {/* Quick links */}
              <div className="mt-6 border-t border-[#e7e3da] pt-4 px-2 space-y-2">
                <button
                  onClick={() => setSelectedTopic(11)} // Compute Failure Game
                  className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50/70 p-2.5 text-xs font-bold text-red-800 hover:bg-red-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-red-600" />
                    Play Crisis Game
                  </span>
                  <span className="rounded-full bg-red-200 px-2 py-0.5 text-[10px]">Game</span>
                </button>

                <button
                  onClick={() => setSelectedTopic(9)} // Capacity Planning & Little's Law
                  className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Gauge size={14} className="text-emerald-600" />
                    Little's Law Tool
                  </span>
                  <span className="rounded-full bg-emerald-200 px-2 py-0.5 text-[10px]">Math</span>
                </button>
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="min-w-0 p-5 md:p-8">
              {/* SUMMARY CARD */}
              <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316] text-white">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800">
                      Core Compute Architecture Invariant
                    </h4>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-800 font-medium">
                      {currentTopic.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* VISUAL DIAGRAM / CALCULATOR */}
              <div className="mt-6">
                <VisualComputeDiagram
                  type={currentTopic.diagramType}
                  topic={currentTopic}
                  arrivalRate={arrivalRate}
                  setArrivalRate={setArrivalRate}
                  latencyMs={latencyMs}
                  setLatencyMs={setLatencyMs}
                  headroomPct={headroomPct}
                  setHeadroomPct={setHeadroomPct}
                  concurrency={concurrency}
                  computeGameScenarios={computeGameScenarios}
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
                      In-Depth Systems & Compute Theory
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-stone-400">MIT 6.004 & CMU 15-440</span>
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

              {/* KEY PRINCIPLES */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm overflow-hidden">
                <div
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="flex items-center justify-between border-b border-[#e7e3da] px-6 py-4 cursor-pointer hover:bg-stone-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Compute Invariants & Key Architectural Rules
                    </h3>
                  </div>
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {showDetails && (
                  <div className="p-6 space-y-3 border-b border-[#e7e3da]">
                    {currentTopic.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 1}`}</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* SENIOR ARCHITECT DECISION */}
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

              {/* TECHNICAL INTERVIEW QUESTIONS */}
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

              {/* BOTTOM NAVIGATION */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
                <button
                  type="button"
                  onClick={previousTopic}
                  className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-5 py-2.5 text-xs md:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: {selectedTopic === 0 ? "Last Topic" : computeTopics[selectedTopic - 1].shortTitle}</span>
                </button>

                <button
                  type="button"
                  onClick={nextTopic}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95"
                >
                  <span>Next: {selectedTopic === computeTopics.length - 1 ? "Overview" : computeTopics[selectedTopic + 1].shortTitle}</span>
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
/* VISUAL COMPUTE DIAGRAM DISPATCHER                                          */
/* -------------------------------------------------------------------------- */

function VisualComputeDiagram({
  type,
  topic,
  arrivalRate,
  setArrivalRate,
  latencyMs,
  setLatencyMs,
  headroomPct,
  setHeadroomPct,
  concurrency,
  computeGameScenarios,
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
    case "compute-hierarchy":
      return <ComputeHierarchyDiagram />;

    case "cpu-core-thread-diagram":
      return <CpuCoreThreadDiagram />;

    case "bottleneck-diagnostic-tree":
      return <BottleneckDiagnosticTree />;

    case "machine-families-grid":
      return <MachineFamiliesGrid />;

    case "container-bin-packing":
      return <ContainerBinPackingDiagram />;

    case "cpu-vs-gpu-architecture":
      return <CpuVsGpuArchitectureDiagram />;

    case "autoscaling-engine":
      return <AutoscalingEngineDiagram />;

    case "compute-granularity-comparison":
      return <ComputeGranularityDiagram />;

    case "batch-spot-architecture":
      return <BatchSpotArchitectureDiagram />;

    case "littles-law-calculator":
      return (
        <LittlesLawCalculatorDiagram
          arrivalRate={arrivalRate}
          setArrivalRate={setArrivalRate}
          latencyMs={latencyMs}
          setLatencyMs={setLatencyMs}
          headroomPct={headroomPct}
          setHeadroomPct={setHeadroomPct}
          concurrency={concurrency}
        />
      );

    case "cross-cloud-compute-table":
      return <CrossCloudComputeTable />;

    case "compute-game-simulator":
    default:
      return (
        <ComputeGameSimulator
          computeGameScenarios={computeGameScenarios}
          gameScenarioIndex={gameScenarioIndex}
          setGameScenarioIndex={setGameScenarioIndex}
          gameSelection={gameSelection}
          handleGameAnswer={handleGameAnswer}
          gameScore={gameScore}
          gameHistory={gameHistory}
        />
      );
  }
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL VISUAL DIAGRAMS                                                 */
/* -------------------------------------------------------------------------- */

function ComputeHierarchyDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Execution Stack
          </span>
          <h4 className="text-base font-bold text-stone-900">
            How Code Translates to Silicon Execution
          </h4>
        </div>
      </div>

      <div className="space-y-3 font-mono text-xs">
        <div className="rounded-xl border border-orange-300 bg-orange-50/70 p-3 flex items-center justify-between">
          <span className="font-bold text-[#ea580c]">1. Application Code (JavaScript / Go / Python)</span>
          <span className="text-[10px] text-stone-500">Node.js V8 / Go Runtime</span>
        </div>

        <div className="rounded-xl border border-blue-300 bg-blue-50/70 p-3 flex items-center justify-between">
          <span className="font-bold text-blue-800">2. OS Thread & Process Scheduler</span>
          <span className="text-[10px] text-stone-500">Linux CFS / systemd</span>
        </div>

        <div className="rounded-xl border border-purple-300 bg-purple-50/70 p-3 flex items-center justify-between">
          <span className="font-bold text-purple-800">3. Hypervisor Scheduling (vCPU Time-Slicing)</span>
          <span className="text-[10px] text-stone-500">KVM / AWS Nitro / Hyper-V</span>
        </div>

        <div className="rounded-xl border-2 border-stone-800 bg-[#18181b] p-3 text-white flex items-center justify-between">
          <span className="font-bold text-emerald-400">4. Physical CPU Execution Units (ALU, Registers, L1/L2 Cache)</span>
          <span className="text-[10px] text-stone-400">Intel Xeon / AMD EPYC / Graviton ARM</span>
        </div>
      </div>
    </div>
  );
}

function CpuCoreThreadDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Hardware Architecture
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Physical Core vs SMT Hardware Thread vs Cloud vCPU
          </h4>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-stone-300 bg-stone-50 p-4">
        <span className="font-mono text-xs font-bold text-stone-700 block mb-2">
          Physical CPU Socket (e.g. 64 Physical Cores)
        </span>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Core 1 */}
          <div className="rounded-xl border-2 border-orange-300 bg-white p-4">
            <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
              Physical Core 01 (Hardware ALU + L1/L2 Cache)
            </span>

            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="rounded-lg bg-orange-100 border border-orange-300 p-2">
                <span className="font-bold text-orange-950 block">vCPU 0</span>
                <span className="text-[10px] text-orange-700">Thread 1</span>
              </div>
              <div className="rounded-lg bg-orange-100 border border-orange-300 p-2">
                <span className="font-bold text-orange-950 block">vCPU 1</span>
                <span className="text-[10px] text-orange-700">Thread 2</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-stone-500">
              Shared execution pipeline and L2 cache. If Thread 1 stalls on RAM, Thread 2 runs.
            </p>
          </div>

          {/* Core 2 */}
          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
              Physical Core 02 (Hardware ALU + L1/L2 Cache)
            </span>

            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="rounded-lg bg-stone-100 border border-stone-200 p-2">
                <span className="font-bold text-stone-800 block">vCPU 2</span>
                <span className="text-[10px] text-stone-500">Thread 1</span>
              </div>
              <div className="rounded-lg bg-stone-100 border border-stone-200 p-2">
                <span className="font-bold text-stone-800 block">vCPU 3</span>
                <span className="text-[10px] text-stone-500">Thread 2</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-stone-500">
              Isolated from Core 01. No shared L1/L2 cache contention with Core 01.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottleneckDiagnosticTree() {
  const [activeCheck, setActiveCheck] = useState("cpu");

  const bottlenecks = {
    cpu: {
      metric: "CPU % > 90% (with low iowait)",
      type: "CPU-Bound",
      solution: "Upgrade to Compute-Optimized instances (AWS C7g / GCP C3). Profile application CPU flamegraphs to eliminate algorithmic bottlenecks.",
    },
    ram: {
      metric: "Memory % > 90% or Swapping (si/so in vmstat)",
      type: "Memory-Bound",
      solution: "Upgrade to Memory-Optimized instances (AWS R7g / Azure Edsv5). Investigate JVM heap leaks or Redis cache eviction policies.",
    },
    disk: {
      metric: "High %iowait in top, await > 15ms in iostat",
      type: "Storage I/O-Bound",
      solution: "Upgrade EBS volume to io2 Block Express with provisioned IOPS, or switch to Storage-Optimized instances (AWS I4i) with local NVMe SSDs.",
    },
    network: {
      metric: "High packet drops (ethtool), bandwidth capped",
      type: "Network-Bound",
      solution: "Upgrade instance to 25Gbps/100Gbps network bandwidth. Enable Enhanced Networking (SR-IOV) and AWS Elastic Fabric Adapter (EFA).",
    },
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Diagnostic Flowchart
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Systems Bottleneck Diagnostic Engine
          </h4>
        </div>

        <div className="flex gap-1.5 rounded-xl bg-stone-100 p-1 border border-stone-200">
          {["cpu", "ram", "disk", "network"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveCheck(key)}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-bold uppercase transition ${
                activeCheck === key ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs font-bold text-[#ea580c]">
            Diagnostic Signal: {bottlenecks[activeCheck].metric}
          </span>
          <span className="rounded-full bg-orange-200 px-2.5 py-0.5 font-mono text-[10px] font-bold text-orange-900">
            {bottlenecks[activeCheck].type}
          </span>
        </div>
        <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
          <strong>Architectural Remedy:</strong> {bottlenecks[activeCheck].solution}
        </p>
      </div>
    </div>
  );
}

function MachineFamiliesGrid() {
  const families = [
    { name: "General Purpose", ratio: "1 vCPU : 4 GB RAM", aws: "m7g / m7i", azure: "Dsv5", gcp: "n4 / c3-standard", bestFor: "Web APIs, microservices, container worker pools" },
    { name: "Compute Optimized", ratio: "1 vCPU : 2 GB RAM", aws: "c7g / c7i", azure: "Fsv2", gcp: "c3-highcpu", bestFor: "Batch compute, media transcoding, scientific modeling" },
    { name: "Memory Optimized", ratio: "1 vCPU : 8 GB RAM", aws: "r7g / r7i", azure: "Edsv5", gcp: "m3-megamem", bestFor: "In-memory caches (Redis), relational DBs, Spark analytics" },
    { name: "Storage Optimized", ratio: "High NVMe SSD IOPS", aws: "i4i / i3en", azure: "Lsv3", gcp: "z3", bestFor: "Elasticsearch, Cassandra, Kafka brokers, data lakes" },
    { name: "Accelerated (GPU)", ratio: "Dedicated H100 / A100", aws: "p5 / g5", azure: "NDv5", gcp: "a3 (H100)", bestFor: "Deep learning training, LLM inference, 3D rendering" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Hardware Classification
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Cloud Machine Families Across AWS, Azure & GCP
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
              <th className="py-2.5 px-3">Family Category</th>
              <th className="py-2.5 px-3">RAM : CPU Ratio</th>
              <th className="py-2.5 px-3 text-amber-700">AWS</th>
              <th className="py-2.5 px-3 text-blue-700">Azure</th>
              <th className="py-2.5 px-3 text-emerald-700">GCP</th>
              <th className="py-2.5 px-3 font-sans">Ideal Workload</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-800">
            {families.map((f, idx) => (
              <tr key={idx} className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-sans font-bold text-stone-900">{f.name}</td>
                <td className="py-2.5 px-3 text-stone-600">{f.ratio}</td>
                <td className="py-2.5 px-3 font-bold text-amber-800">{f.aws}</td>
                <td className="py-2.5 px-3 font-bold text-blue-800">{f.azure}</td>
                <td className="py-2.5 px-3 font-bold text-emerald-800">{f.gcp}</td>
                <td className="py-2.5 px-3 font-sans text-stone-600">{f.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContainerBinPackingDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Distributed Systems Bin-Packing
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Container Scheduling: Requests vs Limits & Density
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Node 1 */}
        <div className="rounded-xl border-2 border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2 font-mono text-xs font-bold text-stone-800">
            <span>Worker Node 01 (8 vCPU / 32 GB)</span>
            <span className="text-emerald-700">75% Utilized</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            <div className="p-2 rounded bg-orange-100 border border-orange-300 text-orange-900">
              Pod A (Checkout) • Req: 2 CPU / 4 GB
            </div>
            <div className="p-2 rounded bg-blue-100 border border-blue-300 text-blue-900">
              Pod B (Search API) • Req: 4 CPU / 16 GB
            </div>
            <div className="p-2 rounded bg-stone-200 text-stone-600 text-[10px]">
              Available Headroom: 2 CPU / 12 GB
            </div>
          </div>
        </div>

        {/* Node 2 */}
        <div className="rounded-xl border-2 border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2 font-mono text-xs font-bold text-stone-800">
            <span>Worker Node 02 (8 vCPU / 32 GB)</span>
            <span className="text-emerald-700">65% Utilized</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            <div className="p-2 rounded bg-orange-100 border border-orange-300 text-orange-900">
              Pod A Replica (Checkout Anti-Affinity) • Req: 2 CPU / 4 GB
            </div>
            <div className="p-2 rounded bg-purple-100 border border-purple-300 text-purple-900">
              Pod C (Auth Service) • Req: 3 CPU / 8 GB
            </div>
            <div className="p-2 rounded bg-stone-200 text-stone-600 text-[10px]">
              Available Headroom: 3 CPU / 20 GB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CpuVsGpuArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Silicon Execution Paradigms
          </span>
          <h4 className="text-base font-bold text-stone-900">
            CPU (Few Latency-Optimized Cores) vs. GPU (Thousands of Parallel ALUs)
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stone-300 bg-stone-50 p-4">
          <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
            CPU (General Purpose Sequential Processor)
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono mb-3">
            <div className="rounded bg-white border border-stone-300 p-3 font-bold text-stone-800">Heavy Core 1</div>
            <div className="rounded bg-white border border-stone-300 p-3 font-bold text-stone-800">Heavy Core 2</div>
          </div>
          <div className="p-2 rounded bg-stone-200 text-center font-mono text-xs text-stone-700">
            Large L3 Cache + Advanced Branch Predictor
          </div>
          <p className="mt-2 text-[11px] text-stone-600">
            Optimized for low-latency sequential logic, branching conditionals, and complex instruction sets.
          </p>
        </div>

        <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50/50 p-4">
          <span className="font-mono text-xs font-bold text-emerald-900 block mb-2">
            GPU (Massively Parallel Matrix Accelerator)
          </span>
          <div className="grid grid-cols-6 gap-1 text-center text-[10px] font-mono mb-3">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="rounded bg-emerald-200 border border-emerald-300 py-1 font-bold text-emerald-900">
                ALU
              </div>
            ))}
          </div>
          <div className="p-2 rounded bg-emerald-200 text-center font-mono text-xs text-emerald-950 font-bold">
            High Bandwidth Memory (HBM3 • 3.35 TB/s)
          </div>
          <p className="mt-2 text-[11px] text-stone-600">
            Optimized for matrix multiplication ($C = A \times B$) in Deep Learning, Computer Vision, and LLM inference.
          </p>
        </div>
      </div>
    </div>
  );
}

function AutoscalingEngineDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Closed-Loop Feedback Controller
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Autoscaling Policy Engine (Thermostat Model)
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs font-mono">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
          <span className="text-[10px] text-stone-400 block mb-1">Step 1</span>
          <span className="font-bold text-stone-800 block">Telemetry Signal</span>
          <span className="text-[10px] text-stone-500">CloudWatch / Prometheus (CPU, Queue Depth)</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
          <span className="text-[10px] text-stone-400 block mb-1">Step 2</span>
          <span className="font-bold text-stone-800 block">Target Tracking Policy</span>
          <span className="text-[10px] text-stone-500">Target: 60% CPU (Current: 85%)</span>
        </div>

        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 p-3">
          <span className="text-[10px] text-orange-600 block mb-1">Step 3</span>
          <span className="font-bold text-[#ea580c] block">Scaling Decision</span>
          <span className="text-[10px] text-stone-600">Scale Out: Desired Capacity + 3</span>
        </div>

        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3">
          <span className="text-[10px] text-emerald-600 block mb-1">Step 4</span>
          <span className="font-bold text-emerald-900 block">Health Check Target</span>
          <span className="text-[10px] text-stone-600">Register into ALB Target Group</span>
        </div>
      </div>
    </div>
  );
}

function ComputeGranularityDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Evolution of Compute
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The Compute Granularity Spectrum
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 text-xs">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <span className="font-mono text-xs font-bold text-stone-900 block mb-1">Virtual Machine (VM)</span>
          <span className="font-mono text-[10px] text-stone-400 block mb-2">Unit: Machine</span>
          <p className="text-stone-600">You manage full OS kernel, patches, background daemons, security agents, and static capacity.</p>
        </div>

        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/60 p-4">
          <span className="font-mono text-xs font-bold text-[#ea580c] block mb-1">Container (Kubernetes / ECS)</span>
          <span className="font-mono text-[10px] text-orange-700 block mb-2">Unit: Application Environment</span>
          <p className="text-stone-700">You package code and dependencies. Shared host kernel gives 10x density and fast startup.</p>
        </div>

        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <span className="font-mono text-xs font-bold text-stone-900 block mb-1">Serverless Function (FaaS)</span>
          <span className="font-mono text-[10px] text-stone-400 block mb-2">Unit: Invocation</span>
          <p className="text-stone-600">Zero server management. Event-driven scale-to-zero, per-millisecond billing, cold start trade-offs.</p>
        </div>
      </div>
    </div>
  );
}

function BatchSpotArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Cost-Optimized Scale
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Asynchronous Batch Processing with Spot Compute (80% Cost Savings)
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 text-xs font-mono">
        <div className="rounded-xl border border-stone-300 bg-stone-100 px-4 py-2 font-bold text-stone-800">
          Job Ingestion (10 Million Nightly Records)
        </div>

        <div className="text-stone-400">↓ Enqueue Messages</div>

        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 px-6 py-2.5 text-center">
          <span className="font-bold text-[#ea580c] block">Amazon SQS / Google Cloud Pub/Sub</span>
          <span className="text-[10px] text-stone-500">Decouples web tier from heavy processing</span>
        </div>

        <div className="text-stone-400">↓ Drained by dynamically scaled worker pool</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-center">
            <span className="font-bold text-emerald-900 block">Spot Worker 1</span>
            <span className="text-[10px] text-emerald-700">70–90% Discounted EC2</span>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-center">
            <span className="font-bold text-emerald-900 block">Spot Worker 2</span>
            <span className="text-[10px] text-emerald-700">Auto-retries on eviction</span>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-center">
            <span className="font-bold text-emerald-900 block">Spot Worker 3</span>
            <span className="text-[10px] text-emerald-700">Checkpoints progress to S3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LittlesLawCalculatorDiagram({
  arrivalRate,
  setArrivalRate,
  latencyMs,
  setLatencyMs,
  headroomPct,
  setHeadroomPct,
  concurrency,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Queuing Theory Sizing Engine
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Little's Law Concurrency & Capacity Sizing Calculator
          </h4>
        </div>
        <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
          Formula: L = λ × W
        </span>
      </div>

      {/* Input controls */}
      <div className="grid gap-3 md:grid-cols-3 mb-5">
        <div>
          <label className="font-mono text-[11px] text-stone-500 uppercase block mb-1">
            Arrival Rate λ (Req / Sec):
          </label>
          <input
            type="number"
            value={arrivalRate}
            onChange={(e) => setArrivalRate(e.target.value)}
            className="w-full rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>

        <div>
          <label className="font-mono text-[11px] text-stone-500 uppercase block mb-1">
            Avg Latency W (Milliseconds):
          </label>
          <input
            type="number"
            value={latencyMs}
            onChange={(e) => setLatencyMs(e.target.value)}
            className="w-full rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>

        <div>
          <label className="font-mono text-[11px] text-stone-500 uppercase block mb-1">
            Headroom Safety Margin (%):
          </label>
          <input
            type="number"
            value={headroomPct}
            onChange={(e) => setHeadroomPct(e.target.value)}
            className="w-full rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid gap-3 md:grid-cols-4">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
          <span className="font-mono text-[10px] text-stone-500 uppercase block">Concurrency (L)</span>
          <div className="text-xl font-black text-stone-900 font-mono mt-1">
            {concurrency.baseConcurrency.toLocaleString()}
          </div>
          <span className="text-[10px] text-stone-400">In-flight requests</span>
        </div>

        <div className="rounded-xl border border-orange-300 bg-orange-50/70 p-3 text-center">
          <span className="font-mono text-[10px] text-orange-700 uppercase block font-bold">With Headroom</span>
          <div className="text-xl font-black text-[#ea580c] font-mono mt-1">
            {concurrency.withHeadroom.toLocaleString()}
          </div>
          <span className="text-[10px] text-orange-600">Peak buffer target</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
          <span className="font-mono text-[10px] text-stone-500 uppercase block">Single-AZ Instances</span>
          <div className="text-xl font-black text-stone-900 font-mono mt-1">
            {concurrency.containersNeeded}
          </div>
          <span className="text-[10px] text-stone-400">At 50 conn/container</span>
        </div>

        <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50/70 p-3 text-center">
          <span className="font-mono text-[10px] text-emerald-800 uppercase block font-bold">Multi-AZ (N+AZ)</span>
          <div className="text-xl font-black text-emerald-950 font-mono mt-1">
            {concurrency.multiAzContainers}
          </div>
          <span className="text-[10px] text-emerald-700">Survives 1 AZ Outage</span>
        </div>
      </div>
    </div>
  );
}

function CrossCloudComputeTable() {
  const matrix = [
    { primitive: "Virtual Machines", aws: "Amazon EC2", azure: "Azure Virtual Machines", gcp: "Google Compute Engine" },
    { primitive: "VM Scaling Group", aws: "EC2 Auto Scaling Groups", azure: "Virtual Machine Scale Sets (VMSS)", gcp: "Managed Instance Groups (MIG)" },
    { primitive: "Serverless Containers", aws: "AWS Fargate / App Runner", azure: "Azure Container Apps", gcp: "Google Cloud Run" },
    { primitive: "Serverless FaaS", aws: "AWS Lambda", azure: "Azure Functions", gcp: "Cloud Run Functions" },
    { primitive: "Managed Batch", aws: "AWS Batch", azure: "Azure Batch", gcp: "Google Cloud Batch" },
    { primitive: "Spare / Spot Compute", aws: "EC2 Spot Instances", azure: "Azure Spot Virtual Machines", gcp: "Compute Engine Spot VMs" },
    { primitive: "Custom Machine Shapes", aws: "Fixed Pre-packaged SKUs", azure: "Fixed Pre-packaged SKUs", gcp: "Custom vCPU/RAM Sizing" },
    { primitive: "AI / ML Hardware", aws: "Trainium / Inferentia / H100", azure: "Maia / NDv5 (H100)", gcp: "Google Cloud TPU / A3 (H100)" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Multi-Cloud Compute Mapping
          </span>
          <h4 className="text-base font-bold text-stone-900">
            AWS vs. Azure vs. Google Cloud Compute Matrix
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
              <th className="py-2.5 px-3">Compute Primitive</th>
              <th className="py-2.5 px-3 text-amber-700">AWS</th>
              <th className="py-2.5 px-3 text-blue-700">Azure</th>
              <th className="py-2.5 px-3 text-emerald-700">Google Cloud (GCP)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-800">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-sans font-bold text-stone-900">{row.primitive}</td>
                <td className="py-2.5 px-3 font-bold text-amber-900">{row.aws}</td>
                <td className="py-2.5 px-3 font-bold text-blue-900">{row.azure}</td>
                <td className="py-2.5 px-3 font-bold text-emerald-900">{row.gcp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ComputeGameSimulator({
  computeGameScenarios,
  gameScenarioIndex,
  setGameScenarioIndex,
  gameSelection,
  handleGameAnswer,
  gameScore,
  gameHistory,
}) {
  const currentScenario = computeGameScenarios[gameScenarioIndex];
  const historyForCurrent = gameHistory[currentScenario.id];

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-orange-300 bg-white p-5 md:p-6 shadow-md">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-red-500" />
            Live Compute Crisis Simulator
          </span>
          <h4 className="text-base font-bold text-stone-900">
            "You are the Compute Architect" Capacity Crisis Game
          </h4>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]">
            Score: {gameScore} / 90
          </div>

          <div className="flex gap-1">
            {computeGameScenarios.map((s, idx) => (
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

      <div className="mb-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <h5 className="font-bold text-stone-900 text-sm mb-1">{currentScenario.title}</h5>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{currentScenario.context}</p>
      </div>

      <div className="mb-4">
        <h6 className="font-bold text-stone-900 text-xs md:text-sm">{currentScenario.question}</h6>
      </div>

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

      <div className="mt-5 flex justify-between items-center border-t border-stone-200 pt-4">
        <button
          disabled={gameScenarioIndex === 0}
          onClick={() => setGameScenarioIndex((prev) => prev - 1)}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-bold text-stone-600 disabled:opacity-40"
        >
          Previous Scenario
        </button>

        <span className="font-mono text-xs text-stone-400">
          Scenario {gameScenarioIndex + 1} of {computeGameScenarios.length}
        </span>

        <button
          disabled={gameScenarioIndex === computeGameScenarios.length - 1}
          onClick={() => setGameScenarioIndex((prev) => prev + 1)}
          className="rounded-lg bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white shadow-xs disabled:opacity-40"
        >
          Next Scenario
        </button>
      </div>
    </div>
  );
}
