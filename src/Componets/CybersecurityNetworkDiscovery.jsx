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
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
  Eye,
  FileText,
  Key,
  Database,
  Search,
  AlertCircle,
  FileSpreadsheet,
  TerminalSquare,
  Binary,
  FolderGit2,
  Filter,
  ShieldAlert,
  Target,
  Crosshair,
  UserCheck,
  UserX,
  FileWarning,
  Flame,
  CheckSquare,
  Square,
  PlusCircle,
  Trash2,
  Download,
  Fingerprint,
  Radio,
  FileCheck2,
  ListFilter,
  CheckCheck,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 7                            */
/* Network Discovery, Port Scanning Concepts, and Service Enumeration         */
/* Informed by Nmap Project, NIST SP 800-115, IANA Port Registry, RFC 6335   */
/* -------------------------------------------------------------------------- */

export default function CybersecurityNetworkDiscovery() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'packet-flow' | 'segmentation' | 'worksheet' | 'banner-sandbox' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: NMAP COMMAND & PACKET FLOW VISUALIZER                          */
  /* -------------------------------------------------------------------------- */
  const [scanType, setScanType] = useState("syn"); // 'syn' | 'connect' | 'udp' | 'ping' | 'version' | 'os'
  const [targetPort, setTargetPort] = useState(80);
  const [portStateOutcome, setPortStateOutcome] = useState("open"); // 'open' | 'closed' | 'filtered_drop' | 'filtered_icmp' | 'open_filtered'

  const scanModes = {
    syn: {
      name: "TCP SYN Stealth Scan (-sS)",
      flag: "-sS",
      needsRoot: true,
      desc: "Sends raw TCP SYN packet. If SYN-ACK received, port is open; scanner immediately sends RST to avoid completing full connection.",
    },
    connect: {
      name: "TCP Connect Scan (-sT)",
      flag: "-sT",
      needsRoot: false,
      desc: "Uses the OS Berkeley sockets API to complete a full 3-way handshake (SYN -> SYN-ACK -> ACK) before tearing down with RST/FIN.",
    },
    udp: {
      name: "UDP Port Scan (-sU)",
      flag: "-sU",
      needsRoot: true,
      desc: "Sends UDP probe packets. If ICMP Port Unreachable (Type 3, Code 3) is returned, port is closed. No response is ambiguous (open|filtered).",
    },
    ping: {
      name: "Host Discovery Probe (-sn)",
      flag: "-sn",
      needsRoot: false,
      desc: "Disables port scanning and tests host reachability using ICMP Echo, TCP SYN to 443, TCP ACK to 80, and ARP on local subnets.",
    },
    version: {
      name: "Service & Version Detection (-sV)",
      flag: "-sV",
      needsRoot: false,
      desc: "Connects to open ports, listens for banners, and sends protocol-specific probes from nmap-service-probes to identify vendor & version.",
    },
    os: {
      name: "TCP/IP OS Fingerprinting (-O)",
      flag: "-O",
      needsRoot: true,
      desc: "Sends a battery of customized TCP/UDP/ICMP packets with unusual flags, analyzing TCP window size, options, TTL, and DF bits.",
    },
  };

  const getPacketFlow = useMemo(() => {
    if (scanType === "syn") {
      if (portStateOutcome === "open") {
        return [
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `TCP [SYN] Seq=0 Win=64240 DstPort=${targetPort}`, desc: "Scanner sends initial connection request" },
          { sender: "Target (192.168.1.100)", receiver: "Scanner (192.168.1.50)", packet: `TCP [SYN, ACK] Seq=0 Ack=1 Win=65160 SrcPort=${targetPort}`, desc: "Target acknowledges and accepts connection" },
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `TCP [RST] Seq=1 DstPort=${targetPort}`, desc: "Scanner abruptly tears down connection without completing handshake" },
        ];
      }
      if (portStateOutcome === "closed") {
        return [
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `TCP [SYN] Seq=0 Win=64240 DstPort=${targetPort}`, desc: "Scanner sends probe" },
          { sender: "Target (192.168.1.100)", receiver: "Scanner (192.168.1.50)", packet: `TCP [RST, ACK] Seq=0 Ack=1 Win=0 SrcPort=${targetPort}`, desc: "Target kernel indicates no application is listening" },
        ];
      }
      if (portStateOutcome === "filtered_drop") {
        return [
          { sender: "Scanner (192.168.1.50)", receiver: "Firewall / Target", packet: `TCP [SYN] Seq=0 Win=64240 DstPort=${targetPort}`, desc: "Scanner sends probe" },
          { sender: "Firewall", receiver: "Scanner (192.168.1.50)", packet: "*(Silent Drop - No Packet Returned)*", desc: "Firewall rule DROP silently discards probe. Scanner times out after retransmissions" },
        ];
      }
      if (portStateOutcome === "filtered_icmp") {
        return [
          { sender: "Scanner (192.168.1.50)", receiver: "Gateway Firewall", packet: `TCP [SYN] Seq=0 Win=64240 DstPort=${targetPort}`, desc: "Scanner sends probe" },
          { sender: "Gateway Firewall", receiver: "Scanner (192.168.1.50)", packet: "ICMP Type 3, Code 13 (Communication Administratively Filtered)", desc: "Intermediate router explicitly reports administrative filtering" },
        ];
      }
      return [
        { sender: "Scanner (192.168.1.50)", receiver: "Target", packet: `TCP [SYN] DstPort=${targetPort}`, desc: "SYN Probe sent" },
        { sender: "Network", receiver: "Scanner", packet: "*(No conclusive response)*", desc: "Ambiguous observation" },
      ];
    }

    if (scanType === "connect") {
      if (portStateOutcome === "open") {
        return [
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `TCP [SYN] Seq=0 DstPort=${targetPort}`, desc: "OS connect() initiates connection" },
          { sender: "Target (192.168.1.100)", receiver: "Scanner (192.168.1.50)", packet: `TCP [SYN, ACK] Seq=0 Ack=1 SrcPort=${targetPort}`, desc: "Target accepts connection" },
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `TCP [ACK] Seq=1 Ack=1 DstPort=${targetPort}`, desc: "Full connection established (Logged in application layer!)" },
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `TCP [RST, ACK] Seq=1 DstPort=${targetPort}`, desc: "Scanner closes socket immediately" },
        ];
      }
      return [
        { sender: "Scanner", receiver: "Target", packet: `TCP [SYN] DstPort=${targetPort}`, desc: "Socket attempt" },
        { sender: "Target", receiver: "Scanner", packet: `TCP [RST, ACK]`, desc: "Connection refused by target kernel" },
      ];
    }

    if (scanType === "udp") {
      if (portStateOutcome === "open" || portStateOutcome === "open_filtered") {
        return [
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `UDP Length=0 DstPort=${targetPort}`, desc: "Scanner sends generic or protocol-specific UDP payload" },
          { sender: "Target (192.168.1.100)", receiver: "Scanner (192.168.1.50)", packet: "*(No Response)*", desc: "Target service receives UDP silently. Scanner marks as open|filtered due to ambiguity" },
        ];
      }
      if (portStateOutcome === "closed") {
        return [
          { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `UDP Length=0 DstPort=${targetPort}`, desc: "Scanner sends UDP probe" },
          { sender: "Target (192.168.1.100)", receiver: "Scanner (192.168.1.50)", packet: "ICMP Type 3, Code 3 (Destination Port Unreachable)", desc: "Target kernel confirms host is alive but no process listens on UDP port" },
        ];
      }
      return [
        { sender: "Scanner", receiver: "Target", packet: `UDP DstPort=${targetPort}`, desc: "UDP Probe" },
        { sender: "Firewall", receiver: "Scanner", packet: "ICMP Type 3, Code 1, 2, 9, 10, or 13", desc: "Filtered by network access rule" },
      ];
    }

    if (scanType === "version") {
      return [
        { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: `TCP Handshake established on Port ${targetPort}`, desc: "Full TCP connection opened" },
        { sender: "Scanner (192.168.1.50)", receiver: "Target (192.168.1.100)", packet: "Null Probe / GET / HTTP/1.0\\r\\n\\r\\n", desc: "Scanner queries for initial protocol response" },
        { sender: "Target (192.168.1.100)", receiver: "Scanner (192.168.1.50)", packet: 'HTTP/1.1 200 OK Server: nginx/1.18.0 (Ubuntu)', desc: "Target server returns raw application banner" },
        { sender: "Scanner Engine", receiver: "Analysis Engine", packet: 'Pattern match against nmap-service-probes', desc: "Matches signature to Nginx 1.18.0 on Ubuntu Linux (Confidence: 95%)" },
      ];
    }

    // Ping / OS fallback
    return [
      { sender: "Scanner", receiver: "Target", packet: "ICMP Echo Request + TCP SYN (443) + TCP ACK (80)", desc: "Composite host discovery probe suite" },
      { sender: "Target", receiver: "Scanner", packet: "ICMP Echo Reply + TCP RST", desc: "Target responds, confirming host is alive on network" },
    ];
  }, [scanType, portStateOutcome, targetPort]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: MULTI-TIER NETWORK SEGMENTATION & VANTAGE POINT SIMULATOR    */
  /* -------------------------------------------------------------------------- */
  const [vantagePoint, setVantagePoint] = useState("external"); // 'external' | 'workstation' | 'dmz' | 'management'

  const networkAssets = [
    {
      id: "web",
      name: "Public Web Server",
      ip: "203.0.113.10",
      tier: "DMZ Public Tier",
      ports: [
        { port: 80, proto: "tcp", svc: "HTTP (Nginx)", external: "open", workstation: "open", dmz: "open", mgmt: "open" },
        { port: 443, proto: "tcp", svc: "HTTPS (Nginx)", external: "open", workstation: "open", dmz: "open", mgmt: "open" },
        { port: 22, proto: "tcp", svc: "SSH (Admin)", external: "filtered", workstation: "filtered", dmz: "filtered", mgmt: "open" },
      ],
    },
    {
      id: "app",
      name: "Internal App API",
      ip: "10.0.2.15",
      tier: "Internal App Tier",
      ports: [
        { port: 8080, proto: "tcp", svc: "REST API (Node.js)", external: "filtered", workstation: "open", dmz: "open", mgmt: "open" },
        { port: 22, proto: "tcp", svc: "SSH", external: "filtered", workstation: "filtered", dmz: "filtered", mgmt: "open" },
        { port: 9100, proto: "tcp", svc: "Prometheus Node Exporter", external: "filtered", workstation: "filtered", dmz: "open", mgmt: "open" },
      ],
    },
    {
      id: "db",
      name: "Core Customer Database",
      ip: "10.0.3.50",
      tier: "Secure Database Tier",
      ports: [
        { port: 3306, proto: "tcp", svc: "MySQL 8.0", external: "filtered", workstation: "filtered", dmz: "open", mgmt: "open" },
        { port: 5432, proto: "tcp", svc: "PostgreSQL 15", external: "filtered", workstation: "filtered", dmz: "open", mgmt: "open" },
        { port: 22, proto: "tcp", svc: "SSH", external: "filtered", workstation: "filtered", dmz: "filtered", mgmt: "open" },
      ],
    },
    {
      id: "mgmt",
      name: "Bastion Jump Host",
      ip: "10.0.1.5",
      tier: "Management Tier",
      ports: [
        { port: 22, proto: "tcp", svc: "OpenSSH 8.9 (MFA Required)", external: "filtered", workstation: "filtered", dmz: "filtered", mgmt: "open" },
        { port: 3389, proto: "tcp", svc: "RDP (Restricted)", external: "filtered", workstation: "filtered", dmz: "filtered", mgmt: "open" },
      ],
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: LAB 7A DISCOVERY REPORT WORKSHEET BUILDER                      */
  /* -------------------------------------------------------------------------- */
  const [worksheetTarget, setWorksheetTarget] = useState("192.168.56.101");
  const [worksheetTargetRole, setWorksheetTargetRole] = useState("Staging E-Commerce API Server");
  const [worksheetEntries, setWorksheetEntries] = useState([
    {
      id: 1,
      port: "22/tcp",
      state: "open",
      service: "OpenSSH 8.2p1 Ubuntu-4ubuntu0.5",
      purpose: "Administrative remote shell access",
      confidence: "High",
      recommendation: "Restrict to management subnet via security group; disable password auth.",
    },
    {
      id: 2,
      port: "80/tcp",
      state: "open",
      service: "Apache httpd 2.4.41",
      purpose: "HTTP web service redirect to HTTPS",
      confidence: "High",
      recommendation: "Verify automatic 301 Permanent Redirect to HTTPS port 443.",
    },
    {
      id: 3,
      port: "443/tcp",
      state: "open",
      service: "Apache httpd 2.4.41 (OpenSSL 1.1.1f)",
      purpose: "Primary encrypted TLS web application",
      confidence: "High",
      recommendation: "Maintain valid certificate and enforce HSTS header.",
    },
    {
      id: 4,
      port: "3306/tcp",
      state: "filtered",
      service: "mysql (Inferred from registered port)",
      purpose: "Internal database backend",
      confidence: "Medium",
      recommendation: "Appropriately blocked by host firewall; maintain iptables rule.",
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    port: "6379/tcp",
    state: "open",
    service: "Redis key-value store 6.0.9",
    purpose: "Session caching",
    confidence: "Medium",
    recommendation: "Bind to 127.0.0.1 only; require requirepass authentication.",
  });

  const addWorksheetEntry = () => {
    if (!newEntry.port || !newEntry.service) return;
    setWorksheetEntries((prev) => [
      ...prev,
      { ...newEntry, id: Date.now() },
    ]);
  };

  const removeWorksheetEntry = (id) => {
    setWorksheetEntries((prev) => prev.filter((item) => item.id !== id));
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: BANNER VS. VULNERABILITY VALIDATION SANDBOX                    */
  /* -------------------------------------------------------------------------- */
  const [selectedBannerCase, setSelectedBannerCase] = useState("apache");

  const bannerScenarios = {
    apache: {
      title: "Apache 2.4.41 on Ubuntu 20.04 LTS",
      bannerReported: "Server: Apache/2.4.41 (Ubuntu)",
      cveWarning: "CVE-2021-41773 & CVE-2021-42013 (Path Traversal in Apache 2.4.49-2.4.50)",
      vulnAssessment: "FALSE POSITIVE (Not Vulnerable)",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
      reasoning:
        "Automated scanners often flag Apache versions < 2.4.51 as vulnerable to path traversal. However, CVE-2021-41773 was introduced in Apache 2.4.49 due to code changes in request normalization. Version 2.4.41 predates the flaw and is immune. Furthermore, Ubuntu backports security patches without incrementing upstream minor version strings.",
      commandCheck: "dpkg -l | grep apache2\napt-cache policy apache2",
      correctRemediation: "Suppress false positive finding. Verify Ubuntu security patch level via apt changelog rather than raw banner string.",
    },
    openssh: {
      title: "OpenSSH 7.4p1 on CentOS 7",
      bannerReported: "SSH-2.0-OpenSSH_7.4p1",
      cveWarning: "CVE-2018-15473 (User Enumeration Timing & Malformed Auth Request)",
      vulnAssessment: "LOW RISK / CONFIGURATION MITIGATED",
      badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
      reasoning:
        "Banner indicates OpenSSH 7.4p1, which historically suffered from username enumeration. Red Hat/CentOS backported the fix in package `openssh-7.4p1-21.el7`. If public-key authentication is enforced and password logins are disabled (`PasswordAuthentication no`), brute-force impact is neutralized regardless.",
      commandCheck: "rpm -q --changelog openssh | grep CVE-2018-15473\nsshd -T | grep -E 'passwordauthentication|pubkeyauthentication'",
      correctRemediation: "Check RPM changelog for backport. Enforce SSH key-based authentication and rate limit connection attempts.",
    },
    redis: {
      title: "Redis 6.0 exposed on 0.0.0.0:6379",
      bannerReported: "-DENIED Redis is running in protected mode because protected mode is enabled...",
      cveWarning: "Unauthorized Remote Data Exfiltration & Memory Tampering",
      vulnAssessment: "HIGH OPERATIONAL EXPOSURE (Policy Violation)",
      badgeClass: "bg-red-100 text-red-800 border-red-300",
      reasoning:
        "While Redis 'protected mode' rejected unauthenticated client writes, the service port 6379 is listening on all network interfaces (`0.0.0.0`). Any internal or network adjacent attacker can observe the service, test for weak bind credentials, and attempt SSRF exploitation.",
      commandCheck: "netstat -tlpn | grep 6379\ncat /etc/redis/redis.conf | grep 'bind '",
      correctRemediation: "Modify `redis.conf` to bind strictly to loopback (`bind 127.0.0.1 ::1`), configure `requirepass`, and enforce firewall egress/ingress filtering.",
    },
    mysql: {
      title: "MySQL 8.0.32 filtered on TCP 3306",
      bannerReported: "3306/tcp filtered mysql",
      cveWarning: "Database Exposure Risk",
      vulnAssessment: "PROPER DEFENSIVE CONTROLS OBSERVED",
      badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
      reasoning:
        "Port 3306 does not return a service banner because the network firewall or iptables drops scanner packets. The database is correctly isolated from the untrusted network zone. Testing confirms defense-in-depth is operating as designed.",
      commandCheck: "iptables -L -n -v | grep 3306\nufw status verbose",
      correctRemediation: "Maintain existing firewall rule. Ensure database access is restricted only to trusted application servers via private IP peering.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA (From 7.16 Knowledge Assessment)                                  */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What does an open TCP port normally indicate?",
      options: [
        "The host is definitely vulnerable",
        "A service appears to accept connections on that port",
        "The host has no firewall",
        "The service is definitely safe",
      ],
      correct: 1,
      explanation:
        "An open TCP port simply indicates that a service process accepted the probe connection (e.g. returned a SYN-ACK). It does NOT mean the service is vulnerable or insecure.",
    },
    {
      id: 2,
      question: "Why can UDP scans produce open|filtered results?",
      options: [
        "UDP always encrypts responses",
        "UDP has no port numbers",
        "A lack of a decisive response can be ambiguous",
        "All UDP services are hidden",
      ],
      correct: 2,
      explanation:
        "UDP is connectionless. When an application service listens silently or a firewall drops the probe without returning an ICMP Port Unreachable packet, the scanner cannot distinguish between an open silent service and a packet-filtering firewall.",
    },
    {
      id: 3,
      question: "Which Nmap option performs service/version detection?",
      options: ["-sn", "-sV", "-oN", "-p"],
      correct: 1,
      explanation:
        "The -sV option instructs Nmap to probe open ports using its service-detection engine and database of signatures (nmap-service-probes) to identify software name and version.",
    },
    {
      id: 4,
      question: "What does -p 22,80,443 specify in an Nmap command?",
      options: [
        "Three target hosts",
        "A time limit",
        "Three ports to examine",
        "Three scan types",
      ],
      correct: 2,
      explanation:
        "The -p flag restricts the scan to specific designated ports—in this case, TCP/UDP ports 22, 80, and 443.",
    },
    {
      id: 5,
      question: "A scan reports a database port as filtered. What is the best conclusion?",
      options: [
        "The database is definitely offline",
        "The database is definitely vulnerable",
        "The port cannot be conclusively classified from the observed response",
        "The firewall must be removed",
      ],
      correct: 2,
      explanation:
        "Filtered means the probe did not receive a definitive response (neither a connection acceptance nor a reset), typically because a firewall or network rule dropped the traffic. It does not prove the database is down or offline.",
    },
    {
      id: 6,
      question: "Why should service banners be validated?",
      options: [
        "They are always false",
        "They may not accurately reflect the deployed software or patch state",
        "They replace authorization",
        "They prove exploitability",
      ],
      correct: 1,
      explanation:
        "Linux distributions (like Debian, Ubuntu, and Red Hat) backport security patches into older upstream version packages. In addition, banners can be intentionally spoofed or modified by administrators.",
    },
    {
      id: 7,
      question: "What should happen before scanning an organizational network?",
      options: [
        "Scan the entire public address range",
        "Disable security monitoring",
        "Confirm authorization, scope, and rules of engagement",
        "Attempt default passwords",
      ],
      correct: 2,
      explanation:
        "Scanning without explicit written permission, defined boundaries, and agreed Rules of Engagement (RoE) violates organizational policy and statutory criminal laws (e.g. Indian IT Act 2000, US CFAA).",
    },
    {
      id: 8,
      question: "Which is the strongest response to an unexpected exposed service?",
      options: [
        "Immediately exploit it",
        "Publish its IP address",
        "Validate its purpose and exposure, preserve evidence, and notify the owner",
        "Assume it is harmless",
      ],
      correct: 2,
      explanation:
        "Professional ethical hacking requires validating whether the exposure is legitimate, gathering reproducible evidence, preserving confidentiality, and notifying the asset owner for remediation.",
    },
  ];

  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedQuizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedQuizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* TOPICS NAVIGATION LIST                                                      */
  /* -------------------------------------------------------------------------- */
  const topics = [
    { id: 1, title: "7.1 Overview & Core Principles" },
    { id: 2, title: "7.2 Discovery & Enumeration Lifecycle" },
    { id: 3, title: "7.3 Hosts, Ports & Services (IANA)" },
    { id: 4, title: "7.4 TCP vs. UDP & Port States" },
    { id: 5, title: "7.5 Host Discovery Probes (-sn)" },
    { id: 6, title: "7.6 Port Scanning Techniques (-sS, -sT, -sU)" },
    { id: 7, title: "7.7 Port Ranges, Timing & Safe Planning" },
    { id: 8, title: "7.8 Service & Version Detection (-sV)" },
    { id: 9, title: "7.9 Protocol-Aware Enumeration" },
    { id: 10, title: "7.10 OS Fingerprinting & Segmentation" },
    { id: 11, title: "7.11 Firewalls, Filtering & Troubleshooting" },
    { id: 12, title: "7.12 Lab 7A: Discovery Report" },
    { id: 13, title: "7.13 Practical Lab Extension Analysis" },
    { id: 14, title: "7.14 Common Mistakes & Best Practices" },
    { id: 15, title: "7.15 Professional Findings Reporting" },
    { id: 16, title: "7.16 Official Resources (Nmap, NIST, IANA)" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-6 md:px-8 lg:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-12 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Module Navigation Component */}
        <div className="mb-6">
          <ModuleNav
            track="cybersecurity"
            currentModuleId="network-discovery"
            showAiTutor={showAiTutor}
            onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
            aiTutorLabel="Nova AI Tutor"
          />
        </div>

        {/* Module Header Banner */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 md:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 font-mono text-[11px] font-bold text-orange-700 uppercase tracking-wider">
                  Cybersecurity Master Course · Module 7
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-100 px-2.5 py-0.5 font-mono text-[11px] font-bold text-stone-600">
                  Intermediate Technical Module
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#18181b]">
                Network Discovery, Port Scanning & Service Enumeration
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Master host discovery, TCP three-way handshake probing, UDP states, banner grabbing, and service enumeration using Nmap in authorized laboratory environments. Informed by NIST SP 800-115, RFC 6335, and the official Nmap architecture guide.
              </p>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stone-100 text-xs">
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Scanning Methodologies</span>
              <span className="text-stone-900 font-bold font-mono text-sm">SYN, Connect, UDP, Ping</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Port States Evaluated</span>
              <span className="text-orange-700 font-bold font-mono text-sm">6 Standard Nmap States</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Standards & Guides</span>
              <span className="text-stone-900 font-bold font-mono text-sm">NIST SP 800-115 · RFC 6335</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Interactive Tools</span>
              <span className="text-emerald-700 font-bold font-mono text-sm">4 Live Simulators & Quiz</span>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {[
            { id: "theory", label: "Curriculum & Theory", icon: BookOpen },
            { id: "packet-flow", label: "Nmap Packet Visualizer", icon: Activity },
            { id: "segmentation", label: "Network Segmentation Sandbox", icon: Network },
            { id: "worksheet", label: "Lab 7A Discovery Worksheet", icon: FileSpreadsheet },
            { id: "banner-sandbox", label: "Banner vs. Vuln Validator", icon: ShieldCheck },
            { id: "quiz", label: "Knowledge Assessment", icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white/80 border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & THEORY                                         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Topics Index */}
            <div className="lg:col-span-4 sticky top-6 space-y-4">
              <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-5 backdrop-blur-xl shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                  <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                    <ListFilter size={16} className="text-orange-600" />
                    <span>Module 7 Topics</span>
                  </h3>
                  <span className="font-mono text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-bold">
                    {topics.length} Sections
                  </span>
                </div>

                <div className="space-y-1 max-h-[580px] overflow-y-auto pr-1">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(t.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                        (selectedTopic || 1) === t.id
                          ? "bg-orange-50 text-orange-800 border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{t.title}</span>
                      {(selectedTopic || 1) === t.id && (
                        <CheckCircle2 size={13} className="text-orange-600 shrink-0 ml-1.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Jump Callout */}
              <div className="rounded-3xl border border-orange-200 bg-orange-50/70 p-5">
                <div className="flex items-center gap-2 font-bold text-xs text-orange-900 mb-2">
                  <ShieldAlert size={16} className="text-orange-600" />
                  <span>Cardinal Testing Rule</span>
                </div>
                <p className="text-[11px] text-orange-800 leading-relaxed">
                  Discovering an open port does <strong>not</strong> establish that the service is vulnerable. Port scanning observes network transport behavior from a specific location and time under current firewall rules.
                </p>
              </div>
            </div>

            {/* Main Theory Reading Area */}
            <div className="lg:col-span-8 rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-8">
              {/* 7.1 Overview */}
              {(selectedTopic === 1 || !selectedTopic || selectedTopic === 0) && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.1</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Module Overview & Core Principles
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Scope, authorization, attack surface mapping, and evidence-based interpretation
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Network discovery, port scanning, and service enumeration are foundational technical competencies in cybersecurity. They provide security engineers, penetration testers, and system administrators with an evidence-based picture of a system&apos;s external and internal attack surface.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <h4 className="font-bold text-xs text-amber-950 flex items-center gap-2 mb-1.5">
                      <AlertCircle size={15} className="text-amber-600" />
                      <span>Core Learning Principle: Exposure vs. Vulnerability</span>
                    </h4>
                    <p className="text-xs text-amber-900 leading-relaxed">
                      Discovering a reachable service does <strong>not</strong> automatically mean the service is vulnerable or misconfigured. Legitimate network services must be reachable to serve their intended purpose. Findings must always be validated against the approved system architecture, organizational security policy, and relevant patch records before declaring a vulnerability.
                    </p>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 pt-2">Learning Objectives</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {[
                      "Explain host discovery, port scanning, and service enumeration concepts.",
                      "Interpret TCP and UDP port states without premature security judgments.",
                      "Describe scanning methods (SYN, Connect, UDP) and operational trade-offs.",
                      "Execute Nmap in authorized, isolated labs with strict rate controls.",
                      "Identify exposed services and assess architectural necessity.",
                      "Interpret service banners, versions, and DNS records with caution.",
                      "Recognize firewall filtering, network segmentation, and scanner limitations.",
                      "Produce professional, reproducible network discovery reports.",
                    ].map((obj, i) => (
                      <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <CheckCheck size={14} className="text-orange-600 mt-0.5 shrink-0" />
                        <span className="text-stone-700 leading-tight">{obj}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )}

              {/* 7.2 Lifecycle */}
              {selectedTopic === 2 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.2</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      The Network Discovery and Enumeration Lifecycle
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Structured 5-phase assessment lifecycle aligned with NIST SP 800-115
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Network discovery is a disciplined, structured process rather than firing random automated tools. Each phase feeds into the next, establishing rigorous evidence while respecting operational constraints.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        step: "1",
                        title: "Confirm Authorization and Scope",
                        detail: "Verify approved IP addresses, CIDR ranges, hostnames, permissible scan ports, designated testing time windows, and explicit asset exclusions (e.g. third-party SaaS or production payment gateways).",
                      },
                      {
                        step: "2",
                        title: "Discover Reachable Hosts",
                        detail: "Determine which approved IP addresses respond to permitted discovery probes (e.g., ICMP echo, ARP ping, TCP SYN to port 443) without conducting full port scans.",
                      },
                      {
                        step: "3",
                        title: "Scan Authorized Ports",
                        detail: "Examine designated TCP or UDP ports to establish whether they appear open, closed, or filtered from the scanner's perspective.",
                      },
                      {
                        step: "4",
                        title: "Enumerate Services and Configurations",
                        detail: "Identify listening service protocols, vendor products, version strings, TLS configurations, and HTTP headers using safe, protocol-aware queries.",
                      },
                      {
                        step: "5",
                        title: "Validate and Document Findings",
                        detail: "Correlate results across multiple evidence sources, assess whether exposure violates architectural requirements, record uncertainty, and document prioritized remediation.",
                      },
                    ].map((stage, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-orange-600 font-mono text-xs font-bold text-white">
                          {stage.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-stone-900">{stage.title}</h4>
                          <p className="text-xs text-stone-600 mt-1 leading-relaxed">{stage.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-100/60 text-xs text-stone-700">
                    <strong>Iterative feedback loop:</strong> Identifying an unexpected database port (e.g., TCP 3306) justifies a deeper configuration review of the database host, but it does <em>not</em> authorize probing outside the designated scope boundaries.
                  </div>
                </article>
              )}

              {/* 7.3 Hosts, Ports, Services */}
              {selectedTopic === 3 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.3</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Core Concepts: Hosts, Ports, and Transport Services
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      IANA port allocations (RFC 6335), IP virtualizations, and critical protocol considerations
                    </p>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900">7.3.1 What is a Host?</h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    A host is a network-connected device or endpoint possessing an IP address for communication. In modern environments, a discovered IP does not always map to a single physical server due to:
                  </p>
                  <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1">
                    <li><strong>Virtual Machines & Containers:</strong> Multiple virtual hosts sharing physical network interfaces.</li>
                    <li><strong>Network Address Translation (NAT):</strong> Many internal private IPs hidden behind a single public gateway.</li>
                    <li><strong>Layer 7 Load Balancers & Proxies:</strong> A single virtual IP routing requests to disparate backend clusters.</li>
                    <li><strong>Cloud Virtual Networks:</strong> Dynamic IP reassignment in AWS VPC, Azure VNet, or Google Cloud.</li>
                  </ul>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">7.3.2 IANA Port Allocation Ranges (RFC 6335)</h3>
                  <div className="overflow-x-auto rounded-xl border border-stone-200">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-stone-100 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-2.5 border-b border-stone-200">Port Range</th>
                          <th className="p-2.5 border-b border-stone-200">Category Name</th>
                          <th className="p-2.5 border-b border-stone-200">Typical Usage</th>
                          <th className="p-2.5 border-b border-stone-200">Privilege Level</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr>
                          <td className="p-2.5 font-mono text-orange-700 font-bold">0 – 1023</td>
                          <td className="p-2.5 font-semibold">System Ports (Well-Known)</td>
                          <td className="p-2.5 text-stone-600">Core internet infrastructure (SSH, HTTP, DNS, SMTP)</td>
                          <td className="p-2.5 text-stone-600">Historically required root/administrator to bind</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-mono text-orange-700 font-bold">1024 – 49151</td>
                          <td className="p-2.5 font-semibold">Registered / User Ports</td>
                          <td className="p-2.5 text-stone-600">Vendor application services (MySQL, Postgres, RDP, Redis)</td>
                          <td className="p-2.5 text-stone-600">Unprivileged user processes can bind</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-mono text-orange-700 font-bold">49152 – 65535</td>
                          <td className="p-2.5 font-semibold">Dynamic / Private / Ephemeral</td>
                          <td className="p-2.5 text-stone-600">Temporary source ports chosen dynamically by outbound client OS</td>
                          <td className="p-2.5 text-stone-600">Allocated ephemerally by TCP/IP kernel stack</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">7.3.3 Common Services & Security Considerations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {[
                      { port: "TCP 22 (SSH)", note: "Secure administrative access. Review key management, disable root login, check MFA." },
                      { port: "TCP 25 (SMTP)", note: "Mail transfer agent. Verify open relay restrictions and SPF/DKIM/DMARC configurations." },
                      { port: "TCP/UDP 53 (DNS)", note: "Name resolution. Inspect query exposure, recursion restrictions, and zone transfers." },
                      { port: "TCP 80 (HTTP)", note: "Cleartext transport. Verify mandatory redirection to HTTPS port 443." },
                      { port: "TCP 443 (HTTPS)", note: "Encrypted web transport. Audit TLS cipher suites, certificates, and HSTS." },
                      { port: "TCP 445 (SMB)", note: "Windows file sharing. High risk of lateral movement and legacy vulnerabilities (e.g. MS17-010)." },
                      { port: "TCP 3306 (MySQL)", note: "Database backend. Must be restricted to application tier; never exposed to public internet." },
                      { port: "TCP 3389 (RDP)", note: "Windows remote desktop. Audit NLA requirement, brute-force protections, and VPN encapsulation." },
                    ].map((svc, i) => (
                      <div key={i} className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="font-mono font-bold text-orange-700 block mb-1">{svc.port}</span>
                        <span className="text-stone-600 leading-relaxed text-[11px]">{svc.note}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )}

              {/* 7.4 TCP and UDP States */}
              {selectedTopic === 4 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.4</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      TCP and UDP: What Scanners Actually Observe
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Handshake mechanics, connectionless UDP ambiguity, and the 6 official Nmap port states
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Port scanners do not possess magic omniscience; they simply transmit specific probe packets and record the response (or lack thereof) from the target kernel, network firewalls, or intermediate routers.
                  </p>

                  <h3 className="text-sm font-bold text-stone-900">7.4.1 TCP Connection Establishment (Three-Way Handshake)</h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                    <div className="text-emerald-400 font-bold">// Standard TCP Three-Way Handshake:</div>
                    <div>1. Client  --[ SYN (Seq=x) ]------------&gt; Server  (Connection requested)</div>
                    <div>2. Server  &lt;-[ SYN, ACK (Seq=y, Ack=x+1) ]-- Client  (Connection acknowledged &amp; accepted)</div>
                    <div>3. Client  --[ ACK (Seq=x+1, Ack=y+1) ]----&gt; Server  (Handshake complete: state ESTABLISHED)</div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">7.4.2 Interpreting the 6 Official Port States</h3>
                  <div className="space-y-2 text-xs">
                    {[
                      {
                        state: "open",
                        badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
                        meaning: "An application service is actively accepting connections on this port (e.g., returned SYN-ACK for TCP).",
                        limitation: "Does NOT prove the service is vulnerable, outdated, or misconfigured.",
                      },
                      {
                        state: "closed",
                        badge: "bg-stone-200 text-stone-800 border-stone-300",
                        meaning: "The host is reachable, but the operating system kernel explicitly rejected the probe (e.g., returned RST for TCP).",
                        limitation: "State may change if an administrator starts a service or enables a listener.",
                      },
                      {
                        state: "filtered",
                        badge: "bg-amber-100 text-amber-800 border-amber-300",
                        meaning: "A firewall, router filter, or host rule blocked the probe so Nmap could not determine whether the port is open.",
                        limitation: "Does NOT prove the port is closed. A service might be running behind the filter.",
                      },
                      {
                        state: "unfiltered",
                        badge: "bg-blue-100 text-blue-800 border-blue-300",
                        meaning: "Probes reached the port, but Nmap could not determine if it is open or closed (commonly seen in TCP ACK scans -sA).",
                        limitation: "Used primarily to map firewall rulesets and determine whether filters are stateful.",
                      },
                      {
                        state: "open|filtered",
                        badge: "bg-purple-100 text-purple-800 border-purple-300",
                        meaning: "Nmap cannot determine whether a port is open or filtered. Common in UDP scans when open services remain silent.",
                        limitation: "Requires protocol-aware probes (-sV or application payloads) to resolve ambiguity.",
                      },
                      {
                        state: "closed|filtered",
                        badge: "bg-stone-100 text-stone-700 border-stone-300",
                        meaning: "Scanner cannot determine whether a port is closed or filtered (used in IP ID idle scans).",
                        limitation: "Rare state indicating inability to observe decisive packet responses.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded font-mono font-bold uppercase text-[11px] border ${item.badge}`}>
                            {item.state}
                          </span>
                          <span className="text-stone-800 font-medium">{item.meaning}</span>
                        </div>
                        <span className="text-[11px] text-stone-500 italic shrink-0">
                          <strong>Note:</strong> {item.limitation}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              )}

              {/* 7.5 Host Discovery Techniques */}
              {selectedTopic === 5 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.5</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Host Discovery Techniques (-sn)
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Subnet mapping, ARP resolution, ICMP echo filtering, and passive observation
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Host discovery identifies which IP addresses are active and reachable within an authorized scope range before expending resources scanning thousands of individual ports.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">ARP Discovery (-PR)</strong>
                      <p className="text-stone-600 leading-relaxed text-[11px]">
                        Used exclusively on local Ethernet (Layer 2) networks. Since devices must resolve MAC addresses to communicate, host firewalls cannot block ARP requests. Highly reliable on local subnets.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">ICMP Echo Ping (-PE)</strong>
                      <p className="text-stone-600 leading-relaxed text-[11px]">
                        Sends standard ICMP Type 8 Echo Request. Many modern operating systems and edge firewalls silently discard ICMP echo packets, causing false negatives.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">TCP SYN / ACK Ping (-PS, -PA)</strong>
                      <p className="text-stone-600 leading-relaxed text-[11px]">
                        Sends TCP SYN or ACK probes to common ports (e.g. 80, 443). If the host responds with SYN-ACK or RST, the host is proven alive even if ICMP is blocked.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">UDP Ping (-PU)</strong>
                      <p className="text-stone-600 leading-relaxed text-[11px]">
                        Sends UDP packets to high, unlikely ports. If the target returns an ICMP Port Unreachable packet, it proves the host is online and processing packets.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                      <span className="text-stone-400"># Host discovery against authorized lab target</span>
                      <button
                        onClick={() => copyCode("nmap -sn 127.0.0.1", "host-disc")}
                        className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px]"
                      >
                        {copiedCodeId === "host-disc" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                        <span>Copy</span>
                      </button>
                    </div>
                    <div className="text-emerald-400">$ nmap -sn 127.0.0.1</div>
                    <div className="text-stone-300 mt-1">Starting Nmap 7.94 ( https://nmap.org )</div>
                    <div className="text-stone-300">Nmap scan report for localhost (127.0.0.1)</div>
                    <div className="text-stone-300">Host is up (0.000040s latency).</div>
                    <div className="text-stone-300">Nmap done: 1 IP address (1 host up) scanned in 0.03 seconds</div>
                  </div>
                </article>
              )}

              {/* 7.6 Port Scanning Methods */}
              {selectedTopic === 6 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.6</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Port Scanning Methods (-sS, -sT, -sU)
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Raw packet crafting vs. Berkeley sockets, root requirements, and the myth of invisibility
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                      <div>
                        <span className="font-mono font-bold text-orange-700 block text-sm">SYN Scan (-sS)</span>
                        <span className="text-[10px] uppercase font-bold text-stone-500 block mb-2">Default (Raw Sockets)</span>
                        <p className="text-stone-600 leading-relaxed text-[11px]">
                          Sends raw SYN packets and interprets responses without finishing the 3-way handshake. When a SYN-ACK is observed, Nmap sends a RST packet to immediately terminate the half-open connection.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-200 text-[10px] text-stone-500">
                        Requires root / Administrator privileges.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                      <div>
                        <span className="font-mono font-bold text-blue-700 block text-sm">Connect Scan (-sT)</span>
                        <span className="text-[10px] uppercase font-bold text-stone-500 block mb-2">Unprivileged Sockets</span>
                        <p className="text-stone-600 leading-relaxed text-[11px]">
                          Uses standard OS Berkeley socket <code>connect()</code> system call. Completes the full 3-way handshake (SYN, SYN-ACK, ACK) before closing. Heavily logged in target application event logs.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-200 text-[10px] text-stone-500">
                        Works without root privileges.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                      <div>
                        <span className="font-mono font-bold text-purple-700 block text-sm">UDP Scan (-sU)</span>
                        <span className="text-[10px] uppercase font-bold text-stone-500 block mb-2">Connectionless</span>
                        <p className="text-stone-600 leading-relaxed text-[11px]">
                          Sends UDP packets. If ICMP Port Unreachable (Type 3 Code 3) is returned, port is closed. If no response, port is open|filtered. Highly susceptible to OS ICMP rate limiting.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-200 text-[10px] text-stone-500">
                        Significantly slower than TCP scans.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs">
                    <h4 className="font-bold text-red-950 flex items-center gap-1.5 mb-1">
                      <Flame size={14} className="text-red-600" />
                      <span>Mythbusting: No Scan is &ldquo;Invisible&rdquo;</span>
                    </h4>
                    <p className="text-red-900 leading-relaxed text-[11px]">
                      Historical security literature often referred to SYN scanning as &ldquo;stealth scanning.&rdquo; In modern networks, <strong>no port scan is invisible</strong>. Network Intrusion Detection Systems (Suricata, Snort, Zeek), stateful next-gen firewalls (Palo Alto, Fortinet), NetFlow/IPFIX flow collectors, and endpoint EDR agents readily detect half-open SYN sweeps, rate bursts, and anomalous connection attempts.
                    </p>
                  </div>
                </article>
              )}

              {/* 7.7 Scan Intensity and Safe Planning */}
              {selectedTopic === 7 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.7</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Port Range Selection, Timing & Safe Planning
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Scoping port sets, Nmap timing templates (-T0 to -T5), and NIST SP 800-115 pre-flight checks
                    </p>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900">7.7.1 Specifying Target Ports</h3>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <span className="font-mono text-stone-900">nmap -p 80,443 &lt;TARGET&gt;</span>
                      <span className="text-stone-500 text-[11px]">Tests only the two explicitly listed ports</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <span className="font-mono text-stone-900">nmap -p 1-1000 &lt;TARGET&gt;</span>
                      <span className="text-stone-500 text-[11px]">Examines reserved well-known and system ports</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <span className="font-mono text-stone-900">nmap --top-ports 20 &lt;TARGET&gt;</span>
                      <span className="text-stone-500 text-[11px]">Queries 20 most frequently open ports based on Nmap statistics</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                      <span className="font-mono text-stone-900">nmap -p- &lt;TARGET&gt;</span>
                      <span className="text-stone-500 text-[11px]">Scans all 65,535 TCP ports (Resource-intensive; requires authorization)</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">7.7.2 Timing Templates (-T0 to -T5)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                    {[
                      { flag: "-T0 (Paranoid)", desc: "5-minute probe delay. Used historically for IDS evasion; impractical in modern testing." },
                      { flag: "-T1 (Sneaky)", desc: "15-second probe delay. Used for fragile industrial control systems (SCADA/ICS)." },
                      { flag: "-T2 (Polite)", desc: "Slows scan to consume less network bandwidth and avoid crashing embedded devices." },
                      { flag: "-T3 (Normal)", desc: "Default timing. Dynamic round-trip timeout estimation based on responsiveness." },
                      { flag: "-T4 (Aggressive)", desc: "Speeds up scan by capping probe timeouts at 1.25s. Standard for lab & enterprise LAN." },
                      { flag: "-T5 (Insane)", desc: "Caps timeouts at 300ms. Prone to packet drops and false negatives on congested networks." },
                    ].map((t, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="font-mono text-orange-700 block text-[11px] mb-0.5">{t.flag}</strong>
                        <span className="text-[11px] text-stone-600 leading-tight">{t.desc}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">7.7.3 Pre-Flight Safety Checklist (NIST SP 800-115)</h3>
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5 text-amber-950">
                    <div>1. Written authorization and signed Rules of Engagement (RoE) confirmed.</div>
                    <div>2. Explicit confirmation of IP addresses, domain names, and exclusions.</div>
                    <div>3. Designated technical point-of-contact (POC) reachable during scan window.</div>
                    <div>4. Agreed stop conditions defined (e.g. unexpected service degradation or latency &gt; 500ms).</div>
                  </div>
                </article>
              )}

              {/* 7.8 Service & Version Detection */}
              {selectedTopic === 8 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.8</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Service and Version Enumeration (-sV)
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Application protocol matching, backported distribution patches, and evidence storage
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Once ports are established as open, service detection (-sV) queries the listening daemon using probe strings from the <code>nmap-service-probes</code> database to determine the specific software product, version, and operating system build.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs">
                    <div className="text-emerald-400">$ nmap -sV -p 80,443 -oN service-results.txt 127.0.0.1</div>
                    <div className="text-stone-400 mt-2">PORT    STATE SERVICE  VERSION</div>
                    <div className="text-stone-200">80/tcp  open  http     Apache httpd 2.4.41 ((Ubuntu))</div>
                    <div className="text-stone-200">443/tcp open  ssl/http Apache httpd 2.4.41 ((Ubuntu))</div>
                    <div className="text-stone-400 mt-2">Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel</div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">The Danger of Naive Banner Matching</h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Automated vulnerability scanners frequently produce false positives by looking strictly at banner strings. Professional assessors distinguish:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-1">1. Observation</strong>
                      <p className="text-stone-600 text-[11px]">TCP 443 returns an Apache/2.4.41 banner via HTTPS.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-1">2. Hypothesis</strong>
                      <p className="text-stone-600 text-[11px]">Upstream Apache 2.4.41 has known public CVEs.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-1">3. Validation</strong>
                      <p className="text-stone-600 text-[11px]">Ubuntu package maintains backported security fixes without incrementing version string.</p>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">Saving Evidence Formats</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-orange-700 block">-oN</strong>
                      <span className="text-[10px] text-stone-500 font-sans">Human-readable normal text</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-orange-700 block">-oX</strong>
                      <span className="text-[10px] text-stone-500 font-sans">XML format for automated parsers</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-orange-700 block">-oG</strong>
                      <span className="text-[10px] text-stone-500 font-sans">Grepable format for bash pipelines</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-orange-700 block">-oA</strong>
                      <span className="text-[10px] text-stone-500 font-sans">Saves all three formats simultaneously</span>
                    </div>
                  </div>
                </article>
              )}

              {/* 7.9 Protocol-Aware Enumeration */}
              {selectedTopic === 9 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.9</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Protocol-Aware Enumeration Techniques
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Safe probing of HTTP headers, SSH key algorithms, DNS resolvers, and database exposure
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Port numbers and banners provide initial clues, but protocol-aware queries yield decisive evidence regarding configuration security.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center justify-between font-mono font-bold text-stone-900 mb-1">
                        <span>Web Services (HTTP &amp; HTTPS)</span>
                        <span className="text-orange-700">curl -I http://127.0.0.1</span>
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        Examine whether HTTP redirects cleanly to HTTPS (301 Moved Permanently), whether security headers (HSTS, CSP, X-Frame-Options) are enforced, and whether server banners leak exact underlying kernel or library versions.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center justify-between font-mono font-bold text-stone-900 mb-1">
                        <span>Secure Shell (SSH)</span>
                        <span className="text-orange-700">ssh-keyscan -p 22 127.0.0.1</span>
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        Audit supported key exchange algorithms and cipher suites. Verify that obsolete algorithms (diffie-hellman-group1-sha1, 3des-cbc) are disabled, root password logins are denied, and public key authentication is enforced.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center justify-between font-mono font-bold text-stone-900 mb-1">
                        <span>Domain Name System (DNS)</span>
                        <span className="text-orange-700">dig @127.0.0.1 example.com</span>
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        Differentiate between recursive resolvers (which resolve third-party domains for internal clients) and authoritative nameservers. Verify whether open recursive resolution is disabled to prevent DNS amplification DDoS attacks.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center justify-between font-mono font-bold text-stone-900 mb-1">
                        <span>Databases &amp; Management Ports (MySQL, Postgres, Redis, RDP)</span>
                        <span className="text-orange-700">nmap -sV -p 3306,5432,6379,3389</span>
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        The primary assessment question is <em>architectural necessity</em>: why is a database or RDP port reachable from the current network segment? Do not attempt authentication brute forcing during initial discovery.
                      </p>
                    </div>
                  </div>
                </article>
              )}

              {/* 7.10 OS Fingerprinting & Segmentation */}
              {selectedTopic === 10 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.10</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Operating-System Fingerprinting & Network Segmentation
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      TCP/IP stack idiosyncrasies (-O) and multi-tier enterprise network boundaries
                    </p>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900">7.10.1 How OS Fingerprinting Works (-O)</h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Different operating system kernels implement RFC standards with slight subtle variations. Nmap sends a battery of specialized TCP and UDP packets (e.g. packets with undefined flag combinations, varying window sizes, and specific TCP options) and compares the target's replies against its database of thousands of known OS signatures:
                  </p>
                  <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1">
                    <li><strong>Initial TTL (Time to Live):</strong> Linux kernels typically default to 64; Windows kernels default to 128; Cisco IOS defaults to 255.</li>
                    <li><strong>TCP Window Size:</strong> Distinctive static or dynamic window scaling algorithms.</li>
                    <li><strong>DF (Don&apos;t Fragment) Bit:</strong> Whether the kernel sets DF on ICMP or error packets.</li>
                    <li><strong>TCP Options Ordering:</strong> The exact sequence of MSS, Window Scale, SACK Permitted, and Timestamps.</li>
                  </ul>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">7.10.2 Internal vs. External Network Viewpoints</h3>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <p className="text-stone-700 leading-relaxed">
                      Network exposure is not an absolute property of a server; it depends entirely on <strong>where the scanner sits</strong> relative to boundary firewalls:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block font-mono">External Internet</strong>
                        <span className="text-[11px] text-stone-600">Sees only ports 80/443 passing through cloud edge firewalls.</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block font-mono">Internal User LAN</strong>
                        <span className="text-[11px] text-stone-600">May observe internal APIs (8080) and file sharing (SMB 445).</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block font-mono">Management VPN</strong>
                        <span className="text-[11px] text-stone-600">Permits direct access to SSH (22), RDP (3389), and monitoring ports.</span>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* 7.11 Firewalls, Filtering & Troubleshooting */}
              {selectedTopic === 11 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.11</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Firewalls, Filtering, and Scan Troubleshooting
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Silent packet drops, ICMP administratively prohibited, and disciplined diagnosis
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    When scan results are unexpected or all ports return <code>filtered</code>, a disciplined engineer investigates network and host configurations rather than attempting to bypass defenses or crash systems.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">Stateful Packet Inspection (SPI)</strong>
                      <p className="text-stone-600 leading-relaxed text-[11px]">
                        Stateful firewalls maintain a connection tracking table. Probes with unexpected flags (e.g. TCP ACK or FIN out of order) are silently dropped or rejected, preventing naive mapping.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">Rate Limiting &amp; Threshold Defenses</strong>
                      <p className="text-stone-600 leading-relaxed text-[11px]">
                        Linux kernels limit ICMP Destination Unreachable replies to 1 per second by default. Scanning 1,000 UDP ports on such a target will take over 15 minutes unless rate limits are respected.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 text-xs space-y-2">
                    <strong className="text-stone-900 block font-bold">Disciplined Troubleshooting Workflow:</strong>
                    <ol className="list-decimal pl-4 space-y-1 text-stone-700 text-[11px]">
                      <li>Verify the lab VM is booted and has obtained a valid IP address via DHCP/static configuration.</li>
                      <li>Check routing reachability using <code>ping</code> or <code>traceroute</code> from the testing machine.</li>
                      <li>Log directly into the target console and inspect listening services with <code>ss -tulwn</code> or <code>netstat -tlpn</code>.</li>
                      <li>Review local host firewall rules using <code>sudo iptables -L -n -v</code> or <code>sudo ufw status</code>.</li>
                      <li>Document observations clearly, distinguishing confirmed reachability from firewall filtering.</li>
                    </ol>
                  </div>
                </article>
              )}

              {/* 7.12 Practical Lab 7A */}
              {selectedTopic === 12 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.12</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Practical Lab 7A: Authorized Host &amp; Service Discovery
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Step-by-step laboratory workflow for staging environment exposure assessment
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs">
                    <h4 className="font-bold text-orange-950 mb-1">Scenario Briefing:</h4>
                    <p className="text-orange-900 leading-relaxed text-[11px]">
                      You are tasked with conducting an exposure audit of a staging API server in an isolated virtual lab. Scope is strictly limited to <code>127.0.0.1</code> (or designated lab virtual machine IP). Third-party subnets and cloud production servers are strictly out of scope.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    {[
                      { step: "Step 1", title: "Record Scope & Authorization", code: "# Document target IP, assessment window, and exclusions in testing journal" },
                      { step: "Step 2", title: "Establish Baseline Reachability", code: "nmap -sn 127.0.0.1" },
                      { step: "Step 3", title: "Perform Initial Port Scan", code: "nmap -sT -p 22,80,443 127.0.0.1" },
                      { step: "Step 4", title: "Enumerate Listening Services", code: "nmap -sV -p 22,80,443 127.0.0.1" },
                      { step: "Step 5", title: "Archive Verifiable Evidence", code: "nmap -sV -p 22,80,443 -oN lab-results.txt 127.0.0.1" },
                      { step: "Step 6", title: "Complete Discovery Worksheet", code: "# Record Port, State, Service, Intended Role, Evidence, and Recommendation" },
                      { step: "Step 7", title: "Draft Technical Conclusion", code: "# Articulate exposure findings and security boundaries without speculative claims" },
                    ].map((s, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <strong className="text-orange-700 font-mono text-[11px] block">{s.step}: {s.title}</strong>
                        </div>
                        <code className="px-2.5 py-1 rounded bg-stone-900 text-emerald-400 font-mono text-[11px] shrink-0">
                          {s.code}
                        </code>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-stone-600 italic">
                    Use the <strong>&ldquo;Lab 7A Discovery Worksheet&rdquo;</strong> tab above to interactively generate your complete formal audit report!
                  </p>
                </article>
              )}

              {/* 7.13 Practical Lab Extension Analysis */}
              {selectedTopic === 13 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.13</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Practical Lab Extension: Review a Simulated Scan
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Analyzing simulated scan output and articulating architectural security questions
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Examine the following simulated scan output gathered from an authorized staging host:
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs">
                    <div className="text-stone-400">PORT     STATE    SERVICE</div>
                    <div className="text-stone-200">22/tcp   open     ssh</div>
                    <div className="text-stone-200">80/tcp   open     http</div>
                    <div className="text-stone-200">443/tcp  open     https</div>
                    <div className="text-amber-400">3306/tcp filtered mysql</div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">Structured Assessment Inquiries:</h3>
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-0.5">1. Administrative Exposure (TCP 22 SSH):</strong>
                      <p className="text-stone-600 text-[11px]">
                        Is SSH intended to be accessible from this network zone? If the scanner is sitting on an external network, SSH should be filtered by firewall and restricted to an internal management bastion or VPN.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-0.5">2. Web Transport Redirection (TCP 80 &amp; 443):</strong>
                      <p className="text-stone-600 text-[11px]">
                        Does the web service on port 80 unconditionally redirect to HTTPS port 443? Does port 443 present a valid TLS certificate matching the official fully qualified domain name (FQDN)?
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-0.5">3. Filtered Database (TCP 3306 MySQL):</strong>
                      <p className="text-stone-600 text-[11px]">
                        Why is port 3306 reported as <code>filtered</code> rather than <code>closed</code>? This demonstrates that a firewall rule is dropping traffic destined for MySQL. The assessor should verify that database connections are permitted strictly from authorized application tier hosts.
                      </p>
                    </div>
                  </div>
                </article>
              )}

              {/* 7.14 Common Mistakes and Professional Best Practices */}
              {selectedTopic === 14 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.14</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Common Mistakes and Professional Best Practices
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Avoiding analytical fallacies, defensive principles, and evidence preservation
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-stone-200">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-stone-100 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-2.5 border-b border-stone-200">Frequent Mistake</th>
                          <th className="p-2.5 border-b border-stone-200">Why It Harms Assessment Quality</th>
                          <th className="p-2.5 border-b border-stone-200">Professional Best Practice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-[11px]">
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Treating every open port as a vulnerability</td>
                          <td className="p-2.5 text-stone-600">Legitimate servers must expose ports to function</td>
                          <td className="p-2.5 text-emerald-800">Compare exposed ports against approved system roles</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Assuming closed or filtered ports are secure</td>
                          <td className="p-2.5 text-stone-600">Port status only reflects current test conditions</td>
                          <td className="p-2.5 text-emerald-800">Review host configuration and firewall rules directly</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Trusting service banners blindly</td>
                          <td className="p-2.5 text-stone-600">Distros backport patches without changing version</td>
                          <td className="p-2.5 text-emerald-800">Correlate with package changelogs and build numbers</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Scanning all 65,535 ports without planning</td>
                          <td className="p-2.5 text-stone-600">Floods networks and triggers firewall alarms</td>
                          <td className="p-2.5 text-emerald-800">Start with scoped common ports and expand when justified</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Scanning without written authorization</td>
                          <td className="p-2.5 text-stone-600">Violates statutory cyber law and organizational policy</td>
                          <td className="p-2.5 text-emerald-800">Confirm written scope and signed RoE before sending probes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">Core Operating Principles</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-[11px]">Least Privilege</strong>
                      <span className="text-stone-600 text-[11px]">Allow access to network ports only from approved IP ranges and authorized endpoints.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-[11px]">Attack-Surface Reduction</strong>
                      <span className="text-stone-600 text-[11px]">Disable unused system daemons and close unneeded listening ports across all network interfaces.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-[11px]">Defense in Depth</strong>
                      <span className="text-stone-600 text-[11px]">Combine host firewalls, VPC security groups, network segmentation, authentication, and logging.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-[11px]">Evidence-Based Reporting</strong>
                      <span className="text-stone-600 text-[11px]">Distinguish confirmed packet captures and command outputs from speculative security hypotheses.</span>
                    </div>
                  </div>
                </article>
              )}

              {/* 7.15 Reporting Network Discovery Findings */}
              {selectedTopic === 15 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.15</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Reporting Network Discovery Findings &amp; Deliverables
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Executive summaries, technical risk matrices, and remediation roadmaps
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    A professional technical report communicates clearly to both executive stakeholders and engineering teams. It documents evidence, explains business impact, and delivers actionable, prioritized remediation.
                  </p>

                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                      <span className="font-bold text-sm text-stone-900">Illustrative Finding: Potentially Unnecessary Database Exposure</span>
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                        Requires Validation
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                      <div>
                        <strong className="text-stone-900 block mb-0.5">Observation:</strong>
                        <p className="text-stone-600 leading-relaxed">
                          TCP port 3306 (MySQL) appears reachable from the authorized staging assessment subnet during scan execution.
                        </p>
                      </div>
                      <div>
                        <strong className="text-stone-900 block mb-0.5">Risk &amp; Impact:</strong>
                        <p className="text-stone-600 leading-relaxed">
                          If database access is not strictly required from this network zone, broad exposure increases the attack surface for credential attacks.
                        </p>
                      </div>
                      <div>
                        <strong className="text-stone-900 block mb-0.5">Required Evidence:</strong>
                        <p className="text-stone-600 leading-relaxed">
                          Nmap scan log (-oN), timestamp, scanner source IP, approved network architecture diagram, and firewall policy.
                        </p>
                      </div>
                      <div>
                        <strong className="text-stone-900 block mb-0.5">Remediation Recommendation:</strong>
                        <p className="text-stone-600 leading-relaxed">
                          Restrict database access strictly to application backend servers via security groups, verify password authentication, and re-test.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* 7.16 Official Authoritative Resources */}
              {selectedTopic === 16 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 7.16</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Official and Authoritative Learning Resources
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Primary standards, technical references, and regulatory publications
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">Nmap Network Scanning (Official Reference)</h4>
                        <p className="text-stone-600 text-[11px] mt-1 leading-relaxed">
                          Written by Fyodor (Gordon Lyon), the creator of Nmap. Authoritative reference covering port states, TCP/IP stack fingerprinting, timing optimization, and output parsing.
                        </p>
                      </div>
                      <a
                        href="https://nmap.org/book/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shrink-0 transition-colors"
                      >
                        <span>Official Guide</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">NIST SP 800-115: Technical Guide to Information Security Testing</h4>
                        <p className="text-stone-600 text-[11px] mt-1 leading-relaxed">
                          National Institute of Standards and Technology official methodology for planning discovery tests, analyzing network evidence, and mitigating technical risks safely.
                        </p>
                      </div>
                      <a
                        href="https://csrc.nist.gov/pubs/sp/800/115/final"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shrink-0 transition-colors"
                      >
                        <span>NIST SP 800-115</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">IANA Service Name and Transport Protocol Port Number Registry</h4>
                        <p className="text-stone-600 text-[11px] mt-1 leading-relaxed">
                          The global authoritative registry maintained by IANA defining standard assigned port numbers and service designations for IPv4 and IPv6.
                        </p>
                      </div>
                      <a
                        href="https://www.iana.org/assignments/service-names-port-numbers/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shrink-0 transition-colors"
                      >
                        <span>IANA Registry</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">IETF RFC 6335: Procedures for the Internet Assigned Numbers Authority</h4>
                        <p className="text-stone-600 text-[11px] mt-1 leading-relaxed">
                          Internet Engineering Task Force standard defining system (well-known), user (registered), and dynamic (private) port number categories and allocation policies.
                        </p>
                      </div>
                      <a
                        href="https://datatracker.ietf.org/doc/html/rfc6335"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shrink-0 transition-colors"
                      >
                        <span>RFC 6335</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </article>
              )}

              {/* Bottom Topic Pagination */}
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  disabled={(selectedTopic || 1) <= 1}
                  onClick={() => setSelectedTopic((prev) => Math.max(1, (prev || 1) - 1))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition-all"
                >
                  <ArrowLeft size={14} />
                  <span>Previous Section</span>
                </button>

                <span className="font-mono text-xs text-stone-500 font-bold">
                  {(selectedTopic || 1)} of {topics.length}
                </span>

                <button
                  disabled={(selectedTopic || 1) >= topics.length}
                  onClick={() => setSelectedTopic((prev) => Math.min(topics.length, (prev || 1) + 1))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-xs font-bold text-white hover:bg-orange-700 disabled:opacity-40 transition-all shadow-sm"
                >
                  <span>Next Section</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: SIMULATOR 1 - NMAP PACKET FLOW & COMMAND VISUALIZER         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "packet-flow" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity size={18} className="text-orange-600" />
                <h2 className="text-xl font-extrabold text-stone-900">
                  Interactive Nmap Command &amp; Packet Flow Visualizer
                </h2>
              </div>
              <p className="text-xs text-stone-600">
                Inspect how Nmap probes transport layers in real-time. Toggle scan methods, target ports, and firewall response states to observe the exact packet exchanges and resulting port classifications.
              </p>
            </div>

            {/* Controls Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">1. Scanning Method:</label>
                <select
                  value={scanType}
                  onChange={(e) => setScanType(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs font-medium text-stone-900"
                >
                  <option value="syn">TCP SYN Stealth Scan (-sS)</option>
                  <option value="connect">TCP Connect Scan (-sT)</option>
                  <option value="udp">UDP Port Scan (-sU)</option>
                  <option value="ping">Host Discovery Ping (-sn)</option>
                  <option value="version">Service Version Detection (-sV)</option>
                  <option value="os">OS Fingerprinting (-O)</option>
                </select>
                <span className="text-[10px] text-stone-500 mt-1 block">
                  {scanModes[scanType].needsRoot ? "Requires root / sudo privileges" : "Runs with standard unprivileged user"}
                </span>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">2. Target Port Number:</label>
                <div className="flex gap-2">
                  {[22, 80, 443, 3306, 53].map((p) => (
                    <button
                      key={p}
                      onClick={() => setTargetPort(p)}
                      className={`px-2.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                        targetPort === p
                          ? "bg-orange-600 text-white"
                          : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-stone-500 mt-1 block font-mono">
                  Currently targeting Port: {targetPort}
                </span>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">3. Target / Firewall Response:</label>
                <select
                  value={portStateOutcome}
                  onChange={(e) => setPortStateOutcome(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs font-medium text-stone-900"
                >
                  <option value="open">Service Listening (Returns SYN-ACK / Data)</option>
                  <option value="closed">Port Closed (Returns RST or ICMP Unreachable)</option>
                  <option value="filtered_drop">Firewall DROP (Silent discard / Timeout)</option>
                  <option value="filtered_icmp">Firewall REJECT (ICMP Admin Prohibited)</option>
                  <option value="open_filtered">Silent UDP Service (open|filtered ambiguity)</option>
                </select>
                <span className="text-[10px] text-stone-500 mt-1 block">
                  Determines network behavior simulated below
                </span>
              </div>
            </div>

            {/* Generated Command Box */}
            <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                <span className="text-stone-400"># Generated Execution Syntax</span>
                <button
                  onClick={() =>
                    copyCode(
                      `${scanModes[scanType].needsRoot ? "sudo " : ""}nmap ${scanModes[scanType].flag} -p ${targetPort} 192.168.1.100`,
                      "flow-cmd"
                    )
                  }
                  className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px]"
                >
                  {copiedCodeId === "flow-cmd" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>Copy Command</span>
                </button>
              </div>
              <div className="text-emerald-400 text-sm font-bold">
                {scanModes[scanType].needsRoot ? "sudo " : ""}nmap {scanModes[scanType].flag} -p {targetPort} 192.168.1.100
              </div>
              <p className="text-stone-400 text-[11px] mt-1 font-sans">
                {scanModes[scanType].desc}
              </p>
            </div>

            {/* Packet Sequence Stepper */}
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-3 font-mono">
                Wire Protocol Packet Exchange Timeline:
              </h3>
              <div className="space-y-2">
                {getPacketFlow.map((pkt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white font-mono text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-mono text-stone-900 font-bold text-xs">
                          {pkt.sender} &rarr; {pkt.receiver}
                        </div>
                        <div className="text-[11px] text-stone-600 mt-0.5">{pkt.desc}</div>
                      </div>
                    </div>
                    <code className="px-3 py-1.5 rounded-lg bg-stone-900 text-emerald-300 font-mono text-[11px] shrink-0">
                      {pkt.packet}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            {/* Resulting Classification */}
            <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500 block">
                  Reported Nmap Port State:
                </span>
                <span className="text-lg font-black font-mono text-stone-900">
                  {targetPort}/tcp {portStateOutcome.startsWith("filtered") ? "filtered" : portStateOutcome === "open_filtered" ? "open|filtered" : portStateOutcome}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500 block">
                  Security Conclusion:
                </span>
                <span className="text-xs font-semibold text-stone-700">
                  {portStateOutcome === "open"
                    ? "Service is reachable; validate if exposure is architecturally required."
                    : portStateOutcome.startsWith("filtered")
                    ? "Firewall policy actively blocking probes; service state unconfirmed."
                    : "Kernel explicitly refused connection; no listener active."}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - NETWORK SEGMENTATION & VANTAGE POINT         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "segmentation" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Network size={18} className="text-orange-600" />
                <h2 className="text-xl font-extrabold text-stone-900">
                  Multi-Tier Network Segmentation &amp; Vantage Point Sandbox
                </h2>
              </div>
              <p className="text-xs text-stone-600">
                Observe how the same server infrastructure appears radically different depending on whether you scan from the external internet, an internal employee workstation, an application DMZ, or a secure management VPN.
              </p>
            </div>

            {/* Vantage Point Selector */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "external", label: "External Internet Assessor", desc: "Outside corporate perimeter through cloud edge firewall" },
                { id: "workstation", label: "Corporate Employee LAN", desc: "Internal employee workstation VLAN" },
                { id: "dmz", label: "DMZ Application Tier", desc: "Middle-tier app servers connecting to backend DBs" },
                { id: "mgmt", label: "Management Admin VPN", desc: "Dedicated jump host / Bastion administration subnet" },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVantagePoint(v.id)}
                  className={`flex-1 min-w-[200px] p-3 rounded-2xl border text-left transition-all ${
                    vantagePoint === v.id
                      ? "border-orange-500 bg-orange-50/70 shadow-xs"
                      : "border-stone-200 bg-white hover:bg-stone-50"
                  }`}
                >
                  <span className={`font-bold text-xs block ${vantagePoint === v.id ? "text-orange-900" : "text-stone-800"}`}>
                    {v.label}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-0.5 block">{v.desc}</span>
                </button>
              ))}
            </div>

            {/* Network Diagram View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {networkAssets.map((asset) => (
                <div key={asset.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-stone-900">{asset.name}</h4>
                        <span className="font-mono text-[11px] text-orange-700">{asset.ip}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-200 text-stone-700">
                        {asset.tier}
                      </span>
                    </div>

                    <div className="space-y-1.5 mt-2">
                      {asset.ports.map((p, idx) => {
                        const status = p[vantagePoint];
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200/70 text-xs"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-stone-800">
                                {p.port}/{p.proto}
                              </span>
                              <span className="text-stone-600 text-[11px]">{p.svc}</span>
                            </div>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                                status === "open"
                                  ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                                  : "bg-amber-100 text-amber-800 border-amber-300"
                              }`}
                            >
                              {status}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-200/70 text-[10px] text-stone-500 italic">
                    {vantagePoint === "external" && asset.id === "db"
                      ? "Excellent: Database is invisible to external internet probes."
                      : vantagePoint === "workstation" && asset.id === "db"
                      ? "Proper segmentation: Employee desktop cannot directly query database."
                      : vantagePoint === "dmz" && asset.id === "db"
                      ? "Operational pathway: Web/App tier queries DB through private VPC route."
                      : "Role-appropriate network reachability observed."}
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Insight Note */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
              <strong className="block font-bold mb-1">Architectural Insight:</strong>
              Notice that the database (10.0.3.50) is reported as <code>filtered</code> from the External Internet and Employee LAN, but <code>open</code> from the DMZ App Tier. An assessor scanning exclusively from the outside might mistakenly conclude the database is down or offline; an internal assessor confirms it is listening and appropriately segmented.
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - LAB 7A DISCOVERY REPORT WORKSHEET             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "worksheet" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileSpreadsheet size={18} className="text-orange-600" />
                <h2 className="text-xl font-extrabold text-stone-900">
                  Lab 7A: Network Discovery Audit Report Worksheet
                </h2>
              </div>
              <p className="text-xs text-stone-600">
                Document verified host reachability, observed port states, service banners, and defensible security recommendations. Export a professional assessment report ready for system owners.
              </p>
            </div>

            {/* Target Header Config */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Approved Target IP / Hostname:</label>
                <input
                  type="text"
                  value={worksheetTarget}
                  onChange={(e) => setWorksheetTarget(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs text-stone-900"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Target Role &amp; Environment:</label>
                <input
                  type="text"
                  value={worksheetTargetRole}
                  onChange={(e) => setWorksheetTargetRole(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs text-stone-900"
                />
              </div>
            </div>

            {/* Findings Table */}
            <div className="overflow-x-auto rounded-2xl border border-stone-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-stone-100 font-mono text-[11px] text-stone-700">
                  <tr>
                    <th className="p-2.5 border-b border-stone-200">Port</th>
                    <th className="p-2.5 border-b border-stone-200">State</th>
                    <th className="p-2.5 border-b border-stone-200">Identified Service</th>
                    <th className="p-2.5 border-b border-stone-200">Intended Purpose</th>
                    <th className="p-2.5 border-b border-stone-200">Confidence</th>
                    <th className="p-2.5 border-b border-stone-200">Recommended Action</th>
                    <th className="p-2.5 border-b border-stone-200 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-[11px]">
                  {worksheetEntries.map((row) => (
                    <tr key={row.id} className="hover:bg-stone-50/70">
                      <td className="p-2.5 font-mono font-bold text-orange-700">{row.port}</td>
                      <td className="p-2.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                            row.state === "open"
                              ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                              : "bg-amber-100 text-amber-800 border-amber-300"
                          }`}
                        >
                          {row.state}
                        </span>
                      </td>
                      <td className="p-2.5 font-medium text-stone-800">{row.service}</td>
                      <td className="p-2.5 text-stone-600">{row.purpose}</td>
                      <td className="p-2.5 font-mono text-stone-700">{row.confidence}</td>
                      <td className="p-2.5 text-stone-700 max-w-xs">{row.recommendation}</td>
                      <td className="p-2.5 text-right">
                        <button
                          onClick={() => removeWorksheetEntry(row.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Entry Row */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h4 className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                <PlusCircle size={15} className="text-orange-600" />
                <span>Add Discovered Service Entry to Report</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Port / Proto:</label>
                  <input
                    type="text"
                    value={newEntry.port}
                    onChange={(e) => setNewEntry({ ...newEntry, port: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs"
                    placeholder="e.g. 8080/tcp"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Observed State:</label>
                  <select
                    value={newEntry.state}
                    onChange={(e) => setNewEntry({ ...newEntry, state: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs"
                  >
                    <option value="open">open</option>
                    <option value="closed">closed</option>
                    <option value="filtered">filtered</option>
                    <option value="open|filtered">open|filtered</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Identified Service &amp; Banner:</label>
                  <input
                    type="text"
                    value={newEntry.service}
                    onChange={(e) => setNewEntry({ ...newEntry, service: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs"
                    placeholder="e.g. Redis 6.0.9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Intended Role / Purpose:</label>
                  <input
                    type="text"
                    value={newEntry.purpose}
                    onChange={(e) => setNewEntry({ ...newEntry, purpose: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs"
                    placeholder="e.g. In-memory session cache"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Evidence Confidence:</label>
                  <select
                    value={newEntry.confidence}
                    onChange={(e) => setNewEntry({ ...newEntry, confidence: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs"
                  >
                    <option value="High">High (Direct protocol response)</option>
                    <option value="Medium">Medium (Banner inference)</option>
                    <option value="Low">Low (Port mapping heuristic)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Recommended Action:</label>
                  <input
                    type="text"
                    value={newEntry.recommendation}
                    onChange={(e) => setNewEntry({ ...newEntry, recommendation: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 text-xs"
                    placeholder="e.g. Restrict to internal VPC"
                  />
                </div>
              </div>

              <button
                onClick={addWorksheetEntry}
                className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors"
              >
                Insert Finding Row
              </button>
            </div>

            {/* Generated Formal Conclusion */}
            <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 text-xs space-y-2">
              <strong className="text-stone-900 block font-bold">Standardized Audit Conclusion (NIST SP 800-115 format):</strong>
              <p className="text-stone-700 leading-relaxed text-[11px] font-mono bg-white p-3 rounded-xl border border-stone-200">
                The approved target ({worksheetTarget} - {worksheetTargetRole}) was examined on the designated TCP and UDP ports during the authorized testing window. The assessment verified {worksheetEntries.filter(e => e.state === 'open').length} open services and {worksheetEntries.filter(e => e.state === 'filtered').length} filtered ports. These observations reflect the host&apos;s network exposure from the authorized testing subnet at the time of execution; they do not independently prove the absence or presence of exploitable vulnerabilities. All identified service configurations must be reviewed against organizational access policy before remediation changes are applied.
              </p>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - BANNER VS. VULNERABILITY VALIDATOR           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "banner-sandbox" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={18} className="text-orange-600" />
                <h2 className="text-xl font-extrabold text-stone-900">
                  Service Banner vs. Vulnerability Validation Sandbox
                </h2>
              </div>
              <p className="text-xs text-stone-600">
                Explore real-world case studies demonstrating why automated banner grabbing causes severe false positives, how Linux distributions backport security fixes, and how to rigorously validate exposure.
              </p>
            </div>

            {/* Case Study Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.keys(bannerScenarios).map((key) => {
                const sc = bannerScenarios[key];
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedBannerCase(key)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedBannerCase === key
                        ? "border-orange-500 bg-orange-50/70 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <span className="font-bold text-xs block text-stone-900">{sc.title}</span>
                    <span className="text-[10px] text-stone-500 mt-1 block truncate font-mono">
                      {sc.bannerReported}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Case Details */}
            {(() => {
              const currentCase = bannerScenarios[selectedBannerCase];
              return (
                <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-stone-400">Selected Scenario:</span>
                      <h3 className="text-base font-extrabold text-stone-900">{currentCase.title}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold border ${currentCase.badgeClass}`}>
                      {currentCase.vulnAssessment}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
                      <strong className="text-stone-500 font-mono text-[10px] uppercase block mb-1">
                        Observed Banner String:
                      </strong>
                      <code className="text-orange-700 font-mono text-xs font-bold block">
                        {currentCase.bannerReported}
                      </code>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
                      <strong className="text-stone-500 font-mono text-[10px] uppercase block mb-1">
                        Automated Scanner CVE Warning:
                      </strong>
                      <span className="text-stone-800 font-medium text-xs block">
                        {currentCase.cveWarning}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 text-xs space-y-2">
                    <strong className="text-stone-900 font-bold block">Technical Analysis &amp; Investigation:</strong>
                    <p className="text-stone-700 leading-relaxed text-[11px]">
                      {currentCase.reasoning}
                    </p>
                  </div>

                  <div>
                    <strong className="text-stone-900 font-bold text-xs block mb-1.5 font-mono">
                      Authoritative Verification Command:
                    </strong>
                    <div className="p-3.5 rounded-2xl bg-stone-900 text-emerald-400 font-mono text-xs">
                      <pre className="whitespace-pre-wrap">{currentCase.commandCheck}</pre>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                    <strong>Professional Action: </strong>
                    <span className="text-[11px] text-orange-900">{currentCase.correctRemediation}</span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT QUIZ                                   */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h2 className="text-xl font-extrabold text-stone-900">
                  Module 7 Knowledge Assessment
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Test your mastery of network discovery, TCP/UDP port states, and Nmap enumeration
                </p>
              </div>

              {submittedQuiz && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-stone-900 text-white font-mono text-xs font-bold">
                  <Award size={16} className="text-orange-400" />
                  <span>
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const userAns = selectedQuizAnswers[q.id];
                const isCorrect = userAns === q.correct;

                return (
                  <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                        {idx + 1}. {q.question}
                      </h4>
                      {submittedQuiz && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase shrink-0 ${
                            isCorrect
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-red-100 text-red-800 border border-red-300"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAns === optIdx;
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                        if (submittedQuiz) {
                          if (optIdx === q.correct) {
                            btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                          } else if (isSelected) {
                            btnStyle = "bg-red-50 border-red-400 text-red-900 font-bold";
                          }
                        } else if (isSelected) {
                          btnStyle = "bg-orange-50 border-orange-400 text-orange-900 font-bold shadow-xs";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={submittedQuiz}
                            onClick={() =>
                              setSelectedQuizAnswers((prev) => ({
                                ...prev,
                                [q.id]: optIdx,
                              }))
                            }
                            className={`p-3 rounded-xl border text-left transition-all ${btnStyle}`}
                          >
                            <span className="font-mono text-[11px] text-stone-400 mr-2">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {submittedQuiz && (
                      <div className="p-3 rounded-xl bg-white border border-stone-200 text-[11px] text-stone-600 leading-relaxed">
                        <strong className="text-stone-900 font-mono">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <button
                onClick={() => {
                  setSelectedQuizAnswers({});
                  setSubmittedQuiz(false);
                }}
                className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 hover:bg-stone-50 transition-colors"
              >
                Reset Answers
              </button>

              {!submittedQuiz ? (
                <button
                  onClick={() => setSubmittedQuiz(true)}
                  disabled={Object.keys(selectedQuizAnswers).length === 0}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all"
                >
                  Submit Assessment
                </button>
              ) : (
                <div className="text-xs font-semibold text-stone-600">
                  Assessment verified against NIST SP 800-115 and Nmap documentation standards.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Floating Nova AI Mentor Sidecar Drawer */}
      {showAiTutor && (
        <LearningRo
          courseName="Cybersecurity Master Course"
          moduleName="Module 7: Network Discovery, Port Scanning Concepts, and Service Enumeration"
          currentTopic={topics.find((t) => t.id === selectedTopic)?.title || "Overview"}
          onClose={() => setShowAiTutor(false)}
        />
      )}
    </div>
  );
}
