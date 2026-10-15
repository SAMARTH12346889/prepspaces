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
  Router,
  Wifi,
  Radio,
  FileSpreadsheet,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 2                            */
/* Networking Fundamentals, TCP/IP, DNS, HTTP/HTTPS, and Network Protocols   */
/* Informed by IETF, IEEE, NIST, OWASP, and Leading CS University Curricula   */
/* -------------------------------------------------------------------------- */

export default function CybersecurityNetworking() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'subnet-calc' | 'tcp-handshake' | 'dns-tracer' | 'cli-sandbox' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 1: SUBNET CALCULATOR (CIDR /0 to /32)                */
  /* -------------------------------------------------------------------------- */
  const [inputIp, setInputIp] = useState("192.168.10.25");
  const [cidrPrefix, setCidrPrefix] = useState(26);

  const subnetResult = useMemo(() => {
    const parts = inputIp.split(".").map((p) => parseInt(p, 10));
    if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) {
      return {
        valid: false,
        network: "Invalid IPv4",
        mask: "—",
        total: 0,
        usable: 0,
        first: "—",
        last: "—",
        broadcast: "—",
      };
    }

    const ipNum = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
    const maskNum = cidrPrefix === 0 ? 0 : (~0 << (32 - cidrPrefix)) >>> 0;
    const networkNum = (ipNum & maskNum) >>> 0;
    const broadcastNum = cidrPrefix === 32 ? networkNum : (networkNum | ~maskNum) >>> 0;

    const numToIp = (num) => [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255,
    ].join(".");

    const totalIps = Math.pow(2, 32 - cidrPrefix);
    const usableHosts = cidrPrefix >= 31 ? (cidrPrefix === 31 ? 2 : 1) : Math.max(0, totalIps - 2);

    const firstUsable = cidrPrefix >= 31 ? numToIp(networkNum) : numToIp(networkNum + 1);
    const lastUsable = cidrPrefix >= 31 ? numToIp(broadcastNum) : numToIp(broadcastNum - 1);

    return {
      valid: true,
      network: `${numToIp(networkNum)}/${cidrPrefix}`,
      mask: numToIp(maskNum),
      total: totalIps.toLocaleString(),
      usable: usableHosts.toLocaleString(),
      first: firstUsable,
      last: lastUsable,
      broadcast: cidrPrefix >= 31 ? "N/A (Host / P2P)" : numToIp(broadcastNum),
    };
  }, [inputIp, cidrPrefix]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 2: TCP 3-WAY HANDSHAKE & SYN FLOOD DEFENSE          */
  /* -------------------------------------------------------------------------- */
  const [handshakeStep, setHandshakeStep] = useState(0); // 0: Idle, 1: SYN, 2: SYN-ACK, 3: ACK, 4: Established
  const [synFloodActive, setSynFloodActive] = useState(false);
  const [synCookiesEnabled, setSynCookiesEnabled] = useState(false);

  const stepForwardHandshake = () => {
    setHandshakeStep((prev) => (prev < 4 ? prev + 1 : 0));
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 3: DNS HIERARCHICAL RESOLVER STEPPER                 */
  /* -------------------------------------------------------------------------- */
  const [dnsQueryDomain, setDnsQueryDomain] = useState("api.prepspaces.com");
  const [dnsResolutionStep, setDnsResolutionStep] = useState(0);

  const dnsSteps = [
    {
      level: "1. Local Browser / OS Cache",
      action: "Checks internal resolver cache for recent positive or negative TTL hits.",
      status: "Cache Miss: api.prepspaces.com not present in OS memory.",
      delegation: "Forwards query to configured recursive resolver (1.1.1.1 / 8.8.8.8).",
    },
    {
      level: "2. Recursive DNS Resolver",
      action: "Resolver receives recursive query (RD flag = 1) and queries Root Nameservers.",
      status: "Queries a.root-servers.net (Root Zone '.').",
      delegation: "Root responds with referral to '.com' gTLD nameservers (a.gtld-servers.net).",
    },
    {
      level: "3. TLD (.com) Nameserver",
      action: "Queries TLD nameserver for authoritative name servers of prepspaces.com.",
      status: "TLD server provides NS records (ns1.prepspaces.com) and glue A records.",
      delegation: "Resolver referrals directed to authoritative cluster for prepspaces.com.",
    },
    {
      level: "4. Authoritative Nameserver",
      action: "Queries authoritative nameserver for A record of 'api.prepspaces.com'.",
      status: "Authoritative server returns A 104.21.72.15 (TTL = 300s).",
      delegation: "Answer signed with RRSIG (DNSSEC validated).",
    },
    {
      level: "5. Client Receives Answer & Caches",
      action: "Recursive resolver returns 104.21.72.15 to browser and caches record for 300 seconds.",
      status: "Browser opens TCP socket to 104.21.72.15:443 for HTTPS TLS handshake.",
      delegation: "Resolution successfully completed.",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 4: CLI NETWORKING DIAGNOSTICS SANDBOX                */
  /* -------------------------------------------------------------------------- */
  const [selectedCliCommand, setSelectedCliCommand] = useState("ping");
  const [cliConsoleOutput, setCliConsoleOutput] = useState("");
  const [isExecutingCli, setIsExecutingCli] = useState(false);

  const cliPresets = {
    ping: {
      label: "ping: ICMP Reachability Test",
      cmd: "ping -c 4 192.168.1.1",
      output: `PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.
64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.482 ms
64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=0.395 ms
64 bytes from 192.168.1.1: icmp_seq=3 ttl=64 time=0.412 ms
64 bytes from 192.168.1.1: icmp_seq=4 ttl=64 time=0.380 ms

--- 192.168.1.1 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3072ms
rtt min/avg/max/mdev = 0.380/0.417/0.482/0.039 ms`,
    },
    traceroute: {
      label: "traceroute: Path Hop Inspection",
      cmd: "traceroute -n prepspaces.com",
      output: `traceroute to prepspaces.com (104.21.72.15), 30 hops max, 60 byte packets
 1  192.168.1.1  0.512 ms  0.482 ms  0.461 ms (Default Gateway)
 2  10.240.0.1   4.120 ms  4.095 ms  4.110 ms (ISP Access Edge)
 3  182.79.142.9 8.214 ms  8.190 ms  8.205 ms (Regional Core Transit)
 4  * * * (ICMP Time Exceeded filtered by intermediate firewall)
 5  104.21.72.15 12.450 ms 12.410 ms 12.425 ms (Cloudflare Anycast Edge)`,
    },
    dig: {
      label: "dig: DNS Query & TTL Inspection",
      cmd: "dig +noall +answer prepspaces.com A",
      output: `; <<>> DiG 9.18.28-1~deb12u2-Debian <<>> +noall +answer prepspaces.com A
prepspaces.com.         300     IN      A       104.21.72.15
prepspaces.com.         300     IN      A       172.67.182.201`,
    },
    curl: {
      label: "curl: HTTP Status & Headers Inspection",
      cmd: "curl -Iv https://prepspaces.com/",
      output: `* Trying 104.21.72.15:443...
* Connected to prepspaces.com (104.21.72.15) port 443
* ALPN: offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
> HEAD / HTTP/2
> Host: prepspaces.com
> User-Agent: curl/8.5.0
> Accept: */*
> 
< HTTP/2 200 
< date: Thu, 15 Oct 2026 14:30:10 GMT
< content-type: text/html; charset=UTF-8
< strict-transport-security: max-age=31536000; includeSubDomains; preload
< x-content-type-options: nosniff
< x-frame-options: DENY
< content-security-policy: default-src 'self'
< server: cloudflare`,
    },
    ip: {
      label: "ip addr & route: Host Stack Inspection",
      cmd: "ip -br addr show && ip route show",
      output: `lo               UNKNOWN        127.0.0.1/8 ::1/128 
eth0             UP             192.168.10.25/26 fe80::a00:27ff:fe12:3456/64 

default via 192.168.10.1 dev eth0 proto dhcp src 192.168.10.25 metric 100 
192.168.10.0/26 dev eth0 proto kernel scope link src 192.168.10.25 metric 100`,
    },
  };

  const runCliCommand = (key) => {
    setIsExecutingCli(true);
    setSelectedCliCommand(key);
    setCliConsoleOutput(`$ ${cliPresets[key].cmd}\n[Probing network sockets...]`);
    setTimeout(() => {
      setCliConsoleOutput(`$ ${cliPresets[key].cmd}\n\n${cliPresets[key].output}`);
      setIsExecutingCli(false);
    }, 450);
  };

  /* -------------------------------------------------------------------------- */
  /* PRACTICAL LAB CHECKLIST STATE                                              */
  /* -------------------------------------------------------------------------- */
  const [labTasks, setLabTasks] = useState({
    task1: false, // Record local network configuration (IP, subnet, gateway, DNS)
    task2: false, // Inspect routing table and identify next-hop route
    task3: false, // Query hostname and record returned IP and TTL
    task4: false, // Inspect HTTP status code, headers, and TLS certificate
    task5: false, // Capture packets with Wireshark and trace TCP handshake
    task6: false, // Diagnose a simulated failure (e.g. invalid DNS or filtered port)
    task7: false, // Document findings in a structured network investigation report
  });

  const toggleLabTask = (taskKey) => {
    setLabTasks((prev) => ({ ...prev, [taskKey]: !prev[taskKey] }));
  };

  const completedTasksCount = Object.values(labTasks).filter(Boolean).length;

  const resetChecklist = () => {
    setLabTasks({
      task1: false,
      task2: false,
      task3: false,
      task4: false,
      task5: false,
      task6: false,
      task7: false,
    });
  };

  /* -------------------------------------------------------------------------- */
  /* SCENARIO ASSESSMENT QUESTIONS (10 QUESTIONS WITH EXPLANATIONS)             */
  /* -------------------------------------------------------------------------- */
  const [expandedFaq, setExpandedFaq] = useState(null);

  const scenarioFaqs = [
    {
      id: 1,
      q: "Why can a computer reach a server by IP address but fail to reach it by hostname?",
      a: "This indicates an isolated Domain Name System (DNS) failure. The underlying Layer 3 (IP) routing and Layer 4 transport connectivity are intact, but the client cannot translate the human-readable FQDN into an IP address due to an unconfigured resolver, DNS timeout, or missing A/AAAA record.",
    },
    {
      id: 2,
      q: "What is the difference between a switch forwarding an Ethernet frame and a router forwarding an IP packet?",
      a: "A Layer 2 switch inspects destination MAC addresses in Ethernet frames and forwards them within a local broadcast domain using its CAM (MAC address) table without modifying headers. A Layer 3 router inspects destination IP addresses, decrements the TTL, recalculates checksums, strips the incoming Layer 2 frame, and encapsulates the packet into a new Layer 2 frame for the next-hop link.",
    },
    {
      id: 3,
      q: "Why does a client usually resolve its default gateway's MAC address when contacting a remote IPv4 destination?",
      a: "Ethernet frames can only be delivered directly between nodes sharing the same physical or VLAN broadcast domain. Because the remote destination IP is outside the local subnet mask, the client encapsulates the IP packet into a frame addressed to the Layer 2 MAC address of its default gateway (router), which forwards it toward the destination.",
    },
    {
      id: 4,
      q: "What security advantages and limitations does HTTPS provide?",
      a: "HTTPS (HTTP over TLS) guarantees encryption, data integrity, and server authentication against on-path eavesdroppers. However, HTTPS does NOT guarantee that the server application is non-malicious, free of SQL injection/XSS flaws, or that client endpoints are clean of malware. Hostnames are also frequently exposed during the SNI handshake unless ECH (Encrypted Client Hello) is deployed.",
    },
    {
      id: 5,
      q: "Why is NAT not a complete replacement for firewall controls?",
      a: "Network Address Translation (NAT/PAT) merely translates IP addresses and ports to conserve IPv4 space; it lacks security policy intelligence. Inbound connections might be obscured, but outbound traffic from compromised endpoints is forwarded unrestricted unless accompanied by explicit stateful inspection, egress filtering, and application layer firewall policies.",
    },
    {
      id: 6,
      q: "How can network segmentation limit the consequences of a compromised workstation?",
      a: "By placing user workstations in isolated VLANs with strict inter-VLAN access control lists (ACLs) or next-gen firewalls, an adversary who compromises an employee laptop cannot pivot laterally over SMB (port 445), RDP (port 3389), or SSH directly to sensitive database servers, payment processing zones, or domain controllers.",
    },
    {
      id: 7,
      q: "What information can Wireshark reveal from an encrypted HTTPS connection, and what content normally remains protected?",
      a: "Wireshark reveals transport metadata: source/destination IP addresses, TCP ports, packet timing, packet sizes, TLS version, negotiated cipher suites, and the Server Name Indication (SNI) hostname. The HTTP request method, request URL path, query parameters, POST body data, cookies, and response payloads remain cryptographically protected by TLS.",
    },
    {
      id: 8,
      q: "How would you distinguish a DNS failure from a TCP connection failure?",
      a: "Run `nslookup domain.com` or `dig domain.com A`. If the query returns `NXDOMAIN`, `SERVFAIL`, or times out, DNS is the issue. If DNS successfully returns an IP address, but `curl -Iv https://IP` or `nc -zv IP 443` results in 'Connection Refused' (RST) or 'Operation Timed Out' (dropped SYN), the problem is at Layer 4 (firewall, routing, or stopped service).",
    },
    {
      id: 9,
      q: "What is the difference between TCP reliability and application-level success?",
      a: "TCP reliability guarantees that every byte sent reaches the receiver's socket buffer in order without corruption or loss (via sequence numbers, ACKs, and retransmissions). It does NOT guarantee that the receiving application successfully processed the request (e.g. a web server returning HTTP 500 Internal Server Error or an API throwing a SQL database exception).",
    },
    {
      id: 10,
      q: "Why should security analysts inspect IPv6 even when an organization primarily uses IPv4?",
      a: "Most modern operating systems (Windows, Linux, macOS) enable dual-stack IPv6 by default and prioritize IPv6 DNS resolution (AAAA records). If security teams configure firewalls, IDS/IPS, and logging only for IPv4, attackers can exploit IPv6 transition tunnels, rogue Router Advertisements (SLAAC abuse), or unmonitored IPv6 egress paths to bypass perimeter defenses undetected.",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* TOPICS NAVIGATION DEFINITIONS                                              */
  /* -------------------------------------------------------------------------- */
  const topics = [
    { id: 1, title: "2.1 Introduction to Computer Networking", badge: "Fundamentals" },
    { id: 2, title: "2.2 OSI Model & TCP/IP Architecture", badge: "Layer Models" },
    { id: 3, title: "2.3 Ethernet, MAC, Switching & ARP", badge: "Layer 2" },
    { id: 4, title: "2.4 IPv4, IPv6 & Subnetting", badge: "Layer 3 Addressing" },
    { id: 5, title: "2.5 TCP, UDP, Ports & Transport", badge: "Layer 4 Sockets" },
    { id: 6, title: "2.6 Routing, NAT, VLANs & Segmentation", badge: "Traffic Isolation" },
    { id: 7, title: "2.7 DNS Architecture and Security", badge: "Naming & Threats" },
    { id: 8, title: "2.8 HTTP, HTTPS, TLS & Web Security", badge: "Application Security" },
    { id: 9, title: "2.9 Troubleshooting & Packet Analysis", badge: "Diagnostics" },
    { id: 10, title: "2.10 Network Security & Practical Lab", badge: "Capstone Lab" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Header & Navigation */}
      <div className="border-b border-[#eae6de] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ModuleNav
            track="cybersecurity"
            currentModuleId="networking"
            showAiTutor={showAiTutor}
            onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
            aiTutorLabel="Cybersecurity AI Mentor"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="border-b border-[#eae6de] bg-gradient-to-b from-[#f9f7f2] to-[#f4f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                  Prepspaces Cybersecurity Master Course
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                  Module 2 · Beginner to Advanced
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  10 Learning Objectives
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Networking Fundamentals, TCP/IP, DNS, HTTP/HTTPS, and Protocols
              </h1>
              <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
                Master how packets traverse digital infrastructure, how network protocols coordinate communication, how attackers exploit architectural misconfigurations, and how defenders inspect traffic using Wireshark, dig, curl, and packet analysis.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-stone-500 italic">
                <span>Informed by university computer science curricula and standards from the IETF, IEEE, NIST, and OWASP.</span>
              </div>
            </div>

            {/* Quick Actions / Tab Navigation */}
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab("theory")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "theory"
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Comprehensive Curriculum
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("subnet-calc")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "subnet-calc"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Gauge className="w-3.5 h-3.5 text-orange-500" />
                Subnet Calculator
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("tcp-handshake")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "tcp-handshake"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Workflow className="w-3.5 h-3.5 text-amber-500" />
                TCP Handshake Lab
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("dns-tracer")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "dns-tracer"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                DNS Resolution Tracer
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("cli-sandbox")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "cli-sandbox"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-stone-800" />
                Diagnostic CLI Sandbox
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Learning Objectives Callout Banner */}
        <div className="mb-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 md:p-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 shrink-0 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-900">
                Module 2 Learning Objectives
              </h2>
              <p className="mt-1 text-xs text-orange-800">
                By completing this module, you will master the analytical frameworks and technical skills required to:
              </p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Explain network architectures, topologies, communication modes, and classifications.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Understand the OSI 7-layer reference model and TCP/IP 4-layer protocol suite.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Explain Ethernet frames, 48-bit MAC addresses, CAM switching, and ARP behavior.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Analyze IPv4/IPv6 address structures, CIDR prefix masks, and subnet boundaries.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Explain routing tables, longest-prefix match, NAT/PAT overload, VLANs, and firewalls.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Trace recursive DNS resolution, DNS records (A/AAAA/CNAME/TXT), TTL, and DNSSEC.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Analyze HTTP methods, status codes, cookies (HttpOnly/Secure), and TLS 1.3 handshakes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Troubleshoot networks using ping, traceroute, ip, dig, curl, and Wireshark captures.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TAB 1: FULL CURRICULUM THEORY & PRACTICAL SECTIONS                 */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Syllabus Navigator */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="text-xs font-bold text-stone-900 tracking-wide uppercase">
                    Module 2 Syllabus
                  </span>
                  <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                    10 Sections
                  </span>
                </div>
                <nav className="mt-3 space-y-1">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition flex flex-col gap-0.5 ${
                        (selectedTopic || 1) === t.id
                          ? "bg-orange-50 text-orange-950 font-semibold border border-orange-200 shadow-2xs"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span>{t.title}</span>
                      <span className="text-[10px] text-stone-600 uppercase tracking-wider">
                        {t.badge}
                      </span>
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-800 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                    Interactive Simulators
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveTab("subnet-calc")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>Subnet Calculator</span>
                      <Gauge className="w-3 h-3 text-orange-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("tcp-handshake")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>TCP Handshake & SYN Floods</span>
                      <Workflow className="w-3 h-3 text-amber-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("dns-tracer")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>DNS Resolution Visualizer</span>
                      <Globe className="w-3 h-3 text-blue-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("cli-sandbox")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>CLI Sandbox (ping/curl/dig)</span>
                      <Terminal className="w-3 h-3 text-stone-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="lg:col-span-3 space-y-8">
              {/* TOPIC 2.1 */}
              {(selectedTopic === 1 || !selectedTopic || selectedTopic === 0) && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.1
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Introduction to Computer Networking
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Network fundamentals, classifications, topologies, hardware roles, and packet-switched communication.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">What is a Computer Network?</h3>
                    <p>
                      A computer network is a collection of interconnected computing devices that exchange data using agreed communication protocols. These devices encompass servers, workstations, smartphones, routers, switches, firewalls, and Internet of Things (IoT) sensors.
                    </p>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                      <strong>Production Example:</strong> When a user opens <code>prepspaces.com</code> in a web browser, the client machine queries local and upstream DNS infrastructure to resolve the hostname into an IP address, performs a TCP handshake followed by a TLS 1.3 cryptographic key exchange, and sends an HTTP/2 GET request to receive HTML, stylesheets, and scripts.
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Why Networking Matters in Cybersecurity</h3>
                    <p>
                      Security professionals cannot distinguish malicious traffic from benign operational behavior without a solid grasp of normal network communication:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-2">
                      <li><strong>Detect Unauthorized Exposure:</strong> Identify internal management ports (SSH, RDP, SMB) mistakenly reachable from the public internet.</li>
                      <li><strong>Analyze Malicious C2:</strong> Uncover covert Command-and-Control beacons masquerading as ordinary DNS queries or TLS traffic.</li>
                      <li><strong>Contain Lateral Movement:</strong> Prevent attackers who breach a single endpoint from pivoting across flat subnets into production databases.</li>
                      <li><strong>Effective Incident Triage:</strong> Distinguish benign network packet loss or congestion from deliberate denial-of-service (DDoS) floods.</li>
                    </ul>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Network Classifications by Geographic Scope</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Type</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Description</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Representative Example</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">PAN</td>
                            <td className="px-3.5 py-2">Personal Area Network (within a few meters)</td>
                            <td className="px-3.5 py-2">Bluetooth headphones paired with a smartphone</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">LAN</td>
                            <td className="px-3.5 py-2">Local Area Network (single room, office floor, or data center pod)</td>
                            <td className="px-3.5 py-2">Wired Gigabit Ethernet switch interconnecting corporate workstations</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">WLAN</td>
                            <td className="px-3.5 py-2">Wireless Local Area Network (Wi-Fi 802.11ax)</td>
                            <td className="px-3.5 py-2">Enterprise Wi-Fi access point with WPA3 Enterprise authentication</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">CAN</td>
                            <td className="px-3.5 py-2">Campus Area Network (connecting multiple adjacent buildings)</td>
                            <td className="px-3.5 py-2">University optical ring interconnecting engineering and library facilities</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">MAN</td>
                            <td className="px-3.5 py-2">Metropolitan Area Network (spanning an entire city or metro region)</td>
                            <td className="px-3.5 py-2">Municipal fiber ring providing public utility interconnectivity</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">WAN</td>
                            <td className="px-3.5 py-2">Wide Area Network (spanning continents and global regions)</td>
                            <td className="px-3.5 py-2">The global public Internet; AWS multi-region backbone interconnect</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">VPN</td>
                            <td className="px-3.5 py-2">Virtual Private Network (encrypted logical tunnel over public WAN)</td>
                            <td className="px-3.5 py-2">WireGuard / IPsec tunnel connecting remote staff to corporate VPC</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Network Topologies & Device Roles</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Star Topology:</strong>
                        All devices connect to a central switch. Common in modern Ethernet LANs. If a single cable fails, only that device is isolated.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Mesh Topology:</strong>
                        Nodes possess multiple redundant interconnects. Highly resilient to link cuts, but requires complex routing and higher deployment costs.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Layer 2 Switch:</strong>
                        Forwards frames within a local broadcast domain using MAC address tables (CAM). Prevents collisions across full-duplex links.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Layer 3 Router:</strong>
                        Forwards IP datagrams between disparate subnets and networks based on routing tables and longest-prefix matching.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.2 */}
              {selectedTopic === 2 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.2
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      OSI Reference Model and TCP/IP Architecture
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      The 7 OSI layers, TCP/IP 4 layers, encapsulation, decapsulation, protocol data units, and layered troubleshooting.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      The <strong>OSI (Open Systems Interconnection) reference model</strong> partitions network functions into 7 modular layers. The <strong>TCP/IP protocol suite</strong> compresses these into 4 practical layers that define the architecture of the modern Internet.
                    </p>

                    <h3 className="text-base font-bold text-stone-900">Comparing OSI 7-Layer and TCP/IP 4-Layer Models</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3 py-2 border-b border-stone-200">OSI Layer</th>
                            <th className="px-3 py-2 border-b border-stone-200">TCP/IP Layer</th>
                            <th className="px-3 py-2 border-b border-stone-200">Protocol Data Unit (PDU)</th>
                            <th className="px-3 py-2 border-b border-stone-200">Standard Protocols</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">7. Application</td>
                            <td className="px-3 py-2 font-semibold text-orange-700" rowSpan={3}>Application</td>
                            <td className="px-3 py-2" rowSpan={3}>Data / Payload</td>
                            <td className="px-3 py-2">HTTP/2, HTTPS, DNS, SSH, SMTP</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">6. Presentation</td>
                            <td className="px-3 py-2">TLS 1.3, JSON, ASN.1, MIME</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">5. Session</td>
                            <td className="px-3 py-2">RPC, SOCKS5, NetBIOS</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">4. Transport</td>
                            <td className="px-3 py-2 font-semibold text-orange-700">Transport</td>
                            <td className="px-3 py-2">Segment (TCP) / Datagram (UDP)</td>
                            <td className="px-3 py-2">TCP, UDP, QUIC, SCTP</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">3. Network</td>
                            <td className="px-3 py-2 font-semibold text-orange-700">Internet</td>
                            <td className="px-3 py-2">Packet / Datagram</td>
                            <td className="px-3 py-2">IPv4, IPv6, ICMP, IPsec, BGP</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">2. Data Link</td>
                            <td className="px-3 py-2 font-semibold text-orange-700" rowSpan={2}>Link / Network Access</td>
                            <td className="px-3 py-2">Frame</td>
                            <td className="px-3 py-2">Ethernet (802.3), Wi-Fi (802.11), ARP</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">1. Physical</td>
                            <td className="px-3 py-2">Bits (Electrical / Optical)</td>
                            <td className="px-3 py-2">Cat6A Copper, 100G Fiber, RF 5GHz</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Encapsulation and Decapsulation Flow</h3>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs">
                      <p className="text-stone-800">
                        When an application dispatches data, each layer prepends a header containing its specific addressing and control metadata:
                      </p>
                      <div className="font-mono bg-white p-3 rounded-lg border border-stone-200 text-stone-800 space-y-1">
                        <div>1. Application Layer: <code>[ HTTP GET /api/v1/user ]</code></div>
                        <div>2. Transport Layer:   <code>[ TCP Port 54128 -&gt; 443 | SEQ=100 ] [ HTTP GET ... ]</code></div>
                        <div>3. Network Layer:     <code>[ IP 192.168.10.25 -&gt; 104.21.72.15 | TTL=64 ] [ TCP ... ]</code></div>
                        <div>4. Data Link Layer:   <code>[ MAC 00:1A:2B:3C:4D:5E -&gt; 00:0C:29:AA:BB:CC | EtherType=0x0800 ] [ IP ... ] [ FCS ]</code></div>
                        <div>5. Physical Layer:    Transmitted as modulated electromagnetic pulses across physical medium.</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950">
                      <strong>Security Analyst Principle:</strong> When troubleshooting connectivity, reason layer by layer:
                      <br />• If Layer 1 is down (unplugged cable), Layer 3 (ping) and Layer 7 (HTTPS) will fail.
                      <br />• A successful ICMP ping proves Layer 3 reachability, but does NOT prove Layer 7 application health.
                      <br />• Conversely, if a firewall filters ICMP, ping fails even when an HTTPS web service on port 443 operates perfectly!
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.3 */}
              {selectedTopic === 3 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.3
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Ethernet, MAC Addresses, Switching, and ARP
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Ethernet frames, physical addressing, CAM forwarding tables, ARP mechanics, and Layer 2 attack vectors.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">Ethernet Frames & MAC Addresses</h3>
                    <p>
                      <strong>Media Access Control (MAC)</strong> addresses are 48-bit (6-octet) link-layer physical addresses formatted as hexadecimal pairs (e.g. <code>00:1A:2B:3C:4D:5E</code>). The first 24 bits represent the <strong>Organizationally Unique Identifier (OUI)</strong> assigned to the hardware manufacturer by the IEEE; the final 24 bits are the unique device serial.
                    </p>
                    <p className="text-xs text-stone-600">
                      <em>Crucial Security Warning:</em> MAC addresses are not reliable proof of device identity. Network interface drivers can trivially spoof MAC addresses (e.g. <code>macchanger -r eth0</code>). Furthermore, routers strip original Layer 2 Ethernet frames at every hop, making MAC addresses invisible across internet boundaries.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">How Ethernet Switches Forward Traffic</h3>
                    <p>
                      A switch maintains a <strong>Content Addressable Memory (CAM)</strong> table mapping learned source MAC addresses to physical switch ports:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-xs text-stone-700 pl-2">
                      <li><strong>Learning:</strong> When an incoming frame enters port 2 with source MAC <code>AA:BB:CC:11:22:33</code>, the switch records that MAC at port 2 with an aging timer (typically 300 seconds).</li>
                      <li><strong>Forwarding:</strong> If the destination MAC is already in the CAM table at port 5, the switch selectively forwards the frame only out of port 5.</li>
                      <li><strong>Flooding:</strong> If the destination MAC is unknown or is the broadcast address (<code>FF:FF:FF:FF:FF:FF</code>), the switch floods the frame out of all ports within the originating VLAN except the arrival port.</li>
                    </ol>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Address Resolution Protocol (ARP) & Attacks</h3>
                    <p>
                      In IPv4, <strong>ARP (RFC 826)</strong> resolves a known Layer 3 IPv4 address to an unknown Layer 2 physical MAC address on the local broadcast link.
                    </p>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs space-y-2">
                      <strong className="text-stone-900 block">ARP Poisoning / Spoofing Attack:</strong>
                      <p className="text-stone-700">
                        Because traditional ARP is stateless and unauthenticated, devices accept unsolicited ARP replies. An attacker can broadcast forged gratuitous ARP frames claiming: <em>"192.168.1.1 (Default Gateway) is at Attacker-MAC."</em> Clients update their ARP cache, redirecting all outbound traffic through the attacker's machine for Man-in-the-Middle (MitM) eavesdropping.
                      </p>
                      <div className="pt-2 border-t border-stone-200 text-emerald-900 font-medium">
                        <strong>Layer 2 Enterprise Defenses:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-0.5 text-stone-700">
                          <li><strong>Dynamic ARP Inspection (DAI):</strong> Managed switches intercept ARP packets and validate sender IP-to-MAC bindings against a trusted DHCP Snooping binding database.</li>
                          <li><strong>DHCP Snooping:</strong> Drops rogue DHCP server offers on untrusted switch access ports.</li>
                          <li><strong>Port Security:</strong> Restricts the maximum number of MAC addresses learned on a physical port to prevent CAM table exhaustion attacks.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.4 */}
              {selectedTopic === 4 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.4
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      IPv4, IPv6, and Subnetting Architecture
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      IPv4 structure, CIDR notation, private RFC 1918 allocations, IPv6 128-bit notation, SLAAC, and dual-stack defense.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">IPv4 Addressing & RFC 1918 Private Ranges</h3>
                    <p>
                      An IPv4 address is 32 bits long, represented as four 8-bit octets in dotted decimal notation (e.g. <code>192.168.10.25</code>). Because 32 bits yields only $2^{32} \approx 4.29 \text{ billion}$ addresses, the Internet relies on <strong>RFC 1918 Private Address Spaces</strong> behind NAT gateways:
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Address Range</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">CIDR Prefix</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Total Addresses</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Typical Deployment</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">10.0.0.0 – 10.255.255.255</td>
                            <td className="px-3.5 py-2 font-mono">10.0.0.0/8</td>
                            <td className="px-3.5 py-2">16,777,216</td>
                            <td className="px-3.5 py-2">Large Enterprise Intranets, Cloud VPCs (AWS/GCP)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">172.16.0.0 – 172.31.255.255</td>
                            <td className="px-3.5 py-2 font-mono">172.16.0.0/12</td>
                            <td className="px-3.5 py-2">1,048,576</td>
                            <td className="px-3.5 py-2">Mid-sized corporate networks, Docker bridges</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">192.168.0.0 – 192.168.255.255</td>
                            <td className="px-3.5 py-2 font-mono">192.168.0.0/16</td>
                            <td className="px-3.5 py-2">65,536</td>
                            <td className="px-3.5 py-2">Home routers, SOHO branch offices, testing labs</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">127.0.0.0 – 127.255.255.255</td>
                            <td className="px-3.5 py-2 font-mono">127.0.0.0/8</td>
                            <td className="px-3.5 py-2">16,777,216</td>
                            <td className="px-3.5 py-2">Loopback interface (localhost)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">169.254.0.0 – 169.254.255.255</td>
                            <td className="px-3.5 py-2 font-mono">169.254.0.0/16</td>
                            <td className="px-3.5 py-2">65,536</td>
                            <td className="px-3.5 py-2">APIPA Link-Local (auto-assigned on DHCP failure)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Subnetting Mechanics & Worked Example</h3>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs">
                      <strong className="text-stone-900 block">Worked Example: 192.168.10.0/26</strong>
                      <p className="text-stone-700">
                        • <strong>CIDR Prefix (/26):</strong> 26 bits network, $32 - 26 = 6$ bits host portion.
                        <br />• <strong>Subnet Mask:</strong> 255.255.255.192 (binary: <code>11111111.11111111.11111111.11000000</code>).
                        <br />• <strong>Total Addresses:</strong> $2^6 = 64$.
                        <br />• <strong>Network Identifier:</strong> 192.168.10.0 (all host bits 0).
                        <br />• <strong>Broadcast Address:</strong> 192.168.10.63 (all host bits 1).
                        <br />• <strong>Usable Host Range:</strong> 192.168.10.1 through 192.168.10.62 (62 assignable hosts).
                        <br />• <strong>Next Subnet:</strong> Begins at 192.168.10.64/26.
                      </p>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">IPv6 Architecture Fundamentals</h3>
                    <p>
                      IPv6 addresses are <strong>128 bits</strong> long ($2^{128} \approx 3.4 \times 10^{38}$ addresses), written as eight groups of four hexadecimal digits separated by colons (e.g. <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-white">
                        <strong className="text-stone-900 block">Link-Local (fe80::/10):</strong>
                        Mandatory on all IPv6 interfaces. Used strictly for local-link discovery and routing protocol communication; never forwarded across routers.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-white">
                        <strong className="text-stone-900 block">Global Unicast (2000::/3):</strong>
                        Publicly routable internet addresses assigned to servers, cloud endpoints, and enterprise edge routers.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-white">
                        <strong className="text-stone-900 block">No Broadcasts in IPv6:</strong>
                        IPv6 completely replaces ARP and broadcast frames with <strong>Multicast</strong> and the <strong>Neighbor Discovery Protocol (NDP)</strong>.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-white">
                        <strong className="text-stone-900 block">SLAAC (Stateless Autoconfig):</strong>
                        Hosts automatically generate their own 128-bit address using router advertisement prefix and interface identifier without requiring a DHCP server.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.5 */}
              {selectedTopic === 5 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.5
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      TCP, UDP, Ports, and Transport Protocols
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Connection establishment, 3-way handshake, flow control, UDP datagrams, common ports, and socket 5-tuples.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">TCP (Transmission Control Protocol)</h3>
                    <p>
                      TCP (RFC 793 / RFC 9293) provides a reliable, ordered, full-duplex byte stream between communicating endpoints. To ensure reliability over an unreliable IP network, TCP implements:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-2">
                      <li><strong>Sequence Numbers:</strong> Track individual byte offsets to reassemble packets in correct order.</li>
                      <li><strong>Acknowledgments (ACK):</strong> Confirm receipt of byte streams; trigger retransmission on lost packets.</li>
                      <li><strong>Flow Control (Sliding Window):</strong> Receiver informs sender of available buffer capacity to prevent memory exhaustion.</li>
                      <li><strong>Congestion Control:</strong> Dynamically throttles transmission rates based on measured latency and packet loss (e.g. CUBIC, BBR).</li>
                    </ul>

                    <h3 className="text-base font-bold text-stone-900 pt-2">The TCP Three-Way Handshake</h3>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs font-mono">
                      <div>1. Client  --[ SYN (Seq=x) ]------------&gt; Server  (Client enters SYN-SENT)</div>
                      <div>2. Server  &lt;-[ SYN-ACK (Seq=y, Ack=x+1) ]- Client  (Server enters SYN-RCVD)</div>
                      <div>3. Client  --[ ACK (Ack=y+1) ]------------&gt; Server  (Both enter ESTABLISHED)</div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">TCP vs. UDP Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Property</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">TCP (RFC 793)</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">UDP (RFC 768)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Connection Model</td>
                            <td className="px-3.5 py-2">Connection-oriented (Requires 3-way handshake)</td>
                            <td className="px-3.5 py-2">Connectionless (No prior handshake)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Delivery Guarantee</td>
                            <td className="px-3.5 py-2">Guaranteed delivery via retransmissions</td>
                            <td className="px-3.5 py-2">Best-effort; packets may drop or arrive out of order</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Header Overhead</td>
                            <td className="px-3.5 py-2">20–60 bytes (flags, window, options)</td>
                            <td className="px-3.5 py-2">8 bytes (src port, dst port, length, checksum)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Typical Protocols</td>
                            <td className="px-3.5 py-2">HTTPS (443), SSH (22), BGP (179), SMB (445)</td>
                            <td className="px-3.5 py-2">DNS (53), DHCP (67/68), NTP (123), QUIC (443)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Network Sockets & The Five-Tuple</h3>
                    <p className="text-xs text-stone-700">
                      Every active TCP/UDP network communication is uniquely identified in the operating system kernel and firewall state tables by its <strong>five-tuple</strong>:
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-center text-xs">
                      [ Protocol (TCP/UDP) ] + [ Source IP ] + [ Source Port ] + [ Destination IP ] + [ Destination Port ]
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.6 */}
              {selectedTopic === 6 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.6
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Routing, NAT, VLANs, and Network Segmentation
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Routing tables, longest prefix matching, NAT/PAT overload, VLAN 802.1Q tags, inter-VLAN firewalls, and DMZ design.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">Routing Fundamentals & Longest Prefix Match</h3>
                    <p>
                      Routers inspect destination IP addresses in incoming packets and consult their routing table to determine the optimal next-hop interface. When multiple routes match a destination, the router selects the route with the most specific (longest) prefix mask:
                    </p>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 text-xs font-mono space-y-1">
                      <div>Destination IP: <code>10.0.5.14</code></div>
                      <div>Route A: <code>10.0.0.0/16</code>  via Gateway 1</div>
                      <div>Route B: <code>10.0.5.0/24</code>   via Gateway 2  &lt;-- MATCHED! (Longer prefix: 24 &gt; 16)</div>
                      <div>Default: <code>0.0.0.0/0</code>    via Internet Gateway (Fallback when no specific route matches)</div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">NAT vs. PAT (Port Address Translation)</h3>
                    <p>
                      <strong>Port Address Translation (PAT / NAT Overload)</strong> maps thousands of private internal IP sockets to a single public IPv4 address by modifying Layer 4 transport ports. When an internal client (<code>192.168.1.50:54128</code>) sends a packet to the internet, the router rewrites the source to <code>203.0.113.10:60001</code> and logs the translation in its NAT state table.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">VLANs and Enterprise Network Segmentation</h3>
                    <p>
                      A <strong>Virtual Local Area Network (VLAN - IEEE 802.1Q)</strong> partitions a physical switch into logically isolated broadcast domains:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">User Workstation VLAN:</strong>
                        Laptops and office workstations. Permitted outbound internet access, but denied direct connectivity to database subnets.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">DMZ (Demilitarized Zone):</strong>
                        Public-facing reverse proxies and web servers. Isolated between external internet firewalls and internal production subnets.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Database & Core VLAN:</strong>
                        Private storage and relational databases. Reachable ONLY from authenticated application tier servers over designated ports.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.7 */}
              {selectedTopic === 7 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.7
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      DNS Architecture and Security
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Hierarchical resolution, standard record types, TTL caching, DNS spoofing, tunneling, DNSSEC, DoH, and DoT.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">How the Domain Name System Operates</h3>
                    <p>
                      The <strong>Domain Name System (DNS - RFC 1034 / 1035)</strong> provides the distributed naming hierarchy that translates human-readable hostnames into numerical IP addresses. Resolution proceeds in five stages:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-xs text-stone-700 pl-2">
                      <li><strong>Stub Resolver / OS Cache:</strong> Client checks local cache and <code>/etc/hosts</code>.</li>
                      <li><strong>Recursive Resolver:</strong> Queries upstream on client's behalf (e.g. 1.1.1.1, ISP resolver).</li>
                      <li><strong>Root Nameserver ('.'):</strong> Directs the recursive resolver to the authoritative TLD servers.</li>
                      <li><strong>Top-Level Domain (TLD) Nameserver:</strong> (e.g. <code>.com</code>, <code>.org</code>) refers to the domain's authoritative nameserver.</li>
                      <li><strong>Authoritative Nameserver:</strong> Returns the actual resource record (A, AAAA, CNAME) with a Time-To-Live (TTL).</li>
                    </ol>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Standard DNS Resource Records</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Record</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Purpose</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Example Payload</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">A</td>
                            <td className="px-3.5 py-2">Maps hostname to IPv4 address</td>
                            <td className="px-3.5 py-2 font-mono">prepspaces.com. 300 IN A 104.21.72.15</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">AAAA</td>
                            <td className="px-3.5 py-2">Maps hostname to IPv6 address</td>
                            <td className="px-3.5 py-2 font-mono">prepspaces.com. 300 IN AAAA 2606:4700::6815:480f</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">CNAME</td>
                            <td className="px-3.5 py-2">Canonical alias pointing one name to another</td>
                            <td className="px-3.5 py-2 font-mono">www.prepspaces.com. CNAME prepspaces.com.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">MX</td>
                            <td className="px-3.5 py-2">Designates mail exchange servers for the domain</td>
                            <td className="px-3.5 py-2 font-mono">10 aspmx.l.google.com.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">TXT</td>
                            <td className="px-3.5 py-2">Arbitrary text (SPF email security, verification)</td>
                            <td className="px-3.5 py-2 font-mono">&quot;v=spf1 include:_spf.google.com ~all&quot;</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">PTR</td>
                            <td className="px-3.5 py-2">Reverse DNS lookup (IP to hostname)</td>
                            <td className="px-3.5 py-2 font-mono">15.72.21.104.in-addr.arpa. PTR prepspaces.com.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">DNS Security Threats & Defensive Controls</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">DNS Cache Poisoning / Spoofing:</strong>
                        Adversary injects forged responses with matching transaction IDs into a recursive resolver cache, redirecting legitimate users to phishing servers.
                        <div className="mt-1 text-emerald-800 font-semibold">Defense: DNSSEC cryptographic record signing.</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">DNS Tunneling Exfiltration:</strong>
                        Malware encodes stolen corporate data into subdomains (e.g. <code>base64data.attacker-c2.com</code>) to bypass egress firewalls.
                        <div className="mt-1 text-emerald-800 font-semibold">Defense: DNS firewalls monitoring query length and Shannon entropy.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.8 */}
              {selectedTopic === 8 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.8
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      HTTP, HTTPS, TLS, and Web Communication
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      HTTP methods, status codes, cookies (Secure/HttpOnly), TLS handshakes, certificate authorities, and web security boundaries.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">HTTP Methods and Status Codes</h3>
                    <p>
                      HTTP (Hypertext Transfer Protocol) is the request-response application protocol powering the World Wide Web:
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Category</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Status Code</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Meaning & Technical Consequence</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-emerald-800">2xx Success</td>
                            <td className="px-3.5 py-2 font-mono">200 OK / 201 Created</td>
                            <td className="px-3.5 py-2">Request succeeded; server emitted expected resource representation</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-blue-800">3xx Redirection</td>
                            <td className="px-3.5 py-2 font-mono">301 Moved / 304 Not Modified</td>
                            <td className="px-3.5 py-2">Browser directed to new location, or local cache remains valid</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-amber-800">4xx Client Error</td>
                            <td className="px-3.5 py-2 font-mono">401 Unauthorized</td>
                            <td className="px-3.5 py-2">Authentication credentials missing or invalid</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-amber-800">4xx Client Error</td>
                            <td className="px-3.5 py-2 font-mono">403 Forbidden</td>
                            <td className="px-3.5 py-2">Authenticated user lacks permission (authorization failure)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-amber-800">4xx Client Error</td>
                            <td className="px-3.5 py-2 font-mono">429 Too Many Requests</td>
                            <td className="px-3.5 py-2">Client rate limit exceeded (API throttling)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-rose-800">5xx Server Error</td>
                            <td className="px-3.5 py-2 font-mono">500 Internal / 502 Bad Gateway</td>
                            <td className="px-3.5 py-2">Application unhandled exception or upstream backend reverse-proxy failure</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Security-Critical Cookie Attributes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Secure Flag:</strong>
                        Instructs the browser to transmit the cookie ONLY over encrypted HTTPS connections, preventing plaintext leakage.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">HttpOnly Flag:</strong>
                        Prevents client-side scripts (e.g. <code>document.cookie</code>) from reading the cookie, mitigating Cross-Site Scripting (XSS) session theft.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">SameSite=Strict/Lax:</strong>
                        Prevents browser from sending session cookies with cross-site requests, mitigating Cross-Site Request Forgery (CSRF).
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.9 */}
              {selectedTopic === 9 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.9
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Network Troubleshooting and Packet Analysis
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Standard diagnostic tools (ping, traceroute, dig, curl, Wireshark), systematic workflow, and symptom triage.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      Systematic network troubleshooting requires isolating issues layer by layer. Randomly rebooting servers or reconfiguring firewall rules introduces instability and risks concealing security incidents.
                    </p>

                    <h3 className="text-base font-bold text-stone-900">Essential Diagnostic Tool Suite</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">ping (ICMP Echo):</strong>
                        Validates Layer 3 reachability and measures round-trip latency.
                        <div className="font-mono text-[11px] text-stone-600 mt-1">ping -c 4 192.168.1.1</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">traceroute / tracert:</strong>
                        Discovers the path of intermediate router hops using incrementing TTLs.
                        <div className="font-mono text-[11px] text-stone-600 mt-1">traceroute -n prepspaces.com</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">dig / nslookup:</strong>
                        Inspects DNS query responses, authoritative servers, and record TTLs.
                        <div className="font-mono text-[11px] text-stone-600 mt-1">dig prepspaces.com A +trace</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">curl:</strong>
                        Tests Layer 7 HTTP/HTTPS connections, response codes, and TLS certificates.
                        <div className="font-mono text-[11px] text-stone-600 mt-1">curl -Iv https://prepspaces.com</div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Interpreting Diagnostic Symptoms</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Observed Symptom</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Likely Root Cause</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Verification Command</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-medium text-stone-900">169.254.x.x IP Address assigned</td>
                            <td className="px-3.5 py-2">DHCP server unreachable or exhausted pool</td>
                            <td className="px-3.5 py-2 font-mono">journalctl -u NetworkManager</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-medium text-stone-900">Ping to IP works, but hostname fails</td>
                            <td className="px-3.5 py-2">DNS resolver failure or missing /etc/resolv.conf</td>
                            <td className="px-3.5 py-2 font-mono">dig @1.1.1.1 domain.com</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-medium text-stone-900">Host responds to ping, but web fails</td>
                            <td className="px-3.5 py-2">Web server daemon stopped, port 443 firewall block</td>
                            <td className="px-3.5 py-2 font-mono">ss -tuln | grep :443</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-medium text-stone-900">Connection times out on remote port</td>
                            <td className="px-3.5 py-2">Stateful firewall dropped SYN packets silently</td>
                            <td className="px-3.5 py-2 font-mono">nc -zvw3 IP 443</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2.10 */}
              {selectedTopic === 10 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-8">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 2.10
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Network Security, Threat Detection, and Practical Lab
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Firewalls, IDS/IPS, practical lab tasks, report template, and scenario questions.
                    </p>
                  </div>

                  {/* Practical Lab Checklist */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 md:p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-orange-600 text-white">
                            Practical Lab
                          </span>
                          <h3 className="text-sm font-bold text-stone-900">
                            Investigate a Network Connection & Diagnose Connectivity
                          </h3>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">
                          Environment: Your local workstation or an isolated VirtualBox training lab.
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-stone-700 bg-white px-3 py-1 rounded-full border border-stone-200">
                          {completedTasksCount} of 7 tasks completed
                        </span>
                        <button
                          type="button"
                          onClick={resetChecklist}
                          className="text-xs text-stone-500 hover:text-stone-900 underline cursor-pointer"
                        >
                          Reset checklist
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-orange-600 h-full transition-all duration-300"
                        style={{ width: `${(completedTasksCount / 7) * 100}%` }}
                      />
                    </div>

                    {/* Tasks List */}
                    <div className="space-y-2">
                      {[
                        { key: "task1", title: "Task 1 — Record local network configuration (IP address, prefix/mask, default gateway, and DNS resolver)." },
                        { key: "task2", title: "Task 2 — Inspect routing table and identify which route is used to reach the training server." },
                        { key: "task3", title: "Task 3 — Query the training hostname with dig/nslookup and record returned addresses and TTL." },
                        { key: "task4", title: "Task 4 — Inspect HTTP(S) headers and TLS certificate details using curl or browser dev tools." },
                        { key: "task5", title: "Task 5 — Capture packets in Wireshark and observe the TCP 3-way handshake and TLS negotiation." },
                        { key: "task6", title: "Task 6 — Diagnose a simulated failure (e.g. incorrect DNS resolver or firewall port drop) and identify the symptom." },
                        { key: "task7", title: "Task 7 — Document findings in a structured network investigation report." },
                      ].map((t) => (
                        <label
                          key={t.key}
                          className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 bg-white hover:bg-orange-50/40 cursor-pointer transition text-xs"
                        >
                          <input
                            type="checkbox"
                            checked={labTasks[t.key]}
                            onChange={() => toggleLabTask(t.key)}
                            className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-stone-300"
                          />
                          <span className={labTasks[t.key] ? "line-through text-stone-400" : "text-stone-800 font-medium"}>
                            {t.title}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 10 Scenario-Based Questions Accordion */}
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 md:p-6 space-y-4">
                    <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                      Scenario-Based Technical Questions & Solutions
                    </h3>
                    <p className="text-xs text-stone-500">
                      Expand each question to reveal technical rationales and real-world cybersecurity interview reasoning.
                    </p>

                    <div className="space-y-2 pt-2">
                      {scenarioFaqs.map((faq) => {
                        const isOpen = expandedFaq === faq.id;
                        return (
                          <div
                            key={faq.id}
                            className="rounded-xl border border-stone-200 overflow-hidden transition"
                          >
                            <button
                              type="button"
                              onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                              className="w-full text-left p-3.5 bg-stone-50 hover:bg-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 transition"
                            >
                              <span>{faq.id}. {faq.q}</span>
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="p-4 bg-white text-xs leading-relaxed text-stone-700 border-t border-stone-200">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Copyable Network Investigation Report Template */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-900 text-stone-100 p-5 md:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <div>
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Deliverable Artifact
                        </span>
                        <h3 className="text-sm font-bold text-white mt-0.5">
                          Network Investigation Report Template
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          copyCode(
                            `# Network Investigation Report

**Investigation Date:** 2026-10-15  
**Investigator:** Security Analyst (Prepspaces Lab)  
**Objective:** Diagnose failed access to internal training portal  
**Environment:** Local Isolated Lab (192.168.10.0/26)  

---

## 1. Environment Baseline
- **Source Endpoint:** 192.168.10.25 (eth0)
- **Subnet Mask:** 255.255.255.192 (/26)
- **Default Gateway:** 192.168.10.1 (MAC: 00:0c:29:aa:bb:cc)
- **Configured Resolver:** 192.168.10.2
- **Destination Target:** portal.lab.internal (Port 443)

## 2. Technical Evidence & Observations
1. **Layer 3 Reachability:** \`ping -c 2 192.168.10.1\` succeeded (0.4ms RTT, 0% loss).
2. **DNS Resolution:** \`dig portal.lab.internal A\` returned \`SERVFAIL\`.
3. **Packet Capture:** Wireshark capture on \`eth0\` revealed query dispatched to 192.168.10.2:53 with no DNS response received (ICMP Port Unreachable returned).
4. **Direct IP HTTP Check:** \`curl -Iv https://192.168.10.50/\` succeeded with \`HTTP/2 200 OK\`.

## 3. Root Cause Analysis
The local DNS resolver service (\`named\` / BIND9) on 192.168.10.2 was halted due to an invalid zone file syntax error. Network routing and server application services were completely healthy.

## 4. Remediation & Verification
1. Restarted DNS resolver service after correcting zone serial syntax.
2. Re-tested: \`dig portal.lab.internal A\` immediately returned \`192.168.10.50\` (TTL = 300s).
3. Verified browser opens \`https://portal.lab.internal\` without errors.`,
                            "net-investigation-report"
                          )
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition"
                      >
                        {copiedCodeId === "net-investigation-report" ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-stone-400" />
                            <span>Copy Markdown</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="text-xs font-mono text-stone-300 overflow-x-auto max-h-64 p-3 rounded-xl bg-stone-950/80 border border-stone-800 leading-relaxed">
{`# Network Investigation Report

**Investigation Date:** 2026-10-15  
**Investigator:** Security Analyst (Prepspaces Lab)  
**Objective:** Diagnose failed access to internal training portal  
**Environment:** Local Isolated Lab (192.168.10.0/26)  

---

## 1. Environment Baseline
- **Source Endpoint:** 192.168.10.25 (eth0)
- **Subnet Mask:** 255.255.255.192 (/26)
- **Default Gateway:** 192.168.10.1 (MAC: 00:0c:29:aa:bb:cc)
- **Configured Resolver:** 192.168.10.2
- **Destination Target:** portal.lab.internal (Port 443)...`}
                    </pre>
                  </div>

                  {/* Recommended Academic & Industry Learning Resources */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 md:p-6 space-y-4">
                    <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                      Recommended Learning Resources
                    </h3>
                    <p className="text-xs text-stone-600">
                      These resources complement the independently developed Prepspaces networking curriculum:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                      <a
                        href="https://www.ietf.org/standards/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>IETF Internet Standards</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          RFC specifications for IPv4, IPv6, TCP, UDP, DNS, and TLS protocols.
                        </p>
                      </a>

                      <a
                        href="https://www.wireshark.org/docs/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>Wireshark Documentation</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Protocol dissection guides, capture filters, and packet troubleshooting.
                        </p>
                      </a>

                      <a
                        href="https://www.cloudflare.com/learning/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>Cloudflare Learning Center</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Educational articles on DNS, BGP routing, TLS 1.3, DDoS, and HTTP/3.
                        </p>
                      </a>

                      <a
                        href="https://www.netacad.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>Cisco Networking Academy</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Enterprise switching, routing protocols, and CCNA-level networking basics.
                        </p>
                      </a>

                      <a
                        href="https://csrc.nist.gov/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>NIST Cybersecurity Resources</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          NIST Special Publications on secure network architecture and zero trust.
                        </p>
                      </a>

                      <a
                        href="https://owasp.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>OWASP Application Security</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Web application guidelines, secure headers, cookies, and TLS best practices.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: INTERACTIVE SUBNET CALCULATOR (CIDR /0 to /32)              */}
        {/* ================================================================== */}
        {activeTab === "subnet-calc" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 1
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Interactive IPv4 Subnet Calculator & CIDR Planner
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Enter an IPv4 address and adjust the prefix length to calculate the containing network, broadcast address, and usable host range.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    IPv4 Address:
                  </label>
                  <input
                    type="text"
                    value={inputIp}
                    onChange={(e) => setInputIp(e.target.value)}
                    placeholder="e.g. 192.168.10.25"
                    className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 font-mono text-xs font-medium text-stone-900 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />

                  <div className="mt-4">
                    <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                      <span>Prefix Length (CIDR):</span>
                      <span className="font-mono text-orange-600">/{cidrPrefix}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="32"
                      value={cidrPrefix}
                      onChange={(e) => setCidrPrefix(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>/0 (Internet)</span>
                      <span>/8</span>
                      <span>/16</span>
                      <span>/24 (Class C)</span>
                      <span>/32 (Host)</span>
                    </div>
                  </div>
                </div>

                {/* Subnet Calculation Results */}
                <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="font-bold text-stone-600">Network Address:</span>
                    <span className="font-mono font-bold text-stone-900">{subnetResult.network}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="font-bold text-stone-600">Subnet Mask:</span>
                    <span className="font-mono text-stone-900">{subnetResult.mask}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="font-bold text-stone-600">Total Addresses:</span>
                    <span className="font-mono text-stone-900">{subnetResult.total}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="font-bold text-stone-600">Traditional Usable Hosts:</span>
                    <span className="font-mono font-bold text-orange-600">{subnetResult.usable}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="font-bold text-stone-600">First Usable Address:</span>
                    <span className="font-mono text-stone-900">{subnetResult.first}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="font-bold text-stone-600">Last Usable Address:</span>
                    <span className="font-mono text-stone-900">{subnetResult.last}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-bold text-stone-600">Broadcast Address:</span>
                    <span className="font-mono text-stone-900">{subnetResult.broadcast}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: TCP 3-WAY HANDSHAKE & SYN FLOOD SIMULATOR                   */}
        {/* ================================================================== */}
        {activeTab === "tcp-handshake" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Simulator 2
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                    TCP Three-Way Handshake & SYN-Flood Denial of Service
                  </h2>
                  <p className="mt-1 text-xs text-stone-500">
                    Observe state transitions during normal TCP connection setup versus an adversary executing a SYN-flood attack to exhaust the server backlog queue.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={stepForwardHandshake}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    {handshakeStep === 4 ? "Reset Handshake" : "Next Packet Step"}
                  </button>
                </div>
              </div>

              {/* Handshake Visualizer */}
              <div className="mt-6 p-6 rounded-2xl border border-stone-200 bg-stone-50/80 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-xs">
                  {/* Client Column */}
                  <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                    <div className="font-bold text-stone-900 flex items-center justify-center gap-2">
                      <Monitor className="w-4 h-4 text-orange-600" />
                      Client (192.168.10.25:54128)
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      State:{" "}
                      <span className="font-bold text-stone-900">
                        {handshakeStep === 0
                          ? "CLOSED"
                          : handshakeStep === 1 || handshakeStep === 2
                          ? "SYN-SENT"
                          : "ESTABLISHED"}
                      </span>
                    </div>
                  </div>

                  {/* Server Column */}
                  <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                    <div className="font-bold text-stone-900 flex items-center justify-center gap-2">
                      <Server className="w-4 h-4 text-emerald-600" />
                      Server (104.21.72.15:443)
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      State:{" "}
                      <span className="font-bold text-stone-900">
                        {handshakeStep === 0 || handshakeStep === 1
                          ? "LISTEN"
                          : handshakeStep === 2
                          ? "SYN-RECEIVED"
                          : "ESTABLISHED"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Packet In Flight Banner */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white text-xs font-mono space-y-2">
                  <div className="font-bold text-stone-900 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-orange-600" />
                    Current Step: {handshakeStep} of 4
                  </div>
                  {handshakeStep === 0 && (
                    <p className="text-stone-500">Sockets initialized. Ready to initiate connection.</p>
                  )}
                  {handshakeStep === 1 && (
                    <div className="p-2.5 rounded bg-orange-50 text-orange-950 border border-orange-200">
                      <strong>Client -&gt; Server [SYN]:</strong> Flags: [SYN], Seq = 1000, Win = 65535, MSS = 1460.
                      Client allocates Transmission Control Block (TCB).
                    </div>
                  )}
                  {handshakeStep === 2 && (
                    <div className="p-2.5 rounded bg-blue-50 text-blue-950 border border-blue-200">
                      <strong>Server -&gt; Client [SYN, ACK]:</strong> Flags: [SYN, ACK], Seq = 5000, Ack = 1001.
                      Server records half-open connection in its SYN backlog queue.
                    </div>
                  )}
                  {handshakeStep === 3 && (
                    <div className="p-2.5 rounded bg-emerald-50 text-emerald-950 border border-emerald-200">
                      <strong>Client -&gt; Server [ACK]:</strong> Flags: [ACK], Seq = 1001, Ack = 5001.
                      Handshake complete; both endpoints ready for TLS Client Hello.
                    </div>
                  )}
                  {handshakeStep === 4 && (
                    <div className="p-2.5 rounded bg-emerald-100 text-emerald-950 font-bold border border-emerald-300">
                      ✓ CONNECTION ESTABLISHED: Both sockets active. Application payload transfer enabled.
                    </div>
                  )}
                </div>

                {/* SYN Flood & Defense Demonstration */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-stone-900">
                      Simulate SYN-Flood Denial-of-Service Attack:
                    </span>
                    <p className="text-[11px] text-stone-500">
                      Adversary sends thousands of spoofed SYNs and never replies with ACK, overflowing server backlog memory.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSynFloodActive(!synFloodActive)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        synFloodActive
                          ? "bg-rose-600 text-white"
                          : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                      }`}
                    >
                      {synFloodActive ? "Stop SYN Flood" : "Trigger SYN Flood"}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSynCookiesEnabled(!synCookiesEnabled)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        synCookiesEnabled
                          ? "bg-emerald-600 text-white"
                          : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                      }`}
                    >
                      {synCookiesEnabled ? "SYN Cookies Active" : "Enable SYN Cookies"}
                    </button>
                  </div>
                </div>

                {synFloodActive && (
                  <div
                    className={`p-3 rounded-xl border text-xs font-medium ${
                      synCookiesEnabled
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : "bg-rose-50 border-rose-300 text-rose-950"
                    }`}
                  >
                    {synCookiesEnabled
                      ? "✓ SYN Cookies Protected: Server encodes sequence number using cryptographic hash of IP/port 5-tuple; zero state is held in server memory until final ACK arrives!"
                      : "⚠ WARNING: Backlog Queue Exhausted! Legitimate clients are experiencing connection timeouts due to unmitigated half-open SYN connections."}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: DNS HIERARCHICAL RESOLUTION VISUALIZER                      */}
        {/* ================================================================== */}
        {activeTab === "dns-tracer" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 3
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Hierarchical DNS Resolution Visualizer
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Trace how an recursive DNS query travels from client cache to Root, TLD (.com), and Authoritative nameservers.
                </p>
              </div>

              {/* Stepper Navigation */}
              <div className="mt-6 flex items-center justify-between overflow-x-auto pb-2 gap-2">
                {dnsSteps.map((step, idx) => (
                  <button
                    key={step.level}
                    type="button"
                    onClick={() => setDnsResolutionStep(idx)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                      dnsResolutionStep === idx
                        ? "bg-stone-900 text-white shadow-xs"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {step.level.split(". ")[0]}. {step.level.split(" ")[1]}
                  </button>
                ))}
              </div>

              {/* Step Card */}
              {(() => {
                const s = dnsSteps[dnsResolutionStep];
                return (
                  <div className="mt-6 p-6 rounded-2xl border border-stone-200 bg-stone-50/80 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                      <h3 className="text-base font-bold text-stone-900">{s.level}</h3>
                      <span className="text-xs font-mono font-bold text-orange-600">
                        Query: {dnsQueryDomain} (Type: A)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-white space-y-1">
                        <strong className="text-stone-900 block">Resolution Action:</strong>
                        <p className="text-stone-700">{s.action}</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-white space-y-1">
                        <strong className="text-stone-900 block">Server Telemetry Status:</strong>
                        <p className="text-stone-700">{s.status}</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-medium">
                      <strong>Referral / Next-Hop:</strong> {s.delegation}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: CLI NETWORKING DIAGNOSTICS SANDBOX                          */}
        {/* ================================================================== */}
        {activeTab === "cli-sandbox" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 4
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Diagnostic CLI Sandbox (ping, traceroute, dig, curl)
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Execute live-simulated Linux diagnostic utilities to troubleshoot network reachability, inspect hops, query DNS records, and test TLS status headers.
                </p>
              </div>

              {/* Command Selection Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {Object.entries(cliPresets).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => runCliCommand(key)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                      selectedCliCommand === key
                        ? "bg-stone-900 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    {item.label.split(":")[0]}
                  </button>
                ))}
              </div>

              {/* Terminal Window */}
              <div className="mt-4 rounded-2xl border border-stone-800 bg-stone-950 text-stone-100 overflow-hidden shadow-md">
                <div className="bg-stone-900/90 px-4 py-2.5 border-b border-stone-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-stone-400 text-[11px]">
                      engineer@prepspaces-security-box: ~
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">Simulated Terminal</span>
                </div>

                <div className="p-4 md:p-6 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px]">
                  {isExecutingCli ? (
                    <div className="flex items-center gap-2 text-orange-400">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{cliConsoleOutput}</span>
                    </div>
                  ) : (
                    <pre className="text-stone-300 whitespace-pre-wrap">
                      {cliConsoleOutput || `$ ${cliPresets[selectedCliCommand].cmd}\n\n${cliPresets[selectedCliCommand].output}`}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Nova AI Mentor Sidecar Drawer */}
      {showAiTutor && (
        <LearningRo
          courseName="Cybersecurity Master Course"
          moduleName="Module 2: Networking Fundamentals, TCP/IP, DNS, HTTP/HTTPS, and Protocols"
          currentTopic={topics.find((t) => t.id === (selectedTopic || 1))?.title || "Overview"}
          onClose={() => setShowAiTutor(false)}
        />
      )}
    </div>
  );
}
