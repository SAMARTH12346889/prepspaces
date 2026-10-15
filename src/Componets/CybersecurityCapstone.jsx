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
  ExternalLink,
  Eye,
  FileText,
  Key,
  Database,
  Search,
  AlertCircle,
  Filter,
  ShieldAlert,
  Target,
  Crosshair,
  UserCheck,
  UserX,
  Flame,
  Download,
  Radio,
  TrendingUp,
  GitBranch,
  Bug,
  Code2,
  CheckCircle,
  XCircle,
  BarChart3,
  Share2,
  FileCheck,
  Users,
  Swords,
  Radar,
  Binary,
  ClipboardList,
  CheckSquare,
  Square,
  FileSpreadsheet,
  AlertOctagon,
  History,
  ShieldX,
  BadgeAlert,
  CheckCheck,
  PlusCircle,
  Trash2,
  Split,
  FolderGit2,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 24 (FINAL CAPSTONE)         */
/* Assess, Document, Secure, Retest, and Defend a Complete Lab Environment    */
/* Standards: NIST SP 800-115, NIST CSF 2.0, NIST SP 800-61, CIS, OWASP ASVS  */
/* -------------------------------------------------------------------------- */

export default function CybersecurityCapstone() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'threat-sim' | 'register-sim' | 'hardening-sim' | 'tabletop-sim' | 'quiz'

  // Copied states
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SECTION 24.8.2 INTERACTIVE FINDINGS REGISTER STATE                         */
  /* -------------------------------------------------------------------------- */
  const [findingsRegister, setFindingsRegister] = useState([
    {
      id: "CAP-001",
      title: "Missing object-level authorization on API records",
      priority: "High",
      status: "Open",
      owner: "API Engineering",
      asset: "AST-02 (Application API)",
    },
    {
      id: "CAP-002",
      title: "Unnecessary service privileges (root daemon execution)",
      priority: "High",
      status: "Open",
      owner: "Platform Engineering",
      asset: "AST-04 (Linux Host)",
    },
    {
      id: "CAP-003",
      title: "Incomplete security event collection in forwarding pipeline",
      priority: "Medium",
      status: "Open",
      owner: "SecOps / Monitoring",
      asset: "AST-06 (Monitoring)",
    },
    {
      id: "CAP-004",
      title: "Inadequate input validation on search route",
      priority: "High",
      status: "Open",
      owner: "Web Dev Team",
      asset: "AST-01 (Web App)",
    },
    {
      id: "CAP-005",
      title: "Unnecessary exposed database port on public interface",
      priority: "Medium",
      status: "Open",
      owner: "Cloud Ops",
      asset: "AST-03 (Database)",
    },
    {
      id: "CAP-006",
      title: "Missing detection rule for rapid failed authentications",
      priority: "Medium",
      status: "Open",
      owner: "Detection Eng",
      asset: "AST-06 (Monitoring)",
    },
  ]);

  const addFinding = () => {
    const nextNum = findingsRegister.length + 1;
    const newId = `CAP-${String(nextNum).padStart(3, "0")}`;
    setFindingsRegister((prev) => [
      ...prev,
      {
        id: newId,
        title: "New identified security weakness",
        priority: "Medium",
        status: "Open",
        owner: "Assigned Engineer",
        asset: "AST-01 (Web App)",
      },
    ]);
  };

  const removeFinding = (id) => {
    setFindingsRegister((prev) => prev.filter((f) => f.id !== id));
  };

  const updateFinding = (id, field, value) => {
    setFindingsRegister((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  const findingsRegisterText = useMemo(() => {
    return `# Northstar Learning Systems — Master Findings Register
Total Findings: ${findingsRegister.length}

${findingsRegister
  .map(
    (f) =>
      `[${f.id}] ${f.title}
- Priority: ${f.priority} | Status: ${f.status}
- Affected Asset: ${f.asset}
- Accountable Owner: ${f.owner}`
  )
  .join("\n\n")}`;
  }, [findingsRegister]);

  /* -------------------------------------------------------------------------- */
  /* SECTION 24.10.3 DETECTION VALIDATION WORKSHEET STATE                       */
  /* -------------------------------------------------------------------------- */
  const [detectionObjective, setDetectionObjective] = useState("Repeated failed logins");
  const [detectionEventSource, setDetectionEventSource] = useState("Synthetic authentication logs (Linux /var/log/auth.log)");
  const [detectionExpectedResult, setDetectionExpectedResult] = useState("An alert identifies the test account, event count (>=5), and time window (<1m)");
  const [detectionObservedResult, setDetectionObservedResult] = useState("Alert fired in SIEM within 12 seconds with account, IP, and event count tagged.");
  const [detectionStatus, setDetectionStatus] = useState("pass"); // 'pass' | 'fail' | 'partial' | 'not_run'
  const [detectionGap, setDetectionGap] = useState("None observed. Forwarding and Sigma correlation rule validated.");

  const detectionRecordText = useMemo(() => {
    const statusMap = {
      pass: "Pass — expected behavior confirmed",
      fail: "Fail — expected behavior not confirmed",
      partial: "Partial — some requirements passed",
      not_run: "Not run yet",
    };
    return `### Detection Validation Record: ${detectionObjective}
- Event Source: ${detectionEventSource}
- Expected Result: ${detectionExpectedResult}
- Observed Result: ${detectionObservedResult}
- Validation Status: ${statusMap[detectionStatus]}
- Gap & Corrective Action: ${detectionGap}`;
  }, [detectionObjective, detectionEventSource, detectionExpectedResult, detectionObservedResult, detectionStatus, detectionGap]);

  /* -------------------------------------------------------------------------- */
  /* SECTION 24.12 INCIDENT RESPONSE RECORD STATE                               */
  /* -------------------------------------------------------------------------- */
  const [incidentAssessment, setIncidentAssessment] = useState("confirmed"); // 'investigation' | 'confirmed' | 'benign' | 'inconclusive'
  const [incidentContainment, setIncidentContainment] = useState("Restrict the synthetic test account within the lab and invalidate active session tokens");
  const [incidentEvidence, setIncidentEvidence] = useState("Preserve relevant application and authentication logs, API gateway request traces, and DB audit records");
  const [incidentEscalation, setIncidentEscalation] = useState("Notify the designated lab supervisor and document the containment milestone in incident ticketing");
  const [incidentLesson, setIncidentLesson] = useState("Correlate denied access and modification attempts in the monitoring workflow to detect early authorization probing");

  const incidentRecordText = useMemo(() => {
    const assessMap = {
      investigation: "Under investigation",
      confirmed: "Confirmed within lab",
      benign: "Benign or false positive",
      inconclusive: "Inconclusive",
    };
    return `### Northstar Lab Incident Response Decision Record
- Current Assessment: ${assessMap[incidentAssessment]}
- Immediate Containment Action: ${incidentContainment}
- Evidence Preserved: ${incidentEvidence}
- Communication & Escalation: ${incidentEscalation}
- Lessons Learned & Improvements: ${incidentLesson}`;
  }, [incidentAssessment, incidentContainment, incidentEvidence, incidentEscalation, incidentLesson]);

  /* -------------------------------------------------------------------------- */
  /* SECTION 24.14 CAPSTONE FINAL REPORT BUILDER                                */
  /* -------------------------------------------------------------------------- */
  const [reportTitle, setReportTitle] = useState("Northstar Learning Systems — Final Cybersecurity Assessment & Defense Report");
  const [reportScope, setReportScope] = useState("Isolated training application, API, Linux host, database, and monitoring pipeline");
  const [reportExecutiveSummary, setReportExecutiveSummary] = useState("An end-to-end security assessment was conducted against the Northstar Learning Systems lab. Initial testing identified 6 primary weaknesses including broken object-level authorization (CAP-001) and excessive host privileges (CAP-002). Systemic remediation was implemented across application middleware, host firewalls, and least-privilege configurations. Retesting confirmed 5 findings resolved and 1 partially resolved, with active defensive monitoring catching subsequent simulated attacks.");
  const [reportValidatedFindings, setReportValidatedFindings] = useState("CAP-001 (BOLA on /api/v1/projects), CAP-002 (Root daemon), CAP-003 (Log pipeline drop), CAP-004 (Input reflection), CAP-005 (Exposed DB 5432), CAP-006 (Missing failed login Sigma rule)");
  const [reportRemediationPerformed, setReportRemediationPerformed] = useState("Enforced server-side object ownership checks; migrated service daemons to non-privileged 'svc-app' user; bound PostgreSQL strictly to 127.0.0.1; configured UFW host firewall; deployed Sigma rule for failed login thresholds.");
  const [reportRetestResults, setReportRetestResults] = useState("5 findings Resolved, 1 Partially Resolved. Verified zero regression in authorized learner workflows.");
  const [reportLimitations, setReportLimitations] = useState("Only the documented lab components and test cases were assessed. Results do not establish the security of other systems or all possible attack paths.");

  const capstoneFinalReportText = useMemo(() => {
    return `# ${reportTitle}
Organization: Northstar Learning Systems
Assessment Date: October 2026 | Classification: Confidential

## 1. Scope and Environment
${reportScope}

## 2. Executive Summary — Key Results
${reportExecutiveSummary}

## 3. Validated Findings Summary
${reportValidatedFindings}

## 4. Remediation Engineering Performed
${reportRemediationPerformed}

## 5. Retest Verification & Remaining Risks
${reportRetestResults}

## 6. Assessment Limitations & Disclosures
${reportLimitations}`;
  }, [reportTitle, reportScope, reportExecutiveSummary, reportValidatedFindings, reportRemediationPerformed, reportRetestResults, reportLimitations]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: LAB ARCHITECTURE & STRIDE THREAT MODEL EXPLORER               */
  /* -------------------------------------------------------------------------- */
  const [selectedComponent, setSelectedComponent] = useState("api"); // 'web' | 'api' | 'db' | 'host' | 'monitoring'

  const componentsData = {
    web: {
      name: "AST-01: Web Application",
      tech: "Node.js / React Frontend Container",
      strideThreats: [
        { threat: "Spoofing", desc: "Forged session cookies or weak token validation.", mitigation: "HttpOnly, Secure, SameSite=Strict cookies with cryptographic signatures." },
        { threat: "Tampering", desc: "Parameter tampering on learner profile forms.", mitigation: "Server-side schema validation and business logic constraints." },
        { threat: "Information Disclosure", desc: "Detailed stack traces and framework banners in HTTP 500.", mitigation: "Generic user error responses; sanitized log diagnostics." },
      ],
    },
    api: {
      name: "AST-02: Application API",
      tech: "REST API Gateway (/api/v1/projects)",
      strideThreats: [
        { threat: "Elevation of Privilege", desc: "Standard learner performs administrator actions.", mitigation: "Role-Based Access Control (RBAC) enforced in route middleware." },
        { threat: "Tampering (BOLA)", desc: "Changing project ID parameter in PUT request modifies another user's project.", mitigation: "Enforce object ownership checks binding requesting user_id to project record." },
        { threat: "Repudiation", desc: "Sensitive record deletion without audit trail.", mitigation: "Immutable audit logging capturing user, timestamp, and action." },
      ],
    },
    db: {
      name: "AST-03: PostgreSQL Database",
      tech: "PostgreSQL 16 on private network interface",
      strideThreats: [
        { threat: "Information Disclosure", desc: "Database listening on 0.0.0.0 accessible from foreign hosts.", mitigation: "Bind to 127.0.0.1; enforce host firewall rules and TLS connections." },
        { threat: "Tampering (SQLi)", desc: "Direct SQL concatenation in dynamic search queries.", mitigation: "Mandatory parameterized queries / prepared statements." },
        { threat: "Elevation of Privilege", desc: "Application connects using postgres superuser account.", mitigation: "Create dedicated 'northstar_app' role with least-privilege DML only." },
      ],
    },
    host: {
      name: "AST-04: Linux Service Host",
      tech: "Ubuntu Linux 24.04 LTS",
      strideThreats: [
        { threat: "Elevation of Privilege", desc: "Container escape or sudo misconfiguration allows root compromise.", mitigation: "Run containers with non-root UID; drop CAP_SYS_ADMIN; audit sudoers." },
        { threat: "Denial of Service", desc: "Unrestricted resource consumption crashing the host OS.", mitigation: "cgroups resource limits (CPU/Memory caps) per container." },
      ],
    },
    monitoring: {
      name: "AST-06: Monitoring & SIEM",
      tech: "Wazuh Agent / Syslog Pipeline",
      strideThreats: [
        { threat: "Repudiation", desc: "Adversary clears bash history or stops log forwarding daemon.", mitigation: "Remote syslog streaming; write-only append logs; tamper-resistant agents." },
        { threat: "Denial of Service", desc: "Log flood overwhelming SIEM storage and indexing.", mitigation: "Rate limiting, filtering high-volume benign pings at source." },
      ],
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: HARDENING & BEFORE/AFTER CODE DIFF INSPECTOR                  */
  /* -------------------------------------------------------------------------- */
  const [selectedHardeningDomain, setSelectedHardeningDomain] = useState("api"); // 'api' | 'host' | 'db' | 'iam'

  const hardeningDiffs = {
    api: {
      title: "CAP-001: Object-Level Authorization Hardening",
      file: "controllers/projectController.js",
      beforeCode: `// VULNERABLE: Direct IDOR/BOLA - Trusts client-supplied project_id
async function getProject(req, res) {
  const { id } = req.params;
  const project = await db.query(
    "SELECT * FROM projects WHERE id = $1", [id]
  );
  if (!project.rows[0]) return res.status(404).json({ error: "Not found" });
  return res.json(project.rows[0]);
}`,
      afterCode: `// SECURED: Enforces strict server-side owner authorization
async function getProject(req, res) {
  const { id } = req.params;
  const currentUserId = req.user.id; // From verified session JWT
  
  const project = await db.query(
    "SELECT * FROM projects WHERE id = $1 AND owner_id = $2",
    [id, currentUserId]
  );
  if (!project.rows[0]) {
    // Return 403 or 404 without leaking record existence
    return res.status(404).json({ error: "Project not found or unauthorized" });
  }
  return res.json(project.rows[0]);
}`,
      verificationVerdict: "PASSED: Unauthorized access to cross-account records returns 404/403. Zero data leakage.",
    },
    host: {
      title: "CAP-002: Service Privilege & Host Firewall Hardening",
      file: "/etc/systemd/system/northstar-api.service & UFW",
      beforeCode: `# VULNERABLE: Runs daemon as root; firewall inactive
[Service]
User=root
ExecStart=/usr/bin/node /opt/northstar/server.js
# UFW Status: inactive (All ports 0-65535 open)`,
      afterCode: `# SECURED: Least-privilege service account & restricted firewall
[Service]
User=svc-northstar
Group=svc-northstar
NoNewPrivileges=true
ProtectSystem=strict
ProtectHome=true
ExecStart=/usr/bin/node /opt/northstar/server.js

# Host Firewall Rules:
ufw default deny incoming
ufw default allow outgoing
ufw allow 443/tcp comment 'HTTPS'
ufw allow from 192.168.10.0/24 to any port 22 proto tcp comment 'Admin SSH'
ufw enable`,
      verificationVerdict: "PASSED: Daemon runs under UID 1002 (svc-northstar). Host ports 5432 and 8080 blocked from external LAN.",
    },
    db: {
      title: "CAP-005: Database Interface & Role Hardening",
      file: "/etc/postgresql/16/main/postgresql.conf & pg_hba.conf",
      beforeCode: `# VULNERABLE: Listening on all interfaces; superuser used by app
listen_addresses = '*'
# pg_hba.conf: host all all 0.0.0.0/0 md5
# DB User: 'postgres' (Superuser privileges)`,
      afterCode: `# SECURED: Localhost binding; dedicated least-privilege role
listen_addresses = '127.0.0.1,192.168.10.15' # Private app subnet only
# pg_hba.conf: host northstar_db northstar_app 192.168.10.10/32 scram-sha-256

-- Dedicated Least-Privilege App Role
CREATE ROLE northstar_app WITH LOGIN PASSWORD 'vault_managed_secret';
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO northstar_app;
REVOKE ALL ON SCHEMA public FROM public;`,
      verificationVerdict: "PASSED: Database unreachable from outside subnet. Role cannot execute DROP TABLE or ALTER SYSTEM.",
    },
    iam: {
      title: "CAP-006: Identity & Detection Rule Hardening",
      file: "rules/sigma_failed_logins.yml",
      beforeCode: `# VULNERABLE: No correlation rule deployed in SIEM
# Attackers can brute force accounts indefinitely without alerting SOC`,
      afterCode: `# SECURED: Sigma Threshold Rule Deployed to SIEM
title: Northstar Rapid Failed Authentication Burst
status: production
logsource:
  category: authentication
  product: linux
detection:
  selection:
    event.action: 'failed-login'
  condition: selection | count(event.action) by user.name > 5
timeframe: 1m
level: high
tags:
  - attack.credential_access
  - attack.t1110.001`,
      verificationVerdict: "PASSED: Injected 6 failed logins in 15 seconds; SIEM fired High-severity alert within 8 seconds.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: INCIDENT RESPONSE TABLETOP SIMULATOR (Section 24.12)          */
  /* -------------------------------------------------------------------------- */
  const [tabletopStep, setTabletopStep] = useState(1);
  const [tabletopLogs, setTabletopLogs] = useState([
    "[10:00:01 UTC] [SIEM ALERT] High: Denied cross-account resource access on /api/v1/projects/PROJ-8002 by user 'learner-09'.",
    "[10:00:04 UTC] [API LOG] POST /api/v1/projects/PROJ-8002/update HTTP/1.1 - Status: 403 Forbidden - User: 'learner-09'.",
    "[10:00:10 UTC] [API LOG] Repeated probe attempts detected from client IP 192.168.10.45.",
  ]);

  const handleNextTabletopStep = () => {
    if (tabletopStep === 1) {
      setTabletopLogs((prev) => [
        ...prev,
        "[10:02:15 UTC] [TRIAGE] Security Analyst validated alert. Account 'learner-09' confirmed actively probing foreign project records.",
        "[10:02:30 UTC] [CONTAINMENT INITIATED] Action: Revoking session tokens and setting user status to 'RESTRICTED'.",
      ]);
      setTabletopStep(2);
    } else if (tabletopStep === 2) {
      setTabletopLogs((prev) => [
        ...prev,
        "[10:04:00 UTC] [FORENSICS] Audit log analysis confirmed zero records were exfiltrated or modified due to active server-side authorization enforcement.",
        "[10:05:00 UTC] [INCIDENT CLOSED] Incident report filed. Scope remained strictly within authorized lab boundary. Lessons learned logged.",
      ]);
      setTabletopStep(3);
    }
  };

  const handleResetTabletop = () => {
    setTabletopStep(1);
    setTabletopLogs([
      "[10:00:01 UTC] [SIEM ALERT] High: Denied cross-account resource access on /api/v1/projects/PROJ-8002 by user 'learner-09'.",
      "[10:00:04 UTC] [API LOG] POST /api/v1/projects/PROJ-8002/update HTTP/1.1 - Status: 403 Forbidden - User: 'learner-09'.",
      "[10:00:10 UTC] [API LOG] Repeated probe attempts detected from client IP 192.168.10.45.",
    ]);
  };

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA (Section 24.16)                                                  */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What must be established before assessing the lab?",
      options: [
        "A public IP address",
        "Written authorization, scope, and rules of engagement",
        "A list of every available hacking tool",
        "An assumption that all connected networks are in scope",
      ],
      correctAnswer: 1,
      explanation: "Every professional security engagement must be formally bounded by documented written authorization, explicit scope limits, and defined rules of engagement before testing begins.",
    },
    {
      id: 2,
      question: "Why is an asset inventory important?",
      options: [
        "It replaces testing",
        "It identifies assets, functions, dependencies, and security concerns",
        "It automatically identifies every vulnerability",
        "It eliminates the need for a threat model",
      ],
      correctAnswer: 1,
      explanation: "An asset inventory identifies all systems, components, data flows, and dependencies in scope, establishing the foundation for threat modeling and vulnerability assessment.",
    },
    {
      id: 3,
      question: "A scanner reports a vulnerability that cannot be reproduced and lacks supporting evidence. What is the best next step?",
      options: [
        "Publish it as confirmed",
        "Assign Critical severity automatically",
        "Validate the observation and document uncertainty",
        "Delete all scanner output",
      ],
      correctAnswer: 2,
      explanation: "Security professionals must independently validate automated scanner findings with technical evidence; if it cannot be reproduced, it should be investigated and documented honestly rather than published as confirmed.",
    },
    {
      id: 4,
      question: "What demonstrates that remediation was successful?",
      options: [
        "A developer says the fix is complete",
        "A ticket is marked closed",
        "The agreed tests pass and evidence supports the outcome",
        "The vulnerability no longer appears in one scanner report",
      ],
      correctAnswer: 2,
      explanation: "Remediation closure requires reproducible evidence showing that positive, negative, and regression validation tests pass within the agreed assessment scope.",
    },
    {
      id: 5,
      question: "What should happen if a security event is missing from the monitoring system?",
      options: [
        "Assume the detection rule is correct",
        "Investigate collection, forwarding, parsing, and source logging",
        "Declare that no suspicious activity occurred",
        "Increase severity without investigation",
      ],
      correctAnswer: 1,
      explanation: "A missing security event indicates an upstream pipeline visibility gap. The analyst must trace the data path: local audit configuration, forwarding agent, ingestion network, and field parsing.",
    },
    {
      id: 6,
      question: "Which is the strongest example of least privilege?",
      options: [
        "Give all services administrator access",
        "Share one account across all components",
        "Grant a service identity only the permissions required for its documented function",
        "Disable authorization checks to simplify development",
      ],
      correctAnswer: 2,
      explanation: "The principle of least privilege dictates that users and service identities possess only the minimum necessary permissions required to execute their documented business functions.",
    },
    {
      id: 7,
      question: "Why should an assessment preserve limitations in the final report?",
      options: [
        "To avoid describing any findings",
        "To make the scope and strength of conclusions transparent",
        "To make all findings lower severity",
        "To remove the need for retesting",
      ],
      correctAnswer: 1,
      explanation: "Transparent disclosure of limitations (e.g. untested microservices, non-production sandbox environment) ensures decision-makers understand the boundaries and validity of the conclusions.",
    },
    {
      id: 8,
      question: "A fix blocks unauthorized reads but still permits unauthorized updates. What is the correct result?",
      options: [
        "Fully resolved",
        "Partially resolved or not resolved, depending on the agreed finding scope",
        "Risk accepted automatically",
        "No issue remains",
      ],
      correctAnswer: 1,
      explanation: "If write operations remain exposed, the root cause was only partially addressed. The finding must be reported as Partially Resolved (or Not Resolved) rather than closed.",
    },
    {
      id: 9,
      question: "What is the purpose of an incident-response tabletop exercise?",
      options: [
        "Cause a real incident",
        "Practice decision-making, evidence handling, communication, and response procedures",
        "Replace all monitoring tests",
        "Prove that every attack can be prevented",
      ],
      correctAnswer: 1,
      explanation: "A tabletop exercise provides a controlled environment to evaluate and practice operational decision-making, evidence preservation, escalation protocols, and team communication during security events.",
    },
    {
      id: 10,
      question: "Which is the best measure of a successful capstone?",
      options: [
        "The number of tools installed",
        "The number of Critical findings reported",
        "Evidence-based assessment, effective remediation, validated detections, and defensible retesting",
        "The absence of any reported limitations",
      ],
      correctAnswer: 2,
      explanation: "Professional excellence is evaluated on sound methodology, reproducible evidence, architectural root-cause remediation, tested detections, and defensible retest verification.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectOption = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  }, [quizAnswers]);

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Navigation Bar */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning")}
              className="p-2 rounded-lg bg-white border border-stone-200/80 shadow-xs text-stone-600 hover:text-white hover:bg-slate-800 transition"
              title="Return to Course Index"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Module 24 — Final Capstone
                </span>
                <span className="text-xs text-stone-500 hidden sm:inline">Cybersecurity Master Course</span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
                Assess, Document, Secure, Retest, and Defend a Complete Lab
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">

            <button
              onClick={() => navigate("/learning/cybersecurity/pentest-reporting-remediation")}
              className="p-2 rounded-lg bg-white border border-stone-200/80 shadow-xs text-stone-600 hover:text-white hover:bg-slate-800 transition"
              title="Previous Module: Pentest Reports, Risk & Retesting"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/40 text-orange-700 hover:bg-purple-600/30 transition flex items-center gap-1 text-xs font-semibold px-3"
              title="Course Completed! Return to Course Index"
            >
              <Award className="w-4 h-4 text-orange-600" />
              <span className="hidden sm:inline">Complete Track</span>
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-2 border-t border-stone-200 py-2 no-scrollbar bg-white text-xs font-medium">
          {[
            { id: "theory", label: "Curriculum Theory", icon: BookOpen },
            { id: "threat-sim", label: "Simulator: Lab Architecture & STRIDE", icon: Compass },
            { id: "register-sim", label: "Simulator: Live Findings Register", icon: ClipboardList },
            { id: "hardening-sim", label: "Simulator: Hardening Diff Inspector", icon: Split },
            { id: "tabletop-sim", label: "Simulator: Incident Response Tabletop", icon: ShieldAlert },
            { id: "quiz", label: "Capstone Quiz (10)", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition ${
                  isActive
                    ? "bg-stone-900 text-white font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
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
      <div className="bg-white border-b border-stone-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-stone-600">
          <ModuleNav
            track="cybersecurity"
            currentModuleId="capstone"
            showAiTutor={showAiTutor}
            onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
            aiTutorLabel="Nova AI: Capstone Reviewer"
          />
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-stone-700">
              <Clock className="w-3.5 h-3.5 text-orange-600" /> Est: 120 mins
            </span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> Final Master Capstone Project
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* ================================================================== */}
        {/* TAB 1: CURRICULUM THEORY (Sections 24.1 - 24.18)                  */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* 24.1 Capstone Overview */}
            <section className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  24.1 Capstone Overview
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  End-to-End Master Project
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
                Assess, Document, Secure, Retest, and Defend a Complete Lab Environment
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                This capstone synthesizes the knowledge and skills developed throughout the entire Cybersecurity and Ethical Hacking curriculum. You will plan and assess an isolated lab environment (Northstar Learning Systems), identify security weaknesses, validate findings with reproducible evidence, prioritize risks, engineer robust technical hardening, retest the environment, and demonstrate how defensive monitoring detects suspicious activity.
              </p>

              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-orange-700">
                <strong className="text-stone-900 font-semibold">Portfolio-Ready Deliverable:</strong> The final output of this capstone is a comprehensive, professional project package containing the lab architecture, rules of engagement, findings register, root-cause remediation record, detection validation results, retest report, and executive defense presentation.
              </div>
            </section>

            {/* 24.2 Capstone Objectives */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.2 Capstone Objectives
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-6">End-to-End Professional Competencies</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
                {[
                  "Design and document a controlled, multi-tier cybersecurity lab environment.",
                  "Define scope, authorization, rules of engagement, and non-destructive test boundaries.",
                  "Identify assets, trust boundaries, attack surfaces, and critical data flows using STRIDE.",
                  "Perform a risk-based security assessment combining config reviews and controlled testing.",
                  "Validate technical findings and maintain reproducible, sanitized forensic evidence.",
                  "Assign and justify vulnerability severity and business remediation priority (CVSS v4.0).",
                  "Apply defensive controls, secure configurations, and least-privilege service identities.",
                  "Configure security monitoring, deploy Sigma rules, and validate detections end-to-end.",
                  "Retest fixes to distinguish resolved, partially resolved, and unresolved weaknesses.",
                  "Produce a professional technical report, executive summary, and defend decisions before reviewers.",
                ].map((obj, i) => (
                  <div key={i} className="p-3 rounded-lg bg-stone-50 border border-stone-200/80 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 24.3 Project Scenario */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.3 Scenario
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Engagement Context: Northstar Learning Systems
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-6">
                You are acting as a junior security engineer for Northstar Learning Systems, an educational platform operating a web portal and backend API for synthetic learners and instructors. Leadership has requested answers to five core security questions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs text-center mb-6">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-orange-600 font-bold mx-auto mb-2 flex items-center justify-center text-xs">1</div>
                  <div className="font-bold text-stone-900 mb-1">Asset Landscape</div>
                  <div className="text-[11px] text-stone-600">What assets & security risks exist in the lab?</div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-orange-600 font-bold mx-auto mb-2 flex items-center justify-center text-xs">2</div>
                  <div className="font-bold text-stone-900 mb-1">Demonstrated Risk</div>
                  <div className="text-[11px] text-stone-600">Which weaknesses are proven, and how serious?</div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-orange-600 font-bold mx-auto mb-2 flex items-center justify-center text-xs">3</div>
                  <div className="font-bold text-stone-900 mb-1">Hardening Fixes</div>
                  <div className="text-[11px] text-stone-600">What changes will reduce the greatest risks?</div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-orange-600 font-bold mx-auto mb-2 flex items-center justify-center text-xs">4</div>
                  <div className="font-bold text-stone-900 mb-1">Detection Check</div>
                  <div className="text-[11px] text-stone-600">Can monitoring catch suspicious activity?</div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-orange-600 font-bold mx-auto mb-2 flex items-center justify-center text-xs">5</div>
                  <div className="font-bold text-stone-900 mb-1">Verified Retest</div>
                  <div className="text-[11px] text-stone-600">Do the fixes work, and what risks remain?</div>
                </div>
              </div>
            </section>

            {/* 24.4 Scope, Authorization & Rules of Engagement */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.4 Authorization & Scope
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Define Scope, Authorization, and Rules of Engagement
              </h3>

              <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6">
                <table className="w-full text-xs text-left text-stone-700">
                  <thead className="bg-stone-50 text-stone-800 border-b border-stone-200 font-semibold">
                    <tr>
                      <th className="p-3">Scope Item</th>
                      <th className="p-3 text-orange-600">Capstone Definition for Northstar Lab</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans font-bold text-stone-800">Assessment Target</td>
                      <td className="p-3 font-sans">Local Northstar training application, API services, host OS, and database</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans font-bold text-stone-800">Permitted Environment</td>
                      <td className="p-3 font-sans">Isolated local containers, host-only VMs, and synthetic event datasets</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans font-bold text-stone-800">Excluded Targets</td>
                      <td className="p-3 font-sans text-rose-400">Public IP addresses, personal devices, third-party APIs, production systems</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans font-bold text-stone-800">Test Identities</td>
                      <td className="p-3 font-sans">Dedicated synthetic accounts: learner-01 through learner-10, admin-test</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans font-bold text-stone-800">Stop Conditions</td>
                      <td className="p-3 font-sans text-amber-400">Unintended service outage, access to real customer data, scope ambiguity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 24.6 Asset Inventory and Threat Modeling */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.6 Threat Modeling
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Asset Inventory & STRIDE Threat Modeling
              </h3>

              {/* STRIDE Table */}
              <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6">
                <table className="w-full text-xs text-left text-stone-700">
                  <thead className="bg-stone-50 text-stone-800 border-b border-stone-200 font-semibold">
                    <tr>
                      <th className="p-3">STRIDE Category</th>
                      <th className="p-3 text-orange-600">Northstar Capstone Example</th>
                      <th className="p-3 text-orange-600">Core Security Question</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800 font-bold">Spoofing</td>
                      <td className="p-3 font-sans">A request impersonates another learner or administrator</td>
                      <td className="p-3 font-sans">Is session authentication and JWT integrity verified correctly?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800 font-bold">Tampering</td>
                      <td className="p-3 font-sans">A user modifies another user's project record via API</td>
                      <td className="p-3 font-sans">Does the server enforce object-level authorization on all updates?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800 font-bold">Repudiation</td>
                      <td className="p-3 font-sans">An administrative role modification lacks an audit trail</td>
                      <td className="p-3 font-sans">Are all security-relevant actions attributable and immutable?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800 font-bold">Information Disclosure</td>
                      <td className="p-3 font-sans">A learner accesses private project records belonging to others</td>
                      <td className="p-3 font-sans">Are database queries bounded by the authenticated principal's ID?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800 font-bold">Denial of Service</td>
                      <td className="p-3 font-sans">Excessive authentication bursts overwhelm the identity backend</td>
                      <td className="p-3 font-sans">Are rate limits, connection pools, and cgroup resource limits active?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800 font-bold">Elevation of Privilege</td>
                      <td className="p-3 font-sans">A learner invokes admin-only user-management endpoints</td>
                      <td className="p-3 font-sans">Is RBAC enforced strictly at the API controller middleware layer?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 24.9 Secure and Harden the Lab */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.9 Hardening
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Systemic Security Hardening Across Lab Layers
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-orange-600 mb-2 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" /> Application & API Hardening
                  </div>
                  <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                    <li>Enforce server-side object authorization on all CRUD routes.</li>
                    <li>Use parameterized queries with prepared statements.</li>
                    <li>Validate input against business rules; contextually encode output.</li>
                    <li>Set secure cookie flags: HttpOnly, Secure, SameSite=Strict.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-orange-600 mb-2 flex items-center gap-1.5">
                    <Server className="w-4 h-4" /> Linux Host & Network Hardening
                  </div>
                  <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                    <li>Migrate services to dedicated non-root users (svc-northstar).</li>
                    <li>Configure host firewall (UFW) to drop unsolicited inbound traffic.</li>
                    <li>Enable auditd rules for sensitive file watches (/etc/passwd, sudoers).</li>
                    <li>Bind database services strictly to localhost (127.0.0.1).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 24.11 Retest & 24.12 Incident Response Tabletop */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.11 & 24.12 Validation & Incident Response
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Retest Classification & Incident Response Tabletop
              </h3>

              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 mb-6">
                <h4 className="text-sm font-bold text-stone-900 mb-2">24.11.2 The 5 Retest Status Classifications</h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono text-center">
                  <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">Resolved</div>
                  <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">Partially Resolved</div>
                  <div className="p-2.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold">Not Resolved</div>
                  <div className="p-2.5 rounded bg-slate-800 border border-stone-300 text-stone-700 font-bold">Unable to Verify</div>
                  <div className="p-2.5 rounded bg-purple-500/10 border border-purple-500/30 text-orange-700 font-bold">Risk Accepted</div>
                </div>
              </div>
            </section>

            {/* 24.14 Final Report Template */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-900/60 to-purple-950/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.14 Capstone Deliverable
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                Capstone Final Report Builder & Presentation Package
              </h3>

              <div className="p-5 rounded-xl bg-slate-950 border border-purple-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-stone-200 pb-2">
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Master Final Report Preview
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-orange-700">
                      Portfolio-Ready
                    </span>
                  </div>

                  <pre className="p-3.5 rounded-lg bg-stone-50 font-mono text-[11px] text-orange-700 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
                    {capstoneFinalReportText}
                  </pre>
                </div>

                <button
                  onClick={() => copyToClipboard(capstoneFinalReportText, "final-report")}
                  className="mt-4 w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-lg"
                >
                  {copiedCodeId === "final-report" ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                  <span>{copiedCodeId === "final-report" ? "Report Copied to Clipboard!" : "Copy final report draft"}</span>
                </button>
              </div>
            </section>

            {/* 24.15 Assessment Rubric */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.15 Evaluation Rubric
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Capstone Assessment Rubric (100% Total)
              </h3>

              <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6">
                <table className="w-full text-xs text-left text-stone-700">
                  <thead className="bg-stone-50 text-stone-800 border-b border-stone-200 font-semibold">
                    <tr>
                      <th className="p-3">Assessment Area</th>
                      <th className="p-3 text-orange-600">Weight</th>
                      <th className="p-3 text-stone-600">What is Evaluated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800">Scope, Authorization & Architecture</td>
                      <td className="p-3 text-orange-600 font-bold">10%</td>
                      <td className="p-3 font-sans">Clear boundaries, asset inventory, STRIDE threat model, safe lab design</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800">Assessment Methodology & Evidence</td>
                      <td className="p-3 text-orange-600 font-bold">20%</td>
                      <td className="p-3 font-sans">Reproducibility, technical validation, sanitized evidence, honest limitations</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800">Risk Analysis & Reporting</td>
                      <td className="p-3 text-orange-600 font-bold">15%</td>
                      <td className="p-3 font-sans">Clear findings, defensible CVSS severity, business risk context</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800">Remediation & Hardening</td>
                      <td className="p-3 text-orange-600 font-bold">20%</td>
                      <td className="p-3 font-sans">Root-cause correction, least-privilege, secure configurations</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800">Monitoring & Incident Response</td>
                      <td className="p-3 text-orange-600 font-bold">15%</td>
                      <td className="p-3 font-sans">Telemetry, detection tests, investigation, tabletop response record</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800">Retesting & Regression Validation</td>
                      <td className="p-3 text-orange-600 font-bold">10%</td>
                      <td className="p-3 font-sans">Reliable before/after evidence and accurate finding status classification</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-stone-800">Final Defense & Communication</td>
                      <td className="p-3 text-orange-600 font-bold">10%</td>
                      <td className="p-3 font-sans">Clear explanation, technical reasoning, response to reviewer questions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 24.17 Official References & 24.18 Final Takeaways */}
            <section className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                  24.17 & 24.18 Standards & Takeaways
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-6">
                Authoritative Frameworks & Final Capstone Takeaways
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
                {[
                  "A complete security assessment starts with authorization, scope, asset discovery, and threat modeling.",
                  "Security findings must be supported by evidence and clearly distinguish confirmed behavior from potential impact.",
                  "Risk prioritization should account for technical severity, business context, exposure, and effective controls.",
                  "Remediation should address root causes and be documented through controlled configuration changes.",
                  "Defensive monitoring must be tested end to end, including event collection, detection logic, investigation, and response.",
                  "Retesting must verify the actual security outcome and document unresolved issues honestly.",
                  "A professional final report connects architecture, assessment evidence, risk decisions, remediation, detection validation, and residual risk.",
                  "A strong portfolio project demonstrates not just that weaknesses were found, but that security improved measurably and the evidence supports that conclusion.",
                ].map((point, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: SIMULATOR 1 - LAB ARCHITECTURE & STRIDE THREAT MODEL        */}
        {/* ================================================================== */}
        {activeTab === "threat-sim" && (
          <div className="space-y-8">
            <div className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                    Simulator 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Lab Architecture & STRIDE Threat Model Explorer
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Select a component in the Northstar Learning Systems architecture to inspect threat boundaries and STRIDE mitigations.
                  </p>
                </div>
              </div>

              {/* Component Buttons / Visualizer */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {[
                  { id: "web", label: "AST-01: Web App", icon: Globe },
                  { id: "api", label: "AST-02: App API", icon: Layers },
                  { id: "db", label: "AST-03: Database", icon: Database },
                  { id: "host", label: "AST-04: Linux Host", icon: Server },
                  { id: "monitoring", label: "AST-06: Monitoring", icon: Activity },
                ].map((comp) => {
                  const Icon = comp.icon;
                  const isSelected = selectedComponent === comp.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedComponent(comp.id)}
                      className={`p-4 rounded-xl text-left border transition ${
                        isSelected
                          ? "bg-purple-600 text-white border-purple-500 shadow-md"
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-300 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-2" />
                      <div className="font-bold text-xs">{comp.label}</div>
                    </button>
                  );
                })}
              </div>

              {/* Component STRIDE Threat Details */}
              <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-3">
                  <div>
                    <div className="text-sm font-bold text-stone-900">{componentsData[selectedComponent].name}</div>
                    <div className="text-xs text-orange-600 font-mono mt-0.5">{componentsData[selectedComponent].tech}</div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-purple-500/20 text-orange-700 text-[11px] font-mono font-bold">
                    STRIDE Analysis Active
                  </span>
                </div>

                <div className="space-y-3">
                  {componentsData[selectedComponent].strideThreats.map((th, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-white border border-stone-200/80 shadow-xs text-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="space-y-1 md:w-1/2">
                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold font-mono text-[10px]">
                          {th.threat}
                        </span>
                        <div className="text-stone-700 mt-1">{th.desc}</div>
                      </div>
                      <div className="md:w-1/2 p-2 rounded bg-stone-50 border border-stone-200/80/80 text-emerald-400 font-mono text-[11px]">
                        <strong className="text-stone-600 font-sans">Mitigation: </strong>{th.mitigation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: SIMULATOR 2 - LIVE FINDINGS REGISTER                       */}
        {/* ================================================================== */}
        {activeTab === "register-sim" && (
          <div className="space-y-8">
            <div className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                    Simulator 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Dynamic Findings Register & Risk Prioritizer
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Manage findings, assign engineering owners, toggle remediation status, and export the register.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={addFinding}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-700 text-xs flex items-center gap-1.5 transition"
                  >
                    <PlusCircle className="w-3.5 h-3.5" /> Add Finding
                  </button>
                  <button
                    onClick={() => copyToClipboard(findingsRegisterText, "findings-register")}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition"
                  >
                    {copiedCodeId === "findings-register" ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedCodeId === "findings-register" ? "Register Copied!" : "Copy Register"}</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Findings List */}
              <div className="space-y-3 mb-6">
                {findingsRegister.map((f) => (
                  <div
                    key={f.id}
                    className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3 w-full md:w-2/5">
                      <span className="font-mono font-bold text-orange-600 px-2 py-1 rounded bg-white border border-stone-200/80 shadow-xs shrink-0">
                        {f.id}
                      </span>
                      <input
                        type="text"
                        value={f.title}
                        onChange={(e) => updateFinding(f.id, "title", e.target.value)}
                        className="w-full p-1.5 rounded bg-white border border-stone-200/80 shadow-xs text-stone-800 text-xs font-semibold focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 w-full md:w-3/5 justify-between md:justify-end">
                      <select
                        value={f.priority}
                        onChange={(e) => updateFinding(f.id, "priority", e.target.value)}
                        className={`p-1.5 rounded border text-xs font-bold ${
                          f.priority === "Critical"
                            ? "bg-rose-500/20 text-rose-400 border-rose-500/40"
                            : f.priority === "High"
                            ? "bg-orange-500/20 text-orange-400 border-orange-500/40"
                            : "bg-amber-500/20 text-amber-400 border-amber-500/40"
                        }`}
                      >
                        <option value="Critical">Critical</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>

                      <select
                        value={f.status}
                        onChange={(e) => updateFinding(f.id, "status", e.target.value)}
                        className="p-1.5 rounded bg-white border border-stone-200/80 shadow-xs text-stone-700 text-xs"
                      >
                        <option value="Open">Open</option>
                        <option value="In Remediation">In Remediation</option>
                        <option value="Fixed — Pending Retest">Fixed — Pending Retest</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Partially Resolved">Partially Resolved</option>
                        <option value="Risk Accepted">Risk Accepted</option>
                      </select>

                      <input
                        type="text"
                        value={f.owner}
                        onChange={(e) => updateFinding(f.id, "owner", e.target.value)}
                        placeholder="Owner"
                        className="w-32 p-1.5 rounded bg-white border border-stone-200/80 shadow-xs text-stone-700 text-xs"
                      />

                      <button
                        onClick={() => removeFinding(f.id)}
                        className="p-1.5 rounded hover:bg-rose-500/20 text-rose-400 transition"
                        title="Remove row"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: SIMULATOR 3 - HARDENING DIFF INSPECTOR                      */}
        {/* ================================================================== */}
        {activeTab === "hardening-sim" && (
          <div className="space-y-8">
            <div className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                    Simulator 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Security Hardening & Before/After Diff Inspector
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare vulnerable configurations against secured implementations and check technical verification verdicts.
                  </p>
                </div>
              </div>

              {/* Domain Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { id: "api", label: "CAP-001: API BOLA Fix" },
                  { id: "host", label: "CAP-002: Host Service & UFW" },
                  { id: "db", label: "CAP-005: Database Interface" },
                  { id: "iam", label: "CAP-006: Detection Rule" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedHardeningDomain(item.id)}
                    className={`p-3 rounded-xl text-left border transition text-xs font-bold ${
                      selectedHardeningDomain === item.id
                        ? "bg-purple-600 text-white border-purple-500"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Before vs After Side-by-Side Diff */}
              <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-3">
                  <div>
                    <div className="text-sm font-bold text-stone-900">{hardeningDiffs[selectedHardeningDomain].title}</div>
                    <div className="text-xs text-orange-600 font-mono mt-0.5">{hardeningDiffs[selectedHardeningDomain].file}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  {/* Before */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-rose-500/30">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 mb-2">
                      <XCircle className="w-4 h-4" /> Vulnerable Initial State (Before)
                    </div>
                    <pre className="p-3 rounded bg-slate-950 font-mono text-[11px] text-rose-300 overflow-x-auto leading-relaxed">
                      {hardeningDiffs[selectedHardeningDomain].beforeCode}
                    </pre>
                  </div>

                  {/* After */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-emerald-500/30">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                      <CheckCircle2 className="w-4 h-4" /> Hardened & Secured State (After)
                    </div>
                    <pre className="p-3 rounded bg-slate-950 font-mono text-[11px] text-emerald-300 overflow-x-auto leading-relaxed">
                      {hardeningDiffs[selectedHardeningDomain].afterCode}
                    </pre>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <CheckCheck className="w-4 h-4 shrink-0" />
                  <span>{hardeningDiffs[selectedHardeningDomain].verificationVerdict}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: SIMULATOR 4 - INCIDENT RESPONSE TABLETOP                   */}
        {/* ================================================================== */}
        {activeTab === "tabletop-sim" && (
          <div className="space-y-8">
            <div className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                    Simulator 4
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Incident Response Tabletop & Containment Reconstructor
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Walk through the simulated BOLA probe incident, reconstruct timeline evidence, and execute containment.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetTabletop}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-700 text-xs flex items-center gap-1.5 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Exercise
                  </button>
                  {tabletopStep < 3 && (
                    <button
                      onClick={handleNextTabletopStep}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{tabletopStep === 1 ? "Advance to Containment" : "Finalize & Close Incident"}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6">
                <div className={`p-2.5 rounded-lg border font-bold ${tabletopStep >= 1 ? "bg-purple-600 text-white border-purple-500" : "bg-slate-950 border-stone-200 text-stone-500"}`}>
                  1. Triage & Correlate
                </div>
                <div className={`p-2.5 rounded-lg border font-bold ${tabletopStep >= 2 ? "bg-purple-600 text-white border-purple-500" : "bg-slate-950 border-stone-200 text-stone-500"}`}>
                  2. Active Containment
                </div>
                <div className={`p-2.5 rounded-lg border font-bold ${tabletopStep >= 3 ? "bg-purple-600 text-white border-purple-500" : "bg-slate-950 border-stone-200 text-stone-500"}`}>
                  3. Forensic Sign-Off
                </div>
              </div>

              {/* Live Incident Log Terminal */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="text-xs font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-orange-600" /> Incident Timeline & Command Log
                </div>

                <div className="p-3.5 rounded bg-white border border-stone-200/80 shadow-xs min-h-[160px] font-mono text-[11px] space-y-1.5 text-stone-700">
                  {tabletopLogs.map((log, idx) => {
                    let color = "text-stone-700";
                    if (log.includes("[SIEM ALERT]")) color = "text-rose-400 font-bold";
                    if (log.includes("[CONTAINMENT")) color = "text-amber-400 font-bold";
                    if (log.includes("[INCIDENT CLOSED]")) color = "text-emerald-400 font-bold";
                    return <div key={idx} className={color}>{log}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 6: CAPSTONE KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)           */}
        {/* ================================================================== */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <div className="bg-white border border-stone-200/80 shadow-xs rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200 font-bold">
                    Section 24.16
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Capstone Comprehensive Assessment
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Final mastery assessment testing scope boundaries, evidence rigor, root-cause remediation, and tabletop incident response.
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-xs text-stone-600">
                    {Object.keys(quizAnswers).length} of {quizQuestions.length} Answered
                  </div>
                  {quizSubmitted && (
                    <div className="text-sm font-bold mt-1 text-orange-600">
                      Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                    </div>
                  )}
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const selected = quizAnswers[q.id];
                  const isCorrect = selected === q.correctAnswer;
                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 transition"
                    >
                      <div className="font-bold text-sm text-stone-900 mb-3 flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-purple-500/20 text-orange-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{q.question}</span>
                      </div>

                      <div className="space-y-2 mb-3">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selected === oIdx;
                          let btnStyle = "bg-stone-50 border-stone-200 text-stone-700 hover:bg-slate-800";

                          if (quizSubmitted) {
                            if (oIdx === q.correctAnswer) {
                              btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                            } else if (isOptionSelected) {
                              btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-purple-600 text-white font-bold border-purple-500";
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(q.id, oIdx)}
                              className={`w-full text-left p-3 rounded-lg border text-xs transition flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && oIdx === q.correctAnswer && (
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                              )}
                              {quizSubmitted && isOptionSelected && oIdx !== q.correctAnswer && (
                                <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 rounded-lg bg-white border border-stone-200/80 shadow-xs text-xs text-stone-700 leading-relaxed">
                          <span className="font-bold text-orange-600">Explanation: </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-stone-200">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-700 text-xs font-medium transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Quiz
                </button>

                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs disabled:opacity-50 transition shadow-lg"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <div className="text-xs font-bold text-orange-600">
                    Capstone Assessment Complete! Check rationales above.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        moduleTitle="Final Capstone: Assess, Secure & Defend"
        moduleId="capstone"
        systemPrompt={`You are Nova, the Lead Reviewer and Principal Security Architect for the Cybersecurity Master Course Capstone.
You evaluate learners on end-to-end security engineering: scope boundaries, STRIDE threat models, evidence-based finding validation, systemic code and host hardening, Sigma detection engineering, retest classification, and incident tabletop response.
Ask rigorous questions, challenge assumptions, and ensure technical claims are backed by verifiable evidence.`}
        sampleQuestions={[
          "How do I structure the STRIDE threat model for Northstar Learning Systems?",
          "What is the architectural root cause difference between a client-side button mask and a server-side BOLA fix?",
          "How do I prove that a detection rule passes positive and negative test cases without generating false alarms?",
          "What criteria should I defend before a reviewer to classify a finding as Resolved versus Partially Resolved?",
        ]}
      />
    </div>
  );
}
