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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 1                            */
/* Introduction to Cybersecurity and Ethical Hacking                          */
/* Informed by MIT, Stanford, CMU, UC Berkeley, Oxford, ETH Zurich, Cambridge */
/* -------------------------------------------------------------------------- */

export default function CybersecurityIntro() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'cia-analyzer' | 'risk-calculator' | 'kill-chain' | 'lab-terminal' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 1: CIA TRIAD & CONTROL IMPACT ANALYZER               */
  /* -------------------------------------------------------------------------- */
  const [selectedScenario, setSelectedScenario] = useState("unencrypted_db");
  const [activeControls, setActiveControls] = useState({
    encryptionAtRest: false,
    tlsTransit: false,
    mfaAuth: false,
    leastPrivilege: false,
    automatedBackups: false,
    auditLogging: false,
  });

  const scenarioDetails = {
    unencrypted_db: {
      name: "Public S3 Bucket with Customer Records",
      threat: "Malicious attacker scans internet for exposed Amazon S3 / GCP buckets.",
      vulnerability: "Bucket ACL set to Public Read; unencrypted database exports stored at root.",
      baseCIA: { c: 20, i: 70, a: 80 },
    },
    ransomware_attack: {
      name: "Ransomware Infiltration via Phishing",
      threat: "Cybercriminal group deploys double-extortion ransomware payload.",
      vulnerability: "Employee clicks malicious link; flat network lacks workstation-to-server segmentation.",
      baseCIA: { c: 40, i: 20, a: 15 },
    },
    api_bola: {
      name: "Broken Object Level Authorization (BOLA/IDOR)",
      threat: "Competitor or malicious user tampers with resource IDs in REST API requests.",
      vulnerability: "GET /api/v1/patient/8014 fails to verify ownership against current session JWT.",
      baseCIA: { c: 15, i: 30, a: 85 },
    },
    sql_injection: {
      name: "Classic SQL Injection on Payment Portal",
      threat: "Untrusted input concatenated into database query without parameterized statements.",
      vulnerability: "Vulnerable login query: ' OR '1'='1 permits authentication bypass and schema dump.",
      baseCIA: { c: 25, i: 20, a: 50 },
    },
  };

  const currentScenario = scenarioDetails[selectedScenario];

  const calculatedCIA = useMemo(() => {
    let c = currentScenario.baseCIA.c;
    let i = currentScenario.baseCIA.i;
    let a = currentScenario.baseCIA.a;

    if (activeControls.encryptionAtRest) {
      c = Math.min(100, c + 35);
      i = Math.min(100, i + 10);
    }
    if (activeControls.tlsTransit) {
      c = Math.min(100, c + 20);
      i = Math.min(100, i + 15);
    }
    if (activeControls.mfaAuth) {
      c = Math.min(100, c + 25);
      i = Math.min(100, i + 20);
      a = Math.min(100, a + 10);
    }
    if (activeControls.leastPrivilege) {
      c = Math.min(100, c + 20);
      i = Math.min(100, i + 25);
    }
    if (activeControls.automatedBackups) {
      a = Math.min(100, a + 45);
      i = Math.min(100, i + 15);
    }
    if (activeControls.auditLogging) {
      i = Math.min(100, i + 20);
      c = Math.min(100, c + 10);
    }

    const overallSecurityScore = Math.round((c + i + a) / 3);
    return { c, i, a, overall: overallSecurityScore };
  }, [selectedScenario, activeControls, currentScenario]);

  const toggleControl = (key) => {
    setActiveControls((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 2: RISK CALCULATOR (Likelihood × Impact)             */
  /* -------------------------------------------------------------------------- */
  const [likelihoodScore, setLikelihoodScore] = useState(4); // 1 to 5
  const [impactScore, setImpactScore] = useState(4); // 1 to 5
  const [assetValue, setAssetValue] = useState("Tier 1 - Critical (PII, Financials)");
  const [threatActorCapability, setThreatActorCapability] = useState("Organized Cybercrime Syndicate");

  const riskResult = useMemo(() => {
    const rawRisk = likelihoodScore * impactScore;
    let level = "Low";
    let color = "text-emerald-700 bg-emerald-50 border-emerald-300";
    let sla = "Remediate within 90 days";

    if (rawRisk >= 16) {
      level = "Critical / Urgent";
      color = "text-rose-700 bg-rose-50 border-rose-300";
      sla = "Immediate 24-hour mitigation required (P0)";
    } else if (rawRisk >= 10) {
      level = "High";
      color = "text-orange-700 bg-orange-50 border-orange-300";
      sla = "Remediate within 7 calendar days (P1)";
    } else if (rawRisk >= 5) {
      level = "Medium";
      color = "text-amber-700 bg-amber-50 border-amber-300";
      sla = "Remediate within 30 calendar days (P2)";
    }

    return { rawRisk, level, color, sla };
  }, [likelihoodScore, impactScore]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 3: CYBERATTACK LIFECYCLE (MITRE ATT&CK / KILL CHAIN)  */
  /* -------------------------------------------------------------------------- */
  const [currentKillChainStage, setCurrentKillChainStage] = useState(0);
  const [defensesEnabled, setDefensesEnabled] = useState({
    0: false, // Recon: OSINT reduction
    1: false, // Initial Access: MFA & Email filter
    2: false, // Execution: EDR & AppLocker
    3: false, // Privilege Escalation: Least privilege & PAM
    4: false, // Persistence: Autorun & Service monitoring
    5: false, // Lateral Movement: Network segmentation & Zero Trust
    6: false, // Exfiltration: DLP & Egress filtering
    7: false, // Impact: Immutable backups & IR runbooks
  });

  const killChainStages = [
    {
      stage: 0,
      phase: "1. Reconnaissance",
      tactic: "TA0043: Reconnaissance",
      attackerAction: "Passive DNS enumeration, Shodan internet scans, LinkedIn employee OSINT scraping.",
      defensiveControl: "Public exposure reduction, attack-surface management, synthetic honeypot monitoring.",
      blockedState: "Reconnaissance thwarted: external exposure minimized, reconnaissance telemetry alerted SOC.",
    },
    {
      stage: 1,
      phase: "2. Initial Access",
      tactic: "TA0001: Initial Access",
      attackerAction: "Spear-phishing email containing weaponized document or credential harvesting landing page.",
      defensiveControl: "FIDO2 WebAuthn MFA, DMARC/DKIM/SPF email filtering, browser isolation.",
      blockedState: "Initial access denied: MFA blocked credential abuse; attachment sandboxed and quarantined.",
    },
    {
      stage: 2,
      phase: "3. Execution",
      tactic: "TA0002: Execution",
      attackerAction: "PowerShell script invoked with -EncodedCommand to spawn memory-only reflective DLL loader.",
      defensiveControl: "Application Allowlisting (AppLocker/WDAC), Constrained Language Mode, EDR telemetry.",
      blockedState: "Execution blocked: EDR detected malicious script block invocation and killed parent process.",
    },
    {
      stage: 3,
      phase: "4. Privilege Escalation",
      tactic: "TA0004: Privilege Escalation",
      attackerAction: "Exploiting misconfigured SUID binary, sudo vulnerability, or Windows Token Impersonation.",
      defensiveControl: "Strict least privilege, automated kernel patching, privileged access management (PAM).",
      blockedState: "Privilege escalation stopped: restricted sudoers configuration and patched kernel prevented root.",
    },
    {
      stage: 4,
      phase: "5. Persistence",
      tactic: "TA0003: Persistence",
      attackerAction: "Creating malicious registry run key, cron job, systemd service, or scheduled task.",
      defensiveControl: "File Integrity Monitoring (FIM), immutable OS containers, startup registry auditing.",
      blockedState: "Persistence prevented: FIM alerted on unauthorized cron job creation; service automatically reverted.",
    },
    {
      stage: 5,
      phase: "6. Lateral Movement",
      tactic: "TA0008: Lateral Movement",
      attackerAction: "Pass-the-Hash over SMB (port 445), WinRM remote execution across workstation subnet.",
      defensiveControl: "Host-based microsegmentation, disabling SMBv1, Zero Trust client isolation.",
      blockedState: "Lateral movement contained: internal firewall dropped cross-workstation SMB connection.",
    },
    {
      stage: 6,
      phase: "7. Exfiltration",
      tactic: "TA0010: Exfiltration",
      attackerAction: "Compressing customer database dump into encrypted ZIP and tunneling over DNS or HTTPS port 443.",
      defensiveControl: "Data Loss Prevention (DLP), DNS inspection for high-entropy queries, egress filtering.",
      blockedState: "Exfiltration blocked: egress firewall flagged anomalously large DNS TXT query volume.",
    },
    {
      stage: 7,
      phase: "8. Impact",
      tactic: "TA0040: Impact",
      attackerAction: "Encrypting production hypervisors with ransomware and deleting online VSS shadow copies.",
      defensiveControl: "Air-gapped immutable backups, automated incident response runbooks, zero-loss recovery.",
      blockedState: "Impact neutralized: immutable snapshot restored within 45 minutes; business resumed normally.",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 4: VIRTUAL LAB TOOL TERMINAL                         */
  /* -------------------------------------------------------------------------- */
  const [selectedLabCommand, setSelectedLabCommand] = useState("nmap");
  const [labConsoleOutput, setLabConsoleOutput] = useState("");
  const [isExecutingLab, setIsExecutingLab] = useState(false);

  const labCommandPresets = {
    nmap: {
      label: "Nmap: Authorized Port & Service Scan",
      cmd: "nmap -sV -sC -p 22,80,443,3000,8080 192.168.56.101",
      output: `Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-10-15 14:15 IST
Nmap scan report for target-app.lab.local (192.168.56.101)
Host is up (0.00042s latency).

PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 71:8a:b2:01:4d:55:e3:1b:2a:44:88:99:aa:bb:cc:dd (ED25519)
80/tcp   open  http    nginx 1.18.0 (Ubuntu)
|_http-server-header: nginx/1.18.0 (Ubuntu)
|_http-title: 301 Moved Permanently -> https://target-app.lab.local/
443/tcp  open  ssl/http nginx 1.18.0 (Ubuntu)
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: commonName=target-app.lab.local
| Issuer: commonName=Lab-Testing-Root-CA
3000/tcp open  http    Node.js Express framework (OWASP Juice Shop v15.0)
|_http-title: OWASP Juice Shop
8080/tcp open  http    Apache Tomcat 9.0.58

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 4.31 seconds`,
    },
    wireshark: {
      label: "Wireshark / TShark: Packet Sniffing on Isolated VNet",
      cmd: "tshark -i vboxnet0 -c 4 -n -Y 'http or dns'",
      output: `Capturing on 'vboxnet0'
    1 0.000000000 192.168.56.100 -> 192.168.56.1   DNS 78 Standard query 0x14a2 A target-app.lab.local
    2 0.000310214 192.168.56.1   -> 192.168.56.100 DNS 94 Standard query response 0x14a2 A 192.168.56.101
    3 0.001248102 192.168.56.100 -> 192.168.56.101 HTTP 184 GET /rest/products/search?q=apple HTTP/1.1
    4 0.004192003 192.168.56.101 -> 192.168.56.100 HTTP 512 HTTP/1.1 200 OK  (application/json)
4 packets captured`,
    },
    zap: {
      label: "OWASP ZAP: Passive Application Vulnerability Baseline",
      cmd: "zap-cli --zap-url http://127.0.0.1:8080 quick-scan -s xss,sqli http://192.168.56.101:3000",
      output: `[INFO] Initializing ZAP passive scanner session...
[INFO] Crawled 14 endpoints on target: http://192.168.56.101:3000
[WARN] Missing Anti-clickjacking Header (X-Frame-Options) [Risk: Medium, Confidence: Medium]
[WARN] Cookie Without Secure Flag (connect.sid) [Risk: Low, Confidence: High]
[INFO] Strict-Transport-Security (HSTS) Header Not Set [Risk: Low, Confidence: High]
[ALERT] Potential DOM-Based Cross-Site Scripting (search?q=) [Risk: High, Confidence: Medium]
[SUMMARY] 1 High, 1 Medium, 2 Low findings identified across 14 endpoints.`,
    },
    snapshot: {
      label: "VBoxManage: Lab Isolation & Snapshot Verification",
      cmd: "VBoxManage snapshot 'Kali-Security-Lab' list && VBoxManage showvminfo 'Target-JuiceShop' | grep -i 'nic 1'",
      output: `=== Active Snapshots for 'Kali-Security-Lab' ===
   Name: Baseline_Clean_State (UUID: e8d4f012-3341-4511-b844-9912aa44dd11) *-- current state!
   
=== Target Isolation State ===
NIC 1:           MAC: 080027112233, Attachment: Host-only Interface 'vboxnet0', Cable connected: on
NIC 2:           disabled
NIC 3:           disabled
[SECURITY CHECK]: Machine has NO direct WAN/Internet routing adapter. Isolation verified!`,
    },
  };

  const runLabCommand = (key) => {
    setIsExecutingLab(true);
    setSelectedLabCommand(key);
    setLabConsoleOutput(`$ ${labCommandPresets[key].cmd}\n[Executing in isolated sandbox...]`);
    setTimeout(() => {
      setLabConsoleOutput(`$ ${labCommandPresets[key].cmd}\n\n${labCommandPresets[key].output}`);
      setIsExecutingLab(false);
    }, 500);
  };

  /* -------------------------------------------------------------------------- */
  /* PRACTICAL LAB CHECKLIST STATE                                              */
  /* -------------------------------------------------------------------------- */
  const [labTasks, setLabTasks] = useState({
    task1: false, // Document the lab architecture and authorization boundaries
    task2: false, // Identify the training application's assets and entry points
    task3: false, // Observe normal HTTP requests and responses
    task4: false, // Identify one simulated security weakness using learning guidance
    task5: false, // Explain its potential confidentiality, integrity, or availability impact
    task6: false, // Recommend a fix and define a safe retest
    task7: false, // Write a concise assessment report with evidence and limitations
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
  /* KNOWLEDGE ASSESSMENT QUIZ (5 SCENARIO QUESTIONS)                           */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which security principle prevents unauthorized disclosure of information?",
      options: ["Availability", "Confidentiality", "Integrity", "Non-repudiation"],
      correct: 1,
      explanation:
        "Confidentiality ensures that sensitive information is accessible only to authorized entities and protected from unauthorized disclosure (e.g. through strong encryption and access controls).",
    },
    {
      id: 2,
      question: "What must be obtained before testing a third-party system?",
      options: [
        "A public IP address",
        "A vulnerability scanner",
        "Explicit authorization and a defined scope",
        "An administrator password",
      ],
      correct: 2,
      explanation:
        "Explicit, documented authorization with a mutually agreed scope and rules of engagement is mandatory. Testing third-party systems without permission is unauthorized and illegal under laws such as the Indian IT Act 2000.",
    },
    {
      id: 3,
      question: "Which statement best describes a vulnerability?",
      options: [
        "A weakness that could be exploited",
        "A guaranteed successful attack",
        "A security policy",
        "A backup copy",
      ],
      correct: 0,
      explanation:
        "A vulnerability is a defect, flaw, or weakness in system design, implementation, or operation that could potentially be exploited by a threat actor to compromise security.",
    },
    {
      id: 4,
      question: "Which tool is primarily used to inspect network packets?",
      options: ["Wireshark", "A word processor", "A spreadsheet", "A password manager"],
      correct: 0,
      explanation:
        "Wireshark is the world's standard packet analyzer used by security engineers to inspect protocol headers, reconstruct TCP streams, and troubleshoot network conversations.",
    },
    {
      id: 5,
      question: "What is the primary purpose of a penetration-testing report?",
      options: [
        "Publish sensitive data",
        "Prove every possible attack is impossible",
        "Document validated findings, impact, and remediation",
        "Replace incident response",
      ],
      correct: 2,
      explanation:
        "A professional penetration test report provides stakeholders with validated evidence, severity ratings, plausible business impacts, and actionable remediation steps to fix discovered weaknesses.",
    },
  ];

  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const handleSelectQuizAnswer = (qId, optionIdx) => {
    if (submittedQuiz) return;
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedQuizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedQuizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* TOPICS NAVIGATION DEFINITIONS                                              */
  /* -------------------------------------------------------------------------- */
  const topics = [
    { id: 1, title: "1.1 Foundations of Cybersecurity", badge: "Core Principles" },
    { id: 2, title: "1.2 Introduction to Ethical Hacking", badge: "Methodology" },
    { id: 3, title: "1.3 Core Security Principles", badge: "CIA Triad & Architecture" },
    { id: 4, title: "1.4 Threat Actors and Cyber Threats", badge: "Threat Landscape" },
    { id: 5, title: "1.5 Attack Surfaces, Vulnerabilities & Risk", badge: "Risk Engineering" },
    { id: 6, title: "1.6 Cyberattack Lifecycle & Defense", badge: "MITRE ATT&CK" },
    { id: 7, title: "1.7 Cybersecurity Law, Ethics & Disclosure", badge: "Legal & Ethics" },
    { id: 8, title: "1.8 Cybersecurity Tools & Lab Setup", badge: "Safe Sandboxing" },
    { id: 9, title: "1.9 Security Assessment Methodology", badge: "Reporting Standards" },
    { id: 10, title: "1.10 Practical Lab & Assessment", badge: "Capstone & Quiz" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Header & Navigation */}
      <div className="border-b border-[#eae6de] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ModuleNav
            track="cybersecurity"
            currentModuleId="intro"
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
                  Module 1 · Beginner to Advanced Foundations
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  12 Learning Objectives
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Introduction to Cybersecurity and Ethical Hacking
              </h1>
              <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
                Establish the technical, legal, and analytical foundations required to defend modern digital infrastructure. Master threat modeling, the CIA triad, vulnerability discovery, ethical penetration testing, and isolated laboratory experimentation.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-stone-500 italic">
                <span>Informed by university research & curricula from MIT, Stanford, CMU, UC Berkeley, Oxford, Cambridge, ETH Zurich, Georgia Tech, and NUS.</span>
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
                onClick={() => setActiveTab("cia-analyzer")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "cia-analyzer"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-orange-500" />
                CIA Triad Simulator
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("risk-calculator")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "risk-calculator"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Gauge className="w-3.5 h-3.5 text-amber-500" />
                Risk Calculator
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("kill-chain")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "kill-chain"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Workflow className="w-3.5 h-3.5 text-red-500" />
                MITRE Attack Simulator
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("lab-terminal")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "lab-terminal"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-stone-800" />
                Virtual Lab Terminal
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
                Module Learning Objectives
              </h2>
              <p className="mt-1 text-xs text-orange-800">
                By completing this module, you will master the analytical frameworks and practical tools required to:
              </p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Explain cybersecurity principles, objectives, and industry terminology.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Differentiate ethical hacking, penetration testing, and vulnerability assessment.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Apply confidentiality, integrity, and availability (CIA) to real-world systems.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Identify common threat actors, attack surfaces, vulnerabilities, and vectors.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Trace the cyberattack lifecycle (Kill Chain / ATT&CK) and defensive controls.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Navigate authorization, scope, rules of engagement, and Indian IT Act 2000 law.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Build an isolated, host-only laboratory with snapshot recovery for safe testing.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Produce a structured, professional vulnerability assessment deliverable.</span>
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
                    Module 1 Syllabus
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
                      onClick={() => setActiveTab("cia-analyzer")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>CIA Triad Analyzer</span>
                      <Shield className="w-3 h-3 text-orange-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("risk-calculator")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>Risk = L × I Calculator</span>
                      <Gauge className="w-3 h-3 text-amber-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("kill-chain")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>MITRE ATT&CK Stepper</span>
                      <Workflow className="w-3 h-3 text-red-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("lab-terminal")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>Sandbox Lab Console</span>
                      <Terminal className="w-3 h-3 text-stone-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="lg:col-span-3 space-y-8">
              {/* TOPIC 1.1 */}
              {(selectedTopic === 1 || !selectedTopic || selectedTopic === 0) && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.1
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Foundations of Cybersecurity
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Definition, objectives, evolution, terminology, security domains, and modern digital infrastructure.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">What is cybersecurity?</h3>
                    <p>
                      Cybersecurity is the discipline of protecting computers, applications, networks, cloud infrastructure, identities, and information against unauthorized access, disruption, modification, and destruction. It integrates technology, robust processes, human behavior, risk management, and regulatory governance.
                    </p>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                      <strong>Production Example:</strong> Consider an enterprise operating an online shopping platform. Its security responsibilities include protecting customer credit cards and personal information, preventing fraudulent transactions, maintaining continuous website availability, enforcing least privilege for internal employees, and executing verified disaster recovery if an outage or intrusion occurs. Cybersecurity is therefore not limited to installing antivirus software—it is an end-to-end, continuous engineering process.
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Major Cybersecurity Domains</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Domain</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Primary Responsibility</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Standard Tools & Protocols</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">Network Security</td>
                            <td className="px-3.5 py-2">Protect network traffic, boundaries, and routing infrastructure</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">Wireshark, Suricata, WireGuard, VLANs</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">Application Security</td>
                            <td className="px-3.5 py-2">Prevent software vulnerabilities, insecure design, and code injection</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">OWASP Top 10, SAST/DAST, ZAP, Burp Suite</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">Cloud Security</td>
                            <td className="px-3.5 py-2">Secure IAM roles, cloud storage buckets, serverless, and VPC boundaries</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">AWS GuardDuty, CloudTrail, Terraform, CSPM</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">Endpoint Security</td>
                            <td className="px-3.5 py-2">Harden laptops, developer workstations, servers, and mobile devices</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">EDR, CrowdStrike, OSquery, BitLocker</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">IAM (Identity & Access)</td>
                            <td className="px-3.5 py-2">Verify identities, enforce least privilege, and manage MFA life cycles</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">FIDO2 WebAuthn, OAuth 2.0, OIDC, Okta</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">Security Operations (SOC)</td>
                            <td className="px-3.5 py-2">Monitor SIEM telemetry, investigate alerts, and execute incident response</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">Splunk, Elastic SIEM, Zeek, Velociraptor</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">Digital Forensics</td>
                            <td className="px-3.5 py-2">Preserve, extract, and analyze evidentiary disk/memory artifacts</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">Volatility, Autopsy, dd, FTK Imager</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-semibold text-stone-900">GRC (Governance & Risk)</td>
                            <td className="px-3.5 py-2">Enforce security policies, audit compliance, and satisfy regulations</td>
                            <td className="px-3.5 py-2 font-mono text-[11px]">ISO 27001, SOC 2, NIST CSF, DPDP Act 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Essential Cybersecurity Terminology</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Asset:</strong> Something valuable that requires protection (e.g. database, credentials, customer PII, compute nodes).
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Threat:</strong> A potential cause of harm or compromise (e.g. ransomware group, insider, DDoS botnet).
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Vulnerability:</strong> A flaw or weakness in software or design that could be exploited (e.g. unauthenticated API).
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Exploit:</strong> A concrete mechanism, script, or payload that takes advantage of a vulnerability to cause impact.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Attack Vector:</strong> The path or channel through which an adversary reaches an asset (e.g. phishing email, open port).
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Security Control:</strong> A safeguard (preventive, detective, corrective) that reduces risk (e.g. MFA, firewalls, backups).
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.2 */}
              {selectedTopic === 2 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.2
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Introduction to Ethical Hacking
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Ethical hacking principles, classifications, authorized testing boundaries, and the penetration-testing lifecycle.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      <strong>Ethical hacking</strong> is the authorized, systematic examination of applications, networks, and infrastructure to discover and validate security weaknesses so their owners can remediate them before malicious adversaries strike.
                    </p>
                    <p>
                      The ethical hacker operates under strict rules of engagement, agreed testing windows, and explicit written consent. The goal is always to improve defensive posture, never to cause disruption or steal data.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Hacker Classifications</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Classification</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Motivation & Authorization</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Legal Standing</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-emerald-800">White Hat</td>
                            <td className="px-3.5 py-2">Works with explicit authorization to improve defenses and fix flaws</td>
                            <td className="px-3.5 py-2 font-semibold text-emerald-700">Fully Legal & Contracted</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-rose-800">Black Hat</td>
                            <td className="px-3.5 py-2">Uses unauthorized access for financial extortion, espionage, or destruction</td>
                            <td className="px-3.5 py-2 font-semibold text-rose-700">Illegal (Criminal Offense)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-amber-800">Grey Hat</td>
                            <td className="px-3.5 py-2">Discovers weaknesses without prior authorization, later requesting bounties</td>
                            <td className="px-3.5 py-2 font-semibold text-amber-700">Legally Ambiguous / High Risk</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Security Researcher</td>
                            <td className="px-3.5 py-2">Discovers new attack techniques and reports via coordinated disclosure</td>
                            <td className="px-3.5 py-2 font-semibold text-stone-700">Legal within program scope</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-purple-800">Insider Threat</td>
                            <td className="px-3.5 py-2">Employee or contractor with legitimate credentials abusing trust or making errors</td>
                            <td className="px-3.5 py-2 font-semibold text-purple-700">Breach of contract / Law violation</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Ethical Hacking vs. Penetration Testing vs. Vulnerability Assessment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Vulnerability Assessment</strong>
                        Automated and manual discovery to inventory, classify, and prioritize known flaws without executing intrusive exploits.
                      </div>
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Penetration Testing</strong>
                        A scoped, time-bound engagement attempting to safely exploit vulnerabilities to prove real-world business impact and lateral movement.
                      </div>
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Red Teaming</strong>
                        Adversary emulation testing an organization's overall detection and response capabilities (Blue Team) with minimal prior alert.
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">The 6-Stage Penetration Testing Lifecycle</h3>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/80 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono font-bold flex items-center justify-center shrink-0">01</span>
                        <div>
                          <strong className="text-stone-900">Planning and Authorization:</strong> Sign formal rules of engagement (RoE), non-disclosure agreement (NDA), liability waiver, testing schedule, and approved IP address lists.
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/80 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono font-bold flex items-center justify-center shrink-0">02</span>
                        <div>
                          <strong className="text-stone-900">Reconnaissance:</strong> Gather OSINT, discover subdomains, ASN blocks, public code repositories, and DNS records without interacting aggressively.
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/80 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono font-bold flex items-center justify-center shrink-0">03</span>
                        <div>
                          <strong className="text-stone-900">Discovery and Analysis:</strong> Perform port scans, banner grabs, and directory enumerations to pinpoint software versions and potential vulnerabilities.
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/80 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono font-bold flex items-center justify-center shrink-0">04</span>
                        <div>
                          <strong className="text-stone-900">Controlled Validation:</strong> Safely verify suspected flaws using minimally invasive proof-of-concept tests without disrupting production traffic.
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/80 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono font-bold flex items-center justify-center shrink-0">05</span>
                        <div>
                          <strong className="text-stone-900">Impact Assessment:</strong> Determine plausible business risks (data breach, financial loss, regulatory penalties) while respecting the authorized boundary.
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/80 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono font-bold flex items-center justify-center shrink-0">06</span>
                        <div>
                          <strong className="text-stone-900">Reporting and Remediation:</strong> Deliver structured documentation detailing reproduction steps, CVSS scores, remediation code fixes, and perform retests after patches.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.3 */}
              {selectedTopic === 3 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.3
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Core Security Principles & The CIA Triad
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Confidentiality, Integrity, Availability, least privilege, defense in depth, zero trust, and authorization boundaries.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      Every security control, architectural decision, and vulnerability finding maps back to three fundamental guarantees known as the <strong>CIA Triad</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60">
                        <div className="flex items-center gap-2 text-orange-800 font-bold text-sm mb-1">
                          <Eye className="w-4 h-4" />
                          Confidentiality
                        </div>
                        <p className="text-xs text-stone-700">
                          Ensures that information is accessible only to authorized entities and kept concealed from unauthorized observers.
                        </p>
                        <div className="mt-2 pt-2 border-t border-orange-200/60 text-[11px] text-orange-950 font-medium">
                          <strong>Controls:</strong> AES-256 encryption at rest, TLS 1.3 in transit, role-based access control, masking.
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60">
                        <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
                          <ShieldCheck className="w-4 h-4" />
                          Integrity
                        </div>
                        <p className="text-xs text-stone-700">
                          Guarantees that data and systems remain accurate, complete, and protected against unauthorized modification or tampering.
                        </p>
                        <div className="mt-2 pt-2 border-t border-amber-200/60 text-[11px] text-amber-950 font-medium">
                          <strong>Controls:</strong> Cryptographic SHA-256 hashes, digital signatures, HMAC, immutable audit logs.
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60">
                        <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                          <Activity className="w-4 h-4" />
                          Availability
                        </div>
                        <p className="text-xs text-stone-700">
                          Ensures that authorized users have timely, reliable, uninterrupted access to systems, applications, and critical data.
                        </p>
                        <div className="mt-2 pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-950 font-medium">
                          <strong>Controls:</strong> Multi-region replication, load balancers, DDoS scrubbers, tested offline backups.
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Essential Architectural Security Principles</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Authentication (AuthN):</strong> Verifies who or what is requesting access (e.g. passwords, hardware security keys, X.509 certificates).
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Authorization (AuthZ):</strong> Evaluates which specific actions an authenticated identity is permitted to perform (e.g. RBAC, ABAC).
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Least Privilege:</strong> Grants only the minimum necessary permissions required for a role or service to execute its designated function.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Defense in Depth:</strong> Layers independent security controls so that the failure of any single barrier does not expose the target asset.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Separation of Duties:</strong> Divides critical operations across multiple entities to prevent unilateral fraud or accidental sabotage.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Zero Trust Architecture:</strong> "Never trust, always verify." Every request is explicitly authenticated, authorized, and encrypted regardless of network origin.
                      </div>
                    </div>

                    {/* Knowledge Check Card */}
                    <div className="p-4 rounded-xl border border-stone-300 bg-stone-100/70 text-xs">
                      <div className="flex items-center gap-2 font-bold text-stone-900 mb-1">
                        <HelpCircle className="w-4 h-4 text-orange-600" />
                        Knowledge Check: Evaluating Security Assumptions
                      </div>
                      <p className="text-stone-700">
                        <strong>Scenario:</strong> A company encrypts its customer database at rest using AES-256, but stores the decryption key in a world-readable file on the same server, allowing all 250 internal employees to read it. Which security principle remains actively compromised?
                      </p>
                      <p className="mt-2 text-stone-800 bg-white p-2.5 rounded-lg border border-stone-200">
                        <strong>Answer:</strong> <strong>Confidentiality</strong> remains at severe risk. Encryption provides zero protection if unauthorized users can trivially obtain the decryption key. Strong cryptography requires equally strong key management (KMS/HSM) and strict authorization controls.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.4 */}
              {selectedTopic === 4 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.4
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Threat Actors and Cyber Threats
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Cybercriminals, nation-states, insiders, common attack categories, malware, ransomware, and attack vs vulnerability.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      Security engineering requires understanding the adversaries who seek to breach systems, their capabilities, and their motivations.
                    </p>

                    <h3 className="text-base font-bold text-stone-900">Common Threat Actor Profiles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Cybercriminal Syndicates:</strong> Motivated by direct financial gain. Specialize in ransomware, business email compromise (BEC), banking trojans, and credential extortion.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Nation-State Actors (APTs):</strong> Highly funded government intelligence units conducting long-term cyber espionage, IP theft, or critical infrastructure sabotage.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Hacktivists:</strong> Politically or ideologically motivated actors utilizing website defacements, DDoS disruption, and public data leaks to draw attention to causes.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Malicious or Careless Insiders:</strong> Disgruntled employees selling access, or well-intentioned staff accidentally exposing sensitive S3 buckets or falling for scams.
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Primary Threat Categories & Mitigations</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Threat</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">How It Works</th>
                            <th className="px-3.5 py-2.5 border-b border-stone-200">Defensive Countermeasure</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Phishing</td>
                            <td className="px-3.5 py-2">Deceptive emails or SMS trick users into sharing credentials or running malicious code</td>
                            <td className="px-3.5 py-2">FIDO2/WebAuthn phishing-resistant MFA, DMARC/SPF, employee training</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Malware</td>
                            <td className="px-3.5 py-2">Malicious binaries (trojans, worms, keyloggers) executed on host operating systems</td>
                            <td className="px-3.5 py-2">Endpoint Detection and Response (EDR), application allowlisting, OS patching</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Ransomware</td>
                            <td className="px-3.5 py-2">Adversaries encrypt enterprise servers and threaten data leaks unless ransom is paid</td>
                            <td className="px-3.5 py-2">Immutable offline backups, network microsegmentation, incident response plans</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Credential Attacks</td>
                            <td className="px-3.5 py-2">Credential stuffing, password spraying, and brute force against exposed login portals</td>
                            <td className="px-3.5 py-2">Mandatory MFA, IP rate limiting, breached-password checks (HaveIBeenPwned)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Denial of Service</td>
                            <td className="px-3.5 py-2">Flooding bandwidth or application resources to render services unavailable</td>
                            <td className="px-3.5 py-2">Anycast BGP scrubbing, Cloudflare DDoS shielding, adaptive rate limits</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Social Engineering</td>
                            <td className="px-3.5 py-2">Manipulating humans into bypassing established authorization verification flows</td>
                            <td className="px-3.5 py-2">Multi-person sign-off for wire transfers, out-of-band verification callbacks</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Web App Attacks</td>
                            <td className="px-3.5 py-2">Exploiting software flaws (SQLi, XSS, CSRF, SSRF, BOLA) in web services and APIs</td>
                            <td className="px-3.5 py-2">Parameterized queries, content security policy (CSP), input validation, WAF</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950">
                      <strong>Crucial Distinction — Attack vs. Vulnerability:</strong> A <em>vulnerability</em> is an underlying latent weakness in code or configuration (e.g. an API endpoint lacking authorization). An <em>attack</em> is the active event where a threat actor identifies that weakness and delivers an exploit payload to compromise the system.
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.5 */}
              {selectedTopic === 5 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.5
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Attack Surfaces, Vulnerabilities, and Risk
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Understanding attack surfaces, the foundational Risk equation, worked examples, and vulnerability lifecycles.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">What is an Attack Surface?</h3>
                    <p>
                      An <strong>attack surface</strong> is the total sum of all entry points, network interfaces, code paths, services, and human channels where an unauthorized user could attempt to enter or extract data from a system.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-2">
                      <li>Public-facing web applications, microservices, and GraphQL/REST APIs.</li>
                      <li>Internet-accessible open ports (SSH on 22, RDP on 3389, databases on 5432).</li>
                      <li>Employee credentials, identity providers, and remote VPN endpoints.</li>
                      <li>Cloud storage buckets (AWS S3, Google Cloud Storage, Azure Blobs).</li>
                      <li>Third-party open-source software libraries and NPM/PyPI dependencies.</li>
                    </ul>

                    <h3 className="text-base font-bold text-stone-900 pt-2">The Foundational Risk Model</h3>
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-center text-sm md:text-base border border-stone-800">
                      Risk ≈ Likelihood × Impact
                    </div>
                    <p className="text-xs text-stone-600">
                      Risk is not merely the technical severity of a software bug. It is a product of how easily an attacker can reach and exploit the bug (<strong>Likelihood</strong>) and the real-world operational, financial, and reputational damage caused (<strong>Impact</strong>).
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Worked Enterprise Example: Exposed Customer Database</h3>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-semibold">
                        <div className="text-stone-600">Likelihood: <span className="text-rose-600 font-bold">High (5/5)</span></div>
                        <div className="text-stone-600">Impact: <span className="text-rose-600 font-bold">High (5/5)</span></div>
                        <div className="text-stone-600">Priority: <span className="text-rose-700 font-extrabold uppercase">Urgent (P0)</span></div>
                        <div className="text-stone-600">Asset: <span className="text-stone-900">PostgreSQL (1M PII)</span></div>
                      </div>
                      <p className="text-stone-700 pt-2 border-t border-stone-200">
                        <strong>Recommended Emergency Remediation:</strong>
                      </p>
                      <ol className="list-decimal list-inside space-y-1 text-stone-700 pl-1">
                        <li>Immediately adjust security group firewall to deny public 0.0.0.0/0 access.</li>
                        <li>Rotate all database master credentials and application connection strings.</li>
                        <li>Ingest access logs into SIEM to analyze whether unauthorized IP addresses dumped records.</li>
                        <li>Verify that database storage volume is encrypted with customer-managed KMS key.</li>
                        <li>Schedule independent retest to confirm finding is resolved.</li>
                      </ol>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">The 7-Step Vulnerability Management Lifecycle</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-white">1. <strong>Discover Assets:</strong> Maintain real-time inventory of all IP addresses, hosts, and cloud resources.</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-white">2. <strong>Identify Weaknesses:</strong> Scan code and infrastructure for known CVEs and misconfigurations.</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-white">3. <strong>Validate Findings:</strong> Confirm whether discovered flaws are exploitable in the target context.</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-white">4. <strong>Prioritize Risk:</strong> Rank by CVSS score, exploit availability, and asset business criticality.</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-white">5. <strong>Remediate:</strong> Apply software patches, harden configurations, or deploy WAF virtual patches.</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-white">6. <strong>Retest & Verify:</strong> Re-run scans and manual validation to ensure the fix is effective.</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-white sm:col-span-2">7. <strong>Document Residual Risk:</strong> Track any accepted risk in enterprise risk registers with executive approval.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.6 */}
              {selectedTopic === 6 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.6
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Cyberattack Lifecycle and Defensive Strategy
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      MITRE ATT&CK, Cyber Kill Chain, mapping adversary tactics to defensive controls, and incident triage.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      Modern cyber defense is built on structured models of adversary behavior. The two most widely recognized standards are Lockheed Martin's <strong>Cyber Kill Chain</strong> and the <strong>MITRE ATT&CK</strong> (Adversarial Tactics, Techniques, and Common Knowledge) framework.
                    </p>

                    <h3 className="text-base font-bold text-stone-900">Mapping Attack Activities to Defensive Controls</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3 py-2 border-b border-stone-200">Attack Stage</th>
                            <th className="px-3 py-2 border-b border-stone-200">Adversary Activity</th>
                            <th className="px-3 py-2 border-b border-stone-200">Defensive Architecture Countermeasure</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Reconnaissance</td>
                            <td className="px-3 py-2">Harvesting email addresses, DNS records, public cloud assets</td>
                            <td className="px-3 py-2">External attack surface management (EASM), dark web leak monitoring</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Initial Access</td>
                            <td className="px-3 py-2">Phishing emails, VPN credential stuffing, exploiting public web servers</td>
                            <td className="px-3 py-2">Phishing-resistant MFA (FIDO2), WAF, continuous vulnerability patching</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Execution</td>
                            <td className="px-3 py-2">Running malicious PowerShell, bash commands, or trojan binaries</td>
                            <td className="px-3 py-2">Endpoint Detection and Response (EDR), application allowlisting</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Privilege Escalation</td>
                            <td className="px-3 py-2">Exploiting OS kernel bugs, misconfigured sudo permissions, token abuse</td>
                            <td className="px-3 py-2">Least privilege enforcement, kernel hardening, PAM session recording</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Persistence</td>
                            <td className="px-3 py-2">Creating rogue scheduled tasks, systemd units, or admin accounts</td>
                            <td className="px-3 py-2">File Integrity Monitoring (FIM), immutable containers, audit logging</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Lateral Movement</td>
                            <td className="px-3 py-2">RDP/SSH pivoting, Pass-the-Hash over SMB, accessing internal shares</td>
                            <td className="px-3 py-2">Network microsegmentation, Zero Trust network access, 802.1Q VLAN isolation</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Exfiltration</td>
                            <td className="px-3 py-2">Tunneling customer data over DNS, HTTPS POST, or cloud storage</td>
                            <td className="px-3 py-2">Egress filtering, Data Loss Prevention (DLP), anomalous transfer alerts</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3 py-2 font-bold text-stone-900">Impact</td>
                            <td className="px-3 py-2">Encrypting files for ransom, wiping master boot records, service outage</td>
                            <td className="px-3 py-2">Immutable air-gapped backups, automated disaster recovery runbooks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs space-y-2">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        Defensive Thinking Exercise: Suspicious Authentication & Query Spike
                      </div>
                      <p className="text-stone-700">
                        <strong>Alert Telemetry:</strong> At 02:14 AM IST, a senior engineer's account logged in from an unfamiliar IP address in an unrecognized country. Within 4 minutes, the session issued 8,000 sequential SQL queries against the production payroll database.
                      </p>
                      <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-1 text-stone-800">
                        <p><strong>Security Operations Investigation Checklist:</strong></p>
                        <p>1. Was the session authenticated via hardware MFA or single-factor legacy password?</p>
                        <p>2. Did the employee notify IT of international travel, or does geolocation telemetry suggest impossible travel speed?</p>
                        <p>3. Did the account have legitimate business justification to query bulk payroll data?</p>
                        <p>4. <em>Immediate Action:</em> Revoke active session tokens, force password reset, isolate workstation, and preserve IP connection logs for forensic review.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.7 */}
              {selectedTopic === 7 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.7
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Cybersecurity Law, Ethics, and Responsible Disclosure
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Rules of engagement, authorization boundaries, responsible disclosure policies, and Indian IT Act 2000 legal context.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 font-medium">
                      <strong>Critical Warning on Legal Authorization:</strong> Technical skill without explicit written authorization is illegal. Never scan, probe, or attempt to exploit third-party servers, websites, or networks without documented permission from the verified owner. Public availability does NOT equal permission to test.
                    </div>

                    <h3 className="text-base font-bold text-stone-900">Core Professional Rules of Engagement (RoE)</h3>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700 pl-1">
                      <li><strong>Obtain Written Consent:</strong> Execute signed Statements of Work (SoW) defining target scopes, excluded systems, and authorized testers.</li>
                      <li><strong>Define Strict Boundaries:</strong> Clearly differentiate in-scope domains from third-party shared infrastructure (e.g. payment gateways, cloud hosting providers).</li>
                      <li><strong>Protect Confidentiality:</strong> If sensitive customer PII or financial data is accidentally viewed during testing, stop testing immediately, document the incident, and alert the asset owner.</li>
                      <li><strong>Preserve Evidence:</strong> Store vulnerability verification steps, timestamps, and request logs securely in encrypted containers.</li>
                      <li><strong>Responsible Coordinated Disclosure:</strong> Provide vendors an agreed remediation window (typically 90 days) before publicly disclosing vulnerabilities.</li>
                      <li><strong>Clean Up Artifacts:</strong> Remove all temporary test accounts, uploaded proof-of-concept web shells, or testing files upon engagement conclusion.</li>
                    </ul>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Indian Legal Framework for Cybersecurity</h3>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs space-y-3">
                      <p className="text-stone-800">
                        In India, cybersecurity activities and digital systems are governed by comprehensive statutory legislation:
                      </p>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                          <strong className="text-stone-900 block">Information Technology Act, 2000 (as amended 2008):</strong>
                          <span className="text-stone-700">
                            <strong>Section 43 & 66:</strong> Penalizes unauthorized computer access, data downloading, virus introduction, and hacking with imprisonment and substantial fines.
                            <br />
                            <strong>Section 66F:</strong> Prescribes life imprisonment for acts of cyber terrorism against critical national infrastructure.
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                          <strong className="text-stone-900 block">Digital Personal Data Protection Act, 2023 (DPDP Act):</strong>
                          <span className="text-stone-700">
                            Mandates strict obligations on Data Fiduciaries to safeguard digital personal data and imposes severe penalties (up to ₹250 crore) for failure to implement reasonable security safeguards that result in data breaches.
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-600">
                        Participating in public bug bounty programs (HackerOne, Bugcrowd) provides safe harbor <em>only</em> within the explicitly specified program brief. Stepping outside that brief revokes authorization and incurs legal liability.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.8 */}
              {selectedTopic === 8 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.8
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Cybersecurity Tools and Laboratory Setup
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Kali Linux, Wireshark, Nmap, OWASP ZAP, VirtualBox, snapshot safety, and isolated network configuration.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      Professional security analysts rely on a battle-tested toolkit of operating systems and diagnostic utilities to safely inspect systems.
                    </p>

                    <h3 className="text-base font-bold text-stone-900">Industry Standard Security Tools</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 flex items-center gap-1.5 mb-1">
                          <Terminal className="w-4 h-4 text-orange-600" />
                          Kali Linux
                        </strong>
                        Debian-derived Linux distribution pre-loaded with over 600 security and reverse-engineering tools.
                        <div className="mt-1 text-[11px] text-stone-600"><strong>Key Skills:</strong> Bash, Linux file permissions, systemctl, network sockets.</div>
                      </div>

                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 flex items-center gap-1.5 mb-1">
                          <Activity className="w-4 h-4 text-orange-600" />
                          Wireshark
                        </strong>
                        The global standard GUI packet analyzer for capturing live network frames and reconstructing protocol conversations.
                        <div className="mt-1 text-[11px] text-stone-600"><strong>Key Skills:</strong> BPF capture filters, display filters, TCP stream following.</div>
                      </div>

                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 flex items-center gap-1.5 mb-1">
                          <Compass className="w-4 h-4 text-orange-600" />
                          Nmap (Network Mapper)
                        </strong>
                        De facto standard utility for network discovery, host detection, port enumeration, and OS fingerprinting.
                        <div className="mt-1 text-[11px] text-stone-600"><strong>Key Skills:</strong> SYN stealth scans (-sS), service detection (-sV), NSE scripts.</div>
                      </div>

                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 flex items-center gap-1.5 mb-1">
                          <Globe className="w-4 h-4 text-orange-600" />
                          OWASP ZAP
                        </strong>
                        Open-source web application security scanner serving as a local intercepting proxy between browser and server.
                        <div className="mt-1 text-[11px] text-stone-600"><strong>Key Skills:</strong> HTTP inspection, parameter fuzzing, passive spidering.</div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Step-by-Step Safe Lab Setup Procedure</h3>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs">
                      <p className="text-stone-800 font-semibold">
                        How to construct an isolated security testing sandbox on your computer:
                      </p>
                      <ol className="list-decimal list-inside space-y-1.5 text-stone-700 pl-1">
                        <li><strong>Install Hypervisor:</strong> Download and install Oracle VirtualBox or VMware Workstation.</li>
                        <li><strong>Deploy Testing OS:</strong> Import Kali Linux or Ubuntu VM as your primary security evaluation station.</li>
                        <li><strong>Deploy Intentionally Vulnerable Target:</strong> Install OWASP Juice Shop, DVWA, or Metasploitable in a separate VM.</li>
                        <li><strong>Configure Isolated Network:</strong> Set VM network adapters to <strong>Host-Only</strong> or an isolated <strong>Internal Network</strong> (e.g. <code>vboxnet0</code>). Ensure target VMs have NO bridge to public internet.</li>
                        <li><strong>Take Clean Baseline Snapshots:</strong> Before running any security scans or tools, capture a VM snapshot. This enables instantaneous recovery if a system crashes or files are altered.</li>
                        <li><strong>Conduct Authorized Testing:</strong> Execute tests strictly between the attacker VM and target VM across the isolated subnet.</li>
                        <li><strong>Snapshot Reversion:</strong> Revert target machines back to clean state upon completing assessment labs.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.9 */}
              {selectedTopic === 9 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.9
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Security Assessment Methodology & Reporting
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Standard assessment workflows, 9 required vulnerability report fields, and evidence documentation standards.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <p>
                      An ethical hacker or penetration tester is ultimately judged by the quality, reproducibility, and actionable clarity of their security assessment report. A great vulnerability report enables software engineers and executive leadership to make informed risk decisions.
                    </p>

                    <h3 className="text-base font-bold text-stone-900">Standard 5-Step Assessment Workflow</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <div className="font-bold text-stone-900">1. Scope</div>
                        <div className="text-[11px] text-stone-600 mt-1">Define boundaries & permissions</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <div className="font-bold text-stone-900">2. Baseline</div>
                        <div className="text-[11px] text-stone-600 mt-1">Discover assets & ports</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <div className="font-bold text-stone-900">3. Validate</div>
                        <div className="text-[11px] text-stone-600 mt-1">Verify flaws safely</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <div className="font-bold text-stone-900">4. Prioritize</div>
                        <div className="text-[11px] text-stone-600 mt-1">Score business impact</div>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <div className="font-bold text-stone-900">5. Remediate</div>
                        <div className="text-[11px] text-stone-600 mt-1">Recommend fixes & retest</div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">The 9 Required Vulnerability Report Fields</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Field Name</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Required Content & Purpose</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Finding ID</td>
                            <td className="px-3.5 py-2 font-mono">SEC-2026-001 (Unique organizational reference identifier)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Vulnerability Title</td>
                            <td className="px-3.5 py-2">Clear, descriptive statement (e.g. "Unauthenticated SQL Injection in Order Lookup API")</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Affected Asset</td>
                            <td className="px-3.5 py-2">Specific server, URL, microservice, or IP address (e.g. https://api.corp.internal/v1/orders)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Severity & Score</td>
                            <td className="px-3.5 py-2">Critical / High / Medium / Low with CVSS v3.1 vector string justification</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Technical Evidence</td>
                            <td className="px-3.5 py-2">Step-by-step reproduction steps, cURL requests, sanitized HTTP responses, screenshots</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Business Impact</td>
                            <td className="px-3.5 py-2">Realistic operational, financial, legal, and compliance consequences if exploited</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Remediation Guidance</td>
                            <td className="px-3.5 py-2">Exact configuration changes, code patches, or compensating architectural safeguards</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Retest Status</td>
                            <td className="px-3.5 py-2">Open / Resolved / Verified Fixed / Accepted Risk</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-bold text-stone-900">Assessment Limitations</td>
                            <td className="px-3.5 py-2">Explicitly state what was not tested (e.g. DoS excluded, third-party APIs out of scope)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 1.10 */}
              {selectedTopic === 10 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-8">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 1.10
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Practical Lab and Knowledge Assessment
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Build your first security assessment in an isolated sandbox, verify lab checklist, test your knowledge, and copy report.
                    </p>
                  </div>

                  {/* Practical Lab Checklist */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 md:p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-orange-600 text-white">
                            Beginner Lab
                          </span>
                          <h3 className="text-sm font-bold text-stone-900">
                            Practical Lab: Build Your First Security Assessment
                          </h3>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">
                          Scenario: You are a junior security analyst assessing an intentionally vulnerable training application inside an isolated virtual lab.
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
                        { key: "task1", title: "Document the lab architecture and authorization boundaries." },
                        { key: "task2", title: "Identify the training application's assets and entry points." },
                        { key: "task3", title: "Observe normal HTTP requests and responses using a proxy or packet sniffer." },
                        { key: "task4", title: "Identify one simulated security weakness using the application's learning guidance." },
                        { key: "task5", title: "Explain its potential confidentiality, integrity, or availability impact." },
                        { key: "task6", title: "Recommend a fix and define a safe retest." },
                        { key: "task7", title: "Write a concise assessment report with evidence and limitations." },
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

                  {/* Scenario Assessment Quiz */}
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 md:p-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <div>
                        <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                          Module Assessment Quiz
                        </h3>
                        <p className="text-xs text-stone-500">
                          Verify your mastery of core cybersecurity and ethical hacking concepts.
                        </p>
                      </div>
                      {submittedQuiz && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-900 border border-orange-200">
                          Score: {quizScore} / 5 ({Math.round((quizScore / 5) * 100)}%)
                        </span>
                      )}
                    </div>

                    <div className="space-y-6">
                      {quizQuestions.map((q, idx) => (
                        <div key={q.id} className="space-y-2.5">
                          <div className="text-xs font-semibold text-stone-900">
                            {idx + 1}. {q.question}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedQuizAnswers[q.id] === optIdx;
                              const isCorrect = q.correct === optIdx;
                              let btnClass = "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100";

                              if (submittedQuiz) {
                                if (isCorrect) {
                                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                                } else if (isSelected && !isCorrect) {
                                  btnClass = "border-rose-500 bg-rose-50 text-rose-900 line-through";
                                } else {
                                  btnClass = "border-stone-200 bg-stone-50 text-stone-400";
                                }
                              } else if (isSelected) {
                                btnClass = "border-orange-500 bg-orange-50 text-orange-950 font-semibold shadow-2xs";
                              }

                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                                  className={`text-left p-3 rounded-xl border text-xs transition flex items-center justify-between ${btnClass}`}
                                >
                                  <span>{opt}</span>
                                  {submittedQuiz && isCorrect && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                                </button>
                              );
                            })}
                          </div>

                          {submittedQuiz && (
                            <div className="text-[11px] p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-700">
                              <strong>Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      {!submittedQuiz ? (
                        <button
                          type="button"
                          onClick={() => setSubmittedQuiz(true)}
                          disabled={Object.keys(selectedQuizAnswers).length < 5}
                          className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                        >
                          Submit Assessment
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setSubmittedQuiz(false);
                            setSelectedQuizAnswers({});
                          }}
                          className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition cursor-pointer"
                        >
                          Retake Quiz
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Copyable Markdown Vulnerability Report Artifact */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-900 text-stone-100 p-5 md:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <div>
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Deliverable Artifact
                        </span>
                        <h3 className="text-sm font-bold text-white mt-0.5">
                          Standard Security Assessment Report (Template)
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          copyCode(
                            `# Vulnerability Assessment Report

**Report ID:** SEC-2026-001  
**Assessment Date:** 2026-10-15  
**Assessor:** Junior Security Analyst (Prepspaces Lab)  
**Target Environment:** Isolated Host-Only Lab (192.168.56.101:3000)  
**Authorization Status:** Formal Testing Scope Approved

---

## 1. Executive Summary
During an authorized vulnerability assessment of the training application within an isolated VirtualBox environment, an unauthenticated access-control flaw was validated on the product review endpoint. The flaw permits unauthorized modification of customer reviews, violating system integrity.

## 2. Finding Details
- **Finding ID:** SEC-2026-001
- **Title:** Missing Function-Level Access Control on Review Modification
- **Affected Asset:** \`http://192.168.56.101:3000/rest/products/reviews\`
- **Severity Rating:** Medium (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N - Base 5.3)
- **CIA Impact:** Integrity (Low), Confidentiality (None), Availability (None)

## 3. Reproduction Steps (Evidence)
1. Send an unauthenticated HTTP PUT request to \`/rest/products/reviews\` with payload:
\`\`\`json
{
  "id": "64a0f81",
  "message": "Tampered Review Content by Unauthorized User"
}
\`\`\`
2. Observe server returns \`HTTP/1.1 200 OK\` with altered record body.
3. Validate in web browser that modified text renders to all visitors.

## 4. Root Cause Analysis
The server-side Express controller lacks session validation middleware before processing PUT/DELETE actions, permitting anonymous clients to execute privileged operations.

## 5. Remediation Recommendations
1. Enforce JWT authentication middleware (\`verifyToken\`) on all mutation routes.
2. Implement author ownership checks: verify that the user ID in the JWT matches the \`authorId\` of the review being edited.
3. Add rate limiting to review submission endpoints.

## 6. Retest Verification Plan
Following deployment of the code patch in the staging sandbox, re-issue the unauthenticated PUT request and verify that the server returns \`HTTP 401 Unauthorized\`.`,
                            "assessment-report"
                          )
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition"
                      >
                        {copiedCodeId === "assessment-report" ? (
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
{`# Vulnerability Assessment Report

**Report ID:** SEC-2026-001  
**Assessment Date:** 2026-10-15  
**Assessor:** Junior Security Analyst (Prepspaces Lab)  
**Target Environment:** Isolated Host-Only Lab (192.168.56.101:3000)  
**Authorization Status:** Formal Testing Scope Approved

---

## 1. Executive Summary
During an authorized vulnerability assessment of the training application within an isolated VirtualBox environment, an unauthenticated access-control flaw was validated on the product review endpoint. The flaw permits unauthorized modification of customer reviews, violating system integrity.

## 2. Finding Details
- **Finding ID:** SEC-2026-001
- **Title:** Missing Function-Level Access Control on Review Modification
- **Affected Asset:** http://192.168.56.101:3000/rest/products/reviews
- **Severity Rating:** Medium (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N - Base 5.3)
- **CIA Impact:** Integrity (Low), Confidentiality (None), Availability (None)

## 3. Reproduction Steps (Evidence)
1. Send an unauthenticated HTTP PUT request to /rest/products/reviews...`}
                    </pre>
                  </div>

                  {/* Recommended Academic & Industry Learning Resources */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 md:p-6 space-y-4">
                    <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                      Recommended Learning Resources
                    </h3>
                    <p className="text-xs text-stone-600">
                      These resources complement the independently developed Prepspaces cybersecurity curriculum:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                      <a
                        href="https://ocw.mit.edu/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>MIT OpenCourseWare</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Computer systems security and cryptography academic courseware.
                        </p>
                      </a>

                      <a
                        href="https://www.cmu.edu/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>Carnegie Mellon (CMU)</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          CyLab security and privacy research and foundational concepts.
                        </p>
                      </a>

                      <a
                        href="https://owasp.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>OWASP</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Open community standards for application security and Top 10 vulnerabilities.
                        </p>
                      </a>

                      <a
                        href="https://www.nist.gov/cyberframework"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>NIST Cybersecurity Framework</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Identify, Protect, Detect, Respond, Recover risk management framework.
                        </p>
                      </a>

                      <a
                        href="https://attack.mitre.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>MITRE ATT&CK</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Curated knowledge base of adversary tactics, techniques, and procedures.
                        </p>
                      </a>

                      <a
                        href="https://portswigger.net/web-security"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>PortSwigger Academy</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Free interactive web security laboratories and vulnerability writeups.
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
        {/* TAB 2: CIA TRIAD & DEFENSIVE CONTROL IMPACT SIMULATOR              */}
        {/* ================================================================== */}
        {activeTab === "cia-analyzer" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Simulator 1
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                    CIA Triad & Defensive Controls Impact Analyzer
                  </h2>
                  <p className="mt-1 text-xs text-stone-500">
                    Observe how applying specific security controls restores Confidentiality, Integrity, and Availability during real-world attacks.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-600">Overall System Health:</span>
                  <span
                    className={`text-sm font-extrabold px-3 py-1 rounded-full border ${
                      calculatedCIA.overall >= 80
                        ? "text-emerald-700 bg-emerald-50 border-emerald-300"
                        : calculatedCIA.overall >= 50
                        ? "text-amber-700 bg-amber-50 border-amber-300"
                        : "text-rose-700 bg-rose-50 border-rose-300"
                    }`}
                  >
                    {calculatedCIA.overall}%
                  </span>
                </div>
              </div>

              {/* Scenario Selector */}
              <div className="mt-6">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide block mb-2">
                  Select Attack Scenario:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {Object.entries(scenarioDetails).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedScenario(key)}
                      className={`text-left p-3 rounded-xl border text-xs transition ${
                        selectedScenario === key
                          ? "border-orange-500 bg-orange-50/80 text-orange-950 font-semibold shadow-2xs"
                          : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-bold">{item.name}</div>
                      <div className="text-[11px] text-stone-500 mt-1 line-clamp-1">{item.threat}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Threat Context */}
              <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                <div><strong>Active Threat:</strong> {currentScenario.threat}</div>
                <div><strong>System Flaw:</strong> {currentScenario.vulnerability}</div>
              </div>

              {/* CIA Gauge Meters */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-orange-600" />
                      Confidentiality
                    </span>
                    <span className="font-mono font-bold text-stone-800">{calculatedCIA.c}%</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        calculatedCIA.c >= 75 ? "bg-emerald-500" : calculatedCIA.c >= 45 ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${calculatedCIA.c}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-stone-500">
                    {calculatedCIA.c >= 80 ? "Data well-protected against eavesdropping." : "High risk of sensitive data exposure!"}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-600" />
                      Integrity
                    </span>
                    <span className="font-mono font-bold text-stone-800">{calculatedCIA.i}%</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        calculatedCIA.i >= 75 ? "bg-emerald-500" : calculatedCIA.i >= 45 ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${calculatedCIA.i}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-stone-500">
                    {calculatedCIA.i >= 80 ? "Data records verified tamper-proof." : "Adversaries can forge or alter records!"}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-emerald-600" />
                      Availability
                    </span>
                    <span className="font-mono font-bold text-stone-800">{calculatedCIA.a}%</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        calculatedCIA.a >= 75 ? "bg-emerald-500" : calculatedCIA.a >= 45 ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${calculatedCIA.a}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-stone-500">
                    {calculatedCIA.a >= 80 ? "Services resilient to outages & disruption." : "Severe risk of denial of service or encryption lock!"}
                  </p>
                </div>
              </div>

              {/* Toggle Defensive Controls */}
              <div className="mt-8">
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wide mb-3">
                  Toggle Defensive Engineering Controls:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { key: "encryptionAtRest", title: "AES-256 Encryption at Rest", desc: "Protects raw database files if storage volumes are extracted." },
                    { key: "tlsTransit", title: "TLS 1.3 Transport Encryption", desc: "Prevents in-flight packet interception and man-in-the-middle sniffing." },
                    { key: "mfaAuth", title: "FIDO2 Phishing-Resistant MFA", desc: "Blocks account takeover even if passwords are stolen via phishing." },
                    { key: "leastPrivilege", title: "Principle of Least Privilege", desc: "Restricts API endpoints and database service accounts to read-only." },
                    { key: "automatedBackups", title: "Immutable Air-Gapped Backups", desc: "Ensures rapid data restoration without paying ransomware ransoms." },
                    { key: "auditLogging", title: "Centralized SIEM Audit Logging", desc: "Captures tamper-evident logs to alert SOC operators to unauthorized changes." },
                  ].map((ctrl) => (
                    <button
                      key={ctrl.key}
                      type="button"
                      onClick={() => toggleControl(ctrl.key)}
                      className={`text-left p-3.5 rounded-xl border text-xs transition flex flex-col justify-between ${
                        activeControls[ctrl.key]
                          ? "border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium shadow-2xs"
                          : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-stone-900">{ctrl.title}</span>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            activeControls[ctrl.key] ? "bg-emerald-600 text-white" : "bg-stone-200 text-stone-600"
                          }`}
                        >
                          {activeControls[ctrl.key] ? "✓" : "+"}
                        </div>
                      </div>
                      <span className="text-[11px] text-stone-500">{ctrl.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: RISK CALCULATOR (Likelihood × Impact)                       */}
        {/* ================================================================== */}
        {activeTab === "risk-calculator" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 2
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Quantitative Risk Engine: Risk ≈ Likelihood × Impact
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Model threat scenarios, asset criticality, and threat actor capabilities to calculate risk tiers and remediation SLAs.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sliders & Controls */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                      <span>Likelihood Score (1 = Rare / Impractical, 5 = Automated / Constant):</span>
                      <span className="font-mono text-orange-600">{likelihoodScore} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={likelihoodScore}
                      onChange={(e) => setLikelihoodScore(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>1 (Complex prerequisite)</span>
                      <span>3 (Requires user interaction)</span>
                      <span>5 (Trivial public exploit)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                      <span>Technical & Business Impact (1 = Minor glitch, 5 = Catastrophic breach):</span>
                      <span className="font-mono text-orange-600">{impactScore} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={impactScore}
                      onChange={(e) => setImpactScore(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>1 (No data lost)</span>
                      <span>3 (Partial denial of service)</span>
                      <span>5 (Full DB compromise / legal fine)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Asset Criticality:
                      </label>
                      <select
                        value={assetValue}
                        onChange={(e) => setAssetValue(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option>Tier 1 - Critical (PII, Financials, Payment Gateways)</option>
                        <option>Tier 2 - Confidential (Internal wikis, source code)</option>
                        <option>Tier 3 - Operational (Dev environments, staging clusters)</option>
                        <option>Tier 4 - Public (Static marketing site, public blogs)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Threat Actor Capability:
                      </label>
                      <select
                        value={threatActorCapability}
                        onChange={(e) => setThreatActorCapability(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option>Organized Cybercrime Syndicate (Automated Botnets)</option>
                        <option>Sophisticated Nation-State APT (Zero-day exploits)</option>
                        <option>Opportunistic Script Kiddie (Public scanners)</option>
                        <option>Accidental / Careless Internal Staff</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Risk Score Card */}
                <div className="lg:col-span-1 rounded-2xl border border-stone-200 bg-stone-50 p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      Calculated Risk Rating
                    </span>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-stone-900 font-mono">
                        {riskResult.rawRisk}
                      </span>
                      <span className="text-xs text-stone-500">/ 25 Max</span>
                    </div>

                    <div className="mt-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${riskResult.color}`}>
                        {riskResult.level} Risk
                      </span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-200 text-xs space-y-1.5 text-stone-700">
                      <div><strong>Mandatory Remediation SLA:</strong></div>
                      <div className="p-2 rounded-lg bg-white border border-stone-200 font-medium text-stone-900">
                        {riskResult.sla}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-stone-500">
                    Formula: Likelihood ({likelihoodScore}) × Impact ({impactScore}) = {riskResult.rawRisk}. In formal methodologies (NIST SP 800-30), asset weighting influences final budget allocation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: CYBERATTACK LIFECYCLE & MITRE ATT&CK SIMULATOR               */}
        {/* ================================================================== */}
        {activeTab === "kill-chain" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 3
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Cyberattack Lifecycle & MITRE ATT&CK Defensive Stepper
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Step through the stages of a targeted cyber intrusion. Activate defenses at each layer to disrupt the adversary's kill chain.
                </p>
              </div>

              {/* Stage Stepper Navigation */}
              <div className="mt-6 flex items-center justify-between overflow-x-auto pb-2 gap-2">
                {killChainStages.map((stg) => {
                  const isActive = currentKillChainStage === stg.stage;
                  const isBlocked = defensesEnabled[stg.stage];
                  return (
                    <button
                      key={stg.stage}
                      type="button"
                      onClick={() => setCurrentKillChainStage(stg.stage)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                        isActive
                          ? "bg-stone-900 text-white shadow-xs"
                          : isBlocked
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      <span>{stg.phase.split(". ")[0]}</span>
                      {isBlocked && <ShieldCheck className="w-3 h-3 text-emerald-600" />}
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Details Card */}
              {(() => {
                const currentStageObj = killChainStages[currentKillChainStage];
                const isBlocked = defensesEnabled[currentKillChainStage];

                return (
                  <div className="mt-6 p-6 rounded-2xl border border-stone-200 bg-stone-50/80 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-orange-600">
                          {currentStageObj.tactic}
                        </span>
                        <h3 className="text-lg font-bold text-stone-900">
                          {currentStageObj.phase}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setDefensesEnabled((prev) => ({
                            ...prev,
                            [currentKillChainStage]: !prev[currentKillChainStage],
                          }))
                        }
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer ${
                          isBlocked
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : "bg-orange-600 text-white hover:bg-orange-700"
                        }`}
                      >
                        <Shield className="w-3.5 h-3.5" />
                        {isBlocked ? "Defense Active (Disrupted)" : "Deploy Defensive Control"}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
                        <span className="font-bold text-rose-800 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Adversary Technique:
                        </span>
                        <p className="text-stone-700 leading-relaxed">
                          {currentStageObj.attackerAction}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
                        <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Recommended Engineering Control:
                        </span>
                        <p className="text-stone-700 leading-relaxed">
                          {currentStageObj.defensiveControl}
                        </p>
                      </div>
                    </div>

                    {/* Attack Status Banner */}
                    <div
                      className={`p-4 rounded-xl border text-xs font-medium flex items-center gap-3 ${
                        isBlocked
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-rose-50 border-rose-300 text-rose-950"
                      }`}
                    >
                      {isBlocked ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>{currentStageObj.blockedState}</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          <span>
                            Kill chain intact! Without active defense, adversary advances to next stage of breach.
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: VIRTUAL LAB TOOL TERMINAL SANDBOX                           */}
        {/* ================================================================== */}
        {activeTab === "lab-terminal" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 4
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Virtual Lab & Security Tool Terminal
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Execute safe, simulated diagnostic scans using Kali Linux, Nmap, Wireshark (tshark), OWASP ZAP, and VirtualBox snapshot tools inside an isolated training subnet.
                </p>
              </div>

              {/* Command Presets */}
              <div className="mt-6 flex flex-wrap gap-2">
                {Object.entries(labCommandPresets).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => runLabCommand(key)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                      selectedLabCommand === key
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
                      analyst@kali-security-lab: ~ (Isolated VNet 192.168.56.0/24)
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">Host-Only Sandbox</span>
                </div>

                <div className="p-4 md:p-6 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px]">
                  {isExecutingLab ? (
                    <div className="flex items-center gap-2 text-orange-400">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{labConsoleOutput}</span>
                    </div>
                  ) : (
                    <pre className="text-stone-300 whitespace-pre-wrap">
                      {labConsoleOutput || `$ ${labCommandPresets[selectedLabCommand].cmd}\n\n${labCommandPresets[selectedLabCommand].output}`}
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
          moduleName="Module 1: Introduction to Cybersecurity and Ethical Hacking"
          currentTopic={topics.find((t) => t.id === (selectedTopic || 1))?.title || "Overview"}
          onClose={() => setShowAiTutor(false)}
        />
      )}
    </div>
  );
}
