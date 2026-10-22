import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModuleNav from "./ModuleNav";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  FileCode,
  FileText,
  Search,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Award,
  HelpCircle,
  Play,
  RotateCcw,
  Sparkles,
  Check,
  X,
  Copy,
  Activity,
  Layers,
  Fingerprint,
  Radio,
  Lock,
  Unlock,
  Key,
  Server,
  Database,
  Cpu,
  Clock,
  Eye,
  FileSearch,
  Network,
  Share2,
  HardDrive,
  RefreshCw,
  FolderLock,
  Flame,
  Workflow,
  BarChart3,
  Calendar,
  Sliders,
  SlidersHorizontal,
  Compass,
  FileSignature,
  FileCheck,
  PhoneCall,
  UserCheck,
  AlertOctagon,
  Scale,
  Target,
  Crosshair,
  ClipboardList,
  Binary,
  Globe,
  Users,
  Zap,
  Bug,
  GitMerge,
  Filter,
  AlertCircle
} from "lucide-react";

export default function CybersecurityRedBluePurple() {
  const navigate = useNavigate();

  // Tab State
  const [activeTab, setActiveTab] = useState("theory");
  const [activeLesson, setActiveLesson] = useState(1);

  // Copy helper
  const [copiedSnippets, setCopiedSnippets] = useState({});
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippets((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedSnippets((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE CHECKPOINTS (LESSONS 1 & 6)
  // ---------------------------------------------------------------------------
  const [checkpoint1Answer, setCheckpoint1Answer] = useState(null);
  const [checkpoint1Submitted, setCheckpoint1Submitted] = useState(false);

  const [checkpoint2Answer, setCheckpoint2Answer] = useState(null);
  const [checkpoint2Submitted, setCheckpoint2Submitted] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 1: DEFINE TEAM ROLES & EXERCISE CHARTER
  // ---------------------------------------------------------------------------
  const [lab1Objective, setLab1Objective] = useState("Validate detection and triage of unapproved IAM privileged-role assignments in cloud staging.");
  const [lab1Scenario, setLab1Scenario] = useState("T1098: Account Manipulation via synthetic role delegation");
  const [lab1RedLead, setLab1RedLead] = useState("Alex Vance (Simulation Operator)");
  const [lab1BlueLead, setLab1BlueLead] = useState("Sarah Lin (Detection Analyst)");
  const [lab1PurpleLead, setLab1PurpleLead] = useState("Marcus Brody (Exercise Coordinator)");
  const [lab1StopCondition, setLab1StopCondition] = useState("Any modification to production IAM or latency spike > 2,000ms");
  const [lab1GeneratedCharter, setLab1GeneratedCharter] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 2: ATT&CK-INFORMED DETECTION PLAN ARCHITECT
  // ---------------------------------------------------------------------------
  const [lab2Technique, setLab2Technique] = useState("T1098");
  const [lab2AttackVersion, setLab2AttackVersion] = useState("v20.0 (October 2026)");
  const [lab2DataSource, setLab2DataSource] = useState("cloud-audit");
  const [lab2Hypothesis, setLab2Hypothesis] = useState(
    "Detect privileged role changes that occur outside the approved change window or lack an associated valid ticket ID, followed by administrative activity."
  );
  const [lab2GeneratedPlan, setLab2GeneratedPlan] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 3: INVESTIGATE A SIMULATED DETECTION PIPELINE FAILURE
  // ---------------------------------------------------------------------------
  const [lab3SelectedFix, setLab3SelectedFix] = useState(null);
  const [lab3FixVerified, setLab3FixVerified] = useState(false);

  const lab3PipelineStages = [
    { stage: "1. Test Event Generated", status: "pass", detail: "Synthetic IAM RoleAssignment event emitted in lab environment." },
    { stage: "2. Raw Event Collected", status: "pass", detail: "Central syslog collector received JSON payload at 10:15:02 UTC." },
    { stage: "3. Actor Identity Parsed", status: "pass", detail: "Field 'actor.id' successfully normalized to 'lab-user-01'." },
    { stage: "4. Target Role Field Parsed", status: "fail", detail: "MISSING: Parser dropped 'requestParameters.roleArn' due to schema mismatch." },
    { stage: "5. Detection Rule Evaluated", status: "fail", detail: "Rule condition (target_role IN ['Admin','SecOps']) evaluated to NULL (No Match)." },
    { stage: "6. Alert Generated", status: "fail", detail: "No alert dispatched to SIEM queue." },
    { stage: "7. Analyst Case Created", status: "fail", detail: "SOC queue received 0 incidents." },
  ];

  // ---------------------------------------------------------------------------
  // LAB 4: DESIGN A PURPLE-TEAM DETECTION VALIDATION
  // ---------------------------------------------------------------------------
  const [lab4SelectedScenario, setLab4SelectedScenario] = useState("all");
  const lab4Scenarios = [
    {
      id: "approved",
      name: "Approved Change Window",
      roleChange: true,
      ticketValid: true,
      expectedAlert: false,
      actualResult: "No Alert (Correct)",
      classification: "True Negative"
    },
    {
      id: "unapproved",
      name: "Unapproved Privilege Escalation",
      roleChange: true,
      ticketValid: false,
      expectedAlert: true,
      actualResult: "Actionable Alert Dispatched (Correct)",
      classification: "True Positive"
    },
    {
      id: "routine",
      name: "Standard Read Operation",
      roleChange: false,
      ticketValid: false,
      expectedAlert: false,
      actualResult: "No Alert (Correct)",
      classification: "True Negative"
    },
    {
      id: "missing_ingestion",
      name: "Missing Ticket API Ingestion",
      roleChange: true,
      ticketValid: "null",
      expectedAlert: true,
      actualResult: "Medium Alert (Triage: Ingestion Degraded)",
      classification: "True Positive (Enriched)"
    }
  ];

  // ---------------------------------------------------------------------------
  // LAB 5: RUN AN AUTHORIZED, BENIGN CONTROL TEST (ATOMIC RED TEAM SIMULATOR)
  // ---------------------------------------------------------------------------
  const [lab5Step, setLab5Step] = useState(1);
  const [lab5PrereqPassed, setLab5PrereqPassed] = useState(false);
  const [lab5TestOutput, setLab5TestOutput] = useState(null);
  const [lab5CleanupDone, setLab5CleanupDone] = useState(false);

  const handleLab5RunTest = () => {
    setLab5TestOutput({
      command: "Invoke-AtomicTest T1098 -TestNumbers 1 -PromptForInputArgs $false",
      time: "2026-10-22T10:30:15Z",
      output: "[+] Simulating benign creation of local test role 'Atomic-Lab-Auditor'...\n[+] Event logged: Security ID 4728 (A member was added to a security-enabled group)\n[+] Test complete. Target role created in isolated sandbox.",
      detected: true,
      telemetry: "WinEventLog:Security / EventID: 4728 / TargetRole: Atomic-Lab-Auditor"
    });
    setLab5Step(3);
  };

  const handleLab5Cleanup = () => {
    setLab5CleanupDone(true);
    setLab5Step(4);
  };

  // ---------------------------------------------------------------------------
  // LAB 6: PURPLE-TEAM IMPROVEMENT CYCLE (BEFORE & AFTER)
  // ---------------------------------------------------------------------------
  const [lab6CycleStage, setLab6CycleStage] = useState("baseline"); // 'baseline', 'remediated', 'retested'

  // ---------------------------------------------------------------------------
  // 9-POINT PURPLE-TEAM READINESS CHECKLIST
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    c1: true,
    c2: true,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistTotal = Object.values(checklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // QUIZ - 6 QUESTIONS (FROM SPECIFICATION)
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the main objective of purple teaming?",
      options: [
        "Maximize alert volume regardless of quality.",
        "Collaboratively validate and improve defensive capabilities.",
        "Replace all blue-team responsibilities.",
        "Perform unapproved tests without informing anyone responsible for safety."
      ],
      correctIndex: 1,
      explanation: "Purple teaming is a collaborative method connecting simulated adversary behavior to measurable defensive improvements—testing whether telemetry, detection rules, triage, and response work together."
    },
    {
      id: "q2",
      question: "What should a red team do when an exercise reaches an out-of-scope asset?",
      options: [
        "Continue because the asset is related to the scenario.",
        "Increase test activity to confirm its weakness.",
        "Stop the relevant activity, document the event and seek scope clarification.",
        "Add the asset to the scope informally."
      ],
      correctIndex: 2,
      explanation: "Whenever testing activities encounter or inadvertently reach an out-of-scope asset, the operator must immediately halt testing on that asset, preserve logs, and contact the exercise coordinator/white team for clarification."
    },
    {
      id: "q3",
      question: "A synthetic event is present in raw logs, but the detection does not match because a required field is missing. What is the best next step?",
      options: [
        "Investigate parsing or normalization before changing the detection threshold.",
        "Conclude that the event was malicious.",
        "Disable the logging source.",
        "Assume the SIEM is functioning correctly without further checks."
      ],
      correctIndex: 0,
      explanation: "If raw logs exist but parsed fields are missing, this is a data-quality/parsing failure. Changing the rule threshold or logic will not fix a missing field; the log parser or schema normalization must be corrected first."
    },
    {
      id: "q4",
      question: "What is the purpose of using MITRE ATT&CK in a threat-informed exercise?",
      options: [
        "To prove that every mapped technique has occurred in the environment.",
        "To replace test authorization and rules of engagement.",
        "To guarantee that all relevant threats are covered.",
        "To provide a shared way to describe adversary behavior and inform defensive tests."
      ],
      correctIndex: 3,
      explanation: "MITRE ATT&CK provides a shared, standardized taxonomy of real-world adversary tactics and techniques. It does not replace authorization, guarantee coverage, or prove an attack occurred, but enables precise, threat-informed defensive testing."
    },
    {
      id: "q5",
      question: "Which measurement best demonstrates that a specific detection improvement worked?",
      options: [
        "The total number of rules in the SIEM increased.",
        "The same approved test scenario was rerun and produced the expected result, with regression cases also reviewed.",
        "The team held a meeting after the exercise.",
        "The number of dashboards increased."
      ],
      correctIndex: 1,
      explanation: "A verified improvement is demonstrated when the identical controlled scenario is re-executed and yields the expected detection and alert, while regression testing confirms benign traffic does not trigger false positives."
    },
    {
      id: "q6",
      question: "Which statement best describes a quality detection rule?",
      options: [
        "Any event that matches the rule is automatically a confirmed incident.",
        "It only needs to detect suspicious test cases, not benign activity.",
        "It uses appropriate telemetry, is validated against positive and benign cases, and provides an actionable alert.",
        "It should never be reviewed after deployment."
      ],
      correctIndex: 2,
      explanation: "A high-quality detection rule relies on validated telemetry, undergoes rigorous testing against both true-positive and benign baseline scenarios, minimizes false positives, and equips the SOC analyst with actionable context and triage instructions."
    }
  ];

  const handleSelectQuizAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 antialiased font-sans relative pb-20 selection:bg-orange-500 selection:text-white">
      {/* Ambient Atmospheric Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-200/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed top-20 right-1/4 w-96 h-96 bg-rose-200/25 rounded-full blur-[90px] pointer-events-none" />
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Track & Module Navigation */}
      <ModuleNav track="cybersecurity" currentModuleId="red-blue-purple-teams" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ========================================================================= */}
        {/* HERO CARD                                                                 */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-10 backdrop-blur-md shadow-xs mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-bl from-purple-400/10 via-rose-400/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-950 border border-purple-200">
              <Users className="w-3.5 h-3.5 text-purple-600" />
              Module 22
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
              Intermediate to Advanced
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
              Red Team Operations
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
              Blue Team Defense
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              Detection Engineering &amp; Purple Teaming
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Red Team and Blue Team Operations, Detection Engineering, and Purple Team Exercises
          </h1>

          <p className="text-base md:text-lg text-stone-600 max-w-4xl leading-relaxed mb-6">
            A resilient security organization unites two critical perspectives: how an adversary challenges defenses and how defenders detect, investigate, and respond to suspicious activity. Master the collaborative purple-team lifecycle: define exercise charters, structure threat-informed scenarios using <strong>MITRE ATT&CK Enterprise v20.0 (October 2026)</strong>, build hypothesis-driven detection analytics, isolate pipeline failures, and validate measurable defensive improvements.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#e7e3da]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Curriculum</p>
                <p className="text-sm font-bold text-stone-800">8 In-Depth Lessons</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Practice</p>
                <p className="text-sm font-bold text-stone-800">6 Interactive Sandboxes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Framework</p>
                <p className="text-sm font-bold text-stone-800">MITRE ATT&CK v20.0</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Capstone</p>
                <p className="text-sm font-bold text-stone-800">Purple Team Cycle</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NAVIGATION TABS                                                           */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#e7e3da] pb-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Curriculum &amp; Core Theory</span>
          </button>

          <button
            onClick={() => setActiveTab("labs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "labs"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>2. Practical Labs &amp; Sandboxes</span>
          </button>

          <button
            onClick={() => setActiveTab("case-study")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "case-study"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>3. Walkthrough &amp; Case Study</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "quiz"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>4. Knowledge Assessment</span>
          </button>

          <button
            onClick={() => setActiveTab("capstone")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "capstone"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>5. Portfolio Capstone Project</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM & THEORY                                               */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Lesson Selector */}
            <div className="lg:col-span-1 space-y-2">
              <div className="p-4 bg-white/70 border border-[#e7e3da] rounded-2xl mb-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Module Lessons</p>
                <div className="space-y-1">
                  {[
                    { num: 1, title: "Red, Blue, Purple & White Teams" },
                    { num: 2, title: "Pentest vs Emulation vs Purple" },
                    { num: 3, title: "MITRE ATT&CK v20.0 Exercises" },
                    { num: 4, title: "Detection Engineering Lifecycle" },
                    { num: 5, title: "Running a Purple-Team Exercise" },
                    { num: 6, title: "Safe Emulation & Control Testing" },
                    { num: 7, title: "Measuring Coverage & Latency" },
                    { num: 8, title: "Governance, Comms & Reporting" },
                  ].map((l) => (
                    <button
                      key={l.num}
                      onClick={() => setActiveLesson(l.num)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition flex items-center justify-between cursor-pointer ${
                        activeLesson === l.num
                          ? "bg-purple-600 text-white shadow-xs font-semibold"
                          : "text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      <span>Lesson {l.num}: {l.title}</span>
                      <ChevronRight className={`w-3 h-3 ${activeLesson === l.num ? "text-white" : "text-stone-400"}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Learning Objectives Card */}
              <div className="p-4 bg-white/70 border border-[#e7e3da] rounded-2xl text-xs space-y-2">
                <p className="font-bold text-stone-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  Key Takeaways
                </p>
                <ul className="space-y-1.5 text-stone-600 list-disc list-inside">
                  <li>Understand Red, Blue, Purple &amp; White roles</li>
                  <li>Structure tests using ATT&CK v20.0</li>
                  <li>Translate threat reports into safe hypotheses</li>
                  <li>Isolate pipeline failures (telemetry vs logic)</li>
                  <li>Perform Atomic Red Team simulations safely</li>
                  <li>Quantify detection and triage latencies</li>
                </ul>
              </div>
            </div>

            {/* Lesson Body */}
            <div className="lg:col-span-3 space-y-8">
              {/* LESSON 1 */}
              {activeLesson === 1 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 1</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      Understanding Red, Blue, Purple and White Teams
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      Defining organizational responsibilities, core missions, shared perspectives, and common misconceptions.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Modern enterprise defense requires continuous verification. Organizations cannot assume their security tooling works simply because agents are installed and licenses are active. Four distinct functional perspectives collaborate to test, defend, coordinate, and improve the defensive posture:
                    </p>

                    {/* Team Definitions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                      <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50/50">
                        <span className="text-xs font-bold text-rose-700 uppercase flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5" />
                          Red Team (Adversary Emulation)
                        </span>
                        <p className="text-xs text-stone-700 mt-2">
                          An authorized team that simulates agreed adversary behaviors to assess security posture, demonstrate business impact, and evaluate whether attack paths can be detected or prevented. A professional red team strictly adheres to Rules of Engagement (RoE).
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50">
                        <span className="text-xs font-bold text-blue-700 uppercase flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Blue Team (Defensive Operations)
                        </span>
                        <p className="text-xs text-stone-700 mt-2">
                          Responsible for protecting the environment: monitoring and investigating alerts, managing endpoint/cloud/identity controls, developing and tuning detection analytics, handling incidents, and remediating weaknesses.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/50">
                        <span className="text-xs font-bold text-purple-700 uppercase flex items-center gap-1.5">
                          <GitMerge className="w-3.5 h-3.5" />
                          Purple Team (Collaborative Validation)
                        </span>
                        <p className="text-xs text-stone-700 mt-2">
                          A collaborative working model connecting simulated adversary behavior directly to measurable defensive improvements. Instead of operating in silos, red and blue work together to test hypotheses, inspect telemetry, tune rules, and retest.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl border border-stone-300 bg-stone-100/60">
                        <span className="text-xs font-bold text-stone-700 uppercase flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5" />
                          White Team (Exercise Oversight)
                        </span>
                        <p className="text-xs text-stone-700 mt-2">
                          Provides independent exercise coordination and neutral governance: managing scope boundaries, safety compliance, timeline schedules, emergency stop triggers, and adjudication of findings between competing teams.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Team Comparison Matrix</h3>
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                            <th className="p-3 font-semibold">Team</th>
                            <th className="p-3 font-semibold">Primary Question</th>
                            <th className="p-3 font-semibold">Typical Responsibilities</th>
                            <th className="p-3 font-semibold">Main Outputs</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-rose-900">Red Team</td>
                            <td className="p-3 text-stone-700">Can the agreed adversary behavior achieve the exercise objective?</td>
                            <td className="p-3 text-stone-600">Threat emulation, controlled testing, evasion analysis, and evidence gathering.</td>
                            <td className="p-3 text-stone-800 font-medium">Test logs, behavior observations, and defensive gaps.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-blue-900">Blue Team</td>
                            <td className="p-3 text-stone-700">Can we prevent, detect, investigate, and respond to the behavior?</td>
                            <td className="p-3 text-stone-600">Monitoring, alert triage, incident response, hardening, and rule engineering.</td>
                            <td className="p-3 text-stone-800 font-medium">Alerts, investigation cases, containment actions, and control fixes.</td>
                          </tr>
                          <tr className="hover:bg-stone-50 bg-purple-50/40">
                            <td className="p-3 font-bold text-purple-900">Purple Team</td>
                            <td className="p-3 text-purple-950 font-medium">How do we validate and improve defensive capabilities together?</td>
                            <td className="p-3 text-purple-950">Shared hypotheses, joint test execution, pipeline telemetry tuning, and retesting.</td>
                            <td className="p-3 text-purple-950 font-bold">Validated detections, telemetry coverage improvements, and metrics.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-800">White Team</td>
                            <td className="p-3 text-stone-700">Is the exercise being conducted safely, within scope, and as agreed?</td>
                            <td className="p-3 text-stone-600">Scope oversight, schedule control, escalation handling, and safety stop decisions.</td>
                            <td className="p-3 text-stone-800 font-medium">Exercise timeline, safety decisions, and official completion record.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">One Scenario, Three Perspectives</h3>
                    <p>
                      Consider a simulated identity-security scenario: a training account experiences an anomalous authentication event followed immediately by an administrative role assignment in a mock environment.
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600">
                      <li><strong>Red Team Perspective:</strong> The operator executes the agreed sequence and verifies whether the simulation successfully generates the expected event artifacts without triggering unintended alarms.</li>
                      <li><strong>Blue Team Perspective:</strong> SOC analysts review authentication logs, directory audit trails, and correlation alerts to see if the anomaly was caught, contextualized, and triaged effectively.</li>
                      <li><strong>Purple Team Perspective:</strong> Both teams sit together, compare expected telemetry with actual SIEM events, discover that the target role name was dropped by the log parser, patch the parser, and rerun the test to confirm end-to-end alert delivery.</li>
                    </ul>

                    {/* Common Misconceptions */}
                    <h3 className="text-lg font-bold text-stone-900 pt-2">Common Misconceptions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Misconception 1: &quot;Red team wins if defenders miss an alert.&quot;</strong>
                        <p className="text-stone-600 mt-1">A missed alert is not a defeat; it is an invaluable finding that exposes a visibility or detection gap to be remediated.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Misconception 2: &quot;Blue team wins by generating the most alerts.&quot;</strong>
                        <p className="text-stone-600 mt-1">High alert volume causes alert fatigue and analyst burnout. Detections must be high-fidelity, contextual, and actionable.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Misconception 3: &quot;Purple teaming is just a post-pentest meeting.&quot;</strong>
                        <p className="text-stone-600 mt-1">Purple teaming is a structured, iterative validation process with predefined hypotheses, telemetry requirements, and retest criteria.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Misconception 4: &quot;If EDR alerts on one test, we are completely safe.&quot;</strong>
                        <p className="text-stone-600 mt-1">A single alert on one endpoint does not prove universal coverage across identities, clouds, network boundaries, or sub-techniques.</p>
                      </div>
                    </div>

                    {/* Interactive Checkpoint */}
                    <div className="mt-6 p-5 rounded-2xl border border-purple-200 bg-purple-50/40">
                      <p className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-purple-600" />
                        Checkpoint: What is the Primary Output of Purple Teaming?
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        Select the statement that best characterizes a successful purple-team engagement:
                      </p>

                      <div className="space-y-2 mt-3">
                        {[
                          { id: "a", label: "A 200-page list of executed adversary scripts showing how many systems were compromised." },
                          { id: "b", label: "A verified defensive improvement—such as improved telemetry, tuned detection rules, and validated retest results." },
                          { id: "c", label: "A victory certificate proving the red team bypassed all firewalls." }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => {
                              setCheckpoint1Answer(opt.id);
                              setCheckpoint1Submitted(true);
                            }}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center gap-2 ${
                              checkpoint1Answer === opt.id
                                ? "border-purple-600 bg-white font-semibold text-stone-900"
                                : "border-stone-200 bg-white/80 hover:bg-white text-stone-700"
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center font-bold text-[10px]">
                              {opt.id.toUpperCase()}
                            </span>
                            <span>{opt.label}</span>
                          </button>
                        ))}
                      </div>

                      {checkpoint1Submitted && (
                        <div className={`mt-3 p-3 rounded-xl text-xs ${
                          checkpoint1Answer === "b"
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                            : "bg-rose-100 text-rose-900 border border-rose-300"
                        }`}>
                          {checkpoint1Answer === "b" ? (
                            <p className="flex items-center gap-1.5 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              Correct! The defining outcome of purple teaming is a measurable, verified defensive improvement—not merely an inventory of executed attacks.
                            </p>
                          ) : (
                            <p className="flex items-center gap-1.5 font-medium">
                              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                              Incorrect. A list of attacks or bragging rights provides zero lasting value. The goal is closing security gaps through collaboration and verified retesting.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 2 */}
              {activeLesson === 2 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 2</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      Penetration Testing, Red Teaming and Adversary Emulation
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      Distinguishing exercise types, threat intelligence workflows, and avoiding blind script execution.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      While penetration tests, red-team engagements, and adversary emulation exercises all involve simulated attacks, each discipline answers fundamentally different security questions:
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                            <th className="p-3 font-semibold">Approach</th>
                            <th className="p-3 font-semibold">Main Goal</th>
                            <th className="p-3 font-semibold">Typical Scope</th>
                            <th className="p-3 font-semibold">Success Measure</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Penetration Test</td>
                            <td className="p-3">Validate selected security vulnerabilities and exploitability.</td>
                            <td className="p-3">Defined application, network, or cloud assets.</td>
                            <td className="p-3 text-stone-600">Confirmed vulnerability findings and actionable remediation.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-rose-900">Red-Team Exercise</td>
                            <td className="p-3">Evaluate organizational defense against a realistic adversary scenario.</td>
                            <td className="p-3">Broad scope governed by the strategic exercise objective.</td>
                            <td className="p-3 text-stone-600">Whether the objective and defensive controls were thoroughly evaluated.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-amber-900">Adversary Emulation</td>
                            <td className="p-3">Reproduce selected behaviors associated with a specific documented threat actor.</td>
                            <td className="p-3">Specific behavior sequence or threat-informed emulation plan.</td>
                            <td className="p-3 text-stone-600">Whether expected behaviors and defensive observations were reproduced.</td>
                          </tr>
                          <tr className="hover:bg-stone-50 bg-purple-50/50">
                            <td className="p-3 font-bold text-purple-900">Purple-Team Exercise</td>
                            <td className="p-3 font-medium text-purple-950">Collaboratively improve detection, triage, and response capabilities.</td>
                            <td className="p-3 text-purple-950">Focused use cases and controlled scenarios.</td>
                            <td className="p-3 text-purple-950 font-bold">Measurable improvement in visibility, detection, or response latency.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-800">Tabletop Exercise</td>
                            <td className="p-3">Evaluate decision-making, escalation, and coordination through discussion.</td>
                            <td className="p-3">Defined scenario without executing technical actions.</td>
                            <td className="p-3 text-stone-600">Whether roles, decisions, and escalation procedures functioned effectively.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Building an Exercise from Threat Intelligence (9-Step Workflow)</h3>
                    <p>
                      Rather than downloading random exploit payloads from GitHub, professional teams translate public cyber threat intelligence (CTI) into structured defensive validations using this 9-step workflow:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">1. Select Threat</span>
                        <p className="text-stone-600 mt-1">Choose a documented behavior that poses real risk to the organization.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">2. Define Objective</span>
                        <p className="text-stone-600 mt-1">State which control or detection capability will be tested.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">3. Map Behavior</span>
                        <p className="text-stone-600 mt-1">Identify relevant ATT&CK tactics, techniques, and detection analytics.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">4. Choose Safe Representation</span>
                        <p className="text-stone-600 mt-1">Use synthetic logs or benign actions instead of live malware.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">5. Define Expected Observations</span>
                        <p className="text-stone-600 mt-1">Specify what the endpoint, identity provider, or SIEM must log.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">6. Set Safety Controls</span>
                        <p className="text-stone-600 mt-1">Define explicit scope, test window, stop conditions, and cleanup.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">7. Run the Test</span>
                        <p className="text-stone-600 mt-1">Execute the approved benign or simulated event sequence.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">8. Evaluate Result</span>
                        <p className="text-stone-600 mt-1">Check collection, parsing, detection, triage, and response.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-purple-700">9. Improve &amp; Retest</span>
                        <p className="text-stone-600 mt-1">Tune analytics, correct schemas, and rerun the identical test.</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Avoid Blindly Copying Threat Reports</h3>
                    <p>
                      Threat reports describe what happened in someone else&apos;s environment. Copying malware binaries or unverified command strings into your environment creates severe operational danger. Instead, <strong>extract the behavioral pattern</strong> (e.g. creating a local user and adding them to an administrative group) and test that behavior using the least intrusive method possible.
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 3 */}
              {activeLesson === 3 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 3</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      MITRE ATT&CK and Threat-Informed Exercises
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      Navigating ATT&CK Enterprise v20.0 (October 2026), tactics, techniques, detection strategies, and analytics.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      <strong>MITRE ATT&CK®</strong> is a curated knowledge base of adversary tactics and techniques based on real-world observations. It serves as the common taxonomy bridging red and blue teams. The current official release, <strong>ATT&CK Enterprise v20.0 (October 13, 2026)</strong>, substantially expanded detection-oriented resources, including formal Detection Strategies and Analytics.
                    </p>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Hierarchical Structure of ATT&CK</h3>
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                            <th className="p-3 font-semibold">Hierarchy Term</th>
                            <th className="p-3 font-semibold">Formal Definition</th>
                            <th className="p-3 font-semibold">Example in Defensive Exercise</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Tactic</td>
                            <td className="p-3">The adversary&apos;s tactical objective (the &quot;Why&quot;).</td>
                            <td className="p-3 text-stone-600"><em>Privilege Escalation</em> (TA0004)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Technique</td>
                            <td className="p-3">A general method used to achieve a tactical goal (the &quot;How&quot;).</td>
                            <td className="p-3 text-stone-600"><em>Account Manipulation</em> (T1098)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Sub-Technique</td>
                            <td className="p-3">A specific technical implementation of a technique.</td>
                            <td className="p-3 text-stone-600"><em>Additional Cloud Credentials</em> (T1098.001)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Procedure</td>
                            <td className="p-3">The exact observed sequence of actions taken by an adversary.</td>
                            <td className="p-3 text-stone-600">Using AWS CLI <code className="bg-stone-100 px-1 py-0.5 rounded">aws iam attach-role-policy</code></td>
                          </tr>
                          <tr className="hover:bg-stone-50 bg-purple-50/50">
                            <td className="p-3 font-bold text-purple-900">Detection Strategy</td>
                            <td className="p-3 text-purple-950 font-medium">A structured defensive concept for identifying relevant activity.</td>
                            <td className="p-3 text-purple-950">Correlate identity changes with unexpected admin actions.</td>
                          </tr>
                          <tr className="hover:bg-stone-50 bg-purple-50/50">
                            <td className="p-3 font-bold text-purple-900">Analytic</td>
                            <td className="p-3 text-purple-950 font-medium">Specific detection logic or query evaluating evidence patterns.</td>
                            <td className="p-3 text-purple-950">SIEM rule matching role assignments without approved change ID.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">From ATT&CK to a Defensible Detection Hypothesis</h3>
                    <p>
                      Never write detection rules based on technique names alone. Formulate a structured 8-point hypothesis:
                    </p>
                    <div className="bg-stone-900 text-stone-200 rounded-2xl p-4 font-mono text-xs space-y-1.5 leading-relaxed">
                      <p><span className="text-purple-400">1. Behavior:</span> Simulated role delegation via AWS IAM without ticket reference.</p>
                      <p><span className="text-purple-400">2. Objective:</span> Detect unapproved permission elevation before attacker accesses S3 buckets.</p>
                      <p><span className="text-purple-400">3. Data Sources:</span> CloudTrail audit logs (<code className="text-emerald-300">eventName: AttachRolePolicy</code>), Okta auth records.</p>
                      <p><span className="text-purple-400">4. Expected Evidence:</span> Principal ARN, target role ARN, timestamp, source IP, ticket parameter.</p>
                      <p><span className="text-purple-400">5. Detection Logic:</span> EventName in (&apos;AttachUserPolicy&apos;,&apos;AttachRolePolicy&apos;) AND change_ticket IS NULL.</p>
                      <p><span className="text-purple-400">6. Benign Alternatives:</span> Automated Terraform CI/CD pipelines deploying infrastructure updates.</p>
                      <p><span className="text-purple-400">7. Response Action:</span> SOC verifies ticket status; if unapproved, revokes policy and isolates session.</p>
                      <p><span className="text-purple-400">8. Known Limitations:</span> Does not detect pre-existing over-privileged service accounts.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 4 */}
              {activeLesson === 4 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 4</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      Detection Engineering Fundamentals
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      The detection lifecycle, telemetry dependencies, Sigma rule specifications, and alert quality metrics.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      <strong>Detection Engineering</strong> is the disciplined practice of designing, implementing, validating, maintaining, and improving analytics that identify suspicious activity. A detection rule is useless if the required data is never collected, or if its alerts overwhelm analysts with benign noise.
                    </p>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">The Detection Engineering Lifecycle</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs pt-1">
                      <div className="p-2.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-[10px] font-bold text-stone-400 block">Phase 1</span>
                        <strong className="text-stone-800">Define Behavior</strong>
                      </div>
                      <div className="p-2.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-[10px] font-bold text-stone-400 block">Phase 2</span>
                        <strong className="text-stone-800">Identify Telemetry</strong>
                      </div>
                      <div className="p-2.5 rounded-xl border border-purple-200 bg-purple-50">
                        <span className="text-[10px] font-bold text-purple-600 block">Phase 3</span>
                        <strong className="text-purple-950">Design Analytic</strong>
                      </div>
                      <div className="p-2.5 rounded-xl border border-purple-200 bg-purple-50">
                        <span className="text-[10px] font-bold text-purple-600 block">Phase 4</span>
                        <strong className="text-purple-950">Test Logic</strong>
                      </div>
                      <div className="p-2.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-[10px] font-bold text-stone-400 block">Phase 5</span>
                        <strong className="text-stone-800">Deploy &amp; Monitor</strong>
                      </div>
                      <div className="p-2.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-[10px] font-bold text-stone-400 block">Phase 6</span>
                        <strong className="text-stone-800">Tune &amp; Retest</strong>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Required Telemetry Matrix</h3>
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                            <th className="p-3 font-semibold">Telemetry Source</th>
                            <th className="p-3 font-semibold">Critical Fields &amp; Context</th>
                            <th className="p-3 font-semibold">Common Failure Point</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Identity Provider (IdP)</td>
                            <td className="p-3">User principal, auth result, MFA status, IP geolocation, session UUID.</td>
                            <td className="p-3 text-stone-600">SSO logs not forwarded to central SIEM; session tokens unindexed.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Cloud Audit Logs</td>
                            <td className="p-3">Actor identity, eventName, requestParameters, roleArn, source IP, userAgent.</td>
                            <td className="p-3 text-stone-600">Nested JSON objects dropped by log normalizers.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Endpoint Telemetry (EDR)</td>
                            <td className="p-3">Process GUID, command-line arguments, parent process, file hashes.</td>
                            <td className="p-3 text-stone-600">Command-line arguments truncated by sensor buffer limits.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900">Change Management</td>
                            <td className="p-3">Ticket ID, approved time window, authorized owner, target systems.</td>
                            <td className="p-3 text-stone-600">ITSM API rate-limited; cannot enrich in real time.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Pseudocode: Detection Analytic</h3>
                    <div className="bg-stone-950 text-stone-200 rounded-2xl p-4 font-mono text-xs relative">
                      <button
                        onClick={() => handleCopy("pseudo", `IF event_type == "privileged_role_change"\n   AND matching_approved_ticket == FALSE\nTHEN\n   CREATE_ALERT(\n      severity: "High",\n      title: "Unapproved Privileged Role Assignment",\n      enrichment: [actor_id, target_role, source_ip, session_time]\n   )\n   DO NOT declare incident automatically until analyst verifies ticket status.`)}
                        className="absolute top-3 right-3 text-stone-400 hover:text-white transition cursor-pointer"
                      >
                        {copiedSnippets["pseudo"] ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-xs leading-relaxed">{`IF event_type == "privileged_role_change"
   AND matching_approved_ticket == FALSE
THEN
   CREATE_ALERT(
      severity: "High",
      title: "Unapproved Privileged Role Assignment",
      enrichment: [actor_id, target_role, source_ip, session_time]
   )
   DO NOT declare incident automatically until analyst verifies ticket status.`}</pre>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Alert Quality: True vs. False Outcomes</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50">
                        <span className="font-bold text-emerald-900">True Positive (TP)</span>
                        <p className="text-stone-600 mt-1">Rule correctly fires on the simulated malicious behavior.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-stone-800">True Negative (TN)</span>
                        <p className="text-stone-600 mt-1">Benign baseline operations do not trigger false alerts.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/50">
                        <span className="font-bold text-rose-900">False Positive (FP)</span>
                        <p className="text-stone-600 mt-1">Benign routine admin action incorrectly flagged as threat.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50">
                        <span className="font-bold text-amber-900">False Negative (FN)</span>
                        <p className="text-stone-600 mt-1">Simulated adversary behavior executed completely undetected.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 5 */}
              {activeLesson === 5 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 5</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      Planning and Running a Purple-Team Exercise
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      The 7-phase exercise lifecycle, 4 primary roles, isolating pipeline failures, and blame-free debriefs.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      A successful purple-team exercise is not a chaotic hackathon. It is a structured, repeatable experiment designed to validate whether defensive controls perform as intended under realistic conditions.
                    </p>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">The 7 Exercise Phases</h3>
                    <div className="space-y-2 pt-1">
                      {[
                        { step: 1, name: "Plan", desc: "Define detection hypothesis, authorization, test behavior, expected telemetry, and safety controls." },
                        { step: 2, name: "Baseline", desc: "Verify log ingestion pipeline health and record pre-exercise detection behavior." },
                        { step: 3, name: "Simulate", desc: "Execute the approved benign or synthetic behavior in the controlled test environment." },
                        { step: 4, name: "Observe", desc: "Inspect raw logs, normalized schemas, SIEM correlation alerts, and analyst workflow." },
                        { step: 5, name: "Collaborate", desc: "Jointly compare expected vs. actual outcomes, documenting telemetry or logic gaps." },
                        { step: 6, name: "Improve", desc: "Patch log parsers, update detection queries, or refine the analyst triage playbook." },
                        { step: 7, name: "Retest", desc: "Rerun the identical test scenario and regression baselines to verify improvement." },
                      ].map((p) => (
                        <div key={p.step} className="p-3 rounded-xl border border-stone-200 bg-stone-50 flex items-start gap-3 text-xs">
                          <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-900 font-bold flex items-center justify-center shrink-0">
                            {p.step}
                          </span>
                          <div>
                            <p className="font-bold text-stone-900">{p.name}</p>
                            <p className="text-stone-600 mt-0.5">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">The 8 Stages of Pipeline Failure</h3>
                    <p>
                      When a simulated attack fails to produce an alert, inexperienced teams reflexively blame the detection query. In reality, failure can occur at any point along the 8-stage pipeline:
                    </p>
                    <ol className="list-decimal list-inside space-y-1.5 pl-2 text-stone-600 text-xs">
                      <li><strong>Generation Failure:</strong> The source system failed to emit an audit log for the action.</li>
                      <li><strong>Collection Failure:</strong> Log forwarder crashed or network egress blocked packet delivery.</li>
                      <li><strong>Parsing Failure:</strong> Log collector received raw text but failed to parse JSON structure.</li>
                      <li><strong>Normalization Failure:</strong> Field was parsed as <code className="bg-stone-100 px-1 py-0.5 rounded">Role_ARN</code> instead of the standardized <code className="bg-stone-100 px-1 py-0.5 rounded">target_role</code>.</li>
                      <li><strong>Logic Failure:</strong> Query condition did not match (e.g. case sensitivity or syntax bug).</li>
                      <li><strong>Suppression Failure:</strong> SIEM deduplication or rate-limiting suppressed the alert.</li>
                      <li><strong>Delivery Failure:</strong> Alert was created but webhook/email to SOC ticketing failed.</li>
                      <li><strong>Triage Failure:</strong> Alert arrived, but the analyst misunderstood its severity and closed it.</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* LESSON 6 */}
              {activeLesson === 6 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 6</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      Safe Emulation, Controlled Testing &amp; Cleanup
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      Hierarchy of test intrusiveness, Atomic Red Team safety guidelines, and environment restoration.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Adversary emulation carries inherent operational risk. An emulation script that alters security configurations, resets credentials, or introduces rogue persistence can cause outages or security incidents. Professional testers always select the <strong>least intrusive useful test</strong>.
                    </p>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">The Hierarchy of Test Intrusiveness</h3>
                    <div className="space-y-2 pt-1 text-xs">
                      <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50">
                        <strong className="text-emerald-950 font-bold">1. Synthetic Logs Review (Least Intrusive)</strong>
                        <p className="text-stone-600 mt-0.5">Replay fabricated, harmless JSON log files into parser/SIEM. Zero host risk.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 font-bold">2. Local Harmless Test Event</strong>
                        <p className="text-stone-600 mt-0.5">Generate benign event on an isolated virtual machine (e.g. <code className="bg-stone-100 px-1 py-0.5 rounded">whoami</code> or dummy user).</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 font-bold">3. Dedicated Test Environment</strong>
                        <p className="text-stone-600 mt-0.5">Staging cloud account or replica Active Directory with synthetic identities.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50">
                        <strong className="text-amber-950 font-bold">4. Controlled Emulation Framework (Atomic Red Team)</strong>
                        <p className="text-stone-600 mt-0.5">Pre-scripted, documented atomic tests with validated prerequisites and cleanup commands.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/50">
                        <strong className="text-rose-950 font-bold">5. Invasive Adversary Emulation (Most Intrusive)</strong>
                        <p className="text-stone-600 mt-0.5">Requires formal executive authorization, 24/7 white-team oversight, and emergency halt procedures.</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Cleanup is Mandatory, Not Optional</h3>
                    <p>
                      Every test plan must specify the exact rollback procedure. Leaving artifacts behind (such as temporary test accounts or modified firewall rules) introduces new security vulnerabilities.
                    </p>

                    {/* Interactive Checkpoint */}
                    <div className="mt-6 p-5 rounded-2xl border border-purple-200 bg-purple-50/40">
                      <p className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <AlertOctagon className="w-4 h-4 text-rose-600" />
                        Checkpoint: Unexpected System State Change
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        During an Atomic Red Team simulation, an automated script unexpectedly modifies a global security group in staging. What must the operator do?
                      </p>

                      <div className="space-y-2 mt-3">
                        {[
                          { id: "a", label: "Quietly run manual undo commands and hope no one notices." },
                          { id: "b", label: "Immediately pause testing, notify the exercise coordinator, follow documented cleanup/incident procedures, and wait for approval before resuming." },
                          { id: "c", label: "Continue running tests to see if the blue team detects the configuration change." }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => {
                              setCheckpoint2Answer(opt.id);
                              setCheckpoint2Submitted(true);
                            }}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center gap-2 ${
                              checkpoint2Answer === opt.id
                                ? "border-purple-600 bg-white font-semibold text-stone-900"
                                : "border-stone-200 bg-white/80 hover:bg-white text-stone-700"
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center font-bold text-[10px]">
                              {opt.id.toUpperCase()}
                            </span>
                            <span>{opt.label}</span>
                          </button>
                        ))}
                      </div>

                      {checkpoint2Submitted && (
                        <div className={`mt-3 p-3 rounded-xl text-xs ${
                          checkpoint2Answer === "b"
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                            : "bg-rose-100 text-rose-900 border border-rose-300"
                        }`}>
                          {checkpoint2Answer === "b" ? (
                            <p className="flex items-center gap-1.5 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              Correct! Unplanned state changes trigger an immediate halt, coordinator escalation, and structured rollback. Improvising unreviewed fixes creates operational danger.
                            </p>
                          ) : (
                            <p className="flex items-center gap-1.5 font-medium">
                              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                              Incorrect. Concealing unintended changes or continuing to test violates Rules of Engagement and can cause outages or breaches.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 7 */}
              {activeLesson === 7 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 7</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      Measuring Detection Coverage &amp; Response Latency
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      Differentiating detection, triage, investigation, and response latencies; before-and-after metrics; and gap taxonomy.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Counting the sheer number of detection rules in a SIEM does not measure defensive posture. What matters is whether the team can observe, alert on, investigate, and contain adversary behavior before damage occurs.
                    </p>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">The Latency Breakdown</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">1. Detection Latency</strong>
                        <p className="text-stone-600 mt-1">Time from simulation execution until the SIEM generates an alert.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">2. Triage Latency</strong>
                        <p className="text-stone-600 mt-1">Time taken for an analyst to acknowledge and begin reviewing the alert.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">3. Investigation Latency</strong>
                        <p className="text-stone-600 mt-1">Time required to correlate evidence, identify blast radius, and determine impact.</p>
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">4. Response Latency</strong>
                        <p className="text-stone-600 mt-1">Time taken to execute containment actions (e.g. revoking credentials, isolating host).</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">The 7 Gap Classifications</h3>
                    <p>
                      Classifying failures accurately ensures that remediation effort is assigned to the correct engineering discipline:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Visibility Gap:</strong> Event was never logged or collected by central telemetry.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Data-Quality Gap:</strong> Event existed but required fields were dropped or malformed.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Detection Gap:</strong> Normalized data existed, but analytic logic did not match.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Context Gap:</strong> Alert fired, but lacked essential user or resource context.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Workflow Gap:</strong> Alert reached SIEM, but no clear escalation playbook existed.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900">Response Gap:</strong> Incident confirmed, but team lacked tools/permissions to contain.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 8 */}
              {activeLesson === 8 && (
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Lesson 8</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                      Purple-Team Governance, Communication &amp; Reporting
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      Disclosure models, distinguishing test activity from real incidents, and actionable executive reports.
                    </p>
                  </div>

                  <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Clear governance ensures that purple teaming improves security without disrupting real-world operations or creating ambiguity during active incidents.
                    </p>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">The Three Disclosure Models</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                      <div className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/50">
                        <span className="font-bold text-purple-900">Fully Informed (Collaborative)</span>
                        <p className="text-stone-600 mt-1">Defenders know exact timing, scenario, and payloads. Best for engineering new detections and debugging parsers.</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-stone-800">Partially Informed</span>
                        <p className="text-stone-600 mt-1">Defenders know an exercise will occur within a week, but not the specific hour or technique. Tests triage response.</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="font-bold text-stone-800">Blind (White-Team Coordinated)</span>
                        <p className="text-stone-600 mt-1">Defenders receive no advance warning. White team closely monitors to ensure safety and prevent live incident panic.</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 pt-2">Distinguishing Exercises from Real Incidents</h3>
                    <p>
                      If an analyst encounters suspicious activity during an exercise window that does not match the exercise schedule or uses unauthorized IP addresses, they must treat it as a <strong>real live incident</strong> and immediately notify the White Team coordinator.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PRACTICAL LABS & SANDBOXES                                        */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Interactive Sandboxes</span>
                  <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
                    Hands-On Purple Teaming, Pipeline Debugging &amp; Validation Labs
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-500 font-medium">Readiness Meter:</span>
                  <div className="w-32 bg-stone-100 rounded-full h-3 overflow-hidden border border-stone-200">
                    <div
                      className="bg-purple-600 h-full transition-all duration-300"
                      style={{ width: `${(checklistTotal / 9) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-stone-800">{checklistTotal}/9</span>
                </div>
              </div>

              {/* LAB 1: DEFINE TEAM ROLES & EXERCISE CHARTER */}
              <div className="mb-10 p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
                      <FileSignature className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Lab 1: Exercise Charter &amp; Team Role Architect</h3>
                      <p className="text-xs text-stone-500">Define measurable objectives, role allocations, authorized environments, and safety boundaries.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setLab1GeneratedCharter(true)}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    Generate Exercise Charter
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Exercise Objective:</label>
                    <input
                      type="text"
                      value={lab1Objective}
                      onChange={(e) => setLab1Objective(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl font-mono text-xs text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Threat-Informed Scenario:</label>
                    <input
                      type="text"
                      value={lab1Scenario}
                      onChange={(e) => setLab1Scenario(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl font-mono text-xs text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Simulation Operator (Red):</label>
                    <input
                      type="text"
                      value={lab1RedLead}
                      onChange={(e) => setLab1RedLead(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs text-stone-800"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Detection Analyst (Blue):</label>
                    <input
                      type="text"
                      value={lab1BlueLead}
                      onChange={(e) => setLab1BlueLead(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs text-stone-800"
                    />
                  </div>
                </div>

                {lab1GeneratedCharter && (
                  <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 text-xs space-y-2">
                    <p className="font-bold text-stone-900 flex items-center justify-between">
                      <span>PURPLE TEAM EXERCISE CHARTER: VALIDATED</span>
                      <span className="text-[10px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">Charter ID: PT-2026-CH-01</span>
                    </p>
                    <div className="bg-stone-950 text-stone-200 p-3 rounded-lg font-mono text-[11px] leading-relaxed">
                      [EXERCISE SPECIFICATION]<br/>
                      - Objective: {lab1Objective}<br/>
                      - Behavior Scenario: {lab1Scenario}<br/>
                      - Coordinator / White Team: {lab1PurpleLead}<br/>
                      - Simulation Lead (Red): {lab1RedLead} | Detection Lead (Blue): {lab1BlueLead}<br/>
                      - Stop Condition: {lab1StopCondition}
                    </div>
                  </div>
                )}
              </div>

              {/* LAB 2: ATT&CK-INFORMED DETECTION PLAN ARCHITECT */}
              <div className="mb-10 p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Lab 2: ATT&CK v20.0 Detection Plan Architect</h3>
                      <p className="text-xs text-stone-500">Translate threat intelligence into structured detection hypotheses and required telemetry.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setLab2GeneratedPlan(true)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Build Detection Spec
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Technique Selection:</label>
                    <select
                      value={lab2Technique}
                      onChange={(e) => setLab2Technique(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl"
                    >
                      <option value="T1098">T1098: Account Manipulation (Identity)</option>
                      <option value="T1078">T1078: Valid Accounts (Initial Access)</option>
                      <option value="T1059">T1059: Command and Scripting Interpreter (Execution)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">ATT&CK Version:</label>
                    <input
                      type="text"
                      disabled
                      value={lab2AttackVersion}
                      className="w-full px-3 py-2 bg-stone-100 border border-stone-300 rounded-xl font-mono text-[11px] text-stone-700"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Required Telemetry:</label>
                    <select
                      value={lab2DataSource}
                      onChange={(e) => setLab2DataSource(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl"
                    >
                      <option value="cloud-audit">Cloud Audit Logs (AWS CloudTrail / GCP Audit)</option>
                      <option value="endpoint-edr">Endpoint Sensor (Process Creation Event 4688 / Sysmon 1)</option>
                      <option value="idp-audit">Identity Provider (Okta / Entra ID Sign-ins)</option>
                    </select>
                  </div>
                </div>

                {lab2GeneratedPlan && (
                  <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 text-xs space-y-2">
                    <p className="font-bold text-stone-900">DETECTION SPECIFICATION ({lab2Technique}) - {lab2AttackVersion}</p>
                    <div className="p-3 bg-stone-50 rounded-lg text-stone-800 space-y-1">
                      <p><strong>Detection Hypothesis:</strong> {lab2Hypothesis}</p>
                      <p><strong>Telemetry Dependency:</strong> {lab2DataSource.toUpperCase()} with unmasked identity and target resource parameters.</p>
                      <p><strong>Benign Alternative:</strong> Automated CI/CD provisioning pipelines or scheduled IAM maintenance scripts.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* LAB 3: INVESTIGATE A SIMULATED DETECTION PIPELINE FAILURE */}
              <div className="mb-10 p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600">
                      <Bug className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Lab 3: Pipeline Failure Root-Cause Isolator</h3>
                      <p className="text-xs text-stone-500">Diagnose the earliest point of failure in an end-to-end detection pipeline and patch it.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {lab3PipelineStages.map((stg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                        stg.status === "pass"
                          ? "bg-emerald-50/60 border-emerald-200 text-emerald-950"
                          : "bg-rose-50/60 border-rose-200 text-rose-950"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {stg.status === "pass" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                        <span className="font-bold">{stg.stage}</span>
                      </div>
                      <span className="text-[11px] font-mono text-stone-600">{stg.detail}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs space-y-3">
                  <p className="font-bold text-stone-900">Diagnosis &amp; Engineering Fix:</p>
                  <p className="text-stone-600">
                    Stage 4 failed: the log parser dropped the <code className="bg-stone-100 px-1 py-0.5 rounded">roleArn</code> field. Which remediation should you apply?
                  </p>

                  <div className="space-y-2">
                    <button
                      onClick={() => { setLab3SelectedFix("parser"); setLab3FixVerified(true); }}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs cursor-pointer ${
                        lab3SelectedFix === "parser" ? "border-emerald-500 bg-emerald-50 font-bold" : "border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      A. Update the Logstash / Fluentbit regex parser to extract &quot;requestParameters.roleArn&quot; into normalized field &quot;target_role&quot;.
                    </button>
                    <button
                      onClick={() => { setLab3SelectedFix("threshold"); setLab3FixVerified(false); }}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs cursor-pointer ${
                        lab3SelectedFix === "threshold" ? "border-rose-500 bg-rose-50 font-bold" : "border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      B. Lower the detection rule severity from High to Informational.
                    </button>
                  </div>

                  {lab3FixVerified && (
                    <div className="p-3 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-medium">
                      ✓ Correct! Updating the parser fixes the data-quality gap. Once &quot;target_role&quot; is populated, Stages 5, 6, and 7 evaluate to True.
                    </div>
                  )}
                </div>
              </div>

              {/* LAB 4: DESIGN A PURPLE-TEAM DETECTION VALIDATION */}
              <div className="mb-10 p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Lab 4: Synthetic Detection Validation Matrix</h3>
                      <p className="text-xs text-stone-500">Test detection logic against positive, negative, and edge-case synthetic scenarios.</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
                    <thead>
                      <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                        <th className="p-3">Scenario Name</th>
                        <th className="p-3">Role Changed</th>
                        <th className="p-3">Valid Ticket</th>
                        <th className="p-3">Expected Alert</th>
                        <th className="p-3">Observed Outcome</th>
                        <th className="p-3">Validation Metric</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {lab4Scenarios.map((sc) => (
                        <tr key={sc.id} className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">{sc.name}</td>
                          <td className="p-3 font-mono">{String(sc.roleChange)}</td>
                          <td className="p-3 font-mono">{String(sc.ticketValid)}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              sc.expectedAlert ? "bg-amber-100 text-amber-800" : "bg-stone-100 text-stone-600"
                            }`}>
                              {sc.expectedAlert ? "ALERT" : "SUPPRESS"}
                            </span>
                          </td>
                          <td className="p-3 text-stone-700">{sc.actualResult}</td>
                          <td className="p-3 font-bold text-purple-700">{sc.classification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* LAB 5: RUN AN AUTHORIZED, BENIGN CONTROL TEST (ATOMIC RED TEAM) */}
              <div className="mb-10 p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Lab 5: Atomic Red Team Control Validation Simulator</h3>
                      <p className="text-xs text-stone-500">Execute benign atomic tests with pre-execution safety verification and structured cleanup.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200 text-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-900">Current Phase:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px]">
                        Step {lab5Step} of 4
                      </span>
                    </div>
                    <button
                      onClick={() => { setLab5Step(1); setLab5PrereqPassed(false); setLab5TestOutput(null); setLab5CleanupDone(false); }}
                      className="text-stone-500 hover:text-stone-800 text-[11px] underline cursor-pointer"
                    >
                      Reset Atomic Lab
                    </button>
                  </div>

                  {lab5Step === 1 && (
                    <div className="space-y-3">
                      <p className="font-bold text-stone-800">Safety Verification &amp; Prerequisite Check:</p>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lab5PrereqPassed}
                          onChange={(e) => setLab5PrereqPassed(e.target.checked)}
                          className="rounded text-purple-600"
                        />
                        <span>Confirmed: Running on isolated lab endpoint; written authorization obtained; rollback scripts prepared.</span>
                      </label>
                      <button
                        disabled={!lab5PrereqPassed}
                        onClick={() => setLab5Step(2)}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl font-bold cursor-pointer transition shadow-xs"
                      >
                        Proceed to Execution
                      </button>
                    </div>
                  )}

                  {lab5Step === 2 && (
                    <div className="space-y-3">
                      <p className="font-bold text-stone-800">Execute Benign Atomic Test (T1098.001):</p>
                      <div className="bg-stone-950 text-stone-200 p-3 rounded-lg font-mono text-[11px]">
                        Invoke-AtomicTest T1098 -TestNumbers 1
                      </div>
                      <button
                        onClick={handleLab5RunTest}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold cursor-pointer transition shadow-xs flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" />
                        Execute Benign Simulation
                      </button>
                    </div>
                  )}

                  {lab5Step === 3 && lab5TestOutput && (
                    <div className="space-y-3">
                      <div className="p-3 bg-stone-950 text-emerald-400 font-mono text-[11px] rounded-lg whitespace-pre-line">
                        {lab5TestOutput.output}
                      </div>
                      <div className="p-3 bg-purple-50 text-purple-950 rounded-lg">
                        <strong>Telemetry Verified:</strong> {lab5TestOutput.telemetry}
                      </div>
                      <button
                        onClick={handleLab5Cleanup}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold cursor-pointer transition shadow-xs flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Execute Atomic Cleanup Commands
                      </button>
                    </div>
                  )}

                  {lab5Step === 4 && lab5CleanupDone && (
                    <div className="p-3 bg-emerald-100 text-emerald-950 rounded-lg space-y-1">
                      <p className="font-bold">✓ Atomic Lifecycle Complete!</p>
                      <p className="text-[11px]">The dummy role was removed, audit logs were retained, and the endpoint was restored to its documented baseline.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* LAB 6: PURPLE-TEAM IMPROVEMENT CYCLE */}
              <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Lab 6: Collaborative Improvement &amp; Retest Cycle</h3>
                      <p className="text-xs text-stone-500">Measure the transformation from an initial detection failure to a verified, actionable alert.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <button
                    onClick={() => setLab6CycleStage("baseline")}
                    className={`p-3 rounded-xl border text-xs cursor-pointer text-left transition ${
                      lab6CycleStage === "baseline" ? "border-purple-600 bg-purple-50 font-bold" : "border-stone-200 bg-white"
                    }`}
                  >
                    1. Initial Baseline (Failure)
                  </button>
                  <button
                    onClick={() => setLab6CycleStage("remediated")}
                    className={`p-3 rounded-xl border text-xs cursor-pointer text-left transition ${
                      lab6CycleStage === "remediated" ? "border-purple-600 bg-purple-50 font-bold" : "border-stone-200 bg-white"
                    }`}
                  >
                    2. Remediation Applied
                  </button>
                  <button
                    onClick={() => setLab6CycleStage("retested")}
                    className={`p-3 rounded-xl border text-xs cursor-pointer text-left transition ${
                      lab6CycleStage === "retested" ? "border-purple-600 bg-purple-50 font-bold" : "border-stone-200 bg-white"
                    }`}
                  >
                    3. Retest Validation (Success)
                  </button>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs">
                  {lab6CycleStage === "baseline" && (
                    <div className="space-y-2">
                      <p className="font-bold text-rose-800">Baseline Assessment State:</p>
                      <p className="text-stone-600">Raw event arrived in syslog, but normalization dropped target role. SIEM generated 0 alerts. SOC triage was blind.</p>
                      <div className="p-2.5 rounded bg-rose-50 text-rose-900 font-mono text-[11px]">
                        Result: 0 Alerts | Detection Latency: ∞ | Triage Status: Gapped
                      </div>
                    </div>
                  )}

                  {lab6CycleStage === "remediated" && (
                    <div className="space-y-2">
                      <p className="font-bold text-purple-900">Remediation Deployed:</p>
                      <p className="text-stone-600">Parser regex updated in Fluentbit; Sigma rule &apos;IAM-Unapproved-Role-Change&apos; deployed to SIEM with ticket enrichment.</p>
                      <div className="p-2.5 rounded bg-purple-50 text-purple-900 font-mono text-[11px]">
                        Configuration Status: Parser Active | Rule Enabled | ITSM Webhook Connected
                      </div>
                    </div>
                  )}

                  {lab6CycleStage === "retested" && (
                    <div className="space-y-2">
                      <p className="font-bold text-emerald-800">Retest Validation Confirmed:</p>
                      <p className="text-stone-600">Identical benign simulation executed. Alert fired in 12 seconds with full principal context. SOC analyst received actionable ticket.</p>
                      <div className="p-2.5 rounded bg-emerald-50 text-emerald-900 font-mono text-[11px]">
                        Result: High-Fidelity Alert | Detection Latency: 12s | Triage Latency: 4m 10s | Regression: 0 FPs
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 9-POINT PURPLE-TEAM READINESS CHECKLIST */}
              <div className="mt-8 p-6 rounded-2xl border border-stone-200 bg-white">
                <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-purple-600" />
                      9-Point Purple-Team Operational Readiness Checklist
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">Verify each requirement before executing collaborative simulations.</p>
                  </div>
                  <button
                    onClick={() => setChecklist({ c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false, c8: false, c9: false })}
                    className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                  >
                    Reset All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {[
                    { key: "c1", label: "The exercise objective and success criteria are measurable." },
                    { key: "c2", label: "Written authorization, scope and exclusions are confirmed." },
                    { key: "c3", label: "Coordinator, operator, analyst and response contacts are identified." },
                    { key: "c4", label: "Required log sources and test fields are available." },
                    { key: "c5", label: "Simulation limits, cleanup steps and stop conditions are documented." },
                    { key: "c6", label: "The initial telemetry and detection behavior are recorded." },
                    { key: "c7", label: "Evidence identifiers, timestamps and storage requirements are defined." },
                    { key: "c8", label: "Positive and benign test cases are planned." },
                    { key: "c9", label: "Improvement owners and retest acceptance criteria are agreed." },
                  ].map((item) => (
                    <label
                      key={item.key}
                      onClick={() => toggleChecklist(item.key)}
                      className={`flex items-start gap-2.5 p-3 rounded-xl border transition cursor-pointer ${
                        checklist[item.key]
                          ? "bg-purple-50/60 border-purple-300 text-stone-900"
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checklist[item.key]}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-purple-600 cursor-pointer"
                      />
                      <span className="text-[11px] font-medium leading-snug">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: WALKTHROUGH & REAL-WORLD CASE STUDY                               */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Real-World Case Study</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                Cloud Identity Privilege Escalation &amp; Detection Engineering Walkthrough
              </h2>
              <p className="text-sm text-stone-500 mt-1">
                How a collaborative purple-team exercise identified a critical CloudTrail ingestion blindspot, remediated the pipeline, and proved 100% detection coverage.
              </p>
            </div>

            <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 text-xs">
                <strong>Exercise Profile:</strong> PrepSpaces Cloud Engineering engaged their internal Blue and Red teams in an authorized purple-team exercise to validate detection of unauthorized IAM role delegations in their staging AWS environment (<code className="bg-purple-100 px-1 py-0.5 rounded">T1098: Account Manipulation</code>).
              </div>

              <h3 className="text-lg font-bold text-stone-900 pt-2">1. Baseline Execution &amp; The Surprising Failure</h3>
              <p>
                The red-team operator used a dedicated synthetic test user (<code className="bg-stone-100 px-1 py-0.5 rounded">synthetic-dev-01</code>) to attach an administrative policy (<code className="bg-stone-100 px-1 py-0.5 rounded">AdministratorAccess</code>) to a test role. The red team confirmed the command succeeded. However, in the SOC console, <strong>zero alerts appeared</strong> over the next 30 minutes.
              </p>

              <h3 className="text-lg font-bold text-stone-900 pt-2">2. Collaborative Pipeline Inspection</h3>
              <p>
                Rather than claiming victory, the red operator joined the SOC detection engineer in a joint debugging session. They traced the event through the telemetry pipeline:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600">
                <li><strong>AWS CloudTrail:</strong> S3 bucket contained the raw event record for <code className="bg-stone-100 px-1 py-0.5 rounded">AttachRolePolicy</code>.</li>
                <li><strong>SIEM Collector:</strong> The raw log was ingested, but the field <code className="bg-stone-100 px-1 py-0.5 rounded">requestParameters.policyArn</code> was nested in an array that the SIEM indexer failed to flatten.</li>
                <li><strong>Detection Rule:</strong> The query <code className="bg-stone-100 px-1 py-0.5 rounded">where target_policy = &quot;*AdministratorAccess*&quot;</code> returned 0 rows because the field was completely empty in normalized storage.</li>
              </ul>

              <h3 className="text-lg font-bold text-stone-900 pt-2">3. The Engineering Fix</h3>
              <p>
                The detection engineer updated the SIEM ingestion pipeline to automatically unnest CloudTrail <code className="bg-stone-100 px-1 py-0.5 rounded">requestParameters</code> arrays. Concurrently, the rule logic was broadened to alert on any role assignment where the actor was not part of the approved DevOps automation role group.
              </p>

              <h3 className="text-lg font-bold text-stone-900 pt-2">4. Retest &amp; Measurable Outcome</h3>
              <p>
                The red operator repeated the identical test sequence. Within <strong>14 seconds</strong>, a high-severity alert fired in the SOC queue. The alert automatically displayed the actor, target role, policy ARN, and a link to the approved change window calendar, allowing the analyst to verify and close the case in under 3 minutes.
              </p>

              <h3 className="text-lg font-bold text-stone-900 pt-2">5. Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600">
                <li>Collaborative purple teaming discovered a blindspot that traditional black-box red teaming would have simply reported as a failure.</li>
                <li>Remediating the data pipeline solved coverage for dozens of related IAM techniques simultaneously.</li>
                <li>Retest validation provided undeniable proof to executive leadership that defensive capabilities had tangibly improved.</li>
              </ul>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT (QUIZ)                                       */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Module Assessment</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                  Red, Blue &amp; Purple Team Operations Exam
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Evaluate your understanding of team roles, ATT&CK v20.0 exercises, pipeline fault isolation, and detection metrics.
                </p>
              </div>

              {quizSubmitted && (
                <div className="flex items-center gap-3 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200">
                  <span className="text-xs font-bold text-stone-600">Final Score:</span>
                  <span className={`text-base font-black ${
                    calculateQuizScore() >= 5 ? "text-emerald-600" : "text-purple-600"
                  }`}>
                    {calculateQuizScore()} / {quizQuestions.length} ({Math.round((calculateQuizScore() / quizQuestions.length) * 100)}%)
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-xs font-bold text-purple-950 shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-stone-900 text-sm leading-snug">{q.question}</h3>
                  </div>

                  <div className="space-y-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      const isCorrect = q.correctIndex === optIdx;
                      let btnStyle = "border-stone-200 bg-white hover:bg-stone-50 text-stone-700";

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-950 font-semibold";
                        } else {
                          btnStyle = "border-stone-200 bg-white text-stone-400";
                        }
                      } else if (isSelected) {
                        btnStyle = "border-purple-600 bg-purple-50 font-semibold text-stone-900";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center gap-3 ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-2 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                      <strong className="text-stone-900">Explanation: </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold text-xs transition shadow-xs cursor-pointer"
                >
                  Submit &amp; Grade Exam
                </button>
              ) : (
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Assessment
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: PORTFOLIO CAPSTONE PROJECT                                        */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Portfolio Capstone</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                Purple-Team Detection Improvement: Detect, Investigate, Improve, Retest
              </h2>
              <p className="text-sm text-stone-500 mt-1">
                Lead an end-to-end purple-team cycle: define the threat-informed scenario, isolate baseline telemetry failures, engineer detection logic, and document validated retest metrics.
              </p>
            </div>

            <div className="prose prose-stone max-w-none space-y-4 text-stone-700 text-sm leading-relaxed">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 text-xs text-stone-800">
                <p className="font-bold text-purple-950">Capstone Project Scenario:</p>
                <p className="mt-1">
                  PrepSpaces uses a fictional cloud identity service and a centralized SIEM. The organization wants to validate its ability to detect an unapproved privileged-role change. The first test produces an audit event but no actionable alert. The team must determine why the detection failed and demonstrate a measurable improvement.
                </p>
              </div>

              <h3 className="text-lg font-bold text-stone-900 pt-2">Project Deliverables (Deliverables A through G)</h3>
              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-xs">Deliverable A: Exercise Charter</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Define the objective, participants, authorized test environment, permitted behavior, scope, exclusions, emergency contacts, and success criteria.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-xs">Deliverable B: Threat-Informed Scenario</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Describe the behavior being represented and provide an appropriate ATT&CK mapping with version information (ATT&CK Enterprise v20.0), rationale, and known limitations.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-xs">Deliverable C: Initial Detection Specification</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Document the required telemetry, detection hypothesis, field mappings, alert conditions, false-positive considerations, and analyst instructions.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-xs">Deliverable D: Baseline Test Results</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Use a synthetic dataset or approved lab. Record the initial behavior, raw records, parsed fields, detection result, alert delivery, and analyst outcome.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-xs">Deliverable E: Root-Cause Analysis and Improvement</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Explain the observed failure, identify the earliest confirmed point of failure, and propose the correction. Preserve evidence of the configuration or analytic change.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-xs">Deliverable F: Retest and Regression Validation</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Repeat the agreed scenario and test at least one benign case. Compare results and explain whether the acceptance criteria have been met.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-xs">Deliverable G: Final Exercise Report</p>
                  <p className="text-xs text-stone-600 mt-1">
                    Include the executive summary, objective, scope, ATT&CK mapping, evidence, measured results, control gaps, remediation, retesting, and outstanding risks.
                  </p>
                </div>
              </div>

              {/* Evaluation Rubric */}
              <h3 className="text-lg font-bold text-stone-900 pt-4">Capstone Evaluation Rubric (100 Points Total)</h3>
              <div className="overflow-x-auto my-2">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                      <th className="p-3 font-semibold">Evaluation Criterion</th>
                      <th className="p-3 font-semibold">Max Points</th>
                      <th className="p-3 font-semibold">Passing Standard (75+ Total)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Exercise Planning, Authorization &amp; Safety</td>
                      <td className="p-3 font-bold text-purple-600">15 pts</td>
                      <td className="p-3 text-stone-600">Complete charter, named roles, clear boundaries, and stop triggers.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Threat-Informed Scenario &amp; ATT&CK Mapping</td>
                      <td className="p-3 font-bold text-purple-600">15 pts</td>
                      <td className="p-3 text-stone-600">ATT&CK v20.0 versioned reference, clear rationale, and limitations stated.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Telemetry &amp; Detection Engineering</td>
                      <td className="p-3 font-bold text-purple-600">20 pts</td>
                      <td className="p-3 text-stone-600">Structured hypothesis, required fields identified, Sigma/pseudocode logic provided.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Root-Cause Analysis &amp; Evidence Quality</td>
                      <td className="p-3 font-bold text-purple-600">15 pts</td>
                      <td className="p-3 text-stone-600">Accurately identifies earliest pipeline failure stage with evidence artifacts.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Collaborative Blue-Team Validation</td>
                      <td className="p-3 font-bold text-purple-600">15 pts</td>
                      <td className="p-3 text-stone-600">Evaluates triage workflow, investigation guidance, and actionable context.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Improvement, Retest &amp; Report Quality</td>
                      <td className="p-3 font-bold text-purple-600">20 pts</td>
                      <td className="p-3 text-stone-600">Before-and-after retest verification, regression testing, and prioritized next steps.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* QUICK REVISION & STANDARDS SHEET                                         */}
        {/* ========================================================================= */}
        <div className="mt-8 rounded-3xl border border-[#e7e3da] bg-white/70 p-6 md:p-8 backdrop-blur-md shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-stone-900">Quick Revision: 12 Key Principles of Purple Teaming</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">1. Red Team Role</span>
              <p className="text-stone-600">Emulate agreed adversary behaviors under authorization to test realistic defense paths.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">2. Blue Team Role</span>
              <p className="text-stone-600">Monitor, detect, investigate, respond, and continuously harden defensive controls.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">3. Purple Team Mission</span>
              <p className="text-stone-600">Collaborate to validate telemetry, improve detection logic, and verify fixes through retesting.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">4. White Team Governance</span>
              <p className="text-stone-600">Coordinate exercise safety, enforce scope boundaries, handle escalations, and decide stop triggers.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">5. ATT&CK v20.0 Alignment</span>
              <p className="text-stone-600">Use versioned behavioral taxonomies (October 2026 release) to inform test design and analytics.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">6. Hypothesis-Driven Engineering</span>
              <p className="text-stone-600">Define behavior, confirm telemetry, write logic, test baselines, deploy, and maintain.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">7. Telemetry Pipeline Diagnosis</span>
              <p className="text-stone-600">Distinguish missing logs, ingestion drops, parsing bugs, rule logic flaws, and workflow gaps.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">8. Safe Adversary Emulation</span>
              <p className="text-stone-600">Reproduce relevant behavior safely using benign actions rather than copying destructive malware.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">9. Non-Negotiable Safety</span>
              <p className="text-stone-600">Obtain written authorization, verify scope, configure emergency contacts, and plan cleanup.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">10. Latency Metrics</span>
              <p className="text-stone-600">Measure evidence-backed detection latency, triage latency, investigation time, and response time.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">11. Actionable Reporting</span>
              <p className="text-stone-600">Document findings, evidence hashes, known limitations, named owners, and specific remediations.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">12. Verification via Retesting</span>
              <p className="text-stone-600">An exercise is complete only when the identical approved scenario is rerun and proves success.</p>
            </div>
          </div>

          {/* Authoritative Resources */}
          <div className="mt-6 pt-4 border-t border-stone-200">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Authoritative Learning Resources</h3>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="https://attack.mitre.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-purple-600 font-medium"
              >
                <span>MITRE ATT&CK Enterprise v20.0 (Oct 2026)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://attack.mitre.org/resources/adversary-emulation-plans/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-purple-600 font-medium"
              >
                <span>MITRE Adversary Emulation Plans</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://www.atomicredteam.io/docs/atomic-red-team"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-purple-600 font-medium"
              >
                <span>Atomic Red Team Documentation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://csrc.nist.gov/glossary/term/red_team_blue_team_approach"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-purple-600 font-medium"
              >
                <span>NIST CSRC Red/Blue Team Approach</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://sigmahq.io/sigma-specification/specification/sigma-rules-specification.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-purple-600 font-medium"
              >
                <span>Sigma Detection Rules Specification</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOOTER NAVIGATION (PREVIOUS & NEXT MODULE)                                */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/pentest-planning")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-purple-300 hover:text-purple-600 transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 21 (Pentest Planning, RoE &amp; Evidence)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/burp-suite")}
            className="flex items-center gap-2 rounded-2xl bg-purple-600 px-5 py-3 text-xs font-bold text-white hover:bg-purple-700 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 23 (Penetration Testing Reports, Risk Ratings &amp; Retesting)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
