import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
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
  Router as RouterIcon,
  Wifi,
  Radio,
  Share2,
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 1                         */
/* Introduction to Computer Networks & Internet Architecture                  */
/* MIT 6.02/6.033, Stanford CS144, UC Berkeley CS168, CMU 15-441, Princeton   */
/* -------------------------------------------------------------------------- */

export default function NetworkIntro() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'packet-tracer' | 'diagnostics' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE CALCULATOR 1: END-TO-END DELAY & PACKET SWITCHING              */
  /* -------------------------------------------------------------------------- */
  const [packetSizeBits, setPacketSizeBits] = useState(12000); // 1500 bytes = 12000 bits
  const [linkBandwidthMbps, setLinkBandwidthMbps] = useState(100); // 100 Mbps
  const [linkDistanceKm, setLinkDistanceKm] = useState(2500); // 2500 km
  const [propSpeedKmS, setPropSpeedKmS] = useState(200000); // 200,000 km/s in fiber
  const [queueingDelayMs, setQueueingDelayMs] = useState(2.5); // 2.5 ms
  const [processingDelayMs, setProcessingDelayMs] = useState(0.5); // 0.5 ms
  const [routerHops, setRouterHops] = useState(4); // 4 router hops

  const delayCalculations = useMemo(() => {
    const linkBps = linkBandwidthMbps * 1000000;
    // Transmission delay = L / R (in ms)
    const transDelayMs = (packetSizeBits / linkBps) * 1000;
    // Propagation delay per link = d / s (in ms)
    const propDelayPerHopMs = (linkDistanceKm / routerHops / propSpeedKmS) * 1000;
    const totalPropDelayMs = (linkDistanceKm / propSpeedKmS) * 1000;

    // Per-hop delay = transmission + propagation + queueing + processing
    const totalQueueingMs = queueingDelayMs * routerHops;
    const totalProcessingMs = processingDelayMs * routerHops;
    const totalTransmissionMs = transDelayMs * routerHops; // store and forward at each hop
    const totalEndToEndMs = totalTransmissionMs + totalPropDelayMs + totalQueueingMs + totalProcessingMs;

    // Bandwidth-Delay Product (BDP) in bits = Bandwidth (bps) * RTT (seconds)
    // Assuming symmetric RTT = 2 * totalEndToEnd
    const rttSec = (totalEndToEndMs * 2) / 1000;
    const bdpBits = linkBps * rttSec;
    const bdpKBytes = (bdpBits / 8 / 1024).toFixed(1);

    return {
      transDelayMs: transDelayMs.toFixed(3),
      totalTransmissionMs: totalTransmissionMs.toFixed(2),
      propDelayPerHopMs: propDelayPerHopMs.toFixed(2),
      totalPropDelayMs: totalPropDelayMs.toFixed(2),
      totalQueueingMs: totalQueueingMs.toFixed(2),
      totalProcessingMs: totalProcessingMs.toFixed(2),
      totalEndToEndMs: totalEndToEndMs.toFixed(2),
      bdpKBytes,
    };
  }, [packetSizeBits, linkBandwidthMbps, linkDistanceKm, propSpeedKmS, queueingDelayMs, processingDelayMs, routerHops]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 2: PACKET TRACER & DEVICE FORWARDING                 */
  /* -------------------------------------------------------------------------- */
  const [traceStep, setTraceStep] = useState(0);

  const packetTraceSteps = [
    {
      step: 0,
      title: "1. Application Layer (Browser)",
      device: "Client Laptop (192.168.1.50)",
      action: "Constructs HTTP GET /index.html and queries DNS for server IP (93.184.216.34).",
      pdu: "HTTP Request Data payload",
      headerInfo: "Host: example.com, User-Agent: Mozilla/5.0, Accept: text/html",
      forwardingLevel: "Application Process",
    },
    {
      step: 1,
      title: "2. Transport Layer Encapsulation",
      device: "Client OS Kernel TCP Stack",
      action: "Segments HTTP data into TCP segment. Assigns ephemeral source port (54128) and destination port (443 / 80). Sets SEQ=1, ACK=1, SYN/ACK flags.",
      pdu: "TCP Segment",
      headerInfo: "Src Port: 54128, Dst Port: 443, Seq: 100, Checksum: 0x9f4a",
      forwardingLevel: "Transport Layer (End-to-End Reliability)",
    },
    {
      step: 2,
      title: "3. Network Layer Addressing",
      device: "Client OS Kernel IP Stack",
      action: "Encapsulates TCP segment into IPv4 Packet. Examines local routing table: destination 93.184.216.34 is outside local subnet /24, so route points to Default Gateway (192.168.1.1).",
      pdu: "IP Packet",
      headerInfo: "Src IP: 192.168.1.50, Dst IP: 93.184.216.34, TTL: 64, Protocol: 6 (TCP)",
      forwardingLevel: "Network Layer (Logical Routing)",
    },
    {
      step: 3,
      title: "4. Data Link Layer (Ethernet Framing)",
      device: "Client NIC (Physical Layer)",
      action: "Kernel consults ARP table for Default Gateway IP (192.168.1.1) to find its MAC address (00:1a:2b:3c:4d:5e). Generates Ethernet Frame with Frame Check Sequence (FCS/CRC).",
      pdu: "Ethernet Frame",
      headerInfo: "Src MAC: aa:bb:cc:11:22:33, Dst MAC: 00:1a:2b:3c:4d:5e, EtherType: 0x0800 (IPv4)",
      forwardingLevel: "Data Link Layer (Local Hop Delivery)",
    },
    {
      step: 4,
      title: "5. L2 Ethernet Switch Forwarding",
      device: "Office Switch (Layer 2)",
      action: "Reads incoming frame on Port 3. Inspects Dst MAC (00:1a:2b:3c:4d:5e). Matches CAM/MAC table: forwards frame directly out Port 24 towards router without modifying IP or TCP headers.",
      pdu: "Ethernet Frame (Unmodified IP Packet)",
      headerInfo: "Switch forwards based solely on Layer 2 MAC address. Frame payload is untouched.",
      forwardingLevel: "Layer 2 MAC Forwarding (Hardware ASIC Switching)",
    },
    {
      step: 5,
      title: "6. L3 Default Gateway Router & NAT",
      device: "Border Router / Gateway (192.168.1.1)",
      action: "Receives frame, verifies FCS. Strips L2 frame header. Inspects L3 Dst IP (93.184.216.34). Performs NAT: changes Src IP to Public IP (203.0.113.88). Decrements TTL (63). Re-encapsulates into WAN fiber frame with new next-hop ISP router MAC.",
      pdu: "Modified IP Packet in WAN Frame",
      headerInfo: "New Src IP: 203.0.113.88, TTL: 63, New Dst MAC: ISP Gateway Router",
      forwardingLevel: "Layer 3 Routing & Network Address Translation (NAT)",
    },
    {
      step: 6,
      title: "7. Autonomous System (ISP Transit & Peering)",
      device: "Tier-1 / Transit Backbone Routers (BGP)",
      action: "Core optical routers perform longest-prefix match on routing tables (BGP/CIDR). Each hop decrements TTL and forwards packet across fiber optic links using statistical multiplexing.",
      pdu: "IP Datagram over MPLS / Optical Transport",
      headerInfo: "High-speed transit across autonomous systems (ASNs) via Internet Exchange Points (IXPs).",
      forwardingLevel: "Global Internet Core Packet Switching",
    },
    {
      step: 7,
      title: "8. Server Decapsulation & Response",
      device: "Web Server (93.184.216.34)",
      action: "Server NIC verifies frame CRC -> IP stack checks Dst IP -> TCP reassembles stream on Port 443 -> Nginx/HTTP server receives GET request and prepares HTTP 200 OK response payload.",
      pdu: "Decapsulated HTTP Request Stream",
      headerInfo: "Handed over to web server application process; handshake completes.",
      forwardingLevel: "Application Server Response Processing",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 3: NETWORK CLI DIAGNOSTICS TERMINAL                  */
  /* -------------------------------------------------------------------------- */
  const [activeCliCommand, setActiveCliCommand] = useState("ping");

  const cliCommandsData = {
    ping: {
      cmd: "ping -c 4 8.8.8.8",
      description: "Test bidirectional reachability and measure round-trip time (RTT) using ICMP Echo Request / Echo Reply.",
      proves: "Proves network layer (L3) connectivity to destination, IP routing is functioning, and shows packet loss and latency variance.",
      doesNotProve: "Does NOT prove application services (e.g. HTTP on port 443) are running or responding, and does not test DNS resolution.",
      output: `PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=14.2 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=118 time=13.8 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=118 time=14.5 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=118 time=13.9 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 13.812/14.101/14.520/0.274 ms`,
    },
    traceroute: {
      cmd: "traceroute -n prepspaces.com",
      description: "Trace the multi-hop routing path toward destination by incrementally increasing the IPv4 TTL (Time-To-Live) starting from 1.",
      proves: "Identifies each router hop along the path, measuring latency per hop and locating packet drops or routing blackholes.",
      doesNotProve: "Does NOT guarantee return path is symmetric (Internet routing is frequently asymmetric), and some hops may filter ICMP (* * *).",
      output: `traceroute to prepspaces.com (104.21.58.192), 30 hops max, 60 byte packets
 1  192.168.1.1 (Gateway)  1.214 ms  1.105 ms  1.088 ms
 2  10.240.0.1 (ISP Access Node)  4.321 ms  4.205 ms  4.112 ms
 3  172.16.88.1 (ISP Regional Core)  8.450 ms  8.312 ms  8.289 ms
 4  195.66.226.182 (LINX IXP Transit)  12.110 ms  12.045 ms  12.080 ms
 5  104.21.58.192 (Cloudflare Edge Node)  13.412 ms  13.250 ms  13.310 ms`,
    },
    ip_addr: {
      cmd: "ip addr show eth0",
      description: "Inspect network interface card (NIC) status, MAC address (link layer), MTU, and configured IPv4/IPv6 address and CIDR prefix.",
      proves: "Proves physical link state (UP/LOWER_UP), MTU size, assigned IP address, broadcast address, and whether DHCP has assigned an IP.",
      doesNotProve: "Does NOT prove internet gateway reachability or that external DNS is functioning.",
      output: `2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:00:12:34:56 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.142/24 brd 192.168.1.255 scope global dynamic eth0
       valid_lft 86320sec preferred_lft 86320sec
    inet6 fe80::5054:ff:fe12:3456/64 scope link
       valid_lft forever preferred_lft forever`,
    },
    ip_route: {
      cmd: "ip route show",
      description: "Inspect the kernel routing table to verify default gateway and local subnet interface routes.",
      proves: "Shows where the kernel directs packets destined for local subnets and whether a valid default gateway (0.0.0.0/0) exists.",
      doesNotProve: "Does NOT prove that the default gateway router is actually online or forwarding packets to the upstream ISP.",
      output: `default via 192.168.1.1 dev eth0 proto dhcp metric 100
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.142 metric 100
172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 linkdown`,
    },
    dig: {
      cmd: "dig +noall +answer prepspaces.com A",
      description: "Query DNS nameservers to resolve human-readable domain names to IPv4 A records and view DNS TTL and query latency.",
      proves: "Proves whether recursive DNS resolver is reachable, the domain exists, and what IP addresses are returned.",
      doesNotProve: "Does NOT prove the remote web server at that resolved IP address is listening or accessible on ports 80/443.",
      output: `; <<>> DiG 9.18.28 <<>> +noall +answer prepspaces.com A
prepspaces.com.		300	IN	A	104.21.58.192
prepspaces.com.		300	IN	A	172.67.182.201`,
    },
    arp: {
      cmd: "ip neigh show",
      description: "Inspect the Address Resolution Protocol (ARP) neighbor cache mapping L3 IP addresses to L2 hardware MAC addresses on the local link.",
      proves: "Shows whether local devices (e.g. gateway) have answered ARP requests and whether their MAC addresses are successfully resolved (REACHABLE).",
      doesNotProve: "Only applies to the local broadcast link; ARP is never forwarded across routers.",
      output: `192.168.1.1 dev eth0 lladdr 00:1a:2b:3c:4d:5e REACHABLE
192.168.1.200 dev eth0 lladdr 70:85:c2:41:88:9a STALE
192.168.1.254 dev eth0  FAILED`,
    },
    ss: {
      cmd: "ss -tulpn",
      description: "Inspect open local sockets, listening TCP/UDP ports, socket queues, and associated process IDs (PIDs).",
      proves: "Identifies which local processes (e.g. Nginx, sshd, DNS) are listening on which interfaces (0.0.0.0 vs 127.0.0.1) and port numbers.",
      doesNotProve: "Does NOT verify external firewall or NAT traversal policies allowing inbound traffic through intermediate appliances.",
      output: `Netid  State   Recv-Q  Send-Q   Local Address:Port   Peer Address:Port  Process
tcp    LISTEN  0       511            0.0.0.0:443         0.0.0.0:*      users:(("nginx",pid=1204,fd=6))
tcp    LISTEN  0       511            0.0.0.0:80          0.0.0.0:*      users:(("nginx",pid=1204,fd=7))
tcp    LISTEN  0       128            0.0.0.0:22          0.0.0.0:*      users:(("sshd",pid=842,fd=3))
udp    UNCONN  0       0        127.0.0.53%lo:53          0.0.0.0:*      users:(("systemd-resolve",pid=512,fd=13))`,
    },
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE QUIZ & ASSESSMENT (10 COMPREHENSIVE UNIVERSITY QUESTIONS)     */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which of the following best describes the difference between a Layer 2 Switch and a Layer 3 Router?",
      options: [
        "A switch connects multiple networks using IP addresses, while a router connects devices in a LAN using MAC addresses.",
        "A switch forwards Ethernet frames within a single broadcast domain based on MAC addresses, while a router forwards IP packets between different networks based on IP routing tables.",
        "A switch can only transmit analog electrical signals, while a router can only transmit digital optical signals.",
        "A switch regenerates electrical bits on a shared bus, while a router assigns domain names via DNS.",
      ],
      correctIndex: 1,
      explanation:
        "Layer 2 switches operate inside a single broadcast domain, maintaining a CAM/MAC table to forward Ethernet frames between local ports. Routers operate at Layer 3, interconnecting distinct logical networks and forwarding IP packets based on routing tables (e.g. BGP, OSPF).",
    },
    {
      id: 2,
      question: "Why is packet switching preferred over circuit switching for general Internet traffic?",
      options: [
        "Packet switching guarantees fixed zero-jitter latency for every connection.",
        "Packet switching physically dedicates copper circuits to each user for the entire call duration.",
        "Internet traffic is bursty, and packet switching utilizes statistical multiplexing to dynamically share link capacity among active senders.",
        "Packet switching eliminates the need for buffers, queues, and headers.",
      ],
      correctIndex: 2,
      explanation:
        "Computer data traffic is inherently bursty (periods of high transmission followed by idle pauses). Packet switching uses statistical multiplexing so multiple flows share the same link on demand, whereas circuit switching reserves dedicated idle capacity, resulting in poor link utilization.",
    },
    {
      id: 3,
      question: "Consider a 1500-byte packet transmitted across a 1 Gbps Ethernet link of length 1,000 km (propagation speed 200,000 km/s). What are the transmission delay and propagation delay?",
      options: [
        "Transmission delay = 0.012 ms; Propagation delay = 5.0 ms",
        "Transmission delay = 12.0 ms; Propagation delay = 0.5 ms",
        "Transmission delay = 1.5 ms; Propagation delay = 1.0 ms",
        "Transmission delay = 0.12 ms; Propagation delay = 0.005 ms",
      ],
      correctIndex: 0,
      explanation:
        "Transmission delay L/R = (1500 * 8 bits) / (1,000,000,000 bps) = 12,000 / 10^9 = 0.000012 seconds = 0.012 ms. Propagation delay d/s = 1,000 km / (200,000 km/s) = 0.005 seconds = 5.0 ms.",
    },
    {
      id: 4,
      question: "During protocol encapsulation as a message descends the TCP/IP stack from application to physical wire, in which order are Protocol Data Units (PDUs) formed?",
      options: [
        "Frame -> Packet -> Segment -> Bits",
        "Data / Stream -> Segment / Datagram (Transport) -> Packet (Internet) -> Frame (Data Link) -> Bits (Physical)",
        "Packet -> Frame -> Segment -> Data",
        "Bits -> Datagram -> Stream -> Frame",
      ],
      correctIndex: 1,
      explanation:
        "The application layer generates Data, the transport layer adds a TCP/UDP header to create a Segment or Datagram, the internet layer adds an IP header to create a Packet, and the data link layer adds MAC headers and an FCS trailer to create a Frame, which is transmitted as Bits on the physical medium.",
    },
    {
      id: 5,
      question: "What is the primary architectural purpose of a Content Delivery Network (CDN) like Cloudflare or Fastly?",
      options: [
        "To replace the need for TCP/IP protocol stacks on user computers.",
        "To cache static and dynamic web content at edge locations geographically close to end users, reducing round-trip propagation delay and origin server load.",
        "To assign public IPv4 addresses to client mobile phones without NAT.",
        "To convert all packet-switched traffic into circuit-switched fiber lines.",
      ],
      correctIndex: 1,
      explanation:
        "CDNs deploy geographically distributed Points of Presence (PoPs) at Internet Exchange Points. By serving cached assets from the network edge near the client, CDNs dramatically minimize round-trip propagation latency and shield the origin server from traffic spikes.",
    },
    {
      id: 6,
      question: "When a laptop successfully connects to local Wi-Fi and obtains an IP via DHCP, but cannot open 'https://prepspaces.com', which diagnostic step best isolates whether DNS is the culprit?",
      options: [
        "Ping the loopback address 127.0.0.1",
        "Check if 'ping 8.8.8.8' (a direct public IP) succeeds while 'ping prepspaces.com' fails with 'cannot resolve host'",
        "Unplug the Wi-Fi router's power cable immediately",
        "Reboot the laptop 3 times to refresh the ARP cache",
      ],
      correctIndex: 1,
      explanation:
        "If pinging a known public IP address like 8.8.8.8 succeeds, the local link, default gateway, NAT, and IP routing are all healthy. If domain names cannot be resolved, the failure is isolated specifically to the DNS resolver configuration (/etc/resolv.conf, UDP port 53).",
    },
    {
      id: 7,
      question: "In data center networking, why have modern architectures largely replaced legacy 3-tier hierarchical trees with Leaf-Spine topologies?",
      options: [
        "Leaf-spine eliminates the need for fiber optics entirely.",
        "East-west (server-to-server) traffic dominates modern distributed workloads, and leaf-spine ensures every server is equidistant (exactly 2 hops) with predictable low latency and non-blocking equal-cost multi-path (ECMP) routing.",
        "Leaf-spine prevents switches from learning MAC addresses.",
        "Leaf-spine forces all traffic to route through a single core router for manual inspection.",
      ],
      correctIndex: 1,
      explanation:
        "Traditional 3-tier networks were optimized for north-south (client-to-server) traffic, leading to oversubscription bottlenecks at the core. In modern distributed systems, east-west microservice traffic dominates. Leaf-spine guarantees uniform 2-hop latency and high bisection bandwidth using ECMP.",
    },
    {
      id: 8,
      question: "What does the Bandwidth-Delay Product (BDP) represent in computer networking?",
      options: [
        "The total electrical power consumed by a router during peak load.",
        "The maximum volume of data that can be 'in flight' (filling the network pipe) at any instant, calculated as Bandwidth * RTT.",
        "The number of packet collisions per second on a shared CSMA/CD bus.",
        "The time required for an ARP request to reach the default gateway.",
      ],
      correctIndex: 1,
      explanation:
        "BDP = Capacity (bps) * Round-Trip Time (seconds). It measures the volume of bits in transit through the network pipeline. To achieve line-rate throughput without stalling, the sender's TCP receive window must be at least equal to the BDP.",
    },
    {
      id: 9,
      question: "What is the difference between Throughput and Goodput?",
      options: [
        "Throughput is measured in bytes while Goodput is measured in bits.",
        "Throughput is the gross rate of all bits delivered across a link including protocol headers and retransmissions, while Goodput is the net rate of useful application payload delivered without overhead.",
        "Throughput only applies to UDP, while Goodput only applies to TCP.",
        "Throughput measures propagation speed while Goodput measures transmission speed.",
      ],
      correctIndex: 1,
      explanation:
        "Throughput represents the raw data rate received at the link layer, including Ethernet, IP, and TCP headers as well as duplicate retransmissions. Goodput measures strictly the useful application layer data delivered to the application process per unit of time.",
    },
    {
      id: 10,
      question: "Which of the following attacks exploits the lack of authentication in the Address Resolution Protocol (ARP) on a local network?",
      options: [
        "SQL Injection",
        "ARP Cache Poisoning / ARP Spoofing, where an attacker broadcasts unsolicited ARP replies claiming to own the IP of the default gateway to intercept local traffic",
        "SYN Flood attack against an external web server",
        "BGP prefix hijacking between Autonomous Systems",
      ],
      correctIndex: 1,
      explanation:
        "ARP has no cryptographic authentication. An attacker on the local broadcast domain can transmit forged gratuitous ARP replies associating their own MAC address with the IP address of the default gateway. Other hosts update their ARP cache and forward all traffic through the attacker (Man-in-the-Middle).",
    },
  ];

  const handleSelectOption = (questionId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 4: WI-FI TROUBLESHOOTING RUNBOOK                     */
  /* -------------------------------------------------------------------------- */
  const [troubleshootStep, setTroubleshootStep] = useState(1);
  const [diagnosedIssue, setDiagnosedIssue] = useState(null);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      {/* Top Global Navigation Bar */}
      <ModuleNav
        track="networks"
        currentModuleId="intro"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Networking Mentor"
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Header & University Alignment Badge */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              <Network size={12} className="text-[#f97316]" />
              Course: Computer Networks & Internet Engineering
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Module 1 of 24
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              University Level · MIT / Stanford / Berkeley / CMU / Princeton
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Introduction to Computer Networks & Internet Architecture
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Establish the core foundations of computer networking—from electrical signal encoding and local Ethernet switching to global BGP routing, TCP/IP protocol stacks, packet switching mathematics, and defensive network security.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <BookOpen size={14} />
            <span>Curriculum & Deep Theory</span>
          </button>

          <button
            onClick={() => setActiveTab("delay-calculator")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "delay-calculator"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Gauge size={14} />
            <span>Interactive Delay & BDP Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab("packet-tracer")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "packet-tracer"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Workflow size={14} />
            <span>Interactive 8-Step Packet Tracer</span>
          </button>

          <button
            onClick={() => setActiveTab("diagnostics")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "diagnostics"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Terminal size={14} />
            <span>CLI Diagnostic Toolkit</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Award size={14} />
            <span>Assessment & Quiz (10 Questions)</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & DEEP THEORY (SECTIONS 1.1 - 1.12)              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Section 1.1: Networking Fundamentals */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Network size={14} />
                <span>1.1 — Networking Fundamentals</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                What is a Computer Network & Why Do Networks Exist?
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                A <strong>computer network</strong> is an interconnected collection of autonomous computing devices (hosts, servers, routers, mobile endpoints) that exchange data across physical or wireless communication channels using standardized rules called <strong>protocols</strong>. Networks transform isolated standalone computers into collaborative, fault-tolerant distributed systems.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  {
                    title: "1. Sender",
                    desc: "The originating source process generating the message data.",
                    icon: Monitor,
                  },
                  {
                    title: "2. Receiver",
                    desc: "The destination application process receiving the stream or datagram.",
                    icon: Server,
                  },
                  {
                    title: "3. Message",
                    desc: "The application payload (HTTP, video, RPC, telemetry).",
                    icon: FileCode,
                  },
                  {
                    title: "4. Transmission Medium",
                    desc: "Physical conduit (twisted pair copper, fiber optics, radio waves).",
                    icon: Radio,
                  },
                  {
                    title: "5. Protocol",
                    desc: "Formal rules governing format, timing, sequencing, and error control.",
                    icon: Workflow,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="rounded-2xl border border-stone-200/70 bg-stone-50/70 p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#ea580c] mb-2">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-xs font-bold text-[#18181b]">{item.title}</h4>
                      <p className="mt-1 text-[11px] text-stone-500 leading-normal">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-orange-200/80 bg-orange-50/50 p-4">
                <h4 className="text-xs font-bold text-orange-950 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#ea580c]" />
                  <span>The Four Essential Characteristics of Effective Communication</span>
                </h4>
                <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs text-stone-700">
                  <div>
                    <strong className="text-orange-900 block">1. Delivery & Addressing:</strong>
                    Data must arrive at the precise intended destination interface and application socket.
                  </div>
                  <div>
                    <strong className="text-orange-900 block">2. Accuracy & Integrity:</strong>
                    Bits must not be altered, inverted, or lost in transit without detection (CRC, checksums).
                  </div>
                  <div>
                    <strong className="text-orange-900 block">3. Timeliness:</strong>
                    Data must be delivered within bounded latency without excessive jitter or starvation.
                  </div>
                  <div>
                    <strong className="text-orange-900 block">4. Reliability & Availability:</strong>
                    Networks must gracefully recover from link cuts and hardware failures without corrupting state.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 1.2: Types of Computer Networks */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Globe size={14} />
                <span>1.2 — Types of Computer Networks</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Geographic Scope, Ownership & Architecture
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Networks are categorized by geographic span, physical media, administrative ownership, and performance characteristics:
              </p>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100/70 font-mono text-stone-700">
                      <th className="py-2.5 px-3">Network Type</th>
                      <th className="py-2.5 px-3">Typical Range</th>
                      <th className="py-2.5 px-3">Bandwidth / Latency</th>
                      <th className="py-2.5 px-3">Key Technologies</th>
                      <th className="py-2.5 px-3">Typical Production Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">PAN (Personal Area)</td>
                      <td className="py-2.5 px-3">&lt; 10 meters</td>
                      <td className="py-2.5 px-3">1 - 24 Mbps · 5-20 ms</td>
                      <td className="py-2.5 px-3">Bluetooth, BLE, USB 4, Zigbee</td>
                      <td className="py-2.5 px-3">Smartphones, smartwatches, wearable sensors</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">LAN (Local Area)</td>
                      <td className="py-2.5 px-3">&lt; 1 - 2 km (building/campus)</td>
                      <td className="py-2.5 px-3">1 Gbps - 100 Gbps · &lt; 1 ms</td>
                      <td className="py-2.5 px-3">IEEE 802.3 Ethernet, Wi-Fi 6E/7, VLANs</td>
                      <td className="py-2.5 px-3">Office switches, university labs, home networks</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">MAN (Metropolitan Area)</td>
                      <td className="py-2.5 px-3">10 - 50 km (metro city)</td>
                      <td className="py-2.5 px-3">10 Gbps - 400 Gbps · 1-5 ms</td>
                      <td className="py-2.5 px-3">Metro Ethernet, Dark Fiber, DWDM rings</td>
                      <td className="py-2.5 px-3">Municipal networks, multi-campus universities</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">WAN (Wide Area)</td>
                      <td className="py-2.5 px-3">Global / Cross-Continent</td>
                      <td className="py-2.5 px-3">Variable · 10 - 250 ms RTT</td>
                      <td className="py-2.5 px-3">Submarine fiber cables, BGP, MPLS, SD-WAN</td>
                      <td className="py-2.5 px-3">The Global Public Internet, Cloud AWS/GCP backbones</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">SAN / Data Center</td>
                      <td className="py-2.5 px-3">&lt; 500 meters (facility)</td>
                      <td className="py-2.5 px-3">100 - 800 Gbps · &lt; 5 µs</td>
                      <td className="py-2.5 px-3">InfiniBand, RoCE v2, NVMe-oF, Leaf-Spine</td>
                      <td className="py-2.5 px-3">AI GPU clusters, distributed storage pools</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900">Intranet</h4>
                  <p className="mt-1 text-stone-500">
                    A strictly private, authenticated enterprise network accessible only to verified corporate employees and internal microservices.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900">Extranet</h4>
                  <p className="mt-1 text-stone-500">
                    A controlled private network extending access to authorized partners, vendors, and trusted external clients through secure VPN tunnels or mTLS.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900">Internet</h4>
                  <p className="mt-1 text-stone-500">
                    The worldwide decentralized network of networks, interconnected via public Internet Exchange Points (IXPs) and Autonomous Systems using BGP.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 1.3: Network Devices and Their Responsibilities */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <RouterIcon size={14} />
                <span>1.3 — Network Devices and Responsibilities</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Hardware & Software Building Blocks
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Operating systems engineers and network architects must understand the exact layer boundaries and forwarding logic of each device:
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Network Interface Card (NIC)",
                    layer: "Layer 1 & Layer 2",
                    desc: "Hardware controller managing physical transceiver, serialization, MAC address framing, DMA ring buffers, and hardware offloads (TSO, LRO, Checksum).",
                  },
                  {
                    name: "Repeater & Legacy Hub",
                    layer: "Layer 1 (Physical)",
                    desc: "Pure electrical bit regenerators with zero intelligence. Broadcasts all electrical signals out every port, creating a single shared collision domain.",
                  },
                  {
                    name: "Layer 2 Bridge & Switch",
                    layer: "Layer 2 (Data Link)",
                    desc: "Inspects incoming Ethernet frames. Learns MAC addresses to build CAM tables. Forward frames only to the designated port, eliminating collision domains while maintaining a broadcast domain.",
                  },
                  {
                    name: "Layer 3 Router",
                    layer: "Layer 3 (Network)",
                    desc: "Interconnects separate IP subnets. Inspects destination IP addresses, decrements TTL, recomputes checksums, and selects outbound interfaces via routing tables (FIB).",
                  },
                  {
                    name: "Wireless Access Point (AP)",
                    layer: "Layer 2 Bridge",
                    desc: "Bridges IEEE 802.11 wireless radio frames onto IEEE 802.3 wired Ethernet frames, handling client association, WPA3 encryption, and roaming handoffs.",
                  },
                  {
                    name: "Next-Gen Firewall (NGFW)",
                    layer: "Layers 3 through 7",
                    desc: "Enforces security trust boundaries via stateful packet inspection (SPI), TCP session tracking, deep packet inspection (DPI), and zero-trust policies.",
                  },
                ].map((dev, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-stone-900">{dev.name}</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-orange-100 text-[#ea580c]">
                        {dev.layer}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">{dev.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 1.5: Packet Switching vs Circuit Switching */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Workflow size={14} />
                <span>1.5 — Packet Switching versus Circuit Switching</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Resource Allocation & Statistical Multiplexing
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                The fundamental architectural debate that shaped the modern Internet: dedicated channels vs. on-demand statistical multiplexing.
              </p>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-stone-900">Packet Switching (The Modern Internet)</h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Standard
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Statistical Multiplexing:</strong> Link capacity is shared dynamically among active senders. Idle senders consume zero resources.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Store-and-Forward:</strong> Routers must receive the complete packet and verify its CRC before transmitting it on the outbound link.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>No Dedicated State:</strong> Individual routers do not need to reserve state for millions of simultaneous streams, maximizing scalability.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-amber-600 mt-0.5 shrink-0" />
                      <span><strong>Trade-off:</strong> Subject to queueing delays, jitter, and buffer overflow packet loss during traffic bursts.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-stone-900">Circuit Switching (Legacy PSTN Telecom)</h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">
                      Legacy / Niche
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-stone-500 mt-0.5 shrink-0" />
                      <span><strong>Dedicated Reservation:</strong> A fixed slice of transmission capacity (FDM or TDM slot) is reserved end-to-end before data transfers.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-stone-500 mt-0.5 shrink-0" />
                      <span><strong>Deterministic Delay:</strong> Once established, zero queueing delay and zero jitter occur during transmission.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-red-500 mt-0.5 shrink-0" />
                      <span><strong>Severe Inefficiency:</strong> Silent periods during human speech or paused web downloads leave the reserved circuit completely idle.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-red-500 mt-0.5 shrink-0" />
                      <span><strong>Setup Overhead:</strong> Requires explicit connection setup and teardown signaling (call blocking when circuits are full).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 1.6: Network Topologies & Architectures */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Boxes size={14} />
                <span>1.6 — Topologies & Data Center Architectures</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Physical Topologies vs. Modern Leaf-Spine Fabrics
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="text-xs font-bold text-stone-900">Star Topology (Standard Office/LAN)</h4>
                  <p className="mt-1 text-[11px] text-stone-600">
                    All devices connect to a central switch. Single link failure affects only one host. If the central switch dies, the entire subnet fails.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="text-xs font-bold text-stone-900">Mesh Topology (WAN Core & Backbone)</h4>
                  <p className="mt-1 text-[11px] text-stone-600">
                    High redundancy. Full mesh formula: N(N - 1) / 2 physical links. Partial mesh is used across Internet transit providers to balance cost and fault tolerance.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="text-xs font-bold text-stone-900">Leaf-Spine Fabric (Modern Cloud DC)</h4>
                  <p className="mt-1 text-[11px] text-stone-600">
                    Every Leaf switch connects to every Spine switch. Eliminates STP blocking, provides uniform 2-hop server-to-server latency, and utilizes ECMP across all paths.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 1.7: Communication Models (OSI vs TCP/IP) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={14} />
                <span>1.7 — Network Communication Models: OSI vs TCP/IP</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Layered Abstractions, Headers & Encapsulation
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Layering provides modularity: changes in physical hardware (e.g. Wi-Fi to Fiber) do not require rewriting web browsers or database applications.
              </p>

              <div className="mt-6 space-y-2">
                {[
                  {
                    osi: "7. Application",
                    tcp: "Application Layer",
                    pdu: "Data / Message",
                    role: "HTTP/3, DNS, SSH, gRPC, TLS",
                    desc: "Exposes networking services to user software.",
                    color: "border-orange-500 bg-orange-50/70",
                  },
                  {
                    osi: "6. Presentation",
                    tcp: "Application Layer",
                    pdu: "Data",
                    role: "JSON, Protobuf, TLS encryption, gzip",
                    desc: "Data serialization, encoding, compression, and encryption.",
                    color: "border-orange-400 bg-orange-50/50",
                  },
                  {
                    osi: "5. Session",
                    tcp: "Application Layer",
                    pdu: "Data",
                    role: "RPC session state, WebSockets",
                    desc: "Coordinates dialog establishment and synchronization checkpoints.",
                    color: "border-orange-300 bg-orange-50/30",
                  },
                  {
                    osi: "4. Transport",
                    tcp: "Transport Layer",
                    pdu: "Segment (TCP) / Datagram (UDP)",
                    role: "TCP (Ports, SEQ, ACK, Flow Control), UDP",
                    desc: "Process-to-process multiplexing, reassembly, congestion control.",
                    color: "border-blue-400 bg-blue-50/40",
                  },
                  {
                    osi: "3. Network",
                    tcp: "Internet Layer",
                    pdu: "Packet / Datagram",
                    role: "IPv4, IPv6, ICMP, BGP, OSPF",
                    desc: "Logical host-to-host addressing, packet forwarding, routing tables.",
                    color: "border-indigo-400 bg-indigo-50/40",
                  },
                  {
                    osi: "2. Data Link",
                    tcp: "Network Access / Link Layer",
                    pdu: "Frame",
                    role: "Ethernet (MAC addresses, 802.3), Wi-Fi (802.11), VLANs",
                    desc: "Node-to-node hop delivery on shared physical medium, FCS/CRC.",
                    color: "border-emerald-400 bg-emerald-50/40",
                  },
                  {
                    osi: "1. Physical",
                    tcp: "Network Access / Link Layer",
                    pdu: "Bits",
                    role: "100GBASE-LR4, Cat6A Copper, Radio frequencies",
                    desc: "Transmission of raw uninterpreted 1s and 0s as optical or voltage signals.",
                    color: "border-stone-400 bg-stone-50/60",
                  },
                ].map((layer, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 rounded-xl border ${layer.color} text-xs`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-stone-900 w-32">{layer.osi}</span>
                      <span className="font-mono text-stone-500 hidden md:inline">({layer.tcp})</span>
                      <span className="font-bold text-stone-800">{layer.desc}</span>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className="font-mono text-[10px] bg-white border border-stone-200 px-2 py-0.5 rounded text-stone-600">
                        {layer.pdu}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-[#ea580c] bg-orange-100/80 px-2 py-0.5 rounded">
                        {layer.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 1.8: Performance Metrics */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Gauge size={14} />
                <span>1.8 — Network Performance & Metrics</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Quantifying Link Performance: The 4 Delay Components
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                End-to-end packet delay across a network is expressed mathematically as:
              </p>
              <div className="mt-3 p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs text-center">
                d_nodal = d_proc + d_queue + d_trans + d_prop
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900">1. Processing Delay (d_proc)</h4>
                  <p className="mt-1 text-stone-500">
                    Time router takes to inspect packet header, verify CRC checksum, and perform routing table lookup. Typically microseconds (&lt; 5 µs).
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900">2. Queueing Delay (d_queue)</h4>
                  <p className="mt-1 text-stone-500">
                    Time packet waits in router FIFO buffers for link transmission. Depends heavily on link traffic intensity (L × a / R). If intensity &gt; 1, packet loss occurs.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900">3. Transmission Delay (d_trans)</h4>
                  <p className="mt-1 text-stone-500">
                    Time to push all L bits of packet onto link of bandwidth R: d_trans = L / R. Function of packet length and wire speed.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900">4. Propagation Delay (d_prop)</h4>
                  <p className="mt-1 text-stone-500">
                    Time a bit takes to travel physical distance d at propagation speed s (speed of light in medium, ≈ 200,000 km/s): d_prop = d / s.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 1.10: Network Security Connections */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <ShieldCheck size={14} />
                <span>1.10 — Network Security Connections</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Network Attack Surface & Defensive Engineering
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-200/80 bg-red-50/40 p-4 text-xs">
                  <h4 className="font-bold text-red-950 flex items-center gap-1.5">
                    <AlertTriangle size={14} className="text-red-600" />
                    <span>Inherent Vulnerabilities of Base Protocols</span>
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-stone-700">
                    <li>• <strong>Unauthenticated ARP:</strong> Allows malicious hosts to inject forged ARP replies (ARP Poisoning / Man-in-the-Middle).</li>
                    <li>• <strong>Cleartext Traffic:</strong> Unencrypted HTTP/FTP packets can be passively sniffed by any switch port mirror or rogue AP.</li>
                    <li>• <strong>IP Source Spoofing:</strong> Standard IP routing forwards by destination; ingress filtering (BCP 38) is needed to block spoofed source IPs.</li>
                    <li>• <strong>DNS Cache Poisoning:</strong> Unvalidated UDP DNS responses allow attackers to redirect web traffic to phishing servers.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-4 text-xs">
                  <h4 className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <Shield size={14} className="text-emerald-700" />
                    <span>Defense-in-Depth Engineering Controls</span>
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-stone-700">
                    <li>• <strong>Dynamic ARP Inspection (DAI) & 802.1X:</strong> Switches validate DHCP snooping bindings before forwarding ARP packets.</li>
                    <li>• <strong>Mandatory End-to-End TLS 1.3:</strong> Encrypts application payloads, provides forward secrecy, and authenticates server identities.</li>
                    <li>• <strong>VLAN Segmentation & Microsegmentation:</strong> Isolates guest Wi-Fi, employee laptops, and production database clusters.</li>
                    <li>• <strong>DNSSEC & DoH:</strong> Cryptographically signs DNS zone records and encrypts DNS queries over HTTPS.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE DELAY & BDP CALCULATOR                          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "delay-calculator" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Gauge size={14} />
                <span>Interactive Mathematical Simulator</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                End-to-End Transmission, Propagation Delay & BDP Calculator
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Adjust link bandwidth, distance, packet sizes, and router hops to observe the exact impact on transmission delay ($L/R$), propagation delay ($d/s$), and the Bandwidth-Delay Product.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5 rounded-2xl bg-stone-50 border border-stone-200">
              {/* Packet Size Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Packet Size ($L$):</span>
                  <span className="font-mono text-[#ea580c]">{packetSizeBits} bits ({(packetSizeBits / 8).toFixed(0)} B)</span>
                </div>
                <input
                  type="range"
                  min="512"
                  max="72000"
                  step="512"
                  value={packetSizeBits}
                  onChange={(e) => setPacketSizeBits(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">Standard Ethernet MTU = 1500 B (12,000 bits)</span>
              </div>

              {/* Bandwidth Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Link Bandwidth ($R$):</span>
                  <span className="font-mono text-[#ea580c]">{linkBandwidthMbps} Mbps</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10000"
                  step="10"
                  value={linkBandwidthMbps}
                  onChange={(e) => setLinkBandwidthMbps(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">10 Mbps (Home) to 10 Gbps (Core)</span>
              </div>

              {/* Total Distance Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Total Fiber Distance ($d$):</span>
                  <span className="font-mono text-[#ea580c]">{linkDistanceKm} km</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="20000"
                  step="50"
                  value={linkDistanceKm}
                  onChange={(e) => setLinkDistanceKm(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">NYC to London ≈ 5,500 km</span>
              </div>

              {/* Intermediate Router Hops Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Store-and-Forward Hops:</span>
                  <span className="font-mono text-[#ea580c]">{routerHops} router hops</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={routerHops}
                  onChange={(e) => setRouterHops(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">Each hop retransmits packet ($L/R$)</span>
              </div>

              {/* Queueing Delay Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Avg Queueing Delay per Hop:</span>
                  <span className="font-mono text-[#ea580c]">{queueingDelayMs} ms</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="0.5"
                  value={queueingDelayMs}
                  onChange={(e) => setQueueingDelayMs(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">Buffer wait time before link is clear</span>
              </div>

              {/* Processing Delay Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Processing Delay per Hop:</span>
                  <span className="font-mono text-[#ea580c]">{processingDelayMs} ms</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={processingDelayMs}
                  onChange={(e) => setProcessingDelayMs(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">Header parsing & FIB routing lookup</span>
              </div>
            </div>

            {/* Calculated Results Display */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Total Transmission Delay</span>
                <div className="text-xl font-extrabold text-[#ea580c] font-mono mt-1">
                  {delayCalculations.totalTransmissionMs} ms
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Hop trans = {delayCalculations.transDelayMs} ms × {routerHops} hops
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Total Propagation Delay</span>
                <div className="text-xl font-extrabold text-blue-600 font-mono mt-1">
                  {delayCalculations.totalPropDelayMs} ms
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Speed = 200,000 km/s in glass optical fiber
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Total One-Way Latency</span>
                <div className="text-xl font-extrabold text-stone-900 font-mono mt-1">
                  {delayCalculations.totalEndToEndMs} ms
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Trans + Prop + {delayCalculations.totalQueueingMs}ms Queue + {delayCalculations.totalProcessingMs}ms Proc
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Bandwidth-Delay Product</span>
                <div className="text-xl font-extrabold text-emerald-600 font-mono mt-1">
                  {delayCalculations.bdpKBytes} KB
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Data in flight needed to saturate link ($R \times RTT$)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: INTERACTIVE 8-STEP PACKET TRACER                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "packet-tracer" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Workflow size={14} />
                <span>Interactive Architecture Journey</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Step-by-Step Packet Traversal: Laptop to Web Server
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Observe how headers are attached, inspected, rewritten, and decapsulated as a request traverses switches, routers, NAT boundaries, and autonomous transit backbones.
              </p>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {packetTraceSteps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setTraceStep(idx)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    traceStep === idx
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  Step {idx + 1}
                </button>
              ))}
            </div>

            {/* Active Step Card */}
            <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-orange-200/80 pb-3">
                <span className="text-sm font-black text-stone-900 font-mono">
                  {packetTraceSteps[traceStep].title}
                </span>
                <span className="text-xs font-bold text-orange-900 bg-orange-200/80 px-2.5 py-0.5 rounded-full">
                  {packetTraceSteps[traceStep].device}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                <p>
                  <strong>Action:</strong> {packetTraceSteps[traceStep].action}
                </p>
                <p>
                  <strong>Protocol Data Unit (PDU):</strong>{" "}
                  <span className="font-mono font-bold text-orange-800">{packetTraceSteps[traceStep].pdu}</span>
                </p>
                <p>
                  <strong>Layer / Forwarding Level:</strong>{" "}
                  <span className="font-mono text-stone-900">{packetTraceSteps[traceStep].forwardingLevel}</span>
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-900 p-3 font-mono text-xs text-orange-300">
                <div className="text-[10px] text-stone-400 uppercase font-bold mb-1">Header & Framing Payload Snapshot:</div>
                {packetTraceSteps[traceStep].headerInfo}
              </div>

              {/* Navigation controls within step */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={traceStep === 0}
                  onClick={() => setTraceStep((p) => Math.max(0, p - 1))}
                  className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white text-xs font-bold text-stone-700 disabled:opacity-40 cursor-pointer"
                >
                  Previous Step
                </button>
                <span className="text-xs font-mono text-stone-500">
                  Step {traceStep + 1} of {packetTraceSteps.length}
                </span>
                <button
                  disabled={traceStep === packetTraceSteps.length - 1}
                  onClick={() => setTraceStep((p) => Math.min(packetTraceSteps.length - 1, p + 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-xs font-bold text-white disabled:opacity-40 cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: CLI DIAGNOSTIC TOOLKIT                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "diagnostics" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Terminal size={14} />
                <span>Hands-on Systems Engineering Toolkit</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Real-World Network Diagnostics & Triage Terminal
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Network engineers never guess. Select a command to examine its real Linux production output, what it conclusively proves, and its analytical limitations.
              </p>
            </div>

            {/* Command Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(cliCommandsData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCliCommand(key)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCliCommand === key
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {cliCommandsData[key].cmd.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Terminal Window */}
            <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs shadow-lg text-stone-200 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-stone-400">
                  <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 text-xs font-bold text-stone-300">bash — Linux Networking Shell</span>
                </div>
                <button
                  onClick={() => copyCode(cliCommandsData[activeCliCommand].cmd, "cmd-copy")}
                  className="flex items-center gap-1 text-[11px] text-stone-400 hover:text-white cursor-pointer"
                >
                  {copiedCodeId === "cmd-copy" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>Copy Command</span>
                </button>
              </div>

              <div className="text-emerald-400 font-bold">$ {cliCommandsData[activeCliCommand].cmd}</div>

              <pre className="overflow-x-auto text-stone-300 whitespace-pre leading-relaxed scrollbar-thin">
                {cliCommandsData[activeCliCommand].output}
              </pre>
            </div>

            {/* Engineering Evaluation Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 text-xs">
                <span className="font-bold text-emerald-900 block mb-1">What This Result Conclusively Proves:</span>
                <p className="text-stone-700 leading-relaxed">{cliCommandsData[activeCliCommand].proves}</p>
              </div>
              <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50 text-xs">
                <span className="font-bold text-amber-900 block mb-1">What This Result Does NOT Prove:</span>
                <p className="text-stone-700 leading-relaxed">{cliCommandsData[activeCliCommand].doesNotProve}</p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT & QUIZ (10 QUESTIONS)                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Award size={14} />
                <span>Knowledge Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                University-Level Assessment: Computer Networks Foundations
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                10 rigorous multi-choice questions assessing protocols, delays, layered abstractions, topology tradeoffs, and network security.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOpt = quizAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div key={q.id} className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-black text-stone-900">
                        {idx + 1}. {q.question}
                      </span>
                      {quizSubmitted && (
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selectedOpt === optIdx;
                        let optionStyle = "border-stone-200 bg-white hover:border-orange-300";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "border-red-400 bg-red-50 text-red-950";
                          } else {
                            optionStyle = "border-stone-200 bg-white opacity-60";
                          }
                        } else if (isSelected) {
                          optionStyle = "border-[#ea580c] bg-orange-50/70 font-semibold text-orange-950";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${optionStyle}`}
                          >
                            <span className="font-mono text-stone-400 mr-2">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 p-3 rounded-xl bg-orange-50 border border-orange-200/80 text-xs text-stone-700">
                        <strong className="text-orange-950 block mb-0.5">Engineering Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Score & Submission Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-lg font-black text-stone-900 font-mono">
                    Score: {calculateScore()} / {quizQuestions.length} ({((calculateScore() / quizQuestions.length) * 100).toFixed(0)}%)
                  </div>
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Assessment</span>
                  </button>
                </div>
              ) : (
                <button
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  onClick={() => setQuizSubmitted(true)}
                  className="px-6 py-3 rounded-xl bg-[#ea580c] text-white text-xs font-bold shadow-md hover:bg-[#c2410c] disabled:opacity-50 cursor-pointer"
                >
                  Submit Assessment ({Object.keys(quizAnswers).length} / {quizQuestions.length} Answered)
                </button>
              )}
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>All Learning Tracks</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-500">
              Next: Module 2 — Network Models (OSI & TCP/IP)
            </span>
            <button
              onClick={() => navigate("/learning/networks/models")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] text-xs font-bold text-white hover:bg-[#c2410c] shadow-xs cursor-pointer"
            >
              <span>Module 2: Network Models</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
