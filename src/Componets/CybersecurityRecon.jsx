import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Network,
  Server,
  Shield,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Lock,
  Unlock,
  Eye,
  HelpCircle,
  Check,
  X,
  Info,
  ExternalLink,
  Award,
  Clock,
  Building,
  ChevronRight,
  Copy,
  Layers,
  FileCheck,
  Filter,
  Cpu,
  Radio,
  FileText,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityRecon() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(7);
  const [activeTab, setActiveTab] = useState("theory");
  const [activeTheorySection, setActiveTheorySection] = useState("part-a");
  const [activeLab, setActiveLab] = useState(1);

  // -------------------------------------------------------------
  // LAB 1 STATE: Local vs. Remote Listening Sockets (ss -lntup)
  // -------------------------------------------------------------
  const localSockets = [
    {
      id: "sock-1",
      proto: "tcp",
      localAddress: "127.0.0.1:5432",
      process: "postgres (PID 842)",
      exposure: "Loopback Only (Local Host Only)",
      reachableRemotely: false,
      analysis: "PostgreSQL binds strictly to 127.0.0.1. Safe from external network probing; only local processes can connect.",
    },
    {
      id: "sock-2",
      proto: "tcp",
      localAddress: "0.0.0.0:22",
      process: "sshd (PID 610)",
      exposure: "All IPv4 Interfaces (0.0.0.0)",
      reachableRemotely: true,
      analysis: "SSH daemon listens on all network adapters. Reachable by external scanners unless filtered by firewall.",
    },
    {
      id: "sock-3",
      proto: "tcp",
      localAddress: "0.0.0.0:80",
      process: "nginx (PID 1120)",
      exposure: "All IPv4 Interfaces (0.0.0.0)",
      reachableRemotely: true,
      analysis: "Web server listening publicly for HTTP requests. Expected production exposure.",
    },
    {
      id: "sock-4",
      proto: "tcp",
      localAddress: "10.0.40.15:6379",
      process: "redis-server (PID 1450)",
      exposure: "Private Lab Subnet Interface",
      reachableRemotely: true,
      analysis: "Redis cache bound to private lab interface without password authentication. Accessible to other hosts on the 10.0.40.0/24 subnet.",
    },
  ];

  const [selectedSocket, setSelectedSocket] = useState(localSockets[0]);

  // -------------------------------------------------------------
  // LAB 2 STATE: Host Discovery & ICMP Filtering
  // -------------------------------------------------------------
  const labHosts = [
    {
      ip: "10.0.40.10",
      role: "Web Application Gateway",
      icmpReply: true,
      tcpPort443: "open",
      status: "Discovered via ICMP & TCP",
      lesson: "Responds to both ICMP echo requests and TCP SYN probes. Classic discoverable host.",
    },
    {
      ip: "10.0.40.15",
      role: "Backend Microservices Host",
      icmpReply: false,
      tcpPort443: "open",
      status: "Discovered via TCP (ICMP Filtered)",
      lesson: "Firewall drops ICMP echo requests (ping timeout). If only ping were used, this host would be falsely declared 'offline'!",
    },
    {
      ip: "10.0.40.20",
      role: "Database Cluster Node",
      icmpReply: false,
      tcpPort443: "filtered",
      status: "Completely Filtered / Stealth",
      lesson: "Drops both ICMP and unauthorized TCP probes. Requires authorized internal ARP or management subnet scanning.",
    },
    {
      ip: "10.0.40.99",
      role: "Unallocated IP Address",
      icmpReply: false,
      tcpPort443: "closed / no response",
      status: "Truly Offline / Vacant IP",
      lesson: "No host provisioned at this address.",
    },
  ];

  const [inspectedHost, setInspectedHost] = useState(labHosts[1]);

  // -------------------------------------------------------------
  // LAB 3 STATE: Nmap 6 Port States Explorer
  // -------------------------------------------------------------
  const portStatesData = [
    {
      port: "22/tcp",
      probeResponse: "SYN-ACK packet received",
      nmapState: "open",
      stateColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      definition: "An application is actively accepting connections on this port through the observed network path.",
      implication: "Service is accessible. Needs verification against authorized management policy.",
    },
    {
      port: "25/tcp",
      probeResponse: "RST-ACK packet received",
      nmapState: "closed",
      stateColor: "bg-stone-200 text-stone-800 border-stone-300",
      definition: "The probe reached the target, but the host operating system explicitly signaled that no application is listening.",
      implication: "Port is reachable, but no active service is exposed.",
    },
    {
      port: "139/tcp",
      probeResponse: "No response (Packet dropped by firewall)",
      nmapState: "filtered",
      stateColor: "bg-amber-100 text-amber-800 border-amber-300",
      definition: "A firewall, router ACL, or host packet filter blocked the probe or its reply. Nmap cannot determine if the port is open or closed.",
      implication: "Defensive controls are in place along the network route.",
    },
    {
      port: "53/udp",
      probeResponse: "No response received to generic UDP probe",
      nmapState: "open|filtered",
      stateColor: "bg-purple-100 text-purple-800 border-purple-300",
      definition: "Because UDP is connectionless, absence of a response could mean the service is open and silent, or a firewall dropped the packet.",
      implication: "Requires protocol-specific DNS query payloads to confirm.",
    },
    {
      port: "8080/tcp",
      probeResponse: "RST received from ACK probe",
      nmapState: "unfiltered",
      stateColor: "bg-blue-100 text-blue-800 border-blue-300",
      definition: "The port is accessible to ACK probes (firewall permits traversal), but whether it is open or closed requires SYN probing.",
      implication: "Rules out stateful firewall blocking for this port.",
    },
  ];

  const [inspectedPortState, setInspectedPortState] = useState(portStatesData[0]);

  // -------------------------------------------------------------
  // LAB 4 STATE: Service & Version Detection Workshop (-sV)
  // -------------------------------------------------------------
  const [useVersionScan, setUseVersionScan] = useState(false);

  // -------------------------------------------------------------
  // LAB 5 STATE: HTTP Banner & Header Inspection (curl -I)
  // -------------------------------------------------------------
  const httpHeadersSample = {
    status: "HTTP/1.1 200 OK",
    headers: [
      { key: "Date", val: "Fri, 16 Oct 2026 12:15:00 GMT" },
      { key: "Server", val: "nginx/1.24.0 (Ubuntu)" },
      { key: "Content-Type", val: "text/html; charset=UTF-8" },
      { key: "X-Powered-By", val: "Express" },
      { key: "Strict-Transport-Security", val: "max-age=31536000; includeSubDomains" },
      { key: "X-Frame-Options", val: "DENY" },
      { key: "X-Content-Type-Options", val: "nosniff" },
    ],
  };

  // -------------------------------------------------------------
  // PART J: 10-Question Knowledge Check Quiz
  // -------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of host discovery in an authorized technical assessment?",
      options: [
        "A. To exploit every reachable service on the target network automatically.",
        "B. To identify hosts that appear reachable under the selected test conditions.",
        "C. To guarantee an infallible, 100% complete asset inventory without further verification.",
        "D. To determine every software vulnerability existing in the operating system kernel.",
      ],
      correctAnswer: 1,
      explanation:
        "Host discovery determines which IP addresses and network endpoints respond to selected probes (ICMP, TCP SYN, ARP) from the tester's vantage point under defined test conditions.",
    },
    {
      id: 2,
      question: "What does an Nmap port state of 'open' generally mean?",
      options: [
        "A. The service is definitely vulnerable and ready to be breached.",
        "B. An application is accepting relevant connections or packets through the observed network path.",
        "C. The operating system has been permanently compromised.",
        "D. The host firewall has been completely disabled.",
      ],
      correctAnswer: 1,
      explanation:
        "An 'open' state indicates that an application is actively listening and responded with a SYN-ACK (TCP) or protocol response (UDP). It is evidence of reachability and service availability, not proof of a vulnerability.",
    },
    {
      id: 3,
      question: "What does 'filtered' mean in Nmap output?",
      options: [
        "A. The port is certainly closed and no application exists.",
        "B. The application is definitely vulnerable.",
        "C. Filtering (firewall, network ACL, or packet drop) prevents the scanner from determining whether the port is open or closed.",
        "D. The service has presented an invalid TLS certificate.",
      ],
      correctAnswer: 2,
      explanation:
        "A 'filtered' state occurs when probe packets are dropped without response, or an ICMP unreachable error is returned, obscuring whether an application is actually listening behind the security device.",
    },
    {
      id: 4,
      question: "Why can a host fail to respond to ping (ICMP Echo) while still running and providing services?",
      options: [
        "A. All active hosts must respond to ping under RFC standards.",
        "B. Firewalls or cloud security groups may deliberately block or rate-limit ICMP traffic while permitting web and SSH traffic.",
        "C. TCP ports cannot exist without ICMP ping being enabled.",
        "D. Domain Name System (DNS) automatically disables ICMP responses.",
      ],
      correctAnswer: 1,
      explanation:
        "ICMP is frequently disabled or filtered by perimeter firewalls to reduce automated scanner visibility. A host that drops ICMP may still be fully operational and accepting connections on ports 80, 443, or 22.",
    },
    {
      id: 5,
      question: "What does Nmap service and version detection (-sV) attempt to determine?",
      options: [
        "A. The legal identity and home address of the server owner with certainty.",
        "B. The application protocol and product/version details behind a selected port using response matching and probe fingerprints.",
        "C. All vulnerabilities present on the system automatically.",
        "D. Whether a company has granted written legal authorization for the engagement.",
      ],
      correctAnswer: 1,
      explanation:
        "Service/version detection (-sV) transmits specialized protocol probes and compares banners/responses against Nmap's signature database (nmap-service-probes) to identify software names and versions.",
    },
    {
      id: 6,
      question: "Why is an open TCP port not automatically a vulnerability?",
      options: [
        "A. Open ports can never be secured under any circumstances.",
        "B. A port may provide an intended, business-necessary, properly patched, and authenticated service.",
        "C. Every open port reported by Nmap is a false positive.",
        "D. Port scanning does not inspect network traffic.",
      ],
      correctAnswer: 1,
      explanation:
        "An open port is intentional network exposure (e.g., an e-commerce web server listening on port 443). It is only a security finding if it violates policy, exposes unneeded management tools, or runs vulnerable software.",
    },
    {
      id: 7,
      question: "What is the principal limitation of inferring a service's identity solely from its port number?",
      options: [
        "A. Port numbers are never used by network applications.",
        "B. Services can listen on non-standard ports (e.g., SSH on port 2222, HTTP on port 8080), or unexpected software may bind to standard ports.",
        "C. All network ports use UDP exclusively.",
        "D. Port numbers guarantee software patch levels.",
      ],
      correctAnswer: 1,
      explanation:
        "Port numbers are conventions (IANA assignments), not technical guarantees. Assuming port 80 is Apache HTTP or port 22 is OpenSSH without banner or protocol verification can lead to severe analytical errors.",
    },
    {
      id: 8,
      question: "What should an ethical analyst do if an assigned scan reveals an unexpected open service?",
      options: [
        "A. Run automated exploit scripts immediately to gain root access.",
        "B. Expand the scan to every nearby public IP address on the subnet.",
        "C. Record the technical evidence, determine its exposure, and compare it with the client's approved architecture.",
        "D. Assume the target host has already been compromised by foreign adversaries.",
      ],
      correctAnswer: 2,
      explanation:
        "A professional analyst documents the finding with timestamps, probe responses, and reachability context, then cross-checks with the system owner to determine whether the listener is unauthorized or undocumented.",
    },
    {
      id: 9,
      question: "Why can UDP port scanning often produce ambiguous results (e.g., 'open|filtered')?",
      options: [
        "A. UDP always establishes a full three-way TCP handshake.",
        "B. UDP is connectionless; services do not always reply to generic probes, and firewalls may silently drop packets without returning ICMP port unreachable messages.",
        "C. UDP has no port numbers defined in RFC 768.",
        "D. All UDP services are encrypted by default.",
      ],
      correctAnswer: 1,
      explanation:
        "Unlike TCP (which returns SYN-ACK or RST), UDP services often remain silent unless sent a valid protocol-specific payload. If no packet returns, Nmap cannot tell if the service is open and quiet, or if a firewall dropped the probe.",
    },
    {
      id: 10,
      question: "What criteria should determine whether an unexpected open port constitutes a security finding?",
      options: [
        "A. The port number alone.",
        "B. The raw number of results displayed by the tool.",
        "C. The technical evidence, intended configuration, network exposure, potential impact, and surrounding defensive controls.",
        "D. Whether the terminal highlights the port number in red text.",
      ],
      correctAnswer: 2,
      explanation:
        "Security findings require risk context: Is the service needed? What network segments can reach it? Is authentication enforced? What data is exposed? A finding is justified by policy and impact, not tool output alone.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans">
      {/* 1. TOP MODULE NAVIGATION BAR */}
      <ModuleNav track="cybersecurity" currentModuleId="recon" />

      {/* 2. HERO / HEADER SECTION */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c]">
              <Shield size={13} />
              Prepspaces Cybersecurity Masterclass
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700">
              <Network size={13} />
              Network Reconnaissance & Active Discovery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700">
              <BookOpen size={13} />
              Nmap Network Scanning · NIST SP 800-115 · OWASP WSTG
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18181b] mt-2">
            Module 7: Network Discovery, Port Scanning Concepts & Service Enumeration in Authorized Labs
          </h1>
          <p className="mt-3 text-stone-600 max-w-4xl text-sm sm:text-base leading-relaxed">
            Transitioning from passive OSINT into controlled, active technical reconnaissance. Learn how to discover reachable
            hosts, interpret the 6 Nmap port states, perform TCP connect and UDP scans, identify running services, extract
            HTTP banners and TLS metadata, and construct an evidence-based exposure inventory within authorized lab boundaries.
          </p>

          {/* QUICK STATS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ea580c]">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Duration</div>
                <div className="text-sm font-bold text-stone-900">14–18 Hours</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                <Terminal size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Practical Labs</div>
                <div className="text-sm font-bold text-stone-900">6 Guided Labs</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                <Radio size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Tools</div>
                <div className="text-sm font-bold text-stone-900">Nmap · ss · curl · PowerShell</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                <Award size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Capstone</div>
                <div className="text-sm font-bold text-stone-900">LearnSphere Subnet Audit</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PRIMARY TABS NAVIGATION */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2">
            {[
              { id: "theory", label: "1. Theory & Frameworks", icon: BookOpen },
              { id: "labs", label: "2. Interactive Labs (6)", icon: Terminal },
              { id: "casestudy", label: "3. Applied Case Study", icon: Building },
              { id: "quiz", label: "4. Knowledge Check (10 Qs)", icon: HelpCircle },
              { id: "capstone", label: "5. Capstone Project & Rubric", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 4. MAIN CONTENT CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ========================================================= */}
        {/* TAB 1: THEORY & FRAMEWORKS */}
        {/* ========================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick Pill Selector for Theory Sections */}
            <div className="flex flex-wrap gap-2 p-3 bg-white rounded-2xl border border-stone-200">
              {[
                { id: "part-a", label: "Part A: Foundations of Discovery" },
                { id: "part-b", label: "Part B: Hosts & Reachability" },
                { id: "part-c", label: "Part C: Nmap 6 Port States" },
                { id: "part-d", label: "Part D: Responsible Scanning" },
                { id: "part-e", label: "Part E: Service Enumeration" },
                { id: "part-f", label: "Part F: Avoiding False Findings" },
                { id: "part-g", label: "Part G: Practical CLI Workflows" },
                { id: "part-h", label: "Part H: Inventory & Reporting" },
                { id: "part-l", label: "Part L: Academic References" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveTheorySection(pill.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                    activeTheorySection === pill.id
                      ? "bg-[#ea580c] text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* PART A: FOUNDATIONS */}
            {(activeTheorySection === "part-a" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part A</span>
                    <span>·</span>
                    <span>Foundations of Network Discovery</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    1. Network Discovery & The Technical Assessment Workflow
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Network discovery identifies active devices, responsive network interfaces, and reachable IP addresses
                    within an authorized scope. It establishes what is observable across network segments to help organizations
                    audit actual exposure against intended architecture.
                  </p>
                </div>

                {/* Workflow Table */}
                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                    Lesson 1.3: Technical Reconnaissance Hierarchy · From Discovery to Exploitation
                  </div>
                  <div className="divide-y divide-stone-200 text-xs bg-white">
                    {[
                      {
                        act: "Host Discovery",
                        q: "Which hosts appear reachable or responsive?",
                        out: "Candidate list of responsive IPv4/IPv6 addresses.",
                      },
                      {
                        act: "Port Scanning",
                        q: "Which selected transport ports accept traffic or appear filtered?",
                        out: "Port-state inventory (Open, Closed, Filtered).",
                      },
                      {
                        act: "Service Enumeration",
                        q: "What protocols or applications are listening on those ports?",
                        out: "Service protocols (HTTP, SSH, DNS, SMTP) & banners.",
                      },
                      {
                        act: "Version Identification",
                        q: "What product name and release version can be inferred?",
                        out: "Candidate software release metadata (e.g., OpenSSH 9.3p1).",
                      },
                      {
                        act: "Vulnerability Assessment",
                        q: "Are known weaknesses (CVEs) present on these versions?",
                        out: "Prioritized vulnerability register requiring verification.",
                      },
                      {
                        act: "Penetration Testing",
                        q: "Can confirmed weaknesses be safely weaponized for business impact?",
                        out: "Authorized Proof of Concept (PoC) security findings.",
                      },
                    ].map((row, idx) => (
                      <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                        <div className="w-44 font-bold text-stone-900 font-mono text-xs text-[#ea580c]">{row.act}</div>
                        <div className="flex-1 text-stone-700 text-xs">{row.q}</div>
                        <div className="w-72 text-stone-600 font-mono text-[11px] bg-stone-50 p-2 rounded-lg border border-stone-200">
                          {row.out}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PART B: HOSTS & REACHABILITY */}
            {(activeTheorySection === "part-b" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part B</span>
                    <span>·</span>
                    <span>Hosts, Addresses & Reachability</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    2. Understanding Reachability, ICMP, and Transport Probes
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    A host is a network endpoint (physical server, virtual machine, container, router, printer).
                    However, an IP address does not map 1:1 to a physical device—load balancers, CDN edge proxies,
                    and multi-tenant cloud workloads break simple assumptions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Probe 1</span>
                    <h3 className="text-xs font-extrabold text-stone-900 mt-1">ICMP Echo Checks (ping)</h3>
                    <p className="text-[11px] text-stone-600 mt-1.5 leading-relaxed">
                      Useful for baseline diagnostics, but firewalls and cloud security groups routinely drop ICMP.
                      <strong> Failure to reply to ping is NOT proof that a host is offline.</strong>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Probe 2</span>
                    <h3 className="text-xs font-extrabold text-stone-900 mt-1">Local ARP Discovery</h3>
                    <p className="text-[11px] text-stone-600 mt-1.5 leading-relaxed">
                      On IPv4 local-link subnets, ARP requests reveal active MAC addresses on the wire. Highly reliable locally,
                      but cannot traverse routers across the Internet.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Probe 3</span>
                    <h3 className="text-xs font-extrabold text-stone-900 mt-1">TCP SYN / ACK Probes</h3>
                    <p className="text-[11px] text-stone-600 mt-1.5 leading-relaxed">
                      Nmap sends TCP probes to common ports (80, 443, 22). If a SYN-ACK or RST is returned, the host is confirmed
                      reachable regardless of ICMP filtering.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* PART C: NMAP 6 PORT STATES */}
            {(activeTheorySection === "part-c" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part C</span>
                    <span>·</span>
                    <span>Port Scanning Concepts</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    3. The 6 Canonical Nmap Port States
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Port states describe the scanner&apos;s interpretation of observed packets from a specific network vantage point.
                    They are not permanent properties of the server itself.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                    Official Nmap Port State Classification (RFC & Tool Specification)
                  </div>
                  <div className="divide-y divide-stone-200 text-xs bg-white">
                    {[
                      {
                        state: "open",
                        badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
                        meaning: "An application is actively accepting connections or packets on the port.",
                        interpretation: "A service is available. Security question: Is this service expected and properly configured?",
                      },
                      {
                        state: "closed",
                        badge: "bg-stone-200 text-stone-800 border-stone-300",
                        meaning: "The port is reachable, but no application is listening at that time.",
                        interpretation: "The target host returned a TCP RST packet. Path is reachable, but no listener exists.",
                      },
                      {
                        state: "filtered",
                        badge: "bg-amber-100 text-amber-800 border-amber-300",
                        meaning: "Filtering prevents the scanner from determining whether the port is open or closed.",
                        interpretation: "A firewall, router ACL, or packet filter dropped the probe or returned an ICMP error.",
                      },
                      {
                        state: "unfiltered",
                        badge: "bg-blue-100 text-blue-800 border-blue-300",
                        meaning: "The port is accessible to ACK probes, but scanner cannot determine open vs closed.",
                        interpretation: "Confirms that probes reach the target port without stateful firewall blocking.",
                      },
                      {
                        state: "open|filtered",
                        badge: "bg-purple-100 text-purple-800 border-purple-300",
                        meaning: "The scanner cannot distinguish an open port from one whose probes are filtered.",
                        interpretation: "Common in UDP scans where no response is received (silence could be an open service or dropped packet).",
                      },
                      {
                        state: "closed|filtered",
                        badge: "bg-rose-100 text-rose-800 border-rose-300",
                        meaning: "The scanner cannot distinguish a closed port from one that is filtered.",
                        interpretation: "Used in specialized IP ID idle scans when ambiguous responses occur.",
                      },
                    ].map((st, idx) => (
                      <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                        <span className={`w-36 text-center text-xs font-mono font-bold px-2 py-1 rounded-md border ${st.badge}`}>
                          {st.state}
                        </span>
                        <div className="flex-1 text-stone-700 text-xs font-medium">{st.meaning}</div>
                        <div className="w-80 text-stone-600 text-[11px] bg-stone-50 p-2 rounded-lg border border-stone-200">
                          {st.interpretation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PART D: RESPONSIBLE SCANNING */}
            {(activeTheorySection === "part-d" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part D</span>
                    <span>·</span>
                    <span>Responsible Method Selection</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    4. Operational Impact, Rate Limiting & Monitoring Visibility
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Scanning generates real network traffic. Fragile IoT devices, legacy SCADA hardware, or shared cloud
                    hypervisors can crash under high-volume scanning. Adhere strictly to the Rules of Engagement (RoE).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <h3 className="font-bold text-stone-900 uppercase">Operational Guardrails</h3>
                    <ul className="mt-2 space-y-1.5 text-stone-600 list-disc list-inside">
                      <li>Never run unthrottled all-port (-p 1-65535) scans against production.</li>
                      <li>Use conservative timing templates (-T3 or lower) on fragile networks.</li>
                      <li>Never attempt evasion techniques (-D decoys, fragmented packets) in routine audits.</li>
                      <li>Maintain an emergency kill switch phone contact with client infrastructure leads.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <h3 className="font-bold text-stone-900 uppercase">Defensive Monitoring Visibility</h3>
                    <ul className="mt-2 space-y-1.5 text-stone-600 list-disc list-inside">
                      <li>SYN scans generate high volume of SYN-ACK / RST telemetry in firewall logs.</li>
                      <li>Intrusion Detection Systems (Snort, Suricata, Zeek) detect rapid port sweeps.</li>
                      <li>Whitelisting tester source IPs allows SOC analysts to correlate drill traffic.</li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* PART E: SERVICE ENUMERATION */}
            {(activeTheorySection === "part-e" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part E</span>
                    <span>·</span>
                    <span>Service Enumeration</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    5. Service Identification, Version Detection & HTTP Banners
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Discovering an open port is only step 1. Service enumeration determines what application is actually
                    listening and what metadata (headers, TLS certs, banners) it exposes.
                  </p>
                </div>

                {/* Common Services Table */}
                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                    Common Ports & Initial Architectural Questions
                  </div>
                  <div className="divide-y divide-stone-200 text-xs bg-white">
                    {[
                      { port: "TCP 22", svc: "SSH", q: "Is remote administration required? Is access restricted to bastion/VPN?" },
                      { port: "TCP 80 / 443", svc: "HTTP / HTTPS", q: "Does HTTP redirect to HTTPS? Is TLS cipher suite modern?" },
                      { port: "TCP 445", svc: "SMB", q: "Is file sharing strictly restricted to internal corporate subnets?" },
                      { port: "TCP 3389", svc: "RDP", q: "Is Remote Desktop exposed publicly without MFA / VPN gateway?" },
                      { port: "TCP 3306 / 5432", svc: "MySQL / PostgreSQL", q: "Is database listener reachable from untrusted client networks?" },
                      { port: "TCP 6379", svc: "Redis", q: "Is in-memory key-value cache bound without authentication?" },
                    ].map((row, idx) => (
                      <div key={idx} className="p-3 flex items-center justify-between hover:bg-stone-50">
                        <span className="w-32 font-mono font-bold text-stone-900">{row.port}</span>
                        <span className="w-32 font-mono font-bold text-[#ea580c]">{row.svc}</span>
                        <span className="flex-1 text-stone-600 text-xs">{row.q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PART F: AVOIDING FALSE FINDINGS */}
            {(activeTheorySection === "part-f" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part F</span>
                    <span>·</span>
                    <span>Avoiding False Conclusions</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    6. Scanner Result vs. Security Finding: Comparing Observed vs. Intended State
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    A raw scanner result is simply a technical observation. A security finding requires context:
                    does the observation violate approved architecture, expose unnecessary attack surface, or create business risk?
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                    Intended Architecture vs. Observed Scanner State
                  </div>
                  <div className="divide-y divide-stone-200 text-xs bg-white">
                    {[
                      {
                        svc: "Production Web (HTTPS 443)",
                        intended: "Open to public internet via Cloudflare CDN.",
                        observed: "Open on 0.0.0.0:443.",
                        verdict: "Expected Configuration (No Finding).",
                      },
                      {
                        svc: "Database (PostgreSQL 5432)",
                        intended: "Restricted to internal application subnet (10.0.40.0/24).",
                        observed: "Open on public IP address 198.51.100.25.",
                        verdict: "CRITICAL FINDING: Unintended database exposure.",
                      },
                      {
                        svc: "Management SSH (Port 22)",
                        intended: "Restricted to corporate VPN gateway.",
                        observed: "Open on all lab segments.",
                        verdict: "MEDIUM FINDING: Missing network-level ingress filtering.",
                      },
                    ].map((row, idx) => (
                      <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                        <div className="w-52 font-bold text-stone-900">{row.svc}</div>
                        <div className="w-64 text-stone-600 text-[11px]">{row.intended}</div>
                        <div className="w-48 font-mono text-[11px] text-[#ea580c]">{row.observed}</div>
                        <div className="flex-1 font-bold text-stone-800 text-xs">{row.verdict}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PART G: CLI WORKFLOWS */}
            {(activeTheorySection === "part-g" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part G</span>
                    <span>·</span>
                    <span>Command-Line Workflows</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    7. Standardized Command-Line Discovery Workflow
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    A structured 5-step sequence for conducting controlled discovery on authorized Linux and Windows lab hosts.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 bg-stone-900 text-stone-200 rounded-xl space-y-1">
                    <span className="text-[#ea580c] font-bold"># Step 1: Inspect local host sockets (Linux)</span>
                    <div className="text-stone-300">ss -lntup</div>
                    <div className="text-stone-500 text-[11px]"># Windows PowerShell equivalent: Get-NetTCPConnection -State Listen</div>
                  </div>

                  <div className="p-3.5 bg-stone-900 text-stone-200 rounded-xl space-y-1">
                    <span className="text-[#ea580c] font-bold"># Step 2: Bounded Host Discovery (Ping sweep without port scan)</span>
                    <div className="text-stone-300">nmap -sn 10.0.40.0/24</div>
                    <div className="text-stone-500 text-[11px]"># Sweeps approved subnet to detect responsive hosts</div>
                  </div>

                  <div className="p-3.5 bg-stone-900 text-stone-200 rounded-xl space-y-1">
                    <span className="text-[#ea580c] font-bold"># Step 3: Bounded TCP Connect Scan on Specific Approved Ports</span>
                    <div className="text-stone-300">nmap -sT -p 22,80,443,8080 10.0.40.15</div>
                  </div>

                  <div className="p-3.5 bg-stone-900 text-stone-200 rounded-xl space-y-1">
                    <span className="text-[#ea580c] font-bold"># Step 4: Service Version Detection & Evidence Logging</span>
                    <div className="text-stone-300">nmap -sV -p 22,80,443 -oN lab-scan-results.txt 10.0.40.15</div>
                  </div>

                  <div className="p-3.5 bg-stone-900 text-stone-200 rounded-xl space-y-1">
                    <span className="text-[#ea580c] font-bold"># Step 5: Web Service Header Inspection</span>
                    <div className="text-stone-300">curl -I http://10.0.40.15/</div>
                  </div>
                </div>
              </section>
            )}

            {/* PART H: INVENTORY & REPORTING */}
            {(activeTheorySection === "part-h" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part H</span>
                    <span>·</span>
                    <span>Service Inventory & Reporting</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    8. Constructing a Professional Service Exposure Inventory
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    A service inventory records the verified technical footprint. It is the core deliverable that
                    bridges raw scanning output with executive risk decisions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 text-xs text-stone-700 leading-relaxed">
                  <strong>Standard 12-Field Inventory Schema:</strong> Asset ID, Hostname, Target IP, Port & Protocol,
                  Reported Nmap State, Identified Service, Extracted Version, Scan Method, Timestamp, Expected Architecture,
                  Discrepancy Status, and Recommended Remediation.
                </div>
              </section>
            )}

            {/* PART L: ACADEMIC REFERENCES */}
            {(activeTheorySection === "part-l" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part L</span>
                    <span>·</span>
                    <span>Authoritative References</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    9. Authoritative Documentation & Syllabi Links
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      inst: "Nmap Project (Gordon Lyon)",
                      course: "Official Nmap Network Scanning Guide",
                      focus: "Port-state classification, host discovery algorithms, and service probe matching.",
                      url: "https://nmap.org/book/",
                    },
                    {
                      inst: "NIST (U.S. Dept of Commerce)",
                      course: "SP 800-115: Technical Guide to InfoSec Testing",
                      focus: "Active discovery methods, vulnerability scanning, and risk analysis standards.",
                      url: "https://csrc.nist.gov/pubs/sp/800/115/final",
                    },
                    {
                      inst: "OWASP Foundation",
                      course: "WSTG: Identify Application Entry Points",
                      focus: "Mapping HTTP interfaces, ports, and exposed parameters on web applications.",
                      url: "https://wstg.owasp.org/stable/4-Web_Application_Security_Testing/01-Information_Gathering/06-Identify_Application_Entry_Points/",
                    },
                  ].map((res, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">{res.inst}</span>
                        <h3 className="text-xs font-extrabold text-[#18181b] mt-1">{res.course}</h3>
                        <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">{res.focus}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-200">
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-800 hover:text-[#ea580c] transition"
                        >
                          <span>Explore Resource</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INTERACTIVE LABS */}
        {/* ========================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            {/* Lab Switcher Bar */}
            <div className="flex flex-wrap gap-2 p-3 bg-white rounded-2xl border border-stone-200">
              {[
                { id: 1, name: "Lab 1: Local Listening Sockets" },
                { id: 2, name: "Lab 2: Host Discovery & ICMP" },
                { id: 3, name: "Lab 3: Nmap 6 Port States" },
                { id: 4, name: "Lab 4: Service & Version Detection" },
                { id: 5, name: "Lab 5: HTTP Banner Inspection" },
                { id: 6, name: "Lab 6: End-to-End Discovery" },
              ].map((lab) => (
                <button
                  key={lab.id}
                  onClick={() => setActiveLab(lab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeLab === lab.id
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {lab.name}
                </button>
              ))}
            </div>

            {/* LAB 1: LOCAL SOCKETS */}
            {activeLab === 1 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 1</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Local Socket Inspection (ss -lntup Simulator)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Understand the difference between a service listening on localhost (127.0.0.1) versus all interfaces (0.0.0.0).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {localSockets.map((sock) => (
                      <div
                        key={sock.id}
                        onClick={() => setSelectedSocket(sock)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition ${
                          selectedSocket.id === sock.id
                            ? "border-orange-500 bg-orange-50/40 shadow-xs"
                            : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-stone-900">{sock.localAddress}</span>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white border border-stone-200">
                            {sock.proto}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-stone-500 block mt-1">{sock.process}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-3">
                    <span className="text-[11px] font-mono text-[#ea580c] font-bold uppercase">Socket Exposure Analysis</span>
                    <h4 className="text-sm font-extrabold text-stone-900 font-mono">{selectedSocket.localAddress}</h4>
                    <div className="text-xs text-stone-700 space-y-1">
                      <div><strong>Process Name:</strong> {selectedSocket.process}</div>
                      <div><strong>Exposure Scope:</strong> {selectedSocket.exposure}</div>
                      <div><strong>Reachable from Network:</strong> {selectedSocket.reachableRemotely ? "YES" : "NO (Loopback Only)"}</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
                      <strong>Security Assessment:</strong> {selectedSocket.analysis}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: HOST DISCOVERY & ICMP */}
            {activeLab === 2 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 2</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Host Discovery & ICMP Filtering Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Observe why ICMP ping checks fail to identify active servers behind stateful firewalls.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {labHosts.map((h) => (
                      <div
                        key={h.ip}
                        onClick={() => setInspectedHost(h)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition ${
                          inspectedHost.ip === h.ip
                            ? "border-orange-500 bg-orange-50/40 shadow-xs"
                            : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-stone-900">{h.ip}</span>
                          <span className="text-[10px] font-mono text-stone-500">{h.role}</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#ea580c] block mt-1">{h.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-3">
                    <span className="text-[11px] font-mono text-[#ea580c] font-bold uppercase">Probe Response Analysis</span>
                    <h4 className="text-sm font-extrabold text-stone-900 font-mono">{inspectedHost.ip} ({inspectedHost.role})</h4>
                    <div className="text-xs text-stone-700 space-y-1">
                      <div><strong>ICMP Echo Response:</strong> {inspectedHost.icmpReply ? "REPLIED (64 bytes received)" : "REQUEST TIMED OUT (Dropped)"}</div>
                      <div><strong>TCP Port 443 Probe:</strong> {inspectedHost.tcpPort443.toUpperCase()}</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
                      <strong>Methodological Takeaway:</strong> {inspectedHost.lesson}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: NMAP 6 PORT STATES */}
            {activeLab === 3 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 3</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Nmap 6 Port States Probe Inspector
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Select a port to inspect the raw packet exchange that triggered Nmap&apos;s state classification.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {portStatesData.map((p) => (
                      <div
                        key={p.port}
                        onClick={() => setInspectedPortState(p)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition ${
                          inspectedPortState.port === p.port
                            ? "border-orange-500 bg-orange-50/40 shadow-xs"
                            : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-stone-900">{p.port}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${p.stateColor}`}>
                            {p.nmapState}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-stone-500 block mt-1">{p.probeResponse}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-3">
                    <span className="text-[11px] font-mono text-[#ea580c] font-bold uppercase">State Interpretation</span>
                    <h4 className="text-sm font-extrabold text-stone-900 font-mono">
                      {inspectedPortState.port} · State: {inspectedPortState.nmapState.toUpperCase()}
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed">{inspectedPortState.definition}</p>
                    <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
                      <strong>Security Implication:</strong> {inspectedPortState.implication}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: SERVICE & VERSION DETECTION (-sV) */}
            {activeLab === 4 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 4</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Service Guess vs. Active Version Probe Workshop (-sV)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Toggle version detection to see how active probe matching reveals non-standard services running on port 8443.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setUseVersionScan(!useVersionScan)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer ${
                      useVersionScan
                        ? "bg-orange-600 text-white"
                        : "bg-stone-900 text-white"
                    }`}
                  >
                    {useVersionScan ? "Active Scan: nmap -sV -p 8443" : "Standard Scan: nmap -sT -p 8443"}
                  </button>
                  <span className="text-xs text-stone-600">
                    {useVersionScan ? "Sends protocol probe matching" : "Only checks TCP handshake"}
                  </span>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-900 text-stone-200 font-mono text-xs leading-relaxed space-y-2">
                  <div className="text-stone-500">Starting Nmap 7.94 at 2026-10-16 12:30:00 UTC</div>
                  <div className="text-white">Nmap scan report for 10.0.40.15</div>
                  <div className="text-stone-400">PORT     STATE SERVICE  VERSION</div>
                  {useVersionScan ? (
                    <div className="text-emerald-400 font-bold">
                      8443/tcp open  ssl/http Node.js Express framework (Custom LearnSphere Portal API v2.4.1)
                    </div>
                  ) : (
                    <div className="text-amber-400">
                      8443/tcp open  https-alt (Port convention guess only; no version probes sent)
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 text-xs text-stone-700 leading-relaxed">
                  <strong>Analytical Lesson:</strong> Without <code>-sV</code>, the scanner merely guesses &lsquo;https-alt&rsquo;
                  from the IANA port list. With <code>-sV</code>, active HTTP probes identify that it is actually a Node.js Express API.
                </div>
              </div>
            )}

            {/* LAB 5: HTTP BANNER INSPECTION */}
            {activeLab === 5 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 5</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    HTTP Header & Reverse Proxy Enumeration (curl -I)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Inspect HTTP response headers to identify reverse proxies, backend application runtimes, and security headers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-900 text-stone-200 font-mono text-xs leading-relaxed space-y-1">
                  <div className="text-emerald-400 font-bold mb-2">$ curl -I http://10.0.40.10/</div>
                  <div className="text-white font-bold">{httpHeadersSample.status}</div>
                  {httpHeadersSample.headers.map((h, idx) => (
                    <div key={idx}>
                      <span className="text-orange-400">{h.key}:</span>{" "}
                      <span className="text-stone-300">{h.val}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold">Reverse Proxy Hint:</strong>
                    <span className="text-stone-600 text-[11px]">Server: nginx/1.24.0 terminates public TLS.</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold">Backend Framework Disclosure:</strong>
                    <span className="text-stone-600 text-[11px]">X-Powered-By: Express reveals Node.js runtime behind Nginx.</span>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 6: END-TO-END DISCOVERY */}
            {activeLab === 6 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 6</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    End-to-End Discovery Assessment Simulator (LearnSphere Lab Subnet)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Synthesize host discovery, port scanning, and service identification into an actionable exposure inventory.
                  </p>
                </div>

                <div className="divide-y divide-stone-200 rounded-2xl border border-stone-200 overflow-hidden bg-white text-xs">
                  <div className="bg-stone-900 text-white p-3 font-bold font-mono">
                    Target Subnet: 10.0.40.0/24 · Discovered Services
                  </div>
                  <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                    <div>
                      <strong className="text-stone-900 block">10.0.40.10:443 (HTTPS)</strong>
                      <span className="text-stone-600 text-[11px]">Nginx 1.24.0 · Valid Let&apos;s Encrypt TLS cert. Intended web gateway.</span>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold shrink-0">
                      EXPECTED
                    </span>
                  </div>
                  <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                    <div>
                      <strong className="text-stone-900 block">10.0.40.15:6379 (Redis)</strong>
                      <span className="text-stone-600 text-[11px]">Redis 7.0.12 · Unauthenticated cache listener reachable across lab subnet.</span>
                    </div>
                    <span className="text-[10px] font-mono bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold shrink-0">
                      DISCREPANCY (HIGH RISK)
                    </span>
                  </div>
                  <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                    <div>
                      <strong className="text-stone-900 block">10.0.40.10:22 (SSH)</strong>
                      <span className="text-stone-600 text-[11px]">OpenSSH 8.9p1 · Reachable from student segment instead of bastion only.</span>
                    </div>
                    <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold shrink-0">
                      POLICY VIOLATION
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: APPLIED CASE STUDY */}
        {/* ========================================================= */}
        {activeTab === "casestudy" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
              <span>Applied Case Study</span>
              <span>·</span>
              <span>LearnSphere Lab Subnet</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
              Case Study: Reconciling Intended Architecture vs. Observed Network Exposure
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Examine how a security engineering team conducted a bounded discovery scan against LearnSphere&apos;s
              staging subnet (<code>10.0.40.0/24</code>) and uncovered critical differences between the approved architecture
              and live running services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs">
              <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-2">
                <h3 className="font-bold text-stone-900 uppercase">Intended Architectural Design</h3>
                <ul className="space-y-1.5 text-stone-700 list-disc list-inside leading-relaxed">
                  <li>Only ports 80 and 443 permitted on public interfaces.</li>
                  <li>SSH administration strictly confined to internal VPN IP range (10.0.99.0/24).</li>
                  <li>Database (PostgreSQL) and Cache (Redis) bound to 127.0.0.1 loopback only.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-2">
                <h3 className="font-bold text-stone-900 uppercase">Observed Scanner Findings</h3>
                <ul className="space-y-1.5 text-stone-700 list-disc list-inside leading-relaxed">
                  <li>Redis was discovered listening on <code>0.0.0.0:6379</code> without password protection.</li>
                  <li>SSH port 22 was open across all lab subnets due to a misplaced firewall rule.</li>
                  <li>A developer staging service on port 8080 was running an outdated Express.js prototype.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: KNOWLEDGE CHECK QUIZ */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Knowledge Check</span>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-0.5">
                  Part J: 10-Question Technical Knowledge Check
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Test your comprehension of network discovery, Nmap port states, and service enumeration.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold text-xs transition cursor-pointer"
                >
                  Submit & Score Quiz
                </button>
                <button
                  onClick={resetQuiz}
                  className="p-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600 transition cursor-pointer"
                  title="Reset Quiz"
                >
                  <RefreshCw size={15} />
                </button>
              </div>
            </div>

            {showQuizResults && (
              <div className="p-5 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase">Assessment Score</span>
                  <h3 className="text-xl font-extrabold mt-0.5">
                    {calculateScore()} / {quizQuestions.length} Questions Correct
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    {calculateScore() >= 8
                      ? "Excellent! You have mastered network discovery, port scanning, and service identification."
                      : "Good effort. Review the detailed pedagogical feedback below to solidify core Nmap concepts."}
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-orange-400 bg-white/10 px-4 py-2 rounded-xl text-center">
                  {Math.round((calculateScore() / quizQuestions.length) * 100)}%
                </div>
              </div>
            )}

            {/* Quiz Questions List */}
            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selected = quizAnswers[q.id];
                const isCorrect = selected === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition ${
                      showQuizResults
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/20"
                          : "border-rose-300 bg-rose-50/20"
                        : "border-stone-200 bg-stone-50/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-stone-200 text-stone-800 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>

                        <div className="mt-3 space-y-2">
                          {q.options.map((option, optIdx) => {
                            const isChosen = selected === optIdx;
                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${
                                  isChosen
                                    ? showQuizResults
                                      ? optIdx === q.correctAnswer
                                        ? "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold"
                                        : "bg-rose-100 border-rose-400 text-rose-950 font-bold"
                                      : "bg-stone-900 text-white border-stone-900 font-bold"
                                    : showQuizResults && optIdx === q.correctAnswer
                                    ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold"
                                    : "bg-white border-stone-200 text-stone-800 hover:bg-stone-100"
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>

                        {showQuizResults && (
                          <div className="mt-3 pt-3 border-t border-stone-200 text-[11px] text-stone-700 leading-relaxed">
                            <strong className="text-stone-900">Pedagogical Justification: </strong>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & RUBRIC */}
        {/* ========================================================= */}
        {activeTab === "capstone" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
              <span>Capstone Project</span>
              <span>·</span>
              <span>Authorized Network Discovery Assessment</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
              Part K: LearnSphere Subnet Exposure Assessment & Remediation
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Conduct an authorized network discovery and service-exposure assessment against LearnSphere&apos;s isolated
              lab subnet (<code>10.0.40.0/24</code>). Verify host reachability, map port states, enumerate service versions,
              and produce a professional remediation report.
            </p>

            {/* Deliverables List */}
            <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
              <h3 className="text-xs font-extrabold text-stone-900 uppercase tracking-wide">
                8 Required Capstone Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs text-stone-700">
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 1: Scope & Authorization:</strong> Document approved CIDR, allowed ports, test windows, and exclusions.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 2: Host Inventory:</strong> Identify reachable hosts via TCP SYN & ARP probes with timestamps.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 3: Port-State Assessment:</strong> Catalog open, closed, and filtered states for target hosts.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 4: Service Enumeration:</strong> Extract protocol names, version banners, and HTTP response headers.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 5: Configuration Comparison:</strong> Reconcile observed services against approved architecture.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 6: Risk Assessment:</strong> Prioritize discrepancies based on exposure and sensitive data handling.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 7: Remediation & Verification:</strong> Propose firewall rules and service binding corrections.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 8: Professional Report:</strong> Executive brief, reproducible scan logs, and evidence tables.
                </div>
              </div>
            </div>

            {/* Grading Rubric */}
            <div className="rounded-2xl border border-stone-200 overflow-hidden">
              <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm">
                  Capstone Grading Rubric · 100% Comprehensive Scale
                </span>
                <span className="text-xs font-mono text-orange-400 font-bold">Academic Standard</span>
              </div>
              <div className="divide-y divide-stone-200 text-xs bg-white">
                {[
                  { criterion: "Authorization and scope compliance", weight: "10%" },
                  { criterion: "Host discovery and inventory", weight: "15%" },
                  { criterion: "Port-state interpretation", weight: "20%" },
                  { criterion: "Service identification and evidence", weight: "15%" },
                  { criterion: "Risk assessment and prioritization", weight: "15%" },
                  { criterion: "Remediation and verification plan", weight: "15%" },
                  { criterion: "Documentation and reproducibility", weight: "10%" },
                ].map((rub, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between hover:bg-stone-50">
                    <span className="font-bold text-stone-900">{rub.criterion}</span>
                    <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded">
                      {rub.weight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. FOOTER NAVIGATION (PREVIOUS & NEXT MODULE) */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/cybersecurity/osint")}
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: Module 6 (OSINT & Passive Recon)</span>
          </button>

          <div className="text-right">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              Up Next · Module 8
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-[#18181b]">
              Vulnerability Assessment Fundamentals, CVEs, CVSS & Prioritization
            </h4>
          </div>

          <button
            onClick={() => navigate("/learning/cybersecurity/scanning")}
            className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <span>Proceed to Module 8</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </main>
    </div>
  );
}
