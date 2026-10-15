import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
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
  GitPullRequest,
  GitBranch,
  GitCommit,
  GitMerge,
  Bug,
  Braces,
  FolderCheck,
  ShieldX,
  ClipboardList,
  EyeOff,
  Code2,
  Wrench,
  Package,
  Layers3,
  FileSearch,
  CheckCircle,
  XCircle,
  BarChart3,
  TestTube2,
  Share2,
  RadioTower,
  Archive,
  FolderLock,
  LockKeyhole,
  FileKey,
  History,
  FileX,
  Skull,
  ServerCrash,
  Radio as Antenna,
  FileCheck,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 20                          */
/* Security Monitoring, SIEM, Incident Response, and Digital Forensics        */
/* Standards: NIST SP 800-61r3, NIST SP 800-86, NIST SP 800-92, MITRE ATT&CK */
/* -------------------------------------------------------------------------- */

export default function CybersecuritySIEMIncidentResponse() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'siem-sim' | 'detection-sim' | 'ir-sim' | 'forensics-sim' | 'quiz'

  // Copied states
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [copiedForensicRecord, setCopiedForensicRecord] = useState(false);
  const [copiedChecklist, setCopiedChecklist] = useState(false);

  // Evidence handling checklist interactive state (Section 20.11.1)
  const [checkedChecklistItems, setCheckedChecklistItems] = useState({});

  // Practical Lab Forensic Record State (Section 20.12 Exercise C)
  const [forensicRecord, setForensicRecord] = useState({
    caseId: "SOC-020-001",
    evidenceSource: "Endpoint WS-014 Disk Image (WS-014.E01) & Memory Dump (WS-014.raw)",
    collector: "Analyst Alex Vance (Auth Ref: SEC-OPS-AUTH-2026-99)",
    timestampUtc: "2026-10-15T09:30:00Z",
    hashAlgorithm: "SHA-256",
    calculatedHash: "7b8e4f1a2c9d03847e126958adfc82103759bbde93108c4598a31e89fbc0023a",
    acquisitionMethod: "FTK Imager CLI bit-stream raw image via physical write-blocker",
    observedFindings: "Suspicious macro spawned cmd.exe -> PowerShell -enc at 09:16 UTC; DNS query to telemetry.example.invalid at 09:18 UTC; Cloud admin permission change at 09:23 UTC.",
    limitations: "Network packet capture truncated at 100MB; cloud audit logs show 3-minute delivery delay.",
    recommendedAction: "Quarantine WS-014 via EDR; revoke admin02 cloud session tokens and rotate secrets; review IAM role alterations.",
  });

  // Quiz state (Section 20.13)
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: SIEM LOG AGGREGATION, NORMALIZATION & QUERY ENGINE            */
  /* -------------------------------------------------------------------------- */
  const [siemSearchQuery, setSiemSearchQuery] = useState("event.type == 'authentication' AND event.action == 'failure'");
  const [selectedLogFilter, setSelectedLogFilter] = useState("all"); // 'all' | 'identity' | 'endpoint' | 'network' | 'cloud'

  const rawLogs = [
    {
      id: "LOG-1001",
      timestamp: "2026-10-15T09:00:00Z",
      source: "identity",
      sourceSystem: "AzureAD / Okta",
      user: "analyst01",
      sourceIp: "192.0.2.14",
      destination: "sso.internal.corp",
      action: "success",
      eventType: "authentication",
      eventCode: "AUTH-1001",
      rawText: '{"time":"2026-10-15T09:00:00Z","actor":"analyst01","ip":"192.0.2.14","status":"SUCCESS","mfa":"TOTP_VALID"}',
      details: "Interactive user sign-in from recognized office workstation WS-008.",
    },
    {
      id: "LOG-1002",
      timestamp: "2026-10-15T09:12:15Z",
      source: "identity",
      sourceSystem: "AzureAD / Okta",
      user: "admin02",
      sourceIp: "192.0.2.40",
      destination: "vpn.prepspaces.local",
      action: "failure",
      eventType: "authentication",
      eventCode: "AUTH-1042",
      rawText: '{"time":"2026-10-15T09:12:15Z","actor":"admin02","ip":"192.0.2.40","status":"FAILED_PASSWORD","attempt":1}',
      details: "Repeated invalid credentials submitted against enterprise VPN gateway.",
    },
    {
      id: "LOG-1003",
      timestamp: "2026-10-15T09:12:45Z",
      source: "identity",
      sourceSystem: "AzureAD / Okta",
      user: "admin02",
      sourceIp: "192.0.2.40",
      destination: "vpn.prepspaces.local",
      action: "failure",
      eventType: "authentication",
      eventCode: "AUTH-1042",
      rawText: '{"time":"2026-10-15T09:12:45Z","actor":"admin02","ip":"192.0.2.40","status":"FAILED_PASSWORD","attempt":4}',
      details: "Brute-force credential spray signature detected from non-standard IP.",
    },
    {
      id: "LOG-1004",
      timestamp: "2026-10-15T09:14:02Z",
      source: "identity",
      sourceSystem: "AzureAD / Okta",
      user: "admin02",
      sourceIp: "192.0.2.40",
      destination: "vpn.prepspaces.local",
      action: "success",
      eventType: "authentication",
      eventCode: "AUTH-1001",
      rawText: '{"time":"2026-10-15T09:14:02Z","actor":"admin02","ip":"192.0.2.40","status":"SUCCESS","mfa_bypassed":true}',
      details: "Successful login for privileged account admin02 following 6 failed attempts.",
    },
    {
      id: "LOG-1005",
      timestamp: "2026-10-15T09:16:30Z",
      source: "endpoint",
      sourceSystem: "CrowdStrike / Sysmon",
      user: "admin02",
      host: "WS-014",
      action: "process_creation",
      eventType: "execution",
      eventCode: "SYS-1",
      rawText: '{"time":"2026-10-15T09:16:30Z","parent":"WINWORD.EXE","image":"cmd.exe","args":"/c powershell -enc JABzAD0..."}',
      details: "Office application spawned command interpreter executing encoded PowerShell script.",
    },
    {
      id: "LOG-1006",
      timestamp: "2026-10-15T09:18:10Z",
      source: "network",
      sourceSystem: "CoreDNS / Infoblox",
      host: "WS-014",
      domain: "telemetry.example.invalid",
      action: "dns_query",
      eventType: "network",
      eventCode: "DNS-QUERY",
      rawText: '{"time":"2026-10-15T09:18:10Z","client":"WS-014","query":"telemetry.example.invalid","qtype":"A","status":"NOERROR"}',
      details: "Uncategorized domain resolution request originating from workstation WS-014.",
    },
    {
      id: "LOG-1007",
      timestamp: "2026-10-15T09:20:05Z",
      source: "network",
      sourceSystem: "Palo Alto Firewall",
      host: "WS-014",
      destinationIp: "198.51.100.88",
      action: "allowed",
      eventType: "network",
      eventCode: "TRAFFIC-ALLOW",
      rawText: '{"time":"2026-10-15T09:20:05Z","src":"WS-014","dst":"198.51.100.88","dport":443,"bytes":14200,"action":"ALLOW"}',
      details: "Outbound TLS connection allowed by egress perimeter policy.",
    },
    {
      id: "LOG-1008",
      timestamp: "2026-10-15T09:23:40Z",
      source: "cloud",
      sourceSystem: "AWS CloudTrail",
      user: "admin02",
      action: "AttachRolePolicy",
      eventType: "cloud_audit",
      eventCode: "IAM-POLICY-CHANGE",
      rawText: '{"eventTime":"2026-10-15T09:23:40Z","eventName":"AttachRolePolicy","policyArn":"arn:aws:iam::aws:policy/AdministratorAccess"}',
      details: "Privilege escalation: Full AdministratorAccess attached to cloud service role.",
    },
    {
      id: "LOG-1009",
      timestamp: "2026-10-15T09:25:12Z",
      source: "endpoint",
      sourceSystem: "EDR Sentinel",
      host: "WS-014",
      action: "alert_trigger",
      eventType: "security_alert",
      eventCode: "EDR-CRIT-99",
      rawText: '{"alert":"LivingOffTheLand_LOLBin","severity":"HIGH","technique":"T1059.001","status":"NEW"}',
      details: "High-confidence behavioral alert: Office spawned malicious script interpreter.",
    },
  ];

  const filteredLogs = useMemo(() => {
    return rawLogs.filter((log) => {
      if (selectedLogFilter !== "all" && log.source !== selectedLogFilter) {
        return false;
      }
      const query = siemSearchQuery.toLowerCase().trim();
      if (!query) return true;
      if (query.includes("failure") && log.action !== "failure") return false;
      if (query.includes("admin02") && log.user !== "admin02") return false;
      if (query.includes("ws-014") && log.host !== "WS-014") return false;
      if (query.includes("authentication") && log.eventType !== "authentication") return false;
      return true;
    });
  }, [siemSearchQuery, selectedLogFilter]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: DETECTION ENGINEERING & CORRELATION ENGINE                    */
  /* -------------------------------------------------------------------------- */
  const [detectionThreshold, setDetectionThreshold] = useState(5);
  const [timeWindowMins, setTimeWindowMins] = useState(10);
  const [requirePrivilegeMatch, setRequirePrivilegeMatch] = useState(true);
  const [testDatasetType, setTestDatasetType] = useState("brute_then_success"); // 'brute_then_success' | 'benign_typo' | 'admin_batch'

  const correlationResult = useMemo(() => {
    if (testDatasetType === "brute_then_success") {
      const failures = 6;
      const hasSuccess = true;
      const isPrivileged = true;
      const triggered = failures >= detectionThreshold && hasSuccess && (!requirePrivilegeMatch || isPrivileged);
      return {
        triggered,
        ruleName: "CORR-RULE-042: Credential Stuffing Followed by Privileged Compromise",
        failuresObserved: failures,
        targetAccount: "admin02",
        sourceIp: "192.0.2.40",
        verdict: triggered ? "TRUE POSITIVE ALERT GENERATED" : "FILTERED (Threshold not reached)",
        severity: "CRITICAL (Risk Score: 92/100)",
        recommendedAction: "Immediately disable account admin02, kill active VPN sessions, and trigger Tier-2 host containment.",
        explanation: "Observed 6 failed password events followed within 2 minutes by a successful login for privileged account admin02 from an external IP.",
      };
    } else if (testDatasetType === "benign_typo") {
      const failures = 2;
      const hasSuccess = true;
      const isPrivileged = false;
      const triggered = failures >= detectionThreshold && hasSuccess && (!requirePrivilegeMatch || isPrivileged);
      return {
        triggered,
        ruleName: "CORR-RULE-042: Credential Stuffing Followed by Privileged Compromise",
        failuresObserved: failures,
        targetAccount: "dev_user09",
        sourceIp: "192.0.2.14",
        verdict: triggered ? "FALSE POSITIVE (Tuning Required)" : "BENIGN NOISE SUPPRESSED",
        severity: "LOW",
        recommendedAction: "No action required. Normal mistyped password pattern.",
        explanation: "User mistyped password twice and successfully authenticated via standard office workstation. Ignored by threshold.",
      };
    } else {
      const failures = 12;
      const hasSuccess = false;
      const isPrivileged = true;
      const triggered = failures >= detectionThreshold && hasSuccess;
      return {
        triggered,
        ruleName: "CORR-RULE-042: Credential Stuffing Followed by Privileged Compromise",
        failuresObserved: failures,
        targetAccount: "backup_service_svc",
        sourceIp: "192.0.2.100",
        verdict: triggered ? "ALERT GENERATED" : "SUPPRESSED (No Successful Ingress)",
        severity: "MEDIUM (Service Password Lockout)",
        recommendedAction: "Inspect automated scheduled task password rotation on server-04.",
        explanation: "Automated service account with expired credentials retrying in a loop. No subsequent success recorded.",
      };
    }
  }, [detectionThreshold, timeWindowMins, requirePrivilegeMatch, testDatasetType]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: INCIDENT RESPONSE LIFECYCLE & CONTAINMENT WORKBENCH           */
  /* -------------------------------------------------------------------------- */
  const [irPhase, setIrPhase] = useState(2); // 1: Preparation, 2: Detection, 3: Containment, 4: Eradication, 5: Recovery, 6: Post-Incident
  const [isHostIsolated, setIsHostIsolated] = useState(false);
  const [isTokenRevoked, setIsTokenRevoked] = useState(false);
  const [isEgressBlocked, setIsEgressBlocked] = useState(false);
  const [isMemoryPreserved, setIsMemoryPreserved] = useState(false);

  const irScore = useMemo(() => {
    let score = 0;
    if (isMemoryPreserved) score += 25; // Good: volatile evidence saved before host isolation/reboot
    if (isHostIsolated) score += 25; // Good: C2 and lateral movement severed
    if (isTokenRevoked) score += 25; // Good: cloud persistence killed
    if (isEgressBlocked) score += 25; // Good: exfiltration path blocked
    return score;
  }, [isMemoryPreserved, isHostIsolated, isTokenRevoked, isEgressBlocked]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: DIGITAL FORENSICS & CHAIN OF CUSTODY INSPECTOR                */
  /* -------------------------------------------------------------------------- */
  const [selectedArtifactType, setSelectedArtifactType] = useState("memory"); // 'memory' | 'disk' | 'registry' | 'pcap'
  const [hashVerificationStatus, setHashVerificationStatus] = useState("verified"); // 'verified' | 'mismatch' | 'tampered'

  const forensicArtifacts = {
    memory: {
      name: "WS-014-RAM.raw (Volatile Memory Dump)",
      size: "16,777,216 KB (16 GB)",
      acquisitionTool: "WinPmem 4.0 / LiME",
      collector: "Investigator Alex Vance",
      sha256Original: "8f4b1c20a9e3d81b4c7890abcdef0123456789abcdef0123456789abcdef01",
      evidenceIntegrity: "Match (Bit-for-Bit Identical)",
      findings: [
        "Unpacked Cobalt Strike Beacon payload in memory space of explorer.exe (PID 4820)",
        "Cleartext decrypted C2 URL: https://telemetry.example.invalid/push",
        "Dumped NTLM hash for local administrator account in memory buffer",
      ],
      custodyEntries: [
        { time: "2026-10-15T09:35:00Z", actor: "Alex Vance", action: "Acquired live RAM on WS-014 via hardware write-blocker" },
        { time: "2026-10-15T09:42:00Z", actor: "Alex Vance", action: "Generated SHA-256 hash digest and transferred to evidence locker" },
        { time: "2026-10-15T10:15:00Z", actor: "Forensics Lead Sarah Lin", action: "Mounted working forensic copy in Volatility 3 sandbox" },
      ],
    },
    disk: {
      name: "WS-014-PhysicalDrive0.E01 (Expert Witness Disk Image)",
      size: "512,110,592 KB (512 GB NVMe)",
      acquisitionTool: "FTK Imager 4.7.1 Bit-Stream",
      collector: "Investigator Alex Vance",
      sha256Original: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      evidenceIntegrity: "Match (Bit-for-Bit Identical)",
      findings: [
        "Deleted invoice_viewer.bin found in unallocated space ($MFT entry 41029)",
        "Prefetch execution record confirms powershell.exe executed with EncodedCommand",
        "Amcache.hve records SHA-1 of dropped secondary stager executable",
      ],
      custodyEntries: [
        { time: "2026-10-15T09:50:00Z", actor: "Alex Vance", action: "Hard-drive unseated; attached to Tableau T8u forensic bridge" },
        { time: "2026-10-15T10:20:00Z", actor: "Alex Vance", action: "E01 forensic image completed; SHA-256 recorded in master case log" },
        { time: "2026-10-15T11:00:00Z", actor: "Forensic Lab Vault", action: "Original NVMe placed in sealed anti-static tamper-evident bag #00492" },
      ],
    },
    registry: {
      name: "SYSTEM & NTUSER.DAT Hives (WS-014)",
      size: "64,200 KB",
      acquisitionTool: "RegRipper 3.0 / FTK Imager",
      collector: "Investigator Sarah Lin",
      sha256Original: "4a28f7e1b9c03d857124690abcdef0123456789abcdef0123456789abcdef03",
      evidenceIntegrity: "Match (Bit-for-Bit Identical)",
      findings: [
        "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run contains entry 'WindowsCloudUpdate'",
        "UserAssist registry keys indicate WINWORD.EXE executed exactly 4 times",
        "MountPoints2 tracks USB thumb drive insertion 2 days prior to incident",
      ],
      custodyEntries: [
        { time: "2026-10-15T11:15:00Z", actor: "Sarah Lin", action: "Extracted offline registry hives from working disk image" },
        { time: "2026-10-15T11:30:00Z", actor: "Sarah Lin", action: "Executed automated RegRipper parsing; exported report to case bundle" },
      ],
    },
  };

  const activeForensicArtifact = forensicArtifacts[selectedArtifactType];

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA (Section 20.13)                                                  */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of a SIEM?",
      options: [
        "Replace every endpoint security tool",
        "Centralize and analyze security data to support detection and investigation",
        "Guarantee that no attacks succeed",
        "Store application passwords",
      ],
      correctAnswer: 1,
      explanation: "A SIEM (Security Information and Event Management) aggregates, normalizes, and correlates security logs from disparate infrastructure to provide centralized visibility and detection.",
    },
    {
      id: 2,
      question: "What is the difference between an event and an incident?",
      options: [
        "They always mean the same thing",
        "An event is an observable occurrence; an incident requires a response under organizational criteria",
        "Every event proves an attack",
        "An incident is always a false positive",
      ],
      correctAnswer: 1,
      explanation: "An event is any observable state change on an endpoint or network. An incident is a confirmed or high-confidence event that violates security policy and demands coordinated response.",
    },
    {
      id: 3,
      question: "Why is time synchronization important for incident response?",
      options: [
        "It encrypts log records",
        "It makes all logs identical",
        "It helps reconstruct event sequences across systems",
        "It removes false positives automatically",
      ],
      correctAnswer: 2,
      explanation: "Accurate UTC time synchronization (via NTP) is essential to assemble multi-source events into a coherent chronological timeline across distributed firewalls, endpoints, and cloud logs.",
    },
    {
      id: 4,
      question: "What is a false positive in detection engineering?",
      options: [
        "A malicious event that was missed",
        "An alert generated for activity that does not meet the intended malicious or violation criteria",
        "A missing log source",
        "A successfully contained incident",
      ],
      correctAnswer: 1,
      explanation: "A false positive occurs when a detection rule triggers an alert on benign, authorized, or misconfigured operational activity rather than a genuine security threat.",
    },
    {
      id: 5,
      question: "What is the purpose of incident containment?",
      options: [
        "Limit ongoing harm and prevent further spread",
        "Delete every system log",
        "Immediately declare the incident resolved",
        "Identify the attacker with certainty",
      ],
      correctAnswer: 0,
      explanation: "Containment isolates compromised assets, revokes hijacked credentials, and blocks exfiltration paths to stop an attack from expanding while preserving volatile digital evidence.",
    },
    {
      id: 6,
      question: "What does a cryptographic hash contribute to evidence handling?",
      options: [
        "Proof of who committed an attack",
        "Evidence that compared byte sequences match when their hashes match under the chosen algorithm",
        "A guarantee that evidence was collected completely",
        "Automatic legal admissibility",
      ],
      correctAnswer: 1,
      explanation: "A cryptographic hash (e.g. SHA-256) proves that a forensic disk or memory working copy has not been altered or tampered with since acquisition, establishing data integrity.",
    },
    {
      id: 7,
      question: "What is chain of custody?",
      options: [
        "A list of detection rules",
        "The documented history of evidence handling, possession, transfer, and access",
        "A method for patching systems",
        "A network-routing technique",
      ],
      correctAnswer: 1,
      explanation: "Chain of custody is the chronological, tamper-evident documentation accounting for the receipt, transfer, custody, analysis, and disposition of digital evidence.",
    },
    {
      id: 8,
      question: "What is the main value of correlating endpoint and identity logs?",
      options: [
        "It eliminates the need for investigation",
        "It can help connect suspicious processes with account activity and establish scope",
        "It guarantees attribution",
        "It prevents every login failure",
      ],
      correctAnswer: 1,
      explanation: "Correlating identity authentication logs with endpoint process trees links an initial unauthorized sign-in directly to downstream execution (e.g., PowerShell invoking Living-off-the-Land tools).",
    },
    {
      id: 9,
      question: "Which is the best example of hypothesis-driven threat hunting?",
      options: [
        "Searching randomly without documenting results",
        "Assuming every unusual IP is malicious",
        "Defining a testable suspicion and examining relevant telemetry for supporting or contradictory evidence",
        "Disabling all security alerts",
      ],
      correctAnswer: 2,
      explanation: "Hypothesis-driven hunting starts with an explicit, testable scenario (e.g. 'Adversaries may be executing LOLBins via Office macros') and analyzes telemetry to prove or disprove it.",
    },
    {
      id: 10,
      question: "What should an incident report do when evidence is incomplete?",
      options: [
        "State the most dramatic explanation as fact",
        "Omit uncertainties",
        "Separate confirmed observations from hypotheses and document limitations",
        "Assign attribution without corroboration",
      ],
      correctAnswer: 2,
      explanation: "A professional incident report maintains forensic integrity by explicitly distinguishing confirmed facts from analytical hypotheses and disclosing technical blind spots or missing logs.",
    },
  ];

  const handleQuizSelect = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  }, [quizAnswers]);

  // Copy helper
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const evidenceChecklist = [
    "Confirm authorization, scope, and the specific investigative purpose of collection.",
    "Assign a unique evidence ID (e.g. CASE-020-001) and document the source device/account.",
    "Record acquisition timestamps, UTC timezone, collector identity, and acquisition tools.",
    "Calculate and record cryptographic hashes (SHA-256) immediately upon collection.",
    "Preserve original master evidence media; perform forensic examination on working copies only.",
    "Restrict physical and logical access to approved investigative personnel with audited access logs.",
    "Document every evidence transfer, transformation, tool version, and integrity exception in chain of custody.",
    "Enforce organizational retention, legal-hold, privacy compliance, and approved disposal standards.",
  ];

  const toggleChecklistItem = (index) => {
    setCheckedChecklistItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const checkedCount = Object.values(checkedChecklistItems).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning")}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Return to Course Index"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Module 20
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">Cybersecurity Master Course</span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                SIEM, Incident Response & Digital Forensics
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setShowAiTutor(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-medium hover:bg-cyan-500/20 transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask Nova AI</span>
            </button>

            <button
              onClick={() => navigate("/learning/cybersecurity/malware-analysis")}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Previous Module: Malware & CTI"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/learning/cybersecurity")}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Curriculum Index"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-2 border-t border-slate-900 py-2 no-scrollbar text-xs font-medium">
          {[
            { id: "theory", label: "Curriculum Theory", icon: BookOpen },
            { id: "siem-sim", label: "Simulator: SIEM Log Engine", icon: Database },
            { id: "detection-sim", label: "Simulator: Correlation Engine", icon: Target },
            { id: "ir-sim", label: "Simulator: IR Containment", icon: ShieldAlert },
            { id: "forensics-sim", label: "Simulator: Digital Forensics", icon: Fingerprint },
            { id: "quiz", label: "Knowledge Quiz (10)", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Track & Time Header */}
      <div className="bg-slate-900/60 border-b border-slate-800/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-slate-400">
          <ModuleNav
            track="cybersecurity"
            currentModuleId="siem-incident-response"
            showAiTutor={showAiTutor}
            onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
            aiTutorLabel="Nova AI: SOC Analyst"
          />
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Est: 70 mins
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SOC Operations & Digital Forensics
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* ================================================================== */}
        {/* TAB 1: CURRICULUM THEORY (Sections 20.1 - 20.15)                  */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* 20.1 Module Overview */}
            <section className="bg-gradient-to-br from-slate-900/90 via-slate-900/40 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  20.1 Module Overview
                </span>
                <span className="text-xs text-slate-500">Security Operations & Digital Forensics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Security Monitoring, SIEM, Incident Response, and Digital Forensics
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                Modern enterprise defense extends beyond perimeter controls. Organizations must continuously monitor
                endpoints, networks, identities, and cloud infrastructures to detect unauthorized intrusions, conduct
                systematic incident containment, and acquire legally defensible digital evidence.
              </p>
              <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-4xl">
                This curriculum incorporates foundational standards from <strong className="text-cyan-400">NIST SP 800-61 Rev. 3</strong> (Computer Security Incident Handling),
                <strong className="text-cyan-400"> NIST SP 800-86</strong> (Guide to Integrating Forensic Techniques), <strong className="text-cyan-400">NIST SP 800-92</strong> (Log Management),
                and <strong className="text-cyan-400">CISA Federal Incident Response Playbooks</strong>.
              </p>

              {/* Learning Objectives Grid */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-3">
                  <Target className="w-4 h-4" /> Core Learning Objectives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Architect SOC tiers, alert triage queues & escalation procedures",
                    "Ingest, parse, normalize & correlate distributed log telemetry",
                    "Author correlation rules & evaluate False Positive / MTTD metrics",
                    "Distinguish security events, actionable alerts & confirmed incidents",
                    "Execute 6-phase NIST SP 800-61 incident response lifecycles",
                    "Acquire volatile memory & bit-stream disk images with write-blockers",
                    "Maintain tamper-evident chain of custody & cryptographic hashes",
                    "Reconstruct chronological cross-source event timelines",
                    "Author forensic incident reports with defensible evidentiary claims",
                  ].map((obj, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 20.2 SOC Fundamentals */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    20.2 SOC Fundamentals
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Operational Structure, Roles & Event vs. Alert vs. Incident</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">SOC Tiering & Responsibilities</span>
              </div>

              {/* Tier Structure Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    tier: "Tier 1: Triage & Monitoring",
                    role: "SOC Analyst 1",
                    focus: "24/7 alert queue monitoring, initial classification, noise filtering, basic runbook execution.",
                    color: "border-blue-500/30 text-blue-400",
                  },
                  {
                    tier: "Tier 2: Deep Investigation",
                    role: "Incident Responder",
                    focus: "Cross-telemetry correlation, blast-radius scoping, root-cause identification, host containment.",
                    color: "border-cyan-500/30 text-cyan-400",
                  },
                  {
                    tier: "Tier 3: Advanced Hunting",
                    role: "Threat Hunter & DFIR Lead",
                    focus: "Hypothesis-driven hunts, memory forensics, reverse engineering, custom detection engineering.",
                    color: "border-amber-500/30 text-amber-400",
                  },
                  {
                    tier: "Incident Commander",
                    role: "Security Leadership / CISO",
                    focus: "Business impact assessment, legal/regulatory notifications, communications, recovery sign-off.",
                    color: "border-emerald-500/30 text-emerald-400",
                  },
                ].map((t, idx) => (
                  <div key={idx} className={`p-4 rounded-xl bg-slate-950/80 border ${t.color} space-y-2`}>
                    <span className="text-xs font-bold uppercase tracking-wider">{t.tier}</span>
                    <div className="text-[11px] font-mono text-slate-400">Position: {t.role}</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{t.focus}</p>
                  </div>
                ))}
              </div>

              {/* Event vs Alert vs Incident Distinction */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">1. Security Event</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Any observable occurrence in an IT system (e.g. user sign-in, DNS lookup, TCP socket connection). Most events are benign routine activity.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">2. Security Alert</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A notification triggered by a detection rule or heuristic model indicating potentially anomalous or malicious behavior requiring human review.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/30 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-rose-400 uppercase">3. Security Incident</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A confirmed adverse security event that compromises confidentiality, integrity, or availability, requiring formal containment and remediation.
                  </p>
                </div>
              </div>
            </section>

            {/* 20.3 Security Telemetry & Log Fundamentals */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    20.3 Security Telemetry & Logs
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Multi-Source Telemetry & Time Synchronization (NTP/UTC)</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">NIST SP 800-92 Compliance</span>
              </div>

              {/* Telemetry Sources Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: "Windows Endpoints", detail: "Security Event IDs (4624 logon, 4625 failed logon, 4688/Sysmon EID 1 process creation)." },
                  { name: "Linux Workloads", detail: "/var/log/auth.log, auditd system call logging, journald, SSH PAM authentication records." },
                  { name: "EDR Telemetry", detail: "Parent-child process trees, DLL injections, in-memory execution, behavioral anomaly alerts." },
                  { name: "Network Firewalls", detail: "Stateful permit/deny logs, TCP flags, NAT translations, egress perimeter policy hits." },
                  { name: "DNS & Web Proxies", detail: "Domain resolution queries (DGA detection), HTTP User-Agents, TLS SNI certificates." },
                  { name: "Identity & Cloud", detail: "Azure AD / Okta sign-ins, MFA challenges, AWS CloudTrail API calls, IAM role assumptions." },
                ].map((src, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-cyan-400 font-mono">{src.name}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{src.detail}</p>
                  </div>
                ))}
              </div>

              {/* Log Anatomy & NTP Callout */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> The Vital Role of Time Synchronization (UTC)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clock drift between domain controllers, firewalls, and cloud audit trails corrupts timeline reconstruction.
                  All log producers must synchronize via authenticated NTP to trusted stratum-1 time sources and serialize
                  timestamps in ISO 8601 UTC format (<code className="text-cyan-300">YYYY-MM-DDTHH:MM:SSZ</code>). Ingestion timestamp
                  must always be distinguished from event generation timestamp.
                </p>
              </div>
            </section>

            {/* 20.4 SIEM Architecture & Data Processing */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    20.4 SIEM Architecture
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Data Ingestion, Parsing, Normalization & SIEM vs EDR vs XDR vs SOAR</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">The 7-Stage Pipeline</span>
              </div>

              {/* 7-Stage Pipeline Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {[
                  { step: "1. Collection", desc: "Syslog-ng, Beats, Fluentbit, cloud pub/sub, Windows Event Forwarding (WEF)." },
                  { step: "2. Parsing", desc: "Regex, Grok filters, and JSON parsers extracting unstructured fields." },
                  { step: "3. Normalization", desc: "Mapping fields to common schemas (Elastic Common Schema ECS, OCSF)." },
                  { step: "4. Enrichment", desc: "Appending GeoIP, Asset Criticality, Threat Intel feeds, and User Context." },
                  { step: "5. Indexing", desc: "High-speed inverted index storage (Elasticsearch, OpenSearch, Azure Data Explorer)." },
                  { step: "6. Correlation", desc: "Evaluating multi-event temporal rules across distinct data streams." },
                  { step: "7. Alert & Action", desc: "Dispatching alerts to SOC queues or triggering SOAR automation playbooks." },
                ].map((stage, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <span className="font-bold text-emerald-400 font-mono">{stage.step}</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{stage.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technology Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-slate-900 text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-800 font-mono">
                    <tr>
                      <th className="py-2.5 px-4">Technology</th>
                      <th className="py-2.5 px-4">Primary Operational Focus</th>
                      <th className="py-2.5 px-4">Example Investigative Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70 text-slate-300">
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-2.5 px-4 font-mono font-bold text-cyan-400">SIEM</td>
                      <td className="py-2.5 px-4">Centralized log aggregation, long-term retention, cross-domain correlation.</td>
                      <td className="py-2.5 px-4 text-slate-400">Correlate VPN failed logins with cloud admin role alteration.</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-2.5 px-4 font-mono font-bold text-amber-400">EDR</td>
                      <td className="py-2.5 px-4">Real-time endpoint behavioral monitoring, in-memory analysis, host isolation.</td>
                      <td className="py-2.5 px-4 text-slate-400">Trace malicious PowerShell spawned by Microsoft Word and isolate host.</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-2.5 px-4 font-mono font-bold text-purple-400">XDR</td>
                      <td className="py-2.5 px-4">Native pre-correlated telemetry spanning endpoint, identity, cloud, and email.</td>
                      <td className="py-2.5 px-4 text-slate-400">Connect a phishing email click directly to process execution and token theft.</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50">
                      <td className="py-2.5 px-4 font-mono font-bold text-emerald-400">SOAR</td>
                      <td className="py-2.5 px-4">Security orchestration, automated playbooks, API response dispatch.</td>
                      <td className="py-2.5 px-4 text-slate-400">Automatically isolate workstation, reset AD password, and create ticket.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 20.5 Detection Engineering & Correlation Rules */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    20.5 Detection Engineering
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Rule Anatomy, Sigma Format & Operational SOC Metrics</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">Precision, Recall & MTTD/MTTR</span>
              </div>

              {/* Detection Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-slate-400 block font-mono text-[11px]">True Positive Rate</span>
                  <span className="text-base font-bold text-emerald-400 mt-1 block">Precision</span>
                  <span className="text-[10px] text-slate-500">TP / (TP + FP)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-slate-400 block font-mono text-[11px]">Detection Coverage</span>
                  <span className="text-base font-bold text-cyan-400 mt-1 block">Recall</span>
                  <span className="text-[10px] text-slate-500">TP / (TP + FN)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-slate-400 block font-mono text-[11px]">Detection Speed</span>
                  <span className="text-base font-bold text-amber-400 mt-1 block">MTTD</span>
                  <span className="text-[10px] text-slate-500">Mean Time to Detect</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-slate-400 block font-mono text-[11px]">Response Speed</span>
                  <span className="text-base font-bold text-rose-400 mt-1 block">MTTR</span>
                  <span className="text-[10px] text-slate-500">Mean Time to Respond</span>
                </div>
              </div>

              {/* Sigma Rule Example Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-cyan-400 font-bold">Standard Sigma Rule: Office Application Spawning Script Interpreter</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `title: Office Spawning Script Interpreter\nid: 3f8e9102-4b2a-4a11-89ab-910283cde401\nstatus: production\nlogsource:\n    category: process_creation\n    product: windows\ndetection:\n    selection:\n        ParentImage|endswith:\n            - '\\WINWORD.EXE'\n            - '\\EXCEL.EXE'\n        Image|endswith:\n            - '\\cmd.exe'\n            - '\\powershell.exe'\n            - '\\wscript.exe'\n    condition: selection\nlevel: high\ntags:\n    - attack.execution\n    - attack.t1059.001`,
                        "sigma-office"
                      )
                    }
                    className="hover:text-white flex items-center gap-1"
                  >
                    {copiedCodeId === "sigma-office" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copy Sigma</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-slate-200 bg-slate-900/80 p-3 rounded-lg overflow-x-auto">
{`title: Office Spawning Script Interpreter
id: 3f8e9102-4b2a-4a11-89ab-910283cde401
status: production
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        ParentImage|endswith:
            - '\\WINWORD.EXE'
            - '\\EXCEL.EXE'
        Image|endswith:
            - '\\cmd.exe'
            - '\\powershell.exe'
            - '\\wscript.exe'
    condition: selection
level: high
tags:
    - attack.execution
    - attack.t1059.001`}
                </pre>
              </div>
            </section>

            {/* 20.8 Incident Response: Preparation to Recovery */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    20.8 Incident Response Lifecycle
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">NIST SP 800-61r3 / CISA Incident Handling Framework</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">6-Phase Execution Model</span>
              </div>

              {/* 6-Phase Lifecycle Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    step: "1. Preparation",
                    desc: "IR playbooks, call trees, offline communication channels, pre-deployed EDR agents, jump bags, and tabletop drills.",
                    color: "border-blue-500/30 text-blue-400",
                  },
                  {
                    step: "2. Detection & Analysis",
                    desc: "Triaging alerts, validating scope, distinguishing true positives from benign noise, preserving initial memory.",
                    color: "border-cyan-500/30 text-cyan-400",
                  },
                  {
                    step: "3. Containment",
                    desc: "Host network isolation, disabling compromised credentials, revoking refresh tokens, blocking adversary egress IPs.",
                    color: "border-amber-500/30 text-amber-400",
                  },
                  {
                    step: "4. Eradication",
                    desc: "Purging persistence mechanisms (scheduled tasks, registry Run keys), closing vulnerability vectors, patching systems.",
                    color: "border-orange-500/30 text-orange-400",
                  },
                  {
                    step: "5. Recovery",
                    desc: "Restoring validated clean backups, rotating all Kerberos KRBTGT & admin passwords, monitored phased reintegration.",
                    color: "border-emerald-500/30 text-emerald-400",
                  },
                  {
                    step: "6. Post-Incident Improvement",
                    desc: "Conducting blameless Post-Mortem, tuning detection rules to eliminate blind spots, updating playbooks.",
                    color: "border-purple-500/30 text-purple-400",
                  },
                ].map((phase, idx) => (
                  <div key={idx} className={`p-4 rounded-xl bg-slate-950 border ${phase.color} space-y-2`}>
                    <span className="text-xs font-bold uppercase tracking-wider">{phase.step}</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 20.9 Digital Forensics Fundamentals */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    20.9 Digital Forensics Fundamentals
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Foundational Principles, Order of Volatility & Chain of Custody</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">NIST SP 800-86 Standards</span>
              </div>

              {/* 4 Foundational Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="font-bold text-cyan-400 font-mono">1. Integrity</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Evidence remains untampered; verified via cryptographic SHA-256 hash comparison against master copy.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="font-bold text-emerald-400 font-mono">2. Provenance</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Unbroken documentation recording exact device source, serial number, collector identity, and timestamp.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="font-bold text-amber-400 font-mono">3. Reproducibility</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Independent qualified forensic examiners must achieve identical results using documented tools and methods.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="font-bold text-purple-400 font-mono">4. Objectivity</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Conclusions must be strictly grounded in empirical forensic artifacts, clearly highlighting contradictory facts.
                  </p>
                </div>
              </div>

              {/* Order of Volatility (RFC 3227) */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 font-mono">
                  <Flame className="w-4 h-4" /> Order of Volatility: From Most Volatile to Least Volatile (RFC 3227)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded bg-rose-950/40 border border-rose-800 text-rose-300">
                    <span className="font-bold block">1. CPU & Registers</span>
                    <span className="text-[10px] opacity-80">Nanoseconds</span>
                  </div>
                  <div className="p-2.5 rounded bg-amber-950/40 border border-amber-800 text-amber-300">
                    <span className="font-bold block">2. RAM & Routing</span>
                    <span className="text-[10px] opacity-80">Lost on power-off</span>
                  </div>
                  <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800 text-blue-300">
                    <span className="font-bold block">3. Temp Filesystem</span>
                    <span className="text-[10px] opacity-80">Lost on reboot</span>
                  </div>
                  <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-800 text-cyan-300">
                    <span className="font-bold block">4. Non-Volatile Disk</span>
                    <span className="text-[10px] opacity-80">Persists indefinitely</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                    <span className="font-bold block">5. Remote Log Stores</span>
                    <span className="text-[10px] opacity-80">Archived offsite</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 20.11 Evidence Handling Checklist & Incident Report Structure */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    20.11 Evidence Handling
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Interactive Evidence Checklist & Professional Incident Report</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">Chain of Custody Protocol</span>
              </div>

              {/* Checklist */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Evidence-Handling Checklist ({checkedCount} / 8 Completed)
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const text = evidenceChecklist
                        .map((item, idx) => `[${checkedChecklistItems[idx] ? "X" : " "}] Step ${idx + 1}: ${item}`)
                        .join("\n");
                      copyToClipboard(text, "evidence-chk");
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-slate-800 hover:text-white text-xs text-slate-400 transition"
                  >
                    {copiedCodeId === "evidence-chk" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Checklist</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {evidenceChecklist.map((item, idx) => {
                    const isChecked = !!checkedChecklistItems[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleChecklistItem(idx)}
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg border transition cursor-pointer ${
                          isChecked
                            ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-200"
                            : "bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <div className="mt-0.5">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                        <span className="text-xs leading-relaxed">
                          <strong className="text-cyan-400 mr-1.5">{idx + 1}.</strong>
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 20.12 Practical Lab */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    20.12 Practical Defensive Lab
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">SOC Investigation Workbench & Forensic Evidence Recorder</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">Exercises A, B, C & D</span>
              </div>

              {/* Lab Evidence Input Form */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Fingerprint className="w-4 h-4" /> Exercise C: Forensic Evidence Record Generator (Case SOC-020-001)
                  </h4>
                  <button
                    onClick={() => {
                      const doc = `PREPSPACES DIGITAL FORENSICS & INCIDENT RESPONSE LEDGER\nCase ID: ${forensicRecord.caseId}\nTimestamp (UTC): ${forensicRecord.timestampUtc}\nSource: ${forensicRecord.evidenceSource}\nCollector: ${forensicRecord.collector}\nHash Algorithm: ${forensicRecord.hashAlgorithm}\nCryptographic Digest: ${forensicRecord.calculatedHash}\nMethod: ${forensicRecord.acquisitionMethod}\n\nObserved Findings:\n${forensicRecord.observedFindings}\n\nLimitations & Uncertainty:\n${forensicRecord.limitations}\n\nRecommended Action:\n${forensicRecord.recommendedAction}`;
                      copyToClipboard(doc, "lab-evidence");
                      setCopiedForensicRecord(true);
                      setTimeout(() => setCopiedForensicRecord(false), 2000);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-medium hover:bg-emerald-500/20 transition"
                  >
                    {copiedForensicRecord ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Forensic Record</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Case Identifier:</label>
                    <input
                      type="text"
                      value={forensicRecord.caseId}
                      onChange={(e) => setForensicRecord({ ...forensicRecord, caseId: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-cyan-300 font-mono focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">SHA-256 Digest:</label>
                    <input
                      type="text"
                      value={forensicRecord.calculatedHash}
                      onChange={(e) => setForensicRecord({ ...forensicRecord, calculatedHash: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-cyan-300 font-mono text-[11px] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <label className="text-slate-400 block">Observed Findings & Timeline Context:</label>
                  <textarea
                    value={forensicRecord.observedFindings}
                    onChange={(e) => setForensicRecord({ ...forensicRecord, observedFindings: e.target.value })}
                    rows={2}
                    className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-slate-200 font-mono focus:outline-none"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="text-slate-400 block">Recommended Containment Actions:</label>
                  <textarea
                    value={forensicRecord.recommendedAction}
                    onChange={(e) => setForensicRecord({ ...forensicRecord, recommendedAction: e.target.value })}
                    rows={2}
                    className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-emerald-300 font-mono focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* 20.14 Official References */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                20.14 Authoritative References & Standards
              </span>
              <h3 className="text-xl font-bold text-white">Government & Industry Primary Guidance</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {[
                  {
                    title: "NIST SP 800-61 Rev. 3",
                    org: "NIST CSRC",
                    url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
                    desc: "Incident Response Recommendations and Considerations for Cybersecurity Risk Management.",
                  },
                  {
                    title: "NIST SP 800-86",
                    org: "NIST CSRC",
                    url: "https://csrc.nist.gov/pubs/sp/800/86/final",
                    desc: "Guide to Integrating Forensic Techniques into Incident Response.",
                  },
                  {
                    title: "NIST SP 800-92",
                    org: "NIST CSRC",
                    url: "https://csrc.nist.gov/pubs/sp/800/92/final",
                    desc: "Guide to Computer Security Log Management across Enterprise Infrastructures.",
                  },
                  {
                    title: "CISA Incident Response Playbooks",
                    org: "CISA / US-CERT",
                    url: "https://www.cisa.gov/resources-tools/resources/federal-government-cybersecurity-incident-and-vulnerability-response-playbooks",
                    desc: "Standardized federal operating playbooks for incident response and vulnerability containment.",
                  },
                  {
                    title: "MITRE ATT&CK Matrix",
                    org: "MITRE Corporation",
                    url: "https://attack.mitre.org/",
                    desc: "Adversary tactics, techniques, and procedures (TTPs) mapping SOC detection telemetry.",
                  },
                  {
                    title: "Sigma HQ Detection Format",
                    org: "SigmaHQ Project",
                    url: "https://sigmahq.io/",
                    desc: "Universal, vendor-agnostic signature format for SIEM and log detection engineering.",
                  },
                ].map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition group block"
                  >
                    <div className="flex items-center justify-between text-cyan-400 font-bold">
                      <span>{ref.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-0.5">{ref.org}</div>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{ref.desc}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* 20.15 Key Takeaways */}
            <section className="bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                20.15 Strategic Summary
              </span>
              <h3 className="text-xl font-bold text-white">Key Takeaways for Defensive Practitioners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Telemetry Correlation:</strong> No single log source provides complete visibility. Correlating identity, endpoint, network, and cloud logs exposes multi-stage intrusion paths.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Detection Precision:</strong> High alert volume generates analyst burnout. Tune correlation thresholds and enrich alerts with asset criticality and user privileges.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Volatile Evidence First:</strong> Acquire RAM, active network sockets, and running process states before severing power or initiating disruptive system reboots.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Defensible Reporting:</strong> Clearly differentiate confirmed empirical facts from analytical hypotheses; maintain rigorous chain-of-custody ledgers.
                  </span>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: SIMULATOR 1 - SIEM LOG AGGREGATION & QUERY WORKBENCH        */}
        {/* ================================================================== */}
        {activeTab === "siem-sim" && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    SOC Defensive Simulator 1
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">SIEM Log Aggregation, Normalization & Query Engine</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Telemetry Stream:</span>
                  <select
                    value={selectedLogFilter}
                    onChange={(e) => setSelectedLogFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-700 text-xs text-cyan-300 rounded px-2.5 py-1.5 focus:outline-none"
                  >
                    <option value="all">All Sources (Identity, Endpoint, Network, Cloud)</option>
                    <option value="identity">Identity Logs (Okta / AzureAD)</option>
                    <option value="endpoint">Endpoint Telemetry (Sysmon / EDR)</option>
                    <option value="network">Network (DNS / Perimeter Firewall)</option>
                    <option value="cloud">Cloud Audit (AWS CloudTrail)</option>
                  </select>
                </div>
              </div>

              {/* Search Bar */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 mb-4 flex items-center gap-3">
                <Search className="w-4 h-4 text-slate-500 shrink-0" />
                <input
                  type="text"
                  value={siemSearchQuery}
                  onChange={(e) => setSiemSearchQuery(e.target.value)}
                  placeholder="e.g. event.type == 'authentication' AND event.action == 'failure' OR user == 'admin02'"
                  className="bg-transparent text-xs text-cyan-300 font-mono w-full focus:outline-none"
                />
                <button
                  onClick={() => setSiemSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900"
                >
                  Clear
                </button>
              </div>

              {/* Log Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-2.5">Time (UTC)</th>
                      <th className="p-2.5">Source / Host</th>
                      <th className="p-2.5">User / Actor</th>
                      <th className="p-2.5">Event Type</th>
                      <th className="p-2.5">Action</th>
                      <th className="p-2.5">Normalized Evidence Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-900/50 transition">
                        <td className="p-2.5 text-cyan-400 font-bold">{log.timestamp.split("T")[1].replace("Z", "")}</td>
                        <td className="p-2.5 text-slate-300">
                          <span className="block text-white font-bold">{log.sourceSystem}</span>
                          <span className="text-[10px] text-slate-500">{log.host || log.sourceIp}</span>
                        </td>
                        <td className="p-2.5 text-slate-200">{log.user || "—"}</td>
                        <td className="p-2.5">
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[10px]">
                            {log.eventType}
                          </span>
                        </td>
                        <td className="p-2.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              log.action === "failure" || log.action === "alert_trigger"
                                ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                : log.action === "success"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                            }`}
                          >
                            {log.action}
                          </span>
                        </td>
                        <td className="p-2.5 text-slate-400 font-sans text-xs">{log.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Selected Raw Log JSON Inspection */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  SIEM Normalized Event Schema (ECS / OCSF Sample)
                </span>
                <pre className="text-xs font-mono text-emerald-300 bg-slate-900 p-3 rounded overflow-x-auto">
{`{
  "@timestamp": "2026-10-15T09:14:02.000Z",
  "event": {
    "category": "authentication",
    "type": "login",
    "action": "success",
    "outcome": "success",
    "id": "AUTH-1001"
  },
  "user": { "name": "admin02", "roles": ["GlobalAdministrator"] },
  "source": { "ip": "192.0.2.40", "as": { "organization": { "name": "Unknown Hosting ASN" } } },
  "host": { "hostname": "vpn.prepspaces.local" }
}`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: SIMULATOR 2 - DETECTION ENGINEERING & CORRELATION ENGINE    */}
        {/* ================================================================== */}
        {activeTab === "detection-sim" && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    SOC Defensive Simulator 2
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Detection Engineering & Multi-Event Correlation Engine</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Test Ingestion Scenario:</span>
                  <select
                    value={testDatasetType}
                    onChange={(e) => setTestDatasetType(e.target.value)}
                    className="bg-slate-950 border border-slate-700 text-xs text-amber-300 rounded px-2.5 py-1.5 focus:outline-none"
                  >
                    <option value="brute_then_success">Attack Scenario: 6 Failed Logins + Instant Success (admin02)</option>
                    <option value="benign_typo">Benign Noise: 2 Failed Logins + Success (dev_user09)</option>
                    <option value="admin_batch">Service Account: 12 Failed Logins + No Success (backup_service)</option>
                  </select>
                </div>
              </div>

              {/* Rule Parameters Control Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 font-bold">Failure Threshold:</span>
                    <span className="text-cyan-400 font-bold">&gt;= {detectionThreshold} failures</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={10}
                    value={detectionThreshold}
                    onChange={(e) => setDetectionThreshold(Number(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <p className="text-[11px] text-slate-500">
                    Higher thresholds decrease false positives from typos but increase dwell time for stealth sprays.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 font-bold">Time Window:</span>
                    <span className="text-cyan-400 font-bold">{timeWindowMins} Minutes</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    step={5}
                    value={timeWindowMins}
                    onChange={(e) => setTimeWindowMins(Number(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <p className="text-[11px] text-slate-500">
                    Sliding temporal correlation window across authentication logs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      checked={requirePrivilegeMatch}
                      onChange={(e) => setRequirePrivilegeMatch(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-cyan-500"
                    />
                    <span>Enrich with Privileged Account Context</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Prioritizes Domain Admin / Cloud Global Admin identities to minimize operational noise.
                  </p>
                </div>
              </div>

              {/* Correlation Engine Evaluation Output */}
              <div
                className={`p-5 rounded-xl border space-y-3 ${
                  correlationResult.triggered
                    ? "bg-rose-950/30 border-rose-800/80"
                    : "bg-slate-950 border-slate-800"
                }`}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    {correlationResult.triggered ? (
                      <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    <span className="text-sm font-bold text-white font-mono">{correlationResult.ruleName}</span>
                  </div>
                  <span
                    className={`text-xs font-bold font-mono px-2.5 py-1 rounded ${
                      correlationResult.triggered ? "bg-rose-500/20 text-rose-300" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {correlationResult.verdict}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Failures Evaluated</span>
                    <span className="text-white font-bold">{correlationResult.failuresObserved} Events</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Target Identity</span>
                    <span className="text-cyan-400 font-bold">{correlationResult.targetAccount}</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Rule Severity</span>
                    <span className="text-rose-400 font-bold">{correlationResult.severity}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                  <strong>Analytical Context: </strong>
                  {correlationResult.explanation}
                </p>

                {correlationResult.triggered && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 font-sans flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      <strong>SOAR Playbook Dispatch: </strong>
                      {correlationResult.recommendedAction}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: SIMULATOR 3 - INCIDENT RESPONSE & CONTAINMENT WORKBENCH     */}
        {/* ================================================================== */}
        {activeTab === "ir-sim" && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    SOC Defensive Simulator 3
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Incident Response Lifecycle & Containment Matrix</h3>
                </div>
                <div className="text-xs font-mono text-cyan-400">
                  Containment Effectiveness: <strong className="text-white">{irScore}%</strong>
                </div>
              </div>

              {/* IR Phase Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
                {[
                  { step: 1, name: "1. Preparation" },
                  { step: 2, name: "2. Detection" },
                  { step: 3, name: "3. Containment" },
                  { step: 4, name: "4. Eradication" },
                  { step: 5, name: "5. Recovery" },
                  { step: 6, name: "6. Lessons Learned" },
                ].map((phase) => (
                  <button
                    key={phase.step}
                    onClick={() => setIrPhase(phase.step)}
                    className={`p-2.5 rounded-lg border text-xs font-mono font-bold transition text-center ${
                      irPhase === phase.step
                        ? "bg-cyan-500 text-slate-950 border-cyan-400"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {phase.name}
                  </button>
                ))}
              </div>

              {/* Active Containment Controls */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> Live Containment Actions (Target: WS-014 & admin02)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div
                    onClick={() => setIsMemoryPreserved(!isMemoryPreserved)}
                    className={`p-3 rounded-lg border cursor-pointer transition flex items-center justify-between ${
                      isMemoryPreserved
                        ? "bg-purple-950/40 border-purple-600 text-purple-200"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">1. Capture Volatile RAM (WinPmem)</div>
                      <div className="text-[11px] opacity-80">Preserves injected code and C2 sockets before host disconnect</div>
                    </div>
                    {isMemoryPreserved ? <Check className="w-4 h-4 text-purple-400" /> : <PlusCircle className="w-4 h-4" />}
                  </div>

                  <div
                    onClick={() => setIsHostIsolated(!isHostIsolated)}
                    className={`p-3 rounded-lg border cursor-pointer transition flex items-center justify-between ${
                      isHostIsolated
                        ? "bg-emerald-950/40 border-emerald-600 text-emerald-200"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">2. EDR Host Network Isolation (WS-014)</div>
                      <div className="text-[11px] opacity-80">Severs all east-west and egress traffic; maintains EDR tunnel only</div>
                    </div>
                    {isHostIsolated ? <Check className="w-4 h-4 text-emerald-400" /> : <PlusCircle className="w-4 h-4" />}
                  </div>

                  <div
                    onClick={() => setIsTokenRevoked(!isTokenRevoked)}
                    className={`p-3 rounded-lg border cursor-pointer transition flex items-center justify-between ${
                      isTokenRevoked
                        ? "bg-emerald-950/40 border-emerald-600 text-emerald-200"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">3. Invalidate Cloud & VPN Sessions (admin02)</div>
                      <div className="text-[11px] opacity-80">Revokes OAuth refresh tokens, terminates VPN sessions, resets MFA</div>
                    </div>
                    {isTokenRevoked ? <Check className="w-4 h-4 text-emerald-400" /> : <PlusCircle className="w-4 h-4" />}
                  </div>

                  <div
                    onClick={() => setIsEgressBlocked(!isEgressBlocked)}
                    className={`p-3 rounded-lg border cursor-pointer transition flex items-center justify-between ${
                      isEgressBlocked
                        ? "bg-emerald-950/40 border-emerald-600 text-emerald-200"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">4. Perimeter Firewall Blackhole (198.51.100.88)</div>
                      <div className="text-[11px] opacity-80">Blocks C2 beaconing across the entire enterprise perimeter</div>
                    </div>
                    {isEgressBlocked ? <Check className="w-4 h-4 text-emerald-400" /> : <PlusCircle className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-cyan-400 font-bold">[INCIDENT COMMANDER DIRECTIVE]</div>
                <div className="text-slate-300">
                  Target asset <strong className="text-white">WS-014</strong> status:{" "}
                  {isHostIsolated ? (
                    <span className="text-emerald-400 font-bold">QUARANTINED (Zero Lateral Movement Possible)</span>
                  ) : (
                    <span className="text-rose-400 font-bold">EXPOSED (Lateral movement active via SMB/RDP)</span>
                  )}
                </div>
                <div className="text-slate-400">
                  Volatile memory evidence:{" "}
                  {isMemoryPreserved ? (
                    <span className="text-emerald-400 font-bold">SECURED (SHA-256 Verified)</span>
                  ) : (
                    <span className="text-amber-400 font-bold">AT RISK (Reboot will destroy injected shellcode)</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: SIMULATOR 4 - DIGITAL FORENSICS & EVIDENCE INSPECTOR        */}
        {/* ================================================================== */}
        {activeTab === "forensics-sim" && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    SOC Defensive Simulator 4
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Digital Forensics Acquisition & Chain of Custody</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Forensic Artifact:</span>
                  <select
                    value={selectedArtifactType}
                    onChange={(e) => setSelectedArtifactType(e.target.value)}
                    className="bg-slate-950 border border-slate-700 text-xs text-purple-300 rounded px-2.5 py-1.5 focus:outline-none"
                  >
                    <option value="memory">Volatile RAM Dump (.raw - 16 GB)</option>
                    <option value="disk">Physical NVMe Disk Image (.E01 - 512 GB)</option>
                    <option value="registry">Offline Windows Registry Hives (SYSTEM/NTUSER)</option>
                  </select>
                </div>
              </div>

              {/* Artifact Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-500 uppercase font-mono">Evidence File Name</div>
                  <div className="text-xs font-bold text-white mt-1 truncate" title={activeForensicArtifact.name}>
                    {activeForensicArtifact.name}
                  </div>
                  <div className="text-[10px] text-cyan-400 mt-1">{activeForensicArtifact.size}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-500 uppercase font-mono">Acquisition Hardware/Tool</div>
                  <div className="text-xs font-bold text-emerald-400 mt-1">{activeForensicArtifact.acquisitionTool}</div>
                  <div className="text-[10px] text-slate-400 mt-1">Hardware Write-Blocker Verified</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-500 uppercase font-mono">SHA-256 Digest</div>
                  <div className="text-[10px] font-mono text-cyan-300 mt-1 truncate" title={activeForensicArtifact.sha256Original}>
                    {activeForensicArtifact.sha256Original.substring(0, 18)}...
                  </div>
                  <button
                    onClick={() => copyToClipboard(activeForensicArtifact.sha256Original, "forensic-hash")}
                    className="text-[10px] text-cyan-400 hover:underline mt-1 flex items-center gap-1"
                  >
                    {copiedCodeId === "forensic-hash" ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                    Copy Digest
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-500 uppercase font-mono">Integrity Status</div>
                  <div className="text-xs font-bold text-emerald-400 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{activeForensicArtifact.evidenceIntegrity}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Zero Bit-Level Drift</div>
                </div>
              </div>

              {/* Findings & Custody Chain */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Forensic Findings */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <Search className="w-4 h-4" /> Recovered Forensic Artifacts
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    {activeForensicArtifact.findings.map((f, idx) => (
                      <li key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chain of Custody Ledger */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-mono">
                    <History className="w-4 h-4" /> Tamper-Evident Chain of Custody Ledger
                  </h4>
                  <div className="space-y-2 text-xs font-mono">
                    {activeForensicArtifact.custodyEntries.map((c, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-cyan-400 font-bold">{c.time}</span>
                          <span className="text-slate-400">{c.actor}</span>
                        </div>
                        <p className="text-slate-300 font-sans text-xs">{c.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT QUIZ (Section 20.13)                   */}
        {/* ================================================================== */}
        {activeTab === "quiz" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-6 border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    20.13 Knowledge Assessment
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Module 20 Quiz: SIEM, IR & Digital Forensics</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-mono">
                    Progress: {Object.keys(quizAnswers).length} / 10 Answered
                  </span>
                  {quizSubmitted && (
                    <span
                      className={`text-sm font-bold font-mono ${
                        quizScore >= 8 ? "text-emerald-400" : "text-amber-400"
                      }`}
                    >
                      Score: {quizScore} / 10 ({Math.round((quizScore / 10) * 100)}%)
                    </span>
                  )}
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const selectedOpt = quizAnswers[q.id];
                  const isSubmitted = quizSubmitted;
                  const isCorrect = selectedOpt === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-xl border transition ${
                        isSubmitted
                          ? isCorrect
                            ? "bg-emerald-950/20 border-emerald-800/60"
                            : "bg-rose-950/20 border-rose-800/60"
                          : "bg-slate-950 border-slate-800/80"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className="text-xs font-bold text-cyan-400 font-mono">Question {idx + 1} of 10</span>
                        {isSubmitted && (
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded ${
                              isCorrect ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                            }`}
                          >
                            {isCorrect ? "Correct" : "Incorrect"}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-white mb-4 leading-relaxed">{q.question}</p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOpt === optIdx;
                          let optionClass = "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700";

                          if (isSubmitted) {
                            if (optIdx === q.correctAnswer) {
                              optionClass = "bg-emerald-900/40 border-emerald-500 text-emerald-200 font-semibold";
                            } else if (isOptionSelected) {
                              optionClass = "bg-rose-900/40 border-rose-500 text-rose-200";
                            } else {
                              optionClass = "bg-slate-900/40 border-slate-800/60 text-slate-500 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            optionClass = "bg-cyan-950/40 border-cyan-500 text-cyan-200 font-medium";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleQuizSelect(q.id, optIdx)}
                              disabled={isSubmitted}
                              className={`w-full text-left p-3 rounded-lg border text-xs transition flex items-center justify-between ${optionClass}`}
                            >
                              <span>{opt}</span>
                              {isOptionSelected && !isSubmitted && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                            </button>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <div className="mt-3 pt-3 border-t border-slate-800/60 text-xs text-slate-400 leading-relaxed font-sans">
                          <strong className="text-slate-300">Explanation: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit / Reset Actions */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Answers</span>
                </button>

                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < 10 || quizSubmitted}
                  className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-500/20"
                >
                  Submit Final Answers ({Object.keys(quizAnswers).length}/10)
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        initialContext="Cybersecurity Master Course - Module 20: Security Monitoring, SIEM, Incident Response, and Digital Forensics Fundamentals. Ask me about multi-source log correlation, Sigma rules, NIST SP 800-61 containment playbooks, Order of Volatility (RFC 3227), or forensic chain of custody."
      />
    </div>
  );
}
