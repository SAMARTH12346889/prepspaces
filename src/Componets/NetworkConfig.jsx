import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Layers,
  Terminal,
  Shield,
  Server,
  Network,
  Award,
  AlertTriangle,
  Sparkles,
  Workflow,
  FileCode,
  ShieldCheck,
  RotateCcw,
  Router as RouterIcon,
  Copy,
  Check,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Cpu,
  Monitor,
  Eye,
  Radio,
  FileText,
  Key,
  Globe,
  Lock,
  Zap,
  Play,
  Sliders,
  Share2,
  Split,
  Database,
  ArrowDownRight,
  Maximize2,
  Minimize2,
  ListChecks,
  RefreshCw,
  GitFork,
  Activity,
  Compass,
  ArrowUpRight,
  Wifi,
  Filter,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 8                         */
/* ICMP, ARP, DHCP AND NETWORK CONFIGURATION                                  */
/* -------------------------------------------------------------------------- */

export default function NetworkConfig() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | dora-sim | arp-sim | diag-sim | tcpdump-sim | sec-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("8.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1 STATE: DHCP DORA PROTOCOL & LEASE TIMELINE ENGINE              */
  /* -------------------------------------------------------------------------- */
  const [doraStep, setDoraStep] = useState(0); // 0: Idle, 1: Discover, 2: Offer, 3: Request, 4: ACK
  const [leasePercent, setLeasePercent] = useState(0); // 0 to 100%
  const [isDoraComplete, setIsDoraComplete] = useState(false);

  const doraMessages = [
    {
      step: 1,
      name: "DHCPDISCOVER",
      type: "Broadcast (255.255.255.255)",
      srcIp: "0.0.0.0",
      dstIp: "255.255.255.255",
      srcPort: 68,
      dstPort: 67,
      desc: "Client transmits broadcast on local wire asking: 'Are there any DHCP servers available on this network? Here is my MAC 00:AA:00:10:25:01.'",
    },
    {
      step: 2,
      name: "DHCPOFFER",
      type: "Unicast / Broadcast",
      srcIp: "192.168.10.1",
      dstIp: "192.168.10.25 (or Broadcast)",
      srcPort: 67,
      dstPort: 68,
      desc: "DHCP Server offers lease: IP 192.168.10.25, Mask 255.255.255.0, Gateway 192.168.10.1, DNS 192.168.10.53, Lease Duration: 86400s (24h).",
    },
    {
      step: 3,
      name: "DHCPREQUEST",
      type: "Broadcast (255.255.255.255)",
      srcIp: "0.0.0.0",
      dstIp: "255.255.255.255",
      srcPort: 68,
      dstPort: 67,
      desc: "Client broadcasts acceptance of Server 192.168.10.1's offer for 192.168.10.25, politely declining any competing offers from other servers.",
    },
    {
      step: 4,
      name: "DHCPACK",
      type: "Unicast / Broadcast",
      srcIp: "192.168.10.1",
      dstIp: "192.168.10.25",
      srcPort: 67,
      dstPort: 68,
      desc: "Server acknowledges binding and records lease in its database. Client binds 192.168.10.25 to interface and activates IP stack.",
    },
  ];

  const advanceDora = () => {
    if (doraStep < 4) {
      const next = doraStep + 1;
      setDoraStep(next);
      if (next === 4) {
        setIsDoraComplete(true);
        setLeasePercent(0);
      }
    }
  };

  const resetDora = () => {
    setDoraStep(0);
    setIsDoraComplete(false);
    setLeasePercent(0);
  };

  const leaseStatus = useMemo(() => {
    if (!isDoraComplete) return { label: "No Lease (Unconfigured / APIPA Fallback)", color: "text-stone-400" };
    if (leasePercent < 50) return { label: "Active Healthy Lease (T1 Timer Running)", color: "text-emerald-700" };
    if (leasePercent < 87.5) return { label: "T1 Reached (50%): Unicast Renewal Request to Server", color: "text-amber-700" };
    if (leasePercent < 100) return { label: "T2 Reached (87.5%): Broadcast Rebind to Any DHCP Server", color: "text-orange-700" };
    return { label: "Lease Expired (100%): Interface Discarded Address! Falling back to APIPA 169.254.x.x", color: "text-rose-700 font-bold" };
  }, [leasePercent, isDoraComplete]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2 STATE: ARP RESOLUTION, NEIGHBOR CACHE & SPOOFING SANDBOX       */
  /* -------------------------------------------------------------------------- */
  const [arpState, setArpState] = useState("empty"); // empty | querying | resolved | poisoned
  const [arpLog, setArpLog] = useState([]);

  const triggerArpResolution = () => {
    setArpState("querying");
    setArpLog([
      {
        time: "0.000",
        type: "ARP Request",
        srcMac: "00:AA:00:10:25:01",
        dstMac: "ff:ff:ff:ff:ff:ff (Broadcast)",
        info: "Who has 192.168.10.1? Tell 192.168.10.25",
      },
    ]);

    setTimeout(() => {
      setArpState("resolved");
      setArpLog((prev) => [
        ...prev,
        {
          time: "0.002",
          type: "ARP Reply",
          srcMac: "00:AA:00:10:00:01 (Gateway R1)",
          dstMac: "00:AA:00:10:25:01 (Host PC-A)",
          info: "192.168.10.1 is at 00:AA:00:10:00:01 (Entry installed as REACHABLE)",
        },
      ]);
    }, 700);
  };

  const triggerArpSpoof = () => {
    setArpState("poisoned");
    setArpLog((prev) => [
      ...prev,
      {
        time: "0.005",
        type: "Gratuitous ARP (Forged)",
        srcMac: "00:DE:AD:BE:EF:66 (Attacker Kali Linux)",
        dstMac: "00:AA:00:10:25:01 (Host PC-A)",
        info: "MALICIOUS: 192.168.10.1 is at 00:DE:AD:BE:EF:66! PC-A ARP table overwritten with Attacker MAC!",
      },
    ]);
  };

  const clearArp = () => {
    setArpState("empty");
    setArpLog([]);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3 STATE: LAYER-BY-LAYER HOST CONNECTIVITY DIAGNOSTIC SANDBOX     */
  /* -------------------------------------------------------------------------- */
  const [selectedFault, setSelectedFault] = useState("none"); // none | bad-mask | bad-gateway | dns-down | icmp-blocked | app-down
  const [diagStep, setDiagStep] = useState(1); // 1: Interface/IP, 2: Gateway/ARP, 3: Routing, 4: DNS, 5: App
  const [diagOutput, setDiagOutput] = useState(null);

  const runDiagnosticStep = (step) => {
    setDiagStep(step);

    if (step === 1) {
      // Interface and IP
      if (selectedFault === "bad-mask") {
        setDiagOutput({
          status: "warning",
          cmd: "ip addr show eth0",
          output: `2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP
    inet 192.168.10.25/16 brd 192.168.255.255 scope global eth0
       valid_lft forever preferred_lft forever`,
          finding:
            "FAULT DETECTED: Subnet mask is misconfigured as /16 (255.255.0.0) instead of /24 (255.255.255.0). The host believes the remote server 192.168.30.10 is on its local wire, sending ARP requests instead of routing through the gateway!",
        });
      } else {
        setDiagOutput({
          status: "success",
          cmd: "ip addr show eth0",
          output: `2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP
    inet 192.168.10.25/24 brd 192.168.10.255 scope global eth0
       valid_lft forever preferred_lft forever`,
          finding: "Interface eth0 is UP/UP. Valid IP 192.168.10.25 with correct /24 subnet mask.",
        });
      }
    } else if (step === 2) {
      // Gateway & ARP
      if (selectedFault === "bad-gateway") {
        setDiagOutput({
          status: "error",
          cmd: "ping -c 3 192.168.10.254 && ip neigh show",
          output: `PING 192.168.10.254 (192.168.10.254) 56(84) bytes of data.
From 192.168.10.25 icmp_seq=1 Destination Host Unreachable
192.168.10.254 dev eth0 FAILED`,
          finding:
            "FAULT DETECTED: Default gateway is set to non-existent IP 192.168.10.254. ARP resolution fails (FAILED state). Client cannot reach any external networks!",
        });
      } else {
        setDiagOutput({
          status: "success",
          cmd: "ping -c 3 192.168.10.1 && ip neigh show",
          output: `PING 192.168.10.1 (192.168.10.1) 56(84) bytes of data.
64 bytes from 192.168.10.1: icmp_seq=1 ttl=64 time=0.842 ms
192.168.10.1 dev eth0 lladdr 00:aa:00:10:00:01 REACHABLE`,
          finding: "Gateway 192.168.10.1 replies in 0.8ms. ARP entry is REACHABLE. Local Layer 2 wire is operational.",
        });
      }
    } else if (step === 3) {
      // Routing
      setDiagOutput({
        status: "success",
        cmd: "ip route get 192.168.30.10",
        output: `192.168.30.10 via 192.168.10.1 dev eth0 src 192.168.10.25 uid 1000
    cache`,
        finding: "Linux kernel FIB confirms remote destination 192.168.30.10 is forwarded via default gateway 192.168.10.1 dev eth0.",
      });
    } else if (step === 4) {
      // DNS Resolution
      if (selectedFault === "dns-down") {
        setDiagOutput({
          status: "error",
          cmd: "dig @192.168.10.53 portal.corp.internal +short",
          output: `;; connection timed out; no servers could be reached
getent hosts portal.corp.internal -> [EMPTY]`,
          finding:
            "FAULT DETECTED: DNS resolver 192.168.10.53 is unreachable or DNS daemon is stopped. Host can reach raw IP addresses, but any application using domain names fails!",
        });
      } else {
        setDiagOutput({
          status: "success",
          cmd: "dig @192.168.10.53 portal.corp.internal +short",
          output: `192.168.30.10`,
          finding: "DNS resolution succeeded. 'portal.corp.internal' resolved to 192.168.30.10 via 192.168.10.53 in 2.1ms.",
        });
      }
    } else if (step === 5) {
      // Transport / Application
      if (selectedFault === "icmp-blocked") {
        setDiagOutput({
          status: "warning",
          cmd: "ping -c 3 192.168.30.10 && curl -I http://192.168.30.10",
          output: `PING 192.168.30.10: 100% packet loss (Request timed out)
HTTP/1.1 200 OK
Server: nginx/1.24.0
Content-Type: text/html`,
          finding:
            "FALSE NEGATIVE: Ping fails because intermediate firewall drops ICMP Echo Requests! However, HTTP port 80 connects successfully (HTTP 200 OK). Ping alone does NOT indicate application outage!",
        });
      } else if (selectedFault === "app-down") {
        setDiagOutput({
          status: "error",
          cmd: "ping -c 3 192.168.30.10 && nc -zv 192.168.30.10 80",
          output: `64 bytes from 192.168.30.10: icmp_seq=1 ttl=62 time=3.4 ms (PING SUCCESS)
nc: connect to 192.168.30.10 port 80 (tcp) failed: Connection refused`,
          finding:
            "APPLICATION CRASH: Network and IP routing are 100% operational (ping succeeds). However, the web server daemon on port 80 is down (Connection refused). This is a server administration issue, not a network failure!",
        });
      } else {
        setDiagOutput({
          status: "success",
          cmd: "curl -I http://portal.corp.internal",
          output: `HTTP/1.1 200 OK
Date: ${new Date().toUTCString()}
Server: nginx/1.24.0
Content-Length: 4280`,
          finding: "END-TO-END SUCCESS: Interface, Gateway, ARP, Routing, DNS, and HTTP application socket all fully healthy!",
        });
      }
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4 STATE: INTERACTIVE TCPDUMP FILTER & LIVE PACKET DISSECTOR      */
  /* -------------------------------------------------------------------------- */
  const [pcapFilter, setPcapFilter] = useState("all"); // all | icmp | dhcp | dns | arp

  const samplePackets = [
    {
      id: 1,
      proto: "ARP",
      filterTag: "arp",
      time: "10:14:02.102",
      src: "00:aa:00:10:25:01",
      dst: "ff:ff:ff:ff:ff:ff",
      summary: "ARP, Request who-has 192.168.10.1 tell 192.168.10.25, length 28",
      hex: "ffff ffff ffff 00aa 0010 2501 0806 0001 0800 0604 0001 ...",
    },
    {
      id: 2,
      proto: "DHCP",
      filterTag: "dhcp",
      time: "10:14:02.150",
      src: "0.0.0.0.68",
      dst: "255.255.255.255.67",
      summary: "BOOTP/DHCP, Request from 00:aa:00:10:25:01, length 300, xid 0x3d1d, Flags [none], DHCP: DISCOVER",
      hex: "4500 0148 0000 4000 4011 ... 0101 0600 3d1d e2f1 ...",
    },
    {
      id: 3,
      proto: "DHCP",
      filterTag: "dhcp",
      time: "10:14:02.180",
      src: "192.168.10.1.67",
      dst: "192.168.10.25.68",
      summary: "BOOTP/DHCP, Reply, length 308, xid 0x3d1d, yiaddr 192.168.10.25, DHCP: OFFER, Lease 86400s",
      hex: "4500 0150 0000 4000 4011 ... 0201 0600 3d1d e2f1 c0a8 0a19",
    },
    {
      id: 4,
      proto: "DNS",
      filterTag: "dns",
      time: "10:14:02.250",
      src: "192.168.10.25.54122",
      dst: "192.168.10.53.53",
      summary: "DNS, 38 bytes, [1a] A? portal.corp.internal. (38)",
      hex: "4500 0042 12a1 4000 4011 ... 001a 0100 0001 0000 0000 0000",
    },
    {
      id: 5,
      proto: "DNS",
      filterTag: "dns",
      time: "10:14:02.254",
      src: "192.168.10.53.53",
      dst: "192.168.10.25.54122",
      summary: "DNS, 54 bytes, [1a] 1/0/0 A 192.168.30.10 (54)",
      hex: "4500 0052 12a2 4000 4011 ... 001a 8180 0001 0001 0000 0000",
    },
    {
      id: 6,
      proto: "ICMP",
      filterTag: "icmp",
      time: "10:14:02.300",
      src: "192.168.10.25",
      dst: "192.168.30.10",
      summary: "IP (tos 0x0, ttl 64, id 4192) ICMP echo request, id 1891, seq 1, length 64",
      hex: "4500 0054 1060 4000 4001 ... 0800 4df2 0763 0001 ...",
    },
    {
      id: 7,
      proto: "ICMP",
      filterTag: "icmp",
      time: "10:14:02.304",
      src: "192.168.30.10",
      dst: "192.168.10.25",
      summary: "IP (tos 0x0, ttl 62, id 9811) ICMP echo reply, id 1891, seq 1, length 64",
      hex: "4500 0054 2653 4000 3e01 ... 0000 55f2 0763 0001 ...",
    },
  ];

  const filteredPackets = useMemo(() => {
    if (pcapFilter === "all") return samplePackets;
    return samplePackets.filter((p) => p.filterTag === pcapFilter);
  }, [pcapFilter, samplePackets]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5 STATE: LAYER 2 DEFENSES (DHCP SNOOPING + DAI + IPSG)           */
  /* -------------------------------------------------------------------------- */
  const [dhcpSnoopingEnabled, setDhcpSnoopingEnabled] = useState(false);
  const [daiEnabled, setDaiEnabled] = useState(false);
  const [secAttackLog, setSecAttackLog] = useState([]);

  const testRogueDhcpAttack = () => {
    if (dhcpSnoopingEnabled) {
      setSecAttackLog((prev) => [
        {
          id: Date.now(),
          type: "Rogue DHCP Offer",
          port: "GigabitEthernet0/4 (Untrusted)",
          status: "BLOCKED",
          note: "DHCP Snooping DROPPED DHCPOFFER packet on untrusted port! Switch security violation logged. Legitimate scope preserved.",
        },
        ...prev,
      ]);
    } else {
      setSecAttackLog((prev) => [
        {
          id: Date.now(),
          type: "Rogue DHCP Offer",
          port: "GigabitEthernet0/4 (Unprotected)",
          status: "EXPLOITED",
          note: "ATTACK SUCCEEDED: Rogue DHCP server injected malicious Gateway 192.168.10.66 and DNS 192.168.10.66. Client traffic hijacked via Man-in-the-Middle!",
        },
        ...prev,
      ]);
    }
  };

  const testArpPoisonAttack = () => {
    if (daiEnabled && dhcpSnoopingEnabled) {
      setSecAttackLog((prev) => [
        {
          id: Date.now(),
          type: "ARP Poisoning / Spoof",
          port: "GigabitEthernet0/4 (Untrusted)",
          status: "BLOCKED",
          note: "Dynamic ARP Inspection (DAI) validated frame against DHCP Snooping Binding Table: IP 192.168.10.1 does NOT match MAC 00:DE:AD:BE:EF:66! ARP frame dropped.",
        },
        ...prev,
      ]);
    } else {
      setSecAttackLog((prev) => [
        {
          id: Date.now(),
          type: "ARP Poisoning / Spoof",
          port: "GigabitEthernet0/4 (Unprotected)",
          status: "EXPLOITED",
          note: "ATTACK SUCCEEDED: Switch allowed gratuitous ARP without verification. PC-A's ARP cache poisoned. All outbound gateway traffic diverted to attacker!",
        },
        ...prev,
      ]);
    }
  };

  /* -------------------------------------------------------------------------- */
  /* ASSESSMENT & QUIZ STATE                                                    */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which sequence correctly describes the four steps of the standard DHCPv4 address allocation process?",
      options: [
        "Request, Discover, Offer, Acknowledge",
        "Discover, Offer, Request, Acknowledge (DORA)",
        "Offer, Discover, Acknowledge, Request",
        "Discover, Request, Acknowledge, Offer",
      ],
      correct: 1,
      explanation:
        "The DHCPv4 lease process follows DORA: Client broadcasts DHCPDISCOVER, server responds with DHCPOFFER, client broadcasts DHCPREQUEST accepting the offer, and server responds with DHCPACK to seal the lease.",
    },
    {
      id: 2,
      question: "Which protocol resolves a target IPv4 address to its link-layer Ethernet MAC address on a local broadcast domain?",
      options: ["DNS (Domain Name System)", "DHCP (Dynamic Host Configuration Protocol)", "ARP (Address Resolution Protocol)", "OSPF (Open Shortest Path First)"],
      correct: 2,
      explanation:
        "Address Resolution Protocol (ARP) translates a known 32-bit IPv4 address into its corresponding 48-bit Ethernet MAC address for local frame delivery.",
    },
    {
      id: 3,
      question: "What is the primary diagnostic function of an ICMP Time Exceeded (Type 11) message?",
      options: [
        "Assign a dynamic IP lease renewal",
        "Report that a packet's TTL or Hop Limit expired during forwarding, used by traceroute to identify intermediate routers",
        "Provide recursive DNS server IP addresses to the client",
        "Resolve a local router's Ethernet MAC address",
      ],
      correct: 1,
      explanation:
        "When an intermediate router decrements an IPv4 packet's TTL (or IPv6 Hop Limit) to 0, it discards the packet and generates an ICMP Time Exceeded message back to the sender.",
    },
    {
      id: 4,
      question: "Which Linux command displays the active IPv4 routing table and default gateway?",
      options: ["ip route show", "ip neigh show", "dig", "tcpdump"],
      correct: 0,
      explanation:
        "`ip route show` (or `ip route`) displays the kernel's IPv4 routing table. `ip neigh show` inspects the ARP cache, `dig` queries DNS, and `tcpdump` captures network packets.",
    },
    {
      id: 5,
      question: "What is the primary objective of an adversary launching a DHCP Starvation attack?",
      options: [
        "Poison the local DNS resolver cache",
        "Exhaust all available IP address leases in a DHCP server's scope by flooding forged MAC requests, denying service to legitimate clients",
        "Force routers to recalculate OSPF shortest paths",
        "Decrypt WPA3 enterprise Wi-Fi handshakes",
      ],
      correct: 1,
      explanation:
        "DHCP starvation attacks flood the broadcast domain with requests using spoofed MAC addresses, depleting the server's pool of available IP leases so legitimate users cannot obtain an IP.",
    },
    {
      id: 6,
      question: "What happens when an IPv4 host fails to obtain a DHCP lease and has no static configuration?",
      options: [
        "The operating system automatically assigns an APIPA link-local address in the 169.254.0.0/16 range",
        "The host connects directly to the Internet using 0.0.0.0",
        "The network interface card shuts down its hardware link",
        "The router automatically provisions a public BGP ASN",
      ],
      correct: 0,
      explanation:
        "Automatic Private IP Addressing (APIPA, RFC 3927) assigns an address in the 169.254.0.0/16 range when DHCP fails. This allows local link communication but cannot route to the default gateway or Internet.",
    },
    {
      id: 7,
      question: "Why is a DHCP Relay Agent ('ip helper-address') required when a DHCP server is located in a different VLAN or subnet?",
      options: [
        "DHCP uses encrypted TLS tunnels that require hardware acceleration",
        "DHCPDISCOVER packets are Layer 2 broadcasts (255.255.255.255) which routers do not forward across subnet boundaries",
        "DHCP servers only listen on TCP port 443",
        "Ethernet switches automatically block all UDP traffic across trunks",
      ],
      correct: 1,
      explanation:
        "Initial DHCPDISCOVER packets are broadcast locally. Routers strictly terminate broadcast domains. A DHCP Relay Agent intercepts the broadcast and forwards it as a unicast packet to the central DHCP server.",
    },
    {
      id: 8,
      question: "Which protocol is used in IPv6 for neighbor address resolution, router discovery, and duplicate address detection in place of ARP?",
      options: ["IGMPv3", "Neighbor Discovery Protocol (NDP) via ICMPv6", "DHCPv4 Relay", "Reverse ARP (RARP)"],
      correct: 1,
      explanation:
        "IPv6 completely eliminates ARP and broadcasts. Instead, it uses the Neighbor Discovery Protocol (NDP, RFC 4861), which uses ICMPv6 messages (Neighbor Solicitation / Neighbor Advertisement).",
    },
    {
      id: 9,
      question: "Which Layer 2 security mechanism inspects DHCP traffic on untrusted switch ports and creates a trusted binding database used by Dynamic ARP Inspection (DAI)?",
      options: ["Port Fast", "DHCP Snooping", "BPDU Guard", "Spanning Tree Protocol"],
      correct: 1,
      explanation:
        "DHCP Snooping acts as a firewall between untrusted switch ports and DHCP servers, dropping rogue DHCPOFFERs and compiling a snooping binding database (IP, MAC, VLAN, Port) used by Dynamic ARP Inspection (DAI) and IP Source Guard.",
    },
    {
      id: 10,
      question: "If a user reports that they can browse a website using http://192.168.30.10 but typing http://portal.corp.internal fails, what is the most likely root cause?",
      options: [
        "The default gateway is offline",
        "DNS resolution is failing (misconfigured resolver, stale record, or DNS daemon down)",
        "The Ethernet cable is unplugged",
        "The web server has crashed",
      ],
      correct: 1,
      explanation:
        "Because connectivity to the raw IP address works, the physical link, IP addressing, gateway, ARP, and web server are all functioning. The failure to connect by name points specifically to a DNS resolution failure.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score += 1;
    });
    return score;
  };

  /* -------------------------------------------------------------------------- */
  /* LAB CHECKLIST STATE                                                        */
  /* -------------------------------------------------------------------------- */
  const [labChecklist, setLabChecklist] = useState({
    inspectHost: false,
    testGateway: false,
    testRouteGet: false,
    testRemoteIp: false,
    testDns: false,
    capturePcap: false,
    remedyApplied: false,
  });

  const toggleChecklistItem = (key) => {
    setLabChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* -------------------------------------------------------------------------- */
  /* CAPSTONE INCIDENT REPORT TEMPLATE                                          */
  /* -------------------------------------------------------------------------- */
  const incidentReportTemplate = `# PrepSpaces Network Engineering Incident Report: Module 8
## Root Cause Analysis: Workstation Connectivity & Host Configuration Failure

**Incident Reference:** INC-2026-NET-0881
**Date & Time:** ${new Date().toISOString()}
**Affected Host:** Workstation WS-04 (IP: 192.168.10.25/24, MAC: 00:AA:00:10:25:01)
**Assigned Engineer:** Level 3 Systems & Network Engineer
**Status:** RESOLVED

---

### 1. Initial Symptom & Impact Assessment
- **Reported Issue:** User on Workstation WS-04 reported inability to access internal ERP application at 'portal.corp.internal'.
- **Initial Host State:**
  - Interface eth0: UP (Carrier detected)
  - IP Address: 192.168.10.25
  - Subnet Mask: 255.255.0.0 (/16) [MISCONFIGURED]
  - Configured Gateway: 192.168.10.1
  - Configured DNS: 192.168.10.53

---

### 2. Diagnostic Investigation & Evidence Log

#### Step 1: Interface & Local Subnet Inspection
- Executed \`ip addr show eth0\`.
- **Finding:** Mask was incorrectly configured as /16 instead of /24. The host treated 192.168.30.10 as a local on-link device rather than an off-subnet destination requiring gateway forwarding.

#### Step 2: Neighbor Resolution (ARP) Inspection
- Executed \`ip neigh show\`.
- **Finding:** Host sent ARP broadcast for 'Who has 192.168.30.10?' onto VLAN 10 wire. Because 192.168.30.10 is on VLAN 30 across a Layer 3 router, no ARP reply was ever received (Entry marked INCOMPLETE/FAILED).

#### Step 3: DNS Resolver Validation
- Executed \`dig @192.168.10.53 portal.corp.internal +short\`.
- **Finding:** DNS query timed out due to stale resolver IP entered manually after previous DHCP failure.

#### Step 4: Packet Capture Evidence (tcpdump)
- Executed \`sudo tcpdump -ni eth0 'arp or port 53'\`.
- Capture confirmed zero outbound frames addressed to Default Gateway MAC (00:AA:00:10:00:01).

---

### 3. Corrective Actions Taken
1. **Remediated Subnet Mask:** Reconfigured eth0 interface to correct CIDR prefix:
   \`sudo ip addr del 192.168.10.25/16 dev eth0 && sudo ip addr add 192.168.10.25/24 dev eth0\`
2. **Restored Dynamic DHCP Lease:**
   Flushed static overrides and triggered clean DORA exchange:
   \`sudo dhclient -r eth0 && sudo dhclient -v eth0\`
3. **Verified Binding & DNS:** Host received 192.168.10.25/24, Gateway 192.168.10.1, and valid DNS resolver 192.168.10.53.

---

### 4. Verification & Validation Testing
- \`ping -c 4 192.168.10.1\`: 0% packet loss (0.8ms average RTT).
- \`ip route get 192.168.30.10\`: Confirms route via 192.168.10.1 dev eth0.
- \`dig portal.corp.internal\`: Successfully resolved to 192.168.30.10 in 1.9ms.
- \`curl -I http://portal.corp.internal\`: HTTP/1.1 200 OK.

---

### 5. Architectural Hardening Recommendations
1. **Enable DHCP Snooping:** Implement \`ip dhcp snooping\` on enterprise access switches to eliminate rogue DHCP servers.
2. **Implement Dynamic ARP Inspection (DAI):** Enforce \`ip arp inspection vlan 10,20,30\` to prevent ARP cache poisoning.
3. **Disable Manual Overrides:** Standardize workstation fleet on 802.1X authenticated DHCP reservations.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-200">
      {/* Module Navigation Bar */}
      <ModuleNav
        track="networks"
        currentModuleId="config"
        showAiTutor={false}
        onAiTutorToggle={() => {}}
        aiTutorLabel="AI Assistant"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <span className="cursor-pointer hover:text-[#ea580c]" onClick={() => navigate("/learning")}>
              Learning
            </span>
            <span>/</span>
            <span className="cursor-pointer hover:text-[#ea580c]" onClick={() => navigate("/learning/networks")}>
              Computer Networks
            </span>
            <span>/</span>
            <span className="text-[#ea580c] font-semibold">Module 8: ICMP, ARP, DHCP &amp; Network Configuration</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200/60 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-2">
                <Workflow size={14} />
                <span>Host Configuration &amp; Diagnostic Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight">
                ICMP, ARP, DHCP &amp; Network Configuration
              </h1>
              <p className="mt-2 text-base text-stone-600 max-w-3xl leading-relaxed">
                A host can have an IP address and still fail to communicate. Master the protocols that connect devices to local wires and the global Internet: DHCP DORA leases, ARP neighbor resolution, ICMP diagnostics, DNS name resolution, and tcpdump packet analysis.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl bg-white border border-[#e7e3da] text-xs font-mono text-stone-600">
                UC Berkeley CS168 &bull; Stanford CS144
              </span>
            </div>
          </div>
        </div>

        {/* Top-Level Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#e7e3da] scrollbar-none">
          {[
            { id: "theory", label: "Core Theory (8.1-8.11)", icon: BookOpen },
            { id: "dora-sim", label: "DHCP DORA & Timers", icon: Wifi },
            { id: "arp-sim", label: "ARP Cache & Spoofing", icon: Network },
            { id: "diag-sim", label: "Host Diagnostic Sandbox", icon: Activity },
            { id: "tcpdump-sim", label: "Live tcpdump Dissector", icon: Filter },
            { id: "sec-sim", label: "Layer 2 Security (DAI/Snoop)", icon: ShieldCheck },
            { id: "cli", label: "Linux & Cisco CLI", icon: Terminal },
            { id: "quiz", label: "Knowledge Check", icon: Award },
            { id: "lab-report", label: "Lab & Incident Report", icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-sm"
                    : "bg-white text-stone-600 hover:text-stone-900 border border-[#e7e3da] hover:border-stone-400"
                }`}
              >
                <Icon size={16} className={isActive ? "text-orange-400" : "text-stone-500"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* TAB 1: THEORY CURRICULUM (8.1 - 8.11)                                 */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Sticky Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 p-4 bg-white rounded-2xl border border-[#e7e3da] shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 px-2">
                  Module 8 Sections
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: "8.1", title: "8.1 Configuration vs Connectivity" },
                    { id: "8.2", title: "8.2 ICMP & Network Diagnostics" },
                    { id: "8.3", title: "8.3 Traceroute Path Mechanics" },
                    { id: "8.4", title: "8.4 DHCP & The DORA Process" },
                    { id: "8.5", title: "8.5 DHCP Relay Agents & Helpers" },
                    { id: "8.6", title: "8.6 DNS Resolution Dependencies" },
                    { id: "8.7", title: "8.7 ARP Address Resolution & Poisoning" },
                    { id: "8.8", title: "8.8 IPv6 Neighbor Discovery (NDP)" },
                    { id: "8.9", title: "8.9 Linux iproute2 Toolkit" },
                    { id: "8.10", title: "8.10 Packet Capture with tcpdump" },
                    { id: "8.11", title: "8.11 DHCP Starvation & Spoof Defenses" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                        activeSection === item.id
                          ? "bg-orange-50 text-[#ea580c] font-bold border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <span>{item.title}</span>
                      {activeSection === item.id && <ChevronRight size={14} />}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-[#e7e3da]">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
                    <p className="font-semibold text-stone-800 mb-1">Golden Diagnostic Rule:</p>
                    Isolate layer-by-layer: Link &rarr; Local Gateway/ARP &rarr; IP Route &rarr; DNS &rarr; Application Socket.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Pane */}
            <div className="lg:col-span-3 space-y-8">
              {/* SECTION 8.1 */}
              {activeSection === "8.1" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.1</span>
                    <span>&bull;</span>
                    <span>SYSTEMIC DIAGNOSTIC MODEL</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    The Relationship Between Network Configuration and Connectivity
                  </h2>

                  <p className="text-stone-700 leading-relaxed">
                    A common operational fallacy is assuming that if a device displays an IP address, its network stack is healthy. A computer requires a synchronized set of five distinct components to reach a service: an active physical interface, a correct subnet mask, a reachable default gateway with valid ARP resolution, a functioning routing path, and responsive DNS name servers.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Configuration Component</th>
                          <th className="p-3">Architectural Purpose</th>
                          <th className="p-3">Failure Symptom</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Physical Interface</td>
                          <td className="p-3 text-stone-700">Provides Layer 1 electrical carrier and Layer 2 link framing.</td>
                          <td className="p-3 text-rose-600 font-mono">NO-CARRIER / state DOWN</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">IP Address &amp; Subnet Mask</td>
                          <td className="p-3 text-stone-700">Identifies host and delineates on-link vs. off-subnet traffic.</td>
                          <td className="p-3 text-rose-600 font-mono">Wrong mask (/16 vs /24) breaks gateway routing</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Default Gateway</td>
                          <td className="p-3 text-stone-700">Local router interface that receives off-subnet traffic.</td>
                          <td className="p-3 text-rose-600 font-mono">Network is unreachable</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">ARP / IPv6 NDP</td>
                          <td className="p-3 text-stone-700">Resolves default gateway IP to Layer 2 MAC address.</td>
                          <td className="p-3 text-rose-600 font-mono">Destination Host Unreachable (ARP FAILED)</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">DNS Resolver</td>
                          <td className="p-3 text-stone-700">Resolves hostnames to IPv4 (A) and IPv6 (AAAA) records.</td>
                          <td className="p-3 text-rose-600 font-mono">IP works, but URLs fail to resolve</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION 8.2 */}
              {activeSection === "8.2" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.2</span>
                    <span>&bull;</span>
                    <span>CONTROL PROTOCOL</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">ICMP &amp; Network Diagnostics</h2>

                  <p className="text-stone-700 leading-relaxed">
                    The Internet Control Message Protocol (ICMPv4 - RFC 792, ICMPv6 - RFC 4443) carries error reporting and diagnostic queries. ICMP is encapsulated directly inside IP packets (IP Protocol number 1 for ICMPv4, 58 for ICMPv6). It is not an application protocol like HTTP or SSH.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="text-sm font-bold text-stone-900">Common ICMPv4 Message Types</h4>
                      <ul className="text-xs text-stone-600 space-y-1">
                        <li>&bull; <strong>Type 0:</strong> Echo Reply (Sent in response to ping).</li>
                        <li>&bull; <strong>Type 3:</strong> Destination Unreachable (Codes: 0=Net, 1=Host, 3=Port, 4=Fragmentation Needed / DF bit set).</li>
                        <li>&bull; <strong>Type 8:</strong> Echo Request (Generated by ping).</li>
                        <li>&bull; <strong>Type 11:</strong> Time Exceeded (Code 0: TTL expired in transit; used by traceroute).</li>
                        <li>&bull; <strong>Type 5:</strong> Redirect (Informs host of an alternate first-hop router).</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="text-sm font-bold text-stone-900">Crucial Operational Warning: Ping Limitations</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Many enterprise firewalls, edge cloud proxies, and hosts deliberately drop ICMP Echo Requests (e.g. AWS Security Groups default drop). Therefore:
                      </p>
                      <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-semibold">
                        A failed ping does NOT prove a web application or database is down. Always follow up with a transport-layer socket test (e.g. `nc -zv &lt;host&gt; 443` or `curl -I`).
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 8.3 */}
              {activeSection === "8.3" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.3</span>
                    <span>&bull;</span>
                    <span>PATH TRACING</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Traceroute &amp; Path Diagnosis</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Traceroute discovers intermediate Layer 3 hops by exploiting the router requirement to decrement TTL (Time to Live) and return an ICMP Time Exceeded (Type 11) message when TTL reaches 0.
                  </p>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">Traceroute Probe Flavors across Operating Systems:</div>
                    <ul className="text-stone-300 text-[11px] space-y-1">
                      <li>&bull; <strong>Linux default:</strong> Sends high-numbered UDP packets (ports 33434–33534).</li>
                      <li>&bull; <strong>Windows tracert:</strong> Sends ICMP Echo Requests (Type 8) by default.</li>
                      <li>&bull; <strong>Modern Linux TCP Mode:</strong> <code className="text-emerald-400">traceroute -T -p 443 192.168.30.10</code> sends TCP SYN packets to pass through strict enterprise firewalls that block UDP and ICMP!</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
                    <h4 className="font-bold text-stone-900">Why do some hops display "* * *"?</h4>
                    <p className="leading-relaxed">
                      Seeing <code className="font-mono bg-white px-1 border rounded">* * *</code> at a middle hop does not mean the router is broken. Core routers commonly rate-limit or disable the CPU generation of ICMP Time Exceeded messages to protect their control plane from DoS attacks, while still forwarding transit packets at wire speed in ASIC hardware.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 8.4 */}
              {activeSection === "8.4" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.4</span>
                    <span>&bull;</span>
                    <span>AUTOMATIC ADDRESSING</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">DHCP: Dynamic Host Configuration Protocol &amp; DORA</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Dynamic Host Configuration Protocol (DHCPv4 - RFC 2131) automates the configuration of IPv4 network parameters. It operates over UDP using port <strong>67</strong> on servers and port <strong>68</strong> on clients.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                      <div className="font-bold text-[#ea580c] mb-1">1. DISCOVER</div>
                      <p className="text-[11px] text-stone-600">Client broadcast searching for available DHCP servers.</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                      <div className="font-bold text-[#ea580c] mb-1">2. OFFER</div>
                      <p className="text-[11px] text-stone-600">Server proposes IP, mask, lease, gateway, and DNS options.</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                      <div className="font-bold text-[#ea580c] mb-1">3. REQUEST</div>
                      <p className="text-[11px] text-stone-600">Client broadcasts acceptance of chosen offer.</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
                      <div className="font-bold text-[#ea580c] mb-1">4. ACK</div>
                      <p className="text-[11px] text-stone-600">Server acknowledges and binds the lease in database.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-xs text-stone-700 space-y-2">
                    <h4 className="font-bold text-stone-900">DHCP Lease Timers (T1 &amp; T2):</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>T1 Renewal Timer (50% of lease):</strong> Client sends a unicast DHCPREQUEST directly to the original server to renew the lease without disturbing other devices.</li>
                      <li><strong>T2 Rebind Timer (87.5% of lease):</strong> If the original server does not answer by T2, the client broadcasts a DHCPREQUEST to <em>any</em> available DHCP server.</li>
                      <li><strong>Lease Expiration (100%):</strong> If no server acknowledges before expiration, the client must immediately release the address and unbind it from its interface, falling back to an APIPA address (<code className="font-mono">169.254.0.0/16</code>).</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* SECTION 8.5 */}
              {activeSection === "8.5" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.5</span>
                    <span>&bull;</span>
                    <span>ENTERPRISE RELAY</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">DHCP Relay Agents &amp; Multi-VLAN Architecture</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Because initial DHCPDISCOVER packets are sent to Layer 2 broadcast address <code className="font-mono bg-white px-1">255.255.255.255</code>, routers drop them by default. Placing a physical DHCP server inside every individual departmental VLAN is cost-prohibitive. Enterprises therefore deploy <strong>DHCP Relay Agents</strong> (such as Cisco's <code className="font-mono bg-white px-1">ip helper-address</code>).
                  </p>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs">
                    <h4 className="font-bold text-stone-900">How the Relay Agent Functions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-stone-600">
                      <li>Client on VLAN 20 sends broadcast DHCPDISCOVER.</li>
                      <li>The router interface for VLAN 20 intercepts the broadcast.</li>
                      <li>The router inserts its own interface IP into the <code className="font-mono font-bold">giaddr</code> (Gateway IP Address) field of the DHCP payload and optionally adds DHCP Option 82 (Relay Agent Information).</li>
                      <li>The router encapsulates the packet as a <strong>unicast UDP message</strong> and routes it across the core network to the centralized DHCP server at <code className="font-mono font-bold">192.168.100.10</code>.</li>
                      <li>The server inspects the <code className="font-mono">giaddr</code>, determines that the client belongs to the VLAN 20 scope, and returns a unicast DHCPOFFER back to the relay agent.</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* SECTION 8.6 */}
              {activeSection === "8.6" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.6</span>
                    <span>&bull;</span>
                    <span>NAME RESOLUTION</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">DNS &amp; Host Configuration Dependencies</h2>

                  <p className="text-stone-700 leading-relaxed">
                    DHCP distributes DNS resolver IP addresses (Option 6), but DNS resolution operates as an independent protocol stack (UDP/TCP port 53). When investigating application failures, engineers must isolate whether the failure occurs at the name resolution stage or the transport socket stage.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-bold text-stone-900">Key DNS Record Types</h4>
                      <ul className="text-stone-600 space-y-1 font-mono">
                        <li><strong>A:</strong> Resolves name to 32-bit IPv4 address</li>
                        <li><strong>AAAA:</strong> Resolves name to 128-bit IPv6 address</li>
                        <li><strong>CNAME:</strong> Canonical name alias (e.g. www &rarr; app.lb)</li>
                        <li><strong>PTR:</strong> Pointer record for reverse DNS lookups</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-bold text-stone-900">Diagnostic Verification with dig</h4>
                      <code className="block bg-stone-900 text-stone-100 p-2.5 rounded font-mono text-[11px]">
                        # Query specific DNS server directly:
                        <br />
                        dig @192.168.10.53 portal.corp.internal +short
                        <br />
                        # Check system nsswitch resolution:
                        <br />
                        getent hosts portal.corp.internal
                      </code>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 8.7 */}
              {activeSection === "8.7" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.7</span>
                    <span>&bull;</span>
                    <span>LINK-LAYER GLUE</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">ARP: Address Resolution Protocol &amp; Cache Poisoning</h2>

                  <p className="text-stone-700 leading-relaxed">
                    IP packets cannot be placed onto a physical Ethernet wire without a destination MAC address. IPv4 uses ARP (RFC 826) to discover the 48-bit MAC address of any IPv4 host sharing the local broadcast domain.
                  </p>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs space-y-2">
                    <h4 className="font-bold text-stone-900">Crucial Rule: On-Link Host vs Off-Subnet Destination</h4>
                    <p className="text-stone-600 leading-relaxed">
                      If PC-A (<code className="font-mono">192.168.10.25/24</code>) wants to communicate with Server (<code className="font-mono">192.168.30.10</code>), PC-A <strong>NEVER sends an ARP request for 192.168.30.10</strong>. PC-A evaluates its subnet mask, notices the destination is off-subnet, and sends an ARP request for its <strong>Default Gateway (192.168.10.1)</strong> instead!
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-900 space-y-2">
                    <h4 className="font-bold flex items-center gap-1.5">
                      <AlertTriangle size={16} className="text-red-600" />
                      ARP Poisoning / Spoofing Attack Vulnerability
                    </h4>
                    <p className="leading-relaxed">
                      ARP has zero authentication. Any host on the local wire can send a <strong>Gratuitous ARP</strong> claiming that the Gateway's IP address belongs to the attacker's MAC address. Victim machines blindly update their ARP tables, forwarding all outbound Internet traffic to the attacker (Man-in-the-Middle).
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 8.8 */}
              {activeSection === "8.8" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.8</span>
                    <span>&bull;</span>
                    <span>MODERN IPV6 RESOLUTION</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">IPv6 Neighbor Discovery Protocol (NDP)</h2>

                  <p className="text-stone-700 leading-relaxed">
                    IPv6 eliminates ARP entirely. In its place, IPv6 relies on <strong>Neighbor Discovery Protocol (NDP - RFC 4861)</strong>, carried via ICMPv6 using targeted multicast addresses rather than noisy broadcast floods.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Feature</th>
                          <th className="p-3">IPv4 ARP</th>
                          <th className="p-3">IPv6 NDP (ICMPv6)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Transport Type</td>
                          <td className="p-3 text-stone-700">Raw Layer 2 Ethernet Frame (EtherType 0x0806).</td>
                          <td className="p-3 text-stone-700">ICMPv6 encapsulated in IPv6 (Next Header 58).</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Query Mechanism</td>
                          <td className="p-3 text-stone-700">ARP Request (Broadcast ff:ff:ff:ff:ff:ff).</td>
                          <td className="p-3 text-stone-700">Neighbor Solicitation (NS) via Solicited-Node Multicast.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Duplicate Address Checks</td>
                          <td className="p-3 text-stone-700">Gratuitous ARP (often optional or unmonitored).</td>
                          <td className="p-3 text-stone-700">Duplicate Address Detection (DAD) mandatory on every address.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Router Discovery</td>
                          <td className="p-3 text-stone-700">Not supported (provided by DHCP Option 3).</td>
                          <td className="p-3 text-stone-700">Router Solicitation (RS) &amp; Router Advertisement (RA).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION 8.9 */}
              {activeSection === "8.9" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.9</span>
                    <span>&bull;</span>
                    <span>LINUX TOOLKIT</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Network Interfaces, Gateways &amp; Route Inspection</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Modern Linux administration replaces deprecated legacy tools (`ifconfig`, `netstat`, `route`, `arp`) with the unified <strong>iproute2</strong> command suite (`ip`).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="font-bold text-stone-900">Interface &amp; Address Inspection</div>
                      <code className="text-[11px] block text-stone-700">
                        # Inspect link state and MAC:
                        <br />ip link show
                        <br />
                        <br /># Inspect IPv4/IPv6 addresses &amp; prefixes:
                        <br />ip addr show
                        <br />
                        <br /># Check RX/TX errors, drops, collisions:
                        <br />ip -s link show eth0
                      </code>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="font-bold text-stone-900">Route &amp; Neighbor Cache Inspection</div>
                      <code className="text-[11px] block text-stone-700">
                        # View kernel routing table:
                        <br />ip route show
                        <br />
                        <br /># Query kernel FIB for specific destination:
                        <br />ip route get 192.168.30.10
                        <br />
                        <br /># View ARP neighbor cache table:
                        <br />ip neigh show
                      </code>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 8.10 */}
              {activeSection === "8.10" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.10</span>
                    <span>&bull;</span>
                    <span>PACKET CAPTURE</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Packet Capture with tcpdump</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Packet capture provides empirical ground truth. It reveals whether a request actually left the NIC, whether the network dropped it, or whether the server responded and the local firewall discarded the reply.
                  </p>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">Standard Diagnostic tcpdump Filters:</div>
                    <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# Capture ICMP echo and unreachable messages:
sudo tcpdump -ni eth0 icmp

# Capture DHCPv4 transactions on ports 67/68:
sudo tcpdump -ni eth0 'udp port 67 or udp port 68'

# Capture DNS resolution requests:
sudo tcpdump -ni eth0 port 53

# Capture ARP requests and replies:
sudo tcpdump -ni eth0 arp

# Capture full payload to pcap file for Wireshark inspection:
sudo tcpdump -ni eth0 -w incident-trace.pcap`}
                    </pre>
                  </div>
                </div>
              )}

              {/* SECTION 8.11 */}
              {activeSection === "8.11" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 8.11</span>
                    <span>&bull;</span>
                    <span>LAYER 2 SECURITY CONTROLS</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">DHCP Starvation &amp; Layer 2 Defense-in-Depth</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Modern enterprise switching architectures deploy a tripartite defense against Layer 2 attacks: DHCP Snooping, Dynamic ARP Inspection (DAI), and IP Source Guard (IPSG).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="font-bold text-[#ea580c] uppercase">Control 1</div>
                      <h4 className="font-bold text-stone-900">DHCP Snooping</h4>
                      <p className="text-stone-600 leading-relaxed">
                        Designates switch ports as <em>Trusted</em> (uplinks to DHCP servers) or <em>Untrusted</em> (access ports). Drops DHCPOFFERs on untrusted ports and builds the DHCP Snooping Binding Table.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="font-bold text-[#ea580c] uppercase">Control 2</div>
                      <h4 className="font-bold text-stone-900">Dynamic ARP Inspection (DAI)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        Intercepts all ARP packets on untrusted ports and validates the sender IP/MAC against the DHCP Snooping database. Drops poisoned gratuitous ARPs instantly.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="font-bold text-[#ea580c] uppercase">Control 3</div>
                      <h4 className="font-bold text-stone-900">IP Source Guard (IPSG)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        Filters non-IP traffic and drops IP packets whose source address does not match the IP/MAC binding learned during DHCP negotiation on that physical port.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 2: DHCP DORA & LEASE TIMERS SIMULATOR                            */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "dora-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Wifi size={14} />
                  <span>INTERACTIVE DHCP EXCHANGE ENGINE</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">DHCP DORA Exchange &amp; Lease Lifecycle</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Step through Discover, Offer, Request, and Acknowledge packets. Then use the lease slider to observe T1 unicast renewal (50%), T2 rebind broadcast (87.5%), and expiration fallback to APIPA 169.254.x.x.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetDora}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Reset Exchange</span>
                </button>
                <button
                  disabled={doraStep >= 4}
                  onClick={advanceDora}
                  className="px-4 py-2 bg-[#ea580c] hover:bg-orange-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow"
                >
                  <span>Step Next Packet ({doraStep}/4)</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Visual DORA Ladder Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {doraMessages.map((msg, idx) => {
                const isExecuted = doraStep >= msg.step;
                const isCurrent = doraStep === msg.step;
                return (
                  <div
                    key={msg.step}
                    className={`p-4 rounded-2xl border transition-all ${
                      isCurrent
                        ? "bg-orange-50 border-orange-400 ring-2 ring-[#ea580c] shadow-md"
                        : isExecuted
                        ? "bg-stone-50 border-stone-300 text-stone-900"
                        : "bg-white border-stone-200 opacity-40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#ea580c]">Step {msg.step}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-stone-200">
                        UDP {msg.srcPort}&rarr;{msg.dstPort}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-stone-900 mb-1">{msg.name}</h4>
                    <div className="text-[10px] font-mono text-stone-500 mb-2">{msg.type}</div>
                    <p className="text-[11px] text-stone-600 leading-snug">{msg.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Lease Timeline Slider (Activated after DORA complete) */}
            {isDoraComplete && (
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Lease Duration Timeline Simulator (24h Lease)</h4>
                    <p className="text-xs text-stone-600">
                      Drag slider to observe client renewal behavior at standard RFC 2131 timer thresholds:
                    </p>
                  </div>
                  <div className={`text-xs font-mono font-bold ${leaseStatus.color}`}>
                    {leaseStatus.label}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-stone-500">
                    <span>0h (Lease Granted)</span>
                    <span className="text-amber-700 font-bold">12h (T1: 50% Renewal)</span>
                    <span className="text-orange-700 font-bold">21h (T2: 87.5% Rebind)</span>
                    <span className="text-rose-700 font-bold">24h (Expired)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={leasePercent}
                    onChange={(e) => setLeasePercent(parseFloat(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700">
                  {leasePercent < 50 && (
                    <span>Host operates normally on 192.168.10.25 with full routing and DNS resolution.</span>
                  )}
                  {leasePercent >= 50 && leasePercent < 87.5 && (
                    <span>Client sends unicast DHCPREQUEST to original server 192.168.10.1 asking for lease extension.</span>
                  )}
                  {leasePercent >= 87.5 && leasePercent < 100 && (
                    <span>Original server did not reply. Client broadcasts DHCPREQUEST to ANY DHCP server on subnet.</span>
                  )}
                  {leasePercent >= 100 && (
                    <span className="text-rose-700 font-bold">
                      Lease timed out! Interface eth0 relinquishes 192.168.10.25 and automatically falls back to APIPA 169.254.120.45/16. External connectivity is lost!
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 3: ARP RESOLUTION, NEIGHBOR CACHE & SPOOFING SANDBOX             */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "arp-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Network size={14} />
                  <span>ADDRESS RESOLUTION &amp; SECURITY SANDBOX</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">ARP Cache Lifecycle &amp; Poisoning Attack</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Observe how a host resolves its default gateway's MAC address via broadcast ARP request, and test how an attacker poisons the cache using forged gratuitous ARP replies.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearArp}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 transition cursor-pointer"
                >
                  Flush Cache
                </button>
                <button
                  onClick={triggerArpResolution}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer shadow"
                >
                  Resolve Gateway ARP
                </button>
                <button
                  onClick={triggerArpSpoof}
                  className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition cursor-pointer shadow"
                >
                  Inject Forged ARP Spoof
                </button>
              </div>
            </div>

            {/* ARP Cache Table Display */}
            <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <span className="text-orange-400 font-bold">Workstation Host ARP Cache (ip neigh show)</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    arpState === "resolved"
                      ? "bg-emerald-600 text-white"
                      : arpState === "poisoned"
                      ? "bg-red-600 text-white"
                      : "bg-stone-700 text-stone-300"
                  }`}
                >
                  Status: {arpState}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="text-stone-400 border-b border-stone-800">
                    <tr>
                      <th className="py-1">IP Address</th>
                      <th className="py-1">Device</th>
                      <th className="py-1">Resolved MAC Address</th>
                      <th className="py-1">State</th>
                      <th className="py-1">Trust Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 text-stone-200">
                    {arpState === "empty" && (
                      <tr>
                        <td colSpan="5" className="py-3 text-center text-stone-500">
                          ARP cache is empty. Host must broadcast ARP Request before forwarding packets.
                        </td>
                      </tr>
                    )}
                    {arpState === "querying" && (
                      <tr>
                        <td className="py-2 text-orange-400">192.168.10.1</td>
                        <td className="py-2">eth0</td>
                        <td className="py-2 text-stone-500">(incomplete)</td>
                        <td className="py-2 text-amber-400">INCOMPLETE</td>
                        <td className="py-2 text-stone-400">Awaiting ARP Reply...</td>
                      </tr>
                    )}
                    {arpState === "resolved" && (
                      <tr>
                        <td className="py-2 text-emerald-400">192.168.10.1</td>
                        <td className="py-2">eth0</td>
                        <td className="py-2 text-emerald-300 font-bold">00:aa:00:10:00:01 (Legitimate Gateway)</td>
                        <td className="py-2 text-emerald-400">REACHABLE</td>
                        <td className="py-2 text-emerald-400">Trusted Router Hardware</td>
                      </tr>
                    )}
                    {arpState === "poisoned" && (
                      <tr className="bg-red-950/40">
                        <td className="py-2 text-red-400 font-bold">192.168.10.1</td>
                        <td className="py-2">eth0</td>
                        <td className="py-2 text-red-300 font-bold">00:de:ad:be:ef:66 (ATTACKER MAC!)</td>
                        <td className="py-2 text-red-400">REACHABLE (POISONED)</td>
                        <td className="py-2 text-red-400 font-bold">MITM HIJACK IN PROGRESS!</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ARP Packet Exchange Log */}
            {arpLog.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Live Wire ARP Packet Exchange:
                </h4>
                {arpLog.map((log, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-stone-50 rounded-xl border border-stone-200 font-mono text-xs text-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="font-bold text-[#ea580c] mr-2">[{log.time}s] {log.type}:</span>
                      <span className="text-stone-600">{log.info}</span>
                    </div>
                    <div className="text-[10px] text-stone-500">
                      Src: {log.srcMac} &rarr; Dst: {log.dstMac}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 4: HOST CONNECTIVITY DIAGNOSTIC SANDBOX                          */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "diag-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Activity size={14} />
                  <span>STEP-BY-STEP TROUBLESHOOTING WIZARD</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  Host Diagnostic Sandbox: "I Have an IP But Can't Connect!"
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Inject typical enterprise network misconfigurations. Follow the 5-step engineering methodology to isolate the root cause without guessing.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-stone-700">Inject Fault:</label>
                <select
                  value={selectedFault}
                  onChange={(e) => {
                    setSelectedFault(e.target.value);
                    setDiagOutput(null);
                  }}
                  className="px-3 py-1.5 bg-stone-50 rounded-xl border border-stone-300 text-xs font-medium text-stone-800 focus:ring-2 focus:ring-[#ea580c]"
                >
                  <option value="none">Baseline: 100% Healthy Network</option>
                  <option value="bad-mask">Fault 1: Bad Subnet Mask (/16 instead of /24)</option>
                  <option value="bad-gateway">Fault 2: Bad Gateway IP (192.168.10.254)</option>
                  <option value="dns-down">Fault 3: DNS Resolver Down (192.168.10.53)</option>
                  <option value="icmp-blocked">Fault 4: Firewall Blocks ICMP, HTTP Works</option>
                  <option value="app-down">Fault 5: Ping Works, Web App Crashed</option>
                </select>
              </div>
            </div>

            {/* Step Wizard Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { step: 1, label: "1. Interface & IP", desc: "ip addr show" },
                { step: 2, label: "2. Gateway & ARP", desc: "ping gw & ip neigh" },
                { step: 3, label: "3. Routing Table", desc: "ip route get" },
                { step: 4, label: "4. DNS Resolver", desc: "dig portal.corp" },
                { step: 5, label: "5. App Sockets", desc: "curl & nc -zv" },
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => runDiagnosticStep(s.step)}
                  className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                    diagStep === s.step
                      ? "bg-orange-50 border-orange-400 ring-2 ring-[#ea580c]"
                      : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <div className="text-xs font-bold text-stone-900">{s.label}</div>
                  <div className="text-[10px] font-mono text-stone-500">{s.desc}</div>
                </button>
              ))}
            </div>

            {/* Diagnostic Terminal Output */}
            {diagOutput && (
              <div className="p-5 bg-stone-900 text-stone-100 rounded-3xl font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-orange-400 font-bold flex items-center gap-1.5">
                    <Terminal size={14} />
                    <span>{diagOutput.cmd}</span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      diagOutput.status === "success"
                        ? "bg-emerald-600 text-white"
                        : diagOutput.status === "warning"
                        ? "bg-amber-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {diagOutput.status}
                  </span>
                </div>

                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {diagOutput.output}
                </pre>

                <div className="p-3 bg-stone-800/90 rounded-xl border border-stone-700 text-xs">
                  <div className="text-orange-400 font-bold text-[10px] uppercase mb-1">
                    Engineering Diagnostic Finding:
                  </div>
                  <p className="font-sans text-[11px] text-stone-200 leading-relaxed">
                    {diagOutput.finding}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 5: INTERACTIVE TCPDUMP FILTER & LIVE PACKET DISSECTOR            */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "tcpdump-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Filter size={14} />
                  <span>PACKET CAPTURE DISSECTOR</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Live tcpdump Filter &amp; Analysis</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Select common BPF packet capture filters to inspect decoded Ethernet, ARP, DHCP, DNS, and ICMP streams captured on workstation interface eth0.
                </p>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto">
                {[
                  { id: "all", label: "All Traffic" },
                  { id: "arp", label: "arp" },
                  { id: "dhcp", label: "udp port 67 or 68" },
                  { id: "dns", label: "port 53" },
                  { id: "icmp", label: "icmp" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setPcapFilter(f.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition cursor-pointer ${
                      pcapFilter === f.id
                        ? "bg-[#18181b] text-white font-bold"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Decoded Packets List */}
            <div className="space-y-2">
              {filteredPackets.map((pkt) => (
                <div key={pkt.id} className="p-4 bg-stone-900 rounded-2xl text-stone-100 font-mono text-xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-orange-600/40 border border-orange-500 text-orange-300 text-[10px] font-bold uppercase">
                        {pkt.proto}
                      </span>
                      <span className="text-stone-400">{pkt.time}</span>
                    </div>
                    <div className="text-[11px] text-stone-300">
                      {pkt.src} &rarr; {pkt.dst}
                    </div>
                  </div>

                  <p className="text-emerald-400 text-[11px]">{pkt.summary}</p>
                  <div className="text-[10px] text-stone-500 truncate">{pkt.hex}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 6: LAYER 2 DEFENSES (DHCP SNOOPING + DAI)                        */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "sec-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <ShieldCheck size={14} />
                  <span>LAYER 2 ENTERPRISE SWITCH DEFENSES</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  DHCP Snooping &amp; Dynamic ARP Inspection (DAI)
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Toggle switch security features on and off. Launch simulated Rogue DHCP offers and ARP Poisoning attacks to observe how security controls validate frames against trusted binding tables.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDhcpSnoopingEnabled(!dhcpSnoopingEnabled)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    dhcpSnoopingEnabled
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                  }`}
                >
                  <Shield size={14} />
                  <span>DHCP Snooping: {dhcpSnoopingEnabled ? "ENABLED" : "DISABLED"}</span>
                </button>

                <button
                  onClick={() => setDaiEnabled(!daiEnabled)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    daiEnabled
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                  }`}
                >
                  <Lock size={14} />
                  <span>DAI: {daiEnabled ? "ENABLED" : "DISABLED"}</span>
                </button>
              </div>
            </div>

            {/* Attack Buttons */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Simulated Attack Testing:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={testRogueDhcpAttack}
                  className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition cursor-pointer"
                >
                  Transmit Rogue DHCPOFFER
                </button>
                <button
                  onClick={testArpPoisonAttack}
                  className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition cursor-pointer"
                >
                  Transmit Poisoned ARP Frame
                </button>
              </div>
            </div>

            {/* Attack Log Output */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Switch Security Event Log:
              </h4>

              {secAttackLog.length === 0 ? (
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 text-center text-xs text-stone-500">
                  No attack events logged yet. Click an attack button above to test switch defense reactions.
                </div>
              ) : (
                secAttackLog.map((ev) => (
                  <div
                    key={ev.id}
                    className={`p-4 rounded-2xl border text-xs font-mono transition ${
                      ev.status === "BLOCKED"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : "bg-red-50 border-red-300 text-red-950"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold flex items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase ${
                            ev.status === "BLOCKED" ? "bg-emerald-600" : "bg-red-600"
                          }`}
                        >
                          {ev.status}
                        </span>
                        <span>{ev.type} on {ev.port}</span>
                      </span>
                    </div>
                    <p className="font-sans text-[11px] mt-1">{ev.note}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 7: LINUX & CISCO CLI REFERENCE                                   */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "cli" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
              <Terminal size={14} />
              <span>PRODUCTION COMMAND CHEATSHEET</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900">Network Host Configuration CLI Reference</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Linux Block */}
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-emerald-400 font-bold">
                  <span>Linux (iproute2 &amp; tcpdump)</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `ip addr show\nip route show\nip neigh show\nsudo tcpdump -ni any icmp\ndig @1.1.1.1 example.com`,
                        "linux-cli"
                      )
                    }
                    className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "linux-cli" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCodeId === "linux-cli" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# 1. Interface and IP addressing
ip link show
ip addr show dev eth0

# 2. Routing and default gateway
ip route show
ip route get 192.168.30.10

# 3. ARP neighbor table
ip neigh show
ip neigh flush dev eth0

# 4. Live packet captures
sudo tcpdump -ni eth0 icmp
sudo tcpdump -ni eth0 'udp port 67 or 68'
sudo tcpdump -ni eth0 port 53`}
                </pre>
              </div>

              {/* Cisco IOS Block */}
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-orange-400 font-bold">
                  <span>Cisco IOS Switch &amp; Router Security</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `ip dhcp snooping\nip dhcp snooping vlan 10\ninterface g0/1\nip dhcp snooping trust\nexit\nip arp inspection vlan 10`,
                        "cisco-cli"
                      )
                    }
                    className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "cisco-cli" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCodeId === "cisco-cli" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# Configure DHCP Relay on Layer 3 interface
interface vlan 10
 ip helper-address 192.168.100.10
 exit

# Enable DHCP Snooping globally and per VLAN
ip dhcp snooping
ip dhcp snooping vlan 10,20

# Trust uplink to real DHCP server
interface gigabitEthernet 0/1
 ip dhcp snooping trust
 exit

# Enable Dynamic ARP Inspection (DAI)
ip arp inspection vlan 10,20`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 8: KNOWLEDGE CHECK ASSESSMENT                                    */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "quiz" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Award size={14} />
                  <span>ASSESSMENT MODULE</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Module 8 Examination: Configuration &amp; Protocols</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Verify your understanding of DHCP DORA exchanges, ARP address resolution, ICMP diagnostic codes, DNS dependencies, and Layer 2 security controls.
                </p>
              </div>

              {showResults && (
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono">
                  <div className="text-[10px] uppercase text-stone-400 font-bold">Your Score</div>
                  <div className="text-lg font-bold text-[#ea580c]">
                    {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.correct;
                return (
                  <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                    <div className="font-bold text-sm text-stone-900">
                      {idx + 1}. {q.question}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        let optionStyle = "bg-white border-stone-200 text-stone-700 hover:border-stone-400";
                        if (showResults) {
                          if (optIdx === q.correct) {
                            optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "bg-red-50 border-red-500 text-red-900";
                          } else {
                            optionStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                          }
                        } else if (isSelected) {
                          optionStyle = "bg-orange-50 border-[#ea580c] text-[#ea580c] font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={showResults}
                            onClick={() => handleSelectAnswer(q.id, optIdx)}
                            className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${optionStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {showResults && (
                      <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-600">
                        <strong className="text-stone-900">Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-stone-200">
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setShowResults(false);
                }}
                className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
              >
                Reset Exam
              </button>

              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-orange-600 text-white text-xs font-bold transition cursor-pointer shadow disabled:opacity-40"
              >
                Submit Assessment
              </button>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 9: LAB & INCIDENT REPORT CAPSTONE                                */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "lab-report" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <ListChecks size={14} />
                  <span>LAB VERIFICATION &amp; CAPSTONE INCIDENT REPORT</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Host Configuration Lab &amp; Report Generator</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Complete the 7 diagnostic stages of the hands-on lab. Copy the structured Root Cause Analysis Incident Report for your portfolio or assessment submission.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(incidentReportTemplate, "inc-report")}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow"
              >
                {copiedCodeId === "inc-report" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedCodeId === "inc-report" ? "Report Copied" : "Copy Incident Report Template"}</span>
              </button>
            </div>

            {/* Checklist */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Interactive Diagnostic Milestone Checklist:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { key: "inspectHost", label: "1. Inspect interface status & verify /24 prefix (ip addr show)" },
                  { key: "testGateway", label: "2. Ping local default gateway and verify ARP REACHABLE (ip neigh)" },
                  { key: "testRouteGet", label: "3. Verify kernel forwarding path for remote host (ip route get)" },
                  { key: "testRemoteIp", label: "4. Test remote IP connectivity & trace hops (ping & traceroute)" },
                  { key: "testDns", label: "5. Query DNS records separately from IP reachability (dig @resolver)" },
                  { key: "capturePcap", label: "6. Capture ICMP and ARP traffic during test failure (tcpdump)" },
                  { key: "remedyApplied", label: "7. Apply subnet mask / gateway correction and verify full recovery" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleChecklistItem(item.key)}
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-stone-200 bg-white text-left text-stone-800 transition cursor-pointer hover:border-orange-300"
                  >
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        labChecklist[item.key]
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {labChecklist[item.key] && <Check size={12} />}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Markdown Report Preview */}
            <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-2">
              <div className="text-stone-400 text-[10px] uppercase font-bold flex items-center justify-between border-b border-stone-800 pb-2">
                <span>Markdown Incident Report Preview (RFC 2350 Compliance)</span>
                <span>Production Ready</span>
              </div>
              <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-80 whitespace-pre-wrap">
                {incidentReportTemplate}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks/routing")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 7 — Routing &amp; Router Architecture</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/tcp");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.02]"
          >
            <span>Next: Module 9 — TCP: Reliable Transport</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
