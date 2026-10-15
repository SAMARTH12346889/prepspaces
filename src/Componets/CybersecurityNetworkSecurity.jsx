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
  TrendingUp,
  Wifi,
  Split,
  Router,
  Ban,
  RadioTower,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 9                            */
/* Network Security, Firewalls, IDS/IPS, and Network Segmentation             */
/* Informed by NIST SP 800-41 Rev. 1, NIST SP 800-94, NIST SP 800-207 & CISA  */
/* -------------------------------------------------------------------------- */

export default function CybersecurityNetworkSecurity() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'firewall-sim' | 'ids-ips' | 'policy-builder' | 'zero-trust' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: MULTI-TIER FIREWALL RULE EVALUATOR & PACKET TESTER           */
  /* -------------------------------------------------------------------------- */
  const [testPacket, setTestPacket] = useState({
    srcZone: "Internet",
    dstZone: "Web",
    proto: "TCP",
    dstPort: 443,
    state: "NEW",
  });

  const [firewallRules, setFirewallRules] = useState([
    { id: 1, src: "Internet", dst: "Web", proto: "TCP", port: 443, state: "NEW,ESTABLISHED", action: "ALLOW", desc: "Public HTTPS ingress" },
    { id: 2, src: "Internet", dst: "Web", proto: "TCP", port: 80, state: "NEW,ESTABLISHED", action: "ALLOW", desc: "HTTP for 301 redirect" },
    { id: 3, src: "Web", dst: "App", proto: "TCP", port: 8080, state: "NEW,ESTABLISHED", action: "ALLOW", desc: "Internal REST API calls" },
    { id: 4, src: "App", dst: "Database", proto: "TCP", port: 3306, state: "NEW,ESTABLISHED", action: "ALLOW", desc: "App cluster MySQL queries" },
    { id: 5, src: "Management", dst: "All", proto: "TCP", port: 22, state: "NEW,ESTABLISHED", action: "ALLOW", desc: "Admin bastion SSH" },
    { id: 6, src: "Any", dst: "Database", proto: "ANY", port: 3306, state: "ANY", action: "DENY", desc: "Explicit database protection" },
  ]);

  const packetEvaluation = useMemo(() => {
    for (let rule of firewallRules) {
      const srcMatch = rule.src === "Any" || rule.src === testPacket.srcZone;
      const dstMatch = rule.dst === "All" || rule.dst === "Any" || rule.dst === testPacket.dstZone;
      const protoMatch = rule.proto === "ANY" || rule.proto === testPacket.proto;
      const portMatch = rule.port === "ANY" || Number(rule.port) === Number(testPacket.dstPort);

      if (srcMatch && dstMatch && protoMatch && portMatch) {
        return {
          matchedRule: rule,
          action: rule.action,
          isDefaultDeny: false,
          reason: `Matched Rule #${rule.id} (${rule.desc}): ${rule.action}`,
        };
      }
    }

    return {
      matchedRule: null,
      action: "DENY",
      isDefaultDeny: true,
      reason: "No explicit rule matched. Blocked by global Default-Deny baseline.",
    };
  }, [testPacket, firewallRules]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: IDS / IPS DETECTION & ACTIVE PREVENTION SANDBOX              */
  /* -------------------------------------------------------------------------- */
  const [idsMode, setIdsMode] = useState("IPS"); // 'IDS' (Alert Only) | 'IPS' (Active Drop/Reset)
  const [selectedAttackScenario, setSelectedAttackScenario] = useState("sqli");

  const attackScenarios = {
    sqli: {
      name: "SQL Injection Probe (' OR 1=1 --)",
      proto: "TCP / HTTP (Port 80)",
      signature: "ALERT tcp any any -> 192.168.1.10 80 (msg:'ET EXPLOIT SQLi in URI'; content:'OR%201%3D1'; sid:2000001;)",
      detectionType: "Signature-Based Deep Packet Inspection",
      idsAction: "LOG ALERT & WRITE TO SIEM: Potential SQLi detected",
      ipsAction: "DROP PACKET & TRANSMIT TCP RESET (RST) TO CLIENT",
      impactOnUsers: "Malicious query terminated instantly; web application remains protected.",
    },
    syn_flood: {
      name: "TCP SYN Flood DoS (45,000 pkts/sec)",
      proto: "TCP / Port 443",
      signature: "ANOMALY: Half-open TCP connections exceed 5,000/sec baseline from single /24 CIDR",
      detectionType: "Anomaly & Rate-Based Threshold Detection",
      idsAction: "GENERATE HIGH-PRIORITY DOS ALERT: Influx of SYN without ACK",
      ipsAction: "ENGAGE SYN COOKIES & RATE-LIMIT OFFENDING SUBNET AT EDGE FIREWALL",
      impactOnUsers: "Server memory protected from backlog exhaustion; legitimate users continue uninterrupted.",
    },
    lateral: {
      name: "Lateral Workstation-to-Database Scan (TCP 3306)",
      proto: "TCP / MySQL Port 3306",
      signature: "POLICY VIOLATION: Source VLAN 20 (Workstations) attempted direct handshake to VLAN 50 (DB)",
      detectionType: "Behavioral & Segmentation Policy Rule",
      idsAction: "GENERATE LATERAL MOVEMENT ALERT: Unauthorized inter-VLAN probe",
      ipsAction: "IMMEDIATELY REJECT PACKET WITH ICMP ADMIN PROHIBITED (Type 3 Code 13)",
      impactOnUsers: "Attacker pivot halted; database connection pool remains insulated.",
    },
    c2_beacon: {
      name: "DNS C2 Tunneling / Beaconing",
      proto: "UDP / DNS Port 53",
      signature: "ANOMALY: High entropy subdomains (e.g. `a9x8z1.c2.evil-corp.com`) resolved every 15s",
      detectionType: "Heuristic & Reputation-Based Threat Intelligence",
      idsAction: "ALERT: Suspected DNS covert channel data exfiltration",
      ipsAction: "INLINE DNS SINKHOLE: Return NXDOMAIN or loopback 0.0.0.0",
      impactOnUsers: "Malware severed from command-and-control server; exfiltration blocked.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: LAB 9A INTERACTIVE POLICY DESIGN EXERCISE                     */
  /* -------------------------------------------------------------------------- */
  const [labDecisions, setLabDecisions] = useState({
    q1: "ALLOW", // Public clients to Web HTTPS
    q2: "DENY", // Public directly to DB
    q3: "ALLOW", // Web to App
    q4: "ALLOW", // App to DB
    q5: "DENY", // Workstation to Management
    q6: "ALLOW", // Management to Server with controls
    q7: "DENY", // App server to any internet destination
  });

  const correctLabPolicy = {
    q1: { correct: "ALLOW", note: "Standard public entry point. Enforce TLS 1.3 on port 443." },
    q2: { correct: "DENY", note: "Critical: Database must never have direct internet ingress." },
    q3: { correct: "ALLOW", note: "Permit web tier to query backend APIs on approved application port." },
    q4: { correct: "ALLOW", note: "Permit application tier to query database on approved port (e.g. 3306/5432)." },
    q5: { correct: "DENY", note: "Ordinary user endpoints must not touch management interfaces." },
    q6: { correct: "ALLOW", note: "Authorized administrators connecting from dedicated jump box with MFA." },
    q7: { correct: "DENY", note: "Restrict egress; servers should only contact approved repositories and logging endpoints." },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: ZERO TRUST ARCHITECTURE VS CASTLE-AND-MOAT                    */
  /* -------------------------------------------------------------------------- */
  const [ztDevicePosture, setZtDevicePosture] = useState("healthy"); // 'healthy' | 'unpatched' | 'non_compliant'
  const [ztUserRole, setZtUserRole] = useState("developer"); // 'developer' | 'contractor' | 'admin'
  const [ztTargetResource, setZtTargetResource] = useState("git_repo"); // 'git_repo' | 'prod_db' | 'billing'

  const ztEvaluation = useMemo(() => {
    // Policy Engine Logic
    if (ztDevicePosture === "non_compliant") {
      return {
        decision: "ACCESS DENIED",
        badge: "bg-red-600 text-white",
        reason: "Device posture check failed: Missing active EDR sensor or disk encryption is disabled.",
      };
    }
    if (ztDevicePosture === "unpatched") {
      return {
        decision: "REMEDIATION NETWORK",
        badge: "bg-amber-600 text-white",
        reason: "Device OS is > 14 days out of compliance. Routed strictly to update server.",
      };
    }
    if (ztTargetResource === "prod_db") {
      if (ztUserRole === "admin") {
        return {
          decision: "JUST-IN-TIME (JIT) ACCESS GRANTED",
          badge: "bg-emerald-600 text-white",
          reason: "Ephemeral 1-hour session provisioned via Bastion with Hardware FIDO2 MFA.",
        };
      }
      return {
        decision: "ACCESS DENIED",
        badge: "bg-red-600 text-white",
        reason: "User role unauthorized for production database access. Principle of least privilege enforced.",
      };
    }
    if (ztTargetResource === "billing" && ztUserRole === "contractor") {
      return {
        decision: "ACCESS DENIED",
        badge: "bg-red-600 text-white",
        reason: "Third-party contractor identity excluded from financial billing records.",
      };
    }

    return {
      decision: "ACCESS GRANTED (SESSION MONITORED)",
      badge: "bg-emerald-600 text-white",
      reason: "Identity, healthy device posture, and role authorization verified for specific resource.",
    };
  }, [ztDevicePosture, ztUserRole, ztTargetResource]);

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA (From 9.14 Knowledge Assessment)                                  */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of a firewall?",
      options: [
        "Guarantee that software has no vulnerabilities",
        "Control network traffic according to security policy",
        "Replace authentication",
        "Encrypt every application automatically",
      ],
      correct: 1,
      explanation:
        "A firewall's primary function is to enforce a defined traffic-control policy between networks, interfaces, or security zones by inspecting packet headers, states, or application protocols.",
    },
    {
      id: 2,
      question: "What is the main difference between an IDS and an IPS?",
      options: [
        "An IDS only works on wireless networks",
        "An IPS can actively block traffic, while an IDS typically detects and alerts",
        "An IDS always encrypts traffic",
        "An IPS replaces a firewall",
      ],
      correct: 1,
      explanation:
        "An Intrusion Detection System (IDS) passively monitors and generates alerts, whereas an Intrusion Prevention System (IPS) sits inline with the traffic path and can actively drop packets, reset TCP sessions, or block offending IP addresses.",
    },
    {
      id: 3,
      question: "What does network segmentation help achieve?",
      options: [
        "Guarantee no system can be compromised",
        "Limit communication paths and reduce lateral movement",
        "Remove the need for patching",
        "Make every internal system publicly accessible",
      ],
      correct: 1,
      explanation:
        "Network segmentation isolates systems into distinct security zones. If an attacker breaches a perimeter web server, segmentation prevents them from easily pivoting or moving laterally to sensitive internal database clusters.",
    },
    {
      id: 4,
      question: "What does default-deny mean?",
      options: [
        "Allow all traffic unless blocked",
        "Deny traffic unless explicitly permitted by policy",
        "Block only traffic from the internet",
        "Allow traffic only on TCP port 443",
      ],
      correct: 1,
      explanation:
        "Default-deny blocks all inbound and outbound network traffic by default; communication is permitted only if an explicit, justified rule authorizes it. This minimizes unintended exposure.",
    },
    {
      id: 5,
      question: "Which is the best database access policy for a multi-tier application?",
      options: [
        "Allow every internal device to connect",
        "Allow only approved application systems and administrators as required",
        "Expose the database directly to the internet",
        "Disable database authentication",
      ],
      correct: 1,
      explanation:
        "Least privilege requires restricting database network access strictly to the application tier hosts that query it and authenticated administrators connecting over encrypted management jump hosts.",
    },
    {
      id: 6,
      question: "Why can an IPS cause service disruption?",
      options: [
        "It always disables routing",
        "A false positive can cause legitimate traffic to be blocked",
        "It cannot inspect any traffic",
        "It automatically patches every server",
      ],
      correct: 1,
      explanation:
        "Because an IPS actively drops packets, a false positive (benign traffic misidentified as malicious) can inadvertently disrupt critical business operations or drop legitimate customer requests.",
    },
    {
      id: 7,
      question: "What does Zero Trust emphasize?",
      options: [
        "Trust every device on the corporate network",
        "Trust based only on physical location",
        "Explicit access decisions based on identity, context, and policy",
        "Replace all network monitoring with a VPN",
      ],
      correct: 2,
      explanation:
        "Zero Trust Architecture (NIST SP 800-207) eliminates implicit trust based on network location. Every access request is dynamically authenticated and authorized based on user identity, device posture, and contextual policy.",
    },
    {
      id: 8,
      question: "What should happen after a firewall policy change?",
      options: [
        "Assume the policy works",
        "Delete all logs",
        "Validate expected and prohibited traffic and review logs",
        "Disable monitoring to avoid alerts",
      ],
      correct: 2,
      explanation:
        "Engineering discipline requires verifying both sides of the policy: proving that permitted traffic flows cleanly and confirming that prohibited traffic is decisively dropped, followed by log audits for anomalies.",
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
    { id: 1, title: "9.1 Overview & Core Objectives" },
    { id: 2, title: "9.2 Network Security Fundamentals" },
    { id: 3, title: "9.3 Threats, Attack Surfaces & Boundaries" },
    { id: 4, title: "9.4 Firewall Architecture & Rule Mechanics" },
    { id: 5, title: "9.5 Types of Firewalls (Packet to WAF)" },
    { id: 6, title: "9.6 Firewall Policy Design & Hygiene" },
    { id: 7, title: "9.7 Intrusion Detection Systems (IDS)" },
    { id: 8, title: "9.8 Intrusion Prevention Systems (IPS)" },
    { id: 9, title: "9.9 Network Segmentation & Microsegmentation" },
    { id: 10, title: "9.10 Zero Trust Architecture & NAC" },
    { id: 11, title: "9.11 Network Monitoring & Security Logs" },
    { id: 12, title: "9.12 Practical Lab 9A: Security Policy" },
    { id: 13, title: "9.13 Common Mistakes & Best Practices" },
    { id: 14, title: "9.14 Official Authoritative Resources" },
    { id: 15, title: "9.15 Final Engineering Takeaways" },
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
            currentModuleId="network-security"
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
                  Cybersecurity Master Course · Module 9
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-100 px-2.5 py-0.5 font-mono text-[11px] font-bold text-stone-600">
                  Intermediate Technical Module
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#18181b]">
                Network Security, Firewalls, IDS/IPS &amp; Segmentation
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Design and enforce multi-tier network security controls. Master stateful inspection, next-gen firewalls, inline IPS packet manipulation, DMZ isolation, microsegmentation, and Zero Trust Architecture per NIST SP 800-41 Rev. 1 and NIST SP 800-207.
              </p>
            </div>

            <button
              onClick={() => setShowAiTutor(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-700 transition-colors"
            >
              <Sparkles size={16} />
              <span>Ask Nova Tutor</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stone-100 text-xs">
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Firewall Paradigms</span>
              <span className="text-stone-900 font-bold font-mono text-sm">Stateful, NGFW, WAF, Host</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Intrusion Systems</span>
              <span className="text-orange-700 font-bold font-mono text-sm">Inline IPS vs. Passive NIDS</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Architecture</span>
              <span className="text-stone-900 font-bold font-mono text-sm">Zero Trust (NIST SP 800-207)</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-stone-400 font-mono block text-[10px] uppercase font-bold">Interactive Tools</span>
              <span className="text-emerald-700 font-bold font-mono text-sm">4 Live Simulators &amp; Quiz</span>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {[
            { id: "theory", label: "Curriculum & Theory", icon: BookOpen },
            { id: "firewall-sim", label: "Firewall Rule Evaluator", icon: Shield },
            { id: "ids-ips", label: "IDS vs. IPS Sandbox", icon: Activity },
            { id: "policy-builder", label: "Lab 9A Policy Matrix", icon: FileSpreadsheet },
            { id: "zero-trust", label: "Zero Trust Architecture", icon: Lock },
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
                    <span>Module 9 Topics</span>
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
                        selectedTopic === t.id
                          ? "bg-orange-50 text-orange-800 border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{t.title}</span>
                      {selectedTopic === t.id && (
                        <CheckCircle2 size={13} className="text-orange-600 shrink-0 ml-1.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Callout Card */}
              <div className="rounded-3xl border border-orange-200 bg-orange-50/70 p-5">
                <div className="flex items-center gap-2 font-bold text-xs text-orange-900 mb-2">
                  <ShieldAlert size={16} className="text-orange-600" />
                  <span>The Perimeter Fallacy</span>
                </div>
                <p className="text-[11px] text-orange-800 leading-relaxed">
                  Perimeter firewalls are necessary, but insufficient on their own. Once an attacker breaches a web server, internal segmentation and Zero Trust policies prevent them from freely pivoting to core databases.
                </p>
              </div>
            </div>

            {/* Main Theory Reading Area */}
            <div className="lg:col-span-8 rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-8">
              {/* 9.1 Overview */}
              {selectedTopic === 1 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.1</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Module Overview &amp; Core Objectives
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Defensive network engineering across perimeter, east-west, and microsegmented zones
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Network security is the discipline of protecting network infrastructure, connected systems, workloads, and transit data against unauthorized access, disruption, and lateral adversary movement. Modern organizations do not operate single, isolated castles; they manage multi-cloud VPCs, remote workforces, container fabrics, and third-party SaaS integrations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">Firewall Policy Enforcement</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Filtering packets, tracking connection states, and restricting transport protocols per defined security rulebases.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">Intrusion Detection &amp; Prevention</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Passive NIDS alerting vs. inline IPS packet dropping and TCP session resetting based on signatures and behavioral anomalies.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">Network Segmentation</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Partitioning infrastructure into isolated zones (DMZ, App Tier, Secure DB Tier) with strict inter-zone traffic gates.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">Zero Trust Architecture (ZTA)</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Eliminating implicit network trust. Dynamic, context-aware policy enforcement for every single resource access request.
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 pt-2">Learning Objectives</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      "Differentiate packet-filtering, stateful, application-layer, and host firewalls.",
                      "Contrast passive IDS detection with active inline IPS packet manipulation.",
                      "Distinguish signature-based, anomaly-based, and behavioral detection engines.",
                      "Design multi-tier network segmentation isolating Web, App, and Database zones.",
                      "Implement default-deny rulebases with explicit least-privilege allows.",
                      "Analyze firewall and security event logs to identify filtering limitations.",
                      "Apply Zero Trust principles (NIST SP 800-207) and Network Access Control (NAC).",
                      "Build and validate defensible network firewall policies in authorized labs.",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
                        <CheckCheck size={14} className="text-orange-600 mt-0.5 shrink-0" />
                        <span className="text-stone-700 leading-tight text-[11px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )}

              {/* 9.2 Fundamentals */}
              {selectedTopic === 2 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.2</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Network Security Fundamentals
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      The CIA triad, Defense in Depth layering, and the Principle of Least Privilege
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Network security operations are guided by core security principles that balance risk mitigation with operational availability.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Confidentiality</strong>
                      <span className="text-stone-600 text-[11px]">Prevent unauthorized eavesdropping. Enforce IPsec VPN tunnels, TLS 1.3, and restricted VLAN access.</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Integrity</strong>
                      <span className="text-stone-600 text-[11px]">Prevent unauthorized packet tampering, ARP cache poisoning, and route manipulation through cryptographic hashing and 802.1X.</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Availability</strong>
                      <span className="text-stone-600 text-[11px]">Ensure resilience against volumetric denial-of-service, link failure, and firewall rule misconfigurations.</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">Defense in Depth &amp; Least Privilege</h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Defense in depth assumes that any single defensive barrier can and will fail. Rather than trusting internal systems, a layered architecture enforces controls at edge firewalls, inter-VLAN routers, cloud security groups, host operating systems, and service application listeners.
                  </p>
                </article>
              )}

              {/* 9.3 Threats & Attack Paths */}
              {selectedTopic === 3 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.3</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Network Threats, Attack Surfaces &amp; Trust Boundaries
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Reconnaissance, lateral movement, MITM, DoS, and identifying trust boundary crossings
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-stone-200">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-stone-100 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-2.5 border-b border-stone-200">Threat Category</th>
                          <th className="p-2.5 border-b border-stone-200">Adversary TTP</th>
                          <th className="p-2.5 border-b border-stone-200">Defensive Countermeasure</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-[11px]">
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900 font-mono">Reconnaissance</td>
                          <td className="p-2.5 text-stone-600">Port scanning, ARP sweeping, DNS zone transfers</td>
                          <td className="p-2.5 text-emerald-800">Default-deny filtering, rate limiting, IDS alert rules</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900 font-mono">Lateral Movement</td>
                          <td className="p-2.5 text-stone-600">Pivoting via SMB (445), WinRM (5985), SSH (22) across subnets</td>
                          <td className="p-2.5 text-emerald-800">East-west microsegmentation, host firewalls, jump bastions</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900 font-mono">Man-in-the-Middle</td>
                          <td className="p-2.5 text-stone-600">ARP spoofing, DNS cache poisoning, rogue DHCP</td>
                          <td className="p-2.5 text-emerald-800">Dynamic ARP Inspection (DAI), DHCP Snooping, TLS validation</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900 font-mono">C2 Exfiltration</td>
                          <td className="p-2.5 text-stone-600">Outbound DNS tunneling, reverse HTTP shells to dynamic IPs</td>
                          <td className="p-2.5 text-emerald-800">Strict egress filtering, DNS sinkholing, proxy inspection</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </article>
              )}

              {/* 9.4 Firewall Architecture & Rule Mechanics */}
              {selectedTopic === 4 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.4</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Firewall Architecture &amp; Rule Mechanics
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      5-tuple inspection, connection state tables, default-deny, and evaluation ordering
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Traditional and stateful firewalls evaluate network packets against an ordered list of security rules using the <strong>5-Tuple</strong>:
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
                    <div className="text-emerald-400 font-bold">// Standard Firewall 5-Tuple Structure:</div>
                    <div>1. Source IP Address / CIDR Subnet</div>
                    <div>2. Destination IP Address / CIDR Subnet</div>
                    <div>3. Transport Protocol (TCP, UDP, ICMP, GRE)</div>
                    <div>4. Source Port (Typically dynamic/ephemeral)</div>
                    <div>5. Destination Port (Target service listening port, e.g. 443)</div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 pt-2">The Critical Golden Rule: Default-Deny</h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Secure architectures enforce <strong>default-deny</strong>. Any packet that fails to match an explicit <code>ALLOW</code> rule falls through to the final implicit <code>DENY ALL</code> rule. Outbound egress traffic and internal east-west traffic must also be bounded.
                  </p>
                </article>
              )}

              {/* 9.5 Types of Firewalls */}
              {selectedTopic === 5 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.5</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Types of Firewalls: From Packet Filtering to WAFs
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      NIST SP 800-41 Rev. 1 taxonomy: stateless, stateful, application-layer, NGFW, and host-based
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Packet-Filtering (Stateless)</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Examines isolated headers without connection context. Fast and simple (e.g. Cisco ACLs), but cannot track handshakes or dynamically allow return response traffic.
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Stateful Inspection</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Maintains an active state table. Automatically permits return traffic for <code>ESTABLISHED,RELATED</code> sessions without requiring broad inbound allow rules.
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Next-Generation Firewall (NGFW)</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Combines stateful inspection with deep packet inspection (DPI), application identification (App-ID), TLS decryption/inspection, and integrated inline IPS.
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Web Application Firewall (WAF)</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Operates specifically at Layer 7 to inspect HTTP/HTTPS payloads against injection attacks (SQLi, XSS, SSRF) and protocol anomalies.
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* 9.6 Policy Design & Rulebase Hygiene */}
              {selectedTopic === 6 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.6</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Firewall Policy Design &amp; Rulebase Hygiene
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Rule ordering, shadowing defects, rule explosion, and rigorous change management
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Firewall rules are evaluated sequentially from top to bottom. Once a packet matches a rule, execution terminates. Common architectural errors include:
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                      <strong className="text-red-950 block font-mono">Shadowed Rules (Dead Code)</strong>
                      <span className="text-red-900 text-[11px]">
                        A broad rule positioned higher in the chain matches all traffic, preventing a narrower rule below it from ever being evaluated.
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                      <strong className="text-amber-950 block font-mono">Unused / Orphaned Exceptions</strong>
                      <span className="text-amber-900 text-[11px]">
                        Temporary firewall allowances created for emergency troubleshooting or decommissioned servers that were never repealed.
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* 9.7 IDS */}
              {selectedTopic === 7 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.7</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Intrusion Detection Systems (IDS)
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Network-based (NIDS) vs. Host-based (HIDS), TAP/SPAN port mirroring, and detection approaches
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    An Intrusion Detection System (IDS) is a passive monitoring technology. It inspects mirrored copies of network traffic (via SPAN ports or physical network TAPs) or host event telemetry to detect unauthorized activities.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Signature-Based</strong>
                      <span className="text-stone-600 text-[11px]">Matches explicit byte strings, regex patterns, or known CVE exploit signatures (e.g. Snort/Suricata rules).</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Anomaly-Based</strong>
                      <span className="text-stone-600 text-[11px]">Establishes a statistical baseline of normal behavior and alerts on deviations (e.g. sudden surge in ICMP traffic).</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 font-mono block mb-1">Behavioral / Heuristic</strong>
                      <span className="text-stone-600 text-[11px]">Correlates multi-stage attack chains across time (e.g. port scan followed by SMB authentication failure).</span>
                    </div>
                  </div>
                </article>
              )}

              {/* 9.8 IPS */}
              {selectedTopic === 8 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.8</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Intrusion Prevention Systems (IPS)
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Inline packet manipulation, TCP resets, connection drops, and tuning false positives
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Unlike a passive IDS, an Intrusion Prevention System (IPS) is deployed <strong>inline</strong> directly in the data plane. It has the authority and capability to drop offending packets, inject TCP RST packets to kill sessions, or dynamically reconfigure firewall rules.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
                    <strong className="block font-bold mb-1">The Inline Operational Risk:</strong>
                    Because an IPS actively blocks traffic, a <strong>false positive</strong> in an IPS drops legitimate business transactions. Organizations typically deploy new detection rules in <em>Alert-Only</em> mode for 14–30 days to measure false positive rates before enabling inline blocking.
                  </div>
                </article>
              )}

              {/* 9.9 Network Segmentation & Microsegmentation */}
              {selectedTopic === 9 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.9</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Network Segmentation &amp; Security Zones
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      DMZ architectures, VLAN routing enforcement, and workload microsegmentation
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">DMZ (Demilitarized Zone) Architecture</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Hosts public-facing web servers. If a web application is compromised, inter-zone firewall rules prevent it from directly initiating connections into the core database or management tiers.
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">VLANs vs. Security Boundaries</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        VLANs create Layer 2 broadcast domains. However, VLANs do not provide security unless Layer 3 routing between them passes through a stateful firewall or strict access control list.
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono text-xs mb-1">Microsegmentation</strong>
                      <span className="text-stone-600 text-[11px] leading-relaxed">
                        Applies fine-grained, identity-based security policies to individual container pods, virtual machines, or Kubernetes namespaces (e.g. Calico, Cilium NetworkPolicies).
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* 9.10 Zero Trust & NAC */}
              {selectedTopic === 10 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.10</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Zero Trust Architecture (ZTA) &amp; Network Access Control (NAC)
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      NIST SP 800-207 principles, Policy Decision Points (PDP), and 802.1X endpoint posture
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Zero Trust Architecture (NIST SP 800-207) asserts that network location should never confer trust. A user connecting from an office Ethernet jack is treated with the same scrutiny as a user on coffee shop Wi-Fi.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono mb-1">Policy Decision Point (PDP)</strong>
                      <span className="text-stone-600 text-[11px]">
                        The brain evaluating identity, MFA verification, endpoint compliance (EDR, OS patches), and sensitivity of the requested resource.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono mb-1">Policy Enforcement Point (PEP)</strong>
                      <span className="text-stone-600 text-[11px]">
                        The gatekeeper (reverse proxy, firewall, or software-defined perimeter agent) that enables or terminates encrypted sessions.
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* 9.11 Monitoring & Logs */}
              {selectedTopic === 11 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.11</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Network Monitoring, Telemetry &amp; SIEM Integration
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      NetFlow/IPFIX, DNS logs, firewall deny trends, and correlation across multi-source sensors
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Defenders cannot protect what they cannot observe. Centralizing network flow records, DNS query logs, and firewall drop metrics into a SIEM allows security analysts to detect anomalies that bypass single devices.
                  </p>
                </article>
              )}

              {/* 9.12 Lab 9A */}
              {selectedTopic === 12 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.12</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Practical Lab 9A: Firewall Rules &amp; Network Segmentation
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Step-by-step policy simulation and Linux UFW host firewall configuration
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    In this lab, you design a defensible network policy across a multi-tier learning platform. Use the <strong>&ldquo;Lab 9A Policy Matrix&rdquo;</strong> tab above to interactively evaluate the 7 reference policy decisions!
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                    <div className="text-stone-400"># Practical Linux UFW Command Sequence for Lab Host:</div>
                    <div className="text-emerald-400">sudo ufw default deny incoming</div>
                    <div className="text-emerald-400">sudo ufw default allow outgoing</div>
                    <div className="text-emerald-400">sudo ufw allow from 10.0.1.5 to any port 22 proto tcp</div>
                    <div className="text-emerald-400">sudo ufw allow 80/tcp</div>
                    <div className="text-emerald-400">sudo ufw allow 443/tcp</div>
                    <div className="text-emerald-400">sudo ufw enable</div>
                  </div>
                </article>
              )}

              {/* 9.13 Common Mistakes & Best Practices */}
              {selectedTopic === 13 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.13</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Common Mistakes and Professional Best Practices
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Unbounded internal trust, permissive egress, and unvalidated IPS deployments
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-stone-200">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-stone-100 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-2.5 border-b border-stone-200">Frequent Mistake</th>
                          <th className="p-2.5 border-b border-stone-200">Operational Risk</th>
                          <th className="p-2.5 border-b border-stone-200">Engineering Best Practice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-[11px]">
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Trusting all internal traffic</td>
                          <td className="p-2.5 text-stone-600">Workstation compromise leads directly to database takeover</td>
                          <td className="p-2.5 text-emerald-800">Enforce inter-zone microsegmentation and East-West filtering</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Permissive outbound egress (ANY/ANY)</td>
                          <td className="p-2.5 text-stone-600">Malware beacons freely to dynamic external C2 infrastructure</td>
                          <td className="p-2.5 text-emerald-800">Restrict egress strictly to documented dependencies and update proxies</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-red-700">Deploying IPS blocking without tuning</td>
                          <td className="p-2.5 text-stone-600">False positives terminate critical customer traffic</td>
                          <td className="p-2.5 text-emerald-800">Run in Alert-Only mode for 30 days before enabling inline drops</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </article>
              )}

              {/* 9.14 Official Resources */}
              {selectedTopic === 14 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.14</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Official and Authoritative Learning Resources
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Primary standards and technical publications from NIST, CISA, and Ubuntu
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy</h4>
                        <p className="text-stone-600 text-[11px] mt-1 leading-relaxed">
                          Authoritative federal publication detailing firewall architectures, policy development, rulebase maintenance, and testing.
                        </p>
                      </div>
                      <a
                        href="https://csrc.nist.gov/pubs/sp/800/41/r1/final"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shrink-0 transition-colors"
                      >
                        <span>NIST SP 800-41</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">NIST SP 800-207: Zero Trust Architecture</h4>
                        <p className="text-stone-600 text-[11px] mt-1 leading-relaxed">
                          The definitive architecture guide moving beyond perimeter-based network models to resource-centric, dynamic policy enforcement.
                        </p>
                      </div>
                      <a
                        href="https://csrc.nist.gov/pubs/sp/800/207/final"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shrink-0 transition-colors"
                      >
                        <span>NIST SP 800-207</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">CISA: Layering Network Security Through Segmentation</h4>
                        <p className="text-stone-600 text-[11px] mt-1 leading-relaxed">
                          Practical guidance and infographics on isolating critical operational technology and enterprise assets.
                        </p>
                      </div>
                      <a
                        href="https://www.cisa.gov/sites/default/files/publications/layering-network-security-segmentation_infographic_508_0.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shrink-0 transition-colors"
                      >
                        <span>CISA Guide</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </article>
              )}

              {/* 9.15 Final Takeaway */}
              {selectedTopic === 15 && (
                <article className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="font-mono text-xs font-bold text-orange-600">Section 9.15</span>
                    <h2 className="text-2xl font-black text-stone-900 mt-1">
                      Final Engineering Takeaways
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Synthesizing network defense, proactive prevention, and continuous validation
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-3 leading-relaxed">
                    <p className="text-stone-700">
                      Effective network security is not achieved by placing a single firewall at the perimeter. Firewalls enforce communication boundaries, IDS/IPS capabilities detect and prevent malicious traffic patterns, and segmentation bounds the blast radius of any breach.
                    </p>
                    <p className="text-stone-700 font-semibold">
                      The most resilient architecture is one where every permitted connection has a justified business purpose, every security boundary is monitored, and Zero Trust principles continuously re-evaluate authorization.
                    </p>
                  </div>
                </article>
              )}

              {/* Bottom Pagination */}
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  disabled={selectedTopic <= 1}
                  onClick={() => setSelectedTopic((prev) => Math.max(1, prev - 1))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition-all"
                >
                  <ArrowLeft size={14} />
                  <span>Previous Section</span>
                </button>

                <span className="font-mono text-xs text-stone-500 font-bold">
                  {selectedTopic} of {topics.length}
                </span>

                <button
                  disabled={selectedTopic >= topics.length}
                  onClick={() => setSelectedTopic((prev) => Math.min(topics.length, prev + 1))}
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
        {/* TAB 2: SIMULATOR 1 - FIREWALL RULE EVALUATOR & PACKET TESTER      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "firewall-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Shield size={18} className="text-orange-600" />
                <h2 className="text-xl font-extrabold text-stone-900">
                  Multi-Tier Firewall Rule Evaluator &amp; Packet Tester
                </h2>
              </div>
              <p className="text-xs text-stone-600">
                Craft custom 5-tuple probe packets and test them against the sequential rulebase. Watch how top-to-bottom rule evaluation and default-deny policies determine the packet&apos;s fate.
              </p>
            </div>

            {/* Test Packet Crafter */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-3">
              <strong className="text-stone-900 font-bold block">1. Inject Test Packet (5-Tuple):</strong>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Source Zone:</label>
                  <select
                    value={testPacket.srcZone}
                    onChange={(e) => setTestPacket({ ...testPacket, srcZone: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                  >
                    <option value="Internet">Internet (Untrusted)</option>
                    <option value="Web">Web Tier (DMZ)</option>
                    <option value="App">App Tier (Internal)</option>
                    <option value="Management">Management (Bastion)</option>
                    <option value="Workstations">Corporate Workstations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Destination Zone:</label>
                  <select
                    value={testPacket.dstZone}
                    onChange={(e) => setTestPacket({ ...testPacket, dstZone: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                  >
                    <option value="Web">Web Tier (DMZ)</option>
                    <option value="App">App Tier (Internal)</option>
                    <option value="Database">Database Tier</option>
                    <option value="Management">Management Network</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Protocol:</label>
                  <select
                    value={testPacket.proto}
                    onChange={(e) => setTestPacket({ ...testPacket, proto: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                  >
                    <option value="TCP">TCP</option>
                    <option value="UDP">UDP</option>
                    <option value="ICMP">ICMP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Dest Port:</label>
                  <input
                    type="number"
                    value={testPacket.dstPort}
                    onChange={(e) => setTestPacket({ ...testPacket, dstPort: Number(e.target.value) })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">State:</label>
                  <select
                    value={testPacket.state}
                    onChange={(e) => setTestPacket({ ...testPacket, state: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                  >
                    <option value="NEW">NEW (Handshake request)</option>
                    <option value="ESTABLISHED">ESTABLISHED (Existing)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Evaluation Result */}
            <div className="p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Firewall Verdict:</span>
                <span
                  className={`text-xl font-black block mt-0.5 ${
                    packetEvaluation.action === "ALLOW" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {packetEvaluation.action}
                </span>
                <span className="text-stone-300 text-[11px] font-sans mt-1 block">
                  {packetEvaluation.reason}
                </span>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-stone-400 uppercase font-bold block">
                  Simulated iptables / nftables Rule
                </span>
                <code className="text-orange-400 text-[11px] block mt-0.5">
                  {packetEvaluation.matchedRule
                    ? `-A FORWARD -s ${packetEvaluation.matchedRule.src} -d ${packetEvaluation.matchedRule.dst} -p ${packetEvaluation.matchedRule.proto} --dport ${packetEvaluation.matchedRule.port} -j ${packetEvaluation.matchedRule.action}`
                    : "-P FORWARD DROP"}
                </code>
              </div>
            </div>

            {/* Rulebase Table */}
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-2 font-mono">
                Active Sequential Rulebase (Evaluated Top-to-Bottom):
              </h3>
              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-stone-100 font-mono text-[11px] text-stone-700">
                    <tr>
                      <th className="p-2.5 border-b border-stone-200">Rule #</th>
                      <th className="p-2.5 border-b border-stone-200">Source</th>
                      <th className="p-2.5 border-b border-stone-200">Destination</th>
                      <th className="p-2.5 border-b border-stone-200">Proto</th>
                      <th className="p-2.5 border-b border-stone-200">Port</th>
                      <th className="p-2.5 border-b border-stone-200">Action</th>
                      <th className="p-2.5 border-b border-stone-200">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-[11px]">
                    {firewallRules.map((r) => {
                      const isMatch = packetEvaluation.matchedRule?.id === r.id;
                      return (
                        <tr
                          key={r.id}
                          className={`${isMatch ? "bg-orange-50 font-bold" : "hover:bg-stone-50"}`}
                        >
                          <td className="p-2.5 font-mono text-orange-700">{r.id}</td>
                          <td className="p-2.5 font-mono">{r.src}</td>
                          <td className="p-2.5 font-mono">{r.dst}</td>
                          <td className="p-2.5 font-mono">{r.proto}</td>
                          <td className="p-2.5 font-mono">{r.port}</td>
                          <td className="p-2.5">
                            <span
                              className={`px-2 py-0.5 rounded font-mono font-bold uppercase text-[10px] ${
                                r.action === "ALLOW"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                  : "bg-red-100 text-red-800 border border-red-300"
                              }`}
                            >
                              {r.action}
                            </span>
                          </td>
                          <td className="p-2.5 text-stone-600">{r.desc}</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-stone-100/70 font-mono text-[10px] text-stone-500 italic">
                      <td className="p-2.5">DEFAULT</td>
                      <td className="p-2.5">ANY</td>
                      <td className="p-2.5">ANY</td>
                      <td className="p-2.5">ANY</td>
                      <td className="p-2.5">ANY</td>
                      <td className="p-2.5 text-red-700 font-bold">DENY</td>
                      <td className="p-2.5">Global Default-Deny Catch-All</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - IDS VS IPS DETECTION & PREVENTION            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "ids-ips" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Activity size={18} className="text-orange-600" />
                  <h2 className="text-xl font-extrabold text-stone-900">
                    IDS vs. IPS Detection &amp; Automated Prevention Sandbox
                  </h2>
                </div>
                <p className="text-xs text-stone-600">
                  Toggle between passive NIDS (Alert-Only) and active inline IPS (Packet Drop / TCP Reset) across live attack scenarios.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIdsMode("IDS")}
                  className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                    idsMode === "IDS"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-stone-200 text-stone-700"
                  }`}
                >
                  Passive IDS (SPAN / Tap)
                </button>
                <button
                  onClick={() => setIdsMode("IPS")}
                  className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                    idsMode === "IPS"
                      ? "bg-orange-600 text-white"
                      : "bg-white border border-stone-200 text-stone-700"
                  }`}
                >
                  Inline IPS (Active Prevention)
                </button>
              </div>
            </div>

            {/* Scenario Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.keys(attackScenarios).map((key) => {
                const sc = attackScenarios[key];
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedAttackScenario(key)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      selectedAttackScenario === key
                        ? "border-orange-500 bg-orange-50/70 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <span className="font-bold text-xs block text-stone-900 truncate">{sc.name}</span>
                    <span className="text-[10px] text-stone-500 font-mono block mt-0.5">{sc.proto}</span>
                  </button>
                );
              })}
            </div>

            {/* Scenario Detail View */}
            {(() => {
              const currentAtk = attackScenarios[selectedAttackScenario];
              return (
                <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-stone-400">Attack Profile:</span>
                      <h3 className="text-base font-extrabold text-stone-900">{currentAtk.name}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-stone-200 text-stone-800">
                      {currentAtk.detectionType}
                    </span>
                  </div>

                  <div>
                    <strong className="text-stone-900 font-mono text-[11px] block mb-1">
                      Snort / Suricata Signature Rule:
                    </strong>
                    <div className="p-3 rounded-xl bg-stone-900 text-emerald-400 font-mono text-[11px] overflow-x-auto">
                      <code>{currentAtk.signature}</code>
                    </div>
                  </div>

                  {/* Mode Difference Comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      className={`p-4 rounded-2xl border ${
                        idsMode === "IDS" ? "bg-blue-50 border-blue-300 ring-2 ring-blue-400" : "bg-white border-stone-200 opacity-60"
                      }`}
                    >
                      <strong className="text-blue-950 font-bold block mb-1">Passive IDS Reaction:</strong>
                      <p className="text-blue-900 text-[11px] leading-relaxed">{currentAtk.idsAction}</p>
                      <span className="text-[10px] text-blue-700 mt-2 block font-medium">
                        * Note: Traffic reaches target application; incident responder must investigate manually.
                      </span>
                    </div>

                    <div
                      className={`p-4 rounded-2xl border ${
                        idsMode === "IPS" ? "bg-orange-50 border-orange-300 ring-2 ring-orange-400" : "bg-white border-stone-200 opacity-60"
                      }`}
                    >
                      <strong className="text-orange-950 font-bold block mb-1">Inline IPS Reaction:</strong>
                      <p className="text-orange-900 text-[11px] leading-relaxed">{currentAtk.ipsAction}</p>
                      <span className="text-[10px] text-orange-700 mt-2 block font-medium">
                        * Note: Offending packet discarded inline; connection severed before application executes payload.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
                    <strong className="text-stone-900 block mb-0.5">Operational Impact on Legitimate Users:</strong>
                    <p className="text-stone-600 text-[11px]">{currentAtk.impactOnUsers}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - LAB 9A POLICY BUILDER & MATRIX                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "policy-builder" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileSpreadsheet size={18} className="text-orange-600" />
                <h2 className="text-xl font-extrabold text-stone-900">
                  Lab 9A: Network Security Policy Design Matrix
                </h2>
              </div>
              <p className="text-xs text-stone-600">
                Evaluate proposed inter-zone network communication paths. Select whether each connection should be Allowed, Denied, or Investigated per least-privilege standards.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: "q1", title: "1. Public Internet clients to Web Tier over HTTPS (TCP 443)", reason: correctLabPolicy.q1.note },
                { id: "q2", title: "2. Public Internet clients directly to Database Tier (TCP 3306)", reason: correctLabPolicy.q2.note },
                { id: "q3", title: "3. Web Tier to Application Tier on approved API port (TCP 8080)", reason: correctLabPolicy.q3.note },
                { id: "q4", title: "4. Application Tier to Database Tier on approved database port (TCP 3306)", reason: correctLabPolicy.q4.note },
                { id: "q5", title: "5. Ordinary User Workstations to Management Bastion Subnet (TCP 22)", reason: correctLabPolicy.q5.note },
                { id: "q6", title: "6. Dedicated Management Bastion to Server using approved SSH protocol", reason: correctLabPolicy.q6.note },
                { id: "q7", title: "7. Application Server to ANY destination on public Internet (Egress ANY)", reason: correctLabPolicy.q7.note },
              ].map((item) => {
                const decision = labDecisions[item.id];
                const isCorrect = decision === correctLabPolicy[item.id].correct;

                return (
                  <div key={item.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-stone-900 text-xs sm:text-sm">{item.title}</strong>
                      <div className="flex items-center gap-1.5">
                        {["ALLOW", "DENY", "INVESTIGATE"].map((choice) => (
                          <button
                            key={choice}
                            onClick={() =>
                              setLabDecisions((prev) => ({ ...prev, [item.id]: choice }))
                            }
                            className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all ${
                              decision === choice
                                ? choice === "ALLOW"
                                  ? "bg-emerald-600 text-white"
                                  : choice === "DENY"
                                  ? "bg-red-600 text-white"
                                  : "bg-amber-600 text-white"
                                : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                            }`}
                          >
                            {choice}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-stone-200 text-[11px] text-stone-600 flex items-start justify-between gap-2">
                      <span>
                        <strong className="text-stone-900">Architectural Rationale: </strong>
                        {item.reason}
                      </span>
                      <span
                        className={`font-mono text-[10px] font-bold uppercase shrink-0 px-2 py-0.5 rounded ${
                          isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {isCorrect ? "Aligned" : "Review"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - ZERO TRUST ARCHITECTURE VS CASTLE & MOAT      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "zero-trust" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Lock size={18} className="text-orange-600" />
                <h2 className="text-xl font-extrabold text-stone-900">
                  Zero Trust Architecture (ZTA) Policy Decision Engine
                </h2>
              </div>
              <p className="text-xs text-stone-600">
                Simulate NIST SP 800-207 Policy Decision Point (PDP) evaluation. Adjust user identity, device health posture, and target resource to watch dynamic access decisions.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <label className="block font-bold text-stone-800 mb-1">1. User Identity &amp; Role:</label>
                <select
                  value={ztUserRole}
                  onChange={(e) => setZtUserRole(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                >
                  <option value="developer">Internal Senior Developer</option>
                  <option value="admin">Site Reliability Engineer (Admin)</option>
                  <option value="contractor">Third-Party External Contractor</option>
                </select>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <label className="block font-bold text-stone-800 mb-1">2. Device Health &amp; Posture:</label>
                <select
                  value={ztDevicePosture}
                  onChange={(e) => setZtDevicePosture(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                >
                  <option value="healthy">Compliant (EDR Active, Disk Encrypted)</option>
                  <option value="unpatched">Unpatched (OS Update &gt; 14 Days Overdue)</option>
                  <option value="non_compliant">Non-Compliant (Jailbroken / Disabled EDR)</option>
                </select>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <label className="block font-bold text-stone-800 mb-1">3. Target Resource:</label>
                <select
                  value={ztTargetResource}
                  onChange={(e) => setZtTargetResource(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white p-2 font-mono text-xs font-bold"
                >
                  <option value="git_repo">Internal Git Code Repository</option>
                  <option value="prod_db">Production Customer Database</option>
                  <option value="billing">Executive Financial Billing Records</option>
                </select>
              </div>
            </div>

            {/* Decision Output */}
            <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-400">
                  NIST SP 800-207 Policy Decision Point (PDP) Verdict:
                </span>
                <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${ztEvaluation.badge}`}>
                  {ztEvaluation.decision}
                </span>
              </div>
              <p className="text-stone-300 text-xs leading-relaxed pt-1">
                {ztEvaluation.reason}
              </p>
            </div>
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
                  Module 9 Knowledge Assessment
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Test your mastery of firewalls, IDS/IPS, network segmentation, and Zero Trust Architecture
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
                  Assessment verified against NIST SP 800-41 Rev. 1 and NIST SP 800-207 standards.
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
          moduleName="Module 9: Network Security, Firewalls, IDS/IPS & Network Segmentation"
          currentTopic={topics.find((t) => t.id === selectedTopic)?.title || "Overview"}
          onClose={() => setShowAiTutor(false)}
        />
      )}
    </div>
  );
}
