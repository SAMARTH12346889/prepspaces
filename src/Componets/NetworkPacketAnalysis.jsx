import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Terminal,
  Activity,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  RefreshCw,
  Play,
  Network,
  Eye,
  Sliders,
  FileText,
  HelpCircle,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Server,
  Filter,
  Cpu,
  Globe,
  Radio,
  FileCode,
  HardDrive,
  Database,
  Lock,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkPacketAnalysis() {
  const navigate = useNavigate();

  // Active navigation tab
  const [activeTab, setActiveTab] = useState("curriculum"); // curriculum | simulators | lab | quiz | audit

  // Checklist state (0/8)
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Clipboard copy helper
  const [copiedKey, setCopiedKey] = useState(null);
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // ==========================================
  // SIMULATOR 1: Virtual 3-Pane Wireshark Dissector
  // ==========================================
  const rawPackets = [
    {
      no: 1,
      time: "0.000000",
      src: "192.168.1.45",
      dst: "93.184.216.34",
      proto: "TCP",
      len: 74,
      info: "54210 -> 443 [SYN] Seq=0 Win=64240 Len=0 MSS=1460 SACK_PERM=1",
      flags: { syn: 1, ack: 0, rst: 0, fin: 0 },
      port: 443,
      streamId: 0,
      details: {
        ethernet: "Frame 1: 74 bytes on wire | Src: Realtek_12:34:56 (a0:36:bc:12:34:56), Dst: Cisco_ab:cd:ef (00:1c:58:ab:cd:ef)",
        ip: "IPv4: Src: 192.168.1.45, Dst: 93.184.216.34, Proto: TCP (6), TTL: 64, ID: 0x4a12",
        transport: "TCP: Src Port: 54210, Dst Port: 443, Seq: 0, Ack: 0, Flags: 0x002 (SYN)",
        payload: "TCP Options: Maximum segment size 1460, SACK permitted, Timestamps",
      },
      hex: "00 1c 58 ab cd ef a0 36 bc 12 34 56 08 00 45 00 00 3c 4a 12 40 00 40 06 b2 e4 c0 a8 01 2d 5d b8 d8 22 d3 c2 01 bb 00 00 00 00 a0 02 fa f0 6b c4 00 00 02 04 05 b4 04 02 08 0a",
    },
    {
      no: 2,
      time: "0.014210",
      src: "93.184.216.34",
      dst: "192.168.1.45",
      proto: "TCP",
      len: 74,
      info: "443 -> 54210 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0 MSS=1460 SACK_PERM=1",
      flags: { syn: 1, ack: 1, rst: 0, fin: 0 },
      port: 443,
      streamId: 0,
      details: {
        ethernet: "Frame 2: 74 bytes on wire | Src: Cisco_ab:cd:ef, Dst: Realtek_12:34:56",
        ip: "IPv4: Src: 93.184.216.34, Dst: 192.168.1.45, Proto: TCP (6), TTL: 56, ID: 0x0000",
        transport: "TCP: Src Port: 443, Dst Port: 54210, Seq: 0, Ack: 1, Flags: 0x012 (SYN, ACK)",
        payload: "TCP Options: Maximum segment size 1460, SACK permitted",
      },
      hex: "a0 36 bc 12 34 56 00 1c 58 ab cd ef 08 00 45 00 00 3c 00 00 40 00 38 06 fc f6 5d b8 d8 22 c0 a8 01 2d 01 bb d3 c2 81 29 04 1a 00 00 00 01 a0 12 ff ff b1 20 00 00 02 04 05 b4",
    },
    {
      no: 3,
      time: "0.014350",
      src: "192.168.1.45",
      dst: "93.184.216.34",
      proto: "TCP",
      len: 66,
      info: "54210 -> 443 [ACK] Seq=1 Ack=1 Win=64240 Len=0",
      flags: { syn: 0, ack: 1, rst: 0, fin: 0 },
      port: 443,
      streamId: 0,
      details: {
        ethernet: "Frame 3: 66 bytes on wire | Src: Realtek_12:34:56, Dst: Cisco_ab:cd:ef",
        ip: "IPv4: Src: 192.168.1.45, Dst: 93.184.216.34, Proto: TCP (6), TTL: 64",
        transport: "TCP: Src Port: 54210, Dst Port: 443, Seq: 1, Ack: 1, Flags: 0x010 (ACK)",
        payload: "Connection established (ESTABLISHED state reached)",
      },
      hex: "00 1c 58 ab cd ef a0 36 bc 12 34 56 08 00 45 00 00 34 4a 13 40 00 40 06 b2 e3 c0 a8 01 2d 5d b8 d8 22 d3 c2 01 bb 00 00 00 01 81 29 04 1b 80 10 fa f0 b2 12 00 00 01 01 08 0a",
    },
    {
      no: 4,
      time: "0.052100",
      src: "192.168.1.45",
      dst: "8.8.8.8",
      proto: "DNS",
      len: 82,
      info: "Standard query 0x1a2b A internal-payroll.corp",
      flags: { syn: 0, ack: 0, rst: 0, fin: 0, rcode: 0 },
      port: 53,
      streamId: null,
      details: {
        ethernet: "Frame 4: 82 bytes on wire | Protocol: UDP (17)",
        ip: "IPv4: Src: 192.168.1.45, Dst: 8.8.8.8",
        transport: "UDP: Src Port: 53401, Dst Port: 53, Len: 48",
        payload: "Domain Name System (query): QNAME: internal-payroll.corp, Type: A, Class: IN",
      },
      hex: "00 1c 58 ab cd ef a0 36 bc 12 34 56 08 00 45 00 00 44 a1 b2 00 00 40 11 5e 32 c0 a8 01 2d 08 08 08 08 d0 99 00 35 00 30 d1 f2 1a 2b 01 00 00 01 00 00 00 00 00 00 10 69 6e 74 65 72",
    },
    {
      no: 5,
      time: "0.068900",
      src: "8.8.8.8",
      dst: "192.168.1.45",
      proto: "DNS",
      len: 82,
      info: "Standard query response 0x1a2b No such name A internal-payroll.corp (NXDOMAIN)",
      flags: { syn: 0, ack: 0, rst: 0, fin: 0, rcode: 3 },
      port: 53,
      streamId: null,
      details: {
        ethernet: "Frame 5: 82 bytes on wire | Protocol: UDP (17)",
        ip: "IPv4: Src: 8.8.8.8, Dst: 192.168.1.45",
        transport: "UDP: Src Port: 53, Dst Port: 53401",
        payload: "DNS: Response Code: 3 (Non-Existent Domain / NXDOMAIN) - Hostname unresolved",
      },
      hex: "a0 36 bc 12 34 56 00 1c 58 ab cd ef 08 00 45 00 00 44 00 00 00 00 36 11 9f e4 08 08 08 08 c0 a8 01 2d 00 35 d0 99 00 30 e2 01 1a 2b 81 83 00 01 00 00 00 00 00 00 10 69 6e 74 65 72",
    },
    {
      no: 6,
      time: "0.120400",
      src: "192.168.1.45",
      dst: "10.0.5.20",
      proto: "TCP",
      len: 66,
      info: "49202 -> 3389 [SYN] Seq=0 Win=1024 Len=0",
      flags: { syn: 1, ack: 0, rst: 0, fin: 0 },
      port: 3389,
      streamId: 1,
      details: {
        ethernet: "Frame 6: 66 bytes on wire | Src: 192.168.1.45, Dst: 10.0.5.20",
        ip: "IPv4: Src: 192.168.1.45, Dst: 10.0.5.20, Proto: TCP (6)",
        transport: "TCP: Src Port: 49202, Dst Port: 3389 (MS RDP), Seq: 0, Flags: SYN",
        payload: "Unsolicited connection attempt to internal Remote Desktop service",
      },
      hex: "00 1c 58 ab cd ef a0 36 bc 12 34 56 08 00 45 00 00 34 4b 01 40 00 40 06 b2 f0 c0 a8 01 2d 0a 00 05 14 c0 32 0d 3d 00 00 00 00 00 00 00 00 80 02 04 00 a1 90 00 00 02 04 05 b4",
    },
    {
      no: 7,
      time: "0.121500",
      src: "10.0.5.20",
      dst: "192.168.1.45",
      proto: "TCP",
      len: 60,
      info: "3389 -> 49202 [RST, ACK] Seq=1 Ack=1 Win=0 Len=0",
      flags: { syn: 0, ack: 1, rst: 1, fin: 0 },
      port: 3389,
      streamId: 1,
      details: {
        ethernet: "Frame 7: 60 bytes on wire | Src: 10.0.5.20, Dst: 192.168.1.45",
        ip: "IPv4: Src: 10.0.5.20, Dst: 192.168.1.45, Proto: TCP (6)",
        transport: "TCP: Src Port: 3389, Dst Port: 49202, Flags: 0x014 (RST, ACK)",
        payload: "Connection actively rejected: Destination port closed or firewall active-reject",
      },
      hex: "a0 36 bc 12 34 56 00 1c 58 ab cd ef 08 00 45 00 00 28 00 00 40 00 40 06 b3 f8 0a 00 05 14 c0 a8 01 2d 0d 3d c0 32 00 00 00 01 00 00 00 01 50 14 00 00 9f 12 00 00 00 00 00 00",
    },
    {
      no: 8,
      time: "0.340200",
      src: "192.168.1.45",
      dst: "93.184.216.34",
      proto: "TCP",
      len: 74,
      info: "[TCP Retransmission] 54210 -> 443 [SYN] Seq=0 Win=64240 Len=0",
      flags: { syn: 1, ack: 0, rst: 0, fin: 0, retransmission: true },
      port: 443,
      streamId: 0,
      details: {
        ethernet: "Frame 8: 74 bytes on wire | Protocol: TCP",
        ip: "IPv4: Src: 192.168.1.45, Dst: 93.184.216.34",
        transport: "TCP: [TCP Retransmission] Original packet #1 lost in transit or ACK unreceived",
        payload: "RTO Timer fired (~300ms initial retransmit timeout). Retransmitting SYN.",
      },
      hex: "00 1c 58 ab cd ef a0 36 bc 12 34 56 08 00 45 00 00 3c 4a 14 40 00 40 06 b2 e2 c0 a8 01 2d 5d b8 d8 22 d3 c2 01 bb 00 00 00 00 a0 02 fa f0 6b c4 00 00 02 04 05 b4 04 02 08 0a",
    },
  ];

  const [displayFilter, setDisplayFilter] = useState("");
  const [selectedPacketNo, setSelectedPacketNo] = useState(1);

  const filteredPackets = useMemo(() => {
    const f = displayFilter.trim().toLowerCase();
    if (!f) return rawPackets;
    if (f === "dns") return rawPackets.filter((p) => p.proto === "DNS");
    if (f === "tcp") return rawPackets.filter((p) => p.proto === "TCP");
    if (f.includes("tcp.flags.syn == 1 && tcp.flags.ack == 0") || f === "syn") {
      return rawPackets.filter((p) => p.flags.syn === 1 && p.flags.ack === 0);
    }
    if (f.includes("tcp.flags.reset == 1") || f === "rst") {
      return rawPackets.filter((p) => p.flags.rst === 1);
    }
    if (f.includes("tcp.analysis.retransmission") || f === "retransmission") {
      return rawPackets.filter((p) => p.flags.retransmission);
    }
    if (f.includes("dns.flags.rcode != 0") || f === "nxdomain") {
      return rawPackets.filter((p) => p.flags.rcode && p.flags.rcode !== 0);
    }
    if (f.includes("port 443") || f.includes("443")) {
      return rawPackets.filter((p) => p.port === 443);
    }
    if (f.includes("10.0.5.20")) {
      return rawPackets.filter((p) => p.src === "10.0.5.20" || p.dst === "10.0.5.20");
    }
    return rawPackets.filter(
      (p) =>
        p.src.toLowerCase().includes(f) ||
        p.dst.toLowerCase().includes(f) ||
        p.proto.toLowerCase().includes(f) ||
        p.info.toLowerCase().includes(f)
    );
  }, [displayFilter]);

  const activePacket = rawPackets.find((p) => p.no === selectedPacketNo) || rawPackets[0];

  // ==========================================
  // SIMULATOR 2: Interactive TCP Stream Reconstructor
  // ==========================================
  const [tcpConversationStep, setTcpConversationStep] = useState(3); // 1 to 5
  const [tcpAnomalyType, setTcpAnomalyType] = useState("normal"); // "normal" | "rst" | "retransmit"

  // ==========================================
  // SIMULATOR 3: BPF vs Display Filter Tester
  // ==========================================
  const [bpfFilterQuery, setBpfFilterQuery] = useState("tcp port 443 and host 192.168.1.45");
  const bpfExamples = [
    { label: "HTTPS Only", bpf: "tcp port 443", display: "tcp.port == 443", desc: "Filters TLS traffic on standard port 443" },
    { label: "SYN Packets Only", bpf: "tcp[tcpflags] & tcp-syn != 0", display: "tcp.flags.syn == 1", desc: "Captures connection initiation requests" },
    { label: "Exclude SSH", bpf: "not port 22", display: "tcp.port != 22", desc: "Prevents SSH session traffic from flooding the capture" },
    { label: "Specific Subnet", bpf: "net 10.0.0.0/16", display: "ip.addr == 10.0.0.0/16", desc: "Limits capture to the private 10.0.0.0/16 address space" },
  ];

  // ==========================================
  // SIMULATOR 4: Nmap Port State Inference Engine
  // ==========================================
  const [nmapScanType, setNmapScanType] = useState("syn"); // "syn" | "connect" | "udp"
  const [targetPortState, setTargetPortState] = useState("open"); // "open" | "closed" | "filtered"

  const nmapScanResult = useMemo(() => {
    if (nmapScanType === "syn") {
      if (targetPortState === "open") {
        return {
          probesSent: "Scanner -> Target: TCP [SYN] Seq=1000 to Port 80",
          responseReceived: "Target -> Scanner: TCP [SYN, ACK] Seq=5000 Ack=1001",
          scannerReaction: "Scanner -> Target: TCP [RST] (Tears down connection before full handshake completes)",
          inferredState: "OPEN",
          explanation: "Received SYN/ACK indicates an active listener. Scanner issues a RST to prevent opening a full application socket (Stealth SYN scan).",
          color: "emerald",
        };
      }
      if (targetPortState === "closed") {
        return {
          probesSent: "Scanner -> Target: TCP [SYN] Seq=1000 to Port 81",
          responseReceived: "Target -> Scanner: TCP [RST, ACK] Seq=0 Ack=1001",
          scannerReaction: "None (Connection terminated by target)",
          inferredState: "CLOSED",
          explanation: "Target operating system kernel returned RST/ACK indicating the host is up but no process is listening on that port.",
          color: "rose",
        };
      }
      return {
        probesSent: "Scanner -> Target: TCP [SYN] Seq=1000 to Port 8080 (3 retries sent)",
        responseReceived: "No response (Timeout after 2.0s) OR ICMP Type 3 Code 13 (Destination Admin Prohibited)",
        scannerReaction: "Retransmits SYN probe twice to account for packet loss, then concludes state",
        inferredState: "FILTERED",
        explanation: "No packet returned or ICMP administrative block received. A firewall, security group, or packet filter is actively dropping the probe.",
        color: "amber",
      };
    }

    if (nmapScanType === "connect") {
      if (targetPortState === "open") {
        return {
          probesSent: "Scanner -> Target: connect() system call -> TCP [SYN]",
          responseReceived: "Target -> Scanner: TCP [SYN, ACK]",
          scannerReaction: "Scanner -> Target: TCP [ACK] (Full 3-way handshake completed) followed by immediate close() [FIN]",
          inferredState: "OPEN",
          explanation: "Full OS TCP connection established. Requires no raw socket privileges, but logs complete connection in target application logs.",
          color: "emerald",
        };
      }
      if (targetPortState === "closed") {
        return {
          probesSent: "Scanner -> Target: TCP [SYN]",
          responseReceived: "Target -> Scanner: TCP [RST, ACK]",
          scannerReaction: "OS connect() returns ECONNREFUSED",
          inferredState: "CLOSED",
          explanation: "Target explicitly refused connection.",
          color: "rose",
        };
      }
      return {
        probesSent: "Scanner -> Target: TCP [SYN] (Retries until OS connect timeout)",
        responseReceived: "No response (ETIMEDOUT)",
        scannerReaction: "Scanner marks port filtered",
        inferredState: "FILTERED",
        explanation: "Packet dropped silently by network perimeter filter.",
        color: "amber",
      };
    }

    // UDP
    if (targetPortState === "open") {
      return {
        probesSent: "Scanner -> Target: UDP datagram (protocol-specific payload, e.g. DNS query to Port 53)",
        responseReceived: "Target -> Scanner: UDP response payload",
        inferredState: "OPEN",
        explanation: "Target application answered with valid UDP response bytes.",
        color: "emerald",
      };
    }
    if (targetPortState === "closed") {
      return {
        probesSent: "Scanner -> Target: Raw empty UDP datagram",
        responseReceived: "Target -> Scanner: ICMP Type 3 Code 3 (Port Unreachable)",
        inferredState: "CLOSED",
        explanation: "Host IP stack received datagram for unhandled UDP port and returned ICMP Port Unreachable.",
        color: "rose",
      };
    }
    return {
      probesSent: "Scanner -> Target: Raw empty UDP datagram",
      responseReceived: "No response received",
      inferredState: "OPEN | FILTERED",
      explanation: "UDP is connectionless. Many open services do not respond to empty probes, making an unresponding port indistinguishable from a filtered one without protocol-specific payload probes.",
      color: "amber",
    };
  }, [nmapScanType, targetPortState]);

  // ==========================================
  // SIMULATOR 5: Flow Log Baseline vs Anomaly Detector
  // ==========================================
  const [anomalyMode, setAnomalyMode] = useState("all"); // "all" | "baseline" | "anomalies"
  const flowRecords = [
    { id: "fl-1", time: "10:14:02", src: "10.0.1.25", dst: "10.0.2.10", proto: "TCP", port: 5432, bytes: "42 KB", action: "ACCEPT", label: "App Tier -> PostgreSQL DB", isAnomaly: false },
    { id: "fl-2", time: "10:14:15", src: "192.168.1.100", dst: "10.0.1.5", proto: "TCP", port: 443, bytes: "1.2 MB", action: "ACCEPT", label: "Client HTTPS Session", isAnomaly: false },
    { id: "fl-3", time: "03:22:11", src: "10.0.1.45", dst: "198.51.100.99", proto: "TCP", port: 4444, bytes: "8.4 MB", action: "ACCEPT", label: "Off-Hours Outbound TCP 4444 (Metasploit C2 Reverse Shell)", isAnomaly: true, triage: "CRITICAL: Workstation initiated outbound shell session to unknown foreign IP outside business hours." },
    { id: "fl-4", time: "10:15:00", src: "10.0.1.45", dst: "10.0.2.0/24", proto: "TCP", port: "Multi", bytes: "12 KB", action: "REJECT", label: "Horizontal Internal Port Scan (20 ports rejected across server subnet)", isAnomaly: true, triage: "HIGH: Host 10.0.1.45 attempted rapid connection across multiple internal server IP addresses." },
    { id: "fl-5", time: "11:00:20", src: "10.0.2.10", dst: "s3.amazonaws.com", proto: "TCP", port: 443, bytes: "2.8 GB", action: "ACCEPT", label: "Database Host Large Outbound Transfer (Exfiltration or Backup?)", isAnomaly: true, triage: "MEDIUM: High-volume outbound data transfer from core database. Validate against scheduled S3 backup window." },
    { id: "fl-6", time: "10:16:30", src: "10.0.1.45", dst: "8.8.8.8", proto: "UDP", port: 53, bytes: "84 B", action: "ACCEPT", label: "Standard DNS Lookup", isAnomaly: false },
  ];

  const displayedFlows = useMemo(() => {
    if (anomalyMode === "baseline") return flowRecords.filter((r) => !r.isAnomaly);
    if (anomalyMode === "anomalies") return flowRecords.filter((r) => r.isAnomaly);
    return flowRecords;
  }, [anomalyMode]);

  // ==========================================
  // QUIZ STATE (10 Questions)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which statement accurately describes the difference between a capture filter and a display filter in network packet analysis?",
      options: [
        "Capture filters are applied after the PCAP is saved to disk; display filters are evaluated during live packet capture",
        "Capture filters (using BPF syntax) discard non-matching packets before they are written to disk; display filters (using Wireshark syntax) only hide packets from view without deleting them from the capture file",
        "Display filters can only filter by MAC address, while capture filters can only filter by IP address",
        "Capture filters automatically decrypt SSL/TLS payloads, while display filters do not",
      ],
      correct: 1,
      explanation:
        "Capture filters use Berkeley Packet Filter (BPF) syntax at the kernel level to discard unwanted traffic before saving to disk, reducing file size and CPU overhead. Display filters are applied in Wireshark after capture to isolate packets without modifying the underlying PCAP data.",
    },
    {
      id: 2,
      question: "When inspecting a TCP conversation in Wireshark, what does a SYN packet immediately followed by a RST/ACK packet from the destination indicate?",
      options: [
        "A successful 3-way handshake was established and data transfer can begin",
        "The destination host is online and received the probe, but actively rejected the connection because no application was listening on that port or a firewall sent an explicit active reset",
        "The packet capture file is corrupted and missing key packets",
        "The connection was upgraded to TLS 1.3",
      ],
      correct: 1,
      explanation:
        "A SYN followed by a RST/ACK indicates an active rejection. The target operating system's network stack is reachable, but because no process bound to that port, the kernel returned a TCP reset.",
    },
    {
      id: 3,
      question: "What is a major limitation of VPC flow logs compared with full packet captures (PCAP)?",
      options: [
        "Flow logs cannot record IP addresses or port numbers",
        "Flow logs only provide aggregated connection metadata (IPs, ports, protocols, packet/byte counts) and generally lack packet-by-packet sequence flags and application-layer payloads",
        "Flow logs can only be generated for UDP traffic",
        "Flow logs require physical tap cables installed in the cloud provider's data center",
      ],
      correct: 1,
      explanation:
        "Flow logs summarize network sessions at a high level. They provide essential traffic volume and connection metadata, but do not record full application payloads (e.g. HTTP headers, TLS handshakes, or raw bytes).",
    },
    {
      id: 4,
      question: "An analyst discovers an open TCP port 443 on an unfamiliar internal server. What can be safely concluded from this observation alone?",
      options: [
        "The service is guaranteed to be a legitimate, secure HTTPS web server",
        "The port commonly hosts HTTPS, but any arbitrary process or malicious backdoor could be listening on port 443; service identification and banner inspection are required to verify the actual protocol",
        "The server is definitely compromised by malware",
        "All traffic to that port is automatically encrypted and compliant with PCI-DSS",
      ],
      correct: 1,
      explanation:
        "Port numbers are conventions, not cryptographic guarantees. Any application (e.g., an SSH daemon, custom VPN, or reverse shell) can be configured to listen on port 443 to bypass naive egress firewall rules.",
    },
    {
      id: 5,
      question: "In Nmap port scanning terminology, what does the 'filtered' state signify?",
      options: [
        "The port is confirmed to be closed and the host returned an ICMP Port Unreachable message",
        "A packet filter, firewall, or network ACL is dropping the probe, preventing the scanner from determining whether the port is open or closed due to lack of response or ICMP administrative block",
        "The port has been sanitized by an antivirus program",
        "The port only accepts connections from localhost",
      ],
      correct: 1,
      explanation:
        "Nmap reports 'filtered' when it receives no response (probe dropped) or receives an ICMP type 3 code (such as code 13 Destination Admin Prohibited). The scanner cannot determine if a listening service exists behind the firewall.",
    },
    {
      id: 6,
      question: "Why should forensic analysts compute and record a cryptographic SHA-256 hash of a PCAP file immediately upon collection?",
      options: [
        "To compress the PCAP file so it takes up less disk space",
        "To establish cryptographic chain of custody and prove that the packet capture evidence was not modified, tampered with, or corrupted during subsequent analysis",
        "To automatically crack any encrypted TLS passwords in the capture",
        "To convert the capture into a Wireshark display filter automatically",
      ],
      correct: 1,
      explanation:
        "Computing a SHA-256 hash creates an immutable digital fingerprint. If the file is later questioned in an audit or legal proceeding, matching hashes prove the evidence has not been altered since collection.",
    },
    {
      id: 7,
      question: "What is the primary difference between a 'horizontal' port scan and a 'vertical' port scan?",
      options: [
        "A horizontal scan targets a single port across many destination IP addresses; a vertical scan targets many different ports on a single destination IP address",
        "A horizontal scan uses Wireshark, while a vertical scan uses tcpdump",
        "A horizontal scan only targets IPv6, while a vertical scan only targets IPv4",
        "A horizontal scan is always legal, while a vertical scan is always illegal",
      ],
      correct: 0,
      explanation:
        "A horizontal scan sweeps a network for a specific vulnerable service (e.g. probing port 445 on every IP in a /24 subnet). A vertical scan probes multiple ports (e.g. ports 1–1024) on a single specific target machine.",
    },
    {
      id: 8,
      question: "Why can banner grabbing (e.g. reading an HTTP Server header or SSH version string) be misleading during vulnerability assessments?",
      options: [
        "Banners are encrypted by default in all network protocols",
        "Banners can be easily customized, masked, spoofed by administrators, or generated by an intermediary reverse proxy rather than the actual backend server",
        "Banners only display the current date and time",
        "Banners are stripped by Layer 2 Ethernet switches",
      ],
      correct: 1,
      explanation:
        "Server banners are easily modified in configuration files (e.g. configuring Apache to send Server: nginx, or suppressing version numbers). A banner string is an initial clue that must be verified against actual patch levels and behavior.",
    },
    {
      id: 9,
      question: "In tcpdump, what does the flag combination '-nn -tttt' accomplish?",
      options: [
        "Enables promiscuous mode and disables all packet filtering",
        "Prevents DNS resolution of IP addresses and port names (-nn) and prints human-readable timestamps (-tttt), speeding up output and preventing external DNS leaks",
        "Encrypts the output capture with a temporary password",
        "Limits the capture to exactly 4 packets",
      ],
      correct: 1,
      explanation:
        "The '-nn' flag instructs tcpdump not to resolve hostnames or port names, avoiding slow DNS lookups and preventing the sniffer from generating extraneous network traffic. The '-tttt' flag formats timestamps as 'YYYY-MM-DD HH:MM:SS.frac'.",
    },
    {
      id: 10,
      question: "An analyst observes 200 SYN packets sent from an internal workstation to 50 internal server IPs in 5 seconds. What is the most appropriate professional evidence statement?",
      options: [
        "The workstation is definitely infected with ransomware and must be wiped immediately",
        "The capture shows the host initiated 200 SYN packets to 50 distinct destinations in 5 seconds, which is consistent with internal port scanning behavior; the finding must be correlated with endpoint process records and scheduled vulnerability scan authorizations",
        "The user is simply browsing YouTube",
        "The firewall has failed and allowed unauthorized traffic",
      ],
      correct: 1,
      explanation:
        "Defensible security analysis separates facts (observed packet counts and timing) from interpretations (consistent with port scanning) and avoids unsubstantiated conclusions (e.g. claiming malware without endpoint verification).",
    },
  ];

  const handleQuizSelect = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  // Copyable Markdown Packet Assessment Template
  const packetAssessmentTemplate = `# NETWORK PACKET INVESTIGATION & ASSESSMENT REPORT
**Case Reference:** IR-2026-PCAP-008
**Analyst:** Senior Network Security Analyst / SRE
**Evidence Hash (SHA-256):** e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
**Capture Source:** perimeter-eth0-mirror.pcap (2,450 packets collected)
**Collection Timezone:** 2026-10-15 10:14:00 UTC to 10:20:00 UTC

---

## 1. EXECUTIVE SUMMARY
A targeted packet investigation was conducted on mirrored network interface traffic to evaluate reported connectivity latency and potential lateral reconnaissance. Analysis revealed legitimate HTTPS traffic alongside an unauthorized horizontal port-scan pattern originating from internal host **10.0.1.45**, followed by an off-hours outbound connection to an untrusted external IP.

---

## 2. EVIDENCE CAPTURE PARAMETERS
- **Capture Tool:** tcpdump v4.99.1 (libpcap version 1.10.1)
- **Execution Command:** \`tcpdump -i eth0 -s 0 -nn -tttt -w perimeter-eth0-mirror.pcap 'tcp or udp or icmp'\`
- **Total Frames Analyzed:** 2,450 packets (Zero packet drop reported by kernel ring buffer).
- **Scope Authorization:** Authorized under Security Operations RFC-9042 (Corporate Campus LAN & DMZ).

---

## 3. TRAFFIC PROFILE & CONVERSATION ANALYSIS
| Protocol | Packet Count | Byte Volume | Prominent Endpoints | Observations |
| :--- | :--- | :--- | :--- | :--- |
| **TLS / HTTPS (TCP 443)** | 1,840 | 1.84 MB | 192.168.1.45 <-> 93.184.216.34 | Normal TLS 1.3 session; 2 retransmissions observed during link jitter. |
| **DNS (UDP 53)** | 120 | 14.2 KB | 192.168.1.45 <-> 8.8.8.8 | NXDOMAIN returned for internal-payroll.corp (misconfigured local resolver). |
| **TCP Port Scan (RDP 3389)** | 48 | 3.2 KB | 10.0.1.45 -> 10.0.5.20 | SYN packet sent; received RST/ACK (Port Closed/Rejected). |
| **Outbound C2 (TCP 4444)** | 442 | 8.4 MB | 10.0.1.45 -> 198.51.100.99 | Unencrypted interactive reverse shell session observed. |

---

## 4. DETAILED ANOMALY INVESTIGATION TABLE
- **Observation:** Host 10.0.1.45 initiated 48 TCP SYN packets to port 3389 across the /24 server subnet within 3.5 seconds.
- **Interpretation:** Activity pattern is consistent with automated horizontal reconnaissance for exposed Windows Remote Desktop services.
- **Alternative Explanations:** Automated asset management inventory tool running unauthorized scan.
- **Confidence Level:** High (packet timestamps and sequence delta confirm scripted behavior).
- **Follow-up Action:** Isolate host 10.0.1.45 via switch port 802.1X quarantine and capture volatile memory.

---

## 5. ACTIONABLE REMEDIATION RECOMMENDATIONS
1. **Immediate Quarantine:** Sever network access for endpoint 10.0.1.45 at the access switch layer.
2. **Egress Firewall Enforcement:** Block all outbound TCP traffic to unapproved non-standard ports (such as port 4444).
3. **Internal Segmentation:** Deploy microsegmentation access control lists between workstation subnets and the 10.0.5.0/24 server farm.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans">
      <ModuleNav
        track="networks"
        currentModuleId="packet-analysis"
        showAiTutor={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-700 mb-4">
          <span>COMPUTER NETWORKS &amp; INTERNET ENGINEERING</span>
          <span>/</span>
          <span className="text-[#ea580c] font-semibold">MODULE 18</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
              <Search size={14} />
              <span>Network Forensics &amp; Packet Dissection</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-700">
              <span>WIRESHARK</span>
              <span>•</span>
              <span>TCPDUMP</span>
              <span>•</span>
              <span>BPF FILTERS</span>
              <span>•</span>
              <span>NMAP</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Packet Analysis &amp; Network Reconnaissance
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-6">
            Master the definitive toolkit of network engineers and security investigators. Reconstruct raw byte streams in Wireshark, script command-line captures with tcpdump, evaluate BPF filters, analyze TCP flags, infer Nmap port states, and build evidence-backed forensic network assessment reports.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#e7e3da] text-xs font-mono">
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">PACKET DISSECTOR</span>
              <span className="font-bold text-stone-900">Wireshark (3-Pane)</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">CAPTURE ENGINE</span>
              <span className="font-bold text-stone-900">tcpdump &amp; BPF</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">PORT STATE INFERENCE</span>
              <span className="font-bold text-stone-900">Open / Closed / Filtered</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">EVIDENCE INTEGRITY</span>
              <span className="font-bold text-[#ea580c]">SHA-256 Chain of Custody</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#e7e3da]">
          {[
            { id: "curriculum", label: "Curriculum & Theory", icon: FileText },
            { id: "simulators", label: "Interactive Simulators (5)", icon: Sliders },
            { id: "lab", label: "Hands-on Packet Lab (18.1)", icon: Terminal },
            { id: "quiz", label: "Knowledge Check (10)", icon: HelpCircle },
            { id: "audit", label: "SRE Forensic Report", icon: Shield },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* TAB 1: CURRICULUM & THEORY                                */}
        {/* ========================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Section 18.1 & 18.2: Packet Analysis Fundamentals */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Search size={16} />
                <span>SECTION 18.1 — 18.2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Packet Analysis Fundamentals &amp; The Five Essential Questions
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                A packet capture (PCAP) records raw network frames observed at a physical or virtual network interface. When opening an unfamiliar capture file during an outage or security investigation, disciplined analysts answer five structured questions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">1. Who is Talking?</span>
                  <p className="text-stone-600">Identify source/destination IP addresses, MAC addresses, ports, and protocols.</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">2. When Did It Happen?</span>
                  <p className="text-stone-600">Establish precise timestamps, sequence intervals, session duration, and frequency.</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">3. What Was Exchanged?</span>
                  <p className="text-stone-600">Trace TCP handshakes, payload lengths, resets, errors, and retransmissions.</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">4. What is Unusual?</span>
                  <p className="text-stone-600">Compare against normal application baselines, expected ports, and approved subnets.</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-[#ea580c] block mb-1">5. What is the Evidence?</span>
                  <p className="text-stone-600">Record exact packet numbers, hex offsets, hashes, and rule out alternative causes.</p>
                </div>
              </div>
            </div>

            {/* Section 18.3: Wireshark Dissection & Filters */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Filter size={16} />
                <span>SECTION 18.3</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Wireshark: 3-Pane Architecture &amp; Display Filter Reference
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Wireshark provides three core inspection panes: <strong>Packet List</strong> (summary rows), <strong>Packet Details</strong> (expandable protocol headers: Ethernet &rarr; IPv4 &rarr; TCP), and <strong>Packet Bytes</strong> (raw hex and ASCII dump).
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden font-mono">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Analysis Objective</th>
                      <th className="p-3">Wireshark Display Filter</th>
                      <th className="p-3">Diagnostic Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600 text-[11px]">
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Unanswered Connection Setup</td>
                      <td className="p-3 text-[#ea580c] font-bold">tcp.flags.syn == 1 &amp;&amp; tcp.flags.ack == 0</td>
                      <td className="p-3">Isolates initial SYN packets (detects scans or unresponsive servers)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Connection Resets</td>
                      <td className="p-3 text-[#ea580c] font-bold">tcp.flags.reset == 1</td>
                      <td className="p-3">Detects abruptly rejected connections or firewall active drops</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Packet Loss &amp; Retransmissions</td>
                      <td className="p-3 text-[#ea580c] font-bold">tcp.analysis.retransmission</td>
                      <td className="p-3">Identifies packet drops, latency jitter, and buffer congestion</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Failed DNS Lookups</td>
                      <td className="p-3 text-[#ea580c] font-bold">dns.flags.rcode != 0</td>
                      <td className="p-3">Catches NXDOMAIN (non-existent domain) and SERVFAIL errors</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">TLS Handshake Exchange</td>
                      <td className="p-3 text-[#ea580c] font-bold">tls.handshake.type == 1</td>
                      <td className="p-3">Inspects client SNI (Server Name Indication) and supported ciphers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 18.4: tcpdump CLI & Evidence Integrity */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Terminal size={16} />
                <span>SECTION 18.4</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Command-Line Capture with tcpdump &amp; Evidence Handling
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                On remote production servers, headless containers, or high-throughput core routers, <code>tcpdump</code> provides lightweight, scriptable packet capture using kernel-level Berkeley Packet Filters (BPF).
              </p>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs mb-6 space-y-2">
                <div className="text-stone-500"># 1. Capture full packets (-s 0) on eth0, up to 1000 frames, save to disk:</div>
                <div className="text-orange-400">sudo tcpdump -i eth0 -s 0 -c 1000 -w security-investigation.pcap &apos;tcp port 443 or udp port 53&apos;</div>
                <div className="text-stone-500 mt-3"># 2. Inspect saved PCAP with human-readable timestamps without resolving DNS (-nn):</div>
                <div className="text-emerald-400">tcpdump -nn -tttt -r security-investigation.pcap</div>
                <div className="text-stone-500 mt-3"># 3. Compute immutable SHA-256 hash immediately to preserve chain of custody:</div>
                <div className="text-blue-400">sha256sum security-investigation.pcap &gt; security-investigation.pcap.sha256</div>
              </div>
            </div>

            {/* Section 18.5 & 18.6: Port Scanning & Nmap States */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Radio size={16} />
                <span>SECTION 18.5 — 18.6</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Authorized Reconnaissance &amp; Nmap Port State Inference
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Network scanners do not directly see whether an application is installed. They send targeted protocol probes and infer the port state based on responses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-emerald-700 text-sm block mb-1">State: OPEN</span>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    The target system returned a TCP <strong>SYN/ACK</strong> or active protocol response. An application is actively accepting connections.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-rose-700 text-sm block mb-1">State: CLOSED</span>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    The target IP stack returned a TCP <strong>RST/ACK</strong> or ICMP Port Unreachable. The host is online, but no process is bound to the port.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-amber-700 text-sm block mb-1">State: FILTERED</span>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    No response returned (probe timed out) or an ICMP <strong>Admin Prohibited</strong> error was returned. A firewall is dropping the packet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INTERACTIVE SIMULATORS (5)                         */}
        {/* ========================================================= */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: Virtual 3-Pane Wireshark Dissector */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <Search size={14} />
                  <span>SIMULATOR 1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  Virtual 3-Pane Wireshark Packet Dissector &amp; Display Filter Engine
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Filter packet captures and expand hierarchical protocol layers (Ethernet &rarr; IP &rarr; TCP &rarr; Payload) with raw hex view.
                </p>
              </div>

              {/* Filter Bar */}
              <div className="flex flex-wrap items-center gap-2 mb-4 p-3 rounded-2xl bg-stone-900 text-white">
                <span className="text-xs font-mono text-orange-400 font-bold flex items-center gap-1.5">
                  <Filter size={14} />
                  <span>Filter:</span>
                </span>
                <input
                  type="text"
                  value={displayFilter}
                  onChange={(e) => setDisplayFilter(e.target.value)}
                  placeholder="e.g. tcp, dns, tcp.flags.syn == 1, 443"
                  className="flex-1 min-w-[200px] p-1.5 rounded-lg bg-stone-800 text-stone-100 font-mono text-xs border border-stone-700 focus:outline-none focus:border-orange-500"
                />
                <button
                  onClick={() => setDisplayFilter("")}
                  className="px-2.5 py-1 rounded-lg bg-stone-700 text-stone-200 text-xs font-mono hover:bg-stone-600 cursor-pointer"
                >
                  Clear
                </button>
              </div>

              {/* Quick Filter Shortcuts */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[11px] font-mono">
                <span className="text-stone-500 text-[10px] mr-1">Quick Filters:</span>
                {[
                  { label: "TCP SYN Only", f: "tcp.flags.syn == 1 && tcp.flags.ack == 0" },
                  { label: "TCP Resets", f: "tcp.flags.reset == 1" },
                  { label: "Retransmissions", f: "tcp.analysis.retransmission" },
                  { label: "DNS Errors", f: "dns.flags.rcode != 0" },
                  { label: "Port 443", f: "port 443" },
                ].map((qf, i) => (
                  <button
                    key={i}
                    onClick={() => setDisplayFilter(qf.f)}
                    className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 hover:bg-orange-100 hover:text-orange-800 transition cursor-pointer"
                  >
                    {qf.label}
                  </button>
                ))}
              </div>

              {/* PANE 1: Packet List */}
              <div className="border border-stone-200 rounded-2xl overflow-hidden mb-4">
                <div className="bg-stone-100 p-2 text-[11px] font-mono font-bold text-stone-700 flex items-center justify-between">
                  <span>PANE 1: PACKET LIST ({filteredPackets.length} matching frames)</span>
                  <span className="text-stone-500 text-[10px]">Click a row to inspect layers</span>
                </div>
                <div className="overflow-x-auto max-h-56">
                  <table className="w-full text-xs text-left font-mono text-[11px]">
                    <thead className="bg-stone-50 text-stone-600 border-b border-stone-200">
                      <tr>
                        <th className="p-2">No.</th>
                        <th className="p-2">Time</th>
                        <th className="p-2">Source</th>
                        <th className="p-2">Destination</th>
                        <th className="p-2">Protocol</th>
                        <th className="p-2">Len</th>
                        <th className="p-2">Info</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {filteredPackets.map((pkt) => {
                        const isSelected = pkt.no === selectedPacketNo;
                        let rowBg = isSelected ? "bg-orange-50 font-bold" : "hover:bg-stone-50";
                        if (pkt.flags.retransmission) rowBg += " text-rose-700";
                        if (pkt.flags.rst) rowBg += " text-rose-800";
                        if (pkt.proto === "DNS") rowBg += " text-blue-800";

                        return (
                          <tr
                            key={pkt.no}
                            onClick={() => setSelectedPacketNo(pkt.no)}
                            className={`cursor-pointer transition ${rowBg}`}
                          >
                            <td className="p-2">{pkt.no}</td>
                            <td className="p-2">{pkt.time}</td>
                            <td className="p-2">{pkt.src}</td>
                            <td className="p-2">{pkt.dst}</td>
                            <td className="p-2">{pkt.proto}</td>
                            <td className="p-2">{pkt.len}</td>
                            <td className="p-2 truncate max-w-md">{pkt.info}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PANE 2 & 3: Details & Bytes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Details Pane */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-mono space-y-2">
                  <div className="font-bold text-stone-900 text-xs border-b border-stone-200 pb-1 mb-2">
                    PANE 2: PACKET DETAILS (Frame #{activePacket.no})
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-stone-200">
                    <span className="text-stone-500 block text-[10px]">LAYER 2: DATA LINK</span>
                    <span className="text-stone-800">{activePacket.details.ethernet}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-stone-200">
                    <span className="text-stone-500 block text-[10px]">LAYER 3: NETWORK</span>
                    <span className="text-stone-800">{activePacket.details.ip}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-stone-200">
                    <span className="text-stone-500 block text-[10px]">LAYER 4: TRANSPORT</span>
                    <span className="text-stone-800">{activePacket.details.transport}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-stone-200 text-emerald-800">
                    <span className="text-stone-500 block text-[10px]">APPLICATION PAYLOAD / METADATA</span>
                    <span>{activePacket.details.payload}</span>
                  </div>
                </div>

                {/* Hex Bytes Pane */}
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-300 text-xs font-mono">
                  <div className="font-bold text-orange-400 text-xs border-b border-stone-700 pb-1 mb-2">
                    PANE 3: PACKET BYTES (Hex &amp; ASCII)
                  </div>
                  <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 text-[11px] leading-relaxed break-all">
                    {activePacket.hex}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-2">
                    Raw decoded wire payload matching Wireshark byte dissection view.
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: Interactive TCP Stream Reconstructor */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Activity size={14} />
                    <span>SIMULATOR 2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    TCP Stream Reconstructor &amp; Ladder Sequence Analyzer
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Reconstruct the ordered byte-stream of a TCP connection and observe how handshakes, resets, and retransmissions appear.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={tcpAnomalyType}
                    onChange={(e) => setTcpAnomalyType(e.target.value)}
                    className="p-1.5 rounded-xl border border-stone-300 text-xs font-mono bg-stone-50"
                  >
                    <option value="normal">Normal Connection &amp; Closure</option>
                    <option value="rst">Abrupt TCP Reset (RST)</option>
                    <option value="retransmit">Packet Loss &amp; Retransmission</option>
                  </select>
                </div>
              </div>

              {/* Ladder Sequence Diagram */}
              <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs mb-4">
                <div className="grid grid-cols-2 text-center font-bold pb-2 border-b border-stone-700 mb-4 text-orange-400">
                  <span>CLIENT (192.168.1.45:54210)</span>
                  <span>SERVER (93.184.216.34:443)</span>
                </div>

                <div className="space-y-3">
                  {/* Step 1: SYN */}
                  <div className="flex items-center justify-between py-1 border-b border-stone-800">
                    <span className="text-emerald-400">[1] SYN Seq=0 Win=64240</span>
                    <span className="text-stone-500">------------ SYN -----------&gt;</span>
                    <span className="text-stone-400">Server receives SYN</span>
                  </div>

                  {/* Step 2: SYN-ACK */}
                  <div className="flex items-center justify-between py-1 border-b border-stone-800">
                    <span className="text-stone-400">Client receives SYN/ACK</span>
                    <span className="text-emerald-400">&lt;--------- SYN, ACK --------</span>
                    <span className="text-emerald-400">[2] Seq=0 Ack=1 Win=65535</span>
                  </div>

                  {/* Step 3: ACK */}
                  <div className="flex items-center justify-between py-1 border-b border-stone-800">
                    <span className="text-emerald-400">[3] ACK Seq=1 Ack=1</span>
                    <span className="text-stone-500">------------ ACK -----------&gt;</span>
                    <span className="text-stone-300 font-bold">STATE: ESTABLISHED</span>
                  </div>

                  {/* Anomaly / Follow-up */}
                  {tcpAnomalyType === "normal" && (
                    <div className="flex items-center justify-between py-1 text-blue-400">
                      <span>[4] TLS ClientHello (420 Bytes)</span>
                      <span>--------- Application Data -------&gt;</span>
                      <span>[5] Server EncryptedExtensions (1400B)</span>
                    </div>
                  )}

                  {tcpAnomalyType === "rst" && (
                    <div className="flex items-center justify-between py-1 text-rose-400 font-bold bg-rose-950/40 p-2 rounded-xl">
                      <span>Client attempts connection</span>
                      <span>&lt;--------- TCP [RST, ACK] ---------</span>
                      <span>Server actively rejected connection (Port closed or firewall active-reject)</span>
                    </div>
                  )}

                  {tcpAnomalyType === "retransmit" && (
                    <div className="flex items-center justify-between py-1 text-amber-400 bg-amber-950/40 p-2 rounded-xl">
                      <span>[Retransmission] SYN Seq=0 (Retried)</span>
                      <span>---- (Packet dropped in transit) ---&gt;</span>
                      <span>RTO Timer fired; duplicate packet retransmitted</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: BPF Capture Filter vs Display Filter Tester */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <Terminal size={14} />
                  <span>SIMULATOR 3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  BPF Capture Filters (tcpdump) vs Display Filters (Wireshark)
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Understand kernel-level BPF pre-capture filtering versus post-capture analytical display filtering.
                </p>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
                {bpfExamples.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => setBpfFilterQuery(ex.bpf)}
                    className="p-3 rounded-xl border border-stone-200 bg-stone-50 text-left hover:border-orange-300 transition cursor-pointer text-xs"
                  >
                    <div className="font-bold text-stone-900 mb-1">{ex.label}</div>
                    <div className="font-mono text-[10px] text-[#ea580c] truncate">{ex.bpf}</div>
                    <div className="text-[10px] text-stone-500 mt-1">{ex.desc}</div>
                  </button>
                ))}
              </div>

              {/* Side-by-side comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200">
                  <div className="text-orange-400 font-bold mb-2 flex items-center justify-between">
                    <span>KERNEL BPF CAPTURE FILTER (tcpdump)</span>
                    <span className="text-[10px] bg-stone-800 px-2 py-0.5 rounded">Pre-Capture</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-950 text-emerald-400 mb-3">
                    tcpdump -i eth0 &apos;{bpfFilterQuery}&apos;
                  </div>
                  <ul className="text-stone-400 space-y-1 text-[11px] list-disc list-inside">
                    <li>Evaluated inside kernel before copying packet to user space.</li>
                    <li>Saves disk space and prevents buffer drops on high-throughput links.</li>
                    <li>Discarded packets are permanently unrecoverable.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200">
                  <div className="text-blue-400 font-bold mb-2 flex items-center justify-between">
                    <span>WIRESHARK DISPLAY FILTER</span>
                    <span className="text-[10px] bg-stone-800 px-2 py-0.5 rounded">Post-Capture</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-950 text-blue-300 mb-3">
                    {bpfFilterQuery.includes("443") ? "tcp.port == 443" : "ip.addr == 192.168.1.45"}
                  </div>
                  <ul className="text-stone-400 space-y-1 text-[11px] list-disc list-inside">
                    <li>Applied dynamically to loaded PCAP frames in memory.</li>
                    <li>Hides non-matching packets without deleting them.</li>
                    <li>Supports protocol-dissected fields (e.g. <code>dns.flags.rcode != 0</code>).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: Nmap Port State Inference Engine */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <Radio size={14} />
                  <span>SIMULATOR 4</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  Nmap Port State Inference Engine (SYN vs Connect vs UDP)
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Simulate port scanner probes and discover how open, closed, and filtered states are inferred from packet responses.
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">Scanning Technique</label>
                  <select
                    value={nmapScanType}
                    onChange={(e) => setNmapScanType(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="syn">TCP SYN Stealth Scan (-sS)</option>
                    <option value="connect">TCP Full Connect Scan (-sT)</option>
                    <option value="udp">UDP Datagram Scan (-sU)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Remote Port Condition</label>
                  <select
                    value={targetPortState}
                    onChange={(e) => setTargetPortState(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="open">Service Listening (Port Open)</option>
                    <option value="closed">No Service Bound (Port Closed)</option>
                    <option value="filtered">Firewall Dropping Packets (Filtered)</option>
                  </select>
                </div>
              </div>

              {/* Inference Result Card */}
              <div
                className={`p-5 rounded-2xl border text-xs font-mono space-y-2.5 ${
                  nmapScanResult.color === "emerald"
                    ? "bg-emerald-50/60 border-emerald-300 text-emerald-950"
                    : nmapScanResult.color === "rose"
                    ? "bg-rose-50/60 border-rose-300 text-rose-950"
                    : "bg-amber-50/60 border-amber-300 text-amber-950"
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-bold text-sm">INFERRED PORT STATE:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      nmapScanResult.color === "emerald"
                        ? "bg-emerald-600 text-white"
                        : nmapScanResult.color === "rose"
                        ? "bg-rose-600 text-white"
                        : "bg-amber-600 text-white"
                    }`}
                  >
                    {nmapScanResult.inferredState}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-500 block text-[10px]">PROBE TRANSMITTED:</span>
                  <span className="text-stone-800">{nmapScanResult.probesSent}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-500 block text-[10px]">RESPONSE RECEIVED:</span>
                  <span className="text-stone-800">{nmapScanResult.responseReceived}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-500 block text-[10px]">SCANNER REACTION:</span>
                  <span className="text-stone-800">{nmapScanResult.scannerReaction}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-stone-500 block text-[10px]">PROTOCOL INFERENCE RATIONALE:</span>
                  <span className="text-stone-800">{nmapScanResult.explanation}</span>
                </div>
              </div>
            </div>

            {/* SIMULATOR 5: Flow Log Baseline vs Anomaly Detector */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Activity size={14} />
                    <span>SIMULATOR 5</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    VPC Flow Log Baseline vs. Anomaly Detection Sandbox
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Contrast normal operational flow baselines with C2 beacons, horizontal port scans, and data exfiltration spikes.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setAnomalyMode("all")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                      anomalyMode === "all" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    All Flows
                  </button>
                  <button
                    onClick={() => setAnomalyMode("baseline")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                      anomalyMode === "baseline" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Baseline Only
                  </button>
                  <button
                    onClick={() => setAnomalyMode("anomalies")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                      anomalyMode === "anomalies" ? "bg-rose-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Anomalies Only
                  </button>
                </div>
              </div>

              {/* Flow Logs Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-2xl mb-4">
                <table className="w-full text-xs text-left font-mono text-[11px]">
                  <thead className="bg-stone-100 text-stone-700 border-b border-stone-200">
                    <tr>
                      <th className="p-2.5">Flow ID</th>
                      <th className="p-2.5">Time</th>
                      <th className="p-2.5">Source IP</th>
                      <th className="p-2.5">Destination IP</th>
                      <th className="p-2.5">Port</th>
                      <th className="p-2.5">Bytes</th>
                      <th className="p-2.5">Action</th>
                      <th className="p-2.5">Flow Description &amp; Triage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {displayedFlows.map((fl) => (
                      <tr
                        key={fl.id}
                        className={fl.isAnomaly ? "bg-rose-50/70 text-rose-950 font-semibold" : "hover:bg-stone-50"}
                      >
                        <td className="p-2.5 font-bold">{fl.id}</td>
                        <td className="p-2.5">{fl.time}</td>
                        <td className="p-2.5">{fl.src}</td>
                        <td className="p-2.5">{fl.dst}</td>
                        <td className="p-2.5">{fl.port}</td>
                        <td className="p-2.5">{fl.bytes}</td>
                        <td className="p-2.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              fl.action === "ACCEPT" ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {fl.action}
                          </span>
                        </td>
                        <td className="p-2.5">
                          <div>{fl.label}</div>
                          {fl.triage && (
                            <div className="text-[10px] text-rose-700 font-normal mt-0.5">
                              &gt; {fl.triage}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: HANDS-ON LAB                                       */}
        {/* ========================================================= */}
        {activeTab === "lab" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Terminal size={14} />
                    <span>LAB 18.1</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Network Assessment &amp; Packet Investigation Lab
                  </h2>
                </div>
                <div className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                  TOOLS: WIRESHARK + TCPDUMP
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                Investigate a provided packet capture file (<code>perimeter-eth0-mirror.pcap</code>) to reconstruct key conversations, identify active services, distinguish legitimate traffic from anomalous port scans, and document findings with full chain-of-custody integrity.
              </p>

              {/* Step-by-step investigation cards */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">Step 1 — Scope &amp; Evidence Integrity</span>
                  <p className="text-stone-600 leading-relaxed mb-2">
                    Calculate the SHA-256 hash of the PCAP file immediately upon collection. Never perform analysis directly on the original master evidence copy.
                  </p>
                  <code className="p-2 bg-stone-900 text-orange-300 rounded-lg block font-mono">
                    sha256sum perimeter-eth0-mirror.pcap &gt; evidence-integrity.sha256
                  </code>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">Step 2 — Traffic Overview &amp; Hierarchy</span>
                  <p className="text-stone-600 leading-relaxed">
                    In Wireshark, navigate to <strong>Statistics &rarr; Protocol Hierarchy</strong> and <strong>Statistics &rarr; Conversations</strong>. Record the primary protocols, volume breakdown, and top communicating endpoints.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">Step 3 — Follow TCP Streams</span>
                  <p className="text-stone-600 leading-relaxed">
                    Filter by <code>tcp.port == 443</code>. Right-click packet #1 and select <strong>Follow &rarr; TCP Stream</strong>. Note connection setup, payload exchanges, and verify whether retransmissions or resets occurred.
                  </p>
                </div>
              </div>

              {/* 8-point checklist */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#ea580c]" />
                    <span>Lab Completion Checklist ({Object.values(checkedItems).filter(Boolean).length}/8)</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-700">TRACK PROGRESS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "I can explain packet captures, protocol decoders, and visibility limitations.",
                    "I have applied Wireshark display filters and followed reconstructed TCP streams.",
                    "I have executed scoped tcpdump commands with BPF capture filters.",
                    "I have compared raw packet sequences with flow logs and baselines.",
                    "I understand Nmap port states: open, closed, filtered, and open|filtered.",
                    "I can distinguish horizontal port scans from benign application retries.",
                    "I have calculated and documented cryptographic SHA-256 hashes for evidence integrity.",
                    "I have completed and reviewed the portfolio-grade network assessment report.",
                  ].map((task, idx) => (
                    <label
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-orange-300 transition"
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedItems[idx]}
                        onChange={() => toggleCheck(idx)}
                        className="mt-0.5 rounded text-orange-600 focus:ring-orange-500"
                      />
                      <span className={checkedItems[idx] ? "line-through text-stone-700" : "text-stone-700"}>
                        {task}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: KNOWLEDGE CHECK (10 QUESTIONS)                     */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <HelpCircle size={14} />
                    <span>ASSESSMENT</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Module 18 Knowledge Check: Packet Analysis &amp; Reconnaissance
                  </h2>
                </div>
                {quizSubmitted && (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-mono px-3 py-1.5 rounded-xl bg-orange-100 text-orange-800">
                      SCORE: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </span>
                    <button
                      onClick={resetQuiz}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-700 transition cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, qIdx) => {
                  const selected = quizAnswers[q.id];
                  const isAnswered = selected !== undefined;
                  const isCorrect = selected === q.correct;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="font-bold text-stone-900 text-sm">
                          {qIdx + 1}. {q.question}
                        </span>
                        {quizSubmitted && (
                          <span
                            className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                              isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {isCorrect ? "CORRECT" : "INCORRECT"}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 mb-3">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                          if (quizSubmitted) {
                            if (optIdx === q.correct) {
                              btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold";
                            } else if (isOptionSelected) {
                              btnStyle = "bg-rose-100 border-rose-400 text-rose-900";
                            } else {
                              btnStyle = "bg-white border-stone-200 text-stone-700 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-stone-900 text-white font-semibold border-stone-900";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleQuizSelect(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs opacity-60">
                                  {String.fromCharCode(65 + optIdx)}.
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-stone-800 leading-relaxed font-sans">
                          <strong>Rationale:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white font-bold text-sm hover:bg-orange-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    Submit All 10 Answers
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: SRE FORENSIC REPORT                                */}
        {/* ========================================================= */}
        {activeTab === "audit" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Shield size={14} />
                    <span>SRE PRODUCTION DELIVERABLE</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Network Assessment &amp; Packet Investigation Report
                  </h2>
                </div>
                <button
                  onClick={() => handleCopy(packetAssessmentTemplate, "pcap-report")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                >
                  {copiedKey === "pcap-report" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedKey === "pcap-report" ? "Copied Markdown!" : "Copy Investigation Plan"}</span>
                </button>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                Deliverable template for security operations, incident response, network troubleshooting, and SOC audits.
              </p>

              <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                {packetAssessmentTemplate}
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/threat-modeling");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 17 — Security &amp; Threat Modeling</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/attacks-defenses");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-orange-600 transition cursor-pointer"
          >
            <span>Next: Module 19 — Common Attacks &amp; Countermeasures</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
