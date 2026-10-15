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
  Scale,
  FileCheck,
  StopCircle,
  Gavel,
  ShieldOff,
  UserCog,
  Briefcase,
  AlertOctagon,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 5                            */
/* Ethical Hacking Methodologies, Scoping, Rules of Engagement & Law          */
/* Informed by NIST SP 800-115, OWASP WSTG, PTES, and IT Act 2000 (India)    */
/* -------------------------------------------------------------------------- */

export default function CybersecurityEthicalHacking() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'roe-generator' | 'lifecycle-stepper' | 'legal-matrix' | 'safe-poc' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 1: RULES OF ENGAGEMENT (RoE) & SCOPE GENERATOR      */
  /* -------------------------------------------------------------------------- */
  const [roeConfig, setRoeConfig] = useState({
    clientName: "PrepSpaces Global Inc.",
    assessorOrg: "Apex Security Operations Ltd.",
    targetDomain: "staging.prepspaces.com",
    targetSubnets: "10.0.1.0/24 (VPC Staging Subnet)",
    testingWindow: "20:00 - 04:00 UTC (Off-Peak Hours)",
    rateLimit: 15, // requests/sec
    permittedAuth: true,
    permittedBOLA: true,
    permittedSqlInj: true,
    allowPersistence: false,
    allowDoS: false,
    allowPhishing: false,
    emergencyPhone: "+1 (555) 019-2834 (Security Lead)",
    stopConditionData: true,
    stopConditionOutage: true,
  });

  const toggleRoeFlag = (key) => {
    setRoeConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const generatedRoEDocument = useMemo(() => {
    return `================================================================================
FORMAL RULES OF ENGAGEMENT (RoE) & SCOPE DOCUMENT (NIST SP 800-115)
================================================================================
Target Client Organization : ${roeConfig.clientName}
Authorized Assessment Team : ${roeConfig.assessorOrg}
Authorization Status       : EXPLICIT WRITTEN CONSENT (Executed Contract)
Effective Validity Period  : 2026-10-15 to 2026-10-31

1. APPROVED IN-SCOPE ASSETS
   - Hostname/FQDN: https://${roeConfig.targetDomain}
   - Dedicated Network CIDR: ${roeConfig.targetSubnets}
   - Test Accounts: Candidate (cand_test_01), Recruiter (recr_test_01)
   - Scope Exclusions (STRICTLY PROHIBITED):
     * Production Database (prod-db-cluster.aws.internal)
     * Third-Party Payment Gateway (api.stripe.com)
     * Shared Cloud Infrastructure & Third-Party AI Inference APIs

2. OPERATIONAL SAFETY CONSTRAINTS & TESTING WINDOWS
   - Authorized Testing Window: ${roeConfig.testingWindow}
   - Maximum Request Concurrency: ${roeConfig.rateLimit} requests/second
   - Account Lockout Threshold: Do NOT trigger brute-force account lockouts.
   - Backup Status: Verified immutable database snapshot created at 18:00 UTC.

3. PERMITTED TESTING METHODOLOGIES
   - Authentication & Session Testing: ${roeConfig.permittedAuth ? "PERMITTED" : "RESTRICTED"}
   - Broken Object-Level Authorization (BOLA): ${roeConfig.permittedBOLA ? "PERMITTED" : "RESTRICTED"}
   - Non-Destructive SQL Injection: ${roeConfig.permittedSqlInj ? "PERMITTED (SELECT 1 / @@version only)" : "PROHIBITED"}

4. STRICTLY PROHIBITED EXPLOITATION TECHNIQUES
   - Denial of Service / Stress Flooding : ${roeConfig.allowDoS ? "EXCEPTIONAL" : "PROHIBITED"}
   - Malicious Persistence / Backdoors   : ${roeConfig.allowPersistence ? "EXCEPTIONAL" : "PROHIBITED"}
   - Employee Phishing / Social Eng.     : ${roeConfig.allowPhishing ? "PERMITTED" : "PROHIBITED"}
   - Bulk Production Data Exfiltration   : STRICTLY FORBIDDEN

5. MANDATORY STOP CONDITIONS & ESCALATION PROTOCOL
   ${roeConfig.stopConditionData ? "- STOP: Immediate halt upon discovering access to real user PII." : ""}
   ${roeConfig.stopConditionOutage ? "- STOP: Immediate halt upon service degradation > 500ms or 5xx errors." : ""}
   - Emergency Escalation Contact: ${roeConfig.emergencyPhone}
   - Incident Notification SLA: Within 30 minutes of stop-condition trigger.

DIGITAL HASH VERIFICATION:
SHA-256 Fingerprint: 8f4b29c91a02e5b741029c1d88a47f20194821a38210948bca120934120948aa
================================================================================`;
  }, [roeConfig]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 2: METHODOLOGY LIFECYCLE STEPPER (PTES / NIST)       */
  /* -------------------------------------------------------------------------- */
  const [activeStep, setActiveStep] = useState(1);

  const lifecyclePhases = [
    {
      step: 1,
      name: "01. Pre-Engagement & Scope",
      standard: "PTES / NIST SP 800-115 §3",
      objective: "Define authorization, boundaries, RoE, and emergency stop conditions.",
      primaryInputs: "Written permission letter, target inventory, test credentials, SLAs.",
      toolchain: "Contract templates, PGP keys, RoE generator, asset scope sheet.",
      safetyControls: "Ensure target signer possesses legal authority over IP infrastructure.",
      deliverable: "Signed Rules of Engagement document & verified communication matrix.",
    },
    {
      step: 2,
      name: "02. Reconnaissance & Discovery",
      standard: "PTES Intelligence Gathering",
      objective: "Passively map external attack surfaces without touching target servers.",
      primaryInputs: "Target root domain, organization brand names, ASN blocks.",
      toolchain: "Certificate Transparency (crt.sh), WHOIS/RDAP, DNSDumpster, theHarvester.",
      safetyControls: "Zero direct packet transmission to target perimeter.",
      deliverable: "Verified subdomain inventory & exposed technological fingerprints.",
    },
    {
      step: 3,
      name: "03. Enumeration & Analysis",
      standard: "NIST SP 800-115 §4",
      objective: "Active port discovery, service versioning, and endpoint routing analysis.",
      primaryInputs: "Resolved IP addresses, live HTTP hostnames.",
      toolchain: "Nmap (SYN scan), OWASP Amass, Burp Suite, test browser sessions.",
      safetyControls: "Rate throttling (<15 req/sec); comply with approved testing windows.",
      deliverable: "Mapped application routes, open TCP ports, and header security postures.",
    },
    {
      step: 4,
      name: "04. Vulnerability Identification",
      standard: "OWASP WSTG v4.2",
      objective: "Formulate testable hypotheses about security flaws (BOLA, XSS, SSRF).",
      primaryInputs: "Application request/response flows, session state tokens, API parameters.",
      toolchain: "Burp Repeater, OWASP ZAP, browser developer tools, static code scans.",
      safetyControls: "Do not attempt automated destructive fuzzing against production APIs.",
      deliverable: "Ranked vulnerability hypotheses with preliminary CVSS severity scores.",
    },
    {
      step: 5,
      name: "05. Controlled Exploitation",
      standard: "NIST SP 800-115 §5.2",
      objective: "Safely validate vulnerability hypotheses using minimal reproducible proof.",
      primaryInputs: "Candidate test accounts, vulnerable endpoint parameters.",
      toolchain: "Custom python PoC scripts, Burp Suite Intruder (controlled mode).",
      safetyControls: "Strictly execute benign proof (e.g., SELECT 1; synthetic test records).",
      deliverable: "Reproducible proof-of-concept evidence without business disruption.",
    },
    {
      step: 6,
      name: "06. Post-Exploitation Assessment",
      standard: "PTES Post-Exploitation",
      objective: "Evaluate blast radius, lateral movement boundaries, and data risk.",
      primaryInputs: "Validated low-privilege access token or test session.",
      toolchain: "Manual privilege inspection, JWT decoder, token integrity validator.",
      safetyControls: "NEVER exfiltrate customer data; never plant persistent malware/backdoors.",
      deliverable: "Documented boundary crossing report showing demonstrated business impact.",
    },
    {
      step: 7,
      name: "07. Reporting & Remediation",
      standard: "NIST SP 800-115 §6",
      objective: "Translate technical evidence into actionable executive and engineering remediation.",
      primaryInputs: "Timestamped logs, redacted screenshots, reproduction steps.",
      toolchain: "Markdown reports, CVSS v3.1 calculator, risk priority register.",
      safetyControls: "Redact all secrets, PII, and sensitive keys prior to report dissemination.",
      deliverable: "Comprehensive Technical & Executive Penetration Testing Report.",
    },
    {
      step: 8,
      name: "08. Retesting & Engagement Closure",
      standard: "NIST SP 800-115 §7",
      objective: "Verify that engineering fixes eradicate the root vulnerability without regressions.",
      primaryInputs: "Engineering commit hashes, patched staging deployment.",
      toolchain: "Regression verification scripts, differential HTTP tests.",
      safetyControls: "Deprovision test credentials and purge temporary test data from disk.",
      deliverable: "Final Retest Certificate & Formal Engagement Closure Sign-Off.",
    },
  ];

  const currentPhase = useMemo(
    () => lifecyclePhases.find((p) => p.step === activeStep) || lifecyclePhases[0],
    [activeStep]
  );

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 3: LEGAL COMPLIANCE & STATUTORY LIABILITY MATRIX     */
  /* -------------------------------------------------------------------------- */
  const [selectedLegalScenario, setSelectedLegalScenario] = useState("unauthorized_scan");

  const legalScenarios = {
    unauthorized_scan: {
      name: "Scanning Infrastructure Without Explicit Permission",
      description: "A tester runs aggressive Nmap port scans and vulnerability exploits against a target domain based only on verbal agreement from a project manager.",
      statutes: [
        {
          law: "Indian IT Act, 2000 — Section 43 & Section 66",
          clause: "Penalty for damage to computer systems without owner's permission; computer-related offences punishable by imprisonment up to 3 years and fines.",
          verdict: "Criminal & Civil Liability",
          badge: "bg-red-100 text-red-800 border-red-300",
        },
        {
          law: "NIST SP 800-115 §2.1 Mandate",
          clause: "A formal written document signed by an authorized executive who has statutory authority over the target asset must precede all technical testing.",
          verdict: "Violation of Professional Standard",
          badge: "bg-orange-100 text-orange-800 border-orange-300",
        },
      ],
      remediationProtocol: "Immediately halt testing. Secure written signature from the asset owner (CTO/CISO) before transmitting any further network packets.",
    },
    pii_exposure: {
      name: "Accidentally Encountering Real Customer Personal Data",
      description: "While validating an authorization flaw in staging, the tester accesses an unmasked production database table containing candidate names, government IDs, and salaries.",
      statutes: [
        {
          law: "Digital Personal Data Protection Act, 2023 (DPDP Act)",
          clause: "Data fiduciaries must implement reasonable security safeguards; failure to prevent breach results in severe regulatory penalties (up to ₹250 Crores).",
          verdict: "Immediate Stop Condition",
          badge: "bg-red-100 text-red-800 border-red-300",
        },
        {
          law: "CERT-In 6-Hour Reporting Directions",
          clause: "Mandatory incident reporting to CERT-In within 6 hours of discovering unauthorized access to sensitive personal data systems.",
          verdict: "Mandatory Incident Escalation",
          badge: "bg-red-100 text-red-800 border-red-300",
        },
      ],
      remediationProtocol: "Immediately pause testing (Stop Condition). Do NOT copy or download the customer table. Notify client incident commander within 30 minutes with redacted logs.",
    },
    dos_outage: {
      name: "Automated Fuzzing Causes Application Downtime",
      description: "A concurrency test overwhelms application memory, causing connection pooling exhaustion and knocking out live mock interview rooms for candidates.",
      statutes: [
        {
          law: "Indian IT Act, 2000 — Section 43(f)",
          clause: "Denial of access to an authorized person to any computer resource is actionable with financial compensation to the affected entity.",
          verdict: "Operational Breach of RoE",
          badge: "bg-orange-100 text-orange-800 border-orange-300",
        },
        {
          law: "Engagement Agreement SLA Breach",
          clause: "Violating the 15 req/sec rate limit established in the RoE constitutes a contractual breach of service terms.",
          verdict: "Breach of Contract",
          badge: "bg-amber-100 text-amber-800 border-amber-300",
        },
      ],
      remediationProtocol: "Instantly kill all automated tool processes. Assist operations in restarting the service. Recalibrate rate limits to 5 req/sec before resuming.",
    },
  };

  const activeLegal = legalScenarios[selectedLegalScenario];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 4: SAFE PROPORTIONATE PoC CALCULATOR                 */
  /* -------------------------------------------------------------------------- */
  const [selectedPocType, setSelectedPocType] = useState("sqli");

  const pocScenarios = {
    sqli: {
      title: "SQL Injection Testing",
      recklessApproach: "Running `'; DROP TABLE users; --` or automated `sqlmap --os-shell` that creates backdoor tables and corrupts production schema.",
      professionalApproach: "Executing benign arithmetic or version introspection: `' AND 1=1 --` or `SELECT @@version` or `SELECT 1` without mutating any data.",
      safetyVerdict: "Zero Data Corruption / Reversible Proof",
      riskDiff: "Reckless: Critical (25) -> Professional: Controlled (3)",
    },
    bola: {
      title: "Broken Object-Level Authorization (BOLA)",
      recklessApproach: "Scripting a loop across report IDs 1 to 100,000 and downloading all candidate evaluations to a local hard drive as 'proof'.",
      professionalApproach: "Registering two approved synthetic test accounts (cand_01 and cand_02). Requesting cand_02's report using cand_01's session; capturing one redacted HTTP 200 header.",
      safetyVerdict: "Zero Privacy Breach / Full Evidentiary Value",
      riskDiff: "Reckless: Critical (25) -> Professional: Controlled (4)",
    },
    upload: {
      title: "Arbitrary File Upload Testing",
      recklessApproach: "Uploading an active PHP webshell with file-manager capabilities and executing shell commands on the server OS.",
      professionalApproach: "Uploading a benign text file containing `Prepspaces Security PoC - Timestamp: 2026-10-15` disguised as a `.php` file, and verifying whether server returns plain text without executing code.",
      safetyVerdict: "Zero System Compromise / Clear Verification",
      riskDiff: "Reckless: Critical (25) -> Professional: Controlled (2)",
    },
  };

  const currentPoc = pocScenarios[selectedPocType];

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (8 QUESTIONS FROM SPECIFICATION)                 */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What primarily distinguishes ethical hacking from malicious hacking?",
      options: [
        "The tools used",
        "The operating system tested",
        "Authorization, scope, purpose, and responsible execution",
        "The number of vulnerabilities discovered",
      ],
      correct: 2,
      explanation:
        "The tools and technical skills can be identical. What distinguishes an ethical hacker is explicit authorization, a defined scope, constructive purpose, controlled execution, and responsible disclosure.",
    },
    {
      id: 2,
      question: "What is the main purpose of rules of engagement?",
      options: [
        "Guarantee that every test succeeds",
        "Define operational procedures, permitted activities, restrictions, and escalation",
        "Replace the engagement agreement",
        "Allow testing of any connected service",
      ],
      correct: 1,
      explanation:
        "Rules of Engagement (RoE) specify operational parameters: approved targets, prohibited techniques, testing windows, rate limits, stop conditions, and emergency escalation protocols.",
    },
    {
      id: 3,
      question:
        "A client authorizes testing of its staging application. Can the tester automatically test production?",
      options: [
        "Yes, because both applications belong to the same company",
        "Yes, if the same IP provider hosts both",
        "No, unless production testing is separately authorized",
        "Yes, if a scanner is configured carefully",
      ],
      correct: 2,
      explanation:
        "Authorization is asset-specific. Permission to test a staging environment never automatically extends to production systems, which carry separate availability, data, and business risks.",
    },
    {
      id: 4,
      question:
        "What should happen when a tester discovers an unexpected route into an excluded system?",
      options: [
        "Explore it to determine the maximum impact",
        "Pause the activity and obtain appropriate authorization",
        "Export the database as proof",
        "Continue if the route is easy to access",
      ],
      correct: 1,
      explanation:
        "A discovery during an assessment does not expand scope. The tester must immediately pause, preserve minimal evidence of the boundary discovery, and obtain written authorization before proceeding.",
    },
    {
      id: 5,
      question: "Which is the best approach to demonstrate an authorization weakness?",
      options: [
        "Extract as much customer data as possible",
        "Use approved test accounts and synthetic records to collect minimum necessary evidence",
        "Modify production records to show impact",
        "Publish the affected endpoint publicly",
      ],
      correct: 1,
      explanation:
        "Professional ethical hacking emphasizes proportionality and data minimization: demonstrating cross-user access between two synthetic test accounts provides 100% of the required proof without compromising customer PII.",
    },
    {
      id: 6,
      question: "Which statement about written authorization is correct?",
      options: [
        "It overrides every law and third-party restriction",
        "It automatically covers every connected cloud service",
        "It must cover the relevant assets and activities, and does not eliminate all legal obligations",
        "It is unnecessary if the tester has a certification",
      ],
      correct: 2,
      explanation:
        "Written authorization must cover the specific target assets and approved techniques. However, permission alone does not eliminate statutory duties (e.g., third-party provider terms or data protection laws).",
    },
    {
      id: 7,
      question: "What should a tester do if an assessment unexpectedly disrupts a service?",
      options: [
        "Continue until the planned tests finish",
        "Stop or pause the risky activity and notify the designated contact",
        "Delete all logs immediately",
        "Hide the disruption unless the client notices",
      ],
      correct: 1,
      explanation:
        "Causing unexpected disruption triggers a mandatory Stop Condition: immediately halt the activity, notify the emergency contact, and cooperate with infrastructure teams to restore normal service.",
    },
    {
      id: 8,
      question: "What is the purpose of retesting?",
      options: [
        "Repeat every exploit regardless of risk",
        "Verify whether the remediation addresses the underlying weakness",
        "Create additional findings for the report",
        "Prove that the entire organization is secure",
      ],
      correct: 1,
      explanation:
        "Retesting validates that engineering changes have successfully eliminated the root architectural vulnerability and that no regressions or secondary weaknesses were introduced.",
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
    { id: 1, title: "5.1 & 5.2 Understanding Ethical Hacking", badge: "Foundations & Scopes" },
    { id: 2, title: "5.3 Professional Methodologies (PTES & NIST)", badge: "8-Phase Lifecycle" },
    { id: 3, title: "5.4 Pre-Engagement Planning & Baselines", badge: "Stakeholders & Goals" },
    { id: 4, title: "5.5 Scope Definition & Asset Boundaries", badge: "In/Out Scope Matrix" },
    { id: 5, title: "5.6 Rules of Engagement & Stop Conditions", badge: "RoE Operational Rules" },
    { id: 6, title: "5.7 Building a Professional Test Plan", badge: "Execution Schedule" },
    { id: 7, title: "5.8 Safe Execution & Evidence Redaction", badge: "Data Minimization" },
    { id: 8, title: "5.9 Legal Boundaries & IT Act 2000 (India)", badge: "Statutes & DPDP" },
    { id: 9, title: "5.10 Prohibited Activities & Conduct", badge: "High-Risk Controls" },
    { id: 10, title: "5.11 – 5.15 Lab, Retesting & Assessment", badge: "Full Lab & Quiz" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Header & Navigation */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/learning/cybersecurity")}
                className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors p-2 rounded-lg hover:bg-stone-100"
                title="Back to Cybersecurity Course Overview"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Cybersecurity Track</span>
              </button>
              <div className="h-5 w-px bg-stone-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono tracking-wide uppercase bg-orange-100 text-orange-800 border border-orange-200">
                  Module 5
                </span>
                <h1 className="text-sm font-bold text-stone-900 truncate max-w-[280px] sm:max-w-md lg:max-w-lg">
                  Ethical Hacking Methodologies, Scoping & Rules of Engagement
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
            </div>
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <ModuleNav
          track="cybersecurity"
          currentModuleId="ethical-hacking-methodology"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Nova AI Tutor"
        />
      </header>

      {/* Main Workspace Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Sub-Header Banner */}
        <div className="mb-6 bg-gradient-to-r from-stone-900 via-neutral-900 to-orange-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-stone-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  NIST SP 800-115 & PTES
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-stone-800 text-stone-300 border border-stone-700">
                  OWASP WSTG & IT Act 2000
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Foundational to Intermediate
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ethical Hacking Methodologies, Scoping & Rules of Engagement
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Before any exploit is launched, professional security testing requires explicit written
                authorization, rigorous scope boundaries, rate-limiting safeguards, stop conditions, and
                adherence to statutory frameworks like the Indian IT Act 2000 and DPDP Act 2023.
              </p>
            </div>

            {/* Quick Action Tabs */}
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <button
                onClick={() => setActiveTab("theory")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "theory"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Curriculum Theory</span>
              </button>
              <button
                onClick={() => setActiveTab("roe-generator")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "roe-generator"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <FileCheck className="w-4 h-4 text-orange-400" />
                <span>RoE & Scope Generator</span>
              </button>
              <button
                onClick={() => setActiveTab("lifecycle-stepper")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "lifecycle-stepper"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Workflow className="w-4 h-4 text-orange-400" />
                <span>8-Stage Methodology</span>
              </button>
              <button
                onClick={() => setActiveTab("legal-matrix")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "legal-matrix"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Scale className="w-4 h-4 text-orange-400" />
                <span>Legal & IT Act Matrix</span>
              </button>
              <button
                onClick={() => setActiveTab("safe-poc")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "safe-poc"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>Safe PoC Calculator</span>
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "quiz"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Award className="w-4 h-4 text-orange-400" />
                <span>Knowledge Quiz (8)</span>
              </button>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* TAB 1: CURRICULUM THEORY & CONTENT                                   */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar: Topics Navigation */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-2">
              <div className="sticky top-24 bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                    Module 5 Sections
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    {topics.length} Sections
                  </span>
                </div>
                <div className="space-y-1">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(t.id)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                        (selectedTopic || 1) === t.id
                          ? "bg-orange-50 text-orange-950 font-bold border border-orange-200 shadow-xs"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate pr-2">{t.title}</span>
                      <span className="text-[10px] font-mono shrink-0 px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                        {t.badge}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100">
                  <div className="rounded-xl bg-orange-50/80 p-3 border border-orange-200/80">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-orange-900 mb-1">
                      <Gavel className="w-3.5 h-3.5 text-orange-600" />
                      <span>Legal Principle</span>
                    </div>
                    <p className="text-[11px] text-orange-800 leading-relaxed">
                      "Authorization, scope, and safety controls must always precede technical testing.
                      Technical ability is never a substitute for legal permission."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area: Detailed Section Material */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-8">
              {/* TOPIC 1 */}
              {(selectedTopic === 1 || !selectedTopic || selectedTopic === 0) && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.2
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Core Concepts</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Understanding Ethical Hacking & The Five Foundational Requirements
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Ethical hacking is an authorized security assessment in which a professional uses
                      controlled testing techniques to identify weaknesses, evaluate potential impact,
                      and recommend corrective measures. Its objective is not to maximize destruction,
                      but to provide sufficient evidence to help an organization harden its defenses.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Pillar 1</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Authorization</h4>
                        <p className="text-[11px] text-stone-600">
                          Testing is formally approved by someone with legal asset authority.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Pillar 2</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Defined Scope</h4>
                        <p className="text-[11px] text-stone-600">
                          Permitted targets, IP ranges, accounts, and methods are documented.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Pillar 3</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Controlled Execution</h4>
                        <p className="text-[11px] text-stone-600">
                          Throttling, backup checks, and safeguards prevent service disruption.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Pillar 4</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Evidence Reporting</h4>
                        <p className="text-[11px] text-stone-600">
                          Findings are supported by reproducible, proportionate proof.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Pillar 5</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Responsible Handling</h4>
                        <p className="text-[11px] text-stone-600">
                          Credentials, secrets, and data are redacted and disclosed securely.
                        </p>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-stone-900 mb-3">
                      Ethical vs. Malicious Hacking Comparison
                    </h4>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-sans">
                        <thead className="bg-stone-100 text-stone-800 font-mono text-[11px]">
                          <tr>
                            <th className="p-3 border-b border-stone-200">Dimension</th>
                            <th className="p-3 border-b border-stone-200">Ethical Hacking (White Hat)</th>
                            <th className="p-3 border-b border-stone-200">Malicious Hacking (Black Hat)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono">Authorization</td>
                            <td className="p-3 text-emerald-800 font-semibold">Explicitly authorized in writing</td>
                            <td className="p-3 text-red-800 font-semibold">Unauthorized or outside permissions</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono">Objective</td>
                            <td className="p-3 text-stone-700">Improve organizational security posture</td>
                            <td className="p-3 text-stone-700">Financial extortion, espionage, destruction</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono">Scope</td>
                            <td className="p-3 text-stone-700">Strictly defined and bounded by RoE</td>
                            <td className="p-3 text-stone-700">Uncontrolled lateral expansion</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono">Data Handling</td>
                            <td className="p-3 text-stone-700">Minimizes exposure; redacts all secrets</td>
                            <td className="p-3 text-stone-700">Steals, modifies, publishes, or sells data</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono">Testing Impact</td>
                            <td className="p-3 text-stone-700">Throttled to avoid service degradation</td>
                            <td className="p-3 text-stone-700">Disruption or outages are intentional</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono">Accountability</td>
                            <td className="p-3 text-stone-700">Full contractual and legal liability</td>
                            <td className="p-3 text-stone-700">Evades identification via proxy chains</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2 */}
              {selectedTopic === 2 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.3
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Methodologies</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Professional Methodologies (PTES, NIST SP 800-115, OWASP WSTG)
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      A recognized methodology ensures that testing is systematic, repeatable, and
                      auditable. Professional practitioners draw from four primary industry standards:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                          <Workflow className="w-4 h-4 text-orange-600" />
                          <span>1. NIST SP 800-115 Technical Guide</span>
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed mb-2">
                          Provides federal standards for planning, conducting, analyzing, and mitigating
                          technical security testing. Focuses heavily on test safety, evidence management,
                          and risk prioritization.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-orange-600" />
                          <span>2. OWASP Web Security Testing Guide (WSTG)</span>
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed mb-2">
                          The comprehensive global reference for evaluating web applications, REST APIs,
                          authentication flows, session management, BOLA/IDOR, input validation, and business logic.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-orange-600" />
                          <span>3. PTES (Pen Testing Execution Standard)</span>
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed mb-2">
                          Organizes the commercial engagement lifecycle: pre-engagement, intelligence gathering,
                          threat modeling, vulnerability analysis, exploitation, post-exploitation, and reporting.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                          <Crosshair className="w-4 h-4 text-orange-600" />
                          <span>4. MITRE ATT&CK Framework</span>
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed mb-2">
                          A curated taxonomy of real-world adversary tactics and techniques. Used to plan
                          adversary emulation scenarios and assess detection coverage in purple-teaming.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3 */}
              {selectedTopic === 3 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.4
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Pre-Engagement</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Pre-Engagement Planning, Stakeholders & Baselines
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Pre-engagement aligns business expectations with operational constraints.
                      Clear stakeholder alignment ensures that testing does not trigger unintended
                      incident alarms or disrupt revenue operations.
                    </p>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6">
                      <h4 className="text-sm font-bold text-stone-900 mb-3">
                        Core Stakeholder Responsibilities Matrix
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                        <div className="p-3 rounded-lg bg-white border border-stone-200">
                          <strong className="text-orange-900 block mb-0.5">Asset Owner (CISO/VP):</strong>
                          <span className="text-stone-600">Confirms legal authority and executes authorization letter.</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white border border-stone-200">
                          <strong className="text-orange-900 block mb-0.5">Infrastructure SRE:</strong>
                          <span className="text-stone-600">Verifies backup snapshots, whitelists tester IPs, monitors loads.</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white border border-stone-200">
                          <strong className="text-orange-900 block mb-0.5">SOC / Incident Lead:</strong>
                          <span className="text-stone-600">Coordinates escalation and confirms test artifacts vs actual attacks.</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white border border-stone-200">
                          <strong className="text-orange-900 block mb-0.5">Legal & Compliance:</strong>
                          <span className="text-stone-600">Ensures compliance with DPDP Act, GDPR, and third-party SaaS SLAs.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 4 */}
              {selectedTopic === 4 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.5
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Scoping</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Scope Definition & Asset Boundaries
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Scope definition is the single most critical legal control of a security assessment.
                      Authorization is strictly asset-specific: permission to test a client's staging web
                      service does <em>not</em> grant permission to test their production database or
                      third-party cloud dependencies.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
                        <h4 className="text-sm font-bold text-emerald-950 mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Typical In-Scope Assets</span>
                        </h4>
                        <ul className="text-xs text-emerald-900 space-y-1.5 list-disc list-inside">
                          <li>Named staging hostnames: <code className="bg-white px-1 rounded">staging.prepspaces.com</code></li>
                          <li>Explicitly assigned IP ranges and VPC subnets.</li>
                          <li>Client-supplied test candidate & recruiter credentials.</li>
                          <li>Documented REST API endpoints and mock databases.</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                        <h4 className="text-sm font-bold text-red-950 mb-2 flex items-center gap-1.5">
                          <AlertOctagon className="w-4 h-4 text-red-600" />
                          <span>Strictly Out-of-Scope Assets</span>
                        </h4>
                        <ul className="text-xs text-red-900 space-y-1.5 list-disc list-inside">
                          <li>Production databases holding real candidate evaluations.</li>
                          <li>Third-party authentication providers (Auth0/Google).</li>
                          <li>Payment gateways (Stripe, Razorpay).</li>
                          <li>Shared cloud multitenant hypervisors.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 5 */}
              {selectedTopic === 5 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.6
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Rules of Engagement</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Rules of Engagement (RoE) & Predefined Stop Conditions
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      The Rules of Engagement (RoE) turn legal agreements into operational reality.
                      Crucially, RoEs establish predefined <strong>Stop Conditions</strong>—specific events
                      that require immediate testing cessation and escalation:
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/60 text-xs">
                        <strong className="text-red-950 block mb-1">Stop Condition 1: Encountering Real PII</strong>
                        <p className="text-red-900 leading-relaxed">
                          If an authorization bypass unexpectedly exposes live candidate records (real names, SSNs, credit cards),
                          the tester must immediately pause, preserve one redacted log line, and notify the security lead.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/60 text-xs">
                        <strong className="text-red-950 block mb-1">Stop Condition 2: Unintended Denial of Service</strong>
                        <p className="text-red-900 leading-relaxed">
                          If testing causes database CPU spikes &gt; 90%, 500 error cascades, or latency &gt; 2000ms,
                          all testing must pause until infrastructure health is restored.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/60 text-xs">
                        <strong className="text-red-950 block mb-1">Stop Condition 3: Evidence of Ongoing Active Compromise</strong>
                        <p className="text-red-950 block mb-1 text-red-900 leading-relaxed">
                          If an assessment discovers foreign web shells, unauthorized administrative logins, or live ransomware,
                          testing pauses immediately to avoid contaminating forensic evidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 6 */}
              {selectedTopic === 6 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.7
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Test Plan</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Building a Professional Penetration Test Plan
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      A test plan schedules testing milestones, assigns roles, and defines safety
                      verifications for each testing category:
                    </p>

                    <div className="space-y-2 text-xs text-stone-700 mb-6">
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Day 1: Pre-Flight Verification:</strong> Confirm target DNS resolution, verify whitelist rules, test supplied credentials, and baseline system response latency.
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Day 2–3: Web & API Testing:</strong> Execute OWASP WSTG test cases for authentication, session handling, CSRF, and BOLA on the staging API.
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Day 4: Controlled Exploitation:</strong> Safely validate high-risk hypotheses using synthetic test data within off-peak hours.
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Day 5: Reporting & Debrief:</strong> Draft executive summary, document reproduction steps, calculate CVSS scores, and present initial findings.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 7 */}
              {selectedTopic === 7 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.8
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Safe Execution</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Safe Test Execution, Evidence Handling & Redaction
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Evidence must be collected proportionally. Never download entire database dumps
                      or customer lists to prove a vulnerability. Collect only the minimum verifiable proof:
                    </p>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6">
                      <h4 className="text-sm font-bold text-stone-900 mb-2">
                        Evidence Redaction & Chain of Custody Standard
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed mb-3">
                        When capturing HTTP request/response traffic for reports:
                      </p>
                      <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                        <li>Redact session tokens, authorization headers, and API keys: <code className="text-orange-800 bg-white px-1 py-0.5 rounded border border-stone-200">Bearer eyJhbG...[REDACTED]</code>.</li>
                        <li>Mask all customer names, emails, and phone numbers.</li>
                        <li>Store raw evidence files in encrypted volumes (AES-256) with strict access control.</li>
                        <li>Compute SHA-256 integrity hashes for all evidence attachments to guarantee evidentiary chain of custody.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 8 */}
              {selectedTopic === 8 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.9
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Statutory Frameworks</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Legal Boundaries & Indian Statutory Frameworks (IT Act & DPDP Act)
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Security testing is governed by strict statutory frameworks. Technical skill or
                      good intentions do not exempt a tester from criminal or civil liability:
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-1">
                          1. Information Technology Act, 2000 (India)
                        </h4>
                        <div className="text-xs text-stone-600 space-y-2 mt-2">
                          <p>
                            <strong>Section 43:</strong> Imposes civil liability and heavy compensation for accessing,
                            downloading, introducing contamination, or disrupting a computer system without the owner's permission.
                          </p>
                          <p>
                            <strong>Section 66:</strong> Criminalizes any act referred to in Section 43 committed dishonestly
                            or fraudulently, punishable by imprisonment up to three years or fines up to ₹5 Lakhs.
                          </p>
                          <p>
                            <strong>Section 70B:</strong> Authorizes CERT-In directions mandating compliance with reporting and cyber practices.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-1">
                          2. Digital Personal Data Protection Act, 2023 (DPDP Act)
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed mt-2">
                          Establishes comprehensive obligations for processing digital personal data. Entities must
                          maintain reasonable security safeguards. Penalties for failing to prevent a personal data breach
                          can reach ₹250 Crores, underscoring why penetration testers must never extract live customer records.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-1">
                          3. CERT-In Directions (6-Hour Incident Notification)
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed mt-2">
                          Requires mandatory reporting of specified cybersecurity incidents to CERT-In within 6 hours
                          of discovery, necessitating clear coordination channels between testing teams and client incident handlers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 9 */}
              {selectedTopic === 9 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.10 & 5.11
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Professional Conduct</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Prohibited Activities & Professional Ethics
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Certain testing techniques carry catastrophic risk and must be treated as
                      strictly prohibited unless explicit, lawful consensus is documented:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                      <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50">
                        <strong className="text-red-950 block mb-1">Denial of Service Floods:</strong>
                        <span className="text-red-900">SYN floods or HTTP exhaustion that risks crashing critical operations.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50">
                        <strong className="text-red-950 block mb-1">Destructive Exploitation:</strong>
                        <span className="text-red-900">Modifying or deleting production records to prove an exploit.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50">
                        <strong className="text-red-950 block mb-1">Unauthorized Persistence:</strong>
                        <span className="text-red-900">Planting persistent backdoors, rootkits, or scheduled cronjobs.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50">
                        <strong className="text-red-950 block mb-1">Social Engineering Phishing:</strong>
                        <span className="text-red-900">Targeting employees without an approved, ethical human simulation plan.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 10 */}
              {selectedTopic === 10 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 5.12 – 5.15
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Lab, Retesting & References</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Practical Penetration Test Lab & Academic References
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Complete the 5-step penetration test planning lab for the interview platform:
                    </p>

                    <div className="space-y-3 mb-6 text-xs text-stone-700">
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Exercise A (Scope):</strong> Define the staging web app, APIs, and synthetic databases in-scope; strictly exclude production and Stripe.
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Exercise B (Rules of Engagement):</strong> Specify 15 req/sec rate throttling, 20:00-04:00 window, and emergency stop conditions.
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Exercise C (Test Plan):</strong> Structure test cases for authentication, BOLA, XSS, and error disclosure.
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Exercise D (Stop Condition Triage):</strong> Simulate unexpected customer PII exposure; pause and escalate within 30 minutes.
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong>Exercise E (Reporting & Retest):</strong> Draft technical finding template with reproduction steps and verify remediation.
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-stone-900 mb-3">
                      Authoritative Academic & Official References
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                      <a
                        href="https://csrc.nist.gov/pubs/sp/800/115/final"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            NIST SP 800-115 Technical Guide
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            Information Security Testing and Assessment
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>

                      <a
                        href="https://owasp.org/www-project-web-security-testing-guide/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            OWASP Web Security Testing Guide (WSTG)
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            Web Application & API Testing Methodology
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>

                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/1999?locale=en"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            India Code — IT Act, 2000
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            Sections 43, 66, and 70B Statutory Framework
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>

                      <a
                        href="https://www.meity.gov.in/content/digital-personal-data-protection-act-2023-dpdp-act"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            MeitY — DPDP Act, 2023
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            Digital Personal Data Protection Compliance
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 2: RULES OF ENGAGEMENT (RoE) & SCOPE GENERATOR                   */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "roe-generator" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="pb-6 border-b border-stone-100 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-orange-600" />
                  <span>Rules of Engagement (RoE) & Scope Contract Generator</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Configure operational parameters, testing throttles, and mandatory stop conditions
                  to generate an audit-ready, legally defensible RoE document based on NIST SP 800-115.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* RoE Form Inputs */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3 text-xs">
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Client Organization:</label>
                      <input
                        type="text"
                        value={roeConfig.clientName}
                        onChange={(e) => setRoeConfig({ ...roeConfig, clientName: e.target.value })}
                        className="w-full p-2 rounded-lg border border-stone-300 bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Approved Target Hostname:</label>
                      <input
                        type="text"
                        value={roeConfig.targetDomain}
                        onChange={(e) => setRoeConfig({ ...roeConfig, targetDomain: e.target.value })}
                        className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Testing Window (Off-Peak):</label>
                      <input
                        type="text"
                        value={roeConfig.testingWindow}
                        onChange={(e) => setRoeConfig({ ...roeConfig, testingWindow: e.target.value })}
                        className="w-full p-2 rounded-lg border border-stone-300 bg-white"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-stone-700 mb-1">
                        <span>Max Rate Throttling:</span>
                        <span className="text-orange-600 font-mono">{roeConfig.rateLimit} req/sec</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={roeConfig.rateLimit}
                        onChange={(e) => setRoeConfig({ ...roeConfig, rateLimit: parseInt(e.target.value) })}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-2">
                      <span className="font-bold text-stone-700 block">Permitted Techniques:</span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={roeConfig.permittedAuth}
                          onChange={() => toggleRoeFlag("permittedAuth")}
                          className="rounded text-orange-600"
                        />
                        <span>Authentication & Session Testing</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={roeConfig.permittedBOLA}
                          onChange={() => toggleRoeFlag("permittedBOLA")}
                          className="rounded text-orange-600"
                        />
                        <span>BOLA / Object-Level Authorization</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={roeConfig.permittedSqlInj}
                          onChange={() => toggleRoeFlag("permittedSqlInj")}
                          className="rounded text-orange-600"
                        />
                        <span>Non-Destructive SQLi (SELECT 1 only)</span>
                      </label>
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-2">
                      <span className="font-bold text-red-900 block">Mandatory Stop Conditions:</span>
                      <label className="flex items-center gap-2 cursor-pointer text-red-900">
                        <input
                          type="checkbox"
                          checked={roeConfig.stopConditionData}
                          onChange={() => toggleRoeFlag("stopConditionData")}
                          className="rounded text-red-600"
                        />
                        <span>Halt on Accessing Real Customer PII</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-red-900">
                        <input
                          type="checkbox"
                          checked={roeConfig.stopConditionOutage}
                          onChange={() => toggleRoeFlag("stopConditionOutage")}
                          className="rounded text-red-600"
                        />
                        <span>Halt on Service Latency Spike &gt; 500ms</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Generated RoE Document Preview */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-mono font-bold uppercase text-stone-500">
                      Generated Contractual RoE Artifact
                    </span>
                    <button
                      onClick={() => copyCode(generatedRoEDocument, "roe-doc")}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold hover:bg-stone-50 transition-colors"
                    >
                      {copiedCodeId === "roe-doc" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>Copy Document</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-stone-900 text-stone-300 font-mono text-[11px] leading-relaxed overflow-x-auto flex-1 min-h-[360px] whitespace-pre-wrap">
                    {generatedRoEDocument}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 3: 8-STAGE METHODOLOGY LIFECYCLE STEPPER                         */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "lifecycle-stepper" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="pb-6 border-b border-stone-100 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-orange-600" />
                  <span>The 8-Stage Penetration Testing Lifecycle (PTES & NIST)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Navigate through each standardized phase of an end-to-end security assessment to
                  inspect required inputs, toolchains, safety controls, and formal deliverables.
                </p>
              </div>

              {/* Stepper Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
                {lifecyclePhases.map((phase) => (
                  <button
                    key={phase.step}
                    onClick={() => setActiveStep(phase.step)}
                    className={`p-2.5 rounded-xl text-center border transition-all ${
                      activeStep === phase.step
                        ? "border-orange-500 bg-orange-50 font-bold text-orange-950 ring-2 ring-orange-500/20 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                    }`}
                  >
                    <div className="text-[10px] font-mono text-stone-400">Step {phase.step}</div>
                    <div className="text-xs truncate mt-0.5">{phase.name.split(". ")[1]}</div>
                  </button>
                ))}
              </div>

              {/* Selected Phase Detail Card */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-orange-100 text-orange-800 border border-orange-200">
                      {currentPhase.standard}
                    </span>
                    <h4 className="text-base font-extrabold text-stone-900 mt-1">{currentPhase.name}</h4>
                  </div>
                  <span className="text-xs text-stone-600 font-mono">Phase {currentPhase.step} of 8</span>
                </div>

                <div className="text-xs text-stone-800 leading-relaxed font-medium">
                  <strong>Core Phase Objective:</strong> {currentPhase.objective}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                    <div className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-orange-600" />
                      <span>Primary Inputs & Toolchain</span>
                    </div>
                    <p className="text-stone-600"><strong>Inputs:</strong> {currentPhase.primaryInputs}</p>
                    <p className="text-stone-600 font-mono"><strong>Tools:</strong> {currentPhase.toolchain}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                    <div className="font-bold text-stone-900 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                      <span>Safety Controls & Deliverable</span>
                    </div>
                    <p className="text-stone-600"><strong>Safety Constraint:</strong> {currentPhase.safetyControls}</p>
                    <p className="text-emerald-800 font-bold"><strong>Deliverable:</strong> {currentPhase.deliverable}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 4: LEGAL COMPLIANCE & IT ACT MATRIX                              */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "legal-matrix" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="pb-6 border-b border-stone-100 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-orange-600" />
                  <span>Legal Boundaries & Indian Statutory Liability Matrix</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Examine statutory liability under the Indian IT Act 2000, CERT-In reporting rules,
                  and the Digital Personal Data Protection Act (DPDP) 2023 across real testing scenarios.
                </p>
              </div>

              {/* Scenario Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {Object.entries(legalScenarios).map(([key, sc]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedLegalScenario(key)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedLegalScenario === key
                        ? "border-orange-500 bg-orange-50/70 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="text-xs font-bold text-stone-900">{sc.name}</div>
                  </button>
                ))}
              </div>

              {/* Active Scenario Card */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
                <h4 className="text-sm font-bold text-stone-900">{activeLegal.name}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{activeLegal.description}</p>

                <div className="space-y-3 pt-2">
                  {activeLegal.statutes.map((st, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-xs font-bold text-stone-900">{st.law}</h5>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${st.badge}`}>
                          {st.verdict}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">{st.clause}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60 mt-4 text-xs">
                  <strong className="text-orange-950 font-bold block mb-1">
                    Mandatory Professional Action Protocol:
                  </strong>
                  <p className="text-orange-900 leading-relaxed">{activeLegal.remediationProtocol}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 5: SAFE PROPORTIONATE PoC CALCULATOR                             */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "safe-poc" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="pb-6 border-b border-stone-100 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-600" />
                  <span>Controlled Exploitation: Reckless vs. Safe PoC Calculator</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Compare dangerous, reckless exploitation against professional, proportionate
                  proof-of-concept verification that proves vulnerability without risking system stability or customer data.
                </p>
              </div>

              {/* Scenario Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {Object.entries(pocScenarios).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPocType(key)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedPocType === key
                        ? "border-orange-500 bg-orange-50/70 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="text-xs font-bold text-stone-900">{item.title}</div>
                  </button>
                ))}
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-red-950 text-xs">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Reckless / Destructive Testing (UNETHICAL)</span>
                  </div>
                  <p className="text-xs text-red-900 leading-relaxed">{currentPoc.recklessApproach}</p>
                </div>

                <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-950 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Safe Proportionate Proof-of-Concept (ETHICAL)</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed">{currentPoc.professionalApproach}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="font-bold text-stone-800">
                  Impact Assessment: {currentPoc.safetyVerdict}
                </span>
                <span className="font-mono font-bold text-orange-700 bg-white px-2.5 py-1 rounded border border-stone-200">
                  {currentPoc.riskDiff}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT QUIZ (8 QUESTIONS)                       */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between pb-6 border-b border-stone-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span>Module 5 Knowledge Assessment</span>
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Validate your understanding of authorization limits, Rules of Engagement,
                    stop conditions, data minimization, and Indian cyber statutory obligations.
                  </p>
                </div>

                {submittedQuiz && (
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase text-stone-500 font-bold block">
                      Final Score
                    </span>
                    <span className="text-2xl font-black text-orange-600 font-mono">
                      {quizScore} / {quizQuestions.length}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const isAnswered = selectedQuizAnswers[q.id] !== undefined;
                  const isCorrect = selectedQuizAnswers[q.id] === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        submittedQuiz
                          ? isCorrect
                            ? "border-emerald-200 bg-emerald-50/30"
                            : "border-red-200 bg-red-50/30"
                          : "border-stone-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-mono font-bold text-stone-700">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-stone-900 mb-3">{q.question}</h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedQuizAnswers[q.id] === optIdx;
                              let btnStyle =
                                "border-stone-200 bg-white hover:bg-stone-50 text-stone-700";

                              if (submittedQuiz) {
                                if (optIdx === q.correct) {
                                  btnStyle = "border-emerald-500 bg-emerald-100 text-emerald-900 font-bold";
                                } else if (isSelected) {
                                  btnStyle = "border-red-500 bg-red-100 text-red-900 font-bold";
                                }
                              } else if (isSelected) {
                                btnStyle =
                                  "border-orange-500 bg-orange-50 text-orange-950 font-semibold ring-2 ring-orange-500/20";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                                  className={`p-3 rounded-xl border text-left text-xs transition-all ${btnStyle}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {submittedQuiz && (
                            <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                              <strong className="text-stone-900 font-mono">Explanation: </strong>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedQuizAnswers({});
                    setSubmittedQuiz(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 hover:bg-stone-50"
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
                    Assessment verified against NIST SP 800-115 & Indian IT Act statutory standards.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Nova AI Mentor Sidecar Drawer */}
      {showAiTutor && (
        <LearningRo
          courseName="Cybersecurity Master Course"
          moduleName="Module 5: Ethical Hacking Methodologies, Scoping & Rules of Engagement"
          currentTopic={topics.find((t) => t.id === (selectedTopic || 1))?.title || "Overview"}
          onClose={() => setShowAiTutor(false)}
        />
      )}
    </div>
  );
}
