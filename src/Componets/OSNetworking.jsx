import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Binary,
  ExternalLink,
  FileText,
  BarChart2,
  Clock,
  Timer,
  GitBranch,
  Split,
  Eye,
  Key,
  Grid,
  Database,
  Search,
  Maximize2,
  TrendingDown,
  TrendingUp,
  AlertOctagon,
  Gauge,
  Radio,
  ZapOff,
  Share2,
  Bell,
  MessageSquare,
  Repeat,
  Power,
  Pause,
  HardDrive,
  Save,
  CheckSquare,
  Archive,
  History,
  Code,
  CornerDownRight,
  Flame,
  PowerOff,
  SlidersHorizontal,
  FolderTree,
  Folder,
  Send,
  Download,
  Upload,
  Globe,
  Wifi,
  RadioTower,
  Filter,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 19                                 */
/* OS Networking and Network I/O                                              */
/* Linux Kernel Network Stack · Sockets · epoll · Buffers & Backpressure      */
/* -------------------------------------------------------------------------- */

export default function OSNetworking() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeLesson, setActiveLesson] = useState("interfaces");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(42);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: Kernel Network Packet Journey (Egress vs Ingress)             */
  /* -------------------------------------------------------------------------- */
  const [packetDirection, setPacketDirection] = useState("egress"); // egress or ingress
  const [packetStep, setPacketStep] = useState(0);

  const egressStages = [
    {
      step: 1,
      name: "Application & Socket API",
      layer: "User Space",
      api: "send() / write(fd, buf, len)",
      desc: "Application writes stream bytes to the socket file descriptor. A system call trap vectors into Ring 0.",
      kernelStruct: "struct file -> struct socket -> struct sock (inet_sock)",
    },
    {
      step: 2,
      name: "Transport Protocol Engine (TCP)",
      layer: "Kernel Protocol Layer",
      api: "tcp_sendmsg() & sk_stream_alloc_skb()",
      desc: "Kernel segments stream data into socket buffer packets (sk_buff), attaches TCP header with sequence number, checks window size (rwnd/cwnd).",
      kernelStruct: "struct sk_buff (skb), struct tcp_sock",
    },
    {
      step: 3,
      name: "Network & Routing Layer (IP)",
      layer: "Kernel Network Stack",
      api: "ip_queue_xmit() & ip_output()",
      desc: "Kernel performs FIB routing lookup to choose egress interface and next-hop gateway, adds IPv4/IPv6 header, handles fragmentation and iptables/nftables hooks.",
      kernelStruct: "struct rtable (routing cache), struct iphdr",
    },
    {
      step: 4,
      name: "Traffic Control & Queueing (Qdisc)",
      layer: "Linux Traffic Control",
      api: "dev_queue_xmit() & qdisc_run()",
      desc: "Packet enters the egress queuing discipline (fq_codel, cake, or pfifo_fast) for bandwidth pacing, priority shaping, and congestion avoidance.",
      kernelStruct: "struct Qdisc, struct netdev_queue",
    },
    {
      step: 5,
      name: "Device Driver & Transmit Ring",
      layer: "Hardware Abstraction & Driver",
      api: "ndo_start_xmit()",
      desc: "Driver maps sk_buff memory into DMA addresses, populates the NIC's circular TX ring buffer descriptors, and rings the hardware doorbell.",
      kernelStruct: "struct net_device, TX Ring Buffer Descriptors",
    },
    {
      step: 6,
      name: "Network Interface Card (NIC)",
      layer: "Physical Hardware",
      api: "PCIe DMA -> PHY Transceiver",
      desc: "NIC DMA controller fetches packet bytes directly from host RAM, calculates FCS checksum, and transmits Ethernet frame onto the physical wire/fiber.",
      kernelStruct: "NIC FIFO buffer, PHY serializer",
    },
  ];

  const ingressStages = [
    {
      step: 1,
      name: "NIC Hardware Frame Reception",
      layer: "Physical Hardware",
      api: "PHY Receiver -> RX FIFO",
      desc: "Incoming signal converted to Ethernet frame, validated by FCS CRC check, and transferred via PCIe DMA into host memory RX ring descriptors.",
      kernelStruct: "NIC RX FIFO & DMA Engine",
    },
    {
      step: 2,
      name: "Hardware Interrupt & NAPI Poll",
      layer: "Device Driver / Interrupt Layer",
      api: "Hard IRQ -> napi_schedule() -> napi_poll()",
      desc: "NIC asserts MSI-X interrupt. Kernel disables device IRQ and schedules NAPI polling thread (ksoftirqd) to batch-harvest packets without interrupt storms.",
      kernelStruct: "struct napi_struct, NET_RX_SOFTIRQ",
    },
    {
      step: 3,
      name: "Network Layer & Filtering (IP)",
      layer: "Kernel Network Stack",
      api: "netif_receive_skb() -> ip_rcv()",
      desc: "Driver constructs sk_buff, passes it up. IP layer verifies checksum, enforces Netfilter/iptables PREROUTING and INPUT rules, and routes locally.",
      kernelStruct: "struct sk_buff, nf_hook_entries",
    },
    {
      step: 4,
      name: "Transport Protocol Processing (TCP)",
      layer: "Kernel Protocol Layer",
      api: "tcp_v4_rcv() & tcp_data_queue()",
      desc: "TCP matches 4-tuple (src/dst IP & port) to struct sock, checks TCP sequence, reassembles out-of-order segments, updates ACK and rwnd.",
      kernelStruct: "struct tcp_sock, sk_receive_queue",
    },
    {
      step: 5,
      name: "Socket Receive Buffer Enqueue",
      layer: "Kernel Socket Layer",
      api: "sk->sk_data_ready()",
      desc: "Payload appended to socket receive queue (SO_RCVBUF). Kernel wakes up blocked threads or triggers epoll readiness notification for the file descriptor.",
      kernelStruct: "struct sock -> sk_receive_queue, wait_queue_head_t",
    },
    {
      step: 6,
      name: "Application Read via Syscall",
      layer: "User Space",
      api: "recv() / read(fd, buf, len)",
      desc: "Application calls recv(). Data is copied from kernel sk_buff memory into user-space buffer. Bytes are acknowledged to TCP sender.",
      kernelStruct: "copy_to_user(), skb_free_datagram()",
    },
  ];

  const currentPacketStages = packetDirection === "egress" ? egressStages : ingressStages;

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: I/O Multiplexing Engine: select vs poll vs epoll              */
  /* -------------------------------------------------------------------------- */
  const [monitoredFds, setMonitoredFds] = useState(1000); // 10 to 50000
  const [activeFds, setActiveFds] = useState(5); // 1 to 50
  const [triggerMode, setTriggerMode] = useState("LT"); // LT (Level Triggered) or ET (Edge Triggered)

  const multiplexMetrics = useMemo(() => {
    // Select: O(N) linear bitmap scan up to 1024 limit
    const selectSupported = monitoredFds <= 1024;
    const selectCycles = selectSupported ? monitoredFds * 48 + 500 : null;
    const selectCopyBytes = selectSupported ? 128 * 3 : null; // 1024 bits = 128 bytes * 3 fd_sets

    // Poll: O(N) array scan of struct pollfd (8 bytes each)
    const pollCycles = monitoredFds * 36 + 400;
    const pollCopyBytes = monitoredFds * 8; // sizeof(struct pollfd)

    // epoll: O(1) wait retrieval from ready list, O(Active) return
    const epollCycles = activeFds * 24 + 180;
    const epollCopyBytes = activeFds * 12; // sizeof(struct epoll_event)

    return {
      selectSupported,
      selectCycles,
      selectCopyBytes,
      pollCycles,
      pollCopyBytes,
      epollCycles,
      epollCopyBytes,
    };
  }, [monitoredFds, activeFds]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: Socket Buffer, Flow Control & Backpressure Simulator          */
  /* -------------------------------------------------------------------------- */
  const [clientSendRate, setClientSendRate] = useState(80); // MB/s
  const [serverProcessRate, setServerProcessRate] = useState(30); // MB/s
  const [bufferCapacity, setBufferCapacity] = useState(64); // KB (SO_RCVBUF)
  const [backpressureStrategy, setBackpressureStrategy] = useState("pause"); // pause, drop, shed

  const bufferSim = useMemo(() => {
    const netRate = clientSendRate - serverProcessRate;
    let occupancyPercent = 0;
    let tcpWindowSize = bufferCapacity;
    let state = "Healthy Stream";
    let alertLevel = "emerald";

    if (netRate <= 0) {
      occupancyPercent = Math.max(5, Math.min(25, clientSendRate / 3));
      tcpWindowSize = Math.round(bufferCapacity * (1 - occupancyPercent / 100));
      state = "Drain Rate Sustained (No Backpressure Needed)";
      alertLevel = "emerald";
    } else {
      // Buffer fills up rapidly
      const fillFactor = Math.min(100, Math.round((netRate / clientSendRate) * 100 + 35));
      occupancyPercent = fillFactor;
      tcpWindowSize = Math.max(0, Math.round(bufferCapacity * (1 - occupancyPercent / 100)));

      if (tcpWindowSize === 0) {
        state = "Zero Window Advertised (TCP Sender Paused by Flow Control)";
        alertLevel = "red";
      } else if (occupancyPercent > 75) {
        state = "High Buffer Pressure (Application Backpressure Engaged)";
        alertLevel = "amber";
      } else {
        state = "Filling (Transient Burst Absorbed)";
        alertLevel = "blue";
      }
    }

    return {
      netRate,
      occupancyPercent,
      tcpWindowSize,
      state,
      alertLevel,
    };
  }, [clientSendRate, serverProcessRate, bufferCapacity]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: Concurrent Server Architecture Capacity Benchmark             */
  /* -------------------------------------------------------------------------- */
  const [archModel, setArchModel] = useState("event_loop"); // process, thread, pool, event_loop
  const [clientConnections, setClientConnections] = useState(500); // 10 to 5000

  const archMetrics = useMemo(() => {
    let threads = 0;
    let memoryMB = 0;
    let contextSwitchesSec = 0;
    let throughputReqSec = 0;
    let p99LatencyMs = 0;
    let statusText = "Optimal";
    let statusColor = "emerald";

    if (archModel === "process") {
      threads = clientConnections;
      memoryMB = Math.round(clientConnections * 18); // ~18MB per process
      contextSwitchesSec = Math.round(clientConnections * 320);
      if (clientConnections > 300) {
        throughputReqSec = Math.max(150, 4200 - clientConnections * 7);
        p99LatencyMs = Math.round(45 + clientConnections * 0.85);
        statusText = "Severe Memory Thrashing & Fork Overhead";
        statusColor = "red";
      } else {
        throughputReqSec = Math.round(clientConnections * 18);
        p99LatencyMs = Math.round(12 + clientConnections * 0.08);
      }
    } else if (archModel === "thread") {
      threads = clientConnections;
      memoryMB = Math.round(clientConnections * 8.2); // ~8MB default stack + kernel PCB
      contextSwitchesSec = Math.round(clientConnections * 240);
      if (clientConnections > 800) {
        throughputReqSec = Math.max(400, 7800 - clientConnections * 4);
        p99LatencyMs = Math.round(30 + clientConnections * 0.28);
        statusText = "CPU Scheduler Runqueue Saturation & Context Thrash";
        statusColor = "red";
      } else {
        throughputReqSec = Math.round(clientConnections * 28);
        p99LatencyMs = Math.round(8 + clientConnections * 0.04);
      }
    } else if (archModel === "pool") {
      threads = 32; // Fixed pool
      memoryMB = 260 + Math.round(clientConnections * 0.08);
      contextSwitchesSec = 3200;
      if (clientConnections > 1200) {
        throughputReqSec = 8500;
        p99LatencyMs = Math.round(15 + (clientConnections - 1200) * 0.12);
        statusText = "Work Queue Backlog Delay (Workers Fully Occupied)";
        statusColor = "amber";
      } else {
        throughputReqSec = Math.round(clientConnections * 14);
        p99LatencyMs = Math.round(6 + clientConnections * 0.015);
      }
    } else {
      // Event Loop (epoll / libuv / Nginx / Node.js)
      threads = 2; // Single loop thread + helper
      memoryMB = Math.round(42 + clientConnections * 0.018); // ~18KB per socket connection
      contextSwitchesSec = 450;
      if (clientConnections > 4000) {
        throughputReqSec = 28500;
        p99LatencyMs = Math.round(9 + (clientConnections - 4000) * 0.02);
        statusText = "Event Loop Saturation (Non-blocking limits)";
        statusColor = "amber";
      } else {
        throughputReqSec = Math.round(clientConnections * 18.5);
        p99LatencyMs = Math.round(2.2 + clientConnections * 0.0018);
      }
    }

    return {
      threads,
      memoryMB,
      contextSwitchesSec,
      throughputReqSec,
      p99LatencyMs,
      statusText,
      statusColor,
    };
  }, [archModel, clientConnections]);

  /* -------------------------------------------------------------------------- */
  /* ASSESSMENT QUIZ STATE                                                      */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which statement correctly describes TCP?",
      options: [
        "It preserves application message boundaries",
        "It is a connection-oriented byte stream",
        "It guarantees every application request is processed",
        "It has no flow control",
      ],
      correctAnswer: 1,
      explanation:
        "TCP provides an unstructured, connection-oriented byte stream with sequence tracking and flow control. It does NOT preserve application message boundaries (framing is the responsibility of the application protocol).",
    },
    {
      id: 2,
      question: "What is a major advantage of epoll for Linux servers?",
      options: [
        "It eliminates all network latency",
        "It can efficiently monitor readiness across many descriptors",
        "It automatically makes all application code non-blocking",
        "It guarantees zero packet loss",
      ],
      correctAnswer: 1,
      explanation:
        "epoll maintains an in-kernel interest list (red-black tree) and only returns descriptors that are currently ready (O(1) retrieval), avoiding the expensive O(N) scanning of select() and poll() when thousands of sockets are mostly idle.",
    },
    {
      id: 3,
      question: "What does application backpressure accomplish?",
      options: [
        "Makes the NIC transmit at unlimited speed",
        "Prevents the application from accepting work indefinitely beyond its capacity",
        "Disables TCP congestion control",
        "Guarantees requests finish immediately",
      ],
      correctAnswer: 1,
      explanation:
        "Application backpressure signals the upstream sender or pauses socket reads when downstream processing queues are full, preventing unconstrained memory growth, queue bloat, and catastrophic service collapse.",
    },
    {
      id: 4,
      question: "Which architecture is often useful for many mostly idle connections?",
      options: [
        "One operating-system process per byte",
        "An event loop using non-blocking sockets",
        "An unbounded number of threads",
        "A busy loop repeatedly polling every socket",
      ],
      correctAnswer: 1,
      explanation:
        "A single-threaded or small multi-reactor event loop with non-blocking sockets and epoll multiplexes tens of thousands of idle connections with negligible memory overhead (no dedicated per-connection thread stacks).",
    },
    {
      id: 5,
      question: "What does a Linux network namespace isolate?",
      options: [
        "Every hardware device on the entire machine",
        "A network view including interfaces and routes",
        "All memory shared by all processes",
        "The CPU instruction set",
      ],
      correctAnswer: 1,
      explanation:
        "A Linux network namespace provides an isolated networking stack, including its own network interfaces, routing tables, port binding allocation tables, and firewall rules.",
    },
    {
      id: 6,
      question: "Why measure p95 latency as well as throughput?",
      options: [
        "p95 measures RAM capacity",
        "Throughput alone reveals all slow requests",
        "Tail latency shows how slower requests behave under load",
        "p95 always equals average latency",
      ],
      correctAnswer: 2,
      explanation:
        "Throughput and average latency conceal queueing delays and tail spikes. High-percentile latency (p95 and p99) reflects the experience of outlier requests that suffer from socket buffer queue bloat, context switching, and worker starvation.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuiz = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [quizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* MASTERY CHECKLIST STATE                                                    */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState({
    stackPath: true,
    tcpVsUdp: true,
    socketLifecycle: false,
    ioMultiplexing: false,
    epollMechanics: false,
    bufferBackpressure: false,
    netNamespaces: false,
    benchmarking: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#ea580c]/15 selection:text-[#ea580c]">
      {/* Top Breadcrumb & Status Navigation */}
      <ModuleNav
        track="os"
        currentModuleId="networking"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova OS Tutor"
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Hero Header Banner */}
        <div className="relative rounded-3xl bg-white border border-[#e7e3da] p-6 sm:p-10 shadow-xs overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ea580c]/10 via-orange-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-xs font-semibold uppercase tracking-wider">
                <Network size={14} />
                <span>Operating Systems Engineering · Module 19</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
                OS Networking & Network I/O
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Trace data from application socket calls down through the Linux kernel protocol stack, device driver queues, and physical interfaces. Master non-blocking I/O, <code className="px-1.5 py-0.5 rounded-sm bg-stone-100 text-[#ea580c] font-mono text-sm">epoll</code>, socket buffering, application backpressure, and concurrent server architecture scaling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <button
                onClick={() => {
                  const el = document.getElementById("capstone-lab");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 font-medium text-sm transition-colors shadow-xs"
              >
                <Terminal size={16} />
                <span>Jump to Capstone Lab</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#e7e3da]">
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">I/O Multiplexing</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <Workflow size={16} className="text-[#ea580c]" />
                <span>epoll O(1) Ready</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">Kernel Stack Flow</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <Layers size={16} className="text-[#ea580c]" />
                <span>Socket $\to$ sk_buff $\to$ NIC</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">Overload Defense</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#ea580c]" />
                <span>App Backpressure</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">Network Isolation</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <Globe size={16} className="text-[#ea580c]" />
                <span>veth & ip netns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e7e3da] text-sm">
          {[
            { id: "interfaces", label: "1. Network Interfaces & Stack", icon: Network },
            { id: "sockets", label: "2. Sockets & TCP Lifecycle", icon: Zap },
            { id: "io_models", label: "3. Blocking vs Non-Blocking", icon: Clock },
            { id: "epoll", label: "4. select, poll & epoll", icon: Workflow },
            { id: "buffers", label: "5. Buffers & Backpressure", icon: Sliders },
            { id: "namespaces", label: "6. Network Namespaces", icon: Globe },
            { id: "architectures", label: "7. Scaling Concurrent Servers", icon: Server },
            { id: "capstone", label: "Capstone Lab", icon: Terminal },
            { id: "quiz", label: "Assessment (6Q)", icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeLesson === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLesson(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                  active
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "bg-white hover:bg-stone-100 text-stone-600 border border-[#e7e3da]"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================================================================== */}
        {/* LESSON 1: Network Interfaces & Kernel Network Path                  */}
        {/* ================================================================== */}
        {activeLesson === "interfaces" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 1</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Network Interfaces and the Linux Kernel Networking Path
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  When an application sends or receives data over a network socket, it does not manipulate raw Ethernet frames or cable electrical pulses directly. It relies on the operating system’s socket abstraction and layered network subsystem to coordinate protocol state, buffer allocations, hardware queueing, and DMA transfers.
                </p>
              </div>

              {/* SIMULATOR 1: Kernel Packet Journey */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Workflow size={18} className="text-[#ea580c]" />
                      <span>Interactive Pipeline: Linux Kernel Network Packet Journey</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Step through each kernel layer and inspect memory structures during packet transmission or reception.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setPacketDirection("egress");
                        setPacketStep(0);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        packetDirection === "egress"
                          ? "bg-[#ea580c] text-white"
                          : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      <Upload size={14} />
                      <span>Egress (TX: App $\to$ Wire)</span>
                    </button>
                    <button
                      onClick={() => {
                        setPacketDirection("ingress");
                        setPacketStep(0);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        packetDirection === "ingress"
                          ? "bg-[#ea580c] text-white"
                          : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      <Download size={14} />
                      <span>Ingress (RX: Wire $\to$ App)</span>
                    </button>
                  </div>
                </div>

                {/* Progress Step Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {currentPacketStages.map((stage, idx) => {
                    const isSelected = packetStep === idx;
                    return (
                      <button
                        key={stage.step}
                        onClick={() => setPacketStep(idx)}
                        className={`text-left p-2.5 rounded-xl border text-xs transition-all ${
                          isSelected
                            ? "bg-white border-[#ea580c] shadow-xs ring-1 ring-[#ea580c]/30"
                            : "bg-white/60 border-stone-200 hover:bg-white text-stone-600"
                        }`}
                      >
                        <div className="font-semibold text-stone-900 truncate">
                          {stage.step}. {stage.name}
                        </div>
                        <div className="text-[10px] text-stone-500 truncate">{stage.layer}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Stage Detail Card */}
                {(() => {
                  const s = currentPacketStages[packetStep];
                  return (
                    <div className="rounded-xl bg-white border border-stone-200 p-5 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                        <div>
                          <span className="text-xs font-semibold text-[#ea580c] uppercase tracking-wide">
                            Stage {s.step} of 6 · {s.layer}
                          </span>
                          <h4 className="text-lg font-bold text-stone-900">{s.name}</h4>
                        </div>
                        <div className="font-mono text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-700">
                          {s.api}
                        </div>
                      </div>

                      <p className="text-sm text-stone-700 leading-relaxed">{s.desc}</p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-stone-100 text-xs">
                        <div className="flex items-center gap-2 text-stone-500">
                          <Binary size={14} className="text-[#ea580c]" />
                          <span>Kernel Structures:</span>
                          <code className="font-mono bg-stone-100 text-stone-800 px-2 py-0.5 rounded-sm">
                            {s.kernelStruct}
                          </code>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            disabled={packetStep === 0}
                            onClick={() => setPacketStep((prev) => Math.max(0, prev - 1))}
                            className="px-3 py-1 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 disabled:opacity-40 text-xs"
                          >
                            Previous Step
                          </button>
                          <button
                            disabled={packetStep === currentPacketStages.length - 1}
                            onClick={() => setPacketStep((prev) => Math.min(currentPacketStages.length - 1, prev + 1))}
                            className="px-3 py-1 rounded-lg bg-[#ea580c] text-white hover:bg-[#ea580c]/90 disabled:opacity-40 text-xs font-medium"
                          >
                            Next Step
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* 1.2 Network Interfaces Table */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-stone-900">1.2 Network Interfaces in Linux</h3>
                <p className="text-sm text-stone-600">
                  A network interface represents a logical or physical endpoint through which the Linux kernel transmits and receives packets.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      name: "lo (Loopback)",
                      role: "Local Inter-Process",
                      driver: "In-kernel virtual",
                      desc: "Carries 127.0.0.1 and ::1 traffic. Packets bypass physical drivers, hardware serialization, and checksum offload; processed purely in memory.",
                    },
                    {
                      name: "eth0 / enp3s0",
                      role: "Physical Ethernet",
                      driver: "e1000e, igb, mlx5",
                      desc: "Direct link to hardware Ethernet NIC. Uses TX/RX ring buffers, hardware DMA, interrupt coalescing, and PCIe bus handshakes.",
                    },
                    {
                      name: "wlan0 / wlp2s0",
                      role: "Wireless 802.11",
                      driver: "iwlwifi, ath9k",
                      desc: "Wi-Fi link handling beacon frames, WPA encryption keys, carrier sensing (CSMA/CA), and variable physical transmission rates.",
                    },
                    {
                      name: "veth (Virtual Ethernet)",
                      role: "Container Virtual Pair",
                      driver: "veth driver",
                      desc: "Always created in linked pairs (e.g., veth0 <-> veth1). Packets transmitted into one endpoint instantly appear as received packets on the other.",
                    },
                  ].map((iface) => (
                    <div key={iface.name} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-[#ea580c]">{iface.name}</span>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">
                          {iface.role}
                        </span>
                      </div>
                      <div className="text-xs text-stone-500 font-mono">Driver: {iface.driver}</div>
                      <p className="text-xs text-stone-600 leading-relaxed">{iface.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 1.3 Practical Inspection Terminal */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-stone-900">1.3 Inspecting Linux Network State</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "ip addr show lo\nip route show\ncat /proc/net/dev\nss -s",
                        "cmd-inspect-iface"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "cmd-inspect-iface" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "cmd-inspect-iface" ? "Copied!" : "Copy Commands"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto space-y-3">
                  <div className="text-stone-400"># 1. Inspect interface addresses, flags, and MTU</div>
                  <div className="text-emerald-400">$ ip addr show lo</div>
                  <div className="text-stone-300">
                    1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;inet 127.0.0.1/8 scope host lo{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;inet6 ::1/128 scope host
                  </div>

                  <div className="text-stone-400 pt-2"># 2. Inspect kernel routing table</div>
                  <div className="text-emerald-400">$ ip route</div>
                  <div className="text-stone-300">
                    default via 192.168.1.1 dev eth0 proto dhcp metric 100{"\n"}
                    192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.52 metric 100
                  </div>

                  <div className="text-stone-400 pt-2"># 3. Socket summary statistics across kernel protocols</div>
                  <div className="text-emerald-400">$ ss -s</div>
                  <div className="text-stone-300">
                    Total: 184 (kernel 212){"\n"}
                    TCP:   38 (estab 4, closed 12, orphaned 0, timewait 2){"\n"}
                    Transport Total     IP        IPv6{"\n"}
                    RAW	      1         1         0{"\n"}
                    UDP	      8         6         2{"\n"}
                    TCP	      26        18        8
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 2: Sockets & TCP Lifecycle                                   */}
        {/* ================================================================== */}
        {activeLesson === "sockets" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 2</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Sockets, TCP/UDP APIs, and Connection Lifecycle
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  In Linux, a socket is represented by an integer file descriptor in the process's file descriptor table. This allows standard POSIX operations such as <code className="font-mono text-xs px-1.5 py-0.5 bg-stone-100 rounded-sm">read()</code>, <code className="font-mono text-xs px-1.5 py-0.5 bg-stone-100 rounded-sm">write()</code>, <code className="font-mono text-xs px-1.5 py-0.5 bg-stone-100 rounded-sm">poll()</code>, and <code className="font-mono text-xs px-1.5 py-0.5 bg-stone-100 rounded-sm">close()</code>.
                </p>
              </div>

              {/* 2.1 TCP vs UDP Matrix */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-stone-900">2.1 TCP vs UDP Protocol Trade-offs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                        <th className="py-3 px-4 font-semibold">Architectural Property</th>
                        <th className="py-3 px-4 font-semibold text-[#ea580c]">TCP (Transmission Control Protocol)</th>
                        <th className="py-3 px-4 font-semibold text-blue-600">UDP (User Datagram Protocol)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-900">Communication Model</td>
                        <td className="py-3 px-4 text-stone-600">Connection-oriented continuous byte stream</td>
                        <td className="py-3 px-4 text-stone-600">Connectionless independent datagrams</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-900">Delivery Guarantees</td>
                        <td className="py-3 px-4 text-stone-600">Guaranteed in-order, retransmitted, duplicate filtered</td>
                        <td className="py-3 px-4 text-stone-600">Best-effort, no built-in ordering or retry</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-900">Message Boundaries</td>
                        <td className="py-3 px-4 text-stone-600 font-semibold text-red-600">NOT preserved (stream semantics require framing)</td>
                        <td className="py-3 px-4 text-stone-600 font-semibold text-emerald-600">Preserved per datagram packet</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-900">Flow & Congestion Control</td>
                        <td className="py-3 px-4 text-stone-600">Built-in sliding window (rwnd) & congestion window (cwnd)</td>
                        <td className="py-3 px-4 text-stone-600">None (application must implement its own pacing)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-900">Header Size</td>
                        <td className="py-3 px-4 text-stone-600">20–60 bytes (options, timestamps, SACK)</td>
                        <td className="py-3 px-4 text-stone-600">Fixed 8 bytes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-stone-900">Typical Workloads</td>
                        <td className="py-3 px-4 text-stone-600">HTTP/1.1, HTTP/2, SSH, PostgreSQL, Redis, gRPC</td>
                        <td className="py-3 px-4 text-stone-600">DNS, DHCP, QUIC (HTTP/3), VoIP, gaming, telemetry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2.2 TCP Lifecycle Sequence */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-stone-900">2.2 TCP State Machine & Syscall Flow</h3>
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Server Sequence */}
                    <div className="space-y-3">
                      <div className="font-semibold text-sm text-stone-900 flex items-center gap-2">
                        <Server size={16} className="text-[#ea580c]" />
                        <span>Passive Listener (Server Side)</span>
                      </div>
                      <ol className="space-y-2 text-xs text-stone-700">
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-[#ea580c]">1. socket(AF_INET, SOCK_STREAM, 0)</code>: Allocates inode and file descriptor in CLOSED state.
                        </li>
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-[#ea580c]">2. setsockopt(SO_REUSEADDR, 1)</code>: Bypasses TIME_WAIT port lockouts during server restarts.
                        </li>
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-[#ea580c]">3. bind(fd, &addr, len)</code>: Associates socket with local IP (e.g. 0.0.0.0) and port (9000).
                        </li>
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-[#ea580c]">4. listen(fd, backlog)</code>: Transitions to LISTEN state. Allocates SYN backlog and accept queue.
                        </li>
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-[#ea580c]">5. accept(fd, &client_addr, &len)</code>: Pops established connection from accept queue; creates <em>new</em> connected fd.
                        </li>
                      </ol>
                    </div>

                    {/* Client Sequence */}
                    <div className="space-y-3">
                      <div className="font-semibold text-sm text-stone-900 flex items-center gap-2">
                        <Terminal size={16} className="text-blue-600" />
                        <span>Active Initiator (Client Side)</span>
                      </div>
                      <ol className="space-y-2 text-xs text-stone-700">
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-blue-600">1. socket(AF_INET, SOCK_STREAM, 0)</code>: Allocates active client socket descriptor.
                        </li>
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-blue-600">2. connect(fd, &server_addr, len)</code>: Initiates 3-way handshake (SYN $\to$ SYN-ACK $\to$ ACK).
                        </li>
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-blue-600">3. sendall(msg) / recv(4096)</code>: Exchanges full-duplex stream bytes over established socket.
                        </li>
                        <li className="p-2.5 rounded-xl bg-white border border-stone-200">
                          <code className="font-bold text-blue-600">4. shutdown(SHUT_WR) / close()</code>: Sends FIN packet. Enters FIN_WAIT_1 $\to$ TIME_WAIT (2MSL timer).
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.3 Minimal Python Client & Message Framing */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">2.3 Message Framing & Minimal Client</h3>
                    <p className="text-xs text-stone-500">
                      Why <code className="font-mono">recv()</code> does not preserve boundaries: a stream can deliver partial fragments or coalesce multiple writes into one chunk.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import socket\n\nHOST = "127.0.0.1"\nPORT = 9000\n\nwith socket.create_connection((HOST, PORT), timeout=3) as sock:\n    # Protocol Framing: newline delimiter '\\n'\n    sock.sendall(b"hello from client\\n")\n    response = sock.recv(4096)\n    print("Server replied:", response.decode("utf-8", errors="replace"))\n`,
                        "tcp-client-code"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "tcp-client-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "tcp-client-code" ? "Copied!" : "Copy tcp_client.py"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="text-stone-300">
{`# tcp_client.py - Minimal framing-aware client
import socket

HOST = "127.0.0.1"
PORT = 9000

# create_connection wraps socket(), setsockopt(), and connect()
with socket.create_connection((HOST, PORT), timeout=3) as sock:
    # Delimiter framing ensures the server recognizes complete messages
    sock.sendall(b"hello from client\\n")
    
    # In general TCP programming, a single recv() might return a partial chunk.
    # Production protocols use length-prefixes (e.g. 4-byte header) or delimiters.
    response = sock.recv(4096)
    print("Server response:", response.decode("utf-8", errors="replace"))`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 3: Blocking vs Non-Blocking I/O                              */}
        {/* ================================================================== */}
        {activeLesson === "io_models" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 3</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Blocking, Non-Blocking, and Multiplexed I/O
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  The central challenge in network server engineering is answering: <em>What should a thread do while a network socket has no incoming data ready?</em> The choice between blocking execution, non-blocking polling, and event multiplexing dictates maximum concurrency and system resource consumption.
                </p>
              </div>

              {/* 3.1 & 3.2 Detailed Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                    <Clock size={18} className="text-[#ea580c]" />
                    <span>1. Blocking I/O</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Calls to <code className="font-mono bg-stone-100 px-1 rounded-sm">recv()</code> put the calling thread to sleep (TASK_INTERRUPTIBLE) until data arrives, timeout expires, or peer closes.
                  </p>
                  <div className="space-y-1 pt-2 border-t border-stone-200 text-xs">
                    <div className="text-emerald-700 font-semibold">✓ Easy sequential code flow</div>
                    <div className="text-red-600 font-semibold">✗ 1 thread per socket wastes RAM</div>
                    <div className="text-stone-500">10,000 idle clients = 10,000 threads (80 GB stack)!</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                    <ZapOff size={18} className="text-amber-600" />
                    <span>2. Non-Blocking I/O</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Set via <code className="font-mono bg-stone-100 px-1 rounded-sm">fcntl(O_NONBLOCK)</code>. Syscall returns immediately with <code className="font-mono text-amber-700">EAGAIN</code> or <code className="font-mono text-amber-700">EWOULDBLOCK</code> if not ready.
                  </p>
                  <div className="space-y-1 pt-2 border-t border-stone-200 text-xs">
                    <div className="text-emerald-700 font-semibold">✓ Thread never blocked waiting</div>
                    <div className="text-red-600 font-semibold">✗ Busy-polling loops pin CPU to 100%</div>
                    <div className="text-stone-500">Requires a sleep or notification engine.</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                    <Workflow size={18} className="text-blue-600" />
                    <span>3. I/O Multiplexing</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    One single thread asks the kernel: <em>"Wake me up only when ANY of these 50,000 sockets becomes readable or writable."</em>
                  </p>
                  <div className="space-y-1 pt-2 border-t border-stone-200 text-xs">
                    <div className="text-emerald-700 font-semibold">✓ Minimal memory & zero busy-wait</div>
                    <div className="text-emerald-700 font-semibold">✓ Handles 100K+ concurrent sockets</div>
                    <div className="text-amber-700">! Any CPU stall in loop halts all clients</div>
                  </div>
                </div>
              </div>

              {/* Architectural Matrix */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-stone-900">3.3 I/O Model Evaluation Matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                        <th className="py-3 px-4 font-semibold">I/O Model</th>
                        <th className="py-3 px-4 font-semibold">Readiness Check</th>
                        <th className="py-3 px-4 font-semibold">Data Copy Phase</th>
                        <th className="py-3 px-4 font-semibold">Thread Overhead</th>
                        <th className="py-3 px-4 font-semibold">Concurrency Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="py-3 px-4 font-bold text-stone-900">Blocking I/O</td>
                        <td className="py-3 px-4 text-stone-600">Thread suspended in kernel waitqueue</td>
                        <td className="py-3 px-4 text-stone-600">Synchronous copy in thread context</td>
                        <td className="py-3 px-4 text-red-600 font-semibold">High (1 thread per conn)</td>
                        <td className="py-3 px-4 text-stone-600">Low (~1,000 - 3,000)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-stone-900">Non-Blocking (Polling)</td>
                        <td className="py-3 px-4 text-stone-600">Immediate return (EAGAIN loop)</td>
                        <td className="py-3 px-4 text-stone-600">Synchronous copy on success</td>
                        <td className="py-3 px-4 text-amber-600 font-semibold">1 Thread, 100% CPU burn</td>
                        <td className="py-3 px-4 text-stone-600">Very Poor (wastes CPU)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-stone-900">Multiplexed (epoll)</td>
                        <td className="py-3 px-4 text-emerald-600 font-semibold">Kernel wakes loop on event readiness</td>
                        <td className="py-3 px-4 text-stone-600">Synchronous copy by event worker</td>
                        <td className="py-3 px-4 text-emerald-600 font-semibold">Minimal (1 thread per core)</td>
                        <td className="py-3 px-4 text-emerald-600 font-semibold">Massive (100,000+)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-stone-900">Asynchronous (io_uring)</td>
                        <td className="py-3 px-4 text-blue-600 font-semibold">Kernel handles copy asynchronously</td>
                        <td className="py-3 px-4 text-blue-600 font-semibold">Zero-copy into user buffer via ring</td>
                        <td className="py-3 px-4 text-emerald-600 font-semibold">Zero thread context switches</td>
                        <td className="py-3 px-4 text-emerald-600 font-semibold">Hardware bound (million+ IOPS)</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 4: select, poll, epoll & Event-Driven Servers                */}
        {/* ================================================================== */}
        {activeLesson === "epoll" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 4</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  select, poll, epoll, and Event-Driven Servers
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  As the internet transitioned from serving hundreds of connections to millions of persistent WebSockets and HTTP/2 streams (the classic <em>C10K</em> and <em>C1000K</em> problem), the limitations of early Unix polling primitives led Linux kernel engineers to build <code className="font-mono text-xs px-1.5 py-0.5 bg-stone-100 rounded-sm">epoll</code>.
                </p>
              </div>

              {/* SIMULATOR 2: Multiplexing Engine Simulator */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Workflow size={18} className="text-[#ea580c]" />
                      <span>Interactive Benchmark: select() vs poll() vs epoll()</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Vary the total number of monitored connections and active sockets to observe kernel complexity scaling.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-500">epoll Trigger Mode:</span>
                    <button
                      onClick={() => setTriggerMode(triggerMode === "LT" ? "ET" : "LT")}
                      className="px-2.5 py-1 rounded-md bg-white border border-stone-200 text-xs font-mono font-semibold text-[#ea580c]"
                    >
                      {triggerMode === "LT" ? "Level-Triggered (LT)" : "Edge-Triggered (ET)"}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Controls */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-stone-700">
                        <span>Total Monitored Sockets (N):</span>
                        <span className="font-mono text-[#ea580c] font-bold">{monitoredFds.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="20000"
                        step="50"
                        value={monitoredFds}
                        onChange={(e) => setMonitoredFds(Number(e.target.value))}
                        className="w-full accent-[#ea580c] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                        <span>50</span>
                        <span>1,024 (select limit)</span>
                        <span>20,000</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-stone-700">
                        <span>Active Sockets with Ready Data (k):</span>
                        <span className="font-mono text-blue-600 font-bold">{activeFds}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={activeFds}
                        onChange={(e) => setActiveFds(Number(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs space-y-1.5">
                      <div className="font-bold text-stone-900">
                        {triggerMode === "LT" ? "Level-Triggered Mode:" : "Edge-Triggered Mode (EPOLLET):"}
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        {triggerMode === "LT"
                          ? "epoll_wait() continues returning the file descriptor on every call as long as unread bytes remain in the socket receive buffer."
                          : "epoll_wait() triggers only on the state transition from not-ready to ready. The application MUST loop non-blocking recv() until EAGAIN."}
                      </p>
                    </div>
                  </div>

                  {/* Realtime Metrics Comparison */}
                  <div className="grid grid-cols-1 gap-3">
                    {/* select */}
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-stone-900">select()</span>
                        <span className="font-mono text-[11px] text-stone-500">Complexity: O(N)</span>
                      </div>
                      {multiplexMetrics.selectSupported ? (
                        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                          <div className="text-stone-600">
                            CPU Cycles: <span className="font-mono font-bold text-stone-900">{multiplexMetrics.selectCycles.toLocaleString()}</span>
                          </div>
                          <div className="text-stone-600">
                            Copy / Syscall: <span className="font-mono text-stone-900">{multiplexMetrics.selectCopyBytes} bytes</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs text-red-600 font-semibold pt-1">
                          CRASHED: Exceeded FD_SETSIZE (1024 limit)!
                        </div>
                      )}
                    </div>

                    {/* poll */}
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-stone-900">poll()</span>
                        <span className="font-mono text-[11px] text-stone-500">Complexity: O(N)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                        <div className="text-stone-600">
                          CPU Cycles: <span className="font-mono font-bold text-amber-700">{multiplexMetrics.pollCycles.toLocaleString()}</span>
                        </div>
                        <div className="text-stone-600">
                          Copy / Syscall: <span className="font-mono text-amber-700">{(multiplexMetrics.pollCopyBytes / 1024).toFixed(1)} KB</span>
                        </div>
                      </div>
                    </div>

                    {/* epoll */}
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-300 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-emerald-950 flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span>epoll()</span>
                        </span>
                        <span className="font-mono text-[11px] text-emerald-700 font-bold">Complexity: O(1)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                        <div className="text-emerald-900">
                          CPU Cycles: <span className="font-mono font-bold text-emerald-800">{multiplexMetrics.epollCycles.toLocaleString()}</span>
                        </div>
                        <div className="text-emerald-900">
                          Copy / Syscall: <span className="font-mono font-bold text-emerald-800">{multiplexMetrics.epollCopyBytes} bytes</span>
                        </div>
                      </div>
                      <div className="text-[10px] text-emerald-700 pt-0.5">
                        Cycles reduced by ~{Math.round((multiplexMetrics.pollCycles / multiplexMetrics.epollCycles))}x compared to poll!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.4 Python Selectors Event-Loop Code */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">4.4 Python Event-Loop Server with Selectors</h3>
                    <p className="text-xs text-stone-500">
                      Standard library <code className="font-mono">selectors.DefaultSelector()</code> automatically binds to Linux epoll.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import selectors\nimport socket\n\nHOST = "127.0.0.1"\nPORT = 9000\n\nselector = selectors.DefaultSelector()\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\nserver.bind((HOST, PORT))\nserver.listen()\nserver.setblocking(False)\n\ndef accept_connection(listener):\n    conn, address = listener.accept()\n    conn.setblocking(False)\n    selector.register(conn, selectors.EVENT_READ, data=address)\n    print("Connected:", address)\n\ndef handle_connection(conn, address):\n    try:\n        data = conn.recv(4096)\n        if not data:\n            selector.unregister(conn)\n            conn.close()\n            print("Disconnected:", address)\n            return\n        conn.sendall(data)\n    except (ConnectionError, OSError):\n        selector.unregister(conn)\n        conn.close()\n\nselector.register(server, selectors.EVENT_READ, data=accept_connection)\nprint(f"Selector event-loop server listening on {HOST}:{PORT} using {type(selector).__name__}")\n\nwhile True:\n    events = selector.select()\n    for key, mask in events:\n        if key.data is accept_connection:\n            accept_connection(key.fileobj)\n        else:\n            handle_connection(key.fileobj, key.data)\n`,
                        "selector-server-code"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "selector-server-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "selector-server-code" ? "Copied!" : "Copy selector_server.py"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="text-stone-300">
{`# selector_server.py - Single-threaded epoll reactor
import selectors
import socket

HOST = "127.0.0.1"
PORT = 9000

selector = selectors.DefaultSelector() # Uses epoll on Linux!
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind((HOST, PORT))
server.listen()
server.setblocking(False)

def accept_connection(listener):
    conn, address = listener.accept()
    conn.setblocking(False)
    # Register client socket for read readiness
    selector.register(conn, selectors.EVENT_READ, data=address)

def handle_connection(conn, address):
    try:
        data = conn.recv(4096)
        if not data:
            selector.unregister(conn)
            conn.close()
            return
        conn.sendall(data)
    except (ConnectionError, OSError):
        selector.unregister(conn)
        conn.close()

selector.register(server, selectors.EVENT_READ, data=accept_connection)

while True:
    events = selector.select() # Blocks in epoll_wait() until ready fds exist
    for key, mask in events:
        if key.data is accept_connection:
            accept_connection(key.fileobj)
        else:
            handle_connection(key.fileobj, key.data)`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 5: Socket Buffers, Queues & Backpressure                     */}
        {/* ================================================================== */}
        {activeLesson === "buffers" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 5</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Socket Buffers, Queues, and Backpressure
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Networking is not merely sending bytes; every stage in the kernel, device driver, and user-space application has finite queues. When the sender produces data faster than the receiver consumes it, unconstrained queues will grow until the system exhausts memory or suffers crippling tail latency spikes.
                </p>
              </div>

              {/* SIMULATOR 3: Buffer & Flow Control Simulator */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Sliders size={18} className="text-[#ea580c]" />
                      <span>Interactive Simulator: Socket Buffer & Flow Control Dynamics</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Observe how client transmission rates and server consumption rates trigger TCP zero-window probing and application backpressure.
                    </p>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    bufferSim.alertLevel === "emerald"
                      ? "bg-emerald-100 text-emerald-800"
                      : bufferSim.alertLevel === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {bufferSim.state}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-stone-700">
                        <span>Client Send Rate:</span>
                        <span className="font-mono font-bold text-[#ea580c]">{clientSendRate} MB/s</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="150"
                        value={clientSendRate}
                        onChange={(e) => setClientSendRate(Number(e.target.value))}
                        className="w-full accent-[#ea580c] cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-stone-700">
                        <span>Server Processing Rate:</span>
                        <span className="font-mono font-bold text-blue-600">{serverProcessRate} MB/s</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="150"
                        value={serverProcessRate}
                        onChange={(e) => setServerProcessRate(Number(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium text-stone-700">
                        <span>Socket SO_RCVBUF:</span>
                        <span className="font-mono font-bold text-stone-800">{bufferCapacity} KB</span>
                      </div>
                      <input
                        type="range"
                        min="16"
                        max="256"
                        step="16"
                        value={bufferCapacity}
                        onChange={(e) => setBufferCapacity(Number(e.target.value))}
                        className="w-full accent-stone-700 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Buffer Gauge */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
                    <div className="flex justify-between text-xs font-semibold text-stone-900">
                      <span>Kernel SO_RCVBUF Fill Level:</span>
                      <span className="font-mono">{bufferSim.occupancyPercent}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-4 rounded-full bg-stone-100 overflow-hidden p-0.5 border border-stone-200">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          bufferSim.occupancyPercent > 85
                            ? "bg-red-500"
                            : bufferSim.occupancyPercent > 60
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                        style={{ width: `${bufferSim.occupancyPercent}%` }}
                      />
                    </div>

                    <div className="space-y-2 text-xs pt-2 border-t border-stone-100">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Advertised TCP Window (rwnd):</span>
                        <span className="font-mono font-bold text-stone-800">{bufferSim.tcpWindowSize} KB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Net Accumulation Rate:</span>
                        <span className={`font-mono font-bold ${bufferSim.netRate > 0 ? "text-red-600" : "text-emerald-600"}`}>
                          {bufferSim.netRate > 0 ? `+${bufferSim.netRate} MB/s` : `${bufferSim.netRate} MB/s`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Control vs Backpressure Explanation */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 text-xs">
                    <div className="font-bold text-stone-900">Three Distinct Overload Defenses:</div>
                    <ul className="space-y-2 text-stone-600">
                      <li>
                        <strong className="text-stone-900">1. TCP Flow Control:</strong> Protects the receiver kernel buffer. Advertises <code className="font-mono text-[11px] bg-stone-100 px-1">rwnd=0</code> to stop the sender NIC.
                      </li>
                      <li>
                        <strong className="text-stone-900">2. TCP Congestion Control:</strong> Protects the network pipe. Adapts <code className="font-mono text-[11px] bg-stone-100 px-1">cwnd</code> to packet drop/delay signals (BBR/Cubic).
                      </li>
                      <li>
                        <strong className="text-stone-900">3. Application Backpressure:</strong> Protects the user service memory. Stops reading from socket when work queues are saturated.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5.4 Socket Queue Inspection Commands */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-stone-900">5.4 Inspecting TCP Queues with ss</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "ss -lnt\nss -tin\nss -tan state established",
                        "cmd-inspect-queues"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "cmd-inspect-queues" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "cmd-inspect-queues" ? "Copied!" : "Copy Commands"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto space-y-3">
                  <div className="text-stone-400"># Listening sockets: Send-Q = backlog limit, Recv-Q = unaccepted completed handshakes</div>
                  <div className="text-emerald-400">$ ss -lnt</div>
                  <div className="text-stone-300">
                    State      Recv-Q Send-Q Local Address:Port  Peer Address:Port{"\n"}
                    LISTEN     0      128    127.0.0.1:9000      0.0.0.0:*
                  </div>

                  <div className="text-stone-400 pt-2"># Established connections: Recv-Q = bytes unread by app, Send-Q = bytes unacked by peer</div>
                  <div className="text-emerald-400">$ ss -tan state established</div>
                  <div className="text-stone-300">
                    State      Recv-Q Send-Q Local Address:Port  Peer Address:Port{"\n"}
                    ESTAB      4096   0      127.0.0.1:9000      127.0.0.1:48210
                  </div>

                  <div className="text-stone-400 pt-2"># Detailed TCP metrics: rtt, cwnd, ssthresh, retransmissions</div>
                  <div className="text-emerald-400">$ ss -tin</div>
                  <div className="text-stone-300">
                    ESTAB      0      0      127.0.0.1:9000      127.0.0.1:48210{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;cubic wscale:7,7 rto:200 rtt:0.045/0.012 ato:40 mss:65464 rcvspace:65464 ssthresh:20 cwnd:10
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 6: Network Namespaces & Local Isolation                      */}
        {/* ================================================================== */}
        {activeLesson === "namespaces" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 6</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Network Namespaces and Local Isolation
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  A Linux network namespace provides a completely isolated virtual copy of the networking stack. Container runtimes (such as Docker, Podman, and Kubernetes CRI-O) use network namespaces to guarantee that container applications have their own interfaces, routing tables, and port allocations without conflicting with the host system.
                </p>
              </div>

              {/* 6.1 What a Namespace Isolates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Network Interfaces",
                    desc: "Each namespace has its own loopback (lo) and assigned devices (veth, macvlan). eth0 on host is invisible inside container namespace.",
                  },
                  {
                    title: "Routing Tables",
                    desc: "Independent FIB routing table. A container can route default traffic through a virtual gateway IP completely separate from host.",
                  },
                  {
                    title: "Port Binding Namespace",
                    desc: "Two distinct processes can both bind to 0.0.0.0:80 without port collisions, because sockets live in separate namespace tables.",
                  },
                  {
                    title: "Firewall & iptables",
                    desc: "Isolated Netfilter tables, connection tracking (conntrack), NAT tables, and traffic shaping qdiscs per namespace.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-semibold text-[#ea580c] uppercase tracking-wide">Domain {idx + 1}</div>
                    <div className="text-sm font-bold text-stone-900">{item.title}</div>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* 6.3 Isolated Namespace Lab Walkthrough */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">6.3 Hands-On Network Namespace Lab</h3>
                    <p className="text-xs text-stone-500">
                      Create two network namespaces and link them through a virtual Ethernet wire (veth pair).
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `# 1. Create two isolated network namespaces\nsudo ip netns add ns-client\nsudo ip netns add ns-server\n\n# 2. Create a virtual Ethernet cable (veth pair)\nsudo ip link add veth-client type veth peer name veth-server\n\n# 3. Plug each end of the virtual cable into its respective namespace\nsudo ip link set veth-client netns ns-client\nsudo ip link set veth-server netns ns-server\n\n# 4. Assign IP addresses to each endpoint\nsudo ip -n ns-client addr add 10.10.0.1/24 dev veth-client\nsudo ip -n ns-server addr add 10.10.0.2/24 dev veth-server\n\n# 5. Bring loopback and virtual links UP\nsudo ip -n ns-client link set lo up\nsudo ip -n ns-server link set lo up\nsudo ip -n ns-client link set veth-client up\nsudo ip -n ns-server link set veth-server up\n\n# 6. Verify cross-namespace ping\nsudo ip netns exec ns-client ping -c 3 10.10.0.2\n\n# 7. Cleanup\nsudo ip netns del ns-client\nsudo ip netns del ns-server\n`,
                        "netns-lab-code"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "netns-lab-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "netns-lab-code" ? "Copied!" : "Copy Lab Script"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto space-y-2">
                  <div className="text-stone-400"># 1. Inspect namespace of current process</div>
                  <div className="text-emerald-400">$ readlink /proc/self/ns/net</div>
                  <div className="text-stone-300">net:[4026531992]</div>

                  <div className="text-stone-400 pt-2"># 2. Create isolated namespaces</div>
                  <div className="text-emerald-400">$ sudo ip netns add ns-client && sudo ip netns add ns-server</div>

                  <div className="text-stone-400 pt-2"># 3. Connect namespaces with virtual wire & configure IPs</div>
                  <div className="text-emerald-400">$ sudo ip link add veth-client type veth peer name veth-server</div>
                  <div className="text-emerald-400">$ sudo ip link set veth-client netns ns-client</div>
                  <div className="text-emerald-400">$ sudo ip link set veth-server netns ns-server</div>
                  <div className="text-emerald-400">$ sudo ip -n ns-client addr add 10.10.0.1/24 dev veth-client</div>
                  <div className="text-emerald-400">$ sudo ip -n ns-server addr add 10.10.0.2/24 dev veth-server</div>
                  <div className="text-emerald-400">$ sudo ip -n ns-client link set lo up && sudo ip -n ns-client link set veth-client up</div>
                  <div className="text-emerald-400">$ sudo ip -n ns-server link set lo up && sudo ip -n ns-server link set veth-server up</div>

                  <div className="text-stone-400 pt-2"># 4. Execute ping across virtual cable</div>
                  <div className="text-emerald-400">$ sudo ip netns exec ns-client ping -c 3 10.10.0.2</div>
                  <div className="text-stone-300">
                    64 bytes from 10.10.0.2: icmp_seq=1 ttl=64 time=0.038 ms{"\n"}
                    64 bytes from 10.10.0.2: icmp_seq=2 ttl=64 time=0.041 ms{"\n"}
                    3 packets transmitted, 3 received, 0% packet loss
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 7: Scaling Concurrent Servers                                */}
        {/* ================================================================== */}
        {activeLesson === "architectures" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 7</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  How Servers Scale Across Processes, Threads, and Event Loops
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  There is no single "best" server architecture for all workloads. The optimal design depends on concurrent connection counts, ratio of CPU computation to I/O wait, memory limits, and latency targets.
                </p>
              </div>

              {/* SIMULATOR 4: Concurrent Server Architecture Capacity Benchmark */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Server size={18} className="text-[#ea580c]" />
                      <span>Interactive Simulator: Server Architecture Capacity Under Load</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Compare Process-per-connection, Thread-per-connection, Thread Pool, and Event Loop under increasing client load.
                    </p>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    archMetrics.statusColor === "emerald"
                      ? "bg-emerald-100 text-emerald-800"
                      : archMetrics.statusColor === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {archMetrics.statusText}
                  </div>
                </div>

                {/* Architecture Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "process", label: "Process per Connection", sub: "Fork per client (Apache)" },
                    { id: "thread", label: "Thread per Connection", sub: "Thread per client (Pthreads)" },
                    { id: "pool", label: "Bounded Thread Pool", sub: "Fixed 32 workers + queue" },
                    { id: "event_loop", label: "Event Loop (epoll)", sub: "Non-blocking reactor (Node/Nginx)" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setArchModel(m.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        archModel === m.id
                          ? "bg-white border-[#ea580c] shadow-xs ring-1 ring-[#ea580c]/30"
                          : "bg-white/60 border-stone-200 hover:bg-white text-stone-600"
                      }`}
                    >
                      <div className="font-bold text-stone-900">{m.label}</div>
                      <div className="text-[10px] text-stone-500">{m.sub}</div>
                    </button>
                  ))}
                </div>

                {/* Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-stone-700">
                    <span>Simulated Concurrent Active Clients:</span>
                    <span className="font-mono text-[#ea580c] font-bold text-sm">
                      {clientConnections.toLocaleString()} clients
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    step="50"
                    value={clientConnections}
                    onChange={(e) => setClientConnections(Number(e.target.value))}
                    className="w-full accent-[#ea580c] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>10 clients</span>
                    <span>1,000</span>
                    <span>5,000 clients</span>
                  </div>
                </div>

                {/* Performance Dashboard */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="text-[10px] uppercase font-semibold text-stone-500">OS Threads/Procs</div>
                    <div className="text-lg font-mono font-bold text-stone-900">{archMetrics.threads.toLocaleString()}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="text-[10px] uppercase font-semibold text-stone-500">Memory RSS</div>
                    <div className={`text-lg font-mono font-bold ${archMetrics.memoryMB > 4000 ? "text-red-600" : "text-stone-900"}`}>
                      {archMetrics.memoryMB.toLocaleString()} MB
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="text-[10px] uppercase font-semibold text-stone-500">Context Switches/s</div>
                    <div className="text-lg font-mono font-bold text-stone-900">{archMetrics.contextSwitchesSec.toLocaleString()}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="text-[10px] uppercase font-semibold text-stone-500">Throughput</div>
                    <div className="text-lg font-mono font-bold text-emerald-600">{archMetrics.throughputReqSec.toLocaleString()} req/s</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <div className="text-[10px] uppercase font-semibold text-stone-500">p99 Latency</div>
                    <div className={`text-lg font-mono font-bold ${archMetrics.p99LatencyMs > 50 ? "text-red-600" : "text-stone-900"}`}>
                      {archMetrics.p99LatencyMs} ms
                    </div>
                  </div>
                </div>
              </div>

              {/* 7.3 The 5 Load Stages */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-stone-900">7.3 What Happens as Local Load Increases?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {[
                    {
                      stage: "1. Underloaded",
                      desc: "Requests served immediately. CPU and socket queues near 0. Latency equals minimal propagation time.",
                      color: "text-stone-700 bg-stone-50",
                    },
                    {
                      stage: "2. Healthy Linear",
                      desc: "Throughput scales proportionally with incoming client rate. Worker utilization is high, latency stays flat.",
                      color: "text-emerald-800 bg-emerald-50",
                    },
                    {
                      stage: "3. Saturation Point",
                      desc: "CPU cores, worker threads, or network queues hit 100% capacity. Throughput plateaus at max ceiling.",
                      color: "text-blue-800 bg-blue-50",
                    },
                    {
                      stage: "4. Queue Growth",
                      desc: "Incoming requests wait in listen backlog or application queue. Mean latency rises, p95/p99 explodes.",
                      color: "text-amber-800 bg-amber-50",
                    },
                    {
                      stage: "5. Degradation Cliff",
                      desc: "Timeouts cause clients to retry, compounding load. Dropped connections, memory thrashing, service collapse.",
                      color: "text-red-800 bg-red-50",
                    },
                  ].map((s) => (
                    <div key={s.stage} className={`p-4 rounded-2xl border border-stone-200 ${s.color} space-y-1`}>
                      <div className="font-bold text-xs">{s.stage}</div>
                      <p className="text-[11px] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* CAPSTONE LAB: Build and Benchmark a Concurrent TCP Server          */}
        {/* ================================================================== */}
        {activeLesson === "capstone" && (
          <section id="capstone-lab" className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Capstone Engineering Lab</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Build and Benchmark a Concurrent TCP Server
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Implement a bounded multi-threaded TCP server, generate concurrent client load, and measure how throughput and p95 tail latency change across 1, 5, 10, 25, and 50 concurrency levels.
                </p>
              </div>

              {/* Step 1: Threaded Server Script */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Step 1 — Save and Run threaded_server.py</h3>
                    <p className="text-xs text-stone-500">
                      Bounded multi-threaded server with semaphore connection slots and socket timeout.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import socket\nimport threading\nfrom socketserver import ThreadingMixIn, TCPServer, StreamRequestHandler\n\nHOST = "127.0.0.1"\nPORT = 9000\nMAX_CONNECTIONS = 100\n\nclass EchoHandler(StreamRequestHandler):\n    timeout = 3\n\n    def handle(self):\n        while True:\n            try:\n                line = self.rfile.readline()\n                if not line:\n                    break\n                self.wfile.write(line)\n                self.wfile.flush()\n            except (socket.timeout, ConnectionResetError, BrokenPipeError):\n                break\n\nclass BoundedThreadingServer(ThreadingMixIn, TCPServer):\n    daemon_threads = True\n    allow_reuse_address = True\n    request_queue_size = 128\n\n    def __init__(self, address, handler):\n        self.connection_slots = threading.BoundedSemaphore(MAX_CONNECTIONS)\n        super().__init__(address, handler)\n\n    def process_request(self, request, client_address):\n        if not self.connection_slots.acquire(blocking=False):\n            request.close()\n            return\n        try:\n            super().process_request(request, client_address)\n        except Exception:\n            self.connection_slots.release()\n            raise\n\n    def process_request_thread(self, request, client_address):\n        try:\n            super().process_request_thread(request, client_address)\n        finally:\n            self.connection_slots.release()\n\nif __name__ == "__main__":\n    print(f"[*] Bounded TCP server listening on {HOST}:{PORT} (Max {MAX_CONNECTIONS} threads)")\n    with BoundedThreadingServer((HOST, PORT), EchoHandler) as server:\n        try:\n            server.serve_forever()\n        except KeyboardInterrupt:\n            print("\\n[*] Shutting down server gracefully.")\n`,
                        "threaded-server-code"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "threaded-server-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "threaded-server-code" ? "Copied!" : "Copy threaded_server.py"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="text-stone-300">
{`# threaded_server.py
import socket
import threading
from socketserver import ThreadingMixIn, TCPServer, StreamRequestHandler

HOST = "127.0.0.1"
PORT = 9000
MAX_CONNECTIONS = 100

class EchoHandler(StreamRequestHandler):
    timeout = 3

    def handle(self):
        while True:
            try:
                line = self.rfile.readline()
                if not line:
                    break
                self.wfile.write(line)
                self.wfile.flush()
            except (socket.timeout, ConnectionResetError, BrokenPipeError):
                break

class BoundedThreadingServer(ThreadingMixIn, TCPServer):
    daemon_threads = True
    allow_reuse_address = True
    request_queue_size = 128

    def __init__(self, address, handler):
        self.connection_slots = threading.BoundedSemaphore(MAX_CONNECTIONS)
        super().__init__(address, handler)

    def process_request(self, request, client_address):
        if not self.connection_slots.acquire(blocking=False):
            request.close()
            return
        try:
            super().process_request(request, client_address)
        except Exception:
            self.connection_slots.release()
            raise

    def process_request_thread(self, request, client_address):
        try:
            super().process_request_thread(request, client_address)
        finally:
            self.connection_slots.release()

if __name__ == "__main__":
    print(f"[*] Bounded TCP server listening on {HOST}:{PORT}")
    with BoundedThreadingServer((HOST, PORT), EchoHandler) as server:
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\\n[*] Shutting down server gracefully.")`}
                  </pre>
                </div>
              </div>

              {/* Step 2: Benchmark Client Script */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Step 2 — Save bench_client.py</h3>
                    <p className="text-xs text-stone-500">
                      Multi-threaded benchmark load generator measuring completed requests, throughput, and p95 latency.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import argparse\nimport socket\nimport statistics\nimport time\nfrom concurrent.futures import ThreadPoolExecutor, as_completed\n\ndef worker(host, port, requests):\n    latencies = []\n    errors = 0\n    try:\n        with socket.create_connection((host, port), timeout=3) as sock:\n            sock.settimeout(3)\n            reader = sock.makefile("rb")\n            for _ in range(requests):\n                message = b"hello\\n"\n                start = time.perf_counter()\n                try:\n                    sock.sendall(message)\n                    response = reader.readline()\n                    if response != message:\n                        errors += 1\n                        continue\n                    latencies.append((time.perf_counter() - start) * 1000)\n                except (OSError, TimeoutError):\n                    errors += 1\n    except (OSError, TimeoutError):\n        errors += requests\n    return latencies, errors\n\ndef main():\n    parser = argparse.ArgumentParser()\n    parser.add_argument("--host", default="127.0.0.1")\n    parser.add_argument("--port", type=int, default=9000)\n    parser.add_argument("--concurrency", type=int, default=10)\n    parser.add_argument("--requests", type=int, default=100)\n    args = parser.parse_args()\n\n    print(f"Running benchmark: {args.concurrency} concurrent workers, {args.requests} requests each...")\n    total_start = time.perf_counter()\n    all_latencies = []\n    total_errors = 0\n\n    with ThreadPoolExecutor(max_workers=args.concurrency) as executor:\n        futures = [executor.submit(worker, args.host, args.port, args.requests) for _ in range(args.concurrency)]\n        for f in as_completed(futures):\n            lats, errs = f.result()\n            all_latencies.extend(lats)\n            total_errors += errs\n\n    total_duration = time.perf_counter() - total_start\n    completed = len(all_latencies)\n    throughput = completed / total_duration if total_duration > 0 else 0\n    p95 = statistics.quantiles(all_latencies, n=100)[94] if len(all_latencies) >= 20 else (statistics.mean(all_latencies) if all_latencies else 0)\n\n    print(f"\\n--- Benchmark Results ({args.concurrency} clients) ---")\n    print(f"Completed:  {completed} reqs")\n    print(f"Duration:   {total_duration:.3f} s")\n    print(f"Throughput: {throughput:.1f} req/s")\n    print(f"p95 Lat:    {p95:.2f} ms")\n    print(f"Errors:     {total_errors}")\n\nif __name__ == "__main__":\n    main()\n`,
                        "bench-client-code"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "bench-client-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "bench-client-code" ? "Copied!" : "Copy bench_client.py"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="text-stone-300">
{`# bench_client.py
import argparse, socket, statistics, time
from concurrent.futures import ThreadPoolExecutor, as_completed

def worker(host, port, requests):
    latencies = []
    errors = 0
    try:
        with socket.create_connection((host, port), timeout=3) as sock:
            sock.settimeout(3)
            reader = sock.makefile("rb")
            for _ in range(requests):
                msg = b"hello\\n"
                t0 = time.perf_counter()
                try:
                    sock.sendall(msg)
                    resp = reader.readline()
                    if resp != msg:
                        errors += 1
                        continue
                    latencies.append((time.perf_counter() - t0) * 1000)
                except (OSError, TimeoutError):
                    errors += 1
    except (OSError, TimeoutError):
        errors += requests
    return latencies, errors`}
                  </pre>
                </div>
              </div>

              {/* Step 3: Concurrency Execution Table */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-stone-900">Step 3 — Run Increasing Concurrency Tests</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                        <th className="py-2.5 px-3 font-semibold">Concurrency</th>
                        <th className="py-2.5 px-3 font-semibold">Test Command</th>
                        <th className="py-2.5 px-3 font-semibold">Completed</th>
                        <th className="py-2.5 px-3 font-semibold">Throughput (req/s)</th>
                        <th className="py-2.5 px-3 font-semibold">p95 Latency</th>
                        <th className="py-2.5 px-3 font-semibold">Errors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {[1, 5, 10, 25, 50].map((c) => (
                        <tr key={c}>
                          <td className="py-2.5 px-3 font-bold font-mono text-stone-900">{c} clients</td>
                          <td className="py-2.5 px-3 font-mono text-xs text-stone-600">
                            python3 bench_client.py --concurrency {c} --requests 100
                          </td>
                          <td className="py-2.5 px-3 text-stone-500 italic">Measure</td>
                          <td className="py-2.5 px-3 text-stone-500 italic">Measure</td>
                          <td className="py-2.5 px-3 text-stone-500 italic">Measure</td>
                          <td className="py-2.5 px-3 text-stone-500 italic">Measure</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 4: Monitoring Commands */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-stone-900">Step 4 — Live Monitoring Commands (Terminal 3)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-mono text-xs font-bold text-[#ea580c]">$ top -H -p $(pgrep -f threaded_server)</div>
                    <p className="text-[11px] text-stone-600">Shows thread count, per-thread CPU utilization, and state.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-mono text-xs font-bold text-[#ea580c]">$ ss -tan state established</div>
                    <p className="text-[11px] text-stone-600">Monitors active connected sockets and socket queue depth.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-mono text-xs font-bold text-[#ea580c]">$ vmstat 1</div>
                    <p className="text-[11px] text-stone-600">Monitors system context switches (<code className="font-mono">cs</code>) and runnable queue (<code className="font-mono">r</code>).</p>
                  </div>
                </div>
              </div>

              {/* Capstone Report Template */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-stone-900">Lab Diagnostic Report Template</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `# Module 19 Capstone Report: Concurrent TCP Server Benchmarking\n\n## 1. Executive Summary\n- Server Host: Linux 6.x (x86_64 / aarch64)\n- Python Version: 3.11+\n- Tested Architectures: Threaded Server vs Event Loop Server\n\n## 2. Measurement Data Table\n| Concurrency | Throughput (req/s) | p95 Latency (ms) | p99 Latency (ms) | Errors |\n|---|---|---|---|---|\n| 1 client    |                   |                  |                  |        |\n| 5 clients   |                   |                  |                  |        |\n| 10 clients  |                   |                  |                  |        |\n| 25 clients  |                   |                  |                  |        |\n| 50 clients  |                   |                  |                  |        |\n\n## 3. Bottleneck Analysis\n- Plateau Point: At what concurrency did throughput saturate?\n- Tail Latency Spike: Did p95/p99 grow exponentially or linearly?\n- Resource Limiter: Was the system bounded by GIL contention, thread context switching, or socket backlog drops?\n\n## 4. Architectural Comparison\n- Comparison against selector_server.py event loop.\n- Recommended Production Improvements: non-blocking writes, explicit output buffering, epoll edge-triggered workers.\n`,
                        "report-template"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "report-template" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "report-template" ? "Copied!" : "Copy Report Template"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-2">
                  <p className="font-semibold text-stone-800">
                    Grading Rubric Criteria (100% Total):
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div>• Correct TCP server implementation (20%)</div>
                    <div>• Repeatable multi-threaded client (20%)</div>
                    <div>• Accurate latency & throughput (20%)</div>
                    <div>• Evidence-based bottleneck analysis (20%)</div>
                    <div>• Architecture comparison & improvements (10%)</div>
                    <div>• Report quality & reproducibility (10%)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* KNOWLEDGE ASSESSMENT (6 QUESTIONS)                                 */}
        {/* ================================================================== */}
        {activeLesson === "quiz" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Knowledge Assessment</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                    Module 19 Mastery Exam
                  </h2>
                  <p className="text-xs text-stone-500">
                    6 comprehensive engineering questions · 1 point each · Instant architectural verification
                  </p>
                </div>

                {showQuizResults && (
                  <div className="px-4 py-2 rounded-2xl bg-stone-900 text-white font-mono text-sm flex items-center gap-2">
                    <Award size={16} className="text-[#ea580c]" />
                    <span>Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)</span>
                  </div>
                )}
              </div>

              <div className="space-y-6 pt-2">
                {quizQuestions.map((q, idx) => {
                  const userAnswer = quizAnswers[q.id];
                  const hasAnswered = userAnswer !== undefined;
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                      <div className="font-bold text-sm text-stone-900">
                        {idx + 1}. {q.question}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          let optClasses = "p-3 rounded-xl border text-xs text-left transition-all ";
                          if (!showQuizResults) {
                            optClasses +=
                              userAnswer === optIdx
                                ? "bg-white border-[#ea580c] ring-1 ring-[#ea580c]/30 text-stone-900 font-semibold shadow-xs"
                                : "bg-white border-stone-200 hover:bg-stone-50 text-stone-700";
                          } else {
                            if (optIdx === q.correctAnswer) {
                              optClasses += "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                            } else if (userAnswer === optIdx && !isCorrect) {
                              optClasses += "bg-red-50 border-red-500 text-red-950 font-semibold";
                            } else {
                              optClasses += "bg-white/60 border-stone-200 text-stone-500 opacity-60";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => !showQuizResults && handleSelectQuiz(q.id, optIdx)}
                              className={optClasses}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className={`p-3 rounded-xl text-xs space-y-1 ${isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}>
                          <div className="font-bold">{isCorrect ? "✓ Correct!" : "✗ Incorrect"}</div>
                          <p className="leading-relaxed">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#e7e3da]">
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setShowQuizResults(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium"
                >
                  Reset Answers
                </button>

                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 disabled:opacity-50 text-white font-medium text-xs shadow-xs"
                >
                  Check Answers
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* MASTERY CHECKLIST & SUMMARY                                        */}
        {/* ================================================================== */}
        <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <CheckSquare size={20} className="text-[#ea580c]" />
              <span>Module 19 Systems Engineering Mastery Checklist</span>
            </h3>
            <p className="text-xs text-stone-500">
              Track your conceptual and hands-on comprehension of Linux network I/O internals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { key: "stackPath", label: "Trace network data path: socket API -> TCP -> Qdisc -> ring buffer -> NIC DMA" },
              { key: "tcpVsUdp", label: "Explain why TCP does NOT preserve message boundaries and how to frame application protocols" },
              { key: "socketLifecycle", label: "Distinguish listening vs connected socket descriptors, TIME_WAIT, and SO_REUSEADDR" },
              { key: "ioMultiplexing", label: "Explain why blocking threads cause thread exhaustion under high connection concurrency" },
              { key: "epollMechanics", label: "Compare select() O(N) bitmap vs epoll() O(1) red-black tree and Level vs Edge Triggering" },
              { key: "bufferBackpressure", label: "Distinguish TCP flow control (rwnd), congestion control (cwnd), and application backpressure" },
              { key: "netNamespaces", label: "Create and link Linux network namespaces with virtual Ethernet pairs (veth)" },
              { key: "benchmarking", label: "Benchmark concurrent TCP server and diagnose saturation plateaus and p95 tail latency" },
            ].map((item) => (
              <div
                key={item.key}
                onClick={() => toggleChecklist(item.key)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer select-none transition-all ${
                  checklist[item.key]
                    ? "bg-emerald-50/50 border-emerald-300 text-stone-900"
                    : "bg-stone-50/50 border-stone-200 text-stone-600 hover:bg-white"
                }`}
              >
                <div className={`mt-0.5 rounded-md p-0.5 ${checklist[item.key] ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"}`}>
                  <Check size={12} className={checklist[item.key] ? "opacity-100" : "opacity-0"} />
                </div>
                <span className="text-xs leading-relaxed font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation Bar */}
        <div className="pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/diagnostics")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 18 (Linux Internals & Diagnostics)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/security")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 20 (OS Security, Isolation & Reliability)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Networking & Network I/O"
        defaultMessage="Hello! Ask me any question about the Linux networking stack, TCP/UDP sockets, non-blocking I/O, epoll vs select, socket buffers, application backpressure, or network namespaces!"
      />
    </div>
  );
}
