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
  Gauge,
  SlidersHorizontal,
  Clock,
  Wifi,
  Smartphone,
  Flame,
  Volume2,
  LockKeyhole,
  FileSearch,
  FileCheck,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 11                        */
/* DNS AND INTERNET NAMING ARCHITECTURE                                       */
/* -------------------------------------------------------------------------- */

export default function NetworkDNS() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | resolution-sim | wire-format-sim | records-sim | ttl-sim | tunneling-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("11.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: RECURSIVE VS ITERATIVE RESOLUTION LADDER                      */
  /* -------------------------------------------------------------------------- */
  const [queryDomain, setQueryDomain] = useState("api.prepspaces.com");
  const [cacheStatus, setCacheStatus] = useState("miss"); // hit | miss
  const [resolutionStep, setResolutionStep] = useState(0);

  const resolutionSteps = useMemo(() => {
    if (cacheStatus === "hit") {
      return [
        {
          step: 1,
          from: "Browser (Client)",
          to: "Recursive Resolver (1.1.1.1)",
          type: "Recursive Query",
          detail: `Standard query A ${queryDomain} (RD=1, Recursion Desired)`,
        },
        {
          step: 2,
          from: "Recursive Resolver (1.1.1.1)",
          to: "Browser (Client)",
          type: "Cached Answer (0 RTT Hierarchy)",
          detail: `CACHE HIT: Returning 104.21.72.15 (TTL remaining: 284s). No external lookups required!`,
        },
      ];
    }

    return [
      {
        step: 1,
        from: "Browser (Stub Resolver)",
        to: "Recursive Resolver (1.1.1.1)",
        type: "Recursive Query",
        detail: `Client asks: 'Resolve A ${queryDomain}'. Flag: RD=1 (Recursion Desired).`,
      },
      {
        step: 2,
        from: "Recursive Resolver",
        to: "Root Server (a.root-servers.net)",
        type: "Iterative Query",
        detail: `Resolver asks Root: 'Where is ${queryDomain}?'`,
      },
      {
        step: 3,
        from: "Root Server",
        to: "Recursive Resolver",
        type: "Referral (Authority)",
        detail: `Root replies: 'I don't know the IP, but here are the authoritative NS servers for .com (a.gtld-servers.net) + Glue A records.'`,
      },
      {
        step: 4,
        from: "Recursive Resolver",
        to: "TLD Server (a.gtld-servers.net)",
        type: "Iterative Query",
        detail: `Resolver asks .com TLD: 'Where is ${queryDomain}?'`,
      },
      {
        step: 5,
        from: "TLD Server",
        to: "Recursive Resolver",
        type: "Referral (Authority)",
        detail: `TLD replies: 'Delegation found! Query prepspaces.com authoritative servers: ns1.prepspaces.com, ns2.prepspaces.com.'`,
      },
      {
        step: 6,
        from: "Recursive Resolver",
        to: "Authoritative NS (ns1.prepspaces.com)",
        type: "Iterative Query",
        detail: `Resolver asks Authoritative Server: 'What is the A record for ${queryDomain}?'`,
      },
      {
        step: 7,
        from: "Authoritative NS",
        to: "Recursive Resolver",
        type: "Authoritative Answer (AA=1)",
        detail: `Authoritative replies: '${queryDomain} A 104.21.72.15 (TTL=300s, AA=1)'.`,
      },
      {
        step: 8,
        from: "Recursive Resolver",
        to: "Browser (Stub Resolver)",
        type: "Final Answer (RA=1)",
        detail: `Resolver caches response and returns 104.21.72.15 to the client. Resolution complete!`,
      },
    ];
  }, [queryDomain, cacheStatus]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: 12-BYTE DNS HEADER & BIT-FLAG DISSECTOR                       */
  /* -------------------------------------------------------------------------- */
  const [headerId, setHeaderId] = useState(48291);
  const [flagQr, setFlagQr] = useState(1); // 0=Query, 1=Response
  const [flagAa, setFlagAa] = useState(1); // Authoritative Answer
  const [flagTc, setFlagTc] = useState(0); // Truncated
  const [flagRd, setFlagRd] = useState(1); // Recursion Desired
  const [flagRa, setFlagRa] = useState(1); // Recursion Available
  const [rcode, setRcode] = useState(0); // 0 NOERROR, 3 NXDOMAIN, 2 SERVFAIL, 5 REFUSED

  const computedFlagsHex = useMemo(() => {
    // 16-bit flags word: [QR(1) | Opcode(4) | AA(1) | TC(1) | RD(1) | RA(1) | Z(3) | RCODE(4)]
    const flagsInt =
      (flagQr << 15) |
      (0 << 11) | // Opcode 0 = Standard Query
      (flagAa << 10) |
      (flagTc << 9) |
      (flagRd << 8) |
      (flagRa << 7) |
      (0 << 4) | // Z reserved
      (rcode & 0xf);
    return `0x${flagsInt.toString(16).toUpperCase().padStart(4, "0")}`;
  }, [flagQr, flagAa, flagTc, flagRd, flagRa, rcode]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: RESOURCE RECORD & ZONE FILE EXPLORER                          */
  /* -------------------------------------------------------------------------- */
  const [selectedRecordType, setSelectedRecordType] = useState("A");

  const mockZoneDatabase = {
    A: {
      name: "prepspaces.com.",
      ttl: 300,
      class: "IN",
      type: "A",
      data: "104.21.72.15",
      explanation: "Maps domain name directly to a 32-bit IPv4 address.",
    },
    AAAA: {
      name: "prepspaces.com.",
      ttl: 300,
      class: "IN",
      type: "AAAA",
      data: "2606:4700:3037::ac43:80b5",
      explanation: "Maps domain name to a 128-bit IPv6 address.",
    },
    CNAME: {
      name: "www.prepspaces.com.",
      ttl: 3600,
      class: "IN",
      type: "CNAME",
      data: "prepspaces.com.",
      explanation: "Canonical Name: aliases www.prepspaces.com to root apex. Cannot coexist with SOA/NS at root apex!",
    },
    MX: {
      name: "prepspaces.com.",
      ttl: 3600,
      class: "IN",
      type: "MX",
      data: "10 mail1.prepspaces.com., 20 mail2.prepspaces.com.",
      explanation: "Mail Exchanger: specifies inbound mail servers with priority preference (lower number = higher priority).",
    },
    TXT: {
      name: "prepspaces.com.",
      ttl: 3600,
      class: "IN",
      type: "TXT",
      data: '"v=spf1 include:_spf.google.com ~all"',
      explanation: "Text record used for SPF anti-spoofing policy, DKIM public keys, and third-party domain ownership validation.",
    },
    PTR: {
      name: "15.72.21.104.in-addr.arpa.",
      ttl: 86400,
      class: "IN",
      type: "PTR",
      data: "edge.prepspaces.com.",
      explanation: "Pointer record: performs Reverse DNS (rDNS) resolving IP back to FQDN via in-addr.arpa reverse zone.",
    },
    SOA: {
      name: "prepspaces.com.",
      ttl: 86400,
      class: "IN",
      type: "SOA",
      data: "ns1.prepspaces.com. hostmaster.prepspaces.com. 2026101501 7200 3600 1209600 300",
      explanation: "Start of Authority: defines primary nameserver, admin email, zone serial number, and negative caching minimum TTL (300s).",
    },
    SRV: {
      name: "_sip._tcp.prepspaces.com.",
      ttl: 3600,
      class: "IN",
      type: "SRV",
      data: "10 60 5060 sipserver.prepspaces.com.",
      explanation: "Service Locator: specifies symbolic service (_sip), protocol (_tcp), priority (10), weight (60), port (5060), and target host.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: TTL DECAY & CACHE INVALIDATION                               */
  /* -------------------------------------------------------------------------- */
  const [initialTtl, setInitialTtl] = useState(3600);
  const [elapsedTime, setElapsedTime] = useState(1200);

  const remainingTtl = Math.max(0, initialTtl - elapsedTime);
  const isExpired = remainingTtl === 0;

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5: DNS TUNNELING & SHANNON ENTROPY DETECTOR                      */
  /* -------------------------------------------------------------------------- */
  const [tunnelInput, setTunnelInput] = useState("a8F1k2m9q7v4x6z3p9L2w1c7.tunnel.exfil-corp.test");

  const entropyAnalysis = useMemo(() => {
    const raw = tunnelInput.trim();
    const parts = raw.split(".");
    const targetLabel = parts[0] || "";

    if (!targetLabel) return { entropy: 0, isSuspicious: false, labelLen: 0 };

    // Calculate Shannon Entropy: H = -sum(p * log2(p))
    const freqMap = {};
    for (const char of targetLabel) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }

    const len = targetLabel.length;
    let entropy = 0;
    for (const char in freqMap) {
      const p = freqMap[char] / len;
      entropy -= p * Math.log2(p);
    }

    const isSuspicious = entropy > 3.6 && len >= 16;

    return {
      label: targetLabel,
      labelLen: len,
      entropy: Number(entropy.toFixed(3)),
      isSuspicious,
    };
  }, [tunnelInput]);

  /* -------------------------------------------------------------------------- */
  /* STATEFUL 10-QUESTION COMPREHENSIVE QUIZ                                   */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which component in the DNS architecture normally provides the final authoritative answer for records within its delegated zone?",
      options: [
        "A root server (e.g., a.root-servers.net)",
        "An Authoritative DNS server designated by the parent zone's NS delegation",
        "The client operating system's local hosts file",
        "A transparent NAT gateway router",
      ],
      correct: 1,
      explanation: "Authoritative nameservers hold the actual zone files containing records (A, AAAA, MX, etc.) for that specific domain. Root and TLD servers only provide referrals to the next nameserver in the hierarchy.",
    },
    {
      id: 2,
      question: "What is the difference between a Recursive query and an Iterative query in DNS resolution?",
      options: [
        "Recursive queries use TCP port 53, while iterative queries use UDP port 53 exclusively.",
        "In a recursive query, the resolver assumes responsibility to find the complete answer; in an iterative query, the queried server returns the best referral it has without querying further.",
        "Recursive queries are only used for reverse IPv6 lookups, while iterative queries resolve IPv4 addresses.",
        "There is no difference; the terms are synonymous in RFC 1035.",
      ],
      correct: 1,
      explanation: "A client stub resolver sends a recursive query (RD=1) to a recursive caching resolver. The recursive resolver then performs a series of iterative queries against root, TLD, and authoritative nameservers, following referrals until the record is found.",
    },
    {
      id: 3,
      question: "Why can a standard CNAME record generally NOT coexist with other records at the zone apex (e.g., prepspaces.com)?",
      options: [
        "Because CNAME records cannot exceed 16 characters in total length.",
        "Because DNS RFC rules mandate that a CNAME owner name cannot have any other resource records, but the zone apex must contain SOA and NS records.",
        "Because CNAME records only point to IP addresses, which conflicts with IPv6.",
        "Because BGP routers reject routing tables with aliased root records.",
      ],
      correct: 1,
      explanation: "Under RFC 1034 section 3.6.2, if a CNAME record exists at a node, no other data may exist at that node. Because every zone apex requires SOA and NS records for zone delegation, a conventional CNAME at the apex violates DNS specifications (prompting modern DNS providers to invent CNAME flattening / ALIAS records).",
    },
    {
      id: 4,
      question: "What does an NXDOMAIN response code signify compared to a NODATA response in DNS?",
      options: [
        "NXDOMAIN means the entire queried domain name does not exist; NODATA (NOERROR with 0 answers) means the name exists, but has no records of the requested type.",
        "NXDOMAIN means the DNS server has crashed, while NODATA means the connection timed out.",
        "NXDOMAIN is only returned over DNS over HTTPS, while NODATA is returned over plain UDP.",
        "NXDOMAIN indicates the record has expired from cache, while NODATA indicates DNSSEC validation failure.",
      ],
      correct: 0,
      explanation: "RCODE 3 (NXDOMAIN) asserts that the domain name itself does not exist in the zone. In contrast, a NODATA response returns RCODE 0 (NOERROR) but an empty Answer section (ANCOUNT=0), meaning the domain exists (e.g. it has an A record), but lacks the requested type (e.g. AAAA).",
    },
    {
      id: 5,
      question: "Where is the negative caching lifetime (how long resolvers may cache an NXDOMAIN) specified for a DNS zone?",
      options: [
        "In the TTL field of the parent zone's root server",
        "In the MINIMUM field of the zone's Start of Authority (SOA) resource record (RFC 2308)",
        "Hardcoded to exactly 86,400 seconds in all operating system kernels",
        "Inside the client's DHCP lease offer",
      ],
      correct: 1,
      explanation: "Per RFC 2308, negative caching duration is governed by the MINIMUM field of the authoritative SOA record (or the SOA record's own TTL, whichever is smaller). Resolvers cache negative results to avoid bombarding authorities with repeated queries for nonexistent names.",
    },
    {
      id: 6,
      question: "How does DNS over HTTPS (DoH — RFC 8484) differ from DNS over TLS (DoT — RFC 7858) operationally?",
      options: [
        "DoH encrypts DNS queries inside HTTPS sessions over port 443 (blending with web traffic), whereas DoT runs DNS directly over TLS on dedicated TCP port 853.",
        "DoT requires DNSSEC keys, whereas DoH operates entirely unencrypted.",
        "DoH is only supported on mobile Android devices, while DoT is only supported on Windows Server.",
        "DoT disables caching, whereas DoH caches records indefinitely.",
      ],
      correct: 0,
      explanation: "DoT uses a dedicated TCP port (853) with raw TLS framing, making it easy for enterprise firewalls to identify, monitor, or block. DoH tunnels DNS wire messages inside standard HTTPS (HTTP/2 or HTTP/3) requests on port 443, making it indistinguishable from regular web traffic by port number alone.",
    },
    {
      id: 7,
      question: "What security vulnerability did the Kaminsky DNS cache poisoning attack exploit, and what modern defense prevents it?",
      options: [
        "Buffer overflows in BIND; mitigated by compiling with AddressSanitizer.",
        "Predictable 16-bit DNS Transaction IDs combined with fixed UDP source ports; mitigated by Source Port Randomization (SPR) and DNSSEC validation.",
        "Weak RSA key lengths in DoT certificates; mitigated by elliptic curve Curve25519.",
        "Lack of IP checksums in IPv6; mitigated by RFC 8200.",
      ],
      correct: 1,
      explanation: "Dan Kaminsky demonstrated in 2008 that an attacker querying random subdomains could flood a recursive resolver with forged responses matching the 16-bit Transaction ID (65,536 possibilities). Modern resolvers randomize both the 16-bit Transaction ID and the 16-bit UDP source port (yielding ~4 billion entropy states) and validate cryptographic DNSSEC signatures.",
    },
    {
      id: 8,
      question: "Which of the following is a key limitation of DNSSEC (DNS Security Extensions)?",
      options: [
        "DNSSEC does not provide confidentiality or encrypt DNS queries in transit; an on-path observer can still read queries and answers.",
        "DNSSEC cannot authenticate IPv6 (AAAA) records.",
        "DNSSEC replaces the DNS hierarchy with a peer-to-peer blockchain.",
        "DNSSEC only works if clients communicate over satellite links.",
      ],
      correct: 0,
      explanation: "DNSSEC provides cryptographic data integrity and origin authentication (verifying records were not altered by an attacker) using digital signatures (RRSIG). It does NOT encrypt the query or response—passive eavesdroppers can still read DNS queries unless DoH or DoT is used.",
    },
    {
      id: 9,
      question: "In security investigations, why are repeated high-volume TXT queries to long, high-entropy subdomain labels considered an indicator of DNS tunneling?",
      options: [
        "Because TXT records are illegal in RFC 1035 and indicate a corrupted kernel.",
        "Because attackers encode binary exfiltrated data or command-and-control payloads into alphanumeric subdomain labels and use TXT responses to tunnel data through recursive resolvers.",
        "Because TXT records automatically disable firewall state tables.",
        "Because DNS tunneling can only occur if an attacker has physical access to root servers.",
      ],
      correct: 1,
      explanation: "DNS tunneling tools (e.g. dnscat2, iodine) encode stolen data or shell commands into base32/base64 labels (e.g., `<encoded-payload>.c2.attacker.com`). Because organizations permit outbound UDP 53 to their recursive resolvers, the queries bypass firewalls and reach the attacker's authoritative server.",
    },
    {
      id: 10,
      question: "When troubleshooting with `dig +trace example.com`, what does the tool specifically do?",
      options: [
        "It queries the local /etc/hosts file 100 times to test file I/O latency.",
        "It mimics an iterative resolver, querying root servers ('.'), following referrals to TLD servers, and finally querying the authoritative nameservers directly from your machine.",
        "It automatically deploys a BIND9 DNS server inside a local Docker container.",
        "It decrypts all DoH traffic passing across the local Wi-Fi interface.",
      ],
      correct: 1,
      explanation: "`dig +trace` bypasses the recursive resolver's cache. It contacts the root servers directly, receives referrals to the appropriate TLD nameservers, follows those referrals to the domain's authoritative nameservers, and prints each hierarchical delegation step.",
    },
  ];

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers, quizQuestions]);

  /* -------------------------------------------------------------------------- */
  /* LAB CHECKLIST & REPORT TEMPLATE                                           */
  /* -------------------------------------------------------------------------- */
  const [labChecks, setLabChecks] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
  });

  const toggleLabCheck = (key) => {
    setLabChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecksCount = Object.values(labChecks).filter(Boolean).length;

  const dnsReportTemplate = `# TECHNICAL LAB & INCIDENT REPORT: DNS RESOLUTION & FORENSIC INVESTIGATION
**Standard:** RFC 1034 / 1035 · RFC 2308 (Negative Caching) · RFC 7858 (DoT) · RFC 8484 (DoH)
**Investigator:** Senior Network Operations & SOC Analyst
**Target Domain:** prepspaces.com / Synthetic Threat Telemetry
**Date:** ${new Date().toISOString().slice(0, 10)}

---

## 1. Executive Summary & Resolution Tracing
This investigation traces authoritative DNS hierarchy resolution, compares latency and response variance across recursive resolvers (Local ISP vs Cloudflare 1.1.1.1 vs Google 8.8.8.8), and performs forensic traffic analysis on suspicious high-entropy DNS query activity.

---

## 2. Hierarchical Resolution Trace Log (dig +trace prepspaces.com)

\`\`\`text
; <<>> DiG 9.18.28 <<>> +trace prepspaces.com
;; global options: +cmd
.                       518400  IN  NS  a.root-servers.net.
.                       518400  IN  NS  b.root-servers.net.
;; Received 239 bytes from 127.0.0.53#53 in 12 ms

com.                    172800  IN  NS  a.gtld-servers.net.
com.                    172800  IN  NS  b.gtld-servers.net.
;; Received 1174 bytes from 198.41.0.4#53(a.root-servers.net) in 18 ms

prepspaces.com.         172800  IN  NS  ns1.prepspaces.com.
prepspaces.com.         172800  IN  NS  ns2.prepspaces.com.
;; Received 108 bytes from 192.5.6.30#53(a.gtld-servers.net) in 24 ms

prepspaces.com.         300     IN  A   104.21.72.15
prepspaces.com.         300     IN  AAAA 2606:4700:3037::ac43:80b5
;; Received 88 bytes from 172.64.35.12#53(ns1.prepspaces.com) in 15 ms
;; Total Resolution Latency: 69 ms (Cold Cache Hierarchy Walk)
\`\`\`

---

## 3. Forensic Investigation of Synthetic Threat Log (Client: PC-17)

| Time Window | Source IP / Host | Query String | Record Type | RCODE | Forensic Assessment |
|---|---|---|---|---|---|
| 09:01:02 | PC-17 (10.0.4.17) | \`a8F1k2m9q7v4x6z3.lab.example.test\` | TXT | NOERROR | Shannon Entropy: 3.82 (High) &bull; Encoded chunk 1 |
| 09:01:03 | PC-17 (10.0.4.17) | \`p3R8t6w2n9k5y1c7.lab.example.test\` | TXT | NOERROR | Shannon Entropy: 3.79 (High) &bull; Encoded chunk 2 |
| 09:01:04 | PC-17 (10.0.4.17) | \`m7Q2v9b4s1d8f5h6.lab.example.test\` | TXT | NOERROR | Shannon Entropy: 3.91 (High) &bull; Encoded chunk 3 |
| 09:01:08 | PC-17 (10.0.4.17) | \`random-name.example.test\` | A | NXDOMAIN | C2 keepalive / negative probe |

### Analysis Findings:
1. **Entropy Metric:** Subdomain labels exceed standard English naming entropy (>3.6), indicating base64 or hex-encoded payload chunks.
2. **Timing & Record Anomalies:** Bursts of 1 query/sec for \`TXT\` records from an internal workstation (PC-17) that normally issues \`A\`/\`AAAA\` queries for corporate portals.
3. **Corroborating Evidence Required:** Collect PC-17 process table (\`ps aux\`, \`Get-Process\`), inspect active UDP socket owners, and check egress proxy logs for matching TLS outbound sessions.

---

## 4. Remediation & Hardening Recommendations
1. **Enforce Response Policy Zones (RPZ):** Null-route (\`0.0.0.0\`) queries destined for \`*.lab.example.test\` at the corporate recursive resolver.
2. **Deploy DNS Inspection & Rate Limiting:** Enforce a maximum query rate of 10 TXT queries/minute per endpoint; alert on labels with Shannon entropy $H > 3.6$.
3. **Isolate Compromised Host:** Quarantine PC-17 via 802.1X VLAN isolation; perform memory acquisition for running unauthorized tunneling binaries (e.g., iodine, dnscat2).
4. **Mandate Encrypted DNS with Centralized Policy:** Configure enterprise-wide DoT/DoH to approved internal resolvers; block external outbound UDP/TCP 53 to prevent shadow DNS bypasses.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Banner & Module Navigation Header */}
      <div className="bg-[#18181b] text-white border-b border-stone-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/networks")}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition cursor-pointer"
              title="Return to Computer Networks Syllabus"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white">
                  Module 11
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Computer Networks &amp; Internet Engineering
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                DNS &amp; Internet Naming Architecture
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono bg-stone-900 border border-stone-700 px-2.5 py-1 rounded text-stone-300">
              RFC 1034 · RFC 1035 · RFC 8484
            </span>
            <button
              onClick={() => {
                setActiveTab("quiz");
                window.scrollTo({ top: 380, behavior: "smooth" });
              }}
              className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-xs font-bold text-white transition flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Award size={14} />
              <span>Assessment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Course Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-medium">
                <Globe size={14} className="text-orange-600" />
                <span>Distributed Namespace, Zone Delegation, Encrypted DNS &amp; Forensics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Translating Human Intent to Global Network Routing
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                The Domain Name System (DNS) is the global, distributed, hierarchical database that bridges human-readable names with numerical IP addresses. When DNS misbehaves, the internet ceases to function for end users even when underlying fiber links and BGP routes are operational. Master root authorities, recursive vs iterative lookups, 12-byte wire headers, resource records (A, AAAA, CNAME, MX, TXT, PTR), negative caching, DoH/DoT encryption, DNSSEC trust chains, and forensic DNS tunneling detection.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 shrink-0">
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-stone-900">13 Named</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">Root Authorities</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-orange-600">12 Bytes</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">DNS Wire Header</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-stone-900">Port 853 / 443</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">DoT &amp; DoH</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-emerald-600">RFC 2308</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">Negative Caching</div>
              </div>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="mt-8 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center gap-2">
            {[
              { id: "theory", label: "Core Theory (11.1 - 11.12)", icon: BookOpen },
              { id: "resolution-sim", label: "Recursive vs Iterative Ladder", icon: Workflow },
              { id: "wire-format-sim", label: "12-Byte Header & Flag Dissector", icon: Sliders },
              { id: "records-sim", label: "Resource Record & Zone File Sandbox", icon: Database },
              { id: "ttl-sim", label: "TTL Decay & Cache Invalidation", icon: Clock },
              { id: "tunneling-sim", label: "DNS Tunneling & Entropy Detector", icon: ShieldCheck },
              { id: "cli", label: "Production CLI & Linux Toolkit", icon: Terminal },
              { id: "quiz", label: "Assessment Exam (10 Questions)", icon: Award },
              { id: "lab-report", label: "Lab Guide & Forensic Report", icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    isActive
                      ? "bg-orange-600 text-white shadow-sm"
                      : "bg-[#fbfaf7] text-stone-600 hover:bg-stone-200/70 border border-[#e7e3da]"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <div className="mb-8">
          <ModuleNav currentModuleId="dns" course="networks" />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CORE THEORY CURRICULUM (SECTIONS 11.1 - 11.12)              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-4 border border-[#e7e3da] sticky top-20 shadow-sm">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#e7e3da] text-xs font-bold uppercase tracking-wider text-stone-500">
                  <Layers size={14} />
                  <span>Module 11 Sections</span>
                </div>
                <nav className="space-y-1">
                  {[
                    { id: "11.1", title: "11.1 What DNS Does & Why It Matters" },
                    { id: "11.2", title: "11.2 DNS Hierarchy, Roots & Zones" },
                    { id: "11.3", title: "11.3 Recursive vs Iterative Resolution" },
                    { id: "11.4", title: "11.4 DNS Wire Format & Header Flags" },
                    { id: "11.5", title: "11.5 Essential Resource Records (RR)" },
                    { id: "11.6", title: "11.6 TTL, Caching & Negative Responses" },
                    { id: "11.7", title: "11.7 Encrypted DNS: DoT & DoH" },
                    { id: "11.8", title: "11.8 DNS Security, Poisoning & DNSSEC" },
                    { id: "11.9", title: "11.9 DNS Tunneling & Threat Hunting" },
                    { id: "11.10", title: "11.10 Linux DNS Troubleshooting Toolkit" },
                    { id: "11.11", title: "11.11 Hands-On Lab: Trace & Forensics" },
                    { id: "11.12", title: "11.12 SRE Incident Reporting Standards" },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveSection(sec.id);
                        const el = document.getElementById(`section-${sec.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                        activeSection === sec.id
                          ? "bg-orange-50 text-orange-700 font-bold border-l-4 border-orange-600"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                      {activeSection === sec.id && <ChevronRight size={12} className="shrink-0 text-orange-600" />}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Theory Content Body */}
            <div className="lg:col-span-3 space-y-10">
              {/* SECTION 11.1 */}
              <section id="section-11.1" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.1</span>
                  <span>·</span>
                  <span>Architectural Overview</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  What DNS Does &amp; Why It Matters
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  When a user enters <code>https://prepspaces.com</code> into a web browser, the browser cannot open an IP socket without first obtaining the numerical IP address of the destination server. Humans remember names; routers forward IP datagrams. The <strong>Domain Name System (DNS)</strong>, specified by Paul Mockapetris in 1983 (RFC 882 / RFC 883, updated in RFC 1034 / RFC 1035), provides the global, hierarchical, distributed naming infrastructure that translates human-readable identifiers into numerical endpoints.
                </p>
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 my-4 text-xs">
                  <div className="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <AlertTriangle size={14} className="text-amber-600" />
                    <span>Fundamental Architectural Distinction: Resolution vs. Connectivity</span>
                  </div>
                  <p className="text-amber-950 leading-relaxed">
                    DNS resolution and network connectivity are completely independent systems. A domain name can resolve with 100% success (returning an A record) even if the target web server is completely crashed or unreachable. Conversely, a web server can be running perfectly at <code>104.21.72.15</code>, but users will report "the site is down" if DNS resolution fails due to a misconfigured nameserver, expired TTL, or firewall drop on port 53.
                  </p>
                </div>
              </section>

              {/* SECTION 11.2 */}
              <section id="section-11.2" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.2</span>
                  <span>·</span>
                  <span>Hierarchical Architecture</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  DNS Architecture: Root, TLDs &amp; Delegated Zones
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  DNS is structured as an inverted tree hierarchy, read strictly from right to left:
                </p>

                <div className="p-6 rounded-2xl bg-[#18181b] text-white font-mono text-xs my-6">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 pb-2 border-b border-stone-800">
                    The Global Inverted Domain Tree Hierarchy
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto leading-relaxed">
{`                        [ . ] (DNS Root Zone)
                       /      |              \\
                     .com    .org            .edu
                    /          \\               \\
            prepspaces.com   wikipedia.org   berkeley.edu
              /        \\
      api.prepspaces  www.prepspaces`}
                  </pre>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">1. The Root Zone ("."):</span>
                    <p className="text-stone-600 leading-relaxed">
                      At the pinnacle of the naming tree is the root zone. While there are 13 named root authority identifiers (<code>a.root-servers.net</code> through <code>m.root-servers.net</code>), they do not run on 13 physical computers. Using <strong>BGP Anycast routing</strong>, hundreds of redundant mirror instances are distributed across thousands of data centers worldwide, delivering high-availability query response times under 15ms.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">2. Top-Level Domains (TLDs):</span>
                    <p className="text-stone-600 leading-relaxed">
                      Divided into generic TLDs (gTLDs like <code>.com</code>, <code>.net</code>, <code>.org</code>) and country-code TLDs (ccTLDs like <code>.uk</code>, <code>.in</code>, <code>.de</code>). Managed by registries (such as Verisign for <code>.com</code>), TLD servers maintain authoritative delegations pointing to second-level domain nameservers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">3. Zones and Delegation:</span>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      A <em>domain</em> is a branch of the naming tree; a <em>zone</em> is an administrative boundary managed as a single contiguous unit. Delegation allows an organization to transfer authority over a child subtree (e.g. <code>learn.prepspaces.com</code>) to a dedicated nameserver cluster.
                    </p>
                    <div className="p-2.5 bg-stone-100 rounded text-stone-800 font-mono text-[11px]">
                      <strong>Glue Records:</strong> If nameserver <code>ns1.prepspaces.com</code> lives <em>inside</em> the domain it serves (<code>prepspaces.com</code>), the parent <code>.com</code> zone must provide both the <code>NS</code> record AND an accompanying <code>A</code> record ("glue") directly in the referral. Otherwise, a circular dependency prevents the resolver from ever finding the nameserver's IP address!
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 11.3 */}
              <section id="section-11.3" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.3</span>
                  <span>·</span>
                  <span>Query Mechanics</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Recursive vs. Iterative DNS Query Resolution
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  DNS resolution relies on two distinct query operational modes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-xs">
                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200">
                    <h4 className="font-bold text-orange-950 text-sm mb-2">Recursive Query (Client &rarr; Resolver)</h4>
                    <p className="text-orange-900 leading-relaxed mb-2">
                      The requester (browser or OS stub resolver) asks: <em>"Find me the final IP answer for this hostname, or return an error."</em>
                    </p>
                    <p className="text-orange-900 leading-relaxed">
                      The recursive caching resolver (operated by an ISP, corporate network, or public provider like Cloudflare <code>1.1.1.1</code> or Google <code>8.8.8.8</code>) undertakes the entire lookup burden on behalf of the client.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200">
                    <h4 className="font-bold text-stone-900 text-sm mb-2">Iterative Query (Resolver &rarr; Hierarchy)</h4>
                    <p className="text-stone-700 leading-relaxed mb-2">
                      The resolver asks: <em>"Do you know the answer for this name?"</em>
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                      The authoritative server responds with the best referral it has: <em>"I do not know the IP, but ask this next nameserver in the hierarchy."</em> The resolver follows referrals iteratively down the tree until reaching the authoritative origin.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 11.4 */}
              <section id="section-11.4" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.4</span>
                  <span>·</span>
                  <span>Packet Anatomy</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  DNS Message Wire Format &amp; 12-Byte Header Flags
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Every DNS packet—whether transmitted over UDP port 53, TCP port 53, or inside TLS/HTTPS—shares the exact same binary wire structure defined in RFC 1035:
                </p>

                {/* 12-byte header visual */}
                <div className="border border-stone-300 rounded-2xl overflow-hidden my-6 font-mono text-xs">
                  <div className="grid grid-cols-2 bg-stone-100 text-stone-800 font-bold border-b border-stone-300 divide-x divide-stone-300 text-center p-2.5">
                    <div>Transaction ID (16 Bits)</div>
                    <div>Flags &amp; Codes (16 Bits)</div>
                  </div>
                  <div className="grid grid-cols-2 bg-stone-50 text-stone-800 font-bold border-b border-stone-300 divide-x divide-stone-300 text-center p-2.5">
                    <div>Questions Count / QDCOUNT (16 Bits)</div>
                    <div>Answers Count / ANCOUNT (16 Bits)</div>
                  </div>
                  <div className="grid grid-cols-2 bg-stone-50 text-stone-800 font-bold border-b border-stone-300 divide-x divide-stone-300 text-center p-2.5">
                    <div>Authority Records / NSCOUNT (16 Bits)</div>
                    <div>Additional Records / ARCOUNT (16 Bits)</div>
                  </div>
                  <div className="bg-orange-50/60 p-3 text-center text-orange-950 font-bold border-t border-stone-300">
                    Question Section + Answer Section + Authority Section + Additional Records
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm">Key DNS Header Flags:</div>
                  <ul className="list-disc pl-5 space-y-1 text-stone-700">
                    <li><strong>QR (1 bit):</strong> 0 = Query, 1 = Response.</li>
                    <li><strong>Opcode (4 bits):</strong> 0 = Standard query (QUERY), 1 = Inverse query, 2 = Status request.</li>
                    <li><strong>AA (Authoritative Answer, 1 bit):</strong> Set to 1 if the responding server is the direct authority for the zone.</li>
                    <li><strong>TC (Truncated, 1 bit):</strong> Set to 1 if the response exceeded 512 bytes (or EDNS0 buffer). Signals client to retry over TCP port 53!</li>
                    <li><strong>RD (Recursion Desired, 1 bit):</strong> Directed by client asking the resolver to perform recursive lookups.</li>
                    <li><strong>RA (Recursion Available, 1 bit):</strong> Returned by resolver confirming it supports recursive resolution.</li>
                    <li><strong>RCODE (Response Code, 4 bits):</strong>
                      <span className="block pl-4 mt-0.5 text-stone-600 font-mono">
                        0 = NOERROR (Success) &bull; 1 = FORMERR (Format Error) &bull; 2 = SERVFAIL (Resolver Failure) &bull; 3 = NXDOMAIN (Nonexistent Domain) &bull; 5 = REFUSED (Policy Block)
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 11.5 */}
              <section id="section-11.5" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.5</span>
                  <span>·</span>
                  <span>Resource Records</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Essential DNS Resource Records (RR) Anatomy
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Every record stored inside a zone file is a <strong>Resource Record (RR)</strong> containing a Name, Type, Class (usually <code>IN</code> for Internet), TTL, and RDATA payload:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">A &amp; AAAA Records:</span>
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Fundamental address mappings. <code>A</code> maps a hostname to a 32-bit IPv4 address (e.g. <code>104.21.72.15</code>). <code>AAAA</code> maps to a 128-bit IPv6 address (e.g. <code>2606:4700:3037::ac43:80b5</code>).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">CNAME (Canonical Name):</span>
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Aliases one domain name to another canonical name. <em>Crucial rule:</em> A CNAME cannot coexist with any other record type at that owner name. This prevents a conventional CNAME at the zone apex because the apex requires SOA and NS records.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">MX (Mail Exchanger):</span>
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Directs incoming email delivery for the domain. Includes an integer preference value (e.g. <code>10 mail1.example.com</code> vs <code>20 mail2.example.com</code>). Sending MTAs connect to the lowest preference number first.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">TXT Records (SPF, DKIM, DMARC):</span>
                    <p className="text-stone-600 leading-relaxed font-sans">
                      Carries arbitrary text metadata. Universally used for email security policies (SPF allowed IP lists, DKIM public cryptographic keys, DMARC alignment reporting) and SSL/TLS certificate ownership challenge validation.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 11.6 */}
              <section id="section-11.6" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.6</span>
                  <span>·</span>
                  <span>Caching &amp; TTL</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  TTL, Positive Caching, Negative Responses &amp; Propagation
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Without caching, the global internet would collapse under trillion-query floods directed at root and TLD nameservers.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <h4 className="font-bold text-stone-900 mb-1">Time to Live (TTL) Dynamics</h4>
                    <p className="text-stone-600 leading-relaxed">
                      The authoritative nameserver assigns a TTL (in seconds) to each record set. When a recursive resolver caches the record, it starts a local countdown timer. Subsequent queries from any client served by that resolver are answered directly from cache (0 RTT hierarchy latency) until the TTL reaches zero, at which point the record is evicted.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <h4 className="font-bold text-stone-900 mb-1">Negative Caching (RFC 2308)</h4>
                    <p className="text-stone-600 leading-relaxed">
                      DNS caches negative results (<code>NXDOMAIN</code> and <code>NODATA</code>) just like positive records. The duration is derived from the <code>MINIMUM</code> field in the authoritative zone's SOA record. This prevents malicious or broken scripts from overwhelming authoritative servers with continuous queries for nonexistent hostnames.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <h4 className="font-bold text-amber-900 mb-1">The "DNS Propagation Delay" Myth</h4>
                    <p className="text-amber-950 leading-relaxed">
                      Engineers often say "DNS takes 24 to 48 hours to propagate." DNS records do not actively propagate outward like a wave; rather, resolvers around the world simply hold their previously cached answers until their respective TTLs expire. To prepare for an IP address migration without downtime, experienced SREs lower the record's TTL to 300 seconds at least 48 hours in advance.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 11.7 */}
              <section id="section-11.7" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.7</span>
                  <span>·</span>
                  <span>Encrypted Transports</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Encrypted DNS: Conventional DNS vs DoT vs DoH
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Traditional DNS messages travel over cleartext UDP or TCP port 53. Any on-path observer (Wi-Fi eavesdropper, coffee shop router, ISP, or national firewall) can inspect every domain a user visits or inject spoofed answers. Two standards encrypt DNS queries:
                </p>

                <div className="overflow-x-auto my-4">
                  <table className="w-full text-xs text-left border border-stone-200 rounded-xl font-mono">
                    <thead>
                      <tr className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider border-b border-stone-200">
                        <th className="p-3 border-r border-stone-200">Protocol</th>
                        <th className="p-3 border-r border-stone-200">Port / Transport</th>
                        <th className="p-3 border-r border-stone-200">Eavesdropping Protection</th>
                        <th className="p-3">Enterprise Visibility &amp; Policy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Conventional DNS</td>
                        <td className="p-3 border-r border-stone-200">UDP/TCP 53</td>
                        <td className="p-3 text-red-600 font-bold">None (Cleartext Wire)</td>
                        <td className="p-3">Full passive inspection &amp; filtering</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">DNS over TLS (DoT — RFC 7858)</td>
                        <td className="p-3 border-r border-stone-200">TCP 853 (TLS)</td>
                        <td className="p-3 text-emerald-600 font-bold">Full in-transit encryption</td>
                        <td className="p-3">Dedicated port; easy to permit/restrict by firewall rule</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">DNS over HTTPS (DoH — RFC 8484)</td>
                        <td className="p-3 border-r border-stone-200">TCP/UDP 443 (HTTP/2 or HTTP/3)</td>
                        <td className="p-3 text-emerald-600 font-bold">Full in-transit encryption</td>
                        <td className="p-3 text-amber-700 font-bold">Blends with web traffic; difficult to enforce internal corporate controls</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">What Encrypted DNS Does NOT Solve:</span>
                  <p className="text-stone-600 leading-relaxed">
                    DoH and DoT protect the hop between the client and the resolver. They do NOT guarantee the resolver itself is honest, do NOT authenticate the origin zone data (only DNSSEC does that), and do NOT hide the destination IP address or Server Name Indication (SNI) when the client subsequently initiates the TLS handshake with the destination web server!
                  </p>
                </div>
              </section>

              {/* SECTION 11.8 */}
              <section id="section-11.8" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.8</span>
                  <span>·</span>
                  <span>Security &amp; DNSSEC</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  DNS Security: Kaminsky Poisoning &amp; DNSSEC Trust Chains
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Because traditional DNS responses are unsigned and connectionless, attackers historically forged fake DNS responses to poison resolver caches.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
                    <h4 className="font-bold text-red-950 mb-1">The Kaminsky Cache Poisoning Attack (2008)</h4>
                    <p className="text-red-900 leading-relaxed mb-2">
                      Dan Kaminsky discovered that an attacker could query a target resolver for randomly generated non-existent subdomains (e.g. <code>random123.bank.com</code>). While the resolver was querying the authoritative server, the attacker flooded the resolver with thousands of forged responses guessing the 16-bit Transaction ID. Once a forged response hit the matching ID, the attacker included an authoritative delegation record hijacking the entire <code>bank.com</code> domain in the resolver's cache!
                    </p>
                    <p className="text-red-900 font-bold">
                      Mitigation: Source Port Randomization (SPR) utilizing all 16 bits of the UDP source port alongside the 16-bit Transaction ID (expanding attack entropy to 2<sup>32</sup> &asymp; 4 billion combinations).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <h4 className="font-bold text-stone-900 mb-1">DNSSEC (DNS Security Extensions) Chain of Trust</h4>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      DNSSEC (RFC 4033 - 4035) introduces public-key cryptography to authenticate DNS data:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-stone-600 font-mono">
                      <li><strong>RRSIG:</strong> Digital signature attached to every record set, signed by the zone's private key.</li>
                      <li><strong>DNSKEY:</strong> Publishes the Zone Signing Key (ZSK) and Key Signing Key (KSK).</li>
                      <li><strong>DS (Delegation Signer):</strong> Hash of the child zone's KSK stored in the parent zone, establishing the cryptographic chain of trust down from the Root zone.</li>
                      <li><strong>NSEC / NSEC3:</strong> Cryptographically proves that a queried domain does NOT exist without exposing the entire zone file to zone-walking attacks.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* SECTION 11.9 */}
              <section id="section-11.9" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.9</span>
                  <span>·</span>
                  <span>Threat Detection</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  DNS Tunneling, Exfiltration &amp; Forensic Threat Hunting
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Virtually every enterprise network allows internal machines to send outbound DNS queries to internal recursive resolvers, which in turn query the internet. Threat actors abuse this ubiquity by using <strong>DNS Tunneling</strong> to exfiltrate stolen credit cards or establish Command-and-Control (C2) channels through firewalls.
                </p>

                <div className="p-4 rounded-2xl bg-[#18181b] text-white font-mono text-xs my-4">
                  <div className="text-orange-400 font-bold mb-2">DNS Tunneling Mechanics</div>
                  <pre className="text-stone-300 leading-relaxed">
{`Compromised Host ------------> Internal Resolver ------------> Attacker Auth NS
(Splits stolen file              (Forwarding                     (Reconstructs file
into Base64 labels)              standard UDP query)             from subdomains)

Query: a8F1k2m9q7v4x6z3.tunnel.attacker.com   ------> Writes stolen data to disk!
Response TXT: "c2_command_exec_powershell"    <------ Receives C2 instruction!`}
                  </pre>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">SOC Detection Metrics:</span>
                  <ul className="list-disc pl-5 space-y-1 text-stone-700">
                    <li><strong>Shannon Entropy:</strong> Human domain names have entropy between 2.2 and 3.4. Tunneling labels (Base64/Hex) exceed 3.8 to 4.5.</li>
                    <li><strong>Query Label Length:</strong> Normal subdomains are 8-15 characters. Tunneling labels push up against the 63-character per-label limit.</li>
                    <li><strong>Record Type Frequency:</strong> Workstations generating bursts of <code>TXT</code> or <code>NULL</code> queries rather than standard <code>A</code>/<code>AAAA</code>.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 11.10 */}
              <section id="section-11.10" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.10</span>
                  <span>·</span>
                  <span>Linux Administration</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Linux DNS Troubleshooting Toolkit: 5-Step Diagnostic Protocol
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  When a production service fails, avoid haphazardly editing <code>/etc/resolv.conf</code>. Follow this systematic 5-step diagnostic procedure:
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">Step 1: Check Local OS Resolver Config &amp; Cache</span>
                    <pre className="text-orange-600 mt-1">resolvectl status  # On systemd-resolved systems\ncat /etc/resolv.conf</pre>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">Step 2: Query the Configured Local Resolver</span>
                    <pre className="text-orange-600 mt-1">dig prepspaces.com A +noall +answer +stats</pre>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">Step 3: Compare with Upstream Public Resolvers</span>
                    <pre className="text-orange-600 mt-1">dig @1.1.1.1 prepspaces.com A\ndig @8.8.8.8 prepspaces.com A</pre>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">Step 4: Trace the Entire Delegation Chain from Root</span>
                    <pre className="text-orange-600 mt-1">dig +trace prepspaces.com A</pre>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">Step 5: Test TCP Fallback &amp; Packet Sniffing</span>
                    <pre className="text-orange-600 mt-1">dig +tcp prepspaces.com A\nsudo tcpdump -nnvv -i any 'port 53'</pre>
                  </div>
                </div>
              </section>

              {/* SECTION 11.11 */}
              <section id="section-11.11" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.11</span>
                  <span>·</span>
                  <span>Hands-on Lab Reference</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Hands-On Lab: Trace DNS Resolution &amp; Forensic Log Investigation
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Execute the hierarchical trace commands, compare latency between public recursive providers, dissect packet traces in Wireshark, and analyze the synthetic threat log for host PC-17 in the Lab Guide tab.
                </p>
              </section>

              {/* SECTION 11.12 */}
              <section id="section-11.12" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 11.12</span>
                  <span>·</span>
                  <span>SRE &amp; SOC Reporting</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  SRE &amp; SOC DNS Incident Reporting Standards
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  When documenting a DNS outage or an active security incident, separate proven empirical evidence (query logs, RCODEs, timestamps) from assumptions. Use the Markdown template provided in the Lab Guide tab to structure post-mortems and incident escalation tickets.
                </p>
              </section>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: SIMULATOR 1 - RECURSIVE VS ITERATIVE RESOLUTION LADDER      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "resolution-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Workflow size={14} />
                    <span>Resolution Engine Simulator</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Hierarchical DNS Resolution Ladder Walk
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
                    <button
                      onClick={() => setCacheStatus("miss")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        cacheStatus === "miss" ? "bg-orange-600 text-white" : "text-stone-600 hover:text-stone-900"
                      }`}
                    >
                      Cold Cache (Full Hierarchy)
                    </button>
                    <button
                      onClick={() => setCacheStatus("hit")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        cacheStatus === "hit" ? "bg-emerald-600 text-white" : "text-stone-600 hover:text-stone-900"
                      }`}
                    >
                      Warm Cache (0 RTT Hit)
                    </button>
                  </div>
                </div>
              </div>

              {/* Input domain */}
              <div className="mb-6 max-w-md">
                <label className="text-xs font-bold text-stone-700 block mb-1">Target FQDN to Resolve</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={queryDomain}
                    onChange={(e) => setQueryDomain(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                    placeholder="e.g. api.prepspaces.com"
                  />
                </div>
              </div>

              {/* Ladder visualizer */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Hop Sequence</span>
                  <span>Sender &rarr; Receiver</span>
                  <span>Query Type &amp; Wire Action</span>
                </div>

                <div className="space-y-3">
                  {resolutionSteps.map((s) => (
                    <div
                      key={s.step}
                      className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-orange-950 text-orange-400 border border-orange-800/60 font-bold text-[10px] flex items-center justify-center shrink-0">
                          {s.step}
                        </span>
                        <div>
                          <span className="text-stone-200 font-bold block">{s.from} &rarr; {s.to}</span>
                          <span className="text-[10px] text-stone-400">{s.type}</span>
                        </div>
                      </div>
                      <div className="text-stone-300 text-[11px] sm:text-right max-w-lg">
                        {s.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - 12-BYTE HEADER & BIT-FLAG DISSECTOR           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "wire-format-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Sliders size={14} />
                    <span>RFC 1035 Packet Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    12-Byte DNS Header &amp; Bit-Flag Dissector
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setHeaderId(48291);
                    setFlagQr(1);
                    setFlagAa(1);
                    setFlagTc(0);
                    setFlagRd(1);
                    setFlagRa(1);
                    setRcode(0);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>Reset Flags</span>
                </button>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Transaction ID (16-bit)</label>
                  <input
                    type="number"
                    value={headerId}
                    onChange={(e) => setHeaderId(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">QR Flag (0=Q, 1=R)</label>
                  <select
                    value={flagQr}
                    onChange={(e) => setFlagQr(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value={0}>0 (Query)</option>
                    <option value={1}>1 (Response)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">AA (Authoritative Answer)</label>
                  <select
                    value={flagAa}
                    onChange={(e) => setFlagAa(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value={1}>1 (Authoritative)</option>
                    <option value={0}>0 (Non-Authoritative / Cache)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">RCODE Status</label>
                  <select
                    value={rcode}
                    onChange={(e) => setRcode(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value={0}>0 (NOERROR - Success)</option>
                    <option value={3}>3 (NXDOMAIN - Name Not Found)</option>
                    <option value={2}>2 (SERVFAIL - Server Failure)</option>
                    <option value={5}>5 (REFUSED - Policy Block)</option>
                  </select>
                </div>
              </div>

              {/* Header Box Breakdown */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 flex items-center justify-between border-b border-stone-800 pb-2">
                  <span>Binary Representation (Fixed 96-Bit Header)</span>
                  <span className="text-orange-400 font-bold">Computed Flags: {computedFlagsHex}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Transaction ID</span>
                    <span className="text-orange-400 font-bold text-sm">0x{headerId.toString(16).toUpperCase().padStart(4, "0")}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Flags Word</span>
                    <span className="text-emerald-400 font-bold text-sm">{computedFlagsHex}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">QDCOUNT (Questions)</span>
                    <span className="text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">ANCOUNT (Answers)</span>
                    <span className="text-blue-400 font-bold text-sm">{rcode === 0 ? 1 : 0}</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-800/50 rounded-xl text-stone-300 text-[11px] leading-relaxed">
                  <strong>Flags Decoded:</strong> QR={flagQr} ({flagQr === 0 ? "Query" : "Response"}), Opcode=0 (QUERY), AA={flagAa}, TC={flagTc}, RD={flagRd}, RA={flagRa}, RCODE={rcode} ({rcode === 0 ? "NOERROR" : rcode === 3 ? "NXDOMAIN" : rcode === 2 ? "SERVFAIL" : "REFUSED"}).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - RESOURCE RECORD & ZONE FILE EXPLORER          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "records-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Database size={14} />
                    <span>Zone File Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    DNS Resource Record (RR) Anatomy &amp; Master Zone Explorer
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {Object.keys(mockZoneDatabase).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedRecordType(type)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer ${
                        selectedRecordType === type
                          ? "bg-orange-600 text-white shadow-sm"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected record breakdown */}
              {(() => {
                const rec = mockZoneDatabase[selectedRecordType];
                return (
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                      <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 pb-2 border-b border-stone-800 flex items-center justify-between">
                        <span>BIND9 Master Zone Syntax (RFC 1035 Standard)</span>
                        <span className="text-orange-400 font-bold">TYPE: {rec.type}</span>
                      </div>
                      <pre className="text-emerald-400 text-sm overflow-x-auto leading-relaxed mb-4">
                        {`${rec.name.padEnd(25)} ${rec.ttl.toString().padEnd(8)} ${rec.class.padEnd(6)} ${rec.type.padEnd(8)} ${rec.data}`}
                      </pre>
                      <div className="p-3 bg-stone-800/80 rounded-xl text-stone-300 text-xs font-sans leading-relaxed">
                        <strong>Engineering Function:</strong> {rec.explanation}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                      <strong>Zone Apex Rule Note:</strong> {selectedRecordType === "CNAME"
                        ? "Notice that CNAME records are assigned to subdomains (e.g., www.prepspaces.com.), never the bare domain apex (prepspaces.com.), because an apex MUST contain SOA and NS records, which DNS RFC 1034 prohibits from coexisting with a CNAME."
                        : `This ${rec.type} record is safely published at ${rec.name} with a TTL of ${rec.ttl} seconds.`}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - TTL DECAY & CACHE INVALIDATION                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "ttl-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Clock size={14} />
                    <span>Cache Eviction Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    TTL Decay, Cache Invalidation &amp; Propagation Simulator
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setInitialTtl(3600);
                      setElapsedTime(0);
                    }}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Reset Time</span>
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Authoritative Origin TTL (Seconds): {initialTtl}s
                  </label>
                  <input
                    type="range"
                    min="300"
                    max="86400"
                    step="300"
                    value={initialTtl}
                    onChange={(e) => setInitialTtl(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                    <span>300s (5m)</span>
                    <span>3600s (1h)</span>
                    <span>86400s (24h)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Elapsed Time Since Resolver Cached Record: {elapsedTime}s ({Math.floor(elapsedTime / 60)}m)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={initialTtl}
                    step="60"
                    value={elapsedTime}
                    onChange={(e) => setElapsedTime(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>
              </div>

              {/* Visual breakdown */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Resolver Cache State</span>
                  <span className={isExpired ? "text-red-400 font-bold" : "text-emerald-400 font-bold"}>
                    {isExpired ? "EXPIRED & EVICTED FROM CACHE" : "ACTIVE IN CACHE"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-center">
                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Configured TTL</span>
                    <span className="text-lg font-bold text-orange-400">{initialTtl}s</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Elapsed Time</span>
                    <span className="text-lg font-bold text-stone-300">{elapsedTime}s</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Remaining TTL in \`dig\`</span>
                    <span className={`text-lg font-bold ${remainingTtl > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {remainingTtl}s
                    </span>
                  </div>
                </div>

                <p className="text-stone-400 text-[11px] leading-relaxed">
                  {isExpired
                    ? "TTL has hit 0! The next query to this recursive resolver triggers a fresh iterative walk up to the authoritative nameserver to obtain the new IP address."
                    : `Clients querying this resolver receive the cached record immediately. If you change your server's IP address now, this resolver will continue serving the old address for another ${remainingTtl} seconds.`}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: SIMULATOR 5 - DNS TUNNELING & ENTROPY DETECTOR              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "tunneling-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-mono">
                    <ShieldCheck size={14} />
                    <span>Forensic Threat Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    DNS Tunneling &amp; Shannon Entropy Analysis
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTunnelInput("portal.prepspaces.com")}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 cursor-pointer"
                  >
                    Load Benign Name
                  </button>
                  <button
                    onClick={() => setTunnelInput("a8F1k2m9q7v4x6z3p9L2w1c7.tunnel.exfil-corp.test")}
                    className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-xs font-bold text-red-700 cursor-pointer"
                  >
                    Load Malicious Tunnel
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Inspect Subdomain Label String
                </label>
                <input
                  type="text"
                  value={tunnelInput}
                  onChange={(e) => setTunnelInput(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Entropy Results Box */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Shannon Entropy Detection (Threshold: H &gt; 3.6 &amp; Length &ge; 16)</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    entropyAnalysis.isSuspicious ? "bg-red-950 text-red-400 border border-red-800" : "bg-emerald-950 text-emerald-400 border border-emerald-800"
                  }`}>
                    {entropyAnalysis.isSuspicious ? "ALERT: ANOMALOUS HIGH ENTROPY / SUSPECT TUNNEL" : "BENIGN / NORMAL ENTROPY"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-center">
                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Inspected Label</span>
                    <span className="text-sm font-bold text-stone-200 truncate block mt-1">{entropyAnalysis.label || "—"}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Label Length</span>
                    <span className="text-lg font-bold text-orange-400">{entropyAnalysis.labelLen} chars</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Shannon Entropy (H)</span>
                    <span className={`text-lg font-bold ${entropyAnalysis.entropy > 3.6 ? "text-red-400" : "text-emerald-400"}`}>
                      {entropyAnalysis.entropy} bits/char
                    </span>
                  </div>
                </div>

                <p className="text-stone-400 text-[11px] leading-relaxed">
                  {entropyAnalysis.isSuspicious
                    ? "Forensic Assessment: This label exhibits randomized character frequency matching Base64/Hex encoding patterns. In production, correlate with query volume, check client process lineage, and query Response Policy Zones (RPZ)."
                    : "Forensic Assessment: Entropy and label length are consistent with normal human language and standard CDN naming conventions."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 7: PRODUCTION CLI COMMANDS                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "cli" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                <Terminal size={14} />
                <span>Production CLI Reference</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Linux DNS Engineering &amp; Troubleshooting Cheatsheet
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mb-6">
                Real-world command syntax for testing recursive vs authoritative servers, tracing delegation chains, flushing systemd-resolved caches, and inspecting DNS packet traffic.
              </p>

              <div className="space-y-4">
                {[
                  {
                    id: "c1",
                    title: "Trace Complete DNS Hierarchy from Root (.) to Authoritative",
                    cmd: "dig +trace prepspaces.com A",
                    desc: "Walks iteratively from root-servers.net to gTLD servers to authoritative nameservers, displaying each delegation step.",
                  },
                  {
                    id: "c2",
                    title: "Force DNS Resolution over TCP Port 53",
                    cmd: "dig +tcp prepspaces.com ANY",
                    desc: "Bypasses UDP and forces a TCP connection to test whether large responses or firewall packet drops affect name resolution.",
                  },
                  {
                    id: "c3",
                    title: "Perform Reverse DNS (rDNS) Lookup on IPv4 or IPv6",
                    cmd: "dig -x 104.21.72.15\ndig -x 2606:4700:3037::ac43:80b5",
                    desc: "Queries the in-addr.arpa or ip6.arpa reverse zone to obtain the PTR record associated with an IP address.",
                  },
                  {
                    id: "c4",
                    title: "Flush Linux systemd-resolved DNS Cache & Check Stats",
                    cmd: "sudo resolvectl flush-caches\nresolvectl statistics",
                    desc: "Evicts all positive and negative cached entries on modern Linux distributions (Ubuntu/Debian) to verify immediate record changes.",
                  },
                  {
                    id: "c5",
                    title: "Sniff Real-Time DNS Traffic with tcpdump",
                    cmd: "sudo tcpdump -nnvv -i any 'udp port 53 or tcp port 53' -c 10",
                    desc: "Captures and prints 10 live DNS queries and responses with transaction IDs, flags (AA, TC, RD), and record counts.",
                  },
                ].map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                      <span className="text-stone-400 font-bold">{item.title}</span>
                      <button
                        onClick={() => copyToClipboard(item.cmd, item.id)}
                        className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer transition"
                      >
                        {copiedCodeId === item.id ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                        <span className="text-[10px]">{copiedCodeId === item.id ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                    <pre className="text-orange-400 overflow-x-auto leading-relaxed">{item.cmd}</pre>
                    <p className="text-stone-400 text-[11px] mt-2 font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 8: STATEFUL 10-QUESTION ASSESSMENT                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Award size={14} />
                    <span>Stateful Knowledge Exam</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Module 11 Comprehensive Assessment (10 Questions)
                  </h3>
                </div>
                {quizSubmitted && (
                  <div className="px-4 py-2 rounded-2xl bg-stone-900 text-white font-mono text-xs font-bold">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, qIdx) => {
                  const selected = quizAnswers[q.id];
                  const isCorrect = selected === q.correct;
                  return (
                    <div
                      key={q.id}
                      className={`p-6 rounded-2xl border transition ${
                        quizSubmitted
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-300"
                            : "bg-red-50/50 border-red-300"
                          : "bg-[#fbfaf7] border-[#e7e3da]"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 rounded-lg bg-stone-200 text-stone-800 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                          {qIdx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>
                      </div>

                      <div className="space-y-2 mb-4">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          const isOptionCorrect = q.correct === optIdx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";

                          if (quizSubmitted) {
                            if (isOptionCorrect) {
                              btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                            } else if (isOptionSelected && !isOptionCorrect) {
                              btnStyle = "bg-red-100 border-red-400 text-red-950 font-bold";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-orange-100 border-orange-500 text-orange-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && isOptionCorrect && (
                                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 rounded-xl bg-white/80 border border-stone-200 text-xs text-stone-600 leading-relaxed">
                          <strong>Engineering Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e3da] flex items-center justify-between">
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 cursor-pointer"
                >
                  Reset Answers
                </button>
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={quizSubmitted || Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    quizSubmitted || Object.keys(quizAnswers).length < quizQuestions.length
                      ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                      : "bg-orange-600 hover:bg-orange-700 text-white shadow-sm"
                  }`}
                >
                  Submit Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 9: LAB GUIDE & FORENSIC REPORT TEMPLATE                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lab-report" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <ListChecks size={14} />
                    <span>Lab Milestones &amp; Forensics</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Hands-On DNS Lab Checklist &amp; SRE Incident Report
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700">
                    {completedChecksCount} / 8 Completed
                  </span>
                </div>
              </div>

              {/* 8-Point Lab Checklist */}
              <div className="space-y-2 mb-8">
                {[
                  { key: "c1", label: "Part A: Ran 'dig +trace example.com' and identified Root, TLD (.com), and Authoritative referrals." },
                  { key: "c2", label: "Part B: Inspected A, AAAA, MX, and TXT records using dig with '+noall +answer' formatting." },
                  { key: "c3", label: "Part C: Compared query latency between local ISP resolver and public Anycast resolvers (1.1.1.1, 8.8.8.8)." },
                  { key: "c4", label: "Part D: Verified Negative Caching (NXDOMAIN) lifetime by inspecting the SOA MINIMUM field." },
                  { key: "c5", label: "Part E: Tested DNS over TCP with 'dig +tcp' and observed 3-way handshake on port 53." },
                  { key: "c6", label: "Part F: Captured DNS traffic in Wireshark and applied display filter 'dns.flags.rcode != 0'." },
                  { key: "c7", label: "Part G: Analyzed synthetic telemetry log for host PC-17 and identified anomalous high-entropy TXT queries." },
                  { key: "c8", label: "Part H: Documented findings, root causes, and containment rules in the SRE Incident Report." },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleLabCheck(item.key)}
                    className="flex items-center gap-3 p-3 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:bg-stone-50 cursor-pointer transition select-none"
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                      labChecks[item.key]
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-stone-300 bg-white"
                    }`}>
                      {labChecks[item.key] && <Check size={12} />}
                    </div>
                    <span className="text-xs text-stone-800 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Copyable Markdown Report */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Markdown DNS Incident Report Template (SRE &amp; SOC Standard)</span>
                  <button
                    onClick={() => copyToClipboard(dnsReportTemplate, "report")}
                    className="text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition"
                  >
                    {copiedCodeId === "report" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedCodeId === "report" ? "Report Copied" : "Copy Markdown"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-96 whitespace-pre-wrap">
                  {dnsReportTemplate}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/udp");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 10 — UDP, QUIC &amp; Modern Transport</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/application-layer");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Next: Module 12 — Application Protocols &amp; Web Networking</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
